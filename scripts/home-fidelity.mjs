import fs from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'/home/admin11/github-projects/scalesight/scalesight-understatement-demo/node_modules/.pnpm/playwright-core@1.63.0/node_modules/playwright-core');
const browser=await chromium.launch({executablePath:'/opt/google/chrome/chrome',args:['--no-sandbox']});
const base=process.env.QA_BASE||'http://localhost:3100';
const dir='docs/stitch-qa';fs.mkdirSync(dir,{recursive:true});
const report={views:[],performance:[],keyboard:{},contrast:[]};
try {
 const context=await browser.newContext();const page=await context.newPage();
 for(const width of [360,390,768,1024,1440]){
  await page.setViewportSize({width,height:900});await page.goto(base);await page.evaluate(()=>document.fonts.ready);
  report.views.push(await page.evaluate(()=>({width:innerWidth,overflow:document.documentElement.scrollWidth>innerWidth,h1:document.querySelectorAll('h1').length,smallTargets:[...document.querySelectorAll('a,button,summary')].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&r.height>0&&(r.width<44||r.height<44);}).map(e=>({text:e.textContent.trim(),width:e.getBoundingClientRect().width,height:e.getBoundingClientRect().height}))})));
  if(width===390||width===1440){await page.evaluate(async()=>{window.scrollTo({top:document.body.scrollHeight,behavior:'instant'});await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})));window.scrollTo({top:0,behavior:'instant'});});}
  if(width===390||width===1440)await page.screenshot({path:`${dir}/home-${width}.png`,fullPage:true});
 }
 await page.setViewportSize({width:1440,height:900});await page.evaluate(()=>document.documentElement.style.zoom='2');
 report.zoom200=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,zoom:getComputedStyle(document.documentElement).zoom}));
 await page.screenshot({path:`${dir}/home-zoom200.png`,fullPage:true});
 await page.evaluate(()=>document.documentElement.style.zoom='');
 await page.setViewportSize({width:390,height:844});await page.goto(base);
 await page.keyboard.press('Tab');report.keyboard.skip=await page.locator('.skip-link').evaluate(e=>e===document.activeElement);
 await page.keyboard.press('Enter');report.keyboard.main=await page.locator('main').evaluate(e=>e===document.activeElement);
 const menu=page.locator('[aria-controls=mobile-navigation]');await menu.focus();await page.keyboard.press('Enter');
 report.keyboard.menuOpen=await menu.getAttribute('aria-expanded')==='true';
 await page.keyboard.press('Tab');report.keyboard.menuLinkFocused=await page.locator('#mobile-navigation a').first().evaluate(e=>e===document.activeElement);
 await page.keyboard.press('Escape');report.keyboard.menuClosed=await page.locator('#mobile-navigation').isHidden();report.keyboard.escapeFocus=await menu.evaluate(e=>e===document.activeElement);
 const faq=page.locator('summary').first();await faq.focus();await page.keyboard.press('Space');report.keyboard.faq=await faq.locator('..').getAttribute('open')!==null;
 await page.emulateMedia({reducedMotion:'reduce'});report.reducedMotion=await page.locator('.primary-button').first().evaluate(e=>getComputedStyle(e).transitionDuration==='0s');
 await context.close();
 for(let run=0;run<3;run++){
  const c=await browser.newContext({viewport:{width:390,height:844}});const p=await c.newPage();const cdp=await c.newCDPSession(p);
  await cdp.send('Network.enable');await cdp.send('Network.emulateNetworkConditions',{offline:false,latency:40,downloadThroughput:500000,uploadThroughput:125000});await cdp.send('Emulation.setCPUThrottlingRate',{rate:4});
  await p.addInitScript(()=>{window.lab={lcp:0,cls:0};new PerformanceObserver(l=>{for(const e of l.getEntries())window.lab.lcp=e.startTime;}).observe({type:'largest-contentful-paint',buffered:true});new PerformanceObserver(l=>{for(const e of l.getEntries())if(!e.hadRecentInput)window.lab.cls+=e.value;}).observe({type:'layout-shift',buffered:true});});
  await p.goto(base,{waitUntil:'networkidle'});await p.waitForTimeout(1800);report.performance.push(await p.evaluate(()=>window.lab));await c.close();
 }
 const luminance=hex=>{const rgb=hex.match(/\w\w/g).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722;};
 for(const [fg,bg] of [['ffffff','4f49f3'],['142139','fafbfe'],['506078','fafbfe'],['bbc7da','0b162b'],['bcbaff','0b162b']]){const a=luminance(fg),b=luminance(bg);report.contrast.push({fg,bg,ratio:(Math.max(a,b)+.05)/(Math.min(a,b)+.05)});}
 report.performanceProfile='Chromium local production; 390×844, 4× CPU slowdown, 4 Mbps down / 1 Mbps up, 40 ms latency, three fresh contexts; lab samples, not field data.';
 fs.writeFileSync(`${dir}/home-report.json`,JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));
 if(report.views.some(v=>v.overflow||v.h1!==1||v.smallTargets.length)||report.zoom200.overflow||Object.values(report.keyboard).some(v=>!v)||report.contrast.some(v=>v.ratio<4.5)||report.performance.some(v=>v.lcp>2500||v.cls>.1))process.exitCode=1;
}finally{await browser.close();}

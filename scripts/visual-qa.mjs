import fs from 'node:fs';
import { createRequire } from 'node:module';
const load = createRequire(import.meta.url);
const { chromium } = load(process.env.PLAYWRIGHT_MODULE || '/home/admin11/github-projects/scalesight/scalesight-understatement-demo/node_modules/.pnpm/playwright-core@1.63.0/node_modules/playwright-core');
const AxeBuilder = load(process.env.AXE_MODULE || '/home/admin11/github-projects/scalesight/scalesight-understatement-demo/node_modules/.pnpm/@axe-core+playwright@4.13.0_playwright-core@1.63.0/node_modules/@axe-core/playwright').default;
const manifest = load('../docs/content-manifest.json');
const base = process.env.QA_BASE || 'http://localhost:3000';
fs.mkdirSync('/tmp/scalesight-pdf-qa', { recursive: true });
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH || '/opt/google/chrome/chrome',args:['--no-sandbox']});
 const context=await browser.newContext(); const page=await context.newPage(); const report={views:[],errors:[],keyboard:{}};
 page.on('pageerror',e=>report.errors.push(String(e)));
 for(const route of Object.keys(manifest.routes)){
  for(const width of [360,390,768,1024,1440]){
   await page.setViewportSize({width,height:1000});
   await page.goto(base+route); await page.waitForTimeout(200);
   const metrics=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,h1:document.querySelectorAll('h1').length,images:[...document.querySelectorAll('main img,main svg')].length}));
   report.views.push({route,width,...metrics});
   if(width===390||width===1440) await page.screenshot({path:`/tmp/scalesight-pdf-qa/${route.replaceAll('/','')||'home'}-${width}.png`,fullPage:true});
   if(width===1440)report.views.at(-1).axe=(await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze()).violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}));
  }
 }
 fs.writeFileSync('/tmp/scalesight-pdf-qa/report.json',JSON.stringify(report,null,2));
 await page.setViewportSize({width:390,height:844});await page.goto(base);
 const menu=page.locator('button[aria-controls=mobile-navigation]');await menu.focus();await page.keyboard.press('Enter');report.keyboard.menuOpen=await menu.getAttribute('aria-expanded')==='true';await page.keyboard.press('Escape');report.keyboard.menuClosed=await menu.getAttribute('aria-expanded')==='false';
 const faq=page.locator('summary').first();await faq.focus();await page.keyboard.press('Enter');report.keyboard.faqOpened=await faq.locator('..').getAttribute('open')!==null;
 await page.goto(base+'/contact?intent=partner');await page.getByRole('button',{name:'Send planning enquiry'}).focus();await page.keyboard.press('Enter');report.keyboard.validation=await page.getByText('Enter your name.',{exact:true}).count()===2;report.keyboard.partnerLabel=await page.getByRole('textbox',{name:'Company',exact:false}).count()>0;
 await page.route('**/api/contact',route=>route.fulfill({status:200,contentType:'application/json',body:JSON.stringify({ok:true})}));
 await page.getByLabel('Name',{exact:false}).fill('PDF QA');await page.getByLabel('Work email').fill('qa@example.com');await page.getByRole('textbox',{name:'Company',exact:false}).fill('QA');await page.getByRole('button',{name:'Send planning enquiry'}).click();report.keyboard.success=await page.getByRole('heading',{name:manifest.approved.find(x=>x.startsWith('Thanks -'))}).isVisible();
 fs.writeFileSync('/tmp/scalesight-pdf-qa/report.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));await browser.close();
 if(report.errors.length||report.views.some(x=>x.overflow||x.h1!==1||x.images||x.axe?.length)||Object.values(report.keyboard).some(x=>!x))process.exitCode=1;
})();

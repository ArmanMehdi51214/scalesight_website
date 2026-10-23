// Capture only a reviewed, single-decision selector; never a full dashboard.
// Usage: DEMO_URL=<approved demo URL> DECISION_SELECTOR=<selector> node scripts/screens/capture-demo.mjs
import { createRequire } from 'node:module';
import fs from 'node:fs';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || '/home/admin11/github-projects/scalesight/scalesight-understatement-demo/node_modules/.pnpm/playwright-core@1.63.0/node_modules/playwright-core');
const browser = await chromium.launch({executablePath:'/opt/google/chrome/chrome',args:['--no-sandbox']});
try {
 const page=await browser.newPage({viewport:{width:1440,height:900},deviceScaleFactor:2});
 if(!process.env.DEMO_URL) throw new Error('DEMO_URL required');
 await page.goto(process.env.DEMO_URL,{waitUntil:'networkidle',timeout:45000});
 await page.evaluate(()=>{
  const mask=()=>{
   document.title='';
   const walk=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
   while(walk.nextNode()) walk.currentNode.textContent=walk.currentNode.textContent.replace(/fishwife/gi,'Example brand');
   document.querySelectorAll('img,svg,canvas,[class*="logo"],[class*="wordmark"],a[href^="http"]').forEach(e=>{e.style.visibility='hidden';});
   document.querySelectorAll('*').forEach(e=>{
    for(const name of ['title','aria-label','alt','data-tooltip']) if(e.hasAttribute(name))e.setAttribute(name,e.getAttribute(name).replace(/fishwife/gi,'Example brand'));
   });
  };
  mask();
 });
 if(!process.env.DECISION_SELECTOR) { console.log(await page.getByText('ACCEPT DELAY',{exact:true}).evaluate(e=>{const a=[];for(let p=e;p&&a.length<4;p=p.parentElement)a.push({tag:p.tagName,classes:p.className,text:p.innerText.slice(0,200)});return a;})); }
 else {
  let target=page.locator(process.env.DECISION_SELECTOR);
  if(await target.count()!==1)throw new Error('Choose exactly one decision');
  await target.evaluate(e=>{
   const pill=document.createElement('div');
   pill.textContent='Illustrative · synthetic data';
   Object.assign(pill.style,{display:'inline-block',padding:'6px 12px',marginBottom:'16px',borderRadius:'999px',background:'#eeedff',color:'#101d35',fontSize:'12px',fontWeight:'600'});
   const wrap=document.createElement('div');
   wrap.setAttribute('data-capture','decision');
   Object.assign(wrap.style,{padding:'24px',background:'#ffffff'});
   e.before(wrap); wrap.append(pill,e);
  });
  target=page.locator('[data-capture=decision]');
  const text=await target.innerText();
  if(/fishwife|alec|understatement/i.test(text))throw new Error('Brand masking failed');
  if(!/illustrative (?:· synthetic )?data/i.test(text))throw new Error('Crop must retain the illustrative data disclosure');
  fs.mkdirSync('/tmp/scalesight-capture',{recursive:true});
  await target.screenshot({path:'/tmp/scalesight-capture/decision.png'});
  const sharp=require('../../node_modules/.pnpm/sharp@0.34.5/node_modules/sharp');
  const {createHash}=await import('node:crypto');
  const output='public/images/planning-decision.webp';
  const source=await sharp('/tmp/scalesight-capture/decision.png').metadata();
  // Remove the adjacent panel edge at the crop boundary.
  await sharp('/tmp/scalesight-capture/decision.png').extract({left:0,top:0,width:source.width,height:source.height-12}).webp({quality:88}).toFile(output);
  const metadata=await sharp(output).metadata();
  fs.writeFileSync('docs/decision-image.json',JSON.stringify({file:output,width:metadata.width,height:metadata.height,text,sha256:createHash('sha256').update(fs.readFileSync(output)).digest('hex'),viewport:{width:1440,height:900,deviceScaleFactor:2},selector:process.env.DECISION_SELECTOR},null,2)+'\n');
  console.log('Saved single-decision image and text/hash provenance.');
 }
} finally {await browser.close();}

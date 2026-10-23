import fs from 'node:fs';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
const load=createRequire(import.meta.url);
const {chromium}=load(process.env.PLAYWRIGHT_MODULE || '/home/admin11/github-projects/scalesight/scalesight-understatement-demo/node_modules/.pnpm/playwright-core@1.63.0/node_modules/playwright-core');
const manifest=load('../docs/content-manifest.json');
const base=process.env.QA_BASE || 'http://localhost:3100';
const pdf=execFileSync('pdftotext',['-raw','docs/ScaleSight_Website_Revamp_Developer_Brief_Wahib.pdf','-'],{encoding:'utf8'}).replace(/\s+/g,' ');
const report={pages:[],links:[],reflow:[],checks:{},errors:[]};
const browser=await chromium.launch({executablePath:process.env.CHROME_PATH || '/opt/google/chrome/chrome',args:['--no-sandbox']});
const context=await browser.newContext();const page=await context.newPage();
page.on('pageerror',e=>report.errors.push(String(e)));
const links=new Set();
try {
 for(const route of Object.keys(manifest.routes)){
  const response=await page.goto(base+route);
  const data=await page.evaluate(()=>({title:document.title,description:document.querySelector('meta[name=description]')?.content,canonical:document.querySelector('link[rel=canonical]')?.href,og:document.querySelector('meta[property="og:url"]')?.content,links:[...document.querySelectorAll('a[href]')].map(x=>x.getAttribute('href'))}));
  report.pages.push({route,status:response.status(),titleMatchesPDF:pdf.includes(data.title),descriptionMatchesPDF:pdf.includes(data.description),canonicalCorrect:data.canonical===`https://scalesight.org${route==='/'?'/':route}`,ogCorrect:new URL(data.og).href===new URL(`https://scalesight.org${route}`).href});
  for(const href of data.links)if(href.startsWith('/'))links.add(href);
  for(const width of [320,512,720]){
   await page.setViewportSize({width,height:900});
   report.reflow.push({route,width,overflow:await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)});
  }
 }
 for(const href of links){
  const url=new URL(href,base);const response=await context.request.get(url.href);let anchorExists=true;
  if(url.hash && response.ok()){
   await page.goto(url.href);anchorExists=await page.locator(`[id="${decodeURIComponent(url.hash.slice(1))}"]`).count()>0;
  }
  report.links.push({href,status:response.status(),anchorExists,finalPath:new URL(response.url()).pathname});
 }
 for(const intent of ['planning','pilot','partner','invalid']){
  await page.goto(`${base}/contact?intent=${intent}`);
  report.checks[`intent-${intent}`]=await page.locator('input[name=intent]').inputValue()===(intent==='invalid'?'planning':intent);
 }
 await page.goto(base+'/contact?intent=partner');
 report.checks.placeholders=JSON.stringify(await page.locator('input[placeholder],textarea[placeholder]').evaluateAll(es=>es.map(e=>e.getAttribute('placeholder'))))===JSON.stringify(manifest.placeholders);
 let submissions=0;let mode='failure';let sent;
 await page.route('**/api/contact',async route=>{submissions++;sent=route.request().postDataJSON();await new Promise(resolve=>setTimeout(resolve,350));await route.fulfill({status:mode==='failure'?503:200,contentType:'application/json',body:JSON.stringify({ok:mode!=='failure'})});});
 await page.locator('#name').fill('QA');await page.locator('#email').fill('invalid');await page.locator('#brand').fill('Example');await page.getByRole('button',{name:'Send planning enquiry'}).click();
 report.checks.invalidEmailBlocked=submissions===0&&await page.locator('#email-error').innerText()==='Enter a valid email address.';
 await page.locator('#email').fill('qa@example.com');await page.locator('#decision').fill('Test content retained');
 await page.getByRole('button',{name:'Send planning enquiry'}).click();
 report.checks.sendingDisabled=await page.getByRole('button',{name:'Sending…'}).isDisabled();
 await page.getByText('We could not send your enquiry. Please try again or email us directly.',{exact:true}).waitFor();
 report.checks.failureRetainsValues=await page.locator('#decision').inputValue()==='Test content retained'&&submissions===1;
 report.checks.failureDoesNotShowBooking=await page.getByRole('button',{name:'Choose a 30-minute conversation'}).count()===0;
 mode='success';await page.getByRole('button',{name:'Send planning enquiry'}).click();
 await page.getByRole('heading',{name:manifest.approved.find(s=>s.startsWith('Thanks -'))}).waitFor();
 report.checks.successAfterAcceptance=submissions===2&&sent.intent==='partner';
 report.checks.noPrematureBooking=await page.getByText('Meeting booked',{exact:true}).count()===0;
 await page.route('https://assets.calendly.com/**',route=>route.abort());
 const bookingButton=page.getByRole('button',{name:'Choose a 30-minute conversation'});
 if(await bookingButton.count()){
  await bookingButton.click();await page.getByText(manifest.approved.find(s=>s.startsWith('Your enquiry has been received. The booking')),{exact:false}).waitFor();
  report.checks.calendarFallback=await page.getByRole('link',{name:'Open the booking page (opens in a new tab)'}).isVisible();
  // Ignore forged confirmation messages from another origin.
  await page.evaluate(()=>window.dispatchEvent(new MessageEvent('message',{origin:'https://example.com',data:{event:'calendly.event_scheduled'}})));
  report.checks.rejectsUntrustedBooking=await page.getByText('Meeting booked',{exact:true}).count()===0;
 }else report.checks.calendarFallback=await page.getByText(manifest.approved.find(s=>s.startsWith('Your enquiry has been received. The booking')),{exact:false}).isVisible();
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto(base);
 report.checks.reducedMotion=await page.locator('.hero-decision').evaluateAll(es=>es.every(e=>getComputedStyle(e).animationName==='none'));
 await page.setViewportSize({width:390,height:844});
 await page.locator('button[aria-controls=mobile-navigation]').click();await page.locator('#mobile-navigation').getByRole('link',{name:'Examples',exact:true}).click();
 await page.waitForURL('**/examples');report.checks.menuClosesAfterSelection=await page.locator('#mobile-navigation').isHidden();
 const nojs=await browser.newContext({javaScriptEnabled:false});const plain=await nojs.newPage();await plain.goto(base);
 report.checks.noJSBriefVisible=await plain.locator('.hero-decision').count()===3 && await plain.locator('.hero-decision').first().isVisible();await nojs.close();
}finally{
 fs.mkdirSync('/tmp/scalesight-final-audit',{recursive:true});fs.writeFileSync('/tmp/scalesight-final-audit/functional.json',JSON.stringify(report,null,2));await browser.close();
}
console.log(JSON.stringify(report,null,2));
if(report.errors.length||Object.values(report.checks).some(x=>!x)||report.pages.some(p=>p.status!==200||!p.titleMatchesPDF||!p.descriptionMatchesPDF||!p.canonicalCorrect||!p.ogCorrect)||report.reflow.some(v=>v.overflow)||report.links.some(l=>l.status!==200||!l.anchorExists))process.exitCode=1;

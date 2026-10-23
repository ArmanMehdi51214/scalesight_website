import fs from 'node:fs';
import { createRequire } from 'node:module';
const load = createRequire(import.meta.url);
const { chromium } = load(process.env.PLAYWRIGHT_MODULE || '/home/admin11/github-projects/scalesight/scalesight-understatement-demo/node_modules/.pnpm/playwright-core@1.63.0/node_modules/playwright-core');
const AxeBuilder = load(process.env.AXE_MODULE || '/home/admin11/github-projects/scalesight/scalesight-understatement-demo/node_modules/.pnpm/@axe-core+playwright@4.13.0_playwright-core@1.63.0/node_modules/@axe-core/playwright').default;
const base = process.env.QA_BASE || 'http://localhost:3000';
const routes = ['/', '/how-we-work', '/30-day-planning-pilot', '/examples', '/about', '/partners', '/contact', '/privacy', '/design-system', '/audit-missing-page'];
const report = { views: [], links: [], checks: {}, errors: [], accessibility: [] };
const browser = await chromium.launch({headless:true, executablePath:process.env.CHROME_PATH || '/opt/google/chrome/chrome', args:['--no-sandbox']});
const context = await browser.newContext();
const page = await context.newPage();
const links = new Set();
page.on('pageerror', error => report.errors.push(String(error)));
const output = process.env.QA_OUTPUT || '/tmp/scalesight-site-audit';
fs.mkdirSync(output,{recursive:true});
if(process.env.QA_INTERACTIONS_ONLY==='true') Object.assign(report,JSON.parse(fs.readFileSync(`${output}/report.json`,'utf8')));
report.checks={};
try {
 for (const route of process.env.QA_INTERACTIONS_ONLY==='true'?[]:routes) {
  for (const width of [320,360,390,512,768,1024,1440,1920]) {
   await page.setViewportSize({width,height:1000});
   const response = await page.goto(base + route);
   await page.evaluate(() => document.fonts.ready);
   await page.locator('footer img').scrollIntoViewIfNeeded();
   await page.evaluate(async () => {await Promise.all([...document.images].map(img => img.decode().catch(()=>{})));window.scrollTo(0,0);});
   const data = await page.evaluate(() => ({
    overflow: document.documentElement.scrollWidth > innerWidth,
    h1: document.querySelectorAll('h1').length,
    brokenImages: [...document.images].filter(img=>!img.naturalWidth||!img.getAttribute('alt')).map(img=>img.getAttribute('src')),
    links: [...document.querySelectorAll('a[href]')].map(a=>a.getAttribute('href')).filter(href=>href.startsWith('/')||href.startsWith('#')),
    title: document.title,
    description: !!document.querySelector('meta[name="description"]')?.content,
   }));
   data.links.forEach(href=>links.add(href.startsWith('#') ? `${route}${href}` : href));delete data.links;
   report.views.push({route,width,status:response.status(),...data});
   if (width===390||width===1440) await page.screenshot({path:`${output}/${route.replaceAll('/','')||'home'}-${width}.png`,fullPage:true});
   if (width===1440 || (route==='/contact' && width===390)) {
    const result=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();
    report.accessibility.push({route,width,violations:result.violations.map(v=>({id:v.id,targets:v.nodes.map(n=>n.target)}))});
   }
  }
 }
 for (const href of links) {
  const url = new URL(href,base);
  const response = await context.request.get(url.href);
  let anchor = true;
  if (url.hash && response.ok()) {
   await page.goto(url.href);
   anchor = await page.locator(`[id="${decodeURIComponent(url.hash.slice(1))}"]`).count()===1;
  }
  report.links.push({href,status:response.status(),anchor});
 }
 for (const route of routes.slice(0,-1)) {
  await page.setViewportSize({width:390,height:844});await page.goto(base+route);
  report.checks[`anchors:${route}`]=await page.evaluate(()=>[...document.querySelectorAll('a[href^="#"]')].every(a=>document.getElementById(decodeURIComponent(a.hash.slice(1)))));
  const menu=page.locator('button[aria-controls=mobile-navigation]');
  await menu.focus();await page.keyboard.press('Enter');
  const open=await menu.getAttribute('aria-expanded')==='true';
  await page.keyboard.press('Escape');
  report.checks[`menu:${route}`]=open&&await menu.getAttribute('aria-expanded')==='false';
 }
 await page.goto(base);const faq=page.locator('summary').first();await faq.focus();await page.keyboard.press('Enter');report.checks.keyboardFAQ=await faq.locator('..').getAttribute('open')!==null;
 // Test scheduling without creating an actual booking.
 await page.route('https://assets.calendly.com/assets/external/widget.js',route=>route.fulfill({contentType:'application/javascript',body:`window.Calendly={initInlineWidget:function(options){options.parentElement.dataset.bookingUrl=options.url;options.parentElement.dataset.resize=String(options.resize);var frame=document.createElement('iframe');frame.src='https://calendly.com/audit-widget';options.parentElement.appendChild(frame);}};`}));
 await page.route('https://calendly.com/audit-widget',route=>route.fulfill({contentType:'text/html',body:'<!doctype html><html lang="en"><title>Booking test</title><body><h1>Choose a time</h1></body></html>'}));
 await page.goto(base+'/contact');
 await page.locator('.inline-booking-widget iframe').waitFor();
 report.checks.noEnquiryForm=await page.locator('form').count()===0;
 report.checks.inlineWidget=await page.locator('.inline-booking-widget iframe').getAttribute('title')==='Book a 30-minute conversation with ScaleSight';
 report.checks.brandColor=await page.locator('.inline-booking-widget').evaluate(el=>new URL(el.dataset.bookingUrl).searchParams.get('primary_color')==='4f49f3');
 report.checks.stableEmbedHeight=await page.locator('.inline-booking-widget').getAttribute('data-resize')==='false';
 report.checks.bookingFallback=await page.getByRole('link',{name:'Open booking page (opens in a new tab)'}).isVisible();
 await page.setViewportSize({width:320,height:844});report.checks.calendarResponsive=await page.evaluate(()=>document.documentElement.scrollWidth===innerWidth);
 await page.goto(base+'/about');await page.goto(base+'/contact');await page.locator('.inline-booking-widget iframe').waitFor();
 report.checks.singleWidgetAfterNavigation=await page.locator('.inline-booking-widget iframe').count()===1;
 await page.unroute('https://assets.calendly.com/assets/external/widget.js');
 await page.route('https://assets.calendly.com/assets/external/widget.js',route=>route.abort());
 await page.reload();await page.getByText('The calendar could not load here. Open the booking page to choose a time.',{exact:true}).waitFor();
 report.checks.blockedEmbedFallback=await page.getByRole('link',{name:'Open booking page (opens in a new tab)'}).isVisible();
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto(base);report.checks.reducedMotion=await page.evaluate(()=>getComputedStyle(document.documentElement).scrollBehavior==='auto');
 const nojs=await browser.newContext({javaScriptEnabled:false});const plain=await nojs.newPage();await plain.goto(base);report.checks.noJSHero=await plain.locator('#hero-brief-title').isVisible();await nojs.close();
} finally {
 fs.writeFileSync(`${output}/report.json`,JSON.stringify(report,null,2));await browser.close();
}
const failures={views:report.views.filter(v=>v.status!==(v.route==='/audit-missing-page'?404:200)||v.overflow||v.h1!==1||v.brokenImages.length||!v.description),links:report.links.filter(l=>l.status!==200||!l.anchor),checks:Object.entries(report.checks).filter(([,ok])=>!ok),accessibility:report.accessibility.filter(v=>v.violations.length),errors:report.errors};
console.log(JSON.stringify({viewCount:report.views.length,linkCount:report.links.length,failures},null,2));
if(Object.values(failures).some(list=>list.length))process.exitCode=1;

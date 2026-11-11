import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.QA_PLAYWRIGHT_MODULE || "playwright");
const phase = process.argv[2] || "after";
if (!["before", "after"].includes(phase)) throw new Error("Use before or after.");
const base = process.env.QA_BASE_URL || "http://127.0.0.1:3100";
const routes = ["/", "/planning-workspace", "/how-we-work", "/examples", "/30-day-planning-pilot", "/about", "/contact", "/privacy"];
const widths = [360, 390, 768, 820, 1024, 1180, 1440, 1920];
const output = path.resolve("qa", phase);
await fs.mkdir(output, { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.QA_BROWSER_PATH, headless: true, args: ["--no-sandbox", "--disable-dev-shm-usage"] });
const context = await browser.newContext({ deviceScaleFactor: 1, reducedMotion: "reduce" });
const page = await context.newPage();
const report = { phase, base, widths, routes, pages: [], interactions: [], errors: [], notes: ["Line lengths are estimates using the font's measured alphabet, not claims about exact character wraps. Short card/caption text is advisory.", "Alignment checks use structural roles: shared containers, section introductions and proof badge/caption edges; deliberate centered and nested reading layouts are excluded.", "Tap checks include all visible links, buttons, summaries and checkbox labels. Hidden dialogs/skip links are checked in their open/focused state."] };
page.on("pageerror", error => report.errors.push(error.message));

async function measure() {
  return page.evaluate(() => {
    const viewport = document.documentElement.clientWidth;
    const rect = el => el.getBoundingClientRect();
    const visible = el => { const r = rect(el); const s = getComputedStyle(el); return r.width > 0 && r.height > 0 && s.visibility !== "hidden" && s.display !== "none"; };
    const label = el => `${el.tagName.toLowerCase()}${el.id ? `#${el.id}` : ""}${typeof el.className === "string" ? "." + el.className.trim().split(/\s+/).join(".") : ""}`;
    const issue = (el, extra = {}) => ({ element: label(el), text: el.textContent.trim().replace(/\s+/g, " ").slice(0, 100), ...extra });
    const nodes = [...document.querySelectorAll("body *")].filter(visible);
    const overflow = nodes.filter(el => {
      if (el.closest(".full-image-scroll, .sr-only, .skip-link, nextjs-portal")) return false;
      const r = rect(el);
      // Image crops intentionally overflow their own clipping viewport.
      if (el.matches(".proof-img") && el.closest(".proof-viewport")) return false;
      return r.right > viewport + 1 || r.left < -1;
    }).map(el => issue(el, { left: rect(el).left, right: rect(el).right }));
    const imagesWithoutSpace = [...document.images].filter(el => {
      const s = getComputedStyle(el);
      return !(Number(el.getAttribute("width")) > 0 && Number(el.getAttribute("height")) > 0) && s.aspectRatio === "auto" && getComputedStyle(el.parentElement).aspectRatio === "auto";
    }).map(el => ({ element: label(el), src: el.getAttribute("src") }));
    const taps = [...document.querySelectorAll("a[href],button,summary,.channel-options label")].filter(el => visible(el) && !el.closest(".skip-link, nextjs-portal")).filter(el => { const r = rect(el); return r.width < 43.9 || r.height < 43.9; }).map(el => issue(el, { width: rect(el).width, height: rect(el).height }));
    const container = document.querySelector(".header-inner");
    const expected = rect(container);
    const alignment = [...document.querySelectorAll(".container")].filter(visible).filter(el => Math.abs(rect(el).left - expected.left) > 1 || Math.abs(rect(el).right - expected.right) > 1).map(el => issue(el, { expectedLeft: expected.left, left: rect(el).left, right: rect(el).right }));
    for (const el of document.querySelectorAll(".section-heading,.showcase-copy,.hero-copy")) {
      const children = [...el.children].filter(n => n.matches(".eyebrow,h1,h2,.section-copy,.hero-actions"));
      const centered = getComputedStyle(el).textAlign === "center";
      if (!centered) for (const child of children) if (Math.abs(rect(child).left - rect(el).left) > 1) alignment.push(issue(child, { expectedLeft: rect(el).left, left: rect(child).left }));
    }
    for (const el of document.querySelectorAll(".proof")) for (const child of el.querySelectorAll(":scope > .proof-topline,:scope > figcaption")) if (Math.abs(rect(child).left - rect(el).left) > 1) alignment.push(issue(child));
    const lineLengths = [];
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    for (const el of document.querySelectorAll("main p,main dd,main li")) {
      if (!visible(el) || el.textContent.trim().length < 56 || el.closest("dialog")) continue;
      // Inspect actual text blocks, rather than the width of their list/card wrapper.
      if (el.matches("li") && el.querySelector("p,h3,a")) continue;
      const s = getComputedStyle(el); ctx.font = `${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
      const average = ctx.measureText("abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ").width / 53;
      const available = rect(el).width - parseFloat(s.paddingLeft) - parseFloat(s.paddingRight);
      const characters = Math.round(available / average);
      if (characters > 80 || characters < 28) lineLengths.push(issue(el, { estimatedCharacters: characters, advisory: true }));
    }
    const cards = [];
    for (const grid of document.querySelectorAll(".question-grid,.evidence-grid,.option-grid,.storyboard,.process-compact,.comparison-grid,.responsibility-grid,.example-tiles")) {
      const children = [...grid.children].filter(visible);
      const rows = new Map();
      for (const child of children) { const top = Math.round(rect(child).top); const row = rows.get(top) || []; row.push(child); rows.set(top, row); }
      for (const row of rows.values()) if (row.length > 1) {
        const heights = row.map(el => rect(el).height);
        const padding = row.map(el => { const s = getComputedStyle(el); return [s.paddingTop,s.paddingRight,s.paddingBottom,s.paddingLeft].join(" "); });
        if (Math.max(...heights) - Math.min(...heights) > 1 || new Set(padding).size > 1) cards.push(issue(grid, { heights, padding }));
      }
    }
    const header = document.querySelector(".site-header");
    const headerHeight = rect(header).height;
    const targets = [...document.querySelectorAll("main[id],main [id]")].filter(el => visible(el) && !el.matches("input,textarea,dialog,form") && !el.closest("dialog"));
    const anchors = targets.filter(el => parseFloat(getComputedStyle(el).scrollMarginTop) < headerHeight + 8).map(el => issue(el, { margin: getComputedStyle(el).scrollMarginTop, headerHeight }));
    return { pageOverflow: document.documentElement.scrollWidth > viewport, overflow, imagesWithoutSpace, taps, alignment, lineLengths, cards, anchors, h1: document.querySelectorAll("h1").length, headerHeight, content: document.querySelector("main").innerText, links: [...document.querySelectorAll("a[href]")].map(el => [el.textContent.trim(), el.getAttribute("href")]), metadata: [...document.querySelectorAll("title,meta[name=description],meta[name=robots],link[rel=canonical]")].map(el => el.outerHTML) };
  });
}
try {
  // Inactive partner route must retain its existing redirect.
  const partner = await page.request.get(`${base}/partners`, { maxRedirects: 0 });
  report.partners = { status: partner.status(), location: partner.headers().location || null };
  if (partner.ok()) routes.push("/partners");
  for (const width of widths) {
    await page.setViewportSize({ width, height: width < 768 ? 844 : 1000 });
    for (const route of routes) {
      const response = await page.goto(base + route, { waitUntil: "networkidle" });
      await page.evaluate(async () => { await document.fonts.ready; for (const img of document.querySelectorAll("img[loading=lazy]")) if (!img.closest("dialog")) img.loading = "eager"; });
      await page.waitForFunction(() => [...document.images].filter(img => !img.closest("dialog")).every(img => img.complete && img.naturalWidth > 0));
      await page.evaluate(() => Promise.all([...document.images].filter(img => !img.closest("dialog")).map(img => img.decode())));
      const data = await measure();
      const screenshot = `${route === "/" ? "home" : route.slice(1)}-${width}.png`;
      await page.screenshot({ path: path.join(output, screenshot), fullPage: true, animations: "disabled" });
      report.pages.push({ route, width, status: response.status(), screenshot, ...data });
      console.log(`${phase} ${route} ${width}: overflow=${data.pageOverflow} taps=${width < 768 ? data.taps.length : "desktop"} align=${data.alignment.length} cards=${data.cards.length} anchors=${data.anchors.length}`);
    }
  }
  for (const width of [360, 390, 768, 820, 1024, 1180, 1440, 1920]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto(base + "/examples", { waitUntil: "networkidle" });
    const toggle = page.getByRole("button", { name: "Open navigation" });
    if (await toggle.isVisible()) {
      await toggle.click();
      const data = await measure();
      const bounds = await page.locator("#mobile-navigation").boundingBox();
      report.interactions.push({ width, test: "expanded navigation", passed: !data.pageOverflow && !data.taps.length && bounds.y + bounds.height <= 844 });
      await page.screenshot({ path: path.join(output, `menu-${width}.png`), fullPage: true });
      await page.keyboard.press("Escape");
      // Escape is handled by the navigation when focus is inside it.
      if (await page.locator("#mobile-navigation").count()) { await page.locator("#mobile-navigation a").first().focus(); await page.keyboard.press("Escape"); }
      report.interactions.push({ width, test: "menu Escape focus return", passed: !(await page.locator("#mobile-navigation").count()) && await toggle.evaluate(el => el === document.activeElement) });
    }
    const open = page.locator(".proof-open").first();
    await open.focus(); await page.keyboard.press("Enter");
    const close = page.locator("dialog[open] .close-dialog");
    const bounds = await close.boundingBox();
    report.interactions.push({ width, test: "lightbox close target", passed: !!bounds && bounds.width >= 44 && bounds.height >= 44 && bounds.y >= 0 && bounds.y + bounds.height <= 844 });
    await page.screenshot({ path: path.join(output, `lightbox-${width}.png`), fullPage: true });
    await page.keyboard.press("Tab");
    const trapped = await page.evaluate(() => !!document.activeElement.closest("dialog[open]"));
    await page.keyboard.press("Escape");
    report.interactions.push({ width, test: "lightbox keyboard and focus return", passed: trapped && await open.evaluate(el => el === document.activeElement) });
    for (const hash of ["supply-timing", "production-mix", "sample-brief"]) {
      await page.evaluate(id => { document.getElementById(id).scrollIntoView(); }, hash);
      const passed = await page.evaluate(id => document.getElementById(id).getBoundingClientRect().top >= document.querySelector(".site-header").getBoundingClientRect().bottom + 7, hash);
      report.interactions.push({ width, test: `anchor #${hash}`, passed });
    }
  }
  report.summary = {
    pages: report.pages.length,
    badStatus: report.pages.filter(p => p.status !== 200).length,
    horizontalOverflow: report.pages.filter(p => p.pageOverflow || p.overflow.length).length,
    imagesWithoutSpace: report.pages.reduce((n,p) => n + p.imagesWithoutSpace.length, 0),
    mobileSmallTapTargets: report.pages.filter(p => p.width < 768).reduce((n,p) => n + p.taps.length, 0),
    alignment: report.pages.reduce((n,p) => n + p.alignment.length, 0),
    unequalCards: report.pages.reduce((n,p) => n + p.cards.length, 0),
    anchorRisks: report.pages.reduce((n,p) => n + p.anchors.length, 0),
    failedInteractions: report.interactions.filter(i => !i.passed).length,
    runtimeErrors: report.errors.length,
    lineLengthAdvisories: report.pages.reduce((n,p) => n + p.lineLengths.length, 0),
  };
  if (phase === "after") {
    const before = JSON.parse(await fs.readFile("qa/before/report.json", "utf8"));
    report.preservation = report.pages.map(p => {
      const old = before.pages.find(b => b.route === p.route && b.width === p.width);
      return { route: p.route, width: p.width, content: old?.content === p.content, links: JSON.stringify(old?.links) === JSON.stringify(p.links), metadata: JSON.stringify(old?.metadata) === JSON.stringify(p.metadata) };
    });
  }
  await fs.writeFile(path.join(output, "report.json"), JSON.stringify(report, null, 2) + "\n");
  console.log(JSON.stringify(report.summary, null, 2));
  if (phase === "after" && (Object.entries(report.summary).some(([key, value]) => !["pages", "lineLengthAdvisories"].includes(key) && value > 0) || report.preservation.some(p => !p.content || !p.links || !p.metadata))) process.exitCode = 1;
} finally { await browser.close(); }

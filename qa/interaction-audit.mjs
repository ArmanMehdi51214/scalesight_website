import fs from "node:fs/promises";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.QA_PLAYWRIGHT_MODULE || "playwright");
const AxeBuilder = require(process.env.QA_AXE_MODULE || "@axe-core/playwright").default;
const base = process.env.QA_BASE_URL || "http://127.0.0.1:3100";
const routes = ["/", "/planning-workspace", "/how-we-work", "/examples", "/30-day-planning-pilot", "/about", "/contact", "/privacy"];
const report = { accessibility: [], interactions: [], runtimeErrors: [] };
const browser = await chromium.launch({ executablePath: process.env.QA_BROWSER_PATH, args: ["--no-sandbox", "--disable-dev-shm-usage"] });
let context = await browser.newContext({ reducedMotion: "reduce" });
let page = await context.newPage();
page.on("pageerror", error => report.runtimeErrors.push(error.message));
const check = (test, passed, details = {}) => report.interactions.push({ test, passed, ...details });
try {
  for (const width of process.argv.includes("--forms-only") ? [] : [390, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of routes) {
      await page.goto(base + route, { waitUntil: "networkidle" });
      await page.evaluate(async () => {
        await document.fonts.ready;
        const images = [...document.images].filter(img => !img.closest("dialog"));
        for (const img of images) img.loading = "eager";
        await Promise.all(images.map(img => img.decode()));
      });
      const geometry = await page.locator(".proof-img").evaluateAll(images => images.map(img => ({ src: img.getAttribute("src"), width: img.getBoundingClientRect().width, height: img.getBoundingClientRect().height })));
      check("proof images have rendered area", geometry.every(img => img.width > 0 && img.height > 0), { route, width, geometry });
      if (route === "/") {
        await page.locator(".hero-copy").screenshot({ path: `qa/after/home-hero-${width}.png` });
      }
      if (["/planning-workspace", "/examples"].includes(route)) {
        await page.locator(".proof").first().screenshot({ path: `qa/after/proof-${route.slice(1)}-${width}.png` });
      }
      const result = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
      report.accessibility.push({ width, route, violations: result.violations.map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.map(n => ({ target: n.target, summary: n.failureSummary })) })) });
      console.log(`Accessibility ${route} ${width}: ${result.violations.length} violations`);
    }
  }
  for (const width of [360, 390, 768, 820, 1024, 1180, 1440, 1920]) {
    await context.close();
    context = await browser.newContext({ reducedMotion: "reduce" });
    page = await context.newPage();
    page.on("pageerror", error => report.runtimeErrors.push(error.message));
    await page.setViewportSize({ width, height: 844 });
    await page.goto(base + "/contact?intent=pilot", { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    const inputsBefore = await page.locator(".form-field input").evaluateAll(els => els.map(el => ({ id: el.id, top: el.getBoundingClientRect().top })));
    await page.getByRole("button", { name: "Send planning enquiry" }).click();
    check("required fields announced", await page.locator(".field-error[role=alert]").count() >= 3, { width });
    const inputsAfter = await page.locator(".form-field input").evaluateAll(els => els.map(el => ({ id: el.id, top: el.getBoundingClientRect().top })));
    // Validation scrolls to the first invalid field. Compare relative field positions.
    check("field errors preserve relative input positions", inputsBefore.every((el, i) => Math.abs((el.top - inputsBefore[0].top) - (inputsAfter[i].top - inputsAfter[0].top)) < 1), { width, inputsBefore, inputsAfter });
    const hidden = await page.locator('[name="companyContact"]').evaluate(el => el.getBoundingClientRect().width === 0 && el.getBoundingClientRect().height === 0 && el.tabIndex === -1);
    check("honeypot stays hidden and out of tab order", hidden, { width });
    await page.screenshot({ path: `qa/after/contact-errors-${width}.png`, fullPage: true });
    await page.getByLabel("Name", { exact: false }).fill("Visual QA");
    await page.getByLabel("Work email").fill("qa@example.test");
    await page.getByLabel("Brand or company").fill("Synthetic QA");
    await page.route("**/api/contact", route => route.fulfill({ status: 503, contentType: "application/json", body: JSON.stringify({ error: "We could not send your enquiry. Please try again or contact us directly by email." }) }));
    await page.getByRole("button", { name: "Send planning enquiry" }).click();
    await page.locator(".form-alert").waitFor();
    check("mocked failure retains values", await page.getByLabel("Work email").inputValue() === "qa@example.test", { width });
    await page.screenshot({ path: `qa/after/contact-failure-${width}.png`, fullPage: true });
    await page.unroute("**/api/contact");
    await page.route("**/api/contact", route => route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ received: true }) }));
    await page.getByRole("button", { name: "Send planning enquiry" }).click();
    await page.getByText("Thank you - your enquiry has been received.").waitFor();
    check("mocked receipt has no page overflow", await page.evaluate(() => document.documentElement.scrollWidth === document.documentElement.clientWidth), { width });
    await page.screenshot({ path: `qa/after/contact-success-${width}.png`, fullPage: true });
    await page.unroute("**/api/contact");
    await page.goto(base + "/about");
    const rows = await page.locator(".responsibility-grid").evaluate(el => {
      const lists = [...el.querySelectorAll("ul")].map(ul => [...ul.children].map(li => li.getBoundingClientRect().top));
      return lists[0].map((top, i) => Math.abs(top - lists[1][i]));
    });
    if (width >= 768) check("responsibility rows align", rows.every(delta => delta < 1), { width, deltas: rows });
    await page.goto(base + "/");
    await page.keyboard.press("Tab");
    check("skip link receives keyboard focus", await page.locator(".skip-link").evaluate(el => el === document.activeElement && el.getBoundingClientRect().top >= 0), { width });
    await page.keyboard.press("Enter");
    check("skip link moves focus into main", await page.evaluate(() => document.activeElement.id === "main-content"), { width });
    const faq = page.locator(".faq summary").first();
    await faq.focus(); await page.keyboard.press("Enter");
    check("FAQ keyboard expands", await faq.evaluate(el => el.parentElement.open), { width });
    const faqResult = await new AxeBuilder({ page }).include(".faq").withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
    check("expanded FAQ accessible", !faqResult.violations.length, { width });
    console.log(`Interactions ${width}: complete`);
  }
  const noJS = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const staticPage = await noJS.newPage();
  for (const route of ["/", "/planning-workspace"]) {
    await staticPage.goto(base + route);
    check("content remains visible without JavaScript", await staticPage.locator("h1").isVisible() && await staticPage.locator(".decision-brief").first().isVisible(), { route });
  }
  await noJS.close();
  report.summary = { accessibilityPages: report.accessibility.length, violations: report.accessibility.reduce((n, p) => n + p.violations.length, 0), interactionChecks: report.interactions.length, failedInteractions: report.interactions.filter(i => !i.passed).length, runtimeErrors: report.runtimeErrors.length };
  await fs.writeFile("qa/after/interaction-report.json", JSON.stringify(report, null, 2) + "\n");
  console.log(JSON.stringify(report.summary, null, 2));
  if (report.summary.violations || report.summary.failedInteractions || report.summary.runtimeErrors) process.exitCode = 1;
} finally { await browser.close(); }

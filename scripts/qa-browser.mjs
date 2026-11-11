import fs from "node:fs";
import { createRequire } from "node:module";
const load = createRequire(import.meta.url);
const { chromium } = load(process.env.QA_PLAYWRIGHT_MODULE || "playwright");
const AxeBuilder = load(
  process.env.QA_AXE_MODULE || "@axe-core/playwright",
).default;
const base = process.env.QA_BASE_URL || "http://127.0.0.1:3100";
(async () => {
  const browser = await chromium.launch({
    ...(process.env.QA_BROWSER_PATH
      ? { executablePath: process.env.QA_BROWSER_PATH }
      : {}),
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  const results = {
    pages: [],
    errors: [],
    accessibility: [],
    links: [],
    interactions: [],
  };
  page.on("pageerror", (e) => results.errors.push(e.message));
  const routes = [
    "/",
    "/planning-workspace",
    "/how-we-work",
    "/examples",
    "/30-day-planning-pilot",
    "/about",
    "/contact",
    "/privacy",
  ];
  for (const width of [360, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of routes) {
      const response = await page.goto(base + route, {
        waitUntil: "networkidle",
      });
      await page.evaluate(() => document.fonts.ready);
      await page
        .locator("img[loading=lazy]")
        .evaluateAll((imgs) => imgs.forEach((img) => (img.loading = "eager")));
      await page.waitForFunction(() =>
        [...document.images]
          .filter((img) => !img.closest("dialog"))
          .every((img) => img.complete && img.naturalWidth > 0),
      );
      const data = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth,
        h1: document.querySelectorAll("h1").length,
        title: document.title,
        canonical: document.querySelector("link[rel=canonical]")?.href,
        description: document.querySelector("meta[name=description]")?.content,
      }));
      results.pages.push({ width, route, status: response.status(), ...data });
      if (width === 390 || width === 1440) {
        const a = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
          .analyze();
        results.accessibility.push({
          width,
          route,
          violations: a.violations.map((v) => ({
            id: v.id,
            impact: v.impact,
            nodes: v.nodes.map((n) => ({
              target: n.target,
              summary: n.failureSummary,
            })),
          })),
        });
      }
      if (
        (route === "/" && [360, 1440].includes(width)) ||
        (width === 360 &&
          ["/examples", "/planning-workspace", "/contact"].includes(route))
      )
        await page.screenshot({
          path:
            "/tmp/scalesight-" +
            (route === "/" ? "home" : route.slice(1)) +
            "-" +
            width +
            ".png",
          fullPage: true,
        });
    }
  }
  await page.setViewportSize({ width: 360, height: 850 });
  await page.goto(base, { waitUntil: "networkidle" });
  await page.goto(base + "/examples", { waitUntil: "networkidle" });
  const open = page.locator(".proof-open").first();
  await open.focus();
  await page.keyboard.press("Enter");
  await page.waitForFunction(() => document.querySelector("dialog[open]"));
  results.interactions.push({
    test: "keyboard lightbox open",
    passed: (await page.locator("dialog[open]").count()) === 1,
  });
  const initial = await page.evaluate(() =>
    document.activeElement?.getAttribute("aria-label"),
  );
  await page.keyboard.press("Tab");
  const tabFocus = await page.evaluate(
    () => !!document.activeElement?.closest("dialog[open]"),
  );
  await page.keyboard.press("Shift+Tab");
  const reverseFocus = await page.evaluate(
    () => !!document.activeElement?.closest("dialog[open]"),
  );
  results.interactions.push({
    test: "native dialog focus contained",
    passed: tabFocus && reverseFocus,
    initial,
  });
  await page.keyboard.press("Escape");
  results.interactions.push({
    test: "Escape closes and returns focus",
    passed:
      (await page.locator("dialog[open]").count()) === 0 &&
      (await open.evaluate((el) => el === document.activeElement)),
  });
  await page.getByRole("button", { name: "Open navigation" }).click();
  results.interactions.push({
    test: "mobile navigation expands",
    passed: await page.locator("#mobile-navigation").isVisible(),
  });
  await page
    .locator("#mobile-navigation")
    .getByRole("link", { name: "Examples", exact: true })
    .click();
  results.interactions.push({
    test: "mobile navigation closes after route change",
    passed: (await page.locator("#mobile-navigation").count()) === 0,
  });
  await page.goto(base + "/contact?intent=pilot");
  await page.getByRole("button", { name: "Send planning enquiry" }).click();
  results.interactions.push({
    test: "required field errors announced",
    passed: (await page.locator(".field-error").count()) >= 3,
  });
  await page.getByLabel("Name", { exact: false }).fill("QA Test");
  await page.getByLabel("Work email").fill("qa@example.test");
  await page.getByLabel("Brand or company").fill("Synthetic test");
  await page
    .getByLabel("What decision is coming up?")
    .fill("Test only; no delivery configured.");
  await page.getByRole("button", { name: "Send planning enquiry" }).click();
  await page.locator(".form-alert").waitFor();
  results.interactions.push({
    test: "real delivery-unavailable response preserves entries",
    passed:
      (await page.getByLabel("Name", { exact: false }).inputValue()) ===
        "QA Test" &&
      (await page
        .getByText("Thank you - your enquiry has been received.")
        .count()) === 0,
  });
  await page.route("**/api/contact", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ received: true }),
    }),
  );
  await page.getByRole("button", { name: "Send planning enquiry" }).click();
  await page.getByText("Thank you - your enquiry has been received.").waitFor();
  results.interactions.push({
    test: "mock-confirmed receipt shows success and optional booking or fallback",
    passed:
      (await page
        .getByRole("link", { name: /Choose a conversation time/ })
        .count()) === 1 ||
      (await page
        .getByText(
          "Online booking is currently unavailable. We will respond to your enquiry to agree the next step.",
        )
        .count()) === 1,
  });
  for (const route of routes) {
    await page.goto(base + route);
    const links = await page
      .locator("a[href]")
      .evaluateAll((els) =>
        els
          .map((el) => el.getAttribute("href"))
          .filter((x) => x.startsWith("/") || x.startsWith("#")),
      );
    for (const href of [...new Set(links)]) {
      if (href.startsWith("#")) {
        const found = await page
          .locator(
            "[id=" + JSON.stringify(decodeURIComponent(href.slice(1))) + "]",
          )
          .count();
        if (!found)
          results.links.push({ route, href, error: "missing anchor" });
      } else {
        const u = new URL(href, base);
        const r = await page.request.get(u.origin + u.pathname + u.search);
        if (r.status() >= 400)
          results.links.push({ route, href, status: r.status() });
        if (u.hash && r.ok()) {
          const body = await r.text();
          if (!body.includes('id="' + u.hash.slice(1) + '"'))
            results.links.push({
              route,
              href,
              error: "missing destination anchor",
            });
        }
      }
    }
  }
  await page.goto(base + "/");
  await page.emulateMedia({ reducedMotion: "reduce" });
  results.interactions.push({
    test: "reduced motion honored",
    passed: await page.evaluate(
      () =>
        getComputedStyle(document.documentElement).scrollBehavior === "auto",
    ),
  });
  const redirects = [];
  for (const route of [
    "/case-studies",
    "/forecasting",
    "/confident",
    "/30-day-plan",
    "/design-system",
    "/partners",
  ]) {
    const r = await page.request.get(base + route, { maxRedirects: 0 });
    redirects.push({
      route,
      status: r.status(),
      location: r.headers().location,
    });
  }
  results.redirects = redirects;
  for (const route of ["/sitemap.xml", "/robots.txt", "/opengraph-image"]) {
    const r = await page.request.get(base + route);
    results.interactions.push({
      test: route + " resolves",
      passed: r.status() === 200,
    });
  }
  fs.writeFileSync("/tmp/scalesight-qa.json", JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results, null, 2));
  const failed =
    results.pages.some((p) => p.overflow || p.h1 !== 1 || p.status !== 200) ||
    results.accessibility.some((a) => a.violations.length) ||
    results.errors.length ||
    results.links.length ||
    results.interactions.some((i) => !i.passed);
  await browser.close();
  if (failed) process.exitCode = 1;
})().catch((e) => {
  console.error(e);
  process.exit(1);
});

# Phase 0 audit — 11 November 2026

Completed before implementation. Source: owner-supplied v2.0 PDF, read in full.

## Repository
Next.js 16.2.7 / React 19 / TypeScript / Tailwind 4; App Router; Geist local font. Pages contain copy directly; shared header/footer and legacy showcase components duplicate presentation. No CMS, analytics provider, approved privacy copy or server-side enquiry delivery exists in this checkout. Existing Git branch: wahib-nov11. Framework and hosting retained.

## Deployed inspection
Inspected https://www.scalesight.org/, /about, /30-day-planning-pilot, /partners and /contact via web fetch. Public content differs from checkout: managed-planning copy exists there, but workspace navigation is absent; partner route remains public; pilot retains an old platform-named FAQ; contact exposes a honeypot label to the text extractor. Delivery and booking cannot be confirmed by reading HTML. /privacy, /examples and /how-we-work were inaccessible to the web fetch; the initial web fetch could not read the legal substance. A later direct HTTPS read succeeded: the existing public draft and all bracket warnings are preserved in content/privacy.ts, retaining the recorded 23 October 2026 update date. The public canonical contact is arman@scalesight.org. See launch blockers.

## Source hits and decisions
Every matched source line below is replaced or deleted. Existing logos, PDFs and image pixel content are separately reviewed as assets; PDF is internal and must remain outside public/.

| File:line | Existing text | Decision |
|---|---|---|
| app/layout.tsx:13 | title: "ScaleSight / Ecommerce Planning Partner for Shopify Brands", | Replace |
| app/layout.tsx:15 | "ScaleSight is a managed planning partner for Shopify and DTC ecommerce brands. Get demand forecasting, inventory planning, and weekly decision support — starting with a 30-Day Planning Pilot.", | Replace |
| app/layout.tsx:20 | "Shopify planning", | Replace |
| app/layout.tsx:24 | "revenue forecasting", | Replace |
| app/layout.tsx:31 | title: "ScaleSight / Ecommerce Planning Partner for Shopify Brands", | Replace |
| app/layout.tsx:33 | "Forecast demand, plan inventory, and make better business decisions with a managed planning system built for Shopify brands.", | Replace |
| app/layout.tsx:41 | "Forecast demand, plan inventory, and make better business decisions with a managed planning system built for Shopify brands.", | Replace |
| app/page.tsx:24 | import projectedRevenue from "@/public/dashboards for website/visual 1.png"; | Replace |
| app/page.tsx:30 | "Shopify Brands", | Replace |
| app/page.tsx:40 | copy: "Lose revenue when products run out at the worst time.", | Replace |
| app/page.tsx:55 | title: "Unpredictable Revenue", | Replace |
| app/page.tsx:72 | ["01", "Connect Your Data", "We connect to your Shopify store and operational data sources."], | Replace |
| app/page.tsx:80 | { week: "Week 2", title: "Forecasting", copy: "We build your demand and revenue forecasting models." }, | Replace |
| app/page.tsx:81 | { week: "Week 3", title: "Planning Workspace", copy: "We deliver your inventory and planning dashboard." }, | Replace |
| app/page.tsx:85 | const deliverables = [ | Replace |
| app/page.tsx:88 | subtitle: "High-level operational picture across revenue, demand alerts, and inventory health.", | Replace |
| app/page.tsx:93 | title: "Projected Revenue", | Replace |
| app/page.tsx:94 | subtitle: "Forward view of revenue, sales trends, and 13-week confidence boundaries.", | Replace |
| app/page.tsx:95 | image: projectedRevenue, | Replace |
| app/page.tsx:96 | alt: "Projected Revenue forecast screenshot", | Replace |
| app/page.tsx:136 | "Know revenue before it happens", | Replace |
| app/page.tsx:163 | question: "Do I need Shopify?", | Replace |
| app/page.tsx:165 | "Shopify is our primary platform and where we do our best work. If you run a DTC ecommerce business on Shopify, you are a strong fit. Reach out if you are on a different platform and we can discuss what is possible.", | Replace |
| app/page.tsx:175 | "Yes. We connect to your Shopify store, inventory data, and other operational sources during onboarding. Most connections are set up within the first week.", | Replace |
| app/page.tsx:349 | eyebrow="Deliverables" | Replace |
| app/page.tsx:354 | {deliverables.map((item, index) => ( | Replace |
| app/about/page.tsx:14 | "ScaleSight is a managed planning partner for Shopify and DTC ecommerce brands. We monitor your business, spot problems early, and help your team plan with confidence.", | Replace |
| app/about/page.tsx:18 | "Shopify planning", | Replace |
| app/about/page.tsx:27 | "A managed planning partner for Shopify brands. We monitor your business, spot problems early, and help your team plan with confidence.", | Replace |
| app/about/page.tsx:37 | copy: "We keep a continuous eye on revenue, inventory, and demand so nothing important slips past your team unnoticed.", | Replace |
| app/about/page.tsx:42 | copy: "We spot stockouts, overstock, and revenue risks before they happen — so you can act instead of react.", | Replace |
| app/30-day-planning-pilot/page.tsx:8 | "The 30-Day Planning Pilot builds your first ecommerce planning system in one month — demand forecasting, inventory planning, and weekly decision support for Shopify brands.", | Replace |
| app/30-day-planning-pilot/page.tsx:14 | "Shopify inventory planning", | Replace |
| app/30-day-planning-pilot/page.tsx:24 | "Build your first ecommerce planning system in 30 days. Forecasting, inventory planning, and weekly decision support for Shopify brands.", | Replace |
| app/case-studies/page.tsx:12 | "See how Shopify and DTC brands reduced stockouts, freed up cash, and planned with confidence using ScaleSight's managed planning system.", | Replace |
| app/case-studies/page.tsx:18 | "Shopify planning", | Replace |
| app/case-studies/page.tsx:29 | '"We were flying blind between production lead times and live sales velocity. Our spreadsheets were already behind reality."', | Replace |
| app/case-studies/page.tsx:47 | "Scenario modeling allowed the team to move production earlier, protect revenue windows, and reduce cash trapped in slow-moving SKUs.", | Replace |
| app/case-studies/page.tsx:75 | alt="Revenue forecasting dashboard preview" | Replace |
| app/contact/page.tsx:128 | <span>Monthly Revenue</span> | Replace |
| app/contact/page.tsx:129 | <select name="monthlyRevenue" className="field-input"> | Replace |
| app/contact/page.tsx:142 | <option>Revenue visibility</option> | Replace |
| components/DashboardGridShowcase.tsx:16 | title: "Revenue Forecast", | Delete legacy component/assets guide |
| components/DashboardGridShowcase.tsx:20 | alt: "Revenue forecasting dashboard visual", | Delete legacy component/assets guide |
| components/Hero.tsx:19 | system spanning revenue, inventory health, SKU demand, and weekly | Delete legacy component/assets guide |
| components/Hero.tsx:53 | Live scenario | Delete legacy component/assets guide |
| components/Hero.tsx:60 | <p className="text-sm text-[var(--text-secondary)]">Revenue confidence</p> | Delete legacy component/assets guide |
| components/PerspectiveShowcase.tsx:11 | alt: "Revenue forecasting dashboard preview", | Delete legacy component/assets guide |
| components/site-footer.tsx:10 | { href: "/30-day-planning-pilot", label: "Revenue Forecasting" }, | Replace |
| components/site-footer.tsx:48 | A managed planning partner for Shopify and DTC ecommerce brands. | Replace |
| components/site-footer.tsx:90 | {/* <p>Built for Shopify Plus and modern ops teams.</p> */} | Replace |
| components/pages/ForecastingPage.tsx:34 | copy: "Lose revenue when products run out at the worst time.", | Delete legacy component/assets guide |
| components/pages/ForecastingPage.tsx:47 | title: "Unpredictable Revenue", | Delete legacy component/assets guide |
| components/pages/ForecastingPage.tsx:63 | { week: "Week 2", title: "Forecasting", copy: "We build your demand and revenue forecasting models." }, | Delete legacy component/assets guide |
| components/pages/ForecastingPage.tsx:64 | { week: "Week 3", title: "Planning Workspace", copy: "We deliver your inventory and planning dashboard." }, | Delete legacy component/assets guide |
| components/pages/ForecastingPage.tsx:68 | const deliverables = [ | Delete legacy component/assets guide |
| components/pages/ForecastingPage.tsx:71 | subtitle: "High-level operational picture across revenue, demand alerts, and inventory health.", | Delete legacy component/assets guide |
| components/pages/ForecastingPage.tsx:76 | title: "Projected Revenue", | Delete legacy component/assets guide |
| components/pages/ForecastingPage.tsx:77 | subtitle: "Forward view of revenue, sales trends, and 13-week confidence boundaries.", | Delete legacy component/assets guide |
| components/pages/ForecastingPage.tsx:79 | alt: "Projected Revenue forecast screenshot", | Delete legacy component/assets guide |
| components/pages/ForecastingPage.tsx:107 | "A clean operating picture across revenue, inventory, and demand so teams can move from fragmented reporting to coordinated decisions.", | Delete legacy component/assets guide |
| components/pages/ForecastingPage.tsx:111 | id: "revenue", | Delete legacy component/assets guide |
| components/pages/ForecastingPage.tsx:112 | label: "Revenue Forecast", | Delete legacy component/assets guide |
| components/pages/ForecastingPage.tsx:113 | title: "Revenue visibility before targets slip.", | Delete legacy component/assets guide |
| components/pages/ForecastingPage.tsx:115 | "A forward view of likely revenue, confidence, and weekly movement so growth decisions are grounded in what is most likely to happen next.", | Delete legacy component/assets guide |
| components/pages/ForecastingPage.tsx:123 | "Stock posture, category exposure, and product-level risk in one view so teams can protect revenue without tying up excess capital.", | Delete legacy component/assets guide |
| components/pages/ForecastingPage.tsx:147 | "Know revenue before it happens", | Delete legacy component/assets guide |
| components/pages/ForecastingPage.tsx:167 | question: "Do I need Shopify?", | Delete legacy component/assets guide |
| components/pages/ForecastingPage.tsx:169 | "Shopify is our primary platform and where we do our best work. If you run a DTC ecommerce business on Shopify, you are a strong fit. Reach out if you are on a different platform and we can discuss what is possible.", | Delete legacy component/assets guide |
| components/pages/ForecastingPage.tsx:179 | "Yes. We connect to your Shopify store, inventory data, and other operational sources during onboarding. Most connections are set up within the first week.", | Delete legacy component/assets guide |
| components/pages/ForecastingPage.tsx:276 | title="Built for Growing Shopify & DTC Brands" | Delete legacy component/assets guide |
| components/pages/ForecastingPage.tsx:290 | <h3 className="mt-1 text-xl font-semibold text-white">Shopify Brands</h3> | Delete legacy component/assets guide |
| components/pages/ForecastingPage.tsx:292 | Built natively around Shopify data, store structures, and order workflows. | Delete legacy component/assets guide |
| components/pages/ForecastingPage.tsx:317 | "Revenue: $50k–$500k / mo", | Delete legacy component/assets guide |
| components/pages/ForecastingPage.tsx:380 | ["01", "Connect Your Data", "We connect to your Shopify store and operational data sources."], | Delete legacy component/assets guide |
| components/pages/ForecastingPage.tsx:410 | copy="No long contracts. No guesswork. A complete planning system delivered in one month." | Delete legacy component/assets guide |
| components/pages/ForecastingPage.tsx:438 | eyebrow="Deliverables" | Delete legacy component/assets guide |
| components/pages/ForecastingPage.tsx:444 | {deliverables.map((item, index) => ( | Delete legacy component/assets guide |
| public/dashboards for website/guide.txt:3 | Best for homepage hero. It shows revenue, inventory, alerts, recommendations — closest to the “enterprise SaaS” feel. | Delete legacy component/assets guide |
| public/dashboards for website/guide.txt:5 | 2. **Revenue Forecasting Dashboard** | Delete legacy component/assets guide |
| public/dashboards for website/guide.txt:20 | Homepage showcase: **Revenue Forecast + Inventory Health + SKU Demand** | Delete legacy component/assets guide |
| public/dashboards for website/guide.txt:21 | Forecasting page: **Revenue Forecast + Scenario Planning + Weekly Planning** | Delete legacy component/assets guide |
| public/dashboards for website/guide.txt:24 | The doc specifically asks for revenue forecasting, inventory planning, executive visibility, demand forecasting, and operational planning visuals, so these match perfectly. | Delete legacy component/assets guide |

## Existing build-output hits
Discard and regenerate all previous .next output. Compiled lines can be minified; each matching file and source line is recorded without reproducing bundles.

- `.next/required-server-files.json:90` — delete cached output; rebuild.
- `.next/required-server-files.js:90` — delete cached output; rebuild.
- `.next/static/chunks/0neh5l67s46na.js:3` — delete cached output; rebuild.
- `.next/static/chunks/2tov283tx716-.js:1` — delete cached output; rebuild.
- `.next/static/chunks/0hhc8_b08t_1-.js:1` — delete cached output; rebuild.
- `.next/static/chunks/003i_sw6600sw.js:3` — delete cached output; rebuild.
- `.next/static/chunks/09fk-me_wjg7p.js:3` — delete cached output; rebuild.
- `.next/static/chunks/1tux5l2gx-mmy.js:1` — delete cached output; rebuild.
- `.next/static/chunks/35s2nsqo9xg90.js:1` — delete cached output; rebuild.
- `.next/static/chunks/10zpjy5-skuda.js:1` — delete cached output; rebuild.
- `.next/static/chunks/00e401drvoey1.js:3` — delete cached output; rebuild.
- `.next/build/chunks/node_modules__pnpm_1_iyr_2._.js:1391` — delete cached output; rebuild.
- `.next/server/pages/404.html:1` — delete cached output; rebuild.
- `.next/server/chunks/[root-of-the-server]__1x45c7n._.js:8` — delete cached output; rebuild.
- `.next/server/chunks/[root-of-the-server]__1x45c7n._.js:11` — delete cached output; rebuild.
- `.next/server/app/design-system.rsc:28` — delete cached output; rebuild.
- `.next/server/app/_not-found.rsc:18` — delete cached output; rebuild.
- `.next/server/app/30-day-planning-pilot.html:1` — delete cached output; rebuild.
- `.next/server/app/index.rsc:22` — delete cached output; rebuild.
- `.next/server/app/index.rsc:23` — delete cached output; rebuild.
- `.next/server/app/index.rsc:24` — delete cached output; rebuild.
- `.next/server/app/index.rsc:25` — delete cached output; rebuild.
- `.next/server/app/index.rsc:26` — delete cached output; rebuild.
- `.next/server/app/index.rsc:27` — delete cached output; rebuild.
- `.next/server/app/index.rsc:28` — delete cached output; rebuild.
- `.next/server/app/index.rsc:32` — delete cached output; rebuild.
- `.next/server/app/index.rsc:51` — delete cached output; rebuild.
- `.next/server/app/index.html:1` — delete cached output; rebuild.
- `.next/server/app/_not-found.html:1` — delete cached output; rebuild.
- `.next/server/app/design-system.html:1` — delete cached output; rebuild.
- `.next/server/app/about.html:1` — delete cached output; rebuild.
- `.next/server/app/contact.rsc:23` — delete cached output; rebuild.
- `.next/server/app/case-studies.rsc:12` — delete cached output; rebuild.
- `.next/server/app/case-studies.rsc:24` — delete cached output; rebuild.
- `.next/server/app/case-studies.rsc:36` — delete cached output; rebuild.
- `.next/server/app/case-studies.html:1` — delete cached output; rebuild.
- `.next/server/app/30-day-planning-pilot.rsc:20` — delete cached output; rebuild.
- `.next/server/app/about.rsc:25` — delete cached output; rebuild.
- `.next/server/app/about.rsc:26` — delete cached output; rebuild.
- `.next/server/app/about.rsc:40` — delete cached output; rebuild.
- `.next/server/app/contact.html:1` — delete cached output; rebuild.
- `.next/server/app/index.segments/__PAGE__.segment.rsc:15` — delete cached output; rebuild.
- `.next/server/app/index.segments/__PAGE__.segment.rsc:18` — delete cached output; rebuild.
- `.next/server/app/index.segments/__PAGE__.segment.rsc:19` — delete cached output; rebuild.
- `.next/server/app/index.segments/__PAGE__.segment.rsc:20` — delete cached output; rebuild.
- `.next/server/app/index.segments/__PAGE__.segment.rsc:21` — delete cached output; rebuild.
- `.next/server/app/index.segments/__PAGE__.segment.rsc:22` — delete cached output; rebuild.
- `.next/server/app/index.segments/__PAGE__.segment.rsc:23` — delete cached output; rebuild.
- `.next/server/app/index.segments/__PAGE__.segment.rsc:27` — delete cached output; rebuild.
- `.next/server/app/index.segments/_head.segment.rsc:6` — delete cached output; rebuild.
- `.next/server/app/index.segments/_full.segment.rsc:22` — delete cached output; rebuild.
- `.next/server/app/index.segments/_full.segment.rsc:23` — delete cached output; rebuild.
- `.next/server/app/index.segments/_full.segment.rsc:24` — delete cached output; rebuild.
- `.next/server/app/index.segments/_full.segment.rsc:25` — delete cached output; rebuild.
- `.next/server/app/index.segments/_full.segment.rsc:26` — delete cached output; rebuild.
- `.next/server/app/index.segments/_full.segment.rsc:27` — delete cached output; rebuild.
- `.next/server/app/index.segments/_full.segment.rsc:28` — delete cached output; rebuild.
- `.next/server/app/index.segments/_full.segment.rsc:32` — delete cached output; rebuild.
- `.next/server/app/index.segments/_full.segment.rsc:51` — delete cached output; rebuild.
- `.next/server/app/30-day-planning-pilot.segments/_head.segment.rsc:6` — delete cached output; rebuild.
- `.next/server/app/30-day-planning-pilot.segments/_full.segment.rsc:20` — delete cached output; rebuild.
- `.next/server/app/design-system.segments/_head.segment.rsc:6` — delete cached output; rebuild.
- `.next/server/app/design-system.segments/_full.segment.rsc:28` — delete cached output; rebuild.
- `.next/server/app/contact.segments/_head.segment.rsc:6` — delete cached output; rebuild.
- `.next/server/app/contact.segments/_full.segment.rsc:23` — delete cached output; rebuild.
- `.next/server/app/_not-found.segments/_head.segment.rsc:6` — delete cached output; rebuild.
- `.next/server/app/_not-found.segments/_full.segment.rsc:18` — delete cached output; rebuild.
- `.next/server/app/case-studies.segments/_head.segment.rsc:6` — delete cached output; rebuild.
- `.next/server/app/case-studies.segments/_full.segment.rsc:12` — delete cached output; rebuild.
- `.next/server/app/case-studies.segments/_full.segment.rsc:24` — delete cached output; rebuild.
- `.next/server/app/case-studies.segments/_full.segment.rsc:36` — delete cached output; rebuild.
- `.next/server/app/about.segments/_head.segment.rsc:6` — delete cached output; rebuild.
- `.next/server/app/about.segments/_full.segment.rsc:25` — delete cached output; rebuild.
- `.next/server/app/about.segments/_full.segment.rsc:26` — delete cached output; rebuild.
- `.next/server/app/about.segments/_full.segment.rsc:40` — delete cached output; rebuild.
- `.next/server/app/about.segments/about/__PAGE__.segment.rsc:9` — delete cached output; rebuild.
- `.next/server/app/about.segments/about/__PAGE__.segment.rsc:10` — delete cached output; rebuild.
- `.next/server/app/case-studies.segments/case-studies/__PAGE__.segment.rsc:11` — delete cached output; rebuild.
- `.next/server/app/case-studies.segments/case-studies/__PAGE__.segment.rsc:13` — delete cached output; rebuild.
- `.next/server/chunks/ssr/1wmt_next_dist_10lt1_m._.js:1` — delete cached output; rebuild.
- `.next/server/chunks/ssr/[root-of-the-server]__1hzg7yq._.js:1` — delete cached output; rebuild.
- `.next/server/chunks/ssr/components_DashboardGridShowcase_tsx_1zik01v._.js:1` — delete cached output; rebuild.
- `.next/server/chunks/ssr/_0q6tl8q._.js:3` — delete cached output; rebuild.
- `.next/server/chunks/ssr/[root-of-the-server]__0zb6xvy._.js:1` — delete cached output; rebuild.
- `.next/server/chunks/ssr/1wmt_next_dist_1od2aez._.js:1` — delete cached output; rebuild.
- `.next/server/chunks/ssr/[root-of-the-server]__02_w-t2._.js:1` — delete cached output; rebuild.
- `.next/server/chunks/ssr/_06dgdkk._.js:3` — delete cached output; rebuild.
- `.next/server/chunks/ssr/[root-of-the-server]__1_uvgq_._.js:1` — delete cached output; rebuild.
- `.next/server/chunks/ssr/components_pages_ForecastingPage_tsx_08mqbbv._.js:1` — delete cached output; rebuild.
- `.next/server/chunks/ssr/[root-of-the-server]__0vcrasl._.js:1` — delete cached output; rebuild.
- `.next/server/chunks/ssr/[root-of-the-server]__0vcrasl._.js:17` — delete cached output; rebuild.
- `.next/server/chunks/ssr/1wmt_next_dist_00w74ax._.js:1` — delete cached output; rebuild.
- `.next/server/chunks/ssr/_1www_pg._.js:1` — delete cached output; rebuild.
- `.next/server/chunks/ssr/_1f187yw._.js:1` — delete cached output; rebuild.
- `.next/server/chunks/ssr/_0bm3o09._.js:3` — delete cached output; rebuild.
- `.next/server/chunks/ssr/_13t-8gx._.js:3` — delete cached output; rebuild.
- `.next/dev/static/chunks/1wmt_next_dist_client_0iv8hou._.js:898` — delete cached output; rebuild.
- `.next/dev/static/chunks/1wmt_next_dist_client_0iv8hou._.js:952` — delete cached output; rebuild.
- `.next/dev/static/chunks/1wmt_next_dist_client_0iv8hou._.js:2415` — delete cached output; rebuild.
- `.next/dev/static/chunks/1wmt_next_dist_client_0iv8hou._.js:11969` — delete cached output; rebuild.
- `.next/dev/static/chunks/1wmt_next_dist_client_0iv8hou._.js:13131` — delete cached output; rebuild.
- `.next/dev/static/chunks/components_18i_lp6._.js:27` — delete cached output; rebuild.
- `.next/dev/static/chunks/components_18i_lp6._.js:31` — delete cached output; rebuild.
- `.next/dev/static/chunks/components_18i_lp6._.js:248` — delete cached output; rebuild.
- `.next/dev/static/chunks/components_18i_lp6._.js:307` — delete cached output; rebuild.
- `.next/dev/static/chunks/1wmt_next_dist_compiled_react-dom_0ggz9cr._.js:11847` — delete cached output; rebuild.
- `.next/dev/static/chunks/1wmt_next_dist_compiled_react-dom_0ggz9cr._.js:14592` — delete cached output; rebuild.
- `.next/dev/static/chunks/1wmt_next_dist_0orijmo._.js:1061` — delete cached output; rebuild.
- `.next/dev/static/chunks/1wmt_next_dist_0orijmo._.js:2716` — delete cached output; rebuild.
- `.next/dev/static/chunks/1wmt_next_dist_0orijmo._.js:2881` — delete cached output; rebuild.
- `.next/dev/static/chunks/1wmt_next_dist_compiled_next-devtools_index_04894no.js:2178` — delete cached output; rebuild.
- `.next/dev/static/chunks/1wmt_next_dist_compiled_next-devtools_index_04894no.js:3336` — delete cached output; rebuild.
- `.next/dev/static/chunks/1wmt_next_dist_compiled_next-devtools_index_04894no.js:3837` — delete cached output; rebuild.
- `.next/dev/static/chunks/turbopack-_02ck8zf._.js:1246` — delete cached output; rebuild.
- `.next/dev/static/chunks/turbopack-_02ck8zf._.js:2145` — delete cached output; rebuild.
- `.next/dev/build/chunks/[turbopack]_runtime.js:1217` — delete cached output; rebuild.
- `.next/dev/build/chunks/node_modules__pnpm_1_iyr_2._.js:1391` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/node_modules__pnpm_1wtgty6._.js:4559` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/node_modules__pnpm_1wtgty6._.js:4613` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/node_modules__pnpm_1wtgty6._.js:5285` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/node_modules__pnpm_1wtgty6._.js:9110` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/components_08t-xke._.js:26` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/components_08t-xke._.js:30` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/components_08t-xke._.js:239` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/components_08t-xke._.js:298` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/_1504ftk._.js:46` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/_1504ftk._.js:47` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/_1504ftk._.js:52` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/_1504ftk._.js:56` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/_1504ftk._.js:63` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/_1504ftk._.js:64` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/_1504ftk._.js:71` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/[root-of-the-server]__1toxz3w._.js:146` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/[root-of-the-server]__1toxz3w._.js:514` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/[root-of-the-server]__1toxz3w._.js:523` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/[root-of-the-server]__1toxz3w._.js:538` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/[root-of-the-server]__1toxz3w._.js:557` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/[root-of-the-server]__1toxz3w._.js:584` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/[root-of-the-server]__1toxz3w._.js:589` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/[root-of-the-server]__1toxz3w._.js:597` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/[root-of-the-server]__1toxz3w._.js:600` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/[root-of-the-server]__1toxz3w._.js:605` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/[root-of-the-server]__1toxz3w._.js:606` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/[root-of-the-server]__1toxz3w._.js:608` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/[root-of-the-server]__1toxz3w._.js:645` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/[root-of-the-server]__1toxz3w._.js:680` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/[root-of-the-server]__1toxz3w._.js:681` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/[root-of-the-server]__1toxz3w._.js:689` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/[root-of-the-server]__1toxz3w._.js:1168` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/[root-of-the-server]__1toxz3w._.js:1178` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/node_modules__pnpm_0frr5f1._.js:200` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/1wmt_next_dist_esm_04uus68._.js:2792` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/1wmt_next_dist_esm_04uus68._.js:3042` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/1wmt_next_dist_esm_04uus68._.js:3580` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/1wmt_next_dist_esm_04uus68._.js:3634` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/1wmt_next_dist_esm_04uus68._.js:3792` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/[turbopack]_runtime.js:1230` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/1wmt_next_dist_esm_10v4asg._.js:161` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/1wmt_next_dist_esm_server_0uybnd4._.js:3316` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/1wmt_next_dist_esm_server_0uybnd4._.js:4073` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/1wmt_next_dist_esm_server_0uybnd4._.js:8900` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/1wmt_next_dist_esm_server_0uybnd4._.js:9464` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/1wmt_next_dist_esm_server_0uybnd4._.js:9468` — delete cached output; rebuild.
- `.next/dev/server/chunks/ssr/1wmt_next_dist_esm_server_0uybnd4._.js:10143` — delete cached output; rebuild.

Build-output matched lines: 164. Framework/runtime uses of words such as “delivery” or “live” are not marketing claims; final QA distinguishes these.

## Assets
Retain the nine supplied seafood/ice-cream captures, byte-for-byte, under generic public/images/proof filenames. Delete the unrelated visual-series screenshots and their outdated guide. No pixel modification. Responsive delivery uses Next Image. Capture mapping and mobile evidence belong in the final report.

## Plan / gates
Replace all legacy pages/components, add the specified routes and redirects, use one proof registry and site config. Partners default inactive. Do not deploy: owner-approved privacy/operator details, canonical email/form delivery, calendar, screenshot scrubbing and specialist review capability remain unresolved.

# Revamp progress

- [x] Step 0 — Inventory and rules (read-only for site code)
- [x] Step 1 — Shared shell, config, components
- [x] Step 2 — Home (/)
- [x] Step 3 — How we work and 30-day pilot
- [x] Step 4 — Examples, About, and conditional Partners
- [x] Step 5 — Contact, guarded submission, SEO/staging, and disabled measurement
- [x] Step 6 — Copy sweep, build/source QA, and handoff (browser/lab runs blocked by local-server approval)
- [x] Final verification — lint, typecheck, production build and generated-output audit passed; browser/lab verification remains blocked (see `docs/QA_REPORT.md`)

## Route inventory

- Public routes: `/`, `/how-we-work`, `/30-day-planning-pilot`, `/examples`, `/about`, `/partners` (when active), `/contact`.
- `/contact` and `/api/contact` are dynamic server routes; the other listed public pages are emitted in the production build. `/privacy` is absent; its link remains as requested. `/design-system` remains outside the sitemap and has noindex metadata. Next also emits `/_not-found`, `/robots.txt`, and `/sitemap.xml`.
- The production sitemap contains only the approved routes, with `/partners` conditional on `partners.active`; it omits `/privacy` because no page exists and omits `/design-system`.

## Redirect list

- With `partners.active=false`, `/partners` permanently redirects in one hop to `/contact?intent=partner`.
- With Partners active (the default), no application redirect is configured. The inventory contains no separate legacy planning routes, so no legacy redirects are configured.
- HTTPS host normalization and trailing-slash behavior were not HTTP-tested in this environment; the production canonical host is `https://scalesight.org`, with the no-trailing-slash convention.

## QA evidence

- Source sweep removed the unused legacy showcase components, gallery images, and their styles. The only platform-name occurrence in site copy is the approved pilot FAQ question. The home and pilot retain the expressly specified outcome caveats. No superseded email string or public placeholder was found.
- Copy/source order was checked against the supplied briefs: H01–H09, W01–W08, P01–P09, E01–E07, A01–A05, R01–R06, and C01–C05.
- `exampleDemoLinks` entries are all `enabled: false`. The seven generated HTML pages contain no demo client names; the contact email is unset and no `mailto:` appears by default.
- Production build output: 7 static HTML pages and the route table includes dynamic `/contact` and `/api/contact`. A generated-HTML scan checked 133 internal links and 5 hash links; route and anchor targets resolved except the intentionally retained `/privacy` link. Each generated page had one H1. The sitemap contains only approved public routes.
- `pnpm lint`, `pnpm exec tsc --noEmit`, and `pnpm build` passed after the QA edits.
- Source inspection confirms the skip link targets each route's `<main>`, the mobile navigation exposes `aria-expanded`, FAQ controls are buttons with `aria-controls`/`aria-expanded`, and form labels/errors are associated. Key token contrast calculations: white/background 18.94:1; secondary/background 10.43:1; muted/background 5.57:1; soft blue/background 12.17:1; white/primary button 5.44:1.
- Keyboard-only interaction, form interaction, 200% zoom, viewport overflow at 360/390/768/1024/1440, direct URL refresh, staging runtime headers, and redirect responses were not browser-tested. Local production server startup was blocked by sandbox port restrictions; the requested escalation was rejected.
- No lab LCP/INP/CLS values were collected because a browser-accessible production build could not be served. No field performance claim is made. Analytics is disabled by default and requires both analytics and privacy approval flags; no collection provider is configured. No real enquiries or meetings were sent or booked.
- Final verification reran lint, typecheck and production build successfully. The production build emitted seven static pages plus dynamic `/contact` and `/api/contact`; built-output checks confirmed public static route metadata, one H1 and main landmark, sample brief labels/order/disclosure, production sitemap/robots, disabled demo flags and unset email. The allowed Shopify FAQ and guarantee caveat are the only matching permitted terms in the built HTML. Browser verification was not completed: port 3000 is a non-production server, starting production output on another port was rejected, and Playwright/Puppeteer/Lighthouse/axe are unavailable. See `docs/QA_REPORT.md` for route-level PASS/FAIL and manual checks. A branded `app/not-found.tsx` now supplies a main landmark and home navigation for unknown URLs.
- Calendly booking now reads only `NEXT_PUBLIC_CALENDLY_URL` through `siteConfig.calendar.url`, validates an HTTPS `calendly.com` URL, loads the official widget assets only after enquiry success and an explicit booking click, passes only name/email as prefill, and confirms booking only on the exact-origin `calendly.event_scheduled` message. `.env.example` documents the URL; ignored `.env.local` is set for local development. No CSP exists, so security headers were left unchanged. Lint, typecheck and production build for this integration pass. No real enquiry or booking was sent.

## OPEN_ITEMS

- **Owner: Arman** — Provide the approved contact email; direct-email links remain hidden until configured.
- **Owner: Arman** — Approve and provide the Privacy Notice page. Exact blocker: owner-approved privacy page required before the form and analytics go live.
- **Owner: Arman + Wahib** — Configure and verify the server-side notification destination after privacy approval; it is unset, so production submissions are not delivered.
- **Owner: Arman** — Verify the configured calendar URL and event duration before retaining “30-minute” booking copy.
- **Owner: Wahib** — Set `NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/kazmiarmanmehdi/30min` in the hosting provider's environment settings; `.env.local` only configures local development.
- **Owner: Arman** — Update the approved Privacy Notice to disclose that the user's name and email are passed to Calendly for booking.
- **Owner: Arman** — Set `sampleBriefReviewDate` only if a review date is approved; the field is hidden while unset.
- **Owner: Arman** — Decide whether About should use a portrait or retain the typography treatment.
- **Owner: Arman** — Confirm whether Partners should remain active.
- **Owner: Arman** — Verify the supply-timing demo URL and synthetic disclosure before enabling it.
- **Owner: Arman** — Verify the launch-demand demo URL and visible label/disclosure before enabling it.
- **Owner: Arman** — Verify the size-depth demo's Fit Movement → Size Depth label/disclosure before enabling it; do not guess a deep link.
- **Owner: Arman** — Confirm the supply-chain review capability before retaining it as a public capability claim.
- **Owner: Wahib** — Ensure staging sets `NEXT_PUBLIC_SITE_ENV=staging` or `VERCEL_ENV=preview` and verify deployed noindex behavior.
- **Owner: Wahib** — In a permitted browser environment, complete the local stub cases, keyboard/mobile/form checks, 200% zoom, viewport matrix, direct-refresh/redirect checks, and one lab performance run; record actual LCP/INP/CLS values.
- **Owner: Wahib** — Confirm HTTPS host normalization and trailing-slash redirects at the hosting layer; these were outside the local HTTP checks.
- **Owner: Arman + Wahib** — Choose and configure an analytics collection destination only after privacy approval; analytics currently emits no data to an external provider.

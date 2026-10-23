# PDF-locked redesign verification

Branch: `revamp/managed-service`. Design baseline: `0102b49`. Prior visual pass begins after `40e4f3e`.

## Content evidence

`docs/content-manifest.json` is extracted from the supplied PDF, with the source SHA-256 recorded. `scripts/extract-content.py` checks each extracted COPY string against the PDF. Page 9 requires questions and short decision outputs on Home cards; these reuse exact E03–E05 copy. No BUILD instructions are displayed.

Run `python3 scripts/content-lock.py http://localhost:3100` against a production server. The final run reports **0 differences** across 49 sections on seven routes. It checks ordered required strings, exact text per section (including duplication), required brief fields, section order, and text outside the approved list. Only whitespace from PDF line wrapping is normalized. FAQ answers are inspected even when collapsed. Dynamic form/booking states and conditional configured links are tested separately. Explicit accessibility/validation wording is enumerated separately in the manifest.

## Build and browser verification

Lint, TypeScript, production build and `git diff --check` pass. The sandbox initially prevented Turbopack from opening its local worker port; the production build passed with the permitted local process execution. No build configuration or dependencies changed.

Browser command: `QA_BASE=http://localhost:3100 node scripts/visual-qa.mjs`. It uses the available local Playwright/axe installations, overridable through `PLAYWRIGHT_MODULE`, `AXE_MODULE`, and `CHROME_PATH`; these are QA-only tools, not application dependencies. Screenshots and machine-readable results are in `/tmp/scalesight-pdf-qa/`. The existing development server's stale stylesheet was refreshed before visual review; production QA uses port 3100.

**Final browser result:** 35/35 views pass, zero horizontal overflow, one H1 per route, zero main-content images, zero desktop axe violations, no runtime errors, and all six keyboard/form assertions pass.

The automated browser matrix covers all seven routes at 360, 390, 768, 1024 and 1440px, document overflow, one H1, absence of imagery in main content, desktop axe checks, mobile keyboard navigation, Escape, native FAQ expansion, partner labels, validation and mocked enquiry success. No enquiry is delivered and no appointment is booked by the tests.

## Performance

Local production observations: fresh contexts, 4× CPU slowdown, 150ms latency and 1.6Mbps download, seven routes at 390/1440px. LCP 684–1660ms; largest CLS 0.06291. Both satisfy the requested lab thresholds (2500ms / 0.1). These are lab observations, not field guarantees. The last Home-card refinement is below the initial viewport and does not change hero assets or rendering.

## Preserved release dependencies

No deployment or external demo activation. Existing `/privacy` still returns 404: the PDF requires an owner-approved notice reflecting actual providers, and supplies no publishable notice. Contact address, notification delivery, review date and Calendly event remain configuration-driven. No address, date, event or policy has been invented. The existing API's acceptance and privacy gates remain. Real delivery and booking must be verified with approved configuration before release. The independent internal `/design-system` route is outside the seven-page marketing content contract.

## Home hero card refinement

Replaced the compact white brief with three staggered cards using the same PDF text in the same order. Added sequential entrance animation, hover lift, stronger numeric emphasis and pale/violet/navy surfaces. Browser-checked at 360/390/768/1024/1440px: three cards visible, zero document overflow; reduced-motion computes animation to `none`. Content-lock remains zero differences. Lint, TypeScript and production build pass. Full brief sections are unchanged.

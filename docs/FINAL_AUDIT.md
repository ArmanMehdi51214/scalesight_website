# Final audit — 20 October 2026

**Content and responsive presentation pass. The site is not fully launch-ready.**

## Verified against the production build

- All 49 H/W/P/E/A/R/C sections match the PDF-derived manifest: zero differences, exact section order, brief figures and labels preserved. Regenerating the manifest directly from the PDF produces no change.
- All seven pages return HTTP 200. Titles and meta descriptions match PDF page 23; canonical and Open Graph URLs resolve correctly.
- 35 required viewport checks (360, 390, 768, 1024, 1440px) plus 21 narrow/reflow checks (320, 512, 720px): no horizontal document overflow. Screenshots reviewed during the redesign and hero refinement.
- One H1 per page, no desktop axe WCAG A/AA violations, and no browser runtime errors. This is Chromium testing, not Safari/Firefox or accessibility certification. Reflow checks represent narrower layout viewports, not actual browser-UI zoom or physical-device testing.
- Mobile menu keyboard opening/Escape and closing after navigation pass. FAQ keyboard expansion, visible hero cards without JavaScript, and reduced-motion behavior pass.
- All 15 distinct internal destinations/anchors checked. Only `/privacy` fails (404); the remaining destinations and anchors pass.
- Form labels/placeholders and planning/pilot/partner/fallback intents pass. Invalid email blocks submission; sending is disabled; server failure retains values and does not open booking; mocked acceptance shows the correct success message. Blocked Calendly shows its fallback link. Untrusted booking-message origins do not mark a meeting booked.
- Local API rejects malformed JSON (400), missing required fields (422), and cross-origin requests (403). The disabled delivery guard returns 503 rather than false success.
- Production build, lint, TypeScript and patch whitespace checks pass.

## Open items / release blockers

1. `/privacy` is linked from the footer/form but has no page. The PDF requires an owner-approved notice describing actual providers; it supplies no publishable policy. No policy was invented or links silently removed.
2. Contact email and notification destination are unset; privacy approval is false. Therefore a real enquiry cannot currently be delivered. Supply the approved identity/delivery endpoint and notice before activation, then verify receipt with an approved test address.
3. A Calendly URL is configured. Widget failure/fallback was tested using interception, but the actual event duration, live booking and confirmation were not verified. No live enquiry or appointment was created.
4. The supporting sample review date remains unset; the date was not fabricated. External named demos remain disabled under the PDF's approval rules. Analytics remain disabled.

The broad visual audit's immediate success assertion was corrected to wait for asynchronous acceptance. The functional audit normalizes equivalent root URLs (`https://scalesight.org` and `https://scalesight.org/`) before comparison. Neither was a site defect. The functional audit intentionally exits nonzero while the Privacy link remains broken.

Evidence: `FINAL_AUDIT_RESULTS.json`. Reproduce with `python3 scripts/content-lock.py http://localhost:3100`, `QA_BASE=http://localhost:3100 node scripts/visual-qa.mjs`, and `node scripts/final-audit.mjs`. Browser scripts use the existing local QA tooling; module/browser paths may be overridden through environment variables. Nothing was deployed.

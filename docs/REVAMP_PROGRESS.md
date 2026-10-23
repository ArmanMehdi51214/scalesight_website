# PDF-locked redesign completed

Branch: `revamp/managed-service`.

- Audited prior design history against the PDF rather than preserving earlier added copy.
- Extracted and source-checked the content manifest; restored 49 sections in prescribed order.
- Removed the earlier diagram components, invented headings, numbers, tabs and paraphrases.
- Committed content restoration, then editorial tokens/shell and each page's visual treatment.
- Preserved Geist, logo, navy/blue identity, #4F49F3 accent, metadata, query intents, redirects and contact/Calendly configuration.
- Completed production build, lint, TypeScript, exact rendered content lock, 35 viewport checks, desktop axe scans and keyboard/mocked form checks.
- Content lock: zero differences. Browser audit: zero failures. See REVAMP_VISUAL_QA.md and REVAMP_QA_RESULTS.json.
- No dependencies added, no real enquiries or bookings, no external publishing.
- Release dependencies remain: approved Privacy Notice, confirmed contact delivery/calendar configuration, and real staging delivery/booking verification. Unapproved demos stay disabled.

## Final audit — 20 October 2026

PDF regeneration and rendered content: zero differences. Production build, lint and types pass. 56 layout/reflow checks pass; no Chromium runtime errors or desktop axe violations. Full link/form/configuration findings are in FINAL_AUDIT.md and FINAL_AUDIT_RESULTS.json.

### OPEN_ITEMS

- `/privacy` returns 404; requires approved policy content reflecting actual providers.
- Contact email/delivery destination unset; privacy unapproved; real submissions return 503.
- Configured Calendly event still needs real duration/booking verification with authorization.
- Sample review date not configured; no invented date. Named demo publication remains disabled.
- Safari/Firefox and physical-device checks were not performed.

## Stitch implementation — 23 October 2026

- Classified all nine desktop screens in STITCH_MAP.md before application edits.
- Stage 1: extracted shared tint, radius and shadow tokens; light header uses the existing coloured primary logo, Geist and existing navigation; navy footer retained. Mobile menu keeps existing behaviour and targets.
- No extra strings added: approved-extras.json is empty.
- Stage 2 is limited to Home; later routes await review.

### Stage 2 — Home ready for review

- Centered light hero, real recovery-options crop, decision cards, navy process section, inset pilot CTA, and derived mobile composition implemented; all manifest sections and targets retained.
- Captured only one decision from the approved demo at 1440×900 / DPR 2 after DOM masking. Image is WebP with responsive Next Image output, dimensions and hero preload. No other example imagery; live demos remain disabled.
- approved-extras.json: neutral alt “Recovery options”; explicitly requested image pill “Illustrative · synthetic data”.
- Brand guard is part of build: zero failures; negative filename test correctly fails. Tesseract unavailable locally, so no OCR claim; masked text, image metadata, visual review and capture hash verified.
- Lint, typecheck, production build and content-lock pass (zero differences). Existing visual-qa: 35 viewports, no overflow or axe violations, keyboard and mocked form checks pass.
- Final audit passes functionality/metadata/reflow; only failing link is the already-known /privacy 404. Contact email, delivery and live booking verification remain open.
- Final Home checks: 360/390/768/1024/1440, all visible targets at least 44×44px, one H1, keyboard/skip/menu Escape focus/FAQ and reduced motion pass. 200% CSS zoom reflow has no overflow.
- Local lab LCP 0.868–0.956s; CLS 0 across three mobile samples at 4× CPU, 4 Mbps down and 40ms latency. This is a local lab result, not field data.
- Screenshots and results: docs/stitch-qa/. Fidelity adaptations and all nine screen mappings: docs/STITCH_MAP.md.
- Commits: shell stage b144ae1; Home stage follows this entry. No deployment. Stop here for Home review; stages 3–4 have not begun.

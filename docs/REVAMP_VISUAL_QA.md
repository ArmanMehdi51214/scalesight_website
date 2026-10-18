# Visual redesign verification

Branch: `revamp/managed-service`. Original baseline: `40e4f3ee4d16306d632c3b569bcf3e974eeb932e`.

## Preserved contract

Browser snapshots compare the baseline with the new document text, including inactive tab panels. Every original visible line is retained (case/whitespace normalized); every anchor's text and literal href, every form field's name/type/required state, and every meta element matches. The expected additions are schematic/disclosure labels, chart text equivalents, repeated approved brief figures and field labels, and the requested ownership diagram. Example content now switches via tabs; all three panels remain in HTML and the DOM. No approved copy was rewritten, and no original link, form field or form behavior changed.

Source diffs also confirm no changes to contact-form logic, booking-panel logic, the contact API, Calendly loader, site configuration, route metadata, redirects, deployment configuration, dependency manifests or font files. The existing logo is retained. No dependency was added and nothing was deployed.

## Browser and accessibility checks

- Chromium: `/`, `/how-we-work`, `/30-day-planning-pilot`, `/examples`, `/about`, `/partners`, `/contact`, `/design-system` and the existing `/privacy` 404 at 360, 390, 768, 1024 and 1440px; screenshots at 390 and 1440px.
- No horizontal document overflow at any tested width. One H1 on every page.
- Reflow at 720px and 512px simulates 200% desktop zoom from 1440px and 1024px. This is equivalent layout-viewport testing, not a browser UI zoom automation.
- Axe WCAG 2 A/AA, 2.1 AA and 2.2 AA checks: no violations on the tested routes at desktop. This is automated verification, not accessibility certification.
- Keyboard: tab arrows, Home and End select/focus the expected tab; three persistent panels, one visible with JavaScript. A keyboard Tab switches the brief to its plain stacked fallback.
- Reduced motion: all three hero card animations compute to `none`; the sticky index is hidden and all fields remain visible.
- JavaScript disabled: all three example panels are visible and all six brief fields remain present. A tiny synchronous enhancement marker prevents the tab fallback from causing a hydration layout shift.
- No runtime page errors in the route audit.

Representative measured contrast ratios: navy/paper 17.97:1; secondary/paper 6.86:1; muted/paper 5.72:1; white/action blue 5.44:1; link blue/paper 7.01:1; dark secondary/navy 11.32:1; pale blue/navy 12.18:1.

## Contact flow

All submissions were intercepted in the browser; no enquiry was sent. Checked required-field validation with no network request, server failure, successful retry, retained partner intent, booking prefill, a mocked Calendly scheduled-event confirmation, and blocked-widget fallback with its booking-page link. Existing handlers and states are untouched.

## Production and performance

Lint, `tsc --noEmit`, `git diff --check`, and the production build pass. PerformanceObserver measurements use the local production server, fresh browser contexts, 4× CPU throttling, 150ms latency and 1.6Mbps download throughput at 390 and 1440px. These are local lab observations, not field performance guarantees. Final LCP ranged from 692–976ms with CLS 0 across all seven service pages at both viewport widths. Results also appear in REVAMP_PROGRESS.md.

The visuals use CSS and inline SVG, with no large illustration downloads or additional fonts. Below-fold diagrams have no data-fetching or image-decoding cost. IntersectionObserver triggers enhancements only as sections enter view; essential content is server rendered.

## Review and existing limits

Review the home hero at 390px first, then the full brief, keyboard tabs and contact success state. The schematic figures intentionally communicate structure without invented values. The existing `/privacy` destination returns 404 in both baseline and redesign; it remains unchanged because routes and targets are locked. Real form delivery and a real Calendly booking were intentionally not performed.

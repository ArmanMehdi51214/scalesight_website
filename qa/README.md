# Layout QA

Open [index.html](index.html) for a route/width comparison, [findings-before.md](findings-before.md) for the original findings, and [final-report.md](final-report.md) for the outcome. The PNGs are original browser captures, not retouched images.

## Reproduce

Start the existing application with `npm run dev -- --hostname 127.0.0.1 --port 3100`. For production checks, build with `npm run build` and run `npm run start -- --hostname 127.0.0.1 --port 3101`. Stop the development preview before rebuilding production to keep Next.js build outputs isolated.

These scripts reuse Playwright and axe from existing local tooling; they add no application dependencies. If those packages are not resolvable from this checkout, set `QA_PLAYWRIGHT_MODULE` and `QA_AXE_MODULE` to their absolute module directories. Set `QA_BROWSER_PATH` to an installed Chrome/Chromium executable when Playwright does not have its own browser. `QA_BASE_URL` defaults to `http://127.0.0.1:3100`.

```sh
./qa/layout-audit before
# Apply layout changes only after reviewing the baseline and writing findings.
./qa/layout-audit after
node qa/interaction-audit.mjs
```

Keep the committed baseline when reproducing the final check: running `before` overwrites its screenshots/report. The final committed `after` artifacts use the production server on port 3101. Baseline artifacts use the development server; its development indicator can appear in the originals.

`layout-audit` runs every active route at 360, 390, 768, 820, 1024, 1180, 1440 and 1920px. Viewport heights are 844px on phones and 1000px for larger widths. It also opens navigation where applicable, tests lightbox keyboard controls/focus return, and scrolls all example anchors at each width. The inactive partners redirect is recorded without activating that route.

The script reports page/element overflow, structural container alignment, target sizes, reserved image dimensions, text-width estimates, equal card heights/padding, anchor-clearance styles and actual example-anchor positions. Cropped image pixels and the scrollable full-resolution lightbox image are intentionally allowed to overflow their own clipping/scroll regions. The skip link is checked while focused by the interaction audit. Text-width estimates are advisory because short cards/captions and body paragraphs have different needs; compound list wrappers are excluded to avoid measuring a container instead of its text.

The after run compares rendered content, CTA/link labels and destinations, and page metadata with the baseline. It exits nonzero for structural/critical failures or preservation mismatches. Advisory line-length entries remain visible in the report and are not silently treated as critical errors.

`interaction-audit.mjs` runs axe WCAG A/AA checks on all active routes at 390 and 1440px. At all eight widths it checks validation-message space, hidden honeypot geometry/tab order, failure/success layouts, responsibility-row alignment, skip-link focus and keyboard FAQ expansion. Form requests are intercepted: no real messages or bookings are created. It also verifies content visibility with JavaScript disabled. Additional screenshots document form states and focused proof frames. `--forms-only` is a diagnostic mode that skips the full-page accessibility scans; final evidence uses the complete run.

The checks are deterministic layout/accessibility smoke checks, not a field Core Web Vitals measurement or a complete manual assistive-technology audit.

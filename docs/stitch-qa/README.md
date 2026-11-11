# Home review — 23 October 2026

[Desktop](home-1440.png) · [Mobile](home-390.png) · [200% CSS zoom](home-zoom200.png)

- Production build, lint, typecheck and exact content-lock passed.
- [Home report](home-report.json): five widths, minimum 44px targets, keyboard pass, reduced motion and contrast pairs. Local mobile lab LCP 0.868–0.956s, CLS 0; full profile recorded in JSON.
- [Visual audit](visual-report.json): 35 route/width combinations, no overflow or axe violations. Updated the historical no-image assertion to check actual image loading, alt text and dimensions because this task explicitly adds an image.
- [Functional audit](functional-report.json): route, metadata, mocked form and booking checks pass. Nonzero exit is exclusively the known /privacy 404. No real submission or booking was sent.
- Browser: Chromium. No Safari, Firefox or physical-device testing; 200% check is CSS zoom/reflow, not an OS/browser-toolbar zoom test.
- Brand guard passes; forbidden-filename negative test passes. Tesseract is not installed, so OCR was not performed; visual review, DOM text, metadata and capture hash used locally.
- Other pages only have shared-shell changes. Their individual Stitch fidelity work is deferred until Home review.

See [Stitch map](../STITCH_MAP.md) for intentional composition, copy and branding differences.

# Stitch screen map

Project `7755843071808658589`. All nine supplied images viewed before implementation; HTML inspected as a design reference only. Exports already present; no redownload.

| Screen ID | Route | State | Frame | Image |
| --- | --- | --- | --- | --- |
| `ef1a8acd76164262a1484e7dc41f3188` | `/` | default | Desktop 2560 × 7844 | [PNG](../stitch-exports/7755843071808658589/01-ef1a8acd76164262a1484e7dc41f3188/screenshot.png) |
| `9c601aa9864c4de2b97ef991ad3d7a54` | `/how-we-work` | default | Desktop 2560 × 9926 | [PNG](../stitch-exports/7755843071808658589/02-9c601aa9864c4de2b97ef991ad3d7a54/screenshot.png) |
| `3bacec6d0ed04c5885388482e9d37162` | `/30-day-planning-pilot` | default | Desktop 2560 × 12862 | [PNG](../stitch-exports/7755843071808658589/03-3bacec6d0ed04c5885388482e9d37162/screenshot.png) |
| `3f4f4ddf482e49c3bb79ed534defc666` | `/examples` | default | Desktop 2560 × 8668 | [PNG](../stitch-exports/7755843071808658589/04-3f4f4ddf482e49c3bb79ed534defc666/screenshot.png) |
| `c3a00018998d4b4b9d67bc56aaede98a` | `/about` | default | Desktop 2560 × 5400 | [PNG](../stitch-exports/7755843071808658589/05-c3a00018998d4b4b9d67bc56aaede98a/screenshot.png) |
| `c741e121ab0f4ae8a088c806d59d92c1` | `/partners` | default | Desktop 2560 × 6740 | [PNG](../stitch-exports/7755843071808658589/06-c741e121ab0f4ae8a088c806d59d92c1/screenshot.png) |
| `9175a7ec7dfa4d7d997121607857a201` | `/contact` | default | Desktop 2560 × 3134 | [PNG](../stitch-exports/7755843071808658589/07-9175a7ec7dfa4d7d997121607857a201/screenshot.png) |
| `38ae05f0dc3f409ab456ed5001f34c27` | `/contact` | accepted enquiry / booking panel | Desktop 2560 × 2672 | [PNG](../stitch-exports/7755843071808658589/08-38ae05f0dc3f409ab456ed5001f34c27/screenshot.png) |
| `8db50b1101a94511b940b679a7455408` | `/contact` | submission failure + invalid email | Desktop 2560 × 3346 | [PNG](../stitch-exports/7755843071808658589/09-8db50b1101a94511b940b679a7455408/screenshot.png) |

## Scope and derivation

No mobile reference supplied. Derive 390px layouts with stacked cards, full-width hero actions, 16–20px gutters, a keyboard-operated mobile menu, and 36–40px H1. Check 360, 768, 1024, and 1440px as well. Contact success reference combines acceptance and booking selection; do not infer a confirmed booking or change the current flow. Screen 9 contains invented alternative copy; use only its error styling in the later Contact stage.

## Design extraction

- 1180px container, 24px desktop gutters; 8px rhythm, 24–32px card padding, 64–96px section padding, 80px desktop header.
- Centered light Home hero and wide browser frame; white three-lane cards; navy process section; pale inset CTA; navy footer.
- Reference radii: 8px buttons, 12–16px panels, pill only for existing permitted content. Soft navy shadows, fine tint borders, diffuse accent wash.
- Type: reference 56/64px hero, 40/48px H2, 20/28px H3, 17/26px body. Map to existing Geist only; no Jakarta or monospace font imports.
- Preserve existing navy #101d35 / #0b162b and accent #4F49F3; derive all new neutral/tint surfaces from these and white.
- Hover: gentle lift/shadow and accent border; visible focus, no pulsing dots, counters or hover-only content. Reduced motion removes transitions.

## Intentional adaptations

- Manifest headings, descriptions, links and section order replace all Stitch copy. Keep all nine Home sections, including the full brief, example links and FAQ omitted by Stitch.
- Remove Managed Decision Modeling, Planning Architecture, variable labels, SKU badges, allocation bar figures, invented browser URL, account avatar, extra CTA links, copyright strings and other unapproved captions.
- Keep the existing logo assets and fonts; no generated logo or doubled wordmark.
- Existing hero brief text is manifest-backed; retain its sequence below the product frame, without invented labels.
- No mobile mockup or confirmed booking screen supplied. Later routes remain unimplemented pending Home review.

## Product imagery

No docs/screens-source directory exists. Captured the approved demo at 1440×900, deviceScaleFactor 2; masked all brand text and hid logos/wordmarks/URLs before capture. Home uses only the recovery-option comparison, with the required synthetic-data pill. No full dashboard, unrelated example art, or live demo links. Capture script: scripts/screens/capture-demo.mjs; provenance: docs/decision-image.json. Tesseract is unavailable locally: reviewed the final image visually and validate masked DOM text, metadata and capture hash in the build; OCR runs automatically wherever tesseract is installed.

Reference metadata reports 2560px raster canvases, while the downloaded thumbnails are 512px tall. Fidelity checks use the requested 1440px viewport (and derived 390px mobile), not an assumption that the small PNG is a 1440px source.

## Home fidelity review

Production screenshots: [1440px](stitch-qa/home-1440.png), [390px](stitch-qa/home-390.png), [200% CSS zoom / reflow](stitch-qa/home-zoom200.png).

- Matched: light centered hero, 1180px shell, 80px desktop header, pale wash, wide rounded browser frame with soft shadow, three-column white lanes, navy process section, inset pilot CTA and dark footer.
- Intentional: manifest headline is shorter than Stitch's headline; wraps into two desktop lines. Geist replaces both reference fonts. Existing primary logo replaces Stitch's duplicated logo treatment. Navy replaces reference near-black; all new tint surfaces derive from brand tokens.
- Intentional: real single-decision recovery-options crop replaces empty canvas; preserve original demo UI inside the crop, with no invented dashboard UI. The three manifest-backed brief cards remain below the frame, preserving the prior content contract.
- Intentional: four approved process steps replace three invented Stitch service cards. Full brief, audiences, example links, FAQ and final CTA remain in manifest order, making the page longer than the source image.
- Spacing: 64px hero top / frame gap; 96px desktop sections; 56px mobile sections; 24–32px card padding. The screenshot frame is shorter than Stitch's empty 520px canvas because it fits one actual decision.
- Type: 56px desktop / 36px mobile H1; 40px / 28px section headings; existing Geist. Shadows use shared navy-derived tokens, with the strongest shadow reserved for the product frame.
- Accessibility corrections: remove pulsing status decoration and account icon; keep 44px targets, restore menu-button focus on Escape, and honor reduced motion.
- No other routes have been restyled beyond the shared shell. Screens 2–9 receive fidelity passes only after Home review.

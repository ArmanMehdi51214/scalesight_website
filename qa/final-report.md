# Visual polish report

The implementation changes only `app/globals.css`. The existing Next.js framework, local Geist font, hosting setup, routes, metadata, redirect rules, form implementation, content modules and public assets are unchanged. The supplied PDF remains outside these commits.

Use [the comparison gallery](index.html) to inspect every route and width. The [original findings](findings-before.md) were written before application changes. Original captures are in [before/](before/); final production captures and reports are in [after/](after/).

## Shared system

- Centralized the requested ink `#10192E`, accent `#4F49F3`, canvas `#F4F6FC`, lilac `#E6E7F9` and white reading surface, plus semantic warning/error/inverse colors. Applied the explicitly requested palette; retained ink header, pilot bands and selected heroes.
- One centered 1248px container; 16px phone gutters and 32px larger-screen gutters. Desktop compositions share a 12-column grid. Mobile uses real single/two-column grids rather than twelve columns whose gaps could exceed the viewport.
- Replaced accumulated overrides with one set of spacing, display/body/caption type, line-height, radius, shadow, header-height and anchor-clearance tokens. Sections use 56/64/88px rhythm; heroes use 64/88px. Balanced headings and pretty-wrapped body copy preserve the supplied text.
- Standardized 48px controls/links, button padding and professional 8px control corners. Shared cards/frames use 16px corners and two restrained shadow levels. Hover colors do not move layout; focus rings remain visible.
- Removed obsolete decorative selector rules and conflicting earlier palette/media overrides. Kept per-asset focus variables because those are intentional screenshot crop settings, not layout nudges.

## Repairs by route

| Route | Repairs |
| --- | --- |
| Home | Unified hero/action rhythm; full-width stacked phone actions; calm question cards; consistent 5/7 showcase splits; normalized brief padding; equal responsibility rows and larger FAQ targets. |
| Planning workspace | Readable stacked phone storyboard/steps; briefs respond to their own available width; isolated outer example-tile rules so nested briefs cannot shrink; consistent proof and disclosure spacing. |
| How we work | Consistent process numbers, title/body alignment and vertical gaps; wider paragraph cards; balanced input grid; aligned responsibility rows; full-height FAQ targets. |
| Examples | Single-column phone options; comfortable paragraph cards at larger widths; aligned synthetic badge/image/caption units; enlargement affordance moved below the image so it cannot cover evidence; consistent anchored section spacing. |
| 30-day pilot | Consistent hero and fee-note rhythm; stacked mobile steps with the number above readable text; equal padded week/deliverable cards; consistent FAQ and closing band spacing. |
| About | Removed the section-wide horizontal offset; placed the accent rule above the heading inside the common container; equal three-card desktop technical grid and shared responsibility alignment. |
| Contact | Aligned panel/sidebar tops; consistent labels and input geometry; reserved two-line validation space using grid; aligned optional/required labels; larger checkbox-label and policy/email targets; full-width phone submit. Hidden honeypot and all form logic preserved. |
| Privacy | 780px maximum reading column with matching hero alignment; index above content below desktop; bounded sticky desktop index; consistent reading/list rhythm, sensible line lengths and 48px links. Existing draft warnings remain. |
| Partners | Remains inactive and keeps the existing redirect; no route or content activation. |
| Shared header/footer | Constant header height, centered logo/control alignment, safe-area clearance, desktop navigation from 1200px and scrollable mobile menu; aligned footer grid, consistent link heights and a comfortable bottom bar. |

## Verification

The final machine-readable results are [layout report](after/report.json) and [accessibility/interaction report](after/interaction-report.json). The summary below compares the baseline with the final verification. All eight active routes were refreshed directly at 360, 390, 768, 820, 1024, 1180, 1440 and 1920px. The inactive partners redirect was also checked.

Checks cover mobile menu opening/Escape/focus return, image viewer opening/close target/keyboard containment/focus return, actual example-anchor scrolling, skip-link focus, keyboard FAQ expansion, equal responsibility rows, no-JavaScript content, field validation geometry and mocked delivery failure/success. No real enquiries or bookings were sent. Additional PNGs document menu, lightbox, form states and focused proof views.

Rendered main content, all link/CTA labels and destinations, and metadata are compared against the baseline at each viewport. A separate Git comparison confirms no changes to page/component logic, copy modules, proof registry or public assets. Lint, standalone TypeScript, production build and all 15 existing contact validation/delivery tests pass. The source/generated-content audit reports no stale-content hits.

| Check | Before | After |
| --- | ---: | ---: |
| Direct route failures | 0 | 0 |
| Horizontal overflow | 0 | 0 |
| Unreserved images | 0 | 0 |
| Small mobile tap targets | 248 | 0 |
| Container alignment errors | 8 | 0 |
| Unequal card rows | 0 | 0 |
| Anchor-clearance risks | 72 | 0 |
| Layout interaction failures | 4 | 0 |
| Runtime errors | 0 | 0 |
| Accessibility violations (16 scans) | — | 0 |
| Failed additional interaction checks (96 checks) | — | 0 |
| Content/link/metadata preservation mismatches | — | 0 |

Text-width estimates are advisory; the final run has 0 flagged blocks. The baseline counter also included compound list wrappers; the final checker measures their actual text blocks instead. This refinement is documented in the runner. All structural and interaction failures are zero.

## Proof legibility and remaining content/asset limits

- The planning-cycle screenshot (`SF-04`) keeps its registered mobile focus. At phone width the focused central steps are readable, but the entire nine-step context, sidebar and small descriptions still require the full-resolution viewer. An owner-approved focused mobile recapture would improve that inline view.
- Production evidence (`IC-01`) keeps its ratio-card crop. The ratio figures remain visible; the full chart, peripheral labels and complete context need enlargement. A focused chart/decision recapture could improve mobile context. No pixels, source images or crop registry values were changed.
- Withheld proof slots still render the existing illustrative HTML brief. Their repetition makes some pages long. Replacing them requires approved generic proof captures; removing or shortening the briefs would change protected content and was not done.
- No copy edits are needed for the repaired layouts. No new visual decision requires approval beyond review of the supplied screenshots; the palette follows this task's explicit design system.

No runtime libraries, network integrations, animations or tracking were added. Image space is reserved and local-font behavior is preserved. LCP/INP/CLS remain performance targets; this local layout pass does not claim field measurements. Existing publication/privacy configuration and its build-time draft warning are unchanged.

## Local commits

- `4739b2f` — baseline screenshots, findings and repeatable layout audit.
- `b78283d` — shared tokens and responsive component polish.
- `dd1bc52` — measured phone heading wrapping.
- The final QA commit contains the finished screenshots, interaction audit, comparison gallery and this report.

Changes remain local for review; no push or deployment was performed for this polish pass.

## Follow-up: homepage hero centering

The owner identified an alignment gap in the centered homepage hero: its width-constrained eyebrow had no automatic inline margins, and the supporting-point flex row used its default start alignment. The earlier mobile override also switched the centered hero to left alignment.

The eyebrow now shares the heading's center line. The supporting points are centered as a group on larger screens and individually stacked/centered on phones. The homepage heading, body and actions retain a coherent centered alignment at all widths; the illustrated brief below retains its deliberate reading alignment. Other pages keep their existing alignment.

The layout audit now measures centered hero text and every wrapped action/supporting-point row, instead of excluding centered compositions. The refreshed `after/` captures and reports cover all eight active routes and all eight responsive widths. Copy, links, metadata, proof assets and interaction logic remain unchanged.

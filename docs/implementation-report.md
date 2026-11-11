# ScaleSight implementation report

11 November 2026. Branch: `wahib-nov11`. Existing Next.js/React stack and hosting retained. Local implementation only; no deployment or remote push was performed.

## Source and audit

Read the complete owner-supplied v2.0 / 10 November 2026 PDF from the repository root and applied the attached prompt's overrides. [Phase 0 audit](phase-0-audit.md) records each stale source hit with file and line, its replace/delete decision, deployed observations, and the prior compiled-output inventory. The user-supplied PDF remains unchanged at the root.

The existing live site was inspected separately: its content differs from this historical checkout. The live Privacy Notice was retrieved over HTTPS and its existing substance, 23 October 2026 date, Draft warning and bracketed legal fields are retained. The legal draft has not been represented as approved.

## Routes

| Route                                             | Result                                                                                                                     |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `/`                                               | H01–H10, decision headline, service, evidence, responsibilities, paid pilot and FAQ                                        |
| `/planning-workspace`                             | New; WS01–WS06, readable storyboard, bounded-comparison explanation, proposed architecture distinction                     |
| `/how-we-work`                                    | New; HW01–HW07, six-step cycle, methods, scoped inputs, role boundaries and FAQ                                            |
| `/examples`                                       | New; EX01–EX06, anchor selector and supply/production stories with synthetic disclosures                                   |
| `/30-day-planning-pilot`                          | Entire old page replaced with P01–P09; paid pilot, fee/scoping note, four-week proposal, continuation by agreement         |
| `/about`                                          | Replaced with A01–A06; typography-led, no invented people, credentials or portraits                                        |
| `/partners`                                       | R01–R04 implemented behind `partnersActive: false`; 307 redirect to `/contact?intent=partner`                              |
| `/contact`                                        | Decision-specific enquiry, required/optional fields, intent prefill, server validation, honest delivery and booking states |
| `/privacy`                                        | Eleven required coverage headings; existing draft substance preserved; sticky desktop index and explicit Draft warning     |
| `/api/contact`                                    | Server-only validated enquiry adapter; no false-success response                                                           |
| `/sitemap.xml`, `/robots.txt`, `/opengraph-image` | Added; canonical metadata and generic branded social preview                                                               |
| Unknown routes                                    | Helpful 404 with return link                                                                                               |

Permanent 308 redirects: `/case-studies` → `/examples`; `/forecasting` → `/how-we-work`; `/confident` and `/30-day-plan` → `/30-day-planning-pilot`; `/design-system` → `/planning-workspace`. All six redirects, including the conditional partner redirect, were checked directly.

Header/footer use the requested labels and active-route state. Existing brand logo and local Geist font are retained. Palette override: at the owner's subsequent request, colors and section placements now follow commit `d6eadd44f05f0157f3ed6214e84124a7d334f5b8`, superseding the PDF palette. Navy `#101d35`, deep navy `#0b162b`, paper `#fafbfe`, ink `#142139`, slate `#506078`, accent `#4f49f3`, hover `#3e38d6`, light accent `#bcbaff`, soft background `#f0f3fa` and border `#dce2ed`. Home/pilot heroes and the supply showcase use navy; footer uses deep navy and the existing white brand logo. Content, routes and layout are retained.

## Components and content

Created/replaced: Header, Footer, HeroSection, ContentSection, DemoShowcase, DecisionBrief, ProofImage, ProcessSteps, ResponsibilityGrid, FAQ, ScenarioComparison, ContactForm, LegalNotice, ExampleTiles, PilotBand and shared CTA components. Removed legacy unused components and the old dashboard guide/images.

- `content/copy.ts`: PDF publishable blocks with generic scenario substitutions; render directions and internal gates are excluded.
- `content/proofAssets.ts`: one typed proof registry with asset ID, source/public paths, synthetic classification, generic scenario, description, alt, caption, crop focus/scale, CTA target and publication state. Missing dates/routes/approval are explicitly unknown.
- `lib/site-config.ts`: canonical host/email, booking URL, inactive-partner flag, privacy and publication gates.
- No analytics provider was present, so no provider, cookies, tracking calls or unapproved analytics events were added.
- Organization schema contains only name, canonical URL and service description; no ratings, outcomes or invented facts.

## Screenshot findings and recaptures

All nine supplied seafood/ice-cream PNGs are retained **byte-for-byte unchanged**, verified against Git source using SHA-256. Six unrelated visual-series images and their old guide were removed. Generic filenames replace the original public names.

Full-resolution review revealed that generic outer headers did not remove all real names or packaging marks inside the captures. The no-brand-name rule and no-pixel-edit rule apply together. Six unsafe originals are therefore preserved under `docs/proof-originals/` and are not served by Next.js. Their public registry paths are null; those slots render the approved GEN-01 selectable HTML brief. Private originals must stay outside any static hosting public directory.

| ID     | Capture                        | Publication / recapture need                                                                                                                                                                                                |
| ------ | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SF-01  | Weekly supply brief            | Withheld: real names in internal heading/decision badge and branded product art; development issue indicator also visible. Recapture generic individual decision cards for 360px.                                           |
| SF-02  | Supply intervention            | Withheld: real name in decision section. Only a selected response is captured, not the requested multi-option comparison. Recapture the decision and option cards with numbers legible on mobile.                           |
| SF-03  | Allocation                     | Withheld: real name in decision section. Recapture generic recommendation/allocation view.                                                                                                                                  |
| SF-04  | Managed planning cycle         | Used unmodified on How We Work and Workspace. Mobile focus zooms into the cycle. Full nine-step context and small descriptions still require enlargement at 360px; a focused recapture would improve inline legibility.     |
| SF-05  | Systems/ownership architecture | Withheld: named systems and logos conflict with generic public imagery. SF-04 is used for WS04 instead.                                                                                                                     |
| IC-01  | Launch incrementality          | Used unmodified on Home and Examples. Mobile ratio-card numbers are readable with configured crop; full chart/context is available in the full-resolution viewer. This is not the missing opening-versus-repeat-order view. |
| IC-02  | Production mix table           | Withheld: real names remain on packaging. Whole table is too dense for inline mobile reading; recapture a generic selected comparison card.                                                                                 |
| IC-03  | Selected-product detail        | Withheld: real name on packaging; recapture generic product art/detail.                                                                                                                                                     |
| IC-04  | Cash calendar                  | Clean generic capture retained publicly in the registry; not inserted into an unrelated required section. Calendar spans multiple commitments and needs a focused recapture if used as an inline mobile example.            |
| GEN-01 | Six-field brief                | No image supplied. Uses the PDF's selectable six-field text; no invented operating figures, dates or reviewer names.                                                                                                        |

Every displayed screenshot has an adjacent visible HTML synthetic badge, generic alt/caption, responsive Next Image `sizes`/`srcset`, explicit dimensions, lazy loading below the fold, per-asset mobile focus and zoom, keyboard-accessible modal and accessible direct full-resolution link. Next Image supports WebP/AVIF negotiation; original source pixels are untouched. The native modal traps focus, closes with Escape, restores focus and permits touch zoom/horizontal image inspection without horizontal page overflow. Hero has no screenshot while SF-01 is withheld, so no unnecessary hero image preload is emitted; the image component preloads a configured hero capture when a safe one is available.

## Copy / behavior deviations from the PDF

1. All scenario names, anchors, filenames, captions and metadata are generic, as explicitly required by the prompt. Anchors are `/examples#supply-timing`, `/examples#production-mix` and `/examples#sample-brief`.
2. No outbound demo links. Screenshot buttons open full-resolution images; section links stay on-site. **TODO: demo links require owner approval or renamed generic destinations before they can be added.**
3. Unsafe screenshot slots use GEN-01 fallback rather than exposing prohibited names or modifying pixels. The safe launch capture is used for IC-01; no repeat-order view was supplied. Safe SF-04 substitutes for the architecture image.
4. WS03 uses plain readable Baseline/Alternative text while matched, safe comparison screenshots are unavailable. No toggles, reset or editable inputs are shown because no recalculating comparison was implemented or claimed. The reviewed-recommendation boundary stays visible. Source data cannot be mutated.
5. Six-field values come verbatim from EX05, with labels normalized to H07's exact six fields. Owner/date/assumptions are stated as scoping requirements, with no invented fixture values. No screenshot numbers were retyped into HTML.
6. Supplemental option-card labels, responsibility bullets, captions, safe-image fallback behavior and form error wording implement the PDF's component contracts. They introduce no outcomes or product capabilities.
7. Existing privacy sections 11–13 are grouped under required section 11, preserving their substance. Canonical email reads from shared config. Draft warnings are preserved and a build-time warning is emitted.
8. Contact delivery is a documented adapter contract, not a claimed working email service. Missing delivery configuration returns 503 and retains the form entries. Only an actual adapter response of `accepted: true` can produce received status. Booking is a separate optional step.

## QA evidence

Production build, ESLint, standalone TypeScript check and 15 contact validation/delivery tests pass. Provider success/failure tests use an in-memory mock; no test messages were sent. The configured existing booking endpoint returned HTTP 200, without scheduling anything.

Browser checks use the production build and installed Chromium/Playwright. Machine-readable evidence is saved in `docs/qa-results.json`; final active-source/rendered-output audit is in `docs/content-audit-results.json`. Additional checks confirm the actual Geist font is applied and the six-step storyboard and brief remain visible with JavaScript disabled (`docs/additional-qa-results.json`). A final focused 360/390px check confirms the corrected production-image focus (`docs/mobile-crop-qa-results.json`); its source ratio numbers are visible without altering the image.

| Width  | Route refreshes   | Horizontal page overflow | Result                             |
| ------ | ----------------- | ------------------------ | ---------------------------------- |
| 360px  | All 8 core routes | None                     | Pass; screenshot limitations above |
| 390px  | All 8 core routes | None                     | Pass                               |
| 768px  | All 8 core routes | None                     | Pass                               |
| 1024px | All 8 core routes | None                     | Pass                               |
| 1440px | All 8 core routes | None                     | Pass                               |

All 40 route/width combinations return 200, have one H1, unique route metadata and a canonical URL. Axe checks at 390px and 1440px find zero WCAG A/AA violations. This automated result is not a full accessibility certification. Native lightbox keyboard opening, Tab/Shift+Tab containment, Escape and focus return pass. Mobile menu expansion/route closure, required errors, actual unconfigured-delivery failure with preserved entries, mock-confirmed receipt, optional booking/fallback, reduced-motion behavior, internal links, anchors, all redirects, sitemap, robots and social preview pass. No browser runtime errors were observed.

Source and generated HTML/RSC/metadata contain **zero stale business claims** from the deny list. The two publishable PDF disclosures containing “live” are retained because they explicitly deny client integrations; generated copies of those disclosures are also expected. Accessibility announcement attributes and vendor runtime terms are not claims. Internal historical audit, source PDF and withheld original pixels are intentionally not rewritten to conceal the source evidence.

Performance: images reserve their space and use responsive optimization; lower images are lazy-loaded; font is local with swap; no third-party calendar script or analytics loads on initial render. LCP ≤2.5s, INP ≤200ms and CLS ≤0.1 are targets, **not measured field results**. Representative network/device performance and real traffic metrics remain release validation work.

## Owner decisions and launch blockers

- **Privacy/operator:** finalize registered operator identity, retention, actual provider list, transfer locations/safeguards and all bracketed warnings with the legal reviewer. Confirm approved publication date. `privacyApproved` stays false.
- **Proof:** provide generic recaptures for the six withheld assets; confirm all product art, marks, timestamps/review labels and numbers in every public capture are approved. Missing repeat-order, options and neutral screenshot views are listed above.
- **Delivery:** choose/configure the real delivery endpoint, credentials and inbox; verify durable receipt end to end and agree provider-specific abuse protection. Public email is the existing canonical `arman@scalesight.org`; confirm that address is still the desired inbox.
- **Review capability:** owner must confirm actual weekly specialist-review availability and delivery capability stated in HW06/A05 and the service promise. No reviewer identities or completed engagements were invented.
- **Partners:** inactive by default; owner decides whether to activate the advisory channel and its relationship/data boundaries.
- **Booking:** existing configured booking URL responds 200 and is reused; owner should verify the destination/account and an actual booking flow. A received enquiry never claims a booked meeting.
- **Founder portrait:** none supplied; typography-led layout is implemented. Portrait is optional, not a blocker for this layout.
- **Demo links:** remain on-site only; external links require generic renaming and explicit approval.
- **Release:** no deployment/push performed. Preserve current production until legal, proof and delivery gates are resolved; complete representative performance and final owner visual review before deliberate release. Pages are noindex while publication/privacy approval remains false.

## Follow-up: direct blue hero backgrounds

Home and Pilot now render as full-width sections with constrained inner content. Navy/gradient backgrounds are applied directly to each section, replacing the negative-layer pseudo-element. Fresh production browser checks at 360px and 1440px confirm the expected navy/gradient, viewport-wide sections and no horizontal overflow; see `direct-background-qa-results.json`. Lint, production build and TypeScript pass. The URL where the owner reported white remains unconfirmed, so the observed external/local running-server cause has not been asserted.

## Follow-up: site-wide blue theme

The owner clarified that the header and all service/company/contact/legal pages should be blue, including areas left white by the reference revision. This latest instruction supersedes the earlier selective dark-section placement. The shared canvas is now deep navy `#0b162b`, content panels navy `#101d35`, secondary surfaces `#14243d`, primary text white and secondary text `#bbc7da`. Links/focus use the light accent for dark-surface contrast, buttons retain the violet brand accent, and the header uses the existing white logo. Screenshot pixels and all content are unchanged. Error and legal draft warnings keep distinct readable warning colors. Browser evidence for all eight pages at 360/1440px and the expanded mobile menu is recorded in `sitewide-blue-qa-results.json`.

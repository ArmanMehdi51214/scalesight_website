# ScaleSight — The considered commitment

**Concept:** An editorial planning practice, expressed through spacious typography and layered, reviewed decision artifacts on cool blue paper.

## Single token source
All design tokens live in `app/globals.css` under `:root`; components consume their semantic aliases. Keep the existing locally served Geist family and original logo. Navy ink anchors light reading surfaces; dark ownership sections give the page a deliberate change of pace.

- Colour: original navy `#07111f`, blue `#005ef0`, cyan `#04b4fd`; accent `#4f49f3`. Paper `#f7f9fd`, wash `#edf2fc`, white surfaces; navy body ink and slate secondary ink. Dark sections use white and pale blue text. Accent is sparing.
- Type: existing Geist; display 60/64 desktop, 38/42 mobile; section 44/48 to 30/36; card 20/28; body 16/28 and 18/32; labels 12/20. Tight display tracking, normal reading text.
- Radii: 12, 16, 24px. Hairline: 1px navy at 12% opacity (white at 16% on navy).
- Shadows: low surface = short contact plus broad faint shadow; elevated artifact = two soft navy shadows; hero = contact, medium and diffuse navy layers.
- Space: 8px base; 16/24 gutters, 24/32 card padding, 48/64 composition gaps, 80/112 section rhythm; content width 1180px.
- Washes: blue radial at upper right over paper; cyan radial at lower left with faint accent at upper right; closing band combines blue wash with a fine navy grid. No bitmap illustrations.

## Components
ArtifactCard, OptionComparison (equal visual treatment, accessible text), TimelineStrip (schematic), TabPanel (progressively enhanced keyboard tabs, persistent DOM), PillarFeature, OwnershipSplit, ProcessPath, sticky-field DecisionBrief, native FAQAccordion, CTABand. Shared light surfaces, disclosure, diagrams and spacings connect the family.

## Focal visual by page
Home: three layered brief cards; three schematic decision pillars; connected review path; full six-field brief with desktop scroll index; dark handoff lanes and audience tiles; example tabs; generous closing wash.
How we work: six connected review steps and a framed inputs panel.
Pilot: four-week editorial journey with existing week copy; responsibility handoff.
Examples: three large schematic decision views, each followed by evidence → options → output; shared sample brief.
About: oversized founder initials and restrained typographic signature block.
Partners: connected advisor / ScaleSight / agreed-together division diagram.
Contact: elevated form, adjacent expectations, clearly bordered success/booking panel; existing logic and fields unchanged.

## Motion and accessibility
Hero cards enter once in reading order. IntersectionObserver enhances below-fold reveals and path drawing without hiding server content. Tabs crossfade; surfaces lift slightly on hover. No loops or parallax. Reduced motion disables all transitions and animations. Sticky index is desktop/pointer only; keyboard interaction restores plain stacked fields. All charts include text equivalents and visible synthetic disclosure; non-numeric diagrams say Schematic. Focus uses a high-contrast blue ring, targets are at least 44px, and mobile preserves document order.

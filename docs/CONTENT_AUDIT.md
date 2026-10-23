# PDF content audit

Source: supplied 27-page PDF, SHA-256 recorded in content-manifest.json. The manifest is extracted directly from PDF text with source assertions, rather than from the existing implementation. Extraction normalizes PDF line breaks only. BUILD instructions and document table headers are excluded.

The initial rendered audit found added eyebrows, FAQ headings, schematic captions, step numbers, ownership paraphrases, extra hero buttons, example tabs and founder monogram. It also found changed punctuation in H02, shortened example field labels, reordered About content and a split founder caption. Section IDs were absent. Restored the PDF reading order and exact wording; removed the old visual components and their unused page implementation. Git history from 40e4f3e shows the previous design added inline diagrams, not raster assets; existing logo files remain.

Conditional rules: demo links stay disabled until approved/configured; the reusable brief is shown in the hero, Home H04, Pilot P04 and Examples E02 as prescribed. Brief field labels follow page 9, values page 10. Supporting decision owner is extracted from Context; no review date is invented. Booking C04 is shown after success. Direct email remains conditional on siteConfig. The form's required indicators, skip link and specific validation messages implement the PDF's accessibility requirements and are separately enumerated. No customer-facing BUILD prose is retained.

The first harness output included document titles in its extra-text report; the final harness inspects body text only and excludes the hidden spam honeypot. FAQ answers are checked in rendered HTML even when collapsed; browser checks cover expansion and visibility.

Final Home-card check: page 9's BUILD instruction requires both a question and a short output on each H06 card. The extractor reuses the exact E03–E05 question/output strings from the PDF to satisfy that instruction; it does not introduce new copy. Form success no longer adds an invented confirmation sentence or calendar-loading label.

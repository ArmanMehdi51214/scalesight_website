# Current booking flow — 23 October 2026

The public contact page now embeds Calendly directly using `NEXT_PUBLIC_CALENDLY_URL`. Visitors select a time and provide booking details in Calendly, without submitting a ScaleSight enquiry form. No enquiry webhook or form-delivery configuration is needed for this flow.

The inline widget uses the brand colors, responsive container sizing, a loading state, a timeout/error message, and a direct booking link that is also available without JavaScript. Its listeners and iframe are cleaned up on navigation. Booking events are accepted only from the embedded Calendly frame and its expected origin.

The privacy notice has been updated to explain that Calendly loads on the contact page. Its other outstanding publication details remain marked for confirmation.

Run `node scripts/site-audit.mjs` for page, accessibility, link, and booking-integration checks. The integration checks substitute a local Calendly test double and never create a real meeting. Real embed loading is checked separately without selecting a time.

---

The following is the historical audit of the previous enquiry-form implementation. Its delivery-setup section does not apply to the current direct-booking flow.

## Previous form audit — 23 October 2026

Audited the local checkout at `http://localhost:3000`. No real enquiries or bookings were sent.

## Results

- Nine pages (`/`, `/how-we-work`, `/30-day-planning-pilot`, `/examples`, `/about`, `/partners`, `/contact`, `/privacy`, `/design-system`) plus the custom 404.
- Eight viewport widths: 320, 360, 390, 512, 768, 1024, 1440 and 1920 pixels. All 80 combinations returned the expected status, had one main heading, loaded their images, and had no horizontal overflow.
- All 15 distinct cross-page links passed HTTP and fragment checks. Same-page section anchors also passed on every page.
- Eleven automated accessibility scans passed, including the contact page on mobile. These are automated Chromium checks, not a full manual assistive-technology or cross-browser certification.
- Mobile menu keyboard opening/Escape closing, keyboard FAQ expansion, reduced motion, and server-rendered home content without JavaScript passed.
- Planning/pilot/partner contact intents and invalid-intent fallback passed.
- Contact required-field, email and website validation, invalid-field focus, sending state, failure recovery, retained values, direct email fallback, network failure/retry, simulated acceptance, and submitted payload passed.
- Booking fallback and rejection of forged booking messages passed. No real booking was made.
- Fifteen API checks passed against the real handler with an isolated delivery test double: validation, normalization, origin protection, honeypot, approval and configuration gates, delivery success/failure, retry, production stub rejection, duplicate detection, rate limits and body limits.
- Production build, brand check and rendered content check passed.

## Fixes

Added a request timeout, focus on the first invalid form field, and a clickable fallback to `arman@scalesight.org`. Unavailable delivery now releases the reserved submission key so the same request can be retried. The public contact email also appears in the shared footer and contact page.

## Delivery setup still required

The actual local contact endpoint returns HTTP 503 with `delivery_unavailable`. Browser success tests intercept the request, and isolated API success tests use a delivery double; neither proves inbox delivery.

Set `CONTACT_NOTIFICATION_DESTINATION` to an existing HTTPS endpoint that accepts the enquiry JSON and delivers it to the intended recipient. Finalize the outstanding privacy-notice details before setting `PRIVACY_NOTICE_APPROVED=true`. These values belong in server-side deployment configuration; see `.env.example`. The configuration gates were preserved. The privacy notice remains marked as a draft and excluded from search indexing.

After configuring delivery, verify a real end-to-end enquiry in the intended inbox with the owner's authorization. A successful webhook response alone does not prove inbox receipt.

## Reproduce

With the local site running:

```sh
node scripts/site-audit.mjs
node scripts/contact-api-qa.mjs
python3 scripts/content-lock.py http://localhost:3000
npm run build
```

`site-audit.mjs` uses the available local Playwright and axe installations, following the existing QA scripts. Alternate installations can be supplied with `PLAYWRIGHT_MODULE`, `AXE_MODULE` and `CHROME_PATH`. Set `QA_BASE` to change the local preview URL. Reports and screenshots default to `/tmp/scalesight-site-audit`; `QA_OUTPUT` overrides that directory. `QA_INTERACTIONS_ONLY=true` resumes interaction checks from an existing report without repeating the page scans.

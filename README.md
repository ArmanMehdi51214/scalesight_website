# ScaleSight website

Next.js 16.2.7 App Router, React 19, TypeScript and Tailwind 4. Existing hosting and deployment configuration are retained. Implementation source: the owner-supplied November 2026 website brief, with the attached prompt's generic-name and screenshot overrides.

## Local development and verification

```sh
npm run dev
npm run lint
node scripts/contact.test.mjs
npm run build
npx tsc --noEmit
node scripts/audit-content.mjs
```

Run the build before the standalone type check when route files have changed, so generated Next.js route types are current. `node scripts/contact.test.mjs` runs 15 tests, including mocked adapter receipt, rejection and failure. It sends no messages.

## Configuration

See `.env.example`. The public canonical host defaults to `https://www.scalesight.org`. The canonical contact defaults to the address already published on the existing website, `arman@scalesight.org`; its override is `NEXT_PUBLIC_CONTACT_EMAIL`. The optional booking URL reads `NEXT_PUBLIC_BOOKING_URL`, falling back to the existing `NEXT_PUBLIC_CALENDLY_URL`. Never put delivery credentials into a `NEXT_PUBLIC_` variable.

`lib/site-config.ts` controls `partnersActive` (false), `privacyApproved` (false) and the publication gate. Pages remain `noindex` until both privacy approval and deliberate publication approval are recorded. Updating configuration does not resolve the substantive legal and service-capability gates.

## Contact delivery

The form is implemented, but this repository has no configured delivery provider. It returns an honest 503 rather than claiming a received enquiry. Field entries remain in the browser on error, with the direct email offered as a fallback.

A server-only adapter can be configured with `CONTACT_DELIVERY_URL` (HTTPS), `CONTACT_DELIVERY_TOKEN`, and `CONTACT_DELIVERY_INBOX`. The endpoint receives a bearer-authenticated JSON POST:

```json
{
  "to": "owner-confirmed inbox",
  "enquiry": {
    "name": "...",
    "email": "...",
    "company": "...",
    "website": "...",
    "role": "...",
    "channels": ["Retail"],
    "decision": "...",
    "intent": "pilot"
  }
}
```

The adapter must durably accept the enquiry and return a successful HTTP response containing `{"accepted":true}`. A generic 200, timeout, rejection or unconfirmed response does not produce success. Select the provider, confirm privacy terms and implement delivery/rate limits appropriate to that provider before enabling it. Do not submit real operational records for testing. No analytics provider was added.

## Proof and publication

`content/copy.ts` holds publishable brief blocks. `content/proofAssets.ts` is the single typed proof registry, including mobile crop configuration and publication state. Nine supplied captures remain byte-for-byte unchanged. Six captures with prohibited names/marks are kept under `docs/proof-originals/`, outside Next.js public serving. Their slots use the PDF's real HTML six-field brief fallback. Replace them only with approved generic recaptures, update the registry and re-run image/lightbox QA. No dashboard pixels were edited or generated.

See [Phase 0 audit](docs/phase-0-audit.md) and [implementation and launch report](docs/implementation-report.md) for route mapping, screenshot gaps, validation and unresolved owner decisions. The existing public Privacy Notice, including its draft/bracket warnings, is preserved in `content/privacy.ts`. A build warning deliberately identifies this launch blocker.

## Browser QA

`scripts/qa-browser.mjs` runs the five-width production-preview checks with Playwright and axe. These QA tools are optional local tooling; application dependencies are unchanged. Use installed `playwright` and `@axe-core/playwright`, or supply absolute module paths through `QA_PLAYWRIGHT_MODULE` and `QA_AXE_MODULE`. Set `QA_BROWSER_PATH` for an existing Chromium executable and `QA_BASE_URL` for the owned local preview. It writes evidence and screenshots under `/tmp/scalesight-*`; it exits nonzero on page, accessibility, link, runtime or interaction failures. Test enquiries use synthetic `.test` addresses; confirmed-success UI is exercised with a browser response mock.

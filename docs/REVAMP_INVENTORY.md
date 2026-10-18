# ScaleSight website inventory

Updated after Steps 1–6. The site uses Next.js App Router, React, TypeScript, and Tailwind CSS. Page content lives in `app/`; shared navigation, page primitives, and the contact form live in `components/`; site settings, sample brief data, and route metadata live in `lib/`. No CMS exports or content service are present.

| Area | Current source | Current state |
|---|---|---|
| Shared shell | `app/layout.tsx`, `components/site-header.tsx`, `components/site-footer.tsx`, `app/globals.css` | Local Geist font, shared skip link, responsive header/footer, and site tokens. |
| Public routes | `app/` | `/`, `/how-we-work`, `/30-day-planning-pilot`, `/examples`, `/about`, `/partners` (conditional), `/contact`; `/privacy` is not implemented. `/design-system` remains outside the public sitemap and is noindex. |
| Metadata and indexing | `lib/site-metadata.ts`, `app/sitemap.ts`, `app/robots.ts`, `next.config.ts` | Canonical and Open Graph metadata are route-specific. Staging sets noindex and omits sitemap entries. Production sitemap contains approved routes, with Partners conditional on config. |
| Redirects | `next.config.ts` | When Partners is inactive, `/partners` redirects once to `/contact?intent=partner`. No legacy planning URLs exist in the inventory; no other redirects are configured. |
| Contact and calendar | `app/contact/`, `app/api/contact/route.ts`, `components/contact-form.tsx`, `lib/site-config.ts` | The server validates form input and only reports success after a configured endpoint accepts it. Development-only stub mode is available. The calendar widget loads on demand and a normal booking link remains available. |
| Configuration | `lib/site-config.ts` | Contact email and notification destination are unset. Demo links and analytics are disabled by default. Staging and sample-brief review date use configuration. |
| Analytics | `lib/analytics.ts`, `components/analytics-listener.tsx` | Events are disabled unless both analytics and privacy-approval flags are set. No external collection provider is configured. |
| Visual assets | `public/` | Shared logo and favicon assets remain. Unused legacy planning imagery and showcase code were removed in Step 6. |

The superseded page copy and unused image gallery were removed from current route and component sources. The pilot FAQ includes the single approved platform-eligibility question; Step 2 and Step 3 copy retains their specified outcome caveats.

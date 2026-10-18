# Updating the ScaleSight site

- **Page copy:** Edit the corresponding file under `app/` and preserve the approved section order and wording in the revamp brief. Shared header, footer, and page components are under `components/`.
- **Illustrative brief:** Edit the single data object in `lib/sample-brief.ts`. Home and Examples render that shared object; keep its synthetic-data disclosure visible.
- **Example links:** In `lib/site-config.ts`, each `exampleDemoLinks` entry has an `enabled`, `url`, and `label`. Links stay hidden unless explicitly enabled; verify the destination and its disclosure before changing a flag.
- **Site settings:** `lib/site-config.ts` is the configuration source. Public settings use `NEXT_PUBLIC_` variables; keep `CONTACT_NOTIFICATION_DESTINATION` server-only. Do not set production form delivery or analytics active until an owner-approved Privacy Notice is available.
- **Metadata and routes:** Update route entries in `lib/site-metadata.ts`; maintain the no-trailing-slash canonical convention. Add only approved public routes to `app/sitemap.ts`.

Contact delivery uses `CONTACT_SUBMISSION_MODE=stub` only in development for local checks. Never use a real enquiry or booking to test a change.

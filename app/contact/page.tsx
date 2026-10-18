import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import ContactForm from "@/components/contact-form";
import { siteConfig } from "@/lib/site-config";

const validIntents = new Set(["planning", "pilot", "partner"]);

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ intent?: string | string[] }> }) {
  const params = await searchParams;
  const queryIntent = Array.isArray(params.intent) ? params.intent[0] : params.intent;
  const intent = validIntents.has(queryIntent || "") ? queryIntent as "planning" | "pilot" | "partner" : "planning";

  return <>
    <SiteHeader />
    <main id="main-content" tabIndex={-1} className="contact-page content-shell px-4 py-16 sm:px-6 md:py-20">
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start lg:gap-x-12">
        <div className="lg:col-start-1 lg:row-start-1">
          <p className="eyebrow">Talk through a decision</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">Bring us the decision you’re weighing.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">Tell us what you’re buying, producing or allocating next. A short conversation will determine whether a focused planning review fits.</p>
        </div>
        <aside className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:sticky lg:top-28" aria-labelledby="expect-heading">
          <h2 id="expect-heading" className="text-xl font-semibold text-white">What to expect</h2>
          <ul className="mt-5 space-y-4 text-base leading-7 text-[var(--text-secondary)]">
            <li>Discuss the commitment and timing.</li>
            <li>Check the relevant data and operating context.</li>
            <li>Agree whether a focused pilot is a useful next step.</li>
          </ul>
        </aside>
        <p className="max-w-2xl text-sm leading-6 text-[var(--text-secondary)] lg:col-start-1 lg:row-start-2">Start with a few details. After sending your enquiry, you can choose a time for a {siteConfig.calendar.durationLabel === "30-minute discovery call" ? "30-minute " : ""}conversation.</p>
        <div className="contact-form-card surface-card rounded-3xl p-5 sm:p-8 lg:col-start-1 lg:row-start-3"><ContactForm intent={intent} /></div>
      </section>
      {siteConfig.contactEmail ? <p className="mt-6 text-sm text-[var(--text-secondary)]">Prefer email? Contact us directly. <a className="underline underline-offset-4" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a></p> : null}
    </main>
    <SiteFooter />
  </>;
}

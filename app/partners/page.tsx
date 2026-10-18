import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { CTABand, Hero, ProcessSteps } from "@/components/revamp-components";
import { getRouteMetadata } from "@/lib/site-metadata";

export const metadata = getRouteMetadata("partners");

const partnerSteps = [
  { title: "Agree a suitable decision and client.", body: "" },
  { title: "Define roles, data access, fees and visibility.", body: "" },
  { title: "Scope the investigation and outputs.", body: "" },
  { title: "Review the recommendation with the agreed stakeholders.", body: "" },
];

export default function PartnersPage() {
  return <>
    <SiteHeader />
    <main id="main-content" tabIndex={-1}>
      <Hero eyebrow="PARTNER ENGAGEMENTS" heading="Add analytical planning capacity to the work you already lead." body="ScaleSight can support an advisor’s client with scoped demand, inventory and supply analysis, reviewed recommendations and a decision brief. We agree the roles and working arrangement before delivery begins." primary={{ href: "/contact?intent=partner", label: "Discuss a partner engagement" }} />

      <section className="border-y border-white/10 bg-[var(--bg-soft)]" aria-labelledby="advisor-fit-heading">
        <div className="content-shell grid gap-8 px-4 py-16 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:py-20">
          <div><p className="eyebrow-chip">A SCOPED NEED</p><h2 className="section-title mt-4" id="advisor-fit-heading">For advisors working around real inventory commitments</h2></div>
          <p className="section-copy">A focused engagement may support fractional operations leaders, supply-chain advisors or systems consultants when a client needs additional analytical capacity around a buying, production or allocation decision.</p>
        </div>
      </section>

      <section className="content-shell px-4 py-16 sm:px-6 md:py-20" aria-labelledby="division-heading">
        <p className="eyebrow-chip">CLEAR ROLES</p><h2 className="section-title mt-4 max-w-3xl" id="division-heading">A clear division of work</h2>
        <p className="section-copy mt-4 max-w-4xl">You contribute the client context and agreed advisory role. ScaleSight maintains the scoped investigation and decision brief. Client relationship ownership, meeting participation and recommendation review are defined together.</p>
        <div className="mt-9 grid overflow-hidden rounded-3xl border border-white/10 md:grid-cols-3">
          <article className="border-b border-white/10 bg-[var(--panel)] p-6 md:border-b-0 md:border-r"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--blue-soft)]">ADVISOR</p><h3 className="mt-4 text-xl font-semibold text-white">Context and advisory role</h3><p className="mt-3 text-base leading-7 text-[var(--text-secondary)]">Contribute the client context and agreed advisory role.</p></article>
          <article className="border-b border-white/10 bg-[linear-gradient(145deg,rgba(0,94,240,0.13),rgba(12,23,39,0.96))] p-6 md:border-b-0 md:border-r"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--blue-soft)]">SCALESIGHT</p><h3 className="mt-4 text-xl font-semibold text-white">Scoped investigation</h3><p className="mt-3 text-base leading-7 text-[var(--text-secondary)]">Maintain the scoped investigation and decision brief.</p></article>
          <article className="bg-[var(--panel)] p-6"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--blue-soft)]">AGREED TOGETHER</p><h3 className="mt-4 text-xl font-semibold text-white">Working arrangement</h3><p className="mt-3 text-base leading-7 text-[var(--text-secondary)]">Define client relationship ownership, meeting participation and recommendation review together.</p></article>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[var(--bg-soft)]" aria-labelledby="partner-process-heading">
        <div className="content-shell px-4 py-16 sm:px-6 md:py-20"><p className="eyebrow-chip">AGREE THE ENGAGEMENT</p><h2 className="section-title mt-4 max-w-3xl" id="partner-process-heading">Set the working arrangement before delivery begins.</h2><div className="mt-8"><ProcessSteps steps={partnerSteps} /></div></div>
      </section>

      <section className="content-shell px-4 py-12 sm:px-6 md:py-16" aria-label="Delivery boundaries">
        <p className="max-w-4xl border-l-2 border-[var(--blue-secondary)] pl-5 text-base leading-7 text-[var(--text-secondary)]">Delivery is scoped to the client and decision. Referral terms, branded delivery, confidentiality and continued support are agreed separately.</p>
      </section>

      <CTABand eyebrow="PARTNER ENGAGEMENT" heading="Discuss a partner engagement" primary={{ href: "/contact?intent=partner", label: "Discuss a partner engagement" }} />
    </main>
    <SiteFooter />
  </>;
}

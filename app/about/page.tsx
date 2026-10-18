import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { getRouteMetadata } from "@/lib/site-metadata";

export const metadata = getRouteMetadata("about");

const principles = [
  "Start with the decision.",
  "Make the assumptions visible.",
  "Check supply and cash consequences.",
  "Keep ownership with the client.",
];

export default function AboutPage() {
  return <>
    <SiteHeader />
    <main id="main-content" tabIndex={-1}>
      <section className="content-shell px-4 py-16 sm:px-6 md:py-24">
        <p className="eyebrow-chip">ABOUT SCALESIGHT</p>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">I started ScaleSight to make deeper planning analysis useful before a brand commits more cash.</h1>
            <div className="mt-9 max-w-3xl space-y-5 text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
              <p>I&rsquo;m Arman, a data scientist. In consumer brands, a forecast is only one input to a much larger decision: what to buy or produce, how much, when, and what the choice means for cash and availability.</p>
              <p>ScaleSight brings data-science analysis and supply-chain review together around the commitments a brand has to make. We work from agreed sales, inventory, incoming supply and lead-time data, investigate changing demand, and compare the options. We maintain the analysis and bring the team a clear recommendation; the team keeps the final call.</p>
              <p>Larger brands often hire planners, analysts and data-science specialists around their systems. ScaleSight gives growing brands access to analytical support without building every capability internally. For lean teams, that adds planning capability. For established teams, it adds bandwidth around a defined investigation.</p>
            </div>
          </div>
          <aside className="founder-block p-7 sm:p-10" aria-label="Founder">
            <p aria-hidden="true" className="select-none text-[6rem] font-semibold leading-none tracking-[-0.1em] founder-monogram sm:text-[8rem]">AM</p>
            <div className="mt-10 border-t border-white/15 pt-5">
              <p className="text-xl font-semibold text-white">Arman Mehdi</p>
              <p className="mt-1 text-base text-[var(--text-secondary)]">Founder, ScaleSight</p>
              <p className="mt-3 text-sm text-[var(--blue-soft)]">Data scientist</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[var(--bg-soft)]" aria-labelledby="principles-heading">
        <div className="content-shell grid gap-8 px-4 py-16 sm:px-6 md:grid-cols-[0.7fr_1.3fr] md:py-20">
          <div><p className="eyebrow-chip">HOW WE THINK</p><h2 className="section-title mt-4" id="principles-heading">A few principles shape every review.</h2></div>
          <ol className="divide-y divide-white/10 border-y border-white/10">
            {principles.map((principle, index) => <li className="flex items-center gap-5 py-5 text-lg font-medium text-white" key={principle}><span aria-hidden="true" className="text-sm font-semibold tracking-widest text-[var(--blue-soft)]">0{index + 1}</span>{principle}</li>)}
          </ol>
        </div>
      </section>

      <section className="content-shell flex flex-col gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between md:py-20" aria-labelledby="about-cta-heading">
        <h2 className="section-title max-w-3xl" id="about-cta-heading">What commitment is your team weighing next?</h2>
        <Link className="primary-button min-h-11 shrink-0" href="/contact">Talk through a planning decision</Link>
      </section>
    </main>
    <SiteFooter />
  </>;
}

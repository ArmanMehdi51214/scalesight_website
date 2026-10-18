import Link from "next/link";
import { TabPanel } from "@/components/visual-interactions";
import { HeroArtifact, PillarFeature, OwnershipSplit, TimelineStrip } from "@/components/brief-visuals";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { FAQAccordion } from "@/components/faq-accordion";
import { CTABand, DecisionBrief, ProcessSteps } from "@/components/revamp-components";

const decisionSignals = [
  {
    title: "A retail launch opens strongly",
    question: "Is this opening stock or repeat demand—and what should change in the next run?",
  },
  {
    title: "One flavor moves faster",
    question: "Should total output increase, or should the mix change within existing capacity?",
  },
  {
    title: "One channel is running short",
    question: "Should you replenish, reallocate usable stock, or hold until the evidence improves?",
  },
];

const processSteps = [
  { title: "Agree the decision and inputs.", body: "" },
  { title: "Investigate what changed and what may explain it.", body: "" },
  { title: "Compare practical options against supply and cash constraints.", body: "" },
  { title: "Bring your team a reviewed recommendation.", body: "" },
];

const capacityOptions = [
  {
    number: "01",
    title: "For teams already planning",
    body: "Add bandwidth around the exceptions, launches and commitments that need deeper investigation.",
  },
  {
    number: "02",
    title: "For lean teams building capability",
    body: "Get maintained analysis and planning review without immediately building every capability internally.",
  },
  {
    number: "03",
    title: "For a specific specialist question",
    body: "Scope a focused investigation around one decision, with clear inputs and limits.",
  },
];

const examples = [
  {
    href: "/examples#supply-timing",
    title: "Supply timing and a promotion",
    output: "A timing recommendation with cash, service and feasibility trade-offs.",
  },
  {
    href: "/examples#launch-demand",
    title: "Launch demand and the next production mix",
    output: "A next-run recommendation with component, capacity and cash implications.",
  },
  {
    href: "/examples#size-depth",
    title: "Size-level demand and the next buy",
    output: "A size-depth recommendation with lead-time, stock and cash trade-offs.",
  },
];

const faqs = [
  {
    question: "Do we need to change systems?",
    answer:
      "We start with agreed inputs and your current planning context. The scope defines how data is shared and what analysis is maintained.",
  },
  {
    question: "Who makes the final decision?",
    answer:
      "Your team does. ScaleSight investigates the evidence, compares options and brings a reviewed recommendation.",
  },
  {
    question: "Do you work with teams that already have planners?",
    answer:
      "Yes. A focused engagement can add analytical bandwidth alongside your existing people and processes.",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <section className="home-hero">
          <div className="content-shell grid items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <div>
              <p className="eyebrow-chip">FOR GROWING CONSUMER BRANDS</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--blue-soft)] sm:text-sm">CPG · BEVERAGES &amp; RTD · DTC APPAREL</p>
              <h1 className="mt-5 max-w-2xl text-[2.25rem] font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-[3.5rem]">Before the next PO, know what deserves the cash.</h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8">We connect demand, inventory and incoming supply to weekly, specialist-reviewed recommendations on quantity, timing and cash.</p>
              <p className="mt-4 text-sm leading-6 text-white sm:text-base">Data science + supply-chain expertise, maintained for you. Your team decides.</p>
              <div className="hero-actions mt-7 flex flex-col gap-3 sm:flex-row">
                <Link className="primary-button min-h-11 justify-center" href="/examples#sample-brief">See an illustrative planning brief</Link>
                <Link className="secondary-button min-h-11 justify-center" href="/30-day-planning-pilot">Explore the 30-day pilot</Link>
              </div>
            </div>
            <div className="min-w-0">
              <HeroArtifact />
            </div>
          </div>
        </section>

        <section className="content-shell px-4 py-16 sm:px-6 md:py-20" aria-labelledby="decision-signals-heading">
          <div className="max-w-3xl">
            <p className="eyebrow-chip">DECISIONS THAT NEED CONTEXT</p>
            <h2 className="section-title mt-4" id="decision-signals-heading">A signal still leaves a decision to make.</h2>
          </div>
          <div className="pillar-grid mt-9">
            {decisionSignals.map((item, index) => <PillarFeature key={item.title} title={item.title} question={item.question} variant={index === 0 ? "launch" : index === 1 ? "size" : "supply"} />)}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[var(--bg-soft)]" aria-labelledby="process-heading">
          <div className="content-shell px-4 py-16 sm:px-6 md:py-20">
            <p className="eyebrow-chip">THE REVIEW</p>
            <h2 className="section-title mt-4 max-w-3xl" id="process-heading">We maintain the analysis behind the next commitment.</h2>
            <div className="mt-9"><ProcessSteps steps={processSteps} /></div>
            <Link className="mt-7 inline-flex min-h-11 items-center text-base font-semibold text-[var(--blue-soft)] underline decoration-white/30 underline-offset-4 hover:text-white" href="/how-we-work">See how we work</Link>
          </div>
        </section>

        <section className="content-shell px-4 py-16 sm:px-6 md:py-20" aria-labelledby="weekly-brief-heading">
          <p className="eyebrow-chip">THE DECISION BRIEF</p>
          <h2 className="section-title mt-4 max-w-3xl" id="weekly-brief-heading">A weekly brief built around the decision.</h2>
          <p className="section-copy mt-4">See what changed, what we checked, and what the options mean before you commit.</p>
          <div className="mt-8"><DecisionBrief /></div>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-[var(--text-muted)]">A reviewed recommendation is a service output, not a guarantee that a recommendation is correct.</p>
        </section>

        <section className="dark-section" aria-labelledby="capacity-heading">
          <div className="content-shell px-4 py-16 sm:px-6 md:py-20">
            <p className="eyebrow-chip">AROUND YOUR PLANNING</p>
            <h2 className="section-title mt-4 max-w-3xl" id="capacity-heading">More analytical capacity around the planning you have.</h2>
            <div className="mt-9"><OwnershipSplit /></div>
            <div className="audience-tiles grid gap-4 lg:grid-cols-3">
              {capacityOptions.map((item) => (
                <article className="audience-tile p-6 sm:p-7" key={item.number}>
                  <p className="text-sm font-semibold tracking-[0.18em] text-[var(--blue-soft)]">{item.number}</p>
                  <h3 className="mt-5 text-xl font-semibold leading-snug text-white">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">{item.body}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 max-w-4xl border-l-2 border-[var(--blue-secondary)] pl-5 text-base font-medium leading-7 text-white">We maintain the analysis and recommendations. Your team validates the operating constraints, makes the final call and executes.</p>
          </div>
        </section>

        <section className="content-shell px-4 py-16 sm:px-6 md:py-20" aria-labelledby="examples-heading">
          <p className="eyebrow-chip">ILLUSTRATIVE EXAMPLES USING SYNTHETIC DATA. THESE ARE NOT CLIENT RESULTS.</p>
          <h2 className="section-title mt-4 max-w-3xl" id="examples-heading">See the reasoning behind the recommendation.</h2>
          <div className="mt-9"><TabPanel items={examples.map((example, index) => ({
            label: `Example 0${index + 1}`,
            content: <article className="example-view">
              <TimelineStrip variant={index === 0 ? "supply" : index === 1 ? "launch" : "size"}/>
              <div><h3>{example.title}</h3><p>{example.output}</p><Link className="mt-6 inline-flex min-h-11 items-center font-semibold text-[var(--blue-soft)] underline decoration-white/30 underline-offset-4 hover:text-white" href={example.href}>Explore this example</Link></div>
            </article>
          }))} /></div>
        </section>

        <CTABand eyebrow="ONE UPCOMING DECISION" heading="Test the approach on one upcoming decision." body="Choose a buy, production run or allocation decision and explore whether maintained analysis and review improve the process." primary={{ href: "/30-day-planning-pilot", label: "Explore the 30-day pilot" }} />

        <section className="content-shell px-4 py-16 sm:px-6 md:py-20" aria-labelledby="faq-heading">
          <div className="max-w-3xl">
            <p className="eyebrow-chip">FAQ</p>
            <h2 className="section-title mt-4" id="faq-heading">Planning questions, answered.</h2>
          </div>
          <div className="mt-8 max-w-4xl"><FAQAccordion items={faqs} /></div>
        </section>

        <section className="closing-section">
          <div className="content-shell px-4 py-16 sm:px-6 md:py-20">
            <p className="eyebrow-chip">NEXT DECISION</p>
            <h2 className="section-title mt-4 max-w-3xl">Have an upcoming commitment still open?</h2>
            <p className="section-copy mt-4">Bring us the choice you are weighing.</p>
            <Link className="primary-button mt-7 min-h-11" href="/contact">Talk through a planning decision</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

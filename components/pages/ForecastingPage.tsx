import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { FAQAccordion } from "@/components/faq-accordion";
import { CTABand, DecisionBrief, Hero, ResponsibilityGrid } from "@/components/revamp-components";

const weeks = [
  {
    number: "01",
    name: "Scope",
    detail: "Agree the decision, products, channels, owner, timing, inputs and constraints. Define how usefulness will be judged. Establish the first decision note and data-gap log.",
  },
  {
    number: "02",
    name: "Establish the read",
    detail: "Prepare and check inputs, distinguish demand from availability effects, and document the baseline and assumptions. Review the first evidence-led read.",
  },
  {
    number: "03",
    name: "Compare options",
    detail: "Investigate the change and compare feasible quantity, timing or mix choices against supply, service and cash constraints.",
  },
  {
    number: "04",
    name: "Review and choose",
    detail: "Review the recommendation, remaining uncertainty and learning. Agree whether to stop, refine the scope or continue with recurring support.",
  },
];

const pilotOutputs = [
  { title: "A decision-specific workspace", body: "A shared view of the evidence, assumptions and alternatives for the agreed question." },
  { title: "Maintained analysis", body: "Forecasts, demand checks and scenarios appropriate to the available data and decision." },
  { title: "Reviewed decision briefs", body: "What changed, what we checked, the options, the recommended action and the cash and service implications." },
  { title: "A final review", body: "A record of the findings, outstanding questions and whether continued support would be useful." },
];

const faqs = [
  { question: "How long is the pilot?", answer: "The proposed pilot is 30 days. We agree the start date, decision deadline and data readiness before work begins." },
  { question: "What does it cost?", answer: "We confirm the fee after agreeing the decision, data requirements and review scope." },
  { question: "How much time will our team need?", answer: "We agree the onboarding and review time during scoping, based on the data and operating context." },
  { question: "Do we need Shopify?", answer: "No single sales platform defines fit. We first confirm whether the relevant data can support the question." },
  { question: "Do you replace our planner or analyst?", answer: "ScaleSight adds analytical planning capacity around an agreed scope. Your team retains operational ownership." },
  { question: "Do you guarantee savings or fewer stockouts?", answer: "We assess evidence and trade-offs. Business outcomes depend on demand, data quality, constraints and the decisions your team takes." },
  { question: "What happens if the data cannot support the question?", answer: "We review the limitation with you and agree whether to narrow the question or change the approach." },
  { question: "What happens after 30 days?", answer: "We review the work together. Continued analysis, support and workspace access require an agreed next scope." },
];

export default function ForecastingPage() {
  return <>
    <SiteHeader />
    <main id="main-content" tabIndex={-1}>
      <Hero eyebrow="30-DAY FOCUSED PLANNING PILOT" heading="Test the managed planning approach on one real decision." body="Choose one upcoming buy, production run or allocation decision. ScaleSight uses agreed inputs to investigate the signal, compare options and bring reviewed recommendations. At the end, decide whether ongoing review is useful enough to make recurring." primary={{ href: "/contact?intent=pilot", label: "Talk through a planning decision" }} />

      <section className="border-y border-white/10 bg-[var(--bg-soft)]" aria-labelledby="starting-point-heading">
        <div className="content-shell grid gap-8 px-4 py-16 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:py-20">
          <div><p className="eyebrow-chip">A DECISION IN SCOPE</p><h2 className="section-title mt-4" id="starting-point-heading">A useful starting point has a real commitment attached.</h2></div>
          <div>
            <p className="section-copy">A strong pilot has a named decision owner, an upcoming commitment date, relevant data and a choice that remains open. It can support a lean team or add bandwidth around an established planning process.</p>
            <ul className="mt-6 space-y-3 border-l-2 border-[var(--blue-secondary)] pl-5 text-base leading-7 text-[var(--text-secondary)]">
              <li>An upcoming production run with competing flavor signals.</li>
              <li>A buying decision affected by size-level returns or availability.</li>
              <li>A supply delay that changes allocation or promotion choices.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-shell px-4 py-16 sm:px-6 md:py-20" aria-labelledby="four-weeks-heading">
        <p className="eyebrow-chip">THE PILOT PATH</p>
        <h2 className="section-title mt-4 max-w-3xl" id="four-weeks-heading">Four weeks, one agreed decision scope.</h2>
        <ol className="pilot-journey mt-10">
          {weeks.map((week) => <li className="journey-stop" key={week.number}>
            <p className="text-sm font-bold tracking-[0.2em] text-[var(--blue-soft)]">WEEK {week.number}</p>
            <h3 className="mt-4 text-xl font-semibold text-white">{week.name}</h3>
            <p className="mt-3 text-base leading-7 text-[var(--text-secondary)]">{week.detail}</p>
          </li>)}
        </ol>
      </section>

      <section className="border-y border-white/10 bg-[var(--bg-soft)]" aria-labelledby="pilot-outputs-heading">
        <div className="content-shell px-4 py-16 sm:px-6 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div><p className="eyebrow-chip">THE REVIEW MATERIAL</p><h2 className="section-title mt-4" id="pilot-outputs-heading">What the pilot gives your team</h2>
              <ul className="mt-7 space-y-5">{pilotOutputs.map((item) => <li className="border-l border-white/20 pl-4" key={item.title}><h3 className="font-semibold text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{item.body}</p></li>)}</ul>
            </div>
            <div className="self-start"><DecisionBrief /></div>
          </div>
        </div>
      </section>

      <section className="content-shell px-4 py-16 sm:px-6 md:py-20" aria-labelledby="roles-heading">
        <p className="eyebrow-chip">DECISION OWNERSHIP</p><h2 className="section-title mt-4 max-w-3xl" id="roles-heading">Who does what</h2>
        <div className="mt-8"><ResponsibilityGrid responsibilities={[
          { party: "ScaleSight", actions: ["Frame the analytical question and organize agreed inputs.", "Investigate signals, compare options and document assumptions.", "Prepare and review recommendations within scope."] },
          { party: "Your team", actions: ["Provide relevant data and explain operating constraints.", "Validate lead times, costs, MOQs, commitments and practical feasibility.", "Review the trade-offs, make final decisions and execute."] },
        ]} /></div>
      </section>

      <section className="border-y border-white/10 bg-[var(--bg-soft)]" aria-labelledby="judge-heading">
        <div className="content-shell grid gap-8 px-4 py-16 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:items-center md:py-20">
          <h2 className="section-title" id="judge-heading">Judge the pilot by the decision it supports.</h2>
          <p className="section-copy">Did the analysis clarify the choice? Did it arrive before the commitment? Were the assumptions and trade-offs usable? Did it help the team decide what to change, hold or investigate? We quantify effects where the data supports them.</p>
        </div>
      </section>

      <section className="content-shell grid gap-8 px-4 py-16 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:py-20" aria-labelledby="continue-heading">
        <div><p className="eyebrow-chip">AFTER THE PILOT</p><h2 className="section-title mt-4" id="continue-heading">Continue when the review earns its place.</h2></div>
        <p className="section-copy">After the pilot, we review what was useful and what remains open. Any ongoing engagement has an agreed decision scope, review cadence and fee. Continued access and support are defined in that agreement.</p>
      </section>

      <section className="border-y border-white/10 bg-[var(--bg-soft)]" aria-labelledby="pilot-faq-heading">
        <div className="content-shell px-4 py-16 sm:px-6 md:py-20"><p className="eyebrow-chip">FAQ</p><h2 className="section-title mt-4" id="pilot-faq-heading">Pilot details</h2><div className="mt-8 max-w-4xl"><FAQAccordion items={faqs} /></div></div>
      </section>

      <CTABand eyebrow="YOUR UPCOMING DECISION" heading="Have a buy, run or allocation decision approaching?" primary={{ href: "/contact?intent=pilot", label: "Talk through a planning decision" }} />
    </main>
    <SiteFooter />
  </>;
}

import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { FAQAccordion } from "@/components/faq-accordion";
import { CTABand, Hero, ProcessSteps, ResponsibilityGrid } from "@/components/revamp-components";
import { getRouteMetadata } from "@/lib/site-metadata";

export const metadata = getRouteMetadata("howWeWork");

const steps = [
  { title: "Choose the decision", body: "Agree the upcoming buy, production, replenishment or allocation decision, the products and channels involved, the timing and the decision owner." },
  { title: "Agree the inputs", body: "Start with relevant sales or sell-through, stock, open purchase orders, lead times and product definitions. Add returns, exchanges, promotions, costs or retailer data where the question needs them." },
  { title: "Investigate the signal", body: "Check availability, promotions, seasonality, launches and channel changes. Use statistical or machine-learning methods where useful, with assumptions and limits visible." },
  { title: "Compare the options", body: "Compare practical choices on quantity, timing or mix against supply constraints, service risk and cash exposure." },
  { title: "Review and recommend", body: "Apply planning review and prepare a concise recommendation for your team to discuss and decide." },
  { title: "Maintain the work", body: "Refresh the agreed analysis during the engagement and revisit the decisions when the evidence or constraints change." },
];

const faqs = [
  { question: "Can you work alongside our planning system?", answer: "Yes. We scope the additional analysis around your existing process and the decision that needs attention." },
  { question: "Is every engagement machine learning?", answer: "No. The question, data and decision horizon determine which methods are useful." },
  { question: "What if the data is incomplete?", answer: "We identify the gaps, state the assumptions and agree whether a narrower investigation can still be useful." },
  { question: "Will you place orders for us?", answer: "Your team retains approval and execution of buys, production and allocation." },
];

export default function HowWeWorkPage() {
  return <>
    <SiteHeader />
    <main id="main-content" tabIndex={-1}>
      <Hero eyebrow="HOW WE WORK" heading="From a demand signal to a decision your team can act on" body="ScaleSight works with the data and planning context you already have. We investigate what changed, compare the available options, and bring your team a reviewed recommendation. The workspace supports the service; your team does not have another planning tool to operate." primary={{ href: "/contact", label: "Talk through a planning decision" }} />

      <section className="border-y border-white/10 bg-[var(--bg-soft)]" aria-labelledby="steps-heading">
        <div className="content-shell px-4 py-16 sm:px-6 md:py-20">
          <p className="eyebrow-chip">THE REVIEW PATH</p>
          <h2 className="section-title mt-4 max-w-3xl" id="steps-heading">Start with the commitment, then agree the inputs.</h2>
          <div className="mt-9"><ProcessSteps steps={steps} /></div>
        </div>
      </section>

      <section className="content-shell grid gap-8 px-4 py-16 sm:px-6 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-20" aria-labelledby="forecast-heading">
        <div>
          <p className="eyebrow-chip">EVIDENCE AND CONTEXT</p>
          <h2 className="section-title mt-4" id="forecast-heading">Forecasts create evidence. Planning review gives it context.</h2>
        </div>
        <div>
          <p className="section-copy">A demand estimate is one input. We also examine what is available, what is already committed, what can arrive in time and what each option requires from cash and capacity.</p>
          <Link className="mt-6 inline-flex min-h-11 items-center font-semibold text-[var(--blue-soft)] underline decoration-white/30 underline-offset-4 hover:text-white" href="/examples#sample-brief">See an illustrative planning brief</Link>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[var(--bg-soft)]" id="inputs" aria-labelledby="inputs-heading">
        <div className="content-shell px-4 py-16 sm:px-6 md:py-20">
          <p className="eyebrow-chip">AGREED INPUTS</p>
          <h2 className="section-title mt-4 max-w-3xl" id="inputs-heading">Use the data that answers the question.</h2>
          <div className="inputs-panel mt-9 grid md:grid-cols-2">
            <article className="bg-[var(--panel)] p-6"><h3 className="text-xl font-semibold text-white">Demand</h3><p className="mt-3 leading-7 text-[var(--text-secondary)]">Sales and sell-through at the useful product, channel and time level. Separate opening orders from repeat demand where the data allows.</p></article>
            <article className="bg-[var(--panel)] p-6"><h3 className="text-xl font-semibold text-white">Stock and incoming supply</h3><p className="mt-3 leading-7 text-[var(--text-secondary)]">Available and committed stock, open purchase orders, arrival dates and relevant transfer constraints.</p></article>
            <article className="bg-[var(--panel)] p-6"><h3 className="text-xl font-semibold text-white">Operating constraints</h3><p className="mt-3 leading-7 text-[var(--text-secondary)]">Lead times, minimum order quantities, production slots, pack sizes and shelf life where relevant.</p></article>
            <article className="bg-[var(--panel)] p-6"><h3 className="text-xl font-semibold text-white">Commercial context</h3><p className="mt-3 leading-7 text-[var(--text-secondary)]">Promotions, launches, costs, returns or exchanges when they materially change the decision.</p></article>
          </div>
          <p className="mt-6 max-w-4xl text-sm leading-6 text-[var(--text-secondary)]">We agree the data sources and access method during scoping. The analysis reflects the coverage and quality of the available inputs.</p>
        </div>
      </section>

      <section className="content-shell grid gap-8 px-4 py-16 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:py-20" aria-labelledby="owner-heading">
        <div><p className="eyebrow-chip">CLEAR OWNERSHIP</p><h2 className="section-title mt-4" id="owner-heading">A clear recommendation, with a clear owner.</h2></div>
        <ResponsibilityGrid responsibilities={[
          { party: "ScaleSight", actions: ["Maintain the agreed analysis, investigate exceptions, compare options and prepare the reviewed brief."] },
          { party: "Your team", actions: ["Supply operating context, validate constraints, choose the action and execute through your own processes."] },
        ]} />
      </section>

      <section className="border-y border-white/10 bg-[var(--bg-soft)]" aria-labelledby="faq-heading">
        <div className="content-shell px-4 py-16 sm:px-6 md:py-20">
          <p className="eyebrow-chip">FAQ</p><h2 className="section-title mt-4" id="faq-heading">Working through the details.</h2>
          <div className="mt-8 max-w-4xl"><FAQAccordion items={faqs} /></div>
        </div>
      </section>

      <CTABand eyebrow="NEXT DECISION" heading="Have an upcoming inventory decision?" primary={{ href: "/contact", label: "Talk it through with us." }} />
    </main>
    <SiteFooter />
  </>;
}

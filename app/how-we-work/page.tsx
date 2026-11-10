import {
  HeroSection,
  ContentSection,
  DemoShowcase,
  ProcessSteps,
  ResponsibilityGrid,
  FAQ,
} from "@/components/sections";
import ProofImage from "@/components/proof-image";
import { copy } from "@/content/copy";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "How ScaleSight Works | Managed Planning & Review",
  "Agree the decision and inputs, check changing demand and supply, compare feasible responses and review the recommendation. Your team approves and executes.",
  "/how-we-work",
);
const steps = [
  {
    title: "Agree the decision.",
    body: "Define products, channels, owner and commitment date.",
  },
  {
    title: "Agree inputs.",
    body: "Sales, usable stock, open orders, lead times and relevant context.",
  },
  {
    title: "Check the signal.",
    body: "Distinguish demand from stock availability, launches, promotions and channel mix.",
  },
  {
    title: "Compare responses.",
    body: "Quantities, timing, capacity, service and cash trade-offs.",
  },
  {
    title: "Review the recommendation.",
    body: "Check evidence, uncertainty and operating feasibility.",
  },
  {
    title: "Deliver and revisit.",
    body: "Prepare the decision brief and refresh analysis as new evidence arrives.",
  },
];
export default function HowWeWork() {
  return (
    <>
      <HeroSection id="HW01">
        <div className="hero-micro">
          <span>Agreed inputs → Analysis → Review → Your decision</span>
        </div>
      </HeroSection>
      <section className="section white-section" data-section="HW02">
        <div className="container">
          <div className="section-heading">
            <h2>{copy.HW02.title}</h2>
          </div>
          <ProcessSteps steps={steps} />
          <ProofImage assetId="SF-04" />
        </div>
      </section>
      <ContentSection id="HW03">
        <div className="evidence-grid">
          {["Demand", "Availability", "Incoming supply", "Cash/capacity"].map(
            (x) => (
              <article key={x}>
                <h3>{x}</h3>
              </article>
            ),
          )}
        </div>
      </ContentSection>
      <DemoShowcase id="HW04" assetId="SF-02" />
      <section className="section white-section" data-section="HW05">
        <div className="container">
          <div className="section-heading">
            <h2>{copy.HW05.title}</h2>
          </div>
          <div className="evidence-grid">
            {[
              {
                title: "Demand",
                body: "Sales or sell-through by useful product, channel and period.",
              },
              {
                title: "Stock & supply",
                body: "Available inventory, committed stock, purchase orders and receipt timing.",
              },
              {
                title: "Constraints",
                body: "Lead time, MOQ, production slots, pack size and shelf life when relevant.",
              },
              {
                title: "Commercial context",
                body: "Promotions, launches, returns, costs and retailer plans where needed.",
              },
            ].map((x) => (
              <article key={x.title}>
                <h3>{x.title}</h3>
                <p>{x.body}</p>
              </article>
            ))}
          </div>
          <p className="scope-note">
            Data sources and access methods are agreed during scoping.
          </p>
        </div>
      </section>
      <ContentSection id="HW06">
        <ResponsibilityGrid />
      </ContentSection>
      <section className="section" data-section="HW07">
        <div className="container">
          <div className="section-heading">
            <h2>{copy.HW07.title}</h2>
          </div>
          <FAQ
            items={[
              {
                question: "Can you work with our planner or ERP?",
                answer: "Yes, within an agreed analytical scope.",
              },
              {
                question: "Does every project use machine learning?",
                answer:
                  "No. Methods follow the question and the quality of the data.",
              },
              {
                question: "Will ScaleSight place orders?",
                answer: "No. Your team owns approval and execution.",
              },
              {
                question: "What if data is incomplete?",
                answer:
                  "We document the gap and agree a narrower useful question where possible.",
              },
            ]}
          />
          <div className="section-action">
            <a className="button" href="/contact">
              Talk through a planning decision ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

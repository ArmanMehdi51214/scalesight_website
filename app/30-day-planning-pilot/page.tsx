import {
  HeroSection,
  ContentSection,
  DecisionBrief,
  ProcessSteps,
  ResponsibilityGrid,
  FAQ,
  PilotBand,
} from "@/components/sections";
import { copy } from "@/content/copy";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "30-Day Planning Pilot | ScaleSight",
  "Test managed analytical planning on one upcoming buy, production run or allocation choice. A focused paid 30-day pilot with scope and fee agreed before work begins.",
  "/30-day-planning-pilot",
);
export default function Pilot() {
  return (
    <>
      <HeroSection id="P01" />
      <ContentSection id="P02">
        <div className="question-grid">
          {[
            "A production run with competing flavor signals.",
            "An inbound delay with recovery options.",
            "A retail opening that changes allocation.",
          ].map((x) => (
            <article key={x} className="question-card">
              <h3>{x}</h3>
            </article>
          ))}
        </div>
      </ContentSection>
      <section className="section white-section" data-section="P03">
        <div className="container">
          <div className="section-heading">
            <h2>{copy.P03.title}</h2>
          </div>
          <ProcessSteps
            compact
            steps={[
              {
                title: "Week 1",
                body: "Define the decision, inputs, constraints and success criteria.",
              },
              {
                title: "Week 2",
                body: "Validate the baseline, evidence and data gaps.",
              },
              {
                title: "Week 3",
                body: "Compare practical quantity, timing or allocation options.",
              },
              {
                title: "Week 4",
                body: "Review recommendation, uncertainty and next steps.",
              },
            ]}
          />
          <p className="scope-note">
            Proposed plan; timing is agreed around the actual decision deadline
            and data readiness.
          </p>
        </div>
      </section>
      <ContentSection id="P04">
        <div className="evidence-grid">
          {[
            "Decision-specific analytical workspace",
            "Maintained analysis",
            "Reviewed recommendation briefs",
            "Final decision-focused review",
          ].map((x) => (
            <article key={x}>
              <h3>{x}</h3>
            </article>
          ))}
        </div>
        <p className="scope-note">
          Workspace view and access as defined in the scope.
        </p>
        <div className="section-action">
          <DecisionBrief />
        </div>
      </ContentSection>
      <ContentSection id="P05" tone="white-section">
        <ResponsibilityGrid />
      </ContentSection>
      <ContentSection id="P06" />
      <ContentSection id="P07" tone="lilac-section" />
      <section className="section" data-section="P08">
        <div className="container">
          <div className="section-heading">
            <h2>{copy.P08.title}</h2>
          </div>
          <FAQ
            items={[
              {
                question: "Do we need to change systems?",
                answer:
                  "No; we scope the required inputs around your current environment.",
              },
              {
                question: "Do we need machine learning?",
                answer: "Not always; methods follow the question and data.",
              },
              {
                question: "Is client workspace access included?",
                answer:
                  "We define access and allowed interactions in the engagement scope.",
              },
              { question: "Who approves the outcome?", answer: "Your team." },
              {
                question: "Is a financial result guaranteed?",
                answer: "No; we test useful decisions and their trade-offs.",
              },
              {
                question: "What does it cost?",
                answer:
                  "We agree the fee after defining the decision, data and review scope.",
              },
            ]}
          />
        </div>
      </section>
      <PilotBand id="P09" />
    </>
  );
}

import {
  HeroSection,
  SectionIntro,
  DecisionBrief,
  PilotBand,
  Action,
} from "@/components/sections";
import ProofImage from "@/components/proof-image";
import { copy } from "@/content/copy";
import { syntheticDisclosure } from "@/content/proofAssets";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Illustrative Planning Examples | ScaleSight",
  "Explore synthetic supply-timing and production-mix concepts: evidence, alternatives and the recommendation to review before committing cash. These are not client results.",
  "/examples",
);
export default function Examples() {
  return (
    <>
      <HeroSection id="EX01">
        <nav
          className="scenario-selector"
          aria-label="Choose an illustrative scenario"
        >
          <a href="#supply-timing">Supply timing ↗</a>
          <a href="#production-mix">Production mix ↗</a>
        </nav>
        <p className="disclosure">{syntheticDisclosure}</p>
      </HeroSection>
      <article
        className="example-story white-section"
        id="supply-timing"
        data-section="EX02"
      >
        <div className="container">
          <div className="section-heading">
            <SectionIntro block={copy.EX02} />
          </div>
          <ProofImage assetId="SF-02" />
          <div className="option-grid">
            {[
              {
                title: "Accept the delay",
                body: "Review the service gap before the next receipt.",
              },
              {
                title: "Expedite supply",
                body: "Compare earlier availability with incremental freight.",
              },
              {
                title: "Split the shipment",
                body: "Compare advancing part of the supply with remaining exposure.",
              },
              {
                title: "Adjust the promotion",
                body: "Review optional demand alongside protected commitments.",
              },
            ].map((x) => (
              <article key={x.title}>
                <h3>{x.title}</h3>
                <p>{x.body}</p>
              </article>
            ))}
          </div>
          <p className="section-copy">
            A split shipment and reduced optional promotional demand are one
            response to compare. Whether that response is preferable depends on
            available inventory, protected commitments, receipt timing and
            incremental freight.
          </p>
          <p className="disclosure">
            Illustrative concept using synthetic operating data. Not a client
            result.
          </p>
          <div className="supporting-story" data-section="EX03">
            <SectionIntro block={copy.EX03} />
            <ProofImage assetId="SF-03" />
          </div>
        </div>
      </article>
      <article
        className="example-story"
        id="production-mix"
        data-section="EX04"
      >
        <div className="container">
          <div className="section-heading">
            <SectionIntro block={copy.EX04} />
          </div>
          <ProofImage assetId="IC-01" />
          <ProofImage assetId="IC-02" />
          <p className="disclosure">
            Illustrative concept using synthetic operating data. Not a client
            result.
          </p>
          <Action href="/contact?intent=pilot" secondary>
            Discuss a production decision
          </Action>
        </div>
      </article>
      <section
        className="section white-section"
        id="sample-brief"
        data-section="EX05"
      >
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">{copy.EX05.eyebrow}</p>
            <h2>{copy.EX05.title}</h2>
          </div>
          <DecisionBrief />
        </div>
      </section>
      <PilotBand id="EX06" />
    </>
  );
}

import {
  HeroSection,
  ContentSection,
  DemoShowcase,
  ExampleTiles,
  ProcessSteps,
} from "@/components/sections";
import ScenarioComparison from "@/components/scenario-comparison";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Planning Workspace | ScaleSight Decision Intelligence",
  "See the evidence, assumptions, alternatives and reviewed recommendation behind one planning question. Workspace scope and interactions are agreed for each engagement.",
  "/planning-workspace",
);
export default function Workspace() {
  return (
    <>
      <HeroSection id="WS01" assetId="SF-01">
        <div className="hero-micro">
          <span>01 / Review</span>
          <span>02 / Explore</span>
          <span>03 / Decide</span>
        </div>
      </HeroSection>
      <ContentSection id="WS02" tone="white-section">
        <ol className="storyboard">
          {[
            "The decision",
            "What changed",
            "Evidence & assumptions",
            "Options",
            "ScaleSight-reviewed recommendation",
            "Your next action",
          ].map((x, i) => (
            <li key={x}>
              <span>0{i + 1}</span>
              {x}
            </li>
          ))}
        </ol>
      </ContentSection>
      <ContentSection id="WS03">
        <ScenarioComparison />
      </ContentSection>
      <DemoShowcase id="WS04" assetId="SF-04" />
      <div className="container">
        <p className="scope-note">
          Proposed architecture illustrated with synthetic data. Workspace view,
          access and permitted interactions are defined in each engagement
          scope.
        </p>
      </div>
      <ContentSection id="WS05" tone="white-section">
        <ProcessSteps
          compact
          steps={[
            { title: "Works with agreed inputs" },
            { title: "Maintained analysis" },
            { title: "Your final call" },
          ]}
        />
      </ContentSection>
      <ContentSection id="WS06">
        <ExampleTiles />
      </ContentSection>
    </>
  );
}

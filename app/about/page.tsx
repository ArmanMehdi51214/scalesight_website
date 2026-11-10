import {
  HeroSection,
  ContentSection,
  ResponsibilityGrid,
  PilotBand,
} from "@/components/sections";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "About ScaleSight | Analysis Behind the Commitment",
  "ScaleSight connects data-science analysis and practical planning review to production, purchasing, replenishment and allocation decisions for food and beverage brands.",
  "/about",
);
export default function About() {
  return (
    <>
      <HeroSection id="A01" />
      <ContentSection id="A02" tone="white-section" />
      <ContentSection id="A03" className="about-principle" />
      <ContentSection id="A04">
        <ResponsibilityGrid />
      </ContentSection>
      <ContentSection id="A05" tone="white-section">
        <div className="evidence-grid">
          {["Data discipline", "Scenario evidence", "Review"].map((x) => (
            <article key={x}>
              <h3>{x}</h3>
            </article>
          ))}
        </div>
      </ContentSection>
      <PilotBand id="A06" />
    </>
  );
}

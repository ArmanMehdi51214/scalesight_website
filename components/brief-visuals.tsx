import type { ReactNode } from "react";
import { sampleBrief } from "@/lib/sample-brief";

export function ArtifactCard({ title, children, className = "" }: { title: string; children: ReactNode; className?: string }) {
  return <section className={`artifact-card ${className}`}><div className="artifact-heading"><span className="artifact-mark" aria-hidden="true" /><h3>{title}</h3><span aria-hidden="true" className="artifact-corner">↗</span></div>{children}</section>;
}

export function OptionComparison() {
  return <figure className="option-comparison"><figcaption className="sr-only">Compare 6,000 units: 3,000 A / 3,000 B versus 3,600 A / 2,400 B. Neither option is preferred.</figcaption><div aria-hidden="true"><div className="comparison-label"><span>3,000 A</span><span>3,000 B</span></div><div className="comparison-bar"><span className="split-half"/><span className="split-half"/></div><div className="comparison-label"><span>3,600 A</span><span>2,400 B</span></div><div className="comparison-bar"><span className="split-major"/><span className="split-minor"/></div></div></figure>;
}

export function HeroArtifact() {
  return <div className="artifact-stage" aria-label="Illustrative reviewed brief artifacts">
    <p className="artifact-disclosure">{sampleBrief.disclosure}</p>
    <ArtifactCard title="What changed" className="artifact-evidence"><div className="sales-pair" aria-hidden="true"><div><span>Flavor A</span><strong>1,200</strong><i className="sales-bar sales-bar--a"/></div><div><span>Flavor B</span><strong>800</strong><i className="sales-bar sales-bar--b"/></div></div><p className="artifact-note">{sampleBrief.fields[0].value}</p></ArtifactCard>
    <ArtifactCard title="Quantity and timing" className="artifact-options"><OptionComparison/><p className="artifact-note">{sampleBrief.fields[3].value}</p></ArtifactCard>
    <ArtifactCard title="Recommended action" className="artifact-action"><p>{sampleBrief.fields[2].value}</p><div className="artifact-signature" aria-hidden="true"><span/><span/><span/></div></ArtifactCard>
  </div>;
}

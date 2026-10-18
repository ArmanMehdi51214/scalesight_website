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

export function TimelineStrip({ variant = "supply" }: { variant?: "supply" | "launch" | "size" }) {
  const descriptions = {
    supply: "Schematic supply timing: staggered arrival windows connect to a shared decision point. No quantities or dates are implied.",
    launch: "Schematic launch demand: separate observed demand shapes lead to alternative production mixes. No quantities are implied.",
    size: "Schematic size depth: differently sized bars represent a possible assortment to investigate. No quantities are implied.",
  };
  return <figure className={`schematic schematic--${variant}`}><figcaption><span>Schematic</span><span>Illustrative · synthetic data</span></figcaption><svg viewBox="0 0 480 200" role="img" aria-label={descriptions[variant]}>
    <g className="diagram-grid" aria-hidden="true"><path d="M24 40H456M24 80H456M24 120H456M24 160H456M80 24V176M160 24V176M240 24V176M320 24V176M400 24V176"/></g>
    {variant === "supply" ? <g aria-hidden="true"><path className="diagram-line" d="M32 52H176L240 100H448M32 148H176L240 100"/><rect className="diagram-fill" x="64" y="36" width="96" height="32" rx="8"/><rect className="diagram-light" x="96" y="132" width="96" height="32" rx="8"/><rect className="diagram-paper" x="320" y="72" width="88" height="56" rx="12"/><path className="diagram-line" d="m352 100 12 12 20-24"/></g> : variant === "launch" ? <g aria-hidden="true"><path className="diagram-area" d="M32 164 88 140 144 148 200 68 256 84 312 44 368 68 448 40V176H32Z"/><path className="diagram-line" d="m32 164 56-24 56 8 56-80 56 16 56-40 56 24 80-28"/><path className="diagram-dashed" d="m32 164 56-12 56-8 56-20 56 4 56-20 56 8 80-12"/></g> : <g aria-hidden="true"><rect className="diagram-light" x="64" y="104" width="48" height="64" rx="8"/><rect className="diagram-fill" x="144" y="64" width="48" height="104" rx="8"/><rect className="diagram-fill" x="224" y="40" width="48" height="128" rx="8"/><rect className="diagram-light" x="304" y="80" width="48" height="88" rx="8"/><rect className="diagram-light" x="384" y="120" width="48" height="48" rx="8"/><path className="diagram-dashed" d="M40 88H456"/></g>}
  </svg></figure>;
}

export function PillarFeature({ title, question, variant }: { title: string; question: string; variant: "supply" | "launch" | "size" }) {
  return <article className="pillar-feature"><TimelineStrip variant={variant}/><h3>{title}</h3><p>{question}</p></article>;
}

export function OwnershipSplit({ children }: { children?: ReactNode }) {
  return <div className="ownership-split"><div className="ownership-lanes" role="img" aria-label="ScaleSight maintains the analysis and recommendations, then hands the reviewed work to your team to decide and execute."><div><span className="ownership-symbol" aria-hidden="true">↗</span><span>ScaleSight</span><div aria-hidden="true" className="ownership-paper"><i/><i/><i/></div></div><span className="handoff-arrow" aria-hidden="true">→</span><div><span className="ownership-symbol" aria-hidden="true">↳</span><span>Your team</span><div aria-hidden="true" className="ownership-paper"><i/><i/><i/></div></div></div>{children}</div>;
}

export function ProcessPath({ steps }: { steps: { title: string; body: string }[] }) {
  return <ol className="process-path" data-reveal>{steps.map((step,index)=><li key={step.title}><span className="process-node" aria-hidden="true">{String(index+1).padStart(2,"0")}</span><div><h3>{step.title}</h3>{step.body ? <p>{step.body}</p>:null}</div></li>)}</ol>;
}

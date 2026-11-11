import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Plus } from "lucide-react";
import { copy, type SectionCopy } from "@/content/copy";
import { type ProofId } from "@/content/proofAssets";
import ProofImage from "./proof-image";
import type { ReactNode } from "react";
export function Action({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link href={href} className={secondary ? "text-link" : "button"}>
      {children}
      {secondary ? (
        <ArrowRight size={17} aria-hidden="true" />
      ) : (
        <ArrowUpRight size={17} aria-hidden="true" />
      )}
    </Link>
  );
}
export function SectionIntro({
  block,
  heading = "h2",
}: {
  block: SectionCopy;
  heading?: "h1" | "h2";
}) {
  const Heading = heading;
  return (
    <>
      {block.eyebrow && <p className="eyebrow">{block.eyebrow}</p>}
      <Heading>{block.title}</Heading>
      {block.body.map((p) => (
        <p className="section-copy" key={p}>
          {p}
        </p>
      ))}
    </>
  );
}
export function HeroSection({
  id,
  children,
  assetId,
  center = false,
}: {
  id: string;
  children?: ReactNode;
  assetId?: ProofId;
  center?: boolean;
}) {
  const block = copy[id];
  return (
    <section
      className={`hero ${center ? "hero-center" : ""}`}
      data-section={id}
    >
      <div className="container hero-inner">
        <div className="hero-copy">
          <SectionIntro block={block} heading="h1" />
          {block.cta && (
            <div className="hero-actions">
              <Action href={block.cta.href}>{block.cta.label}</Action>
              {id === "H01" && (
                <Action href="/30-day-planning-pilot" secondary>
                  Explore the 30-day pilot
                </Action>
              )}
            </div>
          )}
          {id === "P01" && (
            <p className="fee-note">
              Paid pilot; scope and fee agreed before work begins
            </p>
          )}
          {children}
        </div>
        {assetId && <ProofImage assetId={assetId} hero />}
      </div>
    </section>
  );
}
export function ContentSection({
  id,
  children,
  tone = "",
  className = "",
}: {
  id: string;
  children?: ReactNode;
  tone?: string;
  className?: string;
}) {
  const block = copy[id];
  return (
    <section className={`section ${tone} ${className}`} data-section={id}>
      <div className="container">
        <div className="section-heading">
          <SectionIntro block={block} />
        </div>
        {children}
        {block.cta && (
          <div className="section-action">
            <Action href={block.cta.href} secondary={id !== "H10"}>
              {block.cta.label}
            </Action>
          </div>
        )}
      </div>
    </section>
  );
}
export function DemoShowcase({
  id,
  assetId,
  reverse = false,
  annotations = false,
}: {
  id: string;
  assetId: ProofId;
  reverse?: boolean;
  annotations?: boolean;
}) {
  const block = copy[id];
  return (
    <section
      className={`section showcase ${reverse ? "showcase-reverse" : ""}`}
      data-section={id}
    >
      <div className="container showcase-grid">
        <div className="showcase-copy">
          <SectionIntro block={block} />
          {block.cta && (
            <Action href={block.cta.href} secondary>
              {block.cta.label}
            </Action>
          )}
        </div>
        <ProofImage assetId={assetId} annotations={annotations} />
      </div>
    </section>
  );
}
export { DecisionBrief } from "./decision-brief";
export function ProcessSteps({
  steps,
  compact = false,
}: {
  steps: { title: string; body?: string }[];
  compact?: boolean;
}) {
  return (
    <ol className={`process-steps ${compact ? "process-compact" : ""}`}>
      {steps.map((x, i) => (
        <li key={x.title}>
          <span className="step-number">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3>{x.title}</h3>
            {x.body && <p>{x.body}</p>}
          </div>
          {compact && (
            <ArrowRight className="step-arrow" size={19} aria-hidden="true" />
          )}
        </li>
      ))}
    </ol>
  );
}
export function ResponsibilityGrid() {
  return (
    <div className="responsibility-grid">
      <div>
        <p className="eyebrow">The analytical work</p>
        <h3>ScaleSight investigates</h3>
        <ul>
          {[
            "Organize agreed inputs and maintain the analysis.",
            "Check evidence, compare options and document assumptions.",
            "Prepare reviewed recommendations within scope.",
          ].map((x) => (
            <li key={x}>
              <Check size={17} aria-hidden="true" />
              {x}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="eyebrow">The operating decision</p>
        <h3>Your team decides</h3>
        <ul>
          {[
            "Supply operating context and validate constraints.",
            "Approve or change the decision.",
            "Execute through your existing systems.",
          ].map((x) => (
            <li key={x}>
              <Check size={17} aria-hidden="true" />
              {x}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export function FAQ({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.question}>
          <summary>
            <h3>{item.question}</h3>
            <Plus size={18} aria-hidden="true" />
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
export function PilotBand({ id = "H09" }: { id?: string }) {
  const block = copy[id];
  return (
    <section className="section dark-band" data-section={id}>
      <div className="container band-inner">
        <div>
          <SectionIntro block={block} />
        </div>
        {block.cta && <Action href={block.cta.href}>{block.cta.label}</Action>}
      </div>
    </section>
  );
}
export function ExampleTiles() {
  return (
    <div className="example-tiles">
      {(
        [
          {
            id: "SF-02",
            title: "Supply timing",
            href: "/examples#supply-timing",
          },
          {
            id: "IC-01",
            title: "Production mix",
            href: "/examples#production-mix",
          },
        ] as const
      ).map((item) => (
        <article key={item.id}>
          <ProofImage assetId={item.id} />
          <h3>{item.title}</h3>
          <Action href={item.href} secondary>
            Explore the illustrative decision
          </Action>
        </article>
      ))}
    </div>
  );
}

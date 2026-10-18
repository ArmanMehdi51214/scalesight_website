import Link from "next/link";
import type { ReactNode } from "react";
import { sampleBrief } from "@/lib/sample-brief";

type ActionLink = { href: string; label: string };

export function Hero({
  eyebrow,
  heading,
  body,
  primary,
  secondary,
}: {
  eyebrow?: string;
  heading: string;
  body: string;
  primary: ActionLink;
  secondary?: ActionLink;
}) {
  return (
    <section className="content-shell px-4 py-16 sm:px-6 md:py-20">
      {eyebrow ? <p className="eyebrow-chip">{eyebrow}</p> : null}
      <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
        {heading}
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">{body}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link className="primary-button min-h-11" href={primary.href}>{primary.label}</Link>
        {secondary ? <Link className="secondary-button min-h-11" href={secondary.href}>{secondary.label}</Link> : null}
      </div>
    </section>
  );
}

export function CTABand({
  eyebrow,
  heading,
  body,
  primary,
  secondary,
}: {
  eyebrow?: string;
  heading: string;
  body?: string;
  primary: ActionLink;
  secondary?: ActionLink;
}) {
  return (
    <section className="content-shell px-4 py-12 sm:px-6">
      <div className="cta-panel p-8 md:p-12">
        {eyebrow ? <p className="eyebrow-chip">{eyebrow}</p> : null}
        <h2 className="section-title mt-4">{heading}</h2>
        {body ? <p className="section-copy mt-4">{body}</p> : null}
        <div className="mt-7 flex flex-wrap gap-3">
          <Link className="primary-button min-h-11" href={primary.href}>{primary.label}</Link>
          {secondary ? <Link className="secondary-button min-h-11" href={secondary.href}>{secondary.label}</Link> : null}
        </div>
      </div>
    </section>
  );
}

export function DecisionBrief({ compact = false }: { compact?: boolean }) {
  const fields = compact
    ? sampleBrief.fields.filter((field) =>
        ["What changed", "Recommended action", "Quantity and timing"].includes(field.label),
      )
    : sampleBrief.fields;

  return (
    <article id={compact ? undefined : "sample-brief"} className="decision-brief">
      <p className="decision-brief__disclosure">{sampleBrief.disclosure}</p>
      <p className="decision-brief__context">{sampleBrief.context}</p>
      <dl className="decision-brief__fields">
        {fields.map((field) => (
          <div className="decision-brief__row" key={field.label}>
            <dt>{field.label}</dt><dd>{field.value}</dd>
          </div>
        ))}
      </dl>
      {compact ? <p className="mt-5 text-sm leading-6 text-[var(--text-muted)]">Three of six review fields · full brief below</p> : null}
      {!compact ? <dl className="decision-brief__supporting">
        <div><dt>Decision owner</dt><dd>{sampleBrief.decisionOwner}</dd></div>
        {sampleBrief.reviewDate ? <div><dt>Review date</dt><dd>{sampleBrief.reviewDate}</dd></div> : null}
      </dl> : null}
    </article>
  );
}

export function DecisionCard({
  question,
  evidence,
  options,
  output,
  disclosure,
  destination,
  approvedDemo = false,
}: {
  question: string;
  evidence: ReactNode;
  options: ReactNode;
  output: ReactNode;
  disclosure: string;
  destination?: ActionLink;
  approvedDemo?: boolean;
}) {
  return (
    <article className="surface-card rounded-3xl border border-white/10 p-6">
      <p className="eyebrow-chip">{disclosure}</p>
      <h3 className="mt-5 text-2xl font-semibold text-white">{question}</h3>
      <dl className="mt-6 space-y-5 text-base leading-7 text-[var(--text-secondary)]">
        <div><dt className="font-semibold text-white">Evidence</dt><dd>{evidence}</dd></div>
        <div><dt className="font-semibold text-white">Options</dt><dd>{options}</dd></div>
        <div><dt className="font-semibold text-white">Output</dt><dd>{output}</dd></div>
      </dl>
      {approvedDemo && destination ? <Link className="secondary-button mt-6 min-h-11" href={destination.href}>{destination.label}</Link> : null}
    </article>
  );
}

export const ExampleCard = DecisionCard;

export function ProcessSteps({ steps }: { steps: { title: string; body: string }[] }) {
  return <ol className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{steps.map((step, index) => <li className="flex min-h-full items-start gap-4 border-l-2 border-[var(--blue-secondary)] py-4 pl-4" key={step.title}><span aria-hidden="true" className="text-sm font-bold tracking-widest text-[var(--blue-soft)]">{String(index + 1).padStart(2, "0")}</span><div><h3 className="text-lg font-semibold leading-7 text-white">{step.title}</h3>{step.body ? <p className="mt-2 leading-7 text-[var(--text-secondary)]">{step.body}</p> : null}</div></li>)}</ol>;
}

export function ResponsibilityGrid({
  responsibilities,
}: {
  responsibilities: { party: string; actions: string[] }[];
}) {
  return <div className="grid gap-4 md:grid-cols-2">{responsibilities.map((item) => <section className="surface-card rounded-2xl p-6" key={item.party}><h3 className="text-xl font-semibold text-white">{item.party}</h3><ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[var(--text-secondary)]">{item.actions.map((action) => <li key={action}>{action}</li>)}</ul></section>)}</div>;
}

export function ContactForm({ children }: { children?: ReactNode }) {
  return <section aria-label="Contact form" className="surface-card rounded-3xl p-6">{children}</section>;
}

export function BookingPanel({ children }: { children?: ReactNode }) {
  return <aside aria-label="Booking information" className="surface-card rounded-3xl p-6">{children}</aside>;
}

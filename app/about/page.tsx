import type { Metadata } from "next";
import { ArrowRight, Eye, Handshake, Lightbulb, Settings2 } from "lucide-react";

import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { PrimaryButton, SectionHeader } from "@/components/marketing-primitives";

export const metadata: Metadata = {
  title: "ScaleSight | About the Mission",
  description: "The mission, values, and operating philosophy behind ScaleSight.",
};

const values = [
  {
    icon: Lightbulb,
    title: "Clarity",
    copy: "We strip away noise and turn fragmented signals into decisions teams can actually act on.",
  },
  {
    icon: Eye,
    title: "Visibility",
    copy: "Planning improves when finance, inventory, and growth are looking at the same truth.",
  },
  {
    icon: Settings2,
    title: "Practicality",
    copy: "The system is designed for operators who need useful guidance, not abstract reporting theater.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    copy: "We work like an extension of the team, focused on long-term operating quality as brands scale.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="px-6 py-20 md:py-24">
        <section className="mx-auto max-w-6xl text-center">
          <SectionHeader
            eyebrow="Our Vision"
            align="center"
            title="Helping Ecommerce Brands Scale Without Guesswork."
            copy="We bridge the gap between data complexity and practical intelligence for operators managing modern retail growth."
          />
        </section>

        <section className="mx-auto mt-20 max-w-7xl">
          <div className="surface-card relative overflow-hidden rounded-[2rem] px-8 py-14 text-center md:px-20 md:py-20">
            <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(4,180,253,0.18),transparent_65%)]" />
            <p className="text-[4rem] leading-none text-[rgba(4,180,253,0.28)] md:text-[5rem]">99</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold italic tracking-tight text-white md:text-5xl">
              &ldquo;We help businesses make decisions with confidence.&rdquo;
            </h2>
            <div className="mx-auto mt-8 h-px w-24 bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(4,180,253,0.85),rgba(255,255,255,0))]" />
            <p className="mt-6 text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
              Our core mission
            </p>
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-7xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              title="The Pillars of Our Success"
              copy="Built on transparency, technical rigor, and a deep understanding of modern ecommerce planning."
            />
            <a
              className="inline-flex items-center gap-2 text-sm font-medium text-[#8dd9ff] transition hover:text-white"
              href="/contact"
            >
              Learn more about our methodology
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="surface-card rounded-[1.6rem] p-8">
                  <div className="icon-badge">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                    {item.copy}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-5xl border-t border-white/8 pt-20 text-center">
          <SectionHeader
            align="center"
            title="Ready to transform your business intelligence?"
            copy="Bring your planning questions, current systems, and growth targets. We will meet you where you are."
          />
          <div className="mt-10 flex justify-center">
            <PrimaryButton href="/contact">Start a Conversation</PrimaryButton>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

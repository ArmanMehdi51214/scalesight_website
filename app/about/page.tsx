import type { Metadata } from "next";
import { Eye, Handshake, Lightbulb, Settings2, Target } from "lucide-react";

import {
  absoluteUrl,
  createPageMetadata,
  jsonLdMarkup,
  publisherJsonLd,
} from "@/app/seo";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import {
  PrimaryButton,
  SectionHeader,
} from "@/components/marketing-primitives";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "About ScaleSight | Ecommerce Analytics & Forecasting Experts",
    description:
      "ScaleSight helps growing Shopify and DTC brands plan with confidence through ecommerce analytics, forecasting, and decision intelligence. Learn about our approach.",
    path: "/about",
    keywords: [
      "ecommerce analytics experts",
      "ecommerce consulting",
      "ecommerce planning solutions",
      "ecommerce forecasting experts",
      "data driven ecommerce growth",
    ],
  }),
};

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About ScaleSight",
  url: absoluteUrl("/about"),
  publisher: publisherJsonLd,
  description:
    "ScaleSight helps Shopify and DTC brands with ecommerce analytics, revenue visibility, inventory planning, demand forecasting, and operational decision intelligence.",
};

const values = [
  {
    icon: Lightbulb,
    title: "Clarity",
    copy: "We turn complex ecommerce data into clear views that help teams understand what is happening and what needs attention.",
  },
  {
    icon: Eye,
    title: "Visibility",
    copy: "We help brands see revenue, inventory, demand, and planning signals before they become business problems.",
  },
  {
    icon: Settings2,
    title: "Practicality",
    copy: "We focus on useful insights that support real operating decisions, not dashboards that only look good.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    copy: "We work closely with ecommerce teams to improve planning, reporting, and decision-making as the business grows.",
  },
  {
    icon: Target,
    title: "Decision-focused thinking",
    copy: "Every forecast, dashboard, and recommendation is designed to help leaders make better business decisions with more confidence.",
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
            level="h1"
            title="Helping Ecommerce Brands Scale Without Guesswork."
            copy="We bridge the gap between data complexity and practical intelligence for operators managing revenue visibility, inventory planning, demand forecasting, and operational decision intelligence."
          />
        </section>

        <section className="mx-auto mt-20 max-w-7xl">
          <div className="surface-card relative overflow-hidden rounded-[2rem] px-8 py-14 text-center md:px-20 md:py-20">
            <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(4,180,253,0.18),transparent_65%)]" />
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold italic tracking-tight text-white md:text-5xl">
              &ldquo;We help businesses make decisions with confidence.&rdquo;
            </h2>
            <div className="mx-auto mt-8 h-px w-24 bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(4,180,253,0.85),rgba(255,255,255,0))]" />
            <p className="mt-6 text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
              Our core mission
            </p>
            <p className="relative mx-auto mt-6 max-w-3xl text-sm leading-7 text-[var(--text-secondary)]">
              As ecommerce analytics experts, we support data driven ecommerce
              growth by helping teams turn fragmented sales, inventory, and
              demand signals into clearer planning decisions.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-7xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              title="The Pillars of Our Success"
              copy="Built on transparency, technical rigor, and a deep understanding of modern ecommerce planning."
            />
            {/* <a
              className="inline-flex items-center gap-2 text-sm font-medium text-[#8dd9ff] transition hover:text-white"
              href="/contact"
            >
              Learn more about our methodology
              <ArrowRight size={16} />
            </a> */}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group surface-card relative h-full overflow-hidden rounded-[1.6rem] border border-white/8 p-8 transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-[#04B4FD]/28 hover:shadow-[0_30px_80px_rgba(0,0,0,0.3)]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(4,180,253,0.12),transparent_55%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#04B4FD]/55 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-[#04B4FD]/65 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                  <div className="icon-badge relative transition duration-300 group-hover:scale-110 group-hover:bg-[#04B4FD]/18 group-hover:text-white group-hover:shadow-[0_0_24px_rgba(4,180,253,0.2)]">
                    <Icon size={18} />
                  </div>
                  <h3 className="relative mt-6 text-2xl font-semibold text-white transition duration-300 group-hover:text-[#d9f2ff]">
                    {item.title}
                  </h3>
                  <p className="relative mt-4 text-sm leading-7 text-[var(--text-secondary)] transition duration-300 group-hover:text-white/82">
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
            <PrimaryButton href="/contact">Book a Strategy Call</PrimaryButton>
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdMarkup(aboutPageJsonLd) }}
      />
      <SiteFooter />
    </>
  );
}

import type { Metadata } from "next";
import { Eye, Handshake, Lightbulb, Target } from "lucide-react";

import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import {
  PrimaryButton,
  SectionHeader,
} from "@/components/marketing-primitives";

export const metadata: Metadata = {
  title: "ScaleSight | Your Ecommerce Planning Partner",
  description:
    "ScaleSight is a managed planning partner for Shopify and DTC ecommerce brands. We monitor your business, spot problems early, and help your team plan with confidence.",
  keywords: [
    "ecommerce planning partner",
    "managed planning service",
    "Shopify planning",
    "inventory planning",
    "demand forecasting",
    "DTC ecommerce",
    "weekly decision support",
  ],
  openGraph: {
    title: "ScaleSight | Your Ecommerce Planning Partner",
    description:
      "A managed planning partner for Shopify brands. We monitor your business, spot problems early, and help your team plan with confidence.",
    type: "website",
    siteName: "ScaleSight",
  },
};

const values = [
  {
    icon: Eye,
    title: "We monitor your business",
    copy: "We keep a continuous eye on revenue, inventory, and demand so nothing important slips past your team unnoticed.",
  },
  {
    icon: Lightbulb,
    title: "We identify problems early",
    copy: "We spot stockouts, overstock, and revenue risks before they happen — so you can act instead of react.",
  },
  {
    icon: Target,
    title: "We tell you what needs attention",
    copy: "Every week we surface the decisions that matter most, so your team knows exactly where to focus.",
  },
  {
    icon: Handshake,
    title: "We help you plan with confidence",
    copy: "We work alongside your team as a managed planning partner, not a dashboard you have to figure out alone.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="px-6 py-20 md:py-24">
        <section className="mx-auto max-w-6xl text-center">
          <SectionHeader
            eyebrow="Our Mission"
            align="center"
            title="We Become Your Ecommerce Planning Partner."
            copy="The dashboard is just one part of the experience. The real value is that we monitor your business, identify problems before they happen, and help your team plan with confidence."
          />
        </section>

        <section className="mx-auto mt-20 max-w-7xl">
          <div className="surface-card relative overflow-hidden rounded-[2rem] px-8 py-14 text-center md:px-20 md:py-20">
            <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(4,180,253,0.18),transparent_65%)]" />
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold italic tracking-tight text-white md:text-5xl">
              &ldquo;We stop saying we build dashboards. We become your planning partner.&rdquo;
            </h2>
            <div className="mx-auto mt-8 h-px w-24 bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(4,180,253,0.85),rgba(255,255,255,0))]" />
            <p className="mt-6 text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
              Our core positioning
            </p>
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-7xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              title="How We Work With You"
              copy="Four commitments that make ScaleSight a managed planning partner, not just another tool."
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
            title="Ready to Plan Growth With Confidence?"
            copy="Start with the 30-Day Planning Pilot. Bring your business, and we will build your first planning system."
          />
          <div className="mt-10 flex justify-center">
            <PrimaryButton href="/contact">Book Discovery Call</PrimaryButton>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

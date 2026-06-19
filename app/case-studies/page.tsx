import type { Metadata } from "next";
import Image from "next/image";
import { Activity, Leaf } from "lucide-react";

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
  SecondaryButton,
  SectionHeader,
} from "@/components/marketing-primitives";

export const metadata: Metadata = createPageMetadata({
  title: "Ecommerce Forecasting Case Studies | ScaleSight",
  description:
    "See how ScaleSight helped Shopify and DTC brands gain revenue visibility, inventory planning, and demand forecasting clarity.",
  path: "/case-studies",
  image: "/dashboards%20for%20website/visual%202.png",
  keywords: [
    "ecommerce forecasting case study",
    "Shopify forecasting",
    "Shopify inventory planning",
    "ecommerce decision intelligence",
  ],
});

const studies = [
  {
    tag: "Direct-to-Consumer / Health & Wellness",
    title: "VeloVitality Performance",
    challenge:
      "Rapid scaling created fragmented ecommerce forecasting and planning. Seasonal peaks in hero SKUs regularly triggered stockouts while slower lines soaked up capital.",
    gap:
      '"We were flying blind between production lead times and live sales velocity. Our spreadsheets were already behind reality."',
    outcome:
      "A shared planning view plus real-time SKU heatmaps helped the team gain demand visibility, reduce stockout exposure, and tighten weekly decisions.",
    lessons:
      "The biggest return came from avoiding missed demand, not from more reporting.",
    metric: "+34%",
    label: "Forecast Accuracy",
    icon: Activity,
    visual: "image",
  },
  {
    tag: "Enterprise / Sustainable Apparel",
    title: "EcoThread Collective",
    challenge:
      "Longer supply chain lead times made Shopify inventory planning too slow for shifting demand in core apparel lines.",
    gap:
      '"We had no clear line of sight into how a logistics delay would change our Black Friday inventory position."',
    outcome:
      "Scenario modeling allowed the team to move production earlier, protect revenue visibility, and reduce cash trapped in slow-moving SKUs.",
    lessons:
      "Visibility across finance, merchandising, and supply chain made growth tradeoffs explicit instead of political.",
    metric: "$1.2M",
    label: "Risk Avoided",
    icon: Leaf,
    visual: "chart",
  },
] as const;

function StudyVisual({ visual }: { visual: "image" | "chart" }) {
  if (visual === "image") {
    return (
      <div className="overflow-hidden rounded-[1.25rem] border border-white/8 bg-white/[0.03] shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
        <Image
          alt="Shopify demand forecasting dashboard preview with SKU-level inventory planning"
          className="aspect-[16/10] h-auto w-full object-cover"
          height={1024}
          sizes="(max-width: 768px) 100vw, 720px"
          src="/dashboards%20for%20website/visual%202.png"
          width={1536}
        />
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-white/8 bg-white/[0.03] shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
      <Image
        alt="Ecommerce revenue visibility dashboard preview for forecasting case study"
        className="aspect-[16/10] h-auto w-full object-cover"
        height={1024}
        sizes="(max-width: 768px) 100vw, 720px"
        src="/dashboards%20for%20website/visual%201.png"
        width={1536}
      />
    </div>
  );
}

export default function CaseStudiesPage() {
  return (
    <>
      <SiteHeader />
      <main className="px-4 py-16 sm:px-6 md:py-24">
        <section className="mx-auto max-w-5xl text-center">
          <SectionHeader
            eyebrow="Success Stories"
            align="center"
            level="h1"
            title="Visibility Creates Better Outcomes."
            copy="Real examples of ecommerce brands replacing fragmented planning with revenue visibility, inventory planning, demand forecasting, and ecommerce decision intelligence."
          />
        </section>

        <section className="mx-auto mt-14 flex max-w-6xl flex-col gap-8 md:mt-20 md:gap-10">
          {studies.map((study) => {
            const Icon = study.icon;

            return (
              <article
                key={study.title}
                className="surface-card relative overflow-hidden rounded-[1.7rem] p-5 sm:p-7 md:rounded-[2rem] md:p-9 lg:p-10"
              >
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#04B4FD]/50 to-transparent" />

                <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,1.05fr)] lg:gap-10">
                  <div className="flex min-w-0 flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#8dd9ff] sm:text-xs">
                          {study.tag}
                        </p>
                        <h3 className="mt-4 text-2xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-3xl md:text-4xl">
                          {study.title}
                        </h3>
                      </div>
                      <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] border border-white/10 bg-white/5 text-[#8dd9ff] sm:inline-flex">
                        <Icon size={22} />
                      </div>
                    </div>

                    <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                      <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.035] p-5">
                        <p className="story-label">The Challenge</p>
                        <p className="story-copy">{study.challenge}</p>
                      </div>

                      <div className="rounded-[1.25rem] border border-[#04B4FD]/14 bg-[#04B4FD]/[0.045] p-5">
                        <p className="story-label text-[#8dd9ff]">
                          Visibility Gap
                        </p>
                        <p className="story-copy italic">{study.gap}</p>
                      </div>
                    </div>

                    <div className="mt-7 w-fit rounded-[1.2rem] bg-[linear-gradient(135deg,var(--blue-primary),var(--blue-secondary))] px-5 py-4 shadow-[0_20px_60px_rgba(0,94,240,0.28)]">
                      <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        {study.metric}
                      </p>
                      <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/78">
                        {study.label}
                      </p>
                    </div>
                  </div>

                  <div className="min-w-0">
                    <div>
                      <p className="story-label">Solution Implementation</p>
                      <div className="mt-4">
                        <StudyVisual visual={study.visual} />
                      </div>
                    </div>

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                      <div className="rounded-[1.25rem] border border-white/8 bg-[rgba(7,17,31,0.48)] p-5">
                        <p className="story-label">Outcome</p>
                        <p className="story-copy">{study.outcome}</p>
                      </div>
                      <div className="rounded-[1.25rem] border border-white/8 bg-[rgba(7,17,31,0.48)] p-5">
                        <p className="story-label">Lessons Learned</p>
                        <p className="story-copy">{study.lessons}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <section className="mx-auto mt-16 max-w-5xl md:mt-24">
          <div className="cta-panel text-center">
            <SectionHeader
              align="center"
              title="Ready to build your success story?"
              copy="Bring your team, your planning pain points, and your growth targets. We will help shape the next operating layer."
            />
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <PrimaryButton href="/contact">Book a Strategy Call</PrimaryButton>
              <SecondaryButton href="/plan-with-confidence">
                Explore ecommerce planning
              </SecondaryButton>
            </div>
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdMarkup({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Ecommerce Forecasting Case Studies",
            url: absoluteUrl("/case-studies"),
            publisher: publisherJsonLd,
            description:
              "ScaleSight case studies covering revenue visibility, inventory planning, demand forecasting, and ecommerce decision intelligence.",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: studies.map((study, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "CreativeWork",
                  name: study.title,
                  description: `${study.challenge} ${study.outcome}`,
                },
              })),
            },
          }),
        }}
      />
      <SiteFooter />
    </>
  );
}

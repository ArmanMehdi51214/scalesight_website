import type { Metadata } from "next";
import Link from "next/link";

import ShaderBackdrop from "@/components/ShaderBackdrop";

export const metadata: Metadata = {
  title: "ScaleSight Design System",
  description: "Design system and shader study for the ScaleSight marketing site.",
  robots: {
    index: false,
    follow: false,
  },
};

const colors = [
  { name: "Midnight", value: "#07111F" },
  { name: "Card", value: "#0C1727" },
  { name: "Blue Core", value: "#005EF0" },
  { name: "Blue Glow", value: "#04B4FD" },
  { name: "Text Soft", value: "#B7C1D1" },
  { name: "Text Muted", value: "#7F8CA3" },
];

export default function DesignSystemPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--bg)] px-6 py-16 text-white">
      <ShaderBackdrop />

      <div className="relative mx-auto max-w-6xl">
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-white/8 bg-white/5 px-4 py-2 text-sm text-[var(--text-secondary)] transition hover:text-white"
        >
          Back to marketing site
        </Link>

        <div className="mt-10 max-w-3xl">
          <p className="eyebrow">Design System</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-7xl">
            ScaleSight visual primitives.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
            This page captures the supporting Stitch screens for the project:
            the design system and reusable shader language behind the landing page.
          </p>
        </div>

        <section className="mt-14 grid gap-6 lg:grid-cols-3">
          {colors.map((color) => (
            <article
              key={color.name}
              className="rounded-[28px] border border-white/8 bg-[rgba(12,23,39,0.88)] p-5"
            >
              <div
                className="h-28 rounded-[22px] border border-white/8"
                style={{ backgroundColor: color.value }}
              />
              <p className="mt-4 text-lg font-medium text-white">{color.name}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[var(--text-muted)]">
                {color.value}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[32px] border border-white/8 bg-[rgba(10,19,34,0.86)] p-8">
            <p className="eyebrow">Typography</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
              Geist Sans, crisp hierarchy, compact density.
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
              Headings lean wide and confident. Supporting copy stays light enough
              to keep dark surfaces feeling premium instead of heavy.
            </p>
          </article>

          <article className="rounded-[32px] border border-white/8 bg-[rgba(10,19,34,0.86)] p-8">
            <p className="eyebrow">Shader</p>
            <div className="mt-5 rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(12,23,39,0.82),rgba(7,17,31,0.68))] p-8">
              <div className="rounded-[24px] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(4,180,253,0.28),rgba(12,23,39,0.18)_40%,rgba(7,17,31,0.9)_100%)] p-8">
                <p className="text-xl font-medium text-white">Blue radial glow</p>
                <p className="mt-3 max-w-md text-sm leading-7 text-[var(--text-secondary)]">
                  The shader uses stacked radial fields plus a soft vertical fade so
                  the page retains contrast while still feeling luminous.
                </p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}

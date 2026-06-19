"use client";
import { openCalendlyPopup } from "./marketing-primitives";

export default function Hero() {
  return (
    <section className="relative px-6 pb-20 pt-20 md:pb-24 md:pt-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
            Design System + Shader + Premium Dashboard Screens
          </div>

          <h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white md:text-7xl lg:text-[5.5rem]">
            Forecast the next move with more clarity than a spreadsheet can offer.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-secondary)] md:text-xl">
            ScaleSight reframes ecommerce planning as one coordinated decision
            system spanning revenue, inventory health, SKU demand, and weekly
            operational execution.
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            <a
              className="cta-primary"
              href="#book-call"
              onClick={(e) => {
                e.preventDefault();
                openCalendlyPopup();
              }}
            >
              Book a strategy call
            </a>
            <a className="cta-secondary" href="#decision-system">
              Explore the planning vision
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_top,rgba(4,180,253,0.18),transparent_55%)] blur-2xl" />

          <div className="relative rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(12,23,39,0.96),rgba(9,17,28,0.9))] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.42)]">
            <div className="flex items-center justify-between border-b border-white/8 pb-4">
              <div>
                <p className="text-sm font-medium text-white">Weekly Planning Dashboard</p>
                <p className="mt-1 text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
                  ScaleSight command layer
                </p>
              </div>

              <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                Live scenario
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-[1.25fr_0.75fr]">
              <div className="rounded-[24px] border border-white/8 bg-[#0b1625] p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[var(--text-secondary)]">Revenue confidence</p>
                  <p className="text-sm text-white">$4.8M</p>
                </div>

                <svg
                  aria-hidden="true"
                  className="mt-5 h-40 w-full"
                  viewBox="0 0 360 160"
                  fill="none"
                >
                  <path
                    d="M0 126C23 114 34 118 56 102C79 86 98 95 122 76C143 60 160 67 184 55C210 41 226 49 248 37C279 20 301 35 360 11"
                    stroke="rgba(4,180,253,0.85)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0 134C31 129 54 124 75 118C98 110 121 104 143 100C162 96 185 90 206 79C224 70 242 65 263 58C286 50 320 40 360 32"
                    stroke="rgba(118,155,255,0.45)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="8 10"
                  />
                </svg>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[24px] border border-white/8 bg-[#0b1625] p-4">
                  <p className="text-sm text-[var(--text-secondary)]">At-risk SKUs</p>
                  <div className="mt-4 flex items-end gap-3">
                    {[32, 50, 64, 42, 74].map((height, index) => (
                      <div key={height} className="flex flex-1 flex-col items-center gap-2">
                        <div
                          className={`w-full rounded-t-full ${
                            index === 4 ? "bg-[#04b4fd]" : "bg-[#2563eb]"
                          }`}
                          style={{ height }}
                        />
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
                          W{index + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[24px] border border-white/8 bg-[#0b1625] p-4">
                  <p className="text-sm text-[var(--text-secondary)]">Operational pulse</p>
                  <div className="mt-4 space-y-3">
                    {[
                      ["Inbound", "On track"],
                      ["Replenishment", "Watch"],
                      ["Promo calendar", "Ready"],
                    ].map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between">
                        <span className="text-sm text-white">{label}</span>
                        <span className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-xs text-[var(--text-secondary)]">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

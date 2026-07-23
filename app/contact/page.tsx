"use client";
import {
  CalendarRange,
  Database,
  Lightbulb,
  Timer,
} from "lucide-react";

import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { Eyebrow } from "@/components/marketing-primitives";
import process from "process";

// export const metadata: Metadata = {
//   title: "ScaleSight | Book Your Strategy Call",
//   description:
//     "Contact ScaleSight to discuss forecasting, planning, and operating visibility.",
// };

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL;

const handleCalendlySubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");

  const calendlyLink = `${CALENDLY_URL}?name=${encodeURIComponent(
    name,
  )}&email=${encodeURIComponent(email)}`;

  window.open(calendlyLink, "_blank", "noopener,noreferrer");
};

const expectations = [
  {
    icon: Timer,
    title: "30-minute discovery call",
    copy: "A focused conversation to understand your business, your SKUs, and your current planning challenges.",
  },
  {
    icon: Database,
    title: "Walk through the 30-day pilot",
    copy: "We explain exactly what happens week by week and what your planning system will include.",
  },
  {
    icon: Lightbulb,
    title: "Clear next steps",
    copy: "Leave knowing whether the Planning Pilot is the right fit and how to get started.",
  },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="px-6 py-20 md:py-24">
        <section className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <Eyebrow>Book a Discovery Call</Eyebrow>
            <h1 className="mt-6 text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
              Start Your{" "}
              <span className="text-gradient-primary">Planning Pilot.</span>
            </h1>
            <p className="section-copy mt-6 max-w-2xl">
              Tell us about your business. We will walk you through the 30-Day
              Planning Pilot and how we build your first planning system.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-16 grid max-w-7xl gap-6 lg:grid-cols-12 lg:items-start">
          <div className="surface-card relative overflow-hidden rounded-[2rem] p-7 md:p-10 lg:col-span-7">
            <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(0,94,240,0.22),transparent_68%)] blur-3xl" />
            <form
              onSubmit={handleCalendlySubmit}
              className="relative grid gap-5 md:grid-cols-2"
            >
              <label className="field-group">
                <span>
                  Name <span className="text-[#8dd9ff]">*</span>
                </span>
                <input
                  name="name"
                  className="field-input"
                  placeholder="John Doe"
                  type="text"
                  required
                />
              </label>

              <label className="field-group">
                <span>
                  Email <span className="text-[#8dd9ff]">*</span>
                </span>
                <input
                  name="email"
                  className="field-input"
                  placeholder="john@company.com"
                  type="email"
                  required
                />
              </label>

              <label className="field-group">
                <span>Company</span>
                <input
                  name="company"
                  className="field-input"
                  placeholder="Acme Inc."
                  type="text"
                />
              </label>

              <label className="field-group">
                <span>Website</span>
                <input
                  name="website"
                  className="field-input"
                  placeholder="https://..."
                  type="url"
                />
              </label>

              <label className="field-group">
                <span>Monthly Revenue</span>
                <select name="monthlyRevenue" className="field-input">
                  <option value="">Select range</option>
                  <option>$10k - $50k</option>
                  <option>$50k - $250k</option>
                  <option>$250k - $1M</option>
                  <option>$1M+</option>
                </select>
              </label>

              <label className="field-group">
                <span>Primary Challenge</span>
                <select name="primaryChallenge" className="field-input">
                  <option value="">Select challenge</option>
                  <option>Revenue visibility</option>
                  <option>Inventory planning</option>
                  <option>Demand forecasting</option>
                  <option>Marketing performance</option>
                  <option>Multi-channel reporting</option>
                  <option>Operational planning</option>
                  <option>Not sure yet</option>
                </select>
              </label>

              <label className="field-group md:col-span-2">
                <span>Message</span>
                <textarea
                  name="message"
                  className="field-input min-h-[160px] resize-none"
                  placeholder="Briefly describe your current situation..."
                />
              </label>

              <button
                className="primary-button mt-3 justify-center md:col-span-2"
                type="submit"
              >
                Book Strategy Call
              </button>

              <p className="md:col-span-2 text-sm text-[var(--text-secondary)]">
                Name and Email are required. After you submit, Calendly opens so
                you can choose a time.
              </p>
            </form>
          </div>

          <div className="space-y-6 lg:col-span-5 lg:sticky lg:top-28">
            <div className="surface-card rounded-[2rem] p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                What to Expect
              </h2>
              <div className="mt-8 space-y-6">
                {expectations.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="icon-badge !h-10 !w-10 shrink-0">
                        <Icon size={16} />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-white">
                          {item.title}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                          {item.copy}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[2rem] border border-dashed border-white/14 bg-[rgba(10,20,31,0.56)] px-8 py-12 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[var(--text-secondary)]">
                <CalendarRange size={22} />
              </div>
              <p className="mt-5 text-base text-white">
                Prefer picking a time directly?
              </p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Submit the form and Calendly will open immediately so you can
                book your strategy call.
              </p>
              <div className="mt-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
                Calendly active
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">
                  Email directly
                </p>
                <a
                  className="mt-2 inline-block text-base font-semibold text-[#8dd9ff] transition hover:text-white"
                  href="mailto:hello@scalesight.io"
                >
                  arman@scalesight.org
                </a>
              </div>
              {/* <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">
                  Office
                </p>
                <p className="mt-2 text-base text-white">New York, NY</p>
              </div> */}
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}

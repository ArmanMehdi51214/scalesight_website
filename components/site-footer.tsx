"use client";

import Image from "next/image";
import Link from "next/link";
import type { PointerEvent } from "react";

const productLinks = [
  { href: "/30-day-planning-pilot", label: "30-Day Planning Pilot" },
  { href: "/30-day-planning-pilot", label: "Inventory Planning" },
  { href: "/30-day-planning-pilot", label: "Revenue Forecasting" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/partners", label: "Partner with ScaleSight" },
  { href: "/contact", label: "Contact" },
];

function handleFooterPointerMove(event: PointerEvent<HTMLDivElement>) {
  const bounds = event.currentTarget.getBoundingClientRect();
  const x = ((event.clientX - bounds.left) / bounds.width) * 100;
  const y = ((event.clientY - bounds.top) / bounds.height) * 100;

  event.currentTarget.style.setProperty("--footer-x", `${x}%`);
  event.currentTarget.style.setProperty("--footer-y", `${y}%`);
}

function handleFooterPointerLeave(event: PointerEvent<HTMLDivElement>) {
  event.currentTarget.style.setProperty("--footer-x", "50%");
  event.currentTarget.style.setProperty("--footer-y", "50%");
}

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[rgba(10,20,31,0.92)]">
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="space-y-5">
          <Link className="inline-flex items-center text-white" href="/">
            <Image
              alt="ScaleSight Logo - Ecommerce Planning Partner"
              title="ScaleSight - Managed Ecommerce Intelligence"
              className="h-auto w-[9.5rem] md:w-[10.5rem]"
              height={85}
              width={304}
              quality={85}
              src="/logo.png"
            />
          </Link>
          <p className="max-w-xs text-sm leading-7 text-[var(--text-secondary)]">
            ScaleSight helps Shopify and DTC brands forecast demand, plan
            inventory, and make better business decisions through managed
            ecommerce intelligence.
          </p>
          {/* <div className="flex gap-3">
            {[Globe, Share2].map((Icon, index) => (
              <span
                key={index}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[var(--text-secondary)]"
              >
                <Icon size={16} />
              </span>
            ))}
          </div> */}
        </div>

        <div>
          <h2 className="footer-heading">Platform</h2>
          <div className="mt-5 space-y-3">
            {productLinks.map((item) => (
              <Link key={item.label} className="footer-link" href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="footer-heading">Company</h2>
          <div className="mt-5 space-y-3">
            {companyLinks.map((item) => (
              <Link key={item.label} className="footer-link" href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="footer-heading">Contact</h2>
          <div className="mt-5 space-y-3 text-sm text-[var(--text-secondary)]">
            <p>arman@scalesight.org</p>
            <p>Lahore, PK</p>
            {/* <p>Built for Shopify Plus and modern ops teams.</p> */}
          </div>
        </div>
      </div>
      <div
        className="footer-brand-stage"
        onPointerLeave={handleFooterPointerLeave}
        onPointerMove={handleFooterPointerMove}
      >
        <div className="footer-brand-stage__glow" />
        <div className="footer-brand-stage__shine" />
        <div className="footer-brand-stage__grid" />
        <Image
          alt="ScaleSight Brand Watermark"
          title="ScaleSight"
          className="footer-brand-image footer-brand-image--base"
          height={85}
          width={304}
          quality={85}
          priority={false}
          src="/logo.png"
        />
        <Image
          alt="ScaleSight Colored Brand Watermark"
          title="ScaleSight"
          aria-hidden="true"
          className="footer-brand-image footer-brand-image--color"
          height={85}
          width={304}
          quality={85}
          priority={false}
          src="/logo.png"
        />
      </div>
    </footer>
  );
}

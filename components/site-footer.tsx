import Link from "next/link";
import { TrendingUp, Globe, Share2 } from "lucide-react";

const productLinks = [
  { href: "/services", label: "Forecasting" },
  { href: "/services", label: "Inventory Visibility" },
  { href: "/services", label: "Demand Planning" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[rgba(10,20,31,0.92)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="space-y-5">
          <Link className="inline-flex items-center gap-3 text-white" href="/">
            <span className="brand-mark">
              <TrendingUp size={16} strokeWidth={2.25} />
            </span>
            <span className="text-2xl font-semibold tracking-tight">ScaleSight</span>
          </Link>
          <p className="max-w-xs text-sm leading-7 text-[var(--text-secondary)]">
            Precision demand planning and revenue visibility for teams scaling
            beyond spreadsheet-driven decisions.
          </p>
          <div className="flex gap-3">
            {[Globe, Share2].map((Icon, index) => (
              <span
                key={index}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[var(--text-secondary)]"
              >
                <Icon size={16} />
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="footer-heading">Platform</h3>
          <div className="mt-5 space-y-3">
            {productLinks.map((item) => (
              <Link key={item.label} className="footer-link" href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="footer-heading">Company</h3>
          <div className="mt-5 space-y-3">
            {companyLinks.map((item) => (
              <Link key={item.label} className="footer-link" href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="footer-heading">Contact</h3>
          <div className="mt-5 space-y-3 text-sm text-[var(--text-secondary)]">
            <p>hello@scalesight.io</p>
            <p>New York, NY</p>
            <p>Built for Shopify Plus and modern ops teams.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

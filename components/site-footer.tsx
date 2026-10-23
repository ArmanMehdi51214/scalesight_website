import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const serviceLinks = [
  { href: "/how-we-work", label: "How we work" },
  { href: "/30-day-planning-pilot", label: "30-day pilot" },
  { href: "/examples", label: "Illustrative examples" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  ...(siteConfig.partners.active ? [{ href: "/partners", label: "Partners" }] : []),
  { href: "/contact", label: "Contact" },
];

function FooterLinks({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return <nav aria-label={title}><h2 className="footer-heading">{title}</h2><ul className="mt-4 space-y-3">{links.map((item) => <li key={item.href}><Link className="footer-link" href={item.href}>{item.label}</Link></li>)}</ul></nav>;
}

export default function SiteFooter() {
  return (
    <footer className="site-footer border-t border-white/10">
      <div className="content-shell grid gap-9 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <Link aria-label="ScaleSight home" className="inline-flex min-h-11 items-center" href="/"><Image alt="ScaleSight" className="h-auto w-36" height={85} width={304} src="/logo.png" /></Link>
          <p className="max-w-sm text-base leading-7 text-[var(--text-secondary)]">ScaleSight helps growing consumer brands turn demand, inventory and incoming supply into reviewed recommendations on quantity, timing and cash.</p>
        </div>
        <FooterLinks title="Service" links={serviceLinks} />
        <div>
          <FooterLinks title="Company" links={companyLinks} />
          <div className="mt-4 space-y-3 text-sm text-[var(--text-secondary)]">
            {siteConfig.contactEmail ? <a className="footer-link min-h-11 py-2" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a> : null}
            <p>{siteConfig.locationText}</p>
          </div>
        </div>
        <div>
          <h2 className="footer-heading">Legal</h2>
          <ul className="mt-4 space-y-3"><li><Link className="footer-link" href="/privacy">Privacy</Link></li></ul>
        </div>
      </div>
      <div className="content-shell border-t border-white/10 px-4 py-5 text-sm text-[var(--text-secondary)] sm:px-6">Analysis maintained by ScaleSight. Decisions made with the client.</div>
    </footer>
  );
}

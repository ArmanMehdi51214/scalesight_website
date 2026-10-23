import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { getRouteMetadata } from "@/lib/site-metadata";

export const metadata = {
  ...getRouteMetadata("designSystem"),
  robots: { index: false, follow: false },
};

const colors = [
  { name: "Brand violet", value: "#4F49F3", token: "--accent-brand" },
  { name: "Midnight navy", value: "#101D35", token: "--navy" },
  { name: "Deep navy", value: "#0B162B", token: "--navy-deep" },
  { name: "Paper", value: "#FAFBFE", token: "--paper" },
  { name: "Slate", value: "#506078", token: "--slate" },
  { name: "Soft violet", value: "#BCBAFF", token: "--accent-light" },
];

export default function DesignSystemPage() {
  return <><SiteHeader/><main id="main-content" tabIndex={-1} className="content-page interior-page page-design-system">
    <section className="page-section section-hero"><div className="content-shell">
      <div className="hero-copy">
        <p className="page-kicker">The ScaleSight design system</p>
        <h1>Clarity, in every detail.</h1>
        <p className="hero-intro">A shared visual language for thoughtful planning: confident typography, considered space, and violet used with purpose.</p>
      </div>
    </div></section>
    <section className="page-section"><div className="content-shell">
      <h2>One consistent palette.</h2>
      <div className="brand-swatches">{colors.map(color => <article key={color.token}>
        <div className="brand-swatch" style={{ background: `var(${color.token})` }} />
        <h3>{color.name}</h3><p>{color.value}</p><code>{color.token}</code>
      </article>)}</div>
    </div></section>
    <section className="page-section brand-type-section"><div className="content-shell editorial-grid">
      <h2>A little less noise.<br/>A lot more clarity.</h2>
      <div className="brand-type-specimen"><p className="page-kicker">Geist Sans</p><h3>Better stock decisions.<br/><span>Before you commit.</span></h3><p>Use generous heading sizes and tight tracking to lead. Keep body copy readable, with enough space for the reasoning to breathe.</p></div>
    </div></section>
    <section className="page-section"><div className="content-shell editorial-grid">
      <h2>Every action has a hierarchy.</h2>
      <div><p>Violet leads to the next decision. Text links provide a quieter path to supporting detail. Borders and subtle surfaces organize the page.</p>
        <div className="actions"><Link className="primary-button" href="/contact">Talk through a decision<ArrowRight size={16} aria-hidden="true"/></Link><Link className="text-link" href="/examples">Explore the examples</Link></div>
      </div>
    </div></section>
  </main><SiteFooter/></>;
}

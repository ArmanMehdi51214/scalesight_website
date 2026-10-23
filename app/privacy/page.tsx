import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { getRouteMetadata } from "@/lib/site-metadata";
import notice from "@/docs/privacy-notice.json";
import styles from "./privacy.module.css";

// The supplied notice still contains explicit pre-publication placeholders.
export const metadata = {
  ...getRouteMetadata("privacy"),
  robots: { index: false, follow: true },
};

const navigation = [
  { href: "#information-we-collect", label: "Information we collect" },
  { href: "#how-we-use-information", label: "How we use information" },
  { href: "#your-privacy-rights", label: "Your privacy rights" },
  { href: "#contact-us", label: "Contact us" },
];

function InlineText({ text }: { text: string }) {
  return text.split(/(\*\*.*?\*\*|https?:\/\/[^\s]+|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    if (/^[A-Za-z0-9._%+-]+@/.test(part)) return <a key={index} href={`mailto:${part}`}>{part}</a>;
    if (/^https?:\/\//.test(part)) return <a key={index} href={part}>{part}</a>;
    return part;
  });
}

export default function PrivacyPage() {
  return <><SiteHeader/><main id="main-content" tabIndex={-1} className="content-page interior-page">
    <header className={styles.heading}>
      <div className="content-shell">
        <p className="page-kicker">SCALESIGHT / LEGAL</p>
        <h1>{notice.title}</h1>
        <p className={styles.subtitle}>Clear information about how ScaleSight collects, uses and protects personal information.</p>
        <p className={styles.updated}>Last updated: <time dateTime="2026-10-23">{notice.lastUpdated}</time></p>
      </div>
    </header>
    <div className={`content-shell ${styles.layout}`}>
      <aside className={styles.sidebar}>
        <nav aria-label="Privacy notice sections">
          <p className={styles.navHeading}>On this page</p>
          {navigation.map(link => <Link href={link.href} key={link.href}>{link.label}<ArrowUpRight size={14} aria-hidden="true"/></Link>)}
        </nav>
      </aside>
      <article className={styles.notice} aria-label="Privacy notice">
        <div className={styles.draft}><strong>Draft notice</strong><p>Publication details are awaiting confirmation. Fields in brackets below are retained from the supplied draft.</p></div>
        <div className={styles.introduction}>{notice.introduction.map((block, index) => <p key={index}><InlineText text={block.text!}/></p>)}</div>
        {notice.sections.map(section => <section id={section.id} key={section.id} className={styles.section}>
          <h2>{section.title}</h2>
          {section.blocks.map((block, index) => block.type === "list"
            ? <ul key={index}>{block.items!.map(item => <li key={item}><InlineText text={item}/></li>)}</ul>
            : <p key={index} className={block.text?.includes("[") ? styles.pending : undefined}><InlineText text={block.text!}/></p>)}
          {section.id === "contact-us" && <Link className={styles.contactLink} href="/contact">Contact ScaleSight<ArrowUpRight size={15} aria-hidden="true"/></Link>}
        </section>)}
      </article>
    </div>
  </main><SiteFooter/></>;
}

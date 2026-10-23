import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import InlineCalendly from "@/components/inline-calendly";
import manifest from "@/docs/content-manifest.json";
import { siteConfig } from "@/lib/site-config";

export default function ContactPage() {
  const sections = manifest.routes['/contact'];
  return <><SiteHeader/><main id="main-content" tabIndex={-1} className="content-page interior-page page-contact page-contact-booking content-shell">
    <section data-section="C01" id="C01" className="contact-heading"><h1>{sections[0].blocks[0].text}</h1><p>{sections[0].blocks[1].text}</p></section>
    <section data-section="C02" id="C02" className="contact-expectations"><ul>{sections[1].blocks.map(block=><li key={block.text}>{block.text}</li>)}</ul></section>
    <section data-section="C03" id="C03" className="booking-intro"><p>{sections[2].blocks[0].text}</p></section>
    <section data-section="C04" id="C04" className="contact-calendar" aria-labelledby="calendar-title"><h2 id="calendar-title">{sections[3].blocks[0].text}</h2><InlineCalendly/></section>
    <section data-section="C05" id="C05" className="direct-contact"><p>{sections[4].blocks[0].text}{siteConfig.contactEmail && <> <a className="text-link" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a></>}</p></section>
  </main><SiteFooter/></>;
}

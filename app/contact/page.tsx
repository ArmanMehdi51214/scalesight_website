import { HeroSection, ProcessSteps } from "@/components/sections";
import ContactForm from "@/components/contact-form";
import { siteConfig } from "@/lib/site-config";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Discuss a Planning Decision | ScaleSight",
  "Tell us the upcoming purchase, production or allocation commitment your team is weighing. Discuss whether a focused planning review fits your timing and available data.",
  "/contact",
);
export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const query = await searchParams;
  const intent =
    query.intent === "pilot"
      ? "pilot"
      : query.intent === "partner"
        ? "partner"
        : "";
  return (
    <>
      <HeroSection id="C01" />
      <div className="container contact-grid">
        <section className="contact-panel" aria-labelledby="form-title">
          {intent && (
            <p className="contact-intent">
              {intent === "pilot"
                ? "Enquiry: focused paid 30-day pilot"
                : "Enquiry: partner engagement"}
            </p>
          )}
          <h2 id="form-title">Start with a few details.</h2>
          <ContactForm
            intent={intent}
            email={siteConfig.email}
            bookingUrl={siteConfig.bookingUrl}
          />
        </section>
        <aside className="contact-sidebar">
          <h2>What to expect.</h2>
          <ProcessSteps
            steps={[
              {
                title: "We discuss the upcoming commitment and decision date.",
              },
              { title: "We check the relevant data and operating context." },
              { title: "We agree whether a focused pilot makes sense." },
            ]}
          />
          <p className="calendar-fallback">
            {siteConfig.bookingUrl
              ? "Optional booking is available after your enquiry is received."
              : "Online booking is currently unavailable. Send an enquiry or contact us by email to agree a time."}
          </p>
          {siteConfig.email && (
            <p className="section-copy">
              <a className="text-link" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email} ↗
              </a>
            </p>
          )}
        </aside>
      </div>
    </>
  );
}

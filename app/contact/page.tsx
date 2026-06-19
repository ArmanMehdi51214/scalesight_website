import type { Metadata } from "next";

import { absoluteUrl, createPageMetadata, jsonLdMarkup } from "@/app/seo";

import ContactPageClient from "./contact-page-client";

export const metadata: Metadata = createPageMetadata({
  title: "Book An Ecommerce Forecasting Consultation | ScaleSight",
  description:
    "Book a strategy call to discuss ecommerce forecasting, inventory planning, and demand visibility for your Shopify or DTC brand.",
  path: "/contact",
});

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Book An Ecommerce Forecasting Consultation",
  url: absoluteUrl("/contact"),
  description:
    "Book a strategy call to discuss ecommerce forecasting, inventory planning, demand visibility, and operational decision intelligence with ScaleSight.",
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdMarkup(contactPageJsonLd),
        }}
      />
      <ContactPageClient />
    </>
  );
}

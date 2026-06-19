import type { Metadata } from "next";

import { createPageMetadata, jsonLdMarkup } from "@/app/seo";
import ForecastingPage from "@/components/pages/ForecastingPage";

export const metadata: Metadata = createPageMetadata({
  title: "Ecommerce Forecasting & Planning | ScaleSight",
  description:
    "See future revenue, inventory risks, and demand trends before they happen. Plan with confidence using ScaleSight's ecommerce decision system.",
  path: "/plan-with-confidence",
  image: "/dashboards%20for%20website/visual%201.png",
});

const faqItems = [
  {
    question: "What data do you need?",
    answer:
      "We typically work with Shopify sales data, inventory data, marketing performance data, and other operational datasets. During onboarding we review available data sources and build the visibility system around your business.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Most implementations take between 1-3 weeks depending on data availability, integrations, and reporting requirements.",
  },
  {
    question: "Do you work with Shopify?",
    answer:
      "Yes. Shopify brands are our primary focus, and our systems are designed around the operational challenges faced by growing ecommerce businesses.",
  },
  {
    question: "Can this help inventory planning?",
    answer:
      "Yes. ScaleSight helps with inventory planning by identifying inventory risks, forecasting future demand, highlighting stockout risks, and supporting smarter purchasing decisions.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes. We provide ongoing support, optimization, and reporting improvements as business requirements evolve.",
  },
  {
    question: "How accurate are the forecasts?",
    answer:
      "Forecast accuracy depends on data quality and business conditions, but our focus is not only forecasting accuracy. It is providing better visibility and confidence for business planning decisions.",
  },
  {
    question: "Can this work with multiple channels?",
    answer:
      "Yes. We can combine data from multiple sales and operational channels to provide a unified decision-making view.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function ForecastingRoutePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdMarkup(faqJsonLd) }}
      />
      <ForecastingPage />
    </>
  );
}

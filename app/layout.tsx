import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";

import "./globals.css";

const geist = localFont({
  src: "./fonts/Geist-Regular.ttf",
  variable: "--font-geist-sans",
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ScaleSight",
  "url": "https://scalesight.org",
  "logo": "https://scalesight.org/logo.png",
  "description":
    "ScaleSight is a managed ecommerce planning partner for Shopify and DTC brands, delivering demand forecasting, inventory planning, and weekly operational decision support.",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "arman@scalesight.org",
    "contactType": "customer service",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://scalesight.org"),
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  title: "ScaleSight | Ecommerce Planning Partner for Shopify Brands",
  description:
    "Managed Ecommerce Intelligence for Shopify brands. Forecast demand, protect inventory, and get weekly strategic guidance with a 30-Day Planning Pilot.",
  keywords: [
    "ecommerce planning",
    "inventory planning",
    "demand forecasting",
    "Shopify planning",
    "DTC ecommerce",
    "sales forecasting",
    "stockout prevention",
    "revenue forecasting",
    "ecommerce business planning",
    "managed planning service",
    "weekly inventory review",
    "ecommerce decision support",
  ],
  openGraph: {
    title: "ScaleSight | Ecommerce Planning Partner for Shopify Brands",
    description:
      "Forecast demand, plan inventory, and make better business decisions with a managed planning system built for Shopify brands.",
    type: "website",
    siteName: "ScaleSight",
    url: "https://scalesight.org",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ScaleSight - Managed Ecommerce Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScaleSight | Ecommerce Planning Partner",
    description:
      "Forecast demand, plan inventory, and make better business decisions with a managed planning system built for Shopify brands.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          id="calendly-css"
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
          media="print"
        />
        <Script
          id="calendly-css-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=document.getElementById('calendly-css');if(l)l.media='all';})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={geist.variable}>
        {children}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

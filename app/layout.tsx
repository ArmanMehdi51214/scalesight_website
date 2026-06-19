import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";

import { absoluteUrl, jsonLdMarkup, siteUrl } from "@/app/seo";
import "./globals.css";

const geist = localFont({
  src: "./fonts/Geist-Regular.ttf",
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ScaleSight | Ecommerce Decision Intelligence & Business Visibility",
  description:
    "Turn ecommerce data into visibility, forecasting, inventory planning, and smarter operational decisions. Built for growing Shopify and DTC brands.",
  icons: {
    icon: "/favicon.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ScaleSight",
  url: siteUrl,
  logo: absoluteUrl("/logo.png"),
  description:
    "ScaleSight provides ecommerce decision intelligence, revenue visibility, inventory planning, and demand forecasting for Shopify and DTC brands.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Sales",
    url: absoluteUrl("/contact"),
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
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className={geist.variable}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdMarkup(organizationJsonLd),
          }}
        />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

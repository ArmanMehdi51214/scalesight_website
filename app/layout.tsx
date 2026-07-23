import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";

import "./globals.css";

const geist = localFont({
  src: "./fonts/Geist-Regular.ttf",
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "ScaleSight | Ecommerce Planning Partner for Shopify Brands",
  description:
    "ScaleSight is a managed planning partner for Shopify and DTC ecommerce brands. Get demand forecasting, inventory planning, and weekly decision support — starting with a 30-Day Planning Pilot.",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "ScaleSight | Ecommerce Planning Partner",
    description:
      "Forecast demand, plan inventory, and make better business decisions with a managed planning system built for Shopify brands.",
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
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
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

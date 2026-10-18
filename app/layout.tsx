import type { Metadata } from "next";
import localFont from "next/font/local";
import { getRouteMetadata } from "@/lib/site-metadata";
import { siteConfig } from "@/lib/site-config";
import AnalyticsListener from "@/components/analytics-listener";

import "./globals.css";

const geist = localFont({
  src: "./fonts/Geist-Regular.ttf",
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://scalesight.org"),
  ...getRouteMetadata("home"),
  robots: {
    index: !siteConfig.staging,
    follow: !siteConfig.staging,
    googleBot: {
      index: !siteConfig.staging,
      follow: !siteConfig.staging,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "ScaleSight | Managed Planning for Consumer Brands",
    description: "Maintained demand, inventory and supply analysis with reviewed recommendations on quantity, timing and cash. Explore a focused planning pilot.",
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
      <body className={geist.variable}>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        {children}
        <AnalyticsListener />
      </body>
    </html>
  );
}

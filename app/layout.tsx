import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { getRouteMetadata } from "@/lib/site-metadata";

import "./globals.css";

const geist = localFont({
  src: "./fonts/Geist-Regular.ttf",
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://scalesight.org"),
  ...getRouteMetadata("home"),
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
  twitter: {
    card: "summary_large_image",
    title: "ScaleSight | Planning decisions for growing consumer brands",
    description: "ScaleSight maintains demand and supply analysis for client review.",
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
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className={geist.variable}>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <div id="main-content" tabIndex={-1}>{children}</div>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

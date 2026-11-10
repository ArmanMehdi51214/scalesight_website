import type { Metadata } from "next";
import localFont from "next/font/local";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";
const geist = localFont({ src: "./fonts/Geist-Regular.ttf", variable: "--font-geist-sans", display: "swap" });
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "ScaleSight | Managed Inventory Planning for Food & Beverage",
  description: "Managed analytical planning for growing food and beverage brands. Maintained analysis, compared options and weekly specialist-reviewed recommendations.",
  robots: { index: siteConfig.publicationApproved && siteConfig.privacyApproved, follow: true },
  icons: { icon: "/favicon.png" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context": "https://schema.org", "@type": "Organization", name: "ScaleSight", url: siteConfig.url, description: "Managed analytical inventory and supply planning for food and beverage brands." };
  return <html lang="en"><body className={geist.variable}><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader /><main id="main-content" tabIndex={-1}>{children}</main><SiteFooter /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /></body></html>;
}

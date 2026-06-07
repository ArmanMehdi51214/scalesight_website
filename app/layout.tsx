import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "ScaleSight",
  description:
    "Forecasting & Operational Visibility for Scaling Ecommerce Brands",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
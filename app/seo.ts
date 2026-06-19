import type { Metadata } from "next";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://scalesight.org"
).replace(/\/$/, "");

export const defaultOgImage =
  "/dashboards%20for%20website/visual%20111.png";

export function absoluteUrl(path = "/") {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: path,
      siteName: "ScaleSight",
      images: [
        {
          url: image,
          alt: "ScaleSight ecommerce decision intelligence dashboard",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function jsonLdMarkup(data: Record<string, unknown>) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

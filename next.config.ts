import type { NextConfig } from "next";
import { siteConfig } from "./lib/site-config";

const nextConfig: NextConfig = {
  async redirects() {
    return siteConfig.partners.active
      ? []
      : [
          {
            source: "/partners",
            destination: "/contact?intent=partner",
            permanent: true,
          },
        ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: siteConfig.staging ? "noindex, nofollow" : "index, follow",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

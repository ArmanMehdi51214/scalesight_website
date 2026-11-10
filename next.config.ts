import type { NextConfig } from "next";
console.warn("[ScaleSight LAUNCH BLOCKER] Privacy Notice is Draft: owner/legal approval, operator identity and processing details are missing. Review docs/implementation-report.md before publication.");
const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      { source: "/case-studies", destination: "/examples", permanent: true },
      { source: "/forecasting", destination: "/how-we-work", permanent: true },
      { source: "/confident", destination: "/30-day-planning-pilot", permanent: true },
      { source: "/30-day-plan", destination: "/30-day-planning-pilot", permanent: true },
      { source: "/design-system", destination: "/planning-workspace", permanent: true },
    ];
  },
};
export default nextConfig;

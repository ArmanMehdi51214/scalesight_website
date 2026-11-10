export const siteConfig = {
  name: "ScaleSight",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.scalesight.org",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "arman@scalesight.org",
  bookingUrl:
    process.env.NEXT_PUBLIC_BOOKING_URL ||
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "",
  partnersActive: false,
  // Publication is a deliberate owner action after the documented launch gates.
  publicationApproved: process.env.SITE_PUBLICATION_APPROVED === "true",
  privacyApproved: false,
};

export const navigation = [
  { href: "/how-we-work", label: "How we work" },
  { href: "/planning-workspace", label: "Planning workspace" },
  { href: "/examples", label: "Examples" },
  { href: "/30-day-planning-pilot", label: "30-day pilot" },
  { href: "/about", label: "About" },
];

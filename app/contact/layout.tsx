import { getRouteMetadata } from "@/lib/site-metadata";

export const metadata = getRouteMetadata("contact");

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

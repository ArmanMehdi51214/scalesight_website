import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "#platform", label: "Platform" },
  { href: "#forecasting", label: "Forecasting" },
  { href: "#results", label: "Results" },
  { href: "#mission", label: "Mission" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.06)] bg-[rgba(7,17,31,0.76)] backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link className="flex items-center" href="/">
          <Image
            src="/images/logo.png"
            alt="ScaleSight"
            width={176}
            height={38}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-[var(--text-secondary)] transition hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <Link
            href="/design-system"
            className="rounded-full border border-white/8 px-4 py-2 text-sm text-[var(--text-secondary)] transition hover:border-white/16 hover:text-white"
          >
            Design System
          </Link>
        </nav>

        <a className="cta-primary !px-5 !py-3 text-sm" href="#book-call">
          Book Call
        </a>
      </div>
    </header>
  );
}

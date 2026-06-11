"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  if (href === "/services" && pathname === "/forecasting") {
    return true;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          aria-label="ScaleSight home"
          className="inline-flex items-center text-white"
          href="/"
        >
          <Image
            alt="ScaleSight"
            className="h-auto w-[9.5rem] md:w-[10.5rem]"
            height={1216}
            priority
            src="/logo.png"
            width={4345}
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                className={active ? "nav-link nav-link--active" : "nav-link"}
                href={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link className="primary-button !px-5 !py-3 !text-sm" href="/contact">
            Book a Strategy Call
          </Link>
        </div>

        <button
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white transition hover:bg-white/5 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="bg-[rgba(7,17,31,0.98)] lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  className={
                    active
                      ? "mobile-nav-link mobile-nav-link--active"
                      : "mobile-nav-link"
                  }
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              className="primary-button mt-3 justify-center"
              href="/contact"
              onClick={() => setOpen(false)}
            >
              Book a Strategy Call
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { href: "/how-we-work", label: "How we work" },
  { href: "/examples", label: "Examples" },
  { href: "/30-day-planning-pilot", label: "30-day pilot" },
  { href: "/about", label: "About" },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateScroll = () => headerRef.current?.classList.toggle("is-scrolled", window.scrollY > 8);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => { window.removeEventListener("keydown", handleEscape); window.removeEventListener("scroll", updateScroll); };
  }, []);

  return (
    <header ref={headerRef} className="site-header sticky top-0 z-50">
      <div className="content-shell flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link aria-label="ScaleSight home" className="header-brand inline-flex shrink-0 items-center" href="/">
          <Image alt="ScaleSight" className="h-auto w-36 md:w-40" height={85} width={304} priority src="/logo.png" />
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => <Link aria-current={isActive(pathname, item.href) ? "page" : undefined} key={item.href} className={isActive(pathname, item.href) ? "nav-link nav-link--active" : "nav-link"} href={item.href}>{item.label}</Link>)}
        </nav>
        <Link className="header-cta primary-button min-h-11 items-center justify-center !px-4 !py-2.5 !text-sm" href="/contact">Talk through a decision</Link>
        <button aria-controls="mobile-navigation" aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"} className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white hover:bg-white/5 focus-visible:outline lg:hidden" onClick={() => setOpen((value) => !value)} type="button">
          {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </div>
      <div className="content-shell px-4 sm:px-6 lg:hidden" hidden={!open} id="mobile-navigation">
        <nav aria-label="Mobile navigation" className="mb-4 rounded-2xl border border-white/10 bg-[var(--panel)] p-3 shadow-xl">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => <Link aria-current={isActive(pathname, item.href) ? "page" : undefined} key={item.href} className={isActive(pathname, item.href) ? "mobile-nav-link mobile-nav-link--active" : "mobile-nav-link"} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
            <Link className="primary-button mt-2 min-h-11 justify-center" href="/contact" onClick={() => setOpen(false)}>Talk through a decision</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

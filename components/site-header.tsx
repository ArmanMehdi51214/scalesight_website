"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { navigation } from "@/lib/site-config";
import { ArrowUpRight, Menu, X } from "lucide-react";
export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="wordmark" href="/" aria-label="ScaleSight home">
          <Image
            src="/images/scalesight-logo.svg"
            alt="ScaleSight"
            width={174}
            height={44}
          />
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="button button-small header-cta">
          Talk through a decision <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
        <button
          ref={trigger}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav container"
          aria-label="Mobile navigation"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpen(false);
              trigger.current?.focus();
            }
          }}
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="button"
            onClick={() => setOpen(false)}
          >
            Talk through a decision{" "}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </nav>
      )}
    </header>
  );
}

"use client";
import Link from "next/link";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
};

type ButtonProps = {
  href: string;
  children: React.ReactNode;
};

export function openCalendlyPopup() {
  if (typeof window !== "undefined" && (window as any).Calendly) {
    (window as any).Calendly.initPopupWidget({
      url: process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/kazmiarmanmehdi/30min",
    });
  }
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow-chip">{children}</p>;
}

export function SectionHeader({
  eyebrow,
  title,
  copy,
  align = "left",
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="section-title mt-4">{title}</h2>
      {copy ? <p className="section-copy mt-5">{copy}</p> : null}
    </div>
  );
}

export function PrimaryButton({ href, children }: ButtonProps) {
  const isCalendly = href === "/contact" || href === "#book-call";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isCalendly) {
      e.preventDefault();
      openCalendlyPopup();
    }
  };

  return (
    <Link className="primary-button" href={href} onClick={handleClick}>
      {children}
    </Link>
  );
}

export function SecondaryButton({ href, children }: ButtonProps) {
  const isCalendly = href === "/contact" || href === "#book-call";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isCalendly) {
      e.preventDefault();
      openCalendlyPopup();
    }
  };

  return (
    <Link className="secondary-button" href={href} onClick={handleClick}>
      {children}
    </Link>
  );
}

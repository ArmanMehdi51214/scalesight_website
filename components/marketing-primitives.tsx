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
  return (
    <Link className="primary-button" href={href}>
      {children}
    </Link>
  );
}

export function SecondaryButton({ href, children }: ButtonProps) {
  return (
    <Link className="secondary-button" href={href}>
      {children}
    </Link>
  );
}

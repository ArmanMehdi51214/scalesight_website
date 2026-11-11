import Link from "next/link";
import Image from "next/image";
import { navigation, siteConfig } from "@/lib/site-config";
export default function SiteFooter() {
  const groups = [
    { title: "Service", items: navigation.slice(0, 4) },
    {
      title: "Company",
      items: [
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
        ...(siteConfig.partnersActive
          ? [{ href: "/partners", label: "Partners" }]
          : []),
      ],
    },
    { title: "Legal", items: [{ href: "/privacy", label: "Privacy" }] },
  ];
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-intro">
            <Link className="wordmark" href="/">
              <Image
                src="/images/scalesight-logo-white.svg"
                alt="ScaleSight"
                width={174}
                height={44}
              />
            </Link>
            <p>
              Analysis maintained by ScaleSight.
              <br />
              Decisions made with your team.
            </p>
            {siteConfig.email && (
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            )}
          </div>
          {groups.map((group) => (
            <nav key={group.title} aria-label={`${group.title} links`}>
              <h2>{group.title}</h2>
              {group.items.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          ))}
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ScaleSight</p>
          <p>Managed analytical planning for food &amp; beverage.</p>
          <Link href="/contact">
            Let’s consider the next commitment <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

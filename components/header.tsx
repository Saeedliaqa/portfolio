"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import { Icon } from "./icon";

const navigation = [
  { label: "Projects", href: "/#projects", section: "/projects/" },
  { label: "About", href: "/about", section: "/about" },
  { label: "CV & Certificates", href: "/cv-certificates", section: "/cv-certificates" },
  { label: "Contact", href: "/#contact", section: null },
] as const;

function Navigation({ pathname }: { pathname: string }) {
  return (
    <ul className="nav-list">
      {navigation.map(({ label, href, section }) => (
        <li key={href}>
          <Link
            className={section ? "nav-link" : "nav-link nav-contact"}
            href={href}
            aria-current={section && (pathname === section || (section.endsWith("/") && pathname.startsWith(section))) ? (href === pathname ? "page" : "location") : undefined}
          >
            {label}
            {!section && <Icon name="external" />}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Header({ name, pathname = "" }: { name: string; pathname?: string }) {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/" aria-current={pathname === "/" ? "page" : undefined}>
          <span className="monogram" aria-hidden="true">SL</span>
          <span>{name}</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Navigation pathname={pathname} />
        </nav>
        <details
          className="mobile-nav"
          key={pathname}
          onKeyDown={(event) => {
            if (event.key === "Escape" && event.currentTarget.open) {
              event.currentTarget.open = false;
              event.currentTarget.querySelector("summary")?.focus();
            }
          }}
        >
          <summary>
            Menu
            <Icon name="menu" className="menu-open-icon" />
            <Icon name="close" className="menu-close-icon" />
          </summary>
          <nav aria-label="Main navigation" onClick={(event) => {
            if (event.target instanceof Element && event.target.closest("a")) {
              const disclosure = event.currentTarget.closest("details");
              if (disclosure) {
                disclosure.open = false;
                disclosure.querySelector("summary")?.focus();
              }
            }
          }}>
            <Navigation pathname={pathname} />
          </nav>
        </details>
      </div>
    </header>
  );
}

function ActiveHeader({ name }: { name: string }) {
  return <Header name={name} pathname={usePathname()} />;
}

export function SiteHeader({ name }: { name: string }) {
  return <Suspense fallback={<Header name={name} />}><ActiveHeader name={name} /></Suspense>;
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import { Icon } from "./icon";
import { DownloadCv } from "./links";

const navigation = [
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
] as const;

function Navigation({ pathname }: { pathname: string }) {
  return (
    <ul className="nav-list">
      {navigation.map(({ label, href }) => (
        <li key={href}>
          <Link
            className="nav-link"
            href={href}
            aria-current={href === "/#projects" && pathname.startsWith("/projects/") ? "location" : undefined}
          >
            {label}
          </Link>
        </li>
      ))}
      <li className="nav-cv"><DownloadCv primary /></li>
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

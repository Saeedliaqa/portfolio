"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { DownloadCv } from "./links";

const navigation = [
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Education", href: "/#education" },
  { label: "Certificates", href: "/#certifications" },
  { label: "About & interests", href: "/#outside-work" },
  { label: "Contact", href: "/#contact" },
] as const;

function useCenteredSection(pathname: string) {
  const [centeredHref, setCenteredHref] = useState<string>();

  useEffect(() => {
    if (pathname !== "/") return;

    const compactScreen = window.matchMedia("(max-width: 1024px)");
    const sections = navigation.flatMap(({ href }) => {
      const section = document.getElementById(href.slice(2));
      return section ? [{ href, section }] : [];
    });
    let frame = 0;

    function update() {
      frame = 0;
      const viewportCenter = window.innerHeight / 2;
      const centered = sections.find(({ section }) => {
        const { top, bottom } = section.getBoundingClientRect();
        return top <= viewportCenter && viewportCenter < bottom;
      });
      setCenteredHref(centered?.href);
    }

    function scheduleUpdate() {
      if (!compactScreen.matches && !frame) frame = requestAnimationFrame(update);
    }

    const observer = new ResizeObserver(scheduleUpdate);
    for (const { section } of sections) observer.observe(section);
    observer.observe(document.body);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    scheduleUpdate();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [pathname]);

  if (pathname.startsWith("/projects/")) return "/#projects";
  return pathname === "/" ? centeredHref : undefined;
}

function Navigation({ activeHref }: { activeHref?: string }) {
  return (
    <ul className="nav-list">
      {navigation.map(({ label, href }) => (
        <li key={href}>
          <Link
            className="nav-link"
            href={href}
            aria-current={href === activeHref ? "location" : undefined}
          >
            <span>{label}</span>
          </Link>
        </li>
      ))}
      <li><DownloadCv primary /></li>
    </ul>
  );
}

function Header({
  name,
  pathname = "",
  activeHref,
}: {
  name: string;
  pathname?: string;
  activeHref?: string;
}) {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/" aria-label={name} aria-current={pathname === "/" ? "page" : undefined}>
          <span className="monogram" aria-hidden="true">SL</span>
          <span className="wordmark-name">{name}</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Navigation activeHref={activeHref} />
        </nav>
      </div>
    </header>
  );
}

function ActiveHeader({ name }: { name: string }) {
  const pathname = usePathname();
  const activeHref = useCenteredSection(pathname);
  return <Header name={name} pathname={pathname} activeHref={activeHref} />;
}

export function SiteHeader({ name }: { name: string }) {
  return <Suspense fallback={<Header name={name} />}><ActiveHeader name={name} /></Suspense>;
}

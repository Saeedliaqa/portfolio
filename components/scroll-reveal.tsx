"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Leave content already on screen visible when loading a section link.
    const viewportBottom = window.innerHeight;
    const targets = Array.from(document.querySelectorAll("#main [data-reveal]:not([data-revealed])"))
      .filter((target) => target.getBoundingClientRect().top >= viewportBottom);

    const observer = new IntersectionObserver((entries) => {
      for (const { isIntersecting, target } of entries) {
        if (isIntersecting) {
          target.removeAttribute("data-reveal-pending");
          target.setAttribute("data-revealed", "");
          observer.unobserve(target);
        }
      }
    }, { rootMargin: "0px 0px -64px" });

    for (const target of targets) {
      target.setAttribute("data-reveal-pending", "");
      observer.observe(target);
    }

    return () => {
      observer.disconnect();
      for (const target of targets) target.removeAttribute("data-reveal-pending");
    };
  }, []);

  return null;
}

"use client";

import { useEffect } from "react";

/**
 * Small, dependency-free interactions:
 * 1. reveals [data-reveal] blocks as they enter the viewport
 * 2. highlights the nav link of the section currently in view
 */
export default function Interactions() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");
    let revealObserver: IntersectionObserver | undefined;

    if (reduceMotion) {
      revealItems.forEach((el) => el.classList.add("is-visible"));
    } else {
      revealObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver?.unobserve(entry.target);
            }
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
      );
      revealItems.forEach((el) => revealObserver?.observe(el));
    }

    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]"));
    const sections = links
      .map((link) => document.getElementById(link.dataset.navLink ?? ""))
      .filter((s): s is HTMLElement => Boolean(s));

    const setActive = (id: string) => {
      for (const link of links) {
        link.classList.toggle("is-active", link.dataset.navLink === id);
      }
    };

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      revealObserver?.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return null;
}

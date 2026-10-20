"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/data/resume";
import { ArrowUpRightIcon, CloseIcon, MenuIcon } from "@/components/Icons";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    window.addEventListener("resize", close);
    return () => {
      window.removeEventListener("hashchange", close);
      window.removeEventListener("resize", close);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center border border-ink bg-ink font-mono text-[13px] font-semibold tracking-tight text-paper transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
            JS
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-ink sm:block">
            {profile.name}
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} data-nav-link={item.id} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={`mailto:${profile.email}`} className="btn btn-solid hidden h-9 px-4 text-[13px] sm:inline-flex">
            Let&rsquo;s talk
            <ArrowUpRightIcon className="btn-arrow-out h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center border border-line-strong text-ink transition-colors hover:border-ink hover:text-accent-ink md:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-line bg-paper md:hidden"
      >
        <nav className="container-page flex flex-col py-2" aria-label="Mobile">
          {nav.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="mobile-link -mx-5 flex items-center justify-between border-b border-line px-5 py-4 text-base tracking-tight text-ink"
            >
              <span className="flex items-baseline gap-4">
                <span className="mobile-index font-mono text-[11px] text-mute">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
              </span>
              <ArrowUpRightIcon className="h-4 w-4 text-mute" />
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            onClick={() => setOpen(false)}
            className="btn btn-solid my-4 w-full"
          >
            {profile.email}
          </a>
        </nav>
      </div>
    </header>
  );
}

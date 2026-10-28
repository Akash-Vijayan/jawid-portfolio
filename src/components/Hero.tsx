import { marqueeItems, profile, stats } from "@/data/resume";
import { ArrowDownIcon } from "@/components/Icons";
import type { CSSProperties } from "react";

const dotColors = ["#ff4d1a", "#4f46e5", "#0d9488", "#7c3aed", "#d97706", "#e11d48"];

export default function Hero() {
  return (
    <>
      <section id="top" className="relative overflow-hidden border-b border-line">
        <div className="hero-wash" aria-hidden />

        <div className="container-page relative">
          <div className="flex flex-col items-center pt-20 pb-16 text-center sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-24">
            {/* Badges */}
            <div
              className="rise flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
              style={{ animationDelay: "60ms" }}
            >
              <span className="pill label border border-line bg-surface px-3 py-1.5 text-ink-soft">
                {profile.role}
              </span>
              <span className="pill label flex items-center gap-2 border border-line bg-surface px-3 py-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                <span className="text-accent-ink">{profile.availability}</span>
              </span>
            </div>

            {/* Name */}
            <h1
              className="rise mt-8 max-w-4xl text-[clamp(2.75rem,8vw,5.5rem)] font-medium leading-[0.96] tracking-[-0.05em] text-ink sm:mt-10"
              style={{ animationDelay: "140ms" }}
            >
              Jawid Sulthan
              <span className="text-accent">.</span>
            </h1>

            {/* Lead */}
            <p
              className="rise mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft sm:mt-8 sm:text-xl"
              style={{ animationDelay: "240ms" }}
            >
              I design and build clean, fast, and scalable web applications — from
              production-ready dashboards and e-commerce platforms to secure full-stack products
              with React, Next.js, and TypeScript.
            </p>

            {/* Status */}
            <p
              className="rise mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-base sm:mt-8 sm:text-lg"
              style={{ animationDelay: "300ms" }}
            >
              <span className="text-ink-soft">
                Currently in <span className="text-ink">{profile.shortLocation}</span>
              </span>
              <span className="h-3.5 w-px bg-line-strong" aria-hidden />
              <span className="font-medium text-accent-ink">{profile.availability}</span>
            </p>

            {/* Actions */}
            <div
              className="rise mt-9 flex flex-col gap-2.5 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3"
              style={{ animationDelay: "380ms" }}
            >
              <a href="#work" className="btn btn-solid w-full sm:w-auto">
                View selected work
                <ArrowDownIcon className="btn-arrow-down h-4 w-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="btn btn-ghost w-full px-4 text-[13px] sm:w-auto sm:px-5 sm:text-sm"
              >
                {profile.email}
              </a>
            </div>
          </div>

          {/* Stats strip */}
          <div className="hair-grid grid-cols-2 border-b-0 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="stat bg-paper px-4 py-5 sm:px-6 sm:py-6">
                <p className="font-mono text-2xl font-medium tracking-[-0.04em] text-ink transition-colors duration-300 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="stat-label mt-2 text-[11px] leading-snug text-mute sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills marquee */}
      <div className="marquee border-b border-line bg-surface py-3.5">
        <div className="marquee__track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
              {marqueeItems.map((item, itemIndex) => (
                <span key={`${copy}-${item}`} className="marquee__item flex items-center">
                  <span className="px-4 font-mono text-[11px] tracking-[0.16em] text-ink-soft uppercase transition-colors duration-300 sm:px-5">
                    {item}
                  </span>
                  <span
                    className="tint-dot h-1.5 w-1.5 rounded-full"
                    style={{ "--tint": dotColors[itemIndex % dotColors.length] } as CSSProperties}
                  />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

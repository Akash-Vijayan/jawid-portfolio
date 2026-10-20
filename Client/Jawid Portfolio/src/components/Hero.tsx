import { marqueeItems, profile, stats } from "@/data/resume";
import { ArrowDownIcon, MapPinIcon } from "@/components/Icons";
import type { CSSProperties } from "react";

const facts: Array<{ term: string; value: string }> = [
  { term: "Role", value: profile.role },
  { term: "Company", value: "MATT Engineering Solutions" },
  { term: "Based in", value: profile.shortLocation },
  { term: "Experience", value: "1+ year · End-to-end web apps" },
  { term: "Languages", value: "Tamil · English · Malayalam" },
];

const dotColors = ["#ff4d1a", "#4f46e5", "#0d9488", "#7c3aed", "#d97706", "#e11d48"];

export default function Hero() {
  return (
    <>
      <section id="top" className="relative overflow-hidden border-b border-line">
        <div className="hero-wash" aria-hidden />

        <div className="container-page relative">
          <div className="grid gap-10 pt-10 pb-10 sm:gap-12 sm:pt-14 sm:pb-12 lg:grid-cols-12 lg:gap-12 lg:pt-24 lg:pb-16">
            {/* Left: identity */}
            <div className="lg:col-span-7">
              <div
                className="rise flex flex-wrap items-center gap-2.5 sm:gap-3"
                style={{ animationDelay: "60ms" }}
              >
                <span className="label border border-line bg-surface px-2.5 py-1 text-ink-soft">
                  {profile.role}
                </span>
                <span className="label flex items-center gap-2 border border-line bg-surface px-2.5 py-1">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  <span className="text-accent-ink">{profile.availability}</span>
                </span>
              </div>

              <h1
                className="rise mt-8 text-[clamp(2.75rem,8.5vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.05em] text-ink"
                style={{ animationDelay: "140ms" }}
              >
                Jawid Sulthan
                <span className="text-accent">.</span>
              </h1>

              <p
                className="rise mt-7 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl"
                style={{ animationDelay: "240ms" }}
              >
                I design and build clean, fast, and scalable web applications — from
                production-ready dashboards and e-commerce platforms to secure full-stack products
                with React, Next.js, and TypeScript.
              </p>

              <div
                className="rise mt-8 flex flex-col gap-2.5 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3"
                style={{ animationDelay: "340ms" }}
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

            {/* Right: quick facts card */}
            <aside
              className="rise self-end lg:col-span-5"
              style={{ animationDelay: "420ms" }}
              aria-label="Quick facts"
            >
              <div className="border border-line bg-surface">
                <div className="flex items-center justify-between border-b border-line px-5 py-3">
                  <span className="label">Currently</span>
                  <span className="label text-accent-ink">Available</span>
                </div>
                <dl>
                  {facts.map((fact) => (
                    <div
                      key={fact.term}
                      className="flex flex-col gap-1 border-b border-line px-5 py-3.5 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                    >
                      <dt className="label shrink-0">{fact.term}</dt>
                      <dd className="text-left text-sm leading-snug text-ink sm:text-end">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-mute">
                <MapPinIcon className="mt-px h-4 w-4 shrink-0" />
                {profile.location}
              </p>
            </aside>
          </div>

          {/* Stats strip */}
          <div className="hair-grid grid-cols-2 border-b-0 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="stat bg-paper px-4 py-5 sm:px-6 sm:py-6">
                <p className="font-mono text-2xl font-medium tracking-[-0.04em] text-ink transition-colors duration-300 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-[11px] leading-snug text-mute sm:text-xs">{stat.label}</p>
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
                <span key={`${copy}-${item}`} className="flex items-center">
                  <span className="px-4 font-mono text-[11px] tracking-[0.16em] text-ink-soft uppercase sm:px-5">
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

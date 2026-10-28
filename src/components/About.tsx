import type { CSSProperties } from "react";
import { profile } from "@/data/resume";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRightIcon } from "@/components/Icons";

export default function About() {
  return (
    <Section
      id="about"
      index="01"
      label="About"
      title={
        <>
          A full-stack developer who cares about the details
          <span className="text-accent">.</span>
        </>
      }
    >
      <Reveal className="grid gap-8 pt-8 sm:pt-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-3">
          <span
            className="label inline-flex items-center gap-2.5"
            style={{ "--tint": "#ff4d1a" } as CSSProperties}
          >
            <span aria-hidden className="tint-dot h-2.5 w-2.5 shrink-0" />
            Profile
          </span>
        </div>
        <div className="md:col-span-9">
          <p className="max-w-3xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            {profile.summary}
          </p>

          <dl className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-3">
            {[
              { term: "Focus", value: "Full-stack product development" },
              { term: "Core stack", value: "React · Next.js · TypeScript" },
              { term: "Data layer", value: "PostgreSQL · Prisma ORM" },
            ].map((item) => (
              <div key={item.term} className="fact-cell bg-paper px-5 py-5">
                <dt className="label fact-term">{item.term}</dt>
                <dd className="mt-2 text-sm text-ink">{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            <a href={`mailto:${profile.email}`} className="btn btn-ghost w-full px-4 text-[13px] sm:w-auto sm:px-5 sm:text-sm">
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost w-full px-4 text-[13px] sm:w-auto sm:px-5 sm:text-sm"
            >
              LinkedIn profile
              <ArrowUpRightIcon className="btn-arrow-out h-4 w-4" />
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

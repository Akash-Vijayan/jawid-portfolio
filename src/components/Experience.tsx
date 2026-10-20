import { education, experience } from "@/data/resume";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import type { CSSProperties } from "react";

const tealTint = { "--tint": "#0d9488" } as CSSProperties;
const amberTint = { "--tint": "#d97706" } as CSSProperties;

export default function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      label="Experience"
      accent="#0d9488"
      title="Building production web apps, end to end."
    >
      <div className="pt-4">
        {experience.map((job) => (
          <Reveal key={job.company}>
            <article
              className="timeline-row -mx-3 grid gap-5 border-t border-line px-3 py-8 sm:py-9 md:grid-cols-12 md:gap-8"
              style={tealTint}
            >
              <div className="md:col-span-3">
                <p className="timeline-period font-mono text-xs tracking-[0.06em] text-mute transition-colors duration-300">
                  {job.period}
                </p>
                <p className="mt-2 text-sm text-mute">{job.location}</p>
              </div>

              <div className="md:col-span-9">
                <h3 className="text-xl font-medium tracking-[-0.03em] text-ink sm:text-2xl">
                  {job.role}
                </h3>
                <p className="mt-1.5 text-sm text-ink-soft">{job.company}</p>

                <ul className="mt-5 space-y-3">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-4 text-[15px] leading-relaxed text-ink-soft">
                      <span aria-hidden className="tint-bullet mt-3 h-px w-4 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Education */}
      <Reveal className="mt-6">
        <div
          className="timeline-row grid gap-5 border-t border-line pt-8 sm:pt-9 md:grid-cols-12 md:gap-8"
          style={amberTint}
        >
          <div className="md:col-span-3">
            <span className="label">04 — Education</span>
          </div>

          <div className="md:col-span-9">
            {education.map((item) => (
              <div key={item.school}>
                <h3 className="text-xl font-medium tracking-[-0.03em] text-ink sm:text-2xl">
                  {item.degree}
                </h3>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="text-sm text-ink-soft">{item.school}</span>
                  <span className="h-3 w-px bg-line-strong" aria-hidden />
                  <span className="text-sm text-mute">{item.location}</span>
                  <span className="h-3 w-px bg-line-strong" aria-hidden />
                  <span className="timeline-period font-mono text-xs tracking-[0.06em] text-mute transition-colors duration-300">
                    {item.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

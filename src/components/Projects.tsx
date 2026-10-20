import { projects, profile } from "@/data/resume";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRightIcon } from "@/components/Icons";

export default function Projects() {
  return (
    <Section
      id="work"
      index="05"
      label="Selected Work"
      accent="#7c3aed"
      title="Five products, built from the database to the pixel."
      intro="Two live company products and three academic builds — commerce, matchmaking, civic tooling, blockchain, and machine learning."
    >
      <div className="pt-8 sm:pt-10">
        <div className="hair-grid grid-cols-1 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={(i % 2) * 80}
              style={{ "--tint": project.accent }}
              className="tint group flex flex-col bg-paper p-5 sm:p-8"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="tint-index font-mono text-[11px] tracking-[0.16em]">{project.index}</span>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="label whitespace-nowrap">{project.kind}</span>
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit the live ${project.title}`}
                      className="group/live inline-flex items-center gap-1.5 border border-line bg-surface px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-mute transition-colors duration-300 hover:border-ink hover:text-ink sm:px-2.5 sm:text-[11px]"
                    >
                      Live
                      <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5" />
                    </a>
                  ) : null}
                </div>
              </div>

              <h3 className="mt-5 max-w-md text-xl font-medium leading-snug tracking-[-0.03em] text-ink sm:text-2xl">
                {project.title}
              </h3>

              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
                {project.summary}
              </p>

              <ul className="mt-6 space-y-2.5 border-t border-line pt-5">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                    <span aria-hidden className="tint-bullet mt-2.5 h-px w-3.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-auto flex flex-wrap gap-1.5 pt-6 sm:pt-7">
                {project.stack.map((tech) => (
                  <li key={tech} className="chip px-2.5 py-1 font-mono text-[11px] tracking-tight">
                    {tech}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          {/* Fills the grid and doubles as a CTA */}
          <Reveal
            delay={80}
            style={{ "--tint": "#d97706" }}
            className="tint group flex flex-col justify-between bg-paper p-5 sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="tint-index font-mono text-[11px] tracking-[0.16em]">06</span>
              <span className="label">Next</span>
            </div>

            <div className="mt-10">
              <p className="max-w-sm text-xl font-medium leading-snug tracking-[-0.03em] text-ink sm:text-2xl">
                Your project could be next on this list.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="group/link mt-6 inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-accent-ink"
              >
                {profile.email}
                <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

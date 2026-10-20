import { skillGroups } from "@/data/resume";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export default function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      label="Skills"
      accent="#4f46e5"
      title="Technologies I work with daily."
      intro="A practical toolkit built through shipping real production features — interfaces, APIs, authentication, validation, and deployment."
    >
      <div className="pt-8 sm:pt-10">
        <div className="hair-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.title}
              delay={i * 60}
              style={{ "--tint": group.accent }}
              className="tint group bg-paper p-5 transition-colors duration-300 sm:p-7"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-base font-medium tracking-[-0.02em] text-ink">{group.title}</h3>
                <span className="tint-index font-mono text-[11px]">{group.index}</span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li key={item} className="chip px-2.5 py-1 font-mono text-[11px] leading-relaxed tracking-tight">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

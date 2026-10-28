import type { CSSProperties, ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function Section({
  id,
  index,
  label,
  title,
  intro,
  accent = "#ff4d1a",
  children,
}: {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  intro?: string;
  /** Hex colour used for the section marker and hover accents. */
  accent?: string;
  children: ReactNode;
}) {
  const tintStyle = { "--tint": accent } as CSSProperties;

  return (
    <section id={id} className="scroll-mt-16 border-b border-line py-14 sm:py-20 lg:py-24">
      <div className="container-page">
        <Reveal>
          <div className="grid gap-5 border-b border-line pb-8 md:grid-cols-12 md:items-end md:gap-8">
            <div className="md:col-span-3">
              <span className="label inline-flex items-center gap-2.5" style={tintStyle}>
                <span aria-hidden className="tint-dot h-2.5 w-2.5 shrink-0" />
                <span className="tint-index">{index}</span>
                <span aria-hidden>—</span>
                <span>{label}</span>
              </span>
            </div>
            <div className="md:col-span-9">
              <h2 className="text-[clamp(1.65rem,4vw,2.75rem)] font-medium leading-[1.05] tracking-[-0.035em] text-ink">
                {title}
              </h2>
              {intro ? (
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">{intro}</p>
              ) : null}
            </div>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

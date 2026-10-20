import type { CSSProperties } from "react";
import { profile } from "@/data/resume";
import { SITE } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import {
  ArrowUpRightIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/Icons";

const channels = [
  {
    term: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: MailIcon,
    external: false,
    accent: "#ff4d1a",
  },
  {
    term: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
    icon: PhoneIcon,
    external: false,
    accent: "#0d9488",
  },
  {
    term: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
    icon: LinkedInIcon,
    external: true,
    accent: "#4f46e5",
  },
] as const;

const contactTint = { "--tint": "#ff4d1a" } as CSSProperties;

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-16 border-b border-line py-14 sm:py-20 lg:py-28"
      style={contactTint}
    >
      <div className="container-page">
        <Reveal>
          <span className="label inline-flex items-center gap-2.5">
            <span aria-hidden className="tint-dot h-2.5 w-2.5 shrink-0" />
            <span className="tint-index">06</span>
            <span aria-hidden>—</span>
            <span>Contact</span>
          </span>

          <h2 className="mt-6 text-[clamp(2rem,7vw,4.5rem)] font-medium leading-[1] tracking-[-0.045em] text-ink">
            Let&rsquo;s build something
            <br className="hidden sm:block" /> fast and sharp
            <span className="text-accent">.</span>
          </h2>

          <a
            href={`mailto:${profile.email}`}
            className="link-draw mt-7 inline-block max-w-full break-words text-lg font-medium tracking-[-0.02em] text-ink sm:mt-8 sm:text-3xl"
          >
            {profile.email}
          </a>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
            Available for full-time roles, freelance projects, and collaboration on web products.
            Drop me a message and I&rsquo;ll get back to you.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-8 sm:mt-10">
          <div className="hair-grid grid-cols-1 md:grid-cols-3">
            {channels.map((channel) => {
              const Icon = channel.icon;
              const tint = { "--tint": channel.accent } as CSSProperties;
              return (
                <a
                  key={channel.term}
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noopener noreferrer" : undefined}
                  style={tint}
                  className="tint channel group flex items-start justify-between gap-4 bg-paper px-5 py-5 sm:px-6 sm:py-7"
                >
                  <span className="flex min-w-0 flex-col gap-3">
                    <span className="channel-label label flex items-center gap-2">
                      <Icon className="h-3.5 w-3.5" />
                      {channel.term}
                    </span>
                    <span className="break-all text-[15px] leading-snug tracking-[-0.01em] text-ink">
                      {channel.value}
                    </span>
                  </span>
                  <ArrowUpRightIcon className="channel-arrow mt-0.5 h-4 w-4 shrink-0 text-mute" />
                </a>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-mute">
            <MapPinIcon className="mt-px h-4 w-4 shrink-0" />
            {profile.location}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const year = SITE.copyrightYear;

  return (
    <footer className="py-8">
      <div className="container-page flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="label">
          © {year} {profile.name}
        </p>
        <p className="label">Designed &amp; built with Next.js + Tailwind CSS</p>
        <a href="#top" className="group/top label inline-flex items-center gap-2 transition-colors hover:text-accent-ink">
          Back to top
          <span aria-hidden className="transition-transform duration-300 group-hover/top:-translate-y-1">
            ↑
          </span>
        </a>
      </div>
    </footer>
  );
}

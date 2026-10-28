import Link from "next/link";
import { profile } from "@/data/resume";

/** Renders inside the root layout, so it can reuse the site's design system. */
export default function NotFound() {
  return (
    <section className="flex flex-1 items-center border-b border-line py-20">
      <div className="container-page">
        <span className="label">Error 404</span>

        <h1 className="mt-6 max-w-2xl text-[clamp(2rem,7vw,4rem)] font-medium leading-[1.02] tracking-[-0.045em] text-ink">
          This page doesn&rsquo;t exist
          <span className="text-accent">.</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
          The link may be outdated, or the page was moved. Head back to the
          homepage, or reach me directly at{" "}
          <a href={`mailto:${profile.email}`} className="link-draw text-ink">
            {profile.email}
          </a>
          .
        </p>

        <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
          <Link href="/" className="btn btn-solid w-full sm:w-auto">
            Back to homepage
          </Link>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost w-full px-4 text-[13px] sm:w-auto sm:px-5 sm:text-sm"
          >
            LinkedIn profile
          </a>
        </div>
      </div>
    </section>
  );
}

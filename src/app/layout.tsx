import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/data/site";
import { profile } from "@/data/resume";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = `${profile.name} — ${SITE.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: title,
    template: `%s — ${profile.name}`,
  },
  description: SITE.tagline,
  keywords: [
    "Jawid Sulthan",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer Dubai",
    "UAE",
    "India",
    "Tamil Nadu",
    "Portfolio",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: profile.name,
    title,
    description: SITE.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: SITE.tagline,
  },
  robots: { index: true, follow: true },
  /* Stop iOS from auto-detecting the phone number and rendering it as a
     green, mis-styled link. */
  formatDetection: { telephone: false },
};

/**
 * Viewport is a separate export from `metadata` in Next.js 14+.
 * The site is light-only, so we pin `color-scheme` to keep browser UI and
 * form controls from rendering in dark colours against the light palette.
 */
export const viewport: Viewport = {
  themeColor: "#fbfbf9",
  colorScheme: "light",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  url: SITE.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  sameAs: [profile.linkedin],
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "PostgreSQL",
    "Prisma ORM",
    "REST APIs",
  ],
  knowsLanguage: ["en", "ta", "ml"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        {/* Enables scroll-reveal styles only when JS is available, so content
            is never hidden for users without JavaScript. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js');" }} />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
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
    "Web Developer Tamil Nadu",
    "India",
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
    card: "summary",
    title,
    description: SITE.tagline,
  },
  robots: { index: true, follow: true },
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
    addressLocality: "Nagercoil",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
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

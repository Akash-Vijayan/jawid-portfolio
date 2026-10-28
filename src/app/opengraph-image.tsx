import { ImageResponse } from "next/og";
import { SITE } from "@/data/site";
import { profile } from "@/data/resume";

/**
 * Social share card for LinkedIn, WhatsApp, X, Slack, etc.
 *
 * Generated at build time from the same `profile` / `SITE` data the page uses,
 * so the card can never drift out of sync with the resume.
 */
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#fbfbf9",
          color: "#0a0a0b",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: availability label */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 22,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#6e6e66",
            }}
          >
            <span
              style={{
                display: "flex",
                width: 16,
                height: 16,
                backgroundColor: "#ff4d1a",
                borderRadius: 9999,
              }}
            />
            Portfolio
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 22,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#c2410c",
            }}
          >
            {profile.availability}
          </div>
        </div>

        {/* Middle: identity */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 108,
              fontWeight: 600,
              letterSpacing: "-0.05em",
              lineHeight: 1,
            }}
          >
            {profile.firstName} {profile.lastName}
            <span style={{ color: "#ff4d1a" }}>.</span>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 40,
              letterSpacing: "-0.02em",
              color: "#3f3f3a",
            }}
          >
            {profile.role} — {profile.shortLocation}
          </div>
        </div>

        {/* Bottom: stack + url */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 14 }}>
            {["React", "Next.js", "TypeScript", "PostgreSQL", "Prisma"].map((tech) => (
              <div
                key={tech}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 20px",
                  border: "1px solid #e4e4de",
                  backgroundColor: "#ffffff",
                  borderRadius: 9999,
                  fontSize: 22,
                  color: "#3f3f3a",
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: "-0.01em",
              color: "#6e6e66",
            }}
          >
            {SITE.url.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

"use client";

/**
 * Root error boundary. It replaces the root layout, so it must render its own
 * <html> and <body> — there is no shared shell to fall back on.
 */
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          backgroundColor: "#fbfbf9",
          color: "#0a0a0b",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
        }}
      >
        <main style={{ maxWidth: "32rem", textAlign: "left" }}>
          <p
            style={{
              margin: 0,
              fontSize: "0.6875rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#6e6e66",
            }}
          >
            Error 500
          </p>

          <h1
            style={{
              margin: "1.5rem 0 0",
              fontSize: "clamp(2rem, 6vw, 3rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              fontWeight: 500,
            }}
          >
            Something went wrong on my end
            <span style={{ color: "#ff4d1a" }}>.</span>
          </h1>

          <p style={{ margin: "1.25rem 0 0", lineHeight: 1.7, color: "#3f3f3a" }}>
            The page hit an unexpected error. Try again, or email me directly and
            I&rsquo;ll get back to you.
          </p>

          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
            }}
          >
            <button
              type="button"
              onClick={() => reset()}
              style={{
                height: "2.75rem",
                paddingInline: "1.25rem",
                border: "1px solid #0a0a0b",
                backgroundColor: "#0a0a0b",
                color: "#fbfbf9",
                fontSize: "0.875rem",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Try again
            </button>

            <a
              href="mailto:jawidsulthan@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                height: "2.75rem",
                paddingInline: "1.25rem",
                border: "1px solid #cfcfc7",
                color: "#0a0a0b",
                fontSize: "0.875rem",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Email me
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}

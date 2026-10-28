import { ImageResponse } from "next/og";

/**
 * Home-screen icon for iOS/Android.
 *
 * Generated at build time so there's no binary asset to maintain, and it always
 * matches the brand palette in `globals.css`. iOS applies its own corner mask,
 * so the artwork is intentionally full-bleed.
 */
export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0b",
          color: "#fbfbf9",
          fontSize: 96,
          fontWeight: 600,
          letterSpacing: "-0.05em",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <span style={{ display: "flex" }}>JS</span>
          <span
            style={{
              display: "flex",
              width: 18,
              height: 18,
              marginTop: 10,
              marginLeft: 4,
              backgroundColor: "#ff4d1a",
              borderRadius: 9999,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}

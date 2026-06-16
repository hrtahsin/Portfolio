import { ImageResponse } from "next/og";

import { profile } from "@/data/portfolio";
import { siteConfig } from "@/lib/site";

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
          background: "#f8fafc",
          color: "#0f172a",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "#2563eb",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            {profile.role}
          </div>
          <div style={{ fontSize: 72, fontWeight: 800, letterSpacing: 0, lineHeight: 1.05 }}>
            {profile.hero.headline}
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            borderTop: "2px solid #dbe3ec",
            color: "#475569",
            display: "flex",
            fontSize: 30,
            justifyContent: "space-between",
            paddingTop: 32,
          }}
        >
          <span>{siteConfig.name}</span>
          <span>{siteConfig.location}</span>
        </div>
      </div>
    ),
    size,
  );
}

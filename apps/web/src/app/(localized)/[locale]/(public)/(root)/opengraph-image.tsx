import { ImageResponse } from "next/og";

export const alt = "VdoHide — Video hosting for every website and app";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "radial-gradient(circle at 50% 0%, #451a1a 0%, #080a09 48%)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        padding: "72px",
        textAlign: "center",
        width: "100%",
      }}
    >
      <div style={{ alignItems: "center", display: "flex", gap: 18 }}>
        <div
          style={{
            alignItems: "center",
            background: "#dc2626",
            borderRadius: 18,
            color: "#ffffff",
            display: "flex",
            fontSize: 32,
            height: 64,
            justifyContent: "center",
            width: 64,
          }}
        >
          ▶
        </div>
        <span style={{ fontSize: 38, fontWeight: 700 }}>VdoHide</span>
      </div>
      <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: "-4px", lineHeight: 1.04, marginTop: 52, maxWidth: 960 }}>
        Video hosting for every website and app.
      </div>
      <div style={{ color: "#a1a1aa", fontSize: 26, marginTop: 30 }}>
        Upload once. Stream fast anywhere.
      </div>
    </div>,
    size,
  );
}

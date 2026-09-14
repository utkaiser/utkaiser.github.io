import { ImageResponse } from "next/og";

export const alt =
  "Luis Kaiser, AI researcher and applied mathematics PhD";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#09090b",
        color: "#fafafa",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        padding: "80px",
        width: "100%",
      }}
    >
      <div
        style={{
          border: "1px solid #3f3f46",
          borderRadius: "32px",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "64px",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "#a1a1aa",
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          AI Researcher · Applied Mathematics
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", fontSize: 88, fontWeight: 700 }}>
            Luis Kaiser
          </div>
          <div
            style={{
              color: "#d4d4d8",
              display: "flex",
              fontSize: 34,
              marginTop: "20px",
            }}
          >
            Reinforcement learning · Continual learning · AI for science
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}

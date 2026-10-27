import { ImageResponse } from "next/og";

export const runtime = "edge";

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
          background: "#0a0a0a",
          borderRadius: 40,
          border: "3px solid rgba(255,255,255,0.14)",
          color: "#fafafa",
          fontSize: 78,
          fontWeight: 700,
          letterSpacing: "-0.06em",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        SG
      </div>
    ),
    {
      ...size,
    }
  );
}

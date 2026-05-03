import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#05070c",
          border: "4px solid #fbbf24",
          borderRadius: "14px",
          color: "#fde68a",
          display: "flex",
          fontSize: 22,
          fontWeight: 800,
          height: "64px",
          justifyContent: "center",
          width: "64px",
        }}
      >
        DE
      </div>
    ),
    { ...size },
  );
}

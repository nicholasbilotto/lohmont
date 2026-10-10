import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// The pill O from the wordmark, ink on paper.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          background: "#f3f1ea",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 30,
            height: 46,
            border: "7px solid #121210",
            borderRadius: 999,
          }}
        />
      </div>
    ),
    { ...size }
  );
}

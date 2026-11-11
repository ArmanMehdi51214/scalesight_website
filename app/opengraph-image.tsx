import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
export const alt = "ScaleSight — managed planning for food and beverage brands";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default async function Image() {
  const font = await readFile(
    join(process.cwd(), "app/fonts/Geist-Regular.ttf"),
  );
  return new ImageResponse(
    <div
      style={{
        background: "#0b162b",
        color: "#ffffff",
        width: "100%",
        height: "100%",
        padding: "65px 75px",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Geist",
      }}
    >
      <div style={{ fontSize: 32, letterSpacing: -1, display: "flex" }}>
        ScaleSight<span style={{ color: "#bcbaff" }}>.</span>
      </div>
      <div
        style={{
          marginTop: 65,
          fontSize: 16,
          color: "#bcbaff",
          letterSpacing: 3,
        }}
      >
        MANAGED PLANNING FOR FOOD & BEVERAGE
      </div>
      <div
        style={{
          fontSize: 65,
          lineHeight: 1.1,
          letterSpacing: -3,
          marginTop: 25,
        }}
      >
        Before your next production run, know what deserves the cash.
      </div>
      <div style={{ fontSize: 20, marginTop: 30, color: "#c6d0e2" }}>
        Maintained analysis. Reviewed recommendations. Your team’s final call.
      </div>
    </div>,
    {
      ...size,
      fonts: [{ name: "Geist", data: font, style: "normal", weight: 400 }],
    },
  );
}

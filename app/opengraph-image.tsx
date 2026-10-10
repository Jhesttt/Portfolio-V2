import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = "Jhestin Digap, Web Developer with a designer's touch, from Antipolo City, Philippines.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Static TTF instances (satori, which renders this image, cannot read variable fonts or woff2).
const display = readFile(join(process.cwd(), "assets/fonts/BricolageGrotesque-SemiBold.ttf"));
const body = readFile(join(process.cwd(), "assets/fonts/HankenGrotesk-Regular.ttf"));

/** Colours are the dark-theme tokens (ink, forest, mint, mist). Inline because satori has no CSS variables. */
const ink = "#091413";
const forest = "#285a48";
const mint = "#b0e4cc";
const mist = "#a8c2b7";
const paper = "#e4f2ea";

/** Shared link preview: one card for every page, built at build time. */
export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: ink,
          backgroundImage: `radial-gradient(60% 80% at 90% 0%, ${forest}, transparent 70%)`,
          fontFamily: "Hanken",
          color: paper,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: 999,
              backgroundColor: mint,
              color: ink,
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Bricolage",
              fontSize: 28,
            }}
          >
            JD
          </div>
          <div style={{ fontSize: 30, color: mist }}>{site.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Two explicit lines: satori wraps flex children as blocks, so inline wrapping is not reliable. */}
          <div style={{ display: "flex", flexDirection: "column", fontFamily: "Bricolage", fontSize: 76, lineHeight: 1.08, letterSpacing: -2.2 }}>
            <div style={{ display: "flex" }}>
              <span style={{ whiteSpace: "pre" }}>I&apos;m Jhestin, a </span>
              <span style={{ color: mint }}>Web Developer</span>
            </div>
            <div style={{ display: "flex" }}>with a designer&apos;s touch.</div>
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: mist }}>
            Next.js, React and TypeScript. Antipolo City, Philippines.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Bricolage", data: await display, style: "normal", weight: 600 },
        { name: "Hanken", data: await body, style: "normal", weight: 400 },
      ],
    },
  );
}

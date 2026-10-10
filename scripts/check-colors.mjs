/**
 * Guard for the "no pure black or white anywhere" rule (CLAUDE.md section 4).
 * Scans source files for pure #000 / #fff values, rgb()/rgba()/hsl() equivalents,
 * the CSS keywords black and white, and Tailwind's black/white color utilities.
 * Exits non-zero on any hit so `npm run lint` fails.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";

const ROOT = process.cwd();
const SCAN_DIRS = ["app", "components", "lib"];
const EXTENSIONS = new Set([".ts", ".tsx", ".css", ".mdx"]);

const RULES = [
  { name: "pure black/white hex", re: /#(?:000|fff)(?:000|fff)?\b(?![0-9a-f])/gi },
  { name: "rgb/rgba pure black or white", re: /rgba?\(\s*(?:0\s*[, ]\s*0\s*[, ]\s*0|255\s*[, ]\s*255\s*[, ]\s*255)\s*[,/)]/gi },
  { name: "hsl pure black or white", re: /hsla?\(\s*[\d.]+(?:deg)?\s*[, ]\s*[\d.]+%\s*[, ]\s*(?:0|100)%/gi },
  { name: "CSS keyword black/white", re: /:\s*(?:black|white)\s*[;,)]/gi },
  { name: "Tailwind black/white utility", re: /\b(?:bg|text|border|ring|fill|stroke|from|via|to|shadow|outline|decoration|divide|accent|caret)-(?:black|white)\b/g },
];

function* walk(dir) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return;
  }
  for (const entry of entries) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) yield* walk(path);
    else if (EXTENSIONS.has(extname(path))) yield path;
  }
}

const hits = [];
for (const dir of SCAN_DIRS) {
  for (const file of walk(join(ROOT, dir))) {
    const lines = readFileSync(file, "utf8").split(/\r?\n/);
    lines.forEach((line, i) => {
      for (const { name, re } of RULES) {
        re.lastIndex = 0;
        if (re.test(line)) hits.push(`${relative(ROOT, file)}:${i + 1}  ${name}\n    ${line.trim()}`);
      }
    });
  }
}

if (hits.length > 0) {
  console.error(`check-colors: ${hits.length} pure black/white value(s) found:\n`);
  console.error(hits.join("\n"));
  process.exit(1);
}
console.log("check-colors: no pure black or white found.");

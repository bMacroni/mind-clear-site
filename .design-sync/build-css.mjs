// Compiles the site's Tailwind + Golden Thread CSS into a single static
// stylesheet for the design-sync bundle (cfg.cssEntry).
// Run from the repo root, before package-build.mjs.
import { execFileSync } from "node:child_process";
import { appendFileSync, readFileSync, writeFileSync } from "node:fs";

const HEAD = ".design-sync/css-head.css";
const GLOBALS = "app/globals.css";
const BADGE = "public/badges/google-play-badge.svg";
const INPUT = ".design-sync/.tw-input.css";
const OUTPUT = ".design-sync/compiled.css";

writeFileSync(INPUT, readFileSync(HEAD, "utf8") + "\n" + readFileSync(GLOBALS, "utf8"));
// Invoke tailwind's CLI entry directly — spawning the .cmd shim fails on
// Windows under Node >= 22 (EINVAL).
execFileSync(
  process.execPath,
  ["node_modules/tailwindcss/lib/cli.js", "-c", ".design-sync/tailwind.config.js", "-i", INPUT, "-o", OUTPUT],
  { stdio: "inherit" },
);

// GooglePlayButton points at the site's /badges/ public path, which doesn't
// exist outside the Next server. Inline the official badge artwork (unaltered,
// per Google Play badge guidelines) so it renders wherever this stylesheet does.
const badge = readFileSync(BADGE).toString("base64");
appendFileSync(
  OUTPUT,
  `\n/* Google Play badge — inlined so the /badges/ public path resolves outside Next */\n` +
    `img[src="/badges/google-play-badge.svg"] {\n` +
    `  content: url("data:image/svg+xml;base64,${badge}");\n}\n`,
);
console.error(`✓ ${OUTPUT}: ${(readFileSync(OUTPUT, "utf8").length / 1024).toFixed(0)} KB`);

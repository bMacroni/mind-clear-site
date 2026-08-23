// Tailwind config used only by /design-sync's CSS compile step.
// Same theme as the site; two differences:
//  1. content globs also cover the authored preview files, so their utility
//     classes survive into the shipped stylesheet;
//  2. the whole Golden Thread color vocabulary is safelisted, because
//     conventions.md hands those class names to the design agent and Tailwind
//     would otherwise only emit the ones this repo happens to use already.
const base = require("../tailwind.config.js");

const FAMILIES = [
  "cream", "cream-warm",
  "ink", "ink-muted", "ink-soft", "ink-faint",
  "gold", "gold-deep", "gold-light", "gold-dark",
  "hairline",
];

module.exports = {
  ...base,
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./.design-sync/entry.tsx",
    "./.design-sync/shims/**/*.tsx",
    "./.design-sync/previews/**/*.tsx",
  ],
  safelist: [
    ...["bg", "text", "border"].flatMap((p) => FAMILIES.map((f) => `${p}-${f}`)),
    // shadcn semantic slots — conventions.md documents these as equivalents,
    // and several are only ever used behind a hover: prefix in this repo.
    ...["background", "foreground", "primary", "secondary", "accent", "muted", "card", "popover", "destructive"]
      .flatMap((n) => [`bg-${n}`, `text-${n}`, `text-${n}-foreground`]),
    "border-border",
    "border-input",
    "ring-ring",
  ],
};

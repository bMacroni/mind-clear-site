// Tailwind config used only by /design-sync's CSS compile step.
// Same theme as the site; content globs additionally cover the authored
// preview files so their utility classes survive into the shipped stylesheet.
const base = require("../tailwind.config.js");

module.exports = {
  ...base,
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./.design-sync/entry.tsx",
    "./.design-sync/shims/**/*.tsx",
    "./.design-sync/previews/**/*.tsx",
  ],
};

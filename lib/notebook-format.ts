// The notebook's pure half: types and formatters, no filesystem.
//
// `lib/notebook.ts` reads markdown off disk, so it imports `node:fs`. Client
// components that only need to format an entry must import from here instead,
// or they drag the loader (and Node builtins) into every browser bundle they
// reach, including the design-system bundle.

export type Entry = {
  slug: string;
  number: number;
  title: string;
  date: string;
  topics: string[];
  excerpt: string;
  metaDescription: string;
  readingMinutes: number;
  html: string;
};

export type Topic = { slug: string; label: string; count: number };

const WORDS_PER_MINUTE = 220;
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function readingMinutes(markdown: string): number {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

/** Formats by hand so the output never depends on the build machine's locale or zone. */
export function formatEntryDate(iso: string): string {
  const [year, month, day] = iso.split("-");
  return `${MONTHS[Number(month) - 1]} ${day}, ${year}`;
}

/** A slug that needs a label this cannot produce is a reason to pick a better slug. */
export function topicLabel(slug: string): string {
  const words = slug.replace(/-/g, " ");
  return words.charAt(0).toUpperCase() + words.slice(1);
}

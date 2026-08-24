import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

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

const CONTENT_DIR = path.join(process.cwd(), "content", "notebook");
const WORDS_PER_MINUTE = 220;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
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

function fail(file: string, problem: string): never {
  throw new Error(`notebook entry ${file}: ${problem}`);
}

function requiredString(value: unknown, field: string, file: string): string {
  const text = typeof value === "string" ? value.trim() : "";
  if (!text) fail(file, `${field} is missing or empty`);
  return text;
}

function isoDate(value: unknown, file: string): string {
  // An unquoted YAML date arrives as a Date at UTC midnight.
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === "string" && ISO_DATE.test(value.trim())) return value.trim();
  fail(file, "date is missing or is not an ISO date (YYYY-MM-DD)");
}

export function loadEntries(dir: string = CONTENT_DIR): Entry[] {
  if (!fs.existsSync(dir)) return [];

  const parsed = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const { data, content } = matter(fs.readFileSync(path.join(dir, file), "utf8"));
      const excerpt = requiredString(data.excerpt, "excerpt", file);
      const metaDescription =
        typeof data.metaDescription === "string" && data.metaDescription.trim()
          ? data.metaDescription.trim()
          : excerpt;

      return {
        slug: file.replace(/\.md$/, ""),
        title: requiredString(data.title, "title", file),
        date: isoDate(data.date, file),
        topics: Array.isArray(data.topics)
          ? data.topics.map((t: unknown) => String(t).trim()).filter(Boolean)
          : [],
        excerpt,
        metaDescription,
        readingMinutes: readingMinutes(content),
        html: String(remark().use(remarkHtml).processSync(content)),
      };
    });

  // Numbering runs oldest first so an entry's number is fixed once published.
  // Slug breaks date ties, which keeps the build deterministic.
  const oldestFirst = parsed.sort(
    (a, b) => a.date.localeCompare(b.date) || a.slug.localeCompare(b.slug),
  );

  return oldestFirst.map((entry, index) => ({ ...entry, number: index + 1 })).reverse();
}

export function getAllEntries(): Entry[] {
  return loadEntries();
}

export function getEntry(slug: string): Entry | null {
  return getAllEntries().find((entry) => entry.slug === slug) ?? null;
}

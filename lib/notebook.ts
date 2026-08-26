import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import { readingMinutes, topicLabel, type Entry, type Topic } from "./notebook-format.ts";

// The pure half lives in notebook-format.ts so browser bundles can format an
// entry without pulling this file's Node builtins in behind it.
export {
  formatEntryDate,
  readingMinutes,
  topicLabel,
  type Entry,
  type Topic,
} from "./notebook-format.ts";

const CONTENT_DIR = path.join(process.cwd(), "content", "notebook");
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

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

export function getTopics(entries: Entry[] = getAllEntries()): Topic[] {
  const counts = new Map<string, number>();
  for (const entry of entries) {
    for (const topic of entry.topics) {
      counts.set(topic, (counts.get(topic) ?? 0) + 1);
    }
  }
  return Array.from(counts.entries())
    .map(([slug, count]) => ({ slug, label: topicLabel(slug), count }))
    .sort((a, b) => a.label.localeCompare(b.label));
}

export function getEntriesByTopic(topic: string, entries: Entry[] = getAllEntries()): Entry[] {
  return entries.filter((entry) => entry.topics.includes(topic));
}

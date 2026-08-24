import { test } from "node:test";
import assert from "node:assert/strict";
import path from "node:path";
import fs from "node:fs";
import os from "node:os";
import {
  loadEntries,
  readingMinutes,
  formatEntryDate,
  getTopics,
  getEntriesByTopic,
  topicLabel,
} from "./notebook.ts";

const FIXTURES = path.join(process.cwd(), "lib", "__fixtures__", "notebook");

test("returns entries newest first", () => {
  const entries = loadEntries(FIXTURES);
  assert.deepEqual(
    entries.map((e) => e.slug),
    ["third-entry", "second-entry", "first-entry"],
  );
});

test("numbers entries from oldest, so numbers never shift", () => {
  const entries = loadEntries(FIXTURES);
  const numbers = Object.fromEntries(entries.map((e) => [e.slug, e.number]));
  assert.deepEqual(numbers, {
    "first-entry": 1,
    "second-entry": 2,
    "third-entry": 3,
  });
});

test("keeps the date as a plain ISO string, with no timezone drift", () => {
  const entry = loadEntries(FIXTURES).find((e) => e.slug === "first-entry");
  assert.equal(entry?.date, "2026-01-10");
});

test("defaults topics to an empty list", () => {
  const entry = loadEntries(FIXTURES).find((e) => e.slug === "third-entry");
  assert.deepEqual(entry?.topics, []);
});

test("falls back to the excerpt when metaDescription is absent", () => {
  const entries = loadEntries(FIXTURES);
  const withMeta = entries.find((e) => e.slug === "first-entry");
  const without = entries.find((e) => e.slug === "second-entry");
  assert.equal(withMeta?.metaDescription, "An explicit meta description.");
  assert.equal(without?.metaDescription, "The middle fixture.");
});

test("renders markdown body to html", () => {
  const entry = loadEntries(FIXTURES).find((e) => e.slug === "first-entry");
  assert.match(entry?.html ?? "", /<em>emphasis<\/em>/);
});

test("reading time is at least one minute and scales with length", () => {
  assert.equal(readingMinutes("three short words"), 1);
  assert.equal(readingMinutes(Array(660).fill("word").join(" ")), 3);
});

test("formats dates without touching the system timezone", () => {
  assert.equal(formatEntryDate("2026-08-18"), "Aug 18, 2026");
  assert.equal(formatEntryDate("2026-01-01"), "Jan 01, 2026");
});

test("throws and names the file when a required field is missing", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "nb-"));
  fs.writeFileSync(
    path.join(dir, "broken.md"),
    '---\ntitle: "No excerpt here"\ndate: 2026-02-02\n---\n\nBody.\n',
  );
  assert.throws(() => loadEntries(dir), /broken\.md.*excerpt/i);
});

test("throws when the date is not an ISO date", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "nb-"));
  fs.writeFileSync(
    path.join(dir, "baddate.md"),
    '---\ntitle: "Bad date"\ndate: "last Tuesday"\nexcerpt: "x"\n---\n\nBody.\n',
  );
  assert.throws(() => loadEntries(dir), /baddate\.md.*date/i);
});

test("derives a topic label from its slug", () => {
  assert.equal(topicLabel("brain-dump"), "Brain dump");
  assert.equal(topicLabel("bad-days"), "Bad days");
  assert.equal(topicLabel("focus"), "Focus");
});

test("collects topics with counts, sorted by label", () => {
  const topics = getTopics(loadEntries(FIXTURES));
  assert.deepEqual(topics, [
    { slug: "bad-days", label: "Bad days", count: 1 },
    { slug: "brain-dump", label: "Brain dump", count: 2 },
  ]);
});

test("filters entries by topic, newest first", () => {
  const entries = loadEntries(FIXTURES);
  assert.deepEqual(
    getEntriesByTopic("brain-dump", entries).map((e) => e.slug),
    ["second-entry", "first-entry"],
  );
  assert.deepEqual(getEntriesByTopic("nope", entries), []);
});

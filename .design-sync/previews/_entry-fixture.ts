// A hand-built notebook entry for the previews.
//
// Deliberately not imported from `lib/notebook`: that module reads markdown off
// disk, so it pulls Node builtins into anything that touches it. Previews run in
// a browser. The leading underscore keeps the converter from reading this file
// as a preview of its own.

export const sampleEntry = {
  slug: "on-missing-a-day",
  number: 3,
  title: "On missing a day",
  date: "2026-08-18",
  topics: ["bad-days"],
  excerpt: "The streak is not the point. Starting again is.",
  metaDescription: "Why Mind Clear's routines forgive a missed day.",
  readingMinutes: 4,
  html: [
    "<p>I built a habit tracker into an early version of this app. It had a streak counter, because every habit tracker has one.</p>",
    "<h2>What a streak actually measures</h2>",
    "<p>A streak counts consecutive days. That is <strong>all</strong> it can see. It cannot tell the difference between a day you skipped and a day that skipped you.</p>",
    "<ul><li>A migraine reads the same as giving up.</li><li>A funeral reads the same as giving up.</li></ul>",
    "<blockquote><p>Some days are just hard.</p></blockquote>",
    "<p>So the counter stayed, and the shame came out. Miss a day and the routine is still there in the morning, waiting, saying nothing about yesterday.</p>",
  ].join(""),
};

export const secondEntry = {
  slug: "why-its-black-and-white",
  number: 2,
  title: "Why it's black and white",
  date: "2026-07-29",
  topics: ["design"],
  excerpt: "Less on the screen means less for a tired brain to filter out.",
  metaDescription: "The case for a low-stimulation planning app.",
  readingMinutes: 3,
  html: "<p>Every color on a screen is a small decision someone else made for you.</p>",
};

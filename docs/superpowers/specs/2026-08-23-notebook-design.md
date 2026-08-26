# The Notebook

Design spec, 2026-08-23.

## What this is

A writing surface at `/notebook` for notes on ADHD, planning, and building Mind Clear.

The redesign plan already settled the framing and this spec keeps it: notebook, not blog. Blogs
imply a cadence and a level of polish that nobody is going to sustain. "Here's what I'm noticing" is
a lower bar, it is more honest, and it fits how the rest of the site already sounds.

That framing is a constraint on the build, not just the copy. No read-count badges, no "subscribe for
weekly insights", no post counter that makes a quiet month look like a failure.

## Routes

| Route | Purpose |
|-------|---------|
| `/notebook` | Index. Every entry, newest first. |
| `/notebook/[slug]` | One entry. |
| `/notebook/topic/[topic]` | The same list, filtered to one topic, with its own heading. |

All three are statically generated through `generateStaticParams`. Nothing runs at request time.

Topic pages exist because they are the only part of this that meaningfully grows the indexable
surface. Paginating the index does close to nothing for search. A page at
`/notebook/topic/brain-dump` targets a real query from the marketing playbook's keyword list.

The index does not paginate in this version. At a notebook's cadence it will be a long time before
one page is too long, and a pager that never fills is worse than no pager. When it is needed, add
`/notebook/page/[n]`.

## Layout

Two different layouts, deliberately.

**The index** uses the editorial pattern from `FeatureList`: one continuous gold spine down the page,
entries as hairline-ruled rows with the date sitting quietly in the left column, then the title in
Fraunces and a one-line excerpt. It stays readable at fifty entries.

**Entry pages** use the numbered-node treatment from the home page sections: a gold node on the
spine, the oversized ghost numeral behind the heading, and an uppercase topic eyebrow. This works on
an entry page precisely because there is only one entry on it. Nothing has to renumber.

Using the node treatment for the *index* was the tempting option and it does not survive contact with
reverse-chronological order. The newest entry would carry the highest number, so every time you
publish, the whole visible sequence shifts.

**Topic pages** reuse the index layout with a different heading and intro line.

## Content

One markdown file per entry in `content/notebook/`. The filename is the slug.

```markdown
---
title: "Why your to-do list makes you feel worse"
date: 2026-08-18
topics: ["brain-dump"]
excerpt: "Every app I tried assumed I could already organise my thoughts."
metaDescription: "Standard task apps expect you to arrive organised. For ADHD brains that is the hard part."
---

Body copy in plain markdown.
```

`title`, `date`, and `excerpt` are required. `topics` defaults to empty. `metaDescription` falls back
to `excerpt` when absent.

`date` is an ISO date with no time or zone. It is stored on `Entry` as that same string so nothing
depends on the server's timezone, and formatted for display at render time: "Aug 18, 2026" in the
index rows, the same on entry pages. Two entries sharing a date are ordered by slug so the build is
deterministic.

Starter topics, taken from the playbook's keyword targets: `brain-dump`, `getting-started`,
`bad-days`. A topic exists when an entry claims it. There is no separate registry to keep in sync.

The display label is derived from the slug by replacing hyphens with spaces and capitalising the
first word, so `brain-dump` renders as "Brain dump". A slug that needs a label the derivation cannot
produce is a reason to pick a better slug, not to add a lookup table.

### Entry numbers

Derived from publication order ascending. The oldest entry is № 01.

Ascending order is stable. A new entry takes the next number and no existing entry ever changes. The
alternative, putting the number in frontmatter, means remembering to set it correctly on every post,
and remembering things is the exact problem this product exists to solve.

If an entry is ever deleted, later numbers shift. That is acceptable. The numbers are decoration, not
identity, and the URL is the slug.

### Read time

Computed from word count and shown on entry pages. Telling someone a piece takes four minutes before
they start is useful information for this audience, not decoration.

## Modules

### `lib/notebook.ts`

The only code that touches the filesystem. Everything else consumes its output.

```ts
type Entry = {
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

getAllEntries(): Entry[]          // newest first
getEntry(slug): Entry | null
getTopics(): { slug: string; label: string; count: number }[]
getEntriesByTopic(topic): Entry[]
```

Markdown becomes HTML here, at build time, through remark. Pages receive finished strings and never
parse anything.

### `components/notebook/`

| Component | Job |
|-----------|-----|
| `NotebookHeader` | Thread header: spine, node, ghost letter, eyebrow, heading, intro. Shared by the index and topic pages. |
| `EntryRow` | One hairline row: date, title, excerpt. |
| `TopicChips` | The topic filter row. |
| `EntryHeader` | Entry page header: node, ghost numeral, topic eyebrow, title, date and read time. |
| `Prose` | Styles rendered markdown to the Golden Thread. |

`Prose` is the one with real work in it. Rendered markdown arrives as unstyled HTML, so this sets
Fraunces on headings at `font-light`, body copy in Outfit at `text-ink-muted`, gold-deep links,
hairline rules, and a blockquote treatment that uses the gold rail rather than a grey bar. The rest
of these components are thin.

All five follow the existing convention: they live outside `components/marketing/` because they are a
distinct surface, and they get added to `.design-sync/entry.tsx` so they sync to Claude Design.

## SEO

Per-route `generateMetadata`. Entry pages use `title` and `metaDescription` from frontmatter. Topic
pages get a generated title and description naming the topic. The index gets a static pair.

This is where the multi-page value actually sits. Each entry is its own indexable page with its own
title and description, which is worth far more than any amount of index pagination.

## Dependencies

`gray-matter`, `remark`, `remark-html`. These run at build time only. Nothing from them is sent to
the browser.

## Failure behavior

Unknown slug or unknown topic returns `notFound()`.

Missing or malformed frontmatter throws at build time and names the offending file. A build that
fails loudly in CI is better than an entry that quietly publishes with no date. This is the one place
the design deliberately chooses a hard failure.

## Verification

This repo has no test suite, so verification is a production build followed by rendering each route
and reading the real output. That is the same method used to verify the Golden Thread palette change,
and it caught things that eyeballing would not have.

Checks: all three route types build and render, an entry's markdown renders with Prose styling
applied, topic filtering returns the right entries, an unknown slug 404s, and a malformed entry fails
the build.

## Seed content

Three entries, drafted to the brand voice, first person as Brian. They exist so the pages are not
empty and so `Prose` has real markdown to style.

They are drafts. Notebook entries fall under "standard copy" in the review process, so Brian approves
them, but nothing here should be treated as shipped copy until he has read it. Expect to rewrite
them. Draft prose written on someone else's behalf is a starting point.

The three: one on why standard task apps fail before you start, one on the two-minute brain dump, one
on missing a day. Each targets a topic from the starter set.

## Out of scope

**Footer navigation.** The agreed scope was the index and entry pages, which leaves the notebook live
but unreachable from the site. Adding it to `Footer`'s `navLinks` is a one-line change and it should
happen before this is announced anywhere.

**Pagination**, per the reasoning above.

**RSS.** Worth doing eventually. Not needed to ship.

**An `/about` page**, which the redesign plan lists alongside the notebook. Separate piece of work.

import { NotebookShell, TopicChips, EntryRow } from "mind-clear-site";
import { sampleEntry, secondEntry } from "./_entry-fixture";

const topics = [
  { slug: "bad-days", label: "Bad days", count: 4 },
  { slug: "design", label: "Design", count: 3 },
  { slug: "building-mind-clear", label: "Building Mind Clear", count: 6 },
];

/** The notebook index: eyebrow, ghost letter, heading, intro, then the entries. */
export const Default = () => (
  <NotebookShell
    eyebrow="The notebook"
    ghost="N"
    title={
      <>
        What I&rsquo;m <em>noticing.</em>
      </>
    }
    intro="Notes on ADHD and building Mind Clear, posted whenever there is something worth writing down."
  >
    <TopicChips topics={topics} />
    <EntryRow entry={sampleEntry} />
    <EntryRow entry={secondEntry} />
  </NotebookShell>
);

/** A topic listing. The ghost takes the topic's first letter and the intro is dropped. */
export const TopicListing = () => (
  <NotebookShell
    eyebrow="Topic"
    ghost="B"
    title={
      <>
        Bad <em>days.</em>
      </>
    }
  >
    <TopicChips topics={topics} active="bad-days" />
    <EntryRow entry={sampleEntry} />
  </NotebookShell>
);

/** Nothing published yet. The shell still carries the page, so it never looks broken. */
export const Empty = () => (
  <NotebookShell
    eyebrow="The notebook"
    ghost="N"
    title={
      <>
        What I&rsquo;m <em>noticing.</em>
      </>
    }
    intro="Notes on ADHD and building Mind Clear, posted whenever there is something worth writing down."
  >
    <p className="mt-10 border-t border-hairline py-6 text-ink-soft">Nothing here yet.</p>
  </NotebookShell>
);

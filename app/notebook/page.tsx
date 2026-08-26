import type { Metadata } from "next";
import Footer from "../../components/marketing/Footer";
import { EntryRow } from "../../components/notebook/EntryRow";
import { NotebookShell } from "../../components/notebook/NotebookShell";
import { TopicChips } from "../../components/notebook/TopicChips";
import { getAllEntries, getTopics } from "../../lib/notebook";

export const metadata: Metadata = {
  title: "The Notebook | Mind Clear",
  description:
    "Notes on ADHD and building Mind Clear, written when there is something worth writing down.",
};

export default function NotebookIndex() {
  const entries = getAllEntries();
  const topics = getTopics(entries);

  return (
    <main className="mc-page overflow-x-hidden">
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
        {entries.length === 0 ? (
          <p className="border-t border-hairline py-6 text-ink-soft">Nothing here yet.</p>
        ) : (
          entries.map((entry) => <EntryRow key={entry.slug} entry={entry} />)
        )}
      </NotebookShell>
      <Footer />
      <div className="mc-grain" aria-hidden="true" />
    </main>
  );
}

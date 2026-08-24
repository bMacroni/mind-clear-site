import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "../../../../components/marketing/Footer";
import { EntryRow } from "../../../../components/notebook/EntryRow";
import { NotebookShell } from "../../../../components/notebook/NotebookShell";
import { TopicChips } from "../../../../components/notebook/TopicChips";
import { getAllEntries, getEntriesByTopic, getTopics, topicLabel } from "../../../../lib/notebook";

type Params = { params: { topic: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return getTopics().map((topic) => ({ topic: topic.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const label = topicLabel(params.topic);
  return {
    title: `${label} | The Notebook | Mind Clear`,
    description: `Notebook entries about ${label.toLowerCase()}, from the people building Mind Clear.`,
  };
}

export default function NotebookTopic({ params }: Params) {
  const entries = getAllEntries();
  const topics = getTopics(entries);
  if (!topics.some((topic) => topic.slug === params.topic)) notFound();

  const label = topicLabel(params.topic);
  const matching = getEntriesByTopic(params.topic, entries);

  return (
    <main className="mc-page overflow-x-hidden">
      <NotebookShell
        eyebrow={label}
        ghost={label.charAt(0)}
        title={<>{label}</>}
        intro={`Everything in the notebook tagged ${label.toLowerCase()}.`}
      >
        <TopicChips topics={topics} active={params.topic} />
        {matching.map((entry) => (
          <EntryRow key={entry.slug} entry={entry} />
        ))}
      </NotebookShell>
      <Footer />
      <div className="mc-grain" aria-hidden="true" />
    </main>
  );
}

import { formatEntryDate, topicLabel, type Entry } from "../../lib/notebook";

export function EntryHeader({ entry }: { entry: Entry }) {
  const number = String(entry.number).padStart(2, "0");
  const eyebrow = entry.topics[0] ? topicLabel(entry.topics[0]) : "Notebook";

  return (
    <>
      <p className="mc-ghost" aria-hidden="true">
        {number}
      </p>
      <p className="flex items-baseline gap-3 mb-8">
        <span className="font-serif italic text-base text-gold-deep">№ {number}</span>
        <span className="text-xs uppercase tracking-[0.18em] text-gold-deep">{eyebrow}</span>
      </p>
      <h1
        id="entry-title"
        className="font-serif text-4xl md:text-5xl font-light leading-tight text-ink max-w-2xl"
      >
        {entry.title}
      </h1>
      <p className="mt-4 text-xs uppercase tracking-[0.14em] text-gold-deep">
        <time dateTime={entry.date}>{formatEntryDate(entry.date)}</time>
        {` · ${entry.readingMinutes} min`}
      </p>
    </>
  );
}

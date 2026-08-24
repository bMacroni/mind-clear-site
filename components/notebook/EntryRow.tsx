import Link from "next/link";
import { formatEntryDate, type Entry } from "../../lib/notebook-format";

export function EntryRow({ entry }: { entry: Entry }) {
  return (
    <Link href={`/notebook/${entry.slug}`} className="group block border-t border-hairline py-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-8">
        <time
          dateTime={entry.date}
          className="text-xs uppercase tracking-[0.14em] text-gold-deep sm:w-28 sm:shrink-0 sm:pt-2"
        >
          {formatEntryDate(entry.date)}
        </time>
        <div>
          <h2 className="font-serif text-2xl font-light leading-snug text-ink transition-colors group-hover:text-gold-deep">
            {entry.title}
          </h2>
          <p className="mt-1 max-w-xl text-ink-muted">{entry.excerpt}</p>
        </div>
      </div>
    </Link>
  );
}

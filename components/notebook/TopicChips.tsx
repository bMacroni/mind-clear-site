import Link from "next/link";
import type { Topic } from "../../lib/notebook";

export function TopicChips({ topics, active }: { topics: Topic[]; active?: string }) {
  if (topics.length === 0) return null;

  const chip = "rounded-full border px-3 py-1 text-xs uppercase tracking-[0.12em] transition-colors";
  const on = "border-gold-deep bg-cream-warm text-gold-deep";
  const off = "border-hairline text-ink-soft hover:border-gold-deep hover:text-gold-deep";

  return (
    <nav aria-label="Topics" className="mb-10 mt-10 flex flex-wrap gap-2">
      <Link href="/notebook" className={`${chip} ${active ? off : on}`}>
        All
      </Link>
      {topics.map((topic) => (
        <Link
          key={topic.slug}
          href={`/notebook/topic/${topic.slug}`}
          className={`${chip} ${active === topic.slug ? on : off}`}
        >
          {topic.label}
        </Link>
      ))}
    </nav>
  );
}

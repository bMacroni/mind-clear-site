import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../../components/marketing/Footer";
import { EntryHeader } from "../../../components/notebook/EntryHeader";
import { Prose } from "../../../components/notebook/Prose";
import { getAllEntries, getEntry } from "../../../lib/notebook";

type Params = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllEntries().map((entry) => ({ slug: entry.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const entry = getEntry(params.slug);
  if (!entry) return {};
  return {
    title: `${entry.title} | Mind Clear`,
    description: entry.metaDescription,
    openGraph: { title: entry.title, description: entry.metaDescription, type: "article" },
  };
}

export default function NotebookEntry({ params }: Params) {
  const entry = getEntry(params.slug);
  if (!entry) notFound();

  return (
    <main className="mc-page overflow-x-hidden">
      <article aria-labelledby="entry-title" className="relative overflow-hidden">
        <div className="mc-spine" aria-hidden="true" />
        <div className="mc-node" aria-hidden="true" />
        <div className="mc-content">
          <EntryHeader entry={entry} />
          <div className="mt-12">
            <Prose html={entry.html} />
          </div>
          <p className="mt-16 border-t border-hairline pt-6">
            <Link
              href="/notebook"
              className="text-xs uppercase tracking-[0.14em] text-gold-deep hover:underline"
            >
              &larr; All entries
            </Link>
          </p>
        </div>
      </article>
      <Footer />
      <div className="mc-grain" aria-hidden="true" />
    </main>
  );
}

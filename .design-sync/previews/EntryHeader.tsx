import { EntryHeader } from "mind-clear-site";
import { sampleEntry, secondEntry } from "./_entry-fixture";

/** The spine, node, and content indent an entry page provides around the header. */
const EntryPage = ({ children }: { children: React.ReactNode }) => (
  <div className="relative overflow-hidden">
    <div className="mc-spine" aria-hidden="true" />
    <div className="mc-node" aria-hidden="true" />
    <div className="mc-content">{children}</div>
  </div>
);

/** Number, topic eyebrow, title, then the date and reading time. */
export const Default = () => (
  <EntryPage>
    <EntryHeader entry={sampleEntry} />
  </EntryPage>
);

/** A shorter title on a different topic. The ghost numeral tracks the entry number. */
export const ShortTitle = () => (
  <EntryPage>
    <EntryHeader entry={secondEntry} />
  </EntryPage>
);

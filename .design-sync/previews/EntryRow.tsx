import { EntryRow } from "mind-clear-site";
import { sampleEntry, secondEntry } from "./_entry-fixture";

const Stack = ({ children }: { children: React.ReactNode }) => (
  <div className="px-8 py-6" style={{ maxWidth: 720 }}>
    {children}
  </div>
);

/** One row: date on the left, title and excerpt on the right, hairline rule on top. */
export const Default = () => (
  <Stack>
    <EntryRow entry={sampleEntry} />
  </Stack>
);

/** How the index reads. Each row draws its own top rule, so a list separates itself. */
export const List = () => (
  <Stack>
    <EntryRow entry={sampleEntry} />
    <EntryRow entry={secondEntry} />
  </Stack>
);

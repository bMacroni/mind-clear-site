---
category: Notebook
---
One notebook entry in a list: date on the left, title and excerpt on the right, hairline rule above.

Each row draws its own top border, so a stack of rows separates itself with no divider element in between. The whole row is the link to the entry. On hover the title shifts to gold.

```tsx
{entries.map((entry) => <EntryRow key={entry.slug} entry={entry} />)}
```

`entry` is the object `getAllEntries()` returns. The row reads `slug` for the link, `date` for the formatted date, `title`, and `excerpt`. The rest of the entry is ignored here.

The date column is fixed-width and sits beside the text from the `sm` breakpoint up. Below that it stacks above the title.

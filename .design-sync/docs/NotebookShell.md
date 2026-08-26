---
category: Notebook
---
The page shell every notebook listing renders inside: gold spine, node, ghost character, and the indented content column.

It is the notebook's counterpart to `ThreadSection`. Where a marketing section is numbered, a notebook listing is lettered, so `ghost` takes a character rather than a two-digit number. Use it for the notebook index and for topic listings. Individual entries do not use it; they assemble the same skeleton around `EntryHeader`.

```tsx
<NotebookShell
  eyebrow="The notebook"
  ghost="N"
  title={<>What I&rsquo;m <em>noticing.</em></>}
  intro="Notes on ADHD, planning, and building Mind Clear. No schedule. Just what is worth writing down."
>
  <TopicChips topics={topics} />
  {entries.map((entry) => <EntryRow key={entry.slug} entry={entry} />)}
</NotebookShell>
```

`title` is a node, not a string, so one phrase can be italic. That italic phrase is the house pattern for headings; keep it to a single phrase. `eyebrow` doubles as the section's accessible name, so write it as a label a screen reader can read aloud. `intro` is optional and belongs on the index. Topic listings drop it, since the chip already says what is being filtered.

Children stack directly under the intro inside the content column.

---
category: Notebook
---
The masthead of a single notebook entry: number, topic eyebrow, title, then the date and reading time.

It renders the ghost numeral itself but nothing around it, so give it a positioned parent carrying `mc-spine`, `mc-node`, and `mc-content`. Without that parent the ghost numeral has nowhere to sit and the text runs under it.

```tsx
<article aria-labelledby="entry-title" className="relative overflow-hidden">
  <div className="mc-spine" aria-hidden="true" />
  <div className="mc-node" aria-hidden="true" />
  <div className="mc-content">
    <EntryHeader entry={entry} />
    <Prose html={entry.html} />
  </div>
</article>
```

The heading carries `id="entry-title"`, which is what the surrounding `article` should point `aria-labelledby` at.

`number` is padded to two digits for the eyebrow and the ghost. The eyebrow label comes from the entry's first topic, falling back to "Notebook" when it has none.

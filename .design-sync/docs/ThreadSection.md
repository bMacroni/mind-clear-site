---
category: Building Blocks
---
The layout shell for one numbered node on the golden thread — spine segment, node circle, editorial eyebrow, ghost numeral, and indented content.

Every numbered page section is built from this. Use it to add a new section that belongs to the same narrative sequence.

```tsx
<ThreadSection number="03" label="Today's focus" ariaLabel="Today's focus">
  <h2 style={{ fontFamily: "var(--font-serif)" }}>One task. Right now.</h2>
  <p>Mind Clear picks one thing for you to focus on.</p>
</ThreadSection>
```

`number` is the two-digit string shown both as the numbered eyebrow and as the oversized ghost numeral behind the content. `label` is the uppercase, letter-spaced eyebrow text. `ariaLabel` labels the `<section>` for screen readers. Keep numbering sequential down the page.

Must render inside `MindClearPage` — it reads `--spine-x` and `--content-pad` from `.mc-page`.

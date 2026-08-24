---
category: Notebook
---
The rendered body of a notebook entry: markdown turned into HTML, styled by the `mc-prose` scope.

Headings are Fraunces, list markers and blockquote rails are gold, and the measure is capped so a line never runs too wide to track. Nothing is styled by class here. The stylesheet targets tags, because the HTML comes from remark rather than from markup anyone wrote by hand.

```tsx
<Prose html={entry.html} />
```

`html` is inserted directly into the document without sanitizing. It is trusted because it is build-time output from markdown files that live in this repo, reviewed like any other change. **Never pass anything user-submitted to this component**, and never pass HTML fetched at runtime. If notebook content ever comes from outside the repo, this component needs a sanitizer before it can take it.

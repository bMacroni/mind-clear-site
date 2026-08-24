---
category: Notebook
---
The row of topic filters above the notebook's entry list.

Renders an "All" chip followed by one chip per topic. Pass `active` on a topic page and that chip takes the selected treatment while "All" becomes the way back. Omit `active` on the index and "All" is the one selected. The component renders nothing when `topics` is empty.

```tsx
<TopicChips topics={topics} />
<TopicChips topics={topics} active="bad-days" />
```

`topics` is what `getTopics()` returns: `slug` builds the link, `label` is the visible text. `count` travels with the topic but is not shown, so a topic with one entry looks the same as a topic with ten.

Labels are derived from slugs, so a slug that reads badly as a label is a reason to rename the slug.

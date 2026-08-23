---
category: Building Blocks
---
A single task card as it appears inside Mind Clear — the app UI rendered in the website's own materials, not a screenshot.

Use it to show the product rather than describe it. Stack several for a task list.

```tsx
<TaskCardMockup title="Draft the Q3 planning deck" meta="Due today" isFocus />
```

`isFocus` switches the card to the Focus-mode treatment: translucent gold fill and a gold border. Use it on exactly one card in a stack. `pill` renders a status chip (e.g. "3 days waiting"); `priorityPill` renders the darker chip for what the AI ranked up. `meta` is the small line under the title — due date, routine cadence, or priority.

The left rail is gold on every card. The card is decorative and carries no interaction.

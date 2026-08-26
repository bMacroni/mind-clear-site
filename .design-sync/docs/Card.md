---
category: Primitives
---
shadcn/ui card, themed to the Golden Thread palette: warm-cream surface `#F5F1E1`, hairline border, ink text.

Correct on the cream page with no overrides.

```tsx
<Card>
  <CardHeader>
    <CardTitle className="font-serif text-2xl font-light">Brain Dump</CardTitle>
    <CardDescription>Everything swirling, in one place.</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-ink-muted">Type whatever's on your mind.</p>
  </CardContent>
</Card>
```

Titles take `font-serif` (Fraunces) at `font-light` to match the site's headline treatment — the component doesn't apply that for you.

For showing *app* content — a task, a to-do row — use `TaskCardMockup` instead; it carries the gold rail and focus treatment.

Sub-components: `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`. All accept native `div` attributes.

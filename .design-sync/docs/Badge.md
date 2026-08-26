---
category: Primitives
---
shadcn/ui badge, themed to the Golden Thread palette.

`default` is ink on warm cream, `secondary` is a warm-cream fill, `outline` is a hairline border. For a gold chip, override the fill:

```tsx
<Badge variant="outline" className="font-normal">3 days waiting</Badge>
<Badge className="bg-gold text-gold-dark hover:bg-gold font-normal">Suggested first</Badge>
```

Badges default to `font-semibold`; the site's chips read lighter, so add `font-normal`.

Inside a task card, prefer `TaskCardMockup`'s `pill` / `priorityPill` props — they already carry the right treatment.

Props: `variant` (`default` | `secondary` | `outline` | `destructive`) plus native `div` attributes.

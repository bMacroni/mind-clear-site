---
category: Primitives
---
shadcn/ui card. Unused on the live site — no Golden Thread page renders one.

**Read before using.** `Card` resolves `bg-card`, which the Tailwind theme still maps to the retired `#1E1E1E`, so an unstyled card is dark charcoal on a cream page. To use it on-brand, override the surface explicitly:

```tsx
<Card className="border-[#DEDCD2] shadow-none" style={{ backgroundColor: "#F5F1E1" }}>
  <CardHeader>
    <CardTitle style={{ fontFamily: "var(--font-serif)" }}>Brain Dump</CardTitle>
  </CardHeader>
</Card>
```

For showing app content, `TaskCardMockup` is the on-brand card and needs no overrides.

Sub-components: `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`. All accept native `div` attributes.

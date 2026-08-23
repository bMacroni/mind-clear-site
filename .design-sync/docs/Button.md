---
category: Primitives
---
shadcn/ui button. Only the `outline` variant appears on the live site, and only on the legal pages.

**Read before using.** The variant styles resolve against the Tailwind theme in `tailwind.config.js`, which still carries the site's retired dark palette (`background: #121212`, `primary: #FFD700`). `variant="default"` is electric gold on black and `variant="outline"` has a black fill — neither is Golden Thread. The site works around this by overriding the border and text through `className`:

```tsx
<Button
  size="lg"
  variant="outline"
  className="border-2 border-[#DEDCD2] text-[#6B5A20] hover:bg-[#F5F1E1]"
>
  Back to Mind Clear
</Button>
```

For a cream-page call to action, prefer that pattern — or `GooglePlayButton` where the action is "download the app".

Props follow the shadcn contract: `variant`, `size`, `asChild`, plus all native button attributes.

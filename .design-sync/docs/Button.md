---
category: Primitives
---
shadcn/ui button, themed to the Golden Thread palette.

`default` is ink `#111111` with warm-cream text — the solid action. `outline` and `ghost` sit on the cream page and warm to `#F5F1E1` on hover. `secondary` is a warm-cream fill. No override is needed to stay on brand.

```tsx
<Button>Get started</Button>
<Button variant="outline">Read the privacy policy</Button>
```

The live site uses only `outline`, on the legal pages, with a heavier border and gold-deep text:

```tsx
<Button size="lg" variant="outline" className="border-2 text-gold-deep px-8 py-6 text-lg">
  Back to Mind Clear
</Button>
```

Where the action is "download the app", use `GooglePlayButton` instead — never a generic button.

Props: `variant` (`default` | `secondary` | `outline` | `ghost` | `link` | `destructive`), `size` (`default` | `sm` | `lg` | `icon`), `asChild`, plus all native button attributes.

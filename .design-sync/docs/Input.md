---
category: Primitives
---
shadcn/ui text input: white fill, hairline border, gold focus ring.

The white fill is deliberate. Everything else on the page is cream, so a white field is the one surface that reads as "type here."

```tsx
<Input placeholder="you@example.com" />
```

Correct on cream and on warm-cream panels with no overrides. The Footer's own waitlist field is hand-rolled rather than built from this, so match `Footer` if you are extending that area and use `Input` for new forms.

Accepts all native input attributes.

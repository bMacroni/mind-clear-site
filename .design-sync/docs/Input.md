---
category: Primitives
---
shadcn/ui text input, themed to the Golden Thread palette: cream fill, hairline border, gold focus ring.

Correct on the cream page with no overrides.

```tsx
<Input placeholder="you@example.com" />
```

The Footer's own waitlist field is hand-rolled rather than built from this — match `Footer` if you're extending that area, and use `Input` for new forms.

Accepts all native input attributes.

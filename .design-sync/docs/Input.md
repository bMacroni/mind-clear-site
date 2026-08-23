---
category: Primitives
---
shadcn/ui text input. Unused on the live site — the Footer's waitlist field is hand-rolled.

**Read before using.** The default renders with a black fill, because `bg-background` still maps to the retired `#121212`. On a cream page set the surface explicitly:

```tsx
<Input placeholder="you@example.com" className="bg-white border-[#DEDCD2]" />
```

Accepts all native input attributes.

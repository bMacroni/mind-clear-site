---
category: Building Blocks
---
The official "Get it on Google Play" badge, linking to the live Mind Clear listing.

This is the only store badge that exists. Mind Clear is Android-only at launch — never place an App Store badge beside it, and never rebuild, recolor, or add text to the artwork (Google Play badge guidelines require it unaltered).

```tsx
<GooglePlayButton height={56} />
```

`height` sets the rendered badge height in px; width scales to preserve the ratio. `className` is appended to the anchor for layout only.

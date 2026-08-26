---
category: Notebook
---
The surface notebook figures are drawn on: a whiteboard with a sheen, ghosting from whatever was wiped off last, and a marker tray.

Deliberately not the Golden Thread palette. A figure is a sketch on a board, not part of the page, and that contrast is the point. Do not "fix" the white surface to cream.

```tsx
<Whiteboard>
  <div className="p-5">…</div>
</Whiteboard>
```

`Whiteboard` supplies no padding, so give the content its own. `className` is for width or margin on the board itself.

**Marker colors** come from the `MARKER` export: `black`, `blue`, `red`, `green`, `orange`. They are slightly desaturated, the way real dry-erase ink dries. Use them directly rather than Tailwind color utilities, since nothing on the board is Golden Thread.

**Handwriting** is `font-hand` (Caveat). Every word on a board is handwritten, including labels.

**Marks**, all exported alongside:

| Mark | Use |
|---|---|
| `Struck` | A word crossed out, with an optional correction squeezed in above it |
| `Circled` | A word ringed by someone who kept coming back to it |
| `Scratch` | A rough line on its own, for underlines |
| `CircleMark` | A bare ellipse, for ringing something that is not a word |
| `ArrowMark` | An arrow, pointing right; rotate it for other directions |
| `Tick` | A drawn check |
| `BoxMark` | A box whose sides are never quite square |

`Struck` and `Circled` wrap their text in an inline-block, which is what gives the stroke the width of the word rather than of some positioned ancestor. That detail is easy to lose and the stroke runs off the word when it goes.

Three worked examples live in `components/notebook/`: `BrainDumpFigure`, `StreakFigure`, and `TaskFormFigure`. They are specific to their entries, so read them for the idiom rather than reusing them.

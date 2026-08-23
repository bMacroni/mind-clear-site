# design-sync notes — mind-clear-site

Repo-specific gotchas for future `/design-sync` runs. Read before re-syncing.

## This repo is not a design-system package

It's a Next.js marketing site: no Storybook, no `dist/`, no package entry. The
converter runs in `package` shape against a **hand-written entry**,
`.design-sync/entry.tsx`, passed via `--entry`. That file exists only for the
sync — the site never imports it.

Why an explicit entry instead of the converter's synth-entry fallback: the ten
marketing sections are `export default`, and synth-entry emits `export * from`,
which does not re-export defaults. Every section would have been missing from
the bundle.

`entry.tsx` also defines **`MindClearPage`**, the `.mc-page` shell that
`app/page.tsx` wraps everything in. It's wired as `cfg.provider`. Without it,
sections lose `--spine-x` / `--content-pad` and their text collides with the
ghost numeral. This was the single biggest fidelity fix of the first sync.

## Build order matters — CSS first, and AFTER previews exist

```bash
node .design-sync/build-css.mjs                      # 1. compile Tailwind
node .ds-sync/resync.mjs --config .design-sync/config.json \
  --node-modules ./node_modules --out ./ds-bundle \
  --entry ./.design-sync/entry.tsx                   # 2. build + validate + capture
```

`build-css.mjs` concatenates `.design-sync/css-head.css` + `app/globals.css` and
runs Tailwind over `.design-sync/tailwind.config.js`, whose content globs
include `.design-sync/previews/**`. **If you author or edit a preview, re-run
`build-css.mjs` before rebuilding** — otherwise arbitrary utility classes used
only in previews (`bg-[#D4AF37]`, `border-[#DEDCD2]`) are never generated and
those cells render unstyled. This bit us once: the gold Badge rendered with no
fill.

It invokes `node_modules/tailwindcss/lib/cli.js` directly rather than `npx` —
spawning the `.cmd` shim fails with `EINVAL` on Windows under Node >= 22.

## Environment

- Worktrees don't share `node_modules`; run `npm ci` in the worktree first.
- Playwright: the machine's cached chromium is build **1217**, which is pinned by
  **playwright 1.59.0**. `npm i playwright@1.59.0` in `.ds-sync/` — newer
  releases want 1234 and fail with "Executable doesn't exist". No download needed.

## Shims and assets

- `next/link` is aliased to `.design-sync/shims/next-link.tsx` (a plain anchor)
  through `.design-sync/tsconfig.json` `paths`. Only `Footer` imports it. That
  tsconfig also carries the `@/*` alias so `@/lib/utils` resolves under esbuild.
- `GooglePlayButton` points at `/badges/google-play-badge.svg`, a Next public
  path that doesn't exist outside the dev server. `build-css.mjs` appends an
  `img[src="..."] { content: url(data:...) }` rule inlining the official badge
  artwork unaltered, so it renders wherever the stylesheet loads. If the badge
  file changes, the CSS rebuild picks it up automatically.

## The Tailwind theme (fixed 2026-08-23)

`tailwind.config.js` originally carried the abandoned dark palette (`background:
#121212`, `primary: #FFD700`, `accent: #8f00ff`), which made the four shadcn
primitives render dark on the cream page. **Brian asked for it to be fixed**, so
the config now maps every semantic slot onto Golden Thread and adds named
families: `cream`/`cream-warm`, `ink`/`-muted`/`-soft`/`-faint`,
`gold`/`-deep`/`-light`/`-dark`, and `hairline`.

Scope of that change, verified before shipping: the theme tokens are referenced
ONLY by `components/ui/*` and two lines of `app/globals.css` (`* { @apply
border-border }` and `body { @apply bg-background text-foreground }`). No
marketing component or page used them. There are no `dark:` utilities and the
`dark` class is never applied, so the `.dark` block was dead and was removed
along with the now-unreferenced shadcn HSL color vars. `--radius` is still used
by `borderRadius` and was kept.

Live visual changes: the `body` background went from #121212 to cream (only ever
visible in overscroll, since every page sets its own background), and the
`variant=outline` button on the three legal pages went from a black fill to
cream. Verified against a production build at computed-style level.

Prefer the named families in new markup — `bg-cream-warm`, `text-ink-muted`,
`border-hairline`, `text-gold-deep` — over raw hex.

Open question worth a designer’s eye: `Input` uses shadcn’s `bg-background`, so
a field is cream on a cream page, separated only by its hairline border. That
suits the low-decoration philosophy but is worth revisiting if real forms get
built. Changing it means overriding `bg-background` in `components/ui/input.tsx`.

## Tokens and fonts

- No `tokens/` directory: `copyTokens` only reads from a node_modules package,
  and these tokens are local. They ship inside `_ds_bundle.css` instead (defined
  at the top of `.design-sync/css-head.css`), which is in `styles.css`'s import
  closure, so designs do receive them.
- Fonts (Outfit, Fraunces) load from Google Fonts via `@import` rather than
  shipped `@font-face`. `[FONT_REMOTE]` on every validate is expected.

## Known render warns

- `[FONT_REMOTE] "Outfit", "Fraunces"` — expected, see above.
- `tokens: 95 defined, 29 referenced (1 missing, below threshold)` — expected.

## Grouping

Groups come from the source directory, not the `category:` frontmatter in
`.design-sync/docs/` — that's only a fallback. So `components/marketing/*` →
`marketing` (13) and `components/ui/*` → `primitives` (4, via frontmatter, since
`ui` is a generic dir name). The finer "Page Sections" / "Building Blocks" split
in the docs' frontmatter is not reflected in the group labels. To get it, the
source files would have to move.

## Re-sync risks

- **`.design-sync/docs/*.md` are hand-written and describe live copy.** If a
  marketing section's copy changes, its doc can silently go stale. They're the
  design agent's usage reference, so re-read them against the components on any
  sync that follows a copy change.
- **`conventions.md` enumerates real class and token names.** Re-validate them
  against the fresh build every sync (grep the `mc-*` classes and `--mc-*`
  variables against `ds-bundle/_ds_bundle.css`, component names against
  `ds-bundle/components/*/`). Never rewrite the file wholesale — it's
  human-editable.
- **The Tailwind palette is now the source of truth for the primitives.** Their
  docs, previews, and the color table in `conventions.md` all enumerate it. If
  `tailwind.config.js` changes again, update all three with it.
- **`entry.tsx` is a manual export list.** New components in `components/` will
  NOT appear until they're added there *and* to `cfg.componentSrcMap`.
- The 10 page sections take no props and contain fixed copy. They are brand
  blocks, not configurable components — the design agent cannot vary them.
- Hover, focus, and scroll-driven states aren't captured; previews are static.

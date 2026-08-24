## What this design system is

The Mind Clear **marketing website** (mind-clear.com) — the "Golden Thread" system. It is not the Mind Clear mobile app's design system; do not mix the two.

Mind Clear is an AI planning app for people with ADHD, anxiety, and depression. The visual language is deliberately quiet: cream paper, near-black ink, one gold thread running down the page, and almost no other decoration. Read `guidelines/docs/brand-voice.md` before writing any user-facing copy — the copy rules are strict (never position Mind Clear as a general productivity tool, never lead with streaks, never use urgency or shame framing, never mention the retired names "MindGarden" or "Foci").

## Wrapping — required

Every component must render inside `MindClearPage`.

`.mc-page` is where the layout custom properties live (`--spine-x`, `--content-pad`, `--sect-pt`, `--sect-pb`) along with the cream background and base type. Sections rendered outside it lose their left indent and collide with their own ghost numeral — they still render, so nothing errors; the layout is just silently wrong.

```jsx
const { MindClearPage, Hero, ProblemHook, BrainDump, DownloadCTA, Footer } = window.MindClear;

<MindClearPage>
  <Hero />
  <ProblemHook />
  <BrainDump />
  <DownloadCTA />
  <Footer />
</MindClearPage>
```

Page sections are designed to stack in narrative order and share one continuous gold spine. `Hero` goes first, `Footer` last.

## The color vocabulary

Tailwind utilities carry the palette. Use these names — do not invent hex values:

| Family | Utilities | Value | Use |
|---|---|---|---|
| Cream | `bg-cream` | `#E8E8E2` | page background |
| | `bg-cream-warm` | `#F5F1E1` | cards, raised panels |
| Ink | `text-ink` | `#111111` | headlines, primary text |
| | `text-ink-muted` | `#444444` | body copy |
| | `text-ink-soft` | `#6B6B6B` | tertiary text |
| | `text-ink-faint` | `#888888` | captions, metadata |
| Gold | `bg-gold` / `text-gold` | `#D4AF37` | the thread, nodes, focus states |
| | `text-gold-deep` | `#6B5A20` | gold used as *text* (eyebrows, labels) |
| | `text-gold-light` | `#E6CF8E` | gold at low emphasis |
| | `text-gold-dark` | `#2A2A1A` | text on gold fills |
| Line | `border-hairline` | `#DEDCD2` | borders, rules |

The shadcn semantic slots are mapped onto the same palette, so the `Primitives` components are correct on a cream page with **no overrides**: `bg-background` is cream, `bg-card` / `bg-popover` / `bg-muted` / `bg-secondary` / `bg-accent` are warm cream, `bg-primary` is ink, `border-border` and `border-input` are hairline, `ring` is gold. `text-foreground` is ink. Either vocabulary works; the named families above read more clearly.

The same values are also on `:root` as `--mc-cream`, `--mc-cream-warm`, `--mc-hairline`, `--mc-ink`, `--mc-ink-muted`, `--mc-ink-soft`, `--mc-ink-faint`, `--mc-gold`, `--mc-gold-deep`, `--mc-gold-light`, `--mc-gold-dark` — use those only for inline `style` where a utility won't do.

## Type

Two families, both on `:root`: `--font-sans` (Outfit) and `--font-serif` (Fraunces), exposed as `font-sans` and `font-serif`.

- Headlines and pull-quotes are **Fraunces at `font-light`**, usually with one italic phrase for emphasis: `<h2 className="font-serif text-5xl font-light">One task. <em>That's all.</em></h2>`
- Body text is Outfit — the default, no class needed.
- Section eyebrows are Outfit, `text-xs uppercase tracking-[0.18em] text-gold-deep`.

## The `mc-*` structural classes

The page skeleton, defined in the stylesheet rather than Tailwind:

| Class | Role |
|---|---|
| `mc-page` | the page shell; defines every layout variable |
| `mc-spine` | the vertical gold thread down a section |
| `mc-spine-leadin` | the thread fading in (used at the bottom of `Hero`) |
| `mc-node` | the small gold circle marking a section start |
| `mc-content` | the content block, indented right of the spine |
| `mc-ghost` | the oversized translucent numeral behind a section |
| `mc-grain` | a fixed, full-viewport film-grain overlay; add once per page, last child |

Prefer composing `ThreadSection` over hand-assembling `mc-spine` / `mc-node` / `mc-ghost` / `mc-content` — it wires all four correctly.

## The Notebook group

`Notebook` is the site's writing section (`/notebook`). Unlike the marketing sections, these components take real props and render whatever content you hand them.

| Component | Role |
|---|---|
| `NotebookShell` | the listing shell: spine, node, ghost character, content column. The notebook's answer to `ThreadSection`, lettered rather than numbered |
| `TopicChips` | the topic filter row that sits above a listing |
| `EntryRow` | one entry in a list: date column, title, excerpt, hairline rule on top |
| `EntryHeader` | the masthead of a single entry: number, topic eyebrow, title, date and reading time |
| `Prose` | the rendered body of an entry |

A listing is `NotebookShell` wrapping `TopicChips` and a stack of `EntryRow`. A single entry does not use `NotebookShell`: it hand-assembles `mc-spine`, `mc-node`, and `mc-content` around `EntryHeader` and `Prose`, because `EntryHeader` renders its own `mc-ghost` and needs a positioned parent to sit in.

`EntryRow` and `EntryHeader` both take one `entry` object. Its shape is in their `.prompt.md`; the fields that show on screen are `title`, `date`, `excerpt`, `number`, `topics`, and `readingMinutes`.

### `mc-prose`

`Prose` renders its HTML inside `.mc-prose`, the one scope in this system that styles bare tags rather than classes. It has to: the HTML comes out of a markdown renderer, so there is nowhere to hang a `className`. Inside that scope `h2` and `h3` are Fraunces, `blockquote` gets a gold left rail and turns serif italic, `li::marker` is gold, `a` is `--mc-gold-deep` with an offset underline, `code` sits on warm cream inside a hairline border, and the block is capped at a `34rem` measure. Nothing else on the page is affected.

`Prose` inserts its `html` without sanitizing it. That is safe only because the HTML is build-time output from markdown in the repo. Never route anything user-submitted or fetched at runtime through it.

## Where the truth lives

- `styles.css` and what it imports (`_ds_bundle.css`) — every real class and variable.
- `components/<group>/<Name>/<Name>.prompt.md` — per-component usage, props, and gotchas. Read the component's file before using it; several carry constraints that matter (`GooglePlayButton` must stay unaltered per Google's badge guidelines; Mind Clear is Android-only, so never add an App Store badge).
- `guidelines/docs/brand-voice.md` and `guidelines/docs/marketing-playbook.md` — the copy rules.

## A typical build

```jsx
const { MindClearPage, ThreadSection, TaskCardMockup, GooglePlayButton } = window.MindClear;

<MindClearPage>
  <ThreadSection number="03" label="Today's focus" ariaLabel="Today's focus">
    <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6 text-ink">
      One task. Right now. <em>That's all.</em>
    </h2>
    <p className="text-lg max-w-md mb-8 text-ink-muted">
      Mind Clear picks one thing for you to focus on. Not a list — one task.
    </p>
    <div className="flex flex-col gap-3" style={{ maxWidth: 360 }}>
      <TaskCardMockup title="Draft the Q3 planning deck" meta="Due today" isFocus />
      <TaskCardMockup title="Call the dentist to reschedule" meta="Tomorrow" />
    </div>
    <GooglePlayButton height={56} />
  </ThreadSection>
  <div className="mc-grain" aria-hidden="true" />
</MindClearPage>
```

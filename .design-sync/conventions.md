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

## The styling idiom

Three layers, in this order of preference:

**1. `mc-*` structural classes** — the page skeleton. Defined in the stylesheet, not Tailwind:

| Class | Role |
|---|---|
| `mc-page` | the page shell; defines every layout variable below |
| `mc-spine` | the vertical gold thread down a section |
| `mc-spine-leadin` | the thread fading in (used at the bottom of `Hero`) |
| `mc-node` | the small gold circle marking a section start |
| `mc-content` | the content block, indented right of the spine |
| `mc-ghost` | the oversized translucent numeral behind a section |
| `mc-grain` | a fixed, full-viewport film-grain overlay; add once per page, last child |

Prefer composing `ThreadSection` over hand-assembling `mc-spine` / `mc-node` / `mc-ghost` / `mc-content` — it wires all four correctly.

**2. Tailwind utilities** for layout and type — `flex`, `gap-*`, `px-*`, `max-w-*`, `text-4xl`, `tracking-[0.18em]`, `italic`, `font-light`.

**3. Explicit color, via CSS variables or hex.** Colors are *not* taken from the Tailwind theme (see the warning below). The site sets them inline:

```jsx
<h2 className="text-4xl font-light" style={{ fontFamily: "var(--font-serif)", color: "#111111" }}>
```

Token variables available on `:root`:

| Variable | Value | Use |
|---|---|---|
| `--font-sans` | Outfit | all body text, labels, UI |
| `--font-serif` | Fraunces | every headline and pull-quote; italic for emphasis |
| `--mc-cream` | `#E8E8E2` | page background |
| `--mc-cream-warm` | `#F5F1E1` | cards, raised panels |
| `--mc-hairline` | `#DEDCD2` | borders, rules |
| `--mc-ink` | `#111111` | headlines, primary text |
| `--mc-ink-muted` | `#444444` | body copy |
| `--mc-ink-soft` | `#6B6B6B` | tertiary text |
| `--mc-ink-faint` | `#888888` | captions, metadata |
| `--mc-gold` | `#D4AF37` | the thread, nodes, focus states |
| `--mc-gold-deep` | `#6B5A20` | gold used as *text* (eyebrows, labels) |
| `--mc-gold-light` | `#E6CF8E` | gold at low emphasis |
| `--mc-gold-dark` | `#2A2A1A` | text on gold fills |

Typography rule: headlines are Fraunces at `font-light`, often with one italic phrase for emphasis. Section eyebrows are Outfit, `text-xs`, uppercase, `tracking-[0.18em]`, in `--mc-gold-deep`.

## Warning — the Tailwind color theme is retired

`bg-background`, `bg-card`, `bg-primary`, `text-foreground`, `bg-secondary`, `bg-accent` and friends still resolve to the site's **abandoned dark theme** (`#121212` charcoal, `#FFD700` electric gold, `#8f00ff` violet). They are not Golden Thread colors.

Never style with those utilities. Use the variables and hex values above. This is why the four `Primitives` components (`Button`, `Card`, `Badge`, `Input`) render dark by default — their cards show both the raw and the corrected treatment, and their `.prompt.md` files give the override pattern for each. `Button` is the only one the live site uses.

## Where the truth lives

- `styles.css` and what it imports (`_ds_bundle.css`) — every real class and variable.
- `components/<group>/<Name>/<Name>.prompt.md` — per-component usage, props, and gotchas. Read the component's file before using it; several carry constraints that matter (`GooglePlayButton` must stay unaltered per Google's badge guidelines; Mind Clear is Android-only, so never add an App Store badge).
- `guidelines/docs/brand-voice.md` and `guidelines/docs/marketing-playbook.md` — the copy rules.

## A typical build

```jsx
const { MindClearPage, ThreadSection, TaskCardMockup, GooglePlayButton } = window.MindClear;

<MindClearPage>
  <ThreadSection number="03" label="Today's focus" ariaLabel="Today's focus">
    <h2
      className="text-4xl md:text-5xl font-light leading-tight mb-6"
      style={{ fontFamily: "var(--font-serif)", color: "var(--mc-ink)" }}
    >
      One task. Right now. <em>That's all.</em>
    </h2>
    <p className="text-lg max-w-md mb-8" style={{ color: "var(--mc-ink-muted)" }}>
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

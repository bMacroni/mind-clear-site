# Mind Clear Marketing Page — All-Cream "Golden Thread" Redesign

**Date:** 2026-06-10
**Route:** `app/case-studies/mind-clear/page.tsx`
**Supersedes:** the alternating dark/cream visual system in `2026-06-09-mind-clear-marketing-page-design.md`. Section order, copy, and content are unchanged — this is a visual-language replacement only.

---

## Why

Brian reviewed the shipped page and rejected the dark/cream alternation. New direction: **all-cream, bold, genuinely distinctive** — keep the existing design DNA (gold, charcoal ink, light type, CSS task-card mockups) but the page must not read like a template anyone else could have shipped.

## The Concept — "The Golden Thread"

The 4px gold rail on every Mind Clear task card becomes the page itself. A single 2px gold line (the **spine**) starts beneath the hero headline and runs the entire scroll. Each section is a **node** on the spine — a small gold circle where the section begins. The spine terminates at the Download CTA in one solid gold dot: *one step at a time*, literalized.

Narrative arc baked into the layout:

- **Above the thread (hero):** faint, slightly rotated italic thought-fragments scattered in the margins — the swirling head. Static, low-contrast (≤ 12% ink opacity), `aria-hidden`, reduced on mobile.
- **Along the thread (sections 2–6):** everything ordered. Numbered editorial sections (`№ 01 — The Problem`) hang off the spine. Pull quotes and oversized numerals deliberately cross the line — the only grid-breaking allowed.
- **End of the thread (CTA):** the line stops at a filled gold dot above "Ready to clear your head?"

On mobile the spine sits at the far-left edge with content indented — the whole page literally becomes one giant Mind Clear task card.

## Visual System

| Token | Value |
|---|---|
| Canvas (entire page) | `#E8E8E2` |
| Card fill | `#F5F1E1` |
| Ink primary | `#111111` |
| Ink secondary | `#444444` |
| Muted / dim | `#888888` / `#6B6B6B` |
| Gold | `#D4AF37` |
| Gold dim rail | `#E6CF8E` |
| Gold dark (small text on cream) | `#6B5A20` |
| Dark chip (pills) | `#2A2A1A` bg, `#E6CF8E` text |
| Hairline (cards) | `#DEDCD2` |
| Rule lines | `rgba(17,17,17,0.14)` |
| Success check | `#10B981` |

**Typography:**
- **Fraunces** (`next/font/google`, weights 300/400 + italics) — all headlines and pull quotes. Hero headline at `clamp(3rem, 9vw, 7.5rem)`. One word per headline may be set in italic for emphasis.
- **Outfit** (already used on the main site) — body copy, eyebrows, captions, and all task-card mockup UI (the app is sans; mockups must read as the app).
- No bold anywhere. Hierarchy from size, italic, color, and casing. Roboto is retired from this page.

**Texture:** one full-page fixed SVG-noise grain overlay at ~3% opacity. No other decoration.

**Motion:** CSS-only staggered fade-up on hero load (`animation-delay`), wrapped in `@media (prefers-reduced-motion: no-preference)`. Nothing scroll-triggered.

**Carried-over rules (unchanged):** gold fills always carry charcoal `#111111` text; no shame language or red pills ("7 days waiting"); no emojis — Lucide stroke icons; warm cream, never pure white; flat cards, no shadows.

## Sections (copy verbatim from the shipped page)

1. **Hero** — full viewport. Scattered thought-fragments in margins; eyebrow `FOR ADHD BRAINS` in gold small-caps; Fraunces headline "Clear your head. / One step at a time."; sub-line; gold Play button; caption. Spine begins below and the first node sits at the fold.
2. **№ 01 — The Problem** — pull quote in Fraunces italic at display size, crossing the spine. Body in Outfit.
3. **№ 02 — Brain Dump** — copy left of spine on desktop, ivory card-stack (existing `TaskCardMockup` × 4 + "4 things, sorted.") right. Stacks on mobile.
4. **№ 03 — Today's Focus** — copy + single focus card with the three Lucide action icons.
5. **№ 04 — When You're Stuck** — step list now on an ivory `#F5F1E1` container (was `#2A2A2A`); first step checked green with strikethrough; hint "start with just the first one".
6. **№ 05 — Missed a Deadline?** — two cards + `ArrowDown`, "7 days waiting" dark chip.
7. **Download CTA** — spine terminates in a solid gold dot; Fraunces headline "Ready to clear your head?"; Play button; platform note; pricing transparency line in `#6B5A20`.

## Also In Scope

- **Per-page `metadata` export** — title "Mind Clear — Clear your head. One step at a time." with on-brand description. Fixes the page inheriting the deprecated "Mind Clear Studio" layout title (flagged in verification on 2026-06-10).

## Not In Scope

- Copy changes (all copy is the already-approved text)
- Any other route, nav, or footer
- Framer-motion or scroll-triggered animation
- `GooglePlayButton` href (placeholder `#` until Play Store URL exists)

## Review Gates

- This page's visuals changed but copy did not; per `.claude/CLAUDE.md` the redesign still lands on the conversion page, so it merges to `main` (→ Vercel deploy) only after Brian's sign-off. Built on branch `redesign/all-cream-golden-thread`.
- Self-review loop required before presenting: full-page screenshots at 1280px and 375px; verdict must answer "does this look like any other website?" — if yes, push further.

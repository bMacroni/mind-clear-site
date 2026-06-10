# Mind Clear App Marketing Page — Design Spec

**Date:** 2026-06-09  
**Route:** `app/case-studies/mind-clear/page.tsx`  
**Goal:** Replace the existing portfolio case study with a direct-to-consumer app marketing page for Mind Clear. Primary CTA is Google Play download (open beta launching soon). iOS not yet available.

---

## Context

The existing page at `/case-studies/mind-clear/` is a white-background portfolio piece framed as "EXPERIMENT 001 // CASE STUDY." It does not reflect the brand and does not serve as an effective conversion page. This redesign replaces it entirely.

The design follows the Mind Clear design system: dark-first (`#0D0D0D`), warm cream (`#E8E8E2`/`#F5F1E1`), gold accent (`#D4AF37`), Roboto Light 300, no shame language, no emojis, Lucide icons.

---

## Architecture

Single-scroll page. No sidebar, no nav links beyond a minimal back link. Five sections alternating dark and warm-cream to create visual rhythm and breathing room. The route stays at `/case-studies/mind-clear/` — no redirect needed.

Tech: Next.js 14 App Router, React 18, Tailwind CSS. The page uses `"use client"` only if animations require it; otherwise server component. Component visuals (task cards, step list, overdue drip cards) are built in CSS/Tailwind — no screenshots, no phone frames.

**Open item:** The Google Play store URL needs to be supplied before launch. Use `#` as a placeholder during implementation.

---

## Section 1 — Hero

**Background:** `#0D0D0D`  
**Layout:** Full viewport height (`min-h-screen`), flex column, center-aligned vertically and horizontally.

**Content:**
- Eyebrow: `FOR ADHD BRAINS` — all-caps, letter-spaced (`0.06em`), 12px, gold (`#D4AF37`)
- Headline: `"Clear your head. One step at a time."` — Roboto Light 300, 48px (mobile: 36px), white (`#F2F2F2`), line-height 1.2, center-aligned
- Subhead: `"Dump everything on your mind. Mind Clear turns it into a plan."` — 18px, `#A8A8A8`, Roboto Light 300
- Google Play button: gold fill (`#D4AF37`), charcoal text (`#111111`), 8px radius, standard Google Play badge label. Contrast: 7.5:1 (WCAG AA pass). No white text on gold.
- Caption: `Android · Free · 21-day premium trial` — 13px, `#6B6B6B`

No imagery, no phone mockup. Typography carries the section.

---

## Section 2 — The Problem (Emotional Hook)

**Background:** `#E8E8E2` (warm cream)  
**Layout:** Centered single column, max-width 640px, generous vertical padding.

**Content:**
- Eyebrow: `THE PROBLEM` — all-caps, letter-spaced, 12px, `#888888`
- Pull quote: `"You know what you need to do. You just can't start."` — 32px, Roboto Light, `#111111`
- Body: `"For ADHD brains, the gap between knowing and doing isn't laziness — it's cognitive load. Standard task apps make it worse. They add more to manage."` — 16px, `#444444`, line-height 1.5

No imagery. Warm cream background is the first mode shift — creates a visual breath after the dark hero.

---

## Section 3 — Brain Dump (Hero Feature)

**Background:** `#0D0D0D`  
**Layout:** Two-column on desktop (copy left, visual right), single column stacked on mobile. Max-width 1100px.

**Copy column:**
- Eyebrow: `BRAIN DUMP` — all-caps, letter-spaced, 12px, `#6B6B6B`
- Headline: `"Dump everything. Get a plan."` — 28px, white, Roboto Light
- Body: `"Type whatever's swirling in your head — tasks, worries, half-formed ideas. Mind Clear's AI reads it all and turns it into goals, tasks, and routines. In minutes."` — 16px, `#A8A8A8`

**Visual column — CSS task card mockup:**
- Container: `#F5F1E1` (warm ivory), 20px border-radius, padding 16px
- 3–4 task items, each with a 4px left rail:
  - Focus task: bright gold rail (`#D4AF37`), gold-tint fill (`rgba(212,175,55,0.20)`), 1.5px gold border
  - Other tasks: dim gold rail (`#E6CF8E`), plain ivory fill, 1px hairline border
- Focus task has `"Suggested focus"` pill in gold and `"high"` priority pill in `#E6CF8E` text on dark surface (no red)
- Caption below cards: `"5 things, sorted."` — 12px, `#888888`

Built entirely from Tailwind/CSS — no images.

---

## Section 4 — Feature Highlights (3 callouts)

Three alternating panels, centered single column, max-width 720px each, shorter than Section 3.

### 4a — Today's Focus

**Background:** `#E8E8E2` (warm cream)

- Eyebrow: `TODAY'S FOCUS`
- Headline: `"One task. Right now. That's all."` — 24px
- Body: `"Mind Clear picks one thing for you to focus on. Not a list — one task. When you're done, it finds the next one."`
- Visual: Single task card with bright gold left rail, gold-tint background fill, action icon row (check / pencil / trash, Lucide icons, 20px, 40×40 tap targets) in top-right. Rendered in Tailwind on warm cream background.

### 4b — When You're Stuck

**Background:** `#0D0D0D`

- Eyebrow: `WHEN YOU'RE STUCK`
- Headline: `"Can't start? The AI breaks it down."` — 24px, white
- Body: `"Tap 'I'm stuck' on any task. Mind Clear splits it into tiny steps you can actually begin — or reframes it entirely if that's what you need."` — `#A8A8A8`
- Visual: Nested step list — 3 radio-circle steps, first one checked (Lucide `check`, `#10B981`), steps 2–3 unchecked. Container: `#2A2A2A`, 8px radius. Hint text below: `"start with just the first one"` — 12px, `#6B6B6B`.

### 4c — Missed a Deadline?

**Background:** `#E8E8E2` (warm cream)

- Eyebrow: `MISSED A DEADLINE?`
- Headline: `"It doesn't disappear. It just waits."` — 24px
- Body: `"Miss a due date and Mind Clear quietly reschedules it to an open day. No overdue pile. No shame. It's still on the list — just moved to when you can actually do it."`
- Visual: Two task cards stacked with a downward arrow between them. Top card: `"7 days waiting"` pill in warm gold (`#E6CF8E` text, dark surface), dim gold rail. Bottom card: same task with a future date, gold rail. No red anywhere. Pills use the no-shame language from the design system.

---

## Section 5 — Download CTA

**Background:** `#0D0D0D` — mirrors the hero, bookends the page.  
**Layout:** Centered, tight column, max-width 480px.

**Content:**
- Headline: `"Ready to clear your head?"` — 32px, white, Roboto Light
- Subhead: `"Free to download. 21-day premium trial. No payment upfront."` — 16px, `#A8A8A8`
- Google Play button — same treatment as hero: gold fill, charcoal text, 8px radius
- Platform note: `Android only · iOS coming soon` — 13px, `#6B6B6B`
- Pricing transparency: `"Mind Clear is free. Premium unlocks AI features — Brain Dump, goal planning, and the stuck-task helper."` — very small (12px), dim gold (`#6B5A20`)

No footer links, no nav. Just the headline, one button, and honest context.

---

## Design System Rules (apply throughout)

- **Gold + charcoal only on filled gold elements.** Never white text on gold (`#D4AF37`). If white glyph needed, step down to `--gold-dark` `#B8960C`.
- **No shame language.** No "Overdue." No red on time/state pills. Use "N days waiting," "Not yet," "Done."
- **No emojis.** Use Lucide icons (web equivalent of Hugeicons). Stroke style, ~1.5px, 18–24px.
- **No bold.** Only Roboto Light (300) is available. Hierarchy from size, color, and casing.
- **All-caps eyebrows only.** Letter-spaced (`0.06em`), dim (`#888888` or `#6B6B6B`), never bolded.
- **No shadows on cards.** Only the Google Play button gets a subtle shadow if needed. Cards are flat.
- **Warm cream, not pure white.** Background `#E8E8E2`, card fill `#F5F1E1`. Never `#FFFFFF`.
- **No corporate wellness language.** No "optimize," "maximize," "unlock your potential," "game-changer."

---

## What Is NOT in Scope

- Navigation redesign (existing nav / back link unchanged)
- Footer changes
- Phone frame or screenshots
- Animation (framer-motion deferred unless trivial)
- Waitlist form (Google Play is the only CTA)
- Any other page on the site

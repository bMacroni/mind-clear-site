# Mind Clear Website — Redesign Plan

**Date:** 2026-04-28
**Owner:** Brian Cornell
**Status:** Draft v1 — for Brian's review, then wife's review before any implementation

---

## TL;DR

The site today is a beautiful portfolio for "Mind Clear Studio" with the Mind Clear app tucked inside as "Project 001 / Experiment 001." The brief says the site's job is to convert visitors into Mind Clear app installs. Those two things are pulling in opposite directions, and the conversion side is losing.

This plan reframes the site as **brian's corner of the internet** — anchored by three things, in priority order:

1. **The Mind Clear app** (the conversion engine)
2. **Brian's story** (why the app exists, who built it, why it can be trusted)
3. **An ADHD learning notebook** (short, raw, frequent — builds personality and SEO over time)

The "Studio / Lab / Experiment 001" framing is retired. The visual identity moves to match the Mind Clear app: white background, black ink, gold accent. Every page has a clear primary action: **Install on Google Play**, with a secondary **iOS waitlist**.

The plan is broken into four phases. Phase 1 is the foundation — nothing else matters until it's done. Phases 2–4 are the build-out, and each can ship independently.

---

## Audit Findings — What's There Today

### What's working

- **Brand voice doc and marketing playbook** are already excellent. The strategy is in place; the site just hasn't caught up.
- **Founder Story section** is in your real voice. Keep it.
- **ScrollTelling features** (Brain Dump, Prioritization, Calendar View, Routines, Reminders) are written in your voice and on-brand. Keep these too.
- **Waitlist API** at `app/api/waitlist/route.ts` is real, validates emails, dedupes, writes to Google Sheets. It works.
- **Phone screenshots** exist in `/public/screenshots/` and are wired into the `PhoneMockup` component.

### What's broken or off-brand

- **The home page hero says "Mind Clear Studio / Orchestrating Intelligence."** A first-time visitor cannot tell from the hero whether this is a portfolio or an app. There is no headline, no CTA, no screenshot above the fold.
- **The waitlist form in `Footer.tsx` is fake.** It runs a `setTimeout` and shows a fake success message. It never calls `/api/waitlist`. Real signups are being lost right now.
- **There is no Google Play install button anywhere on the site.** The app is live; visitors have no path to install it.
- **The case study page (`/case-studies/mind-clear`) talks about Node.js, OpenAI middleware, and includes a code snippet.** This is content for hiring managers, not for an overwhelmed person looking for help. It also calls the app "Experiment 001" and uses corporate phrasing like "Your Executive Function, Outsourced" — a deprecated tone per `brand-voice.md`.
- **`app/layout.tsx` metadata is "Mind Clear Studio - AI-Powered Solutions for Everyday Life."** That title and description are off-brand and target the wrong keywords. No Open Graph image. No Twitter card. No favicon set. Social shares look like nothing.
- **`Mission.tsx` and `FutureVision.tsx` use deprecated voice** ("Purposeful Experiments," "Invisible Intelligence," "AI Life Planner / Clarity Coach / Habit Builder"). Both were written before the brand voice doc. Mission is on the live page; FutureVision is not.
- **Unused components** (`Hero.tsx`, `ScreenshotGallery.tsx`, `FutureVision.tsx`) sit in the repo with off-brand copy. They should be deleted or rewritten — leaving them around invites accidental reuse of bad copy.
- **The footer's "Navigation" links to one item: "Lab."** There's nothing to navigate to.
- **No SEO content surface.** No blog. No `/about`. No FAQ. No comparison pages. The marketing playbook lays out a content strategy that has nothing to live in yet.
- **Two visual systems collide.** The home page is dark (#121212, purple/gold particles, big animated typography). The case-study page is light (white, serif headings, "BACK TO LAB" mono text). They feel like different sites.

### The ADHD-design lens (per the user's CLAUDE.md guidance)

> "What would make Brian forget to do this, and how does the design prevent that?"

The biggest sustainability risk is the **journal**. If publishing requires a polished design template, a long-form writing session, and a multi-step deploy, it won't happen. The plan makes the bar for a journal entry as low as humanly possible — ideally one markdown file dropped into a folder, no front-end work required per post.

---

## The New Information Architecture

```
mind-clear.com (home)              ← App is the hero. Story is the warmth. Journal is the depth.
├── /about                         ← Long-form founder story + philosophy + what Mind Clear is and isn't
├── /notebook                      ← ADHD learning journal (index)
│   └── /notebook/[slug]           ← Individual entries
├── /faq                           ← Real objections, plain answers (or merged into home page)
├── /privacy   (existing)
├── /terms     (existing)
├── /delete-account   (existing)
└── (retire) /case-studies/mind-clear  ← Folded into the home page
```

**Why no separate "features" page?** The home page already has the `ScrollTelling` features section, and breaking it out reduces the conversion path. One scroll, one page, one decision.

**Why "notebook" instead of "blog"?** Blogs imply weekly cadence and polished writing. Notebook implies "here's what I'm noticing." Lower bar to publish, more honest framing, better fit for ADHD execution.

---

## Page-by-Page Outlines

### Home page (`app/page.tsx`)

The single most important page on the site. Every section has a job. Every section ends with a way to act.

**Section 1 — Hero**
- Above-the-fold headline (per brand voice): **"Clear your head. One step at a time."**
- Sub-line: "Dump everything on your mind. Mind Clear turns it into a plan."
- Primary CTA button: **Get it on Google Play** (with the official Play badge)
- Secondary CTA: Small "iOS coming soon — get notified" link that opens an inline email field
- Visual: phone mockup showing the Brain Dump screen, animated gently
- Visual identity: white background, black text, gold accent on the CTA hover state. Retire the dark hero.

**Section 2 — The "I get it" moment**
- Two or three short lines that name the feeling, not the feature
- Example: "Your head is full. Your to-do list is longer than your day. And you don't know where to start."
- Sets up the rest of the page emotionally before any feature talk

**Section 3 — Brain Dump (the hero feature)**
- One feature, one section, lots of room
- Show the flow: scattered text → structured plan → today's view
- Either a short looping video/GIF or a 3-step image sequence
- Lead with the user problem ("My brain juggles everything and nothing moves") then the resolution

**Section 4 — The other features (the existing `ScrollTelling`)**
- Keep the existing scroll-telling component — it's good. Just reframe it under a clear product header so it reads as "here's what else it does."
- Convert routines/streaks copy carefully so it doesn't lead with streaks (per brand rules).

**Section 5 — Why I built this (founder story, condensed)**
- A tighter version of the existing `FounderStory` component — same voice, fewer paragraphs
- Ends with a link to `/about` for the full story
- Photo of Brian (optional but high-impact for trust)

**Section 6 — Pricing, said plainly**
- "Free to try. Premium $4.99/mo. 21-day free trial — no card required."
- One sentence on what's free vs. premium
- This kills a major objection without making a big deal of it

**Section 7 — FAQ (3–5 entries)**
- "Is this another streak-shame app?" → No, here's why.
- "What about iOS?" → Coming soon, here's the waitlist.
- "What does the AI actually do?" → Creates tasks, breaks down blockers, plans goals. It acts.
- "Will my data be private?" → Yes, here's the link to the privacy policy.
- "How is this different from Todoist / Notion / Goblin.tools?" → Brief, honest, link to a longer comparison if you want one later.

**Section 8 — Final CTA**
- Big Play badge
- Small iOS waitlist field
- That's the page.

**Section 9 — Footer**
- Real navigation: Home, About, Notebook, Privacy, Terms, Delete Account
- Real waitlist form (wired to `/api/waitlist`) with iOS-specific framing
- Brian's email and a link to one or two social channels if you want them

### `/about` page

Long-form version of the founder story. Sections like:

- "Why I built Mind Clear" — the after-Matilda founder story you already wrote, expanded
- "What Mind Clear is — and what it isn't" — pulls from `marketing-playbook.md` section 1
- "Who it's for" — the audience deep dive, said warmly
- A photo, maybe of you with the family if you're comfortable
- A footer CTA back to the app

### `/notebook` page (index)

- Plain reverse-chronological list of entries
- Each entry shows: date, title, one-sentence preview, estimated read time
- Visual style: same minimal black/white/gold as the rest of the site
- No comments, no shares, no analytics flourishes — keep the bar to publish low

### `/notebook/[slug]` (individual entry)

- Just markdown rendered cleanly. Title, date, body, "back to notebook" link
- Bottom of every entry: a small "Built Mind Clear because of stuff like this — get it free" CTA
- Keep entries short. The doc system should reward 200-word notes, not punish them by feeling empty.

**ADHD-design note for the notebook:** The publishing flow is one markdown file in `app/notebook/posts/YYYY-MM-DD-slug.md` with frontmatter for title and date. Next.js builds the index from the folder. No CMS, no admin UI, no separate deploy. You write a file, push to git, Vercel ships it. That's the only way this survives ADHD.

### Retire `/case-studies/mind-clear`

The current case study page is the wrong document. The home page now does this job better. We have two options:

- **Option A (recommended):** Delete the route. If anyone has the URL bookmarked, a 301 to `/` covers it.
- **Option B:** Repurpose the URL as `/about` and rewrite from scratch.

I recommend A.

---

## Phased Plan

### Phase 1 — Foundation (the things that have to happen before anything else)

| # | Task | Why |
|---|---|---|
| 1.1 | **Wire the footer waitlist form to `/api/waitlist`.** Replace the fake `setTimeout`. Add real success/error states. | We're losing real signups right now. Highest-priority bug on the site. |
| 1.2 | **Replace `app/layout.tsx` metadata.** New title: "Mind Clear — AI-powered planning for ADHD brains." Description per brand voice. Add proper Open Graph image, Twitter card, favicon. | Every social share and Google result is currently off-brand. |
| 1.3 | **Build the new home page hero.** Headline + sub-line + Google Play badge + iOS waitlist + phone screenshot. Light theme. | This is the conversion event. Nothing else matters if the hero doesn't work. |
| 1.4 | **Add Google Play badge component** with the official Google Play badge asset, properly licensed and sized. | Standard app site element; missing today. |
| 1.5 | **Switch the home page from dark to light theme** to match the app and the brand identity. | Dark portfolio aesthetic fights the calm-app aesthetic. |
| 1.6 | **Retire "Mind Clear Studio" framing everywhere.** Footer brand, hero animation, copy. | The wordmark is just "Mind Clear." |

**Wife review required for Phase 1?** Yes — for the new hero copy and any pricing/FAQ copy that lands on the home page.

**Done when:** A new visitor lands on `mind-clear.com`, sees what the app is in 5 seconds, sees a working install button, and can sign up for the iOS waitlist.

---

### Phase 2 — Structure (build out the rest of the home page and the about page)

| # | Task | Why |
|---|---|---|
| 2.1 | Replace `Mission.tsx` with the new "I get it" section under the hero. | Current Mission is off-brand and generic. |
| 2.2 | Add the Brain Dump hero-feature section between the I-get-it and the existing scroll-telling features. | Brain Dump is the differentiator; deserves its own moment. |
| 2.3 | Reframe the existing `ScrollTelling` under a new section header so it reads as "here's what else Mind Clear does." Tweak the routines copy so it doesn't lead with streaks. | The component is already good; it just needs context. |
| 2.4 | Tighten `FounderStory` for the home page; add a link to `/about`. | Story stays warm but doesn't dominate the page. |
| 2.5 | Add a Pricing section. One paragraph, plain numbers, mention 21-day trial and no-card. | Removes a major friction point. |
| 2.6 | Add an FAQ section (3–5 questions). | Answers the objections that would otherwise stall a download. |
| 2.7 | Build `/about` page with the long-form founder story, philosophy, audience, link to install. | Gives the story room without crowding the home page. |
| 2.8 | Update the footer with real navigation and proper iOS waitlist messaging. | Footer currently links to "Lab" and not much else. |
| 2.9 | Delete `/case-studies/mind-clear` route. Add 301 redirect to `/`. | Wrong document for our audience. |

**Wife review required for Phase 2?** Yes — every copy block that lands on the home page or `/about`.

**Done when:** The home page tells the whole product story in one scroll. `/about` exists. The site reads as one coherent thing.

---

### Phase 3 — Notebook (the long-tail growth surface)

| # | Task | Why |
|---|---|---|
| 3.1 | Build `/notebook` index route — server-rendered list of markdown files in `app/notebook/posts/`. | The simplest possible CMS. ADHD-friendly publish flow. |
| 3.2 | Build `/notebook/[slug]` route with markdown rendering. | One template, all entries flow through it. |
| 3.3 | Add a styled "About this notebook" intro at the top of `/notebook` explaining what it is. | Sets reader expectations: short, honest, ongoing. |
| 3.4 | Add an "Install Mind Clear" CTA at the bottom of every entry. | Notebook is the discovery surface; needs a quiet conversion path. |
| 3.5 | Write 3 seed entries to launch the notebook (don't launch with zero). | An empty notebook screams abandoned. |
| 3.6 | Add basic SEO per entry: meta title, meta description, OG image. | This is where SEO traffic will come from. |
| 3.7 | Set up an RSS feed for the notebook. | Low-cost, lets the few people who care follow easily. |

**Wife review required for Phase 3?** Once for the design pattern. Individual notebook entries can ship with just Brian's review, per the marketing playbook (standard blog content).

**Done when:** You can write a markdown file, drop it in a folder, push, and have it live within minutes.

---

### Phase 4 — Growth surface (the optional but valuable stuff)

| # | Task | Why |
|---|---|---|
| 4.1 | Add comparison pages — "Mind Clear vs. Todoist," "vs. Notion," "vs. Goblin.tools" — using the table in `marketing-playbook.md`. | Captures high-intent search traffic. |
| 4.2 | Add a real social proof section once you have user quotes (don't fabricate). | The brand voice doc forbids fake testimonials. Earn them first. |
| 4.3 | Set up Plausible or Vercel Analytics. Track install-button click-throughs and waitlist conversions. | You can't improve conversion without measuring it. |
| 4.4 | Add UTM-tagged Play Store links so you can see which page drives installs. | Same reason. |
| 4.5 | A/B test the hero headline — start with the approved one, test one alternative. | Marketing playbook calls for this. |
| 4.6 | Add a "Press / Media kit" page if PR ever picks up. (Don't build until needed.) | Defer until there's demand. |
| 4.7 | When iOS launches, swap the iOS waitlist for an App Store badge. | One-day change once iOS is real. |

**Wife review required for Phase 4?** Comparison pages and any copy on social proof — yes. Analytics setup — no.

---

## Visual Identity Decisions

Per your CLAUDE.md and the answer above:

- **Background:** white (`#FFFFFF`) for primary surfaces, very light gray (`#F9F9F9`) for alternating sections.
- **Text:** primary `#111111`, secondary `#444444`.
- **Accent:** gold `#D4AF37` used sparingly — the install button hover state, the active state on nav, priority indicators inside screenshots. Not as a gradient, not as a glow.
- **Typography:** keep the existing Outfit (sans) + Playfair (serif) pairing. Outfit for UI and body, Playfair for big headlines only.
- **Motion:** dial way down. Framer Motion stays for soft fade-ins on scroll, but no particle fields, no scattered-letter intros, no parallax. The app is calm; the site should match.

The dark `#121212` aesthetic and purple/gold particle effects are retired. They're beautiful, but they're a portfolio aesthetic and they belong on a portfolio.

---

## What This Is Not

To keep scope honest:

- **Not a redesign of the app itself.** Just the marketing site.
- **Not a re-platforming.** Stays on Next.js + Tailwind + Vercel.
- **Not a logo/wordmark redesign.** The Mind Clear wordmark is the wordmark.
- **Not a brand voice rewrite.** The brand voice doc is the source of truth and stays.
- **Not a deep SEO program.** Phases 3 and 4 set up the surfaces; growing organic traffic is its own project.

---

## Success Metrics

What "this worked" looks like, three months after launch:

- **Conversion to Google Play:** every visitor who scrolls past the hero either clicks the install button, signs up for the iOS waitlist, or bounces. We can measure click-through rate from the install button.
- **Waitlist growth:** real signups via the working form, into the existing Google Sheet.
- **Notebook publishing cadence:** one entry every 1–2 weeks. If it's monthly or less, the system isn't working and we need to lower the bar further.
- **Bounce rate** drops on the home page once the hero is doing its job.
- **Brand alignment:** zero appearances of "Mind Clear Studio," "Experiment 001," "Project 001," or any deprecated wellness/AI-jargon phrasing.

---

## What I Need From You Next

1. **Review this plan.** Specifically: does the IA make sense? Does the home page outline match what you'd want a visitor to experience? Are the phases the right size?
2. **Send it to your wife** for marketing review per the playbook.
3. **Decide phase ordering.** I recommend Phase 1 first as a single sprint (probably one focused session), then Phase 2 over a couple of sessions, then Phase 3 as a one-time setup + ongoing writing, then Phase 4 piecemeal as needed.
4. **Tell me when to start building.** I won't touch any code until you give the go-ahead and your wife has signed off on Phase 1 copy.

---

## Open Questions for You

A few things I noticed but didn't resolve in this plan, because they're your call:

1. **Photo of you on `/about` and home page?** Big trust signal but a personal preference. Want me to plan around having one or going text-only?
2. **iOS waitlist messaging.** Right now the footer says "Join the Beta." For the new site I'd say "iOS coming soon — get notified." Sound right, or do you want different framing?
3. **Notebook frequency commitment.** Public commitment ("new entry every other Sunday") or no commitment ("entries when I have one")? The latter is more ADHD-honest but the former might create useful pressure.
4. **Email capture for the notebook?** Optional "get new entries by email" subscription. Adds a list-building tool but adds a maintenance task. Skip for now or include?
5. **Wife's involvement in Phase 1 vs. Phase 2.** Do you want her to review Phase 1 copy as one batch, or one section at a time as we go? The first is faster; the second is more iterative.

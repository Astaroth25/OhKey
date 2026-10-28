---
name: OhKey Digital
description: A single-page, GSAP-driven slide pitch for a small-budget digital agency — oversized word-fill headlines, draggable service cards, a custom cursor.
colors:
  ink-indigo: "#1d194c"
  deep-violet: "#303099"
  royal-violet: "#4233ce"
  electric-violet: "#7f57ff"
  pale-violet: "#a9b2ff"
  lime-spark: "#a3e635"
  lime-glow: "#bef264"
  signal-orange: "#f97316"
  whatsapp-green: "#25d366"
  neutral-canvas-white: "#ffffff"
  neutral-canvas-black: "#000000"
  neutral-ink-900: "#171717"
typography:
  display:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "fluid — rendered as SVG text with textLength=\"100%\", no fixed CSS size"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "normal"
  display-script:
    fontFamily: "'Kaushan Script', cursive"
    fontSize: "fluid — same SVG textLength technique as display"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "normal"
  body:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 2.5vw, 1.25rem)"
    fontWeight: 400
    lineHeight: "normal"
    letterSpacing: "normal"
  label:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(0.5rem, 2.3vw, 0.875rem)"
    fontWeight: 700
    lineHeight: "normal"
    letterSpacing: "wide"
rounded:
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  full: "9999px"
components:
  button-primary:
    backgroundColor: "{colors.deep-violet}"
    textColor: "{colors.neutral-canvas-white}"
    rounded: "{rounded.full}"
    padding: "10px 40px"
  button-primary-hover:
    backgroundColor: "{colors.royal-violet}"
    textColor: "{colors.neutral-canvas-white}"
    rounded: "{rounded.full}"
  tag-chip:
    backgroundColor: "{colors.electric-violet}"
    textColor: "{colors.neutral-canvas-white}"
    rounded: "{rounded.full}"
    padding: "6px 16px"
  modal-panel:
    backgroundColor: "{colors.neutral-ink-900}"
    textColor: "{colors.neutral-canvas-white}"
    rounded: "{rounded.lg}"
    padding: "24px 32px"
---

# Design System: OhKey Digital

## Overview

**Creative North Star: "The Pitch Deck You Can Touch"**

OhKey's site reads like a confident sales deck that got turned into a tactile toy. Nothing just sits on the page waiting to be read: headlines are built from oversized SVG words that march in from different directions in reading order, the four services are physical cards you drag around a canvas, and a custom three-state cursor replaces the OS pointer the moment you're anywhere near something interactive. The agency's whole pitch — "we're smart, affordable, and we build things that work" — is demonstrated by the interface itself before a single word of copy makes the case.

The mood is playful but credible: toy-like interaction (draggable cards, a grab cursor, a typewriter reveal) sits in service of a genuinely strategic pitch, not instead of one. Color is saturated and confident — a single violet/indigo family carries the whole identity across five lightness steps, with a lime accent reserved for the one or two moments per screen that need to pop, and a one-off orange used only for the "watch us teach" link. Depth comes from soft ambient color blur, not drop shadows; the few shadows that do exist tint to the element's own color rather than falling back to neutral gray — observed as the current pattern here, not yet locked in as a hard rule.

**Key Characteristics:**
- Full-bleed, fixed-viewport "slide deck" architecture: two slides, one GSAP sweep transition, no scroll.
- Headlines are literal SVG shapes (`textLength="100%"`), not CSS type — this is what lets mixed colors and mixed weights read as one confident line.
- Every entrance is choreographed piece-by-piece in reading order, never a generic fade.
- One brand hue family (violet/indigo) carries ~90% of the surface; lime and orange are rationed accents, not alternate identities.
- Depth is ambient (blurred color blobs, backdrop-blur) far more often than it is a drop shadow.

## Colors

A single violet/indigo family does almost all the work; lime is the rationed accent and orange appears exactly once as a distinct, deliberately different call-to-action.

### Primary
- **Deep Violet** (`#303099`): the default action color — primary CTA button, the "IMPULSA" headline word, the footer wordmark text.
- **Royal Violet** (`#4233ce`): primary button hover state; the "Asesoría estratégica" card and "TU" headline word.
- **Electric Violet** (`#7f57ff`): the "Pautaje y contenido" card; the custom cursor's grab-state pill; the brighter stop in both the intro curtain and the hero's ambient glow blobs.
- **Pale Violet** (`#a9b2ff`): slide 1's background wash; the "ESCALAR" and "DISEÑADAS" headline words; the lightest card ("Cursos y formación"), paired with dark text instead of white since it's too light for white to read on.
- **Ink Indigo** (`#1d194c`): the darkest stop — default logo-mark fill on light backgrounds, the deepest gradient stop in the intro curtain and ambient blobs.

### Secondary
- **Lime Spark** (`#a3e635`): the system's one deliberate pop color — the accent bar under the hero title, the cursive "negocio" word, and folded into the primary button's shadow as a second, cooler glow alongside its violet shadow.
- **Lime Glow** (`#bef264`): a lighter lime reserved for a single surface — the "Clases gratuitas" sticky-note card.

### Tertiary
- **Signal Orange** (`#f97316`): used exactly once, for the YouTube link pill — intentionally a different hue from everything else on screen, because that action (watch free content) is a different kind of ask than the primary "talk to us" CTAs.
- **WhatsApp Green** (`#25d366`): used exactly once, for the floating WhatsApp contact bubble — borrowed from WhatsApp's own brand color so the icon reads as "this opens WhatsApp" at a glance, the same reasoning that earns Signal Orange its own exception.

### Neutral
- **Canvas White** (`#ffffff`): slide 1's content background and the default text color on dark/colored surfaces.
- **Canvas Black** (`#000000`): slide 2's background and the transition color every slide fades through mid-sweep.
- **Ink 900** (`#171717`): the info modal's panel background.

### Named Rules
**The One-Hue-Family Rule.** Every surface color on this site is a step of the violet/indigo ramp, lime, orange, WhatsApp green, or a neutral — there is no freely competing brand hue beyond those two rationed, single-use exceptions. When a new element needs color, reach for an existing step before introducing a new one.

**The Tinted-Shadow Pattern.** Where shadows exist, they currently borrow the color of the element casting them (a card's shadow uses that card's own brand shade; the primary CTA's shadow mixes violet with a lime glow) rather than a neutral gray. This is the pattern observed in the code today, not yet a committed rule — a future neutral shadow is not automatically wrong, but a flat gray shadow sitting next to this system's saturated ones will look like an oversight rather than a choice.

## Typography

**Display Font:** the default system sans stack (`ui-sans-serif, system-ui, sans-serif`) — no custom display face is loaded; scale and presence come from the oversized SVG-fill technique, not from a distinctive typeface.
**Script Accent:** "Kaushan Script" (Google Fonts), reserved for exactly one word per headline that needs it.
**Body Font:** the same default system sans stack.

**Character:** the pairing is deliberately plain — weight and scale (font-black, oversized) do the work a display typeface normally would, leaving Kaushan Script as the one moment of visual surprise.

### Hierarchy
- **Display** (weight 900, fluid via SVG `textLength="100%"`, line-height 1): the two slide headlines. Each word is its own SVG, sized and colored independently, so the same headline can mix white, violet, and script-font words in one line.
- **Display Script** (weight 400, same SVG-fill technique, Kaushan Script): the single cursive word "negocio" — layered absolutely over its own row rather than counted in the normal word flow.
- **Body** (weight 400, `clamp(1.125rem, 2.5vw, 1.25rem)`, normal line-height, max-width ~2xl): the one supporting paragraph per slide, revealed character-by-character with a blinking-cursor typewriter effect.
- **Label** (weight 700–900, `clamp(0.5rem, 2.3vw, 0.875rem)`, wide tracking, uppercase): CTA button text, tag chips, the footer line, the "Arrastra las tarjetas" hint pill.

### Named Rules
**The Weight-Over-Face Rule.** Hierarchy is built with font-weight and scale on a single plain sans stack, not with multiple typefaces. The only typeface swap in the whole system is Kaushan Script, and it is reserved for the one cursive accent word — don't reach for it, or any other face, for general emphasis.

## Layout

The whole site is a fixed-viewport "slide deck," not a scrolling page: `body` is `h-dvh w-dvw overflow-hidden`, and each `<section class="slide">` is `fixed inset-0`, stacked and swapped via GSAP rather than laid out in flow. A slide transition moves two nested wrappers (`.slide__outer` / `.slide__inner`, each `overflow-hidden`) in opposite directions by the same amount, which is what turns a pure transform cancellation into a visible sweep that reveals the incoming slide like a window opening.

Headline grids are sized with CSS container queries (`[container-type:inline-size]` / `[container-type:size]`) and `cqw`/`cqh` units instead of fixed breakpoints, so the oversized SVG words stay correctly proportioned at any viewport without JS recalculation. The vertical "DIGITAL" / "DISEÑADAS PARA" column is a textbook case: its width is `9cqw` of the headline's own container, not a guessed pixel value, so it scales with everything else in the line.

Responsive logic is deliberately shallow: almost everything only branches at `sm:` (640px). The one deeper split is the draggable-card layout, which checks `min-width: 1280px` in JS to decide between a free-floating desktop arrangement (`posicionesEscritorio`, each card pinned to its own x/y offset) and a stacked, slightly-rotated mobile fan — not a CSS grid that reflows, but two genuinely different staging choreographies. Fluid sizing elsewhere (type, blur radius) is handled with `clamp()` rather than a stepped scale.

## Elevation & Depth

Mostly flat. Depth comes from two sources that are not drop shadows: large, softly blurred color blobs (`blur-[60px]` to `blur-[90px]`) placed off-canvas behind content for ambient glow, and `backdrop-blur` on the info modal's scrim for a frosted-glass separation from the page behind it. Real `box-shadow` only appears on a handful of interactive elements, and every one of those is tinted to its own element's color rather than neutral gray (see the Tinted-Shadow Pattern above) — current practice, not a locked rule.

### Shadow Vocabulary
- **Primary CTA shadow** (`box-shadow: 0 22px 40px -14px rgba(48,48,153,0.55), 0 8px 18px -8px rgba(163,230,53,0.3)`): a violet shadow layered with a lime glow underneath — used only on the main "Hagamos crecer tu negocio" button.
- **Sticky-note shadow** (`box-shadow: 0 18px 30px -12px rgba(29,25,76,0.45)`): a single ink-indigo shadow under the "Clases gratuitas" note.
- **Service-card shadow** (`box-shadow: 0 1rem 2rem rgb(0 0 0 / 0.35)`): one flat black shadow shared by all four draggable cards regardless of their own color — the exception to the tinted-shadow pattern, used because the cards are photo-filled rather than flat color.
- **Card-tag shadow** (`shadow-lg shadow-{brand-color}/30`): each card's info-tag button casts a soft shadow in its own card's brand color.

## Shapes

Pills are the system's only shape for interactive affordances: the primary CTA, every tag chip, the "Arrastra las tarjetas" hint, and all three custom-cursor rings are fully rounded (`rounded-full`). Containers get larger, softer corners instead — `0.75rem` on the draggable cards, `1rem` on the sticky note, `1.5rem` on the info modal's desktop panel — which collapse to zero radius on the modal when it goes full-screen on mobile, the one place radius is contextual rather than fixed.

The headline system is itself a shape technique, not just typography: every word is drawn as an SVG path with `textLength="100%"`, so the glyph shapes stretch to fill an exact rectangle rather than wrapping at whatever width the font happens to render. The intro curtain reuses the same shape-first instinct at screen scale — two independently-timed wavy SVG masks (10 control points each, randomized per-point delay) that peel away on load, the one recurring "organic edge" in an otherwise geometric system.

## Components

### Buttons
- **Shape:** fully rounded (`rounded-full`, {rounded.full}).
- **Primary:** Deep Violet background, white text, uppercase, bold-to-black weight, generous horizontal padding (`px-10 py-2.5`), the two-tone violet+lime shadow above.
- **Hover / Focus:** background shifts to Royal Violet; the trailing chevron icon nudges right and a soft white glow fades in behind it.
- **Tertiary (YouTube link pill):** Signal Orange background, rotated -8°, placed as a floating accent over the sticky note rather than inline with the other CTAs — visually marked as a different kind of action.

### Chips
- **Style:** fully rounded, background = the parent card's own brand color, white text (dark text only on the palest Pale Violet chip, for contrast), uppercase, bold, widely tracked.
- **State:** static labels, not toggles — each chip names its service category inside the info modal.

### Cards (draggable service cards — signature component)
- **Corner Style:** `0.75rem` ({rounded.sm}).
- **Background:** full-bleed photo with a bottom-to-top black gradient scrim for title legibility.
- **Shadow Strategy:** the one flat black shadow shared by all four cards (see Elevation).
- **Behavior:** physically draggable with inertia (GSAP Draggable), bounded to their container, resting in a slightly rotated stacked fan on mobile and pinned to fixed free-floating positions on desktop. A custom cursor (default dot → hover ring → grab pill) replaces the OS pointer on fine-pointer devices while hovering/dragging. Clicking or tapping opens the info modal via a FLIP morph that grows from the card's exact on-screen rect, not a generic centered fade-in.

### Modal
- **Corner Style:** `1.5rem` on desktop ({rounded.lg}); `0` full-screen on mobile.
- **Background:** Ink 900, white text, backdrop-blurred scrim behind it.
- **Behavior:** opens and closes via the same FLIP morph as the triggering card (grows from / shrinks back to the card's rect), not a generic dialog transition; the CTA area is a sticky bottom bar on mobile and a plain inline block on desktop, using the same markup for both.
- **Close button:** `44×44px` (the WCAG touch-target floor), not the smaller `40×40px` it shipped with first.
- **Focus trap:** opening the modal marks the other 3 draggable cards `inert` (they're visually behind the backdrop but were still reachable by Tab before this); closing removes it from them again before restoring focus to the card that opened it.

### Navigation
- There is no persistent nav bar. A fixed, `pointer-events-none` logo mark sits top-left and a fixed footer line sits bottom-center on every slide; both recolor between dark-on-light and white-on-dark purely from a single `data-slide` attribute set on `<body>` by the slide engine — no per-component slide-awareness needed. The footer line is fully opaque Deep Violet on slide 1 (not a tinted/semi-transparent variant) — at 70% alpha its contrast against the pale-violet background measured 3.06:1, under the 4.5:1 AA floor for normal text.

### WhatsApp bubble
- **Shape:** two nested circles, not one shape. A fixed, fully-rounded 64px green FAB (`rounded-full`) is the actual link/click target; a smaller 48px white pill is a separate child anchored *under* its center (right offset = half the FAB's width, `right-8`/32px) so it visibly emerges from behind the bubble rather than butting up next to it — the fused look. The icon itself sits in its own opaque, full-circle green cap (`inset-0`, `z-10`, above the pill) — the icon glyph alone has transparent gaps between its strokes, so without that opaque backing the white pill shows through those gaps once it slides underneath. The pill's own text uses asymmetric padding to *look* centered despite that: `pl-8` (32px) on the left, `pr-16` (64px) on the right — the right side needs double because the first 32px of it is consumed just clearing the icon cap's boundary (invisible, not breathing room), so only the padding past that point reads as visible space; without the extra 32px the text would butt up against the icon with no gap at all, reading as off-center even though its DOM padding looked symmetric.
- **Background:** at rest it's a plain WhatsApp Green circle (white glyph) — the site's one recognizable "this opens WhatsApp" mark, sized larger than the message pill on purpose. The message pill, when open, is white with dark ink text (`{colors.ink-indigo}`), shadow tinted ink-indigo (same recipe as the sticky-note shadow) rather than neutral gray.
- **Behavior:** every ~14s the white pill (`width` slide from `0` with `overflow: hidden`, right edge anchored under the bubble's center) slides out to the left revealing the full "Contáctanos" in dark text, then narrows back to exactly `0` width the same way it opened. Because it collapses to a true `0` (not just "small"), no sliver of the white pill is ever visible at rest — the resting state is only ever a clean green circle. Hovering or keyboard-focusing the FAB opens the same pill on demand (and closes it on pointer-leave/blur) independently of that timer — the auto-cycle checks an `isActive` flag before each beat and, if the user is already interacting, skips its own open/close for that cycle but still reschedules the next check, so the two triggers never fight each other. Skips the repeating motion entirely under `prefers-reduced-motion: reduce` (hover/focus still open it instantly, duration `0`, since that's a direct response to the user's own action rather than an ambient animation). Shares the header/footer's `data-brand-chrome` group, so it fades out and back in with them whenever the info modal opens/closes, for the same reason: everything in that group sits outside the slide's own stacking context and would otherwise float above a full-screen modal.
- **Implementation note:** the pill's expanded width is measured via `scrollWidth` before it's ever constrained to `0` — measuring `scrollWidth` on an already-zero-width flex container with `overflow:hidden` returns `0` in Chromium (the flex item collapses rather than just clipping), so the one-time `gsap.set(note, { width: 0 })` must run *after* that first read, never via a static `w-0` class in the markup.

### Oversized word-fill headline (signature component)
Each headline word is its own inline `<svg>` with a `viewBox` sized to that word's natural glyph bounds and a `<text textLength="100%" lengthAdjust="spacingAndGlyphs">`, so the word stretches to fill its column exactly regardless of font metrics. This is what allows a single headline to mix colors and weights per word and still read as one deliberate line, and it's why each word can enter the slide from its own direction (left, right, above, scaled-up) in the sentence's reading order rather than all at once.

## Do's and Don'ts

### Do:
- **Do** keep every interactive affordance (buttons, chips, hints, cursor rings) fully rounded — pills are reserved for things you act on, not for containers.
- **Do** build any new oversized headline word with the `textLength="100%"` SVG technique, not plain CSS type, so it stays visually consistent with the existing headlines.
- **Do** drive the fixed header/footer's color from the single `data-slide` body attribute rather than adding per-component slide-detection logic.
- **Do** reach for a large soft color blur (60–90px) behind content when a slide's background needs ambient life, instead of a flat color block or a drop shadow.
- **Do** stay within the one violet/indigo hue family for new brand surfaces; treat lime, orange, and WhatsApp green as rationed, single-use accents, not alternate palettes.
- **Do** tag any new fixed, root-level chrome (outside `#slider`) with `data-brand-chrome` so it automatically joins the header/footer/WhatsApp-bubble fade when the info modal opens — that fade is what lets the modal visually cover the whole screen despite those elements living outside the slide's stacking context.

### Don't:
- **Don't** introduce a neutral gray shadow next to this system's tinted ones without a reason — it will read as an oversight, not a choice, even though the tint pattern isn't a hard rule yet.
- **Don't** load a second body or display typeface; the only deliberate second face is Kaushan Script, reserved for the cursive "negocio" accent.
- **Don't** give the draggable service cards a different shadow per color; all four currently share one flat black shadow regardless of their own hue.
- **Don't** fade a multi-piece headline in all at once or in DOM order — each piece's entrance is choreographed in the sentence's reading order on purpose.
- **Don't** invent testimonials, client names, or results anywhere on the site; the current card photos are explicitly provisional placeholders (see PRODUCT.md's Evidence on Hand).

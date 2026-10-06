---
name: Anthony Chiappone · Portfolio
description: A software engineer's career drawn as one live lighting-control system on a dark console panel.
colors:
  ground: "#111316"
  panel: "#181b1f"
  panel-2: "#1f2328"
  rule: "#2b3037"
  rule-soft: "#22262c"
  ink: "#e7eaee"
  ink-2: "#b4bbc5"
  muted: "#8d96a2"
  hot: "#ff7a1a"
  hot-hover: "#ff8c38"
  hot-ink: "#1a0d03"
  hot-wash: "#2a1a0e"
  net: "#6b97ff"
  dmx: "#f2a516"
  ble: "#b196ff"
  go: "#3ccf74"
typography:
  display:
    fontFamily: "Big Shoulders Stencil Display, Archivo, system-ui, sans-serif"
    fontSize: "clamp(48px, 7vw, 92px)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Big Shoulders Stencil Display, Archivo, system-ui, sans-serif"
    fontSize: "26px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.05em"
  title:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1
  mono:
    fontFamily: "Red Hat Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "12px"
    fontWeight: 500
    letterSpacing: "0.02em"
rounded:
  tag: "4px"
  base: "6px"
  panel: "10px"
spacing:
  s-1: "4px"
  s-2: "8px"
  s-3: "12px"
  s-4: "16px"
  s-5: "24px"
  s-6: "32px"
  s-7: "48px"
  s-8: "72px"
  s-9: "112px"
components:
  button-primary:
    backgroundColor: "{colors.hot}"
    textColor: "{colors.hot-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.base}"
    padding: "13px 18px"
  button-primary-hover:
    backgroundColor: "{colors.hot-hover}"
  button-secondary:
    backgroundColor: "{colors.panel-2}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.base}"
    padding: "13px 18px"
  nav-link:
    textColor: "{colors.ink-2}"
    rounded: "{rounded.base}"
    padding: "8px 12px"
  nav-link-hover:
    backgroundColor: "{colors.panel-2}"
    textColor: "{colors.ink}"
  tag:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.tag}"
    padding: "6px 8px"
  ledger-link:
    textColor: "{colors.hot}"
    rounded: "{rounded.base}"
    padding: "6px 10px"
  flow-node:
    backgroundColor: "{colors.panel-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.base}"
  flow-node-active:
    backgroundColor: "{colors.hot-wash}"
    textColor: "{colors.ink}"
  flow-panel:
    backgroundColor: "{colors.panel-2}"
    textColor: "{colors.ink-2}"
    padding: "24px"
---

# Design System: Anthony Chiappone · Portfolio

## Overview

**Creative North Star: "The Console Panel"**

The site is a dark lighting-control console: a near-black ground ruled by hairlines, with content laid out like a rack of labelled channels rather than a deck of cards. Colour is never decoration. It means something, the way it does on a patch bay: blue is network, amber is DMX, violet is wireless, cyan is cloud access, and hot orange is the one path that is live right now. Everything else stays in a tight cool-grey ramp so the signal colours read instantly.

Density is calm and scannable. Sections are separated by space and single 1px rules, not by boxes; lists are ledgers (rows divided by rules) rather than grids of cards. The only framed object is the signal-flow diagram, which is the instrument the whole page is built around. A stencil display face, the kind stamped on road cases, carries the name and section heads; a plain grotesk does all the reading; mono appears only where a protocol is named.

Motion is functional: pulses travel the lit wires in signal order, and the mobile rail streams along the active link. All of it disappears under reduced motion.

**Key Characteristics:**
- Dark, cool-grey console ground with hairline rules for structure.
- Colour encodes signal type; orange means "live/selected/primary action" and nothing else.
- Stencil display face for the name and section heads only.
- Ledger rows divided by rules instead of cards.
- One framed, lightly lifted instrument (the signal-flow diagram) per page.

## Colors

A restrained cool-neutral console with four semantic signal hues and one hot accent.

### Primary
- **Live Orange** (hot): the lit path. Selected nodes and wires, the primary button, active nav underline, focus rings, text selection, ledger action links, résumé bullet ticks, the current career node. If it is orange, it is live or it is the next thing to press.
- **Lamp Black** (hot-ink): text on Live Orange fills; never used elsewhere.
- **Ember Wash** (hot-wash): the fill behind an active node or active mobile chain row; a dimmed glow of Live Orange on the dark ground.

### Secondary
- **Network Blue** (net): network/Ethernet wires and the "protocols" kind marker.
- **DMX Amber** (dmx): DMX line wires and the "hardware" kind marker.
- **Wireless Violet** (ble): Bluetooth/NFC wires, always drawn dashed.
- **Cloud Cyan** (cloud, #4fd1dc): remote-access links to the cloud, drawn dotted with data always streaming along them; the Cloud node is a pill whose outline breathes in this colour.

### Tertiary
- **Go Green** (go): the "personal project" kind marker only.

### Neutral
- **Console Ground** (ground): page background; also the inset fill of tags.
- **Panel** (panel): the signal-flow instrument body.
- **Raised Panel** (panel-2): diagram nodes, the detail side panel, secondary buttons, nav and icon hover fills.
- **Rule** (rule): every 1px divider, card border and button border.
- **Soft Rule** (rule-soft): the diagram's 20px background grid and mobile chain row dividers.
- **Ink** (ink): headings and primary text.
- **Ink 2** (ink-2): body copy, ledes, nav links at rest.
- **Muted** (muted): dates, meta, wire labels, legend, footer, inactive markers.

### Named Rules
**The Signal Means Something Rule.** Network Blue, DMX Amber and Wireless Violet are assigned by protocol, never by taste. A new wire, rail or marker takes the colour of the signal it carries.

**The One Live Path Rule.** Live Orange marks the single active path, the primary action and focus. Never use it as a section colour, a background wash for content, or a second accent.

## Typography

**Display Font:** Big Shoulders Stencil Display (with Archivo, system-ui)
**Body Font:** Archivo (with system-ui, -apple-system, Segoe UI)
**Label/Mono Font:** Red Hat Mono (with ui-monospace, SF Mono, Menlo)

**Character:** A condensed road-case stencil, set uppercase, against a sturdy, neutral grotesk. The stencil shouts the name; the grotesk does the explaining.

### Hierarchy
- **Display** (900, clamp(48px, 7vw, 92px), 0.9, uppercase): the name in the hero; page titles use the smaller step clamp(44px, 6vw, 72px).
- **Headline** (800, 26px, 1, 0.05em tracking, uppercase): section titles ("Career path", résumé sections).
- **Title** (Archivo 700, 18-22px, 1.2-1.3): ledger row titles (18px), role titles (19px), the detail panel title (22px).
- **Body** (400, 16px, 1.6): running text, capped at 60-75ch. Ledes step up to 17-19px in Ink 2; the hero role line is 600 at clamp(20px, 2.4vw, 26px).
- **Label** (500-600, 13-15px): nav (14px/500), buttons (15px/600), text links (14px/600), tags (12.5px/500), dates and meta (13-14px, Muted, tabular figures).
- **Mono** (500, 10.5-12px, 0.02em): wire labels, legend, and node/chain subtitles that name a protocol. Nothing else.

### Named Rules
**The Stencil Is For Names Rule.** The stencil face appears only on the brand mark, the display name/page titles, and section titles. Never for body, buttons, labels or anything a reader must parse at length.

**The Mono Means Protocol Rule.** Red Hat Mono is reserved for protocol and signal labels (DMX, RDM, BLE, network). Ordinary metadata stays in Archivo.

## Layout

A single centred shell (max 1240px, inline padding clamp(16px, 4vw, 40px)) with a sticky top bar: brand left, nav centred, social icons right, on a 3-column grid. The main column stacks sections with a large gap (72px; 48px below 760px).

Spacing follows a fixed 4px-based scale (s-1 to s-9: 4, 8, 12, 16, 24, 32, 48, 72, 112). Section heads sit on one baseline row (title left, link or note right) with 24px below.

The hero is a two-column grid, text left, actions right, aligned to the bottom; the signal-flow instrument pulls up 32px beneath it. The instrument is a two-column grid: the drawing and a fixed 340px detail panel. Ledger and résumé rows use a fixed label column (15-18rem) beside a fluid body column.

Responsive behaviour:
- **Below 1000px:** the detail panel drops under the diagram; the career path goes to two columns.
- **Below 760px:** the nav wraps to its own row; hero, ledger and role rows stack to one column; the SVG diagram and legend are replaced by a vertical chain on a wire rail. Each rail segment keeps the protocol colour of that link, turns Live Orange along the lit path, and streams under motion.
- **Below 620px:** the horizontal career timeline turns into a vertical one with a left rule.

## Elevation & Depth

The system is flat. Depth comes from tonal steps (Console Ground, Panel, Raised Panel) and 1px rules, not shadows. The single exception is the signal-flow instrument, which sits on a soft ambient lift so it reads as a piece of hardware set onto the page. Light is used as light: the travelling pulse carries a small orange glow, and the active mobile chain marker has a faint orange halo.

### Shadow Vocabulary
- **Instrument lift** (`box-shadow: 0 24px 60px -24px rgba(0,0,0,.6)`): the signal-flow instrument only.
- **Pulse glow** (`filter: drop-shadow(0 0 5px var(--hot))`): travelling signal pulses on lit wires.
- **Active halo** (`box-shadow: 0 0 0 4px rgba(255,122,26,.18)`): the active marker on the mobile chain rail.

### Named Rules
**The Flat Console Rule.** Content surfaces are flat and separated by rules. Shadows belong to the instrument and to emitted light, never to cards, buttons or rows.

## Shapes

Gently squared corners throughout: 6px for buttons, nav hovers, icon buttons, diagram nodes and ledger links; 4px for tags; 10px for the instrument frame only. Borders are always 1px Rule, except the career-path track (2px) and the active node stroke (2px Live Orange). Circular forms are reserved for signal markers: career-path stops, the kind dot in the panel footer, chain rail stops and pulses. The active nav item drops its radius for a flat 2px Live Orange underline.

## Components

### Buttons
Solid and tactile, never pill-shaped.
- **Shape:** gently squared (6px), 1px border, icon + label with 8px gap.
- **Primary:** Live Orange fill and border, Lamp Black text, 15px/600, 13px 18px padding. One per view: the résumé download.
- **Hover / Focus:** primary brightens to hot-hover; secondary border shifts from Rule to Muted. Press nudges down 1px. Focus is a 2px Live Orange outline at 3px offset (global).
- **Secondary:** Raised Panel fill, Ink text, Rule border (GitHub, view actions).

### Chips
- **Style:** tags are small inset plates: Console Ground fill, 1px Rule border, Ink 2 text at 12.5px/500, 4px radius. A larger variant (13px, 8px 10px) is used for the Résumé skills list.
- **State:** static; tags are not interactive.

### Cards / Containers
There are no content cards. The one container is the signal-flow instrument: Panel fill, 1px Rule border, 10px radius, instrument lift, with a Raised Panel detail panel divided by a Rule. Lists are ledgers instead (see below).

### Navigation
Top bar sticky with a 92% ground blur (`backdrop-filter: saturate(140%) blur(8px)`) and a bottom Rule. Brand mark in stencil 900, 22px, uppercase. Nav links 14px/500 in Ink 2; hover gets a Raised Panel fill and Ink; the active route is Ink with a 2px Live Orange inset underline and no radius. Social icons are 36px squares with the same hover. On mobile, nav wraps to a second row, left aligned.

### Signal-Flow Diagram (signature)
The career drawn as one control system in an SVG over a 20px Soft Rule grid. Nodes are 6px-rounded Raised Panel boxes with a 1.5px Rule stroke, name in Archivo 600 13.5px, subtitle in Muted (mono when it is a protocol). Wires are 2.5px round-capped paths in their protocol colour at 45% opacity; wireless is dashed 6/6. Selecting a node (hover, focus, click, Enter/Space) lights its path: wires go Live Orange at 3.5px and full opacity, the node fills Ember Wash with a 2px orange stroke, white pulses travel each lit wire in sequence (1.8s, staggered 0.45s), and the detail panel updates (title, body, tags, and a footer with a coloured kind dot and a Live Orange link). A mono legend sits under the drawing. One node is always pre-selected.

### Ledger Rows
Work items are rows, not cards: a top Rule, then each row is a 3-area grid (title 18px/700 | body in Ink 2 with tags beneath | links), 24px vertical padding, divided by 1px Rules. Links are 14px/600 Live Orange text in a 6px-rounded Rule outline that turns orange on hover. Résumé roles use the same rule-divided pattern with a role head column (title, Muted tabular meta) and bullets marked by an 8x2px Live Orange tick.

### Career Path
A horizontal track (2px Rule top border, four columns) with circular stops: hollow Muted rings for past roles, a filled Live Orange stop for the current one. Dates in Muted tabular figures, role in 17px/600, company in Ink 2.

## Do's and Don'ts

### Do:
- **Do** colour any wire, rail or marker by the signal it carries: Network Blue, DMX Amber, Wireless Violet (dashed).
- **Do** reserve Live Orange for the live path, the single primary action, focus, and current-state markers.
- **Do** separate content with 1px Rule dividers and the 4px-based spacing scale, and present lists as ledger rows.
- **Do** keep every animation (pulses, rail stream) behind `prefers-reduced-motion: no-preference`, with a static lit state that still communicates.
- **Do** use Red Hat Mono only for protocol labels and the stencil face only for names and section titles.
- **Do** draw icons as inline 24px-grid stroke SVGs (1.75 stroke, round caps), plus brand marks filled.

### Don't:
- **Don't** wrap content in cards or card grids; the instrument is the only framed object.
- **Don't** add shadows to buttons, rows or panels; depth is tonal.
- **Don't** introduce a second accent or use a signal colour decoratively.
- **Don't** set body copy, buttons or labels in the stencil face.
- **Don't** use pill shapes; corners stay at 4px, 6px or (instrument only) 10px.

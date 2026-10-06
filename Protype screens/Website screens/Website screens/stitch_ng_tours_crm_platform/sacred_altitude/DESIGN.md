---
name: Sacred Altitude
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#974800'
  on-secondary: '#ffffff'
  secondary-container: '#fd8a35'
  on-secondary-container: '#652e00'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002114'
  on-tertiary-container: '#069669'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#ffdbc7'
  secondary-fixed-dim: '#ffb689'
  on-secondary-fixed: '#311300'
  on-secondary-fixed-variant: '#733500'
  tertiary-fixed: '#85f8c4'
  tertiary-fixed-dim: '#68dba9'
  on-tertiary-fixed: '#002114'
  on-tertiary-fixed-variant: '#005137'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Noto Serif
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Noto Serif
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  headline-md:
    fontFamily: Noto Serif
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
  numeric-data:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-lg: 1.5rem
  margin: 1rem
  margin-md: 1.5rem
  margin-lg: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 2rem
---

## Brand & Style

This design system powers an internal CRM and operations command suite for bespoke, high-ticket spiritual tourism across the Himalayas and sacred Vedic corridors. The brand aesthetic reconciles the reverence of sacred Indian pilgrimages (Char Dham, Kedarnath Heli-services, Kashi-Ayodhya VIP Darshan) with the rigorous precision of modern aviation and luxury concierge software.

The UI avoids generic corporate blue enterprise tropes, leaning instead into an editorial, authoritative, high-density aesthetic reminiscent of boutique Swiss aviation tools intertwined with warm Indian heritage cues. The emotional core communicates absolute dependability, serenity under pressure, and ultra-premium service delivery.

Key aesthetic pillars:
- **Atmospheric Contrast**: Deep Himalayan slate meets warm parchment, copper embers, and snow-crisp canvas planes.
- **Controlled Density**: Tight, readable operational layouts engineered for rapid data entry, real-time slot tracking, and multi-stage VIP pilgrim itineraries.
- **Editorial Reverence**: High-contrast, stately serifs for key headers anchored by clean, legible, high-clarity sans-serif numerals and UI labels.

## Colors

The palette establishes an unmistakable hierarchy rooted in the geography of the high Himalayas and sacred ritual metals:

- **Primary (`#0F172A` - Deep Himalayan Slate)**: Used for primary structural headers, high-emphasis text, key active navigation states, and grounded anchor elements. It delivers deep, non-harsh contrast.
- **Secondary (`#C25E00` - Burnished Copper / Sacred Saffron)**: Represents spiritual resonance and bespoke attention. Applied to primary conversions, pipeline highlights, VIP markers, and active filters. Pair with `#FEF3C7` (Warm Golden Sand) for contextual pill backgrounds.
- **Tertiary (`#059669` - Temple Emerald)**: Exclusively signifies confirmed darshan slots, cleared heli-manifests, verified KYC documents, and paid deposits.
- **Priority Terracotta (`#DC2626` / `#B91C1C`)**: Reserved strictly for high-urgency operational states: weather cancellations, delayed chopper departures, VIP escalations, and expiring permit windows.
- **Neutral Canvas (`#F8FAFC` base slate snow, `#FFFFFF` cards, `#E2E8F0` structural borders, `#64748B` secondary text)**: Provides a pristine, high-legibility workspace with crisp delineations between adjacent booking flows.

## Typography

The typographic strategy pairs the timeless, distinguished gravitas of **Noto Serif** with the pristine mechanical legibility of **Plus Jakarta Sans**. 

- **Noto Serif** is strictly deployed for high-level journey titles, VIP pilgrim profile names, circuit package designations (e.g., "Kedarnath Heli-Yatra Ex-Dehradun"), and major metric anchors.
- **Plus Jakarta Sans** is the operational workhorse across the CRM. Its geometric clarity and open counters ensure swift scanning across high-density data tables, helicopter weight-balancing manifests, payment ledgers, and contact lists.
- Data values, currency figures (INR / USD), date ranges, and PNR codes utilize tabular figures (`font-variant-numeric: tabular-nums`) within Plus Jakarta Sans to prevent horizontal jitter during rapid inventory updates.

## Layout & Spacing

This design system uses a fluid responsive grid balanced with fixed-width side panels designed for internal operations teams working on desktop displays (1440px and 1920px), while retaining full utility for ground ops on tablets and field phones:

- **Desktop Layout**: 12-column layout with a 260px fixed collapsible navigation sidebar, 24px (`space-lg`) gutters, and dynamic 32px canvas margins. Split-pane layouts (list-detail view for booking inquiries) employ an asymmetrical 40/60 distribution.
- **Tablet Layout (768px – 1024px)**: 8 columns, 16px (`gutter`) gutters, with collapsable off-canvas inspection drawers for guest manifest verification.
- **Mobile Layout (<768px)**: 4 columns, 16px margins, single-column stacked cards with bottom-sheet actions for ground-handling updates at helipads and temple gates.
- **Compact Spacing Rhythm**: Padding within dense data grids and table rows defaults to 8px-12px vertical padding (`space-sm` to `space-md`), minimizing unnecessary vertical scrolling during dispatch hours.

## Elevation & Depth

Visual hierarchy relies on structural, tonal layering and low-contrast borders rather than exaggerated drop shadows. The backdrop evokes pristine mountain clarity:

- **Level 0 (Canvas Base)**: `#F8FAFC` (Snow Slate). All views rest on this clean, glare-free matte base.
- **Level 1 (Data Cards & Table Surfaces)**: Pure `#FFFFFF` with a crisp 1px perimeter border of `#E2E8F0`. Shadows are hyper-diffused and warm-tinted: `0 1px 3px rgba(15, 23, 42, 0.04), 0 1px 2px rgba(15, 23, 42, 0.02)`.
- **Level 2 (Active Rows, Dropdowns, Hovered Cards)**: Raised using `0 4px 12px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(194, 94, 0, 0.04)` with a subtle copper warmth.
- **Level 3 (Modals, Heli-manifest Side Sheets, VIP Darshan Allocators)**: Deep Himalayan float using `0 20px 25px -5px rgba(15, 23, 42, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.08)`. Backdrops feature a 4px blur tinted with 40% `#0F172A`.
- **Sacred Accents**: Card headers and priority state panels feature hairline borders (1px) with an interior inset line or delicate geometric corner bracket in burnished copper (`#C25E00` at 20% opacity).

## Shapes

The design system maintains a refined, architectural discipline. A `Soft` corner profile (`roundedness: 1`) is selected across the entire operational workspace.

- **Standard Inputs, Table Rows, and Surface Cards**: Set to 4px (`0.25rem`) corner radius. This gives panels an engineered, precise feel, preserving critical screen real estate in dense operational tables.
- **Modals & Elevated Inspection Sheets**: Standardized at 8px (`0.5rem`) to maintain architectural stability without feeling playful or overly informal.
- **Status Pills, Circuit Tags, and Micro-indicators**: Retain a deliberate full pill profile (`9999px`) to create clear typographic and geometric contrast against the straight, sharp lines of grids and tables.

## Components

### Buttons
- **Primary Action (Book Darshan / Confirm Manifest)**: Solid Deep Himalayan Slate (`#0F172A`) with pure white text, or Sacred Copper (`#C25E00`) with white text for revenue/closing events. Hover triggers a subtle micro-shift to `#9A4B00` with 150ms ease. Height: 36px (compact internal density), 4px border radius.
- **Secondary / Actionable Utility**: Bordered button with 1px `#CBD5E1`, text in `#0F172A`, surface white. Hover turns surface to `#F1F5F9`.
- **Terracotta Priority Action**: Crimson `#DC2626` background, reserved solely for emergencies, slot re-allocations, and VIP weather alerts.

### Status Badges & Chips
- **Verified / Confirmed Badge**: Emerald `#ECFDF5` background, `#047857` text, 1px `#A7F3D0` border, paired with an authentic check icon. Used for KYC complete, payment received, Kedarnath heli-slot locked.
- **VIP Circuit Tag**: Warm sand `#FEF3C7` background, Burnished Copper `#B45309` text, uppercase 11px semi-bold label (e.g., "CHAR DHAM HELI", "VIP KASHI SUITE").
- **Pending / In Review**: Amber `#FFFBEB` background with `#B45309` text.

### Data Tables
- Table headers: `#F1F5F9` background, 11px uppercase tracked labels (`label-sm`), 36px row height.
- Content rows: 44px fixed height, pure `#FFFFFF`, separated by 1px `#E2E8F0` divider. Alternating hover state introduces `#F8FAFC`.
- Integrated passenger weight counter, luggage quota indicators, and instant click-to-dial VIP telephone links embedded directly within cells.

### Form Inputs & Lead Fields
- 36px height with 1px `#CBD5E1` border, 8px horizontal padding, `#0F172A` input text. Focus state employs a 1px border highlight in `#C25E00` along with a 2px copper glow (`rgba(194, 94, 0, 0.15)`). Error states feature `#DC2626` borders.

### Cards & Inquiry Panels
- Clean white foundation with hairline `#E2E8F0` borders. Top border features an optional 2px accent strip: Burnished Copper for VIP High-Value leads, Slate for routine inquiries, Emerald for fully scheduled departures.
- Header contains lead score, yatra package selection, total Pax count, and quick dispatch status.
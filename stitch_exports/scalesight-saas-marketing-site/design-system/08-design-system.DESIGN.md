---
name: ScaleSight Visual Identity
colors:
  surface: '#0a141f'
  surface-dim: '#0a141f'
  surface-bright: '#303a47'
  surface-container-lowest: '#050f1a'
  surface-container-low: '#121c28'
  surface-container: '#17202c'
  surface-container-high: '#212b37'
  surface-container-highest: '#2c3542'
  on-surface: '#d9e3f4'
  on-surface-variant: '#c2c6d8'
  inverse-surface: '#d9e3f4'
  inverse-on-surface: '#27313e'
  outline: '#8c90a1'
  outline-variant: '#424655'
  surface-tint: '#b3c5ff'
  primary: '#b3c5ff'
  on-primary: '#002a76'
  primary-container: '#005ef0'
  on-primary-container: '#e6eaff'
  inverse-primary: '#0054d8'
  secondary: '#87ceff'
  on-secondary: '#00344d'
  secondary-container: '#00b3fc'
  on-secondary-container: '#004260'
  tertiary: '#bdc7db'
  on-tertiary: '#273140'
  tertiary-container: '#606a7b'
  on-tertiary-container: '#e1ebff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#00184a'
  on-primary-fixed-variant: '#003fa5'
  secondary-fixed: '#c8e6ff'
  secondary-fixed-dim: '#87ceff'
  on-secondary-fixed: '#001e2e'
  on-secondary-fixed-variant: '#004c6d'
  tertiary-fixed: '#d9e3f7'
  tertiary-fixed-dim: '#bdc7db'
  on-tertiary-fixed: '#121c2a'
  on-tertiary-fixed-variant: '#3e4757'
  background: '#0a141f'
  on-background: '#d9e3f4'
  surface-variant: '#2c3542'
typography:
  hero-display:
    fontFamily: Geist Sans
    fontSize: 96px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  hero-display-mobile:
    fontFamily: Geist Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist Sans
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Geist Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  eyebrow:
    fontFamily: Geist Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Geist Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  section-desktop: 120px
  section-mobile: 64px
  gutter: 24px
  margin-desktop: 80px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style

The design system is engineered for high-performance decision intelligence. It adopts a **Premium Corporate SaaS** aesthetic, drawing inspiration from industry leaders like Vercel and Linear. The style is characterized by a "Dark Mode First" philosophy, utilizing deep navy neutrals rather than pure blacks to maintain optical depth.

The brand personality is authoritative yet approachable, prioritizing "Product-Led Excellence." Visually, this is achieved through extreme typographic contrast, a disciplined grid, and the surgical use of vibrant blue gradients against a monochromatic base. The emotional response should be one of "Technical Sophistication" and "Unshakeable Trust."

## Colors

The palette is anchored by **#07111F**, a deep "Obsidian Navy" that provides a more premium feel than standard hex-black. 

- **Primary & Secondary Blues:** These are used exclusively for functional signals (links, buttons, active states) and high-impact brand moments. 
- **The Glow Gradient:** A diagonal transition from #005EF0 to #04B4FD is the signature brand element. It should be applied to primary call-to-action backgrounds and used sparingly as a text-fill for hero keywords.
- **Hierarchy of Grays:** Use white for headings, #B7C1D1 for standard body text to reduce eye strain, and #7F8CA3 for metadata or inactive states.

## Typography

The design system exclusively uses **Geist Sans** to project a developer-friendly, precise, and modern image.

- **Hero Typography:** Massive sizing (72-96px) is required for impact. Tighten the letter spacing aggressively as the font size increases to maintain a "locked-in" editorial look.
- **Eyebrows:** Always uppercase with tracked-out letter spacing (0.08em). Apply the Secondary Blue (#04B4FD) to all eyebrows to establish section context immediately.
- **Readability:** Body text should maintain a generous line-height (1.6) to ensure complex data-heavy content remains digestible.

## Layout & Spacing

This design system utilizes a **12-column fluid grid** for desktop, transitioning to a **4-column grid** for mobile devices. 

- **Section Breathing Room:** A strict 120px vertical margin between major landing page sections is required to maintain the "premium" feel and prevent visual clutter.
- **Content Max-Width:** While the grid is fluid, main content containers should be capped at 1280px to ensure line lengths remain readable on ultra-wide monitors.
- **Rhythm:** Use an 8px base unit for all internal component spacing (padding, gaps between icons and text).

## Elevation & Depth

Depth is created through **Tonal Layering** rather than traditional drop shadows. 

1.  **Level 0 (Background):** #07111F.
2.  **Level 1 (Cards/Surfaces):** #0C1727 with a 1px solid border at 8% white opacity.
3.  **Level 2 (Interaction/Featured):** When an element needs to stand out (hover states or "Featured" pricing cards), replace the white border with a 1px "Glow Border" using **rgba(4, 180, 253, 0.15)**.

This approach creates a sophisticated, "illuminated" interface that feels technical and high-end, avoiding the heaviness of blurry shadows in a dark UI.

## Shapes

The shape language is structured and rhythmic. 

- **Containers & Cards:** Use a **12px (0.75rem)** radius. This is the primary radius for all major structural blocks.
- **Actionable Elements:** Buttons, input fields, and tags use a tighter **8px (0.5rem)** radius.
- **Consistency:** Never use fully rounded "pill" shapes for buttons; the 8px radius maintains the "Enterprise" architectural feel.

## Components

- **Buttons:** Primary buttons use the diagonal gradient background with white text. Secondary buttons use a transparent background with the 1px subtle white border. Use 8px corner radius.
- **Cards:** Background #0C1727, 12px radius, 1px border (rgba(255,255,255,0.08)). No shadow.
- **Input Fields:** Darker than the card background or matching the primary background (#07111F). Use the 8px radius. On focus, the border should transition to the Primary Blue (#005EF0).
- **Featured Elements:** For "hot" items or active selections, apply the **1px Blue Glow Border**. 
- **Data Visualizations:** Charts should use the primary and secondary blues for data lines, with a #7F8CA3 grid line color at 10% opacity.
- **Chips/Badges:** Small, 12px font size, 4px radius (sharper than buttons), using a subtle blue tint background (e.g., #005EF0 at 10% opacity) for positive indicators.

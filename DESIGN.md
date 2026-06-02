# Portfolio Design System

This document is the visual and interaction source of truth for the Charles Moore portfolio webapp. Use it before creating or editing UI. The application should feel like a premium editorial project dossier for a full-stack product engineer with deep frontend craft: calm, precise, readable, and built with production discipline.

## 1. Brand Identity

The brand personality is focused, technical, editorial, and quietly confident. Visible portfolio copy should use direct first-person ownership where it feels natural: "I build" and "I owned" read better than detached third-person claims. It should communicate real product systems across interfaces, Node.js tooling, Laravel backend API systems, Nova operational tooling, and production delivery. The emotional tone is composed and trustworthy: a hiring manager, founder, or product lead should want to keep reading because the work feels substantial and easy to evaluate.

The visual philosophy is gray-black editorial software. Use deep graphite backgrounds, layered charcoal surfaces, exact borders, warm off-white text, muted steel copy, and one restrained cool accent. The UI should feel like a well-designed engineering dossier, not a terminal, not a glassy AI dashboard, and not a loud portfolio template.

## 2. Color System

Use a dark-only palette built around neutral contrast. Avoid oversaturated hues and large color washes.

- Background: `#08090b` for the app canvas.
- Background raised: `#0d0f12` for section bands and large surfaces.
- Surface: `#14171b` for cards, dialogs, and dense UI panels.
- Surface soft: `#1b1f25` for hover states and nested controls.
- Border: `#2b3037` for default divisions.
- Border strong: `#3c434d` for active states and high-importance boundaries.
- Primary text: `#f3f1ea`, a warm off-white for headings and important labels.
- Secondary text: `#c7c3ba`, used for readable body copy.
- Muted text: `#8b929d`, used for metadata and secondary labels.
- Accent: `#9fb7c8`, a muted blue-gray for focus rings, links, and selected states.
- Accent strong: `#d6e5ee`, used sparingly on important CTAs.
- Success: `#8fbc8f`; warning: `#d6b36a`; error: `#d98989`.

Contrast strategy: text must meet WCAG AA against its background. Body copy should never be below `text-secondary` on dark surfaces. Muted text is allowed only for labels, metadata, and low-emphasis helper copy. Accent color is not a replacement for text contrast; combine it with borders, underlines, or icon changes for state.

## 3. Typography System

Use a refined sans-serif system stack by default: `InterVariable` if locally available through the browser, then `Inter`, `Avenir Next`, `Segoe UI`, `Helvetica Neue`, `Arial`, `sans-serif`. Avoid monospace as the main brand voice; reserve monospace only for small metadata, years, counts, or technical labels.

Heading scale:

- Display: 64px desktop, 42px mobile, line-height 0.98, weight 700.
- H1: 48px desktop, 36px mobile, line-height 1.04, weight 700.
- H2: 32px desktop, 28px mobile, line-height 1.12, weight 650.
- H3: 22px desktop, 20px mobile, line-height 1.2, weight 650.
- Eyebrow and metadata: 11px to 12px, uppercase, letter spacing 0.
- Body: 16px to 18px, line-height 1.65 for long-form readability.
- Dense body: 14px to 15px, line-height 1.55 for cards and lists.

Density rules: long project descriptions need enough line-height to read comfortably. Compact metadata can be dense, but never let project cards become cramped. Do not use viewport-based font scaling.

## 4. Spacing And Layout

Use an 8px spacing base with deliberate larger jumps: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. Page content should live in a max-width container between 1180px and 1280px with 24px mobile gutters, 32px tablet gutters, and 40px desktop gutters.

Grid philosophy: desktop-first, but never dependent on fixed viewport height. Use two-column editorial composition for hero and featured content, then responsive project grids. Paired proof panels should use matching widths and outer heights on desktop so neither side feels accidental. Mobile stacks into one column with the most important content first.

Cards use 20px to 28px padding on desktop and 16px to 20px on mobile. Border radius should stay between 6px and 10px. Vertical rhythm should separate major sections by 72px to 112px on desktop and 48px to 64px on mobile.

## 5. Component Philosophy

Buttons are rectangular, calm, and tactile. Primary buttons use accent text or accent border on dark surfaces, not bright filled pills. Secondary buttons use neutral borders and soft hover backgrounds. Icon-only buttons need accessible labels.

Inputs should use dark surfaces, 1px borders, visible focus rings, and clear labels. Placeholder text must be lower contrast than entered text. The current portfolio has minimal form needs, but future inputs should follow this rule.

Cards should feel like editorial entries: clear title, role, short narrative, stack tags, and one obvious action. Full-stack projects should make frontend, Laravel backend API, Nova tooling, and operational ownership legible without inflating the claim. Avoid card-in-card layouts. Use image thumbnails as evidence, not decoration.

Tables should be used only for dense comparative data. Use thin row dividers, sticky headers only when necessary, and readable row height. Do not use tables for project cards.

Sidebars should be restrained navigation or summary regions with persistent context. They should not become decorative panels.

Navigation should be simple and anchored to page sections: Work, Skills, Contact. It should feel like a document index, not an app launcher.

Dropdowns should use Radix primitives when needed, with dark surfaces, 8px radius, thin borders, and clear hover/focus states.

Modals use Radix Dialog. They should include a clear title, description, close control, focus trap, escape-close behavior, and a subdued overlay. Dialog content should remain readable on mobile.

Toasts should be rare. If added, use compact dark surfaces, left-aligned text, and no celebratory animation.

Empty states should be honest and useful: concise title, one sentence of context, and one action. No large illustrations unless they communicate real portfolio content.

Loading states should use skeleton lines and soft opacity shifts. Avoid spinners unless waiting on an unknown duration.

## 6. Motion System

Motion is subtle, smooth, and minimal. Use 160ms to 220ms for hover and focus transitions. Use 260ms to 420ms for entrances and dialogs. Favor opacity, transform, and small blur transitions. Avoid layout-shifting animation.

Hover behavior should provide small lift, border contrast, or background shift. Entrance animations should be sparse: hero copy, project cards, and dialog content can fade/translate slightly. Loading skeletons should use low-contrast shimmer or pulse, not bright streaks.

Respect `prefers-reduced-motion: reduce` globally by disabling non-essential motion and keeping interactions instant.

## 7. Tailwind Implementation Strategy

Tailwind v4 should be configured from CSS with `@import "tailwindcss";` and `@theme` tokens. Define runtime CSS variables under `:root`, then map Tailwind tokens to those variables.

CSS variable structure:

- `--color-bg`
- `--color-bg-raised`
- `--color-surface`
- `--color-surface-soft`
- `--color-border`
- `--color-border-strong`
- `--color-text`
- `--color-text-secondary`
- `--color-text-muted`
- `--color-accent`
- `--color-accent-strong`
- `--color-success`
- `--color-warning`
- `--color-error`
- `--radius-card`
- `--radius-control`
- `--shadow-soft`

Tailwind v4 `@theme` token names should be semantic:

- `--color-portfolio-bg`
- `--color-portfolio-raised`
- `--color-portfolio-surface`
- `--color-portfolio-surface-soft`
- `--color-portfolio-border`
- `--color-portfolio-border-strong`
- `--color-portfolio-text`
- `--color-portfolio-text-secondary`
- `--color-portfolio-text-muted`
- `--color-portfolio-accent`
- `--color-portfolio-accent-strong`
- `--radius-portfolio-card`
- `--radius-portfolio-control`
- `--shadow-portfolio-soft`

Naming conventions: component classes should use semantic Tailwind tokens where possible, for example `bg-portfolio-bg`, `text-portfolio-text`, `border-portfolio-border`, and `rounded-portfolio-card`. Arbitrary values are allowed for precise layout but should not replace core tokens.

Dark mode strategy: this application is dark-only. Do not add a light-mode toggle unless explicitly requested. The `color-scheme` should be `dark`.

## 8. UX Philosophy

Information density should be medium: more substantial than a splash page, less dense than an admin dashboard. The home page should support scanning first, then reading. Project cards need enough content to understand role, frontend work, backend range, and impact without opening a dialog, while dialogs should carry the longer narrative.

Accessibility goals: keyboard navigation must work, focus states must be visible, dialogs must be accessible, images need meaningful alt text, and color cannot be the only state indicator. Body text must remain readable on mobile and desktop.

Interaction expectations: navigation should scroll to sections, project details should open without losing page context, external links should be clearly labeled, and contact paths should be obvious. Mobile adaptation should stack content, preserve reading order, keep touch targets at least 44px tall, and avoid horizontal overflow.

## 9. Anti-Patterns

Do not use giant shadows, neon glows, CRT scanlines, terminal text effects, generic glassmorphism, excessive gradients, gradient orbs, oversized border radii, purple-blue AI SaaS palettes, huge hero cards, decorative SVG blobs, fake dashboard charts, or copy that explains how to use the UI.

Do not make pages as single giant files. Do not nest UI cards inside larger cards. Do not hide important project context behind hover-only interactions. Do not use tiny low-contrast body text. Do not introduce a new visual style outside this document unless the user explicitly requests it.

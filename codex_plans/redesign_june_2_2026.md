# Modern Portfolio Redesign June 2 2026

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This repository contains `.agent/PLANS.md`; maintain this document according to that file. This plan is self-contained so a contributor can restart from this document and the current working tree without prior conversation.

## Purpose / Big Picture

The portfolio currently presents Charles Moore's work through an old-school CRT terminal interface. The new experience will keep the same portfolio content but replace the terminal metaphor with a premium gray and black editorial portfolio that is easier to read, feels modern, and invites visitors to explore projects and skills. A visitor should be able to land on the home page, immediately understand Charles's balanced full-stack product-engineering focus with deep frontend craft, scan featured proof, open project details, review skills, and find contact links without learning a desktop or terminal UI metaphor.

The work also creates `DESIGN.md`, which becomes the application source of truth for brand identity, tokens, typography, layout, components, motion, Tailwind v4 implementation, UX standards, and anti-patterns. The implementation must follow that design document and call out any intentional deviation.

## Progress

- [x] (2026-06-02 13:56Z) Recovered repo access, confirmed current branch state, and created `staging/redesign_june_2_2026`.
- [x] (2026-06-02 13:56Z) Audited the current app shape, Tailwind/PostCSS setup, portfolio data, route manager, and terminal UI components.
- [x] (2026-06-02 13:56Z) Created `DESIGN.md` with a production-grade gray/black editorial design system and Tailwind v4 token strategy.
- [x] (2026-06-02 14:02Z) Upgraded the styling stack from Tailwind 3 to Tailwind 4 and added Radix Dialog support for portfolio detail overlays.
- [x] (2026-06-02 14:02Z) Replaced the CRT terminal shell with a responsive editorial portfolio page using modular React components.
- [x] (2026-06-02 14:02Z) Replaced terminal overlay windows with a Radix-powered project detail dialog and in-page skills/contact sections.
- [x] (2026-06-02 14:08Z) Verified with lint, build, desktop screenshot, true 390px mobile viewport check, and Radix dialog interaction check.
- [x] (2026-06-02 14:08Z) Updated this ExecPlan with implementation discoveries, final verification evidence, and retrospective notes.
- [x] (2026-06-02 14:18Z) Revised the portfolio positioning from frontend-led to balanced full-stack, with Node.js and Laravel surfaced in hero, skills, contact copy, and project records.
- [x] (2026-06-02 14:18Z) Updated Digital Mob Boss, Sorority Wars, and Mobsters to render as full-stack projects with Laravel/Laravel Nova visible in cards and dialogs.
- [x] (2026-06-02 14:18Z) Corrected the hero proof area so the stats panel and project-index panel have matching desktop dimensions.
- [x] (2026-06-02 14:18Z) Re-verified with lint, build, desktop/mobile CDP layout checks, screenshot review, and a Mobsters Radix dialog interaction check.
- [x] (2026-06-02 14:26Z) Replaced the remaining case/case-notes UI language with project-specific wording.
- [x] (2026-06-02 14:28Z) Replaced detached third-person visible copy with first-person hero and work-section framing.
- [x] (2026-06-02 14:32Z) Corrected Laravel positioning to emphasize actual backend API systems, with Nova framed as operational tooling.
- [x] (2026-06-02 14:35Z) Updated the hero conversation CTA to open in a new tab and reused one shared conversation URL constant.
- [x] (2026-06-02 14:35Z) Re-verified the CTA update with lint, production build, and 390px browser DOM inspection.
- [x] (2026-06-02 14:39Z) Removed the final unused wrapper component, old empty component folders, unreferenced scaffold assets, and stale HTML asset/font requests before shipping.
- [x] (2026-06-02 14:44Z) Added the supplied CM favicon PNG and wired it into `index.html` for browser favicon and Apple touch icon use.

## Surprises & Discoveries

- Observation: The prompt says the stack is TailwindCSS v4, but the current checkout uses TailwindCSS `^3.4.3`.
  Evidence: `package.json` lists `"tailwindcss": "^3.4.3"`, `postcss.config.js` uses `tailwindcss: {}`, and `src/index.css` uses the Tailwind v3 `@tailwind base/components/utilities` directives.
- Observation: The prompt says the UI library is Radix UI, but no Radix package is installed yet.
  Evidence: `npm ls @radix-ui/react-dialog @radix-ui/react-dropdown-menu --depth=0` shows only `tailwindcss@3.4.3`.
- Observation: The current terminal experience is concentrated in one large file.
  Evidence: `src/app/components/Desktop/index.tsx` is 404 lines, above the repository's preferred split-before-250-lines standard.
- Observation: There is an unrelated pre-existing untracked `.agent/` directory.
  Evidence: `git status --short --branch` showed `?? .agent/` before this work began. Do not delete or overwrite user-created content there.
- Observation: Headless Chrome on this macOS environment crops screenshots below a 500px layout viewport when driven only with `--window-size=390,1200`.
  Evidence: `window.innerWidth` reported `500` for a plain `--window-size=390,1200` run. The final mobile verification used Chrome DevTools Protocol device emulation to force `innerWidth: 390`.
- Observation: Installing the requested Tailwind v4 and Radix dependencies surfaced existing package audit issues.
  Evidence: `npm install tailwindcss@^4 @tailwindcss/postcss @radix-ui/react-dialog` completed but reported `20 vulnerabilities (9 moderate, 11 high)`. This redesign did not run `npm audit fix` because that is a broader dependency remediation.

## Decision Log

- Decision: Use the valid branch name `staging/redesign_june_2_2026`.
  Rationale: Git rejects branch names beginning with `/`, so `/staging/redesign_june_2_2026` is invalid while `staging/redesign_june_2_2026` preserves the requested staging namespace.
  Date/Author: 2026-06-02 / Codex
- Decision: Use an editorial project dossier design direction.
  Rationale: The user selected this direction after asking for a gray/black modern portfolio that feels readable, premium, and not generically AI-generated.
  Date/Author: 2026-06-02 / Codex
- Decision: Migrate to TailwindCSS v4 instead of keeping v3.
  Rationale: The user's stack requirement explicitly names TailwindCSS v4, and `DESIGN.md` must define a v4 `@theme` token strategy.
  Date/Author: 2026-06-02 / Codex
- Decision: Use Radix Dialog for detail overlays and keep the rest of the page mostly native HTML.
  Rationale: The user named Radix UI. Dialog is the meaningful interactive primitive for project details without introducing unnecessary component-library weight.
  Date/Author: 2026-06-02 / Codex
- Decision: Remove the obsolete terminal and Mac-window component files instead of leaving dead code.
  Rationale: The new active UI no longer imports `AppWindow`, `Dock`, `AppIcon`, or `MenuBar`; deleting the stale files keeps the codebase aligned with the redesign and avoids preserving the old visual metaphor in unused source.
  Date/Author: 2026-06-02 / Codex
- Decision: Use zero letter spacing for metadata labels.
  Rationale: The active frontend guidance requires letter spacing to be zero, so `DESIGN.md` and the Tailwind classes were adjusted after the first implementation pass.
  Date/Author: 2026-06-02 / Codex
- Decision: Position the portfolio as balanced full-stack product engineering.
  Rationale: The user selected balanced full-stack positioning and asked to lean into Node.js and Laravel while still keeping frontend craft prominent.
  Date/Author: 2026-06-02 / Codex
- Decision: Make the hero stats and project-index panels equal-sized on desktop.
  Rationale: The screenshot feedback identified the previous asymmetric proof area as visually wrong; matching panel dimensions make the section feel intentional.
  Date/Author: 2026-06-02 / Codex
- Decision: Show Mobsters and Sorority Wars as full-stack projects.
  Rationale: The user explicitly asked for full-stack positioning on those projects and clarified the work includes actual Laravel backend API systems, not only Laravel Nova admin panels.
  Date/Author: 2026-06-02 / Codex
- Decision: Use first-person visible portfolio copy.
  Rationale: The user found third-person hero copy awkward. The hero now keeps the name visible but uses direct language: "I'm Charles Moore. I build...".
  Date/Author: 2026-06-02 / Codex
- Decision: Feed the hero conversation CTA from shared portfolio content.
  Rationale: The user asked for the hero conversation action to open in a new tab; sharing the URL with the contact data avoids duplicated email/link literals while keeping the page entrypoint thin.
  Date/Author: 2026-06-02 / Codex
- Decision: Route directly to `PortfolioExperience` instead of keeping a `Desktop` compatibility wrapper.
  Rationale: The cleanup pass found `src/app/components/Desktop/index.tsx` only re-exported the portfolio experience through a one-component wrapper. Removing it eliminates the last active reference to the old desktop metaphor and leaves the route pointed at the actual portfolio surface.
  Date/Author: 2026-06-02 / Codex
- Decision: Use the supplied 512px CM mark as the favicon.
  Rationale: The user asked for the provided image to become the favicon. The asset fits the gray/black redesign direction and gives the portfolio a concrete brand signal in browser tabs and saved links.
  Date/Author: 2026-06-02 / Codex

## Outcomes & Retrospective

The redesign is implemented. The active route now renders `PortfolioExperience` directly from `src/app/components/Portfolio/index.tsx`. The old terminal interface was replaced with a gray/black editorial portfolio with a readable hero, real project thumbnail background, project cards, skills sections, contact links, and a Radix Dialog for project details. The content now reads as balanced full-stack product engineering with React/TypeScript, Node.js, and Laravel visible as first-class signals. `DESIGN.md` is now the source of truth for future UI work. Tailwind is upgraded to v4.3.0 and configured through CSS `@theme` tokens in `src/index.css`.

Verification passed with `npm run lint`, `npm run build`, desktop screenshot review, a 500px headless mobile screenshot that matches Chrome's minimum plain headless viewport, and a forced 390px Chrome DevTools Protocol check. The 390px check confirmed `innerWidth: 390`, `scrollWidth: 390`, no horizontal overflow, and that the first project's detail button opens and closes an Anymals dialog.

The full-stack revision also passed `npm run lint` and `npm run build`. A CDP desktop check at `1440px` measured the hero stats and project-index panels at matching `592 x 288` dimensions. A CDP mobile check at `390px` confirmed `scrollWidth: 390` and no horizontal overflow. Direct rendered-card inspection confirmed Digital Mob Boss, Sorority Wars, and Mobsters all show `FULL-STACK SOFTWARE ENGINEER` with `Laravel` and `Laravel Nova` visible. A Mobsters dialog check confirmed the role, Laravel Nova, backend content-management wording, accessible close label, and close behavior.

## Context and Orientation

This is a Vite React app using TypeScript. The app entry is `src/main.tsx`, which renders `src/App.tsx`. `src/App.tsx` initializes Google Analytics and renders `RouteManager`. `src/app/components/RouteManager/index.tsx` defines one route, `/`, and currently renders `PortfolioExperience`.

Project content lives in `src/app/helpers/Projects.ts` as `projects`, an array of `App.Data.ProjectData`. The type lives in `src/types/generated.ts`. The redesign should preserve this content rather than inventing fake project data.

The previous UI was a CRT terminal. The old main shell and most local helper functions lived in `src/app/components/Desktop/index.tsx`. Details were rendered through `src/app/components/AppWindow/index.tsx` with `ProjectWindow`, `SkillsWindow`, and `ContactWindow` children. The older Mac/iPhone components under `src/app/components/Desktop/Dock`, `Desktop/AppIcon`, and `Desktop/MenuBar` were unused by the terminal shell. This implementation removed those obsolete files and the final `Desktop` wrapper, then replaced the active UI with modular components under `src/app/components/Portfolio/`.

The CSS entry is `src/index.css`. It currently uses Tailwind v3 directives and CRT-specific CSS variables such as `--crt-bg`, `--crt-line`, and `.crt-shell`. The new implementation should replace these with neutral product-grade tokens from `DESIGN.md`.

## Plan of Work

First, create `DESIGN.md` at the repo root. It must define the brand as a quiet editorial product-engineering portfolio, not a terminal, not a generic SaaS dashboard, and not a marketing splash page. It must include color tokens, typography, spacing, component behavior, motion, Tailwind v4 `@theme` tokens, UX rules, and anti-patterns. The document should be concrete enough that future UI work can translate tokens into Tailwind classes and CSS variables without inventing a new style.

Second, migrate styling to Tailwind v4. Install `tailwindcss@^4` and `@tailwindcss/postcss`, then update `postcss.config.js` to use `@tailwindcss/postcss`. Replace `@tailwind base`, `@tailwind components`, and `@tailwind utilities` in `src/index.css` with `@import "tailwindcss";`, define CSS variables and `@theme` tokens from `DESIGN.md`, and remove obsolete CRT-only global classes. The implementation removed `tailwind.config.js` because the v4 CSS-first setup builds cleanly without it.

Third, add Radix Dialog as the one required UI-library primitive for detail overlays. Install `@radix-ui/react-dialog`. Use it for project details on the redesigned portfolio, with correct overlay, title, description, close button, escape handling, focus trapping, and accessible labels. Do not install a broad UI kit.

Fourth, restructure the active UI so the page is modular. `src/app/components/RouteManager/index.tsx` now imports `PortfolioExperience` directly from `src/app/components/Portfolio/`, with no terminal or desktop compatibility wrapper. Create small components for the site shell, hero/intro, project grid or project index list, project detail dialog, skill sections, contact section, and shared badges/buttons. Extract reusable constants or derived metrics into helpers if needed. Keep files below roughly 250 lines and keep page entrypoints thin.

Fifth, implement the new editorial project dossier UI. The first viewport should clearly signal "Charles Moore" and full-stack product-engineering value with deep frontend craft, high-contrast gray/black surfaces, restrained borders, readable body text, and real project thumbnails. Projects should feel worth reading: use larger project titles, roles, concise descriptions, stack tags, and visible calls to open detail or external links. Skills should be organized into readable groups rather than terminal records. Contact should be direct and production-like. Motion should be subtle and respect `prefers-reduced-motion`.

Sixth, verify. Run `npm run lint` and `npm run build`. Start the Vite dev server with `npm run dev -- --host 127.0.0.1` on an available port. Use browser verification for desktop and mobile widths to check that the page renders, dialog opens/closes, text does not overlap, content is readable, and thumbnails load. Update this ExecPlan with the exact evidence.

## Concrete Steps

Work from `/Users/charlesmoore/Desktop/development-projects/personal-projects/personal-portfolio-webapp`.

The branch step has already been completed:

    git switch -c staging/redesign_june_2_2026
    Switched to a new branch 'staging/redesign_june_2_2026'

Install dependencies after the plan and `DESIGN.md` exist:

    npm install tailwindcss@^4 @tailwindcss/postcss @radix-ui/react-dialog

Then edit the CSS, PostCSS config, and React components described above. Verification completed with:

    npm run lint
    passed with zero warnings

    npm run build
    passed; Vite built successfully and only emitted the existing outdated Browserslist warning

    npm run dev -- --host 127.0.0.1
    started on http://127.0.0.1:5174/ because port 5173 was already in use

Final browser verification used headless Chrome and Chrome DevTools Protocol. The true 390px check returned:

    {
      "innerWidth": 390,
      "scrollWidth": 390,
      "bodyScrollWidth": 390,
      "hasHorizontalOverflow": false,
      "firstProjectButton": "View project details",
      "dialogOpen": {
        "hasDialog": true,
        "dialogTitle": "Anymals",
        "closeLabel": "Close Anymals project details"
      },
      "afterClose": {
        "hasDialog": false
      }
    }

## Validation and Acceptance

The redesign is accepted when `npm run lint` passes with zero warnings, `npm run build` completes successfully, and a browser review confirms the portfolio is no longer a CRT terminal. At desktop width, the first viewport must show Charles Moore, a clear full-stack product-engineering positioning statement, equal-sized hero proof panels, project proof, and navigation/contact access without cramped text. At mobile width, the layout must stack cleanly with no horizontal scroll and no text overflow. A project detail must open through a Radix Dialog, trap focus, close on escape, and show project role, description, responsibilities, stack, thumbnail, and external link when available.

`DESIGN.md` is accepted when it covers all requested sections and the implemented UI follows it. Any intentional deviation must be recorded in the final response and in this plan.

## Idempotence and Recovery

Branch creation is already complete. Re-running `git switch staging/redesign_june_2_2026` is safe if the branch exists. Dependency installation can be repeated; npm will update `package-lock.json` deterministically for the selected versions. Avoid destructive commands such as `git reset --hard` or deleting user-created untracked files. The pre-existing untracked `.agent/` directory must remain untouched except for read-only inspection.

If Tailwind v4 migration causes build errors, inspect the generated error, fix the PostCSS/CSS import path, and keep the implementation on Tailwind v4 unless the package cannot be installed. If network installation fails due to sandbox restrictions, rerun the same npm install with escalation rather than silently staying on Tailwind v3.

## Artifacts and Notes

Current audit excerpts:

    package.json: "tailwindcss": "^3.4.3"
    postcss.config.js: plugins: { tailwindcss: {}, autoprefixer: {} }
    src/index.css: @tailwind base; @tailwind components; @tailwind utilities;
    npm ls: personal-portfolio-webapp@0.0.0 ... tailwindcss@3.4.3
    wc -l: src/app/components/Desktop/index.tsx 404

Final implementation excerpts:

    npm ls: @radix-ui/react-dialog@1.1.15, @tailwindcss/postcss@4.3.0, tailwindcss@4.3.0
    wc -l: largest active portfolio component is src/app/components/Portfolio/ProjectDetailDialog.tsx at 153 lines
    screenshots: /private/tmp/portfolio-desktop-final.png, /private/tmp/portfolio-mobile-390-cdp.png

## Interfaces and Dependencies

At completion, the app depends on TailwindCSS v4.3.0, `@tailwindcss/postcss` v4.3.0, and `@radix-ui/react-dialog` v1.1.15. The project detail overlay is `src/app/components/Portfolio/ProjectDetailDialog.tsx` and accepts `project: App.Data.ProjectData | null`, `open: boolean`, and `onOpenChange: (open: boolean) => void`. The active route renders `PortfolioExperience` directly from `src/app/components/Portfolio/index.tsx`.

Revision note 2026-06-02 13:56Z: Created the initial ExecPlan after repository inspection so implementation can proceed from a self-contained, verified plan. The plan records the Tailwind v4 and Radix dependency gaps discovered in the current checkout.

Revision note 2026-06-02 14:08Z: Updated the ExecPlan after implementation and verification. The update records the shipped component structure, dependency versions, deleted stale UI files, zero-letter-spacing decision, final lint/build evidence, mobile overflow proof, and Radix dialog interaction proof.

Revision note 2026-06-02 14:18Z: Updated the ExecPlan after the full-stack refinement. The update records balanced full-stack positioning, equal desktop hero proof panels, Node.js/Laravel skills prominence, Mobsters/Sorority Wars full-stack card and dialog proof, and refreshed lint/build/browser evidence.

Revision note 2026-06-02 14:26Z: Updated the ExecPlan after replacing case/case-notes wording with project-specific wording. The active CTA is now `View project details`, the dialog eyebrow is `Project details`, and the hero panel is `Project index`.

Revision note 2026-06-02 14:28Z: Updated the ExecPlan after the first-person copy pass. Verification confirmed the rendered H1 is `I'm Charles Moore. I build full-stack products with frontend craft.`, the work section says `I owned`, old third-person strings are absent, and desktop/mobile CDP checks have no horizontal overflow.

Revision note 2026-06-02 14:32Z: Updated the ExecPlan after the Laravel backend API wording pass. The app now says `Laravel backend API systems`, `Laravel APIs`, and `Nova operational tooling` across the hero proof area, skills, contact copy, and game project records.

Revision note 2026-06-02 14:35Z: Updated the ExecPlan after the CTA behavior pass. The hero `Start a conversation` action now uses the shared `conversationUrl`, opens in a new tab with `noopener noreferrer`, and keeps the portfolio component structure within the fe-scaffold file map. Verification passed with `npm run lint`, `npm run build`, and a Chrome DevTools Protocol check confirming `{ "innerWidth": 390, "scrollWidth": 390, "hasHorizontalOverflow": false, "href": "mailto:charles@cmooredev.com", "target": "_blank", "rel": "noopener noreferrer" }`.

Revision note 2026-06-02 14:39Z: Updated the ExecPlan after the unused-code cleanup pass. `RouteManager` now renders `PortfolioExperience` directly, the obsolete `Desktop` wrapper is removed, empty old component directories were removed from disk, the unused Vite React SVG plus old desktop background asset were deleted, and `index.html` no longer requests the missing logo favicon or unused Quicksand font.

Revision note 2026-06-02 14:44Z: Updated the ExecPlan after the favicon pass. `public/assets/favicons/favicon.png` is a valid 512 x 512 RGBA PNG, and `index.html` now links it as both `rel="icon"` and `rel="apple-touch-icon"`.

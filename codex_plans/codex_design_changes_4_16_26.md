# Codex Design Changes 4/16/26

## To-Do Checklist
- [x] Audit the existing shell, icon grid, dock, and window chrome
- [x] Replace the edge-to-edge layout with a literal device treatment
- [x] Redesign desktop as a MacBook-style stage
- [x] Redesign mobile as an iPhone-style frame
- [x] Restyle icon grid, dock, and platform chrome
- [x] Rework project, skills, and contact windows to reduce card clutter
- [x] Run verification (`npm run build`, `npm run lint`)
- [x] Capture any follow-up polish items from verification

## Notes
- Direction chosen: refined Apple-like treatment with literal device framing, desktop-first landing state, and visual/content polish.
- Desktop now centers the portfolio inside a MacBook-inspired shell with a distinct display bezel and lower body/base.
- Mobile now uses an iPhone-inspired frame with Dynamic Island, safe-area spacing, and a bottom home indicator.
- Follow-up pass adjusted the desktop dock toward a lighter white-glass treatment to better match the reference.
- Follow-up pass corrected the mobile chrome geometry: centered island, single-line time, right-aligned status indicators, restored inner blue border, and an in-frame bottom tray/home indicator relationship.
- Clarification pass updated the desktop hover tooltip itself to use a bright white-glass label treatment.
- Clarification pass converted the mobile home screen body into a scrollable region with the bottom dock pinned to the device frame.
- Mobile touch cleanup removed dock hover labels entirely from the compact/mobile variant so tap does not leave a stuck tooltip.
- Mobile project windows now use a split intro treatment: image first, then title/description below, instead of overlaying copy on the thumbnail.
- The old oversized ghosted name treatment was removed in favor of a more deliberate brand/message area inside the desktop shell and a lighter intro on mobile.
- The dock remains a desktop affordance, while mobile uses a compact shortcut tray instead of reusing the macOS dock unchanged.
- Window internals were simplified to rely more on hierarchy, spacing, borders, and typography rather than stacked panel cards.
- Existing uncommitted `MenuBar` work was preserved and folded into the new shell styling.

## Verification
- `npm run lint` passed
- `npm run build` passed
- Build note: Browserslist emitted an outdated `caniuse-lite` warning, but the production build completed successfully.
- Follow-up verification after mobile shell fixes also passed for both `npm run lint` and `npm run build`.
- Verification after the tooltip and mobile scroll/dock pass also passed for both `npm run lint` and `npm run build`.
- Verification after removing mobile dock tooltips also passed for both `npm run lint` and `npm run build`.
- Verification after the mobile project intro fix also passed for both `npm run lint` and `npm run build`.

## Follow-Up Notes
- Next polish pass should be visual QA in-browser on an actual desktop width and iPhone-sized viewport to fine-tune spacing, especially around the mobile icon grid and desktop right-side intro block.

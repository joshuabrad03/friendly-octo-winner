# Copilot Instructions for Friendly Octo Winner

## Project snapshot
- Static portfolio site in plain HTML/CSS/JS. Key files:
  - `index.html`, `portfolio.html` (UI pages and content)
  - `style.css` (single stylesheet, responsive grid/tabs/navigation rules)
  - `script.js` (UI behavior: nav, tabs, contact form, back-to-top button, portfolio filter)
- No build toolchain or CI config detected; run locally by opening `index.html` in browser.

## High-value patterns
- Global DOM event wiring is in `script.js`: `openmenu/closemenu`, `opentab()`, scroll position show/hide `#topBtn`, `filter-btn` click toggles `project-section.hidden`.
- Form submission posts to Google Apps Script URL (`scriptURL`) and expects JSON `{result: "success"}`.
- In page links use both absolute routes (`portfolio.html`) and fragment anchors (`#contact`) with smooth scrolling.

## Repair and extension rules
- Keep layout semantics: `.project-section[data-category]` for filter logic; adding a category requires matching `data-filter` in filter buttons.
- The `tab` component in `index.html` uses CSS classes: `.tab-links.active-link`, `.tab-contents.active-tab`. Do not change class names without updating `opentab()` logic.
- Preserve existing 3rd-party dependencies: Font Awesome kit and Google fonts are direct CDN includes.

## Quality guidance for code edits
- Avoid adding frameworks (React/Vue) unless explicitly scoped; this site is intentionally vanilla.
- Validate mobile nav behavior with `window.innerWidth` >= 768 should still be supported by existing CSS media queries.
- Keep any new animation/DOM effects in `script.js` and avoid global variables when possible.

## How to debug locally
- Open `index.html` or `portfolio.html` in a browser (Chrome/Edge), use DevTools console for JS errors.
- Inspect `Network` tab on contact form submission to verify POST to `scriptURL`; if CORS or payload issues occur, check `FormData(form)` shape.

## When to avoid changes
- Do not remove project-case links to `images/*.pdf` and `figma` prototypes from `portfolio.html` unless replacing with new assets.
- If altering colors or spacing, update in `style.css` for both `#header`, `.services-list`, `.project-section`, and `.portfolio-background`.

## Quick artifacts
- `images/` contains brand logos + visual content; keep image reference paths relative (e.g., `images/user.png`).
- `script.js` is behavior single source; prefer adding functions there rather than inline `onClick` in HTML where possible.

> Ask for clarification if any section in this instruction file is unclear or if we need to include additional workflow steps (e.g., deploy through GitHub Pages with custom base path).
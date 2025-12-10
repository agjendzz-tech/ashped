# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This repository is a small static marketing site for a spedition & international road transport company, built with plain HTML, CSS, and a tiny inline JavaScript snippet. There is no build system, framework, or backend.

## Code Architecture & Structure

### Entry point: `index.html`

`index.html` is the single entry point and contains the full page markup:

- **Global layout**
  - `<header class="site-header">` with logo and primary navigation linking to in-page anchors (`#services`, `#fleet`, `#about`, `#contact`).
  - `<section class="hero">` marketing hero with primary CTA linking to the contact section.
  - Repeated `<section class="section">` / `<section class="section section-alt">` blocks for the main content areas.
  - `<footer class="site-footer">` displaying the current year via inline JavaScript.

- **Content sections**
  - **Services (`#services`)**: card-based overview of core offerings (international road transport, express / JIT, customs & documentation).
  - **Fleet (`#fleet`)**: high-level description of vehicle types and tracking.
  - **About (`#about`)**: brief positioning/brand text.
  - **Contact (`#contact`)**: quote request form with fields for company, email, route, cargo, and free-form details.

- **Behavior**
  - A minimal inline script in the footer sets the copyright year:
    - `document.getElementById('year').textContent = new Date().getFullYear();`
  - The contact form does not have JavaScript handlers or a backend endpoint; it currently behaves as a static HTML form.

### Styling: `styles.css`

All visual presentation is defined in `styles.css`:

- **Design tokens** via CSS custom properties on `:root` (`--primary`, `--primary-dark`, `--accent`, `--bg`, `--text`).
- **Global resets** using the universal selector (`*`) and base `body` typography/background.
- **Layout utilities**
  - `.container` centralizes content with a max width and horizontal padding.
  - Sections use `.section` and `.section-alt` for vertical rhythm and alternating backgrounds.
- **Header & navigation**
  - `.site-header` and `.site-header .container` implement a sticky-style top bar with flexbox alignment.
  - `.main-nav a` defines horizontal navigation links with hover color transitions.
- **Hero section**
  - `.hero` applies a primary color gradient and responsive typography (`clamp(...)`).
  - `.btn-primary` styles the primary call-to-action button used in hero and form.
- **Content modules**
  - `.cards` and `.card` implement a responsive card grid for services using CSS Grid and box-shadow.
  - `.contact-form` and `.form-row` define the quote form layout with responsive grid columns.
  - Shared input/textarea styles apply consistent spacing, borders, and typography.
- **Responsiveness**
  - A mobile-focused `@media (max-width: 640px)` rule tightens nav spacing and font size on small screens.

## Development & Run Commands

There is **no build, dependency, or test tooling** defined in this repository (no `package.json`, `pyproject.toml`, etc.). Treat it as a static site composed of raw assets.

### Local preview

- Simplest option: open `index.html` directly in a browser.
- Alternatively, run any static HTTP server from the project root if you need proper URL behavior for anchors or plan to add more assets. Examples (only use these if the relevant runtime is installed):
  - With Node.js: `npx serve .`
  - With Python 3: `python -m http.server 8000`

### Tests and linting

- There are currently **no automated tests, linters, or formatters** configured. Any such tooling you add should be documented here for future agents.

## Notes for Future Changes

Given the flat structure and lack of tooling, adding complexity (e.g., JavaScript behavior, build steps, or a framework) will likely require introducing a project structure (such as a `package.json` with scripts or a bundler). If you do so, update this `WARP.md` with the new architecture and relevant commands.
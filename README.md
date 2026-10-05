# Work by Jem — Portfolio

Personal portfolio of Jemarie Adame, showcasing work across digital marketing,
email campaigns, GoHighLevel CRM support, WordPress, website support, and
AI-assisted web development.

## Featured work

- **BotikaPOS** — a pharmacy-focused point-of-sale and inventory concept.
- **Prop Search** — credited website enhancement support for an existing
  WordPress/Elementor website.
- **Piggery Management System** — an in-progress business workflow concept.

## Built with

- React and TypeScript
- Next-style App Router structure
- Vinext and Vite
- CSS for the responsive layout, visual system, and interactions
- Cloudflare-compatible build tooling

## Project structure

- `app/page.tsx` — page content and components
- `app/globals.css` and `app/updates.css` — styling and responsive behavior
- `app/layout.tsx` — shared page layout and metadata
- `public/` — logos, portraits, and portfolio images

## Local development

Requirements: Node.js 22.13 or newer.

```bash
pnpm install
pnpm dev
```

Create a production build with:

```bash
pnpm build
```

`pnpm build` converts the editable source files into an optimized version for
hosting. It does not publish the website by itself.

## Cloudflare deployment

The project is configured for Cloudflare Workers. Cloudflare can connect to
this GitHub repository and automatically rebuild the live website whenever a
new commit is pushed to `main`.

For a manual deployment from an authenticated computer, use:

```bash
pnpm run deploy:vinext
```

The free Cloudflare address will follow this pattern:
`worksbyjem.<account-subdomain>.workers.dev`.

## Process and transparency

This portfolio was developed with AI-assisted coding tools, including Codex
and Claude Code. Jemarie directed the content, visual decisions, project scope,
testing, and iteration. AI was used as a development aid—not as a substitute
for project ownership, review, or honest representation of contributions.

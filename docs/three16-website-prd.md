# Three16 — Website PRD (v1)

**Purpose:** Build and ship a fast, minimal, single-page marketing site for **Three16**, an independent AI products studio. Static site hosted on **GitHub Pages** at the custom apex domain **three16.xyz**.

**Audience for this doc:** Claude Code (implementer). Build the whole thing in one pass, then wire up deployment.

---

## 1. Goal & success criteria

Create a polished one-page site that (a) presents Three16 as a legitimate, focused AI products studio, and (b) showcases its products with clear status. It should load fast, look intentional (not templated), and be trivially maintainable.

**Definition of done**
- Live at `https://three16.xyz` over HTTPS (apex domain), with `www` redirecting to apex.
- Single page, fully responsive from 320px → desktop.
- Lighthouse ≥ 95 on Performance, Accessibility, Best Practices, and SEO.
- Semantic HTML, alt text on all imagery, complete meta tags (title, description, Open Graph, favicon).
- Zero console errors. No unused framework bloat.
- Adding or editing a product is a one-object change in a single data file.

---

## 2. Tech stack & constraints

**Recommended stack:** **Astro + Tailwind CSS + TypeScript**, static output.
- Rationale: Astro ships zero JS by default (fast), is component-friendly for the product cards, and deploys cleanly to GitHub Pages. Tailwind keeps styling consistent and quick.
- **Fallback (if you prefer zero build tooling):** a single hand-written `index.html` + `styles.css` + minimal vanilla JS. Acceptable for this scope — pick this only if it meaningfully speeds delivery.

**Hard constraints**
- Must be a **static** build (no server runtime, no request-time SSR, no backend, no database).
- No auth, no contact-form backend — use a `mailto:` link for contact.
- All third-party assets self-hosted or from a reputable CDN; keep total page weight small.
- Accessible (WCAG AA contrast) and keyboard-navigable.

**Out of scope for v1:** blog/CMS, product detail pages, analytics dashboards, dark/light toggle, animations beyond subtle fade/slide-in. (See §8 for future nice-to-haves.)

---

## 3. Site structure (single page, anchor-nav)

1. **Header / nav** — "Three16" wordmark (left), minimal anchor links (right): `Products`, `About`, `Contact`. Sticky, condenses on scroll. Collapses to a simple menu on mobile.
2. **Hero** — headline, tagline, one-line description, and a soft CTA that scrolls to Products.
3. **Products** — a responsive card grid, split into two groups: **Live** and **In the lab**.
4. **About** — 2–4 sentences on the studio's approach.
5. **Contact / footer** — email + social links + copyright.

---

## 4. Content (ready to use — edit as desired)

### Hero
- **Wordmark:** `Three16`
- **Headline:** `An independent AI products studio.`
- **Tagline / sub:** `We design and ship focused, useful AI products — from live consumer tools to agentic systems taking shape in the lab.`
- **CTA button:** `See what we're building` → scrolls to `#products`.

### Products
Store these as a single data array (e.g., `src/data/products.ts`). Each product: `name`, `status` (`"live" | "lab"`), `blurb`, `url` (optional), `tags` (optional string[]).

**Live**
- **Snag Deals** — *live* — "Automatically detects and catalogs podcast ads, promo codes, and sponsorships — so you never miss a deal you meant to use." — url: `https://snagdeals.io` — tags: `Claude API`, `LLM extraction`
- **Distill** — *live* — "Personalized AI summaries and action items from your podcasts and videos, with a Chrome extension and mobile app." — url: `#` *(add public URL or remove link)* — tags: `Multi-LLM`, `Content intelligence`

**In the lab**
- **Agent Atlas** — *lab* — "Configure use-case-specific agents that take actions across your digital and IoT ecosystem — like auto-unsubscribing from junk email." — tags: `Agents`, `Actions`
- **Relay** — *lab* — "A messaging-first agentic assistant that orchestrates your tools, APIs, and integrations from a single chat." — tags: `Agents`, `Orchestration`
- **Cheaper Groceries** — *lab* — "Multi-store grocery price optimization with automated, agent-driven order placement." — tags: `Agents`, `Automation`
- **Sage** — *lab* — "ML-driven stock scoring and valuation on a point-in-time data pipeline." — tags: `ML`, `Fintech`
- **Filament** — *lab* — "An interactive 3D knowledge-graph explorer that maps entities and themes across podcasts and interviews." — tags: `Knowledge graph`, `Viz`
- **AI Model-Comparison** — *lab* — "Transparent, use-case-grounded, side-by-side evaluation of LLMs." — tags: `Evals`, `LLM`

> **Decision:** Feature all products, or trim the lab list to the ones you want public. `status` drives a small badge on each card ("Live" = accent color; "In the lab" = muted). Live products link out; lab products can be non-linked or labeled "Coming soon."

### About
`Three16 is an independent studio building useful, focused AI products. We favor vertical, data-driven tools over general-purpose ones — and we ship. Some are live today; others are taking shape in the lab.`

*(Optional founder line — include or omit:)* `Founded and built by Alex Reichart-Anderson.`

### Contact / footer
- **Email:** `hello@three16.xyz` *(set up email forwarding on the domain, or swap for your preferred address)*
- **Links:** GitHub, LinkedIn (`https://www.linkedin.com/in/areichartanderson`), personal site (`https://alexreichart.com`). Add X if desired.
- **Footer line:** `© 2026 Three16`

---

## 5. Design direction

Aim for **modern, minimal, quietly technical** — confident whitespace, not a busy template.

- **Theme:** dark by default. Near-black background (not pure `#000`), high-contrast off-white text, one restrained accent color for links, the "Live" badge, and CTA.
- **Typography:** a clean geometric/neo-grotesque sans for headings and body (e.g., Inter or Geist). Optional monospace accent for small labels, tags, and the status badges to give a builder feel.
- **Motif (optional, subtle):** lean into "316" / a small constellation or dot-grid element in the hero background. Keep it faint — texture, not decoration.
- **Product cards:** consistent height, name + status badge on top, blurb, tags as small chips, a subtle hover lift and border highlight. Live cards get the accent; lab cards stay muted.
- **Motion:** subtle fade/slide-in on scroll for sections and cards. Respect `prefers-reduced-motion`.
- **Layout:** max content width ~1100–1200px, centered, generous vertical rhythm. Mobile-first.

---

## 6. Suggested file structure (Astro)

```
three16-site/
├── public/
│   ├── CNAME                # contains: three16.xyz
│   ├── favicon.svg
│   └── og-image.png         # 1200×630 social preview
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── ProductCard.astro
│   │   ├── Products.astro
│   │   ├── About.astro
│   │   └── Footer.astro
│   ├── data/
│   │   └── products.ts      # single source of truth for the grid
│   ├── layouts/
│   │   └── Base.astro       # <head>, meta tags, fonts, global styles
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## 7. Deployment — GitHub Pages + custom domain (three16.xyz)

**Repo:** create a new **public** repo (e.g., `three16-site`).

**Astro config** (`astro.config.mjs`):
```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://three16.xyz',
  // base defaults to '/', which is correct for an apex custom domain
  integrations: [tailwind()],
});
```

**Custom domain file:** create `public/CNAME` containing exactly:
```
three16.xyz
```
(Astro copies `public/` to the build root, so `CNAME` lands where Pages expects it.)

**CI/CD:** use GitHub Actions to build and deploy (official Astro → Pages workflow, `withastro/action`). Then in the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

**DNS (at your registrar for three16.xyz):**
- Apex `A` records → GitHub Pages IPs:
  `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- Apex `AAAA` records (IPv6):
  `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
- `www` `CNAME` → `<your-github-username>.github.io`
- In **Settings → Pages**, set the custom domain to `three16.xyz` and enable **Enforce HTTPS** (may take a few minutes for the certificate to provision).

> Verify the current Pages IPs against GitHub's official "Managing a custom domain for your GitHub Pages site" docs before committing DNS — they're stable but worth a 10-second confirmation.

---

## 8. Future / nice-to-haves (not v1)

- Lightweight, privacy-friendly analytics (e.g., Plausible).
- A `/changelog` or `/lab` page as products graduate from lab → live.
- Per-product detail pages.
- Light/dark toggle.
- Auto-generated OG images per product.

---

## 9. Build checklist for Claude Code

- [ ] Scaffold Astro + Tailwind + TS project with the structure in §6.
- [ ] Implement `Base.astro` with full meta tags, favicon, fonts, and global styles.
- [ ] Build `products.ts` from §4 and render `Products.astro` + `ProductCard.astro` (grouped by status).
- [ ] Build Hero, About, Nav (sticky + mobile), Footer with §4 content.
- [ ] Apply the §5 design direction; verify responsiveness at 320/768/1200px.
- [ ] Add `public/CNAME`, configure `astro.config.mjs`, and add the GitHub Actions Pages workflow.
- [ ] Confirm Lighthouse ≥ 95 across all four categories and zero console errors.
- [ ] Provide a short `README.md` with local dev (`npm run dev`), build, and the DNS steps from §7.

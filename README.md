# Three16

An independent AI products studio -- [three16.xyz](https://three16.xyz)

We design and ship focused, useful AI products -- from live consumer tools to agentic systems taking shape in the lab.

## Products

### Live

- **Snag Deals** -- Automatically detects and catalogs podcast ads, promo codes, and sponsorships so you never miss a deal you meant to use. [snagdeals.io](https://snagdeals.io)
- **Distill** -- Personalized AI summaries and action items from your podcasts and videos, with a Chrome extension and mobile app.

### In the lab

- **Agent Atlas** -- Configure use-case-specific agents that take actions across your digital and IoT ecosystem.
- **Relay** -- A messaging-first agentic assistant that orchestrates your tools, APIs, and integrations from a single chat.
- **Cheaper Groceries** -- Multi-store grocery price optimization with automated, agent-driven order placement.
- **Sage** -- ML-driven stock scoring and valuation on a point-in-time data pipeline.
- **Filament** -- An interactive 3D knowledge-graph explorer that maps entities and themes across podcasts and interviews.
- **AI Model-Comparison** -- Transparent, use-case-grounded, side-by-side evaluation of LLMs.

## Development

```bash
npm install
npm run dev
```

## Adding a product

Edit `src/data/products.ts` and add an object to the array:

```ts
{
  name: 'Product Name',
  status: 'live',        // 'live' | 'lab'
  blurb: 'One-line description.',
  url: 'https://...',    // optional, omit for lab products
  tags: ['Tag1', 'Tag2'] // optional
}
```

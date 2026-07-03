export type Product = {
  name: string;
  status: 'live' | 'lab';
  blurb: string;
  url?: string;
  tags?: string[];
};

export const products: Product[] = [
  {
    name: 'Snag Deals',
    status: 'live',
    blurb:
      'Automatically detects and catalogs podcast ads, promo codes, and sponsorships — so you never miss a deal you meant to use.',
    url: 'https://snagdeals.io',
    tags: ['Claude API', 'LLM extraction'],
  },
  {
    name: 'Distill',
    status: 'live',
    blurb:
      'Personalized AI summaries and action items from your podcasts and videos, with a Chrome extension and mobile app.',
    tags: ['Multi-LLM', 'Content intelligence'],
  },
  {
    name: 'Agent Atlas',
    status: 'lab',
    blurb:
      'Configure use-case-specific agents that take actions across your digital and IoT ecosystem — like auto-unsubscribing from junk email.',
    tags: ['Agents', 'Actions'],
  },
  {
    name: 'Relay',
    status: 'lab',
    blurb:
      'A messaging-first agentic assistant that orchestrates your tools, APIs, and integrations from a single chat.',
    tags: ['Agents', 'Orchestration'],
  },
  {
    name: 'Cheaper Groceries',
    status: 'lab',
    blurb:
      'Multi-store grocery price optimization with automated, agent-driven order placement.',
    tags: ['Agents', 'Automation'],
  },
  {
    name: 'Sage',
    status: 'lab',
    blurb:
      'ML-driven stock scoring and valuation on a point-in-time data pipeline.',
    tags: ['ML', 'Fintech'],
  },
  {
    name: 'Filament',
    status: 'lab',
    blurb:
      'An interactive 3D knowledge-graph explorer that maps entities and themes across podcasts and interviews.',
    tags: ['Knowledge graph', 'Viz'],
  },
  {
    name: 'AI Model-Comparison',
    status: 'lab',
    blurb:
      'Transparent, use-case-grounded, side-by-side evaluation of LLMs.',
    tags: ['Evals', 'LLM'],
  },
];

# Three16

An independent AI products studio -- [three16.xyz](https://three16.xyz)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview   # preview the build locally
```

## Deployment

The site deploys automatically to GitHub Pages via the GitHub Actions workflow on push to `main`.

### DNS setup (at your registrar for three16.xyz)

**Apex A records** (point to GitHub Pages):
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

**Apex AAAA records** (IPv6):
- `2606:50c0:8000::153`
- `2606:50c0:8001::153`
- `2606:50c0:8002::153`
- `2606:50c0:8003::153`

**www CNAME** -> `ara1data.github.io`

Then in **Settings -> Pages**, set custom domain to `three16.xyz` and enable **Enforce HTTPS**.

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

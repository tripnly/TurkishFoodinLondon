# Turkish Food in London

Next.js site for turkishfoodinlondon.com

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deploy to Vercel

### Option 1: GitHub Integration (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repo
5. Vercel auto-detects Next.js and deploys

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles + Tailwind
│   ├── best-turkish-restaurants-london/
│   │   └── page.tsx         # Pillar page
│   ├── areas/
│   │   ├── green-lanes/
│   │   │   └── page.tsx     # Green Lanes guide
│   │   └── dalston/
│   │       └── page.tsx     # Dalston guide
│   └── dishes/
│       ├── doner/
│       │   └── page.tsx     # Best Döner guide
│       └── breakfast/
│           └── page.tsx     # Turkish Breakfast guide
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ArticleLayout.tsx
│   └── RestaurantCard.tsx
```

## Adding New Pages

### New Area Guide

1. Create folder: `src/app/areas/[area-name]/`
2. Create `page.tsx` inside
3. Use `RestaurantCard` component for listings
4. Add to navigation in `Header.tsx` and `Footer.tsx`

### New Dish Guide

1. Create folder: `src/app/dishes/[dish-name]/`
2. Create `page.tsx` inside
3. Follow pattern from `/dishes/doner/page.tsx`

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Turkish Red | `#C41E3A` | Primary buttons, accents |
| Navy | `#1a1a2e` | Headings, footer |
| Gold | `#D4AF37` | Highlights |
| Cream | `#F5E6D3` | Section backgrounds |

## Fonts

- **Playfair Display** — Headings (loaded via Google Fonts)
- **Inter** — Body text (loaded via Google Fonts)

## Environment Variables

None required for basic deployment.

For future features (newsletter, map), add:

```env
# .env.local
NEXT_PUBLIC_MAPBOX_TOKEN=xxx
MAILCHIMP_API_KEY=xxx
```

## Adding the Map

The map section is currently a placeholder. To add Tripnly map:

1. Build map as separate React component
2. Add to `src/components/Map.tsx`
3. Import in homepage and `/map` page
4. Or embed as iframe from separate deployment

## SEO

Each page has its own `metadata` export for:
- Title
- Description
- Open Graph

Schema markup should be added via JSON-LD scripts in each page.

## Performance

- Static export enabled (`output: 'export'`)
- Images unoptimized (add your own optimization)
- Tailwind purges unused CSS automatically

Target: 95+ PageSpeed score

---

Built for turkishfoodinlondon.com

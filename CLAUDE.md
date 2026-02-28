# turkishfoodinlondon.com — Project Context

## What This Is
A Next.js content site about Turkish food in London. SEO-focused, monetized with Google AdSense. Targets food tourists and locals looking for authentic Turkish restaurants, dishes, and neighbourhood guides. Written in a knowledgeable, opinionated, insider tone — not a generic food blog.

## Tech Stack
- **Framework:** Next.js 14.1.0 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4.1 with custom theme
- **Icons:** lucide-react
- **Hosting:** Vercel (likely)
- **Analytics:** Google Analytics (G-9SLE3SB9PX)
- **Monetization:** Google AdSense (ca-pub-1144765684947111)
- **Images:** Unoptimized (no real photos yet — gradient placeholders)
- **URLs:** Trailing slashes enabled (`trailingSlash: true`)

## Commands
```bash
npm run dev    # Start dev server
npm run build  # Production build
npm run start  # Serve production build
npm run lint   # Run linter
```

## Project Structure
```
src/
├── app/
│   ├── layout.tsx              # Root layout (metadata, AdSense, GA, Header/Footer)
│   ├── page.tsx                # Homepage (hero, area cards, dish cards, map CTA, newsletter)
│   ├── globals.css             # Tailwind + custom component classes (btn-primary, card, etc.)
│   ├── sitemap.ts              # Dynamic sitemap generator
│   ├── robots.txt/             # Robots config
│   ├── areas/
│   │   ├── page.tsx            # Areas listing (grid of area cards)
│   │   ├── green-lanes/        # ✅ Complete — 4 restaurants + 3 bakeries + food crawl
│   │   ├── dalston/            # ✅ Complete
│   │   ├── stoke-newington/    # ✅ Complete
│   │   ├── wood-green/         # ✅ Complete — 3 restaurants + shops
│   │   ├── finsbury-park/      # ✅ Complete — 3 restaurants + Green Lanes connection
│   │   └── edmonton/           # ✅ Complete — 3 restaurants + value proposition
│   ├── dishes/
│   │   ├── page.tsx            # Dishes listing (grid of dish cards + coming soon)
│   │   ├── doner/              # ✅ Complete — 5 restaurants + types table
│   │   ├── breakfast/          # ✅ Complete
│   │   ├── lahmacun/           # ✅ Complete — 4 restaurants
│   │   ├── kunefe/             # ✅ Complete — 3 restaurants
│   │   ├── pide/               # ✅ Complete — 4 restaurants + types table
│   │   ├── adana-kebab/        # ✅ Complete — 4 restaurants + types table
│   │   └── baklava/            # ✅ Complete — 3 shops + buying guide
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   ├── what-is-ocakbasi/   # Blog post (Jan 2025)
│   │   ├── turkish-breakfast-guide/
│   │   ├── green-lanes-history/
│   │   ├── ordering-turkish-meat/
│   │   └── best-byob-turkish-restaurants/
│   ├── best-turkish-restaurants-london/  # Main pillar guide (25 restaurants)
│   ├── map/                    # ⚠️ PLACEHOLDER — "Interactive Map Coming Soon"
│   ├── restaurants/            # ⚠️ PLACEHOLDER — "Full Restaurant Directory Coming Soon"
│   ├── about/
│   ├── contact/
│   └── privacy/
├── components/
│   ├── RestaurantCard.tsx      # Reusable restaurant card (name, tagline, description, whatToOrder, address, hours, price, tip)
│   ├── ArticleLayout.tsx       # Generic article wrapper (hero + prose + related links)
│   ├── BlogPostLayout.tsx      # Blog post wrapper (hero + 2-col layout with sidebar, ads, newsletter, related posts)
│   ├── Schema.tsx              # JSON-LD schemas: WebsiteSchema, OrganizationSchema, ArticleSchema, LocalBusinessListSchema, BreadcrumbSchema, FAQSchema
│   ├── AdSlot.tsx              # AdSense component + placeholder
│   ├── Header.tsx              # Sticky header with mobile menu (Areas, Dishes, Restaurants, Blog, Map)
│   ├── Footer.tsx              # 5-column footer (Brand, Areas, Dishes, Blog, Site)
│   └── GoogleAnalytics.tsx     # GA4 tracking script
```

## Design System / Custom Tailwind Theme

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `turkish-red` | #C41E3A | Primary brand, CTAs, hover accents |
| `turkish-red-dark` | #a01830 | Button hover state |
| `navy` | #1a1a2e | Headings, dark backgrounds, footer |
| `navy-light` | #2d2d4a | Gradient endpoints |
| `gold` | #D4AF37 | Accent (hero headline, footer hover) |
| `cream` | #F5E6D3 | Background sections, tip boxes |

### Typography
- **Display font:** Playfair Display (headings) — `font-display`
- **Body font:** Inter (everything else) — `font-body`

### Component Classes (globals.css)
- `.btn-primary` — Red CTA button with hover lift
- `.btn-secondary` — Transparent bordered button (for dark backgrounds)
- `.card` — White bordered card with hover shadow + lift
- `.section-header` — Large bold navy heading
- `.section-subheader` — Gray subtitle text

### Page Pattern — Dish Pages
Every dish page follows this exact structure:
1. **Hero** — Gradient background + emoji + h1 + subtitle
2. **Intro** — Blockquote-style text with `border-l-4 border-turkish-red`
3. **Explainer** (optional) — `bg-cream rounded-xl p-6` with list of components
4. **Types Table** — `bg-navy text-white` header, striped rows
5. **RestaurantCard list** — Using `<RestaurantCard>` component
6. **Comparison/Explainer box** — `bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl`
7. **Tips section** — Do/Don't grid or ordered list
8. **Related Guides** — Flex wrap of pill-style links

### Page Pattern — Area Pages
1. **Hero** — Gradient background + h1 + subtitle
2. **Quick Stats bar** — White strip with emoji + stats (location, count, transport)
3. **Intro prose** — 2 paragraphs of context
4. **Restaurants** — RestaurantCard list
5. **Bakeries/Shops** (optional) — Simple card grid
6. **Special Section** (optional) — Food crawl, value proposition, etc.
7. **Getting There** — Transport info (Tube, Bus, Driving)
8. **Related Guides** — Pill links

### RestaurantCard Props
```typescript
interface RestaurantCardProps {
  name: string        // e.g. "Gökyüzü"
  tagline: string     // e.g. "The Institution | Green Lanes | ££"
  description: string // 2-3 sentences
  whatToOrder: string  // Comma-separated dishes
  address: string     // Street address with postcode
  hours?: string      // e.g. "8am-12am daily"
  price: string       // e.g. "£15-25pp"
  tip?: string        // Optional pro tip (renders in gold box)
}
```

### Hero Gradients by Page
| Page | Gradient |
|------|----------|
| Döner | `from-orange-600 to-amber-500` |
| Pide | `from-orange-600 to-amber-500` |
| Adana Kebab | `from-red-700 to-rose-500` |
| Baklava | `from-emerald-600 to-green-500` |
| Künefe | `from-amber-600 to-yellow-500` |
| Green Lanes | `from-emerald-500 to-green-400` |
| Dalston | `from-fuchsia-400 to-rose-400` |
| Stoke Newington | `from-sky-400 to-cyan-400` |
| Wood Green | `from-amber-400 to-orange-400` |
| Finsbury Park | `from-violet-400 to-purple-400` |
| Edmonton | `from-teal-400 to-emerald-400` |

## SEO & Schema

### Current SEO Setup
- ✅ `<title>` with template pattern (`%s | Turkish Food in London`)
- ✅ Meta descriptions on all pages
- ✅ Canonical URLs via `metadataBase`
- ✅ OpenGraph tags (title, description, url, siteName, locale)
- ✅ Twitter card (summary_large_image)
- ✅ Robots config (index, follow, max-image-preview: large)
- ✅ Geo meta tags (GB-LND, London, 51.5074;-0.1278)
- ✅ Sitemap.ts with all pages
- ✅ robots.txt (Allow all except /api/ and /private/)
- ⚠️ No OG Image yet (need to create one)
- ⚠️ No LocalBusiness schema on dish/area pages (Schema component exists, just not wired up)

### Available Schema Components
- `WebsiteSchema` — Used on homepage
- `OrganizationSchema` — Used on homepage
- `ArticleSchema` — Used on blog posts via BlogPostLayout
- `BreadcrumbSchema` — Used on blog posts via BlogPostLayout
- `LocalBusinessListSchema` — Available but NOT yet used on dish/area pages
- `FAQSchema` — Available but NOT yet used anywhere

### Target Keywords (in layout.tsx)
Turkish food London, Turkish restaurants London, best kebab London, Green Lanes restaurants, Dalston Turkish, ocakbaşı London, Turkish breakfast London, döner London, lahmacun London, best pide London, adana kebab London, baklava London, künefe London, Turkish food Wood Green, Turkish food Finsbury Park, Turkish food Edmonton, halal restaurants London, best Turkish kebab near me

## Monetization
- **Google AdSense** (ca-pub-1144765684947111) — integrated in layout.tsx
- **Ad Slot IDs:** 2061905441 (used in BlogPostLayout sidebar + in-article)
- **AdSlot component** takes: `slot`, `format`, `responsive`, `className`
- Blog posts have 3 ad placements: sidebar top, in-article, sidebar bottom
- No affiliate links yet (potential: Viator tours, restaurant booking)

## What's Still Missing / TODO

### High Priority
- **Interactive Map** (`/map/page.tsx`) — Currently a placeholder. Needs Leaflet/Mapbox with restaurant pins
- **Restaurant Directory** (`/restaurants/page.tsx`) — Currently a placeholder. Needs filterable list
- **OG Image** — No og:image set. Create a branded share image
- **Wire up LocalBusinessListSchema** on dish and area pages
- **Wire up FAQSchema** on relevant pages (dish pages especially)

### Medium Priority
- **New blog posts** — Last posts are from Jan 2025, 14+ months stale
- **Footer needs updating** — Missing links to new areas (Wood Green, Finsbury Park, Edmonton) and dishes (Pide, Adana Kebab, Baklava)
- **Homepage needs updating** — Only shows 3 areas and 4 dishes in cards (missing new ones)
- **Real photos** — All images are gradient placeholders
- **Newsletter** — Form exists but no backend (needs Mailchimp/ConvertKit/etc.)

### Future Content Pages
- Dishes: Late Night Turkish, Manti, Gözleme
- Areas: Hackney, Tottenham, Enfield
- Blog topics: seasonal guides, restaurant reviews, "best of" roundups

## Key Restaurants Referenced Across Pages
| Restaurant | Area | Appears On |
|-----------|------|-----------|
| Gökyüzü | Green Lanes | döner, lahmacun, pide, adana-kebab, green-lanes, wood-green |
| Mangal 1 | Dalston | döner, lahmacun, adana-kebab |
| Selale | Green Lanes | lahmacun, adana-kebab, pide |
| Hala Restaurant | Green Lanes | lahmacun, pide, green-lanes |
| Antepliler | Green Lanes | adana-kebab, baklava, künefe, green-lanes |
| Yasar Halim | Green Lanes | baklava, künefe, green-lanes |
| Bebek Baklava | Green Lanes | baklava, green-lanes |
| Devran | Dalston | pide |
| Petek | Stoke Newington | pide, finsbury-park |

## Owner
- **Owner:** Nejat (nejat@ticaret.com)
- **Other sites:** topkapi.com, dailyistanbul.com
- **dailyistanbul.com:** WordPress/Kadence theme. Has Viator affiliate widget in blog sidebar. Sidebar widened to 380px via Additional CSS.

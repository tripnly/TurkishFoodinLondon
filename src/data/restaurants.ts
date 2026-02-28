// ── Centralized Restaurant Data ─────────────────────────────────
// Edit this file to add, remove, or update any restaurant.
// All pages (map, directory, landing page) pull from here.

export interface Restaurant {
  id: string
  name: string
  area: string
  areaSlug: string
  lat: number
  lng: number
  type: 'restaurant' | 'bakery' | 'dessert'
  priceRange: string
  dishes: string[]
  address: string
  description: string
  link: string
  phone?: string
  website?: string
  hours?: string
  tier: 'free' | 'featured' | 'spotlight'
  photos?: string[]
  featured?: boolean
  editorsChoice?: boolean
}

export const restaurants: Restaurant[] = [
  // ── Green Lanes ──────────────────────────────────────────────
  {
    id: 'gokyuzu',
    name: 'Gökyüzü',
    area: 'Green Lanes',
    areaSlug: 'green-lanes',
    lat: 51.5770,
    lng: -0.0990,
    type: 'restaurant',
    priceRange: '££',
    dishes: ['Döner', 'Pide', 'Adana Kebab', 'Breakfast'],
    address: '26-28 Grand Parade, N4 1LG',
    description: 'The sprawling anchor of Green Lanes. Wood-fired oven, multiple dining rooms, and a menu that runs to several pages.',
    link: '/areas/green-lanes',
    tier: 'free',
  },
  {
    id: 'selale',
    name: 'Selale',
    area: 'Green Lanes',
    areaSlug: 'green-lanes',
    lat: 51.5780,
    lng: -0.0988,
    type: 'restaurant',
    priceRange: '££',
    dishes: ['Adana Kebab', 'Lamb Ribs', 'Pide'],
    address: '51 Grand Parade, N4 1AG',
    description: 'Slightly more polished than its neighbours. The lamb ribs are exceptional.',
    link: '/areas/green-lanes',
    tier: 'free',
  },
  {
    id: 'hala',
    name: 'Hala Restaurant',
    area: 'Green Lanes',
    areaSlug: 'green-lanes',
    lat: 51.5772,
    lng: -0.0991,
    type: 'restaurant',
    priceRange: '££',
    dishes: ['Lahmacun', 'Pide', 'Gözleme'],
    address: '29-31 Grand Parade, N4 1LG',
    description: 'Warm, welcoming, and consistently excellent. Their gözleme is hand-rolled.',
    link: '/areas/green-lanes',
    tier: 'free',
  },
  {
    id: 'antepliler',
    name: 'Antepliler',
    area: 'Green Lanes',
    areaSlug: 'green-lanes',
    lat: 51.5778,
    lng: -0.0989,
    type: 'restaurant',
    priceRange: '££',
    dishes: ['Adana Kebab', 'Baklava', 'Künefe'],
    address: '46 Grand Parade, N4 1AG',
    description: 'Named after Gaziantep. A complex: restaurant, döner house, künefe cafe.',
    link: '/areas/green-lanes',
    tier: 'free',
  },
  {
    id: 'yasar-halim',
    name: 'Yasar Halim',
    area: 'Green Lanes',
    areaSlug: 'green-lanes',
    lat: 51.5785,
    lng: -0.0986,
    type: 'bakery',
    priceRange: '££',
    dishes: ['Baklava', 'Turkish Delight'],
    address: '495-497 Green Lanes, N4 1AL',
    description: 'The undisputed baklava king of London. Pistachios imported from Gaziantep.',
    link: '/dishes/baklava',
    tier: 'free',
  },
  {
    id: 'bebek-baklava',
    name: 'Bebek Baklava',
    area: 'Green Lanes',
    areaSlug: 'green-lanes',
    lat: 51.5782,
    lng: -0.0987,
    type: 'bakery',
    priceRange: '£££',
    dishes: ['Baklava'],
    address: 'Green Lanes, N4',
    description: 'Sleek, modern, and beautifully packaged. The luxury end of baklava.',
    link: '/dishes/baklava',
    tier: 'free',
  },
  {
    id: 'antepliler-kunefe',
    name: 'Antepliler Künefe',
    area: 'Green Lanes',
    areaSlug: 'green-lanes',
    lat: 51.5777,
    lng: -0.0990,
    type: 'dessert',
    priceRange: '££',
    dishes: ['Künefe'],
    address: '46 Grand Parade, N4 1AG',
    description: 'Hot künefe made to order. Crispy kadayıf, stretchy cheese, sugar syrup.',
    link: '/dishes/kunefe',
    tier: 'free',
  },
  // ── Dalston ────────────────────────────────────────────────
  {
    id: 'mangal-1',
    name: 'Mangal 1',
    area: 'Dalston',
    areaSlug: 'dalston',
    lat: 51.5468,
    lng: -0.0753,
    type: 'restaurant',
    priceRange: '££',
    dishes: ['Adana Kebab', 'Döner', 'Lahmacun'],
    address: '10 Arcola St, E8 2DJ',
    description: 'The original Dalston ocakbaşı. Charcoal grilling since the early days. BYOB.',
    link: '/areas/dalston',
    tier: 'free',
  },
  {
    id: 'devran',
    name: 'Devran',
    area: 'Dalston',
    areaSlug: 'dalston',
    lat: 51.5510,
    lng: -0.0740,
    type: 'restaurant',
    priceRange: '££',
    dishes: ['Pide', 'Kebab'],
    address: '78 Stoke Newington Road, N16 7XB',
    description: 'A Dalston stalwart that does pide with real care. Fresh dough daily.',
    link: '/dishes/pide',
    tier: 'free',
  },
  // ── Stoke Newington ────────────────────────────────────────
  {
    id: 'petek',
    name: 'Petek',
    area: 'Stoke Newington',
    areaSlug: 'stoke-newington',
    lat: 51.5590,
    lng: -0.0740,
    type: 'restaurant',
    priceRange: '££',
    dishes: ['Pide', 'Kebab'],
    address: '98 Stoke Newington High St, N16 7NY',
    description: 'Small, family-run, and doing everything right. Cash only.',
    link: '/dishes/pide',
    tier: 'free',
  },
  // ── Wood Green ─────────────────────────────────────────────
  {
    id: 'likya',
    name: 'Likya',
    area: 'Wood Green',
    areaSlug: 'wood-green',
    lat: 51.5970,
    lng: -0.1100,
    type: 'restaurant',
    priceRange: '££',
    dishes: ['Mixed Grill', 'Pide', 'Breakfast'],
    address: 'High Road, Wood Green, N22',
    description: 'A proper family restaurant serving the local Turkish community.',
    link: '/areas/wood-green',
    tier: 'free',
  },
  {
    id: 'kervan-sofrasi',
    name: 'Kervan Sofrası',
    area: 'Wood Green',
    areaSlug: 'wood-green',
    lat: 51.5965,
    lng: -0.1095,
    type: 'restaurant',
    priceRange: '££',
    dishes: ['Mantı', 'Lentil Soup', 'Casserole'],
    address: 'High Road, Wood Green, N22',
    description: 'Home-style Turkish cooking. The lentil soup and mantı are standouts.',
    link: '/areas/wood-green',
    tier: 'free',
  },
  // ── Finsbury Park ──────────────────────────────────────────
  {
    id: 'yayla',
    name: 'Yayla',
    area: 'Finsbury Park',
    areaSlug: 'finsbury-park',
    lat: 51.5650,
    lng: -0.1050,
    type: 'restaurant',
    priceRange: '££',
    dishes: ['Breakfast', 'Gözleme', 'Lentil Soup'],
    address: 'Stroud Green Road, N4',
    description: 'Part cafe, part restaurant. Turkish breakfast through to late-night grills.',
    link: '/areas/finsbury-park',
    tier: 'free',
  },
  {
    id: 'izgara',
    name: 'Izgara',
    area: 'Finsbury Park',
    areaSlug: 'finsbury-park',
    lat: 51.5645,
    lng: -0.1060,
    type: 'restaurant',
    priceRange: '££',
    dishes: ['Döner', 'Mixed Grill'],
    address: 'Seven Sisters Road, N4',
    description: 'Open late. Perfect post-pub Turkish food.',
    link: '/areas/finsbury-park',
    tier: 'free',
  },
  // ── Edmonton ───────────────────────────────────────────────
  {
    id: 'develi',
    name: 'Develi',
    area: 'Edmonton',
    areaSlug: 'edmonton',
    lat: 51.6170,
    lng: -0.0610,
    type: 'restaurant',
    priceRange: '££',
    dishes: ['Casserole', 'Pide', 'Mixed Grill'],
    address: 'Fore Street, Edmonton, N18',
    description: 'Edmonton\'s anchor Turkish restaurant. Generous and priced for locals.',
    link: '/areas/edmonton',
    tier: 'free',
  },
  {
    id: 'edmonton-ocakbasi',
    name: 'Edmonton Ocakbaşı',
    area: 'Edmonton',
    areaSlug: 'edmonton',
    lat: 51.6165,
    lng: -0.0615,
    type: 'restaurant',
    priceRange: '££',
    dishes: ['Adana Kebab', 'Chicken Wings'],
    address: 'Fore Street, Edmonton, N18',
    description: 'A proper ocakbaşı with open charcoal grill. No frills, just good grilling.',
    link: '/areas/edmonton',
    tier: 'free',
  },
  {
    id: 'hasans-kitchen',
    name: 'Hasan\'s Kitchen',
    area: 'Edmonton',
    areaSlug: 'edmonton',
    lat: 51.6160,
    lng: -0.0620,
    type: 'restaurant',
    priceRange: '£',
    dishes: ['Lentil Soup', 'Gözleme', 'Daily Special'],
    address: 'Fore Street, Edmonton, N18',
    description: 'Tiny, family-run, cooking food that tastes like someone\'s mum made it.',
    link: '/areas/edmonton',
    tier: 'free',
  },
]

// ── Helper functions ────────────────────────────────────────────

export const areaColors: Record<string, string> = {
  'Green Lanes': '#10b981',
  'Dalston': '#e879a0',
  'Stoke Newington': '#38bdf8',
  'Wood Green': '#f59e0b',
  'Finsbury Park': '#a78bfa',
  'Edmonton': '#2dd4bf',
}

export function getRestaurantsByArea(areaSlug: string): Restaurant[] {
  return restaurants.filter(r => r.areaSlug === areaSlug)
}

export function getRestaurantsByDish(dish: string): Restaurant[] {
  return restaurants.filter(r => r.dishes.some(d => d.toLowerCase().includes(dish.toLowerCase())))
}

export function getFeaturedRestaurants(): Restaurant[] {
  return restaurants.filter(r => r.tier === 'featured' || r.tier === 'spotlight')
}

export function getSpotlightRestaurants(): Restaurant[] {
  return restaurants.filter(r => r.tier === 'spotlight')
}

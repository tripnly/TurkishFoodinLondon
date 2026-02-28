'use client'

import { useState, useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import Link from 'next/link'

// ── Restaurant Data ──────────────────────────────────────────────
export interface Restaurant {
  name: string
  area: string
  areaSlug: string
  lat: number
  lng: number
  type: string        // 'restaurant' | 'bakery' | 'dessert'
  priceRange: string  // '£' | '££' | '£££'
  dishes: string[]    // what they're known for
  address: string
  description: string
  link: string        // internal link to the page where they appear
}
const restaurants: Restaurant[] = [
  // ── Green Lanes ──
  {
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
  },
  {
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
  },  {
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
  },
  {
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
  },
  {
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
  },  {
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
  },
  {
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
  },
  // ── Dalston ──
  {
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
  },  {
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
  },
  // ── Stoke Newington ──
  {
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
  },
  // ── Wood Green ──
  {
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
  },  {
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
  },
  // ── Finsbury Park ──
  {
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
  },
  {
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
  },  // ── Edmonton ──
  {
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
  },
  {
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
  },
  {
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
  },
]
// ── Custom Marker Icons ──────────────────────────────────────────
const areaColors: Record<string, string> = {
  'Green Lanes': '#10b981',    // emerald
  'Dalston': '#e879a0',        // rose
  'Stoke Newington': '#38bdf8', // sky
  'Wood Green': '#f59e0b',     // amber
  'Finsbury Park': '#a78bfa',  // violet
  'Edmonton': '#2dd4bf',       // teal
}

const typeIcons: Record<string, string> = {
  restaurant: '🍖',
  bakery: '🥯',
  dessert: '🍯',
}

function createIcon(area: string) {
  const color = areaColors[area] || '#C41E3A'
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      background: ${color};
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: white;
      font-weight: bold;
    ">${area.charAt(0)}</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -20],
  })
}
// ── Fly-to helper ──────────────────────────────────────────────
function FlyTo({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap()
  map.flyTo([lat, lng], 15, { duration: 0.8 })
  return null
}

// ── Filter options ──────────────────────────────────────────────
const areas = ['All', ...Object.keys(areaColors)]
const types = ['All', 'restaurant', 'bakery', 'dessert']
const typeLabels: Record<string, string> = {
  All: 'All Types',
  restaurant: '🍖 Restaurant',
  bakery: '🥯 Bakery',
  dessert: '🍯 Dessert',
}

// ── Main Component ──────────────────────────────────────────────
export default function MapClient() {
  const [selectedArea, setSelectedArea] = useState('All')
  const [selectedType, setSelectedType] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeRestaurant, setActiveRestaurant] = useState<Restaurant | null>(null)

  const filtered = useMemo(() => {
    return restaurants.filter((r) => {
      if (selectedArea !== 'All' && r.area !== selectedArea) return false
      if (selectedType !== 'All' && r.type !== selectedType) return false
      if (searchQuery) {
        const q = searchQuery.toLowerCase()
        return (
          r.name.toLowerCase().includes(q) ||
          r.area.toLowerCase().includes(q) ||
          r.dishes.some((d) => d.toLowerCase().includes(q))
        )
      }
      return true
    })
  }, [selectedArea, selectedType, searchQuery])
  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      {/* Search + Filters */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-[1400px] mx-auto">
          {/* Search */}
          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Search restaurants, dishes, areas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-turkish-red/20 focus:border-turkish-red"
            />
            <svg className="absolute left-3 top-3 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          {/* Area pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {areas.map((area) => (
              <button
                key={area}
                onClick={() => setSelectedArea(area)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedArea === area
                    ? 'bg-turkish-red text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {area === 'All' ? 'All Areas' : `📍 ${area}`}
              </button>
            ))}
          </div>          {/* Type pills */}
          <div className="flex gap-2 mt-2">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedType === type
                    ? 'bg-navy text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {typeLabels[type]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Split: Cards + Map */}
      <div className="flex flex-1 overflow-hidden">
        {/* Card List */}
        <div className="w-full md:w-[420px] overflow-y-auto border-r border-gray-200 bg-gray-50">
          <div className="px-4 py-3 border-b border-gray-100 bg-white">
            <p className="text-sm text-gray-500 font-medium">{filtered.length} spots to explore</p>
          </div>
          <div className="p-3 space-y-3">
            {filtered.map((r) => (
              <button
                key={r.name}
                onClick={() => setActiveRestaurant(r)}
                className={`w-full text-left bg-white border rounded-xl p-4 transition-all hover:shadow-md hover:-translate-y-0.5 ${
                  activeRestaurant?.name === r.name
                    ? 'border-turkish-red shadow-md ring-1 ring-turkish-red/20'
                    : 'border-gray-200'
                }`}
              >                {/* Card header */}
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-navy text-sm">{r.name}</h3>
                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                      <span>📍</span> {r.area}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{ background: `${areaColors[r.area]}20`, color: areaColors[r.area] }}
                    >
                      {r.area}
                    </span>
                  </div>
                </div>
                {/* Description */}
                <p className="text-xs text-gray-600 leading-relaxed mb-3 line-clamp-2">{r.description}</p>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {r.dishes.slice(0, 4).map((d) => (
                    <span key={d} className="bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded-full">
                      {d}
                    </span>
                  ))}
                  <span className="text-[10px] text-gray-400 px-1 py-0.5">{r.priceRange}</span>
                </div>
              </button>
            ))}

            {filtered.length === 0 && (
              <div className="text-center py-12">
                <p className="text-4xl mb-3">🔍</p>
                <p className="text-gray-500 text-sm">No restaurants match your filters.</p>
                <button
                  onClick={() => { setSelectedArea('All'); setSelectedType('All'); setSearchQuery('') }}
                  className="text-turkish-red text-sm mt-2 hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
        {/* Map */}
        <div className="hidden md:block flex-1 relative">
          <MapContainer
            center={[51.575, -0.090]}
            zoom={12}
            className="h-full w-full"
            zoomControl={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {activeRestaurant && (
              <FlyTo lat={activeRestaurant.lat} lng={activeRestaurant.lng} />
            )}

            {filtered.map((r) => (
              <Marker
                key={r.name}
                position={[r.lat, r.lng]}
                icon={createIcon(r.area)}
                eventHandlers={{
                  click: () => setActiveRestaurant(r),
                }}
              >
                <Popup>
                  <div className="min-w-[200px]">
                    <h3 className="font-bold text-sm mb-1">{r.name}</h3>
                    <p className="text-xs text-gray-600 mb-2">{r.description}</p>
                    <p className="text-xs text-gray-500 mb-2">📍 {r.address}</p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {r.dishes.map((d) => (
                        <span key={d} className="bg-gray-100 text-[10px] px-1.5 py-0.5 rounded">{d}</span>
                      ))}
                    </div>
                    <Link
                      href={r.link}
                      className="text-turkish-red text-xs font-medium hover:underline"
                    >
                      Read full guide →
                    </Link>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
          {/* Map Legend */}
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-3 z-[1000]">
            <p className="text-[10px] font-semibold text-navy mb-2 uppercase tracking-wide">Areas</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              {Object.entries(areaColors).map(([area, color]) => (
                <button
                  key={area}
                  onClick={() => setSelectedArea(area === selectedArea ? 'All' : area)}
                  className="flex items-center gap-1.5 text-[11px] text-gray-600 hover:text-navy"
                >
                  <span
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ background: color }}
                  />
                  {area}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Map hidden, show link */}
        <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
          <button
            onClick={() => {
              const el = document.querySelector('.leaflet-container')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-turkish-red text-white px-6 py-3 rounded-full shadow-lg text-sm font-semibold"
          >
            🗺️ Show Map
          </button>
        </div>
      </div>
    </div>
  )
}
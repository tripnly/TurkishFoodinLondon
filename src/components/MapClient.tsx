'use client'

import { useState, useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import Link from 'next/link'
import { restaurants, areaColors, type Restaurant } from '@/data/restaurants'

// ── Custom Marker Icons ──────────────────────────────────────────
const typeIcons: Record<string, string> = {
  restaurant: '🍖',
  bakery: '🥯',
  dessert: '🍯',
}

function createIcon(area: string, tier: string) {
  const color = areaColors[area] || '#C41E3A'
  const isFeatured = tier === 'featured' || tier === 'spotlight'
  const borderColor = isFeatured ? '#D4AF37' : 'white'
  const borderWidth = isFeatured ? '3px' : '3px'
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      background: ${color};
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: ${borderWidth} solid ${borderColor};
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

// ── Directions URL helper ──────────────────────────────────────
function getDirectionsUrl(r: Restaurant) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(r.address)}`
}

// ── Tier badge ─────────────────────────────────────────────────
function TierBadge({ tier }: { tier: string }) {
  if (tier === 'spotlight') {
    return (
      <span className="inline-flex items-center gap-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wide">
        ★ Editor&apos;s Pick
      </span>
    )
  }
  if (tier === 'featured') {
    return (
      <span className="inline-flex items-center gap-0.5 bg-turkish-red text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wide">
        ✦ Featured
      </span>
    )
  }
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

  // Sort: spotlight first, then featured, then free
  const filtered = useMemo(() => {
    const tierOrder: Record<string, number> = { spotlight: 0, featured: 1, free: 2 }
    return restaurants
      .filter((r) => {
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
      .sort((a, b) => (tierOrder[a.tier] ?? 2) - (tierOrder[b.tier] ?? 2))
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
          </div>
          {/* Type pills */}
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
                key={r.id}
                onClick={() => setActiveRestaurant(r)}
                className={`w-full text-left bg-white border rounded-xl p-4 transition-all hover:shadow-md hover:-translate-y-0.5 ${
                  activeRestaurant?.id === r.id
                    ? 'border-turkish-red shadow-md ring-1 ring-turkish-red/20'
                    : r.tier === 'spotlight'
                    ? 'border-amber-300 bg-amber-50/30'
                    : r.tier === 'featured'
                    ? 'border-turkish-red/30'
                    : 'border-gray-200'
                }`}
              >
                {/* Card header */}
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-navy text-sm">{r.name}</h3>
                      <TierBadge tier={r.tier} />
                    </div>
                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                      <span>📍</span> {r.area}
                    </p>
                  </div>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ background: `${areaColors[r.area]}20`, color: areaColors[r.area] }}
                  >
                    {r.area}
                  </span>
                </div>
                {/* Description */}
                <p className="text-xs text-gray-600 leading-relaxed mb-3 line-clamp-2">{r.description}</p>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {r.dishes.slice(0, 4).map((d) => (
                    <span key={d} className="bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded-full">
                      {d}
                    </span>
                  ))}
                  <span className="text-[10px] text-gray-400 px-1 py-0.5">{r.priceRange}</span>
                </div>
                {/* Action row */}
                <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                  <a
                    href={getDirectionsUrl(r)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-[11px] font-medium text-blue-600 hover:text-blue-800 px-2 py-1 rounded-md hover:bg-blue-50 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Directions
                  </a>
                  <Link
                    href={r.link}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-[11px] font-medium text-turkish-red hover:text-turkish-red-dark px-2 py-1 rounded-md hover:bg-red-50 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Full guide
                  </Link>
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
                key={r.id}
                position={[r.lat, r.lng]}
                icon={createIcon(r.area, r.tier)}
                eventHandlers={{
                  click: () => setActiveRestaurant(r),
                }}
              >
                <Popup>
                  <div className="min-w-[220px]">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-sm">{r.name}</h3>
                      <TierBadge tier={r.tier} />
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{r.description}</p>
                    <p className="text-xs text-gray-500 mb-2">📍 {r.address}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {r.dishes.map((d) => (
                        <span key={d} className="bg-gray-100 text-[10px] px-1.5 py-0.5 rounded">{d}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                      <a
                        href={getDirectionsUrl(r)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-xs font-medium hover:underline flex items-center gap-1"
                      >
                        📍 Directions
                      </a>
                      <Link
                        href={r.link}
                        className="text-turkish-red text-xs font-medium hover:underline"
                      >
                        Read guide →
                      </Link>
                    </div>
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

        {/* Mobile: Map toggle */}
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

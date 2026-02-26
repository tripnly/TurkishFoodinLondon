import Link from 'next/link'
import { MapPin, Clock, Utensils } from 'lucide-react'

// Area data
const areas = [
  {
    slug: 'green-lanes',
    name: 'Green Lanes',
    description: "London's Turkish heartland. A mile of restaurants, bakeries, and late-night grill houses.",
    stats: '12+ restaurants • 3 bakeries',
    gradient: 'from-emerald-500 to-green-400',
  },
  {
    slug: 'dalston',
    name: 'Dalston',
    description: 'Where Turkish tradition meets East London energy. BYOB culture and late-night feasts.',
    stats: '8+ restaurants • BYOB friendly',
    gradient: 'from-fuchsia-400 to-rose-400',
  },
  {
    slug: 'stoke-newington',
    name: 'Stoke Newington',
    description: 'Neighbourhood gems and the famous Best Turkish Kebab. Casual, local, excellent.',
    stats: '5+ restaurants • Late night',
    gradient: 'from-sky-400 to-cyan-400',
  },
]

// Dish data
const dishes = [
  { slug: 'doner', name: 'Best Döner', description: 'From İskender to wraps', icon: '🥙' },
  { slug: 'breakfast', name: 'Turkish Breakfast', description: 'The full kahvaltı spread', icon: '🍳' },
  { slug: 'lahmacun', name: 'Best Lahmacun', description: 'Turkish flatbread perfection', icon: '🫓' },
  { slug: 'kunefe', name: 'Best Künefe', description: 'Hot cheese, crispy pastry', icon: '🍯' },
]

// Quick nav items
const quickNav = [
  { href: '/areas/green-lanes', label: 'Green Lanes' },
  { href: '/areas/dalston', label: 'Dalston' },
  { href: '/areas/stoke-newington', label: 'Stoke Newington' },
  { href: '/dishes/doner', label: 'Döner' },
  { href: '/dishes/lahmacun', label: 'Lahmacun' },
  { href: '/dishes/breakfast', label: 'Breakfast' },
  { href: '/dishes/kunefe', label: 'Künefe' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-light text-white py-20 px-5 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
            🇹🇷 Written by someone who actually knows
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-5">
            The Insider's Guide to{' '}
            <span className="text-gold">Turkish Food</span> in London
          </h1>
          <p className="text-white/85 text-lg max-w-xl mx-auto mb-8">
            From Green Lanes institutions to Dalston ocakbaşı. The restaurants, 
            the dishes, the neighbourhoods—explained by someone who grew up with this food.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/best-turkish-restaurants-london" className="btn-primary">
              Read the Guide
            </Link>
            <Link href="/map" className="btn-secondary">
              Explore the Map
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <nav className="bg-white border-b border-gray-100 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-5 flex gap-0">
          {quickNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-5 py-4 text-gray-500 text-sm font-medium whitespace-nowrap
                         border-b-2 border-transparent hover:text-turkish-red hover:border-turkish-red
                         transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-5 py-12">
        
        {/* Featured Pillar */}
        <section className="bg-gradient-to-br from-cream to-white rounded-2xl p-8 md:p-10 mb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-4 leading-snug">
                The 25 Best Turkish Restaurants in London (2025)
              </h2>
              <p className="text-gray-600 mb-5">
                The definitive guide to Turkish food in London. Not the tourist traps. 
                Not the chains. The places where Turkish Londoners actually eat—from 
                neighbourhood ocakbaşı joints to elevated dining rooms.
              </p>
              <div className="flex flex-wrap gap-5 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1.5">
                  <MapPin size={16} /> 25 restaurants
                </span>
                <span className="flex items-center gap-1.5">
                  <Utensils size={16} /> 6 neighbourhoods
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={16} /> 15 min read
                </span>
              </div>
              <Link href="/best-turkish-restaurants-london" className="btn-primary">
                Read the Full Guide
              </Link>
            </div>
            <div className="bg-gradient-to-br from-turkish-red to-orange-500 rounded-xl h-64 md:h-72 flex items-center justify-center text-white font-display text-xl text-center p-8">
              The 25 Best Turkish Restaurants in London
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="mb-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="section-header">Explore by Area</h2>
              <p className="section-subheader">London's Turkish food scene, neighbourhood by neighbourhood</p>
            </div>
            <Link href="/areas" className="text-turkish-red text-sm font-medium hover:underline">
              View all areas →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link key={area.slug} href={`/areas/${area.slug}`} className="card overflow-hidden">
                <div className={`bg-gradient-to-br ${area.gradient} h-40 flex items-end p-5`}>
                  <h3 className="font-display text-2xl font-bold text-white">{area.name}</h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm mb-3">{area.description}</p>
                  <p className="text-gray-400 text-xs">{area.stats}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Dishes */}
        <section className="mb-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="section-header">Explore by Dish</h2>
              <p className="section-subheader">Find the best of each Turkish classic in London</p>
            </div>
            <Link href="/dishes" className="text-turkish-red text-sm font-medium hover:underline">
              View all dishes →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {dishes.map((dish) => (
              <Link 
                key={dish.slug} 
                href={`/dishes/${dish.slug}`} 
                className="card p-6 text-center hover:border-turkish-red"
              >
                <div className="text-4xl mb-3">{dish.icon}</div>
                <h3 className="font-semibold text-navy mb-1">{dish.name}</h3>
                <p className="text-gray-500 text-xs">{dish.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-navy rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                Find Turkish Food Near You
              </h2>
              <p className="text-white/75 mb-6">
                Explore our interactive map of London's best Turkish restaurants. 
                Filter by area, dish type, or vibe.
              </p>
              <Link href="/map" className="btn-primary">
                Open the Map
              </Link>
            </div>
            <div className="bg-navy-light rounded-xl h-64 flex items-center justify-center text-white/40 text-sm">
              [Interactive Map Coming Soon]
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-cream rounded-2xl p-8 md:p-12 text-center mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-3">
            Get the Insider Updates
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            New restaurants, seasonal dishes, and neighbourhood deep-dives. 
            No spam, just good food.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-turkish-red"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </section>

      </div>
    </>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'All Turkish Restaurants | Turkish Food in London',
  description: 'Browse all Turkish restaurants in London. Filter by area, cuisine type, and budget.',
}

export default function RestaurantsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-turkish-red to-orange-600 text-white py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
            All Restaurants
          </h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            Every Turkish restaurant we recommend in London.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-5 py-12">
        
        {/* Placeholder */}
        <div className="bg-cream rounded-xl p-12 text-center">
          <p className="text-6xl mb-4">🍽️</p>
          <h2 className="font-display text-2xl font-bold text-navy mb-4">
            Full Restaurant Directory Coming Soon
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            We're building a searchable directory of every Turkish restaurant we've reviewed. 
            Filter by area, cuisine, price, and more.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            In the meantime, explore by area or read our main guide:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/best-turkish-restaurants-london" className="btn-primary">
              Read the Guide
            </Link>
            <Link href="/areas" className="bg-white border border-gray-200 px-6 py-3 rounded-lg font-semibold text-sm text-navy hover:border-turkish-red transition-colors">
              Browse by Area
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}

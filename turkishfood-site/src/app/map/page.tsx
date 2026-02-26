import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Turkish Food Map | Turkish Food in London',
  description: 'Interactive map of the best Turkish restaurants in London. Find Turkish food near you.',
}

export default function MapPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-light text-white py-12 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
            Turkish Food Map
          </h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            Find Turkish restaurants near you.
          </p>
        </div>
      </section>

      {/* Map Container */}
      <div className="max-w-7xl mx-auto px-5 py-8">
        
        {/* Placeholder Map */}
        <div className="bg-gray-100 rounded-xl h-[500px] flex items-center justify-center mb-8">
          <div className="text-center">
            <p className="text-6xl mb-4">🗺️</p>
            <h2 className="font-display text-2xl font-bold text-navy mb-4">
              Interactive Map Coming Soon
            </h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              We're building an interactive map of every Turkish restaurant in our guide. 
              Filter by area, dish type, price, and hours.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6">
          <Link 
            href="/areas/green-lanes"
            className="card p-6 text-center hover:border-turkish-red"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-400 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-xl">
              📍
            </div>
            <h3 className="font-semibold text-navy">Green Lanes</h3>
            <p className="text-gray-500 text-sm">12+ restaurants</p>
          </Link>
          
          <Link 
            href="/areas/dalston"
            className="card p-6 text-center hover:border-turkish-red"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-rose-400 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-xl">
              📍
            </div>
            <h3 className="font-semibold text-navy">Dalston</h3>
            <p className="text-gray-500 text-sm">8+ restaurants</p>
          </Link>
          
          <Link 
            href="/areas/stoke-newington"
            className="card p-6 text-center hover:border-turkish-red"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-cyan-400 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-xl">
              📍
            </div>
            <h3 className="font-semibold text-navy">Stoke Newington</h3>
            <p className="text-gray-500 text-sm">5+ restaurants</p>
          </Link>
        </div>

      </div>
    </>
  )
}

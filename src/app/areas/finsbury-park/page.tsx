import { Metadata } from 'next'
import RestaurantCard from '@/components/RestaurantCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Finsbury Park Turkish Food Guide | Turkish Food in London',
  description: 'The complete guide to Turkish restaurants near Finsbury Park. Cafes, kebab spots, and bakeries where Green Lanes meets the Piccadilly line.',
}

const restaurants = [
  {
    name: 'Yayla',
    tagline: 'The All-Day Cafe | ££',
    description: 'Part cafe, part restaurant, Yayla does Turkish breakfast through to late-night grills. Popular with the local community for its reliable quality and friendly service. Their gözleme—hand-rolled stuffed flatbread cooked on a convex griddle—is excellent.',
    whatToOrder: 'Turkish breakfast (weekends), gözleme, lentil soup',
    address: 'Stroud Green Road, N4',
    hours: '8am-11pm daily',
    price: '£10-18pp',
    tip: 'The breakfast is a full spread—arrive with an empty stomach.',
  },
  {
    name: 'Petek',
    tagline: 'The Pide Specialist | ££',
    description: 'Small, family-run, and focused. Petek does excellent pide and kebabs without any fuss. The yumurtalı pide—cheese with a runny egg—is the comfort food of choice for locals.',
    whatToOrder: 'Yumurtalı pide, adana kebab, ayran',
    address: 'Stroud Green Road, N4',
    price: '£8-15pp',
  },  {
    name: 'Izgara',
    tagline: 'The Late-Night Option | ££',
    description: 'Open late and reliable. Izgara is where you end up after the pub or a gig at the Garage. Their döner is freshly carved and the mixed grill is solid value. Not fancy, but exactly what you need at midnight.',
    whatToOrder: 'Mixed döner wrap, chicken şiş, grilled halloumi',
    address: 'Seven Sisters Road, N4',
    hours: '11am-2am daily',
    price: '£8-15pp',
    tip: 'Perfect post-pub fuel—the döner wrap is enormous.',
  },
]

export default function FinsburyParkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-400 to-purple-400 text-white py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
            Finsbury Park Turkish Food Guide
          </h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            Where Green Lanes meets the Piccadilly line. Cafes, kebab spots, and 
            bakeries around Finsbury Park station.
          </p>
        </div>
      </section>
      {/* Quick Stats */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-5 py-4 flex flex-wrap gap-6 text-sm text-gray-600">
          <span>📍 Stroud Green Road / Seven Sisters Road, N4</span>
          <span>🍽️ 5+ restaurants</span>
          <span>🚇 Finsbury Park (Piccadilly / Victoria)</span>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-5 py-12">
        
        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-600 leading-relaxed">
            Finsbury Park sits at the southern gateway to London's Turkish corridor. 
            The station connects the Piccadilly and Victoria lines, making it one of the 
            most accessible entry points to the Turkish food scene. Walk north along 
            Stroud Green Road and you'll find a growing cluster of Turkish cafes, bakeries, 
            and casual restaurants.
          </p>
          <p>
            This isn't a destination dining area like Green Lanes—it's more about everyday 
            Turkish food done well. The restaurants here cater to the local community, 
            which means honest portions, fair prices, and food that tastes like home cooking.
          </p>
        </div>

        {/* Restaurants */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-navy mb-6">The Restaurants</h2>
          
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.name} {...restaurant} />
          ))}
        </section>
        {/* The Connection */}
        <section className="bg-cream rounded-xl p-6 mb-16">
          <h2 className="font-display text-xl font-bold text-navy mb-4">
            🚶 The Green Lanes Connection
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            Finsbury Park is the natural starting point for a Green Lanes food crawl:
          </p>
          <ol className="space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="bg-turkish-red text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
              <span><strong>Start at Finsbury Park station</strong> — Grab a simit or gözleme from a local bakery</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-turkish-red text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
              <span><strong>Walk or bus north</strong> — Take the W3 bus up to Manor House (10 mins)</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-turkish-red text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
              <span><strong>Hit Green Lanes</strong> — The main restaurant strip starts at Manor House</span>
            </li>
          </ol>
        </section>

        {/* Getting There */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-navy mb-4">Getting There</h2>
          <div className="prose prose-sm max-w-none text-gray-600">
            <p>
              <strong>Tube:</strong> Finsbury Park station (Piccadilly line, Victoria line) is 
              the main hub. One of the best-connected stations in North London.
            </p>
            <p>
              <strong>Overground:</strong> Finsbury Park is also on the Overground, connecting 
              to Highbury & Islington and beyond.
            </p>
            <p>
              <strong>To Green Lanes:</strong> The W3 bus from outside the station takes you 
              straight to Green Lanes in about 10 minutes.
            </p>
          </div>
        </section>

        {/* Related */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="font-display text-xl font-bold text-navy mb-4">
            Related Guides
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/areas/green-lanes" className="bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-cream hover:text-turkish-red transition-colors">
              📍 Green Lanes Guide
            </Link>
            <Link href="/areas/dalston" className="bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-cream hover:text-turkish-red transition-colors">
              📍 Dalston Guide
            </Link>
            <Link href="/dishes/doner" className="bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-cream hover:text-turkish-red transition-colors">
              🥙 Best Döner
            </Link>
          </div>
        </div>

      </article>
    </>
  )
}
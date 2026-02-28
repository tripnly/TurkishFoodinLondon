import { Metadata } from 'next'
import RestaurantCard from '@/components/RestaurantCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wood Green Turkish Food Guide | Turkish Food in London',
  description: 'The complete guide to Turkish restaurants in Wood Green, N22. Supermarkets, bakeries, and family restaurants serving authentic Turkish food in North London.',
}

const restaurants = [
  {
    name: 'Likya',
    tagline: 'The Neighbourhood Anchor | ££',
    description: 'A proper family restaurant that serves the local Turkish community. Likya does everything from full breakfasts to mixed grills, and does it all consistently well. The pide is baked in-house and the meze is made fresh daily.',
    whatToOrder: 'Mixed grill, pide, Turkish breakfast on weekends',
    address: 'High Road, Wood Green, N22',
    hours: '9am-11pm daily',
    price: '£12-20pp',
    tip: 'Weekend breakfast is the move—come hungry.',
  },
  {
    name: 'Kervan Sofrası',
    tagline: 'The Old Faithful | ££',
    description: 'Been here for years and keeps the local community fed. Kervan Sofrası specialises in home-style Turkish cooking—the kind of food that Turkish families actually eat every day. Their lentil soup and mantı are standouts.',
    whatToOrder: 'Mercimek çorbası (lentil soup), mantı (Turkish dumplings), lamb güveç (casserole)',
    address: 'High Road, Wood Green, N22',
    price: '£10-18pp',
  },  {
    name: 'Gökyüzü Wood Green',
    tagline: 'The Branch | ££',
    description: 'A smaller outpost of the Green Lanes giant. Same menu, same quality, less queue. If you can\'t face the weekend crowds on Green Lanes, this is your backup plan.',
    whatToOrder: 'Lamb şiş, adana kebab, chicken wings',
    address: 'High Road, Wood Green, N22',
    hours: '10am-11pm daily',
    price: '£12-20pp',
    tip: 'Easier to get a table than the Green Lanes original, especially on weekends.',
  },
]

const shops = [
  {
    name: 'TFC Supermarket',
    description: 'The Turkish food supermarket. Fresh bread, imported cheeses, spices, Turkish tea, and a butcher counter with halal meat cut to order.',
  },
  {
    name: 'Wood Green Bakery',
    description: 'Fresh simit (sesame bread rings), börek, and pide bread baked daily. Grab a simit for the bus.',
  },
]
export default function WoodGreenPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-400 to-orange-400 text-white py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
            Wood Green Turkish Food Guide
          </h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            The northern frontier of Turkish London. Supermarkets, bakeries, and family 
            restaurants in N22.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-5 py-4 flex flex-wrap gap-6 text-sm text-gray-600">
          <span>📍 High Road, N22</span>
          <span>🍽️ 6+ restaurants</span>
          <span>🛒 Turkish supermarkets</span>
          <span>🚇 Wood Green (Piccadilly)</span>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-5 py-12">
        
        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-600 leading-relaxed">
            Wood Green sits north of Green Lanes on the Piccadilly line, and its Turkish 
            food scene has been growing steadily. Less famous than its neighbour to the south, 
            Wood Green offers a more local, less touristy experience—family restaurants that 
            serve the community, Turkish supermarkets stocked with imported goods, and bakeries 
            turning out fresh simit and börek daily.
          </p>
          <p>
            This is where Turkish Londoners do their weekly shop. The restaurants here aren't 
            trying to impress food bloggers—they're feeding families, and that shows in the 
            generous portions and honest pricing.
          </p>
        </div>
        {/* Restaurants */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-navy mb-6">The Restaurants</h2>
          
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.name} {...restaurant} />
          ))}
        </section>

        {/* Shops */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-navy mb-6">Turkish Shops & Bakeries</h2>
          
          <div className="grid gap-4">
            {shops.map((shop) => (
              <div key={shop.name} className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-1">{shop.name}</h3>
                <p className="text-gray-600 text-sm">{shop.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Getting There */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-navy mb-4">Getting There</h2>
          <div className="prose prose-sm max-w-none text-gray-600">
            <p>
              <strong>Tube:</strong> Wood Green station (Piccadilly line) puts you right on 
              the High Road. One stop north of Turnpike Lane.
            </p>
            <p>
              <strong>From Green Lanes:</strong> If you're already on Green Lanes, Wood Green 
              is a 10-minute bus ride north on the W3.
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
            <Link href="/areas/finsbury-park" className="bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-cream hover:text-turkish-red transition-colors">
              📍 Finsbury Park Guide
            </Link>
            <Link href="/best-turkish-restaurants-london" className="bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-cream hover:text-turkish-red transition-colors">
              🍖 25 Best Restaurants
            </Link>
          </div>
        </div>

      </article>
    </>
  )
}
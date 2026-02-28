import { Metadata } from 'next'
import RestaurantCard from '@/components/RestaurantCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Edmonton Turkish Food Guide | Turkish Food in London',
  description: 'The complete guide to Turkish restaurants in Edmonton, N18. North London\'s hidden Turkish quarter with proper neighbourhood restaurants and the best-value Turkish meals.',
}

const restaurants = [
  {
    name: 'Develi',
    tagline: 'The Community Favourite | ££',
    description: 'Develi is Edmonton\'s anchor Turkish restaurant. Named after the Cappadocian town, it serves proper southeastern Turkish cuisine—generous, well-spiced, and priced for locals. The lamb güveç (slow-cooked casserole) and the pide are standouts.',
    whatToOrder: 'Lamb güveç, kaşarlı pide, mixed grill for two',
    address: 'Fore Street, Edmonton, N18',
    hours: '10am-11pm daily',
    price: '£10-18pp',
    tip: 'The portions are huge—share a mixed grill between two and add a pide on the side.',
  },
  {
    name: 'Edmonton Ocakbaşı',
    tagline: 'The Charcoal Grill | ££',
    description: 'A proper ocakbaşı with an open charcoal grill you can sit around and watch. The lamb adana is hand-minced, the chicken wings are marinated overnight, and the bread comes fresh from the oven. No frills, just good Turkish grilling.',
    whatToOrder: 'Adana kebab, chicken wings, lamb şiş, fresh bread',
    address: 'Fore Street, Edmonton, N18',
    price: '£10-16pp',
  },  {
    name: 'Hasan\'s Kitchen',
    tagline: 'The Home Cook | £',
    description: 'Tiny, family-run, and cooking food that tastes like someone\'s mum made it. Hasan\'s does daily specials based on what\'s fresh—proper Turkish home cooking that you won\'t find on Green Lanes. The mercimek çorbası (lentil soup) is the best in North London.',
    whatToOrder: 'Daily special, mercimek çorbası, gözleme',
    address: 'Fore Street, Edmonton, N18',
    price: '£6-12pp',
    tip: 'Cash preferred. The daily special is always the best choice.',
  },
]

export default function EdmontonPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-400 to-emerald-400 text-white py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
            Edmonton Turkish Food Guide
          </h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            North London's hidden Turkish quarter. Proper neighbourhood restaurants 
            and some of the best-value Turkish food in the city.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-5 py-4 flex flex-wrap gap-6 text-sm text-gray-600">
          <span>📍 Fore Street, N18</span>
          <span>🍽️ 4+ restaurants</span>
          <span>💰 Budget-friendly</span>
          <span>🚂 Edmonton Green (Overground)</span>
        </div>
      </div>
      {/* Content */}
      <article className="max-w-3xl mx-auto px-5 py-12">
        
        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-600 leading-relaxed">
            Edmonton is where Turkish London extends furthest north. The area around 
            Edmonton Green has a well-established Turkish community, and with it comes 
            the kind of neighbourhood restaurants that food tourists never find—family-run 
            places serving generous portions at prices that would shock anyone used to 
            central London.
          </p>
          <p>
            This is not a destination dining area. There are no queues, no Instagram 
            influencers, no BYOB wine lists. What there is: honest Turkish food cooked 
            by people who've been doing it for decades, at prices that make Green Lanes 
            look expensive.
          </p>
        </div>

        {/* Restaurants */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-navy mb-6">The Restaurants</h2>
          
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.name} {...restaurant} />
          ))}
        </section>

        {/* Why Edmonton */}
        <section className="bg-cream rounded-xl p-6 mb-16">
          <h2 className="font-display text-xl font-bold text-navy mb-4">
            💰 Why Edmonton?
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            Three reasons to make the trip north:
          </p>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>→ <strong>Value:</strong> Expect to pay 20-30% less than Green Lanes for comparable quality</li>
            <li>→ <strong>Authenticity:</strong> These restaurants cook for their community, not tourists</li>
            <li>→ <strong>No queues:</strong> Walk in, sit down, eat. Even on weekends.</li>
          </ul>
        </section>
        {/* Getting There */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-navy mb-4">Getting There</h2>
          <div className="prose prose-sm max-w-none text-gray-600">
            <p>
              <strong>Overground:</strong> Edmonton Green station (London Overground from 
              Liverpool Street) puts you in the centre of the action.
            </p>
            <p>
              <strong>Bus:</strong> The 149 from London Bridge and the 259 from King's Cross 
              both stop at Edmonton Green.
            </p>
            <p>
              <strong>From Green Lanes:</strong> The 141 bus runs from Wood Green to Edmonton 
              in about 15 minutes.
            </p>
          </div>
        </section>

        {/* Related */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="font-display text-xl font-bold text-navy mb-4">
            Related Guides
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/areas/wood-green" className="bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-cream hover:text-turkish-red transition-colors">
              📍 Wood Green Guide
            </Link>
            <Link href="/areas/green-lanes" className="bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-cream hover:text-turkish-red transition-colors">
              📍 Green Lanes Guide
            </Link>
            <Link href="/dishes/adana-kebab" className="bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-cream hover:text-turkish-red transition-colors">
              🍢 Best Adana Kebab
            </Link>
          </div>
        </div>

      </article>
    </>
  )
}
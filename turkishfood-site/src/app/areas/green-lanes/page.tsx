import { Metadata } from 'next'
import RestaurantCard from '@/components/RestaurantCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Green Lanes Turkish Food Guide | Turkish Food in London',
  description: 'The complete guide to Turkish restaurants on Green Lanes, Harringay. From Gökyüzü to Antepliler—where to eat, what to order, and how to navigate London\'s Turkish heartland.',
}

const restaurants = [
  {
    name: 'Gökyüzü',
    tagline: 'The Institution | ££',
    description: 'The sprawling anchor of Green Lanes. Multiple dining rooms, a wood-fired oven producing fresh bread continuously, and a menu that runs to several pages. This is where Turkish families come for celebrations.',
    whatToOrder: 'Full Platter (sharing), lamb şiş, chicken beyti, breakfast (8am-4pm)',
    address: '26-28 Grand Parade, N4 1LG',
    hours: '8am-12am daily',
    price: '£15-25pp',
    tip: 'Wood-fired bread is unlimited—ask for more.',
  },
  {
    name: 'Selale',
    tagline: 'The Refined Alternative | ££',
    description: 'Slightly more polished than its neighbours. The lamb ribs are exceptional, the meze is consistent, and the service is attentive without being rushed.',
    whatToOrder: 'Lamb ribs, adana kebab, hummus',
    address: '51 Grand Parade, N4 1AG',
    hours: '8am-12am daily',
    price: '£18-28pp',
  },
  {
    name: 'Hala Restaurant',
    tagline: 'The Family Favourite | ££',
    description: 'Warm, welcoming, and consistently excellent. Hala specializes in the kind of Turkish home cooking that makes regulars out of first-time visitors. Their gözleme (stuffed flatbread) is hand-rolled and only available until 4pm.',
    whatToOrder: 'Mixed grill, gözleme (before 4pm), meze platter',
    address: '29-31 Grand Parade, N4 1LG',
    price: '£15-22pp',
    tip: 'Free tea with gözleme order.',
  },
  {
    name: 'Antepliler',
    tagline: 'The Gaziantep Specialist | ££',
    description: 'Named after the southeastern Turkish city famous for its cuisine. The sogan kebab—minced lamb with pomegranate sauce and grilled shallots—is a signature you won\'t find elsewhere.',
    whatToOrder: 'Sogan kebab, İskender (next door), künefe (dessert cafe)',
    address: '46 Grand Parade, N4 1AG',
    price: '£15-25pp',
    tip: 'This is a complex: restaurant, döner house, künefe cafe. Plan to visit all three.',
  },
]

const bakeries = [
  {
    name: 'Yasar Halim',
    description: 'The baklava authority. Pistachios imported from Gaziantep. Proper Turkish delight.',
  },
  {
    name: 'Antepliler Künefe',
    description: 'Hot künefe made to order. Crispy kadayıf, stretchy cheese, sugar syrup, clotted cream.',
  },
  {
    name: 'Bebek Baklava',
    description: 'High-end baklava in sleek packaging. Good for gifts.',
  },
]

export default function GreenLanesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-500 to-green-400 text-white py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
            Green Lanes Turkish Food Guide
          </h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            London's Turkish heartland. A mile of restaurants, bakeries, and late-night grill houses 
            in Harringay, N4.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-5 py-4 flex flex-wrap gap-6 text-sm text-gray-600">
          <span>📍 Grand Parade, N4</span>
          <span>🍽️ 12+ restaurants</span>
          <span>🥯 3 bakeries</span>
          <span>🚇 Manor House / Turnpike Lane</span>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-5 py-12">
        
        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-600 leading-relaxed">
            Green Lanes is the centre of Turkish London. Starting around Manor House tube and 
            stretching north towards Turnpike Lane, this mile of Grand Parade is lined with 
            ocakbaşı restaurants, baklava shops, and bakeries that feel more like Istanbul than England.
          </p>
          <p>
            On weekends, the street fills with Turkish families, the smell of charcoal drifts 
            across the pavement, and finding parking requires commitment. This is the real thing—
            not Turkish food adapted for British tastes, but the food Turkish Londoners cook 
            for themselves.
          </p>
        </div>

        {/* Restaurants */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-navy mb-6">The Restaurants</h2>
          
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.name} {...restaurant} />
          ))}
        </section>

        {/* Bakeries */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-navy mb-6">The Bakeries</h2>
          
          <div className="grid gap-4">
            {bakeries.map((bakery) => (
              <div key={bakery.name} className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-1">{bakery.name}</h3>
                <p className="text-gray-600 text-sm">{bakery.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Food Crawl */}
        <section className="bg-cream rounded-xl p-6 mb-16">
          <h2 className="font-display text-xl font-bold text-navy mb-4">
            🚶 The Green Lanes Food Crawl
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            The optimal way to experience Green Lanes in 4 stops:
          </p>
          <ol className="space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="bg-turkish-red text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
              <span><strong>Start at Hala or Selale</strong> — Lahmacun and a few meze to warm up</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-turkish-red text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
              <span><strong>Main event at Gökyüzü</strong> — Mixed grill, lamb ribs, the works</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-turkish-red text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
              <span><strong>Künefe at Antepliler</strong> — Hot, cheesy, essential</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-turkish-red text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
              <span><strong>Baklava from Yasar Halim</strong> — Take some home</span>
            </li>
          </ol>
        </section>

        {/* Practical Info */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-navy mb-4">Getting There</h2>
          <div className="prose prose-sm max-w-none text-gray-600">
            <p>
              <strong>Tube:</strong> Manor House (Piccadilly line) puts you at the southern end. 
              Turnpike Lane (Piccadilly line) is at the northern end. Both are about 10 minutes walk 
              from the main restaurant stretch.
            </p>
            <p>
              <strong>Bus:</strong> The W3 and W7 buses run the length of Green Lanes.
            </p>
            <p>
              <strong>Driving:</strong> Possible on weekdays, challenging on weekends. Street parking 
              is free after 6:30pm and on Sundays.
            </p>
          </div>
        </section>

        {/* Related */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="font-display text-xl font-bold text-navy mb-4">
            Related Guides
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/best-turkish-restaurants-london" className="bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-cream hover:text-turkish-red transition-colors">
              🍖 25 Best Turkish Restaurants
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

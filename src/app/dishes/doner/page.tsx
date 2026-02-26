import { Metadata } from 'next'
import RestaurantCard from '@/components/RestaurantCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Döner in London | Turkish Food in London',
  description: 'Where to find proper Turkish döner kebab in London. From late-night takeaways to sit-down İskender feasts—the definitive guide.',
}

const donerTypes = [
  { style: 'Döner Wrap/Dürüm', description: 'Döner in thin lavash bread', where: 'Best Turkish Kebab, Fez Mangal' },
  { style: 'İskender Kebab', description: 'Döner on bread with yogurt, tomato sauce & butter', where: 'Antepliler Döner' },
  { style: 'Döner Plate', description: 'Döner with rice, salad, bread', where: 'Gökyüzü, most ocakbaşı' },
  { style: 'Mixed Döner', description: 'Lamb + chicken together', where: 'Available everywhere' },
]

const restaurants = [
  {
    name: 'Antepliler Döner',
    tagline: 'The İskender Kings | Green Lanes | ££',
    description: 'The İskender kebab here is legendary: thin slices of lamb döner piled onto fresh pide bread, topped with thick yogurt, house-made tomato sauce, and—crucially—a generous pour of melted sheep butter brought to your table sizzling in a copper pan.',
    whatToOrder: 'İskender kebab (the signature), mixed döner wrap, Sultan Ahmet köftesi',
    address: '44 Grand Parade, N4 1AG',
    hours: '11am-12am daily',
    price: '£8-15',
    tip: 'Walk next door to Antepliler Künefe for dessert after.',
  },
  {
    name: 'The Best Turkish Kebab',
    tagline: 'The Stoke Newington Legend | £',
    description: 'The name is bold. The kebab delivers. Everything is prepared in front of you. The salad is chopped fresh. The meat is sliced from the spit as you watch. Portions are enormous—one serving is genuinely enough for two people.',
    whatToOrder: 'Mixed döner wrap with everything, chicken shish wrap',
    address: '125 Stoke Newington Road, N16 8BT',
    hours: '11am-3am daily',
    price: '£6-10',
    tip: 'There\'s usually a queue—it moves fast. Perfect post-pub fuel.',
  },
  {
    name: 'Mangal 2',
    tagline: 'Elevated Döner | Dalston | £££',
    description: 'Döner as fine dining. Their mutton tantuni—chopped and grilled mutton loin served on pillowy sourdough—shows what happens when döner meets Nordic precision.',
    whatToOrder: 'Mutton tantuni, lamb döner with accompaniments',
    address: '4 Stoke Newington Road, N16 7XN',
    hours: 'Mon-Sat 6pm-11pm',
    price: '£15-25',
    tip: 'Book ahead. This is destination dining.',
  },
]

export default function DonerPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-600 to-orange-500 text-white py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-4">🥙</div>
          <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
            Best Döner in London
          </h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            From late-night takeaways to sit-down İskender feasts—where to find 
            proper Turkish döner kebab in London.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-5 py-12">
        
        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-turkish-red pl-5">
            <strong>Proper Turkish döner is something else entirely.</strong> The meat should be 
            marinated, layered on the spit by hand, and cooked slowly until the outer layer is 
            crispy while the inside stays juicy. The best döner spots make their meat fresh, 
            on-site, daily.
          </p>
        </div>

        {/* Types Table */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-navy mb-4">Types of Döner</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left p-3 font-semibold">Style</th>
                  <th className="text-left p-3 font-semibold">What It Is</th>
                  <th className="text-left p-3 font-semibold">Where to Get It</th>
                </tr>
              </thead>
              <tbody>
                {donerTypes.map((type, i) => (
                  <tr key={type.style} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-3 font-medium">{type.style}</td>
                    <td className="p-3 text-gray-600">{type.description}</td>
                    <td className="p-3 text-gray-600">{type.where}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Best Places */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-navy mb-6">The Best Döner in London</h2>
          
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.name} {...restaurant} />
          ))}
        </section>

        {/* İskender Explainer */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 mb-12">
          <h2 className="font-display text-xl font-bold text-amber-900 mb-4">
            🥘 İskender Kebab Explained
          </h2>
          <p className="text-gray-700 mb-4">
            The king of döner dishes. Named after İskender Efendi of Bursa who 
            popularized the vertical spit in the 19th century.
          </p>
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm font-semibold text-navy mb-2">Components:</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>→ Fresh pide bread, cut into strips</li>
              <li>→ Thin slices of lamb döner, piled on top</li>
              <li>→ Thick, creamy yogurt</li>
              <li>→ House-made tomato sauce</li>
              <li>→ Melted sheep butter, poured over at the table</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            <strong>Where to get it:</strong> Antepliler Döner (Green Lanes) is the definitive London version.
          </p>
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
            <Link href="/areas/green-lanes" className="bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-cream hover:text-turkish-red transition-colors">
              📍 Green Lanes Guide
            </Link>
            <Link href="/dishes/breakfast" className="bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-cream hover:text-turkish-red transition-colors">
              🍳 Turkish Breakfast
            </Link>
          </div>
        </div>

      </article>
    </>
  )
}

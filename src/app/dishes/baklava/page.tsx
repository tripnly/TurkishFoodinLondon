import { Metadata } from 'next'
import RestaurantCard from '@/components/RestaurantCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Baklava in London | Turkish Food in London',
  description: 'Where to find the best Turkish baklava in London. Crispy filo, crushed pistachios, light syrup—the Gaziantep way. The definitive guide.',
}

const baklavaTypes = [
  { style: 'Fıstıklı Baklava', description: 'Classic pistachio baklava—the gold standard', where: 'Yasar Halim, Bebek Baklava' },
  { style: 'Cevizli Baklava', description: 'Walnut-filled, earthier and more affordable', where: 'Most bakeries' },
  { style: 'Şöbiyet', description: 'Cream-filled baklava with a lighter, crispier pastry', where: 'Yasar Halim, Antepliler' },
  { style: 'Havuç Dilimi', description: 'Carrot-slice shaped, extra crispy layers', where: 'Bebek Baklava' },
  { style: 'Burma Kadayıf', description: 'Rolled shredded pastry with pistachio filling', where: 'Yasar Halim' },
]

const restaurants = [
  {
    name: 'Yasar Halim',
    tagline: 'The Authority | Green Lanes | ££',
    description: 'The undisputed baklava king of London. Yasar Halim imports pistachios directly from Gaziantep and makes everything on-site. Their pistachio baklava has paper-thin layers—you can count 30+ in a single piece—with a light, barely-there syrup that lets the pistachio flavour dominate.',
    whatToOrder: 'Pistachio baklava (the classic), şöbiyet (cream-filled), Burma kadayıf. Buy a box to take home.',
    address: '495-497 Green Lanes, N4 1AL',
    hours: '8am-10pm daily',
    price: '£3-5 per piece, £25-40 per box',
    tip: 'The baklava is freshest in the morning when the first batch comes out. Buy a mixed box—it makes an incredible gift.',
  },  {
    name: 'Bebek Baklava',
    tagline: 'The Premium Brand | Green Lanes | £££',
    description: 'Sleek, modern, and beautifully packaged. Bebek Baklava positions itself as the luxury end of the market—and the quality backs it up. Their baklava is exceptionally crispy with a delicate, less-sweet syrup. The pistachio content is generous.',
    whatToOrder: 'Pistachio baklava, havuç dilimi (carrot-slice), mixed luxury box',
    address: 'Green Lanes, N4',
    hours: '9am-9pm daily',
    price: '£4-6 per piece, £35-50 per box',
    tip: 'Their gift boxes are beautifully presented—perfect for special occasions.',
  },
  {
    name: 'Antepliler',
    tagline: 'The Gaziantep Tradition | Green Lanes | ££',
    description: 'Part of the Antepliler restaurant complex, their bakery section stocks fresh baklava daily. Not as wide a selection as Yasar Halim, but the quality is excellent and the pistachio baklava is properly Gaziantep-style—thin, crispy, green with pistachios.',
    whatToOrder: 'Pistachio baklava, then künefe from the cafe next door',
    address: '44 Grand Parade, N4 1AG',
    price: '£3-5 per piece',
    tip: 'Combine with a visit to their künefe cafe and döner house for the full Antepliler experience.',
  },
]
export default function BaklavaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-600 to-green-500 text-white py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-4">🍰</div>
          <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
            Best Baklava in London
          </h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            Layers of crispy filo, crushed pistachios, and light sugar syrup. 
            The Gaziantep way, in North London.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-5 py-12">
        
        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-gold pl-5">
            <strong>Turkish baklava is not what you think it is.</strong> Forget the 
            heavy, honey-drenched, tooth-achingly sweet versions found elsewhere. 
            Proper Gaziantep baklava is delicate, crispy, barely sweet, and dominated 
            by the flavour of fresh pistachios. London's Green Lanes has some of the 
            best outside Turkey.
          </p>
        </div>
        {/* What Makes It Special */}
        <section className="bg-cream rounded-xl p-6 mb-12">
          <h2 className="font-display text-xl font-bold text-navy mb-4">
            What Makes Turkish Baklava Different?
          </h2>
          <p className="text-gray-700 mb-4">
            Gaziantep holds a protected geographical indication (PGI) for its baklava from 
            the EU—like Champagne for sparkling wine. The difference comes down to three things: 
            the pistachios (Antep fıstığı—smaller, greener, more flavourful), the filo (rolled 
            thinner than anywhere else), and the syrup (lighter and less sweet than Greek or 
            Middle Eastern versions).
          </p>
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm font-semibold text-navy mb-2">The components:</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>→ <strong>Filo:</strong> 30-40 paper-thin layers, brushed with clarified butter</li>
              <li>→ <strong>Filling:</strong> Crushed Antep pistachios (the best) or walnuts</li>
              <li>→ <strong>Syrup:</strong> Light sugar syrup (şerbet), poured cold onto hot baklava</li>
              <li>→ <strong>Butter:</strong> Clarified butter between every layer—this is not diet food</li>
            </ul>
          </div>
        </section>

        {/* Types Table */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-navy mb-4">Types of Baklava</h2>
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
                {baklavaTypes.map((type, i) => (
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
          <h2 className="font-display text-2xl font-bold text-navy mb-6">Where to Get It</h2>
          
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.name} {...restaurant} />
          ))}
        </section>

        {/* Buying Guide */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 mb-12">
          <h2 className="font-display text-xl font-bold text-amber-900 mb-4">
            🎁 Baklava Buying Guide
          </h2>
          <p className="text-gray-700 mb-4">
            Baklava is one of the best food gifts you can buy. Here's what to know 
            when buying a box:
          </p>
          <div className="bg-white rounded-lg p-4">
            <ul className="text-sm text-gray-600 space-y-2">
              <li>→ <strong>Pistachio vs walnut:</strong> Pistachio is premium (and pricier). Walnut is earthier and more affordable. Both are good.</li>
              <li>→ <strong>Freshness matters:</strong> Baklava is best within 3-4 days. Ask when it was made.</li>
              <li>→ <strong>Storage:</strong> Room temperature, not the fridge. The fridge makes the filo go soggy.</li>
              <li>→ <strong>Box sizes:</strong> A 500g box (about 12 pieces) is a good gift size. 1kg for a party.</li>
              <li>→ <strong>Price guide:</strong> Expect £25-40 for a 500g pistachio box. Walnut is about half the price.</li>
            </ul>
          </div>
        </section>

        {/* Pro Tips */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-navy mb-4">Baklava Tips</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-navy mb-2">✓ Do</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>→ Buy pistachio for the authentic experience</li>
                <li>→ Store at room temperature</li>
                <li>→ Pair with Turkish tea or coffee</li>
                <li>→ Try şöbiyet if you want something lighter</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-navy mb-2">✗ Don't</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>→ Put it in the fridge</li>
                <li>→ Microwave it</li>
                <li>→ Judge Turkish baklava by Greek or Lebanese versions</li>
                <li>→ Buy the cheapest option—pistachios cost what they cost</li>
              </ul>
            </div>
          </div>
        </section>
        {/* Related */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="font-display text-xl font-bold text-navy mb-4">
            Related Guides
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/dishes/kunefe" className="bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-cream hover:text-turkish-red transition-colors">
              🍯 Best Künefe
            </Link>
            <Link href="/areas/green-lanes" className="bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-cream hover:text-turkish-red transition-colors">
              📍 Green Lanes Guide
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
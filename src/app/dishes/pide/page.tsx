import { Metadata } from 'next'
import RestaurantCard from '@/components/RestaurantCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Pide in London | Turkish Food in London',
  description: 'Where to find the best Turkish pide in London. Boat-shaped flatbread with melted cheese, egg, and spiced meat—the definitive guide.',
}

const pideTypes = [
  { style: 'Kaşarlı Pide', description: 'Filled with melted kaşar cheese', where: 'Gökyüzü, Hala' },
  { style: 'Kıymalı Pide', description: 'Spiced minced lamb with tomato and pepper', where: 'Devran, Gökyüzü' },
  { style: 'Yumurtalı Pide', description: 'Cheese and egg cracked on top', where: 'Petek, Selale' },
  { style: 'Kuşbaşılı Pide', description: 'Diced lamb cubes with peppers', where: 'Gökyüzü, Antepliler' },
  { style: 'Karışık Pide', description: 'Mixed: meat, cheese, egg, peppers—everything', where: 'Available everywhere' },
]
const restaurants = [
  {
    name: 'Gökyüzü',
    tagline: 'The Pide Powerhouse | Green Lanes | ££',
    description: 'Gökyüzü bakes their pide in a proper stone oven, and you can watch the pide masters stretching and filling dough all day. The base comes out perfectly crispy on the bottom, soft on the sides, with generous fillings that run edge to edge.',
    whatToOrder: 'Kaşarlı pide (cheese), kuşbaşılı pide (diced lamb). Order bread on the side—it arrives fresh from the same oven.',
    address: '26-28 Grand Parade, N4 1LG',
    hours: '8am-12am daily',
    price: '£8-14',
    tip: 'Pide here is big enough to share as a starter between two.',
  },
  {
    name: 'Hala Restaurant',
    tagline: 'The Homestyle Baker | Green Lanes | ££',
    description: 'Hala treats pide like home cooking—generous, unfussy, and deeply satisfying. Their cheese pide has a thicker, breadier base than Gökyüzü, which some prefer. The kıymalı (mince) version is particularly good.',
    whatToOrder: 'Kıymalı pide, kaşarlı pide, then a pot of tea',
    address: '29-31 Grand Parade, N4 1LG',
    price: '£7-12',
    tip: 'Combine with their gözleme for a full Turkish bread experience.',
  },  {
    name: 'Devran',
    tagline: 'The Local Pick | Dalston | ££',
    description: 'A Dalston stalwart that does pide with real care. The dough is made fresh daily and baked until the edges puff and char slightly. Their kıymalı pide has a good spice level—more flavour than most.',
    whatToOrder: 'Kıymalı pide, sucuklu (spicy sausage) pide',
    address: '78 Stoke Newington Road, N16 7XB',
    hours: '11am-11pm daily',
    price: '£8-13',
  },
  {
    name: 'Petek',
    tagline: 'The Neighbourhood Gem | Stoke Newington | ££',
    description: 'Small, family-run, and doing everything right. Their yumurtalı pide—cheese with a runny egg cracked on top in the last minute of baking—is the comfort food you didn\'t know you needed.',
    whatToOrder: 'Yumurtalı pide (egg and cheese), karışık pide (mixed)',
    address: '98 Stoke Newington High St, N16 7NY',
    price: '£7-12',
    tip: 'Cash only. Small space—arrive early on weekends.',
  },
]
export default function PidePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-600 to-amber-500 text-white py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-4">🥖</div>
          <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
            Best Pide in London
          </h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            Turkish boat-shaped flatbread with melted cheese, egg, and spiced meat. 
            The comfort food of Turkish cuisine.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-5 py-12">
        
        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-turkish-red pl-5">
            <strong>Pide is Turkey's answer to comfort food.</strong> A boat-shaped 
            flatbread with a thick, pillowy rim and a thin, crispy base, filled with 
            melted cheese, seasoned meat, or a combination of both—finished with a 
            runny egg if you're doing it properly.
          </p>
        </div>
        {/* Types Table */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-navy mb-4">Types of Pide</h2>
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
                {pideTypes.map((type, i) => (
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
          <h2 className="font-display text-2xl font-bold text-navy mb-6">The Best Pide in London</h2>
          
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.name} {...restaurant} />
          ))}
        </section>

        {/* Pide vs Lahmacun Explainer */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 mb-12">
          <h2 className="font-display text-xl font-bold text-amber-900 mb-4">
            🥖 Pide vs Lahmacun vs Pizza
          </h2>
          <p className="text-gray-700 mb-4">
            People call pide "Turkish pizza" but it's really its own thing. Here's the difference:
          </p>
          <div className="bg-white rounded-lg p-4">
            <ul className="text-sm text-gray-600 space-y-2">
              <li>→ <strong>Pide:</strong> Thick, boat-shaped, filled generously, eaten with knife and fork</li>
              <li>→ <strong>Lahmacun:</strong> Paper-thin, round, topped with spiced mince, rolled up and eaten by hand</li>
              <li>→ <strong>Pizza:</strong> Round, medium-thick, different dough, different cheese, different universe</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            <strong>The key difference:</strong> Pide dough is enriched with yogurt and olive oil, giving it that distinctive soft, pillowy texture. The base is stretched thin in the centre but left thick at the edges, creating a natural rim that holds the filling in.
          </p>
        </section>

        {/* Pro Tips */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-navy mb-4">Pide Tips</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-navy mb-2">✓ Do</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>→ Order the yumurtalı (with egg)</li>
                <li>→ Eat it hot—pide doesn't travel well</li>
                <li>→ Share one as a starter before grills</li>
                <li>→ Ask for extra butter on top</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-navy mb-2">✗ Don't</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>→ Call it Turkish pizza</li>
                <li>→ Order it for delivery (it steams in the box)</li>
                <li>→ Skip the crispy edges—they're the best part</li>
                <li>→ Confuse it with lahmacun</li>
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
            <Link href="/dishes/lahmacun" className="bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-cream hover:text-turkish-red transition-colors">
              🫓 Best Lahmacun
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
import { Metadata } from 'next'
import RestaurantCard from '@/components/RestaurantCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dalston Turkish Food Guide | Turkish Food in London',
  description: 'The complete guide to Turkish restaurants in Dalston. Mangal 1 & 2, BYOB culture, late-night kebabs—where to eat and what to order in E8.',
}

const restaurants = [
  {
    name: 'Mangal 1',
    tagline: 'The Original BYOB | ££',
    description: 'The one that started it all. Since the 1980s, Mangal has been the template: charcoal grill, BYOB, no reservations, queue on weekends. The lamb şiş is simply seasoned and perfectly charred. The bread comes from the oven in the corner. This is where Dalston\'s Turkish scene was born.',
    whatToOrder: 'Lamb şiş, chicken wings, lamb ribs, any of the grilled meats',
    address: '10 Arcola St, E8 2DJ',
    hours: '12pm-12am daily',
    price: '£15-22pp',
    tip: 'BYOB is the whole point. Bring good wine; the food deserves it. Off-licence next door.',
  },
  {
    name: 'Mangal 2',
    tagline: 'The Elevated Sibling | £££',
    description: 'Run by the sons of Mangal 1\'s founders, this is what happens when the next generation trains at places like Noma\'s sister restaurant before coming home. The mutton tantuni uses heritage breed meat. The döner is house-made. Gilbert & George ate here nightly for 20 years. Same DNA, different execution.',
    whatToOrder: 'Mutton tantuni, lamb kidneys, whatever\'s seasonal on the specials',
    address: '4 Stoke Newington Rd, N16 7XN',
    hours: 'Mon-Sat 6pm-11pm',
    price: '£35-50pp',
    tip: 'Book ahead. This is destination dining, not walk-in kebabs.',
  },
  {
    name: 'Cirrik 19 Numara Bos',
    tagline: 'The Late-Night Reliable | ££',
    description: 'Less famous than the Mangals but consistently good. The mixed grill is generous, the meze is fresh, and it\'s open late enough to catch the post-pub crowd. BYOB like everywhere else on this strip.',
    whatToOrder: 'Mixed grill, lamb ribs, hummus',
    address: '19 Kingsland High St, E8 2JS',
    hours: '12pm-1am daily',
    price: '£15-25pp',
  },
  {
    name: 'Umut 2000',
    tagline: 'The Lamb Rib Specialists | ££',
    description: 'The lamb ribs here are legendary—crispy on the outside, tender inside, properly seasoned. The rest of the menu is solid too, but come for the ribs. BYOB, no reservations, the usual Dalston drill.',
    whatToOrder: 'Lamb ribs (the reason to come), mixed grill, chicken wings',
    address: '6 Crossway, E8 1JH',
    hours: '12pm-1am daily',
    price: '£15-25pp',
    tip: 'Also has a branch on Green Lanes if you can\'t get a table here.',
  },
  {
    name: 'The Best Turkish Kebab',
    tagline: 'The Stoke Newington Legend | £',
    description: 'Technically Stoke Newington but close enough. British Kebab Award winners. Everything prepared in front of you—salad chopped fresh, meat sliced from the spit as you watch. Portions are enormous. Queue moves fast.',
    whatToOrder: 'Mixed döner wrap with everything, chicken shish wrap',
    address: '125 Stoke Newington Rd, N16 8BT',
    hours: '11am-3am daily',
    price: '£6-10',
    tip: 'Perfect post-pub fuel. Cash helps but cards accepted.',
  },
]

export default function DalstonPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-fuchsia-400 to-rose-400 text-white py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
            Dalston Turkish Food Guide
          </h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            The original BYOB strip. Where Turkish tradition meets East London energy—
            late nights, good wine, and some of London's best grilled meat.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-5 py-4 flex flex-wrap gap-6 text-sm text-gray-600">
          <span>📍 E8 / N16</span>
          <span>🍽️ 8+ restaurants</span>
          <span>🍷 BYOB culture</span>
          <span>🚇 Dalston Junction / Dalston Kingsland</span>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-5 py-12">
        
        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-600 leading-relaxed">
            Dalston's Turkish restaurants cluster around Kingsland Road and Stoke Newington Road, 
            stretching north towards Stoke Newington. This is where BYOB culture thrives—grab a 
            bottle from the off-licence next door, order lamb ribs, and settle in.
          </p>
          <p>
            The vibe is different from Green Lanes: younger crowd, later hours, more East London 
            energy. Less family celebration, more friends gathering after work. The food is just 
            as good—some would argue better at the top end.
          </p>
        </div>

        {/* Dalston vs Green Lanes */}
        <section className="bg-gray-50 rounded-xl p-6 mb-12">
          <h2 className="font-display text-xl font-bold text-navy mb-4">Dalston vs Green Lanes</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 font-semibold text-navy"></th>
                  <th className="text-left py-2 font-semibold text-navy">Dalston</th>
                  <th className="text-left py-2 font-semibold text-navy">Green Lanes</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-100">
                  <td className="py-2 font-medium">Vibe</td>
                  <td className="py-2">Young, urban, late-night</td>
                  <td className="py-2">Family-oriented, traditional</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 font-medium">BYOB</td>
                  <td className="py-2">Universal</td>
                  <td className="py-2">Some places</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 font-medium">Hours</td>
                  <td className="py-2">Open late (1am+)</td>
                  <td className="py-2">Usually midnight</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 font-medium">Best for</td>
                  <td className="py-2">Night out, dates</td>
                  <td className="py-2">Celebrations, families</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Standout</td>
                  <td className="py-2">Mangal 2 (elevated)</td>
                  <td className="py-2">Gökyüzü (institution)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Restaurants */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-navy mb-6">The Restaurants</h2>
          
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.name} {...restaurant} />
          ))}
        </section>

        {/* BYOB Guide */}
        <section className="bg-cream rounded-xl p-6 mb-12">
          <h2 className="font-display text-xl font-bold text-navy mb-4">
            🍷 BYOB Guide
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            BYOB is the Dalston Turkish restaurant tradition. Here's how to do it:
          </p>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Off-licences on Kingsland Road stock decent wine for £8-15</li>
            <li>• Turkish food pairs well with medium-bodied reds (Pinot Noir, Merlot)</li>
            <li>• Most places have no corkage fee</li>
            <li>• Beer is fine too—Turkish Efes if you can find it</li>
            <li>• They'll provide glasses, just ask</li>
          </ul>
        </section>

        {/* Getting There */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-navy mb-4">Getting There</h2>
          <div className="prose prose-sm max-w-none text-gray-600">
            <p>
              <strong>Overground:</strong> Dalston Junction or Dalston Kingsland put you right 
              in the middle of the action.
            </p>
            <p>
              <strong>Bus:</strong> 149, 67, 243 all run through Dalston. Night buses too.
            </p>
            <p>
              <strong>Walking:</strong> About 25 minutes from Angel, 20 from Hackney Central.
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
            <Link href="/areas/green-lanes" className="bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-cream hover:text-turkish-red transition-colors">
              📍 Green Lanes Guide
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

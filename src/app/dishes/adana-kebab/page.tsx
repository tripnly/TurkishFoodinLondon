import { Metadata } from 'next'
import RestaurantCard from '@/components/RestaurantCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Adana Kebab in London | Turkish Food in London',
  description: 'Where to find the best Adana kebab in London. Hand-minced lamb, Urfa pepper, charcoal-grilled on flat skewers—the definitive guide.',
}

const kebabTypes = [
  { style: 'Adana Kebab', description: 'Spicy hand-minced lamb on flat skewer', where: 'Mangal 1, Gökyüzü' },
  { style: 'Urfa Kebab', description: 'Same technique, no chilli—milder version', where: 'Selale, Antepliler' },
  { style: 'Beyti Kebab', description: 'Adana wrapped in lavash with yogurt sauce', where: 'Gökyüzü, Hala' },
  { style: 'Adana Dürüm', description: 'Adana kebab wrapped in thin flatbread', where: 'Mangal 1, Best Turkish Kebab' },
]

const restaurants = [
  {
    name: 'Mangal 1',
    tagline: 'The Charcoal Masters | Dalston | ££',    description: 'The original Dalston ocakbaşı. Mangal 1 has been grilling over charcoal since the early days. Their Adana is textbook: coarsely minced lamb, proper fat ratio, hand-pressed onto wide flat skewers and cooked over real charcoal until the outside chars while the inside stays juicy.',
    whatToOrder: 'Adana kebab, lamb şiş, grilled wings to start',
    address: '10 Arcola St, E8 2DJ',
    hours: '12pm-12am daily',
    price: '£12-20',
    tip: 'BYOB—the off-licence is two doors down. Bring good red wine.',
  },
  {
    name: 'Gökyüzü',
    tagline: 'The Reliable Giant | Green Lanes | ££',
    description: 'Gökyüzü does everything well, and their Adana is no exception. Properly spiced, good char from the ocakbaşı grill, served with the full accompaniment of grilled tomato, pepper, rice, and salad. Consistent every single time.',
    whatToOrder: 'Adana kebab, beyti kebab (Adana wrapped in lavash), mixed grill platter',
    address: '26-28 Grand Parade, N4 1LG',
    hours: '8am-12am daily',
    price: '£12-18',
    tip: 'The mixed grill platter includes Adana plus four other kebabs—great for first-timers.',
  },
  {
    name: 'Selale',
    tagline: 'The Refined Grill | Green Lanes | ££',
    description: 'Selale\'s Adana has a slightly finer mince than some, with a well-balanced spice level that lets the lamb flavour come through. The presentation is a step up—they take care with the plating and the accompaniments.',
    whatToOrder: 'Adana kebab, Urfa kebab (milder version), lamb ribs',
    address: '51 Grand Parade, N4 1AG',
    hours: '8am-12am daily',
    price: '£14-22',
  },
  {
    name: 'Antepliler',
    tagline: 'The Southeast Specialist | Green Lanes | ££',
    description: 'Antepliler brings Gaziantep\'s kebab tradition to London. Their Adana uses a specific blend of Urfa and Aleppo peppers that gives it a deeper, smokier heat than the standard version. The meat is hand-minced—you can see the texture difference.',
    whatToOrder: 'Adana kebab, sogan kebab (their signature), lahmacun to start',
    address: '46 Grand Parade, N4 1AG',
    price: '£13-20',
    tip: 'Ask for extra ezme (spicy tomato salad)—it\'s the perfect accompaniment.',
  },
]
export default function AdanaKebabPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-700 to-rose-500 text-white py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-4">🍢</div>
          <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
            Best Adana Kebab in London
          </h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            Hand-minced lamb, Urfa pepper, charcoal-grilled on flat skewers. 
            The king of Turkish kebabs.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-5 py-12">
        
        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-turkish-red pl-5">
            <strong>Adana kebab is the benchmark.</strong> Named after the southern Turkish 
            city of Adana, it's hand-minced lamb mixed with tail fat and Urfa pepper, 
            pressed onto a wide flat skewer by hand, and grilled over charcoal until the 
            outside is charred and the inside is still pink. Get it right and there's 
            nothing better in Turkish cuisine.
          </p>
        </div>
        {/* What Makes It Special */}
        <section className="bg-cream rounded-xl p-6 mb-12">
          <h2 className="font-display text-xl font-bold text-navy mb-4">
            What Makes a Proper Adana?
          </h2>
          <p className="text-gray-700 mb-4">
            A real Adana kebab is defined by technique. The lamb must be hand-minced (not 
            machine-ground), mixed with a specific ratio of tail fat, seasoned with Urfa 
            biber (smoky dried pepper) and Aleppo pepper, then kneaded until the mixture 
            binds together. It's pressed onto a flat metal skewer by hand and grilled over 
            hardwood charcoal.
          </p>
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm font-semibold text-navy mb-2">The components:</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>→ <strong>Meat:</strong> Hand-minced lamb with tail fat (kuyruk yağı)</li>
              <li>→ <strong>Spice:</strong> Urfa biber, Aleppo pepper (pul biber), salt</li>
              <li>→ <strong>Skewer:</strong> Wide, flat metal—not round wooden sticks</li>
              <li>→ <strong>Grill:</strong> Hardwood charcoal, high heat, quick cook</li>
              <li>→ <strong>Served with:</strong> Grilled tomato, long pepper, rice or bulgur, lavash bread, ezme</li>
            </ul>
          </div>
        </section>

        {/* Types Table */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-navy mb-4">Adana & Related Kebabs</h2>
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
                {kebabTypes.map((type, i) => (
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

        {/* Adana vs Urfa Explainer */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 mb-12">
          <h2 className="font-display text-xl font-bold text-amber-900 mb-4">
            🌶️ Adana vs Urfa: What's the Difference?
          </h2>
          <p className="text-gray-700 mb-4">
            They're made the same way—hand-minced lamb on a flat skewer—but the spice 
            level is different. Adana uses hot Urfa and Aleppo peppers, giving it a 
            noticeable kick. Urfa kebab skips the chilli, relying on the lamb and fat 
            for flavour. If you're not sure, order one of each and compare.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Pro tip:</strong> Most restaurants will make your Adana spicier on request. 
            Just say "acılı" (ah-juh-luh)—it means spicy.
          </p>
        </section>

        {/* Pro Tips */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-navy mb-4">Ordering Tips</h2>
          <ul className="text-gray-700 text-sm space-y-3">
            <li>
              <strong>Check the grill:</strong> A proper ocakbaşı restaurant has an open 
              charcoal grill you can see. If the kebab comes from a kitchen with no visible 
              grill, it's probably not the real thing.
            </li>
            <li>
              <strong>Look at the skewer:</strong> Real Adana is on wide, flat metal skewers. 
              Round wooden skewers usually mean machine-ground meat.
            </li>
            <li>
              <strong>The texture test:</strong> A properly hand-minced Adana has visible meat 
              texture—it shouldn't be smooth like a sausage.
            </li>
            <li>
              <strong>Don't skip the sides:</strong> The grilled tomato and long pepper are 
              essential. Wrap everything in the lavash bread with some ezme.
            </li>
          </ul>
        </section>
        {/* Related */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="font-display text-xl font-bold text-navy mb-4">
            Related Guides
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/dishes/doner" className="bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-cream hover:text-turkish-red transition-colors">
              🥙 Best Döner
            </Link>
            <Link href="/areas/dalston" className="bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-cream hover:text-turkish-red transition-colors">
              📍 Dalston Guide
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
import { Metadata } from 'next'
import RestaurantCard from '@/components/RestaurantCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The 25 Best Turkish Restaurants in London (2025) | Turkish Food in London',
  description: 'The definitive guide to Turkish food in London. Not the tourist traps. The places where Turkish Londoners actually eat—from neighbourhood ocakbaşı to elevated dining.',
}

// Restaurant data organized by area
const restaurants = {
  greenLanes: [
    {
      name: 'Gökyüzü',
      tagline: 'The Institution | ££',
      description: 'The sprawling anchor of Green Lanes. Multiple dining rooms, a wood-fired oven producing fresh bread continuously, and a menu that runs to several pages. This is where Turkish families come for celebrations, where the mixed grill platters are genuinely designed to be shared by four people, and where you\'ll wait for a table on weekends—but not for long, because they\'re efficient.',
      whatToOrder: 'Full Platter (sharing), lamb şiş, chicken beyti, their breakfast (8am-4pm)',
      address: '26-28 Grand Parade, N4 1LG',
      hours: '8am-12am daily',
      price: '£15-25pp',
      tip: 'The breakfast is exceptional and less crowded than dinner. Wood-fired bread is unlimited—ask for more.',
    },
    {
      name: 'Selale',
      tagline: 'The Refined Alternative | ££',
      description: 'Slightly more polished than its neighbours, Selale is where you go when you want the Green Lanes experience with a bit more breathing room. The lamb ribs are exceptional, the meze is consistent, and the service is attentive without being rushed.',
      whatToOrder: 'Lamb ribs, adana kebab, hummus',
      address: '51 Grand Parade, N4 1AG',
      hours: '8am-12am daily',
      price: '£18-28pp',
    },
    {
      name: 'Antepliler',
      tagline: 'The Gaziantep Specialist | ££',
      description: 'Named after the southeastern Turkish city famous for its cuisine, Antepliler takes regional cooking seriously. The sogan kebab—minced lamb with pomegranate sauce and grilled shallots—is a signature. Next door, their dedicated döner house serves proper İskender, and their künefe cafe is the place for dessert.',
      whatToOrder: 'Sogan kebab, İskender (next door), künefe (dessert cafe)',
      address: '46 Grand Parade, N4 1AG',
      price: '£15-25pp',
      tip: 'This is actually a complex: restaurant, döner house, künefe cafe. Plan to visit all three.',
    },
  ],
  dalston: [
    {
      name: 'Mangal 1',
      tagline: 'The Original BYOB | ££',
      description: 'The one that started it all—or at least the one that made Dalston\'s Turkish scene famous. Since 1980-something, Mangal has been the template: charcoal grill, BYOB, no reservations, queue on weekends. The lamb şiş is simply seasoned and perfectly charred. The bread comes from the oven in the corner.',
      whatToOrder: 'Lamb şiş, chicken wings, lamb ribs',
      address: '10 Arcola St, E8 2DJ',
      hours: '12pm-12am daily',
      price: '£15-22pp',
      tip: 'BYOB is the whole point. Bring good wine; the food deserves it.',
    },
    {
      name: 'Mangal 2',
      tagline: 'The Elevated Sibling | £££',
      description: 'Run by the sons of Mangal 1\'s founders, Mangal 2 is what happens when the next generation trains at places like Noma\'s sister restaurant before coming home. The mutton tantuni uses heritage breed meat. The döner is house-made. The natural wine list is serious. Gilbert & George ate here nightly for 20 years.',
      whatToOrder: 'Mutton tantuni, lamb kidneys, whatever\'s seasonal',
      address: '4 Stoke Newington Rd, N16 7XN',
      hours: 'Mon-Sat 6pm-11pm',
      price: '£35-50pp',
      tip: 'Book ahead. This is destination dining, not walk-in kebabs.',
    },
  ],
}

export default function PillarPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-turkish-red to-orange-600 text-white py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-white/20 rounded-full px-4 py-1.5 text-sm mb-4">
            Updated January 2025
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
            The 25 Best Turkish Restaurants in London
          </h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            The definitive guide to Turkish food in London. Not the tourist traps. 
            The places where Turkish Londoners actually eat.
          </p>
        </div>
      </section>

      {/* Quick Jump */}
      <nav className="bg-white border-b border-gray-100 sticky top-[65px] z-40 overflow-x-auto">
        <div className="max-w-3xl mx-auto px-5 flex gap-0">
          <a href="#green-lanes" className="px-4 py-3 text-gray-500 text-sm font-medium whitespace-nowrap hover:text-turkish-red">Green Lanes</a>
          <a href="#dalston" className="px-4 py-3 text-gray-500 text-sm font-medium whitespace-nowrap hover:text-turkish-red">Dalston</a>
          <a href="#stoke-newington" className="px-4 py-3 text-gray-500 text-sm font-medium whitespace-nowrap hover:text-turkish-red">Stoke Newington</a>
          <a href="#central" className="px-4 py-3 text-gray-500 text-sm font-medium whitespace-nowrap hover:text-turkish-red">Central</a>
        </div>
      </nav>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-5 py-12">
        
        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-600 leading-relaxed">
            London has one of the best Turkish food scenes outside of Turkey itself. 
            The community here—largely from Anatolia and Turkish Cyprus—has been building 
            restaurants since the 1970s. What started as neighbourhood cafes serving homesick 
            immigrants has evolved into a sophisticated ecosystem of grill houses, bakeries, 
            breakfast spots, and increasingly, restaurants that could hold their own anywhere in the world.
          </p>
          <p>
            This isn't a list of every Turkish restaurant in London. It's a list of the ones 
            worth going out of your way for—the places I'd send my own family to, organised 
            by neighbourhood so you can plan your eating accordingly.
          </p>
        </div>

        {/* Green Lanes Section */}
        <section id="green-lanes" className="mb-16 scroll-mt-32">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center text-white text-xl">
              📍
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-navy">Green Lanes</h2>
              <p className="text-gray-500 text-sm">Harringay, N4 — London's Turkish heartland</p>
            </div>
          </div>
          
          <p className="text-gray-600 mb-8">
            This is the centre of Turkish London. A mile-long stretch of restaurants, bakeries, 
            and cafes that feels more like Istanbul than England. On weekends, the street is 
            packed with families, the smell of charcoal drifts across the pavement, and finding 
            parking requires commitment.
          </p>

          {restaurants.greenLanes.map((restaurant) => (
            <RestaurantCard key={restaurant.name} {...restaurant} />
          ))}

          <div className="bg-cream rounded-xl p-6 mt-8">
            <p className="text-sm text-gray-600">
              <strong>Getting there:</strong> Manor House or Turnpike Lane tube, then walk. 
              The W3 and W7 buses run the length of Green Lanes.
            </p>
          </div>
        </section>

        {/* Dalston Section */}
        <section id="dalston" className="mb-16 scroll-mt-32">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-400 to-rose-400 flex items-center justify-center text-white text-xl">
              📍
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-navy">Dalston</h2>
              <p className="text-gray-500 text-sm">E8 — The original BYOB strip</p>
            </div>
          </div>
          
          <p className="text-gray-600 mb-8">
            Dalston's Turkish restaurants cluster around Kingsland Road and Stoke Newington Road. 
            This is where BYOB culture thrives—bring a bottle of wine, order lamb ribs, and settle 
            in. The vibe is more East London than Green Lanes: younger crowd, louder music, later hours.
          </p>

          {restaurants.dalston.map((restaurant) => (
            <RestaurantCard key={restaurant.name} {...restaurant} />
          ))}
        </section>

        {/* More sections would go here... */}

        {/* Related Links */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="font-display text-xl font-bold text-navy mb-4">
            Explore More
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link href="/areas/green-lanes" className="bg-gray-100 px-4 py-3 rounded-lg text-sm text-center hover:bg-cream hover:text-turkish-red transition-colors">
              📍 Green Lanes Guide
            </Link>
            <Link href="/areas/dalston" className="bg-gray-100 px-4 py-3 rounded-lg text-sm text-center hover:bg-cream hover:text-turkish-red transition-colors">
              📍 Dalston Guide
            </Link>
            <Link href="/dishes/doner" className="bg-gray-100 px-4 py-3 rounded-lg text-sm text-center hover:bg-cream hover:text-turkish-red transition-colors">
              🥙 Best Döner
            </Link>
            <Link href="/dishes/breakfast" className="bg-gray-100 px-4 py-3 rounded-lg text-sm text-center hover:bg-cream hover:text-turkish-red transition-colors">
              🍳 Turkish Breakfast
            </Link>
          </div>
        </div>

      </article>
    </>
  )
}

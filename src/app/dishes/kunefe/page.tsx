import { Metadata } from 'next'
import RestaurantCard from '@/components/RestaurantCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Künefe in London | Turkish Food in London',
  description: 'Where to find the best künefe in London. Hot, cheesy, crispy, sweet—the ultimate Turkish dessert guide.',
}

const restaurants = [
  {
    name: 'Antepliler Künefe',
    tagline: 'The Specialist | Green Lanes | ££',
    description: 'A dedicated künefe cafe from the Antepliler group—the Gaziantep specialists. Made fresh to order in individual copper pans. Crispy shredded kadayıf pastry, stretchy unsalted cheese, soaked in light sugar syrup, topped with clotted cream and crushed pistachios.',
    whatToOrder: 'Classic künefe with kaymak (clotted cream). That\'s all they do, and they do it perfectly.',
    address: '44 Grand Parade, N4 1AG',
    hours: '10am-11pm daily',
    price: '£8-12',
    tip: 'Eat it immediately—künefe waits for no one. The cheese goes stringy and the pastry softens within minutes.',
  },
  {
    name: 'Yasar Halim',
    tagline: 'The Baklava House | Green Lanes | ££',
    description: 'Primarily known for their exceptional baklava, Yasar Halim also serves künefe. Not made to order like Antepliler, but still good quality and you can grab baklava to take home while you\'re there.',
    whatToOrder: 'Künefe, then a box of pistachio baklava for later',
    address: '495-497 Green Lanes, N4 1AL',
    price: '£7-10',
  },
  {
    name: 'Gökyüzü',
    tagline: 'The Full Experience | Green Lanes | ££',
    description: 'Gökyüzü offers künefe as part of their dessert menu—a good option if you want it after a full meal without walking to another venue. Solid execution, served hot.',
    whatToOrder: 'Save room after your mixed grill for künefe',
    address: '26-28 Grand Parade, N4 1LG',
    price: '£8-10',
  },
]

export default function KunefePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-500 to-yellow-500 text-white py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-4">🍯</div>
          <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
            Best Künefe in London
          </h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            Hot cheese, crispy pastry, sugar syrup, clotted cream. The ultimate Turkish dessert.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-5 py-12">
        
        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-gold pl-5">
            <strong>Künefe is theatre.</strong> It arrives at your table sizzling in a copper pan, 
            the pastry golden and crispy, the cheese inside stretching as you pull your first forkful. 
            You have about five minutes to eat it before the magic fades.
          </p>
        </div>

        {/* What Is It */}
        <section className="bg-cream rounded-xl p-6 mb-12">
          <h2 className="font-display text-xl font-bold text-navy mb-4">
            What is Künefe?
          </h2>
          <p className="text-gray-700 mb-4">
            A dessert from the southeastern Turkish city of Hatay (Antakya), made with shredded 
            kadayıf pastry, unsalted cheese (traditionally dil peyniri), butter, and sugar syrup. 
            Baked until the pastry is crispy and golden, then soaked in syrup and topped with 
            clotted cream and pistachios.
          </p>
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm font-semibold text-navy mb-2">The components:</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>→ <strong>Kadayıf:</strong> Shredded filo-like pastry, butter-soaked and crisped</li>
              <li>→ <strong>Cheese:</strong> Unsalted, stretchy cheese that melts but doesn't run</li>
              <li>→ <strong>Syrup:</strong> Light sugar syrup (şerbet), not as heavy as baklava syrup</li>
              <li>→ <strong>Toppings:</strong> Kaymak (clotted cream) and crushed pistachios</li>
            </ul>
          </div>
        </section>

        {/* The Experience */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-navy mb-4">The Künefe Experience</h2>
          <div className="prose prose-sm max-w-none text-gray-600">
            <p>
              Good künefe is made to order. You'll wait 10-15 minutes while it bakes in its 
              individual copper pan. When it arrives, it should be almost too hot to eat, the 
              pastry audibly crispy, the cheese visible and stretching.
            </p>
            <p>
              <strong>The clock starts immediately.</strong> Within 5 minutes, the pastry starts 
              absorbing syrup and softening. Within 10, the cheese has cooled and lost its stretch. 
              This is not a dessert for lingering—it's for immediate, focused enjoyment.
            </p>
            <p>
              <strong>How to eat it:</strong> Fork straight in, pulling to stretch the cheese. 
              The contrast is the point: crispy exterior, molten cheese interior, sweet syrup, 
              rich cream. Each bite should have all of it.
            </p>
          </div>
        </section>

        {/* Best Places */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-navy mb-6">Where to Get It</h2>
          
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.name} {...restaurant} />
          ))}
        </section>

        {/* The Recommendation */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 mb-12">
          <h2 className="font-display text-xl font-bold text-amber-900 mb-4">
            🏆 The Clear Winner
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>Antepliler Künefe</strong> is the definitive künefe in London. It's all they 
            do, they do it fresh to order, and they've been doing it for years. The dedicated 
            cafe setting means you're not rushing after a big meal—you can give the künefe the 
            attention it deserves.
          </p>
          <p className="text-gray-600 text-sm">
            Pro move: Hit Antepliler restaurant next door for dinner, then walk over to the 
            künefe cafe for dessert. That's the complete Gaziantep experience on Green Lanes.
          </p>
        </section>

        {/* Pro Tips */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-navy mb-4">Künefe Tips</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-navy mb-2">✓ Do</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>→ Eat it immediately</li>
                <li>→ Order kaymak on top</li>
                <li>→ Go to a specialist</li>
                <li>→ Share one between two</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-navy mb-2">✗ Don't</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>→ Let it sit while you finish your tea</li>
                <li>→ Order it as a takeaway</li>
                <li>→ Skip the pistachios</li>
                <li>→ Expect it to be like baklava</li>
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
            <Link href="/areas/green-lanes" className="bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-cream hover:text-turkish-red transition-colors">
              📍 Green Lanes Guide
            </Link>
            <Link href="/dishes/breakfast" className="bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-cream hover:text-turkish-red transition-colors">
              🍳 Turkish Breakfast
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

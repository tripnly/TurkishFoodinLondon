import { Metadata } from 'next'
import RestaurantCard from '@/components/RestaurantCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Lahmacun in London | Turkish Food in London',
  description: 'Where to find the best lahmacun in London. Thin, crispy Turkish flatbread topped with spiced lamb—the definitive guide.',
}

const restaurants = [
  {
    name: 'Gökyüzü',
    tagline: 'The Reliable Classic | Green Lanes | ££',
    description: 'Consistently excellent lahmacun from Green Lanes\' anchor restaurant. Thin and crispy with well-seasoned lamb topping. Comes with fresh parsley, lemon, and sumac to add yourself.',
    whatToOrder: 'Lahmacun as a starter, then move to grills. Order 2-3 per person if making it a main.',
    address: '26-28 Grand Parade, N4 1LG',
    price: '£4-5 each',
    tip: 'Roll it up with the parsley and a squeeze of lemon—that\'s the proper way.',
  },
  {
    name: 'Hala Restaurant',
    tagline: 'Family Style | Green Lanes | ££',
    description: 'Hala\'s lahmacun is a local favourite—generously topped and cooked in their wood-fired oven. The base gets that slight char that makes all the difference.',
    whatToOrder: 'Lahmacun, then gözleme if you have room',
    address: '29-31 Grand Parade, N4 1LG',
    price: '£4-5 each',
  },
  {
    name: 'Mangal 1',
    tagline: 'Dalston Classic | ££',
    description: 'The OG Dalston ocakbaşı does a solid lahmacun. Not the main event here (that\'s the lamb shish), but a worthy starter while you wait for the grill.',
    whatToOrder: 'Lahmacun to start, lamb shish to follow',
    address: '10 Arcola St, E8 2DJ',
    price: '£4-5 each',
  },
  {
    name: 'Selale',
    tagline: 'The Refined Take | Green Lanes | ££',
    description: 'Selale\'s lahmacun is perhaps the most photogenic on Green Lanes—thin, evenly topped, properly crispy. Consistent quality every time.',
    whatToOrder: 'Lahmacun, hummus, then lamb ribs',
    address: '51 Grand Parade, N4 1AG',
    price: '£5-6 each',
  },
]

export default function LahmacunPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-600 to-red-500 text-white py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-4">🫓</div>
          <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
            Best Lahmacun in London
          </h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            Turkish flatbread at its finest. Thin, crispy, and topped with spiced lamb.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-5 py-12">
        
        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-turkish-red pl-5">
            <strong>Lahmacun is not "Turkish pizza."</strong> It's its own thing entirely—thinner 
            than any pizza, crispy rather than chewy, meant to be rolled up and eaten with your 
            hands. Get it right and it's one of the great pleasures of Turkish cuisine.
          </p>
        </div>

        {/* What Is It */}
        <section className="bg-cream rounded-xl p-6 mb-12">
          <h2 className="font-display text-xl font-bold text-navy mb-4">
            What is Lahmacun?
          </h2>
          <p className="text-gray-700 mb-4">
            A paper-thin flatbread topped with a mixture of minced lamb (or beef), tomatoes, 
            onions, peppers, and a blend of spices including cumin, paprika, and Aleppo pepper. 
            Baked in a very hot oven until the edges crisp and the topping caramelises slightly.
          </p>
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm font-semibold text-navy mb-2">The components:</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>→ <strong>Base:</strong> Ultra-thin dough, almost cracker-like when cooked</li>
              <li>→ <strong>Topping:</strong> Spiced minced meat spread thin and even</li>
              <li>→ <strong>Served with:</strong> Fresh parsley, lemon wedges, sumac, pickled chillies</li>
              <li>→ <strong>How to eat:</strong> Add parsley, squeeze lemon, roll up, eat with hands</li>
            </ul>
          </div>
        </section>

        {/* How to Order */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-navy mb-4">How to Order Like a Local</h2>
          <div className="prose prose-sm max-w-none text-gray-600">
            <p>
              Lahmacun is typically eaten as a starter or light meal. If you're having it as part 
              of a larger Turkish meal, one per person is usually enough before the grills arrive.
            </p>
            <p>
              <strong>The ritual:</strong> When it arrives, it'll come with a plate of fresh 
              flat-leaf parsley, lemon wedges, and often sumac or pickled chillies. Pile the 
              parsley on generously, squeeze the lemon over the top, then roll the whole thing 
              up from one end. Eat it like a wrap.
            </p>
            <p>
              <strong>Don't:</strong> Cut it with a knife and fork like pizza. Don't skip the 
              lemon—the acidity cuts through the richness of the meat.
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

        {/* Pro Tips */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 mb-12">
          <h2 className="font-display text-xl font-bold text-amber-900 mb-4">
            💡 Lahmacun Tips
          </h2>
          <ul className="text-gray-700 text-sm space-y-3">
            <li>
              <strong>Timing matters:</strong> Lahmacun is best straight from the oven. If you're 
              ordering for a group, ask for them to come out one or two at a time so they stay crispy.
            </li>
            <li>
              <strong>Don't confuse with pide:</strong> Pide is thicker, boat-shaped, and eaten 
              with a knife and fork. Lahmacun is thin, round, and rolled up.
            </li>
            <li>
              <strong>Vegetarian option:</strong> Some places offer a cheese or vegetable version, 
              but traditional lahmacun is always meat.
            </li>
            <li>
              <strong>Drink pairing:</strong> Ayran (salted yogurt drink) is the classic pairing. 
              Or just Turkish tea.
            </li>
          </ul>
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
            <Link href="/dishes/doner" className="bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-cream hover:text-turkish-red transition-colors">
              🥙 Best Döner
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

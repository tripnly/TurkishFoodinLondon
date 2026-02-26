import { Metadata } from 'next'
import RestaurantCard from '@/components/RestaurantCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Turkish Breakfast in London | Turkish Food in London',
  description: 'Where to find proper serpme kahvaltı in London. The slow, generous, communal breakfast that defines Turkish mornings—from Green Lanes to Central London.',
}

const breakfastElements = {
  cheeses: [
    { name: 'Beyaz peynir', desc: 'White cheese (like feta)' },
    { name: 'Kaşar', desc: 'Yellow, semi-hard cheese' },
    { name: 'Çeçil', desc: 'Stringy, braided cheese' },
    { name: 'Lor', desc: 'Sweet, soft curd cheese' },
  ],
  spreads: [
    { name: 'Bal', desc: 'Honey (often honeycomb)' },
    { name: 'Kaymak', desc: 'Thick clotted cream' },
    { name: 'Tahin-pekmez', desc: 'Tahini + grape molasses' },
    { name: 'Acuka', desc: 'Spicy walnut and pepper paste' },
  ],
  breads: [
    { name: 'Simit', desc: 'Sesame-crusted bread ring' },
    { name: 'Pide', desc: 'Soft flatbread' },
    { name: 'Açma', desc: 'Soft, buttery roll' },
    { name: 'Bazlama', desc: 'Thick, pillowy flatbread' },
  ],
  hotDishes: [
    { name: 'Menemen', desc: 'Scrambled eggs with tomatoes & peppers' },
    { name: 'Sucuklu Yumurta', desc: 'Fried eggs with spiced sausage' },
    { name: 'Sigara Böreği', desc: 'Crispy filo pastry cigars' },
    { name: 'Gözleme', desc: 'Stuffed flatbread' },
  ],
}

const restaurants = [
  {
    name: 'Gökyüzü',
    tagline: 'The Green Lanes Institution | ££',
    description: 'Serves traditional kahvaltı every day from 8am to 4pm. The bread comes from their wood-fired oven—warm, soft, and served continuously. This is where Turkish families come for weekend breakfast. Portions are enormous. Tea keeps flowing.',
    whatToOrder: 'Full Turkish breakfast, add menemen or sucuklu yumurta',
    address: '26-28 Grand Parade, N4 1LG',
    hours: 'Breakfast 8am-4pm daily',
    price: '£15-20pp',
    tip: 'Arrive before 11am on weekends. Unlimited çay included.',
  },
  {
    name: 'Zahter',
    tagline: 'Central London Elegance | Carnaby Street | £££',
    description: 'Proper serpme kahvaltı just off Carnaby Street—one of the few places in Central London where you can get an authentic Turkish breakfast. The spread (minimum 2 people, £38) includes sivri peppers, feta and çeçil cheese, homemade jams, kaymak with honey, tahini-pekmez, olives, and a bread basket.',
    whatToOrder: 'Serpme Kahvaltı (for 2+), katmer, menemen',
    address: "Foubert's Place, Carnaby Street, W1F 7PB",
    hours: 'Breakfast daily until 12pm',
    price: '£19-25pp',
    tip: 'Michelin-recognized. Great for impressing visitors who won\'t travel to N4.',
  },
  {
    name: 'Leydi',
    tagline: 'Modern Turkish Brunch | Farringdon | £££',
    description: 'Chef Selin Kiazim (of the much-missed Oklava) brings Turkish breakfast to Central London. Weekend brunch (Saturday and Sunday, 10am-3pm) is an all-day Turkish feast with menemen, house-made sucuk, and stuffed lavash rolls. Includes unlimited Turkish tea.',
    whatToOrder: 'Weekend brunch menu, menemen, stuffed lavash rolls',
    address: 'Hyde London City, Farringdon',
    hours: 'Brunch Sat-Sun 10am-3pm',
    price: '£30-45pp',
    tip: 'Free-flowing prosecco option available. Book ahead.',
  },
  {
    name: 'Hala Restaurant',
    tagline: 'The Family Favourite | Green Lanes | ££',
    description: 'Hala\'s weekend breakfast is a proper feast. The spread covers the table: cheeses, olives, honey with kaymak, fresh bread, eggs, and hot dishes. The gözleme is hand-rolled and stuffed with cheese or spinach.',
    whatToOrder: 'Turkish breakfast spread, gözleme (before 4pm)',
    address: '29-31 Grand Parade, N4 1LG',
    hours: 'Breakfast from 8am',
    price: '£15-20pp',
    tip: 'Free tea with gözleme order.',
  },
]

export default function BreakfastPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-400 to-yellow-500 text-white py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-4">🍳</div>
          <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
            Turkish Breakfast in London
          </h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            The complete guide to kahvaltı—the slow, generous, communal breakfast 
            that defines Turkish mornings.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-5 py-12">
        
        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-amber-500 pl-5">
            <strong>Turkish breakfast—kahvaltı—is fundamentally different.</strong> A proper 
            serpme kahvaltı isn't one dish. It's a table-covering array of small plates: 
            cheeses, olives, tomatoes, honey, clotted cream, jams, eggs, breads, pastries, 
            and endless glasses of çay. You graze, you talk, you stay for hours.
          </p>
        </div>

        {/* Anatomy Section */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 mb-12">
          <h2 className="font-display text-xl font-bold text-amber-900 mb-6">
            🍳 The Anatomy of Turkish Breakfast
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-navy mb-3">Cheeses</h3>
              <ul className="text-sm space-y-1">
                {breakfastElements.cheeses.map((item) => (
                  <li key={item.name} className="text-gray-600">
                    <span className="font-medium text-gray-800">{item.name}</span> — {item.desc}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-navy mb-3">Spreads</h3>
              <ul className="text-sm space-y-1">
                {breakfastElements.spreads.map((item) => (
                  <li key={item.name} className="text-gray-600">
                    <span className="font-medium text-gray-800">{item.name}</span> — {item.desc}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-navy mb-3">Breads</h3>
              <ul className="text-sm space-y-1">
                {breakfastElements.breads.map((item) => (
                  <li key={item.name} className="text-gray-600">
                    <span className="font-medium text-gray-800">{item.name}</span> — {item.desc}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-navy mb-3">Hot Dishes</h3>
              <ul className="text-sm space-y-1">
                {breakfastElements.hotDishes.map((item) => (
                  <li key={item.name} className="text-gray-600">
                    <span className="font-medium text-gray-800">{item.name}</span> — {item.desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Restaurants */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-navy mb-6">
            Where to Get Turkish Breakfast
          </h2>
          
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.name} {...restaurant} />
          ))}
        </section>

        {/* How to Eat */}
        <section className="bg-cream rounded-xl p-6 mb-12">
          <h2 className="font-display text-xl font-bold text-navy mb-4">
            How to Eat Turkish Breakfast
          </h2>
          <ol className="space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
              <span><strong>Start with tea</strong> — Accept the first glass of çay. It's bottomless.</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
              <span><strong>Survey the spread</strong> — Don't dive in immediately. Appreciate what's in front of you.</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
              <span><strong>Build your bites</strong> — Bread + kaymak + honey. Cheese + tomato + olive. Experiment.</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
              <span><strong>Pace yourself</strong> — This is not a race. Eat, talk, drink tea, repeat.</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</span>
              <span><strong>Order hot dishes later</strong> — Menemen after you've grazed through the cold spread.</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">6</span>
              <span><strong>Finish with tea</strong> — And possibly Turkish coffee.</span>
            </li>
          </ol>
        </section>

        {/* Essential Combinations */}
        <section className="mb-12">
          <h2 className="font-display text-xl font-bold text-navy mb-4">Essential Combinations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 text-center">
              <h3 className="font-semibold text-amber-900 text-sm mb-1">The Classic</h3>
              <p className="text-xs text-gray-600">Bread + kaymak + honey</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 text-center">
              <h3 className="font-semibold text-amber-900 text-sm mb-1">The Savoury</h3>
              <p className="text-xs text-gray-600">Bread + feta + tomato + olive</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 text-center">
              <h3 className="font-semibold text-amber-900 text-sm mb-1">The Sweet</h3>
              <p className="text-xs text-gray-600">Bread + tahini-pekmez</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 text-center">
              <h3 className="font-semibold text-amber-900 text-sm mb-1">The Indulgent</h3>
              <p className="text-xs text-gray-600">All of the above + menemen</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-navy mb-6">FAQ</h2>
          <div className="space-y-4">
            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-semibold text-navy mb-1">How long should Turkish breakfast take?</h3>
              <p className="text-gray-600 text-sm">Minimum 1.5 hours, ideally 2+. This is not a quick meal.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-semibold text-navy mb-1">Is it vegetarian-friendly?</h3>
              <p className="text-gray-600 text-sm">Very much so. The core spread (cheeses, vegetables, breads, honey, jams) is vegetarian. Skip the sucuk dishes if needed.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-semibold text-navy mb-1">How much food is it really?</h3>
              <p className="text-gray-600 text-sm">A lot. The full spread plus hot dishes will leave you full until dinner.</p>
            </div>
            <div className="pb-4">
              <h3 className="font-semibold text-navy mb-1">Is Turkish breakfast served all day?</h3>
              <p className="text-gray-600 text-sm">Most places serve until 4pm. After that, regular lunch/dinner menus.</p>
            </div>
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

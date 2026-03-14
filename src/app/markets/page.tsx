import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Turkish Markets & Shops in London + Pantry Essentials | Turkish Food in London',
  description: 'Where to find Turkish supermarkets and grocery shops in London, plus essential Turkish pantry products you can order online. From pul biber to lokum.',
}

const markets = [
  {
    name: 'TFC Supermarkets',
    areas: 'Dalston, Hackney, Tottenham, Edmonton, Wood Green',
    description: 'The largest Turkish supermarket chain in London. Fresh bread baked daily, huge cheese counter, imported olives, dried goods, and a proper butcher section with halal meat cut Turkish-style. The Dalston branch on Kingsland Road is the flagship.',
    mustBuy: 'Fresh yufka (filo sheets), kaşar cheese, sucuk, simit',
    tip: 'Go on weekday mornings for the freshest bread and shortest queues.',
  },
  {
    name: 'Yasar Halim',
    areas: 'Green Lanes, N4',
    description: 'More than a bakery — Yasar Halim is a full Turkish grocery and patisserie. Famous for their baklava made with Gaziantep pistachios, but the grocery section stocks everything from pomegranate molasses to proper Turkish coffee.',
    mustBuy: 'Baklava, lokum (Turkish delight), ground Turkish coffee',
    tip: 'Their own-brand lokum is better and cheaper than anything you\'ll find on Amazon.',
  },
  {
    name: 'Hazar Turkish Food Centre',
    areas: 'Stoke Newington, N16',
    description: 'A neighbourhood staple on Stoke Newington Road. Smaller than TFC but well-curated. Strong on spices, dried herbs, and hard-to-find ingredients like isot pepper and dried mint.',
    mustBuy: 'Spice mixes, isot pepper, dried mint, vine leaves',
  },
  {
    name: 'Best Turkish Food Centre',
    areas: 'Wood Green, N22',
    description: 'Serves the large Turkish community around Wood Green. Good selection of fresh produce, dairy, and canned goods imported from Turkey. Competitive prices.',
    mustBuy: 'Canned white beans, pepper paste, bulghur wheat',
  },
  {
    name: 'Istanbul Food Centre',
    areas: 'Edmonton, N18',
    description: 'The go-to in Edmonton for Turkish groceries. Well-stocked with branded goods from Turkey — Sera, Tamek, Ülker. Also carries fresh flatbreads and lavas.',
    mustBuy: 'Sera pepper paste, Ülker biscuits, fresh lavas bread',
  },
]

const products = [
  {
    name: 'Çaykur Rize Turkish Tea',
    emoji: '🍵',
    description: 'The tea Turkey actually drinks. Black tea from the eastern Black Sea coast. Brew it strong in a çaydanlık (double teapot) and drink from tulip glasses.',
    searchQuery: 'Caykur+Rize+Turkish+tea',
    tip: 'Get the 1kg bag — you\'ll go through it faster than you think.',
  },
  {
    name: 'Pul Biber (Aleppo Pepper Flakes)',
    emoji: '🌶️',
    description: 'Not chilli flakes — pul biber. Mildly spicy, slightly oily, fruity and smoky. Goes on everything: eggs, kebabs, salads, soups. The single most important spice in a Turkish kitchen.',
    searchQuery: 'Turkish+pul+biber+pepper+flakes',
    tip: 'Sprinkle on hummus, eggs, or avocado toast. You\'ll never use regular chilli flakes again.',
  },
  {
    name: 'Sera Biber Salçası (Pepper Paste)',
    emoji: '🫙',
    description: 'Sweet or hot pepper paste — the backbone of Turkish cooking. Stir it into scrambled eggs (menemen), mix into salad dressings, or spread on bread with a drizzle of olive oil.',
    searchQuery: 'Sera+Turkish+pepper+paste+biber+salcasi',
    tip: 'The mild (tatli) version is more versatile. Hot (aci) is for when you know what you\'re doing.',
  },
  {
    name: 'Sumac',
    emoji: '🍋',
    description: 'Deep red, tangy, citrusy. Sprinkle on onion salads, grilled meat, or flatbread. Essential for the onion-sumac-parsley salad that comes with every kebab.',
    searchQuery: 'Turkish+sumac+spice+ground',
    tip: 'Mix with sliced red onions and flat-leaf parsley for the classic kebab accompaniment.',
  },
  {
    name: 'Pomegranate Molasses (Nar Ekşisi)',
    emoji: '🫐',
    description: 'Thick, sweet-sour syrup made from reduced pomegranate juice. Drizzle on salads, use in marinades, or mix into sparkling water for a Turkish-style drink.',
    searchQuery: 'Turkish+pomegranate+molasses+nar+eksisi',
    tip: 'A little goes a long way. Start with a teaspoon in salad dressings.',
  },
  {
    name: 'Turkish Coffee (Ground)',
    emoji: '☕',
    description: 'Finely ground — almost powder. Brewed in a cezve (ibrik) with sugar added during brewing, not after. Kurz Kahvesi or Mehmet Efendi are the classic brands.',
    searchQuery: 'Mehmet+Efendi+Turkish+coffee',
    tip: 'Medium sweet (orta şekerli) is the way to start. You need a cezve to brew it properly.',
  },
  {
    name: 'Lokum (Turkish Delight)',
    emoji: '🍬',
    description: 'Real lokum is nothing like the stuff you find in airport shops. Look for brands from Afyon or Safranbolu — rose, pistachio, and double-roasted are the classic flavours. Properly made lokum has a delicate chew with no gelatine.',
    searchQuery: 'Turkish+delight+lokum+pistachio+rose',
    tip: 'Pistachio lokum from Gaziantep or Antep-style is the gold standard. Avoid anything with gelatine — real lokum uses starch.',
  },
]

export default function MarketsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-500 text-white py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
            Turkish Markets & Pantry Essentials
          </h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            Where to shop in London and what to stock at home.
            The ingredients that make Turkish food taste like Turkey.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-5 py-4 flex flex-wrap gap-6 text-sm text-gray-600">
          <span>🛒 5 markets</span>
          <span>🫙 7 pantry essentials</span>
          <span>📍 North & East London</span>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-5 py-12">

        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-600 leading-relaxed">
            You don't need to live near Green Lanes to cook Turkish at home. London has
            dozens of Turkish supermarkets stocking everything from fresh yufka to proper
            pul biber — and the essentials you can't find locally are a click away.
          </p>
          <p>
            Below: the best Turkish shops worth visiting in person, plus the pantry staples
            every Turkish kitchen needs — with links to order them online.
          </p>
        </div>

        {/* Physical Markets */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-navy mb-6">Turkish Markets in London</h2>

          <div className="space-y-6">
            {markets.map((market) => (
              <div key={market.name} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-lg font-bold text-navy">{market.name}</h3>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full flex-shrink-0 ml-3">{market.areas}</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{market.description}</p>
                <p className="text-sm">
                  <span className="font-semibold text-turkish-red">Must buy:</span>{' '}
                  <span className="text-gray-700">{market.mustBuy}</span>
                </p>
                {market.tip && (
                  <div className="mt-3 bg-cream rounded-lg px-4 py-2 text-sm text-gray-700">
                    <span className="font-semibold text-gold">Pro tip:</span> {market.tip}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Pantry Essentials */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-navy mb-2">Turkish Pantry Essentials</h2>
          <p className="text-gray-600 text-sm mb-6">
            Can't get to a Turkish market? These are the staples you need — available on Amazon UK.
          </p>

          <div className="space-y-6">
            {products.map((product) => (
              <div key={product.name} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0">{product.emoji}</span>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold text-navy mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                    {product.tip && (
                      <div className="bg-cream rounded-lg px-4 py-2 text-sm text-gray-700 mb-3">
                        <span className="font-semibold text-gold">Tip:</span> {product.tip}
                      </div>
                    )}
                    <a
                      href={`https://www.amazon.co.uk/s?k=${product.searchQuery}&tag=deepnet-21`}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="inline-flex items-center gap-2 bg-turkish-red text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-turkish-red-dark transition-colors"
                    >
                      Find on Amazon UK
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400 mt-6 italic">
            Links to Amazon are affiliate links — we earn a small commission at no extra cost to you.
            This helps keep the site running.
          </p>
        </section>

        {/* Cooking Tips */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 mb-16">
          <h2 className="font-display text-xl font-bold text-navy mb-4">
            🍳 Building a Turkish Pantry — Start Here
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            If you're stocking a Turkish kitchen from scratch, these five items will cover 80% of recipes:
          </p>
          <ol className="space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="bg-turkish-red text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
              <span><strong>Pul biber</strong> — Goes on literally everything</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-turkish-red text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
              <span><strong>Biber salçası</strong> — Base for soups, stews, egg dishes</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-turkish-red text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
              <span><strong>Sumac</strong> — Your new favourite salad seasoning</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-turkish-red text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
              <span><strong>Çaykur tea</strong> — Because Turkish tea is a lifestyle</span>
            </li>
            <li className="flex gap-3">
              <span className="bg-turkish-red text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</span>
              <span><strong>Pomegranate molasses</strong> — Secret weapon for marinades and dressings</span>
            </li>
          </ol>
        </section>

        {/* Related */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="font-display text-xl font-bold text-navy mb-4">
            Related Guides
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/dishes/breakfast" className="bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-cream hover:text-turkish-red transition-colors">
              🍳 Turkish Breakfast Guide
            </Link>
            <Link href="/areas/green-lanes" className="bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-cream hover:text-turkish-red transition-colors">
              📍 Green Lanes Guide
            </Link>
            <Link href="/dishes/baklava" className="bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-cream hover:text-turkish-red transition-colors">
              🍰 Best Baklava
            </Link>
            <Link href="/blog/ordering-turkish-meat" className="bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-cream hover:text-turkish-red transition-colors">
              🥩 Ordering Turkish Meat
            </Link>
          </div>
        </div>

      </article>
    </>
  )
}

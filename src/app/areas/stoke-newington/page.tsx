import { Metadata } from 'next'
import RestaurantCard from '@/components/RestaurantCard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Stoke Newington Turkish Food Guide | Turkish Food in London',
  description: 'The best Turkish restaurants in Stoke Newington, N16. From The Best Turkish Kebab to neighbourhood gems.',
}

const restaurants = [
  {
    name: 'The Best Turkish Kebab',
    tagline: 'The Legend | £',
    description: 'The name is bold. The kebab delivers. A Stoke Newington institution that draws queues at 2am. Everything is prepared in front of you—salad chopped fresh, meat sliced from the spit as you watch. Portions are enormous; one serving genuinely feeds two.',
    whatToOrder: 'Mixed döner wrap with everything, chicken shish wrap, lamb kofte',
    address: '125 Stoke Newington Road, N16 8BT',
    hours: '11am-3am daily',
    price: '£6-12',
    tip: 'The queue moves fast. Perfect post-pub fuel or late-night craving solution.',
  },
  {
    name: 'Mangal 2',
    tagline: 'The Destination | £££',
    description: 'Where Turkish grill meets fine dining ambition. Run by the sons of Mangal 1\'s founders after training at places like Relae (Noma\'s sister restaurant), this is döner reimagined. The mutton tantuni uses heritage breed meat. The natural wine list is serious. Gilbert & George ate here nightly for 20 years.',
    whatToOrder: 'Mutton tantuni, lamb kidneys, seasonal specials, anything from the grill',
    address: '4 Stoke Newington Road, N16 7XN',
    hours: 'Mon-Sat 6pm-11pm',
    price: '£35-50pp',
    tip: 'Book ahead. This is destination dining, not walk-in kebabs.',
  },
  {
    name: 'Umut 2000',
    tagline: 'The Neighbourhood Ocakbaşı | ££',
    description: 'Reliable, unpretentious, and consistently good. Umut delivers the classic ocakbaşı experience without fuss—generous portions, fair prices, and a menu that covers all the essentials. Popular with local families and groups.',
    whatToOrder: 'Mixed grill platter, lamb ribs, adana kebab',
    address: '135 Stoke Newington High St, N16 0NY',
    hours: '12pm-11pm daily',
    price: '£15-25pp',
  },
  {
    name: 'Fez Mangal',
    tagline: 'The Grill Master | ££',
    description: 'Another strong contender in the Stokey Turkish scene. Known for excellent charcoal-grilled meats and generous meze portions. The atmosphere is lively, the service is quick, and the lamb shish is properly charred.',
    whatToOrder: 'Lamb shish, chicken wings, cacik, grilled halloumi',
    address: '104 Stoke Newington Road, N16 7XY',
    hours: '12pm-12am daily',
    price: '£18-28pp',
    tip: 'BYOB available—bring a nice bottle.',
  },
]

export default function StokeNewingtonPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-400 to-cyan-400 text-white py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
            Stoke Newington Turkish Food Guide
          </h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            Neighbourhood gems and late-night legends in N16. Where Church Street meets Turkish grill.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-5 py-4 flex flex-wrap gap-6 text-sm text-gray-600">
          <span>📍 Stoke Newington, N16</span>
          <span>🍽️ 5+ restaurants</span>
          <span>🌙 Late night options</span>
          <span>🚇 Dalston Kingsland / Bus 73, 476</span>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-5 py-12">
        
        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-600 leading-relaxed">
            Stoke Newington sits between Dalston's intensity and the residential calm of Hackney's 
            northern reaches. The Turkish scene here is smaller than Green Lanes or Dalston, but 
            what it lacks in volume it makes up for in personality—including one of London's most 
            famous late-night kebab shops.
          </p>
          <p>
            The vibe is neighbourhood casual. You'll find families on early dinners, Stokey locals 
            grabbing quick lunches, and late-night crowds queueing for döner after the pubs close. 
            It's the kind of area where restaurants know their regulars.
          </p>
        </div>

        {/* Restaurants */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-navy mb-6">Where to Eat</h2>
          
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.name} {...restaurant} />
          ))}
        </section>

        {/* The Legend */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 mb-12">
          <h2 className="font-display text-xl font-bold text-amber-900 mb-4">
            🏆 The Best Turkish Kebab — A Stokey Institution
          </h2>
          <p className="text-gray-700 mb-4">
            Few kebab shops have the confidence to call themselves "The Best." Even fewer can 
            back it up. This one has been proving its name right since the '90s, earning a 
            British Kebab Award and cult status among North London's late-night crowd.
          </p>
          <p className="text-gray-600 text-sm">
            The secret is simple: everything fresh, everything generous, everything cooked 
            with care. The döner is sliced to order. The salad is chopped as you watch. The 
            portions are genuinely ridiculous—first-timers routinely over-order.
          </p>
        </section>

        {/* Day vs Night */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-navy mb-4">Day vs Night</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-navy mb-3">☀️ Daytime</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>→ <strong>Lunch:</strong> Umut 2000 for a quick mixed grill</li>
                <li>→ <strong>Casual:</strong> Fez Mangal for meze and shish</li>
                <li>→ <strong>Special occasion:</strong> Mangal 2 (evenings only)</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-navy mb-3">🌙 Late Night</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>→ <strong>Post-pub:</strong> The Best Turkish Kebab (until 3am)</li>
                <li>→ <strong>2am craving:</strong> The Best Turkish Kebab</li>
                <li>→ <strong>Actually, always:</strong> The Best Turkish Kebab</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Getting There */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-navy mb-4">Getting There</h2>
          <div className="prose prose-sm max-w-none text-gray-600">
            <p>
              <strong>Overground:</strong> Dalston Kingsland or Stoke Newington are both walkable. 
              Stoke Newington station puts you right on the High Street.
            </p>
            <p>
              <strong>Bus:</strong> The 73 and 476 run through the area. The 149 and 243 also useful.
            </p>
            <p>
              <strong>From Dalston:</strong> 10-minute walk north on Stoke Newington Road.
            </p>
          </div>
        </section>

        {/* Related */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="font-display text-xl font-bold text-navy mb-4">
            Related Guides
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/areas/dalston" className="bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-cream hover:text-turkish-red transition-colors">
              📍 Dalston Guide
            </Link>
            <Link href="/areas/green-lanes" className="bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-cream hover:text-turkish-red transition-colors">
              📍 Green Lanes Guide
            </Link>
            <Link href="/dishes/doner" className="bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-cream hover:text-turkish-red transition-colors">
              🥙 Best Döner in London
            </Link>
          </div>
        </div>

      </article>
    </>
  )
}

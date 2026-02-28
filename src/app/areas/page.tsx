import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Turkish Food by Area | Turkish Food in London',
  description: 'Explore London\'s Turkish food scene neighbourhood by neighbourhood. Green Lanes, Dalston, Stoke Newington and more.',
}

const areas = [
  {
    slug: 'green-lanes',
    name: 'Green Lanes',
    subtitle: 'Harringay, N4',
    description: "London's Turkish heartland. A mile of restaurants, bakeries, and late-night grill houses that feels more like Istanbul than England.",
    stats: '12+ restaurants • 3 bakeries • 2 dessert cafes',
    gradient: 'from-emerald-500 to-green-400',
  },
  {
    slug: 'dalston',
    name: 'Dalston',
    subtitle: 'E8',
    description: 'Where Turkish tradition meets East London energy. The original BYOB strip, late-night feasts, and the legendary Mangal restaurants.',
    stats: '8+ restaurants • BYOB friendly • Late night',
    gradient: 'from-fuchsia-400 to-rose-400',
  },
  {
    slug: 'stoke-newington',
    name: 'Stoke Newington',
    subtitle: 'N16',
    description: 'Neighbourhood gems and casual favourites. Home to The Best Turkish Kebab—a bold name that delivers.',
    stats: '5+ restaurants • Casual vibe • Great for lunch',
    gradient: 'from-sky-400 to-cyan-400',
  },
  {
    slug: 'wood-green',
    name: 'Wood Green',
    subtitle: 'N22',
    description: 'The northern frontier of Turkish London. Supermarkets, bakeries, and family restaurants serving the local community—less touristy, more authentic.',
    stats: '6+ restaurants • Turkish supermarkets • Family-run',
    gradient: 'from-amber-400 to-orange-400',
  },
  {
    slug: 'finsbury-park',
    name: 'Finsbury Park',
    subtitle: 'N4 / N7',
    description: 'Where Green Lanes meets the Piccadilly line. A growing cluster of Turkish cafes, bakeries, and casual kebab spots around the station.',
    stats: '5+ restaurants • Great transport links • Casual eats',
    gradient: 'from-violet-400 to-purple-400',
  },
  {
    slug: 'edmonton',
    name: 'Edmonton',
    subtitle: 'N18',
    description: 'North London\'s hidden Turkish quarter. Proper neighbourhood restaurants, halal butchers, and some of the best-value Turkish meals in the city.',
    stats: '4+ restaurants • Budget-friendly • Local scene',
    gradient: 'from-teal-400 to-emerald-400',
  },
]

export default function AreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-light text-white py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
            Turkish Food by Area
          </h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            London's Turkish food scene, neighbourhood by neighbourhood. Each area has its own character.
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <div className="max-w-5xl mx-auto px-5 py-12">
        <div className="grid gap-8">
          {areas.map((area) => (
            <Link 
              key={area.slug} 
              href={`/areas/${area.slug}`}
              className="card overflow-hidden flex flex-col md:flex-row"
            >
              <div className={`bg-gradient-to-br ${area.gradient} w-full md:w-64 h-48 md:h-auto flex-shrink-0 flex items-center justify-center`}>
                <span className="font-display text-3xl font-bold text-white">{area.name}</span>
              </div>
              <div className="p-6 flex-1">
                <div className="flex items-baseline gap-2 mb-2">
                  <h2 className="font-display text-2xl font-bold text-navy">{area.name}</h2>
                  <span className="text-gray-400 text-sm">{area.subtitle}</span>
                </div>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <p className="text-gray-400 text-sm">{area.stats}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            More areas coming soon: Hackney, Tottenham, Enfield
          </p>
        </div>
      </div>
    </>
  )
}

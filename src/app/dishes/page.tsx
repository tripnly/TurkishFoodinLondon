import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Turkish Dishes Guide | Turkish Food in London',
  description: 'Find the best of each Turkish dish in London. Döner, lahmacun, künefe, Turkish breakfast and more.',
}

const dishes = [
  {
    slug: 'doner',
    name: 'Best Döner',
    icon: '🥙',
    description: 'From late-night wraps to sit-down İskender feasts. Where to find proper Turkish döner in London.',
    highlights: 'İskender • Dürüm • Yaprak döner',
  },
  {
    slug: 'breakfast',
    name: 'Turkish Breakfast',
    icon: '🍳',
    description: 'The full serpme kahvaltı experience. Endless spreads, fresh bread, and Turkish tea.',
    highlights: 'Serpme kahvaltı • Menemen • Gözleme',
  },
  {
    slug: 'lahmacun',
    name: 'Best Lahmacun',
    icon: '🫓',
    description: 'Turkish flatbread at its finest. Thin, crispy, topped with spiced lamb.',
    highlights: 'Gökyüzü • Hala • Mangal 1 • Selale',
  },
  {
    slug: 'kunefe',
    name: 'Best Künefe',
    icon: '🍯',
    description: 'Hot cheese, crispy kadayıf, sugar syrup. The ultimate Turkish dessert.',
    highlights: 'Antepliler Künefe • Yasar Halim • Gökyüzü',
  },
  {
    slug: 'pide',
    name: 'Best Pide',
    icon: '🥖',
    description: 'Turkish boat-shaped flatbread with melted cheese, egg, and spiced meat fillings.',
    highlights: 'Gökyüzü • Hala • Devran • Petek',
  },
  {
    slug: 'adana-kebab',
    name: 'Best Adana Kebab',
    icon: '🍢',
    description: 'Hand-minced lamb on a flat skewer, spiced with Urfa and Aleppo pepper, grilled over charcoal.',
    highlights: 'Mangal 1 • Gökyüzü • Selale • Antepliler',
  },
  {
    slug: 'baklava',
    name: 'Best Baklava',
    icon: '🍰',
    description: 'Layers of crispy filo, crushed pistachios, and light sugar syrup. The Gaziantep way.',
    highlights: 'Yasar Halim • Bebek Baklava • Antepliler',
  },
]

const comingSoon = [
  { name: 'Late Night Turkish', icon: '🌙' },
  { name: 'Best Manti', icon: '🥟' },
  { name: 'Best Gözleme', icon: '🫓' },
]

export default function DishesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-600 to-orange-500 text-white py-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
            Turkish Dishes Guide
          </h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            Find the best of each Turkish classic in London. Dish by dish.
          </p>
        </div>
      </section>

      {/* Dishes Grid */}
      <div className="max-w-5xl mx-auto px-5 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {dishes.map((dish) => (
            <Link 
              key={dish.slug} 
              href={`/dishes/${dish.slug}`}
              className="card p-6 hover:border-turkish-red"
            >
              <div className="flex gap-4">
                <span className="text-5xl">{dish.icon}</span>
                <div className="flex-1">
                  <h2 className="font-display text-xl font-bold text-navy mb-2">{dish.name}</h2>
                  <p className="text-gray-600 text-sm mb-3">{dish.description}</p>
                  <p className="text-turkish-red text-xs font-medium">{dish.highlights}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-16">
          <h2 className="font-display text-xl font-bold text-navy mb-6 text-center">Coming Soon</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {comingSoon.map((dish) => (
              <div 
                key={dish.name}
                className="bg-gray-100 px-5 py-3 rounded-lg text-gray-500 text-sm flex items-center gap-2"
              >
                <span>{dish.icon}</span>
                <span>{dish.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

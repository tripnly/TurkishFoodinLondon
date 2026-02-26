import { Metadata } from 'next'
import BlogPostLayout from '@/components/BlogPostLayout'

export const metadata: Metadata = {
  title: 'The Best BYOB Turkish Restaurants in London',
  description: 'Where to bring your own wine and enjoy world-class Turkish food. The definitive guide to BYOB Turkish restaurants in London.',
  keywords: ['BYOB Turkish restaurant', 'bring your own wine', 'Turkish restaurant London', 'Dalston Turkish', 'Mangal'],
  openGraph: {
    title: 'The Best BYOB Turkish Restaurants in London',
    description: 'Where to bring your own wine and enjoy world-class Turkish food.',
    url: 'https://turkishfoodinlondon.com/blog/best-byob-turkish-restaurants',
    type: 'article',
    publishedTime: '2025-01-02',
    authors: ['Turkish Food in London'],
    images: ['/images/blog/byob-turkish.jpg'],
  },
  alternates: {
    canonical: 'https://turkishfoodinlondon.com/blog/best-byob-turkish-restaurants',
  },
}

export default function BYOBPost() {
  return (
    <BlogPostLayout
      title="The Best BYOB Turkish Restaurants in London"
      description="Where to bring your own wine and enjoy world-class Turkish food."
      date="2025-01-02"
      category="Lists"
      categorySlug="lists"
      slug="best-byob-turkish-restaurants"
      readTime="4 min read"
      featuredImage="/images/blog/byob-turkish.jpg"
      featuredImageAlt="Turkish restaurant table with wine bottle and grilled meats"
      relatedPosts={[
        { href: '/areas/dalston', title: 'Dalston Turkish Food Guide' },
        { href: '/best-turkish-restaurants-london', title: '25 Best Turkish Restaurants in London' },
      ]}
    >
      <p className="text-xl text-gray-600 leading-relaxed">
        One of the great pleasures of London's Turkish restaurant scene is BYOB culture. 
        Bring a good bottle of wine, pay no corkage (or minimal), and enjoy some of the 
        best grilled meat in the city.
      </p>

      <h2>Why BYOB?</h2>
      <p>
        Many Turkish restaurants don't have alcohol licenses—either by choice or because 
        licenses are expensive. Instead, they let you bring your own. You get to drink 
        what you want, at off-license prices, with food that deserves a good bottle.
      </p>

      <h2>The Best BYOB Turkish Restaurants</h2>

      <h3>Mangal 1 — Dalston</h3>
      <p><strong>10 Arcola Street, E8 2DJ</strong></p>
      <p>
        The original. Since the 1980s, Mangal 1 has been the template for Dalston's Turkish 
        scene: charcoal grill, no-frills decor, exceptional lamb, BYOB.
      </p>
      <ul>
        <li><strong>Corkage:</strong> None</li>
        <li><strong>Order:</strong> Lamb şiş, chicken wings, lamb ribs</li>
      </ul>

      <h3>Mangal 2 — Stoke Newington</h3>
      <p><strong>4 Stoke Newington Road, N16 7XN</strong></p>
      <p>
        The elevated sibling. They have a serious wine list but still welcome bottles. 
        The food is more refined—think mutton tantuni and heritage breed meats.
      </p>
      <ul>
        <li><strong>Corkage:</strong> £10 per bottle</li>
        <li><strong>Order:</strong> Mutton tantuni, lamb kidneys, seasonal specials</li>
      </ul>

      <h3>Fez Mangal — Stoke Newington</h3>
      <p><strong>104 Stoke Newington Road, N16 7XY</strong></p>
      <p>
        A neighbourhood favourite. Charcoal grill, generous portions, BYOB welcome.
      </p>
      <ul>
        <li><strong>Corkage:</strong> None</li>
        <li><strong>Order:</strong> Lamb shish, mixed grill, grilled halloumi</li>
      </ul>

      <h2>Tips for BYOB</h2>
      <ul>
        <li><strong>Check first:</strong> Policies can change. A quick call never hurts.</li>
        <li><strong>Bring enough:</strong> Better too much than too little.</li>
        <li><strong>Tip well:</strong> You're not paying for alcohol—share the savings.</li>
      </ul>
    </BlogPostLayout>
  )
}

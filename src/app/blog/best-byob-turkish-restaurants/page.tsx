import { Metadata } from 'next'
import BlogPostLayout from '@/components/BlogPostLayout'

export const metadata: Metadata = {
  title: 'The Best BYOB Turkish Restaurants in London',
  description: 'Where to bring your own wine and enjoy world-class Turkish food.',
  keywords: ['BYOB Turkish restaurant', 'bring your own wine', 'Turkish restaurant London'],
  openGraph: {
    title: 'The Best BYOB Turkish Restaurants in London',
    description: 'Where to bring your own wine and enjoy world-class Turkish food.',
    url: 'https://turkishfoodinlondon.com/blog/best-byob-turkish-restaurants',
    type: 'article',
    publishedTime: '2025-01-02',
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
      relatedPosts={[
        { href: '/areas/dalston', title: 'Dalston Turkish Food Guide' },
        { href: '/best-turkish-restaurants-london', title: '25 Best Turkish Restaurants in London' },
      ]}
    >
      <p className="text-xl text-gray-600 leading-relaxed">
        One of the great pleasures of London's Turkish restaurant scene is BYOB culture. 
        Bring a good bottle, pay no corkage, enjoy world-class grilled meat.
      </p>

      <h2>Why BYOB?</h2>
      <p>
        Many Turkish restaurants don't have alcohol licenses. Instead, they let you bring 
        your own. You drink what you want, at off-license prices.
      </p>

      <h2>The Best BYOB Turkish Restaurants</h2>

      <h3>Mangal 1 — Dalston</h3>
      <p>10 Arcola Street, E8 2DJ</p>
      <p>The original since the 1980s. Charcoal grill, exceptional lamb, no corkage.</p>

      <h3>Mangal 2 — Stoke Newington</h3>
      <p>4 Stoke Newington Road, N16 7XN</p>
      <p>The elevated sibling. £10 corkage. More refined food.</p>

      <h3>Fez Mangal — Stoke Newington</h3>
      <p>104 Stoke Newington Road, N16 7XY</p>
      <p>Neighbourhood favourite. No corkage. Good for groups.</p>

      <h2>Tips for BYOB</h2>
      <ul>
        <li><strong>Check first:</strong> Policies can change.</li>
        <li><strong>Bring enough:</strong> Better too much than too little.</li>
        <li><strong>Tip well:</strong> You're saving on drinks—share the savings.</li>
      </ul>
    </BlogPostLayout>
  )
}

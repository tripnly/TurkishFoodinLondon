import { Metadata } from 'next'
import BlogPostLayout from '@/components/BlogPostLayout'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Complete Guide to Turkish Breakfast (Kahvaltı)',
  description: 'Everything you need to know about Turkish breakfast—the most important meal of the day.',
  keywords: ['Turkish breakfast', 'kahvaltı', 'serpme kahvaltı', 'Turkish breakfast London'],
  openGraph: {
    title: 'The Complete Guide to Turkish Breakfast (Kahvaltı)',
    description: 'Everything you need to know about Turkish breakfast.',
    url: 'https://turkishfoodinlondon.com/blog/turkish-breakfast-guide',
    type: 'article',
    publishedTime: '2025-01-15',
  },
  alternates: {
    canonical: 'https://turkishfoodinlondon.com/blog/turkish-breakfast-guide',
  },
}

export default function TurkishBreakfastPost() {
  return (
    <BlogPostLayout
      title="The Complete Guide to Turkish Breakfast (Kahvaltı)"
      description="Everything you need to know about the most important meal of the day."
      date="2025-01-15"
      category="Guides"
      categorySlug="guides"
      slug="turkish-breakfast-guide"
      readTime="8 min read"
      relatedPosts={[
        { href: '/dishes/breakfast', title: 'Best Turkish Breakfast in London' },
        { href: '/areas/green-lanes', title: 'Green Lanes Turkish Food Guide' },
      ]}
    >
      <p className="text-xl text-gray-600 leading-relaxed">
        In Turkey, breakfast isn't just a meal—it's an institution. <em>Kahvaltı</em> (literally 
        "before coffee") can last for hours, involves dozens of small dishes, and is considered 
        the foundation of a good day.
      </p>

      <h2>What is Kahvaltı?</h2>
      <p>
        Turkish breakfast is fundamentally different from the British or American approach. 
        Instead of one or two main items, you get a spread of small dishes—cheeses, spreads, 
        vegetables, eggs, breads—all served together for sharing and grazing.
      </p>

      <h2>The Essential Components</h2>
      
      <h3>Cheeses</h3>
      <ul>
        <li><strong>Beyaz peynir:</strong> White cheese similar to feta</li>
        <li><strong>Kaşar:</strong> Yellow cheese, often served fried</li>
        <li><strong>Tulum:</strong> Aged cheese with stronger flavour</li>
      </ul>

      <h3>Spreads</h3>
      <ul>
        <li><strong>Bal (honey):</strong> Often served with kaymak</li>
        <li><strong>Kaymak:</strong> Clotted cream, essential pairing for honey</li>
        <li><strong>Tahin-pekmez:</strong> Tahini mixed with grape molasses</li>
      </ul>

      <h2>How to Eat It</h2>
      <ol>
        <li><strong>Start with tea:</strong> Always.</li>
        <li><strong>Build your bites:</strong> Tear bread, add cheese, tomato—each bite different.</li>
        <li><strong>Try the classic:</strong> Bread + kaymak + honey = perfect.</li>
        <li><strong>Pace yourself:</strong> This is a marathon, not a sprint.</li>
      </ol>

      <p>
        For the full guide to Turkish breakfast spots, see our{' '}
        <Link href="/dishes/breakfast" className="text-turkish-red hover:underline">
          dedicated breakfast guide
        </Link>.
      </p>
    </BlogPostLayout>
  )
}

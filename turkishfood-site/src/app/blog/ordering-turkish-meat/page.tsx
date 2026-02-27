import { Metadata } from 'next'
import BlogPostLayout from '@/components/BlogPostLayout'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Adana vs Urfa vs Şiş: A Guide to Turkish Kebabs',
  description: 'How to navigate a Turkish grill menu and order like a local.',
  keywords: ['Adana kebab', 'Urfa kebab', 'şiş kebab', 'Turkish kebab', 'kebab types'],
  openGraph: {
    title: 'Adana vs Urfa vs Şiş: A Guide to Turkish Kebabs',
    description: 'How to navigate a Turkish grill menu and order like a local.',
    url: 'https://turkishfoodinlondon.com/blog/ordering-turkish-meat',
    type: 'article',
    publishedTime: '2025-01-05',
  },
  alternates: {
    canonical: 'https://turkishfoodinlondon.com/blog/ordering-turkish-meat',
  },
}

export default function OrderingMeatPost() {
  return (
    <BlogPostLayout
      title="Adana vs Urfa vs Şiş: A Guide to Turkish Kebabs"
      description="How to navigate a Turkish grill menu and order like a local."
      date="2025-01-05"
      category="Guides"
      categorySlug="guides"
      slug="ordering-turkish-meat"
      readTime="7 min read"
      relatedPosts={[
        { href: '/dishes/doner', title: 'Best Döner in London' },
        { href: '/blog/what-is-ocakbasi', title: 'What is Ocakbaşı?' },
      ]}
    >
      <p className="text-xl text-gray-600 leading-relaxed">
        A Turkish grill menu can be intimidating. Adana, Urfa, şiş, köfte, beyti—what's 
        the difference? Here's how to decode the menu.
      </p>

      <h2>The Three Main Categories</h2>
      <ul>
        <li><strong>Şiş:</strong> Cubed meat on skewers</li>
        <li><strong>Kebab:</strong> Minced meat on skewers (Adana, Urfa)</li>
        <li><strong>Döner:</strong> Meat cooked on a vertical spit</li>
      </ul>

      <h2>The Şiş Family</h2>
      <p>
        <strong>Kuzu Şiş</strong> — Cubes of lamb, marinated and grilled. The classic.
      </p>
      <p>
        <strong>Tavuk Şiş</strong> — Chicken, often marinated in yogurt and spices.
      </p>

      <h2>The Kebab Family</h2>
      <p>
        <strong>Adana Kebab</strong> — Hand-minced lamb with red pepper flakes. 
        Should have a kick of heat.
      </p>
      <p>
        <strong>Urfa Kebab</strong> — Same technique, but without the heat.
      </p>

      <h2>How to Order</h2>
      <p>
        Start with a <strong>mixed grill platter</strong> to taste several items.
      </p>
    </BlogPostLayout>
  )
}

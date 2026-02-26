import { Metadata } from 'next'
import BlogPostLayout from '@/components/BlogPostLayout'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Adana vs Urfa vs Şiş: A Guide to Turkish Kebabs',
  description: 'How to navigate a Turkish grill menu and order like a local. The complete guide to Turkish kebab styles.',
  keywords: ['Adana kebab', 'Urfa kebab', 'şiş kebab', 'Turkish kebab', 'kebab types', 'Turkish grill'],
  openGraph: {
    title: 'Adana vs Urfa vs Şiş: A Guide to Turkish Kebabs',
    description: 'How to navigate a Turkish grill menu and order like a local.',
    url: 'https://turkishfoodinlondon.com/blog/ordering-turkish-meat',
    type: 'article',
    publishedTime: '2025-01-05',
    authors: ['Turkish Food in London'],
    images: ['/images/blog/kebab-types.jpg'],
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
      featuredImage="/images/blog/kebab-types.jpg"
      featuredImageAlt="Various Turkish kebabs on a grill - Adana, şiş, and lamb chops"
      relatedPosts={[
        { href: '/dishes/doner', title: 'Best Döner in London' },
        { href: '/blog/what-is-ocakbasi', title: 'What is Ocakbaşı?' },
      ]}
    >
      <p className="text-xl text-gray-600 leading-relaxed">
        A Turkish grill menu can be intimidating. Adana, Urfa, şiş, köfte, beyti, kanat—what's 
        the difference? Here's how to decode the menu and order with confidence.
      </p>

      <h2>The Three Main Categories</h2>
      <ul>
        <li><strong>Şiş:</strong> Cubed meat on skewers</li>
        <li><strong>Kebab:</strong> Minced meat on skewers (Adana, Urfa, etc.)</li>
        <li><strong>Döner:</strong> Meat cooked on a vertical spit</li>
      </ul>

      <h2>The Şiş Family (Cubed Meat)</h2>
      
      <h3>Kuzu Şiş (Lamb Skewer)</h3>
      <p>
        Cubes of lamb, marinated and grilled. The classic. Look for restaurants that use 
        proper lamb cuts—leg or shoulder—not pre-frozen mystery cubes.
      </p>

      <h3>Tavuk Şiş (Chicken Skewer)</h3>
      <p>
        Chicken breast or thigh, cubed and grilled. Often marinated in yogurt and spices.
      </p>

      <h2>The Kebab Family (Minced Meat)</h2>

      <h3>Adana Kebab</h3>
      <p>
        The king of kebabs. Hand-minced lamb mixed with tail fat and red pepper flakes. 
        <strong>Should have a kick of heat.</strong> If it's bland, it's not proper Adana.
      </p>

      <h3>Urfa Kebab</h3>
      <p>
        Same technique as Adana, but <strong>without the heat</strong>. Named after Şanlıurfa. 
        Good for those who don't like spice.
      </p>

      <h2>How to Order</h2>
      <p>
        Start with a <strong>mixed grill platter</strong> to taste several items. See our{' '}
        <Link href="/dishes/doner" className="text-turkish-red hover:underline">
          complete döner guide
        </Link>{' '}for more.
      </p>
    </BlogPostLayout>
  )
}

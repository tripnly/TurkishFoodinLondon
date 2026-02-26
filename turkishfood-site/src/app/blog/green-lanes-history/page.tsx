import { Metadata } from 'next'
import BlogPostLayout from '@/components/BlogPostLayout'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Green Lanes Became London\'s Turkish Heartland',
  description: 'The story of how a North London street became home to the UK\'s largest Turkish community and one of Europe\'s best Turkish food scenes.',
  keywords: ['Green Lanes', 'Turkish London', 'Harringay', 'Turkish community UK', 'Turkish migration'],
  openGraph: {
    title: 'How Green Lanes Became London\'s Turkish Heartland',
    description: 'The story of how a North London street became home to the UK\'s largest Turkish community.',
    url: 'https://turkishfoodinlondon.com/blog/green-lanes-history',
    type: 'article',
    publishedTime: '2025-01-10',
    authors: ['Turkish Food in London'],
    images: ['/images/blog/green-lanes-street.jpg'],
  },
  alternates: {
    canonical: 'https://turkishfoodinlondon.com/blog/green-lanes-history',
  },
}

export default function GreenLanesHistoryPost() {
  return (
    <BlogPostLayout
      title="How Green Lanes Became London's Turkish Heartland"
      description="The story of how a North London street became home to the UK's largest Turkish community."
      date="2025-01-10"
      category="History"
      categorySlug="history"
      slug="green-lanes-history"
      readTime="6 min read"
      featuredImage="/images/blog/green-lanes-street.jpg"
      featuredImageAlt="Green Lanes street view with Turkish restaurants and shops"
      relatedPosts={[
        { href: '/areas/green-lanes', title: 'Green Lanes Turkish Food Guide' },
        { href: '/blog/what-is-ocakbasi', title: 'What is Ocakbaşı?' },
      ]}
    >
      <p className="text-xl text-gray-600 leading-relaxed">
        If you want to understand Turkish food in London, you need to understand Green Lanes. 
        This mile-long stretch of North London is home to the largest concentration of Turkish 
        restaurants outside Turkey—and it didn't happen by accident.
      </p>

      <h2>The Waves of Migration</h2>
      <p>
        Turkish migration to the UK came in several waves, each shaping the community we see today.
      </p>

      <h3>Turkish Cypriots (1950s-1970s)</h3>
      <p>
        The first significant wave came from Cyprus, then a British colony. Turkish Cypriots, 
        many with British passports, came seeking work. The intercommunal violence of the 1960s 
        and the 1974 partition accelerated migration.
      </p>

      <h3>Mainland Turks (1980s-1990s)</h3>
      <p>
        Political instability in Turkey—the 1980 coup, the Kurdish conflict—brought a second wave, 
        this time from Anatolia. Many came from southeastern regions with strong culinary traditions: 
        Gaziantep, Adana, Urfa. They brought their food with them.
      </p>

      <h2>What Makes It Special</h2>
      <p>
        Green Lanes isn't just a collection of Turkish restaurants—it's an ecosystem:
      </p>
      <ul>
        <li><strong>The restaurants:</strong> Ocakbaşı grill houses competing on quality</li>
        <li><strong>The butchers:</strong> Supplying fresh, properly butchered lamb</li>
        <li><strong>The bakeries:</strong> Making baklava with imported ingredients</li>
        <li><strong>The grocers:</strong> Stocking everything from dried peppers to Turkish tea</li>
        <li><strong>The community:</strong> Regulars who hold standards high</li>
      </ul>

      <p>
        Ready to explore? See our{' '}
        <Link href="/areas/green-lanes" className="text-turkish-red hover:underline">
          complete Green Lanes food guide
        </Link>.
      </p>
    </BlogPostLayout>
  )
}

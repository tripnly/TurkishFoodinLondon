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
      categorySlug="green-lanes-history"
      readTime="6 min read"
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
        and the 1974 partition accelerated migration. Many settled in North London, particularly 
        around Stoke Newington and Hackney.
      </p>

      <h3>Mainland Turks (1980s-1990s)</h3>
      <p>
        Political instability in Turkey—the 1980 coup, the Kurdish conflict—brought a second wave, 
        this time from Anatolia. Many came from southeastern regions with strong culinary traditions: 
        Gaziantep, Adana, Urfa. They brought their food with them.
      </p>

      <h3>The Haringey Connection</h3>
      <p>
        Why Green Lanes specifically? Chain migration: early arrivals helped relatives and 
        friends settle nearby. The area was affordable, had good transport links, and already 
        had some Turkish Cypriot businesses. Each new arrival strengthened the community; 
        more people meant more demand for Turkish goods and services.
      </p>

      <h2>The Restaurant Boom</h2>
      <p>
        The first Turkish restaurants in the area were modest cafes serving the community. 
        But as the population grew, so did ambition. By the 1990s, Green Lanes had developed 
        a critical mass: enough Turkish residents to support multiple butchers, bakeries, 
        and restaurants—and enough of a reputation to draw visitors from outside the area.
      </p>
      <p>
        The 2000s saw an explosion. Restaurants got bigger, more professional, more competitive. 
        Gökyüzü expanded into a multi-floor operation. Specialists emerged: dedicated döner houses, 
        künefe cafes, baklava shops sourcing pistachios directly from Gaziantep.
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
        This concentration matters. Restaurants can get better ingredients. Specialists can survive. 
        Competition keeps everyone sharp. When Yasar Halim's baklava is two doors down from another 
        bakery's, both have to be excellent.
      </p>

      <h2>The Weekend Scene</h2>
      <p>
        Visit Green Lanes on a Saturday night and you'll see what decades of community building 
        looks like. Families fill restaurant tables three generations deep. The smell of charcoal 
        drifts across the pavement. You'll hear Turkish everywhere—not performed for tourists, 
        but lived.
      </p>
      <p>
        The restaurants that survive here survive because Turkish Londoners actually eat at them. 
        That's the quality control that no review site can match.
      </p>

      <h2>Today and Tomorrow</h2>
      <p>
        Green Lanes faces the pressures all urban food scenes face: rising rents, changing 
        demographics, competition from delivery apps. Some worry the character is changing.
      </p>
      <p>
        But the fundamentals remain strong. The community is still here. The restaurants keep 
        opening. A new generation—British-born children of Turkish immigrants—is starting to 
        take over family businesses, often with fresh ideas and elevated ambitions.
      </p>
      <p>
        Green Lanes became London's Turkish heartland through decades of migration, community 
        building, and culinary tradition. That foundation isn't going anywhere.
      </p>
      <p>
        Ready to explore? See our{' '}
        <Link href="/areas/green-lanes" className="text-turkish-red hover:underline">
          complete Green Lanes food guide
        </Link>.
      </p>
    </BlogPostLayout>
  )
}

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
      categorySlug="ordering-turkish-meat"
      readTime="7 min read"
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
      <p>
        Turkish grilled meats fall into three main categories:
      </p>
      <ul>
        <li><strong>Şiş:</strong> Cubed meat on skewers</li>
        <li><strong>Kebab:</strong> Minced meat on skewers (Adana, Urfa, etc.)</li>
        <li><strong>Döner:</strong> Meat cooked on a vertical spit</li>
      </ul>
      <p>
        Each has variations. Let's break them down.
      </p>

      <h2>The Şiş Family (Cubed Meat)</h2>
      
      <h3>Kuzu Şiş (Lamb Skewer)</h3>
      <p>
        Cubes of lamb, marinated and grilled. The classic. Look for restaurants that use 
        proper lamb cuts—leg or shoulder—not pre-frozen mystery cubes.
      </p>

      <h3>Tavuk Şiş (Chicken Skewer)</h3>
      <p>
        Chicken breast or thigh, cubed and grilled. Often marinated in yogurt and spices. 
        Good tavuk şiş should be juicy, not dry—the thigh meat usually fares better.
      </p>

      <h3>Kanat (Chicken Wings)</h3>
      <p>
        Whole wings, grilled over charcoal. Simple but excellent when done right. Often 
        the best-value item on the menu.
      </p>

      <h3>Pirzola (Lamb Chops)</h3>
      <p>
        Individual lamb chops, usually from the rack. Premium item. Should be pink in 
        the middle, charred on the outside.
      </p>

      <h2>The Kebab Family (Minced Meat)</h2>

      <h3>Adana Kebab</h3>
      <p>
        The king of kebabs. Hand-minced lamb (traditionally using a zırh—a curved blade), 
        mixed with tail fat, red pepper flakes, and spices, then moulded onto a flat skewer 
        and grilled. Named after the southern Turkish city. <strong>Should have a kick of 
        heat.</strong> If it's bland, it's not proper Adana.
      </p>

      <h3>Urfa Kebab</h3>
      <p>
        Same technique as Adana, but <strong>without the heat</strong>. Named after Şanlıurfa. 
        The flavour comes from the fat and herbs rather than chilli. Good for those who 
        don't like spice but want the minced meat experience.
      </p>

      <h3>Köfte</h3>
      <p>
        Minced meat shaped into small patties or balls rather than long skewers. Often 
        includes onion and herbs in the mix. Can be grilled or pan-fried.
      </p>

      <h3>Beyti</h3>
      <p>
        Adana or minced meat wrapped in lavash bread, then sliced and served with tomato 
        sauce and yogurt. Named after Beyti Güler, a famous Istanbul restaurateur. Rich 
        and filling.
      </p>

      <h2>Döner</h2>
      <p>
        Layers of marinated meat (lamb, chicken, or mixed) stacked on a vertical spit, 
        cooked slowly, and sliced as it crisps. See our{' '}
        <Link href="/dishes/doner" className="text-turkish-red hover:underline">
          complete döner guide
        </Link>{' '}for more.
      </p>

      <h2>How to Order</h2>

      <h3>For First-Timers</h3>
      <p>
        Start with a <strong>mixed grill platter</strong>. Most restaurants offer these, 
        giving you a taste of several items. Usually includes lamb şiş, chicken şiş, 
        Adana, and köfte.
      </p>

      <h3>If You Like Spice</h3>
      <p>
        Go for <strong>Adana</strong>. Ask for it "acılı" (spicy) if you want extra heat. 
        Pair with cold ayran (yogurt drink) to balance.
      </p>

      <h3>If You Don't Like Spice</h3>
      <p>
        <strong>Urfa</strong> or <strong>lamb şiş</strong> are your friends. All the flavour, 
        none of the heat.
      </p>

      <h3>For the Best Value</h3>
      <p>
        <strong>Chicken wings (kanat)</strong> are almost always excellent and cheap. 
        <strong>Lamb ribs</strong> too—fatty, flavourful, and satisfying.
      </p>

      <h2>What Comes With It</h2>
      <p>
        Grilled meats are usually served with:
      </p>
      <ul>
        <li><strong>Bread:</strong> Fresh from the oven, often unlimited</li>
        <li><strong>Salad:</strong> Simple onion-parsley-sumac mix</li>
        <li><strong>Grilled vegetables:</strong> Tomato, pepper, sometimes onion</li>
        <li><strong>Rice:</strong> Often optional or included in platters</li>
      </ul>

      <h2>The Quality Test</h2>
      <p>
        How to tell if a place is good:
      </p>
      <ul>
        <li><strong>Watch the grill:</strong> Are they cooking over real charcoal?</li>
        <li><strong>Check the Adana:</strong> Is it hand-minced or machine-ground? You can see the difference in texture.</li>
        <li><strong>Taste the bread:</strong> Fresh-baked or brought in?</li>
        <li><strong>Look at the clientele:</strong> Are Turkish families eating there?</li>
      </ul>
      <p>
        Now you know what to order. Go eat.
      </p>
    </BlogPostLayout>
  )
}

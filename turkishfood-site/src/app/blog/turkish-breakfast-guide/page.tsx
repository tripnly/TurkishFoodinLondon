import { Metadata } from 'next'
import BlogPostLayout from '@/components/BlogPostLayout'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Complete Guide to Turkish Breakfast (Kahvaltı)',
  description: 'Everything you need to know about Turkish breakfast—the most important meal of the day. What to expect, how to eat it, and where to find it in London.',
  keywords: ['Turkish breakfast', 'kahvaltı', 'serpme kahvaltı', 'Turkish breakfast London', 'menemen', 'simit'],
  openGraph: {
    title: 'The Complete Guide to Turkish Breakfast (Kahvaltı)',
    description: 'Everything you need to know about Turkish breakfast—the most important meal of the day.',
    url: 'https://turkishfoodinlondon.com/blog/turkish-breakfast-guide',
    type: 'article',
    publishedTime: '2025-01-15',
    authors: ['Turkish Food in London'],
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
      categorySlug="turkish-breakfast-guide"
      readTime="8 min read"
      relatedPosts={[
        { href: '/dishes/breakfast', title: 'Best Turkish Breakfast in London' },
        { href: '/areas/green-lanes', title: 'Green Lanes Turkish Food Guide' },
      ]}
    >
      <p className="text-xl text-gray-600 leading-relaxed">
        In Turkey, breakfast isn't just a meal—it's an institution. <em>Kahvaltı</em> (literally 
        "before coffee") can last for hours, involves dozens of small dishes, and is considered 
        the foundation of a good day. Here's everything you need to know.
      </p>

      <h2>What is Kahvaltı?</h2>
      <p>
        Turkish breakfast is fundamentally different from the British or American approach. 
        Instead of one or two main items, you get a spread of small dishes—cheeses, spreads, 
        vegetables, eggs, breads—all served together for sharing and grazing.
      </p>
      <p>
        The full experience is called <em>serpme kahvaltı</em> ("spread breakfast"), and at 
        a good restaurant, your table will be covered with 15-20 different plates before 
        you've even ordered hot dishes.
      </p>

      <h2>The Essential Components</h2>
      
      <h3>Cheeses</h3>
      <ul>
        <li><strong>Beyaz peynir:</strong> White cheese similar to feta, the breakfast staple</li>
        <li><strong>Kaşar:</strong> Yellow cheese, often served fried or melted</li>
        <li><strong>Tulum:</strong> Aged cheese with stronger flavour</li>
        <li><strong>Lor:</strong> Fresh, mild cheese like ricotta</li>
      </ul>

      <h3>Spreads</h3>
      <ul>
        <li><strong>Bal (honey):</strong> Often served with kaymak</li>
        <li><strong>Kaymak:</strong> Clotted cream, the essential pairing for honey</li>
        <li><strong>Tahin-pekmez:</strong> Tahini mixed with grape molasses</li>
        <li><strong>Reçel:</strong> Jams, often homemade, in unusual flavours</li>
      </ul>

      <h3>Vegetables & Extras</h3>
      <ul>
        <li><strong>Tomatoes and cucumbers:</strong> Always fresh, simply sliced</li>
        <li><strong>Olives:</strong> Multiple varieties, green and black</li>
        <li><strong>Sucuk:</strong> Spiced Turkish sausage</li>
        <li><strong>Pastırma:</strong> Air-dried cured beef</li>
      </ul>

      <h3>Breads</h3>
      <ul>
        <li><strong>Simit:</strong> Sesame-crusted bread rings</li>
        <li><strong>Fresh bread:</strong> Often from a wood-fired oven</li>
        <li><strong>Bazlama:</strong> Soft, thick flatbread</li>
        <li><strong>Açma:</strong> Soft, buttery rolls</li>
      </ul>

      <h2>The Hot Dishes</h2>
      <p>
        Beyond the spread, most places offer hot dishes to order:
      </p>
      <ul>
        <li><strong>Menemen:</strong> Scrambled eggs with tomatoes, peppers, and spices</li>
        <li><strong>Sucuklu yumurta:</strong> Eggs fried with sliced sucuk sausage</li>
        <li><strong>Sigara böreği:</strong> Crispy filo pastry rolls with cheese</li>
        <li><strong>Gözleme:</strong> Thin stuffed flatbread, cooked on a griddle</li>
      </ul>

      <h2>How to Eat It</h2>
      <ol>
        <li><strong>Start with tea:</strong> Always. Turkish breakfast without tea isn't breakfast.</li>
        <li><strong>Build your bites:</strong> Tear bread, add cheese, tomato, whatever—each bite different.</li>
        <li><strong>Try the classic combination:</strong> Bread + kaymak + honey = perfect.</li>
        <li><strong>Pace yourself:</strong> This is a marathon, not a sprint.</li>
        <li><strong>Order hot dishes later:</strong> Once you've grazed the spread.</li>
        <li><strong>End with more tea:</strong> Or Turkish coffee, if you're done.</li>
      </ol>

      <h2>Turkish Breakfast in London</h2>
      <p>
        London has excellent options for full Turkish breakfast:
      </p>
      <ul>
        <li><strong>Gökyüzü (Green Lanes):</strong> The full spread, available 8am-4pm</li>
        <li><strong>Hala (Green Lanes):</strong> Family favourite, great gözleme</li>
        <li><strong>Zahter (Carnaby Street):</strong> Central London option, Michelin-recognized</li>
        <li><strong>Selale (Green Lanes):</strong> Award-winning breakfast spread</li>
      </ul>
      <p>
        For the full guide to Turkish breakfast spots in London, see our{' '}
        <Link href="/dishes/breakfast" className="text-turkish-red hover:underline">
          dedicated breakfast guide
        </Link>.
      </p>

      <h2>Weekend Ritual</h2>
      <p>
        Turkish breakfast is best experienced as a weekend ritual. Arrive mid-morning, 
        don't rush, bring people you want to spend time with. The meal is designed for 
        conversation, for lingering, for enjoying the simple pleasure of good food shared.
      </p>
      <p>
        In a world of quick breakfasts and to-go coffee, Turkish kahvaltı offers something 
        increasingly rare: the chance to slow down, to taste, to connect. That's worth 
        getting up for.
      </p>
    </BlogPostLayout>
  )
}

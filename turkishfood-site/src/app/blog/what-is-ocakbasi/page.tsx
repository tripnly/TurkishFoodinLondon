import { Metadata } from 'next'
import BlogPostLayout from '@/components/BlogPostLayout'

export const metadata: Metadata = {
  title: 'What is Ocakbaşı? The Heart of Turkish Dining',
  description: 'Understanding the traditional Turkish grill house and why it matters. The ocakbaşı is more than a restaurant—it\'s a cultural institution.',
  keywords: ['ocakbaşı', 'Turkish grill', 'Turkish restaurant', 'mangal', 'kebab London'],
  openGraph: {
    title: 'What is Ocakbaşı? The Heart of Turkish Dining',
    description: 'Understanding the traditional Turkish grill house and why it matters.',
    url: 'https://turkishfoodinlondon.com/blog/what-is-ocakbasi',
    type: 'article',
    publishedTime: '2025-01-20',
    authors: ['Turkish Food in London'],
  },
  alternates: {
    canonical: 'https://turkishfoodinlondon.com/blog/what-is-ocakbasi',
  },
}

export default function OcakbasiPost() {
  return (
    <BlogPostLayout
      title="What is Ocakbaşı? The Heart of Turkish Dining"
      description="Understanding the traditional Turkish grill house and why it matters."
      date="2025-01-20"
      category="Food Culture"
      categorySlug="what-is-ocakbasi"
      readTime="5 min read"
      relatedPosts={[
        { href: '/blog/ordering-turkish-meat', title: 'Adana vs Urfa vs Şiş: A Guide to Turkish Kebabs' },
        { href: '/areas/green-lanes', title: 'Green Lanes Turkish Food Guide' },
      ]}
    >
      <p className="text-xl text-gray-600 leading-relaxed">
        Walk into any traditional Turkish restaurant in London and you'll likely see it: a long, 
        open grill at the centre of the room, flames dancing, smoke rising, a cook expertly turning 
        skewers of meat. This is the <em>ocakbaşı</em>—literally "fireside"—and it's the heart of 
        Turkish dining culture.
      </p>

      <h2>The Meaning of Ocakbaşı</h2>
      <p>
        The word comes from <em>ocak</em> (hearth, fireplace) and <em>başı</em> (head, beside). 
        An ocakbaşı restaurant is one where the grill takes centre stage—not hidden away in a 
        kitchen, but right there in the dining room where you can watch your food being cooked.
      </p>
      <p>
        In Turkish culture, the hearth has always been the centre of home and community life. 
        The ocakbaşı restaurant recreates this, turning the meal into a communal, theatrical 
        experience. You don't just eat—you watch, you smell, you participate.
      </p>

      <h2>The Setup</h2>
      <p>
        A traditional ocakbaşı has several key elements:
      </p>
      <ul>
        <li><strong>The grill:</strong> Usually a long, open charcoal grill (mangal) built into a counter</li>
        <li><strong>The usta:</strong> The grill master who tends the fire and cooks the meat</li>
        <li><strong>Counter seating:</strong> Often you can sit right at the grill, watching your food cook</li>
        <li><strong>The display:</strong> Fresh meats, vegetables, and meze on show before cooking</li>
      </ul>

      <h2>Why Charcoal Matters</h2>
      <p>
        The best ocakbaşı restaurants use real charcoal—not gas, not electric. The charcoal 
        provides both intense heat and a subtle smokiness that's impossible to replicate. 
        It's also what creates those characteristic char marks on the meat.
      </p>
      <p>
        Watch the grill master work and you'll see constant adjustments: moving meat closer 
        to or further from the coals, rotating skewers, managing flare-ups from dripping fat. 
        It's skilled work that takes years to master.
      </p>

      <h2>Ocakbaşı in London</h2>
      <p>
        London has some excellent ocakbaşı restaurants, particularly in areas with large Turkish 
        communities. Green Lanes, Dalston, and Stoke Newington all have traditional grill houses 
        where the ocakbaşı remains the focal point.
      </p>
      <p>
        Some standout examples:
      </p>
      <ul>
        <li><strong>Mangal 1 (Dalston):</strong> The original, since the 1980s</li>
        <li><strong>Gökyüzü (Green Lanes):</strong> Massive operation, but the grill is still central</li>
        <li><strong>Fez Mangal (Stoke Newington):</strong> Classic neighbourhood ocakbaşı</li>
      </ul>

      <h2>How to Experience It</h2>
      <p>
        If you've never been to an ocakbaşı, here's what to expect:
      </p>
      <ol>
        <li><strong>Start with meze:</strong> Small dishes while you wait for the grill</li>
        <li><strong>Watch the meat:</strong> It's acceptable—encouraged, even—to watch your food cook</li>
        <li><strong>Order mixed grills:</strong> The best way to sample different cuts</li>
        <li><strong>Eat with bread:</strong> Fresh bread, often from a wood-fired oven, is essential</li>
        <li><strong>Finish with tea:</strong> Turkish tea, always, to aid digestion</li>
      </ol>

      <h2>Beyond the Grill</h2>
      <p>
        While the grill is the star, a good ocakbaşı is about more than just meat. The best 
        places also excel at meze (small dishes), fresh bread, and the overall atmosphere of 
        warmth and hospitality.
      </p>
      <p>
        The ocakbaşı represents something important about Turkish food culture: the belief that 
        cooking should be visible, that fire transforms food, and that meals are meant to be 
        shared. In an age of delivery apps and dark kitchens, that feels more valuable than ever.
      </p>
    </BlogPostLayout>
  )
}

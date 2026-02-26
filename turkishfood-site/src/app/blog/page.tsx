import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | Turkish Food in London',
  description: 'Stories, guides, and insights about Turkish food culture in London. From seasonal dishes to restaurant news and cooking tips.',
  openGraph: {
    title: 'Blog | Turkish Food in London',
    description: 'Stories, guides, and insights about Turkish food culture in London.',
    url: 'https://turkishfoodinlondon.com/blog',
  },
}

// Blog posts data - add new posts here
const posts = [
  {
    slug: 'what-is-ocakbasi',
    title: 'What is Ocakbaşı? The Heart of Turkish Dining',
    description: 'Understanding the traditional Turkish grill house and why it matters.',
    category: 'Food Culture',
    date: '2025-01-20',
    readTime: '5 min read',
    featured: true,
  },
  {
    slug: 'turkish-breakfast-guide',
    title: 'The Complete Guide to Turkish Breakfast (Kahvaltı)',
    description: 'Everything you need to know about the most important meal of the day.',
    category: 'Guides',
    date: '2025-01-15',
    readTime: '8 min read',
    featured: true,
  },
  {
    slug: 'green-lanes-history',
    title: 'How Green Lanes Became London\'s Turkish Heartland',
    description: 'The story of how a North London street became home to the UK\'s largest Turkish community.',
    category: 'History',
    date: '2025-01-10',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'ordering-turkish-meat',
    title: 'Adana vs Urfa vs Şiş: A Guide to Turkish Kebabs',
    description: 'How to navigate a Turkish grill menu and order like a local.',
    category: 'Guides',
    date: '2025-01-05',
    readTime: '7 min read',
    featured: false,
  },
  {
    slug: 'best-byob-turkish-restaurants',
    title: 'The Best BYOB Turkish Restaurants in London',
    description: 'Where to bring your own wine and enjoy world-class Turkish food.',
    category: 'Lists',
    date: '2025-01-02',
    readTime: '4 min read',
    featured: false,
  },
]

const categories = ['All', 'Guides', 'Food Culture', 'History', 'Lists', 'News']

export default function BlogPage() {
  const featuredPosts = posts.filter(p => p.featured)
  const recentPosts = posts.filter(p => !p.featured)

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-turkish-red to-orange-600 text-white py-16 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
            Blog
          </h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            Stories, guides, and insights about Turkish food culture in London.
          </p>
        </div>
      </section>

      {/* Categories */}
      <nav className="bg-white border-b border-gray-100 overflow-x-auto">
        <div className="max-w-5xl mx-auto px-5 flex gap-0">
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-5 py-4 text-gray-500 text-sm font-medium whitespace-nowrap
                         border-b-2 border-transparent hover:text-turkish-red hover:border-turkish-red
                         transition-colors first:text-turkish-red first:border-turkish-red"
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-5 py-12">
        
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold text-navy mb-6">Featured</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card overflow-hidden group"
                >
                  <div className="bg-gradient-to-br from-navy to-navy-light h-48 flex items-end p-6">
                    <div>
                      <span className="text-gold text-xs font-medium uppercase tracking-wider">
                        {post.category}
                      </span>
                      <h3 className="font-display text-xl font-bold text-white mt-1 group-hover:text-gold transition-colors">
                        {post.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 text-sm mb-3">{post.description}</p>
                    <div className="flex gap-3 text-xs text-gray-400">
                      <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <h2 className="font-display text-2xl font-bold text-navy mb-6">All Posts</h2>
          <div className="grid gap-4">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card p-5 flex flex-col md:flex-row md:items-center gap-4 group"
              >
                <div className="flex-1">
                  <span className="text-turkish-red text-xs font-medium uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="font-display text-lg font-bold text-navy mt-1 group-hover:text-turkish-red transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">{post.description}</p>
                </div>
                <div className="flex gap-3 text-xs text-gray-400 md:text-right md:flex-col md:gap-1">
                  <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  <span className="md:hidden">•</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-cream rounded-2xl p-8 mt-16 text-center">
          <h2 className="font-display text-2xl font-bold text-navy mb-3">
            Get New Posts by Email
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Subscribe and never miss an update. No spam, just good food writing.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-turkish-red"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </section>

      </div>
    </>
  )
}

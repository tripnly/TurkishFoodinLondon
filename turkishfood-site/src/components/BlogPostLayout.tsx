'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import { ArticleSchema, BreadcrumbSchema } from './Schema'

interface BlogPostLayoutProps {
  title: string
  description: string
  date: string
  dateModified?: string
  author?: string
  category: string
  categorySlug: string
  slug: string
  readTime: string
  featuredImage?: string
  featuredImageAlt?: string
  children: React.ReactNode
  relatedPosts?: { href: string; title: string; image?: string }[]
}

// AdSense In-Article Ad
function InArticleAd() {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      // AdSense not loaded yet
    }
  }, [])

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block', textAlign: 'center' }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-1144765684947111"
      data-ad-slot="YOUR_IN_ARTICLE_SLOT_ID"
    />
  )
}

// AdSense Display Ad (sidebar/rectangle)
function DisplayAd() {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      // AdSense not loaded yet
    }
  }, [])

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-1144765684947111"
      data-ad-slot="YOUR_DISPLAY_SLOT_ID"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  )
}

// Offer box component
function OfferBox({ 
  title, 
  description, 
  cta, 
  href, 
  badge 
}: { 
  title: string
  description: string
  cta: string
  href: string
  badge?: string
}) {
  return (
    <div className="bg-gradient-to-br from-turkish-red to-orange-600 text-white rounded-xl p-5">
      {badge && (
        <span className="inline-block bg-white/20 text-xs font-semibold px-2 py-1 rounded mb-3">
          {badge}
        </span>
      )}
      <h4 className="font-display text-lg font-bold mb-2">{title}</h4>
      <p className="text-white/90 text-sm mb-4">{description}</p>
      <a 
        href={href}
        className="inline-block bg-white text-turkish-red font-semibold text-sm px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        {cta}
      </a>
    </div>
  )
}

// Newsletter widget
function NewsletterWidget() {
  return (
    <div className="bg-cream rounded-xl p-5">
      <h4 className="font-display text-lg font-bold text-navy mb-2">
        Get the Insider Updates
      </h4>
      <p className="text-gray-600 text-sm mb-4">
        New restaurants, seasonal dishes, neighbourhood guides.
      </p>
      <form className="space-y-3">
        <input
          type="email"
          placeholder="Your email"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-turkish-red"
        />
        <button 
          type="submit"
          className="w-full bg-turkish-red text-white font-semibold text-sm py-2.5 rounded-lg hover:bg-red-700 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

// Popular posts widget
function PopularPosts() {
  const posts = [
    { href: '/best-turkish-restaurants-london', title: '25 Best Turkish Restaurants in London' },
    { href: '/dishes/doner', title: 'Best Döner in London' },
    { href: '/dishes/breakfast', title: 'Turkish Breakfast Guide' },
    { href: '/areas/green-lanes', title: 'Green Lanes Food Guide' },
  ]
  
  return (
    <div>
      <h4 className="font-display text-lg font-bold text-navy mb-4">Popular Guides</h4>
      <div className="space-y-3">
        {posts.map((post, i) => (
          <Link 
            key={post.href} 
            href={post.href}
            className="flex items-start gap-3 group"
          >
            <span className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded text-xs font-bold text-gray-500 flex items-center justify-center group-hover:bg-turkish-red group-hover:text-white transition-colors">
              {i + 1}
            </span>
            <span className="text-sm text-gray-700 group-hover:text-turkish-red transition-colors leading-tight">
              {post.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function BlogPostLayout({
  title,
  description,
  date,
  dateModified,
  author = 'Turkish Food in London',
  category,
  categorySlug,
  slug,
  readTime,
  featuredImage,
  featuredImageAlt,
  children,
  relatedPosts,
}: BlogPostLayoutProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <>
      <ArticleSchema
        title={title}
        description={description}
        url={`https://turkishfoodinlondon.com/blog/${slug}`}
        datePublished={date}
        dateModified={dateModified || date}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://turkishfoodinlondon.com' },
          { name: 'Blog', url: 'https://turkishfoodinlondon.com/blog' },
          { name: title, url: `https://turkishfoodinlondon.com/blog/${slug}` },
        ]}
      />

      <article>
        {/* Hero */}
        <header className="bg-gradient-to-br from-navy to-navy-light text-white py-12 px-5">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 text-sm text-white/70 mb-4">
              <Link href="/blog" className="hover:text-white">Blog</Link>
              <span>→</span>
              <span>{category}</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4 max-w-3xl">
              {title}
            </h1>
            <p className="text-white/85 text-lg mb-6 max-w-2xl">{description}</p>
            <div className="flex flex-wrap gap-4 text-sm text-white/60">
              <span>{formattedDate}</span>
              <span>•</span>
              <span>{readTime}</span>
              <span>•</span>
              <span>By {author}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {featuredImage && (
          <div className="max-w-5xl mx-auto px-5 -mt-6">
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={featuredImage}
                alt={featuredImageAlt || title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div className="max-w-5xl mx-auto px-5 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Content Column */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg prose-gray max-w-none">
                {children}
              </div>

              {/* Related Posts */}
              {relatedPosts && relatedPosts.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="font-display text-xl font-bold text-navy mb-6">
                    Related Posts
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {relatedPosts.map((post) => (
                      <Link
                        key={post.href}
                        href={post.href}
                        className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                      >
                        <div className="h-32 bg-gradient-to-br from-navy to-navy-light" />
                        <div className="p-4">
                          <span className="text-navy font-semibold group-hover:text-turkish-red transition-colors">
                            {post.title}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to Blog */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link 
                  href="/blog" 
                  className="text-turkish-red font-medium hover:underline"
                >
                  ← Back to all posts
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                
                {/* Offer Box */}
                <OfferBox
                  badge="Featured"
                  title="Turkish Food Walking Tour"
                  description="Explore Green Lanes with a local guide. Taste the best Turkish food in London."
                  cta="Book Now"
                  href="/tours/green-lanes"
                />

                {/* Newsletter */}
                <NewsletterWidget />

                {/* Popular Posts */}
                <PopularPosts />

              </div>
            </aside>

          </div>
        </div>
      </article>
    </>
  )
}

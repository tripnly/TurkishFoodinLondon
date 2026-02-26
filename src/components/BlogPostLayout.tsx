import Link from 'next/link'
import { ArticleSchema, BreadcrumbSchema } from './Schema'

interface BlogPostLayoutProps {
  title: string
  description: string
  date: string
  dateModified?: string
  author?: string
  category: string
  categorySlug: string
  readTime: string
  children: React.ReactNode
  relatedPosts?: { href: string; title: string }[]
}

export default function BlogPostLayout({
  title,
  description,
  date,
  dateModified,
  author = 'Turkish Food in London',
  category,
  categorySlug,
  readTime,
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
        url={`https://turkishfoodinlondon.com/blog/${categorySlug}`}
        datePublished={date}
        dateModified={dateModified || date}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://turkishfoodinlondon.com' },
          { name: 'Blog', url: 'https://turkishfoodinlondon.com/blog' },
          { name: title, url: `https://turkishfoodinlondon.com/blog/${categorySlug}` },
        ]}
      />

      <article>
        {/* Hero */}
        <header className="bg-gradient-to-br from-navy to-navy-light text-white py-12 px-5">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 text-sm text-white/70 mb-4">
              <Link href="/blog" className="hover:text-white">Blog</Link>
              <span>→</span>
              <span>{category}</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
              {title}
            </h1>
            <p className="text-white/85 text-lg mb-6">{description}</p>
            <div className="flex flex-wrap gap-4 text-sm text-white/60">
              <span>{formattedDate}</span>
              <span>•</span>
              <span>{readTime}</span>
              <span>•</span>
              <span>By {author}</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-5 py-12">
          <div className="prose prose-lg prose-gray max-w-none">
            {children}
          </div>

          {/* Related Posts */}
          {relatedPosts && relatedPosts.length > 0 && (
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h3 className="font-display text-xl font-bold text-navy mb-4">
                Related Posts
              </h3>
              <div className="grid gap-3">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.href}
                    href={post.href}
                    className="bg-gray-50 p-4 rounded-lg hover:bg-cream transition-colors"
                  >
                    <span className="text-navy font-medium">{post.title}</span>
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
      </article>
    </>
  )
}

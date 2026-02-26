import Link from 'next/link'

interface ArticleLayoutProps {
  title: string
  subtitle?: string
  badge?: string
  gradient?: string
  children: React.ReactNode
  relatedLinks?: { href: string; label: string }[]
}

export default function ArticleLayout({
  title,
  subtitle,
  badge,
  gradient = 'from-turkish-red to-orange-500',
  children,
  relatedLinks,
}: ArticleLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className={`bg-gradient-to-br ${gradient} text-white py-16 px-5`}>
        <div className="max-w-3xl mx-auto text-center">
          {badge && (
            <div className="inline-block bg-white/20 rounded-full px-4 py-1.5 text-sm mb-4">
              {badge}
            </div>
          )}
          <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/90 text-lg max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-5 py-12">
        <div className="prose prose-lg prose-gray max-w-none">
          {children}
        </div>

        {/* Related Links */}
        {relatedLinks && relatedLinks.length > 0 && (
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="font-display text-xl font-bold text-navy mb-4">
              Related Guides
            </h3>
            <div className="flex flex-wrap gap-3">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-700 
                             hover:bg-cream hover:text-turkish-red transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  )
}

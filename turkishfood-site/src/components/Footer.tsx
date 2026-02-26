import Link from 'next/link'

const footerLinks = {
  areas: [
    { href: '/areas/green-lanes', label: 'Green Lanes' },
    { href: '/areas/dalston', label: 'Dalston' },
    { href: '/areas/stoke-newington', label: 'Stoke Newington' },
    { href: '/areas', label: 'All Areas' },
  ],
  dishes: [
    { href: '/dishes/doner', label: 'Best Döner' },
    { href: '/dishes/breakfast', label: 'Turkish Breakfast' },
    { href: '/dishes/lahmacun', label: 'Lahmacun' },
    { href: '/dishes/kunefe', label: 'Künefe' },
  ],
  blog: [
    { href: '/blog/what-is-ocakbasi', label: 'What is Ocakbaşı?' },
    { href: '/blog/turkish-breakfast-guide', label: 'Turkish Breakfast Guide' },
    { href: '/blog/ordering-turkish-meat', label: 'Kebab Guide' },
    { href: '/blog', label: 'All Posts' },
  ],
  site: [
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-display text-xl font-bold mb-4">
              Turkish Food in London
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              The insider's guide to London's Turkish food scene. Written by someone 
              who grew up with this food.
            </p>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-4">
              Areas
            </h4>
            <ul className="space-y-2">
              {footerLinks.areas.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dishes */}
          <div>
            <h4 className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-4">
              Dishes
            </h4>
            <ul className="space-y-2">
              {footerLinks.dishes.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h4 className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-4">
              Blog
            </h4>
            <ul className="space-y-2">
              {footerLinks.blog.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site */}
          <div>
            <h4 className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-4">
              Site
            </h4>
            <ul className="space-y-2">
              {footerLinks.site.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
          <span>© 2025 Turkish Food in London. All rights reserved.</span>
          <span className="mt-2 md:mt-0">Made with 🇹🇷 in London</span>
        </div>
      </div>
    </footer>
  )
}

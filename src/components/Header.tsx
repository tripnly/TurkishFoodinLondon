'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '/areas', label: 'Areas' },
  { href: '/dishes', label: 'Dishes' },
  { href: '/restaurants', label: 'Restaurants' },
  { href: '/blog', label: 'Blog' },
  { href: '/map', label: 'Map' },
  { href: '/for-restaurants', label: 'List Your Restaurant', highlight: true },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-display text-xl font-bold text-navy">
          Turkish Food <span className="text-turkish-red">in London</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                (item as any).highlight
                  ? 'text-sm font-semibold bg-turkish-red text-white px-4 py-2 rounded-lg hover:bg-turkish-red-dark transition-colors'
                  : 'text-gray-700 text-sm font-medium hover:text-turkish-red transition-colors'
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 px-5 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 text-gray-700 font-medium hover:text-turkish-red"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

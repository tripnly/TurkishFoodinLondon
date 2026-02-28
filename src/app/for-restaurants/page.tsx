import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'List Your Restaurant | Turkish Food in London',
  description: 'Get your Turkish restaurant featured on London\'s only dedicated Turkish food guide. Free listing, or upgrade for photos, priority placement, and more.',
}

const tiers = [
  {
    name: 'Free',
    price: '£0',
    period: '',
    description: 'Get discovered by food lovers searching for Turkish food in London.',
    features: [
      'Basic listing with name, address & description',
      'Pin on our interactive map',
      'Included in area & dish guides',
      'Link to Google Maps for directions',
    ],
    cta: 'Submit Your Restaurant',
    ctaLink: '/for-restaurants/submit',
    highlight: false,
    badge: null,
  },
  {
    name: 'Featured',
    price: '£29',
    period: '/month',
    description: 'Stand out from the crowd with photos, priority placement, and monthly performance reports.',
    features: [
      'Everything in Free',
      'Up to 8 professional photos in a carousel',
      '"Featured" badge on listing & map',
      'Priority placement — listed first',
      'Top 5 menu highlights with descriptions',
      'Direct booking link or phone displayed',
      'Monthly performance report (views, clicks)',
      'Social media shoutout 1x/month',
    ],
    cta: 'Get Featured',
    ctaLink: '/contact',
    highlight: true,
    badge: '✦ Most Popular',
  },
  {
    name: 'Spotlight',
    price: '£59',
    period: '/month',
    description: 'The full treatment. Your own page, blog feature, and our highest recommendation.',
    features: [
      'Everything in Featured',
      'Dedicated restaurant page with your story',
      'Homepage spotlight rotation',
      'Blog feature post once per quarter',
      '"Editor\'s Pick" badge — highest trust signal',
      'Google Ads co-investment for your restaurant',
      'Priority in our email newsletter',
      'Special offer promotion for our readers',
    ],
    cta: 'Apply for Spotlight',
    ctaLink: '/contact',
    highlight: false,
    badge: '★ Premium',
  },
]

const stats = [
  { number: '6', label: 'Areas Covered' },
  { number: '17+', label: 'Restaurants Listed' },
  { number: '7', label: 'Dish Guides' },
  { number: '#1', label: 'Turkish Food Guide for London' },
]

const faqs = [
  {
    q: 'How do I get my restaurant listed for free?',
    a: 'Simply fill out our submission form with your restaurant details. We\'ll review and add your listing within 48 hours.',
  },
  {
    q: 'Can I upgrade or downgrade at any time?',
    a: 'Absolutely. No contracts, no lock-in. Upgrade when you\'re ready, downgrade if you need to. Monthly billing only.',
  },
  {
    q: 'What if my restaurant isn\'t in one of the listed areas?',
    a: 'We\'re expanding! We cover Green Lanes, Dalston, Stoke Newington, Wood Green, Finsbury Park, and Edmonton — with more areas coming soon. Submit your restaurant and we\'ll add your area.',
  },
  {
    q: 'Do you write the listing or do I?',
    a: 'We write it. Our team visits your restaurant (or interviews you) and writes an authentic, opinionated guide. No generic copy-paste descriptions.',
  },
  {
    q: 'How do I see my performance stats?',
    a: 'Featured and Spotlight members receive a monthly email report showing listing views, direction clicks, and guide link clicks.',
  },
  {
    q: 'What makes this different from Yelp or TripAdvisor?',
    a: 'We\'re the only guide dedicated 100% to Turkish food in London. Our readers are specifically looking for Turkish restaurants — not pizza, not sushi, not burgers. That means higher intent, more relevant traffic.',
  },
]

export default function ForRestaurantsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold font-display text-lg mb-4">For Restaurant Owners</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
            London&apos;s Only Dedicated
            <span className="text-gold block mt-2">Turkish Food Guide</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Your customers are searching for Turkish food in London right now.
            Make sure they find you first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/for-restaurants/submit"
              className="btn-primary text-center px-8 py-3"
            >
              List Your Restaurant Free
            </Link>
            <a
              href="#pricing"
              className="btn-secondary text-center px-8 py-3"
            >
              See Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-turkish-red font-display">{s.number}</p>
                <p className="text-sm text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why List With Us */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy text-center mb-4">Why List With Us?</h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            We&apos;re not another generic food directory. Here&apos;s what makes us different.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                emoji: '🎯',
                title: '100% Turkish Food Focus',
                text: 'Every visitor to our site is specifically looking for Turkish food. No noise from other cuisines. Pure, high-intent traffic.',
              },
              {
                emoji: '📍',
                title: 'Neighbourhood Authority',
                text: 'We write deep area guides — Green Lanes, Dalston, Wood Green. When someone searches "Turkish food [your area]", we rank.',
              },
              {
                emoji: '✍️',
                title: 'Real, Opinionated Content',
                text: 'No copy-paste restaurant descriptions. We write authentic, knowledgeable guides that readers trust and share.',
              },
              {
                emoji: '🗺️',
                title: 'Interactive Map',
                text: 'Our map helps hungry visitors find you. Filter by area, cuisine type, or dish — with one-click directions.',
              },
              {
                emoji: '📊',
                title: 'Track Your Impact',
                text: 'Featured members get monthly reports: how many people viewed your listing, clicked directions, or visited your guide.',
              },
              {
                emoji: '💰',
                title: 'Fraction of the Cost',
                text: 'Yelp charges £300+/month. TripAdvisor wants £150+. We start at £0 and max out at £59 — perfect for independents.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <p className="text-3xl mb-3">{item.emoji}</p>
                <h3 className="font-display font-bold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy text-center mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            Start free. Upgrade when you&apos;re ready. No contracts.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl p-8 border-2 transition-shadow hover:shadow-xl ${
                  tier.highlight
                    ? 'border-turkish-red bg-red-50/30 shadow-lg'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {tier.badge && (
                  <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full ${
                    tier.highlight
                      ? 'bg-turkish-red text-white'
                      : 'bg-gold text-navy'
                  }`}>
                    {tier.badge}
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold text-navy mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-bold text-navy">{tier.price}</span>
                  {tier.period && <span className="text-gray-400 text-sm">{tier.period}</span>}
                </div>
                <p className="text-gray-500 text-sm mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.ctaLink}
                  className={`block text-center py-3 px-6 rounded-lg font-semibold text-sm transition-all ${
                    tier.highlight
                      ? 'bg-turkish-red text-white hover:bg-turkish-red-dark shadow-md hover:shadow-lg'
                      : 'bg-navy text-white hover:bg-navy-light'
                  }`}
                >
                  {tier.cta}
                </Link>
                {tier.name !== 'Free' && (
                  <p className="text-center text-xs text-gray-400 mt-3">Save 17% with annual billing</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Submit', text: 'Fill out our quick form with your restaurant details.' },
              { step: '2', title: 'We Write', text: 'Our team creates an authentic, expert listing for you.' },
              { step: '3', title: 'Go Live', text: 'Your listing appears on our map, guides, and directory.' },
              { step: '4', title: 'Grow', text: 'Upgrade for photos, badges, and premium placement.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-turkish-red text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-display font-bold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-gray-200 pb-6">
                <h3 className="font-semibold text-navy text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-turkish-red to-red-700 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Ready to Reach More Customers?</h2>
          <p className="text-red-100 text-lg mb-8">
            Join London&apos;s most focused Turkish food guide. Start free — no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/for-restaurants/submit"
              className="bg-white text-turkish-red font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center"
            >
              List Your Restaurant Free
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors text-center"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

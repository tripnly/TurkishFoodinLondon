'use client'

import { useState } from 'react'
import Link from 'next/link'

const areas = [
  'Green Lanes',
  'Dalston',
  'Stoke Newington',
  'Wood Green',
  'Finsbury Park',
  'Edmonton',
  'Other (please specify)',
]

const types = [
  { value: 'restaurant', label: '🍖 Restaurant' },
  { value: 'bakery', label: '🥯 Bakery / Patisserie' },
  { value: 'dessert', label: '🍯 Dessert Shop' },
  { value: 'cafe', label: '☕ Cafe' },
  { value: 'takeaway', label: '🥡 Takeaway' },
]

export default function SubmitRestaurantPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    restaurantName: '',
    ownerName: '',
    email: '',
    phone: '',
    area: '',
    otherArea: '',
    address: '',
    postcode: '',
    type: '',
    description: '',
    specialDishes: '',
    priceRange: '',
    hours: '',
    website: '',
    instagram: '',
    tier: 'free',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // For static site: open mailto with pre-filled info
    const subject = encodeURIComponent(`New Restaurant Submission: ${formData.restaurantName}`)
    const body = encodeURIComponent(
      `Restaurant Name: ${formData.restaurantName}\n` +
      `Owner/Manager: ${formData.ownerName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Area: ${formData.area === 'Other (please specify)' ? formData.otherArea : formData.area}\n` +
      `Address: ${formData.address}, ${formData.postcode}\n` +
      `Type: ${formData.type}\n` +
      `Description: ${formData.description}\n` +
      `Special Dishes: ${formData.specialDishes}\n` +
      `Price Range: ${formData.priceRange}\n` +
      `Hours: ${formData.hours}\n` +
      `Website: ${formData.website}\n` +
      `Instagram: ${formData.instagram}\n` +
      `Interested Tier: ${formData.tier}\n` +
      `Additional Message: ${formData.message}`
    )
    window.open(`mailto:nejat@ticaret.com?subject=${subject}&body=${body}`, '_self')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-gray-50 py-20 px-4">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-6xl mb-6">🎉</p>
          <h1 className="font-display text-3xl font-bold text-navy mb-4">Thank You!</h1>
          <p className="text-gray-600 mb-6">
            Your email client should have opened with your restaurant details.
            Please send the email and we&apos;ll review your submission within 48 hours.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            If your email didn&apos;t open, please send your details directly to{' '}
            <a href="mailto:nejat@ticaret.com" className="text-turkish-red hover:underline">nejat@ticaret.com</a>
          </p>
          <Link href="/" className="btn-primary inline-block px-8 py-3">
            Back to Homepage
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-light text-white py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Submit Your Restaurant
          </h1>
          <p className="text-gray-300">
            Join London&apos;s only dedicated Turkish food guide. Free listing — no credit card required.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Restaurant Details */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="font-display text-xl font-bold text-navy mb-6 flex items-center gap-2">
                <span className="bg-turkish-red text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                Restaurant Details
              </h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="restaurantName" className="block text-sm font-medium text-gray-700 mb-1">
                    Restaurant Name *
                  </label>
                  <input
                    type="text"
                    id="restaurantName"
                    name="restaurantName"
                    required
                    value={formData.restaurantName}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-turkish-red/20 focus:border-turkish-red"
                    placeholder="e.g. Gökyüzü"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">
                      Area *
                    </label>
                    <select
                      id="area"
                      name="area"
                      required
                      value={formData.area}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-turkish-red/20 focus:border-turkish-red bg-white"
                    >
                      <option value="">Select area</option>
                      {areas.map((a) => <option key={a} value={a}>{a}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                      Type *
                    </label>
                    <select
                      id="type"
                      name="type"
                      required
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-turkish-red/20 focus:border-turkish-red bg-white"
                    >
                      <option value="">Select type</option>
                      {types.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                    </select>
                  </div>
                </div>
                {formData.area === 'Other (please specify)' && (
                  <div>
                    <label htmlFor="otherArea" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Area
                    </label>
                    <input
                      type="text"
                      id="otherArea"
                      name="otherArea"
                      value={formData.otherArea}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-turkish-red/20 focus:border-turkish-red"
                      placeholder="e.g. Hackney, Tottenham"
                    />
                  </div>
                )}
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-turkish-red/20 focus:border-turkish-red"
                    placeholder="e.g. 26-28 Grand Parade"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">
                      Postcode *
                    </label>
                    <input
                      type="text"
                      id="postcode"
                      name="postcode"
                      required
                      value={formData.postcode}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-turkish-red/20 focus:border-turkish-red"
                      placeholder="e.g. N4 1LG"
                    />
                  </div>
                  <div>
                    <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700 mb-1">
                      Price Range
                    </label>
                    <select
                      id="priceRange"
                      name="priceRange"
                      value={formData.priceRange}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-turkish-red/20 focus:border-turkish-red bg-white"
                    >
                      <option value="">Select</option>
                      <option value="£">£ — Budget friendly</option>
                      <option value="££">££ — Mid-range</option>
                      <option value="£££">£££ — Premium</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* About Your Food */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="font-display text-xl font-bold text-navy mb-6 flex items-center gap-2">
                <span className="bg-turkish-red text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                About Your Food
              </h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Tell us about your restaurant *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-turkish-red/20 focus:border-turkish-red resize-none"
                    placeholder="What makes your restaurant special? What should people know before visiting?"
                  />
                </div>
                <div>
                  <label htmlFor="specialDishes" className="block text-sm font-medium text-gray-700 mb-1">
                    Must-try dishes (comma separated)
                  </label>
                  <input
                    type="text"
                    id="specialDishes"
                    name="specialDishes"
                    value={formData.specialDishes}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-turkish-red/20 focus:border-turkish-red"
                    placeholder="e.g. Adana Kebab, Pide, Künefe, Turkish Breakfast"
                  />
                </div>
                <div>
                  <label htmlFor="hours" className="block text-sm font-medium text-gray-700 mb-1">
                    Opening Hours
                  </label>
                  <input
                    type="text"
                    id="hours"
                    name="hours"
                    value={formData.hours}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-turkish-red/20 focus:border-turkish-red"
                    placeholder="e.g. 8am-12am daily"
                  />
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="font-display text-xl font-bold text-navy mb-6 flex items-center gap-2">
                <span className="bg-turkish-red text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="ownerName"
                      name="ownerName"
                      required
                      value={formData.ownerName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-turkish-red/20 focus:border-turkish-red"
                      placeholder="Owner or manager name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-turkish-red/20 focus:border-turkish-red"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-turkish-red/20 focus:border-turkish-red"
                      placeholder="020 xxxx xxxx"
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                      Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-turkish-red/20 focus:border-turkish-red"
                      placeholder="https://..."
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-1">
                    Instagram
                  </label>
                  <input
                    type="text"
                    id="instagram"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-turkish-red/20 focus:border-turkish-red"
                    placeholder="@yourrestaurant"
                  />
                </div>
              </div>
            </div>

            {/* Membership Interest */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="font-display text-xl font-bold text-navy mb-6 flex items-center gap-2">
                <span className="bg-turkish-red text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                Membership Tier
              </h2>
              <div className="space-y-3">
                {[
                  { value: 'free', label: 'Free — £0/month', desc: 'Basic listing' },
                  { value: 'featured', label: 'Featured — £29/month', desc: 'Photos, priority placement, monthly reports' },
                  { value: 'spotlight', label: 'Spotlight — £59/month', desc: 'Dedicated page, blog feature, Google Ads' },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                      formData.tier === option.value
                        ? 'border-turkish-red bg-red-50/30'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="tier"
                      value={option.value}
                      checked={formData.tier === option.value}
                      onChange={handleChange}
                      className="mt-1 accent-[#C41E3A]"
                    />
                    <div>
                      <p className="font-medium text-navy text-sm">{option.label}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{option.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Additional Message */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Anything else you&apos;d like us to know?
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-turkish-red/20 focus:border-turkish-red resize-none"
                placeholder="Special features, awards, press mentions, etc."
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="btn-primary px-12 py-3.5 text-base"
              >
                Submit Your Restaurant
              </button>
              <p className="text-xs text-gray-400 mt-3">
                By submitting, your details will be sent to our team for review.
                We&apos;ll respond within 48 hours.
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

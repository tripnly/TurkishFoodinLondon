import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Turkish Food in London',
  description: 'Privacy policy for turkishfoodinlondon.com',
}

export default function PrivacyPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-12">
      <h1 className="font-display text-3xl font-bold text-navy mb-8">Privacy Policy</h1>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-500 text-sm mb-8">Last updated: January 2025</p>

        <h2>Who We Are</h2>
        <p>
          Turkish Food in London (turkishfoodinlondon.com) is a restaurant guide and food content 
          website operated from the United Kingdom.
        </p>

        <h2>Information We Collect</h2>
        <p>
          If you subscribe to our newsletter, we collect your email address. We use this solely 
          to send you updates about Turkish food in London. You can unsubscribe at any time.
        </p>
        <p>When you visit our website, we may collect your IP address, browser type, pages visited, 
          and how you arrived at our site through cookies and similar technologies.</p>

        <h2>Cookies</h2>
        <p>
          We use essential cookies for site functionality and analytics cookies to understand usage. 
          You can control cookies through your browser settings.
        </p>

        <h2>Third-Party Services</h2>
        <p>We use Google Analytics, Vercel hosting, and email services which have their own privacy policies.</p>

        <h2>Affiliate Links</h2>
        <p>
          Some links may be affiliate links. We may earn a commission at no cost to you. 
          This does not affect our recommendations.
        </p>

        <h2>Your Rights</h2>
        <p>Under UK GDPR, you can access, correct, or delete your data. Contact us to exercise these rights.</p>

        <h2>Contact</h2>
        <p>Email: hello@turkishfoodinlondon.com</p>
      </div>
    </article>
  )
}

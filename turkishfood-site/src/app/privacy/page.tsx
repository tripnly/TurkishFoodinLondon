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
        
        <h3>Information you provide</h3>
        <p>
          If you subscribe to our newsletter, we collect your email address. We use this solely 
          to send you updates about Turkish food in London. You can unsubscribe at any time.
        </p>

        <h3>Information collected automatically</h3>
        <p>
          When you visit our website, we may collect:
        </p>
        <ul>
          <li>Your IP address and approximate location</li>
          <li>Browser type and device information</li>
          <li>Pages you visit and how long you spend on them</li>
          <li>How you arrived at our site (referral source)</li>
        </ul>
        <p>
          This information is collected through cookies and similar technologies to help us 
          understand how people use our site and improve it.
        </p>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Send newsletter updates (if you subscribed)</li>
          <li>Understand how visitors use our site</li>
          <li>Improve our content and user experience</li>
          <li>Analyse traffic patterns</li>
        </ul>

        <h2>Cookies</h2>
        <p>
          We use cookies and similar tracking technologies. These include:
        </p>
        <ul>
          <li><strong>Essential cookies:</strong> Required for the site to function</li>
          <li><strong>Analytics cookies:</strong> Help us understand how visitors use the site</li>
          <li><strong>Advertising cookies:</strong> May be used by advertising partners</li>
        </ul>
        <p>
          You can control cookies through your browser settings. Note that disabling cookies 
          may affect site functionality.
        </p>

        <h2>Third-Party Services</h2>
        <p>We may use the following third-party services:</p>
        <ul>
          <li><strong>Google Analytics:</strong> For website analytics</li>
          <li><strong>Vercel:</strong> For website hosting</li>
          <li><strong>Email service provider:</strong> For newsletter delivery</li>
        </ul>
        <p>
          These services may collect information as described in their own privacy policies.
        </p>

        <h2>Affiliate Links</h2>
        <p>
          Some links on this site may be affiliate links. This means we may earn a commission 
          if you make a purchase through these links, at no additional cost to you. This does 
          not affect our editorial independence or recommendations.
        </p>

        <h2>Your Rights</h2>
        <p>Under UK GDPR, you have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to processing of your data</li>
          <li>Request data portability</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p>
          To exercise these rights, contact us at the address below.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain newsletter subscriber information until you unsubscribe. Analytics data 
          is retained according to our analytics provider policies (typically 26 months).
        </p>

        <h2>Children</h2>
        <p>
          Our site is not directed at children under 16. We do not knowingly collect personal 
          information from children.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. We will post any changes on 
          this page with an updated revision date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this privacy policy or your personal data, contact us at:
        </p>
        <p>
          Email: hello@turkishfoodinlondon.com
        </p>
      </div>
    </article>
  )
}

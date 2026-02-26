import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  metadataBase: new URL('https://turkishfoodinlondon.com'),
  title: {
    default: 'Turkish Food in London | The Insider\'s Guide',
    template: '%s | Turkish Food in London',
  },
  description: 'The definitive guide to Turkish food in London. From Green Lanes institutions to Dalston ocakbaşı. Written by someone who actually knows the difference.',
  keywords: ['Turkish food London', 'Turkish restaurants London', 'best kebab London', 'Green Lanes restaurants', 'Dalston Turkish', 'ocakbaşı London', 'Turkish breakfast London', 'döner London', 'lahmacun London'],
  authors: [{ name: 'Turkish Food in London' }],
  creator: 'Turkish Food in London',
  publisher: 'Turkish Food in London',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Turkish Food in London | The Insider\'s Guide',
    description: 'The definitive guide to Turkish food in London. From Green Lanes institutions to Dalston ocakbaşı.',
    url: 'https://turkishfoodinlondon.com',
    siteName: 'Turkish Food in London',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turkish Food in London | The Insider\'s Guide',
    description: 'The definitive guide to Turkish food in London. From Green Lanes institutions to Dalston ocakbaşı.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
  alternates: {
    canonical: 'https://turkishfoodinlondon.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content="51.5074;-0.1278" />
        <meta name="ICBM" content="51.5074, -0.1278" />
      </head>
      <body>
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

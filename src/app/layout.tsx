import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Turkish Food in London | The Insider\'s Guide',
  description: 'The definitive guide to Turkish food in London. From Green Lanes institutions to Dalston ocakbaşı. Written by someone who actually knows the difference.',
  openGraph: {
    title: 'Turkish Food in London | The Insider\'s Guide',
    description: 'The definitive guide to Turkish food in London. From Green Lanes institutions to Dalston ocakbaşı.',
    url: 'https://turkishfoodinlondon.com',
    siteName: 'Turkish Food in London',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

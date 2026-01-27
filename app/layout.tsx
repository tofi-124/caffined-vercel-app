import './globals.css'
import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import Navbar from './lib/Navbar'
import Footer from './lib/Footer'
import Script from 'next/script'
import ScrollToTop from './components/ScrollToTop'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { CartProvider } from './context/CartContext'
import CartDrawer from './components/CartDrawer'

const oswald = Oswald({ 
  subsets: ['latin'],
  display: 'swap'  // Improve font loading performance
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ethiocoffee.co'),
  title: 'Ethiopian Coffee Online | Premium Roasted Coffee Beans | Ethio Coffee',
  description: 'Shop premium Ethiopian coffee beans online. Fresh roasted Yirgacheffe, Sidamo, Guji & more. Direct from Ethiopia to your cup. Free shipping on orders over $75.',
  keywords: 'Ethiopian coffee online, buy Ethiopian coffee, Yirgacheffe coffee, Sidamo coffee, Guji coffee, premium coffee beans, roasted coffee, specialty coffee, Ethiopian coffee shop',
  authors: [{ name: 'Ethio Coffee' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://ethiocoffee.co',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ethiocoffee.co',
    title: 'Ethio Coffee - Premium Ethiopian Coffee Online',
    description: 'Shop premium Ethiopian coffee beans. Fresh roasted and delivered to your door.',
    siteName: 'Ethio Coffee',
    images: [
      {
        url: '/images/coffee-pack-1.webp',
        width: 900,
        height: 600,
        alt: 'Ethiopian Coffee Packaging',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethio Coffee - Premium Ethiopian Coffee Online',
    description: 'Shop premium Ethiopian coffee beans. Fresh roasted and delivered to your door.',
    images: ['/images/coffee-pack-1.webp'],
    creator: '@ethiocoffee',
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
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Ethio Coffee",
              "legalName": "Ethio Coffee Company Inc.",
              "url": "https://ethiocoffee.co",
              "logo": "https://ethiocoffee.co/images/new-logo.png",
              "description": "Premium Ethiopian coffee roasted and delivered fresh to coffee lovers across Canada.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Financial District",
                "addressLocality": "Toronto",
                "addressRegion": "ON",
                "addressCountry": "Canada"
              },
              "hasPOS": [
                {
                  "@type": "Place",
                  "name": "Addis Ababa Office",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Yesak Building, 3rd Floor, Office 301, Lideta",
                    "addressLocality": "Addis Ababa",
                    "addressCountry": "Ethiopia"
                  }
                },
                {
                  "@type": "Place",
                  "name": "Toronto Office",
                  "description": "Canada operations office",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Financial District",
                    "addressLocality": "Toronto",
                    "addressRegion": "ON",
                    "addressCountry": "CA"
                  }
                }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "info@ethiocoffee.et"
              },
              "sameAs": [
                "https://instagram.com/ethiocoffee.et"
              ],
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 9.0054,
                  "longitude": 38.7636
                },
                "geoRadius": "50000"
              },
              "knowsAbout": [
                "Ethiopian Coffee",
                "Green Coffee Beans",
                "Coffee Export",
                "Yirgacheffe Coffee",
                "Sidamo Coffee",
                "Guji Coffee",
                "Direct Trade Coffee"
              ]
            })
          }}
        />
        {/* Website Schema for Sitelinks */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Ethio Coffee",
              "url": "https://ethiocoffee.co",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://ethiocoffee.co/shop?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={oswald.className}>
        <CartProvider>
          <ScrollToTop />
          <Navbar />
          <CartDrawer />
          {children}
          <Footer />
        </CartProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

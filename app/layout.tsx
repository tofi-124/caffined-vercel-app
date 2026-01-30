import './globals.css'
import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import Navbar from './lib/Navbar'
import Footer from './lib/Footer'
import Script from 'next/script'
import ScrollToTop from './components/ScrollToTop'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from "@vercel/speed-insights/next"

const oswald = Oswald({ 
  subsets: ['latin'],
  display: 'swap'  // Improve font loading performance
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ethiocoffee.et'),
  title: 'Ethiopian Coffee Exporter | Green Coffee for Importers Worldwide | Ethio Coffee',
  description: 'Ethiopian coffee exporter serving importers worldwide. Ethio Coffee Export PLC offers Grade 1-4 green coffee from Yirgacheffe, Sidamo & Guji. Direct from origin, professional export service, traceable sourcing.',
  keywords: 'Ethiopian coffee exporter, green coffee exporter Ethiopia, Ethiopian coffee supplier, green coffee beans wholesale, Yirgacheffe coffee exporter, Sidamo coffee, Guji coffee, direct trade Ethiopian coffee, coffee for importers',
  authors: [{ name: 'Ethio Coffee' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://ethiocoffee.et',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ethiocoffee.et',
    title: 'Ethio Coffee - Ethiopian Coffee Exporter for Importers Worldwide',
    description: 'Premium Ethiopian green coffee exports for importers worldwide. Direct from origin with full traceability.',
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
    title: 'Ethio Coffee - Ethiopian Coffee Exporter for Importers Worldwide',
    description: 'Premium Ethiopian green coffee exports for importers worldwide. Direct from origin with full traceability.',
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
              "legalName": "Ethio Coffee Export PLC",
              "url": "https://ethiocoffee.et",
              "logo": "https://ethiocoffee.et/images/new-logo.png",
              "description": "Ethiopian coffee exporter serving importers worldwide with premium, traceable green coffee.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Yesak Building, 3rd Floor, Office 301, Lideta",
                "addressLocality": "Addis Ababa",
                "addressCountry": "Ethiopia"
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
              "url": "https://ethiocoffee.et",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://ethiocoffee.et/offerings?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={oswald.className}>
        <ScrollToTop />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

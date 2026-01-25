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
  title: 'Ethiopian Green Coffee Supplier | Wholesale Exports for Roasters | Ethio Coffee',
  description: 'Buy Ethiopian green coffee beans direct from origin. Ethio Coffee exports Grade 1-4 Yirgacheffe, Sidamo & Guji to roasters and cafés worldwide. Specialty to commercial grades, traceable sourcing.',
  keywords: 'Ethiopian green coffee supplier, buy Ethiopian coffee wholesale, Ethiopian coffee exporter, green coffee beans wholesale, Yirgacheffe coffee supplier, Sidamo coffee, Guji coffee, direct trade Ethiopian coffee, coffee for roasters',
  authors: [{ name: 'Ethio Coffee' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://ethiocoffee.et',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ethiocoffee.et',
    title: 'Ethio Coffee - Premium Ethiopian Coffee exports',
    description: 'Premium Ethiopian coffee exports for specialty markets worldwide.',
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
    title: 'Ethio Coffee - Premium Ethiopian Coffee exports',
    description: 'Premium Ethiopian coffee exports for specialty markets worldwide.',
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
              "legalName": "Ethio Coffee Import and Export PLC",
              "url": "https://ethiocoffee.et",
              "logo": "https://ethiocoffee.et/images/new-logo.png",
              "description": "Premium Ethiopian coffee exports for specialty cafés and roasters worldwide.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Lideta",
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
                },
                {
                  "@type": "Place",
                  "name": "Toronto Office",
                  "description": "Canada operations office",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Adelaide St W & Spadina Ave",
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

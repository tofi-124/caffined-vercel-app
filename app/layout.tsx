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
  metadataBase: new URL('https://www.ethiocoffee.et'),
  title: 'Ethiopian Coffee Exporter | Ethio Coffee',
  description: 'Ethiopian coffee exporter serving importers worldwide. Grade 1-4 green coffee from Yirgacheffe, Sidamo & Guji. Direct from origin with full traceability.',
  keywords: 'Ethiopian coffee exporter, green coffee exporter Ethiopia, Ethiopian coffee supplier, green coffee beans wholesale, Yirgacheffe coffee exporter, Sidamo coffee, Guji coffee, direct trade Ethiopian coffee, coffee for importers',
  authors: [{ name: 'Ethio Coffee' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.ethiocoffee.et',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ethiocoffee.et',
    title: 'Ethiopian Coffee Exporter | Ethio Coffee',
    description: 'Speciality Ethiopian green coffee exports for importers worldwide. Direct from origin with full traceability.',
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
    title: 'Ethiopian Coffee Exporter | Ethio Coffee',
    description: 'Speciality Ethiopian green coffee exports for importers worldwide. Direct from origin with full traceability.',
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
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness"],
              "name": "Ethio Coffee",
              "legalName": "Ethio Coffee Export PLC",
              "url": "https://www.ethiocoffee.et",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.ethiocoffee.et/images/new-logo.png",
                "width": "250",
                "height": "60"
              },
              "image": "https://www.ethiocoffee.et/images/new-logo.png",
              "description": "Ethiopian coffee exporter serving importers worldwide with speciality, traceable green coffee.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Yesak Building, 3rd Floor, Office 301, Lideta",
                "addressLocality": "Addis Ababa",
                "addressCountry": "ET"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 9.0054,
                "longitude": 38.7636
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "email": "info@ethiocoffee.et",
                  "availableLanguage": ["English", "Amharic"]
                },
                {
                  "@type": "ContactPoint",
                  "contactType": "sales",
                  "email": "info@ethiocoffee.et",
                  "availableLanguage": ["English", "Amharic"]
                }
              ],
              "sameAs": [
                "https://instagram.com/ethiocoffee.et"
              ],
              "areaServed": [
                {"@type": "Country", "name": "United States"},
                {"@type": "Country", "name": "Canada"},
                {"@type": "Country", "name": "United Kingdom"},
                {"@type": "Country", "name": "Germany"},
                {"@type": "Country", "name": "Japan"},
                {"@type": "Country", "name": "South Korea"},
                {"@type": "Country", "name": "Australia"},
                {"@type": "Country", "name": "United Arab Emirates"},
                {"@type": "Country", "name": "Saudi Arabia"}
              ],
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Ethiopian Green Coffee Beans",
                    "description": "Premium green coffee beans from Ethiopia"
                  }
                }
              ],
              "knowsAbout": [
                "Ethiopian Coffee",
                "Green Coffee Beans",
                "Coffee Export",
                "Yirgacheffe Coffee",
                "Sidamo Coffee",
                "Guji Coffee",
                "Harar Coffee",
                "Limu Coffee",
                "Direct Trade Coffee",
                "Specialty Coffee",
                "Coffee Sourcing"
              ],
              "foundingDate": "2022",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "12"
              }
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
              "alternateName": "Ethio Coffee Export PLC",
              "url": "https://www.ethiocoffee.et",
              "description": "Ethiopian coffee exporter serving importers worldwide",
              "publisher": {
                "@type": "Organization",
                "name": "Ethio Coffee Export PLC"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.ethiocoffee.et/offerings?search={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        {/* BreadcrumbList Schema */}
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.ethiocoffee.et"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Offerings",
                  "item": "https://www.ethiocoffee.et/offerings"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Insights",
                  "item": "https://www.ethiocoffee.et/insights"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "About",
                  "item": "https://www.ethiocoffee.et/about"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Contact",
                  "item": "https://www.ethiocoffee.et/contact-us"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${oswald.className} bg-primary`}>
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

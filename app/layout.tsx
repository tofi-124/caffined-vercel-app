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
  title: 'Ethiopian Coffee Exporter | Export Green Coffee from Ethiopia | Ethio Coffee',
  description: 'Leading Ethiopian coffee exporter shipping specialty green coffee worldwide. We export Grade 1-4 Yirgacheffe, Sidamo & Guji direct from Ethiopia. Request samples today.',
  keywords: 'Ethiopian coffee exporter, Ethiopian coffee export, export coffee from Ethiopia, green coffee exporter Ethiopia, Ethiopian coffee supplier, Ethiopian green coffee beans, coffee export Ethiopia, Yirgacheffe exporter, Sidamo exporter, Guji exporter, specialty coffee Ethiopia, buy Ethiopian coffee wholesale',
  authors: [{ name: 'Ethio Coffee' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ethiocoffee.et',
    title: 'Ethiopian Coffee Exporter | Export Green Coffee from Ethiopia | Ethio Coffee',
    description: 'Leading Ethiopian coffee exporter shipping specialty green coffee worldwide. We export Grade 1-4 Yirgacheffe, Sidamo & Guji direct from Ethiopia.',
    siteName: 'Ethio Coffee',
    images: [
      {
        url: '/images/coffee-pack-1.webp',
        width: 900,
        height: 600,
        alt: 'Ethiopian green coffee beans for export - specialty grade',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethiopian Coffee Exporter | Export Green Coffee from Ethiopia | Ethio Coffee',
    description: 'Leading Ethiopian coffee exporter shipping specialty green coffee worldwide. We export Grade 1-4 Yirgacheffe, Sidamo & Guji direct from Ethiopia.',
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
      </head>
      <body className={`${oswald.className} bg-primary`}>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness"],
              "name": "Ethio Coffee - Ethiopian Coffee Exporter",
              "legalName": "Ethio Coffee Export PLC",
              "alternateName": ["Ethiopian Coffee Exporter", "Ethio Coffee", "Ethiopia Coffee Export"],
              "url": "https://www.ethiocoffee.et",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.ethiocoffee.et/images/new-logo.png",
                "width": "250",
                "height": "60"
              },
              "image": "https://www.ethiocoffee.et/images/new-logo.png",
              "description": "Leading Ethiopian coffee exporter specializing in export of specialty green coffee beans from Ethiopia to importers worldwide. Grade 1-4 Yirgacheffe, Sidamo, Guji available.",
              "slogan": "Your Gateway to Ethiopia's Finest Specialty Green Coffee",
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
              "knowsAbout": [
                "Ethiopian Coffee Export",
                "Coffee Sourcing",
                "Yirgacheffe Coffee",
                "Sidamo Coffee",
                "Guji Coffee",
                "Harar Coffee",
                "Limu Coffee",
                "Direct Trade Coffee",
                "Specialty Coffee"
              ],
              "makesOffer": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Ethiopian Green Coffee Beans",
                  "description": "Premium specialty-grade Ethiopian green coffee beans for export to importers and roasters worldwide. SCA 80+ rated lots from Yirgacheffe, Sidamo, Guji, Harar, and Limu regions.",
                  "brand": {"@type": "Brand", "name": "Ethio Coffee"},
                  "category": "Green Coffee Beans",
                  "countryOfOrigin": {"@type": "Country", "name": "Ethiopia"},
                  "image": "https://www.ethiocoffee.et/images/coffee-pack-1.webp",
                  "url": "https://www.ethiocoffee.et/offerings",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "priceCurrency": "USD",
                    "price": "0",
                    "priceValidUntil": "2027-12-31",
                    "url": "https://www.ethiocoffee.et/contact-us",
                    "seller": {"@type": "Organization", "name": "Ethio Coffee Export PLC"}
                  }
                }
              },
              "foundingDate": "2022"
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
                  "name": "Ethiopian Coffee Export",
                  "item": "https://www.ethiocoffee.et/ethiopian-coffee-export"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Offerings",
                  "item": "https://www.ethiocoffee.et/offerings"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Insights",
                  "item": "https://www.ethiocoffee.et/insights"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "About",
                  "item": "https://www.ethiocoffee.et/about"
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "name": "Contact",
                  "item": "https://www.ethiocoffee.et/contact-us"
                }
              ]
            })
          }}
        />
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

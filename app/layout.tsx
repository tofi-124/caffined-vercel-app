import './globals.css'
import type { Metadata } from 'next'
import { Oswald, Inconsolata } from 'next/font/google'
import Navbar from './lib/Navbar'
import Footer from './lib/Footer'
import Script from 'next/script'
import ScrollToTop from './components/ScrollToTop'
import ContactFAB from './components/WhatsAppButton'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { CartProvider } from './components/CartContext'
import CartDrawer from './components/CartDrawer'

const oswald = Oswald({ 
  subsets: ['latin'],
  display: 'optional',
  variable: '--font-oswald',
  adjustFontFallback: true,
  fallback: ['Arial Narrow', 'sans-serif'],
})

const inconsolata = Inconsolata({
  subsets: ['latin'],
  display: 'optional',
  variable: '--font-inconsolata',
  adjustFontFallback: true,
  fallback: ['Courier New', 'monospace'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ethiocoffee.co'),
  title: 'Ethiopian Green Coffee Export | Ethio Coffee',
  description: 'Leading Ethiopian coffee exporter shipping specialty green coffee worldwide. We export Grade 1-4 Yirgacheffe, Sidamo & Guji direct from Ethiopia.',
  keywords: 'Ethiopian coffee exporter, Ethiopian coffee export, export coffee from Ethiopia, green coffee exporter Ethiopia, Ethiopian coffee supplier, Ethiopian green coffee beans, coffee export Ethiopia, Yirgacheffe exporter, Sidamo exporter, Guji exporter, specialty coffee Ethiopia, buy Ethiopian coffee wholesale',
  authors: [{ name: 'Ethio Coffee' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ethiocoffee.co',
    title: 'Ethiopian Green Coffee Export | Ethio Coffee',
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
    title: 'Ethiopian Green Coffee Export | Ethio Coffee',
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
        {/* Removed: preconnect to own domain is redundant (already connected) */}
        {/* Removed: manual preload fetched the ORIGINAL image; Next.js Image priority
            already preloads the correctly optimized /_next/image version */}
        <link rel="preconnect" href="https://pub-a50856304cf24e0c890889f05812d10b.r2.dev" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://pub-a50856304cf24e0c890889f05812d10b.r2.dev" />
      </head>
      <body className={`${oswald.className} ${inconsolata.variable} bg-primary`}>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness"],
              "name": "Ethio Coffee - Ethiopian Coffee Exporter",
              "legalName": "Ethio Coffee Export PLC",
              "alternateName": ["Ethiopian Coffee Exporter", "Ethio Coffee", "Ethiopia Coffee Export"],
              "url": "https://www.ethiocoffee.co",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.ethiocoffee.co/images/new-logo.png",
                "width": "250",
                "height": "60"
              },
              "image": "https://www.ethiocoffee.co/images/new-logo.png",
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
                  "email": "coffee@ethiocoffee.co",
                  "availableLanguage": ["English", "Amharic"]
                },
                {
                  "@type": "ContactPoint",
                  "contactType": "sales",
                  "email": "coffee@ethiocoffee.co",
                  "availableLanguage": ["English", "Amharic"]
                }
              ],
              "sameAs": [
                "https://instagram.com/ethiocoffee.co"
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
              
              "foundingDate": "2022"
            })
          }}
        />
        {/* Website Schema for Sitelinks */}
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Ethio Coffee",
              "alternateName": "Ethio Coffee Export PLC",
              "url": "https://www.ethiocoffee.co",
              "description": "Ethiopian coffee exporter serving importers worldwide",
              "publisher": {
                "@type": "Organization",
                "name": "Ethio Coffee Export PLC"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.ethiocoffee.co/offerings?search={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        {/* BreadcrumbList Schema - removed: breadcrumbs should be hierarchical per-page, not flat site-wide */}
        <ScrollToTop />
        <CartProvider>
        <ContactFAB />
        <CartDrawer />
        <Navbar />
        <div className="min-h-screen">
          {children}
        </div>
        <Footer />
        </CartProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

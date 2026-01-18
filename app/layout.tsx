import './globals.css'
import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import Navbar from './lib/Navbar'
import Footer from './lib/Footer'
import Script from 'next/script'
import ScrollToTop from './components/ScrollToTop'

const oswald = Oswald({ 
  subsets: ['latin'],
  display: 'swap'  // Improve font loading performance
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ethiocoffee.et'),
  title: 'Ethio Coffee - Premium Ethiopian Coffee exports',
  description: 'Premium Ethiopian coffee exports for specialty cafés and roasters worldwide. Experience distinctive floral and fruity notes from the birthplace of coffee.',
  keywords: 'Ethiopian coffee, specialty coffee, coffee exports, wholesale coffee, coffee exporters, arabica coffee',
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
                    "streetAddress": "Lideta",
                    "addressLocality": "Addis Ababa",
                    "addressCountry": "Ethiopia"
                  }
                },
                {
                  "@type": "Place",
                  "name": "Hamilton Warehouse",
                  "description": "Warehouse and logistics point",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Hamilton",
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
              ]
            })
          }}
        />
      </head>
      <body className={oswald.className}>
        <ScrollToTop />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

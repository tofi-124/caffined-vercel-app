import './globals.css'
import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import Navbar from './lib/Navbar'
import Footer from './lib/Footer'
import {CartProvider} from './Context/store'
import Script from 'next/script'
import ScrollToTop from './components/ScrollToTop'

const oswald = Oswald({ 
  subsets: ['latin'],
  display: 'swap'  // Improve font loading performance
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ethiocoffee.com'),
  title: 'Ethio Coffee - Ethiopian Coffee Delivered',
  description: 'Shop premium Ethiopian coffee—bright, floral, and fruit-forward—delivered to your door.',
  keywords: 'Ethiopian coffee, specialty coffee, coffee beans, buy coffee online',
  authors: [{ name: 'Ethio Coffee' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://ethiocoffee.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ethiocoffee.com',
    title: 'Ethio Coffee - Ethiopian Coffee Delivered',
    description: 'Shop premium Ethiopian coffee delivered to your door.',
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
    title: 'Ethio Coffee - Ethiopian Coffee Delivered',
    description: 'Shop premium Ethiopian coffee delivered to your door.',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Ethio Coffee",
              "url": "https://ethiocoffee.com",
              "logo": "https://ethiocoffee.com/images/cafiend-logo.svg",
              "description": "Premium Ethiopian coffee delivered to your door.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Global Headquarters"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-647-555-1212",
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
        <CartProvider>
          <ScrollToTop />
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}

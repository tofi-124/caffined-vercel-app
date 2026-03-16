import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'About Us | Ethiopian Coffee Export Company | Ethio Coffee',
  description: 'Leading Ethiopian coffee export company with 30+ years family legacy. We export green coffee from Ethiopia to importers worldwide. Grade 1-5 available.',
  keywords: 'Ethiopian coffee export company, Ethiopian coffee exporter, about Ethio Coffee, export coffee from Ethiopia, Ethiopian green coffee supplier, direct trade coffee Ethiopia, family coffee business Ethiopia, coffee export Ethiopia',
  alternates: {
    canonical: 'https://www.ethiocoffee.co/about',
  },
  openGraph: {
    title: 'About Us | Ethiopian Coffee Export Company | Ethio Coffee',
    description: 'Family-built Ethiopian coffee export company founded by two brothers, connecting traceable Ethiopian green coffee with importers worldwide.',
    url: 'https://www.ethiocoffee.co/about',
    type: 'website',
    images: [
      {
        url: '/images/about-us.webp',
        width: 1200,
        height: 630,
        alt: 'About Ethio Coffee - Ethiopian coffee export company with 30+ years family legacy',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Ethiopian Coffee Export Company | Ethio Coffee',
    description: 'Family-built Ethiopian coffee export company connecting traceable Ethiopian green coffee with importers worldwide.',
    images: ['/images/about-us.webp'],
  }
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Ethio Coffee",
    "description": "Ethiopian coffee exporter founded by two brothers with 30+ years family legacy. We serve importers worldwide with traceable Grade 1-4 green coffee.",
    "url": "https://www.ethiocoffee.co/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Ethio Coffee Import and Export PLC",
      "url": "https://www.ethiocoffee.co",
      "logo": "https://www.ethiocoffee.co/images/new-logo.png",
      "foundingDate": "2022",
      "founders": [
        {
          "@type": "Person",
          "name": "Ethio Coffee Founders"
        }
      ],
      "knowsAbout": [
        "Ethiopian Coffee Export",
        "Green Coffee Beans",
        "Green Coffee",
        "Direct Trade",
        "Coffee Sourcing"
      ]
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.ethiocoffee.co"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://www.ethiocoffee.co/about"
      }
    ]
  }

  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <Script
        id="about-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}

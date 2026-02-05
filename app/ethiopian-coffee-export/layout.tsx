import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Ethiopian Specialty Coffee Export | Export Green Coffee from Ethiopia | Ethio Coffee',
  description: 'Ethiopian specialty coffee export services for importers worldwide. We export specialty grade green coffee (80+ SCA score) from Ethiopia including Yirgacheffe, Sidamo, Guji & more. Request samples today.',
  keywords: 'Ethiopian specialty coffee export, specialty coffee export Ethiopia, Ethiopian coffee export, export specialty coffee from Ethiopia, Ethiopian coffee exporter, green coffee export Ethiopia, specialty green coffee Ethiopia, Ethiopian Arabica export, SCA 80+ Ethiopian coffee, export Ethiopian specialty beans, Ethiopian coffee trade, specialty coffee exporter Ethiopia, wholesale Ethiopian specialty coffee, Ethiopian single origin export',
  alternates: {
    canonical: 'https://www.ethiocoffee.et/ethiopian-coffee-export',
  },
  openGraph: {
    title: 'Ethiopian Specialty Coffee Export | Export Green Coffee from Ethiopia',
    description: 'Leading Ethiopian specialty coffee export company. We export SCA 80+ specialty green coffee from Ethiopia to importers worldwide. Yirgacheffe, Sidamo, Guji & more.',
    url: 'https://www.ethiocoffee.et/ethiopian-coffee-export',
    type: 'website',
    images: [
      {
        url: '/images/ethiopian-coffee-export.webp',
        width: 1200,
        height: 630,
        alt: 'Ethiopian specialty coffee export - premium green coffee beans ready for export',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethiopian Specialty Coffee Export | Export Green Coffee from Ethiopia',
    description: 'Leading Ethiopian specialty coffee export company shipping SCA 80+ green coffee worldwide.',
    images: ['/images/ethiopian-coffee-export.webp'],
  },
}

export default function EthiopianCoffeeExportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Comprehensive Service schema for Ethiopian coffee export
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Ethiopian Specialty Coffee Export Services",
    "alternateName": ["Ethiopia Specialty Coffee Export", "Specialty Green Coffee Export from Ethiopia", "Ethiopian Coffee Export"],
    "description": "Professional Ethiopian specialty coffee export services connecting SCA 80+ rated Ethiopian green coffee with importers worldwide. We handle sourcing, quality control, cupping, documentation, and logistics for specialty-grade Ethiopian Arabica.",
    "url": "https://www.ethiocoffee.et/ethiopian-coffee-export",
    "provider": {
      "@type": "Organization",
      "name": "Ethio Coffee Export PLC",
      "url": "https://www.ethiocoffee.et"
    },
    "serviceType": "Specialty Coffee Export",
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Ethiopian Specialty Coffee Export Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "itemOffered": {
            "@type": "Service",
            "name": "Specialty Yirgacheffe Coffee Export",
            "description": "SCA 84+ specialty-grade Yirgacheffe green coffee beans for export"
          },
          "seller": {
            "@type": "Organization",
            "name": "Ethio Coffee Export PLC"
          }
        },
        {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "itemOffered": {
            "@type": "Service",
            "name": "Specialty Sidamo Coffee Export",
            "description": "SCA 84+ specialty-grade Sidamo green coffee beans for export"
          },
          "seller": {
            "@type": "Organization",
            "name": "Ethio Coffee Export PLC"
          }
        },
        {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "itemOffered": {
            "@type": "Service",
            "name": "Specialty Guji Coffee Export",
            "description": "SCA 84+ specialty-grade Guji green coffee beans for export"
          },
          "seller": {
            "@type": "Organization",
            "name": "Ethio Coffee Export PLC"
          }
        }
      ]
    }
  }

  // WebPage schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Ethiopian Specialty Coffee Export",
    "description": "Comprehensive guide to Ethiopian specialty coffee export services and how to export specialty green coffee from Ethiopia",
    "url": "https://www.ethiocoffee.et/ethiopian-coffee-export",
    "mainEntity": {
      "@type": "Service",
      "name": "Ethiopian Specialty Coffee Export"
    },
    "breadcrumb": {
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
          "name": "Ethiopian Specialty Coffee Export",
          "item": "https://www.ethiocoffee.et/ethiopian-coffee-export"
        }
      ]
    }
  }

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      {children}
    </>
  )
}

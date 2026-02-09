import { Metadata } from 'next'
import Script from 'next/script'
import { offerings } from '../data/offerings'

export const metadata: Metadata = {
  title: 'Ethiopian Coffee for Export | Green Coffee Lots | Ethio Coffee',
  description: 'Ethiopian coffee available for export: Yirgacheffe, Sidamo, Guji, Harar & Limu. Grade 1-4 green coffee ready for export to importers worldwide.',
  keywords: 'Ethiopian coffee for export, Ethiopian green coffee export, buy Ethiopian green coffee, Yirgacheffe coffee export, Sidamo green coffee, Guji coffee beans, Ethiopian coffee for importers, specialty green coffee export, Ethiopian coffee wholesale',
  alternates: {
    canonical: 'https://www.ethiocoffee.et/offerings',
  },
  openGraph: {
    title: 'Ethiopian Coffee for Export | Ethio Coffee',
    description: 'Ethiopian coffee available for export: Yirgacheffe, Sidamo, Guji, Harar & Limu. Grade 1-4 green coffee ready for export.',
    url: 'https://www.ethiocoffee.et/offerings',
    type: 'website',
    images: [
      {
        url: '/images/coffee-pack-1.webp',
        width: 900,
        height: 600,
        alt: 'Ethiopian green coffee lots available for export - Yirgacheffe, Sidamo, Guji',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethiopian Coffee for Export | Ethio Coffee',
    description: 'Ethiopian coffee available for export: Yirgacheffe, Sidamo, Guji, Harar & Limu.',
    images: ['/images/coffee-pack-1.webp'],
  }
}

export default function OfferingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Create ItemList schema for coffee offerings
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Ethiopian Green Coffee Offerings",
    "description": "Premium Ethiopian green coffee beans available for export",
    "numberOfItems": offerings.length,
    "itemListElement": offerings.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "description": product.desc,
        "image": `https://www.ethiocoffee.et/images/${product.image_url}`,
        "url": `https://www.ethiocoffee.et/product/${product.id}`,
        "offers": {
          "@type": "Offer",
          "availability": product.isSoldOut 
            ? "https://schema.org/OutOfStock" 
            : "https://schema.org/InStock",
          "priceCurrency": "USD",
          "url": `https://www.ethiocoffee.et/product/${product.id}`
        }
      }
    }))
  }

  const breadcrumbSchema = {
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
        "name": "Ethiopian Coffee Offerings",
        "item": "https://www.ethiocoffee.et/offerings"
      }
    ]
  }

  return (
    <>
      <Script
        id="offerings-itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Script
        id="offerings-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}
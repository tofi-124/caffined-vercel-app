import { Metadata } from 'next'
import Script from 'next/script'
import { offerings } from '../data/offerings'

export const metadata: Metadata = {
  title: 'Ethiopian Green Coffee Offerings | Ethio Coffee',
  description: 'Browse Ethiopian green coffee offerings (Grades 1-4): Yirgacheffe, Sidamo, Guji, Harar & Limu. Specialty and commercial grades available.',
  keywords: 'buy Ethiopian green coffee, Yirgacheffe coffee wholesale, Sidamo green coffee, Guji coffee beans, Ethiopian coffee for importers, specialty green coffee, Grade 1 Ethiopian coffee, commercial grade coffee',
  alternates: {
    canonical: 'https://www.ethiocoffee.et/offerings',
  },
  openGraph: {
    title: 'Ethiopian Green Coffee Offerings | Ethio Coffee',
    description: 'Browse Ethiopian green coffee offerings (Grades 1-4): Yirgacheffe, Sidamo, Guji, Harar & Limu. Specialty and commercial grades available.',
    url: 'https://www.ethiocoffee.et/offerings',
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
          "priceCurrency": "USD"
        }
      }
    }))
  }

  return (
    <>
      <Script
        id="offerings-itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      {children}
    </>
  )
}
import type { Metadata } from 'next'
import Script from 'next/script'
import { offerings } from '@/app/data/offerings'

type Props = {
  params: Promise<{ productId: string }>
  children: React.ReactNode
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId } = await params
  const product = offerings.find((o) => o.id === productId)

  if (!product) {
    return {
      title: 'Offering Not Found | Ethio Coffee',
      description: 'The offering you are looking for is not available.',
      alternates: { canonical: 'https://ethiocoffee.et/offerings' },
    }
  }

  // SEO-optimized title with keywords
  const title = `${product.name} Ethiopian Green Coffee | Grade ${product.specifications.grade} ${product.specifications.processingMethod} | Ethio Coffee`
  // Longer, keyword-rich description
  const description = `Buy ${product.name} Ethiopian green coffee beans. ${product.specifications.processingMethod} processed, Grade ${product.specifications.grade}, ${product.altitude} altitude. Flavor notes: ${product.flavorNotes.join(', ')}. Request samples from Ethio Coffee.`

  return {
    title,
    description,
    keywords: `${product.name} coffee, Ethiopian ${product.name.toLowerCase()}, ${product.specifications.processingMethod} Ethiopian coffee, ${product.region} coffee, buy ${product.name.toLowerCase()} green coffee, ${product.flavorNotes.join(', ')}`,
    alternates: {
      canonical: `https://ethiocoffee.et/product/${product.id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://ethiocoffee.et/product/${product.id}`,
      images: [{ url: `/images/${product.image_url}` }],
    },
  }
}

export default async function ProductLayout({ params, children }: Props) {
  const { productId } = await params
  const product = offerings.find((o) => o.id === productId)
  
  // Product structured data for rich snippets
  const productSchema = product ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${product.name} Ethiopian Green Coffee`,
    "description": product.desc,
    "image": `https://ethiocoffee.et/images/${product.image_url}`,
    "brand": {
      "@type": "Brand",
      "name": "Ethio Coffee"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Ethio Coffee Import and Export PLC"
    },
    "category": "Green Coffee Beans",
    "material": "100% Arabica Coffee",
    "countryOfOrigin": "Ethiopia",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Grade",
        "value": product.specifications.grade
      },
      {
        "@type": "PropertyValue",
        "name": "Processing Method",
        "value": product.specifications.processingMethod
      },
      {
        "@type": "PropertyValue",
        "name": "Region",
        "value": product.region
      },
      {
        "@type": "PropertyValue",
        "name": "Altitude",
        "value": product.altitude
      },
      {
        "@type": "PropertyValue",
        "name": "Cup Score",
        "value": product.specifications.cupScore
      }
    ],
    "offers": {
      "@type": "Offer",
      "availability": product.isSoldOut 
        ? "https://schema.org/OutOfStock" 
        : "https://schema.org/InStock",
      "priceCurrency": "USD",
      "seller": {
        "@type": "Organization",
        "name": "Ethio Coffee Import and Export PLC"
      }
    }
  } : null

  return (
    <>
      {productSchema && (
        <Script
          id={`product-schema-${productId}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      )}
      {children}
    </>
  )
}

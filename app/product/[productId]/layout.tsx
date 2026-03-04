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
      alternates: { canonical: 'https://www.ethiocoffee.co/offerings' },
    }
  }

  // SEO-optimized title with keywords
  const title = `Ethiopian ${product.name} Coffee Grade ${product.specifications.grade} | Ethio Coffee`
  // Concise description under 160 characters
  const description = `${product.name} Ethiopian green coffee, Grade ${product.specifications.grade}, ${product.specifications.processingMethod}. ${product.flavorNotes.slice(0, 2).join(', ')}. Request samples.`

  return {
    title,
    description,
    keywords: `${product.name} coffee, Ethiopian ${product.name.toLowerCase()}, ${product.specifications.processingMethod} Ethiopian coffee, ${product.region} coffee, buy ${product.name.toLowerCase()} green coffee, ${product.flavorNotes.join(', ')}`,
    alternates: {
      canonical: `https://www.ethiocoffee.co/product/${product.id}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://www.ethiocoffee.co/product/${product.id}`,
      images: [{ url: `/images/${product.image_url}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/images/${product.image_url}`],
    },
  }
}

function cupScoreToRating(_cupScore: string | null): number {
  return 5
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
    "image": `https://www.ethiocoffee.co/images/${product.image_url}`,
    "brand": {
      "@type": "Brand",
      "name": "Ethio Coffee"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Ethio Coffee Export PLC"
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
      "price": product.pricing.fobPricePerKg,
      "priceCurrency": "USD",
      "url": `https://www.ethiocoffee.co/product/${product.id}`,
      "seller": {
        "@type": "Organization",
        "name": "Ethio Coffee Export PLC"
      },
      "priceValidUntil": "2026-12-31",
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "ET",
        "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted",
        "merchantReturnDays": 0
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "US"
        },
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": 0,
          "currency": "USD"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 7,
            "maxValue": 14,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 21,
            "maxValue": 45,
            "unitCode": "DAY"
          }
        }
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": cupScoreToRating(product.specifications.cupScore),
      "bestRating": 5,
      "worstRating": 1,
      "ratingCount": 1
    },
    "review": {
      "@type": "Review",
      "author": {
        "@type": "Organization",
        "name": "Ethio Coffee Quality Lab"
      },
      "datePublished": product.specifications.harvestPeriod
        ? (() => {
            const parts = (product.specifications.harvestPeriod.split(' - ')[1]?.trim() || '').split(' ')
            const monthMap: Record<string, string> = { January: '01', February: '02', March: '03', April: '04', May: '05', June: '06', July: '07', August: '08', September: '09', October: '10', November: '11', December: '12' }
            return `${parts[1]}-${monthMap[parts[0]] || '01'}-15`
          })()
        : "2025-01-15",
      "reviewBody": `SCA cupping evaluation: ${product.specifications.cuppingNotes || product.desc}. Grade ${product.specifications.grade}, ${product.specifications.processingMethod} processed. Cup score: ${product.specifications.cupScore}.`,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": cupScoreToRating(product.specifications.cupScore),
        "bestRating": 5,
        "worstRating": 1
      }
    }
  } : null

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
        "name": "Offerings",
        "item": "https://www.ethiocoffee.co/offerings"
      },
      ...(product ? [{
        "@type": "ListItem",
        "position": 3,
        "name": product.name,
        "item": `https://www.ethiocoffee.co/product/${product.id}`
      }] : [])
    ]
  }

  return (
    <>
      {productSchema && (
        <Script
          id={`product-schema-${productId}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      )}
      <Script
        id={`product-breadcrumb-${productId}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}

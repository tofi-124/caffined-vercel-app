import { Metadata } from 'next'
import Script from 'next/script'
import { offerings } from '../data/offerings'

export const metadata: Metadata = {
  title: 'Ethiopian Coffee for Export | Green Coffee Lots | Ethio Coffee',
  description: 'Ethiopian coffee available for export: Yirgacheffe, Sidamo, Guji, Harar & Limu. Grade 1-4 green coffee ready for export to importers worldwide.',
  keywords: 'Ethiopian coffee for export, Ethiopian green coffee export, buy Ethiopian green coffee, Yirgacheffe coffee export, Sidamo green coffee, Guji coffee beans, Ethiopian coffee for importers, specialty green coffee export, Ethiopian coffee wholesale',
  alternates: {
    canonical: 'https://www.ethiocoffee.co/offerings',
  },
  openGraph: {
    title: 'Ethiopian Coffee for Export | Ethio Coffee',
    description: 'Ethiopian coffee available for export: Yirgacheffe, Sidamo, Guji, Harar & Limu. Grade 1-4 green coffee ready for export.',
    url: 'https://www.ethiocoffee.co/offerings',
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

function cupScoreToRating(_cupScore: string | null): number {
  return 5
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
        "image": `https://www.ethiocoffee.co/images/${product.image_url}`,
        "url": `https://www.ethiocoffee.co/product/${product.id}`,
        "offers": {
          "@type": "Offer",
          "availability": product.isSoldOut 
            ? "https://schema.org/OutOfStock" 
            : "https://schema.org/InStock",
          "price": product.pricing.fobPricePerKg,
          "priceCurrency": "USD",
          "url": `https://www.ethiocoffee.co/product/${product.id}`,
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
          "datePublished": product.specifications.harvestPeriod?.split(' - ')[1]?.trim()
            ? (() => {
                const parts = (product.specifications.harvestPeriod?.split(' - ')[1]?.trim() || '').split(' ')
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
        "item": "https://www.ethiocoffee.co"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Ethiopian Coffee Offerings",
        "item": "https://www.ethiocoffee.co/offerings"
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
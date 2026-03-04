import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ethiopian Coffee Exporter | Ethio Coffee',
  description: 'Ethio Coffee: trusted Ethiopian coffee exporter shipping specialty green coffee (SCA 80+) worldwide. Yirgacheffe, Sidamo, Guji, Harar available. Order samples today.',
  keywords: 'Ethiopian coffee exporter, ethiopian coffee exporter company, coffee exporter ethiopia, ethiopia coffee exporter, best ethiopian coffee exporter, ethiopian green coffee exporter, ethiopian specialty coffee exporter, ethiopian arabica exporter, ethiopian coffee export company, ethiopian coffee supplier, buy ethiopian coffee wholesale, import ethiopian coffee, ethiopian coffee beans exporter, coffee export from ethiopia, green coffee beans ethiopia export',
  alternates: {
    canonical: 'https://www.ethiocoffee.co/ethiopian-coffee-exporter',
  },
  openGraph: {
    title: 'Ethiopian Coffee Exporter | Ethio Coffee Export PLC: Specialty & Commercial Green Coffee',
    description: 'Family-owned Ethiopian coffee exporter with 30+ years legacy. We export SCA 80+ specialty green coffee from Ethiopia to importers & roasters worldwide. Yirgacheffe, Sidamo, Guji & more.',
    url: 'https://www.ethiocoffee.co/ethiopian-coffee-exporter',
    type: 'website',
    images: [
      {
        url: '/images/ethiopian-coffee-export.webp',
        width: 1200,
        height: 630,
        alt: 'Ethiopian coffee exporter - Ethio Coffee Export PLC premium green coffee beans ready for export',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethiopian Coffee Exporter | Ethio Coffee Export PLC',
    description: 'Family-owned Ethiopian coffee exporter shipping SCA 80+ specialty green coffee to 40+ countries worldwide. Order samples today.',
    images: ['/images/ethiopian-coffee-export.webp'],
  },
}

export default function EthiopianCoffeeExporterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Organization schema - establishes E-E-A-T and business identity
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ethio Coffee Export PLC",
    "alternateName": ["Ethio Coffee", "Ethiopian Coffee Exporter"],
    "description": "Family-owned Ethiopian coffee exporter with 30+ years of heritage. We export specialty-grade (SCA 80+) and commercial green coffee from Ethiopia to roasters, importers, and distributors in 40+ countries worldwide.",
    "url": "https://www.ethiocoffee.co",
    "logo": "https://www.ethiocoffee.co/images/new-logo.png",
    "foundingDate": "2022",
    "founder": [
      {
        "@type": "Person",
        "name": "Co-Founder (Ethiopia)",
        "jobTitle": "Managing Director"
      },
      {
        "@type": "Person", 
        "name": "Co-Founder (Canada)",
        "jobTitle": "International Sales Director"
      }
    ],
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 10,
      "maxValue": 50
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Addis Ababa",
      "addressCountry": "ET"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "knowsAbout": [
      "Ethiopian coffee export",
      "Green coffee beans",
      "Specialty coffee",
      "Coffee cupping",
      "Yirgacheffe coffee",
      "Sidamo coffee",
      "Guji coffee",
      "Ethiopian Arabica"
    ],
    "sameAs": [
      "https://instagram.com/ethiocoffee.co"
    ]
  }

  // Service schema for Ethiopian coffee export services
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Ethiopian Coffee Export Services",
    "alternateName": ["Ethiopian Coffee Exporter Services", "Green Coffee Export from Ethiopia"],
    "description": "Full-service Ethiopian coffee export including sourcing, SCA-standard quality control, export documentation, packaging, and global logistics for specialty and commercial green coffee.",
    "url": "https://www.ethiocoffee.co/ethiopian-coffee-exporter",
    "provider": {
      "@type": "Organization",
      "name": "Ethio Coffee Export PLC",
      "url": "https://www.ethiocoffee.co"
    },
    "serviceType": "Coffee Export",
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Ethiopian Coffee Export Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "itemOffered": {
            "@type": "Product",
            "name": "Yirgacheffe Green Coffee Beans (Grade 1 & 2)",
            "description": "SCA 84-88+ specialty-grade Yirgacheffe green coffee for export. Floral, citrus, jasmine notes.",
            "brand": {"@type": "Brand", "name": "Ethio Coffee"},
            "category": "Green Coffee Beans",
            "countryOfOrigin": {"@type": "Country", "name": "Ethiopia"},
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "4.00",
              "highPrice": "8.00",
              "availability": "https://schema.org/InStock",
              "offeredBy": {"@type": "Organization", "name": "Ethio Coffee Export PLC"}
            }
          }
        },
        {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "itemOffered": {
            "@type": "Product",
            "name": "Sidamo Green Coffee Beans (Grade 1 & 2)",
            "description": "SCA 84-87+ specialty-grade Sidamo green coffee for export. Berry, wine-like acidity.",
            "brand": {"@type": "Brand", "name": "Ethio Coffee"},
            "category": "Green Coffee Beans",
            "countryOfOrigin": {"@type": "Country", "name": "Ethiopia"},
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "3.50",
              "highPrice": "7.00",
              "availability": "https://schema.org/InStock",
              "offeredBy": {"@type": "Organization", "name": "Ethio Coffee Export PLC"}
            }
          }
        },
        {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "itemOffered": {
            "@type": "Product",
            "name": "Guji Green Coffee Beans (Grade 1 & 2)",
            "description": "SCA 85-89+ specialty-grade Guji green coffee for export. Stone fruit, floral, tropical notes.",
            "brand": {"@type": "Brand", "name": "Ethio Coffee"},
            "category": "Green Coffee Beans",
            "countryOfOrigin": {"@type": "Country", "name": "Ethiopia"},
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "4.00",
              "highPrice": "9.00",
              "availability": "https://schema.org/InStock",
              "offeredBy": {"@type": "Organization", "name": "Ethio Coffee Export PLC"}
            }
          }
        },
        {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "itemOffered": {
            "@type": "Product",
            "name": "Harar Green Coffee Beans (Natural)",
            "description": "SCA 82-86+ natural-processed Harar green coffee for export. Wild berry, wine, chocolate characteristics.",
            "brand": {"@type": "Brand", "name": "Ethio Coffee"},
            "category": "Green Coffee Beans",
            "countryOfOrigin": {"@type": "Country", "name": "Ethiopia"},
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "3.00",
              "highPrice": "6.00",
              "availability": "https://schema.org/InStock",
              "offeredBy": {"@type": "Organization", "name": "Ethio Coffee Export PLC"}
            }
          }
        },
        {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "itemOffered": {
            "@type": "Product",
            "name": "Limu Green Coffee Beans (Washed)",
            "description": "SCA 82-85+ washed Limu green coffee for export. Balanced, wine and spice notes.",
            "brand": {"@type": "Brand", "name": "Ethio Coffee"},
            "category": "Green Coffee Beans",
            "countryOfOrigin": {"@type": "Country", "name": "Ethiopia"},
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "3.00",
              "highPrice": "5.50",
              "availability": "https://schema.org/InStock",
              "offeredBy": {"@type": "Organization", "name": "Ethio Coffee Export PLC"}
            }
          }
        }
      ]
    }
  }

  // FAQPage schema for rich snippets in search results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I find a reliable Ethiopian coffee exporter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Look for an Ethiopian coffee exporter that is licensed by the Ethiopian Coffee and Tea Authority (ECTA), has a physical presence at origin, offers pre-shipment samples for purchase, provides transparent pricing, and can demonstrate a track record with international buyers. Ethio Coffee Export PLC meets all these criteria. We are a family-owned, licensed exporter with 30+ years of coffee industry experience."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum order quantity for Ethiopian coffee export?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The standard minimum order for Ethiopian coffee export is one full container load (FCL), which is approximately 19-21 metric tons (275-320 bags of 60kg each). You can mix different origins and grades within one container."
        }
      },
      {
        "@type": "Question",
        "name": "What grades of Ethiopian coffee are available for export?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ethiopian coffee is graded from Grade 1 (highest specialty) to Grade 5. Grades 1-2 are specialty grade (SCA 80+ cup score), Grade 3 is high-commercial, and Grades 4-5 are commercial. We primarily export Grade 1 and Grade 2, which typically score 84-89+ on the SCA scale."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are needed to import Ethiopian coffee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your Ethiopian coffee exporter should provide: ICO Certificate of Origin, Phytosanitary Certificate, Weight & Quality Certificate, Commercial Invoice, Packing List, Bill of Lading, and SCA Cupping Report (for specialty lots)."
        }
      },
      {
        "@type": "Question",
        "name": "How long does shipping take from Ethiopia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "From order confirmation to arrival at your destination, expect 4-8 weeks total. This includes 1-2 weeks for lot preparation and documentation, plus 2-6 weeks of ocean transit depending on your destination port. We ship FOB Djibouti for ocean freight or FCA (Free Carrier) for air freight where the buyer arranges carriage."
        }
      },
      {
        "@type": "Question",
        "name": "Can I buy samples before committing to a full order?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer pre-shipment samples (green and roasted) available for purchase, with detailed SCA cupping reports included. We want you to be 100% satisfied with the cup quality before committing to a full container order."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between washed and natural Ethiopian coffee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Washed (wet-processed) Ethiopian coffee tends to have cleaner, brighter, and more complex acidity with floral and citrus notes, common in Yirgacheffe and Sidamo. Natural (dry-processed) Ethiopian coffee is typically fruitier, sweeter, and more full-bodied with berry and wine characteristics, common in Harar and Guji naturals."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Ethiopian coffee different from other origins?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ethiopia is the birthplace and genetic homeland of Arabica coffee, with 6,000+ indigenous heirloom varieties that produce flavor profiles impossible to replicate elsewhere. Ethiopian coffee is known for its exceptional complexity, floral aromatics, fruit-forward notes, and bright acidity."
        }
      },
      {
        "@type": "Question",
        "name": "Can you provide certified organic or Fair Trade Ethiopian coffee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we have access to Organic (USDA/EU certified), Fair Trade, and Rainforest Alliance certified lots depending on seasonal availability and origin."
        }
      },
      {
        "@type": "Question",
        "name": "How do I pay for Ethiopian coffee exports?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard payment terms for Ethiopian coffee export include Letter of Credit (L/C), Cash Against Documents (CAD), and in some cases wire transfer with deposit. Payment terms depend on the relationship, order size, and agreed Incoterms."
        }
      }
    ]
  }

  // Standalone Product schemas - ensures Google properly associates offers with each Product
  const productsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "name": "Yirgacheffe Green Coffee Beans (Grade 1 & 2)",
        "description": "SCA 84-88+ specialty-grade Yirgacheffe green coffee for export. Floral, citrus, jasmine notes.",
        "brand": {"@type": "Brand", "name": "Ethio Coffee"},
        "category": "Green Coffee Beans",
        "countryOfOrigin": {"@type": "Country", "name": "Ethiopia"},
        "url": "https://www.ethiocoffee.co/ethiopian-coffee-yirgacheffe",
        "image": "https://www.ethiocoffee.co/images/ethiopian-coffee-export.webp",
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "4.00",
          "highPrice": "8.00",
          "availability": "https://schema.org/InStock",
          "offeredBy": {"@type": "Organization", "name": "Ethio Coffee Export PLC", "url": "https://www.ethiocoffee.co"}
        }
      },
      {
        "@type": "Product",
        "name": "Sidamo Green Coffee Beans (Grade 1 & 2)",
        "description": "SCA 84-87+ specialty-grade Sidamo green coffee for export. Berry, wine-like acidity.",
        "brand": {"@type": "Brand", "name": "Ethio Coffee"},
        "category": "Green Coffee Beans",
        "countryOfOrigin": {"@type": "Country", "name": "Ethiopia"},
        "url": "https://www.ethiocoffee.co/ethiopian-coffee-sidamo",
        "image": "https://www.ethiocoffee.co/images/ethiopian-coffee-export.webp",
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "3.50",
          "highPrice": "7.00",
          "availability": "https://schema.org/InStock",
          "offeredBy": {"@type": "Organization", "name": "Ethio Coffee Export PLC", "url": "https://www.ethiocoffee.co"}
        }
      },
      {
        "@type": "Product",
        "name": "Guji Green Coffee Beans (Grade 1 & 2)",
        "description": "SCA 85-89+ specialty-grade Guji green coffee for export. Stone fruit, floral, tropical notes.",
        "brand": {"@type": "Brand", "name": "Ethio Coffee"},
        "category": "Green Coffee Beans",
        "countryOfOrigin": {"@type": "Country", "name": "Ethiopia"},
        "url": "https://www.ethiocoffee.co/ethiopian-coffee-guji",
        "image": "https://www.ethiocoffee.co/images/ethiopian-coffee-export.webp",
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "4.00",
          "highPrice": "9.00",
          "availability": "https://schema.org/InStock",
          "offeredBy": {"@type": "Organization", "name": "Ethio Coffee Export PLC", "url": "https://www.ethiocoffee.co"}
        }
      },
      {
        "@type": "Product",
        "name": "Harar Green Coffee Beans (Natural)",
        "description": "SCA 82-86+ natural-processed Harar green coffee for export. Wild berry, wine, chocolate characteristics.",
        "brand": {"@type": "Brand", "name": "Ethio Coffee"},
        "category": "Green Coffee Beans",
        "countryOfOrigin": {"@type": "Country", "name": "Ethiopia"},
        "url": "https://www.ethiocoffee.co/ethiopian-coffee-harar",
        "image": "https://www.ethiocoffee.co/images/ethiopian-coffee-export.webp",
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "3.00",
          "highPrice": "6.00",
          "availability": "https://schema.org/InStock",
          "offeredBy": {"@type": "Organization", "name": "Ethio Coffee Export PLC", "url": "https://www.ethiocoffee.co"}
        }
      },
      {
        "@type": "Product",
        "name": "Limu Green Coffee Beans (Washed)",
        "description": "SCA 82-85+ washed Limu green coffee for export. Balanced, wine and spice notes.",
        "brand": {"@type": "Brand", "name": "Ethio Coffee"},
        "category": "Green Coffee Beans",
        "countryOfOrigin": {"@type": "Country", "name": "Ethiopia"},
        "url": "https://www.ethiocoffee.co/ethiopian-coffee-limu",
        "image": "https://www.ethiocoffee.co/images/ethiopian-coffee-export.webp",
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "3.00",
          "highPrice": "5.50",
          "availability": "https://schema.org/InStock",
          "offeredBy": {"@type": "Organization", "name": "Ethio Coffee Export PLC", "url": "https://www.ethiocoffee.co"}
        }
      }
    ]
  }

  // WebPage schema with breadcrumbs
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Ethiopian Coffee Exporter | Ethio Coffee Export PLC",
    "description": "Ethio Coffee Export PLC is a trusted, family-owned Ethiopian coffee exporter shipping specialty and commercial green coffee to 40+ countries worldwide.",
    "url": "https://www.ethiocoffee.co/ethiopian-coffee-exporter",
    "mainEntity": {
      "@type": "Organization",
      "name": "Ethio Coffee Export PLC"
    },
    "breadcrumb": {
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
          "name": "Ethiopian Coffee Exporter",
          "item": "https://www.ethiocoffee.co/ethiopian-coffee-exporter"
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      {children}
    </>
  )
}

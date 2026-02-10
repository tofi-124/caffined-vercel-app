import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Ethiopian Green Coffee Beans | Buy Direct from Exporter | Ethio Coffee',
  description: 'Buy Ethiopian green coffee beans direct from exporter. Specialty & commercial grade Yirgacheffe, Sidamo, Guji, Harar, Limu green beans. SCA 80+ scored. FOB Djibouti.',
  keywords: 'ethiopian green coffee beans, ethiopian green coffee, green coffee beans ethiopia, buy ethiopian green coffee beans, ethiopian unroasted coffee beans, ethiopian raw coffee beans, green coffee from ethiopia, ethiopian arabica green beans, specialty green coffee beans ethiopia, green coffee beans for roasters, ethiopian single origin green coffee, wholesale green coffee beans ethiopia',
  alternates: {
    canonical: 'https://www.ethiocoffee.co/ethiopian-green-coffee-beans',
  },
  openGraph: {
    title: 'Ethiopian Green Coffee Beans | Buy Direct from Origin | Ethio Coffee',
    description: 'Premium Ethiopian green coffee beans sourced directly from origin. Specialty-grade Yirgacheffe, Sidamo, Guji, Harar & Limu. SCA 80+ scored, full traceability.',
    url: 'https://www.ethiocoffee.co/ethiopian-green-coffee-beans',
    type: 'website',
    images: [
      {
        url: '/images/coffee-pack-1.webp',
        width: 900,
        height: 600,
        alt: 'Ethiopian green coffee beans for export - specialty grade Arabica',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethiopian Green Coffee Beans | Buy Direct | Ethio Coffee',
    description: 'Premium Ethiopian green coffee beans: Yirgacheffe, Sidamo, Guji, Harar & Limu. SCA 80+ scored. FOB Djibouti shipping worldwide.',
    images: ['/images/coffee-pack-1.webp'],
  }
}

export default function EthiopianGreenCoffeeBeansLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Ethiopian Green Coffee Beans",
    "description": "Complete guide to Ethiopian green coffee beans — varieties, grades, flavour profiles, processing methods, and how to buy direct from an Ethiopian exporter.",
    "url": "https://www.ethiocoffee.co/ethiopian-green-coffee-beans",
    "publisher": {
      "@type": "Organization",
      "name": "Ethio Coffee Export PLC",
      "url": "https://www.ethiocoffee.co"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ethiocoffee.co" },
        { "@type": "ListItem", "position": 2, "name": "Ethiopian Green Coffee Beans", "item": "https://www.ethiocoffee.co/ethiopian-green-coffee-beans" }
      ]
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are Ethiopian green coffee beans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ethiopian green coffee beans are raw, unroasted coffee beans exported from Ethiopia — the birthplace of Arabica coffee. They are sold in their natural green state to roasters and importers worldwide, who then roast them to create finished coffee products. Ethiopian greens are prized for their complex floral, fruity, and wine-like flavour profiles."
        }
      },
      {
        "@type": "Question",
        "name": "What grades are Ethiopian green coffee beans available in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ethiopian green coffee is graded from Grade 1 (highest quality, 0-3 defects per 300g) to Grade 5. Most specialty coffee falls in Grade 1-2. Commercial exports are typically Grade 3-5. The grading system evaluates bean size, defect count, and cup quality scored by SCA protocol."
        }
      },
      {
        "@type": "Question",
        "name": "How much do Ethiopian green coffee beans cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ethiopian green coffee beans typically range from $4-$6 per pound ($9-$13 per kg) FOB Djibouti for specialty grades (SCA 80+). Commercial grades are lower. Prices vary by origin, grade, processing method, season, and C-market conditions. Contact exporters directly for current pricing."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum order for Ethiopian green coffee beans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard minimum orders are one full container load (FCL) of approximately 275 bags at 60kg each (16.5 metric tons). Some exporters, including Ethio Coffee, accommodate smaller trial orders and sample shipments for new buyer relationships."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best Ethiopian green coffee for espresso roasting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Natural-processed Sidamo and Guji coffees are excellent for espresso due to their full body, berry sweetness, and chocolate undertones. Washed Yirgacheffe also works brilliantly as a bright, floral single-origin espresso. Many roasters blend Ethiopian greens with Brazilian or Colombian coffees for balanced espresso profiles."
        }
      },
      {
        "@type": "Question",
        "name": "How are Ethiopian green coffee beans shipped?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ethiopian green coffee is exported in 60kg jute bags with GrainPro hermetic liners to preserve freshness. Shipping is typically FOB Djibouti (the nearest major port) or CIF to the buyer's destination port. Transit times vary: 2-3 weeks to Middle East, 4-6 weeks to Europe, 6-8 weeks to North America and Asia."
        }
      }
    ]
  }

  return (
    <>
      <Script
        id="green-coffee-beans-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="green-coffee-beans-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}

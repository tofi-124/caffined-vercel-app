import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Buy Ethiopian Coffee Wholesale | Direct Export | Ethio Coffee',
  description: 'Buy Ethiopian coffee wholesale direct from licensed exporter. Specialty & commercial green coffee: Yirgacheffe, Sidamo, Guji. Competitive FOB pricing. FCL & LCL shipments.',
  keywords: 'buy ethiopian coffee wholesale, ethiopian coffee wholesale, wholesale ethiopian coffee, buy ethiopian coffee in bulk, ethiopian coffee for roasters, wholesale green coffee beans ethiopia, bulk ethiopian coffee, ethiopian coffee wholesale price, buy green coffee ethiopia, wholesale coffee supplier ethiopia, import ethiopian coffee wholesale, ethiopian coffee bulk order, ethiopian coffee for businesses',
  alternates: {
    canonical: 'https://www.ethiocoffee.co/buy-ethiopian-coffee-wholesale',
  },
  openGraph: {
    title: 'Buy Ethiopian Coffee Wholesale | Direct from Exporter | Ethio Coffee',
    description: 'Buy Ethiopian coffee wholesale: specialty & commercial green coffee from licensed exporter. Yirgacheffe, Sidamo, Guji, Harar. Competitive FOB pricing, worldwide shipping.',
    url: 'https://www.ethiocoffee.co/buy-ethiopian-coffee-wholesale',
    type: 'website',
    images: [
      {
        url: '/images/coffee-pack-1.webp',
        width: 900,
        height: 600,
        alt: 'Buy Ethiopian coffee wholesale - specialty green coffee beans for importers and roasters',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buy Ethiopian Coffee Wholesale | Ethio Coffee',
    description: 'Wholesale Ethiopian green coffee direct from exporter. Yirgacheffe, Sidamo, Guji. FOB Djibouti shipping.',
    images: ['/images/coffee-pack-1.webp'],
  }
}

export default function BuyWholesaleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Buy Ethiopian Coffee Wholesale",
    "description": "How to buy Ethiopian coffee wholesale direct from a licensed Ethiopian exporter. Pricing, ordering process, shipping, and minimum order information.",
    "url": "https://www.ethiocoffee.co/buy-ethiopian-coffee-wholesale",
    "publisher": {
      "@type": "Organization",
      "name": "Ethio Coffee Export PLC",
      "url": "https://www.ethiocoffee.co"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ethiocoffee.co" },
        { "@type": "ListItem", "position": 2, "name": "Buy Ethiopian Coffee Wholesale", "item": "https://www.ethiocoffee.co/buy-ethiopian-coffee-wholesale" }
      ]
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I buy Ethiopian coffee wholesale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To buy Ethiopian coffee wholesale, contact a licensed Ethiopian coffee exporter like Ethio Coffee Export PLC. Share your requirements (origin, grade, volume, processing preference), request pre-shipment samples, approve the lot after cupping, agree on FOB or CIF pricing, and place your order. The exporter handles all documentation, logistics, and shipping."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum order for wholesale Ethiopian coffee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard wholesale minimums are one full container load (FCL) - approximately 275 bags of 60kg each (16.5 metric tons). Some exporters offer half-container (LCL) options or trial shipments for first-time buyers. Ethio Coffee accommodates smaller trial orders to build new buyer relationships."
        }
      },
      {
        "@type": "Question",
        "name": "What is the wholesale price of Ethiopian coffee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wholesale Ethiopian green coffee prices range from $9–$13/kg ($4–$6/lb) FOB Djibouti for specialty grades (SCA 80+). Commercial-grade coffees (Grade 3–5) are priced lower. Prices fluctuate based on origin, grade, processing method, global C-market rates, and seasonal availability. Contact exporters for current crop pricing."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get samples before placing a wholesale order?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Reputable Ethiopian exporters provide pre-shipment samples (both green and roasted) so you can evaluate cup quality, roast profile, and consistency before committing to a container. Ethio Coffee includes full SCA cupping reports with every sample and shipment."
        }
      },
      {
        "@type": "Question",
        "name": "What payment terms are common for wholesale Ethiopian coffee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common payment terms include: Letter of Credit (L/C) for first-time buyers (most secure for both parties), Cash Against Documents (CAD), and Telegraphic Transfer (T/T) with an advance deposit for established buyers. Payment is typically in USD. Your exporter will advise on the best arrangement for your situation."
        }
      },
      {
        "@type": "Question",
        "name": "How long does wholesale Ethiopian coffee shipping take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Transit times from Djibouti port: 2–3 weeks to Middle East and East Africa, 4–6 weeks to Europe, 6–8 weeks to North America and East Asia, 5–7 weeks to Australia. Add 1–2 weeks for document processing and inland transport from Addis Ababa to Djibouti."
        }
      }
    ]
  }

  return (
    <>
      <Script
        id="wholesale-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <Script
        id="wholesale-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}

import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'How To Buy Ethiopian Coffee | FAQ | Ethio Coffee',
  description:
    'Everything about ordering Ethiopian green coffee from Ethio Coffee. Learn about our process, shipping, payment terms, quality guarantees, and more.',
  keywords:
    'Ethiopian coffee ordering, green coffee FAQ, coffee shipping, wholesale coffee order, coffee payment terms, coffee samples, Ethiopian coffee export, coffee import guide, how to buy ethiopian coffee, order ethiopian green coffee',
  alternates: {
    canonical: 'https://www.ethiocoffee.co/ordering-info',
  },
  openGraph: {
    title: 'How To Buy Ethiopian Coffee | FAQ | Ethio Coffee',
    description:
      'Complete guide to ordering Ethiopian green coffee. Shipping, payment, samples, quality standards, and more.',
    url: 'https://www.ethiocoffee.co/ordering-info',
    type: 'website',
    images: [
      {
        url: '/images/coffee-pack-1.webp',
        width: 900,
        height: 600,
        alt: 'How to buy Ethiopian green coffee - ordering guide and FAQ',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How To Buy & FAQ | Ethio Coffee',
    description: 'Complete guide to ordering Ethiopian green coffee. Shipping, payment, samples, and more.',
    images: ['/images/coffee-pack-1.webp'],
  },
}

export default function OrderingInfoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // FAQPage schema for rich snippets in Google
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can I buy green coffee from Ethio Coffee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Browse our Current Offerings, then request a quote for the coffees you're interested in. From there, we'll provide a formal quotation, finalize terms, and handle all export documentation and logistics coordination."
        }
      },
      {
        "@type": "Question",
        "name": "Can I request a sample before placing a larger order?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer 100-300g samples for roast profiling and cupping. Sample costs and shipping fees may apply depending on whether you qualify for our free sample policy."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum order quantity (MOQ)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our minimum order quantity is one full container (approximately 19-21 metric tons, around 275-320 bags depending on bag size). You can mix and match different coffee types and grades to fill a container."
        }
      },
      {
        "@type": "Question",
        "name": "Where does Ethio Coffee ship to?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We export worldwide. Primary markets include the Middle East, North America, Europe, and Asia Pacific. We can ship to most countries with coffee import regulations."
        }
      },
      {
        "@type": "Question",
        "name": "What shipping terms do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer flexible Incoterms: FOB Djibouti (you arrange ocean freight) and CIF (we arrange freight to your port)."
        }
      },
      {
        "@type": "Question",
        "name": "What payment methods do you accept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept wire transfer (T/T) and letter of credit (L/C). Payment terms are typically negotiated based on order size and relationship."
        }
      },
      {
        "@type": "Question",
        "name": "What coffee regions does Ethio Coffee source from?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We source from Ethiopia's premier growing regions: Yirgacheffe, Sidama, Guji, Harrar, Limu, and Jimma/Kaffa. Each region has distinct flavor characteristics."
        }
      },
      {
        "@type": "Question",
        "name": "Does Ethio Coffee offer certified coffees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, depending on availability, we offer Organic (USDA/EU), Fair Trade, and Rainforest Alliance certified coffees. Certified lots have limited availability and may require advance booking."
        }
      }
    ]
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
        "name": "How to Buy Ethiopian Coffee",
        "item": "https://www.ethiocoffee.co/ordering-info"
      }
    ]
  }

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="ordering-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}

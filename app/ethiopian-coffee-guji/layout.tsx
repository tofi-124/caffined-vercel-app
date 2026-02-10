import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Ethiopian Guji Coffee Beans | Specialty Export | Ethio Coffee',
  description: 'Buy Ethiopian Guji coffee beans direct from exporter. Grade 1 & 2 washed, natural, honey Guji green coffee. SCA 85-89+ scored. Stone fruit, tropical, floral. FOB Djibouti.',
  keywords: 'guji coffee, ethiopian guji coffee beans, guji green coffee, buy guji coffee, guji coffee exporter, guji grade 1, guji washed coffee, guji natural coffee, hambela coffee, shakiso coffee, specialty guji coffee export, guji coffee flavor profile',
  alternates: {
    canonical: 'https://www.ethiocoffee.co/ethiopian-coffee-guji',
  },
  openGraph: {
    title: 'Ethiopian Guji Coffee Beans | Specialty Export | Ethio Coffee',
    description: 'Premium Guji green coffee beans from Ethiopia. Grade 1 & 2, SCA 85-89+. Stone fruit, tropical, floral complexity. Direct from licensed exporter.',
    url: 'https://www.ethiocoffee.co/ethiopian-coffee-guji',
    type: 'website',
    images: [
      {
        url: '/images/coffee-pack-1.webp',
        width: 900,
        height: 600,
        alt: 'Ethiopian Guji green coffee beans for export',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethiopian Guji Coffee | Specialty Export | Ethio Coffee',
    description: 'Grade 1 & 2 Guji green coffee beans. SCA 85-89+. Stone fruit, tropical, floral. FOB Djibouti worldwide.',
    images: ['/images/coffee-pack-1.webp'],
  }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes Guji coffee special?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Guji coffee is Ethiopia\'s rising specialty star, grown at 1,800-2,300 meters altitude in the Guji Zone of the Oromia region. Guji is prized for its complex stone fruit, tropical, and floral notes with vibrant acidity and a silky body. Top lots routinely score 87-89+ SCA, rivaling the finest Yirgacheffe and Geisha coffees globally.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Guji and Yirgacheffe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Guji coffees tend to have more tropical fruit and stone fruit complexity (peach, mango, papaya) compared to Yirgacheffe\'s classic floral-citrus profile. Guji also grows at higher altitudes overall (up to 2,300m), producing denser beans with more intense sweetness. Guji is a separate zone from Yirgacheffe within southern Ethiopia.'
      }
    },
    {
      '@type': 'Question',
      name: 'What grades of Guji coffee are available for export?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Guji coffee is exported in Grade 1 (SCA 87-89+, minimal defects) and Grade 2 (SCA 85-87+). Both are available as washed, natural, and honey processed. Guji naturals from Hambela and Shakiso are among Ethiopia\'s most sought-after micro-lots.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does Guji coffee cost FOB?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FOB Djibouti pricing for Guji varies by grade and processing. Grade 2 washed: $3.80-$5.50/lb. Grade 1 naturals: $5.00-$8.00/lb for top micro-lots. Guji commands premiums above standard Sidamo due to its exceptional cup quality. Contact us for current pricing.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for Guji coffee export?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard minimum is one full container load (FCL) - approximately 19.2 metric tons (320 bags × 60kg). You can combine Guji with other Ethiopian origins in the same container. Contact us for current availability.'
      }
    },
  ]
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ethiocoffee.co' },
    { '@type': 'ListItem', position: 2, name: 'Ethiopian Coffee Exporter', item: 'https://www.ethiocoffee.co/ethiopian-coffee-exporter' },
    { '@type': 'ListItem', position: 3, name: 'Guji Coffee', item: 'https://www.ethiocoffee.co/ethiopian-coffee-guji' },
  ]
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id='guji-faq-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id='guji-breadcrumb-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}

import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Ethiopian Yirgacheffe Coffee | Green Coffee Export | Ethio Coffee',
  description: 'Buy Ethiopian Yirgacheffe coffee beans direct from exporter. Grade 1 & 2 washed and natural Yirgacheffe green coffee. SCA 84-88+ scored. Floral, citrus, tea-like. FOB Djibouti.',
  keywords: 'yirgacheffe coffee, ethiopian yirgacheffe coffee beans, yirgacheffe green coffee, buy yirgacheffe coffee, yirgacheffe coffee exporter, yirgacheffe grade 1, yirgacheffe washed coffee, yirgacheffe natural coffee, kochere coffee, gedeo coffee, specialty yirgacheffe coffee export, yirgacheffe coffee flavor profile',
  alternates: {
    canonical: 'https://www.ethiocoffee.co/ethiopian-coffee-yirgacheffe',
  },
  openGraph: {
    title: 'Ethiopian Yirgacheffe Coffee Beans | Green Coffee Export | Ethio Coffee',
    description: 'Premium Yirgacheffe green coffee beans from Ethiopia. Grade 1 & 2, SCA 84-88+. Jasmine, bergamot, lemon, tea-like body. Direct from licensed exporter.',
    url: 'https://www.ethiocoffee.co/ethiopian-coffee-yirgacheffe',
    type: 'website',
    images: [
      {
        url: '/images/coffee-pack-1.webp',
        width: 900,
        height: 600,
        alt: 'Ethiopian Yirgacheffe green coffee beans for export',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethiopian Yirgacheffe Coffee | Green Coffee Export | Ethio Coffee',
    description: 'Grade 1 & 2 Yirgacheffe green coffee beans. SCA 84-88+. Floral, citrus, tea-like. FOB Djibouti worldwide.',
    images: ['/images/coffee-pack-1.webp'],
  }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes Yirgacheffe coffee special?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yirgacheffe coffee is world-renowned for its distinctive floral and citrus flavor profile, including jasmine, bergamot, lemon, and tea-like characteristics. Grown at 1,700-2,200 meters altitude in the Gedeo Zone of southern Ethiopia, Yirgacheffe is considered one of the finest coffees in the world and consistently scores 84-88+ on the SCA scale.'
      }
    },
    {
      '@type': 'Question',
      name: 'What grades of Yirgacheffe coffee are available for export?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yirgacheffe coffee is available in Grade 1 (highest specialty, SCA 86-88+) and Grade 2 (specialty grade, SCA 84-86+). Both grades are exported as washed (wet-processed) or natural (dry-processed). Grade 1 Yirgacheffe commands the highest premiums among Ethiopian coffees.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the difference between washed and natural Yirgacheffe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Washed Yirgacheffe has a cleaner, brighter cup with pronounced floral aromatics (jasmine, bergamot), citrus acidity (lemon, bergamot), and a tea-like body. Natural Yirgacheffe tends to be fruitier and sweeter with berry, tropical fruit, and wine-like characteristics with a heavier body. Washed is more common and considered the classic Yirgacheffe profile.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does Yirgacheffe coffee cost FOB?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FOB Djibouti pricing for Yirgacheffe varies by grade and processing. Grade 2 washed Yirgacheffe typically ranges from $3.50-$5.00/lb FOB. Grade 1 washed commands $4.50-$6.50/lb FOB. Natural processed lots can vary. Prices fluctuate based on the harvest season, ECX differentials, and global market conditions. Contact us for current pricing.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for Yirgacheffe coffee export?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The standard minimum order for Yirgacheffe coffee export is one full container load (FCL) - approximately 19.2 metric tons (320 bags × 60kg). You can combine Yirgacheffe with other Ethiopian origins within the same container. Contact us for current availability and LCL options.'
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
    { '@type': 'ListItem', position: 3, name: 'Yirgacheffe Coffee', item: 'https://www.ethiocoffee.co/ethiopian-coffee-yirgacheffe' },
  ]
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id='yirgacheffe-faq-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id='yirgacheffe-breadcrumb-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}

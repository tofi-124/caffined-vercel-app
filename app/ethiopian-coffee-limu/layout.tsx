import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Ethiopian Limu Coffee Beans | Green Coffee Export | Ethio Coffee',
  description: 'Buy Ethiopian Limu coffee beans direct from exporter. Grade 2 & 3 washed Limu green coffee. SCA 82-85+. Wine, spice, balanced body. Versatile Ethiopian origin. FOB Djibouti.',
  keywords: 'limu coffee, ethiopian limu coffee beans, limu green coffee, buy limu coffee, limu coffee exporter, limu washed coffee, limu grade 2, limu specialty coffee, ethiopian limu export, limu coffee flavor profile',
  alternates: {
    canonical: 'https://www.ethiocoffee.co/ethiopian-coffee-limu',
  },
  openGraph: {
    title: 'Ethiopian Limu Coffee Beans | Washed Green Coffee Export | Ethio Coffee',
    description: 'Premium Limu green coffee beans from Ethiopia. Grade 2 & 3 washed, SCA 82-85+. Wine-toned, spicy, balanced. Direct from licensed exporter.',
    url: 'https://www.ethiocoffee.co/ethiopian-coffee-limu',
    type: 'website',
    images: [
      {
        url: '/images/coffee-pack-1.webp',
        width: 900,
        height: 600,
        alt: 'Ethiopian Limu green coffee beans for export',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethiopian Limu Coffee | Washed Green Coffee Export | Ethio Coffee',
    description: 'Grade 2 & 3 Limu green coffee beans. SCA 82-85+. Wine, spice, balanced. FOB Djibouti worldwide.',
    images: ['/images/coffee-pack-1.webp'],
  }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes Limu coffee special?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Limu coffee is grown in southwestern Ethiopia at 1,400-2,000 meters altitude. It is prized for its wine-toned acidity, spicy character, and well-balanced body. Limu is predominantly washed processed and offers one of the best value propositions in Ethiopian specialty coffee - delivering clean, complex cups at accessible price points.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Limu and Yirgacheffe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While Yirgacheffe is known for delicate floral and citrus aromatics with a tea-like body, Limu tends toward wine-like, spicy flavors with a fuller body. Limu grows at slightly lower altitudes (1,400-2,000m vs 1,700-2,200m) and is located in southwestern Ethiopia. Limu is generally more affordable than Yirgacheffe while still delivering specialty-grade quality.'
      }
    },
    {
      '@type': 'Question',
      name: 'What grades of Limu coffee are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Limu coffee is primarily exported as Grade 2 (SCA 83-85+, specialty) and Grade 3 (SCA 82-83, commercial specialty). Grade 2 Limu is the preferred choice for single-origin specialty use. Nearly all exported Limu is washed processed.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does Limu coffee cost FOB?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Grade 2 washed Limu: $2.80-$3.80/lb FOB Djibouti. Grade 3: $2.40-$3.00/lb. Limu typically commands lower premiums than Yirgacheffe or Guji, making it an excellent value for specialty blends and year-round programs. Contact us for current pricing.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for Limu coffee export?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard minimum is one full container load (FCL) - approximately 19.2 metric tons (320 bags × 60kg). You can combine Limu with other Ethiopian origins within the same container. Contact us for current availability.'
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
    { '@type': 'ListItem', position: 3, name: 'Limu Coffee', item: 'https://www.ethiocoffee.co/ethiopian-coffee-limu' },
  ]
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id='limu-faq-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id='limu-breadcrumb-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}

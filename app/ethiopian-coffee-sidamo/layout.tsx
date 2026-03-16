import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Ethiopian Sidamo Coffee Beans | Green Coffee Export | Ethio Coffee',
  description: 'Buy Ethiopian Sidamo (Sidama) coffee beans direct from exporter. Grade 1 & 2 washed and natural Sidamo green coffee. SCA 84-88+ scored. Berry, floral, wine-like acidity. FOB Djibouti.',
  keywords: 'sidamo coffee, sidama coffee, ethiopian sidamo coffee beans, sidamo green coffee, buy sidamo coffee, sidamo coffee exporter, sidamo grade 1, sidamo washed coffee, sidamo natural coffee, bensa coffee, dale coffee, specialty sidamo coffee export, sidamo coffee flavor profile',
  alternates: {
    canonical: 'https://www.ethiocoffee.co/ethiopian-coffee-sidamo',
  },
  openGraph: {
    title: 'Ethiopian Sidamo Coffee Beans | Green Coffee Export | Ethio Coffee',
    description: 'Premium Sidamo (Sidama) green coffee beans from Ethiopia. Grade 1 & 2, SCA 84-87+. Berry, floral, wine-like acidity. Direct from licensed exporter.',
    url: 'https://www.ethiocoffee.co/ethiopian-coffee-sidamo',
    type: 'website',
    images: [{ url: '/images/coffee-pack-1.webp', width: 900, height: 600, alt: 'Ethiopian Sidamo green coffee beans for export' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethiopian Sidamo Coffee | Green Coffee Export | Ethio Coffee',
    description: 'Grade 1 & 2 Sidamo green coffee beans. SCA 84-87+. Berry, floral, wine-like. FOB Djibouti worldwide.',
    images: ['/images/coffee-pack-1.webp'],
  }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does Sidamo coffee taste like?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sidamo (Sidama) coffee is known for its complex berry and stone fruit notes, floral aromatics, wine-like acidity, and rich mouthfeel. Washed Sidamo tends toward citrus and floral brightness, while natural Sidamo delivers intense blueberry, strawberry, and dark chocolate sweetness. SCA scores typically range from 84-87+.' }
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Sidamo and Yirgacheffe coffee?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yirgacheffe is technically a sub-region within the broader Sidama zone, but its coffees are so distinctive that they are classified separately. Yirgacheffe is known for lighter, more floral and citrus-driven profiles, while broader Sidamo coffees tend to be heavier-bodied with more pronounced berry and wine notes. Both are exceptional specialty origins.' }
    },
    {
      '@type': 'Question',
      name: 'What grades of Sidamo coffee are exported?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sidamo coffee is exported as Grade 1 (SCA 86+, minimal defects) and Grade 2 (SCA 84-86). Both grades are available in washed and natural processing. Grade 1 naturals from Bensa and Nensebo are particularly sought after for their intense blueberry and strawberry notes.' }
    },
    {
      '@type': 'Question',
      name: 'How much does Sidamo coffee cost FOB?',
      acceptedAnswer: { '@type': 'Answer', text: 'Grade 2 washed Sidamo typically ranges from $3.20-$4.50/lb FOB Djibouti. Grade 1 naturals command $4.00-$6.00/lb FOB depending on cup score and processing station. Sidamo often offers better value than Yirgacheffe at comparable quality levels. Contact us for current pricing.' }
    },
    {
      '@type': 'Question',
      name: 'Where is Sidamo coffee grown?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sidamo (now officially Sidama) coffee is grown in the Sidama Regional State of southern Ethiopia, at altitudes of 1,550-2,200 meters. Major growing districts include Bensa, Dale, Aleta Wendo, Chire, and Nensebo. The region benefits from volcanic soil, ample rainfall, and ideal temperatures for specialty Arabica production.' }
    },
  ]
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ethiocoffee.co' },
    { '@type': 'ListItem', position: 2, name: 'Ethiopian Coffee Exporter', item: 'https://www.ethiocoffee.co/ethiopian-coffee-exporter' },
    { '@type': 'ListItem', position: 3, name: 'Sidamo Coffee', item: 'https://www.ethiocoffee.co/ethiopian-coffee-sidamo' },
  ]
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id='sidamo-faq-schema' type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id='sidamo-breadcrumb-schema' type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  )
}

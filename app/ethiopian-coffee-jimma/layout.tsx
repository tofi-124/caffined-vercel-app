import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Ethiopian Jimma Coffee Beans | Commercial Export | Ethio Coffee',
  description: 'Buy Ethiopian Jimma (Djimmah) coffee beans direct from exporter. Grade 4 & 5 natural and washed Jimma green coffee. Earthy, full-bodied, blend-friendly. Ethiopia\'s main commercial coffee. FOB Djibouti.',
  keywords: 'jimma coffee, djimmah coffee, ethiopian jimma coffee beans, djimma green coffee, buy jimma coffee, jimma coffee exporter, commercial ethiopian coffee, jimma grade 5, jimma natural coffee, bulk ethiopian coffee export, jimma coffee blend',
  alternates: {
    canonical: 'https://www.ethiocoffee.co/ethiopian-coffee-jimma',
  },
  openGraph: {
    title: 'Ethiopian Jimma (Djimmah) Coffee Beans | Commercial Export | Ethio Coffee',
    description: 'Jimma/Djimmah green coffee beans from Ethiopia. Grade 4 & 5, earthy, full-bodied, consistent. Ethiopia\'s main commercial export grade. Direct from licensed exporter.',
    url: 'https://www.ethiocoffee.co/ethiopian-coffee-jimma',
    type: 'website',
    images: [
      {
        url: '/images/coffee-pack-1.webp',
        width: 900,
        height: 600,
        alt: 'Ethiopian Jimma green coffee beans for export',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethiopian Jimma Coffee | Commercial Export | Ethio Coffee',
    description: 'Grade 4 & 5 Jimma green coffee beans. Earthy, full-bodied, blend-friendly. FOB Djibouti worldwide.',
    images: ['/images/coffee-pack-1.webp'],
  }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Jimma (Djimmah) coffee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jimma (also known as Djimmah or Djimma) is Ethiopia\'s primary commercial-grade coffee region, located in the southwestern Oromia region at 1,400-1,800 meters altitude. Jimma produces large volumes of earthy, full-bodied coffee that serves as the backbone of many international blends. It accounts for a significant portion of Ethiopia\'s total coffee exports.'
      }
    },
    {
      '@type': 'Question',
      name: 'What does Jimma coffee taste like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jimma coffee has an earthy, robust flavor profile with notes of dark chocolate, tobacco, grain, and mild spice. It has low acidity, a full heavy body, and a clean finish. While not as complex as specialty origins like Yirgacheffe or Guji, Jimma\'s consistent, neutral-to-chocolatey character makes it an excellent base for espresso blends and instant coffee production.'
      }
    },
    {
      '@type': 'Question',
      name: 'What grades of Jimma coffee are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jimma is exported primarily as Grade 4 (better quality, SCA 80-82) and Grade 5 (standard commercial, SCA 78-80). Both natural and washed processing are available, though natural is more common. Grade 4 lots can approach specialty territory.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does Jimma coffee cost FOB?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jimma is Ethiopia\'s most competitively priced origin. Grade 5 natural: $2.00-$2.80/lb FOB Djibouti. Grade 4: $2.50-$3.20/lb. Jimma is popular among large-volume buyers seeking consistent Ethiopian coffee at competitive prices. Contact us for current pricing.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is Jimma coffee good for blending?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jimma is one of the world\'s best blend-base coffees. Its neutral-to-chocolatey flavor, full body, and low acidity make it an ideal foundation for espresso blends, commercial roasts, and instant coffee. Many international coffee brands use Jimma as their Ethiopian blend component.'
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
    { '@type': 'ListItem', position: 3, name: 'Jimma Coffee', item: 'https://www.ethiocoffee.co/ethiopian-coffee-jimma' },
  ]
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id='jimma-faq-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id='jimma-breadcrumb-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}

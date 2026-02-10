import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Ethiopian Harar Coffee Beans | Wild & Exotic Export | Ethio Coffee',
  description: 'Buy Ethiopian Harar (Harrar) coffee beans direct from exporter. Grade 4 & 5 natural dry-processed Harar green coffee. SCA 82-86+. Wild berry, wine, mocha, dark chocolate. FOB Djibouti.',
  keywords: 'harar coffee, harrar coffee, ethiopian harar coffee beans, harar green coffee, buy harar coffee, harar coffee exporter, harar longberry, harar shortberry, harar natural coffee, harar mocha, harar wild berry, ethiopian harrar export',
  alternates: {
    canonical: 'https://www.ethiocoffee.et/ethiopian-coffee-harar',
  },
  openGraph: {
    title: 'Ethiopian Harar Coffee Beans | Wild & Exotic Export | Ethio Coffee',
    description: 'Premium Harar green coffee beans from Ethiopia. Natural dry-processed, SCA 82-86+. Wild berry, wine, mocha, dark chocolate. One of the world\'s oldest coffee origins.',
    url: 'https://www.ethiocoffee.et/ethiopian-coffee-harar',
    type: 'website',
    images: [
      {
        url: '/images/coffee-pack-1.webp',
        width: 900,
        height: 600,
        alt: 'Ethiopian Harar green coffee beans for export',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethiopian Harar Coffee | Wild & Exotic Export | Ethio Coffee',
    description: 'Natural dry-processed Harar coffee beans. SCA 82-86+. Wild berry, wine, mocha. FOB Djibouti worldwide.',
    images: ['/images/coffee-pack-1.webp'],
  }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes Harar coffee special?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Harar (also spelled Harrar) is one of the oldest and most historic coffee origins in the world. Grown in eastern Ethiopia near the ancient walled city of Harar at 1,500-2,100 meters altitude, Harar coffee is exclusively natural (dry) processed, producing its signature wild berry, wine-like, dark chocolate, and spicy "mocha" character. Harar longberry is among Ethiopia\'s most iconic coffee exports.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is Harar longberry vs shortberry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Harar coffee is classified by bean size: Longberry (large, elongated beans) is the premium grade with the most intense flavor. Shortberry (smaller, rounder beans) is more widely available and offers a slightly lighter profile. Both are natural-processed and exhibit Harar\'s characteristic wild berry and wine flavors.'
      }
    },
    {
      '@type': 'Question',
      name: 'What grades of Harar coffee are available for export?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Harar is traditionally graded as Grade 4 (higher quality, longberry) and Grade 5 (commercial, shortberry). Unlike washed coffees, Harar uses a different grading scale that accounts for natural processing characteristics. Top Harar lots score 82-86+ on the SCA scale.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does Harar coffee cost FOB?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FOB Djibouti pricing for Harar varies by classification. Grade 4 Longberry: $3.00-$4.50/lb. Grade 5 Shortberry: $2.50-$3.50/lb. Premium sorted longberry can command higher prices. Contact us for current pricing and availability.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why is Harar coffee called mocha?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The term "mocha" in coffee originally referred to the port of Mocha (Al Mokha) in Yemen, through which Ethiopian Harar coffee was historically traded. Harar\'s natural chocolate and wine-like qualities led to "mocha" becoming synonymous with chocolate-coffee flavors. Ethiopian Harar is considered the original "mocha" coffee.'
      }
    },
  ]
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ethiocoffee.et' },
    { '@type': 'ListItem', position: 2, name: 'Ethiopian Coffee Exporter', item: 'https://www.ethiocoffee.et/ethiopian-coffee-exporter' },
    { '@type': 'ListItem', position: 3, name: 'Harar Coffee', item: 'https://www.ethiocoffee.et/ethiopian-coffee-harar' },
  ]
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id='harar-faq-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id='harar-breadcrumb-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}

import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Organic Ethiopian Coffee Export | Ethio Coffee',
  description: 'Export certified organic Ethiopian coffee beans. USDA, EU, and JAS organic Yirgacheffe, Sidamo, Guji green coffee. Bulk orders, full traceability, FOB Djibouti.',
  keywords: 'organic ethiopian coffee, organic coffee exporter ethiopia, certified organic coffee beans, USDA organic ethiopian coffee, EU organic coffee ethiopia, organic green coffee beans, organic yirgacheffe coffee, organic sidamo coffee, organic guji coffee, organic coffee export, bulk organic coffee beans, organic arabica coffee',
  alternates: {
    canonical: 'https://www.ethiocoffee.co/organic-ethiopian-coffee-export',
  },
  openGraph: {
    title: 'Organic Ethiopian Coffee Export | Certified Green Coffee | Ethio Coffee',
    description: 'Certified organic Ethiopian green coffee beans for export. USDA, EU & JAS organic. Yirgacheffe, Sidamo, Guji. Direct from licensed exporter.',
    url: 'https://www.ethiocoffee.co/organic-ethiopian-coffee-export',
    type: 'website',
    images: [
      {
        url: '/images/coffee-pack-1.webp',
        width: 900,
        height: 600,
        alt: 'Certified organic Ethiopian green coffee beans for export',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Organic Ethiopian Coffee Export | Ethio Coffee',
    description: 'USDA, EU & JAS certified organic Ethiopian green coffee. Yirgacheffe, Sidamo, Guji. Bulk export, full traceability.',
    images: ['/images/coffee-pack-1.webp'],
  }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Ethiopian coffee organic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Much of Ethiopian coffee is grown organically by default, as most smallholder farmers use traditional farming methods without synthetic fertilizers or pesticides. However, "certified organic" requires formal certification (USDA, EU, or JAS) through an accredited agency, which involves audits, documentation, and compliance costs. We source from cooperatives and farms that hold these certifications.'
      }
    },
    {
      '@type': 'Question',
      name: 'What organic certifications are available for Ethiopian coffee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ethiopian organic coffee is available with USDA Organic (for the US market), EU Organic (for European markets), and JAS Organic (for Japan). Some lots also carry additional certifications like Fair Trade, Rainforest Alliance, or UTZ. Availability depends on the season and specific cooperatives.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does organic Ethiopian coffee cost compared to conventional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Certified organic Ethiopian coffee typically commands a premium of $0.30-$0.80/lb over conventional equivalent grades. The exact premium depends on the origin, grade, current market conditions, and whether additional certifications (Fair Trade, Rainforest Alliance) are included. Contact us for current pricing.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for organic Ethiopian coffee export?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard minimum order is one full container load (FCL) - approximately 19.2 metric tons. Organic lots must be kept separate from conventional during storage, transport, and shipping to maintain certification integrity. You can mix different organic origins within the same container.'
      }
    },
    {
      '@type': 'Question',
      name: 'Which Ethiopian coffee regions produce certified organic coffee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Certified organic Ethiopian coffee is primarily available from Yirgacheffe, Sidamo (Sidama), Guji, and Limu regions. Many cooperatives in these areas hold organic certification. Harar and Jimma regions also have some certified organic production, though availability is more limited.'
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
    { '@type': 'ListItem', position: 3, name: 'Organic Ethiopian Coffee Export', item: 'https://www.ethiocoffee.co/organic-ethiopian-coffee-export' },
  ]
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id='organic-coffee-faq-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id='organic-coffee-breadcrumb-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}

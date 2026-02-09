import { Metadata } from 'next'
import Script from 'next/script'
import { newsArticles } from '../data/news'

export const metadata: Metadata = {
  title: 'Ethiopian Coffee Export News | Industry Updates | Ethio Coffee',
  description:
    'Latest news and updates from the Ethiopian coffee export industry. Stay informed on policy changes, trade events, and market developments.',
  keywords: 'Ethiopian coffee news, coffee export news, Ethiopian coffee industry, IACO, African coffee, coffee trade updates, Ethiopian coffee market',
  alternates: {
    canonical: 'https://www.ethiocoffee.et/ethiopia-coffee-export-news',
  },
  openGraph: {
    title: 'Ethiopian Coffee Export News | Industry Updates | Ethio Coffee',
    description:
      'Latest news and updates from the Ethiopian coffee export industry.',
    url: 'https://www.ethiocoffee.et/ethiopia-coffee-export-news',
    type: 'website',
    images: [
      {
        url: '/images/coffee-pack-1.webp',
        width: 900,
        height: 600,
        alt: 'Ethiopian coffee export news and industry updates',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethiopian Coffee Export News | Industry Updates | Ethio Coffee',
    description: 'Latest news and updates from the Ethiopian coffee export industry.',
    images: ['/images/coffee-pack-1.webp'],
  },
}

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Ethiopian Coffee Export News",
    "description": "Latest news and updates from the Ethiopian coffee export industry.",
    "url": "https://www.ethiocoffee.et/ethiopia-coffee-export-news",
    "publisher": {
      "@type": "Organization",
      "name": "Ethio Coffee Export PLC",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.ethiocoffee.et/images/new-logo.png"
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": newsArticles.length,
      "itemListElement": newsArticles.slice(0, 10).map((article, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://www.ethiocoffee.et/ethiopia-coffee-export-news/${article.slug}`
      }))
    }
  }

  return (
    <>
      <Script
        id="news-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      {children}
    </>
  )
}

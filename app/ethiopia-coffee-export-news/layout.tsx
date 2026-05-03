import { Metadata } from 'next'
import Script from 'next/script'
import { newsArticles } from '../data/news'

const parseDateLocal = (value: string) => {
  const match = /^\s*(\d{4})-(\d{2})-(\d{2})\s*$/.exec(value)
  if (match) return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3])).getTime()
  const timestamp = Date.parse(value)
  return Number.isFinite(timestamp) ? timestamp : 0
}

export const metadata: Metadata = {
  title: 'Ethiopian Coffee Export News | Industry Updates | Ethio Coffee',
  description:
    'Latest news and updates from the Ethiopian coffee export industry. Stay informed on policy changes, trade events, and market developments.',
  keywords: 'Ethiopian coffee news, coffee export news, Ethiopian coffee industry, IACO, African coffee, coffee trade updates, Ethiopian coffee market',
  alternates: {
    canonical: 'https://www.ethiocoffee.co/ethiopia-coffee-export-news',
  },
  openGraph: {
    title: 'Ethiopian Coffee Export News | Ethio Coffee',
    description:
      'Latest news and updates from the Ethiopian coffee export industry.',
    url: 'https://www.ethiocoffee.co/ethiopia-coffee-export-news',
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
    title: 'Ethiopian Coffee Export News | Ethio Coffee',
    description: 'Latest news and updates from the Ethiopian coffee export industry.',
    images: ['/images/coffee-pack-1.webp'],
  },
}

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  const sortedArticles = [...newsArticles].sort((a, b) => parseDateLocal(b.date) - parseDateLocal(a.date))

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Ethiopian Coffee Export News",
    "description": "Latest news and updates from the Ethiopian coffee export industry.",
    "url": "https://www.ethiocoffee.co/ethiopia-coffee-export-news",
    "publisher": {
      "@type": "Organization",
      "name": "Ethio Coffee Import and Export PLC",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.ethiocoffee.co/images/new-logo.png"
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": newsArticles.length,
      "itemListElement": sortedArticles.slice(0, 10).map((article, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://www.ethiocoffee.co/ethiopia-coffee-export-news/${article.slug}`
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

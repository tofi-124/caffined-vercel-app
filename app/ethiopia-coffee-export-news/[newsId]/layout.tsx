import type { Metadata } from 'next'
import { newsArticles } from '@/app/data/news'
import Script from 'next/script'

type Props = {
  params: Promise<{ newsId: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { newsId } = await params
  const article = newsArticles.find(a => a.slug === newsId)

  if (!article) {
    return {
      title: 'News Not Found | Ethio Coffee',
      description: 'The news article you are looking for does not exist.',
      alternates: { canonical: 'https://www.ethiocoffee.co/ethiopia-coffee-export-news' },
    }
  }

  return {
    title: `${article.title} | Ethio Coffee`,
    description: article.desc.substring(0, 160),
    keywords: article.keywords || 'Ethiopian coffee news, coffee export news, Ethiopian coffee industry, Ethiopian coffee market',
    alternates: {
      canonical: `https://www.ethiocoffee.co/ethiopia-coffee-export-news/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.desc.substring(0, 160),
      type: 'article',
      url: `https://www.ethiocoffee.co/ethiopia-coffee-export-news/${article.slug}`,
      publishedTime: new Date(article.date).toISOString(),
      images: [
        {
          url: '/images/coffee-pack-1.webp',
          width: 900,
          height: 600,
          alt: article.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.desc.substring(0, 160),
      images: ['/images/coffee-pack-1.webp'],
    },
  }
}

export default async function NewsArticleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ newsId: string }>
}) {
  const { newsId } = await params
  const article = newsArticles.find(a => a.slug === newsId)

  if (!article) return <>{children}</>

  const newsArticleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title,
    "description": article.desc,
    "datePublished": new Date(article.date).toISOString(),
    "dateModified": new Date(article.date).toISOString(),
    "image": {
      "@type": "ImageObject",
      "url": "https://www.ethiocoffee.co/images/coffee-pack-1.webp",
      "width": 900,
      "height": 600
    },
    "author": {
      "@type": "Organization",
      "name": "Ethio Coffee",
      "url": "https://www.ethiocoffee.co"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ethio Coffee Export PLC",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.ethiocoffee.co/images/new-logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.ethiocoffee.co/ethiopia-coffee-export-news/${article.slug}`
    },
    ...(article.source ? { "sourceOrganization": { "@type": "Organization", "name": article.source } } : {})
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
        "name": "Ethiopian Coffee Export News",
        "item": "https://www.ethiocoffee.co/ethiopia-coffee-export-news"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title
      }
    ]
  }

  return (
    <>
      <Script
        id="news-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleSchema) }}
      />
      <Script
        id="news-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}

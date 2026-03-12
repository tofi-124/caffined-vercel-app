import type { Metadata } from 'next'
import { posts } from '@/app/data/data'
import Script from 'next/script'

type Props = {
  params: Promise<{ insightId: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { insightId } = await params
  // Find post by slug
  const post = posts.find(p => p.slug === insightId)

  if (!post) {
    return {
      title: 'Insight Not Found | Ethio Coffee',
      description: 'The insight you are looking for does not exist.',
      alternates: { canonical: 'https://www.ethiocoffee.co/insights' },
    }
  }

  const title = `${post.title} | Ethio Coffee`
  const description = post.desc

  return {
    title,
    description,
    keywords: post.keywords?.join(', '),
    alternates: {
      canonical: `https://www.ethiocoffee.co/insights/${insightId}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://www.ethiocoffee.co/insights/${insightId}`,
      images: [{ url: `/images/${post.large_image_url}` }],
      publishedTime: new Date(post.date).toISOString(),
      modifiedTime: new Date(post.dateModified || post.date).toISOString(),
      authors: ['Ethio Coffee'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/images/${post.large_image_url}`],
    },
  }
}

export default function InsightPostLayout({ 
  children,
  params 
}: { 
  children: React.ReactNode
  params: Promise<{ insightId: string }>
}) {
  // We need to handle this synchronously for the layout
  // The structured data will be added in a client component or we use a different approach
  return (
    <>
      <ArticleSchema params={params} />
      {children}
    </>
  )
}

async function ArticleSchema({ params }: { params: Promise<{ insightId: string }> }) {
  const { insightId } = await params
  // Find post by slug
  const post = posts.find(p => p.slug === insightId)

  if (!post) return null

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.desc,
    image: `https://www.ethiocoffee.co/images/${post.large_image_url}`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.dateModified || post.date).toISOString(),
    author: {
      '@type': 'Organization',
      name: 'Ethio Coffee',
      url: 'https://www.ethiocoffee.co',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ethio Coffee',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.ethiocoffee.co/images/new-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.ethiocoffee.co/insights/${insightId}`,
    },
    keywords: post.keywords?.join(', '),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.ethiocoffee.co',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Ethiopian Coffee Insights',
        item: 'https://www.ethiocoffee.co/insights',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
      },
    ],
  }

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="insight-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}

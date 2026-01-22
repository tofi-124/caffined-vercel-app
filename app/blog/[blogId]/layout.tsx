import type { Metadata } from 'next'
import { posts } from '@/app/data/data'
import Script from 'next/script'

type Props = {
  params: Promise<{ blogId: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { blogId } = await params
  const index = Number.parseInt(blogId, 10)
  const post = Number.isFinite(index) ? posts[index] : undefined

  if (!post) {
    return {
      title: 'Blog Post Not Found | Ethio Coffee',
      description: 'The blog post you are looking for does not exist.',
      alternates: { canonical: 'https://ethiocoffee.et/blog' },
    }
  }

  const title = `${post.title} | Ethio Coffee`
  const description = post.desc

  return {
    title,
    description,
    keywords: post.keywords?.join(', '),
    alternates: {
      canonical: `https://ethiocoffee.et/blog/${blogId}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://ethiocoffee.et/blog/${blogId}`,
      images: [{ url: `/images/${post.large_image_url}` }],
      publishedTime: new Date(post.date).toISOString(),
      authors: ['Ethio Coffee'],
    },
  }
}

export default function BlogPostLayout({ 
  children,
  params 
}: { 
  children: React.ReactNode
  params: Promise<{ blogId: string }>
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

async function ArticleSchema({ params }: { params: Promise<{ blogId: string }> }) {
  const { blogId } = await params
  const index = Number.parseInt(blogId, 10)
  const post = Number.isFinite(index) ? posts[index] : undefined

  if (!post) return null

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.desc,
    image: `https://ethiocoffee.et/images/${post.large_image_url}`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      '@type': 'Organization',
      name: 'Ethio Coffee',
      url: 'https://ethiocoffee.et',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ethio Coffee',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ethiocoffee.et/images/new-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://ethiocoffee.et/blog/${blogId}`,
    },
    keywords: post.keywords?.join(', '),
  }

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  )
}

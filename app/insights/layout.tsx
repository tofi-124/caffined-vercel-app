import type { Metadata } from 'next'
import Script from 'next/script'
import { posts } from '@/app/data/data'

export const metadata: Metadata = {
  title: 'Ethiopian Coffee Blog | Ethio Coffee',
  description:
    'Learn about Ethiopian coffee sourcing, processing methods, flavor profiles, and industry trends. Expert guides for importers and green coffee buyers.',
  keywords: 'Ethiopian coffee blog, coffee sourcing guide, Ethiopian coffee regions, green coffee buying guide, coffee industry insights, importer resources',
  alternates: {
    canonical: 'https://www.ethiocoffee.et/insights',
  },
  openGraph: {
    title: 'Ethiopian Coffee Blog | Ethio Coffee',
    description:
      'Learn about Ethiopian coffee sourcing, processing methods, flavor profiles, and industry trends.',
    url: 'https://www.ethiocoffee.et/insights',
  },
}

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  // Blog schema for the insights listing page
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Ethiopian Coffee Blog",
    "description": "Learn about Ethiopian coffee sourcing, processing methods, flavor profiles, and industry trends.",
    "url": "https://www.ethiocoffee.et/insights",
    "publisher": {
      "@type": "Organization",
      "name": "Ethio Coffee Export PLC",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.ethiocoffee.et/images/new-logo.png"
      }
    },
    "blogPost": posts.slice(0, 10).map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.desc,
      "datePublished": new Date(post.date).toISOString(),
      "url": `https://www.ethiocoffee.et/insights/${post.slug}`,
      "image": `https://www.ethiocoffee.et/images/${post.large_image_url}`,
      "author": {
        "@type": "Organization",
        "name": "Ethio Coffee"
      }
    }))
  }

  return (
    <>
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      {children}
    </>
  )
}

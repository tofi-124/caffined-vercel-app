import type { Metadata } from 'next'
import { newsArticles } from '@/app/data/news'

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
      alternates: { canonical: 'https://www.ethiocoffee.et/ethiopia-coffee-export-news' },
    }
  }

  return {
    title: `${article.title} | Ethio Coffee`,
    description: article.desc.substring(0, 160),
    alternates: {
      canonical: `https://www.ethiocoffee.et/ethiopia-coffee-export-news/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.desc.substring(0, 160),
      type: 'article',
      url: `https://www.ethiocoffee.et/ethiopia-coffee-export-news/${article.slug}`,
      publishedTime: new Date(article.date).toISOString(),
    },
  }
}

export default function NewsArticleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

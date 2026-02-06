import { newsArticles } from '@/app/data/news'
import Link from 'next/link'
import AutoScrollTo from '@/app/components/AutoScrollTo'
import { newsContentMap, hasNewsContent } from '../content'

type Props = {
  params: Promise<{ newsId: string }>
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    newsId: article.slug,
  }))
}

const NewsArticlePage = async ({ params }: Props) => {
  const { newsId } = await params
  const article = newsArticles.find(a => a.slug === newsId)

  if (!article) {
    return (
      <h1 className='bg-primary flex flex-col font-extrabold text-6xl h-[40vh] text-red-500 text-center justify-center'>
        News article not found
      </h1>
    )
  }

  // Load the content component for this news article
  let NewsContent = null
  if (hasNewsContent(newsId)) {
    NewsContent = await newsContentMap[newsId]()
  }

  return (
    <>
      <AutoScrollTo />
      <main className='bg-primary'>
        <section className='p-4 flex flex-col items-center justify-center bg-primary text-dark'>
          <div className='container max-w-3xl py-12'>
            <Link
              href='/ethiopia-coffee-export-news'
              className='text-accent text-sm font-bold hover:underline mb-8 inline-block'
            >
              &larr; Back to News
            </Link>

            {NewsContent ? (
              <NewsContent title={article.title} date={article.date} source={article.source} />
            ) : (
              <>
                <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{article.date}</p>
                <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
                  {article.title}
                </h1>
                <p className='text-gray-700 text-sm leading-relaxed'>{article.desc}</p>
              </>
            )}

            <div className='mt-12 pt-6 border-t border-gray-200'>
              <Link
                href='/ethiopia-coffee-export-news'
                className='text-accent font-bold text-sm hover:underline'
              >
                &larr; Back to all news
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default NewsArticlePage

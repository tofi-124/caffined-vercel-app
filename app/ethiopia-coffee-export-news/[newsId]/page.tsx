import { newsArticles } from '@/app/data/news'
import Link from 'next/link'
import { ArrowLeft } from '@/app/components/Arrow'
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

  // Determine previous and next articles based on the list order
  const currentIndex = newsArticles.findIndex(a => a.slug === newsId)
  const prevArticle = currentIndex > 0 ? newsArticles[currentIndex - 1] : null
  const nextArticle = currentIndex >= 0 && currentIndex < newsArticles.length - 1 ? newsArticles[currentIndex + 1] : null

  const formatDate = (value: string) => {
    // Parse YYYY-MM-DD as local date to avoid timezone shifts
    const m = /^\s*(\d{4})-(\d{2})-(\d{2})\s*$/.exec(value)
    if (m) {
      const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]))
      return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    }
    const t = Date.parse(value)
    if (!Number.isFinite(t)) return value
    return new Date(t).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
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
              <ArrowLeft className='mr-2 inline-block h-4 w-4' />
              Back to News
            </Link>

            {NewsContent ? (
              <NewsContent title={article.title} date={formatDate(article.date)} source={article.source} />
            ) : (
              <>
                <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{formatDate(article.date)}</p>
                <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
                  {article.title}
                </h1>
                <p className='text-gray-700 text-sm leading-relaxed'>{article.desc}</p>
              </>
            )}

            <nav className='mt-12 pt-6 border-t border-gray-200'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                {prevArticle ? (
                  <Link
                    href={`/ethiopia-coffee-export-news/${prevArticle.slug}`}
                    className='group flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-accent/30 hover:bg-accent/5 transition-colors'
                  >
                    <span className='flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent flex-shrink-0 group-hover:bg-accent/20 transition-colors'>
                      <ArrowLeft className='h-4 w-4' />
                    </span>
                    <span className='min-w-0'>
                      <span className='block text-[11px] text-gray-400 uppercase tracking-wider'>Previous</span>
                      <span className='block text-dark font-semibold text-sm leading-snug line-clamp-2 group-hover:text-accent transition-colors'>{prevArticle.title}</span>
                    </span>
                  </Link>
                ) : (
                  <span />
                )}

                {nextArticle ? (
                  <Link
                    href={`/ethiopia-coffee-export-news/${nextArticle.slug}`}
                    className='group flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-accent/30 hover:bg-accent/5 transition-colors sm:flex-row-reverse sm:text-right'
                  >
                    <span className='flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent flex-shrink-0 group-hover:bg-accent/20 transition-colors'>
                      <ArrowLeft className='h-4 w-4 rotate-180' />
                    </span>
                    <span className='min-w-0'>
                      <span className='block text-[11px] text-gray-400 uppercase tracking-wider'>Next</span>
                      <span className='block text-dark font-semibold text-sm leading-snug line-clamp-2 group-hover:text-accent transition-colors'>{nextArticle.title}</span>
                    </span>
                  </Link>
                ) : (
                  <span />
                )}
              </div>
            </nav>

            <div className='mt-6 text-center'>
              <Link
                href='/ethiopia-coffee-export-news'
                className='text-gray-400 text-xs hover:text-accent transition-colors'
              >
                View all news
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default NewsArticlePage

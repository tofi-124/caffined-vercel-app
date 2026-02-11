import Link from 'next/link'
import { newsArticles } from '../data/news'
import { ArrowRight } from '@/app/components/Arrow'
import AutoScrollTo from '../components/AutoScrollTo'

const parseDateLocal = (value: string) => {
  const m = /^\s*(\d{4})-(\d{2})-(\d{2})\s*$/.exec(value)
  if (m) return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])).getTime()
  const t = Date.parse(value)
  return Number.isFinite(t) ? t : 0
}

const formatDate = (value: string) => {
  const m = /^\s*(\d{4})-(\d{2})-(\d{2})\s*$/.exec(value)
  if (m) {
    const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]))
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }
  const t = Date.parse(value)
  if (!Number.isFinite(t)) return value
  return new Date(t).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

const PAGE_SIZE = 5

type Props = {
  searchParams: Promise<{ page?: string }>
}

export default async function NewsPage({ searchParams }: Props) {
  const { page: pageParam } = await searchParams
  const pageNum = pageParam ? Math.max(1, parseInt(pageParam, 10) || 1) : 1

  const sorted = [...newsArticles].sort((a, b) => parseDateLocal(b.date) - parseDateLocal(a.date))

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE))
  const safePage = Math.min(Math.max(1, pageNum), totalPages)

  const start = (safePage - 1) * PAGE_SIZE
  const pagedArticles = sorted.slice(start, start + PAGE_SIZE)

  const maxVisiblePages = 5
  const startPage = Math.max(1, Math.min(safePage - Math.floor(maxVisiblePages / 2), totalPages - maxVisiblePages + 1))
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)
  const visiblePages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)

  return (
    <main className='bg-primary'>
      <header className='bg-dark w-full py-20 flex flex-col items-center justify-center px-4'>
        <h1 className='text-4xl md:text-5xl font-bold text-primary text-center'>Ethiopian Coffee Export News</h1>
        <p className='text-primary/70 mt-3 text-sm tracking-widest uppercase text-center'>Industry Updates, Trade Events &amp; Market Developments</p>
      </header>

      <section className='flex flex-col justify-center items-center bg-primary pb-16 pt-12'>
        <AutoScrollTo key={safePage} targetId='news-list' headerOffset={120} />
        <p id='news-list' className='text-gray-600 max-w-2xl text-center mb-12 px-4'>
          Stay up to date with the latest Ethiopian coffee export industry news, including policy changes from the Ethiopian Coffee and Tea Authority, African coffee trade events, pricing trends, and new regulations affecting Ethiopian green coffee exporters and importers.
        </p>

        <div className='w-full max-w-3xl px-4 space-y-8'>
          {pagedArticles.map((article) => (
            <article
              key={article.slug}
              className='bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow'
            >
              <p className='text-xs text-gray-500 uppercase tracking-widest mb-2'>{formatDate(article.date)}</p>
              <Link href={`/ethiopia-coffee-export-news/${article.slug}`}>
                <h2 className='text-xl font-bold text-dark mb-4 leading-snug hover:text-accent transition-colors'>{article.title}</h2>
              </Link>
              <p className='text-gray-700 text-sm leading-relaxed mb-3'>
                {article.desc.length > 250 ? article.desc.substring(0, 250) + '...' : article.desc}
              </p>
              <Link href={`/ethiopia-coffee-export-news/${article.slug}`} className='text-accent font-bold text-sm hover:underline'>
                <span>Read full article</span>
                <ArrowRight className='ml-2 inline-block h-4 w-4' />
              </Link>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className='mt-12 flex flex-wrap justify-center gap-2'>
            {safePage > 1 ? (
              <Link
                href={`/ethiopia-coffee-export-news?page=${safePage - 1}`}
                className='w-10 h-10 flex items-center justify-center bg-white text-dark border border-gray-200 rounded-full font-bold hover:bg-accent hover:text-white hover:border-accent transition-all'
                aria-label='Go to previous page'
              >
                &lt;
              </Link>
            ) : (
              <span className='w-10 h-10 flex items-center justify-center bg-white text-gray-300 border border-gray-200 rounded-full font-bold cursor-not-allowed'>&lt;</span>
            )}

            {visiblePages.map((p) => (
              <Link
                key={p}
                href={`/ethiopia-coffee-export-news?page=${p}`}
                className={
                  p === safePage
                    ? 'w-10 h-10 flex items-center justify-center bg-accent text-white border border-accent rounded-full font-bold'
                    : 'w-10 h-10 flex items-center justify-center bg-white text-dark border border-gray-200 rounded-full font-bold hover:bg-accent hover:text-white hover:border-accent transition-all'
                }
                aria-label={`Go to page ${p}`}
              >
                {p}
              </Link>
            ))}

            {safePage < totalPages ? (
              <Link
                href={`/ethiopia-coffee-export-news?page=${safePage + 1}`}
                className='w-10 h-10 flex items-center justify-center bg-white text-dark border border-gray-200 rounded-full font-bold hover:bg-accent hover:text-white hover:border-accent transition-all'
                aria-label='Go to next page'
              >
                &gt;
              </Link>
            ) : (
              <span className='w-10 h-10 flex items-center justify-center bg-white text-gray-300 border border-gray-200 rounded-full font-bold cursor-not-allowed'>&gt;</span>
            )}
          </div>
        )}
      </section>
    </main>
  )
}

import Link from 'next/link'
import { Post } from '../components/Posts'
import { posts } from '../data/data'
import AutoScrollTo from '../components/AutoScrollTo'

const parsePostDate = (value: string) => {
  const t = Date.parse(value)
  return Number.isFinite(t) ? t : 0
}

const PAGE_SIZE = 9

type Props = {
  searchParams: Promise<{ page?: string }>
}

export default async function InsightsPage({ searchParams }: Props) {
  const { page: pageParam } = await searchParams
  const pageNum = pageParam ? Math.max(1, parseInt(pageParam, 10) || 1) : 1

  const sortedPosts = posts
    .map((post, id) => ({ post, id }))
    .sort((a, b) => parsePostDate(b.post.date) - parsePostDate(a.post.date))

  const totalPages = Math.max(1, Math.ceil(sortedPosts.length / PAGE_SIZE))
  const safePage = Math.min(pageNum, totalPages)

  const start = (safePage - 1) * PAGE_SIZE
  const pagedPosts = sortedPosts.slice(start, start + PAGE_SIZE)

  const maxVisiblePages = 5
  const startPage = Math.max(1, Math.min(safePage - Math.floor(maxVisiblePages / 2), totalPages - maxVisiblePages + 1))
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)
  const visiblePages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)

  return (
    <main className='bg-primary'>
      <header className='bg-[url(/images/about-us.webp)] w-full h-[350px] flex flex-col items-center justify-center px-4'>
        <h1 className='text-4xl md:text-5xl font-bold text-primary text-center'>Ethiopian Coffee Insights</h1>
        <p className='text-primary/80 mt-3 text-sm tracking-widest uppercase text-center'>Sourcing Guides, Industry Trends &amp; Expert Analysis</p>
      </header>
      <section className='flex flex-col justify-center items-center bg-primary pb-16 pt-12'>
        <AutoScrollTo key={safePage} targetId='insights-list' headerOffset={120} />
        <p id='insights-list' className='text-gray-600 max-w-2xl text-center mb-12 px-4'>Expert guides on Ethiopian coffee sourcing, processing methods, flavor profiles, FOB pricing, and export logistics for importers and specialty roasters worldwide.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 px-4">
          {pagedPosts.map(({ post, id }) => (
            <Post key={id} {...post} slug={post.slug || ''} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className='mt-12 flex flex-wrap justify-center gap-2'>
            {safePage > 1 ? (
              <Link
                href={`/insights?page=${safePage - 1}`}
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
                href={`/insights?page=${p}`}
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
                href={`/insights?page=${safePage + 1}`}
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

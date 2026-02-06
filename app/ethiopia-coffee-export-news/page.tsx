"use client"

import React, { useEffect, useRef, useState, useMemo } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { newsArticles } from '../data/news'
import Link from 'next/link'

const PAGE_SIZE = 5

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

const NewsPage = () => {
  const postsRef = useRef<HTMLElement | null>(null)
  const subtitleRef = useRef<HTMLParagraphElement | null>(null)
  const searchParams = useSearchParams()
  const router = useRouter()
  const [page, setPage] = useState(1)
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.scrollY < 150) {
        scrollToPostsTop()
      }
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const pageParam = searchParams.get('page')
    if (pageParam) {
      const pageNum = parseInt(pageParam, 10)
      if (pageNum > 0) setPage(pageNum)
    }
    setIsInitialLoad(false)
  }, [searchParams])

  useEffect(() => {
    if (!isInitialLoad && page > 0) {
      const timer = setTimeout(() => {
        scrollToPostsTop()
      }, 150)
      return () => clearTimeout(timer)
    }
  }, [page, isInitialLoad])

  const sorted = useMemo(() => {
    return [...newsArticles].sort((a, b) => parseDateLocal(b.date) - parseDateLocal(a.date))
  }, [])

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE))
  const safePage = Math.min(Math.max(1, page), totalPages)

  const start = (safePage - 1) * PAGE_SIZE
  const pagedArticles = sorted.slice(start, start + PAGE_SIZE)

  const scrollToPostsTop = () => {
    if (!subtitleRef.current) return
    const headerOffset = 120
    requestAnimationFrame(() => {
      const y = subtitleRef.current!.getBoundingClientRect().top + window.scrollY - headerOffset
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' })
    })
  }

  const goToPage = (p: number) => {
    const nextPage = Math.min(Math.max(1, p), totalPages)
    setPage(nextPage)
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', nextPage.toString())
    router.push(`?${params.toString()}`, { scroll: false })
  }

  const maxVisiblePages = 5
  const startPage = Math.max(1, Math.min(safePage - Math.floor(maxVisiblePages / 2), totalPages - maxVisiblePages + 1))
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)
  const visiblePages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)

  return (
    <main className='bg-primary'>
      <header className='bg-dark w-full py-20 flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold text-primary'>NEWS</h1>
        <p className='text-primary/70 mt-3 text-sm tracking-widest uppercase'>Ethiopian Coffee Export Industry</p>
      </header>

      <section ref={postsRef as any} className='flex flex-col justify-center items-center bg-primary pb-16 pt-12'>
        <p ref={subtitleRef} className='text-gray-600 max-w-2xl text-center mb-12 px-4'>
          Latest news and updates from the Ethiopian coffee export industry
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
                Read full article →
              </Link>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className='mt-12 flex flex-wrap justify-center gap-2'>
            <button
              type='button'
              onClick={() => goToPage(Math.max(1, safePage - 1))}
              className={
                safePage === 1
                  ? 'w-10 h-10 bg-white text-gray-300 border border-gray-200 rounded-full font-bold cursor-not-allowed'
                  : 'w-10 h-10 bg-white text-dark border border-gray-200 rounded-full font-bold hover:bg-accent hover:text-white hover:border-accent transition-all'
              }
              aria-label='Go to previous page'
              disabled={safePage === 1}
            >
              &lt;
            </button>

            {visiblePages.map((p) => (
              <button
                key={p}
                type='button'
                onClick={() => goToPage(p)}
                className={
                  p === safePage
                    ? 'w-10 h-10 bg-accent text-white border border-accent rounded-full font-bold'
                    : 'w-10 h-10 bg-white text-dark border border-gray-200 rounded-full font-bold hover:bg-accent hover:text-white hover;border-accent transition-all'
                }
                aria-label={`Go to page ${p}`}
              >
                {p}
              </button>
            ))}

            <button
              type='button'
              onClick={() => goToPage(Math.min(totalPages, safePage + 1))}
              className={
                safePage === totalPages
                  ? 'w-10 h-10 bg-white text-gray-300 border border-gray-200 rounded-full font-bold cursor-not-allowed'
                  : 'w-10 h-10 bg-white text-dark border border-gray-200 rounded-full font-bold hover:bg-accent hover:text-white hover:border-accent transition-all'
              }
              aria-label='Go to next page'
              disabled={safePage === totalPages}
            >
              &gt;
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default NewsPage

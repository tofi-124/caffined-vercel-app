"use client"

import React, { useEffect, useRef, useState, useMemo } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Post } from '../components/Posts'
import { posts } from '../data/data'

const parsePostDate = (value: string) => {
  const t = Date.parse(value)
  return Number.isFinite(t) ? t : 0
}

const InsightsPage = () => {
  // Create a reference to the posts section for scrolling
  const postsRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const searchParams = useSearchParams()
  const router = useRouter()
  const [page, setPage] = useState(1)
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  
  useEffect(() => {
    // Simple and reliable approach:
    // On back navigation, the browser restores scroll position BEFORE our code runs.
    // We use a short delay to let the browser restore scroll position first.
    // If scrollY is still near the top after the delay, it's a fresh navigation - scroll to results.
    // If scrollY is already scrolled down, browser restored position - don't interfere.
    
    const timer = setTimeout(() => {
      // If user is near the top of the page, it's likely a fresh navigation
      // Scroll to the results section
      if (window.scrollY < 150) {
        scrollToPostsTop()
      }
      // If scrollY >= 150, browser has restored scroll position from back/forward navigation
      // Don't override the restored position
    }, 100) // Short delay to let browser restore scroll position first
    
    return () => clearTimeout(timer)
  }, [])

  // Initialize page from URL params
  useEffect(() => {
    const pageParam = searchParams.get('page')
    if (pageParam) {
      const pageNum = parseInt(pageParam, 10)
      if (pageNum > 0) {
        setPage(pageNum)
      }
    }
    setIsInitialLoad(false)
  }, [searchParams])

  // Auto-scroll when page changes (for pagination)
  useEffect(() => {
    if (!isInitialLoad && page > 0) {
      // Use a longer delay for mobile devices to ensure content is rendered
      // and layout is complete before scrolling
      const timer = setTimeout(() => {
        scrollToPostsTop()
      }, 150) // Increased delay for mobile compatibility
      
      return () => clearTimeout(timer)
    }
  }, [page, isInitialLoad])

  const PAGE_SIZE = 9

  const sortedPosts = useMemo(() => {
    return posts
      .map((post, id) => ({ post, id }))
      .sort((a, b) => parsePostDate(b.post.date) - parsePostDate(a.post.date))
  }, [])

  const totalPages = Math.max(1, Math.ceil(sortedPosts.length / PAGE_SIZE))
  const safePage = Math.min(page, totalPages)

  const pagedPosts = useMemo(() => {
    const start = (safePage - 1) * PAGE_SIZE
    return sortedPosts.slice(start, start + PAGE_SIZE)
  }, [sortedPosts, safePage])

  const scrollToPostsTop = () => {
    if (!subtitleRef.current) return

    // Account for the sticky navbar (TopMessage + navbar height) plus padding
    const headerOffset = 120
    
    // For mobile Safari and other mobile browsers, we need to ensure
    // the element position is calculated after any layout shifts
    requestAnimationFrame(() => {
      const y = subtitleRef.current!.getBoundingClientRect().top + window.scrollY - headerOffset

      window.scrollTo({
        top: Math.max(0, y),
        behavior: 'smooth',
      })
    })
  }

  const goToPage = (p: number) => {
    const nextPage = Math.min(Math.max(1, p), totalPages)
    setPage(nextPage)
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', nextPage.toString())
    router.push(`?${params.toString()}`, { scroll: false })
    // Scroll is now handled by the useEffect that watches page changes
  }

  const maxVisiblePages = 5
  const startPage = Math.max(
    1,
    Math.min(safePage - Math.floor(maxVisiblePages / 2), totalPages - maxVisiblePages + 1)
  )
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)
  const visiblePages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)

  return (
    <main className='bg-primary'>
      <header className='bg-[url(/images/about-us.webp)] w-full h-[350px] flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold text-primary'>INSIGHTS</h1>
      </header>
      <section ref={postsRef} className='flex flex-col justify-center items-center bg-primary pb-16 pt-12'>
        <p ref={subtitleRef} className='text-gray-600 max-w-2xl text-center mb-12 px-4'>Insights, stories, and updates from the world of Ethiopian coffee</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 px-4">
          {pagedPosts.map(({ post, id }) => (
            <Post key={id} {...post} slug={post.slug || ''} />
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
                    : 'w-10 h-10 bg-white text-dark border border-gray-200 rounded-full font-bold hover:bg-accent hover:text-white hover:border-accent transition-all'
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

export default InsightsPage

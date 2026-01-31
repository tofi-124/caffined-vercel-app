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
  const searchParams = useSearchParams()
  const router = useRouter()
  
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
  }, [searchParams])

  const PAGE_SIZE = 6
  const [page, setPage] = useState(1)

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
    if (!postsRef.current) return

    // Account for the sticky navbar (TopMessage + navbar height)
    const headerOffset = 96
    const y = postsRef.current.getBoundingClientRect().top + window.scrollY - headerOffset

    window.scrollTo({
      top: Math.max(0, y),
      behavior: 'smooth',
    })
  }

  return (
    <main className='bg-primary'>
      <header className='bg-[url(/images/about-us.webp)] w-full h-[350px] flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold text-primary'>INSIGHTS</h1>
      </header>
      <section ref={postsRef} className='flex flex-col justify-center items-center bg-primary pb-16 pt-12'>
        <p className='text-gray-600 max-w-2xl text-center mb-12 px-4'>Insights, stories, and updates from the world of Ethiopian coffee</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 px-4">
          {pagedPosts.map(({ post, id }) => (
            <Post key={id} {...post} slug={post.slug || ''} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className='mt-12 flex flex-wrap justify-center gap-2'>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                type='button'
                onClick={() => {
                  setPage(p)
                  // Update URL with page parameter
                  const params = new URLSearchParams(searchParams.toString())
                  params.set('page', p.toString())
                  router.push(`?${params.toString()}`, { scroll: false })
                  scrollToPostsTop()
                }}
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
          </div>
        )}
      </section>
    </main>
  )
}

export default InsightsPage

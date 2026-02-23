'use client'

import { posts } from '@/app/data/data'
import InstaCard from './InstaCard'
import { useState } from 'react'

const POSTS_PER_PAGE = 9

export default function InstaGallery() {
  const insightPosts = posts
    .filter((p) => p.slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const totalPages = Math.ceil(insightPosts.length / POSTS_PER_PAGE)
  const [page, setPage] = useState(1)

  const startIdx = (page - 1) * POSTS_PER_PAGE
  const pagePosts = insightPosts.slice(startIdx, startIdx + POSTS_PER_PAGE)

  return (
    <main className='bg-gray-50 min-h-screen'>
      {/* Header */}
      <div className='bg-dark text-white'>
        <div className='max-w-7xl mx-auto px-6 py-10'>
          <div className='flex items-center gap-4 mb-3'>
            <div className='w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xl'>
              E
            </div>
            <div>
              <h1 className='text-3xl font-bold tracking-wide'>
                Instagram Content Hub
              </h1>
              <p className='text-white/60 text-sm font-inconsolata'>
                ethiocoffee.co · {insightPosts.length} posts ready
              </p>
            </div>
          </div>
          <p className='text-white/70 max-w-2xl text-sm mt-4 leading-relaxed'>
            Each insight becomes a branded 1080×1080 Instagram image.
            Use the buttons below each post to{' '}
            <strong className='text-white'>share to Instagram</strong>,{' '}
            <strong className='text-white'>download the image</strong>, or{' '}
            <strong className='text-white'>copy the caption</strong>.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className='max-w-7xl mx-auto px-6 py-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {pagePosts.map((post) => (
            <InstaCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className='flex items-center justify-center gap-2 mt-12'>
            <button
              onClick={() => { setPage((p) => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              disabled={page === 1}
              className='px-4 py-2 rounded-lg text-sm font-bold bg-dark text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-dark/80 transition-colors'
            >
              ← Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                className={`w-10 h-10 rounded-lg text-sm font-bold transition-colors ${
                  p === page
                    ? 'bg-accent text-white'
                    : 'bg-white text-dark border border-gray-200 hover:bg-gray-100'
                }`}
              >
                {p}
              </button>
            ))}

            <button
              onClick={() => { setPage((p) => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              disabled={page === totalPages}
              className='px-4 py-2 rounded-lg text-sm font-bold bg-dark text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-dark/80 transition-colors'
            >
              Next →
            </button>
          </div>
        )}

        {/* Page indicator */}
        <p className='text-center text-gray-400 text-sm mt-4 font-inconsolata'>
          Page {page} of {totalPages} · Showing {startIdx + 1}–{Math.min(startIdx + POSTS_PER_PAGE, insightPosts.length)} of {insightPosts.length}
        </p>
      </div>
    </main>
  )
}

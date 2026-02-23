import { posts } from '@/app/data/data'
import type { Metadata } from 'next'
import InstaCard from './InstaCard'

export const metadata: Metadata = {
  title: 'Instagram Post Generator | Ethio Coffee Export',
  robots: 'noindex, nofollow',
}

export default function InstaGallery() {
  const insightPosts = posts.filter((p) => p.slug)

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
            Each insight becomes a branded 1080×1080 Instagram image. Hover any
            card for quick actions, or use the buttons below each post.{' '}
            <strong className='text-white'>Download the image</strong> then{' '}
            <strong className='text-white'>copy the caption</strong> — paste
            both into Instagram.
          </p>
          <div className='mt-4 flex gap-4 items-center'>
            <span className='text-xs text-white/40 font-inconsolata'>
              Batch download:{' '}
              <code className='bg-white/10 px-2 py-0.5 rounded'>
                npm run insta
              </code>
            </span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className='max-w-7xl mx-auto px-6 py-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {insightPosts.map((post) => (
            <InstaCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  )
}

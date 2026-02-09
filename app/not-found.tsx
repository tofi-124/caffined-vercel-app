import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found | Ethio Coffee',
  description: 'The page you are looking for does not exist. Browse our Ethiopian coffee offerings, read industry insights, or contact our export team.',
  robots: 'noindex, follow',
}

export default function NotFound() {
  return (
    <main className='bg-primary min-h-[60vh] flex flex-col items-center justify-center px-4 py-20'>
      <h1 className='text-6xl font-extrabold text-dark mb-4'>404</h1>
      <h2 className='text-2xl font-bold text-dark mb-2'>Page Not Found</h2>
      <p className='text-gray-600 text-center max-w-md mb-10'>
        The page you are looking for may have been moved or no longer exists. Explore our Ethiopian coffee export resources below.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg w-full'>
        <Link
          href='/'
          className='flex items-center justify-center gap-2 bg-dark text-primary font-bold py-3 px-6 rounded-lg hover:bg-dark/90 transition-colors text-center'
        >
          Go Home
        </Link>
        <Link
          href='/offerings'
          className='flex items-center justify-center gap-2 bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-accent/90 transition-colors text-center'
        >
          View Coffee Offerings
        </Link>
        <Link
          href='/ethiopian-coffee-exporter'
          className='flex items-center justify-center gap-2 border-2 border-dark text-dark font-bold py-3 px-6 rounded-lg hover:bg-dark hover:text-primary transition-colors text-center'
        >
          Ethiopian Coffee Exporter
        </Link>
        <Link
          href='/contact-us'
          className='flex items-center justify-center gap-2 border-2 border-accent text-accent font-bold py-3 px-6 rounded-lg hover:bg-accent hover:text-white transition-colors text-center'
        >
          Contact Our Team
        </Link>
      </div>

      <div className='mt-10 flex flex-wrap justify-center gap-4 text-sm text-gray-500'>
        <Link href='/insights' className='hover:text-accent transition-colors underline underline-offset-4'>
          Coffee Insights
        </Link>
        <Link href='/ethiopia-coffee-export-news' className='hover:text-accent transition-colors underline underline-offset-4'>
          Industry News
        </Link>
        <Link href='/ordering-info' className='hover:text-accent transition-colors underline underline-offset-4'>
          How to Buy
        </Link>
        <Link href='/about' className='hover:text-accent transition-colors underline underline-offset-4'>
          About Us
        </Link>
      </div>
    </main>
  )
}

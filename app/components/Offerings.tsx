'use client'

import { useState } from 'react'
import Link from 'next/link'
import OfferingsResultsList from './OfferingsResultsList'
import QuoteRequestPopup from './QuoteRequestPopup'
import { offerings, type Offering } from '../data/offerings'

const Offerings = () => {
  const [allocationFor, setAllocationFor] = useState<Offering | null>(null)

  return (
    <section className='py-24 lg:py-32 bg-primary'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-16'>
          <span className='inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4'>
            Our Collection
          </span>
          <h1 className='text-5xl lg:text-6xl leading-tight text-dark font-bold'>
            COFFEE LINEUP
          </h1>
          <p className='mt-4 text-lg text-gray-600 max-w-2xl mx-auto'>
            Ethiopian lots selected for importers worldwide. Traceable, consistent, and ready to ship.
          </p>
        </div>

        {/* Products Grid */}
        <div className='max-w-6xl mx-auto'>
          <OfferingsResultsList items={offerings.slice(0, 3)} showActions onRequestQuote={(o) => setAllocationFor(o)} />
        </div>

        {/* CTA */}
        <div className='text-center mt-16'>
          <Link href='/offerings' className='
            inline-flex items-center gap-2 px-8 py-4 font-semibold
            bg-accent hover:bg-dark text-white hover:text-primary
            border border-accent hover:border-primary
            rounded-full transition-all duration-300
          '>
            VIEW ALL OFFERINGS
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
            </svg>
          </Link>
        </div>
      </div>

      {allocationFor && (
        <QuoteRequestPopup
          isOpen={Boolean(allocationFor)}
          onClose={() => setAllocationFor(null)}
          productName={allocationFor.name}
          productImage={allocationFor.image_url}
          isAllocationList={allocationFor.isSoldOut}
        />
      )}
    </section>
  )
}

export default Offerings
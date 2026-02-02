'use client'

import { useState } from 'react'
import Link from 'next/link'
import OfferingsResultsList from './OfferingsResultsList'
import QuoteRequestPopup from './QuoteRequestPopup'
import { offerings, type Offering } from '../data/offerings'

const Offerings = () => {
  const [allocationFor, setAllocationFor] = useState<Offering | null>(null)

  return (
    <section className='bg-primary'>
      {/* Navy Header Section */}
      <div className='bg-dark py-20 lg:py-24'>
        <div className='container mx-auto px-4 text-center'>
          <span className='inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-4'>
            Our Collection
          </span>
          <h1 className='text-5xl lg:text-6xl leading-tight text-primary font-bold'>
            FEATURED LOTS
          </h1>
          <p className='mt-4 text-lg text-primary/80 max-w-2xl mx-auto'>
            Curated Ethiopian specialty coffee for global importers. Traceable, consistent, and ready for export.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className='container mx-auto px-4 pt-24 lg:pt-32 pb-24 lg:pb-32'>

        {/* Products Grid */}
        <div className='max-w-6xl mx-auto'>
          <OfferingsResultsList items={offerings.slice(0, 3)} showActions onRequestQuote={(o) => setAllocationFor(o)} />
        </div>

        {/* CTA */}
        <div className='text-center mt-16'>
          <Link href='/offerings' className='
            inline-flex items-center gap-2 px-6 py-4
            bg-accent hover:bg-accent/90 text-white
            border-2 border-accent
            rounded-xl
            font-bold
            transition-all
            shadow-sm hover:shadow-md
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
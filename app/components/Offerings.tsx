'use client'

import { useState } from 'react'
import Link from 'next/link'
import OfferingsResultsList from './OfferingsResultsList'
import QuoteRequestPopup from './QuoteRequestPopup'
import { offerings, type Offering } from '../data/offerings'

const Offerings = () => {
  const [allocationFor, setAllocationFor] = useState<Offering | null>(null)

  return (
    <section className='flex flex-col items-center py-32 bg-primary'>
      <h1 className='mx-2 text-6xl max-lg:text-center leading-tight text-dark font-bold'>
        COFFEE LINEUP
      </h1>
      <p className='max-md:text-center m-2'>
        {`Ethiopian lots selected for cafés and roasters worldwide`}
      </p>

      <div className='container mx-auto px-4 mt-12 w-full'>
        <OfferingsResultsList items={offerings.slice(0, 3)} showActions onRequestQuote={(o) => setAllocationFor(o)} />
      </div>

      <Link href='/offerings' className='
        p-10 py-3 mt-12 w-fit font-inconsolata
        bg-primary hover:bg-dark text-dark hover:text-primary
         border border-black 
         rounded-md
      '>
        VIEW ALL OUR OFFERINGS
      </Link>

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
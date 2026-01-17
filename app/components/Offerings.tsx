import React from 'react'
import Link from 'next/link'
import OfferingsResultsList from './OfferingsResultsList'
import { offerings } from '../data/offerings'

const Offerings = () => {
  return (
    <section className='flex flex-col items-center py-32 bg-primary'>
      <h1 className='mx-2 text-6xl max-lg:text-center leading-tight text-dark font-bold'>
        OUR CURRENT OFFERINGS
      </h1>
      <p className='max-md:text-center m-2'>
        {`Exceptional coffee beans for discerning cafés and roasters worldwide`}
      </p>

      <div className='container mx-auto px-4 mt-12 w-full'>
        <OfferingsResultsList items={offerings.slice(0, 3)} />
      </div>

      <Link href='/offerings' className='
        p-10 py-3 mt-12 w-fit font-inconsolata
        bg-primary hover:bg-dark text-dark hover:text-primary
         border border-black 
         rounded-md
      '>
        VIEW ALL OUR OFFERINGS
      </Link>

    </section>
  )
}

export default Offerings
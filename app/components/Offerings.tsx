import React from 'react'
import ProductLine from '../lib/ProductLine'
import Link from 'next/link'

const Offerings = () => {
  return (
    <section className='flex flex-col items-center py-32 bg-primary'>
      <h1 className='mx-2 text-6xl max-lg:text-center leading-tight text-dark font-bold'>
        OUR OFFERINGS
      </h1>
      <p className='max-md:text-center m-2'>
        {`Exceptional coffee beans for discerning cafés and roasters across Canada`}
      </p>

      <Link href='/offerings' className='
        p-10 py-3 my-12 w-fit font-inconsolata
        bg-primary hover:bg-dark text-dark hover:text-primary
         border border-black 
         rounded-md
      '>
        VIEW ALL VARIETIES
      </Link>
      <ProductLine />

    </section>
  )
}

export default Offerings
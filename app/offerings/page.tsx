import React from 'react'
import dynamic from 'next/dynamic'
import OfferingsBrowser from './OfferingsBrowser'

const Testimonials = dynamic(() => import('../components/Testimonials'), {
  loading: () => <section className='min-h-[220px] bg-dark' />,
})

const OfferingsPage = () => {
  return (
    <main id='about-main' className='bg-primary'>
      <header className='bg-[url(/images/about-us.webp)] w-full h-[350px] flex flex-col items-center justify-center px-4'>
        <h1 className='text-4xl md:text-5xl font-bold text-primary text-center'>Ethiopian Green Coffee for Export</h1>
        <p className='text-primary/80 mt-3 text-sm tracking-widest uppercase text-center'>Grade 1-4 Specialty &amp; Commercial Lots</p>
      </header>
      
      <OfferingsBrowser />
      <Testimonials />
    </main>
  )
}

export default OfferingsPage

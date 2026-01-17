"use client"
import React from 'react'
import Testimonials from '../components/Testimonials'
import OfferingsBrowser from './OfferingsBrowser'

const OfferingsPage = () => {
  return (
    <main id='about-main' className='bg-primary'>
      <header className='bg-[url(/images/about-us.webp)] w-full h-[350px] flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold text-primary'>OFFERINGS</h1>
      </header>
      
      <OfferingsBrowser />
      <Testimonials />
    </main>
  )
}

export default OfferingsPage

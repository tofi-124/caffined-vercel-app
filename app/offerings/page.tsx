"use client"
import React, { useEffect, useRef } from 'react'
import Testimonials from '../components/Testimonials'
import ProductLine from '../lib/ProductLine'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Coffee Offerings | Ethio Coffee',
  description: 'Explore our premium Ethiopian coffee offerings for wholesale partners. Specialty grade beans with distinctive flavor profiles from the birthplace of coffee.',
  keywords: 'Ethiopian coffee offerings, coffee blends, specialty coffee, wholesale coffee, coffee varieties',
  openGraph: {
    title: 'Premium Ethiopian Coffee Offerings | Ethio Coffee',
    description: 'Explore our premium Ethiopian coffee offerings for wholesale partners.',
    url: 'https://ethiocoffee.com/offerings',
  }
}

const OfferingsPage = () => {
  const productsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Scroll to center the products section with a slight delay to ensure DOM is fully loaded
    const timer = setTimeout(() => {
      if (productsRef.current) {
        const productsSectionTop = productsRef.current.offsetTop;
        const windowHeight = window.innerHeight;
        const scrollToPosition = productsSectionTop - (windowHeight / 4); // Position to show products in center
        
        window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth'
        });
      }
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <main id='about-main' className='bg-primary'>
      <header className='bg-[url(/images/about-us.webp)] w-full h-[350px] flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold text-primary'>OFFERINGS</h1>
      </header>
      
      <section className='mx-auto px-4 flex flex-col justify-center items-center'>
        <h1 className='max-sm:text-center font-extrabold text-5xl my-16'>
          OUR BLENDS DELIVER
        </h1>
        <div ref={productsRef}>
          <ProductLine />
        </div>
      </section>
      <Testimonials />
    </main>
  )
}

export default OfferingsPage

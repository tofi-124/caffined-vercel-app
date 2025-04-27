import React from 'react'
import Link from 'next/link'
import ResponsiveImage from './ResponsiveImage'

const Hero = () => {
  return (
    <section id='hero' className=' min-h-screen py-[7.5rem] bg-dark' aria-label="Hero section">
      <div className=" flex max-lg:flex-col items-center justify-center gap-12">
        
        <div id="hero-heading-wrapper" className='flex flex-col lg:items-start items-center justify-center mx-2 lg:w-1/2'>
          <h1 className='text-5xl max-lg:text-center lg:text-6xl leading-tight text-primary font-bold'>
            PREMIUM ETHIOPIAN COFFEE
          </h1>
          <p className='text-primary max-lg:text-center lg:pr-20'>
            Ethio Coffee exports premium Ethiopian coffee beans for specialty cafés and roasters worldwide. Experience the distinctive floral and fruity notes from the birthplace of coffee.
          </p>

          <Link href="/contact-us" className='
            p-10 py-4 mt-6 w-fit
            bg-primary hover:bg-dark text-dark hover:text-primary
            border hover:border-primary
            rounded-md
         ' aria-label="Contact us about becoming a wholesale partner">REQUEST A COFFEE SAMPLE</Link>
        </div>

        <div id="hero-image-wrapper" className='relative lg:w-1/3 max-sm:m-2'>
          <ResponsiveImage 
            src='/images/coffee-pack-1.webp' 
            alt='Premium Ethiopian coffee packaging featuring specialty grade beans for wholesale partners' 
            width={900}
            height={600}
            className='max-lg:w-[400px]'
            priority={true}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        
      </div>
    </section>
  )
}

export default Hero

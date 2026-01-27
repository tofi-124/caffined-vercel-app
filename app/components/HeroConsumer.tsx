'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ResponsiveImage from './ResponsiveImage'
import { FaTruck, FaCoffee, FaLeaf } from 'react-icons/fa'

const HeroConsumer = () => {
  return (
    <section className='relative min-h-[90vh] bg-dark overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <ResponsiveImage
          src='/images/coffee-pack-1.webp'
          alt='Ethiopian Coffee'
          fill
          objectFit='cover'
          className='opacity-20'
          priority
        />
      </div>

      <div className='relative z-10 container mx-auto px-4 py-20 lg:py-32'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='lg:w-1/2 text-center lg:text-left'
          >
            <span className='inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6 uppercase tracking-wider'>
              Direct from Ethiopia
            </span>
            
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6'>
              Premium Ethiopian Coffee,{' '}
              <span className='text-accent'>Delivered Fresh</span>
            </h1>
            
            <p className='text-primary/80 text-lg mb-8 max-w-xl mx-auto lg:mx-0'>
              Experience the birthplace of coffee. Single-origin beans from Yirgacheffe, Sidamo, and Guji   
              roasted fresh and shipped directly to your door.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
              <Link 
                href='/shop'
                className='px-8 py-4 bg-accent text-white font-bold rounded-md hover:bg-white hover:text-dark transition-colors text-lg'
              >
                Shop Coffee
              </Link>
              <Link 
                href='/about'
                className='px-8 py-4 border-2 border-primary text-primary font-bold rounded-md hover:bg-primary hover:text-dark transition-colors text-lg'
              >
                Our Story
              </Link>
            </div>

            {/* Trust Badges */}
            <div className='mt-10 flex flex-wrap justify-center lg:justify-start gap-8 text-primary/80'>
              <div className='flex items-center gap-2'>
                <FaTruck className='text-xl text-accent' />
                <span className='text-sm'>Free shipping over $75</span>
              </div>
              <div className='flex items-center gap-2'>
                <FaCoffee className='text-xl text-accent' />
                <span className='text-sm'>Roasted to order</span>
              </div>
              <div className='flex items-center gap-2'>
                <FaLeaf className='text-xl text-accent' />
                <span className='text-sm'>100% Arabica beans</span>
              </div>
            </div>
          </motion.div>

          {/* Product Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='lg:w-1/2 flex justify-center'
          >
            <div className='relative w-full max-w-md'>
              <ResponsiveImage
                src='/images/coffee-pack-1.webp'
                alt='Premium Ethiopian Coffee Bag'
                width={500}
                height={600}
                className='drop-shadow-2xl'
                priority
              />
              
              {/* Floating badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className='absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-lg font-bold shadow-lg'
              >
                4.9 Stars
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className='absolute -bottom-4 -left-4 bg-white text-dark px-4 py-2 rounded-lg font-bold shadow-lg'
              >
                Best Seller
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className='absolute bottom-0 left-0 right-0'>
        <svg viewBox='0 0 1440 120' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z' fill='#FFF9F5'/>
        </svg>
      </div>
    </section>
  )
}

export default HeroConsumer

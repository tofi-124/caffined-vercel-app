'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const CtaBanner = () => {
  return (
    <section className='py-20 bg-accent'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center'
        >
          <h2 className='text-3xl lg:text-5xl font-bold text-white mb-6'>
            Ready to Taste Ethiopia?
          </h2>
          <p className='text-white/90 text-lg max-w-2xl mx-auto mb-8'>
            Join thousands of coffee lovers who've discovered the rich, complex flavors of authentic Ethiopian coffee. 
            Start your journey today.
          </p>
          
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/shop'
              className='px-8 py-4 bg-white text-dark font-bold rounded-md hover:bg-primary transition-colors text-lg'
            >
              Shop Now
            </Link>
            <Link
              href='/shop?category=blend'
              className='px-8 py-4 border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-dark transition-colors text-lg'
            >
              Try Our House Blend
            </Link>
          </div>

          {/* Stats */}
          <div className='mt-12 grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div>
              <p className='text-4xl font-bold text-white'>500+</p>
              <p className='text-white/70'>Happy Customers</p>
            </div>
            <div>
              <p className='text-4xl font-bold text-white'>4.9★</p>
              <p className='text-white/70'>Average Rating</p>
            </div>
            <div>
              <p className='text-4xl font-bold text-white'>8</p>
              <p className='text-white/70'>Coffee Varieties</p>
            </div>
            <div>
              <p className='text-4xl font-bold text-white'>100%</p>
              <p className='text-white/70'>Ethiopian Origin</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CtaBanner

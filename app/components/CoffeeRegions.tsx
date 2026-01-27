'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ResponsiveImage from './ResponsiveImage'

const regions = [
  {
    name: 'Yirgacheffe',
    description: 'Floral, citrus, tea-like',
    image: '/images/products/yirgacheffe.webp',
    slug: 'yirgacheffe-light-roast',
  },
  {
    name: 'Sidamo',
    description: 'Berry, wine, chocolate',
    image: '/images/products/sidamo.webp',
    slug: 'sidamo-natural-process',
  },
  {
    name: 'Guji',
    description: 'Stone fruit, floral, syrupy',
    image: '/images/products/guji.webp',
    slug: 'guji-espresso-roast',
  },
  {
    name: 'Harar',
    description: 'Dried fruit, wine, mocha',
    image: '/images/products/harar.webp',
    slug: 'harar-mocha-reserve',
  },
]

const CoffeeRegions = () => {
  return (
    <section className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl lg:text-4xl font-bold text-dark mb-4'>
            Explore Ethiopian Regions
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Each Ethiopian coffee region offers unique flavors shaped by altitude, climate, and traditional processing methods.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {regions.map((region, index) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link 
                href={`/shop/${region.slug}`}
                className='block group'
              >
                <div className='relative aspect-square rounded-lg overflow-hidden mb-4'>
                  <ResponsiveImage
                    src={region.image}
                    alt={`${region.name} Ethiopian Coffee`}
                    fill
                    objectFit='cover'
                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
                    className='group-hover:scale-110 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                  <div className='absolute bottom-4 left-4 right-4'>
                    <h3 className='text-xl font-bold text-white'>{region.name}</h3>
                    <p className='text-white/80 text-sm'>{region.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className='text-center mt-10'>
          <Link
            href='/shop'
            className='inline-block bg-accent text-white px-8 py-3 rounded-md font-bold hover:bg-dark transition-colors'
          >
            View All Coffee →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CoffeeRegions

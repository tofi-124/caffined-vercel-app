'use client'

import { products, getFeaturedProducts, getBestSellers } from '../data/products'
import ProductGrid from './ProductGrid'

const FeaturedProducts = () => {
  const featured = getFeaturedProducts().slice(0, 4)

  return (
    <section className='py-16 bg-primary'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl lg:text-4xl font-bold text-dark mb-4'>
            Featured Coffee
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Discover our most popular Ethiopian coffee selections, each with unique flavor profiles from different regions of Ethiopia.
          </p>
        </div>
        
        <ProductGrid 
          products={featured} 
          showViewAll 
          viewAllLink='/shop'
        />
      </div>
    </section>
  )
}

export default FeaturedProducts

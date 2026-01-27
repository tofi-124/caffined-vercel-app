'use client'

import { Product } from '../data/products'
import ProductCard from './ProductCard'

type Props = {
  products: Product[]
  title?: string
  showViewAll?: boolean
  viewAllLink?: string
}

export default function ProductGrid({ products, title, showViewAll = false, viewAllLink = '/shop' }: Props) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No products found</p>
      </div>
    )
  }

  return (
    <section className="py-8">
      {title && (
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-dark">{title}</h2>
          {showViewAll && (
            <a 
              href={viewAllLink}
              className="text-accent hover:text-dark font-medium transition-colors"
            >
              View All →
            </a>
          )}
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

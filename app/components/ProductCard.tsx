'use client'

import Link from 'next/link'
import { Product } from '../data/products'
import ResponsiveImage from './ResponsiveImage'
import { FaStar } from 'react-icons/fa'

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const lowestPrice = Math.min(...product.sizes.map(s => s.price))
  const highestComparePrice = Math.max(...product.sizes.map(s => s.compareAtPrice || s.price))
  
  return (
    <Link 
      href={`/shop/${product.slug}`}
      className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <ResponsiveImage
          src={product.image}
          alt={product.name}
          fill
          objectFit="cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-accent text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-dark text-white text-xs font-bold px-2 py-1 rounded">
              BEST SELLER
            </span>
          )}
          {!product.inStock && (
            <span className="bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded">
              SOLD OUT
            </span>
          )}
        </div>

        {/* Discount badge */}
        {highestComparePrice > lowestPrice && (
          <div className="absolute top-3 right-3">
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              SALE
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        {/* Category */}
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
          {product.category.replace('-', ' ')}
        </p>

        {/* Name */}
        <h3 className="font-bold text-lg text-dark group-hover:text-accent transition-colors">
          {product.name}
        </h3>

        {/* Flavor notes */}
        <p className="text-sm text-gray-600 mt-1 line-clamp-1">
          {product.flavorNotes.slice(0, 3).join(' • ')}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <FaStar className="text-yellow-400 text-sm" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-sm text-gray-500">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-lg font-bold text-dark">
            From ${lowestPrice.toFixed(2)}
          </span>
          {highestComparePrice > lowestPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${highestComparePrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}

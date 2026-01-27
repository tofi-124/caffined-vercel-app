'use client'

import { useState } from 'react'
import { Product, ProductSize, grindOptions, GrindOption } from '../data/products'
import { useCart } from '../context/CartContext'
import ResponsiveImage from './ResponsiveImage'
import QuantitySelector from './QuantitySelector'
import { FaStar, FaLeaf, FaMountain, FaCoffee, FaCheck } from 'react-icons/fa'
import Link from 'next/link'

type Props = {
  product: Product
}

export default function ProductDetail({ product }: Props) {
  const [selectedSize, setSelectedSize] = useState<ProductSize>(product.sizes[0])
  const [selectedGrind, setSelectedGrind] = useState<GrindOption>(grindOptions[0])
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [showAdded, setShowAdded] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem(product.id, selectedSize.id, quantity, selectedGrind.id)
    setShowAdded(true)
    setTimeout(() => setShowAdded(false), 2000)
  }

  const savings = selectedSize.compareAtPrice
    ? ((selectedSize.compareAtPrice - selectedSize.price) * quantity).toFixed(2)
    : null

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Images */}
      <div className="space-y-4">
        <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
          <ResponsiveImage
            src={product.images[activeImage] || product.image}
            alt={product.name}
            fill
            objectFit="cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-accent text-white text-sm font-bold px-3 py-1 rounded">
                NEW
              </span>
            )}
            {product.isBestSeller && (
              <span className="bg-dark text-white text-sm font-bold px-3 py-1 rounded">
                BEST SELLER
              </span>
            )}
          </div>
        </div>

        {/* Thumbnail gallery */}
        {product.images.length > 1 && (
          <div className="flex gap-2">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`relative w-20 h-20 rounded-md overflow-hidden border-2 transition-colors ${
                  activeImage === idx ? 'border-accent' : 'border-transparent'
                }`}
              >
                <ResponsiveImage
                  src={img}
                  alt={`${product.name} view ${idx + 1}`}
                  fill
                  objectFit="cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500">
          <Link href="/shop" className="hover:text-accent">Shop</Link>
          <span className="mx-2">/</span>
          <Link href={`/shop?category=${product.category}`} className="hover:text-accent capitalize">
            {product.category.replace('-', ' ')}
          </Link>
        </nav>

        {/* Title & Rating */}
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-dark">{product.name}</h1>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="font-medium">{product.rating}</span>
            <span className="text-gray-500">({product.reviewCount} reviews)</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-bold text-dark">
            ${selectedSize.price.toFixed(2)}
          </span>
          {selectedSize.compareAtPrice && (
            <>
              <span className="text-xl text-gray-400 line-through">
                ${selectedSize.compareAtPrice.toFixed(2)}
              </span>
              <span className="text-accent font-bold">
                Save ${(selectedSize.compareAtPrice - selectedSize.price).toFixed(2)}
              </span>
            </>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">{product.description}</p>

        {/* Flavor Notes */}
        <div>
          <h3 className="font-bold text-dark mb-2">Tasting Notes</h3>
          <div className="flex flex-wrap gap-2">
            {product.flavorNotes.map(note => (
              <span
                key={note}
                className="bg-primary text-dark px-3 py-1 rounded-full text-sm font-medium"
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div>
          <h3 className="font-bold text-dark mb-3">Select Size</h3>
          <div className="flex flex-wrap gap-3">
            {product.sizes.map(size => (
              <button
                key={size.id}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 rounded-md border-2 font-medium transition-colors ${
                  selectedSize.id === size.id
                    ? 'border-accent bg-accent text-white'
                    : 'border-gray-300 hover:border-accent'
                }`}
              >
                {size.weight} - ${size.price.toFixed(2)}
              </button>
            ))}
          </div>
        </div>

        {/* Grind Selection */}
        <div>
          <h3 className="font-bold text-dark mb-3">Select Grind</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {grindOptions.map(grind => (
              <button
                key={grind.id}
                onClick={() => setSelectedGrind(grind)}
                className={`px-3 py-2 rounded-md border-2 text-left transition-colors ${
                  selectedGrind.id === grind.id
                    ? 'border-accent bg-accent/10'
                    : 'border-gray-300 hover:border-accent'
                }`}
              >
                <span className="block font-medium text-dark text-sm">{grind.name}</span>
                <span className="block text-xs text-gray-500">{grind.description}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Quantity & Add to Cart */}
        <div className="flex flex-wrap items-center gap-4">
          <div>
            <label className="block font-bold text-dark mb-2">Quantity</label>
            <QuantitySelector
              quantity={quantity}
              onIncrease={() => setQuantity(q => Math.min(q + 1, 99))}
              onDecrease={() => setQuantity(q => Math.max(q - 1, 1))}
              onChange={setQuantity}
              size="lg"
            />
          </div>

          <div className="flex-1">
            <label className="block font-bold text-dark mb-2">&nbsp;</label>
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`w-full py-3 px-6 rounded-md font-bold text-lg transition-colors ${
                showAdded
                  ? 'bg-green-500 text-white'
                  : product.inStock
                  ? 'bg-accent text-white hover:bg-dark'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {showAdded ? (
                <span className="flex items-center justify-center gap-2">
                  <FaCheck /> Added to Cart
                </span>
              ) : product.inStock ? (
                `Add to Cart - $${(selectedSize.price * quantity).toFixed(2)}`
              ) : (
                'Out of Stock'
              )}
            </button>
          </div>
        </div>

        {/* Savings callout */}
        {savings && Number(savings) > 0 && (
          <p className="text-green-600 font-medium">
            You save ${savings} with this order!
          </p>
        )}

        {/* Quick Info */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div className="flex items-center gap-3">
            <FaLeaf className="text-green-600 text-xl" />
            <div>
              <p className="font-medium text-dark">100% Ethiopian</p>
              <p className="text-sm text-gray-500">Direct from origin</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaMountain className="text-blue-600 text-xl" />
            <div>
              <p className="font-medium text-dark">{product.altitude}</p>
              <p className="text-sm text-gray-500">Altitude grown</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaCoffee className="text-amber-600 text-xl" />
            <div>
              <p className="font-medium text-dark capitalize">{product.roastLevel} Roast</p>
              <p className="text-sm text-gray-500">{product.process}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaStar className="text-yellow-500 text-xl" />
            <div>
              <p className="font-medium text-dark">{product.rating} Rating</p>
              <p className="text-sm text-gray-500">{product.reviewCount} reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

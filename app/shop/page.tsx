'use client'

import { useState, useMemo } from 'react'
import { products, categories, Product } from '../data/products'
import ProductGrid from '../components/ProductGrid'
import { useSearchParams } from 'next/navigation'

type SortOption = 'featured' | 'price-low' | 'price-high' | 'rating' | 'newest'

export default function ShopPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category') || 'all'
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam)
  const [sortBy, setSortBy] = useState<SortOption>('featured')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100])
  const [roastFilter, setRoastFilter] = useState<string[]>([])

  const roastLevels = ['light', 'medium', 'medium-dark', 'dark']

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory)
    }

    // Roast level filter
    if (roastFilter.length > 0) {
      result = result.filter(p => roastFilter.includes(p.roastLevel))
    }

    // Price filter (based on lowest size price)
    result = result.filter(p => {
      const lowestPrice = Math.min(...p.sizes.map(s => s.price))
      return lowestPrice >= priceRange[0] && lowestPrice <= priceRange[1]
    })

    // Sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => {
          const aPrice = Math.min(...a.sizes.map(s => s.price))
          const bPrice = Math.min(...b.sizes.map(s => s.price))
          return aPrice - bPrice
        })
        break
      case 'price-high':
        result.sort((a, b) => {
          const aPrice = Math.min(...a.sizes.map(s => s.price))
          const bPrice = Math.min(...b.sizes.map(s => s.price))
          return bPrice - aPrice
        })
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
      case 'featured':
      default:
        result.sort((a, b) => {
          const aScore = (a.isFeatured ? 2 : 0) + (a.isBestSeller ? 1 : 0)
          const bScore = (b.isFeatured ? 2 : 0) + (b.isBestSeller ? 1 : 0)
          return bScore - aScore
        })
    }

    return result
  }, [selectedCategory, sortBy, priceRange, roastFilter])

  const toggleRoastFilter = (roast: string) => {
    setRoastFilter(prev =>
      prev.includes(roast)
        ? prev.filter(r => r !== roast)
        : [...prev, roast]
    )
  }

  return (
    <main className="min-h-screen bg-primary">
      {/* Hero Banner */}
      <section className="bg-dark py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Shop Ethiopian Coffee
          </h1>
          <p className="text-primary/80 text-lg max-w-2xl mx-auto">
            Discover our collection of premium Ethiopian coffee beans, roasted to perfection and shipped fresh to your door.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-24">
              <h2 className="font-bold text-xl text-dark mb-4">Filters</h2>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-medium text-dark mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-accent text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Roast Level */}
              <div className="mb-6">
                <h3 className="font-medium text-dark mb-3">Roast Level</h3>
                <div className="space-y-2">
                  {roastLevels.map(roast => (
                    <label
                      key={roast}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={roastFilter.includes(roast)}
                        onChange={() => toggleRoastFilter(roast)}
                        className="rounded border-gray-300 text-accent focus:ring-accent"
                      />
                      <span className="capitalize">{roast.replace('-', ' ')}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium text-dark mb-3">Price Range</h3>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={e => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full range-accent-dark"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}+</span>
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setRoastFilter([])
                  setPriceRange([0, 100])
                }}
                className="w-full text-center text-accent hover:text-dark font-medium"
              >
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            {/* Sort & Count */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <p className="text-gray-600">
                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as SortOption)}
                className="px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </main>
  )
}

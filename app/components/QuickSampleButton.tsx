'use client'

import { useState } from 'react'
import type { SampleOption } from '../data/offerings'
import { useCart } from './CartContext'

type Props = {
  productId: string
  productName: string
  sampleOptions: SampleOption[]
  image_url?: string
}

const QuickSampleButton = ({ productId, productName, sampleOptions, image_url }: Props) => {
  const { addItem } = useCart()
  const [justAdded, setJustAdded] = useState(false)

  if (!sampleOptions || sampleOptions.length === 0) return null

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    // Add the first (smallest) sample option
    const option = sampleOptions[0]
    addItem({
      productId,
      productName,
      weight: option.weight,
      weightGrams: option.weightGrams,
      priceUSD: option.priceUSD,
      image_url: image_url || 'product-img.png',
    })
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 1500)
  }

  return (
    <button
      type='button'
      onClick={handleAdd}
      title='Add sample to cart'
      className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 ${
        justAdded ? 'text-emerald-600' : 'text-dark/60 hover:text-accent'
      }`}
    >
      {justAdded ? (
        <>
          <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
          </svg>
          Added!
        </>
      ) : (
        <>
          <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z' />
          </svg>
          Add Sample
        </>
      )}
    </button>
  )
}

export default QuickSampleButton

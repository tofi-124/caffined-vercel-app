"use client"

import { useState, useRef, useEffect } from 'react'
import { useCart } from './CartContext'
import type { SampleOption } from '../data/offerings'

type Props = {
  productId: string
  productName: string
  sampleOptions: SampleOption[]
  image_url: string
  isSoldOut?: boolean
}

const AddToCartButton = ({ productId, productName, sampleOptions, image_url, isSoldOut }: Props) => {
  const { addItem } = useCart()
  const [selectedOption, setSelectedOption] = useState<SampleOption>(sampleOptions[0])
  const [showPicker, setShowPicker] = useState(false)
  const [justAdded, setJustAdded] = useState(false)
  const pickerRef = useRef<HTMLDivElement>(null)

  // Close picker on outside click or Escape
  useEffect(() => {
    if (!showPicker) return
    const handleClickOutside = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setShowPicker(false)
      }
    }
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowPicker(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [showPicker])

  if (!sampleOptions?.length || isSoldOut) return null

  const handleAdd = () => {
    addItem({
      productId,
      productName,
      weight: selectedOption.weight,
      weightGrams: selectedOption.weightGrams,
      priceUSD: selectedOption.priceUSD,
      image_url,
    })
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 1500)
    setShowPicker(false)
  }

  // Single option - just add directly
  if (sampleOptions.length === 1) {
    return (
      <button
        onClick={handleAdd}
        disabled={justAdded}
        className={`flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold transition-all duration-300 shadow-sm hover:shadow-lg ${
          justAdded
            ? 'bg-emerald-500 text-white'
            : 'bg-dark hover:bg-accent text-white'
        }`}
      >
        {justAdded ? (
          <>
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
            </svg>
            <span>Added!</span>
          </>
        ) : (
          <>
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z' />
            </svg>
            <span>Add Sample - ${sampleOptions[0].priceUSD.toFixed(2)}</span>
          </>
        )}
      </button>
    )
  }

  // Multiple options - show a picker
  return (
    <div className='relative' ref={pickerRef}>
      <button
        onClick={() => setShowPicker(prev => !prev)}
        className='flex items-center justify-center gap-2 px-6 py-4 bg-dark hover:bg-accent text-white rounded-full font-semibold transition-all duration-300 shadow-sm hover:shadow-lg w-full'
      >
        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z' />
        </svg>
        <span>Add Sample to Cart</span>
      </button>

      {showPicker && (
        <div className='absolute bottom-full left-0 right-0 mb-2 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-10 animate-slide-up'>
          <p className='text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3'>Select Size</p>
          <div className='space-y-2'>
            {sampleOptions.map(option => (
              <button
                key={option.weight}
                onClick={() => {
                  setSelectedOption(option)
                  addItem({
                    productId,
                    productName,
                    weight: option.weight,
                    weightGrams: option.weightGrams,
                    priceUSD: option.priceUSD,
                    image_url,
                  })
                  setShowPicker(false)
                  setJustAdded(true)
                  setTimeout(() => setJustAdded(false), 1500)
                }}
                className='w-full flex items-center justify-between p-3 rounded-xl border border-gray-200 hover:border-accent hover:bg-accent/5 transition-all'
              >
                <div className='text-left'>
                  <span className='font-bold text-dark'>{option.weight}</span>
                  <span className='text-xs text-gray-500 ml-2'>{option.description}</span>
                </div>
                <span className='font-bold text-accent'>${option.priceUSD.toFixed(2)}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {justAdded && (
        <div className='absolute -top-12 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg whitespace-nowrap'>
          &#10003; Added to cart!
        </div>
      )}
    </div>
  )
}

export default AddToCartButton

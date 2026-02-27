'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import type { SampleOption } from '../data/offerings'

const PayPalProvider = dynamic(() => import('./PayPalProvider'), { ssr: false })
const SampleOrderPopup = dynamic(() => import('./SampleOrderButton'), { ssr: false })

type Props = {
  productId: string
  productName: string
  sampleOptions: SampleOption[]
}

const QuickSampleButton = ({ productId, productName, sampleOptions }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  if (!sampleOptions || sampleOptions.length === 0) return null

  return (
    <>
      <button
        type='button'
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setIsOpen(true)
        }}
        title='Get a free sample'
        className='inline-flex items-center gap-1.5 text-sm font-semibold text-dark/60 hover:text-accent transition-colors duration-200'
      >
        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' />
        </svg>
        Free Sample
      </button>

      {isOpen && (
        <PayPalProvider>
          <SampleOrderPopup
            productId={productId}
            productName={productName}
            sampleOptions={sampleOptions}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          />
        </PayPalProvider>
      )}
    </>
  )
}

export default QuickSampleButton

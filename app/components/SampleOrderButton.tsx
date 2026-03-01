"use client"

import { useState, useEffect } from 'react'
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'
import type { SampleOption } from '../data/offerings'
import { COMPANY_EMAIL } from '../lib/constants'

type SampleOrderProps = {
  productId: string
  productName: string
  sampleOptions: SampleOption[]
  isSoldOut?: boolean
  isOpen: boolean
  onClose: () => void
}

/**
 * Inner component that uses the PayPal SDK hook.
 * MUST be rendered inside a <PayPalScriptProvider>.
 */
const PayPalCheckoutSection = ({
  productId,
  productName,
  selectedOption,
  orderStatus,
  setOrderStatus,
  orderMessage,
  setOrderMessage,
}: {
  productId: string
  productName: string
  selectedOption: SampleOption
  orderStatus: 'idle' | 'processing' | 'success' | 'error'
  setOrderStatus: (s: 'idle' | 'processing' | 'success' | 'error') => void
  orderMessage: string
  setOrderMessage: (m: string) => void
}) => {
  const [{ isPending, isRejected }] = usePayPalScriptReducer()

  const handleCreateOrder = async () => {
    try {
      const response = await fetch('/api/paypal/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId,
          productName,
          sampleWeight: selectedOption.weight,
          samplePrice: selectedOption.priceUSD.toFixed(2),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create order')
      }

      return data.id
    } catch (error) {
      console.error('Error creating PayPal order:', error)
      setOrderStatus('error')
      setOrderMessage('Failed to initiate payment. Please try again.')
      throw error
    }
  }

  const handleApprove = async (data: { orderID: string }) => {
    setOrderStatus('processing')
    try {
      const response = await fetch('/api/paypal/capture-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderID: data.orderID,
          productId,
          productName,
          sampleWeight: selectedOption.weight,
          samplePrice: selectedOption.priceUSD,
        }),
      })

      const captureData = await response.json()

      if (!response.ok) {
        throw new Error(captureData.error || 'Payment capture failed')
      }

      setOrderStatus('success')
      setOrderMessage(`Payment successful! Order #${data.orderID.slice(-8).toUpperCase()}. Check your email for confirmation.`)
    } catch (error) {
      console.error('Error capturing payment:', error)
      setOrderStatus('error')
      setOrderMessage('Payment could not be processed. If funds were deducted, please contact us at ' + COMPANY_EMAIL + '.')
    }
  }

  const handleError = (err: unknown) => {
    console.error('PayPal onError:', err)
    // Only set generic message if handleCreateOrder hasn't already set a specific one
    if (orderStatus !== 'error') {
      setOrderStatus('error')
      setOrderMessage('Something went wrong with PayPal. Please try again.')
    }
  }

  if (isPending) {
    return (
      <div className='flex items-center justify-center py-8'>
        <div className='w-6 h-6 border-2 border-gray-300 border-t-accent rounded-full animate-spin'></div>
        <span className='ml-3 text-sm text-gray-500'>Loading PayPal...</span>
      </div>
    )
  }

  if (isRejected) {
    return (
      <div className='p-4 rounded-xl bg-amber-50 border border-amber-200 text-center'>
        <p className='text-sm text-amber-700'>
          PayPal is temporarily unavailable. Please{' '}
          <a href='/contact-us' className='underline font-semibold'>contact us</a>{' '}
          to order your sample directly.
        </p>
      </div>
    )
  }

  return (
    <>
      {orderStatus === 'error' && (
        <div className='mb-4 p-3 rounded-xl bg-red-50 border border-red-200'>
          <p className='text-sm text-red-700'>{orderMessage}</p>
        </div>
      )}

      <div className='paypal-button-container'>
        <PayPalButtons
          style={{
            layout: 'vertical',
            color: 'gold',
            shape: 'pill',
            label: 'pay',
            height: 48,
          }}
          disabled={orderStatus === 'processing'}
          createOrder={handleCreateOrder}
          onApprove={handleApprove}
          onError={handleError}
          onCancel={() => {
            setOrderStatus('idle')
            setOrderMessage('')
          }}
        />
      </div>

      {orderStatus === 'processing' && (
        <div className='flex items-center justify-center py-4'>
          <div className='w-5 h-5 border-2 border-gray-300 border-t-accent rounded-full animate-spin'></div>
          <span className='ml-3 text-sm text-gray-600'>Processing your payment...</span>
        </div>
      )}
    </>
  )
}

/**
 * Sample order popup modal - triggered by an external button.
 */
const SampleOrderPopup = ({ productId, productName, sampleOptions, isSoldOut, isOpen, onClose }: SampleOrderProps) => {
  const [selectedOption, setSelectedOption] = useState<SampleOption>(sampleOptions[0])
  const [orderStatus, setOrderStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle')
  const [orderMessage, setOrderMessage] = useState('')

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen || isSoldOut || !sampleOptions.length) return null

  // Success state - full modal replaced with confirmation
  if (orderStatus === 'success') {
    return (
      <div className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4' role='dialog' aria-modal='true' aria-label='Sample order confirmation' onClick={onClose}>
        <div className='bg-white rounded-3xl max-w-md w-full p-8 text-center shadow-2xl' onClick={e => e.stopPropagation()}>
          <div className='w-16 h-16 mx-auto mb-5 rounded-full bg-emerald-100 flex items-center justify-center'>
            <svg className='w-8 h-8 text-emerald-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
            </svg>
          </div>
          <h3 className='text-xl font-bold text-dark mb-2'>Sample Order Confirmed!</h3>
          <p className='text-gray-600 text-sm mb-1'>{orderMessage}</p>
          <p className='text-gray-500 text-xs mt-3'>We&apos;ll ship your {selectedOption.weight} {productName} sample within 2-3 business days.</p>
          <button
            type='button'
            onClick={onClose}
            className='mt-6 px-8 py-3 bg-dark hover:bg-accent text-white rounded-full font-semibold transition-all text-sm'
          >
            Done
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4' role='dialog' aria-modal='true' aria-label={`Order ${productName} sample`} onClick={onClose}>
      <div
        className='bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-up'
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className='flex items-center justify-between p-6 pb-0'>
          <div>
            <h2 className='text-xl font-bold text-dark'>Order a Sample</h2>
            <p className='text-sm text-gray-500 mt-0.5'>{productName} - Green Coffee</p>
          </div>
          <button
            type='button'
            onClick={onClose}
            className='w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center transition-colors'
            aria-label='Close'
          >
            <svg className='w-4 h-4 text-gray-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>

        <div className='p-6'>
          {/* Sample size selector */}
          <div className='mb-5'>
            <label className='text-[11px] font-semibold uppercase tracking-widest text-gray-400 block mb-3'>
              Select Sample Size
            </label>
            <div className='grid grid-cols-2 gap-2'>
              {sampleOptions.map((option) => (
                <button
                  key={option.weight}
                  type='button'
                  onClick={() => setSelectedOption(option)}
                  className={`relative p-3 rounded-2xl border-2 transition-all text-center ${
                    selectedOption.weight === option.weight
                      ? 'border-accent bg-accent/5 shadow-sm'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <span className={`block text-lg font-bold ${
                    selectedOption.weight === option.weight ? 'text-accent' : 'text-dark'
                  }`}>
                    {option.weight}
                  </span>
                  <span className='block text-xs text-gray-500 mt-0.5'>{option.description}</span>
                  <span className={`block text-sm font-bold mt-1 ${
                    selectedOption.weight === option.weight ? 'text-accent' : 'text-gray-700'
                  }`}>
                    ${option.priceUSD.toFixed(2)}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Price summary */}
          <div className='py-3 px-4 bg-stone-50 rounded-xl mb-4 space-y-2'>
            <div className='flex items-center justify-between'>
              <span className='text-sm text-gray-600'>
                {productName} - {selectedOption.weight} sample
              </span>
              <span className='text-sm font-bold text-dark'>${selectedOption.priceUSD.toFixed(2)}</span>
            </div>
            <div className='flex items-center justify-between pt-2 border-t border-gray-200'>
              <span className='text-sm font-semibold text-dark'>Total</span>
              <span className='text-lg font-bold text-dark'>${selectedOption.priceUSD.toFixed(2)}</span>
            </div>
          </div>

          {/* Note */}
          <p className='text-xs text-gray-500 mb-5 flex items-start gap-1.5'>
            <svg className='w-3.5 h-3.5 text-gray-400 flex-shrink-0 mt-0.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>
            <span>Ordering multiple samples? <a href='/contact-us' className='underline underline-offset-2 hover:text-dark transition-colors'>Reach out for a personalized quote.</a></span>
          </p>

          {/* PayPal Checkout */}
          <PayPalCheckoutSection
            productId={productId}
            productName={productName}
            selectedOption={selectedOption}
            orderStatus={orderStatus}
            setOrderStatus={setOrderStatus}
            orderMessage={orderMessage}
            setOrderMessage={setOrderMessage}
          />
        </div>
      </div>
    </div>
  )
}

export default SampleOrderPopup

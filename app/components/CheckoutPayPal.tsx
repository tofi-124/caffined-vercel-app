"use client"

import { useState } from 'react'
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'
import type { CartItem } from './CartContext'

export type ShippingAddress = {
  fullName: string
  email: string
  phone: string
  addressLine1: string
  addressLine2: string
  city: string
  state: string
  postalCode: string
  countryCode: string
}

type Props = {
  items: CartItem[]
  shippingCost: number
  totalPrice: number
  address: ShippingAddress
  onComplete: (orderId: string) => void
}

const CheckoutPayPal = ({ items, shippingCost, totalPrice, address, onComplete }: Props) => {
  const [{ isPending, isRejected }] = usePayPalScriptReducer()
  const [status, setStatus] = useState<'idle' | 'processing' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleCreateOrder = async () => {
    try {
      const res = await fetch('/api/paypal/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cartItems: items.map(i => ({
            productId: i.productId,
            productName: i.productName,
            weight: i.weight,
            weightGrams: i.weightGrams,
            priceUSD: i.priceUSD,
            quantity: i.quantity,
          })),
          shippingCost,
          totalPrice: totalPrice.toFixed(2),
          shippingAddress: address,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to create order')
      return data.id
    } catch (err) {
      console.error('PayPal create order error:', err)
      setStatus('error')
      setErrorMsg('Failed to initiate payment. Please try again.')
      throw err
    }
  }

  const handleApprove = async (data: { orderID: string }) => {
    setStatus('processing')
    try {
      const res = await fetch('/api/paypal/capture-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderID: data.orderID,
          cartItems: items.map(i => ({
            productId: i.productId,
            productName: i.productName,
            weight: i.weight,
            priceUSD: i.priceUSD,
            quantity: i.quantity,
          })),
          shippingCost,
          shippingAddress: address,
        }),
      })
      const captureData = await res.json()
      if (!res.ok) throw new Error(captureData.error || 'Payment capture failed')
      onComplete(data.orderID.slice(-8).toUpperCase())
    } catch (err) {
      console.error('PayPal capture error:', err)
      setStatus('error')
      setErrorMsg('Payment could not be processed. If funds were deducted, contact us at coffee@ethiocoffee.co.')
    }
  }

  if (isPending) {
    return (
      <div className='flex items-center justify-center py-6'>
        <div className='w-5 h-5 border-2 border-gray-300 border-t-accent rounded-full animate-spin' />
        <span className='ml-2 text-sm text-gray-500'>Loading PayPal...</span>
      </div>
    )
  }

  if (isRejected) {
    return (
      <div className='p-3 rounded-xl bg-amber-50 border border-amber-200 text-center'>
        <p className='text-sm text-amber-700'>
          PayPal is temporarily unavailable.{' '}
          <a href='/contact-us' className='underline font-semibold'>Contact us</a> to complete your order.
        </p>
      </div>
    )
  }

  return (
    <>
      {status === 'error' && (
        <div className='mb-3 p-3 rounded-xl bg-red-50 border border-red-200'>
          <p className='text-sm text-red-700'>{errorMsg}</p>
        </div>
      )}

      <PayPalButtons
        style={{ layout: 'vertical', color: 'gold', shape: 'pill', label: 'pay', height: 48 }}
        disabled={status === 'processing'}
        createOrder={handleCreateOrder}
        onApprove={handleApprove}
        onError={(err) => {
          console.error('PayPal onError:', err)
          if (status !== 'error') {
            setStatus('error')
            setErrorMsg('Something went wrong with PayPal. Please try again.')
          }
        }}
        onCancel={() => {
          setStatus('idle')
          setErrorMsg('')
        }}
      />

      {status === 'processing' && (
        <div className='flex items-center justify-center py-3'>
          <div className='w-4 h-4 border-2 border-gray-300 border-t-accent rounded-full animate-spin' />
          <span className='ml-2 text-sm text-gray-600'>Processing payment...</span>
        </div>
      )}
    </>
  )
}

export default CheckoutPayPal

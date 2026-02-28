"use client"

import { useState, useEffect, useCallback } from 'react'
import { useCart } from '../components/CartContext'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import type { CartItem } from '../components/CartContext'
import type { ShippingAddress } from '../components/CheckoutPayPal'

const PayPalProvider = dynamic(() => import('../components/PayPalProvider'), { ssr: false })

const CheckoutPayPal = dynamic(() => import('../components/CheckoutPayPal'), { ssr: false }) as React.ComponentType<{
  items: CartItem[]
  shippingCost: number
  totalPrice: number
  address: ShippingAddress
  onComplete: (orderId: string) => void
}>

export { type ShippingAddress } from '../components/CheckoutPayPal'

const COUNTRIES = [
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'DE', name: 'Germany' },
  { code: 'FR', name: 'France' },
  { code: 'NL', name: 'Netherlands' },
  { code: 'BE', name: 'Belgium' },
  { code: 'IT', name: 'Italy' },
  { code: 'ES', name: 'Spain' },
  { code: 'SE', name: 'Sweden' },
  { code: 'NO', name: 'Norway' },
  { code: 'DK', name: 'Denmark' },
  { code: 'FI', name: 'Finland' },
  { code: 'CH', name: 'Switzerland' },
  { code: 'AT', name: 'Austria' },
  { code: 'AU', name: 'Australia' },
  { code: 'NZ', name: 'New Zealand' },
  { code: 'JP', name: 'Japan' },
  { code: 'KR', name: 'South Korea' },
  { code: 'CN', name: 'China' },
  { code: 'SG', name: 'Singapore' },
  { code: 'AE', name: 'United Arab Emirates' },
  { code: 'SA', name: 'Saudi Arabia' },
  { code: 'IN', name: 'India' },
  { code: 'BR', name: 'Brazil' },
  { code: 'MX', name: 'Mexico' },
  { code: 'ZA', name: 'South Africa' },
  { code: 'NG', name: 'Nigeria' },
  { code: 'KE', name: 'Kenya' },
  { code: 'TR', name: 'Turkey' },
  { code: 'PL', name: 'Poland' },
  { code: 'CZ', name: 'Czech Republic' },
  { code: 'RO', name: 'Romania' },
]

export default function CheckoutPage() {
  const { items, removeItem, updateQuantity, itemCount, subtotal, totalWeightGrams, clearCart } = useCart()
  const [address, setAddress] = useState<ShippingAddress>({
    fullName: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    countryCode: '',
  })
  const [shippingCost, setShippingCost] = useState<number | null>(null)
  const [shippingLoading, setShippingLoading] = useState(false)
  const [shippingError, setShippingError] = useState('')
  const [orderComplete, setOrderComplete] = useState(false)
  const [orderRef, setOrderRef] = useState('')

  const canCalculateShipping = address.countryCode && address.city && address.postalCode && items.length > 0

  const calculateShipping = useCallback(async () => {
    if (!canCalculateShipping) return
    setShippingLoading(true)
    setShippingError('')
    setShippingCost(null)
    try {
      const res = await fetch('/api/dhl/rate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          countryCode: address.countryCode,
          cityName: address.city,
          postalCode: address.postalCode,
          weightGrams: totalWeightGrams,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to get shipping rate')
      setShippingCost(data.totalPrice)
    } catch (err) {
      setShippingError(err instanceof Error ? err.message : 'Unable to calculate shipping')
    } finally {
      setShippingLoading(false)
    }
  }, [canCalculateShipping, address.countryCode, address.city, address.postalCode, totalWeightGrams])

  // Recalculate shipping when address or weight changes (with debounce)
  useEffect(() => {
    if (!canCalculateShipping) {
      setShippingCost(null)
      return
    }
    const timer = setTimeout(calculateShipping, 800)
    return () => clearTimeout(timer)
  }, [canCalculateShipping, calculateShipping])

  const totalPrice = subtotal + (shippingCost || 0)
  const isAddressValid =
    address.fullName.trim() &&
    address.email.trim() &&
    address.addressLine1.trim() &&
    address.city.trim() &&
    address.postalCode.trim() &&
    address.countryCode
  const canPay = isAddressValid && shippingCost !== null && shippingCost > 0 && items.length > 0

  const handleOrderComplete = (orderId: string) => {
    setOrderRef(orderId)
    setOrderComplete(true)
    clearCart()
  }

  const updateField = (field: keyof ShippingAddress, value: string) => {
    setAddress(prev => ({ ...prev, [field]: value }))
  }

  if (orderComplete) {
    return (
      <main className='bg-stone-50 min-h-screen'>
        <div className='container mx-auto py-24 px-4 max-w-lg text-center'>
          <div className='w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center'>
            <svg className='w-10 h-10 text-emerald-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
            </svg>
          </div>
          <h1 className='text-3xl font-bold text-dark mb-3'>Order Confirmed!</h1>
          <p className='text-gray-600 mb-2'>Your coffee samples are being prepared for shipment via DHL.</p>
          <p className='text-sm text-gray-500 mb-6'>Order reference: <span className='font-mono font-bold'>{orderRef}</span></p>
          <p className='text-sm text-gray-500 mb-8'>Check your email for confirmation and tracking details.</p>
          <Link
            href='/offerings'
            className='inline-flex items-center gap-2 px-8 py-4 bg-dark hover:bg-accent text-white rounded-full font-semibold transition-all'
          >
            Continue Browsing
          </Link>
        </div>
      </main>
    )
  }

  if (items.length === 0) {
    return (
      <main className='bg-stone-50 min-h-screen'>
        <div className='container mx-auto py-24 px-4 max-w-lg text-center'>
          <div className='w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center'>
            <svg className='w-10 h-10 text-gray-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z' />
            </svg>
          </div>
          <h1 className='text-3xl font-bold text-dark mb-3'>Your Cart is Empty</h1>
          <p className='text-gray-500 mb-8'>Browse our offerings to add samples.</p>
          <Link
            href='/offerings'
            className='inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-dark text-white rounded-full font-semibold transition-all'
          >
            Browse Offerings
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className='bg-stone-50 min-h-screen'>
      <div className='container mx-auto py-12 px-4 max-w-5xl'>
        <Link href='/offerings' className='inline-flex items-center gap-1 text-sm text-gray-500 hover:text-dark mb-6 transition-colors'>
          <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
          </svg>
          Back to Offerings
        </Link>

        <h1 className='text-3xl font-bold text-dark mb-8'>Checkout</h1>

        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Left: Form */}
          <div className='flex-1 space-y-6'>
            {/* Cart items */}
            <div className='bg-white rounded-2xl p-6 shadow-sm'>
              <h2 className='text-lg font-bold text-dark mb-4'>Your Items ({itemCount})</h2>
              <ul className='divide-y divide-gray-100'>
                {items.map(item => (
                  <li key={`${item.productId}-${item.weight}`} className='flex items-center gap-4 py-3'>
                    <div className='flex-1 min-w-0'>
                      <p className='font-semibold text-dark text-sm'>{item.productName}</p>
                      <p className='text-xs text-gray-500'>{item.weight} &middot; ${item.priceUSD.toFixed(2)} each</p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <button
                        onClick={() => updateQuantity(item.productId, item.weight, item.quantity - 1)}
                        className='w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-accent text-sm'
                      >
                        &minus;
                      </button>
                      <span className='text-sm font-semibold w-5 text-center'>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.weight, item.quantity + 1)}
                        className='w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-accent text-sm'
                      >
                        +
                      </button>
                    </div>
                    <p className='text-sm font-bold text-dark w-16 text-right'>
                      ${(item.priceUSD * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeItem(item.productId, item.weight)}
                      className='p-1 text-gray-400 hover:text-red-500 transition-colors'
                    >
                      <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping address */}
            <div className='bg-white rounded-2xl p-6 shadow-sm'>
              <h2 className='text-lg font-bold text-dark mb-4'>Shipping Address</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='md:col-span-2'>
                  <label className='block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1'>Full Name *</label>
                  <input
                    type='text'
                    value={address.fullName}
                    onChange={(e) => updateField('fullName', e.target.value)}
                    className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all text-sm'
                    placeholder='John Doe'
                  />
                </div>
                <div>
                  <label className='block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1'>Email *</label>
                  <input
                    type='email'
                    value={address.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all text-sm'
                    placeholder='john@company.com'
                  />
                </div>
                <div>
                  <label className='block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1'>Phone</label>
                  <input
                    type='tel'
                    value={address.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all text-sm'
                    placeholder='+1 234 567 890'
                  />
                </div>
                <div className='md:col-span-2'>
                  <label className='block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1'>Country *</label>
                  <select
                    value={address.countryCode}
                    onChange={(e) => updateField('countryCode', e.target.value)}
                    className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all text-sm bg-white'
                  >
                    <option value=''>Select country...</option>
                    {COUNTRIES.map(c => (
                      <option key={c.code} value={c.code}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <div className='md:col-span-2'>
                  <label className='block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1'>Address Line 1 *</label>
                  <input
                    type='text'
                    value={address.addressLine1}
                    onChange={(e) => updateField('addressLine1', e.target.value)}
                    className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all text-sm'
                    placeholder='Street address'
                  />
                </div>
                <div className='md:col-span-2'>
                  <label className='block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1'>Address Line 2</label>
                  <input
                    type='text'
                    value={address.addressLine2}
                    onChange={(e) => updateField('addressLine2', e.target.value)}
                    className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all text-sm'
                    placeholder='Apt, suite, unit (optional)'
                  />
                </div>
                <div>
                  <label className='block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1'>City *</label>
                  <input
                    type='text'
                    value={address.city}
                    onChange={(e) => updateField('city', e.target.value)}
                    className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all text-sm'
                    placeholder='City'
                  />
                </div>
                <div>
                  <label className='block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1'>State / Province</label>
                  <input
                    type='text'
                    value={address.state}
                    onChange={(e) => updateField('state', e.target.value)}
                    className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all text-sm'
                    placeholder='State or province'
                  />
                </div>
                <div>
                  <label className='block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1'>Postal Code *</label>
                  <input
                    type='text'
                    value={address.postalCode}
                    onChange={(e) => updateField('postalCode', e.target.value)}
                    className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all text-sm'
                    placeholder='Zip / Postal code'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Order summary */}
          <div className='lg:w-80 space-y-6'>
            <div id='order-summary' className='bg-white rounded-2xl p-6 shadow-sm sticky top-24'>
              <h2 className='text-lg font-bold text-dark mb-4'>Order Summary</h2>

              <div className='space-y-3 text-sm'>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Items ({itemCount})</span>
                  <span className='font-semibold text-dark'>${subtotal.toFixed(2)}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>DHL Shipping</span>
                  {shippingLoading ? (
                    <span className='flex items-center gap-1 text-gray-400'>
                      <span className='w-3 h-3 border border-gray-300 border-t-accent rounded-full animate-spin' />
                      Calculating...
                    </span>
                  ) : shippingCost !== null ? (
                    <span className='font-semibold text-dark'>${shippingCost.toFixed(2)}</span>
                  ) : (
                    <span className='text-gray-400 text-xs'>Enter address</span>
                  )}
                </div>
                {shippingError && (
                  <div className='p-2 rounded-lg bg-amber-50 border border-amber-200'>
                    <p className='text-xs text-amber-700'>{shippingError}</p>
                    <button onClick={calculateShipping} className='text-xs text-accent font-semibold mt-1 hover:underline'>
                      Retry
                    </button>
                  </div>
                )}
                <div className='pt-3 border-t border-gray-100 flex justify-between'>
                  <span className='font-bold text-dark'>Total</span>
                  <span className='text-xl font-bold text-dark'>
                    {shippingCost !== null ? `$${totalPrice.toFixed(2)}` : '-'}
                  </span>
                </div>
              </div>

              {/* PayPal */}
              <div className='mt-6'>
                {canPay ? (
                  <PayPalProvider>
                    <CheckoutPayPal
                      items={items}
                      shippingCost={shippingCost!}
                      totalPrice={totalPrice}
                      address={address}
                      onComplete={handleOrderComplete}
                    />
                  </PayPalProvider>
                ) : (
                  <div className='py-3 text-center'>
                    <p className='text-xs text-gray-400'>
                      {items.length === 0
                        ? 'Add items to your cart'
                        : !isAddressValid
                          ? 'Complete your shipping address to continue'
                          : 'Waiting for shipping calculation...'}
                    </p>
                  </div>
                )}
              </div>

              <p className='text-[10px] text-gray-400 mt-4 text-center'>
                Shipped via DHL Express from Addis Ababa, Ethiopia
              </p>
            </div>
          </div>
        </div>


      </div>
    </main>
  )
}

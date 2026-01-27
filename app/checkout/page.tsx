'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useCart } from '../context/CartContext'
import ResponsiveImage from '../components/ResponsiveImage'
import { FaLock, FaCreditCard, FaTruck, FaArrowLeft } from 'react-icons/fa'

type ShippingInfo = {
  email: string
  firstName: string
  lastName: string
  address: string
  apartment: string
  city: string
  country: string
  province: string
  postalCode: string
  phone: string
}

type PaymentInfo = {
  cardNumber: string
  cardName: string
  expiry: string
  cvc: string
}

const SHIPPING_COST = 9.99
const FREE_SHIPPING_THRESHOLD = 75

export default function CheckoutPage() {
  const router = useRouter()
  const { state, getCartTotal, clearCart } = useCart()
  const { items } = state
  const subtotal = getCartTotal()
  const shippingCost = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST
  const tax = subtotal * 0.13 // 13% HST for Canada
  const total = subtotal + shippingCost + tax

  const [step, setStep] = useState<'shipping' | 'payment' | 'review'>('shipping')
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    country: 'Canada',
    province: '',
    postalCode: '',
    phone: '',
  })

  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvc: '',
  })

  const handleShippingSubmit = (e: FormEvent) => {
    e.preventDefault()
    setStep('payment')
  }

  const handlePaymentSubmit = (e: FormEvent) => {
    e.preventDefault()
    setStep('review')
  }

  const handlePlaceOrder = async () => {
    setIsProcessing(true)
    setError(null)

    try {
      // Prepare order data
      const orderData = {
        items: items.map(item => ({
          productId: item.productId,
          sizeId: item.sizeId,
          grindId: item.grindId,
          quantity: item.quantity,
          price: item.size.price,
          name: item.product.name,
          size: item.size.weight,
          grind: item.grind.name,
        })),
        shipping: shippingInfo,
        subtotal,
        shippingCost,
        tax,
        total,
      }

      // Call checkout API
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to process order')
      }

      // Clear cart and redirect to success page
      clearCart()
      router.push(`/order-success?orderId=${data.orderId}`)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsProcessing(false)
    }
  }

  // Redirect to cart if empty
  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-dark mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Add some delicious coffee before checking out!</p>
          <Link
            href="/shop"
            className="inline-block bg-accent text-white px-6 py-3 rounded-md font-bold hover:bg-dark transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-dark py-4">
        <div className="container mx-auto px-4">
          <Link href="/" className="flex items-center justify-center">
            <div className="relative w-40 h-12">
              <ResponsiveImage
                src="/images/new-logo.png"
                alt="Ethio Coffee"
                fill
                sizes="160px"
                objectFit="contain"
              />
            </div>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {['shipping', 'payment', 'review'].map((s, idx) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                  step === s
                    ? 'bg-accent text-white'
                    : idx < ['shipping', 'payment', 'review'].indexOf(step)
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}
              >
                {idx + 1}
              </div>
              <span className={`ml-2 capitalize ${step === s ? 'font-bold' : ''}`}>
                {s}
              </span>
              {idx < 2 && <div className="w-12 h-0.5 bg-gray-300 mx-4" />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Shipping Form */}
              {step === 'shipping' && (
                <form onSubmit={handleShippingSubmit}>
                  <div className="flex items-center gap-2 mb-6">
                    <FaTruck className="text-accent text-xl" />
                    <h2 className="text-2xl font-bold text-dark">Shipping Information</h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        value={shippingInfo.email}
                        onChange={e => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">First Name *</label>
                        <input
                          type="text"
                          required
                          value={shippingInfo.firstName}
                          onChange={e => setShippingInfo({ ...shippingInfo, firstName: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Last Name *</label>
                        <input
                          type="text"
                          required
                          value={shippingInfo.lastName}
                          onChange={e => setShippingInfo({ ...shippingInfo, lastName: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Address *</label>
                      <input
                        type="text"
                        required
                        value={shippingInfo.address}
                        onChange={e => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="123 Main St"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Apartment, suite, etc. (optional)</label>
                      <input
                        type="text"
                        value={shippingInfo.apartment}
                        onChange={e => setShippingInfo({ ...shippingInfo, apartment: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">City *</label>
                        <input
                          type="text"
                          required
                          value={shippingInfo.city}
                          onChange={e => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Province *</label>
                        <select
                          required
                          value={shippingInfo.province}
                          onChange={e => setShippingInfo({ ...shippingInfo, province: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                        >
                          <option value="">Select province</option>
                          <option value="ON">Ontario</option>
                          <option value="QC">Quebec</option>
                          <option value="BC">British Columbia</option>
                          <option value="AB">Alberta</option>
                          <option value="MB">Manitoba</option>
                          <option value="SK">Saskatchewan</option>
                          <option value="NS">Nova Scotia</option>
                          <option value="NB">New Brunswick</option>
                          <option value="NL">Newfoundland and Labrador</option>
                          <option value="PE">Prince Edward Island</option>
                          <option value="NT">Northwest Territories</option>
                          <option value="YT">Yukon</option>
                          <option value="NU">Nunavut</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Postal Code *</label>
                        <input
                          type="text"
                          required
                          value={shippingInfo.postalCode}
                          onChange={e => setShippingInfo({ ...shippingInfo, postalCode: e.target.value.toUpperCase() })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="A1A 1A1"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Phone *</label>
                        <input
                          type="tel"
                          required
                          value={shippingInfo.phone}
                          onChange={e => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <Link
                      href="/shop"
                      className="flex items-center gap-2 text-accent hover:text-dark transition-colors"
                    >
                      <FaArrowLeft /> Continue Shopping
                    </Link>
                    <button
                      type="submit"
                      className="bg-accent text-white px-8 py-3 rounded-md font-bold hover:bg-dark transition-colors"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </form>
              )}

              {/* Payment Form */}
              {step === 'payment' && (
                <form onSubmit={handlePaymentSubmit}>
                  <div className="flex items-center gap-2 mb-6">
                    <FaCreditCard className="text-accent text-xl" />
                    <h2 className="text-2xl font-bold text-dark">Payment Information</h2>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
                    <p className="text-sm text-blue-800">
                      <FaLock className="inline mr-2" />
                      Your payment information is secure and encrypted.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Card Number *</label>
                      <input
                        type="text"
                        required
                        value={paymentInfo.cardNumber}
                        onChange={e => {
                          const value = e.target.value.replace(/\D/g, '').slice(0, 16)
                          const formatted = value.replace(/(\d{4})/g, '$1 ').trim()
                          setPaymentInfo({ ...paymentInfo, cardNumber: formatted })
                        }}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Name on Card *</label>
                      <input
                        type="text"
                        required
                        value={paymentInfo.cardName}
                        onChange={e => setPaymentInfo({ ...paymentInfo, cardName: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Expiry Date *</label>
                        <input
                          type="text"
                          required
                          value={paymentInfo.expiry}
                          onChange={e => {
                            let value = e.target.value.replace(/\D/g, '').slice(0, 4)
                            if (value.length >= 2) {
                              value = value.slice(0, 2) + '/' + value.slice(2)
                            }
                            setPaymentInfo({ ...paymentInfo, expiry: value })
                          }}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">CVC *</label>
                        <input
                          type="text"
                          required
                          value={paymentInfo.cvc}
                          onChange={e => {
                            const value = e.target.value.replace(/\D/g, '').slice(0, 4)
                            setPaymentInfo({ ...paymentInfo, cvc: value })
                          }}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep('shipping')}
                      className="flex items-center gap-2 text-accent hover:text-dark transition-colors"
                    >
                      <FaArrowLeft /> Back to Shipping
                    </button>
                    <button
                      type="submit"
                      className="bg-accent text-white px-8 py-3 rounded-md font-bold hover:bg-dark transition-colors"
                    >
                      Review Order
                    </button>
                  </div>
                </form>
              )}

              {/* Review & Confirm */}
              {step === 'review' && (
                <div>
                  <h2 className="text-2xl font-bold text-dark mb-6">Review Your Order</h2>

                  {/* Shipping Summary */}
                  <div className="bg-gray-50 rounded-md p-4 mb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold">Shipping Address</h3>
                      <button
                        onClick={() => setStep('shipping')}
                        className="text-accent text-sm hover:underline"
                      >
                        Edit
                      </button>
                    </div>
                    <p className="text-gray-600">
                      {shippingInfo.firstName} {shippingInfo.lastName}<br />
                      {shippingInfo.address}{shippingInfo.apartment && `, ${shippingInfo.apartment}`}<br />
                      {shippingInfo.city}, {shippingInfo.province} {shippingInfo.postalCode}<br />
                      {shippingInfo.phone}
                    </p>
                  </div>

                  {/* Payment Summary */}
                  <div className="bg-gray-50 rounded-md p-4 mb-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold">Payment Method</h3>
                      <button
                        onClick={() => setStep('payment')}
                        className="text-accent text-sm hover:underline"
                      >
                        Edit
                      </button>
                    </div>
                    <p className="text-gray-600">
                      Card ending in {paymentInfo.cardNumber.slice(-4)}
                    </p>
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mb-6">
                      {error}
                    </div>
                  )}

                  <div className="mt-6 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep('payment')}
                      className="flex items-center gap-2 text-accent hover:text-dark transition-colors"
                    >
                      <FaArrowLeft /> Back to Payment
                    </button>
                    <button
                      onClick={handlePlaceOrder}
                      disabled={isProcessing}
                      className="bg-accent text-white px-8 py-3 rounded-md font-bold hover:bg-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      {isProcessing ? (
                        <>
                          <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span> Processing...
                        </>
                      ) : (
                        <>
                          <FaLock /> Place Order - ${total.toFixed(2)}
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold text-dark mb-4">Order Summary</h2>

              {/* Cart Items */}
              <ul className="divide-y mb-4">
                {items.map(item => (
                  <li key={`${item.productId}-${item.sizeId}`} className="py-3 flex gap-3">
                    <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                      <ResponsiveImage
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        objectFit="cover"
                        sizes="64px"
                      />
                      <span className="absolute -top-1 -right-1 bg-gray-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-dark text-sm truncate">{item.product.name}</p>
                      <p className="text-xs text-gray-500">{item.size.weight} • {item.grind.name}</p>
                    </div>
                    <p className="font-medium text-dark">
                      ${(item.size.price * item.quantity).toFixed(2)}
                    </p>
                  </li>
                ))}
              </ul>

              {/* Totals */}
              <div className="space-y-2 border-t pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>
                    {shippingCost === 0 ? (
                      <span className="text-green-600">FREE</span>
                    ) : (
                      `$${shippingCost.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (HST 13%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t font-bold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Free shipping notice */}
              {shippingCost > 0 && (
                <p className="text-sm text-gray-500 mt-4">
                  Add ${(FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2)} more for free shipping!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

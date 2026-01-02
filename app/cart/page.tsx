"use client"

import React, { useContext, useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CartContext from '../Context/store'

type CheckoutFormState = {
  name: string
  email: string
  address: string
  city: string
  postal: string
  country: string
}

export default function CartPage() {
  const { cart, total, itemCount, removeItem, setItemQuantity, clearCart } = useContext(CartContext)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const [formData, setFormData] = useState<CheckoutFormState>({
    name: '',
    email: '',
    address: '',
    city: '',
    postal: '',
    country: 'Canada',
  })

  const formattedTotal = useMemo(() => total.toFixed(2), [total])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev: CheckoutFormState) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!cart.length) return

    setIsSubmitting(true)
    setSubmitError('')

    try {
      const submissionData = {
        ...formData,
        formType: 'checkout',
        orderDate: new Date().toISOString(),
        itemCount,
        total: formattedTotal,
        items: cart.map((item: CartItem) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          selectedOptions: item.selectedOptions ?? null,
        })),
        _subject: `New Coffee Order (${itemCount} item${itemCount === 1 ? '' : 's'})`,
      }

      const response = await fetch('https://formspree.io/f/xkgrnlve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(submissionData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitSuccess(true)
        clearCart()
        setFormData({
          name: '',
          email: '',
          address: '',
          city: '',
          postal: '',
          country: 'Canada',
        })
      } else {
        setSubmitError(result?.error || 'Failed to place your order. Please try again.')
      }
    } catch (error) {
      console.error('Error placing order:', error)
      setSubmitError('There was an error placing your order. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className='bg-primary min-h-screen'>
      <header className='bg-[url(/images/about-us.webp)] w-full h-[250px] flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold text-primary'>YOUR CART</h1>
      </header>

      <section className='container mx-auto px-4 py-12'>
        {!cart.length ? (
          <div className='max-w-2xl mx-auto text-center'>
            <h2 className='text-4xl font-extrabold mb-4'>Your cart is empty</h2>
            <p className='mb-8'>Browse our coffees and add your favorites.</p>
            <Link
              href='/offerings'
              className='p-10 py-3 bg-dark hover:bg-primary text-primary hover:text-dark border border-dark rounded-md font-bold'
            >
              SHOP COFFEE
            </Link>
          </div>
        ) : (
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 items-start'>
            <div className='lg:col-span-2 space-y-4'>
              {cart.map((item: CartItem) => (
                <div
                  key={`${item.id}-${item.selectedOptions?.size ?? 'default'}-${item.selectedOptions?.grind ?? 'default'}-${item.selectedOptions?.purchaseType ?? 'default'}`}
                  className='bg-primary border border-dark rounded-md p-5 flex gap-4 shadow-sm'
                >
                  <div className='w-24 h-24 flex items-center justify-center'>
                    <Image
                      src={`/images/${item.image_url}`}
                      alt={item.name}
                      width={96}
                      height={96}
                      className='object-contain'
                    />
                  </div>

                  <div className='flex-1'>
                    <div className='flex items-start justify-between gap-4'>
                      <div>
                        <h3 className='text-2xl font-extrabold text-dark'>{item.name}</h3>
                        <p className='text-sm text-dark/70'>${item.price.toFixed(2)} each</p>
                      </div>

                      <button
                        onClick={() => removeItem(item.id, item.selectedOptions)}
                        className='text-sm underline text-dark hover:opacity-80'
                        type='button'
                      >
                        Remove
                      </button>
                    </div>

                    <div className='mt-4 flex flex-wrap items-center gap-4'>
                      <div className='flex items-center border border-dark rounded-md overflow-hidden'>
                        <button
                          type='button'
                          className='px-3 py-2 bg-dark text-primary'
                          onClick={() => setItemQuantity(item.id, item.quantity - 1, item.selectedOptions)}
                        >
                          -
                        </button>
                        <div className='px-4 py-2 min-w-12 text-center text-dark font-bold'>{item.quantity}</div>
                        <button
                          type='button'
                          className='px-3 py-2 bg-dark text-primary'
                          onClick={() => setItemQuantity(item.id, item.quantity + 1, item.selectedOptions)}
                        >
                          +
                        </button>
                      </div>

                      <p className='font-extrabold text-dark'>${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='bg-primary border border-dark rounded-md p-6 shadow-sm'>
              <h2 className='text-3xl font-extrabold mb-4'>Checkout</h2>

              {submitSuccess ? (
                <div className='p-4 bg-green-50 border border-green-200 rounded-lg text-green-700'>
                  <h3 className='text-xl font-bold mb-1'>Order received</h3>
                  <p>Thanks! We’ll email you shortly to confirm details.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-4'>
                  <div>
                    <label className='block text-sm font-medium' htmlFor='name'>
                      Full Name
                    </label>
                    <input
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='w-full p-2 border border-gray-300 rounded mt-1'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium' htmlFor='email'>
                      Email
                    </label>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='w-full p-2 border border-gray-300 rounded mt-1'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium' htmlFor='address'>
                      Address
                    </label>
                    <input
                      id='address'
                      name='address'
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className='w-full p-2 border border-gray-300 rounded mt-1'
                    />
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                      <label className='block text-sm font-medium' htmlFor='city'>
                        City
                      </label>
                      <input
                        id='city'
                        name='city'
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className='w-full p-2 border border-gray-300 rounded mt-1'
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-medium' htmlFor='postal'>
                        Postal Code
                      </label>
                      <input
                        id='postal'
                        name='postal'
                        value={formData.postal}
                        onChange={handleChange}
                        required
                        className='w-full p-2 border border-gray-300 rounded mt-1'
                      />
                    </div>
                  </div>

                  <div>
                    <label className='block text-sm font-medium' htmlFor='country'>
                      Country
                    </label>
                    <input
                      id='country'
                      name='country'
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className='w-full p-2 border border-gray-300 rounded mt-1'
                    />
                  </div>

                  {submitError && (
                    <div className='p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm'>
                      {submitError}
                    </div>
                  )}

                  <div className='flex items-center justify-between pt-2'>
                    <div>
                      <p className='text-sm text-dark/70'>Total</p>
                      <p className='text-2xl font-extrabold'>${formattedTotal}</p>
                    </div>

                    <button
                      type='submit'
                      disabled={isSubmitting}
                      className='p-10 py-3 bg-dark hover:bg-primary text-primary hover:text-dark border border-dark rounded-md font-bold disabled:opacity-70 disabled:cursor-not-allowed'
                    >
                      {isSubmitting ? 'PLACING...' : 'PLACE ORDER'}
                    </button>
                  </div>

                  <div className='pt-3 flex items-center justify-between gap-4'>
                    <button
                      type='button'
                      onClick={clearCart}
                      className='text-sm underline text-dark hover:opacity-80'
                    >
                      Clear cart
                    </button>
                    <p className='text-xs text-dark/70 text-right'>
                      This is a simple checkout that emails your order details.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </section>
    </main>
  )
}

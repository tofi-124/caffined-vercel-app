"use client"

import { useCart } from './CartContext'
import Link from 'next/link'
import { useEffect } from 'react'

const CartDrawer = () => {
  const {
    items,
    removeItem,
    updateQuantity,
    itemCount,
    subtotal,
    isCartOpen,
    setIsCartOpen,
  } = useCart()

  // Lock body scroll when open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isCartOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] transition-transform duration-300 ease-out flex flex-col ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className='flex items-center justify-between p-5 border-b border-gray-100'>
          <div className='flex items-center gap-2'>
            <svg className='w-5 h-5 text-dark' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z' />
            </svg>
            <h2 className='text-lg font-bold text-dark'>
              Cart {itemCount > 0 && <span className='text-accent'>({itemCount})</span>}
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className='w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center transition-colors'
            aria-label='Close cart'
          >
            <svg className='w-4 h-4 text-gray-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className='flex-1 overflow-y-auto p-5'>
          {items.length === 0 ? (
            <div className='flex flex-col items-center justify-center h-full text-center'>
              <div className='w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mb-4'>
                <svg className='w-8 h-8 text-gray-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' />
                </svg>
              </div>
              <p className='text-gray-500 text-sm'>Your cart is empty</p>
              <Link
                href='/offerings'
                onClick={() => setIsCartOpen(false)}
                className='mt-4 text-sm font-semibold text-accent hover:text-dark transition-colors'
              >
                Browse Offerings &rarr;
              </Link>
            </div>
          ) : (
            <ul className='space-y-4'>
              {items.map(item => (
                <li key={`${item.productId}-${item.weight}`} className='flex gap-4 p-3 rounded-2xl bg-stone-50'>
                  {/* Item info */}
                  <div className='flex-1 min-w-0'>
                    <h3 className='font-bold text-dark text-sm truncate'>{item.productName}</h3>
                    <p className='text-xs text-gray-500 mt-0.5'>{item.weight} sample</p>
                    <p className='text-sm font-bold text-accent mt-1'>${item.priceUSD.toFixed(2)}</p>

                    {/* Quantity controls */}
                    <div className='flex items-center gap-2 mt-2'>
                      <button
                        onClick={() => updateQuantity(item.productId, item.weight, item.quantity - 1)}
                        className='w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:border-accent hover:text-accent transition-colors text-sm'
                      >
                        &minus;
                      </button>
                      <span className='text-sm font-semibold text-dark w-5 text-center'>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.weight, item.quantity + 1)}
                        className='w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:border-accent hover:text-accent transition-colors text-sm'
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Remove button */}
                  <button
                    onClick={() => removeItem(item.productId, item.weight)}
                    className='self-start p-1.5 text-gray-400 hover:text-red-500 transition-colors'
                    aria-label={`Remove ${item.productName}`}
                  >
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className='border-t border-gray-100 p-5 pb-8 space-y-3'>
            <div className='flex items-center justify-between'>
              <span className='text-sm text-gray-600'>Subtotal ({itemCount} item{itemCount > 1 ? 's' : ''})</span>
              <span className='text-lg font-bold text-dark'>${subtotal.toFixed(2)}</span>
            </div>
            <p className='text-xs text-gray-400'>Shipping calculated at checkout via DHL</p>
            <Link
              href='/checkout'
              onClick={() => setIsCartOpen(false)}
              className='block w-full py-3.5 bg-accent hover:bg-dark text-white text-center rounded-full font-semibold transition-all shadow-sm hover:shadow-lg text-sm'
            >
              Proceed to Checkout
            </Link>
            <button
              onClick={() => setIsCartOpen(false)}
              className='block w-full py-2.5 text-sm font-medium text-dark border border-gray-200 hover:border-dark rounded-full text-center transition-colors'
            >
              Continue Browsing
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer

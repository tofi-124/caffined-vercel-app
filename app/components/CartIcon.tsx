"use client"

import { useCart } from './CartContext'

const CartIcon = () => {
  const { itemCount, setIsCartOpen } = useCart()

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className='relative p-2 rounded-full hover:bg-dark/10 transition-colors'
      aria-label={`Cart (${itemCount} items)`}
    >
      <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z' />
      </svg>
      {itemCount > 0 && (
        <span className='absolute -top-0.5 -right-0.5 w-5 h-5 bg-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none'>
          {itemCount > 99 ? '99+' : itemCount}
        </span>
      )}
    </button>
  )
}

export default CartIcon

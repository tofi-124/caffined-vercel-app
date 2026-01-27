'use client'

import { useCart } from '../context/CartContext'
import { FaShoppingCart } from 'react-icons/fa'

export default function CartIcon() {
  const { toggleCart, getCartCount } = useCart()
  const count = getCartCount()

  return (
    <button
      onClick={toggleCart}
      className="relative p-2 text-white hover:text-primary transition-colors"
      aria-label={`Shopping cart with ${count} items`}
    >
      <FaShoppingCart className="text-xl" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {count > 99 ? '99+' : count}
        </span>
      )}
    </button>
  )
}

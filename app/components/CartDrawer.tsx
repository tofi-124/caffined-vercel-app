'use client'

import { useCart } from '../context/CartContext'
import { AnimatePresence, motion } from 'framer-motion'
import { FaTimes, FaTrash, FaMinus, FaPlus } from 'react-icons/fa'
import ResponsiveImage from './ResponsiveImage'
import Link from 'next/link'

export default function CartDrawer() {
  const { state, closeCart, removeItem, updateQuantity, getCartTotal, getCartCount } = useCart()
  const { items, isOpen } = state
  const total = getCartTotal()
  const count = getCartCount()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-bold text-dark">
                Your Cart ({count})
              </h2>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close cart"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
                  <Link
                    href="/shop"
                    onClick={closeCart}
                    className="bg-accent text-white px-6 py-3 rounded-md hover:bg-dark transition-colors"
                  >
                    Start Shopping
                  </Link>
                </div>
              ) : (
                <ul className="space-y-4">
                  {items.map(item => (
                    <li
                      key={`${item.productId}-${item.sizeId}-${item.grindId}`}
                      className="flex gap-4 bg-gray-50 p-3 rounded-lg"
                    >
                      {/* Product Image */}
                      <div className="relative w-20 h-20 flex-shrink-0 rounded overflow-hidden">
                        <ResponsiveImage
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          objectFit="cover"
                          sizes="80px"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-dark truncate">
                          {item.product.name}
                        </h3>
                        <p className="text-sm text-gray-500">{item.size.weight} • {item.grind.name}</p>
                        <p className="text-sm font-bold text-dark mt-1">
                          ${item.size.price.toFixed(2)}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                item.sizeId,
                                item.grindId,
                                item.quantity - 1
                              )
                            }
                            className="p-1 hover:bg-gray-200 rounded transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <FaMinus className="text-xs" />
                          </button>
                          <span className="w-8 text-center font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                item.sizeId,
                                item.grindId,
                                item.quantity + 1
                              )
                            }
                            className="p-1 hover:bg-gray-200 rounded transition-colors"
                            aria-label="Increase quantity"
                          >
                            <FaPlus className="text-xs" />
                          </button>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.productId, item.sizeId, item.grindId)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors self-start"
                        aria-label="Remove item"
                      >
                        <FaTrash />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t p-4 space-y-4">
                {/* Subtotal */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-xl font-bold text-dark">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  Shipping & taxes calculated at checkout
                </p>

                {/* Checkout Button */}
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="block w-full bg-accent text-white text-center py-3 rounded-md font-bold hover:bg-dark transition-colors"
                >
                  Proceed to Checkout
                </Link>

                {/* Continue Shopping */}
                <button
                  onClick={closeCart}
                  className="block w-full text-center text-gray-600 hover:text-dark transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

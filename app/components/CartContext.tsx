"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'

export type CartItem = {
  productId: string
  productName: string
  weight: string
  weightGrams: number
  priceUSD: number
  quantity: number
  image_url: string
}

type CartContextType = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (productId: string, weight: string) => void
  updateQuantity: (productId: string, weight: string, quantity: number) => void
  clearCart: () => void
  itemCount: number
  subtotal: number
  totalWeightGrams: number
  isCartOpen: boolean
  setIsCartOpen: (open: boolean) => void
}

const CartContext = createContext<CartContextType | null>(null)

const CART_STORAGE_KEY = 'ethiocoffee_cart'

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY)
      if (stored) {
        setItems(JSON.parse(stored))
      }
    } catch {
      // Ignore parse errors
    }
    setHydrated(true)
  }, [])

  // Persist cart to localStorage on change
  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
    }
  }, [items, hydrated])

  const addItem = useCallback((newItem: Omit<CartItem, 'quantity'>) => {
    setItems(prev => {
      const existing = prev.find(
        i => i.productId === newItem.productId && i.weight === newItem.weight
      )
      if (existing) {
        return prev.map(i =>
          i.productId === newItem.productId && i.weight === newItem.weight
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      }
      return [...prev, { ...newItem, quantity: 1 }]
    })
    setIsCartOpen(true)
  }, [])

  const removeItem = useCallback((productId: string, weight: string) => {
    setItems(prev => prev.filter(i => !(i.productId === productId && i.weight === weight)))
  }, [])

  const updateQuantity = useCallback((productId: string, weight: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId, weight)
      return
    }
    setItems(prev =>
      prev.map(i =>
        i.productId === productId && i.weight === weight
          ? { ...i, quantity }
          : i
      )
    )
  }, [removeItem])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0)
  const subtotal = items.reduce((sum, i) => sum + i.priceUSD * i.quantity, 0)
  const totalWeightGrams = items.reduce((sum, i) => sum + i.weightGrams * i.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal,
        totalWeightGrams,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}

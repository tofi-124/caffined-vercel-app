'use client'

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react'
import { Product, ProductSize, getProductById, grindOptions, GrindOption } from '../data/products'

export type CartItem = {
  productId: string
  sizeId: string
  grindId: string
  quantity: number
  product: Product
  size: ProductSize
  grind: GrindOption
}

type CartState = {
  items: CartItem[]
  isOpen: boolean
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { productId: string; sizeId: string; grindId: string; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: { productId: string; sizeId: string; grindId: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; sizeId: string; grindId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] }

type CartContextType = {
  state: CartState
  addItem: (productId: string, sizeId: string, quantity?: number, grindId?: string) => void
  removeItem: (productId: string, sizeId: string, grindId: string) => void
  updateQuantity: (productId: string, sizeId: string, grindId: string, quantity: number) => void
  clearCart: () => void
  toggleCart: () => void
  openCart: () => void
  closeCart: () => void
  getCartTotal: () => number
  getCartCount: () => number
  getItemQuantity: (productId: string, sizeId: string, grindId: string) => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const CART_STORAGE_KEY = 'ethiocoffee-cart'

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { productId, sizeId, grindId, quantity } = action.payload
      const product = getProductById(productId)
      if (!product) return state

      const size = product.sizes.find(s => s.id === sizeId)
      if (!size) return state

      const grind = grindOptions.find(g => g.id === grindId) || grindOptions[0]

      const existingItemIndex = state.items.findIndex(
        item => item.productId === productId && item.sizeId === sizeId && item.grindId === grindId
      )

      if (existingItemIndex > -1) {
        const updatedItems = [...state.items]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity,
        }
        return { ...state, items: updatedItems, isOpen: true }
      }

      return {
        ...state,
        items: [...state.items, { productId, sizeId, grindId, quantity, product, size, grind }],
        isOpen: true,
      }
    }

    case 'REMOVE_ITEM': {
      const { productId, sizeId, grindId } = action.payload
      return {
        ...state,
        items: state.items.filter(
          item => !(item.productId === productId && item.sizeId === sizeId && item.grindId === grindId)
        ),
      }
    }

    case 'UPDATE_QUANTITY': {
      const { productId, sizeId, grindId, quantity } = action.payload
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            item => !(item.productId === productId && item.sizeId === sizeId && item.grindId === grindId)
          ),
        }
      }

      return {
        ...state,
        items: state.items.map(item =>
          item.productId === productId && item.sizeId === sizeId && item.grindId === grindId
            ? { ...item, quantity }
            : item
        ),
      }
    }

    case 'CLEAR_CART':
      return { ...state, items: [] }

    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen }

    case 'OPEN_CART':
      return { ...state, isOpen: true }

    case 'CLOSE_CART':
      return { ...state, isOpen: false }

    case 'LOAD_CART':
      return { ...state, items: action.payload }

    default:
      return state
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false })

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY)
      if (savedCart) {
        const parsedItems = JSON.parse(savedCart)
        // Rehydrate cart items with current product data
        const rehydratedItems: CartItem[] = parsedItems
          .map((item: { productId: string; sizeId: string; grindId?: string; quantity: number }) => {
            const product = getProductById(item.productId)
            if (!product) return null
            const size = product.sizes.find(s => s.id === item.sizeId)
            if (!size) return null
            const grind = grindOptions.find(g => g.id === item.grindId) || grindOptions[0]
            return { ...item, grindId: grind.id, product, size, grind }
          })
          .filter(Boolean)
        dispatch({ type: 'LOAD_CART', payload: rehydratedItems })
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error)
    }
  }, [])

  // Save cart to localStorage whenever items change
  useEffect(() => {
    try {
      const itemsToSave = state.items.map(({ productId, sizeId, grindId, quantity }) => ({
        productId,
        sizeId,
        grindId,
        quantity,
      }))
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(itemsToSave))
    } catch (error) {
      console.error('Error saving cart to localStorage:', error)
    }
  }, [state.items])

  const addItem = (productId: string, sizeId: string, quantity: number = 1, grindId: string = 'whole-bean') => {
    dispatch({ type: 'ADD_ITEM', payload: { productId, sizeId, grindId, quantity } })
  }

  const removeItem = (productId: string, sizeId: string, grindId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId, sizeId, grindId } })
  }

  const updateQuantity = (productId: string, sizeId: string, grindId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, sizeId, grindId, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' })
  }

  const openCart = () => {
    dispatch({ type: 'OPEN_CART' })
  }

  const closeCart = () => {
    dispatch({ type: 'CLOSE_CART' })
  }

  const getCartTotal = () => {
    return state.items.reduce((total, item) => total + item.size.price * item.quantity, 0)
  }

  const getCartCount = () => {
    return state.items.reduce((count, item) => count + item.quantity, 0)
  }

  const getItemQuantity = (productId: string, sizeId: string, grindId: string) => {
    const item = state.items.find(
      item => item.productId === productId && item.sizeId === sizeId && item.grindId === grindId
    )
    return item?.quantity || 0
  }

  return (
    <CartContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        toggleCart,
        openCart,
        closeCart,
        getCartTotal,
        getCartCount,
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

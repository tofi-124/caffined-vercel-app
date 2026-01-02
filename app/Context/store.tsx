"use client"

import { createContext, Dispatch, SetStateAction, useEffect, useMemo, useState } from "react"

type ContextProps = {
    cart: Cart,
    setCart: Dispatch<SetStateAction<Cart>>
    total: number,
    setTotal: Dispatch<SetStateAction<number>>
    itemCount: number,
    addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void,
    removeItem: (id: string, selectedOptions?: CoffeePurchaseOptions) => void,
    setItemQuantity: (id: string, quantity: number, selectedOptions?: CoffeePurchaseOptions) => void,
    clearCart: () => void,
}

const CartContext = createContext<ContextProps>({
    cart: [],
    total: 0,
    setCart: () => null,
    setTotal: () => null,
    itemCount: 0,
    addItem: () => null,
    removeItem: () => null,
    setItemQuantity: () => null,
    clearCart: () => null,
})

export const CartProvider = ({children}: any) => {
    
    const [cart, setCart] = useState<Cart>([])
    const [total, setTotal] = useState<number>(0)

    useEffect(() => {
        const stored = localStorage.getItem('cart')
        if (stored) {
            const parsedCart = JSON.parse(stored) as Cart
            setCart(parsedCart)
        } else {
            localStorage.setItem('cart', JSON.stringify([]))
            setCart([])
        }
    }, [])

    useEffect(() => {
        const nextTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
        setTotal(nextTotal)
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const itemCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart])

    const sameOptions = (a?: CoffeePurchaseOptions, b?: CoffeePurchaseOptions) => {
        if (!a && !b) return true
        if (!a || !b) return false
        return a.size === b.size && a.grind === b.grind && a.purchaseType === b.purchaseType
    }

    const addItem: ContextProps['addItem'] = (item) => {
        const quantity = item.quantity ?? 1
        setCart((prev) => {
            const existingIndex = prev.findIndex(
                (p) => p.id === item.id && sameOptions(p.selectedOptions, item.selectedOptions)
            )

            if (existingIndex === -1) {
                return [...prev, { ...item, quantity } as CartItem]
            }

            const copy = [...prev]
            copy[existingIndex] = {
                ...copy[existingIndex],
                quantity: copy[existingIndex].quantity + quantity,
            }
            return copy
        })
    }

    const removeItem: ContextProps['removeItem'] = (id, selectedOptions) => {
        setCart((prev) => prev.filter((p) => !(p.id === id && sameOptions(p.selectedOptions, selectedOptions))))
    }

    const setItemQuantity: ContextProps['setItemQuantity'] = (id, quantity, selectedOptions) => {
        const clamped = Math.max(1, Math.floor(quantity || 1))
        setCart((prev) =>
            prev.map((p) =>
                p.id === id && sameOptions(p.selectedOptions, selectedOptions)
                    ? { ...p, quantity: clamped }
                    : p
            )
        )
    }

    const clearCart = () => setCart([])

    return (
        <CartContext.Provider value={{cart, setCart, total, setTotal, itemCount, addItem, removeItem, setItemQuantity, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
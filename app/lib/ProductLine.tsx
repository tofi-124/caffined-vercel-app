"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import CartContext from '../Context/store'

// Updated product data with Ethiopian coffee varieties
const products = [
  {
    name: 'YIRGACHEFFE',
    price: 12.99,
    image_url: 'black.png',
    desc: 'Bright acidity, floral aroma with citrus notes'
  },
  {
    name: 'SIDAMO',
    price: 14.99,
    image_url: 'frappe.png',
    desc: 'Wine-like acidity with berry and citrus notes'
  },
  {
    name: 'HARAR',
    price: 13.99,
    image_url: 'nitro.png',
    desc: 'Rich body with fruity and winey characteristics'
  },
  {
    name: 'LIMU',
    price: 12.49,
    image_url: 'white.png',
    desc: 'Mild, balanced with winey and spicy notes'
  },
  {
    name: 'GUJI',
    price: 15.99,
    image_url: 'brew.png',
    desc: 'Complex flavor with floral jasmine notes'
  },
  {
    name: 'LEKEMPTI',
    price: 13.49,
    image_url: 'mocha.png',
    desc: 'Medium body with earthy and fruity nuances'
  }
]

const Product = ({name, price, image_url, desc}: any) => {
  const {cart, setCart, total, setTotal} = useContext(CartContext)

  const addToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const product = {name, price, image_url}
    cart.find(item => item.name === product.name) ? setCart((prev) => {
      const newCart = [...prev]
      const index = newCart.findIndex(item => item.name === product.name)
      newCart[index].quantity++
      setTotal((prev) => prev + newCart[index].price)
      localStorage.setItem('cart', JSON.stringify(newCart))
      return newCart
    }): setCart((prev) => {
      const newCart = [...prev, {...product, quantity: 1}]
      localStorage.setItem('cart', JSON.stringify(newCart));
      setTotal((prev) => prev + product.price)
      return newCart;
    })

  }
  return (
    <div className='flex flex-col text-center items-center border-2 hover:border-dark py-10 px-6 mx-2 w-fit'>
      
      <h2 className='text-3xl font-extrabold'>
        {name}
      </h2>
      
      <p className='mb-2'>
        ${price}/lb (Wholesale)
      </p>

      <Image src={`/images/${image_url}`} alt={image_url} width={222} height={400}/>
      
      <p className='my-4 text-sm max-w-xs'>{desc}</p>
      
      <button onClick={addToCart} className='
        p-10 py-3 mt-2 w-fit
       bg-primary hover:bg-dark text-dark hover:text-primary
        border border-black 
        rounded-md
      '>
        REQUEST SAMPLE
      </button>
    </div>
  )
}

const ProductLine = () => {
  return (
    <div className='flex flex-wrap items-center gap-10 justify-center'>
      {products.map((product, index) => (<Product key={index} {...product} />))}
    </div>
  )
}

export default ProductLine

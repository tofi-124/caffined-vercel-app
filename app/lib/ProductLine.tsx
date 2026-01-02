"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import Link from 'next/link'
import ResponsiveImage from '../components/ResponsiveImage'
import CartContext from '../Context/store'

// Updated product data with Ethiopian coffee varieties and additional technical specifications
const products: CatalogProduct[] = [
  {
    id: 'yirgacheffe',
    name: 'YIRGACHEFFE',
    price: 16.99,
    image_url: 'black.png',
    desc: 'Bright acidity, floral aroma with citrus notes',
    specifications: {
      processingMethod: 'Washed',
      roastLevel: 'Light',
      tastingNotes: 'Floral, citrus, tea-like'
    }
  },
  {
    id: 'sidamo',
    name: 'SIDAMO',
    price: 17.99,
    image_url: 'frappe.png',
    desc: 'Wine-like acidity with berry and citrus notes',
    specifications: {
      processingMethod: 'Natural',
      roastLevel: 'Light',
      tastingNotes: 'Berry, citrus, honey'
    }
  },
  {
    id: 'harar',
    name: 'HARAR',
    price: 16.49,
    image_url: 'nitro.png',
    desc: 'Rich body with fruity and winey characteristics',
    specifications: {
      processingMethod: 'Natural',
      roastLevel: 'Medium',
      tastingNotes: 'Cocoa, dried fruit, spice'
    }
  },
  {
    id: 'limu',
    name: 'LIMU',
    price: 15.99,
    image_url: 'white.png',
    desc: 'Mild, balanced with winey and spicy notes',
    specifications: {
      processingMethod: 'Washed',
      roastLevel: 'Medium',
      tastingNotes: 'Stone fruit, caramel, gentle spice'
    }
  },
  {
    id: 'guji',
    name: 'GUJI',
    price: 18.49,
    image_url: 'brew.png',
    desc: 'Complex flavor with floral jasmine notes',
    specifications: {
      processingMethod: 'Natural',
      roastLevel: 'Light',
      tastingNotes: 'Jasmine, peach, bergamot'
    }
  },
  {
    id: 'lekempti',
    name: 'LEKEMPTI',
    price: 15.49,
    image_url: 'mocha.png',
    desc: 'Medium body with earthy and fruity nuances',
    specifications: {
      processingMethod: 'Washed',
      roastLevel: 'Medium',
      tastingNotes: 'Nutty, cocoa, subtle fruit'
    }
  }
]

export { products };

const Product = ({id, name, price, image_url, desc}: any) => {
  const { addItem } = useContext(CartContext)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem({
      id,
      name,
      price,
      image_url,
      selectedOptions: {
        size: '250g',
        grind: 'whole-bean',
        purchaseType: 'one-time',
      },
    })
  }

  return (
    <div className='flex flex-col text-center items-center border-2 hover:border-dark py-10 px-6 mx-2 w-fit'>
      <Link href={`/product/${id}`} className='hover:opacity-90 flex flex-col items-center'>
        <h2 className='text-3xl font-extrabold'>
          {name}
        </h2>
        
        <div>
          <p className='mb-1'>
            ${price}
          </p>
          <p className='text-xs text-gray-600 italic mb-2'>250g bag</p>
        </div>

        <div className="flex justify-center items-center overflow-hidden">
          <ResponsiveImage 
            src={`/images/${image_url}`} 
            alt={name} 
            width={222} 
            height={400}
            className="mx-auto"
          />
        </div>
        
        <p className='my-4 text-sm max-w-xs'>{desc}</p>
      </Link>
      
      <button 
        onClick={handleAddToCart}
        className='
          p-10 py-3 mt-2 w-fit
          bg-primary hover:bg-dark text-dark hover:text-primary
          border border-black 
          rounded-md
          cursor-pointer
        '
      >
        ADD TO CART
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

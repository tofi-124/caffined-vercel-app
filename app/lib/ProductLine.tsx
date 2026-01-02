"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import Link from 'next/link'
import ResponsiveImage from '../components/ResponsiveImage'
import CartContext from '../Context/store'

// Updated product data with Ethiopian coffee varieties and additional technical specifications
const products = [
  {
    id: 'yirgacheffe',
    name: 'YIRGACHEFFE',
    price: 16.99,
    image_url: 'black.png',
    desc: 'Bright acidity, floral aroma with citrus notes',
    specifications: {
      screenSize: '15+',
      processingMethod: 'Washed',
      cropYear: '2024/25',
      moisture: '10.5%',
      defectCount: '<5 per 300g',
      cupScore: '86.5'
    }
  },
  {
    id: 'sidamo',
    name: 'SIDAMO',
    price: 17.99,
    image_url: 'frappe.png',
    desc: 'Wine-like acidity with berry and citrus notes',
    specifications: {
      screenSize: '16+',
      processingMethod: 'Natural',
      cropYear: '2024/25',
      moisture: '10.2%',
      defectCount: '<3 per 300g',
      cupScore: '87.5'
    }
  },
  {
    id: 'harar',
    name: 'HARAR',
    price: 16.49,
    image_url: 'nitro.png',
    desc: 'Rich body with fruity and winey characteristics',
    specifications: {
      screenSize: '15+',
      processingMethod: 'Natural',
      cropYear: '2024/25',
      moisture: '10.7%',
      defectCount: '<6 per 300g',
      cupScore: '85.0'
    }
  },
  {
    id: 'limu',
    name: 'LIMU',
    price: 15.99,
    image_url: 'white.png',
    desc: 'Mild, balanced with winey and spicy notes',
    specifications: {
      screenSize: '15+',
      processingMethod: 'Washed',
      cropYear: '2024/25',
      moisture: '10.4%',
      defectCount: '<4 per 300g',
      cupScore: '84.5'
    }
  },
  {
    id: 'guji',
    name: 'GUJI',
    price: 18.49,
    image_url: 'brew.png',
    desc: 'Complex flavor with floral jasmine notes',
    specifications: {
      screenSize: '16+',
      processingMethod: 'Natural',
      cropYear: '2024/25',
      moisture: '10.1%',
      defectCount: '<2 per 300g',
      cupScore: '88.0'
    }
  },
  {
    id: 'lekempti',
    name: 'LEKEMPTI',
    price: 15.49,
    image_url: 'mocha.png',
    desc: 'Medium body with earthy and fruity nuances',
    specifications: {
      screenSize: '15+',
      processingMethod: 'Washed',
      cropYear: '2024/25',
      moisture: '10.3%',
      defectCount: '<5 per 300g',
      cupScore: '85.5'
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
        size: '12oz',
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
          <p className='text-xs text-gray-600 italic mb-2'>12oz bag</p>
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

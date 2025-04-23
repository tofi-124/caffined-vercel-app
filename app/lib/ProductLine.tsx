"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

// Updated product data with Ethiopian coffee varieties
const products = [
  {
    id: 'yirgacheffe',
    name: 'YIRGACHEFFE',
    price: 12.99,
    image_url: 'black.png',
    desc: 'Bright acidity, floral aroma with citrus notes'
  },
  {
    id: 'sidamo',
    name: 'SIDAMO',
    price: 14.99,
    image_url: 'frappe.png',
    desc: 'Wine-like acidity with berry and citrus notes'
  },
  {
    id: 'harar',
    name: 'HARAR',
    price: 13.99,
    image_url: 'nitro.png',
    desc: 'Rich body with fruity and winey characteristics'
  },
  {
    id: 'limu',
    name: 'LIMU',
    price: 12.49,
    image_url: 'white.png',
    desc: 'Mild, balanced with winey and spicy notes'
  },
  {
    id: 'guji',
    name: 'GUJI',
    price: 15.99,
    image_url: 'brew.png',
    desc: 'Complex flavor with floral jasmine notes'
  },
  {
    id: 'lekempti',
    name: 'LEKEMPTI',
    price: 13.49,
    image_url: 'mocha.png',
    desc: 'Medium body with earthy and fruity nuances'
  }
]

export { products };

const Product = ({id, name, price, image_url, desc}: any) => {
  return (
    <div className='flex flex-col text-center items-center border-2 hover:border-dark py-10 px-6 mx-2 w-fit'>
      <Link href={`/product/${id}`} className='hover:opacity-90'>
        <h2 className='text-3xl font-extrabold'>
          {name}
        </h2>
        
        <p className='mb-2'>
          ${price}/lb (Wholesale)
        </p>

        <Image src={`/images/${image_url}`} alt={name} width={222} height={400}/>
        
        <p className='my-4 text-sm max-w-xs'>{desc}</p>
      </Link>
      
      <Link href="/wholesale-inquiry" className='
        p-10 py-3 mt-2 w-fit
       bg-primary hover:bg-dark text-dark hover:text-primary
        border border-black 
        rounded-md
      '>
        REQUEST SAMPLE
      </Link>
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

"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import SampleCheckoutPopup from '../components/SampleCheckoutPopup'
import ResponsiveImage from '../components/ResponsiveImage'

// Updated product data with Ethiopian coffee varieties and additional technical specifications
const products = [
  {
    id: 'yirgacheffe',
    name: 'YIRGACHEFFE',
    price: 12.99,
    priceType: 'FOB Ethiopia',
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
    price: 14.99,
    priceType: 'Landed (CAD)',
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
    price: 13.99,
    priceType: 'FOB Ethiopia',
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
    price: 12.49,
    priceType: 'Landed (CAD)',
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
    price: 15.99,
    priceType: 'FOB Ethiopia',
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
    price: 13.49,
    priceType: 'Landed (CAD)',
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

const Product = ({id, name, price, priceType, image_url, desc}: any) => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  
  const handleSamplePurchase = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsCheckoutOpen(true);
  };

  return (
    <div className='flex flex-col text-center items-center border-2 hover:border-dark py-10 px-6 mx-2 w-fit'>
      <Link href={`/product/${id}`} className='hover:opacity-90 flex flex-col items-center'>
        <h2 className='text-3xl font-extrabold'>
          {name}
        </h2>
        
        <div>
          <p className='mb-1'>
            ${price}/lb
          </p>
          <p className='text-xs text-gray-600 italic mb-2'>
            Price: {priceType}
          </p>
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
        onClick={handleSamplePurchase}
        className='
          p-10 py-3 mt-2 w-fit
          bg-primary hover:bg-dark text-dark hover:text-primary
          border border-black 
          rounded-md
          cursor-pointer
        '
      >
        PURCHASE A SAMPLE
      </button>
      
      <SampleCheckoutPopup 
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        productName={name}
        productImage={image_url}
      />
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

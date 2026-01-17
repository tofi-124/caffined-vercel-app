"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import SampleCheckoutPopup from '../components/SampleCheckoutPopup'
import ResponsiveImage from '../components/ResponsiveImage'
import { offerings } from '../data/offerings'

export { offerings as products };

const Product = ({id, name, price, priceType, image_url, desc}: any) => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  
  const handleSamplePurchase = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsCheckoutOpen(true);
  };

  return (
    <div className='flex flex-col border-2 hover:border-dark py-10 px-6 w-full max-w-sm h-full'>
      <Link href={`/product/${id}`} className='hover:opacity-90 flex flex-col flex-1 w-full text-left'>
        <h2 className='text-2xl md:text-3xl font-extrabold leading-tight break-words'>
          {name}
        </h2>
        
        {/* <div>
          <p className='mb-1'>
            ${price}/lb
          </p>
          <p className='text-xs text-gray-600 italic mb-2'>
            Price: {priceType}
          </p>
        </div> */}

        <div className='flex justify-center items-center overflow-hidden mt-4'>
          <ResponsiveImage 
            src={`/images/${image_url}`} 
            alt={name} 
            width={222} 
            height={400}
            className="mx-auto"
          />
        </div>
        
        <p className='my-4 text-sm text-gray-700'>{desc}</p>
      </Link>
      
      <button 
        onClick={handleSamplePurchase}
        className='
          p-10 py-3 mt-auto w-fit
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

const ProductLine = ({ limit }: { limit?: number }) => {
  const visibleOfferings = typeof limit === 'number' ? offerings.slice(0, limit) : offerings
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center items-stretch w-full'>
      {visibleOfferings.map((product, index) => (<Product key={index} {...product} />))}
    </div>
  )
}

export default ProductLine

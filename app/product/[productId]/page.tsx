"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { products } from '../../lib/ProductLine'

type Props = {
  params: {
    productId: string
  }
}

const ProductDetail = ({ params }: Props) => {
  const { productId } = params
  const product = products.find(p => p.id === productId)
  
  if (!product) {
    return (
      <main className='bg-primary min-h-screen'>
        <div className='container mx-auto py-16 px-4 text-center'>
          <h1 className='text-5xl font-extrabold text-dark mb-6'>Product Not Found</h1>
          <p className='mb-8'>Sorry, we couldn't find the product you're looking for.</p>
          <Link 
            href="/shop"
            className='p-10 py-3 bg-dark hover:bg-primary text-primary hover:text-dark border border-dark rounded-md'
          >
            RETURN TO PRODUCTS
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className='bg-primary'>
      <header className='bg-[url(/images/about-us.webp)] w-full h-[250px] flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold text-primary'>{product.name}</h1>
      </header>
      
      <section className='container mx-auto py-16 px-4'>
        <div className='flex max-lg:flex-col items-center justify-center gap-12'>
          <div className='lg:w-1/2 flex justify-center'>
            <Image 
              src={`/images/${product.image_url}`}
              alt={product.name}
              width={400} 
              height={500}
              className='object-contain'
            />
          </div>
          
          <div className='lg:w-1/2'>
            <h1 className='text-5xl font-extrabold text-dark mb-4'>{product.name}</h1>
            <p className='text-2xl font-bold mb-6'>${product.price}/lb (Wholesale)</p>
            
            <div className='mb-8'>
              <h2 className='text-2xl font-bold mb-3'>Description</h2>
              <p className='text-lg mb-4'>{product.desc}</p>
              <p className='mb-8'>
                This premium Ethiopian coffee is perfect for cafés and roasteries looking to offer 
                exceptional quality to their customers. Available in various quantities to meet your business needs.
              </p>
              
              <div className='mb-8'>
                <h3 className='text-xl font-semibold mb-2'>Origin</h3>
                <p>Ethiopia</p>
              </div>
              
              <div className='mb-8'>
                <h3 className='text-xl font-semibold mb-2'>Processing Method</h3>
                <p>Natural/Washed (varies by season)</p>
              </div>
              
              <div className='mb-8'>
                <h3 className='text-xl font-semibold mb-2'>Available Quantities</h3>
                <p>5kg, 15kg, 30kg, 60kg</p>
              </div>
            </div>
            
            <div className='flex flex-wrap gap-4'>
              <Link 
                href="/wholesale-inquiry"
                className='p-10 py-3 bg-dark hover:bg-primary text-primary hover:text-dark border border-dark rounded-md font-bold'
              >
                REQUEST WHOLESALE PRICING
              </Link>
              
              <Link 
                href="/wholesale-inquiry"
                className='p-10 py-3 bg-primary hover:bg-dark text-dark hover:text-primary border border-dark rounded-md font-bold'
              >
                REQUEST SAMPLE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductDetail
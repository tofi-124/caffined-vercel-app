"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { products } from '../../lib/ProductLine'
import SampleCheckoutPopup from '../../components/SampleCheckoutPopup'
import ResponsiveImage from '../../components/ResponsiveImage'
import Image from 'next/image'

// Function to tell Next.js which product IDs to generate pages for
export async function generateStaticParams() {
  return products.map((product) => ({
    productId: product.id,
  }))
}

type Props = {
  params: {
    productId: string
  }
}

type ProductDetails = {
  origin: string;
  producer: string;
  brewMethod: string;
}

const OfferingDetail = ({ params }: Props) => {
  const { productId } = params
  const product = products.find(p => p.id === productId)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  
  // Default values for product details
  const [activeDetail, setActiveDetail] = useState<string>('origin');
  
  // Product details
  const productDetails: ProductDetails = {
    origin: 'Our coffee beans are sourced from the lush highlands of Ethiopia, specifically from the regions of Sidamo and Yirgacheffe. These areas are known for their ideal coffee-growing conditions including high altitude (1,500-2,200 meters), rich soil, and perfect climate, resulting in beans with distinctive floral and fruit notes.',
    producer: 'We partner with local cooperatives and small family farms that practice sustainable farming. These farmers have generations of experience cultivating exceptional coffee beans using traditional methods combined with modern sustainable practices. Fair trade relationships ensure these farmers receive equitable compensation for their premium products.',
    brewMethod: 'For the best flavor profile, we recommend brewing this coffee as a pour-over or using a French press. For pour-over, use a medium-fine grind with water at 200°F and a 1:16 coffee-to-water ratio. Allow 3-4 minutes of brew time. For espresso, use a fine grind and extract for 25-30 seconds for perfect results.'
  };
  
  if (!product) {
    return (
      <main className='bg-primary min-h-screen'>
        <div className='container mx-auto py-16 px-4 text-center'>
          <h1 className='text-5xl font-extrabold text-dark mb-6'>Offering Not Found</h1>
          <p className='mb-8'>Sorry, we couldn't find the offering you're looking for.</p>
          <Link 
            href="/offerings"
            className='p-10 py-3 bg-dark hover:bg-primary text-primary hover:text-dark border border-dark rounded-md'
          >
            RETURN TO OFFERINGS
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
            {/* Using standard Image component as fallback to debug */}
            <Image
              src={`/images/${product.image_url}`}
              alt={product.name}
              width={400}
              height={500}
              className='object-contain'
              priority
            />
          </div>
          
          <div className='lg:w-1/2'>
            <h1 className='text-5xl font-extrabold text-dark mb-4'>{product.name}</h1>
            <p className='text-2xl font-bold mb-6'>${product.price}/lb (Business Partners)</p>
            
            <div className='mb-8'>
              <h2 className='text-2xl font-bold mb-3'>Description</h2>
              <p className='text-lg mb-4'>{product.desc}</p>
              <p className='mb-8'>
                This premium Ethiopian coffee is perfect for cafés and roasteries looking to offer 
                exceptional quality to their customers. Available in various quantities to meet your business needs.
              </p>
              
              {/* Product Details Section - Similar to Ethica Roasters */}
              <div className='mb-8'>
                <div className='flex border-b border-gray-300 mb-4'>
                  <button
                    onClick={() => setActiveDetail('origin')}
                    className={`py-2 px-4 border-b-2 transition-colors ${
                      activeDetail === 'origin' ? 'border-dark font-semibold' : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    Origin
                  </button>
                  <button
                    onClick={() => setActiveDetail('producer')}
                    className={`py-2 px-4 border-b-2 transition-colors ${
                      activeDetail === 'producer' ? 'border-dark font-semibold' : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    Producer
                  </button>
                  <button
                    onClick={() => setActiveDetail('brewMethod')}
                    className={`py-2 px-4 border-b-2 transition-colors ${
                      activeDetail === 'brewMethod' ? 'border-dark font-semibold' : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    Brewing Method
                  </button>
                </div>
                
                <div className='py-2'>
                  {activeDetail === 'origin' && (
                    <p>{productDetails.origin}</p>
                  )}
                  {activeDetail === 'producer' && (
                    <p>{productDetails.producer}</p>
                  )}
                  {activeDetail === 'brewMethod' && (
                    <p>{productDetails.brewMethod}</p>
                  )}
                </div>
              </div>
              
              <div className='mb-8'>
                <h3 className='text-xl font-semibold mb-2'>Available Quantities</h3>
                <p>5kg, 15kg, 30kg, 60kg</p>
              </div>
            </div>
            
            <div className='flex flex-wrap gap-4'>
              <Link 
                href="/contact-us"
                className='p-10 py-3 bg-dark hover:bg-primary text-primary hover:text-dark border border-dark rounded-md font-bold'
              >
                CONTACT US FOR PRICING
              </Link>
              
              <button 
                onClick={() => setIsCheckoutOpen(true)}
                className='p-10 py-3 bg-primary hover:bg-dark text-dark hover:text-primary border border-dark rounded-md font-bold cursor-pointer'
              >
                PURCHASE A SAMPLE
              </button>
              
              <SampleCheckoutPopup 
                isOpen={isCheckoutOpen}
                onClose={() => setIsCheckoutOpen(false)}
                productName={product.name}
                productImage={product.image_url}
                activeDetail={activeDetail}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default OfferingDetail
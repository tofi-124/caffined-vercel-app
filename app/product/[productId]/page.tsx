"use client"
import React, { useState, useEffect } from 'react'
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
  coffeeProfile: string;
  originFarmInfo: string;
  sampleBrewGuide: string;
}

const OfferingDetail = ({ params }: Props) => {
  const { productId } = params
  const product = products.find(p => p.id === productId)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Default values for product details
  const [activeDetail, setActiveDetail] = useState<string>('coffeeProfile');
  
  // Product details
  const productDetails: ProductDetails = {
    coffeeProfile: `${product?.name} offers vibrant notes of ripe berries, dark chocolate, and a hint of citrus zest. The cup is well-balanced with medium acidity, a velvety body, and a pleasant sweetness that lingers in the finish. It delivers a clean, bright flavor profile characteristic of premium Ethiopian coffees from the high-altitude regions. Each sip reveals complex layers that evolve as the coffee cools.`,
    originFarmInfo: `Sourced from small-holder farms in the highlands of Ethiopia, at elevations between 1,800-2,200 meters. These farms practice traditional organic methods passed down through generations. The farmers hand-pick only the ripest cherries, ensuring exceptional quality. The community-based washing stations employ sustainable processing methods that conserve water while enhancing the beans' natural qualities. We maintain direct relationships with these farming communities to ensure fair compensation and sustainable practices.`,
    sampleBrewGuide: `For the best results with your 200g sample:\n\nPour-Over: 18g coffee to 300g water. Medium-fine grind. 96°C water temperature. 2:30-3:00 minute brew time.\n\nFrench Press: 20g coffee to 300g water. Coarse grind. 4-minute steep.\n\nEspresso: 18g in, 36g out. 25-30 second extraction.\n\nStore beans in an airtight container away from light and heat. Best enjoyed within 3 weeks of opening.`
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
        <div className='flex max-lg:flex-col items-start justify-center gap-12'>
          <div className='lg:w-1/2 flex justify-center items-start pt-4'>
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
            <p className='text-2xl font-bold mb-6'>${product.price}/lb</p>
            
            <div className='mb-8'>
              {/* Product Details Section with updated options */}
              <div className='mb-8'>
                <div className='flex border-b border-gray-300 mb-4'>
                  <button
                    onClick={() => setActiveDetail('coffeeProfile')}
                    className={`py-2 px-4 border-b-2 transition-colors ${
                      activeDetail === 'coffeeProfile' ? 'border-dark font-semibold' : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    Coffee Profile
                  </button>
                  <button
                    onClick={() => setActiveDetail('originFarmInfo')}
                    className={`py-2 px-4 border-b-2 transition-colors ${
                      activeDetail === 'originFarmInfo' ? 'border-dark font-semibold' : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    Origin & Farm Info
                  </button>
                  <button
                    onClick={() => setActiveDetail('sampleBrewGuide')}
                    className={`py-2 px-4 border-b-2 transition-colors ${
                      activeDetail === 'sampleBrewGuide' ? 'border-dark font-semibold' : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    Sample Brew Guide
                  </button>
                </div>
                
                <div className='py-2 whitespace-pre-line'>
                  {activeDetail === 'coffeeProfile' && (
                    <p>{productDetails.coffeeProfile}</p>
                  )}
                  {activeDetail === 'originFarmInfo' && (
                    <p>{productDetails.originFarmInfo}</p>
                  )}
                  {activeDetail === 'sampleBrewGuide' && (
                    <p>{productDetails.sampleBrewGuide}</p>
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
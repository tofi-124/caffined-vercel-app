"use client"
import React, { useState, useEffect, useRef } from 'react'
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
  coffeeProfileOrigin: string;
  technicalSpecs: string;
}

const OfferingDetail = ({ params }: Props) => {
  const { productId } = params
  const product = products.find(p => p.id === productId)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const productImageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // First scroll to top to reset position
    window.scrollTo(0, 0);
    
    // Then after a short delay, center the product in the viewport
    const timer = setTimeout(() => {
      if (productImageRef.current) {
        const productSectionTop = productImageRef.current.offsetTop;
        const productSectionHeight = productImageRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Calculate position that will center the product in the viewport
        const scrollToPosition = productSectionTop - ((windowHeight - productSectionHeight) / 2);
        
        window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth'
        });
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [productId]);
  
  // Default values for product details
  const [activeDetail, setActiveDetail] = useState<string>('coffeeProfileOrigin');
  
  // Product details with combined coffee profile and origin info
  const productDetails: ProductDetails = {
    coffeeProfileOrigin: `${product?.name} offers vibrant notes of ripe berries, dark chocolate, and a hint of citrus zest. The cup is well-balanced with medium acidity, a velvety body, and a pleasant sweetness that lingers in the finish. It delivers a clean, bright flavor profile characteristic of premium Ethiopian coffees from the high-altitude regions.

Sourced from small-holder farms in the highlands of Ethiopia, at elevations between 1,800-2,200 meters. These farms practice traditional organic methods passed down through generations. The farmers hand-pick only the ripest cherries, ensuring exceptional quality. The community-based washing stations employ sustainable processing methods that conserve water while enhancing the beans' natural qualities. We maintain direct relationships with these farming communities to ensure fair compensation and sustainable practices.`,
    technicalSpecs: ''  // This will be dynamically rendered from product specs
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
          <div ref={productImageRef} className='lg:w-1/2 flex justify-center items-start pt-4'>
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
            <div className='flex flex-col mb-6'>
              <p className='text-2xl font-bold'>${product.price}/lb</p>
              <p className='text-sm text-gray-600 italic'>Price: {product.priceType}</p>
            </div>
            
            <div className='mb-8'>
              {/* Product Details Section with combined options */}
              <div className='mb-8'>
                <div className='flex flex-wrap border-b border-gray-300 mb-4'>
                  <button
                    onClick={() => setActiveDetail('coffeeProfileOrigin')}
                    className={`py-2 px-4 border-b-2 transition-colors ${
                      activeDetail === 'coffeeProfileOrigin' ? 'border-dark font-semibold' : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    Coffee Profile & Origin
                  </button>
                  <button
                    onClick={() => setActiveDetail('technicalSpecs')}
                    className={`py-2 px-4 border-b-2 transition-colors ${
                      activeDetail === 'technicalSpecs' ? 'border-dark font-semibold' : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    Specifications
                  </button>
                </div>
                
                <div className='py-2 whitespace-pre-line'>
                  {activeDetail === 'coffeeProfileOrigin' && (
                    <p>{productDetails.coffeeProfileOrigin}</p>
                  )}
                  {activeDetail === 'technicalSpecs' && (
                    <div className='bg-white rounded-lg border border-gray-200 overflow-hidden'>
                      <table className='min-w-full'>
                        <thead className='bg-gray-50'>
                          <tr>
                            <th className='py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Specification</th>
                            <th className='py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Value</th>
                          </tr>
                        </thead>
                        <tbody className='bg-white divide-y divide-gray-200'>
                          <tr>
                            <td className='py-3 px-4 text-sm font-medium text-gray-900'>Screen Size</td>
                            <td className='py-3 px-4 text-sm text-gray-700'>{product.specifications.screenSize}</td>
                          </tr>
                          <tr>
                            <td className='py-3 px-4 text-sm font-medium text-gray-900'>Processing Method</td>
                            <td className='py-3 px-4 text-sm text-gray-700'>{product.specifications.processingMethod}</td>
                          </tr>
                          <tr>
                            <td className='py-3 px-4 text-sm font-medium text-gray-900'>Crop Year</td>
                            <td className='py-3 px-4 text-sm text-gray-700'>{product.specifications.cropYear}</td>
                          </tr>
                          <tr>
                            <td className='py-3 px-4 text-sm font-medium text-gray-900'>Moisture %</td>
                            <td className='py-3 px-4 text-sm text-gray-700'>{product.specifications.moisture}</td>
                          </tr>
                          <tr>
                            <td className='py-3 px-4 text-sm font-medium text-gray-900'>Defect Count</td>
                            <td className='py-3 px-4 text-sm text-gray-700'>{product.specifications.defectCount}</td>
                          </tr>
                          <tr>
                            <td className='py-3 px-4 text-sm font-medium text-gray-900'>Cup Score</td>
                            <td className='py-3 px-4 text-sm text-gray-700'>{product.specifications.cupScore}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
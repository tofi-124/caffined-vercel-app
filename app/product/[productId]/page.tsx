"use client"
import { useEffect, useRef, useState, use } from 'react'
import Link from 'next/link'
import { offerings } from '../../data/offerings'
import Image from 'next/image'
import QuoteRequestPopup from '../../components/QuoteRequestPopup'

// Removing the generateStaticParams function from this client component file

type Props = {
  params: Promise<{
    productId: string
  }>
}

type ProductDetails = {
  coffeeProfileOrigin: string;
  technicalSpecs: string;
}

const OfferingDetail = ({ params }: Props) => {
  // Using React's use() hook to properly await params
  const { productId } = use(params);
  const product = offerings.find(p => p.id === productId)
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)
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
    coffeeProfileOrigin: `${product?.profile ?? ''}${product?.profile && product?.origin ? '\n\n' : ''}${product?.origin ?? ''}`.trim(),
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
            className='p-10 py-3 bg-accent hover:bg-dark text-white hover:text-primary border border-accent hover:border-dark rounded-md'
          >
            RETURN TO OFFERINGS
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className='bg-primary'>
      <header className='bg-[url(/images/about-us.webp)] w-full h-[350px] flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold text-primary'>{product.name}</h1>
        <p className='mt-3 text-primary font-inconsolata'></p>
      </header>
      
      <section className='container mx-auto py-16 px-4'>
        <div className='flex max-lg:flex-col items-start justify-center gap-12'>
          <div ref={productImageRef} className='lg:w-1/2 flex justify-center items-start pt-4'>
            <Image
              src={`/images/${product.image_url}`}
              alt={`${product.name} - ${product.specifications.processingMethod} processed Ethiopian green coffee from ${product.region}`}
              width={400}
              height={500}
              className='object-contain'
              priority
            />
          </div>
          
          <div className='lg:w-1/2'>
            {/* Top info bar with key details */}
            <div className='flex flex-wrap items-center gap-3 mb-4'>
              <span className='inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium'>
                {product.specifications.processingMethod}
              </span>
              <span className='inline-flex items-center px-3 py-1 rounded-full bg-dark/10 text-dark text-sm font-medium'>
                Score: {product.specifications.cupScore}
              </span>
              <span className='inline-flex items-center px-3 py-1 rounded-full bg-dark/10 text-dark text-sm font-medium'>
                Grade {product.specifications.grade}
              </span>
            </div>
            
            <h2 className='text-5xl font-extrabold text-dark mb-2'>{product.name}</h2>
            <p className='text-lg text-gray-600 mb-4'>{product.region}</p>
            
            {/* Flavor notes as prominent badges */}
            {product.flavorNotes.length > 0 && (
              <div className='mb-6'>
                <div className='flex flex-wrap gap-2'>
                  {product.flavorNotes.map((note, index) => (
                    <span 
                      key={index}
                      className='inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20'
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Availability indicator */}
            <div className='mb-6 p-4 rounded-lg bg-white border border-gray-200'>
              {product.isSoldOut ? (
                <div className='flex items-center gap-3'>
                  <span className='inline-flex items-center px-3 py-1 rounded-md bg-dark text-primary text-xs font-bold'>
                    SOLD OUT
                  </span>
                  <span className='text-sm text-gray-700'>Now accepting inquiries for the 2026 crop only.</span>
                </div>
              ) : (
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3'>
                  <div className='flex items-center gap-3'>
                    <span className='inline-flex items-center px-3 py-1 rounded-md bg-green-100 text-green-800 text-xs font-bold'>
                      IN STOCK
                    </span>
                    <span className='text-sm text-gray-700'>
                      {product.availableBags !== null ? (
                        <><strong>{product.availableBags}</strong> bags available</>
                      ) : (
                        'Contact for availability'
                      )}
                    </span>
                  </div>
                  <span className='text-sm text-gray-500'>{product.bagSize}</span>
                </div>
              )}
            </div>
            
            {/* Quick stats grid */}
            <div className='grid grid-cols-2 gap-4 mb-8'>
              <div className='p-4 bg-white rounded-lg border border-gray-200'>
                <p className='text-xs text-gray-500 uppercase tracking-wider mb-1'>Altitude</p>
                <p className='font-semibold text-dark'>{product.altitude}</p>
              </div>
              <div className='p-4 bg-white rounded-lg border border-gray-200'>
                <p className='text-xs text-gray-500 uppercase tracking-wider mb-1'>Variety</p>
                <p className='font-semibold text-dark'>{product.variety}</p>
              </div>
              <div className='p-4 bg-white rounded-lg border border-gray-200'>
                <p className='text-xs text-gray-500 uppercase tracking-wider mb-1'>Producer</p>
                <p className='font-semibold text-dark'>{product.producer}</p>
              </div>
              <div className='p-4 bg-white rounded-lg border border-gray-200'>
                <p className='text-xs text-gray-500 uppercase tracking-wider mb-1'>Lot Number</p>
                <p className='font-semibold text-dark'>{product.lotNumber}</p>
              </div>
            </div>
            
            {/* Certifications if any */}
            {product.certifications.length > 0 && (
              <div className='mb-6'>
                <p className='text-xs text-gray-500 uppercase tracking-wider mb-2'>Certifications</p>
                <div className='flex flex-wrap gap-2'>
                  {product.certifications.map((cert, index) => (
                    <span 
                      key={index}
                      className='inline-flex items-center px-3 py-1 rounded-md bg-green-50 text-green-700 text-sm font-medium border border-green-200'
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Warehouse info */}
            <div className='mb-6 flex items-center gap-2 text-sm text-gray-600'>
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
              </svg>
              <span>Ships from: <strong>{product.warehouseLocation}</strong></span>
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
                            <td className='py-3 px-4 text-sm font-medium text-gray-900'>Grade</td>
                            <td className='py-3 px-4 text-sm text-gray-700'>{product.specifications.grade}</td>
                          </tr>
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
                          <tr>
                            <td className='py-3 px-4 text-sm font-medium text-gray-900'>Altitude</td>
                            <td className='py-3 px-4 text-sm text-gray-700'>{product.altitude}</td>
                          </tr>
                          <tr>
                            <td className='py-3 px-4 text-sm font-medium text-gray-900'>Variety</td>
                            <td className='py-3 px-4 text-sm text-gray-700'>{product.variety}</td>
                          </tr>
                          <tr>
                            <td className='py-3 px-4 text-sm font-medium text-gray-900'>Bag Size</td>
                            <td className='py-3 px-4 text-sm text-gray-700'>{product.bagSize}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className='flex flex-wrap gap-4'>
              <Link 
                href="/contact-us"
                className='p-10 py-3 bg-primary hover:bg-dark text-dark hover:text-primary border border-dark rounded-md font-bold'
              >
                CONTACT US
              </Link>
              
              <button 
                onClick={() => setIsQuoteOpen(true)}
                className='p-10 py-3 bg-accent hover:bg-dark text-white hover:text-primary border border-accent hover:border-dark rounded-md font-bold cursor-pointer'
              >
                {product.isSoldOut ? 'JOIN ALLOCATION LIST' : 'GET A QUOTE'}
              </button>

              <QuoteRequestPopup
                isOpen={isQuoteOpen}
                onClose={() => setIsQuoteOpen(false)}
                productName={product.name}
                productImage={product.image_url}
                isAllocationList={product.isSoldOut}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default OfferingDetail
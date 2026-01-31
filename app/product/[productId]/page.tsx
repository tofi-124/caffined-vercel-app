"use client"
import { useEffect, useRef, useState, use } from 'react'
import Link from 'next/link'
import { offerings } from '../../data/offerings'
import Image from 'next/image'
import QuoteRequestPopup from '../../components/QuoteRequestPopup'
import { generateProductPDF } from '../../lib/pdfGenerator'

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
      <header className='bg-[url(/images/about-us.webp)] w-full h-[280px] flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold text-primary'>{product.name}</h1>
        <p className='mt-3 text-primary font-inconsolata text-lg'>{product.region}</p>
      </header>
      
      <section className='container mx-auto py-16 px-4'>
        {/* Two column layout on desktop */}
        <div className='flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-7xl mx-auto'>
          {/* Left column - Image */}
          <div ref={productImageRef} className='lg:w-[45%] flex-shrink-0'>
            <div className='sticky top-24 bg-white rounded-2xl shadow-lg p-8 border border-gray-100'>
              <Image
                src={`/images/${product.image_url}`}
                alt={`${product.name} - ${product.specifications.processingMethod} processed Ethiopian green coffee from ${product.region}`}
                width={600}
                height={600}
                className='object-contain w-full h-auto'
                priority
              />
              
              {/* Quick badges below image */}
              <div className='flex flex-wrap items-center justify-center gap-2 mt-6 pt-6 border-t border-gray-100'>
                {product.specifications.processingMethod && (
                  <span className='inline-flex items-center px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-semibold'>
                    {product.specifications.processingMethod}
                  </span>
                )}
                {product.specifications.cupScore && (
                  <span className='inline-flex items-center px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold'>
                    {product.specifications.cupScore}
                  </span>
                )}
                {product.specifications.grade && (
                  <span className='inline-flex items-center px-3 py-1.5 rounded-full bg-dark/10 text-dark text-xs font-semibold'>
                    Grade {product.specifications.grade}
                  </span>
                )}
              </div>
            </div>
          </div>
        
          {/* Right column - Details */}
          <div className='lg:flex-1'>
          {/* Right column - Details */}
          <div className='lg:flex-1'>
            {/* Product name and description */}
            <div className='mb-8'>
              <h2 className='text-4xl font-extrabold text-dark mb-3'>{product.name}</h2>
              <p className='text-lg text-gray-700 leading-relaxed'>{product.desc}</p>
            </div>
            
            {/* Flavor notes as prominent badges */}
            {product.flavorNotes.length > 0 && (
              <div className='mb-8'>
                <h3 className='text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3'>Flavor Profile</h3>
                <div className='flex flex-wrap gap-2'>
                  {product.flavorNotes.map((note, index) => (
                    <span 
                      key={index}
                      className='inline-flex items-center px-4 py-2 rounded-lg bg-accent/10 text-accent text-sm font-semibold border border-accent/20 hover:bg-accent/20 transition-colors'
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Pricing Section */}
            <div className='mb-8 p-6 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-accent/30 shadow-sm'>
              <div className='flex items-baseline gap-3 mb-2'>
                <span className='text-4xl font-bold text-dark'>${product.pricing.fobPricePerLb.toFixed(2)}</span>
                <span className='text-lg text-gray-600 font-medium'>per pound</span>
              </div>
              <div className='text-base text-gray-600 mb-4 font-medium'>
                ${product.pricing.fobPricePerKg.toFixed(2)} per kg • FOB Ethiopia
              </div>
              <div className='flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-2'>
                <span className='inline-flex items-center px-3 py-1.5 rounded-md bg-white/80 border border-gray-200 font-medium'>
                  {product.pricing.priceNote}
                </span>
              </div>
              {product.pricing.minimumOrder && (
                <p className='text-sm text-gray-500 mt-2'>
                  Minimum order: {product.pricing.minimumOrder}
                </p>
              )}
            </div>
            
            {/* Availability indicator */}
            <div className='mb-8 p-5 rounded-xl bg-white border-2 border-gray-200 shadow-sm'>
              {product.isSoldOut ? (
                <div className='flex items-center gap-3'>
                  <span className='inline-flex items-center px-4 py-2 rounded-lg bg-red-100 text-red-800 text-sm font-bold'>
                    SOLD OUT
                  </span>
                  <span className='text-sm text-gray-700 font-medium'>Accepting inquiries for 2026 crop</span>
                </div>
              ) : (
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3'>
                  <div className='flex items-center gap-3'>
                    <span className='inline-flex items-center px-4 py-2 rounded-lg bg-green-100 text-green-800 text-sm font-bold'>
                      IN STOCK
                    </span>
                    <span className='text-sm text-gray-700 font-medium'>
                      {product.availableBags !== null ? (
                        <><strong className='text-dark'>{product.availableBags}</strong> bags available</>
                      ) : (
                        'Contact for availability'
                      )}
                    </span>
                  </div>
                  <span className='text-sm text-gray-600 font-medium'>{product.bagSize}</span>
                </div>
              )}
            </div>
            
            {/* Key details grid */}
            <div className='grid grid-cols-2 gap-4 mb-8'>
              <div className='p-4 bg-white rounded-xl border border-gray-200 hover:border-accent/30 transition-colors'>
                <p className='text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1.5'>Altitude</p>
                <p className='font-bold text-dark text-sm'>{product.altitude}</p>
              </div>
              <div className='p-4 bg-white rounded-xl border border-gray-200 hover:border-accent/30 transition-colors'>
                <p className='text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1.5'>Variety</p>
                <p className='font-bold text-dark text-sm'>{product.variety}</p>
              </div>
              <div className='p-4 bg-white rounded-xl border border-gray-200 hover:border-accent/30 transition-colors'>
                <p className='text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1.5'>Producer</p>
                <p className='font-bold text-dark text-sm'>{product.producer}</p>
              </div>
              <div className='p-4 bg-white rounded-xl border border-gray-200 hover:border-accent/30 transition-colors'>
                <p className='text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1.5'>Lot Number</p>
                <p className='font-bold text-dark text-sm'>{product.lotNumber}</p>
              </div>
            </div>
            
            {/* Certifications if any */}
            {product.certifications.length > 0 && (
              <div className='mb-8'>
                <h3 className='text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3'>Certifications</h3>
                <div className='flex flex-wrap gap-2'>
                  {product.certifications.map((cert, index) => (
                    <span 
                      key={index}
                      className='inline-flex items-center px-4 py-2 rounded-lg bg-green-50 text-green-700 text-sm font-semibold border border-green-200'
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Warehouse info */}
            <div className='mb-8 flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg border border-gray-200'>
              <svg className='w-5 h-5 text-accent flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
              </svg>
              <span className='font-medium'>Ships from: <strong className='text-dark'>{product.warehouseLocation}</strong></span>
            </div>
            
            {/* Product Details Section with tabs */}
            <div className='mb-8 bg-white rounded-xl border-2 border-gray-200 overflow-hidden shadow-sm'>
              <div className='flex border-b border-gray-200 bg-gray-50'>
                <button
                  onClick={() => setActiveDetail('coffeeProfileOrigin')}
                  className={`flex-1 py-4 px-6 text-sm font-bold transition-all ${
                    activeDetail === 'coffeeProfileOrigin' 
                      ? 'bg-white border-b-2 border-accent text-accent' 
                      : 'text-gray-600 hover:text-dark hover:bg-gray-100'
                  }`}
                >
                  Coffee Profile & Origin
                </button>
                <button
                  onClick={() => setActiveDetail('technicalSpecs')}
                  className={`flex-1 py-4 px-6 text-sm font-bold transition-all ${
                    activeDetail === 'technicalSpecs' 
                      ? 'bg-white border-b-2 border-accent text-accent' 
                      : 'text-gray-600 hover:text-dark hover:bg-gray-100'
                  }`}
                >
                  Technical Specifications
                </button>
              </div>
                
              <div className='p-6 min-h-[200px]'>
                {activeDetail === 'coffeeProfileOrigin' && (
                  <p className='text-gray-700 leading-relaxed whitespace-pre-line'>{productDetails.coffeeProfileOrigin}</p>
                )}
                {activeDetail === 'technicalSpecs' && (
                  <div className='overflow-x-auto'>
                    <table className='min-w-full'>
                      <thead className='bg-gray-50'>
                        <tr>
                          <th className='py-3 px-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>Specification</th>
                          <th className='py-3 px-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider'>Value</th>
                        </tr>
                      </thead>
                      <tbody className='bg-white divide-y divide-gray-100'>
                          {product.specifications.grade && (
                            <tr>
                              <td className='py-3 px-4 text-sm font-medium text-gray-900'>Grade</td>
                              <td className='py-3 px-4 text-sm text-gray-700'>{product.specifications.grade}</td>
                            </tr>
                          )}
                          {product.specifications.screenSize && (
                            <tr>
                              <td className='py-3 px-4 text-sm font-medium text-gray-900'>Screen Size</td>
                              <td className='py-3 px-4 text-sm text-gray-700'>{product.specifications.screenSize}</td>
                            </tr>
                          )}
                          {product.specifications.processingMethod && (
                            <tr>
                              <td className='py-3 px-4 text-sm font-medium text-gray-900'>Processing Method</td>
                              <td className='py-3 px-4 text-sm text-gray-700'>{product.specifications.processingMethod}</td>
                            </tr>
                          )}
                          {product.specifications.cropYear && (
                            <tr>
                              <td className='py-3 px-4 text-sm font-medium text-gray-900'>Crop Year</td>
                              <td className='py-3 px-4 text-sm text-gray-700'>{product.specifications.cropYear}</td>
                            </tr>
                          )}
                          {product.specifications.harvestPeriod && (
                            <tr>
                              <td className='py-3 px-4 text-sm font-medium text-gray-900'>Harvest Period</td>
                              <td className='py-3 px-4 text-sm text-gray-700'>{product.specifications.harvestPeriod}</td>
                            </tr>
                          )}
                          {product.specifications.washingStation && (
                            <tr>
                              <td className='py-3 px-4 text-sm font-medium text-gray-900'>Washing Station</td>
                              <td className='py-3 px-4 text-sm text-gray-700'>{product.specifications.washingStation}</td>
                            </tr>
                          )}
                          {product.specifications.millName && (
                            <tr>
                              <td className='py-3 px-4 text-sm font-medium text-gray-900'>Mill / Processing Facility</td>
                              <td className='py-3 px-4 text-sm text-gray-700'>{product.specifications.millName}</td>
                            </tr>
                          )}
                          {product.specifications.dryingMethod && (
                            <tr>
                              <td className='py-3 px-4 text-sm font-medium text-gray-900'>Drying Method</td>
                              <td className='py-3 px-4 text-sm text-gray-700'>{product.specifications.dryingMethod}</td>
                            </tr>
                          )}
                          {product.specifications.fermentationTime && (
                            <tr>
                              <td className='py-3 px-4 text-sm font-medium text-gray-900'>Fermentation Time</td>
                              <td className='py-3 px-4 text-sm text-gray-700'>{product.specifications.fermentationTime}</td>
                            </tr>
                          )}
                          {product.specifications.moisture && (
                            <tr>
                              <td className='py-3 px-4 text-sm font-medium text-gray-900'>Moisture Content</td>
                              <td className='py-3 px-4 text-sm text-gray-700'>{product.specifications.moisture}</td>
                            </tr>
                          )}
                          {product.specifications.waterActivity && (
                            <tr>
                              <td className='py-3 px-4 text-sm font-medium text-gray-900'>Water Activity (aw)</td>
                              <td className='py-3 px-4 text-sm text-gray-700'>{product.specifications.waterActivity}</td>
                            </tr>
                          )}
                          {product.specifications.density && (
                            <tr>
                              <td className='py-3 px-4 text-sm font-medium text-gray-900'>Density</td>
                              <td className='py-3 px-4 text-sm text-gray-700'>{product.specifications.density}</td>
                            </tr>
                          )}
                          {product.specifications.defectCount && (
                            <tr>
                              <td className='py-3 px-4 text-sm font-medium text-gray-900'>Defect Count</td>
                              <td className='py-3 px-4 text-sm text-gray-700'>{product.specifications.defectCount}</td>
                            </tr>
                          )}
                          {product.specifications.cupScore && (
                            <tr>
                              <td className='py-3 px-4 text-sm font-medium text-gray-900'>Cup Score</td>
                              <td className='py-3 px-4 text-sm text-gray-700'>{product.specifications.cupScore}</td>
                            </tr>
                          )}
                          {product.specifications.cuppingNotes && (
                            <tr>
                              <td className='py-3 px-4 text-sm font-medium text-gray-900'>Cupping Notes</td>
                              <td className='py-3 px-4 text-sm text-gray-700'>{product.specifications.cuppingNotes}</td>
                            </tr>
                          )}
                          {product.altitude && (
                            <tr>
                              <td className='py-3 px-4 text-sm font-medium text-gray-900'>Altitude</td>
                              <td className='py-3 px-4 text-sm text-gray-700'>{product.altitude}</td>
                            </tr>
                          )}
                          {product.variety && (
                            <tr>
                              <td className='py-3 px-4 text-sm font-medium text-gray-900'>Variety</td>
                              <td className='py-3 px-4 text-sm text-gray-700'>{product.variety}</td>
                            </tr>
                          )}
                          {product.bagSize && (
                            <tr>
                              <td className='py-3 px-4 text-sm font-medium text-gray-900'>Bag Size</td>
                              <td className='py-3 px-4 text-sm text-gray-700'>{product.bagSize}</td>
                            </tr>
                          )}
                          {product.specifications.farmCoopId && (
                            <tr>
                              <td className='py-3 px-4 text-sm font-medium text-gray-900'>Farm/Coop ID</td>
                              <td className='py-3 px-4 text-sm text-gray-700'>{product.specifications.farmCoopId}</td>
                            </tr>
                          )}
                          {product.specifications.icoNumber && (
                            <tr>
                              <td className='py-3 px-4 text-sm font-medium text-gray-900'>ICO Number</td>
                              <td className='py-3 px-4 text-sm text-gray-700'>{product.specifications.icoNumber}</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className='flex flex-wrap gap-4'>
              <Link 
                href="/contact-us"
                className='flex-1 min-w-[160px] text-center px-6 py-4 bg-white hover:bg-dark text-dark hover:text-primary border-2 border-dark rounded-xl font-bold transition-all shadow-sm hover:shadow-md'
              >
                CONTACT US
              </Link>
              
              <button 
                onClick={() => setIsQuoteOpen(true)}
                className='flex-1 min-w-[160px] px-6 py-4 bg-accent hover:bg-accent/90 text-white border-2 border-accent rounded-xl font-bold transition-all shadow-sm hover:shadow-md cursor-pointer'
              >
                {product.isSoldOut ? 'JOIN ALLOCATION LIST' : 'GET A QUOTE'}
              </button>

              <button 
                onClick={() => generateProductPDF(product)}
                className='flex-1 min-w-[160px] px-6 py-4 bg-secondary hover:bg-secondary/90 text-white border-2 border-secondary rounded-xl font-bold transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-2'
                title='Download Product Sheet PDF'
              >
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                </svg>
                <span className='max-sm:hidden'>DOWNLOAD PDF</span>
                <span className='sm:hidden'>PDF</span>
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
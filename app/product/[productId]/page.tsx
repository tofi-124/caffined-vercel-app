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
  const specsSectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Scroll to show product section nicely in viewport
    const timer = setTimeout(() => {
      if (productImageRef.current) {
        const productSectionTop = productImageRef.current.offsetTop;
        const headerOffset = 100; // Account for navbar
        
        window.scrollTo({
          top: Math.max(0, productSectionTop - headerOffset),
          behavior: 'smooth'
        });
      }
    }, 300);
    
    return () => clearTimeout(timer);
  }, [productId]);
  
  // Default values for product details
  const [activeDetail, setActiveDetail] = useState<string>('coffeeProfileOrigin');
  const [isSpecsExpanded, setIsSpecsExpanded] = useState(false);
  
  // Product details with combined coffee profile and origin info
  const productDetails: ProductDetails = {
    coffeeProfileOrigin: `${product?.profile ?? ''}${product?.profile && product?.origin ? '\n\n' : ''}${product?.origin ?? ''}`.trim(),
    technicalSpecs: ''  // This will be dynamically rendered from product specs
  };
  
  if (!product) {
    return (
      <main className='bg-stone-50 min-h-screen'>
        <div className='container mx-auto py-24 px-4 text-center'>
          <div className='w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center'>
            <svg className='w-10 h-10 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>
          </div>
          <h1 className='text-4xl font-bold text-dark mb-4'>Offering Not Found</h1>
          <p className='text-gray-500 mb-8'>Sorry, we couldn't find the coffee you're looking for.</p>
          <Link 
            href="/offerings"
            className='inline-flex items-center gap-2 px-8 py-4 bg-dark hover:bg-accent text-white rounded-full font-semibold transition-all'
          >
            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
            </svg>
            Return to Offerings
          </Link>
        </div>
      </main>
    )
  }

  const hasExpandedSpecs = Boolean(
    product.specifications.screenSize ||
    product.specifications.millName ||
    product.specifications.dryingMethod ||
    product.specifications.fermentationTime ||
    product.specifications.moisture ||
    product.specifications.waterActivity ||
    product.specifications.density ||
    product.specifications.defectCount ||
    product.bagSize ||
    product.specifications.cuppingNotes ||
    product.specifications.farmCoopId ||
    product.specifications.icoNumber ||
    product.producer ||
    product.lotNumber
  )

  return (
    <main className='bg-stone-50'>
      <section ref={productImageRef} className='container mx-auto py-12 md:py-16 px-4'>
        {/* Two column layout on desktop */}
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-16 max-w-7xl mx-auto'>
          {/* Left column - Image */}
          <div className='lg:w-[42%] flex-shrink-0'>
            <div className='lg:sticky lg:top-24'>
              {/* Main image card */}
              <div className='bg-gradient-to-br from-white via-stone-50 to-stone-100 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100/80'>
                <Image
                  src={`/images/${product.image_url}`}
                  alt={`${product.name} - ${product.specifications.processingMethod} processed Ethiopian green coffee from ${product.subRegion ? `${product.subRegion}, ${product.region}` : product.region}`}
                  width={600}
                  height={600}
                  className='object-contain w-full h-auto'
                  priority
                />
              </div>
            </div>
          </div>
        
          {/* Right column - Details */}
          <div className='lg:flex-1'>
            {/* Breadcrumb */}
            <nav className='flex items-center gap-2 text-sm text-gray-400 mb-4'>
              <Link href='/offerings' className='hover:text-accent transition-colors'>Our Offerings</Link>
              <span>·</span>
              <span className='text-gray-500'>{product.region}</span>
              {product.subRegion && (
                <>
                  <span>·</span>
                  <span className='text-dark'>{product.subRegion}</span>
                </>
              )}
            </nav>
            
            {/* Product title and description */}
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-4'>{product.name}</h1>
            <p className='text-lg text-gray-600 leading-relaxed mb-6'>{product.desc}</p>
            
            {/* Quick stats badges */}
            <div className='flex flex-wrap gap-2 mb-10'>
              {product.specifications.processingMethod && (
                <span className='px-4 py-2 rounded-full bg-stone-100 text-dark text-sm font-medium border border-stone-200'>
                  {product.specifications.processingMethod}
                </span>
              )}
              {product.specifications.grade && (
                <span className='px-4 py-2 rounded-full bg-stone-100 text-dark text-sm font-medium border border-stone-200'>
                  Grade {product.specifications.grade}
                </span>
              )}
              {product.specifications.cupScore && (
                <span className='px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20'>
                  {product.specifications.cupScore} Cup Score
                </span>
              )}
              {product.isSoldOut && (
                <span className='px-4 py-2 rounded-full bg-dark text-white text-sm font-semibold'>
                  Sold Out
                </span>
              )}
            </div>

            {/* Flavor notes section */}
            {product.flavorNotes.length > 0 && (
              <div className='mb-10'>
                <h3 className='text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-4'>Cup Profile</h3>
                <div className='flex flex-wrap gap-2'>
                  {product.flavorNotes.map((note, index) => (
                    <span 
                      key={index}
                      className='px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 hover:bg-accent hover:text-white transition-all duration-300'
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Product Details Section with elegant tabs */}
            <div ref={specsSectionRef} className='mb-10 bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm'>
              <div className='flex border-b border-gray-200' role='tablist' aria-label='Product details'>
                <button
                  type='button'
                  onClick={() => setActiveDetail('coffeeProfileOrigin')}
                  className={`flex-1 py-5 px-6 text-sm font-semibold transition-all relative ${
                    activeDetail === 'coffeeProfileOrigin' 
                      ? 'text-dark' 
                      : 'text-gray-400 hover:text-dark'
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2`}
                  role='tab'
                  id='about-tab'
                  aria-controls='about-panel'
                  aria-selected={activeDetail === 'coffeeProfileOrigin'}
                >
                  About This Coffee
                  {activeDetail === 'coffeeProfileOrigin' && (
                    <span className='absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-accent rounded-full'></span>
                  )}
                </button>
                <button
                  type='button'
                  onClick={() => setActiveDetail('technicalSpecs')}
                  className={`flex-1 py-5 px-6 text-sm font-semibold transition-all relative ${
                    activeDetail === 'technicalSpecs' 
                      ? 'text-dark' 
                      : 'text-gray-400 hover:text-dark'
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2`}
                  role='tab'
                  id='specs-tab'
                  aria-controls='specs-panel'
                  aria-selected={activeDetail === 'technicalSpecs'}
                >
                  Specifications
                  {activeDetail === 'technicalSpecs' && (
                    <span className='absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-accent rounded-full'></span>
                  )}
                </button>
              </div>

              <div className='p-6 md:p-8 min-h-[200px]'>
                {activeDetail === 'coffeeProfileOrigin' && (
                  <div id='about-panel' role='tabpanel' aria-labelledby='about-tab' className='space-y-8'>
                    {/* Coffee Profile Section */}
                    {product.profile && (
                      <div>
                        <div className='flex items-center gap-3 mb-4'>
                          <div className='w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center'>
                            <svg className='w-5 h-5 text-accent' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
                            </svg>
                          </div>
                          <h3 className='text-lg font-bold text-dark'>Flavor Profile</h3>
                        </div>
                        <p className='text-gray-600 leading-relaxed'>{product.profile}</p>
                      </div>
                    )}
                    
                    {/* Origin Section */}
                    {product.origin && (
                      <div>
                        <div className='flex items-center gap-3 mb-4'>
                          <div className='w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center'>
                            <svg className='w-5 h-5 text-accent' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                            </svg>
                          </div>
                          <h3 className='text-lg font-bold text-dark'>Origin Story</h3>
                        </div>
                        <p className='text-gray-600 leading-relaxed'>{product.origin}</p>
                      </div>
                    )}
                  </div>
                )}
                {activeDetail === 'technicalSpecs' && (
                  <div id='specs-panel' role='tabpanel' aria-labelledby='specs-tab'>
                    {/* Specs grid layout */}
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mb-6'>
                      {product.specifications.grade && (
                        <div className='p-4 bg-stone-50 rounded-2xl'>
                          <span className='text-[10px] font-semibold uppercase tracking-widest text-gray-400 block mb-1'>Grade</span>
                          <span className='text-sm font-bold text-dark'>{product.specifications.grade}</span>
                        </div>
                      )}
                      {product.specifications.cupScore && (
                        <div className='p-4 bg-accent/5 rounded-2xl'>
                          <span className='text-[10px] font-semibold uppercase tracking-widest text-gray-400 block mb-1'>Cup Score</span>
                          <span className='text-sm font-bold text-accent'>{product.specifications.cupScore}</span>
                        </div>
                      )}
                      {product.specifications.processingMethod && (
                        <div className='p-4 bg-stone-50 rounded-2xl'>
                          <span className='text-[10px] font-semibold uppercase tracking-widest text-gray-400 block mb-1'>Process</span>
                          <span className='text-sm font-bold text-dark'>{product.specifications.processingMethod}</span>
                        </div>
                      )}
                      {product.variety && (
                        <div className='p-4 bg-stone-50 rounded-2xl col-span-2 md:col-span-3'>
                          <span className='text-[10px] font-semibold uppercase tracking-widest text-gray-400 block mb-1'>Variety</span>
                          <span className='text-sm font-bold text-dark'>{product.variety}</span>
                        </div>
                      )}
                      {product.region && (
                        <div className='p-4 bg-stone-50 rounded-2xl'>
                          <span className='text-[10px] font-semibold uppercase tracking-widest text-gray-400 block mb-1'>Region</span>
                          <span className='text-sm font-bold text-dark'>{product.region}</span>
                        </div>
                      )}
                      {product.subRegion && (
                        <div className='p-4 bg-stone-50 rounded-2xl'>
                          <span className='text-[10px] font-semibold uppercase tracking-widest text-gray-400 block mb-1'>Sub-Region</span>
                          <span className='text-sm font-bold text-dark'>{product.subRegion}</span>
                        </div>
                      )}
                      {product.altitude && (
                        <div className='p-4 bg-stone-50 rounded-2xl'>
                          <span className='text-[10px] font-semibold uppercase tracking-widest text-gray-400 block mb-1'>Altitude</span>
                          <span className='text-sm font-bold text-dark'>{product.altitude}</span>
                        </div>
                      )}
                      {product.specifications.washingStation && (
                        <div className='p-4 bg-stone-50 rounded-2xl col-span-2 md:col-span-1'>
                          <span className='text-[10px] font-semibold uppercase tracking-widest text-gray-400 block mb-1'>Washing Station</span>
                          <span className='text-sm font-bold text-dark'>{product.specifications.washingStation}</span>
                        </div>
                      )}
                      {product.specifications.harvestPeriod && (
                        <div className='p-4 bg-stone-50 rounded-2xl col-span-2 md:col-span-1'>
                          <span className='text-[10px] font-semibold uppercase tracking-widest text-gray-400 block mb-1'>Harvest Period</span>
                          <span className='text-sm font-bold text-dark'>{product.specifications.harvestPeriod}</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Expanded specs */}
                    {isSpecsExpanded && (
                      <div
                        id='expanded-specs'
                        className='grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 pt-6 border-t border-gray-200'
                      >
                        {product.specifications.screenSize && (
                          <div className='p-4 bg-stone-50 rounded-2xl'>
                            <span className='text-[10px] font-semibold uppercase tracking-widest text-gray-400 block mb-1'>Screen Size</span>
                            <span className='text-sm font-bold text-dark'>{product.specifications.screenSize}</span>
                          </div>
                        )}
                        {product.specifications.millName && (
                          <div className='p-4 bg-stone-50 rounded-2xl col-span-2 md:col-span-1'>
                            <span className='text-[10px] font-semibold uppercase tracking-widest text-gray-400 block mb-1'>Mill</span>
                            <span className='text-sm font-bold text-dark'>{product.specifications.millName}</span>
                          </div>
                        )}
                        {product.specifications.dryingMethod && (
                          <div className='p-4 bg-stone-50 rounded-2xl col-span-2 md:col-span-1'>
                            <span className='text-[10px] font-semibold uppercase tracking-widest text-gray-400 block mb-1'>Drying Method</span>
                            <span className='text-sm font-bold text-dark'>{product.specifications.dryingMethod}</span>
                          </div>
                        )}
                        {product.specifications.fermentationTime && (
                          <div className='p-4 bg-stone-50 rounded-2xl'>
                            <span className='text-[10px] font-semibold uppercase tracking-widest text-gray-400 block mb-1'>Fermentation</span>
                            <span className='text-sm font-bold text-dark'>{product.specifications.fermentationTime}</span>
                          </div>
                        )}
                        {product.specifications.moisture && (
                          <div className='p-4 bg-stone-50 rounded-2xl'>
                            <span className='text-[10px] font-semibold uppercase tracking-widest text-gray-400 block mb-1'>Moisture</span>
                            <span className='text-sm font-bold text-dark'>{product.specifications.moisture}</span>
                          </div>
                        )}
                        {product.specifications.waterActivity && (
                          <div className='p-4 bg-stone-50 rounded-2xl'>
                            <span className='text-[10px] font-semibold uppercase tracking-widest text-gray-400 block mb-1'>Water Activity</span>
                            <span className='text-sm font-bold text-dark'>{product.specifications.waterActivity}</span>
                          </div>
                        )}
                        {product.specifications.density && (
                          <div className='p-4 bg-stone-50 rounded-2xl'>
                            <span className='text-[10px] font-semibold uppercase tracking-widest text-gray-400 block mb-1'>Density</span>
                            <span className='text-sm font-bold text-dark'>{product.specifications.density}</span>
                          </div>
                        )}
                        {product.specifications.defectCount && (
                          <div className='p-4 bg-stone-50 rounded-2xl'>
                            <span className='text-[10px] font-semibold uppercase tracking-widest text-gray-400 block mb-1'>Defect Count</span>
                            <span className='text-sm font-bold text-dark'>{product.specifications.defectCount}</span>
                          </div>
                        )}
                        {product.bagSize && (
                          <div className='p-4 bg-stone-50 rounded-2xl col-span-2 md:col-span-1'>
                            <span className='text-[10px] font-semibold uppercase tracking-widest text-gray-400 block mb-1'>Bag Size</span>
                            <span className='text-sm font-bold text-dark'>{product.bagSize}</span>
                          </div>
                        )}
                        {product.specifications.farmCoopId && (
                          <div className='p-4 bg-stone-50 rounded-2xl'>
                            <span className='text-[10px] font-semibold uppercase tracking-widest text-gray-400 block mb-1'>Farm/Coop ID</span>
                            <span className='text-sm font-bold text-dark'>{product.specifications.farmCoopId}</span>
                          </div>
                        )}
                        {product.specifications.icoNumber && (
                          <div className='p-4 bg-stone-50 rounded-2xl'>
                            <span className='text-[10px] font-semibold uppercase tracking-widest text-gray-400 block mb-1'>ICO Number</span>
                            <span className='text-sm font-bold text-dark'>{product.specifications.icoNumber}</span>
                          </div>
                        )}
                        {product.producer && (
                          <div className='p-4 bg-stone-50 rounded-2xl col-span-2 md:col-span-1'>
                            <span className='text-[10px] font-semibold uppercase tracking-widest text-gray-400 block mb-1'>Producer</span>
                            <span className='text-sm font-bold text-dark'>{product.producer}</span>
                          </div>
                        )}
                        {product.lotNumber && (
                          <div className='p-4 bg-stone-50 rounded-2xl'>
                            <span className='text-[10px] font-semibold uppercase tracking-widest text-gray-400 block mb-1'>Lot Number</span>
                            <span className='text-sm font-bold text-dark'>{product.lotNumber}</span>
                          </div>
                        )}
                        {product.specifications.cuppingNotes && (
                          <div className='p-4 bg-stone-50 rounded-2xl col-span-2 md:col-span-3'>
                            <span className='text-[10px] font-semibold uppercase tracking-widest text-gray-400 block mb-1'>Cupping Notes</span>
                            <span className='text-sm font-bold text-dark'>{product.specifications.cuppingNotes}</span>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {/* Show More/Less Button */}
                    {hasExpandedSpecs && (
                      <div className='text-center'>
                        <button
                          type='button'
                          onClick={() => {
                            const willCollapse = isSpecsExpanded;
                            setIsSpecsExpanded(!isSpecsExpanded);
                            
                            if (willCollapse && specsSectionRef.current) {
                              setTimeout(() => {
                                if (specsSectionRef.current) {
                                  const headerOffset = 100;
                                  const elementTop = specsSectionRef.current.getBoundingClientRect().top + window.scrollY;
                                  window.scrollTo({
                                    top: Math.max(0, elementTop - headerOffset),
                                    behavior: 'smooth'
                                  });
                                }
                              }, 50);
                            }
                          }}
                          aria-expanded={isSpecsExpanded}
                          aria-controls='expanded-specs'
                          className='inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2'
                        >
                          {isSpecsExpanded ? (
                            <>
                              <span>Show Less</span>
                              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 15l7-7 7 7' />
                              </svg>
                            </>
                          ) : (
                            <>
                              <span>Show All Specifications</span>
                              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                              </svg>
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Availability & Quote Section */}
            <div className='mb-10 p-6 md:p-8 rounded-3xl bg-white border border-gray-200 shadow-sm'>
              <div className='flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4'>
                <div>
                  <span className='text-[11px] font-semibold uppercase tracking-widest text-gray-400 block mb-2'>Pricing</span>
                  <p className='text-lg text-gray-600'>Contact us for current FOB pricing and availability</p>
                </div>
                {product.availableBags !== null && !product.isSoldOut && (
                  <div className='flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200'>
                    <span className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse'></span>
                    <span className='text-sm font-semibold text-emerald-700'>{product.availableBags} bags available</span>
                  </div>
                )}
              </div>
              
              <div className='mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-2'>
                <span className='px-3 py-1.5 rounded-full bg-stone-100 text-xs font-medium text-gray-600'>
                  FOB Ethiopia
                </span>
                {product.pricing.minimumOrder && (
                  <span className='px-3 py-1.5 rounded-full bg-stone-100 text-xs font-medium text-gray-600'>
                    Min: {product.pricing.minimumOrder}
                  </span>
                )}
              </div>
            </div>
            
            {/* Certifications if any */}
            {product.certifications.length > 0 && (
              <div className='mb-10'>
                <h3 className='text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-4'>Certifications</h3>
                <div className='flex flex-wrap gap-2'>
                  {product.certifications.map((cert, index) => (
                    <span 
                      key={index}
                      className='px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold border border-emerald-200'
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Warehouse info */}
            <div className='mb-10 flex items-center gap-3 text-sm text-gray-600 bg-white p-5 rounded-2xl border border-gray-200'>
              <div className='w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center flex-shrink-0'>
                <svg className='w-5 h-5 text-gray-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                </svg>
              </div>
              <div>
                <span className='text-[10px] font-semibold uppercase tracking-widest text-gray-400 block'>Ships From</span>
                <span className='font-semibold text-dark'>{product.warehouseLocation}</span>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className='flex flex-col sm:flex-row gap-3'>
              <button 
                onClick={() => setIsQuoteOpen(true)}
                className='flex-1 px-8 py-4 bg-accent hover:bg-dark text-white rounded-full font-semibold transition-all duration-300 shadow-sm hover:shadow-lg'
              >
                {product.isSoldOut ? 'Join Allocation List' : 'Request a Quote'}
              </button>
              
              <button 
                onClick={() => generateProductPDF(product)}
                className='flex items-center justify-center gap-2 px-6 py-4 bg-white hover:bg-stone-50 text-dark border border-gray-200 rounded-full font-semibold transition-all'
                title='Download Product Sheet PDF'
              >
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                </svg>
                <span>Download PDF</span>
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
import React from 'react'
import Link from 'next/link'
import ResponsiveImage from './ResponsiveImage'
import type { Offering } from '../data/offerings'

type Props = {
  items: Offering[]
  showActions?: boolean
  onRequestQuote?: (offering: Offering) => void
}

const OfferingsResultsList = ({ items, showActions = false, onRequestQuote }: Props) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full'>
      {items.map((o) => (
        <div 
          key={o.id} 
          className='group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col'
        >
          {/* Image Container */}
          <Link href={`/product/${o.id}`} className='relative overflow-hidden bg-gradient-to-b from-gray-50 to-white p-4 sm:p-6'>
            <div className='relative w-full aspect-square flex items-center justify-center'>
              <ResponsiveImage
                src={`/images/${o.image_url}`}
                alt={o.name}
                width={400}
                height={400}
                className='object-contain w-full h-full max-w-[280px] sm:max-w-none group-hover:scale-105 transition-transform duration-500'
                sizes='(max-width: 640px) 80vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 280px'
              />
            </div>
            {o.isSoldOut ? (
              <span className='absolute top-3 right-3 sm:top-4 sm:right-4 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-dark text-white text-xs font-bold uppercase tracking-wide'>
                Sold Out
              </span>
            ) : o.availableBags !== null && (
              <span className='absolute top-3 right-3 sm:top-4 sm:right-4 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-green-600 text-white text-xs font-bold uppercase tracking-wide'>
                {o.availableBags} bags
              </span>
            )}
          </Link>

          {/* Content Container */}
          <div className='flex flex-col flex-1 p-6 pt-2'>
            <Link href={`/product/${o.id}`} className='group/title'>
              <h3 className='text-xl font-bold text-dark group-hover/title:text-accent transition-colors duration-200 line-clamp-2'>
                {o.name}
              </h3>
            </Link>
            
            {/* Region */}
            <p className='mt-1 text-sm text-gray-500'>
              {o.region}
            </p>

            {/* Flavor Notes */}
            {o.flavorNotes.length > 0 && (
              <div className='mt-3 flex flex-wrap gap-1.5'>
                {o.flavorNotes.slice(0, 3).map((note, index) => (
                  <span key={index} className='px-2 py-0.5 bg-accent/10 rounded-full text-xs font-medium text-accent'>
                    {note}
                  </span>
                ))}
                {o.flavorNotes.length > 3 && (
                  <span className='px-2 py-0.5 text-xs text-gray-400'>
                    +{o.flavorNotes.length - 3} more
                  </span>
                )}
              </div>
            )}

            {/* Quick Specs */}
            <div className='mt-4 flex flex-wrap gap-2'>
              {o.specifications.processingMethod && (
                <span className='px-2.5 py-1 bg-primary rounded-full text-xs font-medium text-dark'>
                  {o.specifications.processingMethod}
                </span>
              )}
              {o.specifications.grade && (
                <span className='px-2.5 py-1 bg-primary rounded-full text-xs font-medium text-dark'>
                  {o.specifications.grade}
                </span>
              )}
              {o.specifications.cupScore && (
                <span className='px-2.5 py-1 bg-accent/10 rounded-full text-xs font-semibold text-accent'>
                  {o.specifications.cupScore} pts
                </span>
              )}
            </div>

            {/* Pricing */}
            <div className='mt-4 pt-4 border-t border-gray-100'>
              <div className='flex items-baseline gap-1'>
                <span className='text-2xl font-bold text-dark'>${o.pricing.fobPricePerLb.toFixed(2)}</span>
                <span className='text-sm text-gray-500'>USD per pound</span>
              </div>
              <p className='text-xs text-gray-400 mt-1'>FOB Ethiopia &bull; {o.pricing.priceYear} crop</p>
            </div>

            {/* Spacer to push button to bottom */}
            <div className='flex-1 min-h-4'></div>

            {/* Actions */}
            <div className='mt-4 flex flex-col gap-2'>
              {showActions && (
                <button
                  onClick={() => onRequestQuote?.(o)}
                  className='w-full py-3 bg-accent hover:bg-dark text-white hover:text-primary border border-accent hover:border-dark rounded-md font-bold transition-all duration-200'
                >
                  {o.isSoldOut ? 'JOIN WAITLIST' : 'GET A QUOTE'}
                </button>
              )}
              <Link 
                href={`/product/${o.id}`} 
                className='w-full py-2.5 text-center border border-dark/20 hover:border-dark hover:bg-dark hover:text-white rounded-md font-medium text-dark transition-all duration-200'
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}

      {items.length === 0 && (
        <div className='col-span-full border border-dark/20 rounded-2xl p-12 text-center bg-white'>
          <h3 className='text-2xl font-bold text-dark'>No results found</h3>
          <p className='mt-2 text-gray-600'>Try adjusting your filters to find what you're looking for.</p>
        </div>
      )}
    </div>
  )
}

export default OfferingsResultsList

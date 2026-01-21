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
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
      {items.map((o) => (
        <div 
          key={o.id} 
          className='group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col'
        >
          {/* Image Container */}
          <Link href={`/product/${o.id}`} className='relative overflow-hidden bg-gradient-to-b from-gray-50 to-white p-6'>
            <div className='relative w-full aspect-square flex items-center justify-center'>
              <ResponsiveImage
                src={`/images/${o.image_url}`}
                alt={o.name}
                width={280}
                height={280}
                className='object-contain group-hover:scale-105 transition-transform duration-500'
              />
            </div>
            {o.isSoldOut ? (
              <span className='absolute top-4 right-4 px-3 py-1.5 rounded-full bg-dark text-white text-xs font-bold uppercase tracking-wide'>
                Sold Out
              </span>
            ) : o.availableBags !== null && (
              <span className='absolute top-4 right-4 px-3 py-1.5 rounded-full bg-green-600 text-white text-xs font-bold uppercase tracking-wide'>
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
              <span className='px-2.5 py-1 bg-primary rounded-full text-xs font-medium text-dark'>
                {o.specifications.processingMethod}
              </span>
              <span className='px-2.5 py-1 bg-primary rounded-full text-xs font-medium text-dark'>
                {o.altitude}
              </span>
              <span className='px-2.5 py-1 bg-accent/10 rounded-full text-xs font-semibold text-accent'>
                {o.specifications.cupScore} pts
              </span>
            </div>

            {/* Spacer to push button to bottom */}
            <div className='flex-1 min-h-4'></div>

            {/* Actions */}
            <div className='mt-4 flex flex-col gap-2'>
              {showActions && (
                <button
                  onClick={() => onRequestQuote?.(o)}
                  className='w-full py-3 bg-accent hover:bg-dark text-white hover:text-primary border border-accent hover:border-dark rounded-lg font-bold transition-all duration-200'
                >
                  {o.isSoldOut ? 'JOIN WAITLIST' : 'GET A QUOTE'}
                </button>
              )}
              <Link 
                href={`/product/${o.id}`} 
                className='w-full py-2.5 text-center border border-dark/20 hover:border-dark hover:bg-dark hover:text-white rounded-lg font-medium text-dark transition-all duration-200'
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

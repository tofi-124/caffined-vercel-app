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
    <div className='flex flex-col gap-6 w-full'>
      {items.map((o) => (
        <div key={o.id} className='border border-dark rounded-md p-6 bg-primary'>
          <div className='flex flex-col md:flex-row gap-6 items-start'>
            <div className='w-full md:w-40 flex justify-center'>
              <ResponsiveImage
                src={`/images/${o.image_url}`}
                alt={o.name}
                width={140}
                height={180}
                className='object-contain'
              />
            </div>

            <div className='flex-1'>
              <Link href={`/product/${o.id}`} className='hover:opacity-90'>
                <h3 className='text-2xl font-extrabold text-dark break-words'>{o.name}</h3>
              </Link>
              {o.isSoldOut && (
                <div className='mt-2 flex flex-wrap items-center gap-2'>
                  <span className='inline-flex items-center px-3 py-1 rounded-md bg-dark text-primary border border-dark text-xs font-bold'>
                    SOLD OUT
                  </span>
                  <span className='text-sm text-gray-700'>Sold out - now accepting inquiries for the 2026 crop only.</span>
                </div>
              )}
              <p className='mt-2'>{o.desc}</p>

              <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700'>
                <div><span className='font-bold'>Grade:</span> {o.specifications.grade}</div>
                <div><span className='font-bold'>Process:</span> {o.specifications.processingMethod}</div>
                <div><span className='font-bold'>Crop Year:</span> {o.specifications.cropYear}</div>
                <div><span className='font-bold'>Screen:</span> {o.specifications.screenSize}</div>
                <div><span className='font-bold'>Cup Score:</span> {o.specifications.cupScore}</div>
              </div>

              <div className='mt-4'>
                <Link href={`/product/${o.id}`} className='underline font-bold'>
                  VIEW DETAILS
                </Link>
              </div>
            </div>

            {showActions && (
              <div className='w-full md:w-56 flex md:flex-col gap-3 md:items-end'>
                <button
                  onClick={() => onRequestQuote?.(o)}
                  className='px-6 py-3 bg-dark hover:bg-primary text-primary hover:text-dark border border-dark rounded-md font-bold whitespace-nowrap'
                >
                  {o.isSoldOut ? 'JOIN ALLOCATION LIST' : 'GET A QUOTE'}
                </button>
              </div>
            )}
          </div>
        </div>
      ))}

      {items.length === 0 && (
        <div className='border border-dark rounded-md p-8 text-center'>
          <h3 className='text-2xl font-extrabold text-dark'>No results</h3>
          <p className='mt-2'>Try adjusting your filters.</p>
        </div>
      )}
    </div>
  )
}

export default OfferingsResultsList

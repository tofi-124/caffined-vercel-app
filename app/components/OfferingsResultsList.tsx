import Link from 'next/link'
import ResponsiveImage from './ResponsiveImage'
import QuickSampleButton from './QuickSampleButton'
import type { Offering } from '../data/offerings'

type Props = {
  items: Offering[]
}

const OfferingsResultsList = ({ items }: Props) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full'>
      {items.map((o) => (
        <div
          key={o.id}
          className={`group rounded-3xl overflow-hidden transition-[box-shadow,border-color] duration-500 flex flex-col ${
            o.isFeatured
              ? 'bg-gradient-to-b from-amber-50/60 to-white shadow-xl shadow-amber-200/30 hover:shadow-2xl hover:shadow-amber-300/40 border-2 border-amber-400 hover:border-amber-500 ring-1 ring-amber-200/50'
              : 'bg-white shadow-lg hover:shadow-2xl border-2 border-[#1e3a5f] hover:border-accent'
          }`}
        >
        <Link href={`/product/${o.id}`} className='flex flex-col flex-1'>
          {/* Image Container with elegant overlay */}
          <div className={`relative overflow-hidden ${
            o.isFeatured
              ? 'bg-gradient-to-br from-amber-50 via-stone-50 to-white'
              : 'bg-gradient-to-br from-stone-100 via-stone-50 to-white'
          }`}>
            <div className='relative w-full aspect-[4/3]'>
              <ResponsiveImage
                src={`/images/${o.image_url}`}
                alt={o.name}
                fill
                objectFit='cover'
                className='group-hover:scale-110 transition-transform duration-700 ease-out'
                sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                quality={60}
              />
            </div>
            
            {/* Status badge */}
            {o.isContracted ? (
              <span className='absolute top-4 left-4 px-3 py-1.5 rounded-full bg-blue-600/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider'>
                Contracted
              </span>
            ) : o.isFeatured ? (
              <span className='absolute top-4 left-4 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider shadow-md shadow-amber-300/40'>
                ★ Signature Lot
              </span>
            ) : o.isSoldOut ? (
              <span className='absolute top-4 left-4 px-3 py-1.5 rounded-full bg-dark/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider'>
                Future Lot
              </span>
            ) : o.availableBags !== null && (
              <span className='absolute top-4 left-4 px-3 py-1.5 rounded-full bg-emerald-600/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider'>
                Current Lots · {o.availableBags} bags
              </span>
            )}

            {/* Processing method badge */}
            {o.specifications.processingMethod && (
              <span className='absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-dark text-[10px] font-bold uppercase tracking-wider border border-gray-200/50'>
                {o.specifications.processingMethod}
              </span>
            )}
          </div>

          {/* Content Container */}
          <div className='flex flex-col flex-1 p-6'>
            {/* Region label */}
            <div className='flex items-center gap-2 mb-2'>
              <span className={`text-[11px] font-semibold uppercase tracking-widest ${o.isFeatured ? 'text-amber-600' : 'text-accent'}`}>
                {o.region}
              </span>
              {o.subRegion && (
                <>
                  <span className='text-gray-300'>·</span>
                  <span className='text-[11px] font-medium uppercase tracking-wide text-gray-500'>
                    {o.subRegion}
                  </span>
                </>
              )}
            </div>

            {/* Title */}
            <h3 className='text-lg font-bold text-dark group-hover:text-accent transition-colors duration-300 line-clamp-2 leading-snug'>
              {o.name}
            </h3>

            {/* Producer (featured lots only) */}
            {o.isFeatured && o.producer && (
              <p className='text-xs font-medium text-amber-700 mt-1'>
                {o.producer}
              </p>
            )}

            {/* Specs grid */}
            <div className='mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-xs'>
              {o.specifications.grade && (
                <div className='flex flex-col'>
                  <span className='text-gray-500 uppercase tracking-wide text-[10px] font-medium'>Grade</span>
                  <span className='text-dark font-semibold'>{o.specifications.grade}</span>
                </div>
              )}
              {o.specifications.cupScore && (
                <div className='flex flex-col'>
                  <span className='text-gray-500 uppercase tracking-wide text-[10px] font-medium'>Cup Score</span>
                  <span className='text-accent font-bold'>{o.specifications.cupScore} pts</span>
                </div>
              )}
              {o.altitude && (
                <div className='flex flex-col col-span-2'>
                  <span className='text-gray-500 uppercase tracking-wide text-[10px] font-medium'>Altitude</span>
                  <span className='text-dark font-semibold'>{o.altitude}</span>
                </div>
              )}
              {o.variety && (
                <div className='flex flex-col col-span-2'>
                  <span className='text-gray-500 uppercase tracking-wide text-[10px] font-medium'>Variety</span>
                  <span className='text-dark font-semibold line-clamp-1'>{o.variety}</span>
                </div>
              )}
            </div>

            {/* Flavor profile */}
            {o.flavorNotes.length > 0 && (
              <div className='mt-4 pt-4 border-t border-gray-300'>
                <span className='text-gray-500 uppercase tracking-wide text-[10px] font-medium block mb-2'>Cup Profile</span>
                <p className='text-sm text-gray-600 leading-relaxed line-clamp-2'>
                  {o.flavorNotes.join(', ')}
                </p>
              </div>
            )}

            {/* Spacer */}
            <div className='flex-1 min-h-3'></div>
          </div>
        </Link>

        {/* Shared footer row - outside the Link so button doesn't trigger navigation */}
        <div className='px-6 pb-5 pt-4 border-t border-gray-300 flex items-center justify-between'>
          {!o.isSoldOut && o.pricing.sampleOptions?.length > 0 ? (
            <QuickSampleButton
              productId={o.id}
              productName={o.name}
              sampleOptions={o.pricing.sampleOptions}
              image_url={o.image_url}
            />
          ) : (
            <span />
          )}
          <Link
            href={`/product/${o.id}`}
            className='inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all duration-300'
          >
            Lot Information
            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </Link>
        </div>
        </div>
      ))}

      {items.length === 0 && (
        <div className='col-span-full border border-gray-200 rounded-3xl p-16 text-center bg-white'>
          <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center'>
            <svg className='w-8 h-8 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
            </svg>
          </div>
          <h3 className='text-xl font-bold text-dark'>No coffees found</h3>
          <p className='mt-2 text-gray-500'>Try adjusting your filters to discover more offerings.</p>
        </div>
      )}
    </div>
  )
}

export default OfferingsResultsList

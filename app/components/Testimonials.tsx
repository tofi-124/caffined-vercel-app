"use client"
import { useState, useEffect, useCallback } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { HiPause, HiPlay } from 'react-icons/hi2'

type Partner = {
  placeAndLocation: string
  lang?: string
}

const PartnerCard = ({ placeAndLocation, lang }: Partner) => {
  const [placePart, ...locationParts] = placeAndLocation.split(',')
  const place = placePart?.trim()
  const location = locationParts.join(',').trim()

  return (
    <div className='flex flex-col items-center justify-center px-8 md:px-20 pb-6'>
      <div className='mt-6 border-t pt-6 border-primary w-full sm:w-2/3 md:w-1/2 flex items-center justify-center'>
        <h3 className='text-center text-2xl font-extrabold text-primary' {...(lang ? { lang, dir: 'rtl' } : {})}>
          {location ? (
            <span className='flex flex-col items-center'>
              <span>{place || placeAndLocation}</span>
              <span className='mt-2 inline-flex items-center gap-1 text-base font-semibold text-primary'>
                <FaMapMarkerAlt />
                <span>{location}</span>
              </span>
            </span>
          ) : (
            placeAndLocation
          )}
        </h3>
      </div>
    </div>
  )
}

const partners: Partner[] = [
  { placeAndLocation: 'Algrano, Switzerland' },
  { placeAndLocation: 'Beyco, Netherlands' },
  { placeAndLocation: 'Coffee Exchange, China' },
  { placeAndLocation: 'Crop to Cup, USA' },
  { placeAndLocation: 'Sikupi, Indonesia' },
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % partners.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + partners.length) % partners.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next, isPaused])

  return (
    <section
      id='partners-section'
      className='pt-16 pb-12 flex flex-col items-center justify-center bg-dark text-primary overflow-x-hidden min-h-[320px]'
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription='carousel'
      aria-label='Global coffee import partners'
    >
      <div className='mb-6 text-center'>
        <h2 className='text-2xl md:text-3xl leading-tight text-primary font-bold tracking-wide'>
          OUR GLOBAL COFFEE IMPORT PARTNERS
        </h2>
      </div>

      <div className='relative w-full max-w-5xl px-4 sm:px-6 md:w-4/5 md:px-0'>
        <div className='relative flex items-center justify-center py-4 min-h-[120px]'>
          <button
            onClick={prev}
            aria-label='Previous partner'
            className='absolute top-1/2 left-0 md:left-[-35px] z-10 -translate-y-1/2 cursor-pointer rounded-md bg-primary border border-dark text-dark hover:bg-gray-100 transition-colors p-1.5 sm:p-2'
          >
            <AiOutlineLeft className='w-5 h-5 sm:w-7 sm:h-7' />
          </button>

          <div className='w-full overflow-hidden' aria-live='polite'>
            <div
              className='flex transition-transform duration-500 ease-in-out'
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {partners.map((partner, idx) => (
                <div key={idx} className='w-full flex-shrink-0'>
                  <PartnerCard {...partner} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            aria-label='Next partner'
            className='absolute top-1/2 right-0 md:right-[-35px] z-10 -translate-y-1/2 cursor-pointer rounded-md bg-primary border border-dark text-dark hover:bg-gray-100 transition-colors p-1.5 sm:p-2'
          >
            <AiOutlineRight className='w-5 h-5 sm:w-7 sm:h-7' />
          </button>
        </div>

        {/* Dots indicator + Pause/Play */}
        <div className='flex items-center justify-center gap-3 mt-2'>
          <div className='flex gap-2'>
            {partners.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to partner ${idx + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === current ? 'bg-primary scale-125' : 'bg-primary/40 hover:bg-primary/60'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setIsPaused(!isPaused)}
            className='p-1.5 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors'
            aria-label={isPaused ? 'Play partner carousel' : 'Pause partner carousel'}
          >
            {isPaused ? (
              <HiPlay className='text-sm text-primary/60' />
            ) : (
              <HiPause className='text-sm text-primary/60' />
            )}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

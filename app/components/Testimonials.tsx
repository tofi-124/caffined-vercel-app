"use client"
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa'
import Carousel from 'better-react-carousel';

type Partner = {
  placeAndLocation: string
}

const PartnerCard = ({ placeAndLocation }: Partner) => {
  const [placePart, ...locationParts] = placeAndLocation.split(',')
  const place = placePart?.trim()
  const location = locationParts.join(',').trim()

  return (
    <div className='flex flex-col items-center justify-center px-8 md:px-20 pb-12'>
      <div className='mt-12 border-t pt-10 border-primary w-full sm:w-2/3 md:w-1/2 flex items-center justify-center'>
        <h3 className='text-center text-2xl font-extrabold text-primary'>
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
      
const Testimonials = () => {
  const partners: Partner[] = [
    { placeAndLocation: 'CRYSTAL GENERAL TRADING LLC, UAE' },
    { placeAndLocation: 'AL NAMLAH AND FOR TRADING AND SERVICES, JEDDAH' },
    { placeAndLocation: 'HONGKONG NATURAL RESOURCES TRADING, HONGKONG' },
    { placeAndLocation: 'YIWU IMTON YOUPING INTERNATIONAL TRADE, CHINA' },
    { placeAndLocation: 'ZHONG YUN SUPPLY CHAIN MANAGEMENT SDN BHD, CHINA' },
  ]

  return (
    <section id='partners-section' className='pt-32 pb-16 flex flex-col items-center justify-center bg-dark text-primary overflow-x-hidden'>
      <div className='mb-12 text-center'>
        <h2 className='text-5xl leading-tight text-primary font-bold'>
          VALUED RELATIONSHIPS
        </h2>
      </div>

      <div className='relative w-full max-w-5xl px-6 md:w-4/5 md:px-0'>
        <Carousel
          rows={1}
          cols={1}
          gap={10}
          autoplay={5000}
          loop
          containerStyle={{
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            padding: '2rem 0',
          }}
          arrowLeft={
            <AiOutlineLeft
              size={50}
              className='absolute top-1/2 left-2 md:left-[-35px] z-10 -translate-y-1/2 cursor-pointer rounded-md bg-primary border border-dark text-2xl text-dark hover:bg-gray-100 transition-colors'
            />
          }
          arrowRight={
            <AiOutlineRight
              size={50}
              className='absolute top-1/2 right-2 md:right-[-35px] z-10 -translate-y-1/2 cursor-pointer rounded-md bg-primary border border-dark text-2xl text-dark hover:bg-gray-100 transition-colors'
            />
          }
        >
          {partners.map((partner, ind) => (
            <Carousel.Item key={ind}>
              <PartnerCard {...partner} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default Testimonials

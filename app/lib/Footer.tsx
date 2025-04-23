import Image from 'next/image'
import React from 'react'
import Link from 'next/link'


type Props = {
  image_url: string
}

// Updated to show Ethiopian coffee farms/production
const images = [
  'insta-1.webp',
  'insta-2.webp',
  'insta-3.webp',
  'insta-4.webp',
  'insta-5.webp',
  'insta-6.webp',
]

const InstaImage = ({image_url}: Props) => {
  return (
    <Image src={`/images/${image_url}`} alt={`${image_url}`} height={317} width={317}/>
  )
}

const InstaImages = () => {
  return (
    <div id="insta-images" className='mb-16 flex flex-wrap justify-center items-center overflow-hidden'>
      {images.map((image, ind) => ( <InstaImage key={ind} image_url={image} /> ))}
    </div>
  )
}


const Footer = () => {
  return (
    <footer className='bg-dark text-primary'>
      <div id="instaimages">
        <div className='flex items-center'>
          <InstaImages />
        </div>
      </div>
      <div className='flex max-sm:flex-col mx-12 lg:mx-48 my-12 justify-between items-center md:items-start'>
        <div id="address" className='mx-4 text-center md:text-left'>
          <h3 className=' font-extrabold text-2xl'>
          CONTACT US
          </h3>
          <ul>
            <li className='my-3'>
              <p>
                Ethio Coffee, Ontario, Canada
              </p>
            </li>
            <li className='my-3'>
              <p>
                info@ethiocoffee.ca
              </p>
            </li>
            <li className='my-3'>
              <p>
                +1 (647) 555-1212
              </p>
            </li>
          </ul>
        </div>

        <div id="heading" className='flex flex-col items-center'>
          <Image 
            src='/images/cafiend-logo-dark.svg' 
            alt='ethio-coffee-logo' 
            width={160} 
            height={50} 
            className="object-contain" 
            style={{ filter: 'brightness(1.05)' }} 
          />
          <p className='my-6 text-center'>
            Premium Ethiopian Coffee for Canadian Wholesale Partners
          </p>
        </div>
        
        <div id="timings" className='text-center md:text-right'>
          <h3 className='font-extrabold text-2xl'> 
            BUSINESS HOURS
          </h3>
          <ul>
            <li className='my-3'>
              <p>
                Monday-Friday: 09:00-17:00
              </p> 
            </li>
            <li className='my-3'>
              <p>
                Call anytime to schedule a tasting
              </p>
            </li>
            <li className='my-3'>
              <p>
                <Link href="/wholesale-inquiry" className='underline hover:text-gray-300'>
                  Request wholesale information
                </Link>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className='h-0.5 w-full bg-white/20' />
        
      <p className='py-6 text-center'>
      © 2025 Ethio Coffee | Premium Ethiopian Coffee Importers | Ontario, Canada
      </p>
    </footer>
  )
}

export default Footer

"use client"
import ResponsiveImage from '../components/ResponsiveImage'
import { FaInstagram } from 'react-icons/fa'


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

// Define fixed dimensions for Instagram images
const INSTA_IMAGE_WIDTH = 500;
const INSTA_IMAGE_HEIGHT = 482;

const InstaImage = ({image_url}: Props) => {
  return (
    <div className="relative w-[317px] h-[317px] overflow-hidden">
      <ResponsiveImage 
        src={`/images/${image_url}`} 
        alt={`Ethiopian coffee image ${image_url}`} 
        width={INSTA_IMAGE_WIDTH}
        height={INSTA_IMAGE_HEIGHT}
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%'
        }}
      />
    </div>
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
      <div className='mx-auto my-12 flex max-w-6xl flex-col items-center justify-between gap-12 px-6 md:flex-row md:items-start'>
        <div id="address" className='w-full text-center md:w-1/3 md:text-left'>
          <h3 className=' font-extrabold text-2xl'>
          CONTACT US
          </h3>
          <ul>
            <li className='my-3'>
              <address className='not-italic'>
                Ethio Coffee Import and Export PLC, Lideta, Addis Ababa, Ethiopia
              </address>
            </li>
            <li className='my-3'>
              <a
                href="mailto:info@ethiocoffee.et"
                className="hover:text-primary/80 transition-colors"
                aria-label="Email Ethio Coffee at info@ethiocoffee.et"
              >
                info@ethiocoffee.et
              </a>
            </li>
          </ul>
        </div>

        <div id="heading" className='flex w-full flex-col items-center md:w-1/3'>
          <div className='relative w-44 h-14'>
            <ResponsiveImage
              src='/images/new-logo.png'
              alt='Ethio Coffee logo'
              fill
              sizes='200px'
              className='w-44 h-14'
              objectFit='contain'
            />
          </div>
          <p className='my-6 text-center'>
            Premium Ethiopian Coffee for Partners Worldwide
          </p>
          
          {/* Instagram Link */}
          <a 
            href="https://instagram.com/ethiocoffee.et" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-2 hover:text-primary/80 transition-colors"
            aria-label="Follow us on Instagram @ethiocoffee.et"
          >
            <FaInstagram className="text-2xl" />
            <span>@ethiocoffee.et</span>
          </a>
        </div>
        
        <div id="timings" className='w-full text-center md:w-1/3 md:text-right'>
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
                International Business Hours
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className='h-0.5 w-full bg-white/20' />
        
      <div className='py-6 text-center'>
        <p className="flex items-center justify-center gap-3">
          © 2026 Ethio Coffee Import and Export PLC. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

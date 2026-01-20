"use client"
import ResponsiveImage from '../components/ResponsiveImage'
import { FaEnvelope, FaInstagram } from 'react-icons/fa'


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
    <div className='relative w-full aspect-square overflow-hidden'>
      <ResponsiveImage
        src={`/images/${image_url}`}
        alt={`Ethiopian coffee image ${image_url}`}
        fill
        objectFit='cover'
        sizes='(min-width: 1024px) 16.66vw, (min-width: 768px) 33vw, 100vw'
      />
    </div>
  )
}

const InstaImages = () => {
  return (
    <div id='insta-images' className='mb-16 w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6'>
      {images.map((image, ind) => ( <InstaImage key={ind} image_url={image} /> ))}
    </div>
  )
}


const Footer = () => {
  return (
    <footer className='bg-dark text-primary'>
      <div id="instaimages">
        <InstaImages />
      </div>
      <div className='mx-auto my-12 max-w-6xl px-6'>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-3 md:items-start'>
        <div id="address" className='flex flex-col text-center md:text-left'>
          <h3 className='text-2xl font-extrabold tracking-tight'>
          CONTACT US
          </h3>
          <ul className='mt-4 space-y-4 text-primary/90'>
            <li>
              <a
                href="mailto:info@ethiocoffee.et"
                className="inline-flex items-center gap-2 underline underline-offset-4 hover:text-primary/80 transition-colors"
                aria-label="Email Ethio Coffee at info@ethiocoffee.et"
              >
                <FaEnvelope className="text-2xl" />
                info@ethiocoffee.et
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/ethiocoffee.et"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 underline underline-offset-4 hover:text-primary/80 transition-colors"
                aria-label="Follow us on Instagram @ethiocoffee.et"
              >
                <FaInstagram className="text-2xl" />
                <span>@ethiocoffee.et</span>
              </a>
            </li>
          </ul>
        </div>

        <div id="locations" className='flex flex-col text-center md:text-left'>
          <h3 className='text-2xl font-extrabold tracking-tight'>
            OUR OFFICE LOCATIONS
          </h3>
          <ul className='mt-4 space-y-4 text-primary/90'>
            <li>
              <p className='text-xs uppercase tracking-widest text-primary/70'>Ethiopia</p>
              <address className='not-italic font-medium text-primary'>
                Ethio Coffee Import and Export PLC
                <br />
                Yesak Building, 3rd Floor, Office 301
                <br />
                Lideta, Addis Ababa, Ethiopia
              </address>
            </li>
            <li>
              <p className='text-xs uppercase tracking-widest text-primary/70'>Canada</p>
              <address className='not-italic font-medium text-primary'>
                Adelaide St W & Spadina Ave
                <br />
                Toronto, Canada
              </address>
            </li>
          </ul>
        </div>
        
        <div id="timings" className='flex flex-col text-center md:text-left'>
          <h3 className='text-2xl font-extrabold tracking-tight'> 
            BUSINESS HOURS
          </h3>
          <ul className='mt-4 space-y-4 text-primary/90'>
            <li>
              <p className='text-xs uppercase tracking-widest text-primary/70'>Office</p>
              <address className='not-italic font-medium text-primary'>
                Monday - Friday
                <br />
                09:00 - 17:00
              </address>
            </li>
            <li>
              <p className='text-xs uppercase tracking-widest text-primary/70'>Notes</p>
              <address className='not-italic font-medium text-primary'>
                International business hours available
              </address>
            </li>
          </ul>
        </div>
      </div>
      </div>
      <div className='h-0.5 w-full bg-white/20' />
        
      <div className='py-8 text-center'>
        <p className="flex items-center justify-center gap-3 text-primary/90">
          © 2026 Ethio Coffee Import and Export PLC. All rights reserved.
        </p>
        <p className="mt-3 flex items-center justify-center gap-1 text-sm text-white/75">
          <span>made by</span>
          <a
            href="https://github.com/nusu97"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-primary/80 transition-colors"
          >
            nusu97
          </a>
          <span>with ❤️</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer

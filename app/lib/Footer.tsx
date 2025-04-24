"use client"
import React from 'react'
import Link from 'next/link'
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
      <div className='flex max-sm:flex-col mx-12 lg:mx-48 my-12 justify-between items-center md:items-start'>
        <div id="address" className='mx-4 text-center md:text-left'>
          <h3 className=' font-extrabold text-2xl'>
          CONTACT US
          </h3>
          <ul>
            <li className='my-3'>
              <p>
                Ethio Coffee, Global Headquarters
              </p>
            </li>
            <li className='my-3'>
              <p>
                info@ethiocoffee.et
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
          <ResponsiveImage 
            src='/images/cafiend-logo-dark.svg' 
            alt='ethio-coffee-logo'
            width={160}
            height={50}
            style={{ filter: 'brightness(1.05)' }}
            className="object-contain"
          />
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
                International Business Hours
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className='h-0.5 w-full bg-white/20' />
        
      <div className='py-6 text-center'>
        <p className="flex items-center justify-center gap-3">
          © 2025 Ethio Coffee | Premium Ethiopian Coffee Exporters Worldwide
          <a 
            href="https://instagram.com/ethiocoffee.et" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center hover:text-primary/80 transition-colors"
            aria-label="Follow Ethio Coffee on Instagram"
          >
            <FaInstagram className="text-xl" />
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer

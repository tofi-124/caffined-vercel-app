"use client"
import ResponsiveImage from '../components/ResponsiveImage'
import { FaEnvelope, FaInstagram } from 'react-icons/fa'
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
                href="mailto:hello@ethiocoffee.co"
                className="inline-flex items-center gap-2 underline underline-offset-4 hover:text-primary/80 transition-colors"
                aria-label="Email Ethio Coffee at hello@ethiocoffee.co"
              >
                <FaEnvelope className="text-2xl" />
                hello@ethiocoffee.co
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/ethiocoffee.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 underline underline-offset-4 hover:text-primary/80 transition-colors"
                aria-label="Follow us on Instagram @ethiocoffee.co"
              >
                <FaInstagram className="text-2xl" />
                <span>@ethiocoffee.co</span>
              </a>
            </li>
          </ul>
        </div>

        <div id="shop-links" className='flex flex-col text-center md:text-left'>
          <h3 className='text-2xl font-extrabold tracking-tight'>
            SHOP
          </h3>
          <ul className='mt-4 space-y-2 text-primary/90'>
            <li>
              <Link href="/shop" className='hover:text-primary/80 transition-colors'>All Coffee</Link>
            </li>
            <li>
              <Link href="/shop?category=single-origin" className='hover:text-primary/80 transition-colors'>Single Origin</Link>
            </li>
            <li>
              <Link href="/shop?category=blend" className='hover:text-primary/80 transition-colors'>Blends</Link>
            </li>
            <li>
              <Link href="/shop?category=espresso" className='hover:text-primary/80 transition-colors'>Espresso</Link>
            </li>
            <li>
              <Link href="/shop?category=decaf" className='hover:text-primary/80 transition-colors'>Decaf</Link>
            </li>
          </ul>
        </div>
        
        <div id="info" className='flex flex-col text-center md:text-left'>
          <h3 className='text-2xl font-extrabold tracking-tight'> 
            INFO
          </h3>
          <ul className='mt-4 space-y-2 text-primary/90'>
            <li>
              <Link href="/about" className='hover:text-primary/80 transition-colors'>About Us</Link>
            </li>
            <li>
              <Link href="/contact-us" className='hover:text-primary/80 transition-colors'>Contact</Link>
            </li>
            <li>
              <Link href="/terms" className='hover:text-primary/80 transition-colors'>Terms & Conditions</Link>
            </li>
            <li>
              <p className='text-xs mt-4 text-primary/70'>
                Free shipping on orders over $75 CAD<br />
                Ships from Toronto, Canada
              </p>
            </li>
          </ul>
        </div>
      </div>
      </div>
      <div className='h-0.5 w-full bg-white/20' />
        
      <div className='py-8 text-center'>
        <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-primary/90">
          © 2026 Ethio Coffee Company Inc. All rights reserved.
          <span className='text-primary/50'>|</span>
          <Link
            href='/shop'
            className='underline underline-offset-4 hover:text-primary/80 transition-colors'
          >
            Shop
          </Link>
          <span className='text-primary/50'>|</span>
          <Link
            href='/about'
            className='underline underline-offset-4 hover:text-primary/80 transition-colors'
          >
            About
          </Link>
          <span className='text-primary/50'>|</span>
          <Link
            href='/contact-us'
            className='underline underline-offset-4 hover:text-primary/80 transition-colors'
          >
            Contact
          </Link>
          <span className='text-primary/50'>|</span>
          <Link
            href='/terms'
            className='underline underline-offset-4 hover:text-primary/80 transition-colors'
          >
            Terms
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer

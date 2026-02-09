import ResponsiveImage from '../components/ResponsiveImage'
import { FaEnvelope, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'

// Updated to show Ethiopian coffee farms/production
const images = [
  { src: 'insta-1.webp', alt: 'Ethiopian green coffee beans drying on raised beds' },
  { src: 'insta-2.webp', alt: 'Specialty coffee harvest in Sidama, Ethiopia' },
  { src: 'insta-3.webp', alt: 'Washed Ethiopian coffee processing at Yirgacheffe station' },
  { src: 'insta-4.webp', alt: 'Grade 1 Ethiopian green coffee ready for export' },
  { src: 'insta-5.webp', alt: 'Coffee cherry picking in Guji, Ethiopia' },
  { src: 'insta-6.webp', alt: 'Ethio Coffee Export cupping session for quality control' },
]

const InstaImage = ({image_url, alt}: {image_url: string; alt: string}) => {
  return (
    <div className='relative w-full aspect-square overflow-hidden'>
      <ResponsiveImage
        src={`/images/${image_url}`}
        alt={alt}
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
      {images.map((image, ind) => ( <InstaImage key={ind} image_url={image.src} alt={image.alt} /> ))}
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
            OUR OFFICE
          </h3>
          <ul className='mt-4 space-y-4 text-primary/90'>
            <li>
              <p className='text-xs uppercase tracking-widest text-primary/70'>Ethiopia (Headquarters)</p>
              <address className='not-italic font-medium text-primary'>
                Ethio Coffee Export PLC
                <br />
                Yesak Building, 3rd Floor, Office 301
                <br />
                Lideta, Addis Ababa, Ethiopia
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

      <p className='py-6 text-center text-sm text-primary/70 max-w-3xl mx-auto leading-relaxed'>
        Ethio Coffee Export PLC is a family-owned Ethiopian coffee exporter shipping specialty and commercial grade green coffee beans to roasters, importers, and distributors worldwide.
      </p>

      <div className='py-8 text-center'>
        <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-primary/90">
          © 2026 Ethio Coffee Export PLC. All rights reserved.
          <span className='text-primary/50'>|</span>
          <Link
            href='/about'
            className='underline underline-offset-4 hover:text-primary/80 transition-colors'
          >
            About Us
          </Link>
          <span className='text-primary/50'>|</span>
          <Link
            href='/offerings'
            className='underline underline-offset-4 hover:text-primary/80 transition-colors'
          >
            Offerings
          </Link>
          <span className='text-primary/50'>|</span>
          <Link
            href='/contact-us'
            className='underline underline-offset-4 hover:text-primary/80 transition-colors'
          >
            Contact Us
          </Link>
          <span className='text-primary/50'>|</span>
          <Link
            href='/insights'
            className='underline underline-offset-4 hover:text-primary/80 transition-colors'
          >
            Insights
          </Link>
          <span className='text-primary/50'>|</span>
          <Link
            href='/ethiopia-coffee-export-news'
            className='underline underline-offset-4 hover:text-primary/80 transition-colors'
          >
            News
          </Link>
          <span className='text-primary/50'>|</span>
          <Link
            href='/ordering-info'
            className='underline underline-offset-4 hover:text-primary/80 transition-colors'
          >
            How To Buy
          </Link>
          <span className='text-primary/50'>|</span>
          <Link
            href='/ethiopian-coffee-exporter'
            className='underline underline-offset-4 hover:text-primary/80 transition-colors'
          >
            Ethiopian Coffee Exporter
          </Link>
          <span className='text-primary/50'>|</span>
          <Link
            href='/terms'
            className='underline underline-offset-4 hover:text-primary/80 transition-colors'
          >
            Terms of Service
          </Link>
        </p>
        <p className="mt-3 flex items-center justify-center gap-1 text-sm text-white/75">
          <span>made by</span>
          <a
            href="mailto:nusey51@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-primary/80 transition-colors"
          >
            nusu.m
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer

import ResponsiveImage from '../components/ResponsiveImage'
import Image from 'next/image'
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
    <>
      {/* Upper footer — navy background: instagram, contact, office, hours */}
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
                href="mailto:coffee@ethiocoffee.co"
                className="inline-flex items-center gap-2 underline underline-offset-4 hover:text-primary/80 transition-colors"
                aria-label="Email Ethio Coffee at coffee@ethiocoffee.co"
              >
                <FaEnvelope className="text-2xl" />
                coffee@ethiocoffee.co
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
    </footer>

      {/* Lower footer — creamy background: links, description, copyright */}
      <div className='bg-primary text-dark'>
        <div className='py-10 max-w-6xl mx-auto px-6'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-sm'>
            <div>
              <h4 className='font-bold text-dark uppercase tracking-widest text-xs mb-4'>Company</h4>
              <ul className='space-y-2 text-dark/70'>
                <li><Link href='/about' className='hover:text-dark transition-colors'>About Us</Link></li>
                <li><Link href='/contact-us' className='hover:text-dark transition-colors'>Contact Us</Link></li>
                <li><Link href='/ordering-info' className='hover:text-dark transition-colors'>How To Buy</Link></li>
                <li><Link href='/terms' className='hover:text-dark transition-colors'>Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className='font-bold text-dark uppercase tracking-widest text-xs mb-4'>Resources</h4>
              <ul className='space-y-2 text-dark/70'>
                <li><Link href='/offerings' className='hover:text-dark transition-colors'>Current Offerings</Link></li>
                <li><Link href='/ethiopian-coffee-exporter' className='hover:text-dark transition-colors'>Ethiopian Coffee Exporter</Link></li>
                <li><Link href='/ethiopian-green-coffee-beans' className='hover:text-dark transition-colors'>Green Coffee Beans</Link></li>
                <li><Link href='/buy-ethiopian-coffee-wholesale' className='hover:text-dark transition-colors'>Buy Wholesale</Link></li>
                <li><Link href='/coffee-grading-ethiopia' className='hover:text-dark transition-colors'>Coffee Grading</Link></li>
                <li><Link href='/organic-ethiopian-coffee-export' className='hover:text-dark transition-colors'>Organic Export</Link></li>
              </ul>
            </div>
            <div>
              <h4 className='font-bold text-dark uppercase tracking-widest text-xs mb-4'>Coffee Origins</h4>
              <ul className='space-y-2 text-dark/70'>
                <li><Link href='/ethiopian-coffee-yirgacheffe' className='hover:text-dark transition-colors'>Yirgacheffe</Link></li>
                <li><Link href='/ethiopian-coffee-sidamo' className='hover:text-dark transition-colors'>Sidamo</Link></li>
                <li><Link href='/ethiopian-coffee-guji' className='hover:text-dark transition-colors'>Guji</Link></li>
                <li><Link href='/ethiopian-coffee-harar' className='hover:text-dark transition-colors'>Harar</Link></li>
                <li><Link href='/ethiopian-coffee-limu' className='hover:text-dark transition-colors'>Limu</Link></li>
                <li><Link href='/ethiopian-coffee-jimma' className='hover:text-dark transition-colors'>Jimma</Link></li>
              </ul>
            </div>
            <div>
              <h4 className='font-bold text-dark uppercase tracking-widest text-xs mb-4'>Journal</h4>
              <ul className='space-y-2 text-dark/70'>
                <li><Link href='/insights' className='hover:text-dark transition-colors'>Insights</Link></li>
                <li><Link href='/ethiopia-coffee-export-news' className='hover:text-dark transition-colors'>News</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className='h-px w-full bg-dark/10' />

        {/* Certification Badges — visible on every page */}
        <div className='py-6 flex items-center justify-center gap-6 flex-wrap px-4'>
          <p className='text-dark/40 text-[10px] uppercase tracking-[0.2em] font-bold w-full text-center'>Licensed & Affiliated</p>
          <Image src='/images/ecta-cert.webp' alt='ECTA certified Ethiopian coffee exporter' width={40} height={40} className='opacity-50 hover:opacity-80 transition-opacity' />
          <Image src='/images/ecx-cert.webp' alt='ECX registered coffee trader' width={40} height={40} className='opacity-50 hover:opacity-80 transition-opacity' />
          <Image src='/images/afca-cert.png' alt='AFCA member' width={40} height={40} className='opacity-50 hover:opacity-80 transition-opacity' />
          <Image src='/images/sca-cert.webp' alt='SCA quality standards' width={40} height={40} className='opacity-50 hover:opacity-80 transition-opacity' />
        </div>

        <div className='h-px w-full bg-dark/10' />

        <p className='py-6 text-center text-sm text-dark/50 max-w-3xl mx-auto leading-relaxed px-4'>
          Ethio Coffee Export PLC is a family-owned Ethiopian coffee exporter shipping specialty and commercial grade green coffee beans to roasters, importers, and distributors worldwide.
        </p>

        <div className='pb-8 text-center'>
          <p className="text-sm text-dark/50">
            © 2026 Ethio Coffee Export PLC. All rights reserved.
          </p>
          <p className="mt-3 flex items-center justify-center gap-1 text-sm text-dark/40">
            <span>made by</span>
            <a
              href="mailto:nusey51@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-dark/60 transition-colors"
            >
              nusu.m
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer

'use client'

import ResponsiveImage from '../components/ResponsiveImage'
import AutoScrollTo from '../components/AutoScrollTo'
import Link from 'next/link'
import { FaLeaf, FaMountain, FaHeart, FaCoffee } from 'react-icons/fa'

const About = () => {
  return (
    <main id='about-main' className='bg-primary'>
      <AutoScrollTo targetId='about-content' />
      <header className='bg-[url(/images/about-us.webp)] w-full h-[350px] flex flex-col items-center justify-center relative'>
        <div className='absolute inset-0 bg-black/40'></div>
        <h1 className='text-5xl font-bold text-primary relative z-10'>ABOUT US</h1>
        <p className='text-primary/90 mt-3 relative z-10'>The story behind your cup</p>
      </header>
      
      <section id='about-content' className='container mx-auto px-4'>
        <div className='flex max-lg:flex-col items-center justify-center'>
          <div className='lg:w-1/2'>
            <h2 className='py-12 lg:py-24 text-5xl font-extrabold leading-tight text-dark'>
              FROM ETHIOPIAN HIGHLANDS TO YOUR CUP
            </h2>
          </div>
          <div className='lg:w-1/2 py-2 lg:py-24 lg:px-12 lg:border-l-2 border-black'>
            <p className='my-2'>
              Ethio Coffee brings you premium Ethiopian coffee, roasted fresh and delivered directly to coffee lovers across Canada. We source our beans from the legendary coffee regions of Ethiopia   the birthplace of coffee   and roast them to perfection to bring out their unique flavors.
            </p>
            <p className='my-4'>
              Our family has been in the Ethiopian coffee trade for over 30 years. We know the farmers, the land, and the traditions that make Ethiopian coffee the most celebrated in the world. Now, we're bringing that expertise directly to you.
            </p>

            <h3 className='mt-8 text-3xl font-extrabold text-dark'>What Makes Us Different</h3>
            <ul className='mt-4 list-disc space-y-3 pl-5 font-inconsolata'>
              <li>
                <span className='font-bold'>Direct Sourcing:</span> We work directly with farming communities in Ethiopia, ensuring fair prices for farmers and exceptional quality for you.
              </li>
              <li>
                <span className='font-bold'>Fresh Roasted:</span> Every order is roasted to order, so you receive the freshest coffee possible with peak flavor.
              </li>
              <li>
                <span className='font-bold'>Single Origin Excellence:</span> We specialize in single-origin Ethiopian coffees that showcase the unique terroir of each region.
              </li>
              <li>
                <span className='font-bold'>Ships from Canada:</span> Fast, reliable shipping from our Toronto facility means your coffee arrives fresh.
              </li>
            </ul>
          </div>
        </div>
      </section>   

      {/* Values Section */}
      <section className='bg-dark text-primary py-20'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-extrabold text-center mb-12'>
            OUR COMMITMENT TO QUALITY
          </h2>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='text-center p-6'>
              <div className='w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4'>
                <FaLeaf className='text-2xl text-white' />
              </div>
              <h3 className='text-xl font-bold mb-2'>100% Arabica</h3>
              <p className='text-primary/80'>
                Only the finest Ethiopian Arabica beans, known worldwide for their complex flavors.
              </p>
            </div>
            
            <div className='text-center p-6'>
              <div className='w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4'>
                <FaMountain className='text-2xl text-white' />
              </div>
              <h3 className='text-xl font-bold mb-2'>High Altitude</h3>
              <p className='text-primary/80'>
                Grown at 1,500-2,300m elevation where cooler temperatures develop richer flavors.
              </p>
            </div>
            
            <div className='text-center p-6'>
              <div className='w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4'>
                <FaHeart className='text-2xl text-white' />
              </div>
              <h3 className='text-xl font-bold mb-2'>Ethically Sourced</h3>
              <p className='text-primary/80'>
                Fair prices for farmers, sustainable practices, and long-term community partnerships.
              </p>
            </div>
            
            <div className='text-center p-6'>
              <div className='w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4'>
                <FaCoffee className='text-2xl text-white' />
              </div>
              <h3 className='text-xl font-bold mb-2'>Fresh Roasted</h3>
              <p className='text-primary/80'>
                Roasted in small batches and shipped within days for maximum freshness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Regions */}
      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-extrabold text-center mb-4 text-dark'>
            OUR COFFEE REGIONS
          </h2>
          <p className='text-center text-gray-600 mb-12 max-w-2xl mx-auto'>
            Ethiopia is home to thousands of unique coffee varieties, each with distinct characteristics shaped by their growing region.
          </p>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white rounded-lg shadow-md overflow-hidden'>
              <div className='h-48 bg-dark flex items-center justify-center'>
                <h3 className='text-3xl font-bold text-primary'>YIRGACHEFFE</h3>
              </div>
              <div className='p-6'>
                <p className='text-gray-600 mb-4'>
                  World-famous for its bright, floral character with notes of jasmine, bergamot, and citrus. The most sought-after Ethiopian origin.
                </p>
                <p className='text-sm text-gray-500'>
                  <strong>Tasting Notes:</strong> Jasmine, Lemon, Black Tea, Honey
                </p>
              </div>
            </div>
            
            <div className='bg-white rounded-lg shadow-md overflow-hidden'>
              <div className='h-48 bg-dark flex items-center justify-center'>
                <h3 className='text-3xl font-bold text-primary'>SIDAMO</h3>
              </div>
              <div className='p-6'>
                <p className='text-gray-600 mb-4'>
                  Known for remarkable fruit complexity and balanced sweetness. Natural processing creates berry-forward cups with chocolate undertones.
                </p>
                <p className='text-sm text-gray-500'>
                  <strong>Tasting Notes:</strong> Blueberry, Wine, Dark Chocolate
                </p>
              </div>
            </div>
            
            <div className='bg-white rounded-lg shadow-md overflow-hidden'>
              <div className='h-48 bg-dark flex items-center justify-center'>
                <h3 className='text-3xl font-bold text-primary'>GUJI</h3>
              </div>
              <div className='p-6'>
                <p className='text-gray-600 mb-4'>
                  Rising star of Ethiopian coffee with intense stone fruit aromatics and syrupy sweetness. Produces competition-winning lots.
                </p>
                <p className='text-sm text-gray-500'>
                  <strong>Tasting Notes:</strong> Peach, Apricot, Jasmine, Honeysuckle
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Images Section */}
      <section className='bg-gray-100 py-20'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <ResponsiveImage 
              className='rounded-lg shadow-md w-full' 
              src="/images/about-1.webp" 
              alt="Ethiopian coffee cherries being harvested" 
              width={455} 
              height={300} 
            />
            <ResponsiveImage 
              className='rounded-lg shadow-md w-full' 
              src="/images/about-2.webp" 
              alt="Traditional Ethiopian coffee processing" 
              width={455} 
              height={300} 
            />
            <ResponsiveImage 
              className='rounded-lg shadow-md w-full' 
              src="/images/about-3.webp" 
              alt="Ethiopian coffee farms in the highlands" 
              width={455} 
              height={300} 
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-accent py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-extrabold text-primary mb-4'>
            Ready to Taste the Difference?
          </h2>
          <p className='text-primary/80 mb-8 max-w-2xl mx-auto'>
            Experience authentic Ethiopian coffee, roasted fresh and delivered to your door. Free shipping on orders over $75.
          </p>
          <Link 
            href="/shop"
            className='inline-flex items-center gap-3 bg-primary text-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-white transition-colors shadow-lg hover:shadow-xl'
          >
            Shop Our Coffee
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default About

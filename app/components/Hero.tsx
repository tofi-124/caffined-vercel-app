import Link from 'next/link'
import ResponsiveImage from './ResponsiveImage'

const Hero = () => {
  return (
    <section id='hero' className='relative overflow-hidden pt-20 lg:pt-24 bg-primary' aria-label="Hero section">
      {/* Content */}
      <div className='container relative z-20 mx-auto px-4 py-8 lg:py-12'>
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-12">

        <div id="hero-heading-wrapper" className='mx-auto flex w-full max-w-prose flex-col items-start justify-center lg:mx-0 lg:w-1/2 lg:max-w-none'>
          <h1 className='text-5xl lg:text-6xl leading-tight text-dark font-bold'>
            ETHIO COFFEE
          </h1>
            <p className='text-dark/90 text-sm uppercase tracking-widest mt-3'>
             Your Gateway to Ethiopia’s Finest Specialty Coffee
            </p>

            <div className='mt-6 text-dark lg:pr-20 leading-relaxed space-y-6'>
              <p className='max-w-[65ch]'>
                We are a dedicated Ethiopian coffee exporter founded by two brothers - one rooted in Ethiopia, the other in Canada. This unique partnership allows us to bridge the gap between origin and the global market. We provide importers worldwide with traceable, specialty green coffee sourced directly from our own estates and a network of trusted partner producers. At our core, we combine a deep love for Ethiopian coffee with a commitment to professional service, consistent quality, and transparent communication.
              </p>
            </div>

          <Link href="/offerings" className='
            px-6 py-4 mt-6 w-fit
            bg-accent hover:bg-accent/90 text-white
            border-2 border-accent
            rounded-xl
            font-bold
            transition-all
            shadow-sm hover:shadow-md
         ' aria-label="Check out our coffees">SEE OUR CURRENT LOTS</Link>
        </div>

        <div id="hero-image-wrapper" className='relative flex w-full justify-center lg:w-1/3'>
          <ResponsiveImage 
            src='/images/coffee-pack-1.webp' 
            alt='Speciality Ethiopian coffee packaging featuring specialty grade beans for wholesale partners' 
            width={900}
            height={600}
            className='w-full max-w-[400px]'
            priority={true}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

      </div>
      </div>
    </section>
  )
}

export default Hero

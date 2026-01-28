import Link from 'next/link'
import ResponsiveImage from './ResponsiveImage'

const Hero = () => {
  return (
    <section id='hero' className='min-h-screen bg-dark py-24 lg:py-[7.5rem]' aria-label="Hero section">
      <div className='container mx-auto px-4'>
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-12">

        <div id="hero-heading-wrapper" className='mx-auto flex w-full max-w-prose flex-col items-start justify-center lg:mx-0 lg:w-1/2 lg:max-w-none'>
          <h1 className='text-5xl lg:text-6xl leading-tight text-primary font-bold'>
            ETHIO COFFEE
          </h1>
            <p className='text-primary/90 text-sm uppercase tracking-widest mt-3'>
             From Ethiopian Farms to Global Roasters
            </p>

            <div className='mt-6 text-primary lg:pr-20 leading-relaxed space-y-6'>
              <p className='max-w-[65ch]'>
                We're an Ethiopian coffee producer and exporter with a dedicated presence in Saudi Arabia and Canada. Rooted in a family legacy, we work directly with our own estates and trusted partner producers to bring you fully traceable beans - whether you're a roaster down the street or across the world.
              </p>
            </div>

          <Link href="/offerings" className='
            p-10 py-4 mt-6 w-fit
            bg-accent hover:bg-dark text-white hover:text-primary
            border border-accent hover:border-primary
            rounded-md
         ' aria-label="Check out our coffees">BUY GREEN COFFEE</Link>
        </div>

        <div id="hero-image-wrapper" className='relative flex w-full justify-center lg:w-1/3'>
          <ResponsiveImage 
            src='/images/coffee-pack-1.webp' 
            alt='Premium Ethiopian coffee packaging featuring specialty grade beans for wholesale partners' 
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

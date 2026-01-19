import Link from 'next/link'
import ResponsiveImage from './ResponsiveImage'

const Hero = () => {
  return (
    <section id='hero' className=' min-h-screen py-[7.5rem] bg-dark' aria-label="Hero section">
      <div className=" flex max-lg:flex-col items-center justify-center gap-12">
        
        <div id="hero-heading-wrapper" className='flex flex-col lg:items-start items-center justify-center mx-2 lg:w-1/2'>
          <h1 className='text-5xl max-lg:text-center lg:text-6xl leading-tight text-primary font-bold'>
            ETHIOPIAN COFFEE
          </h1>
          <p className='text-primary/90 max-lg:text-center text-sm uppercase tracking-widest mt-3'>
            From Our Farms in Ethiopia to Canada and Beyond
          </p>
          <p className='text-primary max-lg:text-center lg:pr-20'>
            We are an Ethiopia- and Canada-based coffee exporter and importer, supplying traceable Ethiopian coffee to roasters, cafés, and wholesale partners. Built from a family coffee story in Ethiopia, shaped by years of walking farm roads, listening to growers, and seeing firsthand how often value is lost between the cherry and the market, we export coffee directly from our own estates and trusted partner farms in Ethiopia to buyers worldwide. For Canadian businesses, we import coffee into our own warehouses in Canada. By managing every step in between, we preserve quality, traceability, and consistency from origin to your door. Today, we combine the harvest of our own farms with coffees from cooperatives and neighboring farmers to deliver a dependable supply and a true taste of origin in every shipment.
          </p>

          <Link href="/offerings" className='
            p-10 py-4 mt-6 w-fit
            bg-primary hover:bg-dark text-dark hover:text-primary
            border hover:border-primary
            rounded-md
         ' aria-label="Check out our coffees">CURRENT OFFERINGS</Link>
        </div>

        <div id="hero-image-wrapper" className='relative lg:w-1/3 max-sm:m-2'>
          <ResponsiveImage 
            src='/images/coffee-pack-1.webp' 
            alt='Premium Ethiopian coffee packaging featuring specialty grade beans for wholesale partners' 
            width={900}
            height={600}
            className='max-lg:w-[400px]'
            priority={true}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        
      </div>
    </section>
  )
}

export default Hero

import Link from 'next/link'
import HeroVideo from './HeroVideo'

const Hero = () => {
  return (
    <section id='hero' className='relative w-full h-[100svh] overflow-hidden' aria-label="Hero section">
      <HeroVideo />
      <div className='absolute inset-0 bg-black/50 z-[1]' />

      {/* Content */}
      <div className='relative z-10 flex flex-col items-center justify-center text-center px-5 max-w-3xl mx-auto h-full' style={{ paddingTop: 'var(--header-height, 100px)' }}>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl leading-tight text-primary font-bold'>
            ETHIOPIAN COFFEE EXPORTER
          </h1>
          <p className='text-primary/80 mt-2 sm:mt-3 text-xs sm:text-sm tracking-widest uppercase'>
            Transparent Sourcing. Seamless Export. Specialty Grade.
          </p>

          <p className='mt-4 sm:mt-6 text-primary/90 text-sm sm:text-base leading-relaxed max-w-[60ch] hidden sm:block'>
            Founded by two brothers, one in Ethiopia and the other in Canada. We export traceable, specialty-grade green coffee from Sidama, Guji, and Yirgacheffe to importers worldwide. From our origin to your port.
          </p>
          <p className='mt-4 text-primary/90 text-sm leading-relaxed max-w-[50ch] sm:hidden'>
            Specialty-grade Ethiopian green coffee from Sidama, Guji, and Yirgacheffe to importers worldwide.
          </p>

          <div className='flex flex-row gap-3 mt-6 sm:mt-8 justify-center'>
            <Link href="/offerings" className='
              px-6 py-3 sm:py-4 w-fit
              bg-accent hover:bg-accent/90 text-white
              border-2 border-accent
              rounded-xl
              font-bold
              transition-[background-color,box-shadow]
              shadow-sm hover:shadow-md
            ' aria-label="Check out our coffees">SEE OUR CURRENT LOTS</Link>
            <Link href="/about" className='
              px-6 py-3 sm:py-4 w-fit
              bg-transparent text-primary
              border-2 border-primary/40
              rounded-xl
              font-bold
              hover:border-primary hover:bg-white/10
              transition-all
            '>OUR STORY</Link>
          </div>
      </div>
    </section>
  )
}

export default Hero
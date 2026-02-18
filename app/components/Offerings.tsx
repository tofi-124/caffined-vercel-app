import Link from 'next/link'
import OfferingsResultsList from './OfferingsResultsList'
import { offerings } from '../data/offerings'

const Offerings = () => {
  return (
    <section className='bg-primary py-16 lg:py-24'>
      {/* Header */}
      <div className='max-w-7xl mx-auto px-4 text-center mb-12'>
        <h2 className='text-3xl lg:text-4xl font-bold text-dark'>
          FEATURED LOTS
        </h2>
        <p className='mt-3 text-dark/60 font-inconsolata max-w-xl mx-auto'>
          Curated Ethiopian specialty coffee for global importers. Traceable, consistent, and ready for export.
        </p>
      </div>

      {/* Products Grid */}
      <div className='max-w-6xl mx-auto px-4'>
        <OfferingsResultsList items={offerings.slice(0, 3)} />

        {/* CTA */}
        <div className='text-center mt-12'>
          <Link href='/offerings' className='
            inline-flex items-center gap-2 px-6 py-4
            bg-accent hover:bg-accent/90 text-white
            border-2 border-accent
            rounded-xl
            font-bold
            transition-all
            shadow-sm hover:shadow-md
          '>
            VIEW ALL OFFERINGS
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Offerings
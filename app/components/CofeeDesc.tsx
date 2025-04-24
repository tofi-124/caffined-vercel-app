import React from 'react'
import HeadLine from '../lib/Headline'

const headlines = [
  {
    title: 'ETHIOPIAN ORIGIN',
    items: ['Birthplace of Arabica coffee', 'High-altitude growing regions', 'Unique terroir', 'Heirloom varietals']
  },
  {
    title: 'SUSTAINABLE SOURCING',
    items: ['Direct farmer relationships', 'Fair trade practices', 'Eco-friendly processing', 'Community support']
  },
  {
    title: 'PREMIUM QUALITY',
    items: ['Specialty-grade beans', 'Consistent cup profiles', 'Proper storage & shipping', 'Expert quality control']
  }
]

const CofeeDesc = () => {
  return (
    <section id='coffee-desc' className='flex flex-col items-center py-32 bg-dark text-primary'>
      <div id="container" className='mb-20 lg:px-72'>
        <h1 className='text-6xl leading-tight font-bold text-center'>
          THE ETHIOPIAN DIFFERENCE
        </h1>
        <p className='text-center m-4'>
          Ethiopian coffee is renowned worldwide for its distinctive floral and fruity flavor profiles. Grown in ideal high-altitude conditions by farmers with generations of expertise, these beans showcase the true heritage of coffee.
        </p>
      </div>

      <video src='/videos/cofee-from-machine.webm' muted autoPlay loop />
       
      <div id='desc-wrapper' className='m-10 lg:m-40 mb-0 flex flex-col items-center justify-center gap-5'>
        <div id='desc-container' className='flex max-lg:flex-col'>
          <div id='desc-left' className='gap-5 lg:w-1/2 h-fit sticky max-lg:static top-24'>
            <h1 className='text-5xl leading-tight font-bold text-left'>
            WHY CHOOSE ETHIO COFFEE?
            </h1>
            <p className=''>
            As a premier Ethiopian coffee exporter, we bridge the gap between Ethiopia's finest coffee producers and quality-focused cafés and roasters around the world. Our business model ensures competitive pricing, consistency, and dedicated support for your business regardless of location.
            </p>
          </div>
          
          <div id='desc-right' className='flex flex-col gap-5 lg:w-1/2 lg:pl-32'>
            {headlines.map((headline, index) => <HeadLine key={index} {...headline} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CofeeDesc

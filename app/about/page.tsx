import React from 'react'
import Testimonials from '../components/Testimonials'
import ResponsiveImage from '../components/ResponsiveImage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Ethio Coffee | Our Story & Heritage',
  description: 'Learn about Ethio Coffee, our journey from Ethiopian farms to global markets, our commitment to quality, and our coffee heritage.',
  keywords: 'Ethiopian coffee history, coffee farming, specialty coffee producer, coffee exporters, coffee heritage',
  openGraph: {
    title: 'About Ethio Coffee | Our Story & Heritage',
    description: 'Learn about Ethio Coffee, our journey from Ethiopian farms to global markets.',
    url: 'https://ethiocoffee.com/about',
  }
}

const timeline = [
  {
    year: 2000,
    description: "Coffee is introduced to the Arabian Peninsula, where it becomes popular as a stimulating drink. The world's first coffee shops are opened in UK."
  },
  {
    year: 2010,
    description: "Coffee becomes an important commodity in international trade, particularly in the Middle East and Europe.The first machine is invented in Italy"
  },
  {
    year: 2016,
    description: "Coffee consumption continues to grow around the world, and innovations in transportation and technology make it easier to produce and distribute coffee on a large scale."
  },
  {
    year: 2020,
    description: "Coffee continues to be one of the most popular beverages in the world, with millions of people enjoying it every day. New brewing techniques and flavors continue to emerge."
  }
]

const About = () => {
  return (
    <main id='about-main' className='bg-primary'>
      <header className='bg-[url(/images/about-us.webp)] w-full h-[350px] flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold text-primary'>ABOUT US</h1>
      </header>
      
      <section className='container mx-auto px-4'>
        <div className='flex max-lg:flex-col items-center justify-center'>
          <div className='lg:w-1/2'>
            <h2 className='py-12 lg:py-24 text-5xl font-extrabold leading-tight text-dark'>
              THE PERFECT PAIRING: COFFEE AND DESSERTS COMPLEMENT EACH OTHER
            </h2>
          </div>
          <div className='lg:w-1/2 py-2 lg:py-24 lg:px-12 lg:border-l-2 border-black'>
            <p className='my-2'>
              Ethio Coffee Import and Export, operating under the brand name 'Ethio Coffee,' is a trusted exporter of premium Ethiopian coffee beans. Our coffee is made from carefully selected roasted coffee beans, which come from the berries of the Coffee a plant in the Ethiopian highlands and is enjoyed by coffee enthusiasts worldwide.
            </p>
            <p className='my-4'>
              Coffee is often enjoyed as a morning or afternoon pick-me-up, but it can also be savored as a relaxing and enjoyable beverage. In addition to its taste and aroma, coffee has been shown to have a variety of health benefits, including increased alertness and improved mental focus. It is also a source of antioxidants and other beneficial compounds.
            </p>
            <div id="images" className='w-full flex items-center justify-end static'>
              <div className="absolute right-[20%]">
                <ResponsiveImage src="/images/signatures.webp" alt="signature" width={200} height={20} />
              </div>
            </div>
          </div>
        </div>
      </section>   

      <section className='bg-dark text-primary flex flex-col items-center justify-center'>
        <div className='container flex flex-wrap p-12 justify-center items-center gap-10'>
          
          <div>
            <ResponsiveImage 
              className='rounded-md' 
              src="/images/about-1.webp" 
              alt="Ethiopian coffee plantation with workers selecting premium coffee cherries" 
              width={455} 
              height={300} 
            />
            <ResponsiveImage 
              className='rounded-md my-10' 
              src="/images/about-2.webp" 
              alt="Processing Ethiopian coffee beans using traditional methods to preserve quality" 
              width={455} 
              height={300} 
            />
          </div>
          
          <div className='w-[455px]'>
            <h2 className='text-5xl font-extrabold leading-tight'>
              THE JOURNEY OF COFFEE FARM
            </h2>
            
            <p>
              Coffee is a brewed drink made from roasted coffee beans, which are the seeds of berries from the Coffee a plant.
            </p>
            <ResponsiveImage 
              className='rounded-md my-10' 
              src="/images/about-3.webp" 
              alt="Sustainable coffee farming practices in Ethiopian highlands" 
              width={455} 
              height={300} 
            />
          </div>

        </div>
          
      </section> 
      <section className='bg-primary text-dark flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-extrabold'>
          OUR TIMELINE
        </h1>
       {
          timeline.map((item, index) => (
            <div key={index} className='container flex flex-col items-center align-center my-8'>
              <h2 className='text-3xl font-extrabold text-center my-2'>
                {item.year}
              </h2>
              <p className='text-center max-w-xl'>
                {item.description}
              </p>
            </div>
          ))
       }

      </section>
      <Testimonials />
    </main>
  )
}

export default About

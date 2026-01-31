'use client'

import Testimonials from '../components/Testimonials'
import ResponsiveImage from '../components/ResponsiveImage'
import AutoScrollTo from '../components/AutoScrollTo'
import Link from 'next/link'

const timeline = [
  {
    year: 'It started on the road',
    description: 'When our father was young, he traveled across Ethiopia with our grandfather, who traded goods from region to region. Those trips taught our father how people live, how communities work, and how much care goes into what the land produces.'
  },
  {
    year: 'Coffee became personal',
    description: 'Our grandfather traded many goods, but coffee is what captured our father’s attention and never let go. As our father got deeper into the coffee world, he saw something that never sat right: the farmers doing the hardest work were often the last to benefit when the coffee left the village.'
  },
  {
    year: 'Our father built trust, one season at a time',
    description: 'So our father did what he always did: he showed up. He spent years working closely with farming communities, not only buying coffee but learning how it is grown and prepared. He invested in his own farm, worked alongside neighbors, and supported cooperatives so farmers could access better markets and keep more value.'
  },
  {
    year: 'Thirty years of local trade and relationships',
    description: 'For the last 30 years, our father has worked with many farmers and local buyers across Ethiopia, moving coffee season after season. He learned what buyers need, what farmers face, and how small details in picking, drying, sorting, and storage decide whether a lot stays great or loses value. That long, practical experience is the foundation we stand on today.'
  },
  {
    year: 'In 2022, we took it international',
    description: 'Our father built his reputation in local trade, supplying coffee through relationships he earned over decades. In 2022, we formalized Ethio Coffee Export PLC to take that foundation to the international market, building an export-ready operation with clearer communication, better transparency, and quality our partners can plan around.'
  },
  {
    year: 'Today, we export with purpose',
    description: 'We source coffee from our own estates and trusted partners, prepare lots for export, and work with buyers who care about traceability and consistency. We still measure success the same way our father taught us: by keeping promises, protecting quality, and making sure farmers remain central to the story.'
  }
]

const About = () => {
  return (
    <main id='about-main' className='bg-primary'>
      <AutoScrollTo targetId='about-content' />
      <header className='bg-[url(/images/about-us.webp)] w-full h-[350px] flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold text-primary'>ABOUT US</h1>
      </header>
      
      <section id='about-content' className='container mx-auto px-4'>
        <div className='flex max-lg:flex-col items-center justify-center'>
          <div className='lg:w-1/2'>
            <h2 className='py-12 lg:py-24 text-5xl font-extrabold leading-tight text-dark'>
              FROM ETHIOPIA’S ROADS TO THE WORLD’S CUP
            </h2>
          </div>
          <div className='lg:w-1/2 py-2 lg:py-24 lg:px-12 lg:border-l-2 border-black'>
            <p className='my-2'>
              Ethio Coffee Export is a dedicated Ethiopian coffee exporter connecting speciality, traceable origin coffee with importers worldwide. Founded by two brothers - one based in Ethiopia, one Ethiopian-Canadian - we combine deep local roots with international perspective to serve importers seeking reliable, high-quality Ethiopian green coffee.
            </p>
            <p className='my-4'>
              Established in 2022, our roots trace back to our father's lifetime of hands-on work in Ethiopian coffee regions. He dedicated his life to working directly with farmers and local markets, witnessing how quality coffee often lost value between the farm gate and the international market. That experience shaped our mission: to be the trusted export partner that importers can rely on for consistent quality, transparent sourcing, and professional service.
            </p>

            <h3 className='mt-8 text-3xl font-extrabold text-dark'>What We Do</h3>
            <ul className='mt-4 list-disc space-y-3 pl-5 font-inconsolata'>
              <li>
                <span className='font-bold'>Direct Origin Sourcing:</span> We work with our own estates and a network of trusted partner growers in Ethiopia’s renowned coffee regions to source high-grade beans with traceable provenance.
              </li>
              <li>
                <span className='font-bold'>Export-Ready Quality:</span> Every lot is carefully documented, sorted, and prepared to meet international export standards so importers can count on consistent cup profiles and reliable supply.
              </li>
              <li>
                <span className='font-bold'>Sustainable & Ethical Trade:</span> By sourcing from our estates, cooperatives, and smallholder farmers, we help ensure fair pricing, transparent relationships, and long-term community support.
              </li>
              <li>
                <span className='font-bold'>Importer-Focused Service:</span> From sample programs and tailored offers to export documentation and shipping coordination, we make sourcing Ethiopian coffee straightforward for importers worldwide.
              </li>
            </ul>

            <h3 className='mt-8 text-3xl font-extrabold text-dark'>Built for Importers</h3>
            <p className='my-4'>
              We understand the challenges importers face when sourcing from origin. That's why we've built our entire operation around making your job easier.
            </p>
            <p className='my-4'>
              <strong>Clear Communication:</strong> With one brother on the ground in Ethiopia and one Ethiopian-Canadian with international business experience, we bridge the communication gap that often frustrates importers working with origin suppliers.
            </p>
            <p className='my-4'>
              <strong>Professional Documentation:</strong> Complete export documentation, phytosanitary certificates, ICO certificates, and quality reports - everything you need for smooth customs clearance in your destination country.
            </p>
            <p className='my-4'>
              <strong>Flexible Shipping:</strong> We work with your preferred freight forwarders or can recommend trusted logistics partners. FOB Djibouti or Addis Ababa dry port - whatever works best for your supply chain.
            </p>

            <p className='my-4 font-inconsolata text-sm text-gray-700'>
              For clarity: Ethio Coffee Export PLC is a private limited company (PLC) registered with the Ethiopian Commodity Exchange (ECX) for trade and export documentation. References on this page to "we", "our", or "the company" refer to Ethio Coffee Export PLC.
            </p>
          </div>
        </div>
      </section>   

      <section className='bg-dark text-primary flex flex-col items-center justify-center'>
        <div className='container flex flex-wrap p-12 justify-center items-center gap-10'>
          
          <div>
            <ResponsiveImage 
              className='rounded-md' 
              src="/images/about-1.webp" 
              alt="Ethiopian coffee plantation with workers selecting speciality coffee cherries" 
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
              THE JOURNEY BEHIND THE BEANS
            </h2>
            
            <p>
              Great coffee doesn’t happen by accident. It’s grown, picked, processed, sorted, and moved by hand, often by families who have been doing this work for generations.
              Our job is to honor that effort with consistency, clear communication, and long-term relationships.
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
      <section className='bg-primary text-dark py-20'>
        <div className='container mx-auto px-4'>
          <h2 className='text-5xl font-extrabold text-center mb-4'>
            OUR STORY, IN MILESTONES
          </h2>
          <div className='w-24 h-1 bg-accent mx-auto mb-16'></div>
          
          <div className='max-w-4xl mx-auto'>
            {timeline.map((item, index) => (
              <div key={index} className='relative pl-8 pb-12 border-l-2 border-secondary/30 last:pb-0'>
                <div className='absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-secondary'></div>
                <h2 className='text-2xl font-extrabold text-dark mb-3'>
                  {item.year}
                </h2>
                <p className='text-gray-700 leading-relaxed'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to Ordering Info */}
      <section className='bg-secondary py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-extrabold text-primary mb-4'>
            Ready to Source Ethiopian Coffee?
          </h2>
          <p className='text-primary/80 mb-8 max-w-2xl mx-auto'>
            Learn about our ordering process, minimum quantities, shipping options, and everything you need to know to get started.
          </p>
          <Link 
            href="/ordering-info"
            className='inline-flex items-center gap-3 bg-primary text-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-white transition-colors shadow-lg hover:shadow-xl'
          >
            Learn How to Order
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
            </svg>
          </Link>
        </div>
      </section>

      <Testimonials />
    </main>
  )
}

export default About

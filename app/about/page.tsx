import Link from 'next/link'
import ResponsiveImage from '../components/ResponsiveImage'
import Testimonials from '../components/Testimonials'
import AutoScrollTo from '../components/AutoScrollTo'
import Script from 'next/script'

const timeline = [
  {
    year: 'It started on the road',
    description: 'When our father was young, he traveled across Ethiopia with our grandfather, who traded goods from region to region. Those trips taught our father how people live, how communities work, and how much care goes into what the land produces.'
  },
  {
    year: 'Coffee became personal',
    description: "Our grandfather traded many goods, but coffee is what captured our father's attention and never let go. As our father got deeper into the coffee world, he saw something that never sat right: the farmers doing the hardest work were often the last to benefit when the coffee left the village."
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
    description: "Our father built his reputation in local trade, supplying coffee through relationships he earned over decades. In 2022, we formalized Ethio Coffee Export PLC to take that foundation to the international market, building an export-ready operation with clearer communication, better transparency, and quality our partners can plan around."
  },
  {
    year: 'Today, we export with purpose',
    description: 'We source coffee from our own estates and trusted partners, prepare lots for export, and work with buyers who care about traceability and consistency. We still measure success the same way our father taught us: by keeping promises, protecting quality, and making sure farmers remain central to the story.'
  }
]

const About = () => {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "@id": "https://www.ethiocoffee.et/#organization",
      "name": "Ethio Coffee Export PLC",
      "foundingDate": "2022",
      "founders": [
        {
          "@type": "Person",
          "name": "Ethio Coffee Founders",
          "description": "Two brothers - one rooted in Ethiopia, the other in Canada"
        }
      ],
      "description": "Family-built Ethiopian coffee export company connecting specialty traceable coffee with importers worldwide",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": "30+"
      }
    },
    "about": {
      "@type": "Thing",
      "name": "Ethiopian Coffee Export",
      "description": "Direct trade Ethiopian coffee sourcing and export with 30+ years of family legacy"
    }
  }

  return (
    <main id='about-main' className='bg-primary'>
      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      <AutoScrollTo targetId='about-content' />
      <header className='bg-[url(/images/about-us.webp)] w-full h-[350px] flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold text-primary'>ABOUT US</h1>
      </header>
      
      <section id='about-content' className='container mx-auto px-4 py-12 lg:py-20'>
        <div className='flex max-lg:flex-col gap-8 lg:gap-0'>
          {/* Mobile-only intro: shown first on small screens */}
          <div className='lg:hidden w-full'>
            <div className='flex flex-col justify-center'>
              <h3 className='text-4xl font-extrabold text-dark mb-6'>FROM ETHIOPIA’S ROADS TO THE WORLD’S CUP</h3>
              <p className='mb-4 text-lg leading-relaxed'>
                Ethio Coffee Export is a partner producer and Ethiopian coffee exporter connecting speciality, traceable origin coffee with importers worldwide. Founded by two brothers - one based in Ethiopia, one Ethiopian-Canadian - we combine deep local roots with international perspective to serve importers seeking reliable, high-quality Ethiopian green coffee.
              </p>
              <p className='text-lg leading-relaxed'>
                Established in 2022, our roots trace back to our father's lifetime of hands-on work in Ethiopian coffee regions. He dedicated his life to working directly with farmers and local markets, witnessing how quality coffee often lost value between the farm gate and the commodity market. That experience shaped our mission: to ensure the value stays where it belongs with the growers, while serving as the trusted partner importers rely on for consistent quality, transparent sourcing, and professional service.
              </p>
            </div>
          </div>
          {/* Left Column */}
          <div className='lg:w-1/2 lg:pr-8 flex flex-col gap-12 lg:gap-20'>
            {/* Image 1 */}
            <div className='hidden lg:flex items-center justify-center'>
              <ResponsiveImage 
                className='rounded-lg shadow-lg w-full h-auto object-cover' 
                src="/images/about-us-1.webp" 
                alt="Ethiopian coffee heritage and tradition" 
                width={550} 
                height={400} 
              />
            </div>

            {/* What We Do */}
            <div className='flex flex-col justify-center'>
              <h3 className='text-4xl font-extrabold text-dark mb-6'>What We Do</h3>
              <ul className='list-disc space-y-4 pl-5 font-inconsolata'>
                <li>
                  <span className='font-bold'>Direct Origin Sourcing:</span> We work with our own estates and a network of trusted partner growers in Ethiopia's renowned coffee regions to source high-grade beans with traceable provenance.
                </li>
                <li>
                  <span className='font-bold'>Specialty-Grade, Export-Ready:</span> Every lot is meticulously processed, fully traceable, and quality-controlled to specialty coffee standards, ensuring clean, distinctive cup profiles and consistent performance for international buyers.
                </li>
                <li>
                  <span className='font-bold'>Sustainable & Ethical Trade:</span> By sourcing from our estates, cooperatives, and smallholder farmers, we help ensure fair pricing, transparent relationships, and long-term community support.
                </li>
                <li>
                  <span className='font-bold'>Importer-Focused Service:</span> From sample programs and tailored offers to export documentation and shipping coordination, we make sourcing Ethiopian coffee straightforward for importers worldwide.
                </li>
              </ul>
            </div>

            {/* Image 3 */}
            <div className='hidden lg:flex items-center justify-center mt-20'>
              <ResponsiveImage 
                className='rounded-lg shadow-lg w-full h-auto object-cover' 
                src="/images/about-us-3.webp" 
                alt="Your partner at origin for Ethiopian coffee" 
                width={550} 
                height={400} 
              />
            </div>
          </div>
          {/* Mobile-only Partner block (placed after What We Do on mobile) */}
          <div className='lg:hidden w-full'>
            <div className='flex flex-col justify-center'>
              <h3 className='text-4xl font-extrabold text-dark mb-6'>Your Partner at Origin</h3>
              <p className='mb-4 leading-relaxed'>
                We understand the challenges importers face when sourcing from origin. That's why we've built our entire operation around making your job easier.
              </p>
              <p className='mb-4 leading-relaxed'>
                <strong>Farm-First Traceability:</strong> As semi-producers deeply involved with production, we offer unmatched transparency. We are directly involved in the process from the farm to your port, giving you a clear and reliable line of sight into your coffee's journey.
              </p>
              <p className='mb-4 leading-relaxed'>
                <strong>Clear Communication:</strong> With one brother on the ground in Ethiopia and one Ethiopian-Canadian with international business experience, we bridge the communication gap that often frustrates importers working with origin suppliers.
              </p>
              <p className='mb-4 leading-relaxed'>
                <strong>Professional Documentation:</strong> Complete tracebility and export documentation, phytosanitary certificates, ICO certificates, and quality reports - everything you need for smooth customs clearance in your destination country.
              </p>
              <p className='mb-4 leading-relaxed'>
                <strong>Flexible Shipping:</strong> We work with your preferred freight forwarders or can recommend trusted logistics partners. FOB Djibouti or Addis Ababa dry port - whatever works best for your supply chain.
              </p>

              <p className='mt-6 font-inconsolata text-sm text-gray-700'>
                For clarity: Ethio Coffee Export PLC is a private limited company (PLC) registered with the Ethiopian Commodity Exchange (ECX) for trade and export documentation. References on this page to "we", "our", or "the company" refer to Ethio Coffee Export PLC.
              </p>
            </div>
          </div>

          {/* Right Column (desktop only) with continuous border */}
          <div className='hidden lg:flex lg:w-1/2 lg:pl-12 lg:border-l-2 border-black flex-col gap-12 lg:gap-20'>
            {/* Intro Text (desktop) */}
            <div className='flex flex-col justify-center'>
              <p className='mb-4 text-lg leading-relaxed'>
                Ethio Coffee Export is a partner producer and Ethiopian coffee exporter connecting speciality, traceable origin coffee with importers worldwide. Founded by two brothers - one based in Ethiopia, one Ethiopian-Canadian - we combine deep local roots with international perspective to serve importers seeking reliable, high-quality Ethiopian green coffee.
              </p>
              <p className='text-lg leading-relaxed'>
                Established in 2022, our roots trace back to our father's lifetime of hands-on work in Ethiopian coffee regions. He dedicated his life to working directly with farmers and local markets, witnessing how quality coffee often lost value between the farm gate and the commodity market. That experience shaped our mission: to ensure the value stays where it belongs with the growers, while serving as the trusted partner importers rely on for consistent quality, transparent sourcing, and professional service.
              </p>
            </div>

            {/* Image 2 (desktop only) */}
            <div className='hidden lg:flex items-center justify-center'>
              <ResponsiveImage 
                className='rounded-lg shadow-lg w-full h-auto object-cover' 
                src="/images/about-us-2.webp" 
                alt="What we do - Ethiopian coffee sourcing and export" 
                width={550} 
                height={400} 
              />
            </div>

            {/* Your Partner at Origin (desktop) */}
            <div className='flex flex-col justify-center'>
              <h3 className='text-4xl font-extrabold text-dark mb-6'>Your Partner at Origin</h3>
              <p className='mb-4 leading-relaxed'>
                We understand the challenges importers face when sourcing from origin. That's why we've built our entire operation around making your job easier.
              </p>
              <p className='mb-4 leading-relaxed'>
                <strong>Farm-First Traceability:</strong> As semi-producers deeply involved with production, we offer unmatched transparency. We are directly involved in the process from the farm to your port, giving you a clear and reliable line of sight into your coffee's journey.
              </p>
              <p className='mb-4 leading-relaxed'>
                <strong>Clear Communication:</strong> With one brother on the ground in Ethiopia and one Ethiopian-Canadian with international business experience, we bridge the communication gap that often frustrates importers working with origin suppliers.
              </p>
              <p className='mb-4 leading-relaxed'>
                <strong>Professional Documentation:</strong> Complete tracebility and export documentation, phytosanitary certificates, ICO certificates, and quality reports - everything you need for smooth customs clearance in your destination country.
              </p>
              <p className='mb-4 leading-relaxed'>
                <strong>Flexible Shipping:</strong> We work with your preferred freight forwarders or can recommend trusted logistics partners. FOB Djibouti or Addis Ababa dry port - whatever works best for your supply chain.
              </p>

              <p className='mt-6 font-inconsolata text-sm text-gray-700'>
                For clarity: Ethio Coffee Export PLC is a private limited company (PLC) registered with the Ethiopian Commodity Exchange (ECX) for trade and export documentation. References on this page to "we", "our", or "the company" refer to Ethio Coffee Export PLC.
              </p>
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
              Great coffee doesn't happen by accident. It's grown, picked, processed, sorted, and moved by hand, often by families who have been doing this work for generations.
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

      {/* CTA to How To Buy */}
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

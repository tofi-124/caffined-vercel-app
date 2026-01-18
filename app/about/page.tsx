import Testimonials from '../components/Testimonials'
import ResponsiveImage from '../components/ResponsiveImage'
import AutoScrollTo from '../components/AutoScrollTo'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Ethio Coffee | Our Story & Commitment',
  description: 'Learn the story behind Ethio Coffee Import and Export PLC built on a family legacy of working with farmers and exporting Ethiopian coffee with respect, traceability, and long-term relationships.',
  keywords: 'Ethio Coffee Import and Export PLC, Ethiopian coffee exporter, ethical sourcing, farmer partnerships, Ethiopian coffee',
  openGraph: {
    title: 'About Ethio Coffee | Our Story & Commitment',
    description: 'The story behind Ethio Coffee Import and Export PLC from farmer relationships to global exports.',
    url: 'https://ethiocoffee.com/about',
  }
}

const timeline = [
  {
    year: 'A childhood on the road',
    description: 'Our story starts with my father raised traveling across Ethiopia with his own father (my grandfather), a trader moving between regions. Those early journeys built a deep respect for people, place, and the work behind every crop.'
  },
  {
    year: 'A coffee journey begins (~40 years ago)',
    description: 'While my grandfather traded many commodities, coffee stayed with my father. About 40 years ago he noticed a painful gap: farmers did the hardest work, but often saw the smallest share of the value.'
  },
  {
    year: 'Building with farmers',
    description: 'He began working directly with farmers and helped initiate and strengthen cooperatives focused on fairer market access, better coordination, and improving how value flows back to the people who grow the coffee.'
  },
  {
    year: 'Formally registered in 2020',
    description: 'My brother and I formed Ethio Coffee Import and Export PLC and formally registered the company as an exporter in 2020 so we could carry this work beyond the local market and into long-term export partnerships.'
  },
  {
    year: 'Today',
    description: 'With our father’s guidance, we continue the legacy: ethically sourcing quality Ethiopian coffee, prioritizing strong relationships, and doing our best to ensure farmers benefit meaningfully from what they produce.'
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
              Ethio Coffee Import and Export PLC ("Ethio Coffee") is a family-built Ethiopian coffee exporter.
              We didn’t start with a marketing plan we started with a relationship: my father’s decades of working side-by-side with farmers and seeing, firsthand, how often the people who do the work end up with the smallest reward.
            </p>
            <p className='my-4'>
              Growing up alongside him, I learned that coffee is not just a product it’s people, seasons, and trust.
              That’s what motivated my brother and me to formally register Ethio Coffee Import and Export PLC as an exporter in 2020 and continue this work with integrity.
              Our focus is simple: source quality coffee with care, export it responsibly, and keep farmer benefit at the center of the business.
            </p>
            <p className='my-4 font-inconsolata text-sm text-gray-700'>
              For clarity: Ethio Coffee Import and Export PLC is a private limited company (PLC). References on this page to “we”, “our”, or “the company” refer to Ethio Coffee Import and Export PLC and its team.
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
              THE JOURNEY BEHIND THE BEANS
            </h2>
            
            <p>
              Great coffee doesn’t happen by accident. It’s grown, picked, processed, sorted, and moved by hand often by families who have been doing this work for generations.
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
      <section className='bg-primary text-dark flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-extrabold'>
          OUR STORY, IN MILESTONES
        </h1>
       {
          timeline.map((item, index) => (
            <div key={index} className='container flex flex-col items-center align-center my-8'>
              <h2 className='text-3xl font-extrabold text-center my-2 max-w-3xl'>
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

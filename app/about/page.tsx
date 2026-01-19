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
    url: 'https://ethiocoffee.et/about',
  }
}

const timeline = [
  {
    year: 'A childhood on the road',
    description: 'Our foundation isn\'t corporate; it\'s familial. My father spent his childhood traveling across Ethiopia with my grandfather a local trader. Moving from region to region, he didn\'t just see the land; he learned the rhythm of trade and developed a profound respect for the communities cultivating the crops.'
  },
  {
    year: 'A coffee journey begins',
    description: 'While my grandfather traded various goods, it was coffee that captured my father’s heart. However, nearly 40 years ago, he recognized a troubling disparity: the farmers pouring their sweat into the soil were often the ones receiving the least reward.'
  },
  {
    year: 'Building with farmers',
    description: 'Determined to make a difference, he immersed himself in the farming communities. He didn\'t just buy coffee; he purchased his own farm and worked the land alongside his neighbors, while partnering with them to establish and strengthen cooperatives. His mission was clear: improve market access and ensure that the value returned to the hands that planted the seeds.'
  },
  {
    year: 'Formally registered in 2020',
    description: 'Inspired by his dedication, my brother and I formally established Ethio Coffee Import and Export PLC in 2020. Our goal was to expand this vision beyond local markets, creating long-term international partnerships that honor the legacy of fairness and quality.'
  },
  {
    year: 'Today',
    description: 'Guided by our father’s wisdom, we continue the tradition: ethically sourcing premium Ethiopian coffee, fostering transparent relationships, and ensuring that every cup exported supports the livelihoods of the farmers who made it possible.'
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
              Ethio Coffee Import and Export PLC ("Ethio Coffee") is more than a business; it is a legacy.
              We didn’t begin with a business plan, but with a deep-rooted relationship grounded in my father’s decades of work with farmers and local markets. He witnessed firsthand the disparity in the industry where those who worked the hardest often reaped the littlest reward and vowed to change it.
            </p>
            <p className='my-4'>
              Growing up in his shadow, I learned that coffee is not merely a commodity; it represents people, seasons, and unwavering trust.
              Inspired by his dedication, my brother and I formally established Ethio Coffee Import and Export PLC in 2020. We are taking his legacy forward, striving to fill the gap in the international market just as he did for the local market.
              Our mission is direct: source exceptional coffee from our own farms and partner growers with integrity, export responsibly, and ensure that farmers remain the heart of our success.
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

import Link from 'next/link'
import ResponsiveImage from '../components/ResponsiveImage'
import dynamic from 'next/dynamic'
import AutoScrollTo from '../components/AutoScrollTo'
import Script from 'next/script'

const Testimonials = dynamic(() => import('../components/Testimonials'), {
  loading: () => <section className='min-h-[320px] bg-dark' />,
})

const timeline = [
  {
    year: 'It started on the road',
    description: 'When our father was young, he traveled across Ethiopia with our grandfather, who traded goods from region to region. Those trips taught him how communities work, how trust is earned, and how much care goes into what the land produces.'
  },
  {
    year: 'Coffee became personal',
    description: "Our grandfather traded many goods, but coffee is what captured our father's attention and never let go. As he got deeper into the coffee world, he saw something that never sat right: the farmers doing the hardest work were often the last to benefit when the coffee left the village."
  },
  {
    year: 'Trust built one season at a time',
    description: 'So he did what he always did: he showed up. He spent years working closely with farming communities, learning how coffee is grown and prepared, supporting cooperatives so farmers could access better markets and keep more value. Those relationships became the sourcing network we rely on today.'
  },
  {
    year: 'Thirty years of local trade and relationships',
    description: 'For three decades, our father worked with farmers, cooperatives, and local buyers across Ethiopia, moving coffee season after season. He learned what buyers need, what farmers face, and how small details in picking, drying, sorting, and storage decide whether a lot stays great or loses value. That long, practical experience is the foundation we stand on today.'
  },
  {
    year: 'In 2022, we took it international',
    description: "Our father built his reputation in local trade through relationships he earned over decades. In 2022, we formalized Ethio Coffee Import and Export PLC to take that sourcing network to the international market, building an export-ready operation with clearer communication, better transparency, and quality our partners can plan around."
  },
  {
    year: 'Our own drying station in Guji Hambella',
    description: 'We established our own drying station in Guji Hambella, one of Ethiopia\'s most celebrated specialty coffee origins. We now collect cherry directly from smallholder farmers in the area and process it ourselves, giving us hands-on control over quality from cherry intake through drying. This deepens our presence at origin and strengthens the traceability we offer our buyers.'
  },
  {
    year: 'Today, we export with purpose',
    description: 'At our own drying station in Guji Hambella, we collect cherry from smallholder farmers and process it ourselves. Across other origins, we work with cooperatives and washing stations we trust. Everything comes together at our warehouse in Addis Ababa, where we prepare lots for export to buyers who care about traceability and consistency. We still measure success the same way we were taught: by keeping promises, protecting quality, and making sure farmers remain central to the story.'
  }
]

const About = () => {
  return (
    <main id='about-main' className='bg-primary'>

      <AutoScrollTo targetId='about-content' />
      <header className='bg-[url(/images/about-us.webp)] w-full h-[350px] flex flex-col items-center justify-center px-4'>
        <h1 className='text-4xl md:text-5xl font-bold text-primary text-center'>About Ethio Coffee Export</h1>
        <p className='text-primary/80 mt-3 text-sm tracking-widest uppercase text-center'>Family-Owned Ethiopian Coffee Export Company</p>
      </header>
      
      <section id='about-content' className='container mx-auto px-4 py-12 lg:py-20'>
        <div className='flex max-lg:flex-col gap-8 lg:gap-0'>
          {/* Mobile-only intro: shown first on small screens */}
          <div className='lg:hidden w-full'>
            <div className='flex flex-col justify-center'>
              <h3 className='text-4xl font-extrabold text-dark mb-6'>FROM ETHIOPIA’S ROADS TO THE WORLD’S CUP</h3>
              <p className='mb-4 text-lg leading-relaxed'>
                Ethio Coffee Export is an <Link href='/ethiopian-coffee-exporter' className='underline underline-offset-4 hover:text-dark/70 font-semibold'>Ethiopian coffee exporter</Link> connecting traceable origin coffee with importers worldwide. Founded by two brothers - one based in Ethiopia, one Ethiopian-Canadian - we combine deep local roots with international perspective to serve importers seeking reliable, high-quality Ethiopian green coffee.
              </p>
              <p className='text-lg leading-relaxed'>
                Established in 2022, we draw on three decades of family heritage in Ethiopia's coffee trade. Today that means running our own drying station in Guji Hambella, where we work directly with smallholder farmers in the area, collecting their cherry and processing it ourselves to support their livelihoods and protect quality. For other key origins like Yirgacheffe, Sidama, Harar, and Limu, we source through trusted cooperatives and washing stations. Our mission is simple: to ensure the value stays where it belongs with the growers, while being the reliable, transparent partner importers can count on.
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
                  <span className='font-bold'>Direct Sourcing Across Ethiopia's Key Regions:</span> In Guji Hambella, we work directly with smallholder farmers, collecting their cherry and processing it at our own drying station. This supports small growers in the area while giving us hands-on control from intake through drying. For other key origins like Yirgacheffe, Sidama, Limu, and Harar, we source through trusted cooperatives and washing stations.
                </li>
                <li>
                  <span className='font-bold'>Quality-Verified Green Coffee:</span> We offer washed, natural, and honey-processed lots across Ethiopia's most distinct origins. Every lot is cupped for quality and matched to the profile you approved at sample stage.
                </li>
                <li>
                  <span className='font-bold'>Ethical, Long-Term Sourcing:</span> We work with cooperatives and smallholders our father built relationships with over three decades, ensuring fair pricing and transparent, direct supply chains.
                </li>
                <li>
                  <span className='font-bold'>Sample Programs:</span> Request samples before committing to a full order. We ship representative pre-shipment samples so you can confirm quality before the container loads.
                </li>
              </ul>
              <p className='mt-6'>
                Browse our <Link href='/offerings' className='underline underline-offset-4 hover:text-dark/70 font-semibold'>current Ethiopian coffee offerings</Link> or <Link href='/contact-us' className='underline underline-offset-4 hover:text-dark/70 font-semibold'>get in touch</Link> to discuss your requirements.
              </p>
            </div>

            {/* Image 3 */}
            <div className='hidden lg:flex items-center justify-center'>
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
                Sourcing from origin means navigating communication gaps, unpredictable timelines, and documentation that can derail a shipment. We are built to remove those friction points.
              </p>
              <p className='mb-4 leading-relaxed'>
                <strong>One Team, Two Worlds:</strong> One brother manages sourcing and operations on the ground in Ethiopia. The other is Ethiopian-Canadian with international business experience. Together we close the communication gap that frustrates importers working with origin suppliers.
              </p>
              <p className='mb-4 leading-relaxed'>
                <strong>Complete Export Documentation:</strong> We handle phytosanitary certificates, ICO certificates of origin, packing lists, and quality reports. Everything needed for smooth customs clearance, prepared accurately and on time.
              </p>
              <p className='mb-4 leading-relaxed'>
                <strong>Flexible Shipping Terms:</strong> FOB Djibouti or FCA Addis Ababa dry port. We work with your preferred freight forwarder or can recommend trusted logistics partners.
              </p>
              <p className='mb-4 leading-relaxed'>
                <strong>Responsive and Straightforward:</strong> We send clear offers, respond quickly, and keep you updated through the shipment process. No chasing, no surprises.
              </p>

              <p className='mt-6 font-inconsolata text-sm text-gray-700'>
                For clarity: Ethio Coffee Import and Export PLC is a private limited company (PLC) registered with the Ethiopian Commodity Exchange (ECX) for trade and export documentation. References on this page to "we", "our", or "the company" refer to Ethio Coffee Import and Export PLC.
              </p>
            </div>
          </div>

          {/* Right Column (desktop only) with continuous border */}
          <div className='hidden lg:flex lg:w-1/2 lg:pl-12 lg:border-l-2 border-black flex-col gap-12 lg:gap-20'>
            {/* Intro Text (desktop) */}
            <div className='flex flex-col justify-center'>
              <p className='mb-4 text-lg leading-relaxed'>
                Ethio Coffee Export is an <Link href='/ethiopian-coffee-exporter' className='underline underline-offset-4 hover:text-dark/70 font-semibold'>Ethiopian coffee exporter</Link> connecting traceable origin coffee with importers worldwide. Founded by two brothers - one based in Ethiopia, one Ethiopian-Canadian - we combine deep local roots with international perspective to serve importers seeking reliable, high-quality Ethiopian green coffee.
              </p>
              <p className='text-lg leading-relaxed'>
                Established in 2022, our foundation is the sourcing network our father built over 30 years as a local coffee trader in Ethiopia. Today that means running our own drying station in Guji Hambella, where we work directly with smallholder farmers in the area, collecting their cherry and processing it ourselves to support their livelihoods and protect quality. For other key origins like Yirgacheffe, Sidama, Harar, and Limu, we source through trusted cooperatives and washing stations. Our mission is simple: to ensure the value stays where it belongs with the growers, while being the reliable, transparent partner importers can count on.
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
                Sourcing from origin means navigating communication gaps, unpredictable timelines, and documentation that can derail a shipment. We are built to remove those friction points.
              </p>
              <p className='mb-4 leading-relaxed'>
                <strong>One Team, Two Worlds:</strong> One brother manages sourcing and operations on the ground in Ethiopia. The other is Ethiopian-Canadian with international business experience. Together we close the communication gap that frustrates importers working with origin suppliers.
              </p>
              <p className='mb-4 leading-relaxed'>
                <strong>Complete Export Documentation:</strong> We handle phytosanitary certificates, ICO certificates of origin, packing lists, and quality reports. Everything needed for smooth customs clearance, prepared accurately and on time.
              </p>
              <p className='mb-4 leading-relaxed'>
                <strong>Flexible Shipping Terms:</strong> FOB Djibouti or FCA Addis Ababa dry port. We work with your preferred freight forwarder or can recommend trusted logistics partners.
              </p>
              <p className='mb-4 leading-relaxed'>
                <strong>Responsive and Straightforward:</strong> We send clear offers, respond quickly, and keep you updated through the shipment process. No chasing, no surprises.
              </p>

              <p className='mt-6 font-inconsolata text-sm text-gray-700'>
                For clarity: Ethio Coffee Import and Export PLC is a private limited company (PLC) registered with the Ethiopian Commodity Exchange (ECX) for trade and export documentation. References on this page to "we", "our", or "the company" refer to Ethio Coffee Import and Export PLC.
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
              alt="Ethiopian coffee plantation with workers selecting coffee cherries" 
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
              src="/images/about/alo-sampel-397-14.webp"
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
              <div key={index} className='relative pl-8 pb-12 border-l-2 border-dark/15'>
                <div className='absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-dark'></div>
                <h2 className='text-2xl font-extrabold text-dark mb-3'>
                  {item.year}
                </h2>
                <p className='text-gray-700 leading-relaxed'>
                  {item.description}
                </p>
              </div>
            ))}

            {/* Final milestone: CTA */}
            <div className='relative pl-8 pb-0'>
              <div className='absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent ring-4 ring-accent/20'></div>
              <h2 className='text-2xl font-extrabold text-accent mb-3'>
                Now, it&apos;s your turn
              </h2>
              <p className='text-gray-700 leading-relaxed mb-5'>
                Reach out and let&apos;s write the next chapter of this coffee story together.
              </p>
              <div className='flex flex-wrap gap-3'>
                <Link
                  href="/ordering-info"
                  className='px-5 py-2.5 border-2 border-dark text-dark rounded-xl font-bold text-sm hover:bg-dark hover:text-primary transition-all duration-300'
                >
                  How to Order
                </Link>
                <Link
                  href="/contact-us"
                  className='px-5 py-2.5 border-2 border-accent bg-accent text-white rounded-xl font-bold text-sm hover:bg-accent/90 transition-all duration-300'
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </main>
  )
}

export default About
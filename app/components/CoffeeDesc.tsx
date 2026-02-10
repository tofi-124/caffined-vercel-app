import Link from 'next/link'
import HeadLine from '../lib/Headline'
import VideoPlayer from './VideoPlayer'

const headlines = [
  {
    title: 'ROOTED IN ORIGIN',
    items: [
      'Born from the highlands where coffee first grew wild centuries ago',
      'Direct partnerships with Sidama, Guji, and Yirgacheffe farming communities',
      'Family relationships spanning generations built on trust and transparency',
      'Every lot traced back to its point of origin.'
    ]
  },
  {
    title: 'IDENTITY PRESERVED',
    items: [
      'Heirloom varietals cultivated nowhere else on earth',
      'Micro-region character preserved through careful processing and handling',
      'Generational relationships with smallholders and trusted cooperatives',
      'Sample-to-bag consistency ensuring cup profiles match your expectations'
    ]
  },
  {
    title: 'EXPORT-READY AUTHENTICITY',
    items: [
      'Fresh, traceable coffees from Sidama, Guji, and Yirgacheffe year-round',
      'Rigorous quality control from washing station to export container',
      'Professional documentation and flexible shipping (FOB Djibouti or CIF)',
      'Moisture-safe packaging preserving origin character in transit'
    ]
  }
]

const CoffeeDesc = () => {
  return (
    <section id='coffee-desc' className='flex flex-col items-center py-32 bg-dark text-primary'>
      <div id="container" className='mb-20 px-10 lg:px-72'>
        <h2 className='text-5xl leading-tight font-bold text-left'>
          THE ETHIOPIAN DIFFERENCE
        </h2>
        <br />
        <p className=''>
          Ethiopian coffee is celebrated for its vibrant floral and fruity profiles, but the true distinction lies in the people behind the harvest. In the same high-altitude regions where coffee has been a way of life for generations, farmers transform meticulous picking and processing into a cup that is unmistakably &quot;origin.&quot; Our work begins at the source: built on deep-rooted relationships, unwavering consistency, and a profound respect for the craft.
          <br />
          <br />
          Learn about Ethiopian coffee origins: <Link href="/insights/guide-ethiopian-coffee-origins" className='underline'>Coffee Regions</Link>
        </p>
      </div>

      <VideoPlayer />
       
      <div id='desc-wrapper' className='m-10 lg:m-40 mb-0 flex flex-col items-start justify-center gap-5'>
        <div id='desc-container' className='flex max-lg:flex-col items-start'>
          <div id='desc-left' className='gap-5 lg:w-1/2 lg:h-fit lg:sticky max-lg:static top-24'>
            <h2 className='text-5xl leading-tight font-bold text-left'>
            WHY ETHIO COFFEE?
            </h2>
            <br />
            <p className=''>
            Our story began on the roads of Ethiopia&apos;s coffee highlands, where our father spent his youth traveling with our grandfather who was a small trader. He learned what the land means to the people who have worked it for generations, seeing coffee as a living tradition. For 30 years, he worked in Ethiopia&apos;s local coffee markets, building relationships with producers and understanding quality at its source.
            <br />
            <br />
            In 2022, we, two brothers, took what he built locally and made it international. We operate as semi-producers with direct involvement in production, bridging that expertise to the global market. We walk the washing stations in Guji during harvest, oversee processing at partner mills, and cup samples in Addis to personally ensure what leaves Ethiopia is what lands in your port with consistent, sample-to-bag accuracy. This is our heritage.
            <br />
            <br />
            Sourcing from us connects your customers directly to the heart of Ethiopia. We ensure our partner farmers receive fair and premium payment for their work, honoring the skill and dedication behind every lot. You are sharing a story of heirloom varietals, refined traditions, and the respected hands that make this coffee possible.
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

export default CoffeeDesc

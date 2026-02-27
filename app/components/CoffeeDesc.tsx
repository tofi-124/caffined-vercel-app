import Link from 'next/link'
import HeadLine from '../lib/Headline'

const headlines = [
  {
    title: 'ROOTED IN ORIGIN',
    items: [
      'Born from the highlands where coffee first grew wild centuries ago',
      'Our own drying station in Guji Hambella, at the heart of production',
      'Sourcing across distinct micro-regions: Yirgacheffe, Sidama, Guji, Limu, and Harar',
      'Every lot linked to a named origin, farm, or cooperative; never anonymous'
    ]
  },
  {
    title: 'IDENTITY PRESERVED',
    items: [
      'Heirloom Ethiopian varietals found nowhere else on earth',
      'Processing method (washed, natural, or honey) chosen to honor each origin\'s character',
      'Origins kept strictly separate; no blending of regions or harvests',
      'Sample-to-bag consistency so the cup you approved is the cup that arrives'
    ]
  },
  {
    title: 'EXPORT-READY',
    items: [
      'Full export documentation: phytosanitary, ICO certificate of origin, and packing lists',
      'Flexible shipping terms: FOB Djibouti or FCA Addis Ababa',
      'GrainPro or vacuum packaging to lock in freshness during transit',
      'Experienced team managing ECX compliance, customs clearance, and on-time shipment'
    ]
  }
]

const CoffeeDesc = () => {
  return (
    <section id='coffee-desc' className='flex flex-col items-center py-16 lg:py-24 bg-dark text-primary'>
      <div id='desc-wrapper' className='mx-6 md:mx-10 lg:mx-40 mb-0 flex flex-col items-start justify-center gap-5'>
        <div id='desc-container' className='flex max-lg:flex-col items-start'>
          <div id='desc-left' className='gap-5 lg:w-1/2 lg:h-fit lg:sticky max-lg:static top-36'>
            <h2 className='text-5xl leading-tight font-bold text-left'>
            WHY ETHIO COFFEE?
            </h2>
            <br />
            <p className=''>
            Our story began on the roads of Ethiopia&apos;s coffee highlands, where our father spent his youth traveling with our grandfather, a small trader. He learned what the land means to the people who have worked it for generations, seeing coffee as a living tradition. For 30 years, he worked in Ethiopia&apos;s local coffee markets, building relationships with producers and understanding quality at its source.
            <br />
            <br />
            In 2022, we, two brothers, took what he built locally and made it international. From our office and warehouse in Addis Ababa, we walk the washing stations during harvest, oversee processing at partner mills, and cup samples in Addis to personally ensure what leaves Ethiopia is what lands in your port with consistent, sample-to-bag accuracy.
            <br />
            <br />
            Sourcing from us connects your customers directly to the heart of Ethiopia. We ensure the farmers and cooperatives we work with receive fair and premium payment for their work, honoring the skill and dedication behind every lot. You are sharing a story of heirloom varietals, refined traditions, and the respected hands that make this coffee possible.
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

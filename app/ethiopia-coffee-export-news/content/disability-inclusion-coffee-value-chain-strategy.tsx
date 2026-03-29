import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function DisabilityInclusionCoffeeValueChainStrategy({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <p className='text-xs text-gray-400 italic'>March 18, 2018 E.C. | Ibushaba</p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The handover of the Strategy Document for the Inclusion of Persons with Disabilities in the Coffee Value Chain, prepared by GIZ Fund, was held. The event also featured a presentation of activities carried out by two entities in Jimma Zone, Jimma City and Seka Chekorsa Woreda, Seka City, organized by Shisheir Action for Inclusion Association.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Seka City Association Engaged in Coffee Cultivation and Value-Added Production</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The report stated that the Seka City association is engaged in coffee cultivation on agricultural land donated by the Woreda Administration. Coffee roasting, grinding and packaging technologies have been donated to the association to enable engagement in value-added coffee production. The district administration supported the initiative by providing space for the farmers to work on the land, and for this contribution, great gratitude and appreciation was expressed to the district administration.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Commitments Made to Continue and Grow the Program</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          It was decided that the work already started should be continued, that the coffee planted by persons with disabilities should be grown and produced by them, and that value-added products should be sold and the proceeds used for their benefit. The head of the office of the Director General of the Authority, Ato Sifisa Ababoo, urged the relevant parties to play their respective roles in this regard.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Broader Inclusion Work at the Coffee Training Center</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          It was also noted that the Authority's Coffee Training Center has trained persons with disabilities in various coffee sectors and provided them with job opportunities in the sectors in which they were trained. Additional inclusion-focused activities included a study on inclusion, the development of a website, and other related works. The strategy document handed over on the day was described as one outcome of this broader body of work.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Report by: Ashenafi Getahun
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li><Link href='/ethiopian-coffee-jimma' className='text-blue-600 hover:underline'>Ethiopian Jimma Coffee</Link></li>
          <li><Link href='/ethiopian-coffee-exporter' className='text-blue-600 hover:underline'>Ethiopian Coffee Exporter</Link></li>
          <li><Link href='/buy-ethiopian-coffee-wholesale' className='text-blue-600 hover:underline'>Buy Ethiopian Coffee Wholesale</Link></li>
        </ul>
      </div>

      {source && (
        <p className='text-xs text-gray-400 mt-8 italic border-t border-gray-200 pt-4'>
          Source: {source}
        </p>
      )}
    </>
  )
}

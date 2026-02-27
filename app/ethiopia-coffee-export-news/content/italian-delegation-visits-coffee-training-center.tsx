import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function ItalianDelegationVisitsCoffeeTrainingCenter({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>High-Level Italian Visit to ECTA</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The Director General of Development Cooperation for the Italian Ministry of Foreign Affairs, H.E. Stefano Gatti and Michele Morana, Head of Office of the Italian Agency for Development Cooperation (AICS) in Addis Ababa, visited the Ethiopian Coffee Training Center (ECTA) in Addis Ababa, the first of its kind in East Africa.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>A Model for Ethiopia&ndash;Italy Cooperation</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Joined by senior officials from the Italian Embassy, UNIDO, the Ministry of Agriculture, and the Ethiopian Coffee &amp; Tea Authority, the delegation praised the center as a model for building skilled manpower, strengthening Ethiopia&apos;s coffee sector, and deepening Ethiopia&ndash;Italy cooperation.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Scaling Up to Continental Level</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          H.E. Dr. Adugna Debella highlighted that the center is already serving trainees from across Africa and will be scaled up to a continental level.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li><Link href='/ethiopia-coffee-export-news/technologies-coffee-training-donated' className='text-blue-600 hover:underline'>Technologies for Coffee Training Services Donated</Link></li>
          <li><Link href='/ethiopia-coffee-export-news/coffee-interpretation-center-inauguration' className='text-blue-600 hover:underline'>Coffee Interpretation Center Inaugurated</Link></li>
          <li><Link href='/ethiopian-coffee-exporter' className='text-blue-600 hover:underline'>Ethiopian Coffee Exporter</Link></li>
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

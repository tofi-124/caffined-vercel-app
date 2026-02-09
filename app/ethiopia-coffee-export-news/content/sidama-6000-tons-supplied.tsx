import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function Sidama6000TonsSupplied2026({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Hawassa - Mesfin Qare, Director General of the Sidama Regional Coffee, Fruits and Spices Authority, said that more than 6,000 tons of coffee were supplied to the central market in the past months of the fiscal year.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          He announced that activities such as organizing coffee production in clusters, pruning old trees and replacing them with new varieties are underway to increase supplies to the central market. Collaboration with research institutions is expanding improved varieties adapted to local ecologies.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Mr. Mesfin added that over 232 coffee-producing industries are preparing vermicompost and distributing it to farmers. Of the 5.2 million tons of organic fertilizer produced this year, 3.1 million tons have been used, with the remainder earmarked for March planting.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The authority noted that of the 176,000 hectares under coffee in the region, 148,000 hectares are productive. In Bensa Woreda, programs to improve farmers’ economic benefits have led to significant uptake: more than 19 processing industries and farmers there produced over 365,000 tons of organic fertilizer.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Source: EZEA
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li><Link href='/insights/sidama-coffee-production-productivity-export' className='text-blue-600 hover:underline'>Sidama Coffee Production Guide</Link></li>
          <li><Link href='/offerings' className='text-blue-600 hover:underline'>View Available Sidama Coffee Lots</Link></li>
        </ul>
      </div>
    </>
  )
}

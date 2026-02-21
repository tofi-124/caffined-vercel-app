import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function ItalyAmbassadorCoffeeTeaAuthorityVisit({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>Enduring Friendship for Superior Coffee Development</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The Italian Ambassador to Ethiopia, H.E. Sem Fabrizi, conducted an official visit to the Ethiopian Coffee and Tea Authority on 20 February 2026, holding extensive discussions with the Director General, H.E Dr. Adugna Debela. During their meeting, both parties reflected on the historic, long-standing friendship between Ethiopia and Italy. They reaffirmed their commitment to further strengthening the robust economic partnership that has defined the bilateral relations between the two nations for long years.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Gratitude for Italy&apos;s Support</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Dr. Adugna Debela expressed his heartfelt gratitude for Italy&apos;s unlimited support for the development of Ethiopia&apos;s coffee industry. He specifically highlighted Italy&apos;s instrumental role in establishing the Coffee Training Center, as well as its consistent technical and financial support. The Director General also presented an overview of Ethiopia&apos;s coffee industry and its successes including some critical challenges like international price volatility.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Ethiopian Coffee in Italian Hearts</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          H.E. Sem Fabrizi emphasized that Ethiopian coffee holds a special place in the hearts of Italian consumers, boasting unrivaled popularity. He commended the Authority&apos;s strategic efforts and pledged Italy&apos;s ongoing technical and financial support to boost Ethiopia&apos;s global standing. Ultimately, he reiterated Italy&apos;s commitment to standing side-by-side with Ethiopia to ensure sustainable growth across the coffee value chains.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Tour of the Coffee Training Center</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Finally, the Ambassador visited the state-of-the-art Coffee Training Center and observed the Authority&apos;s modern online market controlling system. He expressed his admiration for the integration of technology in the coffee value chain, which aims to enhance transparency and efficiency. This visit marks another milestone in the collaborative journey to modernize Ethiopia&apos;s &ldquo;green gold&rdquo; and expand its footprint in the international market.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li><Link href='/ethiopia-coffee-export-news/italian-delegation-visits-coffee-training-center' className='text-blue-600 hover:underline'>Italian Delegation Visits Ethiopian Coffee Training Center</Link></li>
          <li><Link href='/ethiopia-coffee-export-news/technologies-coffee-training-donated' className='text-blue-600 hover:underline'>Technologies for Coffee Training Services Donated</Link></li>
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

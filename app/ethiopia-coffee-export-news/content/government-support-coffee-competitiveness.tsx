import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function GovernmentSupportCoffeeCompetitiveness({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>Growing Global Demand for Ethiopian Coffee</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Exporters of the sector stated that the government&apos;s comprehensive support for the coffee sector has significantly increased the competitiveness and preference of Ethiopian coffee in the global market.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Currently, the demand for Ethiopian coffee is increasing globally, and new market destinations are increasing.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Following this, the country&apos;s foreign exchange earnings from the sector are increasing from time to time; Ethiopia was able to export 469 thousand tons of coffee to the world market in the 2017 fiscal year, earning 2.65 billion dollars.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Record Export Earnings and $3 Billion Target</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          This is the highest revenue and quality level in the country&apos;s coffee history; the government is working hard to maintain this result and increase the revenue to three billion dollars this year.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Exporter Perspectives on Government Support</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          According to coffee exporters interviewed by EZA; He said that the government&apos;s support for the growth and success of the coffee sector is significant.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Gebremeskel Hailu, Director of Tadesse Desta Specialized Coffee Export, said; The special attention given by the government to the sector has made Ethiopian coffee in demand in all parts of the world, beyond Europe, America and China.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li><Link href='/ethiopian-coffee-exporter' className='text-blue-600 hover:underline'>Ethiopian Coffee Exporter</Link></li>
          <li><Link href='/buy-ethiopian-coffee-wholesale' className='text-blue-600 hover:underline'>Buy Ethiopian Coffee Wholesale</Link></li>
          <li><Link href='/ethiopian-coffee-yirgacheffe' className='text-blue-600 hover:underline'>Ethiopian Yirgacheffe Coffee</Link></li>
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

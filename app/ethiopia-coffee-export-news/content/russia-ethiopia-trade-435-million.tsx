import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function RussiaEthiopiaTrade435Million({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>Bilateral Trade Nearly Triples to $435 Million</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Trade between Russia and Ethiopia surged to more than $435 million in 2025, nearly tripling from the previous year, underscoring a deepening economic relationship shaped by commodities, agriculture, and emerging technology partnerships.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The Russian Ambassador to Ethiopia, Evgeny Terekhin, disclosed the figures in comments to Russian state media, attributing the sharp rise to stronger exports of fertilisers, agricultural machinery, and energy equipment from Russia, alongside growing Ethiopian sales of coffee, flowers, and textiles.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Ethiopian Coffee Exports to Russia Surge</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Coffee has become the most prominent symbol of this trade upswing. Ethiopian beans, particularly from the Sidamo and Harar regions, have gained significant traction among Russian consumers. According to the ambassador, Ethiopia&apos;s coffee exports to Russia rose from about $46 million in 2024 to an inflation-adjusted $123 million in 2025. Import volumes more than doubled over the same period, climbing from 8,300 tonnes to approximately 18,300 tonnes.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>E-Commerce and Industrial Cooperation</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Beyond goods, cooperation is extending into digital commerce. Ethiopian authorities have granted Russian online marketplaces a so-called green corridor, easing regulatory barriers for market entry. Wildberries and Russ, now operating under the merged entity RWB, are preparing to launch operations in Ethiopia after adapting their platforms to local consumer preferences.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The ambassador also linked the trade boom to progress on large-scale industrial cooperation. At a bilateral intergovernmental commission meeting in November 2025, Russia&apos;s aluminium producer Rusal signed agreements with Ethiopian Investment Holdings to explore the construction of an aluminium plant in Ethiopia. If realised, the project could position Ethiopia as a regional metals hub.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li><Link href='/ethiopian-coffee-sidamo' className='text-blue-600 hover:underline'>Ethiopian Sidamo Coffee</Link></li>
          <li><Link href='/ethiopian-coffee-harar' className='text-blue-600 hover:underline'>Ethiopian Harar Coffee</Link></li>
          <li><Link href='/ethiopian-green-coffee-beans' className='text-blue-600 hover:underline'>Ethiopian Green Coffee Beans</Link></li>
          <li><Link href='/ordering-info' className='text-blue-600 hover:underline'>How to Order Ethiopian Coffee</Link></li>
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

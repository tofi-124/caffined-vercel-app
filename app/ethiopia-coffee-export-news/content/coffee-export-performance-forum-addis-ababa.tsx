import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function CoffeeExportPerformanceForumAddisAbaba({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <p className='text-xs text-gray-400 italic'>February 23, 2018 (E.C.) &mdash; Addis Ababa</p>

        <h2 className='text-xl font-bold text-dark mt-6'>Ministry of Agriculture and ECTA Convene Sector-Wide Forum</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The Ministry of Agriculture, in collaboration with the Ethiopian Coffee and Tea Authority (ECTA), held a wide-ranging forum with stakeholders at the Ministry of Agriculture Hall. The session reviewed coffee export performance and the key challenges facing the sector in the 2018 Ethiopian fiscal year.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The discussion was attended by representatives from regional governments, coffee exporters, suppliers, value-added coffee exporters, industry associations, cooperatives and unions, and other relevant parties across the Ethiopian coffee supply chain.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Export Performance Review and Global Market Outlook</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The Ethiopian Coffee and Tea Authority presented a detailed report on coffee export performance up to the current month of the fiscal year. In addition, both the Ministry and ECTA jointly presented a research document covering the general situation of the global coffee market and projected future market trends.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          This dual presentation gave attendees a comprehensive view of where Ethiopia stands in the global market and the conditions shaping demand and pricing in key import destinations.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Minister Addisu Arega: Quality Is the Foundation of Competitiveness</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          In his speech, Minister of Agriculture Ato Addisu Arega highlighted the significant role of coffee in earning foreign exchange for the country. "Although the current global price fluctuations are challenging, we must ensure our competitiveness by providing quality products," the Minister said.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          He confirmed that the government will continue to strengthen its support to the sector. Ato Addisu also urged stakeholders to conduct business in a manner that protects the interests of both farmers and the country, and noted that challenges in the value chain can be addressed and resolved jointly with relevant parties.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>ECTA Director General Calls for Modern, Reliable Trading System</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The Director General of the Ethiopian Coffee and Tea Authority, Dr. Adugna Debela, stressed the importance of stakeholder coordination in addressing supply chain challenges. "Our main goal is to establish a modern trading system that benefits producers and farmers and increases the country's export income," he said.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Dr. Adugna compared the global coffee price forecast with historical trends and emphasized that trading practices which benefit both sector participants and the government are ones rooted in producing quality coffee and supplying it reliably to the market.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Consensus on Building an Information-Based Trading System</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          During the consultation forum, participants presented in detail the challenges they faced in the course of their work. The forum reached a consensus on measures that would ensure the effectiveness of Ethiopia's coffee supply in the world market by establishing a modern and reliable trading system grounded in accurate, timely market information.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The outcome reflects growing alignment across government, exporters, and the supply chain on the need for transparency, coordination, and quality as the foundation of Ethiopia's long-term coffee export competitiveness.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li><Link href='/ethiopian-coffee-exporter' className='text-blue-600 hover:underline'>Ethiopian Coffee Exporter</Link></li>
          <li><Link href='/ethiopian-green-coffee-beans' className='text-blue-600 hover:underline'>Ethiopian Green Coffee Beans</Link></li>
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

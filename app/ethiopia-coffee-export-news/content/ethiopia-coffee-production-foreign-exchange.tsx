import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function EthiopiaCoffeeProductionForeignExchange({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The Ethiopian Coffee and Tea Authority announced that Ethiopia’s coffee production is creating significant potential for foreign exchange earnings by increasing international export competitiveness.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Ethiopia is achieving tangible results in the sector by using improved varieties and technologies that increase agricultural productivity. Coffee, which is the main source of Ethiopia’s foreign exchange earnings, is also part of this, and encouraging results have been recorded in the work carried out on coffee production in the past years of change.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          According to Shafi Umer, Deputy Director General of the Ethiopian Coffee and Tea Authority, a variety of activities have been carried out to increase coffee production in the past years of change. He stated that the government is playing a major role in contributing to Ethiopia's economic growth by producing coffee in large quantities, with quality and in a manner that meets international demand.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          He said that the growing culture of replacing old coffee plants with new ones and using technology has enabled significant changes in coffee productivity and foreign exchange earnings. He explained that coffee seedlings planted under the Green Ten Program are creating potential to increase the productivity of the sector.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          He stated that the reform efforts to improve coffee productivity have enabled a significant increase in export earnings. He recalled that when the transitional government began its reform work in 2013, $907 million were earned from coffee exports, and in 2014, the income increased to $1.4 billion. He announced that the successful reform process has helped the sector to earn $1.6 billion in coffee export revenue in the first five months of the 2018 fiscal year.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          He also said that efforts are being made to promote value-added coffee products to the global market in addition to exporting raw coffee. Ethiopian National Coffee Association President Hussein Ambo (Dr.), for his part, said that support is being provided to raise farmers’ awareness and distribute improved coffee seedlings.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          According to information received from the authority, it is planned to export 600,000 tons of coffee products to the foreign market in the 2018 fiscal year, earning more than $3 billion in foreign exchange.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li><Link href='/ethiopian-coffee-exporter' className='text-blue-600 hover:underline'>Ethiopian Coffee Exporter</Link></li>
          <li><Link href='/insights/benefits-investing-ethiopian-coffee-production' className='text-blue-600 hover:underline'>Benefits of Investing in Ethiopian Coffee</Link></li>
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

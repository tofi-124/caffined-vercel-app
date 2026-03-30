import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function Starbucks50MillionCoffeeSeedlingsEthiopia({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <p className='text-xs text-gray-400 italic'>March 30, 2026 | EBR</p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Global coffee giant Starbucks has announced the distribution of 50 million coffee seedlings specifically developed to withstand the pressures of climate change on global coffee production. This distribution will target key coffee-producing nations, including Ethiopia, the birthplace of Arabica coffee, alongside Tanzania, Indonesia, Colombia, Costa Rica, and Honduras. Since launching this initiative in 2017, the company has already delivered 100 million climate-resilient seedlings to smallholder farmers in El Salvador, Guatemala, and Mexico.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>A Lifeline for Ethiopian Producers</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The inclusion of Ethiopia, Africa&apos;s leading coffee producer, is seen as a vital intervention. Currently, Ethiopian coffee farmers are battling rising temperatures, erratic rainfall patterns, and the spread of pests and diseases such as the &quot;Coffee Borer&quot; and &quot;Leaf Rust.&quot;
        </p>
        <p className='text-gray-700 text-sm leading-relaxed'>
          While Ethiopia achieved a record $2.65 billion in coffee export revenue during the 2024/25 fiscal year, recent data from &quot;CropGPT&quot; indicates that rainfall shortages in key growing regions continue to threaten future productivity.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Science-Backed Resilience</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The seedlings were developed at Starbucks&apos; research center in Costa Rica in partnership with Conservation International. They are specifically bred to thrive in harsh climatic conditions. This comes at a critical time, as the International Coffee Organization (ICO) estimates that up to 50% of current coffee-growing land could be lost to climate change by 2050.
        </p>
        <p className='text-gray-700 text-sm leading-relaxed'>
          For Ethiopia, where over 15 million citizens depend on the coffee sector and coffee accounts for 25% of total export earnings, the distribution of these resilient varieties is essential for the long-term sustainability of the industry.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li><Link href='/insights/ethiopian-coffee-climate-change-impact' className='text-blue-600 hover:underline'>Ethiopian Coffee and Climate Change</Link></li>
          <li><Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-blue-600 hover:underline'>Ethiopian Heirloom Coffee Varieties and Landraces</Link></li>
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

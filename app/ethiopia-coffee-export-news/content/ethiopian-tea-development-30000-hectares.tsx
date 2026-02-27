import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function EthiopianTeaDevelopment30000Hectares({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <p className='text-gray-500 text-xs uppercase tracking-widest'>Jimma, Oromia Region</p>

        <h2 className='text-xl font-bold text-dark mt-6'>A Strategic Field Survey in Jimma Zone</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The second day of the tea development field survey, launched in Jimma Zone of Oromia Region and led by His Excellency Dr. Meles Mekonnen and His Excellency Dr. Adugna Debela, with the participation of senior government officials, continued with great activity. This tea development movement, launched by His Excellency Prime Minister Dr. Abiy Ahmed as a special initiative, is currently becoming a great potential to take the country's agricultural productivity to new heights.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          According to the Director General of the Ethiopian Coffee and Tea Authority, His Excellency Dr. Adugna Debela, who was present on the day, this project is not only accompanied by aspirations but also by tangible results and is making its mark on the country's economic structure.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>From 13,000 to 30,000 Hectares</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Regarding the scope of the development, Dr. Adugna Debela explained that currently more than 13 thousand hectares of land are covered with tea plantations, but emphasized that this is not the final goal. According to the Director General, intensive efforts are being made to increase the cultivated area to 30 thousand hectares in the near future.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          In order to achieve this ambitious goal, special attention is being paid to suitable lands in the Oromia and Southwestern regions of Ethiopia. He emphasized that strategic coordination with regional governments will continue to be a cornerstone of the expansion effort.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Oromia Region's Commitment</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The Head of the Oromia Regional State Agriculture Bureau, Ato Getu Gemechu, emphasized that tea cultivation is a sector that has been given "special attention" in the regional agricultural strategy. Ato Getu stated that the region is committed to expanding its tea cultivation by utilizing its natural resources and human capital, and indicated that support and monitoring provided at the office level will continue to be strengthened.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          He explained that this development will not only ensure the benefit of local farmers, but will also play a significant role in increasing the variety of products the region offers to domestic and foreign markets.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Toward Industrial-Scale Tea Production</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Overall, this visit program held in Jimma shows that the Ethiopian tea sector is moving away from traditional practices and towards organized and extensive industrial development. The future plans will not only encourage investors and farmers involved in the sector, but will also pave the way for the country to increase its competitiveness in tea production at the international level.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The coordinated working spirit seen between the federal and regional leaders has been taken as a major guarantee for the success of the project.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li><Link href='/ethiopian-coffee-jimma' className='text-blue-600 hover:underline'>Ethiopian Jimma Coffee</Link></li>
          <li><Link href='/organic-ethiopian-coffee-export' className='text-blue-600 hover:underline'>Organic Ethiopian Coffee Export</Link></li>
          <li><Link href='/ethiopia-coffee-export-news' className='text-blue-600 hover:underline'>More Ethiopian Coffee &amp; Tea News</Link></li>
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

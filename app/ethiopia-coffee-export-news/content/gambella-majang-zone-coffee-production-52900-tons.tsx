import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function GambellaMajangZoneCoffeeProduction({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>Majang Zone Coffee Harvest</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Gambella &mdash; The Department of Agriculture and Natural Resources Development of the zone announced that over 52,900 tons of coffee were produced in the Majang Zone of Gambella Region during the harvest.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The department also stated that more than 42,624 tons of coffee produced in the zone are being processed to supply the central market.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Production Figures and Expansion</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Sisay Belayneh, Head of the Department&rsquo;s Coffee, Tea and Spices Development and Marketing Team, stated that 52,962 tons of coffee were produced in the Majang Zone of the region during this year&rsquo;s harvest.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          He also said that 68,637 hectares of coffee plantations were planted by farmers and investors in Goderena and Mengeshi districts of the zone.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Year-over-Year Growth</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          He said that the coffee production in the zone this year is 17,186 tons higher than the previous year.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          He attributed the results to the favorable rainfall and weather conditions in the zone, intensive coffee planting and care activities, and the increasing benefits that farmers get from coffee cultivation, as well as the special attention paid to the sector.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Source: EZEA
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li><Link href='/ethiopian-green-coffee-beans' className='text-blue-600 hover:underline'>Ethiopian Green Coffee Beans</Link></li>
          <li><Link href='/offerings' className='text-blue-600 hover:underline'>View Available Coffee Lots</Link></li>
        </ul>
      </div>
    </>
  )
}

import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function IcoEthiopiaCoffeeCompetitiveness({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <p className='text-gray-700 text-sm leading-relaxed'>
          International institutions and buyers have stated that the growth in production and exports that Ethiopia is achieving in the coffee sector is taking the country&apos;s influence and competitiveness in the global market to a higher level.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>ICO Director General Praises Ethiopian Coffee</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          International Coffee Organization (ICO) Director General Vanessa Nogueira told EZA that Ethiopia is home to the most wonderful and delicious coffee varieties.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          She stated that Ethiopia&apos;s current efforts to manage the sector with professionalism are yielding great results.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The director said that integrating the production process in rural areas with the digital marketing system is a key factor for its success.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          She also praised the fact that young people are not limited to traditional farming but are widely engaged in modern coffee preparation and export work.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          She said that the overall leadership of the sector, coupled with a change in mindset and attitude, has paved the way for economic success.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Growing Demand from China</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Emily Yip, a Chinese coffee exporter and importer, said that Ethiopian coffee is increasingly popular among Chinese consumers.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          She said that the coffee&apos;s unique fruity flavor and wonderful aroma have made it a unique choice.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Following this, she noted that the amount of coffee imported by China from Ethiopia has been growing significantly.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Ethiopia&apos;s Regional Variety as a Competitive Advantage</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Matti Gulali, founder of Cold Tune Africa, said that another thing that distinguishes Ethiopian coffee from other countries is the diversity of varieties found in each region.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          They said that they are ready to further strengthen trade cooperation by holding extensive trade discussions with Ethiopian exporters.
        </p>
      </div>

      {source && (
        <p className='mt-10 text-xs text-gray-400'>
          Source: {source}
        </p>
      )}

      <div className='mt-10'>
        <Link href='/ethiopia-coffee-export-news' className='text-accent hover:underline text-sm font-semibold'>
          &larr; Back to News
        </Link>
      </div>
    </>
  )
}

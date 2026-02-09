import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function ImprovedCoffeeVarietiesWestHararge2026({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Jan 6, 2026 - The West Hararge Zone Agriculture and Natural Resources Development Office
          announced that improved coffee seedlings are being prepared to increase coffee productivity.
          Approximately 230,000 farmers cultivate coffee on more than 120,000 hectares, Oluma Bedane,
          head of the office’s Coffee, Tea and Spices Team, told EZEA.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The office reported that over 41 million improved coffee seedlings are being prepared for
          planting across 12 coffee-growing districts in the coming winter to expand production. More
          than 20,000 farmers are participating in seedling preparation; seedlings will be planted on
          seven thousand hectares of previously uncultivated land during the summer.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Deputy Administrator of Boke Woreda, Mohamedzain Abdella, said efforts are underway to
          distribute improved varieties to expand cultivation. He noted that more than 3 million
          improved seedlings are being prepared at nursery sites and that seedlings are expected to
          begin producing within two years, with over 2,000 farmers participating in seedling care.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Aisha Ahmed, employed in seedling care near Boke town, told EZEA that planting improved
          coffee seedlings has increased her income over the years.
        </p>

      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li><Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-blue-600 hover:underline'>Ethiopian Heirloom Coffee Varieties</Link></li>
          <li><Link href='/offerings' className='text-blue-600 hover:underline'>View Our Ethiopian Coffee Offerings</Link></li>
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

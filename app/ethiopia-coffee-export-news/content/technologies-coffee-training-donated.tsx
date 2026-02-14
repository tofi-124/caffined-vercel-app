import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function TechnologiesForCoffeeTrainingDonated({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <p className='text-gray-700 text-sm leading-relaxed'>
          A local organization called H&B has donated two coffee machines to the Ethiopian Coffee and Tea Authority. The machines will be used for training at the Authority’s Coffee Training Center, according to the Authority’s Deputy Director General, Ato Shafi Omar.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The organization previously donated jackets to the Authority’s employees. H&B is known for building various industries in Bishoftu city and the Addis Ababa Garment area, producing goods and creating wide-ranging job opportunities while also supporting disadvantaged groups.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          It is worth noting that the Coffee Training Center has received technologies from both local and foreign organizations in the past, which are used to strengthen training services for the Ethiopian coffee sector.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Reported by Ashenafi Getahun
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li><Link href='/ethiopian-coffee-exporter' className='text-blue-600 hover:underline'>Ethiopian Coffee Exporter</Link></li>
          <li><Link href='/ethiopian-green-coffee-beans' className='text-blue-600 hover:underline'>Ethiopian Green Coffee Beans</Link></li>
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

import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function RenameCoffeeArabicaEthiopianCoffee({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>Ethiopia: The True Origin of Coffee Arabica</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The name &quot;Coffee Arabica&quot; should be renamed &quot;Ethiopian coffee&quot; to honor Ethiopia&apos;s historical and scientific contributions as coffee&apos;s birthplace, said a researcher in the area.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Speaking to Gazette Plus, coffee researcher Solomon Tekle emphasized that despite Ethiopia being widely documented as the origin of coffee, it has not received the recognition or equitable benefits it deserves.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          He pointed out that &quot;Coffee Arabica,&quot; native to Ethiopia, is marketed under a name that does not reflect its true source. Solomon criticized other countries for making unsubstantiated claims about being the origin of coffee.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Call for UNESCO Recognition</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The researcher further urged Ethiopian authorities and stakeholders to leverage the scientifically proven data supporting Ethiopia&apos;s status as the cradle of coffee to secure UNESCO recognition for its coffee heritage.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          &quot;Available historical and scientific sources clearly show that coffee originated in Ethiopia,&quot; Solomon stated, underscoring the importance of acknowledging this heritage globally.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li><Link href='/insights/ethiopia-coffee-origin-birthplace' className='text-blue-600 hover:underline'>Ethiopia: Birthplace of Coffee</Link></li>
          <li><Link href='/insights/coffee-plant-taxonomy-species-varieties' className='text-blue-600 hover:underline'>Coffee Plant Taxonomy, Species &amp; Varieties</Link></li>
          <li><Link href='/insights/guide-ethiopian-coffee-origins' className='text-blue-600 hover:underline'>Guide to Ethiopian Coffee Origins</Link></li>
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

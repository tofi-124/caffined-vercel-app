import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function ChildLaborStrategyDocumentHandover({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <p className='text-xs text-gray-400 italic'>March 04, 2018 &mdash; Ibushaba</p>

        <h2 className='text-xl font-bold text-dark mt-6'>500 Copies of Strategy Document Handed Over to Ethiopian Coffee and Tea Authority</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The two entities jointly handed over 500 copies of the Strategy Document to prevent child labor, which was finalized by the GIZ Fund and Care Ethiopia, to the Ethiopian Coffee and Tea Authority.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Director General Emphasizes Document&rsquo;s Role in Preventing Exploitation</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          At the handover ceremony, the Director General of the Authority, Honorable Dr. Adugna Debela, said that many issues have been addressed in relation to the European Union regulations and that although the distance covered in relation to child labor has been limited, much has been done in relation to this strategy document. He expressed his belief that this important document will not only raise awareness but also help in the efforts to prevent exploitation.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          He thanked GIZ, Care Ethiopia, the institution&rsquo;s managers and staff for their participation in the work. He further noted that the relevant body should be consulted for the implementation of this document.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Training on Child Labor Delivered Across Key Coffee Regions</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          In this regard, the Authority, in collaboration with the United Nations Industrial Development Organization (UNIDO), the International Labor Organization (ILO) and the Federal Ministry of Labor and Skills, has provided training on child labor to coffee sector developers, industrial owners and exporters in Addis Ababa, Hawassa and Jimma in accordance with international and national laws in line with European regulations.
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

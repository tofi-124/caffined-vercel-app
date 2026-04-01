import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function EctaMouAddisAbabaScienceTechnologyUniversity({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <p className='text-gray-700 text-sm leading-relaxed'>
          A major Memorandum of Understanding (MoU) has been signed to modernize Ethiopian coffee production through science and technology, with the goal of increasing its competitiveness in the global market. The agreement was signed by the Director General of the Ethiopian Coffee and Tea Authority, His Excellency Dr. Adugna Debela, and the Vice President for Academic Affairs of Addis Ababa Science and Technology University, Dr. Kemal Ibrahim.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Key Focus Areas of the Agreement</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          This strategic partnership aims to develop new practices in the coffee sector by utilizing the university&apos;s biotechnology and engineering capabilities. The agreement covers the following key areas:
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Waste-to-Value</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Converting coffee waste products into value in an environmentally friendly manner. This includes using coffee by-products for research and development to produce pharmaceuticals, cosmetics, and lubricants — turning what was once discarded into high-value outputs.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Meeting International Standards</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Conducting research aligned with strict new regulations issued by Europe and other countries, such as environmental protection and deforestation laws (EUDR). This ensures Ethiopian coffee remains compliant and competitive in premium export markets.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Technology Transfer</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Designing and researching modern coffee production equipment domestically. By building local manufacturing and engineering capacity, Ethiopia can reduce dependence on imported machinery and develop tailored solutions for its coffee sector.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Quality and Traceability</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Ensuring the quality level and traceability of Ethiopian coffee through modern laboratories and technology to increase its demand in the global market. Advanced testing and tracking systems will reinforce buyer confidence in Ethiopian coffee exports.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Capacity Building</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Empowering human resources by jointly providing short and long-term training to professionals in the sector. This collaborative approach to workforce development ensures the Ethiopian coffee industry has the skilled talent it needs to compete globally.
        </p>

        <div className='bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6'>
          <p className='text-gray-800 text-sm leading-relaxed font-medium italic'>
            &ldquo;This agreement is a crucial step that will take research-based coffee development to a new stage and ensure the economic benefits of the country!&rdquo;
          </p>
        </div>

        <p className='text-gray-700 text-sm leading-relaxed mt-4'>
          This partnership will be of great benefit to Ethiopia&apos;s &ldquo;black gold&rdquo; coffee — ensuring it is not only traditional but also supported by science and research, and is available to the global market with the quality and standards that modern buyers demand.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li><Link href='/ethiopia-coffee-export-news/ecta-mou-vocational-training-institute' className='text-blue-600 hover:underline'>ECTA Signs MoU with Federal Technical and Vocational Training Institute</Link></li>
          <li><Link href='/ethiopia-coffee-export-news/ectms-handover-ecta-giz-traceability' className='text-blue-600 hover:underline'>Ethiopia Completes ECTMS Handover for Coffee Traceability</Link></li>
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

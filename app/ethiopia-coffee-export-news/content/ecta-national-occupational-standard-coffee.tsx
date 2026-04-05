import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function EctaNationalOccupationalStandardCoffee({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The Ethiopian Coffee and Tea Authority (ECTA), in collaboration with the Ministry of Labor and Skills, held a wide-ranging discussion with relevant stakeholders on the newly developed Occupational Standard (OS) for the coffee industry. The forum was attended by senior government officials, regional representatives, industry associations, university scholars and development partners.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>A Major Step Forward</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          In his message to the forum, the Director General of the Authority, Honorable Dr. Adugna Debela, stated that the measures taken by the Authority to identify the root causes of coffee production and marketing challenges are achieving tangible changes. In particular, he noted that the establishment of the Coffee Training Center (CTC) to modernize coffee post-harvest handling and human resource development is a major breakthrough.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Objectives of the Occupational Standard</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The new Occupational Standard (OS) was developed to address critical gaps in the coffee sector:
        </p>
        <ul className='list-disc pl-6 space-y-2 text-gray-700 text-sm leading-relaxed'>
          <li><span className='font-semibold'>Global Benchmarking:</span> Ensure that training programs provided by the Coffee Training Center meet international quality standards.</li>
          <li><span className='font-semibold'>National Uniformity:</span> Establish a consistent professional measurement framework across Ethiopia, creating a uniform standard at the national level.</li>
          <li><span className='font-semibold'>Global Competitiveness:</span> Empower Ethiopian coffee professionals with recognized certifications that increase their international standing and competitiveness.</li>
        </ul>

        <h2 className='text-xl font-bold text-dark mt-6'>Backbone for Long-Term Growth</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Expressing his gratitude to the stakeholders involved in the drafting process, the Director General emphasized that once ratified, this document will serve as the backbone for the sector&apos;s long-term growth and modernization.
        </p>

        <div className='bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6'>
          <p className='text-gray-800 text-sm leading-relaxed font-medium italic'>
            &ldquo;Once approved and put into operation, this Occupational Standard will be the backbone for the coffee sector&apos;s development and modernization.&rdquo;
          </p>
          <p className='text-gray-500 text-xs mt-2'>— Dr. Adugna Debela, Director General, ECTA</p>
        </div>

        <p className='text-gray-700 text-sm leading-relaxed mt-4'>
          This milestone marks a new chapter for Ethiopia&apos;s coffee industry, positioning the country to produce internationally certified professionals who can uphold the quality and reputation of Ethiopian coffee in global markets.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li><Link href='/ethiopia-coffee-export-news/coffee-training-center-effectiveness-study' className='text-blue-600 hover:underline'>Study on Coffee Training Center Effectiveness and Benefits</Link></li>
          <li><Link href='/ethiopia-coffee-export-news/ecta-mou-vocational-training-institute' className='text-blue-600 hover:underline'>ECTA Signs MoU with Federal Technical and Vocational Training Institute</Link></li>
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

import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function EuCafeProjectSixMonthReview({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>Six-Month Performance Review Completed</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The EU-CAFÉ Project, which operates under the Ethiopian Coffee and Tea Authority (ECTA), has completed a two-day performance review forum in Addis Ababa. Senior officials of the authority, regional coffee and tea representatives, research institution representatives, project Focal Persons, and federal experts attended the forum.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          During the review, the six-month journey of the project was thoroughly assessed and a consensus was reached on the tasks to be prioritized and completed in the next three months.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Promising Results for Coffee Farmers</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          According to Ato Sifisa Abababu, Head of the Office of the Director General of the Authority, promising work has been done to grow the coffee sector and ensure the benefits of farmers in the districts where the project is implemented. Activities planned in the first six months are reported to be on schedule and on track.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The project has been recognized as playing a significant role in addressing structural bottlenecks across the Ethiopian coffee sector, contributing to improvements in quality, productivity, and market access for smallholder farmers.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Three Priorities for the Final Quarter</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Despite the positive performance, Ato Sifisa issued three key recommendations to ensure momentum is maintained through the project&rsquo;s final phase:
        </p>

        <ul className='list-disc list-inside space-y-2 text-gray-700 text-sm leading-relaxed pl-2'>
          <li>
            <strong>Coordination:</strong> The remaining activities should be carried out in a more organized and coordinated manner across all stakeholders and regions.
          </li>
          <li>
            <strong>Data management:</strong> All activities carried out to date should be consolidated with sufficient documentation and used as input for future planning and policy.
          </li>
          <li>
            <strong>Result-oriented work:</strong> The project should be successfully completed by maintaining a clear focus on the goals set for the remaining months.
          </li>
        </ul>

        <h2 className='text-xl font-bold text-dark mt-6'>Significance for Ethiopian Coffee Export</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The EU-CAFÉ Project represents a meaningful commitment to improving the quality and productivity of Ethiopian coffee at origin. As global buyers increasingly demand traceability, quality consistency, and ethical sourcing, initiatives like EU-CAFÉ directly strengthen Ethiopia&rsquo;s competitiveness as a leading green coffee exporter.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The current evaluation underscores the importance of structured project governance and stakeholder alignment in delivering long-term, measurable reforms to the Ethiopian coffee sector.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li><Link href='/ethiopian-coffee-exporter' className='text-blue-600 hover:underline'>Ethiopian Coffee Exporter</Link></li>
          <li><Link href='/coffee-grading-ethiopia' className='text-blue-600 hover:underline'>Coffee Grading in Ethiopia</Link></li>
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

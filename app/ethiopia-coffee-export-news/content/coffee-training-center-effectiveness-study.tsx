import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function CoffeeTrainingCenterEffectivenessStudy({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>Study Presented to Stakeholders</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The Ethiopian Coffee and Tea Authority has presented a study conducted by Abera Feyisa Consulting Services, a private company, to relevant stakeholders and partners on the effectiveness and benefits of the Coffee Training Center.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The study examined the content of the training modules at the center, training delivery, flexibility, and adequacy of training schedules.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Training Module Quality and Delivery</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The study showed that 90 percent of the trainers were very good in terms of the content of the modules, meeting international standards and meeting the needs of the industry.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          In terms of the quality of training delivery, 76 percent of the trainers and 70 percent of the trainees said that there was a good and quality training process. However, the study found that the training period did not provide enough time to provide both theoretical and practical training.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Effectiveness and Impact</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The study showed that the effectiveness and impact of the center were in terms of the performance of the coffee sector in the coffee sectors where the training was provided, the communication with global coffee buyers, the self-confidence and decision-making of the trained workforce.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          It was also noted that 22 percent of the trainees started their own businesses and 10 percent of the female trainees reached the level of being entrepreneurs, and the study showed that 13 percent of existing coffee businesses expanded.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          In general, it was indicated that the center&apos;s contribution to value addition, skilled workforce, job creation, income improvement, and market competitiveness was high and will continue to be high.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Areas for Improvement</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The study also looked at areas that need to be improved and added. Accordingly, the study identified the mismatch between the training needs and the capacity of the center, the lack of adequate training materials, the limited communication skills of the trainers, the number of trainees only in limited trainings, the limited space of the center, and the lack of a clear mandate for issuing quality certificates.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Next Steps and Recommendations</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          While discussing the next steps, suggestions were made that trainings such as climate change and entrepreneurship should be included, the training should be digitalized, the center should be expanded to coffee-growing areas, and working in collaboration with relevant regional and international private and government organizations.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          When the study was presented, the Director General of the Authority, Honorable Dr. Adugna Debela, who was present at the site, said that the expert conducted the study with the aim of improving the quality of the center by identifying its strengths and weaknesses, strengthening the strengths, and addressing the weaknesses.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          He said that work has begun to expand the center to coffee-growing regions and that a center has been opened in Jimma Zone.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          He said that in terms of material supply, it was possible to obtain a lot of material assistance by contacting domestic and foreign partners and stakeholders, and that the official had already taken the initiative to work in coordination.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li><Link href='/ethiopia-coffee-export-news/ecta-training-hawassa-jimma-coffee-quality' className='text-blue-600 hover:underline'>ECTA Launches Coffee Quality Training in Hawassa and Jimma</Link></li>
          <li><Link href='/ethiopia-coffee-export-news/italian-delegation-visits-coffee-training-center' className='text-blue-600 hover:underline'>Italian Delegation Visits Ethiopian Coffee Training Center</Link></li>
          <li><Link href='/ethiopian-coffee-exporter' className='text-blue-600 hover:underline'>Ethiopian Coffee Exporter</Link></li>
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

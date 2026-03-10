import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function CivilServiceReformAwarenessForum({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>Forum Overview</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          February 2018 A.D. — Last week, the National Civil Service Reform Executive Committee of Ibushaba held an awareness raising forum at the institution&apos;s meeting hall to present the activities it has carried out in terms of implementing the reform to the employees and officials of the institution.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Digital Technologies for Paperless Management</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The integration of technologies such as biometrics for employee entry and exit control, digitalization of annual leave and information storage (ICIMIS), and IFIMIS, which is used for budget and asset management, was emphasized in this awareness raising forum. It was stated that integrating these three technologies will enable paperless control of working hours, annual leave and salary payment.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Competency and Character Assessment</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          At the time, a PowerPoint presentation was presented on the competency and character assessment in connection with the reform. Ideas were presented from the forum on what the assessments could look like in terms of content, what to focus on, and how to prepare.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Finally, the forum ended with the election of a new disciplinary committee by the authority.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Coffee Traceability Systems</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          In addition to the implementation of the system as a country, it is worth remembering that the authority has previously been implementing and improving the coffee trail tracking technologies such as MIMS and later ECTMS.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          As reported by Ashenafi Getahun
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li><Link href='/ethiopian-coffee-exporter' className='text-blue-600 hover:underline'>About Ethio Coffee Export</Link></li>
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

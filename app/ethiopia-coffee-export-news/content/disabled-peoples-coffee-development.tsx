import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function DisabledPeoplesCoffeeDevelopment2025({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>Jimma Zone Coffee Pilot Project</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Jima Zone, Seka Chekorsa Woreda - The implementation of the Cafe Project pilot, launched by the indigenous NGO Light for the World, was visited and handed over during a closing ceremony attended by senior officials including Hon. Ato Tagay Nuru, Deputy Director General of the Ethiopian Coffee and Tea Authority.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The project aims to engage Disabled People's Associations in Jimma Zone and Jimma City in coffee cultivation and value-added production. With support from the Woreda administration, the association received coffee plantation land, 5,000 seedlings, and value-addition equipment including roasting, grinding and packaging machines.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Light for the World provided technology and Chiesheir implemented procurement, with financial support from GIZ. A 200 m² area was allocated for machinery and a 35 m² shed built for protection. The locally manufactured grinder and other machines include dust collection and waste disposal features to minimize environmental impact.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Value-Added Production and Market Access</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Training on machine operation was delivered by experts, and a local marketing arrangement was agreed between the Seka Chekorsa and Jimma associations to ensure a sustainable value chain. Officials urged beneficiaries to maintain the resources responsibly and continue coordination for future projects.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The ceremony featured speeches from ECTA leadership and partner organizations emphasizing capacity building, inclusion, and the project's potential to integrate persons with disabilities into coffee sector livelihoods.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Report by: Ashenafi Getahun
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li><Link href='/ethiopian-coffee-jimma' className='text-blue-600 hover:underline'>Ethiopian Jimma Coffee</Link></li>
          <li><Link href='/offerings' className='text-blue-600 hover:underline'>View Ethiopian Coffee Offerings</Link></li>
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

import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function CoffeeInterpretationCenterInauguration({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>Official Launch of the Coffee Interpretation Center</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The Ethiopian Coffee and Tea Authority, in collaboration with the Spanish Cooperation, inaugurated and officially launched the Coffee Interpretation Center (CIC).
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The Honorable Dr. Adugna Debela, the Ethiopian Coffee and Tea Authority, together with his Deputy, Honorable Ato Shafi Omar, and the Spanish Cooperation officials, inaugurated the center. Officials of OSSREA and WOMEN IN COFFEE were also present at the inauguration program. During the inauguration, they viewed the internal organization of the center and were given a presentation on the coffee theme displayed on each display.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Research and Resource Development</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Organizations called OSSREA and WOMEN IN COFFEE played a key role in conducting research and gathering the resources needed for the center.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The center will serve as a knowledge and skill-building facility covering what coffee looks like from seed to export. Its content includes the history of coffee, the role of women in the coffee sector, the benefits of coffee for economic and social life, and other related topics. The center will introduce the global story of coffee to the world.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Phased Development with Digital Modernization</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The inauguration marks the first phase (Phase 1) of the project. The second phase (Phase 2) will focus on digitalizing the center&apos;s construction and exhibits.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Both phases of organizing the center are being carried out by an indigenous organization called Ablaze Lab. In an interview with the founder and owner of the organization, they explained the activities planned for digitization: two software applications will be developed, and technologies such as animation will be used to modernize the center. It will become a facility supported by video and audio (image and sound).
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Broader Coffee Center Initiatives</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The Ethiopian Coffee Growing Authority is working on building various coffee centers, following a recent discussion with the Italian Minister of Foreign Affairs.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed italic'>
          Reported by Ashenafi Getahun
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li><Link href='/insights/ethiopia-birthplace-of-coffee' className='text-blue-600 hover:underline'>Ethiopia: Birthplace of Coffee</Link></li>
          <li><Link href='/insights/women-in-ethiopian-coffee-industry' className='text-blue-600 hover:underline'>Women in Ethiopian Coffee: Farm to Export</Link></li>
          <li><Link href='/insights/ethiopian-coffee-ceremony' className='text-blue-600 hover:underline'>Ethiopian Coffee Ceremony: Tradition, Steps &amp; Why It Matters</Link></li>
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

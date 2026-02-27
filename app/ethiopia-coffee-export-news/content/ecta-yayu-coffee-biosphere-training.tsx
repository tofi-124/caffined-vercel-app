import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function EctaYayuCoffeeBiosphereTraining({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>{title}</h1>

      <div className='space-y-4'>
        <p className='text-gray-700 text-sm leading-relaxed'>
          METTU, ETHIOPIA: As Ethiopia intensifies its push for sustainable agricultural exports, the Ethiopian Coffee and
          Tea Authority (ECTA) has launched a landmark three-day intensive training program aimed at strengthening forest
          coffee management within the Yayu Coffee Forest Biosphere Reserve.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Designed to elevate the production and marketability of forest coffee in the EU-Yayu-DeSIRA Project areas, the
          program brought together cooperative leaders, union experts, and regional officials. The goal is to bridge
          traditional forest conservation with modern, market-competitive coffee production, improving quality while
          sustaining the environment.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Theory-to-Practice Training Model</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Running from February 24–26, 2026, the training follows a “theory-to-practice” approach. Participants focus on
          the technical foundations of integrated landscape management and then move into hands-on field sessions at the
          Mettu Coffee Laboratory and demo plots in Yayu Woreda.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Collaboration with Leading Institutions</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          To ensure high-quality instruction, ECTA delivered the trainings in collaboration with Jimma Agricultural
          Research Centre (JARC), Addis Ababa Coffee Liquor Unit (CLU), and the Ilu-Ababore Agricultural Office.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Yayu: A Global Heritage and Genetic Goldmine</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          In his opening speech, Mr. Awol Mohammad, Vice Head of the Illubabor Zone Agriculture Department, emphasized
          that the Yayu Biosphere is not only a forest, but a global heritage site and a genetic goldmine for Arabica
          coffee. He noted that the biosphere’s dense forest is a critical asset for Ethiopia’s environmental resilience
          and its economy.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          He added that the project is not just about growing more coffee. It is about growing better coffee that
          respects the forest’s integrity. He encouraged trainees to act as catalysts by cascading best practices down to
          individual farmers and helping transform the six woredas into a benchmark for climate-friendly, innovative, and
          high-quality coffee.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          He also added that the ultimate goal of the trainings is a dual-purpose victory: protecting the biosphere’s
          environmental resilience while significantly improving farmer livelihoods through increased productivity,
          higher quality, and better income generation.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Expected Outcomes</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Ato Moges Ashenafi, representing ECTA as Coffee, Tea and Spices Development Lead Executive, explained that
          significant activities are being carried out under the project. He stated that the training is designed to help
          stakeholders identify market barriers, implement modern technologies, and share best practices across the
          project area.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Trainees are expected to exchange experiences, identify constraints, improve the capacity of cooperative and
          union leaders, extension workers and experts at woreda, zone, regional and federal levels, and apply the
          learnings to boost production, productivity, and quality, improving livelihoods through additional income.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>Reported by: Tesfu Alemayehu</p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li>
            <Link href='/ethiopian-green-coffee-beans' className='text-blue-600 hover:underline'>
              Ethiopian Green Coffee Beans
            </Link>
          </li>
          <li>
            <Link href='/ethiopian-coffee-jimma' className='text-blue-600 hover:underline'>
              Ethiopian Jimma Coffee
            </Link>
          </li>
          <li>
            <Link href='/ethiopian-coffee-guji' className='text-blue-600 hover:underline'>
              Ethiopian Guji Coffee
            </Link>
          </li>
          <li>
            <Link href='/buy-ethiopian-coffee-wholesale' className='text-blue-600 hover:underline'>
              Buy Ethiopian Coffee Wholesale
            </Link>
          </li>
        </ul>
      </div>

      {source && (
        <p className='text-xs text-gray-400 mt-8 italic border-t border-gray-200 pt-4'>Source: {source}</p>
      )}
    </>
  )
}

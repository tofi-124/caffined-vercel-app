import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function EctaTrainingHawassaJimmaCoffeeQuality({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>Comprehensive Training Platform Launched</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The Ethiopian Coffee and Tea Authority has launched a comprehensive training platform in Hawassa and Jimma cities that will explore the coffee value chain from start to finish.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          It has been announced that a comprehensive training program for professionals aimed at taking coffee quality and productivity to the next level in Ethiopia has been launched in Hawassa and Jimma cities. In his opening speech at the Hawassa forum, the Deputy Director General of the Ethiopian Coffee and Tea Authority, Ato Tagay Nuru, stated that what makes the training unique is that it covers the entire journey of the coffee value chain, from the initial production process to marketing.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Addressing Operational Challenges</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Emphasizing that this integrated training will play a crucial role in addressing operational challenges and maintaining the quality of coffee, Honorable Ato Tagay explained that the authority has designed and implemented strategic packages to increase production and maintain quality standards. Stating that awareness of these modern practices and technologies should reach the grassroots farmers to make them effective, he pointed out that projects designed for this mission have been designed and are being implemented widely. This shows the government's commitment to ensuring the competitiveness of the country's coffee sector, the Deputy Director General emphasized.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Sidama Region's Coffee Sector</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Sidama Regional Coffee and Spices Authority Director General Ato Mesfin Qare, on his part, stated that coffee is a great asset for the region that strengthens social ties beyond drinking. He explained that Ethiopia's coffee export performance last year was impressive; however, compared to major producing countries like Brazil and Vietnam, he noted that there is still a lot of work to be done in terms of productivity and foreign exchange earnings.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          "We need to work hard now, both as a country and as a region," he called on the attendees; Ato Mesfin added that great efforts are being made to increase the productivity rate of 10.13 quintals per hectare in Sidama Region to a higher level.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Training Outcomes and Participation</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          It was pointed out during the training that Sidama Region supplies coffee to the central market at levels one and two, and the training was highly beneficial in further improving the quality level and increasing the production earnings. This movement has opened up new hope for Ethiopian coffee to maintain its dominance in the international market, and the participants expressed their gratitude to the Ethiopian Coffee and Tea Authority and the United Nations Development Program FOLUR project that organized the training.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          More than 150 farmers, development station experts, and experts in the coffee sector from various zones and districts of Sidama, Southern Ethiopia, and Oromia Region participated in the training.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li><Link href='/ethiopian-coffee-sidamo' className='text-blue-600 hover:underline'>Ethiopian Sidamo Coffee</Link></li>
          <li><Link href='/ethiopian-coffee-jimma' className='text-blue-600 hover:underline'>Ethiopian Jimma Coffee</Link></li>
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

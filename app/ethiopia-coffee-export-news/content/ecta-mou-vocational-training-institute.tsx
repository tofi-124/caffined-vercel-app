import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function EctaMouVocationalTrainingInstitute({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>Collaboration on Coffee, Tea and Spices Development</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The Ethiopian Coffee and Tea Authority today signed a MoU with the Federal Technical and Vocational Training Institute to collaborate on the development of coffee, tea and spices.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Before the signing ceremony, the guests were given a tour of the newly renovated office building, the coffee training center and the recently inaugurated coffee training center.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Director General Highlights Effective Partnerships</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Speaking at the signing ceremony, the Director General of the Authority, Honorable Dr. Adugna Debela, said that the Authority has made significant progress in working with various entities by signing agreements to work together. For example, the coffee training and coffee training centers that the institute leaders visited earlier were built through consensus and cooperation with stakeholders and partners.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Since we have understood in practice how effective working together is, we have signed a memorandum of understanding with the institute and expressed our belief that it will help us achieve better performance together. We will work together to develop the coffee, tea and spice sectors by standardizing the curriculum, training experts, and making them accessible to farmers and enabling them to benefit from them, he said.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Institute Recognizes Authority's Modernization</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The Director General of the Federal Technical and Vocational Training Institute, for his part, said that what he had seen during his previous visit was how much the authority was undergoing changes, and that he had seen and appreciated the good work being done in terms of modernizing the system and enabling Ethiopia to utilize its resources in coffee, tea and spices.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Three Key Objectives of the Agreement</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          He further stated that the agreement will achieve three objectives. The first is to improve skills and provide training in the coffee, tea and spices sectors.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The second is related to research and technology — to conduct research and develop technology in the coffee, tea and spices sectors. He also mentioned that coffee and tea processing training will be provided at the level of seven in the institute, and that they would like to work together to increase that. The Director General of the Institute, who stated that the training institute opened by the authority is very modern, said that they can conduct joint research and studies to further develop it.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The third objective concerns business (commercial) work, focused on mass production and entrepreneurship. The official said that the business activities under consideration can benefit from working together with the enterprise established by the institute.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li><Link href='/ethiopian-green-coffee-beans' className='text-blue-600 hover:underline'>Ethiopian Green Coffee Beans</Link></li>
          <li><Link href='/ordering-info' className='text-blue-600 hover:underline'>How to Order Ethiopian Coffee</Link></li>
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

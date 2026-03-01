import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function ChildLaborPreventionCoffeeSectorTraining({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <p className='text-xs text-gray-400 italic'>February 20, 2018 &mdash; Hawassa</p>

        <h2 className='text-xl font-bold text-dark mt-6'>ECTA and UNIDO Deliver Child Labor Training in Line with EU Regulations</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The Ethiopian Coffee and Tea Authority (ECTA), in collaboration with UNIDO, is providing training on child labor in the coffee sector in line with European Union regulations (EUDR). The trainings are focused on national and international policies, concepts, and laws related to child labor.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The training is delivered by trainers from ECTA, the Ministry of Labor and Skills (MOLS), and the International Labor Organization (ILO), and is targeted at coffee sector growers and coffee industry investors from Sidama, Southern, and Oromia regions.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Sidama Authority Director General Issues Market Warning</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          At the opening session, the Director General of the Sidama Regional Coffee, Fruits and Spices Authority, Mr. Mesfin Qare, delivered a welcome speech. He highlighted that one of the four core benefits of the coffee sector is job creation, and warned that involving children in labor is prohibited by international law.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          He stressed that violating child labor regulations risks losing access to the European Union coffee market — a critical export destination for Ethiopian coffee — and urged growers and industry owners not to jeopardize their market access by employing children.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Strengthening Compliance Across the Coffee Value Chain</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The trainings aim to enhance participants' awareness and knowledge of child labor standards at both national and global levels. It is expected that the comprehensive curriculum — covering definitions, concepts, and applicable laws — will meaningfully improve the trainees' capacity to comply with international requirements and protect Ethiopia's reputation as a responsible coffee exporter.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          This initiative is part of Ethiopia's broader effort to ensure its coffee sector meets international social and environmental standards, supporting long-term access to premium export markets, particularly in Europe.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li><Link href='/ethiopian-coffee-exporter' className='text-blue-600 hover:underline'>Ethiopian Coffee Exporter</Link></li>
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

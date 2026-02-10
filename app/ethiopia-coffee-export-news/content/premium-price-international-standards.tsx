import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function PremiumPriceInternationalStandards2026({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>International Standards for Ethiopian Coffee</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Jan 5, 2026 - It has been announced that it is possible to get a good/premium price
          as long as it meets international standards. The announcement was made at a workshop organized
          by the Ethiopian Coffee and Tea Authority in collaboration with the EU YAYU DESIRA project,
          supported by the Hans Neumann Foundation.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The workshop aimed to have scholars from Bahir Dar University explain how Ethiopia can get
          its coffees GI certified according to international, particularly European, standards. Experts
          consulted on how to obtain good or premium prices for Ethiopian coffee by following an
          intellectual property / IP-based strategy.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Geographical Indication and IP Strategy</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Presenters explained the unity and differences between a Trade Mark and a Geographical Indication
          (GI), and highlighted the benefits of an updated GI framework for both the country and the
          coffee-growing community. It was noted that the EU YAYU DESIRA project will publish a research
          document detailing the economic and legal implications of work conducted in implementing districts,
          which will help ensure consistent approaches nationwide and support tea and spice crop development.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The Director General, represented by Ato Sifisa Abababu, Head of the Office of the Director General
          of the Authority, indicated that the Authority is collaborating with research institutions and
          universities to strengthen the sector with knowledge, addressing challenges such as climate change
          and unstable market conditions. He urged timely professional input from leaders and experts at Mettu
          University, Hans Neumann, ECF, PHE, and the Authority regarding the bush coffee document from Yayu.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The discussion continued with participants emphasizing coordinated efforts to leverage research
          outputs and intellectual property strategies to secure better market prices for Ethiopian coffee.
        </p>

      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li><Link href='/coffee-grading-ethiopia' className='text-blue-600 hover:underline'>Ethiopian Coffee Grading System</Link></li>
          <li><Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-blue-600 hover:underline'>Ethiopian Coffee Pricing for Importers</Link></li>
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

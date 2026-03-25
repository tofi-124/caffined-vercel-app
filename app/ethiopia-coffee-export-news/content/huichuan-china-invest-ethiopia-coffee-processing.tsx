import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function HuichuanChinaInvestEthiopiaCoffeeProcessing({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>Huichuan Delegation Meets ECTA Leadership in Addis Ababa</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Chinese industrial firm Huichuan Freeze-Dried Health Food has officially expressed its intent to establish large-scale coffee processing operations inside Ethiopia. The announcement was made during a high-level consultative meeting held on March 25, 2026, at the headquarters of the Ethiopian Coffee and Tea Authority (ECTA) in Addis Ababa.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The company&rsquo;s Chairman and Manager, Mr. Wang Shuiyong, led a senior delegation to the meeting, where discussions were held with ECTA Director General Dr. Adugna Debela on strategic cooperation and investment pathways within Ethiopia&rsquo;s coffee sector.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Freeze-Dried Coffee Already Sourced from Ethiopian Beans</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          During the discussions, Mr. Wang highlighted Huichuan&rsquo;s existing track record in producing premium freeze-dried coffee powder using advanced processing technology. He noted that the company&rsquo;s products, already sourced from Ethiopian coffee beans, have achieved significant international market share and gained global recognition for quality.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Building on that success, Huichuan is now finalizing preparations to establish a large-scale processing presence within Ethiopia itself, with the goal of expanding its global supply chain and capturing more value from Ethiopian origin coffee at source.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Ethiopia's Investment Environment Highlighted</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          ECTA Director General Dr. Adugna Debela welcomed the announcement, describing Huichuan&rsquo;s decision as timely and strategically aligned with Ethiopia&rsquo;s ambitions for value-added coffee processing. He emphasized that Ethiopia has developed a highly favorable environment for foreign direct investment, including specialized industrial parks designed for high-tech food and beverage processing.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          &ldquo;We are seeing a transformative trend where numerous Chinese investors are registering to enter our coffee sector,&rdquo; Dr. Adugna stated. He further assured the Huichuan delegation that the Ethiopian government remains fully committed to providing all necessary administrative and technical support to ensure the project&rsquo;s success across both export markets and domestic supply.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Significance for Ethiopian Coffee Export</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The proposed investment represents a significant development for Ethiopia&rsquo;s ongoing push to move beyond raw green coffee exports and develop domestic value-added processing capacity. Freeze-dried instant coffee commands substantially higher per-kilogram prices than green coffee, and establishing that processing capability inside Ethiopia would retain more economic value in-country.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          For international buyers and roasters sourcing <Link href='/ethiopian-green-coffee-beans' className='text-amber-700 hover:underline'>Ethiopian green coffee</Link>, this investment signals continued global demand for Ethiopian origin beans and growing interest from major processors in securing direct access to Ethiopian supply chains.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-xs text-gray-500'>
          Source: {source} &middot; <Link href='/ethiopia-coffee-export-news' className='underline hover:text-amber-700'>All News</Link>
        </p>
      </div>
    </>
  )
}

import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function WorldTooHotForCoffeePriceSurge({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>Temperatures Unbearable for Coffee Plants</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Ethiopia is traditionally considered the birthplace of coffee. The crop provides the main income for more than 4 million households and a third of the country&apos;s export earnings. However, the &ldquo;coffee belt&rdquo; between the Tropic of Cancer and the Tropic of Capricorn is under threat. Coffee trees, especially Arabica varieties, cannot withstand temperatures above 30&nbsp;°C.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          &ldquo;Coffee farmers in Ethiopia are already feeling the effects of extreme heat. Ethiopian Arabica is particularly sensitive to direct sunlight. Without sufficient shade, coffee trees produce fewer beans and become more susceptible to disease,&rdquo; said Degen Dadi, general manager of the Oromia Coffee Farmers Cooperative Union (OCFCU).
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>The Impact of Global Warming</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Climate change is increasing the number of hot days in key coffee-producing regions. Analysts at Climate Central calculated how many days with temperatures above 30&nbsp;°C were recorded in the main coffee-producing countries between 2021 and 2025. El Salvador was the most affected with 99 additional hot days. Brazil, which accounts for 37% of global coffee production, saw an increase of 70 days. Ethiopia recorded 34 additional days of extreme heat per year.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The heat has had a significant impact on the cost of coffee. According to the World Bank, the cost of Robusta and Arabica beans nearly doubled between 2023 and 2025. In February of last year, coffee bean prices reached an all-time high.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>The Importance of Adaptation</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The coffee industry needs to adapt to climate change urgently, but small farmers receive only a fraction of the total funding for climate measures. According to activists, small producers grow 60–80% of the world&apos;s coffee, yet research shows they received only 0.36% of the amount needed for adaptation.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Just five countries account for about 75% of global coffee production, and the annual number of hot days in those countries has already increased by an average of 57. The question remains how much longer plants will be able to withstand these conditions without major investment in shade management, improved varieties, and climate-resilient farming practices.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li><Link href='/ethiopian-coffee-yirgacheffe' className='text-blue-600 hover:underline'>Ethiopian Yirgacheffe Coffee</Link></li>
          <li><Link href='/ethiopian-coffee-sidamo' className='text-blue-600 hover:underline'>Ethiopian Sidamo Coffee</Link></li>
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

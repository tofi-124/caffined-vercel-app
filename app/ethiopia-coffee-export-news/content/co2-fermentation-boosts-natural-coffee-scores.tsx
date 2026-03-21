import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function Co2FermentationBoostsNaturalCoffeeScores({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>Sealed Containers and CO2 Transform Natural Coffee Quality</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          A new study conducted in Colombia suggests that the use of sealed containers and a small amount of carbon dioxide (CO2) gas can transform ordinary &ldquo;natural&rdquo; coffees into highly specialized coffees.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The study was conducted by researchers at the Colombian Institute of Technology (SENA) and the University of Valle, comparing open-air and closed-air fermentation methods. The researchers fermented coffee beans from a single field using five different types of fermenters before drying them; the coffee was then dried, crushed, and graded on a 100-point scale by the International Specialty Coffee Association (SCA).
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>CO2-Fermented Coffee Scores Highest</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The coffee that had been stored in a sealed container for 24 hours in carbon dioxide gas came out on top with an average score of 86.90, while the coffee that had not been processed at all scored only 82.15.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The study, published in December 2025 in the prestigious Scientific World Journal, is said to point to a new direction for the specialty coffee market &mdash; one that is scientifically proven and can be widely applied, rather than being based only on experience and small-scale experiments.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Filling a Gap in Coffee Fermentation Research</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The researchers noted: &ldquo;Although much research has been conducted on the fermentation process of coffee, most of it has focused on laboratory-controlled or wet processing; its applicability to natural coffee has been limited. In particular, there has been a lack of scientific data on the effect of carbon dioxide-assisted fermentation on natural coffee preparation and chemical composition in real production sites.&rdquo;
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Implications for Coffee Producers</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          This new discovery suggests a simple and effective way for coffee producers to improve quality. The sealed-container CO2 fermentation method could be particularly valuable for natural-process coffee origins, offering a scientifically validated technique to elevate cup scores and market value.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li><Link href='/coffee-grading-ethiopia' className='text-blue-600 hover:underline'>Coffee Grading in Ethiopia</Link></li>
          <li><Link href='/ethiopian-coffee-yirgacheffe' className='text-blue-600 hover:underline'>Ethiopian Yirgacheffe Coffee</Link></li>
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

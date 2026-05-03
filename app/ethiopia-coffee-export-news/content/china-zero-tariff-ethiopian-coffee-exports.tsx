import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function ChinaZeroTariffEthiopianCoffeeExports({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>China Opens a Duty-Free Window for Ethiopian Coffee</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          China&apos;s zero-tariff policy for imports from 53 African countries took effect on May 1, 2026, and Ethiopian coffee exporters immediately identified it as a material trade opportunity. According to CGTN Africa, the policy removes a key cost barrier for Ethiopian coffee entering one of the world&apos;s fastest-growing coffee-consuming markets.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The development matters because Ethiopia has already been building coffee trade momentum in China. Exporters quoted in the report said Chinese demand has expanded sharply over the last several years, turning China from a small niche destination into a serious growth market for Ethiopian origin coffee.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Export Volumes Have Already Moved Higher</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Seid Omer, CEO of Tracon Coffee, told CGTN Africa that Ethiopian coffee exports to China have climbed from roughly 2,000 to 3,000 tons five or six years ago to more than 50,000 tons per year today. Tracon alone exported more than 10,000 tons to China in 2025, underlining how quickly the channel has scaled.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          That growth trend gives the new tariff treatment immediate commercial relevance. Rather than opening an untested market, the policy improves economics in a destination where Ethiopian exporters already have active trade relationships and growing buyer awareness.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>A Clear Pricing Edge Against Competing Origins</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The report highlights the competitive implication directly. Omer noted that Brazilian coffee entering China still faces an 8% import duty plus VAT, while Ethiopian coffee can now enter duty-free. That differential gives Ethiopian exporters more room to compete on price while preserving the premium positioning of Ethiopian Arabica in the market.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          For sellers of <Link href='/ethiopian-green-coffee-beans' className='text-amber-700 hover:underline'>Ethiopian green coffee beans</Link>, that advantage could support stronger market share in China across both specialty and mainstream channels, particularly as Chinese buyers continue to diversify away from a narrow base of supplier origins.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Why the Policy Matters Beyond Coffee Volumes</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          CGTN Africa also framed the change within a wider trade-balance discussion. Researcher Dejene Mamo said duty-free access can help African economies narrow trade deficits by expanding exports into China on more favorable terms. In Ethiopia&apos;s case, coffee is one of the most immediate products capable of turning that policy shift into measurable foreign exchange gains.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The policy is also consistent with the broader direction of Ethiopia&apos;s coffee sector in 2026: improve market access, deepen strategic partnerships, and convert origin strength into stronger export performance. For companies sourcing through an <Link href='/ethiopian-coffee-exporter' className='text-amber-700 hover:underline'>Ethiopian coffee exporter</Link>, China&apos;s tariff move is an important signal that trade routes for Ethiopian coffee are still widening, not narrowing.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li>
            <Link href='/ethiopia-coffee-export-news/huichuan-china-invest-ethiopia-coffee-processing' className='text-blue-600 hover:underline'>
              Chinese Giant Huichuan to Invest in Ethiopia&apos;s Coffee Processing
            </Link>
          </li>
          <li>
            <Link href='/ethiopian-green-coffee-beans' className='text-blue-600 hover:underline'>
              Ethiopian Green Coffee Beans
            </Link>
          </li>
          <li>
            <Link href='/ethiopian-coffee-exporter' className='text-blue-600 hover:underline'>
              Ethiopian Coffee Exporter
            </Link>
          </li>
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
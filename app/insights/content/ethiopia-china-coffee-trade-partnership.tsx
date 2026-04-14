import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopiaChinaCoffeeTradePartnership({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        How tenfold import growth, zero-tariff access, and a birr-yuan settlement deal are reshaping Ethiopian coffee&apos;s largest emerging market.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          China&apos;s coffee imports from Ethiopia increased tenfold over the past decade, making it one of Ethiopia&apos;s top five export destinations.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopia China coffee trade partnership showing green coffee beans bound for Chinese market'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='bg-amber-50 border border-amber-200 rounded-lg p-4 my-6'>
        <span className='font-bold'>Key Takeaway: </span>
        Ethiopia exported over 11,000 tonnes of coffee to China in 2023/24, generating $70 million in revenue. With 27% average annual growth, zero-tariff access for African products, and a birr-yuan currency swap deal to ease forex constraints, the Ethiopia China coffee trade corridor is one of the fastest-expanding bilateral coffee relationships in the world.
      </div>

      {/* INTRODUCTION */}
      <p className='my-4'>
        The Ethiopia China coffee trade has grown faster than any other bilateral coffee relationship in the past decade. Chinese imports of Ethiopian coffee increased tenfold since the mid-2010s, and in 2024 alone, shipments were valued at approximately $102 million. China now ranks among Ethiopia&apos;s top five coffee export destinations, up from near-zero a decade ago.
      </p>

      <p className='my-4'>
        For roasters and green coffee traders worldwide, this shift matters. As China absorbs larger volumes of Ethiopian specialty lots, it changes pricing dynamics, allocation patterns, and competitive positioning across the global market. Understanding the forces behind this corridor, from tariff policy to consumer taste, gives buyers an edge in planning their sourcing strategies.
      </p>

      <p className='my-4'>
        This analysis covers the verified trade data, the policy mechanisms driving growth, the scale of China&apos;s domestic coffee market, and practical implications for both Chinese importers and international buyers sourcing Ethiopian coffee.
      </p>

      {/* SECTION 1: THE NUMBERS */}
      <h3 className='text-2xl font-extrabold mt-8'>
        Ethiopia&apos;s Coffee Exports to China: The Numbers
      </h3>

      <p className='my-4'>
        According to <a href="https://birrmetrics.com/chinas-coffee-imports-from-ethiopia-jump-tenfold-as-trade-ties-deepen/" target="_blank" rel="noopener noreferrer" className='text-amber-700 underline'>Birr Metrics</a> (citing Ethiopian Coffee and Tea Authority data), Ethiopia exported more than 11,000 tonnes of coffee to China in the 2023/24 fiscal year, generating upwards of $70 million in revenue. A decade ago, Chinese imports barely registered. By 2020, exports were still below 4,000 tonnes.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <table className='w-full text-left text-sm'>
          <thead>
            <tr className='border-b-2 border-gray-300'>
              <th className='pb-3 font-semibold'>Period</th>
              <th className='pb-3 font-semibold'>Volume to China</th>
              <th className='pb-3 font-semibold'>Revenue</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='py-3'>Pre-2015</td>
              <td className='py-3'>Negligible</td>
              <td className='py-3'>Not tracked separately</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='py-3'>~2020</td>
              <td className='py-3'>&lt;4,000 tonnes</td>
              <td className='py-3'>Est. &lt;$25M</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='py-3'>2023/24 FY</td>
              <td className='py-3 font-semibold'>11,000+ tonnes</td>
              <td className='py-3 font-semibold'>$70M+</td>
            </tr>
            <tr>
              <td className='py-3'>2024 calendar year</td>
              <td className='py-3 font-semibold'>Increased further</td>
              <td className='py-3 font-semibold'>~$102M</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Over the past three years, Ethiopia&apos;s coffee exports to China grew at an average annual rate of 27%. For context, Ethiopia&apos;s total coffee exports hit a <a href="https://www.foodbusinessmea.com/ethiopias-coffee-exports-hit-record-us2-65b-in-2024-25-fiscal-year/" target="_blank" rel="noopener noreferrer" className='text-amber-700 underline'>record $2.653 billion</a> in the 2024/25 fiscal year (468,967 metric tonnes), per the Ethiopian Coffee and Tea Authority. China&apos;s share of that total is still modest, but the growth trajectory is the steepest of any destination market.
      </p>

      <p className='my-4'>
        Adugna Debela, Director General of the ECTA, noted that &quot;many countries use Ethiopian coffee as a flavor enhancer for their blends. While Brazilian coffee is purchased in bulk for low prices, Ethiopian coffee fetches higher prices because of its unique attributes.&quot; In China, this quality premium has translated directly into revenue growth.
      </p>

      {/* SECTION 2: WHAT IS DRIVING GROWTH */}
      <h3 className='text-2xl font-extrabold mt-8'>
        What&apos;s Driving China&apos;s Appetite for Ethiopian Coffee
      </h3>

      <p className='my-4'>
        Four factors explain the speed of this expansion. Each one reinforces the others, creating a compounding growth cycle.
      </p>

      <p className='my-4'>
        <span className='font-bold'>1. Zero-tariff access for African products.</span> Beijing&apos;s duty-free initiative for least-developed countries eliminates import tariffs on qualifying Ethiopian coffee. Before this policy, Chinese importers faced 8 to 15% tariff rates on African coffee, making it less competitive against ASEAN origins that benefited from regional trade agreements. With tariffs at zero, Ethiopian coffee competes on quality alone.
      </p>

      <p className='my-4'>
        <span className='font-bold'>2. The birr-yuan currency swap.</span> A bilateral currency settlement agreement allows Ethiopian exporters and Chinese importers to transact in local currencies rather than relying solely on US dollars. Given Ethiopia&apos;s tight foreign exchange environment, this mechanism reduces settlement friction and makes Ethiopian coffee more accessible to Chinese buyers.
      </p>

      <p className='my-4'>
        <span className='font-bold'>3. Flavor profile affinity.</span> Ethiopian coffee&apos;s floral, tea-like, and citrus-forward profiles (especially washed <Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline'>Yirgacheffe</Link>) align closely with Chinese tea-drinking traditions. As Adugna Debela observed, &quot;Ethiopia&apos;s unique flavored coffee is gaining popularity among the Chinese.&quot; The clean, aromatic cup character bridges the sensory gap for consumers transitioning from tea to specialty coffee.
      </p>

      <p className='my-4'>
        <span className='font-bold'>4. Government-to-government cooperation.</span> High-level trade conferences (including a conference in Jujo City, China) have connected Ethiopian exporters directly with Chinese purchasing companies. State Minister Tesfahun Gobezai emphasized that these events created a &quot;great opportunity to promote Ethiopian coffee widely.&quot; Bilateral initiatives include technology transfer programs, e-commerce integration with platforms like JD.com and Tmall, and the establishment of an Ethiopian coffee trade center in Hunan Province.
      </p>

      {/* SECTION 3: CHINA MARKET SCALE */}
      <h3 className='text-2xl font-extrabold mt-8'>
        China&apos;s Coffee Market: Scale and Trajectory
      </h3>

      <p className='my-4'>
        China&apos;s domestic coffee market exceeded RMB 369.3 billion (approximately $51.8 billion) in 2025, up from RMB 313.3 billion in 2024, according to <a href="https://dfc-studio.com/blog/coffee-in-china/" target="_blank" rel="noopener noreferrer" className='text-amber-700 underline'>DFC Studio&apos;s market analysis</a>. The green coffee import segment alone was valued at $5.47 billion in 2025 and is forecast to reach $7.72 billion by 2031 at a 5.89% CAGR, per Mordor Intelligence.
      </p>

      <p className='my-4'>
        Yet the average Chinese consumer still drinks only about 22 cups of coffee per year, a fraction of consumption in the US (approximately 400 cups), Germany (over 400), or Japan (over 300). That gap represents the opportunity. Even modest per-capita growth in a market of 1.4 billion people translates into substantial volume demand for green coffee origins.
      </p>

      <div className='bg-amber-50 border border-amber-200 rounded-lg p-4 my-6'>
        <span className='font-bold'>Market snapshot: </span>
        Luckin Coffee operates 26,000+ stores across China. Cotti Coffee has 15,000 outlets. An average of 63 new coffee shops open every day. Over 100,000 coffee stores are listed on Taobao and Tmall, with online coffee sales rising 25.7% year-on-year. Affordable prices (RMB 5 to 15 per cup, or $1 to $2) have made coffee a daily habit for urban professionals.
      </div>

      <p className='my-4'>
        Specialty coffee is the fastest-growing segment within this market. Chinese consumers, particularly in Shanghai, Guangzhou, and Beijing, are developing appreciation for single-origin coffees, light roasts, and artisanal brewing methods. Ethiopian origins, with their distinctive flavor complexity, are well positioned to capture the premium end of this demand curve.
      </p>

      {/* SECTION 4: STRATEGIC COOPERATION */}
      <h3 className='text-2xl font-extrabold mt-8'>
        Strategic Cooperation Beyond Trade
      </h3>

      <p className='my-4'>
        The Ethiopia-China coffee relationship goes deeper than buyer-seller transactions. State Minister of Agriculture Efa Muleta (Dr.) outlined a multi-pronged cooperation strategy encompassing technology transfer, quality infrastructure, and export diversification.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Technology transfer.</span> Chinese agricultural technology companies are partnering with Ethiopian institutions to modernize processing infrastructure, introduce quality control laboratories, and implement post-harvest handling systems that preserve green bean quality during transit.
      </p>

      <p className='my-4'>
        <span className='font-bold'>E-commerce integration.</span> Ethiopian and Chinese officials are developing procurement channels through major e-commerce platforms. These channels include digital payment settlement, online auction integration, and traceability documentation using digital systems. With over 100,000 coffee sellers on Taobao and Tmall, the distribution infrastructure is already in place for Ethiopian origins.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Hunan Province trade center.</span> A dedicated logistics and promotion hub in Hunan Province provides warehousing, quality control, and market intelligence for Ethiopian coffee entering internal Chinese distribution networks. The center is designed to serve as a model for expansion to Beijing, Shanghai, Guangzhou, and Chengdu.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Agricultural modernization.</span> To meet the quality standards expected by Chinese specialty buyers, the Ethiopian government is investing in selective harvesting training, washing station upgrades, quality control certification aligned with international standards, and climate-smart agriculture practices across coffee-producing regions. These investments benefit all destination markets, not just China.
      </p>

      <p className='my-4'>
        Dr. Efa Muleta also noted that work is underway to supply additional agricultural products to China alongside coffee, creating shared logistics infrastructure and strengthening the overall bilateral trade relationship.
      </p>

      {/* SECTION 5: IMPLICATIONS FOR BUYERS */}
      <h3 className='text-2xl font-extrabold mt-8'>
        What This Means for International Buyers
      </h3>

      <p className='my-4'>
        China&apos;s growing share of Ethiopian coffee exports has practical implications for roasters and importers in North America, Europe, and other markets.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Competition for premium lots.</span> Chinese buyers increasingly compete for high-scoring <Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline'>Guji</Link> and <Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline'>Yirgacheffe</Link> specialty lots. As demand from Chinese roasters grows, Grade 1 and Grade 2 allocation may tighten, particularly for washed coffees. Buyers who typically contract late in the season should consider securing positions earlier. For more on <Link href='/insights/rising-ethiopian-coffee-prices-explained' className='text-amber-700 hover:underline'>why Ethiopian coffee prices are rising</Link>, see our pricing analysis.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Quality improvements benefit everyone.</span> The technology transfer and processing infrastructure investments driven by the Ethiopia-China cooperation create higher-quality Ethiopian coffee across the board. Importers in traditional markets (Germany, the US, Japan) gain access to more consistent and better-processed lots as a result of these investments.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Regional diversification opportunity.</span> If Chinese buyers concentrate on washed Yirgacheffe (which aligns with tea-drinking preferences), there may be relative availability gains in <Link href='/ethiopian-coffee-harar' className='text-amber-700 hover:underline'>Harrar</Link>, <Link href='/ethiopian-coffee-jimma' className='text-amber-700 hover:underline'>Jimma</Link>, or <Link href='/ethiopian-coffee-limu' className='text-amber-700 hover:underline'>Limu</Link> origins. Strategic importers can use this asymmetry to secure supply in regions with less Chinese buyer competition.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Collaboration, not just competition.</span> International buyers can explore co-purchasing arrangements with Chinese importers to share container loads and logistics costs, building partnerships across markets through shared exporter relationships. For a full overview of the sourcing process, see our <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>guide to sourcing green coffee from Ethiopia</Link>.
      </p>

      {/* SECTION 6: SOURCING TABLE */}
      <h3 className='text-2xl font-extrabold mt-8'>
        Sourcing Ethiopian Coffee for the Chinese Market
      </h3>

      <p className='my-4'>
        For Chinese importers entering the market and existing buyers scaling their Ethiopian programs, choosing the right origin and exporter is critical. The table below summarizes the primary Ethiopian coffee regions and their appeal to Chinese consumers.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <table className='w-full text-left text-sm'>
          <thead>
            <tr className='border-b-2 border-gray-300'>
              <th className='pb-3 font-semibold'>Origin</th>
              <th className='pb-3 font-semibold'>Flavor Profile</th>
              <th className='pb-3 font-semibold'>Chinese Market Fit</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='py-3 font-semibold'><Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline'>Yirgacheffe</Link></td>
              <td className='py-3'>Floral, citrus, tea-like</td>
              <td className='py-3'>Very high; clean profile resonates with tea culture</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='py-3 font-semibold'><Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline'>Sidamo</Link></td>
              <td className='py-3'>Berry, wine-like, balanced</td>
              <td className='py-3'>High; fruity complexity appeals to specialty consumers</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='py-3 font-semibold'><Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline'>Guji</Link></td>
              <td className='py-3'>Tropical fruit, floral, rich body</td>
              <td className='py-3'>Growing; bold flavors attractive for espresso applications</td>
            </tr>
            <tr>
              <td className='py-3 font-semibold'><Link href='/ethiopian-coffee-harar' className='text-amber-700 hover:underline'>Harrar</Link></td>
              <td className='py-3'>Blueberry, wine-like, wild</td>
              <td className='py-3'>Emerging; unique profile differentiates offerings</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        When evaluating an Ethiopian coffee exporter for the Chinese market, key criteria include: <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX registration and direct specialty licenses</Link>, cupping lab and quality control infrastructure, access to multiple origins and processing methods, and experience with the documentation requirements for Chinese customs clearance. For an overview of how Ethiopian coffee moves from origin to destination, see our <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>guide to Ethiopian green coffee origins</Link>.
      </p>

      <p className='my-4'>
        For a complete guide to GACC registration, customs clearance, and import logistics, see our <Link href='/insights/importing-ethiopian-coffee-to-china' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to China</Link> guide.
      </p>

      {/* FAQ SECTION */}
      <section className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900'>Frequently Asked Questions About Ethiopia-China Coffee Trade</h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How much coffee does Ethiopia export to China?</h4>
            <p className='text-sm text-gray-600'>Ethiopia exported over 11,000 tonnes of coffee to China in 2023/24, generating $70 million or more in revenue. In calendar year 2024, the value rose to approximately $102 million. China now ranks among Ethiopia&apos;s top five coffee export destinations after a tenfold increase in trade volume over the past decade.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Is Ethiopian coffee exported to China tariff-free?</h4>
            <p className='text-sm text-gray-600'>Yes. Under China&apos;s zero-tariff initiative for least-developed countries, qualifying Ethiopian coffee enters the Chinese market duty-free. This eliminates the 8 to 15% tariff that previously made African coffee less competitive against ASEAN and Latin American origins in the Chinese market.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Which Ethiopian coffee regions are most popular in China?</h4>
            <p className='text-sm text-gray-600'>Washed Yirgacheffe is the most popular Ethiopian origin in China, because its floral and tea-like flavor profile resonates with traditional Chinese tea preferences. Sidamo and Guji are gaining traction among specialty roasters, while natural-processed coffees appeal to consumers seeking bold fruit-forward flavors.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the birr-yuan currency swap deal?</h4>
            <p className='text-sm text-gray-600'>Ethiopia and China signed a bilateral currency settlement agreement allowing coffee trade to be settled in birr and yuan rather than US dollars. This reduces dependence on hard currency, eases settlement barriers for Ethiopian exporters facing foreign exchange constraints, and lowers transaction costs for both sides.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How does China&apos;s demand affect Ethiopian coffee prices globally?</h4>
            <p className='text-sm text-gray-600'>As Chinese buyers compete for premium Ethiopian lots (particularly washed Grade 1 Yirgacheffe and Guji), total demand for top-tier Ethiopian coffee increases. This can tighten allocation for buyers in other markets and put upward pressure on prices for the highest-scoring specialty lots.</p>
          </div>
        </div>
      </section>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Premium Ethiopian Coffee for the Chinese and Global Markets</h4>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Import and Export PLC</span> offers over three decades of sourcing heritage across Ethiopia&apos;s coffee regions. Whether you are a Chinese importer building your Ethiopian program or an international buyer planning around changing allocation dynamics, request samples and current pricing to get started.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>
            View Our Offerings
          </Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            Request Samples
          </Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            How to Order
          </Link>
        </div>
      </div>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Market &amp; Pricing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/rising-ethiopian-coffee-prices-explained' className='text-amber-700 hover:underline'>Rising Ethiopian Coffee Prices Explained</Link></li>
              <li>&bull; <Link href='/insights/specialty-coffee-trends-2026' className='text-amber-700 hover:underline'>5 Specialty Coffee Trends Defining 2026</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-harvest-2025-season-outlook' className='text-amber-700 hover:underline'>Ethiopian Coffee Harvest 2025 Season Outlook</Link></li>
              <li>&bull; <Link href='/insights/top-ethiopian-coffee-importers-buyers-2024-2025' className='text-amber-700 hover:underline'>Top Ethiopian Coffee Importers 2024/2025</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origins &amp; Quality</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Green Coffee Origins</Link></li>
              <li>&bull; <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji Comparison</Link></li>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee Processing</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality Control and Grading</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Import Guides</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-china' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to China</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-japan' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to Japan</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-south-korea' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to South Korea</Link></li>
              <li>&bull; <Link href='/insights/how-to-import-ethiopian-coffee-to-usa' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to the USA</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC. This analysis uses trade data from the Ethiopian Coffee and Tea Authority (ECTA), Birr Metrics, and FoodBusiness Middle East &amp; Africa. For current pricing and availability, contact our export team directly.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot; <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> &middot; <Link href='/about' className='underline'>About Ethio Coffee</Link> &middot; <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

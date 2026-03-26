import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineChartBar,
  HiOutlineArrowTrendingDown,
  HiOutlineGlobeAlt,
  HiOutlineMapPin,
  HiOutlineShoppingCart,
  HiOutlineDocumentText,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function CoffeePricesFallingGlobalProductionRecord({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      {/* H1 + H2 */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Global Supply Surplus, Producer Forecasts, and What It Means for Green Coffee Importers
      </h2>

      {/* HERO IMAGE */}
      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md bg-gray-200 flex items-center justify-center'>
          {/* TODO: Replace placeholder with actual hero image */}
          {/* Expected path: /images/insights/coffee-prices-falling-global-production-record.webp */}
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Global coffee production chart showing rising output and falling prices for green coffee importers'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      {/* CATEGORY */}
      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Market Intelligence / Coffee Pricing / Supply &amp; Demand / Importer Resources</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Global coffee production is projected to reach a record 180 million 60-kg bags in the 2026/27 season (Rabobank), up from 178.8 million bags in 2025/26 (USDA FAS). After a 50% price surge in 2025, the World Bank projects Arabica prices to fall 13% in 2026 and 5% in 2027 as Brazil, Vietnam, and Ethiopia all post higher yields. For importers, this supply surplus creates a strategic buying window: more availability, weaker differentials, and better negotiating leverage, especially for Ethiopian specialty lots where quality premiums remain firm.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#production-numbers' className='text-amber-700 hover:underline'>1. The Numbers: Global Coffee Production at Record Highs</a></li>
          <li><a href='#why-prices-falling' className='text-amber-700 hover:underline'>2. Why Coffee Prices Are Falling Despite Record Output</a></li>
          <li><a href='#producer-breakdown' className='text-amber-700 hover:underline'>3. Producer-by-Producer Breakdown</a></li>
          <li><a href='#ethiopia-position' className='text-amber-700 hover:underline'>4. Ethiopia: Record Production, Premium Resilience</a></li>
          <li><a href='#importer-impact' className='text-amber-700 hover:underline'>5. What Falling Prices Mean for Importers</a></li>
          <li><a href='#buying-strategy' className='text-amber-700 hover:underline'>6. Buying Strategy for a Surplus Market</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>7. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRODUCTION */}
      <p className='text-lg leading-relaxed my-4'>
        <strong>Coffee prices are falling</strong> after reaching all-time highs in early 2025, and the reason is straightforward: the world is producing more coffee than ever. Arabica futures, which hit 400 cents per pound in February 2025, have retreated sharply as Brazil forecasts a record crop and Vietnam ships robusta at volumes not seen in four years. For green coffee importers and roasters, this reversal reshapes procurement math, contract timing, and origin-allocation decisions for the 2026/27 buying season.
      </p>
      <p className='my-4'>
        This guide examines the data behind the production-price disconnect, breaks down the outlook for each major producing country, and offers concrete buying strategies for importers sourcing <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline font-bold'>Ethiopian green coffee</Link> in a market moving from deficit to surplus.
      </p>

      {/* SECTION 1: Production Numbers */}
      <h3 id='production-numbers' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineChartBar className='w-8 h-8 text-amber-600' />
        1. The Numbers: Global Coffee Production at Record Highs
      </h3>
      <p className='my-4'>
        Three major forecasting bodies confirm the trend. Global coffee output is climbing, and the numbers point toward a supply surplus beginning in the 2026/27 crop year.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Source</th>
              <th className='p-3 text-left font-bold'>2024/25 Forecast</th>
              <th className='p-3 text-left font-bold'>2025/26 Forecast</th>
              <th className='p-3 text-left font-bold'>2026/27 Forecast</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>USDA FAS (Dec 2025)</td>
              <td className='p-3'>175.4M bags</td>
              <td className='p-3'>178.8M bags (+2.0%)</td>
              <td className='p-3'>Not yet released</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>World Bank (Oct 2025)</td>
              <td className='p-3'>175.4M bags</td>
              <td className='p-3'>~179M bags</td>
              <td className='p-3'>Growth expected</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Rabobank (Feb 2026)</td>
              <td className='p-3'>~172M bags</td>
              <td className='p-3'>~178M bags</td>
              <td className='p-3'>180M bags (record)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        The USDA&apos;s Foreign Agricultural Service projected world coffee production for 2025/26 at a record <a href='https://www.nasdaq.com/articles/coffee-prices-slide-outlook-record-global-coffee-production' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>178.848 million bags</a> in its December 2025 biannual report. Within that total, arabica output is forecast at 95.5 million bags and robusta at 83.3 million bags (+10.9% year-on-year). Rabobank goes further, projecting 180 million bags for 2026/27 and a surplus of 7 to 10 million bags, the first meaningful oversupply since the 2019/20 season.
      </p>
      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Context: How Big Is the Surplus?</h4>
        <p className='text-sm text-gray-700'>
          A 7 to 10 million bag surplus, if realized, represents roughly 4% to 6% of total global consumption (approximately 170 million bags annually). In practical terms, that is 420,000 to 600,000 metric tonnes of green coffee above what the market absorbs. For comparison, Ethiopia&apos;s entire annual production is about 11.6 million bags. The projected surplus is nearly equivalent to Ethiopia&apos;s full output.
        </p>
      </div>

      {/* SECTION 2: Why Prices Are Falling */}
      <h3 id='why-prices-falling' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineArrowTrendingDown className='w-8 h-8 text-amber-600' />
        2. Why Coffee Prices Are Falling Despite Record Output
      </h3>
      <p className='my-4'>
        The price correction did not happen overnight. It follows one of the sharpest rallies in coffee market history. Understanding what drove prices up helps explain why they are now moving down.
      </p>
      <h4 className='text-xl font-bold mt-8 mb-4'>The 2024-2025 Price Spike</h4>
      <p className='my-4'>
        Arabica futures on ICE surpassed 400 cents per pound in February 2025, a price not seen in the commodity&apos;s modern trading history. Three factors converged: severe drought in Brazil&apos;s Minas Gerais state during the 2024 growing season cut short the arabica crop; <Link href='/insights/ethiopian-coffee-climate-change-impact' className='text-amber-700 hover:underline'>climate-related disruptions</Link> reduced yields across Vietnam and Indonesia; and speculative positioning amplified upward momentum. ICE-monitored arabica inventories fell to a 1.75-year low of 396,513 bags in November 2024, signaling genuine physical tightness.
      </p>
      <h4 className='text-xl font-bold mt-8 mb-4'>The Reversal: Supply Recovery Meets Demand Stability</h4>
      <p className='my-4'>
        By mid-2025, the fundamentals shifted. Sufficient rainfall returned to Brazil&apos;s coffee belt. Vietnam posted a rebound harvest. Colombia, after a disappointing January 2025 (production fell 34% year-on-year to 893,000 bags), projected a full recovery for the second half of its 2025/26 season. Meanwhile, global coffee demand, which grows at a steady 1.5% to 2.5% annually, did not accelerate enough to absorb the incoming supply.
      </p>
      <p className='my-4'>
        The <a href='https://blogs.worldbank.org/en/opendata/-beverage-prices-moderate-as-coffee-and-cocoa-supply-recover' target='_blank' rel='noopener noreferrer' className='text-blue-600 underline'>World Bank&apos;s Commodity Markets Outlook</a> (October 2025) quantified the expected correction: Arabica prices projected to fall 13% in 2026 and an additional 5% in 2027 after rising 50% in 2025. Robusta is expected to ease more gradually, declining 2% in both 2026 and 2027 after a 10% increase in 2025.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Coffee Type</th>
              <th className='p-3 text-left font-bold'>2025 Price Change (y/y)</th>
              <th className='p-3 text-left font-bold'>2026 Forecast</th>
              <th className='p-3 text-left font-bold'>2027 Forecast</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Arabica</td>
              <td className='p-3'>+50%</td>
              <td className='p-3'>-13%</td>
              <td className='p-3'>-5%</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Robusta</td>
              <td className='p-3'>+10%</td>
              <td className='p-3'>-2%</td>
              <td className='p-3'>-2%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        Source: World Bank Commodity Markets Outlook, October 2025.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>ICE Inventories: The Physical Signal</h4>
      <p className='my-4'>
        ICE-monitored arabica inventories recovered from 396,513 bags (November 2024) to 461,829 bags by early January 2026, a 3.75-month high. ICE robusta inventories similarly climbed from a 14-month low of 4,012 lots (December 2024) to 4,662 lots (January 2026). Rising exchange stocks confirm that physical supply is rebuilding, supporting the bearish price trajectory.
      </p>

      {/* SECTION 3: Producer Breakdown */}
      <h3 id='producer-breakdown' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineGlobeAlt className='w-8 h-8 text-amber-600' />
        3. Producer-by-Producer Breakdown
      </h3>
      <p className='my-4'>
        The global surplus is not evenly distributed. Three countries are driving the supply increase; others present mixed or still-constrained outlooks.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Brazil: The Market Mover</h4>
      <p className='my-4'>
        Brazil remains the single most important variable in coffee price formation. On February 5, 2026, Conab (Brazil&apos;s national crop forecasting agency) projected Brazil&apos;s 2026 coffee production at a record 66.2 million bags, up 17.2% from the previous year. Arabica output is forecast at 44.1 million bags (+23.2%), while robusta (conilon) is projected at 22.1 million bags (+6.3%).
      </p>
      <p className='my-4'>
        Sufficient rain in Minas Gerais (Brazil&apos;s largest arabica-growing state) has been the critical factor. Somar Meteorologia reported that Minas Gerais received 62.8 mm of rainfall in the week ending February 13, 2026, which was 138% of the historical average. This moisture has supported cherry development and is expected to translate into strong yields at harvest.
      </p>
      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700 italic'>
          Brazil&apos;s arabica production alone (44.1 million bags) exceeds the entire combined output of Ethiopia, Colombia, and Kenya.
        </p>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Vietnam: Robusta Surge</h4>
      <p className='my-4'>
        Vietnam, the world&apos;s largest robusta producer, is shipping aggressively. Vietnam&apos;s National Statistics Office reported January 2026 coffee exports surged 38.3% year-on-year to 198,000 metric tonnes. Full-year 2025 exports jumped 17.5% to 1.58 million metric tonnes. The USDA FAS projects Vietnam&apos;s 2025/26 production at 30.8 million bags, a four-year high (+6.2% year-on-year).
      </p>
      <p className='my-4'>
        For importers blending robusta into commercial or <Link href='/insights/ethiopian-coffee-espresso-blend-sourcing-guide' className='text-amber-700 hover:underline'>espresso products</Link>, Vietnamese supply abundance pressures robusta differentials downward and gives buyers more room to negotiate terms.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Colombia: Recovery in Progress</h4>
      <p className='my-4'>
        Colombia&apos;s near-term picture is mixed. The National Federation of Coffee Growers reported that January 2026 production fell 34% year-on-year to 893,000 bags, a sharp decline attributed to weather irregularities. However, Colombia is expected to recover through its mid-year mitaca harvest, and the USDA projects full-year 2025/26 output to stabilize near 12 to 13 million bags. The World Bank specifically cites Colombia&apos;s production recovery as a key driver of projected Arabica price declines.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Indonesia, Uganda, and Others</h4>
      <p className='my-4'>
        Indonesia&apos;s robusta production is also growing. Uganda, now Africa&apos;s largest coffee exporter by volume, continues to expand output. Together, these mid-tier producers add another 2 to 3 million bags of incremental supply to the global total, reinforcing the surplus trajectory.
      </p>

      {/* SECTION 4: Ethiopia's Position */}
      <h3 id='ethiopia-position' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMapPin className='w-8 h-8 text-amber-600' />
        4. Ethiopia: Record Production, Premium Resilience
      </h3>
      <p className='my-4'>
        Ethiopia is participating in the global production upswing. The USDA FAS projects Ethiopian coffee production for 2025/26 at a record 11.56 million 60-kg bags (approximately 694,000 metric tonnes), a 9% increase from the previous year. Area harvested is expected to expand to 790,000 hectares, with average yields rising to 0.88 metric tonnes per hectare.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Metric</th>
              <th className='p-3 text-left font-bold'>2024/25</th>
              <th className='p-3 text-left font-bold'>2025/26 (Forecast)</th>
              <th className='p-3 text-left font-bold'>Change</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Production</td>
              <td className='p-3'>10.6M bags</td>
              <td className='p-3'>11.56M bags</td>
              <td className='p-3'>+9%</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Area Harvested</td>
              <td className='p-3'>~760,000 ha</td>
              <td className='p-3'>790,000 ha</td>
              <td className='p-3'>+3.9%</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Average Yield</td>
              <td className='p-3'>0.84 MT/ha</td>
              <td className='p-3'>0.88 MT/ha</td>
              <td className='p-3'>+4.8%</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Exports (Forecast)</td>
              <td className='p-3'>~7.2M bags</td>
              <td className='p-3'>7.8M bags</td>
              <td className='p-3'>+8.3%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        Source: USDA FAS Coffee Annual, June 2025; Commodity Board Europe.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Why Ethiopian Prices Behave Differently</h4>
      <p className='my-4'>
        Ethiopian coffee prices do not move in lockstep with the C-market. Several structural factors insulate Ethiopian specialty lots from the worst of global price declines:
      </p>
      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Genetic Uniqueness</h4>
          <p className='text-sm text-gray-700'>
            Ethiopia&apos;s <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>heirloom varieties</Link> produce flavor profiles (floral, citrus, berry) that cannot be replicated by Brazilian or Vietnamese coffees. Buyers pay for origin characteristics, not just a commodity grade.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Specialty-Grade Concentration</h4>
          <p className='text-sm text-gray-700'>
            A large share of Ethiopian exports are <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Grade 1 and Grade 2 specialty</Link>, priced on quality differentials rather than flat C-market benchmarks. Specialty differentials tend to hold even when the underlying futures contract drops.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Domestic Consumption</h4>
          <p className='text-sm text-gray-700'>
            Ethiopia consumes roughly 50% of its own production domestically, through the <Link href='/insights/ethiopian-coffee-ceremony' className='text-amber-700 hover:underline'>Ethiopian coffee ceremony</Link> and the growing domestic market. This absorbs supply internally and limits the exportable surplus.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Export Policy Reforms</h4>
          <p className='text-sm text-gray-700'>
            Recent policy changes, including expanded <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>direct export licensing</Link> (Directive 1106/2025), allow more producers and cooperatives to sell directly to international buyers. This adds traceability value but also tightens supply from the most sought-after washing stations.
          </p>
        </div>
      </div>
      <p className='my-4'>
        The bottom line: while <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian FOB prices</Link> may soften modestly as global prices retreat, they are unlikely to decline as sharply as Brazilian commercial-grade arabica. Importers should expect tighter differentials, not a collapse.
      </p>

      {/* SECTION 5: What Falling Prices Mean for Importers */}
      <h3 id='importer-impact' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineShoppingCart className='w-8 h-8 text-amber-600' />
        5. What Falling Coffee Prices Mean for Importers
      </h3>
      <p className='my-4'>
        A market transitioning from deficit to surplus changes the procurement calculus. Here is what importers should expect in the 2026/27 buying season:
      </p>
      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Opportunities</h4>
        <ul className='space-y-2 text-sm text-gray-700'>
          <li><strong>Lower landed costs.</strong> With C-market arabica retreating and freight rates stabilizing, your total <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>landed cost per kilogram</Link> should decline, improving margins or allowing retail price reductions.</li>
          <li><strong>Better allocation.</strong> In tight markets, top lots sell out before pre-shipment samples arrive. In a surplus, buyers have more time to cup, evaluate, and commit, especially for Ethiopian <Link href='/insights/micro-lot-ethiopian-coffee-sourcing-guide' className='text-amber-700 hover:underline'>micro-lots</Link> and single-station offerings.</li>
          <li><strong>Negotiating leverage on terms.</strong> <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Payment terms</Link>, shipping schedules, and minimum order quantities become more flexible when exporters face a wider pool of available coffee.</li>
          <li><strong>Blend reformulation window.</strong> Lower prices on commodity-grade components (Brazilian, Vietnamese) let roasters reallocate budget toward premium Ethiopian specialty lots, upgrading blend quality without increasing total cost.</li>
        </ul>
      </div>
      <div className='bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg my-6'>
        <h4 className='font-bold text-lg mb-3'>Risks to Watch</h4>
        <ul className='space-y-2 text-sm text-gray-700'>
          <li><strong>Weather reversals.</strong> Brazil&apos;s 2026 crop forecast assumes continued adequate rainfall. A return to drought conditions (as in 2024) could re-tighten supply within one season.</li>
          <li><strong>U.S. tariff risk.</strong> The World Bank flags potential U.S. tariffs on Brazilian coffee imports as a significant risk factor. New tariffs would shift demand toward non-Brazilian origins, potentially driving Ethiopian prices higher.</li>
          <li><strong>Inventory illusion.</strong> ICE inventories have recovered but remain historically low. A true surplus needs to rebuild physical stocks over multiple seasons before importers can rely on spot availability.</li>
          <li><strong>Currency volatility.</strong> Ethiopian Birr devaluation and forex reform affect FOB price calculations for Ethiopian exports. Monitor the Birr-to-USD rate when pricing contracts.</li>
        </ul>
      </div>

      {/* SECTION 6: Buying Strategy */}
      <h3 id='buying-strategy' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineDocumentText className='w-8 h-8 text-amber-600' />
        6. Buying Strategy for a Surplus Market
      </h3>
      <p className='my-4'>
        Falling prices do not automatically translate into better value. Importers who act strategically, rather than simply waiting for the bottom, will capture the best lots before opportunistic buyers absorb surplus supply.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Lock In Ethiopian Specialty Early</h4>
      <p className='my-4'>
        Ethiopian specialty coffee (Grade 1 natural Guji, washed Yirgacheffe, Sidamo lots scoring 84+) is produced in limited volumes relative to global demand. Even in a surplus year, these lots sell out well ahead of commercial grades. Use the <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian coffee harvest calendar</Link> to time your sample requests for Q1 (new crop arrivals from January through March).
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Use Forward Contracts to Capture Lower Levels</h4>
      <p className='my-4'>
        If your procurement model allows, consider <Link href='/insights/green-coffee-financing-hedging-importers-guide' className='text-amber-700 hover:underline'>forward contracts</Link> that lock in current or near-term prices for delivery in Q3/Q4 2026. With Rabobank projecting continued price declines into 2027, fixed-price contracts signed in mid-2026 may offer attractive positioning.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Diversify Within Ethiopia</h4>
      <p className='my-4'>
        A surplus market is the ideal time to expand your Ethiopian program beyond your core origin. If you currently buy only <Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline'>Yirgacheffe</Link>, request samples from <Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline'>Guji</Link>, <Link href='/insights/bombe-sidama-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Bombe (Sidama)</Link>, or <Link href='/ethiopian-coffee-limu' className='text-amber-700 hover:underline'>Limu</Link>. With more supply available, exporters are more willing to prepare small trial lots for new buyers.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Upgrade Quality at the Same Budget</h4>
      <p className='my-4'>
        When commodity-grade prices decline, the price gap between commercial and specialty narrows as a percentage of total landed cost. This is the moment to shift your program upmarket: replace a G4 Jimma commercial lot with a G2 Sidamo natural, or upgrade from standard G2 Yirgacheffe to a single-station G1 lot. Your cost per kilogram may increase marginally, but your cup quality jumps significantly.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Practical Checklist: Buying in a Surplus Market</h4>
        <ol className='space-y-2 text-sm text-gray-700 list-decimal pl-4'>
          <li>Request pre-shipment samples from at least 2 to 3 Ethiopian origins before committing</li>
          <li>Compare FOB Djibouti quotes against C-market differential trends over the trailing 90 days</li>
          <li>Assess <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>contract type</Link> (fixed-price vs. differential) based on your price outlook</li>
          <li>Verify <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>traceability documentation</Link> before signing; surplus markets sometimes increase quality variability</li>
          <li>Plan <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline'>storage capacity</Link> for larger-than-usual purchases if prices are favorable</li>
        </ol>
      </div>

      {/* CTA */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Ethiopian Coffee While Surplus Creates Opportunity</h4>
        <p className='my-2'>
          Falling global prices and record Ethiopian production mean more availability, better allocation, and flexible terms for importers. Request pre-shipment samples from our current season offerings and lock in your program for 2026/27.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>
            View Offerings
          </Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            Request Samples
          </Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            How to Order
          </Link>
        </div>
      </div>

      {/* FAQ */}
      <section id='faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900'>Frequently Asked Questions</h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Why are coffee prices falling in 2026?</h4>
            <p className='text-sm text-gray-600'>
              Coffee prices are declining because global production is reaching record levels while demand growth remains steady at 1.5% to 2.5% annually. Brazil projects a record 66.2 million bag crop, Vietnam&apos;s robusta exports surged 38%, and Rabobank forecasts a 7 to 10 million bag surplus for the 2026/27 season.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How much coffee does the world produce annually?</h4>
            <p className='text-sm text-gray-600'>
              The USDA FAS estimates world coffee production at 178.8 million 60-kg bags for the 2025/26 season, equivalent to approximately 10.7 million metric tonnes. Rabobank projects this rising to a record 180 million bags in 2026/27. Brazil accounts for roughly 37% of global output, followed by Vietnam (17%) and Colombia (7%).
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Will coffee prices keep dropping in 2027?</h4>
            <p className='text-sm text-gray-600'>
              The World Bank projects Arabica prices to fall an additional 5% in 2027 after a 13% decline in 2026, assuming production recovery continues in Brazil and Colombia. However, this forecast depends on normal weather patterns. A drought or frost event in Brazil could reverse the trend rapidly.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How does the global coffee surplus affect Ethiopian coffee prices?</h4>
            <p className='text-sm text-gray-600'>
              Ethiopian specialty coffee prices are partly insulated from global declines because they trade on quality differentials rather than flat commodity benchmarks. Ethiopian FOB prices may soften modestly, but heirloom variety flavor profiles, high domestic consumption (about 50% of output), and strong specialty demand maintain premium levels relative to commercial arabica.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Is now a good time to buy Ethiopian green coffee?</h4>
            <p className='text-sm text-gray-600'>
              A surplus market creates favorable conditions for importers: better lot availability, more negotiating leverage on terms, and the opportunity to diversify origins or upgrade quality within existing budgets. Locking in supply during a surplus window, before a potential weather event re-tightens the market, is a sound procurement strategy.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Pricing &amp; Market Intelligence</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Pricing for Importers</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost: Import Cost Guide</Link></li>
              <li>&bull; <Link href='/insights/rising-ethiopian-coffee-prices-explained' className='text-amber-700 hover:underline'>Rising Ethiopian Coffee Prices Explained</Link></li>
              <li>&bull; <Link href='/insights/top-ethiopian-coffee-importers-buyers-2024-2025' className='text-amber-700 hover:underline'>Top Ethiopian Coffee Importers 2024/2025</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing &amp; Contracts</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts &amp; Payment Terms</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-financing-hedging-importers-guide' className='text-amber-700 hover:underline'>Green Coffee Financing &amp; Hedging</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Harvest Calendar</Link></li>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>Sourcing Green Coffee from Ethiopia</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origin Guides</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Green Coffee Origins</Link></li>
              <li>&bull; <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-vs-brazilian-coffee' className='text-amber-700 hover:underline'>Ethiopian Coffee vs Brazilian Coffee</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality &amp; Processing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-climate-change-impact' className='text-amber-700 hover:underline'>Ethiopian Coffee and Climate Change</Link></li>
              <li>&bull; <Link href='/insights/micro-lot-ethiopian-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Micro-Lot Ethiopian Coffee Sourcing</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter with three decades of sourcing relationships across Yirgacheffe, Sidamo, Guji, Harar, Limu, and Jimma.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot;{' '}
          <Link href='/ethiopian-coffee-exporter' className='underline'>Export Services</Link> &middot;{' '}
          <Link href='/about' className='underline'>About</Link> &middot;{' '}
          <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

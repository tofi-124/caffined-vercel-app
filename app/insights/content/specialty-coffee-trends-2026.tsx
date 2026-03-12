import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { HiOutlineLightBulb, HiOutlineShieldCheck, HiOutlineBeaker, HiOutlineSun, HiOutlineCurrencyDollar, HiOutlineSparkles, HiOutlineQuestionMarkCircle } from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function SpecialtyCoffeeTrends2026({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Data-backed shifts importers and roasters should build into their 2026 sourcing strategy
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Global specialty coffee demand grew 12% year-over-year in 2025, with Ethiopian exports reaching an estimated 290,000+ metric tons in the 2024/25 season.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Specialty coffee trends 2026 for importers and roasters sourcing Ethiopian green coffee'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      {/* Key Takeaway */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />
          Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Five macro shifts are reshaping specialty coffee in 2026: (1) traceability becomes a regulatory requirement under the EU Deforestation Regulation, not a marketing choice; (2) experimental processing moves from novelty to margin driver, with natural and honey lots growing from roughly 15% to 35% of specialty purchases in five years; (3) climate-resilient heirloom genetics gain strategic value as Arabica-growing zones contract; (4) specialty prices restructure buyer expectations, with Arabica futures above $3.00/lb through early 2026; (5) story-driven premiumization replaces generic single-origin branding. Ethiopian coffee, with its unmatched genetic diversity, traceable direct-specialty-lot channel, and deep cultural narrative, is positioned to benefit from all five.
        </p>
      </div>

      {/* INTRODUCTION */}
      <p className='my-4'>
        Specialty coffee trends in 2026 are being driven by regulatory pressure, supply tightness, and a fundamental shift in what buyers consider table-stakes quality. For importers and roasters making purchasing decisions today, understanding these trends is not optional; it determines whether your green coffee portfolio holds its value or loses ground to competitors who moved sooner.
      </p>

      <p className='my-4'>
        Ethiopia shipped an estimated 290,000+ metric tons of green coffee in the 2024/25 season. Guji, Yirgacheffe, and Sidamo lots accounted for a disproportionate share of specialty-grade volume, with grade 1 washed lots commanding FOB premiums of $1.50&ndash;$3.50/lb above the C-market. Those numbers matter because each of the five trends covered below either increases demand for what Ethiopian origins produce best or raises the cost of sourcing it. This article breaks down each trend with the data behind it and a clear sourcing takeaway.
      </p>

      {/* TREND 1 */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineShieldCheck className='w-8 h-8 text-amber-600 flex-shrink-0' />
        1. Traceability Becomes a Regulatory Requirement
      </h3>

      <p className='my-4'>
        For years, traceability was a selling point. In 2026 it is a compliance obligation. The <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline font-bold'>EU Deforestation Regulation (EUDR)</Link>, with enforcement ramping through 2025&ndash;2026, requires importers to demonstrate that coffee was not grown on land deforested after December 31, 2020. Compliance demands farm-level GPS coordinates, supply-chain mapping, and due-diligence documentation for every container entering the EU.
      </p>

      <p className='my-4'>
        Germany alone imports over 1 million tonnes of green coffee annually. Japan, South Korea, and Australia are developing parallel import transparency frameworks. The direction is clear: traceability is shifting from a marketing differentiator to a market-access requirement across premium consuming countries.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-2'>What this means for Ethiopian coffee</h4>
        <p className='text-sm'>
          Ethiopia&apos;s <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline font-bold'>direct specialty lot (DSL) channel</Link> already provides washing-station-level traceability with lot-specific documentation. Contrast that with the ECX commodity channel, where coffee is pooled by region and grade, making farm-level traceability more difficult. Importers who source through exporters with established DSL relationships gain a compliance head start. At Ethio Coffee, our cooperatives and washing stations across <Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline'>Yirgacheffe</Link>, <Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline'>Guji</Link>, and <Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline'>Sidamo</Link> supply the GPS-level provenance EUDR demands.
        </p>
      </div>

      {/* TREND 2 */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600 flex-shrink-0' />
        2. Experimental Processing Moves from Novelty to Margin Driver
      </h3>

      <p className='my-4'>
        Washed coffee still anchors most specialty portfolios, but the share of natural, honey, and experimental lots is growing fast. Industry purchasing data shows natural and honey processed coffees rising from roughly 15% of specialty roaster purchases five years ago to approximately 35% today, with projections of 40&ndash;45% within three years. The premium is material: anaerobic and controlled-fermentation lots command $2&ndash;$3/lb above standard processing at FOB, according to multiple exporter price sheets from the 2024/25 season.
      </p>

      <p className='my-4'>
        Three processing categories are driving growth:
      </p>
      <ul className='list-disc ml-6 my-4 space-y-2'>
        <li><span className='font-bold'>Natural process</span> &ndash; Fruit-forward, high body, the &quot;blueberry bomb&quot; Guji naturals that dominate social media. Quality consistency has improved sharply as washing stations invest in raised-bed drying infrastructure and tighter cherry selection.</li>
        <li><span className='font-bold'>Honey process</span> &ndash; The spectrum from white to black honey allows producers to offer nuanced sweetness variations. Ethiopian stations in Sidamo and Limmu are now producing honey lots alongside their traditional washed output.</li>
        <li><span className='font-bold'><Link href='/insights/anaerobic-ethiopian-coffee-processing-buyers-guide' className='text-amber-700 hover:underline'>Anaerobic and carbonic maceration</Link></span> &ndash; Sealed-tank fermentation under controlled pH, temperature, and timing creates intensified fruit and floral characteristics. Guji and Yirgacheffe have become the primary Ethiopian zones for these experimental lots, with sealed-tank capacity expanding at dozens of stations.</li>
      </ul>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm italic'>
          <span className='font-bold'>Sourcing takeaway:</span> Allocate 25&ndash;35% of your Ethiopian green coffee budget to non-washed lots. Book anaerobic lots early; station capacity is limited and demand is outpacing supply. Request <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>pre-shipment samples</Link> with processing documentation specifying fermentation hours, pH readings, and tank type.
        </p>
      </div>

      {/* TREND 3 */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineSun className='w-8 h-8 text-amber-600 flex-shrink-0' />
        3. Climate-Resilient Genetics Command Strategic Value
      </h3>

      <p className='my-4'>
        Research published by the Kew Royal Botanic Gardens and CIRAD estimates that 60% of wild Arabica species face extinction risk from <Link href='/insights/ethiopian-coffee-climate-change-impact' className='text-amber-700 hover:underline font-bold'>climate change</Link>, with suitable Arabica-growing area projected to shrink by up to 50% by 2050 under high-emission scenarios. Brazil&apos;s 2024 drought cut its Arabica crop estimate by over 5 million bags, sending C-market futures past $4.00/lb for the first time. These are not distant forecasts; they are affecting spot availability and pricing right now.
      </p>

      <p className='my-4'>
        Ethiopia holds an unmatched advantage: it is the center of origin and genetic diversity for Coffea arabica. The Jimma Agricultural Research Center (JARC) maintains over 6,000 accessions of wild and cultivated Arabica. Thousands of <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline font-bold'>heirloom landraces</Link> grow across the country&apos;s forest coffee systems in Kaffa, Bench Maji, and Illubabor, many at altitudes of 1,800&ndash;2,200+ meters where climate stress is lower than in lower-elevation origins like Vietnam or Brazil.
      </p>

      <p className='my-4'>
        For importers building five-to-ten-year supply relationships, genetic diversity is not an abstract benefit. It is a sourcing hedge. Origins dependent on one or two cultivars (SL-28/34 in Kenya, Caturra/Castillo in Colombia) face greater production volatility as temperatures shift. Ethiopian highland coffee, grown under varied shade canopy and drawing from a broad genetic base, offers more resilient long-term supply.
      </p>

      {/* TREND 4 */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='w-8 h-8 text-amber-600 flex-shrink-0' />
        4. Specialty Coffee Prices Restructure Buyer Expectations
      </h3>

      <p className='my-4'>
        The Arabica C-market surged above $3.00/lb in late 2024 and climbed past $4.00/lb in early 2025, levels not seen in over 50 years. Multiple factors converge: Brazil&apos;s production shortfall, Vietnam&apos;s Robusta supply constraints, Birr devaluation in Ethiopia, rising farmgate cherry prices, and increased global demand. For a detailed analysis, see our <Link href='/insights/rising-ethiopian-coffee-prices-explained' className='text-amber-700 hover:underline font-bold'>rising Ethiopian coffee prices breakdown</Link>.
      </p>

      <p className='my-4'>
        The impact on specialty is structural, not cyclical. Ethiopian Grade 1 washed Yirgacheffe, which traded at FOB $5.00&ndash;$7.00/kg two years ago, now commands $8.00&ndash;$12.00+/kg depending on lot quality and certification. <Link href='/insights/micro-lot-ethiopian-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Micro-lots</Link> and competition-grade anaerobic lots exceed $13.00/kg FOB. Cherry prices at the farmgate have risen 40&ndash;60% since 2023, compressing exporter margins and making forward contracting more critical than ever.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border border-gray-200'>
          <thead className='bg-gray-100'>
            <tr>
              <th className='text-left p-3 border-b font-bold'>Price Factor</th>
              <th className='text-left p-3 border-b font-bold'>Direction</th>
              <th className='text-left p-3 border-b font-bold'>Importer Impact</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='p-3'>Arabica C-market (ICE)</td>
              <td className='p-3'>Above $3.00/lb since late 2024</td>
              <td className='p-3'>Higher baseline for all grades</td>
            </tr>
            <tr className='border-b bg-gray-50'>
              <td className='p-3'>Ethiopian cherry prices</td>
              <td className='p-3'>Up 40&ndash;60% since 2023</td>
              <td className='p-3'>FOB floors rising; early booking critical</td>
            </tr>
            <tr className='border-b'>
              <td className='p-3'>Grade 1 washed FOB</td>
              <td className='p-3'>$8.00&ndash;$12.00+/kg</td>
              <td className='p-3'>Budget reallocation needed vs. 2023 levels</td>
            </tr>
            <tr className='border-b bg-gray-50'>
              <td className='p-3'>Experimental lot premiums</td>
              <td className='p-3'>+$2&ndash;$3/lb above standard processing</td>
              <td className='p-3'>Highest margins for roasters; limited supply</td>
            </tr>
            <tr className='border-b'>
              <td className='p-3'>Freight (Djibouti to Europe/US)</td>
              <td className='p-3'>Elevated since Red Sea disruptions</td>
              <td className='p-3'>Factor into <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>landed cost</Link> calculations early</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        The era of affordable specialty is not coming back. Importers and roasters who accept the new cost structure and communicate it transparently to their customers will retain accounts. Those waiting for prices to drop risk being shut out of allocation when the next harvest arrives. <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Locking in forward contracts</Link> and securing pre-shipment samples early are the practical responses.
      </p>

      {/* TREND 5 */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineSparkles className='w-8 h-8 text-amber-600 flex-shrink-0' />
        5. Story-Driven Premiumization Replaces Generic Single-Origin
      </h3>

      <p className='my-4'>
        &quot;Single origin&quot; no longer justifies a premium. Consumers and wholesale buyers now expect specificity: the washing station, the cooperative, the altitude, the processing protocol, and the cultural context behind the cup. The SCA&apos;s updated <Link href='/insights/new-sca-coffee-value-assessment' className='text-amber-700 hover:underline'>Coffee Value Assessment</Link> framework reflects this shift, evaluating coffee on descriptive attributes and extrinsic value rather than a single numerical score.
      </p>

      <p className='my-4'>
        Ethiopia offers a narrative depth that no other origin can match. It is the <Link href='/insights/ethiopia-coffee-origin-birthplace' className='text-amber-700 hover:underline'>birthplace of Arabica</Link>. The <Link href='/insights/ethiopian-coffee-ceremony' className='text-amber-700 hover:underline'>Ethiopian coffee ceremony</Link> is a living cultural practice, not a museum exhibit. The cooperative and washing station model connects each lot to a community with a name, a location, and a story your customers can share. This is premiumization through provenance, not just packaging.
      </p>

      <p className='my-4'>
        The commercial implication is direct: roasters who invest in origin storytelling sell more coffee at higher margins. A 250g bag of &quot;Ethiopian&quot; may retail at $16. The same coffee, presented as &quot;Washed Kochere, Worka washing station, 2,100m, Grade 1, jasmine and bergamot&quot; can retail at $22&ndash;$28. The coffee is identical; the story is the margin. Exporters who provide lot-level documentation, producer profiles, and cupping notes enable that margin for their import partners.
      </p>

      {/* ACTION SUMMARY */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6'>
        What These Specialty Coffee Trends Mean for Your 2026 Sourcing
      </h3>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border border-gray-200'>
          <thead className='bg-amber-50'>
            <tr>
              <th className='text-left p-3 border-b font-bold'>Trend</th>
              <th className='text-left p-3 border-b font-bold'>Action for Importers &amp; Roasters</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='p-3 font-semibold'>Regulatory traceability</td>
              <td className='p-3'>Audit your supply chain for EUDR readiness. Prioritize exporters with DSL-channel sourcing and GPS-level documentation. <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Review traceability levels here</Link>.</td>
            </tr>
            <tr className='border-b bg-gray-50'>
              <td className='p-3 font-semibold'>Experimental processing</td>
              <td className='p-3'>Allocate 25&ndash;35% of Ethiopian budget to natural, honey, and anaerobic lots. Book early; capacity is limited. <Link href='/insights/anaerobic-ethiopian-coffee-processing-buyers-guide' className='text-amber-700 hover:underline'>See anaerobic sourcing guide</Link>.</td>
            </tr>
            <tr className='border-b'>
              <td className='p-3 font-semibold'>Climate-resilient genetics</td>
              <td className='p-3'>Build long-term relationships in Ethiopian highland origins (1,800m+). Diversify away from single-cultivar origins. <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Explore heirloom varieties</Link>.</td>
            </tr>
            <tr className='border-b bg-gray-50'>
              <td className='p-3 font-semibold'>Price restructuring</td>
              <td className='p-3'>Accept the new cost floor. Lock forward contracts early. Adjust retail pricing to reflect true <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>landed costs</Link>.</td>
            </tr>
            <tr className='border-b'>
              <td className='p-3 font-semibold'>Story-driven premiumization</td>
              <td className='p-3'>Source lots with full provenance documentation. Use station-level narratives in marketing. Specificity sells &ndash; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>learn how to source direct</Link>.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Each of these specialty coffee trends in 2026 reinforces the others. Traceability enables storytelling. Experimental processing creates differentiation that justifies higher prices. Climate-resilient genetics protect long-term supply. Ethiopian coffee sits at the intersection of all five. The question for importers is not whether to act on these trends, but how quickly. Review the <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian harvest calendar</Link> to align your buying timeline, and explore current availability on our <Link href='/offerings' className='text-amber-700 hover:underline'>offerings page</Link>.
      </p>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Trend-Ready Ethiopian Coffee Direct from Origin</h4>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Import and Export PLC</span> provides traceable, EUDR-ready specialty lots from Yirgacheffe, Guji, Sidamo, Limu, Harar, and Jimma. Request samples, review current FOB pricing, or discuss forward contracts for your 2026 sourcing plan.
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

      {/* FAQ SECTION */}
      <section className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2'>
          <HiOutlineQuestionMarkCircle className='text-amber-600 flex-shrink-0' />
          Frequently Asked Questions
        </h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What are the biggest specialty coffee trends for 2026?</h4>
            <p className='text-sm text-gray-600'>Five trends are reshaping the specialty coffee market in 2026: mandatory traceability under the EU Deforestation Regulation, rapid growth of anaerobic and honey processed lots, increasing strategic value of climate-resilient heirloom genetics, structural price increases across all grades, and a shift from generic single-origin branding to story-driven premiumization backed by lot-level provenance data.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How does the EU Deforestation Regulation affect coffee importers?</h4>
            <p className='text-sm text-gray-600'>The EUDR requires importers to provide GPS-level traceability, supply-chain mapping, and due-diligence documentation proving coffee was not grown on recently deforested land. Non-compliant shipments face customs rejection. Importers sourcing Ethiopian coffee through the direct specialty lot channel gain a compliance advantage because washing-station-level traceability is built into the system.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Why are specialty coffee prices so high in 2026?</h4>
            <p className='text-sm text-gray-600'>Arabica C-market futures rose above $3.00/lb in late 2024 and past $4.00/lb in early 2025, driven by Brazil&apos;s production shortfall, Vietnamese Robusta constraints, rising Ethiopian cherry prices, and global demand growth. Ethiopian Grade 1 washed lots now trade at $8.00&ndash;$12.00+/kg FOB. Forward contracting and early booking help importers secure supply at known prices.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Which coffee processing methods are growing fastest?</h4>
            <p className='text-sm text-gray-600'>Natural and honey processed coffees have grown from roughly 15% to 35% of specialty roaster purchases over the past five years, with projections of 40&ndash;45% within three more years. Anaerobic and carbonic maceration lots command the highest premiums ($2&ndash;$3/lb above standard processing) and are expanding at washing stations across Guji and Yirgacheffe.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How should importers adapt their sourcing for 2026?</h4>
            <p className='text-sm text-gray-600'>Audit supply chains for EUDR compliance now. Allocate 25&ndash;35% of your Ethiopian budget to non-washed lots. Build long-term relationships in highland origins above 1,800 meters for climate resilience. Accept the new price floor and lock forward contracts early. Source lots with full provenance documentation to enable downstream premiumization for your roaster customers.</p>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Market &amp; Pricing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/navigating-2026-ethiopian-specialty-coffee-exporters' className='text-amber-700 hover:underline'>2026 Ethiopian Specialty Coffee Exporters</Link></li>
              <li>&bull; <Link href='/insights/rising-ethiopian-coffee-prices-explained' className='text-amber-700 hover:underline'>Rising Ethiopian Coffee Prices Explained</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Processing &amp; Quality</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/anaerobic-ethiopian-coffee-processing-buyers-guide' className='text-amber-700 hover:underline'>Anaerobic Processing Buyer&apos;s Guide</Link></li>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Processing</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='text-amber-700 hover:underline'>Washing Stations Buyer&apos;s Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Contracts &amp; Payment Terms Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Climate &amp; Genetics</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-climate-change-impact' className='text-amber-700 hover:underline'>Climate Change Impact on Ethiopian Coffee</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Ethiopian Heirloom Coffee Varieties</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Harvest Calendar</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC. This analysis covers five data-backed specialty coffee trends for 2026 that importers and roasters should factor into sourcing decisions: regulatory traceability, experimental processing, climate-resilient genetics, price restructuring, and story-driven premiumization.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Export Services</Link> · <Link href='/about' className='underline'>About</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

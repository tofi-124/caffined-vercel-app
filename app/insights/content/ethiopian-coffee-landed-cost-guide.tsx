import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineQuestionMarkCircle,
  HiOutlineCurrencyDollar,
  HiOutlineTruck,
  HiOutlineDocumentCheck,
  HiOutlineCalculator,
  HiOutlineScale,
  HiOutlineShieldCheck,
  HiOutlineBuildingStorefront,
  HiOutlineExclamationTriangle,
  HiOutlineArrowTrendingDown,
  HiOutlineGlobeAlt
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopianCoffeeLandedCostGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        How to calculate the true delivered cost of Ethiopian green coffee, from FOB Djibouti through freight, insurance, customs, and warehousing to your door.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Understanding every cost component between FOB and delivered warehouse is the difference between a profitable import program and a margin surprise.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian green coffee bags loaded at Djibouti port for export, representing the landed cost journey from origin to destination warehouse'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Trade Guidance / Pricing / Import Costs / Importer Resources</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Key Takeaway:</span> The <strong>Ethiopian coffee landed cost</strong> is the total price you pay to get green coffee from Djibouti port to your warehouse. It includes the FOB price, ocean freight ($1,800 to $4,500 per 20ft container), marine insurance (0.3% to 0.5% of CIF value), customs duties (0% in the USA, EU, and most markets for green coffee under HS 0901.11), port handling and customs brokerage ($400 to $900), inland delivery ($300 to $800), and warehousing ($0.50 to $2.00 per bag per month). For a typical 20ft container of washed Ethiopian Yirgacheffe Grade 1, expect a landed cost of roughly $7.50 to $9.50 per kilogram in the USA or EU, depending on the FOB price and transit route. Hidden costs (financing, weight loss, forex exposure) can add 3% to 8% on top. Calculate your landed cost before committing to a contract, not after.</span>
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href="#what-is-landed-cost" className='text-amber-700 hover:underline'>1. What Is Landed Cost for Green Coffee?</a></li>
          <li><a href="#formula" className='text-amber-700 hover:underline'>2. The Landed Cost Formula</a></li>
          <li><a href="#fob-price" className='text-amber-700 hover:underline'>3. FOB Price: The Starting Point</a></li>
          <li><a href="#ocean-freight" className='text-amber-700 hover:underline'>4. Ocean Freight and Inland Transport</a></li>
          <li><a href="#insurance" className='text-amber-700 hover:underline'>5. Marine Insurance</a></li>
          <li><a href="#customs-duties" className='text-amber-700 hover:underline'>6. Customs Duties and Taxes</a></li>
          <li><a href="#port-handling" className='text-amber-700 hover:underline'>7. Port Handling and Customs Brokerage</a></li>
          <li><a href="#warehousing" className='text-amber-700 hover:underline'>8. Warehousing and Last-Mile Delivery</a></li>
          <li><a href="#hidden-costs" className='text-amber-700 hover:underline'>9. Hidden Costs Most Importers Miss</a></li>
          <li><a href="#worked-example" className='text-amber-700 hover:underline'>10. Worked Example: 20ft Container to the USA</a></li>
          <li><a href="#fcl-vs-lcl" className='text-amber-700 hover:underline'>11. FCL vs. LCL: Cost Comparison</a></li>
          <li><a href="#reduce-costs" className='text-amber-700 hover:underline'>12. How to Reduce Your Landed Cost</a></li>
          <li><a href="#faq" className='text-amber-700 hover:underline'>13. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRODUCTION */}
      <p className='my-4'>
        <span className='font-bold'>Ethiopian coffee landed cost</span> is the single number that determines whether your import program is profitable. The FOB price on your contract is only the starting point. Between Djibouti port and your warehouse door, a stack of costs accumulates: ocean freight, insurance, customs clearance, port fees, drayage, warehousing, and several hidden line items that catch first-time importers off guard.
      </p>

      <p className='my-4'>
        Most importers and roasters focus on the FOB quote when evaluating an Ethiopian coffee offer. That approach leaves money on the table, or worse, erodes margins after the container arrives. A specialty lot priced at $6.50/kg FOB may land at $8.20/kg or $9.00/kg depending on the destination, the freight rate, and how efficiently you manage the logistics chain. Those differences matter when your roasted retail price targets a specific margin.
      </p>

      <p className='my-4'>
        This guide breaks down every cost component in the landed cost chain for Ethiopian green coffee. It provides real indicative numbers, a worked example, and practical strategies to keep your total import cost under control. It is written for importers, roasters, and green coffee buyers who source (or plan to source) directly from Ethiopia.
      </p>

      {/* SECTION 1: WHAT IS LANDED COST */}
      <h2 id="what-is-landed-cost" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineCurrencyDollar className='text-amber-600' />
        What Is Landed Cost for Green Coffee?
      </h2>

      <p className='my-4'>
        Landed cost is the total price of a product once it reaches your warehouse. For green coffee, it encompasses every expense incurred from the moment the exporter loads bags at the port of origin (typically Djibouti for Ethiopian coffee) until those bags sit in your storage facility, ready for roasting or resale.
      </p>

      <p className='my-4'>
        The concept differs from FOB (Free on Board) pricing, where the exporter&apos;s responsibility ends once the coffee is loaded onto the vessel. Everything after that point (freight, insurance, duties, handling, delivery) falls on the buyer. Some contracts use CIF (Cost, Insurance, Freight), where the exporter covers freight and insurance to the destination port, but the buyer still pays for customs clearance, inland transport, and warehousing.
      </p>

      <p className='my-4'>
        For a refresher on FOB pricing structures and how Ethiopian coffee is priced at origin, see our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='underline font-bold'>Ethiopian coffee pricing guide for importers</Link>.
      </p>

      {/* SECTION 2: THE FORMULA */}
      <h2 id="formula" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineCalculator className='text-amber-600' />
        The Landed Cost Formula
      </h2>

      <p className='my-4'>
        The complete landed cost formula for Ethiopian green coffee is:
      </p>

      <div className='bg-gray-100 p-5 rounded-lg my-6 font-mono text-sm'>
        <p className='font-bold mb-2'>Landed Cost per kg =</p>
        <p className='ml-4'>FOB Price</p>
        <p className='ml-4'>+ Ocean Freight (per kg)</p>
        <p className='ml-4'>+ Marine Insurance</p>
        <p className='ml-4'>+ Customs Duties &amp; Taxes</p>
        <p className='ml-4'>+ Port Handling &amp; Brokerage (per kg)</p>
        <p className='ml-4'>+ Inland Delivery (per kg)</p>
        <p className='ml-4'>+ Warehousing (per kg, if applicable)</p>
        <p className='ml-4'>+ Hidden Costs (financing, weight loss, forex)</p>
      </div>

      <p className='my-4'>
        Each component varies by destination, container size, volume, and the specific logistics providers you use. The sections that follow break down each line item with indicative ranges based on current market conditions for Ethiopian coffee shipped from Djibouti.
      </p>

      {/* SECTION 3: FOB PRICE */}
      <h2 id="fob-price" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineScale className='text-amber-600' />
        FOB Price: The Starting Point
      </h2>

      <p className='my-4'>
        The FOB Djibouti price is the base cost of your Ethiopian green coffee. It includes the coffee itself (farm-gate price, processing, and exporter margin), inland transport from the processing site to Addis Ababa or directly to Djibouti via truck, ECX or direct export fees, export taxes and levies, and loading at the port.
      </p>

      <p className='my-4'>
        Ethiopian FOB prices vary significantly by origin, grade, and processing method. As of early 2026, indicative FOB ranges are:
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Origin / Grade</th>
              <th className='p-3 text-left'>Processing</th>
              <th className='p-3 text-left'>FOB ($/kg)</th>
              <th className='p-3 text-left'>FOB ($/lb)</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>Yirgacheffe G1</td>
              <td className='p-3'>Washed</td>
              <td className='p-3'>$6.00 – $8.50</td>
              <td className='p-3'>$2.72 – $3.86</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3'>Yirgacheffe G1</td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>$5.50 – $7.50</td>
              <td className='p-3'>$2.49 – $3.40</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>Guji G1</td>
              <td className='p-3'>Washed / Natural</td>
              <td className='p-3'>$5.80 – $8.00</td>
              <td className='p-3'>$2.63 – $3.63</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3'>Sidamo G2</td>
              <td className='p-3'>Washed</td>
              <td className='p-3'>$4.80 – $6.50</td>
              <td className='p-3'>$2.18 – $2.95</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>Limu G2</td>
              <td className='p-3'>Washed</td>
              <td className='p-3'>$4.20 – $5.50</td>
              <td className='p-3'>$1.90 – $2.49</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3'>Jimma G4/G5</td>
              <td className='p-3'>Natural / Unwashed</td>
              <td className='p-3'>$3.50 – $4.50</td>
              <td className='p-3'>$1.59 – $2.04</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>Harar G4</td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>$4.00 – $5.50</td>
              <td className='p-3'>$1.81 – $2.49</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        These ranges shift with the C-market, seasonal availability, and demand. The key point: your FOB price typically represents 65% to 80% of your final landed cost. The remaining 20% to 35% comes from the logistics and administrative chain described below. For detailed FOB pricing analysis, see our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='underline font-bold'>FOB pricing guide</Link>.
      </p>

      {/* SECTION 4: OCEAN FREIGHT */}
      <h2 id="ocean-freight" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineTruck className='text-amber-600' />
        Ocean Freight and Inland Transport
      </h2>

      <p className='my-4'>
        Ocean freight is the largest post-FOB cost. Ethiopian coffee ships from the Port of Djibouti, Ethiopia&apos;s primary maritime gateway. A standard 20ft container holds approximately 250 to 320 bags (15,000 to 19,200 kg) of green coffee, depending on bag weight (typically 60 kg per bag).
      </p>

      <h3 className='text-xl font-bold mt-6'>Indicative Freight Rates from Djibouti (2025/2026)</h3>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Destination Port</th>
              <th className='p-3 text-left'>20ft FCL Rate</th>
              <th className='p-3 text-left'>Transit Time</th>
              <th className='p-3 text-left'>Per kg (at 18,000 kg)</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>New York / Newark, USA</td>
              <td className='p-3'>$2,800 – $4,500</td>
              <td className='p-3'>30 – 40 days</td>
              <td className='p-3'>$0.16 – $0.25</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3'>Hamburg, Germany</td>
              <td className='p-3'>$1,800 – $3,200</td>
              <td className='p-3'>18 – 25 days</td>
              <td className='p-3'>$0.10 – $0.18</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>Rotterdam, Netherlands</td>
              <td className='p-3'>$1,800 – $3,000</td>
              <td className='p-3'>18 – 25 days</td>
              <td className='p-3'>$0.10 – $0.17</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3'>Jeddah, Saudi Arabia</td>
              <td className='p-3'>$1,200 – $2,000</td>
              <td className='p-3'>5 – 8 days</td>
              <td className='p-3'>$0.07 – $0.11</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>Jebel Ali, UAE</td>
              <td className='p-3'>$1,500 – $2,500</td>
              <td className='p-3'>7 – 12 days</td>
              <td className='p-3'>$0.08 – $0.14</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3'>Yokohama, Japan</td>
              <td className='p-3'>$2,800 – $4,200</td>
              <td className='p-3'>25 – 35 days</td>
              <td className='p-3'>$0.16 – $0.23</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>Melbourne, Australia</td>
              <td className='p-3'>$2,500 – $4,000</td>
              <td className='p-3'>22 – 30 days</td>
              <td className='p-3'>$0.14 – $0.22</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Freight rates fluctuate based on fuel surcharges (bunker adjustment factor), peak season demand, Red Sea security conditions, and carrier availability. Middle East destinations benefit from geographic proximity to Djibouti, making freight costs significantly lower than trans-Pacific or trans-Atlantic routes. For details on how freight impacts quality during transit, see our <Link href='/insights/specialty-coffee-storage-freight-logistics' className='underline font-bold'>specialty coffee storage in sea freight</Link> guide.
      </p>

      <h3 className='text-xl font-bold mt-6'>Origin-Side Inland Transport</h3>
      <p className='my-4'>
        Before coffee reaches Djibouti, it travels by truck from processing sites or dry mills in Ethiopia. The distance from Addis Ababa to Djibouti is roughly 900 km, taking 2 to 3 days by road. This cost is typically included in the FOB price, but buyers should confirm this with their exporter. If you purchase Ex-Works (EXW) or FCA Addis Ababa, you will need to arrange Addis-to-Djibouti trucking separately, which costs approximately $1,500 to $2,500 per container.
      </p>

      {/* SECTION 5: INSURANCE */}
      <h2 id="insurance" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineShieldCheck className='text-amber-600' />
        Marine Insurance
      </h2>

      <p className='my-4'>
        Marine cargo insurance protects against loss or damage during ocean transit. Standard policies cover theft, fire, sinking, and weather damage. Institute Cargo Clauses (A) provides the broadest &quot;all-risks&quot; coverage (excluding war and strikes, which require separate endorsements).
      </p>

      <p className='my-4'>
        For green coffee shipments, expect to pay:
      </p>

      <ul className='list-disc pl-6 my-4 space-y-2'>
        <li><span className='font-bold'>Rate:</span> 0.3% to 0.5% of CIF value (some insurers quote on FOB + freight value + 10%)</li>
        <li><span className='font-bold'>Typical cost per container:</span> $300 to $600 for a $100,000 to $120,000 container of specialty Ethiopian coffee</li>
        <li><span className='font-bold'>Per kg:</span> approximately $0.02 to $0.03</li>
      </ul>

      <p className='my-4'>
        Insurance is not optional for any serious importer. A single lost or damaged container of specialty Ethiopian coffee represents $80,000 to $150,000 in value. Some banks require proof of marine insurance before releasing a Letter of Credit. If your exporter quotes CIF, insurance is included in the price, but verify the coverage scope and insured value.
      </p>

      {/* SECTION 6: CUSTOMS DUTIES */}
      <h2 id="customs-duties" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineDocumentCheck className='text-amber-600' />
        Customs Duties and Taxes
      </h2>

      <p className='my-4'>
        Green (unroasted) coffee beans fall under HS code 0901.11. This is good news for importers: most major markets impose zero or minimal duty on green coffee. The classification applies to unroasted, not decaffeinated beans, which is the standard form for Ethiopian green coffee exports.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Market</th>
              <th className='p-3 text-left'>Import Duty (HS 0901.11)</th>
              <th className='p-3 text-left'>VAT / Sales Tax</th>
              <th className='p-3 text-left'>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>United States</td>
              <td className='p-3'>0% (free)</td>
              <td className='p-3'>Varies by state</td>
              <td className='p-3'>Duty-free under AGOA; FDA prior notice required</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3'>European Union</td>
              <td className='p-3'>0% (free)</td>
              <td className='p-3'>Varies (19% DE, 21% NL)</td>
              <td className='p-3'>Zero duty under GSP+; VAT deductible for businesses</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>United Kingdom</td>
              <td className='p-3'>0% (free)</td>
              <td className='p-3'>20% VAT</td>
              <td className='p-3'>Zero duty post-Brexit for green coffee; VAT reclaimable</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3'>Canada</td>
              <td className='p-3'>0% (free)</td>
              <td className='p-3'>5% GST + provincial</td>
              <td className='p-3'>Duty-free under GPT; GST reclaimable via ITC</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>Japan</td>
              <td className='p-3'>0% (free)</td>
              <td className='p-3'>10% consumption tax</td>
              <td className='p-3'>Duty-free under GSP; tax offset on filed returns</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3'>Saudi Arabia</td>
              <td className='p-3'>0% (free)</td>
              <td className='p-3'>15% VAT</td>
              <td className='p-3'>Zero duty; VAT reclaimable for registered businesses</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>Australia</td>
              <td className='p-3'>0% (free)</td>
              <td className='p-3'>10% GST</td>
              <td className='p-3'>Zero duty; GST claimed back on BAS</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3'>Germany (Kaffeesteuer)</td>
              <td className='p-3'>0% import duty</td>
              <td className='p-3'>19% VAT + €2.19/kg tax</td>
              <td className='p-3'>Kaffeesteuer applies to roasted coffee only, not green beans</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        The effective duty cost for Ethiopian green coffee is zero in virtually all major import markets. VAT and sales taxes add a cash-flow cost (you pay upfront at import, then reclaim later), but they do not increase your true cost of goods. Budget for the cash-flow impact, especially for your first shipments. For country-specific regulatory details, see our import guides for the <Link href='/insights/how-to-import-ethiopian-coffee-to-usa' className='underline font-bold'>USA</Link>, <Link href='/insights/importing-ethiopian-coffee-to-germany' className='underline font-bold'>Germany</Link>, <Link href='/insights/importing-ethiopian-coffee-to-uk' className='underline font-bold'>UK</Link>, and <Link href='/insights/importing-ethiopian-coffee-to-japan' className='underline font-bold'>Japan</Link>.
      </p>

      {/* SECTION 7: PORT HANDLING */}
      <h2 id="port-handling" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineBuildingStorefront className='text-amber-600' />
        Port Handling and Customs Brokerage
      </h2>

      <p className='my-4'>
        Once your container arrives at the destination port, several fees apply before you take delivery:
      </p>

      <ul className='list-disc pl-6 my-4 space-y-2'>
        <li><span className='font-bold'>Terminal handling charge (THC):</span> $150 to $350 per container, charged by the port terminal for unloading and staging</li>
        <li><span className='font-bold'>Customs brokerage:</span> $100 to $350 per entry, the fee your customs broker charges for filing import documentation</li>
        <li><span className='font-bold'>FDA / CFIA / DAFF inspection fees:</span> $50 to $200 if your shipment is selected for physical inspection (varies by country and agency)</li>
        <li><span className='font-bold'>Demurrage and detention:</span> $0 if you clear promptly; $100 to $300 per day if containers sit beyond the free period (typically 5 to 7 days)</li>
        <li><span className='font-bold'>Container drayage:</span> $200 to $500 for short-distance port-to-warehouse trucking within the port metro area</li>
      </ul>

      <p className='my-4'>
        Total port-side costs typically fall between <span className='font-bold'>$400 and $900 per container</span>, or roughly <span className='font-bold'>$0.02 to $0.05 per kg</span>. The biggest risk here is demurrage: delays in customs clearance (missing documents, inspection holds) can quickly add hundreds of dollars per day. Having your customs broker, phytosanitary certificate, bill of lading, and commercial invoice ready before the vessel arrives is essential.
      </p>

      {/* SECTION 8: WAREHOUSING */}
      <h2 id="warehousing" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineBuildingStorefront className='text-amber-600' />
        Warehousing and Last-Mile Delivery
      </h2>

      <p className='my-4'>
        After clearing customs, your coffee needs to reach its final destination, whether that is your own warehouse, a third-party logistics (3PL) facility, or a bonded warehouse.
      </p>

      <h3 className='text-xl font-bold mt-6'>Warehousing Costs</h3>
      <ul className='list-disc pl-6 my-4 space-y-2'>
        <li><span className='font-bold'>Storage:</span> $0.50 to $2.00 per bag per month at a climate-controlled green coffee warehouse</li>
        <li><span className='font-bold'>In/out handling:</span> $2.00 to $5.00 per pallet for receiving and staging</li>
        <li><span className='font-bold'>Bonded warehouse option:</span> Defers VAT/duty payment until coffee is released for domestic consumption (useful in the EU and UK)</li>
      </ul>

      <h3 className='text-xl font-bold mt-6'>Inland Transport</h3>
      <p className='my-4'>
        If your warehouse is not at the port city, inland trucking adds cost. A full container from a US port to an inland city (e.g., Newark to Chicago) can cost $1,200 to $2,500. Port-to-warehouse delivery within the same metro area runs $300 to $800. In Europe, Hamburg or Rotterdam to an inland roastery in southern Germany or Belgium might cost EUR 500 to EUR 1,200.
      </p>

      <p className='my-4'>
        For importers who do not have their own warehouse, working with a green coffee warehouse service (such as Volcafe Specialty, Cafe Imports, or regional 3PLs) simplifies storage and allows you to draw down bags as needed. This adds a per-bag-per-month fee but eliminates the capital cost of operating your own climate-controlled facility. For more on protecting coffee quality during storage, see our <Link href='/insights/green-coffee-shelf-life-storage-guide' className='underline font-bold'>green coffee shelf life and storage guide</Link>.
      </p>

      {/* SECTION 9: HIDDEN COSTS */}
      <h2 id="hidden-costs" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineExclamationTriangle className='text-amber-600' />
        Hidden Costs Most Importers Miss
      </h2>

      <p className='my-4'>
        The line items above account for the visible landed cost. Several additional costs erode margins if you do not anticipate them:
      </p>

      <h3 className='text-xl font-bold mt-6'>1. Financing Costs</h3>
      <p className='my-4'>
        If you pay via Letter of Credit (LC), your bank charges an LC issuance fee (0.5% to 2.0% of the LC value) plus potential amendment and discrepancy fees. Cash-against-documents (CAD) and telegraphic transfer (TT) avoid LC fees but may require upfront cash. The cost of capital tied up during the 60 to 120 days between payment and selling the roasted coffee is real. At a 6% annual cost of capital, tying up $100,000 for 90 days costs approximately $1,500. See our <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='underline font-bold'>contracts and payment terms guide</Link> for detailed payment method analysis.
      </p>

      <h3 className='text-xl font-bold mt-6'>2. Weight Loss (Moisture and Handling)</h3>
      <p className='my-4'>
        Green coffee shipped at 10% to 12% moisture content loses weight during transit and storage as moisture equalizes with the ambient environment. Industry standard allowance is 0.5% to 1.0% weight loss during a typical 3 to 6 month holding period. On a 18,000 kg container, that is 90 to 180 kg of product you paid for but cannot sell. At $7/kg, that is $630 to $1,260 in value. Choosing hermetic packaging (GrainPro or Ecotact liners) significantly reduces in-transit moisture loss. See our <Link href='/insights/green-coffee-packaging-bag-types-guide' className='underline font-bold'>green coffee packaging guide</Link> for the full cost and quality trade-off between bag types.
      </p>

      <h3 className='text-xl font-bold mt-6'>3. Currency Exchange Risk</h3>
      <p className='my-4'>
        If your revenue is in EUR, GBP, or AUD but you pay for coffee in USD (the standard for green coffee contracts), currency fluctuations between the contract date and your sales date affect profitability. A 3% adverse forex move on a $100,000 container is $3,000 in lost margin. Hedging through forward contracts or options adds cost (typically 0.5% to 1.5%) but provides certainty.
      </p>

      <h3 className='text-xl font-bold mt-6'>4. Sample and QC Costs</h3>
      <p className='my-4'>
        Pre-shipment sample roasting, cupping, and quality control add $200 to $500 per lot for importers who conduct their own QC. Third-party lab analysis (moisture, water activity, defect count) costs $50 to $150 per sample. These are small per-container but add up across multiple lots.
      </p>

      <h3 className='text-xl font-bold mt-6'>5. Compliance and Documentation</h3>
      <p className='my-4'>
        EUDR compliance costs for due diligence, geolocation verification, and reporting are emerging as a new line item for EU-bound shipments. Phytosanitary certificates, certificates of origin, and organic transaction certificates each carry issuing fees at origin ($20 to $100 per document). These small costs are typically included in the FOB price but worth confirming. For EU-bound coffee, see our <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='underline font-bold'>EUDR compliance guide</Link>.
      </p>

      <div className='bg-amber-50 p-4 rounded-lg my-6 border border-amber-200'>
        <p className='text-sm font-semibold'>Total Hidden Cost Impact: 3% to 8% of FOB value, depending on your payment method, holding period, and currency exposure. Factor this into your cost model from the start.</p>
      </div>

      {/* SECTION 10: WORKED EXAMPLE */}
      <h2 id="worked-example" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineCalculator className='text-amber-600' />
        Worked Example: 20ft Container to the USA
      </h2>

      <p className='my-4'>
        The following example uses a 20ft container of washed Yirgacheffe Grade 1 shipped from Djibouti to New York/Newark, based on indicative 2025/2026 rates.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Cost Component</th>
              <th className='p-3 text-left'>Total (USD)</th>
              <th className='p-3 text-left'>Per kg</th>
              <th className='p-3 text-left'>% of Landed Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>FOB Djibouti (300 bags x 60 kg x $7.00/kg)</td>
              <td className='p-3'>$126,000</td>
              <td className='p-3'>$7.00</td>
              <td className='p-3'>83.7%</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3'>Ocean freight (Djibouti to Newark)</td>
              <td className='p-3'>$3,500</td>
              <td className='p-3'>$0.19</td>
              <td className='p-3'>2.3%</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>Marine insurance (0.35% of $129,500)</td>
              <td className='p-3'>$453</td>
              <td className='p-3'>$0.03</td>
              <td className='p-3'>0.3%</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3'>Customs duty (0% under AGOA)</td>
              <td className='p-3'>$0</td>
              <td className='p-3'>$0.00</td>
              <td className='p-3'>0.0%</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>Customs brokerage</td>
              <td className='p-3'>$250</td>
              <td className='p-3'>$0.01</td>
              <td className='p-3'>0.2%</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3'>Terminal handling (THC)</td>
              <td className='p-3'>$275</td>
              <td className='p-3'>$0.02</td>
              <td className='p-3'>0.2%</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>Port drayage (Newark to NJ warehouse)</td>
              <td className='p-3'>$450</td>
              <td className='p-3'>$0.03</td>
              <td className='p-3'>0.3%</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3'>Warehouse receiving &amp; 1 month storage</td>
              <td className='p-3'>$650</td>
              <td className='p-3'>$0.04</td>
              <td className='p-3'>0.4%</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>Hidden costs (financing, weight loss, forex est.)</td>
              <td className='p-3'>$4,500</td>
              <td className='p-3'>$0.25</td>
              <td className='p-3'>3.0%</td>
            </tr>
            <tr className='bg-amber-100 font-bold'>
              <td className='p-3'>TOTAL LANDED COST</td>
              <td className='p-3'>$136,078</td>
              <td className='p-3'>$7.56</td>
              <td className='p-3'>100%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        In this scenario, the total landed cost per kilogram is approximately <span className='font-bold'>$7.56</span>, representing a <span className='font-bold'>$0.56/kg (8.0%) markup over the FOB price</span>. If you purchase at a higher FOB ($8.50/kg for a top-scoring lot), the landed cost would be closer to $9.10/kg. If you ship to a European port (lower freight), the same coffee might land at $7.35/kg.
      </p>

      <p className='my-4'>
        The worked example demonstrates a critical point: post-FOB costs are relatively fixed per container regardless of the FOB price. The higher the FOB price, the lower the percentage markup. Conversely, lower-priced commercial grades absorb proportionally more logistics cost.
      </p>

      {/* SECTION 11: FCL VS LCL */}
      <h2 id="fcl-vs-lcl" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineGlobeAlt className='text-amber-600' />
        FCL vs. LCL: Cost Comparison
      </h2>

      <p className='my-4'>
        Not every buyer needs a full container. Smaller roasters and first-time importers often start with LCL (Less than Container Load) shipments. The trade-off is straightforward: LCL offers flexibility at a higher per-kg cost.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Factor</th>
              <th className='p-3 text-left'>FCL (Full Container)</th>
              <th className='p-3 text-left'>LCL (Partial Container)</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Typical volume</td>
              <td className='p-3'>250 – 320 bags (15,000 – 19,200 kg)</td>
              <td className='p-3'>10 – 100 bags (600 – 6,000 kg)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Freight cost per kg</td>
              <td className='p-3'>$0.10 – $0.25</td>
              <td className='p-3'>$0.30 – $0.80</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Handling fees</td>
              <td className='p-3'>Lower (single unit moves)</td>
              <td className='p-3'>Higher (CFS charges, consolidation fees)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Transit time</td>
              <td className='p-3'>Direct routing</td>
              <td className='p-3'>May add 1 – 2 weeks for consolidation</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Quality risk</td>
              <td className='p-3'>Lower (sealed container)</td>
              <td className='p-3'>Slightly higher (shared space, more handling)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Landed cost premium</td>
              <td className='p-3'>Baseline</td>
              <td className='p-3'>+$0.20 to $0.55 per kg vs. FCL</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        For volumes below 100 bags, LCL is often the only practical option unless you join a buying group or consolidate with other buyers through your exporter. Many Ethiopian exporters, including Ethio Coffee Export, can arrange container consolidation for multiple buyers, reducing per-kg freight costs. For more on minimum order strategies, see our <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='underline font-bold'>Ethiopian coffee MOQ guide</Link>.
      </p>

      {/* SECTION 12: REDUCE COSTS */}
      <h2 id="reduce-costs" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineArrowTrendingDown className='text-amber-600' />
        How to Reduce Your Ethiopian Coffee Landed Cost
      </h2>

      <p className='my-4'>
        Landed cost is not entirely fixed. Strategic decisions at each stage of the chain can reduce your total cost by 5% to 15%:
      </p>

      <ol className='list-decimal pl-6 my-4 space-y-3'>
        <li><span className='font-bold'>Negotiate FOB wisely.</span> Volume commitments, multi-season contracts, and early booking during harvest (November through February) give you better pricing. Confirm that FOB includes inland transport to Djibouti.</li>
        <li><span className='font-bold'>Get multiple freight quotes.</span> Rates from Djibouti vary 30% to 50% between carriers and freight forwarders. NVOCCs (non-vessel-operating common carriers) often beat direct carrier quotes for specialty coffee volumes.</li>
        <li><span className='font-bold'>Consolidate shipments.</span> If you buy from multiple Ethiopian origins, combine them into a single container through your exporter or a Djibouti-based forwarder to avoid LCL premiums.</li>
        <li><span className='font-bold'>Clear customs fast.</span> Prepare documentation before vessel arrival. Demurrage at $100 to $300 per day is entirely avoidable with proper planning.</li>
        <li><span className='font-bold'>Use bonded warehouses in the EU/UK.</span> Defer VAT payment until you sell the coffee, improving cash flow without additional cost.</li>
        <li><span className='font-bold'>Hedge currency exposure.</span> If your sales are in a non-USD currency, a simple forward contract locks in your exchange rate and removes a major source of margin uncertainty.</li>
        <li><span className='font-bold'>Optimize storage duration.</span> Green coffee quality degrades over time. Selling or roasting within 3 to 6 months of arrival reduces storage costs and minimizes weight loss. Plan your purchasing calendar around your consumption rate.</li>
        <li><span className='font-bold'>Work with an experienced exporter.</span> Exporters who handle documentation efficiently, ship on schedule, and communicate proactively reduce your administrative burden and prevent costly errors. See our guide on <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='underline font-bold'>how to choose an Ethiopian coffee export company</Link>.</li>
      </ol>

      {/* FAQ */}
      <h2 id="faq" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineQuestionMarkCircle className='text-amber-600' />
        Frequently Asked Questions
      </h2>

      <section className='my-6 space-y-6'>
        <div>
          <h4 className='font-bold text-gray-800 mb-2'>How much does it cost to import Ethiopian coffee?</h4>
          <p className='text-sm text-gray-600'>The total landed cost for Ethiopian green coffee ranges from $5.00 to $10.00+ per kilogram depending on origin, grade, processing method, and destination. A typical specialty lot (Yirgacheffe or Guji G1 washed) lands at approximately $7.50 to $9.50/kg in the USA or EU, including FOB price, freight, insurance, and all handling fees.</p>
        </div>
        <div>
          <h4 className='font-bold text-gray-800 mb-2'>What is the landed cost of green coffee?</h4>
          <p className='text-sm text-gray-600'>Landed cost is the total delivered price of green coffee at your warehouse, including FOB price, ocean freight, marine insurance, customs duties, port handling, customs brokerage, inland transport, and warehousing. It represents the true cost of goods and should be the basis for calculating your roasted coffee pricing and margins.</p>
        </div>
        <div>
          <h4 className='font-bold text-gray-800 mb-2'>How do you calculate landed cost for coffee imports?</h4>
          <p className='text-sm text-gray-600'>Add FOB price + ocean freight + insurance + customs duty + port handling and brokerage + inland delivery + warehousing + hidden costs (financing, weight loss, forex). For Ethiopian coffee to the USA, post-FOB costs typically add $0.50 to $1.50 per kg (8% to 15%) depending on the route and efficiency of your logistics chain.</p>
        </div>
        <div>
          <h4 className='font-bold text-gray-800 mb-2'>What are the hidden costs of importing green coffee?</h4>
          <p className='text-sm text-gray-600'>Hidden costs include Letter of Credit fees (0.5% to 2.0%), cost of capital during the payment-to-sale cycle, weight loss from moisture reduction (0.5% to 1.0%), currency exchange risk, sample and QC expenses, and EUDR compliance documentation for EU-bound shipments. Together, these add 3% to 8% on top of visible landed cost.</p>
        </div>
        <div>
          <h4 className='font-bold text-gray-800 mb-2'>Is there import duty on Ethiopian green coffee?</h4>
          <p className='text-sm text-gray-600'>No, most major markets impose zero import duty on Ethiopian green coffee (HS 0901.11). The USA grants duty-free access under AGOA. The EU offers 0% duty under GSP+. Canada, Japan, Australia, the UK, and most Gulf states also apply zero duty on unroasted coffee beans. VAT or GST applies in some markets but is reclaimable for registered businesses.</p>
        </div>
      </section>

      {/* CTA */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Premium Ethiopian Coffee Direct from Origin</h4>
        <p className='my-2'>
          As a licensed <span className='font-bold'>Ethiopian coffee exporter</span>, <span className='font-bold'>Ethio Coffee Import and Export PLC</span> provides transparent FOB pricing, complete export documentation, and freight coordination from Djibouti to your destination port. We help importers and roasters understand the full cost picture from first sample to delivered container. Request current offers with detailed pricing that includes all origin-side costs, so you can calculate your landed cost with confidence.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Our Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Request Samples</Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>How to Order</Link>
        </div>
      </div>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Pricing &amp; Market</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Pricing for Importers</Link></li>
              <li>&bull; <Link href='/insights/rising-ethiopian-coffee-prices-explained' className='text-amber-700 hover:underline'>Rising Ethiopian Coffee Prices Explained</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-financing-hedging-importers-guide' className='text-amber-700 hover:underline'>Green Coffee Price Hedging &amp; Financing Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts &amp; Payment Terms</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Ethiopian Coffee MOQ Guide for Importers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Import Guides by Country</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-import-ethiopian-coffee-to-usa' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to the USA</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-germany' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to Germany</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality &amp; Logistics</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline'>Specialty Coffee Storage in Sea Freight</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline'>Green Coffee Shelf Life: Storage Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC. This guide draws on freight rate data from Freightos and Xeneta indices, customs duty schedules from the World Trade Organization (WTO) and national customs authorities, International Coffee Organization (ICO) trade statistics, and our direct experience exporting Ethiopian green coffee to importers across North America, Europe, Asia, and the Middle East. Freight rates, FOB prices, and handling fees change with market conditions; contact us for current pricing and cost estimates specific to your destination.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot; <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> &middot; <Link href='/about' className='underline'>About Ethio Coffee</Link> &middot; <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

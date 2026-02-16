import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { HiOutlineCurrencyDollar, HiOutlineChartBar, HiOutlineCheckCircle, HiOutlineArrowTrendingUp, HiOutlineGlobeAmericas, HiOutlineCalculator, HiOutlineDocumentText, HiOutlineLightBulb, HiOutlineScale } from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopianCoffeePricingFobGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        A practical breakdown of Ethiopian green coffee pricing for importers: FOB costs, ECX differentials, the C-market relationship, and what drives the numbers on your contract
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Green coffee pricing in Ethiopia reflects a layered system of commodity benchmarks, quality differentials, local auction dynamics, and logistics costs
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian green coffee beans being weighed and graded for export pricing'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Trade Guidance / Pricing / Importers</span>
      </div>

      <p className='my-4'>
        If you are an importer, roaster, or green coffee buyer considering Ethiopian coffee for the first time, pricing can feel opaque. Unlike many origins where a single FOB quote tells the whole story, Ethiopian coffee pricing reflects an interconnected system: the New York C-market benchmark, local ECX auction dynamics, quality-based differentials, and logistics costs from warehouse to port.
      </p>

      <p className='my-4'>
        This guide explains each layer so you can read an Ethiopian coffee offer sheet with confidence, compare quotes between exporters accurately, and plan your purchasing budgets with realistic numbers.
      </p>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Key Takeaway:</span> Ethiopian coffee is priced as a differential (premium or discount) against the ICE New York C-market Arabica futures contract. The FOB Djibouti price you see on a contract is always the C-market base plus the Ethiopian differential, plus local costs.</span>
        </p>
      </div>

      {/* ====== SECTION 1: THE C-MARKET ====== */}

      <h3 className='text-2xl font-extrabold mt-8'>
        <HiOutlineChartBar className='inline mr-2' />
        The New York C-Market: The Global Benchmark
      </h3>

      <p className='my-4'>
        All Arabica coffee in the world is priced in reference to the ICE (Intercontinental Exchange) Arabica Futures Contract, commonly called the "C-market" or "New York C." This contract sets a per-pound price in US cents for exchange-grade washed Arabica coffee.
      </p>

      <p className='my-4'>
        When you hear that "coffee is trading at 420 cents," that means one pound of benchmark Arabica on the futures exchange costs $4.20. However, no origin sells exactly at C-market price. Every origin, region, and grade trades at a premium or discount relative to this benchmark. These premiums and discounts are called <span className='font-bold'>differentials</span>.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3'><HiOutlineCalculator className='inline mr-2' />How Differentials Work</h4>
        <table className='w-full text-sm'>
          <thead>
            <tr className='border-b border-gray-300'>
              <th className='text-left py-2 px-3'>Component</th>
              <th className='text-left py-2 px-3'>Example</th>
              <th className='text-left py-2 px-3'>Explanation</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-100'>
              <td className='py-2 px-3 font-semibold'>C-market price</td>
              <td className='py-2 px-3'>420 c/lb</td>
              <td className='py-2 px-3'>The current futures price per pound</td>
            </tr>
            <tr className='border-b border-gray-100'>
              <td className='py-2 px-3 font-semibold'>Ethiopian differential</td>
              <td className='py-2 px-3'>+40 c/lb</td>
              <td className='py-2 px-3'>Premium for origin quality and demand</td>
            </tr>
            <tr className='border-b border-gray-100'>
              <td className='py-2 px-3 font-semibold'>Outright price</td>
              <td className='py-2 px-3'>460 c/lb ($4.60/lb)</td>
              <td className='py-2 px-3'>What you actually pay per pound FOB</td>
            </tr>
            <tr>
              <td className='py-2 px-3 font-semibold'>Per kg equivalent</td>
              <td className='py-2 px-3'>$10.14/kg</td>
              <td className='py-2 px-3'>Multiply per-lb price by 2.20462</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        <span className='font-bold'>Important:</span> The C-market moves every trading day. When an exporter sends you a quote, the price is typically valid for a limited window (often 24 to 72 hours) because the underlying benchmark shifts constantly. If the C-market rises 20 cents between your inquiry and your confirmation, your price changes accordingly unless you locked in a "fixed price" contract.
      </p>

      {/* ====== SECTION 2: ECX ====== */}

      <h3 className='text-2xl font-extrabold mt-8'>
        <HiOutlineScale className='inline mr-2' />
        The Ethiopia Commodity Exchange (ECX) and Local Pricing
      </h3>

      <p className='my-4'>
        Ethiopia has a unique coffee market structure. Most coffee traded in Ethiopia passes through the <span className='font-bold'>Ethiopia Commodity Exchange (ECX)</span>, a centralized trading platform established in 2008. The ECX sets daily reference prices for different coffee types and grades based on supply and demand at auction.
      </p>

      <p className='my-4'>
        However, not all Ethiopian coffee goes through the ECX. There are important exceptions:
      </p>

      <ul className='list-disc pl-6 my-4 space-y-2'>
        <li><span className='font-bold'>Direct export by cooperatives:</span> Coffee cooperatives and unions can sell directly to international buyers without going through ECX, which often results in better traceability and potentially better prices for farmers.</li>
        <li><span className='font-bold'>Vertically integrated exporters:</span> Some exporters own or operate their own washing stations and can export coffee they processed themselves, bypassing the ECX auction floor.</li>
        <li><span className='font-bold'>ECX reform (2020 onward):</span> Recent reforms have opened direct buyer-seller relationships on the ECX platform, allowing exporters to purchase from specific cooperatives and washing stations with full traceability.</li>
      </ul>

      <div className='bg-blue-50 p-6 rounded-lg my-6 border border-blue-200'>
        <h4 className='font-bold text-lg mb-3'><HiOutlineLightBulb className='inline mr-2' />ECX vs. Direct Trade Pricing</h4>
        <p className='mb-3'>
          Coffee purchased through the ECX auction typically reflects the prevailing local supply-demand balance. When local demand is high (for example, during domestic consumption peaks or when many exporters compete for limited lots), ECX prices can push above international parity.
        </p>
        <p>
          Direct trade arrangements through cooperatives or vertically integrated operations can sometimes offer more price stability because the relationship is not subject to daily auction volatility. However, direct trade lots may carry higher per-unit costs because of smaller volumes and additional traceability requirements.
        </p>
      </div>

      {/* ====== SECTION 3: WHAT DETERMINES THE DIFFERENTIAL ====== */}

      <h3 className='text-2xl font-extrabold mt-8'>
        <HiOutlineArrowTrendingUp className='inline mr-2' />
        What Determines the Ethiopian Differential?
      </h3>

      <p className='my-4'>
        Ethiopian coffee differentials are not fixed. They fluctuate based on multiple factors that importers should understand before negotiating:
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-2'>1. Region and Origin</h4>
          <p className='text-sm'>
            Yirgacheffe and Guji consistently command the highest premiums due to global demand from specialty roasters. Sidamo follows closely. Jimma and Limu trade at lower differentials because they are positioned more toward the commercial segment.
          </p>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-2'>2. Grade</h4>
          <p className='text-sm'>
            Ethiopian coffee is graded from Grade 1 (highest quality, fewest defects) to Grade 5. Grade 1 washed Yirgacheffe commands a significantly higher differential than Grade 4 natural Jimma. The grade directly reflects defect count, cup score, and screen size.
          </p>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-2'>3. Processing Method</h4>
          <p className='text-sm'>
            Washed (wet-processed) coffees generally trade at higher differentials than naturals for the same grade, because washed processing produces cleaner, more consistent cup profiles. Natural-processed specialty lots (especially Guji and Sidamo naturals with fruit-forward profiles) can be exceptions, sometimes matching or exceeding washed premiums.
          </p>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-2'>4. Crop Year and Freshness</h4>
          <p className='text-sm'>
            Current-crop coffee commands better differentials than past-crop. Ethiopian harvest runs from October through February depending on the region. Coffee shipped within six months of harvest is considered fresh crop and priced accordingly.
          </p>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-2'>5. Cup Score</h4>
          <p className='text-sm'>
            Lots scoring 85+ on the SCA protocol can command premiums well above standard Grade 1 pricing. Exceptional lots scoring 87 to 90+ enter the micro-lot or competition-lot category, where pricing often detaches from the C-market entirely and is negotiated as a flat rate. These lots represent some of the <Link href='/insights/most-expensive-coffee-in-the-world' className='underline font-semibold'>most expensive coffee in the world</Link>.
          </p>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-2'>6. Global Supply and Demand</h4>
          <p className='text-sm'>
            When Brazil (the largest coffee producer) has a poor harvest, global Arabica supply tightens, the C-market rises, and Ethiopian differentials may narrow because the base price is already high. Conversely, in years of global oversupply, Ethiopian differentials often widen as buyers pay more of a premium specifically for Ethiopian quality.
          </p>
        </div>
      </div>

      {/* ====== SECTION 4: PRICE RANGES ====== */}

      <h3 className='text-2xl font-extrabold mt-8'>
        <HiOutlineCurrencyDollar className='inline mr-2' />
        Indicative Price Ranges for Ethiopian Coffee (2025/2026 Season)
      </h3>

      <p className='my-4'>
        The following table provides indicative FOB Djibouti price ranges for the 2025/2026 crop year. These are approximate figures based on prevailing market conditions and should not be taken as firm offers. Actual pricing depends on current C-market levels, specific lot quality, and availability at the time of inquiry.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border border-gray-200 rounded-lg overflow-hidden'>
          <thead className='bg-dark text-primary'>
            <tr>
              <th className='text-left py-3 px-4'>Coffee Type</th>
              <th className='text-left py-3 px-4'>Grade</th>
              <th className='text-left py-3 px-4'>Process</th>
              <th className='text-left py-3 px-4'>FOB Price/kg (USD)</th>
              <th className='text-left py-3 px-4'>Cup Score Range</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-100'>
              <td className='py-3 px-4 font-semibold'>Yirgacheffe</td>
              <td className='py-3 px-4'>G1</td>
              <td className='py-3 px-4'>Washed</td>
              <td className='py-3 px-4'>$8.00 - $12.00+</td>
              <td className='py-3 px-4'>85 - 88+</td>
            </tr>
            <tr className='border-b border-gray-100 bg-gray-50'>
              <td className='py-3 px-4 font-semibold'>Yirgacheffe</td>
              <td className='py-3 px-4'>G2</td>
              <td className='py-3 px-4'>Washed</td>
              <td className='py-3 px-4'>$6.50 - $9.50</td>
              <td className='py-3 px-4'>84 - 86+</td>
            </tr>
            <tr className='border-b border-gray-100'>
              <td className='py-3 px-4 font-semibold'>Guji</td>
              <td className='py-3 px-4'>G1</td>
              <td className='py-3 px-4'>Natural</td>
              <td className='py-3 px-4'>$8.50 - $13.00+</td>
              <td className='py-3 px-4'>85 - 89+</td>
            </tr>
            <tr className='border-b border-gray-100 bg-gray-50'>
              <td className='py-3 px-4 font-semibold'>Sidamo</td>
              <td className='py-3 px-4'>G1-G2</td>
              <td className='py-3 px-4'>Washed</td>
              <td className='py-3 px-4'>$6.00 - $9.00</td>
              <td className='py-3 px-4'>84 - 87+</td>
            </tr>
            <tr className='border-b border-gray-100'>
              <td className='py-3 px-4 font-semibold'>Sidamo</td>
              <td className='py-3 px-4'>G1-G2</td>
              <td className='py-3 px-4'>Natural</td>
              <td className='py-3 px-4'>$6.50 - $10.00</td>
              <td className='py-3 px-4'>84 - 87+</td>
            </tr>
            <tr className='border-b border-gray-100 bg-gray-50'>
              <td className='py-3 px-4 font-semibold'>Harar</td>
              <td className='py-3 px-4'>G4</td>
              <td className='py-3 px-4'>Natural</td>
              <td className='py-3 px-4'>$5.00 - $7.50</td>
              <td className='py-3 px-4'>82 - 86+</td>
            </tr>
            <tr className='border-b border-gray-100'>
              <td className='py-3 px-4 font-semibold'>Limu</td>
              <td className='py-3 px-4'>G2-G3</td>
              <td className='py-3 px-4'>Washed</td>
              <td className='py-3 px-4'>$5.00 - $7.00</td>
              <td className='py-3 px-4'>82 - 85+</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='py-3 px-4 font-semibold'>Jimma</td>
              <td className='py-3 px-4'>G4-G5</td>
              <td className='py-3 px-4'>Natural</td>
              <td className='py-3 px-4'>$3.50 - $5.00</td>
              <td className='py-3 px-4'>78 - 82</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-amber-50 p-5 rounded-lg my-6 border border-amber-200'>
        <p className='text-sm'>
          <span className='font-bold'>Disclaimer:</span> The prices above are indicative ranges based on 2025/2026 market conditions. Ethiopian green coffee prices fluctuate daily with C-market movements, local supply conditions, and seasonal availability. Always request a current quote for accurate pricing. Visit our <Link href='/offerings' className='underline underline-offset-4 hover:text-dark/70 font-semibold'>current offerings</Link> page or <Link href='/contact-us' className='underline underline-offset-4 hover:text-dark/70 font-semibold'>contact us directly</Link> for live pricing.
        </p>
      </div>

      {/* ====== SECTION 5: FOB vs CIF ====== */}

      <h3 className='text-2xl font-extrabold mt-8'>
        <HiOutlineGlobeAmericas className='inline mr-2' />
        FOB Djibouti vs. CIF: Understanding Shipping Terms
      </h3>

      <p className='my-4'>
        Ethiopian coffee export pricing is typically quoted <span className='font-bold'>FOB Djibouti</span>. "FOB" means Free On Board, and Djibouti is the primary port used for Ethiopian coffee exports because Ethiopia is landlocked. Here is what each term means for your budget:
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-6'>
        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-3'>FOB Djibouti</h4>
          <ul className='space-y-2 text-sm'>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' />Coffee price includes all costs up to the point where the container is loaded onto the vessel at Djibouti port</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' />Inland transport from Addis Ababa to Djibouti is included</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' />All Ethiopian export documentation is included</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' />You arrange and pay for ocean freight, insurance, and import clearance</li>
          </ul>
        </div>
        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-3'>CIF (Your Destination Port)</h4>
          <ul className='space-y-2 text-sm'>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' />Everything in FOB, plus ocean freight and insurance to your port</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' />More predictable total cost for budgeting</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' />Exporter handles freight booking and documentation</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' />You only handle import clearance and local delivery</li>
          </ul>
        </div>
      </div>

      <p className='my-4'>
        Most experienced importers prefer FOB terms because they have established freight relationships and can often secure better shipping rates. First-time importers or those buying smaller volumes may prefer CIF because it simplifies the process. At <Link href='/ethiopian-coffee-exporter' className='underline underline-offset-4 hover:text-dark/70 font-semibold'>Ethio Coffee</Link>, we offer both options and can recommend trusted freight forwarders if you prefer to arrange your own shipping.
      </p>

      {/* ====== SECTION 6: TOTAL COST BREAKDOWN ====== */}

      <h3 className='text-2xl font-extrabold mt-8'>
        <HiOutlineCalculator className='inline mr-2' />
        Total Landed Cost: What to Expect Beyond the FOB Price
      </h3>

      <p className='my-4'>
        The FOB price is only part of your total landed cost. As an importer, you should budget for the following additional expenses when calculating your true per-kilogram cost:
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-4'>Typical Cost Components Beyond FOB</h4>
        <table className='w-full text-sm'>
          <thead>
            <tr className='border-b border-gray-300'>
              <th className='text-left py-2 px-3'>Cost Item</th>
              <th className='text-left py-2 px-3'>Range (per container)</th>
              <th className='text-left py-2 px-3'>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-100'>
              <td className='py-2 px-3 font-semibold'>Ocean freight</td>
              <td className='py-2 px-3'>$2,500 - $5,500</td>
              <td className='py-2 px-3'>Varies by destination, carrier, and fuel surcharges</td>
            </tr>
            <tr className='border-b border-gray-100'>
              <td className='py-2 px-3 font-semibold'>Marine insurance</td>
              <td className='py-2 px-3'>0.3% - 0.5% of cargo value</td>
              <td className='py-2 px-3'>Covers loss or damage during transit</td>
            </tr>
            <tr className='border-b border-gray-100'>
              <td className='py-2 px-3 font-semibold'>Import duties</td>
              <td className='py-2 px-3'>0% - 10%</td>
              <td className='py-2 px-3'>Green coffee enters many countries duty-free (EU, US, Japan)</td>
            </tr>
            <tr className='border-b border-gray-100'>
              <td className='py-2 px-3 font-semibold'>Customs clearance</td>
              <td className='py-2 px-3'>$200 - $600</td>
              <td className='py-2 px-3'>Broker fees, documentation handling</td>
            </tr>
            <tr className='border-b border-gray-100'>
              <td className='py-2 px-3 font-semibold'>Port charges and drayage</td>
              <td className='py-2 px-3'>$500 - $1,500</td>
              <td className='py-2 px-3'>Unloading, terminal handling, trucking to warehouse</td>
            </tr>
            <tr>
              <td className='py-2 px-3 font-semibold'>Warehousing</td>
              <td className='py-2 px-3'>$0.01 - $0.03/kg/month</td>
              <td className='py-2 px-3'>If you store at a bonded or commercial warehouse</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        As a rule of thumb, you can expect total landed cost to add roughly $0.30 to $0.80 per kilogram on top of the FOB price, depending on your destination and volume. A container of Grade 2 Yirgacheffe purchased at $8.00/kg FOB may land at approximately $8.50 to $8.80/kg at your warehouse.
      </p>

      {/* ====== SECTION 7: CONTRACT TYPES ====== */}

      <h3 className='text-2xl font-extrabold mt-8'>
        <HiOutlineDocumentText className='inline mr-2' />
        Contract Types: Fixed Price vs. Differential
      </h3>

      <p className='my-4'>
        When purchasing Ethiopian green coffee, there are two main approaches to structuring the price in your contract:
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-6'>
        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-3'>Fixed Price Contract</h4>
          <p className='text-sm mb-3'>
            The price per pound or per kilogram is locked in at the time of contract signing, regardless of where the C-market moves afterward.
          </p>
          <p className='text-sm'><span className='font-bold'>Best for:</span> Importers who want cost certainty and are buying for near-term delivery. Roasters who have already priced their retail offerings and need predictable COGS (cost of goods sold).</p>
        </div>
        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-3'>Differential (Price-to-be-Fixed)</h4>
          <p className='text-sm mb-3'>
            The differential is agreed upfront (for example, +40 c/lb over the C-market), but the buyer chooses when to "fix" or "lock" the C-market component before a specified deadline.
          </p>
          <p className='text-sm'><span className='font-bold'>Best for:</span> Experienced importers who want to time the market. Larger buyers who have the financial tools to manage hedging and are comfortable with price volatility.</p>
        </div>
      </div>

      <p className='my-4'>
        For most importers working with Ethiopian exporters, especially those buying one to three containers per season, fixed price contracts are the most common and practical option. Differential contracts require more market knowledge and a broker relationship to hedge effectively. For a complete breakdown of contract structures and payment mechanisms, see our <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='underline font-semibold'>Ethiopian Coffee Contracts & Payment Terms Guide</Link>.
      </p>

      {/* ====== SECTION 8: PAYMENT TERMS ====== */}

      <h3 className='text-2xl font-extrabold mt-8'>
        <HiOutlineCurrencyDollar className='inline mr-2' />
        Payment Terms and Currency
      </h3>

      <p className='my-4'>
        All Ethiopian coffee export contracts are denominated in <span className='font-bold'>US Dollars (USD)</span>. The two standard payment methods used in Ethiopian coffee trade are:
      </p>

      <ul className='list-disc pl-6 my-4 space-y-3'>
        <li>
          <span className='font-bold'>Wire Transfer (Telegraphic Transfer / T/T):</span> The most common payment method. Typical terms include 20% to 30% deposit upon contract signing, with the balance paid against shipping documents (Bill of Lading, Certificate of Origin, ICO Certificate, etc.). Some established relationships operate on open account with payment upon arrival.
        </li>
        <li>
          <span className='font-bold'>Letter of Credit (L/C):</span> Preferred for larger transactions or first-time relationships. The buyer's bank issues an irrevocable L/C in favor of the exporter. Payment is triggered when the exporter presents conforming documents to the bank. L/Cs add banking fees (typically 1% to 3% of the transaction value) but provide security for both parties.
        </li>
      </ul>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Practical Tip:</span> If you are a first-time buyer, expect to work with T/T (deposit + balance against documents) or an L/C. As your relationship with an exporter develops, payment terms typically become more flexible. At Ethio Coffee, we work with both T/T and L/C and are happy to discuss what works best for your situation.</span>
        </p>
      </div>

      {/* ====== SECTION 9: COMMON MISTAKES ====== */}

      <h3 className='text-2xl font-extrabold mt-8'>
        <HiOutlineLightBulb className='inline mr-2' />
        Common Pricing Mistakes Importers Should Avoid
      </h3>

      <div className='space-y-4 my-6'>
        <div className='bg-red-50 p-5 rounded-lg border border-red-200'>
          <h4 className='font-bold mb-2'>1. Comparing FOB quotes without checking the C-market date</h4>
          <p className='text-sm'>
            Two exporters might quote $7.00/kg and $7.80/kg for the same coffee. But if the first quote was generated when the C-market was at 380 c/lb and the second when it was at 420 c/lb, the higher quote may actually represent a lower differential and therefore a better deal. Always ask what C-market level the offer is based on.
          </p>
        </div>
        <div className='bg-red-50 p-5 rounded-lg border border-red-200'>
          <h4 className='font-bold mb-2'>2. Ignoring total landed cost</h4>
          <p className='text-sm'>
            A lower FOB price from an exporter who ships slowly, packages poorly, or provides incomplete documentation can end up more expensive than a slightly higher FOB price from a professional exporter. Factor in demurrage charges, re-inspection costs, and potential quality claims when comparing suppliers.
          </p>
        </div>
        <div className='bg-red-50 p-5 rounded-lg border border-red-200'>
          <h4 className='font-bold mb-2'>3. Not requesting pre-shipment samples</h4>
          <p className='text-sm'>
            Never buy Ethiopian coffee at any price without cupping the actual lot you are purchasing. A green sample and a roasted sample of the PSS (Pre-Shipment Sample) should be evaluated before you confirm the order. This is standard practice and any reputable exporter will provide this without hesitation.
          </p>
        </div>
        <div className='bg-red-50 p-5 rounded-lg border border-red-200'>
          <h4 className='font-bold mb-2'>4. Chasing the lowest price</h4>
          <p className='text-sm'>
            In Ethiopian coffee, unusually low quotes often indicate quality compromises, past-crop inventory, or an exporter who has not secured the coffee yet and is speculating. The best value comes from paying a fair price for a reliable exporter who delivers consistent quality, ships on time, and provides accurate documentation.
          </p>
        </div>
      </div>

      {/* ====== SECTION 10: SEASONAL TIMING ====== */}

      <h3 className='text-2xl font-extrabold mt-8'>
        <HiOutlineChartBar className='inline mr-2' />
        When to Buy: Seasonal Pricing Patterns
      </h3>

      <p className='my-4'>
        Ethiopian coffee follows a distinct seasonal pricing pattern that informed importers can use to optimize their purchasing:
      </p>

      <ul className='list-disc pl-6 my-4 space-y-2'>
        <li><span className='font-bold'>October to December:</span> Harvest begins. Early lots from washed stations start becoming available. Prices tend to be relatively stable as supply enters the market.</li>
        <li><span className='font-bold'>January to March:</span> Peak availability. The widest selection of freshly processed lots is available during this window. This is typically the best time to secure specific origins and grades because competition for lots has not yet peaked.</li>
        <li><span className='font-bold'>April to June:</span> The bulk of export shipping occurs. Popular lots begin to sell out. Prices for in-demand coffees (Grade 1 Yirgacheffe, specialty Guji naturals) may firm up as available inventory contracts.</li>
        <li><span className='font-bold'>July to September:</span> Tail end of the season. Remaining inventory is mostly commercial-grade or less sought-after lots. Some specialty lots may still be available from exporters who allocated well, but selection narrows significantly.</li>
      </ul>

      <p className='my-4'>
        For the best selection and most competitive pricing, we recommend engaging your Ethiopian coffee exporter between November and February. This gives you first access to new-crop lots, time to request and evaluate samples, and a comfortable shipping window before peak season demand.
      </p>

      {/* FAQ SECTION */}
      <section className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions About Ethiopian Coffee Pricing</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What is the current FOB price for Ethiopian green coffee?</h4>
            <p className="text-sm text-gray-600">FOB prices for Ethiopian green coffee typically range from $3.00 to $4.50 per pound for commercial grades, while specialty-grade lots from regions like Yirgacheffe, Sidama, and Guji can command $5.00 to $8.00 or more per pound. Prices fluctuate based on the ICE commodity market (C-price), the specific grade and origin, seasonal availability, and the prevailing differential for Ethiopian coffees. To get an accurate, up-to-date FOB quote, it is best to contact an Ethiopian exporter directly with your volume and quality requirements.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How much does Ethiopian coffee cost per kilogram?</h4>
            <p className="text-sm text-gray-600">When converted to kilograms, Ethiopian green coffee FOB prices generally fall between $6.60 and $9.90 per kg for commercial grades and between $11.00 and $17.60 or higher per kg for specialty lots. Keep in mind that FOB pricing does not include shipping, insurance, import duties, or destination port fees. Your total landed cost will depend on the Incoterm you negotiate, container size, and destination port logistics.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What factors affect the price of Ethiopian green coffee?</h4>
            <p className="text-sm text-gray-600">Several key factors influence Ethiopian coffee pricing. The ICE C-price sets the global benchmark for arabica. On top of that, the Ethiopian differential reflects supply, demand, and quality reputation. Coffee grade (ranging from Grade 1 specialty to Grade 5 commercial), processing method (washed vs. natural), geographic origin, and lot size all play a role. Seasonal timing also matters: prices tend to be most competitive early in the harvest season (November to February) and rise as supply tightens later in the year. Currency exchange rates and export regulations can also impact final pricing.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How can I get a pricing quote from an Ethiopian coffee exporter?</h4>
            <p className="text-sm text-gray-600">To request a quote, reach out to a licensed Ethiopian coffee exporter with details about the grade, origin, processing method, volume, and your preferred Incoterm (FOB, CFR, or CIF). Most exporters will provide indicative pricing based on current market conditions and can send pre-shipment samples for cupping evaluation before you commit. Working with an exporter who offers transparent pricing and clear communication throughout the process will help you secure the best value and avoid unexpected costs.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How do Ethiopian coffee prices compare to other origins?</h4>
            <p className="text-sm text-gray-600">Ethiopian coffees generally carry a premium over many other origins due to their distinctive flavor profiles, strong market demand, and the country's reputation as the birthplace of arabica coffee. Compared to Brazilian or Colombian commercial-grade coffees, Ethiopian lots often trade at a higher differential above the C-price. However, when measured against other high-end single-origin coffees from countries like Kenya, Panama, or Costa Rica, Ethiopian specialty coffees can offer excellent value, especially given their complex fruit-forward and floral cup characteristics that are highly sought after by roasters worldwide.</p>
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Get Current Ethiopian Coffee Pricing</h4>
        <p className='my-2'>
          At <span className='font-bold'>Ethio Coffee Export PLC</span>, we offer competitive FOB pricing, transparent sourcing, and expert guidance on the Ethiopian coffee market.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Our Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Contact Us</Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>How to Order</Link>
        </div>
      </div>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Market & Pricing</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Minimum Order Quantities</Link></li>
              <li>• <Link href='/insights/rising-ethiopian-coffee-prices-explained' className='text-amber-700 hover:underline'>Rising Ethiopian Coffee Prices</Link></li>
              <li>• <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing & Logistics</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee</Link></li>
              <li>• <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline'>Coffee Storage & Freight</Link></li>
              <li>• <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Coffee Origins</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> This pricing guide is based on current market data, ECX auction results, and our direct export experience. FOB prices fluctuate with market conditions.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

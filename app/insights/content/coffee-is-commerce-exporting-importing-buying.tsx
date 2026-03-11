import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineCurrencyDollar,
  HiOutlineGlobeAlt,
  HiOutlineBuildingOffice2,
  HiOutlineChartBar,
  HiOutlineScale,
  HiOutlineShieldCheck,
  HiOutlineTruck,
  HiOutlineArrowsRightLeft,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function CoffeeIsCommerceExportingImportingBuying({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      {/* H1 TITLE */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>{title}</h1>

      {/* SUBTITLE */}
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        How coffee is priced, traded, exported, and imported: the C market, specialty premiums, Incoterms, and the pricing waterfall from cherry to cup
      </h2>

      {/* HERO IMAGE */}
      <figure>
        <figcaption className='font-inconsolata my-2 text-sm text-gray-500'>
          Green coffee ready for commerce: graded, bagged, and prepared for international trade. Understanding coffee commerce gives importers and roasters better control over sourcing quality, cost, and timing.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Green coffee bags prepared for international trade, representing the coffee commerce exporting and importing process'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      {/* SERIES NAVIGATION */}
      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Part of the &quot;Coffee Is&quot; Series:</span>
        <div className='flex flex-wrap gap-2 mt-2'>
          <Link href='/insights/coffee-plant-taxonomy-species-varieties' className='underline text-xs'>1. Plant</Link>
          <Link href='/insights/coffee-is-agriculture-production-farming' className='underline text-xs'>2. Agriculture</Link>
          <Link href='/insights/coffee-is-processing-drying-milling' className='underline text-xs'>3. Processing</Link>
          <span className='bg-dark text-primary px-2 py-1 rounded text-xs'>4. Commerce (You are here)</span>
          <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='underline text-xs'>5. Science</Link>
          <Link href='/insights/coffee-is-art-roasting-brewing' className='underline text-xs'>6. Art</Link>
        </div>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-2 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0' /> Key Takeaway
        </p>
        <p className='text-sm leading-relaxed'>
          Coffee commerce runs on two parallel systems. The C market (ICE Arabica futures in New York) sets commodity baselines for 90 to 95% of global volume, while specialty coffee adds quality-based differentials on top. In the 2024/25 season, C market prices surged past $4.00/lb for the first time, compressing margins across the chain. Importers and roasters who understand how futures pricing, Incoterms, and the pricing waterfall work can negotiate more effectively, manage risk, and build sourcing relationships that survive volatile markets.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#c-market' className='text-amber-700 hover:underline'>1. The C Market: How Commodity Coffee Is Priced</a></li>
          <li><a href='#specialty-pricing' className='text-amber-700 hover:underline'>2. Specialty Coffee Pricing: Quality-Based Differentials</a></li>
          <li><a href='#exporting' className='text-amber-700 hover:underline'>3. Coffee Exporting: From Warehouse to Vessel</a></li>
          <li><a href='#importing' className='text-amber-700 hover:underline'>4. Coffee Importing: Port to Roastery</a></li>
          <li><a href='#pricing-waterfall' className='text-amber-700 hover:underline'>5. The Pricing Waterfall: Cherry to Cup</a></li>
          <li><a href='#buying-process' className='text-amber-700 hover:underline'>6. The Green Coffee Buying Process</a></li>
          <li><a href='#risk-management' className='text-amber-700 hover:underline'>7. Risk Management and Hedging</a></li>
          <li><a href='#transparency' className='text-amber-700 hover:underline'>8. Transparency and Compliance</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>9. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* SCOPE NOTE */}
      <div className='bg-gray-50 p-4 rounded-lg border border-gray-200 my-6 text-sm'>
        <p><span className='font-semibold'>Scope note:</span> This guide covers the commerce layer of the global coffee trade: how coffee is priced on commodity and specialty markets, how exporting and importing work, and how buyers manage purchasing decisions and price risk. For the detailed, step-by-step Ethiopian export process, see the dedicated <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='underline font-bold'>export process buyer&apos;s guide</Link>. For country-specific import regulations, see our <Link href='/insights/how-to-import-ethiopian-coffee-to-usa' className='underline font-bold'>country import guides</Link>.</p>
      </div>

      {/* INTRODUCTION */}
      <p className='my-4'>
        Arabica coffee futures on the Intercontinental Exchange (ICE) broke above $4.00 per pound in early 2025 for the first time in the contract&apos;s history. That record forced every participant in coffee commerce, from exporters in Addis Ababa to roasters in Berlin, to recalculate margins, renegotiate contracts, and reconsider risk. If you buy, sell, or trade green coffee, the mechanics behind that price movement are not academic. They determine what you pay, when you pay it, and whether your supply chain holds together when conditions shift.
      </p>
      <p className='my-4'>
        This fourth installment of the &quot;Coffee Is&quot; series examines coffee commerce: the system that connects a washed Yirgacheffe lot sitting in an Addis Ababa warehouse to a roastery in Toronto, Tokyo, or Dubai. It covers the C market, specialty pricing differentials, export and import logistics, the pricing waterfall from farmgate to roaster, the buying process, risk management tools, and the transparency standards that hold the system together.
      </p>
      <p className='my-4'>
        Ethiopia exported approximately 469,000 metric tons of coffee in 2024/25 and earned a record $2.65 billion in revenue, according to the Ethiopian Coffee and Tea Authority. That volume moved through a defined commercial pipeline. This article maps the commercial logic behind that pipeline, so you can source more effectively within it.
      </p>

      {/* SECTION 1: THE C MARKET */}
      <h2 id='c-market' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineChartBar className='inline mr-2 text-amber-600' /> 1. The C Market: How Commodity Coffee Is Priced
      </h2>

      <p className='my-4'>
        The C market is the global benchmark for Arabica coffee pricing. It operates on the Intercontinental Exchange (ICE) in New York as the Coffee C Futures contract (ticker: KC). Each contract represents 37,500 pounds (approximately 250 bags of 60 kg) of exchange-grade washed Arabica, deliverable in March, May, July, September, and December.
      </p>
      <p className='my-4'>
        Prices on the C market are quoted in US cents per pound. When traders refer to &quot;the market&quot; or &quot;the New York price,&quot; they mean the nearby KC futures contract. This price serves as the baseline from which most Arabica coffee worldwide is bought and sold, whether commodity or specialty grade.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-2'>What Drives C Market Volatility</h3>
      <p className='my-4'>
        Four primary forces move C market prices:
      </p>
      <ul className='list-disc ml-6 space-y-2 text-sm my-4'>
        <li><span className='font-semibold'>Brazil&apos;s crop cycle:</span> Brazil produces roughly 35% of global coffee. A frost warning, drought, or bumper harvest in Minas Gerais can swing prices 20 to 30 cents in a single session.</li>
        <li><span className='font-semibold'>Supply-demand balance:</span> Global coffee consumption grows approximately 2% per year. When production lags (as it did in 2024/25 due to weather disruptions in Brazil and Vietnam), inventories draw down and prices rise.</li>
        <li><span className='font-semibold'>Currency movements:</span> The Brazilian real is the most influential currency in coffee. A weaker real makes Brazilian coffee cheaper in dollar terms, pressuring prices; a stronger real does the opposite.</li>
        <li><span className='font-semibold'>Speculative positioning:</span> Managed money (hedge funds and commodity trading advisors) holds large positions in coffee futures. Their buying or selling amplifies price moves beyond what fundamentals alone would produce.</li>
      </ul>

      <h3 className='text-xl font-bold mt-8 mb-2'>How Differentials Work</h3>
      <p className='my-4'>
        Most physical coffee is not traded at the flat C market price. Instead, it trades at &quot;the C plus or minus a differential.&quot; The differential is a premium or discount that adjusts the benchmark price for a specific origin, grade, quality, and delivery terms.
      </p>
      <p className='my-4'>
        Ethiopian washed coffee typically commands a positive differential. A Yirgacheffe Grade 1 lot might trade at &quot;C + $0.80/lb&quot; or higher depending on cup score and availability. By contrast, lower-grade or commercial coffees from some origins trade at significant discounts. The differential reflects what the market values in that specific coffee relative to the exchange-grade baseline.
      </p>
      <p className='my-4'>
        For a detailed breakdown of Ethiopian FOB pricing and how differentials are applied in practice, see the <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='underline font-bold'>Ethiopian coffee pricing guide</Link>. To understand how specialty buyers operate in practice, see <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='underline font-bold'>How to Source Green Coffee from Ethiopia</Link>.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-2'>C Market vs. Specialty Market: Comparison</h3>
      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm text-left border border-gray-200'>
          <thead className='bg-gray-100 font-bold text-dark'>
            <tr>
              <th className='border border-gray-200 px-4 py-2'>Dimension</th>
              <th className='border border-gray-200 px-4 py-2'>C Market (Commodity)</th>
              <th className='border border-gray-200 px-4 py-2'>Specialty Market</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 text-gray-700'>
            <tr>
              <td className='border border-gray-200 px-4 py-2 font-semibold'>Pricing basis</td>
              <td className='border border-gray-200 px-4 py-2'>ICE futures + differential</td>
              <td className='border border-gray-200 px-4 py-2'>Quality differential, fixed price, or outright negotiation</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2 font-semibold'>Quality threshold</td>
              <td className='border border-gray-200 px-4 py-2'>Exchange-grade minimum (no cupping score required)</td>
              <td className='border border-gray-200 px-4 py-2'>SCA 80+ cupping score</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2 font-semibold'>Traceability</td>
              <td className='border border-gray-200 px-4 py-2'>Country or region level</td>
              <td className='border border-gray-200 px-4 py-2'>Washing station, cooperative, or farm level</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2 font-semibold'>Typical lot size</td>
              <td className='border border-gray-200 px-4 py-2'>Full containers (250+ bags)</td>
              <td className='border border-gray-200 px-4 py-2'>Micro-lots (10 bags) to full containers</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2 font-semibold'>Buyer-seller relationship</td>
              <td className='border border-gray-200 px-4 py-2'>Anonymous exchange or broker-mediated</td>
              <td className='border border-gray-200 px-4 py-2'>Direct or relationship-based sourcing</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2 font-semibold'>Volume share</td>
              <td className='border border-gray-200 px-4 py-2'>~90 to 95% of global trade</td>
              <td className='border border-gray-200 px-4 py-2'>~5 to 10% of global trade</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2 font-semibold'>Price volatility</td>
              <td className='border border-gray-200 px-4 py-2'>High (daily futures fluctuation)</td>
              <td className='border border-gray-200 px-4 py-2'>More stable (negotiated differentials)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 2: SPECIALTY PRICING */}
      <h2 id='specialty-pricing' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineCurrencyDollar className='inline mr-2 text-amber-600' /> 2. Specialty Coffee Pricing: Quality-Based Differentials
      </h2>

      <p className='my-4'>
        Specialty coffee is defined commercially by a cupping score of 80 or above on the SCA (Specialty Coffee Association) scale. That score, assigned through systematic sensory evaluation of aroma, flavor, acidity, body, balance, and overall impression, separates specialty from commodity in both quality terms and pricing mechanics.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-2'>How Specialty Premiums Are Calculated</h3>
      <p className='my-4'>
        Specialty coffee can be priced in three ways:
      </p>
      <ul className='list-disc ml-6 space-y-2 text-sm my-4'>
        <li><span className='font-semibold'>Differential pricing:</span> The coffee is priced at &quot;C market + differential,&quot; where the differential reflects quality, origin, certifications, and relationship terms. This method ties the final price to futures market movements.</li>
        <li><span className='font-semibold'>Fixed pricing (outright):</span> Buyer and seller agree on a flat FOB price per pound or kilogram, independent of C market movements. This provides price certainty for both parties but exposes whoever took the position to market risk.</li>
        <li><span className='font-semibold'>Floor-price agreements:</span> A hybrid model where the price is indexed to the C market but cannot fall below a guaranteed minimum. This protects producers from severe downturns while allowing upside when markets are strong.</li>
      </ul>

      <p className='my-4'>
        The 2023 Specialty Coffee Transaction Guide reported that the median price for an 83-point coffee fell from $2.74 to $2.20 per pound when the C market declined, showing that even specialty is not fully insulated from commodity price movements. By contrast, the median price for 87-point coffee rose to $4.91 per green pound, demonstrating that higher cup scores provide better price stability.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-2'>Ethiopian Specialty as a Pricing Example</h3>
      <p className='my-4'>
        Ethiopian specialty coffee commands some of the highest premiums in global coffee commerce. A washed <Link href='/ethiopian-coffee-yirgacheffe' className='underline'>Yirgacheffe</Link> Grade 1 with a cupping score of 86+ typically trades at a significant positive differential above the C market. <Link href='/ethiopian-coffee-guji' className='underline'>Guji</Link> naturals with berry and tropical fruit profiles attract similar premiums, particularly from specialty roasters in Japan, South Korea, and Northern Europe.
      </p>
      <p className='my-4'>
        These premiums exist because Ethiopian coffee offers genetic diversity (thousands of <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='underline'>heirloom varieties</Link>), distinct terroir across regions, and established quality infrastructure including the CLU (Coffee Liquoring Unit) inspection system. For importers evaluating Ethiopian lots, consult the <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='underline font-bold'>cupping and evaluation guide</Link> and the <Link href='/insights/new-sca-coffee-value-assessment' className='underline font-bold'>SCA value assessment overview</Link>.
      </p>

      {/* SECTION 3: EXPORTING */}
      <h2 id='exporting' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineTruck className='inline mr-2 text-amber-600' /> 3. Coffee Exporting: From Warehouse to Vessel
      </h2>

      <p className='my-4'>
        Coffee exporting is the origin-side process that transforms milled green coffee into a documented, inspected, customs-cleared shipment loaded onto a vessel. In Ethiopia, this process runs through a regulated pipeline: sourcing (via ECX auction or Direct Specialty License), dry milling, CLU quality inspection, documentation, customs clearance, inland transport to Djibouti, and port handling.
      </p>
      <p className='my-4'>
        The full step-by-step process with day-by-day timelines, documentation checklists, and cost breakdowns is covered in our <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='underline font-bold'>Ethiopian coffee export process guide</Link>. For how the ECX and Direct Specialty License channels work, see the <Link href='/insights/ecx-and-ethiopian-coffee-export' className='underline font-bold'>ECX and Ethiopian coffee export guide</Link>.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-2'>Ethiopia&apos;s Two Export Channels</h3>
      <p className='my-4'>
        Ethiopian coffee reaches international markets through two channels. The <span className='font-semibold'>ECX (Ethiopia Commodity Exchange) channel</span> handles the majority of volume, where exporters purchase graded lots through auction with traceability at the regional level. The <span className='font-semibold'>Direct Specialty License (DSL) channel</span> allows exporters to source directly from cooperatives and washing stations, preserving full traceability to the production site. Both channels converge at the same regulated export pipeline from CLU inspection onward.
      </p>
      <p className='my-4'>
        At Ethio Coffee Import and Export PLC, we operate through both channels, drawing on three decades of heritage sourcing relationships with cooperatives and washing stations across <Link href='/insights/guide-ethiopian-coffee-origins' className='underline'>every major Ethiopian coffee region</Link>.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-2'>Incoterms in Coffee Trade</h3>
      <p className='my-4'>
        International Commercial Terms (Incoterms) define who pays for what and who bears risk at each stage of a coffee shipment. Three terms dominate green coffee commerce:
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm text-left border border-gray-200'>
          <thead className='bg-gray-100 font-bold text-dark'>
            <tr>
              <th className='border border-gray-200 px-4 py-2'>Incoterm</th>
              <th className='border border-gray-200 px-4 py-2'>Full Name</th>
              <th className='border border-gray-200 px-4 py-2'>Exporter Covers</th>
              <th className='border border-gray-200 px-4 py-2'>Buyer Covers</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 text-gray-700'>
            <tr>
              <td className='border border-gray-200 px-4 py-2 font-semibold'>FOB</td>
              <td className='border border-gray-200 px-4 py-2'>Free on Board</td>
              <td className='border border-gray-200 px-4 py-2'>Sourcing, milling, inspection, inland transport, port loading</td>
              <td className='border border-gray-200 px-4 py-2'>Ocean freight, insurance, destination customs, delivery</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2 font-semibold'>CIF</td>
              <td className='border border-gray-200 px-4 py-2'>Cost, Insurance, Freight</td>
              <td className='border border-gray-200 px-4 py-2'>Everything in FOB plus ocean freight and marine insurance</td>
              <td className='border border-gray-200 px-4 py-2'>Destination customs, delivery to warehouse</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2 font-semibold'>EXW</td>
              <td className='border border-gray-200 px-4 py-2'>Ex Works</td>
              <td className='border border-gray-200 px-4 py-2'>Coffee made available at origin warehouse</td>
              <td className='border border-gray-200 px-4 py-2'>All transport, customs, insurance from origin warehouse onward</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4 text-sm text-gray-600'>
        CFR (Cost and Freight) and DAP (Delivered at Place) are also used occasionally. Most Ethiopian coffee exports trade on FOB Djibouti terms. For contract structures and payment terms, see the <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='underline font-bold'>contracts and payment terms guide</Link>.
      </p>

      {/* SECTION 4: IMPORTING */}
      <h2 id='importing' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineGlobeAlt className='inline mr-2 text-amber-600' /> 4. Coffee Importing: Port to Roastery
      </h2>

      <p className='my-4'>
        Coffee importing begins when the vessel carrying your container arrives at the destination port. The importer (or the importer&apos;s customs broker) manages clearance, warehousing, and final delivery to the roaster. Large importers also provide financing, quality assurance, and spot inventory that allows roasters to purchase smaller quantities without committing to full containers.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-2'>What Importers Do</h3>
      <ul className='list-disc ml-6 space-y-2 text-sm my-4'>
        <li><span className='font-semibold'>Customs clearance:</span> Filing the entry, paying import duties and taxes, presenting the full document set (bill of lading, certificate of origin, phytosanitary certificate, commercial invoice, packing list).</li>
        <li><span className='font-semibold'>Quality verification:</span> Drawing arrival samples, cupping to confirm the coffee matches the pre-ship sample and contract specification. Rejected lots are re-routed or renegotiated.</li>
        <li><span className='font-semibold'>Warehousing:</span> Storing green coffee in climate-controlled or GrainPro-lined conditions. Well-managed warehousing preserves quality for 6 to 12 months. See the <Link href='/insights/green-coffee-shelf-life-storage-guide' className='underline font-bold'>shelf life and storage guide</Link>.</li>
        <li><span className='font-semibold'>Financing:</span> Many importers finance the purchase on behalf of the roaster, extending payment terms (net 30, net 60) that the exporter typically cannot offer.</li>
        <li><span className='font-semibold'>Distribution:</span> Breaking bulk (dividing a full container into smaller lots) and shipping to individual roasters.</li>
      </ul>

      <h3 className='text-xl font-bold mt-8 mb-2'>Importing by Market</h3>
      <p className='my-4'>
        Import regulations vary by country. Tariff rates, food safety requirements, labeling rules, and preferential trade agreements all affect landed cost and compliance burden. We maintain dedicated guides for the markets most active in Ethiopian coffee:
      </p>
      <ul className='list-disc ml-6 space-y-1 text-sm my-4'>
        <li><Link href='/insights/how-to-import-ethiopian-coffee-to-usa' className='text-amber-700 hover:underline'>Import to the USA</Link></li>
        <li><Link href='/insights/importing-ethiopian-coffee-to-canada-guide' className='text-amber-700 hover:underline'>Import to Canada</Link></li>
        <li><Link href='/insights/importing-ethiopian-coffee-to-germany' className='text-amber-700 hover:underline'>Import to Germany</Link></li>
        <li><Link href='/insights/importing-ethiopian-coffee-to-uk' className='text-amber-700 hover:underline'>Import to the UK</Link></li>
        <li><Link href='/insights/importing-ethiopian-coffee-to-japan' className='text-amber-700 hover:underline'>Import to Japan</Link></li>
        <li><Link href='/insights/importing-ethiopian-coffee-to-south-korea' className='text-amber-700 hover:underline'>Import to South Korea</Link></li>
        <li><Link href='/insights/importing-ethiopian-coffee-to-australia' className='text-amber-700 hover:underline'>Import to Australia</Link></li>
        <li><Link href='/insights/importing-ethiopian-coffee-to-saudi-arabia' className='text-amber-700 hover:underline'>Import to Saudi Arabia</Link></li>
        <li><Link href='/insights/importing-ethiopian-coffee-to-uae' className='text-amber-700 hover:underline'>Import to the UAE</Link></li>
        <li><Link href='/insights/importing-ethiopian-coffee-to-turkey' className='text-amber-700 hover:underline'>Import to Turkey</Link></li>
      </ul>
      <p className='my-4'>
        For a complete breakdown of how ocean freight, duties, and other costs accumulate into the total price you pay as a roaster, see the <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='underline font-bold'>landed cost guide</Link>.
      </p>

      {/* SECTION 5: PRICING WATERFALL */}
      <h2 id='pricing-waterfall' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineArrowsRightLeft className='inline mr-2 text-amber-600' /> 5. The Pricing Waterfall: Cherry to Cup
      </h2>

      <p className='my-4'>
        The pricing waterfall shows how money flows through the coffee supply chain, from the price paid for cherry at the farm level to the final cost a roaster pays for green beans. Each stage adds value and cost. Understanding this waterfall helps buyers evaluate whether prices are reasonable and where margin pressure exists.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm text-left border border-gray-200'>
          <thead className='bg-gray-100 font-bold text-dark'>
            <tr>
              <th className='border border-gray-200 px-4 py-2'>Stage</th>
              <th className='border border-gray-200 px-4 py-2'>Who Receives Payment</th>
              <th className='border border-gray-200 px-4 py-2'>What It Covers</th>
              <th className='border border-gray-200 px-4 py-2'>Approx. Share of Roaster Cost</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 text-gray-700'>
            <tr>
              <td className='border border-gray-200 px-4 py-2 font-semibold'>Farmgate / Cherry price</td>
              <td className='border border-gray-200 px-4 py-2'>Farmer or cooperative</td>
              <td className='border border-gray-200 px-4 py-2'>Production costs, labor, inputs, farmer income</td>
              <td className='border border-gray-200 px-4 py-2'>25 to 40%</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2 font-semibold'>Processing and milling</td>
              <td className='border border-gray-200 px-4 py-2'>Washing station or dry mill</td>
              <td className='border border-gray-200 px-4 py-2'>Wet/dry processing, sorting, grading, bagging</td>
              <td className='border border-gray-200 px-4 py-2'>10 to 15%</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2 font-semibold'>Exporter costs and margin</td>
              <td className='border border-gray-200 px-4 py-2'>Exporter</td>
              <td className='border border-gray-200 px-4 py-2'>Sourcing, quality control, CLU, documentation, inland transport, bank charges</td>
              <td className='border border-gray-200 px-4 py-2'>10 to 20%</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2 font-semibold'>Freight and insurance</td>
              <td className='border border-gray-200 px-4 py-2'>Shipping line, insurer</td>
              <td className='border border-gray-200 px-4 py-2'>Ocean freight, marine cargo insurance, port handling</td>
              <td className='border border-gray-200 px-4 py-2'>8 to 15%</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2 font-semibold'>Importer costs and margin</td>
              <td className='border border-gray-200 px-4 py-2'>Importer</td>
              <td className='border border-gray-200 px-4 py-2'>Customs, duties, warehousing, financing, quality checks, distribution</td>
              <td className='border border-gray-200 px-4 py-2'>10 to 20%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4 text-sm text-gray-600'>
        Ranges are approximate and vary by origin, grade, lot size, and market conditions. When the C market is high (as in 2025/26), farmgate shares tend to increase as producers capture more of the value.
      </p>
      <p className='my-4'>
        Request a pricing breakdown from your exporter whenever possible. When you can see how value distributes across the chain, you make better sourcing decisions and build more accountable partnerships. For a worked example with real numbers, see the <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='underline font-bold'>landed cost guide</Link> and the <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='underline font-bold'>FOB pricing guide</Link>.
      </p>

      {/* SECTION 6: BUYING PROCESS */}
      <h2 id='buying-process' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineBuildingOffice2 className='inline mr-2 text-amber-600' /> 6. The Green Coffee Buying Process
      </h2>

      <p className='my-4'>
        Green coffee buying follows a structured sequence. Understanding each stage helps importers and roasters plan timelines, manage cash flow, and reduce the risk of quality mismatches.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-2'>The Buying Timeline</h3>
      <ol className='list-decimal ml-6 space-y-3 text-sm my-4'>
        <li><span className='font-semibold'>Receive offers:</span> The exporter sends an offer sheet listing available lots with origin, grade, processing method, cupping notes, price (FOB or CIF), and available volume. Review our <Link href='/offerings' className='text-amber-700 hover:underline'>current offerings</Link> for an example.</li>
        <li><span className='font-semibold'>Request and cup samples:</span> The buyer requests 100 to 300g samples, cups them against their roast profile, and evaluates quality. See the <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>cupping guide</Link>.</li>
        <li><span className='font-semibold'>Negotiate and contract:</span> Buyer and exporter agree on price, volume, quality specification, Incoterm, payment method (Letter of Credit, Cash Against Documents, or wire transfer), and delivery timeline. See the <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>contracts guide</Link>.</li>
        <li><span className='font-semibold'>Milling and preparation:</span> The exporter mills, sorts, and bags the coffee to the contracted specification.</li>
        <li><span className='font-semibold'>Pre-ship sample approval:</span> Before shipment, the exporter sends a pre-ship sample for buyer approval. This is the buyer&apos;s final quality checkpoint before the coffee leaves origin.</li>
        <li><span className='font-semibold'>Shipment and documentation:</span> The exporter handles CLU inspection, customs, loading, and shipping. Documents are sent to the buyer&apos;s bank for payment release.</li>
        <li><span className='font-semibold'>Arrival and payment:</span> The coffee arrives at the destination port. The buyer (or their importer) clears customs, draws an arrival sample, and releases final payment upon approval.</li>
      </ol>
      <p className='my-4'>
        Total lead time from first inquiry to delivery typically runs 3 to 6 months. Forward contracts placed during or before harvest can secure specific lots and lock in pricing. For minimum order requirements, see the <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='underline font-bold'>MOQ guide</Link>. For information on ordering from Ethio Coffee, see <Link href='/ordering-info' className='underline font-bold'>How to Order</Link>.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-2'>Spot Buying vs. Forward Contracts</h3>
      <p className='my-4'>
        Spot buying means purchasing coffee that is already milled and available for immediate shipment. It offers flexibility and quick turnaround but limits lot selection to whatever is in stock. Forward contracting means committing to a specific lot or specification before harvest or milling is complete. It offers first access to the best lots and price certainty, but requires longer lead times and greater commitment.
      </p>
      <p className='my-4'>
        Roasters with predictable volume needs benefit from a blended approach: forward contracts for core offerings, spot purchases for seasonal or experimental lots. The <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='underline font-bold'>harvest calendar</Link> helps time purchasing decisions around Ethiopian crop cycles.
      </p>

      {/* SECTION 7: RISK MANAGEMENT */}
      <h2 id='risk-management' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineScale className='inline mr-2 text-amber-600' /> 7. Risk Management and Hedging
      </h2>

      <p className='my-4'>
        Coffee commerce involves price risk on both sides of the transaction. When the C market swings $0.50/lb in a quarter (as it did multiple times in 2024 and 2025), unhedged positions can erase an entire season&apos;s margin. Producers face income volatility; buyers face cost volatility. Basic risk management tools help both sides operate more sustainably.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-2'>Tools for Managing Price Risk</h3>
      <ul className='list-disc ml-6 space-y-2 text-sm my-4'>
        <li><span className='font-semibold'>Futures hedging:</span> Large importers and exporters use ICE coffee futures to lock in prices. An exporter who has purchased physical coffee but not yet sold it can sell futures contracts to offset the risk of a price decline before the sale is completed.</li>
        <li><span className='font-semibold'>Options contracts:</span> Options give the holder the right, but not the obligation, to buy or sell at a specified price. They provide downside protection while preserving upside potential, at the cost of a premium.</li>
        <li><span className='font-semibold'>Fixed-price forward contracts:</span> The simplest approach. Buyer and seller agree on a price today for delivery months in the future. Both parties eliminate market risk, but neither benefits from favorable price movements after signing.</li>
        <li><span className='font-semibold'>Price-to-be-fixed (PTBF) contracts:</span> The contract is signed with the differential locked in, but the buyer chooses when to &quot;fix&quot; the C market component within an agreed window. This gives buyers flexibility to time their price fixing based on market conditions.</li>
      </ul>
      <p className='my-4'>
        For a deeper examination of hedging strategies, financing options, and how to protect margins in volatile markets, see the <Link href='/insights/green-coffee-financing-hedging-importers-guide' className='underline font-bold'>green coffee financing and hedging guide</Link>.
      </p>

      {/* SECTION 8: TRANSPARENCY & COMPLIANCE */}
      <h2 id='transparency' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineShieldCheck className='inline mr-2 text-amber-600' /> 8. Transparency and Compliance
      </h2>

      <p className='my-4'>
        Transparency in coffee commerce means sharing pricing breakdowns, origin data, and supply chain information so every participant can verify that value is distributed fairly. It is also increasingly a regulatory requirement. Buyers who build transparency into their sourcing from the start avoid compliance scrambles later.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-2'>Pricing Transparency</h3>
      <p className='my-4'>
        Request a pricing breakdown from your exporter that shows: farmgate price paid to the producer or cooperative, processing costs, exporter margin, and FOB price. This information enables you to communicate sourcing ethics credibly to your customers and ensures that quality premiums reach the people who produced the coffee. The <Link href='/insights/ethiopian-coffee-traceability-guide' className='underline font-bold'>traceability guide</Link> covers how lot-level data flows through the Ethiopian supply chain.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-2'>EUDR and Regulatory Compliance</h3>
      <p className='my-4'>
        The EU Deforestation Regulation (EUDR), which entered application in 2025, requires importers placing coffee on the EU market to demonstrate that the coffee was not produced on land deforested after December 31, 2020. Compliance requires geolocation data (polygon coordinates for farm plots), due diligence statements, and supply chain documentation linking each lot to its production site.
      </p>
      <p className='my-4'>
        For Ethiopian coffee, compliance depends on the export channel. DSL (Direct Specialty License) lots typically have full traceability to the washing station and surrounding farm areas. ECX-channel lots, which are aggregated at the regional level, require additional documentation effort. The <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='underline font-bold'>EUDR compliance guide</Link> covers the full framework for Ethiopian coffee exports.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-2'>Certifications</h3>
      <p className='my-4'>
        Organic, Fairtrade, Rainforest Alliance, and other certifications serve as third-party verification of specific production and trade practices. Ethiopian coffee benefits from a strong certification infrastructure, with many cooperatives holding organic and Fairtrade designations. See the <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='underline font-bold'>certifications guide</Link> for a comparison of what each certification covers and what it costs.
      </p>

      {/* CONCLUSION */}
      <h2 className='text-3xl font-extrabold mt-10 mb-4'>Conclusion: How Understanding Coffee Commerce Improves Your Sourcing</h2>

      <p className='my-4'>
        Coffee commerce is the system of pricing, logistics, and accountability that connects a roaster&apos;s menu to the cooperatives and washing stations that produced the beans. From C market futures to specialty differentials, from FOB Djibouti to EXW at a destination warehouse, each stage adds cost, adds value, and creates an opportunity for better decisions.
      </p>
      <p className='my-4'>
        Importers and roasters who understand coffee commerce negotiate better prices, manage risk during volatile markets, plan timelines accurately, and build supply chains that deliver consistent quality year after year. Transparency at every stage, from farmgate pricing to EUDR compliance, is the foundation that makes it all work.
      </p>
      <p className='my-4'>
        At Ethio Coffee Import and Export PLC, we apply this understanding through our trusted sourcing network across Ethiopia&apos;s coffee regions, transparent FOB pricing, and three decades of heritage sourcing relationships with cooperatives and washing stations. Whether you are buying your first container of Ethiopian coffee or your fiftieth, we provide the origin expertise and commercial infrastructure to support your business.
      </p>

      {/* SERIES CONTINUATION */}
      <h3 className='text-xl font-bold mt-8 mb-3'>Continue the &quot;Coffee Is&quot; Series</h3>
      <p className='my-4'>
        Now that you understand how coffee moves through global commerce, explore the quality systems and final transformations that complete the journey:
      </p>
      <ul className='list-disc ml-6 space-y-2 text-sm my-4'>
        <li><Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='underline font-bold'>Coffee Is Science</Link> — chemical analysis, sensory evaluation, and the science behind specialty grading</li>
        <li><Link href='/insights/coffee-is-art-roasting-brewing' className='underline font-bold'>Coffee Is Art</Link> — how roasters transform green coffee into the final product</li>
        <li><Link href='/insights/complete-guide-to-understanding-coffee' className='underline font-bold'>Understanding Coffee: From Seed to Cup</Link> — the complete series overview</li>
      </ul>

      {/* FAQ */}
      <h2 id='faq' className='text-3xl font-extrabold mt-10 mb-4'>Frequently Asked Questions</h2>

      <h3 className='text-xl font-bold mt-6 mb-2'>What is the C market in coffee?</h3>
      <p className='my-4'>
        The C market is the ICE Arabica coffee futures exchange in New York (ticker: KC). It sets benchmark prices for roughly 90 to 95% of globally traded Arabica. Prices reflect supply, demand, weather, and speculative activity. Most physical coffee is sold at the C price plus or minus a differential that reflects the specific lot&apos;s quality and origin.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-2'>How does specialty coffee pricing differ from commodity pricing?</h3>
      <p className='my-4'>
        Specialty coffee (SCA 80+) trades at a positive differential above the C market, reflecting cup quality, traceability, and relationship commitments. While commodity prices fluctuate daily, specialty differentials are more stable because they are negotiated directly between buyers and exporters. Higher-scoring lots (86+) show the greatest price stability even during market downturns.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-2'>What does FOB mean in coffee trade?</h3>
      <p className='my-4'>
        FOB (Free on Board) is the price point where the exporter delivers green coffee loaded onto a vessel at the origin port. It covers sourcing, milling, quality inspection, inland transport, and port loading. Everything after that point (ocean freight, insurance, destination duties) is the buyer&apos;s cost. Most Ethiopian coffee exports are priced FOB Djibouti.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-2'>What are Incoterms and why do they matter?</h3>
      <p className='my-4'>
        Incoterms (International Commercial Terms) define which party pays for transport, insurance, and customs at each stage of an international shipment. In coffee commerce, the three most common are FOB, CIF, and EXW. Choosing the right Incoterm affects your landed cost, risk exposure, and logistics responsibilities. The Incoterm must be specified in the purchase contract.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-2'>How long does the green coffee buying timeline take?</h3>
      <p className='my-4'>
        A typical cycle from first inquiry to delivery runs 3 to 6 months. Key stages include sample evaluation, contract negotiation, milling and CLU inspection, pre-ship sample approval, ocean freight (18 to 35 days depending on destination), and customs clearance. Forward contracts placed before harvest can extend the total timeline but secure the best lots and pricing.
      </p>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Premium Ethiopian Coffee Direct from Origin</h4>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Import and Export PLC</span> offers specialty Ethiopian green coffee with transparent FOB pricing, pre-ship samples, and flexible contract terms. Request samples or a current offer sheet to get started.
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
            <h4 className='font-semibold mb-2 text-sm'>Coffee Journey Series</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/coffee-plant-taxonomy-species-varieties' className='text-amber-700 hover:underline'>Coffee Plant Taxonomy, Species & Varieties</Link></li>
              <li>• <Link href='/insights/coffee-is-agriculture-production-farming' className='text-amber-700 hover:underline'>Coffee Is Agriculture: Production & Farming</Link></li>
              <li>• <Link href='/insights/coffee-is-processing-drying-milling' className='text-amber-700 hover:underline'>Coffee Is Processing: Drying & Milling</Link></li>
              <li>• <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='text-amber-700 hover:underline'>Coffee Is Science: Analysis & Evaluation</Link></li>
              <li>• <Link href='/insights/coffee-is-art-roasting-brewing' className='text-amber-700 hover:underline'>Coffee Is Art: Roasting & Brewing</Link></li>
              <li>• <Link href='/insights/complete-guide-to-understanding-coffee' className='text-amber-700 hover:underline'>Understanding Coffee: From Seed to Cup</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Pricing & Market</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Pricing FOB Guide</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost Guide</Link></li>
              <li>• <Link href='/insights/rising-ethiopian-coffee-prices-explained' className='text-amber-700 hover:underline'>Rising Ethiopian Coffee Prices Explained</Link></li>
              <li>• <Link href='/insights/green-coffee-financing-hedging-importers-guide' className='text-amber-700 hover:underline'>Green Coffee Financing & Hedging Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Export & Sourcing</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process Guide</Link></li>
              <li>• <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Contracts & Payment Terms Guide</Link></li>
              <li>• <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality & Compliance</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality Control & Grading</Link></li>
              <li>• <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline'>EUDR and Ethiopian Coffee Compliance</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Ethiopian Coffee Certifications Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC. This article draws from ICO market data, the ICE Coffee C Futures contract specifications, the Specialty Coffee Transaction Guide, and our direct experience as an Ethiopian origin-connected exporter with three decades of sourcing heritage. For current pricing or sourcing information, <Link href='/contact-us' className='underline'>contact us directly</Link>.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

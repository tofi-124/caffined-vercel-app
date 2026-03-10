import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineTruck,
  HiOutlineDocumentCheck,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineBuildingOffice2,
  HiOutlineGlobeAlt,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopianCoffeeExportProcessBuyersGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      {/* H1 TITLE */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>{title}</h1>

      {/* SUBTITLE */}
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        What happens between signing a contract and receiving your bill of lading? A step-by-step look at the Ethiopian coffee export process from the buyer's side.
      </h2>

      {/* HERO IMAGE */}
      <figure>
        <figcaption className='font-inconsolata my-2 text-sm text-gray-500'>
          Green coffee ready for export from Ethiopia. Understanding each step of the export process helps importers plan timelines, manage cash flow, and avoid delays. Photo: Ethio Coffee Import and Export PLC.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Green coffee beans prepared for export at an Ethiopian coffee warehouse, representing the Ethiopian coffee export process for international buyers'
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
        <span className='ml-2'>Export Process / Sourcing Guide / Trade Logistics / Importer Resources</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-2 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0' /> Key Takeaway
        </p>
        <p className='text-sm leading-relaxed'>
          The Ethiopian coffee export process typically spans 30 to 60 days from confirmed contract to vessel departure at Djibouti. It involves seven core stages: contract and payment setup, sourcing and milling, quality inspection at the Coffee Liquoring Unit (CLU), documentation, inland transport, port handling, and ocean shipping. A reliable Ethiopian coffee exporter manages all of this on the origin side. Importers who understand each step can set realistic delivery timelines, anticipate document requirements, and avoid the most common causes of delay.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#why-this-matters' className='text-amber-700 hover:underline'>1. Why the Export Process Matters for Importers</a></li>
          <li><a href='#two-export-channels' className='text-amber-700 hover:underline'>2. Two Export Channels: ECX vs. Direct Specialty (DSL)</a></li>
          <li><a href='#seven-steps' className='text-amber-700 hover:underline'>3. The Seven Steps: Contract to Container</a></li>
          <li><a href='#timeline' className='text-amber-700 hover:underline'>4. Realistic Timeline: Day-by-Day Breakdown</a></li>
          <li><a href='#documentation-checklist' className='text-amber-700 hover:underline'>5. Complete Export Documentation Checklist</a></li>
          <li><a href='#costs-per-step' className='text-amber-700 hover:underline'>6. Approximate Costs at Each Stage</a></li>
          <li><a href='#common-delays' className='text-amber-700 hover:underline'>7. Common Delays and How to Avoid Them</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>8. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRO */}
      <p className='my-4'>
        The Ethiopian coffee export process is one of the most structured in the global coffee trade. Every lot passes through government-regulated quality checkpoints, a defined documentation chain, and a logistics corridor that runs from Addis Ababa to the Port of Djibouti. For importers, this structure is both a guarantee of quality and a potential source of delays if timelines are not well understood.
      </p>
      <p className='my-4'>
        Most B2B buyers interact with their Ethiopian coffee exporter at two points: when signing the contract and when receiving shipping documents. Everything between those moments is a black box. This guide opens that box. Each section walks through what your exporter does, what documents are generated, how long each step takes, and where bottlenecks occur. The goal is to give you the visibility to plan your roasting calendar, cash flow, and customer commitments with confidence.
      </p>
      <p className='my-4'>
        Ethiopia exported approximately 469,000 metric tons of coffee in 2024/2025 and earned a record $2.65 billion in revenue, according to the <a href='https://www.ecx.com.et' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>Ethiopia Commodity Exchange</a> and the Ethiopian Coffee and Tea Authority. That volume moves through a defined national export pipeline. This article maps that pipeline, step by step.
      </p>

      <div className='bg-gray-50 p-4 rounded-lg border border-gray-200 my-6 text-sm'>
        <p><span className='font-semibold'>Scope note:</span> This guide covers the exporter-side process that begins after a purchase contract is signed: milling, CLU inspection, documentation, inland transport, and port handling. For how coffee is sourced and traded before reaching the exporter (including ECX auction mechanics, grading, and traceability reforms), see the dedicated <Link href='/insights/ecx-and-ethiopian-coffee-export' className='underline font-bold'>ECX and Ethiopian Coffee Export guide</Link>.</p>
      </div>

      {/* SECTION 1 */}
      <h2 id='why-this-matters' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineGlobeAlt className='inline mr-2 text-amber-600' /> 1. Why the Ethiopian Coffee Export Process Matters for Importers
      </h2>

      <p className='my-4'>
        Three practical reasons make understanding the export process essential for any buyer sourcing Ethiopian green coffee:
      </p>
      <ul className='list-disc ml-6 space-y-2 text-sm my-4'>
        <li><span className='font-semibold'>Timeline planning:</span> The gap between order confirmation and vessel departure can range from 30 to 60 days depending on the season and quality grade. Knowing where each week goes lets you set accurate arrival dates for your warehouse.</li>
        <li><span className='font-semibold'>Cash flow management:</span> Payment terms (typically a Letter of Credit or Cash Against Documents) are triggered at specific milestones. Understanding those milestones helps you align financing. See the <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='underline font-bold'>contracts and payment terms guide</Link> for detail on each payment method.</li>
        <li><span className='font-semibold'>Document readiness:</span> Ethiopian coffee exports require roughly a dozen documents. Your customs broker at destination needs them in order and on time. Knowing what to expect eliminates clearing delays.</li>
      </ul>

      {/* SECTION 2 */}
      <h2 id='two-export-channels' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineBuildingOffice2 className='inline mr-2 text-amber-600' /> 2. Two Export Channels: ECX vs. Direct Specialty (DSL)
      </h2>

      <p className='my-4'>
        Ethiopian coffee reaches the export market through two regulated channels. The <span className='font-semibold'>ECX (Ethiopia Commodity Exchange) channel</span> handles the majority of volume: exporters purchase graded lots through auction, with traceability at the regional level. The <span className='font-semibold'>Direct Specialty License (DSL) channel</span> allows exporters to source directly from cooperatives and washing stations, preserving full traceability to the production site. This is the path for single-origin specialty and micro-lots.
      </p>
      <p className='my-4'>
        The key point for this guide: <span className='font-semibold'>both channels converge at the same export pipeline from Step 3 onward</span> (CLU quality inspection, documentation, customs, inland transport, port handling). Everything covered below applies regardless of sourcing channel. For the full breakdown of how each channel works, including ECX auction mechanics, grading standards, traceability reforms, and DSL licensing, see the <Link href='/insights/ecx-and-ethiopian-coffee-export' className='underline font-bold'>ECX and Ethiopian Coffee Export guide</Link>. For a comparison of private exporters and cooperative unions, see <Link href='/insights/private-vs-cooperative-ethiopian-coffee-exporters' className='underline font-bold'>Private vs. Cooperative Exporters</Link>.
      </p>

      {/* SECTION 3 */}
      <h2 id='seven-steps' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineCheckCircle className='inline mr-2 text-amber-600' /> 3. The Seven Steps: Contract to Container
      </h2>

      <p className='my-4'>
        Below is the complete Ethiopian coffee export process, broken into seven stages. Each stage describes what happens, who is responsible, and what the importer should expect.
      </p>

      {/* Step 1 */}
      <h3 className='text-xl font-bold mt-8 mb-2'>Step 1: Contract Signing and Payment Setup (Days 1 to 5)</h3>
      <p className='my-4'>
        The process begins when importer and exporter agree on terms: origin, grade, processing method, volume, price (FOB Djibouti), and payment method. The exporter prepares a sales contract specifying these details plus Incoterms, quality tolerances, and the arbitration clause.
      </p>
      <p className='my-4'>
        The exporter submits a copy of the signed contract to their commercial bank (typically the Commercial Bank of Ethiopia) along with a freight cost estimate. If the payment method is a Letter of Credit, the importer's bank issues the LC and the exporter's bank confirms receipt. For CAD (Cash Against Documents), the exporter typically requires a deposit or proof of bank relationship. This step typically takes 3 to 5 business days, though LC confirmation can extend to 7 to 10 days for first-time buyers.
      </p>

      {/* Step 2 */}
      <h3 className='text-xl font-bold mt-8 mb-2'>Step 2: Milling and Preparation (Days 3 to 20)</h3>
      <p className='my-4'>
        While payment setup is underway, the exporter sources coffee (via ECX or DSL, as outlined above) and begins dry milling at their facility in Addis Ababa. Dry milling includes hulling (removing parchment), screen grading (size sorting), density table separation, color sorting (electronic or manual), and hand picking for defect removal. This stage determines the final grade (G1, G2, etc.) and directly affects cup quality. For the full milling process, see the <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='underline font-bold'>dry milling export guide</Link>.
      </p>
      <p className='my-4'>
        At the end of milling, the coffee is bagged (typically 60 kg jute bags with GrainPro liners for specialty lots) and stored at the exporter's Addis Ababa warehouse pending quality inspection. Ethio Coffee Import and Export PLC manages this stage from its own Addis Ababa warehouse, drawing on three decades of sourcing relationships with cooperatives and washing stations across every major Ethiopian coffee region.
      </p>

      {/* Step 3 */}
      <h3 className='text-xl font-bold mt-8 mb-2'>Step 3: Quality Inspection at the CLU (Days 15 to 25)</h3>
      <p className='my-4'>
        Every lot of Ethiopian coffee destined for export must pass inspection at the Coffee Liquoring Unit (CLU), operated by the Ethiopian Coffee and Tea Authority (ECTA). The CLU is the government's quality gate. No coffee leaves Ethiopia without a CLU grade certificate.
      </p>
      <p className='my-4'>
        The exporter submits a representative sample of each lot to the CLU along with an inspection request. CLU inspectors evaluate:
      </p>
      <ul className='list-disc ml-6 space-y-2 text-sm my-4'>
        <li><span className='font-semibold'>Physical analysis:</span> Moisture content (target: 10 to 12%), screen size distribution, defect count (full black, partial black, broken, insect damage, pods, husks).</li>
        <li><span className='font-semibold'>Sensory evaluation (cupping):</span> Trained cuppers assess fragrance/aroma, flavor, acidity, body, uniformity, balance, clean cup, sweetness, aftertaste, and overall impression.</li>
        <li><span className='font-semibold'>Grade assignment:</span> Based on the combined physical and cupping score, the CLU assigns a grade (G1 through G9, though only G1 to G5 are typically export-eligible).</li>
      </ul>
      <p className='my-4'>
        If the lot passes and the grade matches the contract specification, the CLU issues a quality certificate. If it fails or grades below the contracted level, the exporter must re-sort, re-mill, or resubmit. This is one of the most common causes of delay. Processing time at the CLU is typically 3 to 7 business days, but during peak export season (January to April), backlogs can extend this to 10 to 14 days.
      </p>
      <p className='my-4'>
        For deeper context on Ethiopian grading, see the <Link href='/insights/green-coffee-quality-control-defects-grading' className='underline font-bold'>quality control and grading guide</Link>.
      </p>

      {/* Step 4 */}
      <h3 className='text-xl font-bold mt-8 mb-2'>Step 4: Export Documentation (Days 20 to 30)</h3>
      <p className='my-4'>
        With the CLU certificate in hand, the exporter assembles the full document set required by Ethiopian customs, the importer's customs authority, and the commercial bank facilitating payment. The key documents include:
      </p>
      <ul className='list-disc ml-6 space-y-2 text-sm my-4'>
        <li><span className='font-semibold'>CLU quality certificate</span> confirming grade, origin, and processing method</li>
        <li><span className='font-semibold'>Phytosanitary certificate</span> from the Ethiopian Ministry of Agriculture (confirms the coffee is pest-free)</li>
        <li><span className='font-semibold'>ICO certificate of origin</span> (International Coffee Organization member certificate)</li>
        <li><span className='font-semibold'>Certificate of origin</span> from the Ethiopian Chamber of Commerce (for preferential tariff treatment under GSP/AGOA/EBA)</li>
        <li><span className='font-semibold'>Commercial invoice</span> with FOB value, weight, grade, and contract reference</li>
        <li><span className='font-semibold'>Packing list</span> detailing number of bags, net and gross weight per bag, and total shipment weight</li>
        <li><span className='font-semibold'>Customs declaration</span> (Goods Declaration form submitted to the Ethiopian Customs Commission)</li>
        <li><span className='font-semibold'>Bank permit</span> (export permit issued by the National Bank of Ethiopia through the commercial bank)</li>
        <li><span className='font-semibold'>EUDR due diligence statement</span> (for EU-destined shipments; includes geolocation data for farm plots)</li>
      </ul>
      <p className='my-4'>
        For EU-bound coffee, EUDR compliance adds a traceability layer from 2025 onward. The exporter must provide polygon coordinates for the farm plots where the coffee was grown, plus evidence that no deforestation occurred after December 31, 2020. For the full EUDR framework, see the <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='underline font-bold'>EUDR compliance guide</Link>.
      </p>

      {/* Step 5 */}
      <h3 className='text-xl font-bold mt-8 mb-2'>Step 5: Customs Clearance and Container Loading (Days 25 to 35)</h3>
      <p className='my-4'>
        The exporter's clearing agent submits the Goods Declaration along with all supporting documents to the Ethiopian Customs Commission. After verification, customs releases the shipment for loading. The exporter arranges a shipping container (typically a 20-foot FCL holding approximately 275 bags of 60 kg each, totaling 16,500 kg of green coffee).
      </p>
      <p className='my-4'>
        Loading takes place at the exporter's warehouse or at a designated Inland Container Depot (ICD) in Addis Ababa. The container is sealed with a one-time customs seal, and the container number and seal number are recorded on the shipping documents. A loading supervision certificate may be issued by an independent surveyor if the contract requires it.
      </p>

      {/* Step 6 */}
      <h3 className='text-xl font-bold mt-8 mb-2'>Step 6: Inland Transport to Djibouti (Days 30 to 38)</h3>
      <p className='my-4'>
        From Addis Ababa, the sealed container travels approximately 900 km to the Port of Djibouti. The journey takes 2 to 4 days by road transport or via the Addis Ababa-Djibouti railway. The railway, completed in 2018, offers a more consistent transit time (approximately 24 to 36 hours) and lower risk of cargo damage compared to road transport, though availability varies by season.
      </p>
      <p className='my-4'>
        The exporter's logistics partner handles the transport booking, in-transit tracking, and Djibouti port receiving. Ethiopia is a landlocked country, so all ocean-bound coffee transits through Djibouti. This geographic factor makes the Addis-to-Djibouti leg a critical link: road closures, fuel shortages, or railway scheduling conflicts can add 3 to 5 days to the timeline. Experienced exporters maintain relationships with multiple transport providers to mitigate this risk.
      </p>

      {/* Step 7 */}
      <h3 className='text-xl font-bold mt-8 mb-2'>Step 7: Port Handling and Ocean Shipping (Days 35 to 55+)</h3>
      <p className='my-4'>
        At Djibouti, the container enters the port terminal and is stacked for vessel loading. The exporter's shipping agent books vessel space with the ocean carrier (Maersk, MSC, CMA CGM, and others serve Djibouti regularly). Port handling typically takes 3 to 7 days, including customs verification on the Djibouti side, terminal receiving, and assignment to a berth.
      </p>
      <p className='my-4'>
        Once loaded, the shipping line issues the Bill of Lading (B/L), which is the critical document transferring ownership of the cargo. The exporter sends the B/L (along with the full document set) to the bank for negotiation under the LC, or directly to the importer under CAD terms. Ocean transit times from Djibouti vary by destination:
      </p>
      <ul className='list-disc ml-6 space-y-2 text-sm my-4'>
        <li>Europe (Hamburg, Rotterdam, Felixstowe): 18 to 25 days</li>
        <li>North America (New York, Montreal): 28 to 35 days</li>
        <li>Middle East (Jeddah, Jebel Ali): 4 to 7 days. For market intelligence on the fastest-growing GCC destination, see the <Link href='/insights/saudi-arabia-specialty-coffee-market-guide' className='underline font-bold'>Saudi Arabia coffee market guide</Link></li>
        <li>East Asia (Yokohama, Busan): 22 to 30 days</li>
        <li>Australia (Melbourne): 25 to 32 days</li>
      </ul>
      <p className='my-4'>
        For a detailed breakdown of how ocean freight and other costs build up to the total landed price, see the <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='underline font-bold'>landed cost guide</Link>.
      </p>

      {/* SECTION 4 - TIMELINE */}
      <h2 id='timeline' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineClock className='inline mr-2 text-amber-600' /> 4. Realistic Timeline: Day-by-Day Breakdown
      </h2>

      <p className='my-4'>
        The table below shows a typical timeline for an Ethiopian specialty coffee export (DSL channel, G1 or G2 washed coffee, 20-foot FCL). ECX-channel shipments follow a similar pattern but sourcing/milling may be faster since coffee is already partially processed.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm text-left border border-gray-200'>
          <thead className='bg-gray-100 font-bold text-dark'>
            <tr>
              <th className='border border-gray-200 px-4 py-2'>Stage</th>
              <th className='border border-gray-200 px-4 py-2'>Days (Typical)</th>
              <th className='border border-gray-200 px-4 py-2'>Days (Peak Season)</th>
              <th className='border border-gray-200 px-4 py-2'>Key Risk</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 text-gray-700'>
            <tr>
              <td className='border border-gray-200 px-4 py-2'>Contract + payment setup</td>
              <td className='border border-gray-200 px-4 py-2'>3 to 5</td>
              <td className='border border-gray-200 px-4 py-2'>5 to 10</td>
              <td className='border border-gray-200 px-4 py-2'>LC delays from issuing bank</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2'>Milling + preparation</td>
              <td className='border border-gray-200 px-4 py-2'>7 to 15</td>
              <td className='border border-gray-200 px-4 py-2'>10 to 20</td>
              <td className='border border-gray-200 px-4 py-2'>Grade 1 scarcity; re-sorting needed</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2'>CLU quality inspection</td>
              <td className='border border-gray-200 px-4 py-2'>3 to 7</td>
              <td className='border border-gray-200 px-4 py-2'>7 to 14</td>
              <td className='border border-gray-200 px-4 py-2'>CLU backlog; lot rejection</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2'>Export documentation</td>
              <td className='border border-gray-200 px-4 py-2'>3 to 5</td>
              <td className='border border-gray-200 px-4 py-2'>5 to 7</td>
              <td className='border border-gray-200 px-4 py-2'>Phytosanitary certificate delay</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2'>Customs clearance + loading</td>
              <td className='border border-gray-200 px-4 py-2'>2 to 4</td>
              <td className='border border-gray-200 px-4 py-2'>3 to 5</td>
              <td className='border border-gray-200 px-4 py-2'>Container availability</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2'>Addis Ababa to Djibouti</td>
              <td className='border border-gray-200 px-4 py-2'>2 to 4</td>
              <td className='border border-gray-200 px-4 py-2'>3 to 5</td>
              <td className='border border-gray-200 px-4 py-2'>Road/rail disruption</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2'>Port handling + vessel loading</td>
              <td className='border border-gray-200 px-4 py-2'>3 to 7</td>
              <td className='border border-gray-200 px-4 py-2'>5 to 10</td>
              <td className='border border-gray-200 px-4 py-2'>Vessel schedule changes</td>
            </tr>
            <tr className='bg-gray-50 font-bold'>
              <td className='border border-gray-200 px-4 py-2'>Total (contract to vessel)</td>
              <td className='border border-gray-200 px-4 py-2'>23 to 47</td>
              <td className='border border-gray-200 px-4 py-2'>38 to 71</td>
              <td className='border border-gray-200 px-4 py-2'></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-amber-50 p-4 rounded-lg border border-amber-100 my-4 text-sm'>
        <p className='font-semibold mb-1'>Planning tip:</p>
        <p>Add ocean transit time (4 to 35 days depending on destination) plus port clearance at your end (7 to 14 days) to get a total supply chain lead time. For European buyers, plan roughly 70 to 100 days from order to warehouse. For Middle East buyers, plan 45 to 70 days.</p>
      </div>

      {/* SECTION 5 - DOCUMENTATION */}
      <h2 id='documentation-checklist' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineDocumentCheck className='inline mr-2 text-amber-600' /> 5. Complete Export Documentation Checklist
      </h2>

      <p className='my-4'>
        Every Ethiopian coffee export shipment requires the following documents. Your exporter prepares all of these. Your customs broker at destination needs them to clear the cargo.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm text-left border border-gray-200'>
          <thead className='bg-gray-100 font-bold text-dark'>
            <tr>
              <th className='border border-gray-200 px-4 py-2'>Document</th>
              <th className='border border-gray-200 px-4 py-2'>Issued By</th>
              <th className='border border-gray-200 px-4 py-2'>Purpose</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 text-gray-700'>
            <tr>
              <td className='border border-gray-200 px-4 py-2'>CLU quality certificate</td>
              <td className='border border-gray-200 px-4 py-2'>ECTA (Coffee Liquoring Unit)</td>
              <td className='border border-gray-200 px-4 py-2'>Confirms grade, origin, moisture, defect count</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2'>Phytosanitary certificate</td>
              <td className='border border-gray-200 px-4 py-2'>Ministry of Agriculture</td>
              <td className='border border-gray-200 px-4 py-2'>Pest-free declaration; required by all destination countries</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2'>ICO certificate of origin</td>
              <td className='border border-gray-200 px-4 py-2'>ECTA on behalf of ICO</td>
              <td className='border border-gray-200 px-4 py-2'>Confirms ICO member-country origin</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2'>Certificate of origin (CO)</td>
              <td className='border border-gray-200 px-4 py-2'>Ethiopian Chamber of Commerce</td>
              <td className='border border-gray-200 px-4 py-2'>Preferential tariff (GSP, AGOA, EBA, DFQF)</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2'>Commercial invoice</td>
              <td className='border border-gray-200 px-4 py-2'>Exporter</td>
              <td className='border border-gray-200 px-4 py-2'>Contract price, weight, terms; used for customs valuation</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2'>Packing list</td>
              <td className='border border-gray-200 px-4 py-2'>Exporter</td>
              <td className='border border-gray-200 px-4 py-2'>Bag count, net/gross weights, marks</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2'>Bill of Lading (B/L)</td>
              <td className='border border-gray-200 px-4 py-2'>Shipping line</td>
              <td className='border border-gray-200 px-4 py-2'>Title document; needed to claim cargo at destination</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2'>Customs declaration</td>
              <td className='border border-gray-200 px-4 py-2'>Ethiopian Customs Commission</td>
              <td className='border border-gray-200 px-4 py-2'>Export clearance</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2'>Bank permit / NBE export permit</td>
              <td className='border border-gray-200 px-4 py-2'>National Bank of Ethiopia via commercial bank</td>
              <td className='border border-gray-200 px-4 py-2'>Foreign exchange control compliance</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2'>Insurance certificate</td>
              <td className='border border-gray-200 px-4 py-2'>Insurer (exporter or importer side)</td>
              <td className='border border-gray-200 px-4 py-2'>Marine cargo coverage; required under CIF terms</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2'>EUDR due diligence statement</td>
              <td className='border border-gray-200 px-4 py-2'>Exporter (data) + EU importer (submission)</td>
              <td className='border border-gray-200 px-4 py-2'>Geolocation, deforestation-free proof; EU-bound only</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2'>Weight/fumigation certificate</td>
              <td className='border border-gray-200 px-4 py-2'>Independent surveyor / fumigation company</td>
              <td className='border border-gray-200 px-4 py-2'>Verified weight; pest treatment if destination requires</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Pro tip: request a document tracker from your exporter at contract signing. A shared spreadsheet listing each document, its current status, and expected completion date keeps both sides aligned and prevents last-minute scrambles.
      </p>

      {/* SECTION 6 - COSTS */}
      <h2 id='costs-per-step' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineCurrencyDollar className='inline mr-2 text-amber-600' /> 6. Approximate Costs at Each Stage
      </h2>

      <p className='my-4'>
        The following table shows indicative costs per 20-foot container (approximately 16,500 kg / 275 bags) for each stage of the export process. These costs are built into the FOB Djibouti price quoted by your exporter. They are shown here to give importers visibility into the cost structure and explain why Ethiopian specialty coffee commands the prices it does.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm text-left border border-gray-200'>
          <thead className='bg-gray-100 font-bold text-dark'>
            <tr>
              <th className='border border-gray-200 px-4 py-2'>Stage</th>
              <th className='border border-gray-200 px-4 py-2'>Cost Range (USD/container)</th>
              <th className='border border-gray-200 px-4 py-2'>Notes</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 text-gray-700'>
            <tr>
              <td className='border border-gray-200 px-4 py-2'>Dry milling (hulling, sorting)</td>
              <td className='border border-gray-200 px-4 py-2'>$400 to $900</td>
              <td className='border border-gray-200 px-4 py-2'>Higher for hand-sorted G1; lower for machine-only G3/G4</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2'>CLU inspection fees</td>
              <td className='border border-gray-200 px-4 py-2'>$50 to $120</td>
              <td className='border border-gray-200 px-4 py-2'>Per lot; multiple lots per container increases total</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2'>Packaging (jute + GrainPro)</td>
              <td className='border border-gray-200 px-4 py-2'>$300 to $550</td>
              <td className='border border-gray-200 px-4 py-2'>GrainPro liners add ~$0.80 to $1.20 per bag</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2'>Documentation and certification</td>
              <td className='border border-gray-200 px-4 py-2'>$100 to $250</td>
              <td className='border border-gray-200 px-4 py-2'>Phyto, ICO, CO, customs declaration fees</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2'>Warehousing (Addis Ababa)</td>
              <td className='border border-gray-200 px-4 py-2'>$100 to $300</td>
              <td className='border border-gray-200 px-4 py-2'>Depends on storage duration; ~$0.01/kg/week</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2'>Inland transport (Addis to Djibouti)</td>
              <td className='border border-gray-200 px-4 py-2'>$1,500 to $2,200</td>
              <td className='border border-gray-200 px-4 py-2'>Rail typically cheaper than road; fuel price dependent</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2'>Port handling (Djibouti)</td>
              <td className='border border-gray-200 px-4 py-2'>$300 to $600</td>
              <td className='border border-gray-200 px-4 py-2'>Terminal handling charge + port dues</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2'>Clearing agent fees</td>
              <td className='border border-gray-200 px-4 py-2'>$150 to $350</td>
              <td className='border border-gray-200 px-4 py-2'>Ethiopia side customs clearance</td>
            </tr>
            <tr className='font-bold bg-amber-50'>
              <td className='border border-gray-200 px-4 py-2'>Total export-side costs</td>
              <td className='border border-gray-200 px-4 py-2'>$2,900 to $5,270</td>
              <td className='border border-gray-200 px-4 py-2'>$0.18 to $0.32 per kg of green coffee</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        These figures are approximate and change with fuel prices, exchange rates, and seasonal demand. They do not include the cost of the green coffee itself (FOB raw material cost), which is the largest component. For a complete cost breakdown including ocean freight, insurance, and destination-side costs, see the <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='underline font-bold'>landed cost guide</Link>. For packaging options, see the <Link href='/insights/green-coffee-packaging-bag-types-guide' className='underline font-bold'>packaging and bag types guide</Link>.
      </p>

      {/* SECTION 7 - COMMON DELAYS */}
      <h2 id='common-delays' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineTruck className='inline mr-2 text-amber-600' /> 7. Common Delays and How to Avoid Them
      </h2>

      <p className='my-4'>
        Experienced importers build buffer time into their schedules. The five most frequent causes of delay in Ethiopian coffee exports and their mitigation strategies:
      </p>

      <div className='space-y-4 my-6'>
        <div className='bg-gray-50 p-4 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-1'>1. CLU backlog during peak season (January to April)</h4>
          <p className='text-sm'>During the main export window, the CLU processes thousands of lots. Wait times can double. <span className='font-semibold'>Mitigation:</span> Place orders early in the season (November/December) so your exporter can queue samples before the rush. Pre-shipment approval samples sent to you can be submitted to CLU simultaneously.</p>
        </div>
        <div className='bg-gray-50 p-4 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-1'>2. Grade rejection or downgrade at CLU</h4>
          <p className='text-sm'>A lot submitted as G1 may grade at G2 if defect counts are borderline. <span className='font-semibold'>Mitigation:</span> Work with exporters who maintain their own cupping labs and conduct pre-CLU quality checks. This is standard practice at Ethio Coffee Import and Export PLC.</p>
        </div>
        <div className='bg-gray-50 p-4 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-1'>3. LC discrepancies</h4>
          <p className='text-sm'>Even small mismatches between the LC terms and the shipping documents (wrong weight, different Incoterm, misspelled name) cause banks to reject the document presentation. <span className='font-semibold'>Mitigation:</span> Review the LC draft before issuance against the signed contract. Ensure your exporter's documentation team checks every field.</p>
        </div>
        <div className='bg-gray-50 p-4 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-1'>4. Container and vessel availability at Djibouti</h4>
          <p className='text-sm'>Djibouti serves multiple East African exporters. Container shortages or vessel schedule changes can add 5 to 10 days. <span className='font-semibold'>Mitigation:</span> Book vessel space early. Your exporter's shipping agent should confirm a tentative booking before the container leaves Addis Ababa.</p>
        </div>
        <div className='bg-gray-50 p-4 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-1'>5. Addis-Djibouti transport disruption</h4>
          <p className='text-sm'>Road conditions, security incidents, or railway maintenance can slow the 900 km corridor. <span className='font-semibold'>Mitigation:</span> Exporters with both road and rail options can switch modes if one is disrupted. Ask your exporter which transport modes they use and whether they have backup options.</p>
        </div>
      </div>

      {/* SOURCES */}
      <div className='my-8'>
        <h3 className='text-xl font-extrabold mb-3'>Sources and Further Reading</h3>
        <ul className='list-disc ml-5 space-y-2 text-sm'>
          <li>
            <a href='https://www.ecx.com.et' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>
              Ethiopia Commodity Exchange (ECX): Coffee Trading Rules and Grading Standards
            </a>
          </li>
          <li>
            <a href='https://www.ico.org' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>
              International Coffee Organization (ICO): Export Standards and Certificate of Origin Requirements
            </a>
          </li>
          <li>
            <a href='https://apps.fas.usda.gov/newgainapi/api/Report/DownloadReportByFileName?fileName=Coffee%20Annual_Addis%20Ababa_Ethiopia_ET2025-0014.pdf' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>
              USDA Foreign Agricultural Service: Ethiopia Coffee Annual Report 2025
            </a>
          </li>
          <li>
            <a href='https://environment.ec.europa.eu/topics/forests/deforestation/regulation_en' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>
              European Commission: EU Deforestation Regulation (EUDR) Official Page
            </a>
          </li>
        </ul>
      </div>

      {/* FAQ */}
      <section id='faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h2 className='text-2xl font-bold mb-6 text-gray-900'>Frequently Asked Questions About the Ethiopian Coffee Export Process</h2>
        <div className='space-y-6'>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>What documents are needed to export coffee from Ethiopia?</h3>
            <p className='text-sm text-gray-600'>
              Ethiopian coffee exports require a CLU quality certificate, phytosanitary certificate, ICO certificate of origin, Chamber of Commerce certificate of origin, commercial invoice, packing list, Bill of Lading, customs declaration, and bank permit. EU-bound shipments also require a EUDR due diligence statement with geolocation data.
            </p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>How long does it take to export coffee from Ethiopia?</h3>
            <p className='text-sm text-gray-600'>
              From signed contract to vessel departure at Djibouti, the typical timeline is 30 to 55 days. Peak season (January to April) can extend this to 40 to 70 days. Add ocean transit time (4 to 35 days depending on destination) for total supply chain lead time.
            </p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>What is the CLU inspection for Ethiopian coffee?</h3>
            <p className='text-sm text-gray-600'>
              The Coffee Liquoring Unit (CLU), operated by the Ethiopian Coffee and Tea Authority (ECTA), inspects every lot of coffee before export. Inspectors evaluate physical attributes (moisture, screen size, defect count) and sensory quality (cupping), then assign an official grade (G1 through G5 for exportable coffee). No coffee can leave Ethiopia without a CLU certificate.
            </p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>What happens if a lot fails the CLU inspection?</h3>
            <p className='text-sm text-gray-600'>
              If a lot grades below the contracted specification, the exporter must re-sort, re-mill, or resubmit a new sample. This can add 5 to 14 days to the timeline. Good exporters mitigate this by running internal quality checks at their own cupping lab before submitting to the CLU. Grade rejections are one of the most common causes of shipment delay.
            </p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>How does coffee get from Addis Ababa to the port of Djibouti?</h3>
            <p className='text-sm text-gray-600'>
              Sealed containers travel approximately 900 km from Addis Ababa to Djibouti by road transport (2 to 4 days) or the Addis Ababa-Djibouti railway (24 to 36 hours). Ethiopia is landlocked, so all ocean-bound coffee exports transit through Djibouti port, making this corridor a critical link in the supply chain.
            </p>
          </div>
        </div>
      </section>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3'>
          <HiOutlineShieldCheck className='inline mr-2 text-amber-700' />
          Source Ethiopian Coffee from a Trusted Exporter
        </h3>
        <p className='my-2 text-sm'>
          Ethio Coffee Import and Export PLC handles every step of the Ethiopian coffee export process from our Addis Ababa warehouse: sourcing from trusted cooperatives and washing stations, dry milling, CLU inspection management, full documentation, and logistics to Djibouti. Our 30-year sourcing heritage across Yirgacheffe, Sidamo, Guji, Limu, Harar, and Jimma means you get traceable specialty coffee with a clear timeline from contract to container.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>
            View Current Offerings
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
        <div className='grid md:grid-cols-2 gap-6'>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Trade &amp; Contracts</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts &amp; Payment Terms Guide</Link></li>
              <li>• <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export Guide</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing for Importers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Quality &amp; Processing</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Dry Milling: Export Guide</Link></li>
              <li>• <Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline'>Green Coffee Packaging: Bag Types Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Sourcing &amp; Compliance</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='text-amber-700 hover:underline'>How to Choose an Ethiopian Coffee Exporter</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability: Buyer's Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Costs &amp; Logistics</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost Guide</Link></li>
              <li>• <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Ethiopian Coffee MOQ Guide</Link></li>
              <li>• <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline'>Specialty Coffee Storage in Sea Freight</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC, an Ethiopian-Canadian specialty coffee exporter with 30+ years of sourcing relationships across Ethiopia's coffee regions. This article is for educational purposes. Export timelines, documentation requirements, and costs change with government regulations and market conditions; contact us for current information before making purchasing decisions.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> {' · '}
          <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> {' · '}
          <Link href='/about' className='underline'>About Ethio Coffee</Link> {' · '}
          <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

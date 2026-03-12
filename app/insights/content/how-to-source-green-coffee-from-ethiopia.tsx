import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineGlobeAlt,
  HiOutlineScale,
  HiOutlineTruck,
  HiOutlineShieldCheck,
  HiOutlineMapPin,
  HiOutlineBanknotes,
  HiOutlineCalendarDays,
  HiOutlineLightBulb,
  HiOutlineCheckCircle,
  HiOutlineClipboardDocumentList,
  HiOutlineBuildingOffice2,
  HiOutlineDocumentText,
  HiOutlineArrowPath,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function HowToSourceGreenCoffeeFromEthiopia({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        A complete sourcing playbook for importers and roasters buying Ethiopian green coffee
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Sourcing green coffee from Ethiopia requires understanding export channels, grades, documentation, and building the right supplier relationships.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='How to source green coffee from Ethiopia - importer and roaster guide'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Sourcing Guide / Import Guide / Green Coffee Trade</span>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-2 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-2xl text-amber-600' />
          Key Takeaway
        </p>
        <p>
          Sourcing green coffee from Ethiopia means understanding export channels (ECX auction vs. direct specialty), grading standards (G1 through G5), required documentation, seasonal timing, and pricing structures. This guide covers the full process from defining your quality requirements through managing shipping and logistics, so importers and roasters can buy Ethiopian green coffee with confidence.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#why-ethiopia' className='text-amber-700 hover:underline'>1. Why Ethiopia Remains the Top Origin for Specialty Green Coffee</a></li>
          <li><a href='#how-market-works' className='text-amber-700 hover:underline'>2. How the Ethiopian Coffee Market Works</a></li>
          <li><a href='#export-grades' className='text-amber-700 hover:underline'>3. Understanding Ethiopian Coffee Export Grades</a></li>
          <li><a href='#step-by-step' className='text-amber-700 hover:underline'>4. Step-by-Step: How to Source Ethiopian Green Coffee</a></li>
          <li><a href='#direct-vs-importer' className='text-amber-700 hover:underline'>5. Direct Trade vs. Buying Through Importers</a></li>
          <li><a href='#documents' className='text-amber-700 hover:underline'>6. Key Documents and Certifications</a></li>
          <li><a href='#pricing' className='text-amber-700 hover:underline'>7. Pricing, Costs, and Payment Terms</a></li>
          <li><a href='#origins' className='text-amber-700 hover:underline'>8. Best Ethiopian Coffee Origins for Specialty Buyers</a></li>
          <li><a href='#seasonal-timing' className='text-amber-700 hover:underline'>9. Seasonal Timing: When to Buy Ethiopian Coffee</a></li>
          <li><a href='#ethio-coffee' className='text-amber-700 hover:underline'>10. How Ethio Coffee Simplifies Sourcing</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>11. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRODUCTION */}
      <p className='my-4'>
        Ethiopia exported over 300,000 metric tons of green coffee in the 2024/25 season, making it Africa&apos;s largest coffee exporter and the world&apos;s fifth largest overall. For roasters and importers who want to source green coffee from Ethiopia, that volume translates into access to some of the most distinctive Arabica lots on the market: floral Yirgacheffes, fruit-forward Gujis, and bold Harars that no other origin can replicate.
      </p>

      <p className='my-4'>
        Yet the process can feel opaque. Ethiopia&apos;s export system, grading standards, documentation requirements, and seasonal harvest cycles differ from most other coffee origins. This guide covers every step from understanding how the market works through managing payment terms and logistics, so you can source Ethiopian green coffee efficiently and with full confidence.
      </p>

      {/* SECTION 1: WHY ETHIOPIA */}
      <h2 id='why-ethiopia' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineGlobeAlt className='text-amber-600' />
        Why Ethiopia Remains the Top Origin for Specialty Green Coffee
      </h2>

      <p className='my-4'>
        Ethiopia is the birthplace of Arabica coffee. That genetic heritage is not just a marketing story; it has direct commercial implications for buyers.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='flex items-start gap-3'>
          <HiOutlineCheckCircle className='text-green-600 mt-1 flex-shrink-0' />
          <div>
            <p className='font-semibold'>Unmatched Genetic Diversity</p>
            <p className='text-gray-700 text-sm'>Ethiopia is home to thousands of heirloom Arabica varieties found nowhere else, producing flavor profiles impossible to replicate at other origins.</p>
          </div>
        </div>
        <div className='flex items-start gap-3'>
          <HiOutlineCheckCircle className='text-green-600 mt-1 flex-shrink-0' />
          <div>
            <p className='font-semibold'>Distinctive Regional Profiles</p>
            <p className='text-gray-700 text-sm'>From the jasmine-floral notes of Yirgacheffe to the berry-forward Sidamo and the winey Harar, buyers can build highly differentiated menus.</p>
          </div>
        </div>
        <div className='flex items-start gap-3'>
          <HiOutlineCheckCircle className='text-green-600 mt-1 flex-shrink-0' />
          <div>
            <p className='font-semibold'>High-Altitude Growing Conditions</p>
            <p className='text-gray-700 text-sm'>Most Ethiopian coffee grows between 1,500 and 2,300 meters, where slow cherry ripening develops complex sugars and bright acidity. See our guide on <Link href='/insights/coffee-is-agriculture-production-farming' className='text-amber-700 hover:underline font-semibold'>how coffee farming shapes green coffee quality</Link>.</p>
          </div>
        </div>
        <div className='flex items-start gap-3'>
          <HiOutlineCheckCircle className='text-green-600 mt-1 flex-shrink-0' />
          <div>
            <p className='font-semibold'>Strong Consumer Demand</p>
            <p className='text-gray-700 text-sm'>Specialty consumers actively seek Ethiopian single-origins. Stocking them signals quality and drives retail interest.</p>
          </div>
        </div>
      </div>

      <p className='my-4'>
        For the full picture from cherry to cup, see our <Link href='/insights/complete-guide-to-understanding-coffee' className='text-amber-700 hover:underline font-semibold'>coffee from seed to cup buyer&apos;s guide</Link>.
      </p>

      {/* SECTION 2: HOW THE MARKET WORKS */}
      <h2 id='how-market-works' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBuildingOffice2 className='text-amber-600' />
        How the Ethiopian Coffee Market Works
      </h2>

      <p className='my-4'>
        Understanding Ethiopia&apos;s export structure is essential before you contact a single supplier. Coffee moves through two primary channels, and the one your exporter uses determines the traceability, pricing, and lot specificity you can expect.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-4'>The Role of the ECX and Direct Export Channels</h3>

      <p className='my-4'>
        The <a href='https://www.ecx.com.et/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>Ethiopia Commodity Exchange (ECX)</a> is the centralized trading platform where the majority of Ethiopian coffee is sold. Exporters purchase graded lots through auction, with traceability at the regional level (e.g., &quot;Yirgacheffe Grade 2 Washed&quot;). This channel works well for commercial-grade volumes where region-level traceability is sufficient.
      </p>

      <p className='my-4'>
        The second channel is the Direct Specialty License (DSL) pathway, introduced through vertical integration reforms finalized in 2021. DSL-licensed exporters and cooperative unions can purchase coffee directly from washing stations and farming communities, bypassing the ECX floor. This preserves lot-level traceability down to the specific washing station or cooperative, which specialty buyers require for single-origin programs.
      </p>

      <p className='my-4'>
        For the complete breakdown of how each channel works, including auction mechanics and grading standards, see our <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline font-semibold'>ECX and Ethiopian coffee export guide</Link>.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-4'>Private Exporters vs. Cooperative Unions</h3>

      <p className='my-4'>
        Private exporters typically offer faster communication, flexible contract terms, and the ability to source across multiple regions simultaneously. Cooperative unions offer direct links to specific farmer groups and often carry organic or Fair Trade certifications by default. Many experienced importers work with both types depending on their quality tier and volume needs. Our <Link href='/insights/private-vs-cooperative-ethiopian-coffee-exporters' className='text-amber-700 hover:underline font-semibold'>comparison of private vs. cooperative exporters</Link> covers the trade-offs in detail.
      </p>

      {/* SECTION 3: EXPORT GRADES */}
      <h2 id='export-grades' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineScale className='text-amber-600' />
        Understanding Ethiopian Coffee Export Grades
      </h2>

      <p className='my-4'>
        Ethiopian coffee is graded on a scale from Grade 1 to Grade 9, based on defect count per 300g sample and cup quality evaluation. Only Grades 1 through 5 are typically exported. The grade you select determines quality expectations, pricing, and end-use suitability.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm text-left border border-gray-200'>
          <thead className='bg-gray-100 font-bold text-dark'>
            <tr>
              <th className='border border-gray-200 px-4 py-2'>Grade</th>
              <th className='border border-gray-200 px-4 py-2'>Defects per 300g</th>
              <th className='border border-gray-200 px-4 py-2'>Classification</th>
              <th className='border border-gray-200 px-4 py-2'>Typical Use</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 text-gray-700'>
            <tr>
              <td className='border border-gray-200 px-4 py-2 font-semibold'>G1</td>
              <td className='border border-gray-200 px-4 py-2'>0-3</td>
              <td className='border border-gray-200 px-4 py-2'>Specialty</td>
              <td className='border border-gray-200 px-4 py-2'>Single-origin offerings, competition lots</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2 font-semibold'>G2</td>
              <td className='border border-gray-200 px-4 py-2'>4-12</td>
              <td className='border border-gray-200 px-4 py-2'>Specialty / Premium</td>
              <td className='border border-gray-200 px-4 py-2'>Specialty blends, slightly lower-priced single-origins</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2 font-semibold'>G3</td>
              <td className='border border-gray-200 px-4 py-2'>13-25</td>
              <td className='border border-gray-200 px-4 py-2'>Commercial</td>
              <td className='border border-gray-200 px-4 py-2'>Commercial blends, institutional buyers</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2 font-semibold'>G4</td>
              <td className='border border-gray-200 px-4 py-2'>26-45</td>
              <td className='border border-gray-200 px-4 py-2'>Commercial</td>
              <td className='border border-gray-200 px-4 py-2'>Large-volume blends, instant coffee production</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2 font-semibold'>G5</td>
              <td className='border border-gray-200 px-4 py-2'>46-100</td>
              <td className='border border-gray-200 px-4 py-2'>Commercial</td>
              <td className='border border-gray-200 px-4 py-2'>Budget blends, domestic market</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Ethio Coffee exports all grades (G1 through G5) to meet diverse buyer needs, from specialty roasters seeking traceable G1 single-origins to commercial buyers requiring volume G4/G5 for blends. For a deeper look at defect classification and quality control, see our <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline font-semibold'>green coffee defects and quality control guide</Link>.
      </p>

      {/* SECTION 4: STEP-BY-STEP */}
      <h2 id='step-by-step' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineClipboardDocumentList className='text-amber-600' />
        Step-by-Step: How to Source Ethiopian Green Coffee
      </h2>

      <p className='my-4'>
        Whether this is your first Ethiopian container or your fiftieth, following a structured sourcing process reduces risk and improves lot consistency.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-4'>Step 1: Define Your Quality and Volume Requirements</h3>
      <p className='my-4'>
        Before contacting any exporter, document the specifics: target grade (G1, G2, or commercial G3-G4), preferred processing method (washed or natural), volume per shipment (bags or full containers), and preferred Incoterms (FOB Djibouti for ocean freight, FCA Addis Ababa for air freight). Clear requirements filter out suppliers who cannot serve your needs and save both sides time. Our <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline font-semibold'>MOQ guide</Link> covers typical minimum order quantities by grade and buyer type.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-4'>Step 2: Find and Evaluate Ethiopian Exporters</h3>
      <p className='my-4'>
        Verify that any exporter holds an active license from the Ethiopian Coffee and Tea Authority (ECTA) and is registered with the ECX. Ask for the license number and cross-reference it. Request buyer references from companies the exporter has shipped to within the past 12 months. Our <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='text-amber-700 hover:underline font-semibold'>10-point exporter evaluation scorecard</Link> covers what to check and what red flags to watch for.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-4'>Step 3: Request and Evaluate Samples</h3>
      <p className='my-4'>
        Ask for pre-shipment samples from current or recent harvest lots. Cup them using consistent protocols (SCA standards or your own internal framework) and compare not just cup quality but also sample packaging, labeling, turnaround time, and accompanying documentation. These details reveal how a supplier handles the details that matter post-contract. See our <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline font-semibold'>cupping and evaluation guide</Link> for proper assessment techniques.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-4'>Step 4: Negotiate Terms and Sign Contracts</h3>
      <p className='my-4'>
        Ethiopian coffee contracts typically specify grade, processing method, origin region, volume, price (FOB or FCA), payment schedule, and shipment window. Most exporters require a deposit (commonly 30-50%) with the balance due before or at shipment. Understand the implications of each Incoterm and confirm the currency, dispute resolution mechanism, and force majeure provisions. Our <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline font-semibold'>contracts and payment terms guide</Link> covers these specifics.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-4'>Step 5: Manage Shipping and Logistics</h3>
      <p className='my-4'>
        Ethiopian green coffee ships in 60kg jute bags, typically lined with GrainPro or equivalent moisture-barrier material for specialty lots. A standard 20-foot container holds 275 to 300 bags. From order confirmation to arrival at your destination port, expect 6 to 10 weeks depending on shipping route. Most coffee ships FOB from Djibouti port or FCA from the Addis Ababa dry port. Marine cargo insurance is standard for international shipments and should be confirmed in the contract.
      </p>

      <p className='my-4'>
        For a detailed walkthrough of every stage from contract signing through customs clearance, see our <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline font-semibold'>Ethiopian coffee export process buyer&apos;s guide</Link>.
      </p>

      {/* SECTION 5: DIRECT VS IMPORTER */}
      <h2 id='direct-vs-importer' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineArrowPath className='text-amber-600' />
        Direct Trade vs. Buying Through Importers
      </h2>

      <p className='my-4'>
        There are two primary ways to buy Ethiopian green coffee, and the right choice depends on your volume, traceability requirements, and operational capacity.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-amber-200 rounded-lg p-5 bg-amber-50'>
          <h3 className='font-bold text-lg mb-3'>Direct from Ethiopian Exporters</h3>
          <ul className='space-y-2 text-sm'>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-green-600 mt-1 flex-shrink-0' />
              <span>Full lot-level traceability to washing station or cooperative</span>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-green-600 mt-1 flex-shrink-0' />
              <span>Relationship-based pricing; lock in allocations from specific lots</span>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-green-600 mt-1 flex-shrink-0' />
              <span>Access to micro-lots and experimental processing methods</span>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-green-600 mt-1 flex-shrink-0' />
              <span>Stronger origin story for marketing to end consumers</span>
            </li>
          </ul>
          <p className='text-xs mt-3 text-gray-600 italic'>Best for: 1+ container volumes, specialty-focused roasters, long-term sourcing programs</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-white'>
          <h3 className='font-bold text-lg mb-3'>Through a Domestic Importer</h3>
          <ul className='space-y-2 text-sm'>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-amber-600 mt-1 flex-shrink-0' />
              <span>Smaller MOQs with domestic warehouse access</span>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-amber-600 mt-1 flex-shrink-0' />
              <span>Simplified logistics; no international freight management</span>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-amber-600 mt-1 flex-shrink-0' />
              <span>Faster turnaround for spot purchases from existing inventory</span>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-amber-600 mt-1 flex-shrink-0' />
              <span>Local currency invoicing and payment terms</span>
            </li>
          </ul>
          <p className='text-xs mt-3 text-gray-600 italic'>Best for: sub-container volumes, new buyers testing Ethiopian coffees, quick restocking</p>
        </div>
      </div>

      <p className='my-4'>
        Many roasters start with an importer to evaluate quality and build their Ethiopian menu, then transition to direct sourcing as volumes grow. For a comprehensive look at how direct trade works in Ethiopia&apos;s regulatory framework, see our <Link href='/insights/direct-trade-ethiopian-farmers' className='text-amber-700 hover:underline font-semibold'>direct trade Ethiopian coffee guide</Link>.
      </p>

      {/* SECTION 6: DOCUMENTS AND CERTIFICATIONS */}
      <h2 id='documents' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineDocumentText className='text-amber-600' />
        Key Documents and Certifications
      </h2>

      <h3 className='text-xl font-bold mt-8 mb-4'>Export Documentation Requirements</h3>
      <p className='my-4'>
        Every Ethiopian coffee shipment requires a standard set of documents. Confirm that your exporter can provide all of the following before signing a contract:
      </p>

      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'><span className='font-bold'>Phytosanitary Certificate:</span> Issued by the Ethiopian Plant Health Regulatory Directorate, required by nearly all importing countries.</li>
        <li className='my-2'><span className='font-bold'>ICO Certificate of Origin:</span> Confirms the coffee&apos;s Ethiopian origin for <a href='https://www.ico.org/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>International Coffee Organization</a> member countries.</li>
        <li className='my-2'><span className='font-bold'>CLU Quality Certificate:</span> Issued by the Coffee Liquoring Unit after pre-export cupping and physical inspection.</li>
        <li className='my-2'><span className='font-bold'>Bill of Lading / Airway Bill:</span> Transport document confirming shipment details.</li>
        <li className='my-2'><span className='font-bold'>Commercial Invoice and Packing List:</span> Standard trade documents specifying quantity, grade, weight, and pricing.</li>
        <li className='my-2'><span className='font-bold'>Certificate of Weight:</span> Independent verification of bag and container weight.</li>
      </ul>

      <h3 className='text-xl font-bold mt-8 mb-4'>Certifications That Add Value</h3>
      <p className='my-4'>
        Beyond mandatory export documents, voluntary certifications can unlock premium pricing and meet buyer requirements in specific markets:
      </p>

      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'><span className='font-bold'>USDA/EU Organic:</span> Increasingly demanded by European and North American buyers. Requires certified chain of custody from washing station through export.</li>
        <li className='my-2'><span className='font-bold'>Fair Trade:</span> Common among cooperative unions; carries pricing premiums and social accountability requirements.</li>
        <li className='my-2'><span className='font-bold'>Rainforest Alliance:</span> Covers environmental and labor standards; growing in importance for EU market access.</li>
      </ul>

      <p className='my-4'>
        Our <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline font-semibold'>Ethiopian coffee certifications guide</Link> covers the full spectrum of organic, Fair Trade, and Rainforest Alliance certification for buyers. For UK-specific requirements including post-Brexit organic recognition and DCTS preferences, see our guide to <Link href='/insights/importing-ethiopian-coffee-to-uk' className='text-amber-700 hover:underline font-bold'>importing Ethiopian coffee to the UK</Link>.
      </p>

      {/* SECTION 7: PRICING */}
      <h2 id='pricing' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBanknotes className='text-amber-600' />
        Pricing, Costs, and Payment Terms
      </h2>

      <p className='my-4'>
        Ethiopian green coffee pricing depends on grade, processing method, origin region, certification status, and market conditions. As a reference, FOB Djibouti prices for the 2025/26 season typically range from approximately $6.50/kg for commercial G5 lots to $10.00+/kg for washed specialty G1. These figures shift with the New York C-market, local supply conditions, and exchange rate movements.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-3'>Cost Components Beyond FOB Price</p>
        <ul className='font-inconsolata list-none'>
          <li className='my-2'><span className='font-bold'>Ocean Freight:</span> Varies significantly by destination. Budget $1,500 to $4,500+ per 20-foot container depending on route and carrier.</li>
          <li className='my-2'><span className='font-bold'>Insurance:</span> Typically 0.3-0.5% of cargo value for marine coverage.</li>
          <li className='my-2'><span className='font-bold'>Import Duties and Taxes:</span> Country-specific. Many nations offer reduced or zero duty on green coffee.</li>
          <li className='my-2'><span className='font-bold'>Warehousing and Handling:</span> Destination port charges, drayage, and storage fees at your receiving warehouse.</li>
        </ul>
      </div>

      <p className='my-4'>
        For detailed FOB price analysis by grade and region, see our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline font-semibold'>Ethiopian coffee FOB pricing guide</Link>. For a complete breakdown of what it costs to land Ethiopian coffee at your warehouse, see the <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline font-semibold'>landed cost guide</Link>.
      </p>

      {/* SECTION 8: ORIGINS */}
      <h2 id='origins' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineMapPin className='text-amber-600' />
        Best Ethiopian Coffee Origins for Specialty Buyers
      </h2>

      <p className='my-4'>
        Each major growing region offers distinct cup profiles suited to different roasting styles and menu applications. Matching the origin to your target market is one of the most impactful sourcing decisions you will make.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-amber-200 rounded-lg p-5 bg-amber-50'>
          <h3 className='font-bold text-lg mb-2'><Link href='/ethiopian-coffee-yirgacheffe' className='text-dark hover:underline'>Yirgacheffe</Link></h3>
          <p className='text-sm'><span className='font-semibold'>Profile:</span> Floral, tea-like, bright citrus. <span className='font-semibold'>Best for:</span> Light roasts, pour-over menus, flagship single-origins.</p>
        </div>
        <div className='border border-amber-200 rounded-lg p-5 bg-amber-50'>
          <h3 className='font-bold text-lg mb-2'><Link href='/ethiopian-coffee-sidamo' className='text-dark hover:underline'>Sidamo</Link></h3>
          <p className='text-sm'><span className='font-semibold'>Profile:</span> Berry, wine, cocoa finish. <span className='font-semibold'>Best for:</span> Versatile filter and espresso offerings.</p>
        </div>
        <div className='border border-amber-200 rounded-lg p-5 bg-amber-50'>
          <h3 className='font-bold text-lg mb-2'><Link href='/ethiopian-coffee-guji' className='text-dark hover:underline'>Guji</Link></h3>
          <p className='text-sm'><span className='font-semibold'>Profile:</span> Stone fruit, jasmine, syrupy body. <span className='font-semibold'>Best for:</span> Single-origin espresso, specialty competition lots.</p>
        </div>
        <div className='border border-amber-200 rounded-lg p-5 bg-amber-50'>
          <h3 className='font-bold text-lg mb-2'><Link href='/ethiopian-coffee-harar' className='text-dark hover:underline'>Harar</Link></h3>
          <p className='text-sm'><span className='font-semibold'>Profile:</span> Bold, winey, dried fruit. <span className='font-semibold'>Best for:</span> Dark roast lovers, unique blends, mocha-style offerings.</p>
        </div>
        <div className='border border-amber-200 rounded-lg p-5 bg-amber-50'>
          <h3 className='font-bold text-lg mb-2'><Link href='/ethiopian-coffee-limu' className='text-dark hover:underline'>Limu</Link></h3>
          <p className='text-sm'><span className='font-semibold'>Profile:</span> Balanced, citrus, caramel. <span className='font-semibold'>Best for:</span> Reliable everyday offerings, approachable blends.</p>
        </div>
        <div className='border border-amber-200 rounded-lg p-5 bg-amber-50'>
          <h3 className='font-bold text-lg mb-2'><Link href='/ethiopian-coffee-jimma' className='text-dark hover:underline'>Jimma (Djimmah)</Link></h3>
          <p className='text-sm'><span className='font-semibold'>Profile:</span> Earthy, full-bodied, low acidity. <span className='font-semibold'>Best for:</span> High-volume commercial blends, price-sensitive markets.</p>
        </div>
      </div>

      <p className='my-4'>
        For detailed tasting notes, altitude data, and processing methods across all regions, see our <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline font-semibold'>guide to Ethiopian green coffee origins</Link>. For a head-to-head comparison of the top three specialty regions, read <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline font-semibold'>Yirgacheffe vs. Sidamo vs. Guji</Link>.
      </p>

      {/* SECTION 9: SEASONAL TIMING */}
      <h2 id='seasonal-timing' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCalendarDays className='text-amber-600' />
        Seasonal Timing: When to Buy Ethiopian Coffee
      </h2>

      <p className='my-4'>
        Ethiopian coffee follows a single annual harvest cycle. Timing your orders against this cycle ensures access to the freshest lots and the widest selection.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <ul className='font-inconsolata list-none'>
          <li className='my-2'><span className='font-bold'>Harvest (October to January):</span> Cherry picking across all regions. <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline font-bold'>Washed coffees arrive at washing stations; naturals go to drying beds</Link>.</li>
          <li className='my-2'><span className='font-bold'>Processing and Milling (December to March):</span> Wet and dry processing complete. Dry milling prepares export-ready green beans.</li>
          <li className='my-2'><span className='font-bold'>Export Season (February to August):</span> The primary shipping window. Fresh-crop lots are available for sampling, contracting, and shipment.</li>
          <li className='my-2'><span className='font-bold'>Spot Market (August to November):</span> Remaining inventory from the current crop. Selection narrows; some popular lots sell out.</li>
        </ul>
      </div>

      <p className='my-4'>
        Plan your contracting for January through March to secure the widest selection of fresh-crop lots. Buyers waiting until the second half of the year may find top-tier G1 allocations already committed. For month-by-month detail across all regions, see our <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline font-semibold'>Ethiopian coffee harvest calendar for buyers</Link>.
      </p>

      {/* SECTION 10: HOW ETHIO COFFEE HELPS */}
      <h2 id='ethio-coffee' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineShieldCheck className='text-amber-600' />
        How Ethio Coffee Simplifies Sourcing for Importers
      </h2>

      <p className='my-4'>
        At Ethio Coffee Import and Export PLC, we are an origin-connected exporter with three decades of sourcing heritage across Ethiopia&apos;s coffee regions. We source from trusted cooperatives, washing stations, and farming communities rather than owning farms, which gives us flexibility to select the best lots each season across all growing areas.
      </p>

      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'><span className='font-bold'>Heritage Sourcing Network:</span> Over 30 years of relationships with cooperatives and washing stations across Yirgacheffe, Sidamo, Guji, Harar, Limu, and Jimma.</li>
        <li className='my-2'><span className='font-bold'>Complete Traceability:</span> Every lot comes with origin details, processing information, and quality documentation from our Addis Ababa warehouse.</li>
        <li className='my-2'><span className='font-bold'>Sample Programs:</span> Request samples from current-crop lots before committing to a purchase.</li>
        <li className='my-2'><span className='font-bold'>Professional Export Service:</span> Full documentation, flexible shipping terms (FOB Djibouti or FCA Addis dry port), and freight forwarder coordination.</li>
        <li className='my-2'><span className='font-bold'>Responsive Communication:</span> With one brother on the ground in Ethiopia and one Ethiopian-Canadian, we bridge time zones and provide the responsive support importers expect.</li>
        <li className='my-2'><span className='font-bold'>All Grades Available:</span> G1 through G5, specialty to commercial, washed and natural processed.</li>
      </ul>

      <p className='my-4'>
        For a broader view of what separates top exporters worldwide, see our guide on <Link href='/insights/top-premium-coffee-exporters-global-guide' className='text-amber-700 hover:underline font-semibold'>top coffee exporters in the world</Link>.
      </p>

      {/* FAQ SECTION */}
      <section id='faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h2 className='text-2xl font-bold mb-6 text-gray-900'>Frequently Asked Questions About Sourcing Green Coffee from Ethiopia</h2>
        <div className='space-y-6'>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>What are the Ethiopian coffee grades used for export?</h3>
            <p className='text-sm text-gray-600'>Ethiopian coffee is graded from Grade 1 (specialty, 0-3 defects per 300g) to Grade 5 (commercial, 46-100 defects). G1 and G2 serve specialty single-origin programs. G3 suits premium blends. G4 and G5 cover large-volume commercial needs including instant coffee production.</p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>What is the minimum order quantity for Ethiopian green coffee?</h3>
            <p className='text-sm text-gray-600'>Most Ethiopian exporters work with full container orders: approximately 275 to 300 bags of 60kg each in a standard 20-foot container. Some exporters, including Ethio Coffee, can accommodate smaller trial orders to help new buyers evaluate quality before committing to container volumes.</p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>How long does shipping take from Ethiopia?</h3>
            <p className='text-sm text-gray-600'>From order confirmation to arrival at your destination port, plan for 6 to 10 weeks depending on shipping route and destination. Most Ethiopian coffee ships FOB from Djibouti port or FCA from the Addis Ababa dry port. Transit to Europe averages 3 to 4 weeks; North America 5 to 7 weeks.</p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>Should I source directly from an exporter or use an importer?</h3>
            <p className='text-sm text-gray-600'>Direct sourcing gives better traceability, relationship pricing, and access to specific lots. Importers simplify logistics for smaller volumes and offer domestic warehousing. Many roasters start with an importer to test Ethiopian coffees and transition to direct sourcing as volumes grow beyond a container per order.</p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>When is the best time to buy fresh-crop Ethiopian coffee?</h3>
            <p className='text-sm text-gray-600'>Contract between January and March for the widest selection of fresh-crop lots from the current harvest. Export shipments run primarily February through August. Buyers who wait until the second half of the year will find top-tier specialty lots already committed to other buyers.</p>
          </div>
        </div>
      </section>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3'>
          <HiOutlineShieldCheck className='inline mr-2 text-amber-700' />
          Source Premium Ethiopian Green Coffee Direct from Origin
        </h3>
        <p className='my-2'>
          Ethio Coffee Import and Export PLC exports G1 through G5 from Ethiopia&apos;s premier growing regions with full lot traceability, professional documentation, and responsive support. Request samples from our current-crop offerings or contact us to discuss your sourcing requirements.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>
            View Our Offerings
          </Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            Contact Us
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
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Import Guides</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-import-ethiopian-coffee-to-usa' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to the USA</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-canada-guide' className='text-amber-700 hover:underline'>Importing Ethiopian Coffee to Canada</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-uk' className='text-amber-700 hover:underline'>Importing Ethiopian Coffee to the UK</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-germany' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to Germany</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-australia' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to Australia</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Sourcing &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export Guide</Link></li>
              <li>&bull; <Link href='/insights/direct-trade-ethiopian-farmers' className='text-amber-700 hover:underline'>Direct Trade Ethiopian Coffee for Importers</Link></li>
              <li>&bull; <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='text-amber-700 hover:underline'>How to Choose an Ethiopian Coffee Export Company</Link></li>
              <li>&bull; <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Ethiopian Coffee MOQ Guide for Importers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Quality &amp; Processing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Defects: Buyer&apos;s Guide to Quality Control</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Washing Stations Buyer&apos;s Guide</Link></li>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs. Natural Ethiopian Coffee Processing</Link></li>
              <li>&bull; <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>Cup and Evaluate Ethiopian Coffee Samples</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Pricing &amp; Logistics</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost Guide</Link></li>
              <li>&bull; <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline'>Specialty Coffee Storage and Freight Logistics</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline'>Green Coffee Packaging: Bag Types Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC. This guide is for educational purposes and reflects sourcing conditions as of early 2026. For current pricing, availability, and shipping schedules, <Link href='/contact-us' className='underline'>contact us directly</Link>.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> {' · '}
          <Link href='/ethiopian-coffee-exporter' className='underline'>Export Services</Link> {' · '}
          <Link href='/about' className='underline'>About Ethio Coffee</Link> {' · '}
          <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineDocumentText,
  HiOutlineTruck,
  HiOutlineCheckCircle,
  HiOutlineCube,
  HiOutlineLightBulb,
  HiOutlineGlobeAlt,
  HiOutlineXCircle,
  HiOutlineClipboardDocumentList,
  HiOutlineCurrencyDollar,
  HiOutlineCalendarDays,
  HiOutlineShieldCheck,
  HiOutlineBuildingOffice2,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function ImportEthiopianCoffeeToUSA({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      {/* H1 TITLE */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>

      {/* SUBTITLE */}
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Your 2026 guide to regulations, documentation, shipping, duties, and costs for importing Ethiopian green coffee to the United States
      </h2>

      {/* HERO IMAGE */}
      <figure>
        <figcaption className='font-inconsolata my-2 text-sm text-gray-500'>
          Ethiopian specialty green coffee prepared for export. Understanding US import regulations, documentation, and logistics is essential for roasters and importers sourcing Ethiopian origins. Photo: Ethio Coffee Import and Export PLC.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian green coffee beans ready for export to the United States, showing jute bags in a warehouse'
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
        <span className='ml-2'>Import Guide / Ethiopian Coffee Export / US Market</span>
      </div>

      {/* INTRO */}
      <p className='my-4'>
        The United States imports more coffee than any other country, and Ethiopian specialty coffee has become one of the most sought-after origins among American roasters. If you want to <span className='font-bold'>import Ethiopian coffee to the USA</span>, this guide covers every step: federal regulations, required documentation, shipping logistics from Djibouti, landed costs, and how to work with an experienced <Link href='/ethiopian-coffee-exporter' className='text-amber-700 hover:underline'>Ethiopian coffee exporter</Link>.
      </p>

      <p className='my-4'>
        This article reflects the regulatory and market environment as of early 2026, including critical updates on Ethiopia&apos;s AGOA suspension, current duty rates, and the 2025/26 harvest season. Every section targets the practical questions importers, roasters, and green coffee buyers ask before committing capital.
      </p>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-2 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0' /> Key Takeaway
        </p>
        <p className='text-sm leading-relaxed'>
          Green (unroasted) coffee beans enter the United States <span className='font-bold'>duty-free</span> under HTS code 0901.11 at the MFN (Most Favored Nation) rate, regardless of origin. You do not need a special import license. The main requirements are a customs bond, FDA Prior Notice filing, and USDA APHIS pest inspection at the port of entry. Ethiopia is currently suspended from the AGOA trade preference program, but this does not affect green coffee duty rates since they are already zero. Working with an experienced Ethiopian coffee exporter simplifies documentation and reduces the risk of delays.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#why-import' className='text-amber-700 hover:underline'>1. Why Import Ethiopian Coffee to the US?</a></li>
          <li><a href='#regulations' className='text-amber-700 hover:underline'>2. US Coffee Import Regulations</a></li>
          <li><a href='#duties-agoa' className='text-amber-700 hover:underline'>3. Import Duties and AGOA Status (2026 Update)</a></li>
          <li><a href='#finding-exporter' className='text-amber-700 hover:underline'>4. Finding a Reliable Ethiopian Coffee Exporter</a></li>
          <li><a href='#documentation' className='text-amber-700 hover:underline'>5. Required Documentation</a></li>
          <li><a href='#shipping' className='text-amber-700 hover:underline'>6. Shipping and Logistics</a></li>
          <li><a href='#customs-clearance' className='text-amber-700 hover:underline'>7. US Customs Clearance Process</a></li>
          <li><a href='#cost-breakdown' className='text-amber-700 hover:underline'>8. Cost Breakdown: Landed Cost Calculator</a></li>
          <li><a href='#storage' className='text-amber-700 hover:underline'>9. Storage and Quality Preservation</a></li>
          <li><a href='#timeline' className='text-amber-700 hover:underline'>10. Realistic Timeline: Contact to Warehouse</a></li>
          <li><a href='#mistakes' className='text-amber-700 hover:underline'>11. Common Mistakes to Avoid</a></li>
          <li><a href='#right-for-you' className='text-amber-700 hover:underline'>12. Is Direct Import Right for You?</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>13. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* ============ 1. WHY IMPORT ============ */}
      <h3 id='why-import' className='text-2xl font-extrabold mt-10'>
        <HiOutlineGlobeAlt className='inline mr-2' />
        Why Import Ethiopian Coffee to the United States?
      </h3>
      <p className='my-4'>
        Ethiopian coffee commands premium prices in the US specialty market. Roasters and importers source it for specific, commercially important reasons:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Distinct origin profiles:</span> Floral Yirgacheffe, fruit-forward <Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline'>Guji</Link>, citrus-bright <Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline'>Sidamo</Link>, and wine-toned <Link href='/ethiopian-coffee-harar' className='text-amber-700 hover:underline'>Harar</Link> give roasters differentiation that no other origin replicates</li>
        <li><span className='font-bold'>Strong consumer recognition:</span> American coffee drinkers actively seek Ethiopian single-origin offerings. Specialty cafes list the region on menus as a quality signal</li>
        <li><span className='font-bold'>Competitive pricing vs. Brazil:</span> Brazilian coffee now faces a 50% tariff for US imports, making Ethiopian specialty lots more attractive on a landed-cost basis</li>
        <li><span className='font-bold'>Duty-free entry:</span> Green coffee enters the US at 0% duty under the standard MFN tariff schedule (HTS 0901.11), keeping landed costs predictable</li>
        <li><span className='font-bold'>Growing specialty volumes:</span> Ethiopia shipped over 290,000 metric tons of green coffee during the 2023/24 season. Specialty-grade volumes have been climbing as more washing stations invest in quality infrastructure</li>
      </ul>

      <div className='bg-gray-50 p-5 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-2'>2025/26 Harvest Context</h4>
        <p className='text-sm'>Cherry prices in Ethiopia tripled to approximately $1.51/lb early in the 2025/26 harvest season, driven by strong global demand and domestic competition for raw cherry. The washed coffee supply is tighter than in previous seasons. For US importers, this means FOB prices for washed specialty lots (Grade 1 Yirgacheffe, Sidamo, Guji) are higher than 2024 levels. Securing lots early through a trusted sourcing partner has become more important. Check our <Link href='/offerings' className='text-amber-700 hover:underline'>current offerings</Link> for live pricing.</p>
      </div>

      {/* ============ 2. REGULATIONS ============ */}
      <h3 id='regulations' className='text-2xl font-extrabold mt-10'>
        <HiOutlineDocumentText className='inline mr-2' />
        US Coffee Import Regulations
      </h3>
      <p className='my-4'>
        Importing green coffee to the United States is simpler than most food products. Three federal agencies are involved, and none requires a special coffee import license.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-3 flex items-center gap-2'><HiOutlineCheckCircle className='text-xl text-green-600' /> Regulatory Summary</h4>
        <ul className='space-y-3 text-sm'>
          <li><span className='font-bold'>No Import License Required:</span> Any US business entity (or individual with an EIN or SSN) can import coffee. No special permit is needed for green beans</li>
          <li><span className='font-bold'>FDA Prior Notice:</span> You must file Prior Notice with the FDA before each shipment arrives. This can be submitted electronically 15 to 30 days in advance</li>
          <li><span className='font-bold'>FDA Facility Registration:</span> If you roast, blend, or repackage the coffee, your facility must be registered with the <a href='https://www.fda.gov/food' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>FDA</a> under the Food Safety Modernization Act (FSMA)</li>
          <li><span className='font-bold'>USDA APHIS Inspection:</span> Green coffee must be inspected for agricultural pests at the port of entry by <a href='https://www.aphis.usda.gov/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>USDA APHIS</a></li>
          <li><span className='font-bold'>Customs Bond:</span> Required for clearing any commercial import through <a href='https://www.cbp.gov/trade/basic-import-export' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>CBP</a>. Options: single-entry bond (per shipment) or continuous bond (annual, more cost-effective for regular imports)</li>
        </ul>
      </div>

      <h4 className='font-bold text-lg mt-6'>FDA Requirements in Detail</h4>
      <p className='my-3 text-sm'>
        The FDA classifies coffee as a beverage material. Green coffee requires minimal FDA intervention compared to processed foods, but importers must still comply with three obligations:
      </p>
      <ul className='my-4 list-disc ml-5 space-y-2 text-sm'>
        <li><span className='font-bold'>Prior Notice filing:</span> Submitted via the FDA Prior Notice System Interface (PNSI) or through the Automated Broker Interface (ABI). Must include the FDA product code, quantity, shipper details, and estimated arrival time</li>
        <li><span className='font-bold'>Country of origin labeling:</span> All imported coffee must declare country of origin on the shipping label. Individual retail packages need separate labeling if you sell directly</li>
        <li><span className='font-bold'>FSMA compliance:</span> The Food Safety Modernization Act applies to food facilities. If you only import green beans and pass them to a separate roaster, your FSMA obligations are limited. If you roast, you need a food safety plan</li>
      </ul>

      <h4 className='font-bold text-lg mt-6'>USDA APHIS Inspection</h4>
      <p className='my-3 text-sm'>
        USDA APHIS inspects green coffee shipments for exotic plant pests, particularly the coffee berry borer and other insects. A phytosanitary certificate issued by Ethiopia&apos;s Ministry of Agriculture (provided by your exporter) speeds this process. If pests are found, USDA may order fumigation at the importer&apos;s expense, or in rare cases, destruction. Inspection fees typically run $200 to $500 per container.
      </p>

      <div className='bg-amber-50 text-gray-800 p-5 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium text-sm'><span className='font-bold'>Important:</span> Hawaii and Puerto Rico have local agricultural quarantine laws. Green coffee beans cannot be imported directly into these territories to protect local coffee production. Shipments transiting through Hawaiian or Puerto Rican ports en route to the US mainland are permitted.</p>
      </div>

      {/* ============ 3. DUTIES & AGOA ============ */}
      <h3 id='duties-agoa' className='text-2xl font-extrabold mt-10'>
        <HiOutlineCurrencyDollar className='inline mr-2' />
        Import Duties and AGOA Status (2026 Update)
      </h3>
      <p className='my-4'>
        This section addresses one of the most common questions from US importers: what duties apply to Ethiopian coffee, and how does Ethiopia&apos;s AGOA suspension affect imports?
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-3 flex items-center gap-2'><HiOutlineCheckCircle className='text-xl text-green-600' /> Green Coffee: Duty-Free at MFN Rates</h4>
        <p className='text-sm mb-3'>
          Unroasted (green) coffee beans enter the United States <span className='font-bold'>duty-free</span> under the Harmonized Tariff Schedule code <span className='font-bold'>0901.11</span>, at the MFN (Most Favored Nation) rate. This applies to coffee from any WTO member country, including Ethiopia, regardless of trade preference program eligibility.
        </p>
        <p className='text-sm'>
          You can verify this rate at the <a href='https://hts.usitc.gov/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>US International Trade Commission HTS database</a>. Search for heading 0901 to see all coffee-related tariff lines.
        </p>
      </div>

      <h4 className='font-bold text-lg mt-6'>Ethiopia&apos;s AGOA Suspension: What It Means</h4>
      <p className='my-3 text-sm'>
        The African Growth and Opportunity Act (AGOA) provides duty-free access to the US market for eligible sub-Saharan African countries. Ethiopia was <span className='font-bold'>suspended from AGOA effective January 1, 2022</span>. The Consolidated Appropriations Act, 2026 (P.L. 119-75) reauthorized AGOA itself through December 2026, but Ethiopia&apos;s reinstatement has not been confirmed as of March 2026.
      </p>
      <p className='my-3 text-sm'>
        For green coffee importers, the practical impact is minimal. Green coffee was already duty-free at MFN rates before AGOA existed, and it remains duty-free without AGOA. The suspension matters more for value-added Ethiopian products (roasted coffee, coffee extracts) that would otherwise qualify for preferential treatment under AGOA.
      </p>

      <div className='bg-gray-50 p-5 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-2'>Duty Rate Summary</h4>
        <table className='w-full text-sm'>
          <thead>
            <tr className='border-b'>
              <th className='py-2 text-left font-bold'>Product</th>
              <th className='py-2 text-left font-bold'>HTS Code</th>
              <th className='py-2 text-left font-bold'>MFN Duty Rate</th>
              <th className='py-2 text-left font-bold'>AGOA Impact</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='py-2'>Green coffee (not decaf)</td>
              <td className='py-2'>0901.11</td>
              <td className='py-2 font-bold'>Free (0%)</td>
              <td className='py-2'>No change</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Green coffee (decaf)</td>
              <td className='py-2'>0901.12</td>
              <td className='py-2 font-bold'>Free (0%)</td>
              <td className='py-2'>No change</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Roasted coffee (not decaf)</td>
              <td className='py-2'>0901.21</td>
              <td className='py-2'>Free (0%)</td>
              <td className='py-2'>No change (also free at MFN)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Coffee extracts/concentrates</td>
              <td className='py-2'>2101.11</td>
              <td className='py-2'>Varies (up to 8.5%)</td>
              <td className='py-2'>AGOA suspension may apply</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-amber-50 text-gray-800 p-5 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium text-sm'><span className='font-bold'>Competitive context:</span> Brazilian coffee now faces a <span className='font-bold'>50% tariff</span> for US imports due to trade disputes between the US and Brazilian governments. Ethiopian green coffee enters at 0%. For US roasters comparing origins, this tariff differential makes Ethiopian specialty lots significantly more competitive on a landed-cost basis.</p>
      </div>

      {/* ============ 4. FINDING EXPORTER ============ */}
      <h3 id='finding-exporter' className='text-2xl font-extrabold mt-10'>
        <HiOutlineBuildingOffice2 className='inline mr-2' />
        Finding a Reliable Ethiopian Coffee Exporter
      </h3>
      <p className='my-4'>
        Your choice of Ethiopian coffee export partner determines the quality of your coffee and the smoothness of your supply chain. Evaluate exporters on these criteria:
      </p>

      <div className='bg-amber-50 p-5 rounded-lg border border-amber-200 my-6'>
        <h4 className='font-bold text-lg mb-2 flex items-center gap-2'><HiOutlineCheckCircle className='text-xl text-green-600' /> What to Look For</h4>
        <ul className='text-sm space-y-2 list-disc ml-5'>
          <li><span className='font-bold'><a href='https://www.ecx.com.et/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>ECX Registration</a>:</span> Confirms legal compliance with Ethiopian commodity exchange rules</li>
          <li><span className='font-bold'>US Market Experience:</span> Familiarity with FDA documentation, ISF filing timelines, and US port requirements</li>
          <li><span className='font-bold'>Sample Programs:</span> Ability to send 200-300g cupping samples via DHL before you commit to a container purchase</li>
          <li><span className='font-bold'>Quality Reports:</span> Cupping scores, defect counts, moisture analysis, and screen size data for every lot</li>
          <li><span className='font-bold'>Multi-Region Coverage:</span> Access to <Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline'>Yirgacheffe</Link>, <Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline'>Sidamo</Link>, <Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline'>Guji</Link>, <Link href='/ethiopian-coffee-harar' className='text-amber-700 hover:underline'>Harar</Link>, <Link href='/ethiopian-coffee-limu' className='text-amber-700 hover:underline'>Limu</Link>, and <Link href='/ethiopian-coffee-jimma' className='text-amber-700 hover:underline'>Jimma</Link> origins through established sourcing relationships</li>
          <li><span className='font-bold'>Responsive Communication:</span> English-speaking contact with understanding of US time zones</li>
          <li><span className='font-bold'>Transparent Pricing:</span> Clear FOB pricing with no hidden fees. See our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>FOB pricing guide</Link> for market context</li>
        </ul>
      </div>

      <p className='my-4'>
        <span className='font-bold'>Ethio Coffee Import and Export PLC</span> is an origin-connected exporter with over 30 years of sourcing relationships across Ethiopia&apos;s coffee regions. We work with trusted cooperatives, washing stations, and farming communities to source Grade 1 and Grade 2 lots. Our warehouse and office in Addis Ababa handles all origin-side logistics, and we provide complete documentation for US customs clearance. <Link href='/contact-us' className='text-amber-700 hover:underline'>Contact us</Link> for current lot availability and pricing.
      </p>

      {/* ============ 5. DOCUMENTATION ============ */}
      <h3 id='documentation' className='text-2xl font-extrabold mt-10'>
        <HiOutlineDocumentText className='inline mr-2' />
        Required Documentation
      </h3>
      <p className='my-4'>
        Complete documentation prevents delays at US ports. Your Ethiopian exporter handles the origin-side documents; you (or your customs broker) handle the US-side filings.
      </p>

      <div className='grid md:grid-cols-2 gap-5 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-3'>From the Ethiopian Exporter</h4>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>Commercial Invoice:</span> Itemized goods, quantities, prices, FOB value, and Incoterms</li>
            <li><span className='font-bold'>Packing List:</span> Number of bags, net and gross weights, container number</li>
            <li><span className='font-bold'>Bill of Lading (B/L):</span> Shipping document from the freight forwarder at Djibouti</li>
            <li><span className='font-bold'>Phytosanitary Certificate:</span> Issued by Ethiopia&apos;s Ministry of Agriculture confirming the shipment is pest-free</li>
            <li><span className='font-bold'><a href='https://www.ico.org' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>ICO Certificate of Origin</a>:</span> International Coffee Organization certificate proving Ethiopian origin</li>
            <li><span className='font-bold'><a href='https://www.ecx.com.et/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>ECX Quality Certificate</a>:</span> Grade designation (G1, G2, etc.) and quality specifications</li>
            <li><span className='font-bold'>Certificate of Origin:</span> Standard trade document confirming country of origin</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-3'>US-Side Requirements</h4>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>Customs Bond:</span> Single-entry ($50-100) or continuous annual bond ($400-600/year), arranged through your customs broker</li>
            <li><span className='font-bold'>ISF (Importer Security Filing):</span> Filed 24 hours before vessel departs origin port. Late filing penalty: $5,000</li>
            <li><span className='font-bold'>Entry Summary (CBP Form 7501):</span> Filed by your customs broker upon arrival</li>
            <li><span className='font-bold'>FDA Prior Notice:</span> Electronic filing 15-30 days before arrival</li>
            <li><span className='font-bold'>Importer of Record Number:</span> Your business EIN or SSN</li>
            <li><span className='font-bold'>Power of Attorney:</span> Authorizes your customs broker to act on your behalf</li>
          </ul>
        </div>
      </div>

      <div className='bg-amber-50 text-gray-800 p-5 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium text-sm'><span className='font-bold'>Pro Tip:</span> Use a customs broker for your first few shipments. They handle ISF filing, entry summaries, and USDA coordination. Broker fees run $150 to $400 per container, a small cost compared to the $5,000 ISF late-filing penalty or port storage fees from clearance delays. For more on the export documentation process, see our <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian coffee export process guide</Link>.</p>
      </div>

      {/* ============ 6. SHIPPING ============ */}
      <h3 id='shipping' className='text-2xl font-extrabold mt-10'>
        <HiOutlineTruck className='inline mr-2' />
        Shipping and Logistics from Ethiopia to USA
      </h3>
      <p className='my-4'>
        Ethiopian coffee exports ship through the <a href='https://en.wikipedia.org/wiki/Port_of_Djibouti' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>Port of Djibouti</a>, connected to Addis Ababa by road (approximately 900 km). Inland transport from the Addis Ababa warehouse to Djibouti takes 3 to 5 days.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-3 flex items-center gap-2'><HiOutlineCube className='text-xl' /> Container Options</h4>
        <div className='space-y-3 text-sm'>
          <div>
            <h5 className='font-bold'>20ft Container (FCL)</h5>
            <p className='text-gray-600'>Capacity: ~18,000-19,200 kg (300-320 bags at 60 kg each)</p>
            <p className='mt-1'>Best for importers ordering 250+ bags or consolidating orders</p>
          </div>
          <div>
            <h5 className='font-bold'>40ft Container (FCL)</h5>
            <p className='text-gray-600'>Capacity: ~21,600-24,000 kg (360-400 bags at 60 kg each)</p>
            <p className='mt-1'>Suitable for larger roasters or multi-SKU orders</p>
          </div>
          <div>
            <h5 className='font-bold'>LCL (Less than Container Load)</h5>
            <p className='text-gray-600'>For smaller quantities under 200 bags</p>
            <p className='mt-1'>Higher per-kg cost, but enables smaller test orders. Ethio Coffee can consolidate your lot with other buyers to fill a shared container. See our <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>MOQ guide</Link> for details</p>
          </div>
        </div>
      </div>

      <div className='bg-gray-50 p-5 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-2'>Transit Times from Djibouti</h4>
        <ul className='text-sm space-y-2 list-disc ml-5'>
          <li><span className='font-bold'>US East Coast (New York/New Jersey):</span> 25 to 35 days ocean freight</li>
          <li><span className='font-bold'>US West Coast (Los Angeles/Oakland):</span> 30 to 40 days via Suez Canal</li>
          <li><span className='font-bold'>US Gulf Coast (Houston/New Orleans):</span> 30 to 40 days</li>
        </ul>
        <p className='text-sm mt-3 text-gray-600'>Add 1 to 2 weeks for inland transport from Ethiopia to Djibouti, customs clearance, and container stuffing. Total origin-to-port time is typically 5 to 7 weeks from confirmed order.</p>
      </div>

      <div className='bg-gray-50 p-5 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-2'>Packaging and Bag Types</h4>
        <p className='text-sm'>Standard packaging is 60 kg jute bags, often with GrainPro or similar moisture-barrier inner liners to protect quality during ocean transit. Specialty lots may use vacuum-sealed bags for extra protection. For a full overview of packaging options and their impact on quality, see our <Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline'>green coffee packaging guide</Link>.</p>
      </div>

      {/* ============ 7. CUSTOMS CLEARANCE ============ */}
      <h3 id='customs-clearance' className='text-2xl font-extrabold mt-10'>
        <HiOutlineShieldCheck className='inline mr-2' />
        US Customs Clearance Process
      </h3>
      <p className='my-4'>
        Once your container reaches a US port, customs clearance follows a defined sequence. A customs broker manages most of this on your behalf.
      </p>

      <ol className='my-6 space-y-4 list-decimal ml-5 font-medium'>
        <li>
          <span className='font-bold'>ISF Filing (Before Departure)</span>
          <p className='font-normal text-sm mt-1'>Your customs broker files the Importer Security Filing at least 24 hours before the vessel departs from Djibouti. Late filing triggers a $5,000 CBP penalty.</p>
        </li>
        <li>
          <span className='font-bold'>FDA Prior Notice</span>
          <p className='font-normal text-sm mt-1'>Electronic prior notice submitted to FDA with shipment details, product codes, and arrival estimates. This must be filed before the container arrives at the US port.</p>
        </li>
        <li>
          <span className='font-bold'>USDA APHIS Inspection</span>
          <p className='font-normal text-sm mt-1'>Green coffee is inspected for insects, pests, and plant diseases. The phytosanitary certificate from Ethiopia expedites clearance. Fee: $200 to $500.</p>
        </li>
        <li>
          <span className='font-bold'>CBP Entry and Review</span>
          <p className='font-normal text-sm mt-1'>Your broker files the entry summary (CBP Form 7501). Customs reviews documents, verifies tariff classification (HTS 0901.11), and may conduct a random physical inspection.</p>
        </li>
        <li>
          <span className='font-bold'>Release and Drayage</span>
          <p className='font-normal text-sm mt-1'>Once cleared, the container is released for pickup. Arrange trucking (drayage) from port to your warehouse. Typical clearance time: 1 to 3 business days if documents are in order.</p>
        </li>
      </ol>

      <div className='bg-amber-50 text-gray-800 p-5 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium text-sm'><span className='font-bold'>Clearance timeline:</span> With proper documentation and an experienced customs broker, most Ethiopian coffee shipments clear US customs within 2 to 3 business days. Shipments flagged for random physical inspection may take an additional 3 to 5 days. The most common cause of delay is incomplete or mismatched documentation between the commercial invoice and entry summary.</p>
      </div>

      {/* ============ 8. COST BREAKDOWN ============ */}
      <h3 id='cost-breakdown' className='text-2xl font-extrabold mt-10'>
        <HiOutlineCurrencyDollar className='inline mr-2' />
        Cost Breakdown: Landed Cost Calculator
      </h3>
      <p className='my-4'>
        Understanding total landed cost helps you price your coffee accurately. Below is a representative breakdown for a 20ft container (~300 bags) of Ethiopian specialty green coffee.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3'>Estimated Costs (20ft Container, ~300 Bags)</h4>
        <table className='w-full text-sm'>
          <tbody>
            <tr className='border-b'>
              <td className='py-2 font-bold'>FOB Price (Djibouti)</td>
              <td className='py-2 text-right'>$3.50 to $7.00/lb depending on grade and origin</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Ocean Freight (Djibouti to US Port)</td>
              <td className='py-2 text-right'>$3,500 to $6,000</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Customs Broker Fee</td>
              <td className='py-2 text-right'>$150 to $400</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>USDA APHIS Inspection</td>
              <td className='py-2 text-right'>$200 to $500</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>ISF Filing Fee</td>
              <td className='py-2 text-right'>$50 to $100</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Port Fees and Terminal Handling</td>
              <td className='py-2 text-right'>$300 to $800</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Drayage (Port to Warehouse)</td>
              <td className='py-2 text-right'>$300 to $1,200 depending on distance</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Customs Bond (continuous, annual)</td>
              <td className='py-2 text-right'>$400 to $600/year</td>
            </tr>
            <tr className='border-b border-dark'>
              <td className='py-2 font-bold'>Import Duties (Green Coffee)</td>
              <td className='py-2 text-right font-bold'>$0 (duty-free, HTS 0901.11)</td>
            </tr>
          </tbody>
        </table>
        <p className='text-sm mt-4 text-gray-600'><span className='font-bold'>Total logistics costs beyond FOB:</span> Approximately $4,900 to $9,600 per container, depending on port, distance to warehouse, and service providers.</p>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold mb-2'>Landed Cost Example</h4>
        <p className='text-sm'>
          A 20ft container of 300 bags (18,000 kg / 39,683 lbs) of Washed Sidamo Grade 2 at <span className='font-bold'>$4.10/lb FOB</span>:
        </p>
        <ul className='text-sm mt-2 space-y-1 list-disc ml-5'>
          <li>FOB cost: 39,683 lbs x $4.10 = $162,700</li>
          <li>Ocean freight + logistics: ~$7,000</li>
          <li>Total landed: $169,700</li>
          <li><span className='font-bold'>Landed cost per lb: ~$4.28/lb</span></li>
        </ul>
        <p className='text-sm mt-2'>For current FOB prices on specific origins and grades, check our <Link href='/offerings' className='text-amber-700 hover:underline'>offerings page</Link>. For a deeper look at cost components, see the <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>landed cost guide</Link>.</p>
      </div>

      {/* ============ 9. STORAGE ============ */}
      <h3 id='storage' className='text-2xl font-extrabold mt-10'>
        <HiOutlineCalendarDays className='inline mr-2' />
        Storage and Quality Preservation
      </h3>
      <p className='my-4'>
        Green coffee is hygroscopic. It absorbs moisture and odors from its environment, so proper storage directly affects cup quality and shelf life.
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Temperature:</span> Store at 60 to 70°F (15 to 21°C). Avoid heat sources and direct sunlight</li>
        <li><span className='font-bold'>Humidity:</span> Maintain 50 to 60% relative humidity. GrainPro or similar barrier liners inside jute bags help buffer humidity swings</li>
        <li><span className='font-bold'>Elevation:</span> Keep bags on pallets, off the ground, away from walls, with airflow between stacks</li>
        <li><span className='font-bold'>Pest monitoring:</span> Regular inspections for insects, especially if storing near other grains or agricultural products</li>
        <li><span className='font-bold'>FIFO rotation:</span> Use First In, First Out inventory management to maintain freshness</li>
        <li><span className='font-bold'>Shelf life:</span> Ethiopian specialty coffee maintains optimal quality for 6 to 12 months when stored properly. After 12 months, expect fading of floral and fruit notes, particularly in washed lots</li>
      </ul>

      <p className='my-4 text-sm'>
        If you lack warehouse capacity, several third-party green coffee storage facilities operate near major US ports (New York, Oakland, Houston). They offer climate-controlled environments and can break out partial-container lots for pickup.
      </p>

      {/* ============ 10. TIMELINE ============ */}
      <h3 id='timeline' className='text-2xl font-extrabold mt-10'>
        <HiOutlineCalendarDays className='inline mr-2' />
        Realistic Timeline: Contact to Warehouse
      </h3>
      <p className='my-4'>
        Plan for approximately <span className='font-bold'>10 to 14 weeks</span> from initial contact to green coffee in your US warehouse:
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200 space-y-3 text-sm'>
        <div>
          <h5 className='font-bold'>Weeks 1-2: Sourcing and Samples</h5>
          <p>Contact Ethio Coffee, request cupping samples of specific lots (e.g., Washed Yirgacheffe G1). Samples arrive via DHL in 5 to 7 business days. Cup, evaluate, and approve.</p>
        </div>
        <div>
          <h5 className='font-bold'>Week 3: Contract and Payment</h5>
          <p>Sign purchase contract specifying grade, origin, quantity, FOB price, and Incoterms. Pay 30% deposit via wire transfer. Remaining 70% due against Bill of Lading. See our <Link href='/ordering-info' className='text-amber-700 hover:underline'>ordering info</Link> for payment terms.</p>
        </div>
        <div>
          <h5 className='font-bold'>Weeks 4-5: Preparation and Container Stuffing</h5>
          <p>Coffee is milled, graded, and inspected at the <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX</Link> or through direct specialty channels. Bags are stuffed into containers at the Addis Ababa warehouse. Export documentation prepared.</p>
        </div>
        <div>
          <h5 className='font-bold'>Week 6: Inland Transport to Djibouti and Departure</h5>
          <p>Container trucked to Djibouti port (3-5 days). Loaded onto vessel. Bill of Lading issued. Final payment collected. ISF filed by your customs broker.</p>
        </div>
        <div>
          <h5 className='font-bold'>Weeks 7-10: Ocean Transit</h5>
          <p>25 to 40 days ocean freight depending on US port destination and routing.</p>
        </div>
        <div>
          <h5 className='font-bold'>Week 11: US Port Arrival and Customs</h5>
          <p>Container arrives. USDA inspection, CBP clearance, and release. Typically 2 to 3 business days.</p>
        </div>
        <div>
          <h5 className='font-bold'>Week 12: Drayage and Delivery</h5>
          <p>Trucking from port to your warehouse. Coffee in hand, ready for cupping, approval, and roasting.</p>
        </div>
      </div>

      {/* ============ 11. MISTAKES ============ */}
      <h3 id='mistakes' className='text-2xl font-extrabold mt-10'>
        Common Mistakes to Avoid
      </h3>

      <div className='space-y-4 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2'><HiOutlineXCircle className='inline mr-2 text-red-500' />Skipping the customs broker</h4>
          <p className='text-sm'><span className='font-bold'>Why it matters:</span> Incorrect ISF filing triggers a $5,000 penalty. Missing FDA Prior Notice delays clearance. The broker fee ($150-400) is insurance against far more expensive mistakes.</p>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2'><HiOutlineXCircle className='inline mr-2 text-red-500' />Not arranging logistics before ordering</h4>
          <p className='text-sm'><span className='font-bold'>Why it matters:</span> Your container arrives whether or not you have a warehouse, a broker, or a drayage provider ready. Set up your US-side logistics chain before placing your purchase order with the exporter.</p>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2'><HiOutlineXCircle className='inline mr-2 text-red-500' />Storing green coffee in uncontrolled environments</h4>
          <p className='text-sm'><span className='font-bold'>Why it matters:</span> Green coffee absorbs moisture and odors. A garage or unheated warehouse can ruin $100,000+ worth of specialty coffee in weeks. Invest in climate-controlled storage or use a third-party facility.</p>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2'><HiOutlineXCircle className='inline mr-2 text-red-500' />Ordering a single bag for testing</h4>
          <p className='text-sm'><span className='font-bold'>Why it matters:</span> Ocean freight economics make single-bag imports prohibitively expensive. Request cupping samples first (200-300g, shipped via DHL). Once approved, commit to at least 50 bags or join an LCL consolidation.</p>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2'><HiOutlineXCircle className='inline mr-2 text-red-500' />Assuming AGOA provides a cost advantage for green coffee</h4>
          <p className='text-sm'><span className='font-bold'>Why it matters:</span> Green coffee is already duty-free at MFN rates (0%). Ethiopia&apos;s AGOA suspension does not change the duty you pay on green beans. Basing cost projections on AGOA benefits that don&apos;t apply creates false expectations.</p>
        </div>
      </div>

      {/* ============ 12. RIGHT FOR YOU ============ */}
      <h3 id='right-for-you' className='text-2xl font-extrabold mt-10'>
        Is Direct Import Right for You?
      </h3>
      <p className='my-4'>
        Importing Ethiopian coffee directly from origin makes commercial sense if you meet several thresholds:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li>You roast <span className='font-bold'>1,000+ lbs per month</span> or more, enough volume to justify container-level purchasing</li>
        <li>You want <span className='font-bold'>better margins</span> than buying through a US-based green coffee importer/trader</li>
        <li>You seek <span className='font-bold'>origin relationships</span> for traceability, storytelling, and quality control at the source</li>
        <li>You can manage <span className='font-bold'>10 to 14 week lead times</span> and plan inventory accordingly</li>
        <li>You have <span className='font-bold'>storage capacity</span> or access to a third-party green coffee warehouse</li>
      </ul>

      <p className='my-4'>
        Smaller roasters (under 500 lbs/month) often start by purchasing from US-based importers who stock Ethiopian lots, then transition to direct import as their volume grows. A middle path: join an LCL consolidation through Ethio Coffee to start with 50 to 100 bags without committing to a full container.
      </p>

      {/* ============ 13. FAQ ============ */}
      <section id='faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900'>Frequently Asked Questions</h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Do I need a license to import Ethiopian coffee to the USA?</h4>
            <p className='text-sm text-gray-600'>No special import license is required for green coffee. You need a customs bond, an Importer of Record number (your EIN or SSN), and FDA Prior Notice filing for each shipment. A customs broker can manage all of these filings on your behalf.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the import duty on Ethiopian coffee in the United States?</h4>
            <p className='text-sm text-gray-600'>Green coffee (HTS 0901.11) enters the US duty-free at the MFN rate of 0%. This applies regardless of Ethiopia&apos;s AGOA suspension. Roasted coffee is also duty-free. Coffee extracts and concentrates may carry duties up to 8.5% depending on classification.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Is Ethiopian coffee still eligible for AGOA duty-free benefits?</h4>
            <p className='text-sm text-gray-600'>Ethiopia has been suspended from AGOA since January 2022. As of March 2026, reinstatement has not been confirmed. For green coffee importers, this has no practical impact because green coffee already enters at 0% duty. The suspension matters primarily for value-added products like coffee extracts.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How long does it take to ship Ethiopian coffee to the USA?</h4>
            <p className='text-sm text-gray-600'>Ocean freight from Djibouti to the US East Coast takes 25 to 35 days. West Coast and Gulf Coast shipments take 30 to 40 days. Add 1 to 2 weeks for inland transport within Ethiopia and port handling. Total from confirmed order to US warehouse is typically 10 to 14 weeks.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the minimum order quantity for importing Ethiopian coffee?</h4>
            <p className='text-sm text-gray-600'>A full 20ft container holds 300 to 320 bags (60 kg each). Smaller buyers can order as few as 50 bags through LCL (shared container) consolidation. Cupping samples (200-300g) are available before committing to a purchase. See our <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>MOQ guide</Link> for options.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How does the Brazilian coffee tariff affect Ethiopian coffee imports?</h4>
            <p className='text-sm text-gray-600'>Brazilian coffee currently faces a 50% US import tariff due to trade disputes. Ethiopian green coffee enters at 0% duty. This tariff differential makes Ethiopian specialty coffee significantly more competitive for US roasters comparing landed costs across origins.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What HTS code is used for green coffee imports?</h4>
            <p className='text-sm text-gray-600'>Green (unroasted) coffee that is not decaffeinated is classified under HTS code 0901.11. Decaffeinated green coffee falls under 0901.12. Both enter the US duty-free. You can verify rates at the US International Trade Commission tariff database.</p>
          </div>
        </div>
      </section>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Premium Ethiopian Coffee Direct from Origin</h4>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Import and Export PLC</span> provides Yirgacheffe, Sidamo, Guji, Harar, Limu, and Jimma origins with complete export documentation, competitive FOB pricing, and pre-shipment cupping samples. With over 30 years of sourcing heritage across Ethiopia&apos;s coffee regions, we handle the origin side so you can focus on roasting.
        </p>
        <p className='my-2'>
          Whether you are placing your first import order or scaling an existing Ethiopian coffee program, our team provides transparent pricing and responsive support.
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
        <div className='grid md:grid-cols-3 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Import Guides by Country</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/importing-ethiopian-coffee-to-canada-guide' className='text-amber-700 hover:underline'>Importing to Canada</Link></li>
              <li>• <Link href='/insights/importing-ethiopian-coffee-to-germany' className='text-amber-700 hover:underline'>Importing to Germany</Link></li>
              <li>• <Link href='/insights/importing-ethiopian-coffee-to-uk' className='text-amber-700 hover:underline'>Importing to UK</Link></li>
              <li>• <Link href='/insights/importing-ethiopian-coffee-to-japan' className='text-amber-700 hover:underline'>Importing to Japan</Link></li>
              <li>• <Link href='/insights/importing-ethiopian-coffee-to-south-korea' className='text-amber-700 hover:underline'>Importing to South Korea</Link></li>
              <li>• <Link href='/insights/importing-ethiopian-coffee-to-australia' className='text-amber-700 hover:underline'>Importing to Australia</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Trade and Logistics</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process Guide</Link></li>
              <li>• <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>Understanding ECX</Link></li>
              <li>• <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Minimum Order Quantities</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Landed Cost Guide</Link></li>
              <li>• <Link href='/insights/rising-ethiopian-coffee-prices-explained' className='text-amber-700 hover:underline'>Coffee Prices Explained</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality and Sourcing</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Heirloom Varieties</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Certifications Guide</Link></li>
              <li>• <Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline'>Green Coffee Packaging Guide</Link></li>
              <li>• <Link href='/coffee-grading-ethiopia' className='text-amber-700 hover:underline'>Ethiopian Coffee Grading</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter with over 30 years of sourcing heritage. This article covers the complete process of importing Ethiopian green coffee to the United States, including 2026 regulatory updates. Import regulations, AGOA status, and market conditions change; <Link href='/contact-us' className='underline'>contact us</Link> for current information before making purchasing decisions.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> {' · '}
          <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> {' · '}
          <Link href='/about' className='underline'>About Ethio Coffee</Link> {' · '}
          <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  );
}

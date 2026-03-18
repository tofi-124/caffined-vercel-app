import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { HiOutlineGlobeAlt, HiOutlineCurrencyDollar, HiOutlineShieldCheck, HiOutlineDocumentText, HiOutlineTruck, HiOutlineCube, HiOutlineCheckCircle, HiOutlineExclamationTriangle, HiOutlineBuildingOffice, HiOutlineLightBulb, HiOutlineClipboardDocumentList } from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function ImportingEthiopianCoffeeToIndia({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        FSSAI regulations, customs duties, shipping logistics from Djibouti, market insights, and sourcing guidance for Indian roasters and importers buying Ethiopian specialty green coffee
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          India&apos;s coffee imports more than doubled from $214M to $462.5M between 2020 and 2024, with specialty roasters increasingly sourcing Ethiopian Arabica for flavor diversity.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Importing Ethiopian coffee to India - FSSAI regulations customs duties and shipping guide for Indian roasters and importers'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Import Guide / India Market / Ethiopian Coffee Export</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />
          Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          India imported $462.5M of coffee in 2024. Green coffee under HS 0901.11 carries a Basic Customs Duty of 100%, plus 10% Social Welfare Surcharge on BCD, with IGST at 5%. Importing requires an FSSAI Central License, IEC from DGFT, and a Phytosanitary Certificate from Ethiopia. Shipping from Djibouti to Nhava Sheva (Mumbai) takes approximately 7 to 10 days across the Arabian Sea. India&apos;s high duty structure means only specialty-grade Ethiopian coffees make economic sense to import, but the margin on Grade 1 lots is strong.
        </p>
      </div>

      <p className='my-4'>
        India is both a major coffee-producing country and a rapidly growing importer. In 2024, India&apos;s coffee imports reached <span className='font-bold'>$462.5 million</span>, more than doubling from $214 million in 2020. While Indian farms produce substantial Robusta and some Arabica, the country&apos;s specialty roasters and third-wave cafes are increasingly sourcing African single-origin coffees that offer flavor profiles unavailable from domestic harvests. Ethiopian Arabica, with its floral Yirgacheffe, fruity Guji, and wine-toned Sidamo lots, fills a clear gap in India&apos;s specialty supply chain.
      </p>

      <p className='my-4'>
        For Indian roasters, cafe chains, and green coffee traders, importing Ethiopian coffee requires understanding FSSAI food safety licensing, customs duty structures under HS code 0901, and shipping routes from the Port of Djibouti across the Arabian Sea to Nhava Sheva (JNPT) or Chennai. This guide covers every step of the process: regulatory requirements, tariff rates, logistics, landed costs, market positioning, and how to work with an Ethiopian exporter to bring premium green coffee into the Indian market.
      </p>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineGlobeAlt className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Strategic Context:</span> India is the world&apos;s sixth-largest coffee producer, but over 70% of its output is Robusta. Indian specialty Arabica varieties (S795, Selection 9) cannot match the floral, citrus, and berry complexity of Ethiopian heirloom cultivars. This production gap creates sustained demand for imported Ethiopian specialty lots among India&apos;s growing network of third-wave roasters.</span>
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#in-market' className='text-amber-700 hover:underline'>1. Why India for Ethiopian Coffee</a></li>
          <li><a href='#in-regulations' className='text-amber-700 hover:underline'>2. Indian Coffee Import Regulations</a></li>
          <li><a href='#in-customs' className='text-amber-700 hover:underline'>3. Customs Procedures &amp; Duties</a></li>
          <li><a href='#in-shipping' className='text-amber-700 hover:underline'>4. Shipping Ethiopian Coffee to India</a></li>
          <li><a href='#in-costs' className='text-amber-700 hover:underline'>5. Landed Cost Breakdown</a></li>
          <li><a href='#in-specialty' className='text-amber-700 hover:underline'>6. Indian Specialty Coffee Market</a></li>
          <li><a href='#in-steps' className='text-amber-700 hover:underline'>7. How to Import: Step by Step</a></li>
          <li><a href='#in-working' className='text-amber-700 hover:underline'>8. Working with an Ethiopian Exporter</a></li>
          <li><a href='#in-faq' className='text-amber-700 hover:underline'>9. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* ========== SECTION 1: WHY INDIA ========== */}
      <h3 id='in-market' className='text-2xl font-extrabold mt-8'>
        Why India Is a Growing Market for Ethiopian Coffee
      </h3>

      <h4 className='font-bold text-xl mb-3 mt-6'>India&apos;s Coffee Market by the Numbers</h4>
      <p className='my-4'>
        India&apos;s domestic coffee consumption has accelerated sharply over the past decade, driven by urbanization, rising disposable incomes, and the expansion of cafe culture far beyond traditional filter-coffee markets in the south. The numbers make a strong case for Ethiopian exporters:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>$462.5 million in coffee imports (2024):</span> More than double the $214 million imported in 2020, showing steep year-over-year growth</li>
        <li><span className='font-bold'>Population of 1.4+ billion:</span> The world&apos;s largest population with coffee consumption per capita still well below global averages, indicating massive headroom for growth</li>
        <li><span className='font-bold'>Third-wave expansion:</span> Cities like Mumbai, Bengaluru, Delhi, Hyderabad, and Pune now host hundreds of specialty cafes and micro-roasters offering single-origin coffees</li>
        <li><span className='font-bold'>Young demographics:</span> Median age of 28.4 years; younger consumers are driving demand for specialty and single-origin coffees over traditional instant blends</li>
        <li><span className='font-bold'>Domestic production gap:</span> India produces roughly 350,000+ tonnes annually, but over 70% is Robusta; specialty Arabica roasters need imported origins for flavor diversity</li>
        <li><span className='font-bold'>Cafe chain growth:</span> Third-wave chains like Blue Tokai, Subko, and Corridor Seven are scaling nationally, creating consistent demand for high-quality green coffee imports</li>
      </ul>

      <h4 className='font-bold text-xl mb-3 mt-6'>The Ethiopia-India Coffee Connection</h4>
      <p className='my-4'>
        The commercial relationship between Ethiopian coffee and the Indian market has a distinct logic. India produces Arabica in Karnataka, Kerala, and Tamil Nadu, but Indian Arabica varieties (primarily S795, Selection 9, and Cauvery) have a profile that differs fundamentally from Ethiopian heirloom cultivars. Ethiopian Yirgacheffe delivers jasmine, bergamot, and lemon notes that Indian Arabica cannot replicate. Guji naturals offer blueberry and tropical fruit complexity. Sidamo provides wine-like depth. For Indian specialty roasters building diverse menus, Ethiopian origins fill a flavor category that no domestic or other single-origin source covers as well.
      </p>
      <p className='my-4'>
        India&apos;s deep familiarity with coffee as both a producer and consumer nation means buyers understand quality grading, processing methods, and green coffee handling. Ethiopian exporters find that Indian buyers ask informed questions about lot traceability, screen size, and cupping scores, making for efficient commercial relationships built on shared industry knowledge.
      </p>

      {/* ========== SECTION 2: REGULATIONS ========== */}
      <h3 id='in-regulations' className='text-2xl font-extrabold mt-8'>
        Indian Coffee Import Regulations
      </h3>
      <p className='my-4'>
        India&apos;s food import framework is managed by the <span className='font-bold'>Food Safety and Standards Authority of India (FSSAI)</span> under the <span className='font-bold'>Food Safety and Standards Act, 2006</span>. Coffee imports also fall under the purview of the <span className='font-bold'>Directorate General of Foreign Trade (DGFT)</span> and <span className='font-bold'>Indian Customs</span>. Here are the key regulatory requirements for importing green coffee:
      </p>

      <div className='space-y-6 my-8'>
        <div className='bg-amber-50 p-6 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-xl mb-3 text-dark flex items-center gap-2'>
            <HiOutlineShieldCheck className='text-2xl' />
            FSSAI (Food Safety and Standards Authority of India)
          </h4>
          <p className='text-sm mb-3'>FSSAI regulates all food imports into India. For coffee, the following are mandatory:</p>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>FSSAI Central License:</span> Required for all food importers; obtained through the FoSCoS (Food Safety Compliance System) online portal. Validity: 1 to 5 years depending on application</li>
            <li><span className='font-bold'>Food Import Clearance:</span> Each shipment must clear FSSAI inspection at the port of entry. FSSAI may sample incoming consignments for testing</li>
            <li><span className='font-bold'>Contaminant Limits:</span> Maximum levels for aflatoxin (total: 15 µg/kg, B1: 10 µg/kg for coffee), ochratoxin A, pesticide residues, and heavy metals as per FSSAI regulations</li>
            <li><span className='font-bold'>Labeling Requirements:</span> Bulk green coffee must display country of origin, grade, net weight, lot number, and FSSAI license number on packaging</li>
            <li><span className='font-bold'>No GM Declaration:</span> A non-GM (genetically modified organisms) declaration may be required for processed coffee products</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-xl mb-3 text-dark flex items-center gap-2'>
            <HiOutlineDocumentText className='text-2xl' />
            DGFT and Plant Quarantine Requirements
          </h4>
          <p className='text-sm mb-3'>The Directorate General of Foreign Trade and plant quarantine authorities set additional requirements:</p>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>IEC (Importer Exporter Code):</span> A 10-digit code issued by DGFT, mandatory for all importers. Application through the DGFT online system; typically issued within 3 to 5 business days</li>
            <li><span className='font-bold'>Plant Quarantine Permit:</span> Required per the 2024 Sixteenth Amendment to the Plant Quarantine Order. Must be obtained before shipment arrival</li>
            <li><span className='font-bold'>Phytosanitary Certificate:</span> An IPPC-standard phytosanitary certificate issued by Ethiopia&apos;s National Plant Health Organization is mandatory for every shipment</li>
            <li><span className='font-bold'>Fumigation Certificate:</span> May be required depending on the pest risk assessment for the specific origin country and commodity</li>
            <li><span className='font-bold'>Bill of Entry:</span> Filed electronically through the Indian Customs EDI (Electronic Data Interchange) system, known as ICEGATE</li>
          </ul>
        </div>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium'><span className='font-bold'>Practical Note:</span> India&apos;s import regulations are detailed but manageable with proper preparation. Ensure your FSSAI Central License is active before placing orders, obtain your Plant Quarantine Permit in advance, and work with an experienced customs broker at your port of entry. Your Ethiopian exporter should provide a pre-shipment quality report showing moisture content, screen size, defect count, and a Certificate of Analysis (CoA). Well-documented shipments with clean phytosanitary certificates typically clear inspection without delays.</p>
      </div>

      {/* ========== SECTION 3: CUSTOMS & DUTIES ========== */}
      <h3 id='in-customs' className='text-2xl font-extrabold mt-8'>
        <HiOutlineCurrencyDollar className='inline mr-2' />
        Customs Procedures and Duties
      </h3>

      <h4 className='font-bold text-xl mb-3 mt-6'>HS Code Classification</h4>
      <p className='my-4'>
        Green coffee is classified under India&apos;s customs tariff schedule as follows:
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='border-b-2 border-gray-300'>
              <th className='text-left py-2 pr-4'>HS Code</th>
              <th className='text-left py-2 pr-4'>Description</th>
              <th className='text-left py-2'>BCD Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='py-2 font-bold'>0901.11.10</td>
              <td className='py-2'>Arabica plantation coffee, not roasted, not decaffeinated</td>
              <td className='py-2'>100%</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>0901.11.20</td>
              <td className='py-2'>Arabica cherry coffee, not roasted, not decaffeinated</td>
              <td className='py-2'>100%</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>0901.11.90</td>
              <td className='py-2'>Other coffee, not roasted, not decaffeinated</td>
              <td className='py-2'>100%</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>0901.12.00</td>
              <td className='py-2'>Coffee, not roasted, decaffeinated</td>
              <td className='py-2'>100%</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>0901.21.00</td>
              <td className='py-2'>Roasted coffee, not decaffeinated</td>
              <td className='py-2'>100%</td>
            </tr>
          </tbody>
        </table>
        <p className='text-sm mt-4 text-gray-600'><span className='font-bold'>Important:</span> India applies a 100% Basic Customs Duty (BCD) on green coffee imports. This is significantly higher than most other importing countries and is a critical factor in landed cost calculations.</p>
      </div>

      <h4 className='font-bold text-xl mb-3 mt-6'>Complete Duty and Tax Structure</h4>
      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3'>India Coffee Import Tax Structure</h4>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='border-b-2 border-gray-300'>
              <th className='text-left py-2 pr-4'>Charge Type</th>
              <th className='text-left py-2 pr-4'>Rate</th>
              <th className='text-left py-2'>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Basic Customs Duty (BCD)</td>
              <td className='py-2'>100%</td>
              <td className='py-2 text-gray-600'>Applied on assessable value (CIF); the primary import levy</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Social Welfare Surcharge (SWS)</td>
              <td className='py-2'>10% on BCD</td>
              <td className='py-2 text-gray-600'>Calculated as 10% of the BCD amount</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>IGST (Integrated GST)</td>
              <td className='py-2'>5%</td>
              <td className='py-2 text-gray-600'>Applied on CIF + BCD + SWS; input tax credit available for GST-registered importers</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Agriculture Infrastructure Development Cess</td>
              <td className='py-2'>Varies</td>
              <td className='py-2 text-gray-600'>Check current rate; may apply to certain agricultural imports</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Customs Broker Fee</td>
              <td className='py-2'>~₹15,000 - ₹30,000</td>
              <td className='py-2 text-gray-600'>Per shipment; varies by broker and port</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Port Handling / THC</td>
              <td className='py-2'>~₹25,000 - ₹50,000</td>
              <td className='py-2 text-gray-600'>Terminal handling charges at JNPT or Chennai</td>
            </tr>
          </tbody>
        </table>
        <p className='text-sm mt-4 text-gray-600'><span className='font-bold'>Note:</span> The 100% BCD makes Indian coffee imports among the most heavily taxed globally. However, specialty Ethiopian coffees command prices at retail that absorb this duty. IGST at 5% is recoverable as input tax credit for GST-registered businesses.</p>
      </div>

      <h4 className='font-bold text-xl mb-3 mt-6'>Customs Documentation Checklist</h4>
      <p className='my-4'>
        The following documents are required for customs clearance at Indian ports:
      </p>
      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <ul className='space-y-2 list-none'>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-lg flex-shrink-0 mt-0.5 text-green-700' />
            <span><span className='font-bold'>Bill of Entry:</span> Filed electronically through ICEGATE; the primary customs declaration document</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-lg flex-shrink-0 mt-0.5 text-green-700' />
            <span><span className='font-bold'>Commercial Invoice:</span> Showing FOB/CIF value, quantity, grade, and origin details</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-lg flex-shrink-0 mt-0.5 text-green-700' />
            <span><span className='font-bold'>Bill of Lading (B/L):</span> Original ocean bill of lading or sea waybill</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-lg flex-shrink-0 mt-0.5 text-green-700' />
            <span><span className='font-bold'>Certificate of Origin:</span> Issued by the Ethiopian Chamber of Commerce or ECX</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-lg flex-shrink-0 mt-0.5 text-green-700' />
            <span><span className='font-bold'>Phytosanitary Certificate:</span> IPPC-compliant certificate from Ethiopia&apos;s plant protection authority</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-lg flex-shrink-0 mt-0.5 text-green-700' />
            <span><span className='font-bold'>Plant Quarantine Permit:</span> Obtained in advance from India&apos;s Plant Quarantine authority</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-lg flex-shrink-0 mt-0.5 text-green-700' />
            <span><span className='font-bold'>FSSAI Import License:</span> Valid FSSAI Central License number displayed on all import documentation</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-lg flex-shrink-0 mt-0.5 text-green-700' />
            <span><span className='font-bold'>Certificate of Analysis (CoA):</span> From the manufacturer or an accredited laboratory showing quality parameters</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-lg flex-shrink-0 mt-0.5 text-green-700' />
            <span><span className='font-bold'>Packing List:</span> Bag count, net and gross weight per bag, total shipment weight</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-lg flex-shrink-0 mt-0.5 text-green-700' />
            <span><span className='font-bold'>Insurance Certificate:</span> Marine cargo insurance covering CIF value</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-lg flex-shrink-0 mt-0.5 text-green-700' />
            <span><span className='font-bold'>ICO Certificate of Origin:</span> International Coffee Organization certificate (Form O)</span>
          </li>
        </ul>
      </div>

      {/* ========== SECTION 4: SHIPPING ========== */}
      <h3 id='in-shipping' className='text-2xl font-extrabold mt-8'>
        <HiOutlineTruck className='inline mr-2' />
        Shipping Ethiopian Coffee to India
      </h3>

      <h4 className='font-bold text-xl mb-3 mt-6'>The Arabian Sea Advantage</h4>
      <p className='my-4'>
        Geography works in Ethiopia&apos;s favor when shipping to India. Coffee leaves Ethiopia through the <span className='font-bold'>Port of Djibouti</span>, enters the Gulf of Aden, and crosses the Arabian Sea directly to India&apos;s western ports. The transit takes approximately 7 to 10 days, considerably shorter than routes from Central and South American origins (30 to 40 days via the Atlantic and Suez Canal or around Africa). This speed advantage means fresher arrivals and faster inventory turns for Indian buyers.
      </p>

      <h4 className='font-bold text-xl mb-3 mt-6'>Key Indian Ports for Coffee</h4>
      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='border-b-2 border-gray-300'>
              <th className='text-left py-2 pr-4'>Port</th>
              <th className='text-left py-2 pr-4'>Location</th>
              <th className='text-left py-2 pr-4'>Transit from Djibouti</th>
              <th className='text-left py-2'>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Nhava Sheva (JNPT)</td>
              <td className='py-2'>Mumbai, Maharashtra</td>
              <td className='py-2'>7-10 days</td>
              <td className='py-2 text-gray-600'>India&apos;s largest container port; serves Mumbai, Pune, and western India</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Mundra</td>
              <td className='py-2'>Gujarat</td>
              <td className='py-2'>7-9 days</td>
              <td className='py-2 text-gray-600'>India&apos;s largest private port by cargo volume; growing container terminal</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Chennai</td>
              <td className='py-2'>Tamil Nadu</td>
              <td className='py-2'>8-12 days</td>
              <td className='py-2 text-gray-600'>Serves southern India; well-connected to Bengaluru&apos;s roasters</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Kochi (Cochin)</td>
              <td className='py-2'>Kerala</td>
              <td className='py-2'>7-9 days</td>
              <td className='py-2 text-gray-600'>Deep-water port with established coffee handling infrastructure</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className='font-bold text-xl mb-3 mt-6'>Container Options</h4>
      <p className='my-4'>
        A standard 20-foot container holds approximately <span className='font-bold'>275 to 300 bags</span> of 60 kg green coffee (16.5 to 18 metric tons). For smaller quantities, LCL (Less than Container Load) consolidation is available through freight forwarders operating on the Djibouti-to-India route, though per-unit costs are higher. Given India&apos;s high duty structure, most importers prefer full containers to minimize per-kilogram logistics costs.
      </p>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineTruck className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Shipping Tip:</span> Request CFR Nhava Sheva or CFR Chennai terms from your Ethiopian exporter. Under CFR (Cost and Freight), the exporter arranges and pays for ocean freight, simplifying logistics on your end. You handle insurance and customs clearance upon arrival. Given India&apos;s proximity to the Horn of Africa, freight rates on this route are competitive.</span>
        </p>
      </div>

      {/* ========== SECTION 5: COST BREAKDOWN ========== */}
      <h3 id='in-costs' className='text-2xl font-extrabold mt-8'>
        <HiOutlineCurrencyDollar className='inline mr-2' />
        Landed Cost Breakdown: Djibouti to Indian Warehouse
      </h3>
      <p className='my-4'>
        The following example illustrates approximate costs for importing one 20-foot container (approximately 300 bags / 18,000 kg) of Ethiopian Grade 1 washed Yirgacheffe coffee to Nhava Sheva (JNPT), Mumbai:
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-3'>Cost Example: 20ft Container of G1 Yirgacheffe to Nhava Sheva</h4>
        <table className='w-full text-sm'>
          <tbody>
            <tr className='border-b'>
              <td className='py-2 font-bold'>FOB Djibouti (18,000 kg at ~$5.50/kg)</td>
              <td className='py-2 text-right'>$99,000</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Ocean Freight (Djibouti to Nhava Sheva)</td>
              <td className='py-2 text-right'>$1,800 - $2,500</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Marine Insurance (0.3% of CIF)</td>
              <td className='py-2 text-right'>$300 - $310</td>
            </tr>
            <tr className='border-b bg-gray-100'>
              <td className='py-2 font-bold'>CIF Value (approx.)</td>
              <td className='py-2 text-right font-bold'>~$101,100 - $101,810</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Basic Customs Duty (100% of CIF)</td>
              <td className='py-2 text-right'>~$101,100 - $101,810</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Social Welfare Surcharge (10% of BCD)</td>
              <td className='py-2 text-right'>~$10,110 - $10,181</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>IGST (5% on CIF + BCD + SWS)</td>
              <td className='py-2 text-right'>~$10,615 - $10,690</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Port Handling &amp; THC (Nhava Sheva)</td>
              <td className='py-2 text-right'>$300 - $600</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Customs Broker Fee</td>
              <td className='py-2 text-right'>$180 - $360</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Inland Transport (JNPT to warehouse)</td>
              <td className='py-2 text-right'>$200 - $600</td>
            </tr>
            <tr className='bg-amber-100'>
              <td className='py-2 font-bold'>Total Landed Cost (before IGST credit)</td>
              <td className='py-2 text-right font-bold'>~$223,605 - $226,051</td>
            </tr>
          </tbody>
        </table>
        <p className='text-sm mt-4 text-gray-600'><span className='font-bold'>Effective cost per kg:</span> ~$12.40 to $12.55/kg landed in warehouse before IGST credit. After claiming IGST input tax credit, the effective cost drops to approximately $11.81 to $11.96/kg. Rates vary by season, shipping line, and volume. The 100% BCD roughly doubles the cost versus FOB price.</p>
      </div>

      <h4 className='font-bold text-xl mb-3 mt-6'>Managing the High-Duty Environment</h4>
      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Focus on specialty grades:</span> At 100% BCD, it only makes economic sense to import coffees that Indian farms cannot produce. Ethiopian Grade 1 washed Yirgacheffe and Guji naturals with cupping scores above 85 command retail prices in India that comfortably absorb the duty</li>
        <li><span className='font-bold'>Forward contracts:</span> Lock in prices with your Ethiopian exporter 3 to 6 months ahead to manage cost predictability in a high-tariff environment</li>
        <li><span className='font-bold'>GST input credit:</span> The 5% IGST paid at import is fully recoverable as input tax credit for GST-registered businesses, reducing effective landed cost</li>
        <li><span className='font-bold'>Bonded warehouse:</span> Store imported coffee in a customs bonded warehouse to defer duty payment until the goods are released for domestic sale</li>
        <li><span className='font-bold'>Volume optimization:</span> Full 20-foot containers minimize per-kg freight and handling costs; partner with other Indian roasters to consolidate orders</li>
      </ul>

      {/* ========== SECTION 6: SPECIALTY MARKET ========== */}
      <h3 id='in-specialty' className='text-2xl font-extrabold mt-8'>
        Indian Specialty Coffee Market Opportunity
      </h3>

      <h4 className='font-bold text-xl mb-3 mt-6'>Third-Wave Growth Across Indian Cities</h4>
      <p className='my-4'>
        India&apos;s specialty coffee sector has expanded rapidly since the mid-2010s. Bengaluru, India&apos;s coffee capital and home to many micro-roasters, leads the movement. Mumbai&apos;s specialty scene has matured significantly, with neighborhoods like Bandra, Lower Parel, and Colaba hosting dozens of single-origin-focused cafes. Delhi-NCR, Hyderabad, Pune, and Chennai are all developing growing specialty coffee communities. Chains like Blue Tokai Coffee Roasters, Subko Coffee Roasters, Corridor Seven Coffee Roasters, and KC Roasters have demonstrated that Indian consumers are willing to pay premium prices for traceable, high-quality single-origin coffees.
      </p>
      <p className='my-4'>
        For Ethiopian coffee specifically, India&apos;s specialty market creates several distinct demand segments:
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='border-b-2 border-gray-300'>
              <th className='text-left py-2 pr-4'>Segment</th>
              <th className='text-left py-2 pr-4'>Recommended Ethiopian Origins</th>
              <th className='text-left py-2'>Why It Works in India</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Third-wave / pour-over cafes</td>
              <td className='py-2'>Yirgacheffe G1 washed, Guji G1 washed</td>
              <td className='py-2 text-gray-600'>Floral and citrus complexity that Indian Arabica cannot replicate; ideal for filter brewing</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Espresso-focused roasters</td>
              <td className='py-2'>Sidamo G2 washed, Guji natural</td>
              <td className='py-2 text-gray-600'>Balanced body with fruit sweetness; adds depth to blends or shines as single-origin espresso</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Micro-roasters / subscription brands</td>
              <td className='py-2'>Yirgacheffe natural, Guji natural, Sidamo G1</td>
              <td className='py-2 text-gray-600'>Origin story and exotic flavor profile drive subscription demand; Ethiopian lots are top sellers</td>
            </tr>
            <tr>
              <td className='py-2 font-bold'>Premium instant / RTD producers</td>
              <td className='py-2'>Sidamo G3, Limu G2/G3</td>
              <td className='py-2 text-gray-600'>Growing premium instant segment wants quality single-origin bases; Ethiopian beans add marketing differentiation</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Indian consumers in the specialty segment are paying ₹600 to ₹1,500+ for a 250g bag of single-origin Ethiopian roasted coffee at retail. For roasters buying green at landed costs of around ₹1,000/kg (after duty), the margin between landed green cost and retail price justifies the import investment, particularly for Grade 1 lots with strong cupping profiles.
      </p>

      {/* ========== SECTION 7: STEP-BY-STEP ========== */}
      <h3 id='in-steps' className='text-2xl font-extrabold mt-8'>
        <HiOutlineCube className='inline mr-2' />
        How to Import Ethiopian Coffee to India: Step by Step
      </h3>
      <p className='my-4'>
        Here is the typical workflow for importing Ethiopian green coffee into India:
      </p>

      <ol className='my-6 list-decimal ml-5 space-y-4'>
        <li>
          <span className='font-bold'>Obtain an IEC (Importer Exporter Code)</span>
          <p className='text-sm mt-1'>Apply through the DGFT online portal. The IEC is a 10-digit code mandatory for all importers. Processing time: typically 3 to 5 business days. No renewal required; the code is valid for the life of the business.</p>
        </li>
        <li>
          <span className='font-bold'>Get an FSSAI Central License</span>
          <p className='text-sm mt-1'>Apply through the FoSCoS portal. All food importers in India must hold a valid FSSAI Central License. Provide business registration documents, import details, and pay the applicable fee. License validity: 1 to 5 years.</p>
        </li>
        <li>
          <span className='font-bold'>Register on ICEGATE</span>
          <p className='text-sm mt-1'>Register your IEC on the Indian Customs ICEGATE portal. This enables electronic filing of Bills of Entry and customs declarations. Your customs broker can assist with the registration.</p>
        </li>
        <li>
          <span className='font-bold'>Source Coffee and Sign Contract</span>
          <p className='text-sm mt-1'>Request pre-shipment samples from your Ethiopian exporter. Evaluate quality through cupping, agree on grade, volume, price, and Incoterms (FOB Djibouti or CFR Indian port). Sign a sales contract specifying all terms.</p>
        </li>
        <li>
          <span className='font-bold'>Arrange Payment</span>
          <p className='text-sm mt-1'>Common methods include Letter of Credit (L/C), Cash Against Documents (CAD), or Telegraphic Transfer (T/T). L/C through an Indian bank is standard for first transactions. RBI regulations apply to all foreign exchange payments.</p>
        </li>
        <li>
          <span className='font-bold'>Obtain Plant Quarantine Permit</span>
          <p className='text-sm mt-1'>Apply to the Plant Quarantine authority at your designated port of entry before the shipment arrives. Per the 2024 amendment, this permit is mandatory for all agricultural imports.</p>
        </li>
        <li>
          <span className='font-bold'>Ship from Djibouti</span>
          <p className='text-sm mt-1'>Your exporter arranges inland transport from Addis Ababa to Port of Djibouti and loads the container. Ocean transit to Nhava Sheva or Chennai: 7 to 10 days across the Arabian Sea.</p>
        </li>
        <li>
          <span className='font-bold'>File Bill of Entry and Clear Customs</span>
          <p className='text-sm mt-1'>Your customs broker files the Bill of Entry electronically through ICEGATE along with all supporting documents. Pay the applicable BCD (100%), SWS (10% of BCD), and IGST (5%). FSSAI may inspect and sample the shipment.</p>
        </li>
        <li>
          <span className='font-bold'>Clear Plant Quarantine and FSSAI Inspection</span>
          <p className='text-sm mt-1'>Present the Phytosanitary Certificate and Plant Quarantine Permit. FSSAI officials may draw samples for laboratory testing. Compliant shipments with clean documentation typically clear within 3 to 7 business days.</p>
        </li>
        <li>
          <span className='font-bold'>Take Delivery</span>
          <p className='text-sm mt-1'>Once customs and FSSAI clearance is granted, arrange inland transport to your warehouse or roastery. Your coffee is ready for roasting and sale in the Indian market.</p>
        </li>
      </ol>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineExclamationTriangle className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Timeline:</span> From contract signing to coffee in your Indian warehouse, expect approximately 5 to 8 weeks. This includes 1 to 2 weeks for export preparation in Ethiopia, 7 to 10 days ocean transit, and 5 to 14 days for customs clearance including FSSAI inspection. First-time imports may take longer as you establish your documentation workflow and FSSAI processes.</span>
        </p>
      </div>

      {/* ========== SECTION 8: WORKING WITH EXPORTER ========== */}
      <h3 id='in-working' className='text-2xl font-extrabold mt-8'>
        <HiOutlineBuildingOffice className='inline mr-2' />
        Working with an Ethiopian Exporter
      </h3>
      <p className='my-4'>
        A reliable Ethiopian coffee exporter handles the complexity on the origin side so you can focus on your Indian market. <span className='font-bold'>Ethio Coffee Import and Export PLC</span> provides the following for Indian buyers:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Pre-shipment samples:</span> Cupping-ready samples of available lots before you commit to a purchase</li>
        <li><span className='font-bold'>Complete export documentation:</span> Commercial invoice, bill of lading, certificate of origin, phytosanitary certificate, ICO Form O, Certificate of Analysis, and quality/weight certificates</li>
        <li><span className='font-bold'>Flexible Incoterms:</span> FOB Djibouti or CFR to Nhava Sheva, Chennai, Mundra, or Kochi</li>
        <li><span className='font-bold'>Quality consistency:</span> Three decades of trusted sourcing relationships with cooperatives and washing stations across Yirgacheffe, Sidamo, Guji, Harar, Limu, and Jimma</li>
        <li><span className='font-bold'>Contract flexibility:</span> Spot, forward, and fixed-price contracts to match your purchasing strategy</li>
        <li><span className='font-bold'>India-ready documentation:</span> We understand FSSAI requirements and structure every shipment with the Certificate of Analysis and documentation that Indian customs and food safety authorities require</li>
      </ul>

      <p className='my-4'>
        With an office and warehouse in Addis Ababa and origin-connected sourcing heritage built over 30 years, Ethio Coffee Export sources from the cooperatives, washing stations, and farming communities that produce some of Ethiopia&apos;s finest lots. We understand the documentation Indian customs requires and structure every shipment for efficient clearance. For first-time buyers and those scaling their Ethiopian coffee imports to India, our team is ready to help.
      </p>

      {/* ========== SECTION 9: FAQ ========== */}
      <section id='in-faq' className='my-10'>
        <div className='bg-gray-50 rounded-xl p-8 border border-gray-200'>
          <h3 className='text-2xl font-extrabold mb-6'>Frequently Asked Questions</h3>

          <div className='space-y-6'>
            <div>
              <h4 className='font-bold text-lg'>What is the import duty on green coffee in India?</h4>
              <p className='my-2 text-sm'>
                India applies a 100% Basic Customs Duty (BCD) on unroasted green coffee under HS code 0901.11. On top of this, a 10% Social Welfare Surcharge is levied on the BCD amount, and IGST at 5% is applied on the combined value. The IGST is recoverable as input tax credit for GST-registered importers. This makes India one of the highest-duty coffee import markets globally.
              </p>
            </div>

            <div>
              <h4 className='font-bold text-lg'>What licenses do I need to import coffee to India?</h4>
              <p className='my-2 text-sm'>
                You need three key authorizations: an IEC (Importer Exporter Code) from DGFT, an FSSAI Central License obtained through the FoSCoS portal, and registration on ICEGATE for electronic customs filing. Additionally, a Plant Quarantine Permit must be obtained for each shipment from the designated port&apos;s quarantine authority.
              </p>
            </div>

            <div>
              <h4 className='font-bold text-lg'>How long does shipping from Ethiopia to India take?</h4>
              <p className='my-2 text-sm'>
                Ocean transit from the Port of Djibouti to Indian ports (Nhava Sheva, Mundra, Chennai, or Kochi) takes 7 to 10 days across the Arabian Sea. Total time from contract signing to warehouse delivery is typically 5 to 8 weeks, including export preparation, transit, and customs/FSSAI clearance.
              </p>
            </div>

            <div>
              <h4 className='font-bold text-lg'>Why import Ethiopian coffee when India produces its own?</h4>
              <p className='my-2 text-sm'>
                India produces primarily Robusta (over 70% of output) and some Arabica varieties like S795 and Selection 9. Ethiopian heirloom Arabica cultivars deliver floral, citrus, and berry profiles that Indian varieties cannot replicate. Specialty roasters need Ethiopian origins to offer their customers the flavor diversity that drives premium pricing and subscription demand.
              </p>
            </div>

            <div>
              <h4 className='font-bold text-lg'>Is it economically viable given the 100% customs duty?</h4>
              <p className='my-2 text-sm'>
                Yes, for specialty grades. Ethiopian Grade 1 Yirgacheffe or Guji with cupping scores above 85 commands ₹600-1,500+ per 250g at retail in India. At landed costs of approximately ₹1,000/kg after duty, the roaster margin is healthy for premium single-origin offerings. The duty makes commercial-grade imports unviable, but specialty Ethiopian coffee earns the premium to absorb it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='text-xl font-bold mb-2'>Source Premium Ethiopian Coffee Direct from Origin</h3>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Import and Export PLC</span>, a leading Ethiopian coffee exporter, supplies Indian roasters and importers with traceable Ethiopian green coffee from Yirgacheffe, Sidamo, Guji, Harar, Limu, and Jimma. Request samples, get current pricing, or discuss your first shipment with our team.
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

      {/* ========== RELATED ARTICLES ========== */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-3 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Asia &amp; Middle East Import Guides</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-japan' className='text-amber-700 hover:underline'>Importing to Japan</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-south-korea' className='text-amber-700 hover:underline'>Importing to South Korea</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-saudi-arabia' className='text-amber-700 hover:underline'>Importing to Saudi Arabia</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-uae' className='text-amber-700 hover:underline'>Importing to UAE</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Trade &amp; Logistics</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Contracts &amp; Payment Terms</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Landed Cost Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Export Process Guide</Link></li>
              <li>&bull; <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Minimum Order Quantities</Link></li>
              <li>&bull; <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline'>Storage &amp; Freight Logistics</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality &amp; Sourcing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Heirloom Varieties</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Certifications Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* ========== FOOTER ========== */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> A complete guide to import Ethiopian coffee to India, including FSSAI regulations, customs duties (100% BCD), Arabian Sea shipping logistics from Djibouti to Nhava Sheva and Chennai, landed cost analysis, and market positioning for Indian roasters and importers. Published by Ethio Coffee Import and Export PLC. For current pricing, regulations, and shipping schedules, contact our team directly.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot; <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> &middot; <Link href='/about' className='underline'>About Ethio Coffee</Link> &middot; <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  );
}

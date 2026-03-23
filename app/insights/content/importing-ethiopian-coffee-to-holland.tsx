import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { HiOutlineGlobeAlt, HiOutlineCurrencyDollar, HiOutlineShieldCheck, HiOutlineDocumentText, HiOutlineTruck, HiOutlineCheckCircle, HiOutlineBuildingOffice, HiOutlineArrowTrendingUp, HiOutlineClock, HiOutlineExclamationTriangle, HiOutlineChartBar, HiOutlineScale } from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function ImportingEthiopianCoffeeToHolland({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Rotterdam logistics, Dutch customs, VAT strategies, EUDR compliance and Benelux distribution for Ethiopian green coffee imports
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Insights from Ethiopian coffee sourcing and the specialty coffee industry.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian green coffee beans arriving at Rotterdam port for import into the Netherlands'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-2'>Key Takeaway</p>
        <p>
          The Netherlands imported 222,400 tonnes of green coffee in 2024, making it the EU&apos;s sixth largest importer. Rotterdam offers zero import duty under GSP+ for Ethiopian coffee, no coffee excise tax (unlike Germany), 9% reduced VAT with deferral options, and bonded storage that simplifies distribution across the Benelux and wider EU.
        </p>
      </div>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Import Guide / Netherlands &amp; EU Market / Ethiopian Coffee Export</span>
      </div>

      <p className='my-4'>
        Rotterdam processed more green coffee in 2024 than any year prior, with imports growing an average of 3.6% annually since 2015. For importers of Ethiopian coffee, the Netherlands combines duty-free access, efficient customs clearance, and a vibrant specialty market into a single entry point for European distribution. This guide covers every step from regulations to landed cost, updated for 2026 with current EUDR timelines and market data.
      </p>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineGlobeAlt className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Quick Take:</span> Ethiopian green coffee (HS 0901.11) enters the Netherlands at 0% import duty under GSP+. Dutch VAT is 9% on food products, recoverable for registered businesses. Frequent importers can apply for an Article 23 permit to defer VAT entirely at the border. The Netherlands does not levy a coffee excise tax.</span>
        </p>
        <p className='text-sm mt-3'>
          Regulated by <a href='https://www.douane.nl/en/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>Dutch Customs (Douane)</a> and <a href='https://english.nvwa.nl/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>NVWA</a>. EU contaminant limits set under <a href='https://food.ec.europa.eu/safety/chemical-safety/contaminants/legislation_en' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>EU food safety legislation</a>.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-lg font-bold mb-3'>In This Guide</h3>
        <div className='grid md:grid-cols-2 gap-2'>
          <ol className='list-decimal ml-5 space-y-1 text-sm'>
            <li><a href='#why-netherlands' className='text-amber-700 hover:underline'>Why Import via the Netherlands?</a></li>
            <li><a href='#market-snapshot' className='text-amber-700 hover:underline'>Dutch Coffee Market Snapshot</a></li>
            <li><a href='#regulations' className='text-amber-700 hover:underline'>EU &amp; Dutch Import Regulations</a></li>
            <li><a href='#eudr' className='text-amber-700 hover:underline'>EUDR Compliance for Coffee</a></li>
            <li><a href='#costs' className='text-amber-700 hover:underline'>Import Duties, VAT &amp; Landed Costs</a></li>
            <li><a href='#shipping' className='text-amber-700 hover:underline'>Shipping Routes &amp; Port Logistics</a></li>
            <li><a href='#documentation' className='text-amber-700 hover:underline'>Required Documentation</a></li>
          </ol>
          <ol start={8} className='list-decimal ml-5 space-y-1 text-sm'>
            <li><a href='#customs' className='text-amber-700 hover:underline'>Dutch Customs Clearance Process</a></li>
            <li><a href='#registration' className='text-amber-700 hover:underline'>Business Registration &amp; EORI</a></li>
            <li><a href='#storage' className='text-amber-700 hover:underline'>Storage &amp; Quality Management</a></li>
            <li><a href='#certifications' className='text-amber-700 hover:underline'>Certifications &amp; Sustainability</a></li>
            <li><a href='#working-with-us' className='text-amber-700 hover:underline'>Working with Ethio Coffee Export</a></li>
            <li><a href='#timeline' className='text-amber-700 hover:underline'>Real-World Timeline</a></li>
            <li><a href='#challenges' className='text-amber-700 hover:underline'>Common Challenges &amp; Solutions</a></li>
          </ol>
        </div>
      </div>

      {/* SECTION 1: WHY NETHERLANDS */}
      <h3 id='why-netherlands' className='text-2xl font-extrabold mt-8'>
        Why Import Ethiopian Coffee via the Netherlands?
      </h3>
      <p className='my-4'>
        Importers across Europe route Ethiopian coffee through Rotterdam for six operational reasons:
      </p>
      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Zero import duty:</span> Ethiopian green coffee enters at 0% under the EU Generalised Scheme of Preferences (GSP+). A Form A certificate of origin is required.</li>
        <li><span className='font-bold'>No coffee excise tax:</span> Unlike Germany&apos;s Kaffeesteuer (&#8364;2.19/kg on roasted coffee), the Netherlands levies no additional excise on coffee at any stage.</li>
        <li><span className='font-bold'>VAT deferral:</span> Frequent importers can apply for an Article 23 permit from the Belastingdienst (Dutch tax authority) to reverse-charge the 9% VAT on their periodic return instead of paying at the border.</li>
        <li><span className='font-bold'>Re-export hub:</span> The Netherlands re-exported 90,000 tonnes of green coffee in 2024, with two-thirds going to Germany. Rotterdam&apos;s bonded warehouses let you distribute duty-deferred across the EU.</li>
        <li><span className='font-bold'>Port infrastructure:</span> Rotterdam connects to inland barge, rail, and truck networks covering Germany, Belgium, Luxembourg, and Scandinavia within 24 to 48 hours.</li>
        <li><span className='font-bold'>Active specialty market:</span> Dutch roasters and importers such as Trabocca, This Side Up, and The Coffee Quest actively source Ethiopian single-origin lots.</li>
      </ul>

      {/* SECTION 2: MARKET SNAPSHOT */}
      <h3 id='market-snapshot' className='text-2xl font-extrabold mt-8'>
        <HiOutlineChartBar className='inline mr-2' />
        Dutch Coffee Market Snapshot (2024/2025)
      </h3>
      <p className='my-4'>
        The Netherlands plays an outsized role in European coffee trade relative to its 18 million population. According to <a href='https://www.cbi.eu/market-information/coffee/netherlands/market-potential' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>CBI market research (February 2026)</a>, key figures include:
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border-collapse'>
          <thead>
            <tr className='border-b-2 border-gray-300'>
              <th className='text-left py-2 pr-4'>Indicator</th>
              <th className='text-left py-2'>Figure</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Green coffee imports (2024)</td>
              <td className='py-2'>222,400 tonnes (6th in EU, up from 7th in 2020)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Green coffee re-exports (2024)</td>
              <td className='py-2'>90,000 tonnes (3rd in EU; ~59,000 tonnes to Germany)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Roasted coffee exports</td>
              <td className='py-2'>96,000 tonnes (4th globally, after Italy, Germany, Switzerland)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Market value</td>
              <td className='py-2'>~&#8364;1.2 billion</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Per-capita spending</td>
              <td className='py-2'>&#8364;84.40/year (2nd in EU, after Luxembourg)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Population drinking coffee</td>
              <td className='py-2'>83%, averaging 3.6 cups per day</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Import growth</td>
              <td className='py-2'>3.6% annual average (2015 to 2024)</td>
            </tr>
            <tr>
              <td className='py-2 font-bold'>Direct producer-country share</td>
              <td className='py-2'>77% in 2024 (up from 30% in 2020)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Premium pricing is the dominant trend. Dutch consumers spend more per cup than almost any other EU population, and the specialty segment continues to expand. Roasters such as Friedhats, Manhattan Coffee Roasters, Dak Coffee Roasters, and Koffiestation source single-origin Ethiopian lots for their retail and wholesale operations. Larger operators like JDE Peet&apos;s and Ahold Delhaize Coffee Company anchor the commercial segment.
      </p>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium'><span className='font-bold'>Market Tip:</span> Dutch specialty roasters prefer smaller lots (5 to 20 bags) with detailed traceability. Providing cupping notes, processing details, and cooperative-level information gives Ethiopian lots a clear advantage over commodity offerings.</p>
      </div>

      {/* SECTION 3: REGULATIONS */}
      <h3 id='regulations' className='text-2xl font-extrabold mt-8'>
        EU &amp; Dutch Import Regulations
      </h3>
      <p className='my-4'>
        Coffee imports follow EU-wide food safety rules enforced locally by the NVWA and Dutch Customs. Pre-arrival safety notifications (ICS2/ENS), an EORI number, and electronic import declarations are required:
      </p>

      <div className='space-y-6 my-8'>
        <div className='bg-amber-50 p-6 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-xl mb-3 text-dark flex items-center gap-2'>
            <HiOutlineShieldCheck className='text-2xl' />
            EU Food Safety Requirements
          </h4>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>General Food Law:</span> Full traceability from origin to importer (Regulation EC 178/2002)</li>
            <li><span className='font-bold'>Pesticide MRLs:</span> Maximum residue limits per <a href='https://ec.europa.eu/food/plant/pesticides/eu-pesticides-database/start/screen/products' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>EU pesticides database</a></li>
            <li><span className='font-bold'>Ochratoxin A:</span> Maximum 5 &#181;g/kg for green coffee under EU Regulation 2023/915</li>
            <li><span className='font-bold'>HACCP:</span> Importers must hold a food safety plan compliant with HACCP principles</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-xl mb-3 text-dark flex items-center gap-2'>
            <HiOutlineBuildingOffice className='text-2xl' />
            Dutch Authorities &amp; Key Codes
          </h4>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>NVWA:</span> Netherlands Food and Consumer Product Safety Authority. Conducts inspections, sampling, and testing at port entry.</li>
            <li><span className='font-bold'>Customs (Douane):</span> Manages declarations, VAT, bonded storage authorizations. Uses the AGS automated system.</li>
            <li><span className='font-bold'>EORI Number:</span> Mandatory EU-wide importer identification. Apply via Dutch Customs (3 to 5 business days).</li>
            <li><span className='font-bold'>HS Code:</span> Green coffee: 0901 11 00 00 (not decaffeinated, 0% duty) / 0901 12 00 00 (decaffeinated, 8.3% duty)</li>
          </ul>
        </div>
      </div>

      <p className='text-sm my-4'>
        For the full regulatory framework, see the <a href='https://www.kvk.nl/en/international/importing-coffee-and-tea/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>KVK guide to importing coffee and tea</a> and <a href='https://www.cbi.eu/market-information/coffee/what-requirements-should-your-product-comply' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>CBI EU requirements for coffee</a>. For a broader look at the Ethiopian export process, read our <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian Coffee Export Process Guide</Link>.
      </p>

      {/* SECTION 4: EUDR */}
      <h3 id='eudr' className='text-2xl font-extrabold mt-8'>
        <HiOutlineScale className='inline mr-2' />
        EUDR Compliance for Ethiopian Coffee
      </h3>
      <p className='my-4'>
        The EU Deforestation Regulation (EUDR) requires importers to verify that coffee was not produced on land deforested after December 31, 2020. Enforcement dates were confirmed in the regulation&apos;s phased rollout:
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <ul className='list-disc ml-5 text-sm space-y-2'>
          <li><span className='font-bold'>December 30, 2026:</span> EUDR applies to large businesses. Full due diligence, traceability documentation, and risk assessment required for every coffee shipment entering the EU.</li>
          <li><span className='font-bold'>June 30, 2027:</span> Micro and small enterprises must comply.</li>
          <li><span className='font-bold'>Due diligence includes:</span> GPS coordinates of production plots, satellite imagery verification, risk-country benchmarking, and annual reporting.</li>
        </ul>
      </div>

      <p className='my-4'>
        Ethiopia&apos;s coffee is predominantly shade-grown by smallholders, which positions it favorably under EUDR risk assessments. Ethio Coffee Import and Export PLC works with cooperatives and washing stations that can provide plot-level geolocation data. For details on how the regulation affects Ethiopian exports, see our <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline font-bold'>EUDR Ethiopian Coffee Compliance Guide</Link>.
      </p>

      {/* SECTION 5: COSTS */}
      <h3 id='costs' className='text-2xl font-extrabold mt-8'>
        Import Duties, VAT &amp; Landed Costs
      </h3>
      <p className='my-4'>
        Ethiopia enjoys duty-free access under GSP+ for green coffee (HS 0901 11 00 00). The major landed-cost components are FOB price, ocean freight, insurance, handling, and Dutch VAT. There is no national coffee excise in the Netherlands.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3'>Cost Checklist</h4>
        <ul className='list-disc ml-5 text-sm space-y-2'>
          <li><span className='font-bold'>Import Duty:</span> 0% under GSP+ with valid Form A certificate of origin</li>
          <li><span className='font-bold'>VAT:</span> 9% reduced rate on food products, applied to customs value plus incidental costs. Recoverable for VAT-registered businesses via quarterly filings.</li>
          <li><span className='font-bold'>Article 23 Permit:</span> Apply to the Belastingdienst (Dutch Tax Authority) to defer import VAT. Instead of paying at the border, the VAT is reverse-charged on your periodic return. This eliminates the cash flow impact entirely.</li>
          <li><span className='font-bold'>Customs &amp; Handling:</span> Broker fee (~&#8364;300), terminal handling (~&#8364;500), inland transport (&#8364;200 to 500 depending on destination)</li>
          <li><span className='font-bold'>Bonded Storage:</span> Defers VAT and duties until goods are released for domestic sale or re-exported. Typical cost: &#8364;1 to 3 per bag per month.</li>
        </ul>
      </div>

      <p className='my-4'>
        For a detailed breakdown of all cost components, see our <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian Coffee Landed Cost Guide</Link>.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineCurrencyDollar className='text-xl' />
          Cost Example: 20ft Container to Rotterdam (Illustrative)
        </h4>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='border-b-2 border-gray-300'>
              <th className='text-left py-2 pr-4'>Charge</th>
              <th className='text-left py-2 pr-4'>Amount</th>
              <th className='text-left py-2'>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='py-2 font-bold'>FOB Price (Djibouti)</td>
              <td className='py-2 text-right'>$190,478</td>
              <td className='py-2 text-gray-600'>$4.80/lb &#215; 39,683 lbs specialty-grade example</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Ocean Freight</td>
              <td className='py-2 text-right'>$3,800</td>
              <td className='py-2 text-gray-600'>Djibouti &#8594; Rotterdam, market rate</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Marine Insurance (0.3%)</td>
              <td className='py-2 text-right'>$583</td>
              <td className='py-2 text-gray-600' />
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Port &amp; Terminal Handling</td>
              <td className='py-2 text-right'>$550</td>
              <td className='py-2 text-gray-600'>Rotterdam terminal charges</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Customs Broker</td>
              <td className='py-2 text-right'>$330</td>
              <td className='py-2 text-gray-600' />
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>FCA Rotterdam</td>
              <td className='py-2 text-right font-bold'>$195,741</td>
              <td className='py-2 text-gray-600' />
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Import Duty (GSP+)</td>
              <td className='py-2 text-right'>$0</td>
              <td className='py-2 text-gray-600'>0% with Form A</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>VAT 9%</td>
              <td className='py-2 text-right'>$17,619</td>
              <td className='py-2 text-gray-600'>Recoverable; &#8364;0 at border with Article 23 permit</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Trucking to warehouse</td>
              <td className='py-2 text-right'>$220</td>
              <td className='py-2 text-gray-600' />
            </tr>
            <tr className='border-b border-dark'>
              <td className='py-2 font-bold text-lg'>Total Landed</td>
              <td className='py-2 text-right font-bold text-lg'>$214,489</td>
              <td className='py-2 text-gray-600'>$5.41/lb before VAT recovery</td>
            </tr>
            <tr>
              <td className='py-2 font-bold'>After VAT Recovery</td>
              <td className='py-2 text-right font-bold'>$196,870 ($4.96/lb)</td>
              <td className='py-2 text-gray-600'>Effective cost for VAT-registered importers</td>
            </tr>
          </tbody>
        </table>
        <p className='text-sm mt-4 text-gray-600'><span className='font-bold'>Note:</span> Figures are illustrative. Confirm current freight rates, terminal charges, and exchange rates before contracting.</p>
      </div>

      {/* SECTION 6: SHIPPING */}
      <h3 id='shipping' className='text-2xl font-extrabold mt-8'>
        Shipping Routes &amp; Port Logistics
      </h3>
      <p className='my-4'>
        Ethiopian coffee is trucked from Addis Ababa to Djibouti port (approximately 900 km), then shipped via the Suez Canal to Rotterdam. Typical transit time: 22 to 30 days depending on carrier and routing.
      </p>
      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineTruck className='text-xl' />
          Logistics Options
        </h4>
        <ul className='text-sm space-y-2 list-disc ml-5'>
          <li><span className='font-bold'>FCL (Full Container Load):</span> 20ft container (~18,000 kg / 300 bags of 60 kg) is the standard unit. 40ft available for larger orders.</li>
          <li><span className='font-bold'>LCL (Less than Container Load):</span> Consolidation available for orders under 300 bags, though per-kg cost increases.</li>
          <li><span className='font-bold'>Onward distribution:</span> Rotterdam connects to inland barge (Rhine corridor to Germany), rail, and truck networks. Many importers truck directly to warehouse within 24 hours of release.</li>
          <li><span className='font-bold'>Moisture protection:</span> Use GrainPro or equivalent barrier bags inside jute/sisal to prevent condensation damage during the climate-zone transition.</li>
        </ul>
      </div>

      {/* SECTION 7: DOCUMENTATION */}
      <h3 id='documentation' className='text-2xl font-extrabold mt-8'>
        Required Import Documentation
      </h3>
      <p className='my-4'>
        Complete documentation accelerates Dutch customs clearance and prevents costly delays:
      </p>
      <div className='grid md:grid-cols-2 gap-5 my-6'>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineDocumentText className='text-xl' />
            From Ethiopian Exporter
          </h4>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>Commercial Invoice</span></li>
            <li><span className='font-bold'>Packing List</span></li>
            <li><span className='font-bold'>Bill of Lading (B/L)</span></li>
            <li><span className='font-bold'>Form A Certificate of Origin</span> (for GSP+ duty-free treatment)</li>
            <li><span className='font-bold'>ECX Quality/Grading Report</span> with moisture content</li>
            <li><span className='font-bold'>Pesticide residue &amp; OTA test reports</span></li>
            <li><span className='font-bold'>EUDR traceability data</span> (GPS coordinates, plot references)</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineCheckCircle className='text-xl text-green-600' />
            Importer Arranges
          </h4>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>EORI &amp; VAT registration</span> (or fiscal representative for non-Dutch companies)</li>
            <li><span className='font-bold'>Customs broker</span> or freight forwarder at Rotterdam</li>
            <li><span className='font-bold'>Bonded warehouse agreement</span> (if deferring VAT/duties)</li>
            <li><span className='font-bold'>HACCP / food business registration</span> with local authority</li>
            <li><span className='font-bold'>Article 23 permit</span> (optional, for VAT deferral)</li>
            <li><span className='font-bold'>Marine insurance</span> (0.2 to 0.3% of FCA value)</li>
          </ul>
        </div>
      </div>

      {/* SECTION 8: CUSTOMS CLEARANCE */}
      <h3 id='customs' className='text-2xl font-extrabold mt-8'>
        Dutch Customs Clearance Process
      </h3>
      <p className='my-4'>
        The Netherlands uses the AGS (Automated Customs System) for electronic declarations. Clearance takes 1 to 3 business days for compliant shipments:
      </p>
      <ol className='my-6 space-y-4 list-decimal ml-5 font-medium'>
        <li><span className='font-bold'>Pre-arrival ENS filing:</span> <span className='font-normal text-gray-600'>Submit an Entry Summary Declaration via ICS2 before the vessel reaches Rotterdam. This triggers advance risk assessment.</span></li>
        <li><span className='font-bold'>Vessel arrival &amp; unloading:</span> <span className='font-normal text-gray-600'>Container moves to a customs-supervised terminal. Port of Rotterdam dwell time: 1 to 2 days.</span></li>
        <li><span className='font-bold'>Import declaration (AGS):</span> <span className='font-normal text-gray-600'>Your customs broker files the electronic declaration. Attach Form A certificate number for 0% duty. Declare HS code 0901 11 00 00.</span></li>
        <li><span className='font-bold'>Risk assessment &amp; NVWA checks:</span> <span className='font-normal text-gray-600'>Automated risk screening. NVWA may sample for pesticides or ochratoxin A, especially for first-time importers. Pre-testing at origin reduces delay risk.</span></li>
        <li><span className='font-bold'>Duty &amp; VAT assessment:</span> <span className='font-normal text-gray-600'>Import duty: 0% under GSP+. VAT: 9% on customs value, or &#8364;0 at border if Article 23 permit is held.</span></li>
        <li><span className='font-bold'>Bonded storage (optional):</span> <span className='font-normal text-gray-600'>Goods transfer under customs supervision. VAT/duties deferred until domestic release or re-export.</span></li>
        <li><span className='font-bold'>Release &amp; delivery:</span> <span className='font-normal text-gray-600'>Container released for pickup. Onward transport via truck, barge, or rail across Benelux and Germany.</span></li>
      </ol>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium'><span className='font-bold'>Tip:</span> Importers who plan to re-distribute into Belgium or Germany should use Rotterdam bonded storage. You avoid paying Dutch VAT on volumes that will leave the Netherlands, improving margins on cross-border sales.</p>
      </div>

      {/* SECTION 9: BUSINESS REGISTRATION */}
      <h3 id='registration' className='text-2xl font-extrabold mt-8'>
        Business Registration &amp; EORI
      </h3>
      <p className='my-4'>
        Before importing coffee into the Netherlands, secure these registrations:
      </p>

      <div className='space-y-6 my-8'>
        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-xl mb-3'>Essential Registrations</h4>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>EORI Number:</span> Apply through <a href='https://www.douane.nl/en/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>Dutch Customs</a>. Processing: 3 to 5 business days. Required for any import declaration.</li>
            <li><span className='font-bold'>Dutch VAT Registration:</span> Register with the Belastingdienst to recover the 9% import VAT. Non-resident EU businesses can use fiscal representation.</li>
            <li><span className='font-bold'>Food Business Registration:</span> Register with <a href='https://english.nvwa.nl/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>NVWA</a> before operating. Required under EU General Food Law.</li>
            <li><span className='font-bold'>KVK Registration:</span> Register with the <a href='https://www.kvk.nl/en/international/importing-coffee-and-tea/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>Kamer van Koophandel</a> (Dutch Chamber of Commerce) if establishing a Dutch entity.</li>
          </ul>
        </div>

        <div className='bg-amber-50 p-6 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-xl mb-3'>Non-Dutch Companies via Rotterdam</h4>
          <p className='text-sm mb-3'>
            Importers from Belgium, Germany, and other EU countries regularly route shipments through Rotterdam without a Dutch entity:
          </p>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>Fiscal representation:</span> A Dutch-registered agent files VAT on your behalf, enabling import VAT recovery without a Dutch company</li>
            <li><span className='font-bold'>EU EORI from home country:</span> Your existing EU EORI is valid for Dutch customs declarations</li>
            <li><span className='font-bold'>AEO customs broker:</span> An Authorized Economic Operator broker reduces inspection rates and streamlines clearance</li>
          </ul>
        </div>
      </div>

      {/* SECTION 10: STORAGE */}
      <h3 id='storage' className='text-2xl font-extrabold mt-8'>
        Storage &amp; Quality Management
      </h3>
      <p className='my-4'>
        The Netherlands has a temperate maritime climate, generally favorable for green coffee storage. Humidity management remains critical:
      </p>

      <div className='grid md:grid-cols-2 gap-5 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-3'>Optimal Conditions</h4>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>Temperature:</span> 15 to 20&#176;C (59 to 68&#176;F)</li>
            <li><span className='font-bold'>Humidity:</span> 50 to 65% RH</li>
            <li><span className='font-bold'>Ventilation:</span> Good airflow to prevent condensation</li>
            <li><span className='font-bold'>Light:</span> Away from direct sunlight</li>
            <li><span className='font-bold'>Shelf life:</span> 6 to 12 months under proper conditions</li>
          </ul>
          <p className='text-sm mt-3 text-gray-600'>For more on storage, see our <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline'>Green Coffee Storage Guide</Link>.</p>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-3'>Rotterdam Warehouse Options</h4>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>Bonded warehouses:</span> Defer VAT until domestic release or re-export</li>
            <li><span className='font-bold'>Dedicated coffee facilities:</span> Climate-controlled storage in the Rotterdam area</li>
            <li><span className='font-bold'>GrainPro bags:</span> Moisture-barrier protection inside jute for long storage</li>
            <li><span className='font-bold'>FIFO rotation:</span> First in, first out to maintain freshness</li>
            <li><span className='font-bold'>Cost:</span> &#8364;1 to 3 per bag per month depending on facility and volume</li>
          </ul>
        </div>
      </div>

      {/* SECTION 11: CERTIFICATIONS */}
      <h3 id='certifications' className='text-2xl font-extrabold mt-8'>
        <HiOutlineArrowTrendingUp className='inline mr-2' />
        Certifications &amp; Sustainability in the Dutch Market
      </h3>
      <p className='my-4'>
        Dutch buyers prioritize sustainability, but the certification mix is shifting. Key developments to know:
      </p>
      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Rainforest Alliance decline:</span> Dutch RA imports dropped from 144,000 tonnes to 60,000 tonnes between 2022 and 2024 (58% decline), largely because JDE Peet&apos;s shifted to Enveritas-certified coffee.</li>
        <li><span className='font-bold'>Fairtrade has Dutch roots:</span> The Fairtrade movement began in the Netherlands as Max Havelaar in 1988. Fairtrade green coffee sales reached 5,664 tonnes in 2024, roughly 5% of the Dutch market.</li>
        <li><span className='font-bold'>Organic oversupply correction:</span> Dutch organic green coffee imports dropped 12.8% in 2024 (to 2,569 tonnes) as non-organic prices rose. Recovery is expected as market stabilizes.</li>
        <li><span className='font-bold'>Company standards growing:</span> Internal sustainability programs (Enveritas, Nespresso AAA, 4C/Global Coffee Platform) are replacing traditional third-party certifications for some large roasters. Globally, company standards covered 21% of sales by 2023, up from 4.4% in 2020.</li>
      </ul>
      <p className='my-4'>
        Ethiopian coffees with organic and Fairtrade certifications remain well positioned for the Dutch specialty segment. For a full overview, see our <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline font-bold'>Ethiopian Coffee Certifications Guide</Link>.
      </p>

      {/* SECTION 12: WORKING WITH US */}
      <h3 id='working-with-us' className='text-2xl font-extrabold mt-8'>
        Working with Ethio Coffee Export for Dutch &amp; EU Imports
      </h3>
      <p className='my-4'>
        As an ECX-registered Ethiopian exporter with three decades of sourcing heritage, Ethio Coffee Import and Export PLC partners with Dutch importers, roasters, and traders who source Ethiopian coffee through Rotterdam:
      </p>

      <div className='grid md:grid-cols-2 gap-5 my-6'>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-3'>What Ethio Coffee Handles (Ethiopia Side)</h4>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li>Sourcing from trusted cooperatives and washing stations across Ethiopian coffee regions</li>
            <li>ECX quality grading, moisture analysis, and cupping reports</li>
            <li>All export documentation: commercial invoice, packing list, Form A</li>
            <li>Phytosanitary and pesticide/OTA testing per EU MRL standards</li>
            <li>EUDR traceability data (GPS coordinates, cooperative references)</li>
            <li>FOB Djibouti loading and shipping coordination</li>
            <li>Pre-shipment samples via DHL or FedEx</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-3'>What You Arrange (Netherlands/EU Side)</h4>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li>EORI registration and Dutch VAT number (or fiscal representative)</li>
            <li>Customs broker at Rotterdam or your EU port of entry</li>
            <li>Marine insurance (0.2 to 0.3% of FCA value)</li>
            <li>Bonded warehouse booking</li>
            <li>Inland transport from port</li>
            <li>Article 23 VAT deferral permit (recommended)</li>
            <li>HACCP / food business compliance</li>
          </ul>
        </div>
      </div>

      {/* SECTION 13: TIMELINE */}
      <h3 id='timeline' className='text-2xl font-extrabold mt-8'>
        <HiOutlineClock className='inline mr-2' />
        Real-World Timeline: Ethiopia to Dutch Warehouse
      </h3>
      <p className='my-4'>
        First-time imports typically take 10 to 14 weeks. Repeat orders compress to 5 to 7 weeks once relationships and documentation are established:
      </p>
      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <table className='w-full text-sm'>
          <thead>
            <tr className='border-b-2 border-gray-300'>
              <th className='text-left py-2 pr-4'>Phase</th>
              <th className='text-left py-2 pr-4'>Duration</th>
              <th className='text-left py-2'>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='py-2 font-bold'>1. Sourcing &amp; samples</td>
              <td className='py-2'>2 to 3 weeks</td>
              <td className='py-2 text-gray-600'>Sample selection, cupping approval, contract</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>2. Preparation &amp; export</td>
              <td className='py-2'>2 to 3 weeks</td>
              <td className='py-2 text-gray-600'>ECX processing, export docs, loading at Djibouti</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>3. Ocean transit</td>
              <td className='py-2'>22 to 30 days</td>
              <td className='py-2 text-gray-600'>Djibouti &#8594; Rotterdam via Suez Canal</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>4. Customs clearance</td>
              <td className='py-2'>1 to 3 days</td>
              <td className='py-2 text-gray-600'>ENS, declaration, NVWA check, VAT, release</td>
            </tr>
            <tr>
              <td className='py-2 font-bold'>5. Delivery to warehouse</td>
              <td className='py-2'>1 to 2 days</td>
              <td className='py-2 text-gray-600'>Drayage from Rotterdam to your facility</td>
            </tr>
          </tbody>
        </table>
        <p className='text-sm mt-4 text-gray-600'><span className='font-bold'>First order:</span> ~10 to 14 weeks. <span className='font-bold'>Repeat orders:</span> ~5 to 7 weeks.</p>
      </div>

      {/* SECTION 14: CHALLENGES */}
      <h3 id='challenges' className='text-2xl font-extrabold mt-8'>
        <HiOutlineExclamationTriangle className='inline mr-2' />
        Common Challenges &amp; Solutions
      </h3>

      <div className='space-y-4 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-2'>Missing or incorrect Form A certificate</h4>
          <p className='text-sm text-gray-600'>Without a valid Form A, your shipment loses GSP+ zero-duty status and may be assessed at the standard EU tariff. Confirm Form A details with your exporter before shipping. Errors in origin declarations trigger manual review and delays.</p>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-2'>NVWA sampling delays</h4>
          <p className='text-sm text-gray-600'>First-time importers face higher inspection rates. NVWA may sample for pesticide residues or OTA. Pre-testing at origin (which Ethio Coffee provides) significantly reduces delay risk at Rotterdam.</p>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-2'>VAT cash flow impact</h4>
          <p className='text-sm text-gray-600'>9% VAT on a full container adds ~&#8364;16,000 upfront. Apply for the Article 23 deferral permit to reverse-charge import VAT on your periodic return. Alternatively, use bonded storage to defer payment until goods are released for domestic sale.</p>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-2'>Moisture and quality loss during transit</h4>
          <p className='text-sm text-gray-600'>The 22 to 30 day transit through varying climate zones causes condensation inside containers. Require GrainPro or equivalent moisture-barrier bags. Target moisture content: 10 to 12% at origin. For storage best practices, consult our <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline'>shelf life and storage guide</Link>.</p>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-2'>EUDR due diligence preparation</h4>
          <p className='text-sm text-gray-600'>Large businesses must comply by December 30, 2026; SMEs by June 30, 2027. Start collecting GPS plot data and building your due diligence system now. Work with exporters who can provide farm-level geolocation. See our <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline'>EUDR compliance guide</Link> for step-by-step preparation.</p>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-2'>Certification landscape shifts</h4>
          <p className='text-sm text-gray-600'>JDE Peet&apos;s move from Rainforest Alliance to Enveritas reduced RA import volumes by 58% in two years. Verify which certifications your target buyers require before investing in certification. Organic and Fairtrade remain strong in the specialty segment; company standards dominate for commercial volumes.</p>
        </div>
      </div>

      {/* FAQ SECTION */}
      <section className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900'>Frequently Asked Questions: Importing Ethiopian Coffee to the Netherlands</h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What are the requirements to import coffee into the Netherlands?</h4>
            <p className='text-sm text-gray-600'>You need an EORI number, food business registration with NVWA, and a HACCP-compliant food safety plan. Coffee must meet EU contaminant limits for ochratoxin A and pesticide residue MRLs. File an electronic import declaration through Dutch Customs (AGS) with supporting documents including the bill of lading and Form A certificate.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Is Ethiopian coffee duty-free in the EU?</h4>
            <p className='text-sm text-gray-600'>Yes. Green Ethiopian coffee (HS 0901 11 00 00) enters the EU at 0% import duty under the Generalised Scheme of Preferences. A valid Form A certificate of origin must accompany the import declaration. Decaffeinated green coffee (0901 12 00 00) carries an 8.3% duty rate unless preferential treatment applies.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How do I clear customs for green coffee at Rotterdam?</h4>
            <p className='text-sm text-gray-600'>Your customs broker files a pre-arrival ENS declaration, then submits the electronic import declaration via AGS once the container arrives. Dutch Customs performs automated risk screening. NVWA may request sampling. With complete documentation, clearance takes 1 to 3 business days.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is EUDR and how does it affect Ethiopian coffee imports?</h4>
            <p className='text-sm text-gray-600'>The EU Deforestation Regulation requires importers to prove coffee was not grown on land deforested after December 31, 2020. Large businesses must comply by December 30, 2026; SMEs by June 30, 2027. Importers need GPS plot data, satellite verification, and risk assessments for every shipment.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What VAT applies to coffee imports in the Netherlands?</h4>
            <p className='text-sm text-gray-600'>The Netherlands applies a reduced 9% VAT rate on food products including coffee. VAT-registered businesses recover this through quarterly returns. Frequent importers can apply for an Article 23 permit to defer VAT entirely at the border, eliminating the upfront cash flow impact.</p>
          </div>
        </div>
      </section>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Premium Ethiopian Coffee Direct from Origin</h4>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Import and Export PLC</span> is an origin-connected Ethiopian exporter with three decades of sourcing heritage. We work with trusted cooperatives and washing stations across Yirgacheffe, Guji, Sidamo, Harar, Limu, and Jimma to deliver green coffee to Dutch importers and European roasters. Request pre-shipment samples, current pricing, or a custom offer sheet.
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
        <div className='grid md:grid-cols-2 gap-6'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Import Guides &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&#8226; <Link href='/insights/importing-ethiopian-coffee-to-germany' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to Germany</Link></li>
              <li>&#8226; <Link href='/insights/importing-ethiopian-coffee-to-france' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to France</Link></li>
              <li>&#8226; <Link href='/insights/importing-ethiopian-coffee-to-italy' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to Italy</Link></li>
              <li>&#8226; <Link href='/insights/importing-ethiopian-coffee-to-uk' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to UK</Link></li>
              <li>&#8226; <Link href='/insights/how-to-import-ethiopian-coffee-to-usa' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to USA</Link></li>
              <li>&#8226; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process Guide</Link></li>
              <li>&#8226; <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export</Link></li>
              <li>&#8226; <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost Guide</Link></li>
              <li>&#8226; <Link href='/insights/importing-ethiopian-coffee-to-nordic-countries' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to Nordic Countries</Link></li>
            </ul>

            <h4 className='font-semibold mb-2 mt-4 text-sm'>Regulations &amp; Compliance</h4>
            <ul className='space-y-1 text-sm'>
              <li>&#8226; <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline'>EUDR Ethiopian Coffee Compliance</Link></li>
              <li>&#8226; <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality &amp; Sourcing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&#8226; <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Ethiopian Coffee Certifications Guide</Link></li>
              <li>&#8226; <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Heirloom Ethiopian Coffee Varieties</Link></li>
              <li>&#8226; <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline'>Green Coffee Shelf Life &amp; Storage</Link></li>
              <li>&#8226; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality &amp; Grading</Link></li>
            </ul>

            <h4 className='font-semibold mb-2 mt-4 text-sm'>Pricing &amp; Market</h4>
            <ul className='space-y-1 text-sm'>
              <li>&#8226; <Link href='/insights/rising-ethiopian-coffee-prices-explained' className='text-amber-700 hover:underline'>Rising Ethiopian Coffee Prices Explained</Link></li>
              <li>&#8226; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing Guide</Link></li>
              <li>&#8226; <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Ethiopian Coffee MOQ Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC. Market data sourced from CBI (February 2026), KVK, and NVWA. Contact us for current pricing and availability.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &#183; <Link href='/ethiopian-coffee-exporter' className='underline'>Export Services</Link> &#183; <Link href='/about' className='underline'>About Ethio Coffee</Link> &#183; <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

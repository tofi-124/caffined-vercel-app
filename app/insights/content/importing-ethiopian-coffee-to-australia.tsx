import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { ArrowRight } from '@/app/components/Arrow'
import { 
  HiOutlineGlobeAlt, 
  HiOutlineCurrencyDollar, 
  HiOutlineShieldCheck, 
  HiOutlineDocumentText, 
  HiOutlineTruck, 
  HiOutlineCube, 
  HiOutlineCheckCircle, 
  HiOutlineExclamationTriangle, 
  HiOutlineBuildingOffice, 
  HiOutlineBeaker,
  HiOutlineClipboardDocumentList,
  HiOutlineMapPin,
  HiOutlineArrowTrendingUp,
  HiOutlineLightBulb,
  HiOutlineChartBarSquare,
  HiOutlineBuildingStorefront,
  HiOutlineUsers,
  HiOutlineStar,
  HiOutlineClock,
  HiOutlineMagnifyingGlass
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function ImportingEthiopianCoffeeToAustralia({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        A complete guide to importing Ethiopian green coffee into Australia: DAFF biosecurity compliance, Australian Border Force customs procedures, FSANZ food safety standards, duties, GST structure, shipping logistics, and market entry for one of the world&apos;s most quality-driven specialty coffee markets.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Australia&apos;s world-class specialty coffee culture makes it a premium destination for Ethiopian green coffee.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Importing Ethiopian coffee to Australia - DAFF biosecurity and ABF customs procedures for green coffee'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Import Guide / Australian Market / Ethiopian Coffee Export</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 border border-amber-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-2'>Key Takeaway</h4>
        <p className='text-sm'>
          Australia charges <span className='font-bold'>zero customs duty</span> on green coffee. The 10% GST is fully recoverable for registered businesses, and eligible importers can defer GST entirely through the Deferred GST Scheme. The primary compliance hurdle is <span className='font-bold'>DAFF biosecurity</span>, not customs. Landed costs run only 3 to 4% above FOB after GST recovery, making Australia one of the most cost-effective premium specialty markets globally.
        </p>
      </div>

      {/* INTRODUCTION */}
      <p className='my-4'>
        Australia imports roughly 96,000 tonnes of green coffee annually, with specialty-grade volumes growing at 7.8% year-over-year. The country&apos;s 25,000+ cafes (among the highest per capita globally) set the global benchmark for espresso quality. Ethiopian coffee, with its complex floral profiles, bright acidity, and traceable supply chains, has become a cornerstone of Australian specialty menus from Melbourne&apos;s laneway roasters to Sydney&apos;s harbourside cafes.
      </p>

      <p className='my-4'>
        Importing into Australia requires working through the country&apos;s strict <span className='font-bold'>biosecurity regime</span>. The <span className='font-bold'>Department of Agriculture, Fisheries and Forestry (DAFF)</span> enforces comprehensive quarantine controls, while the <span className='font-bold'>Australian Border Force (ABF)</span> handles customs clearance. This guide covers every step from export preparation in Ethiopia to warehouse delivery in Melbourne, Sydney, Brisbane, or Perth.
      </p>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href="#australian-market" className='text-amber-700 hover:underline'>1. Why Australian Coffee Importers Choose Ethiopian Coffee</a></li>
          <li><a href="#regulations" className='text-amber-700 hover:underline'>2. Australian Coffee Import Regulations</a></li>
          <li><a href="#biosecurity" className='text-amber-700 hover:underline'>3. DAFF Biosecurity Requirements</a></li>
          <li><a href="#customs-clearance" className='text-amber-700 hover:underline'>4. Australian Border Force Customs Clearance</a></li>
          <li><a href="#duties-taxes" className='text-amber-700 hover:underline'>5. Import Duties, GST and Deferred GST Scheme</a></li>
          <li><a href="#documentation" className='text-amber-700 hover:underline'>6. Required Import Documentation</a></li>
          <li><a href="#labeling" className='text-amber-700 hover:underline'>7. Labeling and Commerce Act Requirements</a></li>
          <li><a href="#shipping-logistics" className='text-amber-700 hover:underline'>8. Shipping Routes and Port Logistics</a></li>
          <li><a href="#cost-breakdown" className='text-amber-700 hover:underline'>9. Complete Cost Breakdown: FOB to Landed</a></li>
          <li><a href="#business-registration" className='text-amber-700 hover:underline'>10. Australian Business Registration and ABN</a></li>
          <li><a href="#market-insights" className='text-amber-700 hover:underline'>11. Australian Coffee Market Insights and Trends</a></li>
          <li><a href="#working-with-exporters" className='text-amber-700 hover:underline'>12. Working with Ethiopian Coffee Exporters</a></li>
          <li><a href="#success-tips" className='text-amber-700 hover:underline'>13. Tips for Success in the Australian Market</a></li>
        </ol>
      </div>

      {/* SECTION 1: AUSTRALIAN MARKET */}
      <h3 id="australian-market" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineArrowTrendingUp className='text-amber-600' />
        1. Why Australian Coffee Importers Choose Ethiopian Coffee
      </h3>

      <p className='my-4'>
        Australia&apos;s coffee culture is built on espresso excellence. Italian migrants brought steam-powered machines in the 1950s; by the 1980s, Melbourne baristas had invented the flat white. Today, Australian consumers spend an estimated AU$1,000+ per person annually on coffee, and 75%+ of cafes serve specialty-grade beans.
      </p>

      <div className='bg-blue-50 p-6 rounded-lg my-6 border border-blue-200'>
        <h5 className='font-bold mb-3'>Australian Coffee Market at a Glance</h5>
        <ul className='space-y-2 text-sm'>
          <li><HiOutlineChartBarSquare className='inline mr-2 text-blue-600' /><span className='font-bold'>Green Coffee Market Value:</span> ~USD $431 million (Ken Research)</li>
          <li><HiOutlineCube className='inline mr-2 text-blue-600' /><span className='font-bold'>Annual Green Coffee Imports:</span> ~96,000 tonnes (IndexBox, 2024)</li>
          <li><HiOutlineArrowTrendingUp className='inline mr-2 text-blue-600' /><span className='font-bold'>Import Growth:</span> 7.8% year-over-year (6Wresearch, 2023-2024)</li>
          <li><HiOutlineBuildingStorefront className='inline mr-2 text-blue-600' /><span className='font-bold'>Cafes:</span> 25,000+ nationwide (highest per capita among developed nations)</li>
          <li><HiOutlineUsers className='inline mr-2 text-blue-600' /><span className='font-bold'>Population:</span> 27 million, 86% urbanized, affluent consumer base</li>
          <li><HiOutlineCurrencyDollar className='inline mr-2 text-blue-600' /><span className='font-bold'>Import Duty on Coffee:</span> 0% (Free)</li>
        </ul>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Why Ethiopian Coffee Fits the Australian Market</h4>

      <div className='grid md:grid-cols-2 gap-6 my-8'>
        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-3'>Consumer Demand</h5>
          <ul className='space-y-2 text-sm'>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Educated palate:</span> Australian consumers recognize and reward bright acidity, floral notes, and origin complexity</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Filter coffee growth:</span> Batch brew and pour-over are expanding in specialty cafes, ideal for showcasing Ethiopian profiles</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Origin transparency:</span> Consumers expect traceability and connection to source</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Natural processing appeal:</span> Fruit-forward Ethiopian naturals are consistently sought after</li>
          </ul>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold mb-3'>Business Drivers</h5>
          <ul className='space-y-2 text-sm'>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /><span className='font-bold'>Premium pricing:</span> Australian consumers pay among the world&apos;s highest prices for specialty coffee</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /><span className='font-bold'>Differentiation:</span> Ethiopian origins help roasters stand out in a competitive market</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /><span className='font-bold'>Espresso performance:</span> Quality Ethiopian lots perform well in milk-based drinks (Australia&apos;s signature format)</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /><span className='font-bold'>Retail growth:</span> Bean subscriptions and online retail are expanding rapidly</li>
          </ul>
        </div>
      </div>

      {/* SECTION 2: REGULATIONS */}
      <h3 id="regulations" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineShieldCheck className='text-amber-600' />
        2. Australian Coffee Import Regulations
      </h3>

      <p className='my-4'>
        Three government agencies regulate coffee imports into Australia. Each has distinct responsibilities:
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-8'>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold text-lg mb-3'><HiOutlineShieldCheck className='inline mr-2' />Department of Agriculture, Fisheries and Forestry (DAFF)</h5>
          <p className='text-sm mb-3'><span className='font-bold'>Website:</span> <a href='https://www.agriculture.gov.au' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>agriculture.gov.au</a></p>
          <ul className='text-xs space-y-1'>
            <li>&#8226; Biosecurity risk assessment and quarantine</li>
            <li>&#8226; Phytosanitary certificate verification</li>
            <li>&#8226; Border inspection and container clearance</li>
            <li>&#8226; Pest and disease prevention</li>
            <li>&#8226; BICON import conditions database</li>
          </ul>
        </div>

        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold text-lg mb-3'><HiOutlineBuildingOffice className='inline mr-2' />Australian Border Force (ABF)</h5>
          <p className='text-sm mb-3'><span className='font-bold'>Website:</span> <a href='https://www.abf.gov.au' target='_blank' rel='noopener noreferrer' className='text-blue-700 hover:underline'>abf.gov.au</a></p>
          <ul className='text-xs space-y-1'>
            <li>&#8226; Customs clearance via Integrated Cargo System (ICS)</li>
            <li>&#8226; Import declaration processing</li>
            <li>&#8226; Tariff classification and duty collection</li>
            <li>&#8226; GST collection at border</li>
            <li>&#8226; Trade compliance enforcement</li>
          </ul>
        </div>
      </div>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <h5 className='font-bold text-lg mb-3'><HiOutlineBeaker className='inline mr-2' />Food Standards Australia New Zealand (FSANZ)</h5>
        <p className='text-sm mb-3'><span className='font-bold'>Website:</span> <a href='https://www.foodstandards.gov.au' target='_blank' rel='noopener noreferrer' className='text-green-700 hover:underline'>foodstandards.gov.au</a></p>
        <ul className='text-sm space-y-1'>
          <li>&#8226; Food safety standards, maximum residue limits (pesticides, contaminants)</li>
          <li>&#8226; Food labeling requirements</li>
          <li>&#8226; Import food safety compliance</li>
        </ul>
        <p className='text-xs mt-2 italic'>Green coffee is classified as low-risk and does not require specific FSANZ import approvals beyond general food safety compliance.</p>
      </div>

      <p className='my-4'>
        The key distinction: <span className='font-bold'>biosecurity (DAFF) is the primary compliance hurdle</span>, not food safety or customs. Australia&apos;s island ecosystem makes quarantine critically important, and most import delays stem from biosecurity issues rather than ABF processing.
      </p>

      {/* SECTION 3: BIOSECURITY */}
      <h3 id="biosecurity" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBeaker className='text-amber-600' />
        3. DAFF Biosecurity Requirements
      </h3>

      <p className='my-4'>
        Australia&apos;s biosecurity regime is among the strictest globally. All plant products, including coffee, face rigorous controls designed to protect Australia&apos;s unique ecosystem from foreign pests and diseases.
      </p>

      <div className='space-y-6 my-8'>
        <div className='bg-red-50 p-6 rounded-lg border border-red-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineExclamationTriangle className='text-red-600' />
            Why Biosecurity Matters for Coffee
          </h5>
          <p className='text-sm mb-3'>Australia is free from several major coffee pests present elsewhere:</p>
          <ul className='text-sm space-y-2'>
            <li>&#8226; <span className='font-bold'>Coffee Berry Borer (Hypothenemus hampei):</span> Not established in Australia; a priority quarantine pest</li>
            <li>&#8226; <span className='font-bold'>Coffee Leaf Rust (Hemileia vastatrix):</span> Not established in Australia</li>
            <li>&#8226; <span className='font-bold'>Brown Marmorated Stink Bug (BMSB):</span> Heightened measures apply September through May for shipments transshipping through BMSB risk countries</li>
            <li>&#8226; <span className='font-bold'>Consequences of non-compliance:</span> Container fumigation, destruction, or re-export at the importer&apos;s expense</li>
          </ul>
        </div>

        <div className='bg-green-50 p-6 rounded-lg border border-green-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <span className='bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm'>1</span>
            Import Permit (Not Required for Green Coffee)
          </h5>
          <p className='text-sm mb-3'>Green coffee beans (HS code 0901.11.00) do not require an import permit:</p>
          <ul className='text-sm space-y-2'>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>No permit required:</span> Coffee is a permitted import without permit under BICON</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Still subject to:</span> All biosecurity conditions must be met regardless</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Verify via BICON:</span> Check the Biosecurity Import Conditions database at <a href='https://bicon.agriculture.gov.au' target='_blank' rel='noopener noreferrer' className='text-green-700 hover:underline'>bicon.agriculture.gov.au</a> for current requirements</li>
          </ul>
        </div>

        <div className='bg-blue-50 p-6 rounded-lg border border-blue-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <span className='bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm'>2</span>
            Phytosanitary Certificate
          </h5>
          <p className='text-sm mb-3'>The Ethiopian exporter must provide an original phytosanitary certificate:</p>
          <ul className='text-sm space-y-2'>
            <li>&#8226; <span className='font-bold'>Issuing authority:</span> Ethiopian Ministry of Agriculture or Ethiopian Coffee Authority</li>
            <li>&#8226; <span className='font-bold'>Content:</span> Must state the coffee is free from quarantine pests and diseases</li>
            <li>&#8226; <span className='font-bold'>Treatment declaration:</span> If fumigated, must specify method, date, and chemical used</li>
            <li>&#8226; <span className='font-bold'>Validity:</span> Typically 14 to 21 days from date of issue</li>
            <li>&#8226; <span className='font-bold'>Original required:</span> DAFF requires the original certificate, not a copy or digital version</li>
          </ul>
        </div>

        <div className='bg-amber-50 p-6 rounded-lg border border-amber-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <span className='bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm'>3</span>
            Container and Packaging Requirements
          </h5>
          <ul className='text-sm space-y-2'>
            <li>&#8226; <span className='font-bold'>Container cleanliness:</span> Must be free from soil, plant material, pests, and contamination</li>
            <li>&#8226; <span className='font-bold'>Wooden pallets:</span> Must comply with ISPM-15 (heat treatment or methyl bromide fumigation). Stamps must be visible.</li>
            <li>&#8226; <span className='font-bold'>Jute/hessian bags:</span> Acceptable for green coffee; must be clean and pest-free</li>
            <li>&#8226; <span className='font-bold'>Straw packaging:</span> Prohibited in Australia</li>
            <li>&#8226; <span className='font-bold'>Green coffee must be free of fruit pulp</span> before arrival</li>
          </ul>
        </div>

        <div className='bg-purple-50 p-6 rounded-lg border border-purple-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <span className='bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm'>4</span>
            Border Inspection Process
          </h5>
          <ul className='text-sm space-y-2'>
            <li>&#8226; <span className='font-bold'>Document check:</span> Phytosanitary certificate verified first</li>
            <li>&#8226; <span className='font-bold'>Physical inspection:</span> DAFF may open containers for visual inspection (roughly 5 to 10% of shipments)</li>
            <li>&#8226; <span className='font-bold'>Sampling:</span> DAFF may take samples for laboratory testing</li>
            <li>&#8226; <span className='font-bold'>Treatment:</span> If pests are found, the container requires fumigation (importer pays)</li>
            <li>&#8226; <span className='font-bold'>Clearance timeline:</span> 1 to 3 days if no issues; longer if inspection or treatment is required</li>
            <li>&#8226; <span className='font-bold'>Inspection fee:</span> ~AU$180 to AU$350 depending on cargo type</li>
          </ul>
        </div>
      </div>

      <div className='bg-blue-50 p-6 rounded-lg my-6 border border-blue-200'>
        <h5 className='font-bold mb-3'>Approved Arrangements (AA) for Regular Importers</h5>
        <p className='text-sm mb-3'>
          Importers who ship regularly can apply for an <span className='font-bold'>Approved Arrangement</span> with DAFF. Under an AA, approved businesses can conduct certain biosecurity activities at their own premises instead of at the border.
        </p>
        <ul className='text-sm space-y-2'>
          <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /><span className='font-bold'>Lower inspection rates:</span> Consistent compliance history reduces the chance of random inspections</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /><span className='font-bold'>Faster clearance:</span> Goods can be released from the wharf faster</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /><span className='font-bold'>Application:</span> Apply through DAFF; requires documented procedures and compliance history</li>
        </ul>
        <p className='text-xs mt-2 italic'>Recommended for importers handling 5+ containers per year.</p>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium'>
          <span className='font-bold'>Biosecurity Success Key:</span> Work with Ethiopian exporters who understand Australian requirements. Correct phytosanitary certificates, clean containers, and ISPM-15 compliant packaging prevent most delays and unexpected costs.
        </p>
      </div>

      {/* SECTION 4: CUSTOMS CLEARANCE */}
      <h3 id="customs-clearance" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBuildingOffice className='text-amber-600' />
        4. Australian Border Force Customs Clearance
      </h3>

      <p className='my-4'>
        After biosecurity clearance, cargo proceeds to ABF customs processing through the Integrated Cargo System (ICS):
      </p>

      <div className='bg-blue-50 p-6 rounded-lg my-6 border border-blue-200'>
        <h5 className='font-bold mb-3'>Integrated Cargo System (ICS)</h5>
        <ul className='space-y-2 text-sm'>
          <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /><span className='font-bold'>Electronic system:</span> All customs declarations lodged online via ICS</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /><span className='font-bold'>Customs brokers:</span> Most importers use licensed customs brokers to handle declarations</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /><span className='font-bold'>Risk-based assessment:</span> ABF uses automated risk profiling for efficiency</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /><span className='font-bold'>Declaration types:</span> N10 for home consumption, B650 for warehouse entry</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /><span className='font-bold'>Processing time:</span> Typically within hours; 1 to 2 business days total</li>
        </ul>
      </div>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h5 className='font-bold mb-3'>ABF Customs Requirements Summary</h5>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead>
              <tr className='border-b-2 border-gray-300'>
                <th className='text-left py-2 pr-4'>Requirement</th>
                <th className='text-left py-2'>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b'>
                <td className='py-2 font-bold'>ABN</td>
                <td className='py-2'>Australian Business Number required (register at business.gov.au)</td>
              </tr>
              <tr className='border-b'>
                <td className='py-2 font-bold'>Tariff Classification</td>
                <td className='py-2'>0901.11.00 (green, not decaffeinated) or 0901.12.00 (green, decaffeinated)</td>
              </tr>
              <tr className='border-b'>
                <td className='py-2 font-bold'>Import Duty</td>
                <td className='py-2'><span className='font-bold text-green-700'>0% (Free)</span></td>
              </tr>
              <tr className='border-b'>
                <td className='py-2 font-bold'>GST</td>
                <td className='py-2'>10% on customs value (recoverable for GST-registered businesses)</td>
              </tr>
              <tr className='border-b'>
                <td className='py-2 font-bold'>Import Declaration</td>
                <td className='py-2'>Full declaration via ICS (N10 or B650)</td>
              </tr>
              <tr>
                <td className='py-2 font-bold'>Customs Broker</td>
                <td className='py-2'>Licensed broker recommended (required unless self-clearing with ABF authorization)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 5: DUTIES & TAXES */}
      <h3 id="duties-taxes" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='text-amber-600' />
        5. Import Duties, GST and Deferred GST Scheme
      </h3>

      <p className='my-4'>
        Australia offers highly favorable tax treatment for coffee imports. Green coffee enters duty-free, and the GST can be either recovered quarterly or deferred entirely.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3'>Australian Coffee Import Tax Structure</h4>
        <div className='overflow-x-auto'>
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
                <td className='py-2 font-bold'>Customs Duty</td>
                <td className='py-2 text-green-700 font-bold'>0% (Free)</td>
                <td className='py-2 text-gray-600'>Zero duty on coffee (HS 0901)</td>
              </tr>
              <tr className='border-b'>
                <td className='py-2 font-bold'>GST</td>
                <td className='py-2 font-bold'>10%</td>
                <td className='py-2 text-gray-600'>On customs value; recoverable via BAS</td>
              </tr>
              <tr className='border-b'>
                <td className='py-2 font-bold'>Biosecurity Inspection Fee</td>
                <td className='py-2'>AU$180 to AU$350</td>
                <td className='py-2 text-gray-600'>DAFF fee varies by cargo type</td>
              </tr>
              <tr className='border-b'>
                <td className='py-2 font-bold'>Customs Broker Fee</td>
                <td className='py-2'>AU$150 to AU$300</td>
                <td className='py-2 text-gray-600'>Negotiable; depends on complexity</td>
              </tr>
              <tr>
                <td className='py-2 font-bold'>Port Handling</td>
                <td className='py-2'>AU$400 to AU$800</td>
                <td className='py-2 text-gray-600'>Terminal handling, documentation, short-term storage</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <h5 className='font-bold mb-3'>GST Recovery and Deferred GST Scheme</h5>
        <p className='text-sm mb-3'>
          GST-registered businesses have two options for managing the 10% import GST:
        </p>
        <ul className='space-y-2 text-sm'>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Standard recovery:</span> Pay 10% GST at import, then claim it back as an input tax credit on your next Business Activity Statement (BAS). This creates a temporary cash flow impact until the next BAS lodgment (quarterly or monthly).</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Deferred GST Scheme:</span> Eligible businesses can defer the GST on imports so it is reported on the BAS rather than paid at the border. This <span className='font-bold'>eliminates the upfront cash outlay entirely</span>. Apply through the ATO. Available to businesses registered for GST that lodge monthly BAS.</li>
        </ul>
        <p className='text-xs mt-3 italic'>
          Either way, the 10% GST is not a true cost for registered businesses. The Deferred GST Scheme removes even the cash flow impact.
        </p>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium'>
          <span className='font-bold'>Australian Tax Advantage:</span> Zero customs duty plus recoverable (or deferrable) GST means the true import tax burden on green coffee is effectively zero for registered businesses. This makes Australia one of the most cost-competitive premium markets globally.
        </p>
      </div>

      {/* SECTION 6: DOCUMENTATION */}
      <h3 id="documentation" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineDocumentText className='text-amber-600' />
        6. Required Import Documentation
      </h3>

      <p className='my-4'>
        Complete, accurate documentation is critical for Australian biosecurity and customs clearance. Missing or incorrect documents are the leading cause of delays.
      </p>

      <div className='space-y-4 my-8'>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold mb-2'><HiOutlineDocumentText className='inline mr-2 text-amber-600' />From Ethiopian Exporter (Critical)</h5>
          <ul className='text-sm space-y-1'>
            <li>&#8226; <span className='font-bold'>Phytosanitary Certificate:</span> Original from Ethiopian Ministry of Agriculture or Coffee Authority (DAFF requires original, not copy)</li>
            <li>&#8226; <span className='font-bold'>Commercial Invoice:</span> FOB value, product description, HS code, exporter/importer details</li>
            <li>&#8226; <span className='font-bold'>Packing List:</span> Bags, weights (net/gross), container seal numbers</li>
            <li>&#8226; <span className='font-bold'>Certificate of Origin:</span> From Ethiopian Chamber of Commerce</li>
            <li>&#8226; <span className='font-bold'>Quality Certificate:</span> ECX grade certificate or cupping report</li>
            <li>&#8226; <span className='font-bold'>Fumigation Certificate:</span> If wooden pallets used, showing ISPM-15 compliance</li>
            <li>&#8226; <span className='font-bold'>Bill of Lading:</span> Ocean B/L showing shipment details</li>
          </ul>
        </div>

        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold mb-2'><HiOutlineTruck className='inline mr-2 text-blue-600' />From Shipping Company/Freight Forwarder</h5>
          <ul className='text-sm space-y-1'>
            <li>&#8226; <span className='font-bold'>Bill of Lading (B/L):</span> Original or telex release</li>
            <li>&#8226; <span className='font-bold'>Arrival Notice:</span> Vessel arrival notification at Australian port</li>
            <li>&#8226; <span className='font-bold'>Delivery Order:</span> Authorization to release cargo</li>
            <li>&#8226; <span className='font-bold'>Container Packing Declaration:</span> Container condition and seal information</li>
          </ul>
        </div>

        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-2'><HiOutlineGlobeAlt className='inline mr-2 text-green-600' />Australian Importer/Broker Documentation</h5>
          <ul className='text-sm space-y-1'>
            <li>&#8226; <span className='font-bold'>Australian Business Number (ABN)</span></li>
            <li>&#8226; <span className='font-bold'>Import Declaration:</span> Lodged via ICS by customs broker</li>
            <li>&#8226; <span className='font-bold'>GST Registration:</span> If claiming input tax credit or using Deferred GST Scheme</li>
            <li>&#8226; <span className='font-bold'>Food Business Registration:</span> State/territory food business license (requirements vary by state)</li>
          </ul>
        </div>
      </div>

      <div className='bg-red-50 p-6 rounded-lg my-6 border border-red-200'>
        <p className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineExclamationTriangle className='text-red-600' />
          Documentation Errors That Cause Delays
        </p>
        <ul className='space-y-2 text-sm'>
          <li><HiOutlineExclamationTriangle className='inline mr-2 text-red-600' /><span className='font-bold'>Missing or incorrect phytosanitary certificate</span> is the #1 cause of container holds</li>
          <li><HiOutlineExclamationTriangle className='inline mr-2 text-red-600' />Phytosanitary certificate not in original form (DAFF rejects copies)</li>
          <li><HiOutlineExclamationTriangle className='inline mr-2 text-red-600' />Container seal numbers not matching across documents</li>
          <li><HiOutlineExclamationTriangle className='inline mr-2 text-red-600' />Incorrect tariff classification or HS code</li>
          <li><HiOutlineExclamationTriangle className='inline mr-2 text-red-600' />Invoice value discrepancies between commercial invoice and B/L</li>
          <li><HiOutlineExclamationTriangle className='inline mr-2 text-red-600' />Incomplete product description (must specify green coffee, grade, processing method)</li>
        </ul>
      </div>

      {/* SECTION 7: LABELING */}
      <h3 id="labeling" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineClipboardDocumentList className='text-amber-600' />
        7. Labeling and Commerce Act Requirements
      </h3>

      <p className='my-4'>
        Australia&apos;s Commerce (Trade Descriptions) Act 1905 requires specific labeling on imported goods. For green coffee, the requirements are straightforward but must be followed to avoid seizure or re-labeling delays.
      </p>

      <div className='bg-blue-50 p-6 rounded-lg my-6 border border-blue-200'>
        <h5 className='font-bold mb-3'>Required Label Information</h5>
        <ul className='space-y-2 text-sm'>
          <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /><span className='font-bold'>Trade description:</span> A description, statement, or indication of how and by whom the coffee was produced, selected, and packed. Must be in clear, legible English.</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /><span className='font-bold'>Country of origin:</span> Must clearly state &quot;Product of Ethiopia&quot; or equivalent</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /><span className='font-bold'>Net weight:</span> Accurate weight in metric units</li>
        </ul>
        <p className='text-xs mt-3 italic'>
          For bulk green coffee not pre-packed for retail sale, the trade description is optional, but country of origin is mandatory. Non-compliant shipments may be seized; re-labeling is sometimes permitted upon further examination.
        </p>
      </div>

      {/* SECTION 8: SHIPPING LOGISTICS */}
      <h3 id="shipping-logistics" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineTruck className='text-amber-600' />
        8. Shipping Routes and Port Logistics
      </h3>

      <p className='my-4'>
        Ethiopian coffee reaches Australia through four major container ports. Most coffee enters through Melbourne and Sydney.
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-8'>
        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold text-lg mb-3'><HiOutlineMapPin className='inline mr-2 text-blue-600' />Port of Melbourne</h5>
          <ul className='text-sm space-y-2'>
            <li>&#8226; <span className='font-bold'>Position:</span> Australia&apos;s busiest port (~40% of container trade)</li>
            <li>&#8226; <span className='font-bold'>Coffee share:</span> Handles ~45% of Australia&apos;s coffee imports</li>
            <li>&#8226; <span className='font-bold'>Advantage:</span> Proximity to Melbourne&apos;s roasters (the country&apos;s coffee capital)</li>
            <li>&#8226; <span className='font-bold'>Free storage:</span> 5 days typically</li>
          </ul>
        </div>

        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold text-lg mb-3'><HiOutlineMapPin className='inline mr-2 text-green-600' />Port Botany (Sydney)</h5>
          <ul className='text-sm space-y-2'>
            <li>&#8226; <span className='font-bold'>Position:</span> 2nd largest container port</li>
            <li>&#8226; <span className='font-bold'>Coffee share:</span> ~30% of coffee imports</li>
            <li>&#8226; <span className='font-bold'>Advantage:</span> Sydney&apos;s growing specialty scene, serves NSW and ACT</li>
            <li>&#8226; <span className='font-bold'>Free storage:</span> 5 days</li>
          </ul>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold text-lg mb-3'><HiOutlineMapPin className='inline mr-2 text-amber-600' />Port of Brisbane</h5>
          <ul className='text-sm space-y-2'>
            <li>&#8226; <span className='font-bold'>Position:</span> 3rd largest container port</li>
            <li>&#8226; <span className='font-bold'>Advantage:</span> Growing specialty market in Queensland</li>
            <li>&#8226; <span className='font-bold'>Free storage:</span> 5 days</li>
          </ul>
        </div>

        <div className='bg-purple-50 p-5 rounded-lg border border-purple-200'>
          <h5 className='font-bold text-lg mb-3'><HiOutlineMapPin className='inline mr-2 text-purple-600' />Port of Fremantle (Perth)</h5>
          <ul className='text-sm space-y-2'>
            <li>&#8226; <span className='font-bold'>Position:</span> Western Australia&apos;s primary container port</li>
            <li>&#8226; <span className='font-bold'>Advantage:</span> Closest Australian port to Africa and the Middle East</li>
            <li>&#8226; <span className='font-bold'>Free storage:</span> 5 days</li>
          </ul>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Shipping Timeline: Ethiopia to Australia</h4>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <ol className='space-y-3 text-sm'>
          <li>
            <span className='font-bold'>1. Addis Ababa to Djibouti Port:</span> 2 to 4 days
            <br/>
            <span className='text-xs text-gray-600'>Road/rail transport to Port of Djibouti</span>
          </li>
          <li>
            <span className='font-bold'>2. Djibouti through Red Sea and Suez:</span> 6 to 9 days
            <br/>
            <span className='text-xs text-gray-600'>Via Bab-el-Mandeb Strait and Suez Canal</span>
          </li>
          <li>
            <span className='font-bold'>3. Indian Ocean crossing to Australia:</span> 14 to 18 days
            <br/>
            <span className='text-xs text-gray-600'>Via Sri Lanka or Singapore depending on shipping line route</span>
          </li>
          <li>
            <span className='font-bold'>4. Australian port handling and clearance:</span> 3 to 5 days
            <br/>
            <span className='text-xs text-gray-600'>Unloading, biosecurity inspection, customs, delivery</span>
          </li>
        </ol>
        <p className='text-sm mt-4 font-bold'>
          Total transit time: 25 to 36 days door-to-door (Ethiopia to Australian warehouse)
        </p>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Ocean Freight Costs</h4>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead>
              <tr className='border-b-2 border-amber-300'>
                <th className='text-left py-2'>Container</th>
                <th className='text-left py-2'>Capacity</th>
                <th className='text-left py-2'>Freight (Djibouti to Melbourne/Sydney)</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b border-amber-200'>
                <td className='py-2 font-bold'>20ft</td>
                <td className='py-2'>18 to 20 MT (~300 bags at 60kg)</td>
                <td className='py-2'>US$3,500 to US$5,500</td>
              </tr>
              <tr>
                <td className='py-2 font-bold'>40ft</td>
                <td className='py-2'>26 to 28 MT</td>
                <td className='py-2'>US$5,500 to US$7,500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className='text-xs mt-3 italic'>
          Freight rates fluctuate based on season, fuel surcharges, and market demand. Australia-bound rates are often lower than Europe/Americas due to backhaul dynamics. Always request current quotes.
        </p>
      </div>

      {/* SECTION 9: COST BREAKDOWN */}
      <h3 id="cost-breakdown" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCube className='text-amber-600' />
        9. Complete Cost Breakdown: FOB to Landed
      </h3>

      <p className='my-4'>
        Here is a realistic cost breakdown for importing Ethiopian specialty coffee to Australia:
      </p>

      <div className='bg-gray-100 p-6 rounded-lg my-6 border border-gray-300'>
        <h4 className='font-bold text-xl mb-4'>Sample Import: 20ft Container to Melbourne</h4>
        
        <div className='bg-white p-4 rounded mb-4'>
          <p className='font-bold mb-2'>Container Specifications:</p>
          <ul className='text-sm space-y-1'>
            <li>&#8226; Container: 20ft Standard</li>
            <li>&#8226; Net Weight: 18,000 kg (39,683 lbs / 300 bags at 60kg)</li>
            <li>&#8226; Coffee: Ethiopian Specialty G1 Washed Yirgacheffe</li>
            <li>&#8226; FOB Price: US$4.80/lb (US$10.58/kg)</li>
          </ul>
        </div>

        <div className='overflow-x-auto'>
          <table className='w-full text-sm bg-white'>
            <thead>
              <tr className='bg-amber-50 border-b-2 border-amber-200'>
                <th className='text-left py-3 px-3'>Cost Item</th>
                <th className='text-right py-3 px-3'>Amount (USD)</th>
                <th className='text-right py-3 px-3'>Per lb</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b'>
                <td className='py-2 px-3 font-bold'>FOB Price (Ethiopia)</td>
                <td className='py-2 px-3 text-right'>$190,478</td>
                <td className='py-2 px-3 text-right'>$4.80</td>
              </tr>
              <tr className='border-b bg-gray-50'>
                <td className='py-2 px-3 font-bold' colSpan={3}>Freight and Insurance</td>
              </tr>
              <tr className='border-b'>
                <td className='py-2 px-3 pl-6'>Ocean Freight (Djibouti to Melbourne)</td>
                <td className='py-2 px-3 text-right'>$4,500</td>
                <td className='py-2 px-3 text-right'>$0.11</td>
              </tr>
              <tr className='border-b'>
                <td className='py-2 px-3 pl-6'>Marine Insurance (0.3% of value)</td>
                <td className='py-2 px-3 text-right'>$586</td>
                <td className='py-2 px-3 text-right'>$0.01</td>
              </tr>
              <tr className='border-b bg-blue-50'>
                <td className='py-2 px-3 font-bold'>CIF Value (Melbourne)</td>
                <td className='py-2 px-3 text-right font-bold'>$195,564</td>
                <td className='py-2 px-3 text-right font-bold'>$4.93</td>
              </tr>
              <tr className='border-b bg-gray-50'>
                <td className='py-2 px-3 font-bold' colSpan={3}>Australian Import Taxes</td>
              </tr>
              <tr className='border-b'>
                <td className='py-2 px-3 pl-6'>Customs Duty (0%)</td>
                <td className='py-2 px-3 text-right text-green-700'>$0</td>
                <td className='py-2 px-3 text-right text-green-700'>$0.00</td>
              </tr>
              <tr className='border-b'>
                <td className='py-2 px-3 pl-6'>GST 10% on customs value</td>
                <td className='py-2 px-3 text-right'>$19,556</td>
                <td className='py-2 px-3 text-right'>$0.49</td>
              </tr>
              <tr className='border-b bg-gray-50'>
                <td className='py-2 px-3 font-bold' colSpan={3}>Port and Clearance Fees</td>
              </tr>
              <tr className='border-b'>
                <td className='py-2 px-3 pl-6'>Terminal Handling (THC)</td>
                <td className='py-2 px-3 text-right'>$380</td>
                <td className='py-2 px-3 text-right'>$0.01</td>
              </tr>
              <tr className='border-b'>
                <td className='py-2 px-3 pl-6'>DAFF Biosecurity Inspection</td>
                <td className='py-2 px-3 text-right'>$250</td>
                <td className='py-2 px-3 text-right'>$0.01</td>
              </tr>
              <tr className='border-b'>
                <td className='py-2 px-3 pl-6'>Documentation and D/O Fees</td>
                <td className='py-2 px-3 text-right'>$120</td>
                <td className='py-2 px-3 text-right'>$0.00</td>
              </tr>
              <tr className='border-b'>
                <td className='py-2 px-3 pl-6'>Customs Broker Fee</td>
                <td className='py-2 px-3 text-right'>$200</td>
                <td className='py-2 px-3 text-right'>$0.01</td>
              </tr>
              <tr className='border-b'>
                <td className='py-2 px-3 pl-6'>Container Transport (Port to Warehouse)</td>
                <td className='py-2 px-3 text-right'>$250</td>
                <td className='py-2 px-3 text-right'>$0.01</td>
              </tr>
              <tr className='border-t-2 border-gray-400 bg-green-50'>
                <td className='py-3 px-3 font-bold text-lg'>TOTAL LANDED COST</td>
                <td className='py-3 px-3 text-right font-bold text-lg'>$216,320</td>
                <td className='py-3 px-3 text-right font-bold text-lg'>$5.45</td>
              </tr>
              <tr className='bg-amber-50'>
                <td className='py-2 px-3 text-sm italic'>GST Recovery (for registered business)</td>
                <td className='py-2 px-3 text-right text-sm italic text-green-700'>-$19,556</td>
                <td className='py-2 px-3 text-right text-sm italic text-green-700'>-$0.49</td>
              </tr>
              <tr className='bg-green-100 border-t-2 border-green-400'>
                <td className='py-3 px-3 font-bold text-lg'>NET COST (after GST recovery)</td>
                <td className='py-3 px-3 text-right font-bold text-lg'>$196,764</td>
                <td className='py-3 px-3 text-right font-bold text-lg'>$4.96</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='mt-4 p-4 bg-blue-50 rounded'>
          <p className='text-sm font-bold mb-2'>Cost Summary:</p>
          <ul className='text-sm space-y-1'>
            <li>&#8226; FOB Ethiopia: <span className='font-bold'>$4.80/lb</span></li>
            <li>&#8226; Landed (before GST recovery): <span className='font-bold'>$5.45/lb</span> (+13.5%)</li>
            <li>&#8226; Net cost (after GST recovery): <span className='font-bold'>$4.96/lb</span> (+3.3%)</li>
            <li>&#8226; Logistics cost only: <span className='font-bold'>$0.16/lb</span></li>
            <li>&#8226; With Deferred GST Scheme: no upfront GST payment at all</li>
          </ul>
        </div>
      </div>

      {/* SECTION 10: BUSINESS REGISTRATION */}
      <h3 id="business-registration" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBuildingOffice className='text-amber-600' />
        10. Australian Business Registration and ABN
      </h3>

      <p className='my-4'>
        Importing coffee into Australia requires proper business registration. The two most common structures:
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-8'>
        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold mb-3'><HiOutlineBuildingOffice className='inline mr-2 text-blue-600' />Company (Pty Ltd)</h5>
          <ul className='text-sm space-y-2'>
            <li><span className='font-bold'>Registration:</span> Register with ASIC (asic.gov.au)</li>
            <li><span className='font-bold'>Cost:</span> AU$506 (ASIC registration fee)</li>
            <li><span className='font-bold'>Timeline:</span> 1 to 3 business days</li>
            <li><span className='font-bold'>Liability:</span> Limited liability protection</li>
            <li><span className='font-bold'>Tax:</span> Company rate 25 to 30%</li>
            <li><span className='font-bold'>Best for:</span> Serious importers, scalable operations</li>
          </ul>
        </div>

        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-3'><HiOutlineUsers className='inline mr-2 text-green-600' />Sole Trader</h5>
          <ul className='text-sm space-y-2'>
            <li><span className='font-bold'>Registration:</span> ABN online (business.gov.au)</li>
            <li><span className='font-bold'>Cost:</span> Free</li>
            <li><span className='font-bold'>Timeline:</span> Immediate</li>
            <li><span className='font-bold'>Liability:</span> Unlimited personal liability</li>
            <li><span className='font-bold'>Tax:</span> Personal income tax rates</li>
            <li><span className='font-bold'>Best for:</span> Small roasters, individual importers</li>
          </ul>
        </div>
      </div>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h5 className='font-bold mb-3'>Essential Registrations for Coffee Importers</h5>
        <ol className='space-y-2 text-sm list-decimal ml-5'>
          <li><span className='font-bold'>Australian Business Number (ABN):</span> Free, instant for most applicants at business.gov.au</li>
          <li><span className='font-bold'>Company Registration (if Pty Ltd):</span> Register with ASIC</li>
          <li><span className='font-bold'>GST Registration:</span> Mandatory if turnover exceeds AU$75,000</li>
          <li><span className='font-bold'>Deferred GST Scheme:</span> Apply through ATO if lodging monthly BAS</li>
          <li><span className='font-bold'>Food Business Registration:</span> State/territory health authority (requirements vary)</li>
          <li><span className='font-bold'>Business Bank Account:</span> Australian business account for transactions</li>
        </ol>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold mb-3'>Foreign Companies Importing to Australia</p>
        <ul className='text-sm space-y-2'>
          <li>&#8226; <span className='font-bold'>Australian subsidiary (Pty Ltd):</span> Recommended for regular imports</li>
          <li>&#8226; <span className='font-bold'>Branch registration:</span> Register foreign company branch in Australia</li>
          <li>&#8226; <span className='font-bold'>Local importer partner:</span> Work with an established Australian importer (simplest initially)</li>
          <li>&#8226; <span className='font-bold'>Direct import:</span> Foreign companies can import directly if they obtain ABN and meet compliance requirements</li>
        </ul>
      </div>

      {/* SECTION 11: MARKET INSIGHTS */}
      <h3 id="market-insights" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineMapPin className='text-amber-600' />
        11. Australian Coffee Market Insights and Trends
      </h3>

      <p className='my-4'>
        The Australian market has characteristics that make it unique globally. Understanding these patterns is essential for positioning Ethiopian coffee effectively.
      </p>

      <div className='space-y-4 my-6'>
        <div className='border-l-4 border-green-500 pl-4'>
          <h5 className='font-bold'>Espresso Excellence as Baseline</h5>
          <p className='text-sm'>Australian cafes treat world-class espresso as standard, not premium. Ethiopian coffees must perform excellently in milk-based drinks (flat white, latte), which remain the primary ordering format.</p>
        </div>

        <div className='border-l-4 border-blue-500 pl-4'>
          <h5 className='font-bold'>Filter Coffee Segment Expanding</h5>
          <p className='text-sm'>Batch brew and pour-over are growing in specialty cafes, creating ideal showcase opportunities for Ethiopian lots with complex, delicate profiles that shine outside espresso.</p>
        </div>

        <div className='border-l-4 border-purple-500 pl-4'>
          <h5 className='font-bold'>Melbourne Sets the Benchmark</h5>
          <p className='text-sm'>Melbourne remains the country&apos;s coffee capital. Success in Melbourne signals quality recognition nationally and opens doors to Sydney, Brisbane, Adelaide, and Perth.</p>
        </div>

        <div className='border-l-4 border-amber-500 pl-4'>
          <h5 className='font-bold'>Transparency and Ethics</h5>
          <p className='text-sm'>Australian consumers place high value on transparency, farmer relationships, and sustainability. Ethiopian coffee&apos;s traceable supply chains and cooperative models resonate strongly.</p>
        </div>

        <div className='border-l-4 border-red-500 pl-4'>
          <h5 className='font-bold'>Premium Pricing Rewards Quality</h5>
          <p className='text-sm'>This market punishes mediocrity and rewards excellence. Importers who deliver consistent quality build loyal followings among roasters and cafes willing to pay premium rates.</p>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Leading Australian Roasters Using Ethiopian Coffee</h4>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <ul className='text-sm space-y-2 grid md:grid-cols-2 gap-x-6'>
          <li>&#8226; <span className='font-bold'>Market Lane Coffee</span> (Melbourne)</li>
          <li>&#8226; <span className='font-bold'>Proud Mary Coffee</span> (Melbourne)</li>
          <li>&#8226; <span className='font-bold'>Seven Seeds Coffee Roasters</span> (Melbourne)</li>
          <li>&#8226; <span className='font-bold'>ST. ALi Coffee Roasters</span> (Melbourne)</li>
          <li>&#8226; <span className='font-bold'>Industry Beans</span> (Melbourne)</li>
          <li>&#8226; <span className='font-bold'>Single O</span> (Sydney)</li>
          <li>&#8226; <span className='font-bold'>Toby&apos;s Estate</span> (Sydney)</li>
          <li>&#8226; <span className='font-bold'>Campos Coffee</span> (Sydney)</li>
          <li>&#8226; <span className='font-bold'>Ona Coffee</span> (Canberra)</li>
          <li>&#8226; <span className='font-bold'>Blacklist Coffee Roasters</span> (Brisbane)</li>
        </ul>
      </div>

      {/* SECTION 12: WORKING WITH EXPORTERS */}
      <h3 id="working-with-exporters" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCheckCircle className='text-amber-600' />
        12. Working with Ethiopian Coffee Exporters
      </h3>

      <p className='my-4'>
        Choosing the right Ethiopian export partner directly affects compliance outcomes, quality consistency, and landed cost. Here is what Australian importers should evaluate:
      </p>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <h5 className='font-bold mb-3'>Exporter Evaluation Checklist</h5>
        <ul className='space-y-2 text-sm'>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Biosecurity knowledge:</span> Understands Australian phytosanitary requirements and ISPM-15 compliance</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Phytosanitary capability:</span> Can provide correct, original certificates from authorized Ethiopian bodies</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Container cleanliness:</span> Clean container protocols meeting Australian standards</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Quality systems:</span> Cupping lab, sample roasting, established QC meeting specialty standards</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Traceability:</span> Farm-level or cooperative-level traceability documentation</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Sample program:</span> Pre-shipment samples for buyer approval</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Communication:</span> English proficiency and Australian time zone responsiveness</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Flexible terms:</span> Payment options (LC, TT), smaller order consolidation</li>
        </ul>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Ethiopian Coffee for the Australian Market</h4>
        <p className='mb-4'>
          Ethio Coffee Import and Export PLC serves the Australian specialty market with full compliance support:
        </p>
        <ul className='space-y-2 mb-4 text-sm'>
          <li><HiOutlineCheckCircle className='inline mr-2' />Complete Australian documentation including phytosanitary certificates from authorized Ethiopian bodies</li>
          <li><HiOutlineCheckCircle className='inline mr-2' />DAFF biosecurity compliance and clean container protocols</li>
          <li><HiOutlineCheckCircle className='inline mr-2' />Specialty-grade Ethiopian coffee from all major origins (Yirgacheffe, Guji, Sidamo, Harar, Limu, Jimma)</li>
          <li><HiOutlineCheckCircle className='inline mr-2' />Pre-shipment sample program for Australian roasters</li>
          <li><HiOutlineCheckCircle className='inline mr-2' />Container consolidation options for smaller orders</li>
          <li><HiOutlineCheckCircle className='inline mr-2' />Transparent pricing and farm-level traceability</li>
          <li><HiOutlineCheckCircle className='inline mr-2' />Established shipping routes to Melbourne, Sydney, Brisbane, and Perth</li>
        </ul>
        <p>
          <Link href='/contact-us' className='font-bold underline'>Contact us</Link> to discuss sourcing Ethiopian specialty coffee for your Australian operation.
        </p>
      </div>

      {/* SECTION 13: SUCCESS TIPS */}
      <h3 id="success-tips" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineLightBulb className='text-amber-600' />
        13. Tips for Success in the Australian Market
      </h3>

      <div className='space-y-4 my-6'>
        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineClipboardDocumentList className='text-blue-600' /> Biosecurity is Non-Negotiable</h5>
          <p className='text-sm'>Triple-check phytosanitary certificates, confirm containers are clean, and verify ISPM-15 compliance for wooden pallets. Biosecurity failures cause expensive fumigation, delays, or destruction. Work only with exporters who understand Australian standards.</p>
        </div>

        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineUsers className='text-green-600' /> Use Licensed Customs Brokers</h5>
          <p className='text-sm'>Licensed brokers handle both ABF customs and DAFF biosecurity coordination. Their AU$150 to AU$300 fee is excellent value for smooth clearance, particularly for first-time importers unfamiliar with ICS procedures.</p>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineStar className='text-amber-600' /> Quality Cannot Be Compromised</h5>
          <p className='text-sm'>Australian consumers and cafe operators identify quality issues immediately. This market rewards excellence and penalizes mediocrity. Import specialty grade only (G1 or G2 washed, G1 natural minimum).</p>
        </div>

        <div className='bg-purple-50 p-5 rounded-lg border border-purple-200'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineLightBulb className='text-purple-600' /> Start in Melbourne, Then Expand</h5>
          <p className='text-sm'>Melbourne is Australia&apos;s coffee capital and quality benchmark. Success there validates your coffee nationally. Sydney, Brisbane, Adelaide, and Perth follow Melbourne&apos;s lead on new origins and trends.</p>
        </div>

        <div className='bg-red-50 p-5 rounded-lg border border-red-200'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineClock className='text-red-600' /> Plan Around Ethiopian Harvest</h5>
          <p className='text-sm'>Ethiopian harvest runs October through February. The freshest coffee arrives in Australia around March to May. Plan annual buying to ensure fresh crop availability year-round; Australian roasters value new-crop freshness highly.</p>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineMagnifyingGlass className='text-gray-600' /> Ensure Espresso Performance</h5>
          <p className='text-sm'>Ethiopian coffee&apos;s complexity shines in filter, but it must also perform well in milk-based espresso drinks. Australian cafes run on flat whites and lattes. Confirm your Ethiopian lots work well in milk.</p>
        </div>
      </div>

      {/* CONCLUSION */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6'>
        Key Takeaways for Importing Ethiopian Coffee to Australia
      </h3>

      <p className='my-4'>
        Australia represents the top tier of global specialty coffee culture. With the world&apos;s highest per-capita specialty spending, zero customs duty, recoverable GST, and a consumer base that genuinely values Ethiopian coffee&apos;s unique character, the market rewards those who commit to quality and compliance.
      </p>

      <p className='my-4'>
        Success requires two things: exceptional coffee quality and meticulous biosecurity compliance. Australian consumers and cafe operators recognize great coffee instantly, and quality opens doors. DAFF&apos;s biosecurity requirements must be treated with absolute precision; non-compliance is expensive and damaging to future import history.
      </p>

      <p className='my-4'>
        For importers who handle these requirements well, Australia offers extraordinary value: zero duty, effectively zero GST cost (through recovery or deferral), competitive freight rates, mature distribution infrastructure, and premium pricing for specialty-grade Ethiopian lots. This is a market where quality is celebrated and rewarded.
      </p>

      <div className='bg-gray-100 p-6 rounded-lg my-8 border border-gray-300'>
        <h4 className='font-bold text-lg mb-3'>Summary</h4>
        <ul className='space-y-2 text-sm'>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Zero customs duty</span> on green coffee (HS 0901)</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>10% GST recoverable</span> via BAS, or deferrable through Deferred GST Scheme</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Original phytosanitary certificate mandatory</span> from authorized Ethiopian body</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>DAFF biosecurity is the primary compliance step</span> (not customs)</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Melbourne and Sydney</span> are the primary coffee import ports (~75% combined)</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Transit time: 25 to 36 days</span> Ethiopia to Australian warehouse</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Net landed cost ~3 to 4% above FOB</span> after GST recovery</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Approved Arrangements</span> available for regular importers to reduce inspection rates</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Premium market</span> that rewards specialty-grade Ethiopian coffee with top pricing</li>
        </ul>
      </div>

      {/* FAQ SECTION */}
      <section className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions About Importing Ethiopian Coffee to Australia</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Is there import duty on Ethiopian coffee in Australia?</h4>
            <p className="text-sm text-gray-600">No. Green coffee beans enter Australia at zero customs duty under HS code 0901. A 10% GST applies at import but is fully recoverable as an input tax credit for GST-registered businesses, or can be deferred entirely through the Deferred GST Scheme.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What are DAFF biosecurity requirements for coffee imports?</h4>
            <p className="text-sm text-gray-600">DAFF requires an original phytosanitary certificate from an authorized Ethiopian body, clean shipping containers free of contaminants, ISPM-15 compliant wooden pallets, and green coffee free of fruit pulp. Physical inspections occur on roughly 5 to 10% of shipments.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How long does shipping from Ethiopia to Australia take?</h4>
            <p className="text-sm text-gray-600">Total transit from Djibouti to an Australian port (Melbourne or Sydney) typically takes 25 to 36 days door-to-door, including inland transport, ocean transit via Suez Canal and Indian Ocean, and biosecurity/customs clearance on arrival.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What is the Deferred GST Scheme for coffee importers?</h4>
            <p className="text-sm text-gray-600">The Deferred GST Scheme lets eligible businesses report import GST on their BAS rather than paying it at the border. This eliminates the upfront cash outlay entirely. Apply through the ATO; requires monthly BAS lodgment and active GST registration.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What is the landed cost of Ethiopian coffee imported to Australia?</h4>
            <p className="text-sm text-gray-600">Net landed cost is typically 3 to 4% above FOB price after GST recovery. For specialty G1 Yirgacheffe at $4.80/lb FOB, the net cost lands around $4.96/lb. Zero duty and competitive freight rates make Australia cost-effective among premium markets.</p>
          </div>
        </div>
      </section>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Import Ethiopian Coffee to Australia</h4>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Import and Export PLC</span> provides full DAFF-compliant documentation, pre-shipment samples, and established shipping routes to all major Australian ports. Contact us to start sourcing.
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
            <h4 className='font-semibold mb-2 text-sm'>Import Guides by Country</h4>
            <ul className='space-y-1 text-sm'>
              <li>&#8226; <Link href='/insights/how-to-import-ethiopian-coffee-to-usa' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to the USA</Link></li>
              <li>&#8226; <Link href='/insights/importing-ethiopian-coffee-to-japan' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to Japan</Link></li>
              <li>&#8226; <Link href='/insights/importing-ethiopian-coffee-to-south-korea' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to South Korea</Link></li>
              <li>&#8226; <Link href='/insights/importing-ethiopian-coffee-to-uk' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to the UK</Link></li>
              <li>&#8226; <Link href='/insights/importing-ethiopian-coffee-to-canada-guide' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to Canada</Link></li>
              <li>&#8226; <Link href='/insights/importing-ethiopian-coffee-to-germany' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to Germany</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing and Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&#8226; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>Sourcing Green Coffee from Ethiopia</Link></li>
              <li>&#8226; <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost Guide</Link></li>
              <li>&#8226; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Coffee Contracts and Payment Terms</Link></li>
              <li>&#8226; <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='text-amber-700 hover:underline'>How to Choose an Ethiopian Exporter</Link></li>
              <li>&#8226; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality Control Guide</Link></li>
              <li>&#8226; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC. This guide covers Australian import regulations, biosecurity compliance, customs procedures, and market entry for Ethiopian green coffee. Contact us for current pricing, availability, and documentation support.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Export Services</Link> · <Link href='/about' className='underline'>About</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

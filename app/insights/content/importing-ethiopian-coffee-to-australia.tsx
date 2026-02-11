import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { ArrowRight } from '@/app/components/Arrow'
import { 
  HiOutlineCalendarDays, 
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
  HiOutlineDevicePhoneMobile,
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
        Your comprehensive guide to importing specialty Ethiopian green coffee into Australia: navigating DAFF biosecurity requirements, Australian Border Force customs, FSANZ food safety standards, and entering one of the world's most sophisticated and quality-obsessed specialty coffee markets.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Australia's world-class specialty coffee scene makes it a premium market for Ethiopian coffee imports.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Importing Ethiopian coffee to Australia - DAFF biosecurity ABF customs procedures'
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

      {/* INTRODUCTION */}
      <p className='my-4'>
        Australia boasts one of the world's most advanced and discerning specialty coffee cultures. From Melbourne's legendary laneway cafes to Sydney's harbourside roasteries, Brisbane's subtropical coffee scene to Perth's coastal specialty shops, Australians are renowned globally for their exceptional coffee standards and uncompromising quality expectations.
      </p>

      <p className='my-4'>
        Ethiopian coffee, with its complex floral profiles, bright acidity, and distinctive terroir, has become a cornerstone of Australia's specialty coffee revolution. Australian roasters and consumers seek transparency, traceability, and exceptional quality – values that align perfectly with Ethiopian specialty coffee's strengths. The Australian market offers premium pricing for quality, sophisticated distribution infrastructure, and a consumer base educated about coffee origins and processing methods.
      </p>

      <p className='my-4'>
        However, importing into Australia requires navigating the country's rigorous <span className='font-bold'>biosecurity regime</span> – among the world's strictest due to Australia's unique ecosystem. The <span className='font-bold'>Department of Agriculture, Fisheries and Forestry (DAFF)</span> enforces comprehensive quarantine controls, while the <span className='font-bold'>Australian Border Force (ABF)</span> handles customs clearance. This guide provides everything Ethiopian exporters and Australian importers need to successfully navigate Australia's import system.
      </p>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineGlobeAlt className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Australian Market Advantage:</span> Australia offers zero import duty on coffee, world-class logistics infrastructure, premium pricing for specialty coffee (among highest globally), and a sophisticated consumer market that values Ethiopian coffee's unique characteristics. Success requires strict biosecurity compliance and understanding Australia's quality-focused coffee culture.</span>
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href="#australian-market" className='text-amber-700 hover:underline'>1. Why Australian Coffee Importers Choose Ethiopian Coffee</a></li>
          <li><a href="#regulations" className='text-amber-700 hover:underline'>2. Understanding Australian Coffee Import Regulations</a></li>
          <li><a href="#biosecurity" className='text-amber-700 hover:underline'>3. DAFF Biosecurity Requirements</a></li>
          <li><a href="#customs-clearance" className='text-amber-700 hover:underline'>4. Australian Border Force Customs Clearance</a></li>
          <li><a href="#duties-taxes" className='text-amber-700 hover:underline'>5. Import Duties, GST & Tax Structure</a></li>
          <li><a href="#documentation" className='text-amber-700 hover:underline'>6. Required Import Documentation</a></li>
          <li><a href="#shipping-logistics" className='text-amber-700 hover:underline'>7. Shipping Routes & Australian Port Logistics</a></li>
          <li><a href="#cost-breakdown" className='text-amber-700 hover:underline'>8. Complete Cost Breakdown: FOB to Landed</a></li>
          <li><a href="#business-registration" className='text-amber-700 hover:underline'>9. Australian Business Registration & ABN</a></li>
          <li><a href="#market-insights" className='text-amber-700 hover:underline'>10. Australian Coffee Market Insights & Trends</a></li>
          <li><a href="#working-with-exporters" className='text-amber-700 hover:underline'>11. Working with Ethiopian Coffee Exporters</a></li>
          <li><a href="#success-tips" className='text-amber-700 hover:underline'>12. Tips for Success in the Australian Market</a></li>
        </ol>
      </div>

      {/* SECTION 1: AUSTRALIAN MARKET */}
      <h3 id="australian-market" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineArrowTrendingUp className='text-amber-600' />
        1. Why Australian Coffee Importers Choose Ethiopian Coffee
      </h3>

      <p className='my-4'>
        Australia's coffee culture is world-renowned for its sophistication, quality obsession, and café lifestyle:
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>The Australian Coffee Phenomenon</h4>

      <div className='bg-blue-50 p-6 rounded-lg my-6 border border-blue-200'>
        <h5 className='font-bold mb-3'>Australian Coffee Market Statistics</h5>
        <ul className='space-y-2 text-sm'>
          <li><HiOutlineChartBarSquare className='inline mr-2 text-blue-600' /><span className='font-bold'>Market Size:</span> AU$6+ billion coffee market (2024-2026)</li>
          <li><HiOutlineCube className='inline mr-2 text-blue-600' /><span className='font-bold'>Consumption:</span> 1.9+ billion cups consumed annually in Australia</li>
          <li><HiOutlineBuildingStorefront className='inline mr-2 text-blue-600' /><span className='font-bold'>Cafes:</span> 25,000+ cafes nationwide (highest per capita in developed world)</li>
          <li><HiOutlineArrowTrendingUp className='inline mr-2 text-blue-600' /><span className='font-bold'>Specialty Dominance:</span> 75%+ of cafes serve specialty-grade coffee</li>
          <li><HiOutlineUsers className='inline mr-2 text-blue-600' /><span className='font-bold'>Demographics:</span> 26 million population, highly urbanized (86%), affluent coffee consumers</li>
          <li><HiOutlineCurrencyDollar className='inline mr-2 text-blue-600' /><span className='font-bold'>Spending:</span> Average Australian spends AU$1,000+ annually on coffee (highest globally)</li>
          <li><HiOutlineGlobeAlt className='inline mr-2 text-blue-600' /><span className='font-bold'>Import Volume:</span> 80,000+ tons of green coffee annually</li>
          <li><HiOutlineStar className='inline mr-2 text-blue-600' /><span className='font-bold'>Quality Standards:</span> Australian coffee culture sets global benchmarks for espresso quality</li>
        </ul>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Why Ethiopian Coffee Excels in Australia</h4>

      <div className='grid md:grid-cols-2 gap-6 my-8'>
        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-3'>Consumer Drivers</h5>
          <ul className='space-y-2 text-sm'>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Flavor complexity appreciation:</span> Australian palate highly educated, values bright acidity and floral notes</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Filter coffee culture:</span> Batch brew, pour-over increasingly popular – perfect for Ethiopian coffee</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Origin storytelling:</span> Consumers demand transparency and connection to origin</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Sustainability focus:</span> Environmental and social responsibility critical to Australian consumers</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Natural processing popularity:</span> Fruit-forward Ethiopian naturals highly sought after</li>
          </ul>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold mb-3'>Business Drivers</h5>
          <ul className='space-y-2 text-sm'>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /><span className='font-bold'>Premium pricing:</span> Australian consumers pay among world's highest prices for specialty coffee</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /><span className='font-bold'>Competition differentiation:</span> Ethiopian origins help roasters stand out in crowded market</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /><span className='font-bold'>Espresso excellence:</span> High-quality Ethiopian coffees work beautifully in milk-based drinks (Australia's forte)</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /><span className='font-bold'>Retail growth:</span> Retail coffee (beans, subscriptions) booming online and in stores</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /><span className='font-bold'>Quality obsession:</span> Australian market rewards quality with loyalty and premium prices</li>
          </ul>
        </div>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'>
          <span className='font-bold'>Australian Market Reality:</span> Australia is arguably the world's most quality-focused coffee market. Consumers can distinguish quality instantly, cafes compete on excellence rather than price, and Ethiopian coffee's distinctive profiles align perfectly with Australian preferences. This is a premium market where quality is rewarded.
        </p>
      </div>

      {/* SECTION 2: REGULATIONS */}
      <h3 id="regulations" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineShieldCheck className='text-amber-600' />
        2. Understanding Australian Coffee Import Regulations
      </h3>

      <p className='my-4'>
        Coffee imports into Australia are regulated by multiple government agencies with distinct responsibilities:
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-8'>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold text-lg mb-3'><HiOutlineShieldCheck className='inline mr-2' />Department of Agriculture, Fisheries and Forestry (DAFF)</h5>
          <p className='text-sm mb-3'><span className='font-bold'>Website:</span> <a href='https://www.agriculture.gov.au' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>agriculture.gov.au</a></p>
          <p className='text-sm mb-2'><span className='font-bold'>Responsibilities:</span></p>
          <ul className='text-xs space-y-1'>
            <li>• Biosecurity risk assessment and management</li>
            <li>• Import permits for plant products</li>
            <li>• Border inspection and quarantine</li>
            <li>• Pest and disease prevention</li>
            <li>• Phytosanitary certificate verification</li>
            <li>• Container fumigation requirements</li>
          </ul>
        </div>

        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold text-lg mb-3'><HiOutlineBuildingOffice className='inline mr-2' />Australian Border Force (ABF)</h5>
          <p className='text-sm mb-3'><span className='font-bold'>Website:</span> <a href='https://www.abf.gov.au' target='_blank' rel='noopener noreferrer' className='text-blue-700 hover:underline'>abf.gov.au</a></p>
          <p className='text-sm mb-2'><span className='font-bold'>Responsibilities:</span></p>
          <ul className='text-xs space-y-1'>
            <li>• Customs clearance processing</li>
            <li>• Import declaration verification</li>
            <li>• Tariff classification and duty collection</li>
            <li>• GST collection at border</li>
            <li>• Trade compliance enforcement</li>
            <li>• Integrated Cargo System (ICS) management</li>
          </ul>
        </div>
      </div>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <h5 className='font-bold text-lg mb-3'><HiOutlineBeaker className='inline mr-2' />Food Standards Australia New Zealand (FSANZ)</h5>
        <p className='text-sm mb-3'><span className='font-bold'>Website:</span> <a href='https://www.foodstandards.gov.au' target='_blank' rel='noopener noreferrer' className='text-green-700 hover:underline'>foodstandards.gov.au</a></p>
        <p className='text-sm mb-2'><span className='font-bold'>Responsibilities:</span></p>
        <ul className='text-sm space-y-1'>
          <li>• Food safety standards development</li>
          <li>• Maximum residue limits (pesticides, contaminants)</li>
          <li>• Food labeling requirements</li>
          <li>• Import food safety compliance</li>
        </ul>
        <p className='text-xs mt-2 italic'>Note: Green coffee is low-risk and doesn't require specific FSANZ import approvals beyond compliance with food safety standards.</p>
      </div>

      <p className='my-4'>
        The key to successful Australian import is understanding that <span className='font-bold'>biosecurity (DAFF) is the primary hurdle</span>, not food safety. Australia's island ecosystem makes quarantine critically important.
      </p>

      {/* SECTION 3: BIOSECURITY */}
      <h3 id="biosecurity" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBeaker className='text-amber-600' />
        3. DAFF Biosecurity Requirements
      </h3>

      <p className='my-4'>
        Australia's biosecurity system is among the world's strictest. All plant products, including coffee, are subject to rigorous controls:
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>DAFF Biosecurity Compliance for Coffee</h4>

      <div className='space-y-6 my-8'>
        <div className='bg-red-50 p-6 rounded-lg border border-red-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineExclamationTriangle className='text-red-600' />
            Critical: Why Biosecurity Matters for Coffee
          </h5>
          <p className='text-sm mb-3'>Australia is free from many coffee pests and diseases present elsewhere:</p>
          <ul className='text-sm space-y-2'>
            <li>• <span className='font-bold'>Coffee Berry Borer:</span> Not present in Australia – major biosecurity risk</li>
            <li>• <span className='font-bold'>Coffee Leaf Rust:</span> Not established in Australia</li>
            <li>• <span className='font-bold'>Other pests:</span> Various beetles, fungi, and pathogens absent from Australia</li>
            <li>• <span className='font-bold'>Consequences:</span> Non-compliance can result in container fumigation, destruction, or re-export at importer's expense</li>
          </ul>
        </div>

        <div className='bg-green-50 p-6 rounded-lg border border-green-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <span className='bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm'>1</span>
            Import Permit (Not Required for Green Coffee)
          </h5>
          <p className='text-sm mb-3'>Good news: Green coffee beans (roasted or unroasted) do not require an import permit:</p>
          <ul className='text-sm space-y-2'>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>No permit required:</span> Coffee (HS code 0901) is a permitted import without permit</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>However:</span> Must still comply with all biosecurity conditions</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Inspect BICON:</span> Check Biosecurity Import Conditions (BICON) database for specific requirements</li>
          </ul>
        </div>

        <div className='bg-blue-50 p-6 rounded-lg border border-blue-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <span className='bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm'>2</span>
            Phytosanitary Certificate Requirements
          </h5>
          <p className='text-sm mb-3'>Ethiopian exporter must provide phytosanitary certificate:</p>
          <ul className='text-sm space-y-2'>
            <li>• <span className='font-bold'>Issuing Authority:</span> Ethiopian Ministry of Agriculture or Ethiopian Coffee Authority</li>
            <li>• <span className='font-bold'>Content:</span> Certificate must state coffee is free from quarantine pests and diseases</li>
            <li>• <span className='font-bold'>Treatment Declaration:</span> If fumigated, certificate must specify treatment method, date, chemical</li>
            <li>• <span className='font-bold'>Validity:</span> Certificate typically valid for 14-21 days from issue</li>
            <li>• <span className='font-bold'>Original Required:</span> DAFF requires original phytosanitary certificate (not copy)</li>
          </ul>
        </div>

        <div className='bg-amber-50 p-6 rounded-lg border border-amber-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <span className='bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm'>3</span>
            Container and Packaging Requirements
          </h5>
          <p className='text-sm mb-3'>DAFF has strict requirements for containers and packaging:</p>
          <ul className='text-sm space-y-2'>
            <li>• <span className='font-bold'>Container Cleanliness:</span> Container must be clean, free from soil, plant material, pests</li>
            <li>• <span className='font-bold'>Wooden Pallets:</span> Must comply with ISPM-15 (heat treatment or fumigation)</li>
            <li>• <span className='font-bold'>Jute/Hessian Bags:</span> Acceptable for green coffee but must be clean and pest-free</li>
            <li>• <span className='font-bold'>Inspection Risk:</span> DAFF may inspect containers upon arrival (random or targeted)</li>
          </ul>
        </div>

        <div className='bg-purple-50 p-6 rounded-lg border border-purple-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <span className='bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm'>4</span>
            Border Inspection Process
          </h5>
          <p className='text-sm mb-3'>DAFF conducts biosecurity inspections at ports:</p>
          <ul className='text-sm space-y-2'>
            <li>• <span className='font-bold'>Document Check:</span> Phytosanitary certificate verified first</li>
            <li>• <span className='font-bold'>Physical Inspection:</span> Container may be opened for visual inspection (5-10% of shipments)</li>
            <li>• <span className='font-bold'>Sampling:</span> DAFF may take samples for laboratory testing</li>
            <li>• <span className='font-bold'>Treatment:</span> If pests found, container may require fumigation (importer pays)</li>
            <li>• <span className='font-bold'>Clearance Time:</span> 1-3 days if no issues; longer if inspection or treatment required</li>
            <li>• <span className='font-bold'>Costs:</span> Biosecurity inspection fee ~AU$180-350 depending on cargo type</li>
          </ul>
        </div>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'>
          <span className='font-bold'>Biosecurity Success Key:</span> Work with Ethiopian exporters who understand Australian biosecurity requirements. Ensure phytosanitary certificates are correct, containers are clean, and packaging complies with ISPM-15. Most delays and costs arise from biosecurity issues, not customs clearance.
        </p>
      </div>

      {/* SECTION 4: CUSTOMS CLEARANCE */}
      <h3 id="customs-clearance" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBuildingOffice className='text-amber-600' />
        4. Australian Border Force Customs Clearance
      </h3>

      <p className='my-4'>
        After biosecurity clearance, cargo proceeds to ABF customs processing:
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Integrated Cargo System (ICS)</h4>

      <div className='bg-blue-50 p-6 rounded-lg my-6 border border-blue-200'>
        <p className='text-sm mb-3'>
          Australia uses the <span className='font-bold'>Integrated Cargo System (ICS)</span> for all import declarations:
        </p>
        <ul className='space-y-2 text-sm'>
          <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /><span className='font-bold'>Electronic system:</span> All customs declarations lodged online via ICS</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /><span className='font-bold'>Customs brokers:</span> Most importers use licensed customs brokers to handle declarations</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /><span className='font-bold'>Risk-based assessment:</span> ABF uses automated risk profiling</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /><span className='font-bold'>Real-time processing:</span> Declarations typically processed within hours</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /><span className='font-bold'>Electronic payment:</span> Duties and GST paid electronically</li>
        </ul>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>ABF Customs Requirements</h4>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <table className='w-full text-sm'>
          <thead>
            <tr className='border-b-2 border-gray-300'>
              <th className='text-left py-2 pr-4'>Requirement</th>
              <th className='text-left py-2'>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Australian Business Number (ABN)</td>
              <td className='py-2'>Required for all importers (register at business.gov.au)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Tariff Classification</td>
              <td className='py-2'>0901.11.00 (Coffee, not roasted, not decaffeinated) or 0901.12.00 (decaffeinated)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Import Duty</td>
              <td className='py-2'><span className='font-bold text-green-700'>0%</span> (Free - zero duty on coffee)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Goods and Services Tax (GST)</td>
              <td className='py-2'>10% on CIF value + duty (duty is zero, so 10% of CIF)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Import Declaration</td>
              <td className='py-2'>Full import declaration via ICS (B650 for warehouse, N10 for home consumption)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Customs Broker</td>
              <td className='py-2'>Licensed broker required (unless importer self-clears with ABF authorization)</td>
            </tr>
            <tr>
              <td className='py-2 font-bold'>Processing Time</td>
              <td className='py-2'>1-2 business days (after biosecurity clearance)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <h5 className='font-bold mb-3'>GST and Input Tax Credits</h5>
        <p className='text-sm mb-3'>While coffee imports are subject to 10% GST, registered businesses can claim this back:</p>
        <ul className='text-sm space-y-2'>
          <li>✓ <span className='font-bold'>GST at Import:</span> 10% GST charged on CIF value</li>
          <li>✓ <span className='font-bold'>Input Tax Credit:</span> GST-registered businesses claim this as input tax credit</li>
          <li>✓ <span className='font-bold'>BAS Reporting:</span> Claim on quarterly Business Activity Statement (BAS)</li>
          <li>✓ <span className='font-bold'>Net Impact:</span> For GST-registered businesses, the 10% GST is recoverable (temporary cash flow impact only)</li>
        </ul>
      </div>

      {/* SECTION 5: DUTIES & TAXES */}
      <h3 id="duties-taxes" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='text-amber-600' />
        5. Import Duties, GST & Tax Structure
      </h3>

      <p className='my-4'>
        Australia offers favorable duty treatment for coffee imports:
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3'>Australian Coffee Import Tax Structure</h4>
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
              <td className='py-2 text-gray-600'>Zero duty on coffee (tariff code 0901) under WTO schedule</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Goods and Services Tax (GST)</td>
              <td className='py-2 font-bold'>10%</td>
              <td className='py-2 text-gray-600'>Applied on CIF value (recoverable for GST-registered businesses)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Biosecurity Inspection Fee</td>
              <td className='py-2'>AU$180-350</td>
              <td className='py-2 text-gray-600'>DAFF inspection fee (varies by cargo type)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Customs Broker Fee</td>
              <td className='py-2'>AU$150-300</td>
              <td className='py-2 text-gray-600'>Licensed broker service fee (negotiable)</td>
            </tr>
            <tr>
              <td className='py-2 font-bold'>Port Handling Charges</td>
              <td className='py-2'>AU$400-800</td>
              <td className='py-2 text-gray-600'>Terminal handling, documentation, short-term storage</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <h5 className='font-bold mb-3'>Understanding Australian GST for Coffee Importers</h5>
        <p className='text-sm mb-3'>
          The 10% GST is charged at import but <span className='font-bold'>recoverable for GST-registered businesses</span>:
        </p>
        <ul className='space-y-2 text-sm'>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>GST Registration:</span> Businesses with turnover over AU$75,000 must register for GST</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Input Tax Credit:</span> GST paid on imports claimed as input tax credit</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>BAS Filing:</span> Quarterly (or monthly for large businesses) Business Activity Statement</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Recovery Timeline:</span> GST credited on next BAS lodgment (typically quarterly)</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Cash Flow:</span> Temporary cash flow impact until next BAS refund</li>
        </ul>
        <p className='text-xs mt-3 italic'>
          Result: For GST-registered businesses, the 10% GST is not a true cost, only a temporary cash flow consideration.
        </p>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'>
          <span className='font-bold'>Australian Tax Advantage:</span> Zero customs duty on coffee makes Australia highly competitive. The 10% GST is recoverable for registered businesses, meaning your true landed cost is FOB price + logistics costs only (plus temporary GST cash flow impact).
        </p>
      </div>

      {/* SECTION 6: DOCUMENTATION */}
      <h3 id="documentation" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineDocumentText className='text-amber-600' />
        6. Required Import Documentation
      </h3>

      <p className='my-4'>
        Comprehensive documentation is critical for Australian biosecurity and customs clearance:
      </p>

      <div className='space-y-4 my-8'>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold mb-2'><HiOutlineDocumentText className='inline mr-2 text-amber-600' />From Ethiopian Exporter (Critical)</h5>
          <ul className='text-sm space-y-1'>
            <li>• <span className='font-bold'>Phytosanitary Certificate:</span> Original certificate from Ethiopian Ministry of Agriculture/Coffee Authority (CRITICAL for DAFF)</li>
            <li>• <span className='font-bold'>Commercial Invoice:</span> FOB value, product description, tariff code, exporter/importer details</li>
            <li>• <span className='font-bold'>Packing List:</span> Detailed breakdown of bags, weights (net/gross), container seal numbers</li>
            <li>• <span className='font-bold'>Certificate of Origin:</span> From Ethiopian Chamber of Commerce</li>
            <li>• <span className='font-bold'>Quality Certificate:</span> ECX grade certificate or cupping report</li>
            <li>• <span className='font-bold'>Fumigation Certificate:</span> If wooden pallets used, must show ISPM-15 compliance</li>
            <li>• <span className='font-bold'>Bill of Lading:</span> Ocean B/L showing shipment details</li>
          </ul>
        </div>

        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold mb-2'><HiOutlineTruck className='inline mr-2 text-blue-600' />From Shipping Company/Freight Forwarder</h5>
          <ul className='text-sm space-y-1'>
            <li>• <span className='font-bold'>Bill of Lading (B/L):</span> Original or telex release B/L</li>
            <li>• <span className='font-bold'>Arrival Notice:</span> Notification of vessel arrival at Australian port</li>
            <li>• <span className='font-bold'>Delivery Order:</span> Authorization to release cargo</li>
            <li>• <span className='font-bold'>Container Packing Declaration:</span> Container condition and seal information</li>
          </ul>
        </div>

        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-2'><HiOutlineGlobeAlt className='inline mr-2 text-green-600' />Australian Documentation (Importer/Broker)</h5>
          <ul className='text-sm space-y-1'>
            <li>• <span className='font-bold'>Australian Business Number (ABN):</span> Your ABN for customs clearance</li>
            <li>• <span className='font-bold'>Import Declaration:</span> Lodged via ICS by customs broker</li>
            <li>• <span className='font-bold'>GST Registration:</span> Evidence of GST registration if claiming input tax credit</li>
            <li>• <span className='font-bold'>Food Business Registration:</span> State/territory food business license (requirements vary)</li>
          </ul>
        </div>
      </div>

      <div className='bg-red-50 p-6 rounded-lg my-6 border border-red-200'>
        <p className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineExclamationTriangle className='text-red-600' />
          Documentation Errors That Cause Delays
        </p>
        <ul className='space-y-2 text-sm'>
          <li><HiOutlineExclamationTriangle className='inline mr-2 text-red-600' /><span className='font-bold'>Missing or incorrect phytosanitary certificate</span> – #1 cause of delays and container holds</li>
          <li><HiOutlineExclamationTriangle className='inline mr-2 text-red-600' />Phytosanitary certificate not in original form (DAFF requires original, not copy)</li>
          <li><HiOutlineExclamationTriangle className='inline mr-2 text-red-600' />Container seal numbers not matching between documents</li>
          <li><HiOutlineExclamationTriangle className='inline mr-2 text-red-600' />Incorrect tariff classification or HS code</li>
          <li><HiOutlineExclamationTriangle className='inline mr-2 text-red-600' />Invoice value discrepancies between commercial invoice and B/L</li>
          <li><HiOutlineExclamationTriangle className='inline mr-2 text-red-600' />Incomplete product description (must specify green coffee, grade, processing method)</li>
        </ul>
      </div>

      {/* SECTION 7: SHIPPING LOGISTICS */}
      <h3 id="shipping-logistics" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineTruck className='text-amber-600' />
        7. Shipping Routes & Australian Port Logistics
      </h3>

      <p className='my-4'>
        Ethiopian coffee reaches Australia through four major container ports:
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-8'>
        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold text-lg mb-3'><HiOutlineMapPin className='inline mr-2 text-blue-600' />Port of Melbourne</h5>
          <p className='text-sm mb-3'>Australia's largest container port</p>
          <ul className='text-sm space-y-2'>
            <li>• <span className='font-bold'>Position:</span> Australia's busiest port (40% of container trade)</li>
            <li>• <span className='font-bold'>Location:</span> Victoria, serves Melbourne's massive coffee scene</li>
            <li>• <span className='font-bold'>Coffee Volume:</span> Handles ~45% of Australia's coffee imports</li>
            <li>• <span className='font-bold'>Advantages:</span> Excellent infrastructure, proximity to Melbourne roasters (coffee capital)</li>
            <li>• <span className='font-bold'>Free Storage:</span> 5 days typically</li>
          </ul>
        </div>

        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold text-lg mb-3'><HiOutlineMapPin className='inline mr-2 text-green-600' />Port Botany (Sydney)</h5>
          <p className='text-sm mb-3'>NSW's primary container port</p>
          <ul className='text-sm space-y-2'>
            <li>• <span className='font-bold'>Position:</span> Australia's 2nd largest container port</li>
            <li>• <span className='font-bold'>Location:</span> Sydney, serves NSW and ACT</li>
            <li>• <span className='font-bold'>Coffee Volume:</span> ~30% of Australia's coffee imports</li>
            <li>• <span className='font-bold'>Advantages:</span> Sydney's growing specialty scene, proximity to roasters</li>
            <li>• <span className='font-bold'>Free Storage:</span> 5 days</li>
          </ul>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold text-lg mb-3'><HiOutlineMapPin className='inline mr-2 text-amber-600' />Port of Brisbane</h5>
          <p className='text-sm mb-3'>Queensland's major gateway</p>
          <ul className='text-sm space-y-2'>
            <li>• <span className='font-bold'>Position:</span> Australia's 3rd largest container port</li>
            <li>• <span className='font-bold'>Location:</span> Queensland, serves Brisbane and regional QLD</li>
            <li>• <span className='font-bold'>Advantages:</span> Growing specialty coffee market, subtropical climate</li>
            <li>• <span className='font-bold'>Free Storage:</span> 5 days</li>
          </ul>
        </div>

        <div className='bg-purple-50 p-5 rounded-lg border border-purple-200'>
          <h5 className='font-bold text-lg mb-3'><HiOutlineMapPin className='inline mr-2 text-purple-600' />Port of Fremantle (Perth)</h5>
          <p className='text-sm mb-3'>Western Australia's primary port</p>
          <ul className='text-sm space-y-2'>
            <li>• <span className='font-bold'>Position:</span> Western Australia's only major container port</li>
            <li>• <span className='font-bold'>Location:</span> Perth, serves WA</li>
            <li>• <span className='font-bold'>Advantages:</span> Closest Australian port to Africa/Middle East</li>
            <li>• <span className='font-bold'>Free Storage:</span> 5 days</li>
          </ul>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Shipping Route: Ethiopia to Australia</h4>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h5 className='font-bold mb-3'>Typical Shipping Timeline</h5>
        <ol className='space-y-3 text-sm'>
          <li>
            <span className='font-bold'>1. Addis Ababa → Djibouti Port:</span> 2-4 days
            <br/>
            <span className='text-xs text-gray-600'>Road/rail transport to Port of Djibouti</span>
          </li>
          <li>
            <span className='font-bold'>2. Djibouti → Suez Canal:</span> 5-7 days
            <br/>
            <span className='text-xs text-gray-600'>Red Sea route via Bab-el-Mandeb</span>
          </li>
          <li>
            <span className='font-bold'>3. Suez Canal → Indian Ocean:</span> 1-2 days
            <br/>
            <span className='text-xs text-gray-600'>Through Suez, down Red Sea</span>
          </li>
          <li>
            <span className='font-bold'>4. Indian Ocean → Australia:</span> 14-18 days
            <br/>
            <span className='text-xs text-gray-600'>Across Indian Ocean, via Sri Lanka/Singapore (depending on route)</span>
          </li>
          <li>
            <span className='font-bold'>5. Australian Port Handling & Clearance:</span> 3-5 days
            <br/>
            <span className='text-xs text-gray-600'>Unloading, biosecurity inspection, customs clearance, delivery</span>
          </li>
        </ol>
        <p className='text-sm mt-4 font-bold'>
          Total Transit Time: 25-36 days door-to-door (Ethiopia → Australian warehouse)
        </p>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Ocean Freight Costs</h4>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <table className='w-full text-sm'>
          <thead>
            <tr className='border-b-2 border-amber-300'>
              <th className='text-left py-2'>Container Size</th>
              <th className='text-left py-2'>Capacity</th>
              <th className='text-left py-2'>Freight Cost (Djibouti → Melbourne/Sydney)</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-amber-200'>
              <td className='py-2 font-bold'>20ft Container</td>
              <td className='py-2'>18-20 MT (~39,600-44,000 lbs)</td>
              <td className='py-2'>US$3,500-5,500</td>
            </tr>
            <tr>
              <td className='py-2 font-bold'>40ft Container</td>
              <td className='py-2'>26-28 MT (~57,000-62,000 lbs)</td>
              <td className='py-2'>US$5,500-7,500</td>
            </tr>
          </tbody>
        </table>
        <p className='text-xs mt-3 italic'>
          Note: Freight rates to Australia fluctuate based on season, fuel surcharges, and market demand. Australia-bound freight typically lower than Europe/Americas due to backhaul dynamics. Always request current quotes.
        </p>
      </div>

      {/* SECTION 8: COST BREAKDOWN */}
      <h3 id="cost-breakdown" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCube className='text-amber-600' />
        8. Complete Cost Breakdown: FOB to Landed
      </h3>

      <p className='my-4'>
        Here's a realistic cost analysis for importing Ethiopian specialty coffee to Australia:
      </p>

      <div className='bg-gray-100 p-6 rounded-lg my-6 border border-gray-300'>
        <h4 className='font-bold text-xl mb-4'>Sample Import Cost: 20ft Container to Melbourne</h4>
        
        <div className='bg-white p-4 rounded mb-4'>
          <p className='font-bold mb-2'>Container Specifications:</p>
          <ul className='text-sm space-y-1'>
            <li>• Container: 20ft Standard</li>
            <li>• Net Weight: 18,000 kg (39,683 lbs / 18 MT)</li>
            <li>• Coffee Grade: Ethiopian Specialty G1 Washed Yirgacheffe</li>
            <li>• FOB Price: $4.80/lb ($10.58/kg)</li>
          </ul>
        </div>

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
              <td className='py-2 px-3'><span className='font-bold'>Freight & Insurance</span></td>
              <td className='py-2 px-3 text-right'></td>
              <td className='py-2 px-3 text-right'></td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>Ocean Freight (Djibouti → Melbourne)</td>
              <td className='py-2 px-3 text-right'>$4,500</td>
              <td className='py-2 px-3 text-right'>$0.11</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>Marine Insurance (0.3% CIF)</td>
              <td className='py-2 px-3 text-right'>$586</td>
              <td className='py-2 px-3 text-right'>$0.01</td>
            </tr>
            <tr className='border-b bg-blue-50'>
              <td className='py-2 px-3 font-bold'>CIF Value (Melbourne)</td>
              <td className='py-2 px-3 text-right font-bold'>$195,564</td>
              <td className='py-2 px-3 text-right font-bold'>$4.93</td>
            </tr>
            <tr className='border-b bg-gray-50'>
              <td className='py-2 px-3'><span className='font-bold'>Australian Import Taxes</span></td>
              <td className='py-2 px-3 text-right'></td>
              <td className='py-2 px-3 text-right'></td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>Customs Duty (0%)</td>
              <td className='py-2 px-3 text-right text-green-700'>$0</td>
              <td className='py-2 px-3 text-right text-green-700'>$0.00</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>GST 10% (on CIF)</td>
              <td className='py-2 px-3 text-right'>$19,556</td>
              <td className='py-2 px-3 text-right'>$0.49</td>
            </tr>
            <tr className='border-b bg-gray-50'>
              <td className='py-2 px-3'><span className='font-bold'>Port & Clearance Fees</span></td>
              <td className='py-2 px-3 text-right'></td>
              <td className='py-2 px-3 text-right'></td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>Terminal Handling Charges (THC)</td>
              <td className='py-2 px-3 text-right'>$380</td>
              <td className='py-2 px-3 text-right'>$0.01</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>DAFF Biosecurity Inspection Fee</td>
              <td className='py-2 px-3 text-right'>$250</td>
              <td className='py-2 px-3 text-right'>$0.01</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>Documentation & D/O Fees</td>
              <td className='py-2 px-3 text-right'>$120</td>
              <td className='py-2 px-3 text-right'>$0.00</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>Customs Broker Fee</td>
              <td className='py-2 px-3 text-right'>$200</td>
              <td className='py-2 px-3 text-right'>$0.01</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>Container Transport (Port → Warehouse)</td>
              <td className='py-2 px-3 text-right'>$250</td>
              <td className='py-2 px-3 text-right'>$0.01</td>
            </tr>
            <tr className='border-t-2 border-gray-400 bg-green-50'>
              <td className='py-3 px-3 font-bold text-lg'>TOTAL LANDED COST</td>
              <td className='py-3 px-3 text-right font-bold text-lg'>$216,320</td>
              <td className='py-3 px-3 text-right font-bold text-lg'>$5.45</td>
            </tr>
            <tr className='bg-amber-50'>
              <td className='py-2 px-3 text-sm italic'>GST Recovery (for GST-registered business)</td>
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

        <div className='mt-4 p-4 bg-blue-50 rounded'>
          <p className='text-sm font-bold mb-2'>Cost Summary:</p>
          <ul className='text-sm space-y-1'>
            <li>• FOB Ethiopia: <span className='font-bold'>$4.80/lb</span></li>
            <li>• Landed Cost (before GST recovery): <span className='font-bold'>$5.45/lb</span> (+13.5% markup)</li>
            <li>• Net Cost (after GST recovery): <span className='font-bold'>$4.96/lb</span> (+3.3% markup)</li>
            <li>• Logistics Cost: <span className='font-bold'>$0.16/lb</span> (freight, insurance, fees)</li>
          </ul>
        </div>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'>
          <span className='font-bold'>Australian Cost Reality:</span> For GST-registered businesses, Australian landed costs are highly competitive – only ~3-4% above FOB price. Zero customs duty and lower freight rates to Australia make it one of the most cost-effective premium specialty markets globally.
        </p>
      </div>

      {/* SECTION 9: BUSINESS REGISTRATION */}
      <h3 id="business-registration" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBuildingOffice className='text-amber-600' />
        9. Australian Business Registration & ABN
      </h3>

      <p className='my-4'>
        To import coffee into Australia, you need proper business registration:
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-8'>
        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold mb-3'><HiOutlineBuildingOffice className='inline mr-2 text-blue-600' />Company (Pty Ltd)</h5>
          <p className='text-sm mb-3'>Most common structure for importers</p>
          <ul className='text-sm space-y-2'>
            <li><span className='font-bold'>Registration:</span> Register with ASIC (Australian Securities & Investments Commission)</li>
            <li><span className='font-bold'>Cost:</span> AU$506 (ASIC registration fee)</li>
            <li><span className='font-bold'>Timeline:</span> 1-3 business days</li>
            <li><span className='font-bold'>Liability:</span> Limited liability protection</li>
            <li><span className='font-bold'>Taxation:</span> Company tax 25-30%</li>
            <li><span className='font-bold'>Best For:</span> Serious importers, scalable operations</li>
          </ul>
        </div>

        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-3'><HiOutlineUsers className='inline mr-2 text-green-600' />Sole Trader</h5>
          <p className='text-sm mb-3'>Simplest structure for small operations</p>
          <ul className='text-sm space-y-2'>
            <li><span className='font-bold'>Registration:</span> Register ABN online (business.gov.au)</li>
            <li><span className='font-bold'>Cost:</span> Free</li>
            <li><span className='font-bold'>Timeline:</span> Immediate</li>
            <li><span className='font-bold'>Liability:</span> Unlimited personal liability</li>
            <li><span className='font-bold'>Taxation:</span> Personal income tax rates</li>
            <li><span className='font-bold'>Best For:</span> Small roasters, individual importers</li>
          </ul>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Essential Registrations for Australian Coffee Importers</h4>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <ol className='space-y-3 text-sm list-decimal ml-5'>
          <li><span className='font-bold'>Australian Business Number (ABN):</span> Apply at business.gov.au (free, instant for most applicants)</li>
          <li><span className='font-bold'>Company Registration (if applicable):</span> Register Pty Ltd with ASIC (asic.gov.au)</li>
          <li><span className='font-bold'>GST Registration:</span> Register for GST if turnover exceeds AU$75,000 (mandatory threshold)</li>
          <li><span className='font-bold'>Food Business Registration:</span> Register with state/territory health authority (requirements vary by state)</li>
          <li><span className='font-bold'>Import/Export Registration:</span> Register with ABF if self-clearing (most use customs brokers)</li>
          <li><span className='font-bold'>Business Bank Account:</span> Open Australian business bank account</li>
        </ol>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold mb-3'>Foreign Companies Importing to Australia:</p>
        <p className='text-sm mb-2'>Non-Australian businesses can import through:</p>
        <ul className='text-sm space-y-2'>
          <li>• <span className='font-bold'>Australian Subsidiary:</span> Establish Australian Pty Ltd (recommended for regular imports)</li>
          <li>• <span className='font-bold'>Branch Registration:</span> Register foreign company branch in Australia</li>
          <li>• <span className='font-bold'>Local Importer Partner:</span> Work with established Australian importer (simplest initially)</li>
          <li>• <span className='font-bold'>Direct Import:</span> Foreign companies can import directly if they obtain ABN and comply with all requirements</li>
        </ul>
      </div>

      {/* SECTION 10: MARKET INSIGHTS */}
      <h3 id="market-insights" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineMapPin className='text-amber-600' />
        10. Australian Coffee Market Insights & Trends
      </h3>

      <p className='my-4'>
        Understanding Australian coffee culture is essential – it's unique globally:
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Key Australian Coffee Market Trends (2024-2026)</h4>

      <div className='space-y-4 my-6'>
        <div className='border-l-4 border-green-500 pl-4'>
          <h5 className='font-bold'>Espresso Excellence as Standard</h5>
          <p className='text-sm'>Australians expect world-class espresso as baseline, not premium. Ethiopian coffees must perform excellently in milk-based drinks (flat white, latte) – this is where Australian baristas shine.</p>
        </div>

        <div className='border-l-4 border-blue-500 pl-4'>
          <h5 className='font-bold'>Filter Coffee Growth</h5>
          <p className='text-sm'>While espresso dominates, filter coffee (batch brew, pour-over) growing rapidly in specialty cafes. Perfect for showcasing Ethiopian coffee's nuanced flavors.</p>
        </div>

        <div className='border-l-4 border-purple-500 pl-4'>
          <h5 className='font-bold'>Melbourne: Global Coffee Capital</h5>
          <p className='text-sm'>Melbourne arguably world's most sophisticated coffee city. Sets global trends, influences international markets. Success in Melbourne signals quality recognition worldwide.</p>
        </div>

        <div className='border-l-4 border-amber-500 pl-4'>
          <h5 className='font-bold'>Cafe Culture as Lifestyle</h5>
          <p className='text-sm'>Coffee is social fabric of Australian urban life. Cafes are community hubs, third spaces, essential daily ritual. This drives consistent, high-volume quality coffee consumption.</p>
        </div>

        <div className='border-l-4 border-red-500 pl-4'>
          <h5 className='font-bold'>Origin Transparency & Ethics</h5>
          <p className='text-sm'>Australian consumers highly value transparency, farmer relationships, sustainability. Ethiopian coffee's traceable supply chains and cooperative models resonate strongly.</p>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Notable Australian Specialty Roasters Using Ethiopian Coffee</h4>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <p className='text-sm mb-3'>Leading Australian roasters championing Ethiopian origins:</p>
        <ul className='text-sm space-y-2 grid md:grid-cols-2 gap-x-6'>
          <li>• <span className='font-bold'>Market Lane Coffee</span> (Melbourne)</li>
          <li>• <span className='font-bold'>Proud Mary Coffee</span> (Melbourne)</li>
          <li>• <span className='font-bold'>Seven Seeds Coffee Roasters</span> (Melbourne)</li>
          <li>• <span className='font-bold'>ST. ALi Coffee Roasters</span> (Melbourne)</li>
          <li>• <span className='font-bold'>Industry Beans</span> (Melbourne)</li>
          <li>• <span className='font-bold'>Single O</span> (Sydney)</li>
          <li>• <span className='font-bold'>Toby's Estate</span> (Sydney)</li>
          <li>• <span className='font-bold'>Campos Coffee</span> (Sydney)</li>
          <li>• <span className='font-bold'>Ona Coffee</span> (Canberra)</li>
          <li>• <span className='font-bold'>Blacklist Coffee Roasters</span> (Brisbane)</li>
        </ul>
      </div>

      {/* SECTION 11: WORKING WITH EXPORTERS */}
      <h3 id="working-with-exporters" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCheckCircle className='text-amber-600' />
        11. Working with Ethiopian Coffee Exporters
      </h3>

      <p className='my-4'>
        For Australian importers, choosing the right Ethiopian export partner is crucial:
      </p>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <h5 className='font-bold mb-3'>What Australian Importers Should Look For</h5>
        <ul className='space-y-2 text-sm'>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Biosecurity Understanding:</span> Critical – exporter must understand Australian phytosanitary requirements</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Phytosanitary Certificate Capability:</span> Can provide correct, original certificates from authorized bodies</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Container Cleanliness:</span> Understands Australian requirements for clean containers, ISPM-15 compliance</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Quality Consistency:</span> Established QC, cupping protocols meeting Australian standards</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Transparency:</span> Farm-level traceability (critical for Australian market)</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Sample Program:</span> Pre-shipment samples for Australian approval</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Communication:</span> English proficiency, Australian time zone compatibility</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Flexible Terms:</span> Payment options, smaller order consolidation</li>
        </ul>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <h4 className='font-bold text-xl mb-3'>Partner with Ethio Coffee Export for Australian Market</h4>
        <p className='mb-4'>
          Ethio Coffee Export understands Australian biosecurity requirements and serves the Australian specialty market:
        </p>
        <ul className='space-y-2 mb-4'>
          <li><HiOutlineCheckCircle className='inline mr-2' />Complete Australian documentation including phytosanitary certificates from authorized Ethiopian bodies</li>
          <li><HiOutlineCheckCircle className='inline mr-2' />Experience with DAFF biosecurity compliance and clean container protocols</li>
          <li><HiOutlineCheckCircle className='inline mr-2' />Specialty-grade Ethiopian coffee meeting Australian quality standards</li>
          <li><HiOutlineCheckCircle className='inline mr-2' />Pre-shipment sample program for Australian roasters</li>
          <li><HiOutlineCheckCircle className='inline mr-2' />Container consolidation options for smaller orders</li>
          <li><HiOutlineCheckCircle className='inline mr-2' />English communication and Australian time zone compatibility</li>
          <li><HiOutlineCheckCircle className='inline mr-2' />Transparent pricing, farm-level traceability, sustainability documentation</li>
          <li><HiOutlineCheckCircle className='inline mr-2' />Established shipping routes to Melbourne, Sydney, Brisbane</li>
        </ul>
        <p>
          <Link href='/contact-us' className='font-bold underline'>Contact us</Link> to discuss sourcing Ethiopian specialty coffee for the Australian market.
        </p>
      </div>

      {/* SECTION 12: SUCCESS TIPS */}
      <h3 id="success-tips" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineLightBulb className='text-amber-600' />
        12. Tips for Success in the Australian Market
      </h3>

      <div className='space-y-4 my-6'>
        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold mb-2'><HiOutlineClipboardDocumentList className='inline mr-2 text-blue-600' />Biosecurity is Non-Negotiable</h5>
          <p className='text-sm'>Triple-check phytosanitary certificates, ensure containers are clean, verify ISPM-15 compliance for wooden pallets. Biosecurity failures cause expensive delays, fumigation, or destruction. Work only with exporters who understand Australian requirements.</p>
        </div>

        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-2'><HiOutlineUsers className='inline mr-2 text-green-600' />Use Experienced Customs Brokers</h5>
          <p className='text-sm'>Licensed customs brokers handle both ABF customs and DAFF biosecurity coordination. Their AU$150-300 fee is excellent value for smooth clearance, especially for first-time importers.</p>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold mb-2'><HiOutlineStar className='inline mr-2 text-amber-600' />Quality Standards are Extremely High</h5>
          <p className='text-sm'>Australian consumers and cafes can instantly identify quality issues. Don't compromise on quality – Australian market rewards excellence and punishes mediocrity. Ethiopian specialty grade only.</p>
        </div>

        <div className='bg-purple-50 p-5 rounded-lg border border-purple-200'>
          <h5 className='font-bold mb-2'><HiOutlineLightBulb className='inline mr-2 text-purple-600' />Melbourne First, Then Expand</h5>
          <p className='text-sm'>Melbourne is Australia's coffee capital and quality benchmark. Success in Melbourne validates your coffee and opens doors nationally. Sydney, Brisbane, Adelaide, Perth follow Melbourne's lead.</p>
        </div>

        <div className='bg-red-50 p-5 rounded-lg border border-red-200'>
          <h5 className='font-bold mb-2'><HiOutlineClock className='inline mr-2 text-red-600' />Plan Around Ethiopian Harvest</h5>
          <p className='text-sm'>Ethiopian harvest (October-February) means freshest coffee arrives Australia March-May. Australians highly value fresh crop. Plan annual buying to maintain freshness year-round.</p>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold mb-2'><HiOutlineMagnifyingGlass className='inline mr-2 text-gray-600' />Espresso Performance is Critical</h5>
          <p className='text-sm'>While Ethiopian coffee's complexity shines in filter, it must also perform excellently in milk-based espresso drinks. Australian cafes live on flat whites and lattes. Ensure your Ethiopian coffee works beautifully in milk.</p>
        </div>
      </div>

      {/* CONCLUSION */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6'>
        Key Takeaways for Importing Ethiopian Coffee to Australia
      </h3>

      <p className='my-4'>
        Australia represents the pinnacle of global specialty coffee culture. With the world's highest per-capita coffee consumption of quality coffee, uncompromising standards, sophisticated consumers, and premium pricing, Australia rewards excellence like no other market. Ethiopian specialty coffee, with its distinctive profiles and transparent supply chains, aligns perfectly with Australian values.
      </p>

      <p className='my-4'>
        Success in the Australian market requires two things: exceptional quality and rigorous biosecurity compliance. Australian consumers and cafes can instantly identify great coffee – quality opens doors and builds loyal followings. But biosecurity compliance is non-negotiable: DAFF's requirements exist to protect Australia's unique ecosystem and must be respected absolutely.
      </p>

      <p className='my-4'>
        For Ethiopian exporters and Australian importers who understand these requirements, Australia offers extraordinary opportunities: zero customs duty, recoverable GST, premium pricing, sophisticated distribution, and a consumer market that genuinely appreciates Ethiopian coffee's unique characteristics. This is where quality is celebrated and rewarded.
      </p>

      <div className='bg-gray-100 p-6 rounded-lg my-8 border border-gray-300'>
        <h4 className='font-bold text-lg mb-3'>Key Takeaways</h4>
        <ul className='space-y-2 text-sm'>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Zero customs duty</span> on coffee (AU saves money vs many markets)</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>10% GST recoverable</span> for registered businesses (input tax credit)</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Phytosanitary certificate mandatory</span> – must be original from authorized body</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>DAFF biosecurity is critical</span> – strict quarantine controls for clean containers</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Melbourne & Sydney</span> are primary coffee import ports</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Transit time: 25-36 days</span> Ethiopia to Australian warehouse</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Landed cost ~3-4% above FOB</span> (after GST recovery)</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Quality standards extremely high</span> – Australian consumers spot quality instantly</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Premium market</span> – highest per-capita specialty coffee spending globally</li>
        </ul>
      </div>

      {/* FAQ SECTION */}
      <section className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions About Importing Ethiopian Coffee to Australia</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Is there import duty on Ethiopian coffee in Australia?</h4>
            <p className="text-sm text-gray-600">No. Green coffee beans enter Australia at zero customs duty. A 10% GST applies at import but is fully recoverable as an input tax credit for GST-registered businesses.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What are DAFF biosecurity requirements for importing coffee to Australia?</h4>
            <p className="text-sm text-gray-600">Australia's Department of Agriculture, Fisheries and Forestry requires an original phytosanitary certificate, clean shipping containers free of contaminants, and may conduct biosecurity inspections at the port. First-time importers face closer scrutiny.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How long does shipping from Ethiopia to Australia take?</h4>
            <p className="text-sm text-gray-600">Transit time from Djibouti to Australian ports (Melbourne or Sydney) typically ranges from 25 to 36 days, including customs clearance and biosecurity processing at arrival.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What phytosanitary certificates are needed for Australian coffee imports?</h4>
            <p className="text-sm text-gray-600">An original phytosanitary certificate issued by an authorized body in Ethiopia is mandatory. The certificate must confirm the coffee is free from pests and diseases. Copies or digital versions are not accepted.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What is the landed cost of Ethiopian coffee imported to Australia?</h4>
            <p className="text-sm text-gray-600">Landed cost is typically 3 to 4% above the FOB price after GST recovery. This includes freight, insurance, port charges, and customs processing. The zero duty rate makes Australia cost-competitive compared to many other markets.</p>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <div className='my-8 p-6 bg-gray-50 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <ul className='space-y-2 text-sm'>
          <li>
            <Link href='/ethiopian-coffee-exporter' className='text-amber-700 hover:underline inline-flex items-center gap-1'>
              <ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Ethiopian Coffee Exporter: Your Trusted Export Partner
            </Link>
          </li>
          <li>
            <Link href='/insights/importing-ethiopian-coffee-to-japan' className='text-amber-700 hover:underline inline-flex items-center gap-1'>
              <ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Importing Ethiopian Coffee to Japan: Complete Market Entry Guide
            </Link>
          </li>
          <li>
            <Link href='/insights/importing-ethiopian-coffee-to-south-korea' className='text-amber-700 hover:underline inline-flex items-center gap-1'>
              <ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Importing Ethiopian Coffee to South Korea: Complete Market Guide
            </Link>
          </li>
          <li>
            <Link href='/insights/importing-ethiopian-coffee-to-uk' className='text-amber-700 hover:underline inline-flex items-center gap-1'>
              <ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Importing Ethiopian Coffee to UK: Complete Post-Brexit Guide
            </Link>
          </li>
          <li>
            <Link href='/insights/how-to-import-ethiopian-coffee-to-usa' className='text-amber-700 hover:underline inline-flex items-center gap-1'>
              <ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> How to Import Ethiopian Specialty Coffee to the United States
            </Link>
          </li>
          <li>
            <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline inline-flex items-center gap-1'>
              <ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Sourcing Green Coffee from Ethiopia: Complete Guide
            </Link>
          </li>
          <li>
            <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline inline-flex items-center gap-1'>
              <ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Green Coffee Quality Control: Defects, Grading & What Importers Should Inspect
            </Link>
          </li>
        </ul>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Import Ethiopian Coffee to Australia</h4>
        <p className='my-2'>
          At <span className='font-bold'>Ethio Coffee Export PLC</span>, we understand Australian biosecurity requirements and can ensure smooth customs clearance for your Ethiopian coffee imports.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Our Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Contact Us</Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>How to Order</Link>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> A complete guide for importing Ethiopian coffee to Australia, covering biosecurity, customs, documentation, and logistics.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

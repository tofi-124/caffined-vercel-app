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
  HiOutlineUsers,
  HiOutlineBuildingStorefront,
  HiOutlineHandThumbUp,
  HiOutlineScale
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function ImportingEthiopianCoffeeToUK({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        The definitive post-Brexit guide to importing Ethiopian green coffee into the United Kingdom: DCTS duty-free access, HMRC customs procedures, FSA compliance, EORI registration, shipping through Felixstowe and Tilbury, and building a profitable sourcing relationship with Ethiopian exporters.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Ethiopian specialty coffee has become a cornerstone of the UK&apos;s third-wave coffee scene, from London&apos;s specialty roasters to Edinburgh&apos;s artisan cafes.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Import Ethiopian coffee to the UK - post-Brexit DCTS duty-free HMRC customs FSA food safety'
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
          Ethiopian green coffee enters the UK duty-free under the Developing Countries Trading Scheme (DCTS), with zero VAT for registered business importers. The import process requires a UK EORI number, FSA food business registration, and customs declaration via the CDS system. With landed costs only 3-4% above FOB price, the UK offers one of the most favourable import economics for Ethiopian specialty coffee globally.
        </p>
      </div>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Import Guide / UK Market / Ethiopian Coffee Export</span>
      </div>

      {/* INTRODUCTION */}
      <p className='my-4'>
        To import Ethiopian coffee to the UK successfully, you need to understand the post-Brexit regulatory framework, DCTS trade preferences, and the commercial channels that connect Ethiopian origins to British roasters. This guide covers every step from EORI registration to warehousing your first container.
      </p>

      <p className='my-4'>
        The United Kingdom imported over 120,000 tonnes of green coffee in the 2024/25 season. Ethiopian beans account for roughly 2% of that volume, a figure that significantly understates the country&apos;s importance in the UK specialty segment. UK roasters consistently rate Ethiopian origins among their top sellers, particularly Yirgacheffe, Guji, and Sidamo lots scoring 84+ on the SCA scale.
      </p>

      <p className='my-4'>
        Since January 2021, the UK runs its own customs, food safety, and trade preference systems, separate from the EU. For Ethiopian coffee exporters and UK-based importers, this means new documentation requirements but also a streamlined duty structure. This guide details every regulatory, logistical, and commercial step involved.
      </p>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href="#uk-market" className='text-amber-700 hover:underline'>1. Why UK Importers Choose Ethiopian Coffee</a></li>
          <li><a href="#regulatory-framework" className='text-amber-700 hover:underline'>2. UK Regulatory Framework for Coffee Imports</a></li>
          <li><a href="#business-setup" className='text-amber-700 hover:underline'>3. EORI Registration and Business Setup</a></li>
          <li><a href="#fsa-compliance" className='text-amber-700 hover:underline'>4. FSA Food Safety Compliance</a></li>
          <li><a href="#hmrc-customs" className='text-amber-700 hover:underline'>5. HMRC Customs Clearance</a></li>
          <li><a href="#duties-dcts" className='text-amber-700 hover:underline'>6. Duties, VAT, and DCTS Benefits</a></li>
          <li><a href="#documentation" className='text-amber-700 hover:underline'>7. Required Import Documentation</a></li>
          <li><a href="#shipping-ports" className='text-amber-700 hover:underline'>8. Shipping Routes and UK Ports</a></li>
          <li><a href="#cost-breakdown" className='text-amber-700 hover:underline'>9. Landed Cost Breakdown</a></li>
          <li><a href="#organic-imports" className='text-amber-700 hover:underline'>10. Importing Organic Ethiopian Coffee</a></li>
          <li><a href="#market-channels" className='text-amber-700 hover:underline'>11. UK Market Channels and Intermediaries</a></li>
          <li><a href="#working-with-exporters" className='text-amber-700 hover:underline'>12. Working with Ethiopian Exporters</a></li>
        </ol>
      </div>

      {/* SECTION 1: UK MARKET */}
      <h3 id="uk-market" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineArrowTrendingUp className='text-amber-600' />
        1. Why UK Importers Choose Ethiopian Coffee
      </h3>

      <p className='my-4'>
        The UK coffee market generates over £4 billion annually (2024-2026), supported by 30,000+ coffee shops growing at roughly 6% per year. Specialty coffee represents the fastest-moving segment, expanding 10-15% annually as British consumers shift toward single-origin, traceable, and flavour-forward coffees.
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-8'>
        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-3'>Consumer Demand Drivers</h5>
          <ul className='space-y-2 text-sm'>
            <li>✓ <span className='font-bold'>Flavour sophistication:</span> British palate has shifted toward bright, fruity, floral profiles</li>
            <li>✓ <span className='font-bold'>Single-origin preference:</span> Transparency and traceability now expected, not optional</li>
            <li>✓ <span className='font-bold'>Filter coffee revival:</span> V60, Chemex, AeroPress methods showcase Ethiopian complexity</li>
            <li>✓ <span className='font-bold'>Ethical sourcing:</span> UK buyers value sustainability credentials and direct relationships</li>
            <li>✓ <span className='font-bold'>Subscription growth:</span> Direct-to-consumer roaster subscriptions fuel single-origin demand</li>
          </ul>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold mb-3'>Business Case for Ethiopian Coffee</h5>
          <ul className='space-y-2 text-sm'>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /> <span className='font-bold'>Premium pricing:</span> Yirgacheffe and Guji command top retail prices in the UK</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /> <span className='font-bold'>Differentiation:</span> Ethiopian origins help independents compete with chain brands</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /> <span className='font-bold'>Award exposure:</span> Leading UK roasters (Square Mile, Has Bean, Origin) champion Ethiopian lots</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /> <span className='font-bold'>Zero duty:</span> DCTS gives Ethiopian coffee 0% import duty, improving margins</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /> <span className='font-bold'>Regional expansion:</span> Specialty scenes in Manchester, Edinburgh, Bristol, Birmingham growing fast</li>
          </ul>
        </div>
      </div>

      <div className='bg-blue-50 p-6 rounded-lg my-6 border border-blue-200'>
        <h5 className='font-bold mb-3'>Ethiopia&apos;s Position in UK Coffee Imports</h5>
        <p className='text-sm mb-3'>
          According to CBI trade data, Brazil (30%), Vietnam (23%), Colombia (12%), and Indonesia (10%) supply the bulk of UK green coffee by volume. Ethiopia accounts for approximately 2% of total volume. That figure is misleading: Ethiopian coffee is concentrated in the specialty segment, where it punches far above its weight. For importers focused on 80+ cupping scores, Ethiopia is a top-three origin alongside Colombia and Kenya.
        </p>
      </div>

      {/* SECTION 2: REGULATORY FRAMEWORK */}
      <h3 id="regulatory-framework" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineShieldCheck className='text-amber-600' />
        2. UK Regulatory Framework for Coffee Imports
      </h3>

      <p className='my-4'>
        Post-Brexit, UK coffee imports are governed by three independent systems. Understanding which authority handles what prevents confusion and delays.
      </p>

      <div className='grid md:grid-cols-3 gap-4 my-6'>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold text-lg mb-2 flex items-center gap-2'><HiOutlineBuildingOffice className='text-amber-600' /> HMRC</h5>
          <p className='text-sm'>Customs clearance, duty collection, tariff classification, EORI numbers, Customs Declaration Service (CDS)</p>
        </div>
        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold text-lg mb-2 flex items-center gap-2'><HiOutlineBeaker className='text-blue-600' /> FSA</h5>
          <p className='text-sm'>Food safety standards, contaminant limits, food business registration, traceability, labelling. Works with FSS (Food Standards Scotland) for Scottish imports.</p>
        </div>
        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold text-lg mb-2 flex items-center gap-2'><HiOutlineScale className='text-green-600' /> DBT / DCTS</h5>
          <p className='text-sm'>The Department for Business and Trade administers the Developing Countries Trading Scheme (DCTS), which sets duty-free terms for Ethiopian coffee.</p>
        </div>
      </div>

      <div className='bg-red-50 p-6 rounded-lg my-6 border border-red-200'>
        <p className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineExclamationTriangle className='text-red-600' />
          Post-Brexit Changes You Must Know
        </p>
        <ul className='space-y-2 text-sm'>
          <li><HiOutlineExclamationTriangle className='inline mr-2 text-red-600' /> <span className='font-bold'>Separate EORI:</span> UK-specific EORI number required (starts with &quot;GB&quot;), separate from any EU EORI</li>
          <li><HiOutlineExclamationTriangle className='inline mr-2 text-red-600' /> <span className='font-bold'>CDS replaces CHIEF:</span> All customs declarations now submitted via the Customs Declaration Service</li>
          <li><HiOutlineExclamationTriangle className='inline mr-2 text-red-600' /> <span className='font-bold'>DCTS replaces EU GSP:</span> UK&apos;s own trade preference scheme replaced the EU&apos;s Generalised Scheme of Preferences</li>
          <li><HiOutlineExclamationTriangle className='inline mr-2 text-red-600' /> <span className='font-bold'>Environment Act:</span> Upcoming UK due diligence laws on forest-risk commodities (including coffee) may require deforestation-free documentation</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> <span className='font-bold text-green-700'>Still zero duty:</span> Ethiopian coffee remains duty-free under DCTS (Least Developed Country status)</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> <span className='font-bold text-green-700'>No health certificate for coffee:</span> Green coffee is classified as low-risk; no Import Health Certificate needed</li>
        </ul>
      </div>

      {/* SECTION 3: BUSINESS SETUP */}
      <h3 id="business-setup" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBuildingOffice className='text-amber-600' />
        3. EORI Registration and Business Setup
      </h3>

      <p className='my-4'>
        Before your first shipment arrives, complete these registrations. All are free or low-cost, but some have lead times.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <ol className='space-y-4 text-sm'>
          <li>
            <span className='font-bold'>1. Business Registration:</span> Register a UK limited company via Companies House (£12-50, 24 hours online) or as a sole trader with HMRC (free, immediate). A limited company is recommended for regular import operations.
          </li>
          <li>
            <span className='font-bold'>2. UK EORI Number:</span> Apply at <a href='https://www.gov.uk/eori' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>gov.uk/eori</a>. Free, issued immediately online. Format: GB + your VAT number or a unique identifier. Required for all UK imports.
          </li>
          <li>
            <span className='font-bold'>3. VAT Registration:</span> Mandatory if turnover exceeds £90,000. Registering voluntarily is recommended for importers, since green coffee is zero-rated; you will not owe VAT at import but can reclaim VAT on business expenses.
          </li>
          <li>
            <span className='font-bold'>4. Food Business Registration:</span> Register with your local authority as a food business operator. Free, but <span className='font-bold'>must be completed at least 28 days before your first import</span>. Apply via the gov.uk food business registration portal.
          </li>
          <li>
            <span className='font-bold'>5. HMRC Government Gateway Account:</span> Set up for online customs management, duty payments, and import declarations.
          </li>
        </ol>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold mb-3'>Non-UK Companies Importing to the UK</p>
        <ul className='text-sm space-y-2'>
          <li>• <span className='font-bold'>UK subsidiary:</span> Establish a UK limited company (recommended for regular imports)</li>
          <li>• <span className='font-bold'>UK branch:</span> Register an overseas company UK branch with Companies House</li>
          <li>• <span className='font-bold'>Local partner:</span> Work with an established UK importer of record (simplest but reduces margin control)</li>
          <li>• <span className='font-bold'>Indirect representation:</span> Use a customs broker as importer of record (limited scenarios only)</li>
        </ul>
      </div>

      {/* SECTION 4: FSA COMPLIANCE */}
      <h3 id="fsa-compliance" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBeaker className='text-amber-600' />
        4. FSA Food Safety Compliance
      </h3>

      <p className='my-4'>
        The <a href='https://www.food.gov.uk' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>Food Standards Agency</a> sets food safety rules for all imported food products. The good news: green coffee is classified as low-risk. Compliance is straightforward if you maintain proper documentation.
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-8'>
        <div className='bg-blue-50 p-6 rounded-lg border border-blue-200'>
          <h5 className='font-bold text-lg mb-3'>Contaminant Limits</h5>
          <ul className='text-sm space-y-2'>
            <li>• <span className='font-bold'>Ochratoxin A (OTA):</span> Maximum 5 μg/kg for roasted coffee (no explicit limit for green, but high-OTA lots flagged as high-risk)</li>
            <li>• <span className='font-bold'>Aflatoxins:</span> Maximum 5 μg/kg total aflatoxins</li>
            <li>• <span className='font-bold'>Pesticide residues:</span> Must not exceed MRLs per the <a href='https://www.hse.gov.uk/pesticides/mrls/index.htm' target='_blank' rel='noopener noreferrer' className='text-blue-700 hover:underline'>UK pesticide database</a></li>
            <li>• <span className='font-bold'>Heavy metals:</span> Lead and cadmium within acceptable limits</li>
            <li>• <span className='font-bold'>MOAHs:</span> Mineral Oil Aromatic Hydrocarbons monitored (no formal limit yet, but rising concern)</li>
          </ul>
        </div>

        <div className='bg-green-50 p-6 rounded-lg border border-green-200'>
          <h5 className='font-bold text-lg mb-3'>What Coffee Importers Get Right</h5>
          <ul className='text-sm space-y-2'>
            <li>✓ <span className='font-bold'>No health certificate:</span> Green coffee does not require an Import Health Certificate</li>
            <li>✓ <span className='font-bold'>No border inspection post:</span> Coffee is not subject to mandatory border control checks</li>
            <li>✓ <span className='font-bold'>Low inspection rate:</span> FSA may conduct random sampling at port, but this is rare for coffee</li>
            <li>✓ <span className='font-bold'>Traceability required:</span> &quot;One step back, one step forward&quot; principle applies; maintain records for 5+ years</li>
            <li>✓ <span className='font-bold'>Batch tracking:</span> Track coffee lots through your supply chain; maintain recall capability</li>
          </ul>
        </div>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium'>
          <span className='font-bold'>Practical note:</span> Ethiopian specialty coffee from reputable exporters with established QC systems typically meets all UK food safety standards without issue. The key risk factor is storage conditions during transit. Using <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline font-bold'>hermetic liners and proper stowage</Link> protects quality and prevents contaminant issues during the 17-25 day sea voyage.
        </p>
      </div>

      {/* SECTION 5: HMRC CUSTOMS */}
      <h3 id="hmrc-customs" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBuildingOffice className='text-amber-600' />
        5. HMRC Customs Clearance
      </h3>

      <p className='my-4'>
        All goods entering the UK must clear HMRC customs. Most coffee importers use a licensed customs broker to handle declarations, which costs £50-150 per shipment and prevents costly errors.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h5 className='font-bold mb-3'>HMRC Customs Requirements for Green Coffee</h5>
        <table className='w-full text-sm'>
          <thead>
            <tr className='border-b-2 border-gray-300'>
              <th className='text-left py-2 pr-4'>Requirement</th>
              <th className='text-left py-2'>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Commodity Code</td>
              <td className='py-2'>0901 11 00 00 (green, not decaffeinated) or 0901 12 00 00 (green, decaffeinated)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Declaration System</td>
              <td className='py-2'>Customs Declaration Service (CDS), submitted electronically by customs broker</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Import Duty</td>
              <td className='py-2'><span className='font-bold text-green-700'>0%</span> under DCTS (Ethiopia is a Least Developed Country)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Import VAT</td>
              <td className='py-2'><span className='font-bold text-green-700'>0%</span> (zero-rated for VAT-registered businesses)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Clearance Speed</td>
              <td className='py-2'>1-2 business days (if documentation is correct and no red-channel inspection)</td>
            </tr>
            <tr>
              <td className='py-2 font-bold'>Broker Fee</td>
              <td className='py-2'>£50-150 per declaration (negotiable for regular importers)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm'>
          <span className='font-bold'>Border Target Operating Model (BTOM):</span> The UK has been phasing in its new Border Target Operating Model since 2024, which introduces risk-based health checks on certain food imports. Green coffee remains in the lowest-risk category and is not subject to documentary or physical checks under BTOM. However, importers should monitor BTOM updates at <a href='https://www.gov.uk/government/publications/the-border-target-operating-model' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>gov.uk/btom</a> in case classification changes.
        </p>
      </div>

      {/* SECTION 6: DUTIES & DCTS */}
      <h3 id="duties-dcts" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='text-amber-600' />
        6. Duties, VAT, and DCTS Benefits
      </h3>

      <p className='my-4'>
        The UK offers exceptionally favourable tax treatment for Ethiopian coffee imports. This is not simply a WTO most-favoured-nation rate; it reflects a specific trade preference.
      </p>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <h5 className='font-bold mb-3'>Developing Countries Trading Scheme (DCTS)</h5>
        <p className='text-sm mb-3'>
          The <a href='https://www.gov.uk/government/publications/developing-countries-trading-scheme-dcts-new-policy-report' target='_blank' rel='noopener noreferrer' className='text-green-700 hover:underline'>DCTS</a> replaced the EU&apos;s Generalised Scheme of Preferences (GSP) on 19 June 2023. Ethiopia is classified as a <span className='font-bold'>Least Developed Country (LDC)</span> under DCTS, granting:
        </p>
        <ul className='space-y-2 text-sm'>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> <span className='font-bold'>0% import duty</span> on all goods, including green coffee (commodity code 0901)</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> <span className='font-bold'>No quota restrictions</span> on volume imported</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> <span className='font-bold'>Simplified rules of origin:</span> Coffee must be wholly obtained in Ethiopia (which green coffee inherently is)</li>
        </ul>
        <p className='text-xs mt-3 italic'>
          To claim DCTS preference, include the appropriate origin statement on documentation. Your customs broker will apply the correct preference code on the CDS declaration.
        </p>
      </div>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3'>Complete UK Coffee Import Tax Structure</h4>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='border-b-2 border-gray-300'>
              <th className='text-left py-2 pr-4'>Charge</th>
              <th className='text-left py-2 pr-4'>Rate</th>
              <th className='text-left py-2'>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Import Duty</td>
              <td className='py-2 text-green-700 font-bold'>0%</td>
              <td className='py-2 text-gray-600'>Under DCTS (LDC status). Also 0% under WTO MFN for green coffee.</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Import VAT</td>
              <td className='py-2 font-bold text-green-700'>0% (zero-rated)</td>
              <td className='py-2 text-gray-600'>Unroasted coffee is zero-rated for VAT-registered business importers</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Excise Duty</td>
              <td className='py-2 text-green-700 font-bold'>None</td>
              <td className='py-2 text-gray-600'>Coffee is not subject to excise duty in the UK</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Customs Broker Fee</td>
              <td className='py-2'>£50-150</td>
              <td className='py-2 text-gray-600'>Per CDS declaration</td>
            </tr>
            <tr>
              <td className='py-2 font-bold'>Port Charges</td>
              <td className='py-2'>£200-400</td>
              <td className='py-2 text-gray-600'>Terminal handling, documentation, short-term storage</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium'>
          <span className='font-bold'>Bottom line:</span> UK importers face zero duty and zero VAT on Ethiopian green coffee. Your landed cost is FOB price plus logistics and port fees only. This makes the UK one of the most cost-efficient destinations for Ethiopian specialty coffee. For a full walkthrough of how FOB, freight, and port fees stack up, see our <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee landed cost guide</Link>.
        </p>
      </div>

      {/* SECTION 7: DOCUMENTATION */}
      <h3 id="documentation" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineDocumentText className='text-amber-600' />
        7. Required Import Documentation
      </h3>

      <p className='my-4'>
        Correct documentation is the single biggest factor in avoiding clearance delays. Here is the complete document set, organized by who provides each item.
      </p>

      <div className='space-y-4 my-8'>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineDocumentText className='text-amber-600' /> From the Ethiopian Exporter</h5>
          <ul className='text-sm space-y-1'>
            <li>• <span className='font-bold'>Commercial Invoice:</span> FOB value, product description, HS code (0901 11 00 00), exporter and importer details</li>
            <li>• <span className='font-bold'>Packing List:</span> Detailed breakdown of bags, net and gross weights per container</li>
            <li>• <span className='font-bold'>Certificate of Origin:</span> From Ethiopian Chamber of Commerce, stating &quot;Ethiopia&quot; clearly as origin country</li>
            <li>• <span className='font-bold'>Quality Certificate:</span> ECX grade certificate or cupping report with scores</li>
            <li>• <span className='font-bold'>ICO Certificate:</span> International Coffee Organization export certificate (where applicable)</li>
            <li>• <span className='font-bold'>Phytosanitary Certificate:</span> Plant health certificate from Ethiopian authorities (sometimes required)</li>
            <li>• <span className='font-bold'>Fumigation Certificate:</span> ISPM-15 for wooden pallets (if applicable)</li>
          </ul>
        </div>

        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineTruck className='text-blue-600' /> From the Shipping Company</h5>
          <ul className='text-sm space-y-1'>
            <li>• <span className='font-bold'>Bill of Lading (B/L):</span> Ocean bill of lading as proof of shipment and title document</li>
            <li>• <span className='font-bold'>Arrival Notice:</span> Notification of vessel arrival at UK port</li>
            <li>• <span className='font-bold'>Delivery Order (D/O):</span> Authorization from shipping line to release cargo</li>
            <li>• <span className='font-bold'>Container Seal Numbers:</span> For security verification at port</li>
          </ul>
        </div>

        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineGlobeAlt className='text-green-600' /> From the UK Importer / Broker</h5>
          <ul className='text-sm space-y-1'>
            <li>• <span className='font-bold'>UK EORI Number:</span> Your GB-prefixed EORI for customs clearance</li>
            <li>• <span className='font-bold'>CDS Import Declaration:</span> Full customs declaration (usually handled by your broker)</li>
            <li>• <span className='font-bold'>Food Business Registration:</span> Proof of local authority registration</li>
            <li>• <span className='font-bold'>VAT Registration Certificate:</span> If claiming zero-rated VAT treatment</li>
          </ul>
        </div>
      </div>

      <div className='bg-red-50 p-6 rounded-lg my-6 border border-red-200'>
        <p className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineExclamationTriangle className='text-red-600' />
          Common Documentation Errors That Cause Delays
        </p>
        <ul className='space-y-2 text-sm'>
          <li>✗ Certificate of Origin missing &quot;Ethiopia&quot; as the origin country</li>
          <li>✗ Invoice value discrepancies between the commercial invoice and the B/L</li>
          <li>✗ Wrong commodity code (must be 0901 11 00 00 for green, not decaffeinated)</li>
          <li>✗ EORI number in wrong format (must start with &quot;GB&quot; for UK imports)</li>
          <li>✗ Incomplete product description (must specify green coffee, grade, processing method)</li>
          <li>✗ Missing DCTS preference claim on customs declaration (results in duty being charged at MFN rate)</li>
        </ul>
      </div>

      {/* SECTION 8: SHIPPING & PORTS */}
      <h3 id="shipping-ports" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineTruck className='text-amber-600' />
        8. Shipping Routes and UK Ports
      </h3>

      <p className='my-4'>
        Ethiopian coffee travels from Addis Ababa by road to the Port of Djibouti, then by sea through the Red Sea, Suez Canal, and Mediterranean to UK ports. Total transit time is typically 17-25 days door-to-door.
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-8'>
        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold text-lg mb-3'>Port of Felixstowe</h5>
          <p className='text-sm mb-2'>UK&apos;s largest container port, handling ~42% of UK trade</p>
          <ul className='text-sm space-y-1'>
            <li>• Located in Suffolk, East England</li>
            <li>• Direct rail links to London and Midlands</li>
            <li>• Major coffee import hub, well-established handling</li>
            <li>• 5-7 days free storage typically</li>
          </ul>
        </div>

        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold text-lg mb-3'>Port of Tilbury</h5>
          <p className='text-sm mb-2'>Key coffee port on the Thames Estuary, identified by CBI as a major green coffee entry point</p>
          <ul className='text-sm space-y-1'>
            <li>• Located in Essex, close to London roasters</li>
            <li>• Strong food commodity handling infrastructure</li>
            <li>• Several green coffee warehouses nearby</li>
            <li>• Good road and rail connections</li>
          </ul>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold text-lg mb-3'>London Gateway</h5>
          <p className='text-sm mb-2'>Modern deep-sea port on the Thames Estuary</p>
          <ul className='text-sm space-y-1'>
            <li>• Newest major UK container terminal</li>
            <li>• State-of-the-art facilities, rapid turnaround</li>
            <li>• Excellent logistics park for warehousing</li>
            <li>• Growing share of coffee imports</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold text-lg mb-3'>Port of Liverpool</h5>
          <p className='text-sm mb-2'>Major port serving Northern England and Scotland</p>
          <ul className='text-sm space-y-1'>
            <li>• Identified by CBI as a key UK coffee port</li>
            <li>• Serves Manchester, Leeds, Edinburgh roasters</li>
            <li>• Good option for importers based in the North</li>
            <li>• Competitive handling charges</li>
          </ul>
        </div>
      </div>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h5 className='font-bold mb-3'>Typical Shipping Timeline: Ethiopia to UK</h5>
        <ol className='space-y-3 text-sm'>
          <li><span className='font-bold'>1. Addis Ababa to Djibouti:</span> 2-4 days (road/rail)</li>
          <li><span className='font-bold'>2. Djibouti to Suez Canal:</span> 5-7 days (Red Sea route)</li>
          <li><span className='font-bold'>3. Suez Canal transit:</span> 1 day</li>
          <li><span className='font-bold'>4. Mediterranean to UK ports:</span> 7-10 days (via Gibraltar, English Channel)</li>
          <li><span className='font-bold'>5. UK port handling and clearance:</span> 2-3 days</li>
        </ol>
        <p className='text-sm mt-4 font-bold'>
          Total: 17-25 days door-to-door (Ethiopia warehouse to UK warehouse)
        </p>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6 shadow-lg border-l-4 border-amber-500'>
        <p className='font-medium flex items-start gap-3'>
          <HiOutlineShieldCheck className='text-3xl flex-shrink-0' />
          <span>
            <span className='font-bold block text-lg mb-1'>Protecting Quality During Transit</span>
            The 17-25 day transit through varying climate zones is the highest risk period for quality degradation. Hermetic liners, strategic container stowage, and controlled ventilation prevent moisture damage and preserve cup scores. Learn about our approach in <Link href='/insights/specialty-coffee-storage-freight-logistics' className='underline text-amber-400 font-bold'>Precision Logistics and Freight Storage Science</Link>.
          </span>
        </p>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h5 className='font-bold mb-3'>Ocean Freight Costs (Djibouti to UK)</h5>
        <table className='w-full text-sm'>
          <thead>
            <tr className='border-b-2 border-amber-300'>
              <th className='text-left py-2'>Container</th>
              <th className='text-left py-2'>Capacity</th>
              <th className='text-left py-2'>Freight Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-amber-200'>
              <td className='py-2 font-bold'>20ft</td>
              <td className='py-2'>18-20 MT (~275-300 bags of 60 kg)</td>
              <td className='py-2'>$4,500-6,000</td>
            </tr>
            <tr>
              <td className='py-2 font-bold'>40ft</td>
              <td className='py-2'>26-28 MT</td>
              <td className='py-2'>$6,500-8,500</td>
            </tr>
          </tbody>
        </table>
        <p className='text-xs mt-3 italic'>
          Rates vary by season, fuel surcharges, and market conditions. Red Sea security disruptions in 2024-2025 temporarily increased rates. Always request current quotes from your freight forwarder.
        </p>
      </div>

      {/* SECTION 9: COST BREAKDOWN */}
      <h3 id="cost-breakdown" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCube className='text-amber-600' />
        9. Landed Cost Breakdown
      </h3>

      <p className='my-4'>
        Here is a realistic cost analysis for importing a 20ft container of Ethiopian specialty coffee to Felixstowe.
      </p>

      <div className='bg-gray-100 p-6 rounded-lg my-6 border border-gray-300'>
        <h4 className='font-bold text-xl mb-4'>Sample: 20ft Container, Washed Yirgacheffe G1 to Felixstowe</h4>

        <div className='bg-white p-4 rounded mb-4'>
          <p className='font-bold mb-2'>Shipment Details:</p>
          <ul className='text-sm space-y-1'>
            <li>• Coffee: Ethiopian Washed Yirgacheffe Grade 1, cupping score 86+</li>
            <li>• Net weight: 18,000 kg (39,683 lbs / 300 bags × 60 kg)</li>
            <li>• FOB Djibouti: $4.80/lb ($10.58/kg)</li>
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
              <td className='py-2 px-3 font-bold'>FOB Djibouti</td>
              <td className='py-2 px-3 text-right'>$190,478</td>
              <td className='py-2 px-3 text-right'>$4.80</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>Ocean freight (Djibouti to Felixstowe)</td>
              <td className='py-2 px-3 text-right'>$5,200</td>
              <td className='py-2 px-3 text-right'>$0.13</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>Marine insurance (0.3% CIF)</td>
              <td className='py-2 px-3 text-right'>$590</td>
              <td className='py-2 px-3 text-right'>$0.01</td>
            </tr>
            <tr className='border-b bg-blue-50'>
              <td className='py-2 px-3 font-bold'>CIF UK Port</td>
              <td className='py-2 px-3 text-right font-bold'>$196,268</td>
              <td className='py-2 px-3 text-right font-bold'>$4.94</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>Import duty (DCTS: 0%)</td>
              <td className='py-2 px-3 text-right text-green-700'>$0</td>
              <td className='py-2 px-3 text-right text-green-700'>$0.00</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>Import VAT (zero-rated)</td>
              <td className='py-2 px-3 text-right text-green-700'>$0</td>
              <td className='py-2 px-3 text-right text-green-700'>$0.00</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>Terminal handling charges</td>
              <td className='py-2 px-3 text-right'>$320</td>
              <td className='py-2 px-3 text-right'>$0.01</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>Documentation and D/O fees</td>
              <td className='py-2 px-3 text-right'>$110</td>
              <td className='py-2 px-3 text-right'>$0.00</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>Customs broker fee</td>
              <td className='py-2 px-3 text-right'>$95</td>
              <td className='py-2 px-3 text-right'>$0.00</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>UK inland transport (port to warehouse)</td>
              <td className='py-2 px-3 text-right'>$200</td>
              <td className='py-2 px-3 text-right'>$0.01</td>
            </tr>
            <tr className='border-t-2 border-gray-400 bg-green-50'>
              <td className='py-3 px-3 font-bold text-lg'>TOTAL LANDED COST</td>
              <td className='py-3 px-3 text-right font-bold text-lg'>$196,993</td>
              <td className='py-3 px-3 text-right font-bold text-lg'>$4.96</td>
            </tr>
          </tbody>
        </table>

        <div className='mt-4 p-4 bg-green-50 rounded border border-green-200'>
          <p className='text-sm font-bold mb-2'>Summary:</p>
          <ul className='text-sm space-y-1'>
            <li>• FOB: <span className='font-bold'>$4.80/lb</span></li>
            <li>• Landed UK warehouse: <span className='font-bold'>$4.96/lb</span> (only +3.3% above FOB)</li>
            <li>• Logistics costs: <span className='font-bold'>$0.16/lb</span></li>
            <li>• Tax/duty: <span className='font-bold text-green-700'>$0.00/lb</span></li>
          </ul>
        </div>
      </div>

      {/* SECTION 10: ORGANIC IMPORTS */}
      <h3 id="organic-imports" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCheckCircle className='text-amber-600' />
        10. Importing Organic Ethiopian Coffee
      </h3>

      <p className='my-4'>
        The UK organic coffee market is growing, and Ethiopia is the world&apos;s second-largest producer of organic coffee by area (after Peru). Organic certification adds complexity to the import process but commands premium prices.
      </p>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <h5 className='font-bold mb-3'>UK Organic Import Requirements (Post-Brexit)</h5>
        <ul className='space-y-2 text-sm'>
          <li>• <span className='font-bold'>GB Certificate of Inspection (COI):</span> All organic products entering Great Britain (England, Scotland, Wales) must have an electronic GB COI issued before departure from Ethiopia</li>
          <li>• <span className='font-bold'>Approved certifier:</span> Your organic certification body must be <a href='https://www.gov.uk/government/publications/organic-registers-lists-of-third-countries-or-territories-control-bodies-and-control-authorities' target='_blank' rel='noopener noreferrer' className='text-green-700 hover:underline'>recognized by the UK government</a></li>
          <li>• <span className='font-bold'>Northern Ireland:</span> Requires a separate EU electronic COI via the TRACES system</li>
          <li>• <span className='font-bold'>Soil Association:</span> The UK&apos;s most popular private organic label; many UK buyers prefer Soil Association certification alongside the regulatory minimum</li>
        </ul>
      </div>

      <p className='my-4'>
        Ethiopian exporters who hold USDA NOP, EU organic, or equivalent certifications from recognized bodies can typically export organic coffee to the UK. Your certification body will guide you through the GB COI process. For a full breakdown of Ethiopian coffee certifications, see our <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline font-bold'>certifications guide covering Organic, Fairtrade, and Rainforest Alliance</Link>.
      </p>

      {/* SECTION 11: MARKET CHANNELS */}
      <h3 id="market-channels" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBuildingStorefront className='text-amber-600' />
        11. UK Market Channels and Intermediaries
      </h3>

      <p className='my-4'>
        Understanding how green coffee moves through the UK supply chain helps exporters and importers select the right entry strategy.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Large-Scale Importers</h4>
      <p className='my-4'>
        Companies like ECOM, Volcafe (ED&amp;F Man), and Olam handle high-volume imports and maintain offices at origin. Minimum volumes typically start at 10+ containers. These are relevant for Ethiopian exporters with large-scale capacity and competitive commercial-grade pricing.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Specialist Green Coffee Traders</h4>
      <p className='my-4'>
        For specialty Ethiopian coffee, these UK-based specialist importers are the primary channel to roasters. They buy smaller, higher-quality lots and provide warehousing, quality control, and marketing support:
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <ul className='text-sm space-y-2 grid md:grid-cols-2 gap-x-6'>
          <li>• <span className='font-bold'>Mercanta (The Coffee Hunters)</span></li>
          <li>• <span className='font-bold'>DR Wakefield</span></li>
          <li>• <span className='font-bold'>Falcon Coffees</span></li>
          <li>• <span className='font-bold'>Schluter (Olam Specialty Coffee)</span></li>
          <li>• <span className='font-bold'>Coffee Bird</span></li>
          <li>• <span className='font-bold'>Freeman Trading</span></li>
          <li>• <span className='font-bold'>Equal Exchange</span> (ethical focus)</li>
          <li>• <span className='font-bold'>Coffee Legends</span> (Ethiopian specialty focus)</li>
        </ul>
        <p className='text-xs mt-3 italic'>
          These traders typically require cupping scores of 80+ and prioritize transparency, traceability, and long-term relationships.
        </p>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Direct-Sourcing Roasters</h4>
      <p className='my-4'>
        A growing number of UK roasters import directly from origin. Notable examples include Square Mile Coffee Roasters, Has Bean, Origin Coffee Roasters, Workshop Coffee, and Colonna Coffee. Direct sourcing requires the roaster to handle customs, documentation, and warehousing, but provides maximum control over quality and cost.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Trade Events and Networking</h4>
      <div className='bg-blue-50 p-6 rounded-lg my-6 border border-blue-200'>
        <p className='text-sm mb-3'>Key events for building relationships with UK coffee buyers:</p>
        <ul className='space-y-2 text-sm'>
          <li>• <span className='font-bold'>London Coffee Festival</span> (annual, April)</li>
          <li>• <span className='font-bold'>UK Coffee Week</span> (national event)</li>
          <li>• <span className='font-bold'>Cup North</span> (Manchester coffee festival)</li>
          <li>• <span className='font-bold'>Edinburgh Coffee Festival</span></li>
          <li>• <span className='font-bold'>SCA World of Coffee</span> (annual, rotating European cities)</li>
          <li>• <span className='font-bold'>British Coffee Association</span> membership and events</li>
        </ul>
      </div>

      {/* SECTION 12: WORKING WITH EXPORTERS */}
      <h3 id="working-with-exporters" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineHandThumbUp className='text-amber-600' />
        12. Working with Ethiopian Exporters
      </h3>

      <p className='my-4'>
        Choosing the right Ethiopian export partner is the decision that shapes everything else: quality consistency, documentation reliability, communication speed, and pricing transparency.
      </p>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <h5 className='font-bold mb-3'>What UK Importers Should Look For</h5>
        <ul className='space-y-2 text-sm'>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> <span className='font-bold'>UK/EU documentation experience:</span> Familiarity with HMRC procedures, CDS declarations, and DCTS preference claims</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> <span className='font-bold'>Quality control systems:</span> Sample roasting, cupping protocols, pre-shipment approval process</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> <span className='font-bold'>Traceability:</span> Farm or cooperative-level origin information (essential for UK specialty buyers)</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> <span className='font-bold'>Communication:</span> Responsive, English-speaking staff; compatibility with UK business hours</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> <span className='font-bold'>Flexible terms:</span> Letter of credit, telegraphic transfer, or escrow payment options</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> <span className='font-bold'>Sample program:</span> Pre-shipment samples for UK approval before container commitment</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> <span className='font-bold'>Consolidation options:</span> Ability to combine smaller orders (5-10 bags) for first-time buyers</li>
        </ul>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Your First Shipment: A Practical Walkthrough</h4>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <ol className='space-y-3 text-sm list-decimal ml-5'>
          <li><span className='font-bold'>Complete UK registrations</span> (EORI, food business, VAT) at least 4-6 weeks before expected shipment</li>
          <li><span className='font-bold'>Request samples</span> from your Ethiopian exporter; evaluate by cupping against target profiles</li>
          <li><span className='font-bold'>Agree terms:</span> price, incoterm (FOB Djibouti is standard), payment method, quality specifications</li>
          <li><span className='font-bold'>Engage a customs broker</span> experienced with food imports at your chosen UK port</li>
          <li><span className='font-bold'>Arrange warehousing:</span> Secure climate-controlled storage near your port of entry</li>
          <li><span className='font-bold'>Monitor the shipment:</span> Track vessel position; alert broker 48-72 hours before arrival</li>
          <li><span className='font-bold'>Clear customs:</span> Broker submits CDS declaration with DCTS preference claim; clearance in 1-2 days</li>
          <li><span className='font-bold'>Receive and inspect:</span> Check for moisture, bag integrity, and conformity to pre-shipment samples</li>
        </ol>
      </div>

      {/* CONCLUSION */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6'>
        Key Takeaways: Import Ethiopian Coffee to the UK
      </h3>

      <p className='my-4'>
        The United Kingdom offers a compelling combination for Ethiopian coffee importers: zero duty under DCTS, zero import VAT, a mature specialty consumer base, and well-established green coffee infrastructure. Landed costs sit just 3-4% above FOB price, making Ethiopian specialty coffee highly competitive in the UK market.
      </p>

      <p className='my-4'>
        Post-Brexit procedures require diligence with EORI registration, CDS customs declarations, and FSA food business registration. However, the compliance burden is manageable, especially with an experienced customs broker handling the paperwork. The regulatory framework is stable, the tax treatment is generous, and <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline font-bold'>Ethiopian sourcing relationships</Link> built on transparency and quality are exactly what UK roasters want.
      </p>

      <div className='bg-gray-100 p-6 rounded-lg my-8 border border-gray-300'>
        <h4 className='font-bold text-lg mb-3'>Summary</h4>
        <ul className='space-y-2 text-sm'>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Zero import duty</span> under DCTS (Ethiopia&apos;s LDC status)</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Zero import VAT</span> on green coffee for VAT-registered business importers</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>UK EORI number</span> required (free, issued instantly at gov.uk)</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Food business registration</span> required 28 days before first import (free)</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>No health certificate</span> needed for green coffee (low-risk classification)</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Major ports:</span> Felixstowe, Tilbury, London Gateway, Liverpool</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Transit time:</span> 17-25 days Ethiopia to UK warehouse</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Landed cost:</span> ~3-4% above FOB price (zero duty + zero VAT)</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Organic imports:</span> Require GB Certificate of Inspection from an approved certifier</li>
        </ul>
      </div>

      {/* FAQ SECTION */}
      <section className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900'>Frequently Asked Questions About Importing Ethiopian Coffee to the UK</h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What import duty does the UK charge on Ethiopian green coffee?</h4>
            <p className='text-sm text-gray-600'>Zero. Ethiopian green coffee enters the UK duty-free under the Developing Countries Trading Scheme (DCTS), which grants Least Developed Countries like Ethiopia 0% tariff on all products. Import VAT on green coffee is also zero-rated for registered business importers.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Do I need a license or health certificate to import coffee to the UK?</h4>
            <p className='text-sm text-gray-600'>No specific import license is needed for green coffee. You must register as a food business with your local authority at least 28 days before importing and obtain a UK EORI number. Green coffee does not require an Import Health Certificate since it is classified as low-risk.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How long does shipping take from Ethiopia to the UK?</h4>
            <p className='text-sm text-gray-600'>Door-to-door transit from an Ethiopian warehouse to a UK warehouse typically takes 17 to 25 days. This includes 2-4 days overland to Djibouti, 13-18 days sea freight through the Suez Canal, and 2-3 days for UK port clearance and inland delivery.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the DCTS and how does it apply to Ethiopian coffee?</h4>
            <p className='text-sm text-gray-600'>The Developing Countries Trading Scheme is the UK&apos;s post-Brexit trade preference programme that replaced the EU&apos;s GSP. Ethiopia qualifies under the LDC tier, granting duty-free, quota-free access. For coffee, provide a Certificate of Origin and your broker claims DCTS preference on the customs declaration.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Can small UK roasters import Ethiopian coffee directly?</h4>
            <p className='text-sm text-gray-600'>Yes. Small roasters can import directly if they complete EORI and food business registration. Many Ethiopian exporters offer container consolidation for smaller volumes. Alternatively, UK-based specialist green coffee traders like Mercanta, DR Wakefield, and Falcon Coffees stock Ethiopian lots for spot purchase.</p>
          </div>
        </div>
      </section>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Premium Ethiopian Coffee Direct from Origin</h4>
        <p className='my-2'>
          Ethio Coffee Import and Export PLC supplies UK importers and roasters with specialty-grade Ethiopian green coffee from all major regions. We handle documentation, provide pre-shipment samples, and support first-time importers through the customs process. Three decades of heritage sourcing relationships across Ethiopian cooperatives and washing stations ensure consistent quality and transparent traceability.
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
              <li>• <Link href='/insights/importing-ethiopian-coffee-to-germany' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to Germany</Link></li>
              <li>• <Link href='/insights/importing-ethiopian-coffee-to-holland' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to the Netherlands</Link></li>
              <li>• <Link href='/insights/how-to-import-ethiopian-coffee-to-usa' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to the United States</Link></li>
              <li>• <Link href='/insights/importing-ethiopian-coffee-to-canada-guide' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to Canada</Link></li>
              <li>• <Link href='/insights/importing-ethiopian-coffee-to-japan' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to Japan</Link></li>
              <li>• <Link href='/insights/importing-ethiopian-coffee-to-australia' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to Australia</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing and Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost Guide</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts and Payment Terms</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality and Compliance</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Ethiopian Coffee Certifications: Organic, Fairtrade, Rainforest Alliance</Link></li>
              <li>• <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline'>EU Deforestation Regulation and Ethiopian Coffee</Link></li>
              <li>• <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality Control and Grading</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Logistics and Processing</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline'>Specialty Coffee Storage and Freight Logistics</Link></li>
              <li>• <Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline'>Green Coffee Packaging and Bag Types</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC. This guide covers post-Brexit UK import procedures for Ethiopian green coffee as of March 2026. Regulations, duty rates, and port infrastructure can change; contact us for the most current information on importing Ethiopian coffee to the United Kingdom.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

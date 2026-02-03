"use client"

import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
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
  HiOutlineClock,
  HiOutlineMagnifyingGlass
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
        Your complete post-Brexit guide to importing specialty Ethiopian green coffee into the United Kingdom: FSA food safety compliance, HMRC customs procedures, EORI registration, shipping logistics through Felixstowe and London Gateway ports, and navigating the UK's vibrant third-wave coffee market.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          The UK's thriving specialty coffee scene makes it a premium market for Ethiopian coffee imports.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Importing Ethiopian coffee to UK - post-Brexit HMRC customs FSA regulations'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>
      <p className='my-2 text-gray-600 font-inconsolata'>
        <HiOutlineCalendarDays className='inline mr-2' />
        {date}
      </p>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Import Guide / UK Market / Ethiopian Coffee Export</span>
      </div>

      {/* INTRODUCTION */}
      <p className='my-4'>
        The United Kingdom boasts one of Europe's most sophisticated and rapidly evolving specialty coffee markets. From London's Shoreditch cafes to Edinburgh's artisan roasters, Manchester's Northern Quarter to Bristol's independent coffee scene, the UK has embraced third-wave coffee culture with passion. Ethiopian coffee, with its complex floral and fruity profiles, sits at the heart of this specialty revolution.
      </p>

      <p className='my-4'>
        Post-Brexit, the UK now operates its own independent import system separate from the EU, with <span className='font-bold'>HMRC (His Majesty's Revenue and Customs)</span> customs procedures, <span className='font-bold'>FSA (Food Standards Agency)</span> food safety requirements, and unique trade agreements. While this adds complexity compared to pre-2021 procedures, the UK remains an excellent market for Ethiopian coffee with zero import duty, a passionate specialty consumer base, and world-class coffee infrastructure.
      </p>

      <p className='my-4'>
        British consumers increasingly demand transparency, sustainability, and exceptional quality – values that align perfectly with Ethiopian specialty coffee. Whether you're a UK-based roaster looking to source directly from Ethiopia, or an Ethiopian exporter seeking to enter the British market, this guide provides everything you need to navigate post-Brexit import regulations successfully.
      </p>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineGlobeAlt className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Post-Brexit Update:</span> Since January 1, 2021, the UK operates independent customs and food safety systems. Ethiopian coffee enjoys zero import duty under WTO terms, but importers must navigate new documentation requirements including EORI numbers, customs declarations, and UK-specific food safety compliance separate from EU rules.</span>
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href="#uk-market" className='text-amber-700 hover:underline'>1. Why UK Coffee Importers Choose Ethiopian Coffee</a></li>
          <li><a href="#post-brexit" className='text-amber-700 hover:underline'>2. Understanding Post-Brexit UK Coffee Import Regulations</a></li>
          <li><a href="#fsa-requirements" className='text-amber-700 hover:underline'>3. FSA (Food Standards Agency) Requirements</a></li>
          <li><a href="#hmrc-customs" className='text-amber-700 hover:underline'>4. HMRC Customs Clearance Process</a></li>
          <li><a href="#duties-taxes" className='text-amber-700 hover:underline'>5. Import Duties, Taxes & VAT Structure</a></li>
          <li><a href="#documentation" className='text-amber-700 hover:underline'>6. Required Import Documentation</a></li>
          <li><a href="#shipping-logistics" className='text-amber-700 hover:underline'>7. Shipping Routes & UK Port Logistics</a></li>
          <li><a href="#cost-breakdown" className='text-amber-700 hover:underline'>8. Complete Cost Breakdown: FOB to Landed</a></li>
          <li><a href="#business-registration" className='text-amber-700 hover:underline'>9. UK Business Registration & EORI Numbers</a></li>
          <li><a href="#market-insights" className='text-amber-700 hover:underline'>10. UK Coffee Market Insights & Trends</a></li>
          <li><a href="#working-with-exporters" className='text-amber-700 hover:underline'>11. Working with Ethiopian Coffee Exporters</a></li>
          <li><a href="#success-tips" className='text-amber-700 hover:underline'>12. Tips for Success in the UK Market</a></li>
        </ol>
      </div>

      {/* SECTION 1: UK MARKET */}
      <h3 id="uk-market" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineArrowTrendingUp className='text-amber-600' />
        1. Why UK Coffee Importers Choose Ethiopian Coffee
      </h3>

      <p className='my-4'>
        The United Kingdom's coffee culture has matured dramatically over the past decade, with specialty coffee moving from niche to mainstream:
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>The UK Coffee Revolution</h4>

      <div className='bg-blue-50 p-6 rounded-lg my-6 border border-blue-200'>
        <h5 className='font-bold mb-3'>UK Coffee Market Statistics</h5>
        <ul className='space-y-2 text-sm'>
          <li>📊 <span className='font-bold'>Market Size:</span> £4+ billion coffee market (2024-2026)</li>
          <li>☕ <span className='font-bold'>Consumption:</span> 98+ million cups consumed daily in the UK</li>
          <li>🏪 <span className='font-bold'>Coffee Shops:</span> 30,000+ coffee shops nationwide (growing 6% annually)</li>
          <li>📈 <span className='font-bold'>Specialty Growth:</span> Specialty coffee segment growing 10-15% annually</li>
          <li>👥 <span className='font-bold'>Demographics:</span> 67 million population, 84% urbanized, strong coffee culture in London, Manchester, Edinburgh, Bristol</li>
          <li>💰 <span className='font-bold'>Spending:</span> Average Brit spends £500+ annually on coffee (higher in urban areas)</li>
          <li>🌍 <span className='font-bold'>Import Volume:</span> 120,000+ tons of green coffee annually (Europe's 5th largest importer)</li>
        </ul>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Why Ethiopian Coffee Thrives in the UK</h4>

      <div className='grid md:grid-cols-2 gap-6 my-8'>
        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-3'>Consumer Drivers</h5>
          <ul className='space-y-2 text-sm'>
            <li>✓ <span className='font-bold'>Flavor complexity:</span> British palate increasingly appreciates bright, fruity, floral coffees</li>
            <li>✓ <span className='font-bold'>Single-origin demand:</span> UK consumers seek transparent, traceable coffee origins</li>
            <li>✓ <span className='font-bold'>Natural processing popularity:</span> Fruit-forward Ethiopian naturals highly sought after</li>
            <li>✓ <span className='font-bold'>Sustainability focus:</span> Ethiopia's "birthplace of coffee" story resonates with ethical consumers</li>
            <li>✓ <span className='font-bold'>Filter coffee renaissance:</span> V60, Chemex, AeroPress methods showcase Ethiopian coffee beautifully</li>
          </ul>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold mb-3'>Business Drivers</h5>
          <ul className='space-y-2 text-sm'>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /> <span className='font-bold'>Differentiation:</span> Ethiopian coffee helps independent roasters compete with chains</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /> <span className='font-bold'>Premium positioning:</span> Yirgacheffe, Guji command premium retail prices</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /> <span className='font-bold'>Competition trends:</span> Leading UK roasters (Square Mile, Has Bean, Origin) champion Ethiopian origins</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /> <span className='font-bold'>Retail growth:</span> Specialty coffee retail (beans, subscriptions) booming in UK</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /> <span className='font-bold'>Cafe culture:</span> Third-wave cafes proliferating beyond London to regional cities</li>
          </ul>
        </div>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'>
          <span className='font-bold'>UK Market Advantage:</span> The UK's specialty coffee community is highly educated, quality-focused, and willing to pay premium prices. Ethiopian coffee's distinctive profiles and transparent supply chains align perfectly with British consumer values. Post-Brexit, direct sourcing relationships are increasingly valuable as importers seek competitive advantages.
        </p>
      </div>

      {/* SECTION 2: POST-BREXIT REGULATIONS */}
      <h3 id="post-brexit" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineShieldCheck className='text-amber-600' />
        2. Understanding Post-Brexit UK Coffee Import Regulations
      </h3>

      <p className='my-4'>
        Since January 1, 2021, the UK operates independent import systems. Coffee imports are regulated by:
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-8'>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'><HiOutlineBuildingOffice className='text-amber-600' /> Food Standards Agency (FSA)</h5>
          <p className='text-sm mb-3'><span className='font-bold'>Website:</span> <a href='https://www.food.gov.uk' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>food.gov.uk</a></p>
          <p className='text-sm mb-2'><span className='font-bold'>Responsibilities:</span></p>
          <ul className='text-xs space-y-1'>
            <li>• Food safety standards and compliance</li>
            <li>• Import food safety requirements</li>
            <li>• Contaminant limits (mycotoxins, pesticides)</li>
            <li>• Food labeling regulations</li>
            <li>• Food business registration oversight</li>
            <li>• Public health protection</li>
          </ul>
          <p className='text-xs mt-2 italic'>Note: FSA works alongside FSS (Food Standards Scotland) for Scottish imports.</p>
        </div>

        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'><HiOutlineBuildingOffice className='text-blue-600' /> HMRC (His Majesty's Revenue and Customs)</h5>
          <p className='text-sm mb-3'><span className='font-bold'>Website:</span> <a href='https://www.gov.uk/government/organisations/hm-revenue-customs' target='_blank' rel='noopener noreferrer' className='text-blue-700 hover:underline'>gov.uk/hmrc</a></p>
          <p className='text-sm mb-2'><span className='font-bold'>Responsibilities:</span></p>
          <ul className='text-xs space-y-1'>
            <li>• Customs clearance and duty collection</li>
            <li>• Tariff classification verification</li>
            <li>• Customs Declaration Service (CDS)</li>
            <li>• Import VAT collection</li>
            <li>• Trade compliance enforcement</li>
            <li>• EORI number registration</li>
          </ul>
        </div>
      </div>

      <div className='bg-red-50 p-6 rounded-lg my-6 border border-red-200'>
        <p className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineExclamationTriangle className='text-red-600' />
          Post-Brexit Changes: What's Different Now
        </p>
        <ul className='space-y-2 text-sm'>
          <li><HiOutlineExclamationTriangle className='inline mr-2 text-red-600' /> <span className='font-bold'>No more EU single market access:</span> UK imports from Ethiopia now require full customs declarations</li>
          <li><HiOutlineExclamationTriangle className='inline mr-2 text-red-600' /> <span className='font-bold'>EORI number required:</span> Must obtain UK EORI number (separate from EU EORI)</li>
          <li><HiOutlineExclamationTriangle className='inline mr-2 text-red-600' /> <span className='font-bold'>Customs declarations:</span> Every shipment requires customs declaration (even for goods under £135)</li>
          <li><HiOutlineExclamationTriangle className='inline mr-2 text-red-600' /> <span className='font-bold'>Health certificates:</span> Different format and requirements than EU</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> <span className='font-bold text-green-700'>Still zero duty on coffee:</span> UK maintains WTO MFN zero duty rate</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> <span className='font-bold text-green-700'>Independent trade policy:</span> UK can negotiate bilateral trade agreements</li>
        </ul>
      </div>

      {/* SECTION 3: FSA REQUIREMENTS */}
      <h3 id="fsa-requirements" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBeaker className='text-amber-600' />
        3. FSA (Food Standards Agency) Requirements
      </h3>

      <p className='my-4'>
        The FSA oversees food safety for all imported food products. Here's what Ethiopian coffee importers must comply with:
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>FSA Compliance for Coffee Importers</h4>

      <div className='space-y-6 my-8'>
        <div className='bg-green-50 p-6 rounded-lg border border-green-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <span className='bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm'>1</span>
            Food Business Registration
          </h5>
          <p className='text-sm mb-3'>Before importing food (including coffee), register as a food business operator:</p>
          <ul className='text-sm space-y-2'>
            <li>• <span className='font-bold'>Registration:</span> Register with local authority (England/Wales) or FSS (Scotland)</li>
            <li>• <span className='font-bold'>Free:</span> No cost for food business registration</li>
            <li>• <span className='font-bold'>Timeline:</span> Must register at least 28 days before importing</li>
            <li>• <span className='font-bold'>Online:</span> Use gov.uk food business registration portal</li>
            <li>• <span className='font-bold'>Coverage:</span> Covers all food import, storage, processing, distribution activities</li>
          </ul>
        </div>

        <div className='bg-blue-50 p-6 rounded-lg border border-blue-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <span className='bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm'>2</span>
            Food Safety Standards Compliance
          </h5>
          <p className='text-sm mb-3'>Ethiopian coffee must meet UK food safety standards:</p>
          <ul className='text-sm space-y-2'>
            <li>• <span className='font-bold'>Ochratoxin A (OTA):</span> Maximum 5 μg/kg (5 ppb) for roasted coffee</li>
            <li>• <span className='font-bold'>Aflatoxins:</span> Maximum 5 μg/kg total aflatoxins (UK follows similar limits to EU)</li>
            <li>• <span className='font-bold'>Pesticide Residues:</span> Must not exceed Maximum Residue Levels (MRLs)</li>
            <li>• <span className='font-bold'>Heavy Metals:</span> Lead, cadmium within acceptable limits</li>
            <li>• <span className='font-bold'>Microbiological:</span> Free from harmful pathogens (Salmonella, E. coli)</li>
            <li>• <span className='font-bold'>Foreign Matter:</span> Clean, free from excessive defects</li>
          </ul>
        </div>

        <div className='bg-amber-50 p-6 rounded-lg border border-amber-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <span className='bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm'>3</span>
            Import Health Certificates (Not Required for Coffee)
          </h5>
          <p className='text-sm mb-3'>Good news for coffee importers:</p>
          <ul className='text-sm space-y-2'>
            <li>✓ <span className='font-bold'>Coffee is low-risk:</span> Green coffee does not require Import Health Certificate</li>
            <li>✓ <span className='font-bold'>No border inspection post:</span> Coffee not subject to mandatory border control</li>
            <li>✓ <span className='font-bold'>Standard documentation:</span> Commercial invoice, packing list, certificate of origin sufficient</li>
            <li>• <span className='font-bold'>Random checks:</span> FSA may conduct random sampling at port (rare for coffee)</li>
          </ul>
        </div>

        <div className='bg-purple-50 p-6 rounded-lg border border-purple-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <span className='bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm'>4</span>
            Traceability Requirements
          </h5>
          <p className='text-sm mb-3'>UK food law requires full traceability:</p>
          <ul className='text-sm space-y-2'>
            <li>• <span className='font-bold'>"One step back, one step forward":</span> Know your supplier (Ethiopian exporter) and your customers</li>
            <li>• <span className='font-bold'>Records:</span> Maintain import records for minimum 5 years</li>
            <li>• <span className='font-bold'>Batch identification:</span> Track coffee lots through your supply chain</li>
            <li>• <span className='font-bold'>Recall capability:</span> Ability to recall product if safety issue arises</li>
          </ul>
        </div>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'>
          <span className='font-bold'>FSA Reality Check:</span> For coffee importers, FSA compliance is straightforward. Green coffee is low-risk, doesn't require health certificates or border inspections, and Ethiopian coffee typically meets all UK safety standards. The key is maintaining good documentation and working with reputable Ethiopian exporters who understand quality control.
        </p>
      </div>

      {/* SECTION 4: HMRC CUSTOMS */}
      <h3 id="hmrc-customs" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBuildingOffice className='text-amber-600' />
        4. HMRC Customs Clearance Process
      </h3>

      <p className='my-4'>
        HMRC handles all customs clearance for goods entering the UK:
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Customs Declaration Service (CDS)</h4>

      <div className='bg-blue-50 p-6 rounded-lg my-6 border border-blue-200'>
        <p className='text-sm mb-3'>
          The UK uses the <span className='font-bold'>Customs Declaration Service (CDS)</span> for import declarations:
        </p>
        <ul className='space-y-2 text-sm'>
          <li>✓ <span className='font-bold'>Electronic system:</span> All customs declarations submitted online</li>
          <li>✓ <span className='font-bold'>Customs brokers:</span> Most importers use customs agents/freight forwarders to handle declarations</li>
          <li>✓ <span className='font-bold'>Real-time processing:</span> Declarations processed within hours</li>
          <li>✓ <span className='font-bold'>Duty payment:</span> VAT and duties paid electronically</li>
          <li>✓ <span className='font-bold'>Risk-based checks:</span> HMRC flags high-risk shipments for physical inspection</li>
        </ul>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>HMRC Requirements for Coffee Imports</h4>

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
              <td className='py-2 font-bold'>EORI Number</td>
              <td className='py-2'>Economic Operator Registration and Identification number (required for all imports)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Commodity Code</td>
              <td className='py-2'>0901 11 00 00 (Coffee, not roasted, not decaffeinated) or 0901 12 00 00 (decaffeinated)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Import Duty</td>
              <td className='py-2'><span className='font-bold text-green-700'>0%</span> (zero duty on coffee under WTO MFN)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Import VAT</td>
              <td className='py-2'>0% (zero-rated) if importing for business use and VAT registered</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Customs Declaration</td>
              <td className='py-2'>Full customs declaration via CDS (usually done by customs broker)</td>
            </tr>
            <tr>
              <td className='py-2 font-bold'>Clearance Time</td>
              <td className='py-2'>1-2 business days (if no issues)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <h5 className='font-bold mb-3'>UK EORI Number: How to Obtain</h5>
        <p className='text-sm mb-3'>Every UK business importing goods must have an EORI number:</p>
        <ol className='text-sm space-y-2 list-decimal ml-5'>
          <li>Visit <a href='https://www.gov.uk/eori' target='_blank' rel='noopener noreferrer' className='text-green-700 hover:underline'>gov.uk/eori</a></li>
          <li>Click "Apply for an EORI number"</li>
          <li>Provide UK business details (Companies House number, VAT number if applicable)</li>
          <li>EORI issued immediately online (format: GB + VAT number or GB + unique identifier)</li>
          <li>Free of charge</li>
        </ol>
        <p className='text-xs mt-3 italic'>Note: If you previously had an EU EORI, you need a separate UK EORI starting with "GB".</p>
      </div>

      {/* SECTION 5: DUTIES & TAXES */}
      <h3 id="duties-taxes" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='text-amber-600' />
        5. Import Duties, Taxes & VAT Structure
      </h3>

      <p className='my-4'>
        The UK offers exceptionally favorable tax treatment for coffee imports:
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3'>UK Coffee Import Tax Structure</h4>
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
              <td className='py-2 font-bold'>Import Duty (Customs)</td>
              <td className='py-2 text-green-700 font-bold'>0%</td>
              <td className='py-2 text-gray-600'>Zero duty on coffee (commodity code 0901) under WTO MFN</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Import VAT</td>
              <td className='py-2 font-bold text-green-700'>0% (Zero-Rated)</td>
              <td className='py-2 text-gray-600'>Green coffee is zero-rated for VAT purposes if imported for business use</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Excise Duty</td>
              <td className='py-2 text-green-700 font-bold'>None</td>
              <td className='py-2 text-gray-600'>Coffee not subject to excise duty in UK</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Customs Broker Fee</td>
              <td className='py-2'>£50-150</td>
              <td className='py-2 text-gray-600'>Agent fee for handling customs declaration (negotiable)</td>
            </tr>
            <tr>
              <td className='py-2 font-bold'>Port Charges</td>
              <td className='py-2'>£200-400</td>
              <td className='py-2 text-gray-600'>Terminal handling, documentation, storage</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <h5 className='font-bold mb-3'>🎉 UK VAT Zero-Rating for Green Coffee</h5>
        <p className='text-sm mb-3'>
          Green coffee imported for commercial use is <span className='font-bold'>zero-rated for VAT</span>:
        </p>
        <ul className='space-y-2 text-sm'>
          <li>✓ <span className='font-bold'>0% Import VAT:</span> No VAT charged at import if you're VAT registered and importing for business</li>
          <li>✓ <span className='font-bold'>No VAT recovery needed:</span> Unlike standard-rated goods, you don't pay VAT upfront then reclaim it</li>
          <li>✓ <span className='font-bold'>Cash flow advantage:</span> No VAT cash flow impact at all</li>
          <li>✓ <span className='font-bold'>Qualification:</span> Must be VAT registered UK business importing for business purposes</li>
        </ul>
        <p className='text-xs mt-3 italic'>
          This is a significant advantage: UK coffee importers face zero duty AND zero VAT, making landed costs extremely competitive.
        </p>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'>
          <span className='font-bold'>UK Tax Advantage:</span> The UK offers one of the most favorable tax regimes for coffee imports globally: zero duty + zero VAT = no tax burden whatsoever for business importers. Your landed cost is essentially FOB price + logistics costs only.
        </p>
      </div>

      {/* SECTION 6: DOCUMENTATION */}
      <h3 id="documentation" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineDocumentText className='text-amber-600' />
        6. Required Import Documentation
      </h3>

      <p className='my-4'>
        Proper documentation is essential for smooth UK customs clearance:
      </p>

      <div className='space-y-4 my-8'>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineDocumentText className='text-amber-600' /> From Ethiopian Exporter</h5>
          <ul className='text-sm space-y-1'>
            <li>• <span className='font-bold'>Commercial Invoice:</span> FOB value, product description, HS code, exporter/importer details</li>
            <li>• <span className='font-bold'>Packing List:</span> Detailed breakdown of containers, bags, weights (net/gross)</li>
            <li>• <span className='font-bold'>Certificate of Origin:</span> From Ethiopian Chamber of Commerce or Ethiopian Coffee Authority</li>
            <li>• <span className='font-bold'>Quality Certificate:</span> ECX grade certificate or cupping report showing quality</li>
            <li>• <span className='font-bold'>Phytosanitary Certificate (if required):</span> Plant health certificate (rarely required for coffee)</li>
            <li>• <span className='font-bold'>Fumigation Certificate:</span> ISPM-15 for wooden pallets (if applicable)</li>
            <li>• <span className='font-bold'>ICO Certificate (if applicable):</span> International Coffee Organization export certificate</li>
          </ul>
        </div>

        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineTruck className='text-blue-600' /> From Shipping Company/Freight Forwarder</h5>
          <ul className='text-sm space-y-1'>
            <li>• <span className='font-bold'>Bill of Lading (B/L):</span> Ocean B/L as proof of shipment</li>
            <li>• <span className='font-bold'>Arrival Notice:</span> Notification of vessel arrival at UK port</li>
            <li>• <span className='font-bold'>Delivery Order (D/O):</span> Authorization to release cargo</li>
            <li>• <span className='font-bold'>Container Seals:</span> Seal numbers for security verification</li>
          </ul>
        </div>

        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineGlobeAlt className='text-green-600' /> UK Documentation (Importer/Broker)</h5>
          <ul className='text-sm space-y-1'>
            <li>• <span className='font-bold'>UK EORI Number:</span> Your GB EORI for customs clearance</li>
            <li>• <span className='font-bold'>Customs Declaration:</span> Full import declaration via CDS (done by customs broker)</li>
            <li>• <span className='font-bold'>Food Business Registration:</span> Proof of registration with local authority</li>
            <li>• <span className='font-bold'>VAT Registration Certificate (if claiming zero-rating):</span> VAT number</li>
          </ul>
        </div>
      </div>

      <div className='bg-red-50 p-6 rounded-lg my-6 border border-red-200'>
        <p className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineExclamationTriangle className='text-red-600' />
          Common Documentation Pitfalls
        </p>
        <ul className='space-y-2 text-sm'>
          <li>✗ Certificate of Origin not clearly showing "Ethiopia" as origin country</li>
          <li>✗ Invoice value discrepancies between commercial invoice and B/L</li>
          <li>✗ Missing or incorrect HS/commodity code (must be 0901 11 00 00)</li>
          <li>✗ Incomplete product description (must specify green coffee, grade, processing)</li>
          <li>✗ Wrong EORI format (must start with "GB" for UK imports)</li>
          <li>✗ Missing exporter details or incomplete importer information</li>
        </ul>
      </div>

      {/* SECTION 7: SHIPPING LOGISTICS */}
      <h3 id="shipping-logistics" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineTruck className='text-amber-600' />
        7. Shipping Routes & UK Port Logistics
      </h3>

      <p className='my-4'>
        Ethiopian coffee reaches the UK primarily through three major container ports:
      </p>

      <div className='grid md:grid-cols-3 gap-6 my-8'>
        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold text-lg mb-3'>🚢 Port of Felixstowe</h5>
          <p className='text-sm mb-3'>UK's largest and busiest container port</p>
          <ul className='text-sm space-y-2'>
            <li>• <span className='font-bold'>Position:</span> UK's #1 container port (42% of UK trade)</li>
            <li>• <span className='font-bold'>Location:</span> Suffolk, East England</li>
            <li>• <span className='font-bold'>Coffee Volume:</span> Handles ~50% of UK coffee imports</li>
            <li>• <span className='font-bold'>Advantages:</span> Excellent infrastructure, direct rail links to London and Midlands</li>
            <li>• <span className='font-bold'>Free Storage:</span> 5-7 days typically</li>
          </ul>
        </div>

        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold text-lg mb-3'>🏗️ London Gateway</h5>
          <p className='text-sm mb-3'>Modern deep-sea port serving London/Southeast</p>
          <ul className='text-sm space-y-2'>
            <li>• <span className='font-bold'>Position:</span> UK's 2nd largest container port</li>
            <li>• <span className='font-bold'>Location:</span> Thames Estuary, Essex</li>
            <li>• <span className='font-bold'>Advantages:</span> Modern facilities, close to London roasters</li>
            <li>• <span className='font-bold'>Growth:</span> Rapidly growing, excellent handling</li>
            <li>• <span className='font-bold'>Free Storage:</span> 5-7 days</li>
          </ul>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold text-lg mb-3'>⚓ Southampton Port</h5>
          <p className='text-sm mb-3'>Major port for South/Southwest England</p>
          <ul className='text-sm space-y-2'>
            <li>• <span className='font-bold'>Position:</span> UK's 4th largest container terminal</li>
            <li>• <span className='font-bold'>Location:</span> Hampshire, South England</li>
            <li>• <span className='font-bold'>Advantages:</span> Serves Bristol, Oxford, Southwest roasters</li>
            <li>• <span className='font-bold'>Free Storage:</span> 5-7 days</li>
          </ul>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Shipping Route: Ethiopia to UK</h4>

      <div className='bg-dark text-primary p-6 rounded-lg my-6 shadow-lg border-l-4 border-amber-500'>
        <p className='font-medium flex items-start gap-3'>
          <HiOutlineShieldCheck className='text-3xl flex-shrink-0' />
          <span>
            <span className='font-bold block text-lg mb-1'>Quality Preservation During Transit</span>
            Long transit times (35-45 days) across varying climate zones can degrade specialty coffee. We utilize advanced hermetic liners and strategic vessel stowage to protect your Ethiopian beans. Learn more about our <Link href='/insights/specialty-coffee-storage-freight-logistics' className='underline text-amber-400 font-bold'>Precision Logistics & Freight Storage Science</Link> to ensure your coffee arrives in UK ports with its 90+ point profile intact.
          </span>
        </p>
      </div>

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
            <span className='text-xs text-gray-600'>Red Sea route via Bab-el-Mandeb strait</span>
          </li>
          <li>
            <span className='font-bold'>3. Suez Canal Transit:</span> 1 day
            <br/>
            <span className='text-xs text-gray-600'>Through Suez into Mediterranean</span>
          </li>
          <li>
            <span className='font-bold'>4. Mediterranean → UK:</span> 7-10 days
            <br/>
            <span className='text-xs text-gray-600'>Via Gibraltar Strait to English Channel</span>
          </li>
          <li>
            <span className='font-bold'>5. UK Port Handling & Clearance:</span> 2-3 days
            <br/>
            <span className='text-xs text-gray-600'>Unloading, customs clearance, delivery to warehouse</span>
          </li>
        </ol>
        <p className='text-sm mt-4 font-bold'>
          Total Transit Time: 17-25 days door-to-door (Ethiopia → UK warehouse)
        </p>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Ocean Freight Costs</h4>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <table className='w-full text-sm'>
          <thead>
            <tr className='border-b-2 border-amber-300'>
              <th className='text-left py-2'>Container Size</th>
              <th className='text-left py-2'>Capacity</th>
              <th className='text-left py-2'>Freight Cost (Djibouti → UK)</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-amber-200'>
              <td className='py-2 font-bold'>20ft Container</td>
              <td className='py-2'>18-20 MT (~39,600-44,000 lbs)</td>
              <td className='py-2'>$4,500-6,000</td>
            </tr>
            <tr>
              <td className='py-2 font-bold'>40ft Container</td>
              <td className='py-2'>26-28 MT (~57,000-62,000 lbs)</td>
              <td className='py-2'>$6,500-8,500</td>
            </tr>
          </tbody>
        </table>
        <p className='text-xs mt-3 italic'>
          Note: Freight rates vary by season, fuel surcharges, and market demand. Red Sea tensions in 2024-2025 temporarily increased rates. Always request current quotes.
        </p>
      </div>

      {/* SECTION 8: COST BREAKDOWN */}
      <h3 id="cost-breakdown" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCube className='text-amber-600' />
        8. Complete Cost Breakdown: FOB to Landed
      </h3>

      <p className='my-4'>
        Here's a realistic cost analysis for importing Ethiopian specialty coffee to the UK:
      </p>

      <div className='bg-gray-100 p-6 rounded-lg my-6 border border-gray-300'>
        <h4 className='font-bold text-xl mb-4'>Sample Import Cost: 20ft Container to Felixstowe</h4>
        
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
              <td className='py-2 px-3 pl-6'>Ocean Freight (Djibouti → Felixstowe)</td>
              <td className='py-2 px-3 text-right'>$5,200</td>
              <td className='py-2 px-3 text-right'>$0.13</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>Marine Insurance (0.3% CIF)</td>
              <td className='py-2 px-3 text-right'>$590</td>
              <td className='py-2 px-3 text-right'>$0.01</td>
            </tr>
            <tr className='border-b bg-blue-50'>
              <td className='py-2 px-3 font-bold'>CIF Value (UK Port)</td>
              <td className='py-2 px-3 text-right font-bold'>$196,268</td>
              <td className='py-2 px-3 text-right font-bold'>$4.94</td>
            </tr>
            <tr className='border-b bg-gray-50'>
              <td className='py-2 px-3'><span className='font-bold'>UK Import Taxes</span></td>
              <td className='py-2 px-3 text-right'></td>
              <td className='py-2 px-3 text-right'></td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>Import Duty (0%)</td>
              <td className='py-2 px-3 text-right text-green-700'>$0</td>
              <td className='py-2 px-3 text-right text-green-700'>$0.00</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>Import VAT (0% zero-rated)</td>
              <td className='py-2 px-3 text-right text-green-700'>$0</td>
              <td className='py-2 px-3 text-right text-green-700'>$0.00</td>
            </tr>
            <tr className='border-b bg-gray-50'>
              <td className='py-2 px-3'><span className='font-bold'>Port & Clearance Fees</span></td>
              <td className='py-2 px-3 text-right'></td>
              <td className='py-2 px-3 text-right'></td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>Terminal Handling Charges (THC)</td>
              <td className='py-2 px-3 text-right'>$320</td>
              <td className='py-2 px-3 text-right'>$0.01</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>Documentation & D/O Fees</td>
              <td className='py-2 px-3 text-right'>$110</td>
              <td className='py-2 px-3 text-right'>$0.00</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>Customs Broker Fee</td>
              <td className='py-2 px-3 text-right'>$95</td>
              <td className='py-2 px-3 text-right'>$0.00</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>Container Transport (Port → Warehouse)</td>
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
          <p className='text-sm font-bold mb-2'>Cost Summary:</p>
          <ul className='text-sm space-y-1'>
            <li>• FOB Ethiopia: <span className='font-bold'>$4.80/lb</span></li>
            <li>• Total Landed Cost UK: <span className='font-bold'>$4.96/lb</span> (only +3.3% markup!)</li>
            <li>• Logistics Cost: <span className='font-bold'>$0.16/lb</span> (freight, insurance, fees)</li>
            <li>• Tax Cost: <span className='font-bold text-green-700'>$0.00/lb</span> (zero duty, zero VAT)</li>
          </ul>
          <p className='text-xs mt-3 italic font-bold text-green-700'>
            The UK offers exceptional import economics: your landed cost is barely above FOB price!
          </p>
        </div>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'>
          <span className='font-bold'>UK Cost Advantage:</span> With zero duty and zero VAT on green coffee, UK importers enjoy one of the lowest landed cost structures globally. Your true cost is FOB + logistics only, making Ethiopian specialty coffee highly competitive in the UK market.
        </p>
      </div>

      {/* SECTION 9: BUSINESS REGISTRATION */}
      <h3 id="business-registration" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBuildingOffice className='text-amber-600' />
        9. UK Business Registration & EORI Numbers
      </h3>

      <p className='my-4'>
        To import coffee into the UK, you need proper business registration:
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-8'>
        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold mb-3'>🏢 Limited Company</h5>
          <p className='text-sm mb-3'>Most common business structure for importers</p>
          <ul className='text-sm space-y-2'>
            <li><span className='font-bold'>Registration:</span> Register with Companies House (gov.uk)</li>
            <li><span className='font-bold'>Cost:</span> £12-50 (depending on method)</li>
            <li><span className='font-bold'>Timeline:</span> 24 hours (online) to 8-10 days (postal)</li>
            <li><span className='font-bold'>Liability:</span> Limited liability protection</li>
            <li><span className='font-bold'>Taxation:</span> Corporation Tax 19-25%</li>
            <li><span className='font-bold'>Best For:</span> Serious importers, growth businesses</li>
          </ul>
        </div>

        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-3'>👤 Sole Trader</h5>
          <p className='text-sm mb-3'>Simplest structure for small-scale operations</p>
          <ul className='text-sm space-y-2'>
            <li><span className='font-bold'>Registration:</span> Register as self-employed with HMRC</li>
            <li><span className='font-bold'>Cost:</span> Free</li>
            <li><span className='font-bold'>Timeline:</span> Immediate</li>
            <li><span className='font-bold'>Liability:</span> Unlimited personal liability</li>
            <li><span className='font-bold'>Taxation:</span> Income Tax 20-45%</li>
            <li><span className='font-bold'>Best For:</span> Small roasters, individual importers</li>
          </ul>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Essential Registrations for Coffee Importers</h4>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <ol className='space-y-3 text-sm list-decimal ml-5'>
          <li><span className='font-bold'>Business Registration:</span> Register company with Companies House or as sole trader with HMRC</li>
          <li><span className='font-bold'>UK EORI Number:</span> Apply at gov.uk/eori (free, issued immediately)</li>
          <li><span className='font-bold'>VAT Registration:</span> Register for VAT if turnover exceeds £85,000 (mandatory threshold)</li>
          <li><span className='font-bold'>Food Business Registration:</span> Register with local authority as food business operator (free, 28 days before trading)</li>
          <li><span className='font-bold'>HMRC Online Account:</span> Set up Government Gateway account for tax/customs</li>
          <li><span className='font-bold'>Business Bank Account:</span> Open UK business bank account for transactions</li>
        </ol>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold mb-3'>Foreign Companies Importing to UK:</p>
        <p className='text-sm mb-2'>Non-UK businesses can import through:</p>
        <ul className='text-sm space-y-2'>
          <li>• <span className='font-bold'>UK Subsidiary:</span> Establish UK limited company (recommended for regular imports)</li>
          <li>• <span className='font-bold'>UK Branch:</span> Register overseas company UK branch</li>
          <li>• <span className='font-bold'>Local Importer Partner:</span> Work with established UK importer (simplest but lower margin)</li>
          <li>• <span className='font-bold'>Indirect Representation:</span> Use customs broker as importer of record (limited scenarios)</li>
        </ul>
      </div>

      {/* SECTION 10: MARKET INSIGHTS */}
      <h3 id="market-insights" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineMapPin className='text-amber-600' />
        10. UK Coffee Market Insights & Trends
      </h3>

      <p className='my-4'>
        Understanding UK coffee culture is essential for market success:
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Key UK Coffee Market Trends (2024-2026)</h4>

      <div className='space-y-4 my-6'>
        <div className='border-l-4 border-green-500 pl-4'>
          <h5 className='font-bold'>Third-Wave Maturity</h5>
          <p className='text-sm'>UK specialty coffee scene has matured beyond early adopter phase. Consumers knowledgeable about origins, processing methods, varietals. Ethiopian coffee's complexity resonates with educated UK palate.</p>
        </div>

        <div className='border-l-4 border-blue-500 pl-4'>
          <h5 className='font-bold'>Filter Coffee Renaissance</h5>
          <p className='text-sm'>While espresso remains popular, filter coffee (V60, Chemex, batch brew) growing rapidly in UK cafes. Perfect vehicle for showcasing Ethiopian coffee's nuanced flavors.</p>
        </div>

        <div className='border-l-4 border-purple-500 pl-4'>
          <h5 className='font-bold'>Sustainability & Ethics Paramount</h5>
          <p className='text-sm'>UK consumers highly value ethical sourcing, environmental sustainability, farmer welfare. Ethiopian coffee's traceable supply chains and cooperative models align with UK values.</p>
        </div>

        <div className='border-l-4 border-amber-500 pl-4'>
          <h5 className='font-bold'>Regional Coffee Scenes Booming</h5>
          <p className='text-sm'>Specialty coffee expanding beyond London to Manchester, Edinburgh, Bristol, Birmingham, Leeds, Glasgow. Opportunity extends across UK.</p>
        </div>

        <div className='border-l-4 border-red-500 pl-4'>
          <h5 className='font-bold'>Subscription & Retail Growth</h5>
          <p className='text-sm'>Direct-to-consumer coffee subscriptions exploding. UK consumers buy specialty coffee online for home brewing – Ethiopian single-origins perform exceptionally well.</p>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Notable UK Specialty Roasters Using Ethiopian Coffee</h4>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <p className='text-sm mb-3'>Leading UK roasters championing Ethiopian origins:</p>
        <ul className='text-sm space-y-2 grid md:grid-cols-2 gap-x-6'>
          <li>• <span className='font-bold'>Square Mile Coffee Roasters</span> (London)</li>
          <li>• <span className='font-bold'>Has Bean Coffee</span> (Staffordshire)</li>
          <li>• <span className='font-bold'>Origin Coffee Roasters</span> (Cornwall)</li>
          <li>• <span className='font-bold'>Colonna Coffee</span> (Bath)</li>
          <li>• <span className='font-bold'>Extract Coffee Roasters</span> (Bristol)</li>
          <li>• <span className='font-bold'>Workshop Coffee</span> (London)</li>
          <li>• <span className='font-bold'>Rave Coffee</span> (Cirencester)</li>
          <li>• <span className='font-bold'>Pact Coffee</span> (London)</li>
          <li>• <span className='font-bold'>Union Hand-Roasted Coffee</span> (London)</li>
          <li>• <span className='font-bold'>Caravan Coffee Roasters</span> (London)</li>
        </ul>
      </div>

      {/* SECTION 11: WORKING WITH EXPORTERS */}
      <h3 id="working-with-exporters" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCheckCircle className='text-amber-600' />
        11. Working with Ethiopian Coffee Exporters
      </h3>

      <p className='my-4'>
        For UK importers, choosing the right Ethiopian export partner is crucial:
      </p>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <h5 className='font-bold mb-3'>What UK Importers Should Look For</h5>
        <ul className='space-y-2 text-sm'>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> <span className='font-bold'>UK/EU Export Experience:</span> Familiarity with UK documentation requirements, English language proficiency</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> <span className='font-bold'>Quality Consistency:</span> Established QC systems, cupping protocols, sample roasting</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> <span className='font-bold'>Full Documentation:</span> Can provide all UK-required certificates (COO, quality certs, phyto if needed)</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> <span className='font-bold'>Communication:</span> Responsive, English-speaking staff, understands UK market</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> <span className='font-bold'>Transparency:</span> Farm-level or cooperative-level traceability (critical for UK consumers)</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> <span className='font-bold'>Sample Program:</span> Pre-shipment samples for UK approval before container shipment</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> <span className='font-bold'>Flexible Terms:</span> Payment options (LC, TT, potentially escrow)</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> <span className='font-bold'>Container Consolidation:</span> Options for smaller orders (5-10 bags) if you're starting small</li>
        </ul>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <h4 className='font-bold text-xl mb-3'>Partner with Ethio Coffee Export for UK Market</h4>
        <p className='mb-4'>
          Ethio Coffee Export specializes in serving the UK specialty coffee market with full understanding of post-Brexit requirements:
        </p>
        <ul className='space-y-2 mb-4'>
          <li><HiOutlineCheckCircle className='inline mr-2 text-primary' /> Complete UK import documentation (COO, quality certificates, certificates of analysis)</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-primary' /> Experience with HMRC and FSA compliance requirements</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-primary' /> Specialty-grade Ethiopian coffee from all major regions (Yirgacheffe, Sidamo, Guji, Harrar)</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-primary' /> Pre-shipment sample program for UK roasters</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-primary' /> Container consolidation for smaller orders</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-primary' /> English communication and UK business hours compatibility</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-primary' /> Transparent pricing, farm-level traceability, sustainability documentation</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-primary' /> Established shipping routes to Felixstowe, London Gateway, Southampton</li>
        </ul>
        <p>
          <Link href='/contact-us' className='font-bold underline'>Contact us</Link> to discuss sourcing Ethiopian specialty coffee for the UK market.
        </p>
      </div>

      {/* SECTION 12: SUCCESS TIPS */}
      <h3 id="success-tips" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineLightBulb className='text-amber-600' />
        12. Tips for Success in the UK Market
      </h3>

      <div className='space-y-4 my-6'>
        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold mb-2'>📋 Get EORI & Registrations Sorted Early</h5>
          <p className='text-sm'>Don't wait until you're ready to import. Get your UK EORI, food business registration, and VAT registration (if applicable) sorted weeks before your first shipment. Delays in registration mean delays in clearance.</p>
        </div>

        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-2'>🤝 Use Experienced Customs Brokers</h5>
          <p className='text-sm'>First-time UK importers should partner with customs brokers experienced in coffee and post-Brexit procedures. They handle CDS declarations, liaise with HMRC, and ensure smooth clearance. Worth the £50-150 fee.</p>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold mb-2'>📱 Tell the Ethiopian Story</h5>
          <p className='text-sm'>UK consumers love origin stories, transparency, and connection to farmers. Invest in storytelling, photography from origin, farm-level information. This differentiates you in competitive UK market.</p>
        </div>

        <div className='bg-purple-50 p-5 rounded-lg border border-purple-200'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineMapPin className='text-purple-600' /> Start with London, Expand to Regions</h5>
          <p className='text-sm'>London has highest concentration of specialty cafes, but don't overlook regional cities. Manchester, Edinburgh, Bristol, Birmingham have vibrant coffee scenes with less competition than London.</p>
        </div>

        <div className='bg-red-50 p-5 rounded-lg border border-red-200'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineClock className='text-red-600' /> Plan Around Ethiopian Harvest</h5>
          <p className='text-sm'>Ethiopian harvest October-February means freshest coffee lands in UK February-April. Plan inventory and marketing around fresh crop arrival – UK consumers value recently-harvested coffee.</p>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineMagnifyingGlass className='text-gray-600' /> Triple-Check Documentation</h5>
          <p className='text-sm'>Post-Brexit, documentation errors cause delays. Ensure your EORI is correct (starts with "GB"), commodity code is accurate (0901 11 00 00), and all exporter details match exactly across documents.</p>
        </div>
      </div>

      {/* CONCLUSION */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6'>
        Conclusion: The UK – A Premium Market for Ethiopian Coffee
      </h3>

      <p className='my-4'>
        Despite post-Brexit complexities, the United Kingdom remains one of the world's most attractive markets for Ethiopian specialty coffee. With zero import duty, zero VAT on green coffee, a sophisticated and educated consumer base, and a thriving third-wave coffee culture, the UK offers exceptional opportunities for quality-focused Ethiopian exporters and UK-based roasters.
      </p>

      <p className='my-4'>
        The UK specialty coffee consumer values exactly what Ethiopian coffee offers: transparency, traceability, complex flavors, sustainable farming practices, and compelling origin stories. From London's cutting-edge specialty cafes to regional roasters building loyal followings, Ethiopian coffee sits at the heart of the UK's coffee revolution.
      </p>

      <p className='my-4'>
        While navigating HMRC customs procedures and FSA requirements requires diligence, the import process is straightforward once you understand the post-Brexit system. With proper EORI registration, experienced customs brokers, and reliable Ethiopian export partners, importing Ethiopian coffee to the UK is efficient and highly profitable.
      </p>

      <div className='bg-gray-100 p-6 rounded-lg my-8 border border-gray-300'>
        <h4 className='font-bold text-lg mb-3'>Key Takeaways</h4>
        <ul className='space-y-2 text-sm'>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Zero import duty</span> on coffee under WTO MFN terms</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Zero VAT</span> on green coffee for business importers (zero-rated)</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>UK EORI number required</span> for all imports (free, instant online)</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Food business registration</span> required 28 days before import (free)</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>No health certificate</span> required for green coffee</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Felixstowe & London Gateway</span> are primary coffee import ports</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Transit time: 17-25 days</span> Ethiopia to UK warehouse</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Landed cost ~3-4% above FOB</span> due to zero duty/VAT</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>UK consumers demand</span> transparency, sustainability, quality – perfect for Ethiopian coffee</li>
        </ul>
      </div>

      {/* RELATED ARTICLES */}
      <div className='my-8 p-6 bg-gray-50 rounded-lg border border-gray-200'>
        <h4 className='font-bold text-lg mb-4'>Related Articles</h4>
        <ul className='space-y-2 text-sm'>
          <li>
            <Link href='/insights/importing-ethiopian-coffee-to-germany' className='text-amber-700 hover:underline'>
              → Importing Ethiopian Coffee to Germany: Complete EU Market Entry Guide
            </Link>
          </li>
          <li>
            <Link href='/insights/importing-ethiopian-coffee-to-holland' className='text-amber-700 hover:underline'>
              → Importing Ethiopian Coffee to the Netherlands: Rotterdam Guide
            </Link>
          </li>
          <li>
            <Link href='/insights/how-to-import-ethiopian-coffee-to-usa' className='text-amber-700 hover:underline'>
              → How to Import Ethiopian Specialty Coffee to the United States
            </Link>
          </li>
          <li>
            <Link href='/insights/importing-ethiopian-coffee-to-canada-guide' className='text-amber-700 hover:underline'>
              → Importing Ethiopian Specialty Coffee to Canada: The Complete Practical Guide
            </Link>
          </li>
          <li>
            <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>
              → Sourcing Green Coffee from Ethiopia: Complete Guide
            </Link>
          </li>
          <li>
            <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>
              → Green Coffee Quality Control: Defects, Grading & What Importers Should Inspect
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

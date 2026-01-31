"use client"

import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { HiOutlineCalendarDays, HiOutlineGlobeAlt, HiOutlineCurrencyDollar, HiOutlineShieldCheck, HiOutlineDocumentText, HiOutlineTruck, HiOutlineCube, HiOutlineCheckCircle, HiOutlineExclamationTriangle, HiOutlineBuildingOffice } from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function ImportingEthiopianCoffeeToSaudiArabia({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Complete guide to importing speciality Ethiopian green coffee into Saudi Arabia SFDA requirements, customs procedures, shipping logistics, and market opportunities in the Kingdom's booming coffee sector
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Insights from Ethiopian coffee sourcing and the specialty coffee industry.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Importing Ethiopian coffee to Saudi Arabia KSA - SFDA regulations customs procedures'
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
        <span className='ml-2'>Import Guide / Saudi Arabia Market / Ethiopian Coffee Export</span>
      </div>
      
      <p className='my-4'>
        Saudi Arabia&apos;s coffee culture has transformed dramatically over the past decade. What was once a nation primarily associated with traditional Arabic coffee (qahwa) has become one of the Middle East&apos;s most dynamic specialty coffee markets. Riyadh, Jeddah, and Dammam now host hundreds of third-wave cafes, and Saudi consumers particularly the country&apos;s young, affluent population are seeking speciality single-origin coffees with transparent sourcing and distinctive flavor profiles.
      </p>

      <p className='my-4'>
        Ethiopian coffee, with its historic connection to the Arab world through centuries of trade, natural wine-like complexity, and recognizable origin story, is perfectly positioned for the Saudi market. But if you&apos;re a Saudi coffee roaster, cafe owner, or importer wondering how to navigate the import process, this comprehensive guide covers everything you need to know from <span className='font-bold'>SFDA certification</span> to clearing <span className='font-bold'>Saudi Customs (Zatca)</span>, shipping through Jeddah port, and partnering with trusted <span className='font-bold'>Ethiopian coffee exporters</span> like <span className='font-bold'>Ethio Coffee Export PLC</span>.
      </p>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineGlobeAlt className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Key Insight:</span> Importing Ethiopian coffee to Saudi Arabia requires SFDA food registration, customs clearance through Zatca, and proper documentation but the Kingdom offers zero import duty on coffee, streamlined GCC trade facilitation, and access to one of the world's fastest-growing specialty coffee markets.</span>
        </p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Why Saudi Arabia Is Importing Ethiopian Coffee
      </h3>
      <p className='my-4'>
        The Kingdom&apos;s coffee market has exploded, driven by Vision 2030 economic diversification, a young population (over 60% under 30), rising incomes, and rapidly evolving consumer preferences. Here&apos;s why Saudi buyers are turning to Ethiopian imports:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Market growth:</span> Saudi coffee market valued at over $2 billion USD and growing 8-12% annually</li>
        <li><span className='font-bold'>Premium positioning:</span> Ethiopian single-origins command premium pricing in Saudi specialty cafes (SAR 25-40 per cup)</li>
        <li><span className='font-bold'>Cultural resonance:</span> Historic trade connections between Ethiopia and the Arabian Peninsula create consumer familiarity</li>
        <li><span className='font-bold'>Flavor differentiation:</span> Yirgacheffe, Sidamo, and Guji offer brightness and fruit complexity that stand out in the market</li>
        <li><span className='font-bold'>Muslim-majority origin:</span> Ethiopia&apos;s significant Muslim population (35%+) and halal business practices align with Saudi values</li>
        <li><span className='font-bold'>Proximity advantage:</span> Short Red Sea shipping routes (Djibouti to Jeddah: 3-7 days) mean fresher coffee and lower freight costs</li>
      </ul>

      <h3 className='text-2xl font-extrabold mt-8'>
        Understanding Saudi Food Import Regulations
      </h3>
      <p className='my-4'>
        Coffee imports into Saudi Arabia are regulated primarily by the <span className='font-bold'><a href='https://www.sfda.gov.sa/en' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>Saudi Food and Drug Authority (SFDA)</a></span> and <span className='font-bold'><a href='https://zatca.gov.sa/en/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>Saudi Customs (Zatca)</a></span> (formerly known as GAZT). Here&apos;s what you need to know:
      </p>

      <div className='space-y-6 my-8'>
        <div className='bg-amber-50 p-6 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-xl mb-3 text-dark flex items-center gap-2'>
            <HiOutlineShieldCheck className='text-2xl' />
            SFDA (Saudi Food and Drug Authority) Requirements
          </h4>
          <p className='text-sm mb-3'>The SFDA oversees food safety and import compliance:</p>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>Food Product Registration:</span> All imported food products must be registered with SFDA before first shipment</li>
            <li><span className='font-bold'>Importer License:</span> Your Saudi business must have an SFDA food import license</li>
            <li><span className='font-bold'>Certificate of Origin:</span> Required from Ethiopian authorities (ICO certificate)</li>
            <li><span className='font-bold'>Health Certificate:</span> Attestation that coffee meets Saudi food safety standards</li>
            <li><span className='font-bold'>Laboratory Testing:</span> First shipments may be sampled for contaminant analysis (aflatoxin, heavy metals, pesticides)</li>
            <li><span className='font-bold'>Shelf Life Declaration:</span> Must indicate production date and expected shelf life (typically 12-24 months for green coffee)</li>
            <li><span className='font-bold'>Arabic Labeling:</span> Final consumer packaging must include Arabic labels (not required for bulk green coffee in jute bags)</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-xl mb-3 text-dark flex items-center gap-2'>
            <HiOutlineBuildingOffice className='text-2xl' />
            Saudi Customs (Zatca) Clearance Process
          </h4>
          <p className='text-sm mb-3'>Zatca (Zakat, Tax and Customs Authority) manages customs operations:</p>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>Commercial Registration:</span> Your business needs a valid CR number to import</li>
            <li><span className='font-bold'>Import Declaration (FASAH):</span> Electronic customs declaration via FASAH platform</li>
            <li><span className='font-bold'>HS Code Classification:</span> Green coffee: 0901.11.00 or 0901.12.00</li>
            <li><span className='font-bold'>Zero Import Duty:</span> Saudi Arabia imposes 0% customs duty on coffee imports</li>
            <li><span className='font-bold'>VAT (15%):</span> Value Added Tax applied at customs on CIF value</li>
            <li><span className='font-bold'>SABER Conformity:</span> Product conformity assessment via SABER platform (SFDA integration)</li>
            <li><span className='font-bold'>Pre-Arrival Documentation:</span> Bill of Lading, Commercial Invoice, Packing List, Certificate of Origin</li>
          </ul>
        </div>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'><span className='font-bold'>Critical Note:</span> Saudi Arabia's SFDA product registration must be completed BEFORE your first shipment. Processing time: 4-8 weeks. Work with your Ethiopian exporter to gather required documentation early. Ethio Coffee provides all necessary export certificates and quality reports for SFDA applications.</p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        <HiOutlineCurrencyDollar className='inline mr-2' />
        Import Duties, Taxes & Costs
      </h3>
      <p className='my-4'>
        Saudi Arabia offers one of the most import-friendly tax structures for coffee in the Gulf region:
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3'>Saudi Arabia Coffee Import Tax Structure</h4>
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
              <td className='py-2 font-bold'>Import Duty</td>
              <td className='py-2'>0%</td>
              <td className='py-2 text-gray-600'>Zero duty on coffee imports (HS 0901)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>VAT (Value Added Tax)</td>
              <td className='py-2'>15%</td>
              <td className='py-2 text-gray-600'>Applied on CIF value (Cost + Insurance + Freight)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Customs Clearance Fee</td>
              <td className='py-2'>~SAR 300-800</td>
              <td className='py-2 text-gray-600'>Varies by broker and shipment size</td>
            </tr>
          </tbody>
        </table>
        <p className='text-sm mt-4 text-gray-600'><span className='font-bold'>Key Advantage:</span> Zero import duty makes Saudi Arabia one of the most cost-effective coffee import destinations. VAT is recoverable for registered businesses via Zatca filings.</p>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-3'>Cost Example: 20ft Container to Jeddah</h4>
        <table className='w-full text-sm'>
          <tbody>
            <tr className='border-b'>
              <td className='py-2 font-bold'>FOB Price (Ethiopia)</td>
              <td className='py-2 text-right'>$4.50/lb × 39,683 lbs = $178,574 USD</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Ocean Freight (Djibouti → Jeddah)</td>
              <td className='py-2 text-right'>$2,500 USD (short Red Sea route)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Marine Insurance (0.3% CIF)</td>
              <td className='py-2 text-right'>$540 USD</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Port Fees & Handling (Jeddah)</td>
              <td className='py-2 text-right'>$600 USD</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Customs Broker Fee</td>
              <td className='py-2 text-right'>$400 USD (~SAR 1,500)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>SFDA Inspection (if required)</td>
              <td className='py-2 text-right'>$300 USD (~SAR 1,125)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>CIF Value</td>
              <td className='py-2 text-right font-bold'>$181,614 USD</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Import Duty (0%)</td>
              <td className='py-2 text-right'>$0</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>VAT (15% on CIF)</td>
              <td className='py-2 text-right'>$27,242 USD</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Trucking (Jeddah to Riyadh, if needed)</td>
              <td className='py-2 text-right'>$800 USD</td>
            </tr>
            <tr className='border-b border-dark'>
              <td className='py-2 font-bold text-lg'>Total Landed Cost</td>
              <td className='py-2 text-right font-bold text-lg'>$210,356 USD</td>
            </tr>
            <tr>
              <td className='py-2 font-bold'>Cost Per Pound (Landed)</td>
              <td className='py-2 text-right font-bold'>$5.30/lb (~SAR 19.88/lb)</td>
            </tr>
          </tbody>
        </table>
        <p className='text-sm mt-4 text-gray-600'><span className='font-bold'>Note:</span> VAT is fully recoverable for registered businesses. Effective landed cost after VAT recovery = ~$4.62/lb.</p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Shipping Ethiopian Coffee to Saudi Arabia
      </h3>
      <p className='my-4'>
        Saudi Arabia&apos;s Red Sea location offers significant logistical advantages for Ethiopian coffee imports. Transit times are among the shortest globally for Ethiopian coffee:
      </p>

      <div className='space-y-4 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2 flex items-center gap-2'>
            <HiOutlineTruck className='text-xl' />
            Primary Saudi Ports for Coffee
          </h4>
          <ul className='text-sm space-y-3'>
            <li>
              <span className='font-bold'>Jeddah Islamic Port (Red Sea):</span>
              <p className='text-gray-600 mt-1'>Transit: <span className='font-bold'>3-7 days</span> from Djibouti via Red Sea</p>
              <p className='text-gray-600'>Freight cost: $2,500-$4,000 per 20ft container</p>
              <p className='text-gray-600'>Best for: Western Saudi Arabia, Riyadh (inland trucking)</p>
            </li>
            <li>
              <span className='font-bold'>King Abdulaziz Port (Dammam, Arabian Gulf):</span>
              <p className='text-gray-600 mt-1'>Transit: 10-14 days (Red Sea → Suez Canal → Gulf)</p>
              <p className='text-gray-600'>Freight cost: $3,500-$5,000 per 20ft container</p>
              <p className='text-gray-600'>Best for: Eastern Province, Bahrain/Kuwait re-exports</p>
            </li>
          </ul>
        </div>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineCube className='text-xl' />
          Container Options & Specifications
        </h4>
        <div className='space-y-2 text-sm'>
          <div>
            <p className='font-bold'>20ft Container (FCL - Full Container Load):</p>
            <p className='text-gray-600'>Capacity: ~300 bags (60kg each) = 18,000 kg / 39,683 lbs</p>
            <p className='text-gray-600'>Ideal for: Established roasters, cafe chains, importers with distribution</p>
          </div>
          <div>
            <p className='font-bold'>40ft Container (FCL):</p>
            <p className='text-gray-600'>Capacity: ~360-400 bags = 21,600-24,000 kg</p>
            <p className='text-gray-600'>Ideal for: Large-scale operations, multiple SKU orders</p>
          </div>
          <div>
            <p className='font-bold'>LCL (Less than Container Load):</p>
            <p className='text-gray-600'>Minimum: 50-100 bags via consolidation services</p>
            <p className='text-gray-600'>Transit: 2-3 weeks (slower than FCL)</p>
            <p className='text-gray-600'>Ideal for: New importers, small roasters testing the market</p>
          </div>
        </div>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'><span className='font-bold'>Red Sea Advantage:</span> The 3-7 day transit from Djibouti to Jeddah is the shortest shipping route for Ethiopian coffee to any major market globally. This means fresher coffee, lower freight costs, and faster inventory turnover for Saudi roasters.</p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Required Documentation for Saudi Import
      </h3>
      <p className='my-4'>
        Saudi customs and SFDA require comprehensive documentation. Your Ethiopian exporter should provide most of these:
      </p>

      <div className='grid md:grid-cols-2 gap-5 my-6'>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineDocumentText className='text-xl' />
            From Ethiopian Exporter
          </h4>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>Commercial Invoice:</span> FOB Djibouti pricing, itemized</li>
            <li><span className='font-bold'>Packing List:</span> Bag count, weight per bag, total weight</li>
            <li><span className='font-bold'>Bill of Lading (B/L):</span> Ocean freight document (original for customs)</li>
            <li><span className='font-bold'>Certificate of Origin (ICO):</span> International Coffee Organization certificate</li>
            <li><span className='font-bold'>Phytosanitary Certificate:</span> From Ethiopian Ministry of Agriculture</li>
            <li><span className='font-bold'>Health Certificate:</span> Attestation of food safety compliance</li>
            <li><span className='font-bold'>Quality/Grading Report:</span> ECX grade, cupping score, defect count</li>
            <li><span className='font-bold'>Fumigation Certificate:</span> If container fumigated (recommended)</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineCheckCircle className='text-xl text-green-600' />
            What You Arrange (Saudi Side)
          </h4>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>SFDA Product Registration:</span> Complete before first shipment</li>
            <li><span className='font-bold'>SFDA Import License:</span> Your business entity food import permit</li>
            <li><span className='font-bold'>Commercial Registration (CR):</span> Valid Saudi business license</li>
            <li><span className='font-bold'>SABER Conformity Certificate:</span> Via SABER portal (links to SFDA registration)</li>
            <li><span className='font-bold'>Customs Broker:</span> Licensed clearing agent in Jeddah/Dammam</li>
            <li><span className='font-bold'>VAT Certificate:</span> If VAT-registered (for VAT recovery)</li>
            <li><span className='font-bold'>Warehouse/Storage:</span> Climate-controlled facility for green coffee</li>
          </ul>
        </div>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        The SFDA Registration Process: Step-by-Step
      </h3>
      <p className='my-4'>
        SFDA product registration is mandatory and must be completed before importing. Here&apos;s the process:
      </p>

      <ol className='my-6 space-y-4 list-decimal ml-5 font-medium'>
        <li>
          <span className='font-bold'>Create SFDA Account</span>
          <p className='font-normal text-sm mt-1'>Register your Saudi business at sfda.gov.sa. You&apos;ll need your CR number and authorized signatory details.</p>
        </li>
        <li>
          <span className='font-bold'>Submit Product Registration Application</span>
          <p className='font-normal text-sm mt-1'>Provide product details: green coffee, HS code 0901.11.00, country of origin (Ethiopia), manufacturer details (your Ethiopian exporter).</p>
        </li>
        <li>
          <span className='font-bold'>Upload Required Documents</span>
          <p className='font-normal text-sm mt-1'>Certificate of Origin, Health Certificate, product specifications, quality reports. Your exporter provides these.</p>
        </li>
        <li>
          <span className='font-bold'>SFDA Review</span>
          <p className='font-normal text-sm mt-1'>SFDA reviews application. Processing time: 4-8 weeks. May request additional information or testing.</p>
        </li>
        <li>
          <span className='font-bold'>Laboratory Testing (if required)</span>
          <p className='font-normal text-sm mt-1'>First-time products may require lab testing for contaminants. Sample can be couriered to Saudi lab or tested at SFDA-approved facility.</p>
        </li>
        <li>
          <span className='font-bold'>Approval & SABER Integration</span>
          <p className='font-normal text-sm mt-1'>Once approved, product is registered in SFDA system and linked to SABER for customs clearance.</p>
        </li>
        <li>
          <span className='font-bold'>Generate SABER CoC for Each Shipment</span>
          <p className='font-normal text-sm mt-1'>For each subsequent shipment, generate a SABER Certificate of Conformity via the SABER portal. This is presented to customs.</p>
        </li>
      </ol>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineExclamationTriangle className='text-xl text-amber-600' />
          Common SFDA Registration Mistakes
        </h4>
        <ul className='text-sm space-y-2 list-disc ml-5'>
          <li><span className='font-bold'>Starting registration too late:</span> Begin 8-12 weeks before planned shipment, not 2 weeks before</li>
          <li><span className='font-bold'>Incomplete exporter documentation:</span> Ensure your Ethiopian supplier provides properly legalized certificates</li>
          <li><span className='font-bold'>Wrong product classification:</span> Green coffee is HS 0901.11, not roasted coffee (0901.21)</li>
          <li><span className='font-bold'>Not specifying bulk vs retail:</span> Bulk green coffee in jute bags has different requirements than retail-packaged products</li>
        </ul>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Customs Clearance Process at Saudi Ports
      </h3>
      <p className='my-4'>
        Once your container arrives at Jeddah or Dammam, clearance typically takes 2-5 days:
      </p>

      <ol className='my-6 space-y-4 list-decimal ml-5 font-medium'>
        <li>
          <span className='font-bold'>Pre-Arrival: FASAH Electronic Declaration</span>
          <p className='font-normal text-sm mt-1'>Your customs broker files electronic import declaration on FASAH platform before vessel arrival.</p>
        </li>
        <li>
          <span className='font-bold'>Vessel Arrival & Unloading</span>
          <p className='font-normal text-sm mt-1'>Container unloaded at port. Bill of Lading released to broker.</p>
        </li>
        <li>
          <span className='font-bold'>Document Submission to Zatca</span>
          <p className='font-normal text-sm mt-1'>Broker submits: B/L, Commercial Invoice, Packing List, Certificate of Origin, Health Certificate, SABER Certificate of Conformity.</p>
        </li>
        <li>
          <span className='font-bold'>SFDA Inspection (Risk-Based)</span>
          <p className='font-normal text-sm mt-1'>If flagged, SFDA conducts physical inspection and/or sampling. First-time shipments more likely to be inspected.</p>
        </li>
        <li>
          <span className='font-bold'>VAT Assessment & Payment</span>
          <p className='font-normal text-sm mt-1'>Zatca calculates 15% VAT on CIF value. Payment via bank or broker.</p>
        </li>
        <li>
          <span className='font-bold'>Release & Gate-Out</span>
          <p className='font-normal text-sm mt-1'>Container released from customs hold. Arrange trucking to your warehouse.</p>
        </li>
      </ol>

      <h3 className='text-2xl font-extrabold mt-8'>
        Working with Ethio Coffee for Saudi Imports
      </h3>
      <p className='my-4'>
        As an ECX-registered <span className='font-bold'>Ethiopian coffee exporter</span> with extensive Middle East experience, <span className='font-bold'>Ethio Coffee Export PLC</span> understands Saudi market requirements and SFDA compliance:
      </p>

      <div className='grid md:grid-cols-2 gap-5 my-6'>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-3'>What Ethio Coffee Provides</h4>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li>ECX-graded specialty coffee (G1, G2) with quality reports</li>
            <li>All export documentation (ICO, phytosanitary, health certificates)</li>
            <li>Properly legalized documents for SFDA applications</li>
            <li>FOB Djibouti pricing and container coordination</li>
            <li>Sample shipments via DHL/FedEx to Saudi Arabia (for pre-purchase cupping)</li>
            <li>English/Arabic communication support</li>
            <li>Consistent year-round supply (Yirgacheffe, Sidamo, Guji, Harrar)</li>
            <li>Halal-compliant business practices and certifications</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-3'>Why Saudi Buyers Choose Us</h4>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>Muslim-owned business:</span> Ethiopian Muslim exporters who understand Gulf market values</li>
            <li><span className='font-bold'>Red Sea proximity:</span> Shortest shipping route for fastest delivery</li>
            <li><span className='font-bold'>SFDA experience:</span> We&apos;ve successfully exported to Saudi importers for years</li>
            <li><span className='font-bold'>Quality assurance:</span> Pre-shipment samples, cupping scores, moisture testing</li>
            <li><span className='font-bold'>Payment flexibility:</span> LC, TT, or negotiated terms</li>
            <li><span className='font-bold'>Regional knowledge:</span> We understand Saudi, UAE, Kuwait, and broader GCC market preferences</li>
          </ul>
        </div>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Real-World Timeline: Ethiopia to Saudi Warehouse
      </h3>
      <p className='my-4'>
        Expect <span className='font-bold'>8-12 weeks</span> total lead time for first shipment (including SFDA registration). Subsequent shipments: <span className='font-bold'>3-5 weeks</span>:
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200 space-y-3 text-sm'>
        <div>
          <h5 className='font-bold'>Weeks 1-2: Initial Contact & SFDA Prep</h5>
          <p className='text-gray-600'>Contact Ethio Coffee, request samples. Begin SFDA product registration application. Samples arrive via courier in 3-5 days.</p>
        </div>
        <div>
          <h5 className='font-bold'>Weeks 3-6: SFDA Processing</h5>
          <p className='text-gray-600'>SFDA reviews application. May request additional documents or lab testing. Monitor application status.</p>
        </div>
        <div>
          <h5 className='font-bold'>Week 7: Purchase Order & Contract</h5>
          <p className='text-gray-600'>Finalize order (origin, processing, grade, quantity). Payment terms agreed (LC or advance payment).</p>
        </div>
        <div>
          <h5 className='font-bold'>Weeks 8-9: Container Preparation</h5>
          <p className='text-gray-600'>Coffee sourced from ECX, quality-checked, bagged, container stuffed at Djibouti.</p>
        </div>
        <div>
          <h5 className='font-bold'>Week 10: Departure from Djibouti</h5>
          <p className='text-gray-600'>Bill of Lading issued. Export documentation prepared. FASAH pre-arrival filing initiated.</p>
        </div>
        <div>
          <h5 className='font-bold'>Week 10-11: Red Sea Transit</h5>
          <p className='text-gray-600'>3-7 day voyage to Jeddah (fastest route in industry).</p>
        </div>
        <div>
          <h5 className='font-bold'>Week 11-12: Customs Clearance</h5>
          <p className='text-gray-600'>Zatca and SFDA clearance, VAT payment, release. Typically 2-5 days.</p>
        </div>
        <div>
          <h5 className='font-bold'>Week 12: Delivery to Your Facility</h5>
          <p className='text-gray-600'>Container trucked to Riyadh (~10 hours), Dammam (~6 hours), or Jeddah local delivery. Coffee ready for roasting.</p>
        </div>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Saudi Coffee Market Insights & Opportunities
      </h3>
      <p className='my-4'>
        Understanding market dynamics helps position your Ethiopian coffee import business for success:
      </p>

      <div className='space-y-4 my-6'>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-2'>Vision 2030 & Coffee Sector Growth</h4>
          <p className='text-sm'>Saudi Vision 2030 is driving hospitality and F&B sector expansion. Government support for coffee entrepreneurship, easing of cafe licensing, and tourism growth are fueling specialty coffee demand. Riyadh alone has added 200+ specialty cafes since 2020.</p>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-2'>Consumer Preferences in the Kingdom</h4>
          <p className='text-sm'>Saudi consumers favor lighter roasts, fruit-forward profiles, and V60/pour-over preparation. Ethiopian naturals (with berry notes) perform exceptionally well. Price sensitivity is lower than Western markets quality trumps cost for affluent Saudi consumers.</p>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-2'>Competitive Landscape</h4>
          <p className='text-sm'>Brazilian, Colombian, and Kenyan coffees have market presence, but Ethiopian coffee enjoys cultural affinity and flavor differentiation. Direct import from Ethiopia offers margin advantages over European/US re-imports common in the past.</p>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-2'>Distribution Channels</h4>
          <p className='text-sm'>Three primary channels: (1) Direct roasting for your own cafes, (2) Wholesale to Saudi roasters/cafes, (3) Re-export to Bahrain, Kuwait, Qatar via Dammam port. Many Saudi importers serve multiple GCC markets.</p>
        </div>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Storage & Quality Management in Saudi Climate
      </h3>
      <p className='my-4'>
        Saudi Arabia&apos;s hot, dry climate requires careful green coffee storage:
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3'>Climate-Specific Storage Guidelines</h4>
        <ul className='text-sm space-y-2 list-disc ml-5'>
          <li><span className='font-bold'>Temperature control:</span> Maintain 15-25°C (59-77°F). Air conditioning essential in summer months (June-September when temps exceed 45°C)</li>
          <li><span className='font-bold'>Low humidity advantage:</span> Saudi's naturally dry climate (20-40% RH) reduces mold/moisture risks compared to humid regions</li>
          <li><span className='font-bold'>GrainPro bags:</span> Still recommended despite low humidity to protect from dust and temperature fluctuations</li>
          <li><span className='font-bold'>Pallet storage:</span> Elevate bags off ground, ensure airflow between stacks</li>
          <li><span className='font-bold'>Dust management:</span> Saudi climate can introduce dust keep warehouse sealed and filtered</li>
          <li><span className='font-bold'>FIFO rotation:</span> Use older stock first. Green coffee shelf life: 6-12 months optimal</li>
        </ul>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Common Challenges & How to Avoid Them
      </h3>
      
      <div className='space-y-4 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2 flex items-center gap-2'>
            <HiOutlineExclamationTriangle className='text-xl text-amber-600' />
            Challenge: Delayed SFDA Approval
          </h4>
          <p className='text-sm'><span className='font-bold'>Solution:</span> Start SFDA registration 8-12 weeks before planned shipment. Ensure your Ethiopian exporter provides properly legalized, notarized certificates. Consider hiring a Saudi food regulatory consultant for first-time registration.</p>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2 flex items-center gap-2'>
            <HiOutlineExclamationTriangle className='text-xl text-amber-600' />
            Challenge: VAT Cash Flow Strain
          </h4>
          <p className='text-sm'><span className='font-bold'>Solution:</span> 15% VAT is paid upfront at customs but recoverable via Zatca filing. Budget for this cash flow gap (1-3 months until VAT refund). Larger importers can apply for VAT deferment programs.</p>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2 flex items-center gap-2'>
            <HiOutlineExclamationTriangle className='text-xl text-amber-600' />
            Challenge: Quality Variability Between Shipments
          </h4>
          <p className='text-sm'><span className='font-bold'>Solution:</span> Work with reputable exporters like Ethio Coffee who provide pre-shipment samples, cupping scores, and consistent ECX grading. Request sample from each lot before approving container stuffing.</p>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2 flex items-center gap-2'>
            <HiOutlineExclamationTriangle className='text-xl text-amber-600' />
            Challenge: Summer Heat Damage During Storage
          </h4>
          <p className='text-sm'><span className='font-bold'>Solution:</span> Invest in climate-controlled warehouse space. Saudi summers (June-September) can degrade coffee quality rapidly if stored in non-AC warehouses. Cost: SAR 2-5 per bag per month, but worth it.</p>
        </div>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Is Direct Ethiopian Import Right for Your Saudi Business?
      </h3>
      <p className='my-4'>
        Direct import makes sense when:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li>You roast <span className='font-bold'>300+ kg/month</span> and have the volume to justify container logistics</li>
        <li>You want <span className='font-bold'>better margins</span> than buying from Saudi distributors who import via Europe</li>
        <li>You value <span className='font-bold'>origin transparency</span> and direct exporter relationships for marketing storytelling</li>
        <li>You can manage <span className='font-bold'>8-12 week initial lead time</span> (3-5 weeks for repeat orders)</li>
        <li>You have or can arrange <span className='font-bold'>SFDA-compliant storage</span> and business infrastructure</li>
      </ul>

      <p className='my-4'>
        Smaller roasters or cafes can start by buying from Saudi importers, then transition to direct import as volume grows. Alternatively, consider LCL consolidation (50-100 bags) to test the market.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Key Resources for Saudi Coffee Importers
      </h3>
      <p className='my-4'>
        Essential Saudi government and industry resources:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'><a href='https://www.sfda.gov.sa/en' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>SFDA Portal</a>:</span> Product registration, import licenses, guidelines</li>
        <li><span className='font-bold'><a href='https://saber.sa/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>SABER Platform</a>:</span> Conformity assessment and certificates</li>
        <li><span className='font-bold'><a href='https://zatca.gov.sa/en/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>Zatca (Saudi Customs)</a>:</span> Tariff finder, FASAH customs platform</li>
        <li><span className='font-bold'><a href='https://mc.gov.sa/en' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>Saudi Ministry of Commerce</a>:</span> Business registration, commercial services</li>
        <li><span className='font-bold'>Saudi Specialty Coffee Association:</span> Industry networking and market insights</li>
      </ul>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Ready to Import Ethiopian Coffee to Saudi Arabia?</h4>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Export PLC</span> is able to successfully supply Saudi importers in Riyadh, Jeddah, and Dammam for years. We provide premium Ethiopian specialty coffee (Yirgacheffe, Sidamo, Guji, Harrar) with SFDA-compliant documentation, fast Red Sea shipping, and the responsive, reliable service Saudi businesses expect.
        </p>
        <p className='my-2'>
          Whether you&apos;re launching your first Saudi roastery, expanding an existing cafe chain, or building an import/distribution business for the GCC, we make Ethiopian coffee import straightforward and profitable.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/contact-us' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>
            Contact Us for Saudi Import
          </Link>
          <Link href='/offerings' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            View Our Coffee Offerings
          </Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            How to Order
          </Link>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Guide:</span> This comprehensive resource covers importing Ethiopian specialty coffee to Saudi Arabia SFDA product registration, Zatca customs requirements, SABER conformity, VAT structure, Red Sea shipping logistics, cost analysis, and partnering with Ethio Coffee Export for Saudi market entry.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/insights/ecx-and-ethiopian-coffee-export' className='underline'>Understanding ECX</Link> · <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='underline'>Sourcing Guide</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  );
}

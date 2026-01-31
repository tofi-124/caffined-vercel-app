"use client"

import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { HiOutlineCalendarDays, HiOutlineGlobeAlt, HiOutlineCurrencyDollar, HiOutlineShieldCheck, HiOutlineDocumentText, HiOutlineTruck, HiOutlineCube, HiOutlineCheckCircle, HiOutlineBuildingOffice } from 'react-icons/hi2'

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
        Practical guide to importing Ethiopian green coffee into the Netherlands   Rotterdam logistics, Dutch customs, VAT, bonded storage and distribution to the Benelux and wider EU
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Insights from Ethiopian coffee sourcing and the specialty coffee industry.
        </figcaption>
        
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Importing Ethiopian coffee to the Netherlands - Rotterdam port and EU distribution'
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
        <span className='ml-2'>Import Guide / Netherlands & EU Market / Ethiopian Coffee Export</span>
      </div>

      <p className='my-4'>
        The Netherlands is a strategic European gateway for Ethiopian coffee. Rotterdam is one of the world&apos;s busiest ports with best-in-class logistics, bonded warehousing, and efficient customs procedures   making it a popular choice for importers distributing across Benelux and Western Europe.
      </p>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineGlobeAlt className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Quick Take:</span> Rotterdam offers fast throughput, modern bonded storage and excellent inland connections. Ethiopian coffee normally enters the EU duty‑free under preferential schemes (check current status and certificate requirements). The Netherlands applies a reduced VAT rate for most food products (9%) and does not levy a federal coffee excise like Germany.</span>
        </p>
        <p className='text-sm mt-3'>
          <a href='https://www.douane.nl/en/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>Dutch Customs (Douane)</a> and the <a href='https://english.nvwa.nl/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>NVWA</a> enforce EU food-safety and customs rules; EU contaminant limits (e.g. ochratoxin A) are set at EU level (<a href='https://food.ec.europa.eu/safety/chemical-safety/contaminants/legislation_en' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>EU contaminants legislation</a>).</p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Why the Netherlands (Rotterdam)?
      </h3>
      <p className='my-4'>
        Importers choose the Netherlands for its operational advantages and access to EU markets:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Logistics hub:</span> Rotterdam links ocean freight to inland barge, rail and truck distribution across Europe</li>
        <li><span className='font-bold'>Bonded warehouses:</span> Efficient facilities to defer VAT and duties until release</li>
        <li><span className='font-bold'>Favorable VAT treatment:</span> Food products typically attract the reduced VAT rate (9%) for retail in the Netherlands</li>
        <li><span className='font-bold'>Zero import duty:</span> Ethiopian coffee benefits from GSP+ (Form A certificate required)</li>
        <li><span className='font-bold'>Benelux distribution:</span> Fast access to Netherlands, Belgium and Luxembourg markets</li>
        <li><span className='font-bold'>Established specialty scene:</span> Dutch roasters and traders actively source high-quality Ethiopian lots</li>
      </ul>

      <h3 className='text-2xl font-extrabold mt-8'>
        EU & Dutch Import Essentials
      </h3>
      <p className='my-4'>
        Imports follow EU regulations for food safety and traceability. Dutch authorities enforce these rules via the Netherlands Food and Consumer Product Safety Authority (NVWA) and Customs (Douane). Pre-arrival safety notifications (ICS2/ENS), an EORI number, and accurate electronic import declarations are required to clear shipments quickly:
      </p>

      <div className='space-y-6 my-8'>
        <div className='bg-amber-50 p-6 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-xl mb-3 text-dark flex items-center gap-2'>
            <HiOutlineShieldCheck className='text-2xl' />
            EU Food Safety Requirements
          </h4>
          <p className='text-sm mb-3'>
            Key points: compliance with General Food Law, MRLs for pesticide residues, and limits for contaminants such as ochratoxin A (OTA).
          </p>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-xl mb-3 text-dark flex items-center gap-2'>
            <HiOutlineBuildingOffice className='text-2xl' />
            Dutch Authorities
          </h4>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>NVWA:</span> National food safety authority handling inspections and controls</li>
            <li><span className='font-bold'>Customs (Douane):</span> Manages customs clearance, VAT handling and bonded storage rules</li>
            <li><span className='font-bold'>EORI Number:</span> Required to import into the EU</li>
            <li><span className='font-bold'>HS Code:</span> Green coffee 0901.11 (not decaffeinated) / 0901.12 (decaffeinated)</li>
          </ul>
        </div>
      </div>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Regulatory references:</span>
        <span className='ml-2'>See <a href='https://food.ec.europa.eu/safety/chemical-safety/contaminants/legislation_en' target='_blank' rel='noopener noreferrer' className='underline'>EU contaminants rules</a> (ochratoxin A limits), <a href='https://www.douane.nl/en/' target='_blank' rel='noopener noreferrer' className='underline'>Dutch Customs</a>, and <a href='https://english.nvwa.nl/' target='_blank' rel='noopener noreferrer' className='underline'>NVWA</a> for inspection guidance.</span>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Costs & Taxes (Landed)
      </h3>
      <p className='my-4'>
        Ethiopia enjoys duty-free access under GSP+, so major landed-cost items are FOB price, ocean freight, insurance, handling, and Dutch VAT. There is no national coffee excise in the Netherlands comparable to Germany&apos;s Kaffeesteuer.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3'>Netherlands / EU Cost Checklist</h4>
        <ul className='list-disc ml-5 text-sm space-y-2'>
          <li><span className='font-bold'>Import Duty:</span> 0% under GSP+ with Form A certificate</li>
          <li><span className='font-bold'>VAT:</span> Typically reduced rate 9% for most retail food; applies on CIF + costs   recoverable for VAT-registered businesses</li>
          <li><span className='font-bold'>Customs & Handling Fees:</span> Broker, terminal handling, and inland transport</li>
          <li><span className='font-bold'>Bonded Storage:</span> Useful to manage cash flow and VAT timing</li>
        </ul>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Shipping & Ports
      </h3>
      <p className='my-4'>
        Rotterdam is the primary gateway: fast vessel schedules, regular sailings from Djibouti/Red Sea via Suez, and excellent onward distribution by barge, rail and truck.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineTruck className='text-xl' />
          Typical Options
        </h4>
        <p className='text-sm'>
          20ft FCL (18,000 kg) and 40ft FCL are standard. LCL consolidations are available for smaller buyers. Transit time from Djibouti to Rotterdam: ~22–30 days depending on carrier and routing.
        </p>
      </div>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineCurrencyDollar className='text-xl' />
          Cost Example: 20ft Container to Rotterdam
        </h4>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='border-b-2 border-gray-300'>
              <th className='text-left py-2 pr-4'>Charge Type</th>
              <th className='text-left py-2 pr-4'>Amount</th>
              <th className='text-left py-2'>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='py-2 font-bold'>FOB Price (Ethiopia/Djibouti)</td>
              <td className='py-2 text-right'>$4.80/lb × 39,683 lbs = $190,478 USD</td>
              <td className='py-2 text-gray-600'>Example FOB for specialty coffee</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Ocean Freight (Djibouti → Rotterdam)</td>
              <td className='py-2 text-right'>$3,800 USD</td>
              <td className='py-2 text-gray-600'>Typical market rate   confirm with carrier</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Marine Insurance (0.3% CIF)</td>
              <td className='py-2 text-right'>$583 USD</td>
              <td className='py-2 text-gray-600' />
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Port Fees & Terminal Handling</td>
              <td className='py-2 text-right'>$550 USD (€500)</td>
              <td className='py-2 text-gray-600'>Rotterdam terminal charges</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Customs Broker Fee</td>
              <td className='py-2 text-right'>$330 USD (€300)</td>
              <td className='py-2 text-gray-600' />
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>CIF Rotterdam</td>
              <td className='py-2 text-right font-bold'>$195,741 USD (€177,973 @ €1.10/USD)</td>
              <td className='py-2 text-gray-600' />
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Import Duty (0% under GSP+)</td>
              <td className='py-2 text-right'>€0</td>
              <td className='py-2 text-gray-600' />
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>VAT 9% on (CIF + Fees)</td>
              <td className='py-2 text-right'>€16,017 ($17,619 USD)</td>
              <td className='py-2 text-gray-600'>Reduced Dutch VAT for most food products</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Trucking (Rotterdam to warehouse)</td>
              <td className='py-2 text-right'>€200 ($220 USD)</td>
              <td className='py-2 text-gray-600' />
            </tr>
            <tr className='border-b border-dark'>
              <td className='py-2 font-bold text-lg'>Total Landed Cost</td>
              <td className='py-2 text-right font-bold text-lg'>$214,489 USD (€194,990)</td>
              <td className='py-2 text-gray-600' />
            </tr>
            <tr>
              <td className='py-2 font-bold'>Cost Per Pound (Landed)</td>
              <td className='py-2 text-right font-bold'>$5.41/lb</td>
              <td className='py-2 text-gray-600' />
            </tr>
            <tr>
              <td className='py-2 font-bold'>After VAT Recovery (VAT-registered importer)</td>
              <td className='py-2 text-right font-bold'>$4.96/lb ($196,870 USD)</td>
              <td className='py-2 text-gray-600'>VAT recoverable for registered businesses</td>
            </tr>
          </tbody>
        </table>
        <p className='text-sm mt-4 text-gray-600'><span className='font-bold'>Note:</span> Figures are illustrative; get up-to-date freight and terminal quotes, and confirm exchange rates. Bonded storage can defer VAT and improve cash flow.</p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Required Documentation
      </h3>
      <p className='my-4'>
        Ensure the exporter provides complete documentation to accelerate Dutch clearance:
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
            <li><span className='font-bold'>Bill of Lading</span></li>
            <li><span className='font-bold'>Form A Certificate of Origin</span> (to claim GSP+ duty-free)</li>
            <li><span className='font-bold'>Quality Report / ECX Grading and moisture</span></li>
            <li><span className='font-bold'>Pesticide residue and OTA test reports</span></li>
          </ul>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineCheckCircle className='text-xl text-green-600' />
            What Importer Should Arrange
          </h4>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>EORI & VAT Registration</span></li>
            <li><span className='font-bold'>Customs broker or freight forwarder</span></li>
            <li><span className='font-bold'>Bonded warehouse agreement (if deferring VAT)</span></li>
            <li><span className='font-bold'>HACCP / food business registration with local authority</span></li>
          </ul>
        </div>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Customs Clearance Flow (Netherlands)
      </h3>
      <ol className='my-6 space-y-4 list-decimal ml-5 font-medium'>
        <li><span className='font-bold'>Pre-arrival declaration:</span> ENS/Entry Summary sent before arrival.</li>
        <li><span className='font-bold'>Import declaration:</span> Electronic declaration via Dutch customs systems; attach Form A number for GSP+.</li>
        <li><span className='font-bold'>Risk checks & sampling:</span> NVWA may request tests; first-time importers can expect closer scrutiny.</li>
        <li><span className='font-bold'>Payment & release:</span> VAT and fees or bonded storage procedures lead to release and onward transport.</li>
      </ol>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'><span className='font-bold'>Tip:</span> Use Rotterdam bonded storage to smooth cash flow and simplify cross-border distribution into Belgium and Germany   many traders import via Rotterdam even when final markets are elsewhere.</p>
      </div>

      <p className='my-6'>
        For specific questions about pricing examples, bonded warehouse providers in Rotterdam, or a checklist for your first shipment, <Link href='/contact-us' className='text-amber-700 hover:underline'>contact our export team</Link> and we can help arrange logistics and documentation support.
      </p>
    </>
  )
}

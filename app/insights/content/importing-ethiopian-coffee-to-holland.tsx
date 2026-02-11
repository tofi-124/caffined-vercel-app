import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { HiOutlineGlobeAlt, HiOutlineCurrencyDollar, HiOutlineShieldCheck, HiOutlineDocumentText, HiOutlineTruck, HiOutlineCheckCircle, HiOutlineBuildingOffice } from 'react-icons/hi2'

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

      {/* FAQ SECTION */}
      <section className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions About Importing Ethiopian Coffee to the Netherlands</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Why import Ethiopian coffee through Rotterdam?</h4>
            <p className="text-sm text-gray-600">Rotterdam is Europe's largest port and the primary entry point for coffee into the EU. It offers bonded warehouse facilities, competitive port fees, excellent logistics infrastructure, and easy onward distribution to Belgium, Germany, and the wider EU market.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What customs procedures apply to Ethiopian coffee imports in the Netherlands?</h4>
            <p className="text-sm text-gray-600">Importers must file an Entry Summary (ENS) before arrival, submit an electronic import declaration through Dutch customs, and present Form A for GSP+ duty reduction. NVWA may request sampling and testing, especially for first-time importers.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Is Ethiopian coffee eligible for GSP+ duty reduction in the Netherlands?</h4>
            <p className="text-sm text-gray-600">Yes. Ethiopia qualifies for the EU Generalised Scheme of Preferences, which provides reduced or zero duty on green coffee imports. A valid Form A certificate of origin must be attached to the import declaration.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What are the advantages of bonded storage in Rotterdam for coffee importers?</h4>
            <p className="text-sm text-gray-600">Bonded warehouses allow importers to defer VAT and duty payments until goods are released for sale. This improves cash flow and simplifies cross-border distribution, as coffee can be re-exported to other EU countries without paying Dutch VAT first.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What food safety requirements apply to coffee imports in the Netherlands?</h4>
            <p className="text-sm text-gray-600">Coffee must comply with EU food safety regulations including maximum residue limits for pesticides and ochratoxin A limits. The NVWA (Netherlands Food and Consumer Product Safety Authority) conducts inspections and may test incoming shipments.</p>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-3 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>EU Import Guides</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/importing-ethiopian-coffee-to-germany' className='text-amber-700 hover:underline'>Importing to Germany</Link></li>
              <li>• <Link href='/insights/importing-ethiopian-coffee-to-uk' className='text-amber-700 hover:underline'>Importing to UK</Link></li>
              <li>• <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline'>EU Deforestation Regulation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Trade & Logistics</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/ethiopian-coffee-exporter' className='text-amber-700 hover:underline'>Ethiopian Coffee Exporter</Link></li>
              <li>• <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>Understanding ECX</Link></li>
              <li>• <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Minimum Order Quantities</Link></li>
              <li>• <Link href='/insights/rising-ethiopian-coffee-prices-explained' className='text-amber-700 hover:underline'>Coffee Prices Explained</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality & Sourcing</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Heirloom Varieties</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Certifications Guide</Link></li>
              <li>• <Link href='/insights/ethiopian-dry-coffee-production-quality-control' className='text-amber-700 hover:underline'>Quality Control</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Import Ethiopian Coffee to the Netherlands</h4>
        <p className='my-2'>
          At <span className='font-bold'>Ethio Coffee Export PLC</span>, we support Dutch importers with pricing, documentation, and logistics through Rotterdam. Contact us to get started.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Our Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Contact Us</Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>How to Order</Link>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> A practical guide for importing Ethiopian coffee to the Netherlands, including EU regulations, Rotterdam logistics, and market entry advice.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { HiOutlineGlobeAlt, HiOutlineCurrencyDollar, HiOutlineShieldCheck, HiOutlineDocumentText, HiOutlineTruck, HiOutlineCheckCircle, HiOutlineBuildingOffice, HiOutlineArrowTrendingUp, HiOutlineClock, HiOutlineExclamationTriangle } from 'react-icons/hi2'

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

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-2'>Key Takeaway</p>
        <p>
          The Netherlands (via Rotterdam) offers fast throughput, modern bonded storage, and no coffee excise tax, making it an ideal EU gateway for Ethiopian coffee imports. Dutch customs are efficient, and a single import clears goods for distribution across Benelux and Western Europe.
        </p>
      </div>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Import Guide / Netherlands & EU Market / Ethiopian Coffee Export</span>
      </div>

      <p className='my-4'>
        The Netherlands is a strategic European gateway for Ethiopian coffee. Rotterdam is one of the world&apos;s busiest ports with best-in-class logistics, bonded warehousing, and efficient customs procedures   making it a popular choice for importers distributing across Benelux and Western Europe.
      </p>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineGlobeAlt className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Quick Take:</span> Rotterdam offers fast throughput, modern bonded storage and excellent inland connections. Ethiopian coffee normally enters the EU duty‑free under preferential schemes (check current status and certificate requirements). The Netherlands applies a reduced VAT rate for most food products (9%) and does not levy a federal coffee excise like Germany.</span>
        </p>
        <p className='text-sm mt-3'>
          <a href='https://www.douane.nl/en/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>Dutch Customs (Douane)</a> and the <a href='https://english.nvwa.nl/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>NVWA</a> enforce EU food-safety and customs rules; EU contaminant limits (e.g. ochratoxin A) are set at EU level (<a href='https://food.ec.europa.eu/safety/chemical-safety/contaminants/legislation_en' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>EU contaminants legislation</a>).</p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-lg font-bold mb-3'>In This Guide</h3>
        <div className='grid md:grid-cols-2 gap-2'>
          <ol className='list-decimal ml-5 space-y-1 text-sm'>
            <li><a href='#why-netherlands' className='text-amber-700 hover:underline'>Why the Netherlands (Rotterdam)?</a></li>
            <li><a href='#regulations' className='text-amber-700 hover:underline'>EU & Dutch Import Regulations</a></li>
            <li><a href='#costs' className='text-amber-700 hover:underline'>Import Duties, VAT & Landed Costs</a></li>
            <li><a href='#shipping' className='text-amber-700 hover:underline'>Shipping Routes & Port Logistics</a></li>
            <li><a href='#documentation' className='text-amber-700 hover:underline'>Required Import Documentation</a></li>
            <li><a href='#customs' className='text-amber-700 hover:underline'>Dutch Customs Clearance Process</a></li>
          </ol>
          <ol start={7} className='list-decimal ml-5 space-y-1 text-sm'>
            <li><a href='#registration' className='text-amber-700 hover:underline'>Business Registration & EORI</a></li>
            <li><a href='#storage' className='text-amber-700 hover:underline'>Storage & Quality Management</a></li>
            <li><a href='#market' className='text-amber-700 hover:underline'>Dutch Coffee Market Insights</a></li>
            <li><a href='#working-with-us' className='text-amber-700 hover:underline'>Working with Ethio Coffee Export</a></li>
            <li><a href='#timeline' className='text-amber-700 hover:underline'>Real-World Timeline</a></li>
            <li><a href='#challenges' className='text-amber-700 hover:underline'>Common Challenges & Solutions</a></li>
          </ol>
        </div>
      </div>

      <h3 id='why-netherlands' className='text-2xl font-extrabold mt-8'>
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

      <h3 id='regulations' className='text-2xl font-extrabold mt-8'>
        EU & Dutch Import Regulations
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

      <h3 id='costs' className='text-2xl font-extrabold mt-8'>
        Import Duties, VAT & Landed Costs
      </h3>
      <p className='my-4'>
        Ethiopia enjoys duty-free access under GSP+, so major landed-cost items are FOB price, ocean freight, insurance, handling, and Dutch VAT. There is no national coffee excise in the Netherlands comparable to Germany&apos;s Kaffeesteuer.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3'>Netherlands / EU Cost Checklist</h4>
        <ul className='list-disc ml-5 text-sm space-y-2'>
          <li><span className='font-bold'>Import Duty:</span> 0% under GSP+ with Form A certificate</li>
          <li><span className='font-bold'>VAT:</span> Typically reduced rate 9% for most retail food; applies on FCA + costs   recoverable for VAT-registered businesses</li>
          <li><span className='font-bold'>Customs & Handling Fees:</span> Broker, terminal handling, and inland transport</li>
          <li><span className='font-bold'>Bonded Storage:</span> Useful to manage cash flow and VAT timing</li>
        </ul>
      </div>

      <h3 id='shipping' className='text-2xl font-extrabold mt-8'>
        Shipping Routes & Dutch Port Logistics
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
              <td className='py-2'>Marine Insurance (0.3% FCA)</td>
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
              <td className='py-2 font-bold'>FCA Rotterdam</td>
              <td className='py-2 text-right font-bold'>$195,741 USD (€177,973 @ €1.10/USD)</td>
              <td className='py-2 text-gray-600' />
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Import Duty (0% under GSP+)</td>
              <td className='py-2 text-right'>€0</td>
              <td className='py-2 text-gray-600' />
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>VAT 9% on (FCA + Fees)</td>
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

      <h3 id='documentation' className='text-2xl font-extrabold mt-8'>
        Required Import Documentation
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

      <h3 id='customs' className='text-2xl font-extrabold mt-8'>
        Dutch Customs Clearance Process
      </h3>
      <p className='my-4'>
        The Netherlands uses the AGS (Automated Customs System) for electronic declarations. Clearance is efficient when documentation is complete. Typical processing time: 1 to 3 business days for compliant shipments:
      </p>
      <ol className='my-6 space-y-4 list-decimal ml-5 font-medium'>
        <li><span className='font-bold'>Pre-arrival ENS filing:</span> <span className='font-normal text-gray-600'>Submit an Entry Summary Declaration (ENS) via the Import Control System (ICS2) before the vessel arrives at Rotterdam. This triggers the advance risk assessment.</span></li>
        <li><span className='font-bold'>Vessel arrival & unloading:</span> <span className='font-normal text-gray-600'>Container is unloaded and moved to a customs-supervised terminal. Port of Rotterdam typical dwell time: 1 to 2 days.</span></li>
        <li><span className='font-bold'>Import declaration (AGS):</span> <span className='font-normal text-gray-600'>Your customs broker files the electronic import declaration via AGS. Attach Form A certificate number for GSP+ zero-duty treatment. Declare HS code 0901.11 (green, not decaffeinated).</span></li>
        <li><span className='font-bold'>Risk assessment & NVWA checks:</span> <span className='font-normal text-gray-600'>Dutch Customs performs automated risk assessment. NVWA may request sampling for pesticide residues or ochratoxin A testing, particularly for first-time importers or flagged shipments.</span></li>
        <li><span className='font-bold'>Duty & VAT assessment:</span> <span className='font-normal text-gray-600'>With GSP+ approval, import duty is assessed at 0%. VAT (9%) is calculated on FCA value plus incidental costs. VAT-registered businesses can recover this through quarterly filings.</span></li>
        <li><span className='font-bold'>Bonded storage (optional):</span> <span className='font-normal text-gray-600'>If using a bonded warehouse, goods transfer under customs supervision. VAT and duties are deferred until goods are released to the domestic market or re-exported.</span></li>
        <li><span className='font-bold'>Release & delivery:</span> <span className='font-normal text-gray-600'>Once cleared, the container is released for pickup. Onward transport to your warehouse via truck, barge, or rail. Rotterdam offers excellent multimodal connections across the Benelux and Germany.</span></li>
      </ol>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium'><span className='font-bold'>Tip:</span> Use Rotterdam bonded storage to smooth cash flow and simplify cross-border distribution into Belgium and Germany   many traders import via Rotterdam even when final markets are elsewhere.</p>
      </div>

      {/* SECTION 7: BUSINESS REGISTRATION */}
      <h3 id='registration' className='text-2xl font-extrabold mt-8'>
        Business Registration & EORI for Dutch Coffee Imports
      </h3>
      <p className='my-4'>
        Before importing coffee into the Netherlands, you need proper business registration and an EORI number. These are prerequisites for filing customs declarations and recovering VAT:
      </p>

      <div className='space-y-6 my-8'>
        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-xl mb-3'>Essential Registrations</h4>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>EORI Number:</span> Required for all EU importers. Apply through Dutch Customs (Douane). Processing takes approximately 3 to 5 business days. Without an EORI, you cannot file import declarations.</li>
            <li><span className='font-bold'>Dutch VAT Registration:</span> Required to recover the 9% VAT paid at import. Register with the Belastingdienst (Dutch Tax Authority). Non-resident EU businesses can use fiscal representation.</li>
            <li><span className='font-bold'>Food Business Registration:</span> Register with your local authority (gemeente). All food businesses in the Netherlands must be registered before operating, per EU General Food Law.</li>
            <li><span className='font-bold'>KVK Registration:</span> Register your business with the Kamer van Koophandel (Dutch Chamber of Commerce) if establishing a Dutch entity.</li>
          </ul>
        </div>

        <div className='bg-amber-50 p-6 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-xl mb-3'>Non-Dutch Companies Importing via Rotterdam</h4>
          <p className='text-sm mb-3'>
            Many importers from Belgium, Germany, and other EU countries route shipments through Rotterdam without establishing a Dutch company. This is possible using:
          </p>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>Fiscal representation:</span> A Dutch-registered agent files VAT on your behalf, allowing you to recover Dutch import VAT without a Dutch entity</li>
            <li><span className='font-bold'>EU EORI from home country:</span> Your existing EU EORI number is valid for Dutch customs declarations</li>
            <li><span className='font-bold'>Customs broker with AEO status:</span> An Authorized Economic Operator broker can streamline clearance and reduce inspection rates</li>
          </ul>
        </div>
      </div>

      {/* SECTION 8: STORAGE & QUALITY */}
      <h3 id='storage' className='text-2xl font-extrabold mt-8'>
        Storage & Quality Management in the Netherlands
      </h3>
      <p className='my-4'>
        Proper storage protects your investment and maintains cup quality throughout the shelf life. The Netherlands has a temperate maritime climate, which is generally favorable for green coffee storage, but humidity management remains important:
      </p>

      <div className='grid md:grid-cols-2 gap-5 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-3'>Optimal Storage Conditions</h4>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>Temperature:</span> 15 to 20°C (59 to 68°F)</li>
            <li><span className='font-bold'>Humidity:</span> 50 to 65% relative humidity</li>
            <li><span className='font-bold'>Ventilation:</span> Good airflow to prevent condensation</li>
            <li><span className='font-bold'>Light:</span> Store away from direct sunlight</li>
            <li><span className='font-bold'>Shelf life:</span> Green coffee maintains optimal quality for 6 to 12 months when stored correctly</li>
          </ul>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-3'>Rotterdam Warehouse Options</h4>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>Bonded warehouses:</span> Defer VAT until release for domestic sale or re-export</li>
            <li><span className='font-bold'>Dedicated coffee storage:</span> Several Rotterdam-area facilities specialize in green coffee with climate control</li>
            <li><span className='font-bold'>GrainPro bags:</span> Use moisture-barrier bags inside jute for long transit and storage protection</li>
            <li><span className='font-bold'>FIFO inventory:</span> First in, first out rotation to maintain freshness</li>
            <li><span className='font-bold'>Typical cost:</span> €1 to 3 per bag per month depending on facility and volume</li>
          </ul>
        </div>
      </div>

      {/* SECTION 9: MARKET INSIGHTS */}
      <h3 id='market' className='text-2xl font-extrabold mt-8'>
        <HiOutlineArrowTrendingUp className='inline mr-2' />
        Dutch Coffee Market Insights & Opportunities
      </h3>
      <p className='my-4'>
        The Netherlands has a strong coffee culture and serves as a commercial hub for the European coffee trade. Dutch consumers drink an average of 3 to 4 cups daily, and the specialty segment is growing steadily:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Established trading center:</span> Amsterdam and Rotterdam host major green coffee traders, brokers, and quality labs. The Netherlands imports significant volumes not only for domestic consumption but for re-export across Europe.</li>
        <li><span className='font-bold'>Growing specialty segment:</span> Dutch specialty roasters in Amsterdam, Rotterdam, The Hague, and Utrecht are expanding their single-origin offerings. Ethiopian coffees are particularly valued for their complexity and traceability.</li>
        <li><span className='font-bold'>Sustainability focus:</span> Dutch consumers and businesses prioritize sustainability certifications (organic, Rainforest Alliance, Fair Trade). The Netherlands hosts the headquarters of UTZ (now Rainforest Alliance) and has a strong tradition of responsible sourcing.</li>
        <li><span className='font-bold'>Distribution gateway:</span> Many importers use the Netherlands as a base for supplying Belgium, Luxembourg, Germany, and Scandinavia. Bonded warehouse infrastructure supports flexible cross-border logistics.</li>
        <li><span className='font-bold'>Premium pricing potential:</span> Specialty Ethiopian lots (Yirgacheffe, Guji, Sidamo) command strong premiums in the Dutch market, particularly washed coffees with clean floral and citrus profiles.</li>
      </ul>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium'><span className='font-bold'>Market Tip:</span> Dutch specialty roasters often prefer smaller lots (5 to 20 bags) with detailed traceability rather than large commodity volumes. Providing cupping notes, processing details, and cooperative-level information strengthens your positioning in this market.</p>
      </div>

      {/* SECTION 10: WORKING WITH ETHIO COFFEE */}
      <h3 id='working-with-us' className='text-2xl font-extrabold mt-8'>
        Working with Ethio Coffee Export for Dutch &amp; EU Imports
      </h3>
      <p className='my-4'>
        As an ECX-registered Ethiopian coffee exporter with three decades of sourcing heritage, Ethio Coffee Import and Export PLC works with Dutch importers, roasters, and traders who source specialty Ethiopian coffee through Rotterdam:
      </p>

      <div className='grid md:grid-cols-2 gap-5 my-6'>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-3'>What Ethio Coffee Handles (Ethiopia Side)</h4>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li>Sourcing from trusted cooperatives and washing stations across Ethiopian coffee regions</li>
            <li>ECX quality grading, moisture analysis, and cupping reports</li>
            <li>All Ethiopian export documentation (commercial invoice, packing list, Form A certificate of origin)</li>
            <li>Phytosanitary and pesticide residue testing per EU MRL standards</li>
            <li>FOB Djibouti container loading and shipping coordination</li>
            <li>Pre-shipment samples via DHL or FedEx for your approval</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-3'>What You Arrange (Netherlands/EU Side)</h4>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li>EORI registration and Dutch VAT number (or fiscal representative)</li>
            <li>Customs broker at Rotterdam or your EU port of entry</li>
            <li>Marine insurance (typically 0.2 to 0.3% of FCA value)</li>
            <li>Warehouse or bonded storage booking</li>
            <li>Inland transport from the port</li>
            <li>Food safety compliance and HACCP documentation</li>
          </ul>
        </div>
      </div>

      {/* SECTION 11: TIMELINE */}
      <h3 id='timeline' className='text-2xl font-extrabold mt-8'>
        <HiOutlineClock className='inline mr-2' />
        Real-World Timeline: Ethiopia to Dutch Warehouse
      </h3>
      <p className='my-4'>
        First-time imports typically take 10 to 14 weeks from initial contact to coffee in your warehouse. Subsequent orders are faster once relationships and documentation are established:
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
              <td className='py-2 font-bold'>1. Sourcing & samples</td>
              <td className='py-2'>2 to 3 weeks</td>
              <td className='py-2 text-gray-600'>Sample selection, cupping approval, contract agreement</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>2. Preparation & export</td>
              <td className='py-2'>2 to 3 weeks</td>
              <td className='py-2 text-gray-600'>ECX processing, export documentation, Ethiopian customs, loading at Djibouti</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>3. Ocean transit</td>
              <td className='py-2'>22 to 30 days</td>
              <td className='py-2 text-gray-600'>Djibouti to Rotterdam via Suez Canal. Carrier and routing affect transit time.</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>4. Dutch customs clearance</td>
              <td className='py-2'>1 to 3 days</td>
              <td className='py-2 text-gray-600'>Import declaration, NVWA checks, duty/VAT assessment, release</td>
            </tr>
            <tr>
              <td className='py-2 font-bold'>5. Delivery to warehouse</td>
              <td className='py-2'>1 to 2 days</td>
              <td className='py-2 text-gray-600'>Drayage from Rotterdam to your storage facility</td>
            </tr>
          </tbody>
        </table>
        <p className='text-sm mt-4 text-gray-600'><span className='font-bold'>Total first order:</span> ~10 to 14 weeks. <span className='font-bold'>Repeat orders:</span> ~5 to 7 weeks (sourcing phase shortened with established relationship).</p>
      </div>

      {/* SECTION 12: CHALLENGES */}
      <h3 id='challenges' className='text-2xl font-extrabold mt-8'>
        <HiOutlineExclamationTriangle className='inline mr-2' />
        Common Challenges & How to Avoid Them
      </h3>

      <div className='space-y-4 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-2'>Missing or incorrect Form A certificate</h4>
          <p className='text-sm text-gray-600'>Without a valid Form A, your shipment loses GSP+ zero-duty status and may be assessed at the standard EU tariff rate. Confirm Form A details with your exporter before shipping. Errors in origin declarations can trigger manual customs review and delays.</p>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-2'>NVWA sampling delays</h4>
          <p className='text-sm text-gray-600'>First-time importers and new exporter-importer pairings face higher inspection rates. NVWA may sample your shipment for pesticide residues or OTA. Pre-testing at origin (which Ethio Coffee provides) significantly reduces the risk of delays or rejections at Rotterdam.</p>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-2'>VAT cash flow pressure</h4>
          <p className='text-sm text-gray-600'>9% VAT on a full container adds significant upfront cost. Use bonded storage or Article 23 deferral (available in the Netherlands) to manage cash flow. Under Article 23, import VAT is reverse-charged on your periodic VAT return rather than paid at the border.</p>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-2'>Moisture and quality loss during transit</h4>
          <p className='text-sm text-gray-600'>The 22 to 30 day transit through varying climate zones can cause condensation inside containers. Ensure GrainPro or equivalent moisture-barrier bags are used inside jute or sisal. Request that the exporter provide moisture content documentation (target: 10 to 12% for green coffee).</p>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-2'>EU Deforestation Regulation (EUDR) compliance</h4>
          <p className='text-sm text-gray-600'>The EU Deforestation Regulation requires importers to verify that coffee was not produced on land deforested after December 31, 2020. Due diligence documentation, including GPS coordinates of production areas, is required. Work with your exporter to establish traceability to the farm or cooperative level. Check the latest enforcement timeline as implementation dates have been adjusted.</p>
        </div>
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
            <h4 className='font-semibold mb-2 text-sm'>Import Guides: Europe</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/importing-ethiopian-coffee-to-germany' className='text-amber-700 hover:underline'>Importing to Germany</Link></li>
              <li>• <Link href='/insights/importing-ethiopian-coffee-to-uk' className='text-amber-700 hover:underline'>Importing to UK (Post-Brexit)</Link></li>
              <li>• <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline'>EU Deforestation Regulation</Link></li>
            </ul>
            <h4 className='font-semibold mb-2 mt-4 text-sm'>Import Guides: Americas & Asia</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/how-to-import-ethiopian-coffee-to-usa' className='text-amber-700 hover:underline'>Importing to USA</Link></li>
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
        <h4 className='font-bold text-xl mb-3'>Source Premium Ethiopian Coffee Direct from Origin</h4>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Import and Export PLC</span> is an origin-connected Ethiopian exporter with three decades of sourcing heritage. We work with trusted cooperatives and washing stations across Yirgacheffe, Guji, Sidamo, and other Ethiopian coffee regions to deliver specialty-grade green coffee to Dutch importers and European roasters. Our team handles all Ethiopian export documentation, quality testing, and FOB Djibouti shipping coordination.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Our Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Request Samples</Link>
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

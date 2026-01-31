"use client"

import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { HiOutlineCalendarDays, HiOutlineDocumentText, HiOutlineTruck, HiOutlineCheckCircle, HiOutlineCube, HiOutlineLightBulb, HiOutlineGlobeAlt } from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function ImportEthiopianCoffeeToUSA({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        A complete guide to importing Ethiopian specialty coffee to the United States, covering regulations, documentation, logistics, and costs
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Ethiopian specialty coffee being prepared for export to the United States market, from ECX-certified green beans to US customs clearance.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Importing Ethiopian coffee to United States USA'
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
        <span className='ml-2'>Import Guide / Ethiopian Coffee Export / US Market</span>
      </div>
      
      <p className='my-4'>
        The United States is one of the world&apos;s largest coffee consumers, and Ethiopian specialty coffee has become increasingly popular among American roasters and consumers. Whether you&apos;re a specialty roaster, importer, or coffee entrepreneur, understanding how to import Ethiopian coffee to the US is essential for building a successful supply chain.
      </p>

      <p className='my-4'>
        This comprehensive guide walks through every step of the import process, from finding an <span className='font-bold'>Ethiopian coffee exporter</span> like <span className='font-bold'>Ethio Coffee</span> to clearing US customs and storing green beans in your warehouse.
      </p>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineCheckCircle className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Key Takeaway:</span> Importing Ethiopian coffee to the United States is straightforward when you understand FDA regulations, have the right documentation, and work with an experienced Ethiopian coffee export partner. No import licenses required for green coffee.</span>
        </p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Why Import Ethiopian Coffee to the United States?
      </h3>
      <p className='my-4'>
        Ethiopian coffee commands premium prices in the US specialty market for good reason:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Unique flavor profiles:</span> Floral Yirgacheffe, fruity Sidamo, wine-like Harrar origins that stand out on any menu</li>
        <li><span className='font-bold'>Consumer demand:</span> American consumers recognize and seek out Ethiopian single-origin offerings</li>
        <li><span className='font-bold'>Quality reputation:</span> Ethiopia&apos;s ECX grading system and specialty focus ensure consistent quality</li>
        <li><span className='font-bold'>Direct trade opportunities:</span> Build relationships with Ethiopian exporters for better margins and storytelling</li>
        <li><span className='font-bold'>Competitive pricing:</span> Ethiopian coffee offers excellent value compared to other African origins</li>
      </ul>

      <h3 className='text-2xl font-extrabold mt-8'>
        <HiOutlineDocumentText className='inline mr-2' />
        Step 1: Understanding US Coffee Import Regulations
      </h3>
      <p className='my-4'>
        The good news: importing green coffee to the United States is relatively straightforward compared to many other food products.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-3 flex items-center gap-2'><HiOutlineCheckCircle className='text-xl text-green-600' /> What You Need to Know</h4>
        <ul className='space-y-3 text-sm'>
          <li><span className='font-bold'>No FDA Pre-Approval Required:</span> Green (unroasted) coffee does not require FDA pre-market approval or prior notice for most shipments</li>
          <li><span className='font-bold'>No Import License:</span> You don&apos;t need a special license to import coffee anyone can do it</li>
          <li><span className='font-bold'>USDA/APHIS Clearance:</span> Coffee must be inspected for agricultural pests at port of entry</li>
          <li><span className='font-bold'>FDA Registration:</span> If you plan to roast/process the coffee, you may need FDA food facility registration</li>
          <li><span className='font-bold'>Customs Bond:</span> Required for clearing customs (can be single-entry or continuous)</li>
        </ul>
      </div>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-2'>Key US Agencies Involved</h4>
        <ul className='text-sm space-y-2 list-disc ml-5'>
          <li><span className='font-bold'><a href='https://www.cbp.gov/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>US Customs and Border Protection (CBP)</a>:</span> Handles customs clearance, duties, and tariffs</li>
          <li><span className='font-bold'><a href='https://www.aphis.usda.gov/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>USDA APHIS (Animal and Plant Health Inspection Service)</a>:</span> Inspects for plant pests and diseases</li>
          <li><span className='font-bold'><a href='https://www.fda.gov/food' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>FDA (Food and Drug Administration)</a>:</span> Oversees food safety regulations (minimal for green coffee)</li>
        </ul>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Step 2: Finding a Reliable Ethiopian Coffee Exporter
      </h3>
      <p className='my-4'>
        Your choice of Ethiopian coffee export partner is critical. Look for exporters who understand US market requirements and can provide complete documentation.
      </p>

      <div className='space-y-4 my-6'>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-2 flex items-center gap-2'><HiOutlineCheckCircle className='text-xl text-green-600' /> What to Look For in an Ethiopian Exporter</h4>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>ECX Registration:</span> Ensures legal compliance and quality standards</li>
            <li><span className='font-bold'>US Export Experience:</span> Familiarity with US documentation and port requirements</li>
            <li><span className='font-bold'>Sample Programs:</span> Ability to send cupping samples before container commitment</li>
            <li><span className='font-bold'>Quality Reports:</span> Detailed cupping notes, defect counts, and moisture analysis</li>
            <li><span className='font-bold'>Responsive Communication:</span> English-speaking contact who understands time zones</li>
            <li><span className='font-bold'>FOB Shipping:</span> Can handle logistics from Djibouti port</li>
          </ul>
        </div>
      </div>

      <p className='my-4'>
        At <span className='font-bold'>Ethio Coffee Export PLC</span>, we specialize in Ethiopian coffee export to the United States. We handle all origin-side logistics, provide complete documentation, and work with US importers to ensure smooth customs clearance.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Step 3: Required Documentation for US Import
      </h3>
      <p className='my-4'>
        Proper documentation is essential for smooth customs clearance. Your Ethiopian coffee exporter should provide these documents:
      </p>

      <div className='grid md:grid-cols-2 gap-5 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-3'>From Ethiopian Exporter</h4>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>Commercial Invoice:</span> Itemized list of goods, quantities, prices, FOB value</li>
            <li><span className='font-bold'>Packing List:</span> Details of bags, weights, container number</li>
            <li><span className='font-bold'>Bill of Lading (BOL):</span> Shipping document from freight forwarder</li>
            <li><span className='font-bold'>Phytosanitary Certificate:</span> Issued by Ethiopian Ministry of Agriculture confirming pest-free status</li>
            <li><span className='font-bold'>ICO Certificate of Origin:</span> International Coffee Organization certificate proving Ethiopian origin</li>
            <li><span className='font-bold'>ECX Quality Certificate:</span> Grading report (G1, G2, etc.) and quality specifications</li>
            <li><span className='font-bold'>Certificate of Origin:</span> Can be used for preferential duty rates under AGOA</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-3'>US-Side Requirements</h4>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>Customs Bond:</span> Single-entry or continuous bond (through customs broker)</li>
            <li><span className='font-bold'>Entry Summary (CBP Form 7501):</span> Filed by customs broker</li>
            <li><span className='font-bold'>USDA APHIS Clearance:</span> Agricultural inspection at port</li>
            <li><span className='font-bold'>Importer of Record Number:</span> Your business EIN or SSN</li>
            <li><span className='font-bold'>Power of Attorney:</span> If using a customs broker</li>
          </ul>
        </div>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'><span className='font-bold'>Pro Tip:</span> Work with an experienced customs broker for your first few shipments. They handle documentation, customs clearance, and ensure compliance with US regulations. Cost is typically $150-400 per container.</p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        <HiOutlineTruck className='inline mr-2' />
        Step 4: Shipping & Logistics from Ethiopia to USA
      </h3>
      <p className='my-4'>
        Most Ethiopian coffee exports to the US via container shipping from the Port of Djibouti.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-3 flex items-center gap-2'><HiOutlineCube className='text-xl' /> Shipping Options</h4>
        <div className='space-y-3 text-sm'>
          <div>
            <h5 className='font-bold'>20ft Container (FCL - Full Container Load)</h5>
            <p className='text-gray-600'>Capacity: Approximately 18,000-19,200 kg (300-320 bags of 60kg each)</p>
            <p className='mt-1'>Best for: Importers ordering 250+ bags, or multiple smaller buyers consolidating</p>
          </div>
          <div>
            <h5 className='font-bold'>40ft Container (FCL)</h5>
            <p className='text-gray-600'>Capacity: Approximately 21,600-24,000 kg (360-400 bags of 60kg each)</p>
            <p className='mt-1'>Best for: Larger roasters or importers with multiple SKUs</p>
          </div>
          <div>
            <h5 className='font-bold'>LCL (Less than Container Load)</h5>
            <p className='text-gray-600'>For smaller quantities (under 200 bags)</p>
            <p className='mt-1'>Higher per-kg cost but allows smaller test orders</p>
          </div>
        </div>
      </div>

      <div className='space-y-4 my-6'>
        <h4 className='font-bold text-lg'>Transit Times & Routes</h4>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>Djibouti to US East Coast (New York/New Jersey):</span> 25-35 days</li>
            <li><span className='font-bold'>Djibouti to US West Coast (Los Angeles/Oakland):</span> 30-40 days via Suez Canal</li>
            <li><span className='font-bold'>Djibouti to US Gulf Coast (Houston/New Orleans):</span> 30-40 days</li>
          </ul>
          <p className='text-sm mt-3 text-gray-600'>Add 1-2 weeks for inland transport from Ethiopia to Djibouti, customs clearance, and container stuffing.</p>
        </div>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Step 5: US Port of Entry & Customs Clearance
      </h3>
      <p className='my-4'>
        Once your container arrives at a US port, it goes through customs clearance before you can take possession.
      </p>

      <ol className='my-6 space-y-4 list-decimal ml-5 font-medium'>
        <li>
          <span className='font-bold'>Container Arrival & ISF Filing</span>
          <p className='font-normal text-sm mt-1'>Your customs broker files ISF (Importer Security Filing) 24 hours before vessel departure from origin port. Late filing incurs $5,000 penalty.</p>
        </li>
        <li>
          <span className='font-bold'>USDA APHIS Inspection</span>
          <p className='font-normal text-sm mt-1'>Green coffee is inspected for insects, pests, and plant diseases. Phytosanitary certificate from Ethiopia expedites this. Inspection fee: ~$200-500.</p>
        </li>
        <li>
          <span className='font-bold'>CBP Customs Review</span>
          <p className='font-normal text-sm mt-1'>Customs reviews your entry documents and assesses duties (if applicable). Random inspections may occur.</p>
        </li>
        <li>
          <span className='font-bold'>Duty Payment & Release</span>
          <p className='font-normal text-sm mt-1'>Green coffee from Ethiopia typically enters duty-free under AGOA (African Growth and Opportunity Act). Once cleared, container is released for pickup.</p>
        </li>
        <li>
          <span className='font-bold'>Drayage to Warehouse</span>
          <p className='font-normal text-sm mt-1'>Arrange trucking from port to your warehouse or storage facility. Unload and store in climate-controlled space.</p>
        </li>
      </ol>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-2 flex items-center gap-2'><HiOutlineLightBulb className='text-xl text-amber-500' /> AGOA Duty-Free Benefits</h4>
        <p className='text-sm mb-2'>Ethiopian coffee qualifies for duty-free entry under the African Growth and Opportunity Act (AGOA), which waives the standard 0% duty on green coffee (it&apos;s already duty-free under HTS code 0901.11).</p>
        <p className='text-sm'>However, AGOA provides additional benefits and ensures smooth processing. Make sure your Ethiopian exporter includes the Certificate of Origin for AGOA eligibility.</p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Step 6: Cost Breakdown for Importing Ethiopian Coffee
      </h3>
      <p className='my-4'>
        Understanding total landed costs helps you price your coffee accurately and maintain healthy margins.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3'>Estimated Cost Breakdown (20ft Container, ~300 bags)</h4>
        <table className='w-full text-sm'>
          <tbody className='space-y-1'>
            <tr className='border-b'>
              <td className='py-2 font-bold'>FOB Price (Ethiopia)</td>
              <td className='py-2 text-right'>$3.50 - $6.50/lb depending on grade/origin</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Ocean Freight (Djibouti to US)</td>
              <td className='py-2 text-right'>$3,500 - $6,000</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Customs Broker Fee</td>
              <td className='py-2 text-right'>$150 - $400</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>USDA APHIS Inspection</td>
              <td className='py-2 text-right'>$200 - $500</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>ISF Filing Fee</td>
              <td className='py-2 text-right'>$50 - $100</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Port Fees & Terminal Handling</td>
              <td className='py-2 text-right'>$300 - $800</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Drayage (Port to Warehouse)</td>
              <td className='py-2 text-right'>$300 - $1,200 depending on distance</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Customs Bond (if continuous)</td>
              <td className='py-2 text-right'>$400 - $600/year</td>
            </tr>
            <tr className='border-b border-dark'>
              <td className='py-2 font-bold'>Import Duties (Green Coffee)</td>
              <td className='py-2 text-right font-bold'>$0 (duty-free under AGOA)</td>
            </tr>
          </tbody>
        </table>
        <p className='text-sm mt-4 text-gray-600'><span className='font-bold'>Total Additional Costs:</span> Approximately $4,900 - $9,600 on top of FOB price, depending on port, distance, and service providers.</p>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'><span className='font-bold'>Landed Cost Example:</span> FOB price $4.50/lb × 18,000 kg (39,683 lbs) = $178,573 + $6,000 logistics = $184,573 / 39,683 lbs = <span className='font-bold'>$4.65/lb landed cost</span></p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Step 7: Storage & Quality Preservation
      </h3>
      <p className='my-4'>
        Once your Ethiopian coffee arrives in the US, proper storage is critical to maintaining quality.
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Climate Control:</span> Store at 60-70°F with 50-60% relative humidity</li>
        <li><span className='font-bold'>GrainPro Bags:</span> Use moisture-barrier bags to protect from humidity fluctuations</li>
        <li><span className='font-bold'>Pallet Storage:</span> Keep bags off ground, away from walls, with airflow between stacks</li>
        <li><span className='font-bold'>Pest Control:</span> Regular monitoring for insects, especially if storing near other grains</li>
        <li><span className='font-bold'>FIFO Rotation:</span> Use First In, First Out inventory management to maintain freshness</li>
      </ul>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-2'>📅 Green Coffee Shelf Life</h4>
        <p className='text-sm'>Ethiopian specialty coffee maintains optimal quality for 6-12 months when stored properly. After 12 months, expect some fading of floral/fruit notes. Plan inventory accordingly.</p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Step 8: Working with Ethio Coffee Export for US Imports
      </h3>
      <p className='my-4'>
        As an ECX-registered <span className='font-bold'>Ethiopian coffee exporter</span> with extensive US market experience, <span className='font-bold'>Ethio Coffee Export PLC</span> simplifies the import process for American roasters and importers.
      </p>

      <div className='grid md:grid-cols-2 gap-5 my-6'>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-2'>🇪🇹 What We Handle (Ethiopia Side)</h4>
          <ul className='text-sm space-y-1 list-disc ml-5'>
            <li>ECX coffee sourcing & quality verification</li>
            <li>Complete export documentation</li>
            <li>Phytosanitary & ICO certificates</li>
            <li>FOB Djibouti container stuffing</li>
            <li>Bill of Lading coordination</li>
            <li>Commercial invoice & packing lists</li>
          </ul>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-2 flex items-center gap-2'><HiOutlineGlobeAlt className='text-xl' /> What You Handle (US Side)</h4>
          <ul className='text-sm space-y-1 list-disc ml-5'>
            <li>Customs broker relationship</li>
            <li>Ocean freight booking (or we can recommend)</li>
            <li>US port customs clearance</li>
            <li>Warehouse storage</li>
            <li>Roasting & distribution</li>
          </ul>
        </div>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Sample Import Process: Small Roaster Example
      </h3>
      <p className='my-4'>
        Here&apos;s a real-world example of a US specialty roaster importing 50 bags (3,000 kg) of Ethiopian coffee:
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200 space-y-3 text-sm'>
        <div>
          <h5 className='font-bold'>Week 1-2: Sourcing & Samples</h5>
          <p>Roaster contacts Ethio Coffee, requests cupping samples of Yirgacheffe G1 washed. Samples arrive via DHL in 5-7 days. Roaster cups and approves.</p>
        </div>
        <div>
          <h5 className='font-bold'>Week 3: Contract & Payment</h5>
          <p>Purchase order issued for 50 bags at $5.20/lb FOB. 30% deposit paid via wire transfer. Remaining 70% due upon Bill of Lading.</p>
        </div>
        <div>
          <h5 className='font-bold'>Week 4-5: Container Consolidation</h5>
          <p>Ethio Coffee consolidates roaster&apos;s 50 bags with other buyers&apos; orders to fill a 20ft container (300 bags total). LCL shared container.</p>
        </div>
        <div>
          <h5 className='font-bold'>Week 6: Shipping & Documentation</h5>
          <p>Container ships from Djibouti. Bill of Lading, phytosanitary, ICO cert, and invoice sent to roaster. Final payment made. ISF filed by customs broker.</p>
        </div>
        <div>
          <h5 className='font-bold'>Week 10: US Port Arrival</h5>
          <p>Container arrives Oakland port. USDA inspection passed. Customs cleared within 2 days.</p>
        </div>
        <div>
          <h5 className='font-bold'>Week 11: Delivery & Roasting</h5>
          <p>Drayage delivers 50 bags to roaster&apos;s warehouse. Roaster begins sample roasting and production.</p>
        </div>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Common Mistakes to Avoid
      </h3>
      
      <div className='space-y-4 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2'>❌ Mistake: "I'll figure out logistics after ordering"</h4>
          <p className='text-sm'><span className='font-bold'>Solution:</span> Arrange customs broker, freight forwarder, and warehouse BEFORE placing your order. Lead times require advance planning.</p>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2'>❌ Mistake: "I don't need a customs broker"</h4>
          <p className='text-sm'><span className='font-bold'>Solution:</span> Unless you have customs clearance experience, use a broker. The cost is minimal compared to potential delays or penalties from incorrect filing.</p>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2'>❌ Mistake: "I'll store green coffee in my garage"</h4>
          <p className='text-sm'><span className='font-bold'>Solution:</span> Green coffee is hygroscopic and sensitive to humidity/temperature. Invest in proper storage or use a third-party coffee warehouse.</p>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2'>❌ Mistake: "I'll order one bag to test"</h4>
          <p className='text-sm'><span className='font-bold'>Solution:</span> Container shipping makes single-bag imports prohibitively expensive. Order samples first, then commit to at least 50-100 bags or join an LCL consolidation.</p>
        </div>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Timeline Summary: Ethiopia to US Warehouse
      </h3>
      <p className='my-4'>
        Plan for approximately <span className='font-bold'>10-14 weeks</span> from initial contact to coffee in your US warehouse:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Weeks 1-2:</span> Sourcing, samples, cupping evaluation</li>
        <li><span className='font-bold'>Week 3:</span> Contract negotiation and deposit payment</li>
        <li><span className='font-bold'>Weeks 4-5:</span> Coffee preparation, container stuffing in Ethiopia</li>
        <li><span className='font-bold'>Week 6:</span> Departure from Djibouti port</li>
        <li><span className='font-bold'>Weeks 7-10:</span> Ocean transit (25-40 days depending on route)</li>
        <li><span className='font-bold'>Week 11:</span> US port arrival, customs clearance, USDA inspection</li>
        <li><span className='font-bold'>Week 12:</span> Drayage to your warehouse</li>
      </ul>

      <h3 className='text-2xl font-extrabold mt-8'>
        Is Importing Ethiopian Coffee to the USA Right for You?
      </h3>
      <p className='my-4'>
        Direct import makes sense if you:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li>Roast <span className='font-bold'>1,000+ lbs/month</span> (enough to justify container orders)</li>
        <li>Want <span className='font-bold'>better margins</span> than buying from US-based importers</li>
        <li>Seek <span className='font-bold'>direct relationships</span> with origin for storytelling and quality control</li>
        <li>Can manage <span className='font-bold'>10-14 week lead times</span> and inventory planning</li>
        <li>Have <span className='font-bold'>storage capacity</span> for 50-300+ bags</li>
      </ul>

      <p className='my-4'>
        If you&apos;re a smaller roaster (under 500 lbs/month), consider buying from US-based importers initially, then graduate to direct imports as your volume grows.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Key Resources for US Coffee Importers
      </h3>
      
      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'><a href='https://www.fda.gov/food' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>FDA Food Safety</a>:</span> Food import regulations and guidance</li>
        <li><span className='font-bold'><a href='https://www.aphis.usda.gov/aphis/ourfocus/planthealth' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>USDA APHIS</a>:</span> Plant health import requirements</li>
        <li><span className='font-bold'><a href='https://www.cbp.gov/trade/basic-import-export' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>CBP Import Information</a>:</span> Customs procedures, AGOA benefits, HTS code lookup</li>
        <li><span className='font-bold'><a href='https://hts.usitc.gov/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>US Harmonized Tariff Schedule</a>:</span> Search HTS code 0901.11 for coffee duty rates</li>
        <li><span className='font-bold'><a href='https://agoa.info/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>AGOA Information</a>:</span> African Growth and Opportunity Act duty-free benefits</li>
      </ul>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Ready to Import Ethiopian Coffee to the United States?</h4>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Export PLC</span> specializes in Ethiopian coffee export to the US market. We provide premium Yirgacheffe, Sidamo, Guji, and other origins with complete documentation, competitive FOB pricing, and the responsive service American importers expect.
        </p>
        <p className='my-2'>
          Whether you&apos;re importing your first container or looking for a more reliable Ethiopian partner, we make the process transparent and hassle-free.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/contact-us' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>
            Contact Us for US Import
          </Link>
          <Link href='/offerings' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            View Coffee Offerings
          </Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            How to Order
          </Link>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Guide:</span> This comprehensive resource covers the complete process of importing Ethiopian specialty coffee to the United States, including regulations, documentation, shipping logistics, customs clearance, and cost breakdowns for roasters and coffee importers.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/insights/ecx-and-ethiopian-coffee-export' className='underline'>Understanding ECX</Link> · <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='underline'>Sourcing Guide</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  );
}

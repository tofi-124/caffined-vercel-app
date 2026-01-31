"use client"

import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { HiOutlineCalendarDays, HiOutlineGlobeAlt, HiOutlineScale, HiOutlineCurrencyDollar, HiOutlineShieldCheck, HiOutlineDocumentText, HiOutlineTruck, HiOutlineCube, HiOutlineBeaker, HiOutlineExclamationTriangle } from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function ImportingEthiopianCoffeeToCanada({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Your practical roadmap to bringing premium Ethiopian green coffee into Canada regulations, paperwork, costs, and real-world advice
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Insights from Ethiopian coffee sourcing and the specialty coffee industry.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Importing Ethiopian coffee to Canada - CFIA regulations CBSA customs'
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
        <span className='ml-2'>Import Guide / Canadian Market / Ethiopian Coffee Export</span>
      </div>
      
      <p className='my-4'>
        Canada&apos;s specialty coffee scene has exploded over the past decade. From Vancouver&apos;s third-wave pioneers to Toronto&apos;s cafe culture boom, Canadian roasters and consumers are increasingly seeking out origin-specific coffees with stories, transparency, and exceptional quality. Ethiopian coffee with its unmistakable florals, bright fruit, and complex cup profiles fits that demand perfectly.
      </p>

      <p className='my-4'>
        But if you&apos;re a Canadian roaster or importer wondering how to actually get Ethiopian green coffee across the border, the process might seem opaque. Good news: it&apos;s more straightforward than you think. This guide walks through everything from finding a reliable <span className='font-bold'>Ethiopian coffee exporter</span> like <span className='font-bold'>Ethio Coffee</span> to clearing CBSA customs and storing your beans in a Vancouver or Montreal warehouse.
      </p>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineGlobeAlt className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Bottom Line:</span> Importing Ethiopian coffee to Canada requires CFIA compliance, proper documentation, and CBSA clearance but no import licenses for green coffee. Work with an experienced Ethiopian exporter and a licensed customs broker, and the process runs smoothly.</span>
        </p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Why Canadian Roasters Are Sourcing Ethiopian Coffee
      </h3>
      <p className='my-4'>
        Ethiopian coffee isn&apos;t just trendy it&apos;s foundational to specialty coffee culture. Here&apos;s why Canadian roasters are investing in direct Ethiopian imports:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Flavor differentiation:</span> Yirgacheffe&apos;s jasmine tea notes, Sidamo&apos;s berry sweetness, Guji&apos;s stone fruit complexity Ethiopian origins stand out on any cafe menu</li>
        <li><span className='font-bold'>Consumer recognition:</span> Canadian coffee drinkers know and seek out Ethiopian single-origins</li>
        <li><span className='font-bold'>Margin improvement:</span> Direct import cuts out US-based middlemen, improving profitability</li>
        <li><span className='font-bold'>Origin storytelling:</span> Build relationships with ECX-registered exporters for transparent supply chains</li>
        <li><span className='font-bold'>Quality consistency:</span> Ethiopia&apos;s ECX grading ensures reliable G1/G2 specialty grades</li>
      </ul>

      <h3 className='text-2xl font-extrabold mt-8'>
        Canadian Import Regulations: What You Need to Know
      </h3>
      <p className='my-4'>
        Canada&apos;s coffee import regulations are managed primarily by two federal agencies: <span className='font-bold'><a href='https://inspection.canada.ca/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>CFIA (Canadian Food Inspection Agency)</a></span> and <span className='font-bold'><a href='https://www.cbsa-asfc.gc.ca/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>CBSA (Canada Border Services Agency)</a></span>.
      </p>

      <div className='space-y-6 my-8'>
        <div className='bg-amber-50 p-6 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-xl mb-3 text-dark'>CFIA Requirements for Green Coffee</h4>
          <p className='text-sm mb-3'>The Canadian Food Inspection Agency oversees food safety and import compliance:</p>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>Safe Food for Canadians Regulations (SFCR):</span> Green coffee is regulated as a food product</li>
            <li><span className='font-bold'>No Import License Required:</span> Green (unroasted) coffee does NOT require a CFIA import license</li>
            <li><span className='font-bold'>Phytosanitary Certificate:</span> Required from Ethiopian Ministry of Agriculture (your exporter provides this)</li>
            <li><span className='font-bold'>Preventive Control Plan (PCP):</span> If you roast/process the coffee in Canada, you&apos;ll need a PCP and SFCR license for your facility</li>
            <li><span className='font-bold'>Traceability:</span> Must maintain records of origin, supplier, and lot information</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-xl mb-3 text-dark'>CBSA Customs Requirements</h4>
          <p className='text-sm mb-3'>Canada Border Services Agency handles customs clearance and duty assessment:</p>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>Business Number (BN):</span> You need a Canadian business number to import</li>
            <li><span className='font-bold'>Import Declaration (B3):</span> Filed electronically by your customs broker</li>
            <li><span className='font-bold'>Tariff Classification:</span> Green coffee falls under HS code 0901.11.20 or 0901.11.90</li>
            <li><span className='font-bold'>Customs Bond:</span> May be required depending on import volume and frequency</li>
            <li><span className='font-bold'>Commercial Invoice & Packing List:</span> From your Ethiopian exporter</li>
          </ul>
        </div>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'><span className='font-bold'>Important:</span> If you&apos;re importing for resale or processing, you must be registered under SFCR as a food business. If you&apos;re only importing green coffee for your own roasting operation, you need a Safe Food for Canadians License tied to your roasting facility.</p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        <HiOutlineScale className='inline mr-2' />
        Duties & Taxes: What You&apos;ll Actually Pay
      </h3>
      <p className='my-4'>
        Unlike the US (which has duty-free green coffee), Canada assesses duties and taxes on coffee imports. Here&apos;s the breakdown:
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3'>Duty Rates on Ethiopian Coffee (2026)</h4>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='border-b-2 border-gray-300'>
              <th className='text-left py-2 pr-4'>HS Code</th>
              <th className='text-left py-2 pr-4'>Description</th>
              <th className='text-right py-2'>MFN Duty Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='py-2 font-mono'>0901.11.20</td>
              <td className='py-2'>Coffee, not roasted, not decaffeinated (within quota)</td>
              <td className='py-2 text-right font-bold'>Free</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-mono'>0901.11.90</td>
              <td className='py-2'>Coffee, not roasted, not decaffeinated (over quota)</td>
              <td className='py-2 text-right'>$0.0075/kg</td>
            </tr>
          </tbody>
        </table>
        <p className='text-sm mt-4 text-gray-600'><span className='font-bold'>Practical Impact:</span> Most specialty coffee imports fall under quota and enter duty-free. Over-quota rates are minimal (~$0.0075/kg ≈ $0.003/lb).</p>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-3'>GST/HST on Coffee Imports</h4>
        <p className='text-sm mb-3'>You&apos;ll pay federal/provincial sales tax at the border:</p>
        <ul className='text-sm space-y-1 list-disc ml-5'>
          <li><span className='font-bold'>GST (Federal):</span> 5% on customs value + duty</li>
          <li><span className='font-bold'>HST:</span> Combined federal/provincial rates in participating provinces (e.g., 13% in Ontario, 15% in Nova Scotia)</li>
          <li><span className='font-bold'>PST:</span> Separate provincial tax in BC (7%), Saskatchewan (6%), Manitoba (7%), Quebec (9.975%)</li>
        </ul>
        <p className='text-sm mt-3'><span className='font-bold'>Good news:</span> If you&apos;re a registered GST/HST business, you can claim Input Tax Credits (ITCs) to recover these taxes on your next filing.</p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Finding Your Ethiopian Coffee Export Partner
      </h3>
      <p className='my-4'>
        The foundation of a successful import operation is a reliable exporter. Look for these qualities:
      </p>

      <div className='grid md:grid-cols-2 gap-5 my-6'>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-2 flex items-center gap-2'><HiOutlineShieldCheck className='text-xl' /> Essential Exporter Qualities</h4>
          <ul className='text-sm space-y-1 list-disc ml-5'>
            <li>ECX registration & export license</li>
            <li>Experience with Canadian imports</li>
            <li>English-speaking contact person</li>
            <li>Sample programs (DHL/FedEx to Canada)</li>
            <li>Transparent cupping scores & defect counts</li>
            <li>FOB Djibouti shipping capability</li>
          </ul>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-2 flex items-center gap-2'><HiOutlineDocumentText className='text-xl' /> Documentation They Must Provide</h4>
          <ul className='text-sm space-y-1 list-disc ml-5'>
            <li>Commercial invoice (FOB pricing)</li>
            <li>Packing list (bag count, weights)</li>
            <li>Bill of Lading (ocean freight)</li>
            <li>Phytosanitary certificate</li>
            <li>ICO Certificate of Origin</li>
            <li>ECX quality/grading reports</li>
          </ul>
        </div>
      </div>

      <p className='my-4'>
        <span className='font-bold'>Ethio Coffee Export PLC</span> works regularly with Canadian importers. We understand CFIA requirements, provide complete documentation, and coordinate shipping to Vancouver, Montreal, and Toronto ports.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Shipping Ethiopian Coffee to Canada: Routes & Timing
      </h3>
      <p className='my-4'>
        Ethiopian coffee ships from the Port of Djibouti via container. Transit times and costs vary by destination:
      </p>

      <div className='space-y-4 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2 flex items-center gap-2'><HiOutlineTruck className='text-xl' /> Main Canadian Port Options</h4>
          <ul className='text-sm space-y-3'>
            <li>
              <span className='font-bold'>Port of Vancouver (West Coast):</span>
              <p className='text-gray-600 mt-1'>Transit: 35-45 days from Djibouti via Suez Canal → Singapore → Transpacific</p>
              <p className='text-gray-600'>Best for: BC, Alberta, Prairie roasters</p>
            </li>
            <li>
              <span className='font-bold'>Port of Montreal (East Coast):</span>
              <p className='text-gray-600 mt-1'>Transit: 30-40 days from Djibouti via Suez Canal → Mediterranean → Atlantic</p>
              <p className='text-gray-600'>Best for: Quebec, Ontario, Maritime roasters</p>
            </li>
            <li>
              <span className='font-bold'>Port of Halifax (Atlantic):</span>
              <p className='text-gray-600 mt-1'>Transit: 35-45 days, similar routing to Montreal</p>
              <p className='text-gray-600'>Best for: Maritime provinces, sometimes Ontario</p>
            </li>
          </ul>
        </div>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-3 flex items-center gap-2'><HiOutlineCube className='text-xl' /> Container Options & Capacity</h4>
        <div className='space-y-2 text-sm'>
          <div>
            <p className='font-bold'>20ft Container (FCL):</p>
            <p className='text-gray-600'>~300 bags (18,000 kg) · Typical cost CAD $5,000-$8,000 from Djibouti</p>
          </div>
          <div>
            <p className='font-bold'>40ft Container (FCL):</p>
            <p className='text-gray-600'>~360-400 bags (21,600-24,000 kg) · Typical cost CAD $6,500-$10,000</p>
          </div>
          <div>
            <p className='font-bold'>LCL (Consolidated):</p>
            <p className='text-gray-600'>For smaller orders (50-200 bags) · Higher per-kg rate but lower minimum commitment</p>
          </div>
        </div>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        The Canadian Customs Clearance Process
      </h3>
      <p className='my-4'>
        Once your container arrives at a Canadian port, here&apos;s what happens:
      </p>

      <ol className='my-6 space-y-4 list-decimal ml-5 font-medium'>
        <li>
          <span className='font-bold'>Pre-Arrival: ACI/eManifest Filing</span>
          <p className='font-normal text-sm mt-1'>Your freight forwarder or customs broker files Advance Commercial Information (ACI) with CBSA 24-48 hours before arrival. Late filing = penalties.</p>
        </li>
        <li>
          <span className='font-bold'>CFIA Document Review</span>
          <p className='font-normal text-sm mt-1'>CFIA reviews phytosanitary certificate and import documentation. Green coffee may be inspected for pests/contamination (usually quick for coffee).</p>
        </li>
        <li>
          <span className='font-bold'>CBSA Customs Declaration (B3 Form)</span>
          <p className='font-normal text-sm mt-1'>Your customs broker submits B3 import declaration electronically, declaring value, origin, HS code, and duty/tax liability.</p>
        </li>
        <li>
          <span className='font-bold'>Duty & Tax Payment</span>
          <p className='font-normal text-sm mt-1'>Duties (if applicable) + GST/HST/PST are calculated and paid. Payment clears within 1-3 business days.</p>
        </li>
        <li>
          <span className='font-bold'>Release & Drayage</span>
          <p className='font-normal text-sm mt-1'>Once cleared, arrange trucking (drayage) from port to your warehouse. Montreal to Toronto = ~$800-1,500. Vancouver local = $400-800.</p>
        </li>
      </ol>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'><span className='font-bold'>Pro Tip:</span> Use a licensed customs broker for your first few shipments. They handle B3 filing, CBSA/CFIA coordination, and payment. Cost: typically CAD $200-$500 per shipment. Worth every dollar for peace of mind.</p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        <HiOutlineCurrencyDollar className='inline mr-2' />
        Cost Breakdown: Landed Price in Canada
      </h3>
      <p className='my-4'>
        Here&apos;s a real-world example of total landed costs for a 20ft container arriving in Montreal:
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3'>Sample Cost Calculation (20ft Container, 300 bags, Montreal)</h4>
        <table className='w-full text-sm'>
          <tbody>
            <tr className='border-b'>
              <td className='py-2 font-bold'>FOB Price (Ethiopia)</td>
              <td className='py-2 text-right'>$4.80 CAD/lb × 39,683 lbs = CAD $190,478</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Ocean Freight (Djibouti → Montreal)</td>
              <td className='py-2 text-right'>CAD $6,500</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Customs Broker Fee</td>
              <td className='py-2 text-right'>CAD $350</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>CFIA Inspection (if required)</td>
              <td className='py-2 text-right'>CAD $250</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Port Fees & Terminal Handling</td>
              <td className='py-2 text-right'>CAD $600</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Import Duty (quota, duty-free)</td>
              <td className='py-2 text-right'>CAD $0</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>GST (5% on CAD $197,828)</td>
              <td className='py-2 text-right'>CAD $9,891</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Drayage (Montreal port → warehouse)</td>
              <td className='py-2 text-right'>CAD $600</td>
            </tr>
            <tr className='border-b border-dark'>
              <td className='py-2 font-bold text-lg'>Total Landed Cost</td>
              <td className='py-2 text-right font-bold text-lg'>CAD $208,669</td>
            </tr>
            <tr>
              <td className='py-2 font-bold'>Cost Per Pound (Landed)</td>
              <td className='py-2 text-right font-bold'>CAD $5.26/lb</td>
            </tr>
          </tbody>
        </table>
        <p className='text-sm mt-4 text-gray-600'><span className='font-bold'>Note:</span> GST is recoverable via Input Tax Credits if you&apos;re a registered business. Effective landed cost after ITC = ~CAD $5.01/lb.</p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Warehouse Storage & Quality Maintenance
      </h3>
      <p className='my-4'>
        Once your coffee clears customs, proper storage protects your investment:
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-3 flex items-center gap-2'><HiOutlineBeaker className='text-xl' /> Storage Best Practices</h4>
        <ul className='text-sm space-y-2 list-disc ml-5'>
          <li><span className='font-bold'>Temperature:</span> 15-20°C (59-68°F) ideal for Canadian climate</li>
          <li><span className='font-bold'>Humidity:</span> 50-65% RH critical in humid summer months (Ontario, Quebec, BC coast)</li>
          <li><span className='font-bold'>GrainPro/Ecotact bags:</span> Moisture-barrier liners protect against humidity fluctuations</li>
          <li><span className='font-bold'>Pallet storage:</span> Off ground, away from walls, proper airflow between stacks</li>
          <li><span className='font-bold'>Pest control:</span> Regular monitoring, especially in shared warehouse spaces</li>
          <li><span className='font-bold'>FIFO rotation:</span> Use older lots first to maintain peak freshness (6-12 month window)</li>
        </ul>
      </div>

      <p className='my-4'>
        Many Canadian roasters use third-party coffee warehouses (Toronto, Montreal, Vancouver) that specialize in green bean storage. Cost: typically $1-3 per bag per month.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Working with Ethio Coffee for Canadian Imports
      </h3>
      <p className='my-4'>
        As an ECX-registered <span className='font-bold'>Ethiopian coffee exporter</span> with experience shipping to Canada, we simplify the process for Canadian roasters.
      </p>

      <div className='grid md:grid-cols-2 gap-5 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-3'>What Ethio Coffee Handles</h4>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li>ECX sourcing & quality verification</li>
            <li>All Ethiopian export documentation</li>
            <li>Phytosanitary certificates (CFIA-compliant)</li>
            <li>ICO certificates & origin documentation</li>
            <li>FOB Djibouti container coordination</li>
            <li>Bill of Lading & commercial invoices</li>
            <li>Sample shipping via courier to Canada</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-3'>What You Arrange (Canada Side)</h4>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li>Canadian Business Number (BN)</li>
            <li>SFCR license (if roasting/processing)</li>
            <li>Customs broker relationship</li>
            <li>Ocean freight booking (or we recommend)</li>
            <li>CBSA/CFIA clearance coordination</li>
            <li>Warehouse/roastery storage</li>
          </ul>
        </div>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Real-World Timeline: Ethiopia to Canadian Warehouse
      </h3>
      <p className='my-4'>
        Expect <span className='font-bold'>11-15 weeks</span> total lead time from first contact to beans in your facility:
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200 space-y-3 text-sm'>
        <div>
          <h5 className='font-bold'>Weeks 1-2: Discovery & Sampling</h5>
          <p>Contact Ethio Coffee, request samples. Courier delivery to Canada in 5-8 days. Cup, evaluate, decide on origins.</p>
        </div>
        <div>
          <h5 className='font-bold'>Week 3: Contract & Payment Terms</h5>
          <p>Purchase order finalized. Typical terms: 30% deposit, 70% on Bill of Lading. Wire transfer via international banking (CAD → USD conversion).</p>
        </div>
        <div>
          <h5 className='font-bold'>Weeks 4-6: Container Prep & Export</h5>
          <p>Coffee sourced, quality checked, bagged, and stuffed into container at Djibouti. Export documentation prepared.</p>
        </div>
        <div>
          <h5 className='font-bold'>Week 7: Departure from Djibouti</h5>
          <p>Bill of Lading issued. Final payment made. ACI filed for Canadian customs pre-clearance.</p>
        </div>
        <div>
          <h5 className='font-bold'>Weeks 8-12: Ocean Transit</h5>
          <p>35-45 days depending on port (Vancouver longer than Montreal typically).</p>
        </div>
        <div>
          <h5 className='font-bold'>Week 13: Port Arrival & Customs</h5>
          <p>CFIA/CBSA review, duty/tax payment, release. Typically 2-5 days clearance time.</p>
        </div>
        <div>
          <h5 className='font-bold'>Week 14-15: Delivery to Your Facility</h5>
          <p>Drayage arranged. Coffee delivered, unloaded, stored. You&apos;re ready to roast.</p>
        </div>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Common Pitfalls Canadian Importers Face
      </h3>
      
      <div className='space-y-4 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2 flex items-center gap-2'><HiOutlineExclamationTriangle className='text-xl text-amber-600' /> Pitfall: Forgetting About SFCR Licensing</h4>
          <p className='text-sm'><span className='font-bold'>Fix:</span> If you roast coffee in Canada, you need a Safe Food for Canadians license. Apply through CFIA&apos;s My CFIA portal well before your first import. Processing time: 4-8 weeks.</p>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2 flex items-center gap-2'><HiOutlineExclamationTriangle className='text-xl text-amber-600' /> Pitfall: Underestimating GST/HST Cash Flow Impact</h4>
          <p className='text-sm'><span className='font-bold'>Fix:</span> You pay 5-15% tax at the border upfront. Plan cash flow accordingly. You&apos;ll recover it via ITCs, but there&apos;s a timing gap. Budget for it.</p>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2 flex items-center gap-2'><HiOutlineExclamationTriangle className='text-xl text-amber-600' /> Pitfall: Skipping a Customs Broker to Save Money</h4>
          <p className='text-sm'><span className='font-bold'>Fix:</span> Don&apos;t. A broker costs $200-500 but saves you from costly filing errors, CBSA penalties, and shipment delays. It&apos;s cheap insurance.</p>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2 flex items-center gap-2'><HiOutlineExclamationTriangle className='text-xl text-amber-600' /> Pitfall: Poor Storage in Canadian Winters/Summers</h4>
          <p className='text-sm'><span className='font-bold'>Fix:</span> Canada&apos;s climate extremes (dry winters, humid summers) stress green coffee. Use climate-controlled storage or third-party coffee warehouses. Don&apos;t cut corners here.</p>
        </div>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Is Direct Ethiopian Import Right for Your Operation?
      </h3>
      <p className='my-4'>
        Direct import makes sense when:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li>You roast <span className='font-bold'>500+ kg/month</span> (enough volume to justify container logistics)</li>
        <li>You want <span className='font-bold'>better margins</span> than buying from Canadian importers/distributors</li>
        <li>You value <span className='font-bold'>origin relationships</span> for transparency and storytelling</li>
        <li>You can manage <span className='font-bold'>11-15 week lead times</span> and plan inventory cycles accordingly</li>
        <li>You have <span className='font-bold'>storage capacity</span> for 50-300+ bags with proper climate control</li>
      </ul>

      <p className='my-4'>
        Smaller roasters (&lt;200 kg/month) might start by buying from Canadian importers, then transition to direct import as volume grows. LCL consolidation is another option for mid-sized operations (50-100 bags).
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Regional Considerations: Vancouver vs. Montreal vs. Toronto
      </h3>
      
      <div className='grid md:grid-cols-3 gap-4 my-6'>
        <div className='bg-amber-50 p-4 rounded-lg border border-amber-200'>
          <h4 className='font-bold mb-2'>Vancouver (West Coast)</h4>
          <ul className='text-sm space-y-1 list-disc ml-5'>
            <li>Longer ocean transit (40-45 days)</li>
            <li>Higher freight costs typically</li>
            <li>Best for BC/Alberta roasters</li>
            <li>Excellent coffee culture market</li>
          </ul>
        </div>

        <div className='bg-amber-50 p-4 rounded-lg border border-amber-200'>
          <h4 className='font-bold mb-2'>Montreal (East Coast)</h4>
          <ul className='text-sm space-y-1 list-disc ml-5'>
            <li>Shorter ocean transit (30-35 days)</li>
            <li>Good access to Quebec + Ontario</li>
            <li>French/English bilingual requirements</li>
            <li>Growing specialty coffee scene</li>
          </ul>
        </div>

        <div className='bg-amber-50 p-4 rounded-lg border border-amber-200'>
          <h4 className='font-bold mb-2'>Toronto (via Montreal)</h4>
          <ul className='text-sm space-y-1 list-disc ml-5'>
            <li>No direct port (use Montreal + dray)</li>
            <li>Largest Canadian coffee market</li>
            <li>Adds CAD $800-1,500 trucking cost</li>
            <li>Mature specialty coffee ecosystem</li>
          </ul>
        </div>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Resources & Next Steps
      </h3>
      <p className='my-4'>
        Key Canadian government resources for coffee importers:
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Key Resources for Canadian Coffee Importers
      </h3>
      <p className='my-4'>
        Key Canadian government resources for coffee importers:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'><a href='https://inspection.canada.ca/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>CFIA Import Portal</a>:</span> SFCR registration, import requirements</li>
        <li><span className='font-bold'><a href='https://www.cbsa-asfc.gc.ca/trade-commerce/menu-eng.html' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>CBSA Assessment & Revenue Management</a>:</span> Tariff classification, duty rates</li>
        <li><span className='font-bold'><a href='https://www.cbsa-asfc.gc.ca/trade-commerce/tariff-tarif/menu-eng.html' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>Canadian Tariff Finder</a>:</span> Search HS code 0901.11 for current duty rates</li>
        <li><span className='font-bold'><a href='https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses.html' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>CRA GST/HST Information</a>:</span> Input Tax Credit recovery guidance</li>
        <li><span className='font-bold'><a href='https://ised-isde.canada.ca/site/corporations-canada/en' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>ISED Business Registration</a>:</span> Get your Business Number (BN) for importing</li>
      </ul>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Ready to Import Ethiopian Coffee to Canada?</h4>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Export PLC</span> has successfully shipped hundreds of containers to Canadian roasters across Vancouver, Toronto, Montreal, and beyond. We provide premium Ethiopian specialty coffee (Yirgacheffe, Sidamo, Guji) with CFIA-compliant documentation, ECX quality reports, and the responsive communication Canadian buyers expect.
        </p>
        <p className='my-2'>
          Whether it&apos;s your first import or you&apos;re looking for a more reliable Ethiopian partner, we make the process straightforward and transparent.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/contact-us' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>
            Contact Us for Canadian Import
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
          <span className='font-bold'>About This Guide:</span> This practical resource covers importing Ethiopian specialty coffee to Canada CFIA regulations, CBSA customs requirements, duty rates, GST/HST, shipping logistics, cost breakdowns, and working with Ethio Coffee Export for Canadian market entry.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/insights/ecx-and-ethiopian-coffee-export' className='underline'>Understanding ECX</Link> · <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='underline'>Sourcing Guide</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  );
}

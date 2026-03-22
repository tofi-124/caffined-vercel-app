import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineGlobeAlt,
  HiOutlineScale,
  HiOutlineCurrencyDollar,
  HiOutlineShieldCheck,
  HiOutlineDocumentCheck,
  HiOutlineTruck,
  HiOutlineBeaker,
  HiOutlineExclamationTriangle,
  HiOutlineCheckCircle,
  HiOutlineClock,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function ImportingEthiopianCoffeeToCanada({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      {/* H1 TITLE */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>{title}</h1>

      {/* SUBTITLE */}
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Everything Canadian roasters and importers need: CFIA, CBSA, CARM, duties, shipping routes, costs, and the step-by-step process from Addis Ababa to your warehouse
      </h2>

      {/* HERO IMAGE */}
      <figure>
        <figcaption className='font-inconsolata my-2 text-sm text-gray-500'>
          Ethiopian green coffee prepared for export to Canadian roasters. Understanding CFIA, CBSA, and CARM requirements is the first step to a smooth import. Photo: Ethio Coffee Import and Export PLC.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian green coffee beans being prepared for export to Canada, representing the import process for Canadian roasters and importers'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      {/* CATEGORY */}
      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Import Guide / Canadian Market / Ethiopian Coffee Export / Trade Logistics</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-2 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0' /> Key Takeaway
        </p>
        <p className='text-sm leading-relaxed'>
          Importing Ethiopian green coffee to Canada requires CFIA food safety compliance, CBSA customs clearance, and registration in the CARM portal (mandatory since October 2024). Green coffee enters duty-free under HS 0901.11 for most volumes, though GST/HST applies at the border and is recoverable via Input Tax Credits. Working with an experienced Ethiopian coffee exporter who provides CFIA-compliant documentation, combined with a licensed Canadian customs broker, makes the process straightforward for roasters and importers at any scale.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#why-canadian-roasters' className='text-amber-700 hover:underline'>1. Why Canadian Roasters Source Ethiopian Coffee</a></li>
          <li><a href='#import-regulations' className='text-amber-700 hover:underline'>2. Canadian Import Regulations for Green Coffee</a></li>
          <li><a href='#duties-taxes' className='text-amber-700 hover:underline'>3. Duties, Taxes, and Financial Planning</a></li>
          <li><a href='#export-partner' className='text-amber-700 hover:underline'>4. Finding an Ethiopian Export Partner</a></li>
          <li><a href='#shipping-routes' className='text-amber-700 hover:underline'>5. Shipping Routes, Containers, and Insurance</a></li>
          <li><a href='#customs-clearance' className='text-amber-700 hover:underline'>6. Customs Clearance: Step by Step</a></li>
          <li><a href='#landed-cost' className='text-amber-700 hover:underline'>7. Landed Cost Breakdown</a></li>
          <li><a href='#storage' className='text-amber-700 hover:underline'>8. Storage and Quality Maintenance</a></li>
          <li><a href='#organic-imports' className='text-amber-700 hover:underline'>9. Organic Ethiopian Coffee Imports</a></li>
          <li><a href='#timeline' className='text-amber-700 hover:underline'>10. Timeline: Ethiopia to Canadian Warehouse</a></li>
          <li><a href='#pitfalls' className='text-amber-700 hover:underline'>11. Common Pitfalls and How to Avoid Them</a></li>
          <li><a href='#direct-import' className='text-amber-700 hover:underline'>12. Is Direct Import Right for Your Operation?</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* SCOPE NOTE */}
      <div className='bg-gray-50 p-4 rounded-lg border border-gray-200 my-6 text-sm'>
        <p><span className='font-semibold'>Scope note:</span> This guide covers the Canadian import side: federal regulations, customs clearance, CARM registration, duties, taxes, shipping logistics, and costs. For how Ethiopian coffee is sourced and exported before reaching Canadian ports, see the <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='underline font-bold'>Ethiopian coffee export process guide</Link>.</p>
      </div>

      {/* INTRO */}
      <p className='my-4'>
        Canada imported over CAD $800 million worth of green and roasted coffee in 2024, and Ethiopian origins are among the fastest-growing segments. For Canadian roasters seeking <Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline font-semibold'>Yirgacheffe</Link> florals, <Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline font-semibold'>Guji</Link> stone fruit, or <Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline font-semibold'>Sidamo</Link> berry sweetness, learning how to <span className='font-semibold'>import Ethiopian coffee to Canada</span> opens the door to better margins and direct origin relationships.
      </p>
      <p className='my-4'>
        The process is more straightforward than most buyers expect, but it does involve specific federal agencies, a new digital portal (CARM), and documentation requirements that differ from other food imports. This guide covers every step from CFIA compliance through customs clearance to warehouse delivery, with real cost figures and a practical timeline.
      </p>

      {/* SECTION 1 */}
      <h2 id='why-canadian-roasters' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineGlobeAlt className='inline mr-2 text-amber-600' /> 1. Why Canadian Roasters Source Ethiopian Coffee
      </h2>

      <p className='my-4'>
        Ethiopian coffee is foundational to specialty coffee culture, and Canadian demand reflects that. The <a href='https://coffeeassoc.com/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>Coffee Association of Canada</a> reports that 72% of Canadians drink coffee daily, with specialty consumption growing roughly 5.5% annually. Five factors drive Canadian roasters toward direct Ethiopian imports:
      </p>

      <ul className='list-disc ml-6 space-y-2 text-sm my-4'>
        <li><span className='font-semibold'>Flavor differentiation:</span> Yirgacheffe&apos;s jasmine and citrus, Sidamo&apos;s berry sweetness, Guji&apos;s stone fruit complexity, and <Link href='/ethiopian-coffee-harar' className='text-amber-700 hover:underline'>Harar</Link>&apos;s wild blueberry notes stand out on any roaster&apos;s menu.</li>
        <li><span className='font-semibold'>Consumer recognition:</span> Canadian specialty drinkers specifically seek Ethiopian single-origins. The name sells on retail bags and cafe menus.</li>
        <li><span className='font-semibold'>Margin improvement:</span> Importing directly from an <Link href='/ethiopian-coffee-exporter' className='text-amber-700 hover:underline font-semibold'>Ethiopian coffee exporter</Link> eliminates US-based intermediaries and can reduce green cost by CAD $0.50 to $1.50 per pound compared to buying through a Canadian distributor.</li>
        <li><span className='font-semibold'>Traceability and storytelling:</span> Direct relationships provide lot-level traceability (cooperative, washing station, region) that supports transparency marketing.</li>
        <li><span className='font-semibold'>Quality assurance:</span> Ethiopia&apos;s CLU (Coffee Liquoring Unit) inspection system and <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX grading</Link> provide verified G1/G2 specialty grades before the coffee leaves origin.</li>
      </ul>

      {/* SECTION 2 */}
      <h2 id='import-regulations' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineScale className='inline mr-2 text-amber-600' /> 2. Canadian Import Regulations for Green Coffee
      </h2>

      <p className='my-4'>
        Three federal bodies govern coffee imports into Canada: CFIA for food safety, CBSA for customs clearance, and CRA for tax collection. Since October 2024, all importers must also register in the CARM digital portal.
      </p>

      {/* CFIA */}
      <h3 className='text-xl font-bold mt-8 mb-2'>CFIA Requirements</h3>
      <p className='my-4'>
        The <a href='https://inspection.canada.ca/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>Canadian Food Inspection Agency (CFIA)</a> regulates green coffee as a food product under the Safe Food for Canadians Regulations (SFCR):
      </p>
      <div className='bg-amber-50 p-6 rounded-lg border border-amber-200 my-4'>
        <ul className='text-sm space-y-2 list-disc ml-5'>
          <li><span className='font-semibold'>SFCR licence:</span> Required for any business that imports food into Canada for commercial purposes. Apply through the <a href='https://inspection.canada.ca/preventive-controls/safe-food-for-canadians-regulations/eng/1512144613718/1512144687266' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>My CFIA portal</a>. Processing time: 4 to 8 weeks.</li>
          <li><span className='font-semibold'>Preventive Control Plan (PCP):</span> If you roast or further process the coffee in Canada, your facility needs a documented PCP.</li>
          <li><span className='font-semibold'>Phytosanitary certificate:</span> Required from the Ethiopian Ministry of Agriculture, confirming the coffee is pest-free. Your Ethiopian exporter provides this.</li>
          <li><span className='font-semibold'>Traceability records:</span> You must maintain records of origin, supplier, lot numbers, and disposition for every shipment.</li>
        </ul>
      </div>

      <div className='bg-gray-50 p-4 rounded-lg border border-gray-200 my-4 text-sm'>
        <p><span className='font-semibold'>Clarification:</span> Green (unroasted) coffee beans do not require a separate CFIA import permit beyond the SFCR licence. The SFCR licence covers your authority to import food commercially. This is a common point of confusion; you do not need a per-shipment permit.</p>
      </div>

      {/* CBSA */}
      <h3 className='text-xl font-bold mt-8 mb-2'>CBSA Customs Requirements</h3>
      <p className='my-4'>
        The <a href='https://www.cbsa-asfc.gc.ca/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>Canada Border Services Agency (CBSA)</a> handles customs clearance and duty assessment:
      </p>
      <div className='bg-gray-50 p-6 rounded-lg border border-gray-200 my-4'>
        <ul className='text-sm space-y-2 list-disc ml-5'>
          <li><span className='font-semibold'>Business Number (BN9):</span> Required from the Canada Revenue Agency. Register through the <a href='https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/registering-your-business/changes-nine-digit-business-number-importing-exporting.html' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>CRA portal</a>.</li>
          <li><span className='font-semibold'>Import declaration (B3/CBSA B3-3):</span> Filed electronically by your customs broker, declaring value, origin, HS code, and duty/tax liability.</li>
          <li><span className='font-semibold'>Tariff classification:</span> Green coffee is HS 0901.11.20 (within quota, duty-free) or 0901.11.90 (over quota).</li>
          <li><span className='font-semibold'>Commercial invoice and packing list:</span> Your Ethiopian exporter provides these with every shipment.</li>
        </ul>
      </div>

      {/* CARM */}
      <h3 className='text-xl font-bold mt-8 mb-2'>CARM: The Mandatory Digital Portal (2024 Onward)</h3>
      <p className='my-4'>
        The <a href='https://www.cbsa-asfc.gc.ca/services/carm-gcra/menu-eng.html' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>CBSA Assessment and Revenue Management (CARM)</a> system replaced the legacy customs accounting process in October 2024. All commercial importers must register. Here is what you need to do:
      </p>
      <div className='bg-amber-50 p-6 rounded-lg border border-amber-200 my-4'>
        <ol className='text-sm space-y-3 list-decimal ml-5'>
          <li><span className='font-semibold'>Obtain a Business Number (BN9)</span> from CRA with an RM (import/export) program account.</li>
          <li><span className='font-semibold'>Register in the CARM Client Portal (CCP)</span> at <a href='https://ccp-pcc.cbsa-asfc.cloud-nuage.canada.ca/en/public-bulletins' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>ccp-pcc.cbsa-asfc.gc.ca</a>.</li>
          <li><span className='font-semibold'>Appoint a Business Account Manager (BAM)</span> who controls portal permissions. Assign a backup BAM to avoid lockouts.</li>
          <li><span className='font-semibold'>Delegate access to your customs broker</span> so they can file declarations and manage duties on your behalf within CARM.</li>
          <li><span className='font-semibold'>Post financial security</span> if you want Release Prior to Payment (RPP). Since May 2025, RPP requires a surety bond or cash deposit posted directly in the CARM portal. Without RPP, your shipment may be held until duties and taxes are paid in full.</li>
        </ol>
      </div>

      <div className='bg-gray-50 p-4 rounded-lg border border-gray-200 my-4 text-sm'>
        <p><span className='font-semibold'>Why CARM matters for coffee importers:</span> If you are not registered in CARM, your customs broker cannot file on your behalf, and your shipment will be delayed or held at the border. Set up your account before your first container arrives. The registration process takes a few hours but prevents weeks of problems.</p>
      </div>

      {/* LABELING */}
      <h3 className='text-xl font-bold mt-8 mb-2'>Labeling Requirements</h3>
      <p className='my-4'>
        If you resell green coffee in Canada (to other roasters or businesses), packaging must comply with Canadian labeling regulations:
      </p>
      <ul className='list-disc ml-6 space-y-2 text-sm my-4'>
        <li><span className='font-semibold'>Bilingual labeling:</span> Key information must appear in both English and French.</li>
        <li><span className='font-semibold'>Country of origin:</span> Must be clearly stated (e.g., &quot;Product of Ethiopia&quot;).</li>
        <li><span className='font-semibold'>Net weight:</span> In metric units.</li>
        <li><span className='font-semibold'>Importer information:</span> Your business name and Canadian address.</li>
      </ul>
      <p className='my-4 text-sm'>
        If you import green coffee solely for your own roasting operation and do not resell the green beans, labeling requirements are less stringent. However, your roasted product labels must comply fully with CFIA&apos;s <a href='https://inspection.canada.ca/food-label-requirements/checklists/eng/1526659084615/1526659100597' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>Food Label Requirements</a>.
      </p>

      {/* SECTION 3 */}
      <h2 id='duties-taxes' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineCurrencyDollar className='inline mr-2 text-amber-600' /> 3. Duties, Taxes, and Financial Planning
      </h2>

      {/* DUTY RATES */}
      <h3 className='text-xl font-bold mt-8 mb-2'>Duty Rates (HS 0901.11)</h3>
      <p className='my-4'>
        Green coffee entering Canada is classified under HS heading 0901.11. Most specialty volumes enter duty-free:
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm text-left border border-gray-200'>
          <thead className='bg-gray-100 font-bold text-dark'>
            <tr>
              <th className='border border-gray-200 px-4 py-2'>HS Code</th>
              <th className='border border-gray-200 px-4 py-2'>Description</th>
              <th className='border border-gray-200 px-4 py-2'>MFN Duty Rate</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 text-gray-700'>
            <tr>
              <td className='border border-gray-200 px-4 py-2 font-mono'>0901.11.20</td>
              <td className='border border-gray-200 px-4 py-2'>Coffee, not roasted, not decaffeinated (within access commitment)</td>
              <td className='border border-gray-200 px-4 py-2 font-bold'>Free</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2 font-mono'>0901.11.90</td>
              <td className='border border-gray-200 px-4 py-2'>Coffee, not roasted, not decaffeinated (over access commitment)</td>
              <td className='border border-gray-200 px-4 py-2'>$0.0075/kg</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4 text-sm'>
        Practical impact: the over-quota rate of $0.0075/kg equals less than $0.004/lb. For Ethiopian specialty coffee, this is negligible. The <a href='https://www.cbsa-asfc.gc.ca/trade-commerce/tariff-tarif/menu-eng.html' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>CBSA Customs Tariff</a> page has the latest rates and access commitment volumes.
      </p>

      {/* GST/HST */}
      <h3 className='text-xl font-bold mt-8 mb-2'>GST/HST at Import</h3>
      <p className='my-4'>
        Federal and/or provincial sales tax is collected at the border on the customs value plus any duty:
      </p>
      <div className='bg-amber-50 p-6 rounded-lg border border-amber-200 my-4'>
        <ul className='text-sm space-y-2 list-disc ml-5'>
          <li><span className='font-semibold'>GST (all provinces):</span> 5% on customs value + duty.</li>
          <li><span className='font-semibold'>HST (participating provinces):</span> 13% in Ontario, 15% in Nova Scotia, New Brunswick, Newfoundland, and PEI.</li>
          <li><span className='font-semibold'>PST (separate provinces):</span> BC 7%, Saskatchewan 6%, Manitoba 7%, Quebec 9.975% (QST).</li>
        </ul>
        <p className='text-sm mt-3'><span className='font-semibold'>Recovery:</span> If your business is registered for GST/HST, you reclaim the full amount as Input Tax Credits (ITCs) on your next filing. The cash flow gap between paying at the border and recovering via ITC is typically 1 to 3 months. Budget for this. For ITC details, see <a href='https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses.html' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>CRA&apos;s GST/HST guide</a>.</p>
      </div>

      {/* CURRENCY */}
      <h3 className='text-xl font-bold mt-8 mb-2'>Currency Exchange Considerations</h3>
      <p className='my-4'>
        Ethiopian coffee is priced in USD (FOB Djibouti). Canadian importers face CAD/USD exchange risk between the time they agree on a price and the time they wire payment. Three strategies to manage this:
      </p>
      <ul className='list-disc ml-6 space-y-2 text-sm my-4'>
        <li><span className='font-semibold'>Spot conversion:</span> Convert CAD to USD at the time of payment through your bank. Simple but exposes you to rate fluctuation.</li>
        <li><span className='font-semibold'>Forward contract:</span> Lock in a CAD/USD rate through your bank&apos;s FX desk for a future date. Eliminates uncertainty; small premium.</li>
        <li><span className='font-semibold'>USD account:</span> Maintain a USD-denominated business account to pay suppliers directly, converting CAD to USD when rates are favorable.</li>
      </ul>

      {/* SECTION 4 */}
      <h2 id='export-partner' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineShieldCheck className='inline mr-2 text-amber-600' /> 4. Finding an Ethiopian Export Partner
      </h2>

      <p className='my-4'>
        Your exporter manages the entire Ethiopian side: sourcing, milling, quality inspection, documentation, and logistics to Djibouti. Choosing the right partner determines the quality, reliability, and cost of every shipment.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-2'>What to Look for in an Exporter</h3>
      <ul className='list-disc ml-6 space-y-2 text-sm my-4'>
        <li>ECX registration and a valid Ethiopian export licence</li>
        <li>Experience shipping to Canadian ports (Vancouver, Montreal)</li>
        <li>Sample programs with courier delivery (DHL/FedEx) to Canada</li>
        <li>Transparent <Link href='/coffee-grading-ethiopia' className='text-amber-700 hover:underline'>cupping scores and defect counts</Link> for every lot</li>
        <li>Full CFIA-compliant documentation (phytosanitary, ICO certificate, commercial invoice)</li>
        <li>FOB Djibouti container coordination and reliable shipping agent relationships</li>
      </ul>

      <h3 className='text-xl font-bold mt-8 mb-2'>Export Documentation Your Exporter Provides</h3>
      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm text-left border border-gray-200'>
          <thead className='bg-gray-100 font-bold text-dark'>
            <tr>
              <th className='border border-gray-200 px-4 py-2'>Document</th>
              <th className='border border-gray-200 px-4 py-2'>Issued By</th>
              <th className='border border-gray-200 px-4 py-2'>Purpose</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 text-gray-700'>
            <tr>
              <td className='border border-gray-200 px-4 py-2'>Commercial invoice</td>
              <td className='border border-gray-200 px-4 py-2'>Exporter</td>
              <td className='border border-gray-200 px-4 py-2'>FOB price, weight, grade, contract reference; used for CBSA valuation</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2'>Packing list</td>
              <td className='border border-gray-200 px-4 py-2'>Exporter</td>
              <td className='border border-gray-200 px-4 py-2'>Bag count, net/gross weight, lot marks</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2'>Bill of Lading (B/L)</td>
              <td className='border border-gray-200 px-4 py-2'>Shipping line</td>
              <td className='border border-gray-200 px-4 py-2'>Title document; needed to claim cargo at Canadian port</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2'>Phytosanitary certificate</td>
              <td className='border border-gray-200 px-4 py-2'>Ethiopian Ministry of Agriculture</td>
              <td className='border border-gray-200 px-4 py-2'>Pest-free declaration; required by CFIA</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2'>ICO Certificate of Origin</td>
              <td className='border border-gray-200 px-4 py-2'>ECTA on behalf of ICO</td>
              <td className='border border-gray-200 px-4 py-2'>Confirms ICO member-country origin</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2'>CLU quality certificate</td>
              <td className='border border-gray-200 px-4 py-2'>ECTA (Coffee Liquoring Unit)</td>
              <td className='border border-gray-200 px-4 py-2'>Grade, moisture, cupping score, defect analysis</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        <span className='font-semibold'>Ethio Coffee Import and Export PLC</span> is an origin-connected Ethiopian coffee exporter with three decades of sourcing relationships across every major coffee region. We provide CFIA-compliant documentation, coordinate FOB Djibouti shipping, and deliver samples by courier to anywhere in Canada. For details on how we work with buyers, see our <Link href='/insights/ethio-coffee-export-launch' className='text-amber-700 hover:underline font-semibold'>partnership guide</Link>.
      </p>

      {/* SECTION 5 */}
      <h2 id='shipping-routes' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineTruck className='inline mr-2 text-amber-600' /> 5. Shipping Routes, Containers, and Insurance
      </h2>

      <h3 className='text-xl font-bold mt-8 mb-2'>Canadian Port Options</h3>
      <p className='my-4'>
        Ethiopian coffee ships from the Port of Djibouti. Three Canadian ports handle the majority of green coffee arrivals:
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm text-left border border-gray-200'>
          <thead className='bg-gray-100 font-bold text-dark'>
            <tr>
              <th className='border border-gray-200 px-4 py-2'>Port</th>
              <th className='border border-gray-200 px-4 py-2'>Transit from Djibouti</th>
              <th className='border border-gray-200 px-4 py-2'>Route</th>
              <th className='border border-gray-200 px-4 py-2'>Best For</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 text-gray-700'>
            <tr>
              <td className='border border-gray-200 px-4 py-2 font-semibold'>Montreal</td>
              <td className='border border-gray-200 px-4 py-2'>28 to 35 days</td>
              <td className='border border-gray-200 px-4 py-2'>Suez Canal, Mediterranean, Atlantic</td>
              <td className='border border-gray-200 px-4 py-2'>Quebec, Ontario, Maritimes</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2 font-semibold'>Halifax</td>
              <td className='border border-gray-200 px-4 py-2'>30 to 38 days</td>
              <td className='border border-gray-200 px-4 py-2'>Same as Montreal, sometimes direct</td>
              <td className='border border-gray-200 px-4 py-2'>Maritimes, sometimes Ontario</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2 font-semibold'>Vancouver</td>
              <td className='border border-gray-200 px-4 py-2'>35 to 45 days</td>
              <td className='border border-gray-200 px-4 py-2'>Suez Canal, Indian Ocean, transpacific</td>
              <td className='border border-gray-200 px-4 py-2'>BC, Alberta, Prairies</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4 text-sm'>
        Toronto roasters typically clear through Montreal and add a drayage leg (CAD $800 to $1,500 by truck, 1 to 2 days).
      </p>

      <h3 className='text-xl font-bold mt-8 mb-2'>Container Options and Capacity</h3>
      <div className='bg-amber-50 p-6 rounded-lg border border-amber-200 my-4'>
        <div className='space-y-3 text-sm'>
          <div>
            <p className='font-semibold'>20ft FCL (Full Container Load):</p>
            <p>~275 to 300 bags (16,500 to 18,000 kg). Ocean freight estimate: CAD $5,000 to $8,000 from Djibouti. The standard for most single-origin specialty orders.</p>
          </div>
          <div>
            <p className='font-semibold'>40ft FCL:</p>
            <p>~360 to 400 bags (21,600 to 24,000 kg). Ocean freight estimate: CAD $6,500 to $10,000. Better per-kg rate for high-volume buyers.</p>
          </div>
          <div>
            <p className='font-semibold'>LCL (Less than Container Load):</p>
            <p>For orders of 50 to 200 bags. Higher per-kg rate but lower total commitment. Good for first imports or testing new origins. See our <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>MOQ guide</Link> for details.</p>
          </div>
        </div>
      </div>

      <h3 className='text-xl font-bold mt-8 mb-2'>Cargo Insurance</h3>
      <p className='my-4'>
        Marine cargo insurance protects against loss or damage during ocean transit. On FOB terms, the buyer is responsible for insurance from the moment the container loads onto the vessel at Djibouti. Standard coverage options:
      </p>
      <ul className='list-disc ml-6 space-y-2 text-sm my-4'>
        <li><span className='font-semibold'>Institute Cargo Clause A (All Risks):</span> Broadest coverage; recommended for specialty coffee. Covers damage from water, handling, theft, and contamination.</li>
        <li><span className='font-semibold'>Typical cost:</span> 0.2% to 0.5% of the shipment value. On a CAD $200,000 container, that is CAD $400 to $1,000.</li>
        <li><span className='font-semibold'>Providers:</span> Your freight forwarder or a commercial insurance broker can arrange coverage. Some customs brokers also offer insurance as part of their service.</li>
      </ul>

      {/* SECTION 6 */}
      <h2 id='customs-clearance' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineDocumentCheck className='inline mr-2 text-amber-600' /> 6. Customs Clearance: Step by Step
      </h2>

      <p className='my-4'>
        Once your container arrives at a Canadian port, clearance follows six stages. A licensed customs broker handles most of these on your behalf.
      </p>

      <div className='space-y-4 my-6'>
        <div className='bg-gray-50 p-4 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-1'>Step 1: ACI/eManifest Pre-Arrival Filing</h4>
          <p className='text-sm'>Your freight forwarder or customs broker files Advance Commercial Information (ACI) with CBSA 24 to 48 hours before vessel arrival. Late or missing filings trigger penalties.</p>
        </div>
        <div className='bg-gray-50 p-4 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-1'>Step 2: CFIA Document Review</h4>
          <p className='text-sm'>CFIA reviews the phytosanitary certificate and import documentation. Green coffee may be selected for physical inspection (pest or contamination check), though this is uncommon for clean, documented shipments.</p>
        </div>
        <div className='bg-gray-50 p-4 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-1'>Step 3: CBSA Customs Declaration (B3 Form)</h4>
          <p className='text-sm'>Your customs broker files the B3 import declaration electronically through CARM, declaring customs value, country of origin, HS code, and duty/tax liability.</p>
        </div>
        <div className='bg-gray-50 p-4 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-1'>Step 4: Duty and Tax Assessment via CARM</h4>
          <p className='text-sm'>CARM calculates duties (typically nil for green coffee) and GST/HST. With RPP, the container is released while payment settles. Without RPP, payment must clear before release.</p>
        </div>
        <div className='bg-gray-50 p-4 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-1'>Step 5: Container Release</h4>
          <p className='text-sm'>Once CFIA and CBSA clear the shipment, the port terminal releases the container. Typical clearance time: 2 to 5 business days for documented coffee shipments.</p>
        </div>
        <div className='bg-gray-50 p-4 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-1'>Step 6: Drayage to Your Warehouse</h4>
          <p className='text-sm'>Arrange trucking from port to your roastery or warehouse. Montreal local drayage: CAD $400 to $800. Montreal to Toronto: CAD $800 to $1,500. Vancouver local: CAD $400 to $800.</p>
        </div>
      </div>

      <div className='bg-amber-50 p-4 rounded-lg border border-amber-100 my-4 text-sm'>
        <p className='font-semibold mb-1'>Pro tip:</p>
        <p>Use a licensed customs broker for your first few shipments. They handle CARM filing, CBSA/CFIA coordination, and duty payment. Cost: CAD $200 to $500 per shipment. This is inexpensive relative to the risk and complexity of self-filing.</p>
      </div>

      {/* SECTION 7 */}
      <h2 id='landed-cost' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineCurrencyDollar className='inline mr-2 text-amber-600' /> 7. Landed Cost Breakdown
      </h2>

      <p className='my-4'>
        Below is a realistic cost example for a 20ft container of Ethiopian specialty green coffee (G1/G2 washed) arriving at the Port of Montreal:
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm text-left border border-gray-200'>
          <thead className='bg-gray-100 font-bold text-dark'>
            <tr>
              <th className='border border-gray-200 px-4 py-2'>Cost Component</th>
              <th className='border border-gray-200 px-4 py-2'>Amount (CAD)</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 text-gray-700'>
            <tr>
              <td className='border border-gray-200 px-4 py-2'>FOB price (Ethiopia) at ~CAD $4.80/lb x 39,683 lbs</td>
              <td className='border border-gray-200 px-4 py-2'>$190,478</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2'>Ocean freight (Djibouti to Montreal)</td>
              <td className='border border-gray-200 px-4 py-2'>$6,500</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2'>Marine cargo insurance (~0.3%)</td>
              <td className='border border-gray-200 px-4 py-2'>$590</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2'>Customs broker fee</td>
              <td className='border border-gray-200 px-4 py-2'>$350</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2'>CFIA inspection (if selected)</td>
              <td className='border border-gray-200 px-4 py-2'>$250</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2'>Port fees and terminal handling</td>
              <td className='border border-gray-200 px-4 py-2'>$600</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2'>Import duty (within quota)</td>
              <td className='border border-gray-200 px-4 py-2'>$0</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2'>GST 5% on ~$198,768</td>
              <td className='border border-gray-200 px-4 py-2'>$9,938</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2'>Drayage (Montreal port to warehouse)</td>
              <td className='border border-gray-200 px-4 py-2'>$600</td>
            </tr>
            <tr className='font-bold bg-amber-50'>
              <td className='border border-gray-200 px-4 py-2'>Total landed cost</td>
              <td className='border border-gray-200 px-4 py-2'>$209,306</td>
            </tr>
            <tr className='font-bold'>
              <td className='border border-gray-200 px-4 py-2'>Cost per pound (landed)</td>
              <td className='border border-gray-200 px-4 py-2'>~CAD $5.27/lb</td>
            </tr>
            <tr className='text-gray-500'>
              <td className='border border-gray-200 px-4 py-2'>After GST ITC recovery</td>
              <td className='border border-gray-200 px-4 py-2'>~CAD $5.02/lb</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4 text-sm'>
        These figures are indicative and depend on FOB price, freight market conditions, and exchange rates. For a deeper breakdown of how FOB prices are structured, see the <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline font-semibold'>Ethiopian coffee FOB pricing guide</Link>.
      </p>

      {/* SECTION 8 */}
      <h2 id='storage' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineBeaker className='inline mr-2 text-amber-600' /> 8. Storage and Quality Maintenance
      </h2>

      <p className='my-4'>
        Canada&apos;s climate extremes (dry winters below -20°C, humid summers above 30°C) make proper green coffee storage essential. Poor conditions degrade cup quality within weeks.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg border border-amber-200 my-4'>
        <ul className='text-sm space-y-2 list-disc ml-5'>
          <li><span className='font-semibold'>Temperature:</span> 15 to 20°C (59 to 68°F). Avoid freezing and avoid temperature swings.</li>
          <li><span className='font-semibold'>Humidity:</span> 50 to 65% RH. Critical during Ontario/Quebec summer months.</li>
          <li><span className='font-semibold'>Moisture-barrier packaging:</span> GrainPro or Ecotact liners inside jute bags protect against humidity fluctuations during storage and transit.</li>
          <li><span className='font-semibold'>Pallet storage:</span> Keep bags off the floor, away from walls, with airflow between stacks.</li>
          <li><span className='font-semibold'>FIFO rotation:</span> Use older lots first. Green coffee maintains peak quality for 6 to 12 months in proper conditions.</li>
          <li><span className='font-semibold'>Pest monitoring:</span> Regular checks, especially in shared warehouse facilities.</li>
        </ul>
      </div>

      <p className='my-4 text-sm'>
        Third-party green coffee warehouses operate in Toronto, Montreal, and Vancouver, charging CAD $1 to $3 per bag per month. These facilities specialize in climate-controlled coffee storage and are worth considering if your roastery lacks dedicated warehouse space.
      </p>

      {/* SECTION 9 */}
      <h2 id='organic-imports' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineCheckCircle className='inline mr-2 text-amber-600' /> 9. Organic Ethiopian Coffee Imports
      </h2>

      <p className='my-4'>
        If you want to sell coffee as &quot;organic&quot; in Canada, additional certification is required under the Canadian Organic Regime (COR):
      </p>
      <ul className='list-disc ml-6 space-y-2 text-sm my-4'>
        <li>The coffee must be certified organic by a CFIA-accredited certification body (at origin or destination).</li>
        <li>Your Ethiopian exporter must provide an organic transaction certificate for each shipment.</li>
        <li>If your roasting facility handles both organic and conventional coffee, it must maintain documented separation procedures.</li>
        <li>CFIA may request proof of organic status at the border; keep transaction certificates accessible.</li>
      </ul>
      <p className='my-4'>
        Ethiopia is one of the world&apos;s largest producers of certified organic coffee, with significant volumes from Yirgacheffe, Sidamo, and Guji regions. For details on sourcing organic Ethiopian lots, see our <Link href='/organic-ethiopian-coffee-export' className='text-amber-700 hover:underline font-semibold'>organic Ethiopian coffee export page</Link>.
      </p>

      {/* SECTION 10 */}
      <h2 id='timeline' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineClock className='inline mr-2 text-amber-600' /> 10. Timeline: Ethiopia to Canadian Warehouse
      </h2>

      <p className='my-4'>
        Plan for 11 to 15 weeks total lead time from first inquiry to coffee in your facility. The table below breaks down each phase:
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm text-left border border-gray-200'>
          <thead className='bg-gray-100 font-bold text-dark'>
            <tr>
              <th className='border border-gray-200 px-4 py-2'>Phase</th>
              <th className='border border-gray-200 px-4 py-2'>Duration</th>
              <th className='border border-gray-200 px-4 py-2'>Key Activity</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 text-gray-700'>
            <tr>
              <td className='border border-gray-200 px-4 py-2'>Discovery and sampling</td>
              <td className='border border-gray-200 px-4 py-2'>1 to 2 weeks</td>
              <td className='border border-gray-200 px-4 py-2'>Request samples, courier to Canada (5 to 8 days), cup and evaluate</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2'>Contract and payment</td>
              <td className='border border-gray-200 px-4 py-2'>1 week</td>
              <td className='border border-gray-200 px-4 py-2'>Finalize PO, arrange 30% deposit / 70% on B/L, wire transfer (CAD to USD)</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2'>Container preparation and export</td>
              <td className='border border-gray-200 px-4 py-2'>2 to 4 weeks</td>
              <td className='border border-gray-200 px-4 py-2'>Sourcing, milling, CLU inspection, documentation, container stuffing at Djibouti</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2'>Ocean transit</td>
              <td className='border border-gray-200 px-4 py-2'>4 to 6 weeks</td>
              <td className='border border-gray-200 px-4 py-2'>Djibouti to Montreal (28 to 35 days) or Vancouver (35 to 45 days)</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2'>Customs clearance</td>
              <td className='border border-gray-200 px-4 py-2'>3 to 5 days</td>
              <td className='border border-gray-200 px-4 py-2'>CFIA/CBSA review, CARM duty/tax settlement, container release</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2'>Drayage and delivery</td>
              <td className='border border-gray-200 px-4 py-2'>1 to 3 days</td>
              <td className='border border-gray-200 px-4 py-2'>Trucking from port to your warehouse or roastery</td>
            </tr>
            <tr className='font-bold bg-amber-50'>
              <td className='border border-gray-200 px-4 py-2'>Total</td>
              <td className='border border-gray-200 px-4 py-2'>11 to 15 weeks</td>
              <td className='border border-gray-200 px-4 py-2'></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-gray-50 p-4 rounded-lg border border-gray-200 my-4 text-sm'>
        <p><span className='font-semibold'>Peak season note:</span> During Ethiopia&apos;s main export window (January to April), CLU inspection queues can add 1 to 2 weeks. Place orders in November or December to secure early-season allocation.</p>
      </div>

      {/* SECTION 11 */}
      <h2 id='pitfalls' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineExclamationTriangle className='inline mr-2 text-amber-600' /> 11. Common Pitfalls and How to Avoid Them
      </h2>

      <div className='space-y-4 my-6'>
        <div className='bg-gray-50 p-4 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-1'>1. Not registering in CARM before first shipment</h4>
          <p className='text-sm'><span className='font-semibold'>Fix:</span> Complete CARM registration, appoint a BAM, delegate broker access, and post financial security (if you want RPP) at least 4 weeks before your container arrives. Without CARM, your broker cannot file and your shipment stalls at port.</p>
        </div>
        <div className='bg-gray-50 p-4 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-1'>2. Forgetting about SFCR licensing</h4>
          <p className='text-sm'><span className='font-semibold'>Fix:</span> Apply for your Safe Food for Canadians licence through the My CFIA portal well before your first import. Processing takes 4 to 8 weeks. If you roast, you also need a Preventive Control Plan.</p>
        </div>
        <div className='bg-gray-50 p-4 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-1'>3. Underestimating GST/HST cash flow impact</h4>
          <p className='text-sm'><span className='font-semibold'>Fix:</span> You pay 5% to 15% tax at the border before recovering it via ITCs, which takes 1 to 3 months. On a $200,000 container, that is $10,000 to $30,000 of working capital tied up. Budget for it.</p>
        </div>
        <div className='bg-gray-50 p-4 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-1'>4. Skipping a customs broker to save money</h4>
          <p className='text-sm'><span className='font-semibold'>Fix:</span> A broker costs CAD $200 to $500 per shipment but saves you from filing errors, CBSA penalties, and shipment delays. For first-time importers, this is the single best investment in the process.</p>
        </div>
        <div className='bg-gray-50 p-4 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-1'>5. Poor storage in Canadian climate extremes</h4>
          <p className='text-sm'><span className='font-semibold'>Fix:</span> Dry winters and humid summers stress green coffee. Use climate-controlled storage or a third-party coffee warehouse. GrainPro liners help, but they are not a substitute for stable temperature and humidity.</p>
        </div>
      </div>

      {/* SECTION 12 */}
      <h2 id='direct-import' className='text-3xl font-extrabold mt-10 mb-4'>
        12. Is Direct Import Right for Your Operation?
      </h2>

      <p className='my-4'>
        Direct import from Ethiopia makes financial sense when you meet three conditions:
      </p>
      <ul className='list-disc ml-6 space-y-2 text-sm my-4'>
        <li><span className='font-semibold'>Volume:</span> You roast at least 500 kg per month (enough to justify container logistics and customs setup costs).</li>
        <li><span className='font-semibold'>Cash flow:</span> You can finance 11 to 15 weeks of lead time, including the FOB deposit and GST/HST at the border.</li>
        <li><span className='font-semibold'>Storage:</span> You have access to climate-controlled warehouse space for 50 to 300+ bags.</li>
      </ul>
      <p className='my-4'>
        If you roast less than 200 kg per month, start by buying through a Canadian green coffee importer/distributor. As volume grows, transition to LCL (50 to 100 bags) for a first direct import, then scale to FCL. The margin improvement of CAD $0.50 to $1.50 per pound on direct import compounds significantly once you reach container-level volume.
      </p>

      {/* CONCLUSION */}
      <p className='my-6 text-lg'>
        <span className='font-semibold'>To import Ethiopian coffee to Canada</span> in 2026, you need an SFCR licence from CFIA, registration in the CARM portal, a reliable Ethiopian export partner, and a licensed customs broker. The regulatory framework is more structured than it was two years ago, but the payoff, direct access to some of the world&apos;s most distinctive specialty coffee origins at better margins, is well worth the setup effort.
      </p>

      {/* SOURCES */}
      <div className='my-8'>
        <h3 className='text-xl font-extrabold mb-3'>Sources and Further Reading</h3>
        <ul className='list-disc ml-5 space-y-2 text-sm'>
          <li>
            <a href='https://inspection.canada.ca/preventive-controls/safe-food-for-canadians-regulations/eng/1512144613718/1512144687266' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>
              CFIA: Safe Food for Canadians Regulations (SFCR) Licence Requirements
            </a>
          </li>
          <li>
            <a href='https://www.cbsa-asfc.gc.ca/services/carm-gcra/menu-eng.html' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>
              CBSA: CARM (Assessment and Revenue Management) Portal
            </a>
          </li>
          <li>
            <a href='https://www.cbsa-asfc.gc.ca/trade-commerce/tariff-tarif/menu-eng.html' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>
              CBSA: Canadian Customs Tariff (HS 0901.11 Duty Rates)
            </a>
          </li>
          <li>
            <a href='https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses.html' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>
              CRA: GST/HST for Businesses (Input Tax Credits)
            </a>
          </li>
          <li>
            <a href='https://coffeeassoc.com/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>
              Coffee Association of Canada: Market Data and Supply Chain
            </a>
          </li>
        </ul>
      </div>

      {/* FAQ */}
      <section id='faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h2 className='text-2xl font-bold mb-6 text-gray-900'>Frequently Asked Questions About Importing Ethiopian Coffee to Canada</h2>
        <div className='space-y-6'>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>What permits are needed to import Ethiopian coffee to Canada?</h3>
            <p className='text-sm text-gray-600'>
              You need a Business Number (BN9) from CRA, an SFCR licence from CFIA, and CARM portal registration with CBSA. Your Ethiopian exporter provides the phytosanitary certificate and ICO certificate of origin. A customs broker files declarations on your behalf.
            </p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>Is there import duty on Ethiopian coffee in Canada?</h3>
            <p className='text-sm text-gray-600'>
              Green (unroasted) coffee enters duty-free under HS 0901.11.20 for most volumes. Over-quota imports face a minimal rate of $0.0075/kg. GST or HST applies at the border but is fully recoverable as an Input Tax Credit for registered businesses.
            </p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>What is CARM and do I need it to import coffee to Canada?</h3>
            <p className='text-sm text-gray-600'>
              CARM is CBSA&apos;s digital portal for assessing and paying import duties and taxes. It became mandatory for all commercial importers in October 2024. Without CARM registration, your customs broker cannot file declarations, and your shipment will be held at the border.
            </p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>How long does shipping from Ethiopia to Canada take?</h3>
            <p className='text-sm text-gray-600'>
              Ocean transit from Djibouti to Montreal is 28 to 35 days; to Vancouver, 35 to 45 days. Total lead time from first inquiry to warehouse delivery is 11 to 15 weeks, including sampling, contract, export preparation, transit, and customs clearance.
            </p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>Do I need an SFCR licence to import green coffee to Canada?</h3>
            <p className='text-sm text-gray-600'>
              Yes. Any business importing food for commercial purposes needs an SFCR licence from CFIA. Apply through the My CFIA portal; processing takes 4 to 8 weeks. If you also roast, your facility requires a Preventive Control Plan.
            </p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>How much does it cost to import Ethiopian coffee to Canada?</h3>
            <p className='text-sm text-gray-600'>
              A 20ft container of specialty Ethiopian coffee (275 to 300 bags) landed in Montreal costs approximately CAD $209,000, or about CAD $5.27 per pound before GST recovery. After reclaiming GST via Input Tax Credits, the effective cost drops to roughly CAD $5.02 per pound.
            </p>
          </div>
        </div>
      </section>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3'>
          <HiOutlineShieldCheck className='inline mr-2 text-amber-700' />
          Source Ethiopian Coffee Direct from Origin
        </h3>
        <p className='my-2 text-sm'>
          Ethio Coffee Import and Export PLC is an origin-connected Ethiopian coffee exporter with 30+ years of heritage sourcing relationships across Yirgacheffe, Sidamo, Guji, Harar, Limu, and Jimma. We provide CFIA-compliant documentation, coordinate FOB Djibouti shipping to Canadian ports, and deliver samples by courier. Whether this is your first container or you are looking for a more reliable Ethiopian partner, we make the process straightforward.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>
            View Current Offerings
          </Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            Request Samples
          </Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            How to Order
          </Link>
        </div>
      </div>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-6'>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Import Guides by Country</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/how-to-import-ethiopian-coffee-to-usa' className='text-amber-700 hover:underline'>Importing Ethiopian Coffee to USA</Link></li>
              <li>• <Link href='/insights/importing-ethiopian-coffee-to-germany' className='text-amber-700 hover:underline'>Importing Ethiopian Coffee to Germany</Link></li>
              <li>• <Link href='/insights/importing-ethiopian-coffee-to-uk' className='text-amber-700 hover:underline'>Importing Ethiopian Coffee to UK</Link></li>
              <li>• <Link href='/insights/importing-ethiopian-coffee-to-japan' className='text-amber-700 hover:underline'>Importing Ethiopian Coffee to Japan</Link></li>
              <li>• <Link href='/insights/importing-ethiopian-coffee-to-australia' className='text-amber-700 hover:underline'>Importing Ethiopian Coffee to Australia</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Trade &amp; Logistics</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process Guide</Link></li>
              <li>• <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing</Link></li>
              <li>• <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Minimum Order Quantities</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Quality &amp; Sourcing</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Ethiopian Heirloom Coffee Varieties</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Certifications Guide: Organic, Fairtrade, Rainforest</Link></li>
              <li>• <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Quality Control, Defects, and Grading</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Pricing &amp; Market</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/rising-ethiopian-coffee-prices-explained' className='text-amber-700 hover:underline'>Rising Ethiopian Coffee Prices Explained</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost Guide</Link></li>
              <li>• <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline'>Specialty Coffee Storage in Sea Freight</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC, an Ethiopian coffee exporter with 30+ years of sourcing relationships across Ethiopia&apos;s coffee regions. Canadian import regulations, CARM requirements, duty rates, and shipping costs change with government policy and market conditions. Contact us for current information before making purchasing decisions.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> {' · '}
          <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> {' · '}
          <Link href='/about' className='underline'>About Ethio Coffee</Link> {' · '}
          <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

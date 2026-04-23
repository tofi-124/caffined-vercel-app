import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineArrowTrendingUp,
  HiOutlineBuildingOffice,
  HiOutlineCheckCircle,
  HiOutlineClipboardDocumentList,
  HiOutlineCube,
  HiOutlineCurrencyDollar,
  HiOutlineDocumentText,
  HiOutlineGlobeAlt,
  HiOutlineLightBulb,
  HiOutlineMapPin,
  HiOutlineScale,
  HiOutlineTruck,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function ImportingEthiopianCoffeeToSingapore({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        TradeNet workflow, SFA registration, GST planning, and ASEAN hub strategy for roasters, importers, and regional distributors
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md bg-gray-200 flex items-center justify-center'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Port of Singapore container terminal with cranes and cargo vessels, relevant to importing Ethiopian coffee to Singapore'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
        <p className='text-xs text-gray-600 mt-2 font-inconsolata'>
          Hero image: <a href='https://commons.wikimedia.org/wiki/File:Port_of_Singapore.jpg' target='_blank' rel='noopener noreferrer' className='underline'>Port of Singapore</a> by Aaaatu via Wikimedia Commons, <a href='https://creativecommons.org/licenses/by-sa/4.0/deed.en' target='_blank' rel='noopener noreferrer' className='underline'>CC BY-SA 4.0</a>. Converted to WebP for site delivery.
        </p>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Import Guide / Singapore Market / Ethiopian Coffee Export / ASEAN Trade Strategy</span>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          To import Ethiopian coffee to Singapore, buyers usually move through three layers in sequence: activate a Customs Account in TradeNet, complete the SFA registration used for processed food imports, and file a Customs permit for each shipment. Coffee is not a dutiable product in Singapore, but import GST is generally charged at 9% on CIF value and incidental charges unless the lot remains in a Free Trade Zone or approved suspension scheme. That makes Singapore most attractive for two models: premium local roasters buying traceable lots in flexible volumes, and regional distributors using Singapore as an ASEAN warehousing and redistribution hub.
        </p>
      </div>

      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#why-singapore' className='text-amber-700 hover:underline'>1. Why Singapore Works for Ethiopian Coffee</a></li>
          <li><a href='#compliance-workflow' className='text-amber-700 hover:underline'>2. How to Import Ethiopian Coffee to Singapore</a></li>
          <li><a href='#gst-and-duties' className='text-amber-700 hover:underline'>3. GST, Duties, and Free Trade Zone Planning</a></li>
          <li><a href='#shipment-design' className='text-amber-700 hover:underline'>4. Shipment Design and Document Stack</a></li>
          <li><a href='#landed-cost' className='text-amber-700 hover:underline'>5. Landed Cost Math for Singapore Buyers</a></li>
          <li><a href='#hub-strategy' className='text-amber-700 hover:underline'>6. When Singapore Beats Direct Shipment</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>7. Frequently Asked Questions</a></li>
        </ol>
      </div>

      <p className='text-lg leading-relaxed my-4'>
        If you want to <span className='font-bold'>import Ethiopian coffee to Singapore</span>, the commercial logic is different from China, Japan, or the EU. Singapore is not only a destination market. It is also a financing, warehousing, and redistribution platform for Southeast Asia. Buyers who treat it like a simple one-country import operation usually overpay on GST, pick the wrong shipment size, or miss the re-export advantage completely.
      </p>

      <p className='my-4'>
        The trade data shows a market that is still small enough to be under-served, but mature enough to justify a dedicated strategy. OEC&apos;s 2024 bilateral data lists coffee exports from Ethiopia to Singapore at roughly US$1.57 million, while Trading Economics, using the wider UN Comtrade category of coffee, tea, mate, and spices, shows Ethiopia exporting US$13.07 million to Singapore in 2023. That gap matters. It suggests Singapore is not yet a high-volume direct coffee destination, but it already handles enough regional trade to reward importers who build the right documentation, storage, and redistribution model.
      </p>

      <p className='my-4'>
        This article focuses on the Singapore side of the transaction: permit workflow, SFA registration, GST treatment, Free Trade Zone strategy, and shipment design. For the Ethiopia-side sourcing mechanics, see our <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>guide to sourcing green coffee from Ethiopia</Link>, our <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and export system guide</Link>, and our <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>landed cost guide</Link>.
      </p>

      <h3 id='why-singapore' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineArrowTrendingUp className='w-8 h-8 text-amber-600' />
        1. Why Singapore Works for Ethiopian Coffee
      </h3>

      <p className='my-4'>
        Singapore works when the buyer values flexibility, working-capital control, and regional reach more than raw market size. Third-party market research still pegs the local coffee market for steady growth through the next decade, and the local cafe mix keeps widening. At one end you have value-led kopi and chain formats. At the other end, you have specialty roasters, office coffee programs, hotel groups, and regional distributors serving Malaysia, Indonesia, Thailand, and Vietnam from a single documentation base.
      </p>

      <p className='my-4'>
        Local market researchers in Singapore describe coffee buying as occasion-driven rather than brand-loyal. The same person may buy hawker kopi in the morning, app-delivered chain coffee before lunch, and a single-origin pour-over later in the day. That matters for Ethiopian coffee. It means a Singapore importer does not need mass-market volume to win. It needs the right slot in the market: menu differentiation, premium retail bags, corporate gifting, hospitality programs, or ASEAN redistribution.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Premium Local Roasting Market</h4>
          <p className='text-sm text-gray-700'>
            Singapore buyers pay for consistency, clear paperwork, and menu distinction. Ethiopian washed <Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline'>Yirgacheffe</Link>, fruit-led <Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline'>Guji</Link>, and balanced <Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline'>Sidamo</Link> lots fit specialty cafes, subscription bags, and office brewing programs that need origin character rather than commodity price.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>ASEAN Redistribution Hub</h4>
          <p className='text-sm text-gray-700'>
            Singapore also works for importers who sell beyond Singapore. If you need one English-language contracting base, one warehousing node, and one permit discipline before re-exporting into nearby markets, Singapore can reduce operational friction even when the final cup is consumed elsewhere.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Smaller, Smarter Buying Volumes</h4>
          <p className='text-sm text-gray-700'>
            Buyers do not always need a full container on day one. Singapore is well suited to palletized or LCL trial lots for roasters testing a new origin, especially when the next step is to graduate into recurring <Link href='/buy-ethiopian-coffee-wholesale' className='text-amber-700 hover:underline'>wholesale buying</Link> after validation.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Documentation-Heavy Buyers</h4>
          <p className='text-sm text-gray-700'>
            Singapore buyers usually care less about romantic origin storytelling and more about documents that reconcile cleanly. Packing list, bill of lading, phytosanitary certificate, lot specs, and permit timing all have to align. Exporters with weak documentation lose the market quickly.
          </p>
        </div>
      </div>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Buyer Persona: Two Singapore Models, Two Very Different Economics</h4>
        <p className='text-sm text-gray-700'>
          A two-cafe specialty roaster in Tanjong Pagar may only need 25 to 40 bags each quarter and will value low-risk LCL shipments, fast permit filing, and rotating single-origin menu options. A regional distributor operating from Jurong, by contrast, may import a mixed 20-foot container, keep it in an FTZ or approved warehouse, and release stock across Singapore, Malaysia, and Indonesia in stages. Both buyers want Ethiopian coffee, but only one should pay local GST immediately.
        </p>
      </div>

      <h3 id='compliance-workflow' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBuildingOffice className='w-8 h-8 text-amber-600' />
        2. How to Import Ethiopian Coffee to Singapore
      </h3>

      <p className='my-4'>
        Singapore&apos;s official workflow is sequential, not optional. The government <a href='https://licensing.gobusiness.gov.sg/e-adviser/imports-and-exports' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>Guide to Import, Export and Transhipment</a> starts with Customs Account activation, then HS classification, licensing, declaring-agent setup, GIRO, and finally the permit itself. Buyers who try to jump straight to freight booking usually discover they are missing the compliance layer needed to clear cargo.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Step</th>
              <th className='p-3 text-left font-bold'>What It Means in Practice</th>
              <th className='p-3 text-left font-bold'>Why It Matters</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>1. Activate Customs Account</td>
              <td className='p-3'>Open the Customs Account tied to your UEN through TradeNet, or appoint a qualified declaring agent to handle filings.</td>
              <td className='p-3'>No Customs Account means no permit application and no legal import movement.</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>2. Confirm HS and control status</td>
              <td className='p-3'>Use the HS checker to confirm the product classification and whether the shipment triggers any competent-authority controls.</td>
              <td className='p-3'>Wrong classification creates delays, wrong taxes, and document mismatches.</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>3. Complete SFA registration</td>
              <td className='p-3'>The <a href='https://licensing.gobusiness.gov.sg/licence-directory/sfa/registration-to-import-processed-food-products-and-food-appliances' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>SFA processed food import registration</a> currently shows one working day of processing, one-year validity, and no application fee.</td>
              <td className='p-3'>Coffee does not face meat or fish licensing, but the food-import registration layer still matters for a compliant setup.</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>4. Set up DA and payment rails</td>
              <td className='p-3'>Register or appoint a declaring agent and complete GIRO or other payment arrangements for taxes, fees, and charges.</td>
              <td className='p-3'>This is what lets permits move from theory into actual declarations and release.</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>5. File each Customs Permit</td>
              <td className='p-3'>Apply through TradeNet for every shipment, regardless of whether the coffee is controlled or non-dutiable.</td>
              <td className='p-3'>Cargo cannot clear without the permit.</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>6. Retain records</td>
              <td className='p-3'>Keep invoices, permits, transport documents, and supporting trade records for five years.</td>
              <td className='p-3'>Singapore Customs expects retrieval discipline, especially for recurring importers and re-exporters.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        The operational shortcut is simple. If you are a new buyer, do not build your first shipment around the assumption that you will “figure out the paperwork later.” Set up the Singapore compliance stack before you negotiate shipment timing. It avoids demurrage, rushed document corrections, and expensive last-mile storage once the container arrives.
      </p>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700'>
          <span className='font-semibold'>Practical sequence:</span> lock your UEN and Customs Account first, confirm whether you will file yourself or through a declaring agent second, then align the exporter&apos;s document set with the intended import path. The exporter should know before shipment whether the coffee will enter local customs territory immediately or remain under a hub model.
        </p>
      </div>

      <h3 id='gst-and-duties' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='w-8 h-8 text-amber-600' />
        3. GST, Duties, and Free Trade Zone Planning
      </h3>

      <p className='my-4'>
        The tax side is where Singapore becomes strategically interesting. According to <a href='https://www.iras.gov.sg/taxes/goods-services-tax-(gst)/claiming-gst-(input-tax)/importing-of-goods' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>IRAS guidance on importing goods</a>, import GST is generally payable on the total of the CIF value, all duties payable, and incidental charges. The current GST rate is 9%.
      </p>

      <p className='my-4'>
        The good news for coffee buyers is that green coffee is not in Singapore&apos;s four broad categories of dutiable goods. AskGov, on behalf of Singapore Customs, identifies those categories as liquor, tobacco products, motor vehicles, and petroleum products. In practical terms, Ethiopian green coffee enters Singapore as a non-dutiable product, but still attracts GST unless the shipment remains outside customs territory under a qualifying arrangement.
      </p>

      <div className='grid md:grid-cols-3 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Direct Local Import</h4>
          <p className='text-sm text-gray-700'>
            Best for roasters who will roast or sell in Singapore immediately. GST is payable at import, then recoverable subject to local tax position and permit documentation.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>FTZ or Zero-GST Storage</h4>
          <p className='text-sm text-gray-700'>
            Best for traders and distributors. IRAS explicitly notes that goods landing in a Free Trade Zone or imported directly into a Zero-GST or licensed warehouse do not trigger immediate import GST while they remain outside customs territory.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Re-Export Hub Model</h4>
          <p className='text-sm text-gray-700'>
            Best when Singapore is your inventory and consolidation point rather than your final consumption market. It improves working-capital control, especially on mixed-origin stock heading to multiple ASEAN buyers.
          </p>
        </div>
      </div>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Where Buyers Usually Misprice Singapore</h4>
        <p className='text-sm text-gray-700'>
          Many first-time buyers assume Singapore is “duty free,” then stop their analysis there. That is incomplete. The real question is not duty. It is whether GST crystallizes on arrival, whether you can suspend it under an approved structure, and whether the extra warehousing and handling costs are justified by faster regional resale. When buyers answer those three questions upfront, Singapore becomes a controlled trade platform instead of an expensive convenience play.
        </p>
      </div>

      <h3 id='shipment-design' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTruck className='w-8 h-8 text-amber-600' />
        4. Shipment Design and Document Stack
      </h3>

      <p className='my-4'>
        Sea freight from Djibouti to Singapore usually works best when the buyer chooses the shipment design to match the operating model, not just the cheapest quoted freight rate. Small specialty roasters often need LCL or palletized arrivals. Multi-market traders need mixed containers that can be split on release. Full-container buying only makes sense once the importer already knows who will consume the coffee and under what timing.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Shipment Format</th>
              <th className='p-3 text-left font-bold'>Typical Fit</th>
              <th className='p-3 text-left font-bold'>Trade-Off</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>20 to 40 bags via LCL</td>
              <td className='p-3'>New specialty roasters, limited-edition retail bags, pilot menu launches, and first-cycle sample-to-order validation.</td>
              <td className='p-3'>Highest logistics cost per kilogram, but the lowest commitment and the easiest inventory risk profile.</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>80 to 160 bags consolidated</td>
              <td className='p-3'>Multi-site roasters, hotel groups, and distributors testing two or three Ethiopian profiles at once.</td>
              <td className='p-3'>Better unit freight cost, but still requires tight permit and storage coordination.</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Full 20-foot container</td>
              <td className='p-3'>Regional distributors, contract roasters, or serious buyers ready to scale beyond sample-stage buying.</td>
              <td className='p-3'>Best landed cost per kilogram, but only when sell-through timing is already mapped.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Document Stack That Should Match Every Shipment</h4>

      <ul className='list-disc pl-6 space-y-2 my-4 text-sm'>
        <li><span className='font-semibold'>Commercial invoice and packing list:</span> Must match the permit declaration, bag count, weights, and Incoterm precisely.</li>
        <li><span className='font-semibold'>Bill of lading:</span> Should reflect the importer, consignee, and release model agreed before sailing.</li>
        <li><span className='font-semibold'>Phytosanitary certificate:</span> Required on the export side and part of the clean food-import file.</li>
        <li><span className='font-semibold'>Certificate of origin and coffee documentation:</span> Useful for traceability, banking, and downstream buyer confidence.</li>
        <li><span className='font-semibold'>Lot specification sheet:</span> Grade, process, screen, moisture, defects, and cupping notes should be settled before dispatch, not after arrival.</li>
      </ul>

      <p className='my-4'>
        Keep the Ethiopia-side explanation short in this article. Singapore buyers do not need a repeated ECX explainer on every page. If they want the full sourcing-channel distinction, direct them to our <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX guide</Link>. If they are still deciding how much to buy, send them to our <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>MOQ guide for Ethiopian coffee</Link> and our <Link href='/ordering-info' className='text-amber-700 hover:underline'>ordering information page</Link>.
      </p>

      <h3 id='landed-cost' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        5. Landed Cost Math for Singapore Buyers
      </h3>

      <p className='my-4'>
        The cost question is not “what is the FOB price?” It is “what does one kilogram cost by the time the coffee is legally available for the buyer&apos;s intended use?” That answer changes sharply based on shipment size and whether the lot enters local customs territory immediately.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Illustrative Line Item</th>
              <th className='p-3 text-left font-bold'>Specialty Roaster Trial Lot</th>
              <th className='p-3 text-left font-bold'>Regional Hub Container</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Volume</td>
              <td className='p-3'>30 bags / 1,800 kg</td>
              <td className='p-3'>320 bags / 19,200 kg</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Illustrative FOB</td>
              <td className='p-3'>US$14,940</td>
              <td className='p-3'>US$145,920</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Ocean freight and handling</td>
              <td className='p-3'>US$2,250</td>
              <td className='p-3'>US$3,800</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Insurance</td>
              <td className='p-3'>US$45</td>
              <td className='p-3'>US$438</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Permit, DA, local charges</td>
              <td className='p-3'>US$420</td>
              <td className='p-3'>US$1,250</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Import GST at 9%</td>
              <td className='p-3'>US$1,589</td>
              <td className='p-3'>US$13,627</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Illustrative landed total</td>
              <td className='p-3 font-bold'>US$19,244</td>
              <td className='p-3 font-bold'>US$165,035</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Illustrative landed cost per kg</td>
              <td className='p-3 font-bold'>US$10.69/kg</td>
              <td className='p-3 font-bold'>US$8.60/kg</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Best use case</td>
              <td className='p-3'>Menu testing, specialty retail, small-batch roasting</td>
              <td className='p-3'>Warehouse stocking, re-export, regional wholesale</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4 text-sm text-gray-700'>
        These figures are illustrative, not live quotes. Their purpose is to show how sharply the unit economics improve once a buyer moves from LCL experimentation into full-container buying. They also show why GST timing matters. If the hub model legitimately suspends GST while the coffee remains outside customs territory, the importer protects working capital and can release stock against actual downstream demand.
      </p>

      <h3 id='hub-strategy' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineGlobeAlt className='w-8 h-8 text-amber-600' />
        6. When Singapore Beats Direct Shipment
      </h3>

      <p className='my-4'>
        The strongest Singapore strategy is not “always route through Singapore.” It is “use Singapore only when it creates real speed, financing, or market-access advantages.” Buyers who apply that filter make better decisions and avoid adding one unnecessary logistics layer.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2 flex items-center gap-2'>
            <HiOutlineCheckCircle className='text-green-700' />Use Singapore When...
          </h4>
          <ul className='space-y-2 text-sm text-gray-700'>
            <li>You are supplying several ASEAN markets from one inventory point.</li>
            <li>You need English-language contracts, banking comfort, and documentation discipline.</li>
            <li>You want to release mixed-origin stock in smaller parcels instead of one-country container drops.</li>
            <li>You are building a premium brand where speed and consistency matter more than absolute lowest freight cost.</li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2 flex items-center gap-2'>
            <HiOutlineMapPin className='text-amber-700' />Ship Direct When...
          </h4>
          <ul className='space-y-2 text-sm text-gray-700'>
            <li>Your end buyer sits in one market and already buys enough to fill a container predictably.</li>
            <li>Singapore storage, local handling, and secondary freight erase the hub advantage.</li>
            <li>The destination market has a cleaner import regime for the exact buyer profile you serve.</li>
            <li>You are trading on lowest landed price rather than flexibility, speed, or portfolio optionality.</li>
          </ul>
        </div>
      </div>

      <div className='bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg my-6'>
        <h4 className='font-bold text-lg mb-3'>Case Study: Singapore as a Staging Market, Not the Final Market</h4>
        <p className='text-sm text-gray-700'>
          Consider a distributor selling Ethiopian coffee into boutique roasters across Singapore, Kuala Lumpur, and Jakarta. Direct shipment into each market would require separate document timing, separate buffering stock, and separate supplier coordination. A Singapore staging model can make sense if the buyer can keep mixed stock close to customers, release it in smaller blocks, and avoid immediate GST crystallization on goods meant for re-export. If the same buyer already has one confirmed 20-foot destination for each market, direct shipment wins instead.
        </p>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Need Ethiopian Coffee Positioned for Singapore or ASEAN Buyers?</h4>
        <p className='my-2'>
          We help buyers match shipment size, documentation, and origin profile to the way they actually sell. That includes local specialty roasting programs, mixed-origin wholesale supply, and regional hub models built around Singapore.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>
            View Offerings
          </Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            Request Samples
          </Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            How to Order
          </Link>
        </div>
      </div>

      <section id='faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900'>Frequently Asked Questions</h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Do I need SFA registration to import Ethiopian green coffee into Singapore?</h4>
            <p className='text-sm text-gray-600'>
              In practice, yes. Singapore food importers typically complete the SFA registration used for processed food imports before trading. Coffee does not carry the extra licensing burden attached to meat or fish products, but the registration layer, Customs Account setup, and permit workflow still need to be in place before cargo arrives.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Is import GST payable if I store the coffee in a Free Trade Zone?</h4>
            <p className='text-sm text-gray-600'>
              IRAS states that import GST is generally not triggered while goods remain in a Free Trade Zone or are imported directly into an approved Zero-GST or licensed warehouse without entering customs territory. Once the coffee is released into local customs territory, the GST event usually occurs.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What shipment size makes sense for a Singapore specialty roaster?</h4>
            <p className='text-sm text-gray-600'>
              Most first-cycle Singapore roasters should start with LCL or pallet-sized lots unless monthly sell-through is already proven. The freight cost per kilogram is higher, but the inventory risk is lower. Full-container economics only become superior once the buyer has stable demand across cafes, wholesale, or regional resale channels.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>When should I use Singapore as a hub instead of shipping direct to another ASEAN market?</h4>
            <p className='text-sm text-gray-600'>
              Use Singapore when one inventory point can serve several nearby buyers, when documentation quality and financing flexibility matter, or when you need to release stock in stages. Ship direct when one destination already absorbs full-container volume and the extra Singapore handling layer would only add cost.
            </p>
          </div>
        </div>
      </section>

      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing and Trade Mechanics</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>Sourcing Green Coffee from Ethiopia: Importer&apos;s Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process: A Buyer&apos;s Guide</Link></li>
              <li>&bull; <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export Guide</Link></li>
              <li>&bull; <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Ethiopian Coffee MOQ Guide for Importers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Asian Market Guides</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-india' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to India: Buyer&apos;s Guide</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-china' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to China</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-japan' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to Japan</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-south-korea' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to South Korea</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published {date}. Written by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter working with cooperatives, washing stations, and trusted sourcing relationships across Ethiopia&apos;s major coffee regions.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot;{' '}
          <Link href='/ethiopian-coffee-exporter' className='underline'>Export Services</Link> &middot;{' '}
          <Link href='/about' className='underline'>About</Link> &middot;{' '}
          <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}
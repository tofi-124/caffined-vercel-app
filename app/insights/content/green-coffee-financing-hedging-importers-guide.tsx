import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineCurrencyDollar,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineBanknotes,
  HiOutlineGlobeAlt,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineCheckCircle,
  HiOutlineExclamationTriangle,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function GreenCoffeeFinancingHedgingImportersGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      {/* H1 TITLE */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>{title}</h1>

      {/* SUBTITLE */}
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        A practical framework for managing coffee price risk, securing trade finance, and protecting your margins when importing green coffee.
      </h2>

      {/* HERO IMAGE */}
      <figure>
        <figcaption className='font-inconsolata my-2 text-sm text-gray-500'>
          Green coffee trade involves layered financial risk. A structured hedging approach protects importers from price swings and cash flow gaps. Photo: Ethio Coffee Import and Export PLC.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Green coffee beans in GrainPro bags at an Ethiopian export warehouse, representing coffee trade finance and price hedging for importers'
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
        <span className='ml-2'>Trade Guidance / Pricing / Risk Management / Importer Resources</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-2 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0' /> Key Takeaway
        </p>
        <p className='text-sm leading-relaxed'>
          Green coffee price hedging is not speculative trading. It is the practice of locking in known costs so your business can price roasted coffee with confidence. The three core tools (fixed-price forward contracts, differential basis contracts, and call options) each suit different buyer profiles and risk tolerances. Combined with disciplined trade finance selection and currency risk management, they form a complete risk framework any importer can apply from their first container.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#why-green-coffee-price-risk-is-different' className='text-amber-700 hover:underline'>1. Why Green Coffee Price Risk Is Different</a></li>
          <li><a href='#hedging-fundamentals' className='text-amber-700 hover:underline'>2. Hedging Green Coffee Prices: The Fundamentals</a></li>
          <li><a href='#futures-and-options' className='text-amber-700 hover:underline'>3. Using Coffee Futures and Options</a></li>
          <li><a href='#trade-finance' className='text-amber-700 hover:underline'>4. Trade Finance Instruments Beyond Letters of Credit</a></li>
          <li><a href='#currency-risk' className='text-amber-700 hover:underline'>5. Currency Risk: The Overlooked Exposure</a></li>
          <li><a href='#integrated-framework' className='text-amber-700 hover:underline'>6. An Integrated Risk Management Framework</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>7. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRO PARAGRAPHS */}
      <p className='my-4'>
        A container of washed Yirgacheffe G1 priced at $9.48/kg FOB represents a real financial commitment long before it clears customs in your port. Between the moment you confirm an order and the moment you sell roasted bags to your wholesale accounts, three to five months can pass. During that window, the ICE Coffee "C" index can move 30 to 50 cents per pound, your domestic currency can shift several percent against the US dollar, and your working capital sits locked in transit.
      </p>
      <p className='my-4'>
        Most green coffee importers accept this exposure by default, treating price risk as the cost of doing business. The importers who grow into durable, scalable operations do the opposite: they map their exposures, choose the right instrument to manage each one, and build cost certainty into their pricing model before committing to a purchase.
      </p>
      <p className='my-4'>
        This guide covers every layer of that process, from understanding how the ICE futures market connects to the Ethiopian Commodity Exchange to the practical mechanics of a call option, pre-export warehouse receipt finance, and forward FX contracts.
      </p>

      {/* SECTION 1 */}
      <h2 id='why-green-coffee-price-risk-is-different' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineChartBar className='inline mr-2 text-amber-600' /> 1. Why Green Coffee Price Risk Is Different
      </h2>

      <h3 className='text-xl font-bold mt-6 mb-2'>Coffee's Price Volatility in Numbers</h3>
      <p className='my-4'>
        Coffee is one of the most volatile agricultural commodities on earth. The ICE Arabica futures contract (the "C" contract) traded around 110 US cents per pound through 2019, topped 330 cents in 2022, and reached new multi-decade highs above 350 cents in early 2026. That is a threefold swing in under seven years. Within a single crop year, 20 to 30 cent moves are routine.
      </p>
      <p className='my-4'>
        For an importer buying a 20-foot container (approximately 275 bags of 60 kg, or 16,500 kg of green coffee), a 20 cent per pound move translates to roughly $7,000 in price exposure on a single shipment. At current price levels, that can represent 15 to 20 percent of the total cargo value. Few other raw materials expose a small business to that kind of swing on a single purchase.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-2'>How ICE Coffee "C" Futures Set the Global Benchmark</h3>
      <p className='my-4'>
        The ICE Coffee C futures contract, traded on the Intercontinental Exchange in New York, is the global price benchmark for Arabica coffee. Each standard contract covers 37,500 pounds (approximately 17,000 kg) of green coffee. Prices are quoted in US cents per pound. The exchange publishes active contract months roughly every two months (March, May, July, September, December), and physical delivery can occur when a contract expires.
      </p>
      <p className='my-4'>
        Most participants never take or make physical delivery. Instead, they buy and sell contract positions as prices move, closing out before expiry. Exporters and large traders use the C market to lock in sell prices for future harvests. Importers and roasters use it to lock in buy prices for future purchases. The difference between the futures price and the actual physical price paid for a specific-origin lot is called the differential.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-2'>Ethiopian Coffee and the ECX: A Different Pricing Engine</h3>
      <p className='my-4'>
        Ethiopian coffee is not sold directly at the C-market price. It is sold through the Ethiopia Commodity Exchange (ECX), which sets its own floor prices based on domestic auction results, quality grade, and regional supply-demand conditions. The FOB price you pay for Ethiopian green coffee is an ECX-derived price, not simply "C-market plus a differential."
      </p>
      <p className='my-4'>
        This matters for hedging because the correlation between the ICE C price and Ethiopian FOB prices is real but imperfect. When the C-market rallies sharply, Ethiopian export prices generally move upward, but the ECX can lag the C-market or move at a different magnitude depending on local harvest conditions and policy. If you hedge Ethiopian coffee exposure purely through ICE futures, you are taking on what traders call "basis risk": the risk that your hedge moves differently from your actual price.
      </p>
      <p className='my-4'>
        For most buyers of Ethiopian specialty grades (G1/G2 lots), the most reliable hedge is not a futures position but a well-structured physical contract directly with your exporter. The sections below cover both approaches.
      </p>

      {/* SECTION 2 */}
      <h2 id='hedging-fundamentals' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineShieldCheck className='inline mr-2 text-amber-600' /> 2. Hedging Green Coffee Prices: The Fundamentals
      </h2>

      <p className='my-4'>
        Hedging in this context means entering a financial or contractual arrangement that moves in the opposite direction to your price exposure. If prices rise and your unprotected position loses value, your hedge gains value (or locks in a known price), offsetting the loss. Hedging is the elimination of uncertainty, not the pursuit of a lower price.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-2'>Fixed-Price Forward Contracts: The Simplest Hedge</h3>
      <p className='my-4'>
        A fixed-price forward contract is an agreement between you and your exporter to buy a specific volume of coffee at a specific price, for delivery at a specific future date. Both parties accept that price regardless of how the market moves between signing and delivery.
      </p>
      <p className='my-4'>
        This is the most commonly used hedge for Ethiopian specialty coffee buyers, and for good reason. It requires no futures account, no margin calls, and no financial intermediary beyond your exporter. It works because the exporter, once they have a signed fixed-price contract, can manage their own price risk on the ECX side.
      </p>
      <div className='bg-amber-50 p-5 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold mb-2 text-amber-800 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-xl' /> Buyer Tip: Forward Contract Windows
        </h4>
        <p className='text-sm'>
          Ethiopian exporters typically offer fixed-price forward contracts for delivery 60 to 120 days ahead. Prices are quoted FOB Djibouti in USD. Lock in your price as early as your production schedule allows. Waiting for a "better price" is a form of speculation: you are betting on a market direction. Fixed-price contracts let you plan your roasted coffee margins with certainty.
        </p>
      </div>

      <h3 className='text-xl font-bold mt-6 mb-2'>Differential (Basis) Contracts: Separating the Components</h3>
      <p className='my-4'>
        A differential contract, sometimes called a basis contract, splits the coffee price into two parts: the futures (C-market) component and the differential (origin premium). You fix the differential with your exporter at the time of contracting, but you leave the futures component "open" to be priced later, usually at a date you specify before shipment.
      </p>
      <p className='my-4'>
        This structure is common in conventional Arabica trade but less common for Ethiopian specialty lots, where the ECX governs the price base. However, some experienced Ethiopian exporters with direct sourcing access and established banking relationships can structure differential-compatible contracts for larger buyers.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm text-left border border-gray-200'>
          <thead className='bg-gray-100 font-bold text-dark'>
            <tr>
              <th className='border border-gray-200 px-4 py-2'>Contract Type</th>
              <th className='border border-gray-200 px-4 py-2'>Price Certainty</th>
              <th className='border border-gray-200 px-4 py-2'>Who Bears Market Risk</th>
              <th className='border border-gray-200 px-4 py-2'>Best For</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 text-gray-700'>
            <tr>
              <td className='border border-gray-200 px-4 py-2 font-semibold'>Fixed-Price Forward</td>
              <td className='border border-gray-200 px-4 py-2'>Complete. Both parties locked.</td>
              <td className='border border-gray-200 px-4 py-2'>Neither party (risk eliminated)</td>
              <td className='border border-gray-200 px-4 py-2'>Most importers; planning certainty priority</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2 font-semibold'>Differential (Basis)</td>
              <td className='border border-gray-200 px-4 py-2'>Partial. Origin premium is fixed; futures open.</td>
              <td className='border border-gray-200 px-4 py-2'>Buyer bears futures price risk</td>
              <td className='border border-gray-200 px-4 py-2'>Buyers who trade futures or want market exposure</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2 font-semibold'>Spot Purchase</td>
              <td className='border border-gray-200 px-4 py-2'>None. Priced at market on purchase day.</td>
              <td className='border border-gray-200 px-4 py-2'>Buyer bears full market risk</td>
              <td className='border border-gray-200 px-4 py-2'>Opportunistic buying; small or urgent orders</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 3 */}
      <h2 id='futures-and-options' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineCurrencyDollar className='inline mr-2 text-amber-600' /> 3. Using Coffee Futures and Options to Hedge Price Risk
      </h2>

      <h3 className='text-xl font-bold mt-6 mb-2'>How ICE Coffee C Futures Work for Importers</h3>
      <p className='my-4'>
        If you buy a differential contract or simply want to hedge your general exposure to coffee price movements, you can do so through ICE Coffee C futures. You would open a long futures position (agreeing to buy coffee at today's futures price for a future delivery month) to offset the risk that prices rise before your physical purchase is priced.
      </p>
      <p className='my-4'>
        For a business without a futures brokerage account and margin facility, this is a significant operational step. Futures positions require a margin deposit (typically 5 to 10 percent of contract value at current prices, meaning $15,000 to $30,000 per contract), and the account is marked-to-market daily. If prices move against your position before you close it, you will receive a margin call and must post additional funds. This is a real cost and a liquidity management challenge.
      </p>
      <p className='my-4'>
        For buyers importing fewer than three to four 20-foot containers per season, the complexity and capital requirements of a direct futures position are rarely justified. Fixed-price forward contracts with your exporter achieve the same outcome without a brokerage relationship. For buyers importing larger volumes, or those who operate on differential contracts, a futures relationship becomes worth establishing.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-2'>Call Options: Capping Your Price Ceiling</h3>
      <p className='my-4'>
        A call option gives you the right, but not the obligation, to buy a coffee futures contract at a set price (the strike price) on or before a set date (the expiry). You pay a premium upfront to purchase this right. If prices rise above your strike price, your option gains value, offsetting the higher cost of your physical coffee. If prices stay below your strike, your option expires worthless, meaning you buy your physical coffee at the lower market price, and the downside is limited to the premium you paid.
      </p>
      <p className='my-4'>
        Call options are the instrument of choice when you want a price ceiling without surrendering the benefit if prices fall. The cost of an at-the-money call option on ICE Coffee C futures typically runs 3 to 8 cents per pound depending on time to expiry and market volatility, which at current price levels represents roughly 1 to 2 percent of the cargo value per contract month.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold mb-3 text-dark flex items-center gap-2'>
          <HiOutlineChartBar className='text-amber-600 text-xl' /> Options vs. Forward Contracts: A Quick Comparison
        </h4>
        <p className='text-sm mb-2'><span className='font-semibold'>Fixed-price forward contract:</span> Locks in your price completely. If prices fall, you pay the locked price anyway (you miss the upside). No premium cost. Best for most specialty importers.</p>
        <p className='text-sm mb-2'><span className='font-semibold'>Call option:</span> Caps your maximum cost but lets you benefit if prices fall. Costs a premium (1-2% of cargo value). Best for buyers who want protection but maintain flexibility.</p>
        <p className='text-sm'><span className='font-semibold'>No hedge:</span> You pay whatever the market price is on your pricing date. Maximum flexibility but maximum exposure. Only rational if you can pass price increases directly to customers within days.</p>
      </div>

      <h3 className='text-xl font-bold mt-6 mb-2'>When to Hedge and When Not To</h3>
      <p className='my-4'>
        Hedging makes most sense when: your margins are thin relative to price volatility; you have forward sales commitments to roasting customers at fixed prices; your order cycle creates a gap of 60 days or more between committing to buy and your ability to reprice to customers; and the cost of hedging (premium or locked-in price) is less than the margin risk you are eliminating.
      </p>
      <p className='my-4'>
        Hedging adds less value when: you purchase spot and sell spot with no forward commitments; your customer relationships allow immediate pass-through of price changes; or you operate on a very small scale where transaction costs and complexity outweigh the benefit.
      </p>

      {/* SECTION 4 */}
      <h2 id='trade-finance' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineBanknotes className='inline mr-2 text-amber-600' /> 4. Trade Finance Instruments Beyond Letters of Credit
      </h2>

      <p className='my-4'>
        The <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='underline font-bold'>Ethiopian coffee contracts and payment terms guide</Link> covers the mechanics of letters of credit (LC) and documentary collections (CAD/D/P) in detail. Those instruments manage counterparty risk: reducing the chance that either buyer or seller fails to perform. This section covers a different problem: managing the gap between when you pay and when you receive revenue from selling roasted coffee.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-2'>Working Capital: How Long Your Money Is Locked Up</h3>
      <p className='my-4'>
        A typical Ethiopian coffee transaction locks up capital for 90 to 150 days from the time payment is made to the exporter to the time roasted coffee revenue is received. The table below shows a realistic timeline for a container sold on a 30-day payment cycle to roasters:
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm text-left border border-gray-200'>
          <thead className='bg-gray-100 font-bold text-dark'>
            <tr>
              <th className='border border-gray-200 px-4 py-2'>Stage</th>
              <th className='border border-gray-200 px-4 py-2'>Duration</th>
              <th className='border border-gray-200 px-4 py-2'>Cumulative Days</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 text-gray-700'>
            <tr>
              <td className='border border-gray-200 px-4 py-2'>Order confirmation to shipment (production, stuffing, booking)</td>
              <td className='border border-gray-200 px-4 py-2'>20–35 days</td>
              <td className='border border-gray-200 px-4 py-2'>Day 0–35</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2'>Ocean transit (e.g., Djibouti to Rotterdam or New York)</td>
              <td className='border border-gray-200 px-4 py-2'>25–35 days</td>
              <td className='border border-gray-200 px-4 py-2'>Day 35–70</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2'>Port clearance, customs, inland delivery</td>
              <td className='border border-gray-200 px-4 py-2'>5–15 days</td>
              <td className='border border-gray-200 px-4 py-2'>Day 70–85</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2'>QC, cupping, release to storage or roaster</td>
              <td className='border border-gray-200 px-4 py-2'>5–10 days</td>
              <td className='border border-gray-200 px-4 py-2'>Day 85–95</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2'>Roasting customer payment (net 30 terms)</td>
              <td className='border border-gray-200 px-4 py-2'>30 days</td>
              <td className='border border-gray-200 px-4 py-2'>Day 95–125</td>
            </tr>
            <tr className='bg-gray-50 font-semibold'>
              <td className='border border-gray-200 px-4 py-2'>Total capital cycle (payment out to revenue in)</td>
              <td className='border border-gray-200 px-4 py-2' colSpan={2}>90–125 days</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        On a $100,000 shipment with a 7% annual cost of capital, 110 days of locked working capital costs approximately $2,100. At $200,000, the cost doubles. These are real carrying costs that appear in no line item on a standard landed cost calculator, yet they directly reduce your margin.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-2'>Pre-Export and Warehouse Receipt Financing</h3>
      <p className='my-4'>
        Pre-export finance (PXF) is credit extended to an exporter by a bank or development finance institution, secured against forward export contracts. In practice, this means the exporter (not you) raises trade finance, and the cost is reflected in the quoted FOB price. Understanding this is useful because exporters with strong PXF relationships can offer more competitive fixed-price windows and longer forward booking horizons.
      </p>
      <p className='my-4'>
        Warehouse receipt finance is credit extended against certified stocks of green coffee held in a licensed warehouse. Once your container lands and is bonded in an approved warehouse, the warehouse receipt can serve as collateral for a short-term working capital loan from a trade finance bank. This credits your account faster than waiting for your customers to pay, reducing the cash cycle by 30 to 45 days. Not all commodity banks offer this for specialty green coffee, but the Netherlands, Germany, the UK, and the US all have trade finance providers active in this area.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-2'>Supply Chain Finance and Reverse Factoring</h3>
      <p className='my-4'>
        If your downstream customers (specialty roasters, distributors) are creditworthy businesses, you may qualify for a reverse factoring arrangement. A finance provider pays you the invoice value immediately after delivery (minus a small discount fee, typically 0.5 to 1.5 percent annualized), and then collects from your customer on the original payment terms. The net effect is that your cash cycle shortens by 30 to 60 days with minimal cost, financed by your customer's credit standing rather than yours.
      </p>
      <div className='bg-amber-50 p-5 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold mb-2 text-amber-800 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-xl' /> Practical Tip: Accelerate Your Cash Cycle
        </h4>
        <p className='text-sm'>
          Even without a formal finance product, you can tighten your cash cycle by: (1) negotiating partial pre-shipment payment terms with roaster customers who value supply continuity; (2) booking containers earlier in the harvest season when fixed-price validity windows are wider; (3) co-loading (LCL) to ship smaller volumes more frequently rather than waiting to fill an FCL, keeping inventory turnover high. See the <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='underline font-bold'>MOQ guide</Link> for LCL and FCL trade-offs.
        </p>
      </div>

      {/* SECTION 5 */}
      <h2 id='currency-risk' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineGlobeAlt className='inline mr-2 text-amber-600' /> 5. Currency Risk: The Overlooked Exposure
      </h2>

      <h3 className='text-xl font-bold mt-6 mb-2'>Why USD Denomination Does Not Eliminate FX Risk</h3>
      <p className='my-4'>
        Ethiopian green coffee is priced and invoiced in US dollars. If you operate in Canada, the EU, the UK, or Australia, your revenue comes in from local roasters in a non-USD currency. Your buying cost is in USD. Your working capital, staff, and overheads are in your local currency. Any shift in the USD exchange rate between the moment you lock in a purchase price and the moment you collect payment from customers affects your realized margin.
      </p>
      <p className='my-4'>
        A 3 percent move in EUR/USD, quite ordinary over a 90-day period, translates to $3,000 in realized FX losses on a $100,000 cargo for a European importer. On a margin-sensitive specialty purchase, that can equal the entire profit on the shipment.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-2'>Forward FX Contracts</h3>
      <p className='my-4'>
        A forward FX contract locks in a currency exchange rate for a specific future date. Once you know the USD cost of your shipment and the expected delivery date, you can book a forward FX contract with your bank or a specialist FX provider (Wise Business, OFX, Currencies Direct, and similar platforms typically offer tighter spreads than commercial banks for trade-related FX). The contract guarantees you will receive a known amount of local currency when you convert USD payments from customers.
      </p>
      <p className='my-4'>
        Forward FX contracts generally carry no premium; the rate adjustment reflects the interest rate differential between the two currencies. For short tenors (under 90 days), the cost is minimal.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-2'>Natural Hedging in Practice</h3>
      <p className='my-4'>
        If you invoice your roaster customers in USD and pay your operating costs in USD (common for US-based importers), your FX exposure is naturally hedged. The currency of your cost and the currency of your revenue match. No additional instrument is needed.
      </p>
      <p className='my-4'>
        Importers in non-USD markets can achieve partial natural hedging by pricing their green coffee sales lists in USD, passing the FX conversion to each roaster. This is commercially viable in markets where USD invoicing is accepted (common in the UK and some EU markets for B2B green coffee trade), though it may require adjustment for smaller retail roasters who are unaccustomed to USD-denominated invoices.
      </p>

      {/* SECTION 6 */}
      <h2 id='integrated-framework' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineAdjustmentsHorizontal className='inline mr-2 text-amber-600' /> 6. An Integrated Risk Management Framework for Coffee Importers
      </h2>

      <p className='my-4'>
        The goal is a simple, repeatable process you run on every purchase decision. Three steps are enough:
      </p>

      <h3 className='text-xl font-bold mt-6 mb-2'>Step 1: Map Your Exposures</h3>
      <p className='my-4'>
        For each planned purchase, identify your open exposures before committing to anything. Write down: (a) the volume in kilograms; (b) the USD cost if fully priced today; (c) the date range between payment and revenue receipt; (d) the currency your costs are in and the currency your revenue comes in; and (e) whether you have firm forward roaster sales commitments or are buying for speculative inventory.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-2'>Step 2: Prioritize by Size and Probability</h3>
      <p className='my-4'>
        Not every exposure warrants a formal hedge. Rank your risks by dollar impact:
      </p>
      <ul className='list-disc ml-6 space-y-2 text-sm my-4'>
        <li><span className='font-semibold'>Coffee price risk:</span> Almost always the largest exposure. A 10 cent per pound move on a 16,500 kg container equals roughly $3,600. This deserves active management via forward contract or option if your margin is thinner than that.</li>
        <li><span className='font-semibold'>Working capital / financing cost:</span> Meaningful but manageable. Calculate the financing cost of your capital cycle (days outstanding × annual cost of capital ÷ 365). Budget it as a line item in your landed cost.</li>
        <li><span className='font-semibold'>Currency risk:</span> Depends on your market. For USD-functional importers, minimal. For EUR/GBP/CAD/AUD importers, meaningful. Hedge with forward FX on confirmed purchases.</li>
        <li><span className='font-semibold'>Counterparty risk:</span> Managed via contract structure (LC vs. CAD), not financial instruments. See the <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='underline font-bold'>contracts guide</Link> for detail.</li>
        <li><span className='font-semibold'>Quality / rejection risk:</span> Managed via pre-shipment samples, green analysis, and clear contract quality clauses. Outside the scope of financial hedging.</li>
      </ul>

      <h3 className='text-xl font-bold mt-6 mb-2'>Step 3: Choose the Right Instrument for Each Risk</h3>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm text-left border border-gray-200'>
          <thead className='bg-gray-100 font-bold text-dark'>
            <tr>
              <th className='border border-gray-200 px-4 py-2'>Risk</th>
              <th className='border border-gray-200 px-4 py-2'>Instrument</th>
              <th className='border border-gray-200 px-4 py-2'>Typical Cost</th>
              <th className='border border-gray-200 px-4 py-2'>Complexity</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 text-gray-700'>
            <tr>
              <td className='border border-gray-200 px-4 py-2'>Coffee price risk (general)</td>
              <td className='border border-gray-200 px-4 py-2'>Fixed-price forward contract</td>
              <td className='border border-gray-200 px-4 py-2'>0 (priced into FOB)</td>
              <td className='border border-gray-200 px-4 py-2'>Low</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2'>Coffee price risk (ceiling only)</td>
              <td className='border border-gray-200 px-4 py-2'>Call option on ICE C futures</td>
              <td className='border border-gray-200 px-4 py-2'>1–2% of cargo value</td>
              <td className='border border-gray-200 px-4 py-2'>Medium (requires brokerage)</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2'>Working capital gap</td>
              <td className='border border-gray-200 px-4 py-2'>Warehouse receipt finance / reverse factoring</td>
              <td className='border border-gray-200 px-4 py-2'>0.5–1.5% of invoice</td>
              <td className='border border-gray-200 px-4 py-2'>Medium (bank relationship)</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2'>Currency risk (non-USD markets)</td>
              <td className='border border-gray-200 px-4 py-2'>Forward FX contract</td>
              <td className='border border-gray-200 px-4 py-2'>Near-zero for 30–90 day tenors</td>
              <td className='border border-gray-200 px-4 py-2'>Low (bank or FX platform)</td>
            </tr>
            <tr>
              <td className='border border-gray-200 px-4 py-2'>Counterparty / shipment risk</td>
              <td className='border border-gray-200 px-4 py-2'>Letter of credit via accredited bank</td>
              <td className='border border-gray-200 px-4 py-2'>1–3% of LC value</td>
              <td className='border border-gray-200 px-4 py-2'>Medium (bank facility required)</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-200 px-4 py-2'>Cargo loss / damage</td>
              <td className='border border-gray-200 px-4 py-2'>Marine cargo insurance</td>
              <td className='border border-gray-200 px-4 py-2'>0.3–0.5% of CIF value</td>
              <td className='border border-gray-200 px-4 py-2'>Low</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold mb-3 text-dark flex items-center gap-2'>
          <HiOutlineCheckCircle className='text-green-600 text-xl' /> A Note on Costs
        </h4>
        <p className='text-sm'>
          Adding up all the risk management tools above (forward contract: 0, call option: 1.5%, warehouse finance: 1%, forward FX: 0.1%, LC: 2%, marine insurance: 0.4%) gives a theoretical maximum of about 5%. In practice, you will not need every instrument on every shipment. Most buyers using only a fixed-price contract, marine insurance, and a forward FX hedge face a total hedging cost below 0.7% of cargo value. That is well within the premium differential you receive for sourcing traceable Ethiopian specialty grades. See the <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='underline font-bold'>landed cost guide</Link> for a full cost breakdown including these line items.
        </p>
      </div>

      {/* SOURCES */}
      <div className='my-8'>
        <h3 className='text-xl font-extrabold mb-3'>Sources and Further Reading</h3>
        <ul className='list-disc ml-5 space-y-2 text-sm'>
          <li>
            <a href='https://www.ice.com/products/15/Coffee-C-Futures' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>
              Intercontinental Exchange (ICE): Coffee C Futures Contract Specifications
            </a>
          </li>
          <li>
            <a href='https://www.ico.org/coffee_prices.asp' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>
              International Coffee Organization (ICO): Coffee Price Statistics and Historical Data
            </a>
          </li>
          <li>
            <a href='https://www.ecx.com.et/CoffeeCommodity.aspx' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>
              Ethiopia Commodity Exchange (ECX): Coffee Commodity Trading Rules and Grading Standards
            </a>
          </li>
          <li>
            <a href='https://perfectdailygrind.com/2021/04/an-early-history-of-the-c-market-exchanges-and-derivatives-through-history/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>
              Perfect Daily Grind: "An Early History of the C Market: Exchanges and Derivatives Through History"
            </a>
          </li>
          <li>
            <a href='https://www.cbi.eu/market-information/coffee' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>
              Centre for the Promotion of Imports (CBI): Coffee Trade and Price Information for Importers
            </a>
          </li>
        </ul>
      </div>

      {/* FAQ */}
      <section id='faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h2 className='text-2xl font-bold mb-6 text-gray-900'>Frequently Asked Questions About Green Coffee Price Hedging</h2>
        <div className='space-y-6'>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>Do I need a futures account to hedge green coffee prices?</h3>
            <p className='text-sm text-gray-600'>
              No. A fixed-price forward contract with your exporter is the most practical hedge for most importers and requires no brokerage account. Coffee futures accounts are most useful for buyers using differential contracts or importing more than four to five containers per season, where the basis risk and volumes justify the complexity.
            </p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>How does Ethiopian coffee hedging differ from other origins?</h3>
            <p className='text-sm text-gray-600'>
              Ethiopian coffee is priced through the Ethiopia Commodity Exchange, not directly against the ICE Coffee C futures. Hedging via fixed-price forward contracts directly with your Ethiopian exporter is therefore more precise than an ICE futures hedge, which carries basis risk from the ECX-to-C-market price correlation being imperfect.
            </p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>What is a call option and is it worth using for coffee imports?</h3>
            <p className='text-sm text-gray-600'>
              A call option gives you the right to buy a coffee futures contract at a set price, protecting against price spikes while letting you benefit if prices fall. The cost is typically 1 to 2 percent of cargo value. It is most useful when you have forward sales commitments to customers but have not yet locked in your purchase price, and prefer to maintain downside optionality.
            </p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>How long is capital typically tied up in a green coffee import cycle?</h3>
            <p className='text-sm text-gray-600'>
              From payment to the exporter through to receiving payment from your roasting customers, the typical Ethiopian coffee cycle runs 90 to 125 days. This includes 20 to 35 days for pre-shipment, 25 to 35 days ocean transit, 10 to 15 days port clearance and QC, and 30 days customer payment terms. Warehouse receipt finance or reverse factoring can shorten this by 30 to 50 days.
            </p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>Should I invoice my roaster customers in USD or local currency?</h3>
            <p className='text-sm text-gray-600'>
              Invoicing in USD eliminates your FX exposure as an importer outside the US, since your purchase cost is also in USD. However, it transfers FX risk to your customers and may reduce competitiveness with domestic suppliers who quote local currency. A practical middle ground is to quote USD prices and offer a local-currency equivalent at the prevailing rate on invoice date, covered by a forward FX contract you book at purchase time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3'>
          <HiOutlineShieldCheck className='inline mr-2 text-amber-700' />
          Source Premium Ethiopian Coffee With Pricing Certainty
        </h3>
        <p className='my-2 text-sm'>
          Ethio Coffee Import and Export PLC offers fixed-price forward contracts on all offerings, giving you a locked FOB price valid for your planned shipment date. Our 30-year sourcing network across Yirgacheffe, Sidama, Guji, Limu, and other Ethiopian regions means we can offer forward availability on G1 and G2 specialty lots with confidence. Request samples, confirm a price, and plan your roasting calendar without speculating on the market.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>
            View Current Offerings
          </Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            Request Samples or Pricing
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
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Pricing &amp; Trade Finance</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts &amp; Payment Terms Guide</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing for Importers</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost Calculator Guide</Link></li>
              <li>• <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Ethiopian Coffee MOQ Guide: LCL vs. FCL</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Market Intelligence</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/rising-ethiopian-coffee-prices-explained' className='text-amber-700 hover:underline'>Rising Ethiopian Coffee Prices Explained</Link></li>
              <li>• <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export: How It Works</Link></li>
              <li>• <Link href='/insights/specialty-coffee-trends-2026' className='text-amber-700 hover:underline'>Specialty Coffee Trends Defining 2026</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Harvest Calendar for Buyers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Sourcing &amp; Quality</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/micro-lot-ethiopian-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Micro-Lot Ethiopian Coffee: Sourcing &amp; Pricing</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability: Buyer's Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC, an Ethiopian coffee exporter with 30+ years of sourcing relationships across Ethiopia's coffee regions. This article is for educational purposes. Coffee prices, exchange rates, and trade finance terms change frequently; contact us or your trade finance provider for current figures before making purchasing decisions.
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

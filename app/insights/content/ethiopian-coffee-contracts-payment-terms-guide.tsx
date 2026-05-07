import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { ArrowRight } from '@/app/components/Arrow'
import { 
  HiOutlineDocumentText,
  HiOutlineCurrencyDollar,
  HiOutlineScale,
  HiOutlineClipboardDocumentList,
  HiOutlineLightBulb,
  HiOutlineExclamationTriangle,
  HiOutlineCheckCircle,
  HiOutlineGlobeAlt,
  HiOutlineQuestionMarkCircle,
  HiOutlineBuildingLibrary,
  HiOutlineShieldCheck,
  HiOutlineTruck,
  HiOutlineCalculator,
  HiOutlineArrowPath,
  HiOutlineChartBar,
  HiOutlineUserGroup
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopianCoffeeContractsPaymentTerms({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        A practical guide to green coffee contract structures, payment methods, Incoterms, and Ethiopian-specific trade requirements for importers, roasters, and specialty coffee buyers.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Understanding Ethiopian coffee contracts and payment terms is essential for building profitable, long-term sourcing relationships.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian coffee contracts and payment terms guide for green coffee importers'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>

        <figcaption className='font-inconsolata text-xs my-1 text-gray-600'>
          Ethiopian green coffee export documentation and trade contracts.
        </figcaption>
      </figure>

      {/* CATEGORY BADGE */}
      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Trade Guidance / Contracts & Payment / Importers / Green Coffee Buying</span>
      </div>

      {/* FURTHER READING / AUTHORITATIVE LINKS */}
      <div className='my-4 text-sm text-gray-700'>
        <p className='font-semibold mb-1'>Further reading:</p>
        <ul className='list-disc ml-5 space-y-1'>
          <li>
            <a href='https://www.ico.org' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>International Coffee Organization (ICO)</a> - global coffee market reports, composite indicator price, and trade statistics.
          </li>
          <li>
            <a href='https://www.thecoffeeguide.org' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>The Coffee Guide (ITC)</a> - international trade centre reference for coffee contracts, Incoterms, and arbitration.
          </li>
          <li>
            <a href='https://www.greencoffeeassociation.org' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>Green Coffee Association (GCA)</a> - standard contracts and arbitration rules for green coffee traded in the United States.
          </li>
        </ul>
      </div>

      {/* KEY TAKEAWAY BOX */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />
          Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Ethiopian coffee contracts typically follow one of three pricing structures: spot (immediate delivery at current market price), forward/fixed-price (locked price for future delivery), or differential (premium above or below a benchmark). Payment is most commonly handled via irrevocable Letter of Credit (LC) for first-time buyers, with Documentary Collection (CAD) or wire transfer (TT) available for established relationships. The contract type you choose directly affects your cost certainty, risk exposure, and cash flow timing. Choosing the right combination of contract and payment method is the single most important commercial decision an importer makes.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='bg-gray-50 p-6 rounded-lg my-8 border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          What This Guide Covers
        </h3>
        <div className='grid md:grid-cols-2 gap-x-8 gap-y-2'>
          <div>
            <p className='font-bold text-sm mb-2'>Contract Structures</p>
            <ul className='space-y-1.5 text-sm'>
              <li><a href="#why-contracts-matter" className='text-amber-700 hover:underline'>Why Contract Structure Matters</a></li>
              <li><a href="#contract-types" className='text-amber-700 hover:underline'>Types of Green Coffee Contracts</a></li>
              <li><a href="#which-contract" className='text-amber-700 hover:underline'>Which Contract Fits Your Business?</a></li>
              <li><a href="#incoterms" className='text-amber-700 hover:underline'>Incoterms in Ethiopian Coffee Trade</a></li>
            </ul>
          </div>
          <div>
            <p className='font-bold text-sm mb-2'>Payment & Practical Steps</p>
            <ul className='space-y-1.5 text-sm'>
              <li><a href="#payment-methods" className='text-amber-700 hover:underline'>Payment Methods Explained</a></li>
              <li><a href="#ethiopian-specific" className='text-amber-700 hover:underline'>Ethiopian-Specific Considerations</a></li>
              <li><a href="#quality-clauses" className='text-amber-700 hover:underline'>Quality Clauses & Dispute Resolution</a></li>
              <li><a href="#sample-to-contract" className='text-amber-700 hover:underline'>From Sample to Signed Contract</a></li>
              <li><a href="#common-mistakes" className='text-amber-700 hover:underline'>Common Mistakes Importers Make</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* SECTION 1: WHY CONTRACTS MATTER */}
      <h3 id="why-contracts-matter" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineDocumentText className='text-amber-600 flex-shrink-0' />
        Why Contract Structure Matters in Ethiopian Coffee Trade
      </h3>

      <p className='my-4'>
        Every Ethiopian coffee transaction, whether a 10-bag trial lot or a 300-bag full container, is governed by a contract. The contract defines price, quality, quantity, delivery terms, and payment conditions. Getting these terms right protects both buyer and seller. For a full breakdown of <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>minimum order quantities and how they affect contract structure</Link>, see our MOQ guide.
      </p>

      <p className='my-4'>
        For importers buying Ethiopian coffee, the stakes are significant. A single container of specialty-grade Yirgacheffe or Guji can represent $80,000 to $150,000 in committed capital. At these values, the difference between a well-structured contract and a handshake agreement can mean the difference between a successful import and a costly dispute.
      </p>

      <p className='my-4'>
        Ethiopian coffee contracts carry additional complexity that buyers may not encounter when sourcing from other origins. The country's foreign exchange regulations, the role of the Ethiopia Commodity Exchange (ECX), and the evolving direct-export licensing system all shape how contracts are structured. Importers who understand these factors negotiate better terms and avoid delays.
      </p>

      <div className='bg-blue-50 p-5 rounded-lg border border-blue-200 my-6'>
        <p className='font-bold text-blue-800 mb-2 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-blue-600 flex-shrink-0' />
          Why This Topic is Often Overlooked
        </p>
        <p className='text-sm'>
          Most coffee sourcing guides focus on cup quality, processing methods, and origin profiles. Contract and payment mechanics receive far less attention, yet they determine whether a transaction actually closes. Many first-time importers discover contract complexity only after cupping samples and agreeing on a lot, when their exporter sends a proforma invoice with unfamiliar terms. This guide ensures you arrive at that moment prepared.
        </p>
      </div>

      {/* SECTION 2: CONTRACT TYPES */}
      <h3 id="contract-types" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineScale className='text-amber-600 flex-shrink-0' />
        Types of Green Coffee Contracts
      </h3>

      <p className='my-4'>
        Green coffee contracts fall into several categories based on how the price is determined and when delivery occurs. Each type distributes risk differently between buyer and seller. Here are the four main structures used in Ethiopian coffee trade.
      </p>

      {/* Spot Contracts */}
      <h4 className='text-2xl font-bold mt-8 mb-4'>Spot Contracts</h4>

      <p className='my-4'>
        A spot contract is the simplest form of coffee purchase. Both parties agree on a specific price for coffee that is ready for immediate (or near-immediate) shipment. The coffee is typically already milled, graded, and sitting in an export warehouse. Delivery occurs within days or weeks of agreement.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-2 text-green-800'>Advantages</h5>
          <ul className='text-sm space-y-1.5'>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' /> You know exactly what you're buying (sample already approved)</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' /> Fastest delivery timeline</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' /> No exposure to future price movements</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' /> Simple contract terms</li>
          </ul>
        </div>
        <div className='bg-red-50 p-5 rounded-lg border border-red-200'>
          <h5 className='font-bold mb-2 text-red-800'>Disadvantages</h5>
          <ul className='text-sm space-y-1.5'>
            <li className='flex items-start gap-2'><HiOutlineExclamationTriangle className='text-red-600 mt-0.5 flex-shrink-0' /> Price reflects current market conditions (may be high)</li>
            <li className='flex items-start gap-2'><HiOutlineExclamationTriangle className='text-red-600 mt-0.5 flex-shrink-0' /> Limited availability of specific lots</li>
            <li className='flex items-start gap-2'><HiOutlineExclamationTriangle className='text-red-600 mt-0.5 flex-shrink-0' /> No supply security for future needs</li>
            <li className='flex items-start gap-2'><HiOutlineExclamationTriangle className='text-red-600 mt-0.5 flex-shrink-0' /> Less negotiating room on established lots</li>
          </ul>
        </div>
      </div>

      <p className='my-4'>
        Spot purchases work best for importers who need to fill inventory gaps quickly or want to test a new origin before committing to a forward contract. During Ethiopia's main harvest season (November through February), spot availability is highest and prices are often more competitive.
      </p>

      {/* Forward / Fixed-Price Contracts */}
      <h4 className='text-2xl font-bold mt-8 mb-4'>Forward (Fixed-Price) Contracts</h4>

      <p className='my-4'>
        A forward contract locks in a specific price for coffee to be delivered at a future date. The buyer and seller agree on price, quality specifications, quantity, and a delivery window months in advance, sometimes before the coffee is even harvested.
      </p>

      <p className='my-4'>
        In Ethiopian coffee trade, forward contracts are commonly signed between March and October for coffee from the upcoming harvest season. The exporter commits to delivering a defined quantity and quality at the agreed price, regardless of where the market moves in the interim.
      </p>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold mb-2 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />
          Example: Forward Contract in Practice
        </p>
        <p className='text-sm'>
          In June 2025, a German roaster agrees to buy 300 bags of Yirgacheffe Grade 1 washed coffee at $5.80/kg FOB Djibouti, for shipment in January 2026. By the time the coffee ships, the spot market price has risen to $6.40/kg. The roaster benefits from $0.60/kg savings on the total order, roughly $10,800 saved on a single container. If the market had dropped instead, the exporter would have benefited.
        </p>
      </div>

      <p className='my-4'>
        Forward contracts require trust between buyer and seller. If the market rises sharply, the exporter faces pressure to honor the lower locked-in price. If the market falls, the buyer may wish they had waited. A history of honoring contracts in both scenarios is what defines a reliable trading partner.
      </p>

      {/* Differential / Basis Contracts */}
      <h4 className='text-2xl font-bold mt-8 mb-4'>Differential (Basis) Contracts</h4>

      <p className='my-4'>
        A differential contract separates the price into two components: a benchmark (typically the ICE Coffee "C" futures price for Arabica) and a differential (a premium or discount added to that benchmark). The differential is fixed at the time of contract signing, but the final price is not determined until the buyer "fixes" the futures component at a date of their choosing before shipment.
      </p>

      <p className='my-4'>
        For Ethiopian specialty coffee, differentials are almost always positive, meaning buyers pay a premium above the "C" market. High-quality washed Yirgacheffe might carry a differential of +$0.80 to +$1.50/lb above the "C" price, while commercial-grade Jimma might be closer to +$0.10 to +$0.30/lb.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Origin / Grade</th>
              <th className='p-3 text-left'>Typical Differential (USD/lb)</th>
              <th className='p-3 text-left'>Notes</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            <tr className='bg-white'>
              <td className='p-3 font-medium'>Yirgacheffe G1 Washed</td>
              <td className='p-3'>+$0.80 to +$1.50</td>
              <td className='p-3'>Highest premium, strong demand</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-medium'>Guji G1 Natural</td>
              <td className='p-3'>+$0.60 to +$1.20</td>
              <td className='p-3'>Rising demand for naturals</td>
            </tr>
            <tr className='bg-white'>
              <td className='p-3 font-medium'>Sidamo G2 Washed</td>
              <td className='p-3'>+$0.40 to +$0.90</td>
              <td className='p-3'>Good value specialty</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-medium'>Harar G4 Natural</td>
              <td className='p-3'>+$0.20 to +$0.60</td>
              <td className='p-3'>Unique profile, smaller market</td>
            </tr>
            <tr className='bg-white'>
              <td className='p-3 font-medium'>Limu G2 Washed</td>
              <td className='p-3'>+$0.30 to +$0.70</td>
              <td className='p-3'>Consistent quality, balanced cup</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-medium'>Jimma G5 Commercial</td>
              <td className='p-3'>+$0.05 to +$0.25</td>
              <td className='p-3'>High volume, price-driven</td>
            </tr>
          </tbody>
        </table>
        <p className='text-xs text-gray-500 mt-2'>Note: Differentials fluctuate based on supply, demand, and seasonal availability. Figures are indicative ranges based on 2024-2026 trading patterns.</p>
      </div>

      <p className='my-4'>
        Differential contracts are popular among larger importers and trading companies because they allow the buyer to manage futures risk separately from origin quality premiums. Smaller roasters typically prefer fixed-price contracts for their simplicity.
      </p>

      {/* Back-to-Back Contracts */}
      <h4 className='text-2xl font-bold mt-8 mb-4'>Back-to-Back Contracts</h4>

      <p className='my-4'>
        A back-to-back contract is an arrangement where a trading company or intermediary signs matching buy and sell contracts simultaneously. The intermediary purchases from the Ethiopian exporter and sells to the end buyer (often a roaster) on aligned terms. The intermediary earns a margin while reducing counterparty risk for both sides.
      </p>

      <p className='my-4'>
        This structure is common for first-time buyers who lack established relationships with Ethiopian exporters. Companies like Olam, Sucafina, and regional specialty importers frequently operate back-to-back arrangements, providing smaller roasters access to Ethiopian coffee without requiring them to open letters of credit or manage international logistics directly.
      </p>

      {/* Which Contract Type */}
      <h3 id="which-contract" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCalculator className='text-amber-600 flex-shrink-0' />
        Which Contract Type Fits Your Business?
      </h3>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Factor</th>
              <th className='p-3 text-left'>Spot</th>
              <th className='p-3 text-left'>Forward / Fixed</th>
              <th className='p-3 text-left'>Differential</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            <tr className='bg-white'>
              <td className='p-3 font-medium'>Price Certainty</td>
              <td className='p-3'>High (price known at purchase)</td>
              <td className='p-3'>High (locked months ahead)</td>
              <td className='p-3'>Partial (differential fixed, futures float)</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-medium'>Market Risk</td>
              <td className='p-3'>None (settled immediately)</td>
              <td className='p-3'>Both sides bear risk</td>
              <td className='p-3'>Buyer chooses when to fix</td>
            </tr>
            <tr className='bg-white'>
              <td className='p-3 font-medium'>Best For</td>
              <td className='p-3'>Quick fills, trial lots</td>
              <td className='p-3'>Budget planning, stable supply</td>
              <td className='p-3'>Active market managers</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-medium'>Typical Volume</td>
              <td className='p-3'>Any size</td>
              <td className='p-3'>Container+ (275+ bags)</td>
              <td className='p-3'>Multiple containers</td>
            </tr>
            <tr className='bg-white'>
              <td className='p-3 font-medium'>Complexity</td>
              <td className='p-3'>Low</td>
              <td className='p-3'>Medium</td>
              <td className='p-3'>High</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-medium'>Cash Flow Impact</td>
              <td className='p-3'>Immediate outlay</td>
              <td className='p-3'>Payment on shipment</td>
              <td className='p-3'>Flexible timing</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Most importers use a combination of contract types. A common approach: secure 60-70% of annual volume through forward contracts for price stability, then fill the remaining 30-40% with spot purchases as the season progresses and new lots become available. To align your contract timing with Ethiopia&apos;s harvest cycle, consult our <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='underline font-semibold'>Ethiopian coffee harvest calendar and seasonal buying guide</Link>.
      </p>

      {/* SECTION 3: PAYMENT METHODS */}
      <h3 id="payment-methods" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='text-amber-600 flex-shrink-0' />
        Payment Methods and How They Work
      </h3>

      <p className='my-4'>
        Payment is where Ethiopian coffee contracts differ most from purchases in other origins. Ethiopian banking regulations, foreign exchange controls, and the National Bank of Ethiopia's oversight all shape which payment methods are available and how they function in practice.
      </p>

      {/* Letter of Credit */}
      <h4 className='text-2xl font-bold mt-8 mb-4'>Letter of Credit (LC)</h4>

      <p className='my-4'>
        A Letter of Credit is a payment guarantee issued by the buyer's bank, promising to pay the seller upon presentation of specified shipping and quality documents. It is the most common payment method for Ethiopian coffee exports, especially for new trading relationships.
      </p>

      <div className='bg-gray-50 p-5 rounded-lg border border-gray-200 my-6'>
        <p className='font-bold mb-3'>How an LC Works, Step by Step:</p>
        <ol className='text-sm space-y-2 list-decimal ml-5'>
          <li>Buyer and seller agree on contract terms (price, quality, quantity, shipment date).</li>
          <li>Buyer applies to their bank (the "issuing bank") to open an LC in favor of the seller.</li>
          <li>Issuing bank sends the LC to the seller's bank in Ethiopia (the "advising bank").</li>
          <li>Seller ships the coffee and presents documents (bill of lading, phytosanitary certificate, ICO certificate, quality certificate, commercial invoice, packing list) to their bank.</li>
          <li>Seller's bank reviews documents and forwards them to the issuing bank.</li>
          <li>Issuing bank verifies document compliance and releases payment to the seller's bank.</li>
          <li>Buyer receives documents and uses the bill of lading to claim the goods at the destination port.</li>
        </ol>
      </div>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-2 text-green-800'>LC Advantages</h5>
          <ul className='text-sm space-y-1.5'>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' /> Maximum protection for both parties</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' /> Seller guaranteed payment if documents comply</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' /> Buyer only pays after shipment proof</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' /> Preferred by Ethiopian banks and exporters</li>
          </ul>
        </div>
        <div className='bg-red-50 p-5 rounded-lg border border-red-200'>
          <h5 className='font-bold mb-2 text-red-800'>LC Disadvantages</h5>
          <ul className='text-sm space-y-1.5'>
            <li className='flex items-start gap-2'><HiOutlineExclamationTriangle className='text-red-600 mt-0.5 flex-shrink-0' /> Bank fees typically 1-3% of LC value</li>
            <li className='flex items-start gap-2'><HiOutlineExclamationTriangle className='text-red-600 mt-0.5 flex-shrink-0' /> Requires buyer to have credit facility with bank</li>
            <li className='flex items-start gap-2'><HiOutlineExclamationTriangle className='text-red-600 mt-0.5 flex-shrink-0' /> Document discrepancies cause delays</li>
            <li className='flex items-start gap-2'><HiOutlineExclamationTriangle className='text-red-600 mt-0.5 flex-shrink-0' /> Time-consuming to set up (5-10 business days)</li>
          </ul>
        </div>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold mb-2 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />
          Ethiopian LC Requirement
        </p>
        <p className='text-sm'>
          The National Bank of Ethiopia requires that export proceeds be repatriated in foreign currency. For this reason, Ethiopian coffee exporters strongly prefer (and in many cases require) payment via irrevocable LC from a reputable international bank. First-time buyers should expect LC as the default and plan accordingly by establishing a trade finance facility with their bank before beginning negotiations.
        </p>
      </div>

      {/* Documentary Collection */}
      <h4 className='text-2xl font-bold mt-8 mb-4'>Documentary Collection (CAD / D/P)</h4>

      <p className='my-4'>
        Documentary Collection, often called "Cash Against Documents" (CAD) or "Documents Against Payment" (D/P), is a simpler alternative to an LC. The seller ships the coffee, then sends shipping documents through their bank to the buyer's bank. The buyer's bank releases the documents only after the buyer pays.
      </p>

      <p className='my-4'>
        Unlike an LC, there is no bank guarantee of payment. The buyer's bank acts as a collection agent, not a guarantor. This makes CAD cheaper (lower bank fees) but riskier for the seller. Ethiopian exporters typically offer CAD terms only to established buyers with a proven payment history, usually after two or more successful LC transactions.
      </p>

      <div className='bg-amber-50 p-5 rounded-lg border border-amber-200 my-6'>
        <p className='font-bold mb-2'>CAD Cost Savings vs. LC:</p>
        <p className='text-sm'>
          On a $100,000 container, LC fees for the buyer typically run $1,500 to $3,000 (issuing bank charges plus advising bank fees). CAD collection fees are usually $200 to $500 total. Over multiple containers per year, switching from LC to CAD can save $5,000 to $10,000 annually. Building the trust to earn CAD terms is a worthwhile long-term investment.
        </p>
      </div>

      {/* Wire Transfer */}
      <h4 className='text-2xl font-bold mt-8 mb-4'>Telegraphic Transfer (TT / Wire Transfer)</h4>

      <p className='my-4'>
        A telegraphic transfer is a direct bank-to-bank wire payment. It is the fastest and cheapest payment method, but it carries the most risk for whichever party pays first.
      </p>

      <p className='my-4'>
        TT payments in Ethiopian coffee trade are structured in several ways:
      </p>

      <ul className='list-disc ml-5 my-4 space-y-2 text-sm'>
        <li><span className='font-bold'>TT in advance (prepayment):</span> Buyer wires the full amount before shipment. Maximum risk for the buyer. Rare in new relationships.</li>
        <li><span className='font-bold'>Partial prepayment + balance on shipment:</span> Buyer wires 30-50% upfront, remainder upon presentation of shipping documents. Common for established partners.</li>
        <li><span className='font-bold'>TT against documents (post-shipment):</span> Seller ships, sends documents directly to the buyer, and the buyer wires payment. Maximum risk for the seller.</li>
      </ul>

      <p className='my-4'>
        Wire transfer is most common for small sample orders (5-20 bags), where the transaction value does not justify LC costs, and between long-standing trading partners who have built mutual trust over years of business.
      </p>

      {/* Payment Comparison Table */}
      <h4 className='text-2xl font-bold mt-8 mb-4'>Payment Method Comparison</h4>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Method</th>
              <th className='p-3 text-left'>Cost</th>
              <th className='p-3 text-left'>Buyer Risk</th>
              <th className='p-3 text-left'>Seller Risk</th>
              <th className='p-3 text-left'>When Used</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            <tr className='bg-white'>
              <td className='p-3 font-medium'>Letter of Credit (LC)</td>
              <td className='p-3'>1-3% of value</td>
              <td className='p-3'>Low</td>
              <td className='p-3'>Low</td>
              <td className='p-3'>First orders, large volumes</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-medium'>CAD / D/P</td>
              <td className='p-3'>$200-500 flat</td>
              <td className='p-3'>Low</td>
              <td className='p-3'>Medium</td>
              <td className='p-3'>Repeat buyers, mid-volumes</td>
            </tr>
            <tr className='bg-white'>
              <td className='p-3 font-medium'>TT (Wire Transfer)</td>
              <td className='p-3'>$25-50 per transfer</td>
              <td className='p-3'>Varies</td>
              <td className='p-3'>Varies</td>
              <td className='p-3'>Samples, trusted partners</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 4: ETHIOPIAN-SPECIFIC */}
      <h3 id="ethiopian-specific" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBuildingLibrary className='text-amber-600 flex-shrink-0' />
        Ethiopian-Specific Contract Considerations
      </h3>

      <p className='my-4'>
        Ethiopia's coffee export system has unique features that directly affect contract terms. Understanding these factors is essential for any importer sourcing from Ethiopia.
      </p>

      {/* ECX vs Direct */}
      <h4 className='text-2xl font-bold mt-8 mb-4'>ECX Channel vs. Direct Export License</h4>

      <p className='my-4'>
        Ethiopian coffee reaches international markets through two primary channels, each with different contract implications:
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold mb-2 flex items-center gap-2'>
            <HiOutlineChartBar className='text-amber-600 flex-shrink-0' />
            ECX Auction Channel
          </h5>
          <ul className='text-sm space-y-2'>
            <li><span className='font-bold'>How it works:</span> Coffee is graded and warehoused by the ECX. Exporters bid on lots through the exchange. After winning, the exporter offers the coffee to international buyers.</li>
            <li><span className='font-bold'>Traceability:</span> Historically limited to region and grade. Post-2017 reforms improved traceability to the washing station level for many lots.</li>
            <li><span className='font-bold'>Contract implication:</span> Exporters cannot guarantee specific lots in advance. Spot contracts are more common. Quality is verified through ECX grading certificates.</li>
            <li><span className='font-bold'>Volume:</span> Accounts for the majority of commercial-grade Ethiopian coffee exports.</li>
          </ul>
        </div>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold mb-2 flex items-center gap-2'>
            <HiOutlineShieldCheck className='text-amber-600 flex-shrink-0' />
            Direct Export License
          </h5>
          <ul className='text-sm space-y-2'>
            <li><span className='font-bold'>How it works:</span> Cooperatives, private farm owners, and licensed exporters with their own processing facilities sell directly to international buyers, bypassing the ECX auction.</li>
            <li><span className='font-bold'>Traceability:</span> Full traceability to farm, cooperative, or washing station. Lot-specific information available.</li>
            <li><span className='font-bold'>Contract implication:</span> Forward contracts are possible. Buyer and seller can agree on specific washing station lots, processing methods, and delivery timelines months in advance.</li>
            <li><span className='font-bold'>Volume:</span> Growing channel, especially for specialty-grade coffee above 80 SCA points.</li>
          </ul>
        </div>
      </div>

      <p className='my-4'>
        For specialty importers seeking full traceability and relationship-based sourcing, working with exporters who hold direct export licenses offers significant advantages. For commercial buyers focused on price and volume, the ECX channel provides more liquidity and standardized quality assurance. Many exporters, including <Link href='/ethiopian-coffee-exporter' className='text-amber-700 underline font-semibold'>Ethio Coffee Export</Link>, operate in both channels, giving buyers flexibility based on their needs.
      </p>

      {/* Ethiopian Banking */}
      <h4 className='text-2xl font-bold mt-8 mb-4'>Ethiopian Banking Regulations and Foreign Exchange</h4>

      <p className='my-4'>
        Several Ethiopian banking regulations affect how contracts are structured and how payments flow:
      </p>

      <div className='space-y-3 my-6'>
        <div className='flex items-start gap-3 bg-gray-50 p-4 rounded-lg'>
          <HiOutlineCurrencyDollar className='text-amber-600 mt-1 flex-shrink-0 text-xl' />
          <div>
            <p className='font-bold text-sm'>Foreign Currency Repatriation</p>
            <p className='text-sm'>All export proceeds must be converted to Ethiopian Birr through the National Bank of Ethiopia within a specified period after payment receipt. This means exporters need predictable payment timing and prefer payment methods with clear settlement dates.</p>
          </div>
        </div>
        <div className='flex items-start gap-3 bg-gray-50 p-4 rounded-lg'>
          <HiOutlineBuildingLibrary className='text-amber-600 mt-1 flex-shrink-0 text-xl' />
          <div>
            <p className='font-bold text-sm'>Export Permit Linkage</p>
            <p className='text-sm'>Ethiopian export permits are tied to specific sales contracts. The exporter must present a signed contract and proforma invoice to obtain an export permit from the Ethiopian Coffee and Tea Authority. Changes to contract terms after the permit is issued can create bureaucratic delays.</p>
          </div>
        </div>
        <div className='flex items-start gap-3 bg-gray-50 p-4 rounded-lg'>
          <HiOutlineArrowPath className='text-amber-600 mt-1 flex-shrink-0 text-xl' />
          <div>
            <p className='font-bold text-sm'>Minimum FOB Price</p>
            <p className='text-sm'>The Ethiopian government sets minimum FOB prices for different coffee grades to prevent foreign exchange leakage. Contracts priced below the minimum FOB threshold may be rejected during the export permit process. This floor price is updated periodically based on international market conditions.</p>
          </div>
        </div>
      </div>

      <div className='bg-red-50 p-5 rounded-lg border border-red-200 my-6'>
        <p className='font-bold text-red-800 mb-2 flex items-center gap-2'>
          <HiOutlineExclamationTriangle className='text-red-600 flex-shrink-0' />
          Important: Contract Amendments in Ethiopia
        </p>
        <p className='text-sm'>
          Once a contract is registered with Ethiopian authorities for export permit purposes, amending the price, quantity, or quality terms requires formal reapplication. This process can take days to weeks. Plan your contract terms carefully before signing, and build in realistic shipment windows to accommodate potential administrative processing times.
        </p>
      </div>

      {/* Standard Terms */}
      <h4 className='text-2xl font-bold mt-8 mb-4'>Standard Ethiopian Export Contract Terms</h4>

      <p className='my-4'>
        A typical Ethiopian coffee export contract includes these elements:
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Contract Element</th>
              <th className='p-3 text-left'>Typical Specification</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            <tr className='bg-white'>
              <td className='p-3 font-medium'>Commodity</td>
              <td className='p-3'>Ethiopian Arabica green coffee beans</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-medium'>Origin / Grade</td>
              <td className='p-3'>e.g., Yirgacheffe Grade 1 Washed, Guji Grade 1 Natural</td>
            </tr>
            <tr className='bg-white'>
              <td className='p-3 font-medium'>Quantity</td>
              <td className='p-3'>Number of bags (60kg net each) with tolerance (+/- 5%)</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-medium'>Price</td>
              <td className='p-3'>USD per pound, FOB Djibouti</td>
            </tr>
            <tr className='bg-white'>
              <td className='p-3 font-medium'>Quality</td>
              <td className='p-3'>ECX grade certificate and/or SCA cupping score, moisture percentage (max 12.5%), defect count</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-medium'>Packaging</td>
              <td className='p-3'>Jute bags with GrainPro liner (standard for specialty), 60kg net weight per bag</td>
            </tr>
            <tr className='bg-white'>
              <td className='p-3 font-medium'>Shipment Period</td>
              <td className='p-3'>Specified month or date range (e.g., "January 2026" or "15 Jan - 15 Feb 2026")</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-medium'>Payment Terms</td>
              <td className='p-3'>Irrevocable LC at sight, CAD, or TT as agreed</td>
            </tr>
            <tr className='bg-white'>
              <td className='p-3 font-medium'>Shipping Terms</td>
              <td className='p-3'>FOB Djibouti (most common), FCA (Free Carrier) for air freight</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-medium'>Documents</td>
              <td className='p-3'>Bill of lading, commercial invoice, packing list, phytosanitary certificate, ICO certificate of origin, weight certificate, quality certificate</td>
            </tr>
            <tr className='bg-white'>
              <td className='p-3 font-medium'>Arbitration</td>
              <td className='p-3'>GCA (for US buyers), ECA (for European buyers), or as mutually agreed</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 5: INCOTERMS */}
      <h3 id="incoterms" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineTruck className='text-amber-600 flex-shrink-0' />
        Incoterms in Ethiopian Coffee Trade
      </h3>

      <p className='my-4'>
        Incoterms (International Commercial Terms) define where the seller's responsibility ends and the buyer's begins during transit. They determine who pays for freight, insurance, and who bears the risk of loss at each stage of the journey. Two Incoterms dominate Ethiopian coffee exports.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold mb-3 text-lg'>FOB Djibouti</h5>
          <p className='text-sm mb-3'>
            "Free on Board" means the seller delivers the coffee to the vessel at the port of Djibouti (Ethiopia's primary export port). The buyer assumes risk and cost from that point onward.
          </p>
          <ul className='text-sm space-y-1.5'>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' /> Seller covers: inland transport, export clearance, loading</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' /> Buyer covers: ocean freight, insurance, import clearance</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' /> Most common term for Ethiopian coffee</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' /> Buyer controls shipping line and schedule</li>
          </ul>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold mb-3 text-lg'>FCA (Free Carrier)</h5>
          <p className='text-sm mb-3'>
            "Free Carrier" (FCA) means the seller delivers the goods to a carrier nominated by the buyer at a named place (typically an airport or freight terminal). The buyer arranges and pays for the main carriage (air freight) and insurance from that point.
          </p>
          <ul className='text-sm space-y-1.5'>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' /> Seller covers: inland transport, export clearance, delivery to carrier</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' /> Buyer covers: air freight, insurance, import clearance</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' /> Suitable for air freight and multimodal transport</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' /> Buyer controls carrier selection and logistics</li>
          </ul>
        </div>
      </div>

      <p className='my-4'>
        Most experienced importers prefer FOB Djibouti because it gives them control over the shipping line, schedule, and insurance coverage. The cost transparency is also better: you can see exactly what you're paying for coffee versus freight. FCA (Free Carrier) is used for air freight shipments where the buyer arranges and pays for the main carriage from a nominated point. Learn more about shipping and logistics in our guide to <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 underline font-semibold'>specialty coffee storage and freight</Link>.
      </p>

      {/* SECTION 6: QUALITY CLAUSES */}
      <h3 id="quality-clauses" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineShieldCheck className='text-amber-600 flex-shrink-0' />
        Quality Clauses and Dispute Resolution
      </h3>

      <h4 className='text-2xl font-bold mt-8 mb-4'>Pre-Shipment Samples and Approval</h4>

      <p className='my-4'>
        Quality assurance begins before the contract is signed. The standard process for Ethiopian specialty coffee involves multiple sample stages:
      </p>

      <ol className='list-decimal ml-5 my-4 space-y-2 text-sm'>
        <li><span className='font-bold'>Offer sample:</span> The exporter sends cupping samples (200-500g) of available lots. The buyer evaluates cup quality and provides feedback.</li>
        <li><span className='font-bold'>Pre-shipment sample (PSS):</span> Once a contract is signed, the exporter sends a sample from the actual export lot. The buyer approves or rejects. Most contracts include a clause requiring buyer approval of PSS before shipment proceeds.</li>
        <li><span className='font-bold'>Arrival sample:</span> Upon delivery at the destination port, the buyer draws samples from the received lot and cups against the approved PSS. If the arrival sample does not match the PSS, the buyer may have grounds for a claim.</li>
      </ol>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold mb-2 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />
          Tip: Retain Pre-Shipment Samples
        </p>
        <p className='text-sm'>
          Always retain a sealed portion of the pre-shipment sample. If a quality dispute arises after arrival, the PSS serves as the agreed reference point. Store it in a cool, dry place in a sealed, airtight container. Both buyer and seller should keep identical retained samples.
        </p>
      </div>

      <p className='my-4'>
        If you want the operational workflow behind these clauses, see our <Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 underline font-semibold'>Ethiopian coffee sample approval guide</Link>. It breaks down how buyers should evaluate offer samples, approve the final PSS, and verify arrival lots without blurring the stages.
      </p>

      <h4 className='text-2xl font-bold mt-8 mb-4'>Claims, Arbitration, and Industry Rules</h4>

      <p className='my-4'>
        When the delivered coffee does not match the contracted specifications, the buyer files a claim. The resolution process depends on which arbitration rules the contract specifies:
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold mb-2'>GCA Rules (US Market)</h5>
          <p className='text-sm'>
            The Green Coffee Association of New York provides standard contract terms and arbitration procedures for coffee traded in the United States. Claims must be filed within a specific timeframe after discharge. Arbitration panels assess quality differences and determine price adjustments or allowances.
          </p>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold mb-2'>ECF / ECA Rules (European Market)</h5>
          <p className='text-sm'>
            The European Coffee Federation (ECF) and European Contract for Coffee (ECA) govern most coffee traded into Europe. These rules cover quality arbitration, weight claims, and dispute resolution through appointed arbitrators. The ECF's European Coffee Report provides standard procedures and timelines.
          </p>
        </div>
      </div>

      <p className='my-4'>
        For more on Ethiopian coffee grading standards and quality expectations, see our <Link href='/coffee-grading-ethiopia' className='text-amber-700 underline font-semibold'>Ethiopian coffee grading</Link> guide and our detailed article on <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 underline font-semibold'>green coffee quality control and defects</Link>.
      </p>
      <p className='my-4'>
        If you need the operational next step after a lot lands with a mismatch, read our <Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 underline font-semibold'>green coffee quality claims guide</Link> for notice timing, evidence gathering, neutral sampling, and settlement paths.
      </p>

      {/* SECTION 7: PRACTICAL STEPS */}
      <h3 id="sample-to-contract" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineArrowPath className='text-amber-600 flex-shrink-0' />
        From Sample Request to Signed Contract: A Practical Timeline
      </h3>

      <p className='my-4'>
        Here is a realistic timeline for a first-time importer working with an Ethiopian exporter. Experienced buyers with established relationships can move faster, but this reflects a typical first purchase.
      </p>

      <div className='space-y-4 my-6'>
        <div className='flex items-start gap-4 bg-gray-50 p-4 rounded-lg border-l-4 border-amber-500'>
          <div className='bg-amber-100 text-amber-800 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-sm'>1</div>
          <div>
            <p className='font-bold'>Week 1-2: Initial Contact and Sample Request</p>
            <p className='text-sm'>Contact the exporter, discuss your requirements (origin, grade, processing method, volume, target price range). Request offer samples of available lots. Provide your shipping address for sample delivery.</p>
          </div>
        </div>
        <div className='flex items-start gap-4 bg-gray-50 p-4 rounded-lg border-l-4 border-amber-500'>
          <div className='bg-amber-100 text-amber-800 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-sm'>2</div>
          <div>
            <p className='font-bold'>Week 2-4: Sample Evaluation</p>
            <p className='text-sm'>Receive and cup samples. Score them against your quality benchmarks. Roast test samples to evaluate performance in your roasting profiles. Provide feedback to the exporter on preferred lots.</p>
          </div>
        </div>
        <div className='flex items-start gap-4 bg-gray-50 p-4 rounded-lg border-l-4 border-amber-500'>
          <div className='bg-amber-100 text-amber-800 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-sm'>3</div>
          <div>
            <p className='font-bold'>Week 4-5: Price Negotiation and Contract Terms</p>
            <p className='text-sm'>Negotiate price, payment terms, shipment window, and quality specifications. Discuss Incoterms (FOB or FCA). Agree on pre-shipment sample approval process. Receive proforma invoice and sales contract from the exporter.</p>
          </div>
        </div>
        <div className='flex items-start gap-4 bg-gray-50 p-4 rounded-lg border-l-4 border-amber-500'>
          <div className='bg-amber-100 text-amber-800 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-sm'>4</div>
          <div>
            <p className='font-bold'>Week 5-6: Contract Signing and LC Opening</p>
            <p className='text-sm'>Sign the contract. Apply to your bank to open a Letter of Credit. Provide the LC details to the exporter. This step may take longer if your bank requires additional documentation or if it's your first trade facility.</p>
          </div>
        </div>
        <div className='flex items-start gap-4 bg-gray-50 p-4 rounded-lg border-l-4 border-amber-500'>
          <div className='bg-amber-100 text-amber-800 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-sm'>5</div>
          <div>
            <p className='font-bold'>Week 6-8: Pre-Shipment Sample Approval</p>
            <p className='text-sm'>Exporter sends the pre-shipment sample from the export lot. You cup and approve (or request adjustments). Upon approval, the exporter proceeds to ship.</p>
          </div>
        </div>
        <div className='flex items-start gap-4 bg-gray-50 p-4 rounded-lg border-l-4 border-amber-500'>
          <div className='bg-amber-100 text-amber-800 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-sm'>6</div>
          <div>
            <p className='font-bold'>Week 8-12: Shipment and Transit</p>
            <p className='text-sm'>The container is stuffed, trucked to Djibouti, and loaded onto the vessel. Transit time depends on destination: 15-20 days to Europe, 25-35 days to the US East Coast, 35-45 days to Asia. Exporter presents shipping documents to their bank for payment processing.</p>
          </div>
        </div>
        <div className='flex items-start gap-4 bg-gray-50 p-4 rounded-lg border-l-4 border-amber-500'>
          <div className='bg-amber-100 text-amber-800 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-sm'>7</div>
          <div>
            <p className='font-bold'>Week 12-14: Arrival, Clearance, and Delivery</p>
            <p className='text-sm'>Container arrives at destination port. You (or your customs broker) handle import clearance, pay duties if applicable, and arrange drayage to your warehouse. Draw arrival samples and cup against the PSS.</p>
          </div>
        </div>
      </div>

      <p className='my-4'>
        Total elapsed time from first contact to coffee in your warehouse: approximately 10-14 weeks for a first purchase. Subsequent orders are faster, typically 6-8 weeks from contract to delivery. For a complete step-by-step ordering process, visit our <Link href='/ordering-info' className='text-amber-700 underline font-semibold'>ordering information</Link> page. For a deeper look at each export stage, from CLU inspection to Djibouti port loading, see our <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='underline font-bold'>export process buyer&apos;s guide</Link>.
      </p>

      {/* SECTION 8: COMMON MISTAKES */}
      <h3 id="common-mistakes" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineExclamationTriangle className='text-amber-600 flex-shrink-0' />
        Common Mistakes Importers Make with Ethiopian Coffee Contracts
      </h3>

      <div className='space-y-4 my-6'>
        <div className='bg-red-50 p-5 rounded-lg border border-red-200'>
          <h5 className='font-bold mb-2 text-red-800'>1. Not Setting Up Trade Finance Before Sourcing</h5>
          <p className='text-sm'>Many importers spend weeks cupping samples and negotiating prices, only to discover their bank needs 2-4 weeks to establish an LC facility. Apply for trade finance early. Have your LC capability confirmed before you start sample evaluation.</p>
        </div>
        <div className='bg-red-50 p-5 rounded-lg border border-red-200'>
          <h5 className='font-bold mb-2 text-red-800'>2. Ignoring the Shipment Window</h5>
          <p className='text-sm'>Ethiopian coffee harvest peaks from November to February. Late-season contracts (signed in March or later) may face limited availability of the best lots. Exporters who commit to specific lots need time to process, mill, and transport coffee to Djibouti. Build in at least 4-6 weeks between contract signing and the start of your shipment window.</p>
        </div>
        <div className='bg-red-50 p-5 rounded-lg border border-red-200'>
          <h5 className='font-bold mb-2 text-red-800'>3. Skipping the Pre-Shipment Sample</h5>
          <p className='text-sm'>Approving a lot based solely on the initial offer sample without requesting a PSS is risky. The export lot may differ from the offer sample due to blending, processing variation, or storage conditions. Always request and approve a PSS before authorizing shipment.</p>
        </div>
        <div className='bg-red-50 p-5 rounded-lg border border-red-200'>
          <h5 className='font-bold mb-2 text-red-800'>4. Vague Quality Specifications</h5>
          <p className='text-sm'>Contracts that say "high quality" or "SCA 84+" without specifying moisture content, defect count tolerance, screen size, and specific cup attributes leave too much room for interpretation. Be precise. Specify: grade, moisture (e.g., max 11.5%), defects (e.g., max 5 full defects per 300g sample), and minimum cupping score.</p>
        </div>
        <div className='bg-red-50 p-5 rounded-lg border border-red-200'>
          <h5 className='font-bold mb-2 text-red-800'>5. Underestimating Total Landed Cost</h5>
          <p className='text-sm'>FOB price is only part of your cost. Add ocean freight ($2,500-$6,000 per container depending on route), marine insurance (0.25-0.5% of cargo value), import duties (varies by country), port handling charges, customs brokerage fees, and inland transport. A $5.00/kg FOB coffee might cost $6.50-$7.50/kg landed. For detailed pricing guidance, see our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 underline font-semibold'>Ethiopian coffee FOB pricing guide</Link>. For a full worked example with every line item, see our <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 underline font-semibold'>complete landed cost guide</Link>.</p>
        </div>
      </div>

      {/* FAQ SECTION */}
      <section className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
          <HiOutlineQuestionMarkCircle className='text-amber-600 flex-shrink-0' />
          Frequently Asked Questions
        </h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What payment method do Ethiopian coffee exporters prefer?</h4>
            <p className="text-sm text-gray-600">Most Ethiopian exporters prefer irrevocable Letters of Credit (LC) at sight, especially for first-time buyers. This provides payment security while complying with National Bank of Ethiopia foreign exchange requirements. After building a track record, buyers may negotiate CAD or wire transfer terms.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Can I buy Ethiopian coffee without a Letter of Credit?</h4>
            <p className="text-sm text-gray-600">Yes, for small sample orders (under 20 bags), wire transfer is common. For commercial volumes, some established exporters accept CAD terms from repeat buyers. Working through a trading intermediary is another option, as they handle the LC on your behalf.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What is a typical shipment window for Ethiopian coffee?</h4>
            <p className="text-sm text-gray-600">Most Ethiopian coffee ships between December and June. The main harvest concludes in February, with milling and export preparation extending into spring. Forward contracts typically specify a shipment month or a 30-day window. Late-season lots (May-June) may have reduced availability but can offer value pricing.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What happens if the coffee quality doesn't match the contract?</h4>
            <p className="text-sm text-gray-600">Quality disputes are resolved through arbitration. US-bound contracts typically use GCA (Green Coffee Association) rules; European contracts use ECF/ECA rules. The first step is always to communicate the issue directly with the exporter. Provide cupping scores, defect counts, and comparison notes against the pre-shipment sample. Many disputes are resolved through price allowances without formal arbitration.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Is FOB or FCA better when buying Ethiopian coffee?</h4>
            <p className="text-sm text-gray-600">FOB Djibouti is preferred by experienced importers for ocean freight because it provides more control over shipping costs and logistics. FCA (Free Carrier) is used for air freight where the buyer arranges carriage from the nominated point. Both are valid; the choice depends on your shipping mode preference and logistics capabilities.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How do differentials work for Ethiopian coffee?</h4>
            <p className="text-sm text-gray-600">Ethiopian coffee differentials are premiums added to the ICE Coffee "C" futures benchmark. The differential reflects origin quality, demand, and availability. A contract might specify "+$1.00/lb over the March C." The buyer then "fixes" the futures component at a time of their choosing before shipment. The final price equals the fixed futures price plus the differential.</p>
          </div>
        </div>
      </section>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Premium Ethiopian Coffee Direct from Origin</h4>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Import and Export PLC</span> offers transparent contract terms, flexible payment options, and full documentation for importers at every scale. Request samples, review current lot availability, and discuss contract structures tailored to your business.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Our Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Request Samples / Contact Us</Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>How to Order</Link>
        </div>
      </div>

      {/* RELATED ARTICLES */}
      <div className='my-8 p-6 bg-gray-50 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-6'>
          <div>
            <h5 className='font-semibold mb-2 text-sm'>Pricing & Market</h5>
            <ul className='space-y-1.5 text-sm'>
              <li><Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Ethiopian Coffee FOB Pricing Guide</Link></li>
              <li><Link href='/insights/green-coffee-financing-hedging-importers-guide' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Green Coffee Price Hedging Guide</Link></li>
              <li><Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Ethiopian Coffee MOQ Guide</Link></li>
              <li><Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> ECX and Ethiopian Coffee Export</Link></li>
            </ul>
          </div>
          <div>
            <h5 className='font-semibold mb-2 text-sm'>Quality & Sourcing</h5>
            <ul className='space-y-1.5 text-sm'>
              <li><Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Sourcing Green Coffee from Ethiopia</Link></li>
              <li><Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Choosing an Ethiopian Exporter</Link></li>
              <li><Link href='/insights/best-ethiopian-coffee-exporter-for-importers' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Best Ethiopian Coffee Exporter for Importers</Link></li>
            </ul>
          </div>
          <div>
            <h5 className='font-semibold mb-2 text-sm'>Logistics & Compliance</h5>
            <ul className='space-y-1.5 text-sm'>
              <li><Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Coffee Storage & Freight Logistics</Link></li>
              <li><Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> EUDR Compliance Guide</Link></li>
              <li><Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Ethiopian Coffee Certifications</Link></li>
            </ul>
          </div>
          <div>
            <h5 className='font-semibold mb-2 text-sm'>Import Guides by Country</h5>
            <ul className='space-y-1.5 text-sm'>
              <li><Link href='/insights/how-to-import-ethiopian-coffee-to-usa' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Importing to the USA</Link></li>
              <li><Link href='/insights/importing-ethiopian-coffee-to-uae' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Importing Ethiopian Coffee to UAE</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> This guide to Ethiopian coffee contracts and payment terms is published by Ethio Coffee Import and Export PLC. Contract terms, pricing, and regulations change. Contact us for current information before making purchasing decisions.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { ArrowRight } from '@/app/components/Arrow'
import { 
  HiOutlineCalendarDays, 
  HiOutlineScale,
  HiOutlineTruck,
  HiOutlineCurrencyDollar,
  HiOutlineCalculator,
  HiOutlineQuestionMarkCircle,
  HiOutlineLightBulb,
  HiOutlineExclamationTriangle,
  HiOutlineCheckCircle,
  HiOutlineCube,
  HiOutlineChartBar,
  HiOutlineClipboardDocumentList,
  HiOutlineUserGroup,
  HiOutlineGlobeAlt,
  HiOutlineShoppingCart,
  HiOutlineBeaker,
  HiOutlineDocumentText
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function MinimumOrderQuantitiesEthiopianCoffee({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        The complete guide to understanding minimum order quantities for Ethiopian green coffee imports: from single-bag sample orders to full container loads, learn what to expect from exporters, how to calculate costs per bag, smart strategies for small roasters, container consolidation options, and negotiation tactics that actually work in the Ethiopian coffee trade.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Understanding MOQ helps coffee importers plan realistic budgets and build sustainable sourcing relationships.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Minimum order quantities MOQ Ethiopian coffee green coffee import containers'
            fill
            objectFit='cover'
            className='w-full h-full'
          />
        </div>

        <figcaption className='font-inconsolata text-xs my-1 text-gray-600'>
          Photo: {large_image_url}
        </figcaption>
      </figure>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-2'>Key Takeaway</p>
        <p>
          Most Ethiopian coffee exporters set minimum order quantities (MOQ) at one full container load (FCL), approximately 250&ndash;320 bags of 60 kg. Smaller roasters can access Ethiopian green coffee through sample orders (1&ndash;5 bags), LCL consolidation, or intermediate traders. With Arabica prices reaching record highs in 2025&ndash;2026 and Ethiopian FOB prices up 40&ndash;60% from two years prior, understanding MOQ structures is more critical than ever for budgeting, timing, and building sustainable sourcing relationships.
        </p>
      </div>

      {/* FURTHER READING / AUTHORITATIVE LINKS (SEO) */}
      <div className='my-4 text-sm text-gray-700'>
        <p className='font-semibold mb-1'>Further reading:</p>
        <ul className='list-disc ml-5 space-y-1'>
          <li>
            <a href='https://www.ico.org' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>International Coffee Organization (ICO)</a> - global coffee market data and export guidance.
          </li>
          <li>
            <a href='https://sca.coffee' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>Specialty Coffee Association (SCA)</a> - standards, sample programs, and importing best practices.
          </li>
          <li>
            <a href='https://www.freightos.com/freight-resources/what-is-lcl-shipping-the-complete-guide/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>Freightos LCL guide</a> - explanation of Less Than Container Load (LCL) and consolidation costs.
          </li>
          <li>
            <a href='https://www.trade.gov/country-commercial-guides/ethiopia-import-requirements-and-documentation' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>Trade.gov &ndash; Ethiopia Commercial Guide</a> - import requirements and documentation for Ethiopian exports.
          </li>
        </ul>
      </div>

      {/* OPENING SCENARIO */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border-l-4 border-amber-500'>
        <p className='font-medium text-lg mb-3'>
          The Email Every New Coffee Importer Sends
        </p>
        <p className='text-sm italic mb-2'>
          "Hi, we're a small specialty roaster interested in sourcing Ethiopian Yirgacheffe. Can we start with 5 bags to test the market? What's your best price?"
        </p>
        <p className='text-sm mt-3'>
          If you've sent an email like this to Ethiopian coffee exporters, you've probably received responses ranging from "Yes, but at a higher price" to complete silence. Understanding <span className='font-bold'>Minimum Order Quantities (MOQ)</span> is one of the most important-and often most frustrating-aspects of starting to import Ethiopian coffee. Let's break down exactly what MOQ means, why it exists, and most importantly, how to work with it successfully.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='bg-gray-50 p-6 rounded-lg my-8 border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          What's Covered in This Guide
        </h3>
        <div className='grid md:grid-cols-2 gap-x-8 gap-y-2'>
          <div>
            <p className='font-bold text-sm mb-2'>The Fundamentals</p>
            <ul className='space-y-1.5 text-sm'>
              <li><a href="#what-is-moq" className='text-amber-700 hover:underline'>What MOQ Actually Means</a></li>
              <li><a href="#why-moq-exists" className='text-amber-700 hover:underline'>Why MOQ Exists in Coffee Trade</a></li>
              <li><a href="#market-context-2026" className='text-amber-700 hover:underline'>2025&ndash;2026 Market Context and MOQ</a></li>
              <li><a href="#ethiopia-supply-chain" className='text-amber-700 hover:underline'>Ethiopia-Specific Supply Chain &amp; Timing</a></li>
              <li><a href="#typical-moqs" className='text-amber-700 hover:underline'>Typical MOQs from Ethiopian Exporters</a></li>
              <li><a href="#container-math" className='text-amber-700 hover:underline'>Container Math: How Many Bags Fit?</a></li>
            </ul>
          </div>
          <div>
            <p className='font-bold text-sm mb-2'>Practical Solutions</p>
            <ul className='space-y-1.5 text-sm'>
              <li><a href="#small-quantity-strategies" className='text-amber-700 hover:underline'>Strategies for Small Roasters</a></li>
              <li><a href="#consolidation-options" className='text-amber-700 hover:underline'>Container Consolidation &amp; LCL Shipping</a></li>
              <li><a href="#pricing-by-volume" className='text-amber-700 hover:underline'>How Pricing Changes by Volume</a></li>
              <li><a href="#payment-terms-moq" className='text-amber-700 hover:underline'>Payment Terms and How They Affect MOQ</a></li>
              <li><a href="#negotiation-tactics" className='text-amber-700 hover:underline'>Negotiation Tactics That Work</a></li>
              <li><a href="#sample-programs" className='text-amber-700 hover:underline'>Sample Programs vs. Commercial Orders</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* SECTION 1: WHAT IS MOQ */}
      <h3 id="what-is-moq" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineQuestionMarkCircle className='text-amber-600' />
        What MOQ Actually Means (and Doesn't Mean)
      </h3>

      <p className='my-4'>
        <span className='font-bold'>Minimum Order Quantity (MOQ)</span> is the smallest amount of product a supplier is willing to sell in a single transaction. In Ethiopian green coffee exports, MOQ can refer to several different thresholds:
      </p>

      <div className='grid md:grid-cols-3 gap-4 my-8'>
        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold mb-2 text-blue-800 flex items-center gap-2'>
            <HiOutlineScale className='text-blue-600' />
            Weight-Based MOQ
          </h5>
          <p className='text-sm mb-2'>The minimum total kilograms or bags</p>
          <p className='text-xs'>Example: "300kg minimum" or "5 bags minimum"</p>
        </div>

        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-2 text-green-800 flex items-center gap-2'>
            <HiOutlineCurrencyDollar className='text-green-600' />
            Value-Based MOQ
          </h5>
          <p className='text-sm mb-2'>The minimum order value in USD</p>
          <p className='text-xs'>Example: "$5,000 minimum order value"</p>
        </div>

        <div className='bg-purple-50 p-5 rounded-lg border border-purple-200'>
          <h5 className='font-bold mb-2 text-purple-800 flex items-center gap-2'>
            <HiOutlineTruck className='text-purple-600' />
            Container-Based MOQ
          </h5>
          <p className='text-sm mb-2'>Full container load requirement</p>
          <p className='text-xs'>Example: "Full 20ft container minimum (275-300 bags)"</p>
        </div>
      </div>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <p className='font-bold mb-3'>What MOQ Is NOT:</p>
        <ul className='space-y-2 text-sm'>
          <li className='flex items-start gap-2'>
            <HiOutlineExclamationTriangle className='text-amber-600 mt-0.5 flex-shrink-0' />
            <span><span className='font-bold'>Not always non-negotiable:</span> Many exporters have flexibility, especially for repeat customers or strategic markets</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineExclamationTriangle className='text-amber-600 mt-0.5 flex-shrink-0' />
            <span><span className='font-bold'>Not the same for samples:</span> Sample orders (pre-shipment cupping) usually have different (lower) MOQs</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineExclamationTriangle className='text-amber-600 mt-0.5 flex-shrink-0' />
            <span><span className='font-bold'>Not uniform across exporters:</span> Different Ethiopian exporters have vastly different MOQ policies</span>
          </li>
        </ul>
      </div>

      {/* SECTION 2: WHY MOQ EXISTS */}
      <h3 id="why-moq-exists" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineLightBulb className='text-amber-600' />
        Why MOQ Exists: The Exporter's Perspective
      </h3>

      <p className='my-4'>
        Before you get frustrated with MOQ requirements, it helps to understand <span className='font-bold'>why exporters implement them</span>. It's not arbitrary-there are genuine economic and logistical reasons:
      </p>

      <div className='space-y-6 my-8'>
        <div className='border-l-4 border-blue-500 pl-5 bg-blue-50 py-4 pr-4 rounded-r-lg'>
          <h4 className='font-bold text-lg mb-2 flex items-center gap-2'>
            <HiOutlineCurrencyDollar className='text-blue-600' />
            1. Fixed Costs Don't Scale Down
          </h4>
          <p className='text-sm mb-3'>
            Whether an exporter ships 5 bags or 300 bags, many costs remain the same:
          </p>
          <ul className='text-sm space-y-1 ml-5'>
            <li>• Export documentation (commercial invoice, certificate of origin, quality certificate, phytosanitary certificate)</li>
            <li>• Ethiopian Coffee Authority (ECA) inspection and certification fees</li>
            <li>• Bank fees for letters of credit or wire transfers</li>
            <li>• Warehouse handling and loading costs</li>
            <li>• Administrative time (emails, contracts, coordination)</li>
          </ul>
          <p className='text-xs mt-3 italic'>
            Result: Small orders become unprofitable when fixed costs are spread across just a few bags.
          </p>
        </div>

        <div className='border-l-4 border-green-500 pl-5 bg-green-50 py-4 pr-4 rounded-r-lg'>
          <h4 className='font-bold text-lg mb-2 flex items-center gap-2'>
            <HiOutlineTruck className='text-green-600' />
            2. Shipping Economics
          </h4>
          <p className='text-sm mb-3'>
            International shipping costs are dramatically better at scale:
          </p>
          <div className='bg-white p-4 rounded border border-green-200 my-3'>
            <p className='text-xs font-bold mb-2'>Shipping Cost Comparison (Addis Ababa to Los Angeles):</p>
            <ul className='text-xs space-y-1'>
              <li>• <span className='font-bold'>5 bags (300kg) air freight:</span> $10-15 per kg = $3,000-4,500 shipping</li>
              <li>• <span className='font-bold'>20 bags (1,200kg) LCL ocean:</span> $3-5 per kg = $3,600-6,000 shipping</li>
              <li>• <span className='font-bold'>300 bags (18,000kg) FCL 20ft:</span> $0.30-0.50 per kg = $5,400-9,000 shipping</li>
            </ul>
            <p className='text-xs mt-2 italic'>
              Notice: Per-kg shipping cost drops 95% from small air shipment to full container!
            </p>
          </div>
        </div>

        <div className='border-l-4 border-purple-500 pl-5 bg-purple-50 py-4 pr-4 rounded-r-lg'>
          <h4 className='font-bold text-lg mb-2 flex items-center gap-2'>
            <HiOutlineUserGroup className='text-purple-600' />
            3. Relationship Economics
          </h4>
          <p className='text-sm'>
            Exporters prefer working with buyers who have growth potential. A customer ordering 5 bags with no clear path to larger volumes requires the same relationship management effort as a customer ordering full containers. Many exporters strategically focus on buyers likely to become long-term, volume customers rather than serving numerous small one-time buyers.
          </p>
        </div>
      </div>

      {/* SECTION 3: 2025-2026 MARKET CONTEXT */}
      <h3 id="market-context-2026" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineChartBar className='text-amber-600' />
        2025&ndash;2026 Market Context: How Record Prices Affect MOQ Decisions
      </h3>

      <p className='my-4'>
        Any conversation about Ethiopian coffee MOQ in 2025&ndash;2026 must acknowledge the unprecedented market conditions shaping every purchase. Arabica futures on the ICE exchange surged past $4.00/lb in late 2025, driven by drought-related production shortfalls in Brazil and Vietnam, tight global inventories, and speculative trading. Ethiopian FOB prices followed: specialty-grade lots that traded at $4.00&ndash;5.50/kg in 2023 now command $6.00&ndash;9.00/kg or higher for top Yirgacheffe and Guji naturals.
      </p>

      <div className='bg-red-50 p-6 rounded-lg my-6 border-l-4 border-red-500'>
        <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineExclamationTriangle className='text-red-600' />
          What Record Prices Mean for MOQ Planning
        </h4>
        <ul className='text-sm space-y-2'>
          <li><span className='font-bold'>Higher capital requirements:</span> A full 20ft container that cost $60,000&ndash;90,000 in 2023 may now cost $100,000&ndash;160,000. Small roasters who previously stretched to full containers are reconsidering LCL and consolidation.</li>
          <li><span className='font-bold'>Tighter allocation:</span> When prices rise, exporters prioritize established buyers. New importers may face higher MOQs or longer lead times for premium lots.</li>
          <li><span className='font-bold'>ETB/USD volatility:</span> The Ethiopian birr has depreciated significantly since the 2024 forex reforms. Exporters may quote in USD but source in birr, which introduces pricing uncertainty between offer and shipment.</li>
          <li><span className='font-bold'>Seasonal negotiation windows narrow:</span> Peak-season specialty lots sell faster. Buyers who wait risk losing access to the best coffees entirely, regardless of MOQ flexibility.</li>
        </ul>
      </div>

      <p className='my-4'>
        The practical effect: buyers at every size need to commit earlier, budget higher, and communicate more clearly with exporters about volume and timing. The strategies in this guide remain sound, but the financial math behind every MOQ decision has shifted. Factor current pricing into all calculations below.
      </p>

      {/* SECTION 4: ETHIOPIA-SPECIFIC SUPPLY CHAIN */}
      <h3 id="ethiopia-supply-chain" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCalendarDays className='text-amber-600' />
        Ethiopia-Specific Supply Chain and Timing
      </h3>

      <p className='my-4'>
        Ethiopian coffee moves through a distinct supply chain that directly affects when and how you can place orders. Understanding these dynamics helps you time MOQ commitments to maximize quality and availability.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-4'>The Ethiopian Coffee Calendar</h4>
        <div className='grid md:grid-cols-2 gap-6'>
          <div>
            <p className='font-bold text-sm mb-2'>Harvest &amp; Processing (Oct&ndash;Feb)</p>
            <ul className='text-sm space-y-1'>
              <li>&bull; Cherry picking runs October through February in most regions</li>
              <li>&bull; Washed processing at washing stations: Nov&ndash;Jan peak</li>
              <li>&bull; Natural (dry) processing extends slightly later</li>
              <li>&bull; Pre-shipment samples become available: Jan&ndash;Mar</li>
            </ul>
          </div>
          <div>
            <p className='font-bold text-sm mb-2'>Export Window (Mar&ndash;Sep)</p>
            <ul className='text-sm space-y-1'>
              <li>&bull; Dry milling and grading: Feb&ndash;Apr</li>
              <li>&bull; <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX auction</Link> lots available: Mar&ndash;Jun</li>
              <li>&bull; Peak shipping from Djibouti port: Apr&ndash;Aug</li>
              <li>&bull; Fresh-crop arrivals in destination markets: Jun&ndash;Oct</li>
            </ul>
          </div>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>ECX vs. Direct Export: How the Channel Affects MOQ</h4>

      <p className='my-4'>
        Ethiopian coffee reaches exporters through two main channels, each with different MOQ implications:
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-6'>
        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold mb-3'>ECX (Ethiopian Commodity Exchange)</h5>
          <p className='text-sm mb-2'>
            Coffee purchased through ECX auctions arrives in standardized lots. Exporters buy in bulk and may combine ECX lots to fill containers. MOQ tends to be higher because ECX lots are large and exporters want to move volume efficiently.
          </p>
          <p className='text-xs italic'>Typical MOQ: Full container (275&ndash;300 bags)</p>
        </div>
        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-3'>Direct from Cooperatives / Washing Stations</h5>
          <p className='text-sm mb-2'>
            Cooperatives and private washing stations can sell directly to exporters (bypassing ECX for specialty-grade coffee). These lots are often smaller and more traceable, making sub-container MOQs more feasible.
          </p>
          <p className='text-xs italic'>Typical MOQ: 10&ndash;100 bags (varies by lot size)</p>
        </div>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium'>
          <span className='font-bold'>Timing Tip:</span> Place your MOQ commitment between January and March for the best selection of fresh-crop lots. Exporters finalize their offer lists as processing completes, and the best micro-lots sell first. Waiting until June or July means choosing from what remains. For a deeper look at harvest timing, see our <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline font-semibold'>Ethiopian Coffee Harvest Calendar</Link>.
        </p>
      </div>

      {/* SECTION 5: TYPICAL MOQS */}
      <h3 id="typical-moqs" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineScale className='text-amber-600' />
        What Are Typical MOQs from Ethiopian Exporters?
      </h3>

      <p className='my-4'>
        MOQs vary significantly based on exporter size, target market, and business model. Here is what you can realistically expect in the current market:
      </p>

      <div className='overflow-x-auto my-8'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='border border-gray-300 p-3 text-left'>Exporter Type</th>
              <th className='border border-gray-300 p-3 text-left'>Typical MOQ</th>
              <th className='border border-gray-300 p-3 text-left'>Target Customer</th>
              <th className='border border-gray-300 p-3 text-left'>Flexibility</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-3'>
                <span className='font-bold'>Large Commercial Exporters</span>
                <p className='text-xs text-gray-600'>Union-sourced, high volume</p>
              </td>
              <td className='border border-gray-300 p-3'>
                <span className='font-bold'>Full container (20ft)</span>
                <p className='text-xs'>275-300 bags (16,500-18,000kg)</p>
              </td>
              <td className='border border-gray-300 p-3 text-xs'>
                Importers, distributors, large roasters
              </td>
              <td className='border border-gray-300 p-3 text-xs'>
                Low flexibility, rarely go below full container
              </td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3'>
                <span className='font-bold'>Mid-Size Specialty Exporters</span>
                <p className='text-xs text-gray-600'>Quality-focused, multiple origins</p>
              </td>
              <td className='border border-gray-300 p-3'>
                <span className='font-bold'>50-100 bags</span>
                <p className='text-xs'>3,000-6,000kg</p>
              </td>
              <td className='border border-gray-300 p-3 text-xs'>
                Mid-size roasters, specialty importers
              </td>
              <td className='border border-gray-300 p-3 text-xs'>
                Moderate flexibility, may consolidate smaller orders
              </td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3'>
                <span className='font-bold'>Small/Specialty Exporters</span>
                <p className='text-xs text-gray-600'>Direct trade, micro-lots</p>
              </td>
              <td className='border border-gray-300 p-3'>
                <span className='font-bold'>10-30 bags</span>
                <p className='text-xs'>600-1,800kg</p>
              </td>
              <td className='border border-gray-300 p-3 text-xs'>
                Small roasters, specialty shops
              </td>
              <td className='border border-gray-300 p-3 text-xs'>
                High flexibility, often offer consolidation services
              </td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3'>
                <span className='font-bold'>Sample Programs</span>
                <p className='text-xs text-gray-600'>Pre-shipment evaluation</p>
              </td>
              <td className='border border-gray-300 p-3'>
                <span className='font-bold'>1-5 bags</span>
                <p className='text-xs'>60-300kg</p>
              </td>
              <td className='border border-gray-300 p-3 text-xs'>
                Prospective buyers, quality evaluation
              </td>
              <td className='border border-gray-300 p-3 text-xs'>
                Variable, often at premium pricing
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium'>
          <span className='font-bold'>Real Talk:</span> If you are a first-time importer reaching out to large Ethiopian exporters asking for 5 bags, you will likely either be ignored or quoted a price 30&ndash;50% higher than container pricing. This is not personal; it is economics. Target exporters whose business model matches your order size.
        </p>
      </div>

      {/* COFFEE GRADING QUICK REFERENCE */}
      <div className='bg-gray-50 p-6 rounded-lg my-8 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          Ethiopian Coffee Grading: Quick Reference
        </h4>
        <p className='text-sm mb-3'>
          The MOQ table above references grades (G1, G2, G4). Ethiopian coffee is graded on a 1&ndash;9 scale based on defect count, cup quality, and bean size:
        </p>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <p className='font-bold text-sm mb-1'>Specialty Grades</p>
            <ul className='text-sm space-y-1'>
              <li>&bull; <span className='font-bold'>Grade 1:</span> 0&ndash;3 defects per 300g. Highest cup quality (85+ SCA). Premium pricing.</li>
              <li>&bull; <span className='font-bold'>Grade 2:</span> 4&ndash;12 defects per 300g. Strong cup quality (80&ndash;84 SCA). Most traded specialty grade.</li>
            </ul>
          </div>
          <div>
            <p className='font-bold text-sm mb-1'>Commercial Grades</p>
            <ul className='text-sm space-y-1'>
              <li>&bull; <span className='font-bold'>Grade 3&ndash;4:</span> 13&ndash;25 defects. Good quality, lower price. Common for blends.</li>
              <li>&bull; <span className='font-bold'>Grade 5&ndash;9:</span> Higher defect count. Commodity market. Rarely exported as specialty.</li>
            </ul>
          </div>
        </div>
        <p className='text-xs mt-3'>
          Grade directly affects MOQ flexibility. High-volume G4 lots from ECX are typically full-container only, while small-lot G1 micro-lots may be available in 10&ndash;30 bag quantities. For a complete breakdown, see our <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline font-semibold'>Green Coffee Defects and Grading Guide</Link>.
        </p>
      </div>

      {/* SECTION: CONTAINER MATH */}
      <h3 id="container-math" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCalculator className='text-amber-600' />
        Container Math: How Many Bags Actually Fit?
      </h3>

      <p className='my-4'>
        Understanding container capacity is essential for planning orders. Here's the practical math:
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-8'>
        <div className='bg-blue-50 p-6 rounded-lg border border-blue-200'>
          <h4 className='font-bold text-lg mb-4 text-blue-800'>20ft Container (Most Common)</h4>
          <div className='space-y-3'>
            <div className='bg-white p-3 rounded border border-blue-200'>
              <p className='font-bold text-sm mb-1'>Standard 60kg Bags</p>
              <p className='text-xs mb-2'>275-300 bags = 16,500-18,000kg</p>
              <p className='text-xs text-gray-600'>Why the range? Depends on bag stacking efficiency, pallet use, and container condition</p>
            </div>
            <div className='bg-white p-3 rounded border border-blue-200'>
              <p className='font-bold text-sm mb-1'>Volume</p>
              <p className='text-xs'>33 cubic meters (approximately)</p>
            </div>
            <div className='bg-white p-3 rounded border border-blue-200'>
              <p className='font-bold text-sm mb-1'>Maximum Weight</p>
              <p className='text-xs'>~28,000kg total (but rarely filled to max)</p>
            </div>
            <div className='bg-white p-3 rounded border border-blue-200'>
              <p className='font-bold text-sm mb-1'>Typical FOB Cost (2025&ndash;2026)</p>
              <p className='text-xs'>$5.00&ndash;9.00/kg depending on quality/origin</p>
              <p className='text-xs font-bold mt-1'>= $82,500&ndash;162,000 per container</p>
            </div>
          </div>
        </div>

        <div className='bg-green-50 p-6 rounded-lg border border-green-200'>
          <h4 className='font-bold text-lg mb-4 text-green-800'>40ft Container (Less Common)</h4>
          <div className='space-y-3'>
            <div className='bg-white p-3 rounded border border-green-200'>
              <p className='font-bold text-sm mb-1'>Standard 60kg Bags</p>
              <p className='text-xs mb-2'>550-600 bags = 33,000-36,000kg</p>
              <p className='text-xs text-gray-600'>Roughly double a 20ft container capacity</p>
            </div>
            <div className='bg-white p-3 rounded border border-green-200'>
              <p className='font-bold text-sm mb-1'>Volume</p>
              <p className='text-xs'>67 cubic meters (approximately)</p>
            </div>
            <div className='bg-white p-3 rounded border border-green-200'>
              <p className='font-bold text-sm mb-1'>Consideration</p>
              <p className='text-xs'>40ft containers are less common in Ethiopian coffee exports. Shipping lines may have limited availability or higher costs for 40ft from Djibouti port.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h5 className='font-bold mb-3 flex items-center gap-2'>
          <HiOutlineCube className='text-amber-600' />
          Bag Size Variations to Know
        </h5>
        <p className='text-sm mb-3'>
          While 60kg is the international standard for green coffee export bags, you may encounter other sizes:
        </p>
        <ul className='text-sm space-y-2'>
          <li><span className='font-bold'>60kg bags:</span> Standard international export, most common from Ethiopia</li>
          <li><span className='font-bold'>69kg bags:</span> Sometimes used for certain cooperative unions or specific markets</li>
          <li><span className='font-bold'>70kg bags:</span> Occasionally seen in older contracts or specific regions</li>
          <li><span className='font-bold'>30kg bags:</span> Rare, sometimes used for high-value micro-lots or specific buyer requests</li>
        </ul>
        <p className='text-xs mt-3 italic'>
          Always clarify bag weight when discussing MOQ and pricing-"10 bags" means very different things at 30kg vs 70kg!
        </p>
      </div>

      {/* SECTION 5: SMALL QUANTITY STRATEGIES */}
      <h3 id="small-quantity-strategies" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineShoppingCart className='text-amber-600' />
        Practical Strategies for Small Roasters
      </h3>

      <p className='my-4'>
        So you need 5&ndash;20 bags, not 300. Here are proven strategies that actually work:
      </p>

      {/* INVENTORY CARRYING COST BOX */}
      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineCalculator className='text-amber-600' />
          The Hidden MOQ Math: Inventory Carrying Costs
        </h4>
        <p className='text-sm mb-3'>
          Before choosing a strategy, understand what holding green coffee actually costs. These carrying costs should factor into every MOQ decision:
        </p>
        <div className='grid md:grid-cols-2 gap-4'>
          <div className='bg-white p-4 rounded-lg border border-gray-200'>
            <p className='font-bold text-sm mb-2'>Capital tied up</p>
            <p className='text-xs'>At $7/kg, a single 60kg bag represents $420 in locked capital. 50 bags = $21,000 sitting in your warehouse instead of your bank account. At 8% annual cost of capital, that is $140/month you cannot deploy elsewhere.</p>
          </div>
          <div className='bg-white p-4 rounded-lg border border-gray-200'>
            <p className='font-bold text-sm mb-2'>Quality degradation</p>
            <p className='text-xs'>Green coffee stored properly (cool, dry, stable humidity) holds quality for 6&ndash;9 months. Beyond that, cup scores drop. Naturals degrade faster than washed lots. Ordering more than you can sell in 6 months means selling past-peak coffee. See our <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline'>Shelf Life &amp; Storage Guide</Link>.</p>
          </div>
          <div className='bg-white p-4 rounded-lg border border-gray-200'>
            <p className='font-bold text-sm mb-2'>Storage and insurance</p>
            <p className='text-xs'>Warehouse rental, climate control, and cargo insurance add $0.02&ndash;0.05/kg per month. Over 6 months on 50 bags: $360&ndash;900 in storage costs alone.</p>
          </div>
          <div className='bg-white p-4 rounded-lg border border-gray-200'>
            <p className='font-bold text-sm mb-2'>The calculation</p>
            <p className='text-xs'>Order only what you can turn in 8&ndash;12 weeks for core coffees, and 4&ndash;6 weeks for seasonal micro-lots. If a larger order saves 15% per kg but takes 6 months to sell, the savings evaporate in carrying costs.</p>
          </div>
        </div>
      </div>

      <div className='space-y-6 my-8'>
        <div className='bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-500'>
          <h4 className='font-bold text-lg mb-3'>Strategy 1: Find Small-Volume Friendly Exporters</h4>
          <p className='text-sm mb-3'>
            Not all Ethiopian exporters require full containers. Some specifically target small-to-medium roasters:
          </p>
          <div className='bg-white p-4 rounded-lg'>
            <p className='font-bold text-sm mb-2'>What to Look For:</p>
            <ul className='text-sm space-y-1'>
              <li className='flex items-start gap-2'>
                <HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' />
                <span>Exporters who explicitly advertise "small order friendly" or "no minimum" on their website</span>
              </li>
              <li className='flex items-start gap-2'>
                <HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' />
                <span>Companies with warehouse/distribution presence in your destination country</span>
              </li>
              <li className='flex items-start gap-2'>
                <HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' />
                <span>Exporters who offer "container consolidation services" (they combine multiple small buyers)</span>
              </li>
              <li className='flex items-start gap-2'>
                <HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' />
                <span>Specialty/direct trade focused exporters rather than large commercial exporters</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-500'>
          <h4 className='font-bold text-lg mb-3'>Strategy 2: Use a Coffee Importer/Distributor</h4>
          <p className='text-sm mb-3'>
            Specialty coffee importers in your country already import full containers and break them down:
          </p>
          <div className='grid md:grid-cols-2 gap-3'>
            <div className='bg-white p-4 rounded-lg'>
              <p className='font-bold text-sm mb-2 text-green-700'>Advantages:</p>
              <ul className='text-xs space-y-1'>
                <li>• Buy 1-5 bags with no MOQ concerns</li>
                <li>• Fast delivery (already in-country)</li>
                <li>• No import documentation hassle</li>
                <li>• Sample multiple origins easily</li>
                <li>• Established quality control</li>
              </ul>
            </div>
            <div className='bg-white p-4 rounded-lg'>
              <p className='font-bold text-sm mb-2 text-red-700'>Disadvantages:</p>
              <ul className='text-xs space-y-1'>
                <li>• Higher per-kg cost (importer markup)</li>
                <li>• Limited origin selection</li>
                <li>• No direct relationship with Ethiopian source</li>
                <li>• Less control over harvest/processing</li>
                <li>• Availability depends on importer stock</li>
              </ul>
            </div>
          </div>
          <p className='text-xs mt-3 italic'>
            <span className='font-bold'>Popular US Importers:</span> Royal Coffee, Cafe Imports, Sustainable Harvest, Atlas Coffee Importers, InterAmerican Coffee. <span className='font-bold'>Europe:</span> Collaborative Coffee Source, Trabocca, Mercanta, Nordic Approach.
          </p>
        </div>

        <div className='bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-500'>
          <h4 className='font-bold text-lg mb-3'>Strategy 3: Partner with Other Roasters</h4>
          <p className='text-sm mb-3'>
            Split a container with other small roasters in your area:
          </p>
          <div className='bg-white p-4 rounded-lg'>
            <p className='font-bold text-sm mb-2'>How It Works:</p>
            <p className='text-xs mb-3'>
              Form a buying group with 3-5 other small roasters. Collectively order a full container (300 bags), split costs and coffees. Each roaster gets 60-100 bags at full-container pricing.
            </p>
            <p className='font-bold text-sm mb-2'>Logistics Considerations:</p>
            <ul className='text-xs space-y-1'>
              <li>• One company acts as importer of record (handles customs, documentation)</li>
              <li>• Container delivered to central location, then split</li>
              <li>• Agree upfront on coffee selection, cost allocation, payment terms</li>
              <li>• Consider hiring customs broker familiar with "split containers"</li>
            </ul>
            <p className='text-xs mt-3 font-bold'>
              Pro Tip: Some specialty coffee associations (SCA local chapters) facilitate buying group formation.
            </p>
          </div>
        </div>

        <div className='bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-lg border-l-4 border-amber-500'>
          <h4 className='font-bold text-lg mb-3'>Strategy 4: Start with Samples, Scale Up</h4>
          <p className='text-sm mb-3'>
            Build credibility before asking for small commercial orders:
          </p>
          <div className='bg-white p-4 rounded-lg'>
            <p className='font-bold text-sm mb-2'>The Relationship Approach:</p>
            <ol className='text-sm space-y-2 list-decimal ml-5'>
              <li><span className='font-bold'>Phase 1:</span> Order samples (1-3 bags) at premium pricing to evaluate quality</li>
              <li><span className='font-bold'>Phase 2:</span> Place initial small commercial order (10-20 bags), clearly communicate plans to scale</li>
              <li><span className='font-bold'>Phase 3:</span> Increase order size with each shipment as your business grows</li>
              <li><span className='font-bold'>Phase 4:</span> Graduate to full container orders, negotiate best pricing</li>
            </ol>
            <p className='text-xs mt-3 italic'>
              Exporters are more willing to accommodate small orders from buyers demonstrating growth trajectory and long-term potential.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 6: CONSOLIDATION OPTIONS */}
      <h3 id="consolidation-options" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineTruck className='text-amber-600' />
        Container Consolidation & LCL Shipping Explained
      </h3>

      <p className='my-4'>
        <span className='font-bold'>Container consolidation</span> is the magic solution that makes small orders economically viable. Here's how it works:
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-4'>What Is Container Consolidation?</h4>
        <p className='text-sm mb-4'>
          An exporter (or freight forwarder) combines multiple small orders from different buyers into a single full container. Each buyer pays for their portion plus their share of shipping costs. This gives small buyers access to near-container pricing without needing full container volume.
        </p>
        
        <div className='bg-white p-5 rounded-lg border border-gray-300'>
          <p className='font-bold mb-3'>Example Consolidation Scenario:</p>
          <div className='grid md:grid-cols-2 gap-6'>
            <div>
              <p className='text-xs font-bold mb-2'>Container Contents (20ft, 300 bags):</p>
              <ul className='text-xs space-y-1'>
                <li>• Buyer A (USA): 80 bags Yirgacheffe Natural G1</li>
                <li>• Buyer B (USA): 60 bags Sidama Washed G1</li>
                <li>• Buyer C (USA): 50 bags Guji Natural G1</li>
                <li>• Buyer D (USA): 40 bags Harrar Natural G4</li>
                <li>• Buyer E (USA): 70 bags Limu Washed G2</li>
              </ul>
            </div>
            <div>
              <p className='text-xs font-bold mb-2'>Cost Allocation:</p>
              <ul className='text-xs space-y-1'>
                <li>• <span className='font-bold'>FOB price:</span> Each buyer pays their negotiated price</li>
                <li>• <span className='font-bold'>Shipping:</span> Split proportionally by weight (e.g., 80/300 = 26.7% of shipping)</li>
                <li>• <span className='font-bold'>Consolidation fee:</span> $200-500 per buyer for administrative handling</li>
                <li>• <span className='font-bold'>Destination charges:</span> Each pays their share of customs, port fees</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>LCL (Less Than Container Load) Shipping</h4>

      <p className='my-4'>
        <span className='font-bold'>LCL</span> is standard shipping industry terminology for consolidating multiple shippers' cargo (see the <a href='https://www.freightos.com/freight-resources/what-is-lcl/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>Freightos LCL guide</a>). In coffee:
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-6'>
        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold mb-3'>How LCL Works:</h5>
          <ol className='text-sm space-y-2 list-decimal ml-5'>
            <li>Multiple buyers order from same exporter (or exporter coordinates multiple buyers)</li>
            <li>Exporter consolidates all coffees into one container at origin</li>
            <li>Container ships as normal FCL (Full Container Load) to destination port</li>
            <li>At destination, container is "deconsolidated"-each buyer's coffee separated</li>
            <li>Each buyer arranges pickup of their portion or uses freight forwarder for delivery</li>
          </ol>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold mb-3'>LCL Cost Considerations:</h5>
          <ul className='text-sm space-y-2'>
            <li><HiOutlineCurrencyDollar className='inline mr-2 text-amber-600' />Per-kg shipping slightly higher than full container (extra handling)</li>
            <li><HiOutlineCurrencyDollar className='inline mr-2 text-amber-600' />Consolidation fees ($200-500 per buyer)</li>
            <li><HiOutlineCurrencyDollar className='inline mr-2 text-amber-600' />Deconsolidation charges at destination port</li>
            <li><HiOutlineCurrencyDollar className='inline mr-2 text-amber-600' />Still dramatically cheaper than air freight for small orders</li>
          </ul>
        </div>
      </div>

      <div className='bg-red-50 p-6 rounded-lg my-6 border-l-4 border-red-500'>
        <p className='font-bold mb-2 flex items-center gap-2'>
          <HiOutlineExclamationTriangle className='text-red-600' />
          LCL Limitations and Risk Management
        </p>
        <ul className='text-sm space-y-2'>
          <li><span className='font-bold'>Timing dependency:</span> You may wait for exporter to fill container with other buyers' orders (2&ndash;6 week delays possible)</li>
          <li><span className='font-bold'>Route restrictions:</span> LCL only works to major ports with consolidation services (not all destinations)</li>
          <li><span className='font-bold'>Less flexibility:</span> Harder to change order details once consolidation is scheduled</li>
          <li><span className='font-bold'>Quality risk:</span> Your coffee shares container with others. Poor storage handling of another buyer's portion (e.g., moisture-damaged bags) could affect ambient conditions in transit. Mitigate this by requesting GrainPro or hermetic liners for your bags specifically.</li>
          <li><span className='font-bold'>Dispute resolution:</span> If a quality issue arises with a consolidated shipment, establishing fault is harder than with a dedicated FCL. Get a pre-shipment sample, photograph bags at loading, and specify in your contract that the exporter's consolidation partner carries liability for cross-contamination.</li>
        </ul>
      </div>

      {/* SECTION 7: PRICING BY VOLUME */}
      <h3 id="pricing-by-volume" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='text-amber-600' />
        How Pricing Changes by Order Volume
      </h3>

      <p className='my-4'>
        Understanding the <span className='font-bold'>price-volume relationship</span> helps you make smart purchasing decisions. Here's typical pricing structure for Ethiopian specialty coffee:
      </p>

      <div className='overflow-x-auto my-8'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-amber-100'>
              <th className='border border-gray-300 p-3 text-left'>Order Size</th>
              <th className='border border-gray-300 p-3 text-left'>Typical FOB Price Range</th>
              <th className='border border-gray-300 p-3 text-left'>Price Premium</th>
              <th className='border border-gray-300 p-3 text-left'>Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-3'>
                <span className='font-bold'>Samples (1-3 bags)</span>
                <p className='text-xs'>60-180kg</p>
              </td>
              <td className='border border-gray-300 p-3'>
                <span className='font-bold'>$10&ndash;15/kg</span>
                <p className='text-xs text-red-600'>Often includes air freight in quote</p>
              </td>
              <td className='border border-gray-300 p-3 text-xs'>
                +60&ndash;100% vs container pricing
              </td>
              <td className='border border-gray-300 p-3 text-xs'>
                Quality evaluation, cupping, product development testing
              </td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3'>
                <span className='font-bold'>Very Small (5-10 bags)</span>
                <p className='text-xs'>300-600kg</p>
              </td>
              <td className='border border-gray-300 p-3'>
                <span className='font-bold'>$7.50&ndash;11.00/kg</span>
              </td>
              <td className='border border-gray-300 p-3 text-xs'>
                +30&ndash;50% vs container pricing
              </td>
              <td className='border border-gray-300 p-3 text-xs'>
                New roasters, menu testing, limited production runs
              </td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3'>
                <span className='font-bold'>Small (20-50 bags)</span>
                <p className='text-xs'>1,200-3,000kg</p>
              </td>
              <td className='border border-gray-300 p-3'>
                <span className='font-bold'>$6.50&ndash;9.00/kg</span>
              </td>
              <td className='border border-gray-300 p-3 text-xs'>
                +15&ndash;30% vs container pricing
              </td>
              <td className='border border-gray-300 p-3 text-xs'>
                Small roasters, LCL consolidation, seasonal offerings
              </td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3'>
                <span className='font-bold'>Medium (100-200 bags)</span>
                <p className='text-xs'>6,000-12,000kg</p>
              </td>
              <td className='border border-gray-300 p-3'>
                <span className='font-bold'>$5.50&ndash;8.00/kg</span>
              </td>
              <td className='border border-gray-300 p-3 text-xs'>
                +5&ndash;15% vs full container
              </td>
              <td className='border border-gray-300 p-3 text-xs'>
                Mid-size roasters, multi-origin containers
              </td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3'>
                <span className='font-bold'>Full Container (275-300 bags)</span>
                <p className='text-xs'>16,500-18,000kg</p>
              </td>
              <td className='border border-gray-300 p-3'>
                <span className='font-bold'>$5.00&ndash;7.50/kg</span>
                <p className='text-xs text-green-600'>Best pricing tier</p>
              </td>
              <td className='border border-gray-300 p-3 text-xs'>
                Baseline (0% premium)
              </td>
              <td className='border border-gray-300 p-3 text-xs'>
                Established roasters, importers, maximum efficiency
              </td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3'>
                <span className='font-bold'>Multiple Containers</span>
                <p className='text-xs'>50,000kg+</p>
              </td>
              <td className='border border-gray-300 p-3'>
                <span className='font-bold'>$4.80&ndash;7.20/kg</span>
                <p className='text-xs text-green-600'>Volume discount possible</p>
              </td>
              <td className='border border-gray-300 p-3 text-xs'>
                -3&ndash;8% vs single container
              </td>
              <td className='border border-gray-300 p-3 text-xs'>
                Large roasters, distributors, contract agreements
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium'>
          <span className='font-bold'>Important (pricing as of early 2026):</span> These are FOB (Free on Board) prices from Ethiopia. Add shipping ($0.30&ndash;0.50/kg for full container, higher for LCL), import duties (usually $0 for green coffee in most countries), and customs/port fees. Your <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline font-semibold'>landed cost</Link> will be $0.50&ndash;2.00/kg higher than FOB depending on destination and order size. Prices fluctuate with the C-market; confirm current offers directly with exporters. For a detailed walkthrough, see our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline font-semibold'>Ethiopian Coffee FOB Pricing Guide</Link>.
        </p>
      </div>

      {/* SECTION: PAYMENT TERMS AND MOQ */}
      <h3 id="payment-terms-moq" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='text-amber-600' />
        Payment Terms and How They Affect MOQ
      </h3>

      <p className='my-4'>
        Payment structure directly influences an exporter's willingness to accept smaller orders. The less financial risk you pose, the more flexibility you receive on MOQ. Here are the standard payment mechanisms in Ethiopian coffee trade:
      </p>

      <div className='space-y-6 my-8'>
        <div className='border-l-4 border-blue-500 pl-5 bg-blue-50 py-4 pr-4 rounded-r-lg'>
          <h4 className='font-bold text-lg mb-2'>Letter of Credit (LC)</h4>
          <p className='text-sm mb-2'>
            The standard for large, first-time transactions. Your bank guarantees payment to the exporter's bank upon presentation of compliant shipping documents. Typical for full-container orders and above.
          </p>
          <p className='text-xs'>
            <span className='font-bold'>MOQ effect:</span> LCs carry bank fees ($500&ndash;2,000+ per transaction), making them impractical for small orders. Most exporters require LC only for orders above $20,000&ndash;30,000. If you are ordering a full container, LC is the expected default.
          </p>
        </div>

        <div className='border-l-4 border-green-500 pl-5 bg-green-50 py-4 pr-4 rounded-r-lg'>
          <h4 className='font-bold text-lg mb-2'>Telegraphic Transfer (TT / Wire Transfer)</h4>
          <p className='text-sm mb-2'>
            Direct bank-to-bank wire transfer. Faster and cheaper than LC but requires trust. Common structure: 30&ndash;50% deposit on order confirmation, balance against copy of bill of lading before shipment.
          </p>
          <p className='text-xs'>
            <span className='font-bold'>MOQ effect:</span> TT lowers transaction costs, making sub-container orders viable. Exporters who accept TT for 10&ndash;50 bag orders usually require a higher deposit percentage (50%) to offset risk. For more on contract mechanics, see our <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline font-semibold'>Contracts and Payment Terms Guide</Link>.
          </p>
        </div>

        <div className='border-l-4 border-purple-500 pl-5 bg-purple-50 py-4 pr-4 rounded-r-lg'>
          <h4 className='font-bold text-lg mb-2'>Credit Terms (Net 30/60)</h4>
          <p className='text-sm mb-2'>
            Extended payment after delivery. Reserved for established buyers with proven track records. Allows you to sell the coffee before paying for it, improving cash flow significantly.
          </p>
          <p className='text-xs'>
            <span className='font-bold'>MOQ effect:</span> Exporters offering credit terms typically require larger minimum orders (full containers or multi-container commitments) and at least 6&ndash;12 months of relationship history with on-time payments.
          </p>
        </div>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium'>
          <span className='font-bold'>Practical Tip:</span> If you are a small buyer trying to reduce MOQ, offer 50% deposit via TT upfront. This reduces the exporter's financial risk and often unlocks flexibility on quantity. Pair it with a clear ramp-up plan (e.g., &ldquo;20 bags now, 50 bags next quarter&rdquo;) and you will stand out from vague inquiries.
        </p>
      </div>

      {/* SECTION: NEGOTIATION TACTICS */}
      <h3 id="negotiation-tactics" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineDocumentText className='text-amber-600' />
        MOQ Negotiation Tactics That Actually Work
      </h3>

      <p className='my-4'>
        MOQs aren't always set in stone. Here are negotiation approaches that have proven successful:
      </p>

      <div className='space-y-6 my-8'>
        <div className='bg-green-50 p-6 rounded-lg border border-green-200'>
          <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineCheckCircle className='text-green-600' />
            Tactic 1: The Long-Term Relationship Play
          </h4>
          <div className='bg-white p-4 rounded-lg border border-green-200'>
            <p className='text-sm mb-3'><span className='font-bold'>What to Say:</span></p>
            <p className='text-sm italic mb-3'>
              "We're a growing roaster planning to import Ethiopian coffee consistently. We'd like to start with 20 bags this season to establish quality standards and build customer demand, with plans to increase to 50-100 bags within 12 months and eventually full containers as our business scales. Can you accommodate this smaller initial order?"
            </p>
            <p className='text-xs'>
              <span className='font-bold'>Why it works:</span> Exporters prefer long-term relationships over one-time transactions. Demonstrating growth trajectory shows you're a strategic partner, not just a small buyer.
            </p>
          </div>
        </div>

        <div className='bg-blue-50 p-6 rounded-lg border border-blue-200'>
          <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineCheckCircle className='text-blue-600' />
            Tactic 2: The Multi-Origin Commitment
          </h4>
          <div className='bg-white p-4 rounded-lg border border-blue-200'>
            <p className='text-sm mb-3'><span className='font-bold'>What to Say:</span></p>
            <p className='text-sm italic mb-3'>
              "Rather than ordering 20 bags of one coffee, what if we order 20 bags each of three different origins (Yirgacheffe, Sidama, Guji) for 60 bags total? This diversifies our menu while bringing our order closer to your preferred MOQ."
            </p>
            <p className='text-xs'>
              <span className='font-bold'>Why it works:</span> Increases order value while maintaining your desired volume per origin. Shows you're serious and willing to invest.
            </p>
          </div>
        </div>

        <div className='bg-purple-50 p-6 rounded-lg border border-purple-200'>
          <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineCheckCircle className='text-purple-600' />
            Tactic 3: The Consolidation Offer
          </h4>
          <div className='bg-white p-4 rounded-lg border border-purple-200'>
            <p className='text-sm mb-3'><span className='font-bold'>What to Say:</span></p>
            <p className='text-sm italic mb-3'>
              "We need 25 bags but understand you prefer larger orders. Are you planning any consolidated containers to [your country] in the next 2-3 months that we could join? We're flexible on timing if it helps you fill a container."
            </p>
            <p className='text-xs'>
              <span className='font-bold'>Why it works:</span> Makes the exporter's logistics easier while getting you what you need. Flexibility on timing is valuable to exporters managing consolidation schedules.
            </p>
          </div>
        </div>

        <div className='bg-amber-50 p-6 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineCheckCircle className='text-amber-600' />
            Tactic 4: The Sample-to-Commercial Pipeline
          </h4>
          <div className='bg-white p-4 rounded-lg border border-amber-200'>
            <p className='text-sm mb-3'><span className='font-bold'>What to Say:</span></p>
            <p className='text-sm italic mb-3'>
              "We've tested your samples and our customers love them. We're ready to place a 15-bag commercial order now, with another 15-bag order scheduled for next quarter. If quality remains consistent, we'll transition to 50+ bag orders by harvest season."
            </p>
            <p className='text-xs'>
              <span className='font-bold'>Why it works:</span> Demonstrates you've already invested (sample purchase) and provides specific growth timeline. "If quality remains consistent" gives you an out while showing commitment.
            </p>
          </div>
        </div>

        <div className='bg-red-50 p-6 rounded-lg border border-red-200'>
          <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineCheckCircle className='text-red-600' />
            Tactic 5: The Premium Quality Angle
          </h4>
          <div className='bg-white p-4 rounded-lg border border-red-200'>
            <p className='text-sm mb-3'><span className='font-bold'>What to Say:</span></p>
            <p className='text-sm italic mb-3'>
              "We're specifically looking for G1 natural Yirgacheffe scoring 88+. We understand micro-lots of this quality may have limited availability. We're willing to pay a premium for smaller quantities of exceptional coffee rather than ordering more volume of standard quality."
            </p>
            <p className='text-xs'>
              <span className='font-bold'>Why it works:</span> Positions you as a quality-focused buyer willing to pay more. High-grade micro-lots naturally come in smaller volumes, making small MOQ more acceptable.
            </p>
          </div>
        </div>
      </div>

      <div className='bg-gray-100 p-6 rounded-lg my-8 border border-gray-300'>
        <h5 className='font-bold mb-3'>What NOT to Say in MOQ Negotiations:</h5>
        <ul className='space-y-2 text-sm'>
          <li className='flex items-start gap-2'>
            <HiOutlineExclamationTriangle className='text-red-600 mt-0.5 flex-shrink-0' />
            <span><span className='font-bold'>"Your competitor offers smaller MOQ"</span> – Comes across as playing exporters against each other; rarely effective</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineExclamationTriangle className='text-red-600 mt-0.5 flex-shrink-0' />
            <span><span className='font-bold'>"We're a small startup"</span> – Emphasizing small size undermines your position; focus on growth instead</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineExclamationTriangle className='text-red-600 mt-0.5 flex-shrink-0' />
            <span><span className='font-bold'>"This is all we can afford"</span> – Frames conversation around your limitations rather than mutual opportunity</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineExclamationTriangle className='text-red-600 mt-0.5 flex-shrink-0' />
            <span><span className='font-bold'>"Can you break your rules for us?"</span> – Direct challenge to MOQ policy; better to propose solutions that work for both parties</span>
          </li>
        </ul>
      </div>

      {/* EMAIL FRAMEWORK */}
      <div className='bg-white p-6 rounded-lg my-8 border-2 border-amber-300'>
        <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineDocumentText className='text-amber-600' />
          First-Contact Email Framework for MOQ Negotiation
        </h4>
        <p className='text-sm mb-4'>
          Use this structure when reaching out to an Ethiopian exporter for the first time. Professional, specific, and growth-oriented inquiries get responses; vague ones get ignored.
        </p>
        <div className='bg-gray-50 p-4 rounded-lg text-sm font-inconsolata leading-relaxed'>
          <p className='font-bold mb-2'>Subject: [Your Company] &ndash; Inquiry for [Grade] [Origin] Green Coffee &ndash; [Volume] Bags</p>
          <p className='mb-3'>Dear [Exporter Name / Export Team],</p>
          <p className='mb-3'>My name is [Name], [Title] at [Company], a [specialty roaster / importer / distributor] based in [City, Country]. We serve [brief description: e.g., &ldquo;35 wholesale accounts and a growing DTC subscription program&rdquo;].</p>
          <p className='mb-3'>We are currently sourcing Ethiopian specialty coffee and are interested in:</p>
          <ul className='list-disc ml-5 mb-3 space-y-1'>
            <li><span className='font-bold'>Origin/Grade:</span> [e.g., Yirgacheffe G1 Natural, Guji G2 Washed]</li>
            <li><span className='font-bold'>Volume:</span> [e.g., 25 bags (1,500kg) for this order]</li>
            <li><span className='font-bold'>Timeline:</span> [e.g., delivery by Q3 2026]</li>
            <li><span className='font-bold'>Payment:</span> [e.g., TT with 50% deposit, balance against shipping docs]</li>
          </ul>
          <p className='mb-3'>Our 12-month projection is [e.g., 100&ndash;150 bags across 2&ndash;3 shipments], and we are looking for a long-term export partner who can grow with us. We would be happy to start with cupping samples if available.</p>
          <p className='mb-3'>Could you share your current availability, FOB pricing, and MOQ terms? We can also provide [roaster license / import permit / references] if helpful.</p>
          <p>Best regards,<br/>[Name, Company, Website, Phone]</p>
        </div>
        <p className='text-xs mt-3 italic text-gray-500'>
          Tip: Attach your company logo, website link, and any certifications. Ethiopian exporters receive dozens of inquiries daily&mdash;specificity and professionalism set you apart.
        </p>
      </div>

      {/* SECTION 9: SAMPLE PROGRAMS */}
      <h3 id="sample-programs" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBeaker className='text-amber-600' />
        Understanding Sample Programs vs. Commercial Orders
      </h3>

      <p className='my-4'>
        Most Ethiopian exporters distinguish between <span className='font-bold'>sample orders</span> (for evaluation) and <span className='font-bold'>commercial orders</span> (for resale). Understanding this distinction is crucial:
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-8'>
        <div className='bg-blue-50 p-6 rounded-lg border border-blue-200'>
          <h4 className='font-bold text-lg mb-4 text-blue-800'>Sample Orders</h4>
          <div className='space-y-3 text-sm'>
            <div>
              <p className='font-bold mb-1'>Purpose:</p>
              <p className='text-xs'>Pre-shipment quality evaluation, cupping, roast profile development, customer testing</p>
            </div>
            <div>
              <p className='font-bold mb-1'>Typical Size:</p>
              <p className='text-xs'>1-5 bags (60-300kg), sometimes as small as 5-10kg air samples</p>
            </div>
            <div>
              <p className='font-bold mb-1'>Pricing:</p>
              <p className='text-xs'>Premium pricing ($10-15/kg), often includes air freight</p>
            </div>
            <div>
              <p className='font-bold mb-1'>Shipping:</p>
              <p className='text-xs'>Air freight (1-2 weeks) or courier (DHL, FedEx) for small samples</p>
            </div>
            <div>
              <p className='font-bold mb-1'>Expectation:</p>
              <p className='text-xs'>If approved, buyer places commercial order. No obligation but builds relationship.</p>
            </div>
          </div>
        </div>

        <div className='bg-green-50 p-6 rounded-lg border border-green-200'>
          <h4 className='font-bold text-lg mb-4 text-green-800'>Commercial Orders</h4>
          <div className='space-y-3 text-sm'>
            <div>
              <p className='font-bold mb-1'>Purpose:</p>
              <p className='text-xs'>Resale to customers, production inventory, retail/wholesale distribution</p>
            </div>
            <div>
              <p className='font-bold mb-1'>Typical Size:</p>
              <p className='text-xs'>Varies by exporter: 10-300+ bags depending on MOQ policy</p>
            </div>
            <div>
              <p className='font-bold mb-1'>Pricing:</p>
              <p className='text-xs'>Volume-based pricing ($5.00-8.00/kg depending on size), negotiable</p>
            </div>
            <div>
              <p className='font-bold mb-1'>Shipping:</p>
              <p className='text-xs'>Ocean freight (6-8 weeks), occasionally air for rush orders</p>
            </div>
            <div>
              <p className='font-bold mb-1'>Expectation:</p>
              <p className='text-xs'>Contractual commitment, <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='underline font-semibold'>payment terms (LC, TT, deposit)</Link>, ongoing relationship</p>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border-l-4 border-amber-500'>
        <h5 className='font-bold mb-3'>The Gray Area: "Small Commercial Orders"</h5>
        <p className='text-sm mb-3'>
          Some exporters offer a middle tier: <span className='font-bold'>small commercial orders</span> of 5-15 bags at pricing between sample and full commercial rates. This serves buyers who:
        </p>
        <ul className='text-sm space-y-1 ml-5'>
          <li>• Have successfully tested samples and want modest initial inventory</li>
          <li>• Need ocean-shipped coffee (samples are usually air freight)</li>
          <li>• Are building customer base before committing to larger volumes</li>
          <li>• Want to test multiple origins simultaneously (5 bags each of 3 origins = 15 bags)</li>
        </ul>
        <p className='text-xs mt-3 italic'>
          Pricing for small commercial orders typically runs $7.50-10.00/kg&mdash;notably better than samples but higher than full commercial containers.
        </p>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>How to Approach Sample Orders Strategically</h4>

      <div className='bg-white p-6 rounded-lg my-6 border border-gray-200'>
        <ol className='space-y-3 list-decimal ml-5'>
          <li className='text-sm'>
            <span className='font-bold'>Be transparent about intent:</span> Clearly state you're evaluating for potential commercial orders, not just sampling for curiosity.
          </li>
          <li className='text-sm'>
            <span className='font-bold'>Provide timeline:</span> "We plan to make commercial order decisions by [date]" shows you're serious and organized.
          </li>
          <li className='text-sm'>
            <span className='font-bold'>Request specific lots:</span> Rather than generic "send Yirgacheffe samples," ask for specific harvest lots, grades, or processing methods you're interested in.
          </li>
          <li className='text-sm'>
            <span className='font-bold'>Give feedback:</span> After cupping samples, provide detailed feedback. Even if you don't order, this builds credibility for future sampling.
          </li>
          <li className='text-sm'>
            <span className='font-bold'>Sample multiple exporters:</span> Don't rely on one source. Sample 3-5 exporters simultaneously to compare quality and find best fit.
          </li>
          <li className='text-sm'>
            <span className='font-bold'>Negotiate sample cost deduction:</span> Some exporters will credit sample purchase toward commercial order (e.g., "Sample cost deducted if you order 50+ bags within 60 days").
          </li>
        </ol>
      </div>

      {/* FINAL RECOMMENDATIONS */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6'>
        Final Recommendations: Making MOQ Work for Your Business
      </h3>

      <p className='my-4'>
        MOQ doesn't have to be a barrier to importing Ethiopian coffee-it just requires strategic planning:
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-8'>
        <div className='bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg'>
          <h4 className='font-bold mb-3'>For New/Small Roasters (0-5 bags per month)</h4>
          <ul className='text-sm space-y-2'>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' />
              <span>Start with domestic importers/distributors for 1-2 years</span>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' />
              <span>Build direct relationships with small-volume-friendly exporters</span>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' />
              <span>Join or form roaster buying groups</span>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' />
              <span>Use samples aggressively to build importer relationships</span>
            </li>
          </ul>
        </div>

        <div className='bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg'>
          <h4 className='font-bold mb-3'>For Growing Roasters (10-50 bags per quarter)</h4>
          <ul className='text-sm space-y-2'>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' />
              <span>Transition to LCL consolidation orders (20-50 bags)</span>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' />
              <span>Negotiate based on growth trajectory and repeat orders</span>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' />
              <span>Order multiple origins to increase total volume</span>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' />
              <span>Plan 2-3 shipments annually rather than one large order</span>
            </li>
          </ul>
        </div>

        <div className='bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg'>
          <h4 className='font-bold mb-3'>For Established Roasters (Full containers)</h4>
          <ul className='text-sm space-y-2'>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' />
              <span>Maximize efficiency with full 20ft containers (275-300 bags)</span>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' />
              <span>Negotiate volume discounts for multi-container orders</span>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' />
              <span>Diversify within container (multiple origins/grades)</span>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' />
              <span>Consider direct farm/cooperative relationships</span>
            </li>
          </ul>
        </div>

        <div className='bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg'>
          <h4 className='font-bold mb-3'>Universal Best Practices</h4>
          <ul className='text-sm space-y-2'>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' />
              <span>Always clarify MOQ upfront (first email/call)</span>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' />
              <span>Ask about consolidation options explicitly</span>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' />
              <span>Understand true landed costs including shipping/duties</span>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' />
              <span>Build relationships with 2-3 reliable exporters</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ETHIO COFFEE EXPORT CTA */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Flexible MOQ Options from Ethio Coffee Import and Export PLC</h4>
        <p className='mb-4'>
          At Ethio Coffee Import and Export PLC, we understand that one size doesn&rsquo;t fit all. We work with roasters at every stage of growth:
        </p>
        <div className='grid md:grid-cols-3 gap-4 mb-4'>
          <div className='bg-primary/10 p-4 rounded-lg'>
            <p className='font-bold mb-2 text-sm'>Sample Program</p>
            <p className='text-xs'>1-3 bags air shipped for quality evaluation. Sample cost credited toward first commercial order of 20+ bags.</p>
          </div>
          <div className='bg-primary/10 p-4 rounded-lg'>
            <p className='font-bold mb-2 text-sm'>Small Orders</p>
            <p className='text-xs'>10-50 bags via container consolidation to major markets (USA, EU, Asia). Regular consolidated shipments.</p>
          </div>
          <div className='bg-primary/10 p-4 rounded-lg'>
            <p className='font-bold mb-2 text-sm'>Container Orders</p>
            <p className='text-xs'>Full 20ft containers (275-300 bags) at best pricing. Multi-origin containers available. Volume discounts for repeat customers.</p>
          </div>
        </div>
        <p className='text-sm mb-4'>
          We source specialty-grade Ethiopian coffee from Yirgacheffe, Sidama, Guji, Harrar, and Limu regions. Full traceability, quality documentation, and transparent pricing.
        </p>
        <p>
          <Link href='/contact-us' className='font-bold underline'>Contact us</Link> to discuss your specific MOQ needs and current availability.
        </p>
      </div>

      {/* FAQ SECTION */}
      <section className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions About Ethiopian Coffee Minimum Order Quantities</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What is the minimum order quantity for Ethiopian green coffee?</h4>
            <p className="text-sm text-gray-600">The standard MOQ for Ethiopian green coffee is one full 20-foot container, which holds 275 to 300 bags (each 60kg). Some exporters offer sample lots starting at 5 to 10 bags for first-time buyers. In the current 2025&ndash;2026 market, some exporters have raised minimums due to tighter allocation and higher prices.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Can I order less than a full container of Ethiopian coffee?</h4>
            <p className="text-sm text-gray-600">Yes. Some exporters offer LCL (less than container load) shipments, consolidated containers, or work with trading companies that aggregate smaller orders. Expect to pay a premium per kilogram for sub-container quantities. See the <a href="#strategies-small-roasters" className="text-amber-700 underline">strategies for small roasters</a> section above.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How much does a full container of Ethiopian coffee cost in 2026?</h4>
            <p className="text-sm text-gray-600">A full 20-foot container of Ethiopian specialty coffee (275 to 300 bags) typically costs between $82,500 and $162,000 FOB Djibouti as of early 2026, depending on grade, origin, and market conditions. This is significantly higher than pre-2024 prices due to the global Arabica price surge. See our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 underline'>FOB pricing guide</Link> for current rates.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Do Ethiopian coffee exporters offer sample orders before full containers?</h4>
            <p className="text-sm text-gray-600">Most reputable exporters offer cupping samples (200g to 500g) at a nominal cost. Some also offer trial lots of 5 to 10 bags so buyers can test roast and evaluate before committing to a full container. Sample pricing runs $10&ndash;15/kg including air freight.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What is the difference between FCL and LCL shipping for Ethiopian coffee?</h4>
            <p className="text-sm text-gray-600">FCL (full container load) means you fill an entire container yourself, offering the best per-unit cost. LCL (less than container load) shares container space with other shipments, costing more per bag but requiring lower total investment. LCL adds quality risks from shared containers&mdash;request hermetic liners for your portion.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What payment terms do Ethiopian coffee exporters accept?</h4>
            <p className="text-sm text-gray-600">The three main payment methods are Letter of Credit (LC), Telegraphic Transfer (TT), and occasionally open credit for established relationships. LC is standard for full container orders. TT with 30&ndash;50% deposit is common for smaller orders from new buyers. See our <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 underline'>contracts and payment terms guide</Link> for details.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How do 2025&ndash;2026 coffee prices affect MOQ for Ethiopian coffee?</h4>
            <p className="text-sm text-gray-600">High C-market prices (above $4.00/lb in early 2026) have pushed Ethiopian FOB prices up 40&ndash;60%. This means the capital required for any given order is significantly higher. Some exporters have tightened MOQs to prioritize committed buyers, while others have become more open to smaller orders at premium pricing to diversify risk. Budget 30&ndash;50% more than pre-2024 estimates for the same physical volume.</p>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <div className='my-8 p-6 bg-gray-50 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
          <div>
            <h5 className='font-semibold mb-2 text-sm'>Import Guides</h5>
            <ul className='space-y-1.5 text-sm'>
              <li><Link href='/insights/how-to-import-ethiopian-coffee-to-usa' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Importing to USA</Link></li>
              <li><Link href='/insights/importing-ethiopian-coffee-to-canada-guide' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Importing to Canada</Link></li>
              <li><Link href='/insights/importing-ethiopian-coffee-to-uk' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Importing to UK</Link></li>
              <li><Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Sourcing Green Coffee</Link></li>
            </ul>
          </div>
          <div>
            <h5 className='font-semibold mb-2 text-sm'>Pricing &amp; Costs</h5>
            <ul className='space-y-1.5 text-sm'>
              <li><Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> FOB Pricing Guide</Link></li>
              <li><Link href='/insights/rising-ethiopian-coffee-prices-explained' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Coffee Prices Explained</Link></li>
              <li><Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Landed Cost Calculator</Link></li>
              <li><Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Contracts &amp; Payment Terms</Link></li>
            </ul>
          </div>
          <div>
            <h5 className='font-semibold mb-2 text-sm'>Trade &amp; Supply Chain</h5>
            <ul className='space-y-1.5 text-sm'>
              <li><Link href='/ethiopian-coffee-exporter' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Ethiopian Coffee Exporter</Link></li>
              <li><Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Understanding ECX</Link></li>
              <li><Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Harvest Calendar &amp; Seasons</Link></li>
              <li><Link href='/insights/ethiopia-china-coffee-trade-partnership' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Ethiopia-China Partnership</Link></li>
            </ul>
          </div>
          <div>
            <h5 className='font-semibold mb-2 text-sm'>Quality &amp; Origins</h5>
            <ul className='space-y-1.5 text-sm'>
              <li><Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Heirloom Varieties</Link></li>
              <li><Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Certifications Guide</Link></li>
              <li><Link href='/insights/certified-organic-coffee-bean-exporters-bulk-orders' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Organic Coffee Bulk Guide</Link></li>
              <li><Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Shelf Life &amp; Storage</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Ready to Place Your First Order?</h4>
        <p className='my-2'>
          At <span className='font-bold'>Ethio Coffee Import and Export PLC</span>, we work with importers of all sizes. Contact us to discuss MOQs, pricing, and sample availability for your market.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Our Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Contact Us</Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>How to Order</Link>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> This guide covers minimum order quantities for Ethiopian green coffee exports, including FCL and LCL options, 2025&ndash;2026 market pricing, payment terms, supply chain timing, and practical negotiation strategies for importers of all sizes. Updated March 2026 with current market conditions.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot; <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> &middot; <Link href='/about' className='underline'>About Ethio Coffee</Link> &middot; <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

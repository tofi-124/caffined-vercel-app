import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineBuildingOffice2,
  HiOutlineUserGroup,
  HiOutlineScale,
  HiOutlineShieldCheck,
  HiOutlineCheckCircle,
  HiOutlineMapPin,
  HiOutlineCube,
  HiOutlineGlobeAlt,
  HiOutlineCurrencyDollar,
  HiOutlineChartBar,
  HiOutlineLightBulb,
  HiOutlineRocketLaunch,
  HiOutlineClipboardDocumentCheck,
  HiOutlineDocumentText,
  HiOutlineBeaker
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function PrivateVsCooperativeEthiopianCoffeeExporters({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Compare private and cooperative Ethiopian coffee exporters on pricing, logistics, EUDR compliance, certifications, and which sourcing channel fits your business.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Private exporters and cooperative unions operate under different structures, pricing models, and compliance capabilities
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Private vs cooperative Ethiopian coffee exporters sourcing comparison'
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
          Private Ethiopian coffee exporters deliver faster logistics, flexible lot sizes, and vertically integrated quality control. Cooperative unions provide farm-level traceability, certification access (Organic, Fair Trade, Rainforest Alliance), and stronger EUDR documentation. Most successful importers source from both channels to balance operational speed with ethical sourcing narratives.
        </p>
      </div>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Export / Sourcing Strategy / Market Analysis</span>
      </div>

      {/* INTRODUCTION */}
      <p className='my-4'>
        Your Ethiopian coffee sample scored 87 on the cupping table, but the exporter cannot confirm EUDR geolocation data for the lot. Do you switch channels, accept the compliance risk, or start the sourcing process over? This is the kind of decision importers face when choosing between <span className='font-bold'>private coffee exporters</span> and <span className='font-bold'>cooperative unions</span> in Ethiopia.
      </p>

      <p className='my-4'>
        Ethiopia exported a record US$2.65 billion in coffee during the 2024/25 fiscal year, with both private exporters and cooperative unions contributing to that total (<a href='https://apps.fas.usda.gov/newgainapi/api/Report/DownloadReportByFileName?fileName=Coffee%20Annual_Addis%20Ababa_Ethiopia_ET2025-0004.pdf' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>USDA GAIN, 2025</a>). The government targets 7.8 million bags for 2025/26. Yet these two export models differ sharply in structure, pricing, compliance readiness, and the buyer experience they offer.
      </p>

      <p className='my-4'>
        Directive 1106/2025 from the Ethiopian Coffee and Tea Authority (ECTA) has raised minimum capital requirements and tightened licensing standards, reshaping which companies can export. This guide breaks down both models, covers the <Link href='/insights/direct-trade-ethiopian-farmers' className='text-amber-700 hover:underline'>Direct Specialty Line (DSL)</Link> as a third channel, and provides a practical framework for choosing the right partner.
      </p>

      {/* PRIVATE EXPORTERS SECTION */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBuildingOffice2 className='text-amber-600' />
        Private Coffee Exporters: How They Operate
      </h3>

      <p className='my-4'>
        Private exporters are independent commercial companies licensed by ECTA to purchase, process, and ship Ethiopian coffee internationally. They source from washing stations, estates, and sometimes directly from farmers. Most established private exporters own dry mills, operate ECTA-certified cupping labs, and manage their own logistics from Addis Ababa to the Port of Djibouti.
      </p>

      <p className='my-4'>
        Major private exporters include Daye Bensa, Kerchanshe Trading, Tracon Trading, and <Link href='/insights/ethio-coffee-export-launch' className='text-amber-700 hover:underline'>Ethio Coffee Import and Export PLC</Link>. These companies source across multiple regions (Yirgacheffe, Sidamo, Guji, Limu, Jimma, Harar) and offer a range of grades from commercial G4/G5 to specialty Q1 micro-lots.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Directive 1106/2025: Capital Requirements</h4>

      <p className='my-4'>
        ECTA's <a href='https://www.ecta.gov.et' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>Directive 1106/2025</a> raised the minimum registered capital for private coffee exporters to <span className='font-bold'>15 million Ethiopian Birr</span>, a fifteen-fold increase from the previous threshold. Cooperative unions operating as commercial entities face a higher bar: <span className='font-bold'>20 million Birr</span>. The directive aims to consolidate the sector around well-financed, professionally managed exporters.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-4 text-left font-bold'>Requirement</th>
              <th className='p-4 text-left font-bold'>Private Exporters</th>
              <th className='p-4 text-left font-bold'>Cooperative Unions</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200 hover:bg-gray-50'>
              <td className='p-4 font-semibold'>Minimum Capital</td>
              <td className='p-4'>15M Ethiopian Birr</td>
              <td className='p-4'>20M Ethiopian Birr</td>
            </tr>
            <tr className='border-b border-gray-200 hover:bg-gray-50 bg-blue-50'>
              <td className='p-4 font-semibold'>ECTA-Certified Lab</td>
              <td className='p-4'>Required</td>
              <td className='p-4'>Required</td>
            </tr>
            <tr className='border-b border-gray-200 hover:bg-gray-50'>
              <td className='p-4 font-semibold'>Dry Mill Ownership</td>
              <td className='p-4'>Common (vertically integrated)</td>
              <td className='p-4'>Union-operated shared facilities</td>
            </tr>
            <tr className='hover:bg-gray-50 bg-blue-50'>
              <td className='p-4 font-semibold'>Effect on Sector</td>
              <td className='p-4'>Fewer, larger, better-capitalized exporters</td>
              <td className='p-4'>Stronger unions; weaker ones merge or exit</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        For international buyers, this consolidation reduces counterparty risk. Companies that meet the 15M Birr threshold have the financial capacity to absorb market fluctuations, fund pre-shipment inventory, and honor forward contracts even when cherry prices spike.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Strengths of Private Exporters</h4>

      <div className='space-y-6 my-6'>
        <div className='bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineRocketLaunch className='text-blue-600' />
            Logistics and Speed
          </h5>
          <p className='text-sm text-gray-800'>
            Private exporters manage their own dry mills and maintain relationships with freight forwarders and shipping lines. This vertical integration enables tighter control over milling schedules, container booking, and phytosanitary documentation. Lead times from contract signing to container loading typically range from 3 to 6 weeks, depending on the season and grade availability.
          </p>
        </div>

        <div className='bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border border-green-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineShieldCheck className='text-green-600' />
            Quality Control
          </h5>
          <p className='text-sm text-gray-800'>
            In-house ECTA-certified labs allow private exporters to cup, grade, and screen every lot before shipping. Buyers receive pre-shipment samples that closely match the final container. This matters for roasters blending Ethiopian coffee into year-round products where consistency is non-negotiable.
          </p>
        </div>

        <div className='bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineCube className='text-purple-600' />
            Volume and Grade Flexibility
          </h5>
          <p className='text-sm text-gray-800'>
            Private exporters purchase from dozens of washing stations across multiple regions. They can offer a single container split across Yirgacheffe G1, Sidamo G2, and Guji G1 if needed. This flexibility suits mid-size roasters who need variety without committing to full-container volumes of a single origin.
          </p>
        </div>

        <div className='bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-lg border border-amber-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineDocumentText className='text-amber-600' />
            Communication and Responsiveness
          </h5>
          <p className='text-sm text-gray-800'>
            Decision-making authority sits with the company owner or export manager, not a committee. Sample requests, price negotiations, and contract amendments move faster. Many private exporters respond to buyer inquiries within 24 hours and assign dedicated account managers to recurring customers.
          </p>
        </div>
      </div>

      {/* COOPERATIVE SECTION */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineUserGroup className='text-amber-600' />
        Cooperative Unions: How They Operate
      </h3>

      <p className='my-4'>
        Cooperative unions are farmer-owned federations. Individual smallholder farmers (typically cultivating under 2 hectares) join primary cooperatives. Multiple primaries unite into a union, which holds the ECTA export license and manages international sales. Ethiopia has several major unions: the <span className='font-bold'>Oromia Coffee Farmers Cooperative Union (OCFCU)</span>, <span className='font-bold'>Yirgacheffe Coffee Farmers Cooperative Union (YCFCU)</span>, <span className='font-bold'>Sidama Coffee Farmers Cooperative Union (SCFCU)</span>, and the <span className='font-bold'>Kaffa Forest Coffee Farmers Cooperative Union</span>.
      </p>

      <p className='my-4'>
        Farmers deliver cherry to cooperative washing stations. The cooperative processes, grades, and markets the coffee. Profits return to members through second payments and dividends. Unions also invest in schools, health clinics, and clean water infrastructure, which gives roasters an authentic community-impact narrative for their end consumers.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Strengths of Cooperative Unions</h4>

      <div className='space-y-6 my-6'>
        <div className='bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineMapPin className='text-blue-600' />
            Farm-Level Traceability
          </h5>
          <p className='text-sm text-gray-800'>
            Cooperatives maintain member registries that link each delivered lot to a specific farmer, GPS-mapped plot, and primary cooperative. This <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>traceability depth</Link> is difficult for private exporters to replicate at scale, and it provides the documentation backbone for <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline'>EUDR compliance</Link>.
          </p>
        </div>

        <div className='bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border border-green-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineShieldCheck className='text-green-600' />
            Certification Access
          </h5>
          <p className='text-sm text-gray-800'>
            Most major unions hold <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Organic, Fair Trade, and Rainforest Alliance certifications</Link>. The cooperative structure naturally aligns with certification criteria: democratic governance, profit-sharing, environmental stewardship, and documented farmer training. For roasters whose retail customers require certified coffee, cooperatives are the most straightforward source.
          </p>
        </div>

        <div className='bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineGlobeAlt className='text-purple-600' />
            EUDR Readiness
          </h5>
          <p className='text-sm text-gray-800'>
            Unions like YCFCU and SCFCU have invested in GPS mapping of smallholder plots, satellite imagery verification, and digital farmer registries. This documentation proves coffee originates from land that was not recently deforested, a requirement EU importers must verify under the EU Deforestation Regulation. Private exporters are digitizing traceability systems for EUDR, but cooperatives had a head start because member registration is core to their model.
          </p>
        </div>

        <div className='bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-lg border border-amber-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineCurrencyDollar className='text-amber-600' />
            Price Stability and Farmer Impact
          </h5>
          <p className='text-sm text-gray-800'>
            Cooperatives buffer farmers against market volatility by offering pre-harvest financing and stable base prices. When coffee sells at a premium, surplus returns to members. This social impact creates marketing value for roasters. Brands like Counter Culture, Intelligentsia, and Has Bean have built long-term programs around cooperative partnerships.
          </p>
        </div>
      </div>

      {/* DSL SECTION */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineChartBar className='text-amber-600' />
        The Third Channel: Direct Specialty Line (DSL)
      </h3>

      <p className='my-4'>
        Not all Ethiopian coffee moves through the Ethiopia Commodity Exchange (ECX). The <Link href='/insights/direct-trade-ethiopian-farmers' className='text-amber-700 hover:underline'>Direct Specialty Line</Link> allows both private exporters and cooperatives to sell specialty-grade coffee directly to international buyers, bypassing the ECX auction floor. DSL lots carry full traceability from washing station to port, making them the channel of choice for specialty importers seeking single-origin and micro-lot coffee.
      </p>

      <p className='my-4'>
        Under DSL, the exporter (private or cooperative) contracts directly with the buyer for a specific lot at a negotiated price. The coffee undergoes <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>CLU (Coffee Liquoring Unit) inspection</Link> at ECTA but is not traded on the exchange. DSL volumes have grown steadily since ECX reforms in 2017, and the channel now accounts for a significant share of specialty Ethiopian coffee exports.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <p className='font-bold text-lg mb-2 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-blue-600' />
          DSL Relevance for Buyers
        </p>
        <p className='text-sm text-gray-700'>
          Both private exporters and cooperatives use DSL for their top lots. When evaluating an exporter, ask which share of their volume moves through DSL versus ECX. A high DSL ratio indicates the exporter focuses on specialty and traceable coffee.
        </p>
      </div>

      {/* COMPARISON TABLE */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineScale className='text-amber-600' />
        Head-to-Head Comparison: Private vs Cooperative Ethiopian Coffee Exporters
      </h3>

      <p className='my-4'>
        The table below summarizes the operational differences that matter most for sourcing decisions. Use it alongside the decision framework further down.
      </p>

      <div className='overflow-x-auto my-8'>
        <table className='w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-4 text-left font-bold'>Dimension</th>
              <th className='p-4 text-left font-bold'>Private Exporters</th>
              <th className='p-4 text-left font-bold'>Cooperative Unions</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200 hover:bg-gray-50'>
              <td className='p-4 font-semibold'>Legal Structure</td>
              <td className='p-4'>PLC or share company, owner-managed</td>
              <td className='p-4'>Farmer-owned federation (union of primaries)</td>
            </tr>
            <tr className='border-b border-gray-200 hover:bg-gray-50 bg-blue-50'>
              <td className='p-4 font-semibold'>Capital Threshold</td>
              <td className='p-4'>15M Birr (Directive 1106/2025)</td>
              <td className='p-4'>20M Birr (if operating as a company)</td>
            </tr>
            <tr className='border-b border-gray-200 hover:bg-gray-50'>
              <td className='p-4 font-semibold'>Best For</td>
              <td className='p-4'>High-volume blends, flexible lot sizes, speed</td>
              <td className='p-4'>Certified coffee, origin stories, EUDR compliance</td>
            </tr>
            <tr className='border-b border-gray-200 hover:bg-gray-50 bg-blue-50'>
              <td className='p-4 font-semibold'>Certifications</td>
              <td className='p-4'>Variable; depends on source farms and exporter investment</td>
              <td className='p-4'>Strong: Organic, Fair Trade, Rainforest Alliance common</td>
            </tr>
            <tr className='border-b border-gray-200 hover:bg-gray-50'>
              <td className='p-4 font-semibold'>Logistics Speed</td>
              <td className='p-4'>Fast; vertically integrated mill-to-port pipeline</td>
              <td className='p-4'>Moderate; union-managed shared infrastructure</td>
            </tr>
            <tr className='border-b border-gray-200 hover:bg-gray-50 bg-blue-50'>
              <td className='p-4 font-semibold'>EUDR Compliance</td>
              <td className='p-4'>Digitizing rapidly; GPS mapping in progress</td>
              <td className='p-4'>Advanced; farm-level registries and plot mapping established</td>
            </tr>
            <tr className='border-b border-gray-200 hover:bg-gray-50'>
              <td className='p-4 font-semibold'>Traceability Depth</td>
              <td className='p-4'>Good to excellent (varies by exporter)</td>
              <td className='p-4'>Excellent: farm-plot level for all member deliveries</td>
            </tr>
            <tr className='border-b border-gray-200 hover:bg-gray-50 bg-blue-50'>
              <td className='p-4 font-semibold'>Quality Control</td>
              <td className='p-4'>In-house ECTA-certified lab; owner-directed protocols</td>
              <td className='p-4'>Shared union lab; democratic quality oversight</td>
            </tr>
            <tr className='border-b border-gray-200 hover:bg-gray-50'>
              <td className='p-4 font-semibold'>Pricing Model</td>
              <td className='p-4'>Market-based; volume discounts; negotiable terms</td>
              <td className='p-4'>Fair Trade floor + premiums; stable but less negotiable</td>
            </tr>
            <tr className='hover:bg-gray-50 bg-blue-50'>
              <td className='p-4 font-semibold'>Decision Speed</td>
              <td className='p-4'>Fast; owner or export manager decides</td>
              <td className='p-4'>Slower; committee or board approval may be needed</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* FOB PRICE COMPARISON */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='text-amber-600' />
        FOB Price Ranges by Channel (2025/26 Season)
      </h3>

      <p className='my-4'>
        Prices vary by season, quality, and contract timing. The ranges below reflect indicative <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>FOB Djibouti prices</Link> for the 2025/26 crop year. Cooperative prices include Fair Trade premiums where applicable; private exporter prices reflect market-based negotiation.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-4 text-left font-bold'>Origin / Grade</th>
              <th className='p-4 text-left font-bold'>Private Exporter FOB ($/kg)</th>
              <th className='p-4 text-left font-bold'>Cooperative Union FOB ($/kg)</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200 hover:bg-gray-50'>
              <td className='p-4 font-semibold'>Yirgacheffe G1 Washed</td>
              <td className='p-4'>$7.50 – $10.00</td>
              <td className='p-4'>$8.00 – $11.00</td>
            </tr>
            <tr className='border-b border-gray-200 hover:bg-gray-50 bg-blue-50'>
              <td className='p-4 font-semibold'>Sidamo G2 Washed</td>
              <td className='p-4'>$5.50 – $7.50</td>
              <td className='p-4'>$6.00 – $8.00</td>
            </tr>
            <tr className='border-b border-gray-200 hover:bg-gray-50'>
              <td className='p-4 font-semibold'>Guji G1 Natural</td>
              <td className='p-4'>$8.00 – $11.50</td>
              <td className='p-4'>$8.50 – $12.00</td>
            </tr>
            <tr className='border-b border-gray-200 hover:bg-gray-50 bg-blue-50'>
              <td className='p-4 font-semibold'>Limu G2 Washed</td>
              <td className='p-4'>$4.50 – $6.00</td>
              <td className='p-4'>$5.00 – $6.50</td>
            </tr>
            <tr className='hover:bg-gray-50'>
              <td className='p-4 font-semibold'>Jimma G4/G5 Natural (Commercial)</td>
              <td className='p-4'>$3.00 – $4.00</td>
              <td className='p-4'>$3.20 – $4.20</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg my-6'>
        <p className='font-bold text-sm mb-1'>Note on Pricing</p>
        <p className='text-sm text-gray-700'>
          Cooperative FOB prices typically run $0.30 to $0.80/kg higher than private exporter prices for the same grade due to Fair Trade minimum floors, organic premiums, and cooperative overhead. Private exporters may offer volume discounts on full-container (FCL) orders. Cherry prices reached 250+ Birr/kg for premium quality in late 2025, compressing margins for both channels. Prices shift with the C-market and seasonal supply; confirm current rates with your exporter before contracting.
        </p>
      </div>

      {/* CONTRACT & PAYMENT */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineClipboardDocumentCheck className='text-amber-600' />
        Contract and Payment Differences
      </h3>

      <p className='my-4'>
        How you pay and what contract type you sign depend partly on which channel you source from. For a full breakdown of Ethiopian coffee <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>contract structures and payment terms</Link>, see the dedicated guide.
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-6'>
        <div className='border border-blue-200 rounded-lg p-5 bg-blue-50'>
          <h5 className='font-bold text-lg mb-3 text-blue-900 flex items-center gap-2'>
            <HiOutlineBuildingOffice2 className='text-blue-600' />
            Private Exporters
          </h5>
          <ul className='space-y-2 text-sm'>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-blue-600 mt-1 flex-shrink-0' />
              <span><span className='font-semibold'>Payment:</span> LC (Letter of Credit) at sight is standard; CAD and TT accepted by established exporters for repeat buyers</span>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-blue-600 mt-1 flex-shrink-0' />
              <span><span className='font-semibold'>Contracts:</span> Fixed-price spot and forward contracts common; some offer price-to-be-fixed against the C-market</span>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-blue-600 mt-1 flex-shrink-0' />
              <span><span className='font-semibold'>Flexibility:</span> Split lots, deferred shipping, and custom milling specs often negotiable</span>
            </li>
          </ul>
        </div>

        <div className='border border-green-200 rounded-lg p-5 bg-green-50'>
          <h5 className='font-bold text-lg mb-3 text-green-900 flex items-center gap-2'>
            <HiOutlineUserGroup className='text-green-600' />
            Cooperative Unions
          </h5>
          <ul className='space-y-2 text-sm'>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-green-600 mt-1 flex-shrink-0' />
              <span><span className='font-semibold'>Payment:</span> LC at sight is strongly preferred; cooperatives rarely extend credit or accept open TT</span>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-green-600 mt-1 flex-shrink-0' />
              <span><span className='font-semibold'>Contracts:</span> Fair Trade minimum price + premium; fixed-price forward contracts common for certified lots</span>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-green-600 mt-1 flex-shrink-0' />
              <span><span className='font-semibold'>Flexibility:</span> Less room for custom terms; pricing follows certification floor schedules</span>
            </li>
          </ul>
        </div>
      </div>

      {/* DECISION FRAMEWORK */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineLightBulb className='text-amber-600' />
        Choosing Between Private and Cooperative Exporters
      </h3>

      <div className='grid md:grid-cols-2 gap-6 my-6'>
        <div className='border-2 border-blue-300 rounded-lg p-6 bg-blue-50'>
          <h5 className='font-bold text-lg mb-4 flex items-center gap-2 text-blue-900'>
            <HiOutlineBuildingOffice2 className='text-blue-600' />
            Choose a Private Exporter If...
          </h5>
          <ul className='space-y-3 text-sm'>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-blue-600 mt-1 flex-shrink-0' />
              <span>You need consistent high-volume supply across the season</span>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-blue-600 mt-1 flex-shrink-0' />
              <span>Fast logistics and flexible shipping schedules are priorities</span>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-blue-600 mt-1 flex-shrink-0' />
              <span>You require multiple grades or split-container options</span>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-blue-600 mt-1 flex-shrink-0' />
              <span>You value rapid communication and quick decision turnaround</span>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-blue-600 mt-1 flex-shrink-0' />
              <span>Your market does not mandate Fair Trade or Organic certification</span>
            </li>
          </ul>
        </div>

        <div className='border-2 border-green-300 rounded-lg p-6 bg-green-50'>
          <h5 className='font-bold text-lg mb-4 flex items-center gap-2 text-green-900'>
            <HiOutlineUserGroup className='text-green-600' />
            Choose a Cooperative Union If...
          </h5>
          <ul className='space-y-3 text-sm'>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-green-600 mt-1 flex-shrink-0' />
              <span>Fair Trade, Organic, or Rainforest Alliance certification is required</span>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-green-600 mt-1 flex-shrink-0' />
              <span>Your brand builds on farmer-impact and community narratives</span>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-green-600 mt-1 flex-shrink-0' />
              <span>You need farm-level EUDR traceability documentation</span>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-green-600 mt-1 flex-shrink-0' />
              <span>You sell to EU markets where deforestation-free proof is mandatory</span>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlineCheckCircle className='text-green-600 mt-1 flex-shrink-0' />
              <span>You prefer long-term relationships with farmer-owned organizations</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 5 QUESTIONS BOX */}
      <div className='bg-amber-50 border border-amber-200 rounded-lg p-6 my-8'>
        <h4 className='font-bold text-xl mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentCheck className='text-amber-600' />
          5 Questions to Ask Any Ethiopian Coffee Exporter
        </h4>
        <ol className='space-y-3 text-sm list-decimal list-inside'>
          <li><span className='font-semibold'>What share of your volume moves through DSL vs. ECX?</span> A high DSL ratio signals specialty focus and traceability.</li>
          <li><span className='font-semibold'>Can you provide GPS coordinates and farmer-level data for EUDR?</span> Critical for EU-bound shipments under the deforestation regulation.</li>
          <li><span className='font-semibold'>What certifications do you hold, and which lots are covered?</span> Ensure the specific grade and origin you need carries the required certification.</li>
          <li><span className='font-semibold'>What is your typical lead time from contract to container loading?</span> Benchmark: 3 to 6 weeks for private exporters; 4 to 8 weeks for cooperatives.</li>
          <li><span className='font-semibold'>What payment terms do you accept for first-time buyers?</span> LC at sight is standard; anything beyond that signals financial confidence and flexibility.</li>
        </ol>
        <p className='text-xs text-gray-600 mt-4'>
          For a detailed exporter evaluation framework, see <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='text-amber-700 hover:underline'>How to Choose an Ethiopian Coffee Export Company</Link>.
        </p>
      </div>

      {/* THE HYBRID MODEL */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineChartBar className='text-amber-600' />
        The Hybrid Model: Combining Both Channels
      </h3>

      <p className='my-4'>
        Some private exporters operate with cooperative-like transparency. Ethio Coffee Import and Export PLC, for example, meets the Directive 1106/2025 capital requirements and runs ECTA-certified labs, while maintaining heritage sourcing relationships with specific washing stations and farming communities across Guji, Yirgacheffe, and Sidamo. This approach delivers the logistics speed and quality control of a private exporter alongside the farm-level traceability and origin storytelling traditionally associated with cooperatives.
      </p>

      <p className='my-4'>
        The practical takeaway: do not limit your sourcing to a single channel. Many experienced importers maintain relationships with two or three exporters (at least one private, at least one cooperative) to cover different product lines. A Sidamo G2 for your year-round espresso blend might come from a private exporter, while a Guji G1 single-origin micro-lot for seasonal release might come from a cooperative. This diversification also mitigates supply risk if one channel faces delays or allocation constraints.
      </p>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Ethiopian Coffee from Both Channels</h4>
        <p className='my-2'>
          Ethio Coffee Import and Export PLC sources across Yirgacheffe, Sidamo, Guji, Limu, Jimma, and Harar with full traceability from washing station to port. Request samples, review current availability, or discuss contract terms.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Request Samples</Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>How to Order</Link>
        </div>
      </div>

      {/* FAQ SECTION */}
      <section className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900'>Frequently Asked Questions About Private vs Cooperative Ethiopian Coffee Exporters</h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the main difference between private and cooperative Ethiopian coffee exporters?</h4>
            <p className='text-sm text-gray-600'>Private exporters are owner-managed commercial companies offering speed, volume flexibility, and vertically integrated quality control. Cooperative unions are farmer-owned federations that provide farm-level traceability, certification access, and community-impact narratives. The choice depends on your priorities.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Can private Ethiopian coffee exporters provide EUDR-compliant traceability?</h4>
            <p className='text-sm text-gray-600'>Yes. Many private exporters now collect GPS coordinates and lot-level data for EUDR compliance through digital traceability platforms. However, cooperative unions typically have more complete farm-level registries because member documentation and plot mapping are inherent to their organizational structure.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Are cooperative coffees more expensive than private exporter coffees?</h4>
            <p className='text-sm text-gray-600'>Cooperative FOB prices typically run $0.30 to $0.80/kg higher due to Fair Trade minimum floors, organic premiums, and cooperative management overhead. Private exporters often offer volume discounts on full-container orders and more flexible contract terms that can offset the price difference.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the Direct Specialty Line (DSL) and how does it relate to exporters?</h4>
            <p className='text-sm text-gray-600'>DSL is an export channel that lets both private exporters and cooperatives sell specialty-grade coffee directly to international buyers, bypassing the ECX auction floor. DSL lots carry full washing-station-to-port traceability and are the primary channel for single-origin and micro-lot Ethiopian coffee.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Should I source from both private exporters and cooperative unions?</h4>
            <p className='text-sm text-gray-600'>Most experienced importers do. Private exporters cover consistent-volume needs and fast logistics, while cooperatives supply certified and traceable lots for differentiated product lines. Diversifying across both channels also reduces supply risk if one exporter faces delays or allocation constraints.</p>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Exporter Evaluation</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='text-amber-700 hover:underline'>How to Choose an Ethiopian Coffee Export Company</Link></li>
              <li>• <Link href='/insights/navigating-2026-ethiopian-specialty-coffee-exporters' className='text-amber-700 hover:underline'>2026 Ethiopian Specialty Coffee Exporters</Link></li>
              <li>• <Link href='/insights/best-ethiopian-coffee-exporter-for-importers' className='text-amber-700 hover:underline'>Best Ethiopian Coffee Exporter for Importers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing and Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts and Payment Terms</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Pricing FOB Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Compliance and Traceability</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline'>EUDR and Ethiopian Coffee Compliance</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability Guide</Link></li>
              <li>• <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Certifications and Impact</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Ethiopian Coffee Certifications Guide</Link></li>
              <li>• <Link href='/insights/direct-trade-ethiopian-farmers' className='text-amber-700 hover:underline'>Direct Trade Ethiopian Coffee</Link></li>
              <li>• <Link href='/insights/women-in-ethiopian-coffee-industry' className='text-amber-700 hover:underline'>Women in Ethiopian Coffee</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC. This guide compares private and cooperative Ethiopian coffee export channels for international importers and roasters.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Export Services</Link> · <Link href='/about' className='underline'>About</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

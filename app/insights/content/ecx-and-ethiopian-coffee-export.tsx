import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineScale,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
  HiOutlineDocumentText,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineBuildingOffice2,
  HiOutlineGlobeAlt,
  HiOutlineTruck,
  HiOutlineClipboardDocumentList,
  HiOutlineCurrencyDollar,
  HiOutlineArrowTrendingUp,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function ECXEthiopianCoffeeExport({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      {/* H1 TITLE */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>

      {/* SUBTITLE */}
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        How the Ethiopia Commodity Exchange shapes coffee grading, traceability, and export for international buyers
      </h2>

      {/* HERO IMAGE */}
      <figure>
        <figcaption className='font-inconsolata my-2 text-sm text-gray-500'>
          The Ethiopia Commodity Exchange (ECX) headquarters in Addis Ababa, where most of the country&apos;s exportable coffee is auctioned and quality-certified before shipment.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopia Commodity Exchange ECX building in Addis Ababa where Ethiopian coffee is graded and auctioned for export'
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
        <span className='ml-2'>Coffee Trade &amp; Export / ECX System / Grading &amp; Quality / Importer Resources</span>
      </div>

      {/* OPENING PARAGRAPHS */}
      <p className='my-4'>
        The <a href="https://www.ecx.com.et" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-bold">Ethiopia Commodity Exchange (ECX)</a> handles the majority of Ethiopian coffee moving to international markets. In the 2024/25 fiscal year, Ethiopia exported approximately 469,000 metric tons of coffee and earned a record $2.65 billion in revenue, according to the Ethiopian Coffee and Tea Authority (ECTA). Most of that volume passed through the ECX system before reaching a buyer&apos;s warehouse overseas.
      </p>

      <p className='my-4'>
        For importers, roasters, and green coffee traders, the ECX determines how Ethiopian coffee is graded, priced, documented, and made available for export. This guide covers the exchange from end to end: its grading methodology, the step-by-step export process, how it compares to direct specialty channels, what recent reforms mean for traceability and EUDR compliance, and how to evaluate ECX-registered exporters as sourcing partners.
      </p>

      {/* KEY TAKEAWAY BOX */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-2 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0' /> Key Takeaway
        </p>
        <p className='text-sm'>
          The ECX is Ethiopia&apos;s centralized coffee trading platform, grading every exportable lot from G1 (specialty) to G5 (commercial) based on defect counts and cup quality. Since 2017, exporters can also source specialty coffee through the Direct Specialty License (DSL) channel, which preserves full farm-level traceability. Recent reforms under Directive 1106/2025 have further expanded direct delivery options, given exporters more flexibility, and improved ECX pre-trade information for EUDR-compliant sourcing. International buyers cannot trade on the ECX directly; they work with licensed Ethiopian exporters who handle purchasing, documentation, and logistics.
        </p>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION: WHAT IS THE ECX */}
      {/* ═══════════════════════════════════════════ */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBuildingOffice2 className='text-amber-600' />
        What Is the Ethiopia Commodity Exchange?
      </h3>

      <p className='my-4'>
        Established in April 2008 under the leadership of Dr. Eleni Gabre-Madhin, the ECX was Africa&apos;s first commodity exchange. It was created to address chronic inefficiencies in Ethiopian agricultural markets. Coffee is the exchange&apos;s primary commodity by value, alongside sesame, wheat, maize, and haricot beans.
      </p>

      <p className='my-4'>
        Before the ECX, Ethiopian coffee markets suffered from four structural problems:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Price opacity:</span> Farmers and buyers lacked reliable market data, enabling exploitation by middlemen</li>
        <li><span className='font-bold'>Quality inconsistency:</span> No standardized grading meant buyers could not trust what they purchased</li>
        <li><span className='font-bold'>Limited traceability:</span> Coffee moved through multiple intermediaries, obscuring origin and handling history</li>
        <li><span className='font-bold'>Payment delays:</span> Transactions could take weeks; cash flow problems forced farmers to sell at harvest-time lows</li>
      </ul>

      <p className='my-4'>
        The ECX solved these problems by creating a centralized marketplace with standardized <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='underline font-semibold'>contracts</Link>, electronic trading, third-party quality grading, and guaranteed payment clearing within 24 hours.
      </p>

      {/* ECX BY THE NUMBERS */}
      <div className='bg-blue-50 p-6 rounded-lg my-6 border border-blue-200'>
        <h4 className='font-bold text-lg mb-3 flex items-center gap-2 text-blue-900'>
          <HiOutlineChartBar className='text-blue-600' /> ECX by the Numbers (2024/25)
        </h4>
        <div className='grid md:grid-cols-2 gap-3 text-sm text-blue-900'>
          <div className='bg-white rounded p-3 border border-blue-100'>
            <p className='font-bold'>Established</p>
            <p>April 2008, Addis Ababa</p>
          </div>
          <div className='bg-white rounded p-3 border border-blue-100'>
            <p className='font-bold'>Coffee Export Revenue</p>
            <p>$2.65 billion (2024/25 FY record)</p>
          </div>
          <div className='bg-white rounded p-3 border border-blue-100'>
            <p className='font-bold'>Export Volume</p>
            <p>~469,000 metric tons (7+ million bags)</p>
          </div>
          <div className='bg-white rounded p-3 border border-blue-100'>
            <p className='font-bold'>Production Forecast (2025/26)</p>
            <p>11.6 million 60-kg bags (USDA estimate)</p>
          </div>
          <div className='bg-white rounded p-3 border border-blue-100'>
            <p className='font-bold'>Registered Exporters</p>
            <p>Hundreds of licensed coffee exporters</p>
          </div>
          <div className='bg-white rounded p-3 border border-blue-100'>
            <p className='font-bold'>Warehouse Network</p>
            <p>55+ warehouses across 17+ regional locations</p>
          </div>
        </div>
        <p className='text-xs text-blue-700 mt-3 italic'>Sources: ECTA, USDA Foreign Agricultural Service Coffee Annual (June 2025)</p>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION: GRADING SYSTEM */}
      {/* ═══════════════════════════════════════════ */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineScale className='text-amber-600' />
        How the ECX Coffee Grading System Works
      </h3>

      <p className='my-4'>
        Every coffee lot entering the ECX system is evaluated by ECTA-trained graders (formerly under CQIC, now restructured under ECTA). The grading methodology combines physical (raw) evaluation and cup-quality assessment. Understanding the distinction between washed and natural grading scales is essential for importers, because defect tolerances differ significantly between the two processing methods. For a comprehensive treatment of Ethiopian coffee grading standards, see our dedicated <Link href='/coffee-grading-ethiopia' className='underline font-semibold'>coffee grading Ethiopia page</Link>.
      </p>

      {/* WASHED GRADES */}
      <h4 className='text-xl font-bold mt-8 mb-4'>Washed Coffee Grades (G1 to G5)</h4>
      <p className='my-4'>
        Washed (wet-processed) Ethiopian coffees are held to tighter defect tolerances because the washing process removes much of the fruit material before drying. Grades are assigned based on defects in a 300-gram green sample:
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border border-gray-200 rounded-lg overflow-hidden'>
          <thead className='bg-amber-600 text-white'>
            <tr>
              <th className='p-3 text-left'>Grade</th>
              <th className='p-3 text-left'>Defects / 300g</th>
              <th className='p-3 text-left'>Market Tier</th>
              <th className='p-3 text-left'>Typical Use</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            <tr className='bg-white'>
              <td className='p-3 font-bold'>G1</td>
              <td className='p-3'>0 &ndash; 3</td>
              <td className='p-3'>Specialty</td>
              <td className='p-3'>Single-origin offerings, competition lots; SCA 85+</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-bold'>G2</td>
              <td className='p-3'>4 &ndash; 12</td>
              <td className='p-3'>Specialty</td>
              <td className='p-3'>Core specialty export grade; SCA 80&ndash;85+</td>
            </tr>
            <tr className='bg-white'>
              <td className='p-3 font-bold'>G3</td>
              <td className='p-3'>13 &ndash; 25</td>
              <td className='p-3'>Commercial specialty</td>
              <td className='p-3'>Premium blends, value single-origins</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-bold'>G4</td>
              <td className='p-3'>26 &ndash; 45</td>
              <td className='p-3'>Commercial</td>
              <td className='p-3'>Standard commercial blends</td>
            </tr>
            <tr className='bg-white'>
              <td className='p-3 font-bold'>G5</td>
              <td className='p-3'>46 &ndash; 90</td>
              <td className='p-3'>Commercial</td>
              <td className='p-3'>Mass-market, soluble/instant coffee</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* NATURAL GRADES */}
      <h4 className='text-xl font-bold mt-8 mb-4'>Natural (Dry-Processed) Coffee Grades (G1 to G5)</h4>
      <p className='my-4'>
        Natural coffees are dried with the cherry fruit intact, which inherently produces more physical variation. Defect tolerances are therefore higher at each grade level:
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border border-gray-200 rounded-lg overflow-hidden'>
          <thead className='bg-amber-600 text-white'>
            <tr>
              <th className='p-3 text-left'>Grade</th>
              <th className='p-3 text-left'>Defects / 300g</th>
              <th className='p-3 text-left'>Market Tier</th>
              <th className='p-3 text-left'>Typical Use</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            <tr className='bg-white'>
              <td className='p-3 font-bold'>G1</td>
              <td className='p-3'>0 &ndash; 15</td>
              <td className='p-3'>Specialty</td>
              <td className='p-3'>Exceptional natural lots; fruity, complex cup</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-bold'>G2</td>
              <td className='p-3'>16 &ndash; 30</td>
              <td className='p-3'>Specialty</td>
              <td className='p-3'>Standard natural export grade for specialty market</td>
            </tr>
            <tr className='bg-white'>
              <td className='p-3 font-bold'>G3</td>
              <td className='p-3'>31 &ndash; 60</td>
              <td className='p-3'>Commercial specialty</td>
              <td className='p-3'>Specialty blends, commercial single-origins</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-bold'>G4</td>
              <td className='p-3'>61 &ndash; 120</td>
              <td className='p-3'>Commercial</td>
              <td className='p-3'>Standard commercial blends</td>
            </tr>
            <tr className='bg-white'>
              <td className='p-3 font-bold'>G5</td>
              <td className='p-3'>121 &ndash; 180</td>
              <td className='p-3'>Commercial</td>
              <td className='p-3'>Mass-market, instant coffee</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 rounded-r-lg my-6'>
        <p className='text-sm'><span className='font-bold'>Practical note:</span> A Grade 2 natural is not physically identical to a Grade 2 washed. They represent equivalent quality tiers within their respective processing categories. Always compare natural-to-natural and washed-to-washed when evaluating grade equivalence.</p>
      </div>

      {/* ECTA GRADING METHODOLOGY */}
      <h4 className='text-xl font-bold mt-8 mb-4'>The ECTA Grading Methodology: Raw Evaluation + Cup Quality</h4>
      <p className='my-4'>
        The final grade assigned to each lot combines two components, weighted as follows:
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold text-lg mb-2'>Raw Evaluation (40%)</h5>
          <p className='text-sm mb-2'>Physical inspection of a 300&ndash;340g green sample, focusing on:</p>
          <ul className='text-sm space-y-1 list-disc ml-5'>
            <li>Defect count (primary and secondary)</li>
            <li>Bean appearance and uniformity</li>
            <li>Screen size (typically 15&ndash;17; premium lots 18&ndash;19)</li>
            <li>Moisture content (export range: 9.5%&ndash;11.5%)</li>
            <li>Odor (absence of off-smells)</li>
          </ul>
        </div>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold text-lg mb-2'>Cup Quality (60%)</h5>
          <p className='text-sm mb-2'>Sensory evaluation following SCA-aligned cupping protocol:</p>
          <ul className='text-sm space-y-1 list-disc ml-5'>
            <li>Aroma and fragrance</li>
            <li>Acidity, body, and flavor</li>
            <li>Uniformity and clean cup</li>
            <li>Sweetness and aftertaste</li>
            <li>Overall balance</li>
          </ul>
        </div>
      </div>

      <p className='my-4'>
        The combined score places each lot on a scale from Grade 1 (highest) through Grade 8 or below (lowest). Grades 1 through 5 are eligible for export. Coffee that scores below Grade 5 is restricted to domestic sale.
      </p>

      {/* DEFECT CATEGORIES */}
      <h4 className='text-xl font-bold mt-8 mb-4'>Defect Categories</h4>
      <div className='bg-gray-50 p-6 rounded-lg border border-gray-200 my-4'>
        <p className='text-sm mb-3'>The ECX uses the SCA defect classification system:</p>
        <ul className='text-sm space-y-2 list-disc ml-5'>
          <li><span className='font-bold'>Category 1 defects (full defects):</span> Black beans, sour beans, fungus-damaged beans, foreign matter, severe insect damage</li>
          <li><span className='font-bold'>Category 2 defects (partial defects):</span> Broken or chipped beans, minor insect damage, immature beans, withered beans, floaters, shells</li>
          <li>Five Category 2 defects equal one full defect equivalent</li>
        </ul>
      </div>

      {/* WHAT GRADES MEAN FOR BUYERS */}
      <h4 className='text-xl font-bold mt-8 mb-4'>What Grades Mean for Buyers</h4>
      <ul className='my-4 list-disc ml-5 space-y-2 text-sm'>
        <li><span className='font-bold'>G1&ndash;G2:</span> Suitable for single-origin specialty retail at premium prices. Request pre-shipment samples and cupping notes regardless of grade.</li>
        <li><span className='font-bold'>G3:</span> Often used in specialty blends or value single-origins. Solid cup quality at a lower price point.</li>
        <li><span className='font-bold'>G4&ndash;G5:</span> Commercial quality for blending, food service, or soluble coffee. Available in bulk volumes at competitive pricing.</li>
      </ul>

      <p className='my-4'>
        Grade alone does not determine cup quality. A G2 lot scoring 86 on the SCA protocol outperforms a G1 lot scoring 82. Always evaluate cupping reports alongside physical grade.
      </p>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION: EXPORT PROCESS */}
      {/* ═══════════════════════════════════════════ */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineTruck className='text-amber-600' />
        The ECX Coffee Export Process
      </h3>

      <p className='my-4'>
        Understanding how coffee moves through the ECX clarifies timelines, documentation, and decision points for international buyers. For the full end-to-end export pipeline from contract to bill of lading, see our <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='underline font-semibold'>Ethiopian coffee export process buyer&apos;s guide</Link>.
      </p>

      <div className='bg-white border border-gray-200 rounded-lg overflow-hidden my-6'>
        <div className='bg-amber-600 text-white p-4'>
          <h4 className='font-bold text-lg flex items-center gap-2'>
            <HiOutlineClipboardDocumentList />
            7 Steps: From Farm to Ship
          </h4>
        </div>
        <div className='divide-y divide-gray-100'>
          {[
            { step: '1', title: 'Cherry Delivery and Processing', desc: 'Farmers deliver ripe cherry to washing stations or natural drying beds. Coffee is washed, naturally dried, or honey-processed, then milled to green bean.' },
            { step: '2', title: 'Delivery to ECX Warehouses', desc: 'Green coffee is transported to regional ECX warehouse facilities. Samples are drawn for grading and cupping.' },
            { step: '3', title: 'ECTA Grading and Classification', desc: 'Professional graders evaluate physical quality (40%) and cup quality (60%). Coffee receives a grade (G1 to G5+), origin classification, and processing type.' },
            { step: '4', title: 'Listing on ECX Trading Platform', desc: 'Lots are listed with grade, region (e.g., Yirgacheffe, Sidamo, Guji), process (washed A / natural B), and quantity. Bidding opens electronically.' },
            { step: '5', title: 'Exporter Purchase and Payment', desc: 'Licensed exporters registered with ECTA bid on and purchase lots. Payment clears through ECX within 24 hours, providing immediate settlement.' },
            { step: '6', title: 'Export Preparation', desc: 'Exporters arrange bagging (60-kg jute/GrainPro), obtain ICO certificate, phytosanitary certificate, quality certificate, and CLU (Coffee Liquoring Unit) approval.' },
            { step: '7', title: 'Shipping via Djibouti', desc: 'Most exports ship FOB Djibouti. Some use the Addis Ababa dry port for containerized shipments. Transit to Djibouti takes 2 to 3 days by truck.' },
          ].map((item) => (
            <div key={item.step} className='flex items-start gap-3 p-4'>
              <div className='bg-amber-100 rounded-full p-2 flex-shrink-0'>
                <span className='text-amber-800 font-bold text-sm w-5 h-5 flex items-center justify-center'>{item.step}</span>
              </div>
              <div>
                <p className='font-bold'>{item.title}</p>
                <p className='text-sm text-gray-700'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium'><span className='font-bold'>Timeline:</span> From ECX purchase to container departure typically takes 2 to 4 weeks, depending on documentation processing, container availability, and logistics. For seasonal programs, factor in an additional 2 to 4 weeks of ocean transit to destination port. More on <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='underline font-bold'>landed cost calculations and logistics timelines</Link>.</p>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION: ECX VS DSL VS COOPERATIVE */}
      {/* ═══════════════════════════════════════════ */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineGlobeAlt className='text-amber-600' />
        ECX vs DSL vs Cooperative Export: Choosing Your Channel
      </h3>

      <p className='my-4'>
        Ethiopia operates a multi-channel coffee export system. The right channel depends on your volume needs, traceability requirements, and quality targets. Since 2017, alternatives to ECX auction trading have expanded through regulatory reforms, most recently under Directive 1106/2025.
      </p>

      {/* COMPARISON TABLE */}
      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border border-gray-200 rounded-lg overflow-hidden'>
          <thead className='bg-amber-600 text-white'>
            <tr>
              <th className='p-3 text-left'>Factor</th>
              <th className='p-3 text-left'>ECX Auction</th>
              <th className='p-3 text-left'>DSL (Direct Specialty)</th>
              <th className='p-3 text-left'>Cooperative Export</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 text-sm'>
            <tr className='bg-white'>
              <td className='p-3 font-bold'>Traceability</td>
              <td className='p-3'>Region level (e.g., Sidamo)</td>
              <td className='p-3'>Farm or station level</td>
              <td className='p-3'>Cooperative/union level</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-bold'>Pricing</td>
              <td className='p-3'>Auction-driven, daily rates</td>
              <td className='p-3'>Negotiated FOB, quality premiums</td>
              <td className='p-3'>Fixed or negotiated, Fairtrade minimums possible</td>
            </tr>
            <tr className='bg-white'>
              <td className='p-3 font-bold'>Quality Control</td>
              <td className='p-3'>ECTA grading (standardized)</td>
              <td className='p-3'>Exporter oversight + ECTA</td>
              <td className='p-3'>Cooperative QC + ECTA</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-bold'>Minimum Volume</td>
              <td className='p-3'>Flexible lot sizes</td>
              <td className='p-3'>Typically full containers (18&ndash;20 MT)</td>
              <td className='p-3'>Varies; often container minimums</td>
            </tr>
            <tr className='bg-white'>
              <td className='p-3 font-bold'>EUDR Readiness</td>
              <td className='p-3'>Improving; pre-trade info reforms underway</td>
              <td className='p-3'>Strong; GPS and lot documentation available</td>
              <td className='p-3'>Strong; member records and geolocation data</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-bold'>Best For</td>
              <td className='p-3'>Commercial volumes, regional blends</td>
              <td className='p-3'>Single-origin specialty, micro-lots</td>
              <td className='p-3'>Certified lots (organic, Fairtrade), social-impact sourcing</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>When to Source Through ECX</h4>
      <p className='my-4'>
        ECX is the primary channel for commercial-volume Ethiopian coffee. It works well for importers building regional blends (e.g., a Sidamo natural blend or Yirgacheffe washed blend), for buyers who need consistent supply at transparent market prices, and for first-time importers who want the security of a regulated, documented transaction. The standardized grading provides a reliable quality baseline.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>When to Use DSL or Direct Specialty Channels</h4>
      <p className='my-4'>
        If your program requires farm-level or washing-station-level traceability, single-origin stories for retail, or cup scores above 85, direct specialty channels are the better fit. DSL-sourced coffees maintain full identity from cherry reception through export, enabling detailed lot narratives that command premium prices. For more on this pathway, see our <Link href='/insights/direct-trade-ethiopian-farmers' className='underline font-semibold'>guide to direct trade in Ethiopia</Link> and the <Link href='/insights/micro-lot-ethiopian-coffee-sourcing-guide' className='underline font-semibold'>micro-lot sourcing guide</Link>.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Cooperative Export Channel</h4>
      <p className='my-4'>
        Primary cooperatives and unions can export directly to international buyers, maintaining member farmer traceability and chain-of-custody documentation. This channel is particularly relevant for buyers seeking <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='underline font-semibold'>certified coffees</Link> (organic, Fairtrade, Rainforest Alliance) where certification bodies require producer-level records.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Directive 1106/2025 and Vertical Integration</h4>
      <p className='my-4'>
        Ethiopia&apos;s Directive 1106/2025 expanded the rules for vertical integration, allowing direct delivery of coffee from suppliers to exporters without passing through ECX grading and weighing procedures in certain cases. This change gives exporters more flexibility to source and process specialty coffee within their own supply chains. For importers, this means more exporters can now offer fully traceable, identity-preserved lots outside the traditional ECX auction system. Our analysis of the <Link href='/insights/private-vs-cooperative-ethiopian-coffee-exporters' className='underline font-semibold'>private vs. cooperative exporter landscape</Link> covers how this directive reshapes sourcing options.
      </p>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION: TRACEABILITY AND EUDR */}
      {/* ═══════════════════════════════════════════ */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineDocumentText className='text-amber-600' />
        ECX Traceability and EUDR Compliance
      </h3>

      <p className='my-4'>
        Traceability has been the ECX&apos;s most debated limitation. The original system anonymized coffee origins to prevent price manipulation, classifying lots only by broad region rather than specific station or cooperative. That has changed meaningfully in recent years.
      </p>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <h4 className='font-bold text-lg mb-3 flex items-center gap-2 text-green-900'>
          <HiOutlineChartBar className='text-green-600' /> Recent Traceability Improvements
        </h4>
        <ul className='text-sm space-y-2 list-disc ml-5 text-green-900'>
          <li><span className='font-bold'>ECX pre-trade information:</span> The ECX now publishes traceable lot data before auction, including region, sub-region, and processing type, giving buyers more transparency</li>
          <li><span className='font-bold'>DSL full traceability:</span> Direct Specialty License channels maintain farm-to-port documentation with GPS coordinates, processing records, and producer identification</li>
          <li><span className='font-bold'>Cooperative records:</span> Cooperatives and unions maintain member farmer databases with location data and delivery records</li>
          <li><span className='font-bold'>Digital platforms:</span> Several exporters and cooperatives now use digital tracking tools that log coffee from cherry delivery through export container</li>
        </ul>
      </div>

      <p className='my-4'>
        The <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='underline font-semibold'>EU Deforestation Regulation (EUDR)</Link> requires importers to demonstrate that their coffee was produced on land not subject to deforestation after December 31, 2020, supported by geolocation data. ECX coffee sourced through the standard auction channel may not meet EUDR geolocation requirements at the farm level. DSL and cooperative channels, which maintain GPS coordinates and producer-level records, are better positioned for EUDR compliance. For a comprehensive treatment of traceability tiers, required documentation, and verification frameworks, see our <Link href='/insights/ethiopian-coffee-traceability-guide' className='underline font-semibold'>Ethiopian coffee traceability guide</Link>.
      </p>

      {/* IMPORTER CHECKLIST */}
      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-2 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-700' /> What to Ask Your Exporter About Traceability
        </h4>
        <ul className='text-sm space-y-2 list-disc ml-5'>
          <li><span className='font-bold'>Is this ECX auction coffee or DSL (direct)?</span> DSL offers station-level traceability</li>
          <li><span className='font-bold'>What region and sub-region?</span> ECX coffee can specify areas like &ldquo;Yirgacheffe Kochere&rdquo; vs just &ldquo;Yirgacheffe&rdquo;</li>
          <li><span className='font-bold'>Washing station or cooperative name?</span> Available for DSL and increasingly for ECX specialty lots</li>
          <li><span className='font-bold'>Can you provide GPS coordinates?</span> Required for EUDR compliance</li>
          <li><span className='font-bold'>Cup score and cupping notes?</span> Reputable exporters supply their own lab reports beyond ECX grading</li>
        </ul>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION: PRICING DYNAMICS */}
      {/* ═══════════════════════════════════════════ */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='text-amber-600' />
        ECX Pricing Dynamics
      </h3>

      <p className='my-4'>
        ECX coffee prices are determined through competitive bidding on the trading floor. Several factors shape the price a buyer ultimately pays:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Daily auction prices:</span> ECX publishes closing prices by region, grade, and processing method. These fluctuate based on supply, demand, and global market conditions.</li>
        <li><span className='font-bold'>Regional differentials:</span> Yirgacheffe and Guji lots command premiums over Jimma or Limu at equivalent grades, reflecting the market&apos;s valuation of origin character.</li>
        <li><span className='font-bold'>NYC &ldquo;C&rdquo; market relationship:</span> Ethiopian coffee prices correlate with the ICE Arabica futures benchmark, though premiums (differentials) above the C-price vary by origin and grade.</li>
        <li><span className='font-bold'>Quality premiums:</span> G1 and G2 lots carry premiums over G3&ndash;G5. Specialty-scored lots (85+ SCA) sourced via DSL can exceed ECX auction prices significantly.</li>
      </ul>

      <p className='my-4'>
        For a detailed breakdown of how Ethiopian coffee pricing works from ECX benchmark to FOB and CIF, see our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='underline font-semibold'>Ethiopian coffee pricing FOB guide</Link>.
      </p>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION: BENEFITS */}
      {/* ═══════════════════════════════════════════ */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCheckCircle className='text-amber-600' />
        Benefits of ECX for International Buyers
      </h3>

      <div className='grid md:grid-cols-2 gap-5 my-6'>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-2 flex items-center gap-2'><HiOutlineShieldCheck className='text-amber-700' /> Quality Assurance</h4>
          <p className='text-sm'>Every lot is graded by ECTA professionals. When you order G1 Yirgacheffe washed, you receive coffee that has passed standardized physical and cup evaluation.</p>
        </div>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-2 flex items-center gap-2'><HiOutlineShieldCheck className='text-amber-700' /> Legal Compliance</h4>
          <p className='text-sm'>ECX-registered exporters hold proper licensing, export permits, and documentation. This reduces the risk of shipment holds at destination customs.</p>
        </div>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-2 flex items-center gap-2'><HiOutlineShieldCheck className='text-amber-700' /> Price Transparency</h4>
          <p className='text-sm'>ECX pricing is market-driven and publicly available. You can verify fair market rates for the grade and origin you are purchasing.</p>
        </div>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-2 flex items-center gap-2'><HiOutlineShieldCheck className='text-amber-700' /> Payment Security</h4>
          <p className='text-sm'>ECX clears transactions within 24 hours, reducing counterparty risk for both exporters and suppliers. Funds are guaranteed through the exchange.</p>
        </div>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-2 flex items-center gap-2'><HiOutlineShieldCheck className='text-amber-700' /> Documentation Ready</h4>
          <p className='text-sm'>ECX coffee comes with quality certificates, origin documentation, ICO certificates, and phytosanitary certificates required for import clearance.</p>
        </div>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-2 flex items-center gap-2'><HiOutlineShieldCheck className='text-amber-700' /> Fraud Protection</h4>
          <p className='text-sm'>The ECX system ensures you deal with vetted, licensed exporters who must maintain their registration. This eliminates many common supply-chain fraud risks.</p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION: MISCONCEPTIONS */}
      {/* ═══════════════════════════════════════════ */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineXCircle className='text-amber-600' />
        Common Misconceptions About the ECX
      </h3>

      <div className='space-y-4 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2'>&ldquo;ECX coffee has no traceability&rdquo;</h4>
          <p className='text-sm'><span className='font-bold'>Reality:</span> While early ECX systems limited traceability to broad region, reforms now provide sub-region identification and pre-trade lot data. DSL channels offer full farm-level traceability outside the auction. The gap is narrowing, especially for specialty-grade lots.</p>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2'>&ldquo;All Ethiopian coffee must go through ECX&rdquo;</h4>
          <p className='text-sm'><span className='font-bold'>Reality:</span> Since 2017, specialty coffee scoring 80+ can be exported via DSL with direct cooperative or station sourcing. Cooperatives and unions may export directly. Directive 1106/2025 further expanded vertical integration. However, most commercial-volume coffee still flows through ECX.</p>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2'>&ldquo;Grade equals cup quality&rdquo;</h4>
          <p className='text-sm'><span className='font-bold'>Reality:</span> Grades measure physical quality plus a cup evaluation component, but a G2 scoring 86 outperforms a G1 scoring 82 in the cup. Two coffees of identical grades from different regions taste very different. Always request cupping reports alongside the grade certificate.</p>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2'>&ldquo;ECX adds cost without value&rdquo;</h4>
          <p className='text-sm'><span className='font-bold'>Reality:</span> ECX fees are modest, typically under 1% of transaction value. The quality assurance, payment clearing, documentation, and legal framework reduce risk and transaction costs that would otherwise fall on the buyer or exporter.</p>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2'>&ldquo;Washed and natural grades are comparable&rdquo;</h4>
          <p className='text-sm'><span className='font-bold'>Reality:</span> A G2 natural allows up to 30 defects per 300g while a G2 washed allows only 12. Different processing methods have different defect tolerances. Compare within the same processing category when evaluating grade equivalence.</p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION: CHOOSING AN EXPORTER */}
      {/* ═══════════════════════════════════════════ */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineClipboardDocumentList className='text-amber-600' />
        How to Choose an ECX-Registered Exporter
      </h3>

      <p className='my-4'>
        Not all ECX-registered exporters offer the same level of service. When evaluating potential suppliers, consider these criteria:
      </p>

      <div className='bg-white border border-gray-200 rounded-lg overflow-hidden my-6'>
        <div className='bg-amber-600 text-white p-4'>
          <h4 className='font-bold'>Exporter Evaluation Checklist</h4>
        </div>
        <div className='divide-y divide-gray-100'>
          {[
            { title: 'Communication', desc: 'Responds within 24-48 hours, understands importing regulations for your market, provides clear documentation' },
            { title: 'Transparency', desc: 'Shares quality reports, cupping scores, origin details, and pricing breakdown openly' },
            { title: 'Sample program', desc: 'Offers sample sets (100-300g per origin) before container commitments' },
            { title: 'Export track record', desc: 'Active exporter for 3+ years with references from international importers you can verify' },
            { title: 'Sourcing depth', desc: 'Offers both ECX and DSL channels, covers multiple origins (Yirgacheffe, Sidamo, Guji, Harar, Limu, Jimma)' },
            { title: 'Logistics capability', desc: 'Handles FOB Djibouti, works with reliable freight forwarders, understands Incoterms' },
            { title: 'Quality consistency', desc: 'Can supply the same profiles season over season for your blends or single-origin programs' },
          ].map((item, i) => (
            <div key={i} className='flex items-start gap-3 p-4'>
              <div className='bg-amber-100 rounded-full p-2 flex-shrink-0'>
                <HiOutlineCheckCircle className='text-amber-800 w-5 h-5' />
              </div>
              <div>
                <p className='font-bold'>{item.title}</p>
                <p className='text-sm text-gray-700'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium'><span className='font-bold'>Red Flags:</span> Exporters who cannot provide ECTA registration documentation, refuse to share cupping reports, have no sample program, or offer prices significantly below market rates. If a price seems too good to be true, it usually is. For a comprehensive evaluation framework including a 10-point scorecard, see our <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='underline font-bold'>guide to choosing an Ethiopian coffee export company</Link>.</p>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION: FUTURE OF ECX */}
      {/* ═══════════════════════════════════════════ */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineArrowTrendingUp className='text-amber-600' />
        The Future of ECX: 2025 to 2027
      </h3>

      <p className='my-4'>
        The ECX is undergoing its most significant evolution since its founding. Several reforms are already in progress or confirmed:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Enhanced digital trading:</span> The ECX is upgrading its electronic platform for faster, more accessible bidding with improved market data for buyers</li>
        <li><span className='font-bold'>Electronic warehouse receipts:</span> ECX is introducing electronic receipts to facilitate collateral finance, letting exporters access working capital more efficiently</li>
        <li><span className='font-bold'>Expanded traceability:</span> Pre-trade information now includes more granular origin details; further integration with digital tracking platforms is underway</li>
        <li><span className='font-bold'>Vertical integration (Directive 1106/2025):</span> Direct delivery from suppliers to exporters is now formally permitted, expanding alternatives to the ECX auction floor</li>
        <li><span className='font-bold'>15-Year Coffee Development Strategy:</span> Ethiopia&apos;s government aims to become the world&apos;s second-largest coffee producer, with USDA projecting 11.6 million bags of production and 7.8 million bags of exports for 2025/26, up 11.4% from the prior year</li>
      </ul>

      <p className='my-4'>
        For international buyers, these reforms point toward more choice, better traceability, and greater volume availability from Ethiopian origins. The ECX remains central to the system, but the range of sourcing options around it continues to grow.
      </p>

      {/* ═══════════════════════════════════════════ */}
      {/* FAQ SECTION */}
      {/* ═══════════════════════════════════════════ */}
      <section className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900'>Frequently Asked Questions</h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the Ethiopia Commodity Exchange (ECX)?</h4>
            <p className='text-sm text-gray-600'>The ECX is Ethiopia&apos;s centralized trading platform for agricultural commodities, established in 2008. It provides standardized grading, electronic auction, warehousing, and guaranteed payment clearing for coffee and other crops. Most Ethiopian export coffee passes through the ECX system before shipment.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How does the Ethiopian coffee grading system work?</h4>
            <p className='text-sm text-gray-600'>ECTA graders evaluate each lot on physical quality (40% weight) and cup quality (60% weight). The combined score determines grades from G1 (highest) to G5 (lowest exportable). Washed and natural coffees use different defect-count thresholds. G1 washed allows 0 to 3 defects per 300g; G1 natural allows 0 to 15.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Can you buy Ethiopian coffee without going through ECX?</h4>
            <p className='text-sm text-gray-600'>Yes. Since 2017, exporters holding a Direct Specialty License (DSL) can source directly from cooperatives or washing stations. Cooperatives and unions may also export directly. Directive 1106/2025 further expanded vertical integration options. However, most commercial-volume coffee still flows through ECX.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is a Direct Specialty License (DSL)?</h4>
            <p className='text-sm text-gray-600'>A DSL allows licensed Ethiopian exporters to purchase specialty-grade coffee directly from farms, cooperatives, or washing stations without ECX auction. This preserves full traceability from cherry delivery through export and enables buyers to source single-origin, lot-specific Ethiopian coffees with detailed provenance.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Does ECX coffee meet EUDR traceability requirements?</h4>
            <p className='text-sm text-gray-600'>Standard ECX auction coffee may lack the farm-level GPS data that EUDR compliance requires. DSL and cooperative-export channels, which maintain geolocation records and producer-level documentation, are better positioned. The ECX is improving pre-trade data, but buyers targeting EU markets should confirm EUDR documentation with their exporter.</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* CTA BLOCK */}
      {/* ═══════════════════════════════════════════ */}
      <div className='bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 shadow-lg p-8 rounded-lg my-8'>
        <h4 className='font-bold text-2xl mb-3'>Source Premium Ethiopian Coffee Direct from Origin</h4>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Import and Export PLC</span> is an ECX-registered exporter with three decades of sourcing heritage across Ethiopia&apos;s coffee regions. From Grade 1 Yirgacheffe to natural processed Guji, we offer full traceability, professional export documentation, pre-shipment samples, and the responsive communication international buyers need.
        </p>
        <p className='my-2'>
          Whether you source through ECX or direct specialty channels, we make the process transparent and straightforward.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors flex items-center gap-2'>
            View Offerings
          </Link>
          <Link href='/contact-us' className='bg-white border-2 border-amber-600 text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors flex items-center gap-2'>
            Request Samples
          </Link>
          <Link href='/ordering-info' className='bg-white border-2 border-amber-600 text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors flex items-center gap-2'>
            How to Order
          </Link>
        </div>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* RELATED ARTICLES */}
      {/* ═══════════════════════════════════════════ */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Export Process &amp; Sourcing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process: Buyer&apos;s Guide</Link></li>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='text-amber-700 hover:underline'>How to Choose an Ethiopian Coffee Export Company</Link></li>
              <li>&bull; <Link href='/insights/direct-trade-ethiopian-farmers' className='text-amber-700 hover:underline'>Direct Trade Ethiopian Coffee: How It Works</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts &amp; Payment Terms</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality, Grading &amp; Pricing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality: Defects &amp; Grading</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Pricing: FOB Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability Guide</Link></li>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Regulations &amp; Compliance</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline'>EUDR and Ethiopian Coffee Compliance</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Ethiopian Coffee Certifications Guide</Link></li>
              <li>&bull; <Link href='/insights/private-vs-cooperative-ethiopian-coffee-exporters' className='text-amber-700 hover:underline'>Private vs Cooperative Exporters</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Market Intelligence</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/rising-ethiopian-coffee-prices-explained' className='text-amber-700 hover:underline'>Rising Ethiopian Coffee Prices Explained</Link></li>
              <li>&bull; <Link href='/insights/navigating-2026-ethiopian-specialty-coffee-exporters' className='text-amber-700 hover:underline'>2026 Ethiopian Specialty Coffee Exporters</Link></li>
              <li>&bull; <Link href='/insights/top-ethiopian-coffee-importers-buyers-2024-2025' className='text-amber-700 hover:underline'>Top Ethiopian Coffee Importers 2024/2025</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter with three decades of sourcing relationships across Ethiopia&apos;s coffee regions. This guide covers the ECX system, grading standards, export channels, traceability, and sourcing strategy for international buyers. For current pricing and availability, <Link href='/contact-us' className='underline'>contact us directly</Link>.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2 text-center'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot; <Link href='/ethiopian-coffee-exporter' className='underline'>Export Services</Link> &middot; <Link href='/about' className='underline'>About</Link> &middot; <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

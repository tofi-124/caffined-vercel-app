import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineQuestionMarkCircle,
  HiOutlineCheckCircle,
  HiOutlineGlobeAlt,
  HiOutlineDocumentText,
  HiOutlineShieldCheck,
  HiOutlineCpuChip,
  HiOutlineCurrencyDollar,
  HiOutlineMagnifyingGlass,
  HiOutlineBuildingStorefront,
  HiOutlineMapPin
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopianCoffeeTraceabilityGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Traceability levels, documentation standards, digital tools, and verification methods for importers and roasters sourcing transparent Ethiopian green coffee.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Traceability transforms Ethiopian coffee from a commodity into a verified, story-backed product that commands premium pricing and meets regulatory requirements.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian coffee traceability showing green coffee beans with lot tags and geolocation data for supply chain transparency'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Supply Chain Transparency / Traceability / Sourcing Guide / Importer Resources</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Key Takeaway:</span> Ethiopian coffee traceability ranges from basic regional identification to full farm-level GPS mapping. For importers, the practical question is not whether traceability exists, but at what level you need it for your business. EUDR compliance demands plot-level geolocation data for EU-bound shipments. Specialty buyers seeking 85+ scoring micro-lots benefit from washing station or cooperative-level traceability. Commercial importers may only need ECX warehouse receipt data. Understanding these tiers, what documentation to request, and how to verify claims from your exporter separates informed buyers from those relying on trust alone. Ethiopia is investing heavily in digital traceability infrastructure, and exporters who can deliver verified data now hold a significant competitive advantage.</span>
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href="#what-is-traceability" className='text-amber-700 hover:underline'>1. What Coffee Traceability Means for Buyers</a></li>
          <li><a href="#traceability-levels" className='text-amber-700 hover:underline'>2. Five Levels of Ethiopian Coffee Traceability</a></li>
          <li><a href="#supply-chain-nodes" className='text-amber-700 hover:underline'>3. The Ethiopian Supply Chain: Key Traceability Nodes</a></li>
          <li><a href="#ecx-vs-direct" className='text-amber-700 hover:underline'>4. ECX Traceability vs. Direct Specialty Traceability</a></li>
          <li><a href="#documentation" className='text-amber-700 hover:underline'>5. Documentation for Traceable Ethiopian Coffee</a></li>
          <li><a href="#digital-tools" className='text-amber-700 hover:underline'>6. Digital Traceability Tools and Technology</a></li>
          <li><a href="#eudr-requirements" className='text-amber-700 hover:underline'>7. EUDR and Traceability Requirements</a></li>
          <li><a href="#cost-benefit" className='text-amber-700 hover:underline'>8. Cost-Benefit of Traceable Coffee</a></li>
          <li><a href="#verify-claims" className='text-amber-700 hover:underline'>9. How to Verify Traceability Claims</a></li>
          <li><a href="#faq" className='text-amber-700 hover:underline'>10. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRODUCTION */}
      <p className='my-4'>
        <span className='font-bold'>Ethiopian coffee traceability</span> has shifted from a marketing advantage to a commercial necessity. Three forces are driving this change: the EU Deforestation Regulation (EUDR) requiring plot-level geolocation for coffee entering European markets, growing consumer demand for transparent supply chains, and specialty buyers who want verified origin data to justify premium pricing. For importers and roasters, traceability is no longer optional. It is a condition of market access, quality assurance, and brand credibility.
      </p>

      <p className='my-4'>
        Yet most traceability content online is written by technology vendors or regulatory consultants. This guide is written from the perspective of an Ethiopian coffee exporter who builds traceability into every shipment. It covers the practical details importers need: what levels of traceability are available, which documents to request, how to verify claims, and what it costs. If you buy Ethiopian green coffee professionally, this is the traceability reference designed for your workflow.
      </p>

      {/* SECTION 1: WHAT IS TRACEABILITY */}
      <h2 id="what-is-traceability" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineGlobeAlt className='text-amber-600' />
        What Coffee Traceability Means for Buyers
      </h2>

      <p className='my-4'>
        Coffee traceability is the ability to track a specific lot of green coffee backward through the supply chain, from your warehouse to the point of origin. The depth of that tracking determines the traceability level. A lot traced to &quot;Sidamo region&quot; offers basic geographic identification. A lot traced to &quot;Bensa woreda, Bombe kebele, Washing Station X, Lot 47, harvested November 2025, GPS coordinates -6.4523, 38.7891&quot; offers full supply chain transparency.
      </p>

      <p className='my-4'>
        For B2B buyers, traceability serves four distinct purposes:
      </p>

      <ul className='list-disc pl-6 space-y-2 my-4'>
        <li><span className='font-bold'>Regulatory compliance:</span> EUDR requires EU operators to prove coffee was not produced on land deforested after December 31, 2020. This demands geolocation data at the plot level.</li>
        <li><span className='font-bold'>Quality verification:</span> Traceable lots allow you to return to the same washing station, cooperative, or farmer group year after year, building consistency in your program.</li>
        <li><span className='font-bold'>Premium justification:</span> Roasters selling single-origin Ethiopian coffee at $18 to $25 per bag need a verifiable story. Traceability provides the data behind the narrative.</li>
        <li><span className='font-bold'>Risk management:</span> Knowing exactly where your coffee comes from reduces exposure to fraud, quality inconsistencies, and reputational risk from opaque supply chains.</li>
      </ul>

      <p className='my-4'>
        The International Coffee Organization (ICO) estimates that fewer than 20% of global coffee exports carry farm-level traceability data. Ethiopia, despite its complex smallholder structure (over 5 million coffee farming households), is making rapid progress. Government digitization initiatives, the ECX modernization program, and private exporter investments are expanding traceable supply faster than in most producing countries.
      </p>

      {/* SECTION 2: FIVE LEVELS */}
      <h2 id="traceability-levels" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineMapPin className='text-amber-600' />
        Five Levels of Ethiopian Coffee Traceability
      </h2>

      <p className='my-4'>
        Not all traceability is equal. Ethiopian coffee can be traced at five progressively specific levels. Each level adds cost, complexity, and value. Understanding these tiers helps you match your traceability requirements to your business model.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full border-collapse border border-gray-300 text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='border border-gray-300 px-4 py-3 text-left'>Level</th>
              <th className='border border-gray-300 px-4 py-3 text-left'>Granularity</th>
              <th className='border border-gray-300 px-4 py-3 text-left'>Data Available</th>
              <th className='border border-gray-300 px-4 py-3 text-left'>Typical Use Case</th>
              <th className='border border-gray-300 px-4 py-3 text-left'>EUDR Compliant?</th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-white'>
              <td className='border border-gray-300 px-4 py-3 font-bold'>1. Region</td>
              <td className='border border-gray-300 px-4 py-3'>Sidamo, Yirgacheffe, Guji, Harar, Limu, Jimma</td>
              <td className='border border-gray-300 px-4 py-3'>Origin zone, grade, processing method</td>
              <td className='border border-gray-300 px-4 py-3'>Commercial grade, ECX standard lots</td>
              <td className='border border-gray-300 px-4 py-3 text-red-600 font-semibold'>No</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-3 font-bold'>2. Woreda/Zone</td>
              <td className='border border-gray-300 px-4 py-3'>District-level (e.g., Bensa, Uraga, Kochere)</td>
              <td className='border border-gray-300 px-4 py-3'>Sub-region, altitude range, harvest period</td>
              <td className='border border-gray-300 px-4 py-3'>Premium commercial, some specialty</td>
              <td className='border border-gray-300 px-4 py-3 text-red-600 font-semibold'>No</td>
            </tr>
            <tr className='bg-white'>
              <td className='border border-gray-300 px-4 py-3 font-bold'>3. Washing Station</td>
              <td className='border border-gray-300 px-4 py-3'>Named station or dry mill facility</td>
              <td className='border border-gray-300 px-4 py-3'>Station ID, lot number, processing dates, cupping score</td>
              <td className='border border-gray-300 px-4 py-3'>Specialty single-origin programs</td>
              <td className='border border-gray-300 px-4 py-3 text-amber-600 font-semibold'>Partial</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-3 font-bold'>4. Cooperative/Farmer Group</td>
              <td className='border border-gray-300 px-4 py-3'>Named cooperative or registered farmer cluster</td>
              <td className='border border-gray-300 px-4 py-3'>Member count, GPS polygon of collection area, certifications</td>
              <td className='border border-gray-300 px-4 py-3'>Certified organic/Fair Trade, EUDR prep</td>
              <td className='border border-gray-300 px-4 py-3 text-amber-600 font-semibold'>Partial</td>
            </tr>
            <tr className='bg-white'>
              <td className='border border-gray-300 px-4 py-3 font-bold'>5. Farm/Plot Level</td>
              <td className='border border-gray-300 px-4 py-3'>Individual farmer or specific plot with GPS coordinates</td>
              <td className='border border-gray-300 px-4 py-3'>Farmer name, plot GPS polygon, area (hectares), tree count, satellite imagery</td>
              <td className='border border-gray-300 px-4 py-3'>EUDR compliance, micro-lots, competition lots</td>
              <td className='border border-gray-300 px-4 py-3 text-green-600 font-semibold'>Yes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Most Ethiopian coffee exported through <Link href='/insights/ecx-and-ethiopian-coffee-export' className='underline font-bold'>the ECX system</Link> carries Level 1 or Level 2 traceability. Specialty coffee sold through direct export licenses typically reaches Level 3 or Level 4. Full Level 5 traceability remains rare but is expanding rapidly as exporters invest in farmer mapping programs to prepare for EUDR enforcement.
      </p>

      {/* SECTION 3: SUPPLY CHAIN NODES */}
      <h2 id="supply-chain-nodes" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineCheckCircle className='text-amber-600' />
        The Ethiopian Supply Chain: Key Traceability Nodes
      </h2>

      <p className='my-4'>
        Ethiopian coffee passes through several distinct nodes between the farm and the export port. Each node is a point where traceability data can be captured or lost. Understanding these nodes helps importers ask the right questions about supply chain integrity.
      </p>

      <h3 className='text-xl font-bold mt-6'>1. Smallholder Farms (5+ Million Households)</h3>
      <p className='my-4'>
        Over 95% of Ethiopian coffee is produced by smallholder farmers cultivating less than 2 hectares each. These farmers typically grow heirloom Arabica varieties under shade canopy at 1,400 to 2,200 meters altitude. At this stage, traceability data includes: farmer identity, plot location (GPS), approximate area, variety type, and harvest dates. Capturing this data requires exporter or cooperative investment in farmer registration programs. The Ethiopian Coffee and Tea Authority (ECTA) has been working with development partners to digitize farmer records, but coverage remains uneven across regions.
      </p>

      <h3 className='text-xl font-bold mt-6'>2. Collection Points and Washing Stations</h3>
      <p className='my-4'>
        Farmers deliver cherry to local collection points or directly to washing stations. Washed coffee is pulped, fermented, and dried at the station. Natural (dry-processed) coffee is typically dried at the farm or collection point. This is the most critical traceability node because it is where cherries from multiple farmers are first aggregated. A well-managed washing station maintains intake records linking each farmer delivery to weight, date, and quality assessment. Poorly managed stations mix cherries without records, breaking the traceability chain.
      </p>

      <h3 className='text-xl font-bold mt-6'>3. Dry Milling and Hulling</h3>
      <p className='my-4'>
        After drying, parchment coffee (washed) or dried cherry (natural) is transported to dry mills for hulling, cleaning, density sorting, and color sorting. Large exporters operate their own dry mills. Smaller exporters use contracted facilities. At the dry mill, lots receive export preparation and are assigned lot identifiers. Mixing of lots from different washing stations or regions can occur at this stage if the exporter does not maintain segregation protocols.
      </p>

      <h3 className='text-xl font-bold mt-6'>4. ECX Warehouse or Direct Export Warehouse</h3>
      <p className='my-4'>
        Coffee entering the <Link href='/insights/ecx-and-ethiopian-coffee-export' className='underline font-bold'>Ethiopia Commodity Exchange (ECX)</Link> is deposited in ECX-certified warehouses and graded by ECX liquoring inspectors. The ECX system assigns origin, grade, and warehouse receipt data. However, ECX traceability stops at the woreda level; individual washing station or farmer data is not tracked through ECX. Coffee exported under direct specialty licenses bypasses ECX and goes directly to the exporter&apos;s warehouse, where the exporter controls traceability documentation.
      </p>

      <h3 className='text-xl font-bold mt-6'>5. Export and Port of Djibouti</h3>
      <p className='my-4'>
        After grading and export approval, coffee is containerized and trucked from Addis Ababa (or regional centers) to the Port of Djibouti, approximately 900 km. Export documentation is generated at this stage: phytosanitary certificate, certificate of origin, export permit, ICO certificate, bill of lading, and commercial invoice. All these documents link back to the lot identifier established at the dry mill. For importers, the lot ID on your contract and shipping documents is the thread connecting your green coffee back through the chain.
      </p>

      {/* SECTION 4: ECX VS DIRECT */}
      <h2 id="ecx-vs-direct" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineBuildingStorefront className='text-amber-600' />
        ECX Traceability vs. Direct Specialty Traceability
      </h2>

      <p className='my-4'>
        Ethiopia operates two parallel export channels, and the traceability depth differs significantly between them.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full border-collapse border border-gray-300 text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='border border-gray-300 px-4 py-3 text-left'>Factor</th>
              <th className='border border-gray-300 px-4 py-3 text-left'>ECX Channel</th>
              <th className='border border-gray-300 px-4 py-3 text-left'>Direct Specialty Channel</th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-white'>
              <td className='border border-gray-300 px-4 py-3 font-bold'>Traceability depth</td>
              <td className='border border-gray-300 px-4 py-3'>Region and woreda (Level 1-2)</td>
              <td className='border border-gray-300 px-4 py-3'>Washing station to farm (Level 3-5)</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-3 font-bold'>Lot segregation</td>
              <td className='border border-gray-300 px-4 py-3'>By origin zone and grade</td>
              <td className='border border-gray-300 px-4 py-3'>By station, day lot, or farmer</td>
            </tr>
            <tr className='bg-white'>
              <td className='border border-gray-300 px-4 py-3 font-bold'>Grading</td>
              <td className='border border-gray-300 px-4 py-3'>ECX liquoring unit (CLU)</td>
              <td className='border border-gray-300 px-4 py-3'>Exporter&apos;s lab + third-party cupping</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-3 font-bold'>Documentation</td>
              <td className='border border-gray-300 px-4 py-3'>Warehouse receipt, grade certificate</td>
              <td className='border border-gray-300 px-4 py-3'>Lot card, farmer records, GPS data, cupping report</td>
            </tr>
            <tr className='bg-white'>
              <td className='border border-gray-300 px-4 py-3 font-bold'>EUDR readiness</td>
              <td className='border border-gray-300 px-4 py-3'>Insufficient without supplemental data</td>
              <td className='border border-gray-300 px-4 py-3'>Achievable with exporter investment</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-3 font-bold'>Typical grades</td>
              <td className='border border-gray-300 px-4 py-3'>G2-G5 (some G1)</td>
              <td className='border border-gray-300 px-4 py-3'>G1-G2 specialty (Q1, 84+ cupping)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        The main distinction: ECX provides standardized but shallow traceability. The direct specialty channel offers deeper traceability but requires the exporter to build and maintain their own data collection systems. When evaluating an Ethiopian coffee exporter, ask which channel your coffee flows through and what supplementary traceability data they can provide beyond the minimum. For more on choosing between these channels, see our guide on <Link href='/insights/private-vs-cooperative-ethiopian-coffee-exporters' className='underline font-bold'>private vs. cooperative Ethiopian coffee exporters</Link>.
      </p>

      {/* SECTION 5: DOCUMENTATION */}
      <h2 id="documentation" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineDocumentText className='text-amber-600' />
        Documentation for Traceable Ethiopian Coffee
      </h2>

      <p className='my-4'>
        Traceable coffee requires traceable paperwork. Here is the documentation you should expect from an Ethiopian exporter offering different traceability levels:
      </p>

      <h3 className='text-xl font-bold mt-6'>Standard Export Documents (All Levels)</h3>
      <ul className='list-disc pl-6 space-y-1 my-4 text-sm'>
        <li>Commercial invoice with lot ID, origin, grade, and weight</li>
        <li>Bill of lading (B/L)</li>
        <li>Phytosanitary certificate from the Ethiopian Plant Health Institute</li>
        <li>Certificate of origin from the Ethiopian Chamber of Commerce</li>
        <li>ICO certificate of origin</li>
        <li>Export permit from ECTA</li>
        <li>Fumigation certificate (if required by destination country)</li>
      </ul>

      <h3 className='text-xl font-bold mt-6'>Enhanced Traceability Documents (Level 3+)</h3>
      <ul className='list-disc pl-6 space-y-1 my-4 text-sm'>
        <li>Lot card: washing station name, processing dates, drying method, lot volume</li>
        <li>Cupping report: SCA protocol scores with tasting notes signed by Q grader or licensed cupper</li>
        <li>Pre-shipment sample match confirmation</li>
        <li>Moisture content and water activity readings</li>
        <li>Screen size distribution analysis</li>
        <li>Certification transaction certificates (organic, Fair Trade, Rainforest Alliance) where applicable</li>
      </ul>

      <h3 className='text-xl font-bold mt-6'>Full Traceability Documents (Level 4-5)</h3>
      <ul className='list-disc pl-6 space-y-1 my-4 text-sm'>
        <li>Farmer or cooperative registry with member names and IDs</li>
        <li>GPS coordinates (polygon or point) of contributing farms or plots</li>
        <li>Satellite or aerial imagery confirming no deforestation after December 31, 2020</li>
        <li>Chain of custody log: cherry intake records at washing station linked to farmer deliveries</li>
        <li>Altitude, variety, and estimated production volume per contributing area</li>
        <li>Due diligence statement confirming legality of land use and labor conditions</li>
      </ul>

      <p className='my-4'>
        Not every importer needs Level 5 documentation. A roaster buying a single container of Sidamo Grade 2 for a house blend does not require farm-level GPS polygons. A European importer subject to EUDR purchasing Guji G1 micro-lots does. Match your documentation requirements to your regulatory environment and market positioning. For a complete guide to <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='underline font-bold'>Ethiopian coffee contracts and payment terms</Link>, including how to specify traceability requirements in your purchase agreement, see our dedicated article.
      </p>

      {/* SECTION 6: DIGITAL TOOLS */}
      <h2 id="digital-tools" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineCpuChip className='text-amber-600' />
        Digital Traceability Tools and Technology
      </h2>

      <p className='my-4'>
        Several digital platforms are transforming Ethiopian coffee traceability from paper-based record-keeping to real-time data systems. These tools matter for importers because they determine the format, reliability, and accessibility of the traceability data you receive.
      </p>

      <h3 className='text-xl font-bold mt-6'>Farmer Registration and GPS Mapping</h3>
      <p className='my-4'>
        Mobile-based farmer onboarding platforms allow exporters and cooperatives to register individual farmers with biometric data, national ID, and GPS-mapped plot boundaries. This is the foundation of Level 5 traceability. The Ethiopian government&apos;s Agricultural Transformation Agency (now the Ethiopian Agricultural Authority) has supported farmer registry pilots in major coffee zones. Private exporters increasingly invest in their own mapping programs using tools like ODK Collect, KoboToolbox, or proprietary platforms.
      </p>

      <h3 className='text-xl font-bold mt-6'>Blockchain and Distributed Ledger Systems</h3>
      <p className='my-4'>
        Blockchain-based traceability creates an immutable record of each transaction in the coffee supply chain. Companies like Farmer Connect (used by major importers), IBM Food Trust, and bext360 offer blockchain layers for coffee. The value for buyers: data entered at the washing station cannot be altered downstream. The limitation: blockchain only verifies that data was recorded, not that the data itself is accurate. If a washing station enters incorrect GPS coordinates, the blockchain faithfully preserves that error. Ground-truth verification remains essential.
      </p>

      <h3 className='text-xl font-bold mt-6'>Satellite Monitoring and Remote Sensing</h3>
      <p className='my-4'>
        For EUDR compliance, satellite imagery is used to confirm that coffee-producing plots were not forested land after the December 31, 2020 cutoff date. Services like Enverita, Satelligence, and Earthworm Foundation provide satellite-based deforestation risk assessments for coffee sourcing areas. Ethiopian coffee exports carry lower deforestation risk than some other origins because most production occurs under existing forest canopy (shade-grown smallholder systems), but documentation is still required.
      </p>

      <h3 className='text-xl font-bold mt-6'>QR Codes and Consumer-Facing Transparency</h3>
      <p className='my-4'>
        Some exporters offer QR codes on packaging that link to a web page displaying farm photos, GPS location, cupping data, and farmer stories. This is primarily a marketing tool for roasters selling to end consumers. For B2B purposes, the underlying data matters more than the consumer interface. Ask exporters for the raw data files (CSV, GeoJSON, or PDF reports) rather than relying solely on a QR-linked landing page.
      </p>

      {/* SECTION 7: EUDR */}
      <h2 id="eudr-requirements" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineShieldCheck className='text-amber-600' />
        EUDR and Ethiopian Coffee Traceability Requirements
      </h2>

      <p className='my-4'>
        The <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='underline font-bold'>EU Deforestation Regulation (EUDR)</Link> is the single largest regulatory driver of coffee traceability globally. As of late 2025, large and medium EU operators must submit due diligence statements for coffee imports. Small and micro enterprises have until mid-2026.
      </p>

      <p className='my-4'>
        EUDR requires three categories of data for every coffee shipment entering the EU:
      </p>

      <ol className='list-decimal pl-6 space-y-2 my-4'>
        <li><span className='font-bold'>Geolocation data:</span> GPS coordinates of all plots of land where the coffee was produced. For plots under 4 hectares (virtually all Ethiopian smallholder farms), a single GPS point is sufficient. For plots above 4 hectares, a polygon boundary is required.</li>
        <li><span className='font-bold'>Time of production:</span> The date or date range when the coffee was harvested.</li>
        <li><span className='font-bold'>Deforestation-free verification:</span> Evidence (typically satellite imagery analysis) that the land was not subject to deforestation after December 31, 2020.</li>
      </ol>

      <p className='my-4'>
        For Ethiopian exporters, the challenge is scale. With over 5 million coffee farming households, many cultivating fragmented plots of 0.5 to 2 hectares, collecting GPS data for every contributing farmer is a massive undertaking. The cooperative and washing station structure helps: if all farmers delivering to a specific station are mapped, the station-level traceability can satisfy EUDR requirements for the aggregated lot.
      </p>

      <p className='my-4'>
        Ethiopia has been classified as a &quot;standard risk&quot; country under EUDR&apos;s benchmarking system (the risk classification was still being finalized as of early 2026). Standard risk requires full due diligence. Importers sourcing Ethiopian coffee for EU markets should confirm that their exporter has an active farmer mapping program and can provide GPS data in the format required for the EU Information System submission.
      </p>

      {/* SECTION 8: COST-BENEFIT */}
      <h2 id="cost-benefit" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineCurrencyDollar className='text-amber-600' />
        Cost-Benefit of Traceable Coffee
      </h2>

      <p className='my-4'>
        Traceability adds cost. Farmer mapping, digital platforms, lot segregation, and additional documentation all require investment. The question every buyer asks: is it worth it?
      </p>

      <h3 className='text-xl font-bold mt-6'>Costs</h3>
      <ul className='list-disc pl-6 space-y-2 my-4'>
        <li><span className='font-bold'>Farmer mapping:</span> Initial GPS registration costs $2 to $5 per farmer depending on terrain and accessibility. Annual updates are lower ($0.50 to $1.50 per farmer). For a washing station sourcing from 500 farmers, initial mapping costs $1,000 to $2,500.</li>
        <li><span className='font-bold'>Lot segregation:</span> Maintaining separate lots through washing, drying, milling, and warehousing reduces throughput efficiency. Estimates range from $0.01 to $0.03 per pound of green coffee for segregation overhead.</li>
        <li><span className='font-bold'>Digital platform fees:</span> Annual platform subscriptions for traceability software range from $2,000 to $15,000 depending on scale and features.</li>
        <li><span className='font-bold'>Documentation and audit:</span> Preparing EUDR-compliant due diligence statements, third-party satellite analysis, and certification audits cost $0.02 to $0.05 per pound.</li>
      </ul>

      <h3 className='text-xl font-bold mt-6'>Benefits</h3>
      <ul className='list-disc pl-6 space-y-2 my-4'>
        <li><span className='font-bold'>EU market access:</span> Without EUDR-compliant traceability, coffee cannot legally enter the EU market after enforcement begins. The EU accounts for approximately 30% of Ethiopian coffee export volume.</li>
        <li><span className='font-bold'>Price premiums:</span> Traceable specialty lots command $0.15 to $0.50 per pound over comparable non-traceable lots. Micro-lots with full farm-level documentation can achieve premiums of $1.00 or more above market.</li>
        <li><span className='font-bold'>Buyer retention:</span> Importers who find a reliable traceable source stay. Transparency reduces the incentive to shop for alternatives every season.</li>
        <li><span className='font-bold'>Brand value:</span> Roasters using traceable Ethiopian coffee consistently report stronger customer engagement, higher retail price realization, and lower customer churn than those selling untraced commodities.</li>
      </ul>

      <p className='my-4'>
        The economics are clear for specialty-grade coffee (G1, G2, 84+ cupping score): the premium more than covers the traceability investment. For commercial grades (G3-G5), the calculation is tighter and depends on your destination market. If you export to the EU, traceability is a cost of doing business regardless. For more on pricing dynamics, see our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='underline font-bold'>Ethiopian coffee pricing guide for importers</Link>.
      </p>

      {/* SECTION 9: VERIFY CLAIMS */}
      <h2 id="verify-claims" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineMagnifyingGlass className='text-amber-600' />
        How to Verify Traceability Claims
      </h2>

      <p className='my-4'>
        Any exporter can claim &quot;full traceability.&quot; Verifying those claims requires specific questions and checks. Here is a practical verification framework for importers:
      </p>

      <h3 className='text-xl font-bold mt-6'>Step 1: Request Sample Documentation Before Committing</h3>
      <p className='my-4'>
        Before signing a contract, ask the exporter to provide sample traceability documentation for a recent shipment. This should include a lot card, washing station identification, cupping report, and (if Level 4-5) GPS data or farmer registry excerpt. An exporter who cannot produce this for an existing lot is unlikely to produce it for yours.
      </p>

      <h3 className='text-xl font-bold mt-6'>Step 2: Cross-Reference GPS Data</h3>
      <p className='my-4'>
        If GPS coordinates are provided, verify them independently. Plot the coordinates on Google Earth or a GIS platform. Confirm that: (a) the location falls within the claimed Ethiopian coffee region, (b) the terrain shows agricultural land consistent with coffee production (shade trees, small plots, appropriate altitude), and (c) there is no obvious deforestation visible in recent satellite imagery. This takes 15 to 30 minutes and catches blatant errors or fabricated data.
      </p>

      <h3 className='text-xl font-bold mt-6'>Step 3: Ask for Chain of Custody Details</h3>
      <p className='my-4'>
        Traceability means nothing if the chain of custody has gaps. Ask the exporter: How is cherry intake at the washing station recorded? Are farmer deliveries individually logged? How is lot identity maintained through dry milling? Are lots physically separated or digitally tagged? What happens if two lots are accidentally mixed? The specificity of their answers reveals the maturity of their system.
      </p>

      <h3 className='text-xl font-bold mt-6'>Step 4: Conduct an Origin Visit (for Key Relationships)</h3>
      <p className='my-4'>
        For importers building long-term Ethiopian coffee programs, an origin visit is invaluable. Visit the washing station, meet the cooperative leadership, and observe the intake and processing systems firsthand. This is standard practice among established specialty importers like Volcafe, Trabocca, and Cafe Imports. It builds trust, validates claims, and deepens understanding of what you are buying. Ethio Coffee Import and Export PLC facilitates origin visits for our import partners, from Yirgacheffe washing stations to Guji cooperative facilities.
      </p>

      <h3 className='text-xl font-bold mt-6'>Step 5: Compare Pre-Shipment Samples to Arrival Quality</h3>
      <p className='my-4'>
        Traceability includes quality consistency. Cup the <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='underline font-bold'>pre-shipment sample</Link> and compare it to the arrival sample. Significant deviations in flavor profile or physical quality may indicate lot substitution or mixing during transit. A traceable supply chain should deliver consistent quality from sample to shipment.
      </p>

      {/* FAQ */}
      <h2 id="faq" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineQuestionMarkCircle className='text-amber-600' />
        Frequently Asked Questions
      </h2>

      <section className='my-6 space-y-6'>
        <div>
          <h4 className="font-bold text-gray-800 mb-2">What is Ethiopian coffee traceability?</h4>
          <p className="text-sm text-gray-600">Ethiopian coffee traceability is the ability to track a lot of green coffee back through the supply chain to its origin. This ranges from basic region-level identification (Sidamo, Yirgacheffe) to full farm-level GPS mapping with farmer identity and harvest dates. The depth of traceability depends on the export channel (ECX vs. direct specialty) and the exporter&apos;s data collection capabilities.</p>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 mb-2">Do I need farm-level traceability for all Ethiopian coffee imports?</h4>
          <p className="text-sm text-gray-600">Not necessarily. Farm-level (Level 5) traceability is required for EUDR compliance when importing into the EU. Buyers in other markets may only need washing station or woreda-level traceability depending on their quality requirements and consumer transparency goals. Match the traceability level to your regulatory environment and market positioning.</p>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 mb-2">How does EUDR affect Ethiopian coffee traceability requirements?</h4>
          <p className="text-sm text-gray-600">EUDR requires EU importers to submit GPS coordinates of all plots where coffee was produced, proof of harvest timing, and deforestation-free verification. For Ethiopian smallholder farms under 4 hectares, a single GPS point per plot is sufficient. Exporters must invest in farmer mapping programs, and importers must confirm data availability before purchasing EU-bound lots.</p>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 mb-2">Can ECX coffee be fully traceable?</h4>
          <p className="text-sm text-gray-600">Standard ECX-traded coffee carries region and woreda-level traceability only. The ECX system does not track individual washing stations or farmers. However, some exporters supplement ECX data with their own supply chain records. For full traceability, direct specialty export channels provide significantly deeper data. Ask your exporter which channel your specific lot passed through.</p>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 mb-2">What does traceable Ethiopian coffee cost compared to non-traceable?</h4>
          <p className="text-sm text-gray-600">Traceable specialty lots typically command $0.15 to $0.50 per pound above comparable non-traceable coffee. Micro-lots with full farm-level documentation can achieve premiums of $1.00 or more. The traceability investment adds approximately $0.03 to $0.08 per pound in production costs, making it a positive-margin proposition for specialty-grade Ethiopian coffee.</p>
        </div>
      </section>

      {/* CTA */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Traceable Ethiopian Coffee Direct from Origin</h4>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Import and Export PLC</span> provides fully traceable specialty green coffee from Yirgacheffe, Sidamo, Guji, Harrar, Limu, and Jimma with lot-level documentation, cupping reports, and GPS-mapped supply chain data. Whether you need EUDR-compliant traceability or washing station-level transparency for your single-origin program, we deliver the data and the quality your business requires.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Our Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Request Samples</Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>How to Order</Link>
        </div>
      </div>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='text-amber-700 hover:underline'>How to Choose an Ethiopian Export Company</Link></li>
              <li>&bull; <Link href='/insights/private-vs-cooperative-ethiopian-coffee-exporters' className='text-amber-700 hover:underline'>Private vs Cooperative Ethiopian Coffee Exporters</Link></li>
              <li>&bull; <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Regulations &amp; Compliance</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline'>EUDR and Ethiopian Coffee Compliance</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Ethiopian Coffee Certifications Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts &amp; Payment Terms</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality &amp; Evaluation</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup and Evaluate Ethiopian Samples</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality: Defects &amp; Grading</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Market &amp; Origins</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Green Coffee Origins</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC. This guide draws on data from the International Coffee Organization (ICO), the Ethiopian Coffee and Tea Authority (ECTA), the EU Regulation 2023/1115 (EUDR), MDPI research on digital traceability in Ethiopian coffee supply chains, and our direct experience building traceable supply chains for international specialty buyers. Traceability capabilities and costs evolve rapidly; contact us for current information.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot; <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> &middot; <Link href='/about' className='underline'>About Ethio Coffee</Link> &middot; <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

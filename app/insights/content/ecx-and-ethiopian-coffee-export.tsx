import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { HiOutlineShieldCheck, HiOutlineScale, HiOutlineCheckCircle, HiOutlineXCircle, HiOutlineDocumentText } from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function ECXEthiopianCoffeeExport({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Understanding the Ethiopia Commodity Exchange and its critical role in Ethiopian coffee export
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          The Ethiopia Commodity Exchange (ECX) main building where Ethiopian coffee is auctioned.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopia Commodity Exchange ECX coffee export warehouse'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Coffee Trade & Export / Ethiopian Coffee Industry</span>
      </div>
      
      <p className='my-4'>
        If you&apos;ve ever tried to import Ethiopian coffee, you&apos;ve likely encountered the <a href="https://www.ecx.com.et" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-bold">Ethiopia Commodity Exchange (ECX)</a>. For international buyers, the ECX can seem like a mysterious black box a regulatory layer that adds complexity to sourcing. For Ethiopian exporters, it&apos;s the backbone of legitimacy, quality control, and market access.
      </p>

      <p className='my-4'>
        This guide explains what the ECX actually is, how it works, why it matters for Ethiopian coffee export, and what importers need to know when sourcing from ECX-registered suppliers.
      </p>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineShieldCheck className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Key Takeaway:</span> The ECX isn&apos;t just a regulatory hurdle it&apos;s a quality assurance and traceability system that protects both exporters and international buyers. Understanding how it works makes sourcing Ethiopian coffee significantly easier.</span>
        </p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        What is the Ethiopia Commodity Exchange (ECX)?
      </h3>
      <p className='my-4'>
        The <a href="https://www.ecx.com.et" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-bold">Ethiopia Commodity Exchange (ECX)</a> was established in 2008 as Africa&apos;s first commodity exchange, created to modernize Ethiopia&apos;s agricultural markets and address long-standing inefficiencies in the country&apos;s commodity trading system. Coffee is one of its primary commodities, alongside sesame, wheat, maize, and haricot beans.
      </p>

      <p className='my-4'>
        Before the ECX, Ethiopian coffee markets suffered from:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Price opacity:</span> Farmers and buyers had no reliable market information, leading to exploitation</li>
        <li><span className='font-bold'>Quality inconsistency:</span> No standardized grading meant buyers couldn&apos;t trust what they were purchasing</li>
        <li><span className='font-bold'>Limited traceability:</span> Coffee moved through multiple middlemen, obscuring origin and quality</li>
        <li><span className='font-bold'>Payment delays:</span> Transactions could take weeks or months, creating cash flow problems for farmers</li>
      </ul>

      <p className='my-4'>
        The ECX was designed to solve these problems by creating a centralized, transparent marketplace with <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='underline font-semibold'>standardized contracts</Link>, quality grading, electronic trading, and guaranteed payment clearing within 24 hours.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-2'><HiOutlineDocumentText className='inline mr-2' />ECX by the Numbers</h4>
        <ul className='text-sm space-y-1 list-disc ml-5'>
          <li>Established: April 2008</li>
          <li>Headquarters: Addis Ababa, Ethiopia</li>
          <li>Coffee handled: Over 60% of Ethiopia&apos;s coffee export volume</li>
          <li>Trading centers: Multiple regional warehouses across coffee-growing regions</li>
          <li>Exporters registered: Hundreds of licensed coffee exporters</li>
        </ul>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        <HiOutlineScale className='inline mr-2' />
        How the ECX Coffee Grading System Works
      </h3>
      <p className='my-4'>
        One of the ECX&apos;s most valuable contributions to Ethiopian coffee export is its standardized grading system. Every coffee lot that passes through the ECX is evaluated and assigned a grade based on physical defects and cup quality.
      </p>

      <div className='space-y-6 my-8'>
        <div className='bg-amber-50 p-6 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-xl mb-3 text-dark'>Ethiopian Coffee Grades</h4>
          <div className='space-y-3 text-sm'>
            <div className='bg-white p-4 rounded border border-amber-300'>
                  <h5 className='font-bold text-lg'>Grade 1 (G1) - Specialty</h5>
                  <p className='text-gray-600 mt-1'><span className='font-bold'>0-3 defects</span> per 300g sample</p>
                  <p className='mt-2'>The highest quality Ethiopian coffee. Clean cup, no defects, vibrant flavor. Typically scores 85+ on <a href="https://sca.coffee" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SCA cupping protocol</a>. Speciality pricing.</p>
            </div>

            <div className='bg-white p-4 rounded border border-amber-300'>
              <h5 className='font-bold text-lg'>Grade 2 (G2) - Specialty</h5>
              <p className='text-gray-600 mt-1'><span className='font-bold'>4-12 defects</span> per 300g sample</p>
              <p className='mt-2'>High-quality coffee with minimal defects. Still specialty-grade, excellent cup profile. Scores 83-85+ typically. Most common export grade for specialty market.</p>
            </div>

            <div className='bg-white p-4 rounded border border-amber-300'>
              <h5 className='font-bold text-lg'>Grade 3 (G3) - Premium</h5>
              <p className='text-gray-600 mt-1'><span className='font-bold'>13-25 defects</span> per 300g sample</p>
              <p className='mt-2'>Good quality coffee suitable for premium commercial blends. Clean but may lack the complexity of G1/G2.</p>
            </div>

            <div className='bg-white p-4 rounded border border-amber-300'>
              <h5 className='font-bold text-lg'>Grades 4 & 5 - Commercial</h5>
              <p className='text-gray-600 mt-1'><span className='font-bold'>26-45 defects (G4)</span>, <span className='font-bold'>46-100 defects (G5)</span></p>
              <p className='mt-2'>Commercial-grade coffee for mass-market products. Lower flavor complexity, more defects. Not typically exported for specialty market.</p>
            </div>
          </div>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-3'>What Counts as a "Defect"?</h4>
          <p className='text-sm mb-3'>The ECX uses the <a href="https://sca.coffee" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SCA (Specialty Coffee Association)</a> defect classification system:</p>
          <ul className='text-sm space-y-2 list-disc ml-5'>
            <li><span className='font-bold'>Category 1 defects (full defects):</span> Black beans, sour beans, fungus-damaged beans, foreign matter</li>
            <li><span className='font-bold'>Category 2 defects (partial defects):</span> Broken/chipped beans, insect damage, immature beans, withered beans, floaters</li>
            <li>5 Category 2 defects = 1 full defect equivalent</li>
          </ul>
        </div>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        The ECX Coffee Export Process: Step by Step
      </h3>
      <p className='my-4'>
        For international buyers, understanding how coffee moves through the ECX helps clarify timelines and documentation requirements.
      </p>

      <ol className='my-6 space-y-4 list-decimal ml-5 font-medium'>
        <li>
          <span className='font-bold'>Farmers/Cooperatives deliver cherry to washing stations</span>
          <p className='font-normal text-sm mt-1'>Coffee is processed (washed, natural, honey) and dried. Parchment coffee is milled to remove outer layers, producing green beans. Learn more about coffee processing <a href="https://en.wikipedia.org/wiki/Processing_of_coffee" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-bold">here</a>.</p>
        </li>
        <li>
          <span className='font-bold'>Coffee is delivered to ECX warehouses</span>
          <p className='font-normal text-sm mt-1'>Regional ECX facilities receive the coffee. Samples are taken for grading and cupping.</p>
        </li>
        <li>
          <span className='font-bold'>ECX quality control evaluates and grades</span>
          <p className='font-normal text-sm mt-1'>Professional cuppers assess defect count, moisture content, bean size/density, and cup quality. Coffee is assigned a grade (G1-G5) and classified by origin region.</p>
        </li>
        <li>
          <span className='font-bold'>Coffee is listed on ECX trading platform</span>
          <p className='font-normal text-sm mt-1'>Sellers list coffee lots with grade, origin, processing method, and quantity. Buyers (exporters, domestic roasters) can bid electronically.</p>
        </li>
        <li>
          <span className='font-bold'>Licensed exporters purchase coffee lots</span>
          <p className='font-normal text-sm mt-1'>Exporters registered with the ECX and <a href="https://share.google/2wukzLJwWhD4ABE9z" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-bold">Ethiopian Coffee &amp; Tea Authority</a> can buy coffee for international sale. Payment clears within 24 hours.</p>
        </li>
        <li>
          <span className='font-bold'>Coffee is prepared for export</span>
          <p className='font-normal text-sm mt-1'>Exporters arrange bagging (typically 60kg jute/<a href="https://grainpro.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-bold">GrainPro</a> bags), documentation (<a href="https://www.ico.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ICO certificate</a>, <a href="https://www.ippc.int/en/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">phytosanitary certificate</a>, quality reports), and shipping logistics.</p>
        </li>
        <li>
          <span className='font-bold'>Coffee ships from Djibouti port</span>
          <p className='font-normal text-sm mt-1'>Most Ethiopian coffee exports via <a href="https://en.wikipedia.org/wiki/Port_of_Djibouti" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Djibouti</a> (FOB Djibouti). Some exporters use the <a href="https://en.wikipedia.org/wiki/Addis_Ababa_Dry_Port" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Addis Ababa dry port</a> for containerized shipments.</p>
        </li>
      </ol>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium'><span className='font-bold'>Timeline Note:</span> From ECX purchase to container departure typically takes 2-4 weeks, depending on documentation, container availability, and logistics. Plan accordingly when ordering for seasonal programs. For the full step-by-step breakdown from contract to delivery, see our <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='underline font-bold'>export process buyer&apos;s guide</Link>.</p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        ECX Traceability: What It Means for Buyers
      </h3>
      <p className='my-4'>
        One of the ongoing debates about the ECX has been around traceability. Initially, the ECX system anonymized coffee origins to prevent price manipulation and ensure fairness. Coffee was classified only by broad region (e.g., "Sidama") rather than specific washing station or cooperative.
      </p>

      <p className='my-4'>
        <span className='font-bold'>This changed significantly in recent years.</span> The Ethiopian government and ECX have introduced reforms allowing greater traceability, especially for specialty coffee:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Direct Specialty License (DSL):</span> Allows exporters to bypass ECX for direct farm/cooperative purchases with full traceability. Requires special licensing and is typically limited to specialty-grade coffee scoring 85+ points.</li>
        <li><span className='font-bold'>Enhanced ECX traceability:</span> Recent ECX reforms allow better origin documentation within the platform, especially for high-grade lots (G1/G2).</li>
        <li><span className='font-bold'>Union/Cooperative branding:</span> Cooperatives can now maintain identity and traceability through the ECX system in many cases.</li>
      </ul>

      <p className='my-4'>
        Understanding how ECX traceability compares to direct specialty channels is essential for importers building transparent sourcing programs. Our <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-blue-600 underline font-bold'>Ethiopian coffee traceability guide</Link> covers five traceability levels, required documentation at each tier, digital tools, and a practical verification framework for buyers. For a deeper look at how <Link href='/insights/direct-trade-ethiopian-farmers' className='underline font-bold'>direct trade works in Ethiopia&apos;s export system</Link> — including vertical integration pathways and a buyer verification checklist — see our dedicated guide.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-2'><HiOutlineDocumentText className='inline mr-2' />For Importers: What to Ask About Traceability</h4>
        <p className='text-sm mb-3'>When sourcing from an Ethiopian exporter, clarify:</p>
        <ul className='text-sm space-y-2 list-disc ml-5'>
              <li><span className='font-bold'>Is this ECX coffee or DSL (direct)?</span> DSL offers farm/cooperative-level traceability</li>
          <li><span className='font-bold'>What region and sub-region?</span> Even ECX coffee can specify areas like "Yirgacheffe Kochere" vs just "Yirgacheffe"</li>
          <li><span className='font-bold'>Washing station or cooperative name?</span> Available for DSL and increasingly for ECX specialty lots</li>
          <li><span className='font-bold'>Processing details?</span> Fermentation time, drying method, etc.</li>
          <li><span className='font-bold'>Cup score and cupping notes?</span> Reputable exporters provide their own lab reports beyond ECX grading</li>
        </ul>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Benefits of ECX for International Coffee Buyers
      </h3>
      <p className='my-4'>
        If you&apos;re an importer or roaster sourcing Ethiopian coffee, working with ECX-registered exporters offers significant advantages:
      </p>

      <div className='grid md:grid-cols-2 gap-5 my-6'>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-2'><HiOutlineCheckCircle className='inline mr-2' />Quality Assurance</h4>
          <p className='text-sm'>ECX grading provides standardized quality metrics. When you order G1 Yirgacheffe washed, you know exactly what defect count and cup profile to expect.</p>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-2'><HiOutlineCheckCircle className='inline mr-2' />Legal Compliance</h4>
          <p className='text-sm'>ECX-registered exporters have proper licensing, export permits, and documentation. Reduces risk of shipment holds at customs.</p>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-2'><HiOutlineCheckCircle className='inline mr-2' />Price Transparency</h4>
          <p className='text-sm'>ECX pricing is market-driven and transparent. You can verify that you&apos;re paying fair market rates for the grade and origin you&apos;re purchasing.</p>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-2'><HiOutlineCheckCircle className='inline mr-2' />Documentation Ready</h4>
          <p className='text-sm'>ECX coffee comes with quality certificates, origin documentation, ICO certificates, and phytosanitary certificates required for import.</p>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-2'><HiOutlineCheckCircle className='inline mr-2' />Fraud Protection</h4>
          <p className='text-sm'>The ECX system prevents common fraud issues you&apos;re dealing with vetted, licensed exporters who must maintain their registration.</p>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-2'><HiOutlineCheckCircle className='inline mr-2' />Supply Chain Integrity</h4>
          <p className='text-sm'>Coffee handled through ECX maintains chain of custody documentation from origin to export, providing accountability at every stage.</p>
        </div>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Common Misconceptions About the ECX
      </h3>
      
      <div className='space-y-4 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2'><HiOutlineXCircle className='inline mr-2' />Myth: "ECX coffee has no traceability"</h4>
          <p className='text-sm'><span className='font-bold'>Reality:</span> While early ECX systems limited traceability, reforms now allow much better origin documentation, especially for specialty lots. DSL (Direct Specialty License) provides full farm-level traceability outside ECX auction.</p>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2'><HiOutlineXCircle className='inline mr-2' />Myth: "All Ethiopian coffee must go through ECX"</h4>
          <p className='text-sm'><span className='font-bold'>Reality:</span> Specialty coffee scoring 85+ can be exported via DSL with direct cooperative/farm sourcing. Estate-grown coffee from private farms can also bypass ECX. However, most commercial-volume coffee does go through ECX.</p>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2'><HiOutlineXCircle className='inline mr-2' />Myth: "ECX grades are all that matters for quality"</h4>
          <p className='text-sm'><span className='font-bold'>Reality:</span> ECX grades (G1/G2/G3) measure defect count, not cup quality. A G2 with 86+ cupping score is better than a G1 with 83 score. Always ask for cupping reports, not just grade.</p>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2'><HiOutlineXCircle className='inline mr-2' />Myth: "ECX adds cost without value"</h4>
          <p className='text-sm'><span className='font-bold'>Reality:</span> ECX fees are modest (typically &lt;1% of transaction value). The quality assurance, documentation, payment clearing, and legal framework provide significant value that reduces risk and simplifies international trade.</p>
        </div>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        How to Choose an ECX-Registered Ethiopian Coffee Exporter
      </h3>
      <p className='my-4'>
        Not all ECX-registered exporters are created equal. When evaluating potential suppliers, look for:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Responsive communication:</span> Can they answer emails promptly? Do they understand international buyer needs?</li>
        <li><span className='font-bold'>Transparent documentation:</span> Are they willing to share quality reports, cupping scores, and origin details?</li>
        <li><span className='font-bold'>Sample programs:</span> Do they offer sample sets so you can taste before committing to containers?</li>
        <li><span className='font-bold'>Export experience:</span> How long have they been exporting? Do they have references from other importers?</li>
        <li><span className='font-bold'>Logistics capability:</span> Can they handle FOB Djibouti? Do they work with freight forwarders?</li>
        <li><span className='font-bold'>Traceability options:</span> Do they offer both ECX and DSL sourcing? Can they provide washing station/cooperative details?</li>
        <li><span className='font-bold'>Quality consistency:</span> Can they supply the same profiles year after year for your blends?</li>
      </ul>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium'><span className='font-bold'>Red Flags to Watch For:</span> Exporters who can&apos;t provide ECX registration documentation, refuse to share cupping reports, have no sample program, or offer prices significantly below market rates. If it seems too good to be true, it probably is.</p>
      </div>

      <p className='my-4'>
        For a comprehensive evaluation framework covering all types of Ethiopian coffee exporters (not just ECX-registered), including a 10-point scorecard and due diligence steps for first-time buyers, read our <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='underline font-bold'>guide to choosing an Ethiopian coffee export company</Link>.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        The Future of ECX and Ethiopian Coffee Export
      </h3>
      <p className='my-4'>
        The ECX continues to evolve. Recent and upcoming reforms include:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Enhanced digital platform:</span> Improved electronic trading, better data access for buyers</li>
        <li><span className='font-bold'>Greater traceability options:</span> Expanding ability to maintain origin identity through the system</li>
        <li><span className='font-bold'>Direct trade expansion:</span> Liberalizing DSL requirements to allow more direct farm-to-exporter relationships</li>
        <li><span className='font-bold'>Regional warehouses:</span> Expanding storage facilities closer to producing areas for faster processing</li>
        <li><span className='font-bold'>Quality lab improvements:</span> Investing in better cupping facilities and trained Q-graders</li>
      </ul>

      <p className='my-4'>
        For international buyers, these reforms mean better access to traceable, high-quality Ethiopian coffee while maintaining the quality assurance and legal framework the ECX provides.
      </p>

      {/* FAQ SECTION */}
      <section className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions About the Ethiopia Commodity Exchange and Coffee Export</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What is the Ethiopia Commodity Exchange (ECX)?</h4>
            <p className="text-sm text-gray-600">The ECX is Ethiopia's central marketplace for trading agricultural commodities, including coffee. It provides a regulated platform with standardized grading, quality testing, warehousing, and price discovery that all Ethiopian coffee must pass through before export, unless the exporter holds a Direct Specialty License.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How does the ECX coffee grading system work?</h4>
            <p className="text-sm text-gray-600">ECX grades Ethiopian coffee from G1 (highest quality, fewest defects) to G5 (lowest export quality). Grading is based on physical defect counts per 300g sample combined with cupping evaluation. G1 and G2 are considered specialty grade, while G3 through G5 are commercial grade.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What is a Direct Specialty License (DSL) in Ethiopian coffee export?</h4>
            <p className="text-sm text-gray-600">A DSL allows licensed Ethiopian exporters to purchase specialty-grade coffee directly from cooperatives or washing stations, bypassing the ECX auction. This preserves full traceability from farm to export and enables buyers to source single-origin, lot-specific Ethiopian coffees.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Can international buyers purchase coffee directly through the ECX?</h4>
            <p className="text-sm text-gray-600">No. International buyers cannot trade directly on the ECX. They must work with licensed Ethiopian coffee exporters who purchase coffee through the ECX or via DSL channels and then handle export documentation, shipping, and quality verification on behalf of foreign buyers.</p>
          </div>
        </div>
      </section>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Ready to Source Ethiopian Coffee from an ECX-Registered Exporter?</h4>
        <p className='my-2'>
          At <span className='font-bold'>Ethio Coffee Import and Export PLC</span>, we&apos;re ECX-registered and licensed to export Ethiopian green coffee to importers worldwide. From Grade 1 Yirgacheffe to natural processed Sidamo, we offer full traceability, professional export documentation, quality reports, and the responsive communication international buyers need.
        </p>
        <p className='my-2'>
          For first-time sourcing buyers and those seeking a more reliable Ethiopian supplier, we understand the ECX system inside and out and we make the export process transparent and hassle-free.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>
            View Our Offerings
          </Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            Contact Us
          </Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            How to Order
          </Link>
        </div>
      </div>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Import Guides</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/how-to-import-ethiopian-coffee-to-usa' className='text-amber-700 hover:underline'>How to Import Ethiopian Coffee to USA</Link></li>
              <li>• <Link href='/insights/importing-ethiopian-coffee-to-uk' className='text-amber-700 hover:underline'>Importing to UK</Link></li>
              <li>• <Link href='/insights/importing-ethiopian-coffee-to-germany' className='text-amber-700 hover:underline'>Importing to Germany</Link></li>
              <li>• <Link href='/insights/importing-ethiopian-coffee-to-saudi-arabia' className='text-amber-700 hover:underline'>Importing to Saudi Arabia</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Trade & Quality</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/ethiopian-coffee-exporter' className='text-amber-700 hover:underline'>Ethiopian Coffee Exporter</Link></li>
              <li>• <Link href='/insights/top-ethiopian-coffee-importers-buyers-2024-2025' className='text-amber-700 hover:underline'>Top Ethiopian Coffee Importers 2024/2025</Link></li>
              <li>• <Link href='/insights/ethiopian-dry-coffee-production-quality-control' className='text-amber-700 hover:underline'>Dry Coffee Quality Control</Link></li>
              <li>• <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Minimum Order Quantities (MOQ)</Link></li>
              <li>• <Link href='/insights/rising-ethiopian-coffee-prices-explained' className='text-amber-700 hover:underline'>Ethiopian Coffee Prices Explained</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Coffee Certifications Guide</Link></li>
              <li>• <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline'>Coffee Storage & Freight Logistics</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> This guide explains the Ethiopia Commodity Exchange (ECX) system, its role in Ethiopian coffee export, grading standards, traceability, and what international buyers need to know when sourcing from ECX-registered suppliers.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  );
}

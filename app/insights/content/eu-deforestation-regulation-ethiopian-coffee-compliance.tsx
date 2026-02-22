import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { 
  HiOutlineCalendarDays, 
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck,
  HiOutlineDocumentCheck,
  HiOutlineExclamationTriangle,
  HiOutlineCheckCircle,
  HiOutlineLightBulb,
  HiOutlineMapPin,
  HiOutlineClipboardDocumentList,
  HiOutlineArrowPath,
  HiOutlineCube
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EUDeforestationRegulationEthiopianCoffee({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Everything Ethiopian coffee exporters and importers need to know about the EU Deforestation Regulation (EUDR), compliance requirements, timeline, traceability systems, and how Ethiopia is preparing to meet the new standards for coffee exports to European markets.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Understanding EU deforestation regulations is critical for Ethiopian coffee exporters accessing European markets.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='EU deforestation regulation Ethiopian coffee compliance EUDR requirements'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Regulations & Compliance / EU Market / Coffee Export</span>
      </div>

      {/* INTRODUCTION */}
      <p className='my-4'>
        If you're exporting Ethiopian coffee to European Union countries-or planning to-you need to understand a critical new regulation that will fundamentally change how coffee exports to Europe work: the <a href="https://environment.ec.europa.eu/topics/forests/deforestation/regulation-deforestation-free-products_en" target="_blank" rel="noopener noreferrer" className='font-bold text-blue-600 underline'>EU Deforestation Regulation (EUDR)</a>.
      </p>

      <p className='my-4'>
        Effective December 30, 2024 (with enforcement beginning December 30, 2025 for large operators), the <a href="https://environment.ec.europa.eu/topics/forests/deforestation/regulation-deforestation-free-products_en" target="_blank" rel="noopener noreferrer" className='font-bold text-blue-600 underline'>EUDR</a> requires that all coffee entering EU markets must be <span className='font-bold'>deforestation-free</span> and produced in compliance with the laws of the country of origin. This means Ethiopian coffee exporters must prove-with documented evidence and geolocation data-that their coffee was not grown on land deforested after December 31, 2020.
      </p>

      <div className='bg-red-50 p-6 rounded-lg my-6 border border-red-200'>
        <p className='font-bold text-lg mb-3 text-red-900 flex items-center gap-2'>
          <HiOutlineExclamationTriangle className='text-2xl' />
          Critical Timeline Update
        </p>
        <p className='mb-3'>
          While the EUDR was originally scheduled for full enforcement in December 2024, the European Commission extended the implementation timeline by one year. The current enforcement dates are:
        </p>
        <ul className='space-y-2 text-sm'>
          <li><span className='font-bold'>December 30, 2025:</span> Large operators and traders must comply</li>
          <li><span className='font-bold'>June 30, 2026:</span> Small and micro enterprises must comply</li>
        </ul>
        <p className='text-sm mt-3 italic'>
          This extension provides Ethiopian coffee exporters additional time to establish traceability systems and gather required documentation. However, preparation should begin immediately as the process is complex and time-intensive.
        </p>
      </div>

      <p className='my-4'>
        For Ethiopian coffee exporters, importers, and roasters targeting EU markets, understanding and preparing for EUDR compliance is not optional-it's essential for maintaining access to one of the world's most important coffee markets.
      </p>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li>• Document every stage: farms → collectors → cooperatives → washing stations → <a href="https://en.wikipedia.org/wiki/Ethiopian_Commodity_Exchange" target="_blank" rel="noopener noreferrer" className='text-blue-600 underline'>ECX</a> → export</li>
          <li>• Dry Mill → <a href="https://en.wikipedia.org/wiki/Ethiopian_Commodity_Exchange" target="_blank" rel="noopener noreferrer" className='text-blue-600 underline'>ECX</a>/Warehouse (with ECX documentation)</li>
          <li>• <a href="https://en.wikipedia.org/wiki/Ethiopian_Commodity_Exchange" target="_blank" rel="noopener noreferrer" className='text-blue-600 underline'>ECX</a>/Warehouse → Exporter (with purchase contracts)</li>
          <li><a href="#why-matters" className='text-blue-600 hover:underline'>2. Why This Matters for Ethiopian Coffee</a></li>
          <li><a href="#key-requirements" className='text-blue-600 hover:underline'>3. Key Requirements: What Coffee Exporters Must Prove</a></li>
          <li><a href="#timeline" className='text-blue-600 hover:underline'>4. EUDR Timeline and Enforcement Dates</a></li>
          <li><a href="#ethiopia-preparation" className='text-blue-600 hover:underline'>5. How Ethiopia Is Preparing: National Database and Certification</a></li>
          <li><a href="#traceability-systems" className='text-blue-600 hover:underline'>6. Traceability Requirements: Geolocation and Documentation</a></li>
          <li><a href="#smallholder-challenges" className='text-blue-600 hover:underline'>7. Challenges for Ethiopian Smallholder Farmers</a></li>
          <li><a href="#due-diligence" className='text-blue-600 hover:underline'>8. Due Diligence Statements: What Operators Must Submit</a></li>
          <li><a href="#child-labor" className='text-blue-600 hover:underline'>9. Beyond Deforestation: Labor Rights and Social Compliance</a></li>
          <li><a href="#compliance-steps" className='text-blue-600 hover:underline'>10. Steps to Achieve EUDR Compliance</a></li>
          <li><a href="#risks-non-compliance" className='text-blue-600 hover:underline'>11. Risks of Non-Compliance</a></li>
          <li><a href="#opportunities" className='text-blue-600 hover:underline'>12. Opportunities: How Compliance Creates Competitive Advantage</a></li>
        </ol>
      </div>

      {/* SECTION 1: WHAT IS EUDR */}
      <h3 id="what-is-eudr" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineGlobeAlt className='text-amber-600' />
        1. What Is the EU Deforestation Regulation (EUDR)?
      </h3>

      <p className='my-4'>
        The <a href="https://environment.ec.europa.eu/topics/forests/deforestation/regulation-deforestation-free-products_en" target="_blank" rel="noopener noreferrer" className='font-bold text-blue-600 underline'>EU Deforestation Regulation</a> (<a href="https://eur-lex.europa.eu/eli/reg/2023/1115/oj/eng" target="_blank" rel="noopener noreferrer" className='text-blue-600 underline'>Regulation 2023/1115</a>) is a comprehensive European Union law designed to minimize the EU's contribution to global deforestation and forest degradation by ensuring that products placed on the EU market are deforestation-free.
      </p>

      <h4 className='text-xl font-bold mt-6 mb-3'>Regulated Products</h4>

      <p className='my-4'>
        The EUDR covers seven commodity categories considered high-risk for deforestation:
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-4'>
          <h5 className='font-bold mb-2'>Primary Commodities</h5>
          <ul className='space-y-1 text-sm'>
            <li>• <span className='font-bold'>Cattle</span> (beef, leather)</li>
            <li>• <span className='font-bold'>Cocoa</span></li>
            <li>• <span className='font-bold'>Coffee</span> (Relevant to Ethiopia)</li>
            <li>• <span className='font-bold'>Oil palm</span> (palm oil)</li>
            <li>• <span className='font-bold'>Rubber</span></li>
            <li>• <span className='font-bold'>Soya</span></li>
            <li>• <span className='font-bold'>Wood</span></li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-4'>
          <h5 className='font-bold mb-2'>Derived Products</h5>
          <ul className='space-y-1 text-sm'>
            <li>• Leather goods</li>
            <li>• Chocolate and cocoa products</li>
            <li>• <span className='font-bold'>Roasted coffee</span></li>
            <li>• Furniture</li>
            <li>• Printed paper</li>
            <li>• Palm oil products</li>
            <li>• Many others (total of over 100 product categories)</li>
          </ul>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-3'>Core Principles of EUDR</h4>

      <div className='space-y-4 my-6'>
        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-2 text-green-900'>Deforestation-Free Definition</h5>
          <p className='text-sm'>
            Products are considered "deforestation-free" if they were produced on land that has not been subject to deforestation after <span className='font-bold'>December 31, 2020</span> (the "cut-off date"). Deforestation is defined as the conversion of forest to agricultural or other non-forest use.
          </p>
        </div>

        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold mb-2 text-blue-900'>Legality Requirement</h5>
          <p className='text-sm'>
            Products must be produced in accordance with the relevant legislation of the country of production. For Ethiopian coffee, this means compliance with Ethiopian environmental laws, land use regulations, and coffee production standards.
          </p>
        </div>

        <div className='bg-purple-50 p-5 rounded-lg border border-purple-200'>
          <h5 className='font-bold mb-2 text-purple-900'>Due Diligence Obligation</h5>
          <p className='text-sm'>
            Operators (companies placing products on the EU market) must exercise due diligence, including collecting geolocation data, conducting risk assessments, and implementing risk mitigation measures.
          </p>
        </div>
      </div>

      {/* SECTION 2: WHY IT MATTERS */}
      <h3 id="why-matters" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineExclamationTriangle className='text-amber-600' />
        2. Why This Matters for Ethiopian Coffee
      </h3>

      <p className='my-4'>
        Ethiopia exports significant volumes of coffee to the European Union, making EU markets critically important for Ethiopian coffee producers, exporters, and the national economy.
      </p>

      <h4 className='text-xl font-bold mt-6 mb-3'>EU Market Significance for Ethiopian Coffee</h4>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold mb-3'>Key Statistics:</h4>
        <ul className='space-y-2 text-sm'>
          <li>• <span className='font-bold'>EU countries account for 30-40%</span> of Ethiopian coffee exports by volume</li>
          <li>• Germany is consistently Ethiopia's largest single coffee export destination</li>
          <li>• Other major EU markets include Belgium (Antwerp port hub), Italy, France, Netherlands, and Nordic countries</li>
          <li>• EU importers typically purchase <span className='font-bold'>specialty and premium-grade Ethiopian coffee</span>, commanding higher prices than commodity markets</li>
          <li>• Losing EU market access would devastate Ethiopian coffee exporters and farmers</li>
        </ul>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-3'>Why EUDR Presents Unique Challenges for Ethiopia</h4>

      <div className='space-y-4 my-6'>
        <div className='border-l-4 border-red-500 pl-4'>
          <h5 className='font-bold'>Smallholder Dominance</h5>
          <p className='text-sm text-gray-700'>Over 90% of Ethiopian coffee is produced by smallholder farmers, often on fragmented plots of less than 2 hectares. Gathering geolocation data and documentation from millions of small farms is monumentally complex.</p>
        </div>
        <div className='border-l-4 border-orange-500 pl-4'>
          <h5 className='font-bold'>Wild and Semi-Wild Coffee</h5>
          <p className='text-sm text-gray-700'>Much Ethiopian coffee grows in forest systems (wild coffee forests and shade-grown garden coffee). While this should support deforestation-free claims, documenting these systems requires sophisticated mapping.</p>
        </div>
        <div className='border-l-4 border-amber-500 pl-4'>
          <h5 className='font-bold'>Limited Digital Infrastructure</h5>
          <p className='text-sm text-gray-700'>Many coffee-growing areas have limited digital connectivity, making data collection and database management challenging.</p>
        </div>
        <div className='border-l-4 border-yellow-500 pl-4'>
          <h5 className='font-bold'>Complex Supply Chains</h5>
          <p className='text-sm text-gray-700'>Coffee passes through multiple intermediaries (farmers → collectors → cooperatives → washing stations → ECX → exporters), making traceability more difficult than direct farm-to-export models.</p>
        </div>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>The Stakes Are High:</span> Failure to achieve EUDR compliance doesn't just mean individual shipments being rejected-it means potentially losing access to the EU market entirely. For Ethiopian exporters, this would mean losing 30-40% of export revenue and the premium prices EU buyers pay for quality Ethiopian coffee.</span>
        </p>
      </div>

      {/* SECTION 3: KEY REQUIREMENTS */}
      <h3 id="key-requirements" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineDocumentCheck className='text-amber-600' />
        3. Key Requirements: What Coffee Exporters Must Prove
      </h3>

      <p className='my-4'>
        To export coffee to the EU under EUDR, operators must provide comprehensive evidence demonstrating compliance. Here's what's required:
      </p>

      <h4 className='text-xl font-bold mt-6 mb-3'>Core Evidence Requirements</h4>

      <div className='space-y-6 my-6'>
        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineMapPin className='text-amber-600' />
            1. Geolocation Coordinates
          </h5>
          <p className='mb-3 text-sm'>
            <span className='font-bold'>What's Required:</span> Precise geographical coordinates (latitude and longitude) for all plots of land where the coffee was produced.
          </p>
          <p className='mb-3 text-sm'>
            <span className='font-bold'>Precision Requirements:</span>
          </p>
          <ul className='space-y-2 text-sm ml-4'>
            <li>• For plots <span className='font-bold'>up to 4 hectares:</span> Single coordinate point (center of plot)</li>
            <li>• For plots <span className='font-bold'>larger than 4 hectares:</span> Polygon mapping showing boundaries of the plot</li>
            <li>• Coordinates must be provided with at least 6 decimal places for accuracy</li>
          </ul>
          <p className='text-sm mt-3'>
            <span className='font-bold'>Challenge for Ethiopia:</span> Most Ethiopian coffee farms are small (under 2 hectares), so single-point coordinates suffice. However, collecting GPS data from millions of small, remote farms requires massive coordination.
          </p>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineShieldCheck className='text-blue-600' />
            2. Deforestation-Free Assurance
          </h5>
          <p className='mb-3 text-sm'>
            <span className='font-bold'>What's Required:</span> Evidence that the land where coffee was grown has not been deforested since December 31, 2020.
          </p>
          <p className='mb-3 text-sm'>
            <span className='font-bold'>How to Prove:</span>
          </p>
          <ul className='space-y-2 text-sm ml-4'>
            <li>• <a href="https://www.copernicus.eu/en" target="_blank" rel="noopener noreferrer" className='text-blue-600 underline'>Satellite imagery</a> analysis showing land use before and after December 31, 2020</li>
            <li>• Historical land use documentation</li>
            <li>• Government or third-party certification confirming no deforestation</li>
            <li>• Farm registration data cross-referenced with forest monitoring systems</li>
          </ul>
          <p className='text-sm mt-3'>
            <span className='font-bold'>Ethiopia's Advantage:</span> Most Ethiopian coffee is grown in long-established farming areas or forest systems that predate the cutoff date, providing a natural compliance advantage-if properly documented.
          </p>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineDocumentCheck className='text-green-600' />
            3. Legality Compliance
          </h5>
          <p className='mb-3 text-sm'>
            <span className='font-bold'>What's Required:</span> Proof that coffee production complied with all relevant Ethiopian laws, including:
          </p>
          <ul className='space-y-2 text-sm ml-4'>
            <li>• Land use rights and land tenure regulations</li>
            <li>• Environmental protection laws</li>
            <li>• Agricultural production standards</li>
            <li>• Labor laws (including child labor prohibitions)</li>
            <li>• Tax and export regulations</li>
          </ul>
          <p className='text-sm mt-3'>
            <span className='font-bold'>Documentation Needed:</span> Land certificates, farming permits, cooperative registrations, tax compliance certificates, export licenses, etc.
          </p>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineCube className='text-purple-600' />
            4. Product Description and Quantity
          </h5>
          <p className='text-sm'>
            Detailed description of the coffee product, including quantity, species (Arabica), variety (Ethiopian heirloom), processing method (washed/natural), grade (G1, G2, etc.), and production date/harvest season.
          </p>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineArrowPath className='text-orange-600' />
            5. Supply Chain Traceability
          </h5>
          <p className='text-sm'>
            Complete documentation of the supply chain from farm to export, including all intermediaries (collectors, cooperatives, washing stations, traders, <a href="https://en.wikipedia.org/wiki/Ethiopian_Commodity_Exchange" target="_blank" rel="noopener noreferrer" className='text-blue-600 underline'>ECX</a> transactions, exporters). This ensures coffee can be traced back to specific farms/plots.
          </p>
        </div>
      </div>

      {/* SECTION 4: TIMELINE */}
      <h3 id="timeline" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCalendarDays className='text-amber-600' />
        4. EUDR Timeline and Enforcement Dates
      </h3>

      <p className='my-4'>
        Understanding the EUDR timeline is critical for planning compliance preparations.
      </p>

      <div className='bg-blue-50 p-6 rounded-lg my-6 border border-blue-200'>
        <h4 className='font-bold text-lg mb-4'>Key Dates:</h4>
        
        <div className='space-y-4'>
          <div className='flex gap-4'>
            <span className='font-bold text-blue-800 w-36 flex-shrink-0'>June 29, 2023</span>
            <span className='text-sm'>EUDR officially published and entered into force</span>
          </div>
          <div className='flex gap-4'>
            <span className='font-bold text-blue-800 w-36 flex-shrink-0'>Dec 31, 2020</span>
            <span className='text-sm'><span className='font-bold'>Cutoff date</span> for deforestation-free requirement (retroactive)</span>
          </div>
          <div className='flex gap-4'>
            <span className='font-bold text-blue-800 w-36 flex-shrink-0'>Dec 30, 2024</span>
            <span className='text-sm'>Original enforcement date (later extended)</span>
          </div>
          <div className='flex gap-4'>
            <span className='font-bold text-red-800 w-36 flex-shrink-0'>Dec 30, 2025</span>
            <span className='text-sm'><span className='font-bold'>Compliance mandatory for large operators and traders</span></span>
          </div>
          <div className='flex gap-4'>
            <span className='font-bold text-red-800 w-36 flex-shrink-0'>June 30, 2026</span>
            <span className='text-sm'><span className='font-bold'>Compliance mandatory for small and micro enterprises</span></span>
          </div>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-3'>What the Extension Means</h4>

      <p className='my-4'>
        The one-year extension from December 2024 to December 2025 (for large operators) provides crucial additional preparation time. However:
      </p>

      <div className='space-y-3 my-6'>
        <div className='bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500'>
          <p className='text-sm'><span className='font-bold'>Don't Wait:</span> The extension is not a reason to delay. Building comprehensive traceability systems, collecting geolocation data from thousands of farms, and establishing documentation processes takes many months.</p>
        </div>
        <div className='bg-green-50 p-4 rounded-lg border-l-4 border-green-500'>
          <p className='text-sm'><span className='font-bold'>Early Compliance = Competitive Advantage:</span> Exporters who achieve compliance early will have preferential access to EU buyers who need guaranteed EUDR-compliant coffee.</p>
        </div>
        <div className='bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500'>
          <p className='text-sm'><span className='font-bold'>Test and Refine:</span> Use the extension period to test your compliance systems with actual shipments, identify gaps, and refine processes before the hard deadline.</p>
        </div>
      </div>

      {/* SECTION 5: ETHIOPIA'S PREPARATION */}
      <h3 id="ethiopia-preparation" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineShieldCheck className='text-amber-600' />
        5. How Ethiopia Is Preparing: National Database and Certification
      </h3>

        <p className='my-4'>
        The Ethiopian government, through the <a href="https://en.wikipedia.org/wiki/Coffee_production_in_Ethiopia" target="_blank" rel="noopener noreferrer" className='font-bold text-blue-600 underline'>Ethiopian Coffee, Tea and Spice Authority</a>, is actively working to prepare the country's coffee sector for EUDR compliance.
      </p>

      <h4 className='text-xl font-bold mt-6 mb-3'>National Coffee Database Initiative</h4>

      <p className='my-4'>
        According to Tegay Nuru, Deputy Director General and Development Sector Head of the Ethiopian Coffee, Tea and Spice Authority, Ethiopia is undertaking a massive project to:
      </p>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <h4 className='font-bold mb-4'>Database Objectives:</h4>
        <ul className='space-y-3 text-sm'>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 flex-shrink-0 mt-0.5' />
            <span><span className='font-bold'>Register every coffee farm:</span> Entering all coffee-producing land into a centralized database</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 flex-shrink-0 mt-0.5' />
            <span><span className='font-bold'>Collect geolocation data:</span> GPS coordinates for each registered farm plot</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 flex-shrink-0 mt-0.5' />
            <span><span className='font-bold'>Document land tenure:</span> Linking farms to legal land certificates and farmer identification</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 flex-shrink-0 mt-0.5' />
            <span><span className='font-bold'>Verify deforestation-free status:</span> Cross-referencing farm locations with satellite imagery and forest monitoring data</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 flex-shrink-0 mt-0.5' />
            <span><span className='font-bold'>Issue certificates:</span> Providing official documentation that coffee from registered farms is deforestation-free</span>
          </li>
        </ul>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-3'>Challenges in Database Development</h4>

      <p className='my-4'>
        The Authority acknowledges significant challenges:
      </p>

      <div className='space-y-4 my-6'>
        <div className='border-l-4 border-orange-500 pl-4'>
          <h5 className='font-bold'>Scale and Fragmentation</h5>
          <p className='text-sm text-gray-700'>With over 5 million smallholder coffee farming households and millions of small, fragmented plots, the data collection task is enormous. Many farmers own multiple non-contiguous plots, each requiring separate geolocation data.</p>
        </div>
        <div className='border-l-4 border-red-500 pl-4'>
          <h5 className='font-bold'>Remote Access</h5>
          <p className='text-sm text-gray-700'>Coffee farms are spread across mountainous, remote areas with limited road access. Physically reaching every farm to collect GPS data requires substantial resources and time.</p>
        </div>
        <div className='border-l-4 border-amber-500 pl-4'>
          <h5 className='font-bold'>Farmer Awareness and Cooperation</h5>
          <p className='text-sm text-gray-700'>Many farmers are not aware of EUDR requirements or why providing geolocation data is necessary. Building awareness and ensuring cooperation across millions of farmers is a massive extension challenge.</p>
        </div>
        <div className='border-l-4 border-yellow-500 pl-4'>
          <h5 className='font-bold'>Data Management Capacity</h5>
          <p className='text-sm text-gray-700'>Managing a database with millions of farm records, GPS coordinates, and associated documentation requires sophisticated IT infrastructure and technical capacity.</p>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-3'>Progress and Timeline</h4>

      <p className='my-4'>
        The Ethiopian Coffee Authority aims to have the national database operational and issuing deforestation-free certificates by the EUDR enforcement deadline. However, the complexity means:
      </p>

      <ul className='space-y-2 my-6 list-disc ml-6 text-sm'>
        <li>Database development is ongoing and will likely be phased, prioritizing major export regions (Yirgacheffe, Sidamo, Guji, etc.) first</li>
        <li>Exporters may need to work with cooperatives and farmers to collect their own geolocation data rather than waiting for complete national coverage</li>
        <li>Early-adopter regions and cooperatives that complete registration first will have market advantages</li>
      </ul>

      {/* SECTION 6: TRACEABILITY SYSTEMS */}
      <h3 id="traceability-systems" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineMapPin className='text-amber-600' />
        6. Traceability Requirements: Geolocation and Documentation
      </h3>

      <p className='my-4'>
        Achieving EUDR compliance requires robust <span className='font-bold'>traceability systems</span> that track coffee from specific farms through the entire supply chain to export. For a comprehensive breakdown of traceability levels, documentation standards, and verification methods, see our <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-blue-600 underline font-bold'>Ethiopian coffee traceability guide for buyers</Link>.
      </p>

      <h4 className='text-xl font-bold mt-6 mb-3'>Building an Effective Traceability System</h4>

      <div className='space-y-6 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold mb-3'>Step 1: Farm Registration and GPS Mapping</h5>
          <p className='text-sm mb-3'>Every coffee farm in your supply chain must be registered with:</p>
          <ul className='space-y-1 text-sm ml-4'>
            <li>• Farmer identification (name, ID number, contact information)</li>
            <li>• GPS coordinates of farm plot(s)</li>
            <li>• Farm size (hectares)</li>
            <li>• Land tenure documentation (land certificate, rental agreement, etc.)</li>
            <li>• Photos of the farm</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold mb-3'>Step 2: Harvest and Production Documentation</h5>
          <p className='text-sm mb-3'>For each harvest season, document:</p>
          <ul className='space-y-1 text-sm ml-4'>
            <li>• Quantity of coffee cherries harvested from each farm</li>
            <li>• Harvest dates</li>
            <li>• Processing method (washed, natural, honey)</li>
            <li>• Processing location (washing station name/location)</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold mb-3'>Step 3: Supply Chain Tracking</h5>
          <p className='text-sm mb-3'>Track coffee movement through each stage:</p>
          <ul className='space-y-1 text-sm ml-4'>
            <li>• Farm → Collector/Cooperative (with farmer delivery receipts)</li>
            <li>• Cooperative → Washing Station (with batch tracking)</li>
            <li>• Washing Station → Dry Mill (with lot numbers)</li>
            <li>• Dry Mill → ECX/Warehouse (with ECX documentation)</li>
            <li>• ECX/Warehouse → Exporter (with purchase contracts)</li>
            <li>• Exporter → Container (with packing lists)</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold mb-3'>Step 4: Digital Systems Integration</h5>
          <p className='text-sm mb-3'>Modern traceability requires digital tools:</p>
          <ul className='space-y-1 text-sm ml-4'>
            <li>• Mobile apps for field data collection (GPS coordinates, farmer data)</li>
            <li>• Database systems for storing and managing traceability data</li>
            <li>• <a href="https://en.wikipedia.org/wiki/Blockchain" target="_blank" rel="noopener noreferrer" className='text-blue-600 underline'>Blockchain</a> or similar technologies for immutable supply chain records (optional but increasingly common)</li>
            <li>• Integration with Ethiopia's national coffee database (once available)</li>
          </ul>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-3'>Practical Tools for Geolocation Data Collection</h4>

      <div className='bg-blue-50 p-6 rounded-lg my-6 border border-blue-200'>
        <p className='font-bold mb-3'>Options for Collecting GPS Coordinates:</p>
        <div className='space-y-3 text-sm'>
          <div>
            <p className='font-semibold'>1. Smartphone Apps</p>
            <p>Free or low-cost apps (GPS Test, GPS Coordinates, What3Words) can capture coordinates. Cooperatives can equip extension officers with smartphones to visit farms and record GPS data.</p>
          </div>
          <div>
            <p className='font-semibold'>2. Dedicated GPS Devices</p>
            <p>Handheld GPS units (Garmin, Magellan) provide more accuracy in areas with poor mobile coverage. More expensive but suitable for systematic data collection campaigns.</p>
          </div>
          <div>
            <p className='font-semibold'>3. Satellite Imagery and Remote Sensing</p>
            <p>For larger farms or difficult-to-access areas, satellite imagery analysis can identify farm boundaries and generate polygon coordinates without physical visits. However, this requires technical expertise and software.</p>
          </div>
          <div>
            <p className='font-semibold'>4. Specialized Traceability Platforms</p>
            <p>Commercial platforms (<a href="https://farmerconnect.org" target="_blank" rel="noopener noreferrer" className='text-blue-600 underline'>Farmer Connect</a>, <a href="https://openforis.org" target="_blank" rel="noopener noreferrer" className='text-blue-600 underline'>Open Foris</a>, <a href="https://www.transparencyone.com" target="_blank" rel="noopener noreferrer" className='text-blue-600 underline'>Transparency-One</a>) offer end-to-end traceability solutions including GPS collection, but come with subscription costs.</p>
          </div>
        </div>
      </div>

      {/* SECTION 7: SMALLHOLDER CHALLENGES */}
      <h3 id="smallholder-challenges" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineExclamationTriangle className='text-amber-600' />
        7. Challenges for Ethiopian Smallholder Farmers
      </h3>

      <p className='my-4'>
        While EUDR aims to protect forests, its requirements create significant challenges for smallholder farmers who produce over 90% of Ethiopian coffee.
      </p>

      <h4 className='text-xl font-bold mt-6 mb-3'>Key Challenges</h4>

      <div className='space-y-4 my-6'>
        <div className='bg-red-50 p-5 rounded-lg border border-red-200'>
          <h5 className='font-bold mb-2 text-red-900'>Limited Awareness and Understanding</h5>
          <p className='text-sm'>Many smallholder farmers are unaware of EUDR or why they need to provide GPS coordinates and documentation. Language barriers (regulations in English, farmers speak local languages) complicate education efforts.</p>
        </div>

        <div className='bg-orange-50 p-5 rounded-lg border border-orange-200'>
          <h5 className='font-bold mb-2 text-orange-900'>Documentation Gaps</h5>
          <p className='text-sm'>Some farmers lack formal land certificates or have unclear land tenure, especially for inherited land. Without proper documentation, proving legal production becomes difficult.</p>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold mb-2 text-amber-900'>Technology Access</h5>
          <p className='text-sm'>Many farming areas lack mobile coverage or internet access. Farmers themselves rarely have smartphones or GPS devices to self-report coordinates.</p>
        </div>

        <div className='bg-yellow-50 p-5 rounded-lg border border-yellow-200'>
          <h5 className='font-bold mb-2 text-yellow-900'>Cost Burden</h5>
          <p className='text-sm'>Compliance costs (GPS mapping, documentation, certification) are typically borne by exporters, cooperatives, or government-not individual farmers. However, farmers may face opportunity costs (time spent on data collection instead of farm work).</p>
        </div>

        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-2 text-green-900'>Risk of Exclusion</h5>
          <p className='text-sm'>Farmers who cannot provide required documentation or whose farms aren't registered in databases risk being excluded from EU-bound supply chains, potentially losing access to premium prices.</p>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-3'>Support Mechanisms Needed</h4>

      <p className='my-4'>
        Addressing these challenges requires coordinated support:
      </p>

      <ul className='space-y-2 my-6 list-disc ml-6 text-sm'>
        <li><span className='font-bold'>Government Extension Services:</span> Agricultural extension agents conducting farmer education and GPS data collection campaigns</li>
        <li><span className='font-bold'>Cooperative Support:</span> Coffee cooperatives organizing data collection, maintaining member registries, and aggregating traceability documentation</li>
        <li><span className='font-bold'>Exporter Investment:</span> Exporters providing resources and technical assistance to origin communities in their supply chains</li>
        <li><span className='font-bold'>Development Partner Programs:</span> NGOs and development organizations supporting capacity building and compliance infrastructure</li>
      </ul>

      {/* SECTION 8: DUE DILIGENCE */}
      <h3 id="due-diligence" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineDocumentCheck className='text-amber-600' />
        8. Due Diligence Statements: What Operators Must Submit
      </h3>

      <p className='my-4'>
        Under EUDR, <span className='font-bold'>"operators"</span> (companies placing products on the EU market for the first time) must submit <span className='font-bold'>Due Diligence Statements</span> through an EU Information System before products can enter the EU market.
      </p>

      <h4 className='text-xl font-bold mt-6 mb-3'>Who Is an "Operator"?</h4>

      <div className='bg-blue-50 p-6 rounded-lg my-6 border border-blue-200'>
        <p className='mb-3 text-sm'>For Ethiopian coffee exports to the EU, the operator is typically:</p>
        <ul className='space-y-2 text-sm'>
          <li>• <span className='font-bold'>EU-based importers</span> purchasing coffee from Ethiopian exporters and bringing it into the EU</li>
          <li>• <span className='font-bold'>EU-based roasters</span> importing green coffee directly from Ethiopia</li>
          <li>• In some cases, <span className='font-bold'>Ethiopian exporters</span> may be considered operators if they have EU subsidiaries or sell directly to EU consumers</li>
        </ul>
        <p className='mt-3 text-sm italic'>Ethiopian exporters are not typically "operators" under EUDR, but they must provide all information and documentation that EU operators need to complete Due Diligence Statements.</p>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-3'>Due Diligence Statement Components</h4>

      <p className='my-4'>
        The Due Diligence Statement must include:
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse border border-gray-300 text-sm'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border border-gray-300 p-3 text-left'>Information Category</th>
              <th className='border border-gray-300 p-3 text-left'>Required Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Product Description</td>
              <td className='border border-gray-300 p-3'>Coffee type, quantity, product code, harvest date</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Country of Production</td>
              <td className='border border-gray-300 p-3'>Ethiopia (and specific regions/farms)</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Geolocation Coordinates</td>
              <td className='border border-gray-300 p-3'>GPS coordinates of all production plots</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Deforestation-Free Evidence</td>
              <td className='border border-gray-300 p-3'>Documentation/certificates proving no deforestation after Dec 31, 2020</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Legality Evidence</td>
              <td className='border border-gray-300 p-3'>Proof of compliance with Ethiopian laws</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Supply Chain Information</td>
              <td className='border border-gray-300 p-3'>Names and addresses of all suppliers in the chain</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Risk Assessment Result</td>
              <td className='border border-gray-300 p-3'>Conclusion of operator's risk analysis (non-negligible/negligible risk)</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Risk Mitigation Measures</td>
              <td className='border border-gray-300 p-3'>If risk found, steps taken to mitigate it</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-3'>Ethiopian Exporter Role</h4>

      <p className='my-4'>
        While EU importers submit Due Diligence Statements, Ethiopian exporters must:
      </p>

      <ul className='space-y-2 my-6 list-disc ml-6'>
        <li>Provide complete, accurate traceability data and documentation to EU buyers</li>
        <li>Maintain records proving deforestation-free and legal production</li>
        <li>Be prepared for verification audits or additional information requests</li>
        <li>Work cooperatively with EU buyers to facilitate their due diligence process</li>
      </ul>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold mb-2'>Practical Implication:</p>
        <p className='text-sm'>
          Ethiopian exporters who can provide comprehensive, well-organized EUDR compliance documentation will be preferred suppliers for EU importers. Exporters unable to provide required evidence will lose EU market access, regardless of coffee quality.
        </p>
      </div>

      {/* SECTION 9: CHILD LABOR */}
      <h3 id="child-labor" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineShieldCheck className='text-amber-600' />
        9. Beyond Deforestation: Labor Rights and Social Compliance
      </h3>
      <p className='my-4'>
        While EUDR's primary focus is deforestation, the <span className='font-bold'>legality requirement</span> extends to all relevant laws-including labor laws. This means coffee must be produced without child labor or other labor rights violations.
      </p>

      <h4 className='text-xl font-bold mt-6 mb-3'>Labor Rights Requirements</h4>

      <p className='my-4'>
        Ethiopian coffee production must comply with:
      </p>

      <ul className='space-y-2 my-6 list-disc ml-6'>
        <li><span className='font-bold'>Ethiopian labor laws</span> prohibiting child labor (children under 14 cannot work; those 14-18 have restrictions)</li>
        <li><span className='font-bold'>International labor standards</span> (Ethiopia has ratified key ILO conventions)</li>
        <li><span className='font-bold'>Safe working conditions</span> and fair wages</li>
        <li><span className='font-bold'>Freedom of association</span> (workers' rights to organize)</li>
      </ul>

      <h4 className='text-xl font-bold mt-8 mb-3'>Ethiopian Government Response</h4>

      <p className='my-4'>
          The <a href="http://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1115" target="_blank" rel="noopener noreferrer" className='font-bold text-blue-600 underline'>EU Deforestation Regulation</a> (<a href="http://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1115" target="_blank" rel="noopener noreferrer" className='text-blue-600 underline'>Regulation 2023/1115</a>) is a comprehensive European Union law designed to minimize the EU's contribution to global deforestation and forest degradation by ensuring that products placed on the EU market are deforestation-free.
      </p>

      <div className='space-y-3 my-6'>
        <div className='bg-green-50 p-4 rounded-lg border-l-4 border-green-500'>
          <p className='text-sm'><span className='font-bold'>Document labor compliance:</span> Developing systems to prove coffee production is free from child labor and labor rights violations</p>
        </div>
        <div className='bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500'>
          <p className='text-sm'><span className='font-bold'>Strengthen enforcement:</span> Improving monitoring and enforcement of existing labor laws in coffee-producing areas</p>
        </div>
        <div className='bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500'>
          <p className='text-sm'><span className='font-bold'>Awareness programs:</span> Educating farmers and communities about child labor risks and alternatives</p>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-3'>Practical Considerations</h4>

      <p className='my-4'>
        Labor compliance verification in smallholder farming contexts presents challenges:
      </p>

      <div className='space-y-4 my-6'>
        <div className='border-l-4 border-amber-500 pl-4'>
          <h5 className='font-bold'>Family Farming Context</h5>
          <p className='text-sm text-gray-700'>Ethiopian coffee farming is often a family activity. Children helping parents with light tasks (picking cherries) may be culturally normal but must comply with age and hour restrictions under labor laws.</p>
        </div>
        <div className='border-l-4 border-orange-500 pl-4'>
          <h5 className='font-bold'>Verification Difficulty</h5>
          <p className='text-sm text-gray-700'>Verifying absence of child labor across thousands of small farms is difficult. Most verification relies on self-reporting, cooperative oversight, and occasional audits.</p>
        </div>
        <div className='border-l-4 border-green-500 pl-4'>
          <h5 className='font-bold'>Positive Development</h5>
          <p className='text-sm text-gray-700'>EUDR's labor requirements can drive positive social outcomes if implemented thoughtfully, improving working conditions and protecting vulnerable populations.</p>
        </div>
      </div>

      {/* SECTION 10: COMPLIANCE STEPS */}
      <h3 id="compliance-steps" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCheckCircle className='text-amber-600' />
        10. Steps to Achieve EUDR Compliance
      </h3>

      <p className='my-4'>
        For Ethiopian coffee exporters targeting EU markets, here's a practical roadmap to EUDR compliance:
      </p>

      <div className='space-y-6 my-6'>
        <div className='bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500'>
          <h4 className='font-bold text-lg mb-3'>Step 1: Assess Current State (Immediate)</h4>
          <ul className='space-y-2 text-sm'>
            <li>• Evaluate your current traceability systems and identify gaps</li>
            <li>• Determine which farms/cooperatives in your supply chain have GPS data and documentation</li>
            <li>• Identify EU buyers you work with and initiate discussions about EUDR requirements</li>
            <li>• Review your supply chain for any deforestation risks or compliance concerns</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg border-l-4 border-green-500'>
          <h4 className='font-bold text-lg mb-3'>Step 2: Map Your Supply Chain (1-3 months)</h4>
          <ul className='space-y-2 text-sm'>
            <li>• Document every stage: farms → collectors → cooperatives → washing stations → ECX → export</li>
            <li>• Create a database of all farmers/cooperatives you source from</li>
            <li>• Establish direct contact with cooperatives and key suppliers</li>
            <li>• Identify supply chain actors responsible for each stage of documentation</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500'>
          <h4 className='font-bold text-lg mb-3'>Step 3: Collect Geolocation Data (3-8 months)</h4>
          <ul className='space-y-2 text-sm'>
            <li>• Partner with cooperatives to organize GPS data collection from member farms</li>
            <li>• Equip field staff with smartphones or GPS devices</li>
            <li>• Systematically visit farms to record coordinates (or use satellite imagery)</li>
            <li>• Store GPS data securely in a database linked to farmer identities</li>
            <li>• Take geotagged photos of farms for visual verification</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg border-l-4 border-amber-500'>
          <h4 className='font-bold text-lg mb-3'>Step 4: Gather Supporting Documentation (Ongoing)</h4>
          <ul className='space-y-2 text-sm'>
            <li>• Collect land certificates or tenure documents from farmers</li>
            <li>• Obtain satellite imagery or forest monitoring data showing no deforestation since Dec 31, 2020</li>
            <li>• Compile legal compliance documents (licenses, permits, tax certificates, etc.)</li>
            <li>• Document labor compliance measures and cooperative labor policies</li>
            <li>• Maintain records of all coffee purchases, processing, and movements</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg border-l-4 border-red-500'>
          <h4 className='font-bold text-lg mb-3'>Step 5: Integrate with National System (As Available)</h4>
          <ul className='space-y-2 text-sm'>
            <li>• Register with Ethiopia's national coffee database once operational</li>
            <li>• Ensure your farm data aligns with government records</li>
            <li>• Obtain official deforestation-free certificates from Ethiopian authorities</li>
            <li>• Leverage government systems to simplify compliance verification</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg border-l-4 border-orange-500'>
          <h4 className='font-bold text-lg mb-3'>Step 6: Coordinate with EU Buyers (6+ months before enforcement)</h4>
          <ul className='space-y-2 text-sm'>
            <li>• Share your EUDR compliance documentation with EU importers</li>
            <li>• Understand their specific due diligence requirements</li>
            <li>• Conduct trial runs: submit compliance data for test shipments</li>
            <li>• Address any gaps or additional information requests</li>
            <li>• Establish ongoing communication protocols for compliance updates</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg border-l-4 border-teal-500'>
          <h4 className='font-bold text-lg mb-3'>Step 7: Continuous Improvement (Ongoing)</h4>
          <ul className='space-y-2 text-sm'>
            <li>• Update geolocation data for new farms entering your supply chain</li>
            <li>• Maintain documentation for each harvest season</li>
            <li>• Monitor regulatory developments and EUDR implementation guidance</li>
            <li>• Invest in digital traceability tools to streamline compliance</li>
            <li>• Share lessons learned and best practices with other Ethiopian exporters</li>
          </ul>
        </div>
      </div>

      {/* SECTION 11: RISKS */}
      <h3 id="risks-non-compliance" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineExclamationTriangle className='text-red-600' />
        11. Risks of Non-Compliance
      </h3>

      <p className='my-4'>
        Failure to comply with EUDR carries serious consequences for all actors in the coffee supply chain.
      </p>

      <h4 className='text-xl font-bold mt-6 mb-3'>Penalties for Operators</h4>

      <div className='bg-red-50 p-6 rounded-lg my-6 border border-red-200'>
        <p className='font-bold mb-3 text-red-900'>EU operators found non-compliant face:</p>
        <ul className='space-y-2 text-sm'>
          <li>• <span className='font-bold'>Fines up to 4% of total annual EU turnover</span></li>
          <li>• <span className='font-bold'>Confiscation of products</span> (coffee shipments seized at border)</li>
          <li>• <span className='font-bold'>Exclusion from public procurement</span> (government contracts)</li>
          <li>• <span className='font-bold'>Temporary ban on placing relevant commodities on EU market</span></li>
          <li>• <span className='font-bold'>Reputational damage and loss of business</span></li>
        </ul>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-3'>Implications for Ethiopian Exporters</h4>

      <p className='my-4'>
        While EUDR penalties target EU operators, Ethiopian exporters face indirect but severe consequences:
      </p>

      <div className='space-y-4 my-6'>
        <div className='border-l-4 border-red-500 pl-4'>
          <h5 className='font-bold'>Lost Market Access</h5>
          <p className='text-sm text-gray-700'>Exporters unable to provide EUDR-compliant documentation will be dropped by EU buyers. With EU representing 30-40% of Ethiopian coffee exports, this means massive revenue loss.</p>
        </div>
        <div className='border-l-4 border-orange-500 pl-4'>
          <h5 className='font-bold'>Price Penalties</h5>
          <p className='text-sm text-gray-700'>Non-compliant coffee must be diverted to non-EU markets, which typically pay lower prices than EU specialty buyers. This reduces profitability for exporters and farmers.</p>
        </div>
        <div className='border-l-4 border-amber-500 pl-4'>
          <h5 className='font-bold'>Shipment Rejection</h5>
          <p className='text-sm text-gray-700'>Coffee shipments arriving at EU ports without proper EUDR documentation will be rejected, creating financial losses from shipping costs, demurrage fees, and product deterioration.</p>
        </div>
        <div className='border-l-4 border-yellow-500 pl-4'>
          <h5 className='font-bold'>Reputational Damage</h5>
          <p className='text-sm text-gray-700'>Exporters known for non-compliance will struggle to attract any international buyers, not just EU buyers, as due diligence and compliance become industry standards.</p>
        </div>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'>
          <span className='font-bold'>The Bottom Line:</span> EUDR compliance is not optional for exporters serving EU markets. Non-compliance means losing access to premium prices and a major export destination. The investment in compliance systems pays for itself many times over through maintained market access.
        </p>
      </div>

      {/* SECTION 12: OPPORTUNITIES */}
      <h3 id="opportunities" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineLightBulb className='text-amber-600' />
        12. Opportunities: How Compliance Creates Competitive Advantage
      </h3>

      <p className='my-4'>
        While EUDR presents challenges, it also creates significant opportunities for Ethiopian coffee exporters who embrace compliance early and thoroughly.
      </p>

      <h4 className='text-xl font-bold mt-6 mb-3'>Competitive Advantages of Early Compliance</h4>

      <div className='space-y-4 my-6'>
        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-2 text-green-900'>Preferred Supplier Status</h5>
          <p className='text-sm'>EU importers need reliable, EUDR-compliant coffee sources. Exporters who achieve compliance early will become preferred suppliers, commanding better prices and larger contracts.</p>
        </div>

        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold mb-2 text-blue-900'>Market Differentiation</h5>
          <p className='text-sm'>EUDR compliance demonstrates professionalism, transparency, and commitment to sustainability-qualities that distinguish premium suppliers in competitive markets.</p>
        </div>

        <div className='bg-purple-50 p-5 rounded-lg border border-purple-200'>
          <h5 className='font-bold mb-2 text-purple-900'>Price Premiums</h5>
          <p className='text-sm'>As compliant coffee becomes scarce (initially), buyers may pay premiums for guaranteed EUDR-compliant coffee. This creates short-term price advantages for early movers.</p>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold mb-2 text-amber-900'>Long-Term Partnerships</h5>
          <p className='text-sm'>The effort required to establish traceability and compliance systems encourages longer-term, more stable buyer-supplier relationships rather than transactional spot trading.</p>
        </div>

        <div className='bg-teal-50 p-5 rounded-lg border border-teal-200'>
          <h5 className='font-bold mb-2 text-teal-900'>Global Market Access</h5>
          <p className='text-sm'>EUDR compliance systems also satisfy requirements emerging in other markets (US, Japan, Australia are developing similar regulations). Investment in EUDR compliance provides readiness for future global standards.</p>
        </div>

        <div className='bg-pink-50 p-5 rounded-lg border border-pink-200'>
          <h5 className='font-bold mb-2 text-pink-900'>Sustainability Leadership</h5>
          <p className='text-sm'>Demonstrating deforestation-free, legally produced, ethically sourced coffee aligns with growing consumer and corporate sustainability commitments, opening doors to premium specialty markets.</p>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-3'>Ethiopia's Natural Advantages</h4>

      <p className='my-4'>
        Ethiopia has inherent advantages that can make EUDR compliance easier than for some other origins:
      </p>

      <ul className='space-y-2 my-6 list-disc ml-6'>
        <li><span className='font-bold'>Established Coffee Landscapes:</span> Most Ethiopian coffee grows in long-standing farming areas, not recently deforested land, providing natural compliance with the Dec 31, 2020 cutoff</li>
        <li><span className='font-bold'>Forest Coffee Systems:</span> Ethiopia's wild coffee forests and shade-grown garden coffee represent inherently deforestation-free production models</li>
        <li><span className='font-bold'>Government Support:</span> The national database initiative and Coffee Authority involvement demonstrate institutional commitment to enabling compliance</li>
        <li><span className='font-bold'>Quality Reputation:</span> Ethiopian coffee's existing reputation for quality and distinctiveness provides a foundation for positioning as premium, sustainable, compliant coffee</li>
      </ul>

      {/* CONCLUSION & CTA */}
      <div className='bg-dark text-primary p-6 rounded-lg my-8'>
        <h4 className='font-bold text-xl mb-3'>
          Conclusion: EUDR Compliance Is Essential and Achievable
        </h4>
        <p className='mb-3'>
          The EU Deforestation Regulation represents a fundamental shift in international coffee trade. For Ethiopian coffee exporters, EUDR compliance is not just a regulatory checkbox-it's a strategic imperative that will determine market access, profitability, and competitiveness in the coming years.
        </p>
        <p className='mb-3'>
          While the requirements are substantial, they are achievable with proper planning, investment in traceability systems, and coordination across the supply chain. The one-year extension provides valuable time, but that time must be used proactively.
        </p>
        <p>
          Ethiopian exporters who embrace EUDR as an opportunity rather than just a burden will emerge as leaders in the global specialty coffee market, commanding premium prices and building lasting partnerships with quality-conscious EU buyers.
        </p>
      </div>

      {/* KEY TAKEAWAYS */}
      <h3 className='text-2xl font-extrabold mt-10 mb-4'>
        Key Takeaways
      </h3>
      <div className='my-6 space-y-3'>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>EUDR requires all coffee entering EU markets to be deforestation-free (land not deforested after Dec 31, 2020) and legally produced</p>
        </div>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>Enforcement begins December 30, 2025 for large operators; June 30, 2026 for small/micro enterprises-preparation must start immediately</p>
        </div>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>Core requirements include GPS coordinates of all production plots, deforestation-free evidence, legality documentation, and complete supply chain traceability</p>
        </div>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>Ethiopia is building a national coffee database to register farms and issue deforestation-free certificates-but exporters should not wait for completion</p>
        </div>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>Smallholder farmers (90%+ of Ethiopian production) face challenges in documentation, GPS data collection, and awareness-requiring coordinated support</p>
        </div>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>EU operators submit Due Diligence Statements; Ethiopian exporters must provide all supporting documentation to enable buyer compliance</p>
        </div>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>Legality requirements include labor rights compliance-Ethiopia is coordinating with Ministry of Labor to address child labor concerns</p>
        </div>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>Non-compliance risks include lost EU market access (30-40% of exports), shipment rejection, and reputational damage</p>
        </div>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>Early compliance creates competitive advantages: preferred supplier status, price premiums, long-term partnerships, and market differentiation</p>
        </div>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>Ethiopia has natural advantages (established coffee landscapes, forest coffee, government support) that can facilitate compliance if properly leveraged</p>
        </div>
      </div>

      {/* FAQ SECTION */}
      <section className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions About EUDR and Ethiopian Coffee Compliance</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">When does the EU Deforestation Regulation apply to Ethiopian coffee exports?</h4>
            <p className="text-sm text-gray-600">The EUDR enforcement begins December 30, 2025 for large operators and June 30, 2026 for small and micro enterprises. All coffee entering EU markets after these dates must be verified as deforestation-free.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What documents do Ethiopian coffee exporters need for EUDR compliance?</h4>
            <p className="text-sm text-gray-600">Exporters need GPS coordinates of production plots, deforestation-free evidence showing no land conversion after December 31, 2020, legality documentation, and full supply chain traceability records from farm to export.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Does Ethiopian coffee need GPS traceability for the EU Deforestation Regulation?</h4>
            <p className="text-sm text-gray-600">Yes. EUDR requires geolocation data (GPS coordinates) for all plots of land where coffee was produced. For plots larger than four hectares, polygon boundary coordinates are required.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How does EUDR compliance affect Ethiopian coffee prices?</h4>
            <p className="text-sm text-gray-600">EUDR compliance adds costs for traceability systems and documentation. However, compliant exporters can command premium prices from EU buyers who need verified, deforestation-free supply chains.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Can smallholder Ethiopian coffee farmers comply with EUDR requirements?</h4>
            <p className="text-sm text-gray-600">Yes, though it requires coordinated support. Over 90% of Ethiopian coffee comes from smallholders. Cooperatives and exporters are working to collect GPS data and documentation on behalf of individual farmers.</p>
          </div>
        </div>
      </section>

      {/* ETHIO COFFEE EXPORT CTA */}
      <div className='bg-gradient-to-br from-amber-900 to-amber-800 text-white p-8 rounded-lg my-8'>
        <h3 className='text-2xl font-extrabold mb-4'>
          EUDR-Compliant Ethiopian Coffee From Ethio Coffee Export
        </h3>
        <p className='mb-4'>
          <span className='font-bold'>Ethio Coffee Export PLC</span> is actively preparing for EUDR compliance across our supply chain. We're investing in traceability systems, collecting geolocation data, and working with our partner cooperatives to ensure our coffee meets all EU requirements.
        </p>
        <ul className='space-y-2 mb-6'>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-amber-300 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-bold'>GPS-mapped farms</span> with documented geolocation data</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-amber-300 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-bold'>Full supply chain traceability</span> from farm to export</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-amber-300 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-bold'>Deforestation-free verification</span> and supporting documentation</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-amber-300 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-bold'>Legal and labor compliance</span> documentation ready</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-amber-300 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-bold'>Partnership with EU importers</span> to facilitate Due Diligence Statements</span>
          </li>
        </ul>
        <div className='flex flex-wrap gap-4'>
          <Link 
            href="/contact-us" 
            className='bg-white text-amber-900 px-6 py-3 rounded-lg font-bold hover:bg-amber-100 transition-colors inline-block'
          >
            Inquire About EUDR-Ready Coffee
          </Link>
          <Link 
            href="/offerings" 
            className='border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors inline-block'
          >
            View Current Offerings
          </Link>
        </div>
      </div>

      {/* RELATED ARTICLES */}
      <h3 className='text-xl font-bold mb-4'>
        Related Articles
      </h3>
      
      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
          <h4 className='font-bold mb-2'>Export & Compliance Guides</h4>
          <ul className='space-y-1 text-sm'>
            <li>• <Link href="/ethiopian-coffee-exporter" className='text-blue-600 hover:underline'>Ethiopian Coffee Exporter</Link></li>
            <li>• <Link href="/insights/navigating-2026-ethiopian-specialty-coffee-exporters" className='text-blue-600 hover:underline'>Ethiopian Specialty Coffee Exporters 2026</Link></li>
            <li>• <Link href="/insights/importing-ethiopian-coffee-to-germany" className='text-blue-600 hover:underline'>Import Ethiopian Coffee to Germany/EU</Link></li>
            <li>• <Link href="/insights/importing-ethiopian-coffee-to-holland" className='text-blue-600 hover:underline'>Import Ethiopian Coffee to Netherlands</Link></li>
            <li>• <Link href="/insights/ecx-and-ethiopian-coffee-export" className='text-blue-600 hover:underline'>Understanding the Ethiopian ECX System</Link></li>
            <li>• <Link href="/insights/how-to-source-green-coffee-from-ethiopia" className='text-blue-600 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
          <h4 className='font-bold mb-2'>Quality & Sustainability</h4>
          <ul className='space-y-1 text-sm'>
            <li>• <Link href="/insights/green-coffee-quality-control-defects-grading" className='text-blue-600 hover:underline'>Green Coffee Quality Control & Grading</Link></li>
            <li>• <Link href="/insights/new-sca-coffee-value-assessment" className='text-blue-600 hover:underline'>New SCA Coffee Value Assessment</Link></li>
            <li>• <Link href="/insights/guide-ethiopian-coffee-origins" className='text-blue-600 hover:underline'>Guide to Ethiopian Coffee Origins</Link></li>
            <li>• <Link href="/insights/complete-guide-to-understanding-coffee" className='text-blue-600 hover:underline'>Complete Guide to Understanding Coffee</Link></li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-gray-200" />

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Questions About EUDR Compliance?</h4>
        <p className='my-2'>
          At <span className='font-bold'>Ethio Coffee Export PLC</span>, our team stays current on EU regulations and can provide guidance on compliance requirements for Ethiopian coffee exports to Europe.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Our Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Contact Us</Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>How to Order</Link>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> This guide was prepared by Ethio Coffee Export PLC based on official EU regulations, Ethiopian government communications, and industry analysis. EUDR regulations and implementation details may evolve; for the most current information, consult official EU sources.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

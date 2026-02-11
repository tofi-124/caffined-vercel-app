import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { 
  HiOutlineCalendarDays, 
  HiOutlineGlobeAlt, 
  HiOutlineCurrencyDollar, 
  HiOutlineShieldCheck, 
  HiOutlineDocumentText, 
  HiOutlineTruck, 
  HiOutlineCube, 
  HiOutlineCheckCircle, 
  HiOutlineExclamationTriangle, 
  HiOutlineBuildingOffice, 
  HiOutlineBeaker,
  HiOutlineClipboardDocumentList,
  HiOutlineMapPin,
  HiOutlineArrowTrendingUp,
  HiOutlineLightBulb,
  HiOutlineChartBarSquare,
  HiOutlineBuildingStorefront,
  HiOutlineUsers,
  HiOutlineStar,
  HiOutlineDevicePhoneMobile,
  HiOutlineClock,
  HiOutlineMagnifyingGlass
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function ImportingEthiopianCoffeeToSouthKorea({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Your comprehensive guide to importing specialty Ethiopian green coffee into South Korea: MFDS food safety compliance, Korea Customs procedures, shipping logistics through Busan and Incheon ports, and market entry strategies for one of Asia's fastest-growing specialty coffee markets.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          South Korea's specialty coffee boom makes it a prime market for Ethiopian coffee imports.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Importing Ethiopian coffee to South Korea - MFDS regulations Korea Customs procedures'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Import Guide / South Korea Market / Ethiopian Coffee Export</span>
      </div>

      {/* INTRODUCTION */}
      <p className='my-4'>
        South Korea has emerged as one of the world's most dynamic and rapidly growing specialty coffee markets. With the highest number of coffee shops per capita in the world (over 100,000 cafes for 52 million people), an exploding cafe culture, and consumers willing to pay premium prices for quality, Korea represents exceptional opportunity for <span className='font-bold'>Ethiopian specialty coffee</span>.
      </p>

      <p className='my-4'>
        Korean coffee consumption has grown 300% over the past decade, with specialty coffee commanding increasing market share. Seoul's trendy neighborhoods – Gangnam, Hongdae, Itaewon, Seongsu – are home to third-wave roasters and specialty cafes that compete with the world's best. Korean consumers, particularly millennials and Gen Z, view coffee as lifestyle and self-expression, driving demand for origin-specific, traceable, high-quality beans.
      </p>

      <p className='my-4'>
        Ethiopian coffee, with its distinctive floral and fruity profiles, aligns perfectly with Korean preferences for bright, complex, Instagram-worthy specialty coffee. However, entering the Korean market requires navigating <span className='font-bold'>Ministry of Food and Drug Safety (MFDS)</span> regulations, understanding Korean business culture, and working through Korea's sophisticated but specific import procedures.
      </p>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineGlobeAlt className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Key Insight:</span> South Korea offers zero import duty on coffee, world-class logistics infrastructure (Busan port is Asia's 6th busiest), and one of the world's fastest-growing specialty coffee markets. Success requires MFDS compliance, Korean language documentation, and understanding the unique dynamics of Korea's cafe-driven coffee culture.</span>
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href="#korean-market" className='text-amber-700 hover:underline'>1. Why Korean Coffee Importers Choose Ethiopian Coffee</a></li>
          <li><a href="#regulations" className='text-amber-700 hover:underline'>2. Understanding Korean Coffee Import Regulations</a></li>
          <li><a href="#mfds-requirements" className='text-amber-700 hover:underline'>3. MFDS (Ministry of Food and Drug Safety) Requirements</a></li>
          <li><a href="#customs-clearance" className='text-amber-700 hover:underline'>4. Korea Customs Service (KCS) Clearance Process</a></li>
          <li><a href="#duties-taxes" className='text-amber-700 hover:underline'>5. Import Duties, Taxes & VAT Structure</a></li>
          <li><a href="#documentation" className='text-amber-700 hover:underline'>6. Required Import Documentation</a></li>
          <li><a href="#shipping-logistics" className='text-amber-700 hover:underline'>7. Shipping Routes & Logistics (Busan, Incheon)</a></li>
          <li><a href="#cost-breakdown" className='text-amber-700 hover:underline'>8. Complete Cost Breakdown: FOB to Landed</a></li>
          <li><a href="#business-registration" className='text-amber-700 hover:underline'>9. Korean Business Registration for Importers</a></li>
          <li><a href="#market-insights" className='text-amber-700 hover:underline'>10. Korean Coffee Market Insights & Trends</a></li>
          <li><a href="#working-with-exporters" className='text-amber-700 hover:underline'>11. Working with Ethiopian Coffee Exporters</a></li>
          <li><a href="#success-tips" className='text-amber-700 hover:underline'>12. Tips for Success in the Korean Market</a></li>
        </ol>
      </div>

      {/* SECTION 1: KOREAN MARKET */}
      <h3 id="korean-market" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineArrowTrendingUp className='text-amber-600' />
        1. Why Korean Coffee Importers Choose Ethiopian Coffee
      </h3>

      <p className='my-4'>
        South Korea's coffee market has exploded, with specialty coffee leading growth. Ethiopian coffee has become increasingly popular among Korean roasters and consumers:
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>The Korean Coffee Boom</h4>

      <div className='bg-blue-50 p-6 rounded-lg my-6 border border-blue-200'>
        <h5 className='font-bold mb-3'>Korean Coffee Market Statistics</h5>
        <ul className='space-y-2 text-sm'>
          <li><HiOutlineChartBarSquare className='inline mr-2 text-blue-600' /> <span className='font-bold'>Market Size:</span> $8+ billion USD coffee market (2024-2026)</li>
          <li><HiOutlineCube className='inline mr-2 text-blue-600' /> <span className='font-bold'>Consumption:</span> 353 cups per capita annually (2nd highest globally after Finland)</li>
          <li><HiOutlineBuildingStorefront className='inline mr-2 text-blue-600' /> <span className='font-bold'>Cafe Density:</span> 100,000+ cafes nationwide (highest per capita globally)</li>
          <li><HiOutlineArrowTrendingUp className='inline mr-2 text-blue-600' /> <span className='font-bold'>Growth Rate:</span> Specialty coffee segment growing 15-20% annually</li>
          <li><HiOutlineUsers className='inline mr-2 text-blue-600' /> <span className='font-bold'>Demographics:</span> 52 million population, 85% urbanized, high disposable income</li>
          <li><HiOutlineCurrencyDollar className='inline mr-2 text-blue-600' /> <span className='font-bold'>Spending:</span> Average Korean spends $400-600 annually on coffee</li>
          <li><HiOutlineGlobeAlt className='inline mr-2 text-blue-600' /> <span className='font-bold'>Import Volume:</span> 150,000+ tons of green coffee annually (6th largest Asian importer)</li>
        </ul>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Why Ethiopian Coffee Resonates in Korea</h4>

      <div className='grid md:grid-cols-2 gap-6 my-8'>
        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-3'>Consumer Preferences</h5>
          <ul className='space-y-2 text-sm'>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> <span className='font-bold'>Bright, fruity profiles:</span> Korean consumers prefer lighter roasts with vibrant acidity – Ethiopian coffees excel</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> <span className='font-bold'>Floral notes:</span> Jasmine, bergamot, and tea-like qualities highly valued</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> <span className='font-bold'>Instagram culture:</span> Visually appealing specialty coffee drives social media engagement</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> <span className='font-bold'>Origin storytelling:</span> Ethiopia's "birthplace of coffee" narrative appeals to Korean consumers</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> <span className='font-bold'>Natural processing:</span> Fruit-forward natural Ethiopian coffees match Korean taste profiles</li>
          </ul>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold mb-3'>Business Drivers</h5>
          <ul className='space-y-2 text-sm'>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /> <span className='font-bold'>Differentiation:</span> Ethiopian coffee helps cafes stand out in crowded market</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /> <span className='font-bold'>Premium positioning:</span> Single-origin Ethiopian commands higher prices</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /> <span className='font-bold'>Competition trends:</span> Major Korean roasters (Fritz, Anthracite, Coffee Libre) feature Ethiopian origins</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /> <span className='font-bold'>Cafe culture:</span> Pour-over and hand-drip methods showcase Ethiopian complexity</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /> <span className='font-bold'>Retail packaging:</span> Ethiopian coffee sells well as premium retail product</li>
          </ul>
        </div>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'>
          <span className='font-bold'>Market Reality:</span> Korean specialty roasters and cafes increasingly source directly from origin countries, bypassing traditional Japanese or European importers. Ethiopian exporters who understand Korean market dynamics and provide proper documentation can access this lucrative market directly.
        </p>
      </div>

      {/* SECTION 2: REGULATIONS */}
      <h3 id="regulations" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineShieldCheck className='text-amber-600' />
        2. Understanding Korean Coffee Import Regulations
      </h3>

      <p className='my-4'>
        Coffee imports into South Korea are regulated by two primary government agencies:
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-8'>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold text-lg mb-3'><HiOutlineBuildingOffice className='inline mr-2' /> Ministry of Food and Drug Safety (MFDS)</h5>
          <p className='text-sm mb-2'>식품의약품안전처 (Sikpum Uiyakpum Anjeoncheо)</p>
          <p className='text-sm mb-3'><span className='font-bold'>Website:</span> <a href='https://www.mfds.go.kr/eng/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>mfds.go.kr/eng</a></p>
          <p className='text-sm mb-2'><span className='font-bold'>Responsibilities:</span></p>
          <ul className='text-xs space-y-1'>
            <li>• Food safety standards and compliance</li>
            <li>• Import food facility registration</li>
            <li>• Food import reporting (사전신고)</li>
            <li>• Pesticide residue testing</li>
            <li>• Mycotoxin (aflatoxin) inspection</li>
            <li>• Korean language labeling requirements</li>
          </ul>
        </div>

        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold text-lg mb-3'><HiOutlineBuildingOffice className='inline mr-2' /> Korea Customs Service (KCS)</h5>
          <p className='text-sm mb-2'>관세청 (Gwanse-cheong)</p>
          <p className='text-sm mb-3'><span className='font-bold'>Website:</span> <a href='https://www.customs.go.kr/english/' target='_blank' rel='noopener noreferrer' className='text-blue-700 hover:underline'>customs.go.kr/english</a></p>
          <p className='text-sm mb-2'><span className='font-bold'>Responsibilities:</span></p>
          <ul className='text-xs space-y-1'>
            <li>• Customs clearance and duty collection</li>
            <li>• Tariff classification (HS code verification)</li>
            <li>• UNI-PASS electronic customs system</li>
            <li>• Import declaration processing</li>
            <li>• VAT collection at border</li>
            <li>• Trade compliance enforcement</li>
          </ul>
        </div>
      </div>

      <p className='my-4'>
        Both agencies work in coordination, but their requirements are separate. Successful import requires compliance with <span className='font-bold'>both MFDS food safety standards AND Korea Customs trade regulations</span>.
      </p>

      {/* SECTION 3: MFDS REQUIREMENTS */}
      <h3 id="mfds-requirements" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBeaker className='text-amber-600' />
        3. MFDS (Ministry of Food and Drug Safety) Requirements
      </h3>

      <p className='my-4'>
        MFDS oversees food safety for all imported food products, including coffee. Here's what Ethiopian coffee importers must comply with:
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Step-by-Step MFDS Compliance</h4>

      <div className='space-y-6 my-8'>
        <div className='bg-green-50 p-6 rounded-lg border border-green-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <span className='bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm'>1</span>
            Import Food Business Registration (수입식품영업등록)
          </h5>
          <p className='text-sm mb-3'>Before importing any food (including coffee), your Korean business entity must be registered as a food importer:</p>
          <ul className='text-sm space-y-2'>
            <li>• <span className='font-bold'>Registration Type:</span> Import Food Sales Business (수입식품판매업)</li>
            <li>• <span className='font-bold'>Validity:</span> Must be renewed every 5 years</li>
            <li>• <span className='font-bold'>Application:</span> Through local MFDS district office</li>
            <li>• <span className='font-bold'>Processing Time:</span> 1-2 weeks</li>
            <li>• <span className='font-bold'>Cost:</span> ₩30,000-50,000 registration fee</li>
            <li>• <span className='font-bold'>Requirements:</span> Korean business registration (사업자등록증), facility information, safety management system</li>
          </ul>
        </div>

        <div className='bg-blue-50 p-6 rounded-lg border border-blue-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <span className='bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm'>2</span>
            Import Food Pre-Report (수입식품사전신고)
          </h5>
          <p className='text-sm mb-3'>Every shipment requires advance notification to MFDS before arrival:</p>
          <ul className='text-sm space-y-2'>
            <li>• <span className='font-bold'>System:</span> Import Food Information Management System (ИФIMS) - online portal</li>
            <li>• <span className='font-bold'>Timing:</span> Must be filed before cargo arrival (recommend 3-5 days prior)</li>
            <li>• <span className='font-bold'>Information Required:</span> Product details, exporter info, manufacturing country, quantity, intended use</li>
            <li>• <span className='font-bold'>Korean Language:</span> All product information must be in Korean</li>
            <li>• <span className='font-bold'>Document Upload:</span> Certificate of Origin, health certificate, invoice, packing list</li>
            <li>• <span className='font-bold'>Processing:</span> Usually approved within 1-2 business days if documentation is complete</li>
            <li>• <span className='font-bold'>Inspection Risk:</span> First-time importers or new exporters may be selected for physical inspection</li>
          </ul>
        </div>

        <div className='bg-amber-50 p-6 rounded-lg border border-amber-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <span className='bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm'>3</span>
            Safety Standards Compliance
          </h5>
          <p className='text-sm mb-3'>Ethiopian coffee must meet Korean food safety standards:</p>
          <ul className='text-sm space-y-2'>
            <li>• <span className='font-bold'>Aflatoxin Limits:</span> Maximum 10 ppb (parts per billion) total aflatoxins</li>
            <li>• <span className='font-bold'>Ochratoxin A:</span> Maximum 5 ppb for roasted coffee</li>
            <li>• <span className='font-bold'>Pesticide Residues:</span> Must not exceed Maximum Residue Limits (MRLs) established by MFDS</li>
            <li>• <span className='font-bold'>Heavy Metals:</span> Lead and cadmium within acceptable limits</li>
            <li>• <span className='font-bold'>Microbiological Standards:</span> Free from harmful pathogens</li>
            <li>• <span className='font-bold'>Foreign Matter:</span> Must meet cleanliness standards (stones, sticks, etc.)</li>
          </ul>
        </div>

        <div className='bg-purple-50 p-6 rounded-lg border border-purple-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <span className='bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm'>4</span>
            Physical Inspection (If Selected)
          </h5>
          <p className='text-sm mb-3'>MFDS may conduct physical inspection and laboratory testing:</p>
          <ul className='text-sm space-y-2'>
            <li>• <span className='font-bold'>Inspection Rate:</span> 3-5% of shipments randomly selected (higher for first-time importers)</li>
            <li>• <span className='font-bold'>Location:</span> Conducted at port of entry (Busan, Incheon)</li>
            <li>• <span className='font-bold'>Sample Collection:</span> Inspectors take representative samples</li>
            <li>• <span className='font-bold'>Testing:</span> Laboratory analysis for aflatoxins, pesticides, heavy metals (5-7 business days)</li>
            <li>• <span className='font-bold'>Cost:</span> Importer pays testing fees (₩200,000-500,000 depending on tests)</li>
            <li>• <span className='font-bold'>Release:</span> Cargo held until test results confirm compliance</li>
            <li>• <span className='font-bold'>Failure:</span> Non-compliant shipments are rejected, destroyed, or re-exported at importer's expense</li>
          </ul>
        </div>
      </div>

      <div className='bg-red-50 p-6 rounded-lg my-6 border border-red-200'>
        <p className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineExclamationTriangle className='text-red-600' />
          Critical: Korean Language Requirements
        </p>
        <p className='text-sm'>
          All MFDS documentation, including import reports, product descriptions, and labels must be in <span className='font-bold'>Korean language</span>. While bulk green coffee bags don't require retail Korean labels, the import documentation and database entries must be Korean. First-time importers should work with Korean customs brokers or freight forwarders who handle MFDS compliance.
        </p>
      </div>

      {/* SECTION 4: CUSTOMS CLEARANCE */}
      <h3 id="customs-clearance" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBuildingOffice className='text-amber-600' />
        4. Korea Customs Service (KCS) Clearance Process
      </h3>

      <p className='my-4'>
        After MFDS approval, cargo proceeds to customs clearance through Korea Customs Service:
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>UNI-PASS Electronic Customs System</h4>

      <div className='bg-blue-50 p-6 rounded-lg my-6 border border-blue-200'>
        <p className='text-sm mb-3'>
          Korea uses <span className='font-bold'>UNI-PASS</span> (Customs Clearance Uni-Network System) for all import/export declarations. The system is highly automated and efficient:
        </p>
        <ul className='space-y-2 text-sm'>
          <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /> <span className='font-bold'>Electronic Filing:</span> All customs declarations submitted online</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /> <span className='font-bold'>Real-Time Processing:</span> Most declarations processed within 1-2 hours</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /> <span className='font-bold'>Risk Assessment:</span> Automated system flags high-risk shipments for inspection</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /> <span className='font-bold'>Duty Payment:</span> Electronic payment through bank transfer</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /> <span className='font-bold'>Document Upload:</span> All supporting documents uploaded digitally</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /> <span className='font-bold'>Status Tracking:</span> Real-time tracking of clearance status</li>
        </ul>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Customs Clearance Requirements</h4>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <table className='w-full text-sm'>
          <thead>
            <tr className='border-b-2 border-gray-300'>
              <th className='text-left py-2 pr-4'>Requirement</th>
              <th className='text-left py-2'>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Import License</td>
              <td className='py-2'>Importer must be registered Korean business entity (법인 or 개인사업자)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>HS Code</td>
              <td className='py-2'>0901.11-0000 (Not decaffeinated, not roasted, not containing added substances) or 0901.12-0000 (Decaffeinated)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Import Duty</td>
              <td className='py-2'><span className='font-bold text-green-700'>0%</span> (zero duty on coffee under WTO/FTA agreements)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Value-Added Tax (VAT)</td>
              <td className='py-2'>10% on CIF value (recoverable for registered businesses)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Customs Clearance Fee</td>
              <td className='py-2'>₩50,000-150,000 (varies by broker)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Declaration Form</td>
              <td className='py-2'>Import Declaration (수입신고서) via UNI-PASS</td>
            </tr>
            <tr>
              <td className='py-2 font-bold'>Processing Time</td>
              <td className='py-2'>1-3 business days (if no inspection required)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'>
          <span className='font-bold'>Pro Tip:</span> Korea Customs Service offers an <span className='font-bold'>Authorized Economic Operator (AEO)</span> program for trusted importers. AEO certification provides expedited customs clearance, reduced inspection rates, and simplified procedures. Consider applying once you establish regular import operations.
        </p>
      </div>

      {/* SECTION 5: DUTIES & TAXES */}
      <h3 id="duties-taxes" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='text-amber-600' />
        5. Import Duties, Taxes & VAT Structure
      </h3>

      <p className='my-4'>
        South Korea offers favorable tax treatment for coffee imports:
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3'>Korean Coffee Import Tax Structure</h4>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='border-b-2 border-gray-300'>
              <th className='text-left py-2 pr-4'>Charge Type</th>
              <th className='text-left py-2 pr-4'>Rate</th>
              <th className='text-left py-2'>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Import Duty (관세)</td>
              <td className='py-2 text-green-700 font-bold'>0%</td>
              <td className='py-2 text-gray-600'>Zero duty on coffee (HS 0901) under WTO MFN rate</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Value-Added Tax (부가가치세)</td>
              <td className='py-2 font-bold'>10%</td>
              <td className='py-2 text-gray-600'>Applied on CIF value (fully recoverable for VAT-registered businesses)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Special Consumption Tax</td>
              <td className='py-2 text-green-700 font-bold'>0%</td>
              <td className='py-2 text-gray-600'>Not applicable to coffee</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Education Tax</td>
              <td className='py-2 text-green-700 font-bold'>0%</td>
              <td className='py-2 text-gray-600'>Not applicable to coffee</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 font-bold'>Customs Clearance Fee</td>
              <td className='py-2'>₩50,000-150,000</td>
              <td className='py-2 text-gray-600'>Broker service fee (negotiable)</td>
            </tr>
            <tr>
              <td className='py-2 font-bold'>Port Handling Charges</td>
              <td className='py-2'>₩200,000-400,000</td>
              <td className='py-2 text-gray-600'>THC, documentation, storage (varies by port and duration)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>VAT Recovery for Businesses</h4>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <p className='text-sm mb-3'>
          The 10% VAT paid at customs is <span className='font-bold'>fully recoverable</span> for VAT-registered Korean businesses:
        </p>
        <ul className='space-y-2 text-sm'>
          <li>✓ <span className='font-bold'>VAT Registration:</span> Required for businesses with annual sales over ₩48 million (voluntary registration available below this)</li>
          <li>✓ <span className='font-bold'>Input VAT Credit:</span> VAT paid on imports is claimed as input tax credit</li>
          <li>✓ <span className='font-bold'>Quarterly Filing:</span> VAT returns filed quarterly (January, April, July, October)</li>
          <li>✓ <span className='font-bold'>Refund Timeline:</span> Input VAT excess refunded within 30 days of filing</li>
          <li>✓ <span className='font-bold'>Documentation:</span> Keep customs clearance receipts showing VAT payment</li>
        </ul>
        <p className='text-xs mt-3 italic'>
          Result: For registered businesses, the 10% VAT is temporary cash flow impact, not a true cost.
        </p>
      </div>

      {/* SECTION 6: DOCUMENTATION */}
      <h3 id="documentation" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineDocumentText className='text-amber-600' />
        6. Required Import Documentation
      </h3>

      <p className='my-4'>
        Comprehensive documentation is critical for smooth customs clearance in Korea. Here's exactly what you need:
      </p>

      <div className='space-y-4 my-8'>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold mb-2'>📄 From Ethiopian Exporter</h5>
          <ul className='text-sm space-y-1'>
            <li>• <span className='font-bold'>Commercial Invoice:</span> Detailed invoice showing FOB value, coffee description, HS code</li>
            <li>• <span className='font-bold'>Packing List:</span> Detailed breakdown of bags, net/gross weight, container number</li>
            <li>• <span className='font-bold'>Certificate of Origin:</span> Ethiopian Chamber of Commerce or Ethiopian Coffee Authority</li>
            <li>• <span className='font-bold'>Health Certificate / Sanitary Certificate:</span> From Ethiopian Coffee Authority or Ministry of Health</li>
            <li>• <span className='font-bold'>Quality Certificate:</span> ECX grade certificate or cupping report</li>
            <li>• <span className='font-bold'>Fumigation Certificate (if required):</span> ISPM-15 treatment for wooden pallets</li>
            <li>• <span className='font-bold'>Non-GMO Declaration:</span> Statement that coffee contains no GMOs</li>
          </ul>
        </div>

        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold mb-2'>🚢 From Shipping Company/Freight Forwarder</h5>
          <ul className='text-sm space-y-1'>
            <li>• <span className='font-bold'>Bill of Lading (B/L):</span> Ocean B/L as proof of shipment and title</li>
            <li>• <span className='font-bold'>Arrival Notice:</span> Notification of vessel arrival and cargo details</li>
            <li>• <span className='font-bold'>Delivery Order:</span> Authorization to release cargo from terminal</li>
            <li>• <span className='font-bold'>Container Load Report:</span> Container condition and seal information</li>
          </ul>
        </div>

        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-2'>🇰🇷 Korean Documentation (Prepared by Importer/Broker)</h5>
          <ul className='text-sm space-y-1'>
            <li>• <span className='font-bold'>MFDS Pre-Report (사전신고):</span> Submitted via ИФIMS system</li>
            <li>• <span className='font-bold'>Import Declaration (수입신고서):</span> Filed via UNI-PASS system</li>
            <li>• <span className='font-bold'>Business Registration Certificate (사업자등록증):</span> Proof of importer legal status</li>
            <li>• <span className='font-bold'>Import Food Business Registration:</span> MFDS importer license</li>
            <li>• <span className='font-bold'>Korean Translation:</span> Key documents translated to Korean (done by broker)</li>
          </ul>
        </div>
      </div>

      <div className='bg-red-50 p-6 rounded-lg my-6 border border-red-200'>
        <p className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineExclamationTriangle className='text-red-600' />
          Common Documentation Mistakes to Avoid
        </p>
        <ul className='space-y-2 text-sm'>
          <li>✗ Certificate of Origin not matching the actual origin (Ethiopia)</li>
          <li>✗ HS code mismatch between invoice and declaration</li>
          <li>✗ Missing health certificate or outdated (must be recent)</li>
          <li>✗ Invoice value discrepancies between documents</li>
          <li>✗ Incomplete product description (specify green coffee, grade, processing method)</li>
          <li>✗ No Korean translation of critical fields</li>
        </ul>
      </div>

      {/* SECTION 7: SHIPPING LOGISTICS */}
      <h3 id="shipping-logistics" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineTruck className='text-amber-600' />
        7. Shipping Routes & Logistics (Busan, Incheon)
      </h3>

      <p className='my-4'>
        Ethiopian coffee reaches South Korea primarily through two major ports:
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-8'>
        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold text-lg mb-3'>🚢 Busan Port (부산항)</h5>
          <p className='text-sm mb-3'>Korea's largest port and primary gateway for coffee imports</p>
          <ul className='text-sm space-y-2'>
            <li>• <span className='font-bold'>Position:</span> 6th busiest container port globally</li>
            <li>• <span className='font-bold'>Coffee Volume:</span> Handles ~70% of Korea's coffee imports</li>
            <li>• <span className='font-bold'>Advantages:</span> Lower port fees, excellent container handling, proximity to roasters in Busan/Ulsan</li>
            <li>• <span className='font-bold'>Terminals:</span> Multiple container terminals (BICT, HJNC, PNIT)</li>
            <li>• <span className='font-bold'>Free Storage:</span> 5-10 days (varies by terminal)</li>
            <li>• <span className='font-bold'>Transit Time from Djibouti:</span> 18-22 days via Suez</li>
          </ul>
        </div>

        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold text-lg mb-3'>✈️ Incheon Port (인천항)</h5>
          <p className='text-sm mb-3'>Serves Seoul metropolitan area, second largest port</p>
          <ul className='text-sm space-y-2'>
            <li>• <span className='font-bold'>Position:</span> Gateway to Seoul/Gyeonggi region</li>
            <li>• <span className='font-bold'>Coffee Volume:</span> Handles ~25% of Korea's coffee imports</li>
            <li>• <span className='font-bold'>Advantages:</span> Proximity to Seoul specialty roasters, modern facilities</li>
            <li>• <span className='font-bold'>Free Storage:</span> 7-10 days</li>
            <li>• <span className='font-bold'>Transit Time from Djibouti:</span> 19-23 days via Suez</li>
            <li>• <span className='font-bold'>Note:</span> Slightly higher port fees than Busan</li>
          </ul>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Shipping Route: Ethiopia to South Korea</h4>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h5 className='font-bold mb-3'>Typical Shipping Route & Timeline</h5>
        <ol className='space-y-3 text-sm'>
          <li>
            <span className='font-bold'>1. Addis Ababa → Djibouti (Road/Rail):</span> 2-4 days
            <br/>
            <span className='text-xs text-gray-600'>Ethiopian coffee transported by truck or new Ethiopia-Djibouti railway to Port of Djibouti</span>
          </li>
          <li>
            <span className='font-bold'>2. Port of Djibouti → Suez Canal:</span> 5-7 days
            <br/>
            <span className='text-xs text-gray-600'>Red Sea route through Bab-el-Mandeb strait</span>
          </li>
          <li>
            <span className='font-bold'>3. Suez Canal Transit:</span> 1 day
            <br/>
            <span className='text-xs text-gray-600'>Through Egypt's Suez Canal into Mediterranean/Red Sea</span>
          </li>
          <li>
            <span className='font-bold'>4. Mediterranean/Indian Ocean → East Asia:</span> 10-12 days
            <br/>
            <span className='text-xs text-gray-600'>Via Singapore Strait or Malacca Strait</span>
          </li>
          <li>
            <span className='font-bold'>5. Arrival at Busan/Incheon:</span> 1-3 days port handling
            <br/>
            <span className='text-xs text-gray-600'>Unloading, customs clearance, delivery to warehouse</span>
          </li>
        </ol>
        <p className='text-sm mt-4'>
          <span className='font-bold'>Total Transit Time:</span> 19-27 days door-to-door (Ethiopia → Korea warehouse)
        </p>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Ocean Freight Costs</h4>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <table className='w-full text-sm'>
          <thead>
            <tr className='border-b-2 border-amber-300'>
              <th className='text-left py-2'>Container Size</th>
              <th className='text-left py-2'>Capacity</th>
              <th className='text-left py-2'>Freight Cost (Djibouti → Busan)</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-amber-200'>
              <td className='py-2 font-bold'>20ft Container</td>
              <td className='py-2'>18-20 MT (~39,600-44,000 lbs)</td>
              <td className='py-2'>$5,000-6,500 USD</td>
            </tr>
            <tr>
              <td className='py-2 font-bold'>40ft Container</td>
              <td className='py-2'>26-28 MT (~57,000-62,000 lbs)</td>
              <td className='py-2'>$7,500-9,500 USD</td>
            </tr>
          </tbody>
        </table>
        <p className='text-xs mt-3 italic'>
          Note: Ocean freight rates fluctuate based on season, fuel costs, and global shipping demand. Rates shown are 2024-2026 averages. Always request current quotes.
        </p>
      </div>

      {/* SECTION 8: COST BREAKDOWN */}
      <h3 id="cost-breakdown" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCube className='text-amber-600' />
        8. Complete Cost Breakdown: FOB to Landed
      </h3>

      <p className='my-4'>
        Here's a realistic cost analysis for importing Ethiopian specialty coffee to South Korea:
      </p>

      <div className='bg-gray-100 p-6 rounded-lg my-6 border border-gray-300'>
        <h4 className='font-bold text-xl mb-4'>Sample Import Cost Calculation: 20ft Container to Busan</h4>
        
        <div className='bg-white p-4 rounded mb-4'>
          <p className='font-bold mb-2'>Container Specifications:</p>
          <ul className='text-sm space-y-1'>
            <li>• Container: 20ft Standard</li>
            <li>• Net Weight: 18,000 kg (39,683 lbs / 18 MT)</li>
            <li>• Coffee Grade: Ethiopian Specialty Grade 1 Washed Yirgacheffe</li>
            <li>• FOB Price: $4.80/lb ($10.58/kg)</li>
          </ul>
        </div>

        <table className='w-full text-sm bg-white'>
          <thead>
            <tr className='bg-amber-50 border-b-2 border-amber-200'>
              <th className='text-left py-3 px-3'>Cost Item</th>
              <th className='text-right py-3 px-3'>Amount</th>
              <th className='text-right py-3 px-3'>Per lb</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='py-2 px-3 font-bold'>FOB Price (Ethiopia)</td>
              <td className='py-2 px-3 text-right'>$190,478</td>
              <td className='py-2 px-3 text-right'>$4.80</td>
            </tr>
            <tr className='border-b bg-gray-50'>
              <td className='py-2 px-3'><span className='font-bold'>Freight Charges</span></td>
              <td className='py-2 px-3 text-right'></td>
              <td className='py-2 px-3 text-right'></td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>Ocean Freight (Djibouti → Busan)</td>
              <td className='py-2 px-3 text-right'>$5,800</td>
              <td className='py-2 px-3 text-right'>$0.15</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>Marine Insurance (0.3% CIF)</td>
              <td className='py-2 px-3 text-right'>$590</td>
              <td className='py-2 px-3 text-right'>$0.01</td>
            </tr>
            <tr className='border-b bg-blue-50'>
              <td className='py-2 px-3 font-bold'>CIF Value (Busan)</td>
              <td className='py-2 px-3 text-right font-bold'>$196,868</td>
              <td className='py-2 px-3 text-right font-bold'>$4.96</td>
            </tr>
            <tr className='border-b bg-gray-50'>
              <td className='py-2 px-3'><span className='font-bold'>Import Duties & Taxes</span></td>
              <td className='py-2 px-3 text-right'></td>
              <td className='py-2 px-3 text-right'></td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>Import Duty (0%)</td>
              <td className='py-2 px-3 text-right text-green-700'>$0</td>
              <td className='py-2 px-3 text-right text-green-700'>$0.00</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>VAT 10% (on CIF)</td>
              <td className='py-2 px-3 text-right'>$19,687</td>
              <td className='py-2 px-3 text-right'>$0.50</td>
            </tr>
            <tr className='border-b bg-gray-50'>
              <td className='py-2 px-3'><span className='font-bold'>Port & Clearance Fees</span></td>
              <td className='py-2 px-3 text-right'></td>
              <td className='py-2 px-3 text-right'></td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>Terminal Handling Charges (THC)</td>
              <td className='py-2 px-3 text-right'>$350</td>
              <td className='py-2 px-3 text-right'>$0.01</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>Documentation & D/O Fees</td>
              <td className='py-2 px-3 text-right'>$120</td>
              <td className='py-2 px-3 text-right'>$0.00</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>Customs Broker Fee</td>
              <td className='py-2 px-3 text-right'>$100</td>
              <td className='py-2 px-3 text-right'>$0.00</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>MFDS Pre-Report Filing</td>
              <td className='py-2 px-3 text-right'>$80</td>
              <td className='py-2 px-3 text-right'>$0.00</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>Container Transport (Port → Warehouse)</td>
              <td className='py-2 px-3 text-right'>$180</td>
              <td className='py-2 px-3 text-right'>$0.00</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-3 pl-6'>MFDS Inspection (if selected)</td>
              <td className='py-2 px-3 text-right'>$400</td>
              <td className='py-2 px-3 text-right'>$0.01</td>
            </tr>
            <tr className='border-t-2 border-gray-400 bg-green-50'>
              <td className='py-3 px-3 font-bold text-lg'>TOTAL LANDED COST</td>
              <td className='py-3 px-3 text-right font-bold text-lg'>$217,785</td>
              <td className='py-3 px-3 text-right font-bold text-lg'>$5.49</td>
            </tr>
            <tr className='bg-amber-50'>
              <td className='py-2 px-3 text-sm italic'>VAT Recovery (for registered business)</td>
              <td className='py-2 px-3 text-right text-sm italic text-green-700'>-$19,687</td>
              <td className='py-2 px-3 text-right text-sm italic text-green-700'>-$0.50</td>
            </tr>
            <tr className='bg-green-100 border-t-2 border-green-400'>
              <td className='py-3 px-3 font-bold text-lg'>NET COST (after VAT recovery)</td>
              <td className='py-3 px-3 text-right font-bold text-lg'>$198,098</td>
              <td className='py-3 px-3 text-right font-bold text-lg'>$4.99</td>
            </tr>
          </tbody>
        </table>

        <div className='mt-4 p-4 bg-blue-50 rounded'>
          <p className='text-sm font-bold mb-2'>Cost Summary:</p>
          <ul className='text-sm space-y-1'>
            <li>• FOB Ethiopia: <span className='font-bold'>$4.80/lb</span></li>
            <li>• Landed Cost (before VAT recovery): <span className='font-bold'>$5.49/lb</span> (+14.4% markup)</li>
            <li>• Net Cost (after VAT recovery): <span className='font-bold'>$4.99/lb</span> (+4.0% markup)</li>
            <li>• Logistics Cost: <span className='font-bold'>$0.19/lb</span> (freight, insurance, fees)</li>
          </ul>
        </div>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'>
          <span className='font-bold'>Key Takeaway:</span> For VAT-registered Korean businesses, the true landed cost is only ~4% above FOB price, making Korea one of the most cost-effective markets for Ethiopian coffee imports. The 10% VAT is recovered, and zero import duty keeps costs competitive.
        </p>
      </div>

      {/* SECTION 9: BUSINESS REGISTRATION */}
      <h3 id="business-registration" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBuildingOffice className='text-amber-600' />
        9. Korean Business Registration for Importers
      </h3>

      <p className='my-4'>
        To import coffee into South Korea, you must have a registered Korean business entity:
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-8'>
        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold mb-3'>🏢 Corporation (법인 - Beopin)</h5>
          <p className='text-sm mb-3'>株式會社 (Jusik Hoesa) - Stock Company</p>
          <ul className='text-sm space-y-2'>
            <li><span className='font-bold'>Capital Requirement:</span> Minimum ₩5 million (symbolic, no strict requirement)</li>
            <li><span className='font-bold'>Setup Time:</span> 2-4 weeks</li>
            <li><span className='font-bold'>Setup Cost:</span> ₩1-2 million (legal, registration fees)</li>
            <li><span className='font-bold'>Liability:</span> Limited liability protection</li>
            <li><span className='font-bold'>Best For:</span> Larger operations, multiple shareholders</li>
            <li><span className='font-bold'>Taxation:</span> Corporate tax 9-25% (progressive rates)</li>
          </ul>
        </div>

        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-3'>👤 Sole Proprietorship (개인사업자)</h5>
          <p className='text-sm mb-3'>Individual Business Registration</p>
          <ul className='text-sm space-y-2'>
            <li><span className='font-bold'>Capital Requirement:</span> None</li>
            <li><span className='font-bold'>Setup Time:</span> 1-2 weeks</li>
            <li><span className='font-bold'>Setup Cost:</span> ₩100,000-500,000</li>
            <li><span className='font-bold'>Liability:</span> Unlimited personal liability</li>
            <li><span className='font-bold'>Best For:</span> Small roasters, individual importers</li>
            <li><span className='font-bold'>Taxation:</span> Individual income tax 6-45% (progressive)</li>
          </ul>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Registration Steps</h4>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <ol className='space-y-3 text-sm list-decimal ml-5'>
          <li><span className='font-bold'>Business Name Registration:</span> Register company name with district office</li>
          <li><span className='font-bold'>Business Registration (사업자등록):</span> File with National Tax Service, receive business registration number</li>
          <li><span className='font-bold'>MFDS Food Import Business License:</span> Apply for import food sales business registration (수입식품판매업)</li>
          <li><span className='font-bold'>VAT Registration:</span> Register for VAT collection/refund with NTS</li>
          <li><span className='font-bold'>UNI-PASS Account:</span> Register with Korea Customs for electronic declarations</li>
          <li><span className='font-bold'>Bank Account:</span> Open corporate bank account for customs duty/VAT payments</li>
        </ol>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold mb-3'>Foreign Company Considerations:</p>
        <p className='text-sm mb-2'>
          Foreign businesses can import into Korea through:
        </p>
        <ul className='text-sm space-y-2'>
          <li>• <span className='font-bold'>Foreign Company Branch Office:</span> Register as Korean branch of foreign entity</li>
          <li>• <span className='font-bold'>Local Partner/Distributor:</span> Work with established Korean importer (simpler but lower margin)</li>
          <li>• <span className='font-bold'>Korean Subsidiary:</span> Establish wholly-owned Korean subsidiary</li>
        </ul>
        <p className='text-xs mt-3 italic'>
          Most Ethiopian exporters work with established Korean importers initially, then consider direct operations once volume justifies it.
        </p>
      </div>

      {/* SECTION 10: MARKET INSIGHTS */}
      <h3 id="market-insights" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineMapPin className='text-amber-600' />
        10. Korean Coffee Market Insights & Trends
      </h3>

      <p className='my-4'>
        Understanding Korean coffee culture and market dynamics is essential for success:
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Key Korean Coffee Market Trends (2024-2026)</h4>

      <div className='space-y-4 my-6'>
        <div className='border-l-4 border-green-500 pl-4'>
          <h5 className='font-bold'>Single-Origin Specialty Growth</h5>
          <p className='text-sm'>Korean consumers increasingly seek single-origin coffees with clear provenance. Ethiopian coffees' distinctive profiles and origin story perform exceptionally well. Premium single-origin retail bags (200-250g) sell for ₩15,000-35,000 ($11-26 USD).</p>
        </div>

        <div className='border-l-4 border-blue-500 pl-4'>
          <h5 className='font-bold'>Third-Wave Cafe Explosion</h5>
          <p className='text-sm'>Independent specialty cafes proliferating in Seoul (Seongsu, Yeonnam, Mangwon), Busan, and secondary cities. These cafes prioritize quality over volume, willing to pay premium prices for exceptional Ethiopian lots.</p>
        </div>

        <div className='border-l-4 border-purple-500 pl-4'>
          <h5 className='font-bold'>Home Brewing Boom</h5>
          <p className='text-sm'>COVID-19 accelerated home coffee culture. Korean consumers invest heavily in equipment (espresso machines, hand grinders, pour-over kits) and buy specialty beans online. E-commerce for premium coffee growing 25%+ annually.</p>
        </div>

        <div className='border-l-4 border-amber-500 pl-4'>
          <h5 className='font-bold'>Light Roast Preference</h5>
          <p className='text-sm'>Korean palate favors lighter roasts (City to Full City) that showcase origin characteristics – perfect for Ethiopian coffees' floral and fruity notes. Dark roasts declining in specialty segment.</p>
        </div>

        <div className='border-l-4 border-red-500 pl-4'>
          <h5 className='font-bold'>Direct Trade Interest</h5>
          <p className='text-sm'>Major Korean roasters increasingly source directly from origin, seeking relationships with exporters and cooperatives. Transparency and traceability highly valued.</p>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Major Korean Coffee Roasters & Importers</h4>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <p className='text-sm mb-3'>Notable Korean specialty roasters sourcing Ethiopian coffee:</p>
        <ul className='text-sm space-y-2 grid md:grid-cols-2 gap-x-6'>
          <li>• <span className='font-bold'>Fritz Coffee Company</span> (Seoul)</li>
          <li>• <span className='font-bold'>Anthracite Coffee Roasters</span> (Seoul/Busan)</li>
          <li>• <span className='font-bold'>Coffee Libre</span> (Seoul)</li>
          <li>• <span className='font-bold'>Momos Coffee</span> (Seoul)</li>
          <li>• <span className='font-bold'>Felt Coffee</span> (Seoul)</li>
          <li>• <span className='font-bold'>Terarosa Coffee</span> (Gangneung)</li>
          <li>• <span className='font-bold'>Namusairo</span> (Seoul)</li>
          <li>• <span className='font-bold'>Coffee Lab</span> (Multiple cities)</li>
          <li>• <span className='font-bold'>Coffeenie</span> (Seoul)</li>
          <li>• <span className='font-bold'>Onion Coffee</span> (Seoul)</li>
        </ul>
      </div>

      {/* SECTION 11: WORKING WITH EXPORTERS */}
      <h3 id="working-with-exporters" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCheckCircle className='text-amber-600' />
        11. Working with Ethiopian Coffee Exporters
      </h3>

      <p className='my-4'>
        For Korean importers, establishing reliable relationships with Ethiopian exporters is crucial:
      </p>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <h5 className='font-bold mb-3'>What to Look for in an Ethiopian Exporter</h5>
        <ul className='space-y-2 text-sm'>
          <li>✓ <span className='font-bold'>Export License:</span> Verify they hold valid Ethiopian export license</li>
          <li>✓ <span className='font-bold'>Documentation Capability:</span> Can provide all Korean-required certificates (COO, health certificate, quality certificates)</li>
          <li>✓ <span className='font-bold'>Quality Consistency:</span> Established QC systems, cupping lab, sample roasting</li>
          <li>✓ <span className='font-bold'>Communication:</span> English proficiency, responsive communication, understanding of Korean market</li>
          <li>✓ <span className='font-bold'>Logistics Experience:</span> Experience shipping to Asia, understanding of container logistics</li>
          <li>✓ <span className='font-bold'>Traceability:</span> Can provide farm-level or cooperative-level traceability</li>
          <li>✓ <span className='font-bold'>Sample Program:</span> Offers pre-shipment samples for approval</li>
          <li>✓ <span className='font-bold'>Payment Terms:</span> Flexible payment options (LC, TT, escrow)</li>
        </ul>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <h4 className='font-bold text-xl mb-3'>Partner with Ethio Coffee Export for Korean Market</h4>
        <p className='mb-4'>
          Ethio Coffee Export specializes in serving Asian markets, including South Korea. We understand MFDS requirements and Korean market preferences:
        </p>
        <ul className='space-y-2 mb-4'>
          <li>✓ Full Korean import documentation (COO, health certificates, quality certificates)</li>
          <li>✓ Experience with MFDS pre-report requirements</li>
          <li>✓ Specialty-grade Ethiopian coffee from all major regions</li>
          <li>✓ Pre-shipment sample program</li>
          <li>✓ Container consolidation options for smaller orders</li>
          <li>✓ English communication, Asian time zone responsiveness</li>
          <li>✓ Transparent pricing and supply chain documentation</li>
        </ul>
        <p>
          <Link href='/contact-us' className='font-bold underline'>Contact us</Link> to discuss sourcing Ethiopian specialty coffee for the Korean market.
        </p>
      </div>

      {/* SECTION 12: SUCCESS TIPS */}
      <h3 id="success-tips" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineLightBulb className='text-amber-600' />
        12. Tips for Success in the Korean Market
      </h3>

      <div className='space-y-4 my-6'>
        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineClipboardDocumentList className='text-blue-600' /> Start with Smaller Test Orders</h5>
          <p className='text-sm'>Begin with shared container space (5-10 bags) to test market demand before committing to full containers. Many Korean importers offer consolidation services.</p>
        </div>

        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineUsers className='text-green-600' /> Work with Experienced Customs Brokers</h5>
          <p className='text-sm'>First-time importers should partner with customs brokers experienced in coffee imports. They handle MFDS pre-reports, Korean translations, and UNI-PASS declarations efficiently.</p>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineDevicePhoneMobile className='text-amber-600' /> Invest in Marketing & Storytelling</h5>
          <p className='text-sm'>Korean consumers respond to origin stories, farmer narratives, and transparency. Invest in Korean-language marketing materials, Instagram content, and packaging that tells the Ethiopian coffee story.</p>
        </div>

        <div className='bg-purple-50 p-5 rounded-lg border border-purple-200'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineStar className='text-purple-600' /> Target the Right Segment</h5>
          <p className='text-sm'>Ethiopian coffee performs best in specialty segment (independent cafes, specialty retailers, online) rather than mass market. Focus on quality-conscious customers willing to pay premium.</p>
        </div>

        <div className='bg-red-50 p-5 rounded-lg border border-red-200'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineClock className='text-red-600' /> Plan for Seasonality</h5>
          <p className='text-sm'>Ethiopian harvest season (October-February) means fresher arrival times if you order November-March. Plan inventory to maintain freshness for Korean consumers who highly value recently-harvested coffee.</p>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineMagnifyingGlass className='text-gray-600' /> Get Your Documentation Right</h5>
          <p className='text-sm'>MFDS delays or rejections are almost always due to incomplete or incorrect documentation. Triple-check all certificates, ensure Korean translations are accurate, and maintain digital backups.</p>
        </div>
      </div>

      {/* CONCLUSION */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6'>
        Key Takeaways for Importing Ethiopian Coffee to South Korea
      </h3>

      <p className='my-4'>
        South Korea represents one of the most exciting opportunities for Ethiopian specialty coffee. With the world's highest cafe density, rapidly growing specialty coffee culture, consumers willing to pay premium prices, and favorable import regulations (zero duty, recoverable VAT), Korea is an ideal market for quality-focused Ethiopian exporters and importers.
      </p>

      <p className='my-4'>
        Success in the Korean market requires understanding MFDS food safety compliance, working with experienced logistics partners, and appreciating Korean consumer preferences for bright, fruity, single-origin coffees – exactly what Ethiopian coffee delivers.
      </p>

      <p className='my-4'>
        While the initial setup (business registration, MFDS licensing, documentation systems) requires effort, once established, importing Ethiopian coffee to Korea is streamlined, cost-effective, and highly profitable for those committed to quality and transparency.
      </p>

      <div className='bg-gray-100 p-6 rounded-lg my-8 border border-gray-300'>
        <h4 className='font-bold text-lg mb-3'>Key Takeaways</h4>
        <ul className='space-y-2 text-sm'>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Zero import duty</span> makes Korea cost-competitive for Ethiopian coffee</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>10% VAT is fully recoverable</span> for registered businesses</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>MFDS food import registration</span> required before first shipment</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Every shipment requires</span> MFDS pre-report via ИФIMS system</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Busan port</span> handles most coffee imports with lowest fees</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Transit time: 19-27 days</span> Ethiopia to Korea warehouse</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Korean consumers prefer</span> light roasts, single-origin, fruity/floral profiles</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Work with experienced exporters</span> who understand Korean documentation requirements</li>
        </ul>
      </div>

      {/* FAQ SECTION */}
      <section className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions About Importing Ethiopian Coffee to South Korea</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Is there import duty on Ethiopian coffee in South Korea?</h4>
            <p className="text-sm text-gray-600">No. Green coffee beans enter South Korea duty-free under the Korea-Ethiopia trade framework. A 10% VAT applies at import but is fully recoverable as an input tax credit for registered businesses.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What are MFDS food safety requirements for coffee imports to South Korea?</h4>
            <p className="text-sm text-gray-600">Importers must register as a food import business with MFDS, file a pre-import report through the IFIMS system for every shipment, and comply with Korean food safety standards including pesticide residue limits.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How long does shipping from Ethiopia to South Korea take?</h4>
            <p className="text-sm text-gray-600">Ocean freight from Djibouti to Busan port typically takes 19 to 27 days. Including customs clearance and MFDS processing, total delivery time is approximately 25 to 35 days.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What permits are needed to import Ethiopian coffee to South Korea?</h4>
            <p className="text-sm text-gray-600">You need MFDS food import business registration, a customs broker for Korea Customs Service declarations, and phytosanitary clearance. Each shipment requires a pre-import food report filed through the IFIMS electronic system.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What Ethiopian coffee varieties are most popular in South Korea?</h4>
            <p className="text-sm text-gray-600">Korean consumers prefer light roast, single-origin coffees with fruity and floral profiles. Yirgacheffe and Guji natural processed coffees are highly popular, along with washed Sidamo for its clean, citrus-forward character.</p>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <div className='my-8 p-6 bg-gray-50 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <ul className='space-y-2 text-sm'>
          <li>
            <Link href='/ethiopian-coffee-exporter' className='text-amber-700 hover:underline'>
              → Ethiopian Coffee Exporter: Your Trusted Export Partner
            </Link>
          </li>
          <li>
            <Link href='/insights/importing-ethiopian-coffee-to-japan' className='text-amber-700 hover:underline'>
              → Importing Ethiopian Coffee to Japan: Complete Market Entry Guide
            </Link>
          </li>
          <li>
            <Link href='/insights/how-to-import-ethiopian-coffee-to-usa' className='text-amber-700 hover:underline'>
              → How to Import Ethiopian Specialty Coffee to the United States
            </Link>
          </li>
          <li>
            <Link href='/insights/importing-ethiopian-coffee-to-germany' className='text-amber-700 hover:underline'>
              → Importing Ethiopian Coffee to Germany: Complete EU Market Entry Guide
            </Link>
          </li>
          <li>
            <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>
              → Sourcing Green Coffee from Ethiopia: Complete Guide
            </Link>
          </li>
          <li>
            <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>
              → Green Coffee Quality Control: Defects, Grading & What Importers Should Inspect
            </Link>
          </li>
        </ul>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Import Ethiopian Coffee to South Korea</h4>
        <p className='my-2'>
          At <span className='font-bold'>Ethio Coffee Export PLC</span>, we have experience shipping to the Korean market and can guide you through documentation, logistics, and compliance requirements.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Our Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Contact Us</Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>How to Order</Link>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> A comprehensive guide covering regulations, documentation, logistics, and market considerations for importing Ethiopian coffee to South Korea.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

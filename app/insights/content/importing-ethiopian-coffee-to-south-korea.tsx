import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
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
        MFDS compliance, Korea Customs procedures, shipping logistics, cost analysis, and market entry strategy for Ethiopian specialty coffee
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          South Korea imported 215,792 metric tons of green coffee in 2025, making it one of Asia&apos;s largest and fastest-growing specialty coffee markets.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Importing Ethiopian coffee to South Korea - Korean specialty cafe serving single-origin Ethiopian pour-over'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      {/* Key Takeaway Box */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />
          Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          South Korea imported 215,792 metric tons of green coffee in 2025 (Korea Agro-Fisheries &amp; Food Trade Corp.), valued at nearly 2 trillion won. Green coffee enters duty-free; the 10% VAT is fully recoverable for registered businesses. Importers must register with MFDS (Ministry of Food and Drug Safety), file an IFIMS pre-import report for every shipment, and comply with Korea&apos;s Positive List System for pesticide residues. Ocean freight from Djibouti to Busan takes 18 to 22 days. Ethiopian coffee&apos;s floral, fruity profiles match Korean consumer preferences for light-roast, single-origin specialty coffee, a segment growing at roughly 12% annually.
        </p>
      </div>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Import Guide / South Korea Market / Ethiopian Coffee Export / B2B Intelligence</span>
      </div>

      {/* INTRODUCTION */}
      <p className='my-4'>
        South Korea&apos;s coffee market reached an estimated $13.67 billion in 2025 (Expert Market Research), driven by the world&apos;s highest cafe density: over 100,000 cafes serving 52 million people. Coffee bean imports spiked 13% year-on-year to $1.24 billion in 2024 (Korea Customs Service via Yonhap), and volume hit a record 215,792 metric tons in 2025. For exporters looking to <span className='font-bold'>import Ethiopian coffee to South Korea</span>, this demand trajectory creates a clear commercial opportunity.
      </p>

      <p className='my-4'>
        Ethiopian coffee aligns precisely with Korean consumer preferences. Specialty shops in Seoul&apos;s Seongsu, Yeonnam, and Gangnam districts favor light-roast, single-origin beans with bright acidity and floral complexity. Yirgacheffe washed lots and Guji naturals, with their jasmine, bergamot, and stone-fruit notes, are among the most requested African origins on Korean specialty menus. Korea&apos;s specialty coffee segment has grown at 11.9% annually from 2018 to 2023 (Coffee Expo Seoul), and Grand View Research projects the specialty market will reach $2.5 billion by 2030.
      </p>

      <p className='my-4'>
        Entering the Korean market requires handling Ministry of Food and Drug Safety (MFDS) regulations, Korea Customs Service declarations, and Korean-language documentation. This guide covers every step: regulatory compliance, documentation, shipping logistics, landed cost, and market entry strategy for Ethiopian specialty coffee.
      </p>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href="#korean-market" className='text-amber-700 hover:underline'>1. Why Korean Importers Choose Ethiopian Coffee</a></li>
          <li><a href="#regulations" className='text-amber-700 hover:underline'>2. Korean Coffee Import Regulations</a></li>
          <li><a href="#mfds-requirements" className='text-amber-700 hover:underline'>3. MFDS Food Safety Requirements</a></li>
          <li><a href="#customs-clearance" className='text-amber-700 hover:underline'>4. Korea Customs Service Clearance</a></li>
          <li><a href="#duties-taxes" className='text-amber-700 hover:underline'>5. Import Duties, Taxes, and VAT</a></li>
          <li><a href="#documentation" className='text-amber-700 hover:underline'>6. Required Documentation</a></li>
          <li><a href="#shipping-logistics" className='text-amber-700 hover:underline'>7. Shipping Routes and Logistics</a></li>
          <li><a href="#cost-breakdown" className='text-amber-700 hover:underline'>8. Landed Cost Breakdown</a></li>
          <li><a href="#business-registration" className='text-amber-700 hover:underline'>9. Business Registration for Importers</a></li>
          <li><a href="#market-insights" className='text-amber-700 hover:underline'>10. Korean Coffee Market Trends</a></li>
          <li><a href="#working-with-exporters" className='text-amber-700 hover:underline'>11. Working with Ethiopian Exporters</a></li>
          <li><a href="#success-tips" className='text-amber-700 hover:underline'>12. Market Entry Tips</a></li>
        </ol>
      </div>

      {/* SECTION 1: KOREAN MARKET */}
      <h3 id="korean-market" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineArrowTrendingUp className='text-amber-600' />
        1. Why Korean Importers Choose Ethiopian Coffee
      </h3>

      <p className='my-4'>
        Korea&apos;s coffee market has shifted from instant-coffee dominance to specialty-driven growth. Ethiopian coffee has become a top African origin for Korean roasters, and understanding the market context explains why.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Korean Coffee Market at a Glance</h4>

      <div className='bg-blue-50 p-6 rounded-lg my-6 border border-blue-200'>
        <h5 className='font-bold mb-3'>Market Statistics (2024&ndash;2025)</h5>
        <ul className='space-y-2 text-sm'>
          <li><HiOutlineChartBarSquare className='inline mr-2 text-blue-600' /> <span className='font-bold'>Market Size:</span> ~$13.67 billion (2025, Expert Market Research)</li>
          <li><HiOutlineCube className='inline mr-2 text-blue-600' /> <span className='font-bold'>Green Coffee Imports:</span> 215,792 metric tons in 2025 (Korea Agro-Fisheries &amp; Food Trade Corp. via StoneX)</li>
          <li><HiOutlineCurrencyDollar className='inline mr-2 text-blue-600' /> <span className='font-bold'>Import Value:</span> $1.24 billion in 2024, up 13% YoY (Korea Customs Service)</li>
          <li><HiOutlineBuildingStorefront className='inline mr-2 text-blue-600' /> <span className='font-bold'>Cafe Density:</span> 100,000+ cafes for 52 million people (highest per capita globally)</li>
          <li><HiOutlineArrowTrendingUp className='inline mr-2 text-blue-600' /> <span className='font-bold'>Specialty Growth:</span> Specialty coffee shops growing 11.9% annually (Coffee Expo Seoul, 2018&ndash;2023)</li>
          <li><HiOutlineUsers className='inline mr-2 text-blue-600' /> <span className='font-bold'>Demographics:</span> 85% urbanized, high disposable income, median age 44</li>
          <li><HiOutlineGlobeAlt className='inline mr-2 text-blue-600' /> <span className='font-bold'>Per Capita Consumption:</span> ~353 cups annually (among the highest globally)</li>
        </ul>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Why Ethiopian Coffee Fits the Korean Market</h4>

      <div className='grid md:grid-cols-2 gap-6 my-8'>
        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-3'>Consumer Match</h5>
          <ul className='space-y-2 text-sm'>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> <span className='font-bold'>Light-roast preference:</span> Korean consumers favor bright acidity and floral complexity, Ethiopian coffee&apos;s core strength</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> <span className='font-bold'>Pour-over culture:</span> Hand-drip and pour-over methods, popular in Korean cafes, showcase Ethiopian terroir</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> <span className='font-bold'>Origin storytelling:</span> Ethiopia&apos;s birthplace-of-coffee narrative appeals to Korea&apos;s educated, quality-focused consumers</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /> <span className='font-bold'>Natural-process demand:</span> Fruit-forward natural Ethiopian coffees are among the most requested single-origins</li>
          </ul>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold mb-3'>Commercial Drivers</h5>
          <ul className='space-y-2 text-sm'>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /> <span className='font-bold'>Premium positioning:</span> Single-origin Ethiopian retail bags sell for &#8361;15,000&ndash;35,000 ($11&ndash;26 USD) per 200&ndash;250g</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /> <span className='font-bold'>Differentiation:</span> Ethiopian lots help cafes and roasters stand out in a saturated market</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /> <span className='font-bold'>Leading roasters:</span> Fritz, Anthracite, Coffee Libre, Terarosa, and Felt all feature Ethiopian origins</li>
            <li><HiOutlineCheckCircle className='inline mr-2 text-amber-600' /> <span className='font-bold'>E-commerce growth:</span> Online specialty coffee sales expanding 25%+ annually post-COVID</li>
          </ul>
        </div>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium'>
          <span className='font-bold'>Market Reality:</span> Korean specialty roasters increasingly source directly from origin, bypassing traditional Japanese or European intermediaries. Ethiopian exporters who provide MFDS-compliant documentation and pre-shipment samples can access this market directly.
        </p>
      </div>

      {/* SECTION 2: REGULATIONS */}
      <h3 id="regulations" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineShieldCheck className='text-amber-600' />
        2. Korean Coffee Import Regulations
      </h3>

      <p className='my-4'>
        Coffee imports into South Korea are governed by two primary agencies. Both must clear a shipment before it reaches the importer&apos;s warehouse.
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-8'>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold text-lg mb-3'><HiOutlineBuildingOffice className='inline mr-2' /> Ministry of Food and Drug Safety (MFDS)</h5>
          <p className='text-sm mb-2'>&#49885;&#54408;&#51032;&#50557;&#54408;&#50504;&#51204;&#52376; (Sikpum Uiyakpum Anjeoncheo)</p>
          <p className='text-sm mb-3'><span className='font-bold'>Role:</span> Food safety standards, import food facility registration, pesticide and mycotoxin testing, and Korean-language labeling compliance.</p>
          <p className='text-sm'><span className='font-bold'>Website:</span> <a href='https://www.mfds.go.kr/eng/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>mfds.go.kr/eng</a></p>
        </div>

        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold text-lg mb-3'><HiOutlineBuildingOffice className='inline mr-2' /> Korea Customs Service (KCS)</h5>
          <p className='text-sm mb-2'>&#44288;&#49464;&#52397; (Gwanse-cheong)</p>
          <p className='text-sm mb-3'><span className='font-bold'>Role:</span> Tariff classification, duty and VAT collection, import declarations through UNI-PASS electronic system, and trade compliance enforcement.</p>
          <p className='text-sm'><span className='font-bold'>Website:</span> <a href='https://www.customs.go.kr/english/' target='_blank' rel='noopener noreferrer' className='text-blue-700 hover:underline'>customs.go.kr/english</a></p>
        </div>
      </div>

      <p className='my-4'>
        Successful import requires compliance with <span className='font-bold'>both MFDS food safety standards and KCS trade regulations</span>. MFDS clearance typically precedes customs release.
      </p>

      {/* SECTION 3: MFDS REQUIREMENTS */}
      <h3 id="mfds-requirements" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBeaker className='text-amber-600' />
        3. MFDS Food Safety Requirements
      </h3>

      <p className='my-4'>
        MFDS oversees food safety for all imported food products. Ethiopian coffee must pass through a four-step compliance process.
      </p>

      <div className='space-y-6 my-8'>
        <div className='bg-green-50 p-6 rounded-lg border border-green-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <span className='bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm'>1</span>
            Import Food Business Registration (&#49688;&#51077;&#49885;&#54408;&#50689;&#50629;&#46321;&#47197;)
          </h5>
          <p className='text-sm mb-3'>Before importing any food, the Korean entity must register as a food importer with the local MFDS district office:</p>
          <ul className='text-sm space-y-2'>
            <li>&#8226; <span className='font-bold'>Type:</span> Import Food Sales Business (&#49688;&#51077;&#49885;&#54408;&#54032;&#47588;&#50629;)</li>
            <li>&#8226; <span className='font-bold'>Validity:</span> 5-year renewal cycle</li>
            <li>&#8226; <span className='font-bold'>Fee:</span> &#8361;30,000&ndash;50,000</li>
            <li>&#8226; <span className='font-bold'>Processing Time:</span> 1&ndash;2 weeks</li>
            <li>&#8226; <span className='font-bold'>Prerequisites:</span> Korean business registration certificate (&#49324;&#50629;&#51088;&#46321;&#47197;&#51613;), facility details, safety management plan</li>
          </ul>
        </div>

        <div className='bg-blue-50 p-6 rounded-lg border border-blue-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <span className='bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm'>2</span>
            IFIMS Pre-Import Report (&#49688;&#51077;&#49885;&#54408;&#49324;&#51204;&#49888;&#44256;)
          </h5>
          <p className='text-sm mb-3'>Every shipment requires advance notification to MFDS through the Import Food Information Management System (IFIMS):</p>
          <ul className='text-sm space-y-2'>
            <li>&#8226; <span className='font-bold'>Timing:</span> File before cargo arrival (3&ndash;5 business days recommended)</li>
            <li>&#8226; <span className='font-bold'>Contents:</span> Product details, exporter information, manufacturing country, quantity, intended use</li>
            <li>&#8226; <span className='font-bold'>Language:</span> All product information submitted in Korean</li>
            <li>&#8226; <span className='font-bold'>Attachments:</span> Certificate of Origin, health certificate, commercial invoice, packing list</li>
            <li>&#8226; <span className='font-bold'>Approval:</span> 1&ndash;2 business days if documentation is complete</li>
            <li>&#8226; <span className='font-bold'>Note:</span> First-time importers or new exporter relationships trigger higher inspection probability</li>
          </ul>
        </div>

        <div className='bg-amber-50 p-6 rounded-lg border border-amber-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <span className='bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm'>3</span>
            Safety Standards and PLS Compliance
          </h5>
          <p className='text-sm mb-3'>Ethiopian coffee must meet Korean food safety standards, including the Positive List System (PLS) for pesticide residues introduced in 2019:</p>
          <ul className='text-sm space-y-2'>
            <li>&#8226; <span className='font-bold'>Aflatoxin:</span> Maximum 10 ppb total aflatoxins (MFDS Food Code)</li>
            <li>&#8226; <span className='font-bold'>Ochratoxin A:</span> Maximum 5 ppb for roasted coffee</li>
            <li>&#8226; <span className='font-bold'>Pesticide Residues (PLS):</span> Any pesticide without a Korea-specific MRL defaults to 0.01 ppm. Verify your lot meets listed MRLs or falls below this uniform limit.</li>
            <li>&#8226; <span className='font-bold'>Heavy Metals:</span> Lead and cadmium within MFDS-established limits</li>
            <li>&#8226; <span className='font-bold'>Microbiological:</span> Free from harmful pathogens</li>
            <li>&#8226; <span className='font-bold'>Foreign Matter:</span> Must meet cleanliness standards (stones, sticks, insect damage)</li>
          </ul>
        </div>

        <div className='bg-purple-50 p-6 rounded-lg border border-purple-200'>
          <h5 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <span className='bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm'>4</span>
            Physical Inspection (If Selected)
          </h5>
          <p className='text-sm mb-3'>MFDS selects a portion of shipments for laboratory testing:</p>
          <ul className='text-sm space-y-2'>
            <li>&#8226; <span className='font-bold'>Selection Rate:</span> 3&ndash;5% of shipments (higher for first-time importers or flagged origins)</li>
            <li>&#8226; <span className='font-bold'>Location:</span> Port of entry (Busan or Incheon)</li>
            <li>&#8226; <span className='font-bold'>Tests:</span> Aflatoxins, pesticide residues, heavy metals (5&ndash;7 business days)</li>
            <li>&#8226; <span className='font-bold'>Cost:</span> &#8361;200,000&ndash;500,000 paid by importer</li>
            <li>&#8226; <span className='font-bold'>Outcome:</span> Cargo held until results confirm compliance. Non-compliant shipments are rejected, destroyed, or re-exported at importer&apos;s expense.</li>
          </ul>
        </div>
      </div>

      <div className='bg-red-50 p-6 rounded-lg my-6 border border-red-200'>
        <p className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineExclamationTriangle className='text-red-600' />
          Korean Language Requirement
        </p>
        <p className='text-sm'>
          All MFDS documentation, import reports, and database entries must be in Korean. Bulk green coffee bags shipped B2B do not require Korean retail labels, but the IFIMS filing and supporting documents must be translated. First-time importers should work with a Korean customs broker experienced in food imports.
        </p>
      </div>

      {/* SECTION 4: CUSTOMS CLEARANCE */}
      <h3 id="customs-clearance" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBuildingOffice className='text-amber-600' />
        4. Korea Customs Service (KCS) Clearance
      </h3>

      <p className='my-4'>
        After MFDS approval, cargo proceeds to customs clearance through the Korea Customs Service. Korea&apos;s system is highly automated.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>UNI-PASS Electronic Customs System</h4>

      <div className='bg-blue-50 p-6 rounded-lg my-6 border border-blue-200'>
        <p className='text-sm mb-3'>
          Korea uses <span className='font-bold'>UNI-PASS</span> (Customs Clearance Uni-Network System) for all import and export declarations:
        </p>
        <ul className='space-y-2 text-sm'>
          <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /> <span className='font-bold'>Electronic Filing:</span> All declarations submitted online</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /> <span className='font-bold'>Processing Speed:</span> Most declarations cleared within 1&ndash;2 hours</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /> <span className='font-bold'>Risk Assessment:</span> Automated system flags high-risk shipments for inspection</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /> <span className='font-bold'>Duty Payment:</span> Electronic bank transfer</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-blue-600' /> <span className='font-bold'>Status Tracking:</span> Real-time clearance updates</li>
        </ul>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Customs Clearance Requirements</h4>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='text-left py-3 px-4'>Requirement</th>
              <th className='text-left py-3 px-4'>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='py-2 px-4 font-bold'>Import License</td>
              <td className='py-2 px-4'>Registered Korean business entity (&#48277;&#51064; or &#44060;&#51064;&#49324;&#50629;&#51088;)</td>
            </tr>
            <tr className='border-b bg-gray-50'>
              <td className='py-2 px-4 font-bold'>HS Code</td>
              <td className='py-2 px-4'>0901.11-0000 (green, not decaffeinated) or 0901.12-0000 (decaffeinated)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-4 font-bold'>Import Duty</td>
              <td className='py-2 px-4'><span className='font-bold text-green-700'>0%</span> under WTO MFN rate</td>
            </tr>
            <tr className='border-b bg-gray-50'>
              <td className='py-2 px-4 font-bold'>VAT</td>
              <td className='py-2 px-4'>10% on CIF value (recoverable for VAT-registered businesses)</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-4 font-bold'>Customs Broker Fee</td>
              <td className='py-2 px-4'>&#8361;50,000&ndash;150,000 (varies by broker)</td>
            </tr>
            <tr className='border-b bg-gray-50'>
              <td className='py-2 px-4 font-bold'>Declaration</td>
              <td className='py-2 px-4'>Import Declaration (&#49688;&#51077;&#49888;&#44256;&#49436;) via UNI-PASS</td>
            </tr>
            <tr>
              <td className='py-2 px-4 font-bold'>Processing Time</td>
              <td className='py-2 px-4'>1&ndash;3 business days (if no inspection required)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium'>
          <span className='font-bold'>AEO Certification:</span> Korea Customs Service offers an Authorized Economic Operator (AEO) program for trusted importers. AEO status provides expedited clearance, reduced inspection rates, and simplified procedures. Consider applying once you establish regular import volumes.
        </p>
      </div>

      {/* SECTION 5: DUTIES & TAXES */}
      <h3 id="duties-taxes" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='text-amber-600' />
        5. Import Duties, Taxes, and VAT
      </h3>

      <p className='my-4'>
        South Korea&apos;s tax treatment of green coffee imports is among the most favorable in Asia.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='text-left py-3 px-4'>Charge Type</th>
              <th className='text-left py-3 px-4'>Rate</th>
              <th className='text-left py-3 px-4'>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='py-2 px-4 font-bold'>Import Duty (&#44288;&#49464;)</td>
              <td className='py-2 px-4 text-green-700 font-bold'>0%</td>
              <td className='py-2 px-4 text-gray-600'>Zero duty on green coffee (HS 0901) under WTO MFN rate</td>
            </tr>
            <tr className='border-b bg-gray-50'>
              <td className='py-2 px-4 font-bold'>VAT (&#48512;&#44032;&#44032;&#52824;&#49464;)</td>
              <td className='py-2 px-4 font-bold'>10%</td>
              <td className='py-2 px-4 text-gray-600'>On CIF value; fully recoverable for VAT-registered businesses</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-4 font-bold'>Special Consumption Tax</td>
              <td className='py-2 px-4 text-green-700 font-bold'>0%</td>
              <td className='py-2 px-4 text-gray-600'>Not applicable to coffee</td>
            </tr>
            <tr className='border-b bg-gray-50'>
              <td className='py-2 px-4 font-bold'>Education Tax</td>
              <td className='py-2 px-4 text-green-700 font-bold'>0%</td>
              <td className='py-2 px-4 text-gray-600'>Not applicable to coffee</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2 px-4 font-bold'>Customs Broker Fee</td>
              <td className='py-2 px-4'>&#8361;50,000&ndash;150,000</td>
              <td className='py-2 px-4 text-gray-600'>Negotiable per shipment</td>
            </tr>
            <tr>
              <td className='py-2 px-4 font-bold'>Port Handling</td>
              <td className='py-2 px-4'>&#8361;200,000&ndash;400,000</td>
              <td className='py-2 px-4 text-gray-600'>THC, documentation, storage (varies by port)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>VAT Recovery</h4>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <p className='text-sm mb-3'>
          The 10% VAT paid at import is <span className='font-bold'>fully recoverable</span> for VAT-registered Korean businesses:
        </p>
        <ul className='space-y-2 text-sm'>
          <li>&#10003; <span className='font-bold'>Threshold:</span> VAT registration required for businesses with annual sales over &#8361;48 million (voluntary below this)</li>
          <li>&#10003; <span className='font-bold'>Mechanism:</span> Claimed as input tax credit on quarterly VAT returns (January, April, July, October)</li>
          <li>&#10003; <span className='font-bold'>Refund Timeline:</span> Excess input VAT refunded within 30 days of filing</li>
          <li>&#10003; <span className='font-bold'>Documentation:</span> Retain customs clearance receipts showing VAT payment</li>
        </ul>
        <p className='text-xs mt-3 italic'>
          For registered businesses, the 10% VAT is a temporary cash flow impact, not a true cost.
        </p>
      </div>

      {/* SECTION 6: DOCUMENTATION */}
      <h3 id="documentation" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineDocumentText className='text-amber-600' />
        6. Required Documentation
      </h3>

      <p className='my-4'>
        Complete and correctly prepared documentation prevents the most common clearance delays. The documents fall into three groups.
      </p>

      <div className='space-y-4 my-8'>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold mb-2'>From Ethiopian Exporter</h5>
          <ul className='text-sm space-y-1'>
            <li>&#8226; <span className='font-bold'>Commercial Invoice:</span> FOB value, coffee description, HS code, net/gross weight</li>
            <li>&#8226; <span className='font-bold'>Packing List:</span> Bag count, net and gross weight, container number</li>
            <li>&#8226; <span className='font-bold'>Certificate of Origin:</span> Issued by Ethiopian Chamber of Commerce or Ethiopian Coffee Authority</li>
            <li>&#8226; <span className='font-bold'>Health / Sanitary Certificate:</span> From Ethiopian Coffee Authority or Ministry of Health</li>
            <li>&#8226; <span className='font-bold'>Quality Certificate:</span> ECX grade certificate or cupping report</li>
            <li>&#8226; <span className='font-bold'>Fumigation Certificate:</span> ISPM-15 treatment certificate if using wooden pallets</li>
            <li>&#8226; <span className='font-bold'>Non-GMO Declaration:</span> Statement that coffee contains no genetically modified organisms</li>
          </ul>
        </div>

        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold mb-2'>From Shipping Company / Freight Forwarder</h5>
          <ul className='text-sm space-y-1'>
            <li>&#8226; <span className='font-bold'>Bill of Lading (B/L):</span> Ocean B/L as proof of shipment and title document</li>
            <li>&#8226; <span className='font-bold'>Arrival Notice:</span> Vessel arrival date and cargo details</li>
            <li>&#8226; <span className='font-bold'>Delivery Order:</span> Authorization to release cargo from terminal</li>
            <li>&#8226; <span className='font-bold'>Container Load Report:</span> Container condition and seal verification</li>
          </ul>
        </div>

        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-2'>Korean-Side Documentation (Importer / Broker)</h5>
          <ul className='text-sm space-y-1'>
            <li>&#8226; <span className='font-bold'>IFIMS Pre-Report (&#49324;&#51204;&#49888;&#44256;):</span> Filed through MFDS Import Food Information Management System</li>
            <li>&#8226; <span className='font-bold'>Import Declaration (&#49688;&#51077;&#49888;&#44256;&#49436;):</span> Filed via UNI-PASS</li>
            <li>&#8226; <span className='font-bold'>Business Registration Certificate (&#49324;&#50629;&#51088;&#46321;&#47197;&#51613;):</span> Proof of legal business status</li>
            <li>&#8226; <span className='font-bold'>MFDS Import Food License:</span> MFDS food import business registration</li>
            <li>&#8226; <span className='font-bold'>Korean Translations:</span> Key documents translated by licensed broker</li>
          </ul>
        </div>
      </div>

      <div className='bg-red-50 p-6 rounded-lg my-6 border border-red-200'>
        <p className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineExclamationTriangle className='text-red-600' />
          Common Documentation Mistakes
        </p>
        <ul className='space-y-2 text-sm'>
          <li>&#10007; Certificate of Origin listing a country other than Ethiopia</li>
          <li>&#10007; HS code mismatch between commercial invoice and customs declaration</li>
          <li>&#10007; Expired or missing health certificate</li>
          <li>&#10007; CIF value discrepancies across documents</li>
          <li>&#10007; Incomplete product description (must specify green coffee, grade, processing method)</li>
          <li>&#10007; Missing Korean translation of critical fields in IFIMS filing</li>
        </ul>
      </div>

      {/* SECTION 7: SHIPPING LOGISTICS */}
      <h3 id="shipping-logistics" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineTruck className='text-amber-600' />
        7. Shipping Routes and Logistics
      </h3>

      <p className='my-4'>
        Ethiopian coffee reaches South Korea through two primary ports. Port selection depends on the buyer&apos;s location and cost sensitivity.
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-8'>
        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold text-lg mb-3'>Busan Port (&#48512;&#49328;&#54637;)</h5>
          <p className='text-sm mb-3'>Korea&apos;s largest port, handling ~70% of the country&apos;s coffee imports</p>
          <ul className='text-sm space-y-2'>
            <li>&#8226; <span className='font-bold'>Global Rank:</span> 7th-busiest container port worldwide</li>
            <li>&#8226; <span className='font-bold'>Advantages:</span> Lower port fees, established coffee handling infrastructure</li>
            <li>&#8226; <span className='font-bold'>Free Storage:</span> 5&ndash;10 days depending on terminal</li>
            <li>&#8226; <span className='font-bold'>Transit from Djibouti:</span> 18&ndash;22 days via Suez Canal</li>
            <li>&#8226; <span className='font-bold'>Ideal For:</span> Busan, Ulsan, and Daegu-based roasters; cost-sensitive imports</li>
          </ul>
        </div>

        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold text-lg mb-3'>Incheon Port (&#51064;&#52380;&#54637;)</h5>
          <p className='text-sm mb-3'>Gateway to Seoul metropolitan area, handles ~25% of coffee imports</p>
          <ul className='text-sm space-y-2'>
            <li>&#8226; <span className='font-bold'>Advantage:</span> Direct access to Seoul and Gyeonggi-do, home to 26 million people</li>
            <li>&#8226; <span className='font-bold'>Free Storage:</span> 7&ndash;10 days</li>
            <li>&#8226; <span className='font-bold'>Transit from Djibouti:</span> 19&ndash;23 days via Suez Canal</li>
            <li>&#8226; <span className='font-bold'>Note:</span> Slightly higher port fees than Busan</li>
            <li>&#8226; <span className='font-bold'>Ideal For:</span> Seoul specialty roasters who need faster last-mile delivery</li>
          </ul>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Shipping Route: Ethiopia to South Korea</h4>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h5 className='font-bold mb-3'>Route and Timeline</h5>
        <ol className='space-y-3 text-sm'>
          <li>
            <span className='font-bold'>1. Addis Ababa &#8594; Djibouti (road or rail):</span> 2&ndash;4 days
            <br/>
            <span className='text-xs text-gray-600'>Via truck or the Addis Ababa&ndash;Djibouti railway to Port of Djibouti</span>
          </li>
          <li>
            <span className='font-bold'>2. Djibouti &#8594; Suez Canal:</span> 5&ndash;7 days
            <br/>
            <span className='text-xs text-gray-600'>Red Sea route through Bab-el-Mandeb strait</span>
          </li>
          <li>
            <span className='font-bold'>3. Suez Canal transit:</span> 1 day
          </li>
          <li>
            <span className='font-bold'>4. Mediterranean/Indian Ocean &#8594; East Asia:</span> 10&ndash;12 days
            <br/>
            <span className='text-xs text-gray-600'>Via Malacca Strait</span>
          </li>
          <li>
            <span className='font-bold'>5. Port arrival and clearance:</span> 1&ndash;3 days
            <br/>
            <span className='text-xs text-gray-600'>Unloading, MFDS and customs clearance, warehouse delivery</span>
          </li>
        </ol>
        <p className='text-sm mt-4'>
          <span className='font-bold'>Total Door-to-Door:</span> 19&ndash;27 days (Ethiopia warehouse to Korean warehouse)
        </p>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Ocean Freight Costs</h4>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='text-left py-3 px-4'>Container</th>
              <th className='text-left py-3 px-4'>Capacity</th>
              <th className='text-left py-3 px-4'>Freight (Djibouti &#8594; Busan)</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='py-2 px-4 font-bold'>20ft FCL</td>
              <td className='py-2 px-4'>18&ndash;20 MT (~300 bags at 60 kg)</td>
              <td className='py-2 px-4'>$5,000&ndash;6,500 USD</td>
            </tr>
            <tr>
              <td className='py-2 px-4 font-bold'>40ft FCL</td>
              <td className='py-2 px-4'>26&ndash;28 MT</td>
              <td className='py-2 px-4'>$7,500&ndash;9,500 USD</td>
            </tr>
          </tbody>
        </table>
        <p className='text-xs mt-3 italic text-gray-500'>
          Rates fluctuate with fuel costs, season, and global shipping demand. Figures reflect 2024&ndash;2026 averages. Always request current quotes.
        </p>
      </div>

      {/* SECTION 8: COST BREAKDOWN */}
      <h3 id="cost-breakdown" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCube className='text-amber-600' />
        8. Landed Cost Breakdown
      </h3>

      <p className='my-4'>
        The following example calculates the full landed cost for a 20ft container of Ethiopian specialty coffee delivered to Busan.
      </p>

      <div className='bg-gray-100 p-6 rounded-lg my-6 border border-gray-300'>
        <h4 className='font-bold text-xl mb-4'>Worked Example: 20ft Container, Washed Yirgacheffe G1 to Busan</h4>

        <div className='bg-white p-4 rounded mb-4'>
          <p className='font-bold mb-2'>Shipment Parameters:</p>
          <ul className='text-sm space-y-1'>
            <li>&#8226; Container: 20ft Standard</li>
            <li>&#8226; Net Weight: 18,000 kg (18 MT, ~300 bags at 60 kg)</li>
            <li>&#8226; Grade: Ethiopian Specialty Grade 1 Washed Yirgacheffe</li>
            <li>&#8226; FOB Price: $4.80/lb ($10.58/kg)</li>
          </ul>
        </div>

        <div className='overflow-x-auto'>
          <table className='w-full text-sm bg-white'>
            <thead>
              <tr className='bg-dark text-primary'>
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
                <td className='py-2 px-3 font-bold' colSpan={3}>Freight &amp; Insurance</td>
              </tr>
              <tr className='border-b'>
                <td className='py-2 px-3 pl-6'>Ocean Freight (Djibouti &#8594; Busan)</td>
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
                <td className='py-2 px-3 font-bold' colSpan={3}>Duties &amp; Taxes</td>
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
                <td className='py-2 px-3 font-bold' colSpan={3}>Port &amp; Clearance</td>
              </tr>
              <tr className='border-b'>
                <td className='py-2 px-3 pl-6'>Terminal Handling Charges</td>
                <td className='py-2 px-3 text-right'>$350</td>
                <td className='py-2 px-3 text-right'>$0.01</td>
              </tr>
              <tr className='border-b'>
                <td className='py-2 px-3 pl-6'>Documentation &amp; D/O Fees</td>
                <td className='py-2 px-3 text-right'>$120</td>
                <td className='py-2 px-3 text-right'>$0.00</td>
              </tr>
              <tr className='border-b'>
                <td className='py-2 px-3 pl-6'>Customs Broker Fee</td>
                <td className='py-2 px-3 text-right'>$100</td>
                <td className='py-2 px-3 text-right'>$0.00</td>
              </tr>
              <tr className='border-b'>
                <td className='py-2 px-3 pl-6'>MFDS IFIMS Filing</td>
                <td className='py-2 px-3 text-right'>$80</td>
                <td className='py-2 px-3 text-right'>$0.00</td>
              </tr>
              <tr className='border-b'>
                <td className='py-2 px-3 pl-6'>Container Transport (Port &#8594; Warehouse)</td>
                <td className='py-2 px-3 text-right'>$180</td>
                <td className='py-2 px-3 text-right'>$0.00</td>
              </tr>
              <tr className='border-b'>
                <td className='py-2 px-3 pl-6'>MFDS Inspection (if selected)</td>
                <td className='py-2 px-3 text-right'>$400</td>
                <td className='py-2 px-3 text-right'>$0.01</td>
              </tr>
              <tr className='border-t-2 border-gray-400 bg-green-50'>
                <td className='py-3 px-3 font-bold text-lg'>Total Landed Cost</td>
                <td className='py-3 px-3 text-right font-bold text-lg'>$218,185</td>
                <td className='py-3 px-3 text-right font-bold text-lg'>$5.50</td>
              </tr>
              <tr className='bg-amber-50'>
                <td className='py-2 px-3 text-sm italic'>VAT Recovery (registered business)</td>
                <td className='py-2 px-3 text-right text-sm italic text-green-700'>-$19,687</td>
                <td className='py-2 px-3 text-right text-sm italic text-green-700'>-$0.50</td>
              </tr>
              <tr className='bg-green-100 border-t-2 border-green-400'>
                <td className='py-3 px-3 font-bold text-lg'>Net Cost (after VAT recovery)</td>
                <td className='py-3 px-3 text-right font-bold text-lg'>$198,498</td>
                <td className='py-3 px-3 text-right font-bold text-lg'>$5.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='mt-4 p-4 bg-blue-50 rounded'>
          <p className='text-sm font-bold mb-2'>Summary:</p>
          <ul className='text-sm space-y-1'>
            <li>&#8226; FOB Ethiopia: <span className='font-bold'>$4.80/lb</span></li>
            <li>&#8226; Landed (before VAT recovery): <span className='font-bold'>$5.50/lb</span> (+14.6%)</li>
            <li>&#8226; Net (after VAT recovery): <span className='font-bold'>$5.00/lb</span> (+4.2%)</li>
            <li>&#8226; Logistics cost: <span className='font-bold'>$0.20/lb</span> (freight, insurance, port fees)</li>
          </ul>
        </div>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium'>
          <span className='font-bold'>Cost Advantage:</span> For VAT-registered Korean businesses, the net landed cost is only ~4% above FOB. Combined with zero import duty, Korea is one of the most cost-effective destinations for Ethiopian coffee in Asia. See our <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian Coffee Landed Cost Guide</Link> for a detailed breakdown methodology.
        </p>
      </div>

      {/* SECTION 9: BUSINESS REGISTRATION */}
      <h3 id="business-registration" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBuildingOffice className='text-amber-600' />
        9. Business Registration for Importers
      </h3>

      <p className='my-4'>
        Importing coffee into South Korea requires a registered Korean business entity. Two structures are common:
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-8'>
        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold mb-3'>Corporation (&#48277;&#51064;)</h5>
          <p className='text-sm mb-3'>Jusik Hoesa (Stock Company)</p>
          <ul className='text-sm space-y-2'>
            <li><span className='font-bold'>Capital:</span> Minimum &#8361;5 million (symbolic)</li>
            <li><span className='font-bold'>Setup Time:</span> 2&ndash;4 weeks</li>
            <li><span className='font-bold'>Cost:</span> &#8361;1&ndash;2 million (legal and registration)</li>
            <li><span className='font-bold'>Liability:</span> Limited</li>
            <li><span className='font-bold'>Tax:</span> Corporate tax 9&ndash;25% (progressive)</li>
            <li><span className='font-bold'>Best For:</span> Larger operations, multiple shareholders</li>
          </ul>
        </div>

        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-3'>Sole Proprietorship (&#44060;&#51064;&#49324;&#50629;&#51088;)</h5>
          <p className='text-sm mb-3'>Individual Business Registration</p>
          <ul className='text-sm space-y-2'>
            <li><span className='font-bold'>Capital:</span> None required</li>
            <li><span className='font-bold'>Setup Time:</span> 1&ndash;2 weeks</li>
            <li><span className='font-bold'>Cost:</span> &#8361;100,000&ndash;500,000</li>
            <li><span className='font-bold'>Liability:</span> Unlimited personal</li>
            <li><span className='font-bold'>Tax:</span> Income tax 6&ndash;45% (progressive)</li>
            <li><span className='font-bold'>Best For:</span> Small roasters, individual importers</li>
          </ul>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Registration Steps</h4>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <ol className='space-y-3 text-sm list-decimal ml-5'>
          <li><span className='font-bold'>Business Name Registration</span> with local district office</li>
          <li><span className='font-bold'>Business Registration (&#49324;&#50629;&#51088;&#46321;&#47197;)</span> with National Tax Service; receive business registration number</li>
          <li><span className='font-bold'>MFDS Food Import License</span> (&#49688;&#51077;&#49885;&#54408;&#54032;&#47588;&#50629;) application</li>
          <li><span className='font-bold'>VAT Registration</span> with NTS for input tax credit eligibility</li>
          <li><span className='font-bold'>UNI-PASS Account</span> registration with Korea Customs</li>
          <li><span className='font-bold'>Bank Account</span> for customs duty and VAT payments</li>
        </ol>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold mb-3'>Foreign Company Options:</p>
        <ul className='text-sm space-y-2'>
          <li>&#8226; <span className='font-bold'>Branch Office:</span> Register a Korean branch of the foreign entity</li>
          <li>&#8226; <span className='font-bold'>Local Distributor:</span> Partner with an established Korean importer (simpler entry, lower margin)</li>
          <li>&#8226; <span className='font-bold'>Korean Subsidiary:</span> Establish a wholly-owned Korean company</li>
        </ul>
        <p className='text-xs mt-3 italic'>
          Most Ethiopian exporters work through established Korean importers initially, then consider direct operations once volume justifies the setup investment.
        </p>
      </div>

      {/* SECTION 10: MARKET INSIGHTS */}
      <h3 id="market-insights" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineMapPin className='text-amber-600' />
        10. Korean Coffee Market Trends
      </h3>

      <p className='my-4'>
        Understanding Korean coffee culture is essential for positioning Ethiopian coffee effectively.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Trends Shaping the Market (2024&ndash;2026)</h4>

      <div className='space-y-4 my-6'>
        <div className='border-l-4 border-green-500 pl-4'>
          <h5 className='font-bold'>Single-Origin Specialty Growth</h5>
          <p className='text-sm'>Korean consumers increasingly seek single-origin coffees with clear provenance. Ethiopian Yirgacheffe, Guji, and Sidamo lots appear on specialty menus across Seoul and Busan. Premium retail bags (200&ndash;250g) sell at &#8361;15,000&ndash;35,000 ($11&ndash;26 USD).</p>
        </div>

        <div className='border-l-4 border-blue-500 pl-4'>
          <h5 className='font-bold'>Third-Wave Cafe Proliferation</h5>
          <p className='text-sm'>Independent specialty cafes are expanding beyond Seoul into Busan, Daegu, Jeju, and Gangneung. These operators prioritize quality over volume and source directly from origin when possible, creating opportunities for Ethiopian exporters with sample programs.</p>
        </div>

        <div className='border-l-4 border-purple-500 pl-4'>
          <h5 className='font-bold'>Home Brewing and E-Commerce</h5>
          <p className='text-sm'>Korean consumers invest heavily in home equipment: espresso machines, hand grinders, pour-over kits. Online specialty coffee sales are growing over 25% annually. Ethiopian single-origin beans perform well as premium retail products in this channel.</p>
        </div>

        <div className='border-l-4 border-amber-500 pl-4'>
          <h5 className='font-bold'>Light-Roast Dominance in Specialty</h5>
          <p className='text-sm'>The Korean specialty palate favors City to Full City roasts that showcase origin characteristics. Ethiopian coffees&apos; floral, citrus, and stone-fruit notes flourish at these profiles, making them a natural fit for Korean roasters.</p>
        </div>

        <div className='border-l-4 border-red-500 pl-4'>
          <h5 className='font-bold'>Direct-Origin Sourcing</h5>
          <p className='text-sm'>Major Korean roasters are building direct sourcing relationships with exporters and cooperatives. Transparency and traceability documentation carry increasing weight in purchasing decisions. Events like Coffee Expo Seoul (annual) and the Korea National Barista Championship provide networking access.</p>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Notable Korean Specialty Roasters</h4>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <p className='text-sm mb-3'>Korean roasters known for sourcing Ethiopian coffee:</p>
        <ul className='text-sm space-y-2 grid md:grid-cols-2 gap-x-6'>
          <li>&#8226; <span className='font-bold'>Fritz Coffee Company</span> (Seoul)</li>
          <li>&#8226; <span className='font-bold'>Anthracite Coffee Roasters</span> (Seoul/Busan)</li>
          <li>&#8226; <span className='font-bold'>Coffee Libre</span> (Seoul)</li>
          <li>&#8226; <span className='font-bold'>Terarosa Coffee</span> (Gangneung)</li>
          <li>&#8226; <span className='font-bold'>Felt Coffee</span> (Seoul)</li>
          <li>&#8226; <span className='font-bold'>Momos Coffee</span> (Seoul)</li>
          <li>&#8226; <span className='font-bold'>Namusairo</span> (Seoul)</li>
          <li>&#8226; <span className='font-bold'>Coffee Lab</span> (Multiple cities)</li>
        </ul>
      </div>

      {/* SECTION 11: WORKING WITH EXPORTERS */}
      <h3 id="working-with-exporters" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCheckCircle className='text-amber-600' />
        11. Working with Ethiopian Exporters
      </h3>

      <p className='my-4'>
        Reliable exporter relationships are critical for consistent supply. Here is what Korean importers should verify.
      </p>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <h5 className='font-bold mb-3'>Exporter Evaluation Checklist</h5>
        <ul className='space-y-2 text-sm'>
          <li>&#10003; <span className='font-bold'>Export License:</span> Valid Ethiopian export license (verify through Ethiopian Coffee and Tea Authority)</li>
          <li>&#10003; <span className='font-bold'>Documentation:</span> Ability to provide all Korean-required certificates (COO, health, quality)</li>
          <li>&#10003; <span className='font-bold'>Quality Systems:</span> In-house cupping lab, sample roaster, documented QC procedures</li>
          <li>&#10003; <span className='font-bold'>Communication:</span> English proficiency, responsive to Korean time zone inquiries</li>
          <li>&#10003; <span className='font-bold'>Asia Experience:</span> Prior shipments to Korea, Japan, or other Asian destinations</li>
          <li>&#10003; <span className='font-bold'>Traceability:</span> Farm-level or cooperative-level traceability with supporting documentation</li>
          <li>&#10003; <span className='font-bold'>Sample Program:</span> Pre-shipment samples for cupping approval before container commitment</li>
          <li>&#10003; <span className='font-bold'>Payment Terms:</span> Flexible options (LC, TT, or escrow through trade platforms)</li>
        </ul>
      </div>

      {/* SECTION 12: SUCCESS TIPS */}
      <h3 id="success-tips" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineStar className='text-amber-600' />
        12. Market Entry Tips
      </h3>

      <div className='space-y-4 my-6'>
        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineClipboardDocumentList className='text-blue-600' /> Start with Test Orders</h5>
          <p className='text-sm'>Begin with shared container space (5&ndash;10 bags) to validate market demand before committing to full containers. Several Korean importers and freight consolidators offer LCL options.</p>
        </div>

        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineUsers className='text-green-600' /> Engage Experienced Customs Brokers</h5>
          <p className='text-sm'>A broker experienced in coffee imports handles MFDS pre-reports, Korean translations, and UNI-PASS filings efficiently. This prevents delays on first shipments when inspection risk is highest.</p>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineGlobeAlt className='text-amber-600' /> Invest in Korean-Language Materials</h5>
          <p className='text-sm'>Korean consumers respond to origin stories and transparency. Korean-language product cards, Instagram content, and packaging that communicates Ethiopian terroir create measurable uplift in sell-through rates for roaster partners.</p>
        </div>

        <div className='bg-purple-50 p-5 rounded-lg border border-purple-200'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineMagnifyingGlass className='text-purple-600' /> Target Specialty First</h5>
          <p className='text-sm'>Ethiopian coffee performs best in the specialty segment: independent cafes, online DTC roasters, and premium retail. Focus on quality-conscious buyers willing to pay a premium, rather than commodity-volume channels.</p>
        </div>

        <div className='bg-red-50 p-5 rounded-lg border border-red-200'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineClock className='text-red-600' /> Plan Around Harvest Timing</h5>
          <p className='text-sm'>Ethiopian harvest runs October through February. Orders placed November through March give freshest arrivals. Plan inventory to cover the lean months. See our <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian Coffee Harvest Calendar</Link> for region-by-region timing.</p>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineDocumentText className='text-gray-600' /> Get Documentation Right</h5>
          <p className='text-sm'>MFDS delays are almost always due to incomplete or incorrectly translated documentation. Triple-check certificates, ensure Korean translations are accurate, and maintain digital backups of every document.</p>
        </div>
      </div>

      {/* CONCLUSION */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6'>
        Import Ethiopian Coffee to South Korea: Market Summary
      </h3>

      <p className='my-4'>
        South Korea offers one of Asia&apos;s strongest commercial opportunities for Ethiopian specialty coffee. Zero import duty, a recoverable 10% VAT, efficient port infrastructure at Busan and Incheon, and a consumer market that values light-roast, single-origin coffees align directly with Ethiopian coffee&apos;s strengths.
      </p>

      <p className='my-4'>
        The core requirements are clear: MFDS food import registration, IFIMS pre-reporting for every shipment, PLS-compliant pesticide residue testing, and Korean-language documentation. Once the regulatory framework is in place, importing Ethiopian coffee to South Korea is streamlined and cost-effective, with net landed costs approximately 4% above FOB for registered businesses.
      </p>

      <p className='my-4'>
        Korean importers and roasters seeking Ethiopian specialty coffee should start with targeted test orders, validate demand in the specialty channel, and build exporter relationships that provide the traceability and documentation Korean consumers expect.
      </p>

      <div className='bg-gray-100 p-6 rounded-lg my-8 border border-gray-300'>
        <h4 className='font-bold text-lg mb-3'>Key Takeaways</h4>
        <ul className='space-y-2 text-sm'>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Zero import duty</span> on green coffee makes Korea cost-competitive</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>10% VAT is fully recoverable</span> for registered businesses</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>MFDS registration</span> required before first shipment; IFIMS pre-report for every shipment</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Positive List System (PLS)</span> sets 0.01 ppm default for unlisted pesticides</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Busan handles ~70%</span> of Korea&apos;s coffee imports with the lowest port fees</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Transit: 19&ndash;27 days</span> door-to-door from Ethiopia</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Korean consumers prefer</span> light roasts, single-origin, floral and fruity profiles</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Net landed cost</span> approximately 4% above FOB for VAT-registered importers</li>
        </ul>
      </div>

      {/* FAQ SECTION */}
      <section className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions About Importing Ethiopian Coffee to South Korea</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Is there import duty on Ethiopian coffee in South Korea?</h4>
            <p className="text-sm text-gray-600">No. Green coffee beans (HS 0901.11) enter South Korea at a 0% duty rate under the WTO MFN tariff schedule. A 10% VAT applies at import but is fully recoverable as an input tax credit for VAT-registered businesses, making the effective tax cost zero for commercial importers.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What are MFDS food safety requirements for importing coffee?</h4>
            <p className="text-sm text-gray-600">Importers must register as a food import business with MFDS, file an IFIMS pre-import report for every shipment before cargo arrival, and comply with Korean food safety standards. These include aflatoxin limits (10 ppb maximum) and the Positive List System for pesticide residues, which defaults to 0.01 ppm for unlisted substances.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How long does shipping from Ethiopia to South Korea take?</h4>
            <p className="text-sm text-gray-600">Ocean freight from Djibouti to Busan port typically takes 18 to 22 days via the Suez Canal route. Including inland transport from Addis Ababa to Djibouti, MFDS clearance, and customs processing, total door-to-door delivery is approximately 19 to 27 days under normal conditions.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What documents does the Ethiopian exporter provide?</h4>
            <p className="text-sm text-gray-600">The exporter provides a commercial invoice, packing list, Certificate of Origin from the Ethiopian Chamber of Commerce, health certificate from the Ethiopian Coffee Authority, ECX quality grade certificate, fumigation certificate if using wooden pallets, and a non-GMO declaration. All must align with details in the IFIMS pre-report.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Which Ethiopian coffee origins are most popular in South Korea?</h4>
            <p className="text-sm text-gray-600">Korean specialty consumers prefer light-roast, fruit-forward coffees. Washed Yirgacheffe lots (floral, citrus), natural Guji lots (berry, stone fruit), and washed Sidamo (clean, balanced citrus) are the most requested Ethiopian origins across Seoul and Busan specialty cafes and roasters.</p>
          </div>
        </div>
      </section>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Ethiopian Specialty Coffee for the Korean Market</h4>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Import and Export PLC</span> ships specialty-grade Ethiopian coffee to Korea with full MFDS-compliant documentation. Request pre-shipment samples, review our current offer sheet, or discuss your sourcing requirements.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Request Samples</Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>How to Order</Link>
        </div>
      </div>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Import Guides by Market</h4>
            <ul className='space-y-1 text-sm'>
              <li>&#8226; <Link href='/insights/importing-ethiopian-coffee-to-japan' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to Japan</Link></li>
              <li>&#8226; <Link href='/insights/importing-ethiopian-coffee-to-australia' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to Australia</Link></li>
              <li>&#8226; <Link href='/insights/how-to-import-ethiopian-coffee-to-usa' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to the United States</Link></li>
              <li>&#8226; <Link href='/insights/importing-ethiopian-coffee-to-uae' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to UAE</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>European Markets</h4>
            <ul className='space-y-1 text-sm'>
              <li>&#8226; <Link href='/insights/importing-ethiopian-coffee-to-germany' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to Germany</Link></li>
              <li>&#8226; <Link href='/insights/importing-ethiopian-coffee-to-uk' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to UK</Link></li>
              <li>&#8226; <Link href='/insights/importing-ethiopian-coffee-to-holland' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to Holland</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&#8226; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>&#8226; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts &amp; Payment Terms</Link></li>
              <li>&#8226; <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality &amp; Origins</h4>
            <ul className='space-y-1 text-sm'>
              <li>&#8226; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process</Link></li>
              <li>&#8226; <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Harvest Calendar</Link></li>
              <li>&#8226; <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC. Covers regulations, documentation, logistics, cost analysis, and market strategy for importing Ethiopian coffee to South Korea.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> ·{' '}
          <Link href='/ethiopian-coffee-exporter' className='underline'>Export Services</Link> ·{' '}
          <Link href='/about' className='underline'>About</Link> ·{' '}
          <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

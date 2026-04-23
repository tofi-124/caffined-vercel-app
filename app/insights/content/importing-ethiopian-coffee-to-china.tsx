import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineGlobeAlt,
  HiOutlineCurrencyDollar,
  HiOutlineShieldCheck,
  HiOutlineDocumentText,
  HiOutlineTruck,
  HiOutlineCheckCircle,
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
  HiOutlineScale
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function ImportingEthiopianCoffeeToChina({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        GACC registration, customs clearance, zero-tariff access, shipping logistics, landed cost analysis, and market entry strategy for Ethiopian specialty coffee in China
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md bg-gray-200 flex items-center justify-center'>
          {/* TODO: Replace placeholder with actual hero image */}
          {/* Expected path: /images/insights/importing-ethiopian-coffee-to-china.webp */}
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Importing Ethiopian green coffee to China - Chinese specialty roaster cupping Ethiopian single-origin beans'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Import Guide / China Market / Ethiopian Coffee Export / B2B Intelligence</span>
      </div>

      {/* Key Takeaway Box */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          China&apos;s coffee market exceeded RMB 369 billion ($51.8 billion) in 2025, with 63 new cafes opening daily. Ethiopian green coffee enters China at zero tariff under the LDC duty-free initiative, but exporters must complete GACC registration (medium-risk category for unroasted beans), which takes 3 to 6 months and requires endorsement by Ethiopia&apos;s competent authority. Ocean freight from Djibouti to Shanghai takes 18 to 24 days. Ethiopia exported over 11,000 tonnes of coffee to China in 2023/24, a tenfold increase in a decade, and the growth trajectory continues as Chinese specialty roasters seek floral, fruit-forward single origins.
        </p>
      </div>

      {/* Table of Contents */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#china-market-opportunity' className='text-amber-700 hover:underline'>1. Why Chinese Importers Source Ethiopian Coffee</a></li>
          <li><a href='#gacc-registration' className='text-amber-700 hover:underline'>2. GACC Registration for Ethiopian Coffee</a></li>
          <li><a href='#food-safety-standards' className='text-amber-700 hover:underline'>3. Chinese Food Safety Standards</a></li>
          <li><a href='#customs-clearance' className='text-amber-700 hover:underline'>4. China Customs Clearance Process</a></li>
          <li><a href='#duties-taxes' className='text-amber-700 hover:underline'>5. Import Duties, VAT, and Tariff Structure</a></li>
          <li><a href='#documentation' className='text-amber-700 hover:underline'>6. Required Documentation</a></li>
          <li><a href='#shipping-logistics' className='text-amber-700 hover:underline'>7. Shipping Routes and Port Logistics</a></li>
          <li><a href='#landed-cost' className='text-amber-700 hover:underline'>8. Landed Cost Breakdown</a></li>
          <li><a href='#buyer-segments' className='text-amber-700 hover:underline'>9. Chinese Coffee Buyer Segments</a></li>
          <li><a href='#market-entry' className='text-amber-700 hover:underline'>10. Market Entry Strategy</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>11. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRODUCTION */}
      <p className='text-lg leading-relaxed my-4'>
        China&apos;s coffee consumption is growing faster than any other major market. Average per-capita intake sits at roughly 22 cups per year, compared to 400+ cups in the United States, Germany, and Japan. That gap represents an enormous runway for growth. For exporters aiming to <span className='font-bold'>import Ethiopian coffee to China</span>, the regulatory path is more complex than most markets, but the reward is access to 1.4 billion consumers and a specialty segment expanding at double-digit rates.
      </p>

      <p className='my-4'>
        Ethiopia exported over 11,000 tonnes of green coffee to China in the 2023/24 fiscal year, generating more than $70 million in revenue. That volume represents a tenfold increase over the past decade. For a deeper analysis of the bilateral trade dynamics, market size data, and the birr-yuan currency swap, see our <Link href='/insights/ethiopia-china-coffee-trade-partnership' className='text-amber-700 hover:underline'>Ethiopia-China Coffee Trade Partnership</Link> article.
      </p>

      <p className='my-4'>
        This guide focuses on the practical mechanics: how to register with GACC, clear customs, comply with Chinese food safety standards, ship from Djibouti, and calculate the true landed cost of Ethiopian specialty coffee entering China.
      </p>

      {/* SECTION 1: CHINA MARKET OPPORTUNITY */}
      <h3 id='china-market-opportunity' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineArrowTrendingUp className='w-8 h-8 text-amber-600' />
        1. Why Chinese Importers Source Ethiopian Coffee
      </h3>

      <p className='my-4'>
        China&apos;s domestic coffee market exceeded RMB 369 billion ($51.8 billion) in 2025, up from RMB 313 billion in 2024. Green coffee imports reached $5.47 billion in 2025 and are projected to hit $7.72 billion by 2031 at a 5.89% CAGR. The infrastructure fueling this demand is visible on every city block: Luckin Coffee operates over 26,000 stores, Cotti Coffee runs 15,000 outlets, and an average of 63 new coffee shops open in China every day.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Ethiopian Coffee&apos;s Competitive Position</h4>

      <p className='my-4'>
        Chinese specialty roasters and cafe chains favor Ethiopian coffee for three reasons that align with consumer preferences in Shanghai, Shenzhen, Chengdu, and Beijing&apos;s growing specialty scenes:
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Flavor Differentiation</h4>
          <p className='text-sm text-gray-700'>
            Chinese consumers in the specialty segment increasingly prefer light-roast, fruit-forward coffees. <Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline'>Yirgacheffe</Link> washed lots with jasmine and bergamot notes and <Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline'>Guji</Link> naturals with blueberry and tropical fruit profiles command premiums on specialty menus across first-tier cities.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Origin Story Appeal</h4>
          <p className='text-sm text-gray-700'>
            Ethiopian coffee carries intrinsic marketing value as the birthplace of Arabica. Chinese consumers, particularly millennials and Gen Z driving specialty consumption, respond to narrative-rich origins. For context on Ethiopia&apos;s heritage positioning, see our <Link href='/insights/ethiopia-coffee-origin-birthplace' className='text-amber-700 hover:underline'>Ethiopia: Birthplace of Coffee</Link> article.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Zero-Tariff Access</h4>
          <p className='text-sm text-gray-700'>
            Ethiopia qualifies for zero-tariff treatment under China&apos;s duty-free initiative for least-developed countries. Previous rates of 8 to 15% on African green coffee have been eliminated, making Ethiopian beans price-competitive against Brazilian and Colombian origins at the port.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>E-Commerce Growth Channel</h4>
          <p className='text-sm text-gray-700'>
            Over 100,000 coffee stores are listed on Taobao and Tmall. Online coffee sales grew 25.7% year-on-year in 2024. Ethiopian single-origin beans sell well as premium offerings on platforms like Tmall, JD.com, and specialty-focused apps like Manner and %Arabica.
          </p>
        </div>
      </div>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Buyer Scenario: Shanghai Specialty Roaster</h4>
        <p className='text-sm text-gray-700'>
          A mid-size Shanghai roaster processing 15 tonnes monthly for 40 retail locations sources three Ethiopian origins: Yirgacheffe G1 washed for pour-over, Guji G1 natural for signature espresso blends, and <Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline'>Sidamo</Link> G2 washed for their RTD (ready-to-drink) cold brew line. Their first Ethiopian container (19.2 MT) reduced per-kg costs by 18% versus buying through a Hong Kong intermediary, and delivery-to-door via Shanghai port took 26 days from order confirmation.
        </p>
      </div>

      {/* SECTION 2: GACC REGISTRATION */}
      <h3 id='gacc-registration' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineShieldCheck className='w-8 h-8 text-amber-600' />
        2. GACC Registration for Ethiopian Coffee
      </h3>

      <p className='my-4'>
        The General Administration of Customs of China (GACC) requires all overseas food manufacturers and exporters to register before their products can enter China. Green (unroasted) coffee beans are classified as a <span className='font-bold'>medium-risk food product</span> under GACC Decree 248, which means the registration process is more involved than low-risk goods but less burdensome than high-risk categories like meat and dairy.
      </p>

      <div className='bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg my-6'>
        <h4 className='font-bold text-lg mb-3'>Regulatory Update: GACC Order No. 280</h4>
        <p className='text-sm text-gray-700'>
          On October 14, 2025, GACC published Regulation No. 280, which replaces the current Ordinance No. 248. The new regulation takes effect June 1, 2026. Key changes include expanded product categories requiring registration and updated document requirements. Exporters should verify current requirements with their registration agent before starting the process.
        </p>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Registration Requirements for Ethiopian Coffee Exporters</h4>

      <p className='my-4'>
        Ethiopia is approved as an origin for exporting green coffee beans directly to China. The GACC maintains an explicit list of approved countries for unroasted coffee, and Ethiopia is included. However, each exporting facility must still complete the registration process individually.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Registration Step</th>
              <th className='p-3 text-left font-bold'>Description</th>
              <th className='p-3 text-left font-bold'>Timeline</th>
              <th className='p-3 text-left font-bold'>Cost (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>1. Exporter Registration</td>
              <td className='p-3'>Register as overseas food exporter/trader via GACC Single Window</td>
              <td className='p-3'>1 to 2 weeks</td>
              <td className='p-3'>$500</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>2. Manufacturer Registration</td>
              <td className='p-3'>Register processing/dry-milling facility (medium-risk category); requires competent authority endorsement</td>
              <td className='p-3'>3 to 6 months</td>
              <td className='p-3'>$2,000 to $5,000</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>3. Chinese Labeling Review</td>
              <td className='p-3'>CIQ inspection of Chinese-language product labels</td>
              <td className='p-3'>2 to 4 weeks</td>
              <td className='p-3'>$400</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>4. Product Testing</td>
              <td className='p-3'>CIQ lab testing for mycotoxins, pesticide residues, and contaminants</td>
              <td className='p-3'>2 to 4 weeks</td>
              <td className='p-3'>$1,500 to $3,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Medium-Risk Registration Process</h4>

      <p className='my-4'>
        As a medium-risk food product, unroasted coffee requires the following for GACC-CNCA manufacturer registration:
      </p>

      <ul className='list-disc pl-6 space-y-2 my-4 text-sm'>
        <li><span className='font-semibold'>Competent authority endorsement:</span> The Ethiopian Coffee and Tea Authority (ECTA) or relevant government body must review, endorse, and recommend the facility to GACC.</li>
        <li><span className='font-semibold'>HACCP or GMP certification:</span> The processing facility must maintain a food safety and sanitation management system meeting Chinese requirements (GB/T 27341 or equivalent).</li>
        <li><span className='font-semibold'>CIFER portal submission:</span> Registration is submitted through China&apos;s CIFER (China Import Food Enterprise Registration) portal, which replaced the previous single-window system for food registration.</li>
        <li><span className='font-semibold'>Registration validity:</span> GACC registration is valid for five years and must be renewed before expiration.</li>
        <li><span className='font-semibold'>GACC number on labels:</span> The assigned GACC registration number must be printed on all Chinese-language labels of the imported product.</li>
      </ul>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>What Ethiopian Exporters Handle</h4>
        <p className='text-sm text-gray-700'>
          When you source from a GACC-registered Ethiopian exporter, the registration burden sits with the exporter, not the Chinese importer. At Ethio Coffee Import and Export PLC, we maintain the required HACCP documentation, coordinate with ECTA for endorsement, and ensure our GACC registration number is printed on every shipping label. Chinese importers should verify their Ethiopian supplier&apos;s GACC registration status before signing a contract. You can check registration status on the GACC website (english.customs.gov.cn) or through a licensed customs broker.
        </p>
      </div>

      {/* SECTION 3: FOOD SAFETY STANDARDS */}
      <h3 id='food-safety-standards' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        3. Chinese Food Safety Standards for Green Coffee
      </h3>

      <p className='my-4'>
        All food products entering China must comply with the national food safety standards (GB standards). For green coffee beans, the most relevant regulations cover contaminants, mycotoxins, pesticide residue limits, and food additives. CIQ (China Inspection and Quarantine) inspectors test incoming shipments against these standards at port.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Standard</th>
              <th className='p-3 text-left font-bold'>Scope</th>
              <th className='p-3 text-left font-bold'>Key Limits for Coffee</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>GB 2761-2017</td>
              <td className='p-3'>Mycotoxin limits</td>
              <td className='p-3'>Ochratoxin A (OTA): 5 &mu;g/kg for roasted coffee; limit applies at import for green beans</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>GB 2762-2017</td>
              <td className='p-3'>Contaminant limits</td>
              <td className='p-3'>Lead, cadmium, arsenic, mercury limits; lead max 0.5 mg/kg for beans</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>GB 2763-2021</td>
              <td className='p-3'>Pesticide residue limits</td>
              <td className='p-3'>Maximum residue limits (MRLs) for 500+ pesticides; default limit 0.01 mg/kg if not specified</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>GB 2760-2014</td>
              <td className='p-3'>Food additive use</td>
              <td className='p-3'>Not directly applicable to green beans (no additives), but inspectors verify no prohibited substances</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>GB 14881-2013</td>
              <td className='p-3'>Hygienic specification for food production</td>
              <td className='p-3'>General production hygiene requirements for the exporting facility</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Ethiopian coffee has a strong compliance track record with these standards. The high altitude, predominantly shade-grown farming systems, and limited agrochemical use across Ethiopia&apos;s smallholder farms result in naturally low pesticide residues. For details on Ethiopian coffee&apos;s agricultural practices, see our <Link href='/insights/coffee-is-agriculture-production-farming' className='text-amber-700 hover:underline'>Ethiopian Coffee Agriculture</Link> guide.
      </p>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700'>
          <span className='font-semibold'>Practical tip:</span> Request a pre-shipment lab test from your Ethiopian exporter that covers OTA, lead, and pesticide residue panels matching GB 2761/2762/2763 specifications. Having test results ready before the shipment arrives at a Chinese port significantly reduces CIQ clearance time.
        </p>
      </div>

      {/* SECTION 4: CUSTOMS CLEARANCE */}
      <h3 id='customs-clearance' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineDocumentText className='w-8 h-8 text-amber-600' />
        4. China Customs Clearance Process
      </h3>

      <p className='my-4'>
        China Customs clearance for green coffee follows a structured process managed through the GACC&apos;s electronic declaration system. Chinese importers (or their licensed customs brokers) file declarations through the International Trade Single Window platform (singlewindow.cn).
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Step-by-Step Clearance Process</h4>

      <ol className='list-decimal pl-6 space-y-3 my-4 text-sm'>
        <li><span className='font-semibold'>Pre-arrival declaration:</span> The Chinese importer or customs broker submits an electronic customs declaration including HS code (0901.11 for green coffee, not decaffeinated), GACC registration number, and all required documents.</li>
        <li><span className='font-semibold'>CIQ inspection request:</span> The importer files a CIQ inspection application with the local customs office at the port of entry. This triggers document review and potential physical inspection.</li>
        <li><span className='font-semibold'>Document verification:</span> Customs officers verify that the exporter&apos;s GACC registration is valid and active, all documents match the declaration, and Chinese labels meet GB labeling standards.</li>
        <li><span className='font-semibold'>Physical inspection and sampling:</span> CIQ may take samples for laboratory testing (mycotoxins, pesticides, contaminants). Not every shipment is sampled; risk-based selection applies.</li>
        <li><span className='font-semibold'>Duty assessment and payment:</span> Customs calculates any applicable duties and VAT. For Ethiopian green coffee, import duty is zero under LDC treatment; 9% VAT applies.</li>
        <li><span className='font-semibold'>Release:</span> Once duties/taxes are paid and inspection is cleared, goods are released from the bonded area to the importer&apos;s warehouse.</li>
      </ol>

      <p className='my-4'>
        Typical customs clearance for green coffee takes 3 to 7 business days when documents are complete and no sampling is required. If CIQ orders laboratory testing, add 7 to 14 days for results.
      </p>

      {/* SECTION 5: DUTIES, TAXES */}
      <h3 id='duties-taxes' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='w-8 h-8 text-amber-600' />
        5. Import Duties, VAT, and Tariff Structure
      </h3>

      <p className='my-4'>
        China&apos;s tariff treatment of Ethiopian green coffee is among the most favorable globally, thanks to the zero-tariff initiative for least-developed countries (LDCs).
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Tax Component</th>
              <th className='p-3 text-left font-bold'>Rate</th>
              <th className='p-3 text-left font-bold'>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Import Duty (MFN)</td>
              <td className='p-3'>8%</td>
              <td className='p-3'>Standard most-favored-nation rate for HS 0901.11</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Import Duty (Ethiopia)</td>
              <td className='p-3'>0%</td>
              <td className='p-3'>Zero-tariff under LDC duty-free initiative; requires Certificate of Origin</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>VAT</td>
              <td className='p-3'>9%</td>
              <td className='p-3'>Applied on CIF value + duty; recoverable for registered VAT businesses</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Consumption Tax</td>
              <td className='p-3'>0%</td>
              <td className='p-3'>No consumption tax applies to green coffee beans</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        The VAT formula is: VAT = (CIF value + import duty) &times; 9%. Since Ethiopian coffee enters duty-free, VAT is calculated directly on the CIF value. For registered businesses, the 9% input VAT is fully deductible against output VAT on domestic sales.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Certificate of Origin Requirement</h4>
        <p className='text-sm text-gray-700'>
          To claim zero-tariff treatment, the Chinese importer must present a valid Certificate of Origin (Form A) issued by the Ethiopian Revenues and Customs Authority or an authorized chamber of commerce. Without this certificate, the standard MFN rate of 8% applies. Ethiopian exporters should include the original Certificate of Origin with the shipping documents. A customs broker in China will file it electronically through the Single Window system.
        </p>
      </div>

      {/* SECTION 6: DOCUMENTATION */}
      <h3 id='documentation' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineClipboardDocumentList className='w-8 h-8 text-amber-600' />
        6. Required Documentation
      </h3>

      <p className='my-4'>
        Complete, accurate documentation is the most common point of failure for first-time shipments to China. Missing documents or format errors cause delays of 2 to 4 weeks. Below is the full documentation checklist organized by issuing party.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Documents from the Ethiopian Exporter</h4>

      <ul className='list-disc pl-6 space-y-2 my-4 text-sm'>
        <li><span className='font-semibold'>Commercial invoice:</span> Showing seller, buyer, HS code (0901.11), quantity, unit price, total value, Incoterms (typically FOB Djibouti or CIF Chinese port)</li>
        <li><span className='font-semibold'>Packing list:</span> Bag count, net weight per bag, gross weight, container number</li>
        <li><span className='font-semibold'>Bill of lading (B/L):</span> Original ocean B/L or sea waybill, with consignee matching the registered Chinese importer</li>
        <li><span className='font-semibold'>Certificate of Origin (Form A):</span> Required for zero-tariff claim; issued by Ethiopian Revenues and Customs Authority</li>
        <li><span className='font-semibold'>Phytosanitary certificate:</span> Issued by the Ethiopian Plant Health Regulatory Directorate, confirming the shipment is free of quarantine pests</li>
        <li><span className='font-semibold'>CLU quality certificate:</span> Issued by the Coffee Liquoring Unit in Addis Ababa, confirming grade, cup quality, and moisture content</li>
        <li><span className='font-semibold'>Weight certificate:</span> From an authorized surveyor in Djibouti or Addis Ababa</li>
        <li><span className='font-semibold'>ICO Certificate of Origin:</span> International Coffee Organization certificate confirming origin country</li>
        <li><span className='font-semibold'>GACC registration number:</span> Must appear on product labels and be included in the customs declaration</li>
      </ul>

      <h4 className='text-xl font-bold mt-8 mb-4'>Documents from the Chinese Importer</h4>

      <ul className='list-disc pl-6 space-y-2 my-4 text-sm'>
        <li><span className='font-semibold'>Customs declaration form:</span> Filed electronically through singlewindow.cn</li>
        <li><span className='font-semibold'>CIQ inspection application:</span> Filed with the local customs/CIQ office at the port of entry</li>
        <li><span className='font-semibold'>Chinese-language labels:</span> Pre-approved labels meeting GB 7718 (general food labeling) requirements, including GACC registration number, origin, ingredients, net weight, production date, and shelf life</li>
        <li><span className='font-semibold'>Import food business license:</span> The Chinese importing company&apos;s business registration and food import qualification</li>
        <li><span className='font-semibold'>Quarantine permit (if required):</span> Some ports require a quarantine permit for plant-origin products; check with your local CIQ office</li>
      </ul>

      <p className='my-4'>
        For a broader overview of Ethiopian export documentation (CLU, customs clearance, export permits), see our <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process</Link> guide.
      </p>

      {/* SECTION 7: SHIPPING LOGISTICS */}
      <h3 id='shipping-logistics' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTruck className='w-8 h-8 text-amber-600' />
        7. Shipping Routes and Port Logistics
      </h3>

      <p className='my-4'>
        Ethiopian coffee ships from the Port of Djibouti to Chinese ports. The standard route passes through the Red Sea, Suez Canal, and across the Indian Ocean to Southeast Asia and then to Chinese ports. Some carriers route via the Strait of Malacca.
      </p>

      <p className='my-4'>
        Buyers choosing between direct mainland entry and an ASEAN staging model should compare this route with our <Link href='/insights/importing-ethiopian-coffee-to-singapore' className='text-amber-700 hover:underline font-semibold'>Singapore import guide</Link>. Singapore usually makes more sense for mixed-origin warehousing and regional redistribution, while direct China entry is stronger when the coffee is already committed to one importer and one customs process.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Chinese Port</th>
              <th className='p-3 text-left font-bold'>Transit Time (Djibouti)</th>
              <th className='p-3 text-left font-bold'>Key Market Served</th>
              <th className='p-3 text-left font-bold'>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Shanghai (Yangshan)</td>
              <td className='p-3'>18 to 24 days</td>
              <td className='p-3'>East China (Shanghai, Jiangsu, Zhejiang)</td>
              <td className='p-3'>World&apos;s largest container port; most carrier options, best rates</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Shenzhen (Yantian)</td>
              <td className='p-3'>16 to 22 days</td>
              <td className='p-3'>South China (Guangdong, Pearl River Delta)</td>
              <td className='p-3'>Strong for Shenzhen/Guangzhou roasters; growing specialty hub</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Qingdao</td>
              <td className='p-3'>20 to 26 days</td>
              <td className='p-3'>North China (Shandong, Hebei, Beijing/Tianjin corridor)</td>
              <td className='p-3'>Less congested; good for northern distribution</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Xiamen</td>
              <td className='p-3'>17 to 23 days</td>
              <td className='p-3'>Southeast China (Fujian)</td>
              <td className='p-3'>Smaller volume but proximity to tea-to-coffee crossover market</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Container Specifications</h4>

      <p className='my-4'>
        A standard 20-foot container (FCL) holds approximately 250 to 320 bags of green coffee (60 kg net each), totaling 15 to 19.2 metric tonnes. Ethiopian coffee is typically packed in jute bags with GrainPro hermetic liners for moisture protection during transit. For packaging specifications, see our <Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline'>Green Coffee Packaging Guide</Link>.
      </p>

      <p className='my-4'>
        For smaller volumes, LCL (less-than-container-load) consolidation is available through freight forwarders specializing in the Djibouti-to-China corridor, though per-kg costs are significantly higher. Details on FCL vs. LCL economics are covered in our <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Landed Cost Guide</Link>.
      </p>

      {/* SECTION 8: LANDED COST */}
      <h3 id='landed-cost' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        8. Landed Cost Breakdown
      </h3>

      <p className='my-4'>
        Below is a worked example for a 20-foot FCL (19.2 MT) of Ethiopian Yirgacheffe G1 washed coffee shipped FOB Djibouti to Shanghai. Prices reflect April 2026 market conditions.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Cost Component</th>
              <th className='p-3 text-left font-bold'>Per Kg (USD)</th>
              <th className='p-3 text-left font-bold'>Per Container (USD)</th>
              <th className='p-3 text-left font-bold'>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>FOB Djibouti (G1 Washed)</td>
              <td className='p-3'>$5.50 to $7.00</td>
              <td className='p-3'>$105,600 to $134,400</td>
              <td className='p-3'>Yirgacheffe G1 washed; Guji/Sidamo lower by $0.50 to $1.00/kg</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Ocean freight</td>
              <td className='p-3'>$0.12 to $0.18</td>
              <td className='p-3'>$2,300 to $3,500</td>
              <td className='p-3'>Djibouti to Shanghai; rates vary by carrier/season</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Marine insurance</td>
              <td className='p-3'>$0.02 to $0.03</td>
              <td className='p-3'>$380 to $575</td>
              <td className='p-3'>0.35% of CIF value (standard)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Import duty</td>
              <td className='p-3'>$0.00</td>
              <td className='p-3'>$0</td>
              <td className='p-3'>Zero under LDC treatment (with Certificate of Origin)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>VAT (9%)</td>
              <td className='p-3'>$0.51 to $0.65</td>
              <td className='p-3'>$9,750 to $12,460</td>
              <td className='p-3'>Recoverable for registered VAT businesses</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Port handling and CIQ</td>
              <td className='p-3'>$0.04 to $0.06</td>
              <td className='p-3'>$770 to $1,150</td>
              <td className='p-3'>Terminal handling, CIQ inspection fees, customs broker</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Inland transport</td>
              <td className='p-3'>$0.03 to $0.08</td>
              <td className='p-3'>$575 to $1,535</td>
              <td className='p-3'>Port to warehouse; depends on distance from port</td>
            </tr>
            <tr className='border-b border-gray-200 bg-dark text-primary'>
              <td className='p-3 font-bold'>Total Landed Cost</td>
              <td className='p-3 font-bold'>$6.22 to $8.00</td>
              <td className='p-3 font-bold'>$119,375 to $153,620</td>
              <td className='p-3 font-bold'>Before VAT recovery</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        After VAT recovery, the effective landed cost drops to $5.71 to $7.35 per kg. This makes Ethiopian specialty coffee highly competitive on a delivered-cost basis versus other origins subject to the 8% MFN duty.
      </p>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700'>
          <span className='font-semibold'>Cost comparison:</span> A Chinese importer sourcing Yirgacheffe G1 washed through a Hong Kong intermediary typically pays $7.50 to $9.50/kg landed. Sourcing direct from an Ethiopian exporter saves $1.50 to $2.50/kg, or $28,800 to $48,000 per container. The savings cover the entire GACC registration cost within the first shipment.
        </p>
      </div>

      {/* SECTION 9: BUYER SEGMENTS */}
      <h3 id='buyer-segments' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineUsers className='w-8 h-8 text-amber-600' />
        9. Chinese Coffee Buyer Segments
      </h3>

      <p className='my-4'>
        China&apos;s coffee market is highly segmented. Each buyer type has different volume needs, quality requirements, and sourcing behavior. Understanding these segments helps Ethiopian exporters position their offerings effectively.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Buyer Segment</th>
              <th className='p-3 text-left font-bold'>Volume Range</th>
              <th className='p-3 text-left font-bold'>Ethiopian Coffees Sought</th>
              <th className='p-3 text-left font-bold'>Sourcing Behavior</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Specialty Roasters (Tier 1 cities)</td>
              <td className='p-3'>5 to 50 MT/year</td>
              <td className='p-3'>Yirgacheffe G1 washed, Guji G1 natural, micro-lots</td>
              <td className='p-3'>Sample-driven; strong preference for traceability and washing station data</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Cafe Chains (Luckin-tier)</td>
              <td className='p-3'>100 to 500+ MT/year</td>
              <td className='p-3'>Sidamo G2 washed, Jimma G3/G4 for blends</td>
              <td className='p-3'>Price-sensitive; quarterly contracts; demand consistency across batches</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>E-Commerce Brands</td>
              <td className='p-3'>10 to 100 MT/year</td>
              <td className='p-3'>Single-origin Yirgacheffe, Guji for premium positioning</td>
              <td className='p-3'>Marketing-driven; need origin stories, cupping data for product listings</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Green Bean Traders/Distributors</td>
              <td className='p-3'>200 to 1,000+ MT/year</td>
              <td className='p-3'>Full range G1 to G4 across regions</td>
              <td className='p-3'>Multi-origin portfolios; bonded warehouse operations in Shanghai, Shenzhen</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>RTD/Cold Brew Manufacturers</td>
              <td className='p-3'>50 to 200 MT/year</td>
              <td className='p-3'>Sidamo/Limu washed for clean extraction profiles</td>
              <td className='p-3'>Consistency-focused; need stable supply year-round</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Buyer Scenario: Chengdu E-Commerce Coffee Brand</h4>
        <p className='text-sm text-gray-700'>
          A direct-to-consumer roaster based in Chengdu sells through Douyin (TikTok China) livestreams. They built their bestselling SKU around a Guji Hambella natural (SCA 87+) marketed as a &quot;blueberry bomb&quot; with origin video content filmed at the washing station. Monthly volume: 3 tonnes, sourced in two FCL shipments per year, stored at a bonded warehouse in Chengdu. The Guji natural&apos;s distinctive cup profile drives repeat purchases greater than 40% in their subscriber base.
        </p>
      </div>

      {/* SECTION 10: MARKET ENTRY STRATEGY */}
      <h3 id='market-entry' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBuildingStorefront className='w-8 h-8 text-amber-600' />
        10. Market Entry Strategy
      </h3>

      <p className='my-4'>
        Entering the Chinese market successfully requires more than regulatory compliance. The following strategic considerations apply specifically to Ethiopian coffee positioning in China.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Bilingual Trade Show Presence</h4>

      <p className='my-4'>
        China hosts several coffee trade events where Ethiopian exporters can meet qualified buyers directly. The Hotelex Shanghai (held annually in March/April) and the China International Coffee Exhibition in Guangzhou and Kunming draw thousands of B2B attendees. For trade show preparation, our <Link href='/insights/world-of-coffee-san-diego-2026-buyers-guide' className='text-amber-700 hover:underline'>World of Coffee 2026 guide</Link> covers general trade show strategy applicable to any global event.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Partner with a Licensed Chinese Importer</h4>

      <p className='my-4'>
        Foreign companies cannot directly import food into China. Every shipment must be consigned to a Chinese entity holding a valid food import business license. Options include:
      </p>

      <ul className='list-disc pl-6 space-y-2 my-4 text-sm'>
        <li><span className='font-semibold'>Direct importer relationship:</span> Find a licensed Chinese coffee company willing to import on their license. They handle customs, CIQ, and local distribution.</li>
        <li><span className='font-semibold'>Trading company / agent:</span> Engage a licensed food trading company that handles import formalities for a commission (typically 2 to 5% of CIF value).</li>
        <li><span className='font-semibold'>Free trade zone (FTZ) entity:</span> Establish a subsidiary in a Shanghai, Shenzhen, or Hainan FTZ. This provides your own import license with preferential tax treatment and bonded warehousing.</li>
      </ul>

      <h4 className='text-xl font-bold mt-8 mb-4'>Birr-Yuan Settlement</h4>

      <p className='my-4'>
        Ethiopia and China established a birr-yuan currency swap arrangement that enables bilateral trade settlement without converting to USD. While most coffee contracts are still quoted in USD, some large Chinese importers prefer RMB-denominated contracts. This can reduce exchange-rate risk for both parties. For details on the bilateral framework, see our <Link href='/insights/ethiopia-china-coffee-trade-partnership' className='text-amber-700 hover:underline'>Ethiopia-China Trade Partnership</Link> article.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Digital Marketing Channels</h4>

      <p className='my-4'>
        Chinese coffee buyers discover new origins through different channels than Western markets. Key platforms include WeChat (business communication and B2B networking), Alibaba/1688.com (wholesale sourcing), and Red (Xiaohongshu) for specialty coffee community engagement. Ethiopian exporters should prepare Mandarin-language offer sheets, cupping reports, and origin photography tailored to these platforms.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Certifications That Matter in China</h4>

      <p className='my-4'>
        Chinese specialty buyers increasingly request certifications, though the emphasis differs from Western markets:
      </p>

      <ul className='list-disc pl-6 space-y-2 my-4 text-sm'>
        <li><span className='font-semibold'>Organic (China organic / USDA / EU):</span> Premium positioning on e-commerce platforms; Chinese organic certification (CNCA-accredited body) provides the strongest marketing claim.</li>
        <li><span className='font-semibold'>Rainforest Alliance / UTZ:</span> Recognized by larger cafe chains with global sustainability commitments.</li>
        <li><span className='font-semibold'>SCA cupping scores:</span> Specialty roasters in first-tier cities expect cupping data with every offer. Scores of 85+ command significant premiums.</li>
      </ul>

      <p className='my-4'>
        For comprehensive certification guidance, see our <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Ethiopian Coffee Certifications Guide</Link>.
      </p>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Ethiopian Coffee for the Chinese Market</h4>
        <p className='my-2'>
          Ethio Coffee Import and Export PLC is a GACC-registered Ethiopian exporter with three decades of sourcing relationships across Yirgacheffe, Sidamo, Guji, Harar, Limu, and Jimma. We prepare export documentation, coordinate CLU inspection, and ship FOB Djibouti or CIF to Shanghai, Shenzhen, and Qingdao. Request samples to begin evaluating Ethiopian origins for your Chinese market program.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>
            View Offerings
          </Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            Request Samples
          </Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            How to Order
          </Link>
        </div>
      </div>

      {/* FAQ SECTION */}
      <section id='faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900'>Frequently Asked Questions</h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Is Ethiopian coffee eligible for zero tariff when imported to China?</h4>
            <p className='text-sm text-gray-600'>
              Yes. Ethiopia qualifies as a least-developed country under China&apos;s LDC duty-free initiative. Green coffee (HS 0901.11) enters at 0% import duty when accompanied by a valid Certificate of Origin (Form A). Without this certificate, the standard MFN rate of 8% applies. The 9% VAT is assessed separately and is recoverable for registered businesses.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How long does GACC registration take for an Ethiopian coffee exporter?</h4>
            <p className='text-sm text-gray-600'>
              Exporter registration through the GACC Single Window takes 1 to 2 weeks. The manufacturer/processor registration (required for unroasted coffee as a medium-risk product) takes 3 to 6 months because it requires competent authority endorsement from Ethiopia, HACCP documentation, and GACC review. Registration is valid for five years.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Can a foreign company import coffee directly into China?</h4>
            <p className='text-sm text-gray-600'>
              No. All food imports into China must be consigned to a Chinese entity holding valid business registration and food import qualifications. Foreign exporters must sell to or through a licensed Chinese importer, trading company, or a subsidiary entity registered in a Chinese free trade zone with import permissions.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the transit time from Djibouti to Shanghai for Ethiopian coffee?</h4>
            <p className='text-sm text-gray-600'>
              Ocean freight from Djibouti to Shanghai takes 18 to 24 days via the Red Sea and Suez Canal route. After vessel arrival, customs clearance and CIQ inspection add 3 to 7 business days (longer if lab testing is ordered). Total time from Djibouti departure to warehouse delivery is typically 25 to 35 days.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What Chinese food safety standards apply to green coffee imports?</h4>
            <p className='text-sm text-gray-600'>
              Green coffee must comply with GB 2761-2017 (mycotoxin limits, including ochratoxin A), GB 2762-2017 (contaminant limits for lead and heavy metals), and GB 2763-2021 (pesticide residue limits with default MRL of 0.01 mg/kg). CIQ may test any incoming shipment. Pre-shipment testing matching these standards reduces clearance delays.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>China Market &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopia-china-coffee-trade-partnership' className='text-amber-700 hover:underline'>Ethiopia-China Coffee Trade Partnership</Link></li>
              <li>&bull; <Link href='/insights/top-ethiopian-coffee-importers-buyers-2024-2025' className='text-amber-700 hover:underline'>Top Ethiopian Coffee Importers 2024/2025</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Export Process &amp; Logistics</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline'>Green Coffee Packaging Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origin &amp; Quality</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/yirgacheffe-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Yirgacheffe Coffee Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Guji Coffee Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/sidamo-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Sidamo Coffee Sourcing Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Other Import Guides</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-japan' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to Japan</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-south-korea' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to South Korea</Link></li>
              <li>&bull; <Link href='/insights/how-to-import-ethiopian-coffee-to-usa' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to USA</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter with three decades of sourcing relationships across Yirgacheffe, Sidamo, Guji, Harar, Limu, and Jimma.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot;{' '}
          <Link href='/ethiopian-coffee-exporter' className='underline'>Export Services</Link> &middot;{' '}
          <Link href='/about' className='underline'>About</Link> &middot;{' '}
          <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

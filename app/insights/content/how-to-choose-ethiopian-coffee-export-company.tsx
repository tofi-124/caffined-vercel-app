import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function HowToChooseEthiopianCoffeeExportCompany({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        A practical evaluation framework for importers, roasters, and green coffee buyers sourcing from Ethiopia
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Evaluating an Ethiopian coffee export company requires more than a price sheet. Licensing, quality infrastructure, and traceability systems separate reliable exporters from risky ones.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Choosing an Ethiopian coffee export company - green coffee quality inspection at origin'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium'>
          <span className='font-bold'>Key Takeaway:</span> Choosing the right Ethiopian coffee export company comes down to five non-negotiable factors: valid export licensing, processing infrastructure, traceable sourcing, transparent pricing, and a proven sample program. Use the 10-point scorecard in this guide to compare exporters objectively before committing to a purchase.
        </p>
      </div>

      <p className='my-4'>
        The wrong <span className='font-bold'>Ethiopian coffee export company</span> costs more than money. Late shipments, inconsistent quality, missing documentation, and broken communication erode margins and damage buyer relationships downstream. Yet many importers still select exporters based on a single email exchange or the lowest FOB quote.
      </p>

      <p className='my-4'>
        This guide provides a structured method for evaluating Ethiopian coffee exporters. It covers the licensing requirements that confirm legitimacy, a weighted scoring framework you can apply to any supplier, specific red flags that signal trouble, and a step-by-step due diligence process for buyers entering the Ethiopian market for the first time.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Why Your Choice of Ethiopian Coffee Export Company Matters
      </h3>
      <p className='my-4'>
        Ethiopia exported over 300,000 metric tons of coffee in the 2024/25 season, generating more than $1.8 billion in revenue according to the <a href='https://www.ico.org/prices/new-consumption-table.asp' target='_blank' rel='noopener noreferrer' className='underline'>International Coffee Organization</a>. Hundreds of licensed exporters compete for this volume. Quality, reliability, and professionalism vary widely between them.
      </p>
      <p className='my-4'>
        A reliable exporter delivers consistent cup profiles across shipments, handles all export documentation accurately, ships on schedule, and communicates proactively when problems arise. An unreliable one sends samples that do not match the bulk lot, delays containers by weeks, provides incomplete paperwork, and becomes difficult to reach after payment clears.
      </p>
      <p className='my-4'>
        The difference between these outcomes is almost never price. It is process. Exporters with proper infrastructure, trained staff, and established systems produce repeatable results. Those without them depend on luck. For importers working with Ethiopian coffee for the first time, or those evaluating a new supplier, a structured evaluation method reduces this risk significantly.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        What Makes an Ethiopian Coffee Exporter Legitimate
      </h3>
      <p className='my-4'>
        Before evaluating quality or pricing, confirm that the exporter holds the required licenses. Ethiopian coffee exports are regulated by the Ethiopian Coffee and Tea Authority (ECTA), and only licensed entities can legally export. Verification at this stage eliminates brokers and unauthorized intermediaries from your shortlist.
      </p>

      <h4 className='text-xl font-bold mt-6'>ECTA Registration and Export License</h4>
      <p className='my-4'>
        Every Ethiopian coffee export company must hold an active export license issued by the ECTA. This license confirms the company has met minimum capital requirements, passed facility inspections, and is authorized to sell Ethiopian coffee internationally. Request the license number and verify it with the <a href='https://www.ecta.gov.et/' target='_blank' rel='noopener noreferrer' className='underline'>Ethiopian Coffee and Tea Authority</a> directly.
      </p>

      <h4 className='text-xl font-bold mt-6'>ECX Membership</h4>
      <p className='my-4'>
        The Ethiopia Commodity Exchange (ECX) is the marketplace through which most commercial grade coffee is traded. Exporters purchasing through ECX must be registered members. Even exporters who source primarily through Direct Specialty Line (DSL) channels maintain ECX membership because it signals legitimacy and access to Ethiopia&apos;s formal trading system. For a detailed explanation of how ECX works, see our <Link href='/insights/ecx-and-ethiopian-coffee-export' className='underline font-bold'>guide to ECX and Ethiopian coffee exports</Link>.
      </p>

      <h4 className='text-xl font-bold mt-6'>Capital Requirements Under Directive 1106/2025</h4>
      <p className='my-4'>
        Ethiopian Directive 1106/2025 raised the minimum registered capital for coffee exporters. Private exporters must now hold at least 15 million Ethiopian birr in registered capital. Cooperative unions require 20 million birr. These thresholds exist to ensure exporters have sufficient financial backing to fulfill contracts and absorb operational risks. An exporter unable to verify compliance with these requirements may lack the stability to handle large orders reliably.
      </p>
      <p className='my-4'>
        Our article on <Link href='/insights/private-vs-cooperative-ethiopian-coffee-exporters' className='underline font-bold'>private vs. cooperative Ethiopian coffee exporters</Link> covers the structural differences between these two export models, including how capital requirements, certification access, and sourcing strategies differ.
      </p>

      <h4 className='text-xl font-bold mt-6'>Direct Specialty Line (DSL) Eligibility</h4>
      <p className='my-4'>
        Specialty grade coffee (typically Grade 1 and select Grade 2 lots) can bypass the ECX auction system through the DSL. Exporters approved for DSL sourcing have demonstrated the ability to maintain traceability from farm or washing station through export. If you are buying specialty Ethiopian coffee, confirm that the exporter has active DSL approval and can provide full lot traceability. This is the sourcing path where <Link href='/insights/direct-trade-ethiopian-farmers' className='underline font-bold'>direct trade with Ethiopian farmers</Link> becomes possible.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        The 10-Point Exporter Evaluation Scorecard
      </h3>
      <p className='my-4'>
        Use this scorecard to compare Ethiopian coffee exporters on a standardized basis. Rate each criterion from 1 (poor) to 5 (excellent). Weight the criteria based on what matters most to your business. A total score above 40 suggests a strong candidate. Scores below 30 warrant caution.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border border-gray-300'>
          <thead className='bg-dark text-primary'>
            <tr>
              <th className='p-3 text-left border border-gray-300'>#</th>
              <th className='p-3 text-left border border-gray-300'>Criterion</th>
              <th className='p-3 text-left border border-gray-300'>What to Verify</th>
              <th className='p-3 text-left border border-gray-300'>Score (1-5)</th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-white'>
              <td className='p-3 border border-gray-300 font-bold'>1</td>
              <td className='p-3 border border-gray-300 font-bold'>Export License &amp; ECX Registration</td>
              <td className='p-3 border border-gray-300'>Active ECTA license, ECX membership, Directive 1106/2025 compliance</td>
              <td className='p-3 border border-gray-300'>___</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 border border-gray-300 font-bold'>2</td>
              <td className='p-3 border border-gray-300 font-bold'>Processing Infrastructure</td>
              <td className='p-3 border border-gray-300'>Owns or controls dry mill, washing stations, drying beds, storage</td>
              <td className='p-3 border border-gray-300'>___</td>
            </tr>
            <tr className='bg-white'>
              <td className='p-3 border border-gray-300 font-bold'>3</td>
              <td className='p-3 border border-gray-300 font-bold'>Quality Control &amp; Lab</td>
              <td className='p-3 border border-gray-300'>In-house cupping lab, trained Q graders, moisture meters, defect analysis</td>
              <td className='p-3 border border-gray-300'>___</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 border border-gray-300 font-bold'>4</td>
              <td className='p-3 border border-gray-300 font-bold'>Traceability Systems</td>
              <td className='p-3 border border-gray-300'>Farm or washing station level tracking, lot ID, digital records</td>
              <td className='p-3 border border-gray-300'>___</td>
            </tr>
            <tr className='bg-white'>
              <td className='p-3 border border-gray-300 font-bold'>5</td>
              <td className='p-3 border border-gray-300 font-bold'>Certifications</td>
              <td className='p-3 border border-gray-300'>Organic, Fair Trade, Rainforest Alliance, or relevant certificates</td>
              <td className='p-3 border border-gray-300'>___</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 border border-gray-300 font-bold'>6</td>
              <td className='p-3 border border-gray-300 font-bold'>Documentation Accuracy</td>
              <td className='p-3 border border-gray-300'>Phytosanitary, ICO certificate, bill of lading, commercial invoice quality</td>
              <td className='p-3 border border-gray-300'>___</td>
            </tr>
            <tr className='bg-white'>
              <td className='p-3 border border-gray-300 font-bold'>7</td>
              <td className='p-3 border border-gray-300 font-bold'>Sample Program</td>
              <td className='p-3 border border-gray-300'>Pre-shipment samples available, turnaround time, sample-to-bulk consistency</td>
              <td className='p-3 border border-gray-300'>___</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 border border-gray-300 font-bold'>8</td>
              <td className='p-3 border border-gray-300 font-bold'>Pricing Transparency</td>
              <td className='p-3 border border-gray-300'>Clear FOB breakdown, differential explained, no hidden fees</td>
              <td className='p-3 border border-gray-300'>___</td>
            </tr>
            <tr className='bg-white'>
              <td className='p-3 border border-gray-300 font-bold'>9</td>
              <td className='p-3 border border-gray-300 font-bold'>Logistics Track Record</td>
              <td className='p-3 border border-gray-300'>On-time shipment history, container booking reliability, freight coordination</td>
              <td className='p-3 border border-gray-300'>___</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 border border-gray-300 font-bold'>10</td>
              <td className='p-3 border border-gray-300 font-bold'>References &amp; Track Record</td>
              <td className='p-3 border border-gray-300'>Verifiable buyer references, years in operation, export volume history</td>
              <td className='p-3 border border-gray-300'>___</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        This scorecard is not theoretical. Each criterion maps to a specific failure mode that importers encounter when working with the wrong supplier. An exporter that scores well across all ten areas has the infrastructure, systems, and experience to deliver reliably.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-2'>How to Weight the Scorecard for Your Business</h4>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'><span className='font-bold'>Specialty roasters:</span> Prioritize criteria 3 (Quality Control), 4 (Traceability), and 7 (Sample Program)</li>
          <li className='my-2'><span className='font-bold'>Commercial importers:</span> Prioritize criteria 1 (Licensing), 8 (Pricing), and 9 (Logistics)</li>
          <li className='my-2'><span className='font-bold'>First-time buyers:</span> Prioritize criteria 6 (Documentation), 7 (Sample Program), and 10 (References)</li>
          <li className='my-2'><span className='font-bold'>Organic/certified buyers:</span> Prioritize criteria 4 (Traceability), 5 (Certifications), and 6 (Documentation)</li>
        </ul>
      </div>

      <p className='my-4'>
        For a deeper look at certifications including Organic, Fair Trade, and Rainforest Alliance requirements, see our <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='underline font-bold'>Ethiopian coffee certifications guide</Link>.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Red Flags When Evaluating an Ethiopian Coffee Export Company
      </h3>
      <p className='my-4'>
        Some warning signs should end the conversation immediately. Others require investigation before proceeding. Here are the most common red flags reported by importers who have been burned by the wrong partner.
      </p>

      <div className='bg-red-50 p-6 rounded-lg my-6 border border-red-200'>
        <h4 className='font-bold text-lg mb-3 text-red-800'>Stop and Investigate</h4>
        <ul className='list-disc ml-5 space-y-2'>
          <li><span className='font-bold'>Full payment demanded before shipment.</span> Standard terms for Ethiopian coffee exports are T/T (telegraphic transfer) with a 20-30% advance, balance against shipping documents, or irrevocable letter of credit. Demanding 100% upfront before shipping is unusual and risky.</li>
          <li><span className='font-bold'>Cannot provide an ECTA license number.</span> If an entity claims to export Ethiopian coffee but cannot produce a verifiable export license, they may be a broker reselling without authorization.</li>
          <li><span className='font-bold'>No sample program.</span> Serious exporters send pre-shipment samples as standard practice. An exporter unwilling to provide samples before you commit to a container is hiding quality issues.</li>
          <li><span className='font-bold'>Prices significantly below market.</span> Ethiopian green coffee has a floor price set by the ECX, influenced by local cherry costs and demand. An offer 20% or more below comparable quotes likely means the exporter will substitute lower-grade lots, delay shipment until prices move in their favor, or default entirely.</li>
          <li><span className='font-bold'>Vague traceability claims.</span> The exporter says &quot;from Yirgacheffe&quot; but cannot specify the kebele, washing station, or cooperative. For commercial grade lots, broad region identification may be acceptable. For specialty, this level of vagueness is insufficient.</li>
          <li><span className='font-bold'>No verifiable references.</span> An exporter with years of claimed experience should have buyer references willing to confirm the relationship. Reluctance to share references warrants caution.</li>
          <li><span className='font-bold'>Inconsistent documentation.</span> Invoice details that do not match the contract, incorrect ICO numbers, or weight discrepancies between contract and bill of lading signal serious operational or integrity issues.</li>
        </ul>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Due Diligence Steps for First-Time Buyers
      </h3>
      <p className='my-4'>
        Importing Ethiopian green coffee for the first time involves more variables than established supply chains. Follow this process to reduce risk and build a foundation for a long-term supplier relationship.
      </p>

      <ol className='font-inconsolata my-4 list-decimal ml-5'>
        <li className='my-3'>
          <span className='font-bold'>Define your requirements before reaching out.</span> Document the grades you need (Grade 1 specialty, Grade 2, or commercial Grade 3-4), preferred processing methods (washed or natural), target volume (bags or containers per year), and preferred Incoterms (FOB Djibouti for ocean freight, FCA for air freight). Clear requirements filter out exporters who cannot serve your needs.
        </li>
        <li className='my-3'>
          <span className='font-bold'>Request license verification.</span> Ask for the ECTA export license number and ECX membership details. Cross-reference with publicly available registries or contact the ECTA directly in Addis Ababa.
        </li>
        <li className='my-3'>
          <span className='font-bold'>Order samples from at least three exporters.</span> Request pre-shipment samples from current or recent lots. Evaluate them using consistent cupping protocols. Compare not just cup quality but also professionalism: packaging, labeling, turnaround time, and accompanying documentation. Our <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='underline font-bold'>cupping and evaluation guide</Link> covers proper sample assessment techniques.
        </li>
        <li className='my-3'>
          <span className='font-bold'>Ask for buyer references.</span> Request the names of two or three importing companies the exporter has shipped to in the past 12 months. Contact those references and ask about shipment timeliness, sample-to-bulk consistency, documentation accuracy, and communication quality.
        </li>
        <li className='my-3'>
          <span className='font-bold'>Start with a trial order.</span> Before committing to a full container (approximately 300 bags of 60 kg each), consider a smaller trial shipment if the exporter permits. Some exporters offer shared container or pallet options for new relationships. The cost per kilogram is higher, but the risk is proportionally lower.
        </li>
        <li className='my-3'>
          <span className='font-bold'>Review the contract carefully.</span> Confirm all terms in writing: grade, screen size, moisture content range, maximum defects, price (fixed or differential), payment terms, shipment window, and penalty clauses for delays or quality deviations. An exporter who resists written terms is a risk you should not accept.
        </li>
        <li className='my-3'>
          <span className='font-bold'>Monitor shipping and documentation.</span> After placing the order, track the export timeline. Confirm that the phytosanitary certificate, ICO certificate of origin, commercial invoice, packing list, and bill of lading are accurate and arrive before or with the shipment.
        </li>
      </ol>

      <p className='my-4'>
        For country-specific import procedures and compliance requirements, consult our detailed guides for
        <Link href='/insights/how-to-import-ethiopian-coffee-to-usa' className='underline font-bold ml-1'>the USA</Link>,
        <Link href='/insights/importing-ethiopian-coffee-to-germany' className='underline font-bold ml-1'>Germany</Link>,
        <Link href='/insights/importing-ethiopian-coffee-to-uk' className='underline font-bold ml-1'>the UK</Link>,
        <Link href='/insights/importing-ethiopian-coffee-to-canada-guide' className='underline font-bold ml-1'>Canada</Link>,
        <Link href='/insights/importing-ethiopian-coffee-to-japan' className='underline font-bold ml-1'>Japan</Link>, and
        <Link href='/insights/importing-ethiopian-coffee-to-australia' className='underline font-bold ml-1'>Australia</Link>.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Ethiopian Coffee Export Pricing: What to Expect
      </h3>
      <p className='my-4'>
        Price should never be the primary criterion for selecting an Ethiopian coffee export company, but understanding pricing structure helps you identify unrealistic offers and negotiate fairly.
      </p>
      <p className='my-4'>
        Ethiopian green coffee is priced through the Ethiopian Commodity Exchange (ECX), which sets floor prices based on grade, region, and quality. These floor prices apply to all Ethiopian coffee regardless of sales channel. FOB export prices reflect ECX pricing, local costs, processing, and exporter margin. As of early 2026, prices have been elevated due to rising cherry costs (local costs exceeding 250 birr per kilogram in some regions), increased global demand for specialty lots, and supply tightness in Grade 1 washed categories.
      </p>
      <p className='my-4'>
        A transparent exporter will break down the FOB price into its components: base cost, processing, logistics, and any applicable certification premiums. If an exporter only quotes a flat number without explanation, ask for the breakdown. Our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='underline font-bold'>Ethiopian coffee pricing and FOB guide</Link> provides current indicative price ranges and explains every component in detail.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Direct Export vs. ECX Auction: Matching the Sourcing Model to Your Needs
      </h3>
      <p className='my-4'>
        Ethiopian coffee reaches international buyers through two primary channels. Understanding the difference helps you evaluate whether an exporter&apos;s sourcing model aligns with what you need.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border border-gray-300'>
          <thead className='bg-dark text-primary'>
            <tr>
              <th className='p-3 text-left border border-gray-300'>Factor</th>
              <th className='p-3 text-left border border-gray-300'>ECX Auction</th>
              <th className='p-3 text-left border border-gray-300'>Direct Specialty Line (DSL)</th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-white'>
              <td className='p-3 border border-gray-300 font-bold'>Traceability</td>
              <td className='p-3 border border-gray-300'>Region level (e.g., &quot;Yirgacheffe G2 Washed&quot;)</td>
              <td className='p-3 border border-gray-300'>Washing station or farm level</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 border border-gray-300 font-bold'>Typical Grades</td>
              <td className='p-3 border border-gray-300'>G2 through G5</td>
              <td className='p-3 border border-gray-300'>G1 and select G2</td>
            </tr>
            <tr className='bg-white'>
              <td className='p-3 border border-gray-300 font-bold'>Pricing Model</td>
              <td className='p-3 border border-gray-300'>Auction-driven, market-based</td>
              <td className='p-3 border border-gray-300'>Negotiated directly between buyer and exporter</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 border border-gray-300 font-bold'>Volume</td>
              <td className='p-3 border border-gray-300'>High volume, commercial scale</td>
              <td className='p-3 border border-gray-300'>Smaller lots, specialty focus</td>
            </tr>
            <tr className='bg-white'>
              <td className='p-3 border border-gray-300 font-bold'>Best For</td>
              <td className='p-3 border border-gray-300'>Commodity importers, blend programs</td>
              <td className='p-3 border border-gray-300'>Specialty roasters, single-origin programs</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Many established exporters source through both channels, offering flexibility across grade requirements. A specialty-focused importer should confirm DSL eligibility. A commercial buyer can work with ECX-sourced lots. The key is matching the exporter&apos;s sourcing capability to your program. For a deeper look at how the ECX system operates, read our <Link href='/insights/ecx-and-ethiopian-coffee-export' className='underline font-bold'>complete ECX and Ethiopian coffee export guide</Link>.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Certifications: When They Matter and What to Verify
      </h3>
      <p className='my-4'>
        Certifications are not mandatory for all Ethiopian coffee exports, but they are essential if your market requires them. The most common certifications held by Ethiopian coffee exporters include Organic (USDA NOP and EU Organic), Fair Trade, and Rainforest Alliance (which now includes UTZ).
      </p>
      <p className='my-4'>
        Verify that the exporter&apos;s certification applies to the specific lots you plan to purchase, not just to the company in general. Certification scope varies by region and lot. An exporter may hold organic certification for Sidamo lots but not for Guji. Our <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='underline font-bold'>Ethiopian coffee certifications guide</Link> explains each certification type, its cost, and how to verify validity.
      </p>
      <p className='my-4'>
        Buyers shipping to the EU should also confirm the exporter&apos;s readiness for the <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='underline font-bold'>EU Deforestation Regulation (EUDR)</Link>, which adds geolocation-based traceability requirements to all coffee entering the European market.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Processing and Warehousing: What to Assess
      </h3>
      <p className='my-4'>
        An exporter&apos;s processing capabilities directly influence the quality and consistency of what lands in your warehouse. When evaluating an Ethiopian coffee export company, ask about these specific operational elements:
      </p>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'><span className='font-bold'>Dry mill capacity:</span> Does the exporter operate its own dry mill, or does it contract out? Owning or controlling a mill means greater oversight of hulling, sorting, and grading.</li>
        <li className='my-2'><span className='font-bold'>Color sorting equipment:</span> Electronic color sorters remove defective beans that manual sorting misses. Ask whether the mill uses optical or electronic sorting.</li>
        <li className='my-2'><span className='font-bold'>Drying infrastructure:</span> For natural processed coffees, raised African drying beds with proper airflow are critical. Patio drying on concrete is common for commercial grades but can impart off-flavors in specialty lots.</li>
        <li className='my-2'><span className='font-bold'>Warehouse conditions:</span> Green coffee must be stored in clean, dry, pest-free facilities away from direct sunlight. Ask about temperature control, moisture monitoring, and maximum storage duration before export.</li>
        <li className='my-2'><span className='font-bold'>Cupping lab:</span> A dedicated cupping lab with calibrated equipment (moisture meters, water activity meters, and proper cupping sets) signals a quality-first operation. If the exporter does not cup internally, quality control depends entirely on third-party assessments.</li>
      </ul>
      <p className='my-4'>
        Our guides on <Link href='/insights/green-coffee-quality-control-defects-grading' className='underline font-bold'>green coffee quality control and grading</Link> and <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='underline font-bold'>cupping and evaluating Ethiopian coffee samples</Link> provide detailed standards buyers can reference when assessing an exporter&apos;s QC process.
      </p>

      {/* FAQ SECTION */}
      <div className='bg-gray-50 rounded-xl p-8 border border-gray-200 my-8'>
        <h3 className='text-2xl font-extrabold mb-6'>Frequently Asked Questions</h3>

        <h4 className='font-bold mt-4'>How many licensed coffee exporters are there in Ethiopia?</h4>
        <p className='my-2'>
          Ethiopia has approximately 400 to 500 licensed coffee exporters, according to ECTA records. The number fluctuates as licenses are issued and revoked. Not all are actively exporting; some hold licenses but operate at minimal volume.
        </p>

        <h4 className='font-bold mt-4'>Can I import Ethiopian coffee without going through an exporter?</h4>
        <p className='my-2'>
          No. Ethiopian law requires that coffee exports be handled by ECTA-licensed exporters. Foreign buyers cannot purchase directly from farmers or cooperatives and export independently. You must work with a licensed Ethiopian coffee export company.
        </p>

        <h4 className='font-bold mt-4'>What is the minimum order quantity for Ethiopian green coffee?</h4>
        <p className='my-2'>
          Most exporters set a minimum of one full container load (FCL), approximately 19 to 21 metric tons or around 300 bags of 60 kg each. Some exporters offer less-than-container (LCL) options for trial orders or specialty micro-lots. Our <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='underline font-bold'>MOQ guide for Ethiopian coffee</Link> covers this topic in detail.
        </p>

        <h4 className='font-bold mt-4'>How long does it take to receive a shipment from Ethiopia?</h4>
        <p className='my-2'>
          From order confirmation to container arrival, expect 6 to 12 weeks depending on destination. Processing and export documentation typically take 2 to 4 weeks. Ocean freight from Djibouti to European ports averages 14 to 21 days. Shipments to the US East Coast take approximately 30 to 35 days.
        </p>

        <h4 className='font-bold mt-4'>Should I visit Ethiopia before choosing an exporter?</h4>
        <p className='my-2'>
          An origin visit is not required for every buyer, but it is recommended for large-volume commitments or specialty programs. Visiting allows you to inspect processing facilities, meet the team, cup samples at origin, and build the relationship in person. Most established exporters welcome buyer visits during harvest season (October through January).
        </p>

        <h4 className='font-bold mt-4'>What payment terms are standard for Ethiopian coffee exports?</h4>
        <p className='my-2'>
          The two most common payment structures are T/T (telegraphic transfer) with 20-30% advance and balance against shipping documents, or irrevocable letter of credit (L/C) at sight. Full prepayment is uncommon and should be approached with caution unless you have an established, multi-year relationship with the exporter.
        </p>

        <h4 className='font-bold mt-4'>What is the difference between a coffee exporter and a coffee broker in Ethiopia?</h4>
        <p className='my-2'>
          An exporter holds an ECTA license, operates or controls processing facilities, and ships coffee directly to international buyers. A broker connects buyers and sellers without holding inventory, processing capability, or an export license. Working with a licensed exporter provides greater accountability and traceability.
        </p>
      </div>

      <p className='my-4'>
        Choosing the right <span className='font-bold'>Ethiopian coffee export company</span> is one of the most consequential decisions in your supply chain. Apply the 10-point scorecard, check for red flags, follow the due diligence steps outlined above, and start with a sample before scaling. The right partner will make Ethiopian coffee a reliable, profitable part of your offering for years to come.
      </p>

      <p className='my-4'>
        To see what the buyer journey looks like with an origin-connected exporter, from initial inquiry through samples, contracting, and shipment, read our <Link href='/insights/ethio-coffee-export-launch' className='underline font-bold'>Ethiopian coffee exporter partnership guide</Link>.
      </p>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Traceable Ethiopian Coffee Direct from Origin</h4>
        <p className='my-2'>
          At <span className='font-bold'>Ethio Coffee Import and Export PLC</span>, we welcome evaluation. Request samples, verify our licensing, and apply the scorecard in this article to our operation. We are a fully licensed Ethiopian coffee export company with direct sourcing from Ethiopia&apos;s top growing regions, an in-house quality lab, and transparent FOB pricing.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>
            View Our Offerings
          </Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            Request Samples
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
            <h4 className='font-semibold mb-2 text-sm'>Sourcing &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export Guide</Link></li>
              <li>&bull; <Link href='/insights/private-vs-cooperative-ethiopian-coffee-exporters' className='text-amber-700 hover:underline'>Private vs. Cooperative Ethiopian Coffee Exporters</Link></li>
              <li>&bull; <Link href='/insights/direct-trade-ethiopian-farmers' className='text-amber-700 hover:underline'>Direct Trade: Supporting Ethiopian Farmers</Link></li>
              <li>&bull; <Link href='/insights/best-ethiopian-coffee-exporter-for-importers' className='text-amber-700 hover:underline'>Best Ethiopian Coffee Exporter for Importers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Pricing &amp; Quality</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Pricing and FOB Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Ethiopian Coffee Certifications Guide</Link></li>
              <li>&bull; <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Ethiopian Coffee MOQ Guide for Importers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origins &amp; Profiles</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/navigating-2026-ethiopian-specialty-coffee-exporters' className='text-amber-700 hover:underline'>2026 Ethiopian Specialty Coffee Exporters</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Regulations &amp; Compliance</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline'>EUDR and Ethiopian Coffee Compliance</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC. This guide provides a framework for evaluating Ethiopian coffee export companies based on industry standards and importer experience. Pricing data and regulatory details reflect conditions as of early 2026. Contact us for current information.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot; <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> &middot; <Link href='/about' className='underline'>About Ethio Coffee</Link> &middot; <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineBeaker,
  HiOutlineScale,
  HiOutlineShieldCheck,
  HiOutlineDocumentText,
  HiOutlineExclamationTriangle,
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineChartBar,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function GreenCoffeeMoistureContentWaterActivityGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      {/* H1 + H2 */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Standards, Measurement, and What Importers Should Specify
      </h2>

      {/* HERO IMAGE */}
      <figure>
        <figcaption className='font-inconsolata my-2'>
          Green coffee moisture content and water activity testing at an Ethiopian export warehouse.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md bg-gray-200 flex items-center justify-center'>
          {/* TODO: Replace placeholder with actual hero image */}
          {/* Expected path: /images/insights/green-coffee-moisture-content-water-activity-guide.webp */}
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Green coffee moisture content measurement with electronic moisture meter on Ethiopian green coffee beans'
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
        <span className='ml-2'>Quality Control / Green Coffee Science / Buyer&apos;s Guide</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Green coffee moisture content (target: 10 to 12%) and water activity (target: 0.45 to 0.60 aw) are the two most critical physical quality parameters for green coffee buyers. Moisture content measures total water in the bean; water activity measures how much of that water is available to cause mold, oxidation, and flavor loss. Specifying both in purchase contracts protects your investment from arrival quality issues, and understanding how Ethiopian drying and export practices manage these metrics helps you source with confidence.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#what-is-moisture-content' className='text-amber-700 hover:underline'>1. What Is Moisture Content in Green Coffee?</a></li>
          <li><a href='#what-is-water-activity' className='text-amber-700 hover:underline'>2. What Is Water Activity and How Does It Differ?</a></li>
          <li><a href='#quality-impact' className='text-amber-700 hover:underline'>3. How Moisture and Water Activity Affect Coffee Quality</a></li>
          <li><a href='#ethiopian-drying' className='text-amber-700 hover:underline'>4. Ethiopian Coffee Drying Practices and Moisture Control</a></li>
          <li><a href='#testing-certification' className='text-amber-700 hover:underline'>5. How Ethiopian Exporters Test and Certify Moisture</a></li>
          <li><a href='#contract-specs' className='text-amber-700 hover:underline'>6. What Importers Should Specify in Contracts</a></li>
          <li><a href='#arrival-testing' className='text-amber-700 hover:underline'>7. How to Measure Moisture and Water Activity Upon Arrival</a></li>
          <li><a href='#common-problems' className='text-amber-700 hover:underline'>8. Common Problems and How to Avoid Them</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>9. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRODUCTION */}
      <p className='my-4'>
        A specialty lot scores 87 on the cupping table at origin. The pre-shipment sample confirms the profile. Six weeks later, the same coffee arrives at your warehouse, and the cupping score drops three points. The culprit is often invisible: excess green coffee moisture content or elevated water activity that degraded flavor compounds during transit. This scenario costs importers thousands of dollars each year and is almost entirely preventable.
      </p>
      <p className='my-4'>
        Moisture content and water activity are foundational quality metrics that every importer, roaster, and green coffee trader should understand, measure, and specify in contracts. They determine shelf life, cup quality stability, mold risk, and roasting behavior. Yet many buyers focus exclusively on <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline font-bold'>cupping scores</Link> and sensory profiles while overlooking the physical parameters that preserve those qualities from origin to roastery.
      </p>
      <p className='my-4'>
        This guide breaks down the science, industry standards, and practical application of both metrics. It covers how Ethiopian exporters manage moisture through processing and warehousing, what specifications belong in your purchase orders, and how to test and interpret readings upon arrival.
      </p>

      {/* SECTION 1: What Is Moisture Content */}
      <h3 id='what-is-moisture-content' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        1. What Is Moisture Content in Green Coffee?
      </h3>
      <p className='my-4'>
        Moisture content measures the total amount of water present inside a green coffee bean, expressed as a percentage of total weight. This includes both bound water (tightly held within the cellular structure by proteins and carbohydrates) and free water (mobile molecules that can support chemical reactions and microbial growth).
      </p>
      <p className='my-4'>
        The International Coffee Organization (ICO) sets a maximum moisture content of 12.5% for export-grade Arabica. The Specialty Coffee Association (SCA) recommends a narrower band of 10 to 12% for specialty green coffee. Ethiopian export standards, enforced through the <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline font-bold'>Ethiopia Commodity Exchange (ECX)</Link> and the Ethiopian Coffee and Tea Authority (ECTA), require moisture between 10.5 and 11.5% at the point of export.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Standard</th>
              <th className='p-3 text-left font-bold'>Acceptable Range</th>
              <th className='p-3 text-left font-bold'>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>ICO (Arabica)</td>
              <td className='p-3'>8.0% to 12.5%</td>
              <td className='p-3'>Maximum for export; below 8% indicates over-drying</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>SCA (Specialty)</td>
              <td className='p-3'>10.0% to 12.0%</td>
              <td className='p-3'>Recommended for optimal cup quality and stability</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Ethiopian ECX/ECTA</td>
              <td className='p-3'>10.5% to 11.5%</td>
              <td className='p-3'>Enforced at ECX warehouses before export clearance</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Moisture is measured using electronic meters that send an electrical signal through a sample of beans and calculate moisture based on resistance or capacitance readings. Common instruments include the Sinar AP 6060, Kett PM-450, and Lighttells CA-100. These devices provide readings within seconds, making them practical for use at origin warehouses, dry mills, and destination arrival inspections.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-2'>Why Moisture Content Affects More Than Quality</h4>
        <p className='text-sm text-gray-700'>
          Green coffee is traded by weight. A lot shipped at 12% moisture weighs more than the same lot at 10.5%. Over a full container of 300+ bags, the difference adds up. Some contracts specify a moisture reference point for weight adjustment, meaning excess moisture above the contracted level may reduce the payable weight. Understanding moisture is not only about cup quality; it is about commercial fairness.
        </p>
      </div>

      {/* SECTION 2: What Is Water Activity */}
      <h3 id='what-is-water-activity' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        2. What Is Water Activity and How Does It Differ?
      </h3>
      <p className='my-4'>
        Water activity (abbreviated aw) measures the availability of free water inside the bean. It is expressed on a scale of 0 to 1.0, where 0 represents completely dry and 1.0 represents pure water. Unlike moisture content, which counts all water molecules (bound and free), water activity focuses specifically on the free water that drives microbial growth, enzymatic reactions, and chemical degradation.
      </p>
      <p className='my-4'>
        Two lots can have identical moisture content yet different water activity readings. This happens because the proportion of bound vs. free water varies depending on cellular structure, processing method, and drying uniformity. A natural (dry-processed) coffee with 11% moisture may have lower water activity than a washed coffee at the same moisture percentage, because the longer drying time in natural processing redistributes water more evenly throughout the bean.
      </p>
      <p className='my-4'>
        The SCA recommends specialty green coffee maintain water activity below 0.60 aw for stable storage. Most industry professionals consider the safe storage zone to be between 0.45 and 0.60 aw. Below 0.45, beans become brittle and lose volatile aromatic precursors. Above 0.65, the risk of mold colonization increases significantly.
      </p>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm italic text-gray-700'>
          &ldquo;Moisture content tells you how much water is in the bean. Water activity tells you what that water is doing.&rdquo; This distinction is fundamental to predicting shelf life and quality stability.
        </p>
      </div>

      {/* SECTION 3: Quality Impact */}
      <h3 id='quality-impact' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineChartBar className='w-8 h-8 text-amber-600' />
        3. How Green Coffee Moisture Content and Water Activity Affect Quality
      </h3>
      <p className='my-4'>
        Both metrics influence quality through different mechanisms. Moisture content correlates with weight, drying completeness, and general bean stability. Water activity directly predicts the rate of biological and chemical degradation. Here is how each affects green coffee across key quality dimensions.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Microbial Risk</h4>
      <p className='my-4'>
        Molds such as Aspergillus ochraceus begin growing at water activity levels above 0.70 to 0.80. Some species can colonize at aw as low as 0.65 under warm, humid conditions. Ochratoxin A (OTA), a mycotoxin produced by these molds, is a regulated contaminant in the European Union (maximum 5 ppb in roasted coffee, 10 ppb in soluble). OTA cannot be fully eliminated by roasting, so prevention at the green stage is essential.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Chemical Degradation</h4>
      <p className='my-4'>
        Free water accelerates lipid oxidation, producing rancid, papery off-flavors. It also activates native enzymes (lipases, proteases) that break down flavor precursors. Elevated water activity increases the rate of non-enzymatic browning reactions (Maillard-adjacent), which shifts the flavor profile toward flat, generic notes and away from the origin character that specialty buyers pay a premium for.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Physical Integrity</h4>
      <p className='my-4'>
        Beans stored below 0.45 aw or below 9% moisture become brittle and fracture more easily during milling and transport. They also lose volatile aromatic precursors, resulting in coffees that cup as thin and lifeless. Conversely, beans that remain above 12.5% moisture feel spongy, develop uneven color, and resist consistent roasting.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Water Activity Range</th>
              <th className='p-3 text-left font-bold'>Risk Level</th>
              <th className='p-3 text-left font-bold'>What Happens</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Below 0.45 aw</td>
              <td className='p-3'>Over-dry</td>
              <td className='p-3'>Brittle beans, flavor loss, thin cup profile</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>0.45 to 0.60 aw</td>
              <td className='p-3'>Ideal</td>
              <td className='p-3'>Stable storage, preserved flavor, minimal degradation</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>0.60 to 0.65 aw</td>
              <td className='p-3'>Caution</td>
              <td className='p-3'>Accelerated oxidation, shortened shelf life</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Above 0.65 aw</td>
              <td className='p-3'>High risk</td>
              <td className='p-3'>Mold growth, OTA risk, rapid quality decline</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 4: Ethiopian Drying Practices */}
      <h3 id='ethiopian-drying' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        4. Ethiopian Coffee Drying Practices and Moisture Control
      </h3>
      <p className='my-4'>
        Ethiopia&apos;s coffee processing infrastructure relies on drying methods calibrated by decades of practice. The approach differs between <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline font-bold'>washed and natural processing</Link>, and each method has distinct implications for final moisture and water activity.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Washed (Wet-Processed) Coffee</h4>
      <p className='my-4'>
        At <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='text-amber-700 hover:underline font-bold'>washing stations</Link> across Yirgacheffe, Sidamo, and Guji, freshly pulped and fermented parchment coffee is spread on raised African beds (also called drying tables). Workers turn the parchment every 2 to 3 hours during the first few days to ensure even moisture loss. The drying process takes 10 to 14 days, depending on ambient temperature, humidity, and wind conditions. Target moisture at the end of parchment drying is 10.5 to 11.5%.
      </p>
      <p className='my-4'>
        Raised beds allow air circulation from below and above, which promotes more uniform drying than concrete patios. Many cooperatives and washing stations we work with use simple moisture meters (pin-type or capacitance) to check parchment moisture twice daily during the final days of drying. This prevents both over-drying and under-drying at the parchment stage.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Natural (Dry-Processed) Coffee</h4>
      <p className='my-4'>
        Naturals from <Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline font-bold'>Guji</Link>, <Link href='/ethiopian-coffee-harar' className='text-amber-700 hover:underline font-bold'>Harar</Link>, and parts of Sidamo dry as whole cherries on raised beds for 15 to 25 days. The intact cherry skin slows moisture release, which is why naturals require longer drying periods. Workers sort and turn cherries daily to prevent localized fermentation and uneven moisture within the batch.
      </p>
      <p className='my-4'>
        Because the mucilage and skin layers form a barrier, natural coffees are more prone to moisture pockets within individual beans. This makes water activity measurement especially valuable for naturals, as two beans from the same lot may have similar overall moisture but different aw readings if drying was inconsistent.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Altitude and Climate Factors</h4>
      <p className='my-4'>
        Ethiopian coffee grows between 1,500 and 2,400 meters above sea level. Higher altitudes mean cooler temperatures and slower drying rates, which typically produces more even moisture distribution. However, the rainy season (June through September) can interrupt drying schedules. Washing stations in Yirgacheffe and <Link href='/insights/bombe-sidama-coffee-sourcing-guide' className='text-amber-700 hover:underline font-bold'>Sidama</Link> sometimes use covered drying beds or temporary shade structures to manage unexpected rainfall during the October to December harvest window.
      </p>

      {/* SECTION 5: Testing and Certification */}
      <h3 id='testing-certification' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineShieldCheck className='w-8 h-8 text-amber-600' />
        5. How Ethiopian Exporters Test and Certify Moisture
      </h3>
      <p className='my-4'>
        Before Ethiopian green coffee reaches an export container, it passes through multiple moisture checkpoints. Understanding this chain helps importers appreciate the quality controls already in place and identify where additional protection may be needed.
      </p>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Moisture Testing Chain: Origin to Export</h4>
        <ol className='space-y-3 text-sm text-gray-700'>
          <li className='flex items-start gap-2'>
            <span className='bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5'>1</span>
            <span><strong>Washing station / dry mill:</strong> Parchment or dried cherry tested with handheld meters before hulling. Target: 10.5 to 11.5%.</span>
          </li>
          <li className='flex items-start gap-2'>
            <span className='bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5'>2</span>
            <span><strong>ECX / ECTA warehouse:</strong> Lots delivered to the ECX system are tested for moisture as part of the grading process. Lots exceeding 11.5% may be re-dried or downgraded.</span>
          </li>
          <li className='flex items-start gap-2'>
            <span className='bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5'>3</span>
            <span><strong>Export warehouse (dry mill):</strong> After <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='text-amber-700 hover:underline font-bold'>dry milling</Link> (hulling, density sorting, color sorting), the finished green coffee is re-tested. Exporters issue a pre-shipment moisture certificate alongside the <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline font-bold'>quality analysis report</Link>.</span>
          </li>
          <li className='flex items-start gap-2'>
            <span className='bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5'>4</span>
            <span><strong>Container loading:</strong> Final spot-check before bags enter the container. Bags are sealed in GrainPro or Ecotact liners to maintain moisture levels during the ocean voyage.</span>
          </li>
        </ol>
      </div>

      <p className='my-4'>
        Most Ethiopian exporters use calibrated electronic moisture meters (Sinar or Kett models are most common). Water activity meters, such as the Rotronic HygroPalm or Neutec GrainMaster, are increasingly adopted by specialty-focused exporters, though water activity testing is not yet an ECX requirement. As an origin-connected exporter, we include both moisture content and water activity readings on our pre-shipment analysis reports for every lot.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Packaging for Moisture Protection</h4>
      <p className='my-4'>
        After <Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline font-bold'>packaging in jute or sisal outer bags</Link>, specialty Ethiopian lots are lined with high-barrier inner bags (GrainPro, Ecotact, or vacuum-sealed options). These hermetic liners reduce water vapor transmission to near zero, preserving both moisture content and water activity throughout the 3 to 6 week ocean transit. Without liners, jute bags absorb and release moisture freely, making the green coffee vulnerable to container condensation and ambient humidity.
      </p>

      {/* SECTION 6: Contract Specifications */}
      <h3 id='contract-specs' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineDocumentText className='w-8 h-8 text-amber-600' />
        6. What Importers Should Specify in Contracts
      </h3>
      <p className='my-4'>
        Including clear moisture and water activity clauses in your <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline font-bold'>purchase contracts</Link> is the single most effective way to protect quality. Here are the specifications experienced importers include.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Contract Clause</th>
              <th className='p-3 text-left font-bold'>Recommended Specification</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Moisture content</td>
              <td className='p-3'>10.0% to 11.5% at time of shipment</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Water activity</td>
              <td className='p-3'>Below 0.60 aw at time of shipment</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Measurement method</td>
              <td className='p-3'>Electronic capacitance meter (ISO 6673 or equivalent)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Pre-shipment sample</td>
              <td className='p-3'>Include moisture and aw readings on the sample analysis report</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Packaging requirement</td>
              <td className='p-3'>GrainPro or equivalent hermetic liner inside jute bag</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Arrival tolerance</td>
              <td className='p-3'>+/- 0.5% moisture from pre-shipment reading</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        If you are new to specifying water activity, start by requesting aw readings on pre-shipment samples alongside the standard moisture certificate. Over time, you will develop a baseline understanding of how aw correlates with shelf life for your specific storage conditions.
      </p>

      <div className='bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg my-6'>
        <h4 className='font-bold text-lg mb-2'>Practical Tip</h4>
        <p className='text-sm text-gray-700'>
          Some buyers assume a moisture reading of 10.5% automatically means the coffee is shelf-stable. This is not always the case. A lot with 10.5% moisture but 0.62 aw has more free water available for degradation than a lot at 11% moisture with 0.55 aw. Always request both readings.
        </p>
      </div>

      {/* SECTION 7: Arrival Testing */}
      <h3 id='arrival-testing' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        7. How to Measure Moisture and Water Activity Upon Arrival
      </h3>
      <p className='my-4'>
        Testing incoming green coffee upon arrival at your warehouse is essential for verifying pre-shipment claims and establishing a quality baseline for storage. Here is a practical protocol.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Sampling Protocol</h4>
      <p className='my-4'>
        Select at least 5 bags per container load (approximately 1 bag per every 50 to 60 bags). From each bag, draw samples from three positions: top, middle, and bottom. Composite the samples, then split into two portions: one for moisture/aw testing and one for <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline font-bold'>cupping evaluation</Link>.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Moisture Measurement</h4>
      <p className='my-4'>
        Use an electronic moisture meter calibrated to the ISO 6673 standard. Place the composite sample in the sensor cup, press measure, and record the result. Take three readings and average them. Readings above 12% or below 9.5% warrant further investigation. Compare the arrival reading to the pre-shipment certificate; a difference exceeding 0.5% suggests container condensation or liner failure.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Water Activity Measurement</h4>
      <p className='my-4'>
        Water activity meters require a sealed measurement chamber to reach vapor pressure equilibrium. Place a thin layer of green beans in the sample cup, seal it, and wait for the reading to stabilize (typically 3 to 10 minutes depending on the instrument). Record the aw value at the ambient temperature displayed. Readings above 0.60 aw should prompt closer inspection for visible mold signs and an immediate cupping to check for off-flavors.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>When to File a Quality Claim</h4>
      <p className='my-4'>
        Most specialty coffee contracts include an arbitration clause for quality disputes. If arrival moisture exceeds the contracted range by more than the agreed tolerance, document the readings with photographs and instrument calibration records, notify your exporter within the contractual claim period (typically 10 to 21 days from arrival), and file for arbitration if necessary. Having pre-shipment and arrival readings side by side makes claims straightforward.
      </p>

      {/* SECTION 8: Common Problems */}
      <h3 id='common-problems' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineExclamationTriangle className='w-8 h-8 text-amber-600' />
        8. Common Problems and How to Avoid Them
      </h3>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Container Condensation</h4>
          <p className='text-sm text-gray-700'>
            Temperature swings during ocean transit cause moisture to condense inside shipping containers (&ldquo;container rain&rdquo;). Hermetic liners and desiccant strips placed inside the container mitigate this risk. Shipping lines that transit the equator or pass through humid ports (Djibouti, Singapore) carry higher condensation risk.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Uneven Drying at Origin</h4>
          <p className='text-sm text-gray-700'>
            If cherry or parchment is spread too thickly on drying beds, or turned infrequently, the outer beans dry faster than those in the center. The batch may pass a spot moisture test while containing pockets of high-aw beans. Request that your exporter conducts aw testing on composite samples, not single-point readings.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Seasonal Moisture Variation</h4>
          <p className='text-sm text-gray-700'>
            Early-harvest lots (October in Ethiopia) sometimes reach the dry mill during lingering rains, extending drying times and increasing the risk of elevated aw. Late-season lots (January and February) dry faster under stronger sun. Specify aw requirements regardless of harvest timing to catch seasonal outliers.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Warehouse Re-Absorption</h4>
          <p className='text-sm text-gray-700'>
            Green coffee stored in poorly controlled destination warehouses can absorb ambient humidity. If your facility lacks climate control, prioritize hermetic packaging and monitor aw quarterly. Coffee stored beyond 6 months in non-climate-controlled conditions frequently shows aw drift upward, even if initial readings were sound.
          </p>
        </div>
      </div>

      <p className='my-4'>
        Proactive management at every stage of the supply chain, from <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline font-bold'>export processing</Link> through destination storage, keeps green coffee moisture content and water activity within safe parameters. This is ultimately a shared responsibility between exporter and importer.
      </p>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Ethiopian Coffee with Verified Quality Parameters</h4>
        <p className='my-2'>
          Every lot we ship includes moisture content, water activity, and full cupping analysis verified at our export warehouse. Request pre-shipment samples with complete quality documentation.
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
            <h4 className='font-bold text-gray-800 mb-2'>What is the ideal moisture content for green coffee beans?</h4>
            <p className='text-sm text-gray-600'>
              The SCA recommends 10 to 12% for specialty green coffee. Ethiopian export standards set a tighter range of 10.5 to 11.5%. Below 10%, beans risk becoming brittle and losing aromatic complexity. Above 12.5%, mold risk increases substantially, and the ICO considers the lot non-compliant for export.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the difference between moisture content and water activity in green coffee?</h4>
            <p className='text-sm text-gray-600'>
              Moisture content measures total water (bound and free) as a percentage of bean weight. Water activity measures only the free, available water on a 0 to 1.0 scale. Water activity is the better predictor of shelf life, mold risk, and chemical stability because only free water drives biological and chemical degradation.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How do you measure water activity in green coffee?</h4>
            <p className='text-sm text-gray-600'>
              Place a thin layer of green beans in a sealed sample cup within a water activity meter. The instrument measures the vapor pressure above the sample and compares it to the vapor pressure of pure water. Readings stabilize in 3 to 10 minutes. Instruments from Rotronic, Neutec, and METER Group are commonly used. Calibrate with certified salt solutions before each measurement session.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What happens if green coffee moisture content is too high?</h4>
            <p className='text-sm text-gray-600'>
              Moisture above 12.5% accelerates mold growth, particularly Aspergillus species that produce ochratoxin A. It also promotes lipid oxidation and enzymatic breakdown of flavor compounds. High-moisture lots develop musty, fermented, or papery off-flavors during storage and transport. EU regulations limit OTA in roasted coffee to 5 ppb; contaminated lots may be rejected at destination.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What moisture specifications should I include in green coffee contracts?</h4>
            <p className='text-sm text-gray-600'>
              Specify moisture content between 10.0 and 11.5% at shipment, water activity below 0.60 aw, measurement by electronic capacitance meter per ISO 6673, hermetic liner packaging required, and an arrival tolerance of +/- 0.5%. Include a clause requiring pre-shipment moisture and aw readings on the sample analysis report.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality Control &amp; Grading</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality Control, Defects, and Grading Guide</Link></li>
              <li>&bull; <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup and Evaluate Ethiopian Coffee Samples</Link></li>
              <li>&bull; <Link href='/insights/new-sca-coffee-value-assessment' className='text-amber-700 hover:underline'>The New SCA Coffee Value Assessment</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Storage &amp; Logistics</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline'>Green Coffee Shelf Life and Storage Guide</Link></li>
              <li>&bull; <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline'>Specialty Coffee Storage, Freight, and Logistics</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline'>Green Coffee Packaging and Bag Types Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing &amp; Contracts</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process: Buyer&apos;s Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts and Payment Terms Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Processing &amp; Milling</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs. Natural Ethiopian Coffee Processing</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Dry Milling and Export Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-dry-coffee-production-quality-control' className='text-amber-700 hover:underline'>Ethiopian Dry Coffee Production and Quality Control</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC, an origin-connected exporter with 30+ years of sourcing relationships across Ethiopia&apos;s coffee regions. Our quality control team tests every lot for moisture content and water activity before shipment.
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

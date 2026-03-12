import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineCheckCircle,
  HiOutlineExclamationTriangle,
  HiOutlineQuestionMarkCircle,
  HiOutlineScale,
  HiOutlineShieldCheck,
} from 'react-icons/hi2'
import { PiSun, PiDropHalfBottom, PiPlant, PiWarehouse } from 'react-icons/pi'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopianDryCoffeeProductionQualityControl({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      {/* H1 TITLE */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>

      {/* SUBTITLE */}
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        A buyer&apos;s guide to quality control at every stage of Ethiopian natural coffee processing, from cherry selection to export-ready green beans
      </h2>

      {/* HERO IMAGE */}
      <figure>
        <figcaption className='font-inconsolata my-2'>
          Ethiopian dry coffee quality control begins at the cherry. For importers and roasters, understanding each QC stage from harvest through drying to storage determines whether a lot delivers in the cup.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian natural dry processed coffee drying on raised beds with quality control inspection by workers'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Quality Control / Natural Coffee Processing / Ethiopian Coffee / Importer Resources</span>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />
          Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Ethiopian natural (dry processed) coffee quality is determined before the cherry reaches the mill. Understanding the five critical QC stages&mdash;cherry selection, initial drying, drying management, moisture stabilisation, and pre-milling storage&mdash;helps importers evaluate lots with confidence and avoid costly rejection at destination. This guide walks through each stage with defect-to-cause mapping, regional quality profiles, and a buyer&apos;s evaluation checklist you can apply to every pre-shipment sample.
        </p>
      </div>

      {/* Table of Contents */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#what-is-dry-coffee' className='text-amber-700 hover:underline'>1. What &ldquo;Dry Coffee&rdquo; Means in Ethiopian Trade Context</a></li>
          <li><a href='#why-natural-qc-different' className='text-amber-700 hover:underline'>2. Why Natural Coffee QC Requires a Different Approach</a></li>
          <li><a href='#cherry-selection' className='text-amber-700 hover:underline'>3. Stage 1 &mdash; Cherry Selection and Intake QC</a></li>
          <li><a href='#drying-process' className='text-amber-700 hover:underline'>4. Stage 2 &mdash; Drying Process and Quality Checkpoints</a></li>
          <li><a href='#moisture-storage' className='text-amber-700 hover:underline'>5. Stage 3 &mdash; Moisture Stabilisation and Pre-Milling Storage</a></li>
          <li><a href='#grading-market-entry' className='text-amber-700 hover:underline'>6. Stage 4 &mdash; Ethiopian Grading and QC at Market Entry</a></li>
          <li><a href='#buyer-checklist' className='text-amber-700 hover:underline'>7. Buyer&apos;s QC Checklist for Ethiopian Natural Coffee</a></li>
          <li><a href='#faq-dry-coffee' className='text-amber-700 hover:underline'>8. FAQ</a></li>
        </ol>
      </div>

      <p className='my-4'>
        This guide focuses exclusively on <strong>natural (dry) processed Ethiopian coffee</strong> from cherry intake through pre-milling storage. For what happens after the dried cherry reaches the mill, see our <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee dry milling and export guide</Link>. For a side-by-side comparison of washed and natural methods, see <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline font-bold'>washed vs natural Ethiopian coffee processing</Link>.
      </p>

      {/* SECTION 1: WHAT IS DRY COFFEE */}
      <h2 id='what-is-dry-coffee' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <PiSun className='text-amber-600' />
        1. What &ldquo;Dry Coffee&rdquo; Means in Ethiopian Trade Context
      </h2>

      <p className='my-4'>
        In Ethiopian coffee trade, <strong>&ldquo;dry coffee&rdquo;</strong> refers to coffee that has been processed and dried to the target moisture content, ready for hulling and grading. For <strong>natural/dry processed</strong> lots&mdash;the focus of this guide&mdash;that means whole cherries sun-dried on raised beds or patios until the fruit layer is completely desiccated and the beans inside reach 11&ndash;12&nbsp;% moisture.
      </p>

      <p className='my-4'>
        International buyers often know the product at this stage as <strong>dried cherry</strong> or <strong>buni</strong> (the Amharic term commonly used in export documentation). Once the dried cherry is hulled at the dry mill, it becomes export-ready green coffee. This distinction matters for contracts: when an Ethiopian exporter quotes &ldquo;dry coffee,&rdquo; they are referencing the pre-hulled stage, and the quality of the green beans you receive depends entirely on how well QC was managed before that point.
      </p>

      <div className='bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg my-6'>
        <h3 className='text-lg font-semibold text-gray-900 mb-2'>Why this matters for buyers</h3>
        <p className='text-sm text-gray-800'>
          Defects introduced during the natural drying process&mdash;mold, uneven moisture, over-fermentation&mdash;become permanent. They cannot be corrected by the dry mill. If you are evaluating an Ethiopian natural lot, you are evaluating the competence of the drying station, not just the mill.
        </p>
      </div>

      {/* SECTION 2: WHY NATURAL QC IS DIFFERENT */}
      <h2 id='why-natural-qc-different' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineExclamationTriangle className='text-amber-600' />
        2. Why Natural Coffee QC Requires a Different Approach
      </h2>

      <p className='my-4'>
        In washed processing, the fruit is removed early and the bean is dried in a protective parchment shell. Processors can detect and correct issues during fermentation, washing, and grading channels. Naturals offer no such safety net. The cherry dries as a whole unit, meaning <strong>quality (or defects) are locked in at the cherry stage and amplified during drying</strong>.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border border-gray-300 px-4 py-2 text-left font-semibold'>QC Factor</th>
              <th className='border border-gray-300 px-4 py-2 text-left font-semibold'>Washed Process</th>
              <th className='border border-gray-300 px-4 py-2 text-left font-semibold'>Natural/Dry Process</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 px-4 py-2 font-medium'>Cherry selection impact</td>
              <td className='border border-gray-300 px-4 py-2'>Important but partially correctable via float tanks and density sorting</td>
              <td className='border border-gray-300 px-4 py-2'>Critical &mdash; no correction opportunity after intake</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-2 font-medium'>Drying duration</td>
              <td className='border border-gray-300 px-4 py-2'>7&ndash;12 days (parchment)</td>
              <td className='border border-gray-300 px-4 py-2'>15&ndash;25 days (whole cherry)</td>
            </tr>
            <tr>
              <td className='border border-gray-300 px-4 py-2 font-medium'>Mold risk window</td>
              <td className='border border-gray-300 px-4 py-2'>Moderate (shorter drying)</td>
              <td className='border border-gray-300 px-4 py-2'>High (fruit sugars + extended drying)</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-2 font-medium'>Fermentation control</td>
              <td className='border border-gray-300 px-4 py-2'>Managed in tanks with pH/time monitoring</td>
              <td className='border border-gray-300 px-4 py-2'>Uncontrolled &mdash; happens inside the drying cherry</td>
            </tr>
            <tr>
              <td className='border border-gray-300 px-4 py-2 font-medium'>Defect visibility</td>
              <td className='border border-gray-300 px-4 py-2'>Visible after pulping; can sort parchment</td>
              <td className='border border-gray-300 px-4 py-2'>Hidden inside dried cherry until hulling</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-2 font-medium'>Labour intensity at drying</td>
              <td className='border border-gray-300 px-4 py-2'>Moderate turning schedule</td>
              <td className='border border-gray-300 px-4 py-2'>High &mdash; 3&ndash;4 turns/day for 2&ndash;3 weeks</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        For buyers, this risk profile means that <strong>evaluating a natural lot is really evaluating the drying station&apos;s discipline</strong>. A well-run station with strict cherry intake, raised beds, proper turning schedules, and moisture monitoring will consistently deliver clean naturals. A station that shortcuts any of these stages will produce lots with hidden defects that only appear in the roaster or cup.
      </p>

      {/* SECTION 3: CHERRY SELECTION */}
      <h2 id='cherry-selection' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <PiPlant className='text-amber-600' />
        3. Stage 1 &mdash; Cherry Selection and Intake QC
      </h2>

      <p className='my-4'>
        Cherry selection is the single most consequential QC step in natural processing. Unlike washed coffee, where pulping and fermentation can partially compensate for mixed-ripeness cherries, naturals preserve every characteristic of the fruit, good and bad. <Link href='/insights/selective-coffee-harvesting' className='text-amber-700 hover:underline'>Selective harvesting</Link> at the field level is what makes consistent cherry selection possible at intake.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-3'>What to look for at a well-run station</h3>
      <ul className='space-y-2 my-4 list-disc list-inside text-gray-800'>
        <li><strong>Ripeness sorting:</strong> Only fully ripe (deep red to purple) cherries accepted. Unripe (green/yellow) and overripe (brown/black) rejected on intake.</li>
        <li><strong>Float separation:</strong> Cherries placed in water tanks; floaters (low density, often damaged or underripe) skimmed off.</li>
        <li><strong>Visual inspection:</strong> Hand-sorting to remove insect-damaged, diseased, or mechanically damaged cherries.</li>
        <li><strong>Same-day spreading:</strong> Accepted cherries spread on drying beds within hours of harvest to prevent uncontrolled fermentation.</li>
      </ul>

      <h3 className='text-xl font-bold mt-8 mb-3'>Regional Cherry Quality Profiles</h3>
      <p className='my-4'>
        Cherry quality and processing norms differ meaningfully across Ethiopian growing zones. Knowing these differences helps buyers set realistic expectations per origin:
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-gray-900 mb-2'>Guji (Uraga, Hambela, Shakiso)</h4>
          <p className='text-sm text-gray-700'>High altitude (1,800&ndash;2,200&nbsp;m). Dense, uniform cherries with strong berry and stone-fruit potential. Well-established specialty stations with strict intake sorting. G1 naturals regularly score 85&ndash;88+.</p>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-gray-900 mb-2'>Sidamo (Bensa, Chire, Dale)</h4>
          <p className='text-sm text-gray-700'>Varied altitude (1,600&ndash;2,200&nbsp;m). Wide quality range&mdash;top stations produce complex stone-fruit and citrus naturals, but inconsistent cherry sorting remains common at lower-tier sites. Check lot-level cupping data.</p>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-gray-900 mb-2'>Yirgacheffe (Kochere, Gedeb, Aricha)</h4>
          <p className='text-sm text-gray-700'>Renowned for floral and jasmine notes, though most Yirgacheffe is washed. Natural lots are less common but can deliver exceptional fruit-floral complexity when drying is well-managed. Higher premium, smaller volumes.</p>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-gray-900 mb-2'>Harar (East Ethiopia)</h4>
          <p className='text-sm text-gray-700'>Almost exclusively natural processed. Lower altitude (1,400&ndash;1,800&nbsp;m) produces full-bodied, winey, blueberry-noted lots. Cherry selection varies widely&mdash;traditional garden/forest coffee with less standardised intake. Lot-to-lot variance is higher.</p>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-gray-900 mb-2'>Jimma / Limu (Western Ethiopia)</h4>
          <p className='text-sm text-gray-700'>Large-volume commercial natural regions. Cherry selection tends to be less rigorous. Best suited for commercial-grade naturals (G3&ndash;G4) destined for blends. Select stations producing G2 lots for targeted sourcing.</p>
        </div>
      </div>

      <p className='my-4'>
        For detailed flavour profiles of each region, see our guides on <Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline font-bold'>Guji</Link>, <Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline font-bold'>Sidamo</Link>, <Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline font-bold'>Yirgacheffe</Link>, <Link href='/ethiopian-coffee-harar' className='text-amber-700 hover:underline font-bold'>Harar</Link>, and <Link href='/ethiopian-coffee-jimma' className='text-amber-700 hover:underline font-bold'>Jimma</Link> coffees.
      </p>

      {/* SECTION 4: DRYING PROCESS */}
      <h2 id='drying-process' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <PiSun className='text-amber-600' />
        4. Stage 2 &mdash; Drying Process and Quality Checkpoints
      </h2>

      <p className='my-4'>
        Drying is the longest and most labour-intensive phase of natural processing. Ethiopian naturals are typically dried on <strong>raised African beds</strong> (wire mesh stretched over wooden frames) at 3&ndash;5&nbsp;cm cherry depth, turned 3&ndash;4 times per day. The process takes 15&ndash;25 days depending on altitude, ambient temperature, humidity, and cherry size.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-3'>Drying Timeline and QC Milestones</h3>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border border-gray-300 px-4 py-2 text-left font-semibold'>Phase</th>
              <th className='border border-gray-300 px-4 py-2 text-left font-semibold'>Days</th>
              <th className='border border-gray-300 px-4 py-2 text-left font-semibold'>Moisture</th>
              <th className='border border-gray-300 px-4 py-2 text-left font-semibold'>Key QC Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 px-4 py-2 font-medium'>Initial spread</td>
              <td className='border border-gray-300 px-4 py-2'>Day 0&ndash;1</td>
              <td className='border border-gray-300 px-4 py-2'>~60&ndash;65&nbsp;%</td>
              <td className='border border-gray-300 px-4 py-2'>Thin layer on beds; remove any remaining unripe or damaged cherries</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-2 font-medium'>Active fermentation</td>
              <td className='border border-gray-300 px-4 py-2'>Day 2&ndash;5</td>
              <td className='border border-gray-300 px-4 py-2'>~45&ndash;55&nbsp;%</td>
              <td className='border border-gray-300 px-4 py-2'>Turn 4&times;/day to prevent mold; shade during peak heat to slow fermentation; cover at night</td>
            </tr>
            <tr>
              <td className='border border-gray-300 px-4 py-2 font-medium'>Skin drying</td>
              <td className='border border-gray-300 px-4 py-2'>Day 6&ndash;10</td>
              <td className='border border-gray-300 px-4 py-2'>~25&ndash;40&nbsp;%</td>
              <td className='border border-gray-300 px-4 py-2'>Cherry skin darkens and shrinks; continue 3&ndash;4&times;/day turning; check for early mold signs</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-2 font-medium'>Conditioning</td>
              <td className='border border-gray-300 px-4 py-2'>Day 11&ndash;18</td>
              <td className='border border-gray-300 px-4 py-2'>~12&ndash;22&nbsp;%</td>
              <td className='border border-gray-300 px-4 py-2'>Moisture migration from inner bean to surface; continued turning; begin moisture meter checks</td>
            </tr>
            <tr>
              <td className='border border-gray-300 px-4 py-2 font-medium'>Target reached</td>
              <td className='border border-gray-300 px-4 py-2'>Day 18&ndash;25</td>
              <td className='border border-gray-300 px-4 py-2'>11&ndash;12&nbsp;%</td>
              <td className='border border-gray-300 px-4 py-2'>Confirm with calibrated moisture meter; consolidate to deeper beds or bag for resting</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className='text-xl font-bold mt-8 mb-3'>Common Drying Defects and Root Causes</h3>
      <p className='my-4'>
        Most quality failures in Ethiopian naturals trace back to the drying phase. The table below maps common defects to their processing root causes&mdash;useful when evaluating a pre-shipment sample or diagnosing a rejected lot.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-red-50'>
              <th className='border border-gray-300 px-4 py-2 text-left font-semibold'>Defect</th>
              <th className='border border-gray-300 px-4 py-2 text-left font-semibold'>Root Cause</th>
              <th className='border border-gray-300 px-4 py-2 text-left font-semibold'>Cup Impact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 px-4 py-2 font-medium'>Mold / fungal damage</td>
              <td className='border border-gray-300 px-4 py-2'>Insufficient turning, rain exposure, bed over-loading, ground contact</td>
              <td className='border border-gray-300 px-4 py-2'>Musty, earthy off-flavours; lot rejection</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-2 font-medium'>Over-fermentation</td>
              <td className='border border-gray-300 px-4 py-2'>Cherries left in piles before bedding, slow initial drying, high ambient humidity</td>
              <td className='border border-gray-300 px-4 py-2'>Vinegar, sour, boozy, or phenolic tastes</td>
            </tr>
            <tr>
              <td className='border border-gray-300 px-4 py-2 font-medium'>Uneven moisture</td>
              <td className='border border-gray-300 px-4 py-2'>Irregular turning, mixed cherry sizes on same bed, bed depth too thick</td>
              <td className='border border-gray-300 px-4 py-2'>Inconsistent roast; some beans bake while others under-develop</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-2 font-medium'>Insect damage (CBB)</td>
              <td className='border border-gray-300 px-4 py-2'>Coffee berry borer infestation pre-harvest, inadequate sorting at intake</td>
              <td className='border border-gray-300 px-4 py-2'>Dirty, fermented notes; physical bore holes visible in green</td>
            </tr>
            <tr>
              <td className='border border-gray-300 px-4 py-2 font-medium'>Foreign matter / stones</td>
              <td className='border border-gray-300 px-4 py-2'>Ground contact (patio drying), poor station hygiene, wind-blown debris</td>
              <td className='border border-gray-300 px-4 py-2'>Equipment risk; automatic rejection at import QC</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-2 font-medium'>Faded / bleached beans</td>
              <td className='border border-gray-300 px-4 py-2'>Over-drying below 10&nbsp;% moisture, excessive direct midday sun</td>
              <td className='border border-gray-300 px-4 py-2'>Flat, papery, or woody flavour; poor shelf life</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        For the full Ethiopian defect classification system and how defect counts translate to grade assignments, see our <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline font-bold'>green coffee quality control, defects, and grading guide</Link>.
      </p>

      {/* SECTION 5: MOISTURE & STORAGE */}
      <h2 id='moisture-storage' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <PiDropHalfBottom className='text-amber-600' />
        5. Stage 3 &mdash; Moisture Stabilisation and Pre-Milling Storage
      </h2>

      <p className='my-4'>
        Once cherries reach the 11&ndash;12&nbsp;% moisture target, they enter a <strong>resting and stabilisation phase</strong> before transport to the dry mill. This step is critical for naturals because moisture inside the dried cherry can migrate unevenly, and storage conditions in Ethiopia&apos;s varied climate zones introduce reabsorption risk.
      </p>

      <div className='bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6'>
        <h3 className='text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2'>
          <PiWarehouse className='text-blue-700' />
          Storage Best Practices for Dried Cherry
        </h3>
        <ul className='space-y-2 text-sm text-gray-800'>
          <li><strong>Target moisture at bagging:</strong> 11.0&ndash;12.0&nbsp;% confirmed by calibrated moisture meter (not squeeze tests alone).</li>
          <li><strong>Bag material:</strong> Clean jute or GrainPro-lined bags to prevent moisture migration.</li>
          <li><strong>Warehouse conditions:</strong> Ventilated, off the ground on pallets, away from walls. Relative humidity below 65&nbsp;%.</li>
          <li><strong>Maximum storage time:</strong> 2&ndash;4 weeks at origin before milling is ideal. Extended storage (6+ weeks) at high humidity accelerates flavour fade and raises mold risk.</li>
          <li><strong>Pest management:</strong> Regular inspection for storage pests (e.g., coffee weevil). No chemical treatment on the coffee itself.</li>
        </ul>
      </div>

      <p className='my-4'>
        For buyers, <strong>storage duration at origin is a hidden quality variable</strong>. If a coffee was dried to specification but then sat in a poorly ventilated warehouse for three months before milling, you may receive technically &ldquo;on-spec&rdquo; green that cups flat or woody. Ask your exporter about harvest-to-mill lead time when evaluating a lot.
      </p>

      {/* SECTION 6: GRADING AT MARKET ENTRY */}
      <h2 id='grading-market-entry' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineScale className='text-amber-600' />
        6. Stage 4 &mdash; Ethiopian Grading and QC at Market Entry
      </h2>

      <p className='my-4'>
        After drying and storage, natural coffee enters the formal grading system&mdash;either through the Ethiopia Commodity Exchange (ECX) or through the Direct Specialty License (DSL) pathway for exporters with specialty lots scoring 85+ points.
      </p>

      <p className='my-4'>
        Ethiopian coffee grading combines a <strong>raw/physical evaluation (40&nbsp;% weight)</strong> and a <strong>cup quality evaluation (60&nbsp;% weight)</strong>. For naturals, the physical evaluation is applied to the hulled green beans (post-milling), so drying-stage defects are fully exposed at this point.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border border-gray-300 px-4 py-2 text-left font-semibold'>Grade</th>
              <th className='border border-gray-300 px-4 py-2 text-left font-semibold'>Defects / 300&nbsp;g</th>
              <th className='border border-gray-300 px-4 py-2 text-left font-semibold'>Typical Use</th>
              <th className='border border-gray-300 px-4 py-2 text-left font-semibold'>Buyer Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 px-4 py-2 font-medium'>G1</td>
              <td className='border border-gray-300 px-4 py-2'>0&ndash;3</td>
              <td className='border border-gray-300 px-4 py-2'>Premium specialty, single origin</td>
              <td className='border border-gray-300 px-4 py-2'>Cupping score typically 85+. Highest price tier. Verify with PSS.</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-2 font-medium'>G2</td>
              <td className='border border-gray-300 px-4 py-2'>4&ndash;12</td>
              <td className='border border-gray-300 px-4 py-2'>Specialty, high commercial</td>
              <td className='border border-gray-300 px-4 py-2'>Most common specialty import grade. Clean cup with minor physical defects.</td>
            </tr>
            <tr>
              <td className='border border-gray-300 px-4 py-2 font-medium'>G3</td>
              <td className='border border-gray-300 px-4 py-2'>13&ndash;25</td>
              <td className='border border-gray-300 px-4 py-2'>High commercial, some specialty</td>
              <td className='border border-gray-300 px-4 py-2'>Can still cup well. Check for primary defects vs. minor secondaries.</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-2 font-medium'>G4</td>
              <td className='border border-gray-300 px-4 py-2'>26&ndash;45</td>
              <td className='border border-gray-300 px-4 py-2'>Commercial blends</td>
              <td className='border border-gray-300 px-4 py-2'>Higher defect count. Pricing reflects commodity level.</td>
            </tr>
            <tr>
              <td className='border border-gray-300 px-4 py-2 font-medium'>G5</td>
              <td className='border border-gray-300 px-4 py-2'>46&ndash;90</td>
              <td className='border border-gray-300 px-4 py-2'>Lower commercial</td>
              <td className='border border-gray-300 px-4 py-2'>Check for primary defects (full black, full sour, foreign matter).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Exporters holding a Direct Specialty License can bypass ECX auction for lots scoring 85+ points, enabling <strong>direct traceability from station to buyer</strong>. This pathway is the standard for sourcing traceable Ethiopian naturals at specialty grade.
      </p>

      <p className='my-4'>
        For full details on how coffee moves through the dry mill and export pipeline after grading, see our <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='text-amber-700 hover:underline font-bold'>dry milling and export guide</Link>.
      </p>

      {/* SECTION 7: BUYER'S QC CHECKLIST */}
      <h2 id='buyer-checklist' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineCheckCircle className='text-amber-600' />
        7. Buyer&apos;s QC Checklist for Ethiopian Natural Coffee
      </h2>

      <p className='my-4'>
        Use this checklist when evaluating a pre-shipment sample (PSS) or conducting an intake assessment of an Ethiopian natural lot. It covers the physical, sensory, and documentation checks that separate a reliable lot from a risky one.
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-6'>
        <div className='bg-green-50 p-6 rounded-lg border border-green-200'>
          <h3 className='text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2'>
            <HiOutlineCheckCircle className='text-green-700' />
            Physical Parameters
          </h3>
          <ul className='space-y-2 text-sm text-gray-800'>
            <li><strong>Moisture:</strong> 10.5&ndash;12.0&nbsp;% (reject above 12.5&nbsp;% or below 10.0&nbsp;%)</li>
            <li><strong>Water activity:</strong> Below 0.60 a<sub>w</sub> for safe transit</li>
            <li><strong>Screen size:</strong> At least 80&nbsp;% retention on screen 14+ for G1/G2</li>
            <li><strong>Defect count:</strong> Tally per SCAA/ICO method on 300&nbsp;g sample</li>
            <li><strong>Colour uniformity:</strong> Even green-blue to yellow-green; flag faded, dark, or mottled beans</li>
            <li><strong>Density:</strong> Higher density correlates with better roast development</li>
          </ul>
        </div>
        <div className='bg-green-50 p-6 rounded-lg border border-green-200'>
          <h3 className='text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2'>
            <HiOutlineCheckCircle className='text-green-700' />
            Sensory Evaluation
          </h3>
          <ul className='space-y-2 text-sm text-gray-800'>
            <li><strong>Clean cup:</strong> No ferment, mold, phenol, or medicinal taints</li>
            <li><strong>Sweetness:</strong> Naturals should express fruit sweetness (berry, stone fruit)</li>
            <li><strong>Body:</strong> Medium to heavy; thin body may indicate under-drying or faded lot</li>
            <li><strong>Flavour notes:</strong> Should match origin profile (see regional profiles in Section 3)</li>
            <li><strong>Uniformity:</strong> ≥5 of 6 cups should be consistent</li>
            <li><strong>Aftertaste:</strong> Clean finish; lingering ferment or harshness is a red flag</li>
          </ul>
        </div>
      </div>

      <div className='grid md:grid-cols-2 gap-6 my-6'>
        <div className='bg-green-50 p-6 rounded-lg border border-green-200'>
          <h3 className='text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2'>
            <HiOutlineShieldCheck className='text-green-700' />
            Documentation to Request
          </h3>
          <ul className='space-y-2 text-sm text-gray-800'>
            <li>ECX or DSL grade certificate with lot number</li>
            <li>Pre-shipment sample matching offer contract</li>
            <li>Cupping report from certified Q-grader</li>
            <li>Traceability record (station, woreda, zone, harvest period)</li>
            <li>Moisture certificate at time of bagging</li>
            <li>Phytosanitary and export clearance documents</li>
          </ul>
        </div>
        <div className='bg-red-50 p-6 rounded-lg border border-red-200'>
          <h3 className='text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2'>
            <HiOutlineExclamationTriangle className='text-red-700' />
            Red Flags &mdash; When to Walk Away
          </h3>
          <ul className='space-y-2 text-sm text-gray-800'>
            <li>Moisture above 12.5&nbsp;% &mdash; mold risk during transit</li>
            <li>Any full black or full sour beans in PSS &mdash; primary defects indicating processing failure</li>
            <li>Ferment or phenol in any cup of a 6-cup set &mdash; lot-wide contamination likely</li>
            <li>Exporter cannot provide station-level traceability &mdash; lot mixing probable</li>
            <li>Wide variation in bean colour or size &mdash; multiple lots blended post-hoc</li>
            <li>PSS that does not match offer sample &mdash; bait-and-switch risk</li>
          </ul>
        </div>
      </div>

      <p className='my-4'>
        For a practical guide to cupping and evaluating samples, see <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline font-bold'>how to cup and evaluate Ethiopian coffee samples</Link>.
      </p>

      {/* FAQ SECTION */}
      <section id='faq-dry-coffee' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200 mt-10'>
        <h2 className='text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2'>
          <HiOutlineQuestionMarkCircle className='text-amber-600' />
          8. Frequently Asked Questions
        </h2>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is dry processed coffee in Ethiopia?</h4>
            <p className='text-sm text-gray-600'>Dry processed (natural) coffee in Ethiopia involves drying whole coffee cherries on raised beds in the sun for 15 to 25 days. The fruit dries around the bean, imparting fruity, wine-like, and full-bodied flavour characteristics. The dried cherry is then hulled at the dry mill to produce export-ready green coffee.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What are the main defects in Ethiopian natural coffee?</h4>
            <p className='text-sm text-gray-600'>The most common defects are mold or fungal damage from inadequate turning, over-fermentation from delayed bedding or high humidity, uneven moisture from inconsistent drying, insect damage from coffee berry borer, and foreign matter from ground contact. Each traces to a specific processing failure that buyers can audit.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What moisture content is required for Ethiopian export coffee?</h4>
            <p className='text-sm text-gray-600'>Ethiopian export coffee must reach 11 to 12 percent moisture. Levels above 12.5 percent risk mold growth during ocean transit, while levels below 10 percent can crack beans during hulling and produce flat, woody cup profiles. Calibrated moisture meters are essential for accurate measurement.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How long does Ethiopian coffee take to dry on raised beds?</h4>
            <p className='text-sm text-gray-600'>Natural processed Ethiopian coffee takes 15 to 25 days on raised beds, depending on altitude, ambient temperature, and humidity. Higher-altitude stations in Guji or Yirgacheffe often require 20 to 25 days, while lower-altitude Harar sites may finish in 15 to 18 days. Cherries are turned 3 to 4 times daily throughout.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How does Ethiopia&apos;s grading system classify natural coffees?</h4>
            <p className='text-sm text-gray-600'>Ethiopian coffee is graded G1 through G5 based on defect count per 300 grams (40 percent weight) and cup quality score (60 percent weight). G1 naturals have 0 to 3 defects and typically cup at 85 or above. Most specialty natural imports are G2 (4 to 12 defects). Grades are assigned at ECX or by DSL-licensed exporters.</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <div className='bg-gradient-to-br from-amber-600 to-amber-800 text-white p-8 rounded-lg shadow-lg my-10'>
        <h2 className='text-3xl font-bold mb-4'>Source Quality-Verified Ethiopian Naturals</h2>
        <p className='text-lg mb-6 text-amber-50'>
          Ethio Coffee Import and Export PLC sources natural processed coffee from trusted stations across Guji, Sidamo, Yirgacheffe, Harar, and Jimma. Every lot ships with full traceability, certified cupping reports, and pre-shipment samples that match the contracted offer. Contact us to discuss your next purchase or request current availability.
        </p>
        <div className='flex flex-wrap gap-4'>
          <Link
            href='/offerings'
            className='bg-white text-amber-800 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors'
          >
            View Our Offerings
          </Link>
          <Link
            href='/contact-us'
            className='bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors border-2 border-white'
          >
            Contact Us
          </Link>
          <Link
            href='/ordering-info'
            className='bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors border-2 border-white'
          >
            How to Order
          </Link>
        </div>
      </div>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality &amp; Processing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality Control, Defects &amp; Grading</Link></li>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee Processing</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Dry Milling &amp; Export Guide</Link></li>
              <li>&bull; <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup &amp; Evaluate Ethiopian Coffee Samples</Link></li>
              <li>&bull; <Link href='/insights/selective-coffee-harvesting' className='text-amber-700 hover:underline'>Selective Coffee Harvesting</Link></li>
              <li>&bull; <Link href='/insights/new-sca-coffee-value-assessment' className='text-amber-700 hover:underline'>New SCA Coffee Value Assessment</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Ethiopian Coffee Origins</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline'>Ethiopian Coffee: Guji</Link></li>
              <li>&bull; <Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline'>Ethiopian Coffee: Sidamo</Link></li>
              <li>&bull; <Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline'>Ethiopian Coffee: Yirgacheffe</Link></li>
              <li>&bull; <Link href='/ethiopian-coffee-harar' className='text-amber-700 hover:underline'>Ethiopian Coffee: Harar</Link></li>
              <li>&bull; <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Ethiopian Coffee Certifications Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> This guide covers quality control for Ethiopian natural (dry processed) coffee, from cherry selection and drying through moisture stabilisation, grading, and buyer evaluation.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot; <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> &middot; <Link href='/about' className='underline'>About Ethio Coffee</Link> &middot; <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

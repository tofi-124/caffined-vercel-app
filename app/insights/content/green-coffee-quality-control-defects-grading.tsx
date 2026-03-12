import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineShieldCheck,
  HiOutlineMagnifyingGlass,
  HiOutlineBeaker,
  HiOutlineExclamationTriangle,
  HiOutlineHandRaised,
  HiOutlineChatBubbleLeftRight,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function GreenCoffeeQualityControlDefectsGrading({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        How to identify green coffee defects, evaluate samples, and protect your purchasing decisions
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2 text-sm text-gray-500'>
          Sorting green coffee beans for defect identification at an Ethiopian export warehouse. Systematic inspection protects roasters and importers from costly quality failures.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Green coffee beans being sorted and inspected for defects on a grading table at an Ethiopian coffee export facility'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Quality Control / Green Coffee Evaluation / Importer Resources</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-2 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0' /> Key Takeaway
        </p>
        <p className='text-sm leading-relaxed'>
          Mastering green coffee defects identification and physical quality measurements (moisture, water activity, density, screen size) gives importers and roasters the confidence to evaluate samples objectively, negotiate fair prices, and catch problems before they reach your roastery. This guide provides the defect classification tables, SCA requirements, and a step-by-step inspection protocol you can apply to every lot you assess.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#why-qc-matters' className='text-amber-700 hover:underline'>1. Why Green Coffee Quality Control Matters for Buyers</a></li>
          <li><a href='#understanding-defects' className='text-amber-700 hover:underline'>2. Understanding Green Coffee Defects</a></li>
          <li><a href='#sca-specialty-requirements' className='text-amber-700 hover:underline'>3. SCA Specialty Grade Requirements</a></li>
          <li><a href='#ethiopian-grading' className='text-amber-700 hover:underline'>4. Ethiopian Coffee Grading at a Glance</a></li>
          <li><a href='#physical-measurements' className='text-amber-700 hover:underline'>5. Physical Quality Measurements</a></li>
          <li><a href='#inspection-protocol' className='text-amber-700 hover:underline'>6. Practical Inspection Protocol for Buyers</a></li>
          <li><a href='#red-flags' className='text-amber-700 hover:underline'>7. Red Flags: When to Reject or Claim</a></li>
          <li><a href='#supplier-relationship' className='text-amber-700 hover:underline'>8. Building Quality Into Your Supplier Relationship</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>9. FAQ</a></li>
        </ol>
      </div>

      {/* SECTION 1 */}
      <h2 id='why-qc-matters' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineShieldCheck className='inline mr-2 text-amber-600' />
        Why Green Coffee Quality Control Matters for Buyers
      </h2>
      <p className='my-4'>
        A single defective lot can damage customer relationships, waste roasting capacity, and erode margins. Green coffee defects are not cosmetic issues; they translate directly into off-flavors, inconsistent roasts, and rejected batches. For importers and roasters, developing strong QC skills is the most reliable way to protect your business.
      </p>
      <p className='my-4'>
        Strong quality control also creates leverage in negotiations. When you can identify defects by name and quantify their impact, you negotiate from data rather than guesswork. You catch problems at the sample stage instead of the container stage. And you build the kind of supplier relationships where both sides benefit from shared standards.
      </p>
      <p className='my-4'>
        Quality control connects directly to the full supply chain. The <Link href='/insights/coffee-is-agriculture-production-farming' className='text-amber-700 hover:underline'>agricultural practices</Link> at origin determine which defects appear in your samples. The <Link href='/insights/coffee-is-processing-drying-milling' className='text-amber-700 hover:underline'>processing methods</Link> either eliminate or amplify them. The <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='text-amber-700 hover:underline'>dry milling stage</Link>, where hulling, size grading, density sorting, and hand-sorting occur, is the last line of defense before beans are bagged for export.
      </p>

      {/* SECTION 2 */}
      <h2 id='understanding-defects' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineMagnifyingGlass className='inline mr-2 text-amber-600' />
        Understanding Green Coffee Defects
      </h2>
      <p className='my-4'>
        Green coffee defects are physical imperfections in unroasted beans that negatively affect cup quality, roast consistency, or food safety. The Specialty Coffee Association (SCA) and origin-country grading systems classify defects into two severity categories. Recognizing each type is the foundation of every quality assessment.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Category 1 Defects (Primary)</h3>
      <p className='my-4'>
        Primary defects have a severe impact on cup quality. A single Category 1 defect can ruin an entire cup, and the SCA allows <span className='font-bold'>zero</span> Category 1 defects in a 350g specialty-grade sample.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse border border-gray-300 font-inconsolata text-sm'>
          <thead className='bg-dark text-primary'>
            <tr>
              <th className='border border-gray-300 p-3 text-left'>Defect</th>
              <th className='border border-gray-300 p-3 text-left'>Description</th>
              <th className='border border-gray-300 p-3 text-left'>Cause</th>
              <th className='border border-gray-300 p-3 text-left'>Cup Impact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Full Black</td>
              <td className='border border-gray-300 p-3'>Completely black, opaque bean</td>
              <td className='border border-gray-300 p-3'>Over-fermentation, fungal infection, dead cherry</td>
              <td className='border border-gray-300 p-3'>Fermented, rotten, ashy flavors</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Full Sour</td>
              <td className='border border-gray-300 p-3'>Light brown to yellowish, waxy surface</td>
              <td className='border border-gray-300 p-3'>Delayed processing, contaminated water</td>
              <td className='border border-gray-300 p-3'>Sour, vinegary, fermented taste</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Dried Cherry/Pod</td>
              <td className='border border-gray-300 p-3'>Bean still encased in dried cherry</td>
              <td className='border border-gray-300 p-3'>Incomplete hulling</td>
              <td className='border border-gray-300 p-3'>Fermented, musty off-flavors</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Fungus Damaged</td>
              <td className='border border-gray-300 p-3'>Visible fungal growth, powdery spores</td>
              <td className='border border-gray-300 p-3'>Improper drying, humid storage</td>
              <td className='border border-gray-300 p-3'>Musty, moldy; potential food safety concern</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Foreign Matter</td>
              <td className='border border-gray-300 p-3'>Stones, sticks, metal, other debris</td>
              <td className='border border-gray-300 p-3'>Poor sorting, contamination</td>
              <td className='border border-gray-300 p-3'>Equipment damage, safety hazard</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Severe Insect Damage</td>
              <td className='border border-gray-300 p-3'>Multiple bore holes ({'>'}3), extensive tunneling</td>
              <td className='border border-gray-300 p-3'>Coffee berry borer (broca)</td>
              <td className='border border-gray-300 p-3'>Dirty, musty flavors; inconsistent roast</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Category 2 Defects (Secondary)</h3>
      <p className='my-4'>
        Secondary defects are less severe individually but still measurable in the cup. The SCA allows a maximum of <span className='font-bold'>five</span> full Category 2 defects in a 350g specialty-grade sample.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse border border-gray-300 font-inconsolata text-sm'>
          <thead className='bg-dark text-primary'>
            <tr>
              <th className='border border-gray-300 p-3 text-left'>Defect</th>
              <th className='border border-gray-300 p-3 text-left'>Equivalence</th>
              <th className='border border-gray-300 p-3 text-left'>Cause</th>
              <th className='border border-gray-300 p-3 text-left'>Cup Impact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Partial Black</td>
              <td className='border border-gray-300 p-3'>3 beans = 1 full defect</td>
              <td className='border border-gray-300 p-3'>Partial fermentation, drought stress</td>
              <td className='border border-gray-300 p-3'>Flat, dull flavors if concentrated</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Partial Sour</td>
              <td className='border border-gray-300 p-3'>3 beans = 1 full defect</td>
              <td className='border border-gray-300 p-3'>Partial fermentation issues</td>
              <td className='border border-gray-300 p-3'>Mild sourness, slight ferment</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Parchment</td>
              <td className='border border-gray-300 p-3'>5 beans = 1 full defect</td>
              <td className='border border-gray-300 p-3'>Incomplete hulling</td>
              <td className='border border-gray-300 p-3'>Papery taste; uneven roast</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Floater/Faded</td>
              <td className='border border-gray-300 p-3'>5 beans = 1 full defect</td>
              <td className='border border-gray-300 p-3'>Over-drying, age, improper storage</td>
              <td className='border border-gray-300 p-3'>Flat, stale, lacking vibrancy</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Immature/Quaker</td>
              <td className='border border-gray-300 p-3'>5 beans = 1 full defect</td>
              <td className='border border-gray-300 p-3'>Unripe cherry picked too early</td>
              <td className='border border-gray-300 p-3'>Grassy, peanutty, astringent</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Withered</td>
              <td className='border border-gray-300 p-3'>5 beans = 1 full defect</td>
              <td className='border border-gray-300 p-3'>Drought stress during development</td>
              <td className='border border-gray-300 p-3'>Grassy, straw-like notes</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Shell/Ear</td>
              <td className='border border-gray-300 p-3'>5 beans = 1 full defect</td>
              <td className='border border-gray-300 p-3'>Genetic or pollination issues</td>
              <td className='border border-gray-300 p-3'>Uneven roast; burns easily</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Broken/Chipped</td>
              <td className='border border-gray-300 p-3'>5 beans = 1 full defect</td>
              <td className='border border-gray-300 p-3'>Aggressive hulling or handling</td>
              <td className='border border-gray-300 p-3'>Uneven roast; can burn</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Slight Insect Damage</td>
              <td className='border border-gray-300 p-3'>10 beans = 1 full defect</td>
              <td className='border border-gray-300 p-3'>Coffee berry borer (1-2 holes)</td>
              <td className='border border-gray-300 p-3'>Minimal if isolated</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>How Defect Equivalence Works</h3>
      <p className='my-4'>
        Not all defective beans count equally. The SCA uses an equivalence system: one Category 1 defect bean equals one &quot;full defect,&quot; while multiple Category 2 beans are needed to equal one full defect. For example, finding 10 broken beans in your 350g sample counts as 2 full defects (10 ÷ 5 = 2). This system lets you calculate a single defect score for any sample, which maps directly to grade classifications.
      </p>

      {/* SECTION 3 */}
      <h2 id='sca-specialty-requirements' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineShieldCheck className='inline mr-2 text-amber-600' />
        SCA Specialty Grade Requirements
      </h2>
      <p className='my-4'>
        The SCA&apos;s Green Arabica Coffee Classification System defines specialty grade as the highest quality tier. Meeting it requires passing both physical and sensory evaluation:
      </p>
      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-2'>SCA Specialty Grade Standard</h4>
        <ul className='font-inconsolata list-disc ml-5 text-sm'>
          <li className='my-2'><span className='font-bold'>Sample size:</span> 350g of green coffee</li>
          <li className='my-2'><span className='font-bold'>Category 1 defects:</span> Zero allowed</li>
          <li className='my-2'><span className='font-bold'>Category 2 defects:</span> Maximum 5 full defects</li>
          <li className='my-2'><span className='font-bold'>Quakers in roasted sample:</span> Maximum 3 in 100g</li>
          <li className='my-2'><span className='font-bold'>Moisture content:</span> 10-12%</li>
          <li className='my-2'><span className='font-bold'>Cup score:</span> 80+ points (out of 100)</li>
        </ul>
      </div>
      <p className='my-4'>
        The SCA updated its sensory evaluation framework in 2024 with the Coffee Value Assessment (CVA), which replaces the traditional 100-point cupping form with a more structured sensory approach. Most importers and exporters still reference the traditional scoring system for contract specifications. To develop your hands-on cupping skills and learn the practical sensory evaluation process, see our <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline font-bold'>guide to cupping and evaluating Ethiopian coffee samples</Link>. For a breakdown of the new CVA system, see our guide on the <Link href='/insights/new-sca-coffee-value-assessment' className='text-amber-700 hover:underline'>SCA Coffee Value Assessment</Link>.
      </p>

      {/* SECTION 4 */}
      <h2 id='ethiopian-grading' className='text-3xl font-extrabold mt-10 mb-4'>
        Ethiopian Coffee Grading at a Glance
      </h2>
      <p className='my-4'>
        Ethiopia uses its own grading system (G1 through G5) based on defect count per 300g sample and cup quality. This system runs parallel to the SCA framework. Here is a condensed reference:
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse border border-gray-300 font-inconsolata text-sm'>
          <thead className='bg-dark text-primary'>
            <tr>
              <th className='border border-gray-300 p-3 text-left'>Grade</th>
              <th className='border border-gray-300 p-3 text-left'>Defects per 300g</th>
              <th className='border border-gray-300 p-3 text-left'>Quality Level</th>
              <th className='border border-gray-300 p-3 text-left'>Typical Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>G1</td>
              <td className='border border-gray-300 p-3'>0-3</td>
              <td className='border border-gray-300 p-3'>Specialty</td>
              <td className='border border-gray-300 p-3'>Single-origin, competition lots</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>G2</td>
              <td className='border border-gray-300 p-3'>4-12</td>
              <td className='border border-gray-300 p-3'>Specialty</td>
              <td className='border border-gray-300 p-3'>Quality single-origin, premium blends</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>G3</td>
              <td className='border border-gray-300 p-3'>13-25</td>
              <td className='border border-gray-300 p-3'>Premium Commercial</td>
              <td className='border border-gray-300 p-3'>Quality blends, commercial single-origin</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>G4</td>
              <td className='border border-gray-300 p-3'>26-45</td>
              <td className='border border-gray-300 p-3'>Commercial</td>
              <td className='border border-gray-300 p-3'>Standard blends, commodity market</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>G5</td>
              <td className='border border-gray-300 p-3'>46-100</td>
              <td className='border border-gray-300 p-3'>Below Commercial</td>
              <td className='border border-gray-300 p-3'>Domestic market, instant coffee</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        Washed coffees typically achieve G1 or G2 more readily because the washing process removes many defect-causing factors before drying. Natural processed coffees show more variation; G1 naturals command significant premiums because achieving near-zero defects without washing requires exceptional sorting and drying practices.
      </p>
      <p className='my-4'>
        For complete grade descriptions, pricing ranges by grade, origin-specific grade expectations, and the full grading process, see our dedicated <Link href='/coffee-grading-ethiopia' className='text-amber-700 hover:underline font-semibold'>Ethiopian Coffee Grading System</Link> reference page.
      </p>

      {/* SECTION 5 */}
      <h2 id='physical-measurements' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineBeaker className='inline mr-2 text-amber-600' />
        Physical Quality Measurements
      </h2>
      <p className='my-4'>
        Defect counts are only part of the quality picture. Four physical measurements complete the assessment and directly affect how your coffee stores, roasts, and cups.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Moisture Content</h3>
      <p className='my-4'>
        Moisture content is the single most important physical measurement for green coffee buyers. It determines storage stability, weight accuracy, roast behavior, and flavor preservation. The <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='text-amber-700 hover:underline'>science of coffee preservation</Link> starts here.
      </p>
      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-2'>Moisture Guidelines</h4>
        <ul className='font-inconsolata list-disc ml-5 text-sm'>
          <li className='my-2'><span className='font-bold'>Optimal range:</span> 10-12% for Arabica</li>
          <li className='my-2'><span className='font-bold'>Acceptable:</span> 9-13%</li>
          <li className='my-2'><span className='font-bold'>Too low (&lt;9%):</span> Faded flavors, brittle beans, poor roast development</li>
          <li className='my-2'><span className='font-bold'>Too high (&gt;13%):</span> Risk of mold growth, fermentation, rapid quality degradation during transit</li>
          <li className='my-2'><span className='font-bold'>Best practice:</span> Use a calibrated moisture meter; take multiple readings from different bags in the lot</li>
        </ul>
      </div>
      <p className='my-4'>
        Most contracts specify 10-12% moisture as a requirement. Green coffee shipped above 12.5% risks mold during the weeks of sea freight between Djibouti and destination ports. Coffee that arrives below 9% may taste flat and show premature aging. Always confirm moisture readings before approving a pre-shipment sample.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Water Activity (aw)</h3>
      <p className='my-4'>
        Water activity measures the &quot;free&quot; water available for microbial growth and chemical reactions. It is increasingly used alongside moisture content because two coffees at the same moisture percentage can have different water activity levels depending on bean density and structure.
      </p>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'><span className='font-bold'>Target range:</span> 0.50-0.60 aw</li>
        <li className='my-2'><span className='font-bold'>Above 0.70 aw:</span> Significant mold risk, even if moisture reads within range</li>
        <li className='my-2'><span className='font-bold'>Below 0.45 aw:</span> May indicate over-drying or prolonged storage</li>
      </ul>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Screen Size</h3>
      <p className='my-4'>
        Screen size indicates bean size using standardized sieves. Uniform screen size improves roast consistency because beans of similar mass absorb heat at similar rates.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse border border-gray-300 font-inconsolata text-sm'>
          <thead className='bg-dark text-primary'>
            <tr>
              <th className='border border-gray-300 p-3 text-left'>Screen Size</th>
              <th className='border border-gray-300 p-3 text-left'>Hole Diameter</th>
              <th className='border border-gray-300 p-3 text-left'>Classification</th>
              <th className='border border-gray-300 p-3 text-left'>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>18+</td>
              <td className='border border-gray-300 p-3'>7.14mm+</td>
              <td className='border border-gray-300 p-3'>Large</td>
              <td className='border border-gray-300 p-3'>Premium pricing in most origins</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>16-17</td>
              <td className='border border-gray-300 p-3'>6.35-6.75mm</td>
              <td className='border border-gray-300 p-3'>Medium-Large</td>
              <td className='border border-gray-300 p-3'>Standard specialty range</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>14-15</td>
              <td className='border border-gray-300 p-3'>5.56-5.95mm</td>
              <td className='border border-gray-300 p-3'>Medium</td>
              <td className='border border-gray-300 p-3'>Common for Ethiopian heirloom varieties</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>13 and below</td>
              <td className='border border-gray-300 p-3'>&lt;5.16mm</td>
              <td className='border border-gray-300 p-3'>Small</td>
              <td className='border border-gray-300 p-3'>Peaberry or undersized</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        Ethiopian heirloom varieties naturally produce smaller beans than many other origins. A screen 14-15 Ethiopian lot may cup significantly better than a screen 18 from another country. <Link href='/insights/coffee-plant-taxonomy-species-varieties' className='text-amber-700 hover:underline'>Understanding coffee varieties</Link> helps contextualize screen size expectations when evaluating Ethiopian samples.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Density</h3>
      <p className='my-4'>
        Bean density correlates with altitude, ripeness, and potential cup quality. Higher-density beans typically come from higher altitudes (1,800m+ in Ethiopia) and develop more complex flavor compounds during slower maturation.
      </p>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'><span className='font-bold'>High density:</span> &gt;680 g/L. Typically high-altitude specialty grade</li>
        <li className='my-2'><span className='font-bold'>Medium density:</span> 620-680 g/L. Standard quality range</li>
        <li className='my-2'><span className='font-bold'>Low density:</span> &lt;620 g/L. Lower altitude or quality issues</li>
      </ul>
      <p className='my-4'>
        You can measure density with a graduated cylinder and a scale: fill the cylinder to a known volume, weigh the coffee, and calculate grams per liter. Comparing density across seasons for the same origin helps track quality consistency.
      </p>

      {/* SECTION 6 */}
      <h2 id='inspection-protocol' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineHandRaised className='inline mr-2 text-amber-600' />
        Practical Inspection Protocol for Buyers
      </h2>
      <p className='my-4'>
        Whether you are evaluating an offer sample from a new supplier or conducting an arrival inspection at your warehouse, follow this five-step protocol. Consistent process produces comparable results across samples and seasons.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Step 1: Visual Inspection</h3>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>Examine overall color consistency: blue-green indicates fresh washed coffee; yellow-brown is typical for naturals</li>
        <li className='my-2'>Look for obvious defects, foreign matter, and broken beans on initial scan</li>
        <li className='my-2'>Assess uniformity of bean size and shape</li>
        <li className='my-2'>Smell the green coffee. Note any musty, fermented, or chemical odors. Off-odors in green rarely improve after roasting</li>
      </ul>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Step 2: Defect Count</h3>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>Weigh out a 350g representative sample (SCA standard). If the supplier sent less than 350g, adjust calculations proportionally</li>
        <li className='my-2'>Sort under full-spectrum lighting (4000K, 1200 Lux) against a matte black surface</li>
        <li className='my-2'>Separate Category 1 defects first. Count each type individually</li>
        <li className='my-2'>Then separate Category 2 defects. Apply equivalence ratios to calculate full defect count</li>
        <li className='my-2'>Record total defect score and compare against the grade on the supplier&apos;s certificate</li>
      </ul>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Step 3: Physical Measurements</h3>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>Measure moisture content with a calibrated meter. Take readings from multiple positions in the sample</li>
        <li className='my-2'>Measure water activity if equipment is available. This is especially important for lots that will be stored for more than 3 months</li>
        <li className='my-2'>Check screen size distribution if uniformity is relevant to your roast profile</li>
        <li className='my-2'>Measure density if you need altitude confirmation or want to benchmark against prior arrivals</li>
      </ul>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Step 4: Sample Roast and Cup</h3>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>Sample roast to SCA protocol: light to medium (Agtron 58-63), 8.25g coffee to 150ml water at 93°C</li>
        <li className='my-2'>Count quakers in the roasted sample. More than 3 quakers per 100g indicates immature cherry selection issues</li>
        <li className='my-2'>Cup following SCA protocol: evaluate fragrance/aroma, flavor, aftertaste, acidity, body, balance, uniformity, clean cup, sweetness, and overall</li>
        <li className='my-2'>Note any specific cup defects: ferment, phenol, rio, or baggy flavors</li>
      </ul>
      <p className='my-4'>
        For a detailed walkthrough of the cupping process, see our guide on <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>cupping and evaluating Ethiopian coffee samples</Link>.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Step 5: Compare Against Specifications</h3>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>Compare your defect count, moisture, and cup score against the lot&apos;s documentation (grade certificate, offer sheet, type sample data)</li>
        <li className='my-2'>For arrival inspections: compare the container lot against the pre-shipment sample you approved. Meaningful variation between the two warrants discussion with your supplier</li>
        <li className='my-2'>Document all results. Photos of defects, meter readings, and cupping scores create an objective record for any claims process</li>
      </ul>

      {/* SECTION 7 */}
      <h2 id='red-flags' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineExclamationTriangle className='inline mr-2 text-amber-600' />
        Red Flags: When to Reject or Claim
      </h2>
      <p className='my-4'>
        Not every lot that meets grade specifications will work for your needs. These triggers warrant immediate attention:
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Automatic Rejection Triggers</h3>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'><span className='font-bold'>Any Category 1 defects</span> in a lot sold as specialty grade</li>
        <li className='my-2'><span className='font-bold'>Moisture above 13%</span> on arrival. The mold risk during storage is too high to justify keeping the lot</li>
        <li className='my-2'><span className='font-bold'>Musty, chemical, or phenolic odors</span> in green. These will not roast out</li>
        <li className='my-2'><span className='font-bold'>Foreign matter</span> beyond incidental amounts. This suggests sorting failures at origin</li>
        <li className='my-2'><span className='font-bold'>Cup defects</span> including ferment, rio, or medicinal notes</li>
      </ul>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Claim Triggers (Negotiate, Don&apos;t Reject Outright)</h3>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'><span className='font-bold'>Defect count exceeds stated grade</span> but lot is still usable. Request a price adjustment proportional to grade difference</li>
        <li className='my-2'><span className='font-bold'>Moisture at 12.5-13%.</span> Acceptable if you can use the lot quickly, but worth negotiating a discount for the risk</li>
        <li className='my-2'><span className='font-bold'>Pre-shipment sample differs from arrival.</span> Document the differences with photos and data, then contact your supplier. Reputable exporters will work toward resolution</li>
        <li className='my-2'><span className='font-bold'>Excessive quakers</span> in roasted sample (&gt;5% of beans). Indicates immature cherry selection at origin</li>
      </ul>
      <p className='my-4'>
        If you are evaluating experimental or anaerobic lots that require additional QC beyond standard grading, consult the dedicated <Link href='/insights/anaerobic-ethiopian-coffee-processing-buyers-guide' className='text-amber-700 hover:underline font-semibold'>Ethiopian anaerobic processing buyer&apos;s guide</Link> for specific fermentation documentation and sensory markers.
      </p>

      {/* SECTION 8 */}
      <h2 id='supplier-relationship' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineChatBubbleLeftRight className='inline mr-2 text-amber-600' />
        Building Quality Into Your Supplier Relationship
      </h2>
      <p className='my-4'>
        Quality control works best as a partnership between buyer and supplier. Clear communication prevents most quality disputes before they start.
      </p>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'><span className='font-bold'>Communicate specifications in writing.</span> Grade, moisture range, screen size, processing method, and any maximum defect thresholds should be in your purchase contract or confirmation</li>
        <li className='my-2'><span className='font-bold'>Request type samples</span> before committing to volume. This lets you calibrate expectations for the origin, grade, and processing method</li>
        <li className='my-2'><span className='font-bold'>Require pre-shipment samples (PSS)</span> drawn from the actual export lot. Approve the PSS before the container ships</li>
        <li className='my-2'><span className='font-bold'>Provide arrival feedback.</span> Positive feedback reinforces what works. Negative feedback, delivered with data, helps your supplier improve for the next season</li>
        <li className='my-2'><span className='font-bold'>Build multi-season relationships.</span> Exporters prioritize consistent buyers during allocation of limited G1 and micro-lot volumes</li>
      </ul>
      <p className='my-4'>
        At Ethio Coffee Import and Export PLC, we share SCA cupping reports, moisture data, and defect counts for every lot. Detailed QC discussions help us select the right lots from our <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>trusted sourcing network</Link> and ensure consistency across shipments. Three decades of heritage sourcing relationships across Ethiopia&apos;s coffee regions give us the depth of supply to match your quality requirements season after season.
      </p>

      {/* SECTION 9: FAQ */}
      <section id='faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200 mt-10'>
        <h2 className='text-2xl font-bold mb-6 text-gray-900'>Frequently Asked Questions About Green Coffee Defects and Quality</h2>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the difference between Category 1 and Category 2 green coffee defects?</h4>
            <p className='text-sm text-gray-600'>Category 1 defects are severe imperfections like full black beans, full sour beans, and foreign matter. One Category 1 defect disqualifies a lot from specialty grade. Category 2 defects, such as broken beans, slight insect damage, or partial blacks, are less impactful individually and require multiple beans to count as one full defect.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How does Ethiopia&apos;s coffee grading system work?</h4>
            <p className='text-sm text-gray-600'>Ethiopia grades coffee from G1 (highest) to G5 (lowest) based on defect count per 300g sample and cup quality. G1 allows 0 to 3 defects and scores 85+ on SCA cupping. G2 allows 4 to 12 defects. Washed coffees are typically G1 or G2; natural lots are often G3 to G5 unless hand-sorted to specialty standards.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What should importers check when evaluating a green coffee sample?</h4>
            <p className='text-sm text-gray-600'>Start with visual inspection for color, uniformity, and obvious defects. Measure moisture content (target 10 to 12 percent) and water activity if possible. Count defects using SCA protocols: separate primary and secondary defects, apply equivalence ratios, and compare against the stated grade. Then sample roast and cup to confirm sensory quality.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Why does moisture content matter in green coffee purchasing?</h4>
            <p className='text-sm text-gray-600'>Moisture affects shelf life, roast behavior, weight, and cup quality. Coffee above 12.5 percent moisture risks mold during sea freight and storage. Coffee below 9 percent may taste flat and age prematurely. Contractual specs of 10 to 12 percent protect both buyer and seller. Verify moisture at both pre-shipment and arrival stages.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Can a coffee with defects still taste good in the cup?</h4>
            <p className='text-sm text-gray-600'>Minor secondary defects like small chips or isolated quakers may not ruin a cup, but they reduce consistency. Primary defects like full blacks or sour beans produce clearly unpleasant flavors even in small quantities. Always cup alongside physical evaluation rather than relying on defect counts alone to make purchasing decisions.</p>
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <h2 className='text-3xl font-extrabold mt-10 mb-4'>Conclusion: Quality Control as a Competitive Advantage</h2>
      <p className='my-4'>
        Developing strong green coffee defects identification and quality control skills is not just about avoiding bad lots. It is about building the confidence to identify exceptional value, communicate precisely with suppliers, and make decisions that strengthen your business. From evaluating your first Ethiopian samples to refining an established QC program, the fundamentals remain the same: systematic inspection, proper physical measurement, and honest sensory evaluation.
      </p>
      <p className='my-4'>
        If you are looking to sharpen your sensory evaluation skills, explore our guide on the <Link href='/insights/best-cupping-school' className='text-amber-700 hover:underline font-semibold'>best cupping schools</Link> for training programs that build QC confidence. And for a deeper understanding of the processes that shape quality before it reaches your cupping table, read about <Link href='/insights/selective-coffee-harvesting' className='text-amber-700 hover:underline'>selective harvesting practices</Link> and <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>washed vs. natural processing</Link> methods.
      </p>
      <p className='my-4'>
        Quality coffee is never an accident. It results from intentional decisions at every stage, from cherry selection to export preparation. By investing in your QC capabilities, you ensure the exceptional coffees of Ethiopia reach your customers as their producers intended.
      </p>

      {/* CTA */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3'>Source Quality Ethiopian Coffee Direct from Origin</h3>
        <p className='my-2 text-sm'>
          Ethio Coffee Import and Export PLC provides SCA cupping reports, detailed defect counts, moisture data, and pre-shipment samples for every lot. With 30+ years of heritage sourcing relationships across Ethiopia&apos;s coffee regions, we help importers and roasters source with confidence. Request samples to evaluate our quality firsthand.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link
            href='/offerings'
            className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'
          >
            View Our Offerings
          </Link>
          <Link
            href='/contact-us'
            className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'
          >
            Request Samples
          </Link>
          <Link
            href='/ordering-info'
            className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'
          >
            How to Order
          </Link>
        </div>
      </div>

      {/* Related Articles */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-6'>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Quality &amp; Evaluation</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup Ethiopian Coffee Samples</Link></li>
              <li>&bull; <Link href='/insights/best-cupping-school' className='text-amber-700 hover:underline'>Best Cupping Schools for Coffee Professionals</Link></li>
              <li>&bull; <Link href='/insights/new-sca-coffee-value-assessment' className='text-amber-700 hover:underline'>SCA Coffee Value Assessment Explained</Link></li>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs. Natural Ethiopian Coffee Processing</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Dry Milling Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Sourcing &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline'>Green Coffee Shelf Life and Storage Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline'>Green Coffee Packaging and Bag Types Guide</Link></li>
              <li>&bull; <Link href='/insights/selective-coffee-harvesting' className='text-amber-700 hover:underline'>Selective Coffee Harvesting Practices</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Processing &amp; Science</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-dry-coffee-production-quality-control' className='text-amber-700 hover:underline'>Ethiopian Dry Coffee Production QC</Link></li>
              <li>&bull; <Link href='/insights/anaerobic-ethiopian-coffee-processing-buyers-guide' className='text-amber-700 hover:underline'>Anaerobic Ethiopian Coffee: Buyer&apos;s Guide</Link></li>
              <li>&bull; <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='text-amber-700 hover:underline'>Coffee Science: Analysis and Compounds</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Grading &amp; Standards</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/coffee-grading-ethiopia' className='text-amber-700 hover:underline'>Ethiopian Coffee Grading System</Link></li>
              <li>&bull; <Link href='/insights/direct-trade-ethiopian-farmers' className='text-amber-700 hover:underline'>Direct Trade with Ethiopian Farmers</Link></li>
              <li>&bull; <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC (Addis Ababa, Ethiopia). This guide draws from SCA Green Arabica Coffee Classification protocols, Ethiopian Commodity Exchange (ECX) grading standards, CQI Q-Grader curriculum, and our operational experience grading Ethiopian coffee for export. Contact us for current lot specifications and quality data.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> ·{' '}
          <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> ·{' '}
          <Link href='/about' className='underline'>About Ethio Coffee</Link> ·{' '}
          <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}
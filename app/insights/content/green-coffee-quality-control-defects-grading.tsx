import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { HiOutlineCalendarDays } from 'react-icons/hi2'

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
            A practical guide to evaluating green coffee quality before you buy
          </h2>

          <figure>
            <figcaption className='font-inconsolata my-2'>
              Understanding green coffee defects and grading is essential for making informed purchasing decisions.
            </figcaption>

            <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
              <ResponsiveImage
                src={`/images/${large_image_url}`}
                alt='Green coffee quality control - sorting and inspecting Ethiopian coffee beans'
                fill
                objectFit='cover'
                className='w-full h-full'
                sizes='(max-width: 768px) 100vw, 768px'
              />
            </div>
          </figure>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Introduction: Why Quality Control Matters</h2>
          <p className='my-4'>
            For importers and roasters, understanding green coffee quality control isn&apos;t optional it&apos;s fundamental to your business. A single defective lot can damage customer relationships, waste roasting capacity, and erode margins. Conversely, developing strong QC skills helps you identify exceptional value, negotiate fair prices, and build confidence in your sourcing decisions.
          </p>
          <p className='my-4'>
            This guide covers the essential elements of green coffee quality control: defect identification, grading systems (with a focus on Ethiopian standards), physical measurements, and practical inspection protocols. Whether you&apos;re evaluating samples from a new supplier or conducting pre-shipment inspection, these fundamentals will serve you well.
          </p>
          <p className='my-4'>
            Quality control connects directly to everything else in the supply chain from the <Link href='/insights/coffee-is-agriculture-production-farming' className='underline'>agricultural practices</Link> that produce coffee to the <Link href='/insights/coffee-is-processing-drying-milling' className='underline'>processing methods</Link> that prepare it for export. Understanding QC helps you appreciate what&apos;s happening at origin and communicate more effectively with your <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='underline'>Ethiopian coffee suppliers</Link>.
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Understanding Coffee Defects</h2>
          <p className='my-4'>
            Coffee defects are imperfections in green beans that can negatively affect cup quality, roast consistency, or shelf life. The Specialty Coffee Association (SCA) and various origin-country grading systems categorize defects by severity and impact.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Category 1 Defects (Primary/Full Defects)</h3>
          <p className='my-4'>
            These are severe defects that significantly impact cup quality. A single Category 1 defect can ruin an entire cup. In SCA specialty grading, <span className='font-bold'>zero</span> Category 1 defects are allowed in a 350g sample.
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
                  <td className='border border-gray-300 p-3'>Fermented, rotten, sour flavors</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='border border-gray-300 p-3 font-bold'>Full Sour</td>
                  <td className='border border-gray-300 p-3'>Light brown to yellowish, waxy surface</td>
                  <td className='border border-gray-300 p-3'>Delayed processing, contaminated water</td>
                  <td className='border border-gray-300 p-3'>Sour, vinegary, fermented taste</td>
                </tr>
                <tr>
                  <td className='border border-gray-300 p-3 font-bold'>Dried Cherry/Pod</td>
                  <td className='border border-gray-300 p-3'>Bean still in dried cherry or parchment</td>
                  <td className='border border-gray-300 p-3'>Incomplete hulling</td>
                  <td className='border border-gray-300 p-3'>Fermented, musty off-flavors</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='border border-gray-300 p-3 font-bold'>Fungus Damaged</td>
                  <td className='border border-gray-300 p-3'>Visible fungal growth, powdery spores</td>
                  <td className='border border-gray-300 p-3'>Improper drying, storage in humid conditions</td>
                  <td className='border border-gray-300 p-3'>Musty, moldy, potentially toxic</td>
                </tr>
                <tr>
                  <td className='border border-gray-300 p-3 font-bold'>Foreign Matter</td>
                  <td className='border border-gray-300 p-3'>Stones, sticks, metal, other debris</td>
                  <td className='border border-gray-300 p-3'>Poor sorting, contamination</td>
                  <td className='border border-gray-300 p-3'>Equipment damage, safety hazard</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='border border-gray-300 p-3 font-bold'>Severe Insect Damage</td>
                  <td className='border border-gray-300 p-3'>Multiple bore holes (&gt;3), extensive damage</td>
                  <td className='border border-gray-300 p-3'>Coffee berry borer (broca), other pests</td>
                  <td className='border border-gray-300 p-3'>Dirty, musty flavors; inconsistent roast</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Category 2 Defects (Secondary Defects)</h3>
          <p className='my-4'>
            These defects have less severe but still measurable impact on cup quality. SCA allows a maximum of <span className='font-bold'>five</span> Category 2 defects in a 350g specialty-grade sample.
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
                  <td className='border border-gray-300 p-3 font-bold'>Partial Black</td>
                  <td className='border border-gray-300 p-3'>Partially blackened bean</td>
                  <td className='border border-gray-300 p-3'>Partial fermentation, drought stress</td>
                  <td className='border border-gray-300 p-3'>Ferment notes if present in quantity</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='border border-gray-300 p-3 font-bold'>Partial Sour</td>
                  <td className='border border-gray-300 p-3'>Partially affected by sour</td>
                  <td className='border border-gray-300 p-3'>Partial fermentation issues</td>
                  <td className='border border-gray-300 p-3'>Light sour/ferment if concentrated</td>
                </tr>
                <tr>
                  <td className='border border-gray-300 p-3 font-bold'>Parchment</td>
                  <td className='border border-gray-300 p-3'>Dried parchment still attached</td>
                  <td className='border border-gray-300 p-3'>Incomplete hulling</td>
                  <td className='border border-gray-300 p-3'>Papery taste; uneven roast</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='border border-gray-300 p-3 font-bold'>Floater/Faded</td>
                  <td className='border border-gray-300 p-3'>Pale, bleached appearance, low density</td>
                  <td className='border border-gray-300 p-3'>Over-drying, age, improper storage</td>
                  <td className='border border-gray-300 p-3'>Flat, stale, lacking vibrancy</td>
                </tr>
                <tr>
                  <td className='border border-gray-300 p-3 font-bold'>Immature/Quaker</td>
                  <td className='border border-gray-300 p-3'>Small, pale, often wrinkled surface</td>
                  <td className='border border-gray-300 p-3'>Unripe cherry picked too early</td>
                  <td className='border border-gray-300 p-3'>Grassy, peanutty, astringent</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='border border-gray-300 p-3 font-bold'>Withered</td>
                  <td className='border border-gray-300 p-3'>Shriveled, wrinkled surface</td>
                  <td className='border border-gray-300 p-3'>Drought stress during development</td>
                  <td className='border border-gray-300 p-3'>Grassy, straw-like notes</td>
                </tr>
                <tr>
                  <td className='border border-gray-300 p-3 font-bold'>Shell/Ear</td>
                  <td className='border border-gray-300 p-3'>Malformed bean, often hollow</td>
                  <td className='border border-gray-300 p-3'>Genetic or pollination issues</td>
                  <td className='border border-gray-300 p-3'>Uneven roast; burns easily</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='border border-gray-300 p-3 font-bold'>Broken/Chipped</td>
                  <td className='border border-gray-300 p-3'>Mechanically damaged bean</td>
                  <td className='border border-gray-300 p-3'>Aggressive hulling or handling</td>
                  <td className='border border-gray-300 p-3'>Uneven roast; can burn</td>
                </tr>
                <tr>
                  <td className='border border-gray-300 p-3 font-bold'>Slight Insect Damage</td>
                  <td className='border border-gray-300 p-3'>1-3 small bore holes</td>
                  <td className='border border-gray-300 p-3'>Coffee berry borer</td>
                  <td className='border border-gray-300 p-3'>Minimal if isolated</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Ethiopian Coffee Grading System</h2>
          <p className='my-4'>
            Ethiopia uses its own grading system that differs from the SCA framework, though both assess defect count and cup quality. Understanding Ethiopian grades is essential when <Link href='/insights/ethiopian-coffee-harvest-2025-season-outlook' className='underline'>sourcing from the current harvest</Link>.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Ethiopian Grade Classifications</h3>
          <div className='overflow-x-auto my-6'>
            <table className='w-full border-collapse border border-gray-300 font-inconsolata text-sm'>
              <thead className='bg-dark text-primary'>
                <tr>
                  <th className='border border-gray-300 p-3 text-left'>Grade</th>
                  <th className='border border-gray-300 p-3 text-left'>Defects (per 300g)</th>
                  <th className='border border-gray-300 p-3 text-left'>Quality Level</th>
                  <th className='border border-gray-300 p-3 text-left'>Typical Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-gray-300 p-3 font-bold'>Grade 1</td>
                  <td className='border border-gray-300 p-3'>0-3 defects</td>
                  <td className='border border-gray-300 p-3'>Specialty</td>
                  <td className='border border-gray-300 p-3'>Single-origin, competition lots</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='border border-gray-300 p-3 font-bold'>Grade 2</td>
                  <td className='border border-gray-300 p-3'>4-12 defects</td>
                  <td className='border border-gray-300 p-3'>Specialty/Speciality</td>
                  <td className='border border-gray-300 p-3'>Quality single-origin, speciality blends</td>
                </tr>
                <tr>
                  <td className='border border-gray-300 p-3 font-bold'>Grade 3</td>
                  <td className='border border-gray-300 p-3'>13-25 defects</td>
                  <td className='border border-gray-300 p-3'>Commercial+</td>
                  <td className='border border-gray-300 p-3'>Quality blends, some single-origin</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='border border-gray-300 p-3 font-bold'>Grade 4</td>
                  <td className='border border-gray-300 p-3'>26-45 defects</td>
                  <td className='border border-gray-300 p-3'>Commercial</td>
                  <td className='border border-gray-300 p-3'>Standard blends, volume market</td>
                </tr>
                <tr>
                  <td className='border border-gray-300 p-3 font-bold'>Grade 5</td>
                  <td className='border border-gray-300 p-3'>46-100 defects</td>
                  <td className='border border-gray-300 p-3'>Below Commercial</td>
                  <td className='border border-gray-300 p-3'>Domestic market, instant coffee</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Washed vs. Natural Grade Expectations</h3>
          <p className='my-4'>
            It&apos;s important to understand that <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='underline'>washed and natural processed coffees</Link> often have different defect profiles:
          </p>
          <ul className='font-inconsolata my-4 list-disc ml-5'>
            <li className='my-2'><span className='font-bold'>Washed coffees</span> typically have more uniform appearance and fewer fermentation-related defects, making G1 more achievable</li>
            <li className='my-2'><span className='font-bold'>Natural processed coffees</span> may show more variation in color and occasional fruit remnants; G1 naturals command significant premiums</li>
            <li className='my-2'><span className='font-bold'>Regional variations:</span> <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='underline'>Yirgacheffe washed G1</Link> vs. Sidamo natural G1 will look quite different</li>
          </ul>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Physical Quality Measurements</h2>
          <p className='my-4'>
            Beyond defect counts, several physical measurements help assess green coffee quality:
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Moisture Content</h3>
          <p className='my-4'>
            Moisture content is critical for storage stability and roast consistency. The <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='underline'>science of coffee preservation</Link> starts here.
          </p>
          <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
            <h4 className='font-bold text-lg mb-2'>Moisture Guidelines</h4>
            <ul className='font-inconsolata list-disc ml-5'>
              <li className='my-2'><span className='font-bold'>Optimal range:</span> 10-12% for Arabica</li>
              <li className='my-2'><span className='font-bold'>Acceptable:</span> 9-13%</li>
              <li className='my-2'><span className='font-bold'>Too low (&lt;9%):</span> Faded flavors, brittle beans, poor roast development</li>
              <li className='my-2'><span className='font-bold'>Too high (&gt;13%):</span> Risk of mold, fermentation, rapid quality degradation</li>
              <li className='my-2'><span className='font-bold'>Measurement:</span> Use calibrated moisture meter; measure multiple samples per lot</li>
            </ul>
          </div>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Water Activity (aw)</h3>
          <p className='my-4'>
            Water activity measures the &quot;free&quot; water available for microbial growth and chemical reactions. It&apos;s increasingly used alongside moisture content for quality assessment.
          </p>
          <ul className='font-inconsolata my-4 list-disc ml-5'>
            <li className='my-2'><span className='font-bold'>Target range:</span> 0.50-0.60 aw</li>
            <li className='my-2'><span className='font-bold'>Above 0.70 aw:</span> Significant mold risk</li>
            <li className='my-2'><span className='font-bold'>Below 0.45 aw:</span> May indicate over-drying</li>
          </ul>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Screen Size</h3>
          <p className='my-4'>
            Screen size indicates bean size and can affect roast uniformity. Ethiopian coffees are graded by screen size as part of quality assessment.
          </p>
          <div className='overflow-x-auto my-6'>
            <table className='w-full border-collapse border border-gray-300 font-inconsolata text-sm'>
              <thead className='bg-dark text-primary'>
                <tr>
                  <th className='border border-gray-300 p-3 text-left'>Screen Size</th>
                  <th className='border border-gray-300 p-3 text-left'>Hole Diameter</th>
                  <th className='border border-gray-300 p-3 text-left'>Bean Size</th>
                  <th className='border border-gray-300 p-3 text-left'>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-gray-300 p-3 font-bold'>Screen 18+</td>
                  <td className='border border-gray-300 p-3'>7.14mm+</td>
                  <td className='border border-gray-300 p-3'>Large</td>
                  <td className='border border-gray-300 p-3'>Speciality, commands higher price</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='border border-gray-300 p-3 font-bold'>Screen 16-17</td>
                  <td className='border border-gray-300 p-3'>6.35-6.75mm</td>
                  <td className='border border-gray-300 p-3'>Medium-Large</td>
                  <td className='border border-gray-300 p-3'>Standard specialty size</td>
                </tr>
                <tr>
                  <td className='border border-gray-300 p-3 font-bold'>Screen 14-15</td>
                  <td className='border border-gray-300 p-3'>5.56-5.95mm</td>
                  <td className='border border-gray-300 p-3'>Medium</td>
                  <td className='border border-gray-300 p-3'>Common for Ethiopian heirlooms</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='border border-gray-300 p-3 font-bold'>Screen 13-</td>
                  <td className='border border-gray-300 p-3'>&lt;5.16mm</td>
                  <td className='border border-gray-300 p-3'>Small</td>
                  <td className='border border-gray-300 p-3'>Peaberry or undersized</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='my-4'>
            Note: Ethiopian heirloom varieties naturally produce smaller beans than many other origins. A screen 15 Ethiopian may cup better than a screen 18 from elsewhere. <Link href='/insights/coffee-plant-taxonomy-species-varieties' className='underline'>Understanding coffee varieties</Link> helps contextualize screen size expectations.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Density</h3>
          <p className='my-4'>
            Bean density correlates with altitude, ripeness, and potential cup quality. Higher-density beans typically come from higher altitudes and develop more complex flavor compounds.
          </p>
          <ul className='font-inconsolata my-4 list-disc ml-5'>
            <li className='my-2'><span className='font-bold'>High density:</span> &gt;680 g/L - typically high-altitude, specialty grade</li>
            <li className='my-2'><span className='font-bold'>Medium density:</span> 620-680 g/L - standard quality range</li>
            <li className='my-2'><span className='font-bold'>Low density:</span> &lt;620 g/L - lower altitude or quality issues</li>
          </ul>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Sensory Evaluation: The Cup Test</h2>
          <p className='my-4'>
            Physical inspection tells part of the story, but <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='underline'>sensory evaluation through cupping</Link> reveals how the coffee actually tastes. The SCA cupping protocol is the industry standard.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>SCA Cupping Basics</h3>
          <ul className='font-inconsolata my-4 list-disc ml-5'>
            <li className='my-2'><span className='font-bold'>Sample prep:</span> Light roast (Agtron 58-63), 8.25g coffee to 150ml water</li>
            <li className='my-2'><span className='font-bold'>Water:</span> 200°F (93°C), clean, neutral (125-175 ppm TDS)</li>
            <li className='my-2'><span className='font-bold'>Steep time:</span> 4 minutes before breaking crust</li>
            <li className='my-2'><span className='font-bold'>Evaluation:</span> Score fragrance/aroma, flavor, aftertaste, acidity, body, balance, uniformity, clean cup, sweetness, overall</li>
          </ul>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Specialty Grade Cupping Requirements</h3>
          <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
            <h4 className='font-bold text-lg mb-2'>SCA Specialty Grade Requirements</h4>
            <ul className='font-inconsolata list-disc ml-5'>
              <li className='my-2'><span className='font-bold'>Cupping score:</span> 80+ points (out of 100)</li>
              <li className='my-2'><span className='font-bold'>Category 1 defects:</span> Zero allowed</li>
              <li className='my-2'><span className='font-bold'>Category 2 defects:</span> Maximum 5 in 350g sample</li>
              <li className='my-2'><span className='font-bold'>Quakers in roasted:</span> Maximum 3 in 100g</li>
              <li className='my-2'><span className='font-bold'>Moisture:</span> 10-12%</li>
            </ul>
          </div>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Practical Inspection Protocol for Importers</h2>
          <p className='my-4'>
            Here&apos;s a systematic approach to evaluating green coffee samples:
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Step 1: Visual Inspection</h3>
          <ul className='font-inconsolata my-4 list-disc ml-5'>
            <li className='my-2'>Examine overall color consistency (blue-green for fresh washed, yellow-brown for naturals)</li>
            <li className='my-2'>Look for obvious defects, foreign matter, broken beans</li>
            <li className='my-2'>Assess uniformity of size and shape</li>
            <li className='my-2'>Note any unusual odors (musty, fermented, chemical)</li>
          </ul>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Step 2: Defect Count</h3>
          <ul className='font-inconsolata my-4 list-disc ml-5'>
            <li className='my-2'>Weigh out 300-350g representative sample</li>
            <li className='my-2'>Sort and count Category 1 defects separately</li>
            <li className='my-2'>Sort and count Category 2 defects</li>
            <li className='my-2'>Calculate defect score per 300g or 350g as appropriate</li>
            <li className='my-2'>Compare against grade specifications</li>
          </ul>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Step 3: Physical Measurements</h3>
          <ul className='font-inconsolata my-4 list-disc ml-5'>
            <li className='my-2'>Measure moisture content (multiple readings)</li>
            <li className='my-2'>Check water activity if equipment available</li>
            <li className='my-2'>Screen size distribution if relevant to spec</li>
            <li className='my-2'>Density measurement for altitude confirmation</li>
          </ul>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Step 4: Roast and Cup</h3>
          <ul className='font-inconsolata my-4 list-disc ml-5'>
            <li className='my-2'>Sample roast to light/medium (Agtron 58-63)</li>
            <li className='my-2'>Count quakers in roasted sample</li>
            <li className='my-2'>Conduct proper cupping evaluation</li>
            <li className='my-2'>Score according to SCA protocol</li>
            <li className='my-2'>Note any cup defects or off-flavors</li>
          </ul>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Red Flags: When to Reject a Lot</h2>
          <p className='my-4'>
            Not every lot that meets grade specifications will work for your needs. Watch for these warning signs:
          </p>
          <ul className='font-inconsolata my-4 list-disc ml-5'>
            <li className='my-2'><span className='font-bold'>Any Category 1 defects</span> in specialty-grade samples</li>
            <li className='my-2'><span className='font-bold'>Moisture above 13%</span> - storage risk too high</li>
            <li className='my-2'><span className='font-bold'>Musty or chemical odors</span> in green - won&apos;t roast out</li>
            <li className='my-2'><span className='font-bold'>Significant variation</span> between sample and pre-shipment</li>
            <li className='my-2'><span className='font-bold'>Excessive quakers</span> in roasted sample (&gt;5% of beans)</li>
            <li className='my-2'><span className='font-bold'>Cup defects</span> like ferment, phenol, or rio</li>
            <li className='my-2'><span className='font-bold'>Sample doesn&apos;t match</span> documented origin/process</li>
          </ul>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Working with Your Supplier on Quality</h2>
          <p className='my-4'>
            Quality control is a partnership between buyer and supplier. Here&apos;s how to build productive relationships:
          </p>
          <ul className='font-inconsolata my-4 list-disc ml-5'>
            <li className='my-2'><span className='font-bold'>Communicate specifications clearly</span> - grade, moisture range, screen size requirements</li>
            <li className='my-2'><span className='font-bold'>Request type samples</span> before committing to volume</li>
            <li className='my-2'><span className='font-bold'>Require pre-shipment samples</span> that match the actual lot</li>
            <li className='my-2'><span className='font-bold'>Provide feedback</span> on arrivals - positive and negative</li>
            <li className='my-2'><span className='font-bold'>Build long-term relationships</span> with reliable suppliers</li>
          </ul>
          <p className='my-4'>
            At Ethio Coffee Export, we welcome detailed QC discussions. Understanding what our buyers need helps us select the right lots and maintain the <Link href='/insights/direct-trade-ethiopian-farmers' className='underline'>direct relationships with farmers</Link> that ensure consistent quality.
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Conclusion: Quality as a Competitive Advantage</h2>
          <p className='my-4'>
            Developing strong green coffee quality control skills isn&apos;t just about avoiding bad lots it&apos;s about building the confidence to identify exceptional value and make decisions that strengthen your business. Whether you&apos;re evaluating your first Ethiopian samples or refining an established QC program, the fundamentals remain the same: systematic inspection, proper measurement, and honest sensory evaluation.
          </p>
          <p className='my-4'>
            If you&apos;re looking to sharpen your sensory evaluation skills further, explore our guide on the <Link href='/insights/best-cupping-school' className='underline font-bold'>best cupping schools</Link> to find training programs that build confidence in quality assessment.
          </p>
          <p className='my-4'>
            Understanding quality control also deepens your appreciation for what happens at origin. The <Link href='/insights/coffee-is-agriculture-production-farming' className='underline'>agricultural practices</Link>, <Link href='/insights/coffee-is-processing-drying-milling' className='underline'>processing decisions</Link>, and <Link href='/insights/coffee-is-commerce-exporting-importing-buying' className='underline'>commercial logistics</Link> that bring Ethiopian coffee to your door all influence the quality you receive. The more you understand these connections, the better partner you become for your suppliers and your customers.
          </p>
          <p className='my-4'>
            Much of the quality you evaluate in a green coffee sample is determined at the washing station level.
            Cherry selection, fermentation protocols, and drying discipline at the station directly affect defect counts and cupping scores.
            For a closer look at how these facilities shape your green coffee, see our article on{' '}
            <Link href='/insights/ethiopian-coffee-washing-stations-quality' className='underline font-bold'>
              the role of washing stations in Ethiopian coffee quality
            </Link>.
          </p>
          <p className='my-4'>
            Quality coffee is never an accident. It results from intentional decisions at every stage of the supply chain. By investing in your QC capabilities, you honor that effort and ensure the exceptional coffees of Ethiopia reach consumers as their producers intended.
          </p>

          <div className='bg-dark text-primary p-6 rounded-lg my-8'>
            <h4 className='font-bold text-xl mb-3'>Source Quality Ethiopian Coffee</h4>
            <p className='my-2'>
              Ready to experience Ethiopian coffee quality firsthand? Contact us to request samples, discuss specifications, and learn how our QC processes ensure the quality you expect.
            </p>
            <div className='flex gap-4 mt-4'>
              <Link href='/contact-us' className='underline font-bold'>
                REQUEST SAMPLES
              </Link>
              <Link href='/offerings' className='underline font-bold'>
                VIEW OFFERINGS
              </Link>
            </div>
          </div>

          <div className='border-t border-gray-300 mt-10 pt-6'>
            <p className='text-sm text-gray-600 font-inconsolata'>
              <span className='font-bold'>References:</span> This guide draws from SCA Green Coffee Grading Protocols, 
              Ethiopian Commodity Exchange (ECX) grading standards, CQI Q-Grader curriculum, and industry best practices 
              for green coffee quality assessment.
            </p>
          </div>
    </>
  )
}

import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineMapPin,
  HiOutlineBeaker,
  HiOutlineScale,
  HiOutlineTruck,
  HiOutlineCurrencyDollar,
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineMap,
  HiOutlineChartBar,
  HiOutlineGlobeAlt,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function LimuCoffeeSourcingGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      {/* H1 + H2 */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Sub-Regions, Flavor Profiles, Grades, FOB Pricing, and Direct Sourcing from Ethiopia
      </h2>

      {/* HERO IMAGE */}
      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md bg-gray-200 flex items-center justify-center'>
          {/* TODO: Replace placeholder with actual hero image */}
          {/* Expected path: /images/insights/limu-coffee-sourcing-guide.webp */}
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Limu green coffee beans from southwestern Ethiopia highlands'
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
        <span className='ml-2'>Origin Guide / Limu Coffee / Sourcing Guide / Importer Resources</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Limu is Ethiopia&apos;s best-value specialty origin. Grown at 1,400 to 2,000 meters in the southwestern highlands, Limu coffees deliver clean, wine-toned acidity with warm spice and honey sweetness, predominantly through washed processing. FOB Djibouti pricing for washed Limu Grade 2 ranges from $3.50 to $5.50 per kilogram, typically $1.00 to $2.00 below comparable Yirgacheffe or Guji lots. This guide covers sub-regions, flavor profiles by process, grading, pricing benchmarks, and the step-by-step sourcing path for importers and roasters.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#why-limu' className='text-amber-700 hover:underline'>1. Why Limu Coffee Matters for Importers</a></li>
          <li><a href='#geography' className='text-amber-700 hover:underline'>2. Growing Region and Terroir</a></li>
          <li><a href='#sub-regions' className='text-amber-700 hover:underline'>3. Sub-Regions: Limmu Kossa, Limmu Seka, Gomma, and Gera</a></li>
          <li><a href='#flavor' className='text-amber-700 hover:underline'>4. Limu Coffee Flavor Profile</a></li>
          <li><a href='#processing' className='text-amber-700 hover:underline'>5. Processing Methods</a></li>
          <li><a href='#grading' className='text-amber-700 hover:underline'>6. Grades and Export Specifications</a></li>
          <li><a href='#pricing' className='text-amber-700 hover:underline'>7. FOB Pricing Benchmarks</a></li>
          <li><a href='#sourcing' className='text-amber-700 hover:underline'>8. How to Source Limu Coffee from Ethiopia</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>9. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRODUCTION */}
      <p className='text-lg leading-relaxed my-4'>
        Limu coffee sourcing guide: everything importers, roasters, and green coffee traders need to evaluate, price, and purchase Limu lots from Ethiopia. While Yirgacheffe and Guji dominate specialty coffee headlines, Limu quietly supplies some of the most consistent, balanced, and cost-effective Ethiopian coffees available for export. For buyers building year-round programs or blending with Ethiopian origin character, Limu belongs on every shortlist.
      </p>
      <p className='my-4'>
        This guide covers the growing region, key sub-regions, flavor profiles by process, <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline font-bold'>grading specifications</Link>, current FOB pricing, and a clear sourcing path from origin to your warehouse.
      </p>

      {/* SECTION 1: WHY LIMU MATTERS */}
      <h3 id='why-limu' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineGlobeAlt className='w-8 h-8 text-amber-600' />
        1. Why Limu Coffee Matters for Importers
      </h3>

      <p className='my-4'>
        Limu represents one of Ethiopia&apos;s six major coffee-growing regions and has been an ECX-recognized origin since the exchange&apos;s founding. The region produces an estimated 25,000 to 35,000 metric tons of green coffee annually, placing it among the top five Ethiopian export origins by volume. For importers, three characteristics make Limu stand out:
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Quality-to-Price Ratio</h4>
          <p className='text-sm text-gray-700'>Limu washed Grade 2 lots typically score 82 to 85+ on the SCA scale while pricing $1.00 to $2.00 per kilogram below equivalent Yirgacheffe or Guji grades. This margin makes Limu ideal for specialty programs that need to balance cup quality with landed cost targets.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Consistency and Volume</h4>
          <p className='text-sm text-gray-700'>Unlike micro-lot-dependent regions, Limu offers reliable commercial volumes with consistent cup character season after season. Importers can build recurring programs without the lot-to-lot variation that complicates planning with smaller origins.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Blend Versatility</h4>
          <p className='text-sm text-gray-700'>Limu&apos;s balanced acidity and medium body make it an exceptional <Link href='/insights/ethiopian-coffee-espresso-blend-sourcing-guide' className='text-amber-700 hover:underline'>espresso blend component</Link>. It adds Ethiopian origin character (wine, spice, chocolate) without the high acidity that can overwhelm blend formulas.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Growing Specialty Potential</h4>
          <p className='text-sm text-gray-700'>As washing station infrastructure improves in the region, Limu is producing an increasing number of Grade 1 specialty lots, particularly from higher-altitude sites in Limmu Kossa and Gomma districts. Early adopters can secure exceptional value before pricing adjusts.</p>
        </div>
      </div>

      {/* SECTION 2: GEOGRAPHY */}
      <h3 id='geography' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMap className='w-8 h-8 text-amber-600' />
        2. Growing Region and Terroir
      </h3>

      <p className='my-4'>
        The Limu coffee zone spans the southwestern highlands of Ethiopia&apos;s Oromia region, within the broader Jimma administrative zone. The area sits roughly 400 kilometers southwest of Addis Ababa, centered between the Gibe and Didessa river systems. This geography creates a distinct microclimate shaped by altitude, rainfall, and dense forest cover.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Parameter</th>
              <th className='p-3 text-left font-bold'>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Location</td>
              <td className='p-3'>Southwestern Oromia, Jimma Zone</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Altitude</td>
              <td className='p-3'>1,400 to 2,000 masl (specialty lots typically 1,700+)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Rainfall</td>
              <td className='p-3'>1,500 to 2,000 mm annually</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Soil</td>
              <td className='p-3'>Deep red volcanic (nitisols), rich in organic matter</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Shade</td>
              <td className='p-3'>Dense indigenous forest canopy; significant semi-forest coffee</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Varieties</td>
              <td className='p-3'>Ethiopian heirloom landraces (JARC selections: 74110, 74112, 74148)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Harvest</td>
              <td className='p-3'>November to February (peak December to January)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Production</td>
              <td className='p-3'>Estimated 25,000 to 35,000 MT annually</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Limu&apos;s terroir is defined by its forest coffee heritage. Much of the region&apos;s production comes from <Link href='/insights/coffee-is-agriculture-production-farming' className='text-amber-700 hover:underline font-bold'>semi-forest and garden coffee systems</Link>, where trees grow under natural shade at elevations that slow cherry maturation. Slower ripening concentrates sugars and organic acids, producing the wine-toned complexity that distinguishes Limu from flat, neutral commercial coffees.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Limu vs. Jimma: What Buyers Should Know</h4>
        <p className='text-sm text-gray-700'>
          Limu and Jimma are sometimes confused because both sit within the broader Jimma administrative zone. In the ECX classification, they are distinct origins. Limu refers specifically to the higher-altitude Limmu Kossa and Limmu Seka woredas (districts), which produce cleaner, more complex cups. Jimma encompasses the wider zone, including lower-altitude commercial production. When sourcing, always specify &quot;Limu&quot; origin on contracts to ensure you receive lots from the premium higher-altitude districts.
        </p>
      </div>

      {/* SECTION 3: SUB-REGIONS */}
      <h3 id='sub-regions' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMapPin className='w-8 h-8 text-amber-600' />
        3. Sub-Regions: Limmu Kossa, Limmu Seka, Gomma, and Gera
      </h3>

      <p className='my-4'>
        Limu coffee comes primarily from four production districts. Each offers slightly different cup characteristics based on altitude, forest density, and washing station infrastructure.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Sub-Region</th>
              <th className='p-3 text-left font-bold'>Altitude</th>
              <th className='p-3 text-left font-bold'>Cup Character</th>
              <th className='p-3 text-left font-bold'>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Limmu Kossa</td>
              <td className='p-3'>1,700 to 2,000 masl</td>
              <td className='p-3'>Bright citrus, floral hints, wine acidity, clean finish</td>
              <td className='p-3'>Highest-altitude lots; strongest specialty potential</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Limmu Seka</td>
              <td className='p-3'>1,500 to 1,800 masl</td>
              <td className='p-3'>Honey sweetness, warm spice, medium body</td>
              <td className='p-3'>Largest production volume; reliable commercial specialty</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Gomma</td>
              <td className='p-3'>1,600 to 1,900 masl</td>
              <td className='p-3'>Chocolate, soft fruit, balanced acidity</td>
              <td className='p-3'>Growing washing station network; improving traceability</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Gera</td>
              <td className='p-3'>1,700 to 2,100 masl</td>
              <td className='p-3'>Complex floral, tea-like, delicate body</td>
              <td className='p-3'>Dense forest coffee; limited volume but exceptional quality</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        For buyers seeking the highest cup scores, prioritize Limmu Kossa and Gera district lots. These higher-altitude sites produce the cleanest, most complex washed coffees in the region. Limmu Seka offers the best option for volume programs that still require specialty grading.
      </p>

      {/* SECTION 4: FLAVOR PROFILE */}
      <h3 id='flavor' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        4. Limu Coffee Flavor Profile
      </h3>

      <p className='my-4'>
        Limu is known for producing a clean, balanced cup that bridges the gap between the floral brightness of southern Ethiopian origins and the heavier body of western coffees. The dominant processing method (washed) amplifies clarity and acidity, while the region&apos;s forest shade and volcanic soil contribute depth and sweetness.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Washed Limu</h4>
          <ul className='text-sm text-gray-700 space-y-1'>
            <li><strong>Aroma:</strong> Floral, citrus zest, jasmine</li>
            <li><strong>Acidity:</strong> Wine-toned, medium-bright, balanced</li>
            <li><strong>Body:</strong> Medium, silky mouthfeel</li>
            <li><strong>Flavor:</strong> Citrus, honey, warm spice, black tea</li>
            <li><strong>Finish:</strong> Clean, lingering sweetness</li>
            <li><strong>Best for:</strong> Single origin pour-over, filter, espresso blends</li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Natural Limu (Limited Availability)</h4>
          <ul className='text-sm text-gray-700 space-y-1'>
            <li><strong>Aroma:</strong> Dark fruit, cocoa, earthy</li>
            <li><strong>Acidity:</strong> Low to medium, rounded</li>
            <li><strong>Body:</strong> Medium-full, syrupy</li>
            <li><strong>Flavor:</strong> Chocolate, dried fruit, brown sugar, spice</li>
            <li><strong>Finish:</strong> Heavy, sweet, lingering</li>
            <li><strong>Best for:</strong> Espresso, full-bodied blends, dark roast profiles</li>
          </ul>
        </div>
      </div>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700'>
          <strong>Buyer&apos;s Tip:</strong> Limu&apos;s lower acidity compared to Yirgacheffe makes it more approachable for markets that prefer softer, sweeter cups. It also blends exceptionally well with Yirgacheffe (for acidity) or Guji (for fruit) in multi-origin Ethiopian programs. See our <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>origin comparison guide</Link> for blending strategies.
        </p>
      </div>

      {/* SECTION 5: PROCESSING */}
      <h3 id='processing' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        5. Processing Methods
      </h3>

      <p className='my-4'>
        Limu is predominantly a washed coffee origin. An estimated 70% to 80% of export-grade Limu production goes through <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='text-amber-700 hover:underline font-bold'>washing stations</Link>, where cherries are pulped, fermented for 36 to 72 hours, channel-washed, and dried on raised beds over 10 to 14 days.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Process</th>
              <th className='p-3 text-left font-bold'>Share of Limu Export</th>
              <th className='p-3 text-left font-bold'>Cup Impact</th>
              <th className='p-3 text-left font-bold'>Grade Range</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Washed</td>
              <td className='p-3'>70% to 80%</td>
              <td className='p-3'>Clean, bright, wine-toned acidity, clarity</td>
              <td className='p-3'>Grade 1 to Grade 2</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Natural</td>
              <td className='p-3'>20% to 30%</td>
              <td className='p-3'>Heavier body, fruit-forward, chocolate</td>
              <td className='p-3'>Grade 3 to Grade 5</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        For buyers focused on specialty, washed Limu Grade 1 and Grade 2 lots offer the best quality. Natural Limu serves commercial programs and espresso blends well, providing body and sweetness at competitive pricing. For a full comparison of processing methods, see our <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline font-bold'>washed vs. natural Ethiopian coffee guide</Link>.
      </p>

      {/* SECTION 6: GRADING */}
      <h3 id='grading' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        6. Grades and Export Specifications
      </h3>

      <p className='my-4'>
        Ethiopian coffee grading combines physical evaluation (40% weight) and cup quality assessment (60% weight). The <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline font-bold'>ECTA grading system</Link> assigns grades from 1 (highest) through 9 (lowest). For Limu washed coffees, the key export grades are:
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Grade</th>
              <th className='p-3 text-left font-bold'>Defects / 300g</th>
              <th className='p-3 text-left font-bold'>SCA Score Range</th>
              <th className='p-3 text-left font-bold'>Market Segment</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Grade 1 Washed</td>
              <td className='p-3'>0 to 3</td>
              <td className='p-3'>85+</td>
              <td className='p-3'>Specialty single origin</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Grade 2 Washed</td>
              <td className='p-3'>4 to 12</td>
              <td className='p-3'>80 to 84</td>
              <td className='p-3'>Specialty; premium blends</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Grade 3 Natural</td>
              <td className='p-3'>13 to 25</td>
              <td className='p-3'>75 to 79</td>
              <td className='p-3'>Commercial specialty; blends</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Grade 4 to 5 Natural</td>
              <td className='p-3'>26 to 45</td>
              <td className='p-3'>70 to 74</td>
              <td className='p-3'>Commercial; volume programs</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Pre-Shipment Sample Protocol</h4>
        <p className='text-sm text-gray-700'>
          Always request a pre-shipment sample (PSS) before approving any Limu lot. The PSS should match the contracted grade and origin. Cup the sample using <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>SCA cupping protocol</Link> and verify <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline'>moisture content</Link> (target: 10.0% to 11.5%) and water activity (below 0.60 aw) before approving shipment.
        </p>
      </div>

      {/* SECTION 7: PRICING */}
      <h3 id='pricing' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='w-8 h-8 text-amber-600' />
        7. FOB Pricing Benchmarks
      </h3>

      <p className='my-4'>
        Limu consistently ranks among the most price-competitive Ethiopian specialty origins. Below are indicative FOB Djibouti pricing ranges for the 2025/26 season. Actual prices depend on grade, lot size, contract type, and market conditions. For a full breakdown of pricing mechanics, see our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee FOB pricing guide</Link>.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Grade / Process</th>
              <th className='p-3 text-left font-bold'>FOB Djibouti (USD/kg)</th>
              <th className='p-3 text-left font-bold'>Typical Lot Size</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Grade 1 Washed</td>
              <td className='p-3'>$5.00 to $7.00</td>
              <td className='p-3'>5 to 20 MT</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Grade 2 Washed</td>
              <td className='p-3'>$3.50 to $5.50</td>
              <td className='p-3'>10 to 50 MT</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Grade 3 Natural</td>
              <td className='p-3'>$2.80 to $3.80</td>
              <td className='p-3'>20 to 100 MT</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Grade 4 to 5 Natural</td>
              <td className='p-3'>$2.20 to $3.00</td>
              <td className='p-3'>50 to 200+ MT</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700'>
          <strong>Price Context:</strong> For comparison, washed Yirgacheffe Grade 2 typically trades at $5.00 to $8.00/kg FOB, and washed Guji Grade 2 at $4.50 to $7.00/kg FOB. Limu&apos;s lower price point reflects origin premium differences rather than quality gaps. To calculate what these FOB prices mean at your warehouse door, use our <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>landed cost calculator guide</Link>.
        </p>
      </div>

      {/* SECTION 8: SOURCING */}
      <h3 id='sourcing' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTruck className='w-8 h-8 text-amber-600' />
        8. How to Source Limu Coffee from Ethiopia
      </h3>

      <p className='my-4'>
        Sourcing Limu coffee follows the same process as other Ethiopian origins. For a complete step-by-step walkthrough, see our <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee export process guide</Link>. Below is the Limu-specific path:
      </p>

      <div className='bg-gray-50 border border-gray-200 rounded-lg p-6 my-6'>
        <ol className='space-y-4 text-sm'>
          <li>
            <strong>1. Define Your Specification</strong>
            <p className='text-gray-700 mt-1'>Specify origin (Limu), process (washed or natural), grade (G1, G2, G3), volume, and target price. Include sub-region preferences (Limmu Kossa, Gomma, Gera) if sourcing specialty lots.</p>
          </li>
          <li>
            <strong>2. Request Offer Samples</strong>
            <p className='text-gray-700 mt-1'>Contact your exporter for current-season offer samples. Specify whether you need type samples (representative of grade) or spot samples (specific available lots). Limu lots are available from January through August of each crop year.</p>
          </li>
          <li>
            <strong>3. Cup and Evaluate</strong>
            <p className='text-gray-700 mt-1'>Cup samples using <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>SCA protocol</Link>. Pay attention to balance, sweetness, and the wine-toned acidity that marks good Limu lots. Check physical quality: screen size (14 to 17), moisture (10.0% to 11.5%), and defect count.</p>
          </li>
          <li>
            <strong>4. Contract and Payment</strong>
            <p className='text-gray-700 mt-1'>Agree on price, Incoterms (FOB Djibouti or FCA Addis Ababa), and <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>payment terms</Link> (typically LC or CAD for first orders, TT for established relationships). Volume minimums usually start at one container (18 to 19 MT) for washed lots.</p>
          </li>
          <li>
            <strong>5. Pre-Shipment Approval</strong>
            <p className='text-gray-700 mt-1'>Approve the PSS before your exporter begins <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='text-amber-700 hover:underline'>dry milling and export preparation</Link>. The PSS must match grade, moisture, and cupping expectations set during contracting.</p>
          </li>
          <li>
            <strong>6. Shipping and Arrival</strong>
            <p className='text-gray-700 mt-1'>Limu coffee ships via road freight to Djibouti port (2 to 3 days), then by ocean freight to destination. Transit times range from 14 days (Middle East) to 35 days (North America). Review our <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline'>sea freight quality guide</Link> for container protection protocols.</p>
          </li>
        </ol>
      </div>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Premium Limu Coffee Direct from Ethiopia</h4>
        <p className='my-2'>Ethio Coffee Import and Export PLC sources washed and natural Limu lots through our heritage network of cooperatives and washing stations in the southwestern highlands. Request samples, review current availability, or discuss your program requirements.</p>
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

      {/* FAQ */}
      <section id='faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900'>Frequently Asked Questions</h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What does Limu coffee taste like?</h4>
            <p className='text-sm text-gray-600'>Washed Limu coffee has a clean, balanced cup with wine-toned acidity, citrus and honey sweetness, warm spice notes, and a medium body with a silky mouthfeel. It is less acidic than Yirgacheffe but more complex than Jimma, making it versatile for both single-origin and blend programs.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the difference between Limu and Jimma coffee?</h4>
            <p className='text-sm text-gray-600'>Limu and Jimma are both from the broader Jimma administrative zone but are classified as distinct ECX origins. Limu comes from higher-altitude districts (Limmu Kossa, Limmu Seka) and produces cleaner, more complex cups. Jimma includes lower-altitude commercial production with a heavier, less refined cup character.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the minimum order quantity for Limu coffee?</h4>
            <p className='text-sm text-gray-600'>Standard minimum order for export is one full container load (FCL) of 18 to 19 metric tons (300 to 320 bags at 60 kg each). Some exporters offer half-container LCL shipments or sample lots for first-time buyers. See our <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>MOQ guide</Link> for details.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Is organic Limu coffee available?</h4>
            <p className='text-sm text-gray-600'>Yes. Limu has significant organic production due to its semi-forest growing conditions where chemical inputs are minimal or absent. Certified organic lots (USDA, EU, JAS) are available, typically at a $0.30 to $0.60/kg premium over conventional. See our <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>certifications guide</Link> for details.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>When is Limu coffee available for export?</h4>
            <p className='text-sm text-gray-600'>Limu coffee is harvested from November through February, with peak picking in December and January. Export-ready lots become available from January through August. Plan procurement during the February to May window for the freshest new-crop availability. See our <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>harvest calendar</Link> for timing details.</p>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origin Sourcing Guides</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/yirgacheffe-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Yirgacheffe Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/sidamo-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Sidamo Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Guji Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/harar-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Harar Coffee: Buyer&apos;s Sourcing Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Processing and Quality</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Washing Stations Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Defects: Quality Control Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Pricing and Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Coffee Contracts and Payment Terms</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing Fundamentals</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>Sourcing Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Harvest Calendar</Link></li>
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

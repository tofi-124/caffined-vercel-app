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

export default function JimmaCoffeeSourcingGuide({ title, date, large_image_url }: InsightContentProps) {
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
          {/* Expected path: /images/insights/jimma-coffee-sourcing-guide.webp */}
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Jimma green coffee beans from southwestern Ethiopia ready for export'
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
        <span className='ml-2'>Origin Guide / Jimma Coffee / Sourcing Guide / Importer Resources</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Jimma (Djimmah) is Ethiopia&apos;s largest coffee-producing zone and its most price-competitive export origin. Grown at 1,400 to 1,800 meters in southwestern Oromia, Jimma delivers a full-bodied, chocolatey profile with low acidity, predominantly through natural processing. FOB Djibouti pricing for natural Grade 5 ranges from $2.00 to $2.80 per pound, making Jimma the preferred base for espresso blends, commercial roasts, and instant coffee programs. This guide covers sub-regions, flavor profiles by process, grading, pricing benchmarks, and the step-by-step sourcing path for importers and roasters.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#why-jimma' className='text-amber-700 hover:underline'>1. Why Jimma Coffee Matters for Importers</a></li>
          <li><a href='#geography' className='text-amber-700 hover:underline'>2. Growing Region and Terroir</a></li>
          <li><a href='#sub-regions' className='text-amber-700 hover:underline'>3. Sub-Regions: Gomma, Agaro, Mana, Seka Chekorsa, Kersa, and Shebe Sombo</a></li>
          <li><a href='#flavor' className='text-amber-700 hover:underline'>4. Jimma Coffee Flavor Profile</a></li>
          <li><a href='#processing' className='text-amber-700 hover:underline'>5. Processing Methods</a></li>
          <li><a href='#grading' className='text-amber-700 hover:underline'>6. Grades and Export Specifications</a></li>
          <li><a href='#pricing' className='text-amber-700 hover:underline'>7. FOB Pricing Benchmarks</a></li>
          <li><a href='#sourcing' className='text-amber-700 hover:underline'>8. How to Source Jimma Coffee from Ethiopia</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>9. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRODUCTION */}
      <p className='text-lg leading-relaxed my-4'>
        Jimma coffee sourcing guide: everything importers, roasters, and green coffee traders need to evaluate, price, and purchase Jimma lots from Ethiopia. While Yirgacheffe and Guji capture specialty headlines, Jimma quietly supplies more export volume than any other Ethiopian origin. For commercial buyers, espresso blend builders, and instant coffee producers who need consistent Ethiopian character at competitive pricing, Jimma is the foundation.
      </p>
      <p className='my-4'>
        This guide covers the growing region, key sub-regions, flavor profiles by process, <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline font-bold'>grading specifications</Link>, current FOB pricing, and a clear sourcing path from origin to your warehouse.
      </p>

      {/* SECTION 1: WHY JIMMA MATTERS */}
      <h3 id='why-jimma' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineGlobeAlt className='w-8 h-8 text-amber-600' />
        1. Why Jimma Coffee Matters for Importers
      </h3>

      <p className='my-4'>
        Jimma (internationally traded as Djimmah or Djimma) is Ethiopia&apos;s primary source of commercial-grade Arabica coffee. The zone accounts for a significant share of Ethiopia&apos;s total export volume, which reached approximately 300,000 metric tons in the 2024/25 season according to the <a href='https://www.ico.org/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>International Coffee Organization (ICO)</a>. For importers, four characteristics make Jimma stand out:
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Volume and Reliability</h4>
          <p className='text-sm text-gray-700'>Jimma produces an estimated 40,000 to 60,000 metric tons of green coffee annually, more than any other Ethiopian zone. Multi-container programs (5, 10, or 20+ FCLs per season) are standard. Supply consistency is unmatched among Ethiopian origins.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Most Competitive Pricing</h4>
          <p className='text-sm text-gray-700'>Jimma&apos;s FOB pricing is the lowest among Ethiopian export origins, typically $1.50 to $3.00 per kilogram below comparable Yirgacheffe or Guji lots. This makes Jimma the default choice for cost-sensitive programs that still require genuine Ethiopian Arabica character.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Blend Base Excellence</h4>
          <p className='text-sm text-gray-700'>Jimma&apos;s full body, low acidity, and chocolate-forward profile make it the preferred base for <Link href='/insights/ethiopian-coffee-espresso-blend-sourcing-guide' className='text-amber-700 hover:underline'>espresso blends</Link>. It adds depth and body without overpowering brighter blend components. Major instant coffee producers worldwide also rely on Jimma for its clean extraction properties.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Hidden Specialty Potential</h4>
          <p className='text-sm text-gray-700'>Well-sorted Grade 4 lots from higher-altitude areas like Agaro and Gomma can score 80 to 82 on the SCA scale, approaching specialty territory. For buyers who curate carefully, Jimma offers exceptional value at the specialty threshold. These lots remain underpriced relative to their cup quality.</p>
        </div>
      </div>

      {/* SECTION 2: GEOGRAPHY */}
      <h3 id='geography' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMap className='w-8 h-8 text-amber-600' />
        2. Growing Region and Terroir
      </h3>

      <p className='my-4'>
        The Jimma coffee zone spans the southwestern highlands of Ethiopia&apos;s Oromia region, roughly 350 kilometers southwest of Addis Ababa. The area sits within the Gibe and Didessa river basins, creating a subtropical climate with heavy rainfall and dense forest cover. The city of Jimma was historically one of the most important coffee trading centers in the Horn of Africa and remains a strategic hub for Ethiopian coffee commerce.
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
              <td className='p-3'>Jimma Zone, Southwestern Oromia, Ethiopia</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Altitude</td>
              <td className='p-3'>1,400 to 1,800 masl (Agaro and Gomma reach 2,000+)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Rainfall</td>
              <td className='p-3'>1,500 to 2,200 mm annually</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Soil</td>
              <td className='p-3'>Deep red volcanic (nitisols), rich in organic matter</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Shade</td>
              <td className='p-3'>Forest, semi-forest, and garden coffee systems</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Varieties</td>
              <td className='p-3'>Ethiopian heirloom landraces (JARC selections present in some areas)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Harvest</td>
              <td className='p-3'>October to January (peak November to December)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Production</td>
              <td className='p-3'>Estimated 40,000 to 60,000 MT annually</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Jimma&apos;s terroir is defined by its <Link href='/insights/coffee-is-agriculture-production-farming' className='text-amber-700 hover:underline font-bold'>forest and semi-forest coffee systems</Link>. Ethiopia&apos;s Jimma Agricultural Research Center (JARC), located within the zone, has conducted decades of research on local heirloom varieties. The combination of natural shade, volcanic soils, and consistent rainfall produces a dense, full-bodied bean that develops the chocolatey, earthy profile prized in commercial applications.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Jimma vs. Limu: What Buyers Should Know</h4>
        <p className='text-sm text-gray-700'>
          Jimma and <Link href='/insights/limu-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Limu</Link> both sit within the broader Jimma administrative zone, but they are distinct ECX-classified origins. Limu refers specifically to the higher-altitude Limmu Kossa and Limmu Seka districts, which produce cleaner, wine-toned washed coffees scoring 82 to 85+ SCA. Jimma encompasses the wider zone, including lower-altitude production areas that yield full-bodied, earthy commercial coffees. On contracts, specify &quot;Jimma&quot; or &quot;Limu&quot; explicitly to receive the intended origin.
        </p>
      </div>

      {/* SECTION 3: SUB-REGIONS */}
      <h3 id='sub-regions' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMapPin className='w-8 h-8 text-amber-600' />
        3. Sub-Regions: Gomma, Agaro, Mana, Seka Chekorsa, Kersa, and Shebe Sombo
      </h3>

      <p className='my-4'>
        The Jimma zone contains numerous coffee-producing woredas (districts). Six primary areas define the region&apos;s export character. Each offers slightly different cup characteristics based on altitude, forest cover, and processing infrastructure.
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
              <td className='p-3 font-semibold'>Gomma</td>
              <td className='p-3'>1,500 to 1,800 masl</td>
              <td className='p-3'>Chocolate, soft fruit, balanced acidity</td>
              <td className='p-3'>Overlaps with Limu; forest-shaded lots show more complexity</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Agaro</td>
              <td className='p-3'>1,500 to 1,800 masl</td>
              <td className='p-3'>Cleaner cup, mild spice, dark chocolate</td>
              <td className='p-3'>Highest specialty potential; Grade 4 lots reach 80 to 82 SCA</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Mana</td>
              <td className='p-3'>1,400 to 1,700 masl</td>
              <td className='p-3'>Full body, earthy, tobacco, brown sugar</td>
              <td className='p-3'>Over 5,000 hectares planted; major production center</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Seka Chekorsa</td>
              <td className='p-3'>1,400 to 1,600 masl</td>
              <td className='p-3'>Dense body, earthy, grain, mild berry</td>
              <td className='p-3'>Leading natural-processed Jimma production center</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Kersa</td>
              <td className='p-3'>1,400 to 1,700 masl</td>
              <td className='p-3'>Consistent commercial character, cocoa, nutty</td>
              <td className='p-3'>Key source for high-volume export programs</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Shebe Sombo</td>
              <td className='p-3'>1,500 to 1,800 masl</td>
              <td className='p-3'>Rounded body, caramel, mild spice</td>
              <td className='p-3'>Organized cooperative production with improving quality</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        For buyers seeking the best cup quality within the Jimma classification, prioritize Agaro and Gomma district lots. These higher-altitude areas produce the cleanest, most complex coffees in the zone. Seka Chekorsa and Kersa are the best options for large-volume commercial programs where consistency matters more than complexity.
      </p>

      {/* SECTION 4: FLAVOR PROFILE */}
      <h3 id='flavor' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        4. Jimma Coffee Flavor Profile
      </h3>

      <p className='my-4'>
        Jimma is known for a bold, earthy cup with heavy body and low acidity. Unlike the floral brightness of southern Ethiopian origins, Jimma delivers the deep chocolate and warm spice profile that commercial roasters and espresso blend builders depend on. The dominant natural processing amplifies body and sweetness, while washed lots offer a cleaner, more defined version of the same base character.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Natural Jimma (Dominant)</h4>
          <ul className='text-sm text-gray-700 space-y-1'>
            <li><strong>Aroma:</strong> Earthy, cocoa, dried fruit, grain</li>
            <li><strong>Acidity:</strong> Low, smooth</li>
            <li><strong>Body:</strong> Full, heavy, dense</li>
            <li><strong>Flavor:</strong> Dark chocolate, tobacco, brown sugar, mild berry</li>
            <li><strong>Finish:</strong> Clean, earthy, warm</li>
            <li><strong>SCA Score:</strong> 78 to 81</li>
            <li><strong>Best for:</strong> Espresso blend base, instant coffee, commercial roast</li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Washed Jimma (Limited)</h4>
          <ul className='text-sm text-gray-700 space-y-1'>
            <li><strong>Aroma:</strong> Grain, mild nuts, cocoa</li>
            <li><strong>Acidity:</strong> Low-medium, round</li>
            <li><strong>Body:</strong> Medium-full, smooth</li>
            <li><strong>Flavor:</strong> Dark chocolate, walnut, mild spice, caramel</li>
            <li><strong>Finish:</strong> Clean, nutty, short-to-medium</li>
            <li><strong>SCA Score:</strong> 79 to 82</li>
            <li><strong>Best for:</strong> Premium blends, filter roast, cleaner commercial</li>
          </ul>
        </div>
      </div>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700'>
          <strong>Buyer&apos;s Tip:</strong> Jimma&apos;s neutral-to-chocolatey character and full body make it the ultimate blending coffee. Pair with a brighter origin like <Link href='/insights/yirgacheffe-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Yirgacheffe</Link> (for acidity and florals) or <Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Guji</Link> (for fruit and complexity) in multi-origin Ethiopian blends. See our <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>origin comparison guide</Link> for blending strategies.
        </p>
      </div>

      {/* SECTION 5: PROCESSING */}
      <h3 id='processing' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        5. Processing Methods
      </h3>

      <p className='my-4'>
        Jimma is predominantly a natural (dry-processed) coffee origin. An estimated 75% to 85% of export-grade Jimma production is sun-dried on raised beds or patios after selective harvesting. The remaining volume passes through <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='text-amber-700 hover:underline font-bold'>washing stations</Link>, where cherries are pulped, fermented, channel-washed, and dried over 10 to 14 days.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Process</th>
              <th className='p-3 text-left font-bold'>Share of Jimma Export</th>
              <th className='p-3 text-left font-bold'>Cup Impact</th>
              <th className='p-3 text-left font-bold'>Grade Range</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Natural</td>
              <td className='p-3'>75% to 85%</td>
              <td className='p-3'>Full body, earthy, chocolate, dried fruit</td>
              <td className='p-3'>Grade 4 to Grade 5</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Washed</td>
              <td className='p-3'>15% to 25%</td>
              <td className='p-3'>Cleaner, more defined, medium body</td>
              <td className='p-3'>Grade 2 to Grade 4</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        For buyers focused on espresso blends and commercial roasts, natural Jimma Grade 4 and 5 provide the body and sweetness that anchors a blend formula. Washed Jimma serves premium commercial programs that require a cleaner cup with more definition. For a full comparison of processing methods, see our <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline font-bold'>washed vs. natural Ethiopian coffee guide</Link>.
      </p>

      {/* SECTION 6: GRADING */}
      <h3 id='grading' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        6. Grades and Export Specifications
      </h3>

      <p className='my-4'>
        Ethiopian coffee grading combines physical evaluation (40% weight) and cup quality assessment (60% weight). The <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline font-bold'>ECTA grading system</Link> assigns grades from 1 (highest) through 9 (lowest). Jimma&apos;s primary export grades are Grade 4 and Grade 5, with well-sorted Grade 4 approaching specialty territory:
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
              <td className='p-3 font-semibold'>Grade 2 Washed</td>
              <td className='p-3'>4 to 12</td>
              <td className='p-3'>80 to 84</td>
              <td className='p-3'>Premium commercial; specialty threshold</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Grade 4 Natural</td>
              <td className='p-3'>26 to 45</td>
              <td className='p-3'>80 to 82</td>
              <td className='p-3'>Best commercial; approaching specialty</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Grade 4 Washed</td>
              <td className='p-3'>26 to 45</td>
              <td className='p-3'>78 to 80</td>
              <td className='p-3'>Standard commercial; blend component</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Grade 5 Natural</td>
              <td className='p-3'>46 to 100</td>
              <td className='p-3'>78 to 80</td>
              <td className='p-3'>Volume commercial; instant coffee</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Specification</th>
              <th className='p-3 text-left font-bold'>Grade 4</th>
              <th className='p-3 text-left font-bold'>Grade 5</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Screen Size</td>
              <td className='p-3'>14 to 16</td>
              <td className='p-3'>13 to 15</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Moisture Content</td>
              <td className='p-3'>10% to 12%</td>
              <td className='p-3'>10% to 12%</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Packaging</td>
              <td className='p-3'>60 kg jute bags</td>
              <td className='p-3'>60 kg jute bags</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Incoterms</td>
              <td className='p-3'>FOB Djibouti / FCA</td>
              <td className='p-3'>FOB Djibouti / FCA</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Harvest Season</td>
              <td className='p-3'>October to January</td>
              <td className='p-3'>October to January</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Pre-Shipment Sample Protocol</h4>
        <p className='text-sm text-gray-700'>
          Always request a pre-shipment sample (PSS) before approving any Jimma lot. Cup the sample using <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>SCA cupping protocol</Link> and verify <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline'>moisture content</Link> (target: 10.0% to 12.0%) and water activity (below 0.60 aw) before approving shipment. For commercial grades, physical defect counts matter as much as cup quality.
        </p>
      </div>

      {/* SECTION 7: PRICING */}
      <h3 id='pricing' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='w-8 h-8 text-amber-600' />
        7. FOB Pricing Benchmarks
      </h3>

      <p className='my-4'>
        Jimma is Ethiopia&apos;s most price-competitive export origin. Below are indicative FOB Djibouti pricing ranges for the 2025/26 season. Actual prices depend on grade, lot size, contract type, and market conditions. For a full breakdown of pricing mechanics, see our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee FOB pricing guide</Link>.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Grade / Process</th>
              <th className='p-3 text-left font-bold'>FOB Djibouti (USD/lb)</th>
              <th className='p-3 text-left font-bold'>Typical Lot Size</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Grade 2 Washed</td>
              <td className='p-3'>$3.00 to $4.50</td>
              <td className='p-3'>10 to 50 MT</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Grade 4 Natural</td>
              <td className='p-3'>$2.50 to $3.20</td>
              <td className='p-3'>20 to 100+ MT</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Grade 4 Washed</td>
              <td className='p-3'>$2.80 to $3.50</td>
              <td className='p-3'>20 to 100 MT</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Grade 5 Natural</td>
              <td className='p-3'>$2.00 to $2.80</td>
              <td className='p-3'>50 to 200+ MT</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700'>
          <strong>Price Context:</strong> For comparison, washed Yirgacheffe Grade 2 typically trades at $5.00 to $8.00/kg FOB, and washed Sidamo Grade 2 at $4.50 to $6.50/kg FOB. Jimma&apos;s lower price reflects its commercial grade positioning, not a quality deficit for its intended market segment. Volume discounts for multi-container programs are standard. To calculate what these FOB prices mean at your warehouse door, use our <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>landed cost calculator guide</Link>.
        </p>
      </div>

      {/* SECTION 8: SOURCING */}
      <h3 id='sourcing' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTruck className='w-8 h-8 text-amber-600' />
        8. How to Source Jimma Coffee from Ethiopia
      </h3>

      <p className='my-4'>
        Sourcing Jimma coffee follows the same process as other Ethiopian origins. For a complete step-by-step walkthrough, see our <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee export process guide</Link>. Below is the Jimma-specific path:
      </p>

      <div className='bg-gray-50 border border-gray-200 rounded-lg p-6 my-6'>
        <ol className='space-y-4 text-sm'>
          <li>
            <strong>1. Define Your Specification</strong>
            <p className='text-gray-700 mt-1'>Specify origin (Jimma/Djimmah), process (natural or washed), grade (G4 or G5), volume, and target price. Include sub-region preferences (Agaro, Gomma) if targeting higher-quality lots. For espresso blends, specify desired cup profile (body, chocolate, low acidity).</p>
          </li>
          <li>
            <strong>2. Request Offer Samples</strong>
            <p className='text-gray-700 mt-1'>Contact your exporter for current-season offer samples. Jimma lots are typically available from December through September of each crop year. Specify whether you need type samples (representative of grade) or spot samples (specific available lots). Volume buyers can request multiple grade comparisons.</p>
          </li>
          <li>
            <strong>3. Cup and Evaluate</strong>
            <p className='text-gray-700 mt-1'>Cup samples using <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>SCA protocol</Link>. For Jimma, evaluate body, sweetness, and clean finish rather than acidity or florals. Check physical quality: screen size (13 to 16), moisture (10.0% to 12.0%), and defect count per 300g green sample.</p>
          </li>
          <li>
            <strong>4. Contract and Payment</strong>
            <p className='text-gray-700 mt-1'>Agree on price, Incoterms (FOB Djibouti or FCA Addis Ababa), and <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>payment terms</Link> (typically LC or CAD for first orders, TT for established relationships). Jimma&apos;s volume pricing rewards multi-container commitments; negotiate annual supply contracts for the best rates.</p>
          </li>
          <li>
            <strong>5. Pre-Shipment Approval</strong>
            <p className='text-gray-700 mt-1'>Approve the PSS before your exporter begins <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='text-amber-700 hover:underline'>dry milling and export preparation</Link>. The PSS must match grade, moisture, and cupping expectations set during contracting. For Jimma Grade 5, pay close attention to defect counts and uniformity.</p>
          </li>
          <li>
            <strong>6. Shipping and Arrival</strong>
            <p className='text-gray-700 mt-1'>Jimma coffee ships via road freight to Djibouti port (2 to 3 days), then by ocean freight to destination. Transit times range from 14 days (Middle East) to 35 days (North America). Jimma&apos;s standard 60 kg jute bag packaging is sufficient for most commercial applications. For premium lots, request <Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline'>GrainPro liners</Link>.</p>
          </li>
        </ol>
      </div>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Jimma Coffee Direct from Ethiopia</h4>
        <p className='my-2'>Ethio Coffee Import and Export PLC sources natural and washed Jimma lots through our heritage network of cooperatives and smallholder farmers in southwestern Ethiopia. Request samples, review current availability, or discuss year-round supply contracts for your commercial programs.</p>
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
            <h4 className='font-bold text-gray-800 mb-2'>What does Jimma coffee taste like?</h4>
            <p className='text-sm text-gray-600'>Natural Jimma has an earthy, full-bodied character with dark chocolate, tobacco, grain, and mild spice notes. Acidity is low and the body is heavy and dense. Washed Jimma is cleaner with more definition but retains the chocolate and nutty base character. Jimma is less complex than Yirgacheffe or Guji but delivers consistent, reliable flavor for blends and commercial programs.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Is Jimma coffee specialty grade?</h4>
            <p className='text-sm text-gray-600'>Most Jimma is commercial grade (Grade 4 and 5, SCA 78 to 82). Well-sorted Grade 4 lots from Agaro or Gomma districts can score 80 to 82 on the SCA scale, reaching the specialty threshold. For dedicated specialty programs, we recommend <Link href='/insights/yirgacheffe-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Yirgacheffe</Link>, <Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Guji</Link>, or <Link href='/insights/sidamo-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Sidamo</Link> instead.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the difference between Jimma and Limu coffee?</h4>
            <p className='text-sm text-gray-600'>Both are southwestern origins within the same administrative zone, but they are classified as distinct ECX origins. Limu is washed at higher altitudes (1,400 to 2,000 m) with a wine-toned profile scoring 82 to 85 SCA. Jimma is lower altitude (1,400 to 1,800 m), predominantly natural, and more earthy and commercial. Limu commands higher pricing; Jimma offers the best volume value.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How much does Jimma coffee cost FOB?</h4>
            <p className='text-sm text-gray-600'>Grade 5 natural ranges from $2.00 to $2.80 per pound FOB Djibouti. Grade 4 natural runs $2.50 to $3.20 per pound. Jimma is Ethiopia&apos;s most price-competitive origin. Volume discounts are available for multi-container programs. Contact us for current-season pricing.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the minimum order for Jimma coffee?</h4>
            <p className='text-sm text-gray-600'>Standard minimum is one FCL (approximately 19.2 MT, 320 bags at 60 kg each). Jimma&apos;s volume availability makes multi-container orders easy to fulfill. Year-round supply contracts with tiered pricing are available for buyers committing to 5 or more containers per season. See our <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>MOQ guide</Link> for details.</p>
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
              <li>&bull; <Link href='/insights/limu-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Limu Coffee: Buyer&apos;s Sourcing Guide</Link></li>
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
              <li>&bull; <Link href='/insights/ethiopian-coffee-espresso-blend-sourcing-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee for Espresso Blends</Link></li>
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

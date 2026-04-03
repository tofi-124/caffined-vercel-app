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

export default function HararCoffeeSourcingGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      {/* H1 + H2 */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Bean Classifications, Flavor Profiles, Grades, FOB Pricing, and Direct Sourcing from Ethiopia
      </h2>

      {/* HERO IMAGE */}
      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md bg-gray-200 flex items-center justify-center'>
          {/* TODO: Replace placeholder with actual hero image */}
          {/* Expected path: /images/insights/harar-coffee-sourcing-guide.webp */}
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Harar coffee longberry green beans from eastern Ethiopia highlands'
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
        <span className='ml-2'>Origin Guide / Harar Coffee / Sourcing Guide / Importer Resources</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Harar is Ethiopia&apos;s oldest coffee export region and the only major origin processed exclusively by natural (dry) method. Three bean classifications define the market: Longberry (premium, large elongated beans with intense fruit complexity), Shortberry (smaller, bolder, commercial grade), and Mocha (peaberry with concentrated chocolate-fruit notes). FOB Djibouti pricing for Harar Grade 4 ranges from $3.00 to $4.50 per kilogram, while specialty Longberry Grade 4 lots command $4.00 to $6.00 per kilogram. This guide covers each bean type, grading specifications, flavor profiles, pricing benchmarks, and a step-by-step sourcing path for importers and roasters.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#why-harar' className='text-amber-700 hover:underline'>1. Why Harar Coffee Matters for Importers</a></li>
          <li><a href='#geography' className='text-amber-700 hover:underline'>2. Growing Region and Terroir</a></li>
          <li><a href='#bean-types' className='text-amber-700 hover:underline'>3. Bean Classifications: Longberry, Shortberry, and Mocha</a></li>
          <li><a href='#flavor' className='text-amber-700 hover:underline'>4. Harar Coffee Flavor Profile</a></li>
          <li><a href='#grading' className='text-amber-700 hover:underline'>5. Grades and Export Specifications</a></li>
          <li><a href='#pricing' className='text-amber-700 hover:underline'>6. FOB Pricing Benchmarks</a></li>
          <li><a href='#sourcing' className='text-amber-700 hover:underline'>7. How to Source Harar Coffee from Ethiopia</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>8. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRODUCTION */}
      <p className='text-lg leading-relaxed my-4'>
        Harar coffee stands apart from every other Ethiopian origin. Grown in the eastern highlands surrounding the ancient walled city of Harar, a <a href='https://whc.unesco.org/en/list/1189' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>UNESCO World Heritage Site</a>, this coffee has been traded for over 500 years, making it one of the world&apos;s first exported coffees. For importers accustomed to the floral, citrus-driven profiles of Yirgacheffe or Sidamo, Harar offers something fundamentally different: bold berry intensity, wine-like body, and a wild, untamed character rooted in exclusively natural processing.
      </p>
      <p className='my-4'>
        This Harar coffee sourcing guide gives importers, roasters, and green coffee traders the information needed to evaluate, price, and purchase Harar lots with confidence. We cover the three bean classifications that define the Harar market, cupping profiles by type, <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline font-bold'>grading specifications</Link>, current FOB pricing benchmarks, and a clear sourcing path from origin to your warehouse.
      </p>

      {/* SECTION 1: WHY HARAR MATTERS */}
      <h3 id='why-harar' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineGlobeAlt className='w-8 h-8 text-amber-600' />
        1. Why Harar Coffee Matters for Importers
      </h3>

      <p className='my-4'>
        Harar occupies a unique position in specialty coffee. It is Ethiopia&apos;s historic first export origin, the source of the original &quot;Mocha&quot; coffee that traveled through the port of Mocha in Yemen to reach European markets in the 17th century. That lineage gives Harar a brand story no other origin can match.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Heritage Value</h4>
          <p className='text-sm text-gray-700'>Over 500 years of continuous coffee trade. Roasters sourcing Harar connect their brand to the oldest commercial coffee lineage in the world.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Flavor Distinction</h4>
          <p className='text-sm text-gray-700'>The only major Ethiopian origin processed 100% by natural method. This produces a cup profile (blueberry, wine, chocolate) completely different from washed Ethiopian coffees.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Blend Component</h4>
          <p className='text-sm text-gray-700'>Harar&apos;s heavy body and berry fruit make it a sought-after component in <Link href='/insights/ethiopian-coffee-espresso-blend-sourcing-guide' className='text-amber-700 hover:underline'>espresso blends</Link>, adding complexity that lighter washed coffees cannot deliver.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Price Accessibility</h4>
          <p className='text-sm text-gray-700'>Compared to top-tier Yirgacheffe or Guji lots, Harar offers competitive pricing for a genuinely unique single-origin profile, widening the value proposition for cost-conscious roasters.</p>
        </div>
      </div>

      {/* SECTION 2: GEOGRAPHY */}
      <h3 id='geography' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMapPin className='w-8 h-8 text-amber-600' />
        2. Growing Region and Terroir
      </h3>

      <p className='my-4'>
        Harar coffee grows in the Hararghe zone of the Oromia region in eastern Ethiopia. The growing area spans both East Hararghe and West Hararghe, with the most prized lots coming from the highlands surrounding the city of Harar itself. The region sits geographically and climatically apart from Ethiopia&apos;s western and southern coffee zones.
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
              <td className='p-3 font-semibold'>Administrative Zone</td>
              <td className='p-3'>Hararghe (East and West), Oromia Region</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Elevation</td>
              <td className='p-3'>1,500 to 2,100 meters above sea level</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Climate</td>
              <td className='p-3'>Semi-arid; drier and warmer than western Ethiopian coffee zones</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Rainfall</td>
              <td className='p-3'>800 to 1,200 mm annually (lower than Sidamo or Yirgacheffe)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Soil</td>
              <td className='p-3'>Predominantly volcanic red clay and sandy loam</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Processing</td>
              <td className='p-3'>100% natural (dry processed); no washing stations in the zone</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Varietal</td>
              <td className='p-3'>Indigenous heirloom landraces, adapted over centuries to the dry eastern highlands</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Harvest Season</td>
              <td className='p-3'>November to February</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        The drier climate is critical. Unlike western Ethiopian origins where abundant rainfall supports both washed and natural processing, Harar&apos;s low rainfall makes natural (sun-dried) processing the only viable method. This is not a processing choice; it is a geographic necessity. The result is a coffee with pronounced fruit fermentation, heavier body, and winey complexity that would be impossible to replicate through washed processing.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Terroir Note for Buyers</h4>
        <p className='text-sm text-gray-700'>
          Much of Harar&apos;s coffee is cultivated on semi-wild garden plots rather than organized farms. Trees grow alongside other crops (khat, sorghum, vegetables) in an intercropping system. This distinguishes Harar from the managed plantation or cooperative models common in Yirgacheffe, Sidamo, and Guji. For traceability-focused buyers, this means lot identification typically happens at the collection point or dry mill rather than at the farm level. Learn more in our <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline font-bold'>traceability guide</Link>.
        </p>
      </div>

      {/* SECTION 3: BEAN CLASSIFICATIONS */}
      <h3 id='bean-types' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        3. Bean Classifications: Longberry, Shortberry, and Mocha
      </h3>

      <p className='my-4'>
        Harar coffee is unique among Ethiopian origins in that bean size and morphology drive market segmentation more than sub-regional terroir. Three classifications define the Harar market, each with distinct quality implications and pricing.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Classification</th>
              <th className='p-3 text-left font-bold'>Bean Size</th>
              <th className='p-3 text-left font-bold'>Shape</th>
              <th className='p-3 text-left font-bold'>Quality Tier</th>
              <th className='p-3 text-left font-bold'>Typical Use</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Longberry</td>
              <td className='p-3'>Large (screen 16+)</td>
              <td className='p-3'>Elongated, flat</td>
              <td className='p-3'>Premium / Specialty</td>
              <td className='p-3'>Single origin, premium blends</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Shortberry</td>
              <td className='p-3'>Medium (screen 13-15)</td>
              <td className='p-3'>Rounder, compact</td>
              <td className='p-3'>Commercial / Standard</td>
              <td className='p-3'>Espresso blends, bulk commercial</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Mocha (Peaberry)</td>
              <td className='p-3'>Small (screen 10-13)</td>
              <td className='p-3'>Round, singular seed</td>
              <td className='p-3'>Niche / Specialty</td>
              <td className='p-3'>Specialty roasters, single origin</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Longberry: The Premium Tier</h4>
      <p className='my-4'>
        Longberry is the top classification and the one specialty importers should target. These large, elongated beans deliver the most intense, fruity complexity Harar has to offer. The best Longberry lots exhibit pronounced blueberry, strawberry, and wine-like notes with a heavy, syrupy body. Screen size typically exceeds 16, and top lots grade at G4 or occasionally G3 under the <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline font-bold'>ECX grading system</Link>.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Shortberry: The Commercial Workhorse</h4>
      <p className='my-4'>
        Shortberry beans are smaller and rounder, with a bolder, earthier profile. While they lack the fruit intensity of Longberry lots, Shortberry Harar offers a reliable, heavy-bodied cup with chocolate and dried fruit notes. Many roasters use Shortberry Harar as an espresso blend component, where its body and berry-chocolate character add depth without dominating the blend.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Mocha: The Concentrated Peaberry</h4>
      <p className='my-4'>
        Harar Mocha refers to peaberry beans, where only a single seed develops inside the coffee cherry instead of the usual two. The result is a small, round bean with concentrated flavor intensity. Mocha Harar is prized for its balanced chocolate-fruit profile and is the source of the original &quot;Mocha&quot; name in coffee history. It commands niche pricing and appeals to specialty roasters seeking a unique single-origin offering.
      </p>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-3'>Buying Tip: Specify Your Classification</h4>
        <p className='text-sm leading-relaxed'>
          When requesting Harar samples from an exporter, always specify which bean classification you want: Longberry, Shortberry, or Mocha. These are not interchangeable; each delivers a different cup profile, screen size, and price point. Mixing them in a single contract without specification is a common source of buyer disappointment.
        </p>
      </div>

      {/* SECTION 4: FLAVOR PROFILE */}
      <h3 id='flavor' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        4. Harar Coffee Flavor Profile
      </h3>

      <p className='my-4'>
        Harar&apos;s flavor profile is unlike anything else in the Ethiopian portfolio. Where <Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline'>Yirgacheffe</Link> delivers delicate florals and <Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline'>Sidamo</Link> balances citrus with stone fruit, Harar goes bold: intense berry, wine-like fermentation, heavy body, and a wild character that reflects the semi-arid eastern terroir and exclusively natural processing.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Attribute</th>
              <th className='p-3 text-left font-bold'>Longberry</th>
              <th className='p-3 text-left font-bold'>Shortberry</th>
              <th className='p-3 text-left font-bold'>Mocha (Peaberry)</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Primary Notes</td>
              <td className='p-3'>Blueberry, strawberry, tropical fruit</td>
              <td className='p-3'>Dark chocolate, dried fruit, earth</td>
              <td className='p-3'>Chocolate, berry, spice</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Secondary Notes</td>
              <td className='p-3'>Wine, bergamot, jasmine</td>
              <td className='p-3'>Tobacco, walnut, molasses</td>
              <td className='p-3'>Citrus zest, caramel, cedar</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Body</td>
              <td className='p-3'>Full, syrupy</td>
              <td className='p-3'>Heavy, round</td>
              <td className='p-3'>Medium-full, concentrated</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Acidity</td>
              <td className='p-3'>Bright, wine-like</td>
              <td className='p-3'>Low-medium, mellow</td>
              <td className='p-3'>Medium, balanced</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Finish</td>
              <td className='p-3'>Lingering fruit, clean</td>
              <td className='p-3'>Earthy, cocoa</td>
              <td className='p-3'>Sweet, persistent</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>SCA Range</td>
              <td className='p-3'>82 to 86+</td>
              <td className='p-3'>78 to 82</td>
              <td className='p-3'>80 to 85</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        The signature blueberry note in top Harar Longberry lots is among the most recognizable flavor markers in the specialty coffee world. This characteristic develops from the extended contact between bean and fruit pulp during natural drying, combined with the specific heirloom <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline font-bold'>landrace varieties</Link> adapted to the eastern highlands.
      </p>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700 italic'>
          For a detailed comparison of how Harar&apos;s cup profile compares with western Ethiopian origins, see our <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline font-bold'>Yirgacheffe vs Sidamo vs Guji comparison</Link> and the <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline font-bold'>washed vs natural processing guide</Link>.
        </p>
      </div>

      {/* SECTION 5: GRADING */}
      <h3 id='grading' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineChartBar className='w-8 h-8 text-amber-600' />
        5. Grades and Export Specifications
      </h3>

      <p className='my-4'>
        Harar coffee is graded under the Ethiopian Coffee and Tea Authority (ECTA) system, with evaluation split between raw assessment (40% of the score) and cup quality (60%). Because all Harar is natural processed, the grading scale differs from washed Ethiopian coffees. Washed coffees can achieve Grade 1 and 2; natural coffees (sun-dried) are graded starting from Grade 3 at best, with most commercial Harar trading at Grade 4 and Grade 5.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Grade</th>
              <th className='p-3 text-left font-bold'>Defect Count (per 300g)</th>
              <th className='p-3 text-left font-bold'>Cup Quality</th>
              <th className='p-3 text-left font-bold'>Market Position</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Grade 3 (Rare)</td>
              <td className='p-3'>15 to 25 defects</td>
              <td className='p-3'>Clean, distinct character</td>
              <td className='p-3'>Top specialty; limited availability</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Grade 4</td>
              <td className='p-3'>26 to 45 defects</td>
              <td className='p-3'>Good cup, some unevenness</td>
              <td className='p-3'>Standard specialty / premium commercial</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Grade 5</td>
              <td className='p-3'>46 to 100 defects</td>
              <td className='p-3'>Acceptable, undistinguished</td>
              <td className='p-3'>Commercial grade; bulk commodity</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Grading Context for Natural Coffees</h4>
        <p className='text-sm text-gray-700'>
          A Harar Grade 4 is not equivalent in quality to a Grade 4 washed Yirgacheffe. Because natural processed beans inherently carry more visible defects (staining, irregular drying), the grading scale adjusts expectations. A well-prepared Harar Grade 4 Longberry can score 83 to 85 on the SCA scale and deliver excellent cup quality. Buyers new to Harar should not dismiss Grade 4 lots; cup the samples and let the cupping score guide the purchase decision. For more detail, see our <Link href='/coffee-grading-ethiopia' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee grading overview</Link>.
        </p>
      </div>

      <p className='my-4'>
        Export specifications for Harar coffee follow standard ECX packout requirements: 60 kg jute bags (sometimes GrainPro lined for specialty lots), with moisture content between 10.0% and 12.0%. Screen size is specified in the contract based on bean classification (Longberry, Shortberry, or Mocha). Read our <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline font-bold'>moisture content guide</Link> for tolerance ranges.
      </p>

      {/* SECTION 6: PRICING */}
      <h3 id='pricing' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='w-8 h-8 text-amber-600' />
        6. FOB Pricing Benchmarks
      </h3>

      <p className='my-4'>
        Harar coffee occupies a competitive pricing tier compared to Yirgacheffe, Guji, and top Sidamo lots. This reflects both the commercial nature of much Harar volume and the generally lower cupping scores relative to washed specialty origins. That said, premium Longberry lots command meaningful premiums over Shortberry and undifferentiated Harar.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Classification / Grade</th>
              <th className='p-3 text-left font-bold'>FOB Djibouti ($/kg)</th>
              <th className='p-3 text-left font-bold'>FOB Djibouti ($/lb)</th>
              <th className='p-3 text-left font-bold'>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Longberry G4 (Specialty)</td>
              <td className='p-3'>$4.00 to $6.00</td>
              <td className='p-3'>$1.80 to $2.70</td>
              <td className='p-3'>Best lots; limited volume</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Longberry G5 (Commercial)</td>
              <td className='p-3'>$3.20 to $4.00</td>
              <td className='p-3'>$1.45 to $1.80</td>
              <td className='p-3'>Good cup; higher availability</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Shortberry G4</td>
              <td className='p-3'>$3.00 to $4.50</td>
              <td className='p-3'>$1.35 to $2.05</td>
              <td className='p-3'>Standard commercial</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Shortberry G5</td>
              <td className='p-3'>$2.50 to $3.20</td>
              <td className='p-3'>$1.13 to $1.45</td>
              <td className='p-3'>Bulk / commodity</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Mocha (Peaberry) G4</td>
              <td className='p-3'>$4.50 to $7.00</td>
              <td className='p-3'>$2.05 to $3.18</td>
              <td className='p-3'>Niche; very limited supply</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg my-6'>
        <h4 className='font-bold text-lg mb-3'>Pricing Disclaimer</h4>
        <p className='text-sm text-gray-700'>
          Prices shown are indicative benchmarks for the 2025/26 season and fluctuate based on global C-market movements, seasonal supply, and quality. Contact us for current pricing on specific lots. For a broader understanding of Ethiopian coffee pricing mechanics, see our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline font-bold'>FOB pricing guide</Link> and <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline font-bold'>landed cost guide</Link>.
        </p>
      </div>

      {/* SECTION 7: HOW TO SOURCE */}
      <h3 id='sourcing' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTruck className='w-8 h-8 text-amber-600' />
        7. How to Source Harar Coffee from Ethiopia
      </h3>

      <p className='my-4'>
        Sourcing Harar coffee follows a similar path to other Ethiopian origins, with a few distinctions buyers should know. Here is a step-by-step workflow for importers approaching Harar for the first time.
      </p>

      <div className='bg-gray-50 border border-gray-200 rounded-lg p-6 my-6'>
        <ol className='space-y-4 text-sm'>
          <li>
            <span className='font-bold'>1. Define your specification.</span> Choose your bean classification (Longberry, Shortberry, or Mocha), target grade, and volume. For specialty, target Longberry G4 with a minimum SCA score of 82.
          </li>
          <li>
            <span className='font-bold'>2. Request samples from an origin-connected exporter.</span> Work with an exporter who sources directly from the Hararghe zone. Ask for pre-shipment samples (PSS) of 300 to 500 grams per lot. <Link href='/contact-us' className='text-amber-700 hover:underline font-bold'>Contact Ethio Coffee</Link> to request Harar samples.
          </li>
          <li>
            <span className='font-bold'>3. Cup and evaluate.</span> Score the samples using SCA protocol. Pay attention to berry intensity (Longberry&apos;s hallmark), body, and fermentation cleanliness. See our <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline font-bold'>cupping guide</Link> for methodology.
          </li>
          <li>
            <span className='font-bold'>4. Negotiate terms.</span> Confirm FOB price, Incoterms, <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline font-bold'>payment terms</Link>, and shipping timeline. Standard payment terms include LCs and CAD (Cash Against Documents).
          </li>
          <li>
            <span className='font-bold'>5. Confirm packaging and shipping.</span> Standard export is in 60 kg jute bags. For specialty lots, request GrainPro or Ecotact liners. Shipping routes from Addis Ababa go through Djibouti port for ocean freight. See our <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline font-bold'>logistics guide</Link> for transit times by destination.
          </li>
          <li>
            <span className='font-bold'>6. Arrange quality inspection.</span> Final PSS before loading confirms the contracted lot matches your approved sample. Reputable exporters provide CLU grading certificates and can arrange third-party inspection on request.
          </li>
        </ol>
      </div>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Seasonal Sourcing Window</h4>
        <p className='text-sm text-gray-700'>
          Harar cherry harvest runs from November through February, with natural drying extending into March. Export-ready lots become available from March through May, with peak sourcing in April and May. Spot lots remain available through August from exporter warehouses in Addis Ababa. For year-round planning, see our <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee harvest calendar</Link>.
        </p>
      </div>

      {/* CTA Block */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Premium Harar Coffee Direct from Origin</h4>
        <p className='my-2'>
          Ethio Coffee Import and Export PLC sources Harar coffee from our trusted network across the Hararghe highlands. Request Longberry, Shortberry, or Mocha samples, review our current offer sheet, or start your order today.
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

      {/* FAQ Section */}
      <section id='faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900'>Frequently Asked Questions</h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the difference between Harar Longberry and Shortberry?</h4>
            <p className='text-sm text-gray-600'>
              Longberry and Shortberry refer to bean size and shape. Longberry beans are large and elongated (screen 16+) with intense fruit complexity and higher pricing. Shortberry beans are smaller and rounder with a bolder, earthier cup profile suited to espresso blends. Longberry is the premium tier; Shortberry is the commercial workhorse.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Why is Harar coffee only natural processed?</h4>
            <p className='text-sm text-gray-600'>
              The Hararghe growing zone receives significantly less rainfall than western and southern Ethiopian coffee regions. This semi-arid climate makes washing stations impractical. All Harar coffee is dried in the cherry on raised beds or patios, producing the heavy body and fermented fruit character the origin is known for. See our <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>processing comparison</Link>.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What SCA score can I expect from Harar coffee?</h4>
            <p className='text-sm text-gray-600'>
              Top Harar Longberry lots score 82 to 86 on the SCA scale. Shortberry typically ranges from 78 to 82, and Mocha (peaberry) falls between 80 and 85. These scores reflect the natural process character; buyers should evaluate Harar lots on their own terms rather than comparing directly to washed Ethiopian scores.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How much does Harar coffee cost FOB?</h4>
            <p className='text-sm text-gray-600'>
              In the 2025/26 season, Harar Longberry G4 ranges from $4.00 to $6.00 per kilogram FOB Djibouti. Shortberry G4 trades between $3.00 and $4.50 per kilogram. Mocha (peaberry) commands $4.50 to $7.00 per kilogram. Pricing varies by lot quality, season, and global market conditions.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the minimum order quantity for Harar coffee?</h4>
            <p className='text-sm text-gray-600'>
              Most exporters accept <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>minimum orders</Link> of 1 pallet (roughly 10 to 20 bags of 60 kg each) for LCL shipments. Full container loads hold approximately 300 to 320 bags. Smaller trial orders of 5 to 10 bags may be available for select Longberry lots.
            </p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origin Guides</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Guji Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/sidamo-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Sidamo Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/yirgacheffe-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Yirgacheffe Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/bombe-sidama-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Bombe Sidama Coffee: Buyer&apos;s Guide</Link></li>
              <li>&bull; <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji Compared</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Processing &amp; Quality</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality Control &amp; Grading</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Ethiopian Heirloom Varieties &amp; Landraces</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-espresso-blend-sourcing-guide' className='text-amber-700 hover:underline'>Espresso Blend Sourcing Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Buyer Resources</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Contracts &amp; Payment Terms</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Harvest Calendar</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
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

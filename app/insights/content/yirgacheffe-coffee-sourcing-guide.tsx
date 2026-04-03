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
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function YirgacheffeCoffeeSourcingGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      {/* H1 + H2 */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Sub-Regions, Flavor Profiles, Grades, FOB Pricing, and How to Source Direct from Ethiopia
      </h2>

      {/* HERO IMAGE */}
      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md bg-gray-200 flex items-center justify-center'>
          {/* TODO: Replace placeholder with actual hero image */}
          {/* Expected path: /images/insights/yirgacheffe-coffee-sourcing-guide.webp */}
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Yirgacheffe green coffee beans drying on raised beds in the Gedeo Zone of southern Ethiopia'
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
        <span className='ml-2'>Origin Guide / Yirgacheffe Coffee / Sourcing Guide / Importer Resources</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Yirgacheffe is Ethiopia&apos;s most recognized coffee origin, prized for floral aromatics, citrus acidity, and a tea-like body that defines the &quot;washed Ethiopian&quot; benchmark. Six sub-regions (Kochere, Gedeb, Gelana Abaya, Chelelectu, Aricha/Idido, and Worka) each deliver distinct cup profiles ranging from jasmine-forward filter lots to tropical fruit-bomb naturals. FOB Djibouti pricing for washed Grade 1 ranges from $5.50 to $9.00 per kilogram in the 2025/26 season, while top natural Grade 1 lots command $6.00 to $10.00 per kilogram. This guide covers each sub-region, grading standards, pricing benchmarks, and a step-by-step sourcing path for importers and roasters.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#geography' className='text-amber-700 hover:underline'>1. What Is Yirgacheffe Coffee? Geography and Terroir</a></li>
          <li><a href='#sub-regions' className='text-amber-700 hover:underline'>2. Yirgacheffe Sub-Regions: A Buyer&apos;s Map</a></li>
          <li><a href='#flavor' className='text-amber-700 hover:underline'>3. Flavor Profiles by Processing Method</a></li>
          <li><a href='#grading' className='text-amber-700 hover:underline'>4. Grading and Export Specifications</a></li>
          <li><a href='#pricing' className='text-amber-700 hover:underline'>5. FOB Pricing Benchmarks</a></li>
          <li><a href='#sourcing' className='text-amber-700 hover:underline'>6. How to Source Yirgacheffe Coffee</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>7. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* Introduction */}
      <p className='text-lg leading-relaxed my-4'>
        Yirgacheffe coffee sourcing is the starting point for most importers building an Ethiopian program. Located in the Gedeo Zone of southern Ethiopia, this compact origin produces coffees so distinctive that the Ethiopia Commodity Exchange (ECX) assigns them a separate trade classification from neighboring Sidama, despite Gedeo technically falling within the broader Sidama region. For specialty roasters worldwide, a Yirgacheffe offering anchors single-origin menus and defines what &quot;Ethiopian coffee&quot; tastes like to end consumers.
      </p>
      <p className='my-4'>
        This Yirgacheffe coffee sourcing guide breaks down the origin&apos;s geography, maps its six primary sub-regions by altitude and flavor, benchmarks current FOB pricing, and outlines a practical sourcing path from sample request to container loading. Whether you are sourcing your first Yirgacheffe lot or diversifying across its sub-regions, this guide provides the buyer-level detail that general origin pages leave out.
      </p>

      {/* Section 1: Geography and Terroir */}
      <h3 id='geography' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMapPin className='w-8 h-8 text-amber-600' />
        1. What Is Yirgacheffe Coffee? Geography and Terroir
      </h3>
      <p className='my-4'>
        Yirgacheffe (also spelled Yirgachefe) is a coffee-growing district in the Gedeo Zone of southern Ethiopia. The zone covers roughly 1,350 square kilometers of steep, highland terrain, bordered by Sidama to the north and west, and Guji to the south and east. Coffee grows across altitudes from 1,700 to 2,200 meters above sea level, with the highest-scoring lots concentrated between 1,850 and 2,200 meters. The Gedeo Zone produces an estimated 50,000 to 60,000 metric tons of coffee annually, making it one of Ethiopia&apos;s most productive specialty zones relative to its size.
      </p>
      <p className='my-4'>
        Three terroir factors combine to create the signature Yirgacheffe cup profile. First, deep red volcanic Nitisol soils deliver high iron and mineral content, contributing to the bright acidity and clean finish that distinguish Yirgacheffe from other Ethiopian origins. Second, altitude above 1,800 meters slows cherry maturation by 8 to 10 months (compared to 6 to 7 months at lower elevations), allowing sugars and organic acids to concentrate inside the bean. Third, dense indigenous shade canopy (Cordia africana, Millettia ferruginea, and Erythrina species) regulates temperature, reduces pest pressure, and creates the even ripening conditions that produce uniform lot quality.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Terroir Factor</th>
              <th className='p-3 text-left font-bold'>Detail</th>
              <th className='p-3 text-left font-bold'>Impact on Cup Quality</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Altitude</td>
              <td className='p-3'>1,700 to 2,200 m.a.s.l.</td>
              <td className='p-3'>Slow maturation, high bean density, concentrated acidity and sweetness</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Soil</td>
              <td className='p-3'>Deep red volcanic Nitisol</td>
              <td className='p-3'>High mineral content, excellent drainage, bright clean acidity</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Shade System</td>
              <td className='p-3'>Indigenous canopy (Cordia, Millettia, Erythrina)</td>
              <td className='p-3'>Uniform ripening, reduced pest pressure, extended sugar development</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Rainfall</td>
              <td className='p-3'>1,400 to 1,800 mm annually</td>
              <td className='p-3'>Reliable moisture during flowering and cherry development</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Varieties</td>
              <td className='p-3'>Regional heirloom landraces (74110, 74112, Dega), JARC selections</td>
              <td className='p-3'>Genetic diversity drives complex floral and citrus flavor profiles</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Over 350,000 smallholder farmers cultivate coffee in the Gedeo Zone, most on plots smaller than one hectare. These farmers deliver ripe cherry to nearby washing stations, which control pulping, fermentation, washing, and drying. The region&apos;s garden coffee system (coffee grown alongside enset, fruit trees, and food crops) and minimal chemical input make most Yirgacheffe coffee eligible for <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline font-bold'>organic certification</Link> without significant practice changes.
      </p>

      {/* Section 2: Sub-Regions */}
      <h3 id='sub-regions' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMap className='w-8 h-8 text-amber-600' />
        2. Yirgacheffe Sub-Regions: A Buyer&apos;s Map
      </h3>
      <p className='my-4'>
        Yirgacheffe&apos;s six primary coffee-producing sub-regions each bring a different cup character to the table. Understanding these differences lets importers target specific flavor profiles rather than buying generic &quot;Yirgacheffe&quot; lots. The sub-regions below are ordered roughly by reputation and typical cupping score potential.
      </p>

      {/* Sub-region cards */}
      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Kochere</h4>
          <p className='text-xs text-gray-500 mb-2'>1,850 to 2,200 m | Washed, Natural</p>
          <p className='text-sm text-gray-700'>
            Often considered the pinnacle of Yirgacheffe quality. Washed Kochere lots deliver bright citrus (lemon, bergamot), jasmine florals, and a clean tea-like body. Natural Kochere produces intense berry and tropical fruit notes with wine-like complexity. Competition-winning lots from specific kebeles like Chelelektu and Dumerso have scored 90+ on the SCA scale. Kochere commands the highest premiums in the Gedeo Zone.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Gedeb</h4>
          <p className='text-xs text-gray-500 mb-2'>1,900 to 2,200 m | Natural, Washed</p>
          <p className='text-sm text-gray-700'>
            Intense floral aromatics, bergamot, and lemon zest define Gedeb&apos;s best lots. The district produces some of Yirgacheffe&apos;s highest-scoring naturals, with fermentation-driven tropical fruit and wine character. Specific kebeles like Gotiti, Chelchele, and Banko Gotiti are gaining their own reputations among specialty buyers. Gedeb washing stations have expanded rapidly in recent seasons.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Gelana Abaya</h4>
          <p className='text-xs text-gray-500 mb-2'>1,700 to 2,100 m | Washed, Natural</p>
          <p className='text-sm text-gray-700'>
            Tropical fruit, peach, and honey sweetness with a smooth, medium body. Gelana Abaya produces well-balanced washed lots that work across brew methods and appeal to importers seeking a versatile, classic Yirgacheffe character. The district borders Lake Abaya, and its lower-altitude lots tend toward stone fruit and caramel sweetness.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Chelelectu</h4>
          <p className='text-xs text-gray-500 mb-2'>1,800 to 2,100 m | Washed, Natural</p>
          <p className='text-sm text-gray-700'>
            Stone fruit, citrus brightness, and a clean finish. Chelelectu represents the &quot;classic Yirgacheffe&quot; profile that built the origin&apos;s global reputation. Consistent washed lots from this area provide reliable quality for importers building year-round Yirgacheffe programs. Natural lots add berry and dried fruit depth.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Aricha / Idido</h4>
          <p className='text-xs text-gray-500 mb-2'>1,900 to 2,200 m | Natural, Washed</p>
          <p className='text-sm text-gray-700'>
            Complex berry and tropical notes in naturals; Aricha and Idido helped put Yirgacheffe naturals on the global map. These kebeles produce bold, fruit-bomb cups with blueberry, strawberry, and wine characteristics that perform well as espresso single origins and in specialty cold brew. High demand and limited volume mean lots sell out quickly each season.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Worka</h4>
          <p className='text-xs text-gray-500 mb-2'>1,750 to 2,100 m | Washed, Natural</p>
          <p className='text-sm text-gray-700'>
            Balanced sweetness, mild floral notes, and caramel undertones. Worka delivers reliable, consistent washed lots that score in the 84 to 86 range; strong value for importers building broader Ethiopian programs or seeking a dependable blending component with clear Yirgacheffe identity.
          </p>
        </div>
      </div>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Buyer&apos;s Tip: Sub-Region Selection</h4>
        <p className='text-sm text-gray-700'>
          When requesting offer sheets, specify the sub-region (woreda or kebele) rather than just &quot;Yirgacheffe.&quot; This narrows down the flavor profile and helps your exporter match lots to your roast style. For filter-focused roasters, Kochere washed and Gedeb washed deliver the highest clarity. For espresso single origins and fruit-forward programs, Aricha/Idido naturals and Gedeb naturals are the top picks.
        </p>
      </div>

      {/* Section 3: Flavor Profiles */}
      <h3 id='flavor' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        3. Yirgacheffe Flavor Profiles by Processing Method
      </h3>
      <p className='my-4'>
        Processing method is the single largest variable in Yirgacheffe cup character after sub-region. Washed Yirgacheffe defines the global benchmark for clean, floral Ethiopian coffee; natural Yirgacheffe delivers a completely different experience with intense fruit and wine complexity. For a deeper comparison, see our <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline font-bold'>washed vs natural Ethiopian coffee guide</Link>.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Attribute</th>
              <th className='p-3 text-left font-bold'>Washed Yirgacheffe</th>
              <th className='p-3 text-left font-bold'>Natural Yirgacheffe</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Aroma</td>
              <td className='p-3'>Jasmine, bergamot, lemon blossom</td>
              <td className='p-3'>Blueberry, strawberry, tropical fruit wine</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Flavor</td>
              <td className='p-3'>Lemon, peach, honey, earl grey tea</td>
              <td className='p-3'>Blueberry, mango, dried fruit, chocolate</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Acidity</td>
              <td className='p-3'>Bright, sparkling, citric to malic</td>
              <td className='p-3'>Moderate, wine-like, juicy</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Body</td>
              <td className='p-3'>Light to medium, tea-like, silky</td>
              <td className='p-3'>Medium-full, creamy, syrupy</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Best Use</td>
              <td className='p-3'>Pour-over, filter, single origin showcase</td>
              <td className='p-3'>Espresso single origin, cold brew, fruit-forward blends</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Typical SCA Score</td>
              <td className='p-3'>85 to 89</td>
              <td className='p-3'>84 to 89+</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Washed Yirgacheffe accounts for roughly 60% to 70% of the zone&apos;s output. These lots undergo 36 to 72 hours of fermentation at the washing station, followed by channel washing and 10 to 14 days of drying on raised African beds. The result is the clean, floral, citrus-driven cup that built Yirgacheffe&apos;s global reputation. Naturals, which are sun-dried with the cherry intact for 15 to 21 days, deliver dramatically different profiles: intense berry, tropical fruit, and wine-like fermentation character. The growing demand for Yirgacheffe naturals has driven more washing stations to allocate raised bed capacity for natural processing alongside their washed production.
      </p>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700 italic'>
          &quot;Yirgacheffe washed coffee defined the standard for what specialty Ethiopian coffee should taste like. When a buyer says 'I want an Ethiopian,' they usually mean Yirgacheffe washed.&quot; The floral, citrus, tea-like profile remains the single most requested Ethiopian cup profile among European and North American specialty roasters.
        </p>
      </div>

      {/* Section 4: Grading */}
      <h3 id='grading' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        4. Yirgacheffe Coffee Grading and Export Specifications
      </h3>
      <p className='my-4'>
        Yirgacheffe coffee is graded through the Ethiopian Coffee and Tea Authority (ECTA) system, which assigns grades based on 40% physical evaluation (defect count, screen size, moisture) and 60% cup quality (aroma, flavor, acidity, body, overall). Grades range from Grade 1 (highest) through Grade 5. For importers, Grade 1 and Grade 2 are the relevant specialty tiers. For the full grading methodology, see our <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline font-bold'>ECX and Ethiopian coffee export guide</Link>.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Grade</th>
              <th className='p-3 text-left font-bold'>Defects (per 300g)</th>
              <th className='p-3 text-left font-bold'>Cup Score Range</th>
              <th className='p-3 text-left font-bold'>Buyer Application</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Yirgacheffe Washed G1</td>
              <td className='p-3'>0 to 3 primary defects</td>
              <td className='p-3'>85+</td>
              <td className='p-3'>Premium single origin, competition lots, filter showcase</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Yirgacheffe Washed G2</td>
              <td className='p-3'>4 to 12 primary defects</td>
              <td className='p-3'>80 to 84</td>
              <td className='p-3'>Specialty blends, reliable single origin</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Yirgacheffe Natural G1</td>
              <td className='p-3'>0 to 9 primary defects</td>
              <td className='p-3'>85+</td>
              <td className='p-3'>High-end single origin, micro-lot programs</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Yirgacheffe Natural G2</td>
              <td className='p-3'>10 to 25 primary defects</td>
              <td className='p-3'>80 to 84</td>
              <td className='p-3'>Espresso blends, fruit-forward programs</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Yirgacheffe Natural G3</td>
              <td className='p-3'>26 to 45 primary defects</td>
              <td className='p-3'>75 to 79</td>
              <td className='p-3'>Commercial blends, volume buying</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Export Specification Checklist</h4>
        <ul className='text-sm text-gray-700 space-y-2'>
          <li><strong>Moisture content:</strong> 10.0% to 12.0% at export (ICO standard). Most Yirgacheffe lots ship at 10.5% to 11.5%.</li>
          <li><strong>Water activity:</strong> Below 0.60 aw for optimal shelf life during sea freight.</li>
          <li><strong>Screen size:</strong> Primarily 14 to 17 for washed lots; naturals show more variation (13 to 17).</li>
          <li><strong>Packaging:</strong> 60 kg jute bags lined with GrainPro inner bags. Vacuum-sealed 30 kg bags available for micro-lots.</li>
          <li><strong>Container load:</strong> Standard FCL holds 300 to 320 bags (60 kg each) in a 20-foot container.</li>
        </ul>
      </div>

      <p className='my-4'>
        Yirgacheffe Washed Grade 1 has become increasingly difficult to source in recent seasons. The combination of rising cherry prices at origin, tightening supply of top-tier lots, and growing competition among exporters for Grade 1 qualifying volumes means importers should lock in contracts early in the season. For specifications on <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline font-bold'>moisture and water activity standards</Link>, consult our detailed quality guide.
      </p>

      {/* Section 5: Pricing */}
      <h3 id='pricing' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='w-8 h-8 text-amber-600' />
        5. Yirgacheffe Coffee FOB Pricing Benchmarks
      </h3>
      <p className='my-4'>
        Yirgacheffe commands some of the highest premiums among Ethiopian coffee origins. Prices are expressed as FOB Djibouti and fluctuate based on the C-market, cherry price dynamics at origin, and seasonal supply constraints. The following ranges represent indicative 2025/26 season pricing. For detailed pricing methodology, see our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee FOB pricing guide</Link>.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Grade / Process</th>
              <th className='p-3 text-left font-bold'>FOB $/kg (2025/26 Range)</th>
              <th className='p-3 text-left font-bold'>FOB $/lb Equivalent</th>
              <th className='p-3 text-left font-bold'>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Washed G1</td>
              <td className='p-3'>$5.50 to $9.00</td>
              <td className='p-3'>$2.49 to $4.08</td>
              <td className='p-3'>Premium end for Kochere, Gedeb micro-lots</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Washed G2</td>
              <td className='p-3'>$4.50 to $6.00</td>
              <td className='p-3'>$2.04 to $2.72</td>
              <td className='p-3'>Reliable specialty volume</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Natural G1</td>
              <td className='p-3'>$6.00 to $10.00</td>
              <td className='p-3'>$2.72 to $4.54</td>
              <td className='p-3'>Top end for Aricha/Idido, Gedeb fruit-bomb naturals</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Natural G2</td>
              <td className='p-3'>$4.50 to $6.50</td>
              <td className='p-3'>$2.04 to $2.95</td>
              <td className='p-3'>Strong value for fruit-forward blends</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Natural G3</td>
              <td className='p-3'>$3.50 to $4.50</td>
              <td className='p-3'>$1.59 to $2.04</td>
              <td className='p-3'>Commercial grade, volume discounts available</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-3'>Pricing Context</h4>
        <p className='text-sm text-gray-700'>
          Yirgacheffe Washed Grade 1 pricing has climbed sharply since 2023/24 due to several compounding factors. Cherry prices at washing stations surged past 200 ETB per kilogram in late 2024, driven by competition among over 200 active washing stations in the Gedeo Zone and inflationary pressure from the Ethiopian birr devaluation. Kochere and Gedeb G1 lots command the highest premiums; washing stations in these sub-regions can charge 15% to 25% above generic Yirgacheffe pricing. For importers calculating <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline font-bold'>total landed cost</Link>, add freight ($0.08 to $0.12/kg for FCL), insurance, and destination customs to the FOB figures above.
        </p>
      </div>

      {/* Section 6: How to Source */}
      <h3 id='sourcing' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTruck className='w-8 h-8 text-amber-600' />
        6. How to Source Yirgacheffe Coffee
      </h3>
      <p className='my-4'>
        Sourcing Yirgacheffe coffee follows the same general export pathway as other Ethiopian specialty coffees, but the origin&apos;s high demand and limited top-tier supply require earlier action. Below is the step-by-step process from inquiry to delivery. For the complete Ethiopian export workflow, see our <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee export process guide</Link>.
      </p>

      <div className='space-y-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Step 1: Define Your Specification</h4>
          <p className='text-sm text-gray-700'>
            Specify the sub-region (Kochere, Gedeb, Aricha, etc.), processing method, target grade, volume, and your cupping score threshold. The more precise your spec, the faster your exporter can match available lots.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Step 2: Request Pre-Shipment Samples</h4>
          <p className='text-sm text-gray-700'>
            Ask for 200 to 300 gram samples of available lots matching your spec. A reliable exporter will send roasted and green samples with full lot data: washing station name, altitude, moisture reading, screen size distribution, and internal cupping notes. For sample evaluation, see our <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline font-bold'>cupping guide</Link>.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Step 3: Review Offer Sheet and Negotiate</h4>
          <p className='text-sm text-gray-700'>
            Once you confirm interest, your exporter issues a formal offer sheet with FOB pricing, Incoterms, payment terms, and delivery timeline. Most Yirgacheffe exports ship FOB Djibouti. Common payment terms include irrevocable letter of credit (LC) or cash against documents (CAD). Refer to our <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline font-bold'>contracts and payment terms guide</Link> for details.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Step 4: Contract and Pre-Shipment Approval</h4>
          <p className='text-sm text-gray-700'>
            After contract signing, the exporter prepares the lot: <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='text-amber-700 hover:underline font-bold'>dry milling</Link>, final grading, CLU (Coffee Liquoring Unit) inspection, and packaging. A final pre-shipment sample is sent for your approval before the lot loads into the container.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Step 5: Shipping and Documentation</h4>
          <p className='text-sm text-gray-700'>
            Yirgacheffe coffee ships from <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline font-bold'>Djibouti port</Link>. Transit times range from 14 to 22 days to major European ports and 30 to 45 days to North America. Complete export documentation (phytosanitary certificate, certificate of origin, ICO certificate, CLU grade certificate, bill of lading) accompanies every shipment.
          </p>
        </div>
      </div>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Seasonal Sourcing Window</h4>
        <p className='text-sm text-gray-700'>
          Yirgacheffe cherry harvest runs from October through January, with washed lots ready for export by February and naturals by March. The prime sourcing window for new-crop Yirgacheffe is January through April, when fresh lots are available for cupping and immediate booking. Because Yirgacheffe Washed G1 demand exceeds supply each season, importers should secure forward contracts by December or January to avoid being shut out of the best lots. For year-round planning, see our <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee harvest calendar</Link>.
        </p>
      </div>

      {/* CTA Block */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Premium Yirgacheffe Coffee Direct from Origin</h4>
        <p className='my-2'>
          Ethio Coffee Import and Export PLC sources Yirgacheffe coffee from trusted washing stations across Kochere, Gedeb, Gelana Abaya, and Chelelectu. Request samples, review our current offer sheet, or start your order today.
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
            <h4 className='font-bold text-gray-800 mb-2'>What makes Yirgacheffe coffee different from Guji?</h4>
            <p className='text-sm text-gray-600'>
              Yirgacheffe is prized for floral aromatics (jasmine, bergamot), citrus acidity, and a tea-like body, particularly in washed lots. <Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Guji</Link> tends toward tropical fruit (mango, papaya) and stone fruit with more body and intensity. Both are top-tier Ethiopian origins, but they serve different roast profiles and consumer segments. See our <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>full regional comparison</Link>.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How much does Yirgacheffe coffee cost FOB Djibouti?</h4>
            <p className='text-sm text-gray-600'>
              In the 2025/26 season, Yirgacheffe Washed Grade 1 ranges from $5.50 to $9.00 per kilogram FOB Djibouti. Natural Grade 1 lots trade between $6.00 and $10.00 per kilogram. Kochere and Gedeb micro-lots command the premium end. Pricing depends on sub-region, grade, lot size, and seasonal supply dynamics.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the minimum order quantity for Yirgacheffe coffee?</h4>
            <p className='text-sm text-gray-600'>
              Most exporters require a <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>minimum order</Link> starting from 1 pallet (roughly 10 to 20 bags of 60 kg each) for LCL shipments. A full container load (FCL) holds approximately 300 to 320 bags. Micro-lot orders of 5 to 10 bags are available for select washing station lots, though pricing per kg will be higher.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>When is Yirgacheffe coffee available for purchase?</h4>
            <p className='text-sm text-gray-600'>
              Yirgacheffe cherry harvest runs October through January. Washed lots become export-ready by February; naturals by March. The prime buying window is January through April. Spot lots remain available through mid-year from exporter warehouses in Addis Ababa, but Grade 1 availability drops significantly after May.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Which Yirgacheffe sub-region is best for espresso?</h4>
            <p className='text-sm text-gray-600'>
              Natural lots from Aricha/Idido and Gedeb produce the most intense fruit and body, making them excellent choices for <Link href='/insights/ethiopian-coffee-espresso-blend-sourcing-guide' className='text-amber-700 hover:underline'>espresso single origins</Link>. Washed Kochere also performs well in espresso when developed slightly past first crack, offering bright floral acidity and citrus sweetness that cut through milk-based drinks.
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
              <li>&bull; <Link href='/insights/bombe-sidama-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Bombe Sidama Coffee: Buyer&apos;s Guide</Link></li>
              <li>&bull; <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji Compared</Link></li>
              <li>&bull; <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Green Coffee Origins</Link></li>
              <li>&bull; <Link href='/insights/harar-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Harar Coffee: Buyer&apos;s Sourcing Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Processing &amp; Quality</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Washing Stations Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Defects: Buyer&apos;s Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process</Link></li>
              <li>&bull; <Link href='/insights/micro-lot-ethiopian-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Micro-Lot Ethiopian Coffee Sourcing</Link></li>
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

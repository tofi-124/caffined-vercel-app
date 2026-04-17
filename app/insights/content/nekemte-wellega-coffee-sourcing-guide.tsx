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
  HiOutlineGlobeAlt,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function NekemteWellegaCoffeeSourcingGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      {/* H1 + H2 */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        The Lekempti Trade Name, Wollega Sub-Zones, Processing Grades, FOB Pricing, and Direct Sourcing from Western Ethiopia
      </h2>

      {/* HERO IMAGE */}
      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md bg-gray-200 flex items-center justify-center'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Green coffee beans drying on raised beds in the Nekemte Wellega region of western Ethiopia'
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
        <span className='ml-2'>Origin Guide / Nekemte Coffee / Lekempti Coffee / Sourcing Guide / Importer Resources</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Nekemte coffee, traded internationally under the name &quot;Lekempti,&quot; is one of western Ethiopia&apos;s most distinctive origin categories. Grown across four Wollega administrative zones at altitudes of 1,500 to 2,400 meters, Nekemte lots deliver chocolate, citrus, and honey notes with medium body and balanced acidity. Natural processing dominates, producing tropical fruit and jasmine characteristics with a long sweet aftertaste, while washed lots offer cleaner floral and black tea profiles. Available in Grades 3 through 5 for both washed and natural processing, Nekemte represents one of the strongest value propositions in Ethiopian specialty coffee for importers seeking differentiated western Ethiopian origins.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#trade-name' className='text-amber-700 hover:underline'>1. What Is Nekemte Coffee? The Lekempti Trade Name Explained</a></li>
          <li><a href='#sub-zones' className='text-amber-700 hover:underline'>2. Wollega Sub-Zones: East, West, Kellem, and Horo Guduru</a></li>
          <li><a href='#terroir' className='text-amber-700 hover:underline'>3. Terroir and Production Systems</a></li>
          <li><a href='#processing' className='text-amber-700 hover:underline'>4. Processing Methods and Flavor Profiles</a></li>
          <li><a href='#grading' className='text-amber-700 hover:underline'>5. Grading and Export Specifications</a></li>
          <li><a href='#pricing' className='text-amber-700 hover:underline'>6. FOB Pricing and Market Position</a></li>
          <li><a href='#sourcing' className='text-amber-700 hover:underline'>7. How to Source Nekemte Coffee</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>8. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRODUCTION */}
      <p className='text-lg leading-relaxed my-4'>
        While Yirgacheffe and Guji dominate specialty coffee conversations about Ethiopia, the country&apos;s western highlands produce some of its most underrated and commercially compelling coffees. Nekemte, the capital city of Oromia&apos;s East Wollega Zone, has served as the primary trade hub for western Ethiopian coffee for over a century. Coffees channeled through this city earned the trade name &quot;Lekempti&quot; on international markets, a designation that persists on the Ethiopia Commodity Exchange (ECX) and on green coffee contracts worldwide.
      </p>
      <p className='my-4'>
        For importers and roasters building diversified Ethiopian sourcing programs, Nekemte/Lekempti coffee offers a distinct alternative to the citrus-and-floral profiles of eastern and southern Ethiopian origins. The region&apos;s chocolate-forward, nutty character with honey sweetness and balanced acidity makes it particularly well-suited for espresso blends, single-origin drip programs, and cold brew applications. This guide maps the four Wollega sub-zones, explains how production systems shape cup quality, benchmarks FOB pricing, and outlines a practical sourcing path for wholesale buyers.
      </p>

      {/* ================================================================ */}
      {/* Section 1: Trade Name */}
      {/* ================================================================ */}
      <h3 id='trade-name' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineGlobeAlt className='w-8 h-8 text-amber-600' />
        1. What Is Nekemte Coffee? The Lekempti Trade Name Explained
      </h3>
      <p className='my-4'>
        The distinction between &quot;Nekemte&quot; and &quot;Lekempti&quot; confuses many first-time buyers. Nekemte (also spelled Nekempte or Nekempt) is the city in western Ethiopia through which all Wollega-region coffees are aggregated, graded, and channeled for export. &quot;Lekempti&quot; is the trade name assigned to these coffees on the ECX and in international commerce, much as &quot;Harar&quot; designates eastern Ethiopian coffees traded through the city of Harar regardless of the specific woreda of cultivation.
      </p>
      <p className='my-4'>
        In practical terms, a &quot;Lekempti Grade 4 Natural&quot; on an export contract could originate from any of the four Wollega administrative zones, spanning elevations from 1,500 to 2,400 meters. The trade name tells the buyer the processing method, grade, and broad origin region, but not the specific sub-zone or woreda. Buyers seeking greater traceability should request lot-level documentation specifying the woreda and, where available, the washing station or cooperative name.
      </p>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='italic text-gray-700'>
          &quot;Lekempti is to western Ethiopia what Djimmah is to the southwest: a commercial trade name grouping coffees from a broad growing area under a single market designation. The name originates from the city, not the farm.&quot;
        </p>
      </div>

      <p className='my-4'>
        On the ECX, Lekempti coffees are classified separately from Sidamo, Yirgacheffe, Harar, Jimma (Djimmah), and other named origins. This classification means Lekempti lots are cupped and graded independently, giving buyers a reliable benchmark for cup quality within the western Ethiopian category. The ECX classification also means Nekemte/Lekempti coffee has its own price discovery, which typically runs below Yirgacheffe or Guji but above Djimmah lots of the same grade.
      </p>

      {/* ================================================================ */}
      {/* Section 2: Sub-Zones */}
      {/* ================================================================ */}
      <h3 id='sub-zones' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMap className='w-8 h-8 text-amber-600' />
        2. Wollega Sub-Zones: East, West, Kellem, and Horo Guduru
      </h3>
      <p className='my-4'>
        The broader Wollega coffee-growing area spans four administrative zones within Oromia. Each zone contributes distinct characteristics based on altitude, microclimate, and dominant production system. Understanding these sub-zones enables importers to target specific cup profiles rather than purchasing undifferentiated commercial Lekempti lots.
      </p>

      {/* Sub-zone cards */}
      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold text-gray-800 text-lg'>East Wollega</h4>
          <p className='text-xs text-gray-500 mt-1'>1,700 – 2,200 m | Natural & Washed</p>
          <p className='text-sm text-gray-700 mt-2'>
            The primary aggregation zone centered around Nekemte city. East Wollega produces the largest volume of Lekempti-designated coffee and hosts the majority of the region&apos;s washing stations and dry mills. Coffee from woredas like Guto Gida, Sibu Sire, and Diga offers the classic Nekemte profile: medium body, chocolate and nut base, pleasant acidity, and honey sweetness. Both semi-forest and garden production systems are prevalent here.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold text-gray-800 text-lg'>West Wollega</h4>
          <p className='text-xs text-gray-500 mt-1'>1,600 – 2,100 m | Predominantly Natural</p>
          <p className='text-sm text-gray-700 mt-2'>
            Stretching toward the Benishangul-Gumuz border, West Wollega contributes significant commercial volume. Coffees tend toward heavier body and stronger tropical fruit notes in natural-processed lots. The lower altitude range in some woredas produces a slightly earthier cup than East Wollega, though higher-elevation kebeles deliver clean, sweet lots. Semi-forest coffee production dominates, with trees growing under native Cordia Africana and Albizia canopy.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold text-gray-800 text-lg'>Kellem Wollega</h4>
          <p className='text-xs text-gray-500 mt-1'>1,800 – 2,400 m | Natural & Washed</p>
          <p className='text-sm text-gray-700 mt-2'>
            The highest-altitude Wollega sub-zone, Kellem Wollega is gaining attention from specialty buyers for its bright acidity and floral complexity. Woredas like Dale Sadi and Dale Wabera produce lots that rival mid-tier Guji coffees in cupping scores. The extreme altitude slows cherry maturation significantly, resulting in denser beans with higher sugar content. Limited infrastructure means smaller volumes reach export markets, creating both opportunity and supply-chain challenges for buyers.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold text-gray-800 text-lg'>Horo Guduru Wollega</h4>
          <p className='text-xs text-gray-500 mt-1'>1,700 – 2,300 m | Predominantly Natural</p>
          <p className='text-sm text-gray-700 mt-2'>
            Located in the northeastern portion of the Wollega area, Horo Guduru is an emerging coffee zone with increasing research attention from the Jimma Agricultural Research Center (JARC). The zone&apos;s research stations have evaluated advanced Arabica lines for yield and disease resistance. Commercial coffee from Horo Guduru typically enters the market blended into broader Lekempti lots, but single-zone offerings are beginning to appear from progressive exporters.
          </p>
        </div>
      </div>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Sub-Zone</th>
              <th className='p-3 text-left font-bold'>Altitude Range</th>
              <th className='p-3 text-left font-bold'>Key Woredas</th>
              <th className='p-3 text-left font-bold'>Dominant Processing</th>
              <th className='p-3 text-left font-bold'>Cup Character</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>East Wollega</td>
              <td className='p-3'>1,700 – 2,200 m</td>
              <td className='p-3'>Guto Gida, Sibu Sire, Diga, Leka Dullacha</td>
              <td className='p-3'>Natural & Washed</td>
              <td className='p-3'>Chocolate, nuts, honey, balanced acidity</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>West Wollega</td>
              <td className='p-3'>1,600 – 2,100 m</td>
              <td className='p-3'>Gimbi, Manasibu, Nedjo, Boji</td>
              <td className='p-3'>Predominantly Natural</td>
              <td className='p-3'>Tropical fruit, heavier body, earthy sweetness</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Kellem Wollega</td>
              <td className='p-3'>1,800 – 2,400 m</td>
              <td className='p-3'>Dale Sadi, Dale Wabera, Sayyo</td>
              <td className='p-3'>Natural & Washed</td>
              <td className='p-3'>Bright acidity, floral, citrus, complex</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Horo Guduru Wollega</td>
              <td className='p-3'>1,700 – 2,300 m</td>
              <td className='p-3'>Abe Dongoro, Horo, Guduru, Amuru</td>
              <td className='p-3'>Predominantly Natural</td>
              <td className='p-3'>Nutty, mild fruit, medium body</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Combined coffee production across West and East Wollega was reported at approximately 40,600 tonnes annually, according to Ethiopian Central Statistical Agency data. When Kellem and Horo Guduru volumes are included, the broader Wollega area represents one of Ethiopia&apos;s largest Arabica production clusters by volume, though a smaller share reaches specialty-grade markets compared to Guji or Yirgacheffe.
      </p>

      {/* ================================================================ */}
      {/* Section 3: Terroir and Production Systems */}
      {/* ================================================================ */}
      <h3 id='terroir' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMapPin className='w-8 h-8 text-amber-600' />
        3. Terroir and Production Systems
      </h3>
      <p className='my-4'>
        Western Ethiopia&apos;s Wollega region is part of the country&apos;s montane rainforest belt, a zone of high rainfall (1,400 to 1,800 mm annually), deep Nitisol soils, and dense indigenous forest cover. This agro-ecological profile creates conditions fundamentally different from the drier eastern highlands around Harar or the volcanic plateaus of Guji and Sidamo.
      </p>
      <p className='my-4'>
        Coffee in the Wollega area is produced under three distinct systems, each affecting cup quality and supply reliability in different ways:
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Production System</th>
              <th className='p-3 text-left font-bold'>Share of Output</th>
              <th className='p-3 text-left font-bold'>Characteristics</th>
              <th className='p-3 text-left font-bold'>Impact on Cup Quality</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Semi-Forest</td>
              <td className='p-3'>~35–40%</td>
              <td className='p-3'>Coffee grows under natural forest canopy with minimal human intervention. Farmers manage undergrowth and selectively harvest ripe cherries.</td>
              <td className='p-3'>Wild, complex cup with diverse flavor compounds. Lower yields but higher inherent quality potential. Often organic by default.</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Garden</td>
              <td className='p-3'>~50–55%</td>
              <td className='p-3'>Smallholder plots of 0.5 to 2 hectares integrated with other crops. Farmers plant coffee alongside enset, maize, and fruit trees for shade.</td>
              <td className='p-3'>Consistent production with moderate quality control. Garden coffees form the majority of commercial Lekempti lots.</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Plantation</td>
              <td className='p-3'>~5–10%</td>
              <td className='p-3'>State or private farms with managed shade, planted varieties, and structured agronomic inputs.</td>
              <td className='p-3'>Highest yield consistency and traceability. Cup profiles tend toward clean and balanced but less complex than semi-forest lots.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        The prevalence of semi-forest and garden production in Wollega means that a large share of the region&apos;s output qualifies for <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline font-bold'>organic certification</Link> with minimal transition, since synthetic inputs are rarely used. For buyers targeting certified organic supply chains, Nekemte/Lekempti coffee offers significant volume availability compared to smaller specialty origins that struggle to aggregate certified lots.
      </p>
      <p className='my-4'>
        Varietal composition across Wollega is dominated by regional heirloom landraces, a genetically diverse population of indigenous Arabica cultivars that have adapted to local conditions over centuries. JARC has also released improved selections in some areas, particularly in Horo Guduru, to address coffee berry disease (CBD) and coffee leaf rust (CLR) pressures. The interplay of wild heirloom genetics and high-altitude semi-forest growing conditions is the primary driver of Nekemte coffee&apos;s distinctive character.
      </p>

      {/* ================================================================ */}
      {/* Section 4: Processing and Flavor */}
      {/* ================================================================ */}
      <h3 id='processing' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        4. Processing Methods and Flavor Profiles
      </h3>
      <p className='my-4'>
        Natural (dry) processing dominates Nekemte/Lekempti coffee production, reflecting both the region&apos;s traditions and its infrastructure reality. Washed processing capacity has expanded in recent years, particularly in East Wollega and Kellem Wollega, where new washing stations have come online. Understanding the flavor implications of each method helps importers match Nekemte lots to their target market applications.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Processing Method</th>
              <th className='p-3 text-left font-bold'>Flavor Profile</th>
              <th className='p-3 text-left font-bold'>Body</th>
              <th className='p-3 text-left font-bold'>Acidity</th>
              <th className='p-3 text-left font-bold'>Best Applications</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Natural (Dry)</td>
              <td className='p-3'>Tropical fruit, jasmine, stone fruit, chocolate, long sweet aftertaste</td>
              <td className='p-3'>Medium to full</td>
              <td className='p-3'>Medium, balanced</td>
              <td className='p-3'>Espresso blends, cold brew, single-origin drip</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Washed (Wet)</td>
              <td className='p-3'>Floral, citrus, black tea, clean finish, light honey</td>
              <td className='p-3'>Medium</td>
              <td className='p-3'>Bright, clean</td>
              <td className='p-3'>Pour-over, filter, specialty single-origin</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Natural-processed Nekemte coffees are the region&apos;s signature. The tropical fruit and jasmine notes with a long, sweet aftertaste are characteristics that distinguish Lekempti naturals from the berry-forward naturals of Guji or the wine-like naturals of Harar. The chocolate and nut base notes provide a foundation that makes these coffees particularly versatile in blending applications.
      </p>
      <p className='my-4'>
        Washed Nekemte lots are less common but increasingly available from stations in East Wollega and Kellem Wollega. These lots present a cleaner, more citrus-forward profile with floral aromatics and a black tea finish. While washed Lekempti is unlikely to compete directly with top-tier Yirgacheffe washed lots on floral complexity, it offers excellent value for buyers seeking clean Ethiopian washed coffees at a more accessible price point.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-gray-800 mb-2'>Buyer Tip: Nekemte in Espresso Blends</h4>
        <p className='text-sm text-gray-700'>
          Natural-processed Nekemte Grade 3 and Grade 4 coffees are widely used by European roasters as a base component in espresso blends. The chocolate-nut foundation provides body and sweetness, while the tropical fruit undertone adds complexity without the aggressive acidity that some eastern Ethiopian origins introduce. At a lower FOB price point than Guji or Yirgacheffe, Nekemte naturals offer an excellent cost-per-cup ratio for commercial espresso programs.
        </p>
      </div>

      <p className='my-4'>
        Cupping scores for commercial Nekemte/Lekempti lots typically range from 78 to 84 on the SCA scale, placing them firmly in the high-commercial to low-specialty range. However, single-washing-station lots from Kellem Wollega and select East Wollega woredas have achieved scores in the 85 to 87 range, particularly from washed lots processed at newer, well-managed stations. These micro-lots represent the emerging specialty frontier for western Ethiopian coffee.
      </p>

      {/* ================================================================ */}
      {/* Section 5: Grading */}
      {/* ================================================================ */}
      <h3 id='grading' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        5. Grading and Export Specifications
      </h3>
      <p className='my-4'>
        Nekemte/Lekempti coffee follows the standard <Link href='/coffee-grading-ethiopia' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee grading system</Link>, which evaluates raw (green) bean physical quality and cup quality on a combined scale. Grades are assigned separately for washed and natural-processed lots, with Grade 1 being the highest and Grade 9/UG (Under Grade) the lowest.
      </p>
      <p className='my-4'>
        In practice, the majority of export-grade Nekemte coffee falls within Grades 3 through 5 for both washed and natural processing. Grade 1 and Grade 2 Lekempti lots are rare in the market, though AMG Coffee Export and other specialized exporters report offering Grades 1 through 4 for buyers willing to commit to premium pricing and advance lot reservation.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Grade</th>
              <th className='p-3 text-left font-bold'>Processing</th>
              <th className='p-3 text-left font-bold'>Defect Count (per 300g)</th>
              <th className='p-3 text-left font-bold'>Cup Score Range</th>
              <th className='p-3 text-left font-bold'>Market Availability</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Grade 1–2</td>
              <td className='p-3'>Washed</td>
              <td className='p-3'>0–8 defects</td>
              <td className='p-3'>84–87+</td>
              <td className='p-3'>Very limited; advance reservation required</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Grade 3</td>
              <td className='p-3'>Washed & Natural</td>
              <td className='p-3'>9–25 defects</td>
              <td className='p-3'>80–84</td>
              <td className='p-3'>Available; standard specialty-grade Lekempti</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Grade 4</td>
              <td className='p-3'>Washed & Natural</td>
              <td className='p-3'>26–45 defects</td>
              <td className='p-3'>75–80</td>
              <td className='p-3'>Most common export grade; strong commercial value</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Grade 5</td>
              <td className='p-3'>Washed & Natural</td>
              <td className='p-3'>46–100 defects</td>
              <td className='p-3'>71–75</td>
              <td className='p-3'>Commercial grade; volume buyers and blending stock</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>UG (Under Grade)</td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>100+ defects</td>
              <td className='p-3'>Below 71</td>
              <td className='p-3'>Domestic market or low-grade commercial export</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Export Specification</th>
              <th className='p-3 text-left font-bold'>Standard</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Moisture Content</td>
              <td className='p-3'>10.0–12.0% (target: 11.0%)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Screen Size</td>
              <td className='p-3'>14–18 (predominantly 15–17)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Packaging</td>
              <td className='p-3'>60 kg GrainPro-lined jute bags (standard), 50 kg or 1-tonne bulk bags available</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Container Loading</td>
              <td className='p-3'>250–320 bags per 20 ft container (15–19.2 tonnes)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Certifications Available</td>
              <td className='p-3'>Organic (USDA/EU), Fair Trade, Rainforest Alliance (station-dependent)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        For detailed information on <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline font-bold'>moisture content and water activity standards</Link>, see our dedicated guide. Proper moisture management is critical for Nekemte coffees, as the region&apos;s high rainfall can make drying challenging during peak harvest months.
      </p>

      {/* ================================================================ */}
      {/* Section 6: Pricing */}
      {/* ================================================================ */}
      <h3 id='pricing' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='w-8 h-8 text-amber-600' />
        6. FOB Pricing and Market Position
      </h3>
      <p className='my-4'>
        Nekemte/Lekempti coffee occupies a mid-tier pricing position in the Ethiopian export market. It commands higher prices than Djimmah (Jimma) commercial lots but trades below the premium levels established by Yirgacheffe, Guji, and Sidamo specialty grades. This positioning makes Nekemte an attractive option for importers who need Ethiopian cup character at accessible price points.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Grade & Processing</th>
              <th className='p-3 text-left font-bold'>FOB Djibouti (USD/kg)</th>
              <th className='p-3 text-left font-bold'>FOB Djibouti (USD/lb)</th>
              <th className='p-3 text-left font-bold'>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Washed Grade 3</td>
              <td className='p-3'>$4.20 – $5.80</td>
              <td className='p-3'>$1.90 – $2.63</td>
              <td className='p-3'>Specialty-grade; limited availability</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Washed Grade 4</td>
              <td className='p-3'>$3.60 – $4.80</td>
              <td className='p-3'>$1.63 – $2.18</td>
              <td className='p-3'>Good commercial quality; consistent supply</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Natural Grade 3</td>
              <td className='p-3'>$3.80 – $5.40</td>
              <td className='p-3'>$1.72 – $2.45</td>
              <td className='p-3'>Best naturals; fruity and complex</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Natural Grade 4</td>
              <td className='p-3'>$3.20 – $4.20</td>
              <td className='p-3'>$1.45 – $1.90</td>
              <td className='p-3'>Volume commercial grade; espresso blend staple</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Natural Grade 5</td>
              <td className='p-3'>$2.60 – $3.40</td>
              <td className='p-3'>$1.18 – $1.54</td>
              <td className='p-3'>Commercial blending stock</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='text-xs text-gray-500 my-2'>
        Prices reflect 2024/2025 crop year estimates based on ECX benchmark data and exporter quotations. Actual pricing varies by contract terms, volume, certification, and relationship.
      </p>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='italic text-gray-700'>
          For importers building cost-sensitive espresso blend programs, Nekemte Natural Grade 4 at $3.20 to $4.20 per kilogram FOB offers Ethiopian origin character at a price point that commercial Brazils and Colombians cannot match on flavor complexity. This value equation is the primary driver of Lekempti&apos;s strong demand among European and Middle Eastern roasters.
        </p>
      </div>

      <p className='my-4'>
        To estimate your full <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline font-bold'>landed cost</Link> including freight, insurance, duties, and port handling, see our dedicated cost calculator guide. For Nekemte shipments, the primary export route runs from dry mills in the Nekemte area overland to Djibouti port (approximately 850 km), with transit times of 3 to 5 days by truck.
      </p>

      {/* ================================================================ */}
      {/* Section 7: Sourcing */}
      {/* ================================================================ */}
      <h3 id='sourcing' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTruck className='w-8 h-8 text-amber-600' />
        7. How to Source Nekemte Coffee
      </h3>
      <p className='my-4'>
        Sourcing Nekemte/Lekempti coffee follows the same fundamental path as other Ethiopian origins, with a few region-specific considerations. The process below outlines a practical workflow for importers and roasters placing their first Nekemte orders.
      </p>

      <div className='space-y-6 my-6'>
        <div className='flex gap-4'>
          <div className='flex-shrink-0 w-10 h-10 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center font-bold text-lg'>1</div>
          <div>
            <h4 className='font-bold text-gray-800 mb-1'>Define Your Requirements</h4>
            <p className='text-sm text-gray-700'>
              Specify grade, processing method, volume (minimum order quantity typically starts at 1 container/18–19 tonnes), target price range, and any certification requirements (organic, Fair Trade). Indicate whether you need a specific Wollega sub-zone or will accept general Lekempti-designated lots.
            </p>
          </div>
        </div>
        <div className='flex gap-4'>
          <div className='flex-shrink-0 w-10 h-10 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center font-bold text-lg'>2</div>
          <div>
            <h4 className='font-bold text-gray-800 mb-1'>Request Pre-Shipment Samples</h4>
            <p className='text-sm text-gray-700'>
              Contact Ethiopian exporters with western Ethiopian sourcing networks and <Link href='/contact-us' className='text-amber-700 hover:underline font-bold'>request 200g to 500g green samples</Link> from current crop-year lots. Specify that you want type samples (representative of the lot) rather than offer samples (hand-selected to show best potential). Cup and evaluate against your quality standards.
            </p>
          </div>
        </div>
        <div className='flex gap-4'>
          <div className='flex-shrink-0 w-10 h-10 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center font-bold text-lg'>3</div>
          <div>
            <h4 className='font-bold text-gray-800 mb-1'>Negotiate Terms and Confirm Purchase</h4>
            <p className='text-sm text-gray-700'>
              Once you approve a sample, negotiate FOB price, payment terms (typically letter of credit or CAD), and <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline font-bold'>export documentation</Link> requirements. Confirm the sale contract with the exporter, who will coordinate with the ECX (for exchange-traded lots) or directly with cooperatives for direct-trade arrangements.
            </p>
          </div>
        </div>
        <div className='flex gap-4'>
          <div className='flex-shrink-0 w-10 h-10 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center font-bold text-lg'>4</div>
          <div>
            <h4 className='font-bold text-gray-800 mb-1'>Processing, Milling, and Quality Verification</h4>
            <p className='text-sm text-gray-700'>
              The exporter oversees final dry milling, sorting (density, color, and hand-pick), and moisture verification at the export warehouse in Addis Ababa or Nekemte. Pre-shipment samples (PSS) are sent to the buyer for final approval before container loading. Ensure <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline font-bold'>moisture content is verified</Link> at 10–12% before shipment.
            </p>
          </div>
        </div>
        <div className='flex gap-4'>
          <div className='flex-shrink-0 w-10 h-10 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center font-bold text-lg'>5</div>
          <div>
            <h4 className='font-bold text-gray-800 mb-1'>Shipment and Documentation</h4>
            <p className='text-sm text-gray-700'>
              Standard export documentation includes Certificate of Origin, Phytosanitary Certificate, ICO Certificate of Origin, Commercial Invoice, Bill of Lading, and Weight Certificate. Coffee ships in 60 kg GrainPro-lined jute bags loaded into 20-foot containers via Djibouti port. Transit time from Djibouti to major European ports is approximately 14 to 21 days; to East Asian ports, 21 to 35 days.
            </p>
          </div>
        </div>
      </div>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-gray-800 mb-2'>Harvest Calendar: When to Order</h4>
        <p className='text-sm text-gray-700'>
          The main harvest season in Wollega runs from October through January, with peak cherry collection in November and December. Fresh crop availability for export begins around March and extends through August. For the best lot selection and competitive pricing, first-time buyers should initiate sample requests by February and confirm contracts by April. Late-season buying (July onward) may be limited to residual stock from the current crop year.
        </p>
      </div>

      {/* ================================================================ */}
      {/* FAQ */}
      {/* ================================================================ */}
      <section id='faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200 mt-12'>
        <h3 className='text-2xl font-bold mb-6'>Frequently Asked Questions</h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the difference between Nekemte and Lekempti coffee?</h4>
            <p className='text-sm text-gray-600'>
              They refer to the same coffee. Nekemte is the city in western Ethiopia that serves as the trade hub, while Lekempti (also Lekempte) is the commercial trade name used on the Ethiopia Commodity Exchange and in international contracts. Any coffee from the four Wollega zones that passes through the Nekemte trade channel is classified as Lekempti on export documentation.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How does Nekemte coffee taste compared to Yirgacheffe or Guji?</h4>
            <p className='text-sm text-gray-600'>
              Nekemte coffees are generally less floral and less acidic than Yirgacheffe, and less fruit-forward than Guji. The profile leans toward chocolate, nuts, and honey with a medium body and balanced acidity. Natural-processed lots introduce tropical fruit and jasmine notes. Think of Nekemte as the &quot;smooth, sweet, and balanced&quot; counterpart to the &quot;bright and floral&quot; character of eastern Ethiopian origins. See our <Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline font-bold'>Guji sourcing guide</Link> and <Link href='/insights/yirgacheffe-coffee-sourcing-guide' className='text-amber-700 hover:underline font-bold'>Yirgacheffe sourcing guide</Link> for detailed comparisons.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the minimum order quantity for Nekemte coffee?</h4>
            <p className='text-sm text-gray-600'>
              Standard minimum order for export is one full 20-foot container, approximately 250 to 320 bags of 60 kg (15 to 19.2 tonnes). Some exporters offer half-container or LCL (less-than-container-load) shipments at a premium per-kilogram cost. For sample orders, most exporters can ship 1 to 5 bags via air freight for evaluation purposes. <Link href='/contact-us' className='text-amber-700 hover:underline font-bold'>Contact us</Link> for flexible ordering options.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Is Nekemte coffee available with organic certification?</h4>
            <p className='text-sm text-gray-600'>
              Yes. A significant portion of Wollega coffee qualifies for organic certification due to the prevalence of semi-forest and garden production systems that use minimal or no synthetic inputs. USDA Organic, EU Organic, and JAS Organic certified lots are available from exporters with <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline font-bold'>active certification programs</Link>. Fair Trade and Rainforest Alliance certifications are also available from cooperatives in the region.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>When is the best time to buy Nekemte coffee?</h4>
            <p className='text-sm text-gray-600'>
              The Wollega harvest runs from October through January, with fresh crop available for export from approximately March through August. The best selection and most competitive pricing are available from March to May. By July, remaining stock from the current crop year may be limited. Initiate sample requests by February and confirm contracts by April for optimal lot access.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Can I get single-origin Kellem Wollega or specific sub-zone lots?</h4>
            <p className='text-sm text-gray-600'>
              Increasingly, yes. Progressive exporters are beginning to offer sub-zone-specific and single-washing-station lots from Kellem Wollega and East Wollega. These lots command a premium over standard Lekempti-graded coffee but offer greater traceability and, in many cases, higher cupping scores. Communicate your sub-zone preference clearly when requesting samples.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Nekemte Coffee Direct from Western Ethiopia</h4>
        <p className='text-sm text-gray-700 mb-4'>
          Ethio Coffee connects importers and specialty roasters with premium Nekemte/Lekempti coffee from across the Wollega region. Request pre-shipment samples, current crop-year offer sheets, and FOB pricing for washed and natural lots in Grades 3 through 5.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded-md font-bold hover:bg-gray-800 transition-colors text-sm'>
            View Current Offerings
          </Link>
          <Link href='/contact-us' className='border-2 border-dark text-dark px-6 py-3 rounded-md font-bold hover:bg-dark hover:text-primary transition-colors text-sm'>
            Request Samples
          </Link>
          <Link href='/ordering-info' className='border-2 border-dark text-dark px-6 py-3 rounded-md font-bold hover:bg-dark hover:text-primary transition-colors text-sm'>
            How to Order
          </Link>
        </div>
      </div>

      {/* Related Articles */}
      <div className='bg-gray-50 p-6 rounded-lg border border-gray-200 my-8'>
        <h3 className='font-bold text-xl mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origin Guides</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Guji Coffee Sourcing Guide</Link></li>
              <li>• <Link href='/insights/yirgacheffe-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Yirgacheffe Coffee Sourcing Guide</Link></li>
              <li>• <Link href='/insights/sidamo-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Sidamo Coffee Sourcing Guide</Link></li>
              <li>• <Link href='/insights/harar-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Harar Coffee Sourcing Guide</Link></li>
              <li>• <Link href='/insights/limu-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Limu Coffee Sourcing Guide</Link></li>
              <li>• <Link href='/insights/jimma-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Jimma Coffee Sourcing Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing & Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process Guide</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Landed Cost Calculator Guide</Link></li>
              <li>• <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline'>Moisture Content & Water Activity Guide</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Organic & Fair Trade Certifications</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-espresso-blend-sourcing-guide' className='text-amber-700 hover:underline'>Espresso Blend Sourcing Guide</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='text-amber-700 hover:underline'>Washing Stations Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee&apos;s sourcing team to help importers and roasters navigate the Nekemte/Lekempti coffee market. Data sourced from ECX trade reports, Ethiopian Coffee & Tea Authority records, exporter interviews, and internal cupping evaluations from 2024/2025 crop year lots.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='text-amber-700 hover:underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='text-amber-700 hover:underline'>Export Services</Link> · <Link href='/offerings' className='text-amber-700 hover:underline'>Current Offerings</Link> · <Link href='/contact-us' className='text-amber-700 hover:underline'>Contact Us</Link>
        </p>
      </div>
    </>
  )
}

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
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function GujiCoffeeSourcingGuide({ title, date, large_image_url }: InsightContentProps) {
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
          {/* Expected path: /images/insights/guji-coffee-sourcing-guide.webp */}
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Guji coffee cherries drying on raised beds in Hambella district Ethiopia'
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
        <span className='ml-2'>Origin Guide / Guji Coffee / Sourcing Guide / Importer Resources</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Guji is one of Ethiopia&apos;s highest-scoring coffee zones, with specialty lots regularly reaching 87 to 89+ on the SCA scale. Six distinct sub-regions (Hambella, Shakiso, Uraga, Kercha, Bule Hora, and Adola Rede) offer importers a range of flavor profiles from tropical fruit bombs to tea-like florals. FOB Djibouti pricing for washed Guji Grade 1 ranges from $5.50 to $8.50 per kilogram, while top natural Grade 1 lots command $6.00 to $10.00 per kilogram. This guide covers each sub-region, grading specifications, pricing benchmarks, and a step-by-step sourcing path for importers and roasters.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#geography' className='text-amber-700 hover:underline'>1. What Is Guji Coffee? Geography and Terroir</a></li>
          <li><a href='#sub-regions' className='text-amber-700 hover:underline'>2. Guji Sub-Regions: A Buyer&apos;s Map</a></li>
          <li><a href='#flavor' className='text-amber-700 hover:underline'>3. Flavor Profiles by Processing Method</a></li>
          <li><a href='#grading' className='text-amber-700 hover:underline'>4. Grading and Export Specifications</a></li>
          <li><a href='#pricing' className='text-amber-700 hover:underline'>5. FOB Pricing Benchmarks</a></li>
          <li><a href='#sourcing' className='text-amber-700 hover:underline'>6. How to Source Guji Coffee</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>7. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* Introduction */}
      <p className='text-lg leading-relaxed my-4'>
        Guji coffee has moved from obscurity to global recognition in just two decades. Once classified under the broader &quot;Sidamo&quot; trade name, the Guji zone earned its own designation on the Ethiopia Commodity Exchange (ECX) in 2010, reflecting cup profiles too distinct to bundle with neighboring regions. For importers and roasters building Ethiopian sourcing programs, understanding Guji&apos;s sub-regions, processing styles, and pricing dynamics is essential to securing the right lots at the right price.
      </p>
      <p className='my-4'>
        This Guji coffee sourcing guide breaks down the zone&apos;s geography, maps its six primary sub-regions by altitude and flavor, benchmarks current FOB pricing, and outlines a practical sourcing path from sample request to container loading. Whether you are sourcing your first Guji lot or expanding an existing multi-origin Ethiopian program, this guide provides the buyer-level detail that general origin pages leave out.
      </p>

      {/* Section 1: Geography and Terroir */}
      <h3 id='geography' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMapPin className='w-8 h-8 text-amber-600' />
        1. What Is Guji Coffee? Geography and Terroir
      </h3>
      <p className='my-4'>
        Guji is an administrative zone within the Oromia region of southern Ethiopia. The zone stretches across roughly 34,000 square kilometers of highland terrain, bordered by the Sidama region to the north, Borena to the south, and West Guji to the west. Coffee grows across altitudes from 1,700 to 2,350 meters above sea level, with the highest-scoring lots concentrated between 1,900 and 2,300 meters.
      </p>
      <p className='my-4'>
        Three terroir factors distinguish Guji from other Ethiopian coffee zones. First, deep volcanic Nitisol and Andosol soils deliver high mineral content and excellent drainage, supporting dense root systems and nutrient-rich cherries. Second, the zone&apos;s topography creates dozens of microclimates; valleys retain moisture while ridgelines receive maximum sunlight, producing distinct cup characteristics even within the same woreda (district). Third, most Guji coffee grows under indigenous forest canopy, a shade system that slows cherry maturation and concentrates sugars, resulting in the intense sweetness and complexity that define the region&apos;s best lots.
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
              <td className='p-3'>1,700 to 2,350 m.a.s.l.</td>
              <td className='p-3'>Slower cherry maturation, higher density, concentrated flavors</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Soil</td>
              <td className='p-3'>Volcanic Nitisol and Andosol</td>
              <td className='p-3'>High mineral content, excellent drainage, nutrient-rich cherries</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Shade System</td>
              <td className='p-3'>Indigenous forest canopy (Cordia, Acacia, Ficus)</td>
              <td className='p-3'>Extended maturation, higher sugar development, uniform ripening</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Rainfall</td>
              <td className='p-3'>1,200 to 1,800 mm annually</td>
              <td className='p-3'>Consistent cherry development during the main rainy season</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Varieties</td>
              <td className='p-3'>Regional heirloom landraces, JARC selections</td>
              <td className='p-3'>Genetic diversity drives complex, layered flavor profiles</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        Most Guji coffee is produced by smallholder farmers cultivating less than two hectares. These farmers deliver ripe cherry to nearby washing stations, which control processing, drying, and initial quality selection. The organic-by-default farming practice (minimal to zero synthetic inputs) makes a significant share of Guji coffee eligible for <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline font-bold'>organic certification</Link>, an increasing priority for European and North American buyers.
      </p>

      {/* Section 2: Sub-Regions */}
      <h3 id='sub-regions' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMap className='w-8 h-8 text-amber-600' />
        2. Guji Sub-Regions: A Buyer&apos;s Map
      </h3>
      <p className='my-4'>
        Guji&apos;s six primary coffee-producing sub-regions each bring a different cup character to the table. Understanding these differences lets importers target specific flavor profiles rather than buying generic &quot;Guji&quot; lots. The sub-regions listed below are ordered roughly from most established (and most expensive) to emerging.
      </p>

      {/* Sub-region cards */}
      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Hambella (Hambela)</h4>
          <p className='text-xs text-gray-500 mb-2'>1,900 to 2,300 m | Washed, Natural, Honey</p>
          <p className='text-sm text-gray-700'>
            The crown jewel of Guji. Hambella lots are known for intense tropical fruit (mango, papaya, passion fruit), jasmine florals, and a syrupy body. Natural Grade 1 lots regularly score 87 to 89+ on the SCA scale. Competition-winning micro-lots from specific washing stations in this district have pushed Guji into the same conversation as top Yirgacheffe and Gesha lots. Through our trusted sourcing network we collect and process cherry from smallholder communities in this area.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Shakiso</h4>
          <p className='text-xs text-gray-500 mb-2'>1,800 to 2,200 m | Washed, Natural</p>
          <p className='text-sm text-gray-700'>
            Complex, balanced cups with stone fruit (peach, apricot) and bright citrus acidity. Shakiso washing stations produce consistent Grade 1 and Grade 2 lots that work well for specialty roasters looking for a versatile single origin. The district also supplies some of Guji&apos;s most reliable commercial-specialty volumes.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Uraga</h4>
          <p className='text-xs text-gray-500 mb-2'>1,900 to 2,200 m | Washed, Natural</p>
          <p className='text-sm text-gray-700'>
            Floral-forward coffees with tea-like delicacy, lemon acidity, and honey sweetness. Top washed Uraga lots rival the best Yirgacheffe for clarity and elegance. This sub-region is growing in reputation among Nordic and Japanese specialty roasters seeking clean, expressive filter coffees.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Kercha</h4>
          <p className='text-xs text-gray-500 mb-2'>1,800 to 2,100 m | Natural, Washed</p>
          <p className='text-sm text-gray-700'>
            Rich, full-bodied coffees with dark fruit, dark chocolate, and wine-like fermentation character. Kercha has a strong natural processing tradition and produces naturals with depth and intensity that perform well in espresso blends and darker roast profiles.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Bule Hora</h4>
          <p className='text-xs text-gray-500 mb-2'>1,700 to 2,000 m | Washed, Natural</p>
          <p className='text-sm text-gray-700'>
            Balanced, smooth coffees with stone fruit sweetness and a clean finish. Lower in altitude than Hambella or Uraga, Bule Hora lots tend toward mid-specialty scoring (84 to 86) and provide good value for importers building a broader Ethiopian program.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Adola Rede</h4>
          <p className='text-xs text-gray-500 mb-2'>1,800 to 2,100 m | Natural, Washed</p>
          <p className='text-sm text-gray-700'>
            An emerging sub-region producing complex naturals with ripe berry and wine characteristics. Fewer washing stations means smaller lot availability, but quality-to-price ratios are compelling. Buyers looking for undiscovered Guji micro-lots should watch this district closely.
          </p>
        </div>
      </div>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Buyer&apos;s Tip: Sub-Region Selection</h4>
        <p className='text-sm text-gray-700'>
          When requesting offer sheets, specify the sub-region (woreda) rather than just &quot;Guji.&quot; This narrows down the flavor profile and helps your exporter match lots to your roast style. For filter-focused roasters, Hambella washed and Uraga washed deliver the highest clarity. For espresso blends, Kercha naturals and Shakiso naturals add body and fruit sweetness.
        </p>
      </div>

      {/* Section 3: Flavor Profiles */}
      <h3 id='flavor' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        3. Flavor Profiles by Processing Method
      </h3>
      <p className='my-4'>
        Processing method is the single largest variable in Guji cup character after sub-region. The same cherry from the same washing station can produce dramatically different cups depending on whether it is fully washed, dried as a natural, or processed as honey. For a deeper comparison of Ethiopian processing methods, see our <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline font-bold'>washed vs natural Ethiopian coffee guide</Link>.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Attribute</th>
              <th className='p-3 text-left font-bold'>Washed Guji</th>
              <th className='p-3 text-left font-bold'>Natural Guji</th>
              <th className='p-3 text-left font-bold'>Honey Guji</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Aroma</td>
              <td className='p-3'>Peach blossom, jasmine, bergamot</td>
              <td className='p-3'>Mango, papaya, strawberry wine</td>
              <td className='p-3'>Stone fruit, brown sugar, floral</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Flavor</td>
              <td className='p-3'>Peach, apricot, lemon, honey</td>
              <td className='p-3'>Tropical fruit, blueberry, watermelon candy</td>
              <td className='p-3'>Peach, plum, caramel, chocolate</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Acidity</td>
              <td className='p-3'>Bright, sparkling, citric</td>
              <td className='p-3'>Moderate, wine-like, juicy</td>
              <td className='p-3'>Balanced, malic, round</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Body</td>
              <td className='p-3'>Medium, silky, juicy</td>
              <td className='p-3'>Full, creamy, syrupy</td>
              <td className='p-3'>Medium-full, velvety</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Best Use</td>
              <td className='p-3'>Filter, pour-over single origin</td>
              <td className='p-3'>Espresso single origin, cold brew</td>
              <td className='p-3'>Espresso blends, balanced filter</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Typical SCA Score</td>
              <td className='p-3'>85 to 88</td>
              <td className='p-3'>85 to 89+</td>
              <td className='p-3'>84 to 87</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Natural Guji lots command the highest premiums because their tropical fruit intensity and syrupy body create an immediate sensory impact. Washed Guji, though less headline-grabbing, often delivers better consistency across bags and seasons, making it a more predictable choice for roasters building a year-round single origin offering. Honey processing remains a smaller segment but is expanding; several Hambella and Shakiso washing stations began honey production in the 2024/25 season.
      </p>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700 italic'>
          &quot;The default here is organic.&quot; Guji smallholder farms typically use zero synthetic inputs. Shade-grown under indigenous forest canopy, the coffee benefits from natural pest deterrence and nutrient cycling, producing clean, vibrant cups without the cost overhead of conventional chemical programs.
        </p>
      </div>

      {/* Section 4: Grading */}
      <h3 id='grading' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        4. Guji Coffee Grading and Export Specifications
      </h3>
      <p className='my-4'>
        Guji coffee is graded through the Ethiopian Coffee and Tea Authority (ECTA) system, which assigns grades based on 40% physical evaluation (defect count, screen size, moisture) and 60% cup quality (aroma, flavor, acidity, body, overall). Grades range from Grade 1 (highest) through Grade 5. For importers, the grades most relevant to specialty sourcing are Grade 1 and Grade 2. For the full grading methodology, see our <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline font-bold'>ECX and Ethiopian coffee export guide</Link>.
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
              <td className='p-3 font-semibold'>Guji Washed G1</td>
              <td className='p-3'>0 to 3 primary defects</td>
              <td className='p-3'>85+</td>
              <td className='p-3'>Premium single origin, competition lots</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Guji Washed G2</td>
              <td className='p-3'>4 to 12 primary defects</td>
              <td className='p-3'>80 to 84</td>
              <td className='p-3'>Specialty blends, reliable single origin</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Guji Natural G1</td>
              <td className='p-3'>0 to 9 primary defects</td>
              <td className='p-3'>85+</td>
              <td className='p-3'>High-end single origin, micro-lot programs</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Guji Natural G2</td>
              <td className='p-3'>10 to 25 primary defects</td>
              <td className='p-3'>80 to 84</td>
              <td className='p-3'>Espresso blends, fruit-forward blends</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Guji Natural G3</td>
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
          <li><strong>Moisture content:</strong> 10.0% to 12.0% at export (ICO standard). Most Guji lots ship at 10.5% to 11.5%.</li>
          <li><strong>Water activity:</strong> Below 0.60 aw for optimal shelf life during sea freight.</li>
          <li><strong>Screen size:</strong> Primarily 15 to 17 for most washed lots; naturals show more variation (14 to 18).</li>
          <li><strong>Packaging:</strong> 60 kg jute bags lined with GrainPro inner bags. Vacuum-sealed 30 kg bags available for micro-lots.</li>
          <li><strong>Container load:</strong> Standard FCL holds 300 to 320 bags (60 kg each) in a 20-foot container.</li>
        </ul>
      </div>

      {/* Section 5: Pricing */}
      <h3 id='pricing' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='w-8 h-8 text-amber-600' />
        5. FOB Pricing Benchmarks
      </h3>
      <p className='my-4'>
        Guji pricing reflects the zone&apos;s specialty reputation. Prices are expressed as FOB Djibouti (the primary Ethiopian coffee export port) and fluctuate based on global C-market movements, cherry price inflation at origin, and seasonal supply-demand dynamics. The following ranges represent indicative 2025/26 season pricing. For detailed pricing methodology, see our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee FOB pricing guide</Link>.
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
              <td className='p-3'>$5.50 to $8.50</td>
              <td className='p-3'>$2.49 to $3.86</td>
              <td className='p-3'>Premium end for Hambella, Uraga lots</td>
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
              <td className='p-3'>Top end for competition-grade Hambella naturals</td>
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
          Several factors have pushed Guji prices higher in recent seasons. Cherry prices at washing stations surged above 200 ETB per kilogram in the 2024/25 season, driven by competition among buyers and inflationary pressure from the Ethiopian birr devaluation. Washed Grade 1 availability has tightened as demand for top-scoring lots outpaces the volume that washing stations can produce at the required quality threshold. For importers calculating <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline font-bold'>total landed cost</Link>, add freight ($0.08 to $0.12/kg for FCL), insurance, and destination customs to the FOB figures above.
        </p>
      </div>

      {/* Section 6: How to Source */}
      <h3 id='sourcing' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTruck className='w-8 h-8 text-amber-600' />
        6. How to Source Guji Coffee
      </h3>
      <p className='my-4'>
        Sourcing Guji coffee follows the same general export pathway as other Ethiopian specialty coffees, but several Guji-specific considerations apply. Here is the step-by-step process from inquiry to delivery. For the complete Ethiopian export workflow, see our <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee export process guide</Link>.
      </p>

      <div className='space-y-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Step 1: Define Your Specification</h4>
          <p className='text-sm text-gray-700'>
            Specify the sub-region (Hambella, Shakiso, Uraga, etc.), processing method, target grade, volume, and your cupping score threshold. The more precise your spec, the faster your exporter can match available lots.
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
            Once you confirm interest, your exporter issues a formal offer sheet with FOB pricing, Incoterms, payment terms, and delivery timeline. Most Guji exports ship FOB Djibouti. Common payment terms include irrevocable letter of credit (LC) or cash against documents (CAD). Refer to our <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline font-bold'>contracts and payment terms guide</Link> for details.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Step 4: Contract and Pre-Shipment Approval</h4>
          <p className='text-sm text-gray-700'>
            After contract signing, the exporter prepares the lot for export: dry milling, final grading, CLU (Coffee Liquoring Unit) inspection, and packaging. A final pre-shipment sample is sent for your approval before the lot loads into the container.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Step 5: Shipping and Documentation</h4>
          <p className='text-sm text-gray-700'>
            Guji coffee ships from <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline font-bold'>Djibouti port</Link>. Transit times range from 14 to 22 days to major European ports and 30 to 45 days to North America. Complete export documentation (phytosanitary certificate, certificate of origin, ICO certificate, CLU grade certificate, bill of lading) accompanies every shipment.
          </p>
        </div>
      </div>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Seasonal Sourcing Window</h4>
        <p className='text-sm text-gray-700'>
          Guji cherry harvest runs from October through January, with washed lots ready for export by February and naturals by March. The prime sourcing window for new-crop Guji is January through April, when fresh lots are available for cupping and immediate booking. For year-round planning, see our <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee harvest calendar</Link>.
        </p>
      </div>

      {/* CTA Block */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Premium Guji Coffee Direct from Origin</h4>
        <p className='my-2'>
          Ethio Coffee Import and Export PLC sources Guji coffee from trusted washing stations across Hambella, Shakiso, Uraga, and Kercha. Request samples, review our current offer sheet, or start your order today.
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
            <h4 className='font-bold text-gray-800 mb-2'>What makes Guji coffee different from Yirgacheffe?</h4>
            <p className='text-sm text-gray-600'>
              Both are prized Ethiopian specialty origins, but they deliver different cup profiles. Guji tends toward tropical fruit (mango, papaya) and stone fruit with more body and intensity, while <Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline'>Yirgacheffe</Link> is lighter, more floral, and citrus-driven with a tea-like body. Guji naturals are especially prized for their exotic, fruit-forward character. See our <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>full regional comparison</Link> or our <Link href='/insights/yirgacheffe-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Yirgacheffe sourcing guide</Link>.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How much does Guji coffee cost FOB Djibouti?</h4>
            <p className='text-sm text-gray-600'>
              In the 2025/26 season, Guji Washed Grade 1 ranges from $5.50 to $8.50 per kilogram FOB Djibouti. Natural Grade 1 lots trade between $6.00 and $10.00 per kilogram, with competition-grade Hambella lots at the top end. Pricing depends on sub-region, grade, lot size, and seasonal supply dynamics.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the minimum order quantity for Guji coffee?</h4>
            <p className='text-sm text-gray-600'>
              Most exporters require a <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>minimum order</Link> starting from 1 pallet (roughly 10 to 20 bags of 60 kg each) for LCL shipments. A full container load (FCL) holds approximately 300 to 320 bags. Micro-lot orders of 5 to 10 bags are possible for select washing station lots.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>When is Guji coffee available for purchase?</h4>
            <p className='text-sm text-gray-600'>
              Guji cherry harvest runs October through January. Washed lots become export-ready by February; naturals by March. The prime buying window for fresh-crop Guji is January through April. Spot lots remain available through mid-year from exporter warehouses in Addis Ababa.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Is Guji coffee available with organic or Fairtrade certification?</h4>
            <p className='text-sm text-gray-600'>
              Many Guji washing stations source from smallholder farmers using zero synthetic inputs, making the coffee organically grown by default. Certified organic (USDA, EU, JAS) and Fairtrade Guji lots are available through licensed cooperatives and select private exporters. See our <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>certifications guide</Link> for details.
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
              <li>&bull; <Link href='/insights/sidamo-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Sidamo Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/yirgacheffe-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Yirgacheffe Coffee: Buyer&apos;s Sourcing Guide</Link></li>
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
              <li>&bull; <Link href='/insights/anaerobic-ethiopian-coffee-processing-buyers-guide' className='text-amber-700 hover:underline'>Anaerobic Processing: Buyer&apos;s Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Washing Stations Guide</Link></li>
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

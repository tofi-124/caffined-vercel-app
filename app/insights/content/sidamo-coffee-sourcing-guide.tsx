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

export default function SidamoCoffeeSourcingGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      {/* H1 + H2 */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Your Sidamo Coffee Sourcing Guide: Sub-Regions, Grades, Pricing, and Direct Export
      </h2>

      {/* HERO IMAGE */}
      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md bg-gray-200 flex items-center justify-center'>
          {/* TODO: Replace placeholder with actual hero image */}
          {/* Expected path: /images/insights/sidamo-coffee-sourcing-guide.webp */}
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Sidamo coffee cherries drying on raised beds in Bensa district Ethiopia'
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
        <span className='ml-2'>Origin Guide / Sidamo Coffee / Sourcing Guide / Importer Resources</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Sidamo (Sidama) is Ethiopia&apos;s largest and most diverse coffee zone, producing berry-forward naturals and floral washed lots across six key sub-regions. SCA cup scores for specialty Sidamo range from 84 to 88+, with Bensa and Arbegona lots increasingly rivaling Yirgacheffe and Guji. FOB Djibouti pricing for Washed Grade 1 runs $4.80 to $7.50 per kilogram, while top Natural Grade 1 lots command $5.50 to $9.00 per kilogram. This guide covers each sub-region, grading specifications, pricing benchmarks, and a step-by-step sourcing path for importers and roasters.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#geography' className='text-amber-700 hover:underline'>1. What Is Sidamo Coffee? Geography and Terroir</a></li>
          <li><a href='#sub-regions' className='text-amber-700 hover:underline'>2. Sidamo Sub-Regions: A Buyer&apos;s Map</a></li>
          <li><a href='#flavor' className='text-amber-700 hover:underline'>3. Flavor Profiles by Processing Method</a></li>
          <li><a href='#grading' className='text-amber-700 hover:underline'>4. Grading and Export Specifications</a></li>
          <li><a href='#pricing' className='text-amber-700 hover:underline'>5. FOB Pricing Benchmarks</a></li>
          <li><a href='#sourcing' className='text-amber-700 hover:underline'>6. How to Source Sidamo Coffee</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>7. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* Introduction */}
      <p className='text-lg leading-relaxed my-4'>
        Sidamo coffee sourcing guide: Sidamo (officially Sidama since 2020, when the zone became its own regional state) is one of the most established names in Ethiopian specialty coffee. The Ethiopia Commodity Exchange (ECX) defines &quot;Sidamo&quot; broadly, stretching beyond the political Sidama border to encompass coffee from Nensebo woreda in the west to Konta in the east. That breadth gives importers and roasters an unusually wide spectrum of flavor profiles, altitudes, and lot sizes under one trade classification.
      </p>
      <p className='my-4'>
        For buyers, this range is both an advantage and a challenge. A generic &quot;Sidamo Grade 2&quot; purchase could arrive as a clean, citrus-bright washed lot from Dale or a heavy, blueberry-saturated natural from Bensa. This Sidamo coffee sourcing guide maps the zone&apos;s six primary sub-regions by altitude and cup character, benchmarks current FOB pricing, and outlines the practical sourcing steps from sample evaluation to container loading. Whether you are adding Sidamo to an Ethiopian multi-origin program or seeking competition-grade micro-lots, the detail matters.
      </p>

      {/* Section 1: Geography and Terroir */}
      <h3 id='geography' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMapPin className='w-8 h-8 text-amber-600' />
        1. What Is Sidamo Coffee? Geography and Terroir
      </h3>
      <p className='my-4'>
        Sidama (the political region) sits in southern Ethiopia, bordered by the Rift Valley lakes to the west, Guji to the east and south, and Gedeo (Yirgacheffe) to the southeast. Coffee grows across roughly 150,000 hectares, making Sidama one of the largest Arabica-producing zones in the country. According to the <a href='https://www.ico.org/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>International Coffee Organization (ICO)</a>, Ethiopia remains Africa&apos;s largest Arabica producer and a top-five global exporter, and Sidama contributes a significant share of that output. Altitude ranges from 1,500 to 2,300 meters above sea level, with the most sought-after specialty lots grown between 1,850 and 2,200 meters.
      </p>
      <p className='my-4'>
        Three terroir factors shape Sidamo&apos;s distinct cup character. First, deep red volcanic Nitisol soils provide high mineral content and strong drainage, feeding dense root systems and promoting even cherry maturation. Second, a bimodal rainfall pattern (March to May and September to November) gives the region two wet seasons that sustain consistent moisture during the growing cycle. Third, most Sidama coffee grows in garden systems or semi-forest environments, where indigenous shade trees (Cordia africana, Millettia ferruginea, Erythrina) slow cherry development and concentrate sugars.
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
              <td className='p-3'>1,500 to 2,300 m.a.s.l.</td>
              <td className='p-3'>Slower cherry maturation, higher density, concentrated flavor development</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Soil</td>
              <td className='p-3'>Volcanic red Nitisol</td>
              <td className='p-3'>High mineral content, excellent drainage, nutrient-rich cherry</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Shade System</td>
              <td className='p-3'>Garden coffee under Cordia, Millettia, Erythrina canopy</td>
              <td className='p-3'>Extended maturation, higher sugar development, natural pest control</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Rainfall</td>
              <td className='p-3'>1,400 to 1,800 mm annually (bimodal pattern)</td>
              <td className='p-3'>Consistent moisture during growing cycle, healthy cherry fill</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Varieties</td>
              <td className='p-3'>Regional heirloom landraces, JARC-released selections (74110, 74112)</td>
              <td className='p-3'>Genetic diversity creates layered, complex cup profiles</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Smallholder farmers produce the vast majority of Sidama coffee. Average farm size is under one hectare and most operate as &quot;garden coffee&quot; systems, intercropping coffee with enset (false banana), maize, and other food crops. This low-input farming style means much of Sidama&apos;s output is organically grown by default, an advantage for buyers targeting <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline font-bold'>certified organic</Link> supply chains.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>ECX Classification: Sidamo A through E</h4>
        <p className='text-sm text-gray-700'>
          The ECX divides the broader Sidamo trade zone into five geographic sub-classifications: Sidamo A through Sidamo E. These letters do not indicate quality grades; they map to geographic clusters of woredas (districts). Sidamo A covers Bensa, Dale, and Aleta Wendo. Sidamo B covers Arbegona and Bona Zuria. When buying on the ECX, lots are tagged with these letters, helping you narrow the geographic origin before requesting samples.
        </p>
      </div>

      {/* Section 2: Sub-Regions */}
      <h3 id='sub-regions' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMap className='w-8 h-8 text-amber-600' />
        2. Sidamo Sub-Regions: A Buyer&apos;s Map
      </h3>
      <p className='my-4'>
        Sidamo&apos;s six primary coffee-producing sub-regions deliver cup profiles that range from intense blueberry naturals to delicate, tea-like washed lots. Understanding these differences lets importers target specific flavor characteristics rather than buying generic &quot;Sidamo&quot; on the open market. For the Bombe micro-region within Bensa, see our dedicated <Link href='/insights/bombe-sidama-coffee-sourcing-guide' className='text-amber-700 hover:underline font-bold'>Bombe Sidama sourcing guide</Link>.
      </p>

      {/* Sub-region cards */}
      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Bensa</h4>
          <p className='text-xs text-gray-500 mb-2'>1,700 to 2,200 m | Natural, Washed, Honey</p>
          <p className='text-sm text-gray-700'>
            Sidamo&apos;s rising star for specialty. Bensa naturals deliver intense blueberry, strawberry jam, and tropical complexity that rivals top Guji lots. The district hosts hundreds of washing stations, with Bombe and Shantawene among the most recognized. High-scoring washed lots from Bensa show peach, lemon, and floral clarity. Through our heritage sourcing relationships we work with cooperatives and washing stations across this district.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Dale</h4>
          <p className='text-xs text-gray-500 mb-2'>1,600 to 2,000 m | Washed, Natural</p>
          <p className='text-sm text-gray-700'>
            Balanced, sweet washed coffees with citrus brightness and caramel sweetness. Dale is a major volume-producing district, making it a reliable source for larger specialty lots (Grade 1 and 2). Naturals from Dale tend toward stone fruit and brown sugar rather than the intense berry of Bensa.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Aleta Wendo</h4>
          <p className='text-xs text-gray-500 mb-2'>1,550 to 1,900 m | Washed, Natural</p>
          <p className='text-sm text-gray-700'>
            Well-rounded coffees with stone fruit, mild florals, and a smooth body. The town of Aleta Wendo is one of Sidamo&apos;s commercial hubs, and the district produces consistent Grade 2 and Grade 3 volumes suitable for specialty blends and commercial-specialty programs.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Arbegona</h4>
          <p className='text-xs text-gray-500 mb-2'>1,900 to 2,300 m | Washed, Natural</p>
          <p className='text-sm text-gray-700'>
            Sidamo&apos;s highest-altitude coffee district. Top Arbegona washed lots show pronounced acidity, jasmine florals, and a tea-like delicacy that overlaps with the finest Yirgacheffe. Limited production volumes keep Arbegona under the radar, but quality-to-price ratios are compelling for buyers seeking a premium filter coffee.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Chire</h4>
          <p className='text-xs text-gray-500 mb-2'>1,700 to 2,100 m | Washed, Natural</p>
          <p className='text-sm text-gray-700'>
            Complex, layered coffees with wine-like acidity and berry characteristics. Chire&apos;s natural lots develop a distinctive fermented fruit intensity, while washed lots offer clean red fruit and a silky mouthfeel. A growing number of washing stations in this district are investing in raised-bed drying infrastructure.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Wondo Genet</h4>
          <p className='text-xs text-gray-500 mb-2'>1,600 to 2,100 m | Washed, Natural</p>
          <p className='text-sm text-gray-700'>
            Known for lush, forested growing conditions and a hot springs micro-climate. Wondo Genet coffees tend toward floral aromatics, sweet honey notes, and a well-balanced body. The district sits adjacent to the Wondo Genet College of Forestry, where agroforestry research supports sustainable coffee production practices.
          </p>
        </div>
      </div>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Buyer&apos;s Tip: Sub-Region Selection</h4>
        <p className='text-sm text-gray-700'>
          When requesting offer sheets, specify the sub-region (woreda) rather than just &quot;Sidamo.&quot; This narrows the flavor profile and helps your exporter match lots to your roast style. For filter-focused roasters, Arbegona washed and Bensa washed deliver the highest clarity. For espresso blends, Bensa naturals and Chire naturals add body and fruit sweetness. For reliable specialty volume, Dale and Aleta Wendo provide consistent Grade 1 and Grade 2 lots at scale.
        </p>
      </div>

      {/* Section 3: Flavor Profiles */}
      <h3 id='flavor' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        3. Flavor Profiles by Processing Method
      </h3>
      <p className='my-4'>
        Processing method is the single largest variable in Sidamo cup character after sub-region. The same cherry from the same washing station can produce dramatically different cups depending on whether it is fully washed, dried as a natural, or processed as honey. For a deeper comparison, see our <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline font-bold'>washed vs natural Ethiopian coffee guide</Link>.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Attribute</th>
              <th className='p-3 text-left font-bold'>Washed Sidamo</th>
              <th className='p-3 text-left font-bold'>Natural Sidamo</th>
              <th className='p-3 text-left font-bold'>Honey Sidamo</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Aroma</td>
              <td className='p-3'>Citrus blossom, jasmine, honey</td>
              <td className='p-3'>Blueberry, strawberry, fermented fruit</td>
              <td className='p-3'>Stone fruit, brown sugar, floral</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Flavor</td>
              <td className='p-3'>Peach, lemon, green grape, caramel</td>
              <td className='p-3'>Blueberry jam, wine, dark chocolate, brown sugar</td>
              <td className='p-3'>Plum, peach, caramel, mild cocoa</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Acidity</td>
              <td className='p-3'>Bright, wine-like, malic</td>
              <td className='p-3'>Moderate, wine-like, juicy</td>
              <td className='p-3'>Balanced, round, malic</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Body</td>
              <td className='p-3'>Medium, silky, well-balanced</td>
              <td className='p-3'>Full, syrupy, heavy</td>
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
              <td className='p-3'>84 to 87</td>
              <td className='p-3'>84 to 88+</td>
              <td className='p-3'>83 to 86</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Natural Sidamo lots, particularly from Bensa, have driven the region&apos;s recent surge in specialty reputation. Intense blueberry and strawberry notes, combined with a heavy, syrupy body, make these lots highly sought after for single-origin espresso and cold brew programs. Washed Sidamo delivers more consistency across bags and seasons, making it a safer choice for roasters building a reliable year-round offering. Honey processing remains a smaller segment in Sidamo compared to regions like Guji, but several Bensa and Chire washing stations have expanded honey production since the 2024/25 season.
      </p>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700 italic'>
          &quot;Sidamo&apos;s strength is its range.&quot; From the blueberry bombs of Bensa to the floral delicacy of Arbegona, the zone offers importers more diversity under one trade name than almost any other Ethiopian origin. Specify the woreda, processing method, and grade to get exactly the cup profile you need.
        </p>
      </div>

      {/* Section 4: Grading */}
      <h3 id='grading' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        4. Sidamo Coffee Grading and Export Specifications
      </h3>
      <p className='my-4'>
        Sidamo coffee is graded through the Ethiopian Coffee and Tea Authority (ECTA) system, with all export-grade lots trading through the <a href='https://www.ecx.com.et' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>Ethiopia Commodity Exchange (ECX)</a>. The grading system assigns scores based on 40% physical evaluation (defect count, screen size, moisture) and 60% cup quality (aroma, flavor, acidity, body, overall) aligned with <a href='https://sca.coffee/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>Specialty Coffee Association (SCA)</a> cupping protocols. Grades range from Grade 1 (highest) through Grade 5. For importers, the grades most relevant to specialty sourcing are Grade 1 and Grade 2. For the full grading methodology, see our <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline font-bold'>ECX and Ethiopian coffee export guide</Link>.
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
              <td className='p-3 font-semibold'>Sidamo Washed G1</td>
              <td className='p-3'>0 to 3 primary defects</td>
              <td className='p-3'>85+</td>
              <td className='p-3'>Premium single origin, competition lots, top-tier filter programs</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Sidamo Washed G2</td>
              <td className='p-3'>4 to 12 primary defects</td>
              <td className='p-3'>80 to 84</td>
              <td className='p-3'>Specialty blends, dependable single origin, subscription programs</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Sidamo Natural G1</td>
              <td className='p-3'>0 to 9 primary defects</td>
              <td className='p-3'>85+</td>
              <td className='p-3'>High-end single origin espresso, micro-lot programs</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Sidamo Natural G2</td>
              <td className='p-3'>10 to 25 primary defects</td>
              <td className='p-3'>80 to 84</td>
              <td className='p-3'>Espresso blends, fruit-forward blends</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Sidamo Natural G3/G4</td>
              <td className='p-3'>26 to 86 primary defects</td>
              <td className='p-3'>70 to 79</td>
              <td className='p-3'>Commercial blends, high-volume buying</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Export Specification Checklist</h4>
        <ul className='text-sm text-gray-700 space-y-2'>
          <li><strong>Moisture content:</strong> 10.0% to 12.0% at export (ICO standard). Most Sidamo lots ship at 10.5% to 11.5%.</li>
          <li><strong>Water activity:</strong> Below 0.60 aw for optimal shelf life during sea freight.</li>
          <li><strong>Screen size:</strong> Primarily 15 to 17 for washed lots; naturals show more variation (14 to 18).</li>
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
        Sidamo pricing spans a wider range than most Ethiopian origins because the zone covers such varied terroir and quality levels. Prices are expressed as FOB Djibouti and fluctuate based on global C-market movements, cherry price trends at origin, and seasonal supply-demand dynamics. The following ranges represent indicative 2025/26 season pricing. For detailed pricing methodology, see our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee FOB pricing guide</Link>.
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
              <td className='p-3'>$4.80 to $7.50</td>
              <td className='p-3'>$2.18 to $3.40</td>
              <td className='p-3'>Premium end for Arbegona and Bensa lots</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Washed G2</td>
              <td className='p-3'>$4.00 to $5.50</td>
              <td className='p-3'>$1.81 to $2.49</td>
              <td className='p-3'>Reliable specialty volume, Dale and Aleta Wendo</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Natural G1</td>
              <td className='p-3'>$5.50 to $9.00</td>
              <td className='p-3'>$2.49 to $4.08</td>
              <td className='p-3'>Top end for high-scoring Bensa naturals</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Natural G2</td>
              <td className='p-3'>$4.00 to $6.00</td>
              <td className='p-3'>$1.81 to $2.72</td>
              <td className='p-3'>Strong value for fruit-forward blends</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Natural G3/G4</td>
              <td className='p-3'>$3.00 to $4.00</td>
              <td className='p-3'>$1.36 to $1.81</td>
              <td className='p-3'>Commercial grade, volume discounts available</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-3'>Pricing Context</h4>
        <p className='text-sm text-gray-700'>
          Sidamo has historically offered better value than neighboring Yirgacheffe and Guji at comparable quality levels, partly because the broader trade classification dilutes the name&apos;s specialty premium. However, Bensa and Arbegona lots are rapidly closing that gap. Cherry prices at Sidamo washing stations reached 180 to 220 ETB per kilogram during the 2024/25 peak, driven by competition for high-altitude cherry. For importers calculating <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline font-bold'>total landed cost</Link>, add freight ($0.08 to $0.12/kg for FCL), insurance, and destination customs to the FOB figures above.
        </p>
      </div>

      {/* Section 6: How to Source */}
      <h3 id='sourcing' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTruck className='w-8 h-8 text-amber-600' />
        6. How to Source Sidamo Coffee
      </h3>
      <p className='my-4'>
        Sourcing Sidamo coffee follows the same general export pathway as other Ethiopian specialty coffees, with several Sidamo-specific considerations. Here is the step-by-step process from inquiry to delivery. For the complete Ethiopian export workflow, see our <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee export process guide</Link>.
      </p>

      <div className='space-y-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Step 1: Define Your Specification</h4>
          <p className='text-sm text-gray-700'>
            Specify the sub-region (Bensa, Dale, Arbegona, etc.), processing method, target grade, volume, and your cupping score threshold. Because &quot;Sidamo&quot; covers a wide geographic area on the ECX, the more precise your spec, the faster your exporter can match available lots to your requirements.
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
            Your exporter issues a formal offer sheet with FOB pricing, Incoterms, payment terms, and delivery timeline. Most Sidamo exports ship FOB Djibouti. Common payment terms include irrevocable letter of credit (LC) or cash against documents (CAD). See our <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline font-bold'>contracts and payment terms guide</Link> for details.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Step 4: Contract and Pre-Shipment Approval</h4>
          <p className='text-sm text-gray-700'>
            After contract signing, the exporter prepares the lot for export: <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='text-amber-700 hover:underline font-bold'>dry milling</Link>, final grading, CLU (Coffee Liquoring Unit) inspection, and packaging. A final pre-shipment sample is sent for your approval before the lot loads into the container.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Step 5: Shipping and Documentation</h4>
          <p className='text-sm text-gray-700'>
            Sidamo coffee ships from <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline font-bold'>Djibouti port</Link>. Transit times range from 14 to 22 days to major European ports and 30 to 45 days to North America. Complete export documentation (phytosanitary certificate, certificate of origin, ICO certificate, CLU grade certificate, bill of lading) accompanies every shipment.
          </p>
        </div>
      </div>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Seasonal Sourcing Window</h4>
        <p className='text-sm text-gray-700'>
          Sidamo cherry harvest runs from October through January, with the peak picking period in November and December. Washed lots become export-ready by February; naturals by March. The prime sourcing window for new-crop Sidamo is January through April. For year-round planning, see our <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee harvest calendar</Link>.
        </p>
      </div>

      {/* Conclusion */}
      <p className='text-lg leading-relaxed my-6'>
        This Sidamo coffee sourcing guide covers the market intelligence importers need to target the right sub-region, grade, and processing method within Ethiopia&apos;s largest specialty zone. Whether you source a single pallet of Bensa natural or a full container of Dale washed, working with an origin-connected exporter gives you first access to new-crop availability and the traceability documentation that specialty procurement demands.
      </p>

      {/* CTA Block */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Premium Sidamo Coffee Direct from Origin</h4>
        <p className='my-2'>
          Ethio Coffee Import and Export PLC sources Sidamo coffee from trusted washing stations across Bensa, Dale, Arbegona, and Chire. Request samples, review our current offer sheet, or start your order today.
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
            <h4 className='font-bold text-gray-800 mb-2'>What does Sidamo coffee taste like?</h4>
            <p className='text-sm text-gray-600'>
              Sidamo coffee is known for complex berry and stone fruit notes, floral aromatics, wine-like acidity, and a rich mouthfeel. Washed lots lean toward citrus, peach, and floral brightness. Naturals deliver intense blueberry, strawberry jam, and dark chocolate sweetness, particularly from the Bensa sub-region.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the difference between Sidamo and Yirgacheffe coffee?</h4>
            <p className='text-sm text-gray-600'>
              Yirgacheffe (Gedeo zone) was historically classified under the broader Sidamo trade name before earning its own ECX category. <Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline'>Yirgacheffe</Link> tends toward lighter, more delicate jasmine and bergamot florals with a tea-like body. Sidamo coffees are generally heavier-bodied, more fruit-forward, and offer greater diversity across sub-regions. See our <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>full regional comparison</Link>.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How much does Sidamo coffee cost FOB Djibouti?</h4>
            <p className='text-sm text-gray-600'>
              In the 2025/26 season, Sidamo Washed Grade 1 ranges from $4.80 to $7.50 per kilogram FOB Djibouti. Natural Grade 1 lots trade between $5.50 and $9.00 per kilogram, with top-scoring Bensa naturals at the premium end. Pricing varies by sub-region, grade, lot size, and seasonal supply dynamics.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the minimum order quantity for Sidamo coffee?</h4>
            <p className='text-sm text-gray-600'>
              Most exporters require a <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>minimum order</Link> starting from 1 pallet (roughly 10 to 20 bags of 60 kg each) for LCL shipments. A full container load (FCL) holds approximately 300 to 320 bags. Because Sidamo is Ethiopia&apos;s largest producing zone, volume availability is strong across most grades and sub-regions.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Is Sidamo coffee available with organic or Fairtrade certification?</h4>
            <p className='text-sm text-gray-600'>
              A significant share of Sidama&apos;s smallholder-produced coffee uses zero synthetic inputs, making it organically grown by default. Certified organic (USDA, EU, JAS) and Fairtrade Sidamo lots are available through licensed cooperatives and select private exporters. The Sidama Coffee Farmers Cooperative Union (SCFCU) is one of the largest certified suppliers. See our <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>certifications guide</Link> for details.
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
              <li>&bull; <Link href='/insights/yirgacheffe-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Yirgacheffe Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/bombe-sidama-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Bombe Sidama Coffee: Buyer&apos;s Guide</Link></li>
              <li>&bull; <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji Compared</Link></li>
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

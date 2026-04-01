import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineMapPin,
  HiOutlineBeaker,
  HiOutlineScale,
  HiOutlineTruck,
  HiOutlineGlobeAlt,
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
} from 'react-icons/hi2'
import { PiPlantFill } from 'react-icons/pi'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function BombeSidamaCoffeeSourcingGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      {/* H1 + H2 */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Terroir, Processing, Grading, and Sourcing for Importers and Roasters
      </h2>

      {/* HERO IMAGE */}
      <figure>
        <figcaption className='font-inconsolata my-2'>
          Natural coffee cherries drying on raised African beds in Bombe village, Bensa district, Sidama. Photo: Ethio Coffee Import and Export PLC.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Bombe Sidama coffee cherries drying on raised African beds in Bensa district Ethiopia'
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
        <span className='ml-2'>Origin Guide / Sidama Coffee / Bombe Bensa / Sourcing Guide</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Bombe is a specialty micro-region within Bensa district, Sidama, growing coffee at 1,950 to 2,350 meters above sea level on iron-rich Nitisol soils. Natural Grade 1 Bombe lots score 87+ on the SCA scale, with flavor profiles defined by ripe berry, honey sweetness, warm spice, and lively acidity. For importers and roasters seeking traceable, high-scoring Ethiopian naturals, Bombe offers consistent lot quality with full supply chain transparency from farm to export warehouse.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#terroir' className='text-amber-700 hover:underline'>1. Where Is Bombe? Geography and Terroir</a></li>
          <li><a href='#varieties' className='text-amber-700 hover:underline'>2. Coffee Varieties Grown in Bombe</a></li>
          <li><a href='#processing' className='text-amber-700 hover:underline'>3. Processing Methods: Natural, Washed, and Anaerobic</a></li>
          <li><a href='#flavor' className='text-amber-700 hover:underline'>4. Flavor Profile and Cupping Notes</a></li>
          <li><a href='#grading' className='text-amber-700 hover:underline'>5. Grading and Export Specifications</a></li>
          <li><a href='#sourcing' className='text-amber-700 hover:underline'>6. How to Source Bombe Sidama Coffee</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>7. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* Introduction */}
      <p className='my-4'>
        Bombe Sidama coffee has become one of the most requested micro-lot origins among specialty importers and roasters sourcing from Ethiopia. Situated in the Bensa district of the <Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline font-bold'>Sidama region</Link>, the Bombe kebele produces natural and washed coffees that consistently score above 85 on the SCA cupping scale, with top lots reaching 87 and above. The combination of extreme altitude, deep volcanic soils, and generations of smallholder farming expertise gives Bombe coffees a flavor signature that is difficult to replicate elsewhere in Ethiopia.
      </p>
      <p className='my-4'>
        Yet most information available to buyers is limited to brief product descriptions on importer catalogs. This guide fills that gap. It covers the geography and terroir that shape Bombe&apos;s cup quality, the varieties planted, processing methods used at farm level, flavor benchmarks for natural and washed lots, grading and export specifications, and a clear path to sourcing Bombe coffee direct from origin.
      </p>

      {/* Section: Geography and Terroir */}
      <h2 id='terroir' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineMapPin className='text-amber-600' />1. Where Is Bombe? Geography and Terroir
      </h2>
      <p className='my-4'>
        Bombe is a kebele (the smallest administrative unit in Ethiopia) within Bensa woreda, in the southern highlands of the Sidama region. Bensa itself is one of Sidama&apos;s most productive coffee districts, alongside Dale, Aleta Wendo, Chire, and Nensebo. Within Bensa, Bombe sits at the higher end of the altitude spectrum, with farms ranging from 1,950 to 2,350 meters above sea level. The Bombe Mountain, a local geographic landmark, creates the sloped terrain and microclimates that define the area&apos;s terroir.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Terroir Factor</th>
              <th className='p-3 text-left font-bold'>Bombe Detail</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Location</td>
              <td className='p-3'>Bombe kebele, Bensa woreda, Sidama region</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Altitude</td>
              <td className='p-3'>1,950 &ndash; 2,350 masl</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Soil Type</td>
              <td className='p-3'>Nitisols (deep, well-drained, iron-rich volcanic soils)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Annual Rainfall</td>
              <td className='p-3'>1,301 &ndash; 2,100 mm</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Temperature Range</td>
              <td className='p-3'>14°C &ndash; 23°C</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Harvest Window</td>
              <td className='p-3'>November &ndash; January</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Trademark Status</td>
              <td className='p-3'>Sidama (protected origin, alongside Yirgacheffe and Harar)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        The Nitisol soils in Bombe are among the most fertile in Ethiopia&apos;s coffee belt. These deep, well-drained volcanic soils are rich in iron and trace minerals, which contribute to the complexity and sweetness that define Bombe&apos;s cup character. The high altitude slows cherry maturation, concentrating sugars and organic acids in the fruit. Combined with cool nighttime temperatures (dropping to 14°C), this extended ripening period produces the dense, complex green coffee that specialty buyers value.
      </p>
      <p className='my-4'>
        Within <Link href='/insights/sidama-coffee-production-productivity-export' className='text-amber-700 hover:underline font-bold'>Sidama&apos;s broader production system</Link>, Bombe has earned a distinct reputation. While Bensa district as a whole is known for natural processing excellence, Bombe&apos;s higher elevation and specific microclimate push cup scores above the district average. Buyers who have worked with Bensa lots often begin specifying Bombe by name once they taste the difference.
      </p>

      {/* Section: Varieties */}
      <h2 id='varieties' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <PiPlantFill className='text-amber-600' />2. Coffee Varieties Grown in Bombe
      </h2>
      <p className='my-4'>
        Bombe farmers cultivate two categories of Arabica coffee: local landrace varieties and improved JARC cultivars. Understanding the variety composition is important for buyers because it directly influences cup quality and lot consistency.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Varieties in Bombe</h4>
        <ul className='space-y-3'>
          <li className='flex items-start gap-2'>
            <span className='mt-1 flex-shrink-0 text-blue-600 font-bold'>1.</span>
            <div>
              <span className='font-bold'>Local Landrace (Heirloom)</span> &ndash; Indigenous Arabica varieties that have adapted to Bombe&apos;s specific altitude and soil over centuries. These produce the complex, layered flavor profiles (berry, floral, spice) that specialty buyers associate with Ethiopian coffee. Landrace trees typically yield less per hectare but deliver higher cupping scores.
            </div>
          </li>
          <li className='flex items-start gap-2'>
            <span className='mt-1 flex-shrink-0 text-blue-600 font-bold'>2.</span>
            <div>
              <span className='font-bold'>JARC 74158 and 74165</span> &ndash; Improved cultivars released by the Jimma Agricultural Research Center (JARC) for disease resistance, particularly against Coffee Berry Disease (CBD). These varieties maintain good cup quality while offering higher yields and better resilience. Many Bombe farmers interplant JARC cultivars with landrace trees.
            </div>
          </li>
        </ul>
      </div>

      <p className='my-4'>
        For a deeper exploration of Ethiopia&apos;s genetic diversity and how landrace varieties compare to improved cultivars, see our <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline font-bold'>guide to Ethiopian heirloom varieties and landraces</Link>.
      </p>

      {/* Section: Processing Methods */}
      <h2 id='processing' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineBeaker className='text-amber-600' />3. Processing Methods: Natural, Washed, and Anaerobic
      </h2>
      <p className='my-4'>
        Processing method is the single largest variable in Bombe Sidama coffee&apos;s final cup profile. The same farm, variety, and altitude will produce dramatically different coffees depending on whether cherries are processed as naturals, washed, or through newer anaerobic techniques.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Natural (Dry) Processing</h4>
      <p className='my-4'>
        Natural processing is the dominant method in Bombe and the one most associated with the micro-region&apos;s reputation. The process at farm level follows a precise sequence:
      </p>
      <ol className='list-decimal ml-6 my-4 space-y-2'>
        <li><span className='font-semibold'>Selective hand-picking:</span> Only fully ripe red cherries are harvested. Pickers return to the same tree multiple times because cherries do not ripen uniformly.</li>
        <li><span className='font-semibold'>Sorting:</span> Harvested cherries are sorted to remove underripe, overripe, or damaged fruit.</li>
        <li><span className='font-semibold'>Raised bed drying:</span> Sound cherries are spread in thin layers on elevated African drying beds. Raised beds allow air circulation from all sides, promoting even drying.</li>
        <li><span className='font-semibold'>Regular raking:</span> Cherries are raked 4 to 6 times per day to prevent uneven fermentation and mold development.</li>
        <li><span className='font-semibold'>Midday covering:</span> Beds are covered during the hottest hours and overnight to slow drying and protect against moisture reabsorption.</li>
        <li><span className='font-semibold'>Drying duration:</span> Each lot takes approximately 16 to 21 days to reach target moisture. Readiness is assessed by observing skin brightness and cracking sample dried cherries.</li>
        <li><span className='font-semibold'>Storage and milling:</span> Dried cherries are stored in poly bags in temporary warehouses, then transported to a dry mill for hulling and grading before export.</li>
      </ol>
      <p className='my-4'>
        This careful natural process is what produces the intense berry, honey, and spice notes that define Bombe&apos;s specialty lots. For a full comparison of natural versus washed processing across Ethiopian origins, see our <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline font-bold'>washed vs. natural processing guide</Link>.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Washed Processing</h4>
      <p className='my-4'>
        Washed Bombe lots pass through <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='text-amber-700 hover:underline font-bold'>washing stations</Link> where cherries are depulped, fermented in water tanks to remove mucilage, and then dried on raised beds. The result is a cleaner, brighter cup that highlights Bombe&apos;s terroir-driven acidity. Washed Bombe coffees tend toward citrus, floral, and stone fruit notes with a lighter body and crisper finish than their natural counterparts.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Anaerobic Experiments</h4>
      <p className='my-4'>
        Some progressive Bombe producers have begun experimenting with <Link href='/insights/anaerobic-ethiopian-coffee-processing-buyers-guide' className='text-amber-700 hover:underline font-bold'>anaerobic processing</Link>, fermenting cherries in sealed containers to control oxygen exposure and fermentation temperature. These experimental lots are limited in volume but are generating interest among specialty buyers seeking unique flavor profiles. Early results show intensified tropical fruit and wine-like characteristics.
      </p>

      {/* Section: Flavor Profile */}
      <h2 id='flavor' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineScale className='text-amber-600' />4. Flavor Profile and Cupping Notes
      </h2>
      <p className='my-4'>
        Bombe&apos;s cup quality is defined by two distinct flavor profiles depending on processing method. Both share the terroir-driven complexity that comes from high altitude, volcanic soils, and slow cherry maturation, but processing determines the direction.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Attribute</th>
              <th className='p-3 text-left font-bold'>Natural Bombe</th>
              <th className='p-3 text-left font-bold'>Washed Bombe</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Primary Flavors</td>
              <td className='p-3'>Ripe berry, blueberry, strawberry jam</td>
              <td className='p-3'>Citrus, lemon, bergamot</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Sweetness</td>
              <td className='p-3'>Honey, brown sugar, stone fruit</td>
              <td className='p-3'>Floral honey, jasmine, peach</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Acidity</td>
              <td className='p-3'>Lively, wine-like</td>
              <td className='p-3'>Bright, clean, citric</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Body</td>
              <td className='p-3'>Syrupy, medium-full</td>
              <td className='p-3'>Silky, medium</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Finish</td>
              <td className='p-3'>Long, spiced, lingering</td>
              <td className='p-3'>Clean, crisp, tea-like</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Typical SCA Score</td>
              <td className='p-3'>85 &ndash; 88+</td>
              <td className='p-3'>84 &ndash; 87</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Best Application</td>
              <td className='p-3'>Single-origin filter, cold brew, fruity blends</td>
              <td className='p-3'>Espresso, filter, clean-cup blends</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Natural Bombe Grade 1 lots consistently score 87+ on the SCA scale, placing them among the highest-scoring single-farm naturals available from Ethiopia. The combination of ripe berry intensity, honey sweetness, warm spice notes, and lively acidity creates a cup that is both complex and approachable. Roasters typically achieve best results at light to light-medium roast levels, where the origin character and processing sweetness are most expressive.
      </p>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm italic text-gray-700'>
          &quot;Delicate, aromatic, and layered. This natural Sidama Grade 1 opens with ripe berry and honey sweetness, followed by warm spice notes. The acidity is lively and clean, carrying the cup through a long, syrupy finish.&quot;
        </p>
        <p className='text-xs text-gray-500 mt-2'>Cupping notes from our <Link href='/product/sidama-natural-g1-bombe-bariso' className='text-amber-700 hover:underline'>Natural Sidama G1 Bombe lot</Link></p>
      </div>

      <p className='my-4'>
        For buyers comparing Bombe against other Sidama sub-regions and neighboring origins, our <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline font-bold'>Yirgacheffe vs. Sidamo vs. Guji comparison</Link> provides detailed side-by-side flavor analysis. For a dedicated deep-dive into Guji&apos;s terroir and sourcing strategy, see our <Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline font-bold'>Guji coffee sourcing guide</Link>.
      </p>

      {/* Section: Grading and Export Specifications */}
      <h2 id='grading' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineGlobeAlt className='text-amber-600' />5. Grading and Export Specifications
      </h2>
      <p className='my-4'>
        Bombe coffee is graded under Ethiopia&apos;s standard classification system, which evaluates physical bean quality (screen size, defect count, moisture) alongside sensory evaluation. The two grades most relevant to specialty buyers are:
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Specification</th>
              <th className='p-3 text-left font-bold'>Grade 1</th>
              <th className='p-3 text-left font-bold'>Grade 2</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>SCA Cupping Score</td>
              <td className='p-3'>86+ (typically 87-89 for Bombe)</td>
              <td className='p-3'>84 &ndash; 86</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Defect Count</td>
              <td className='p-3'>0 &ndash; 3 full defects per 300g</td>
              <td className='p-3'>4 &ndash; 12 full defects per 300g</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Moisture Content</td>
              <td className='p-3'>10 &ndash; 12%</td>
              <td className='p-3'>10 &ndash; 12%</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Packaging</td>
              <td className='p-3'>60 kg jute bags (GrainPro lined available)</td>
              <td className='p-3'>60 kg jute bags</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Processing</td>
              <td className='p-3'>Natural or Washed</td>
              <td className='p-3'>Natural or Washed</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Harvest Period</td>
              <td className='p-3'>November &ndash; January</td>
              <td className='p-3'>November &ndash; January</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        FOB pricing for Natural Bombe Grade 1 from the 2025/26 crop sits at approximately $10.50 per kilogram ($4.76/lb) FOB Djibouti. This reflects the premium that single-farm, traceable Bombe lots command over standard Sidama blends. Pricing shifts with crop year, global commodity markets, and lot-specific cupping scores. For current pricing and availability, <Link href='/contact-us' className='text-amber-700 hover:underline font-bold'>contact us directly</Link>.
      </p>
      <p className='my-4'>
        For details on Ethiopian coffee grading methodology, defect classification, and how grades translate to cup quality, see our <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline font-bold'>green coffee quality control and grading guide</Link>. Buyers interested in understanding the full export process from ECX or direct channels should review our <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline font-bold'>export process buyer&apos;s guide</Link>.
      </p>

      {/* Section: How to Source */}
      <h2 id='sourcing' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineTruck className='text-amber-600' />6. How to Source Bombe Sidama Coffee
      </h2>
      <p className='my-4'>
        Sourcing Bombe coffee starts with choosing between two channels: working directly with an Ethiopian exporter or purchasing through a green coffee importer in your country. Each path has tradeoffs in price, traceability, minimum order size, and logistics complexity.
      </p>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Sourcing Channels for Bombe Coffee</h4>
        <div className='space-y-4'>
          <div>
            <p className='font-bold'>Direct from Origin Exporter</p>
            <p className='text-sm text-gray-700'>Lower per-unit cost; full traceability to farm level; access to pre-shipment samples and custom lot selection. Requires managing international logistics, import documentation, and typically higher minimum orders (one container or partial). Best for roasters importing 10+ bags or building ongoing seasonal relationships.</p>
          </div>
          <div>
            <p className='font-bold'>Through a Destination-Country Importer</p>
            <p className='text-sm text-gray-700'>Smaller minimums (often 1-5 bags); warehoused locally for faster delivery; importer handles freight, customs, and quality screening. Higher per-unit cost due to importer margin. Best for roasters buying smaller volumes or testing a new origin before committing to direct sourcing.</p>
          </div>
        </div>
      </div>

      <p className='my-4'>
        For a step-by-step walkthrough of the sourcing process, supplier evaluation, and what to expect at each stage, see our comprehensive <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline font-bold'>guide to sourcing green coffee from Ethiopia</Link>.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Samples and Traceability</h4>
      <p className='my-4'>
        We offer 300g roast-trial samples of our <Link href='/product/sidama-natural-g1-bombe-bariso' className='text-amber-700 hover:underline font-bold'>Natural Sidama Grade 1 Bombe lot</Link> at $20 USD, shipped internationally. Each sample is traceable to the specific farm, producer (Belayneh Bariso and family), district (Bombe, Bensa), altitude band, variety composition, and processing method. This level of traceability is a direct result of our heritage sourcing relationship with the Bariso family, a partnership that spans more than twenty years.
      </p>
      <p className='my-4'>
        For more on how Ethiopian coffee traceability works and what documentation to expect, see our <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline font-bold'>traceability guide</Link>. Buyers requiring specific <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline font-bold'>minimum order quantities</Link> or <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline font-bold'>contract and payment terms</Link> will find detailed guidance in those dedicated articles.
      </p>

      {/* CTA Block */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3'>Source Bombe Sidama Coffee Direct from Origin</h3>
        <p className='my-2'>
          Request a 300g roast-trial sample of our Natural Sidama G1 Bombe lot, review current FOB pricing, or explore our full range of Ethiopian green coffees. We ship samples internationally and offer container-load or partial-container options for bulk orders.
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
        <h2 className='text-2xl font-bold mb-6 text-gray-900'>7. Frequently Asked Questions About Bombe Sidama Coffee</h2>
        <div className='space-y-6'>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>What does Bombe Sidama coffee taste like?</h3>
            <p className='text-sm text-gray-600'>
              Natural Bombe coffees are known for ripe berry, honey sweetness, warm spice notes, and a long syrupy finish with lively, wine-like acidity. Washed Bombe lots shift toward clean citrus, floral, and stone fruit notes with a brighter, crisper acidity. Both styles reflect the high altitude and volcanic soils of the Bombe terroir.
            </p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>What altitude does Bombe coffee grow at?</h3>
            <p className='text-sm text-gray-600'>
              Bombe farms sit between 1,950 and 2,350 meters above sea level in the Bensa district of Sidama. This altitude range places Bombe among the highest coffee-growing areas in Sidama. The extreme elevation slows cherry maturation, concentrating sugars and organic acids that produce dense, complex green coffee.
            </p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>Is Bombe coffee available as natural or washed?</h3>
            <p className='text-sm text-gray-600'>
              Both. Natural processing is the dominant method in Bombe and accounts for the micro-region&apos;s best-known flavor profiles (berry, honey, spice). Washed Bombe lots are also produced, offering cleaner, brighter cups. Some producers have begun experimenting with anaerobic processing, though these lots remain limited in volume.
            </p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>How do I order Bombe Sidama green coffee in bulk?</h3>
            <p className='text-sm text-gray-600'>
              Start by requesting a 300g roast-trial sample ($20 USD) to evaluate the lot before committing to volume. Once you approve the cup profile, we can arrange FOB or CIF shipment in 60 kg jute bags, with container-load or partial-container options. Contact our team for current pricing, availability, and contract terms.
            </p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>What grade is Bombe Sidama coffee?</h3>
            <p className='text-sm text-gray-600'>
              Bombe coffee is exported as Grade 1 or Grade 2 under Ethiopia&apos;s national grading system. Grade 1 lots have 0 to 3 full defects per 300g sample and score 86+ on the SCA cupping scale. Our current Bombe offering is a Natural Grade 1 scoring 87+, sourced from a single family farm with full traceability.
            </p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-6'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sidama &amp; Ethiopian Origins</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/sidamo-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Sidamo Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/sidama-coffee-production-productivity-export' className='text-amber-700 hover:underline'>Sidama Coffee: 10+ Quintals Per Hectare</Link></li>
              <li>&bull; <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs. Sidamo vs. Guji Comparison</Link></li>
              <li>&bull; <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Coffee Origins</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Ethiopian Heirloom Varieties and Landraces</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Processing &amp; Quality</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs. Natural Ethiopian Coffee Processing</Link></li>
              <li>&bull; <Link href='/insights/anaerobic-ethiopian-coffee-processing-buyers-guide' className='text-amber-700 hover:underline'>Anaerobic Processing Buyer&apos;s Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality Control and Grading</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Washing Stations Buyer&apos;s Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process Buyer&apos;s Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Pricing &amp; Logistics</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing Guide</Link></li>
              <li>&bull; <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Minimum Order Quantities Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Contracts and Payment Terms Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter with over 30 years of sourcing relationships across Ethiopia&apos;s growing regions. Our Bombe sourcing partnership spans more than two decades.
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

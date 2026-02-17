import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineFire,
  HiOutlineCheckCircle,
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineExclamationTriangle,
  HiOutlineBeaker,
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineQuestionMarkCircle
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function RoastingEthiopianCoffeeBeansGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Region-specific roast profiles, washed vs natural strategies, temperature and timing guidance, and troubleshooting for specialty roasters
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Roasting Ethiopian coffee demands careful attention to bean density, processing method, and regional flavor potential to preserve the origin&apos;s signature complexity
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Roasting Ethiopian coffee beans in a drum roaster with golden brown beans at first crack stage'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Coffee Roasting / Ethiopian Coffee / Quality &amp; Processing / Roaster Resources</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Key Takeaway:</span> Ethiopian coffee beans are dense, small, and genetically diverse, requiring lower charge temperatures for naturals (185-195&#176;C / 365-383&#176;F) and moderate charges for washed lots (195-205&#176;C / 383-400&#176;F). First crack tends to stagger due to uneven bean size. Target 18-22% development time ratio for filter roasts and 22-25% for espresso. Rest naturals 7-10 days and washed lots 5-7 days post-roast for best cup results.</span>
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href="#why-different-approach" className='text-amber-700 hover:underline'>1. Why Ethiopian Beans Demand a Different Roasting Approach</a></li>
          <li><a href="#essential-variables" className='text-amber-700 hover:underline'>2. Essential Roasting Variables for Ethiopian Coffee</a></li>
          <li><a href="#profiles-by-processing" className='text-amber-700 hover:underline'>3. Roast Profiles by Processing Method</a></li>
          <li><a href="#region-specific-notes" className='text-amber-700 hover:underline'>4. Region-Specific Roasting Notes</a></li>
          <li><a href="#roast-level-brewing" className='text-amber-700 hover:underline'>5. Roast Level and Brewing Destination</a></li>
          <li><a href="#common-defects" className='text-amber-700 hover:underline'>6. Common Roast Defects and How to Fix Them</a></li>
          <li><a href="#rest-time" className='text-amber-700 hover:underline'>7. Rest Time After Roasting</a></li>
          <li><a href="#sample-roasting" className='text-amber-700 hover:underline'>8. Sample Roasting Ethiopian Green Coffee</a></li>
          <li><a href="#faq" className='text-amber-700 hover:underline'>9. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRODUCTION */}
      <p className='my-4'>
        <span className='font-bold'>Roasting Ethiopian coffee</span> is one of the most rewarding and demanding tasks a specialty roaster can take on. Ethiopian beans carry flavor complexity that few other origins match: jasmine florals, ripe stone fruit, citrus brightness, and deep berry sweetness. Yet many roasters struggle to unlock these qualities consistently. Charge too high and you scorch the surface. Extend development too long and you mute the florals that make Ethiopian coffee extraordinary.
      </p>

      <p className='my-4'>
        The difficulty stems from the beans themselves. Ethiopian coffees are grown at elevations between 1,400 and 2,300 meters, producing hard, dense cells packed with sugars and organic acids. They are smaller and less uniform in size than beans from most other origins. And because Ethiopia is the <Link href='/insights/ethiopia-birthplace-of-coffee' className='underline font-bold'>genetic birthplace of Arabica</Link>, the sheer variety of cultivars in a single lot introduces roasting variables that do not exist with commercially bred varieties like Caturra or Catuai.
      </p>

      <p className='my-4'>
        This guide provides the specific roasting strategies that work for Ethiopian coffee, broken down by processing method, region, and target roast level. It is written for both commercial roasters buying full container loads and smaller roasters purchasing sample lots for evaluation. Every recommendation is grounded in the physical properties of Ethiopian green coffee and the flavor outcomes that B2B buyers and end consumers expect.
      </p>

      {/* SECTION 1 */}
      <h3 id="why-different-approach" className='text-2xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineFire className='text-amber-600' />
        Why Ethiopian Beans Demand a Different Roasting Approach
      </h3>

      <h4 className='text-xl font-bold mt-8 mb-3'>Density, Size, and Genetic Diversity</h4>

      <p className='my-4'>
        Three physical characteristics set Ethiopian green coffee apart from other origins and directly shape roasting strategy.
      </p>

      <p className='my-4'>
        <span className='font-bold'>High density.</span> Altitude creates density. Ethiopian coffees typically grow above 1,600 meters, with many lots from Yirgacheffe and Guji originating above 2,000 meters. At these elevations, the coffee cherry matures slowly, concentrating sugars, chlorogenic acids, and volatile aromatic precursors inside a tightly packed cellular structure. Dense beans absorb heat more slowly at the start of the roast but store more energy during the Maillard phase, which means roasters must manage energy input carefully to avoid underdeveloping the center while the exterior races ahead.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Small, irregular bean size.</span> Ethiopian beans are among the smallest commercially traded Arabica. Unlike screen-size-sorted origins where beans fall neatly into 16-18 categories, Ethiopian lots often contain a range of sizes within the same bag. This size variation makes uniform roasting difficult. Smaller beans reach first crack earlier than larger ones in the same batch, causing first crack to trickle rather than roll in a clean, distinct break. For roasters accustomed to Colombian or Central American coffees that crack in a tight 15-20 second window, the extended and uneven crack of Ethiopian beans is a common source of frustration.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Genetic diversity.</span> Ethiopia hosts an estimated 6,000 to 10,000 distinct coffee varieties, most of them uncharacterized <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='underline font-bold'>heirloom landraces</Link>. A single washed lot from a Yirgacheffe cooperative may contain dozens of distinct genotypes, each with slightly different density, moisture content, and sugar composition. This genetic mix is what gives Ethiopian coffee its complexity in the cup, but it also explains why no two lots roast identically, even when sourced from the same washing station in consecutive seasons.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-3'>Washed vs Natural: Two Starting Points</h4>

      <p className='my-4'>
        Processing method is the single most important variable when planning a roast for Ethiopian coffee. <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='underline font-bold'>Washed and natural processing</Link> produce green beans with fundamentally different physical properties, and each requires its own roasting approach.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='px-4 py-3 text-left font-bold'>Property</th>
              <th className='px-4 py-3 text-left font-bold'>Washed Ethiopian</th>
              <th className='px-4 py-3 text-left font-bold'>Natural Ethiopian</th>
            </tr>
          </thead>
          <tbody className='text-dark/80'>
            <tr className='border-b border-dark/10'>
              <td className='px-4 py-3 font-medium'>Surface texture</td>
              <td className='px-4 py-3'>Clean, uniform, bluish-green</td>
              <td className='px-4 py-3'>Rougher, uneven chaff, yellowish to brownish</td>
            </tr>
            <tr className='border-b border-dark/10 bg-gray-50'>
              <td className='px-4 py-3 font-medium'>Residual sugar on surface</td>
              <td className='px-4 py-3'>Minimal</td>
              <td className='px-4 py-3'>Higher (dried fruit mucilage remains)</td>
            </tr>
            <tr className='border-b border-dark/10'>
              <td className='px-4 py-3 font-medium'>Chaff volume</td>
              <td className='px-4 py-3'>Moderate</td>
              <td className='px-4 py-3'>Heavy (can clog drum airflow)</td>
            </tr>
            <tr className='border-b border-dark/10 bg-gray-50'>
              <td className='px-4 py-3 font-medium'>Heat absorption behavior</td>
              <td className='px-4 py-3'>Tolerates higher charge and more aggressive energy</td>
              <td className='px-4 py-3'>Burns more easily; demands lower charge and gentler ramp</td>
            </tr>
            <tr className='border-b border-dark/10'>
              <td className='px-4 py-3 font-medium'>Color development speed</td>
              <td className='px-4 py-3'>Predictable, gradual</td>
              <td className='px-4 py-3'>Faster visual darkening (can deceive on actual development)</td>
            </tr>
            <tr className='border-b border-dark/10 bg-gray-50'>
              <td className='px-4 py-3 font-medium'>Target flavor profile</td>
              <td className='px-4 py-3'>Clean acidity, floral, citrus, tea-like body</td>
              <td className='px-4 py-3'>Berry, tropical fruit, winey, heavier body</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Understanding these differences before you fire the roaster is not optional. Applying a washed Ethiopian profile to a natural lot, or vice versa, consistently produces disappointing results: either scorched naturals with ashy bitterness or underdeveloped washed lots with grassy astringency.
      </p>

      {/* SECTION 2 */}
      <h3 id="essential-variables" className='text-2xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineAdjustmentsHorizontal className='text-amber-600' />
        Essential Roasting Variables for Ethiopian Coffee
      </h3>

      <h4 className='text-xl font-bold mt-8 mb-3'>Charge Temperature</h4>

      <p className='my-4'>
        Charge temperature, the drum temperature when beans enter the roaster, sets the trajectory for the entire roast. For Ethiopian coffee, getting this right is especially critical because these dense, small beans are prone to surface scorching if the initial heat is too high.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3'><HiOutlineFire className='inline mr-2' />Recommended Charge Temperatures</h4>
        <ul className='text-sm space-y-3'>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Washed Ethiopian:</span> 195-205&#176;C (383-400&#176;F). Washed beans tolerate more aggressive initial energy. Their clean surface allows heat to transfer evenly into the cell structure from the start.</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Natural Ethiopian:</span> 185-195&#176;C (365-383&#176;F). Lower charge prevents the residual dried fruit sugars on the bean surface from caramelizing too quickly, which causes tipping and scorching.</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Honey / Experimental:</span> 190-200&#176;C (374-392&#176;F). Start between washed and natural, then adjust based on surface moisture and mucilage level after the first sample roast.</span>
          </li>
        </ul>
      </div>

      <p className='my-4'>
        These ranges apply to most commercial drum roasters (5-25 kg capacity). Adjust down by 5-10&#176;C for fluid bed or air roasters, which transfer heat more directly and aggressively. If roasting on a sample roaster (100-250g), refer to the <a href="#sample-roasting">sample roasting section</a> below.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-3'>Rate of Rise and Energy Management</h4>

      <p className='my-4'>
        Rate of Rise (RoR), the speed at which bean temperature increases per unit of time, should follow a progressively declining curve for Ethiopian coffees. This means the fastest rate of temperature increase occurs immediately after charge, and the RoR steadily decreases throughout the roast until drop.
      </p>

      <p className='my-4'>
        A declining RoR is standard practice across specialty roasting, but Ethiopian beans punish deviations from this principle more severely than most origins. Two scenarios cause particular problems:
      </p>

      <ul className='list-none space-y-3 my-4'>
        <li className='flex items-start gap-2'>
          <HiOutlineExclamationTriangle className='text-amber-500 flex-shrink-0 mt-1' />
          <span><span className='font-bold'>RoR crash before first crack:</span> If the rate of rise drops too sharply (more than 3-4&#176;C per 30 seconds) in the approach to first crack, the roast loses momentum. The result is a baked flavor, flat sweetness, and muted acidity. Ethiopian coffees lose their floral and citrus character entirely when baked.</span>
        </li>
        <li className='flex items-start gap-2'>
          <HiOutlineExclamationTriangle className='text-amber-500 flex-shrink-0 mt-1' />
          <span><span className='font-bold'>RoR spike at first crack:</span> Adding energy during crack (a common instinct when crack sounds weak) can spike the RoR, causing uneven development and scorching. Ethiopian beans produce a muted, drawn-out first crack. Trust the temperature reading, not the sound.</span>
        </li>
      </ul>

      <p className='my-4'>
        The practical approach: apply strong energy early (during the drying phase), begin reducing heat input as the beans approach yellowing (around 150-160&#176;C / 302-320&#176;F bean temperature), and continue a smooth, gradual reduction through first crack and development. Experienced Ethiopian roasters describe this as &quot;front-loading energy&quot; so the beans carry enough thermal momentum to coast through crack without needing a heat boost.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-3'>First Crack Behavior</h4>

      <p className='my-4'>
        First crack in Ethiopian coffee behaves differently from most other origins. Instead of a sharp, rolling crack that lasts 60-90 seconds, Ethiopian lots produce a softer, extended crack that can last 2-3 minutes and trail off with &quot;stragglers,&quot; individual beans cracking well after the main event. This is a direct consequence of the size and density variation discussed above.
      </p>

      <p className='my-4'>
        Typical first crack onset temperatures for Ethiopian coffee:
      </p>

      <ul className='list-disc pl-6 my-4 space-y-1'>
        <li><span className='font-semibold'>Washed:</span> 195-202&#176;C (383-396&#176;F) bean temperature</li>
        <li><span className='font-semibold'>Natural:</span> 192-198&#176;C (378-388&#176;F) bean temperature</li>
      </ul>

      <p className='my-4'>
        According to roasting expert <a href='https://www.scottrao.com/' target='_blank' rel='noopener noreferrer' className='underline'>Scott Rao</a>, roasters should aim for &quot;a nice, rolling, vigorous crack&quot; with &quot;a clear endpoint without too many stragglers.&quot; This is achievable with Ethiopian coffees, but only if sufficient energy was applied during the early phases. A weak, trickling crack almost always indicates insufficient energy input before crack, not a problem with the beans themselves.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-3'>Development Time Ratio</h4>

      <p className='my-4'>
        Development time ratio (DTR) measures the percentage of total roast time spent between first crack onset and drop. For Ethiopian coffees:
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3'><HiOutlineClock className='inline mr-2' />Recommended Development Time</h4>
        <ul className='text-sm space-y-3'>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Light filter roast:</span> 15-18% DTR (1:00 to 1:30 of development time in a 9:00 total roast)</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Medium filter roast:</span> 18-22% DTR (1:30 to 2:00 in a 9:30 total roast)</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Espresso roast:</span> 22-25% DTR (2:00 to 2:30 in a 10:00 total roast)</span>
          </li>
        </ul>
      </div>

      <p className='my-4'>
        Extending development beyond 25% on Ethiopian beans generally suppresses the floral and citrus notes that drive specialty premiums. If you need a darker roast for espresso blending, push past these ranges only when the blend concept specifically calls for chocolatey, low-acid Ethiopian character rather than origin brightness.
      </p>

      {/* SECTION 3 */}
      <h3 id="profiles-by-processing" className='text-2xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineBeaker className='text-amber-600' />
        Roast Profiles by Processing Method
      </h3>

      <h4 className='text-xl font-bold mt-8 mb-3'>Roasting Washed Ethiopian Coffee</h4>

      <p className='my-4'>
        Washed Ethiopian coffees are the more forgiving of the two main processing types, but &quot;forgiving&quot; is relative. These beans reward roasters who push enough energy early and then back off smoothly. The goal is to preserve the clean, transparent acidity and floral aromatics that washed Ethiopian lots are known for.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3'>Washed Ethiopian Roast Framework</h4>
        <ul className='text-sm space-y-2'>
          <li><span className='font-semibold'>Charge temp:</span> 195-205&#176;C (383-400&#176;F)</li>
          <li><span className='font-semibold'>Turning point:</span> ~90-120 seconds after charge</li>
          <li><span className='font-semibold'>Drying phase (to yellowing):</span> 4:00-5:00 minutes (aim for 40-45% of total roast time)</li>
          <li><span className='font-semibold'>Maillard phase (yellowing to FC):</span> 3:00-4:00 minutes (35-40% of total roast time)</li>
          <li><span className='font-semibold'>First crack onset:</span> ~195-202&#176;C (383-396&#176;F) bean temp</li>
          <li><span className='font-semibold'>Development:</span> 1:00-2:00 minutes (15-22% DTR)</li>
          <li><span className='font-semibold'>Drop temp:</span> 205-215&#176;C (400-419&#176;F) for filter; 215-220&#176;C (419-428&#176;F) for espresso</li>
          <li><span className='font-semibold'>Total roast:</span> 8:30-11:00 minutes</li>
          <li><span className='font-semibold'>Weight loss:</span> 12-14%</li>
        </ul>
      </div>

      <p className='my-4'>
        The critical window for washed Ethiopian coffees is the transition from Maillard phase into first crack. Apply enough energy during the Maillard phase to build momentum, then reduce heat input as you approach crack. The beans should enter crack with sufficient thermal energy to sustain a rolling crack without additional heat boost. If crack stalls or trickles, you lost momentum too early.
      </p>

      <p className='my-4'>
        Post-crack, reduce heat aggressively and increase airflow. Washed Ethiopian coffees develop sweetness quickly after crack onset. Extending development beyond 2:00 minutes risks losing the jasmine, bergamot, and lemon notes that make these coffees command <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='underline font-bold'>premium FOB prices</Link>.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-3'>Roasting Natural (Dry-Processed) Ethiopian Coffee</h4>

      <p className='my-4'>
        Natural Ethiopian coffees are significantly harder to roast well. The dried fruit layer that remains on the bean creates uneven heat absorption, heavy chaff production, and faster visual darkening that can fool roasters into believing the beans are more developed than they actually are. Surface color on a natural Ethiopian roast is an unreliable indicator of internal development.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3'>Natural Ethiopian Roast Framework</h4>
        <ul className='text-sm space-y-2'>
          <li><span className='font-semibold'>Charge temp:</span> 185-195&#176;C (365-383&#176;F), approximately 10&#176;C lower than washed</li>
          <li><span className='font-semibold'>Turning point:</span> ~90-120 seconds after charge</li>
          <li><span className='font-semibold'>Drying phase:</span> 4:30-5:30 minutes (can extend slightly due to higher moisture variability)</li>
          <li><span className='font-semibold'>Maillard phase:</span> 2:30-3:30 minutes</li>
          <li><span className='font-semibold'>First crack onset:</span> ~192-198&#176;C (378-388&#176;F) bean temp</li>
          <li><span className='font-semibold'>Development:</span> 1:15-2:00 minutes (15-20% DTR)</li>
          <li><span className='font-semibold'>Drop temp:</span> 200-210&#176;C (392-410&#176;F) for filter; 210-217&#176;C (410-423&#176;F) for espresso</li>
          <li><span className='font-semibold'>Total roast:</span> 8:30-10:30 minutes</li>
          <li><span className='font-semibold'>Weight loss:</span> 13-16%</li>
        </ul>
      </div>

      <p className='my-4'>
        Two specific adjustments make natural Ethiopian roasts successful. First, increase airflow earlier in the roast (around yellowing) to evacuate the heavy chaff that natural processing produces. Chaff buildup in the drum insulates the beans and creates hot spots that cause tipping on the edges. Second, do not trust visual color. Use your temperature probe and time-based markers to judge development, not the exterior shade of the bean. Natural Ethiopian beans look darker at equivalent development levels compared to washed beans from the same region.
      </p>

      <p className='my-4'>
        Many roasters report that natural Ethiopian beans produce their best cup at a slightly shorter development time than washed beans from the same origin. This preserves the blueberry, strawberry, and tropical fruit notes that define natural Ethiopian character. For a detailed comparison of these processing methods, see our guide on <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='underline font-bold'>washed vs natural Ethiopian coffee</Link>.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-3'>Honey and Experimental Lots</h4>

      <p className='my-4'>
        Ethiopian honey-processed and experimental lots (anaerobic fermentation, carbonic maceration, extended fermentation) are becoming more common as producers experiment with <Link href='/insights/specialty-coffee-trends-2026' className='underline font-bold'>specialty coffee trends</Link>. These lots sit between washed and natural in terms of roasting behavior, but each experimental process introduces unique variables.
      </p>

      <p className='my-4'>
        General guidance for experimental lots:
      </p>

      <ul className='list-none space-y-3 my-4'>
        <li className='flex items-start gap-2'>
          <HiOutlineCheckCircle className='text-green-600 flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Honey process:</span> Start with a charge temperature 5&#176;C above your natural profile. Honey beans have less surface residue than naturals but more than washed, placing roast behavior between the two.</span>
        </li>
        <li className='flex items-start gap-2'>
          <HiOutlineCheckCircle className='text-green-600 flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Anaerobic / carbonic maceration:</span> These lots contain elevated levels of lactic and acetic acids from extended fermentation. Use a washed profile as your baseline, but shorten development by 15-20 seconds to prevent the fermentation-derived acidity from turning harsh. Cupping after the third and seventh day of rest will reveal whether more or less development is needed.</span>
        </li>
      </ul>

      <p className='my-4'>
        Always sample roast experimental lots before committing to a production profile. The variation between individual lots is too high for any single framework to cover reliably. For detailed guidance on <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='underline font-bold'>cupping and evaluating Ethiopian samples</Link>, see our dedicated guide.
      </p>

      {/* SECTION 4 */}
      <h3 id="region-specific-notes" className='text-2xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineChartBar className='text-amber-600' />
        Region-Specific Roasting Notes
      </h3>

      <p className='my-4'>
        Ethiopian coffee is not a monolith. Each growing region produces beans with distinct density, moisture content, and flavor potential. Roasters sourcing from multiple Ethiopian origins benefit from adjusting profiles per region rather than applying a single &quot;Ethiopian&quot; approach. For a detailed comparison of Ethiopia&apos;s major origins, our <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='underline font-bold'>Yirgacheffe vs Sidamo vs Guji comparison</Link> covers cup profiles and sourcing considerations.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='px-4 py-3 text-left font-bold'>Region</th>
              <th className='px-4 py-3 text-left font-bold'>Typical Altitude</th>
              <th className='px-4 py-3 text-left font-bold'>Processing</th>
              <th className='px-4 py-3 text-left font-bold'>Roasting Notes</th>
              <th className='px-4 py-3 text-left font-bold'>Target Flavor</th>
            </tr>
          </thead>
          <tbody className='text-dark/80'>
            <tr className='border-b border-dark/10'>
              <td className='px-4 py-3 font-medium'><Link href='/ethiopian-coffee-yirgacheffe' className='underline'>Yirgacheffe</Link></td>
              <td className='px-4 py-3'>1,750-2,200m</td>
              <td className='px-4 py-3'>Washed &amp; Natural</td>
              <td className='px-4 py-3'>Highest density. Benefits from faster total roast (8:00-9:30). Aggressive early energy, gentle through crack. Very sensitive to overdevelopment.</td>
              <td className='px-4 py-3'>Jasmine, bergamot, lemon, peach</td>
            </tr>
            <tr className='border-b border-dark/10 bg-gray-50'>
              <td className='px-4 py-3 font-medium'><Link href='/ethiopian-coffee-sidamo' className='underline'>Sidamo</Link></td>
              <td className='px-4 py-3'>1,550-2,000m</td>
              <td className='px-4 py-3'>Washed &amp; Natural</td>
              <td className='px-4 py-3'>Slightly less dense than Yirgacheffe. More tolerant of longer Maillard phase. Can handle 9:00-10:30 total roast with good results.</td>
              <td className='px-4 py-3'>Stone fruit, brown sugar, citrus, chocolate</td>
            </tr>
            <tr className='border-b border-dark/10'>
              <td className='px-4 py-3 font-medium'><Link href='/ethiopian-coffee-guji' className='underline'>Guji</Link></td>
              <td className='px-4 py-3'>1,800-2,300m</td>
              <td className='px-4 py-3'>Washed &amp; Natural</td>
              <td className='px-4 py-3'>Very high density, similar to Yirgacheffe. Complex sugars benefit from slightly extended Maillard (35-40% of total). Drop just after first crack subsides for filter.</td>
              <td className='px-4 py-3'>Tropical fruit, berry, floral, complex acidity</td>
            </tr>
            <tr className='border-b border-dark/10 bg-gray-50'>
              <td className='px-4 py-3 font-medium'><Link href='/ethiopian-coffee-harar' className='underline'>Harrar</Link></td>
              <td className='px-4 py-3'>1,500-2,000m</td>
              <td className='px-4 py-3'>Natural (predominantly)</td>
              <td className='px-4 py-3'>Exclusively natural processing creates heavy chaff and uneven size. Low charge (185&#176;C), increase airflow early. Can develop further (22-25% DTR) without losing character.</td>
              <td className='px-4 py-3'>Blueberry, wine, dark chocolate, dried fruit</td>
            </tr>
            <tr className='border-b border-dark/10'>
              <td className='px-4 py-3 font-medium'><Link href='/ethiopian-coffee-limu' className='underline'>Limu</Link> / <Link href='/ethiopian-coffee-jimma' className='underline'>Jimma</Link></td>
              <td className='px-4 py-3'>1,400-1,800m</td>
              <td className='px-4 py-3'>Washed</td>
              <td className='px-4 py-3'>Lower density than southern origins. Tolerates a wider charge range (190-205&#176;C). More forgiving overall. Good training origin for roasters new to Ethiopian coffee.</td>
              <td className='px-4 py-3'>Balanced acidity, mild floral, spice, nutty</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        For a complete overview of all Ethiopian growing regions and their characteristics, see our <Link href='/insights/guide-ethiopian-coffee-origins' className='underline font-bold'>guide to Ethiopian coffee origins</Link>.
      </p>

      {/* SECTION 5 */}
      <h3 id="roast-level-brewing" className='text-2xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineAdjustmentsHorizontal className='text-amber-600' />
        Roast Level and Brewing Destination
      </h3>

      <h4 className='text-xl font-bold mt-8 mb-3'>Filter Roast</h4>

      <p className='my-4'>
        Filter brewing (pour-over, drip, batch brew) is where Ethiopian coffee shines brightest. A filter roast preserves the transparency that lets a Yirgacheffe&apos;s jasmine or a Guji&apos;s mango notes come through clearly. Lighter roast development (15-18% DTR), lower end temperatures (205-212&#176;C / 400-414&#176;F), and weight loss between 12-14% keep the cup clean and bright.
      </p>

      <p className='my-4'>
        Chemex with its thick paper filter accentuates the tea-like body and floral clarity of washed Ethiopian coffees. V60 and Kalita Wave allow slightly more body through, which suits naturals and honey-processed lots. Cold brew using a coarse grind and 16-24 hour steep produces a remarkably smooth cup from Ethiopian beans, emphasizing stone fruit sweetness while moderating acidity.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-3'>Espresso Roast</h4>

      <p className='my-4'>
        Roasting Ethiopian coffee for espresso requires pushing development further (22-25% DTR) and extending the Maillard phase to build solubility and body. Without sufficient development, Ethiopian beans produce thin, sour shots that many espresso drinkers find challenging. The goal is to build enough body and sweetness to support the espresso extraction without destroying the origin character.
      </p>

      <p className='my-4'>
        Single-origin Ethiopian espresso has become a signature offering for specialty cafes worldwide. Natural Guji and Sidamo lots, roasted to a medium level with strong development, produce espresso with blueberry and chocolate notes that stand well on their own or pair with milk. Washed Yirgacheffe espresso is more polarizing: it can produce stunning floral shots, but the narrow roast window for success (within 15-20 seconds of the ideal drop point) makes consistency a challenge for high-volume operations.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-3'>Omni Roast</h4>

      <p className='my-4'>
        An omni roast aims to work acceptably for both filter and espresso. For Ethiopian beans, this typically means a medium development (20-22% DTR) with a drop temperature around 213-217&#176;C (415-423&#176;F). The compromise: you lose some floral transparency compared to a dedicated filter roast and some body compared to a dedicated espresso roast. For smaller roasters selling a single Ethiopian offering across brew methods, this is often the practical choice. It works best with Sidamo and Guji naturals, which have enough inherent body and sweetness to perform across methods.
      </p>

      {/* SECTION 6 */}
      <h3 id="common-defects" className='text-2xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineExclamationTriangle className='text-amber-600' />
        Common Roast Defects and How to Fix Them
      </h3>

      <p className='my-4'>
        Ethiopian beans produce specific roast defects more frequently than other origins. The table below covers the most common problems, their causes, and corrective actions. For deeper coverage of green coffee defects (pre-roast), see our <Link href='/insights/green-coffee-quality-control-defects-grading' className='underline font-bold'>green coffee quality control guide</Link>.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='px-4 py-3 text-left font-bold'>Defect</th>
              <th className='px-4 py-3 text-left font-bold'>Cup Symptom</th>
              <th className='px-4 py-3 text-left font-bold'>Likely Cause</th>
              <th className='px-4 py-3 text-left font-bold'>Fix</th>
            </tr>
          </thead>
          <tbody className='text-dark/80'>
            <tr className='border-b border-dark/10'>
              <td className='px-4 py-3 font-medium'>Scorching / Tipping</td>
              <td className='px-4 py-3'>Burnt, ashy taste; dark spots on bean edges</td>
              <td className='px-4 py-3'>Charge temp too high, especially on naturals; drum too hot between batches</td>
              <td className='px-4 py-3'>Lower charge by 5-10&#176;C; ensure adequate between-batch cooling</td>
            </tr>
            <tr className='border-b border-dark/10 bg-gray-50'>
              <td className='px-4 py-3 font-medium'>Baking</td>
              <td className='px-4 py-3'>Flat, doughy, lifeless cup with no acidity</td>
              <td className='px-4 py-3'>RoR stalled or flattened before or during first crack; total roast too long</td>
              <td className='px-4 py-3'>Increase energy earlier; maintain declining (not flat) RoR; reduce total roast time</td>
            </tr>
            <tr className='border-b border-dark/10'>
              <td className='px-4 py-3 font-medium'>Underdevelopment</td>
              <td className='px-4 py-3'>Grassy, astringent, sour; harsh vegetal finish</td>
              <td className='px-4 py-3'>Dropped too early after first crack; insufficient total energy input</td>
              <td className='px-4 py-3'>Extend development to at least 15% DTR; ensure first crack was fully established before reducing energy</td>
            </tr>
            <tr className='border-b border-dark/10 bg-gray-50'>
              <td className='px-4 py-3 font-medium'>Overdevelopment</td>
              <td className='px-4 py-3'>Muted origin character; smoky, roasty; lost florals</td>
              <td className='px-4 py-3'>DTR exceeded 25%; drop temp too high</td>
              <td className='px-4 py-3'>Drop 10-15 seconds earlier; reduce heat faster post-crack</td>
            </tr>
            <tr className='border-b border-dark/10'>
              <td className='px-4 py-3 font-medium'>Uneven Roast (Mottled)</td>
              <td className='px-4 py-3'>Inconsistent flavor; mixed bright and flat in same cup</td>
              <td className='px-4 py-3'>Bean size variation normal for Ethiopian lots; chaff buildup insulating beans</td>
              <td className='px-4 py-3'>Increase airflow during drying and Maillard; clean chaff collector more frequently; reduce batch size slightly</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Slight mottling on roasted Ethiopian beans is normal and not necessarily a defect. The genetic diversity within Ethiopian lots means some color variation is inherent even in well-executed roasts. Judge the cup, not the appearance. If the cup is clean, sweet, and complex, the mottling is cosmetic.
      </p>

      {/* SECTION 7 */}
      <h3 id="rest-time" className='text-2xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineClock className='text-amber-600' />
        Rest Time After Roasting
      </h3>

      <p className='my-4'>
        Ethiopian coffees require longer degassing rest than most other origins before they cup at their best. CO2 released during degassing carries volatile aromatics out of the bean, and rushing to brew before adequate rest produces a chaotic, gassy cup that masks the origin&apos;s true character.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3'><HiOutlineClock className='inline mr-2' />Recommended Rest Periods</h4>
        <ul className='text-sm space-y-3'>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Washed Ethiopian (filter roast):</span> 5-7 days minimum. Florals and citrus notes emerge clearly after day 5. Peak flavor window: days 7-21.</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Natural Ethiopian (filter roast):</span> 7-10 days minimum. Berry and fruit notes intensify significantly through the first week. Many natural lots peak between days 10-28.</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Espresso roast (washed or natural):</span> 10-14 days. Espresso extraction amplifies CO2 effects, so longer rest is essential for shot stability and crema quality.</span>
          </li>
        </ul>
      </div>

      <p className='my-4'>
        For roasters evaluating Ethiopian samples from a potential supplier, this rest period is critical. Cupping a freshly roasted Ethiopian sample at 24-48 hours will produce misleading results. Most serious sample evaluation should happen at day 7 and again at day 14. If you are assessing green coffee from a new exporter, build this resting time into your sourcing timeline. For storage best practices during and after rest, our guide on <Link href='/insights/specialty-coffee-storage-freight-logistics' className='underline font-bold'>specialty coffee storage and freight logistics</Link> covers temperature, humidity, and packaging considerations.
      </p>

      {/* SECTION 8 */}
      <h3 id="sample-roasting" className='text-2xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineBeaker className='text-amber-600' />
        Sample Roasting Ethiopian Green Coffee
      </h3>

      <p className='my-4'>
        Sample roasting is the entry point for any new Ethiopian lot. Before committing to a production profile, roasters evaluate 100-250g sample batches to assess potential and identify the window where the coffee tastes best. Ethiopian lots reward this discipline more than most origins because the variation between lots, even from the same region and processor, is substantial.
      </p>

      <p className='my-4'>
        Sample roasting Ethiopian coffee follows the same principles as production roasting, with a few adjustments: 
      </p>

      <ul className='list-none space-y-3 my-4'>
        <li className='flex items-start gap-2'>
          <HiOutlineCheckCircle className='text-green-600 flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Use a standardized protocol.</span> <a href='https://sca.coffee/research/protocols-best-practices' target='_blank' rel='noopener noreferrer' className='underline'>SCA sample roasting protocol</a> calls for 8-12 minute total roast time, light to medium development, with an end color between Agtron 55-65 (whole bean). While you should use this standard for evaluation cupping, also roast a second sample at your target production profile for comparison.</span>
        </li>
        <li className='flex items-start gap-2'>
          <HiOutlineCheckCircle className='text-green-600 flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Roast three iterations.</span> Ethiopian lots rarely reveal their full potential on the first roast. Roast the first sample at a standard medium-light profile. Adjust the second sample based on what you cup (shorter or longer development, higher or lower charge). The third roast confirms your preferred direction.</span>
        </li>
        <li className='flex items-start gap-2'>
          <HiOutlineCheckCircle className='text-green-600 flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Log everything.</span> Record charge temperature, turning point, yellowing time, first crack onset, drop temperature, total roast time, and weight loss. Ethiopian lots from the same region and processor can vary between seasons, and your roast notes become the reference for future orders.</span>
        </li>
      </ul>

      <p className='my-4'>
        For buyers evaluating lots from an Ethiopian exporter, the sample roast is also where you confirm that the green coffee matches the cup profile described on the offer sheet. Our guide on <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='underline font-bold'>cupping and evaluating Ethiopian coffee samples</Link> walks through the full protocol, including how to read Ethiopian <Link href='/insights/green-coffee-quality-control-defects-grading' className='underline font-bold'>quality grades</Link> (G1, G2, G3) in the context of roasting decisions.
      </p>

      {/* FAQ SECTION */}
      <section id="faq" className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200 mt-10">
        <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
          <HiOutlineQuestionMarkCircle className='text-amber-600' />
          Frequently Asked Questions About Roasting Ethiopian Coffee
        </h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What is the best roast level for Ethiopian coffee?</h4>
            <p className="text-sm text-gray-600">Light to medium roast preserves the floral, citrus, and fruit notes that make Ethiopian coffee distinctive. A medium roast (18-22% DTR) offers the best balance of acidity, sweetness, and body for most brewing methods. Dark roasting Ethiopian beans suppresses origin character and is generally not recommended unless blending for a specific purpose.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What temperature should Ethiopian coffee be roasted at?</h4>
            <p className="text-sm text-gray-600">Charge temperature depends on processing method. Washed Ethiopian coffees perform well with charge temps of 195-205&#176;C (383-400&#176;F). Natural Ethiopian coffees require lower charges of 185-195&#176;C (365-383&#176;F) to prevent scorching the dried fruit sugars on the bean surface. Drop temperatures for filter roasts typically range from 205-215&#176;C (400-419&#176;F).</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Why do Ethiopian beans roast differently than other origins?</h4>
            <p className="text-sm text-gray-600">Three factors: exceptional density from high-altitude cultivation (1,400-2,300m), small and irregular bean size causing uneven heat absorption, and genetic diversity (6,000-10,000 heirloom varieties) that introduces variation within single lots. These physical properties demand lower charge temperatures, careful energy management, and acceptance of the extended, uneven first crack that Ethiopian beans produce.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How long should Ethiopian coffee rest after roasting?</h4>
            <p className="text-sm text-gray-600">Washed Ethiopian filter roasts need at least 5-7 days rest. Natural Ethiopian beans need 7-10 days. Espresso roasts require 10-14 days. Cupping or brewing Ethiopian coffee too soon (under 3 days) produces misleading results. Many roasters find that natural Ethiopian lots peak in flavor between days 10 and 28 post-roast.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Is Ethiopian coffee better light or dark roasted?</h4>
            <p className="text-sm text-gray-600">Ethiopian coffee is best at light to medium roast levels. The origin&apos;s value lies in its complex acidity, floral aromatics, and fruit-forward cup profiles, all of which diminish rapidly as roast level increases. Dark roasting Ethiopian beans wastes the very qualities that command specialty premiums.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How do I avoid scorching Ethiopian coffee beans?</h4>
            <p className="text-sm text-gray-600">Lower your charge temperature (especially for natural processed beans), ensure adequate between-batch cooling so the drum is not carrying residual heat, and avoid sudden energy spikes during the roast. Natural Ethiopian beans are particularly prone to scorching because dried fruit mucilage on the surface caramelizes faster than the clean surface of washed beans.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What roast profile works for Ethiopian natural coffee?</h4>
            <p className="text-sm text-gray-600">Start with a lower charge (185-195&#176;C), apply strong energy during drying, increase airflow at yellowing to clear heavy chaff, maintain a smooth declining RoR through first crack, and target 15-20% DTR. Drop before second crack begins. Total roast time of 8:30-10:30 minutes works well for most natural Ethiopian lots.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Can I roast Ethiopian coffee for espresso?</h4>
            <p className="text-sm text-gray-600">Yes, but adjust your approach. Extend the Maillard phase to build solubility and body, target 22-25% DTR, and drop at 215-220&#176;C (419-428&#176;F) for washed or 210-217&#176;C (410-423&#176;F) for naturals. Natural Guji and Sidamo lots are popular single-origin espresso choices. Rest espresso roasts for at least 10-14 days before dialing in.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Premium Ethiopian Green Coffee for Your Roastery</h4>
        <p className='my-2'>
          At <span className='font-bold'>Ethio Coffee Export PLC</span>, we supply traceable washed and natural specialty lots from Yirgacheffe, Sidamo, Guji, Harrar, and Limu. Request pre-shipment samples with full lot documentation, cupping notes, and roast recommendations included.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Our Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Request Samples</Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>How to Order</Link>
        </div>
      </div>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality &amp; Processing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee Processing</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality Control: Defects &amp; Grading</Link></li>
              <li>&bull; <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup and Evaluate Ethiopian Samples</Link></li>
              <li>&bull; <Link href='/insights/new-sca-coffee-value-assessment' className='text-amber-700 hover:underline'>SCA Coffee Value Assessment Explained</Link></li>
              <li>&bull; <Link href='/insights/decaf-green-coffee-processing-sourcing-guide' className='text-amber-700 hover:underline'>Decaf Green Coffee: Processing &amp; Sourcing Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origins &amp; Varieties</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Green Coffee Origins</Link></li>
              <li>&bull; <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji Compared</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Heirloom Ethiopian Coffee Varieties</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-ceremony' className='text-amber-700 hover:underline'>The Ethiopian Coffee Ceremony</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Pricing for Importers</Link></li>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='text-amber-700 hover:underline'>How to Choose an Ethiopian Coffee Export Company</Link></li>
              <li>&bull; <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline'>Specialty Coffee Storage in Sea Freight</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Market &amp; Industry</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/specialty-coffee-trends-2026' className='text-amber-700 hover:underline'>5 Specialty Coffee Trends Defining 2026</Link></li>
              <li>&bull; <Link href='/insights/rising-ethiopian-coffee-prices-explained' className='text-amber-700 hover:underline'>Rising Ethiopian Coffee Prices Explained</Link></li>
              <li>&bull; <Link href='/insights/selective-coffee-harvesting' className='text-amber-700 hover:underline'>Selective Coffee Harvesting Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Export PLC. This guide is based on practical roasting experience with Ethiopian specialty green coffee across multiple processing methods and regions. Roast parameters are indicative; actual results depend on roaster type, batch size, ambient conditions, and green coffee specifics. For current lot availability, sample requests, or roast recommendations for specific lots, contact our team.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot; <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> &middot; <Link href='/about' className='underline'>About Ethio Coffee</Link> &middot; <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

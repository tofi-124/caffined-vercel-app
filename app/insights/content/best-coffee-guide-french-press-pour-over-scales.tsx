import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { HiOutlineLightBulb, HiOutlineBeaker, HiOutlineQuestionMarkCircle, HiOutlineAdjustmentsHorizontal, HiOutlineFire, HiOutlineClock } from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopianCoffeeBrewProfilesRoastersGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Region-specific extraction parameters for pour-over, espresso, and batch brew
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Precision brewing reveals the full character of Ethiopian single-origin lots across every method.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian coffee brew profiles showing pour-over, espresso, and batch brew equipment for specialty roasters'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Brew Profiles / Roaster Resources / Ethiopian Coffee / Extraction Science</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Key Takeaway:</span> Generic brew recipes underperform with Ethiopian single origins. Each region, processing method, and roast level demands specific adjustments to dose, grind, temperature, and contact time. This Ethiopian coffee brew guide for roasters provides region-by-region parameters for pour-over, espresso, and batch brew, so you can build accurate brew cards for your wholesale accounts and retail customers.</span>
        </p>
      </div>

      {/* INTRODUCTION */}
      <p className='my-4'>
        Ethiopian coffee brew profiles require more precision than most origins. A standard V60 recipe that works for a Brazilian natural or a Colombian washed lot will under-extract a dense, high-altitude Yirgacheffe and over-extract a fruity Guji natural. The difference between a flat, sour cup and one that showcases jasmine, bergamot, or tropical fruit is often 1 degree of water temperature or 2 clicks on the grinder.
      </p>
      <p className='my-4'>
        Most published brew guides target home consumers with one-size-fits-all recipes. That approach fails roasters who need to develop lot-specific parameters for their wholesale cafe accounts and retail packaging. This guide fills that gap: region-by-region extraction parameters for pour-over, espresso, and batch brew, calibrated for the unique density, solubility, and particle behavior of <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Ethiopian heirloom varieties</Link>.
      </p>
      <p className='my-4'>
        Every parameter in this article reflects common ranges observed when brewing specialty-grade Ethiopian lots roasted between 15% and 25% development time ratio (DTR). Adjust based on your specific lot, roast profile, and equipment. Use a refractometer to verify extraction yield and confirm that sensory results match measured data.
      </p>

      {/* WHY ETHIOPIAN COFFEE DEMANDS ORIGIN-SPECIFIC BREW PARAMETERS */}
      <h3 className='text-2xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineAdjustmentsHorizontal className='text-amber-600' />
        Why Ethiopian Coffee Demands Origin-Specific Brew Parameters
      </h3>

      <p className='my-4'>
        Ethiopian coffee grows between 1,400 and 2,300 meters above sea level, producing some of the densest beans in the specialty market. High altitude slows cherry maturation, concentrating sugars and organic acids, but the resulting bean density resists extraction. A Guji lot grown at 2,100 meters requires a finer grind and higher water temperature than a Jimma lot grown at 1,500 meters, even when both are roasted to the same end temperature.
      </p>
      <p className='my-4'>
        Processing method compounds the variation. <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed Ethiopian coffees</Link> have a more uniform cell structure and predictable extraction curve. Natural lots retain fruit sugars on the bean surface, producing a faster initial extraction that can turn astringent if contact time runs too long. Particle distribution also differs: heirloom varieties with mixed screen sizes generate more fines during grinding than uniform cultivars, which explains the &quot;stalling&quot; problem that many roasters report when brewing Ethiopian pour-overs.
      </p>
      <p className='my-4'>
        These variables mean a single brew recipe cannot serve all Ethiopian lots. Understanding the interaction between altitude, processing, variety, and roast level is what separates a recipe that flatters the coffee from one that hides its best qualities.
      </p>

      {/* WATER CHEMISTRY */}
      <h3 className='text-2xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineBeaker className='text-amber-600' />
        Water Chemistry for Ethiopian Coffee Extraction
      </h3>

      <p className='my-4'>
        Water accounts for over 98% of brewed coffee by weight. Its mineral composition determines which flavor compounds extract efficiently and which remain locked in the grounds. For Ethiopian coffees, where the target is often bright acidity and clean floral/fruit notes, water chemistry matters more than with heavier, less acidic origins.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Parameter</th>
              <th className='p-3 text-left'>SCA Standard</th>
              <th className='p-3 text-left'>Recommended for Ethiopian Lots</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Total Dissolved Solids (TDS)</td>
              <td className='p-3'>75-250 mg/L (target 150)</td>
              <td className='p-3'>90-130 mg/L</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Calcium Hardness</td>
              <td className='p-3'>17-85 mg/L</td>
              <td className='p-3'>35-55 mg/L</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Magnesium</td>
              <td className='p-3'>Not specified</td>
              <td className='p-3'>15-25 mg/L</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>pH</td>
              <td className='p-3'>6.5-7.5</td>
              <td className='p-3'>6.8-7.2</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Sodium</td>
              <td className='p-3'>&lt;10 mg/L</td>
              <td className='p-3'>&lt;10 mg/L</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Chlorine</td>
              <td className='p-3'>0 mg/L</td>
              <td className='p-3'>0 mg/L</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Magnesium ions bond more effectively to chlorogenic acids and fruit-forward compounds than calcium does. Ethiopian coffees brewed with magnesium-weighted water (such as Third Wave Water &quot;Classic&quot; or BWT Magnesium Mineralized filters) tend to produce brighter acidity and clearer fruit notes. Calcium-heavy water builds body but can mute the very qualities that make Ethiopian lots distinctive.
      </p>
      <p className='my-4'>
        For quality labs evaluating green samples, standardized water removes a variable that can mask defects or exaggerate positive attributes. BWT-filtered or recipe-built water at 100-120 mg/L TDS provides a reliable baseline for comparing lots. For more on evaluation environment setup, see our <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>cupping and evaluation guide</Link>.
      </p>

      {/* POUR-OVER PARAMETERS BY REGION */}
      <h3 className='text-2xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineAdjustmentsHorizontal className='text-amber-600' />
        Pour-Over Parameters by Ethiopian Region
      </h3>

      <p className='my-4'>
        Pour-over brewing is the most transparent method for showcasing Ethiopian origin character. The paper filter removes oils and sediment, producing clarity that lets floral and citrus notes present without interference. V60 and Kalita Wave are the most common drippers for specialty roasters building retail brew guides. For a broader overview of pour-over and French press equipment, including scale recommendations for home and café use, <a href='https://bestcoffeeguide.com/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>Best Coffee Guide</a> is a useful reference.
      </p>
      <p className='my-4'>
        The parameters below assume a light to light-medium roast (15-20% DTR) and beans rested 7-14 days post-roast. For <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>each Ethiopian origin</Link>, washed and natural processing produce different extraction behavior, so both are listed.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Origin</th>
              <th className='p-3 text-left'>Process</th>
              <th className='p-3 text-left'>Dose / Water</th>
              <th className='p-3 text-left'>Grind</th>
              <th className='p-3 text-left'>Temp (&#176;C)</th>
              <th className='p-3 text-left'>Bloom</th>
              <th className='p-3 text-left'>Total Time</th>
              <th className='p-3 text-left'>Target EY</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline'>Yirgacheffe</Link></td>
              <td className='p-3'>Washed</td>
              <td className='p-3'>15g / 250g</td>
              <td className='p-3'>Medium-fine</td>
              <td className='p-3'>94-96</td>
              <td className='p-3'>40g, 35s</td>
              <td className='p-3'>2:45-3:15</td>
              <td className='p-3'>20-22%</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Yirgacheffe</td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>15g / 240g</td>
              <td className='p-3'>Medium</td>
              <td className='p-3'>92-94</td>
              <td className='p-3'>40g, 30s</td>
              <td className='p-3'>2:30-3:00</td>
              <td className='p-3'>19-21%</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline'>Guji</Link></td>
              <td className='p-3'>Washed</td>
              <td className='p-3'>15g / 250g</td>
              <td className='p-3'>Medium-fine</td>
              <td className='p-3'>94-96</td>
              <td className='p-3'>40g, 35s</td>
              <td className='p-3'>2:45-3:15</td>
              <td className='p-3'>20-22%</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Guji</td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>16g / 250g</td>
              <td className='p-3'>Medium</td>
              <td className='p-3'>92-94</td>
              <td className='p-3'>45g, 30s</td>
              <td className='p-3'>2:30-3:00</td>
              <td className='p-3'>19-21%</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline'>Sidamo</Link></td>
              <td className='p-3'>Washed</td>
              <td className='p-3'>15g / 250g</td>
              <td className='p-3'>Medium-fine</td>
              <td className='p-3'>93-95</td>
              <td className='p-3'>40g, 30s</td>
              <td className='p-3'>2:40-3:10</td>
              <td className='p-3'>19-21%</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Sidamo</td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>16g / 250g</td>
              <td className='p-3'>Medium</td>
              <td className='p-3'>92-94</td>
              <td className='p-3'>45g, 30s</td>
              <td className='p-3'>2:30-3:00</td>
              <td className='p-3'>18-20%</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-harar' className='text-amber-700 hover:underline'>Harar</Link></td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>16g / 250g</td>
              <td className='p-3'>Medium</td>
              <td className='p-3'>92-93</td>
              <td className='p-3'>45g, 30s</td>
              <td className='p-3'>2:30-2:50</td>
              <td className='p-3'>18-20%</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-limu' className='text-amber-700 hover:underline'>Limu</Link></td>
              <td className='p-3'>Washed</td>
              <td className='p-3'>15g / 250g</td>
              <td className='p-3'>Medium-fine</td>
              <td className='p-3'>93-95</td>
              <td className='p-3'>40g, 30s</td>
              <td className='p-3'>2:40-3:10</td>
              <td className='p-3'>19-21%</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-jimma' className='text-amber-700 hover:underline'>Jimma</Link></td>
              <td className='p-3'>Washed</td>
              <td className='p-3'>15g / 240g</td>
              <td className='p-3'>Medium</td>
              <td className='p-3'>93-94</td>
              <td className='p-3'>40g, 30s</td>
              <td className='p-3'>2:30-3:00</td>
              <td className='p-3'>18-20%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-2'>Addressing the Ethiopian Pour-Over Stall</h4>
        <p className='text-sm text-gray-700'>
          Many roasters report that Ethiopian lots stall during V60 pour-overs, with drawdown times exceeding 4 minutes despite using a coarser grind. This happens because heirloom varieties produce a wider particle distribution than uniform cultivars, generating excess fines that clog the paper filter. Two solutions: (1) grind 1-2 settings coarser than your standard recipe and compensate with higher water temperature (95-96&#176;C), or (2) use a flat-bottom dripper like Kalita Wave, which is less sensitive to fines migration. If you are evaluating multiple lots, a Kalita Wave produces more consistent results across the range of Ethiopian screen sizes.
        </p>
      </div>

      {/* ESPRESSO EXTRACTION BY REGION */}
      <h3 className='text-2xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineFire className='text-amber-600' />
        Espresso Extraction by Ethiopian Region
      </h3>

      <p className='my-4'>
        Single-origin Ethiopian espresso has become a signature category for specialty cafes. The challenge is that light-roasted Ethiopian beans resist the short, high-pressure extraction that espresso demands. Under-developed shots taste sour and thin; over-extracted shots turn bitter and lose the floral and fruit character that defines the origin. The key is matching dose, yield, and time to the specific region and processing method.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Origin</th>
              <th className='p-3 text-left'>Process</th>
              <th className='p-3 text-left'>Dose (g)</th>
              <th className='p-3 text-left'>Yield (g)</th>
              <th className='p-3 text-left'>Time (s)</th>
              <th className='p-3 text-left'>Temp (&#176;C)</th>
              <th className='p-3 text-left'>Pressure</th>
              <th className='p-3 text-left'>Target EY</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Yirgacheffe</td>
              <td className='p-3'>Washed</td>
              <td className='p-3'>18-20</td>
              <td className='p-3'>38-44</td>
              <td className='p-3'>28-34</td>
              <td className='p-3'>93-94</td>
              <td className='p-3'>6-9 bar declining</td>
              <td className='p-3'>20-22%</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Yirgacheffe</td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>18-20</td>
              <td className='p-3'>36-42</td>
              <td className='p-3'>26-32</td>
              <td className='p-3'>92-93</td>
              <td className='p-3'>6-9 bar declining</td>
              <td className='p-3'>19-21%</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Guji</td>
              <td className='p-3'>Washed</td>
              <td className='p-3'>18-20</td>
              <td className='p-3'>38-44</td>
              <td className='p-3'>28-34</td>
              <td className='p-3'>93-94</td>
              <td className='p-3'>6-9 bar declining</td>
              <td className='p-3'>20-22%</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Guji</td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>18-20</td>
              <td className='p-3'>36-42</td>
              <td className='p-3'>27-32</td>
              <td className='p-3'>92-93</td>
              <td className='p-3'>6-9 bar declining</td>
              <td className='p-3'>19-21%</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Sidamo</td>
              <td className='p-3'>Washed</td>
              <td className='p-3'>18-20</td>
              <td className='p-3'>36-42</td>
              <td className='p-3'>28-33</td>
              <td className='p-3'>93-94</td>
              <td className='p-3'>6-9 bar declining</td>
              <td className='p-3'>19-21%</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Sidamo</td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>18-20</td>
              <td className='p-3'>36-40</td>
              <td className='p-3'>26-31</td>
              <td className='p-3'>92-93</td>
              <td className='p-3'>6-9 bar declining</td>
              <td className='p-3'>18-20%</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Harar</td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>18-20</td>
              <td className='p-3'>34-40</td>
              <td className='p-3'>26-31</td>
              <td className='p-3'>92-93</td>
              <td className='p-3'>6-9 bar declining</td>
              <td className='p-3'>18-20%</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Limu</td>
              <td className='p-3'>Washed</td>
              <td className='p-3'>18-19</td>
              <td className='p-3'>36-42</td>
              <td className='p-3'>27-32</td>
              <td className='p-3'>93-94</td>
              <td className='p-3'>6-9 bar declining</td>
              <td className='p-3'>19-21%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-2'>Crema and Milk Drink Expectations</h4>
        <p className='text-sm text-gray-700'>
          Light-roasted Ethiopian espresso produces thinner, lighter-colored crema than medium or dark roasts. This is normal and does not indicate extraction failure. The reduced CO2 content in lighter roasts generates less foam. Communicate this to baristas and wholesale accounts so they do not over-extract to &quot;fix&quot; thin crema.
        </p>
        <p className='text-sm text-gray-700 mt-2'>
          For milk drinks, natural Guji and Sidamo lots with 22-25% DTR roast profiles hold up best in 6 oz+ milk volumes. Their inherent fruit sweetness and body cut through steamed milk. Washed Yirgacheffe can taste muted in large lattes but works well in cortados and flat whites where the coffee-to-milk ratio stays above 1:2.
        </p>
      </div>

      {/* BATCH BREW FOR CAFE ACCOUNTS */}
      <h3 className='text-2xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineAdjustmentsHorizontal className='text-amber-600' />
        Batch Brew Parameters for Cafe Accounts
      </h3>

      <p className='my-4'>
        Batch brewing is how most specialty cafes serve drip coffee at volume. Curtis, Fetco, and Marco brewers handle the heavy lifting, but the parameters must be dialed in per lot. Ethiopian coffees present particular challenges for batch brew: their nuanced flavor profiles degrade faster on heat than heavier origins, and their fines-heavy grind distribution affects extraction differently at batch volumes.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Origin</th>
              <th className='p-3 text-left'>Process</th>
              <th className='p-3 text-left'>Dose / Water</th>
              <th className='p-3 text-left'>Grind</th>
              <th className='p-3 text-left'>Temp (&#176;C)</th>
              <th className='p-3 text-left'>Pulse / Continuous</th>
              <th className='p-3 text-left'>Max Hold Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Yirgacheffe / Guji (washed)</td>
              <td className='p-3'>Washed</td>
              <td className='p-3'>65g / 1L</td>
              <td className='p-3'>Medium-coarse</td>
              <td className='p-3'>94-96</td>
              <td className='p-3'>Pulse (3-4 cycles)</td>
              <td className='p-3'>45 min</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Yirgacheffe / Guji (natural)</td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>68g / 1L</td>
              <td className='p-3'>Medium-coarse</td>
              <td className='p-3'>93-95</td>
              <td className='p-3'>Pulse (3-4 cycles)</td>
              <td className='p-3'>30 min</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Sidamo / Limu (washed)</td>
              <td className='p-3'>Washed</td>
              <td className='p-3'>65g / 1L</td>
              <td className='p-3'>Medium-coarse</td>
              <td className='p-3'>93-95</td>
              <td className='p-3'>Continuous or pulse</td>
              <td className='p-3'>45 min</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Sidamo / Harar (natural)</td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>68g / 1L</td>
              <td className='p-3'>Medium-coarse</td>
              <td className='p-3'>93-94</td>
              <td className='p-3'>Pulse (3-4 cycles)</td>
              <td className='p-3'>25-30 min</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg my-6'>
        <h4 className='font-bold text-lg mb-2'>Holding Time: The Hidden Variable</h4>
        <p className='text-sm text-gray-700'>
          Ethiopian naturals degrade on a thermal carafe faster than washed lots. The fruit-forward volatile compounds (particularly esters responsible for berry and stone-fruit notes) dissipate within 25-30 minutes on heat. Washed lots with cleaner flavor profiles hold for 40-45 minutes before noticeable quality loss. If your cafe account uses airpots, recommend a smaller batch frequency with Ethiopian naturals rather than a single large batch. This single adjustment can transform customer perception of the coffee.
        </p>
      </div>

      {/* COLD BREW AND JAPANESE ICED COFFEE */}
      <h3 className='text-2xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineClock className='text-amber-600' />
        Cold Brew and Japanese Iced Coffee
      </h3>

      <p className='my-4'>
        Cold extraction methods handle Ethiopian coffees differently than hot brewing. The absence of heat reduces acid extraction, which can either benefit or flatten the cup depending on the origin and processing method. Roasters who develop seasonal cold brew programs with Ethiopian lots should consider which regions translate best to each method.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Immersion Cold Brew</h4>
      <p className='my-4'>
        Use a coarse grind and a 1:8 ratio (coffee to water by weight) for concentrate, or 1:14 for ready-to-drink strength. Steep at 2-5&#176;C for 16-20 hours. Natural Guji and Sidamo lots perform best in cold brew, producing sweet, fruit-forward concentrates with chocolate undertones. Washed Yirgacheffe cold brew tends toward a tea-like character that works well diluted with sparkling water but may seem thin as a straight serve.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Japanese Iced Pour-Over</h4>
      <p className='my-4'>
        The flash-chill method preserves the bright acidity and floral aromatics that cold immersion mutes. Brew directly onto ice using a 1:16 total ratio (60% hot water, 40% ice). Grind 1 setting finer than your standard V60 recipe for the same lot. Use water at 95-96&#176;C to compensate for thermal loss to ice. Washed Yirgacheffe and Guji lots are exceptional here, producing a bright, aromatic iced coffee that highlights jasmine, citrus, and bergamot notes. Time your cold brew programs to align with <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian harvest seasons</Link> so you are working with fresh-crop lots when summer cold brew demand peaks.
      </p>

      {/* FROM ROAST PROFILE TO BREW RECIPE */}
      <h3 className='text-2xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineFire className='text-amber-600' />
        From Roast Profile to Brew Recipe
      </h3>

      <p className='my-4'>
        Your <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='text-amber-700 hover:underline'>roast profile</Link> directly determines which brew parameters will succeed. Development time ratio (DTR) is the strongest predictor: a light roast with 15% DTR requires fundamentally different extraction conditions than the same green coffee roasted to 25% DTR. The table below maps common roast development ranges to suggested brew adjustments.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>DTR Range</th>
              <th className='p-3 text-left'>Roast Character</th>
              <th className='p-3 text-left'>Grind Adjustment</th>
              <th className='p-3 text-left'>Temp Adjustment</th>
              <th className='p-3 text-left'>Contact Time</th>
              <th className='p-3 text-left'>Extraction Behavior</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>15-18%</td>
              <td className='p-3'>Light (filter roast)</td>
              <td className='p-3'>1-2 steps finer</td>
              <td className='p-3'>95-96&#176;C</td>
              <td className='p-3'>Longer (+15-20s)</td>
              <td className='p-3'>Resistant; needs help</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>18-22%</td>
              <td className='p-3'>Medium (omni roast)</td>
              <td className='p-3'>Standard setting</td>
              <td className='p-3'>93-95&#176;C</td>
              <td className='p-3'>Standard</td>
              <td className='p-3'>Balanced; most forgiving</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>22-25%</td>
              <td className='p-3'>Medium-dark (espresso)</td>
              <td className='p-3'>1-2 steps coarser</td>
              <td className='p-3'>91-93&#176;C</td>
              <td className='p-3'>Shorter (-10-15s)</td>
              <td className='p-3'>Extracts quickly; risk of bitterness</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        When your roast log shows a DTR below 18%, increase water temperature and extend contact time. The dense cell structure of under-developed Ethiopian beans requires both thermal and mechanical help to extract fully. Conversely, a well-developed espresso roast at 23% DTR will over-extract quickly, so use cooler water and a coarser grind to slow the process. This roast-to-brew connection is the most underutilized tool in most roasters&apos; workflow.
      </p>

      {/* BUILDING BREW CARDS */}
      <h3 className='text-2xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineAdjustmentsHorizontal className='text-amber-600' />
        Building Brew Cards for Wholesale Accounts
      </h3>

      <p className='my-4'>
        The best brew parameters mean nothing if your cafe accounts cannot reproduce them consistently. A one-page brew card per lot eliminates the trial-and-error period that frustrates baristas and reduces cafe support calls. Every Ethiopian lot you sell should ship with a brew card tailored to the equipment your accounts use.
      </p>
      <p className='my-4'>
        A strong brew card includes: recipe (dose, ratio, grind reference, water temp, total time), water specifications (target TDS, filtration recommendation), concise tasting notes (3-5 descriptors, not marketing copy), suggested food pairings, and origin information (region, altitude, processing method, farm or cooperative name). Keep the format to a single standard page that baristas can tape near the grinder or batch brewer. If your packaging includes a QR code linking to the lot&apos;s full origin data, the brew card can stay focused on the recipe.
      </p>
      <p className='my-4'>
        Brew cards also create a feedback loop. When an account reports that a lot tastes different from the card description, you know the issue is either a water chemistry mismatch, equipment calibration drift, or a grinder maintenance problem. That diagnostic speed builds trust and retention with wholesale partners.
      </p>

      {/* BEAN AGE INFO BOX */}
      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-2'>Adjusting for Bean Age Post-Roast</h4>
        <p className='text-sm text-gray-700'>
          Ethiopian coffees change extraction behavior as they degas. During days 3-7 post-roast, CO2 is still releasing rapidly, creating resistance to extraction. Grind 1 setting finer and expect longer bloom times. At days 10-14, the coffee reaches peak extractability for most brew methods. By days 21-28, volatile aromatic compounds have diminished, and you may need to grind finer and increase water temperature by 1-2&#176;C to maintain the same cup quality. Update brew cards with a &quot;best by&quot; window (typically 7-21 days post-roast for filter, 10-28 days for espresso) so cafe accounts know when to adjust or rotate stock.
        </p>
      </div>

      {/* FAQ */}
      <section className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h2 className='text-2xl font-extrabold mb-6 flex items-center gap-3'>
          <HiOutlineQuestionMarkCircle className='text-amber-600' /> Frequently Asked Questions
        </h2>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What brew method best showcases Ethiopian coffee for roasters?</h4>
            <p className='text-sm text-gray-600'>Pour-over (V60 or Kalita Wave) provides the highest clarity for evaluating and showcasing Ethiopian origin character. The paper filter removes oils and sediment, letting floral, citrus, and fruit notes present without interference. For volume service, batch brew on a pulse-capable brewer delivers consistent quality.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Why does Ethiopian coffee stall during pour-over brewing?</h4>
            <p className='text-sm text-gray-600'>Ethiopian heirloom varieties produce a wider particle distribution than uniform cultivars during grinding, generating excess fines that clog paper filters. Grind 1-2 settings coarser and compensate with higher water temperature (95-96&#176;C). Flat-bottom drippers like Kalita Wave are less sensitive to this issue than conical V60 drippers.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What espresso ratio works best for Ethiopian single origin?</h4>
            <p className='text-sm text-gray-600'>A 1:2 to 1:2.2 ratio (18g dose, 36-40g yield) in 28-34 seconds produces the best balance for washed Ethiopian lots. Naturals extract faster, so reduce yield to 1:1.8-2.0 and shorten time by 2-3 seconds. Declining pressure profiles (6-9 bar) help prevent channeling in these dense beans.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How should batch brew differ for Ethiopian naturals vs washed?</h4>
            <p className='text-sm text-gray-600'>Increase the dose by 3-5% for naturals (68g/L vs 65g/L) and reduce holding time to 25-30 minutes. Naturals release fruit-forward volatile compounds faster on heat. Washed lots hold 40-45 minutes. Both benefit from pulse brewing (3-4 cycles) rather than continuous pour for even extraction.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What water TDS produces the best Ethiopian coffee extraction?</h4>
            <p className='text-sm text-gray-600'>Target 90-130 mg/L total dissolved solids with a slight magnesium bias (15-25 mg/L) for Ethiopian lots. Magnesium enhances the extraction of chlorogenic acids and fruit-forward compounds. The SCA recommends 75-250 mg/L with a target of 150, but lower TDS produces brighter, cleaner cups with Ethiopian origins.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Ethiopian Coffee Lots with Full Brew Support</h4>
        <p className='my-2'>
          Ethio Coffee Import and Export PLC provides traceable Ethiopian green coffee alongside roast and brew guidance. Request samples from six distinct origins, access current FOB pricing, and receive lot-specific brew parameters with every order.
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
            <h4 className='font-semibold mb-2 text-sm'>Roasting &amp; Processing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='text-amber-700 hover:underline'>How to Roast Ethiopian Coffee Beans</Link></li>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee</Link></li>
              <li>&bull; <Link href='/insights/anaerobic-ethiopian-coffee-processing-buyers-guide' className='text-amber-700 hover:underline'>Anaerobic Ethiopian Coffee Processing</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Dry Milling Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origins &amp; Sourcing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Green Coffee Origins</Link></li>
              <li>&bull; <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Ethiopian Heirloom Coffee Varieties</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Harvest Calendar</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality &amp; Evaluation</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>Cup and Evaluate Ethiopian Coffee Samples</Link></li>
              <li>&bull; <Link href='/insights/new-sca-coffee-value-assessment' className='text-amber-700 hover:underline'>SCA Coffee Value Assessment Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Defects and Quality Control</Link></li>
              <li>&bull; <Link href='/insights/coffee-is-art-roasting-brewing' className='text-amber-700 hover:underline'>Coffee Roasting and Brewing Science</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter with three decades of sourcing heritage. Brew parameters reflect common ranges for specialty-grade Ethiopian lots; always verify with your specific green coffee and roast profile using a refractometer.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot; <Link href='/ethiopian-coffee-exporter' className='underline'>Export Services</Link> &middot; <Link href='/about' className='underline'>About</Link> &middot; <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <span className='font-bold'>External Resource:</span> <a href='https://bestcoffeeguide.com/' target='_blank' rel='noopener noreferrer' className='underline'>Best Coffee Guide</a> &mdash; guides on French press, pour-over methods, and scale recommendations.
        </p>
      </div>
    </>
  )
}

import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function CoffeeIsArtRoastingBrewing({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        How roasting and brewing either reveal or destroy what Ethiopian green coffee offers
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Roasting and brewing are where green coffee potential becomes cup quality, or where it disappears.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Coffee roasting and brewing guide showing green beans transforming into roasted coffee'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-2'>Key Takeaway</p>
        <p>
          Great coffee roasting preserves origin character through controlled heat transfer and precise development timing. Great brewing extracts that character through accurate dose, temperature, and contact time. This coffee roasting and brewing guide covers the principles, profiles, and recipes that connect green coffee sourcing decisions to final cup quality.
        </p>
      </div>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Part of the &quot;Coffee Is&quot; Series:</span>
        <div className='flex flex-wrap gap-2 mt-2'>
          <Link href='/insights/coffee-plant-taxonomy-species-varieties' className='underline text-xs'>1. Plant</Link>
          <Link href='/insights/coffee-is-agriculture-production-farming' className='underline text-xs'>2. Agriculture</Link>
          <Link href='/insights/coffee-is-processing-drying-milling' className='underline text-xs'>3. Processing</Link>
          <Link href='/insights/coffee-is-commerce-exporting-importing-buying' className='underline text-xs'>4. Commerce</Link>
          <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='underline text-xs'>5. Science</Link>
          <span className='bg-dark text-primary px-2 py-1 rounded text-xs'>6. Art (You are here)</span>
        </div>
      </div>

      <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Why Roasting and Brewing Are Where Origin Quality Lives or Dies</h2>
      <p className='my-4'>
        A perfectly sourced Ethiopian lot can fall flat after a careless roast. A flawless green coffee can taste hollow when brewed with the wrong parameters. The gap between potential and result is where the craft of coffee roasting and brewing operates. This sixth installment of the &quot;Coffee Is&quot; series covers the principles that connect green bean quality to cup quality, written for roasters, importers, and green coffee buyers who need both the framework and the practical detail.
      </p>
      <p className='my-4'>
        Every roast curve reflects choices about heat application, airflow, and timing. Every brew recipe balances dose, grind, temperature, and contact time. When these choices align with what the green coffee offers, origin character comes through clearly. When they do not, even specialty-grade lots taste generic.
      </p>
      <p className='my-4'>
        This guide covers roasting science and brewing extraction as a connected system. For compound-level analysis, see <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='underline font-bold'>Coffee Is Science</Link>. For detailed region-specific roast profiles and troubleshooting, see our <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='underline font-bold'>guide to roasting Ethiopian coffee beans</Link>. For how processing shapes what roasters receive, see our <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='underline font-bold'>washed vs natural processing comparison</Link>.
      </p>

      <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>The Science of Coffee Roasting: Heat Transfer and Chemical Change</h2>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>How Heat Reaches the Bean</h3>
      <p className='my-4'>
        Coffee roasting applies heat through three mechanisms, each contributing differently to flavor development:
      </p>
      <ul className='list-disc ml-5 my-4'>
        <li><strong>Conduction:</strong> Direct contact between the bean and the hot drum surface. Responsible for initial charge energy and early moisture removal. Excessive conduction causes scorching (dark marks on the flat side of the bean).</li>
        <li><strong>Convection:</strong> Hot air flowing through the bean mass. The primary driver of even roasting in most drum machines. Adjusting fan speed shifts the balance between conductive and convective heat.</li>
        <li><strong>Radiation:</strong> Infrared energy from the drum walls. A smaller factor in commercial roasting but significant in sample roasters with thin drums and high surface temperatures.</li>
      </ul>
      <p className='my-4'>
        Understanding which mechanism dominates at each stage of the roast helps explain why the same profile produces different results on different machines. Ethiopian coffees, with their high density and small screen sizes, respond especially well to convection-dominant roasting that builds heat gradually.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>The Four Phases of a Roast</h3>
      <p className='my-4'>
        Every roast moves through four distinct phases. Recognizing them in real time is what allows a roaster to make adjustments rather than follow a curve blindly.
      </p>
      <ol className='list-decimal ml-5 my-4'>
        <li className='my-2'><strong>Drying phase (0:00 to ~4:00):</strong> Moisture drops from 10-12% to under 5%. Beans change from green to pale yellow. Grassy aromas dominate. Rushing this phase produces uneven roasts because the interior stays wet while the surface browns.</li>
        <li className='my-2'><strong>Maillard reaction phase (~4:00 to ~7:30):</strong> Sugars and amino acids react to create browning compounds. Bread, caramel, and nut aromas emerge. The rate of rise (RoR) should decelerate steadily through this phase. A stalling RoR produces baked, flat flavors.</li>
        <li className='my-2'><strong>First crack (~7:30 to ~9:30):</strong> Internal pressure causes the bean to crack audibly, releasing steam and CO₂. This is the transition point where coffee becomes drinkable. Most specialty roasts finish within 60 to 120 seconds after crack onset.</li>
        <li className='my-2'><strong>Development phase (post first crack):</strong> The window between first crack and the end of the roast determines the balance between origin character and roast character. Short development (under 60 seconds) preserves acidity and floral aromatics. Longer development (90 to 120 seconds) builds body and sweetness at the expense of brightness.</li>
      </ol>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Reading and Controlling the Roast Curve</h3>
      <p className='my-4'>
        A roast curve plots bean temperature against time. Two metrics matter most for roast profile development:
      </p>
      <ul className='list-disc ml-5 my-4'>
        <li><strong>Bean temperature (BT):</strong> The measured internal temperature of the bean mass. Tracked via a thermocouple probe inserted into the drum. Key milestones include turning point (~150°C), color change (~160°C), first crack (~195-205°C), and drop temperature.</li>
        <li><strong>Rate of rise (RoR):</strong> How fast the bean temperature increases, typically measured in °C per 30 seconds. A healthy RoR declines gradually throughout the roast. A flattening RoR signals potential baking. A rising RoR late in the roast signals potential scorching or crash development.</li>
      </ul>
      <p className='my-4'>
        Profiling software (Cropster, Artisan, Ikawa) records these curves and enables side-by-side comparison across batches. For production consistency, the goal is to replicate the same curve shape within tight tolerances, batch after batch.
      </p>

      <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Roast Levels and What They Mean for Origin Character</h2>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Light, Medium, and Dark: What Each Preserves and Sacrifices</h3>
      <p className='my-4'>
        Roast level determines how much of the green coffee&apos;s inherent character survives into the cup. This matters directly to importers and buyers who evaluate lots by cupping roasted samples.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse border border-gray-300 text-sm'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border border-gray-300 px-4 py-3 text-left font-bold'>Roast Level</th>
              <th className='border border-gray-300 px-4 py-3 text-left font-bold'>Drop Temp Range</th>
              <th className='border border-gray-300 px-4 py-3 text-left font-bold'>Flavor Character</th>
              <th className='border border-gray-300 px-4 py-3 text-left font-bold'>Best Brewing Application</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 px-4 py-3 font-semibold'>Light</td>
              <td className='border border-gray-300 px-4 py-3'>195-205°C</td>
              <td className='border border-gray-300 px-4 py-3'>High acidity, floral and citrus aromatics, tea-like body, origin clarity</td>
              <td className='border border-gray-300 px-4 py-3'>Pour-over, filter, cupping</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-3 font-semibold'>Medium</td>
              <td className='border border-gray-300 px-4 py-3'>210-220°C</td>
              <td className='border border-gray-300 px-4 py-3'>Balanced acidity and sweetness, caramel notes, fuller body, broader appeal</td>
              <td className='border border-gray-300 px-4 py-3'>Versatile (filter, espresso, batch brew)</td>
            </tr>
            <tr>
              <td className='border border-gray-300 px-4 py-3 font-semibold'>Dark</td>
              <td className='border border-gray-300 px-4 py-3'>225-235°C</td>
              <td className='border border-gray-300 px-4 py-3'>Low acidity, bittersweet chocolate, smoky notes, heavy body, roast character dominant</td>
              <td className='border border-gray-300 px-4 py-3'>Espresso blends, milk-based drinks</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        Specialty Ethiopian coffees perform best at light to medium levels where their genetic diversity and terroir express most fully. Pushing a washed Yirgacheffe to second crack destroys the jasmine and bergamot aromatics that justify its premium. A natural Guji at medium roast, however, develops caramelized fruit sweetness that many roasters find ideal for espresso applications.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Development Time Ratio and Its Effect on Flavor Clarity</h3>
      <p className='my-4'>
        Development time ratio (DTR) measures development time as a percentage of total roast time. A DTR of 20-25% is common for specialty light-medium roasts. Below 15%, coffees often taste grassy or underdeveloped. Above 30%, roast character begins to overwhelm origin character.
      </p>
      <p className='my-4'>
        For Ethiopian washed lots, targeting 18-22% DTR preserves the floral and citrus notes buyers expect. For natural processed lots, 22-27% DTR allows the fruit sugars to caramelize fully without tipping into carbon bitterness.
      </p>

      <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Sample Roasting vs. Production Roasting</h2>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Why Sample Roasting Matters for Green Coffee Evaluation</h3>
      <p className='my-4'>
        Before committing to volume, importers and roasters evaluate green coffee through standardized sample roasts. The SCA sample roast protocol targets a light roast (Agtron 58-63 for ground, 63-68 for whole bean) completed in 8 to 12 minutes. The goal is to reveal defects and origin character without imposing roast flavor, ensuring fair comparison across lots.
      </p>
      <p className='my-4'>
        Sample roasters (Ikawa, Probat BRZ, Phocus) use batch sizes of 50g to 300g with tight temperature control. Consistency matters more than creativity at this stage. A sample roast should represent the green coffee honestly so that cupping evaluations reflect bean quality, not roast decisions.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Scaling a Profile from Sample to Production</h3>
      <p className='my-4'>
        Translating a successful 100g sample profile to a 25kg or 50kg production batch is not linear. Larger batch sizes have higher thermal mass, slower heat transfer, and different airflow dynamics. Key adjustments when scaling:
      </p>
      <ul className='list-disc ml-5 my-4'>
        <li><strong>Charge temperature:</strong> Typically 10-20°C higher for production batches to compensate for the thermal mass of a larger load.</li>
        <li><strong>Total roast time:</strong> Production roasts often run 1 to 3 minutes longer than sample roasts at equivalent roast levels.</li>
        <li><strong>Airflow management:</strong> Production drums require more aggressive fan settings to achieve even convective heating across the larger bean mass.</li>
        <li><strong>First crack timing:</strong> Expect first crack 30 to 90 seconds later in production than in sample roasts. Adjust development time relative to crack onset, not absolute time.</li>
      </ul>
      <p className='my-4'>
        The bridge between sample and production is cupping. Roast a production batch, cup it alongside the approved sample roast, and adjust until the flavor profile matches. For guidance on structured cupping evaluation, see our <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='underline font-bold'>cupping and evaluation guide</Link>.
      </p>

      <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Roasting Ethiopian Coffees: Origin-Specific Principles</h2>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Bean Density, Genetic Diversity, and Why Ethiopian Lots Behave Differently</h3>
      <p className='my-4'>
        Ethiopia is the genetic birthplace of Arabica coffee, with thousands of heirloom varieties growing across diverse microclimates. This diversity means Ethiopian lots vary more in density, screen size, and moisture content than coffees from most other origins. High-altitude lots from Yirgacheffe (1,800-2,200 masl) are denser than lowland coffees from Jimma (1,400-1,600 masl), requiring different charge temperatures and heat application rates.
      </p>
      <p className='my-4'>
        Sorting by screen size and density before roasting improves consistency. Mixed sizes roast unevenly because smaller beans absorb heat faster. Our lots arrive with detailed physical analysis so your roast planning starts with accurate data.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Washed vs. Natural: How Processing Shapes Roast Approach</h3>
      <p className='my-4'>
        Processing method is the single biggest factor after roast level in determining how Ethiopian coffee tastes. Washed and natural lots from the same region require fundamentally different roast strategies:
      </p>
      <ul className='list-disc ml-5 my-4'>
        <li><strong>Washed coffees</strong> (Yirgacheffe, Limu, parts of Sidamo): Higher density, lower sugar content at the surface, and more uniform moisture. Roast with a gentle, extended drying phase and short development (60-90 seconds post first crack). Preserve floral aromatics by avoiding aggressive late-stage heat.</li>
        <li><strong>Natural coffees</strong> (Guji, Harar, Sidamo): More surface sugar from fruit fermentation, slightly lower density, and less uniform moisture. Tolerate longer development (90-120 seconds). The additional sugars caramelize well, creating fruit-forward sweetness. Watch for scorching since the surface sugars burn easily at high charge temperatures.</li>
      </ul>
      <p className='my-4'>
        For a comprehensive breakdown of how processing affects all dimensions of the cup, see our <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='underline font-bold'>washed vs natural Ethiopian coffee guide</Link>. For region-by-region roast profiles with specific temperature targets, see the <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='underline font-bold'>complete roasting guide</Link>.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Region Profiles at a Glance</h3>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse border border-gray-300 text-sm'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border border-gray-300 px-4 py-3 text-left font-bold'>Region</th>
              <th className='border border-gray-300 px-4 py-3 text-left font-bold'>Typical Processing</th>
              <th className='border border-gray-300 px-4 py-3 text-left font-bold'>Roast Sweet Spot</th>
              <th className='border border-gray-300 px-4 py-3 text-left font-bold'>Key Flavor Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 px-4 py-3 font-semibold'><Link href='/ethiopian-coffee-yirgacheffe' className='underline'>Yirgacheffe</Link></td>
              <td className='border border-gray-300 px-4 py-3'>Washed</td>
              <td className='border border-gray-300 px-4 py-3'>Light to light-medium</td>
              <td className='border border-gray-300 px-4 py-3'>Jasmine, bergamot, lemon, tea-like body</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-3 font-semibold'><Link href='/ethiopian-coffee-guji' className='underline'>Guji</Link></td>
              <td className='border border-gray-300 px-4 py-3'>Natural / Washed</td>
              <td className='border border-gray-300 px-4 py-3'>Light-medium to medium</td>
              <td className='border border-gray-300 px-4 py-3'>Blueberry, peach, dark chocolate, syrupy body</td>
            </tr>
            <tr>
              <td className='border border-gray-300 px-4 py-3 font-semibold'><Link href='/ethiopian-coffee-sidamo' className='underline'>Sidamo</Link></td>
              <td className='border border-gray-300 px-4 py-3'>Washed / Natural</td>
              <td className='border border-gray-300 px-4 py-3'>Light to medium</td>
              <td className='border border-gray-300 px-4 py-3'>Berry, stone fruit, honey sweetness</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-3 font-semibold'><Link href='/ethiopian-coffee-harar' className='underline'>Harar</Link></td>
              <td className='border border-gray-300 px-4 py-3'>Natural</td>
              <td className='border border-gray-300 px-4 py-3'>Medium</td>
              <td className='border border-gray-300 px-4 py-3'>Wine, dried fruit, mocha, full body</td>
            </tr>
            <tr>
              <td className='border border-gray-300 px-4 py-3 font-semibold'><Link href='/ethiopian-coffee-limu' className='underline'>Limu</Link></td>
              <td className='border border-gray-300 px-4 py-3'>Washed</td>
              <td className='border border-gray-300 px-4 py-3'>Light-medium</td>
              <td className='border border-gray-300 px-4 py-3'>Citrus, spice, balanced acidity, clean finish</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        For a detailed comparison of how these regions differ in cup profile, altitude, and sourcing considerations, see our <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='underline font-bold'>Yirgacheffe vs Sidamo vs Guji comparison</Link>.
      </p>

      <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>The Fundamentals of Coffee Extraction</h2>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>What Extraction Means and Why 18-22% Is the Target</h3>
      <p className='my-4'>
        Coffee extraction is the process of dissolving soluble compounds from ground coffee into water. Roasted coffee is roughly 30% soluble, but extracting all of it produces an undrinkable cup. The Specialty Coffee Association defines the optimal range as 18-22% extraction yield, where acids, sugars, and bitter compounds balance for a clean, sweet, and complex cup.
      </p>
      <p className='my-4'>
        Below 18%, cups taste sour, thin, and lack sweetness because acids dissolve first and sugars have not fully extracted. Above 22%, bitter and astringent compounds dominate because they dissolve last and overpower the balance. A refractometer and brewing chart allow precise measurement, but trained tasters can identify extraction problems by flavor alone.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>The Variables That Control Extraction</h3>
      <p className='my-4'>
        Five variables determine extraction rate and evenness. Adjusting any one of them shifts the balance:
      </p>
      <ul className='list-disc ml-5 my-4'>
        <li><strong>Dose (coffee amount):</strong> More coffee relative to water reduces extraction percentage. Standard ratios range from 1:15 to 1:17 for filter and 1:2 for espresso.</li>
        <li><strong>Grind size:</strong> Finer grinds increase surface area and speed extraction. Espresso requires fine grinds (200-400 microns); pour-over uses medium (400-800 microns); French press uses coarse (800-1,200 microns).</li>
        <li><strong>Water temperature:</strong> Higher temperatures extract faster. The SCA recommends 92-96°C for most methods. Light roasts often benefit from higher temperatures (95-96°C) because their denser cell structure resists extraction.</li>
        <li><strong>Contact time:</strong> Longer contact time increases extraction. Espresso extracts in 25-30 seconds under pressure; pour-over in 2:30-3:30; French press in 4:00-5:00.</li>
        <li><strong>Agitation:</strong> Stirring, pouring technique, and turbulence affect how evenly water contacts the coffee bed. Consistent pour patterns in pour-over produce more even extraction than erratic pouring.</li>
      </ul>
      <p className='my-4'>
        For hands-on recipes that apply these variables to specific Ethiopian regions and processing methods, including pour-over, espresso, and batch brew parameters, see our <Link href='/insights/best-coffee-guide-french-press-pour-over-scales' className='text-amber-700 hover:underline'>Ethiopian coffee brew profiles for roasters</Link>.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Water Chemistry: Mineral Content and Flavor Impact</h3>
      <p className='my-4'>
        Water makes up over 98% of brewed coffee. Its mineral composition directly affects extraction efficiency and cup flavor. The SCA Water Quality Standard recommends 75-250 mg/L total dissolved solids, with an ideal target near 150 mg/L. Calcium and magnesium ions bond to flavor compounds during extraction; too few minerals produce flat, under-extracted cups while too many create harsh, chalky flavors.
      </p>
      <p className='my-4'>
        For buyers evaluating green coffee quality, consistent water chemistry during sample preparation removes a variable that can mask or exaggerate defects. Many quality labs use Third Wave Water or BWT-filtered water to standardize evaluation conditions.
      </p>

      <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Brewing Methods and When to Use Them</h2>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Pour-Over (V60): Clarity and Origin Expression</h3>
      <p className='my-4'>
        Pour-over brewing excels at showcasing origin character, making it the preferred method for evaluating single-origin Ethiopian coffees beyond formal cupping. The thin paper filter removes oils and fines, producing a clean cup where floral, citrus, and fruit notes present with high clarity.
      </p>
      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-2'>V60 Recipe for Ethiopian Coffees</h4>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'><span className='font-bold'>Dose:</span> 16g coffee, 250g water (1:15.6 ratio)</li>
          <li className='my-2'><span className='font-bold'>Grind:</span> Medium-fine (salt texture)</li>
          <li className='my-2'><span className='font-bold'>Temperature:</span> 94-96°C</li>
          <li className='my-2'><span className='font-bold'>Bloom:</span> 40g water, 30 seconds</li>
          <li className='my-2'><span className='font-bold'>Pours:</span> Three equal pours at 0:30, 1:00, and 1:30</li>
          <li className='my-2'><span className='font-bold'>Total time:</span> 2:30 to 3:00</li>
          <li className='my-2'><span className='font-bold'>Target extraction:</span> 19-21%</li>
        </ul>
      </div>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Espresso: Concentration and Intensity</h3>
      <p className='my-4'>
        Espresso brewing concentrates flavors through high pressure (9 bars) and fine grind, producing a dense shot where sweetness, acidity, and body are amplified. Ethiopian single-origin espressos are increasingly popular, with natural Guji and Sidamo lots performing well as both straight shots and milk-based drinks.
      </p>
      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-2'>Espresso Recipe for Ethiopian Coffees</h4>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'><span className='font-bold'>Dose:</span> 18g in</li>
          <li className='my-2'><span className='font-bold'>Yield:</span> 36-40g out (1:2 to 1:2.2 ratio)</li>
          <li className='my-2'><span className='font-bold'>Time:</span> 25-30 seconds</li>
          <li className='my-2'><span className='font-bold'>Temperature:</span> 93-94°C</li>
          <li className='my-2'><span className='font-bold'>Pressure:</span> 9 bars</li>
          <li className='my-2'><span className='font-bold'>Adjust:</span> Grind finer for more body and sweetness; coarser for more acidity and clarity</li>
        </ul>
      </div>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Immersion Methods: Body and Sweetness</h3>
      <p className='my-4'>
        French press and cold brew use extended contact time with coarse grinds to produce full-bodied, rounded cups. These methods work well for Ethiopian naturals where the fruit-forward sweetness benefits from longer extraction.
      </p>
      <ul className='list-disc ml-5 my-4'>
        <li><strong>French press:</strong> 30g coffee, 500g water at 94°C, coarse grind, steep 4:00, plunge slowly. Produces a heavy, oily cup that amplifies body and sweetness.</li>
        <li><strong>Cold brew:</strong> 100g coffee, 800g cold water (1:8 ratio), coarse grind, steep 16-18 hours at room temperature, filter and dilute 1:1 to taste. Produces a smooth, low-acid concentrate that highlights chocolate and fruit notes.</li>
        <li><strong>AeroPress:</strong> 18g coffee, 220g water at 92°C, medium-fine grind, 1:30-1:45 total time. Inverted method for fuller body. A versatile, portable option for quick evaluation outside the lab.</li>
      </ul>

      <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Troubleshooting Roast and Brew Defects</h2>
      <p className='my-4'>
        When a cup does not taste right, the cause is either a roast defect, a brew defect, or a green coffee defect. Being able to identify which one saves time and prevents misattributing the problem.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Common Roast Defects and Fixes</h3>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse border border-gray-300 text-sm'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border border-gray-300 px-4 py-3 text-left font-bold'>Defect</th>
              <th className='border border-gray-300 px-4 py-3 text-left font-bold'>Cup Flavor</th>
              <th className='border border-gray-300 px-4 py-3 text-left font-bold'>Likely Cause</th>
              <th className='border border-gray-300 px-4 py-3 text-left font-bold'>Fix</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 px-4 py-3 font-semibold'>Underdeveloped</td>
              <td className='border border-gray-300 px-4 py-3'>Sour, grassy, peanutty</td>
              <td className='border border-gray-300 px-4 py-3'>Too short development time; dropped before sugars caramelized</td>
              <td className='border border-gray-300 px-4 py-3'>Extend development 15-30 seconds; raise end temperature slightly</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-3 font-semibold'>Baked</td>
              <td className='border border-gray-300 px-4 py-3'>Flat, bread-like, dull</td>
              <td className='border border-gray-300 px-4 py-3'>RoR stalled mid-roast; too-low heat during Maillard phase</td>
              <td className='border border-gray-300 px-4 py-3'>Maintain declining but positive RoR; avoid reducing gas too aggressively</td>
            </tr>
            <tr>
              <td className='border border-gray-300 px-4 py-3 font-semibold'>Scorched</td>
              <td className='border border-gray-300 px-4 py-3'>Burnt, ashy, bitter</td>
              <td className='border border-gray-300 px-4 py-3'>Excessive charge temperature; too much conductive heat early</td>
              <td className='border border-gray-300 px-4 py-3'>Lower charge temperature 10-15°C; increase airflow for more convective heat</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-3 font-semibold'>Overdeveloped</td>
              <td className='border border-gray-300 px-4 py-3'>Bitter, carbon, hollow</td>
              <td className='border border-gray-300 px-4 py-3'>Too long past first crack; pushed to or past second crack</td>
              <td className='border border-gray-300 px-4 py-3'>Reduce development time; drop earlier</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Common Brew Defects and Fixes</h3>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse border border-gray-300 text-sm'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border border-gray-300 px-4 py-3 text-left font-bold'>Problem</th>
              <th className='border border-gray-300 px-4 py-3 text-left font-bold'>Cup Flavor</th>
              <th className='border border-gray-300 px-4 py-3 text-left font-bold'>Likely Cause</th>
              <th className='border border-gray-300 px-4 py-3 text-left font-bold'>Fix</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 px-4 py-3 font-semibold'>Under-extracted</td>
              <td className='border border-gray-300 px-4 py-3'>Sour, thin, weak sweetness</td>
              <td className='border border-gray-300 px-4 py-3'>Grind too coarse, water too cool, or contact time too short</td>
              <td className='border border-gray-300 px-4 py-3'>Grind finer; raise temperature; extend brew time</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-3 font-semibold'>Over-extracted</td>
              <td className='border border-gray-300 px-4 py-3'>Bitter, astringent, dry</td>
              <td className='border border-gray-300 px-4 py-3'>Grind too fine, water too hot, or contact time too long</td>
              <td className='border border-gray-300 px-4 py-3'>Grind coarser; lower temperature; shorten brew time</td>
            </tr>
            <tr>
              <td className='border border-gray-300 px-4 py-3 font-semibold'>Channeling (espresso)</td>
              <td className='border border-gray-300 px-4 py-3'>Uneven, simultaneously sour and bitter</td>
              <td className='border border-gray-300 px-4 py-3'>Uneven puck preparation; water finds paths of least resistance</td>
              <td className='border border-gray-300 px-4 py-3'>Distribute and tamp evenly; use WDT tool; check basket condition</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-3 font-semibold'>Flat / Lifeless</td>
              <td className='border border-gray-300 px-4 py-3'>Muted, dull, no aroma</td>
              <td className='border border-gray-300 px-4 py-3'>Stale coffee (too many days post-roast) or poor water chemistry</td>
              <td className='border border-gray-300 px-4 py-3'>Use coffee within 5-28 days of roast; check water mineral content</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Frequently Asked Questions</h2>
      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>What temperature should I roast Ethiopian coffee at?</h3>
      <p className='my-4'>
        Charge between 170°C and 190°C for most Ethiopian lots. Target first crack around 8:30 to 9:30 minutes. For washed coffees, keep development short (60 to 90 seconds) to preserve floral acidity. Natural lots tolerate longer development for fruit caramelization.
      </p>
      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>How does grind size affect coffee extraction?</h3>
      <p className='my-4'>
        Finer grinds increase surface area and accelerate extraction, producing stronger cups. Coarser grinds slow extraction, yielding lighter and cleaner flavors. Match grind to method: fine for espresso (200-400 microns), medium for pour-over (400-800 microns), coarse for French press (800-1,200 microns).
      </p>
      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>What is the ideal water temperature for brewing coffee?</h3>
      <p className='my-4'>
        The SCA recommends 92°C to 96°C for most methods. Temperatures below this range under-extract, producing sour and thin cups. Temperatures above it over-extract, pulling harsh and bitter compounds. Light roasts often perform better at the higher end of this range.
      </p>
      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>What is development time in coffee roasting?</h3>
      <p className='my-4'>
        Development time is the interval between first crack and the end of the roast. It typically ranges from 60 to 120 seconds for light to medium roasts. Shorter development preserves acidity and floral aromatics. Longer development builds body and sweetness but can mute delicate origin character.
      </p>
      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>How do I know if my coffee is over-extracted or under-extracted?</h3>
      <p className='my-4'>
        Under-extracted coffee tastes sour, thin, and lacks sweetness. Over-extracted coffee tastes bitter, astringent, and dry. A balanced cup has clear acidity, pleasant sweetness, and smooth body. Use a refractometer to target 18-22% extraction, or adjust by taste using grind size and brew time.
      </p>

      <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>The Complete &quot;Coffee Is&quot; Series</h2>
      <p className='my-4'>
        You&apos;ve reached the final chapter of our six-part educational series. Roasting and brewing are where everything upstream, from genetics and agriculture to processing and commerce, becomes tangible in the cup. To explore the full journey from seed to cup:
      </p>
      <ul className='list-disc ml-5 my-4'>
        <li><Link href='/insights/coffee-plant-taxonomy-species-varieties' className='underline font-bold'>Coffee Is A Plant</Link> — Botanical foundations and genetic diversity</li>
        <li><Link href='/insights/coffee-is-agriculture-production-farming' className='underline font-bold'>Coffee Is Agriculture</Link> — From soil science to harvest</li>
        <li><Link href='/insights/coffee-is-processing-drying-milling' className='underline font-bold'>Coffee Is Processing</Link> — Cherry to exportable green bean</li>
        <li><Link href='/insights/coffee-is-commerce-exporting-importing-buying' className='underline font-bold'>Coffee Is Commerce</Link> — Global trade networks and logistics</li>
        <li><Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='underline font-bold'>Coffee Is Science</Link> — Chemistry and evaluation methods</li>
        <li><span className='font-bold'>Coffee Is Art</span> — Roasting and brewing mastery (you are here)</li>
      </ul>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Premium Ethiopian Coffee Direct from Origin</h4>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Import and Export PLC</span> supplies specialty-grade Ethiopian green coffee with full traceability, cupping notes, and roast profile guidance. Our lots arrive with physical analysis data so your roasting and brewing decisions start from solid ground. Request samples to evaluate our current offerings before committing to volume.
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
            <h4 className='font-semibold mb-2 text-sm'>Coffee Journey Series</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/coffee-plant-taxonomy-species-varieties' className='text-amber-700 hover:underline'>Coffee Is A Plant: Taxonomy, Species & Varieties</Link></li>
              <li>• <Link href='/insights/coffee-is-agriculture-production-farming' className='text-amber-700 hover:underline'>Coffee Is Agriculture: Production & Farming</Link></li>
              <li>• <Link href='/insights/coffee-is-processing-drying-milling' className='text-amber-700 hover:underline'>Coffee Is Processing: Drying & Milling</Link></li>
              <li>• <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='text-amber-700 hover:underline'>Coffee Is Science: Analysis & Evaluation</Link></li>
              <li>• <Link href='/insights/coffee-is-commerce-exporting-importing-buying' className='text-amber-700 hover:underline'>Coffee Is Commerce: Exporting & Importing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Roasting & Brewing</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='text-amber-700 hover:underline'>Guide to Roasting Ethiopian Coffee Beans</Link></li>
              <li>• <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup & Evaluate Ethiopian Coffee Samples</Link></li>
              <li>• <Link href='/insights/how-to-make-coffee-without-a-coffeemaker' className='text-amber-700 hover:underline'>How to Make Coffee Without a Coffeemaker</Link></li>
              <li>• <Link href='/insights/best-coffee-guide-french-press-pour-over-scales' className='text-amber-700 hover:underline'>Best Coffee Guide: French Press, Pour-Over & Scales</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origins & Quality</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji Comparison</Link></li>
              <li>• <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee Processing</Link></li>
              <li>• <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Complete Guide to Ethiopian Coffee Origins</Link></li>
              <li>• <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline'>Green Coffee Shelf Life & Storage Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing & Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='text-amber-700 hover:underline'>How to Choose an Ethiopian Coffee Exporter</Link></li>
              <li>• <Link href='/insights/micro-lot-ethiopian-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Micro-Lot Ethiopian Coffee Sourcing Guide</Link></li>
              <li>• <Link href='/insights/top-10-specialty-coffee-shops-world' className='text-amber-700 hover:underline'>Top 10 Specialty Coffee Shops in the World</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC based on industry roasting and brewing standards, SCA protocols, and three decades of Ethiopian coffee sourcing heritage. Roast profiles and brewing parameters are general guidelines; always verify with sample roasts and cupping. <Link href='/contact-us' className='underline'>Contact us</Link> for current lot availability, cupping notes, and roast profile suggestions.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

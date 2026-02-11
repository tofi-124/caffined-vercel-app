import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function HowToRoastEthiopianCoffeeGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Roast profiles, development strategies, and practical tips for Ethiopian green coffee
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Ethiopian coffees reward careful roasting. The right profile preserves the floral, fruity, and citrus characteristics that make these beans some of the most prized in the specialty market.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Coffee roaster monitoring Ethiopian green coffee beans during a light roast profile with temperature probe visible'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <p className='my-4'>
        Ethiopian coffee is among the most complex and rewarding to roast, and among the easiest to ruin.
        The same beans that produce jasmine, bergamot, and peach notes under a careful light profile can taste flat, ashy, or baked if the roast goes wrong.
      </p>

      <p className='my-4'>
        This guide is written for roasters who buy Ethiopian green coffee and want to get the most out of it.
        Whether you are roasting washed Yirgacheffe for pour-over or natural Guji for espresso, the principles here will help you build profiles that preserve origin character, manage development consistently, and avoid the most common mistakes.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Why Ethiopian Coffee Roasts Differently
      </h3>
      <p className='my-4'>
        Before diving into profiles, it helps to understand what makes Ethiopian green coffee behave differently in the roaster compared to beans from Central America, Brazil, or Indonesia.
      </p>

      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>
          <span className='font-bold'>High density:</span> Most Ethiopian specialty coffee grows between 1,700 and 2,300 meters. The resulting beans are dense and hard, which means they absorb heat more slowly at the start and require careful charge temperature management
        </li>
        <li className='my-2'>
          <span className='font-bold'>High sugar content:</span> Slow ripening at altitude produces beans with more complex sugars. These sugars caramelize during roasting and contribute to sweetness, but they also burn easily if development goes too far
        </li>
        <li className='my-2'>
          <span className='font-bold'>Volatile aromatic precursors:</span> Ethiopian beans contain more volatile aromatic compounds than most other origins. These compounds create the floral and fruity notes the beans are famous for, but they degrade quickly at high temperatures or with extended roast times
        </li>
        <li className='my-2'>
          <span className='font-bold'>Small, irregular bean size:</span> Ethiopian heirloom varieties often produce smaller and less uniform beans than cultivated varieties from other countries. This means heat transfer is less even across the batch, requiring more attention to airflow and drum speed
        </li>
      </ul>

      <p className='my-4'>
        The key takeaway: Ethiopian beans reward patience and precision. Aggressive heat application destroys exactly the qualities that make these coffees valuable.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Roast Profile Fundamentals for Ethiopian Coffee
      </h3>
      <p className='my-4'>
        Every roast profile can be broken into three phases: drying, Maillard (browning), and development.
        The balance between these phases determines whether your Ethiopian coffee tastes clean and vibrant or dull and roasty.
      </p>

      <h4 className='text-xl font-bold mt-6'>Phase 1: Drying (0 to Yellowing)</h4>
      <p className='my-4'>
        The drying phase removes free moisture from the bean.
        For dense Ethiopian beans, this phase typically takes 4 to 5 minutes in a standard drum roaster.
        Start with a moderate charge temperature (around 190 to 200 degrees Celsius for a 5 to 12 kg batch) to avoid scorching the outer surface while the interior is still cold.
      </p>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>Watch the turning point carefully. Dense beans may take 15 to 30 seconds longer to hit the turn than lower-altitude coffees</li>
        <li className='my-2'>Avoid blasting heat to speed up drying. This creates a temperature differential between the outer and inner bean that leads to tipping and uneven development later</li>
      </ul>

      <h4 className='text-xl font-bold mt-6'>Phase 2: Maillard / Browning (Yellowing to First Crack)</h4>
      <p className='my-4'>
        This is where amino acids and sugars react to create the brown color, body, and caramelized sweetness of roasted coffee.
        For Ethiopian beans, this phase should take roughly 4 to 6 minutes.
        A steady rate of rise (RoR) of 8 to 12 degrees Celsius per minute during this phase gives the best results.
      </p>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>If the RoR is too high, you will race through Maillard and lose sweetness. The cup will taste sharp, grassy, and underdeveloped</li>
        <li className='my-2'>If the RoR is too low or stalls, the roast bakes. Baked Ethiopian coffee loses all vibrancy and tastes flat, papery, and dull</li>
        <li className='my-2'>Begin reducing heat input gradually as you approach first crack. A declining RoR curve (not a crash) is the goal</li>
      </ul>

      <h4 className='text-xl font-bold mt-6'>Phase 3: Development (First Crack to Drop)</h4>
      <p className='my-4'>
        Development time after first crack is the most critical variable for Ethiopian coffee.
        This is where you decide how much of the origin character to preserve versus how much roast character to add.
      </p>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'><span className='font-bold'>Light roast (City):</span> 45 to 75 seconds after first crack starts. Preserves the most floral and citrus notes. Best for washed Yirgacheffe and high-altitude washed lots intended for pour-over</li>
        <li className='my-2'><span className='font-bold'>Light-medium (City+):</span> 75 to 100 seconds. Adds a bit more body and sweetness while retaining fruit character. Works well for both filter and light espresso</li>
        <li className='my-2'><span className='font-bold'>Medium (Full City-):</span> 100 to 130 seconds. Shifts the balance toward chocolate and caramel with muted florals. Suitable for natural processed Ethiopians destined for espresso</li>
      </ul>

      <div className='bg-amber-100 p-6 rounded-lg my-8'>
        <h4 className='font-bold text-xl mb-2'>Development Time Ratio (DTR)</h4>
        <p className='my-2'>
          A useful benchmark is the development time ratio: the percentage of total roast time spent after first crack.
          For Ethiopian coffees, aim for 18 to 22 percent DTR for light roasts and up to 25 percent for medium.
          Below 15 percent often results in sour, underdeveloped cups. Above 28 percent tends to overwhelm origin character with roast flavor.
        </p>
        <p className='text-sm text-gray-600 mt-3 italic'>
          DTR is a guideline, not a rule. Taste the results and adjust based on your specific roaster, batch size, and the particular lot.
        </p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Roasting Washed vs Natural Ethiopian Coffee
      </h3>
      <p className='my-4'>
        Processing method significantly changes how you should approach the roast.
        The same bean from the same washing station will behave differently as a washed lot versus a natural.
        For a full breakdown of how these processing methods affect flavor, see our guide on{' '}
        <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='underline font-bold'>
          washed vs natural Ethiopian coffee processing
        </Link>.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse border border-gray-300 font-inconsolata text-sm'>
          <thead className='bg-dark text-primary'>
            <tr>
              <th className='border border-gray-300 p-3 text-left'>Factor</th>
              <th className='border border-gray-300 p-3 text-left'>Washed Ethiopian</th>
              <th className='border border-gray-300 p-3 text-left'>Natural Ethiopian</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Charge temperature</td>
              <td className='border border-gray-300 p-3'>Standard (190 to 200 C)</td>
              <td className='border border-gray-300 p-3'>Slightly lower (185 to 195 C) to prevent sugar scorching</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Drying phase</td>
              <td className='border border-gray-300 p-3'>Standard duration</td>
              <td className='border border-gray-300 p-3'>Extended slightly due to residual sugars on bean surface</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Maillard phase</td>
              <td className='border border-gray-300 p-3'>Steady, moderate RoR</td>
              <td className='border border-gray-300 p-3'>Slightly lower RoR to avoid sugar carbonization</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>First crack</td>
              <td className='border border-gray-300 p-3'>Distinct, audible</td>
              <td className='border border-gray-300 p-3'>Can be quieter and harder to identify due to sugar coating</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Development time</td>
              <td className='border border-gray-300 p-3'>45 to 90 seconds (preserve florals and citrus)</td>
              <td className='border border-gray-300 p-3'>60 to 120 seconds (balance fruit intensity with sweetness)</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Airflow</td>
              <td className='border border-gray-300 p-3'>Standard</td>
              <td className='border border-gray-300 p-3'>Increased to prevent scorching from caramelizing sugars</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Target roast level</td>
              <td className='border border-gray-300 p-3'>City to City+ (light)</td>
              <td className='border border-gray-300 p-3'>City+ to Full City- (light-medium)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        The most common mistake with natural Ethiopians is roasting them the same as washed lots.
        Naturals have higher sugar content on the bean surface from dried cherry contact, which means they brown faster and are more prone to scorching.
        Lower your charge temperature, reduce heat earlier, and increase airflow to compensate.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Roasting Ethiopian Coffee for Espresso vs Filter
      </h3>
      <p className='my-4'>
        The intended brew method should influence your roast profile.
        Ethiopian coffee works beautifully for both espresso and filter, but the approach differs.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>For Filter (Pour-Over, Batch Brew)</h4>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'>Target roast level: City to City+</li>
          <li className='my-2'>Prioritize acidity, clarity, and floral/citrus aromatics</li>
          <li className='my-2'>Keep development time short (45 to 80 seconds post first crack)</li>
          <li className='my-2'>A lighter roast allows the extraction process to highlight origin complexity</li>
          <li className='my-2'>Best origins: Washed Yirgacheffe, washed Sidama, high-altitude washed Guji</li>
        </ul>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>For Espresso</h4>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'>Target roast level: City+ to Full City-</li>
          <li className='my-2'>Prioritize body, sweetness, and balanced acidity (too light will taste sour under pressure)</li>
          <li className='my-2'>Extend development time slightly (80 to 120 seconds) for better solubility</li>
          <li className='my-2'>Consider a slightly higher end temperature (5 to 8 degrees C above your filter profile)</li>
          <li className='my-2'>Best origins: Natural Guji, natural Sidama, washed Guji (for a bright, fruity shot)</li>
        </ul>
      </div>

      <p className='my-4'>
        Many specialty roasters now offer "omni-roast" Ethiopian profiles that work for both filter and espresso.
        These typically land at City+ with 20 to 22 percent DTR, giving enough development for espresso extraction while preserving enough origin character for a clean pour-over.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Region-Specific Roasting Recommendations
      </h3>
      <p className='my-4'>
        Different Ethiopian regions produce beans with different densities, sugar levels, and flavor tendencies.
        Here are starting-point profiles for the major origins.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Yirgacheffe</h4>
        <p className='my-2'>
          <span className='font-bold'>Character:</span> Floral, jasmine, bergamot, lemon, tea-like body.
          <span className='font-bold'> Roast approach:</span> Light. These coffees are prized for delicacy, and over-roasting destroys exactly what buyers are paying for.
          Drop early (City to City+). Keep DTR around 18 to 20 percent.
          If the jasmine notes disappear, you have gone too far.
        </p>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Guji</h4>
        <p className='my-2'>
          <span className='font-bold'>Character:</span> Stone fruit, peach, complex acidity, syrupy body.
          <span className='font-bold'> Roast approach:</span> Light to light-medium. Guji beans are among the densest Ethiopian coffees and can handle slightly more heat without losing character.
          They make excellent espresso at City+. Naturals from Guji benefit from 10 to 15 seconds more development than washed to balance fruit intensity.
        </p>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Sidama</h4>
        <p className='my-2'>
          <span className='font-bold'>Character:</span> Berry, citrus, sugar cane, medium body.
          <span className='font-bold'> Roast approach:</span> Light to medium, depending on processing. Washed Sidama performs beautifully at City.
          Natural Sidama (famous for blueberry notes) needs careful heat control to preserve fruit without creating ferment-like flavors.
          Aim for City+ with increased airflow.
        </p>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Harrar</h4>
        <p className='my-2'>
          <span className='font-bold'>Character:</span> Dried fruit, wine, cocoa, spice.
          <span className='font-bold'> Roast approach:</span> Medium. Harrar is traditionally natural processed and has a bolder, heavier profile.
          These coffees can handle more development (Full City-) without losing their identity.
          A slightly darker roast deepens the chocolate and wine notes that define this origin.
        </p>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Limu and Jimma</h4>
        <p className='my-2'>
          <span className='font-bold'>Character:</span> Citrus, cocoa, spice, fuller body.
          <span className='font-bold'> Roast approach:</span> Medium. These mid-altitude coffees have more body and less acidity than Yirgacheffe or Guji.
          They work well at City+ to Full City- and perform particularly well in blends where they add sweetness and body without overpowering other components.
        </p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Common Roasting Mistakes with Ethiopian Coffee
      </h3>
      <p className='my-4'>
        After roasting hundreds of Ethiopian lots, the same mistakes come up repeatedly.
        Avoiding these will immediately improve your results.
      </p>

      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>
          <span className='font-bold'>Charging too hot:</span> Dense Ethiopian beans scorch at the surface while the core stays cold. Lower your charge temperature 5 to 10 degrees C compared to Brazilian or Colombian coffees
        </li>
        <li className='my-2'>
          <span className='font-bold'>Rushing through the roast:</span> Total roast times under 8 minutes often produce grassy, sour cups. Ethiopian beans need 9 to 12 minutes (batch size dependent) to develop properly
        </li>
        <li className='my-2'>
          <span className='font-bold'>Baking (RoR stall):</span> If your rate of rise flattens or reverses before first crack, the coffee is baking. The result is a flat, papery, lifeless cup with no acidity or sweetness
        </li>
        <li className='my-2'>
          <span className='font-bold'>Over-developing after first crack:</span> Going past 2 minutes of development will bury the floral and fruit notes under roast character. If you wanted those flavors, you should have bought a different origin
        </li>
        <li className='my-2'>
          <span className='font-bold'>Ignoring airflow for naturals:</span> Natural processed Ethiopians release more chaff and smoke due to sugar carbonization. Inadequate airflow creates smoky, harsh flavors
        </li>
        <li className='my-2'>
          <span className='font-bold'>Not resting long enough:</span> Ethiopian coffees often need 7 to 14 days of resting (degassing) before they show their best. Cupping too early gives an incomplete picture of the profile
        </li>
      </ul>

      <h3 className='text-2xl font-extrabold mt-8'>
        Sample Roasting and Cupping Ethiopian Coffee
      </h3>
      <p className='my-4'>
        Before committing to a production profile, sample roasting is essential.
        The goal of a sample roast is not to create a finished product but to evaluate the green coffee&apos;s potential.
      </p>

      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>
          Follow SCA sample roasting guidelines: light roast (Agtron 58 to 63), 8 to 12 minutes total time, dropped before second crack
        </li>
        <li className='my-2'>
          Rest samples at least 8 hours before cupping (24 hours is better)
        </li>
        <li className='my-2'>
          Cup using SCA protocol: 8.25 grams per 150 ml, 93 degrees C water, 4-minute steep
        </li>
        <li className='my-2'>
          Evaluate across the full SCA scoresheet: fragrance/aroma, flavor, aftertaste, acidity, body, balance, uniformity, clean cup, sweetness, overall
        </li>
      </ul>

      <p className='my-4'>
        For a complete walkthrough of the evaluation process, including how to identify Ethiopian-specific flavor markers and common defects, see our guide on{' '}
        <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='underline font-bold'>
          how to cup and evaluate Ethiopian coffee samples
        </Link>.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Building Your Ethiopian Coffee Roast Profile: A Step-by-Step Workflow
      </h3>
      <p className='my-4'>
        Here is a practical workflow for dialing in a new Ethiopian lot.
      </p>

      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>
          <span className='font-bold'>Step 1: Sample roast and cup.</span> Use a light sample roast to assess the green coffee&apos;s intrinsic character. Note acidity type, sweetness, body, and any defects
        </li>
        <li className='my-2'>
          <span className='font-bold'>Step 2: Choose a target.</span> Decide whether this lot is best suited for filter, espresso, or omni-roast based on the cupping results. This determines your target end temperature and DTR
        </li>
        <li className='my-2'>
          <span className='font-bold'>Step 3: First production roast.</span> Apply the appropriate profile from the guidelines above. Log charge temp, turning point, yellowing time, first crack time, development time, and drop temperature
        </li>
        <li className='my-2'>
          <span className='font-bold'>Step 4: Cup and compare.</span> Rest the roast for 3 to 5 days, then cup it side by side with the sample roast. Identify what changed and what you want to adjust
        </li>
        <li className='my-2'>
          <span className='font-bold'>Step 5: Iterate.</span> Adjust one variable at a time (charge temp, gas reduction timing, development time). Roast, rest, cup again. Most lots are dialed in within 3 to 5 iterations
        </li>
        <li className='my-2'>
          <span className='font-bold'>Step 6: Lock and document.</span> Once you have a profile you are happy with, save the complete curve and all parameters. This becomes your reference for re-orders and seasonal adjustments
        </li>
      </ul>

      <div className='bg-amber-100 p-6 rounded-lg my-8'>
        <h4 className='font-bold text-xl mb-2'>Quick Reference: Ethiopian Roast Parameters</h4>
        <ul className='font-inconsolata my-2 list-disc ml-5'>
          <li className='my-2'>Charge temp: 185 to 200 C (lower for naturals, higher for washed)</li>
          <li className='my-2'>Total roast time: 9 to 12 minutes (batch size dependent)</li>
          <li className='my-2'>First crack: Typically around 7 to 9 minutes</li>
          <li className='my-2'>Development time: 45 to 120 seconds (shorter for filter, longer for espresso)</li>
          <li className='my-2'>DTR: 18 to 25 percent</li>
          <li className='my-2'>End temperature: 200 to 215 C (varies by roaster calibration)</li>
          <li className='my-2'>Rest time: 7 to 14 days for filter, 10 to 21 days for espresso</li>
        </ul>
        <p className='text-sm text-gray-600 mt-3 italic'>
          These are starting points for a standard drum roaster. Fluid bed, hybrid, and large commercial roasters will require adjustment. Always calibrate to your equipment and validate by cupping.
        </p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        How Your Roasting Profile Connects to Sourcing
      </h3>
      <p className='my-4'>
        The best roasting starts with the best green coffee.
        Understanding what you want to achieve in the roaster should inform what you buy.
        If you roast light for pour-over, prioritize high-altitude washed lots with high density and complex acidity.
        If you roast for espresso blends, mid-altitude naturals with body and fruit sweetness may be the better choice.
      </p>

      <p className='my-4'>
        When evaluating green coffee offers, ask your exporter for altitude data, processing details, and moisture content.
        Dense, properly dried beans (10 to 12 percent moisture) roast more predictably and consistently than lots with uneven moisture or low density.
        For a complete guide to evaluating green coffee quality before you buy, see our article on{' '}
        <Link href='/insights/green-coffee-quality-control-defects-grading' className='underline font-bold'>
          green coffee quality control, defects, and grading
        </Link>.
      </p>

      <div className='bg-dark text-primary p-6 rounded-lg my-8'>
        <h4 className='font-bold text-xl mb-3'>Source Roaster-Ready Ethiopian Green Coffee</h4>
        <p className='my-2'>
          Ethio Coffee exports Ethiopian green coffee with the density, moisture, and quality data that roasters need to build great profiles.
          Whether you are looking for washed Yirgacheffe for light roast pour-over or natural Guji for espresso, we can match you with the right lot and provide cupping notes to guide your profile development.
        </p>
        <div className='flex gap-4 mt-4'>
          <Link href='/contact-us' className='underline font-bold'>REQUEST SAMPLES</Link>
          <Link href='/offerings' className='underline font-bold'>VIEW OFFERINGS</Link>
        </div>
      </div>

      <h3 className='text-2xl font-extrabold mt-10 mb-4'>Related Insights</h3>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>
          <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='underline font-bold'>
            Washed vs Natural Ethiopian Coffee Processing
          </Link>
        </li>
        <li className='my-2'>
          <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='underline font-bold'>
            How to Cup and Evaluate Ethiopian Coffee Samples
          </Link>
        </li>
        <li className='my-2'>
          <Link href='/insights/how-altitude-terroir-shape-ethiopian-coffee' className='underline font-bold'>
            How Altitude and Terroir Shape Ethiopian Coffee Flavor
          </Link>
        </li>
        <li className='my-2'>
          <Link href='/insights/guide-ethiopian-coffee-origins' className='underline font-bold'>
            A Guide to Ethiopian Coffee Origins by Region
          </Link>
        </li>
      </ul>
    </>
  )
}

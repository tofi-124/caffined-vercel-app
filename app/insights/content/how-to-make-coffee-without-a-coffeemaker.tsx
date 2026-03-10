import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { HiOutlineLightBulb, HiOutlineBeaker, HiOutlineFire, HiOutlineQuestionMarkCircle } from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function HowToMakeCoffeeWithoutCoffeemaker({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        7 proven brewing methods using only basic kitchen tools, plus grind and temperature guidance for better results
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          You do not need a coffeemaker to brew a great cup. These seven methods use tools already in your kitchen.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='How to make coffee without a coffeemaker using stovetop, pour over, and cold brew methods'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Brewing Methods / Coffee Education / How-To Guides</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Key Takeaway:</span> You can make coffee without a coffeemaker using seven simple methods: stovetop saucepan, DIY pour over, improvised French press, coffee bag, Turkish-style stovetop, cold brew, and mason jar brew. The best results depend on grind size, water temperature (90 to 96 degrees Celsius), and the quality of your beans. Ethiopian single-origin coffees, with their complex flavor profiles, reward even the simplest brewing approach.</span>
        </p>
      </div>

      {/* INTRODUCTION */}
      <p className='my-4'>
        Knowing <strong>how to make coffee without a coffeemaker</strong> is a practical skill that every coffee drinker, roaster, and buyer should have. Your machine may break. You may find yourself in a hotel room, a campsite, or a kitchen with nothing but a stove and a pot. Or you may simply want to evaluate a sample of single-origin beans without relying on specialized equipment.
      </p>
      <p className='my-4'>
        Coffee has been brewed for over five centuries without electric machines. Ethiopian farmers still prepare coffee in a jebena, a clay pot heated over coals. Turkish households use a small cezve on a stovetop. Cowboys boiled grounds in a saucepan on the open range. Each of these traditions proves that excellent coffee requires only heat, water, ground coffee, and a little attention.
      </p>
      <p className='my-4'>
        This guide covers seven reliable methods to brew coffee without a machine, ranked from fastest to most hands-off. Each method includes a step-by-step process, the ideal grind size, and tips to improve extraction. A comparison table at the end helps you pick the right method for your situation.
      </p>

      {/* BEFORE YOU START */}
      <h2 className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBeaker className='text-amber-600' /> Before You Start: Grind Size and Water Temperature
      </h2>
      <p className='my-4'>
        Two variables determine whether your coffee tastes balanced or undrinkable: grind size and water temperature. Getting these right matters more than which method you choose.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>Water Temperature</h3>
      <p className='my-4'>
        The Specialty Coffee Association (SCA) recommends a brewing temperature between 90 and 96 degrees Celsius (194 to 205 degrees Fahrenheit). Water at a full rolling boil (100 degrees Celsius) will scorch the grounds and create bitter, ashy flavors. The simplest way to hit the right range without a thermometer: bring water to a boil, then let it sit off the heat for 30 to 60 seconds before pouring.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>Grind Size by Method</h3>
      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Method</th>
              <th className='p-3 text-left'>Ideal Grind</th>
              <th className='p-3 text-left'>Comparison</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Stovetop Saucepan</td>
              <td className='p-3'>Coarse</td>
              <td className='p-3'>Like raw sugar or sea salt</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>DIY Pour Over</td>
              <td className='p-3'>Medium</td>
              <td className='p-3'>Like sand</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Improvised French Press</td>
              <td className='p-3'>Coarse</td>
              <td className='p-3'>Like raw sugar or sea salt</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Coffee Bag</td>
              <td className='p-3'>Medium-Coarse</td>
              <td className='p-3'>Between sand and raw sugar</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Turkish-Style Stovetop</td>
              <td className='p-3'>Extra-Fine (powder)</td>
              <td className='p-3'>Like flour or powdered sugar</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Cold Brew</td>
              <td className='p-3'>Coarse</td>
              <td className='p-3'>Like raw sugar or sea salt</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Mason Jar Brew</td>
              <td className='p-3'>Medium</td>
              <td className='p-3'>Like sand</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        If you only have pre-ground coffee (typically medium grind), the DIY pour over and mason jar brew will produce the cleanest cup. Coarse-grind methods like cowboy coffee and cold brew will still work with medium grind, but steep times should be reduced by about 30 percent to avoid over-extraction. For a deeper understanding of how processing and preparation interact, see our guide on <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='underline font-bold'>washed vs. natural Ethiopian coffee processing</Link>.
      </p>

      {/* METHOD 1 */}
      <h2 className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineFire className='text-amber-600' /> Method 1: Stovetop Saucepan (Cowboy Coffee)
      </h2>
      <p className='my-4'>
        This is the fastest way to make coffee without a coffeemaker. All you need is a saucepan, water, ground coffee, and a heat source. The method dates back to the American frontier, where cattle drivers brewed coffee directly in a pot over a campfire.
      </p>
      <p className='my-4 font-semibold'>What you need:</p>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>Saucepan or small pot</li>
        <li className='my-2'>Water (about 350 ml / 12 oz per serving)</li>
        <li className='my-2'>Coarsely ground coffee (2 tablespoons per serving)</li>
        <li className='my-2'>Ladle or strainer (optional)</li>
      </ul>
      <p className='my-4 font-semibold'>Steps:</p>
      <ol className='font-inconsolata my-4 list-decimal ml-5'>
        <li className='my-2'>Add water to the saucepan. Use about 10 percent more than your target volume, because some water will be absorbed by the grounds and lost to evaporation.</li>
        <li className='my-2'>Bring the water to a boil over medium-high heat.</li>
        <li className='my-2'>Remove the pan from heat and wait 30 seconds. This drops the temperature into the optimal 90 to 96 degree Celsius range.</li>
        <li className='my-2'>Add the coffee grounds. Stir once to ensure all grounds are saturated.</li>
        <li className='my-2'>Cover and steep for 4 minutes.</li>
        <li className='my-2'>Pour slowly into your cup, leaving the grounds behind in the pan. A fine-mesh strainer or even a clean cloth helps if you have one.</li>
      </ol>
      <div className='bg-gray-50 p-5 rounded-lg border border-gray-200 my-4'>
        <p className='text-sm'><span className='font-bold'>Pro tip:</span> If grounds float and refuse to settle, add a tiny splash (about 1 tablespoon) of cold water after steeping. The temperature shock causes the grounds to sink rapidly. This is a trick still used in Scandinavian <em>kokekaffe</em> preparation.</p>
      </div>

      {/* METHOD 2 */}
      <h2 className='text-3xl font-extrabold mt-12 mb-6'>Method 2: DIY Pour Over</h2>
      <p className='my-4'>
        A pour over produces the cleanest cup of any no-machine method. If you have a paper coffee filter (or even a clean cloth napkin), you can build a working pour over in under a minute.
      </p>
      <p className='my-4 font-semibold'>What you need:</p>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>Paper coffee filter, clean cloth, or paper towel (unbleached preferred)</li>
        <li className='my-2'>Mug or jar</li>
        <li className='my-2'>Rubber band, binder clip, or clothespin</li>
        <li className='my-2'>Medium-ground coffee (2 tablespoons per serving)</li>
        <li className='my-2'>Hot water just off the boil</li>
      </ul>
      <p className='my-4 font-semibold'>Steps:</p>
      <ol className='font-inconsolata my-4 list-decimal ml-5'>
        <li className='my-2'>Open the filter and place it over the mug opening. Secure it with a rubber band or clips so it forms a pouch that dips slightly into the mug.</li>
        <li className='my-2'>Add ground coffee to the center of the filter.</li>
        <li className='my-2'>Pour a small amount of hot water (about 30 ml) over the grounds to wet them evenly. Wait 30 seconds. This step, called the "bloom," releases trapped carbon dioxide and improves extraction.</li>
        <li className='my-2'>Slowly pour the remaining water in a circular motion over the grounds. Aim for a total brew time of 3 to 4 minutes.</li>
        <li className='my-2'>Remove the filter and grounds. Discard and enjoy.</li>
      </ol>
      <div className='bg-gray-50 p-5 rounded-lg border border-gray-200 my-4'>
        <p className='text-sm'><span className='font-bold'>Pro tip:</span> This method is excellent for evaluating single-origin coffees because the paper filter produces a clean cup with no sediment. Roasters and Q graders often prefer pour over for exactly this reason.</p>
      </div>

      {/* METHOD 3 */}
      <h2 className='text-3xl font-extrabold mt-12 mb-6'>Method 3: Improvised French Press</h2>
      <p className='my-4'>
        French press coffee is a full-immersion method that produces a rich, full-bodied cup. You do not need the actual press apparatus; a deep bowl and a spoon can replicate the technique.
      </p>
      <p className='my-4 font-semibold'>What you need:</p>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>Deep bowl or large mug</li>
        <li className='my-2'>Tablespoon</li>
        <li className='my-2'>Coarsely ground coffee (1 tablespoon per 120 ml / 4 oz of water)</li>
        <li className='my-2'>Hot water just off the boil</li>
        <li className='my-2'>Second mug for pouring</li>
      </ul>
      <p className='my-4 font-semibold'>Steps:</p>
      <ol className='font-inconsolata my-4 list-decimal ml-5'>
        <li className='my-2'>Place the coffee grounds in the bowl.</li>
        <li className='my-2'>Pour a small amount of hot water to saturate the grounds. Wait 30 seconds for the bloom.</li>
        <li className='my-2'>Add the remaining hot water. Stir gently once.</li>
        <li className='my-2'>Steep for 4 minutes without touching it.</li>
        <li className='my-2'>Use the back of the spoon to press the grounds to the bottom of the bowl.</li>
        <li className='my-2'>Hold the spoon in place as a barrier and slowly pour the brewed coffee into your mug. Alternatively, strain through a coffee filter or fine cloth.</li>
      </ol>

      {/* METHOD 4 */}
      <h2 className='text-3xl font-extrabold mt-12 mb-6'>Method 4: The Coffee Bag (Tea Bag Method)</h2>
      <p className='my-4'>
        This method is the most portable option. If you are traveling and have access to paper filters and string, you can brew coffee anywhere that has hot water, including a hotel room with only a kettle.
      </p>
      <p className='my-4 font-semibold'>What you need:</p>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>Paper coffee filter</li>
        <li className='my-2'>String, dental floss, or a rubber band</li>
        <li className='my-2'>Medium-coarse ground coffee (2.5 tablespoons per serving)</li>
        <li className='my-2'>Mug and hot water</li>
      </ul>
      <p className='my-4 font-semibold'>Steps:</p>
      <ol className='font-inconsolata my-4 list-decimal ml-5'>
        <li className='my-2'>Lay the filter flat. Place the coffee grounds in the center.</li>
        <li className='my-2'>Gather the edges of the filter and tie them closed with string, forming a pouch. Leave no gaps for grounds to escape.</li>
        <li className='my-2'>Place the pouch in your mug.</li>
        <li className='my-2'>Pour a small amount of hot water over the pouch to soak the grounds. Wait 30 seconds.</li>
        <li className='my-2'>Fill the mug with the remaining hot water.</li>
        <li className='my-2'>Steep for 4 to 5 minutes. The longer you steep, the stronger the brew.</li>
        <li className='my-2'>Remove the pouch. Discard and drink.</li>
      </ol>

      {/* METHOD 5 */}
      <h2 className='text-3xl font-extrabold mt-12 mb-6'>Method 5: Turkish-Style Stovetop</h2>
      <p className='my-4'>
        Turkish coffee is one of the oldest brewing methods in continuous use, predating pour over and espresso by centuries. The grounds are never filtered out; they settle to the bottom of the cup as sediment. This produces an intensely concentrated, full-bodied brew.
      </p>
      <p className='my-4 font-semibold'>What you need:</p>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>Small saucepan (a cezve or ibrik is traditional, but any small pot works)</li>
        <li className='my-2'>Extra-fine ground coffee (powdery, like flour). About 1 heaped tablespoon per 90 ml / 3 oz of water.</li>
        <li className='my-2'>Cold water</li>
        <li className='my-2'>Sugar (optional)</li>
        <li className='my-2'>Small cup (espresso cup or demitasse)</li>
      </ul>
      <p className='my-4 font-semibold'>Steps:</p>
      <ol className='font-inconsolata my-4 list-decimal ml-5'>
        <li className='my-2'>Add cold water and coffee grounds (and sugar, if desired) to the pot. Stir to combine.</li>
        <li className='my-2'>Place the pot on low heat. Do not stir after this point.</li>
        <li className='my-2'>Watch carefully. As the coffee heats, a dark foam will form on the surface. Just before it boils over, remove from heat.</li>
        <li className='my-2'>Pour slowly into your cup, preserving as much foam as possible.</li>
        <li className='my-2'>Wait 1 to 2 minutes for the grounds to settle before drinking. Do not drink the last sip; it contains the sediment.</li>
      </ol>

      <h3 className='text-2xl font-extrabold mt-8'>The Ethiopian Jebena: The Original No-Machine Brew</h3>
      <p className='my-4'>
        Long before Turkish coffee spread through the Ottoman Empire, Ethiopians were brewing in a <em>jebena</em>, a round-bottomed clay pot with a narrow spout. The <Link href='/insights/ethiopian-coffee-ceremony' className='underline font-bold'>Ethiopian coffee ceremony</Link> uses the jebena to brew coffee three times from the same grounds (called <em>abol</em>, <em>tona</em>, and <em>baraka</em>), each round lighter than the last.
      </p>
      <p className='my-4'>
        The jebena method is functionally identical to cowboy coffee: grounds are boiled with water in the pot, then poured through the jebena&apos;s spout, which acts as a natural filter. The difference is cultural and ceremonial. Green beans are roasted on a flat pan over coals, ground by hand in a mortar, and brewed immediately. The result is coffee at peak freshness, with no machine involved at any stage.
      </p>
      <p className='my-4'>
        For coffee professionals, the jebena demonstrates a principle that applies to every method in this article: freshness and bean quality matter more than equipment. A jebena with freshly roasted Ethiopian Yirgacheffe will outperform a $3,000 espresso machine loaded with stale commodity beans. To explore how origin shapes these flavors, see our <Link href='/insights/guide-ethiopian-coffee-origins' className='underline font-bold'>guide to Ethiopian coffee origins</Link>.
      </p>

      {/* METHOD 6 */}
      <h2 className='text-3xl font-extrabold mt-12 mb-6'>Method 6: Cold Brew Without Equipment</h2>
      <p className='my-4'>
        Cold brew requires the most patience but the least effort. There is no heat involved, no risk of burning, and the result is a smooth, low-acidity concentrate that keeps in the fridge for up to two weeks. This method works with any container: a mason jar, a pitcher, a bowl, or even a water bottle.
      </p>
      <p className='my-4 font-semibold'>What you need:</p>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>Any container with a lid</li>
        <li className='my-2'>Coarsely ground coffee</li>
        <li className='my-2'>Cold or room-temperature water</li>
        <li className='my-2'>Strainer, cloth, or paper filter</li>
      </ul>
      <p className='my-4 font-semibold'>Ratio:</p>
      <p className='my-4'>
        Use a 1:8 ratio of coffee to water by volume. For a single serving, that is about 30 grams (roughly 4 tablespoons) of coffee to 240 ml (1 cup) of water. For a concentrate meant to be diluted, use 1:5.
      </p>
      <p className='my-4 font-semibold'>Steps:</p>
      <ol className='font-inconsolata my-4 list-decimal ml-5'>
        <li className='my-2'>Combine ground coffee and cold water in the container. Stir to ensure all grounds are wet.</li>
        <li className='my-2'>Cover and place in the refrigerator (or leave at room temperature for a faster steep).</li>
        <li className='my-2'>Steep for 12 to 24 hours. Refrigerator steeping takes longer; room temperature steeping can be done in 12 hours.</li>
        <li className='my-2'>Strain the coffee through a paper filter, clean cloth, or fine-mesh strainer into a clean container.</li>
        <li className='my-2'>Serve over ice or dilute with water or milk. If you made a concentrate (1:5 ratio), dilute 1:1 with water.</li>
      </ol>
      <div className='bg-amber-50 p-5 rounded-lg border border-amber-200 my-4'>
        <p className='text-sm'><span className='font-bold'>Origin note:</span> Cold brew highlights the chocolate, nut, and berry notes common in Ethiopian natural-processed coffees. A natural Guji or Sidamo cold-brewed for 18 hours produces a strikingly sweet, fruity concentrate with almost no bitterness. For more on how processing impacts flavor, read our <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='underline font-bold'>washed vs. natural comparison</Link>.</p>
      </div>

      {/* METHOD 7 */}
      <h2 className='text-3xl font-extrabold mt-12 mb-6'>Method 7: Mason Jar Brew</h2>
      <p className='my-4'>
        The mason jar brew is a hybrid between the French press and the pour over. You steep the coffee like a French press, then strain it through a cloth or filter when pouring. It works well when you have a jar and a piece of cloth but nothing else.
      </p>
      <p className='my-4 font-semibold'>What you need:</p>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>Mason jar or any heat-safe glass jar</li>
        <li className='my-2'>Clean cloth, handkerchief, or paper filter</li>
        <li className='my-2'>Rubber band or string</li>
        <li className='my-2'>Medium-ground coffee (2 tablespoons per serving)</li>
        <li className='my-2'>Hot water just off the boil</li>
      </ul>
      <p className='my-4 font-semibold'>Steps:</p>
      <ol className='font-inconsolata my-4 list-decimal ml-5'>
        <li className='my-2'>Add coffee grounds directly to the jar.</li>
        <li className='my-2'>Pour hot water over the grounds. Stir once.</li>
        <li className='my-2'>Cover loosely and steep for 4 minutes.</li>
        <li className='my-2'>Secure the cloth or filter over the mouth of the jar with a rubber band.</li>
        <li className='my-2'>Invert the jar carefully and pour the brewed coffee through the filter into your mug.</li>
      </ol>

      {/* COMPARISON TABLE */}
      <h2 className='text-3xl font-extrabold mt-12 mb-6'>Quick Comparison: Which Method Is Best?</h2>
      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Method</th>
              <th className='p-3 text-left'>Time</th>
              <th className='p-3 text-left'>Taste</th>
              <th className='p-3 text-left'>Cleanup</th>
              <th className='p-3 text-left'>Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Stovetop Saucepan</td>
              <td className='p-3'>6 min</td>
              <td className='p-3'>Bold, some sediment</td>
              <td className='p-3'>Easy</td>
              <td className='p-3'>Camping, power outages</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>DIY Pour Over</td>
              <td className='p-3'>5 min</td>
              <td className='p-3'>Clean, bright</td>
              <td className='p-3'>Easy</td>
              <td className='p-3'>Sample evaluation, daily use</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Improvised French Press</td>
              <td className='p-3'>6 min</td>
              <td className='p-3'>Rich, full body</td>
              <td className='p-3'>Moderate</td>
              <td className='p-3'>When you want body and oils</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Coffee Bag</td>
              <td className='p-3'>6 min</td>
              <td className='p-3'>Mild, clean</td>
              <td className='p-3'>Minimal</td>
              <td className='p-3'>Travel, hotel rooms</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Turkish-Style</td>
              <td className='p-3'>5 min</td>
              <td className='p-3'>Intense, thick</td>
              <td className='p-3'>Easy</td>
              <td className='p-3'>Strong coffee lovers, cultural experience</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Cold Brew</td>
              <td className='p-3'>12 to 24 hr</td>
              <td className='p-3'>Smooth, low acidity</td>
              <td className='p-3'>Moderate</td>
              <td className='p-3'>Batch prep, hot weather</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Mason Jar Brew</td>
              <td className='p-3'>6 min</td>
              <td className='p-3'>Balanced</td>
              <td className='p-3'>Moderate</td>
              <td className='p-3'>When a jar is all you have</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* HOW ORIGIN AFFECTS RESULTS */}
      <h2 className='text-3xl font-extrabold mt-12 mb-6'>How Bean Origin Affects Your Results</h2>
      <p className='my-4'>
        The method you choose matters, but the beans matter more. A high-quality, freshly roasted single-origin coffee will taste outstanding even when brewed in a saucepan. A stale, low-grade commodity blend will taste flat regardless of method.
      </p>
      <p className='my-4'>
        Ethiopian coffees are particularly well suited to these no-machine methods because of their inherent complexity. <Link href='/ethiopian-coffee-yirgacheffe' className='underline font-bold'>Yirgacheffe beans</Link> carry floral and citrus notes that shine in a DIY pour over. <Link href='/ethiopian-coffee-guji' className='underline font-bold'>Guji coffees</Link>, with their berry and stone-fruit character, produce exceptional cold brew. <Link href='/ethiopian-coffee-sidamo' className='underline font-bold'>Sidamo varieties</Link> offer balanced sweetness that works across every method.
      </p>
      <p className='my-4'>
        If you are a roaster or importer evaluating green coffee samples, the DIY pour over is the closest substitute to a professional cupping setup. It produces a clean cup that reveals origin character, processing influence, and roast quality without interference from equipment. For a complete guide on professional evaluation technique, see <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='underline font-bold'>how to cup and evaluate Ethiopian coffee samples</Link>.
      </p>

      {/* FAQ */}
      <section className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200 mt-12'>
        <h2 className='text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3'>
          <HiOutlineQuestionMarkCircle className='text-amber-600' /> Frequently Asked Questions
        </h2>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Can you make coffee with just hot water and grounds?</h4>
            <p className='text-sm text-gray-600'>Yes. The stovetop saucepan (cowboy coffee) method does exactly this. Add grounds to hot water, steep for 4 minutes, then pour carefully to leave the sediment behind. No filter or special equipment is needed.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the easiest way to make coffee without a machine?</h4>
            <p className='text-sm text-gray-600'>The stovetop saucepan method requires only a pot, water, and coffee. If you want a cleaner cup with less sediment, the DIY pour over with a paper filter is nearly as simple and produces better results.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Can you just boil coffee grounds in water?</h4>
            <p className='text-sm text-gray-600'>You can, but boiling water (100 degrees Celsius) extracts bitter compounds. A better approach: bring water to a boil, remove from heat, wait 30 seconds, then add the grounds. This produces a smoother cup.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How to make coffee without electricity?</h4>
            <p className='text-sm text-gray-600'>Use any heat source: gas stove, campfire, portable burner, or a candle under a small pot. The stovetop saucepan and Turkish methods work over any flame. Cold brew requires no heat at all.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Is cowboy coffee safe to drink?</h4>
            <p className='text-sm text-gray-600'>Completely safe. The grounds settle to the bottom and are not consumed. Some studies suggest unfiltered coffee contains higher levels of cafestol (a compound linked to cholesterol), so if that is a concern, use a paper filter to strain.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What grind size works best without a coffee maker?</h4>
            <p className='text-sm text-gray-600'>Coarse grind (like sea salt) works for most immersion methods: saucepan, French press, cold brew. Medium grind (like sand) is better for pour over and mason jar methods. Turkish coffee requires an extra-fine grind like powdered sugar.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How long does cold brew keep in the fridge?</h4>
            <p className='text-sm text-gray-600'>Strained cold brew concentrate stays fresh for up to two weeks when refrigerated. Diluted cold brew is best consumed within 3 to 4 days. Store in a sealed container to prevent oxidation.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Does the type of coffee bean matter when brewing without a machine?</h4>
            <p className='text-sm text-gray-600'>It matters significantly. Single-origin specialty-grade beans (scoring 80 or above on the SCA scale) produce more complex, flavorful cups even with basic methods. Ethiopian coffees, with their natural fruit and floral notes, are particularly forgiving and rewarding when brewed simply.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Premium Ethiopian Coffee Direct from Origin</h4>
        <p className='my-2'>
          For roasters evaluating origins, importers building a portfolio, and buyers seeking traceable single-origin lots, Ethio Coffee Import and Export PLC connects you directly with Ethiopia&apos;s finest growing regions. Request samples, access current pricing, and learn about our export process.
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
            <h4 className='font-semibold mb-2 text-sm'>Brewing, Roasting &amp; Quality</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/coffee-is-art-roasting-brewing' className='text-amber-700 hover:underline'>Coffee Is Art: Roasting and Brewing Techniques</Link></li>
              <li>&bull; <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup and Evaluate Ethiopian Coffee Samples</Link></li>
              <li>&bull; <Link href='/insights/new-sca-coffee-value-assessment' className='text-amber-700 hover:underline'>The New SCA Coffee Value Assessment</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origins &amp; Varieties</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Complete Guide to Ethiopian Coffee Origins</Link></li>
              <li>&bull; <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs. Sidamo vs. Guji Comparison</Link></li>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs. Natural Ethiopian Coffee Processing</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Ethiopian Heirloom Coffee Varieties and Landraces</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Culture &amp; History</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-ceremony' className='text-amber-700 hover:underline'>The Ethiopian Coffee Ceremony</Link></li>
              <li>&bull; <Link href='/insights/ethiopia-birthplace-of-coffee' className='text-amber-700 hover:underline'>Ethiopia: Birthplace of Coffee</Link></li>
              <li>&bull; <Link href='/insights/complete-guide-to-understanding-coffee' className='text-amber-700 hover:underline'>Complete Guide to Understanding Coffee</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC. Brewing temperatures reference SCA standards. For current product availability, pricing, and sample requests, please contact our team directly.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot; <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> &middot; <Link href='/about' className='underline'>About Ethio Coffee</Link> &middot; <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

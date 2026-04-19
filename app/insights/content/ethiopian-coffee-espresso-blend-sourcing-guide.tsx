import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineBeaker,
  HiOutlineScale,
  HiOutlineMapPin,
  HiOutlineTruck,
  HiOutlineCube,
  HiOutlineFire,
  HiOutlineDocumentText,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopianCoffeeEspressoBlendSourcingGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      {/* H1 + H2 */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Origins, Processes, Grades, and Blend Architecture for Specialty Roasters
      </h2>

      {/* HERO IMAGE */}
      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md bg-gray-200 flex items-center justify-center'>
          {/* TODO: Replace placeholder with actual hero image */}
          {/* Expected path: /images/insights/ethiopian-coffee-espresso-blend-sourcing-guide.webp */}
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian coffee beans and espresso blend components on a cupping table'
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
        <span className='ml-2'>Espresso Blending / Sourcing Guide / Roaster Resources / Green Coffee Buying</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Ethiopian coffee is one of the most versatile espresso blend components available to specialty roasters. Washed lots from Yirgacheffe and Sidamo add bright acidity and floral top notes; naturals from Guji and Sidamo contribute body, fruit sweetness, and aromatic complexity. At 15% to 40% of a blend, Ethiopian coffees transform a flat espresso into a layered, memorable shot. This guide covers which origins, processes, and grades to source, how to structure your blend, and how to request development samples directly from origin.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#why-ethiopian' className='text-amber-700 hover:underline'>1. Why Ethiopian Coffee Elevates Espresso Blends</a></li>
          <li><a href='#best-origins' className='text-amber-700 hover:underline'>2. Best Ethiopian Origins for Espresso Blend Components</a></li>
          <li><a href='#process-selection' className='text-amber-700 hover:underline'>3. Washed vs Natural: Process Selection for Espresso</a></li>
          <li><a href='#grade-selection' className='text-amber-700 hover:underline'>4. Grade Selection: Quality vs Cost in Blends</a></li>
          <li><a href='#blend-architecture' className='text-amber-700 hover:underline'>5. Blend Architecture: Base, Bridge, or Highlight</a></li>
          <li><a href='#roast-profiles' className='text-amber-700 hover:underline'>6. Roast Profile Strategies for Ethiopian Espresso Components</a></li>
          <li><a href='#samples' className='text-amber-700 hover:underline'>7. Requesting Blend Development Samples</a></li>
          <li><a href='#pricing' className='text-amber-700 hover:underline'>8. Pricing and Seasonal Planning</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>9. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRODUCTION */}
      <p className='text-lg leading-relaxed my-4'>
        Building an exceptional <strong>Ethiopian coffee espresso blend</strong> starts with sourcing the right green coffee. Ethiopia produces the widest genetic diversity of Arabica on the planet, with flavor profiles ranging from jasmine and bergamot to ripe strawberry and dark chocolate. For roasters developing or reformulating espresso blends, this diversity is a strategic advantage: the right Ethiopian lot can add acidity, sweetness, body, or aromatic complexity that no other single origin delivers.
      </p>
      <p className='my-4'>
        Yet selecting the right Ethiopian component involves more than picking a region name off a catalog. The origin, processing method, grade, and percentage in the blend all determine whether Ethiopian coffee shines in your espresso or clashes with other components. This guide breaks down each sourcing decision so you can build blends with confidence and source directly from an <Link href='/ethiopian-coffee-exporter' className='text-amber-700 hover:underline font-bold'>origin-connected exporter</Link>.
      </p>

      {/* SECTION 1: Why Ethiopian Coffee Elevates Espresso Blends */}
      <h3 id='why-ethiopian' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        1. Why Ethiopian Coffee Elevates Espresso Blends
      </h3>
      <p className='my-4'>
        Espresso amplifies every quality in a coffee. Under 9 bars of pressure and 25 to 30 seconds of contact time, the bright acidity, fruit sweetness, and aromatic intensity of Ethiopian coffees become concentrated and vivid. This is exactly why roasters prize Ethiopian components: they add dimensions that Brazilian or Central American bases often lack on their own.
      </p>
      <p className='my-4'>
        Three qualities make Ethiopian coffee especially effective in espresso blends:
      </p>
      <div className='grid md:grid-cols-3 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Aromatic Complexity</h4>
          <p className='text-sm text-gray-700'>
            Ethiopian <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>heirloom varieties</Link> contain higher concentrations of volatile aromatics than most cultivars. In espresso, this translates to floral, citrus, and fruit top notes that lift the entire cup.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Bright, Structured Acidity</h4>
          <p className='text-sm text-gray-700'>
            Washed Ethiopian coffees (especially from high-altitude zones above 1,800 masl) produce malic and citric acids that give espresso a clean, sparkling finish, preventing the shot from tasting flat or one-dimensional.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Fruit Sweetness</h4>
          <p className='text-sm text-gray-700'>
            Natural processed Ethiopian lots bring concentrated berry and stone fruit sweetness that pairs well with the caramel and chocolate notes from Brazilian or Colombian base coffees.
          </p>
        </div>
      </div>
      <p className='my-4'>
        For a detailed comparison of Ethiopian flavor profiles against other major origins, see our guides on <Link href='/insights/ethiopian-coffee-vs-brazilian-coffee' className='text-amber-700 hover:underline'>Ethiopian vs Brazilian coffee</Link> and <Link href='/insights/ethiopian-coffee-vs-colombian-coffee' className='text-amber-700 hover:underline'>Ethiopian vs Colombian coffee</Link>.
      </p>

      {/* SECTION 2: Best Ethiopian Origins for Espresso Blend Components */}
      <h3 id='best-origins' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMapPin className='w-8 h-8 text-amber-600' />
        2. Best Ethiopian Origins for Espresso Blend Components
      </h3>
      <p className='my-4'>
        Not every Ethiopian region performs the same role in an espresso blend. The table below maps each major origin to its typical espresso contribution, recommended process type, and the blend role it fills best.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Origin</th>
              <th className='p-3 text-left font-bold'>Altitude (masl)</th>
              <th className='p-3 text-left font-bold'>Espresso Contribution</th>
              <th className='p-3 text-left font-bold'>Best Process</th>
              <th className='p-3 text-left font-bold'>Blend Role</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline'>Yirgacheffe</Link></td>
              <td className='p-3'>1,750 &ndash; 2,200</td>
              <td className='p-3'>Floral aromatics, citrus acidity, jasmine top notes</td>
              <td className='p-3'>Washed</td>
              <td className='p-3'>Highlight (top notes)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline'>Sidamo</Link></td>
              <td className='p-3'>1,550 &ndash; 2,200</td>
              <td className='p-3'>Stone fruit sweetness, balanced acidity, medium body</td>
              <td className='p-3'>Washed or Natural</td>
              <td className='p-3'>Bridge or Highlight</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline'>Guji</Link></td>
              <td className='p-3'>1,800 &ndash; 2,300</td>
              <td className='p-3'>Complex fruit, heavy body, wine-like richness</td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>Bridge or Base</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-limu' className='text-amber-700 hover:underline'>Limu</Link></td>
              <td className='p-3'>1,400 &ndash; 2,100</td>
              <td className='p-3'>Mild sweetness, low acidity, clean body</td>
              <td className='p-3'>Washed</td>
              <td className='p-3'>Base support</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-jimma' className='text-amber-700 hover:underline'>Jimma</Link></td>
              <td className='p-3'>1,400 &ndash; 2,000</td>
              <td className='p-3'>Earthy sweetness, heavier body, cocoa undertones</td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>Base support</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-harar' className='text-amber-700 hover:underline'>Harar</Link></td>
              <td className='p-3'>1,500 &ndash; 2,100</td>
              <td className='p-3'>Blueberry, wild fruit, winey ferment</td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>Highlight (signature note)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        For espresso blends, Yirgacheffe washed lots and Guji naturals are the most commonly used Ethiopian components. Yirgacheffe adds the aromatic lift that defines a specialty espresso; Guji naturals add the body and fruit sweetness that round out a shot, especially under milk. For a deeper comparison of the three most popular origins, see <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji</Link>.
      </p>

      {/* SECTION 3: Washed vs Natural */}
      <h3 id='process-selection' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        3. Washed vs Natural: Process Selection for Espresso
      </h3>
      <p className='my-4'>
        The processing method of your Ethiopian component has a larger impact on the final espresso than the origin region alone. Each process creates a fundamentally different cup character under espresso extraction.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Factor</th>
              <th className='p-3 text-left font-bold'>Washed Ethiopian</th>
              <th className='p-3 text-left font-bold'>Natural Ethiopian</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Espresso character</td>
              <td className='p-3'>Clean, bright, floral; sparkling acidity</td>
              <td className='p-3'>Fruity, heavy, sweet; berry-forward body</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Best blend role</td>
              <td className='p-3'>Acidity and aromatic lift</td>
              <td className='p-3'>Body, sweetness, and fruit complexity</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Performance under milk</td>
              <td className='p-3'>Acidity cuts through; floral notes can get muted</td>
              <td className='p-3'>Berry and chocolate notes amplify in milk</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Roast tolerance</td>
              <td className='p-3'>Sensitive; over-development kills florals</td>
              <td className='p-3'>More forgiving; retains sweetness deeper into roast</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Shelf stability</td>
              <td className='p-3'>More stable (lower water activity)</td>
              <td className='p-3'>Requires careful storage (higher lipid surface area)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Typical FOB premium</td>
              <td className='p-3'>$4.20 &ndash; $6.50/kg (G1-G2)</td>
              <td className='p-3'>$3.80 &ndash; $5.80/kg (G1-G2)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        Many roasters use both: a washed Ethiopian for the black espresso menu and a natural Ethiopian for the milk-based menu. If budget allows only one, a washed Sidamo G2 often provides the best balance of clean acidity and approachable sweetness. For a deeper breakdown, see <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee</Link>.
      </p>

      {/* SECTION 4: Grade Selection */}
      <h3 id='grade-selection' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCube className='w-8 h-8 text-amber-600' />
        4. Grade Selection: Quality vs Cost in Blends
      </h3>
      <p className='my-4'>
        Ethiopian coffee grades run from <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>G1 (highest) to G5 (lowest)</Link> based on defect count and cup score. For espresso blends, not every component needs to be Grade 1. Choosing the right grade for the right blend role is how roasters manage cost without sacrificing cup quality.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Grade</th>
              <th className='p-3 text-left font-bold'>Defects per 300g</th>
              <th className='p-3 text-left font-bold'>Espresso Blend Use</th>
              <th className='p-3 text-left font-bold'>FOB Range (2025/26)</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>G1 Washed</td>
              <td className='p-3'>0 &ndash; 3</td>
              <td className='p-3'>Highlight component in premium single-origin espresso or signature blends</td>
              <td className='p-3'>$5.50 &ndash; $7.00+/kg</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>G2 Washed</td>
              <td className='p-3'>4 &ndash; 12</td>
              <td className='p-3'>Core Ethiopian component in house blends; best value for specialty</td>
              <td className='p-3'>$4.20 &ndash; $5.50/kg</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>G1 Natural</td>
              <td className='p-3'>0 &ndash; 15</td>
              <td className='p-3'>Fruit-forward highlight or bridge component</td>
              <td className='p-3'>$4.50 &ndash; $6.50/kg</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>G2 Natural</td>
              <td className='p-3'>16 &ndash; 25</td>
              <td className='p-3'>Body and sweetness in mid-range blends</td>
              <td className='p-3'>$3.80 &ndash; $4.80/kg</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>G3-G4 Natural</td>
              <td className='p-3'>26 &ndash; 86</td>
              <td className='p-3'>Commercial blends only; cup profile too inconsistent for specialty</td>
              <td className='p-3'>$2.80 &ndash; $3.60/kg</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Practical Tip</h4>
        <p className='text-sm text-gray-700'>
          For a 20% Ethiopian component in a four-origin house blend, G2 washed Sidamo or Yirgacheffe delivers 90% of the cup value of G1 at 20% to 30% lower cost. Reserve G1 for blends where the Ethiopian component exceeds 30% and its character needs to carry the shot.
        </p>
      </div>

      {/* SECTION 5: Blend Architecture */}
      <h3 id='blend-architecture' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineDocumentText className='w-8 h-8 text-amber-600' />
        5. Blend Architecture: Base, Bridge, or Highlight
      </h3>
      <p className='my-4'>
        Every well-built espresso blend assigns each origin a specific structural role. Ethiopian coffee can fill any of the three core roles depending on the lot you select and the percentage you use.
      </p>

      <div className='grid md:grid-cols-3 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Base (40% &ndash; 60%)</h4>
          <p className='text-sm text-gray-700'>
            The foundation that defines body, sweetness, and mouthfeel. Ethiopian coffees rarely serve as the sole base, but a Guji natural G2 at 35% to 40% alongside a Brazilian natural can create a fruit-sweet, full-bodied foundation.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Bridge (20% &ndash; 35%)</h4>
          <p className='text-sm text-gray-700'>
            Connects the base to the highlight by adding mid-palate complexity. Sidamo washed G2 at 25% bridges a chocolate-forward Brazilian base to a bright Kenyan or Yirgacheffe highlight, adding stone fruit sweetness and smooth acidity.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Highlight (10% &ndash; 25%)</h4>
          <p className='text-sm text-gray-700'>
            The aromatic and flavor peak of the blend. Yirgacheffe washed G1 at 15% to 20% adds floral top notes and citrus acidity that define the espresso&apos;s signature character, especially in black drinks.
          </p>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Example Blend Formulas</h4>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Blend Style</th>
              <th className='p-3 text-left font-bold'>Base</th>
              <th className='p-3 text-left font-bold'>Bridge</th>
              <th className='p-3 text-left font-bold'>Highlight</th>
              <th className='p-3 text-left font-bold'>Espresso Profile</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Classic Specialty</td>
              <td className='p-3'>Brazil Natural 50%</td>
              <td className='p-3'>Sidamo Washed G2 30%</td>
              <td className='p-3'>Yirgacheffe Washed G1 20%</td>
              <td className='p-3'>Chocolate, stone fruit, floral finish</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Fruit-Forward</td>
              <td className='p-3'>Guji Natural G1 40%</td>
              <td className='p-3'>Colombia Washed 35%</td>
              <td className='p-3'>Harar Natural 25%</td>
              <td className='p-3'>Blueberry, dark chocolate, winey body</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Milk-Optimized</td>
              <td className='p-3'>Brazil Natural 45%</td>
              <td className='p-3'>Guji Natural G2 30%</td>
              <td className='p-3'>Sidamo Washed G2 25%</td>
              <td className='p-3'>Berry sweetness, caramel, cocoa in milk</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Budget Specialty</td>
              <td className='p-3'>Brazil Cerrado 55%</td>
              <td className='p-3'>Limu Washed G2 25%</td>
              <td className='p-3'>Sidamo Washed G2 20%</td>
              <td className='p-3'>Clean sweetness, mild citrus, balanced</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        These formulas are starting points. Every blend requires iterative cupping and espresso extraction testing, which is why ordering development samples before committing to volume is critical.
      </p>

      {/* SECTION 6: Roast Profile Strategies */}
      <h3 id='roast-profiles' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineFire className='w-8 h-8 text-amber-600' />
        6. Roast Profile Strategies for Ethiopian Espresso Components
      </h3>
      <p className='my-4'>
        Ethiopian coffees in espresso blends require specific roast considerations. The high density and small screen size of many Ethiopian lots (often 14 to 16 screen) mean they absorb heat differently from larger Brazilian or Colombian beans.
      </p>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Roast Guidelines for Ethiopian Espresso Components</h4>
        <ul className='space-y-2 text-sm text-gray-700'>
          <li><strong>Charge temperature:</strong> 5 to 10 degrees Celsius lower than your Brazilian base to avoid scorching the smaller, denser beans.</li>
          <li><strong>Development time ratio (DTR):</strong> Target 18% to 22% for washed lots (preserve acidity) and 22% to 25% for naturals (develop body and reduce ferment notes).</li>
          <li><strong>End temperature:</strong> Washed Ethiopian components pull best at a light-medium roast (Agtron 55 to 60). Naturals tolerate medium (Agtron 50 to 55) without losing fruit character.</li>
          <li><strong>Blend roasting vs separate roasting:</strong> For blends with Ethiopian components above 25%, roast the Ethiopian component separately. Below 25%, co-roasting with a similar-density bridge coffee often works if your batch size supports it.</li>
          <li><strong>Rest period:</strong> Ethiopian espresso components peak at 10 to 14 days post-roast. Factor this into your production schedule.</li>
        </ul>
      </div>
      <p className='my-4'>
        For complete roast profiles by origin, see our <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='text-amber-700 hover:underline'>guide to roasting Ethiopian coffee</Link>.
      </p>

      {/* SECTION 7: Requesting Blend Development Samples */}
      <h3 id='samples' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTruck className='w-8 h-8 text-amber-600' />
        7. Requesting Blend Development Samples
      </h3>
      <p className='my-4'>
        Before committing to container volumes, request 200g to 500g green samples of each candidate lot. This lets you sample roast, cup, and test the coffee in actual espresso extraction before locking in a purchase.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>What to Specify in Your Sample Request</h4>
      <ul className='space-y-2 my-4 text-sm'>
        <li><strong>Target blend role:</strong> Tell your exporter whether the Ethiopian component will serve as base, bridge, or highlight. This helps narrow the lot selection.</li>
        <li><strong>Process preference:</strong> Washed, natural, or both for comparison.</li>
        <li><strong>Grade range:</strong> G1, G2, or both to evaluate the cost-quality tradeoff in your blend.</li>
        <li><strong>Origin preference:</strong> Specify 2 to 3 regions, or ask the exporter to recommend based on current availability.</li>
        <li><strong>Intended volume:</strong> Share your anticipated annual or quarterly tonnage so the exporter can confirm lot availability and reserve capacity.</li>
      </ul>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700'>
          <strong>From our sourcing team:</strong> We routinely ship 3 to 5 curated sample sets for roasters developing espresso blends. Each set includes green coffee, a sample roast profile suggestion, and lot documentation with traceability data. <Link href='/contact-us' className='text-amber-700 hover:underline font-bold'>Contact us</Link> to start the process.
        </p>
      </div>
      <p className='my-4'>
        For details on evaluating samples once they arrive, see our <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>cupping and evaluation guide</Link>. For information on sample programs and minimum order quantities, read the <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Ethiopian Coffee MOQ Guide</Link>.
      </p>

      {/* SECTION 8: Pricing and Seasonal Planning */}
      <h3 id='pricing' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        8. Pricing and Seasonal Planning
      </h3>
      <p className='my-4'>
        Ethiopian coffee espresso blend components carry a premium over commodity grades, but the premium is justified by the cup value they add. Understanding seasonal pricing patterns helps you lock in favorable contracts.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Quarter</th>
              <th className='p-3 text-left font-bold'>Availability</th>
              <th className='p-3 text-left font-bold'>Buying Strategy</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Q1 (Jan &ndash; Mar)</td>
              <td className='p-3'>Peak harvest; new crop washed lots arriving at dry mills</td>
              <td className='p-3'>Request pre-shipment samples; lock forward contracts for best lots</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Q2 (Apr &ndash; Jun)</td>
              <td className='p-3'>Main export window; widest selection of washed and natural lots</td>
              <td className='p-3'>Best time to buy; negotiate volume pricing for annual blend programs</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Q3 (Jul &ndash; Sep)</td>
              <td className='p-3'>Late-season shipping; top lots selling out</td>
              <td className='p-3'>Secure remaining G1 lots; consider booking next season early</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Q4 (Oct &ndash; Dec)</td>
              <td className='p-3'>Between-crop period; warehouse stocks only</td>
              <td className='p-3'>Bridge with aged stock or pivot to alternative components</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        For a complete seasonal timeline, see the <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Harvest Calendar</Link>. For current FOB pricing by origin and grade, consult our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>FOB pricing guide</Link>.
      </p>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Ethiopian Espresso Blend Components Direct from Origin</h4>
        <p className='my-2'>
          Request curated sample sets matched to your blend architecture. Our sourcing team selects lots based on your target profile, budget, and volume requirements, with full traceability from washing station to your roastery.
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

      {/* FAQ */}
      <section id='faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900'>Frequently Asked Questions</h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What percentage of Ethiopian coffee should I use in an espresso blend?</h4>
            <p className='text-sm text-gray-600'>
              Most specialty roasters use Ethiopian coffee at 15% to 35% of the total blend. Below 15%, the Ethiopian character gets lost in extraction. Above 35%, the acidity or fruit intensity can overpower the base. Start at 20% and adjust based on cupping feedback and your target espresso profile.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Is washed or natural Ethiopian coffee better for espresso blends?</h4>
            <p className='text-sm text-gray-600'>
              It depends on the blend role. Washed Ethiopian coffees add clean acidity and floral aromatics, making them ideal for black espresso drinks. Natural Ethiopian coffees contribute fruit sweetness and heavier body, performing better in milk-based drinks. Many roasters source both and use them in different blend formulas.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Can I use Ethiopian coffee as the sole origin in an espresso?</h4>
            <p className='text-sm text-gray-600'>
              Yes. Single-origin Ethiopian espresso is popular in specialty cafes. Sidamo washed G1 and Guji natural G1 both perform well as standalone espresso. The key is adjusting the roast profile and extraction parameters to manage the higher acidity and lower body compared to traditional blends.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the minimum order for Ethiopian espresso blend components?</h4>
            <p className='text-sm text-gray-600'>
              Sample orders start at 200g to 500g per lot for blend development. Commercial orders typically start at one pallet (60 bags of 60kg), though LCL consolidation options are available for smaller roasters ordering 20 to 40 bags. Full container loads (FCL) of 250 to 300 bags offer the best per-kilogram pricing.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How do I keep Ethiopian coffee espresso blend components fresh?</h4>
            <p className='text-sm text-gray-600'>
              Ethiopian green coffee stores well for 10 to 12 months in GrainPro-lined bags at 18 to 22 degrees Celsius and below 60% relative humidity. Natural lots are more sensitive to aging than washed lots. Plan your blend program to use natural components within 8 months of arrival.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Roasting and Brewing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='text-amber-700 hover:underline'>How to Roast Ethiopian Coffee Beans</Link></li>
              <li>&bull; <Link href='/insights/best-coffee-guide-french-press-pour-over-scales' className='text-amber-700 hover:underline'>Ethiopian Coffee Brew Profiles for Roasters</Link></li>
              <li>&bull; <Link href='/insights/coffee-is-art-roasting-brewing' className='text-amber-700 hover:underline'>Coffee Roasting and Brewing Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-cold-brew-rtd-sourcing-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee for Cold Brew &amp; RTD</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origin Comparisons</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji Compared</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-vs-brazilian-coffee' className='text-amber-700 hover:underline'>Ethiopian vs Brazilian Coffee</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-vs-colombian-coffee' className='text-amber-700 hover:underline'>Ethiopian vs Colombian Coffee</Link></li>
              <li>&bull; <Link href='/insights/jimma-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Jimma Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/nekemte-wellega-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Nekemte (Lekempti) Coffee: Buyer&apos;s Sourcing Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Processing and Quality</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee</Link></li>
              <li>&bull; <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>Cup and Evaluate Ethiopian Coffee Samples</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Defects and Quality Control</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing and Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Harvest Calendar</Link></li>
              <li>&bull; <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Ethiopian Coffee MOQ Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
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

import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineScale,
  HiOutlineMapPin,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiOutlineDocumentText,
  HiOutlineCurrencyDollar,
  HiOutlineArrowTrendingUp,
  HiOutlineQuestionMarkCircle,
} from 'react-icons/hi2'

type InsightContentProps = { title: string; date: string; large_image_url: string }

export default function EthiopianCoffeeScreenSizeGuide({
  title,
  date,
  large_image_url,
}: InsightContentProps) {
  return (
    <>
      {/* H1 + H2 */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        An Ethiopian coffee screen size guide for importers: what 14 to 18 screens mean and how to write practical lot specs
      </h2>

      {/* Hero image */}
      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md bg-gray-200 flex items-center justify-center'>
          {/* TODO: Replace placeholder with actual hero image */}
          {/* Expected path: /images/insights/ethiopian-coffee-screen-size-guide.webp */}
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian coffee screen size guide showing green coffee sorted by screens at an export dry mill'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      {/* Category tag */}
      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Quality Specs / Dry Milling / Green Coffee Buying / Importer Resources</span>
      </div>

      {/* Key Takeaway box */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Ethiopian coffee screen size is a planning tool, not a shortcut for cup quality. Many outstanding Ethiopian lots run smaller than Latin American buyers expect, so the right question is not whether a lot is "big" but whether it is uniform enough for your roast style, defect tolerance, and commercial position. For most importers, screen size should be specified together with moisture, prep method, defect count, and cup profile; never in isolation.
        </p>
      </div>

      {/* Table of Contents */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#what-screen-size-means' className='text-amber-700 hover:underline'>1. What Ethiopian coffee screen size actually measures</a></li>
          <li><a href='#why-ethiopia-runs-small' className='text-amber-700 hover:underline'>2. Why Ethiopian coffee often screens smaller</a></li>
          <li><a href='#when-size-matters' className='text-amber-700 hover:underline'>3. When screen size matters in a buying decision</a></li>
          <li><a href='#origin-expectations' className='text-amber-700 hover:underline'>4. Typical screen-size expectations by origin and process</a></li>
          <li><a href='#buyer-personas' className='text-amber-700 hover:underline'>5. Buyer personas: which prep fits which program</a></li>
          <li><a href='#contract-language' className='text-amber-700 hover:underline'>6. How to write screen-size requirements into contracts</a></li>
          <li><a href='#when-to-pay-more' className='text-amber-700 hover:underline'>7. When to pay more for larger screens, and when not to</a></li>
          <li><a href='#conclusion' className='text-amber-700 hover:underline'>8. Conclusion: how to use Ethiopian coffee screen size in real buying</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>9. FAQ</a></li>
        </ol>
      </div>

      {/* Introduction */}
      <p className='text-lg leading-relaxed my-4'>
        Ethiopian coffee screen size becomes a problem for buyers when it is treated as a status label instead of a preparation variable. A washed Yirgacheffe that cups clean and floral at 86 points may still run heavily in 14 and 15 screens. A Guji natural that looks visually larger may roast less evenly if the distribution is broad. The importer who buys only by "big bean" assumptions usually overpays for some lots and misses others that would perform better in the roaster.
      </p>
      <p className='my-4'>
        For importers, green buyers, and roasters, the practical questions are these: what should screen size mean on Ethiopian lot sheets, which ranges are normal by origin, and how tight should a specification be for filter, espresso, blends, or private-label programs? For the full Ethiopian grade system, see our <Link href='/coffee-grading-ethiopia' className='text-amber-700 hover:underline font-semibold'>coffee grading Ethiopia reference</Link>. For the milling stage where these separations happen, see our <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='text-amber-700 hover:underline font-semibold'>dry milling export guide</Link>.
      </p>

      {/* Section 1 */}
      <h2 id='what-screen-size-means' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        1. What Ethiopian coffee screen size actually measures
      </h2>
      <p className='my-4'>
        Screen size is a physical measurement taken after dry milling. Green coffee passes over vibrating metal screens with holes measured in sixty-fourths of an inch. A Screen 15 bean is retained on a screen with 15/64-inch openings. In trade language, "15 up" means the lot is prepared so most beans remain on Screen 15 or larger; anything falling below that threshold becomes below-screen material.
      </p>
      <p className='my-4'>
        This is not the same as grade. Ethiopia grades export coffee by physical defects and cup quality, not by size alone. Size is one preparation detail buyers use to predict roast uniformity and processing consistency. That is why professional lot sheets list screen size beside moisture, defects, and sensory notes rather than using it as a stand-alone quality claim.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Term</th>
              <th className='p-3 text-left font-bold'>What It Means</th>
              <th className='p-3 text-left font-bold'>Why Buyers Use It</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Screen 14, 15, 16</td>
              <td className='p-3'>Bean retained on a sieve sized 14/64, 15/64, or 16/64 inch</td>
              <td className='p-3'>Gives a common physical language across suppliers and dry mills</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>15 up</td>
              <td className='p-3'>Prepared lot where target beans are Screen 15 and above</td>
              <td className='p-3'>Useful for espresso and repeatable production roasting</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Dominant screen</td>
              <td className='p-3'>The range that makes up most of the lot, for example 70% Screen 15 to 16</td>
              <td className='p-3'>More informative than a single minimum threshold</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Below-screen tolerance</td>
              <td className='p-3'>Share of beans allowed under the target screen, often expressed as a percentage</td>
              <td className='p-3'>Protects buyers from overly broad lots without forcing unrealistic prep</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Mixed screen</td>
              <td className='p-3'>Lot with deliberate or unavoidable spread across multiple sizes</td>
              <td className='p-3'>Can be acceptable if density, moisture, and cup stay aligned with the intended use</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h3 className='font-bold text-lg mb-3'>Practical rule</h3>
        <p className='text-sm text-gray-700'>
          A narrow size spread generally makes roasting easier. It does not guarantee a better cup. Read screen size together with <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline font-semibold'>defect counts</Link>, <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline font-semibold'>moisture and water activity</Link>, and a calibrated <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline font-semibold'>cupping result</Link>.
        </p>
      </div>

      {/* Section 2 */}
      <h2 id='why-ethiopia-runs-small' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMapPin className='w-8 h-8 text-amber-600' />
        2. Why Ethiopian coffee often screens smaller
      </h2>
      <p className='my-4'>
        Ethiopian coffee frequently screens smaller than buyers used to Colombia, Central America, or Kenya expect. That is not automatically a warning sign. It usually reflects variety mix, altitude, and how Ethiopian mills balance yield loss against prep quality. In other words, smaller beans can be normal in excellent coffee.
      </p>

      <div className='grid md:grid-cols-3 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h3 className='font-bold mb-2'>Landrace Diversity</h3>
          <p className='text-sm text-gray-700'>Ethiopia's heirloom and local landrace populations do not size as uniformly as highly selected commercial cultivars. A lot can be clean, dense, and cup beautifully while still containing a broader mix of bean sizes.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h3 className='font-bold mb-2'>High-Elevation Growing</h3>
          <p className='text-sm text-gray-700'>Many Ethiopian coffees mature slowly at high elevations. Slow cherry development often increases density and cup complexity, but it does not always create a physically larger seed. Small and dense is a normal Ethiopian combination.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h3 className='font-bold mb-2'>Sorting Economics</h3>
          <p className='text-sm text-gray-700'>To deliver a very tight 15 up or 16 up prep, a dry mill has to remove more coffee. Buyers pay for that yield loss. In some lots, oversorting removes saleable coffee without improving cup performance enough to justify the premium.</p>
        </div>
      </div>

      <p className='my-4'>
        Industry evidence supports this. In <a href='https://royalcoffee.com/green-coffee-analytics-part-ii-screen-size/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>Royal Coffee's screen size analysis</a>, high-scoring Ethiopian examples were noted where more than half the coffee screened at 15 and under, and one Sidama example reached up to 36% at Screen 14 and under without preventing a strong cup result. That is exactly why importers should not treat Ethiopian size distribution the way they would a uniform Colombian Supremo-style preparation.
      </p>
      <p className='my-4'>
        Across the cooperatives and washing stations we work with, washed Yirgacheffe and Sidama lots often reward buyers who accept a smaller dominant screen provided the preparation is clean and the cup is transparent. For buyers chasing classic Ethiopian florals, forcing a 16-up requirement can remove too much of the profile they came to Ethiopia to buy.
      </p>

      {/* Section 3 */}
      <h2 id='when-size-matters' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineShieldCheck className='w-8 h-8 text-amber-600' />
        3. When screen size matters in a buying decision
      </h2>
      <p className='my-4'>
        Screen size matters most when uniformity changes the way the coffee behaves in your production system. That usually means roasting consistency, throughput planning, and how tightly you need the landed lot to resemble the approval sample. It matters much less when buyers are using it as a symbolic shorthand for prestige.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h3 className='font-bold mb-2'>Where It Matters</h3>
          <p className='text-sm text-gray-700'>Espresso roasting, private-label production, and larger batch sizes benefit from tighter screens because heat moves through the batch more evenly. Narrow preparation also makes it easier to repeat a roast profile across multiple production runs.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h3 className='font-bold mb-2'>Where It Does Not Decide Quality Alone</h3>
          <p className='text-sm text-gray-700'>Single-origin filter programs, sample evaluation, and micro-lot buying should not reject smaller screens automatically. In these programs, density, cleanliness, and cup character normally matter more than bean size symbolism.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h3 className='font-bold mb-2'>What Size Can Help Reveal</h3>
          <p className='text-sm text-gray-700'>Very broad spread can signal loose dry mill calibration or a supplier that prepared the lot to a price point instead of a profile. That is a process conversation, not just a sieve conversation.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h3 className='font-bold mb-2'>What Size Cannot Tell You</h3>
          <p className='text-sm text-gray-700'>Screen size cannot tell you if the coffee is sweet, clean, floral, or stable in transit. For those answers, you still need moisture data, defect prep, and a real sensory evaluation.</p>
        </div>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h3 className='font-bold text-lg mb-3'>A useful buyer sequence</h3>
        <p className='text-sm text-gray-700'>
          First ask whether the lot fits the flavor target. Second ask whether the prep is clean enough for the program. Third ask whether the screen spread is tight enough for your production system. Buyers who reverse this order often eliminate good Ethiopian offers for the wrong reason.
        </p>
      </div>

      {/* Section 4 */}
      <h2 id='origin-expectations' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineArrowTrendingUp className='w-8 h-8 text-amber-600' />
        4. Typical screen-size expectations by origin and process
      </h2>
      <p className='my-4'>
        There is no single Ethiopian screen-size rule. Screen distribution shifts by region, process, season, and mill choice. Still, buyers can work with broad trade expectations. The table below is a practical sourcing reference, not a legal standard.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Origin / Process</th>
              <th className='p-3 text-left font-bold'>Typical Dominant Screens</th>
              <th className='p-3 text-left font-bold'>What Buyers Should Expect</th>
              <th className='p-3 text-left font-bold'>Best Fit</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline'>Yirgacheffe washed</Link></td>
              <td className='p-3'>14 to 16</td>
              <td className='p-3'>Smaller beans are common; judge by cup clarity and clean prep before rejecting the size spread</td>
              <td className='p-3'>Filter roasters, premium tea-like single origins</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline'>Guji natural</Link></td>
              <td className='p-3'>15 to 17</td>
              <td className='p-3'>Usually a bit broader and larger than highland washed lots, but still not uniformly "big bean"</td>
              <td className='p-3'>Espresso, fruit-forward single origins, premium blends</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline'>Sidama washed or natural</Link></td>
              <td className='p-3'>14 to 16 washed; 15 to 17 natural</td>
              <td className='p-3'>Wide quality range, so pair size data with defects and moisture</td>
              <td className='p-3'>Flexible sourcing for filter, espresso, and blends</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-limu' className='text-amber-700 hover:underline'>Limu washed</Link></td>
              <td className='p-3'>15 to 17</td>
              <td className='p-3'>More forgiving when buyers want cleaner prep and repeatability</td>
              <td className='p-3'>Espresso blends, mid-priced single origins</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-harar' className='text-amber-700 hover:underline'>Harar natural</Link></td>
              <td className='p-3'>14 to 15</td>
              <td className='p-3'>Broad screen distribution is common; buyers need strong prep discipline more than large screens</td>
              <td className='p-3'>Distinctive naturals, niche blend components</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-jimma' className='text-amber-700 hover:underline'>Jimma and commercial western lots</Link></td>
              <td className='p-3'>13 to 15</td>
              <td className='p-3'>Use minimum floor specs and defect controls if the program is price-sensitive</td>
              <td className='p-3'>House blends, commercial and value programs</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        A useful internal distinction is this: washed highland lots can be small but elegant, while lower-prep commercial lots can be large enough in places yet still inconsistent. The buying mistake is assuming those two variables move together.
      </p>

      {/* Section 5 */}
      <h2 id='buyer-personas' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineUserGroup className='w-8 h-8 text-amber-600' />
        5. Buyer personas: which prep fits which program
      </h2>
      <p className='my-4'>
        Screen-size requirements should match the commercial use of the coffee. The same Ethiopian prep can be too loose for one program and perfectly rational for another.
      </p>

      <div className='grid md:grid-cols-3 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h3 className='font-bold mb-2'>Specialty Filter Roaster</h3>
          <p className='text-sm text-gray-700'>A mid-size European filter roaster launching a floral Yirgacheffe should usually accept a 14 to 16 dominant screen if density is strong and the cup is transparent. Requiring 16 up often removes classic Ethiopian material and pushes the offer into a price band that does not improve the cup enough to justify the loss of availability.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h3 className='font-bold mb-2'>Espresso Blend Producer</h3>
          <p className='text-sm text-gray-700'>A larger roaster using Ethiopian coffee for top-note sweetness in espresso has more reason to ask for 15 up or a tighter dominant range. The goal is not visual prestige; it is to reduce roast variance across repeated production runs where underdeveloped small beans and darker outsized beans show up quickly in the cup.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h3 className='font-bold mb-2'>Importer / Private Label Program</h3>
          <p className='text-sm text-gray-700'>A private-label importer should write a minimum floor and below-screen tolerance into the contract, then pair it with moisture and defect clauses. That protects landing consistency without forcing an exporter to oversort away saleable coffee. In this model, a clean 14 up with controlled tolerance can outperform a vague promise of "large beans."</p>
        </div>
      </div>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h3 className='font-bold text-lg mb-3'>Original buyer insight</h3>
        <p className='text-sm text-gray-700'>
          Ethiopian screen size should be discussed like a tolerance band, not a trophy. Buyers who move from absolute minimum screens to dominant-screen-plus-tolerance specs usually source more distinctive coffee at a better net value, especially in washed programs where the best cup lots may never present as oversized beans.
        </p>
      </div>

      {/* Section 6 */}
      <h2 id='contract-language' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineDocumentText className='w-8 h-8 text-amber-600' />
        6. How to write screen-size requirements into contracts
      </h2>
      <p className='my-4'>
        The best screen-size clause is specific enough to protect the buyer, but flexible enough to reflect how Ethiopian coffee is actually prepared. One loose line like "large bean" creates more disputes than it solves.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Contract Field</th>
              <th className='p-3 text-left font-bold'>Recommended Wording</th>
              <th className='p-3 text-left font-bold'>Why It Helps</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Minimum screen floor</td>
              <td className='p-3'>For example, Screen 14 up or Screen 15 up</td>
              <td className='p-3'>Sets a clear physical threshold without pretending the whole lot is one size</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Dominant range</td>
              <td className='p-3'>For example, target 70% to 80% Screen 15 to 16</td>
              <td className='p-3'>Communicates expected preparation more precisely than a single number</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Below-screen tolerance</td>
              <td className='p-3'>For example, max 10% below Screen 15</td>
              <td className='p-3'>Gives a clean acceptance limit at arrival or pre-shipment review</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Prep disclosure</td>
              <td className='p-3'>State whether the lot is screen-sorted, density-sorted, color-sorted, or mixed screen</td>
              <td className='p-3'>Helps buyers judge whether the spec reflects real mill work</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Companion metrics</td>
              <td className='p-3'>Include moisture, defect count, cup score, and packaging standard</td>
              <td className='p-3'>Prevents size from carrying weight it cannot support on its own</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-gray-50 border border-gray-200 rounded-lg p-6 my-6'>
        <h3 className='font-bold text-lg mb-3'>Sample contract language</h3>
        <p className='text-sm text-gray-700 my-2'>
          <span className='font-semibold'>Washed single-origin filter lot:</span> Screen 14 up, target dominant range Screen 15 to 16, maximum 12% below Screen 14, moisture 10.5 to 11.5%, clean cup, exporter to provide pre-shipment screen distribution and defect report.
        </p>
        <p className='text-sm text-gray-700 my-2'>
          <span className='font-semibold'>Espresso or blend lot:</span> Screen 15 up, maximum 8% below Screen 15, density-sorted and color-sorted preparation, moisture 10.0 to 11.5%, lot to match approved pre-shipment sample within agreed defect and cup parameters.
        </p>
      </div>

      <p className='my-4'>
        Buyers working through the <a href='https://www.ecx.com.et/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>official ECX market system</a> should remember that an exchange grade code does not tell the full story of prep. The exporter still needs to disclose actual screen distribution on the lot sheet if screen uniformity matters to your program.
      </p>

      {/* Section 7 */}
      <h2 id='when-to-pay-more' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='w-8 h-8 text-amber-600' />
        7. When to pay more for larger screens, and when not to
      </h2>
      <p className='my-4'>
        Paying more for a tighter or larger screen preparation makes sense only when that preparation materially improves the way you roast, sell, or contract the coffee. The premium usually reflects sorting loss and additional mill work, not a magical quality jump.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='bg-amber-50 p-6 rounded-lg border border-amber-200'>
          <h3 className='font-bold text-lg mb-3'>Pay the premium when</h3>
          <ul className='space-y-2 text-sm text-gray-700'>
            <li>You roast large production batches where mixed screens create visible roast spread.</li>
            <li>You are matching a stable espresso profile across repeated shipments.</li>
            <li>You need a cleaner lot sheet for private-label or specification-heavy contracts.</li>
            <li>You are buying a style where a density-sorted, screen-tight prep helps justify a higher retail price.</li>
          </ul>
        </div>
        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h3 className='font-bold text-lg mb-3'>Do not pay extra just because</h3>
          <ul className='space-y-2 text-sm text-gray-700'>
            <li>The lot is for filter and the cup is already expressive, clean, and stable.</li>
            <li>The coffee is a classic washed Ethiopian profile that naturally runs smaller.</li>
            <li>You are using size as a proxy for quality rather than reading the full prep data.</li>
            <li>The supplier cannot show how the tighter prep improved the actual lot, not just the story around it.</li>
          </ul>
        </div>
      </div>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700'>
          <span className='font-semibold'>Market intelligence:</span> the <a href='https://www.fas.usda.gov/data/gain/2025/06/ethiopia-coffee-annual' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>USDA Ethiopia Coffee Annual</a> projects 2025/26 production at 11.6 million 60-kg bags and exports at 7.8 million bags. More volume improves buyer choice, but it does not erase the prep economics of tight screens. If an exporter removes more coffee to create a narrower size spread, the cost of that lost yield still shows up in the offer.
        </p>
      </div>
      <p className='my-4'>
        There is also a technical reason to pay selectively. In one industry experiment, Royal Coffee found that a narrow Screen 16 sort cupped more than a point above the unsorted control in a single test coffee, while extraction differences were negligible. That suggests the premium makes the most sense when roast behavior is the main issue, not when a buyer expects bigger beans alone to deliver a stronger flavor result.
      </p>

      {/* Section 8 */}
      <h2 id='conclusion' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineLightBulb className='w-8 h-8 text-amber-600' />
        8. Conclusion: how to use Ethiopian coffee screen size in real buying
      </h2>
      <p className='my-4'>
        For importers, this Ethiopian coffee screen size guide comes down to matching physical preparation with the commercial job the lot needs to do. Washed filter coffees can run smaller and still outperform larger beans in the cup, while espresso, private-label, and production roasting programs usually benefit from tighter dominant ranges and clearer below-screen limits.
      </p>
      <p className='my-4'>
        The strongest buying language is specific. Ask for the dominant screen range, the below-screen tolerance, the defect report, the moisture result, and the sample match standard. That protects landed consistency without paying for unnecessary sorting loss or rejecting distinctive Ethiopian lots for the wrong reason.
      </p>

      {/* CTA block */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3'>Need Ethiopian lot sheets built around real prep specs?</h3>
        <p className='my-2'>
          We help importers match screen-size tolerances to the actual use case, from smaller-screen washed filters to tighter espresso-ready naturals. If you need offers with dominant screen ranges, sample alignment, and export-ready prep notes, we can structure that at origin.
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
        <h2 className='text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2'>
          <HiOutlineQuestionMarkCircle className='text-amber-600' /> Frequently Asked Questions
        </h2>
        <div className='space-y-6'>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>What screen size is typical for Ethiopian coffee?</h3>
            <p className='text-sm text-gray-600'>Most Ethiopian specialty lots do not present as unusually large beans. Washed highland coffees often run heavily in Screen 14 to 16, while many naturals sit more comfortably in 15 to 17. The key issue is the dominant range and tolerance, not chasing oversized beans for their own sake.</p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>Does smaller screen size mean lower quality?</h3>
            <p className='text-sm text-gray-600'>No. In Ethiopia, smaller beans can still be dense, clean, and high scoring. Quality should be judged through defects, moisture, cup profile, and preparation consistency. Smaller screen size becomes a problem only when the spread is too broad for the intended roast profile or when the lot is physically rough.</p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>Are screen size and grade the same thing in Ethiopia?</h3>
            <p className='text-sm text-gray-600'>No. Ethiopian grade is determined by physical defects and cup quality. Screen size is a preparation detail that helps buyers understand uniformity and roast behavior. A smaller-screen lot can still grade well, and a visually larger lot can still disappoint if defects, density, or cup quality are weak.</p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>What screen-size spec should I put in a contract?</h3>
            <p className='text-sm text-gray-600'>Use a minimum floor plus a tolerance, not vague language. For example, Screen 14 up with a dominant 15 to 16 range and a capped below-screen percentage works far better than saying "large bean." Pair that clause with moisture, defects, and sample approval language.</p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>When should I insist on tighter screens?</h3>
            <p className='text-sm text-gray-600'>Ask for tighter screens when repeatability matters more than sourcing breadth, especially in espresso production, private-label contracts, or larger roasting systems. For distinctive single-origin filter programs, the better decision is often to accept a smaller dominant range if the cup is clean and the prep is disciplined.</p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h2 className='text-xl font-bold mb-4'>Related Articles</h2>
        <div className='grid md:grid-cols-2 gap-6'>
          <div>
            <h3 className='font-semibold mb-2 text-sm'>Quality and Evaluation</h3>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality Control and Defects Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline'>Green Coffee Moisture Content and Water Activity Guide</Link></li>
              <li>&bull; <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup and Evaluate Ethiopian Coffee Samples</Link></li>
            </ul>
          </div>
          <div>
            <h3 className='font-semibold mb-2 text-sm'>Processing and Prep</h3>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Dry Milling Export Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline'>Green Coffee Packaging Bag Types Guide</Link></li>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee</Link></li>
            </ul>
          </div>
          <div>
            <h3 className='font-semibold mb-2 text-sm'>Origins and Lot Selection</h3>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/yirgacheffe-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Yirgacheffe Coffee Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Guji Coffee Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/limu-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Limu Coffee Sourcing Guide</Link></li>
            </ul>
          </div>
          <div>
            <h3 className='font-semibold mb-2 text-sm'>Buying and Contracts</h3>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts and Payment Terms</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process for Buyers</Link></li>
              <li>&bull; <Link href='/insights/micro-lot-ethiopian-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Micro-Lot Ethiopian Coffee Sourcing Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter working through trusted sourcing relationships across Yirgacheffe, Sidama, Guji, Harar, Limu, Jimma, and western Ethiopia.
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
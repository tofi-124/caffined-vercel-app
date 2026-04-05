import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineGlobeAlt,
  HiOutlineClipboardDocumentList,
  HiOutlineLightBulb,
  HiOutlineQuestionMarkCircle,
  HiOutlineMapPin,
  HiOutlineCheckCircle,
  HiOutlineBeaker,
  HiOutlineAdjustmentsHorizontal
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function GuideEthiopianCoffeeOrigins({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        A region-by-region breakdown of altitude, processing, cup profiles, and sourcing considerations for importers and specialty roasters
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Ethiopia&apos;s coffee-growing regions span diverse altitudes, climates, and processing traditions that shape each origin&apos;s green coffee character.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Map of Ethiopian green coffee origins showing major growing regions including Yirgacheffe, Guji, Sidamo, Harar, Limu, and Jimma'
            fill
            objectFit='contain'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>

        <figcaption className='font-inconsolata text-xs my-1 text-gray-600'>
          Ethiopia produces coffee across more than a dozen distinct growing zones, each with its own altitude band, heirloom genetics, and processing infrastructure.
        </figcaption>
      </figure>

      {/* CATEGORY BADGE */}
      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Sourcing Guide / Origin Reference / Green Coffee Regions</span>
      </div>

      {/* EXTERNAL AUTHORITY LINKS */}
      <div className='my-4 text-sm text-gray-700'>
        <p className='font-semibold mb-1'>Further reading:</p>
        <ul className='list-disc ml-5 space-y-1'>
          <li>
            <a href='https://www.ico.org' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>International Coffee Organization (ICO)</a> &ndash; global production data, composite prices, and country profiles for Ethiopia.
          </li>
          <li>
            <a href='https://www.ecx.com.et' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>Ethiopia Commodity Exchange (ECX)</a> &ndash; daily auction prices, grading standards, and warehouse information.
          </li>
          <li>
            <a href='https://apps.fas.usda.gov/psdonline/circulars/coffee.pdf' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>USDA Foreign Agricultural Service</a> &ndash; semi-annual production and export forecasts for Ethiopian coffee.
          </li>
        </ul>
      </div>

      {/* KEY TAKEAWAY BOX */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />
          Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Ethiopia&apos;s green coffee origins (Yirgacheffe, Guji, Sidamo, Harar, Limu, Kaffa, Jimma, and others) each produce beans shaped by specific altitude bands, heirloom genetics, and <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline font-bold'>processing infrastructure</Link>. For importers and roasters, &quot;origin&quot; is more than a place name; it signals a predictable flavor window, grade availability, and harvest timing. This guide maps every major region so buyers can match Ethiopian origins to their target cup profile, roast style, and menu positioning.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='bg-gray-50 p-6 rounded-lg my-8 border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          What This Guide Covers
        </h3>
        <div className='grid md:grid-cols-2 gap-x-8 gap-y-2'>
          <div>
            <p className='font-bold text-sm mb-2'>Origin Fundamentals</p>
            <ul className='space-y-1.5 text-sm'>
              <li><a href='#what-origin-means' className='text-amber-700 hover:underline'>What &quot;Origin&quot; Actually Means for Buyers</a></li>
              <li><a href='#comparison-table' className='text-amber-700 hover:underline'>Ethiopian Origins at a Glance (Comparison Table)</a></li>
            </ul>
          </div>
          <div>
            <p className='font-bold text-sm mb-2'>Region Profiles</p>
            <ul className='space-y-1.5 text-sm'>
              <li><a href='#yirgacheffe' className='text-amber-700 hover:underline'>Yirgacheffe</a></li>
              <li><a href='#guji' className='text-amber-700 hover:underline'>Guji</a></li>
              <li><a href='#sidamo' className='text-amber-700 hover:underline'>Sidamo (Sidama)</a></li>
              <li><a href='#harar' className='text-amber-700 hover:underline'>Harar</a></li>
              <li><a href='#limu' className='text-amber-700 hover:underline'>Limu</a></li>
              <li><a href='#kaffa' className='text-amber-700 hover:underline'>Kaffa</a></li>
              <li><a href='#jimma' className='text-amber-700 hover:underline'>Jimma</a></li>
              <li><a href='#other-regions' className='text-amber-700 hover:underline'>Other Notable Regions</a></li>
            </ul>
          </div>
          <div>
            <p className='font-bold text-sm mb-2'>Buyer Strategy</p>
            <ul className='space-y-1.5 text-sm'>
              <li><a href='#choosing-origin' className='text-amber-700 hover:underline'>Choosing the Right Origin for Your Menu</a></li>
              <li><a href='#sourcing-buyers' className='text-amber-700 hover:underline'>Sourcing Ethiopian Origins: What Buyers Should Know</a></li>
            </ul>
          </div>
          <div>
            <p className='font-bold text-sm mb-2'>Reference</p>
            <ul className='space-y-1.5 text-sm'>
              <li><a href='#faq' className='text-amber-700 hover:underline'>FAQ</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* INTRODUCTION */}
      <p className='my-4'>
        Every Ethiopian green coffee origin tells a different story in the cup. Yirgacheffe delivers jasmine and bergamot. Guji opens with stone fruit and honey. Harar brings dried fruit intensity that stands up to dark roasts. For importers and roasters sourcing <strong>Ethiopian green coffee origins</strong>, the challenge is not finding good coffee; it is matching the right region to your roast profile, customer base, and price point.
      </p>

      <p className='my-4'>
        This guide breaks down each major growing region with the specific data buyers need: altitude ranges, dominant processing methods, typical cup profiles, grade availability, and recommended roast approaches. Where Ethiopian coffee fits in global agriculture starts with the traditions behind its cultivation; our guide to <Link href='/insights/coffee-is-agriculture-production-farming' className='text-amber-700 hover:underline font-bold'>coffee farming and production in Ethiopia</Link> covers the four farming systems that shape lot character. The cultural roots run even deeper, reflected in the <Link href='/insights/ethiopian-coffee-ceremony' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee ceremony</Link> practiced across every growing region.
      </p>

      <p className='my-4 text-sm text-gray-700 font-inconsolata'>
        Note: Cup profiles vary by lot, washing station, and crop year. The data below represents common reference points used in specialty coffee trading, not guarantees for any single shipment.
      </p>

      {/* WHAT ORIGIN MEANS */}
      <h3 id='what-origin-means' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineGlobeAlt className='text-amber-600 flex-shrink-0' />
        What &quot;Origin&quot; Actually Means for Buyers
      </h3>

      <p className='my-4'>
        In the green coffee trade, &quot;origin&quot; encodes five variables that determine what arrives in your warehouse:
      </p>

      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'><span className='font-bold'>Geography and microclimate:</span> Latitude, rainfall patterns, and soil composition set the baseline for bean density and sugar development.</li>
        <li className='my-2'><span className='font-bold'>Altitude:</span> Higher elevations (1,800m+) slow cherry maturation, producing denser beans with more complex acidity. Lower elevations yield softer, rounder cups with less brightness.</li>
        <li className='my-2'><span className='font-bold'>Genetics:</span> Ethiopia&apos;s thousands of indigenous heirloom Arabica varieties create flavor diversity unmatched by any other origin. For a deeper look at what &quot;heirloom&quot; actually means, see our <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline font-bold'>guide to Ethiopian heirloom varieties and landraces</Link>.</li>
        <li className='my-2'><span className='font-bold'>Processing method:</span> Washed coffees emphasize clarity and acidity; naturals add fruit intensity and body. The same washing station may produce both. Our <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline font-bold'>washed vs. natural processing comparison</Link> covers the trade implications in detail.</li>
        <li className='my-2'><span className='font-bold'>Mill and washing station:</span> Infrastructure quality at the wet mill (fermentation control, water management) and dry mill (sorting, grading) directly affects consistency and defect rates.</li>
      </ul>

      <p className='my-4'>
        When a buyer asks for &quot;Yirgacheffe G1 washed,&quot; they are specifying all five variables at once. Understanding this framework helps importers evaluate whether a lot&apos;s price reflects its true quality positioning.
      </p>

      {/* COMPARISON TABLE */}
      <h3 id='comparison-table' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineAdjustmentsHorizontal className='text-amber-600 flex-shrink-0' />
        Ethiopian Green Coffee Origins at a Glance
      </h3>

      <p className='my-4'>
        The table below compares Ethiopia&apos;s major coffee-growing regions across the variables that matter most to green buyers. Each region name links to its dedicated origin page for current lot availability.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Region</th>
              <th className='p-3 text-left'>Altitude (m)</th>
              <th className='p-3 text-left'>Primary Processing</th>
              <th className='p-3 text-left'>Signature Cup Notes</th>
              <th className='p-3 text-left'>Typical Grades</th>
              <th className='p-3 text-left'>Best Use</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            <tr className='bg-white'>
              <td className='p-3 font-medium'><Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 underline'>Yirgacheffe</Link></td>
              <td className='p-3'>1,700 &ndash; 2,200</td>
              <td className='p-3'>Washed &amp; Natural</td>
              <td className='p-3'>Jasmine, bergamot, lemon, black tea</td>
              <td className='p-3'>G1, G2</td>
              <td className='p-3'>Light roast, pour-over, single origin</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-medium'><Link href='/ethiopian-coffee-guji' className='text-amber-700 underline'>Guji</Link></td>
              <td className='p-3'>1,800 &ndash; 2,300</td>
              <td className='p-3'>Washed &amp; Natural</td>
              <td className='p-3'>Stone fruit, lemongrass, floral honey</td>
              <td className='p-3'>G1, G2</td>
              <td className='p-3'>Single-origin espresso, filter</td>
            </tr>
            <tr className='bg-white'>
              <td className='p-3 font-medium'><Link href='/ethiopian-coffee-sidamo' className='text-amber-700 underline'>Sidamo</Link></td>
              <td className='p-3'>1,550 &ndash; 2,200</td>
              <td className='p-3'>Washed &amp; Natural</td>
              <td className='p-3'>Red berry, sugar cane, florals</td>
              <td className='p-3'>G1, G2, G3</td>
              <td className='p-3'>Filter, espresso, versatile blends</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-medium'><Link href='/ethiopian-coffee-harar' className='text-amber-700 underline'>Harar</Link></td>
              <td className='p-3'>1,500 &ndash; 2,100</td>
              <td className='p-3'>Natural (primarily)</td>
              <td className='p-3'>Dried fruit, cocoa, wine, spice</td>
              <td className='p-3'>G1, G3, G4</td>
              <td className='p-3'>Dark roast, blends, distinctive single origin</td>
            </tr>
            <tr className='bg-white'>
              <td className='p-3 font-medium'><Link href='/ethiopian-coffee-limu' className='text-amber-700 underline'>Limu</Link></td>
              <td className='p-3'>1,400 &ndash; 2,000</td>
              <td className='p-3'>Washed (primarily)</td>
              <td className='p-3'>Citrus zest, cocoa, honey</td>
              <td className='p-3'>G2, G3</td>
              <td className='p-3'>Everyday single origin, espresso blends</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-medium'>Kaffa</td>
              <td className='p-3'>1,400 &ndash; 2,000</td>
              <td className='p-3'>Washed &amp; Natural</td>
              <td className='p-3'>Herbal tea, dark fruit, forest floor</td>
              <td className='p-3'>G2, G3</td>
              <td className='p-3'>Blends, medium roast single origin</td>
            </tr>
            <tr className='bg-white'>
              <td className='p-3 font-medium'><Link href='/ethiopian-coffee-jimma' className='text-amber-700 underline'>Jimma</Link></td>
              <td className='p-3'>1,400 &ndash; 1,900</td>
              <td className='p-3'>Natural (primarily)</td>
              <td className='p-3'>Cocoa, spice, earth, muted fruit</td>
              <td className='p-3'>G3, G4</td>
              <td className='p-3'>Commercial blends, volume buyers</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* REGION PROFILES */}
      <h3 id='yirgacheffe' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineMapPin className='text-amber-600 flex-shrink-0' />
        Yirgacheffe: Floral, Delicate, and Unmistakable
      </h3>

      <p className='my-4'>
        Yirgacheffe is Ethiopia&apos;s most internationally recognized coffee origin and the benchmark for washed African coffees. Located in the Gedeo Zone of southern Ethiopia, the region&apos;s combination of high altitude (1,700 to 2,200 meters), consistent rainfall, and deep volcanic soil produces beans with exceptional aromatic complexity.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'><span className='font-bold'>Zone:</span> Gedeo (SNNPR / South Ethiopia)</li>
          <li className='my-2'><span className='font-bold'>Altitude:</span> 1,700 &ndash; 2,200 m</li>
          <li className='my-2'><span className='font-bold'>Processing:</span> Washed (dominant); naturals increasingly common</li>
          <li className='my-2'><span className='font-bold'>Cup Profile:</span> Jasmine, bergamot, lemon zest, black tea body</li>
          <li className='my-2'><span className='font-bold'>Typical Grades:</span> G1 (specialty), G2</li>
          <li className='my-2'><span className='font-bold'>Roast Direction:</span> Light (City) to preserve florals and structural acidity</li>
        </ul>
      </div>

      <p className='my-4'>
        Washed Yirgacheffe G1 lots command premium prices and are among the most sought-after coffees on the ECX. For buyers, the key differentiator is the washing station: lots from Kochere, Gedeb, and Chelba kebeles each carry slightly different flavor signatures. Natural Yirgacheffe lots trade at a slight discount and offer intense blueberry and tropical fruit notes that appeal to a different segment of the specialty market. Explore current <Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline font-bold'>Yirgacheffe offerings</Link> for available lots.
      </p>

      <h3 id='guji' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineMapPin className='text-amber-600 flex-shrink-0' />
        Guji: Stone Fruit, Honey Sweetness, and Rising Prestige
      </h3>

      <p className='my-4'>
        Guji has moved from a sub-classification under Sidamo to a standalone origin recognized by the ECX. This reflects its distinctly different cup character: where Sidamo leans toward berries and sugar cane, Guji delivers white peach, apricot, and lemongrass with a syrupy body that excels in espresso.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'><span className='font-bold'>Zone:</span> Guji (Oromia, south/southeast)</li>
          <li className='my-2'><span className='font-bold'>Altitude:</span> 1,800 &ndash; 2,300 m</li>
          <li className='my-2'><span className='font-bold'>Processing:</span> Washed and natural (both well-established)</li>
          <li className='my-2'><span className='font-bold'>Cup Profile:</span> Stone fruit, lemongrass, floral honey, syrupy body</li>
          <li className='my-2'><span className='font-bold'>Typical Grades:</span> G1 (specialty), G2</li>
          <li className='my-2'><span className='font-bold'>Roast Direction:</span> Light to medium (City to City+) for clarity and sweetness</li>
        </ul>
      </div>

      <p className='my-4'>
        Guji&apos;s high elevation lots (above 2,000 meters) from areas like Hambela, Uraga, and Shakiso have scored consistently above 86 points in international cuppings. Competition-winning lots from Guji have generated significant attention from specialty importers in recent years. Both washed and natural lots perform well, though natural Guji tends to carry more tropical intensity. View available <Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline font-bold'>Guji green coffee lots</Link>, or compare all three origins side by side in our <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline font-bold'>Yirgacheffe vs Sidamo vs Guji comparison</Link>.
      </p>

      <h3 id='sidamo' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineMapPin className='text-amber-600 flex-shrink-0' />
        Sidamo (Sidama): Sweet, Berry-Forward, and Versatile
      </h3>

      <p className='my-4'>
        Sidamo (now officially Sidama region) is Ethiopia&apos;s largest coffee-producing zone by volume and one of the most versatile origins for buyers. The region&apos;s wide altitude range creates lots that span from bright, acidic specialty coffees at the highest elevations to rounder, fuller-bodied commercial grades at lower altitudes.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'><span className='font-bold'>Zone:</span> Sidama (South Ethiopia)</li>
          <li className='my-2'><span className='font-bold'>Altitude:</span> 1,550 &ndash; 2,200 m</li>
          <li className='my-2'><span className='font-bold'>Processing:</span> Washed and natural (both widely produced)</li>
          <li className='my-2'><span className='font-bold'>Cup Profile:</span> Red berry, sugar cane, florals, clean finish</li>
          <li className='my-2'><span className='font-bold'>Typical Grades:</span> G1, G2, G3</li>
          <li className='my-2'><span className='font-bold'>Roast Direction:</span> Light to medium; highlights sweetness and clarity</li>
        </ul>
      </div>

      <p className='my-4'>
        Sidamo&apos;s breadth makes it a practical anchor origin for roasters: it offers enough volume for year-round supply while delivering cup quality that works for both single-origin offerings and blends. The sub-regions of Bensa, Dale, and Aleta Wendo each carry distinct micro-profiles; within Bensa, the <Link href='/insights/bombe-sidama-coffee-sourcing-guide' className='text-amber-700 hover:underline font-bold'>Bombe micro-region</Link> has emerged as one of Sidama&apos;s highest-scoring specialty origins. For a head-to-head comparison with neighboring origins, see our <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline font-bold'>Yirgacheffe vs. Sidamo vs. Guji comparison</Link>. Browse current <Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline font-bold'>Sidamo lots</Link>.
      </p>

      <h3 id='harar' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineMapPin className='text-amber-600 flex-shrink-0' />
        Harar: Bold, Winey, and Historically Significant
      </h3>

      <p className='my-4'>
        Harar (also spelled Harrar or Hararghe) is Ethiopia&apos;s oldest coffee-exporting region and one of the world&apos;s first coffees traded internationally. Located in eastern Ethiopia, Harar is almost exclusively natural processed, giving it a bold, winey character that stands apart from the floral-forward southern origins.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'><span className='font-bold'>Zone:</span> Hararghe (Eastern Ethiopia)</li>
          <li className='my-2'><span className='font-bold'>Altitude:</span> 1,500 &ndash; 2,100 m</li>
          <li className='my-2'><span className='font-bold'>Processing:</span> Natural (traditional sun-dried)</li>
          <li className='my-2'><span className='font-bold'>Cup Profile:</span> Dried fruit, cocoa, wine, spice; occasional blueberry notes</li>
          <li className='my-2'><span className='font-bold'>Typical Grades:</span> G1 (limited), G3, G4</li>
          <li className='my-2'><span className='font-bold'>Roast Direction:</span> Medium to Full City; balances fruit intensity and body</li>
        </ul>
      </div>

      <p className='my-4'>
        Harar&apos;s flavor intensity makes it a strong blending component and a distinctive single-origin option for roasters targeting dark-roast customers. G1 Harar lots are less common than G3/G4 and command a premium when available. The natural process character means quality varies more between lots, making pre-shipment cupping samples essential. See current <Link href='/ethiopian-coffee-harar' className='text-amber-700 hover:underline font-bold'>Harar offerings</Link>.
      </p>

      <h3 id='limu' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineMapPin className='text-amber-600 flex-shrink-0' />
        Limu: Balanced, Citrusy, and Dependable
      </h3>

      <p className='my-4'>
        Limu sits in Oromia&apos;s western highlands and produces predominantly washed coffees known for balance rather than flashy acidity. For roasters who need a reliable Ethiopian origin that performs across brew methods without dominating a blend, Limu is a practical choice.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'><span className='font-bold'>Zone:</span> Limu (Oromia, western highlands)</li>
          <li className='my-2'><span className='font-bold'>Altitude:</span> 1,400 &ndash; 2,000 m</li>
          <li className='my-2'><span className='font-bold'>Processing:</span> Washed (dominant)</li>
          <li className='my-2'><span className='font-bold'>Cup Profile:</span> Citrus zest, cocoa, honey, balanced acidity</li>
          <li className='my-2'><span className='font-bold'>Typical Grades:</span> G2, G3</li>
          <li className='my-2'><span className='font-bold'>Roast Direction:</span> Medium (City+) enhances body while keeping citrus lift</li>
        </ul>
      </div>

      <p className='my-4'>
        Limu coffees are among the most competitively priced Ethiopian washed origins, making them accessible for roasters exploring Ethiopian offerings without the premium of Yirgacheffe or Guji. The balanced profile also makes Limu a strong espresso-blend base. View available <Link href='/ethiopian-coffee-limu' className='text-amber-700 hover:underline font-bold'>Limu green coffee lots</Link>. For sub-regions, grading, and pricing benchmarks, see our <Link href='/insights/limu-coffee-sourcing-guide' className='text-amber-700 hover:underline font-bold'>Limu coffee sourcing guide</Link>.
      </p>

      <h3 id='kaffa' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineMapPin className='text-amber-600 flex-shrink-0' />
        Kaffa: Wild-Rooted, Foresty, and Ancestral
      </h3>

      <p className='my-4'>
        Kaffa, in southwest Ethiopia, is widely cited as the biological birthplace of Arabica coffee. Wild coffee still grows in the region&apos;s highland forests, and the genetic diversity here exceeds that of any other origin on earth. For a deeper look at Ethiopia&apos;s role as the source of all Arabica, see our <Link href='/insights/ethiopia-coffee-origin-birthplace' className='text-amber-700 hover:underline font-bold'>Ethiopia as coffee&apos;s birthplace</Link> article.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'><span className='font-bold'>Zone:</span> Kaffa (Southwest Ethiopia)</li>
          <li className='my-2'><span className='font-bold'>Altitude:</span> 1,400 &ndash; 2,000 m</li>
          <li className='my-2'><span className='font-bold'>Processing:</span> Washed and natural (varies by station)</li>
          <li className='my-2'><span className='font-bold'>Cup Profile:</span> Herbal tea, dark fruit, forest floor, earthy undertones</li>
          <li className='my-2'><span className='font-bold'>Typical Grades:</span> G2, G3</li>
          <li className='my-2'><span className='font-bold'>Roast Direction:</span> Medium; brings balance and preserves structure</li>
        </ul>
      </div>

      <p className='my-4'>
        Kaffa lots are less common in specialty channels than Yirgacheffe or Guji, but they offer a unique story and flavor profile that appeals to roasters looking for differentiation. The &quot;forest coffee&quot; origin story resonates with consumers interested in biodiversity and sustainability.
      </p>

      <h3 id='jimma' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineMapPin className='text-amber-600 flex-shrink-0' />
        Jimma: Commercial Volume with Traditional Character
      </h3>

      <p className='my-4'>
        Jimma (also written Djimma) in Oromia is one of Ethiopia&apos;s largest coffee-producing zones by sheer volume. The region&apos;s lower altitudes and predominantly natural processing yield coffees with less brightness but solid body, making Jimma the workhorse origin for commercial buyers and blenders.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'><span className='font-bold'>Zone:</span> Jimma (Oromia, Southwest Ethiopia)</li>
          <li className='my-2'><span className='font-bold'>Altitude:</span> 1,400 &ndash; 1,900 m</li>
          <li className='my-2'><span className='font-bold'>Processing:</span> Natural (dominant); some washed lots</li>
          <li className='my-2'><span className='font-bold'>Cup Profile:</span> Cocoa, spice, earth; muted fruit compared to higher-altitude washed lots</li>
          <li className='my-2'><span className='font-bold'>Typical Grades:</span> G3, G4</li>
          <li className='my-2'><span className='font-bold'>Roast Direction:</span> Medium to medium-dark; smooths edges and deepens cocoa</li>
        </ul>
      </div>

      <p className='my-4'>
        For volume buyers who need consistent, cost-effective Ethiopian coffee for blends or institutional supply, Jimma delivers. G4 Jimma lots move in high volume at competitive prices, while G3 lots overlap with the lower end of the specialty market. View current <Link href='/ethiopian-coffee-jimma' className='text-amber-700 hover:underline font-bold'>Jimma availability</Link>.
      </p>

      {/* OTHER NOTABLE REGIONS */}
      <h3 id='other-regions' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineGlobeAlt className='text-amber-600 flex-shrink-0' />
        Other Notable Ethiopian Coffee Regions
      </h3>

      <p className='my-4'>
        Beyond the seven major origins, several emerging regions are gaining attention from specialty buyers:
      </p>

      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'><span className='font-bold'>Wellega (Nekemte):</span> Western Ethiopia, 1,500 to 2,100 m. Produces washed and natural lots with fruity, winey notes similar to Harar but with brighter acidity. Wellega coffees have gained recognition in recent cupping competitions.</li>
        <li className='my-2'><span className='font-bold'>Bench Maji:</span> Southwestern Ethiopia, 1,200 to 1,900 m. A lower-altitude region producing earthy, full-bodied naturals used primarily in commercial blends, but with occasional specialty micro-lots from higher-elevation areas.</li>
        <li className='my-2'><span className='font-bold'>Tepi / Bebeka:</span> Far southwest, 1,100 to 1,600 m. Historically associated with state farm production. Currently produces lower-grade commercial coffees, though the region&apos;s genetic diversity is significant for research and breeding programs.</li>
      </ul>

      {/* CHOOSING THE RIGHT ORIGIN */}
      <h3 id='choosing-origin' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCheckCircle className='text-amber-600 flex-shrink-0' />
        Choosing the Right Ethiopian Green Coffee Origin for Your Menu
      </h3>

      <p className='my-4'>
        Matching an Ethiopian origin to your menu position depends on three factors: brew method, roast profile, and customer expectations. Here is a practical framework:
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <ul className='font-inconsolata list-none'>
          <li className='my-3'><span className='font-bold'>Single-origin espresso:</span> Guji (natural or washed) for syrupy body and fruit complexity. Sidamo washed for clean sweetness and versatility.</li>
          <li className='my-3'><span className='font-bold'>Filter / pour-over feature:</span> Yirgacheffe washed for floral elegance. Guji washed for stone-fruit clarity.</li>
          <li className='my-3'><span className='font-bold'>Espresso-blend component:</span> Limu washed for balanced acidity without dominating the blend. Sidamo natural for berry sweetness.</li>
          <li className='my-3'><span className='font-bold'>Dark roast / bold offering:</span> Harar natural for winey intensity. Jimma for earthy, round body at a lower price point.</li>
          <li className='my-3'><span className='font-bold'>Signature / competition lot:</span> Guji G1 washed or natural from high-elevation stations (2,000m+). Yirgacheffe G1 from Kochere or Gedeb kebeles.</li>
        </ul>
      </div>

      <p className='my-4'>
        For a detailed side-by-side comparison of the three most popular specialty origins, see our <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline font-bold'>Yirgacheffe vs. Sidamo vs. Guji buying guide</Link>.
      </p>

      {/* SOURCING SECTION */}
      <h3 id='sourcing-buyers' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBeaker className='text-amber-600 flex-shrink-0' />
        Sourcing Ethiopian Origins: What Buyers Should Know
      </h3>

      <p className='my-4'>
        Moving from &quot;country-level origin&quot; to lot-level sourcing requires understanding four practical realities:
      </p>

      <h4 className='text-xl font-bold mt-6'>Grade Availability Varies by Region</h4>
      <p className='my-4'>
        Not every region produces G1 in volume. Yirgacheffe and Guji reliably offer G1 washed lots. Sidamo spans G1 through G3. Harar and Jimma skew toward G3/G4 with limited G1 availability. Matching your quality target to regional grade patterns avoids sourcing dead ends. For a complete breakdown of Ethiopia&apos;s grading system, see our <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline font-bold'>green coffee quality control and grading guide</Link>.
      </p>

      <h4 className='text-xl font-bold mt-6'>Harvest Timing Shapes Availability Windows</h4>
      <p className='my-4'>
        Ethiopia&apos;s harvest runs from October through February, but export readiness depends on processing method and dry milling schedules. Washed coffees typically ship 2 to 3 months after harvest; naturals take 3 to 5 months. High-altitude regions (Guji, Yirgacheffe) harvest later and ship later. Our <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee harvest calendar</Link> provides a month-by-month planning framework.
      </p>

      <h4 className='text-xl font-bold mt-6'>Processing Method Affects Price and Shelf Life</h4>
      <p className='my-4'>
        Washed Ethiopian coffees generally command higher FOB prices than naturals from the same region and grade, reflecting the higher processing cost and cleaner cup profile. Natural lots offer bolder flavors at a lower entry point but require more careful storage to maintain quality. Our <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline font-bold'>washed vs. natural processing guide</Link> covers the commercial implications for buyers.
      </p>

      <h4 className='text-xl font-bold mt-6'>Working with an Origin-Connected Exporter</h4>
      <p className='my-4'>
        The most effective way to source specific Ethiopian origins is through an exporter with established relationships at the washing-station level. This provides lot-level traceability, pre-shipment cupping samples, and consistency across crop years. For a complete procurement walkthrough, see our <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline font-bold'>step-by-step sourcing guide</Link>.
      </p>

      {/* FAQ SECTION */}
      <section id='faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2'>
          <HiOutlineQuestionMarkCircle className='text-amber-600 flex-shrink-0' />
          Frequently Asked Questions About Ethiopian Green Coffee Origins
        </h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What are the main Ethiopian coffee growing regions?</h4>
            <p className='text-sm text-gray-600'>Ethiopia&apos;s major coffee regions include Yirgacheffe (floral, tea-like), Guji (stone fruit, honey), Sidamo (berry, sweet), Harar (winey, dried fruit), Limu (citrus, balanced), Kaffa (foresty, earthy), and Jimma (cocoa, earthy). Each offers distinct profiles shaped by altitude, genetics, and processing.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How does altitude affect Ethiopian coffee flavor?</h4>
            <p className='text-sm text-gray-600'>Higher altitude (above 1,800 meters) slows cherry ripening, allowing more complex sugars and acids to develop. This produces denser beans with brighter acidity, floral aromatics, and greater complexity. Lower-altitude Ethiopian coffees tend toward rounder, earthier profiles with less brightness.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What does &quot;heirloom&quot; mean in Ethiopian coffee?</h4>
            <p className='text-sm text-gray-600'>&quot;Heirloom&quot; is a trade term for the thousands of indigenous Arabica varieties native to Ethiopia&apos;s forests. Unlike standardized cultivars (SL28, Caturra) bred in other countries, these landraces evolved naturally over centuries, producing extraordinary genetic diversity and unique flavor potential in each region.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Which Ethiopian coffee origin is best for espresso?</h4>
            <p className='text-sm text-gray-600'>Guji (washed or natural) delivers excellent espresso with syrupy body and fruit complexity. Sidamo washed is another strong choice for its clean sweetness and versatility. For bolder, darker espresso profiles, Harar naturals provide winey intensity that holds up at longer development times.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How can I request samples from specific Ethiopian regions?</h4>
            <p className='text-sm text-gray-600'>Work with an Ethiopian exporter who sources from multiple regions. Request pre-shipment cupping samples specifying the origin, grade, and processing method you are targeting. Most exporters, including Ethio Coffee, provide samples before buyers commit to container volumes.</p>
          </div>
        </div>
      </section>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Premium Ethiopian Green Coffee Direct from Origin</h4>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Import and Export PLC</span> exports G1 through G4 from Yirgacheffe, Guji, Sidamo, Harar, Limu, Jimma, and other Ethiopian origins. With three decades of sourcing relationships across Ethiopia&apos;s coffee regions, we provide lot-level traceability, pre-shipment samples, and professional export documentation. Contact us to discuss your origin requirements or request samples.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>
            View Our Offerings
          </Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            Request Samples
          </Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            How to Order
          </Link>
        </div>
      </div>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origin Deep Dives</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji Compared</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-vs-colombian-coffee' className='text-amber-700 hover:underline'>Ethiopian vs Colombian Coffee for Importers</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-vs-kenyan-coffee' className='text-amber-700 hover:underline'>Ethiopian vs Kenyan Coffee Compared</Link></li>
              <li>&bull; <Link href='/insights/ethiopia-coffee-origin-birthplace' className='text-amber-700 hover:underline'>Ethiopia: The Birthplace of Coffee</Link></li>
              <li>&bull; <Link href='/insights/harar-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Harar Coffee: Buyer&apos;s Sourcing Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality &amp; Processing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee Processing</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Ethiopian Heirloom Varieties and Landraces</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality Control and Grading</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Washing Stations Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Harvest Calendar</Link></li>
              <li>&bull; <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export</Link></li>
              <li>&bull; <Link href='/insights/direct-trade-ethiopian-farmers' className='text-amber-700 hover:underline'>Direct Trade with Ethiopian Farmers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Market &amp; Industry</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Ethiopian Coffee Certifications Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC, an Ethiopian green coffee exporter with three decades of sourcing relationships across all major growing regions. Origin data and cup profiles reflect common trade references; contact us for current lot availability and pricing.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineCheckCircle,
  HiOutlineGlobeAlt,
  HiOutlineBeaker,
  HiOutlineScale,
  HiOutlineTruck,
  HiOutlineCube,
  HiOutlineDocumentCheck,
  HiOutlineExclamationTriangle,
  HiOutlineQuestionMarkCircle,
  HiOutlineCalendarDays,
  HiOutlineBuildingOffice2,
  HiOutlineFire,
  HiOutlineChartBar,
} from 'react-icons/hi2'
import { PiMountains, PiDropHalfBottom, PiPlant } from 'react-icons/pi'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function CompleteGuideToUnderstandingCoffee({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      {/* H1 TITLE */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>

      {/* SUBTITLE */}
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        A stage-by-stage guide to how coffee is produced, processed, and exported. What every importer and roaster should evaluate at each step of the chain.
      </h2>

      {/* HERO IMAGE */}
      <figure>
        <figcaption className='font-inconsolata my-2 text-sm text-gray-500'>
          Green coffee moves through nine distinct stages from seed to export container. Buyers who understand each stage make sharper sourcing decisions.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Coffee from seed to cup stages showing green coffee beans ready for export, a buyer guide for importers and roasters'
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
        <span className='ml-2'>Green Coffee Buying / Supply Chain / Coffee Education / Importer Resources</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-2 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0' /> Key Takeaway
        </p>
        <p className='text-sm leading-relaxed'>
          Green coffee quality is determined across nine stages from seed to cup. Most buyers evaluate only the cupping score and FOB price, missing eight other decision points that affect consistency, shelf life, and margin. This guide walks through every stage of <strong>coffee from seed to cup</strong> from a buyer&apos;s perspective: what happens, what impacts quality and price, and what questions you should ask your exporter at each step.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#why-buyers' className='text-amber-700 hover:underline'>1. Why Buyers Need to Understand the Seed-to-Cup Chain</a></li>
          <li><a href='#varieties' className='text-amber-700 hover:underline'>2. Stage 1: Varieties and Genetics</a></li>
          <li><a href='#growing-conditions' className='text-amber-700 hover:underline'>3. Stage 2: Growing Conditions</a></li>
          <li><a href='#harvesting' className='text-amber-700 hover:underline'>4. Stage 3: Harvesting</a></li>
          <li><a href='#processing' className='text-amber-700 hover:underline'>5. Stage 4: Processing</a></li>
          <li><a href='#dry-milling' className='text-amber-700 hover:underline'>6. Stage 5: Dry Milling and Export Preparation</a></li>
          <li><a href='#grading' className='text-amber-700 hover:underline'>7. Stage 6: Grading and Quality Standards</a></li>
          <li><a href='#export-logistics' className='text-amber-700 hover:underline'>8. Stage 7: Export, Shipping, and Logistics</a></li>
          <li><a href='#arrival' className='text-amber-700 hover:underline'>9. Stage 8: Arrival, Quality Verification, and Storage</a></li>
          <li><a href='#roasting-communication' className='text-amber-700 hover:underline'>10. Stage 9: Roasting Considerations for Green Buyers</a></li>
          <li><a href='#ethiopian-story' className='text-amber-700 hover:underline'>11. Ethiopian Coffee&apos;s Seed-to-Cup Story</a></li>
          <li><a href='#buyer-mistakes' className='text-amber-700 hover:underline'>12. Common Buyer Mistakes at Each Stage</a></li>
          <li><a href='#faq-seed-to-cup' className='text-amber-700 hover:underline'>13. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* SECTION 1: WHY BUYERS NEED THIS */}
      <h2 id='why-buyers' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineChartBar className='text-amber-600' />
        Why Buyers Need to Understand the Seed-to-Cup Chain
      </h2>

      <p className='my-4'>
        Coffee from seed to cup passes through at least nine distinct stages before it reaches a roaster&apos;s hopper. Each stage introduces variables that affect cup quality, physical appearance, shelf life, and final cost. Yet many importers and roasters evaluate green coffee at only two points: the cupping table and the price sheet.
      </p>
      <p className='my-4'>
        That narrow focus creates blind spots. A buyer may reject a lot for &quot;flat acidity&quot; without realizing the issue traces back to low-altitude cultivation or extended drying times. Another may chase the lowest FOB price, not accounting for moisture-related weight loss during transit that erases the savings.
      </p>
      <p className='my-4'>
        Buyers who understand the full production chain gain three practical advantages. First, they ask better questions during sourcing conversations, which surfaces information exporters may not volunteer. Second, they set realistic expectations for quality and delivery timelines, because they know which stages are weather-dependent and which can be accelerated. Third, they catch problems early. A pre-shipment sample that shows unusual moisture content signals a drying or storage issue; recognizing it prevents a costly claim weeks later at the destination port.
      </p>
      <p className='my-4'>
        This guide covers every stage of the coffee supply chain from a buyer&apos;s perspective. Each section explains what happens, how it affects your purchasing decision, and what to verify. For deeper coverage of any single stage, internal links point to dedicated articles on this site.
      </p>

      {/* SECTION 2: VARIETIES */}
      <h2 id='varieties' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <PiPlant className='text-amber-600' />
        Stage 1: Varieties and Genetics
      </h2>

      <p className='my-4'>
        Every green coffee lot starts with a seed, and the genetic identity of that seed sets the upper ceiling for cup quality. Two species dominate commercial production: <strong>Coffea arabica</strong>, which accounts for roughly 60% of global output and virtually all specialty coffee, and <strong>Coffea canephora</strong> (Robusta), which fills the remaining 40%, primarily in instant coffee and commercial espresso blends.
      </p>
      <p className='my-4'>
        Within Arabica, variety matters far more than many buyers realize. The same origin, altitude, and processing method applied to different varieties produces noticeably different cups. Gesha (Geisha), for example, commands premiums of 5&#x2013;20&#x00D7; above standard Arabica because its genetics encode distinctive jasmine and bergamot aromatics no processing method can replicate.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-3'>Ethiopian Heirloom vs. Named Varieties</h3>
      <p className='my-4'>
        Ethiopia is the genetic origin of Arabica coffee, and its forests contain thousands of distinct landraces. Most Ethiopian export lots are labeled &quot;Ethiopian Heirloom,&quot; a collective term that masks enormous genetic diversity. Two Heirloom lots from the same woreda (district) can taste markedly different because they contain entirely different landrace populations. For buyers, this means flavor complexity and uniqueness, but also batch-to-batch variability that named single-cultivar origins (like Kenyan SL28 or Colombian Castillo) do not present.
      </p>
      <p className='my-4'>
        Research institutions, including the Jimma Agricultural Research Center (JARC), have released named Ethiopian varieties such as 74110, 74112, and Dega. These appear increasingly on specialty lot cards, giving buyers more flavor predictability while retaining Ethiopian character. For more detail on how Ethiopian coffee genetics compare across regions, see our guide to <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline font-bold'>Ethiopian heirloom varieties and landraces</Link>.
      </p>

      <div className='bg-blue-50 p-5 rounded-lg my-6 border border-blue-200'>
        <h4 className='font-bold mb-2'>Buyer Evaluation: Variety</h4>
        <ul className='text-sm space-y-2'>
          <li className='flex gap-2 items-start'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> Ask your exporter whether the lot is a single landrace, named variety, or mixed Heirloom. Mixed lots offer complexity; single-variety lots offer consistency.</li>
          <li className='flex gap-2 items-start'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> If the lot card lists &quot;Heirloom,&quot; request the specific woreda and washing station. These narrow the genetic range and give your roaster meaningful provenance for retail packaging.</li>
          <li className='flex gap-2 items-start'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> For repeat orders, ask whether the same smallholder group or cooperative supplied the lot. Genetic consistency between seasons depends on sourcing consistency.</li>
        </ul>
      </div>

      {/* SECTION 3: GROWING CONDITIONS */}
      <h2 id='growing-conditions' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <PiMountains className='text-amber-600' />
        Stage 2: Growing Conditions
      </h2>

      <p className='my-4'>
        Terroir sets the baseline flavor profile of a coffee before any human intervention. Altitude, temperature, rainfall, soil composition, and shade canopy all influence how cherries develop and, ultimately, how they taste. For green coffee buyers, terroir translates directly to bean density, sugar content, and acidity potential.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-3'>Altitude and Bean Density</h3>
      <p className='my-4'>
        Higher elevations mean cooler average temperatures, which slow cherry maturation from the standard 7&#x2013;9 months to 10&#x2013;12 months at extreme altitudes. Slower maturation allows more complex sugars and organic acids to accumulate in the seed. The result is a denser bean with higher potential for bright acidity and layered sweetness. Ethiopian coffees grown above 2,000 meters consistently produce the florals and citrus notes that specialty roasters prize.
      </p>
      <p className='my-4'>
        Bean density also affects roasting behavior. Denser beans absorb heat differently and tolerate lighter roast profiles without underdevelopment, which is why high-altitude Ethiopians are often roasted light to showcase origin character.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-3'>Ethiopian Growing Regions at a Glance</h3>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse border border-gray-300 text-sm'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border border-gray-300 p-3 text-left'>Region</th>
              <th className='border border-gray-300 p-3 text-left'>Altitude (masl)</th>
              <th className='border border-gray-300 p-3 text-left'>Typical Profile</th>
              <th className='border border-gray-300 p-3 text-left'>Common Processing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'><Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline'>Yirgacheffe</Link></td>
              <td className='border border-gray-300 p-3'>1,750&#x2013;2,200</td>
              <td className='border border-gray-300 p-3'>Floral, jasmine, bergamot, lemon</td>
              <td className='border border-gray-300 p-3'>Washed, Natural</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'><Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline'>Guji</Link></td>
              <td className='border border-gray-300 p-3'>1,800&#x2013;2,300</td>
              <td className='border border-gray-300 p-3'>Stone fruit, blueberry, complex sweetness</td>
              <td className='border border-gray-300 p-3'>Natural, Washed</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'><Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline'>Sidamo</Link></td>
              <td className='border border-gray-300 p-3'>1,500&#x2013;2,200</td>
              <td className='border border-gray-300 p-3'>Citrus, berry, wine-like, medium body</td>
              <td className='border border-gray-300 p-3'>Washed, Natural</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'><Link href='/ethiopian-coffee-harar' className='text-amber-700 hover:underline'>Harar</Link></td>
              <td className='border border-gray-300 p-3'>1,500&#x2013;2,100</td>
              <td className='border border-gray-300 p-3'>Blueberry, chocolate, wild fruit, heavy body</td>
              <td className='border border-gray-300 p-3'>Natural (dry processed)</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'><Link href='/ethiopian-coffee-limu' className='text-amber-700 hover:underline'>Limu</Link></td>
              <td className='border border-gray-300 p-3'>1,400&#x2013;2,100</td>
              <td className='border border-gray-300 p-3'>Balanced, spice, wine notes, moderate acidity</td>
              <td className='border border-gray-300 p-3'>Washed</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'><Link href='/ethiopian-coffee-jimma' className='text-amber-700 hover:underline'>Jimma</Link></td>
              <td className='border border-gray-300 p-3'>1,400&#x2013;2,000</td>
              <td className='border border-gray-300 p-3'>Earthy, spice, full body, lower acidity</td>
              <td className='border border-gray-300 p-3'>Natural, Washed</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4 text-sm text-gray-600'>
        For a full comparison of flavor profiles across these origins, see <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline font-bold'>Yirgacheffe vs. Sidamo vs. Guji</Link> and our <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline font-bold'>guide to Ethiopian coffee origins</Link>.
      </p>

      <div className='bg-blue-50 p-5 rounded-lg my-6 border border-blue-200'>
        <h4 className='font-bold mb-2'>Buyer Evaluation: Growing Conditions</h4>
        <ul className='text-sm space-y-2'>
          <li className='flex gap-2 items-start'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> Confirm the altitude range on the lot card. Lots listed simply as &quot;Sidamo&quot; can span 1,500 to 2,200 meters. A 700-meter range produces very different cup profiles.</li>
          <li className='flex gap-2 items-start'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> Ask about the specific kebele or woreda (sub-district). This narrows the terroir and gives your roaster marketing-ready provenance.</li>
          <li className='flex gap-2 items-start'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> If sourcing shade-grown coffee, verify whether the canopy is native forest (common in Ethiopian gardens) or planted shade trees. Native forest shade correlates with slower maturation and higher complexity.</li>
        </ul>
      </div>

      {/* SECTION 4: HARVESTING */}
      <h2 id='harvesting' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineCalendarDays className='text-amber-600' />
        Stage 3: Harvesting
      </h2>

      <p className='my-4'>
        Harvesting is the first human intervention in the supply chain, and it has an outsized impact on quality. Cherries on the same branch ripen at different rates, which forces a choice: pick selectively for quality or strip-pick for speed.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-3'>Selective Picking vs. Strip Picking</h3>
      <p className='my-4'>
        In <strong>selective picking</strong>, workers make multiple passes through the same trees over weeks, taking only ripe cherries. This is standard practice across Ethiopian specialty coffee regions, where the mountainous terrain prevents mechanization. The result is lower defect counts and more uniform cherry ripeness, both of which translate to cleaner cups. For a detailed look at this process and its quality impact, see our article on <Link href='/insights/selective-coffee-harvesting' className='text-amber-700 hover:underline font-bold'>selective coffee harvesting</Link>.
      </p>
      <p className='my-4'>
        <strong>Strip picking</strong> removes all cherries from a branch at once, regardless of ripeness. It is faster and cheaper, but introduces unripe (green) and overripe (dried-on-tree) cherries into the lot. These become quakers during roasting (unripe) or contribute off-flavors (overripe). Strip-picked lots require more aggressive sorting downstream to hit exportable grade.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-3'>Seasonal Timing and Buyer Planning</h3>
      <p className='my-4'>
        Ethiopia&apos;s main harvest runs October through January, with regional variation. Yirgacheffe and Sidamo cherries peak in November to December; Guji extends into January. New-crop lots typically reach export readiness 2&#x2013;4 months after harvest, meaning fresh Ethiopian coffee begins arriving at destination ports from February onward.
      </p>
      <p className='my-4'>
        Buyers planning annual sourcing calendars should align purchase contracts with these windows to secure the freshest lots. For a month-by-month breakdown, see the <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee harvest calendar</Link>.
      </p>

      <div className='bg-blue-50 p-5 rounded-lg my-6 border border-blue-200'>
        <h4 className='font-bold mb-2'>Buyer Evaluation: Harvesting</h4>
        <ul className='text-sm space-y-2'>
          <li className='flex gap-2 items-start'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> Ask whether the lot was selectively picked or strip-picked. Specialty Ethiopian coffees should always be selectively picked.</li>
          <li className='flex gap-2 items-start'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> Check the harvest date relative to your purchase date. Ethiopian green coffee is best used within 12 months of harvest. A lot harvested in November 2025 and offered in October 2026 is nearing the end of peak freshness.</li>
          <li className='flex gap-2 items-start'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> For repeat seasonal purchases, ask your exporter to reserve allocation early. High-scoring micro-lots from specific washing stations sell out within weeks of availability.</li>
        </ul>
      </div>

      {/* SECTION 5: PROCESSING */}
      <h2 id='processing' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <PiDropHalfBottom className='text-amber-600' />
        Stage 4: Processing
      </h2>

      <p className='my-4'>
        Processing is the single biggest controllable variable in the seed-to-cup chain. The same cherries, from the same trees, processed with different methods will produce coffees that taste almost nothing alike. Buyers who do not specify or evaluate processing method are leaving flavor profile to chance.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-3'>Three Primary Methods</h3>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse border border-gray-300 text-sm'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border border-gray-300 p-3 text-left'>Method</th>
              <th className='border border-gray-300 p-3 text-left'>What Happens</th>
              <th className='border border-gray-300 p-3 text-left'>Flavor Impact</th>
              <th className='border border-gray-300 p-3 text-left'>Typical Premium</th>
              <th className='border border-gray-300 p-3 text-left'>Buyer Application</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Washed (Wet)</td>
              <td className='border border-gray-300 p-3'>Skin and mucilage removed before drying. Fermented 12&#x2013;72 hrs, washed, dried on raised beds.</td>
              <td className='border border-gray-300 p-3'>Clean, bright acidity, floral, citrus. Clearest expression of terroir.</td>
              <td className='border border-gray-300 p-3'>Baseline</td>
              <td className='border border-gray-300 p-3'>Single-origin filter, light-roast retail, cupping competitions.</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Natural (Dry)</td>
              <td className='border border-gray-300 p-3'>Whole cherry dried intact on beds for 2&#x2013;4 weeks. Fruit sugars infuse the seed during drying.</td>
              <td className='border border-gray-300 p-3'>Heavy body, berry, wine-like, fermented fruit. High sweetness.</td>
              <td className='border border-gray-300 p-3'>+$0.30&#x2013;1.00/kg over washed for equivalent grade</td>
              <td className='border border-gray-300 p-3'>Espresso blends (body), boldly flavored single origins, cold brew.</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Honey (Pulped Natural)</td>
              <td className='border border-gray-300 p-3'>Skin removed, some or all mucilage left on during drying. Spectrum from White to Black Honey.</td>
              <td className='border border-gray-300 p-3'>Balanced sweetness, moderate acidity, fruity but cleaner than natural.</td>
              <td className='border border-gray-300 p-3'>+$0.20&#x2013;0.60/kg</td>
              <td className='border border-gray-300 p-3'>Versatile blending, medium-roast retail, bridging filter and espresso lines.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className='text-xl font-bold mt-6 mb-3'>Experimental Processing</h3>
      <p className='my-4'>
        Anaerobic fermentation, carbonic maceration, and extended-fermentation protocols are growing rapidly in Ethiopian specialty coffee. These methods can produce extraordinary cups (think tropical fruit intensity and candy-like sweetness), but they introduce batch variability and require rigorous QC at the washing station. Buyers evaluating experimental lots should request detailed fermentation logs (duration, temperature, pH) and cup multiple samples before committing to volume. See our <Link href='/insights/anaerobic-ethiopian-coffee-processing-buyers-guide' className='text-amber-700 hover:underline font-bold'>anaerobic processing buyer&apos;s guide</Link> for evaluation criteria.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-3'>Processing at Ethiopian Washing Stations</h3>
      <p className='my-4'>
        Ethiopia has an estimated 2,500&#x2013;3,000 active washing stations, each processing cherry from hundreds of smallholders. The skill and infrastructure at the station, including water quality, fermentation tank management, and drying bed supervision, often matters more than the raw cherry quality. Two stations in the same kebele can produce dramatically different cups. For a detailed buyer&apos;s guide to washing station evaluation, see <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee washing stations</Link>.
      </p>

      <div className='bg-blue-50 p-5 rounded-lg my-6 border border-blue-200'>
        <h4 className='font-bold mb-2'>Buyer Evaluation: Processing</h4>
        <ul className='text-sm space-y-2'>
          <li className='flex gap-2 items-start'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> Always specify processing method in your purchase contract. &quot;Sidamo G2&quot; tells you the region and grade; &quot;Sidamo G2 Washed&quot; tells you the flavor category.</li>
          <li className='flex gap-2 items-start'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> Verify the washing station name. Buyers who build station-level relationships can request specific fermentation protocols and drying durations in future seasons.</li>
          <li className='flex gap-2 items-start'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> For natural processed lots, ask about drying duration and bed turnover frequency. Naturals dried too quickly (under 14 days) often lack sweetness; those dried too slowly risk mold.</li>
          <li className='flex gap-2 items-start'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> For a detailed comparison of washed vs. natural Ethiopian coffee, see <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline font-bold'>washed vs. natural processing</Link>.</li>
        </ul>
      </div>

      {/* SECTION 6: DRY MILLING */}
      <h2 id='dry-milling' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineCube className='text-amber-600' />
        Stage 5: Dry Milling and Export Preparation
      </h2>

      <p className='my-4'>
        Once coffee has been processed and dried to parchment (washed) or dried cherry (natural), it moves to the dry mill. This is where parchment or dried fruit is removed, and the green coffee is cleaned, sized, density-sorted, and hand-picked to meet export grade specifications. In Ethiopia, dry milling takes place at licensed milling facilities, often in Addis Ababa or regional hubs.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-3'>Key Milling Steps</h3>
      <div className='space-y-3 my-4'>
        <div className='flex gap-4 items-start'>
          <span className='font-bold text-amber-600 w-36 flex-shrink-0'>1. Hulling</span>
          <span className='text-sm'>Mechanical removal of parchment (washed) or dried cherry layers (natural). Converts parchment coffee into green (exportable) beans.</span>
        </div>
        <div className='flex gap-4 items-start'>
          <span className='font-bold text-amber-600 w-36 flex-shrink-0'>2. Screen Sizing</span>
          <span className='text-sm'>Beans pass through screens with specific hole sizes (measured in 1/64-inch increments). Ethiopian specialty is typically Screen 14&#x2013;17+. Larger, more uniform beans indicate consistent ripeness.</span>
        </div>
        <div className='flex gap-4 items-start'>
          <span className='font-bold text-amber-600 w-36 flex-shrink-0'>3. Density Sorting</span>
          <span className='text-sm'>Gravity tables separate dense (healthy, well-developed) beans from lighter (underdeveloped or defective) ones. Dense beans roast more evenly.</span>
        </div>
        <div className='flex gap-4 items-start'>
          <span className='font-bold text-amber-600 w-36 flex-shrink-0'>4. Color Sorting</span>
          <span className='text-sm'>Electronic optical sorters detect discolored, bleached, or insect-damaged beans and eject them with compressed air. Reduces visible defects.</span>
        </div>
        <div className='flex gap-4 items-start'>
          <span className='font-bold text-amber-600 w-36 flex-shrink-0'>5. Hand Sorting</span>
          <span className='text-sm'>For specialty grades (G1, G2), trained workers manually remove any remaining defective beans, often picking a 60kg bag down to zero visible defects. This step is labor-intensive and accounts for a meaningful share of milling cost.</span>
        </div>
      </div>

      <p className='my-4'>
        The milling yield (the ratio of green coffee output to parchment input) is a key metric. In Ethiopia, yields typically range from 60&#x2013;70% for washed parchment and 45&#x2013;55% for natural dried cherry. Lower-than-expected yield can signal over-drying, excessive defect removal, or moisture issues. For a full breakdown of the dry milling process and its impact on export quality, see our <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian dry milling export guide</Link>.
      </p>

      <div className='bg-blue-50 p-5 rounded-lg my-6 border border-blue-200'>
        <h4 className='font-bold mb-2'>Buyer Evaluation: Dry Milling</h4>
        <ul className='text-sm space-y-2'>
          <li className='flex gap-2 items-start'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> Request a pre-shipment (PSS) sample after milling, before the coffee is bagged for export. This is the sample that represents what will actually arrive.</li>
          <li className='flex gap-2 items-start'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> Verify the defect count on the PSS sample against the contracted grade. Grade 1 allows 0&#x2013;3 defects per 300g; Grade 2 allows 4&#x2013;12.</li>
          <li className='flex gap-2 items-start'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> Check moisture content on arrival of the PSS sample. Green coffee for export should measure 10&#x2013;12%. Anything above 12.5% flags a drying or conditioning problem.</li>
        </ul>
      </div>

      {/* SECTION 7: GRADING */}
      <h2 id='grading' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineScale className='text-amber-600' />
        Stage 6: Grading and Quality Standards
      </h2>

      <p className='my-4'>
        Grading is the system that translates physical and sensory quality into a standardized language buyers can use for contracts. It combines defect count, screen size, moisture readings, and cupping scores into a single grade designation that determines exportability and pricing tier.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-3'>Ethiopian Grading System</h3>
      <p className='my-4'>
        Ethiopia&apos;s Coffee Liquoring Unit (CLU) assigns grades to every export lot. The system evaluates both physical defects and cup quality:
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse border border-gray-300 text-sm'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border border-gray-300 p-3 text-left'>Grade</th>
              <th className='border border-gray-300 p-3 text-left'>Defects (per 300g)</th>
              <th className='border border-gray-300 p-3 text-left'>Cup Score</th>
              <th className='border border-gray-300 p-3 text-left'>Typical Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Grade 1</td>
              <td className='border border-gray-300 p-3'>0&#x2013;3</td>
              <td className='border border-gray-300 p-3'>85+</td>
              <td className='border border-gray-300 p-3'>Top specialty, single-origin retail, competition lots</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Grade 2</td>
              <td className='border border-gray-300 p-3'>4&#x2013;12</td>
              <td className='border border-gray-300 p-3'>80&#x2013;84</td>
              <td className='border border-gray-300 p-3'>Specialty, premium blends, featured single origins</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Grade 3</td>
              <td className='border border-gray-300 p-3'>13&#x2013;25</td>
              <td className='border border-gray-300 p-3'>75&#x2013;79</td>
              <td className='border border-gray-300 p-3'>Upper commercial, commodity blends</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Grade 4</td>
              <td className='border border-gray-300 p-3'>26&#x2013;45</td>
              <td className='border border-gray-300 p-3'>70&#x2013;74</td>
              <td className='border border-gray-300 p-3'>Commercial grade</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Grade 5</td>
              <td className='border border-gray-300 p-3'>46&#x2013;100</td>
              <td className='border border-gray-300 p-3'>&lt;70</td>
              <td className='border border-gray-300 p-3'>Below standard; domestic market or instant</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className='text-xl font-bold mt-6 mb-3'>SCA Cupping and the Coffee Value Assessment</h3>
      <p className='my-4'>
        The Specialty Coffee Association (SCA) defines specialty coffee as scoring 80+ on a 100-point cupping protocol. Evaluators assess fragrance/aroma, flavor, aftertaste, acidity, body, balance, uniformity, clean cup, sweetness, and overall impression. In 2024, the SCA introduced the new <Link href='/insights/new-sca-coffee-value-assessment' className='text-amber-700 hover:underline font-bold'>Coffee Value Assessment (CVA)</Link>, which provides a more multi-dimensional evaluation framework beyond the single composite score. Buyers should familiarize themselves with the CVA, as it is increasingly used in trade negotiations.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-3'>Why Both Physical and Cup Quality Matter for Contracts</h3>
      <p className='my-4'>
        A lot can cup at 86 points and still present problems if its moisture content is 13% (too high for long-distance shipping) or if the screen size is inconsistent (causing uneven roasts). Contracts that specify only cupping score leave physical attributes uncontrolled. Experienced buyers specify grade, processing method, moisture range, and screen size alongside the minimum cupping score.
      </p>
      <p className='my-4'>
        For a deeper guide to green coffee quality evaluation, see <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline font-bold'>green coffee quality control and grading</Link> and <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline font-bold'>how to cup and evaluate Ethiopian coffee samples</Link>.
      </p>

      <div className='bg-blue-50 p-5 rounded-lg my-6 border border-blue-200'>
        <h4 className='font-bold mb-2'>Buyer Evaluation: Grading</h4>
        <ul className='text-sm space-y-2'>
          <li className='flex gap-2 items-start'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> Specify the minimum grade, cupping score, moisture percentage, and screen size in your contract. Do not leave any one of these unaddressed.</li>
          <li className='flex gap-2 items-start'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> Request the CLU certificate for Ethiopian lots. This is the official government quality report and is required for export clearance.</li>
          <li className='flex gap-2 items-start'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> If cupping scores differ between the exporter&apos;s offer sample and your own evaluation, establish a cupping protocol in advance (SCA standard, specific water, roast date parameters) to minimize subjectivity.</li>
        </ul>
      </div>

      {/* SECTION 8: EXPORT AND LOGISTICS */}
      <h2 id='export-logistics' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineTruck className='text-amber-600' />
        Stage 7: Export, Shipping, and Logistics
      </h2>

      <p className='my-4'>
        After milling and grading, green coffee enters the export pipeline. In Ethiopia, this involves CLU inspection, export documentation, inland transport from Addis Ababa to the Port of Djibouti (by road or rail), and ocean shipping. The entire export process typically spans 30&#x2013;60 days from confirmed contract to vessel departure. For a full step-by-step breakdown, see the <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee export process buyer&apos;s guide</Link>.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-3'>Packaging Decisions</h3>
      <p className='my-4'>
        How green coffee is bagged for export directly affects shelf life and quality on arrival. The three most common packaging options in Ethiopian specialty exports are:
      </p>
      <ul className='my-4 space-y-2 text-sm'>
        <li><span className='font-bold'>Standard jute bags (60kg):</span> Industry default. Breathable but permeable; adequate for short transit times and quick consumption at destination.</li>
        <li><span className='font-bold'>GrainPro or Ecotact liners inside jute:</span> Hermetic barrier that prevents moisture exchange and locks in freshness. Adds $0.50&#x2013;1.00 per bag but extends peak quality by 3&#x2013;6 months. Now standard for most specialty exports.</li>
        <li><span className='font-bold'>Vacuum-sealed bags:</span> Used for micro-lots and premium lots. Best protection but highest cost and lower volume per container.</li>
      </ul>
      <p className='my-4 text-sm text-gray-600'>
        For a full comparison with cost data, see <Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline font-bold'>green coffee packaging: bag types and buyer&apos;s guide</Link>.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-3'>FCL vs. LCL</h3>
      <p className='my-4'>
        A 20-foot container (FCL) holds approximately 250&#x2013;275 bags at 60kg each (roughly 15&#x2013;16.5 metric tonnes). Buyers purchasing less than a full container can ship LCL (Less than Container Load), which consolidates multiple shippers into a single container. LCL offers lower upfront commitment but longer transit (due to consolidation/deconsolidation), higher per-kg freight cost, and increased handling risk. Most specialty importers purchasing Ethiopian coffee work in FCL quantities. For more on shipping economics and logistics, see <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline font-bold'>specialty coffee storage, freight, and logistics</Link>.
      </p>

      <div className='bg-blue-50 p-5 rounded-lg my-6 border border-blue-200'>
        <h4 className='font-bold mb-2'>Buyer Evaluation: Export and Logistics</h4>
        <ul className='text-sm space-y-2'>
          <li className='flex gap-2 items-start'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> Specify packaging requirements in the contract. If you need GrainPro liners, build the cost into the FOB price rather than assuming it is included.</li>
          <li className='flex gap-2 items-start'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> Confirm the shipping line and transit time estimate from Djibouti to your destination port. Transit to Northern Europe is typically 18&#x2013;25 days; to East Asia 20&#x2013;30 days; to North America 30&#x2013;40 days.</li>
          <li className='flex gap-2 items-start'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> Request copies of key export documents: CLU certificate, phytosanitary certificate, certificate of origin, bill of lading, and packing list. Your clearing agent will need these before the container arrives.</li>
        </ul>
      </div>

      {/* SECTION 9: ARRIVAL */}
      <h2 id='arrival' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineDocumentCheck className='text-amber-600' />
        Stage 8: Arrival, Quality Verification, and Storage
      </h2>

      <p className='my-4'>
        When the container arrives at the destination port, the buyer&apos;s responsibility begins. This stage bridges the gap between FOB (Free on Board, the price most Ethiopian contracts quote) and the true landed cost of coffee in your warehouse.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-3'>Landed Cost: Beyond FOB</h3>
      <p className='my-4'>
        FOB price captures only the cost of the coffee delivered on board the vessel at Djibouti. To calculate true unit cost, buyers must add ocean freight, marine insurance, port handling fees, customs duties and taxes (which vary by importing country), inland transport to warehouse, and warehousing costs. Depending on destination, these add $0.40&#x2013;1.50/kg on top of FOB. For a complete worked example, see the <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee landed cost guide</Link>.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-3'>Arrival Cupping and Quality Checks</h3>
      <p className='my-4'>
        Upon receipt, cup the arrival sample against the pre-shipment sample (PSS) you approved before booking. Check for:
      </p>
      <ul className='my-4 space-y-2 text-sm'>
        <li><span className='font-bold'>Moisture content:</span> Should still be within 10&#x2013;12%. Significant moisture loss (below 9.5%) or gain (above 12.5%) during transit indicates packaging or container ventilation issues.</li>
        <li><span className='font-bold'>Water activity:</span> Ideally below 0.65 aw. Higher readings increase mold and degradation risk in storage.</li>
        <li><span className='font-bold'>Cup profile:</span> Compare arrival cupping notes to the PSS benchmark. Minor variations are normal; significant defect flavors (ferment, baggy, musty) that were absent in the PSS warrant investigation.</li>
      </ul>

      <h3 className='text-xl font-bold mt-6 mb-3'>Storage and Shelf Life</h3>
      <p className='my-4'>
        Green coffee stored in an ambient, climate-controlled warehouse (temperature 15&#x2013;20°C, humidity 50&#x2013;65%) maintains peak character for 6&#x2013;12 months post-harvest, depending on packaging. GrainPro-lined bags extend this window; standard jute shortens it. For storage best practices, see <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline font-bold'>green coffee shelf life and storage</Link>.
      </p>

      <div className='bg-blue-50 p-5 rounded-lg my-6 border border-blue-200'>
        <h4 className='font-bold mb-2'>Buyer Evaluation: Arrival and Storage</h4>
        <ul className='text-sm space-y-2'>
          <li className='flex gap-2 items-start'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> Cup the arrival sample within one week of delivery. Document results and share with your exporter to maintain a quality feedback loop.</li>
          <li className='flex gap-2 items-start'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> Measure moisture and water activity on arrival. These are your baseline metrics for monitoring quality during storage.</li>
          <li className='flex gap-2 items-start'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> Plan your roasting schedule to use the freshest lots first. Ethiopian naturals (which have higher residual sugar) tend to age faster than washed lots.</li>
        </ul>
      </div>

      {/* SECTION 10: ROASTING */}
      <h2 id='roasting-communication' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineFire className='text-amber-600' />
        Stage 9: Roasting Considerations for Green Buyers
      </h2>

      <p className='my-4'>
        Green buyers who sell to roasters (or roast themselves) benefit from understanding how upstream variables affect roast behavior. This knowledge improves the information you provide to your downstream partners and enhances the value of your green coffee offering.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-3'>How Processing and Origin Influence Roast Approach</h3>
      <p className='my-4'>
        Washed Ethiopian coffees, with their clean structure and bright acidity, respond well to light-to-medium roast development that preserves floral and citrus notes. Natural processed Ethiopians, with higher sugar content and fruitiness, often benefit from slightly longer development time to avoid sharp fermented notes while maintaining body and sweetness.
      </p>
      <p className='my-4'>
        High-altitude dense beans (above 1,900 masl) absorb heat more slowly in the early phase and require careful charge temperature management to avoid scorching. Providing altitude, processing method, and moisture content on your lot cards gives roasters the data they need to plan their first test roasts accurately.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-3'>Sample Roasting for Evaluation</h3>
      <p className='my-4'>
        Buyers who roast offer samples in-house gain direct feedback on how a lot performs under heat. A sample roast should follow a standardized protocol (SCA recommends Agtron 55&#x2013;65 whole bean, 8&#x2013;12 minutes total) so that comparisons across lots are valid. Avoid evaluating green coffee quality based on a single roast profile; sometimes a lot that seems flat on a light roast opens up with 15&#x2013;30 seconds more development.
      </p>
      <p className='my-4 text-sm text-gray-600'>
        For roast recommendations specific to Ethiopian origins, see <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='text-amber-700 hover:underline font-bold'>roasting Ethiopian coffee beans</Link>.
      </p>

      <div className='bg-blue-50 p-5 rounded-lg my-6 border border-blue-200'>
        <h4 className='font-bold mb-2'>Buyer Evaluation: Roasting Connection</h4>
        <ul className='text-sm space-y-2'>
          <li className='flex gap-2 items-start'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> Include processing method, altitude, variety, and moisture content on every lot card you share with roasters. This information directly affects first-batch success rates.</li>
          <li className='flex gap-2 items-start'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> If you import for multiple roasters, offer tasting notes from your own cupping alongside the exporter&apos;s notes. Two independent evaluations give roasters more confidence in the lot&apos;s consistency.</li>
        </ul>
      </div>

      {/* SECTION 11: ETHIOPIAN STORY */}
      <h2 id='ethiopian-story' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineGlobeAlt className='text-amber-600' />
        Ethiopian Coffee&apos;s Seed-to-Cup Story
      </h2>

      <p className='my-4'>
        Ethiopia is the genetic birthplace of Arabica coffee, and its supply chain operates differently from most producing origins. Understanding these differences helps buyers set realistic expectations and identify sourcing opportunities.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-3'>Why Ethiopia&apos;s Supply Chain Is Unique</h3>
      <p className='my-4'>
        An estimated 5 million smallholder farming families grow coffee in Ethiopia, most on plots smaller than half a hectare. This fragmented production structure means most coffee from a given region is collected from hundreds (or thousands) of individual farmers at a central washing station or collection point. The washing station, not the individual farmer, is typically the smallest traceable unit for exported lots. This contrasts sharply with countries like Colombia or Guatemala, where single-farm traceability is common.
      </p>
      <p className='my-4'>
        Ethiopia also maintains two distinct export channels: the Ethiopia Commodity Exchange (ECX) for standard commercial grades, and Direct Specialty Lots (DSL) for traceable specialty coffee. Under the DSL framework, cooperatives and private exporters can bypass the ECX auction and sell directly to international buyers with full traceability to the washing station or cooperative level. For an in-depth explanation, see <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline font-bold'>ECX and Ethiopian coffee export</Link>.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-3'>Heritage Sourcing: Three Decades at Origin</h3>
      <p className='my-4'>
        Ethio Coffee Import and Export PLC operates as an origin-connected exporter with over 30 years of sourcing relationships across Ethiopia&apos;s coffee regions. With a warehouse and office in Addis Ababa, Ethio Coffee works through trusted cooperatives, washing stations, and farming communities to source specialty-grade green coffee for importers and roasters worldwide.
      </p>
      <p className='my-4'>
        This heritage sourcing network means buyers gain access to established station-level relationships, consistent seasonal allocation, and on-the-ground quality oversight that a new-entrant exporter cannot replicate. For more on our export capabilities and services, visit our <Link href='/ethiopian-coffee-exporter' className='text-amber-700 hover:underline font-bold'>export services</Link> page.
      </p>

      {/* SECTION 12: COMMON MISTAKES */}
      <h2 id='buyer-mistakes' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineExclamationTriangle className='text-amber-600' />
        Common Buyer Mistakes at Each Stage
      </h2>

      <p className='my-4'>
        After working with importers and roasters across dozens of countries, these are the most frequent sourcing mistakes we see. Each costs either money, quality, or time.
      </p>

      <div className='space-y-4 my-6'>
        <div className='flex gap-4 items-start bg-red-50 p-4 rounded-lg border border-red-200'>
          <span className='font-bold text-red-700 w-8 flex-shrink-0'>1.</span>
          <div className='text-sm'>
            <span className='font-bold'>Ignoring variety and defaulting to &quot;Heirloom.&quot;</span> Not all Heirloom is equal. Ask which woreda, which station, and ideally which sub-population. Specificity improves batch-to-batch consistency.
          </div>
        </div>
        <div className='flex gap-4 items-start bg-red-50 p-4 rounded-lg border border-red-200'>
          <span className='font-bold text-red-700 w-8 flex-shrink-0'>2.</span>
          <div className='text-sm'>
            <span className='font-bold'>Treating altitude as a binary.</span> &quot;High altitude&quot; is marketing language. Specify the range in meters. A 1,500 masl Sidamo and a 2,200 masl Sidamo are different coffees.
          </div>
        </div>
        <div className='flex gap-4 items-start bg-red-50 p-4 rounded-lg border border-red-200'>
          <span className='font-bold text-red-700 w-8 flex-shrink-0'>3.</span>
          <div className='text-sm'>
            <span className='font-bold'>Not specifying processing method in the contract.</span> This is the number-one cause of expectation mismatch between buyer and exporter. Always state washed, natural, or honey explicitly.
          </div>
        </div>
        <div className='flex gap-4 items-start bg-red-50 p-4 rounded-lg border border-red-200'>
          <span className='font-bold text-red-700 w-8 flex-shrink-0'>4.</span>
          <div className='text-sm'>
            <span className='font-bold'>Evaluating only cupping score, not physical quality.</span> A high cupping score with 13% moisture or inconsistent screen size will cause problems in roasting and storage. Specify both in contracts.
          </div>
        </div>
        <div className='flex gap-4 items-start bg-red-50 p-4 rounded-lg border border-red-200'>
          <span className='font-bold text-red-700 w-8 flex-shrink-0'>5.</span>
          <div className='text-sm'>
            <span className='font-bold'>Assuming GrainPro packaging is standard.</span> It is increasingly common in specialty, but not universal. If you need hermetic packaging, specify it and budget for the added cost ($0.50&#x2013;1.00 per bag).
          </div>
        </div>
        <div className='flex gap-4 items-start bg-red-50 p-4 rounded-lg border border-red-200'>
          <span className='font-bold text-red-700 w-8 flex-shrink-0'>6.</span>
          <div className='text-sm'>
            <span className='font-bold'>Comparing FOB prices without calculating landed cost.</span> A $5.50/kg FOB from Ethiopia may land cheaper than a $5.00/kg FOB from a closer origin, depending on freight, duties, and transit losses. Always compare landed costs.
          </div>
        </div>
        <div className='flex gap-4 items-start bg-red-50 p-4 rounded-lg border border-red-200'>
          <span className='font-bold text-red-700 w-8 flex-shrink-0'>7.</span>
          <div className='text-sm'>
            <span className='font-bold'>Not cupping arrival samples.</span> Pre-shipment samples and arrival cups should match. Significant divergence signals transit damage, container temperature exposure, or packaging failure. Skipping the arrival cupping means missing this entirely.
          </div>
        </div>
        <div className='flex gap-4 items-start bg-red-50 p-4 rounded-lg border border-red-200'>
          <span className='font-bold text-red-700 w-8 flex-shrink-0'>8.</span>
          <div className='text-sm'>
            <span className='font-bold'>Buying past-crop without accounting for age.</span> Ethiopian green coffee offered more than 10&#x2013;12 months after harvest has likely lost brightness and acidity. It may still be useful for blending, but price it accordingly.
          </div>
        </div>
        <div className='flex gap-4 items-start bg-red-50 p-4 rounded-lg border border-red-200'>
          <span className='font-bold text-red-700 w-8 flex-shrink-0'>9.</span>
          <div className='text-sm'>
            <span className='font-bold'>Ordering too late in the season.</span> The best micro-lots and competition-grade coffees from specific washing stations sell out quickly. Buyers with seasonal contracts or early commitments get first access.
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <section id='faq-seed-to-cup' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h2 className='text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2'>
          <HiOutlineQuestionMarkCircle className='text-amber-600' />
          Frequently Asked Questions
        </h2>
        <div className='space-y-6'>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>What is the most important stage in the seed-to-cup chain for green coffee quality?</h3>
            <p className='text-sm text-gray-600'>Processing is the single largest controllable variable. The same cherries processed as washed versus natural produce entirely different cup profiles. Variety and growing conditions set the ceiling, but processing determines the final character. Buyers who specify and evaluate processing method gain the most control over quality outcomes.</p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>How does altitude affect green coffee price and cup profile?</h3>
            <p className='text-sm text-gray-600'>Higher altitude slows cherry maturation, producing denser beans with more complex acidity and sweetness. Ethiopian coffees above 2,000 meters typically command $0.50&#x2013;1.50/kg premiums over lower-altitude lots from the same region. For buyers, altitude is a reliable predictor of acidity brightness and roast flexibility.</p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>What should I ask my exporter about processing methods?</h3>
            <p className='text-sm text-gray-600'>Ask for the processing method (washed, natural, honey, or experimental), the washing station name, fermentation duration and method (tank, raised-bed, or anaerobic), drying duration, and whether any post-harvest protocols (extended fermentation, thermal shock) were applied. These details predict cup character and help your roaster plan the first test batch.</p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>How long does green coffee stay fresh after export?</h3>
            <p className='text-sm text-gray-600'>Green coffee stored in GrainPro-lined bags at 15&#x2013;20°C and 50&#x2013;65% humidity maintains peak character for 8&#x2013;12 months post-harvest. Standard jute bags shorten this to 4&#x2013;6 months. Natural processed coffees age faster than washed due to higher residual sugar. Plan roasting schedules to use the freshest lots first.</p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>What is the difference between Ethiopian Grade 1 and Grade 2 coffee?</h3>
            <p className='text-sm text-gray-600'>Grade 1 allows 0&#x2013;3 defects per 300g sample and scores 85+ points on the cupping table. Grade 2 allows 4&#x2013;12 defects and scores 80&#x2013;84. Both qualify as specialty. Grade 1 involves more intensive hand sorting, which increases milling cost and FOB price. Grade 2 offers strong specialty quality at a lower entry point.</p>
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3'>
          Conclusion: Buy the Chain, Not Just the Cup
        </h3>
        <p className='mb-3'>
          Coffee from seed to cup is a nine-stage process, and quality is won or lost at every step. Buyers who evaluate variety, altitude, harvest method, processing, milling, grading, packaging, shipping, and storage, not just the cupping score and the price, build sourcing programs that deliver consistent quality, fewer claims, and stronger supplier relationships over time.
        </p>
        <p>
          The next time you review an offer sheet, go beyond the cupping notes. Ask about the washing station, verify the moisture content, check the packaging specification, and calculate the full landed cost. That is the difference between buying coffee and buying a supply chain you can rely on.
        </p>
      </div>

      {/* CTA BLOCK */}
      <div className='bg-gradient-to-br from-amber-900 to-amber-800 text-white p-8 rounded-lg my-8'>
        <h3 className='text-2xl font-extrabold mb-4'>
          Source Premium Ethiopian Coffee Direct from Origin
        </h3>
        <p className='mb-4'>
          Ethio Coffee Import and Export PLC connects importers and roasters with specialty-grade Ethiopian green coffee through over three decades of heritage sourcing relationships. From Yirgacheffe florals to Guji fruit bombs, we manage every stage of the export chain so you receive consistent quality, full traceability, and professional documentation.
        </p>
        <ul className='space-y-2 mb-6'>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-amber-300 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-bold'>Pre-shipment samples</span> with cupping scores, moisture data, and full lot cards</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-amber-300 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-bold'>Station-level traceability</span> through our trusted cooperative and washing station network</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-amber-300 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-bold'>G1 and G2 specialty grades</span> in washed, natural, and experimental processed lots</span>
          </li>
        </ul>
        <div className='flex flex-wrap gap-4'>
          <Link
            href='/offerings'
            className='bg-white text-amber-900 px-6 py-3 rounded-lg font-bold hover:bg-amber-100 transition-colors inline-block'
          >
            View Offerings
          </Link>
          <Link
            href='/contact-us'
            className='border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors inline-block'
          >
            Request Samples
          </Link>
          <Link
            href='/ordering-info'
            className='border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors inline-block'
          >
            How to Order
          </Link>
        </div>
      </div>

      {/* RELATED ARTICLES */}
      <h3 className='text-xl font-bold mb-4'>Related Articles</h3>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
          <h4 className='font-bold mb-2'>Quality &amp; Processing</h4>
          <ul className='space-y-1 text-sm'>
            <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-blue-600 hover:underline'>Washed vs. Natural Ethiopian Coffee Processing</Link></li>
            <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-blue-600 hover:underline'>Green Coffee Quality Control &amp; Grading</Link></li>
            <li>&bull; <Link href='/insights/new-sca-coffee-value-assessment' className='text-blue-600 hover:underline'>New SCA Coffee Value Assessment</Link></li>
            <li>&bull; <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='text-blue-600 hover:underline'>Ethiopian Coffee Washing Stations: Buyer&apos;s Guide</Link></li>
            <li>&bull; <Link href='/insights/anaerobic-ethiopian-coffee-processing-buyers-guide' className='text-blue-600 hover:underline'>Ethiopian Anaerobic Coffee Processing</Link></li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
          <h4 className='font-bold mb-2'>Sourcing &amp; Trade</h4>
          <ul className='space-y-1 text-sm'>
            <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-blue-600 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
            <li>&bull; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-blue-600 hover:underline'>Ethiopian Coffee Export Process: Buyer&apos;s Guide</Link></li>
            <li>&bull; <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-blue-600 hover:underline'>ECX and Ethiopian Coffee Export</Link></li>
            <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-blue-600 hover:underline'>Ethiopian Coffee Contracts &amp; Payment Terms</Link></li>
          </ul>
        </div>
      </div>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
          <h4 className='font-bold mb-2'>Ethiopian Coffee Origins</h4>
          <ul className='space-y-1 text-sm'>
            <li>&bull; <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-blue-600 hover:underline'>Yirgacheffe vs. Sidamo vs. Guji</Link></li>
            <li>&bull; <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-blue-600 hover:underline'>Ethiopian Heirloom Varieties &amp; Landraces</Link></li>
            <li>&bull; <Link href='/insights/guide-ethiopian-coffee-origins' className='text-blue-600 hover:underline'>Guide to Ethiopian Coffee Origins</Link></li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
          <h4 className='font-bold mb-2'>Pricing &amp; Logistics</h4>
          <ul className='space-y-1 text-sm'>
            <li>&bull; <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-blue-600 hover:underline'>Ethiopian Coffee Landed Cost Guide</Link></li>
            <li>&bull; <Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-blue-600 hover:underline'>Green Coffee Packaging: Bag Types Guide</Link></li>
            <li>&bull; <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-blue-600 hover:underline'>Specialty Coffee Storage, Freight &amp; Logistics</Link></li>
            <li>&bull; <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-blue-600 hover:underline'>Green Coffee Shelf Life &amp; Storage</Link></li>
          </ul>
        </div>
      </div>

      <hr className='my-8 border-gray-200' />

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Ready to Start Sourcing?</h4>
        <p className='my-2'>
          At <span className='font-bold'>Ethio Coffee Import and Export PLC</span>, our team works with importers and roasters worldwide to source the right Ethiopian green coffee for their programs. Whether you need a full container of washed Yirgacheffe G1 or a micro-lot of natural Guji for a limited release, we can help.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/ethiopian-green-coffee-beans' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>Browse Green Coffee</Link>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Our Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Contact Us</Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>How to Order</Link>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> This guide was written by the team at Ethio Coffee Import and Export PLC, drawing on three decades of experience in Ethiopian specialty coffee export. For current pricing, availability, and sample requests, please <Link href='/contact-us' className='underline'>contact us</Link> directly.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot; <Link href='/ethiopian-coffee-exporter' className='underline'>Export Services</Link> &middot; <Link href='/about' className='underline'>About Ethio Coffee</Link> &middot; <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

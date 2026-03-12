import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { HiOutlineGlobeAlt, HiOutlineChartBar, HiOutlineLightBulb, HiOutlineClipboardDocumentList, HiOutlineQuestionMarkCircle, HiOutlineBeaker, HiOutlineSun, HiOutlineArrowTrendingUp, HiOutlineShieldCheck, HiOutlineMapPin } from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function CoffeeIsAgricultureProductionFarming({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        How soil, shade, altitude, and traditional Ethiopian coffee farming systems define the green coffee on your cupping table
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Ethiopian coffee agriculture spans four distinct farming systems, each shaping lot character, traceability, and supply chain options for buyers worldwide.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian coffee agriculture showing shade-grown coffee under native forest canopy in southern Ethiopia'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Part of the &quot;Coffee Is&quot; Series:</span>
        <div className='flex flex-wrap gap-2 mt-2'>
          <Link href='/insights/coffee-plant-taxonomy-species-varieties' className='underline text-xs'>1. Plant</Link>
          <span className='bg-dark text-primary px-2 py-1 rounded text-xs'>2. Agriculture (You are here)</span>
          <Link href='/insights/coffee-is-processing-drying-milling' className='underline text-xs'>3. Processing</Link>
          <Link href='/insights/coffee-is-commerce-exporting-importing-buying' className='underline text-xs'>4. Commerce</Link>
          <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='underline text-xs'>5. Science</Link>
          <Link href='/insights/coffee-is-art-roasting-brewing' className='underline text-xs'>6. Art</Link>
        </div>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />
          Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Ethiopian coffee farming systems (forest, semi-forest, garden, and plantation) each produce distinct lot profiles, traceability possibilities, and supply chain characteristics that directly affect what buyers receive. Ethiopia&apos;s 2025/26 production is forecast at 11.6 million bags across roughly 790,000 hectares, with over 95% grown by smallholders on plots under two hectares. For importers and roasters, understanding these agricultural foundations is essential for evaluating origin lots, anticipating quality variation, and building resilient sourcing relationships.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#agriculture-buyers' className='text-amber-700 hover:underline'>1. What Coffee Agriculture Means for Buyers</a></li>
          <li><a href='#production-numbers' className='text-amber-700 hover:underline'>2. Ethiopia&apos;s Coffee Production in Numbers</a></li>
          <li><a href='#farming-systems' className='text-amber-700 hover:underline'>3. The Four Ethiopian Coffee Farming Systems</a></li>
          <li><a href='#terroir' className='text-amber-700 hover:underline'>4. Soil, Shade, and Altitude: The Terroir Triangle</a></li>
          <li><a href='#plant-lifecycle' className='text-amber-700 hover:underline'>5. The Coffee Plant Lifecycle on Ethiopian Farms</a></li>
          <li><a href='#farm-management' className='text-amber-700 hover:underline'>6. Annual Farm Management and Its Quality Impact</a></li>
          <li><a href='#environmental-pressures' className='text-amber-700 hover:underline'>7. Environmental Pressures on Ethiopian Coffee</a></li>
          <li><a href='#sourcing-strategy' className='text-amber-700 hover:underline'>8. What This Means for Your Sourcing Strategy</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>9. Frequently Asked Questions</a></li>
        </ol>
      </div>

      <p className='my-4'>
        This is the second article in our &quot;Coffee Is&quot; series. Part one covered <Link href='/insights/coffee-plant-taxonomy-species-varieties' className='text-amber-700 hover:underline font-bold'>coffee as a plant</Link>, examining taxonomy, species, and variety groups. Here, we shift to coffee as agriculture: the farming systems, soil science, and seasonal management practices that determine what ends up on your cupping table.
      </p>
      <p className='my-4'>
        If you are evaluating Ethiopian origin lots, pair this article with our <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline font-bold'>practical guide to Ethiopian coffee origins</Link> and the sourcing walkthrough in <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline font-bold'>How to Source Green Coffee from Ethiopia</Link>.
      </p>

      {/* SECTION 1: WHAT AGRICULTURE MEANS FOR BUYERS */}
      <h2 id='agriculture-buyers' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineGlobeAlt className='text-amber-600' />
        1. What Coffee Agriculture Means for Buyers
      </h2>
      <p className='my-4'>
        Agriculture is the science, art, and practice of cultivating soil and producing crops. Coffee fits this definition completely: it demands soil chemistry, pest management, climate reading, and generational intuition passed from farmer to farmer. Every flavor note in a green coffee lot originates on the farm, long before processing or roasting.
      </p>
      <p className='my-4'>
        For importers and roasters, agricultural knowledge translates directly into better purchasing decisions. Understanding how a lot was farmed explains why two Grade 1 washed lots from the same woreda taste different. It explains why one lot cups at 86 and another at 89, even when both carry the same certification. The farm is the first filter. When you understand what passes through it, you evaluate offers with sharper precision.
      </p>
      <p className='my-4'>
        What makes Ethiopian coffee agriculture distinct from other origins is its integration with natural ecosystems. While coffee in Brazil or Vietnam often grows in full-sun monocultures, Ethiopian coffee typically thrives under canopies of native shade trees. This traditional approach creates coffees with the complexity that specialty buyers seek. The same heirloom varieties grown in <Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline font-bold'>Guji</Link> versus <Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline font-bold'>Yirgacheffe</Link> taste dramatically different because of variations in soil, shade, altitude, and microclimate. Agriculture does not just produce coffee; it shapes its character.
      </p>

      {/* SECTION 2: PRODUCTION IN NUMBERS */}
      <h2 id='production-numbers' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineChartBar className='text-amber-600' />
        2. Ethiopia&apos;s Coffee Production in Numbers
      </h2>
      <p className='my-4'>
        Ethiopia is Africa&apos;s largest coffee producer and the world&apos;s fifth largest overall. According to the <a href='https://fas.usda.gov/data/production/commodity/0711100' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>USDA Foreign Agricultural Service</a>, the 2025/26 forecast projects 11.6 million 60-kg bags, up 9% from the prior year. Area harvested is expected to reach 790,000 hectares, with average yields improving through rejuvenation of aging trees and favorable rainfall.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Metric</th>
              <th className='p-3 text-left'>Ethiopia</th>
              <th className='p-3 text-left'>Brazil</th>
              <th className='p-3 text-left'>Colombia</th>
              <th className='p-3 text-left'>Kenya</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Primary species</td>
              <td className='p-3'>Arabica (100%)</td>
              <td className='p-3'>Arabica + Robusta</td>
              <td className='p-3'>Arabica (100%)</td>
              <td className='p-3'>Arabica (100%)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Production model</td>
              <td className='p-3'>95%+ smallholder</td>
              <td className='p-3'>Large estate + smallholder</td>
              <td className='p-3'>Mainly smallholder</td>
              <td className='p-3'>Smallholder + estate</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Farming system</td>
              <td className='p-3'>Forest, shade, garden</td>
              <td className='p-3'>Full-sun monoculture</td>
              <td className='p-3'>Shade + full-sun</td>
              <td className='p-3'>Smallholder plots</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>2025/26 forecast</td>
              <td className='p-3'>11.6M bags</td>
              <td className='p-3'>66.4M bags</td>
              <td className='p-3'>13.6M bags</td>
              <td className='p-3'>0.9M bags</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Harvest method</td>
              <td className='p-3'>Selective hand-picking</td>
              <td className='p-3'>Mechanical + hand</td>
              <td className='p-3'>Selective hand-picking</td>
              <td className='p-3'>Selective hand-picking</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Genetic diversity</td>
              <td className='p-3'>10,000+ heirloom varieties</td>
              <td className='p-3'>Limited (Mundo Novo, Catuai)</td>
              <td className='p-3'>Moderate (Caturra, Castillo)</td>
              <td className='p-3'>Moderate (SL28, SL34, Ruiru 11)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Key numbers for buyers:
      </p>
      <ul className='list-disc ml-5 my-4 space-y-2'>
        <li>Over 5 million farming households depend on coffee in Ethiopia</li>
        <li>Average plot size is under 2 hectares; many are under 0.5 hectares</li>
        <li>Ethiopia accounts for roughly half of Africa&apos;s total coffee output</li>
        <li>Specialty-grade volumes are growing, driven by investment in washing stations and quality infrastructure</li>
        <li>Domestic consumption absorbs about 50% of production, meaning export-available supply is tighter than total output suggests</li>
      </ul>
      <p className='my-4'>
        The <Link href='/insights/specialty-coffee-trends-2026' className='text-amber-700 hover:underline font-bold'>specialty coffee trends shaping 2026</Link> point toward increasing demand for traceability, experimental processing, and direct origin relationships. These are areas where Ethiopian coffee agriculture excels.
      </p>

      {/* SECTION 3: FOUR FARMING SYSTEMS */}
      <h2 id='farming-systems' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineMapPin className='text-amber-600' />
        3. The Four Ethiopian Coffee Farming Systems
      </h2>
      <p className='my-4'>
        Ethiopia&apos;s coffee grows under four distinct agricultural systems. Each produces different lot characteristics, and understanding these systems helps buyers anticipate quality range, lot sizes, and traceability possibilities.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>System</th>
              <th className='p-3 text-left'>% of Production</th>
              <th className='p-3 text-left'>Description</th>
              <th className='p-3 text-left'>Typical Lot Size</th>
              <th className='p-3 text-left'>Traceability</th>
              <th className='p-3 text-left'>Quality Potential</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Forest</td>
              <td className='p-3'>~10%</td>
              <td className='p-3'>Wild or semi-wild coffee under natural forest canopy</td>
              <td className='p-3'>Small, variable</td>
              <td className='p-3'>Low (mixed collection)</td>
              <td className='p-3'>High (exceptional genetic diversity)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Semi-forest</td>
              <td className='p-3'>~35%</td>
              <td className='p-3'>Managed forest with selective thinning for coffee production</td>
              <td className='p-3'>Small to medium</td>
              <td className='p-3'>Moderate</td>
              <td className='p-3'>High (biodiversity + management)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Garden</td>
              <td className='p-3'>~50%</td>
              <td className='p-3'>Smallholder plots near homesteads, often intercropped</td>
              <td className='p-3'>Medium (washing station aggregation)</td>
              <td className='p-3'>Good (station-level)</td>
              <td className='p-3'>Good to excellent</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Plantation</td>
              <td className='p-3'>~5%</td>
              <td className='p-3'>Larger-scale commercial operations with intensive management</td>
              <td className='p-3'>Large, consistent</td>
              <td className='p-3'>High (single-estate)</td>
              <td className='p-3'>Consistent, good</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className='text-2xl font-bold mt-6 mb-3'>Forest Coffee</h3>
      <p className='my-4'>
        Forest coffee grows wild or semi-wild in the understory of Ethiopia&apos;s highland rainforests, primarily in the Kaffa, Bench Maji, and Sheka zones of southwestern Ethiopia. These trees receive no external inputs: no fertilizer, no pruning, no pesticides. They grow among native shade species in conditions that predate any concept of &quot;sustainable agriculture&quot; by millennia.
      </p>
      <p className='my-4'>
        For buyers, forest coffee offers exceptional genetic diversity (the same forest may contain dozens of distinct variety types) and complex cup profiles. The tradeoff is inconsistency: lot sizes are small, quality varies between collection points, and traceability to individual trees is impractical. Forest coffee often reaches the market through community washing stations that aggregate from multiple collectors.
      </p>

      <h3 className='text-2xl font-bold mt-6 mb-3'>Semi-Forest Coffee</h3>
      <p className='my-4'>
        Semi-forest systems balance wildness with management. Farmers selectively thin the forest canopy to increase light penetration and improve cherry development, while preserving the native shade structure. This system is widespread in Jimma, Illubabor, and parts of western Oromia.
      </p>
      <p className='my-4'>
        Semi-forest coffee combines the biodiversity advantages of forest systems with better yields and somewhat more predictable quality. Buyers seeking unique cup profiles with moderate supply consistency often find semi-forest lots appealing.
      </p>

      <h3 className='text-2xl font-bold mt-6 mb-3'>Garden Coffee</h3>
      <p className='my-4'>
        Garden coffee represents the majority of Ethiopian production. Smallholder farmers cultivate coffee alongside food crops (enset, teff, maize) on plots surrounding their homes. Trees are pruned, sometimes fertilized with organic inputs, and selectively harvested. Most garden coffee flows through cooperative or private <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='text-amber-700 hover:underline font-bold'>washing stations</Link> that aggregate cherry from dozens or hundreds of farmers.
      </p>
      <p className='my-4'>
        For importers, garden-system lots offer the best balance of volume, quality, and traceability. Washing station-level traceability (kebele or woreda) is standard, and competition-grade micro-lots scoring 87+ SCA points increasingly come from garden-system farms in <Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline font-bold'>Yirgacheffe</Link>, <Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline font-bold'>Guji</Link>, and <Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline font-bold'>Sidamo</Link>. Sidama region in particular has pushed garden coffee productivity above 10 quintals per hectare through organized farmer clusters and agricultural modernization; see our <Link href='/insights/sidama-coffee-production-productivity-export' className='text-amber-700 hover:underline font-bold'>Sidama production guide</Link> for the full breakdown.
      </p>

      <h3 className='text-2xl font-bold mt-6 mb-3'>Plantation Coffee</h3>
      <p className='my-4'>
        Plantation coffee accounts for roughly 5% of Ethiopia&apos;s output. These are larger, commercially managed operations, many originally established as state farms. They use more intensive management: structured planting density, regular pruning cycles, and planned fertilization programs.
      </p>
      <p className='my-4'>
        Plantation lots offer consistency and larger volumes per single source, making them attractive for buyers who need repeatable profiles across multiple shipments. Traceability is straightforward (single-estate origin). Cup quality is reliable but typically less complex than the best forest or garden lots.
      </p>

      <div className='bg-gray-50 p-4 rounded-lg border border-gray-200 my-6 text-sm'>
        <p><span className='font-semibold'>Buyer Tip:</span> When evaluating an Ethiopian offer, ask which farming system produced the lot. This single question tells you more about likely cup character, lot consistency, and traceability depth than grade designation alone.</p>
      </div>

      {/* SECTION 4: TERROIR TRIANGLE */}
      <h2 id='terroir' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineSun className='text-amber-600' />
        4. Soil, Shade, and Altitude: The Terroir Triangle
      </h2>

      <h3 className='text-2xl font-bold mt-6 mb-3'>Soil Types by Region</h3>
      <p className='my-4'>
        Coffee requires loamy soil balancing sand (drainage), silt (water retention), and clay (nutrient storage), with optimal pH between 5.5 and 6.5. Ethiopia&apos;s coffee regions benefit from ancient volcanic soils rich in minerals and organic matter.
      </p>
      <ul className='list-disc ml-5 my-4 space-y-2'>
        <li><span className='font-semibold'>Guji and Sidamo:</span> Dark volcanic soils high in potassium and phosphorus. These mineral-rich profiles contribute to the intense fruit and chocolate notes buyers associate with southern Ethiopian lots.</li>
        <li><span className='font-semibold'>Yirgacheffe:</span> Loamy highland soils at 1,700 to 2,200 meters, with excellent drainage and organic matter content. The soil structure supports the bright acidity and floral complexity that define Yirgacheffe&apos;s reputation.</li>
        <li><span className='font-semibold'>Harar:</span> Eastern highland soils that are drier and more alkaline than western regions, producing the distinctive blueberry and wine notes that <Link href='/ethiopian-coffee-harar' className='text-amber-700 hover:underline font-bold'>Harar naturals</Link> are known for.</li>
        <li><span className='font-semibold'>Jimma and Limu:</span> Red lateritic soils in western Ethiopia, producing clean, balanced cups with moderate acidity.</li>
      </ul>
      <p className='my-4'>
        When specialty buyers discuss &quot;terroir,&quot; soil is the foundation. The same heirloom variety planted in different Ethiopian soils produces noticeably different <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='text-amber-700 hover:underline font-bold'>chemical compounds</Link> and flavor profiles. Our <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline font-bold'>origins guide</Link> examines these regional differences in detail.
      </p>

      <h3 className='text-2xl font-bold mt-6 mb-3'>Shade Management</h3>
      <p className='my-4'>
        Ethiopian coffee grows almost exclusively under shade, in contrast to the full-sun monocultures common in Brazil. Shade trees (often Cordia africana, Albizia, and Acacia species) regulate temperature, slow cherry maturation, reduce pest pressure, and contribute organic matter to the soil through leaf litter.
      </p>
      <p className='my-4'>
        Slower maturation under shade allows sugars and organic acids to develop more fully within the cherry. This is why shade-grown Ethiopian lots tend to produce higher cup complexity than coffees rushed to ripeness under full sun. For buyers, &quot;shade-grown&quot; in Ethiopia is not a marketing label; it describes 90%+ of the country&apos;s production by default.
      </p>

      <h3 className='text-2xl font-bold mt-6 mb-3'>Altitude Bands and Cup Profile</h3>
      <p className='my-4'>
        Ethiopian coffee grows between 1,200 and 2,400 meters above sea level. Altitude affects bean density, acid development, and the overall complexity of the cup:
      </p>
      <ul className='list-disc ml-5 my-4 space-y-2'>
        <li><span className='font-semibold'>1,200 to 1,500m:</span> Lower-grown lots. Softer beans with mild acidity. Suitable for commercial blends. Common in parts of <Link href='/ethiopian-coffee-jimma' className='text-amber-700 hover:underline font-bold'>Jimma</Link>.</li>
        <li><span className='font-semibold'>1,500 to 1,800m:</span> Mid-altitude. Balanced acidity and body. Ethiopian Grade 2 and Grade 3 washed lots often come from this band.</li>
        <li><span className='font-semibold'>1,800 to 2,200m:</span> High-grown. Dense beans with pronounced acidity, floral and citrus notes. This band produces most of Ethiopia&apos;s specialty-grade coffee.</li>
        <li><span className='font-semibold'>2,200m+:</span> Very high altitude. Extremely slow maturation, resulting in the most concentrated flavors and highest density. Competition-level lots from Yirgacheffe and Guji frequently originate above 2,200 meters.</li>
      </ul>

      {/* SECTION 5: PLANT LIFECYCLE */}
      <h2 id='plant-lifecycle' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineBeaker className='text-amber-600' />
        5. The Coffee Plant Lifecycle on Ethiopian Farms
      </h2>
      <p className='my-4'>
        Understanding the plant lifecycle explains why coffee is a long-term agricultural investment and why supply from any given region can fluctuate year to year.
      </p>

      <h3 className='text-2xl font-bold mt-6 mb-3'>Nursery and Transplanting</h3>
      <p className='my-4'>
        Coffee production starts with seed selection. Seeds are tested for viability (minimum 20% moisture content), soaked overnight, and planted in raised nursery beds. Germination takes about one week. Seedlings develop in the nursery for 9 months, reaching 9 to 12 leaf pairs before transplanting at the start of the rainy season. Farmers prepare planting sites with organic matter and mulch to retain moisture.
      </p>

      <h3 className='text-2xl font-bold mt-6 mb-3'>Growth, Flowering, and Fruiting</h3>
      <p className='my-4'>
        Coffee plants require 2 to 3 years after transplanting before first harvest. Flowering follows dry-season stress: short, intense blooms lasting 3 to 4 days attract pollinators. While Arabica self-pollinates, cross-pollination (common in Ethiopia&apos;s genetically diverse plots) improves yield and resilience.
      </p>
      <p className='my-4'>
        Fruit development takes approximately 8 months after flowering. Cherries transition from green to deep red or purple at peak ripeness. On Ethiopian farms, harvest relies on selective hand-picking across multiple passes, sometimes 3 to 5 rounds per season. This labor-intensive method ensures that only ripe cherries enter processing, a key factor in Ethiopia&apos;s specialty-grade quality.
      </p>

      <h3 className='text-2xl font-bold mt-6 mb-3'>Productive Lifespan</h3>
      <p className='my-4'>
        With proper pruning and soil management, Arabica plants in Ethiopia remain productive for 20 to 30 years in garden and semi-forest systems, and potentially longer in undisturbed forest systems. Plants reach full production capacity between years 4 and 7. Ethiopia&apos;s national program to rejuvenate aging trees through stumping and replanting aims to sustain yields and improve average cup quality.
      </p>

      {/* SECTION 6: FARM MANAGEMENT */}
      <h2 id='farm-management' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineArrowTrendingUp className='text-amber-600' />
        6. Annual Farm Management and Its Quality Impact
      </h2>
      <p className='my-4'>
        Annual management practices directly affect what arrives in your warehouse. Buyers who understand these cycles can better evaluate lot quality and anticipate seasonal variation.
      </p>
      <ul className='list-disc ml-5 my-4 space-y-2'>
        <li><span className='font-semibold'>Post-harvest pruning:</span> Removes unproductive branches and improves air circulation, reducing disease pressure. Well-pruned farms produce more uniform cherry sizes, which translates to fewer screen-size defects in the green.</li>
        <li><span className='font-semibold'>Fertilization:</span> Most Ethiopian smallholders use organic inputs: composted coffee pulp, animal manure, and mulch from shade-tree leaf litter. These practices build soil biology over time. Chemical fertilizer use is limited but increasing in garden and plantation systems.</li>
        <li><span className='font-semibold'>Weed control:</span> Manual weeding maintains airflow and reduces competition for nutrients. Properly weeded plots show better cherry development and lower incidence of overripe or underripe cherries in the harvest.</li>
        <li><span className='font-semibold'>Pest and disease management:</span> Coffee Berry Disease (CBD) is the primary threat in Ethiopia, followed by Coffee Leaf Rust (CLR). Traditional management relies on resistant <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline font-bold'>heirloom varieties</Link>, shade regulation, and selective removal of infected branches. Ethiopia&apos;s genetic diversity provides natural resistance that monoculture origins lack.</li>
        <li><span className='font-semibold'>Shade regulation:</span> Seasonal pruning of shade trees adjusts light reaching the coffee canopy. Too much shade reduces yield; too little increases heat stress and accelerates ripening beyond the plant&apos;s capacity to develop sugars fully.</li>
      </ul>
      <p className='my-4'>
        For buyers, the practical implication is this: lots from well-managed farms (whether garden, semi-forest, or plantation) show fewer primary defects, more consistent screen size, and higher cupping scores. The <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline font-bold'>quality control and grading guide</Link> covers how to assess these attributes during sample evaluation.
      </p>

      {/* SECTION 7: ENVIRONMENTAL PRESSURES */}
      <h2 id='environmental-pressures' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineShieldCheck className='text-amber-600' />
        7. Environmental Pressures on Ethiopian Coffee
      </h2>
      <p className='my-4'>
        <Link href='/insights/ethiopian-coffee-climate-change-impact' className='text-amber-700 hover:underline font-bold'>Climate change</Link> poses the greatest long-term threat to Ethiopian coffee agriculture. Research published by the International Growth Centre estimates that rising temperatures and shifting rainfall patterns could reduce suitable Arabica growing land by up to 50% by 2050. Higher temperatures also accelerate pest cycles: Coffee Leaf Rust thrives in warmer conditions and is spreading to altitudes previously considered safe.
      </p>
      <p className='my-4'>
        Ethiopia&apos;s traditional polyculture and agroforestry systems provide more resilience than monoculture models. Forest and semi-forest coffee inherently buffers temperature extremes through shade canopy. The genetic diversity of Ethiopia&apos;s heirloom varieties, estimated at over 10,000 distinct types by the Jimma Agricultural Research Center, offers a natural reservoir of climate-adaptive traits that plant breeders worldwide are studying.
      </p>
      <p className='my-4'>
        For buyers, the <a href='https://environment.ec.europa.eu/topics/forests/deforestation/regulation_en' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>EU Deforestation Regulation (EUDR)</a> adds a compliance dimension to agricultural practices. Ethiopian coffee from forest and semi-forest systems requires documentation proving that production did not contribute to deforestation after December 2020. Our <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline font-bold'>EUDR compliance guide</Link> covers the documentation requirements in detail.
      </p>
      <p className='my-4'>
        Supporting resilient agricultural systems is not just an environmental concern; it is a supply chain concern. Buyers who invest in long-term sourcing relationships with origin-connected exporters help stabilize the farming communities that produce their coffee. <Link href='/insights/direct-trade-ethiopian-farmers' className='text-amber-700 hover:underline font-bold'>Direct trade partnerships</Link> that prioritize fair pricing and consistent offtake strengthen the agricultural base that specialty supply depends on.
      </p>

      {/* SECTION 8: SOURCING STRATEGY */}
      <h2 id='sourcing-strategy' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineGlobeAlt className='text-amber-600' />
        8. What This Means for Your Sourcing Strategy
      </h2>
      <p className='my-4'>
        Agricultural knowledge sharpens every stage of the buying process. Here is how to apply what this article covers:
      </p>
      <ul className='list-disc ml-5 my-4 space-y-2'>
        <li><span className='font-semibold'>Match farming system to your needs:</span> If you need volume and consistency, focus on garden-system lots from established washing stations or plantation-origin coffee. If you want distinctive, competition-oriented profiles, explore semi-forest and forest lots.</li>
        <li><span className='font-semibold'>Ask about altitude and soil:</span> Two washed Yirgacheffe lots from different altitude bands will cup differently. Request the specific kebele or washing station, and the altitude range, when evaluating offers.</li>
        <li><span className='font-semibold'>Factor in harvest timing:</span> Ethiopia&apos;s main harvest runs October through January in most regions, with some variation by altitude. Lots processed early in the season often differ in character from late-season harvests. The <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline font-bold'>harvest calendar</Link> maps these windows by region.</li>
        <li><span className='font-semibold'>Evaluate farm management through the cup:</span> Defect counts, screen-size consistency, and moisture stability all reflect agricultural practices. Low defect counts suggest good pruning, selective picking, and healthy soil.</li>
        <li><span className='font-semibold'>Build relationships that go beyond the transaction:</span> Understanding your exporter&apos;s sourcing network (which cooperatives, which washing stations, which farming communities) tells you whether the supply can repeat year after year.</li>
      </ul>
      <p className='my-4'>
        At Ethio Coffee Import and Export PLC, three decades of heritage sourcing relationships across Ethiopia&apos;s coffee regions give us direct knowledge of the farms and washing stations behind every lot. We connect roasters and importers with green coffee whose agricultural story we can verify, from soil to shipment.
      </p>

      {/* SECTION 9: FAQ */}
      <section id='faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200 mt-10'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2'>
          <HiOutlineQuestionMarkCircle className='text-amber-600 flex-shrink-0' />
          Frequently Asked Questions
        </h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What are the four Ethiopian coffee farming systems?</h4>
            <p className='text-sm text-gray-600'>Ethiopia uses forest, semi-forest, garden, and plantation systems. Forest coffee grows wild under natural canopy (~10% of production). Semi-forest coffee is managed forest (~35%). Garden coffee is smallholder plots near homes (~50%). Plantation coffee is larger commercial operations (~5%). Each system produces different lot characteristics and traceability levels.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How does altitude affect Ethiopian coffee quality?</h4>
            <p className='text-sm text-gray-600'>Higher altitude slows cherry maturation, allowing sugars and organic acids to develop more fully. Ethiopian coffee above 1,800 meters typically shows pronounced acidity, floral notes, and higher bean density. Competition-grade lots from Yirgacheffe and Guji frequently originate above 2,200 meters, where slow growth produces the most concentrated flavors.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How long does it take a coffee plant to produce fruit?</h4>
            <p className='text-sm text-gray-600'>Coffee plants require 2 to 3 years from transplanting to first harvest. Initial yields are modest; full production capacity is reached between years 4 and 7. With proper management, Arabica plants in Ethiopia remain productive for 20 to 30 years, with some forest trees producing for significantly longer.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How does soil type affect Ethiopian coffee flavor?</h4>
            <p className='text-sm text-gray-600'>Ethiopia&apos;s volcanic soils vary by region and directly shape cup character. Guji and Sidamo have dark mineral-rich soils producing fruit and chocolate notes. Yirgacheffe has loamy highland soils supporting bright acidity and floral complexity. Harar has drier, more alkaline soils creating distinctive blueberry and wine characteristics.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How is climate change threatening Ethiopian coffee agriculture?</h4>
            <p className='text-sm text-gray-600'>Rising temperatures and erratic rainfall could reduce suitable Arabica growing land by up to 50% by 2050. Pest pressure from Coffee Leaf Rust is increasing at higher altitudes. Ethiopia&apos;s polyculture shade systems and genetic diversity offer natural resilience, but sustained investment in climate adaptation is critical for long-term supply stability.</p>
          </div>
        </div>
      </section>

      {/* CONTINUE SERIES */}
      <h3 className='text-2xl font-bold mt-6 mb-3'>Continue Your Coffee Education</h3>
      <p className='my-4'>
        Now that you understand coffee as agriculture, explore what happens after harvest:
      </p>
      <ul className='list-disc ml-5 my-4 space-y-1'>
        <li><Link href='/insights/coffee-is-processing-drying-milling' className='text-amber-700 hover:underline font-bold'>Coffee Is Processing</Link>: How cherries become green beans through fermentation, drying, and milling</li>
        <li><Link href='/insights/coffee-is-commerce-exporting-importing-buying' className='text-amber-700 hover:underline font-bold'>Coffee Is Commerce</Link>: The logistics and economics of moving coffee from origin to roastery</li>
        <li><Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline font-bold'>Washed vs Natural Processing</Link>: How different post-harvest methods create different cup profiles</li>
      </ul>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Premium Ethiopian Coffee Direct from Origin</h4>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Import and Export PLC</span> connects roasters and importers with traceable Ethiopian green coffee sourced through our trusted network of cooperatives and washing stations across Yirgacheffe, Guji, Sidamo, Harar, Limu, and Jimma. Request samples, current pricing, or traceability documentation to get started.
        </p>
        <p className='my-2'>
          From trial LCL shipments to full-container programs, three decades of heritage sourcing relationships ensure consistent quality, competitive FOB pricing, and the agricultural traceability that informed buyers expect.
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
        <div className='grid md:grid-cols-2 gap-6'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Coffee Journey Series</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/coffee-plant-taxonomy-species-varieties' className='text-amber-700 hover:underline'>Coffee Plant Taxonomy, Species &amp; Varieties</Link></li>
              <li>&bull; <Link href='/insights/coffee-is-processing-drying-milling' className='text-amber-700 hover:underline'>Coffee Is Processing: Drying &amp; Milling</Link></li>
              <li>&bull; <Link href='/insights/coffee-is-commerce-exporting-importing-buying' className='text-amber-700 hover:underline'>Coffee Is Commerce: Exporting &amp; Importing</Link></li>
              <li>&bull; <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='text-amber-700 hover:underline'>Coffee Is Science: Analysis &amp; Evaluation</Link></li>
              <li>&bull; <Link href='/insights/coffee-is-art-roasting-brewing' className='text-amber-700 hover:underline'>Coffee Is Art: Roasting &amp; Brewing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origins &amp; Quality</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Coffee Origins</Link></li>
              <li>&bull; <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji Comparison</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Ethiopian Heirloom Varieties &amp; Landraces</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality Control &amp; Grading</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/direct-trade-ethiopian-farmers' className='text-amber-700 hover:underline'>Direct Trade with Ethiopian Farmers</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Washing Stations Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Harvest Calendar</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Climate &amp; Sustainability</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-climate-change-impact' className='text-amber-700 hover:underline'>Ethiopian Coffee Climate Change Impact</Link></li>
              <li>&bull; <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline'>EUDR Compliance for Ethiopian Coffee</Link></li>
              <li>&bull; <Link href='/insights/specialty-coffee-trends-2026' className='text-amber-700 hover:underline'>Specialty Coffee Trends 2026</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC. This article draws on <a href='https://fas.usda.gov/data/production/commodity/0711100' target='_blank' rel='noopener noreferrer' className='underline'>USDA Foreign Agricultural Service</a> production data, <a href='https://ico.org/' target='_blank' rel='noopener noreferrer' className='underline'>International Coffee Organization</a> trade reports, research from the Jimma Agricultural Research Center, and <a href='https://worldcoffeeresearch.org/' target='_blank' rel='noopener noreferrer' className='underline'>World Coffee Research</a> variety data. Agricultural conditions and production statistics change; <Link href='/contact-us' className='underline'>contact our team</Link> for current sourcing information.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot; <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> &middot; <Link href='/about' className='underline'>About Ethio Coffee</Link> &middot; <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { ArrowRight } from '@/app/components/Arrow'
import {
  HiOutlineCalendarDays,
  HiOutlineGlobeAlt,
  HiOutlineCurrencyDollar,
  HiOutlineClipboardDocumentList,
  HiOutlineLightBulb,
  HiOutlineQuestionMarkCircle,
  HiOutlineMapPin,
  HiOutlineTruck,
  HiOutlineChartBar,
  HiOutlineArrowPath,
  HiOutlineCheckCircle,
  HiOutlineClock
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopianCoffeeHarvestCalendarBuyingGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        A region-by-region guide to Ethiopian coffee harvest timing, shipping windows, pricing seasonality, and quarterly buying strategy for importers and roasters.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Knowing when each Ethiopian coffee region harvests is the foundation of a well-timed sourcing strategy.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian coffee harvest calendar showing cherry picking timing across growing regions'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>

        <figcaption className='font-inconsolata text-xs my-1 text-gray-600'>
          Coffee cherry harvesting in Ethiopia follows a seasonal cycle that varies by altitude, latitude, and processing method.
        </figcaption>
      </figure>

      {/* CATEGORY BADGE */}
      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Sourcing Strategy / Harvest Timing / Seasonal Buying / Green Coffee Planning</span>
      </div>

      {/* FURTHER READING / AUTHORITATIVE LINKS */}
      <div className='my-4 text-sm text-gray-700'>
        <p className='font-semibold mb-1'>Further reading:</p>
        <ul className='list-disc ml-5 space-y-1'>
          <li>
            <a href='https://www.ico.org' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>International Coffee Organization (ICO)</a> - global coffee trade statistics, crop year calendars, and composite indicator prices.
          </li>
          <li>
            <a href='https://apps.fas.usda.gov/psdonline/circulars/coffee.pdf' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>USDA Foreign Agricultural Service</a> - semi-annual coffee production and export forecasts for Ethiopia.
          </li>
          <li>
            <a href='https://www.ecx.com.et' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>Ethiopia Commodity Exchange (ECX)</a> - daily auction prices, warehouse receipts, and grading information for Ethiopian coffee.
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
          Ethiopian coffee harvesting runs from October through February, but the export window extends from December through August depending on processing method and region. Washed coffees typically ship 2-3 months after harvest; naturals take 3-5 months. Buyers who align their purchasing calendar to these windows secure the freshest lots at the most competitive prices. The quarterly buying plan in this guide gives importers and roasters a month-by-month framework for samples, contracts, and shipments.
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
            <p className='font-bold text-sm mb-2'>Harvest Timing</p>
            <ul className='space-y-1.5 text-sm'>
              <li><a href="#year-at-a-glance" className='text-amber-700 hover:underline'>The Ethiopian Coffee Year at a Glance</a></li>
              <li><a href="#region-harvest-windows" className='text-amber-700 hover:underline'>Region-by-Region Harvest Windows</a></li>
              <li><a href="#washed-vs-natural" className='text-amber-700 hover:underline'>Washed vs Natural Availability</a></li>
            </ul>
          </div>
          <div>
            <p className='font-bold text-sm mb-2'>Export & Buying Strategy</p>
            <ul className='space-y-1.5 text-sm'>
              <li><a href="#export-timeline" className='text-amber-700 hover:underline'>From Cherry to Container</a></li>
              <li><a href="#arrival-windows" className='text-amber-700 hover:underline'>Arrival Windows by Destination</a></li>
              <li><a href="#pricing-seasonality" className='text-amber-700 hover:underline'>Pricing Seasonality</a></li>
              <li><a href="#quarterly-plan" className='text-amber-700 hover:underline'>Annual Buying Plan: Quarter by Quarter</a></li>
              <li><a href="#new-vs-past-crop" className='text-amber-700 hover:underline'>New Crop vs Past Crop</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* SECTION 1: YEAR AT A GLANCE */}
      <h3 id="year-at-a-glance" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCalendarDays className='text-amber-600 flex-shrink-0' />
        The Ethiopian Coffee Year at a Glance
      </h3>

      <p className='my-4'>
        Ethiopia&apos;s coffee crop year runs from October to September in ICO reporting terms. The main harvest begins in October at lower altitudes and extends through February at the highest elevations. Unlike countries with two distinct harvest cycles (such as Colombia or Kenya), Ethiopia has a single main harvest. However, the wide altitude range across growing regions (1,400 to 2,200+ meters) creates a staggered picking season that spans roughly five months.
      </p>

      <p className='my-4'>
        The table below maps each stage of the Ethiopian coffee cycle across twelve months. Understanding this cycle is the starting point for building a procurement calendar aligned with origin availability.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-xs border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-2 text-left'>Stage</th>
              <th className='p-2'>Oct</th>
              <th className='p-2'>Nov</th>
              <th className='p-2'>Dec</th>
              <th className='p-2'>Jan</th>
              <th className='p-2'>Feb</th>
              <th className='p-2'>Mar</th>
              <th className='p-2'>Apr</th>
              <th className='p-2'>May</th>
              <th className='p-2'>Jun</th>
              <th className='p-2'>Jul</th>
              <th className='p-2'>Aug</th>
              <th className='p-2'>Sep</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            <tr className='bg-white'>
              <td className='p-2 font-medium'>Cherry Harvest</td>
              <td className='p-2 bg-green-100 text-center'>&#x25CF;</td>
              <td className='p-2 bg-green-200 text-center'>&#x25CF;</td>
              <td className='p-2 bg-green-300 text-center'>&#x25CF;</td>
              <td className='p-2 bg-green-200 text-center'>&#x25CF;</td>
              <td className='p-2 bg-green-100 text-center'>&#x25CF;</td>
              <td className='p-2'></td>
              <td className='p-2'></td>
              <td className='p-2'></td>
              <td className='p-2'></td>
              <td className='p-2'></td>
              <td className='p-2'></td>
              <td className='p-2'></td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-2 font-medium'>Wet Milling (Washed)</td>
              <td className='p-2 bg-blue-100 text-center'>&#x25CF;</td>
              <td className='p-2 bg-blue-200 text-center'>&#x25CF;</td>
              <td className='p-2 bg-blue-200 text-center'>&#x25CF;</td>
              <td className='p-2 bg-blue-100 text-center'>&#x25CF;</td>
              <td className='p-2 bg-blue-100 text-center'>&#x25CF;</td>
              <td className='p-2'></td>
              <td className='p-2'></td>
              <td className='p-2'></td>
              <td className='p-2'></td>
              <td className='p-2'></td>
              <td className='p-2'></td>
              <td className='p-2'></td>
            </tr>
            <tr className='bg-white'>
              <td className='p-2 font-medium'>Drying (Natural)</td>
              <td className='p-2'></td>
              <td className='p-2 bg-amber-100 text-center'>&#x25CF;</td>
              <td className='p-2 bg-amber-200 text-center'>&#x25CF;</td>
              <td className='p-2 bg-amber-200 text-center'>&#x25CF;</td>
              <td className='p-2 bg-amber-200 text-center'>&#x25CF;</td>
              <td className='p-2 bg-amber-100 text-center'>&#x25CF;</td>
              <td className='p-2'></td>
              <td className='p-2'></td>
              <td className='p-2'></td>
              <td className='p-2'></td>
              <td className='p-2'></td>
              <td className='p-2'></td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-2 font-medium'>Dry Milling / Grading</td>
              <td className='p-2'></td>
              <td className='p-2'></td>
              <td className='p-2 bg-gray-200 text-center'>&#x25CF;</td>
              <td className='p-2 bg-gray-300 text-center'>&#x25CF;</td>
              <td className='p-2 bg-gray-300 text-center'>&#x25CF;</td>
              <td className='p-2 bg-gray-300 text-center'>&#x25CF;</td>
              <td className='p-2 bg-gray-200 text-center'>&#x25CF;</td>
              <td className='p-2 bg-gray-200 text-center'>&#x25CF;</td>
              <td className='p-2'></td>
              <td className='p-2'></td>
              <td className='p-2'></td>
              <td className='p-2'></td>
            </tr>
            <tr className='bg-white'>
              <td className='p-2 font-medium'>Export Shipments</td>
              <td className='p-2'></td>
              <td className='p-2'></td>
              <td className='p-2 bg-amber-100 text-center'>&#x25CF;</td>
              <td className='p-2 bg-amber-200 text-center'>&#x25CF;</td>
              <td className='p-2 bg-amber-300 text-center'>&#x25CF;</td>
              <td className='p-2 bg-amber-300 text-center'>&#x25CF;</td>
              <td className='p-2 bg-amber-300 text-center'>&#x25CF;</td>
              <td className='p-2 bg-amber-200 text-center'>&#x25CF;</td>
              <td className='p-2 bg-amber-200 text-center'>&#x25CF;</td>
              <td className='p-2 bg-amber-100 text-center'>&#x25CF;</td>
              <td className='p-2 bg-amber-100 text-center'>&#x25CF;</td>
              <td className='p-2'></td>
            </tr>
          </tbody>
        </table>
        <p className='text-xs text-gray-500 mt-2'>Peak activity indicated by darker shading. Exact timing shifts by 2-4 weeks year to year depending on rainfall patterns.</p>
      </div>

      <p className='my-4'>
        The key takeaway from this calendar: there is a 2-4 month gap between peak harvest (November-December) and peak export availability (March-May). That gap is the processing, milling, and grading pipeline. Buyers who initiate contact during harvest season (October-December) position themselves to receive pre-shipment samples in January-March and secure the best lots before peak export season.
      </p>

      {/* SECTION 2: REGION-BY-REGION HARVEST WINDOWS */}
      <h3 id="region-harvest-windows" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineMapPin className='text-amber-600 flex-shrink-0' />
        Region-by-Region Harvest Windows
      </h3>

      <p className='my-4'>
        Ethiopia has six major coffee-producing regions, each with distinct altitudes, microclimates, and harvest timing. Higher-altitude regions harvest later because cherries mature more slowly at cooler temperatures. The table below summarizes harvest windows and typical export readiness for each region. For detailed flavor profiles, grade availability, and sourcing guidance for each region, see our <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline font-bold'>guide to Ethiopian green coffee origins</Link>.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Region</th>
              <th className='p-3 text-left'>Altitude (m)</th>
              <th className='p-3 text-left'>Harvest Window</th>
              <th className='p-3 text-left'>Export Ready</th>
              <th className='p-3 text-left'>Primary Process</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            <tr className='bg-white'>
              <td className='p-3 font-medium'><Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 underline'>Yirgacheffe</Link></td>
              <td className='p-3'>1,750 - 2,200</td>
              <td className='p-3'>Oct - Jan</td>
              <td className='p-3'>Jan - May</td>
              <td className='p-3'>Washed &amp; Natural</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-medium'><Link href='/ethiopian-coffee-sidamo' className='text-amber-700 underline'>Sidamo (Sidama)</Link></td>
              <td className='p-3'>1,550 - 2,200</td>
              <td className='p-3'>Oct - Feb</td>
              <td className='p-3'>Jan - Jun</td>
              <td className='p-3'>Washed &amp; Natural</td>
            </tr>
            <tr className='bg-white'>
              <td className='p-3 font-medium'><Link href='/ethiopian-coffee-guji' className='text-amber-700 underline'>Guji</Link></td>
              <td className='p-3'>1,800 - 2,300</td>
              <td className='p-3'>Nov - Feb</td>
              <td className='p-3'>Feb - Jun</td>
              <td className='p-3'>Washed &amp; Natural</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-medium'><Link href='/ethiopian-coffee-harar' className='text-amber-700 underline'>Harar</Link></td>
              <td className='p-3'>1,500 - 2,100</td>
              <td className='p-3'>Oct - Jan</td>
              <td className='p-3'>Jan - Apr</td>
              <td className='p-3'>Natural (primarily)</td>
            </tr>
            <tr className='bg-white'>
              <td className='p-3 font-medium'><Link href='/ethiopian-coffee-limu' className='text-amber-700 underline'>Limu</Link></td>
              <td className='p-3'>1,400 - 2,000</td>
              <td className='p-3'>Oct - Jan</td>
              <td className='p-3'>Dec - Apr</td>
              <td className='p-3'>Washed (primarily)</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-medium'><Link href='/ethiopian-coffee-jimma' className='text-amber-700 underline'>Jimma</Link></td>
              <td className='p-3'>1,400 - 1,900</td>
              <td className='p-3'>Oct - Dec</td>
              <td className='p-3'>Dec - Mar</td>
              <td className='p-3'>Natural &amp; Washed</td>
            </tr>
          </tbody>
        </table>
        <p className='text-xs text-gray-500 mt-2'>Export ready = earliest date milled, graded, and available for booking. Higher-altitude lots within each region ship later.</p>
      </div>

      <h4 className='text-2xl font-bold mt-8 mb-4'>Yirgacheffe</h4>
      <p className='my-4'>
        Ethiopia&apos;s most sought-after origin. Yirgacheffe&apos;s high altitude (up to 2,200 m) produces dense beans with intense floral and citrus complexity. Washed lots from top stations are available as early as January, but the finest Grade 1 washed lots typically ship February through April. Natural Yirgacheffe lots follow 4-6 weeks later due to extended drying time. Demand is strong, so booking early is important. For a detailed profile, see our <Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 underline font-semibold'>Yirgacheffe origin page</Link>.
      </p>

      <h4 className='text-2xl font-bold mt-8 mb-4'>Sidamo (Sidama)</h4>
      <p className='my-4'>
        The broader Sidamo zone offers exceptional diversity across sub-regions like Bensa, Chire, and Dale. Harvest starts early at lower altitudes (October) and extends through February at higher sites. Sidamo provides some of the best value in Ethiopian specialty coffee, with Grade 1 washed lots offering clean, sweet cups at lower differentials than Yirgacheffe. Export-ready lots are available from January through June, giving buyers a longer purchasing window. Learn more on our <Link href='/ethiopian-coffee-sidamo' className='text-amber-700 underline font-semibold'>Sidamo origin page</Link>.
      </p>

      <h4 className='text-2xl font-bold mt-8 mb-4'>Guji</h4>
      <p className='my-4'>
        Guji&apos;s high-altitude sites (Hambela, Shakiso, Uraga) harvest later than most regions, with peak picking in November through January. This later timing means Guji lots arrive to market slightly after Yirgacheffe and Sidamo, often shipping from February through June. Both washed and natural Guji coffees have gained significant market recognition, especially for their complex berry and stone-fruit notes. See our <Link href='/ethiopian-coffee-guji' className='text-amber-700 underline font-semibold'>Guji origin page</Link> for cupping profiles and lot details.
      </p>

      <h4 className='text-2xl font-bold mt-8 mb-4'>Harar</h4>
      <p className='my-4'>
        Harar is almost exclusively natural-processed, producing wild, fruity, blueberry-noted cups that have no equivalent from any other origin. The harvest runs October through January, and Harar naturals are typically export-ready from January through April. Volumes are smaller than the southern zone regions, and quality variation between lots can be significant. Pre-shipment sample approval is especially important for Harar purchases. Explore this region on our <Link href='/ethiopian-coffee-harar' className='text-amber-700 underline font-semibold'>Harar origin page</Link>.
      </p>

      <h4 className='text-2xl font-bold mt-8 mb-4'>Limu</h4>
      <p className='my-4'>
        Limu, in western Ethiopia, produces primarily washed coffees known for balanced, clean cups with mild fruit and wine-like acidity. Lower altitude sites harvest as early as October, and Limu is often among the first regions to have export-ready lots (December-January). This early availability makes Limu a practical option for buyers who need new-crop Ethiopian coffee at the start of the calendar year. Visit our <Link href='/ethiopian-coffee-limu' className='text-amber-700 underline font-semibold'>Limu origin page</Link> for current offerings.
      </p>

      <h4 className='text-2xl font-bold mt-8 mb-4'>Jimma</h4>
      <p className='my-4'>
        Jimma, also in the west, is Ethiopia&apos;s highest-volume commercial coffee zone. Harvesting begins in October and finishes by December at most sites. Lower altitudes and earlier harvest translate to the earliest export-ready coffee of the season, with some lots available from late December. Jimma coffees range from Grade 4-5 commercial lots to Grade 2-3 specialty-capable lots. For price-sensitive blenders and large-volume buyers, Jimma provides reliable supply at competitive pricing. See our <Link href='/ethiopian-coffee-jimma' className='text-amber-700 underline font-semibold'>Jimma origin page</Link>.
      </p>

      {/* SECTION 3: WASHED VS NATURAL */}
      <h3 id="washed-vs-natural" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineArrowPath className='text-amber-600 flex-shrink-0' />
        Washed vs Natural: When Each Ships
      </h3>

      <p className='my-4'>
        Processing method has a direct impact on export timing. The difference between washed and natural Ethiopian coffee extends beyond cup profile; it determines when coffee becomes available for shipment.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold mb-3 text-lg flex items-center gap-2'>
            <HiOutlineClock className='text-blue-600 flex-shrink-0' />
            Washed (Wet-Processed)
          </h5>
          <ul className='text-sm space-y-2'>
            <li><span className='font-bold'>Processing time:</span> 10-14 days (pulping, fermentation, washing, drying)</li>
            <li><span className='font-bold'>Drying:</span> 10-15 days on raised beds</li>
            <li><span className='font-bold'>Resting/conditioning:</span> 30-60 days in parchment</li>
            <li><span className='font-bold'>Total cherry-to-export:</span> 2-3 months</li>
            <li><span className='font-bold'>First shipments:</span> December (Limu, Jimma) to February (Guji)</li>
          </ul>
        </div>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold mb-3 text-lg flex items-center gap-2'>
            <HiOutlineClock className='text-amber-600 flex-shrink-0' />
            Natural (Dry-Processed)
          </h5>
          <ul className='text-sm space-y-2'>
            <li><span className='font-bold'>Processing time:</span> Whole cherry drying, no pulping</li>
            <li><span className='font-bold'>Drying:</span> 15-30 days on raised beds (weather dependent)</li>
            <li><span className='font-bold'>Resting/conditioning:</span> 30-90 days in dry cherry or parchment</li>
            <li><span className='font-bold'>Total cherry-to-export:</span> 3-5 months</li>
            <li><span className='font-bold'>First shipments:</span> February (Harar, Jimma) to April (Guji, Yirgacheffe)</li>
          </ul>
        </div>
      </div>

      <p className='my-4'>
        The practical implication: if you need Ethiopian coffee in your warehouse by January or February, washed lots from Limu or Jimma are your most reliable options. If you can wait until April or May, the full range of naturals from Yirgacheffe, Guji, and Sidamo becomes available. For a deeper comparison of these processing methods, read our guide to <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 underline font-semibold'>washed vs natural Ethiopian coffee</Link>.
      </p>

      {/* SECTION 4: EXPORT TIMELINE */}
      <h3 id="export-timeline" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineTruck className='text-amber-600 flex-shrink-0' />
        From Cherry to Container: The Export Timeline
      </h3>

      <p className='my-4'>
        After harvest and processing, Ethiopian coffee passes through several steps before it reaches a shipping container at the port of Djibouti. Understanding this timeline helps buyers set realistic expectations for delivery.
      </p>

      <div className='space-y-4 my-6'>
        <div className='flex items-start gap-4 bg-gray-50 p-4 rounded-lg border-l-4 border-amber-500'>
          <div className='bg-amber-100 text-amber-800 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-sm'>1</div>
          <div>
            <p className='font-bold'>Dry Milling &amp; Grading (1-2 weeks)</p>
            <p className='text-sm'>Parchment is hulled, green beans are sorted by size and density, and defects are removed by hand or machine. ECX-grade lots are delivered to ECX warehouses for official grading; direct-trade lots are graded at the exporter&apos;s facility.</p>
          </div>
        </div>
        <div className='flex items-start gap-4 bg-gray-50 p-4 rounded-lg border-l-4 border-amber-500'>
          <div className='bg-amber-100 text-amber-800 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-sm'>2</div>
          <div>
            <p className='font-bold'>ECX Auction or Direct Offer (1-3 weeks)</p>
            <p className='text-sm'>ECX channel: coffee is auctioned, and the winning exporter takes title. Direct export: the exporter offers pre-shipment samples to international buyers. Direct-trade buyers who pre-contracted during harvest can skip this step.</p>
          </div>
        </div>
        <div className='flex items-start gap-4 bg-gray-50 p-4 rounded-lg border-l-4 border-amber-500'>
          <div className='bg-amber-100 text-amber-800 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-sm'>3</div>
          <div>
            <p className='font-bold'>Export Documentation (1-2 weeks)</p>
            <p className='text-sm'>The exporter obtains the export permit, ICO certificate of origin, phytosanitary certificate, and other required documents from the Ethiopian Coffee and Tea Authority and relevant agencies.</p>
          </div>
        </div>
        <div className='flex items-start gap-4 bg-gray-50 p-4 rounded-lg border-l-4 border-amber-500'>
          <div className='bg-amber-100 text-amber-800 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-sm'>4</div>
          <div>
            <p className='font-bold'>Trucking to Djibouti (3-5 days)</p>
            <p className='text-sm'>Coffee is loaded into containers at the exporter&apos;s warehouse (typically in Addis Ababa or regional hubs) and trucked approximately 900 km to the Port of Djibouti for vessel loading.</p>
          </div>
        </div>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold mb-2 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />
          ECX vs Direct Trade: Timing Difference
        </p>
        <p className='text-sm'>
          Coffee sourced through the ECX auction typically adds 2-4 weeks to the timeline compared to direct exports, due to warehouse registration, auction scheduling, and post-auction logistics. Direct-trade relationships, where contracts are signed before or during harvest, can shave 3-6 weeks off the total timeline. For buyers who prioritize speed and lot-level traceability, working with an exporter holding a direct export license is the faster route. Learn more about the ECX system in our <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-primary underline font-semibold'>ECX and Ethiopian coffee export</Link> guide.
        </p>
      </div>

      {/* SECTION 5: ARRIVAL WINDOWS */}
      <h3 id="arrival-windows" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineGlobeAlt className='text-amber-600 flex-shrink-0' />
        When Ethiopian Coffee Arrives by Destination
      </h3>

      <p className='my-4'>
        Ocean transit from Djibouti varies significantly by destination. The table below shows typical transit times and new-crop arrival windows for major importing regions.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Destination</th>
              <th className='p-3 text-left'>Transit Time</th>
              <th className='p-3 text-left'>Washed Arrivals</th>
              <th className='p-3 text-left'>Natural Arrivals</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            <tr className='bg-white'>
              <td className='p-3 font-medium'>Northern Europe</td>
              <td className='p-3'>15-20 days</td>
              <td className='p-3'>Jan - May</td>
              <td className='p-3'>Mar - Jul</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-medium'>Mediterranean / Middle East</td>
              <td className='p-3'>7-14 days</td>
              <td className='p-3'>Jan - Apr</td>
              <td className='p-3'>Mar - Jun</td>
            </tr>
            <tr className='bg-white'>
              <td className='p-3 font-medium'>US East Coast</td>
              <td className='p-3'>25-35 days</td>
              <td className='p-3'>Feb - Jun</td>
              <td className='p-3'>Apr - Aug</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-medium'>US West Coast</td>
              <td className='p-3'>30-40 days</td>
              <td className='p-3'>Mar - Jul</td>
              <td className='p-3'>May - Aug</td>
            </tr>
            <tr className='bg-white'>
              <td className='p-3 font-medium'>East Asia (Japan, South Korea)</td>
              <td className='p-3'>20-30 days</td>
              <td className='p-3'>Feb - Jun</td>
              <td className='p-3'>Apr - Jul</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-medium'>Australia</td>
              <td className='p-3'>20-28 days</td>
              <td className='p-3'>Feb - Jun</td>
              <td className='p-3'>Apr - Jul</td>
            </tr>
          </tbody>
        </table>
        <p className='text-xs text-gray-500 mt-2'>Actual transit varies by shipping line, transshipment ports, and port congestion. Add 1-2 weeks for customs clearance and inland delivery.</p>
      </div>

      <p className='my-4'>
        European buyers enjoy the shortest transit window and are often the first to receive new-crop Ethiopian lots. US buyers, particularly on the West Coast, should expect a 4-6 week delay compared to European arrivals and plan inventory accordingly. For detailed logistics guidance, see our article on <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 underline font-semibold'>specialty coffee storage and freight logistics</Link>.
      </p>

      {/* SECTION 6: PRICING SEASONALITY */}
      <h3 id="pricing-seasonality" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='text-amber-600 flex-shrink-0' />
        Pricing Seasonality Through the Crop Year
      </h3>

      <p className='my-4'>
        Ethiopian coffee prices follow a predictable seasonal pattern driven by supply availability, demand timing, and inventory levels. Understanding these cycles helps buyers time their purchases.
      </p>

      <div className='space-y-3 my-6'>
        <div className='flex items-start gap-3 bg-gray-50 p-4 rounded-lg'>
          <HiOutlineChartBar className='text-amber-600 mt-1 flex-shrink-0 text-xl' />
          <div>
            <p className='font-bold text-sm'>October - December: Pre-Season &amp; Early Harvest</p>
            <p className='text-sm'>Limited new-crop availability. Prices for remaining past-crop lots may soften as buyers anticipate fresh supply. Early washed lots from Jimma and Limu may appear in December, often at premium prices due to scarcity.</p>
          </div>
        </div>
        <div className='flex items-start gap-3 bg-gray-50 p-4 rounded-lg'>
          <HiOutlineChartBar className='text-green-600 mt-1 flex-shrink-0 text-xl' />
          <div>
            <p className='font-bold text-sm'>January - March: New-Crop Surge</p>
            <p className='text-sm'>Supply increases rapidly as milling ramps up across all regions. This is typically the most competitive pricing window. Exporters are eager to move volume, and buyers have the widest selection of fresh lots. Forward contracts locked during this period often capture the best differentials.</p>
          </div>
        </div>
        <div className='flex items-start gap-3 bg-gray-50 p-4 rounded-lg'>
          <HiOutlineChartBar className='text-amber-600 mt-1 flex-shrink-0 text-xl' />
          <div>
            <p className='font-bold text-sm'>April - June: Peak Export Season</p>
            <p className='text-sm'>The highest volume of Ethiopian coffee ships during this window. Prices stabilize. Top specialty lots from Yirgacheffe and Guji are fully available. Natural-processed coffees peak in availability. This is the last opportunity to secure the best lots from the current crop year.</p>
          </div>
        </div>
        <div className='flex items-start gap-3 bg-gray-50 p-4 rounded-lg'>
          <HiOutlineChartBar className='text-red-600 mt-1 flex-shrink-0 text-xl' />
          <div>
            <p className='font-bold text-sm'>July - September: Late Season &amp; Transition</p>
            <p className='text-sm'>Supply of fresh new-crop lots diminishes. Remaining inventory is past-crop. Prices for high-demand grades may firm as availability tightens. Buyers still needing supply face reduced selection and potentially higher costs. This is the worst time to be sourcing Ethiopian coffee for the first time.</p>
          </div>
        </div>
      </div>

      <p className='my-4'>
        For a comprehensive breakdown of pricing structures and current FOB price ranges, refer to our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 underline font-semibold'>Ethiopian coffee FOB pricing guide</Link>.
      </p>

      {/* SECTION 7: QUARTERLY BUYING PLAN */}
      <h3 id="quarterly-plan" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineClipboardDocumentList className='text-amber-600 flex-shrink-0' />
        Annual Buying Plan: Quarter by Quarter
      </h3>

      <p className='my-4'>
        The following framework translates the harvest calendar into a practical quarterly procurement plan. Adapt the timing to your specific needs, but the sequence of activities remains consistent year to year.
      </p>

      <div className='space-y-6 my-8'>

        {/* Q1 */}
        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineCalendarDays className='text-green-700 flex-shrink-0' />
            Q1 (January - March): Sample, Evaluate, Contract
          </h4>
          <ul className='text-sm space-y-2'>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' /> Request pre-shipment samples of new-crop washed lots from all target regions</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' /> Cup and score samples against your quality benchmarks</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' /> Lock forward contracts for 60-70% of your estimated annual Ethiopian volume</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' /> Open Letters of Credit for confirmed orders</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' /> Begin receiving early washed shipments (Limu, Jimma, Sidamo)</li>
          </ul>
        </div>

        {/* Q2 */}
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineCalendarDays className='text-amber-700 flex-shrink-0' />
            Q2 (April - June): Receive, Fill Gaps, Book Naturals
          </h4>
          <ul className='text-sm space-y-2'>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-amber-600 mt-0.5 flex-shrink-0' /> Receive the bulk of washed shipments from Q1 contracts</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-amber-600 mt-0.5 flex-shrink-0' /> Sample and book natural-processed lots (Yirgacheffe, Guji, Sidamo, Harar)</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-amber-600 mt-0.5 flex-shrink-0' /> Fill remaining 30-40% of annual volume with spot purchases</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-amber-600 mt-0.5 flex-shrink-0' /> Evaluate arrival quality against pre-shipment samples</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-amber-600 mt-0.5 flex-shrink-0' /> Provide feedback to your exporter for next season&apos;s lots</li>
          </ul>
        </div>

        {/* Q3 */}
        <div className='bg-gray-100 p-5 rounded-lg border border-gray-300'>
          <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineCalendarDays className='text-gray-700 flex-shrink-0' />
            Q3 (July - September): Manage Inventory, Plan Ahead
          </h4>
          <ul className='text-sm space-y-2'>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-gray-600 mt-0.5 flex-shrink-0' /> Receive remaining natural shipments</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-gray-600 mt-0.5 flex-shrink-0' /> Monitor warehouse inventory and storage conditions</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-gray-600 mt-0.5 flex-shrink-0' /> Review the upcoming crop year forecast (USDA reports typically release in June and December)</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-gray-600 mt-0.5 flex-shrink-0' /> Begin discussions with your exporter about next season&apos;s expectations and pricing</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-gray-600 mt-0.5 flex-shrink-0' /> Ensure trade finance facilities are in place for the new season</li>
          </ul>
        </div>

        {/* Q4 */}
        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineCalendarDays className='text-blue-700 flex-shrink-0' />
            Q4 (October - December): Harvest Season Engagement
          </h4>
          <ul className='text-sm space-y-2'>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-blue-600 mt-0.5 flex-shrink-0' /> Contact your exporter for early harvest updates and initial lot availability</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-blue-600 mt-0.5 flex-shrink-0' /> Request offer samples from early-harvest regions (Jimma, Limu, Harar)</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-blue-600 mt-0.5 flex-shrink-0' /> Evaluate forecast volumes and quality outlook for the new crop</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-blue-600 mt-0.5 flex-shrink-0' /> Consider early forward contracts if market conditions are favorable</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-blue-600 mt-0.5 flex-shrink-0' /> Plan warehouse space and roasting schedules for incoming new-crop arrivals</li>
          </ul>
        </div>

      </div>

      {/* SECTION 8: NEW CROP VS PAST CROP */}
      <h3 id="new-vs-past-crop" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineArrowPath className='text-amber-600 flex-shrink-0' />
        New Crop vs Past Crop: What Buyers Should Know
      </h3>

      <p className='my-4'>
        In Ethiopian coffee trade, "new crop" means coffee harvested in the current season (the most recent October-February harvest). "Past crop" refers to coffee from the previous season that remains in warehouse. The distinction matters for quality, pricing, and your purchasing strategy.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-2 text-green-800'>New Crop</h5>
          <ul className='text-sm space-y-1.5'>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' /> Brightest acidity and most complex aromatics</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' /> Moisture content typically 10.5-12% (ideal range)</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' /> Best cupping scores available</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' /> Higher demand and premium pricing</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' /> Available January through August (depending on region and process)</li>
          </ul>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold mb-2 text-gray-700'>Past Crop</h5>
          <ul className='text-sm space-y-1.5'>
            <li className='flex items-start gap-2'><HiOutlineClock className='text-gray-500 mt-0.5 flex-shrink-0' /> Acidity fades; cup becomes more muted over time</li>
            <li className='flex items-start gap-2'><HiOutlineClock className='text-gray-500 mt-0.5 flex-shrink-0' /> Moisture may drop below 10%, affecting roast development</li>
            <li className='flex items-start gap-2'><HiOutlineClock className='text-gray-500 mt-0.5 flex-shrink-0' /> Can still be suitable for blends and commercial use</li>
            <li className='flex items-start gap-2'><HiOutlineClock className='text-gray-500 mt-0.5 flex-shrink-0' /> Lower pricing (10-20% discount typical)</li>
            <li className='flex items-start gap-2'><HiOutlineClock className='text-gray-500 mt-0.5 flex-shrink-0' /> Available year-round (while stocks last)</li>
          </ul>
        </div>
      </div>

      <p className='my-4'>
        For specialty roasters, new crop is almost always the right choice. The cup quality difference is significant, particularly for single-origin offerings where brightness and complexity are selling points. For commercial blenders, well-stored past-crop Ethiopian coffee can fill supply gaps between harvest seasons at a meaningful cost savings. For more on how storage affects green coffee quality, see our <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 underline font-semibold'>green coffee shelf life and storage guide</Link>.
      </p>

      {/* FAQ SECTION */}
      <section className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
          <HiOutlineQuestionMarkCircle className='text-amber-600 flex-shrink-0' />
          Frequently Asked Questions
        </h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">When is Ethiopian coffee harvested?</h4>
            <p className="text-sm text-gray-600">The main harvest runs from October through February, with peak picking in November and December. Lower-altitude western regions (Jimma, Limu) start earliest (October), while high-altitude southern regions (Guji, parts of Yirgacheffe) extend into January and February.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">When does new-crop Ethiopian coffee ship?</h4>
            <p className="text-sm text-gray-600">The earliest washed lots ship from Djibouti in December or January (Limu, Jimma). Peak export volume for washed coffees is February through April. Natural-processed coffees follow 6-8 weeks later, with peak shipments from March through June.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How long does Ethiopian coffee take to arrive at my port?</h4>
            <p className="text-sm text-gray-600">Transit from Djibouti to Northern Europe is 15-20 days; to the US East Coast, 25-35 days; to the US West Coast, 30-40 days; to East Asia, 20-30 days. Add 1-2 weeks for customs clearance and inland delivery after arrival at the destination port.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">When is the best time to buy Ethiopian green coffee?</h4>
            <p className="text-sm text-gray-600">January through March is the most competitive buying window. New-crop supply is increasing, exporters are actively selling, and the widest selection of fresh lots is available. Locking forward contracts during this period typically captures the best pricing and lot selection.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Does Ethiopia have one or two coffee harvests per year?</h4>
            <p className="text-sm text-gray-600">Ethiopia has one main harvest per year, running from October through February. However, the wide altitude range across growing regions staggers the picking season so that fresh supply enters the export pipeline over approximately five months rather than all at once.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">When is Yirgacheffe coffee in season?</h4>
            <p className="text-sm text-gray-600">Yirgacheffe is harvested from October through January. Washed Yirgacheffe is typically export-ready from January through April. Natural Yirgacheffe, which requires longer drying time, ships from March through May. For fresh new-crop Yirgacheffe in your warehouse, plan for arrivals between February and June depending on your location.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What is the difference between new crop and past crop Ethiopian coffee?</h4>
            <p className="text-sm text-gray-600">New crop is coffee from the most recent harvest season (October-February). It has the brightest acidity, most complex aromatics, and ideal moisture content (10.5-12%). Past crop is from the previous season and has faded cup characteristics, lower moisture, and typically sells at a 10-20% discount. Specialty buyers should prioritize new crop; commercial blenders may find value in well-stored past crop.</p>
          </div>
        </div>
      </section>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Plan Your Ethiopian Coffee Purchases with Confidence</h4>
        <p className='my-2'>
          As your <span className='font-bold'>Ethiopian coffee exporter</span>, <span className='font-bold'>Ethio Coffee Import and Export PLC</span> provides harvest updates, pre-shipment samples, and flexible contract terms across all six major Ethiopian coffee regions. From sourcing a single container to building a year-round supply program, we help you align your buying calendar with the freshest available lots.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Current Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Request Samples</Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>How to Order</Link>
        </div>
      </div>

      {/* RELATED ARTICLES */}
      <div className='my-8 p-6 bg-gray-50 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-6'>
          <div>
            <h5 className='font-semibold mb-2 text-sm'>Origins &amp; Quality</h5>
            <ul className='space-y-1.5 text-sm'>
              <li><Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Guide to Ethiopian Coffee Origins</Link></li>
              <li><Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Yirgacheffe vs Sidamo vs Guji</Link></li>
              <li><Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Washed vs Natural Processing</Link></li>
              <li><Link href='/insights/ethiopian-coffee-harvest-2025-season-outlook' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> 2025 Harvest Season Outlook</Link></li>
            </ul>
          </div>
          <div>
            <h5 className='font-semibold mb-2 text-sm'>Pricing &amp; Sourcing</h5>
            <ul className='space-y-1.5 text-sm'>
              <li><Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Ethiopian Coffee FOB Pricing Guide</Link></li>
              <li><Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Contracts &amp; Payment Terms</Link></li>
            </ul>
          </div>
          <div>
            <h5 className='font-semibold mb-2 text-sm'>Logistics &amp; Storage</h5>
            <ul className='space-y-1.5 text-sm'>
              <li><Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Coffee Storage &amp; Freight Logistics</Link></li>
              <li><Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Green Coffee Shelf Life &amp; Storage</Link></li>
            </ul>
          </div>
          <div>
            <h5 className='font-semibold mb-2 text-sm'>Market &amp; Trends</h5>
            <ul className='space-y-1.5 text-sm'>
              <li><Link href='/insights/rising-ethiopian-coffee-prices-explained' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Rising Ethiopian Coffee Prices Explained</Link></li>
              <li><Link href='/insights/ethiopian-coffee-climate-change-impact' className='text-amber-700 hover:underline inline-flex items-center gap-1'><ArrowRight className='inline-block h-3.5 w-3.5 flex-shrink-0' /> Climate Change Impact on Ethiopian Coffee</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> This Ethiopian coffee harvest calendar and seasonal buying guide is published by Ethio Coffee Import and Export PLC. Harvest timing, shipping schedules, and pricing patterns can shift year to year based on weather, logistics, and market conditions. Contact us for current-season information.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { HiOutlineBeaker, HiOutlineSun, HiOutlineScale, HiOutlineGlobeAlt, HiOutlineCurrencyDollar, HiOutlineArchiveBox, HiOutlineShieldCheck, HiOutlineFire, HiOutlineBriefcase, HiOutlineSparkles, HiOutlineQuestionMarkCircle, HiOutlineClipboardDocumentList, HiOutlineLightBulb } from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function WashedVsNaturalEthiopianCoffeeProcessing({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        How processing method shapes cup profile, pricing, and sourcing decisions for importers and roasters
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          The processing method is one of the biggest factors determining how Ethiopian coffee tastes in the cup and how it performs across your supply chain.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Washed and natural processed Ethiopian green coffee beans side by side showing color and texture differences'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />
          Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Washed Ethiopian coffees deliver clean, bright, floral cups that highlight terroir, while naturals offer heavy fruit, berry sweetness, and full body. But for buyers the differences go beyond flavor: processing method affects FOB pricing, green coffee shelf life, defect risk, lot consistency, and inventory planning. Understanding both methods helps importers and roasters make better sourcing decisions and build a balanced Ethiopian coffee program.
        </p>
      </div>

      {/* Table of Contents */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#washed-processing' className='text-amber-700 hover:underline'>1. What Is Washed (Wet) Processing?</a></li>
          <li><a href='#natural-processing' className='text-amber-700 hover:underline'>2. What Is Natural (Dry) Processing?</a></li>
          <li><a href='#side-by-side' className='text-amber-700 hover:underline'>3. Side-by-Side Comparison</a></li>
          <li><a href='#regional-processing' className='text-amber-700 hover:underline'>4. How Processing Varies by Ethiopian Region</a></li>
          <li><a href='#pricing' className='text-amber-700 hover:underline'>5. Pricing and Cost Implications for Buyers</a></li>
          <li><a href='#shelf-life' className='text-amber-700 hover:underline'>6. Green Coffee Shelf Life and Storage</a></li>
          <li><a href='#quality-control' className='text-amber-700 hover:underline'>7. Quality Control and Defect Risk</a></li>
          <li><a href='#roasting' className='text-amber-700 hover:underline'>8. Roasting Washed vs Natural Ethiopian Coffee</a></li>
          <li><a href='#stocking' className='text-amber-700 hover:underline'>9. Which Should You Stock?</a></li>
          <li><a href='#honey-anaerobic' className='text-amber-700 hover:underline'>10. Beyond Washed and Natural: Honey and Anaerobic</a></li>
          <li><a href='#faq-processing' className='text-amber-700 hover:underline'>11. FAQ</a></li>
        </ol>
      </div>

      <p className='my-4'>
        When you&apos;re buying Ethiopian green coffee, one of the most important decisions isn&apos;t the region &mdash; it&apos;s the processing method. Washed and natural processed coffees from the same washing station can taste dramatically different, and the choice between them affects your entire downstream operation: roast profile development, customer positioning, inventory management, and margin structure.
      </p>

      <p className='my-4'>
        This guide compares washed vs natural Ethiopian coffee processing from a buyer&apos;s perspective: flavor differences, pricing, shelf life, defect risk, and a framework for building a balanced sourcing program. For a broader look at every stage from cherry intake to export-ready green bean, see our <Link href='/insights/coffee-is-processing-drying-milling' className='text-amber-700 hover:underline font-bold'>complete guide to coffee processing, drying, and milling</Link>.
      </p>

      {/* SECTION 1: WASHED PROCESSING */}
      <h2 id='washed-processing' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineBeaker className='text-amber-600' />
        1. What Is Washed (Wet) Processing?
      </h2>
      <p className='my-4'>
        In washed processing, the coffee cherry&apos;s fruit is removed from the seed immediately after harvesting. The beans are pulped, fermented in water tanks for 12&ndash;72 hours to break down the remaining mucilage, washed clean, and dried on raised beds for 10&ndash;15 days. The result is a clean bean where flavor comes primarily from the seed itself rather than the fruit.
      </p>
      <p className='my-4'>
        For a detailed look at how these facilities operate and what to evaluate on site, see our <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='text-amber-700 hover:underline font-bold'>guide to Ethiopian coffee washing stations</Link>.
      </p>
      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-2'>Washed Ethiopian Coffee Characteristics</h4>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'><span className='font-bold'>Flavor:</span> Clean, bright, with pronounced acidity</li>
          <li className='my-2'><span className='font-bold'>Aromatics:</span> Floral, citrus, jasmine, tea-like</li>
          <li className='my-2'><span className='font-bold'>Body:</span> Light to medium, silky</li>
          <li className='my-2'><span className='font-bold'>Finish:</span> Crisp, transparent, lingering floral</li>
          <li className='my-2'><span className='font-bold'>Best regions:</span> <Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline'>Yirgacheffe</Link>, <Link href='/ethiopian-coffee-limu' className='text-amber-700 hover:underline'>Limu</Link> (though washed lots exist across all origins). See our <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline font-bold'>Yirgacheffe vs Sidamo vs Guji comparison</Link> for a detailed origin breakdown</li>
        </ul>
      </div>
      <p className='my-4'>
        <span className='font-bold'>Why roasters value it:</span> Washed processing creates consistency and clarity. You taste the terroir &mdash; altitude, soil, variety &mdash; more directly because the fruit isn&apos;t masking the bean&apos;s inherent character. This makes washed lots easier to roast repeatably and blend predictably.
      </p>

      {/* SECTION 2: NATURAL PROCESSING */}
      <h2 id='natural-processing' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineSun className='text-amber-600' />
        2. What Is Natural (Dry) Processing?
      </h2>
      <p className='my-4'>
        Natural processing is the oldest coffee processing method and it&apos;s still widely used across Ethiopia. The whole cherry is dried on raised beds or patios with the fruit still attached to the bean for 15&ndash;30 days. As it dries, the fruit sugars ferment and infuse into the seed, creating the intense fruit flavors that natural Ethiopian coffees are famous for.
      </p>
      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-2'>Natural Ethiopian Coffee Characteristics</h4>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'><span className='font-bold'>Flavor:</span> Fruit-forward, jammy, complex</li>
          <li className='my-2'><span className='font-bold'>Aromatics:</span> Blueberry, strawberry wine, tropical fruit</li>
          <li className='my-2'><span className='font-bold'>Body:</span> Medium to full, syrupy</li>
          <li className='my-2'><span className='font-bold'>Finish:</span> Long, sweet, sometimes boozy or wine-like</li>
          <li className='my-2'><span className='font-bold'>Best regions:</span> <Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline'>Sidamo</Link>, <Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline'>Guji</Link>, <Link href='/ethiopian-coffee-harar' className='text-amber-700 hover:underline'>Harar</Link></li>
        </ul>
      </div>
      <p className='my-4'>
        <span className='font-bold'>Why roasters value it:</span> Natural processing creates bold, memorable cups. A well-processed natural Ethiopian can taste like blueberry jam, strawberry wine, or tropical fruit &mdash; flavors that wow customers and differentiate your menu. Many roasters use naturals as their flagship single-origin offering. For a stage-by-stage look at how quality is managed during the natural drying process and a buyer&apos;s QC checklist, see our <Link href='/insights/ethiopian-dry-coffee-production-quality-control' className='text-amber-700 hover:underline font-bold'>Ethiopian natural coffee QC guide</Link>.
      </p>

      {/* SECTION 3: SIDE-BY-SIDE COMPARISON */}
      <h2 id='side-by-side' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineScale className='text-amber-600' />
        3. Side-by-Side Comparison
      </h2>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse border border-gray-300 font-inconsolata text-sm'>
          <thead className='bg-dark text-primary'>
            <tr>
              <th className='border border-gray-300 p-3 text-left'>Factor</th>
              <th className='border border-gray-300 p-3 text-left'>Washed</th>
              <th className='border border-gray-300 p-3 text-left'>Natural</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Acidity</td>
              <td className='border border-gray-300 p-3'>Bright, citric, sparkling</td>
              <td className='border border-gray-300 p-3'>Softer, fruity, wine-like</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Body</td>
              <td className='border border-gray-300 p-3'>Light to medium, tea-like</td>
              <td className='border border-gray-300 p-3'>Full, syrupy, round</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Sweetness</td>
              <td className='border border-gray-300 p-3'>Honey, floral sugar</td>
              <td className='border border-gray-300 p-3'>Jam, dried fruit, brown sugar</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Consistency</td>
              <td className='border border-gray-300 p-3'>More consistent lot-to-lot</td>
              <td className='border border-gray-300 p-3'>Can vary more (quality dependent)</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Defect Risk</td>
              <td className='border border-gray-300 p-3'>Lower (water removes defects early)</td>
              <td className='border border-gray-300 p-3'>Higher (over-fermentation, mold if poorly dried)</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Shelf Life (optimal)</td>
              <td className='border border-gray-300 p-3'>9&ndash;12 months</td>
              <td className='border border-gray-300 p-3'>12&ndash;18 months</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>FOB Price</td>
              <td className='border border-gray-300 p-3'>Small premium at same grade</td>
              <td className='border border-gray-300 p-3'>Slightly lower at same grade</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Water Usage</td>
              <td className='border border-gray-300 p-3'>High (fermentation tanks, washing channels)</td>
              <td className='border border-gray-300 p-3'>Minimal (sun-drying only)</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Best Brew Method</td>
              <td className='border border-gray-300 p-3'>Pour-over, filter, Chemex</td>
              <td className='border border-gray-300 p-3'>Espresso, immersion, cold brew</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Roast Approach</td>
              <td className='border border-gray-300 p-3'>Light (preserve clarity)</td>
              <td className='border border-gray-300 p-3'>Light-medium (balance fruit and body)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 4: REGIONAL PROCESSING */}
      <h2 id='regional-processing' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineGlobeAlt className='text-amber-600' />
        4. How Processing Varies by Ethiopian Region
      </h2>
      <p className='my-4'>
        Processing method is not evenly distributed across Ethiopia&apos;s growing regions. Geography, water access, infrastructure, and market tradition determine which method dominates in each zone. Understanding these patterns helps buyers target the right origins for their processing preference.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse border border-gray-300 font-inconsolata text-sm'>
          <thead className='bg-dark text-primary'>
            <tr>
              <th className='border border-gray-300 p-3 text-left'>Region</th>
              <th className='border border-gray-300 p-3 text-left'>Dominant Process</th>
              <th className='border border-gray-300 p-3 text-left'>Why</th>
              <th className='border border-gray-300 p-3 text-left'>Typical Cup Profile</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'><Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline'>Yirgacheffe</Link></td>
              <td className='border border-gray-300 p-3'>Predominantly washed</td>
              <td className='border border-gray-300 p-3'>Dense washing station network, high altitude water access</td>
              <td className='border border-gray-300 p-3'>Jasmine, lemon, bergamot (washed); blueberry, tropical (natural)</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'><Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline'>Guji</Link></td>
              <td className='border border-gray-300 p-3'>Both (growing natural share)</td>
              <td className='border border-gray-300 p-3'>Newer infrastructure, producers experimenting with both</td>
              <td className='border border-gray-300 p-3'>Peach, floral (washed); strawberry, wine (natural)</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'><Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline'>Sidamo</Link></td>
              <td className='border border-gray-300 p-3'>Both (balanced)</td>
              <td className='border border-gray-300 p-3'>Broad zone with varied infrastructure</td>
              <td className='border border-gray-300 p-3'>Citrus, stone fruit (washed); berry, chocolate (natural)</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'><Link href='/ethiopian-coffee-harar' className='text-amber-700 hover:underline'>Harar</Link></td>
              <td className='border border-gray-300 p-3'>Almost exclusively natural</td>
              <td className='border border-gray-300 p-3'>Dry climate, limited water access, centuries-old tradition</td>
              <td className='border border-gray-300 p-3'>Blueberry, dark chocolate, leather, wine</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'><Link href='/ethiopian-coffee-limu' className='text-amber-700 hover:underline'>Limu</Link></td>
              <td className='border border-gray-300 p-3'>Predominantly washed</td>
              <td className='border border-gray-300 p-3'>Well-established washing stations, rainfall supports wet processing</td>
              <td className='border border-gray-300 p-3'>Honey, spice, medium acidity (washed)</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'><Link href='/ethiopian-coffee-jimma' className='text-amber-700 hover:underline'>Jimma</Link></td>
              <td className='border border-gray-300 p-3'>Mostly natural / commercial</td>
              <td className='border border-gray-300 p-3'>High-volume production, commodity-oriented</td>
              <td className='border border-gray-300 p-3'>Earthy, full body, low acidity (natural)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        For a comprehensive look at each origin&apos;s characteristics, altitude, and sourcing considerations, see our <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline font-bold'>complete guide to Ethiopian coffee origins</Link>.
      </p>

      {/* SECTION 5: PRICING */}
      <h2 id='pricing' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineCurrencyDollar className='text-amber-600' />
        5. Pricing and Cost Implications for Buyers
      </h2>
      <p className='my-4'>
        Processing method influences pricing at every stage of the supply chain. Buyers who understand the cost structure behind each method can negotiate more effectively and set realistic margin expectations.
      </p>
      <h3 className='text-2xl font-bold mt-6 mb-3'>Why Washed Coffee Costs More at Station Level</h3>
      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Infrastructure:</span> Washing stations require pulping machines, fermentation tanks, washing channels, and water treatment systems</li>
        <li><span className='font-bold'>Water consumption:</span> A single kilogram of washed parchment coffee requires 40&ndash;50 liters of water</li>
        <li><span className='font-bold'>Labor:</span> Sorting, pulping, monitoring fermentation, and managing water flow add processing labor</li>
        <li><span className='font-bold'>Speed:</span> Washed processing takes 10&ndash;15 days from cherry to dry parchment; naturals need 15&ndash;30 days of drying time but less active labor</li>
      </ul>
      <h3 className='text-2xl font-bold mt-6 mb-3'>FOB Price Dynamics</h3>
      <p className='my-4'>
        At the same ECX grade, washed Ethiopian coffees typically command a small FOB premium over naturals &mdash; reflecting the higher station-level processing cost and the consistency buyers expect. However, exceptional natural lots (particularly Grade 1 naturals from Guji or Sidamo) can match or exceed washed pricing when cupping scores are high. For current pricing structures, see our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee FOB pricing guide</Link>.
      </p>

      {/* SECTION 6: SHELF LIFE */}
      <h2 id='shelf-life' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineArchiveBox className='text-amber-600' />
        6. Green Coffee Shelf Life and Storage
      </h2>
      <p className='my-4'>
        Processing method directly affects how long green coffee maintains its character in storage &mdash; a critical factor for importers managing inventory and roasters planning their seasonal menu.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse border border-gray-300 font-inconsolata text-sm'>
          <thead className='bg-dark text-primary'>
            <tr>
              <th className='border border-gray-300 p-3 text-left'>Factor</th>
              <th className='border border-gray-300 p-3 text-left'>Washed</th>
              <th className='border border-gray-300 p-3 text-left'>Natural</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Optimal window</td>
              <td className='border border-gray-300 p-3'>9&ndash;12 months from export</td>
              <td className='border border-gray-300 p-3'>12&ndash;18 months from export</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>What fades first</td>
              <td className='border border-gray-300 p-3'>Florals and high-note acidity</td>
              <td className='border border-gray-300 p-3'>Fruit intensity (body and sweetness hold longer)</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Storage sensitivity</td>
              <td className='border border-gray-300 p-3'>More sensitive to humidity and temperature</td>
              <td className='border border-gray-300 p-3'>More forgiving in stable conditions</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Import planning</td>
              <td className='border border-gray-300 p-3'>Order closer to need; smaller, more frequent shipments</td>
              <td className='border border-gray-300 p-3'>Can stock deeper; holds through longer inventory cycles</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        For importers managing warehouse inventory, naturals offer more flexibility. Roasters who cycle through Ethiopian coffee quickly may find washed lots perfectly viable, but those holding stock for six months or longer should factor in the faster fade rate of washed aromatics.
      </p>

      {/* SECTION 7: QUALITY CONTROL */}
      <h2 id='quality-control' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineShieldCheck className='text-amber-600' />
        7. Quality Control and Defect Risk
      </h2>
      <p className='my-4'>
        Each processing method carries different quality risks. Knowing what to look for during sample evaluation helps buyers avoid costly quality issues after arrival.
      </p>
      <div className='grid md:grid-cols-2 gap-6 my-6'>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-3'>Washed &mdash; Common Defects</h4>
          <ul className='font-inconsolata list-disc ml-5 space-y-1 text-sm'>
            <li><span className='font-bold'>Under-fermented:</span> Slimy, sour off-flavors from insufficient tank time</li>
            <li><span className='font-bold'>Over-fermented:</span> Oniony, vinegar notes from excessive fermentation</li>
            <li><span className='font-bold'>Stinker beans:</span> Internal defects from contaminated water or poor tank hygiene</li>
            <li><span className='font-bold'>Faded cup:</span> Loss of florals from over-drying or slow drying</li>
          </ul>
        </div>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-3'>Natural &mdash; Common Defects</h4>
          <ul className='font-inconsolata list-disc ml-5 space-y-1 text-sm'>
            <li><span className='font-bold'>Over-fermented fruit:</span> Boozy, composty off-notes from uncontrolled fermentation</li>
            <li><span className='font-bold'>Mold:</span> From insufficient cherry turning or drying in humid conditions</li>
            <li><span className='font-bold'>Inconsistent drying:</span> Uneven moisture creates mixed cup quality within a lot</li>
            <li><span className='font-bold'>Phenolic / medicinal:</span> Harsh chemical flavors from poor cherry selection</li>
          </ul>
        </div>
      </div>
      <p className='my-4'>
        Natural processing carries inherently more defect risk because the fruit remains on the bean throughout drying. This is why pre-shipment sample evaluation is essential for natural lots. For a deeper look at defect identification and grading criteria, see our <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline font-bold'>green coffee defects and buyer quality control guide</Link>.
      </p>

      {/* SECTION 8: ROASTING */}
      <h2 id='roasting' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineFire className='text-amber-600' />
        8. Roasting Washed vs Natural Ethiopian Coffee
      </h2>
      <p className='my-4'>
        Processing method changes how coffee responds to heat. Washed and natural Ethiopian beans require different roasting approaches to bring out their best qualities. Our guide to <Link href='/insights/coffee-is-art-roasting-brewing' className='text-amber-700 hover:underline font-bold'>coffee roasting and brewing</Link> explains the underlying science.
      </p>
      <div className='grid md:grid-cols-2 gap-6 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-3'>Roasting Washed Ethiopian</h4>
          <ul className='font-inconsolata list-disc ml-5 space-y-1 text-sm'>
            <li><span className='font-bold'>Target roast:</span> Light (City to City+)</li>
            <li><span className='font-bold'>First crack:</span> End development 30&ndash;60 seconds after first crack</li>
            <li><span className='font-bold'>Charge temp:</span> Lower to preserve delicate florals</li>
            <li><span className='font-bold'>Avoid:</span> Going too dark kills florals and turns citrus into generic &quot;coffee&quot; flavor</li>
            <li><span className='font-bold'>Pro tip:</span> Gentle heat application throughout preserves aromatics</li>
          </ul>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-3'>Roasting Natural Ethiopian</h4>
          <ul className='font-inconsolata list-disc ml-5 space-y-1 text-sm'>
            <li><span className='font-bold'>Target roast:</span> Light-medium (City to Full City&minus;)</li>
            <li><span className='font-bold'>First crack:</span> Can extend development 60&ndash;90 seconds post-crack</li>
            <li><span className='font-bold'>Airflow:</span> Higher to prevent sugar scorching and carbonization</li>
            <li><span className='font-bold'>Avoid:</span> Under-developing creates sour, green notes; over-roasting burns fruit character</li>
            <li><span className='font-bold'>Pro tip:</span> Naturals have more sugar from dried fruit &mdash; monitor caramelization carefully</li>
          </ul>
        </div>
      </div>
      <p className='my-4'>
        For detailed temperature ranges, rate-of-rise guidance, and development time ratios, see our complete <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='text-amber-700 hover:underline font-bold'>guide to roasting Ethiopian coffee beans</Link>.
      </p>

      {/* SECTION 9: STOCKING FRAMEWORK */}
      <h2 id='stocking' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineBriefcase className='text-amber-600' />
        9. Which Should You Stock? A Buyer&apos;s Framework
      </h2>
      <p className='my-4'>
        Most successful specialty roasteries carry both washed and natural Ethiopian coffees. Here&apos;s a framework for positioning each in your program:
      </p>
      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <ul className='font-inconsolata list-disc ml-5 space-y-3'>
          <li><span className='font-bold'>Washed Ethiopian:</span> Your accessible, everyday specialty option. Ideal for customers new to Ethiopian coffee, pour-over bars, and subscription programs where consistency matters. Position as your &quot;light and bright&quot; single origin.</li>
          <li><span className='font-bold'>Natural Ethiopian:</span> Your &quot;wow factor&quot; offering. Use for limited releases, seasonal features, and customers who want something bold and memorable. Position as your &quot;fruit bomb&quot; or &quot;adventure&quot; option.</li>
          <li><span className='font-bold'>Both in rotation:</span> Carrying one washed and one natural from different regions creates a natural comparison flight that educates customers and increases per-visit spend.</li>
        </ul>
      </div>
      <h3 className='text-2xl font-bold mt-6 mb-3'>Seasonal Buying Considerations</h3>
      <p className='my-4'>
        Ethiopia&apos;s main harvest runs October through January. Washed coffees from the current crop start arriving at destination ports three to five months after harvest, while naturals arrive slightly later due to longer drying times. Plan your seasonal menu around these windows, and consider holding a natural lot for the gap months when washed quality begins to fade. For timing details, see our <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline font-bold'>guide to sourcing green coffee from Ethiopia</Link>.
      </p>

      {/* SECTION 10: HONEY AND ANAEROBIC */}
      <h2 id='honey-anaerobic' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineSparkles className='text-amber-600' />
        10. Beyond Washed and Natural: Honey and Anaerobic
      </h2>
      <p className='my-4'>
        While less common in Ethiopia than in Central America, honey processed coffees &mdash; where some mucilage is left on the bean during drying &mdash; do exist. They fall somewhere between washed and natural: more body than washed but more clarity than natural. It&apos;s a category worth exploring for buyers seeking a middle ground.
      </p>
      <p className='my-4'>
        A third processing category is growing in importance: <Link href='/insights/anaerobic-ethiopian-coffee-processing-buyers-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian anaerobic coffee processing</Link>. Sealed-tank fermentation, carbonic maceration, and extended fermentation are now practiced at private washing stations in Yirgacheffe, Guji, and Sidamo. These methods produce cups with intense tropical fruit characteristics that go beyond what traditional washed or natural processing achieves. If you source specialty Ethiopian coffee for a premium single-origin program, anaerobic and honey process lots deserve serious evaluation alongside your standard washed and natural lineup.
      </p>

      {/* FAQ SECTION */}
      <section id='faq-processing' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200 mt-10'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2'>
          <HiOutlineQuestionMarkCircle className='text-amber-600 flex-shrink-0' />
          Frequently Asked Questions
        </h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How does processing affect Ethiopian coffee acidity?</h4>
            <p className='text-sm text-gray-600'>Washed processing preserves and highlights acidity by removing the fruit before drying, producing bright, citric, sparkling cups. Natural processing softens acidity because fruit sugars ferment into the bean during drying, creating a rounder, wine-like acidity rather than the crisp brightness of washed lots.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Is washed or natural Ethiopian coffee better for espresso blends?</h4>
            <p className='text-sm text-gray-600'>Natural Ethiopian coffees generally work better in espresso blends because their heavier body, sweetness, and fruit intensity translate well under pressure extraction. Washed Ethiopian can excel as a single-origin espresso for customers who appreciate bright, floral shots, but it may get lost in a blend with bolder components.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Are there sustainability differences between washed and natural processing?</h4>
            <p className='text-sm text-gray-600'>Yes. Washed processing uses significantly more water (40&ndash;50 liters per kilogram of parchment) and generates wastewater that must be treated to prevent environmental contamination. Natural processing uses minimal water and has a smaller environmental footprint, though it requires more land area for drying beds and careful waste management of dried cherry husks.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How long does each processing type maintain freshness as green coffee?</h4>
            <p className='text-sm text-gray-600'>Washed Ethiopian green coffee is at its best within 9&ndash;12 months of export, with florals and high-note acidity fading first. Natural Ethiopian coffee holds character for 12&ndash;18 months, with body and sweetness persisting even as fruit intensity gradually softens. Proper storage at stable temperature and humidity extends both windows.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What other processing methods are used in Ethiopia besides washed and natural?</h4>
            <p className='text-sm text-gray-600'>Honey processing (partial mucilage removal) exists at some Ethiopian stations, though it&apos;s far less common than in Central America. Anaerobic processing &mdash; including sealed-tank fermentation and carbonic maceration &mdash; is growing rapidly at private washing stations in Yirgacheffe, Guji, and Sidamo, producing intensely fruity cups that command premium pricing.</p>
          </div>
        </div>
      </section>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Both Washed and Natural Ethiopian Coffee</h4>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Import and Export PLC</span> ships washed and natural processed specialty coffees from Ethiopia&apos;s top growing regions. With three decades of heritage sourcing relationships, we provide traceable lots from Yirgacheffe, Guji, Sidamo, Harar, Limu, and Jimma with pre-shipment samples, cupping scores, and complete export documentation.
        </p>
        <p className='my-2'>
          Request samples of both processing types to taste the difference and find the right fit for your roasting program and customer base.
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
            <h4 className='font-semibold mb-2 text-sm'>Origins &amp; Processing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Coffee Origins</Link></li>
              <li>&bull; <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji</Link></li>
              <li>&bull; <Link href='/insights/coffee-is-processing-drying-milling' className='text-amber-700 hover:underline'>Coffee Processing, Drying, and Milling</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Ethiopian Heirloom Coffee Varieties</Link></li>
              <li>&bull; <Link href='/insights/anaerobic-ethiopian-coffee-processing-buyers-guide' className='text-amber-700 hover:underline'>Anaerobic Ethiopian Coffee Processing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality &amp; Cupping</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup Ethiopian Coffee Samples</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Defects: Buyer&apos;s Guide to Quality Control</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Washing Stations Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Roasting &amp; Brewing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='text-amber-700 hover:underline'>Roasting Ethiopian Coffee Beans</Link></li>
              <li>&bull; <Link href='/insights/coffee-is-art-roasting-brewing' className='text-amber-700 hover:underline'>Coffee Roasting and Brewing Science</Link></li>
              <li>&bull; <Link href='/insights/decaf-green-coffee-processing-sourcing-guide' className='text-amber-700 hover:underline'>Decaf Green Coffee Processing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-vs-colombian-coffee' className='text-amber-700 hover:underline'>Ethiopian vs Colombian Coffee</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC. This guide compares washed and natural Ethiopian coffee processing methods for importers and roasters, covering flavor profiles, pricing, shelf life, defect risk, regional processing patterns, roasting approaches, and sourcing strategy. Processing conditions vary by season and station; <Link href='/contact-us' className='underline'>contact us</Link> for current availability and pre-shipment samples.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot; <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> &middot; <Link href='/about' className='underline'>About Ethio Coffee</Link> &middot; <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  );
}

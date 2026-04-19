import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineBeaker,
  HiOutlineChartBar,
  HiOutlineMapPin,
  HiOutlineCog6Tooth,
  HiOutlineScale,
  HiOutlineBolt,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiOutlineArrowPath,
  HiOutlineQuestionMarkCircle,
} from 'react-icons/hi2'

type InsightContentProps = { title: string; date: string; large_image_url: string }

export default function EthiopianCoffeeColdBrewRtdSourcingGuide({
  title,
  date,
  large_image_url,
}: InsightContentProps) {
  return (
    <>
      {/* H1 + H2 */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        Ethiopian Coffee for Cold Brew &amp; RTD: Sourcing Guide
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        How to Source Ethiopian Green Coffee Optimized for Cold Brew Concentrate, Nitro, and Ready-to-Drink Production
      </h2>

      {/* Hero image */}
      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md bg-gray-200 flex items-center justify-center'>
          {/* TODO: Replace placeholder with actual hero image */}
          {/* Expected path: /images/insights/ethiopian-coffee-cold-brew-rtd-sourcing-guide.webp */}
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian green coffee beans for cold brew and RTD production'
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
        <span className='ml-2'>Cold Brew &amp; RTD / Sourcing Guide / Green Coffee Buying / Importer Resources</span>
      </div>

      {/* Key Takeaway box */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Ethiopian natural-processed coffees deliver the fruit-forward, full-bodied flavor profile that cold brew and RTD consumers prefer, and they hold up better through pasteurization and extended shelf life than washed lots. Grade 2 and Grade 3 naturals from Guji, Sidamo, and Jimma offer the best extraction yield per dollar for production-scale cold brew, while Grade 1 Yirgacheffe or Guji naturals create the single-origin premium positioning that commands $4.50+ per can at retail.
        </p>
      </div>

      {/* Table of Contents */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#why-ethiopian' className='text-amber-700 hover:underline'>1. Why Ethiopian Coffee Excels in Cold Brew</a></li>
          <li><a href='#rtd-market' className='text-amber-700 hover:underline'>2. The RTD Cold Brew Market Opportunity</a></li>
          <li><a href='#best-origins' className='text-amber-700 hover:underline'>3. Which Ethiopian Origins Work Best for Cold Brew</a></li>
          <li><a href='#processing-impact' className='text-amber-700 hover:underline'>4. Processing Method Impact on Cold Brew Shelf Stability</a></li>
          <li><a href='#grade-selection' className='text-amber-700 hover:underline'>5. Grade Selection for Cold Brew Production</a></li>
          <li><a href='#extraction-at-scale' className='text-amber-700 hover:underline'>6. Extraction at Scale: Production Parameters</a></li>
          <li><a href='#shelf-stable' className='text-amber-700 hover:underline'>7. Formulating Shelf-Stable Ethiopian Cold Brew</a></li>
          <li><a href='#buyer-persona' className='text-amber-700 hover:underline'>8. Building an Ethiopian Cold Brew Product Line</a></li>
          <li><a href='#sourcing-workflow' className='text-amber-700 hover:underline'>9. Sourcing Workflow: Sample to Container</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>10. FAQ</a></li>
        </ol>
      </div>

      {/* Introduction */}
      <p className='text-lg leading-relaxed my-4'>
        Ethiopian coffee for cold brew offers something most origins cannot: a flavor profile that stays vibrant after 16+ hours of cold extraction. Where many single-origin coffees taste flat or overly acidic in cold brew, Ethiopian naturals deliver the berry, chocolate, and tropical fruit notes that RTD consumers pay a premium for. For importers, roasters, and beverage brands sourcing green coffee for cold brew concentrate or ready-to-drink production, Ethiopia is one of the strongest origin choices available.
      </p>
      <p className='my-4'>
        This guide covers the sourcing side: which Ethiopian origins, processing methods, and grades produce the best cold brew results at production scale, and how to evaluate, order, and formulate with Ethiopian green coffee for shelf-stable RTD products. For general cold brew ratios and cafe-scale recipes, see our <Link href='/insights/best-coffee-guide-french-press-pour-over-scales' className='text-amber-700 hover:underline'>brew profiles guide</Link>.
      </p>

      {/* Section 1: Why Ethiopian Coffee Excels */}
      <h3 id='why-ethiopian' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        1. Why Ethiopian Coffee Excels in Cold Brew
      </h3>
      <p className='my-4'>
        Cold extraction pulls different compounds from coffee than hot water does. At low temperatures (2 to 8°C), fewer bitter chlorogenic acids dissolve, but oils, sugars, and volatile aromatics transfer slowly into the concentrate. This extraction profile favors coffees with high inherent sweetness and complex fruit character, exactly what Ethiopian heirloom varieties produce.
      </p>
      <p className='my-4'>
        Three characteristics make Ethiopian green coffee particularly effective for cold brew production:
      </p>
      <div className='grid md:grid-cols-3 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Fruit-Forward Flavor Survival</h4>
          <p className='text-sm text-gray-700'>Natural-processed Ethiopian coffees carry intense berry and stone fruit compounds (esters and aldehydes) that survive cold extraction and remain perceptible even after dilution to RTD strength. Brazilian and Colombian naturals lose much of their fruit character at the same dilution ratios.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Balanced Acidity at Low Temperature</h4>
          <p className='text-sm text-gray-700'>Cold extraction reduces perceived acidity by 60 to 70% compared to hot brewing. Ethiopian washed coffees, which can taste sharp in hot espresso, become smooth and tea-like in cold brew. This makes even high-acid Yirgacheffe lots drinkable without sweeteners in RTD format.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Body and Mouthfeel in Concentrate</h4>
          <p className='text-sm text-gray-700'>Ethiopian coffees grown at 1,700 to 2,300 meters develop dense, complex cell structures. These dense beans yield higher total dissolved solids (TDS) per gram during extended steeping, producing a richer concentrate that holds body even when diluted 1:2 for RTD canning.</p>
        </div>
      </div>

      {/* Section 2: RTD Market Opportunity */}
      <h3 id='rtd-market' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineChartBar className='w-8 h-8 text-amber-600' />
        2. The RTD Cold Brew Market Opportunity
      </h3>
      <p className='my-4'>
        The global RTD coffee market reached approximately $36 billion in 2025 and is projected to exceed $53 billion by 2030, according to research from Mordor Intelligence and Grand View Research. Cold brew is the fastest-growing segment within RTD, driven by consumer demand for clean-label, low-sugar, single-origin beverages.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Market Signal</th>
              <th className='p-3 text-left font-bold'>Data Point</th>
              <th className='p-3 text-left font-bold'>Implication for Sourcing</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>RTD Coffee CAGR</td>
              <td className='p-3'>8.3% (2025 to 2030)</td>
              <td className='p-3'>Sustained volume growth creates multi-year sourcing contracts</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Single-Origin RTD Premium</td>
              <td className='p-3'>25 to 40% price premium over blended RTD</td>
              <td className='p-3'>Named-origin Ethiopian cold brew commands higher shelf price</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Cold Brew Share of RTD</td>
              <td className='p-3'>~18% of total RTD volume in North America</td>
              <td className='p-3'>Cold brew is no longer niche; it requires reliable origin supply</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Consumer Preference Shift</td>
              <td className='p-3'>62% of Gen Z/Millennial buyers check origin labels</td>
              <td className='p-3'>Ethiopia&#39;s brand recognition as a specialty origin adds retail value</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Nitro Cold Brew Growth</td>
              <td className='p-3'>Nitro segment growing at 12%+ CAGR</td>
              <td className='p-3'>Nitrogen infusion amplifies creamy mouthfeel of Ethiopian naturals</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        For beverage brands and roasters building cold brew programs, the sourcing decision starts at origin. Ethiopian green coffee checks the boxes that RTD consumers prioritize: a recognizable specialty origin, clean-label compatibility (no additives needed for flavor), and a story rooted in coffee&#39;s birthplace.
      </p>

      {/* Section 3: Best Origins */}
      <h3 id='best-origins' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMapPin className='w-8 h-8 text-amber-600' />
        3. Which Ethiopian Origins Work Best for Cold Brew
      </h3>
      <p className='my-4'>
        Not every Ethiopian origin performs equally in cold extraction. The decision depends on whether you are producing a premium single-origin RTD, a cold brew concentrate base, or a blended cold brew product. The matrix below maps Ethiopian origins to cold brew use cases based on production testing and buyer feedback.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Origin</th>
              <th className='p-3 text-left font-bold'>Best Process</th>
              <th className='p-3 text-left font-bold'>Cold Brew Character</th>
              <th className='p-3 text-left font-bold'>Best Use Case</th>
              <th className='p-3 text-left font-bold'>Cold Brew Score</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline'>Guji</Link></td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>Blueberry, dark chocolate, winey body</td>
              <td className='p-3'>Premium single-origin RTD, nitro</td>
              <td className='p-3'>★★★★★</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline'>Sidamo</Link></td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>Strawberry, caramel, medium body</td>
              <td className='p-3'>Concentrate base, flavored cold brew</td>
              <td className='p-3'>★★★★★</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline'>Yirgacheffe</Link></td>
              <td className='p-3'>Washed</td>
              <td className='p-3'>Jasmine, lemon, tea-like, clean finish</td>
              <td className='p-3'>Premium single-origin, sparkling cold brew</td>
              <td className='p-3'>★★★★☆</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-jimma' className='text-amber-700 hover:underline'>Jimma</Link></td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>Cocoa, dried fruit, heavy body</td>
              <td className='p-3'>Blended cold brew base, cost-effective</td>
              <td className='p-3'>★★★★☆</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-harar' className='text-amber-700 hover:underline'>Harar</Link></td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>Blueberry, wine, bold finish</td>
              <td className='p-3'>Signature/limited edition RTD</td>
              <td className='p-3'>★★★★☆</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-limu' className='text-amber-700 hover:underline'>Limu</Link></td>
              <td className='p-3'>Washed</td>
              <td className='p-3'>Citrus, spice, balanced acidity</td>
              <td className='p-3'>Blended cold brew, cold brew with milk</td>
              <td className='p-3'>★★★☆☆</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Buyer Insight: Naturals vs. Washed for Cold Brew</h4>
        <p className='text-sm text-gray-700'>For most cold brew applications, natural-processed Ethiopian coffees outperform washed lots. The extended cherry contact during natural drying develops fruity esters and higher sugar content that translate into the sweet, smooth flavor consumers associate with premium cold brew. Washed lots work best when you want a clean, tea-like cold brew (popular in Asian and Nordic markets) or as a blending component to add brightness to a natural base.</p>
      </div>

      {/* Section 4: Processing Impact */}
      <h3 id='processing-impact' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCog6Tooth className='w-8 h-8 text-amber-600' />
        4. Processing Method Impact on Cold Brew Shelf Stability
      </h3>
      <p className='my-4'>
        Processing method affects more than flavor in cold brew production. It directly impacts how the finished product performs during pasteurization, how long flavor holds in a sealed container, and how the concentrate behaves when diluted. For a detailed comparison of <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>washed vs. natural processing</Link>, see our dedicated guide. Here we focus specifically on cold brew and RTD implications.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Factor</th>
              <th className='p-3 text-left font-bold'>Natural Process</th>
              <th className='p-3 text-left font-bold'>Washed Process</th>
              <th className='p-3 text-left font-bold'>Anaerobic/Honey</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Flavor survival after pasteurization</td>
              <td className='p-3'>Strong: fruit esters are heat-stable</td>
              <td className='p-3'>Moderate: delicate florals diminish</td>
              <td className='p-3'>Variable: depends on fermentation profile</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Concentrate TDS yield</td>
              <td className='p-3'>Higher (more soluble sugars)</td>
              <td className='p-3'>Lower (cleaner, less dissolved solids)</td>
              <td className='p-3'>Highest (extended fermentation increases solubles)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Shelf flavor stability (6 months)</td>
              <td className='p-3'>Good: chocolatey, fruity notes persist</td>
              <td className='p-3'>Moderate: brightness fades faster</td>
              <td className='p-3'>Untested at scale for most buyers</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Sediment in concentrate</td>
              <td className='p-3'>Higher: requires finer filtration</td>
              <td className='p-3'>Lower: cleaner extraction</td>
              <td className='p-3'>Variable</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Best RTD format</td>
              <td className='p-3'>Black cold brew, nitro, sweetened RTD</td>
              <td className='p-3'>Sparkling cold brew, cold brew with milk</td>
              <td className='p-3'>Limited-edition, premium single-serve</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg my-6'>
        <h4 className='font-bold text-lg mb-3'>Production Note</h4>
        <p className='text-sm text-gray-700'>If your RTD product undergoes thermal pasteurization (typically 72°C for 15 seconds for flash pasteurization), prioritize natural-processed Ethiopian lots. The fruit-forward flavor compounds in naturals are more thermally stable than the delicate floral and citrus notes in washed Ethiopian coffees. HPP (high-pressure processing) preserves both profiles better but costs $0.05 to $0.12 more per unit.</p>
      </div>

      {/* Section 5: Grade Selection */}
      <h3 id='grade-selection' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        5. Grade Selection for Cold Brew Production
      </h3>
      <p className='my-4'>
        Cold brew extraction is more forgiving of minor defects than espresso or pour-over because low-temperature steeping extracts fewer bitter compounds from defective beans. This creates a cost optimization opportunity for cold brew producers. For full details on <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Ethiopian coffee grading and defect counts</Link>, see our quality control guide.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Grade</th>
              <th className='p-3 text-left font-bold'>Cold Brew Suitability</th>
              <th className='p-3 text-left font-bold'>Indicative FOB ($/kg)</th>
              <th className='p-3 text-left font-bold'>Best Application</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Grade 1 Natural</td>
              <td className='p-3'>Excellent; clean, complex cup</td>
              <td className='p-3'>$4.80 to $7.50</td>
              <td className='p-3'>Premium single-origin RTD ($4.50+ per can)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Grade 2 Natural</td>
              <td className='p-3'>Very good; minor defects masked by cold extraction</td>
              <td className='p-3'>$3.50 to $5.20</td>
              <td className='p-3'>Core cold brew product, flavored RTD</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Grade 3 Natural</td>
              <td className='p-3'>Good; cost-effective for blended cold brew</td>
              <td className='p-3'>$2.80 to $3.80</td>
              <td className='p-3'>Blended cold brew base, food service kegs</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Grade 1 Washed</td>
              <td className='p-3'>Excellent; clean, tea-like profile</td>
              <td className='p-3'>$5.00 to $8.00</td>
              <td className='p-3'>Sparkling cold brew, premium latte RTD</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Grade 2 Washed</td>
              <td className='p-3'>Good; balanced cup at moderate cost</td>
              <td className='p-3'>$3.80 to $5.50</td>
              <td className='p-3'>Blended cold brew, cold brew with milk</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        For current FOB pricing and contract structures, see our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian coffee pricing guide</Link>. The key insight for cold brew buyers: Grade 2 naturals deliver 85 to 90% of the cup quality of Grade 1 in cold brew format, at 25 to 35% lower cost. A mid-size RTD brand producing 50,000 cans per month can save $8,000 to $12,000 annually by sourcing Grade 2 Sidamo or Guji naturals instead of Grade 1 for their core product, reserving Grade 1 for a premium single-origin SKU.
      </p>

      {/* Section 6: Extraction at Scale */}
      <h3 id='extraction-at-scale' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBolt className='w-8 h-8 text-amber-600' />
        6. Extraction at Scale: Production Parameters
      </h3>
      <p className='my-4'>
        Production-scale cold brew extraction differs significantly from cafe-level immersion brewing. Commercial cold brew uses systems from Toddy, Filtron, Bkon, or custom-built immersion tanks that process 20 to 200 kg of ground coffee per batch. Ethiopian green coffee requires specific parameter adjustments due to its higher density and complex soluble profile.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Parameter</th>
              <th className='p-3 text-left font-bold'>Concentrate (Keg/Dilute)</th>
              <th className='p-3 text-left font-bold'>RTD Strength (Can/Bottle)</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Coffee-to-water ratio</td>
              <td className='p-3'>1:5 to 1:7 (by weight)</td>
              <td className='p-3'>1:12 to 1:15 (by weight)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Grind size</td>
              <td className='p-3'>Coarse (1,000 to 1,200 microns)</td>
              <td className='p-3'>Medium-coarse (800 to 1,000 microns)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Steep temperature</td>
              <td className='p-3'>2 to 5°C (refrigerated)</td>
              <td className='p-3'>Room temp (18 to 22°C) for faster extraction</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Steep time</td>
              <td className='p-3'>18 to 24 hours</td>
              <td className='p-3'>12 to 16 hours</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Target TDS (concentrate)</td>
              <td className='p-3'>4.5 to 6.0%</td>
              <td className='p-3'>1.5 to 2.5% (after dilution)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Extraction yield</td>
              <td className='p-3'>18 to 22%</td>
              <td className='p-3'>16 to 20%</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Filtration</td>
              <td className='p-3'>Two-stage: 100-micron then 20-micron</td>
              <td className='p-3'>Three-stage: add 5-micron for shelf clarity</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Ethiopian-Specific Adjustment</h4>
        <p className='text-sm text-gray-700'>Ethiopian natural coffees produce 10 to 15% more dissolved solids than Central American coffees at the same ratio. Start with a 1:7 ratio for concentrate and adjust downward. Over-extraction with Ethiopian naturals creates a cloying sweetness that overwhelms the fruit character. Monitor TDS with a refractometer at 12-hour intervals during your first production batch with a new lot to dial in the sweet spot.</p>
      </div>

      {/* Section 7: Shelf Stability */}
      <h3 id='shelf-stable' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineShieldCheck className='w-8 h-8 text-amber-600' />
        7. Formulating Shelf-Stable Ethiopian Cold Brew
      </h3>
      <p className='my-4'>
        Producing a shelf-stable RTD cold brew that retains Ethiopian flavor characteristics requires careful choices in preservation method, packaging, and formulation. The three primary preservation paths each interact differently with Ethiopian coffee&#39;s aromatic compounds.
      </p>
      <div className='grid md:grid-cols-3 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Flash Pasteurization</h4>
          <p className='text-sm text-gray-700'><strong>Method:</strong> 72°C for 15 seconds, then rapid cooling.</p>
          <p className='text-sm text-gray-700 mt-2'><strong>Shelf life:</strong> 90 to 180 days refrigerated.</p>
          <p className='text-sm text-gray-700 mt-2'><strong>Ethiopian impact:</strong> Natural-process fruit notes survive well. Washed florals (jasmine, bergamot) diminish 30 to 40%. Best for natural Guji/Sidamo cold brew.</p>
          <p className='text-sm text-gray-700 mt-2'><strong>Cost:</strong> $0.02 to $0.04 per unit.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>HPP (High-Pressure Processing)</h4>
          <p className='text-sm text-gray-700'><strong>Method:</strong> 400 to 600 MPa pressure for 1 to 5 minutes at cold temperature.</p>
          <p className='text-sm text-gray-700 mt-2'><strong>Shelf life:</strong> 60 to 120 days refrigerated.</p>
          <p className='text-sm text-gray-700 mt-2'><strong>Ethiopian impact:</strong> Preserves both natural fruit and washed floral notes. Closest to fresh-brewed taste. Preferred for premium single-origin Ethiopian RTD.</p>
          <p className='text-sm text-gray-700 mt-2'><strong>Cost:</strong> $0.08 to $0.15 per unit.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Aseptic / UHT</h4>
          <p className='text-sm text-gray-700'><strong>Method:</strong> 135 to 140°C for 2 to 4 seconds, then aseptic filling.</p>
          <p className='text-sm text-gray-700 mt-2'><strong>Shelf life:</strong> 9 to 12 months ambient.</p>
          <p className='text-sm text-gray-700 mt-2'><strong>Ethiopian impact:</strong> Significant flavor degradation. Most delicate notes lost. Only viable for sweetened or flavored cold brew where origin character is secondary.</p>
          <p className='text-sm text-gray-700 mt-2'><strong>Cost:</strong> $0.03 to $0.06 per unit.</p>
        </div>
      </div>
      <p className='my-4'>
        <strong>Nitrogen infusion</strong> adds another dimension. Nitro cold brew, dispensed from kegs or packaged in widget cans, amplifies the creamy mouthfeel of Ethiopian naturals. The micro-bubble cascade creates a visual effect that consumers associate with premium. Ethiopian Guji and Sidamo naturals produce the best nitro results because their inherent chocolate and berry notes pair naturally with the creamy texture that nitrogen adds.
      </p>

      {/* Section 8: Buyer Persona */}
      <h3 id='buyer-persona' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineUserGroup className='w-8 h-8 text-amber-600' />
        8. Building an Ethiopian Cold Brew Product Line
      </h3>
      <p className='my-4'>
        Consider a U.S.-based RTD brand launching a three-SKU Ethiopian cold brew line. Here is how the sourcing and positioning decisions map across product tiers:
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>SKU</th>
              <th className='p-3 text-left font-bold'>Origin / Grade</th>
              <th className='p-3 text-left font-bold'>Process</th>
              <th className='p-3 text-left font-bold'>Preservation</th>
              <th className='p-3 text-left font-bold'>Green Cost/Can</th>
              <th className='p-3 text-left font-bold'>Retail Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Premium: &quot;Guji Single Origin&quot;</td>
              <td className='p-3'>Guji G1 Natural</td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>HPP</td>
              <td className='p-3'>$0.38 to $0.52</td>
              <td className='p-3'>$4.99</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Core: &quot;Ethiopian Cold Brew&quot;</td>
              <td className='p-3'>Sidamo G2 Natural</td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>Flash pasteurization</td>
              <td className='p-3'>$0.22 to $0.32</td>
              <td className='p-3'>$3.49</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Value: &quot;Ethiopian Nitro&quot;</td>
              <td className='p-3'>Jimma G3 Natural + Sidamo G2 blend</td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>Flash pasteurization + N₂</td>
              <td className='p-3'>$0.18 to $0.25</td>
              <td className='p-3'>$2.99</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        This tiered approach lets a brand cover the $2.99 to $4.99 retail range while sourcing entirely from Ethiopian origins. The premium SKU builds brand credibility with single-origin traceability. The core SKU drives volume. The nitro SKU captures the growing nitrogen-infused segment at a competitive price point by using a cost-effective Jimma/Sidamo blend where nitrogen&#39;s creamy texture compensates for the slightly simpler flavor profile of Grade 3 coffee.
      </p>
      <p className='my-4'>
        Annual green coffee requirement for this three-SKU program at 50,000 total cans per month: approximately 3,600 to 5,400 kg of green coffee, or roughly one FCL (full container load) every 3 to 4 months. For container logistics and minimum order guidance, see our <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>MOQ guide</Link>.
      </p>

      {/* Section 9: Sourcing Workflow */}
      <h3 id='sourcing-workflow' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineArrowPath className='w-8 h-8 text-amber-600' />
        9. Sourcing Workflow: Sample to Container
      </h3>
      <p className='my-4'>
        Sourcing Ethiopian green coffee for cold brew production follows the same export pathway as any Ethiopian coffee purchase, with a few cold brew-specific additions to the sample evaluation stage. For the complete export process, see our <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>export process guide</Link>.
      </p>
      <div className='bg-gray-50 border border-gray-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-4'>Cold Brew Sourcing Steps</h4>
        <ol className='space-y-3 text-sm'>
          <li><strong>1. Define your cold brew spec.</strong> Share your target TDS, extraction method, preservation method, and flavor profile goals with your exporter. This narrows the origin and grade selection before samples are sent.</li>
          <li><strong>2. Request cold brew-focused samples.</strong> Ask for 500g to 1kg samples of 3 to 5 lots. Specify that you will evaluate via cold brew extraction, not standard cupping. Most exporters send cupping-roasted samples; request green samples so you can roast to your cold brew profile.</li>
          <li><strong>3. Brew test at production parameters.</strong> Evaluate each sample at your actual production ratio, steep time, and temperature. Cup hot for reference, but the purchase decision should be based on cold brew performance. Score for: flavor retention after dilution, TDS consistency, and sediment behavior.</li>
          <li><strong>4. Run a shelf stability test.</strong> Brew a small batch, bottle it, and store at your target conditions for 2 to 4 weeks. Taste at weekly intervals. Ethiopian naturals should maintain 80%+ of their initial flavor intensity at the 4-week mark.</li>
          <li><strong>5. Confirm contract terms.</strong> Lock in pricing, quantity, and shipping schedule. For cold brew programs, consider forward contracts covering 2 to 3 shipments to ensure consistent supply through your peak selling season (May to September in North America). See our <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>contracts and payment terms guide</Link> for details.</li>
          <li><strong>6. Approve pre-shipment sample.</strong> Before the container ships, your exporter sends a pre-shipment sample (PSS) from the actual export lot. Run your cold brew evaluation on this sample to confirm it matches the original approval.</li>
        </ol>
      </div>

      {/* CTA block */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Ethiopian Coffee for Your Cold Brew Program</h4>
        <p className='my-2'>Request green coffee samples optimized for cold brew extraction. Tell us your production parameters, target flavor profile, and volume needs; we will match you with the right Ethiopian lots from our current inventory.</p>
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

      {/* FAQ section */}
      <section id='faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3'>
          <HiOutlineQuestionMarkCircle className='w-8 h-8 text-amber-600' />
          Frequently Asked Questions
        </h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Which Ethiopian coffee is best for cold brew concentrate?</h4>
            <p className='text-sm text-gray-600'>Natural-processed Guji and Sidamo Grade 1 or Grade 2 coffees produce the best cold brew concentrate. Their high sugar content and berry/chocolate flavor compounds survive extended cold extraction and dilution better than washed lots, delivering a full-bodied concentrate at 4.5 to 6.0% TDS.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Does Ethiopian cold brew survive pasteurization?</h4>
            <p className='text-sm text-gray-600'>Natural-processed Ethiopian coffees retain most of their fruit-forward flavor through flash pasteurization (72°C/15 seconds). Washed Ethiopian florals are more heat-sensitive. For maximum flavor preservation across both processing types, HPP (high-pressure processing) outperforms thermal pasteurization.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What grade of Ethiopian coffee should I use for RTD cold brew?</h4>
            <p className='text-sm text-gray-600'>Grade 2 naturals offer the best value for RTD production, delivering 85 to 90% of Grade 1 cup quality in cold brew format at 25 to 35% lower FOB cost. Reserve Grade 1 for premium single-origin SKUs where the traceability story justifies the price premium to consumers.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How much Ethiopian green coffee do I need for 50,000 RTD cans per month?</h4>
            <p className='text-sm text-gray-600'>At standard RTD cold brew ratios (1:12 to 1:15 coffee to water) for a 10 to 12 oz can, you need approximately 1,200 to 1,800 kg of green coffee per month, or 3,600 to 5,400 kg per quarter. This translates to roughly one FCL (full container load) every 3 to 4 months.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Can I source single-origin Ethiopian coffee for nitro cold brew?</h4>
            <p className='text-sm text-gray-600'>Yes. Nitrogen infusion amplifies the creamy mouthfeel of Ethiopian naturals, making Guji and Sidamo particularly effective for nitro cold brew. The micro-bubble cascade enhances perceived sweetness and body. For cost-effective nitro, a Jimma/Sidamo natural blend at Grade 2 to 3 delivers strong results at a lower cost per can.</p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Brewing &amp; Processing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/best-coffee-guide-french-press-pour-over-scales' className='text-amber-700 hover:underline'>Ethiopian Coffee Brew Profiles: Roaster&#39;s Guide</Link></li>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee Processing</Link></li>
              <li>&bull; <Link href='/insights/anaerobic-ethiopian-coffee-processing-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Anaerobic Coffee Processing: Buyer&#39;s Guide</Link></li>
              <li>&bull; <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='text-amber-700 hover:underline'>How to Roast Ethiopian Coffee Beans</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Pricing for Importers</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-espresso-blend-sourcing-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee for Espresso Blends</Link></li>
              <li>&bull; <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Minimum Order Quantities: Ethiopian Coffee</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts &amp; Payment Terms</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origin Guides</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Guji Coffee: Buyer&#39;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/sidamo-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Sidamo Coffee: Buyer&#39;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/jimma-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Jimma Coffee: Buyer&#39;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/yirgacheffe-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Yirgacheffe Coffee: Buyer&#39;s Sourcing Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality &amp; Logistics</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality Control &amp; Grading</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline'>Green Coffee Shelf Life: Storage Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
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

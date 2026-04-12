import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineMapPin,
  HiOutlineBeaker,
  HiOutlineCurrencyDollar,
  HiOutlineTruck,
  HiOutlineGlobeAlt,
  HiOutlineScale,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopianGeshaCoffeeSourcingGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      {/* H1 + H2 */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Origin History, Growing Regions, Flavor Profiles, FOB Pricing, and How to Source Direct from Ethiopia
      </h2>

      {/* HERO IMAGE */}
      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md bg-gray-200 flex items-center justify-center'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian Gesha coffee cherries growing in the Bench Maji forest zone of Ethiopia'
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
        <span className='ml-2'>Origin Guide / Gesha Coffee / Sourcing Guide / Importer Resources</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Ethiopian Gesha coffee is the original source of the world&apos;s most expensive coffee variety. First collected from the Gori Gesha forest in Bench Maji, Ethiopia in the 1930s, it reached global fame after winning the 2005 Best of Panama competition. For importers, Ethiopian Gesha offers the genetic authenticity and terroir complexity that Panama-grown Geisha cannot replicate, at FOB prices ranging from $15 to $80+ per kilogram for top lots. This guide covers origins, growing regions, flavor benchmarks, grading, pricing, and a step-by-step sourcing path.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#origin' className='text-amber-700 hover:underline'>1. What Is Gesha Coffee? Origin and Naming</a></li>
          <li><a href='#history' className='text-amber-700 hover:underline'>2. From Bench Maji to Panama: How Gesha Traveled the World</a></li>
          <li><a href='#regions' className='text-amber-700 hover:underline'>3. Ethiopian Gesha Growing Regions</a></li>
          <li><a href='#flavor' className='text-amber-700 hover:underline'>4. Flavor Profile: Ethiopian Gesha vs Panama Geisha</a></li>
          <li><a href='#grading' className='text-amber-700 hover:underline'>5. Grading, Processing, and Quality Standards</a></li>
          <li><a href='#pricing' className='text-amber-700 hover:underline'>6. FOB Pricing and Auction Benchmarks</a></li>
          <li><a href='#sourcing' className='text-amber-700 hover:underline'>7. How to Source Ethiopian Gesha Coffee</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>8. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRODUCTION */}
      <p className='text-lg leading-relaxed my-4'>
        Ethiopian Gesha coffee commands the highest premiums in the specialty market. Single lots have sold for over $1,700 per kilogram at auction, and the variety consistently scores 90+ on the SCA scale when grown at altitude and processed with care. Yet most buyers associate Gesha (often spelled &quot;Geisha&quot;) with Panama, not with its actual birthplace in the highlands of southwestern Ethiopia. That disconnect represents both a gap in market understanding and a sourcing opportunity.
      </p>
      <p className='my-4'>
        For importers and roasters, sourcing Gesha from Ethiopia means accessing the genetic diversity, terroir authenticity, and pricing flexibility that no transplanted variety can match. Ethiopia&apos;s Gesha-producing zones, centered on the Bench Maji and Kaffa areas plus newer plantings in Guji and Sidama, offer a range of profiles from jasmine-forward to tropical fruit to winey complexity. This guide covers the variety&apos;s origin story, maps the key growing regions, benchmarks pricing, and outlines a practical sourcing path for B2B buyers.
      </p>

      {/* Section 1: Origin and Naming */}
      <h3 id='origin' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineGlobeAlt className='w-8 h-8 text-amber-600' />
        1. What Is Gesha Coffee? Origin and Naming
      </h3>
      <p className='my-4'>
        Gesha is a coffee variety (Coffea arabica) that originated in the Gori Gesha forest of southwestern Ethiopia. The name comes from the Gesha district within the Bench Maji zone, where the variety grows wild among thousands of other uncharacterized Arabica landraces. The forest sits at elevations between 1,700 and 2,100 meters, with dense canopy cover, consistent rainfall exceeding 1,800 mm annually, and deep volcanic soils.
      </p>
      <p className='my-4'>
        The spelling debate matters for sourcing conversations. &quot;Gesha&quot; refers to the Ethiopian origin and the botanical variety. &quot;Geisha&quot; is the commercial name popularized in Panama and Central America. When requesting Ethiopian lots, use &quot;Gesha&quot; to signal you are sourcing the origin material, not a transplanted cultivar. Some exporters use the names interchangeably, but specifying &quot;Ethiopian Gesha&quot; avoids confusion.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Gesha vs Geisha: Quick Reference</h4>
        <p className='text-sm text-gray-700'>
          <strong>Gesha:</strong> The original variety name, derived from the Gesha district in Bench Maji, Ethiopia. Used for Ethiopian-origin lots and botanical references.
        </p>
        <p className='text-sm text-gray-700 mt-2'>
          <strong>Geisha:</strong> The commercial name used primarily in Panama, Costa Rica, Colombia, and other producing countries where the variety was transplanted. Often carries higher retail premiums due to auction marketing.
        </p>
      </div>

      {/* Section 2: History */}
      <h3 id='history' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMapPin className='w-8 h-8 text-amber-600' />
        2. From Bench Maji to Panama: How Gesha Traveled the World
      </h3>
      <p className='my-4'>
        The Gesha variety&apos;s journey from Ethiopian forest to global fame spans nine decades and three continents. Understanding this migration helps buyers appreciate why Ethiopian Gesha is genetically distinct from the commercial Geisha planted elsewhere.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Year</th>
              <th className='p-3 text-left font-bold'>Event</th>
              <th className='p-3 text-left font-bold'>Significance</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>1931</td>
              <td className='p-3'>British collectors gather seeds from the Gori Gesha forest, Ethiopia</td>
              <td className='p-3'>First documented collection of Gesha genetic material</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>1936</td>
              <td className='p-3'>Seeds sent to Lyamungu Research Station, Tanzania</td>
              <td className='p-3'>First international transfer; studied for coffee leaf rust resistance</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>1953</td>
              <td className='p-3'>Material sent to CATIE research center, Costa Rica (accession T2722)</td>
              <td className='p-3'>Central American introduction; cataloged but not widely planted</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>1960s</td>
              <td className='p-3'>Seeds distributed to Panama for planting trials</td>
              <td className='p-3'>Planted as a rust-resistant variety; low yields limited early adoption</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>2005</td>
              <td className='p-3'>Hacienda La Esmeralda wins Best of Panama with Geisha lot</td>
              <td className='p-3'>Global fame; auction prices exploded, creating the premium Geisha market</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>2011</td>
              <td className='p-3'>Geisha Village Coffee established in Bench Maji, Ethiopia</td>
              <td className='p-3'>First dedicated Ethiopian Gesha farm; returned attention to the origin</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>2017</td>
              <td className='p-3'>Tracon Trading acquires Gesha Farm in Bench Maji (1,800 to 1,980 m)</td>
              <td className='p-3'>Commercial-scale Ethiopian Gesha production for export</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>2025</td>
              <td className='p-3'>Pride of Gesha auction: Ethiopian lot sells for $1,739/kg</td>
              <td className='p-3'>New global record; Ethiopian Gesha outperforms Panama at auction</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        The critical point for buyers: commercial Geisha planted in Panama descends from a narrow genetic base (the T2722 accession). Ethiopian Gesha, by contrast, encompasses hundreds of wild and semi-wild genotypes still growing in the Gori Gesha forest and surrounding areas. This genetic breadth translates to a wider range of cup profiles and greater resilience to disease, making Ethiopian Gesha a superior long-term sourcing bet for roasters building differentiation strategies.
      </p>

      {/* Section 3: Growing Regions */}
      <h3 id='regions' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMapPin className='w-8 h-8 text-amber-600' />
        3. Ethiopian Gesha Growing Regions
      </h3>
      <p className='my-4'>
        Ethiopian Gesha production is concentrated in three zones, with experimental plantings expanding into others. Each region produces distinct profiles shaped by altitude, soil, and processing infrastructure.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Bench Maji (Primary Zone)</h4>
          <p className='text-sm text-gray-700'>
            The ancestral home of Gesha. The Gori Gesha forest contains wild populations at 1,700 to 2,100 m. Dedicated Gesha farms operate between 1,800 and 2,000 m, including Geisha Village Coffee and Gesha Farm (Tracon Trading). Deep tropical forest soils produce intensely floral, jasmine-forward cups with bergamot and stone fruit notes. Both natural and washed processing are used, with washed lots favoring clarity and naturals amplifying tropical fruit sweetness.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Kaffa (Adjacent Origin)</h4>
          <p className='text-sm text-gray-700'>
            The Kaffa zone borders Bench Maji and shares similar forest ecosystems. Wild Gesha genotypes grow throughout the Bonga Forest Biosphere Reserve. Kaffa Gesha lots tend to be more herbal and tea-like compared to Bench Maji&apos;s jasmine florals, with honey, chamomile, and light citrus notes. Production volumes remain small, but several cooperatives now separate Gesha lots for specialty export.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Guji and Sidama (Expanded Plantings)</h4>
          <p className='text-sm text-gray-700'>
            Select washing stations and estates in <Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Guji</Link> and <Link href='/insights/sidamo-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Sidama</Link> have planted Gesha cultivars at high altitudes (1,900 to 2,200 m). These lots blend the variety&apos;s signature florality with the fruit complexity characteristic of southern Ethiopian terroir. Gelana Gesha, a well-known farm in Guji, has produced competition-winning lots. Expect more Guji and Sidama Gesha to reach export channels over the next two to three seasons.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>JARC Research Plots</h4>
          <p className='text-sm text-gray-700'>
            The Jimma Agricultural Research Center (JARC) maintains Gesha accessions collected from various forest populations. JARC has released improved Gesha selections, including the Gesha1931 (G31) cultivar that traces directly to the original 1931 collection. These research-driven varieties aim to combine the cup quality of wild Gesha with improved agronomic performance for smallholder farmers.
          </p>
        </div>
      </div>

      {/* Section 4: Flavor Profile */}
      <h3 id='flavor' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        4. Flavor Profile: Ethiopian Gesha vs Panama Geisha
      </h3>
      <p className='my-4'>
        Ethiopian Gesha and Panama Geisha share a genetic ancestor, but terroir, altitude, soil composition, and processing differences produce distinct cup experiences. Importers sourcing both should understand these differences to position each origin accurately for their customers.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Attribute</th>
              <th className='p-3 text-left font-bold'>Ethiopian Gesha</th>
              <th className='p-3 text-left font-bold'>Panama Geisha</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Dominant Aromatics</td>
              <td className='p-3'>Jasmine, bergamot, wild honey, tropical fruit</td>
              <td className='p-3'>Jasmine, citrus blossom, peach, papaya</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Acidity</td>
              <td className='p-3'>Complex, wine-like; malic and citric acid interplay</td>
              <td className='p-3'>Bright, clean; primarily citric and phosphoric</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Body</td>
              <td className='p-3'>Medium to full; tea-like to syrupy depending on process</td>
              <td className='p-3'>Delicate to medium; silky texture</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Sweetness</td>
              <td className='p-3'>Raw honey, tropical fruit, brown sugar complexity</td>
              <td className='p-3'>Clean sugarcane, stone fruit, floral nectar</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Finish</td>
              <td className='p-3'>Long, layered; shifts from floral to fruit as it cools</td>
              <td className='p-3'>Clean, lingering floral and citrus</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Genetic Diversity</td>
              <td className='p-3'>Hundreds of wild genotypes; wide cup variation</td>
              <td className='p-3'>Narrow base from T2722 accession; more uniform</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Typical SCA Score</td>
              <td className='p-3'>86 to 94+ (top auction lots)</td>
              <td className='p-3'>87 to 96+ (top auction lots)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        The key distinction: Ethiopian Gesha offers more complexity and terroir variation. Panama Geisha delivers more uniformity and clarity. For roasters building a premium single-origin program, Ethiopian Gesha provides a compelling origin story (birthplace of the variety) combined with flavor profiles that range from delicate and floral to bold and winey. Natural-processed Ethiopian Gesha, in particular, delivers tropical fruit intensity that washed Panama Geisha rarely matches.
      </p>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700 italic'>
          &quot;Ethiopian Gesha shows a wider flavor spectrum than any other origin growing this variety. A washed Bench Maji lot might taste like jasmine tea with bergamot, while a natural from the same zone explodes with passion fruit and mango. That range is the sourcing advantage.&quot;
        </p>
      </div>

      {/* Section 5: Grading and Processing */}
      <h3 id='grading' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        5. Grading, Processing, and Quality Standards
      </h3>
      <p className='my-4'>
        Ethiopian Gesha follows the same <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX grading system</Link> used for all Ethiopian specialty exports, with grades ranging from G1 (highest) to G5 (lowest). However, most Gesha exported for the specialty market is Grade 1 or Grade 2, processed either washed or natural.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Processing Methods</h4>
      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Washed Gesha</h4>
          <p className='text-sm text-gray-700'>
            Pulped, fermented for 36 to 72 hours, channel washed, and dried on raised beds for 10 to 14 days. Washed Gesha emphasizes the variety&apos;s floral aromatics and clean acidity. Expect jasmine, bergamot, and tea-like qualities. Most Bench Maji washing stations produce washed Grade 1 lots during peak season.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Natural Gesha</h4>
          <p className='text-sm text-gray-700'>
            Whole cherries dried on raised beds for 15 to 25 days. Natural processing amplifies fruit-forward characteristics: passion fruit, mango, red grape, and winey sweetness. Natural Gesha carries higher defect risk if drying is not carefully managed, so evaluate <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>pre-shipment samples</Link> closely.
          </p>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Quality Specifications for Importers</h4>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Parameter</th>
              <th className='p-3 text-left font-bold'>Washed Gesha G1</th>
              <th className='p-3 text-left font-bold'>Natural Gesha G1</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Defect Count (per 300g)</td>
              <td className='p-3'>0 to 3 full defects</td>
              <td className='p-3'>0 to 3 full defects</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Screen Size</td>
              <td className='p-3'>14+ (predominantly 15 to 17)</td>
              <td className='p-3'>14+ (predominantly 15 to 17)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Moisture Content</td>
              <td className='p-3'>10.0% to 11.5%</td>
              <td className='p-3'>10.5% to 12.0%</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Water Activity</td>
              <td className='p-3'>Below 0.60 aw</td>
              <td className='p-3'>Below 0.60 aw</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Cup Score (target)</td>
              <td className='p-3'>86+ SCA</td>
              <td className='p-3'>86+ SCA</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Gesha trees are low-yielding compared to standard Ethiopian heirloom varieties. A typical Gesha tree produces 30% to 50% less cherry than comparable varieties at the same altitude. This inherent scarcity drives much of the pricing premium and means lot sizes are smaller. Importers should expect to source Gesha in quantities of 10 to 60 bags (60 kg each) per washing station or micro-lot, rather than the multi-container volumes available for Yirgacheffe or Sidamo Grade 1.
      </p>

      {/* Section 6: Pricing */}
      <h3 id='pricing' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='w-8 h-8 text-amber-600' />
        6. FOB Pricing and Auction Benchmarks
      </h3>
      <p className='my-4'>
        Ethiopian Gesha coffee pricing spans a wide range depending on lot quality, processing method, farm reputation, and sales channel (direct contract vs. auction). The table below shows indicative FOB Djibouti price ranges for the 2025/26 season.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Category</th>
              <th className='p-3 text-left font-bold'>FOB Price Range (USD/kg)</th>
              <th className='p-3 text-left font-bold'>Typical Lot Size</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Washed Gesha G1 (standard specialty)</td>
              <td className='p-3'>$15 to $30</td>
              <td className='p-3'>30 to 60 bags</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Natural Gesha G1 (standard specialty)</td>
              <td className='p-3'>$18 to $40</td>
              <td className='p-3'>20 to 50 bags</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Competition/auction lots (90+ SCA)</td>
              <td className='p-3'>$50 to $200+</td>
              <td className='p-3'>5 to 20 bags</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Pride of Gesha auction (top lot, 2025)</td>
              <td className='p-3'>$1,739 (record price)</td>
              <td className='p-3'>Micro-lot (&lt;5 bags)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Pricing Context for Buyers</h4>
        <p className='text-sm text-gray-700'>
          Ethiopian Gesha at $15 to $30/kg FOB represents strong value compared to Panama Geisha, which typically starts at $40 to $80/kg FOB for comparable quality. The price gap exists because Panama&apos;s auction system and smaller production volumes have inflated Geisha premiums relative to cup quality. Importers sourcing Ethiopian Gesha at the $15 to $30 tier access 86 to 89 SCA scores with full origin traceability, making it one of the best value-to-quality ratios in ultra-premium specialty coffee.
        </p>
      </div>

      <p className='my-4'>
        Auction prices set headlines, but most commercial Gesha sourcing happens through direct contracts with Ethiopian exporters. The <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian coffee pricing guide</Link> on this site covers contract structures, payment terms, and how differentials work. For Gesha specifically, fixed-price contracts are standard because the variety trades well above C-market reference levels.
      </p>

      {/* Section 7: Sourcing */}
      <h3 id='sourcing' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTruck className='w-8 h-8 text-amber-600' />
        7. How to Source Ethiopian Gesha Coffee
      </h3>
      <p className='my-4'>
        Sourcing Ethiopian Gesha follows the same general <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>export process</Link> as other Ethiopian specialty coffees, with a few key differences related to volume availability and pricing negotiation.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Step-by-Step Sourcing Path</h4>
      <ol className='space-y-4 my-4'>
        <li className='flex gap-3'>
          <span className='font-bold text-amber-600 flex-shrink-0'>1.</span>
          <div>
            <strong>Define your requirements.</strong> Specify process (washed or natural), target SCA score range, volume needed, and budget per kilogram. Gesha availability is limited, so clarity upfront helps your exporter allocate the right lots.
          </div>
        </li>
        <li className='flex gap-3'>
          <span className='font-bold text-amber-600 flex-shrink-0'>2.</span>
          <div>
            <strong>Contact an Ethiopian exporter with Gesha access.</strong> Not all exporters source Gesha. Prioritize exporters with relationships in Bench Maji, or with farm partners in Guji and Sidama who plant Gesha cultivars. <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='text-amber-700 hover:underline'>Evaluate exporters</Link> using the same due diligence checklist you apply to any specialty purchase.
          </div>
        </li>
        <li className='flex gap-3'>
          <span className='font-bold text-amber-600 flex-shrink-0'>3.</span>
          <div>
            <strong>Request pre-shipment samples.</strong> Ask for 200g to 300g roast-ready green samples from specific washing stations or farm lots. <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>Cup and evaluate</Link> each sample against your quality benchmarks. For Gesha, pay particular attention to floral intensity, acidity structure, and sweetness clarity.
          </div>
        </li>
        <li className='flex gap-3'>
          <span className='font-bold text-amber-600 flex-shrink-0'>4.</span>
          <div>
            <strong>Agree on price and contract terms.</strong> Fixed-price contracts are standard for Gesha. Agree on FOB Djibouti pricing, payment terms (typically 30% to 50% advance via T/T or full LC), delivery timeline, and quality clauses. Review the <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>contracts and payment terms guide</Link> for detailed structures.
          </div>
        </li>
        <li className='flex gap-3'>
          <span className='font-bold text-amber-600 flex-shrink-0'>5.</span>
          <div>
            <strong>Confirm lot traceability.</strong> Ethiopian Gesha&apos;s value depends on <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>verifiable traceability</Link> back to the farm or washing station. Request GPS coordinates, lot numbers, processing date, and varietal confirmation. This documentation supports premium retail pricing and EUDR compliance for EU-bound shipments.
          </div>
        </li>
        <li className='flex gap-3'>
          <span className='font-bold text-amber-600 flex-shrink-0'>6.</span>
          <div>
            <strong>Approve final sample and ship.</strong> After the exporter completes <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='text-amber-700 hover:underline'>dry milling</Link> and CLU inspection, approve the final pre-shipment sample. Containers ship from Djibouti port with typical transit times of 18 to 35 days depending on destination.
          </div>
        </li>
      </ol>

      <div className='bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg my-6'>
        <h4 className='font-bold text-lg mb-3'>Timing Matters</h4>
        <p className='text-sm text-gray-700'>
          Ethiopian Gesha harvest runs from November through January, with washed lots available for export from March onward and naturals from April. Top Gesha lots sell fast. Contact your exporter by December or January to reserve allocations before the season peaks. Refer to the <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>harvest calendar</Link> for regional timing details.
        </p>
      </div>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Ethiopian Gesha Coffee Direct from Origin</h4>
        <p className='my-2'>
          Ethio Coffee Import and Export PLC sources Gesha lots from Bench Maji and partnered washing stations across Ethiopia&apos;s specialty regions. Request samples, view current availability, or discuss your Gesha requirements with our sourcing team.
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

      {/* FAQ SECTION */}
      <section id='faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900'>Frequently Asked Questions</h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Why is Ethiopian Gesha coffee so expensive?</h4>
            <p className='text-sm text-gray-600'>
              Ethiopian Gesha trees yield 30% to 50% less cherry than standard varieties. This scarcity, combined with exceptional cup quality (86 to 94+ SCA scores), intensive hand-processing at altitude, and strong auction demand, drives premiums ranging from $15/kg to over $1,700/kg for top micro-lots.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the difference between Gesha and Geisha coffee?</h4>
            <p className='text-sm text-gray-600'>
              &quot;Gesha&quot; refers to the original variety named after the Gesha district in Bench Maji, Ethiopia. &quot;Geisha&quot; is the commercial name used in Panama and other countries where the variety was transplanted. Ethiopian lots are typically marketed as &quot;Gesha&quot; to emphasize origin authenticity.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What does Ethiopian Gesha coffee taste like?</h4>
            <p className='text-sm text-gray-600'>
              Washed Ethiopian Gesha presents jasmine, bergamot, and wild honey with bright, complex acidity and a tea-like body. Natural-processed lots amplify tropical fruit (passion fruit, mango) with winey sweetness and fuller body. Both styles share a long, layered finish that evolves as the cup cools.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the minimum order quantity for Ethiopian Gesha?</h4>
            <p className='text-sm text-gray-600'>
              Most exporters offer Gesha in lots of 10 to 60 bags (60 kg each). Competition-grade micro-lots may be as small as 5 bags. For importers needing smaller trial quantities, some exporters consolidate Gesha with other Ethiopian specialty lots in a shared container (LCL).
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Is Ethiopian Gesha coffee available year-round?</h4>
            <p className='text-sm text-gray-600'>
              No. Ethiopian Gesha harvest runs from November to January. Export-ready lots become available from March through June. Top lots sell out quickly, often before April, so early-season commitments are essential. Off-season availability depends on exporter warehouse stocks.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origin Guides</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Guji Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/sidamo-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Sidamo Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/yirgacheffe-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Yirgacheffe Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/harar-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Harar Coffee: Buyer&apos;s Sourcing Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Varieties and Processing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Ethiopian Heirloom Coffee Varieties</Link></li>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee</Link></li>
              <li>&bull; <Link href='/insights/anaerobic-ethiopian-coffee-processing-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Anaerobic Processing Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Pricing and Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Pricing for Importers</Link></li>
              <li>&bull; <Link href='/insights/micro-lot-ethiopian-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Micro-Lot Ethiopian Coffee Sourcing</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Contracts and Payment Terms Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing and Quality</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>Sourcing Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability Guide</Link></li>
              <li>&bull; <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup and Evaluate Samples</Link></li>
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

import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineQuestionMarkCircle,
  HiOutlineBeaker,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiOutlineGlobeAlt,
  HiOutlineShoppingCart,
  HiOutlineCurrencyDollar,
  HiOutlineSparkles
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function DecafGreenCoffeeProcessingSourcingGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        How decaf green coffee is made, four methods compared, flavor impact, pricing, and Ethiopian decaf sourcing for importers and roasters
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Decaf green coffee undergoes an additional processing step to remove caffeine while preserving the flavor compounds that define specialty quality
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Decaf green coffee beans after processing, showing the characteristic color shift from decaffeination'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Processing Methods / Sourcing Guide / Green Coffee / Importer Resources</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Key Takeaway:</span> Decaf green coffee is produced through four main methods: Swiss Water Process (chemical-free, flavor-gentle), supercritical CO2 (selective caffeine extraction, best for large volumes), ethyl acetate/sugarcane (cost-effective, common in Colombia and Brazil), and methylene chloride (lowest cost, most common globally). For specialty importers, Swiss Water and CO2 decaf preserve the most cup complexity. Ethiopian decaf coffees retain their signature floral and fruit notes best when processed via Swiss Water or CO2 methods. Expect a $0.50 to $2.00 per pound premium over conventional green for decaf processing, depending on method and volume.</span>
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href="#why-decaf-matters" className='text-amber-700 hover:underline'>1. Why Decaf Green Coffee Matters for Importers</a></li>
          <li><a href="#how-decaf-made" className='text-amber-700 hover:underline'>2. How Is Decaf Coffee Made?</a></li>
          <li><a href="#four-methods" className='text-amber-700 hover:underline'>3. Four Decaffeination Methods Compared</a></li>
          <li><a href="#flavor-impact" className='text-amber-700 hover:underline'>4. How Decaffeination Affects Coffee Flavor</a></li>
          <li><a href="#sourcing" className='text-amber-700 hover:underline'>5. Decaf Green Coffee Sourcing for Importers</a></li>
          <li><a href="#ethiopian-decaf" className='text-amber-700 hover:underline'>6. Ethiopian Decaf Coffee: Origin Advantage</a></li>
          <li><a href="#faq" className='text-amber-700 hover:underline'>7. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRODUCTION / SECTION 1 */}
      <h3 id="why-decaf-matters" className='text-2xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineGlobeAlt className='text-amber-600' />
        Why Decaf Green Coffee Matters for Importers
      </h3>

      <p className='my-4'>
        <span className='font-bold'>Decaf green coffee</span> is no longer a niche afterthought. Global decaf consumption is growing at roughly 5 to 7% annually, outpacing overall coffee market growth in several key regions. In the United States, decaf accounts for approximately 12% of all coffee consumed. In Germany, the share tops 15%. Across younger demographics, health-conscious consumers are choosing decaf not because they dislike coffee but because they want the flavor without the stimulant.
      </p>

      <p className='my-4'>
        For importers and roasters, this creates a clear commercial opportunity. Roasters who offer only caffeinated options lose customers to competitors with quality decaf programs. The challenge is that most decaf on the market tastes flat, woody, and one-dimensional, so buyers associate decaf with compromise. That perception is changing. Advances in processing technology, combined with better green coffee selection, now make it possible to produce decaf that cups at 84 to 87 points on the <Link href='/insights/new-sca-coffee-value-assessment' className='underline font-bold'>SCA scale</Link>.
      </p>

      <p className='my-4'>
        This guide explains how decaffeination works, compares the four major processing methods, details their effect on cup quality, and provides practical sourcing guidance for importers buying decaf green coffee at commercial volumes. If you source Ethiopian origins, the final section covers why Ethiopian coffees perform exceptionally well in decaf programs and what options are currently available.
      </p>

      {/* SECTION 2 */}
      <h3 id="how-decaf-made" className='text-2xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineBeaker className='text-amber-600' />
        How Is Decaf Coffee Made?
      </h3>

      <h4 className='text-xl font-bold mt-8 mb-3'>The Basic Science of Decaffeination</h4>

      <p className='my-4'>
        All decaffeination methods share the same core principle: caffeine is a water-soluble alkaloid that can be extracted from green coffee beans using a solvent. The differences between methods come down to which solvent is used, how selectively it targets caffeine versus other flavor compounds, and how thoroughly it removes the solvent afterward.
      </p>

      <p className='my-4'>
        The process always begins with green (unroasted) coffee. Beans are first moistened or steamed to swell their cell structure and make caffeine accessible. A solvent, whether water, a chemical compound, or supercritical carbon dioxide, then draws caffeine out of the beans. The caffeine-laden solvent is separated and the caffeine removed or captured. The beans are re-dried to their original <Link href='/insights/green-coffee-shelf-life-storage-guide' className='underline font-bold'>moisture content</Link> (typically 10 to 12%) and prepared for export.
      </p>

      <p className='my-4'>
        What makes decaffeination difficult is selectivity. Coffee beans contain over 1,000 chemical compounds that contribute to aroma and taste. An ideal decaffeination process would remove only caffeine and leave everything else intact. In practice, every method extracts some non-caffeine compounds too, which is why decaf coffee never tastes exactly like its caffeinated counterpart. The best methods minimize this collateral extraction.
      </p>

      <div className='bg-amber-50 p-5 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold mb-2'>Did You Know? Caffeine Facts</h4>
        <ul className='space-y-2 text-sm'>
          <li>&bull; Arabica coffee contains 1.0 to 1.7% caffeine by weight; Robusta contains 1.7 to 4.0%</li>
          <li>&bull; The international standard (EU Regulation 1925/2006, Codex Alimentarius) requires decaf to contain no more than 0.1% caffeine by dry weight for roasted coffee and 0.3% for extracts</li>
          <li>&bull; A standard 8 oz cup of decaf still contains 2 to 15 mg of caffeine, compared to 80 to 100 mg in regular coffee</li>
          <li>&bull; The first commercial decaffeination process was patented by Ludwig Roselius in 1906 in Bremen, Germany</li>
          <li>&bull; Caffeine extracted during decaffeination is sold separately to pharmaceutical and soft drink companies</li>
        </ul>
      </div>

      {/* SECTION 3 */}
      <h3 id="four-methods" className='text-2xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineChartBar className='text-amber-600' />
        Four Decaffeination Methods Compared
      </h3>

      <p className='my-4'>
        Four methods account for virtually all commercial decaf green coffee production. Each has trade-offs in cost, flavor preservation, chemical residues, and certification compatibility. Understanding these differences is essential for importers positioning decaf as a quality offering rather than a filler SKU.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-3'>Swiss Water Process (SWP)</h4>

      <p className='my-4'>
        The Swiss Water Process uses only water and activated carbon filters to remove caffeine. Green coffee is soaked in hot water, which dissolves caffeine along with other soluble compounds. This solution passes through activated carbon filters calibrated to capture caffeine molecules (which are relatively large) while allowing smaller flavor compounds to pass through. The caffeine-free solution, now saturated with flavor compounds (called Green Coffee Extract, or GCE), is recirculated over fresh batches of green coffee. Because the GCE is already saturated with non-caffeine solubles, only caffeine migrates out of the new beans through osmotic pressure.
      </p>

      <p className='my-4'>
        Swiss Water Process is operated by a single company, Swiss Water Decaffeinated Coffee, based in Burnaby, British Columbia, Canada. This centralization means quality control is consistent, but all green coffee must be shipped to their facility for processing and then shipped onward to the buyer, adding transit time and cost.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Strengths:</span> 100% chemical-free, certified organic compatible, excellent flavor retention for specialty lots, strong brand recognition among consumers, consistent quality.
      </p>
      <p className='my-4'>
        <span className='font-bold'>Limitations:</span> Higher cost ($0.80 to $1.50/lb premium), longer lead times (4 to 8 weeks for processing), single facility creates logistical bottleneck, slight muting of bright acidity in some origins.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-3'>Supercritical CO2 Process</h4>

      <p className='my-4'>
        Supercritical CO2 decaffeination places moistened green coffee in a high-pressure extraction vessel, then floods it with carbon dioxide at temperatures and pressures above CO2&apos;s critical point (31.1&#176;C, 73.8 bar). In this supercritical state, CO2 behaves as both a gas and a liquid, penetrating bean cell structures like a gas while dissolving caffeine like a liquid. The caffeine-laden CO2 flows to a separate chamber where pressure is reduced, causing caffeine to precipitate out. The CO2 is recycled and the process repeats.
      </p>

      <p className='my-4'>
        This method is highly selective for caffeine because supercritical CO2 at the typical operating parameters has poor affinity for sugars, proteins, and most other flavor-active compounds. The result is decaf coffee that retains more of its original flavor profile than any other method. However, the equipment is extremely expensive (a single extraction vessel can cost several million dollars), which limits the process to large-scale operations.
      </p>

      <p className='my-4'>
        The largest CO2 decaffeination plants are operated by CR3 (formerly Demus) in Italy and Coffein Compagnie in Germany.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Strengths:</span> Best flavor preservation of any method, no chemical residues, organic-compatible, CO2 is inert and endlessly recyclable, scalable for large volumes.
      </p>
      <p className='my-4'>
        <span className='font-bold'>Limitations:</span> Highest capital costs mean higher per-pound premiums ($1.00 to $2.00/lb), limited number of facilities globally, minimum lot sizes tend to be large (often 10+ metric tons), processing concentrated in Europe.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-3'>Ethyl Acetate (EA) / Sugarcane Process</h4>

      <p className='my-4'>
        Ethyl acetate is a naturally occurring ester found in fruits (including coffee cherries) and can be derived from sugarcane fermentation. In EA decaffeination, green beans are steamed to open their pores, then repeatedly washed in an ethyl acetate solution that bonds with caffeine molecules. After sufficient caffeine removal, the beans are steamed again to evaporate residual EA, then dried.
      </p>

      <p className='my-4'>
        EA decaffeination is primarily conducted in Colombia (by Descafecol, the largest operator) and in Brazil. When the EA is derived from sugarcane, marketers label it &quot;sugarcane process&quot; or &quot;natural decaf,&quot; which resonates with consumers looking for chemical-free options. Technically, EA is a chemical solvent regardless of its source, but the &quot;naturally derived&quot; framing has commercial value.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Strengths:</span> Lower cost ($0.50 to $0.90/lb premium), naturally derived solvent option, generally good flavor retention, facilities located in origin countries (reducing shipping for South American coffees), fast processing turnaround.
      </p>
      <p className='my-4'>
        <span className='font-bold'>Limitations:</span> Can leave a slight sweetness or &quot;fermented fruit&quot; note that some cuppers detect, EA residue must be below regulatory thresholds (typically well achieved), not all certifiers accept EA as &quot;natural,&quot; less effective on very high-altitude dense beans, no EA decaf facilities in East Africa.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-3'>Methylene Chloride (MC) Process</h4>

      <p className='my-4'>
        Methylene chloride (dichloromethane) is the most widely used decaffeination solvent globally. In the direct method, green beans are steamed and then repeatedly rinsed with MC, which bonds selectively with caffeine. The beans are then steamed again at high temperature (above MC&apos;s boiling point of 39.6&#176;C) to evaporate all residual solvent. In the indirect method, beans are soaked in water first; caffeine migrates into the water; MC is applied to the water to capture caffeine; the now-caffeine-free water is returned to the beans to reabsorb flavor compounds.
      </p>

      <p className='my-4'>
        MC decaffeination is common in Germany (where it was invented) and is used by major commercial processors. The FDA considers MC safe for decaffeination and sets a maximum residue limit of 10 parts per million (ppm) in the final product. In practice, commercial MC decaf coffee typically contains less than 1 ppm of residual solvent, well below regulatory limits. Despite the safety data, consumer perception of &quot;chemical solvents&quot; makes MC decaf harder to market in specialty and premium segments.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Strengths:</span> Lowest cost of all methods ($0.40 to $0.70/lb premium), widely available, fast processing, good caffeine selectivity.
      </p>
      <p className='my-4'>
        <span className='font-bold'>Limitations:</span> Consumer perception issues with chemical solvents, not compatible with organic certification, some specialty buyers and roasters refuse to stock MC decaf, potential for slight solvent-like off-notes if processing is not precise.
      </p>

      {/* COMPARISON TABLE */}
      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border border-gray-300 rounded-lg'>
          <thead className='bg-gray-100'>
            <tr>
              <th className='border border-gray-300 px-4 py-2 text-left font-bold'>Factor</th>
              <th className='border border-gray-300 px-4 py-2 text-left font-bold'>Swiss Water</th>
              <th className='border border-gray-300 px-4 py-2 text-left font-bold'>CO2</th>
              <th className='border border-gray-300 px-4 py-2 text-left font-bold'>EA / Sugarcane</th>
              <th className='border border-gray-300 px-4 py-2 text-left font-bold'>Methylene Chloride</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 px-4 py-2 font-semibold'>Solvent</td>
              <td className='border border-gray-300 px-4 py-2'>Water + carbon filters</td>
              <td className='border border-gray-300 px-4 py-2'>Supercritical CO2</td>
              <td className='border border-gray-300 px-4 py-2'>Ethyl acetate</td>
              <td className='border border-gray-300 px-4 py-2'>Dichloromethane</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-2 font-semibold'>Chemical-Free</td>
              <td className='border border-gray-300 px-4 py-2'>Yes</td>
              <td className='border border-gray-300 px-4 py-2'>Yes</td>
              <td className='border border-gray-300 px-4 py-2'>Derived from sugarcane (debatable)</td>
              <td className='border border-gray-300 px-4 py-2'>No</td>
            </tr>
            <tr>
              <td className='border border-gray-300 px-4 py-2 font-semibold'>Flavor Preservation</td>
              <td className='border border-gray-300 px-4 py-2'>Very good</td>
              <td className='border border-gray-300 px-4 py-2'>Excellent</td>
              <td className='border border-gray-300 px-4 py-2'>Good</td>
              <td className='border border-gray-300 px-4 py-2'>Good</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-2 font-semibold'>Cost Premium (per lb)</td>
              <td className='border border-gray-300 px-4 py-2'>$0.80 to $1.50</td>
              <td className='border border-gray-300 px-4 py-2'>$1.00 to $2.00</td>
              <td className='border border-gray-300 px-4 py-2'>$0.50 to $0.90</td>
              <td className='border border-gray-300 px-4 py-2'>$0.40 to $0.70</td>
            </tr>
            <tr>
              <td className='border border-gray-300 px-4 py-2 font-semibold'>Organic Compatible</td>
              <td className='border border-gray-300 px-4 py-2'>Yes</td>
              <td className='border border-gray-300 px-4 py-2'>Yes</td>
              <td className='border border-gray-300 px-4 py-2'>If naturally derived</td>
              <td className='border border-gray-300 px-4 py-2'>No</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-2 font-semibold'>Processing Location</td>
              <td className='border border-gray-300 px-4 py-2'>Canada (Burnaby, BC)</td>
              <td className='border border-gray-300 px-4 py-2'>Germany, Italy</td>
              <td className='border border-gray-300 px-4 py-2'>Colombia, Brazil</td>
              <td className='border border-gray-300 px-4 py-2'>Germany, global</td>
            </tr>
            <tr>
              <td className='border border-gray-300 px-4 py-2 font-semibold'>Minimum Lot Size</td>
              <td className='border border-gray-300 px-4 py-2'>Single bag possible</td>
              <td className='border border-gray-300 px-4 py-2'>10+ MT typical</td>
              <td className='border border-gray-300 px-4 py-2'>1+ MT typical</td>
              <td className='border border-gray-300 px-4 py-2'>1+ MT typical</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-2 font-semibold'>Lead Time</td>
              <td className='border border-gray-300 px-4 py-2'>4 to 8 weeks</td>
              <td className='border border-gray-300 px-4 py-2'>2 to 4 weeks</td>
              <td className='border border-gray-300 px-4 py-2'>1 to 3 weeks</td>
              <td className='border border-gray-300 px-4 py-2'>1 to 3 weeks</td>
            </tr>
            <tr>
              <td className='border border-gray-300 px-4 py-2 font-semibold'>Best For</td>
              <td className='border border-gray-300 px-4 py-2'>Specialty, organic, small lots</td>
              <td className='border border-gray-300 px-4 py-2'>High-volume specialty</td>
              <td className='border border-gray-300 px-4 py-2'>Cost-conscious specialty</td>
              <td className='border border-gray-300 px-4 py-2'>Commercial/commodity</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4 text-sm text-gray-600 italic'>
        Sources: Swiss Water Decaffeinated Coffee Inc., ICO Technical Paper (2021), Specialty Coffee Association processing guidelines. Cost premiums are indicative estimates based on industry averages and vary by volume, origin, and contract terms.
      </p>

      {/* SECTION 4 */}
      <h3 id="flavor-impact" className='text-2xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineSparkles className='text-amber-600' />
        How Decaffeination Affects Coffee Flavor
      </h3>

      <h4 className='text-xl font-bold mt-8 mb-3'>What Changes During Decaf Processing</h4>

      <p className='my-4'>
        Every decaffeination process alters green coffee to some degree. The question is how much and which compounds are affected. Understanding these changes helps importers set realistic expectations and choose lots that perform best after decaffeination.
      </p>

      <p className='my-4'>
        The most common flavor changes in decaf coffee include:
      </p>

      <ul className='list-disc pl-6 space-y-2 my-4'>
        <li><span className='font-bold'>Reduced acidity:</span> Decaffeination extracts some organic acids (citric, malic, chlorogenic) alongside caffeine. The result is a rounder, softer cup with less brightness. This effect is more pronounced in Swiss Water and MC processes than in CO2.</li>
        <li><span className='font-bold'>Muted aromatics:</span> Volatile aromatic precursors can be partially washed out during the soaking and steaming stages. Floral and fruit aromatics are typically the first to diminish.</li>
        <li><span className='font-bold'>Color change:</span> Decaf green beans are noticeably darker or more brown-green than their caffeinated counterparts. This is a result of steam exposure and cellular disruption. The color change is cosmetic but signals to roasters that the bean will behave differently in the drum.</li>
        <li><span className='font-bold'>Faster roast development:</span> Decaf beans are more porous and less dense after processing. They absorb heat faster, develop color quicker, and reach first crack earlier. Roasters must adjust charge temperatures and airflow to avoid rushing development and creating baked or ashy flavors.</li>
        <li><span className='font-bold'>Body and sweetness:</span> Well-processed decaf can retain substantial body and sweetness, particularly when CO2 or Swiss Water methods are used on high-quality green. Sugars and lipids, the main drivers of body and sweetness, are less affected by decaffeination than acids and volatiles.</li>
      </ul>

      <h4 className='text-xl font-bold mt-8 mb-3'>Why Process Selection Matters for Specialty</h4>

      <p className='my-4'>
        If you are buying decaf green coffee for a specialty program, the decaffeination method is as important as the origin and grade of the green coffee itself. A Grade 1 <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='underline font-bold'>Yirgacheffe</Link> processed via MC may cup lower than a Grade 2 Sidamo processed via CO2, because the MC process stripped more flavor complexity than the extra defects in the Grade 2 lot.
      </p>

      <p className='my-4'>
        As a practical rule: for any green coffee scoring 84+ points before decaffeination, choose Swiss Water or CO2 to protect your investment in quality. For coffees scoring 80 to 83, EA or MC may be adequate since the flavor gap between methods narrows as baseline quality decreases.
      </p>

      <div className='bg-gray-50 p-5 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold mb-2'>Roasting Tip for Decaf Green Coffee</h4>
        <p className='text-sm'>
          Drop your charge temperature 10 to 20&#176;F below what you would use for the same coffee in its caffeinated form. Extend development time by 15 to 30 seconds past first crack to allow Maillard reactions to compensate for the reduced acidity. Keep total roast time under 12 minutes for filter roasts and under 14 minutes for espresso. For more detail, see our <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='underline font-bold'>roasting Ethiopian coffee guide</Link>.
        </p>
      </div>

      {/* SECTION 5 */}
      <h3 id="sourcing" className='text-2xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineShoppingCart className='text-amber-600' />
        Decaf Green Coffee Sourcing for Importers
      </h3>

      <h4 className='text-xl font-bold mt-8 mb-3'>What to Look For in a Decaf Supplier</h4>

      <p className='my-4'>
        Sourcing decaf green coffee adds a layer of complexity compared to regular green. You are evaluating not just the origin and exporter but also the decaffeination facility and its processes. Here is what matters:
      </p>

      <ul className='list-disc pl-6 space-y-2 my-4'>
        <li><span className='font-bold'>Transparency on method:</span> A quality supplier will specify exactly which decaffeination process was used, not just &quot;decaf.&quot; If the supplier cannot tell you whether a lot is Swiss Water, CO2, EA, or MC, that is a red flag.</li>
        <li><span className='font-bold'>Pre- and post-decaf cupping scores:</span> Reputable decaf programs cup the green both before and after decaffeination. Ask for both scores. A 4 to 6 point drop is typical for Swiss Water/CO2; anything beyond 8 points suggests problems with the green selection or the decaf process itself.</li>
        <li><span className='font-bold'>Caffeine residue certification:</span> Every lot should come with a certificate showing the final caffeine content (as a percentage of dry weight). The target is below 0.1% for the EU market and below 0.3% for the US, though most quality processors achieve 0.01 to 0.06%.</li>
        <li><span className='font-bold'>Traceability to origin:</span> The best decaf programs use single-origin, traceable green coffee as their base. Blended, untraced green fed into a decaf facility is a commodity play, not a specialty one. Ask for the origin lot details: region, process, grade, and harvest year.</li>
        <li><span className='font-bold'>Sample availability:</span> As with any green coffee purchase, <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='underline font-bold'>cup a pre-shipment sample</Link> before committing to volume. Decaf samples are even more important than regular green because the decaf process introduces variability that origin alone does not predict.</li>
      </ul>

      <h4 className='text-xl font-bold mt-8 mb-3'>Pricing and Premiums</h4>

      <p className='my-4'>
        Decaf green coffee costs more than its caffeinated equivalent because of the added processing step, the logistics of shipping green to a decaffeination facility and back, and the weight loss inherent in the process (beans lose 15 to 20% of their weight during decaffeination due to moisture changes and caffeine/compound extraction).
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border border-gray-300 rounded-lg'>
          <thead className='bg-gray-100'>
            <tr>
              <th className='border border-gray-300 px-4 py-2 text-left font-bold'>Cost Component</th>
              <th className='border border-gray-300 px-4 py-2 text-left font-bold'>Typical Range</th>
              <th className='border border-gray-300 px-4 py-2 text-left font-bold'>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 px-4 py-2'>Base green coffee (FOB)</td>
              <td className='border border-gray-300 px-4 py-2'>$3.00 to $7.00/lb</td>
              <td className='border border-gray-300 px-4 py-2'>Varies by origin, grade, <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='underline'>certification</Link></td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-2'>Decaf processing fee</td>
              <td className='border border-gray-300 px-4 py-2'>$0.40 to $2.00/lb</td>
              <td className='border border-gray-300 px-4 py-2'>Depends on method (see table above)</td>
            </tr>
            <tr>
              <td className='border border-gray-300 px-4 py-2'>Weight loss (15 to 20%)</td>
              <td className='border border-gray-300 px-4 py-2'>$0.45 to $1.40/lb</td>
              <td className='border border-gray-300 px-4 py-2'>You pay for green that becomes decaf at lower yield</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-2'>Extra freight (to/from facility)</td>
              <td className='border border-gray-300 px-4 py-2'>$0.05 to $0.20/lb</td>
              <td className='border border-gray-300 px-4 py-2'>Distance to decaf plant matters</td>
            </tr>
            <tr>
              <td className='border border-gray-300 px-4 py-2 font-bold'>Total landed cost (decaf)</td>
              <td className='border border-gray-300 px-4 py-2 font-bold'>$3.90 to $10.60/lb</td>
              <td className='border border-gray-300 px-4 py-2'>vs. $3.00 to $7.00 for caffeinated equivalent</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Retail pricing for specialty decaf typically runs 10 to 30% above the same coffee in caffeinated form. Consumers are increasingly willing to pay this premium when the quality justifies it. The ROI on a decaf program depends on whether you can communicate the value of your decaf method and origin story to end consumers.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-3'>Certifications and Labeling</h4>

      <p className='my-4'>
        Certification compatibility varies by decaf method. If your decaf program requires <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='underline font-bold'>organic certification</Link>, only Swiss Water and CO2 processes are universally accepted. EA is accepted by some certifiers if derived from organic sugarcane. MC is not compatible with any organic certification.
      </p>

      <p className='my-4'>
        Labeling regulations require that decaffeinated coffee meet specific caffeine thresholds. In the EU, roasted decaf must contain no more than 0.10% caffeine by dry weight. In the U.S., there is no federal standard, but the industry uses 97% caffeine removal as the benchmark, which typically leaves 0.02 to 0.08% caffeine. Japan follows Codex standards (0.1% maximum). Always confirm the regulatory requirements for your target market with your <Link href='/insights/how-to-import-ethiopian-coffee-to-usa' className='underline font-bold'>import compliance team</Link>.
      </p>

      {/* SECTION 6 */}
      <h3 id="ethiopian-decaf" className='text-2xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineCurrencyDollar className='text-amber-600' />
        Ethiopian Decaf Coffee: Origin Advantage
      </h3>

      <h4 className='text-xl font-bold mt-8 mb-3'>Why Ethiopian Coffees Excel in Decaf</h4>

      <p className='my-4'>
        Ethiopian coffees bring three structural advantages to decaffeination that most other origins cannot match:
      </p>

      <p className='my-4'>
        <span className='font-bold'>1. Genetic diversity provides flavor resilience.</span> Ethiopia is home to over 6,000 <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='underline font-bold'>heirloom coffee varieties</Link>, each with distinct chemical profiles. This diversity means Ethiopian green has a deeper reservoir of aromatic compounds than genetically narrow origins like those planted with Castillo, Caturra, or Catuai alone. When decaffeination removes some aroma precursors, Ethiopian coffees have more to give before the cup becomes flat.
      </p>

      <p className='my-4'>
        <span className='font-bold'>2. Intense origin character survives processing.</span> A washed <Link href='/insights/guide-ethiopian-coffee-origins' className='underline font-bold'>Yirgacheffe</Link> with jasmine, bergamot, and stone fruit notes will lose some intensity through decaffeination but still present recognizable origin character in the cup. Many single-origin decaf coffees from other origins taste generic after processing. Ethiopian coffees rarely do, because their starting point is so distinctly pronounced.
      </p>

      <p className='my-4'>
        <span className='font-bold'>3. Natural processed Ethiopians add sweetness that compensates for decaf&apos;s acidity loss.</span> One of decaffeination&apos;s most common flavor effects is reduced brightness. Ethiopian <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='underline font-bold'>natural process coffees</Link>, with their inherent berry sweetness and full body, compensate well. A natural Guji or Sidamo that loses some acidity during Swiss Water or CO2 processing still presents a rich, sweet, fruit-forward cup that tastes like specialty coffee, not a compromise.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-3'>Availability and Current Options</h4>

      <p className='my-4'>
        Ethiopian decaf green coffee is available primarily through two channels:
      </p>

      <ul className='list-disc pl-6 space-y-2 my-4'>
        <li><span className='font-bold'>Swiss Water decaf via importers:</span> Several North American and European importers offer Ethiopian single-origin decaf, typically Yirgacheffe or Guji, processed via Swiss Water in Canada. These lots are usually available in small quantities (10 to 50 bags) and presented with full traceability back to the cooperative or washing station. Expect landed costs of $5.50 to $9.00 per pound depending on grade and vintage.</li>
        <li><span className='font-bold'>CO2 decaf via European processors:</span> Ethiopian green coffee shipped to Germany or Italy for CO2 decaffeination is available through specialty traders. Lot sizes tend to be larger (100+ bags), and the coffees are often blended post-decaf. For single-origin Ethiopian CO2 decaf, you may need to contract the decaffeination separately, buying green from an <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='underline font-bold'>Ethiopian exporter</Link> and routing it to a CO2 facility yourself.</li>
      </ul>

      <p className='my-4'>
        There are currently no commercial decaffeination facilities in Ethiopia. All Ethiopian decaf is processed offshore, which adds transit time and cost. Industry discussions about establishing African decaf processing capacity have been ongoing since 2020, but no facility has materialized. For importers, this means planning longer supply chain timelines: 2 to 4 weeks of ocean freight from Djibouti, 4 to 8 weeks for decaf processing, plus final delivery. Total pipeline from order to warehouse receipt can be 3 to 5 months.
      </p>

      <div className='bg-gray-50 p-5 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold mb-2 flex items-center gap-2'>
          <HiOutlineCheckCircle className='text-amber-600' />
          Ethiopian Regions Best Suited for Decaf Programs
        </h4>
        <ul className='space-y-2 text-sm'>
          <li>&bull; <span className='font-bold'>Yirgacheffe (Washed):</span> Floral and citrus notes survive Swiss Water and CO2 processing well. The resulting decaf is clean, sweet, with residual jasmine and lemon character. Best for filter roasts.</li>
          <li>&bull; <span className='font-bold'>Guji (Natural):</span> Berry and stone fruit sweetness compensates for acidity loss. Produces a full-bodied decaf with blueberry and chocolate notes. Works for both filter and espresso.</li>
          <li>&bull; <span className='font-bold'>Sidamo (Natural or Washed):</span> Balanced body and mild fruit notes translate well into decaf. A safe, versatile choice for blends or single-origin offerings.</li>
          <li>&bull; <span className='font-bold'>Limu (Washed):</span> Lower acidity to begin with means less flavor loss from decaffeination. Clean, wine-like profile makes a smooth decaf.</li>
        </ul>
      </div>

      {/* FAQ SECTION */}
      <section id="faq" className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200 mt-10">
        <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
          <HiOutlineQuestionMarkCircle className='text-amber-600' />
          Frequently Asked Questions About Decaf Green Coffee
        </h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How is decaf coffee made?</h4>
            <p className="text-sm text-gray-600">Decaf coffee is made by extracting caffeine from green (unroasted) coffee beans using one of four methods: Swiss Water Process (water and carbon filters), supercritical CO2 (pressurized carbon dioxide), ethyl acetate (a solvent derived from sugarcane or synthetic sources), or methylene chloride (a chemical solvent). All methods begin by moistening the beans to make caffeine accessible, then applying a solvent to extract it, and finally re-drying the beans. Decaffeination always occurs before roasting.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Does decaf coffee have caffeine?</h4>
            <p className="text-sm text-gray-600">Yes, small amounts. Decaf coffee is not caffeine-free. A standard 8 oz cup of decaf contains 2 to 15 mg of caffeine, compared to 80 to 100 mg in regular coffee. International standards require decaf to have no more than 0.1% caffeine by dry weight (EU) or 97% of original caffeine removed (U.S. industry standard). For most consumers, the remaining caffeine is physiologically insignificant.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What is the best decaf process for flavor quality?</h4>
            <p className="text-sm text-gray-600">Supercritical CO2 and Swiss Water Process preserve the most flavor complexity. CO2 is the most selective, removing caffeine while leaving sugars, lipids, and most aromatic compounds intact. Swiss Water is close behind, with slightly more acidity loss but excellent overall cup quality. For specialty coffees scoring 84+ points, these two methods are strongly recommended over EA or MC.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Is Swiss Water decaf chemical-free?</h4>
            <p className="text-sm text-gray-600">Yes. The Swiss Water Process uses only water and activated carbon filters. No chemical solvents are used at any stage. This makes it compatible with organic certification and appealing to health-conscious consumers. It is the only decaf method that can truthfully claim &quot;100% chemical-free&quot; without qualification.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Why is decaf coffee more expensive?</h4>
            <p className="text-sm text-gray-600">Decaf green coffee costs more because of the added processing step ($0.40 to $2.00 per pound depending on method), weight loss during decaffeination (15 to 20% of bean mass), and extra freight to and from the decaffeination facility. For a specialty Ethiopian coffee, total decaf processing adds $1.00 to $3.50 per pound to the landed cost. Retail decaf prices typically run 10 to 30% above caffeinated equivalents.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Can Ethiopian coffee be decaffeinated?</h4>
            <p className="text-sm text-gray-600">Yes. Ethiopian green coffee is decaffeinated at offshore facilities, typically via Swiss Water Process in Canada or supercritical CO2 in Germany and Italy. There are no decaf processing plants in Ethiopia. Ethiopian coffees perform exceptionally well in decaf because their intense origin character (floral, fruit, citrus) has enough aromatic depth to survive the flavor reduction that decaffeination causes. Washed Yirgacheffe and natural Guji are the most popular Ethiopian decaf origins.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How should decaf green coffee be stored?</h4>
            <p className="text-sm text-gray-600">Store decaf green beans the same way you store regular green: 15 to 25&#176;C, 50 to 65% relative humidity, on pallets away from walls and light. Decaf green is slightly more porous and absorbs moisture faster than untreated green, so hermetic packaging (GrainPro, Ecotact, or vacuum) is even more important. Use decaf inventory within 6 to 9 months of decaf processing for best cup quality. See our <Link href='/insights/green-coffee-shelf-life-storage-guide' className='underline font-bold'>green coffee storage guide</Link> for detailed protocols.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Is decaf coffee healthy?</h4>
            <p className="text-sm text-gray-600">Decaf coffee retains most of the health-associated compounds found in regular coffee, including antioxidants and chlorogenic acids. Research published in the British Medical Journal (2017) and Annals of Internal Medicine (2022) found that coffee consumption, including decaf, was associated with lower all-cause mortality. For people sensitive to caffeine, with anxiety disorders, or who are pregnant, decaf coffee provides the taste and social experience of coffee with minimal stimulant effects.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Premium Ethiopian Coffee Direct from Origin</h4>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Import and Export PLC</span>, a trusted Ethiopian coffee exporter, supplies traceable specialty green coffee from Yirgacheffe, Sidamo, Guji, Harrar, and Limu, perfectly suited for decaf programs. We provide pre-shipment samples, cupping scores, full lot documentation, and guidance on routing your green to Swiss Water or CO2 decaffeination facilities. Contact us to discuss your decaf sourcing needs.
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
            <h4 className='font-semibold mb-2 text-sm'>Quality &amp; Processing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee Processing</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality Control: Defects &amp; Grading</Link></li>
              <li>&bull; <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup and Evaluate Ethiopian Samples</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline'>Green Coffee Shelf Life: Storage Guide for Buyers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origins &amp; Varieties</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Green Coffee Origins</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Heirloom Ethiopian Coffee Varieties</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Pricing for Importers</Link></li>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/certified-organic-coffee-bean-exporters-bulk-orders' className='text-amber-700 hover:underline'>Certified Organic Coffee Exporters: Bulk Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Certifications &amp; Compliance</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Ethiopian Coffee Certifications Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC. This guide is based on published research from the International Coffee Organization, Swiss Water Decaffeinated Coffee Inc., the Specialty Coffee Association, and practical experience in Ethiopian green coffee export. Decaffeination technology and pricing evolve; contact us for current sourcing options and recommendations.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot; <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> &middot; <Link href='/about' className='underline'>About Ethio Coffee</Link> &middot; <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

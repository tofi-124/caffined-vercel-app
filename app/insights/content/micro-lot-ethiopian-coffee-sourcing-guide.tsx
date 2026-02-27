import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineQuestionMarkCircle,
  HiOutlineMapPin,
  HiOutlineCurrencyDollar,
  HiOutlineMagnifyingGlass,
  HiOutlineBeaker,
  HiOutlineTruck,
  HiOutlineDocumentCheck,
  HiOutlineScale,
  HiOutlineArrowTrendingUp,
  HiOutlineBuildingStorefront
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function MicroLotEthiopianCoffeeSourcingGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        What Ethiopian micro lots are, how they differ from standard specialty lots, where to find them, what they cost, and how to build a reliable micro-lot sourcing program from origin.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Ethiopian micro-lot coffees represent the highest tier of specialty green beans, traceable to a single farm, washing station, or specific harvest day within a defined growing area.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian micro-lot green coffee beans drying on raised beds at a specialty washing station in Guji zone'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Specialty Coffee / Micro-Lot Sourcing / Green Coffee Buying / Importer Resources</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Key Takeaway:</span> Micro-lot Ethiopian coffee refers to small, traceable lots (typically 5 to 50 bags) from a single farm, washing station, or specific harvest day, scoring 86 or above on the SCA scale. Ethiopian micro lots command FOB prices of $6.60 to $13.20+ per kilogram, a 30% to 100%+ premium over standard specialty grades. They bypass the Ethiopian Commodity Exchange (ECX) and move through direct export channels, giving buyers access to full traceability, cupping data, and producer information. The key origins are Yirgacheffe, Guji, and Sidamo, with rising interest in Harar and Limu for experimental processing. Securing the best lots requires advance commitment, pre-season relationships, and sample evaluation during harvest windows (November through February).</span>
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href="#what-is-micro-lot" className='text-amber-700 hover:underline'>1. What Is a Micro-Lot Coffee?</a></li>
          <li><a href="#micro-lot-vs-single-origin" className='text-amber-700 hover:underline'>2. Micro Lot vs. Single Origin vs. Standard Specialty</a></li>
          <li><a href="#why-ethiopia" className='text-amber-700 hover:underline'>3. Why Ethiopia Produces Exceptional Micro Lots</a></li>
          <li><a href="#best-origins" className='text-amber-700 hover:underline'>4. Best Ethiopian Origins for Micro Lots</a></li>
          <li><a href="#pricing" className='text-amber-700 hover:underline'>5. Micro-Lot Pricing: What Buyers Should Expect</a></li>
          <li><a href="#how-to-source" className='text-amber-700 hover:underline'>6. How to Source Micro-Lot Coffee from Ethiopia</a></li>
          <li><a href="#evaluating-quality" className='text-amber-700 hover:underline'>7. Evaluating Micro-Lot Quality</a></li>
          <li><a href="#logistics" className='text-amber-700 hover:underline'>8. Logistics and Minimum Orders</a></li>
          <li><a href="#faq" className='text-amber-700 hover:underline'>9. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRODUCTION */}
      <p className='my-4'>
        <span className='font-bold'>Micro-lot Ethiopian coffee</span> has become one of the most sought-after categories in specialty green coffee buying. Roasters and importers worldwide compete for small, traceable lots from individual farms and washing stations across Ethiopia&apos;s prime growing regions. These lots score 86 or higher on the SCA cupping scale, offer distinctive flavor profiles that standard blends cannot replicate, and carry the kind of detailed provenance information that today&apos;s specialty consumers demand.
      </p>

      <p className='my-4'>
        Yet sourcing micro lots from Ethiopia is not as simple as placing an order. Most of these coffees move outside the <Link href='/insights/ecx-and-ethiopian-coffee-export' className='underline font-bold'>Ethiopian Commodity Exchange</Link>, through direct relationships between exporters, washing stations, and individual farmers. Availability is seasonal and limited. The best lots sell out weeks before they ship. Buyers who understand the sourcing process, timing, and pricing structure secure better coffee at more competitive terms than those who approach the market cold.
      </p>

      <p className='my-4'>
        This guide explains what defines a micro lot in the Ethiopian context, which origins produce the best ones, how pricing works, and the step-by-step process to build a reliable micro-lot sourcing program. It is written for importers, roasters, and green coffee traders who want to add Ethiopian micro lots to their programs or strengthen existing sourcing relationships.
      </p>

      {/* SECTION 1 */}
      <h2 id="what-is-micro-lot" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineMagnifyingGlass className='text-amber-600' />
        What Is a Micro-Lot Coffee?
      </h2>

      <p className='my-4'>
        A micro lot is a small, separately processed quantity of coffee that is fully traceable to a specific origin point and isolated from other production lots. The term is not formally regulated by the SCA or any international body, which means definitions vary across the supply chain. Farmers, processors, exporters, and importers each apply the label differently.
      </p>

      <p className='my-4'>
        In the Ethiopian specialty trade, a micro lot typically meets these criteria:
      </p>

      <ul className='list-disc pl-6 space-y-2 my-4'>
        <li><span className='font-bold'>Volume:</span> 5 to 50 bags (300 to 3,000 kg), though some lots can be as small as 10 bags. Ethiopian standard bags hold 60 kg each.</li>
        <li><span className='font-bold'>Traceability:</span> Traceable to a single washing station, specific harvest day, individual farm, or farmer group. This goes beyond the woreda-level identification that standard ECX lots carry.</li>
        <li><span className='font-bold'>Quality:</span> SCA cupping score of 86 or above. Many Ethiopian micro lots reach 88 to 92+, placing them in the &quot;outstanding&quot; category.</li>
        <li><span className='font-bold'>Processing:</span> Processed separately from other lots at the washing station, often with experimental or carefully controlled methods (extended fermentation, anaerobic natural, honey process).</li>
        <li><span className='font-bold'>Documentation:</span> Accompanied by a cupping report, lot card, producer information, and often GPS coordinates or farm mapping data.</li>
      </ul>

      <p className='my-4'>
        The distinction between a micro lot and a standard specialty lot is not just volume. It is the level of isolation, traceability, and quality control applied throughout processing. A 200-bag lot of Yirgacheffe G1 is excellent specialty coffee. A 15-bag lot from a specific farmer group in Kochere, processed on a single day and dried on dedicated raised beds, is a micro lot. Both are high quality. The micro lot offers exclusivity, repeatability (within that season), and a story traceable to its source.
      </p>

      <p className='my-4'>
        Some industry sources define &quot;nano lots&quot; as even smaller separations (under 5 bags), often from competition-winning farms or single-day harvests. These command the highest premiums but are relevant primarily to specialty roasters running limited-edition programs.
      </p>

      {/* SECTION 2 */}
      <h2 id="micro-lot-vs-single-origin" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineScale className='text-amber-600' />
        Micro Lot vs. Single Origin vs. Standard Specialty
      </h2>

      <p className='my-4'>
        Buyers often group these terms together, but they describe different tiers of specificity and quality. Understanding the distinction is essential for pricing, marketing, and purchasing decisions.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200 overflow-x-auto'>
        <table className='w-full text-sm'>
          <thead>
            <tr className='border-b-2 border-gray-300'>
              <th className='text-left py-2 px-3'>Attribute</th>
              <th className='text-left py-2 px-3'>Standard Specialty</th>
              <th className='text-left py-2 px-3'>Single Origin</th>
              <th className='text-left py-2 px-3'>Micro Lot</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-100'>
              <td className='py-2 px-3 font-bold'>Typical Volume</td>
              <td className='py-2 px-3'>100+ bags</td>
              <td className='py-2 px-3'>50-200 bags</td>
              <td className='py-2 px-3'>5-50 bags</td>
            </tr>
            <tr className='border-b border-gray-100'>
              <td className='py-2 px-3 font-bold'>Traceability</td>
              <td className='py-2 px-3'>Region (e.g., Sidamo)</td>
              <td className='py-2 px-3'>Woreda or washing station</td>
              <td className='py-2 px-3'>Farm, lot, harvest day</td>
            </tr>
            <tr className='border-b border-gray-100'>
              <td className='py-2 px-3 font-bold'>Cupping Score</td>
              <td className='py-2 px-3'>80-85</td>
              <td className='py-2 px-3'>84-87</td>
              <td className='py-2 px-3'>86-92+</td>
            </tr>
            <tr className='border-b border-gray-100'>
              <td className='py-2 px-3 font-bold'>FOB Price ($/kg)</td>
              <td className='py-2 px-3'>$5.20-$7.50</td>
              <td className='py-2 px-3'>$7.00-$10.00</td>
              <td className='py-2 px-3'>$9.00-$13.20+</td>
            </tr>
            <tr className='border-b border-gray-100'>
              <td className='py-2 px-3 font-bold'>Processing</td>
              <td className='py-2 px-3'>Standard washed/natural</td>
              <td className='py-2 px-3'>Controlled, documented</td>
              <td className='py-2 px-3'>Isolated, experimental</td>
            </tr>
            <tr className='border-b border-gray-100'>
              <td className='py-2 px-3 font-bold'>Export Channel</td>
              <td className='py-2 px-3'>ECX or direct</td>
              <td className='py-2 px-3'>ECX or direct</td>
              <td className='py-2 px-3'>Direct trade only</td>
            </tr>
            <tr className='border-b border-gray-100'>
              <td className='py-2 px-3 font-bold'>Buyer Profile</td>
              <td className='py-2 px-3'>Commercial roasters</td>
              <td className='py-2 px-3'>Specialty roasters</td>
              <td className='py-2 px-3'>High-end specialty, competition</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        For a deeper comparison of Ethiopian flavor profiles across origins, see our <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='underline font-bold'>Yirgacheffe vs. Sidamo vs. Guji comparison</Link>. That article covers the broader regional profiles, while this guide focuses on how micro-lot sourcing extracts the best from each origin.
      </p>

      {/* SECTION 3 */}
      <h2 id="why-ethiopia" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineMapPin className='text-amber-600' />
        Why Ethiopia Produces Exceptional Micro Lots
      </h2>

      <p className='my-4'>
        Ethiopia holds a unique position in the micro-lot market for reasons that go beyond its status as the birthplace of Arabica coffee. Several structural and biological factors make Ethiopian micro lots distinct from those of any other origin.
      </p>

      <h3 className='text-xl font-bold mt-6'>Unmatched Genetic Diversity</h3>
      <p className='my-4'>
        Ethiopia is home to over 10,000 identified coffee <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='underline font-bold'>heirloom varieties and landraces</Link>, compared to the handful of cultivars (Bourbon, Typica, Caturra, Catuai) that dominate Latin American and East African production. This genetic diversity produces an extraordinary range of flavor profiles, even within a single washing station catchment area. A micro lot from Kochere tastes different from one in Chelelectu, 30 kilometers away, because the genetic material, microclimate, and soil are all distinct.
      </p>

      <h3 className='text-xl font-bold mt-6'>Smallholder Farm Structure</h3>
      <p className='my-4'>
        Over 5 million farming households grow coffee in Ethiopia, most on plots of less than 2 hectares. This fragmented structure creates natural micro lots. A single farmer&apos;s annual production may be only 5 to 20 bags. When a washing station separates cherry intake by farmer group, harvest day, or quality tier, the resulting lot is inherently small and traceable. Ethiopia does not have the large estates common in Brazil or Colombia that produce thousands of bags of uniform coffee.
      </p>

      <h3 className='text-xl font-bold mt-6'>Altitude and Microclimate Variation</h3>
      <p className='my-4'>
        Ethiopian coffee grows at 1,400 to 2,300 meters above sea level. Within a single woreda (district), altitude can vary by 500 meters or more. Higher altitudes produce slower cherry maturation, denser beans, and more complex acidity. A washing station sourcing from farmers at 2,100 meters will process differently flavored coffee than one at 1,600 meters in the same zone. This natural variation is the raw material for micro-lot differentiation.
      </p>

      <h3 className='text-xl font-bold mt-6'>Growing Investment in Processing Innovation</h3>
      <p className='my-4'>
        Ethiopian washing stations have invested heavily in processing experimentation since 2018. Extended fermentation, anaerobic naturals, and honey processing are now standard at progressive stations in Guji, Yirgacheffe, and parts of Sidamo. Some stations run 10 to 15 different processing experiments per season, each producing a distinct micro lot. The <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='underline font-bold'>washed vs. natural processing methods</Link> article covers the fundamentals, but micro-lot programs push well beyond these two categories.
      </p>

      {/* SECTION 4 */}
      <h2 id="best-origins" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineMapPin className='text-amber-600' />
        Best Ethiopian Origins for Micro Lots
      </h2>

      <p className='my-4'>
        All six major Ethiopian coffee origins produce micro lots, but three dominate the category in terms of international recognition, auction performance, and buyer demand.
      </p>

      <h3 className='text-xl font-bold mt-6'>Yirgacheffe: The Benchmark</h3>
      <p className='my-4'>
        <Link href='/ethiopian-coffee-yirgacheffe' className='underline font-bold'>Yirgacheffe</Link> remains the reference point for Ethiopian micro lots. The Gedeo zone contains some of the most famous washing stations in the world: Konga, Chelelectu, Aricha, Halo Beriti, Kochere, and Dumerso. Washed Yirgacheffe micro lots are known for jasmine, bergamot, lemon zest, and black tea complexity. Natural processed lots add stone fruit and tropical sweetness. Cupping scores of 88 to 92 are common for top micro lots. Altitude ranges from 1,750 to 2,200 meters.
      </p>

      <h3 className='text-xl font-bold mt-6'>Guji: The Rising Star</h3>
      <p className='my-4'>
        <Link href='/ethiopian-coffee-guji' className='underline font-bold'>Guji zone</Link> has produced more competition-winning lots in recent years than any other Ethiopian origin. The Shakiso, Uraga, and Hambela sub-regions offer intense peach, apricot, and jasmine notes in natural processed lots. Guji micro lots frequently score 87 to 90+. The zone&apos;s higher average altitude (1,800 to 2,300 meters) and newer processing infrastructure make it a hotspot for experimental lots. In September 2025, a Guji lot sold for a record $1,739 per kilogram at the &quot;Echoes of the Peak&quot; auction, according to <a href='https://addisinsight.net/2025/09/12/ethiopian-coffee-hits-1739-per-kilo-in-record-breaking-auction/' className='underline' target='_blank' rel='noopener noreferrer'>Addis Insight</a>.
      </p>

      <h3 className='text-xl font-bold mt-6'>Sidamo: Depth and Consistency</h3>
      <p className='my-4'>
        <Link href='/ethiopian-coffee-sidamo' className='underline font-bold'>Sidamo</Link> covers a vast area with significant sub-regional variation. The Bensa, Nensebo, and Dale districts are the primary micro-lot zones. Natural Sidamo micro lots are recognized for blueberry, strawberry, wine, and dark chocolate notes. The region&apos;s cooperative structure (many washing stations are cooperative-owned) makes it possible to source farmer-identified lots with strong traceability. FOB prices for Sidamo micro lots range from $9.00 to $12.00 per kilogram.
      </p>

      <h3 className='text-xl font-bold mt-6'>Emerging Micro-Lot Origins</h3>
      <p className='my-4'>
        <Link href='/ethiopian-coffee-harar' className='underline font-bold'>Harar</Link> is gaining attention for its unique dry-processed micro lots with pronounced dried fruit, wine, and spice characteristics. <Link href='/ethiopian-coffee-limu' className='underline font-bold'>Limu</Link> offers clean washed micro lots with bright acidity at competitive prices. Both origins present opportunities for buyers willing to work with less established supply chains in exchange for distinctive profiles and lower competition.
      </p>

      {/* SECTION 5 */}
      <h2 id="pricing" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineCurrencyDollar className='text-amber-600' />
        Micro-Lot Pricing: What Buyers Should Expect
      </h2>

      <p className='my-4'>
        Micro-lot Ethiopian coffee carries a significant premium over standard specialty grades. This premium reflects the additional labor, processing care, smaller batch sizes, and quality risk (not every experiment succeeds) that go into producing these lots. Understanding the pricing structure helps buyers negotiate effectively and set realistic retail margins.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200 overflow-x-auto'>
        <table className='w-full text-sm'>
          <thead>
            <tr className='border-b-2 border-gray-300'>
              <th className='text-left py-2 px-3'>Category</th>
              <th className='text-left py-2 px-3'>FOB Price ($/kg)</th>
              <th className='text-left py-2 px-3'>FOB Price ($/lb)</th>
              <th className='text-left py-2 px-3'>Typical Score</th>
              <th className='text-left py-2 px-3'>Premium vs. Standard</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-100'>
              <td className='py-2 px-3 font-bold'>Commercial grade (G3-G5)</td>
              <td className='py-2 px-3'>$3.50-$5.00</td>
              <td className='py-2 px-3'>$1.59-$2.27</td>
              <td className='py-2 px-3'>75-80</td>
              <td className='py-2 px-3'>Baseline</td>
            </tr>
            <tr className='border-b border-gray-100'>
              <td className='py-2 px-3 font-bold'>Standard specialty (G1-G2)</td>
              <td className='py-2 px-3'>$5.20-$7.50</td>
              <td className='py-2 px-3'>$2.36-$3.40</td>
              <td className='py-2 px-3'>80-85</td>
              <td className='py-2 px-3'>+30-50%</td>
            </tr>
            <tr className='border-b border-gray-100'>
              <td className='py-2 px-3 font-bold'>Single origin specialty</td>
              <td className='py-2 px-3'>$7.00-$10.00</td>
              <td className='py-2 px-3'>$3.18-$4.54</td>
              <td className='py-2 px-3'>84-87</td>
              <td className='py-2 px-3'>+50-80%</td>
            </tr>
            <tr className='border-b border-gray-100'>
              <td className='py-2 px-3 font-bold'>Micro lot</td>
              <td className='py-2 px-3'>$9.00-$13.20+</td>
              <td className='py-2 px-3'>$4.08-$5.99+</td>
              <td className='py-2 px-3'>86-90+</td>
              <td className='py-2 px-3'>+80-150%+</td>
            </tr>
            <tr className='border-b border-gray-100'>
              <td className='py-2 px-3 font-bold'>Competition/auction lot</td>
              <td className='py-2 px-3'>$15.00-$50.00+</td>
              <td className='py-2 px-3'>$6.80-$22.68+</td>
              <td className='py-2 px-3'>90+</td>
              <td className='py-2 px-3'>+200-800%+</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Several factors influence where a specific micro lot falls within the price range:
      </p>

      <ul className='list-disc pl-6 space-y-2 my-4'>
        <li><span className='font-bold'>Cupping score:</span> Each point above 86 adds approximately $0.20 to $0.50 per kilogram. A 90-point lot commands significantly more than an 86-point lot from the same station.</li>
        <li><span className='font-bold'>Origin reputation:</span> Yirgacheffe and Guji micro lots carry a name premium. Equivalent quality from less recognized zones (Jimma, Limu) may cost 10 to 20% less.</li>
        <li><span className='font-bold'>Processing method:</span> Experimental processes (anaerobic, extended fermentation) often add $0.50 to $1.50 per kilogram over standard washed or natural processing.</li>
        <li><span className='font-bold'>Certifications:</span> Organic and Fair Trade certified micro lots add $0.30 to $0.80 per kilogram. See our <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='underline font-bold'>certifications guide</Link> for details.</li>
        <li><span className='font-bold'>Season timing:</span> Early-season lots (November to December) often carry slight premiums due to peak cherry quality. Late-season lots may be priced more competitively.</li>
      </ul>

      <p className='my-4'>
        For a complete breakdown of Ethiopian FOB pricing mechanics, including how contracts are structured, see our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='underline font-bold'>Ethiopian coffee pricing guide for importers</Link>.
      </p>

      {/* SECTION 6 */}
      <h2 id="how-to-source" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineBuildingStorefront className='text-amber-600' />
        How to Source Micro-Lot Coffee from Ethiopia
      </h2>

      <p className='my-4'>
        Sourcing Ethiopian micro lots requires a different approach than buying standard specialty coffee. Lots are small, seasonal, and competitive. Here is the step-by-step process that experienced buyers follow.
      </p>

      <h3 className='text-xl font-bold mt-6'>Step 1: Identify the Right Export Partner</h3>
      <p className='my-4'>
        Micro lots bypass the ECX and move through licensed exporters with direct washing station relationships. Not all Ethiopian exporters offer micro lots. You need a partner who (a) owns or has exclusive arrangements with quality-focused washing stations, (b) has Q-graded cupping capabilities, (c) can provide full lot documentation, and (d) communicates transparently about availability and pricing. Our guide on <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='underline font-bold'>choosing an Ethiopian coffee export company</Link> covers the due diligence process in detail.
      </p>

      <h3 className='text-xl font-bold mt-6'>Step 2: Establish Your Requirements Early</h3>
      <p className='my-4'>
        Contact your preferred exporter before harvest season begins (September to October for the main Ethiopian harvest). Specify your target: origin preferences, processing methods, minimum cupping score, volume range, budget ceiling, and any certification requirements. Exporters who know your parameters can flag matching lots as they come through cupping. Waiting until January or February to start looking means the best lots are already committed.
      </p>

      <h3 className='text-xl font-bold mt-6'>Step 3: Request and Evaluate Samples</h3>
      <p className='my-4'>
        Serious micro-lot sourcing involves evaluating multiple samples before committing. Request offer samples (pre-shipment type samples, 100g to 500g) for lots that match your specifications. Cup them systematically using SCA protocols. Our <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='underline font-bold'>cupping and evaluation guide</Link> outlines the complete process. Compare the samples against your existing program needs: Does this lot fill a gap? Will it perform well for your target use (filter, espresso, blend component)?
      </p>

      <h3 className='text-xl font-bold mt-6'>Step 4: Commit and Contract</h3>
      <p className='my-4'>
        Once you identify lots you want, move quickly. Popular micro lots sell within days of being offered. Contracts for Ethiopian micro lots typically require a 30% to 50% deposit, with the balance due against shipping documents. Payment terms, shipping timelines, and quality guarantees should be specified in writing. For full contract guidance, see our <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='underline font-bold'>contracts and payment terms guide</Link>.
      </p>

      <h3 className='text-xl font-bold mt-6'>Step 5: Verify Quality at Arrival</h3>
      <p className='my-4'>
        Cup the arrival sample against the pre-shipment sample. Micro lots should show minimal variation if storage and <Link href='/insights/specialty-coffee-storage-freight-logistics' className='underline font-bold'>freight logistics</Link> were handled correctly. Any significant deviation (more than 1 to 2 points on a cupping score) warrants a conversation with your exporter. Established exporters will resolve legitimate quality concerns through replacement or credit.
      </p>

      {/* SECTION 7 */}
      <h2 id="evaluating-quality" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineBeaker className='text-amber-600' />
        Evaluating Micro-Lot Quality
      </h2>

      <p className='my-4'>
        Micro-lot evaluation goes deeper than a standard cupping assessment. Buyers paying premium prices need confidence that the lot justifies its cost. Here is what to assess.
      </p>

      <h3 className='text-xl font-bold mt-6'>Cupping Score and Descriptors</h3>
      <p className='my-4'>
        An SCA cupping score of 86+ is the entry point for micro-lot classification. Beyond the number, pay attention to the specific descriptors. A micro lot should have distinctive, clearly identifiable flavor notes, not generic &quot;fruity&quot; or &quot;floral&quot; descriptions. Expect specificity: &quot;jasmine and bergamot with a honey finish&quot; rather than &quot;floral and sweet.&quot; The <Link href='/insights/new-sca-coffee-value-assessment' className='underline font-bold'>SCA Coffee Value Assessment</Link> framework provides the current industry standard for evaluating these attributes.
      </p>

      <h3 className='text-xl font-bold mt-6'>Physical Quality</h3>
      <p className='my-4'>
        Micro lots should have near-zero defects. For <Link href='/insights/green-coffee-quality-control-defects-grading' className='underline font-bold'>Ethiopian grading</Link>, this means Grade 1 classification (0-3 defects per 300g sample). Screen size should be consistent. Moisture content should be between 10.5% and 12.0% at shipment. Water activity below 0.60 aw ensures good <Link href='/insights/green-coffee-shelf-life-storage-guide' className='underline font-bold'>shelf life stability</Link>.
      </p>

      <h3 className='text-xl font-bold mt-6'>Traceability Documentation</h3>
      <p className='my-4'>
        Every micro lot should come with a lot card specifying: washing station name and location, processing method and dates, drying duration and method, farmer group or individual producer names, harvest altitude, and a cupping report signed by a licensed Q grader. For buyers requiring <Link href='/insights/ethiopian-coffee-traceability-guide' className='underline font-bold'>EUDR compliance or deeper traceability</Link>, GPS coordinates and deforestation-free verification should also be available.
      </p>

      <h3 className='text-xl font-bold mt-6'>Roast Performance</h3>
      <p className='my-4'>
        If possible, roast a small test batch before committing to the full volume. Ethiopian micro lots respond differently to heat application than standard lots. Extremely high-scoring naturals with intense fruit notes may require lighter roast profiles to preserve their character. Washed micro lots from Yirgacheffe often develop best at medium-light levels where their floral and citrus complexity is preserved. Our <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='underline font-bold'>roasting guide for Ethiopian coffee</Link> provides profile recommendations by origin and process.
      </p>

      {/* SECTION 8 */}
      <h2 id="logistics" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineTruck className='text-amber-600' />
        Logistics and Minimum Orders
      </h2>

      <p className='my-4'>
        Micro-lot logistics differ from standard container shipments. The small volumes involved create specific challenges and options.
      </p>

      <h3 className='text-xl font-bold mt-6'>Minimum Order Quantities</h3>
      <p className='my-4'>
        Most Ethiopian exporters set minimum orders for micro lots at 10 to 30 bags (600 to 1,800 kg). Some will accommodate smaller quantities (5 bags) for first-time buyers or sample orders, especially when combined with other lots in the same shipment. For detailed MOQ guidance, see our <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='underline font-bold'>Ethiopian coffee MOQ guide</Link>.
      </p>

      <h3 className='text-xl font-bold mt-6'>Shipping Options</h3>
      <p className='my-4'>
        Micro lots are typically shipped in GrainPro-lined jute bags inside shared containers (LCL, less than container load) or combined with other specialty lots to fill a full container (FCL, 250 to 320 bags). LCL shipments are more expensive per kilogram but allow buyers to import small quantities without committing to a full container. Consolidation services through your exporter or a freight forwarder in Djibouti can reduce per-bag shipping costs.
      </p>

      <h3 className='text-xl font-bold mt-6'>Seasonal Timing</h3>
      <p className='my-4'>
        Ethiopian coffee harvest runs from November through February, with peak harvest in December and January for most origins. Micro lots are processed during harvest and typically available for shipment from March through June. The timeline from cherry to ready-for-export is approximately 8 to 14 weeks depending on the processing method (naturals take longer to dry). Buyers who need Ethiopian micro lots for specific roast releases should plan backwards from their retail launch dates. Consult our <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='underline font-bold'>harvest calendar for buyers</Link> for origin-specific timing.
      </p>

      {/* FAQ */}
      <h2 id="faq" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineQuestionMarkCircle className='text-amber-600' />
        Frequently Asked Questions
      </h2>

      <section className='my-6 space-y-6'>
        <div>
          <h4 className='font-bold text-gray-800 mb-2'>What is a micro-lot coffee?</h4>
          <p className='text-sm text-gray-600'>A micro lot is a small, separately processed coffee lot (typically 5 to 50 bags) traceable to a specific farm, washing station, or harvest day. It scores 86 or above on the SCA scale and comes with detailed documentation including cupping reports, producer information, and processing details. The term is not formally regulated, so definitions vary across the industry.</p>
        </div>
        <div>
          <h4 className='font-bold text-gray-800 mb-2'>How much does Ethiopian micro-lot coffee cost?</h4>
          <p className='text-sm text-gray-600'>Ethiopian micro-lot coffee typically ranges from $9.00 to $13.20+ per kilogram FOB, equivalent to roughly $4.08 to $5.99+ per pound. Competition and auction lots can reach $15 to $50+ per kilogram. Pricing depends on cupping score, origin, processing method, and season timing. This represents a 30% to 100%+ premium over standard specialty grades.</p>
        </div>
        <div>
          <h4 className='font-bold text-gray-800 mb-2'>What is the difference between micro lot and single origin coffee?</h4>
          <p className='text-sm text-gray-600'>Single origin identifies coffee from one country or region but may include blended lots from multiple producers. A micro lot is far more specific: a small volume from a single farm, station, or harvest day, processed in isolation and accompanied by detailed traceability data. Micro lots score higher and command greater premiums than typical single-origin offerings.</p>
        </div>
        <div>
          <h4 className='font-bold text-gray-800 mb-2'>Which Ethiopian regions produce the best micro lots?</h4>
          <p className='text-sm text-gray-600'>Yirgacheffe (Gedeo zone), Guji, and Sidamo are the three leading micro-lot origins. Yirgacheffe is the benchmark for washed lots with floral and citrus complexity. Guji leads in competition-winning natural lots. Sidamo offers consistent fruit-forward profiles. Harar and Limu are emerging micro-lot origins with unique flavor characteristics.</p>
        </div>
        <div>
          <h4 className='font-bold text-gray-800 mb-2'>How do I source micro-lot coffee directly from Ethiopia?</h4>
          <p className='text-sm text-gray-600'>Work with a licensed Ethiopian exporter who has direct washing station relationships and Q-grading capability. Contact them before harvest season (September to October), specify your requirements, request offer samples, cup systematically, and commit quickly once you identify lots you want. Pre-season relationships and advance deposits secure access to the best lots.</p>
        </div>
      </section>

      {/* CTA */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Premium Micro-Lot Ethiopian Coffee Direct from Origin</h4>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Export PLC</span> sources micro lots from top-scoring washing stations across Yirgacheffe, Guji, Sidamo, Harar, and Limu. Every lot comes with full cupping reports, producer traceability, and processing documentation. Whether you need 10 bags of a single experimental lot or 50 bags of consistent washed Yirgacheffe, we match your program to the right coffee.
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
            <h4 className='font-semibold mb-2 text-sm'>Sourcing &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='text-amber-700 hover:underline'>How to Choose an Ethiopian Export Company</Link></li>
              <li>&bull; <Link href='/insights/private-vs-cooperative-ethiopian-coffee-exporters' className='text-amber-700 hover:underline'>Private vs Cooperative Ethiopian Coffee Exporters</Link></li>
              <li>&bull; <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Pricing &amp; Market</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Pricing for Importers</Link></li>
              <li>&bull; <Link href='/insights/rising-ethiopian-coffee-prices-explained' className='text-amber-700 hover:underline'>Rising Ethiopian Coffee Prices Explained</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts &amp; Payment Terms</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality &amp; Varieties</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup and Evaluate Ethiopian Samples</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality: Defects &amp; Grading</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Heirloom Ethiopian Coffee Varieties</Link></li>
              <li>&bull; <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji Compared</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Logistics &amp; Operations</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Ethiopian Coffee MOQ Guide</Link></li>
              <li>&bull; <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline'>Specialty Coffee Storage in Sea Freight</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability: Buyer&apos;s Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Export PLC. This guide draws on pricing data from the Ethiopian Commodity Exchange (ECX), auction records reported by Addis Insight, International Coffee Organization (ICO) production statistics, the Specialty Coffee Association (SCA) cupping and grading standards, and our direct experience sourcing and exporting micro-lot Ethiopian coffee for international roasters and importers. Market conditions and pricing change seasonally; contact us for current information on available micro lots.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot; <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> &middot; <Link href='/about' className='underline'>About Ethio Coffee</Link> &middot; <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

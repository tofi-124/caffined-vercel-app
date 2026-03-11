import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function DirectTradeEthiopianFarmers({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        A guide to sourcing, verification, and what direct trade actually means in Ethiopia&apos;s unique export system
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Direct trade Ethiopian coffee connects international buyers with producers through transparent, long-term relationships.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Direct trade Ethiopian coffee - farmers and buyers at a washing station'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-2'>Key Takeaway</p>
        <p>
          Direct trade in Ethiopian coffee is not just a marketing label — it is a sourcing model shaped by Ethiopia&apos;s unique export system, ECX reforms, and vertical integration pathways. For importers and roasters, understanding how direct trade actually works in Ethiopia — and how to verify it — is the difference between genuine traceability and empty claims. This guide covers the full picture from an Ethiopian exporter&apos;s perspective.
        </p>
      </div>

      <p className='my-4'>
        Direct trade Ethiopian coffee is one of the most searched and least understood topics in specialty sourcing. Most content on the subject explains direct trade in general terms — buyer meets farmer, pays a premium, skips the middleman. But in Ethiopia, the world&apos;s birthplace of Arabica coffee, direct trade operates within a regulatory and logistical framework that has no parallel in any other origin country.
      </p>

      <p className='my-4'>
        This guide is written from the exporter&apos;s side. It covers how direct trade actually works in Ethiopia&apos;s export system, what changed after the 2021 vertical integration reforms, how coffee moves from washing station to port, and what importers should verify before using the &quot;direct trade&quot; label on their bags.
      </p>

      {/* SECTION 1 */}
      <h2 className='text-3xl font-extrabold mt-10 mb-4'>
        What Direct Trade Means in Ethiopian Coffee
      </h2>

      <h3 className='text-2xl font-extrabold mt-8'>
        The Standard Definition (and Why It Falls Short)
      </h3>
      <p className='my-4'>
        In global specialty coffee, direct trade generally means the roaster or importer buys directly from the producer — a farmer, cooperative, or processor — without passing through commodity traders or auction systems. The relationship typically includes:
      </p>

      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>Prices negotiated above Fair Trade or commodity minimums</li>
        <li className='my-2'>Quality-based pricing tied to cupping scores</li>
        <li className='my-2'>Transparency on what the producer receives</li>
        <li className='my-2'>Multi-season purchasing commitments</li>
        <li className='my-2'>Farm or cooperative visits by the buyer</li>
      </ul>

      <p className='my-4'>
        This definition works reasonably well in origins like Colombia or Guatemala, where a roaster can visit a farm, negotiate a price, and arrange export with relative simplicity. But it falls short in Ethiopia because of one institution: the <Link href='/insights/ecx-and-ethiopian-coffee-export' className='underline font-bold'>Ethiopia Commodity Exchange (ECX)</Link>.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        How Ethiopia&apos;s System Is Different
      </h3>
      <p className='my-4'>
        For years, Ethiopian law required most coffee to pass through the ECX — a centralized auction platform where lots were pooled by region and grade, stripping individual traceability. Under this system, a buyer in Berlin or Tokyo could know they were purchasing a Yirgacheffe Grade 1, but not which cooperative or washing station produced it.
      </p>

      <p className='my-4'>
        This made &quot;direct trade&quot; in the conventional sense nearly impossible for most Ethiopian coffee. The ECX was designed to protect farmers from exploitative pricing, and it succeeded in stabilizing minimum prices. But it also created a barrier between international buyers and the producers they wanted to build relationships with.
      </p>

      <p className='my-4'>
        That changed significantly with the <span className='font-bold'>vertical integration reforms</span> introduced in stages from 2017 and formalized more broadly in 2021. These reforms allow certain licensed exporters and cooperatives to purchase coffee directly from producers and export it without going through the ECX auction floor. The result: Ethiopian coffee can now move from washing station to international buyer with full traceability intact — but only through specific legal channels.
      </p>

      {/* SECTION 2 */}
      <h2 className='text-3xl font-extrabold mt-10 mb-4'>
        How Ethiopian Coffee Reaches International Buyers
      </h2>

      <p className='my-4'>
        There are two primary pathways for Ethiopian coffee to reach the export market. Understanding both is essential for any importer evaluating direct trade claims.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        The ECX Pathway (Horizontal/Auction System)
      </h3>
      <p className='my-4'>
        Under the traditional ECX model, coffee follows a horizontal path:
      </p>

      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>Farmers deliver cherry to washing stations or local collectors</li>
        <li className='my-2'>Processed coffee is delivered to ECX warehouses and graded</li>
        <li className='my-2'>Lots are pooled by region and grade on the ECX auction floor</li>
        <li className='my-2'>Licensed exporters bid on lots and arrange international shipment</li>
      </ul>

      <p className='my-4'>
        In this system, traceability is limited to region and grade. The buyer knows the general origin (e.g., Sidamo Grade 2, washed) but typically cannot trace back to a specific cooperative or washing station. This pathway still handles a significant share of Ethiopia&apos;s commercial-grade exports.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        The Vertical Integration Pathway (Direct Export)
      </h3>
      <p className='my-4'>
        Under the vertical integration model, licensed exporters and cooperatives can purchase directly from washing stations and farmers, process the coffee in their own or contracted facilities, and export it with full lot-level traceability. This pathway is the foundation of genuine direct trade Ethiopian coffee.
      </p>

      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>The exporter contracts directly with washing stations or cooperatives</li>
        <li className='my-2'>Cherry or parchment is processed under the exporter&apos;s quality control</li>
        <li className='my-2'>Dry milling, grading, and <Link href='/insights/green-coffee-quality-control-defects-grading' className='underline font-bold'>quality control</Link> happen under the exporter&apos;s supervision</li>
        <li className='my-2'>The exporter ships directly to the international buyer with full documentation</li>
      </ul>

      <p className='my-4'>
        The Direct Specialty License (DSL) further enables this pathway for specialty-grade lots, allowing exporters to bypass ECX entirely for coffees scoring 80 or above on cupping evaluations.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Cooperatives vs Private Exporters in Direct Trade
      </h3>
      <p className='my-4'>
        Both <Link href='/insights/private-vs-cooperative-ethiopian-coffee-exporters' className='underline font-bold'>cooperatives and private exporters</Link> can participate in direct trade, but their structures differ:
      </p>

      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'><span className='font-bold'>Cooperatives and cooperative unions</span> were among the first to gain ECX exemptions. They aggregate coffee from member farmers, process it centrally, and can export directly. Premiums are distributed back to members, though the speed and transparency of that distribution varies.</li>
        <li className='my-2'><span className='font-bold'>Private exporters</span> with vertical integration licenses purchase from washing stations they own, lease, or contract with. They typically offer faster decision-making, flexible lot customization, and direct communication with international buyers.</li>
      </ul>

      {/* COMPARISON TABLE */}
      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Factor</th>
              <th className='p-3 text-left font-bold'>ECX Pathway</th>
              <th className='p-3 text-left font-bold'>Vertical Integration / Direct</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-bold'>Traceability</td>
              <td className='p-3'>Region + grade level</td>
              <td className='p-3'>Washing station / cooperative / lot level</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-bold'>Pricing</td>
              <td className='p-3'>Auction-determined</td>
              <td className='p-3'>Negotiated directly between parties</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-bold'>Quality feedback</td>
              <td className='p-3'>Limited — lots are pooled</td>
              <td className='p-3'>Direct cupping feedback to producer</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-bold'>Relationship</td>
              <td className='p-3'>Transactional / anonymous</td>
              <td className='p-3'>Long-term, named partnerships</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-bold'>Volume flexibility</td>
              <td className='p-3'>Standard auction lots</td>
              <td className='p-3'>Custom lots, micro-lots possible</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-bold'>Farmer premium visibility</td>
              <td className='p-3'>Opaque after auction</td>
              <td className='p-3'>Transparent — documented in contract</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-bold'>Best suited for</td>
              <td className='p-3'>Commercial grades, volume buyers</td>
              <td className='p-3'>Specialty importers, direct trade programs</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 3 */}
      <h2 className='text-3xl font-extrabold mt-10 mb-4'>
        What Direct Trade Looks Like in Practice
      </h2>

      <h3 className='text-2xl font-extrabold mt-8'>
        From Washing Station to Export
      </h3>
      <p className='my-4'>
        Here is a simplified step-by-step of how direct trade Ethiopian coffee moves from origin to your warehouse:
      </p>

      <ol className='font-inconsolata my-4 list-decimal ml-5'>
        <li className='my-2'><span className='font-bold'>Cherry delivery:</span> Farmers deliver ripe cherry to a <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='underline font-bold'>washing station</Link> — either cooperative-owned or privately operated.</li>
        <li className='my-2'><span className='font-bold'>Wet processing:</span> Cherry is depulped, fermented, and washed (for washed lots) or laid on raised beds (for naturals). Processing method is documented per lot.</li>
        <li className='my-2'><span className='font-bold'>Parchment drying:</span> Washed parchment dries on raised beds for 10–15 days under careful monitoring. Naturals dry in cherry for 15–20+ days.</li>
        <li className='my-2'><span className='font-bold'>Dry milling:</span> Parchment is hulled, sorted by screen size and density, and graded. The exporter oversees or directly controls this stage in a <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='underline font-bold'>dry milling</Link> facility.</li>
        <li className='my-2'><span className='font-bold'>Quality assessment:</span> Samples are cupped internally and shared with the buyer. Pre-shipment samples (PSS) are sent for the importer&apos;s own <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='underline font-bold'>cupping evaluation</Link>.</li>
        <li className='my-2'><span className='font-bold'>Contract and documentation:</span> Once the buyer approves the sample, the sale contract is finalized. The exporter prepares ICO certificates, phytosanitary certificates, weight notes, and quality reports.</li>
        <li className='my-2'><span className='font-bold'>Export:</span> Bags are loaded into containers — typically at Addis Ababa dry port or Djibouti — and shipped to the destination port under FOB or CFR terms.</li>
      </ol>

      <h3 className='text-2xl font-extrabold mt-8'>
        Quality Feedback Loops and Price Premiums
      </h3>
      <p className='my-4'>
        One of the most valuable aspects of direct trade is the feedback loop. When an importer cups a lot and shares detailed notes with the exporter — and the exporter relays that feedback to the washing station manager — it creates a cycle of continuous improvement. The washing station learns which processing adjustments increase cup quality, and the importer gets more consistent, higher-scoring lots over time.
      </p>

      <p className='my-4'>
        Price premiums in direct trade Ethiopian coffee typically range from 10 to 40 percent above ECX reference prices, depending on grade, cupping score, and lot size. For specialty lots scoring 85 or above, premiums can be significantly higher. These premiums are documented in the contract, giving importers verifiable evidence for their own marketing claims.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Long-Term Relationships vs One-Off Purchases
      </h3>
      <p className='my-4'>
        A single-season purchase from a named washing station is better than anonymous commodity sourcing — but it is not the same as a direct trade relationship. Genuine direct trade implies continuity: buying from the same producers season after season, adjusting pricing as market conditions change, and investing in the relationship even when a particular harvest underperforms.
      </p>

      <p className='my-4'>
        For exporters, long-term commitments from importers allow us to make forward investments in processing infrastructure, training, and farmer payments. For importers, they provide supply continuity, priority access to top lots, and a more credible origin story.
      </p>

      {/* SECTION 4 */}
      <h2 className='text-3xl font-extrabold mt-10 mb-4'>
        Benefits of Direct Trade for Importers and Roasters
      </h2>

      <h3 className='text-2xl font-bold mt-6 mb-3'>
        Traceability and Lot-Level Transparency
      </h3>
      <p className='my-4'>
        Direct trade through the vertical integration pathway gives importers what the ECX auction cannot: <Link href='/insights/ethiopian-coffee-traceability-guide' className='underline font-bold'>full traceability</Link> down to the washing station, cooperative, and sometimes the specific farmer group. This level of transparency supports certification requirements, EU Deforestation Regulation compliance, and specialty marketing claims.
      </p>

      <h3 className='text-2xl font-bold mt-6 mb-3'>
        Quality Consistency Across Seasons
      </h3>
      <p className='my-4'>
        When you buy from the same washing station year after year, the processing team knows your quality expectations. They can adjust fermentation times, drying protocols, and sorting standards to match your cup profile. This consistency is extremely difficult to achieve through spot purchases on the ECX.
      </p>

      <h3 className='text-2xl font-bold mt-6 mb-3'>
        Competitive Pricing Without Intermediary Markup
      </h3>
      <p className='my-4'>
        Working directly with an Ethiopian exporter removes at least one layer of intermediary cost. While <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='underline font-bold'>FOB pricing</Link> varies by grade and season, importers in direct trade relationships typically access better value per cupping point than those buying through multi-tier supply chains. This does not mean direct trade is always cheaper — it means the premium goes to the producer, not a middleman.
      </p>

      <h3 className='text-2xl font-bold mt-6 mb-3'>
        Farmer and Community Impact
      </h3>
      <p className='my-4'>
        Direct trade premiums reach producers more efficiently when there are fewer intermediaries in the chain. In practice, this creates measurable impact: washing stations can invest in better drying beds, water treatment infrastructure, and farmer training programs. Women, who perform an estimated 60 to 70 percent of the labor in Ethiopian coffee, benefit disproportionately from programs funded by direct trade premiums — from selective harvesting training to community health initiatives. Read more about <Link href='/insights/women-in-ethiopian-coffee-industry' className='underline font-bold'>women in Ethiopian coffee</Link>.
      </p>

      <div className='bg-amber-100 p-6 rounded-lg my-8'>
        <h4 className='font-bold text-xl mb-2'>From a Cooperative Manager</h4>
        <p className='my-2'>
          &quot;When our buyer sends cupping feedback, we know exactly what to improve next season. The premium they pay funds our new raised drying beds and a clean water project in the village. That is what direct trade means to us — it is not a logo on a bag, it is the drying beds and the water.&quot;
        </p>
        <p className='text-sm text-gray-600 mt-2'>— Washing station manager, Konga area, Yirgacheffe</p>
      </div>

      {/* SECTION 5 */}
      <h2 className='text-3xl font-extrabold mt-10 mb-4'>
        How to Verify Direct Trade Claims
      </h2>

      <p className='my-4'>
        Because direct trade is not a certified standard with a governing body, verification falls on the buyer. Here is a practical checklist for importers evaluating whether an Ethiopian supplier&apos;s direct trade claims are genuine.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        A Buyer&apos;s Verification Checklist
      </h3>

      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'><span className='font-bold'>Can the exporter name the specific washing station or cooperative?</span> If the answer is a region only (e.g., &quot;Yirgacheffe&quot;), the lot likely went through ECX.</li>
        <li className='my-2'><span className='font-bold'>Can they provide the exporter&apos;s ECTA license and vertical integration documentation?</span> This confirms legal authorization for direct sourcing outside the ECX.</li>
        <li className='my-2'><span className='font-bold'>Is the producer payment documented in the contract?</span> A genuine direct trade exporter can show what they paid the washing station or cooperative — not just the FOB price.</li>
        <li className='my-2'><span className='font-bold'>Do they offer pre-shipment samples from the specific lot?</span> This confirms the coffee exists as a traceable lot, not a blend assembled after the fact.</li>
        <li className='my-2'><span className='font-bold'>Is there a multi-season purchasing history?</span> One purchase does not make a relationship. Ask about past seasons and future commitments.</li>
        <li className='my-2'><span className='font-bold'>Can you visit the washing station?</span> A willing exporter will facilitate origin visits. Reluctance is a signal.</li>
        <li className='my-2'><span className='font-bold'>Is cupping feedback shared with the producer?</span> This is the practical test of whether the &quot;direct&quot; in direct trade involves actual communication.</li>
      </ul>

      <h3 className='text-2xl font-extrabold mt-8'>
        Red Flags to Watch For
      </h3>

      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>Vague origin claims — &quot;Ethiopian direct trade&quot; with no producer names or location specifics</li>
        <li className='my-2'>Inability to provide documentation beyond standard ICO and phytosanitary certificates</li>
        <li className='my-2'>Pricing that is at or below ECX reference — genuine premiums should be visible</li>
        <li className='my-2'>Marketing materials featuring &quot;farm visits&quot; from years ago with no ongoing relationship evidence</li>
        <li className='my-2'>No willingness to share producer payment breakdowns when asked</li>
      </ul>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-2'>What Genuine Transparency Looks Like</p>
        <p>
          A transparent Ethiopian coffee exporter should be able to provide, for any given lot: the washing station name and GPS coordinates, the processing method and dates, the grade and cupping score, the price paid to the producer, and the volume purchased. At Ethio Coffee, every lot we export as direct trade comes with this documentation as standard — because if you cannot verify a claim, you should not make it.
        </p>
      </div>

      {/* SECTION 6 */}
      <h2 className='text-3xl font-extrabold mt-10 mb-4'>
        Direct Trade vs Fair Trade vs Organic in Ethiopia
      </h2>

      <p className='my-4'>
        Importers often ask how direct trade compares to <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='underline font-bold'>formal certifications</Link> like Fair Trade and Organic. The short answer: they are different tools that can work together.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Dimension</th>
              <th className='p-3 text-left font-bold'>Direct Trade</th>
              <th className='p-3 text-left font-bold'>Fair Trade</th>
              <th className='p-3 text-left font-bold'>Organic</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-bold'>Governing body</td>
              <td className='p-3'>None (self-regulated)</td>
              <td className='p-3'>Fairtrade International / FLO</td>
              <td className='p-3'>USDA, EU Organic, or equivalent</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-bold'>Price mechanism</td>
              <td className='p-3'>Negotiated per lot, quality-based</td>
              <td className='p-3'>Minimum floor price + premium</td>
              <td className='p-3'>Market-driven + organic premium</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-bold'>Traceability</td>
              <td className='p-3'>Lot-level (when genuine)</td>
              <td className='p-3'>Cooperative-level</td>
              <td className='p-3'>Farm or cooperative-level</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-bold'>Verification</td>
              <td className='p-3'>Buyer due diligence</td>
              <td className='p-3'>Third-party audit</td>
              <td className='p-3'>Third-party audit</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-bold'>Cost to producer</td>
              <td className='p-3'>No certification fees</td>
              <td className='p-3'>Certification + audit fees</td>
              <td className='p-3'>Certification + compliance costs</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-bold'>Can combine?</td>
              <td className='p-3'>Yes — with any certification</td>
              <td className='p-3'>Yes — with direct trade or organic</td>
              <td className='p-3'>Yes — with direct trade or Fair Trade</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Many of the strongest sourcing programs combine direct trade relationships with formal certifications. For example, an importer might practice direct trade with a cooperative that also holds Organic and Fair Trade certifications — getting the traceability and relationship benefits of direct trade alongside the third-party verification of certification. Our full <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='underline font-bold'>certifications guide</Link> covers each certification framework in detail.
      </p>

      {/* FAQ SECTION */}
      <section className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions About Direct Trade Ethiopian Coffee</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What is direct trade coffee and how is it different in Ethiopia?</h4>
            <p className="text-sm text-gray-600">Direct trade is a sourcing model where the buyer builds a relationship directly with the producer. In Ethiopia, this model is shaped by the ECX system and vertical integration reforms — unlike most origins, Ethiopian direct trade requires specific export licenses and legal frameworks that enable traceable, non-auction sourcing.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Is direct trade the same as Fair Trade?</h4>
            <p className="text-sm text-gray-600">No. Fair Trade is a formal certification with audited standards, minimum price requirements, and a governing body. Direct trade is a sourcing philosophy with no central standard, which means verification depends on the buyer asking the right questions and the exporter providing transparent documentation.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How can I buy coffee directly from Ethiopian farmers?</h4>
            <p className="text-sm text-gray-600">Most international buyers work through licensed Ethiopian exporters who have vertical integration authorization or Direct Specialty Licenses. These exporters source from specific washing stations and cooperatives and can provide full traceability. Direct farmer-to-buyer transactions without an exporter are not legally permitted under Ethiopian export law.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What premium do direct trade Ethiopian coffees command?</h4>
            <p className="text-sm text-gray-600">Premiums typically range from 10 to 40 percent above ECX reference prices, depending on grade, cupping score, lot size, and the maturity of the buyer-exporter relationship. Specialty lots scoring 85 or above can command significantly higher premiums, particularly for competition-grade micro-lots.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How do I verify that a supplier genuinely practices direct trade?</h4>
            <p className="text-sm text-gray-600">Ask for the specific washing station or cooperative name, producer payment documentation, ECTA license verification, pre-shipment samples from the named lot, and evidence of a multi-season purchasing relationship. A genuine direct trade exporter can provide all of this without hesitation.</p>
          </div>
        </div>
      </section>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Direct Trade Ethiopian Coffee with Full Transparency</h4>
        <p className='my-2'>
          At <span className='font-bold'>Ethio Coffee Import and Export PLC</span>, direct trade is how we operate — not a marketing add-on. We source from named washing stations and cooperatives across Ethiopia&apos;s top growing regions, provide lot-level traceability and producer payment documentation for every shipment, and build multi-season relationships with both our producers and our buyers.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>
            View Our Offerings
          </Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            Contact Us
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
            <h4 className='font-semibold mb-2 text-sm'>Trade & Sourcing</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>• <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export</Link></li>
              <li>• <Link href='/insights/private-vs-cooperative-ethiopian-coffee-exporters' className='text-amber-700 hover:underline'>Private vs Cooperative Exporters</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Coffee Certifications Guide</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing Guide</Link></li>
              <li>• <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Minimum Order Quantities</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality & Traceability</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability Guide</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Washing Stations Guide</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='text-amber-700 hover:underline'>Dry Milling and Export Guide</Link></li>
              <li>• <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup Ethiopian Coffee Samples</Link></li>
              <li>• <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality Control</Link></li>
              <li>• <Link href='/insights/women-in-ethiopian-coffee-industry' className='text-amber-700 hover:underline'>Women in Ethiopian Coffee</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> This article explains how direct trade works in Ethiopia&apos;s unique coffee export system, covering ECX reforms, vertical integration pathways, verification practices, and practical guidance for importers and roasters evaluating direct trade sourcing.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

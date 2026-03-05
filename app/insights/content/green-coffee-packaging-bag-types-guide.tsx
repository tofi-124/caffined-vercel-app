import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineShieldCheck,
  HiOutlineScale,
  HiOutlineCheckCircle,
  HiOutlineDocumentCheck,
  HiOutlineCube,
  HiOutlineTableCells,
  HiOutlineQuestionMarkCircle,
  HiOutlineMapPin,
  HiOutlineBeaker,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function GreenCoffeePackagingBagTypesGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Jute, GrainPro, vacuum, and bulk container options compared: cost data, specifications, and the packaging language every importer should include in their purchase contract.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Green coffee packaging determines whether a premium Ethiopian lot arrives in roasting condition or arrives degraded. The choice begins at the export warehouse in Addis Ababa.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Green coffee beans packed in jute bags with GrainPro hermetic liners at an Ethiopian export warehouse, ready for container loading'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Quality Control / Sourcing Guide / Trade Logistics / Importer Resources</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0 mt-1' />
          <span>
            <span className='font-bold'>Key Takeaway: </span>
            The industry standard for Ethiopian specialty green coffee is a 60 kg jute bag lined with a GrainPro or Ecotact hermetic liner, at a combined cost of $2.50 to $5.00 per bag. Jute alone suits short transit and commodity grades. Hermetic liners (GrainPro, Ecotact) are non-negotiable for Grade 1 and Grade 2 lots on long sea freight routes. Vacuum-sealed bags serve micro-lot and sample shipments. Importers should specify packaging type, bag weight, liner brand, pre-seal moisture content, and bag marking requirements in every purchase contract or purchase confirmation.
          </span>
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#why-packaging-matters' className='text-amber-700 hover:underline'>1. Why Green Coffee Packaging Matters for Importers</a></li>
          <li><a href='#bag-types' className='text-amber-700 hover:underline'>2. Green Coffee Bag Types Compared</a></li>
          <li><a href='#comparison-table' className='text-amber-700 hover:underline'>3. Full Packaging Comparison Table</a></li>
          <li><a href='#ethiopian-context' className='text-amber-700 hover:underline'>4. Ethiopian Export Packaging: What Buyers Should Know</a></li>
          <li><a href='#contract-specs' className='text-amber-700 hover:underline'>5. What to Specify in Your Purchase Contract</a></li>
          <li><a href='#decision-matrix' className='text-amber-700 hover:underline'>6. Packaging Decision Matrix by Order Type</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>7. FAQ</a></li>
        </ol>
      </div>

      {/* SECTION 1 */}
      <h2 id='why-packaging-matters' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineShieldCheck className='text-amber-600' />
        Why Green Coffee Packaging Matters for Importers
      </h2>

      <p className='my-4'>
        Green coffee packaging is often treated as the exporter's problem. That view is expensive. The bag type and liner your exporter uses determine how your lot arrives, how long it holds quality in your warehouse, and whether it cups the same as the pre-shipment sample you approved. For importers and roasters sourcing premium Ethiopian coffee, green coffee packaging is a quality management decision that belongs in the contract, not an afterthought.
      </p>

      <p className='my-4'>
        Three forces work against green coffee quality during transport and storage. The first is moisture migration. Green beans contain 10 to 12% internal moisture. If the ambient environment is more humid than the bean, the bean absorbs moisture; if drier, it loses moisture. Either direction degrades the cup. A 1% swing in moisture content can shift cupping scores by 1 to 2 points. The second is oxidation. When lipids in the bean surface contact oxygen over time, they degrade into compounds that produce papery, flat, and woody flavors. Specialty coffees lose their high-end notes fastest. The third is pest infiltration. Insects and mold spores that penetrate a bag can render an entire lot unroastable.
      </p>

      <p className='my-4'>
        The financial stakes are concrete. A 300-bag container of Yirgacheffe Grade 1 priced at $9.00 per kilogram represents a cargo value of roughly $162,000 at FOB. A two-point cupping score drop due to poor packaging would reduce the market value of that lot by $1.00 to $1.50 per kilogram, a loss of $18,000 to $27,000. The cost of a GrainPro liner for all 300 bags is approximately $600 to $900. That arithmetic defines the business case for proper packaging.
      </p>

      <p className='my-4'>
        Packaging also affects the landed cost model in a less obvious way: weight loss. Green coffee loses 0.5% to 1.0% of its weight in moisture during transit from standard jute bags. Over a 30 to 45 day sea freight from Djibouti to the USA or Europe, that translates to 90 to 180 kg of product paid for but not received. Hermetic liners reduce this loss to near zero. For the full landed cost calculation, see our <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='underline font-bold'>Ethiopian coffee landed cost guide</Link>.
      </p>

      {/* SECTION 2 */}
      <h2 id='bag-types' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineCube className='text-amber-600' />
        Green Coffee Bag Types Compared
      </h2>

      <p className='my-4'>
        Five distinct packaging formats are used in the Ethiopian green coffee export trade, each suited to a different combination of grade, volume, transit time, and budget. Understanding each one lets you specify correctly and hold your exporter accountable.
      </p>

      {/* Jute */}
      <h3 className='text-2xl font-bold mt-8 mb-3'>Jute Bags (60 kg Standard and 25 kg Specialty)</h3>

      <p className='my-4'>
        Jute is the foundational packaging of the global green coffee trade. The 60 kg jute bag is the Ethiopian export standard and remains by far the most common format. In recent years, a 25 kg format has gained ground in the specialty segment, where smaller packs improve lot segregation, manual handling, and warehouse traceability.
      </p>

      <p className='my-4'>
        Jute is woven from natural plant fiber. Its structure is breathable, meaning air, moisture, and volatile compounds can move freely between the coffee and the surrounding environment. This breathability was once considered a feature: it allowed beans to off-gas carbon dioxide produced during initial drying, and it prevented the condensation that can form inside fully sealed bags. For short transit routes and well-controlled storage conditions, plain jute still performs adequately.
      </p>

      <p className='my-4'>
        The limitations are real. Jute provides no barrier against humidity changes, oxidation, or pest entry. On a 35 to 45 day sea voyage through tropical shipping corridors, jute-only packaging exposes specialty coffee to fluctuating temperatures and humidity inside the container. For Grade 4 and Grade 5 commodity lots that will be roasted quickly after arrival, jute alone is acceptable. For Grade 1 and Grade 2 specialty lots, it is a quality risk.
      </p>

      <p className='my-4'>
        Cost: new hydrocarbon-free, food-grade 60 kg jute bags typically run $1.00 to $2.00 each at export. Ethiopian standard requires new bags for export; used or recycled bags are not acceptable under ECTA quality standards.
      </p>

      {/* GrainPro */}
      <h3 className='text-2xl font-bold mt-8 mb-3'>GrainPro and Hermetic Liners (Inside Jute)</h3>

      <p className='my-4'>
        The GrainPro Hermetic Bag and comparable products from Ecotact and Videplast are multi-layer plastic liners designed to fit inside a standard jute bag. Once sealed, they create an airtight, moisture-proof barrier. This is now the industry default for specialty green coffee export.
      </p>

      <p className='my-4'>
        The science is straightforward. After sealing, the small amount of oxygen trapped inside the liner is gradually consumed by the bean's natural respiration, producing carbon dioxide. Within 48 to 72 hours of sealing, the oxygen level inside a properly closed GrainPro liner drops from 21% to below 3%. At these low oxygen levels, lipid oxidation essentially stops, mold cannot grow, and insects cannot survive (insects require at least 5% oxygen). The result is a stable, controlled micro-environment that preserves the coffee's original moisture content and cup profile from origin to destination.
      </p>

      <p className='my-4'>
        According to guidance from the <a href='https://www.ico.org/' target='_blank' rel='noopener noreferrer' className='underline font-bold'>International Coffee Organization (ICO)</a>, hermetic liners reduce moisture loss by up to 80% compared to jute alone over a 12-month storage period. That figure directly addresses one of the most common costly surprises importers encounter: receiving coffee significantly drier than the moisture content stated on the shipping documents.
      </p>

      <p className='my-4'>
        One critical point: the hermetic liner preserves whatever moisture content existed at sealing. If a lot is sealed at 13% moisture (above threshold), the liner preserves the problem rather than fixing it. Pre-seal moisture verification is mandatory. Exporters shipping with GrainPro should provide moisture readings at sealing on the packing list or shipping documents. See our <Link href='/insights/green-coffee-shelf-life-storage-guide' className='underline font-bold'>green coffee shelf life and storage guide</Link> for the full moisture science.
      </p>

      <p className='my-4'>
        Cost: GrainPro and Ecotact liners for a 60 kg bag cost $1.50 to $3.00 each, depending on liner grade, order volume, and brand. When combined with the jute bag, the total packaging cost per bag is $2.50 to $5.00.
      </p>

      {/* Vacuum */}
      <h3 className='text-2xl font-bold mt-8 mb-3'>Vacuum-Sealed Bags (Micro-Lot and Sample Format)</h3>

      <p className='my-4'>
        Vacuum-sealed bags remove air from the package before sealing, eliminating essentially all oxygen from the environment around the bean. This provides stronger oxidation protection than hermetic liners, at a higher cost and in smaller bag sizes.
      </p>

      <p className='my-4'>
        Vacuum packing is most common for bags of 5 to 30 kg, making it the preferred format for micro-lot programs, competition lots with cupping scores above 88, and pre-shipment samples sent for importer approval. For these use cases, the $3.00 to $6.00 per-bag cost is justified by the price premium of the coffee inside.
      </p>

      <p className='my-4'>
        The tradeoff is container efficiency. A 60 kg jute bag fits neatly into the standard pallet stack inside a 20ft container. Vacuum-sealed 20 kg bags are harder to stack uniformly and reduce the total volume per container. For full-container specialty lots, vacuum packing is impractical. It is best reserved for samples, micro-lots, and high-scoring lots sold as premium singles.
      </p>

      {/* Woven PP */}
      <h3 className='text-2xl font-bold mt-8 mb-3'>Woven Polypropylene (PP) Bags</h3>

      <p className='my-4'>
        Woven polypropylene bags are lower-cost than jute and more resistant to tearing and moisture ingress from external sources. They are used for some commodity and lower-grade exports, particularly Grade 4 and Grade 5 natural processed coffees.
      </p>

      <p className='my-4'>
        Their limitation is the reverse of jute: PP bags are not breathable. Any heat or residual moisture inside the bag at sealing can build up as condensation on the inner surface of the bag wall, creating conditions for mold. In Ethiopian specialty trade, woven PP bags without a liner are declining. For buyers seeking specialty-grade lots, woven PP unlined is a signal of lower-quality handling standards.
      </p>

      {/* Bulk container liners */}
      <h3 className='text-2xl font-bold mt-8 mb-3'>Bulk Container Liners</h3>

      <p className='my-4'>
        For very large commodity shipments, some exporters load green coffee as loose beans directly into a container fitted with a bulk liner, a large food-grade plastic bladder that sits inside the entire container. This eliminates bag labor and increases cargo density: a bulk-lined 20ft container holds 19 to 21 metric tons versus 16 to 18 metric tons in standard bags.
      </p>

      <p className='my-4'>
        Bulk container liners are not suited to specialty or traceable lots. Once the lot is consolidated into a bulk liner, lot identity and traceability are lost. This format is for high-volume commodity buyers with established relationships where cup quality consistency matters less than logistical efficiency. Importers sourcing Ethiopian specialty coffee by origin, region, or cooperative should avoid this format.
      </p>

      {/* SECTION 3: COMPARISON TABLE */}
      <h2 id='comparison-table' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineTableCells className='text-amber-600' />
        Full Packaging Comparison Table
      </h2>

      <p className='my-4'>
        The table below compares all five green coffee packaging formats across the dimensions that matter most to importers and roasters.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Packaging Type</th>
              <th className='p-3 text-left'>Typical Size</th>
              <th className='p-3 text-left'>Cost/Bag</th>
              <th className='p-3 text-left'>Moisture Barrier</th>
              <th className='p-3 text-left'>O₂ Barrier</th>
              <th className='p-3 text-left'>Shelf Life Extension</th>
              <th className='p-3 text-left'>Best Use</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Jute (plain)</td>
              <td className='p-3'>60 kg / 25 kg</td>
              <td className='p-3'>$1.00 – $2.00</td>
              <td className='p-3 text-orange-600 font-medium'>None</td>
              <td className='p-3 text-orange-600 font-medium'>None</td>
              <td className='p-3'>Baseline (6 – 12 mo)</td>
              <td className='p-3'>Grade 4/5, short transit, dry climate</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Jute + GrainPro / Ecotact liner</td>
              <td className='p-3'>60 kg / 25 kg</td>
              <td className='p-3'>$2.50 – $5.00</td>
              <td className='p-3 text-green-700 font-medium'>High (hermetic)</td>
              <td className='p-3 text-green-700 font-medium'>High (&lt;3% O₂)</td>
              <td className='p-3'>14 – 24 months</td>
              <td className='p-3'>Grade 1/2 specialty, long sea freight</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Vacuum-sealed bag</td>
              <td className='p-3'>5 – 30 kg</td>
              <td className='p-3'>$3.00 – $6.00</td>
              <td className='p-3 text-green-700 font-medium'>Very high</td>
              <td className='p-3 text-green-700 font-medium'>Very high (near 0%)</td>
              <td className='p-3'>18 – 24+ months</td>
              <td className='p-3'>Micro-lots, competition lots, samples</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Woven PP bag (no liner)</td>
              <td className='p-3'>60 kg</td>
              <td className='p-3'>$0.80 – $1.50</td>
              <td className='p-3 text-orange-600 font-medium'>Low</td>
              <td className='p-3 text-orange-600 font-medium'>None</td>
              <td className='p-3'>6 – 10 months</td>
              <td className='p-3'>Commodity grades, very short transit</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Bulk container liner</td>
              <td className='p-3'>Full container</td>
              <td className='p-3'>$200 – $400 per container</td>
              <td className='p-3 text-amber-600 font-medium'>Medium</td>
              <td className='p-3 text-orange-600 font-medium'>Low</td>
              <td className='p-3'>8 – 12 months</td>
              <td className='p-3'>High-volume commodity; not specialty</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 4: ETHIOPIAN CONTEXT */}
      <h2 id='ethiopian-context' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineMapPin className='text-amber-600' />
        Ethiopian Export Packaging: What Buyers Should Know
      </h2>

      <p className='my-4'>
        Ethiopia has its own regulatory and logistical context for green coffee packaging that differs from other origins. Understanding it helps importers set realistic expectations and ask the right questions before confirming an order.
      </p>

      <h3 className='text-2xl font-bold mt-8 mb-3'>ECTA Standards and ECX Requirements</h3>

      <p className='my-4'>
        The Ethiopian Coffee and Tea Authority (ECTA) sets minimum packaging standards for export-grade green coffee. All export lots must be packed in new, food-grade bags. Bags must be clearly marked with the standard ICO export marks: country of origin, grade, lot number, net weight, and exporter code. For ECX-traded coffees, the ECX also assigns a warehouse receipt number that tracks the lot through the system. Direct specialty license (DSL) exporters who source outside the ECX must maintain equivalent traceability on bag markings.
      </p>

      <p className='my-4'>
        Importers purchasing under a Direct Specialty License arrangement can and should specify additional markings: region, washing station or cooperative name, harvest year, and processing method. These markings support EUDR geolocation traceability and strengthen the story you can tell your roasting customers. For a deeper look at how the ECX system works and how it affects your sourcing options, see our <Link href='/insights/ecx-and-ethiopian-coffee-export' className='underline font-bold'>ECX and Ethiopian coffee export guide</Link>.
      </p>

      <h3 className='text-2xl font-bold mt-8 mb-3'>The Djibouti Corridor and Transit Risk</h3>

      <p className='my-4'>
        All Ethiopian coffee exports pass through Djibouti Port, roughly 800 km from Addis Ababa by road. This inland transit takes 2 to 5 days by truck through hot, dry, and sometimes dusty conditions. At Djibouti, containers are loaded and wait at the port before vessel departure. Combined port dwell time and vessel transit to major destinations averages 30 to 45 days to the USA and 20 to 35 days to Europe.
      </p>

      <p className='my-4'>
        The Djibouti corridor has specific temperature and humidity challenges. The port city sits in one of the world's hottest climates, with summer daytime temperatures regularly exceeding 40°C. Containers parked on the tarmac can reach internal temperatures of 55°C or higher. For jute-only packed coffee, a single week in a hot Djibouti container can meaningfully harm cup quality. For GrainPro-lined bags, the hermetic seal maintains the internal equilibrium and buffers against these temperature spikes.
      </p>

      <h3 className='text-2xl font-bold mt-8 mb-3'>How Ethio Coffee Export PLC Packages Shipments</h3>

      <p className='my-4'>
        At Ethio Coffee Export PLC, our sourcing network spans cooperatives and washing stations across Yirgacheffe, Sidamo, Guji, Limu, Harar, and Jimma. Our standard export format is the 60 kg new jute bag, consistent with Ethiopian export regulations and international container loading norms.
      </p>

      <p className='my-4'>
        For all Grade 1 and Grade 2 specialty offerings, we use GrainPro or Ecotact hermetic liners as standard. Buyers do not need to request this separately. For Grade 4 and Grade 5 lots (our Lekempti, Djimmah, and lower-grade Guji and Yirgacheffe offerings), we ship in new jute bags without liners unless a buyer requests otherwise. We verify moisture content at sealing and provide the reading on shipping documentation.
      </p>

      <p className='my-4'>
        Importers who would like to request vacuum-sealed micro-lot packaging for competition or premium single-origin lots should note this in the purchase order. Small additional packaging costs apply. Contact us to discuss options for any offering in our <Link href='/offerings' className='underline font-bold'>current offer sheet</Link>.
      </p>

      {/* SECTION 5: CONTRACT SPECS */}
      <h2 id='contract-specs' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineDocumentCheck className='text-amber-600' />
        What to Specify in Your Purchase Contract
      </h2>

      <p className='my-4'>
        Most green coffee purchase contracts address price, grade, quantity, payment terms, Incoterm, and shipping date. Packaging is rarely spelled out in detail. This omission creates disputes: buyers assume GrainPro, exporters ship plain jute; buyers assume 60 kg bags, exporters send 25 kg bags that reduce container efficiency. Six packaging specifications close these gaps.
      </p>

      <div className='my-6 space-y-4'>
        <div className='bg-amber-50 p-4 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-base mb-2 flex items-center gap-2'>
            <HiOutlineCheckCircle className='text-amber-600' />
            1. Bag Type and Liner
          </h4>
          <p className='text-sm text-gray-700'>
            State the exact format: "60 kg new jute bags with GrainPro Hermetic Bag Premium or Ecotact SuperGreen liner" for specialty. For commodity orders without liner: "60 kg new food-grade jute bags, no liner required." Ambiguity here is the most common source of packaging disputes.
          </p>
        </div>

        <div className='bg-amber-50 p-4 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-base mb-2 flex items-center gap-2'>
            <HiOutlineCheckCircle className='text-amber-600' />
            2. Net Weight Per Bag
          </h4>
          <p className='text-sm text-gray-700'>
            Specify net weight tolerance: "60 kg net weight per bag, tolerance plus or minus 0.5 kg." This confirms the number of bags per container and prevents under-filled bags that affect the total contracted quantity.
          </p>
        </div>

        <div className='bg-amber-50 p-4 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-base mb-2 flex items-center gap-2'>
            <HiOutlineCheckCircle className='text-amber-600' />
            3. Bag Marking Requirements
          </h4>
          <p className='text-sm text-gray-700'>
            List required markings: exporter code, ICO number, country of origin (ETHIOPIA), lot number, grade, net weight, and any custom fields (washing station name, harvest year, QR code for traceability). This is especially important for EUDR compliance and specialty resale storytelling.
          </p>
        </div>

        <div className='bg-amber-50 p-4 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-base mb-2 flex items-center gap-2'>
            <HiOutlineCheckCircle className='text-amber-600' />
            4. Pre-Seal Moisture Content
          </h4>
          <p className='text-sm text-gray-700'>
            Specify a maximum moisture content at time of sealing: "Moisture content not to exceed 11.5% at time of bag sealing, verified by Sinar or equivalent moisture meter, reading to be included on packing list." This protects you from sealed-in moisture problems that a hermetic liner will preserve rather than fix.
          </p>
        </div>

        <div className='bg-amber-50 p-4 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-base mb-2 flex items-center gap-2'>
            <HiOutlineCheckCircle className='text-amber-600' />
            5. Container Preparation
          </h4>
          <p className='text-sm text-gray-700'>
            For full container loads, specify: "Container must be inspected and confirmed free of odors, moisture, and contamination before loading. Desiccant packs to be placed in container if requested." This is standard at reputable exporters but worth confirming in writing for premium lots.
          </p>
        </div>

        <div className='bg-amber-50 p-4 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-base mb-2 flex items-center gap-2'>
            <HiOutlineCheckCircle className='text-amber-600' />
            6. Pre-Shipment Sample Packaging
          </h4>
          <p className='text-sm text-gray-700'>
            Specify that pre-shipment samples (PSS) of 300 to 500 g must be vacuum-sealed in foil bags and shipped air freight. This preserves the sample's cup profile until it reaches you and ensures a fair comparison with the bulk lot when the container arrives. Green samples shipped in open containers or envelopes change significantly during transit.
          </p>
        </div>
      </div>

      <p className='my-4'>
        For guidance on the full contract structure, including quality clauses, payment terms, and dispute resolution language, see our <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='underline font-bold'>Ethiopian coffee contracts and payment terms guide</Link>.
      </p>

      {/* SECTION 6: DECISION MATRIX */}
      <h2 id='decision-matrix' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineScale className='text-amber-600' />
        Packaging Decision Matrix by Order Type
      </h2>

      <p className='my-4'>
        Use the matrix below to identify the right packaging format for your situation. Container efficiency numbers are based on standard 20ft container loading practices from Ethiopia.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Order Type</th>
              <th className='p-3 text-left'>Grade</th>
              <th className='p-3 text-left'>Transit Time</th>
              <th className='p-3 text-left'>Recommended Packaging</th>
              <th className='p-3 text-left'>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Full container (FCL), specialty</td>
              <td className='p-3'>G1 / G2</td>
              <td className='p-3'>25 – 45 days</td>
              <td className='p-3 font-bold text-green-700'>Jute + GrainPro liner</td>
              <td className='p-3'>Industry standard; request moisture cert at sealing</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Full container (FCL), commodity</td>
              <td className='p-3'>G4 / G5</td>
              <td className='p-3'>25 – 45 days</td>
              <td className='p-3 font-bold text-amber-700'>New jute, no liner required</td>
              <td className='p-3'>For blending or espresso base; rapid turnover</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>LCL shipment, specialty</td>
              <td className='p-3'>G1 / G2</td>
              <td className='p-3'>35 – 55 days (with consolidation)</td>
              <td className='p-3 font-bold text-green-700'>Jute + GrainPro liner</td>
              <td className='p-3'>LCL adds extra handling; liner critical more than FCL</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Micro-lot, competition lot</td>
              <td className='p-3'>G1, 88+ score</td>
              <td className='p-3'>Any</td>
              <td className='p-3 font-bold text-green-700'>Vacuum-sealed 10 – 25 kg bags</td>
              <td className='p-3'>Justified by lot value; often air-shipped for speed</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Pre-shipment sample</td>
              <td className='p-3'>Any</td>
              <td className='p-3'>Air freight (5 – 10 days)</td>
              <td className='p-3 font-bold text-green-700'>Vacuum-sealed foil 300 – 500 g</td>
              <td className='p-3'>Must represent bulk lot; seal flavor profile in transit</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Long-term storage (&gt;12 months)</td>
              <td className='p-3'>G1 / G2</td>
              <td className='p-3'>N/A (storage)</td>
              <td className='p-3 font-bold text-green-700'>Jute + hermetic liner, climate-controlled warehouse</td>
              <td className='p-3'>Target 15 – 20°C, 50 – 60% RH; retest moisture quarterly</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        For guidance on how order volume affects packaging decisions, minimum quantities per container, and LCL cost trade-offs, see our <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='underline font-bold'>Ethiopian coffee MOQ guide for importers</Link>.
      </p>

      {/* SECTION 7: FAQ */}
      <h2 id='faq' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineQuestionMarkCircle className='text-amber-600' />
        Frequently Asked Questions
      </h2>

      <div className='my-6 space-y-6'>

        <div className='border border-gray-200 rounded-lg p-5'>
          <h3 className='font-bold text-lg mb-2'>What is the best packaging for green coffee beans?</h3>
          <p className='text-gray-700 text-sm'>
            For specialty lots (Grade 1 and Grade 2) shipped by sea, the best packaging is a 60 kg new jute bag with a GrainPro or Ecotact hermetic liner. The jute provides structural protection and breathability; the liner seals out oxygen and moisture. Combined cost is $2.50 to $5.00 per bag. For micro-lots and samples, vacuum-sealed bags of 10 to 30 kg provide superior protection.
          </p>
        </div>

        <div className='border border-gray-200 rounded-lg p-5'>
          <h3 className='font-bold text-lg mb-2'>How long does green coffee last in GrainPro bags?</h3>
          <p className='text-gray-700 text-sm'>
            Green coffee sealed in GrainPro or Ecotact liners at the correct moisture content (10 to 12%) can hold its cup profile for 14 to 24 months. Without a hermetic liner, specialty coffee in plain jute typically degrades noticeably after 6 to 9 months. Storage temperature and humidity also matter: target 15 to 22°C and 50 to 60% relative humidity for maximum shelf life.
          </p>
        </div>

        <div className='border border-gray-200 rounded-lg p-5'>
          <h3 className='font-bold text-lg mb-2'>What size bags are used for Ethiopian green coffee export?</h3>
          <p className='text-gray-700 text-sm'>
            The Ethiopian export standard is the 60 kg jute bag, which fits approximately 250 to 320 bags per 20ft container. A 25 kg format is increasingly used in the specialty segment for better lot segregation and handling. The 60 kg format is more container-efficient and remains the default for most orders. Importers needing 25 kg bags should specify this in the purchase order, as it may affect pricing slightly.
          </p>
        </div>

        <div className='border border-gray-200 rounded-lg p-5'>
          <h3 className='font-bold text-lg mb-2'>Should importers specify packaging in their coffee contract?</h3>
          <p className='text-gray-700 text-sm'>
            Yes, always. Many disputes between importers and exporters stem from packaging assumptions that were never written down. At minimum, specify bag type and size, liner requirement (or absence), pre-seal moisture content, required bag markings, and pre-shipment sample packaging. A one-paragraph packaging clause in the purchase confirmation prevents the majority of these problems before they occur.
          </p>
        </div>

        <div className='border border-gray-200 rounded-lg p-5'>
          <h3 className='font-bold text-lg mb-2'>Can GrainPro bags be reused for green coffee?</h3>
          <p className='text-gray-700 text-sm'>
            GrainPro offers reusable hermetic bags in some product lines, including zipper-closure formats designed for multiple uses. However, for export-grade green coffee, most exporters use single-use liners to eliminate contamination risk and simplify supply chain management. Importers who want to reuse liners for on-site storage after arrival should use a clean, food-safe hermetic bag rated for green coffee and verify it holds a proper seal before use.
          </p>
        </div>

      </div>

      {/* CONCLUSION */}
      <h2 className='text-3xl font-extrabold mt-10 mb-4'>Conclusion</h2>
      <p className='my-4'>
        Green coffee packaging is a technical and commercial decision that affects cup quality, shelf life, landed cost, and supply chain transparency. For Ethiopian specialty lots, the jute-plus-GrainPro combination is the correct default, and the incremental cost of $600 to $900 per container is one of the highest-ROI decisions in the import chain. Importers who specify packaging clearly in their contracts eliminate one of the most common sources of quality disputes and costly surprises.
      </p>
      <p className='my-4'>
        Ethio Coffee Export PLC ships all Grade 1 and Grade 2 lots with hermetic liners as standard. If you have questions about packaging for a specific lot or order size, our team in Addis Ababa is happy to discuss options before your contract is confirmed.
      </p>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 border border-amber-300 rounded-xl p-8 my-10'>
        <h3 className='text-2xl font-extrabold text-dark mb-3'>
          Source Premium Ethiopian Coffee with Expert Packaging
        </h3>
        <p className='text-gray-700 mb-6'>
          Every Grade 1 and Grade 2 lot we ship includes GrainPro hermetic liner packaging as standard. Pre-shipment samples are vacuum-sealed and sent air freight. Request our full offer sheet or contact us to discuss packaging specifications for your order.
        </p>
        <div className='flex flex-wrap gap-3'>
          <Link
            href='/offerings'
            className='bg-dark text-primary px-5 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity'
          >
            View Offerings
          </Link>
          <Link
            href='/contact-us'
            className='bg-amber-600 text-white px-5 py-3 rounded-lg font-bold text-sm hover:bg-amber-700 transition-colors'
          >
            Request Samples
          </Link>
          <Link
            href='/ordering-info'
            className='border border-dark text-dark px-5 py-3 rounded-lg font-bold text-sm hover:bg-gray-50 transition-colors'
          >
            How to Order
          </Link>
        </div>
      </div>

      {/* RELATED ARTICLES */}
      <div className='my-10 border-t border-gray-200 pt-8'>
        <h3 className='text-2xl font-extrabold mb-6'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-8'>

          <div>
            <h4 className='font-bold text-amber-700 uppercase text-xs tracking-wide mb-3'>Quality &amp; Storage</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='/insights/green-coffee-shelf-life-storage-guide' className='underline font-medium hover:text-amber-700'>
                  Green Coffee Shelf Life: Storage Guide for Buyers
                </Link>
              </li>
              <li>
                <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='underline font-medium hover:text-amber-700'>
                  How to Cup and Evaluate Ethiopian Coffee Samples
                </Link>
              </li>
              <li>
                <Link href='/insights/green-coffee-quality-control-defects-grading' className='underline font-medium hover:text-amber-700'>
                  Green Coffee Quality: Defects and Grading Guide
                </Link>
              </li>
              <li>
                <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='underline font-medium hover:text-amber-700'>
                  Ethiopian Coffee Dry Milling: Export Preparation Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-bold text-amber-700 uppercase text-xs tracking-wide mb-3'>Sourcing &amp; Trade</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='underline font-medium hover:text-amber-700'>
                  Sourcing Green Coffee From Ethiopia
                </Link>
              </li>
              <li>
                <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='underline font-medium hover:text-amber-700'>
                  Ethiopian Coffee MOQ Guide for Importers
                </Link>
              </li>
              <li>
                <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='underline font-medium hover:text-amber-700'>
                  How to Choose an Ethiopian Coffee Export Company
                </Link>
              </li>
              <li>
                <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='underline font-medium hover:text-amber-700'>
                  Ethiopian Coffee Contracts and Payment Terms Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-bold text-amber-700 uppercase text-xs tracking-wide mb-3'>Pricing &amp; Logistics</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='underline font-medium hover:text-amber-700'>
                  Ethiopian Coffee Landed Cost: Import Cost Guide
                </Link>
              </li>
              <li>
                <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='underline font-medium hover:text-amber-700'>
                  Ethiopian Coffee FOB Pricing for Importers
                </Link>
              </li>
              <li>
                <Link href='/insights/specialty-coffee-storage-freight-logistics' className='underline font-medium hover:text-amber-700'>
                  Specialty Coffee Storage in Sea Freight
                </Link>
              </li>
              <li>
                <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='underline font-medium hover:text-amber-700'>
                  Ethiopian Coffee Harvest Calendar for Buyers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-bold text-amber-700 uppercase text-xs tracking-wide mb-3'>Compliance &amp; Traceability</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='underline font-medium hover:text-amber-700'>
                  EUDR and Ethiopian Coffee Compliance Guide
                </Link>
              </li>
              <li>
                <Link href='/insights/ethiopian-coffee-traceability-guide' className='underline font-medium hover:text-amber-700'>
                  Ethiopian Coffee Traceability: Buyer&apos;s Guide
                </Link>
              </li>
              <li>
                <Link href='/insights/ecx-and-ethiopian-coffee-export' className='underline font-medium hover:text-amber-700'>
                  ECX and Ethiopian Coffee Export Guide
                </Link>
              </li>
              <li>
                <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='underline font-medium hover:text-amber-700'>
                  Ethiopian Coffee Certifications Guide
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer line */}
        <div className='mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-4 text-sm'>
          <Link href='/insights' className='text-amber-700 underline hover:opacity-80'>All Insights</Link>
          <Link href='/ethiopian-coffee-exporter' className='text-amber-700 underline hover:opacity-80'>Export Services</Link>
          <Link href='/about' className='text-amber-700 underline hover:opacity-80'>About</Link>
          <Link href='/contact-us' className='text-amber-700 underline hover:opacity-80'>Contact</Link>
        </div>

        {/* Disclaimer */}
        <div className='mt-6 bg-gray-50 rounded-lg p-4 text-xs text-gray-500'>
          <p>
            <span className='font-semibold'>About This Insight:</span> Published by Ethio Coffee Export PLC (Addis Ababa, Ethiopia). This article is for informational purposes and reflects conditions as of March 2026. Packaging costs, product availability, and export regulations are subject to change. Contact us at{' '}
            <a href='mailto:coffee@ethiocoffee.co' className='underline'>coffee@ethiocoffee.co</a>{' '}
            for current information on packaging specifications and export terms.
          </p>
        </div>
      </div>
    </>
  )
}

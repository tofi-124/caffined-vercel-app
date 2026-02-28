import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineWrenchScrewdriver,
  HiOutlineCheckCircle,
  HiOutlineExclamationTriangle,
  HiOutlineScale,
  HiOutlineBeaker,
  HiOutlineCog6Tooth,
  HiOutlineClipboardDocumentList,
  HiOutlineLightBulb,
  HiOutlineArrowPath,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopianCoffeeDryMillingExportGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        From dried parchment to FOB-ready green beans: what every importer needs to understand about the final quality checkpoint before shipment.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2 text-sm text-gray-500'>
          Workers at a dry mill in Addis Ababa preparing Ethiopian green coffee for export. Photo: Ethio Coffee Export PLC.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian coffee dry milling facility showing green beans being sorted and graded for export in Addis Ababa'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Quality Control / Processing Standards / Sourcing Guide / Importer Resources</span>
      </div>

      {/* Key Takeaway — featured snippet target */}
      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-bold text-lg mb-2 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0' />
          Key Takeaway
        </p>
        <p className='text-sm leading-relaxed'>
          Ethiopian coffee dry milling is the final transformation step before export. It converts dried parchment or whole cherries into export-ready green beans through eight sequential stages: pre-cleaning, hulling, polishing, size grading, density sorting, color sorting, hand sorting, and bagging. Every stage affects grade, yield, and cup quality. Buyers who understand this process can ask better questions, specify tighter requirements, and avoid costly surprises on arrival at port.
        </p>
      </div>

      <p className='my-4'>
        Most attention in the Ethiopian coffee supply chain goes to origin: the region, the washing station, the processing method. But between a well-dried parchment lot leaving a cooperative in Yirgacheffe and that same coffee loading into a container at Djibouti, one more critical step takes place. <strong>Ethiopian coffee dry milling</strong> is where parchment becomes green beans, where grades are confirmed, and where the cumulative quality of every earlier decision either holds or falls apart.
      </p>

      <p className='my-4'>
        For importers and roasters, understanding dry milling is not academic. Milling calibration directly determines defect count, screen size uniformity, and whether your pre-shipment sample accurately matches what lands at your warehouse. It also affects yield: the ratio of parchment input to green coffee output varies by 15 to 20 percent depending on processing method and milling settings. That spread is money.
      </p>

      <p className='my-4'>
        This guide walks through the full dry milling process as it operates in Ethiopia, explains what each stage does to your coffee, and ends with a practical checklist of questions to ask any exporter before you sign a contract.
      </p>

      {/* Section 1 */}
      <h2 className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineCog6Tooth className='inline mr-2 text-amber-600' />
        What Is Dry Milling and Why Does It Determine Export Quality?
      </h2>

      <p className='my-4'>
        Dry milling is the post-drying mechanical processing stage that converts dried parchment coffee (or whole dried cherries, in the case of naturals) into clean, sorted, graded green beans ready for bagging and export. It is distinct from wet milling, which takes place at washing stations immediately after harvest and involves the removal of the cherry skin and mucilage in the presence of water.
      </p>

      <p className='my-4'>
        Where wet milling shapes fermentation character and clean-cup quality, dry milling determines physical lot uniformity. A batch of coffee exiting a dry mill should be homogenous in bean size, density, and color. That uniformity matters for two reasons: first, it is what grading systems measure, and grades determine price; second, uniform beans roast evenly. A mixed-screen lot roasts unevenly, generating a cup with both under- and over-developed notes regardless of how skilled the roaster is.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h3 className='font-bold text-lg mb-3'>Why "good processing" at origin is not enough</h3>
        <ul className='text-sm space-y-2'>
          <li className='flex items-start gap-2'>
            <HiOutlineExclamationTriangle className='text-amber-500 text-xl flex-shrink-0 mt-0.5' />
            <span>Parchment coffee arriving at a dry mill may be clean and well-dried at 11.5% moisture, but still contain broken beans, stones, and small underdeveloped seeds that escaped wet-process sorting.</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineExclamationTriangle className='text-amber-500 text-xl flex-shrink-0 mt-0.5' />
            <span>Naturals processed in the interior are often only partially sorted before transport to Addis Ababa, with final grading deferred to the dry mill.</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineExclamationTriangle className='text-amber-500 text-xl flex-shrink-0 mt-0.5' />
            <span>Poorly calibrated hullers generate bean fractures that appear as primary defects on final pre-shipment inspection, dragging Grade 1 lots down to Grade 2 or below.</span>
          </li>
        </ul>
      </div>

      {/* Section 2 */}
      <h2 className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineWrenchScrewdriver className='inline mr-2 text-amber-600' />
        The Ethiopian Dry Mill Infrastructure
      </h2>

      <h3 className='text-xl font-bold mt-6 mb-2'>Where Ethiopian Dry Mills Operate</h3>

      <p className='my-4'>
        Ethiopian dry mills are concentrated on the outskirts of Addis Ababa. This is not accidental. Ethiopian regulations require dry mill facilities to have sufficient yard space for truck ingress and egress, and for full shipping containers to maneuver and load. The capital also sits near the central highway system connecting the growing regions (Sidama, Guji, Yirgacheffe, Hararghe, Jimma) to the Djibouti corridor, which handles nearly all Ethiopian coffee exports.
      </p>

      <p className='my-4'>
        Mills are owned by a mix of private exporters and cooperative unions. Some private exporters own their own milling equipment and offer toll milling services to smaller exporters who do not. Toll milling fees in Ethiopia typically range from USD 0.10 to 0.18 per kilogram of green output, depending on processing method and service level (automated sorting only vs. automated plus hand sorting).
      </p>

      <h3 className='text-xl font-bold mt-6 mb-2'>ECX-Route Coffee vs. Direct Sourcing (DSL) — Two Different Milling Paths</h3>

      <p className='my-4'>
        Ethiopian coffee reaches dry mills through two primary channels, and the milling path differs between them.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm text-left border border-gray-200'>
          <thead className='bg-gray-100 font-bold text-dark'>
            <tr>
              <th className='px-4 py-3 border-b'>Factor</th>
              <th className='px-4 py-3 border-b'>ECX Auction Route</th>
              <th className='px-4 py-3 border-b'>Direct Sourcing (DSL) Route</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 text-gray-700'>
            <tr>
              <td className='px-4 py-3 font-medium'>Parchment origin</td>
              <td className='px-4 py-3'>Cooperative/washing station delivers to ECX warehouses in regional towns (e.g., Awassa, Dilla, Jimma)</td>
              <td className='px-4 py-3'>Exporter sources parchment directly from cooperative or washing station partner and transports to own/contracted mill</td>
            </tr>
            <tr>
              <td className='px-4 py-3 font-medium'>Initial hulling location</td>
              <td className='px-4 py-3'>ECX warehouse does first hulling before auction</td>
              <td className='px-4 py-3'>Typically deferred to Addis Ababa dry mill</td>
            </tr>
            <tr>
              <td className='px-4 py-3 font-medium'>Traceability</td>
              <td className='px-4 py-3'>Lot-level traceability to washing station</td>
              <td className='px-4 py-3'>Full traceability possible to cooperative or smallholder group</td>
            </tr>
            <tr>
              <td className='px-4 py-3 font-medium'>Milling control</td>
              <td className='px-4 py-3'>Exporter controls final sorting/grading in Addis</td>
              <td className='px-4 py-3'>Exporter controls full process from parchment to bag</td>
            </tr>
            <tr>
              <td className='px-4 py-3 font-medium'>Buyer implication</td>
              <td className='px-4 py-3'>Standard specialty and commercial lots; solid traceability</td>
              <td className='px-4 py-3'>Micro-lot and single-origin specialty lots; deeper traceability</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section 3 */}
      <h2 className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineArrowPath className='inline mr-2 text-amber-600' />
        The 8 Stages of Ethiopian Coffee Dry Milling
      </h2>

      <p className='my-4'>
        Once parchment coffee arrives at a dry mill in Addis Ababa, it moves through the following sequence. Each stage can be adjusted or bypassed depending on the lot type, buyer specifications, and target grade.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-2'>Stage 1: Pre-Cleaning</h3>

      <p className='my-4'>
        Before any milling equipment touches the coffee, a pre-cleaner removes light impurities. This is typically a combination of three sub-steps: a pneumatic separator (airstream) that lifts loose dust, fiber, and broken parchment fragments away from heavier beans; a magnet that strips out metallic particles that could otherwise damage hulling equipment; and a destoner that uses vibration and airflow to separate small stones and clods of soil from the coffee stream. Together, these protect downstream machinery and remove foreign matter defects before they reach the grading stage.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-2'>Stage 2: Hulling</h3>

      <p className='my-4'>
        Hulling removes the parchment layer (endocarp) from washed and honey lots, or the entire dried cherry from natural lots. Ethiopian dry mills use one of three huller types:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2 text-sm'>
        <li><span className='font-bold'>Disc hullers:</span> Use rotating abrasive discs to strip parchment through friction. Effective for washed coffees with uniform moisture. Risk of bean fracture rises if moisture is below 10% or if discs are worn.</li>
        <li><span className='font-bold'>Drum (barrel) hullers:</span> Common for naturals. Rotating drum applies pressure to crack the dried cherry layer. Requires careful calibration to avoid chipping.</li>
        <li><span className='font-bold'>Friction hullers:</span> Use a rubber-lined rotor and stationary screen to abrade the parchment. Lower bean damage rate, more commonly found in newer facilities.</li>
      </ul>

      <p className='my-4'>
        Hulling calibration is highly consequential. Over-aggressive huller settings generate chipped and broken beans. These count as primary defects under the Ethiopian Coffee and Tea Authority (ECTA) grading system and reduce the lot's grade. Experienced operators adjust settings based on lot moisture content and origin, since parchment thickness varies between regions and processing methods.
      </p>

      <div className='bg-amber-50 p-5 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold mb-2 text-amber-800 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-xl' />
          Buyer Tip: Ask about huller calibration
        </h4>
        <p className='text-sm'>Request a pre-hulling moisture reading and confirm the exporter adjusts huller settings for each lot rather than running at a fixed setting. Fixed settings optimized for dry naturals will fracture washed beans and vice versa.</p>
      </div>

      <h3 className='text-xl font-bold mt-8 mb-2'>Stage 3: Polishing (Optional)</h3>

      <p className='my-4'>
        After hulling, some silver skin (silverskin or chaff) may remain on the bean surface. A polisher removes this residue through light abrasion. Polishing is not universal: some exporters skip it entirely, some buyers request it, and others actively prefer unpolished beans.
      </p>

      <p className='my-4'>
        The debate centers on heat. Polishers generate friction, and if the process runs too long or the machine is not properly cooled, bean surface temperatures rise enough to affect volatile aromatics. Some importers sourcing delicate washed Yirgacheffe lots specify no polishing for precisely this reason. Others, particularly those sourcing natural Djimmah or commercial-grade lots, prefer polishing for a cleaner appearance. This is a specification decision that should be made in writing before milling begins.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-2'>Stage 4: Size Grading</h3>

      <p className='my-4'>
        After hulling, beans pass through a mechanical size grader: a series of vibrating trays, each perforated with holes of a specific diameter. Beans fall through successive screens until they reach a screen small enough to retain them. Screen size is measured in 64ths of an inch; a size 16 screen has holes 16/64" in diameter.
      </p>

      <p className='my-4'>
        In Ethiopia, beans retained on size 14 and above are generally considered specialty grade. This threshold is referenced in ECTA grading protocols and aligns with the SCA minimum for specialty-eligible lots. Beans falling below size 14 are sorted into commercial or below-grade streams and priced accordingly.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm text-left border border-gray-200'>
          <thead className='bg-gray-100 font-bold text-dark'>
            <tr>
              <th className='px-4 py-3 border-b'>Screen Size</th>
              <th className='px-4 py-3 border-b'>Diameter (inches)</th>
              <th className='px-4 py-3 border-b'>Typical Ethiopian Grade</th>
              <th className='px-4 py-3 border-b'>Common Lots</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 text-gray-700'>
            <tr>
              <td className='px-4 py-3 font-medium'>18+</td>
              <td className='px-4 py-3'>18/64" and larger</td>
              <td className='px-4 py-3'>G1 (specialty)</td>
              <td className='px-4 py-3'>Washed Yirgacheffe, Washed Sidama</td>
            </tr>
            <tr>
              <td className='px-4 py-3 font-medium'>15-17</td>
              <td className='px-4 py-3'>15-17/64"</td>
              <td className='px-4 py-3'>G1-G2</td>
              <td className='px-4 py-3'>Guji natural, Limu washed</td>
            </tr>
            <tr>
              <td className='px-4 py-3 font-medium'>14-15</td>
              <td className='px-4 py-3'>14-15/64"</td>
              <td className='px-4 py-3'>G2-G3</td>
              <td className='px-4 py-3'>Mixed-screen specialty, natural Harar</td>
            </tr>
            <tr>
              <td className='px-4 py-3 font-medium'>Below 14</td>
              <td className='px-4 py-3'>Under 14/64"</td>
              <td className='px-4 py-3'>G4-G5 (commercial)</td>
              <td className='px-4 py-3'>Djimmah G4/G5, Lekempti G5</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className='text-xl font-bold mt-8 mb-2'>Stage 5: Density Sorting</h3>

      <p className='my-4'>
        Size grading removes small beans, but it does not separate beans of the same size that differ in density. High-density beans have fully developed endosperm, lower moisture, and greater cup potential. Low-density beans of the same screen size are underdeveloped, lighter, and prone to quaker defects after roasting. A density (or gravity) table sorts them.
      </p>

      <p className='my-4'>
        The density table operates on two simultaneous axes: it is tilted both horizontally and vertically, and the tray vibrates at a controlled frequency. The vibration causes beans to stratify: denser beans migrate toward one corner, lighter beans toward another. Adjustable partitions then divide the output stream into two or more density grades. The lightest fraction is separated as a lower-quality stream. Denser fractions are retained for the specialty lot.
      </p>

      <p className='my-4'>
        Density sorting is where a standard G2 lot can sometimes be refined into a G1 by removing the lightest 8 to 12 percent of the screen-sized batch. However, this increases milling losses and raises effective cost per kilogram, so the decision depends on the price premium available at the higher grade.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-2'>Stage 6: Color Sorting</h3>

      <p className='my-4'>
        Color sorters scan every bean passing through the machine using high-resolution optical sensors or, in newer machines, near-infrared (NIR) laser technology. Beans that fall outside the specified color range are ejected by a burst of compressed air into a reject stream. Color sorters remove visually defective beans: full blacks, full sours, partial blacks, and discolored partials that density grading cannot distinguish because they may have the same weight as good beans.
      </p>

      <p className='my-4'>
        Calibration sensitivity is a trade-off. A tightly calibrated color sorter rejects more defects but also rejects some good beans that happen to be slightly darker or lighter than the programmed baseline. This is a particular challenge for natural and anaerobic lots, where intentional fermentation colors may trigger false positives. Experienced mill operators running premium natural lots often soften the color sorter parameters and pass the lot through hand sorting for a final clean.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-2'>Stage 7: Hand Sorting</h3>

      <p className='my-4'>
        Hand sorting is the final defect-removal gate and the most labor-intensive stage. Workers positioned along a conveyor belt or sorting table visually inspect every bean passing in front of them, removing anything the machines missed: insect-damaged beans, partial blacks that escaped the color sorter, quakers, shells, and any remaining foreign matter.
      </p>

      <p className='my-4'>
        In Ethiopia, hand sorting is performed predominantly by women, many of them temporary seasonal workers hired during the October through August export season. Sorting wages are typically paid per bag processed, incentivizing speed, which is why machine pre-sorting matters: workers sorting a heavily defective lot cannot sustain the same accuracy per bean as workers handling a mostly clean lot.
      </p>

      <p className='my-4'>
        For Grade 1 specialty lots, most Ethiopian dry mills run the coffee through at least two passes under hand sorting: one pass after color sorting, and a final check pass before bagging. This double-pass protocol is standard for lots targeting SCA cupping scores of 85 and above.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-2'>Stage 8: Weighing, Bagging, and GrainPro Lining</h3>

      <p className='my-4'>
        Once sorted, green coffee is weighed into 60-kilogram lots and packed into jute bags. For specialty-grade Ethiopian coffee, the jute bag is lined with a GrainPro or similar hermetic liner before filling. GrainPro liners create a near-airtight microenvironment inside the bag, dramatically slowing the oxidation and moisture exchange that degrade green coffee freshness during multi-week ocean transit.
      </p>

      <p className='my-4'>
        Bags are sewn, stacked, and held in a temperature-controlled warehouse until container loading. At loading, a certified sampler takes random samples from multiple bags per lot (typically 8 to 12 bags per 300-bag container) for the pre-shipment sample set. The container should only be sealed once the exporter and buyer have both approved the pre-shipment samples.
      </p>

      {/* Section 4: Washed vs Natural */}
      <h2 className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineBeaker className='inline mr-2 text-amber-600' />
        Washed vs. Natural: Different Milling Paths Through the Same Facility
      </h2>

      <p className='my-4'>
        Processing method changes what the dry mill actually encounters, and operators must adjust accordingly.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Washed coffees</span> arrive at the dry mill as dried parchment with moisture content typically between 11.0 and 12.5 percent. The parchment shell is relatively thin and uniform, making hulling predictable. Size and density are more homogenous because the washed process removes the cherry before drying, and sorting was typically performed at the washing station. Color sorting is straightforward because the desired color range is narrow and well-defined.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Natural (dry-process) coffees</span> arrive as hulled green beans, having been pre-hulled in the interior to remove the dried cherry, or they may arrive as whole dried cherries requiring a first-pass hulling at the Addis mill. Naturals have greater size variation, broader density distribution, and far wider color variance due to fermentation-influenced color development. Color-sorter sensitivity must be reduced, and hand-sorting passes are more intensive. Naturals typically generate 5 to 10 percent more milling waste per input kilogram than washed lots.
      </p>

      {/* Section 5: Yield */}
      <h2 className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineScale className='inline mr-2 text-amber-600' />
        Yield and Losses: What Buyers Need to Know
      </h2>

      <p className='my-4'>
        Milling yield is the ratio of export-ready green coffee output to dried parchment or cherry input. It affects both cost and total available volume and is a number every importer should understand before placing an order.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm text-left border border-gray-200'>
          <thead className='bg-gray-100 font-bold text-dark'>
            <tr>
              <th className='px-4 py-3 border-b'>Input Type</th>
              <th className='px-4 py-3 border-b'>Target Grade</th>
              <th className='px-4 py-3 border-b'>Typical Green Yield</th>
              <th className='px-4 py-3 border-b'>Milling Loss</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 text-gray-700'>
            <tr>
              <td className='px-4 py-3 font-medium'>Washed parchment (11-12% MC)</td>
              <td className='px-4 py-3'>G1 specialty</td>
              <td className='px-4 py-3'>78-82%</td>
              <td className='px-4 py-3'>18-22% (parchment, dust, defects, below-grade)</td>
            </tr>
            <tr>
              <td className='px-4 py-3 font-medium'>Washed parchment</td>
              <td className='px-4 py-3'>G2 specialty</td>
              <td className='px-4 py-3'>82-86%</td>
              <td className='px-4 py-3'>14-18%</td>
            </tr>
            <tr>
              <td className='px-4 py-3 font-medium'>Natural (pre-hulled green)</td>
              <td className='px-4 py-3'>G1 specialty</td>
              <td className='px-4 py-3'>72-78%</td>
              <td className='px-4 py-3'>22-28% (higher color/density loss)</td>
            </tr>
            <tr>
              <td className='px-4 py-3 font-medium'>Natural (whole dried cherry)</td>
              <td className='px-4 py-3'>G4 commercial</td>
              <td className='px-4 py-3'>40-48%</td>
              <td className='px-4 py-3'>52-60% (cherry hull, pulp, defects)</td>
            </tr>
            <tr>
              <td className='px-4 py-3 font-medium'>Natural cherry (Djimmah/Lekempti)</td>
              <td className='px-4 py-3'>G5 commercial</td>
              <td className='px-4 py-3'>38-44%</td>
              <td className='px-4 py-3'>56-62%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        These yield figures explain why FOB prices for washed specialty lots appear higher per kilogram than commercial naturals. When you calculate cost per kilogram of green output from parchment input, the gap narrows considerably. It also explains why exporters must purchase significantly more parchment coffee to fill a G1 specialty container than to fill a commercial G4 container of the same net weight.
      </p>

      {/* Section 6: QC and Pre-Shipment */}
      <h2 className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineClipboardDocumentList className='inline mr-2 text-amber-600' />
        Quality Control at the Dry Mill: The Pre-Shipment Sample
      </h2>

      <p className='my-4'>
        The pre-shipment sample (PSS) is the QC gate between dry mill and container loading. It is taken from random bags in the milled lot, typically after final hand sorting but before bags are sealed. The PSS serves two functions: it allows the exporter to confirm the lot meets the contracted specification, and it gives the buyer a final opportunity to approve or reject before the container is sealed and invoiced.
      </p>

      <p className='my-4'>
        A properly executed PSS draw samples from multiple bags per lot. For a 320-bag (19.2 MT) container, a credible PSS uses samples from at least 10 to 15 percent of the bags, drawn randomly rather than from top layers only. The combined sample is split into at minimum three parts: one for the exporter's cupping lab, one for the buyer, and one retained as a sealed reference. In Ethiopia, ECTA also requires exporters to submit samples for official green coffee grading before any lot can leave the country.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3'>What the PSS reveals about dry milling quality</h4>
        <ul className='text-sm space-y-2'>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Screen uniformity:</span> A well-milled G1 lot should have 90%+ of beans on the declared screen size. More than 10% undersized beans signals poor size grading or a mixed-lot issue.</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Defect count:</span> Ethiopian G1 allows a maximum of 3 primary defects per 300g sample. If your PSS physical analysis shows higher counts, the lot has not been sufficiently hand sorted.</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Moisture content:</span> Should read between 10.5 and 12.5% on a calibrated moisture meter. Below 10% risks brittleness and fracture during roasting. Above 12.5% risks mold during transit.</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Cup score alignment:</span> The cupped score should be within 1 SCA point of the type sample score. A gap of more than 2 points suggests either the PSS was pulled from atypical bags or the lot has degraded during milling.</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineExclamationTriangle className='text-amber-500 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Odor check:</span> Physically inspect the PSS green coffee. Any musty, earthy, or fermented odor that was not present in the type sample indicates contamination during milling or storage, possibly from adjacent lots in the warehouse.</span>
          </li>
        </ul>
      </div>

      {/* Section 7: Importer Checklist */}
      <h2 className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineClipboardDocumentList className='inline mr-2 text-amber-600' />
        What Importers Should Ask Their Exporter About Dry Milling
      </h2>

      <p className='my-4'>
        The dry milling process is largely invisible to buyers who work purely through samples and cupping scores. But asking the right questions before you commit to a contract can prevent expensive surprises. The following checklist covers the minimum information a buyer should confirm with any Ethiopian exporter before issuing a purchase order.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold text-base mb-3 text-dark'>Mill Ownership and Process</h5>
          <ul className='text-sm space-y-1 text-gray-700'>
            <li>• Does the exporter own the dry mill or use toll milling?</li>
            <li>• What quality control protocols does the mill run on each lot?</li>
            <li>• What huller type is used, and how is moisture calibration managed?</li>
            <li>• Is polishing used? Can it be skipped on request?</li>
            <li>• How many hand-sorting passes does a G1 lot receive?</li>
          </ul>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold text-base mb-3 text-dark'>Lot Tracking and Separation</h5>
          <ul className='text-sm space-y-1 text-gray-700'>
            <li>• How is the lot tracked through the mill to prevent mixing with other origins or grades?</li>
            <li>• Are bags marked continuously from parchment intake to final sealing?</li>
            <li>• What is the procedure if the lot fails internal QC after milling?</li>
            <li>• Can the buyer request to be present during milling or container loading?</li>
          </ul>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold text-base mb-3 text-dark'>Pre-Shipment Sample Protocol</h5>
          <ul className='text-sm space-y-1 text-gray-700'>
            <li>• From how many bags in the lot is the PSS drawn?</li>
            <li>• Is the PSS taken before or after final hand-sorting?</li>
            <li>• Will a sealed reference split be retained by the exporter?</li>
            <li>• What is the shipping timeline from PSS approval to container loading?</li>
          </ul>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold text-base mb-3 text-dark'>Packaging Specification</h5>
          <ul className='text-sm space-y-1 text-gray-700'>
            <li>• Are GrainPro or hermetic liners standard, or an add-on cost?</li>
            <li>• What is the net weight per bag, and is the scale certified?</li>
            <li>• How is the container loaded (loose stack vs. palletized)?</li>
            <li>• Are desiccants or container drying systems used?</li>
          </ul>
        </div>
      </div>

      {/* Sources section */}
      <div className='my-8'>
        <h3 className='text-xl font-extrabold mb-3'>Sources and Further Reading</h3>
        <ul className='list-disc ml-5 space-y-2 text-sm'>
          <li>
            <a href='https://www.nordicapproach.no/post/dry-milling-in-ethiopia-why-quality-depends-on-it' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>
              Nordic Approach — "Dry milling in Ethiopia: why quality depends on it" (2025)
            </a>
          </li>
          <li>
            <a href='https://www.trabocca.com/coffee-knowledge/coffee-supply-chains/how-a-coffee-dry-mill-works-7-step-breakdown/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>
              Trabocca — "How a coffee dry mill works: 7 step breakdown"
            </a>
          </li>
          <li>
            <a href='https://www.ico.org/trade_statistics.asp' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>
              International Coffee Organization (ICO) — Trade Statistics
            </a>
          </li>
          <li>
            <a href='https://www.scaa.org/PDF/resources/grading-green-coffee.pdf' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>
              SCA — Green Coffee Grading and Classification Standards
            </a>
          </li>
        </ul>
      </div>

      {/* FAQ */}
      <section className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h2 className='text-2xl font-bold mb-6 text-gray-900'>
          Frequently Asked Questions About Ethiopian Coffee Dry Milling
        </h2>
        <div className='space-y-6'>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>What is dry milling in coffee?</h3>
            <p className='text-sm text-gray-600'>
              Dry milling is the post-drying mechanical stage that converts dried parchment or whole dried cherries into clean, sorted, graded green coffee ready for export. It includes hulling, size grading, density sorting, color sorting, hand sorting, and bagging. It is distinct from wet milling, which occurs at the washing station immediately after harvest.
            </p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>How does dry milling affect cup quality?</h3>
            <p className='text-sm text-gray-600'>
              Dry milling removes defects that directly harm cup quality: full blacks, full sours, insect-damaged beans, and quakers all degrade the cup when unknowingly roasted. Size and density grading also ensure roast uniformity, which is a prerequisite for consistent flavor development across a production batch.
            </p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>How much parchment coffee does it take to produce one kilogram of export-ready green beans?</h3>
            <p className='text-sm text-gray-600'>
              For washed specialty lots targeting Grade 1, typically 1.20 to 1.28 kg of dried parchment input is required per kilogram of final green output (78 to 82% yield). Natural lots targeting Grade 1 require approximately 1.28 to 1.39 kg of pre-hulled green input (72 to 78% yield). Whole dried cherry for commercial grades converts at only 40 to 48% due to the weight of the dried cherry hull.
            </p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>What is the difference between ECX milling and direct (DSL) milling in Ethiopia?</h3>
            <p className='text-sm text-gray-600'>
              ECX-route coffee is first hulled at regional ECX warehouses before auction and then receives final grading and sorting at the buyer's chosen dry mill in Addis Ababa. DSL-route coffee goes directly from the cooperative or washing station to the exporter's contracted dry mill, where the full milling sequence is performed. DSL offers more traceability and control over the complete milling process.
            </p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>Why does screen size matter for roasters?</h3>
            <p className='text-sm text-gray-600'>
              Beans of different sizes roast at different rates. A mixed-screen lot roasts unevenly: large beans are under-developed while small beans are over-developed in the same drum. A uniformly screen-graded lot allows the roaster to dial in one profile that performs consistently, which reduces batch variation and improves yield at the roaster's end.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3'>Source Ethiopian Coffee with Full Milling Transparency</h3>
        <p className='my-2 text-sm'>
          Ethio Coffee Export PLC operates directly from Addis Ababa. Our three decades of sourcing relationships span cooperatives and washing stations across Yirgacheffe, Sidama, Guji, Harar, Limu, and Jimma. We manage milling through vetted dry mill partners and provide pre-shipment samples from every lot before container sealing. No surprises at the port.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link
            href='/offerings'
            className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'
          >
            View Current Offerings
          </Link>
          <Link
            href='/contact-us'
            className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'
          >
            Request Samples
          </Link>
          <Link
            href='/ordering-info'
            className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'
          >
            How to Order
          </Link>
        </div>
      </div>

      {/* Related Articles */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-6'>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Quality &amp; Processing</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/ethiopian-dry-coffee-production-quality-control' className='text-amber-700 hover:underline'>Ethiopian Dry Coffee: QC Standards and Processing</Link></li>
              <li>• <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality: Defects and Grading Guide</Link></li>
              <li>• <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs. Natural Ethiopian Coffee Processing</Link></li>
              <li>• <Link href='/insights/anaerobic-ethiopian-coffee-processing-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Anaerobic Coffee Processing: A Buyer&apos;s Guide</Link></li>
              <li>• <Link href='/insights/coffee-is-processing-drying-milling' className='text-amber-700 hover:underline'>Coffee Processing, Drying, and Milling Overview</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Sourcing &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export Guide</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability: Buyer&apos;s Guide</Link></li>
              <li>• <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup and Evaluate Ethiopian Coffee Samples</Link></li>
              <li>• <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline'>Green Coffee Shelf Life and Storage Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Pricing &amp; Import</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost: Import Cost Guide</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts and Payment Terms</Link></li>
              <li>• <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline'>Specialty Coffee Storage in Sea Freight</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Ethiopian Origins</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline'>Yirgacheffe Coffee: Origin Profile</Link></li>
              <li>• <Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline'>Sidamo Coffee: Origin Profile</Link></li>
              <li>• <Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline'>Guji Coffee: Origin Profile</Link></li>
              <li>• <Link href='/ethiopian-green-coffee-beans' className='text-amber-700 hover:underline'>Ethiopian Green Coffee Beans: All Origins</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Export PLC (Addis Ababa, Ethiopia). This article reflects our operational experience working with dry mill partners across the Ethiopian export supply chain. Yield figures and process descriptions represent general industry ranges; specific lot outcomes vary by origin, season, and mill calibration. Contact us for current specifications on available lots.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> ·{' '}
          <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> ·{' '}
          <Link href='/about' className='underline'>About Ethio Coffee</Link> ·{' '}
          <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

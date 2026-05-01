import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineGlobeAlt,
  HiOutlineCurrencyDollar,
  HiOutlineDocumentText,
  HiOutlineTruck,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiOutlineBuildingOffice,
  HiOutlineBeaker,
  HiOutlineExclamationTriangle,
  HiOutlineScale,
  HiOutlineUserGroup,
} from 'react-icons/hi2'

type InsightContentProps = { title: string; date: string; large_image_url: string }

export default function ImportingEthiopianCoffeeToSpain({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Import Ethiopian coffee to Spain with SOIVRE compliance, AEAT customs, Valencia and Barcelona port logistics, IVA planning, EUDR traceability, and buyer strategy
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Spain imported 306,000 tonnes of green coffee in 2023, making it Europe&apos;s fourth-largest market and a growing destination for specialty Ethiopian Arabica.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md bg-gray-200 flex items-center justify-center'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Import Ethiopian coffee to Spain - Valencia port SOIVRE AEAT customs IVA specialty coffee guide'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      {/* CATEGORY TAG */}
      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Import Guide / Spain Market / Ethiopian Coffee Export / B2B Intelligence</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />
          Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Spain is Europe&apos;s fourth-largest green coffee importer and the world&apos;s largest decaffeinated coffee market. Ethiopian green coffee enters Spain at 0% import duty under the EBA scheme (Everything But Arms), subject only to deferred IVA at 21%. Spain&apos;s SOIVRE office conducts phytosanitary inspection on green coffee at the port of entry. Since December 2025, importers must meet EUDR due diligence requirements with plot-level geolocation data. The specialty segment is growing fastest in Madrid and Barcelona, where Ethiopian washed Arabicas command a clear positioning advantage over Vietnam&apos;s dominant Robusta supply.
        </p>
      </div>

      <p className='text-lg leading-relaxed my-4'>
        To import Ethiopian coffee to Spain, you work within a market that is simultaneously one of Europe&apos;s most price-sensitive and one of its most rapidly premiumizing. Spain consumed 4.17 kg of coffee per person in 2023, with 95% of Spaniards drinking coffee regularly. Yet the dominant Torrefacto tradition (sugar-roasted Robusta blends) is losing ground to specialty Arabica. Ethiopian washed and natural coffees from Yirgacheffe, Guji, and Sidamo are positioned directly in the path of that shift.
      </p>
      <p className='my-4'>
        This guide covers the full import process: Spain-specific regulatory requirements (SOIVRE, AEAT customs, IVA), port logistics for Valencia, Barcelona, and Algeciras, EUDR traceability obligations, a worked landed cost example, and a buyer segment breakdown for Spanish roasters and traders. For Ethiopian origin profiles and grading, see our <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Ethiopian coffee origins guide</Link>.
      </p>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#es-market' className='text-amber-700 hover:underline'>1. Spain&apos;s Coffee Identity: Torrefacto, Decaf, and Specialty</a></li>
          <li><a href='#es-ethiopian-fit' className='text-amber-700 hover:underline'>2. Where Ethiopian Coffee Fits in the Spanish Market</a></li>
          <li><a href='#es-regulations' className='text-amber-700 hover:underline'>3. EU Food Safety Requirements</a></li>
          <li><a href='#es-soivre' className='text-amber-700 hover:underline'>4. Spain-Specific Compliance: SOIVRE and AEAT</a></li>
          <li><a href='#es-duties' className='text-amber-700 hover:underline'>5. Import Duties, EBA Access, and IVA Structure</a></li>
          <li><a href='#es-shipping' className='text-amber-700 hover:underline'>6. Shipping Djibouti to Valencia, Barcelona, and Algeciras</a></li>
          <li><a href='#es-eudr' className='text-amber-700 hover:underline'>7. EUDR Compliance for Ethiopian Coffee in Spain</a></li>
          <li><a href='#es-cost' className='text-amber-700 hover:underline'>8. Landed Cost: 20ft Container Worked Example</a></li>
          <li><a href='#es-buyers' className='text-amber-700 hover:underline'>9. Spanish Coffee Buyer Segments</a></li>
          <li><a href='#es-docs' className='text-amber-700 hover:underline'>10. Documentation Checklist</a></li>
          <li><a href='#es-timeline' className='text-amber-700 hover:underline'>11. Import Process Timeline</a></li>
          <li><a href='#es-faq' className='text-amber-700 hover:underline'>12. FAQ</a></li>
        </ol>
      </div>

      {/* SECTION 1 */}
      <h3 id='es-market' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineChartBar className='w-8 h-8 text-amber-600' />
        1. Spain&apos;s Coffee Identity: Torrefacto, Decaf, and Specialty
      </h3>
      <p className='my-4'>
        Spain&apos;s coffee culture is shaped by three structural forces that directly determine which Ethiopian coffees you should import and how to position them.
      </p>

      <div className='grid md:grid-cols-3 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2 text-amber-700'>Torrefacto Decline</h4>
          <p className='text-sm text-gray-700'>
            Torrefacto coffee (Robusta roasted with added sugar) once dominated Spain. It now accounts for 12.5% of consumption and is declining as younger urban consumers reject its bitterness. Each percentage point lost creates direct demand for cleaner, origin-forward Arabica.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2 text-amber-700'>Decaf World #1</h4>
          <p className='text-sm text-gray-700'>
            Spain is the world&apos;s largest market for decaffeinated coffee. In 2023, 20% of all coffee consumed in Spain was decaf, and Spain imported 28,500 tonnes of green decaffeinated beans (far ahead of Switzerland at 10,000 tonnes). Late-night café culture drives this: Spaniards want coffee at 11 PM without losing sleep.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2 text-amber-700'>Specialty Surge</h4>
          <p className='text-sm text-gray-700'>
            Madrid and Barcelona lead Europe in specialty coffee search interest per capita. Spain hosts 250&ndash;300 roasters, a growing share of which are micro and specialty operations sourcing single-origin lots. The Barcelona Coffee Awards and Valencia is Coffee festival signal a market maturing fast at the premium end.
          </p>
        </div>
      </div>

      <p className='my-4'>
        According to the <a href='https://www.cbi.eu/market-information/coffee/spain/market-potential' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>CBI Spain market study</a>, Spain imported 306,000 tonnes of green coffee in 2023, ranking fourth in Europe behind Germany, Belgium, and the Netherlands. Vietnam supplied 124,000 tonnes (Robusta), and Brazil supplied 55,000 tonnes (commodity Arabica). Ethiopian coffee accounted for approximately $9.93 million in Spanish imports in 2023, a figure that understates total Ethiopian volume because some enters Spain re-exported through German or Dutch intermediaries. Spain also serves as a re-export hub: it re-shipped 26,800 tonnes of green coffee onward to Germany, Portugal, Belgium, and France in 2023.
      </p>

      {/* SECTION 2 */}
      <h3 id='es-ethiopian-fit' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        2. Where Ethiopian Coffee Fits in the Spanish Market
      </h3>
      <p className='my-4'>
        Ethiopian Arabica occupies a structurally distinct position from Spain&apos;s dominant Robusta supply. Understanding this gap determines how to buy and how to sell.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Segment</th>
              <th className='p-3 text-left font-bold'>Dominant Supply</th>
              <th className='p-3 text-left font-bold'>Ethiopian Coffee Role</th>
              <th className='p-3 text-left font-bold'>Opportunity Level</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Commercial Blends (Torrefacto, café bars)</td>
              <td className='p-3'>Vietnam Robusta, Brazilian commodity Arabica</td>
              <td className='p-3'>Marginal; cost-competitive edge needed</td>
              <td className='p-3 text-orange-600 font-bold'>Low</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Supermarket Capsule &amp; Filter</td>
              <td className='p-3'>JDE, Nestlé, private label</td>
              <td className='p-3'>Blend ingredient; Ethiopian natural as flavour anchor</td>
              <td className='p-3 text-yellow-600 font-bold'>Medium</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Specialty Roasters (Madrid, Barcelona, Valencia)</td>
              <td className='p-3'>Specialty traders: Trabocca, Nordic Approach, Sucafina</td>
              <td className='p-3'>Core single-origin and espresso blend component; Yirgacheffe, Guji, Sidamo lead</td>
              <td className='p-3 text-green-600 font-bold'>High</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Decaf Processors (Swiss Water, EA method)</td>
              <td className='p-3'>Vietnamese Robusta, Colombian washed Arabica</td>
              <td className='p-3'>Ethiopian washed G1 as quality decaf feedstock; growing niche</td>
              <td className='p-3 text-green-600 font-bold'>High (niche)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Specialty Importers &amp; Traders</td>
              <td className='p-3'>Xorxios, MareTerra, Ally Coffee, Kona Specialty Coffee</td>
              <td className='p-3'>Direct origin sourcing; Ethio Coffee Export as supply partner</td>
              <td className='p-3 text-green-600 font-bold'>High</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Buyer Persona: The Barcelona Specialty Roaster</h4>
        <p className='text-sm text-gray-700'>
          A specialty roaster in Barcelona roasting 10&ndash;15 tonnes per month typically sources through a Dutch or Norwegian importer. Freight and trader margins add 15&ndash;25% over direct-origin FOB prices. Moving to direct sourcing from Ethiopia (buying 1&ndash;3 FCL containers per year through an exporter like Ethio Coffee Export) removes one intermediary layer, reduces the landed cost per kg by €0.80&ndash;1.20, and gives the roaster the provenance story their café accounts and online customers pay for. The regulatory work (EORI, SOIVRE, AEAT clearance) is handled once with a customs agent and applies to every subsequent shipment.
        </p>
      </div>

      {/* SECTION 3 */}
      <h3 id='es-regulations' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineShieldCheck className='w-8 h-8 text-amber-600' />
        3. EU Food Safety Requirements
      </h3>
      <p className='my-4'>
        Spain is an EU member state, so all EU food safety law applies directly. The key requirements for green Ethiopian coffee are:
      </p>
      <ul className='list-disc list-inside space-y-2 my-4 text-sm text-gray-800'>
        <li><span className='font-semibold'>Ochratoxin A (OTA):</span> Maximum 5 ppb (parts per billion) for unroasted coffee under EU Regulation 1881/2006. Ethiopian washed Grades 1&ndash;2 consistently meet this threshold; well-dried naturals typically comply but should be tested.</li>
        <li><span className='font-semibold'>Maximum Residue Levels (MRLs):</span> EU pesticide MRLs apply. Ethiopian forest and semi-forest coffees are inherently low-input. Organic-certified lots carry a pre-cleared status that simplifies border inspection.</li>
        <li><span className='font-semibold'>HACCP documentation:</span> Spanish buyers increasingly request that their export partners operate a basic HACCP-compliant quality management system covering drying, milling, storage, and bagging stages.</li>
        <li><span className='font-semibold'>Labelling:</span> Export bags must show product name, ICO identification code, country of origin, grade, and net weight in kg. Certified coffees must display certification body name and number.</li>
      </ul>
      <p className='my-4'>
        For a full breakdown of green coffee quality evaluation, see our <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>green coffee defects and grading guide</Link>.
      </p>

      {/* SECTION 4 */}
      <h3 id='es-soivre' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineDocumentText className='w-8 h-8 text-amber-600' />
        4. Spain-Specific Compliance: SOIVRE and AEAT
      </h3>
      <p className='my-4'>
        Two Spain-specific bodies govern green coffee imports beyond the EU baseline framework: SOIVRE and AEAT.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>SOIVRE (Official Service for Inspection, Surveillance and Regulation)</h4>
          <p className='text-sm text-gray-700'>
            SOIVRE is Spain&apos;s phytosanitary inspection authority under the Ministry of Industry, Commerce and Tourism. It inspects and certifies the quality and phytosanitary condition of imported agricultural products, including green coffee. SOIVRE issues a certificate confirming that the goods comply with quality standards. This certificate is required to complete Spanish customs clearance for green coffee. SOIVRE offices operate at the major commercial ports: Valencia, Barcelona, Algeciras, Bilbao, and Vigo. Inspection typically takes 1&ndash;3 working days if documentation is complete. Budget €150&ndash;300 per container.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>AEAT (Agencia Estatal de Administración Tributaria)</h4>
          <p className='text-sm text-gray-700'>
            AEAT is Spain&apos;s tax and customs administration agency. It processes customs declarations (submitted through the SAD, Single Administrative Document) and manages IVA collection on imports. The AEAT uses an electronic customs system (ADUANA). Your Spanish customs agent (agente de aduanas) files on your behalf. AEAT may conduct random physical inspections. Importers require an EORI number (Economic Operators Registration and Identification), valid across all EU member states. If you already have an EORI from another EU country, it is valid in Spain.
          </p>
        </div>
      </div>

      <div className='bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg my-6'>
        <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineExclamationTriangle className='text-yellow-600' /> SOIVRE Timing Note
        </h4>
        <p className='text-sm text-gray-700'>
          SOIVRE inspection occurs at the port of entry. Request that your customs agent pre-notify SOIVRE before the vessel arrives using the SABI (Servicio de Autorización de la Balanza de Importación) pre-clearance system where applicable. Pre-notification reduces inspection wait times and is standard practice for experienced Spanish coffee importers.
        </p>
      </div>

      {/* SECTION 5 */}
      <h3 id='es-duties' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='w-8 h-8 text-amber-600' />
        5. Import Duties, EBA Access, and IVA Structure
      </h3>
      <p className='my-4'>
        Ethiopia benefits from the EU&apos;s Everything But Arms (EBA) scheme, which grants duty-free access for all exports except arms and ammunition. For green coffee, this means:
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Coffee Type</th>
              <th className='p-3 text-left font-bold'>HS Code</th>
              <th className='p-3 text-left font-bold'>Standard EU Duty</th>
              <th className='p-3 text-left font-bold'>EBA Rate (Ethiopia)</th>
              <th className='p-3 text-left font-bold'>IVA (Spain)</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Green coffee (non-decaf)</td>
              <td className='p-3'>0901.11</td>
              <td className='p-3'>0%</td>
              <td className='p-3 text-green-600 font-bold'>0%</td>
              <td className='p-3'>21% (deferred)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Green coffee (decaf)</td>
              <td className='p-3'>0901.12</td>
              <td className='p-3'>0%</td>
              <td className='p-3 text-green-600 font-bold'>0%</td>
              <td className='p-3'>21% (deferred)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Roasted coffee (non-decaf)</td>
              <td className='p-3'>0901.21</td>
              <td className='p-3'>7.5%</td>
              <td className='p-3 text-green-600 font-bold'>0% (EBA)</td>
              <td className='p-3'>21% (deferred)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Spain has no coffee-specific excise tax comparable to Germany&apos;s Kaffeesteuer (&euro;2.19/kg on roasted coffee). IVA at 21% applies to the customs value (CIF price) of imported goods and is typically deferred: the importer does not pay at the border but accounts for it in their quarterly IVA return. This cash-flow benefit is significant for large-volume importers. Your customs agent will confirm the IVA accounting treatment for your specific entity structure.
      </p>
      <p className='my-4'>
        To claim 0% EBA duty, the shipment must be accompanied by a <span className='font-semibold'>Form A GSP Certificate of Origin</span> (or an equivalent digital REX declaration) issued by the Ethiopian export authority. Ethio Coffee Export prepares this documentation as part of every commercial shipment.
      </p>

      {/* SECTION 6 */}
      <h3 id='es-shipping' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTruck className='w-8 h-8 text-amber-600' />
        6. Shipping Djibouti to Valencia, Barcelona, and Algeciras
      </h3>
      <p className='my-4'>
        Ethiopian coffee is trucked from Addis Ababa to the Port of Djibouti (900 km, approximately 3&ndash;5 days), where it is containerized and loaded. Spain has three viable port options:
      </p>

      <div className='grid md:grid-cols-3 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Valencia</h4>
          <p className='text-sm text-gray-700'>
            Spain&apos;s largest container port and the primary Mediterranean gateway. Handles the highest coffee volumes entering Spain. Excellent onward trucking connections to Madrid, Zaragoza, and Catalonia. Transit time from Djibouti: 18&ndash;22 days. SOIVRE office on-site. Preferred port for most Spanish coffee importers.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Barcelona</h4>
          <p className='text-sm text-gray-700'>
            Catalonia&apos;s main port. Serves Barcelona&apos;s growing specialty roaster ecosystem directly. Slightly higher port fees than Valencia. Transit time from Djibouti: 18&ndash;22 days (same shipping line routes). Well-suited for smaller importers supplying Catalan and regional specialty accounts.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Algeciras</h4>
          <p className='text-sm text-gray-700'>
            Europe&apos;s largest transhipment hub by volume. Located at the Strait of Gibraltar. Lower transhipment fees, with fast connections to northern EU ports. Best option if you plan to re-export part of the consignment to Germany, Portugal, or Belgium after Spanish clearance.
          </p>
        </div>
      </div>

      <p className='my-4'>
        Before finalizing a gateway, importers can review cargo services and operational tools on the official <a href='https://www.valenciaport.com/en/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>Valenciaport</a> and <a href='https://www.portdebarcelona.cat/en' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>Port of Barcelona</a> websites. Both publish client-service and logistics information that helps buyers compare container handling, access, and onward distribution options.
      </p>

      <p className='my-4'>
        Typical shipping route from Djibouti to Spain: Red Sea passage, Suez Canal, and westward through the Mediterranean. Shipping lines serving this route include MSC, CMA CGM, Hapag-Lloyd, and Maersk. FCL (20ft container) fits 250&ndash;275 bags of 60 kg each (15,000&ndash;16,500 kg net green coffee). LCL consolidation is available for smaller orders, typically through freight consolidators in Rotterdam or Barcelona.
      </p>
      <p className='my-4'>
        Total transit time from Addis Ababa to warehouse in Spain: typically 28&ndash;36 days, accounting for Djibouti port dwell time (5&ndash;7 days), ocean transit (18&ndash;22 days), and Spanish customs clearance (2&ndash;5 days). For full transit timeline context, see our <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian coffee export process guide</Link>.
      </p>

      {/* SECTION 7 */}
      <h3 id='es-eudr' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineGlobeAlt className='w-8 h-8 text-amber-600' />
        7. EUDR Compliance for Ethiopian Coffee in Spain
      </h3>
      <p className='my-4'>
        The EU Deforestation Regulation (EUDR, Regulation 2023/1115) became enforceable on 30 December 2025. Any green coffee placed on the Spanish market must be accompanied by an Operator Due Diligence Statement (DDS) in the EU Information System (EUDR IS). Ethiopia is classified as a <span className='font-semibold'>standard-risk country</span> under the EUDR benchmarking framework.
      </p>
      <p className='my-4'>
        As a Spanish importer, you are the &ldquo;operator&rdquo; under EUDR law. Your due diligence obligations include:
      </p>
      <ul className='list-disc list-inside space-y-2 my-4 text-sm text-gray-800'>
        <li>Collect plot-level geolocation coordinates (polygon or point) for each producing farm or cooperative</li>
        <li>Verify that the land was not deforested after 31 December 2020</li>
        <li>Confirm legality of production under Ethiopian law</li>
        <li>Submit a DDS in the EU EUDR IS before placing the coffee on the market</li>
        <li>Retain records for 5 years</li>
      </ul>
      <p className='my-4'>
        Ethio Coffee Export provides EUDR-compliant traceability packages including farm polygon coordinates, washing station mapping, and chain-of-custody documentation. This documentation transfers directly to your DDS filing. For the full compliance framework, see our <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline'>EUDR compliance guide for Ethiopian coffee</Link>.
      </p>

      {/* SECTION 8: LANDED COST */}
      <h3 id='es-cost' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='w-8 h-8 text-amber-600' />
        8. Landed Cost: 20ft Container Worked Example
      </h3>
      <p className='my-4'>
          The following example is indicative for a 20ft FCL of Ethiopian Yirgacheffe washed Grade 1, shipped FOB Djibouti to Valencia in Q2 2026. Exchange rate assumed: 1 USD = 0.93 EUR, though the exact landed figure will move with the rate locked in at payment and freight booking.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Cost Item</th>
              <th className='p-3 text-left font-bold'>Basis</th>
              <th className='p-3 text-left font-bold'>Indicative Cost (EUR)</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>FOB price (Djibouti)</td>
              <td className='p-3'>260 bags x 60 kg = 15,600 kg at ~€6.20/kg (Yirgacheffe G1 washed)</td>
              <td className='p-3 font-bold'>€96,720</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Ocean freight (Djibouti&ndash;Valencia FCL)</td>
              <td className='p-3'>20ft container</td>
              <td className='p-3'>€2,000&ndash;3,200</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Marine insurance</td>
              <td className='p-3'>0.15% CIF value</td>
              <td className='p-3'>~€150</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Spanish customs duties</td>
              <td className='p-3'>0% (EBA)</td>
              <td className='p-3 text-green-600 font-bold'>€0</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>IVA (21% on CIF value)</td>
              <td className='p-3'>Deferred to IVA return</td>
              <td className='p-3'>€0 at border</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>SOIVRE inspection fee</td>
              <td className='p-3'>Phytosanitary certificate</td>
              <td className='p-3'>€150&ndash;300</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Customs agent fees (agente de aduanas)</td>
              <td className='p-3'>SAD filing, coordination</td>
              <td className='p-3'>€300&ndash;600</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Port handling and terminal charges</td>
              <td className='p-3'>Valencia terminal fees</td>
              <td className='p-3'>€350&ndash;600</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Inland trucking to warehouse</td>
              <td className='p-3'>Valencia port to Madrid (~350 km)</td>
              <td className='p-3'>€800&ndash;1,200</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Warehousing (first 30 days)</td>
              <td className='p-3'>Commercial cold/ambient storage</td>
              <td className='p-3'>€200&ndash;400</td>
            </tr>
            <tr className='border-b border-gray-200 font-bold'>
              <td className='p-3'>Total landed (excl. IVA)</td>
              <td className='p-3'>Per container</td>
              <td className='p-3'>~€100,670&ndash;103,170</td>
            </tr>
            <tr className='border-b border-gray-200 font-bold bg-amber-50'>
              <td className='p-3'>Landed cost per kg</td>
              <td className='p-3'>15,600 kg net</td>
              <td className='p-3'>~€6.45&ndash;6.61/kg</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Compared to Spain&apos;s dominant Robusta supply (FOB ~€2.00&ndash;2.50/kg for Vietnamese Robusta), Ethiopian specialty Arabica at €6.45/kg landed represents a premium of €3.80&ndash;4.50/kg. Spanish specialty roasters selling single-origin pour-over or espresso blends at retail for €28&ndash;55/250g absorb this cost comfortably. The economics are compelling for the right buyer segment.
      </p>
      <p className='my-4'>
        For a comprehensive breakdown methodology, see our <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian coffee landed cost guide</Link>.
      </p>

      {/* SECTION 9 */}
      <h3 id='es-buyers' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineUserGroup className='w-8 h-8 text-amber-600' />
        9. Spanish Coffee Buyer Segments
      </h3>
      <p className='my-4'>
        Spain&apos;s coffee supply chain has distinct layers. Knowing which segment you are entering determines your volume, price expectation, and compliance workload.
      </p>

      <div className='space-y-4 my-6'>
        <div className='bg-green-50 border border-green-200 rounded-lg p-6'>
          <h4 className='font-bold text-lg mb-2'>Large Commercial Importers (Tier 1)</h4>
          <p className='text-sm text-gray-700'>
            Companies such as Icona Café (Madrid), Coprocafé Ibérica (Neumann Kafé Gruppe), Volcafe Iberia, and Louis Dreyfus Company España dominate commercial volume. They buy by the vessel lot and seek reliable supply with consistent grading. Ethiopian coffee at this tier competes on price against Vietnam and Brazil. Entry is difficult for new exporters without established relationships or a significant volume commitment.
          </p>
        </div>
        <div className='bg-blue-50 border border-blue-200 rounded-lg p-6'>
          <h4 className='font-bold text-lg mb-2'>Specialty Green Coffee Traders (Tier 2)</h4>
          <p className='text-sm text-gray-700'>
            Spanish specialty importers including Xorxios, MareTerra Coffee, Ally Coffee, and Kona Specialty Coffee source traceable, cupped lots. They place orders of 5&ndash;25 containers per year, primarily for onward sale to Spain&apos;s 250&ndash;300 roasters. Suppliers need cupping scores (SCA 84+), full traceability, and EUDR documentation. Many accept pre-shipment samples before issuing purchase orders.
          </p>
        </div>
        <div className='bg-amber-50 border border-amber-200 rounded-lg p-6'>
          <h4 className='font-bold text-lg mb-2'>Micro and Specialty Roasters (Tier 3)</h4>
          <p className='text-sm text-gray-700'>
            Spain&apos;s fastest-growing segment: Nomad Coffee, Toma Café, Right Side Coffee Roasters, Sakona Coffee Roasters, and 200+ others. Most buy from Tier 2 traders, but the most ambitious source direct. A direct-sourcing micro-roaster buying 2&ndash;4 FCL containers per year from Ethiopia saves €0.80&ndash;1.20/kg vs. trader mark-up. The customs burden (EORI, customs agent, SOIVRE) costs €1,200&ndash;2,000 per shipment, which breaks even at ~1,500 kg and becomes profitable above 5,000 kg per shipment.
          </p>
        </div>
        <div className='bg-gray-50 border border-gray-200 rounded-lg p-6'>
          <h4 className='font-bold text-lg mb-2'>Decaf Processors and Blenders</h4>
          <p className='text-sm text-gray-700'>
            Spain&apos;s world-leading decaf consumption creates demand for high-quality green Arabica as decaf feedstock. Swiss Water and EA (ethyl acetate) decaffeination processors, largely based in Spain, Germany, and Switzerland, seek clean washed Arabicas with consistent cupping scores. Ethiopian washed G1 Sidamo and Yirgacheffe perform well in decaf processing because their natural acidity survives the process with minimal flavour loss. This is a relatively underdeveloped sourcing channel for Ethiopian coffee and worth pursuing directly.
          </p>
        </div>
      </div>

      {/* SECTION 10 */}
      <h3 id='es-docs' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineDocumentText className='w-8 h-8 text-amber-600' />
        10. Documentation Checklist
      </h3>
      <p className='my-4'>
        The following documents are required for every commercial shipment of Ethiopian green coffee entering Spain. Ethio Coffee Export provides the export-side documents; your Spanish customs agent prepares the import-side filings.
      </p>
      <div className='grid md:grid-cols-2 gap-6 my-6'>
        <div>
          <h4 className='font-semibold mb-3 text-sm text-gray-500 uppercase tracking-wide'>Provided by Ethio Coffee Export (Origin)</h4>
          <ul className='space-y-2 text-sm'>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-500 mt-0.5 flex-shrink-0' />Commercial Invoice (CIF or FOB basis)</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-500 mt-0.5 flex-shrink-0' />Packing List (number of bags, net/gross weight)</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-500 mt-0.5 flex-shrink-0' />Bill of Lading (original, 3 copies)</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-500 mt-0.5 flex-shrink-0' />Coffee Liquoring Unit (CLU) quality certificate</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-500 mt-0.5 flex-shrink-0' />Phytosanitary Certificate (issued by Ethiopia)</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-500 mt-0.5 flex-shrink-0' />Form A Certificate of Origin (or REX declaration) for EBA 0% duty</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-500 mt-0.5 flex-shrink-0' />EUDR traceability package (coordinates, chain-of-custody)</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-500 mt-0.5 flex-shrink-0' />ICO Certificate of Origin</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-500 mt-0.5 flex-shrink-0' />Organic Transaction Certificate (if applicable)</li>
          </ul>
        </div>
        <div>
          <h4 className='font-semibold mb-3 text-sm text-gray-500 uppercase tracking-wide'>Filed by Spanish Importer / Customs Agent</h4>
          <ul className='space-y-2 text-sm'>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-500 mt-0.5 flex-shrink-0' />EORI number (Economic Operators Registration and Identification)</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-500 mt-0.5 flex-shrink-0' />SAD (Single Administrative Document, DUA in Spanish)</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-500 mt-0.5 flex-shrink-0' />SOIVRE pre-notification (SABI system)</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-500 mt-0.5 flex-shrink-0' />EUDR Due Diligence Statement (DDS, filed in EU EUDR IS)</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-500 mt-0.5 flex-shrink-0' />TRACES e-COI (for organic coffee only)</li>
            <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-green-500 mt-0.5 flex-shrink-0' />IVA import accounting declaration (quarterly return)</li>
          </ul>
        </div>
      </div>

      {/* SECTION 11 */}
      <h3 id='es-timeline' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBuildingOffice className='w-8 h-8 text-amber-600' />
        11. Import Process Timeline
      </h3>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Week</th>
              <th className='p-3 text-left font-bold'>Activity</th>
              <th className='p-3 text-left font-bold'>Party Responsible</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Week 1&ndash;2</td>
              <td className='p-3'>Sample request, cupping, contract negotiation, and signing</td>
              <td className='p-3'>Buyer + Ethio Coffee Export</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Week 3&ndash;4</td>
              <td className='p-3'>Payment (LC or TT), lot preparation, Ethiopian export documentation, CLU inspection</td>
              <td className='p-3'>Ethio Coffee Export</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Week 5</td>
              <td className='p-3'>Loading at Djibouti port, vessel departure</td>
              <td className='p-3'>Freight forwarder</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Week 5&ndash;7</td>
              <td className='p-3'>Red Sea and Mediterranean transit (18&ndash;22 days)</td>
              <td className='p-3'>Shipping line</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Week 7&ndash;8</td>
              <td className='p-3'>Arrival Valencia/Barcelona, SOIVRE inspection (1&ndash;3 days), AEAT customs clearance (2&ndash;5 days)</td>
              <td className='p-3'>Spanish customs agent</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Week 8&ndash;9</td>
              <td className='p-3'>Container delivery to warehouse, arrival QC, storage</td>
              <td className='p-3'>Buyer</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        Total elapsed time from signed contract to green coffee in your Spanish warehouse: 7&ndash;9 weeks. Plan accordingly for seasonal crop windows. Yirgacheffe and Guji new crop (washed, harvested October&ndash;January, milled by February) typically arrives in Spain from March through June. For harvest timing across all Ethiopian regions, see our <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian coffee harvest calendar</Link>.
      </p>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Ethiopian Coffee for the Spanish Market</h4>
        <p className='my-2'>
          If you plan to import Ethiopian coffee to Spain, Ethio Coffee Export provides EUDR-compliant traceability, Form A certificates, CLU quality documentation, and pre-shipment samples for Spanish import requirements. Our lots include Yirgacheffe washed G1, Guji natural G1, Sidamo washed G2, and Harar natural G4, matched to the specialty, decaf, and espresso blend segments growing fastest in Spain.
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

      {/* FAQ */}
      <section id='es-faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900'>Frequently Asked Questions</h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Does Spain charge an excise tax on coffee like Germany&apos;s Kaffeesteuer?</h4>
            <p className='text-sm text-gray-600'>
              No. Spain does not levy a coffee excise tax. Green coffee imports face only 21% IVA, and most importers account for it through their quarterly IVA return instead of paying it at the border. That keeps Spain&apos;s landed-cost structure simpler than Germany&apos;s, especially for specialty green coffee.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is SOIVRE and why does it matter for Ethiopian coffee?</h4>
            <p className='text-sm text-gray-600'>
              SOIVRE is Spain&apos;s import inspection service for agricultural goods. For green coffee, it checks documentation and product compliance at the port of entry before customs release. Spanish importers usually pre-notify SOIVRE through their customs agent, which helps keep clearance close to the standard 1&ndash;3 working-day window.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How does Ethiopia&apos;s EBA status affect import duty in Spain?</h4>
            <p className='text-sm text-gray-600'>
              Ethiopia&apos;s Everything But Arms status gives green coffee 0% EU import duty when the shipment includes a valid Form A certificate of origin or REX declaration. Spain still applies IVA on import, but there is no separate customs-duty charge on Ethiopian green coffee.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Can Spanish importers use Valencia to re-export to Portugal or France?</h4>
            <p className='text-sm text-gray-600'>
              Yes. After Spanish customs clearance, coffee can move within the EU single market without a second import procedure. That makes Valencia and Algeciras practical gateways for importers serving Spain first and then redistributing lots to Portugal, France, Belgium, or Germany.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Which Ethiopian origins perform best in the Spanish specialty market?</h4>
            <p className='text-sm text-gray-600'>
              Yirgacheffe washed Grade 1 usually performs best for Spanish filter programs and light-roast café menus. Guji naturals work well in espresso blends, where fruit intensity matters. For decaf and balanced espresso bases, Sidamo washed lots are usually the safest commercial choice.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Other EU Import Guides</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-germany' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to Germany</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-france' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to France</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-italy' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to Italy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Spanish Market & Ethiopian Origins</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/yirgacheffe-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Yirgacheffe Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Guji Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/sidamo-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Sidamo Coffee: Buyer&apos;s Sourcing Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Trade & Logistics</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Contracts &amp; Payment Terms Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline'>Green Coffee Packaging Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality & Sourcing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup &amp; Evaluate Ethiopian Coffee</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Defects &amp; Grading Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Harvest Calendar</Link></li>
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

import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineShieldCheck,
  HiOutlineCheckCircle,
  HiOutlineBeaker,
  HiOutlineCube,
  HiOutlineChartBar,
  HiOutlineTruck,
  HiOutlineGlobeAlt,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function SpecialtyCoffeeFreightStorage({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        How to protect green coffee quality during sea freight: moisture science, hermetic packaging, container stowage, transit timelines, and arrival QC for importers and roasters.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2 text-sm text-gray-500'>
          Green coffee loaded into a 20-foot container at Djibouti port. Packaging, stowage, and condensation management determine whether a specialty lot arrives at the cup score you approved.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Green coffee bags with GrainPro hermetic liners inside a shipping container at Djibouti port, ready for sea freight to importing countries'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Logistics / Quality Control / Storage / Importer Resources</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-2 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0' /> Key Takeaway
        </p>
        <p className='text-sm leading-relaxed'>
          Green coffee is hygroscopic: it absorbs and releases moisture in response to its environment. During a 30 to 60 day sea voyage, container temperature swings of 15 to 50 &#176;C cause condensation (&quot;container sweat&quot;) that degrades cup quality, promotes mold, and accelerates lipid oxidation. The three most effective defenses are hermetic liners (GrainPro or Ecotact), under-deck stowage requests, and container desiccants. Importers who specify these in their purchase contracts protect both quality and margin.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#why-sea-freight-matters' className='text-amber-700 hover:underline'>1. Why Specialty Coffee Storage in Sea Freight Matters</a></li>
          <li><a href='#moisture-science' className='text-amber-700 hover:underline'>2. Moisture Science: EMC and Water Activity</a></li>
          <li><a href='#hermetic-packaging' className='text-amber-700 hover:underline'>3. Hermetic Packaging for Sea Freight</a></li>
          <li><a href='#container-selection' className='text-amber-700 hover:underline'>4. Container Selection and Loading</a></li>
          <li><a href='#vessel-stowage' className='text-amber-700 hover:underline'>5. Vessel Stowage and Placement</a></li>
          <li><a href='#condensation-management' className='text-amber-700 hover:underline'>6. Condensation Management</a></li>
          <li><a href='#transit-timelines' className='text-amber-700 hover:underline'>7. Transit Times and Quality Fade</a></li>
          <li><a href='#lipid-oxidation' className='text-amber-700 hover:underline'>8. Lipid Oxidation and Chemical Aging</a></li>
          <li><a href='#arrival-qc' className='text-amber-700 hover:underline'>9. Arrival QC Protocol</a></li>
          <li><a href='#incoterms' className='text-amber-700 hover:underline'>10. Incoterms, Insurance, and Risk Transfer</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>11. FAQ</a></li>
        </ol>
      </div>

      {/* SECTION 1: WHY IT MATTERS */}
      <h3 id='why-sea-freight-matters' className='text-3xl font-extrabold mt-12 mb-6'>
        1. Why Specialty Coffee Storage in Sea Freight Matters
      </h3>

      <p className='my-4'>
        Specialty coffee storage in sea freight is the highest-risk phase of the supply chain for quality loss. A container of Ethiopian Grade 1 Yirgacheffe priced at $8.50/kg FOB Djibouti holds roughly $153,000 in cargo value. Even a 1 to 2 point cupping score drop caused by poor transit conditions can reduce market value by $0.80 to $1.50/kg, a loss of $14,400 to $27,000 on a single shipment. The cost of preventing that loss (hermetic liners, desiccants, stowage instructions) is typically under $1,500 per container.
      </p>

      <p className='my-4'>
        Between <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='underline font-bold'>export warehouse in Addis Ababa</Link> and arrival at a destination port, green coffee passes through Djibouti&apos;s port, crosses tropical and temperate climate zones, and sits at transshipment hubs. Each stage introduces temperature variation, humidity shifts, and handling risk. Importers who treat freight as someone else&apos;s problem pay the price at the cupping table.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <p className='font-bold mb-2'>The Core Problem: Container Sweat</p>
        <p className='text-sm'>
          When a steel container heats during the day and cools at night, internal air loses its capacity to hold moisture. Water condenses on the container ceiling and drips onto the cargo. This &quot;container sweat&quot; is the single leading cause of mold, musty taints, and the &quot;baggy&quot; defect in otherwise clean specialty lots. The effect is worst on routes that cross multiple climate zones, such as Djibouti to Northern Europe (25 to 40 days) or Djibouti to the US East Coast (35 to 50 days).
        </p>
      </div>

      {/* SECTION 2: MOISTURE SCIENCE */}
      <h3 id='moisture-science' className='text-3xl font-extrabold mt-12 mb-6'>
        2. Moisture Science: EMC and Water Activity
      </h3>

      <p className='my-4'>
        Green coffee beans are hygroscopic. They absorb moisture when ambient humidity rises and release it when humidity drops. This exchange follows the principle of <span className='font-bold'>Equilibrium Moisture Content (EMC)</span>: the bean&apos;s internal moisture stabilizes at a level determined by the surrounding air&apos;s temperature and relative humidity (RH).
      </p>

      <p className='my-4'>
        The <a href='https://www.ico.org/' target='_blank' rel='noopener noreferrer' className='underline font-bold'>International Coffee Organization (ICO)</a> recommends exporting green Arabica at 10.0 to 12.5% moisture content. Ethiopian exporters typically ship at 10.5 to 11.5%, measured at the <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='underline font-bold'>dry mill</Link> before bagging. If the RH inside a container rises above 65 to 70%, beans absorb moisture regardless of their starting point.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-6'>
        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <p className='font-bold text-green-800 mb-1'>Target Water Activity (aW): 0.45 to 0.55</p>
          <p className='text-sm text-gray-700'>Safe for intercontinental sea freight. Enzymatic reactions stall. Mold growth is inhibited. Flavor compounds remain stable.</p>
        </div>
        <div className='bg-red-50 p-5 rounded-lg border border-red-200'>
          <p className='font-bold text-red-800 mb-1'>Danger Zone aW: above 0.60</p>
          <p className='text-sm text-gray-700'>Enables <span className='italic'>Aspergillus</span> mold growth and ochratoxin A (OTA) production. Acidity fades. Volatile aromatic compounds degrade rapidly.</p>
        </div>
      </div>

      <p className='my-4'>
        Water activity (aW) is more predictive than total moisture content because it measures how available the water is for chemical reactions. A lot at 11.5% moisture with aW of 0.50 is more stable than a lot at 11.0% with aW of 0.62. Importers should request both moisture content and water activity readings on pre-shipment documentation. For a full breakdown, see the <Link href='/insights/green-coffee-shelf-life-storage-guide' className='underline font-bold'>green coffee shelf life and storage guide</Link>.
      </p>

      {/* SECTION 3: HERMETIC PACKAGING */}
      <h3 id='hermetic-packaging' className='text-3xl font-extrabold mt-12 mb-6'>
        <HiOutlineShieldCheck className='inline mr-2 text-amber-600' />
        3. Hermetic Packaging for Sea Freight
      </h3>

      <p className='my-4'>
        Hermetic liners (GrainPro, Ecotact, Videplast) placed inside standard 60 kg jute bags are the single most effective tool for protecting green coffee during sea freight. Once sealed, the small amount of oxygen inside the liner is consumed by the bean&apos;s natural respiration. Within 48 to 72 hours, oxygen drops below 3%, halting lipid oxidation, mold growth, and insect activity.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm text-left'>
          <thead className='bg-dark text-primary'>
            <tr>
              <th className='p-3'>Packaging Type</th>
              <th className='p-3'>Moisture Barrier</th>
              <th className='p-3'>Oxygen Barrier</th>
              <th className='p-3'>Cost per 60 kg Bag</th>
              <th className='p-3'>Recommended For</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            <tr>
              <td className='p-3 font-bold'>Jute Only</td>
              <td className='p-3'>None</td>
              <td className='p-3'>None</td>
              <td className='p-3'>$1.00 to $2.00</td>
              <td className='p-3'>Grade 4/5 commodity, short transit (&lt;20 days)</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-bold'>Jute + GrainPro/Ecotact</td>
              <td className='p-3'>High (EVOH multi-layer)</td>
              <td className='p-3'>High</td>
              <td className='p-3'>$2.50 to $5.00</td>
              <td className='p-3'>Grade 1/2 specialty, all sea freight routes</td>
            </tr>
            <tr>
              <td className='p-3 font-bold'>Vacuum-Sealed</td>
              <td className='p-3'>Complete</td>
              <td className='p-3'>Complete (oxygen-free)</td>
              <td className='p-3'>$4.00 to $8.00</td>
              <td className='p-3'>Micro-lots, competition lots, 90+ scores</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        One important caveat: hermetic liners preserve whatever condition exists at the moment of sealing. If a lot is sealed at 13% moisture, the liner preserves the problem. Pre-seal moisture verification is essential. Reputable exporters record moisture readings at bagging and include them on the packing list. For a detailed comparison of bag types and contract specification language, see the <Link href='/insights/green-coffee-packaging-bag-types-guide' className='underline font-bold'>green coffee packaging and bag types guide</Link>.
      </p>

      {/* SECTION 4: CONTAINER SELECTION */}
      <h3 id='container-selection' className='text-3xl font-extrabold mt-12 mb-6'>
        <HiOutlineCube className='inline mr-2 text-amber-600' />
        4. Container Selection and Loading
      </h3>

      <p className='my-4'>
        Standard 20-foot dry containers are the workhorse of the coffee trade. A single 20-foot container holds 250 to 320 bags of 60 kg green coffee (15 to 19.2 metric tons). The choice between container types, and how the container is loaded, directly affects temperature stability and condensation risk.
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-6'>
        <div className='border border-gray-200 p-5 rounded-lg'>
          <h4 className='font-bold mb-2'>Standard Dry Container (Most Common)</h4>
          <p className='text-sm text-gray-700'>Sealed steel box. No ventilation. Relies entirely on packaging and desiccants for moisture control. Adequate for hermetically lined lots. Available at every port.</p>
        </div>
        <div className='border border-gray-200 p-5 rounded-lg'>
          <h4 className='font-bold mb-2'>Ventilated Container</h4>
          <p className='text-sm text-gray-700'>Passive ventilation strips along top and bottom rails allow air exchange. Reduces heat buildup. Less common and more expensive. Vulnerable to salt-air ingress on deck stowage.</p>
        </div>
      </div>

      <div className='bg-amber-50 border border-amber-200 rounded-lg p-6 my-6'>
        <p className='font-bold mb-2'>Loading Best Practices</p>
        <ul className='space-y-2 text-sm'>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 mt-1 flex-shrink-0' />
            <span>Place heavy Kraft paper or cardboard over the top of the cargo stack to absorb ceiling drip before it reaches bags.</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 mt-1 flex-shrink-0' />
            <span>Use pallets or plastic floor liners to prevent &quot;rising damp&quot; from the container floor, which retains moisture and odors from prior cargoes.</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 mt-1 flex-shrink-0' />
            <span>Leave a small air gap between the cargo and container walls to reduce direct heat transfer from sun-heated steel.</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 mt-1 flex-shrink-0' />
            <span>Load the container during cooler hours (early morning) when possible. Loading in midday heat traps warm, moist air inside with the cargo.</span>
          </li>
        </ul>
      </div>

      <p className='my-4'>
        For high-value micro-lots and competition coffees, thermal radiant barriers (reflective foil liners covering the container interior) reflect up to 97% of radiant heat. These cost $150 to $300 per container and reduce internal temperature peaks by 10 to 15 &#176;C. They are a worthwhile investment for lots valued above $12/kg.
      </p>

      {/* SECTION 5: VESSEL STOWAGE */}
      <h3 id='vessel-stowage' className='text-3xl font-extrabold mt-12 mb-6'>
        5. Vessel Stowage and Placement
      </h3>

      <p className='my-4'>
        Where a container is placed on a vessel determines its temperature exposure. On a modern ultra-large container vessel (ULCV), the temperature difference between a top-deck position in direct sun and an under-deck hold position can reach 20 to 25 &#176;C.
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-6'>
        <div className='bg-green-50 p-5 rounded-lg border-l-4 border-green-500'>
          <p className='font-bold text-gray-900 mb-2'>Request: Under-Deck, Below Waterline</p>
          <p className='text-sm text-gray-700'>The surrounding ocean acts as a thermal buffer. Containers in the hold stay between 18 and 22 &#176;C regardless of surface conditions. This is the optimal position for specialty coffee.</p>
        </div>
        <div className='bg-green-50 p-5 rounded-lg border-l-4 border-green-500'>
          <p className='font-bold text-gray-900 mb-2'>Request: Mid-Ship Placement</p>
          <p className='text-sm text-gray-700'>Reduces vertical motion and vibration. Minimizes mechanical stress on bags and reduces the risk of bean breakage in lower-density lots.</p>
        </div>
        <div className='bg-red-50 p-5 rounded-lg border-l-4 border-red-500'>
          <p className='font-bold text-gray-900 mb-2'>Avoid: Top-Deck Stowage</p>
          <p className='text-sm text-gray-700'>Direct sun exposure can push internal container temperatures to 55 to 60 &#176;C in tropical waters. This accelerates lipid oxidation and destroys volatile aromatics.</p>
        </div>
        <div className='bg-red-50 p-5 rounded-lg border-l-4 border-red-500'>
          <p className='font-bold text-gray-900 mb-2'>Avoid: Engine Room Bulkhead</p>
          <p className='text-sm text-gray-700'>Radiant heat from the engine room creates hot spots in adjacent hold positions. Coffee stored near bulkheads ages unevenly.</p>
        </div>
      </div>

      <p className='my-4'>
        Not every shipping line accepts stowage requests, and compliance is not guaranteed. Larger importers with volume commitments or freight forwarders with carrier relationships have more leverage. Including &quot;stowage: under deck, away from heat sources&quot; in the booking instruction is a low-cost step that pays off when honored. For <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='underline font-bold'>contract and shipping term guidance</Link>, see the contracts guide.
      </p>

      {/* SECTION 6: CONDENSATION MANAGEMENT */}
      <h3 id='condensation-management' className='text-3xl font-extrabold mt-12 mb-6'>
        6. Condensation Management
      </h3>

      <p className='my-4'>
        Even with hermetic liners, the container environment matters. Condensation forms on unprotected jute exteriors, on the container ceiling, and on any exposed surface when temperatures drop. Three layers of defense manage this risk beyond the bag itself.
      </p>

      <div className='grid md:grid-cols-3 gap-6 my-6'>
        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h4 className='font-bold mb-2 text-sm'>Desiccants</h4>
          <p className='text-sm text-gray-700'>Calcium chloride desiccant strips or &quot;dry bags&quot; (2 kg units) hung from container hooks absorb up to 6 liters of water each. Standard practice is 6 to 10 units per 20-foot container. Cost: $30 to $60 per container.</p>
        </div>
        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h4 className='font-bold mb-2 text-sm'>Kraft Paper Blotters</h4>
          <p className='text-sm text-gray-700'>Heavy Kraft paper or multi-ply cardboard layered over the top of the cargo stack intercepts ceiling drip before it reaches bags. A simple, inexpensive second line of defense.</p>
        </div>
        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h4 className='font-bold mb-2 text-sm'>Floor Protection</h4>
          <p className='text-sm text-gray-700'>Pallets or heavy-duty plastic liners prevent moisture wicking up from the container floor. Container floors often retain moisture or chemical residue from previous cargo.</p>
        </div>
      </div>

      <p className='my-4'>
        Washed coffees are more vulnerable to moisture-related taints than naturals because of their lower lipid surface coating and more porous cell structure. For washed Ethiopian lots (Yirgacheffe, Sidamo, Limu), all three condensation management layers are recommended in addition to hermetic liners.
      </p>

      {/* SECTION 7: TRANSIT TIMES */}
      <h3 id='transit-timelines' className='text-3xl font-extrabold mt-12 mb-6'>
        <HiOutlineGlobeAlt className='inline mr-2 text-amber-600' />
        7. Transit Times and Quality Fade
      </h3>

      <p className='my-4'>
        Transit duration directly affects quality, especially for high-scoring lots with delicate floral and fruit notes. Ethiopian coffee ships from Djibouti, and transit times vary significantly by destination. Disruptions in the Red Sea corridor (ongoing through 2025 and 2026) have added 10 to 20 days to European routes via the Cape of Good Hope reroute.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm text-left'>
          <thead className='bg-dark text-primary'>
            <tr>
              <th className='p-3'>Route (from Djibouti)</th>
              <th className='p-3'>Typical Transit</th>
              <th className='p-3'>Extended (2025/26)</th>
              <th className='p-3'>Climate Zones Crossed</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            <tr>
              <td className='p-3 font-bold'>Jeddah / Dubai</td>
              <td className='p-3'>5 to 10 days</td>
              <td className='p-3'>7 to 14 days</td>
              <td className='p-3'>1 (tropical/arid)</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-bold'>Hamburg / Antwerp</td>
              <td className='p-3'>25 to 35 days</td>
              <td className='p-3'>35 to 50 days (via Cape)</td>
              <td className='p-3'>3 to 4 (tropical, temperate, cold)</td>
            </tr>
            <tr>
              <td className='p-3 font-bold'>New York / New Jersey</td>
              <td className='p-3'>35 to 45 days</td>
              <td className='p-3'>45 to 65 days</td>
              <td className='p-3'>3 to 4</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-bold'>Yokohama / Busan</td>
              <td className='p-3'>20 to 30 days</td>
              <td className='p-3'>25 to 35 days</td>
              <td className='p-3'>2 to 3 (tropical, subtropical)</td>
            </tr>
            <tr>
              <td className='p-3 font-bold'>Melbourne</td>
              <td className='p-3'>25 to 35 days</td>
              <td className='p-3'>30 to 45 days</td>
              <td className='p-3'>2 to 3</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Quality Fade Timeline (Washed Arabica, Hermetically Sealed)</h4>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm text-left'>
          <thead className='bg-dark text-primary'>
            <tr>
              <th className='p-3'>Transit Window</th>
              <th className='p-3'>Expected Impact</th>
              <th className='p-3'>Risk</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            <tr>
              <td className='p-3 font-bold'>0 to 45 days</td>
              <td className='p-3'>Negligible profile change.</td>
              <td className='p-3 text-green-700 font-bold'>Low</td>
            </tr>
            <tr className='bg-amber-50'>
              <td className='p-3 font-bold'>46 to 75 days</td>
              <td className='p-3'>Minor loss of bright acidity. Delicate florals begin to mute.</td>
              <td className='p-3 text-amber-700 font-bold'>Moderate</td>
            </tr>
            <tr className='bg-red-50'>
              <td className='p-3 font-bold'>Over 75 days</td>
              <td className='p-3'>Risk of &quot;baggy&quot; notes. Sweetness drops. Measurable cupping score loss (1 to 3 points).</td>
              <td className='p-3 text-red-700 font-bold'>High</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        For lots in the moderate or high-risk transit window, vacuum-sealed packaging provides a meaningful additional layer of protection. Discuss transit estimates with your exporter and freight forwarder before committing to packaging specifications. Seasonal buying aligned with the <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='underline font-bold'>Ethiopian coffee harvest calendar</Link> helps reduce storage time at origin and total time in the supply chain.
      </p>

      {/* SECTION 8: LIPID OXIDATION */}
      <h3 id='lipid-oxidation' className='text-3xl font-extrabold mt-12 mb-6'>
        <HiOutlineBeaker className='inline mr-2 text-amber-600' />
        8. Lipid Oxidation and Chemical Aging
      </h3>

      <p className='my-4'>
        Green Arabica beans contain 14 to 17% lipids by dry weight. When these fats contact oxygen and heat, they break down into aldehydes and ketones that produce papery, woody, and cardboard-like off-flavors. This process, lipid oxidation, is the chemical mechanism behind the &quot;baggy&quot; defect that importers and roasters identify in degraded lots.
      </p>

      <div className='bg-gray-50 border border-gray-200 rounded-lg p-6 my-6'>
        <p className='font-bold mb-2'>The Temperature Rule</p>
        <p className='text-sm'>
          For every 10 &#176;C increase in temperature, the rate of lipid oxidation approximately doubles (the Van &apos;t Hoff principle). A lot traveling at 40 &#176;C for 30 days undergoes the same chemical aging as a lot stored at 20 &#176;C for 120 days. This is why top-deck stowage (which can reach 55 to 60 &#176;C) destroys specialty scores, and why under-deck stowage (18 to 22 &#176;C) is worth requesting.
        </p>
      </div>

      <p className='my-4'>
        Hermetic liners reduce oxygen below 3%, slowing oxidation dramatically. But temperature acceleration still applies to the residual oxygen and to non-oxidative degradation pathways (Maillard browning, enzymatic reactions). Temperature control and oxygen control work together; neither alone is sufficient for premium lots on long routes.
      </p>

      <p className='my-4'>
        Light roasts expose oxidation damage more than dark roasts. For Ethiopian specialty coffees typically roasted light to preserve floral and citrus notes, freight quality management is not optional. A light-roasted Yirgacheffe with lipid-damaged green beans will taste flat and papery regardless of the roaster&apos;s skill. The <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='underline font-bold'>roasting guide for Ethiopian coffee</Link> covers how roast profiles interact with green bean condition.
      </p>

      {/* SECTION 9: ARRIVAL QC */}
      <h3 id='arrival-qc' className='text-3xl font-extrabold mt-12 mb-6'>
        <HiOutlineChartBar className='inline mr-2 text-amber-600' />
        9. Arrival QC Protocol
      </h3>

      <p className='my-4'>
        A professional import operation verifies quality at the point of arrival, not after the coffee reaches the warehouse and gets cupped weeks later. The arrival QC protocol compares the lot against the pre-shipment sample (PSS) that the buyer approved before the exporter loaded the container.
      </p>

      <div className='bg-amber-50 border border-amber-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-4'>Arrival QC Checklist</h4>
        <ol className='space-y-4'>
          <li className='flex gap-3 items-start'>
            <span className='bg-amber-600 text-white rounded-full w-7 h-7 flex flex-shrink-0 items-center justify-center font-bold text-sm'>1</span>
            <div>
              <p className='font-bold'>Seal Verification</p>
              <p className='text-sm text-gray-700'>Confirm the container seal number matches the Bill of Lading. A broken or replaced seal at any transshipment point indicates potential uncontrolled exposure.</p>
            </div>
          </li>
          <li className='flex gap-3 items-start'>
            <span className='bg-amber-600 text-white rounded-full w-7 h-7 flex flex-shrink-0 items-center justify-center font-bold text-sm'>2</span>
            <div>
              <p className='font-bold'>Spot Moisture Testing</p>
              <p className='text-sm text-gray-700'>Test at least 5% of bags with a calibrated meter (Shore or Draminski). A drift of more than 0.5% from the pre-shipment reading suggests a liner breach or condensation ingress.</p>
            </div>
          </li>
          <li className='flex gap-3 items-start'>
            <span className='bg-amber-600 text-white rounded-full w-7 h-7 flex flex-shrink-0 items-center justify-center font-bold text-sm'>3</span>
            <div>
              <p className='font-bold'>Olfactory Check</p>
              <p className='text-sm text-gray-700'>Fresh green coffee smells of dried grass, sweet hay, or peas. Paper, wet jute, or musty notes indicate moisture ingress or mold. Check multiple bags from different positions in the container.</p>
            </div>
          </li>
          <li className='flex gap-3 items-start'>
            <span className='bg-amber-600 text-white rounded-full w-7 h-7 flex flex-shrink-0 items-center justify-center font-bold text-sm'>4</span>
            <div>
              <p className='font-bold'>PSS vs. Arrival Cupping</p>
              <p className='text-sm text-gray-700'>Cup the arrival sample alongside the retained PSS. A drop greater than 1.5 cupping points indicates a logistics failure. Document the result; it is the basis for any quality claim.</p>
            </div>
          </li>
          <li className='flex gap-3 items-start'>
            <span className='bg-amber-600 text-white rounded-full w-7 h-7 flex flex-shrink-0 items-center justify-center font-bold text-sm'>5</span>
            <div>
              <p className='font-bold'>Visual Inspection</p>
              <p className='text-sm text-gray-700'>Check for visible mold, water stains on jute, or broken GrainPro seals. Photograph any damage for insurance and claims documentation.</p>
            </div>
          </li>
        </ol>
      </div>

      <p className='my-4'>
        Port handling, customs brokerage, and destination warehousing also affect the lot before it reaches the roaster. For a full cost breakdown of each post-arrival step, see the <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='underline font-bold'>Ethiopian coffee landed cost guide</Link>.
      </p>

      {/* SECTION 10: INCOTERMS */}
      <h3 id='incoterms' className='text-3xl font-extrabold mt-12 mb-6'>
        <HiOutlineTruck className='inline mr-2 text-amber-600' />
        10. Incoterms, Insurance, and Risk Transfer
      </h3>

      <p className='my-4'>
        The Incoterm in the sales contract determines who bears the risk of quality loss during sea freight. In the Ethiopian coffee trade, two terms dominate.
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-6'>
        <div className='border border-gray-200 p-5 rounded-lg'>
          <h4 className='font-bold mb-2'>FOB Djibouti (Free On Board)</h4>
          <p className='text-sm text-gray-700'>Risk transfers from the exporter to the buyer when the container is loaded onto the vessel at Djibouti port. The buyer arranges and pays for ocean freight and marine cargo insurance. Most common for experienced importers with established freight forwarder relationships.</p>
        </div>
        <div className='border border-gray-200 p-5 rounded-lg'>
          <h4 className='font-bold mb-2'>CFR / CIF Destination</h4>
          <p className='text-sm text-gray-700'>The exporter arranges and pays for freight (CFR) or freight plus insurance (CIF) to the named destination port. Risk still transfers at loading in Djibouti, but the exporter manages the logistics. Preferred by smaller importers or first-time buyers.</p>
        </div>
      </div>

      <p className='my-4'>
        Regardless of Incoterm, marine cargo insurance is essential for specialty coffee. An &quot;all-risk&quot; policy covering physical loss, contamination, and condensation damage typically costs 0.3 to 0.6% of the cargo value. For a container valued at $150,000, that is $450 to $900. Consider &quot;warehouse to warehouse&quot; coverage that extends from the exporter&apos;s warehouse in Addis Ababa to the importer&apos;s warehouse at destination. For further details on <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='underline font-bold'>contract terms and payment methods</Link>, see the contracts guide.
      </p>

      {/* FAQ */}
      <section id='faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900'>Frequently Asked Questions</h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How do you prevent coffee quality loss during sea freight?</h4>
            <p className='text-sm text-gray-600'>Use hermetic liners (GrainPro or Ecotact) inside jute bags, hang calcium chloride desiccants in the container, request under-deck stowage from the shipping line, and layer Kraft paper over the cargo stack. These four measures address the primary risks: moisture migration, condensation, heat exposure, and oxygen contact.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is container sweat and how does it affect green coffee?</h4>
            <p className='text-sm text-gray-600'>Container sweat is condensation that forms on the steel ceiling when a heated container cools rapidly (typically at night or when entering cooler waters). The water drips onto coffee bags, raising moisture content, promoting mold growth, and causing musty or &quot;baggy&quot; flavor taints. Hermetic liners protect the beans inside, while desiccants and blotters manage the container environment.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How long can green coffee remain in transit before quality degrades?</h4>
            <p className='text-sm text-gray-600'>In hermetic packaging at stable temperatures, specialty Arabica shows negligible quality change up to 45 days. Between 46 and 75 days, bright acidity and delicate floral notes begin to mute. Beyond 75 days, the risk of measurable cupping score loss (1 to 3 points) increases significantly, especially for washed lots.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Why is Ethiopian coffee more sensitive to shipping conditions?</h4>
            <p className='text-sm text-gray-600'>Ethiopian heirloom varieties have a different bean density and cellular structure than commercial cultivars. Their signature floral and citrus volatiles (linalool, limonene) are the first compounds to degrade under heat stress. Washed Ethiopian lots, prized for clean acidity, are more porous and absorb moisture faster than naturals with their intact fruit residue layer.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Should importers request specific container placement on the vessel?</h4>
            <p className='text-sm text-gray-600'>Yes. Including &quot;under deck, away from heat sources&quot; in booking instructions is a zero-cost step. Under-deck holds maintain 18 to 22 &#176;C versus 50 to 60 &#176;C on top-deck positions. Compliance is not guaranteed, but carriers are more likely to honor the request when it is formally documented in the booking.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Ethiopian Coffee with Freight Quality Built In</h4>
        <p className='my-2'>
          Ethio Coffee Import and Export PLC ships every specialty lot in GrainPro liners with container desiccants and documented moisture readings at bagging. Request samples, review current offerings, or ask about freight and logistics coordination.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Request Samples</Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>How to Order</Link>
        </div>
      </div>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Storage and Quality</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline'>Green Coffee Shelf Life: Storage Guide for Buyers</Link></li>
              <li>• <Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline'>Green Coffee Packaging: Bag Types Guide</Link></li>
              <li>• <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality Control and Grading</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Dry Milling Export Guide</Link></li>
              <li>• <Link href='/insights/ethiopian-dry-coffee-production-quality-control' className='text-amber-700 hover:underline'>Ethiopian Dry Coffee Production and QC</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing and Logistics</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process Guide</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost Guide</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts and Payment Terms</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Harvest Calendar</Link></li>
              <li>• <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC. Covers specialty coffee storage in sea freight, including moisture science, hermetic packaging, container stowage, transit timelines, and arrival QC protocols for green coffee importers and roasters.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> ·{' '}
          <Link href='/ethiopian-coffee-exporter' className='underline'>Export Services</Link> ·{' '}
          <Link href='/about' className='underline'>About</Link> ·{' '}
          <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}
import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineBeaker,
  HiOutlineBuildingOffice,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineMapPin,
  HiOutlineQuestionMarkCircle,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopianCoffeeWashingStationsBuyersGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        How Ethiopian coffee washing stations shape cup quality, and what importers and roasters should evaluate before committing to volume.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2 text-sm text-gray-500'>
          Coffee cherries arriving at a washing station in southern Ethiopia. The processing decisions made here over the next 48 to 72 hours determine whether the lot grades as specialty or commercial.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian coffee washing station with fermentation tanks and raised drying beds in a lush green highland setting'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Processing Methods / Sourcing Guide / Quality Control / Importer Resources</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-2 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0' /> Key Takeaway
        </p>
        <p className='text-sm leading-relaxed'>
          Ethiopian coffee washing stations are where cherry becomes parchment through pulping, fermentation, and channel washing. Station quality directly determines cup clarity, defect rates, and lot consistency. Importers sourcing Grade 1 and Grade 2 washed Ethiopian coffee should evaluate the station&apos;s water source, fermentation protocol, drying infrastructure, and traceability systems before committing to volume. A well-run station is the single largest quality variable between the tree and the export warehouse.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#what-is-washing-station' className='text-amber-700 hover:underline'>1. What Is a Coffee Washing Station?</a></li>
          <li><a href='#how-stations-process' className='text-amber-700 hover:underline'>2. How Ethiopian Washing Stations Process Coffee</a></li>
          <li><a href='#why-quality-matters' className='text-amber-700 hover:underline'>3. Why Washing Station Quality Matters for Importers</a></li>
          <li><a href='#types-of-stations' className='text-amber-700 hover:underline'>4. Types of Washing Stations in Ethiopia</a></li>
          <li><a href='#how-to-evaluate' className='text-amber-700 hover:underline'>5. How to Evaluate an Ethiopian Washing Station</a></li>
          <li><a href='#regional-profiles' className='text-amber-700 hover:underline'>6. Regional Washing Station Profiles</a></li>
          <li><a href='#station-economics' className='text-amber-700 hover:underline'>7. Washing Station Economics: What Importers Should Know</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>8. FAQ</a></li>
        </ol>
      </div>

      {/* SECTION 1 */}
      <h2 id='what-is-washing-station' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineBeaker className='inline mr-2 text-amber-600' />
        What Is a Coffee Washing Station?
      </h2>

      <p className='my-4'>
        An Ethiopian coffee washing station is the facility where freshly picked coffee cherries are transformed into dried parchment coffee through a series of wet processing steps. The station receives ripe cherry from surrounding smallholder farmers, typically within a 5 to 10 kilometer radius, and processes it within hours of harvest. For importers and roasters who source washed Ethiopian coffee, the washing station is the single most important quality control point in the supply chain.
      </p>

      <p className='my-4'>
        Ethiopia has an estimated 2,500 to 3,000 active washing stations, concentrated in the southern and western growing regions. Each station processes cherry from hundreds (sometimes thousands) of smallholders during the October to January harvest window. The quality of a washed Ethiopian lot is largely defined by what happens at the station during the 48 to 96 hours between cherry intake and the start of drying.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Washing Station vs. Dry Mill: Two Different Facilities</h3>

      <p className='my-4'>
        A common source of confusion for first-time Ethiopian coffee buyers: the washing station (wet mill) and the <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='underline font-bold'>dry mill</Link> are separate facilities that perform different functions at different stages.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse border border-gray-300 font-inconsolata text-sm'>
          <thead className='bg-dark text-primary'>
            <tr>
              <th className='border border-gray-300 p-3 text-left'>Feature</th>
              <th className='border border-gray-300 p-3 text-left'>Washing Station (Wet Mill)</th>
              <th className='border border-gray-300 p-3 text-left'>Dry Mill</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Location</td>
              <td className='border border-gray-300 p-3'>At origin, near farms</td>
              <td className='border border-gray-300 p-3'>In or near Addis Ababa</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Input</td>
              <td className='border border-gray-300 p-3'>Fresh coffee cherry</td>
              <td className='border border-gray-300 p-3'>Dried parchment coffee</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Output</td>
              <td className='border border-gray-300 p-3'>Dried parchment coffee</td>
              <td className='border border-gray-300 p-3'>Export-ready green beans</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Key Steps</td>
              <td className='border border-gray-300 p-3'>Pulping, fermentation, washing, drying</td>
              <td className='border border-gray-300 p-3'>Hulling, size grading, color sorting, hand sorting</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Season</td>
              <td className='border border-gray-300 p-3'>October to January (harvest)</td>
              <td className='border border-gray-300 p-3'>Year-round as needed</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        The washing station determines the coffee&apos;s flavor foundation. The dry mill prepares it for export. Both matter, but cup character is set at the wet mill. For a complete picture of the post-washing-station process, see our <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='underline font-bold'>dry milling export guide</Link>.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>The Role of Washing Stations in Ethiopian Coffee Quality</h3>

      <p className='my-4'>
        Ethiopia&apos;s reputation for producing some of the world&apos;s finest washed coffees traces directly to its washing stations. The floral, citrus, and tea-like clarity that defines top Yirgacheffe and Guji lots is not a product of the variety alone. It emerges from the interaction between <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='underline font-bold'>heirloom varieties</Link>, altitude, and the precise wet processing performed at the station. A poorly managed station will flatten those characteristics regardless of how exceptional the cherry was at intake.
      </p>

      {/* SECTION 2 */}
      <h2 id='how-stations-process' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineBeaker className='inline mr-2 text-amber-600' />
        How Ethiopian Washing Stations Process Coffee
      </h2>

      <p className='my-4'>
        The wet processing sequence at an Ethiopian washing station follows a consistent pattern, though execution quality varies significantly between stations. Understanding each step helps importers ask the right questions when evaluating a supplier&apos;s sourcing. For an overview of the entire chain from cherry to export-ready green coffee, including drying and dry milling, see our <Link href='/insights/coffee-is-processing-drying-milling' className='underline font-bold'>complete guide to coffee processing, drying, and milling</Link>.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Cherry Intake and Float Sorting</h3>

      <p className='my-4'>
        Smallholder farmers deliver freshly picked cherry to the station, usually the same day it is harvested. Station staff visually inspect each delivery and reject underripe (green) and overripe (dark brown or dried) cherries. The accepted cherry is placed in a float tank filled with clean water. Ripe, dense cherries sink; underdeveloped, insect-damaged, or hollow cherries float and are skimmed off. This initial density separation removes defective cherry before it enters the mechanical process. Stations that skip or rush float sorting produce lots with higher defect counts.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Pulping</h3>

      <p className='my-4'>
        The sunken (dense) cherries move to disc or drum pulpers that mechanically strip the outer skin and most of the fruit mucilage from the bean. Well-calibrated pulpers separate the bean cleanly without crushing or nicking it. Poorly calibrated machines create "cuts" and "pulper nips," physical defects that become visible after drying and show up in <Link href='/insights/green-coffee-quality-control-defects-grading' className='underline font-bold'>green coffee quality evaluation</Link>. After pulping, the beans still carry a thick layer of sticky mucilage that must be broken down through fermentation.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Fermentation</h3>

      <p className='my-4'>
        Fermentation is the step that most directly shapes the cup profile of washed Ethiopian coffee. The pulped beans are transferred to concrete or tile-lined fermentation tanks, where naturally occurring microorganisms (yeasts and bacteria) break down the remaining mucilage over a period of 24 to 72 hours. The duration depends on ambient temperature, altitude, and the station manager&apos;s protocol.
      </p>

      <p className='my-4'>
        Ethiopian stations use two primary fermentation methods. Underwater (submerged) fermentation keeps the beans fully covered with water during the process. This method produces the clean, bright acidity and floral clarity associated with top-grade Yirgacheffe lots. Dry fermentation leaves the beans in the tank without water cover, relying on ambient moisture. This method ferments faster and can produce fruitier, more complex (but riskier) profiles. Some stations employ a combination: dry fermentation followed by an underwater soak. The choice of method and duration is one of the key differentiators between stations.
      </p>

      <p className='my-4'>
        Over-fermentation creates vinegary, sour, and acetic flavors that cannot be reversed. Under-fermentation leaves mucilage on the parchment, leading to stickiness during drying and off-flavors in the cup. Station managers test fermentation progress by feel (rubbing parchment between their hands to check if the mucilage has broken down) and by visual cues in the wash water.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Channel Washing and Grading</h3>

      <p className='my-4'>
        After fermentation, the beans are released into long, narrow washing channels fed by flowing clean water. Workers agitate the beans as they move downstream, separating them by density. The heaviest, most dense beans (highest quality) settle first at the top of the channel. Lighter beans travel further downstream. This density grading within the washing channel is a second quality sort that separates the lot into quality tiers before drying even begins. Top-tier stations run the beans through channels two or three times to ensure consistent grading.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Soaking Tanks</h3>

      <p className='my-4'>
        Many premium Ethiopian washing stations add an underwater soaking step after channel washing. The washed parchment sits submerged in clean water tanks for 12 to 24 hours. This soaking period helps develop amino acids in the bean, enhancing sweetness and body in the final cup. Not all stations include this step. Stations that invest in soaking infrastructure generally produce lots that cup higher. Importers should ask whether soaking is part of the station&apos;s standard protocol.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Drying: Raised Beds vs. Patios</h3>

      <p className='my-4'>
        The washed parchment is spread onto drying surfaces, where it must reach a target moisture content of 10 to 12% before storage or transport to the dry mill. Ethiopian specialty stations almost universally use raised African drying beds: elevated mesh tables that allow air to circulate above and below the parchment. Workers turn and sort the beans by hand multiple times per day, removing any visually defective parchment. Drying takes 10 to 15 days depending on weather and altitude.
      </p>

      <p className='my-4'>
        Concrete patios are also used, primarily at higher-volume commercial stations. Patios dry faster due to radiant heat but carry a greater risk of uneven drying and scorching. For specialty-grade washed lots, raised beds are the standard. Shade covers or retractable canopies over drying beds help prevent direct midday sun exposure and overnight dew, both of which compromise drying consistency.
      </p>

      <p className='my-4'>
        The <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='underline font-bold'>harvest calendar</Link> directly affects drying conditions. Early-season lots (October, November) dry under warmer, drier conditions. Late-season lots (December, January) may encounter rain, requiring more careful management and longer drying times.
      </p>

      {/* SECTION 3 */}
      <h2 id='why-quality-matters' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineCheckCircle className='inline mr-2 text-amber-600' />
        Why Washing Station Quality Matters for Importers
      </h2>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Cup Clarity and Defect Rates</h3>

      <p className='my-4'>
        The difference between a Grade 1 and a Grade 3 washed Ethiopian lot often comes down to washing station execution, not the cherry itself. A station with precise fermentation control, thorough channel washing, and careful drying can produce 85+ cupping scores from the same cherry that a poorly managed station turns into a 78. For importers, this means the station name on a pre-shipment sample matters as much as the region.
      </p>

      <p className='my-4'>
        Common quality failures traceable to station-level processing include: fermentation taints (vinegar, onion, or chemical flavors), pulper damage (nicks, cuts), uneven drying (faded or baggy cup), and contamination from dirty water or unclean fermentation tanks. A thorough <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='underline font-bold'>cupping evaluation</Link> will reveal these issues, but knowing what to ask at the station level helps prevent them from reaching your sample table.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Lot Consistency Across Seasons</h3>

      <p className='my-4'>
        Reputable washing stations produce consistent quality year over year because they follow documented protocols: fixed fermentation times, calibrated pulpers, trained sorting staff, and maintained infrastructure. Stations that lack these systems produce erratic results. One season&apos;s sample may cup at 86; the next year&apos;s lot from the same station drops to 80. For importers building a consistent roast profile or brand, identifying stations with repeatable output is essential.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Traceability from Cherry to Parchment</h3>

      <p className='my-4'>
        The washing station is the first aggregation point in the Ethiopian coffee supply chain. Cherry from multiple smallholders is combined into station-level lots. A station that records farmer deliveries, cherry weights, processing dates, and lot separations provides the <Link href='/insights/ethiopian-coffee-traceability-guide' className='underline font-bold'>traceability documentation</Link> that importers increasingly need for <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='underline font-bold'>EUDR compliance</Link> and consumer-facing origin stories. Stations without these records create gaps that are difficult to fill retroactively.
      </p>

      {/* SECTION 4 */}
      <h2 id='types-of-stations' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineBuildingOffice className='inline mr-2 text-amber-600' />
        Types of Washing Stations in Ethiopia
      </h2>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Cooperative-Owned Stations</h3>

      <p className='my-4'>
        Cooperative unions are major operators of washing stations in Ethiopia. Organizations like the Yirgacheffe Coffee Farmers Cooperative Union (YCFCU) and the Sidama Coffee Farmers Cooperative Union (SCFCU) manage networks of member-owned stations. Cooperative stations prioritize <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='underline font-bold'>Fairtrade and organic certification</Link>, and their lots are often marketed through the cooperative channel with full traceability to the primary society. For importers seeking certified coffee with documented farmer impact, cooperative stations are a natural fit. Processing quality at cooperative stations varies; the best-funded unions invest in infrastructure and training, while underfunded cooperatives may struggle with equipment maintenance and consistency.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Private (Investor-Owned) Stations</h3>

      <p className='my-4'>
        Private washing stations have expanded rapidly across Ethiopia since the 2008 market liberalization reforms and the expansion of the Direct Specialty License (DSL) channel. Private operators range from single-station owners to exporters who operate multiple stations across different regions. Private stations tend to invest more aggressively in infrastructure (stainless steel tanks, mechanical drying systems, shade structures) because their business model depends on producing premium lots that command higher FOB prices. Many of the highest-scoring Ethiopian lots at international competitions come from private stations. The trade-off is that private stations may offer less certification coverage and less transparent farmer payment data compared to cooperatives.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>ECX vs. Direct Specialty License (DSL) Channels</h3>

      <p className='my-4'>
        How a washing station&apos;s output reaches the export market depends on the channel. Lots traded through the <Link href='/insights/ecx-and-ethiopian-coffee-export' className='underline font-bold'>Ethiopian Commodity Exchange (ECX)</Link> are aggregated by grade and region, which limits station-level traceability. The DSL channel allows exporters to purchase directly from specific washing stations and maintain lot identity from station to port. For importers who value station-specific sourcing to build their <Link href='/insights/micro-lot-ethiopian-coffee-sourcing-guide' className='underline font-bold'>micro-lot programs</Link>, the DSL channel is the preferred route. The distinction between <Link href='/insights/private-vs-cooperative-ethiopian-coffee-exporters' className='underline font-bold'>private and cooperative exporters</Link> also affects which stations and channels are available.
      </p>

      {/* SECTION 5 */}
      <h2 id='how-to-evaluate' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineCheckCircle className='inline mr-2 text-amber-600' />
        How to Evaluate an Ethiopian Coffee Washing Station
      </h2>

      <p className='my-4'>
        Whether you visit in person or evaluate remotely through your exporter, these are the factors that separate a reliable station from an inconsistent one.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Infrastructure Checklist</h3>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse border border-gray-300 font-inconsolata text-sm'>
          <thead className='bg-dark text-primary'>
            <tr>
              <th className='border border-gray-300 p-3 text-left'>Infrastructure Element</th>
              <th className='border border-gray-300 p-3 text-left'>What to Look For</th>
              <th className='border border-gray-300 p-3 text-left'>Red Flags</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Water Source</td>
              <td className='border border-gray-300 p-3'>Clean river or spring; sufficient volume for full season; settles clear</td>
              <td className='border border-gray-300 p-3'>Shared with livestock; low flow; visibly turbid</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Fermentation Tanks</td>
              <td className='border border-gray-300 p-3'>Tiled or concrete-lined; easy to drain and clean; sufficient capacity for peak intake</td>
              <td className='border border-gray-300 p-3'>Cracked, unlined, or stained tanks; residue from previous batches</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Pulping Equipment</td>
              <td className='border border-gray-300 p-3'>Well-calibrated disc or drum pulper; spare parts available; maintained between seasons</td>
              <td className='border border-gray-300 p-3'>Visible bean fragments near pulper; inconsistent parchment size</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Washing Channels</td>
              <td className='border border-gray-300 p-3'>Long enough for effective density grading; clean running water; adequate slope</td>
              <td className='border border-gray-300 p-3'>Short channels; stagnant water; no density separation</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Drying Beds</td>
              <td className='border border-gray-300 p-3'>Raised mesh beds; shade covers or retractable canopies; adequate spacing</td>
              <td className='border border-gray-300 p-3'>Ground-level patios only; overcrowded beds; no protection from rain</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Storage</td>
              <td className='border border-gray-300 p-3'>Covered, ventilated warehouse for dried parchment; elevated pallets; moisture monitoring</td>
              <td className='border border-gray-300 p-3'>Open-air storage; parchment on bare ground; mixed lots without separation</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Processing Protocols and Record-Keeping</h3>

      <p className='my-4'>
        Ask your exporter to provide the station&apos;s standard operating procedures for fermentation duration, water change frequency, and drying rotation schedules. Stations that document these protocols deliver more consistent results. Look for specific numbers (e.g., "36 to 48 hours underwater fermentation at 1,900 meters"), not vague claims like "traditional methods." Record-keeping should include processing dates, tank assignments, and moisture readings at the end of drying.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Pre-Shipment Samples and Cupping Feedback</h3>

      <p className='my-4'>
        The most reliable evaluation is still the cup. Request station-specific pre-shipment samples (PSS) and cup them against your standards. If a station consistently delivers clean, well-sorted parchment that cups within your target range over two or more seasons, it is worth building a long-term relationship around. Provide cupping feedback to your exporter after each season; this information flows back to the station and helps improve protocols. Our team at Ethio Coffee Import and Export PLC facilitates this feedback loop between buyers and the washing stations in our network.
      </p>

      {/* SECTION 6 */}
      <h2 id='regional-profiles' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineMapPin className='inline mr-2 text-amber-600' />
        Regional Washing Station Profiles
      </h2>

      <p className='my-4'>
        Ethiopia&apos;s growing regions each have distinct washing station cultures shaped by local geography, cooperative structures, and market access. Here is what importers should know about the major regions.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Yirgacheffe and Gedeo Zone Stations</h3>

      <p className='my-4'>
        The <Link href='/ethiopian-coffee-yirgacheffe' className='underline font-bold'>Yirgacheffe</Link> area in the Gedeo Zone has the highest concentration of washing stations in Ethiopia, with over 300 active stations in a relatively small geographic area. The combination of 1,800 to 2,200 meter altitude, reliable rainfall, and deep cooperative traditions makes this region the epicenter of Ethiopian washed coffee production. Typical cup profiles include jasmine, bergamot, lemon, and a tea-like body. Both the YCFCU cooperative network and private operators produce outstanding lots here. Competition among stations is intense, which drives quality standards upward.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Guji Zone Stations</h3>

      <p className='my-4'>
        <Link href='/ethiopian-coffee-guji' className='underline font-bold'>Guji</Link> has emerged as one of Ethiopia&apos;s most exciting regions for specialty washed coffee, with rapid private investment in new washing stations over the past decade. Stations in the Hambela, Shakiso, and Uraga woredas (districts) produce lots with stone fruit, tropical fruit, and floral notes at altitudes above 2,000 meters. Guji stations tend to be newer, with more modern infrastructure than stations in longer-established regions. This region is particularly strong for <Link href='/insights/anaerobic-ethiopian-coffee-processing-buyers-guide' className='underline font-bold'>experimental processing</Link> methods, with several stations offering both traditional washed and anaerobic or honey-processed lots.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Sidamo Stations</h3>

      <p className='my-4'>
        The broader <Link href='/ethiopian-coffee-sidamo' className='underline font-bold'>Sidamo</Link> zone produces large volumes of both washed and natural coffee. Washing stations here operate at 1,600 to 2,200 meters and produce lots with balanced acidity, stone fruit sweetness, and medium body. The Sidama Coffee Farmers Cooperative Union manages a significant share of the region&apos;s stations. Sidamo lots offer strong value for importers looking for consistent, versatile washed Ethiopian coffee that works in single-origin and blend applications.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Limu and Jimma Area Stations</h3>

      <p className='my-4'>
        Western Ethiopia&apos;s <Link href='/ethiopian-coffee-limu' className='underline font-bold'>Limu</Link> and <Link href='/ethiopian-coffee-jimma' className='underline font-bold'>Jimma</Link> regions produce washed coffees at 1,400 to 1,900 meters with a different character: less floral complexity than southern origins, but with a balanced sweetness, mild acidity, and clean body that performs well in blends and as an accessible single-origin. Washing station density is lower here, and a larger share of production moves through commercial (ECX) channels. Importers seeking Grade 2 and Grade 3 washed Ethiopian lots at competitive pricing will find consistent supply from these regions.
      </p>

      {/* SECTION 7 */}
      <h2 id='station-economics' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineCurrencyDollar className='inline mr-2 text-amber-600' />
        Washing Station Economics: What Importers Should Know
      </h2>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Cherry Pricing and Farmer Payments</h3>

      <p className='my-4'>
        Ethiopian washing stations purchase fresh cherry from smallholders at a per-kilogram price that fluctuates with the global C-market, local supply and demand, and quality premiums. During the 2024/25 season, cherry prices at station level ranged from roughly ETB 60 to 120 per kilogram of cherry depending on the region and cherry quality. It takes approximately 5 to 6 kilograms of cherry to produce 1 kilogram of exportable green coffee. Stations that pay higher cherry prices attract better cherry from farmers who selectively pick only ripe fruit, which directly improves cup quality.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Processing Cost per Kilogram</h3>

      <p className='my-4'>
        Beyond cherry purchase, station operating costs include water, labor (sorting, drying bed management, security), equipment maintenance, transport of dried parchment to Addis Ababa, and overhead. Processing costs typically add $0.30 to $0.80 per kilogram of green equivalent, depending on the station&apos;s scale and location. Smaller stations in remote areas face higher per-unit costs due to lower throughput and more expensive transport.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>How Station Economics Affect FOB Pricing</h3>

      <p className='my-4'>
        For importers trying to understand why two washed Guji Grade 1 lots are priced differently, the answer often lies at the station level. A station that pays premium cherry prices, invests in infrastructure, and employs experienced sorting staff produces a higher-quality lot but at a higher cost. That cost is reflected in the <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='underline font-bold'>FOB price</Link> you see on the offer sheet. Conversely, a low-cost station that underinvests in processing may offer cheaper lots, but the cup quality and defect count will reflect those savings. Understanding station economics helps importers evaluate whether a given FOB price represents fair value.
      </p>

      {/* FAQ */}
      <section id='faq' className='my-10'>
        <h2 className='text-3xl font-extrabold mb-6'>
          <HiOutlineQuestionMarkCircle className='inline mr-2 text-amber-600' />
          Frequently Asked Questions
        </h2>

        <div className='space-y-6'>
          <div className='bg-gray-50 p-5 rounded-lg'>
            <h3 className='font-bold text-lg mb-2'>What is the difference between a washing station and a dry mill in Ethiopia?</h3>
            <p className='text-sm'>
              A washing station (wet mill) processes fresh cherry into dried parchment through pulping, fermentation, washing, and drying. A dry mill converts dried parchment into export-ready green coffee through hulling, size grading, density sorting, color sorting, and hand sorting. They are separate facilities at different stages of the supply chain.
            </p>
          </div>

          <div className='bg-gray-50 p-5 rounded-lg'>
            <h3 className='font-bold text-lg mb-2'>How many washing stations are there in Ethiopia?</h3>
            <p className='text-sm'>
              Ethiopia has an estimated 2,500 to 3,000 active washing stations, concentrated in the southern (Yirgacheffe, Guji, Sidamo) and western (Limu, Jimma) growing regions. The number fluctuates as new private stations open and underperforming ones close between seasons.
            </p>
          </div>

          <div className='bg-gray-50 p-5 rounded-lg'>
            <h3 className='font-bold text-lg mb-2'>Can importers visit Ethiopian washing stations?</h3>
            <p className='text-sm'>
              Yes. Origin trips during the October to January harvest season are the best way to evaluate stations firsthand. Your exporter can arrange visits to active washing stations in their sourcing network. Visits outside harvest season are possible but you will not see processing in action.
            </p>
          </div>

          <div className='bg-gray-50 p-5 rounded-lg'>
            <h3 className='font-bold text-lg mb-2'>Does washing station selection affect certification eligibility?</h3>
            <p className='text-sm'>
              Yes. Organic, Fairtrade, and Rainforest Alliance certifications are typically held at the cooperative or station level. If you need certified coffee, your exporter must source from stations that maintain active certification. Not all stations are certified, so confirm certification status before ordering.
            </p>
          </div>

          <div className='bg-gray-50 p-5 rounded-lg'>
            <h3 className='font-bold text-lg mb-2'>What is the typical capacity of an Ethiopian washing station?</h3>
            <p className='text-sm'>
              Capacity varies widely. A small station may process 50 to 100 tonnes of cherry per season (roughly 10 to 20 tonnes of green equivalent). Large stations process 500 to 1,000+ tonnes of cherry, producing 100 to 200 tonnes of green coffee. Capacity depends on tank volume, drying bed area, and water availability.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3'>Source Premium Washed Ethiopian Coffee Direct from Origin</h3>
        <p className='my-2 text-sm'>
          Ethio Coffee Import and Export PLC sources from a curated network of washing stations across Yirgacheffe, Guji, Sidamo, Limu, and Jimma. We provide station-level traceability, pre-shipment samples, and processing documentation for every lot. Contact our team in Addis Ababa to discuss current availability and request samples from specific stations.
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
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Processing &amp; Quality</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Dry Milling: Export Preparation Guide</Link></li>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs. Natural Ethiopian Coffee Processing</Link></li>
              <li>&bull; <Link href='/insights/anaerobic-ethiopian-coffee-processing-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Anaerobic Coffee Processing: A Buyer&apos;s Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality: Defects and Grading Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Sourcing &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>Sourcing Green Coffee From Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/micro-lot-ethiopian-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Micro-Lot Ethiopian Coffee: Sourcing and Pricing Guide</Link></li>
              <li>&bull; <Link href='/insights/private-vs-cooperative-ethiopian-coffee-exporters' className='text-amber-700 hover:underline'>Private vs. Cooperative Ethiopian Coffee Exporters</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Pricing &amp; Logistics</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing for Importers</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Harvest Calendar for Buyers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Compliance &amp; Traceability</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability: Buyer&apos;s Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Ethiopian Coffee Certifications Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC (Addis Ababa, Ethiopia). This article reflects industry practices and our sourcing experience as of March 2026. Processing methods and station-level data may change between seasons. Contact us for current information on available lots and station-level sourcing.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot;{' '}
          <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> &middot;{' '}
          <Link href='/about' className='underline'>About Ethio Coffee</Link> &middot;{' '}
          <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

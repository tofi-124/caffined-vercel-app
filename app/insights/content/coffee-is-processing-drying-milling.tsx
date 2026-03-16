import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineBeaker,
  HiOutlineCheckCircle,
  HiOutlineCog6Tooth,
  HiOutlineSun,
  HiOutlineBuildingOffice2,
  HiOutlineShoppingCart,
  HiOutlineQuestionMarkCircle,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function CoffeeIsProcessingDryingMilling({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        How post-harvest methods shape green coffee quality, from cherry intake to export-ready beans
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2 text-sm text-gray-500'>
          Coffee cherries drying on raised African beds in southern Ethiopia. The processing decisions made between harvest and milling determine whether a lot cups as specialty or commercial grade.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Coffee processing and drying on raised beds at an Ethiopian washing station with green coffee beans in parchment'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      {/* SERIES NAVIGATION */}
      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Part of the &quot;Coffee Is&quot; Series:</span>
        <div className='flex flex-wrap gap-2 mt-2'>
          <Link href='/insights/coffee-plant-taxonomy-species-varieties' className='underline text-xs'>1. Plant</Link>
          <Link href='/insights/coffee-is-agriculture-production-farming' className='underline text-xs'>2. Agriculture</Link>
          <span className='bg-dark text-primary px-2 py-1 rounded text-xs'>3. Processing (You are here)</span>
          <Link href='/insights/coffee-is-commerce-exporting-importing-buying' className='underline text-xs'>4. Commerce</Link>
          <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='underline text-xs'>5. Science</Link>
          <Link href='/insights/coffee-is-art-roasting-brewing' className='underline text-xs'>6. Art</Link>
        </div>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-2 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0' /> Key Takeaway
        </p>
        <p className='text-sm leading-relaxed'>
          Coffee processing, drying, and milling account for the majority of what you taste in the cup. Two lots from the same farm and harvest day can score 10+ points apart based on processing alone. For green coffee buyers, requesting specific processing details (method, fermentation protocol, drying duration, moisture targets) is as important as reviewing cupping scores. These variables explain most of the flavor and quality differences between similarly graded lots.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#what-is-processing' className='text-amber-700 hover:underline'>1. What Is Coffee Processing?</a></li>
          <li><a href='#washed-processing' className='text-amber-700 hover:underline'>2. Washed (Wet) Processing</a></li>
          <li><a href='#natural-processing' className='text-amber-700 hover:underline'>3. Natural (Dry) Processing</a></li>
          <li><a href='#honey-processing' className='text-amber-700 hover:underline'>4. Honey Processing</a></li>
          <li><a href='#methods-comparison' className='text-amber-700 hover:underline'>5. Processing Methods Comparison</a></li>
          <li><a href='#fermentation' className='text-amber-700 hover:underline'>6. Fermentation in Coffee Processing</a></li>
          <li><a href='#drying' className='text-amber-700 hover:underline'>7. Coffee Drying: Preserving Quality</a></li>
          <li><a href='#milling' className='text-amber-700 hover:underline'>8. Coffee Milling: Preparing for Export</a></li>
          <li><a href='#buyer-guidance' className='text-amber-700 hover:underline'>9. What Processing Means for Green Coffee Buyers</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>10. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* SECTION 1 */}
      <h2 id='what-is-processing' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineBeaker className='inline mr-2 text-amber-600' />
        What Is Coffee Processing?
      </h2>

      <p className='my-4'>
        Coffee processing refers to the post-harvest steps that remove or retain the fruit layers surrounding the coffee seed, then dry and prepare it for milling and export. This third installment of our &quot;Coffee Is&quot; series covers the full processing lifecycle: from cherry intake at the washing station through drying, fermentation, and milling into export-ready green beans.
      </p>

      <p className='my-4'>
        A freshly picked coffee cherry contains roughly 50% moisture. The goal of processing is to transform it into a stable green bean at 10 to 12% moisture content while preserving (or developing) desirable flavor compounds. Every decision during this window affects acidity, sweetness, body, and complexity in the cup.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Anatomy of a Coffee Cherry</h3>

      <p className='my-4'>
        Processing manipulates the layers surrounding the coffee seed. From outside to inside, these are:
      </p>

      <ul className='list-disc ml-5 my-4'>
        <li><strong>Exocarp (skin):</strong> The outer protective layer that changes color as the cherry ripens</li>
        <li><strong>Mesocarp (mucilage/fruit):</strong> A sticky, sugar-rich layer containing acids and aromatic precursors that directly influence flavor</li>
        <li><strong>Pectin layer:</strong> A thin barrier between fruit and parchment</li>
        <li><strong>Endocarp (parchment):</strong> The protective hull surrounding the seed</li>
        <li><strong>Silver skin (spermoderm):</strong> A papery membrane on the bean surface</li>
        <li><strong>Endosperm:</strong> The coffee bean itself</li>
      </ul>

      <p className='my-4'>
        How much fruit remains on the seed during drying and fermentation is the core variable that distinguishes washed, honey, and natural processing. Each approach creates a different chemical environment around the seed, producing distinct flavor outcomes.
      </p>

      {/* SECTION 2 */}
      <h2 id='washed-processing' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineBeaker className='inline mr-2 text-amber-600' />
        Washed (Wet) Processing
      </h2>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>How Washed Processing Works</h3>

      <p className='my-4'>
        Washed processing removes all fruit layers before drying begins. The sequence follows four steps:
      </p>

      <ul className='list-disc ml-5 my-4'>
        <li><strong>Depulping:</strong> Mechanical pulpers strip the skin and most mucilage from the cherry within hours of harvest</li>
        <li><strong>Fermentation:</strong> Pulped beans sit in concrete or tile-lined tanks for 12 to 72 hours while naturally occurring microorganisms break down remaining mucilage</li>
        <li><strong>Washing:</strong> Fermented beans are channeled through flowing water, rinsing away dissolved mucilage and separating beans by density</li>
        <li><strong>Drying:</strong> Clean parchment coffee is spread on raised beds or patios until it reaches 10 to 12% moisture</li>
      </ul>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Washed Coffee Flavor Characteristics</h3>

      <p className='my-4'>
        Washed coffees are prized for clarity. With the fruit removed early, the cup reflects the seed&apos;s inherent chemical composition and the terroir where it grew. Expect clean acidity, floral and citrus aromatics, and a lighter, more transparent body compared to natural or honey lots. In Ethiopia, washed processing dominates <Link href='/ethiopian-coffee-yirgacheffe' className='underline font-bold'>Yirgacheffe</Link> and much of <Link href='/ethiopian-coffee-sidamo' className='underline font-bold'>Sidamo</Link>, where the method produces the jasmine, bergamot, and lemon notes those origins are known for.
      </p>

      <p className='my-4'>
        For a detailed comparison of washed and natural Ethiopian lots, see our guide to <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='underline font-bold'>washed vs. natural Ethiopian coffee processing</Link>.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Where Washed Processing Dominates in Ethiopia</h3>

      <p className='my-4'>
        Ethiopia has an estimated 2,500 to 3,000 active <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='underline font-bold'>washing stations</Link>, concentrated in the southern and western growing regions. The Gedeo Zone (Yirgacheffe), Guji, Sidamo, and Limu all operate extensive washed processing infrastructure. The combination of altitude (1,800 to 2,200 meters), reliable water sources, and deep cooperative traditions makes washed processing the standard for Ethiopia&apos;s highest-scoring specialty lots.
      </p>

      {/* SECTION 3 */}
      <h2 id='natural-processing' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineSun className='inline mr-2 text-amber-600' />
        Natural (Dry) Processing
      </h2>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>How Natural Processing Works</h3>

      <p className='my-4'>
        Natural processing is the oldest method, originating in Ethiopia. Whole cherries are spread on drying surfaces without removing any fruit layers. As the cherry dries over 3 to 4 weeks, the beans ferment inside the intact fruit, absorbing sugars and developing flavor compounds that do not occur in washed coffees.
      </p>

      <ul className='list-disc ml-5 my-4'>
        <li>Requires no water or depulping equipment</li>
        <li>Cherry selection and sorting at intake is critical; overripe or damaged fruit causes off-flavors</li>
        <li>Drying takes 18 to 30 days depending on weather and bed management</li>
        <li>Higher risk of defects (mold, ferment taints) if drying is not carefully managed</li>
      </ul>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Natural Coffee Flavor Characteristics</h3>

      <p className='my-4'>
        Natural coffees feature intense sweetness, heavy body, and fruit-forward complexity. Common tasting notes include blueberry, strawberry, tropical fruit, wine, and chocolate. The extended fruit contact during drying creates a richer, more syrupy mouthfeel compared to washed lots from the same origin. Consistency is the trade-off; even small variations in drying conditions can shift the cup profile significantly.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Ethiopian Natural Processing: Guji and Sidamo</h3>

      <p className='my-4'>
        <Link href='/ethiopian-coffee-guji' className='underline font-bold'>Guji</Link> has become one of Ethiopia&apos;s most respected origins for natural-processed specialty coffee. Producers in the Hambela, Shakiso, and Uraga districts dry whole cherries on raised African beds at altitudes above 2,000 meters. Typical handling includes frequent turning during the first 10 days, slower turns as sugars concentrate, and sorting to remove over-fermented or moldy fruit. Well-made Guji naturals produce layered cups with strawberry, black tea, and molasses notes.
      </p>

      <p className='my-4'>
        <em>Practical tip:</em> When evaluating natural-processed lots, ask for a drying log that includes days on bed, average sun hours, and sorting frequency. These details often explain differences between similarly scored lots and help predict consistency across seasons.
      </p>

      <p className='my-4'>
        The broader <Link href='/ethiopian-coffee-sidamo' className='underline font-bold'>Sidamo</Link> zone also produces significant volumes of natural coffee, with balanced sweetness, stone fruit notes, and medium body that performs well in both single-origin and blend applications. For sourcing guidance, see our <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='underline font-bold'>complete buyer&apos;s guide to Ethiopian green coffee</Link>.
      </p>

      {/* SECTION 4 */}
      <h2 id='honey-processing' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineBeaker className='inline mr-2 text-amber-600' />
        Honey Processing
      </h2>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>How Honey Processing Works</h3>

      <p className='my-4'>
        Honey processing removes the cherry skin but leaves some or all of the mucilage on the beans during drying. The name refers to the sticky, honey-like appearance of the mucilage-coated parchment. Depulped beans go directly to drying beds without fermentation or washing, and the retained sugars caramelize and absorb into the seed as moisture drops over 2 to 4 weeks.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>The Honey Spectrum: White to Black</h3>

      <p className='my-4'>
        The amount of mucilage retained determines the honey &quot;color&quot; and the resulting cup profile:
      </p>

      <ul className='list-disc ml-5 my-4'>
        <li><strong>White honey:</strong> Minimal mucilage retained. Cup profile is closest to washed: clean, mild sweetness, moderate body</li>
        <li><strong>Yellow honey:</strong> Moderate mucilage. Gentle fruit sweetness and slightly heavier body than white</li>
        <li><strong>Red honey:</strong> Significant mucilage. Richer fruit notes, fuller body, increased complexity</li>
        <li><strong>Black honey:</strong> All mucilage retained. The most fruit-forward honey style; approaches natural processing in body and sweetness</li>
      </ul>

      <p className='my-4'>
        Moving from white to black, drying time increases, mold risk rises, and the cup moves progressively toward the flavor characteristics of natural-processed coffee. Black honey requires the most labor and attention during drying.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Honey Processing in the Ethiopian Context</h3>

      <p className='my-4'>
        Honey processing is less common in Ethiopia than in Central America, where the method was popularized. However, a growing number of Ethiopian stations, particularly private operators in <Link href='/ethiopian-coffee-guji' className='underline font-bold'>Guji</Link> and parts of Sidamo, now offer honey-processed lots alongside their washed and natural production. These lots appeal to importers looking for a middle ground: more sweetness and body than washed, with better consistency than naturals.
      </p>

      {/* SECTION 5: COMPARISON TABLE */}
      <h2 id='methods-comparison' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineCheckCircle className='inline mr-2 text-amber-600' />
        Processing Methods Comparison
      </h2>

      <p className='my-4'>
        The following table summarizes how the three main processing methods compare on the variables that matter most to green coffee buyers:
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse border border-gray-300 font-inconsolata text-sm'>
          <thead className='bg-dark text-primary'>
            <tr>
              <th className='border border-gray-300 p-3 text-left'>Variable</th>
              <th className='border border-gray-300 p-3 text-left'>Washed</th>
              <th className='border border-gray-300 p-3 text-left'>Honey</th>
              <th className='border border-gray-300 p-3 text-left'>Natural</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Fruit Removed</td>
              <td className='border border-gray-300 p-3'>All (skin + mucilage)</td>
              <td className='border border-gray-300 p-3'>Skin only; mucilage retained</td>
              <td className='border border-gray-300 p-3'>None; whole cherry dried</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Fermentation</td>
              <td className='border border-gray-300 p-3'>Tank: 12-72 hours</td>
              <td className='border border-gray-300 p-3'>On-bed during drying</td>
              <td className='border border-gray-300 p-3'>Inside cherry during drying</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Drying Duration</td>
              <td className='border border-gray-300 p-3'>10-15 days</td>
              <td className='border border-gray-300 p-3'>14-28 days</td>
              <td className='border border-gray-300 p-3'>18-30 days</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Water Required</td>
              <td className='border border-gray-300 p-3'>High</td>
              <td className='border border-gray-300 p-3'>Low (depulping only)</td>
              <td className='border border-gray-300 p-3'>None</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Typical Acidity</td>
              <td className='border border-gray-300 p-3'>Bright, crisp</td>
              <td className='border border-gray-300 p-3'>Moderate, rounded</td>
              <td className='border border-gray-300 p-3'>Low to moderate, soft</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Body</td>
              <td className='border border-gray-300 p-3'>Light to medium</td>
              <td className='border border-gray-300 p-3'>Medium to full</td>
              <td className='border border-gray-300 p-3'>Full, syrupy</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Common Notes</td>
              <td className='border border-gray-300 p-3'>Floral, citrus, tea-like</td>
              <td className='border border-gray-300 p-3'>Stone fruit, caramel, honey</td>
              <td className='border border-gray-300 p-3'>Berry, wine, chocolate, tropical</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Defect Risk</td>
              <td className='border border-gray-300 p-3'>Low (controlled environment)</td>
              <td className='border border-gray-300 p-3'>Moderate (mold if poorly managed)</td>
              <td className='border border-gray-300 p-3'>Higher (variable fermentation)</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Ethiopian Regions</td>
              <td className='border border-gray-300 p-3'>Yirgacheffe, Sidamo, Guji, Limu</td>
              <td className='border border-gray-300 p-3'>Guji, Sidamo (growing)</td>
              <td className='border border-gray-300 p-3'>Guji, Sidamo, Harar, Jimma</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        For importers, the choice of processing method depends on your target market segment. Washed lots suit roasters seeking consistency and clean flavor profiles. Natural lots serve specialty retailers who prize bold, fruit-forward coffees. Honey lots appeal to buyers looking for sweetness and body without the variability of naturals.
      </p>

      {/* SECTION 6 */}
      <h2 id='fermentation' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineCog6Tooth className='inline mr-2 text-amber-600' />
        Fermentation in Coffee Processing
      </h2>

      <p className='my-4'>
        Fermentation is the controlled microbial process that breaks down mucilage and develops flavor compounds in the coffee seed. Naturally occurring yeasts and bacteria consume sugars in the mucilage and produce organic acids, alcohols, and volatile aromatics as byproducts. These compounds absorb into the bean and contribute to the flavors you taste in the cup.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Aerobic vs. Anaerobic Fermentation</h3>

      <p className='my-4'>
        Traditional fermentation in open tanks is aerobic: oxygen is present, and a broad mix of microorganisms participate. This produces clean, balanced acid development and is the standard at most Ethiopian washing stations. <Link href='/insights/anaerobic-ethiopian-coffee-processing-buyers-guide' className='underline font-bold'>Anaerobic fermentation</Link> seals coffee in oxygen-free containers, shifting microbial activity toward lactic acid bacteria. The result is often more intense, with tropical fruit, wine-like, and creamy notes that differ from traditional profiles.
      </p>

      <p className='my-4'>
        Carbonic maceration, borrowed from winemaking, takes the anaerobic concept further by fermenting whole cherries in CO2-rich environments. A growing number of Ethiopian stations in Guji and parts of Yirgacheffe now offer anaerobic and carbonic maceration lots alongside traditional washed and natural production.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Controlling Fermentation Variables</h3>

      <p className='my-4'>
        The key variables that determine fermentation outcomes are:
      </p>

      <ul className='list-disc ml-5 my-4'>
        <li><strong>Duration:</strong> 12 to 72 hours for washed; longer for experimental methods. Over-fermentation creates vinegary, acetic off-flavors</li>
        <li><strong>Temperature:</strong> Higher altitude stations ferment slower due to cooler temperatures, often producing cleaner results</li>
        <li><strong>pH:</strong> Fermentation drops pH from roughly 5.5 to 3.5 as acids accumulate; monitoring pH helps predict when to stop</li>
        <li><strong>Inoculation:</strong> Some producers add specific yeast or bacteria cultures for predictable, targeted flavor development</li>
      </ul>

      <p className='my-4'>
        For buyers, fermentation data (type, duration, temperature monitoring) is one of the strongest predictors of lot quality and consistency. Stations that document and control fermentation produce more repeatable results season over season.
      </p>

      {/* SECTION 7 */}
      <h2 id='drying' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineSun className='inline mr-2 text-amber-600' />
        Coffee Drying: Preserving Quality
      </h2>

      <p className='my-4'>
        Drying reduces the coffee&apos;s moisture from 50 to 60% down to 10 to 12%, making it shelf-stable for transport and storage. The speed, uniformity, and method of drying significantly affect both flavor development and green coffee shelf life. Rushed drying locks in undesirable compounds; overly slow drying invites mold and ferment defects.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Raised Beds (African Beds)</h3>

      <p className='my-4'>
        Raised mesh beds are the standard for Ethiopian specialty coffee. Parchment or whole cherries are spread in thin layers on elevated wire-mesh tables, allowing air to circulate above and below. Workers turn the coffee by hand multiple times per day and remove defective beans during sorting passes. Drying typically takes 10 to 15 days for washed parchment and 18 to 30 days for naturals. Raised beds produce the most even, consistent drying and are required for most specialty-grade lots.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Patio Drying and Mechanical Drying</h3>

      <p className='my-4'>
        Concrete patios dry coffee using radiant heat from the sun-warmed surface. Patios are faster but carry greater risk of scorching and uneven moisture reduction, especially for thick-layered naturals. Mechanical dryers (guardiolas) use heated air to accelerate drying in 24 to 48 hours. They are useful for managing throughput during peak harvest but can damage flavor precursors if temperatures exceed 40°C. Most high-quality Ethiopian processors use raised beds for the first 70 to 80% of drying and finish on patios or mechanical dryers only if weather conditions deteriorate.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Target Moisture and Monitoring</h3>

      <p className='my-4'>
        Export-ready green coffee should measure between 10 and 12% moisture, with water activity (aw) below 0.65. The Ethiopian Commodity Exchange (ECX) requires moisture content within this range for traded lots. Coffee dried below 9% becomes brittle and loses aromatics. Coffee above 12.5% risks mold development during storage and transit.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse border border-gray-300 font-inconsolata text-sm'>
          <thead className='bg-dark text-primary'>
            <tr>
              <th className='border border-gray-300 p-3 text-left'>Drying Method</th>
              <th className='border border-gray-300 p-3 text-left'>Duration</th>
              <th className='border border-gray-300 p-3 text-left'>Temperature</th>
              <th className='border border-gray-300 p-3 text-left'>Advantages</th>
              <th className='border border-gray-300 p-3 text-left'>Risks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Raised beds</td>
              <td className='border border-gray-300 p-3'>10-30 days</td>
              <td className='border border-gray-300 p-3'>Ambient (15-30°C)</td>
              <td className='border border-gray-300 p-3'>Best airflow; even drying; hand sorting during process</td>
              <td className='border border-gray-300 p-3'>Weather dependent; labor intensive</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Concrete patios</td>
              <td className='border border-gray-300 p-3'>7-21 days</td>
              <td className='border border-gray-300 p-3'>Surface can reach 45°C+</td>
              <td className='border border-gray-300 p-3'>Faster; lower labor cost; handles high volume</td>
              <td className='border border-gray-300 p-3'>Scorching; uneven drying; limited sorting</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Parabolic dryers</td>
              <td className='border border-gray-300 p-3'>8-20 days</td>
              <td className='border border-gray-300 p-3'>Controlled (20-35°C)</td>
              <td className='border border-gray-300 p-3'>Weather protection; controlled temperature and humidity</td>
              <td className='border border-gray-300 p-3'>Higher construction cost; limited capacity</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Mechanical dryers</td>
              <td className='border border-gray-300 p-3'>24-48 hours</td>
              <td className='border border-gray-300 p-3'>35-45°C (heated air)</td>
              <td className='border border-gray-300 p-3'>Fastest; weather independent; consistent throughput</td>
              <td className='border border-gray-300 p-3'>Flavor damage above 40°C; high energy cost</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 8 */}
      <h2 id='milling' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineBuildingOffice2 className='inline mr-2 text-amber-600' />
        Coffee Milling: Preparing for Export
      </h2>

      <p className='my-4'>
        After drying, coffee moves to the <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='underline font-bold'>dry mill</Link> for the final preparation steps before export. In Ethiopia, most dry mills are located in or near Addis Ababa, separate from the washing stations at origin. The milling process converts dried parchment coffee into graded, sorted green beans ready for shipment.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Hulling and Polishing</h3>

      <p className='my-4'>
        Hulling machines remove the parchment layer (endocarp) from washed and honey coffees, or the entire dried cherry husk from naturals. Proper calibration is essential; too much friction generates heat that damages the bean and creates &quot;tipped&quot; or &quot;scorched&quot; defects. Polishing is an optional step that removes the silver skin for a cleaner visual appearance. Most Ethiopian exporters polish Grade 1 and Grade 2 specialty lots.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Grading and Sorting</h3>

      <p className='my-4'>
        After hulling, beans pass through a series of mechanical sorts that separate by size, density, and color:
      </p>

      <ul className='list-disc ml-5 my-4'>
        <li><strong>Screen sizing:</strong> Beans pass over metal screens with graduated holes (Screen 13 through 18+). Uniform size is critical for even roasting</li>
        <li><strong>Density tables (Oliver gravity separators):</strong> A vibrating table separates beans by density. Dense beans rise to the top and are collected as the highest grade</li>
        <li><strong>Optical (color) sorters:</strong> High-speed cameras detect and eject discolored, defective, or foreign-material beans</li>
        <li><strong>Hand sorting:</strong> The final quality pass. Trained workers remove remaining defects that machines miss</li>
      </ul>

      <p className='my-4'>
        For a complete breakdown of Ethiopian milling and grading practices, see our <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='underline font-bold'>dry milling export guide</Link> and our guide to <Link href='/insights/green-coffee-quality-control-defects-grading' className='underline font-bold'>green coffee quality, defects, and grading</Link>.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Ethiopian Grading Standards</h3>

      <p className='my-4'>
        Ethiopia grades green coffee on a scale of Grade 1 (highest) through Grade 9 (lowest), based on defect count per 300-gram sample and cupping evaluation. The ECX and the Ethiopian Coffee and Tea Authority (ECTA) set these standards. Grade 1 washed coffees allow a maximum of 3 full defects per 300g; Grade 2 allows up to 12. For most specialty importers, Grade 1 and Grade 2 are the target. Milling quality directly determines whether a lot achieves its potential grade; poor hulling, inadequate sorting, or lazy hand-picking will downgrade an otherwise excellent lot.
      </p>

      {/* SECTION 9 */}
      <h2 id='buyer-guidance' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineShoppingCart className='inline mr-2 text-amber-600' />
        What Processing Means for Green Coffee Buyers
      </h2>

      <p className='my-4'>
        Processing data is the most underused quality indicator available to importers and roasters. Beyond cupping scores and grade designations, the specific processing protocol explains <em>why</em> a lot tastes the way it does and predicts how it will perform across shipments.
      </p>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Processing Checklist for Evaluating Lots</h3>

      <p className='my-4'>
        When evaluating an Ethiopian green coffee lot, request or verify the following from your exporter:
      </p>

      <ul className='list-disc ml-5 my-4'>
        <li><strong>Processing method:</strong> Washed, natural, or honey (and specific variant, e.g., black honey, anaerobic natural)</li>
        <li><strong>Fermentation details:</strong> Tank type, duration, aerobic or anaerobic, temperature monitoring, inoculants if used</li>
        <li><strong>Drying method:</strong> Raised bed, patio, parabolic, or mechanical; days to target moisture</li>
        <li><strong>Moisture content:</strong> Final percentage and measurement method (probe vs. lab)</li>
        <li><strong>Sorting and grading:</strong> Screen sizes, defect counts per 300g, and whether optical sorting was applied</li>
        <li><strong>Storage conditions:</strong> Resting period, warehouse humidity, and packaging (jute, GrainPro, or vacuum)</li>
      </ul>

      <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Processing and Roast Profile Implications</h3>

      <p className='my-4'>
        Processing method directly affects how a lot responds to heat during roasting. Washed coffees develop flavor quickly and are forgiving of shorter roast times; their clean structure suits filter and espresso profiles. Naturals contain more residual sugars and require slower development through first crack to avoid scorching the sugars; they excel as medium roasts that highlight fruit sweetness. Honey coffees fall between the two and offer versatility across roast levels. For detailed roasting guidance, see our article on <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='underline font-bold'>roasting Ethiopian coffee beans</Link>.
      </p>

      <p className='my-4'>
        Ethio Coffee Import and Export PLC provides full processing documentation with every lot we ship and can source specific methods across our network of <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='underline font-bold'>washing stations</Link> and cooperatives. Three decades of heritage sourcing relationships across Ethiopia&apos;s coffee regions allow us to match buyers with processing profiles that fit their requirements.
      </p>

      {/* FAQ */}
      <section id='faq' className='my-10'>
        <h2 className='text-3xl font-extrabold mb-6'>
          <HiOutlineQuestionMarkCircle className='inline mr-2 text-amber-600' />
          Frequently Asked Questions
        </h2>

        <div className='space-y-6'>
          <div className='bg-gray-50 p-5 rounded-lg'>
            <h3 className='font-bold text-lg mb-2'>What is the difference between washed and natural coffee processing?</h3>
            <p className='text-sm'>
              Washed processing removes all fruit from the seed before drying, producing clean, bright cups with clear acidity. Natural processing dries the whole cherry intact, fermenting the bean inside the fruit for 3 to 4 weeks. Naturals taste fruitier, sweeter, and heavier-bodied. The two methods create fundamentally different cup profiles from the same coffee variety.
            </p>
          </div>

          <div className='bg-gray-50 p-5 rounded-lg'>
            <h3 className='font-bold text-lg mb-2'>How does coffee processing affect flavor?</h3>
            <p className='text-sm'>
              Processing controls which sugars, acids, and aromatics from the fruit remain in contact with the seed during fermentation and drying. More fruit contact (natural, honey) adds sweetness, body, and fermentation-derived complexity. Less fruit contact (washed) lets the bean&apos;s inherent terroir express itself clearly. Processing also determines acidity type and intensity.
            </p>
          </div>

          <div className='bg-gray-50 p-5 rounded-lg'>
            <h3 className='font-bold text-lg mb-2'>How long does it take to dry coffee beans?</h3>
            <p className='text-sm'>
              Drying duration varies by method and climate. Washed parchment takes 10 to 15 days on raised beds. Honey-processed coffees need 14 to 28 days depending on mucilage level. Natural whole-cherry lots require 18 to 30 days. Target moisture is 10 to 12% for export. Altitude, humidity, and bed management all affect timing.
            </p>
          </div>

          <div className='bg-gray-50 p-5 rounded-lg'>
            <h3 className='font-bold text-lg mb-2'>What is honey processed coffee?</h3>
            <p className='text-sm'>
              Honey processing removes the cherry skin but leaves the sticky mucilage (fruit pulp) on the bean during drying. The retained sugars caramelize and infuse into the seed, producing a cup with more body and sweetness than washed but more consistency than natural. Variants range from white honey (minimal mucilage) to black honey (all mucilage retained).
            </p>
          </div>

          <div className='bg-gray-50 p-5 rounded-lg'>
            <h3 className='font-bold text-lg mb-2'>What happens during coffee milling before export?</h3>
            <p className='text-sm'>
              Milling converts dried parchment coffee into export-ready green beans. The process includes hulling (removing parchment), screen sizing (sorting by bean size), density sorting (gravity tables separate by weight), optical color sorting (cameras eject defects), and hand sorting. These steps determine the final grade and defect count of the lot.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3'>Source Ethiopian Coffee by Processing Method</h3>
        <p className='my-2 text-sm'>
          Ethio Coffee Import and Export PLC offers washed, honey, and natural-processed Ethiopian green coffees with complete processing documentation for every lot. Request samples to compare processing methods side by side, or contact our Addis Ababa team for current availability and FOB pricing.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link
            href='/offerings'
            className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'
          >
            View Our Offerings
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

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-6'>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Coffee Journey Series</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/coffee-plant-taxonomy-species-varieties' className='text-amber-700 hover:underline'>Coffee Plant Taxonomy, Species &amp; Varieties</Link></li>
              <li>&bull; <Link href='/insights/coffee-is-agriculture-production-farming' className='text-amber-700 hover:underline'>Coffee Is Agriculture: Production &amp; Farming</Link></li>
              <li>&bull; <Link href='/insights/coffee-is-commerce-exporting-importing-buying' className='text-amber-700 hover:underline'>Coffee Is Commerce: Exporting &amp; Importing</Link></li>
              <li>&bull; <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='text-amber-700 hover:underline'>Coffee Is Science: Analysis &amp; Evaluation</Link></li>
              <li>&bull; <Link href='/insights/coffee-is-art-roasting-brewing' className='text-amber-700 hover:underline'>Coffee Is Art: Roasting &amp; Brewing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Processing &amp; Quality</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs. Natural Ethiopian Coffee Processing</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Washing Stations: Buyer&apos;s Guide</Link></li>
              <li>&bull; <Link href='/insights/anaerobic-ethiopian-coffee-processing-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Anaerobic Coffee Processing: A Buyer&apos;s Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Dry Milling: Export Preparation Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Sourcing &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality: Defects and Grading Guide</Link></li>
              <li>&bull; <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs. Sidamo vs. Guji Comparison</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Pricing &amp; Logistics</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing for Importers</Link></li>
              <li>&bull; <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='text-amber-700 hover:underline'>How to Roast Ethiopian Coffee Beans</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC (Addis Ababa, Ethiopia). This article draws on SCA processing standards, specialty coffee trade publications, and our direct experience sourcing processed Ethiopian coffees across Yirgacheffe, Guji, Sidamo, Harar, Limu, and Jimma. For current offerings or processing-specific requests, <Link href='/contact-us' className='underline'>contact us directly</Link>.
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

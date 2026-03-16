import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineQuestionMarkCircle,
  HiOutlineClock,
  HiOutlineBeaker,
  HiOutlineChartBar,
  HiOutlineExclamationTriangle,
  HiOutlineCheckCircle,
  HiOutlineShieldCheck,
  HiOutlineCube
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function GreenCoffeeShelfLifeStorageGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Moisture science, packaging options, storage protocols, and Ethiopian origin-specific guidance for importers and roasters
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Proper green coffee storage preserves the flavor potential that begins at the farm and continues through processing, export, and warehousing
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Green coffee beans stored in GrainPro hermetic bags inside a climate-controlled warehouse'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Quality Control / Storage &amp; Logistics / Green Coffee / Importer Resources</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Key Takeaway:</span> Green coffee shelf life ranges from 6 to 12 months under standard jute bag storage and up to 18 to 24 months with hermetic packaging (GrainPro, Ecotact). The two variables that matter most are moisture content (target 10 to 12%) and water activity (target below 0.60 aw). Washed Ethiopian coffees are more stable in storage than naturals because of lower residual sugar and lipid surface exposure. Store at 15 to 25&#176;C, 50 to 65% relative humidity, away from direct light and strong odors.</span>
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href="#how-long" className='text-amber-700 hover:underline'>1. How Long Does Green Coffee Last?</a></li>
          <li><a href="#science" className='text-amber-700 hover:underline'>2. The Science Behind Green Coffee Aging</a></li>
          <li><a href="#optimal-conditions" className='text-amber-700 hover:underline'>3. Optimal Green Coffee Storage Conditions</a></li>
          <li><a href="#packaging" className='text-amber-700 hover:underline'>4. Packaging That Extends Shelf Life</a></li>
          <li><a href="#monitoring" className='text-amber-700 hover:underline'>5. How to Monitor Green Coffee Quality Over Time</a></li>
          <li><a href="#ethiopian-storage" className='text-amber-700 hover:underline'>6. Ethiopian Green Coffee: Origin-Specific Storage Notes</a></li>
          <li><a href="#faq" className='text-amber-700 hover:underline'>7. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRODUCTION */}
      <p className='my-4'>
        <span className='font-bold'>Green coffee shelf life</span> is one of the most misunderstood aspects of coffee sourcing. Many importers treat green coffee as a stable, shelf-stable commodity. In reality, unroasted coffee is a living seed with active biochemistry that changes from the moment it leaves the drying tables. Sugars degrade. Lipids oxidize. Volatile aromatic precursors break down. The result is a gradual, irreversible loss of the very qualities that command <Link href='/insights/rising-ethiopian-coffee-prices-explained' className='underline font-bold'>specialty premiums</Link>.
      </p>

      <p className='my-4'>
        For importers and roasters buying Ethiopian green coffee, storage decisions carry even higher stakes. Ethiopian coffees are prized for their complex acidity, floral aromatics, and fruit-forward cup profiles. These delicate characteristics are the first to fade when storage conditions are poor or green coffee sits too long before roasting. A Grade 1 Yirgacheffe that scores 88 points at arrival can drop to 83 within six months of careless warehouse storage.
      </p>

      <p className='my-4'>
        This guide provides the practical science and protocols you need to preserve green coffee quality from warehouse receipt through the last bag in your inventory. Every recommendation applies to commercial B2B volumes, with specific notes for Ethiopian origins.
      </p>

      {/* SECTION 1 */}
      <h3 id="how-long" className='text-2xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineClock className='text-amber-600' />
        How Long Does Green Coffee Last?
      </h3>

      <h4 className='text-xl font-bold mt-8 mb-3'>General Shelf Life Expectations</h4>

      <p className='my-4'>
        The short answer: green coffee lasts 6 to 12 months in standard jute or sisal bags under reasonable warehouse conditions. With hermetic packaging (GrainPro, Ecotact, or vacuum-sealed liners), that window extends to 18 to 24 months. Some commodity-grade coffees remain usable beyond 24 months, but specialty coffees lose measurable cup quality well before that.
      </p>

      <p className='my-4'>
        The practical answer is more complex. Shelf life depends on five interacting factors: initial moisture content, processing method, packaging type, storage environment, and the quality threshold you are willing to accept. A natural processed Ethiopian coffee stored in jute at 28&#176;C and 75% humidity will taste noticeably degraded within four months. The same coffee in a GrainPro liner at 18&#176;C and 55% humidity can hold its cup profile for 14 to 18 months.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border border-gray-300 rounded-lg'>
          <thead className='bg-gray-100'>
            <tr>
              <th className='border border-gray-300 px-4 py-2 text-left font-bold'>Packaging Type</th>
              <th className='border border-gray-300 px-4 py-2 text-left font-bold'>Specialty Coffee</th>
              <th className='border border-gray-300 px-4 py-2 text-left font-bold'>Commercial Coffee</th>
              <th className='border border-gray-300 px-4 py-2 text-left font-bold'>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 px-4 py-2'>Jute/Sisal Bags</td>
              <td className='border border-gray-300 px-4 py-2'>6 to 9 months</td>
              <td className='border border-gray-300 px-4 py-2'>9 to 12 months</td>
              <td className='border border-gray-300 px-4 py-2'>Breathable; moisture exchange with environment</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-2'>GrainPro / Ecotact Liners</td>
              <td className='border border-gray-300 px-4 py-2'>12 to 18 months</td>
              <td className='border border-gray-300 px-4 py-2'>18 to 24 months</td>
              <td className='border border-gray-300 px-4 py-2'>Hermetic barrier; maintains initial moisture</td>
            </tr>
            <tr>
              <td className='border border-gray-300 px-4 py-2'>Vacuum-Sealed Bags</td>
              <td className='border border-gray-300 px-4 py-2'>14 to 20 months</td>
              <td className='border border-gray-300 px-4 py-2'>20 to 30 months</td>
              <td className='border border-gray-300 px-4 py-2'>Best preservation; higher cost per bag</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-2'>Modified Atmosphere (N2 flush)</td>
              <td className='border border-gray-300 px-4 py-2'>18 to 24 months</td>
              <td className='border border-gray-300 px-4 py-2'>24 to 36 months</td>
              <td className='border border-gray-300 px-4 py-2'>Displaces oxygen; used for high-value lots</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        These ranges assume storage temperatures between 15 and 25&#176;C. Warehouses in hot climates without climate control can cut these numbers in half.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-3'>Ethiopian Coffee Shelf Life by Processing Method</h4>

      <p className='my-4'>
        Processing method significantly affects how long Ethiopian green coffee holds its quality. <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='underline font-bold'>Washed and natural processing</Link> produce beans with different chemical compositions on the surface and in the cell structure, and each ages differently.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border border-gray-300 rounded-lg'>
          <thead className='bg-gray-100'>
            <tr>
              <th className='border border-gray-300 px-4 py-2 text-left font-bold'>Processing Method</th>
              <th className='border border-gray-300 px-4 py-2 text-left font-bold'>Shelf Life (Jute)</th>
              <th className='border border-gray-300 px-4 py-2 text-left font-bold'>Shelf Life (Hermetic)</th>
              <th className='border border-gray-300 px-4 py-2 text-left font-bold'>Why It Differs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 px-4 py-2'>Washed Ethiopian</td>
              <td className='border border-gray-300 px-4 py-2'>8 to 12 months</td>
              <td className='border border-gray-300 px-4 py-2'>15 to 20 months</td>
              <td className='border border-gray-300 px-4 py-2'>Clean surface, lower free sugar, consistent moisture</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-2'>Natural Ethiopian</td>
              <td className='border border-gray-300 px-4 py-2'>5 to 8 months</td>
              <td className='border border-gray-300 px-4 py-2'>10 to 15 months</td>
              <td className='border border-gray-300 px-4 py-2'>Residual fruit sugars on surface accelerate oxidation</td>
            </tr>
            <tr>
              <td className='border border-gray-300 px-4 py-2'>Honey Processed</td>
              <td className='border border-gray-300 px-4 py-2'>6 to 9 months</td>
              <td className='border border-gray-300 px-4 py-2'>12 to 16 months</td>
              <td className='border border-gray-300 px-4 py-2'>Partial mucilage; intermediate stability</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Natural processed Ethiopian coffees from <Link href='/insights/guide-ethiopian-coffee-origins' className='underline font-bold'>origins like Guji and Sidamo</Link> are particularly sensitive because the dried fruit layer left on the bean contains sugars and lipids that are exposed to oxygen. These compounds oxidize faster than the clean parchment surface of washed beans. Importers buying natural Ethiopians should plan to roast or sell through inventory faster than they would with washed lots.
      </p>

      {/* SECTION 2 */}
      <h3 id="science" className='text-2xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineBeaker className='text-amber-600' />
        The Science Behind Green Coffee Aging
      </h3>

      <p className='my-4'>
        Understanding why green coffee degrades helps you make smarter storage decisions. Three interconnected processes drive quality loss: moisture dynamics, lipid oxidation, and volatile compound degradation.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-3'>Moisture Content and Water Activity</h4>

      <p className='my-4'>
        Moisture content (MC) and water activity (aw) are the two most important metrics for predicting green coffee shelf life. They measure related but different things. For a comprehensive treatment of industry standards, measurement protocols, and contract specifications for both metrics, see our <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline font-bold'>green coffee moisture content and water activity guide</Link>.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Moisture content</span> is the total amount of water in the bean, expressed as a percentage of total weight. The ICO standard for export-grade Arabica is 8 to 12.5% MC. Ethiopian exporters typically ship at 10 to 12% MC for washed coffees and 10 to 11% for naturals. Beans shipped below 9% tend to taste flat and papery. Beans shipped above 12.5% risk mold development during transit and storage.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Water activity</span> measures how available the water inside the bean is for chemical reactions and microbial growth. It is expressed on a scale from 0 (bone dry) to 1.0 (pure water). Green coffee with a water activity below 0.60 aw is considered microbiologically stable, meaning mold, yeast, and bacteria cannot actively grow. The target range for specialty green coffee is 0.45 to 0.60 aw.
      </p>

      <div className='bg-gray-50 p-5 rounded-lg border border-gray-200 my-6'>
        <h5 className='font-bold mb-3 flex items-center gap-2'>
          <HiOutlineExclamationTriangle className='text-amber-600' />
          Critical Thresholds
        </h5>
        <ul className='space-y-2 text-sm'>
          <li>&bull; <span className='font-bold'>Below 0.50 aw:</span> Excellent stability. Minimal chemical degradation. Ideal for long-term storage.</li>
          <li>&bull; <span className='font-bold'>0.50 to 0.60 aw:</span> Good stability. Acceptable for 12+ month storage in proper conditions.</li>
          <li>&bull; <span className='font-bold'>0.60 to 0.70 aw:</span> Caution zone. Mold growth possible at higher end. Quality loss accelerates.</li>
          <li>&bull; <span className='font-bold'>Above 0.70 aw:</span> Danger zone. Mold colonies can form within weeks. Reject at intake.</li>
        </ul>
      </div>

      <p className='my-4'>
        A common mistake is relying on moisture content alone. Two lots can both read 11% MC but have significantly different water activity depending on cell density, processing method, and drying uniformity. Water activity is the better predictor of storage stability because it measures the water that is actually available to drive chemical reactions and microbial growth.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-3'>Lipid Oxidation and Flavor Degradation</h4>

      <p className='my-4'>
        Green coffee beans contain 10 to 17% lipids (fats and oils), concentrated in the cell walls and endosperm. During storage, these lipids react with oxygen in a process called autoxidation. The byproducts of lipid oxidation include aldehydes (particularly hexanal), which produce the characteristic stale, cardboard-like flavors of aged green coffee.
      </p>

      <p className='my-4'>
        Lipid oxidation is accelerated by three factors: oxygen exposure, temperature, and light. This is why hermetic packaging works: by cutting off the oxygen supply, it slows oxidation to a crawl. Jute bags, by contrast, are fully permeable to oxygen, which is why coffee stored in jute degrades faster than identical coffee in sealed liners.
      </p>

      <p className='my-4'>
        Ethiopian natural coffees are more susceptible to lipid oxidation than washed lots because the dried fruit mucilage on the bean surface contains additional lipids and sugars that oxidize readily. This is also why stale naturals develop a fermented, vinegar-like off-flavor faster than stale washed coffees, which tend to taste flat and papery.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-3'>Temperature and Humidity Effects</h4>

      <p className='my-4'>
        Chemical reaction rates roughly double for every 10&#176;C increase in temperature (the Arrhenius principle). Green coffee stored at 30&#176;C ages approximately twice as fast as the same coffee stored at 20&#176;C. For importers in tropical or subtropical climates, this means climate-controlled warehousing is not a luxury; it is a requirement for maintaining specialty quality.
      </p>

      <p className='my-4'>
        Humidity interacts with temperature to create additional risk. In non-hermetic packaging, green coffee absorbs moisture from humid air and releases moisture in dry conditions. These fluctuations damage cell structure, promote mold growth, and accelerate staling. The target for warehouse relative humidity is 50 to 65%.
      </p>

      <p className='my-4'>
        Seasonal humidity swings are particularly dangerous. A warehouse in a coastal city might range from 40% RH in winter to 85% RH in summer. Without hermetic packaging, the green coffee inside will gain and lose moisture with each swing, creating cumulative quality damage even if average conditions look acceptable on paper.
      </p>

      {/* SECTION 3 */}
      <h3 id="optimal-conditions" className='text-2xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineShieldCheck className='text-amber-600' />
        Optimal Green Coffee Storage Conditions
      </h3>

      <h4 className='text-xl font-bold mt-8 mb-3'>Temperature, Humidity, and Light Control</h4>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border border-gray-300 rounded-lg'>
          <thead className='bg-gray-100'>
            <tr>
              <th className='border border-gray-300 px-4 py-2 text-left font-bold'>Parameter</th>
              <th className='border border-gray-300 px-4 py-2 text-left font-bold'>Ideal Range</th>
              <th className='border border-gray-300 px-4 py-2 text-left font-bold'>Acceptable Range</th>
              <th className='border border-gray-300 px-4 py-2 text-left font-bold'>Avoid</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 px-4 py-2'>Temperature</td>
              <td className='border border-gray-300 px-4 py-2'>15 to 20&#176;C (59 to 68&#176;F)</td>
              <td className='border border-gray-300 px-4 py-2'>20 to 25&#176;C (68 to 77&#176;F)</td>
              <td className='border border-gray-300 px-4 py-2'>Above 30&#176;C or frequent swings</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-2'>Relative Humidity</td>
              <td className='border border-gray-300 px-4 py-2'>50 to 60%</td>
              <td className='border border-gray-300 px-4 py-2'>45 to 65%</td>
              <td className='border border-gray-300 px-4 py-2'>Above 70% or below 40%</td>
            </tr>
            <tr>
              <td className='border border-gray-300 px-4 py-2'>Light Exposure</td>
              <td className='border border-gray-300 px-4 py-2'>Minimal (opaque storage)</td>
              <td className='border border-gray-300 px-4 py-2'>Low ambient light</td>
              <td className='border border-gray-300 px-4 py-2'>Direct sunlight, UV exposure</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-2'>Odor Proximity</td>
              <td className='border border-gray-300 px-4 py-2'>No aromatics nearby</td>
              <td className='border border-gray-300 px-4 py-2'>Separated from chemicals</td>
              <td className='border border-gray-300 px-4 py-2'>Adjacent to spices, fuel, rubber</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Green coffee is hygroscopic, meaning it absorbs moisture, odors, and volatile compounds from its surroundings. Never store green coffee near cleaning chemicals, rubber products, spices, or other strongly scented materials. Even diesel fumes from a nearby loading dock can taint coffee stored in jute bags within weeks.
      </p>

      <p className='my-4'>
        Palletize all bags at least 10 cm off the floor and 30 cm from exterior walls. Concrete floors and walls conduct moisture, especially in older warehouses without vapor barriers. Stacking bags directly on concrete is one of the most common and most damaging storage mistakes in the industry.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-3'>Warehouse vs Roastery Storage</h4>

      <p className='my-4'>
        <span className='font-bold'>Commercial warehouses</span> handling multiple clients typically maintain 18 to 22&#176;C and 55 to 60% RH through HVAC systems. If you use a third-party warehouse, request their temperature and humidity logs before signing a contract. Reputable warehouses provide monthly reports and immediately flag excursions outside the target range.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Roastery storage</span> is where many quality failures occur. Roasters often store green coffee in the same room as their roaster, where temperatures can spike above 35&#176;C during production. Others use uninsulated sheds or garages. If your roastery cannot maintain stable conditions year-round, invest in hermetic packaging for any lots you plan to hold longer than three months. The cost of a GrainPro liner (approximately $1.50 to $3.00 per 60 kg bag) is trivial compared to the value of the coffee it protects.
      </p>

      {/* SECTION 4 */}
      <h3 id="packaging" className='text-2xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineCube className='text-amber-600' />
        Packaging That Extends Green Coffee Shelf Life
      </h3>

      <h4 className='text-xl font-bold mt-8 mb-3'>Jute Bags vs GrainPro vs Vacuum Packing</h4>

      <p className='my-4'>
        The packaging choice you make (or your exporter makes on your behalf) is the single biggest lever for extending shelf life after moisture content and water activity.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Jute and sisal bags</span> have been the standard green coffee packaging for over a century. They are cheap ($1 to $2 per bag), biodegradable, and widely available. Their limitation is breathability: jute permits free exchange of moisture, oxygen, and volatile compounds between the coffee and the environment. In a well-controlled warehouse, this is manageable. In a hot, humid climate, jute-packed coffee deteriorates rapidly.
      </p>

      <p className='my-4'>
        <span className='font-bold'>GrainPro and Ecotact liners</span> are high-barrier plastic bags designed to fit inside a standard jute bag. They create a hermetic (airtight) environment that blocks moisture exchange, oxygen ingress, and pest infiltration. According to research published by the <a href='https://www.ico.org/' target='_blank' rel='noopener noreferrer' className='underline font-bold'>International Coffee Organization (ICO)</a>, hermetic liners reduce moisture loss by up to 80% over 12 months compared to jute alone. They cost $1.50 to $3.00 per liner, an investment that pays for itself many times over in preserved cup quality.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Vacuum-sealed bags</span> go one step further by removing air from the package before sealing. This virtually eliminates oxidation. Vacuum packing is most common for small lot sizes (5 to 30 kg bags) used in specialty micro-lot programs. The cost is higher ($3 to $6 per bag), but for competition lots and high-scoring coffees, the preservation benefit justifies the expense. Our article on <Link href='/insights/specialty-coffee-storage-freight-logistics' className='underline font-bold'>specialty coffee storage in sea freight</Link> covers packaging decisions during transit in more detail.
      </p>

      <p className='my-4'>
        For a complete comparison of every green coffee bag type, including cost per bag, barrier properties, and which scenarios call for each, see our dedicated <Link href='/insights/green-coffee-packaging-bag-types-guide' className='underline font-bold'>green coffee packaging and bag types guide</Link>.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-3'>Hermetic Storage Technology</h4>

      <p className='my-4'>
        Hermetic storage works on a simple principle: once the bag is sealed, the coffee and the trapped air inside reach equilibrium. The small amount of oxygen inside is consumed by the coffee&apos;s natural cellular respiration, and carbon dioxide accumulates. Within days, the atmosphere inside a sealed GrainPro liner shifts from 21% oxygen to below 3%. At these oxygen levels, lipid oxidation slows dramatically, insect activity ceases (insects require at least 5% oxygen to survive), and mold cannot grow.
      </p>

      <p className='my-4'>
        The key limitation of hermetic packaging is that it preserves whatever moisture content existed at sealing. If coffee is sealed at 13% MC (too high), the hermetic environment will not fix the problem; it will preserve the risk instead. Always verify moisture content before sealing. If your exporter ships in GrainPro, they should provide pre-shipment moisture and water activity readings on the shipping documents.
      </p>

      <div className='bg-amber-50 p-5 rounded-lg border border-amber-200 my-6'>
        <h5 className='font-bold mb-3 flex items-center gap-2'>
          <HiOutlineCheckCircle className='text-amber-600' />
          Best Practice: Receiving Inspection
        </h5>
        <p className='text-sm'>
          When you receive a green coffee shipment, check moisture and water activity before moving bags into long-term storage. If any bags show MC above 12.5% or aw above 0.65, separate them for immediate roasting or resale. Do not store them with your main inventory.
        </p>
      </div>

      {/* SECTION 5 */}
      <h3 id="monitoring" className='text-2xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineChartBar className='text-amber-600' />
        How to Monitor Green Coffee Quality Over Time
      </h3>

      <h4 className='text-xl font-bold mt-8 mb-3'>Moisture Meters and Water Activity Testing</h4>

      <p className='my-4'>
        Regular monitoring is the difference between proactive quality management and discovering problems after it is too late. Two instruments are essential for any importer or roaster holding green coffee inventory.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Handheld moisture meters</span> (Sinar, Kett, Lighttells) measure moisture content in 30 to 60 seconds using either capacitance or near-infrared technology. They cost $300 to $2,000 depending on accuracy and features. For importers, test each lot at arrival, then retest monthly during storage. Track readings on a spreadsheet. A lot that arrived at 11.0% MC and reads 11.8% three months later in jute packaging is gaining moisture from the environment, and you should either roast it soon or move it into hermetic packaging.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Water activity meters</span> (Rotronic, Meter Group AquaLab) are more precise and more expensive ($1,500 to $5,000). They require a sample chamber and take 5 to 15 minutes per reading. For importers handling premium Ethiopian lots, water activity testing at arrival and at 3-month intervals provides the best early warning of storage problems. A rising aw number (even if MC appears stable) indicates that bound water is becoming free water, a precursor to accelerated degradation.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-3'>Sensory Changes to Watch For</h4>

      <p className='my-4'>
        Instruments catch moisture problems, but your palate catches flavor problems. Schedule regular <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='underline font-bold'>cupping sessions</Link> for stored inventory, especially lots held beyond six months. Compare stored lots against the original arrival sample (always keep a sealed 250g reference sample from each lot at arrival).
      </p>

      <p className='my-4'>
        The sensory progression of aging green coffee follows a predictable pattern:
      </p>

      <ol className='list-decimal pl-6 space-y-2 my-4 text-sm'>
        <li><span className='font-bold'>Months 1 to 3:</span> Peak freshness. Full acidity, bright aromatics, clean cup. No change from arrival sample.</li>
        <li><span className='font-bold'>Months 3 to 6:</span> Minor softening. Top-end floral and citrus notes begin to flatten slightly. Acidity remains clear. Most buyers will not detect a difference.</li>
        <li><span className='font-bold'>Months 6 to 9:</span> Noticeable decline begins. Reduced acidity brightness. Fruit notes shift from fresh to dried. Body may increase slightly as lighter aromatics fade. Cupping score may drop 1 to 2 points.</li>
        <li><span className='font-bold'>Months 9 to 12:</span> Clear flavor loss. Woody, papery, or cardboard-like notes appear. Acidity becomes muted. Sweetness flattens. The coffee may still score above 80 but has lost the characteristics that defined its origin profile.</li>
        <li><span className='font-bold'>Beyond 12 months (jute):</span> Green coffee flavor profile is substantially degraded. Past crop flavors dominate: hay, straw, old wood, flat body. Coffee may be suitable for blending but not single-origin specialty use.</li>
      </ol>

      <p className='my-4'>
        Hermetic packaging shifts this timeline outward by 6 to 12 months, but it does not stop aging entirely. No packaging technology can reverse the thermodynamic reality that green coffee is a perishable product.
      </p>

      {/* SECTION 6 */}
      <h3 id="ethiopian-storage" className='text-2xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineCheckCircle className='text-amber-600' />
        Ethiopian Green Coffee: Origin-Specific Storage Notes
      </h3>

      <p className='my-4'>
        Ethiopian green coffee has characteristics that make storage both more critical and more complex than many other origins. The <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='underline font-bold'>genetic diversity of Ethiopian heirloom varieties</Link>, combined with high-altitude density and distinct processing traditions, creates storage considerations that generic guidelines do not address.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-3'>Washed Ethiopian Coffees</h4>

      <p className='my-4'>
        Washed Ethiopian coffees from <Link href='/ethiopian-coffee-yirgacheffe' className='underline font-bold'>Yirgacheffe</Link>, Sidamo, and Guji are generally the most stable Ethiopian lots in storage. The washing process removes all fruit mucilage, leaving a clean bean surface with minimal exposed sugars. Washed Ethiopian coffees typically arrive at 10.5 to 11.5% MC and 0.48 to 0.55 aw, well within the safe zone for extended storage.
      </p>

      <p className='my-4'>
        The primary storage risk with washed Ethiopians is not spoilage but flavor loss. The delicate jasmine, bergamot, and stone fruit notes that define high-grade washed Yirgacheffe lots are among the first aromatics to degrade. Roasters who prize these top notes should plan to roast washed Ethiopian inventory within 6 to 8 months, even in hermetic packaging. After that point, the coffee will still be good, but it may lose the specific characteristics that justified the <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='underline font-bold'>specialty premium paid at purchase</Link>.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-3'>Natural Processed Ethiopian Coffees</h4>

      <p className='my-4'>
        Natural (dry processed) Ethiopian coffees require more careful storage management. The dried fruit layer left on the bean during processing contains fructose, glucose, and lipids that are directly exposed to air. This accelerates oxidation and attracts moisture in humid conditions.
      </p>

      <p className='my-4'>
        Well-processed naturals from Guji and <Link href='/ethiopian-coffee-sidamo' className='underline font-bold'>Sidamo</Link> arrive with intense blueberry, strawberry, and tropical fruit flavors. These bold flavors mask early signs of aging, which means quality decline can go undetected until it reaches an advanced stage. A natural that still tastes fruity at 8 months may have already lost 3 to 4 cupping points beneath the residual sweetness.
      </p>

      <p className='my-4'>
        For natural Ethiopian lots, prioritize hermetic packaging without exception. Store at the cooler end of the acceptable range (15 to 20&#176;C) and aim to move through inventory within 4 to 6 months for lots in jute and 8 to 12 months for lots in GrainPro. Cup naturals at receiving and then monthly to catch degradation early.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-3'>Region-Specific Considerations</h4>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border border-gray-300 rounded-lg'>
          <thead className='bg-gray-100'>
            <tr>
              <th className='border border-gray-300 px-4 py-2 text-left font-bold'>Region</th>
              <th className='border border-gray-300 px-4 py-2 text-left font-bold'>Typical Processes</th>
              <th className='border border-gray-300 px-4 py-2 text-left font-bold'>Storage Notes</th>
              <th className='border border-gray-300 px-4 py-2 text-left font-bold'>Recommended Max Storage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 px-4 py-2'>Yirgacheffe</td>
              <td className='border border-gray-300 px-4 py-2'>Washed (80%), Natural (20%)</td>
              <td className='border border-gray-300 px-4 py-2'>Floral/citrus notes degrade first; use within 6 to 8 months for peak quality</td>
              <td className='border border-gray-300 px-4 py-2'>8 months (jute), 15 months (hermetic)</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-2'>Sidamo</td>
              <td className='border border-gray-300 px-4 py-2'>Washed and Natural</td>
              <td className='border border-gray-300 px-4 py-2'>Balanced profile ages gracefully; naturals need hermetic packaging</td>
              <td className='border border-gray-300 px-4 py-2'>9 months (jute), 16 months (hermetic)</td>
            </tr>
            <tr>
              <td className='border border-gray-300 px-4 py-2'>Guji</td>
              <td className='border border-gray-300 px-4 py-2'>Natural (60%), Washed (40%)</td>
              <td className='border border-gray-300 px-4 py-2'>Bold fruit notes mask early aging; cup monthly; naturals are storage-sensitive</td>
              <td className='border border-gray-300 px-4 py-2'>7 months (jute), 14 months (hermetic)</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-2'>Harrar</td>
              <td className='border border-gray-300 px-4 py-2'>Natural (dominant)</td>
              <td className='border border-gray-300 px-4 py-2'>Wild, wine-like profile; ages faster; blueberry notes fade within 4 to 5 months in jute</td>
              <td className='border border-gray-300 px-4 py-2'>5 months (jute), 10 months (hermetic)</td>
            </tr>
            <tr>
              <td className='border border-gray-300 px-4 py-2'>Limu</td>
              <td className='border border-gray-300 px-4 py-2'>Washed (dominant)</td>
              <td className='border border-gray-300 px-4 py-2'>Wine and spice notes are relatively stable; good candidate for longer storage</td>
              <td className='border border-gray-300 px-4 py-2'>10 months (jute), 18 months (hermetic)</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-2'>Jimma / Kaffa</td>
              <td className='border border-gray-300 px-4 py-2'>Washed and Natural</td>
              <td className='border border-gray-300 px-4 py-2'>Forest coffee with earthy base; lower acidity means aging is less noticeable</td>
              <td className='border border-gray-300 px-4 py-2'>10 months (jute), 18 months (hermetic)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Ethiopian coffees processed through the <Link href='/insights/ecx-and-ethiopian-coffee-export' className='underline font-bold'>Ethiopia Commodity Exchange (ECX)</Link> may sit in ECX warehouses for weeks before shipping, which means the effective storage clock for the buyer starts before the coffee even boards a vessel. When evaluating an offer from your Ethiopian exporter, ask about the processing date, ECX warehouse entry date, and expected shipment date. The gap between processing and shipment is time subtracted from your storage window.
      </p>

      {/* FAQ SECTION */}
      <section id="faq" className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200 mt-10">
        <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
          <HiOutlineQuestionMarkCircle className='text-amber-600' />
          Frequently Asked Questions About Green Coffee Shelf Life
        </h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Does green coffee expire?</h4>
            <p className="text-sm text-gray-600">Green coffee does not expire in the way perishable food does, but it degrades steadily. After 12 months in jute bags, most specialty coffees will have lost measurable cup quality. The coffee is still safe to roast and drink, but it will taste flat, papery, and lifeless compared to fresh crop. For practical purposes, treat green coffee as a perishable ingredient with a 6 to 12 month quality window.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Can you freeze green coffee beans?</h4>
            <p className="text-sm text-gray-600">Freezing green coffee is possible but rarely practical at commercial scale. At -20&#176;C, chemical reactions essentially stop, preserving quality indefinitely. However, the logistics of freezing, storing, and thawing 60 kg bags are complex and expensive. Condensation during thawing can cause rapid moisture absorption if not managed carefully. Vacuum-sealed small bags (1 to 5 kg) frozen immediately after arrival are used by some specialty roasters for competition lots, but this is not a viable strategy for standard inventory.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What is the ideal moisture content for storing green coffee?</h4>
            <p className="text-sm text-gray-600">The ideal moisture content for green coffee storage is 10 to 12%, with water activity below 0.60 aw. Coffee below 9% MC tends to taste flat and loses acidity. Coffee above 12.5% MC is at risk of mold growth, especially in humid environments. Ethiopian exporters typically ship at 10 to 11.5% MC, which is within the safe storage zone when combined with proper warehousing.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How do you tell if green coffee has gone bad?</h4>
            <p className="text-sm text-gray-600">Visual signs include whitish or greenish mold spots, bleached (faded) bean color, and an oily or musty surface. By smell, degraded green coffee loses its fresh hay or grassy aroma and develops musty, woody, or chemical odors. In the cup, stale green coffee produces flat acidity, papery or cardboard-like flavors, and reduced sweetness. The most reliable test is to cup the stored lot against a sealed reference sample from the same arrival.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Does natural processed coffee last as long as washed?</h4>
            <p className="text-sm text-gray-600">No. Natural processed coffee generally has a shorter shelf life than washed, by 2 to 4 months under the same conditions. The residual fruit sugars on the bean surface oxidize faster and attract more moisture. Natural Ethiopian coffees should be prioritized in your roasting schedule and stored in hermetic packaging if you plan to hold them beyond three months.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Is GrainPro packaging worth the cost?</h4>
            <p className="text-sm text-gray-600">Yes, unless you plan to roast the entire lot within 3 months of arrival. A GrainPro liner costs $1.50 to $3.00 per 60 kg bag. The green coffee inside that bag may be worth $200 to $500+ depending on grade and origin. Spending 0.5 to 1.5% of lot value on packaging that extends usable shelf life by 6 to 12 months is one of the highest-ROI investments in the coffee supply chain.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How should green coffee be stored in a roastery?</h4>
            <p className="text-sm text-gray-600">Store green coffee in a separate room from the roaster if possible. Keep the storage area at 15 to 25&#176;C and 50 to 65% relative humidity. Place bags on pallets (never on concrete floors) and keep them at least 30 cm from exterior walls. If your roastery cannot maintain these conditions year-round, use hermetic packaging for any lots you plan to hold beyond three months.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What is &quot;past crop&quot; coffee?</h4>
            <p className="text-sm text-gray-600">Past crop refers to green coffee from a previous harvest season. &quot;Current crop&quot; is coffee harvested and processed within the current or most recent harvest cycle. &quot;New crop&quot; is the freshest available from the latest harvest. Ethiopian coffee seasons run from October/November through February/March, so a lot from the 2024/25 harvest becomes &quot;past crop&quot; once the 2025/26 harvest begins shipping. Past crop coffee is not necessarily bad, but buyers should inspect and cup it carefully, as it will have been in storage for 12+ months.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Fresh-Crop Ethiopian Green Coffee Direct from Origin</h4>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Import and Export PLC</span> ships fresh-crop lots from Yirgacheffe, Sidamo, Guji, Harrar, and Limu in GrainPro hermetic packaging as standard. Every shipment includes pre-shipment moisture readings, water activity data, cupping scores, and full lot documentation. Request samples to evaluate quality before you commit.
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
              <li>&bull; <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline'>Specialty Coffee Storage in Sea Freight</Link></li>
              <li>&bull; <Link href='/insights/decaf-green-coffee-processing-sourcing-guide' className='text-amber-700 hover:underline'>Decaf Green Coffee: Processing &amp; Sourcing Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origins &amp; Varieties</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Green Coffee Origins</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Pricing for Importers</Link></li>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Ethiopian Coffee MOQ Guide for Importers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Market &amp; Industry</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Ethiopian Coffee Certifications Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC. This guide is based on industry research, ICO standards, and practical experience in Ethiopian green coffee export and quality management. Storage outcomes vary by warehouse conditions, packaging integrity, and initial coffee quality. For current crop availability, pre-shipment moisture data, or storage recommendations for specific lots, contact our team.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot; <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> &middot; <Link href='/about' className='underline'>About Ethio Coffee</Link> &middot; <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

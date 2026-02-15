import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { 
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck,
  HiOutlineCheckCircle,
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineBeaker,
  HiOutlineCube,
  HiOutlineChartBar,
  HiOutlineTruck,
  HiOutlineCurrencyDollar,
  HiOutlineXCircle,
  HiOutlineTrophy
} from 'react-icons/hi2'
import { GiDna2, GiShipWheel } from 'react-icons/gi'
import { FaTint, FaMicroscope, FaShip, FaBoxOpen, FaHandshake } from 'react-icons/fa'
import { TbTemperature, TbPlant2, TbWind, TbBoxModel2, TbActivity } from 'react-icons/tb'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function SpecialtyCoffeeFreightStorage({ title, date, large_image_url }: InsightContentProps) {

  return (
    <article className="max-w-4xl mx-auto">

      <header className="mb-10">
        <h1 className='text-4xl md:text-5xl font-extrabold text-dark leading-tight mb-6'>
          {title}
        </h1>
        <h2 className='text-xl md:text-2xl font-medium text-gray-700 mb-8 leading-relaxed'>
          The journey from origin to roastery is the most critical phase in a specialty coffee's life. Discover the advanced science of <span className="font-bold text-amber-800">green coffee storage</span> during sea freight, protecting delicate flavor profiles from temperature swings, humidity, and "container sweat." This comprehensive 2026 guide explores the logistics of maintaining 90+ point quality across the global supply chain.
        </h2>

        <figure className="relative mb-8">
          <figcaption className='font-inconsolata my-2 text-sm text-gray-500 italic border-l-4 border-amber-500 pl-3'>
            Visualizing the difference: Proper freight storage prevents the "baggy" defect common in faded past-crop coffees.
          </figcaption>

          <div className='w-full aspect-[16/9] md:aspect-[5/3] overflow-hidden rounded-xl shadow-lg relative'>
            <ResponsiveImage
              src={`/images/${large_image_url}`}
              alt='Specialty coffee green beans storage freight logistics container'
              fill
              objectFit='cover'
              className='w-full h-full transform hover:scale-105 transition-transform duration-700'
              sizes='(max-width: 768px) 100vw, 800px'
              priority
            />
          </div>
        </figure>

        <div className="flex flex-wrap gap-4 items-center text-sm text-gray-600 border-b border-gray-200 pb-6">
          <div className='bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold border border-blue-200'>
            Logistics / Quality Control
          </div>
          <span className="hidden md:inline text-gray-300">|</span>
          <span className="flex items-center">
            <HiOutlineGlobeAlt className="mr-2 text-green-600" /> Global Supply Chain
          </span>
        </div>
      </header>

      {/* INTRODUCTION */}
      <section className="prose prose-lg prose-indigo max-w-none text-gray-700">
        <p>
          You've spent months sourcing the perfect <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:text-amber-900 font-semibold underline decoration-amber-300 decoration-2 underline-offset-2'>Ethiopian heirloom micro-lot</Link> in the highlands. The cherry was picked at peak ripeness, the <Link href='/insights/ethiopian-dry-coffee-production-quality-control' className='text-amber-700 hover:text-amber-900 font-semibold underline decoration-amber-300 decoration-2 underline-offset-2'>fermentation and drying</Link> were controlled to the hour. But as that coffee enters a steel container for its 45-day journey across the ocean, it faces its greatest threat.
        </p>

        <p className='font-bold text-xl text-gray-900'>
          Why does 15.6% of specialty coffee lose its "specialty" status before it ever reaches the roastery?
        </p>

        <p>
          Specialty coffee is a <span className='font-bold text-amber-800'>hygroscopic organic product</span>. It breathes, it absorbs moisture from the air, and it is highly sensitive to chemical changes induced by its environment. During sea freight, coffee can encounter temperature variations from 15°C to 50°C and relative humidity levels that fluctuate wildly as the vessel crosses different climatic zones – from the dry heat of Djibouti to the humid warmth of the Suez Canal and the cold Atlantic.
        </p>

        <div className='bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6 rounded-xl my-8 shadow-xl border-l-8 border-amber-500'>
          <p className='font-medium flex items-start gap-4'>
            <HiOutlineLightBulb className='text-3xl flex-shrink-0 text-amber-400 mt-1' />
            <span className="leading-relaxed"><span className='font-bold text-amber-400 block mb-1 text-lg'>Key Insight: "Container Sweat"</span> 
            This is the leading cause of quality degradation. When a container cools rapidly at night, the internal air loses its ability to hold moisture. This forces condensation to form on the steel roof, which then drips directly onto the coffee bags, creating mold or "baggy" taints known in the industry as <em>cargo sweat</em>.</span>
          </p>
        </div>
      </section>

      {/* TABLE OF CONTENTS */}
      <nav className='my-10 bg-white p-8 rounded-xl border border-gray-200 shadow-sm'>
        <h3 className='text-xl font-bold mb-6 flex items-center gap-2 text-dark border-b pb-4'>
          <HiOutlineClipboardDocumentList className='text-blue-600 text-2xl' />
          In This Comprehensive Logistics Guide
        </h3>
        <ul className='grid md:grid-cols-2 gap-x-8 gap-y-3 text-sm font-medium'>
          <li><a href="#moisture-equilibrium" className='flex items-center hover:text-blue-700 hover:translate-x-1 transition-transform'><span className="text-blue-400 mr-2">01.</span> Moisture Equilibrium Science</a></li>
          <li><a href="#hermetic-packaging" className='flex items-center hover:text-blue-700 hover:translate-x-1 transition-transform'><span className="text-blue-400 mr-2">02.</span> Hermetic Packaging (GrainPro/Ecotact)</a></li>
          <li><a href="#container-selection" className='flex items-center hover:text-blue-700 hover:translate-x-1 transition-transform'><span className="text-blue-400 mr-2">03.</span> Container Selection Strategy</a></li>
          <li><a href="#vessel-placement" className='flex items-center hover:text-blue-700 hover:translate-x-1 transition-transform'><span className="text-blue-400 mr-2">04.</span> The "Stowage Factor"</a></li>
          <li><a href="#condensation-management" className='flex items-center hover:text-blue-700 hover:translate-x-1 transition-transform'><span className="text-blue-400 mr-2">05.</span> Desiccants & Liners</a></li>
          <li><a href="#transit-time" className='flex items-center hover:text-blue-700 hover:translate-x-1 transition-transform'><span className="text-blue-400 mr-2">06.</span> Transit Times & Freshness Loss</a></li>
          <li><a href="#chemical-aging" className='flex items-center hover:text-blue-700 hover:translate-x-1 transition-transform'><span className="text-blue-400 mr-2">07.</span> Lipid Oxidation (Chemical Aging)</a></li>
          <li><a href="#arrival-qc" className='flex items-center hover:text-blue-700 hover:translate-x-1 transition-transform'><span className="text-blue-400 mr-2">08.</span> Arrival Protocols</a></li>
          <li><a href="#incoterms" className='flex items-center hover:text-blue-700 hover:translate-x-1 transition-transform'><span className="text-blue-400 mr-2">09.</span> Incoterms & Risk</a></li>
        </ul>
      </nav>

      {/* SECTION 1: MOISTURE EQUILIBRIUM */}
      <section id="moisture-equilibrium" className="mb-16 scroll-mt-24">
        <h3 className='text-3xl font-extrabold mb-6 flex items-center gap-3 text-gray-900'>
          <span className="bg-blue-100 p-2 rounded-lg text-blue-600"><FaTint /></span>
          1. The Science of Moisture Equilibrium
        </h3>

        <p className='my-4 text-gray-700 leading-relaxed'>
          Specialty green coffee should ideally be exported with a moisture content between <span className='font-bold text-dark'>10.5% and 12.0%</span>. These parameters are the "Goldilocks Zone"-dry enough to inhibit microbial growth, yet moist enough to preserve cellular integrity and the embryo within the bean.
        </p>
        
        <p className='my-4 text-gray-700 leading-relaxed'>
          However, moisture content is not static. It exists in <span className='italic font-semibold text-blue-900'>Equilibrium Moisture Content (EMC)</span> with the surrounding air's Relative Humidity (RH). If the RH in a container rises above 70%, the coffee beans will act like sponges, absorbing moisture until a balance is reached.
        </p>

        <div className='bg-amber-50 p-8 rounded-xl my-8 border border-amber-200'>
          <h4 className='font-bold text-xl mb-4 flex items-center gap-2 text-amber-900'>
            <HiOutlineBeaker className='text-amber-600' />
            The Water Activity Factor (aW)
          </h4>
          <p className='text-gray-700 mb-6'>
            While total moisture tells us how much water is in the bean, <strong>Water activity (aW)</strong> measures the energy status of that water-essentially, how "available" it is for chemical and microbial reactions. It is the most accurate predictor of shelf stability.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-white p-5 rounded-lg border-l-4 border-green-500 shadow-sm'>
              <p className='font-bold text-green-700 text-lg mb-1'>Target aW: 0.45 – 0.55</p>
              <p className='text-sm text-gray-600'>Safe for long-term storage and intercontinental freight. Enzymatic activity is stalled.</p>
            </div>
            <div className='bg-white p-5 rounded-lg border-l-4 border-red-500 shadow-sm'>
              <p className='font-bold text-red-700 text-lg mb-1'>Danger aW: &gt; 0.60</p>
              <p className='text-sm text-gray-600'>Facilitates the growth of <span className='italic'>Aspergillus</span> molds and OTA toxin production. Flavor "fading" accelerates rapidly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: HERMETIC PACKAGING */}
      <section id="hermetic-packaging" className="mb-16 scroll-mt-24">
        <h3 className='text-3xl font-extrabold mb-6 flex items-center gap-3 text-gray-900'>
          <span className="bg-green-100 p-2 rounded-lg text-green-600"><TbPlant2 /></span>
          2. Hermetic Packaging: GrainPro & Ecotact
        </h3>

        <p className='my-4 text-gray-700 leading-relaxed'>
          Before the early 2010s, nearly all coffee traveled in porous jute or sisal bags. Today, <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>premium Ethiopian exports</Link> utilize hermetic liners as a standard practice for specialty lots.
        </p>

        <div className='grid md:grid-cols-2 gap-8 my-8'>
          <div className='bg-green-50 p-6 rounded-xl border border-green-200'>
            <h4 className='font-bold text-lg mb-4 flex items-center gap-2 text-green-900'>
              <HiOutlineShieldCheck className='text-green-600' />
              Packaging Hierarchy
            </h4>
            <ul className='space-y-3 text-sm text-green-900'>
              <li className="flex items-start">
                <HiOutlineXCircle className="text-red-500 mt-1 mr-2 text-lg flex-shrink-0" /> 
                <span><span className='font-bold'>Standard Jute:</span> High risk. Zero moisture protection. Permeable to odors.</span>
              </li>
              <li className="flex items-start">
                <HiOutlineCheckCircle className="text-green-600 mt-1 mr-2 text-lg flex-shrink-0" /> 
                <span><span className='font-bold'>Hermetic Liners (GrainPro/Ecotact):</span> Industry standard. 5-7 layer high-barrier plastic (EVOH). blocks oxygen and moisture transfer.</span>
              </li>
              <li className="flex items-start">
                <HiOutlineTrophy className="text-amber-500 mt-1 mr-2 text-lg flex-shrink-0" /> 
                <span><span className='font-bold'>Vacuum Packaging (Penta/Brick):</span> Elite tier. Oxygen-free. Used for 90+ score lots and competitions.</span>
              </li>
            </ul>
          </div>

          <div className='bg-blue-50 p-6 rounded-xl border border-blue-200'>
            <h4 className='font-bold text-lg mb-4 flex items-center gap-2 text-blue-900'>
              <HiOutlineChartBar className='text-blue-600' />
              The Economic Impact
            </h4>
            <p className='text-sm mb-4 text-blue-900'>Research indicates that specialty coffee stored in hermetic liners preserves its cupping score for up to <strong>12 months longer</strong> than jute-only storage.</p>
            <ul className='space-y-2 text-sm text-blue-800 font-medium'>
              <li className="flex items-center gap-2"><HiOutlineCheckCircle /> Preserves floral bergamot notes (linalool)</li>
              <li className="flex items-center gap-2"><HiOutlineCheckCircle /> Prevents absorption of diesel fumes at ports</li>
              <li className="flex items-center gap-2"><HiOutlineCheckCircle /> Eliminates insect infestation risk</li>
            </ul>
          </div>
        </div>

        <p className='my-4 text-gray-700'>
          For Ethiopian exporters, ensuring <span className='font-bold text-green-700'>100% GrainPro/Ecotact availability</span> for all <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Specialty Grade 1 and 2 lots</Link> is non-negotiable. The marginal cost of the liner ($2-3 per bag) is an insurance policy for a cargo worth $500-800 per bag.
        </p>
      </section>

      {/* SECTION 3: CONTAINER SELECTION */}
      <section id="container-selection" className="mb-16 scroll-mt-24">
        <h3 className='text-3xl font-extrabold mb-6 flex items-center gap-3 text-gray-900'>
          <span className="bg-blue-100 p-2 rounded-lg text-blue-600"><HiOutlineCube /></span>
          3. Container Selection: Dry vs. Ventilated
        </h3>

        <p className='my-4 text-gray-700'>
          The container is the primary shield against the ocean environment. While <span className='font-bold italic'>Standard 20ft Dry Vans</span> are the workhorse of the industry, specialty logistics require a more nuanced approach.
        </p>

        <div className='space-y-6 my-8'>
          <div className='bg-white p-6 rounded-xl border-l-8 border-blue-500 shadow-md'>
            <h5 className='font-bold text-lg flex items-center gap-2 mb-2'><TbWind className='text-blue-500 text-2xl' /> Ventilated "Coffee" Containers</h5>
            <p className='text-gray-600 text-sm mb-3'>Specifically designed with passive ventilation strips along the top and bottom rails.</p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-bold text-gray-900">Pros:</span>
                <p className="text-gray-600">Prevents internal heat-trapping; allows "breathing" of the cargo.</p>
              </div>
              <div>
                <span className="font-bold text-gray-900">Cons:</span>
                <p className="text-gray-600">Vulnerable to salt-air ingress if stored on deck; higher cost and lower availability.</p>
              </div>
            </div>
          </div>

          <div className='bg-white p-6 rounded-xl border-l-8 border-purple-500 shadow-md'>
            <h5 className='font-bold text-lg flex items-center gap-2 mb-2'><TbBoxModel2 className='text-purple-500 text-2xl' /> Insulated Radiant Barriers</h5>
            <p className='text-gray-600 text-sm mb-3'>A high-performance alternative to reefer containers for high-end specialty.</p>
            <div className="text-sm">
               <p className="mb-2"><span className="font-bold">Mechanism:</span> The entire container is lined with a thermal "space blanket" (like Liqui-Foil) reflecting 97% of radiant heat.</p>
               <p className="text-purple-800 font-semibold bg-purple-50 p-2 rounded inline-block">Recommended for: Micro-lots, Gesha varieties, and competition coffee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: VESSEL PLACEMENT */}
      <section id="vessel-placement" className="mb-16 scroll-mt-24">
        <h3 className='text-3xl font-extrabold mb-6 flex items-center gap-3 text-gray-900'>
          <span className="bg-blue-100 p-2 rounded-lg text-blue-600"><FaShip /></span>
          4. The "Stowage Factor": Vessel Placement Strategy
        </h3>

        <p className='my-4 text-gray-700'>
          Where your container is placed on the ship matters as much as what's inside it. On a Ultra-Large Container Vessel (ULCV), the temperature difference between the top stack and the bottom hold can be <span className='font-bold text-red-600'>as much as 25°C</span>.
        </p>

        <div className='bg-gray-50 p-8 rounded-xl my-6 border border-gray-200 shadow-sm'>
          <h4 className='font-bold text-lg mb-6 flex items-center gap-2 uppercase tracking-wide text-gray-800'>
            <GiShipWheel className='text-blue-800 text-2xl' />
            Strategic Stowage Requests
          </h4>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='bg-white p-5 rounded-lg border-l-4 border-green-500 shadow-sm'>
              <p className='font-bold text-gray-900 mb-2'>Request: "Under Deck, Below Waterline"</p>
              <p className='text-sm text-gray-600'>The ocean acts as a heat sink. Containers stored in the hold stay at a remarkably stable 18-22°C throughout the voyage, regardless of the ambient air temperature.</p>
            </div>
            <div className='bg-white p-5 rounded-lg border-l-4 border-amber-500 shadow-sm'>
              <p className='font-bold text-gray-900 mb-2'>Avoid: "Deck Stowage (Top Tier)"</p>
              <p className='text-sm text-gray-600'>Direct sun exposure turns the container into an oven. Internal temperatures can hit 60°C in tropical waters, "baking" the coffee oils and destroying volatile aromatics.</p>
            </div>
            <div className='bg-white p-5 rounded-lg border-l-4 border-red-500 shadow-sm'>
              <p className='font-bold text-gray-900 mb-2'>Avoid: "Engine Room Bulkheads"</p>
              <p className='text-sm text-gray-600'>The massive heat from the ship's engines can penetrate the hold, causing localized hot spots that age the coffee unevenly.</p>
            </div>
            <div className='bg-white p-5 rounded-lg border-l-4 border-blue-400 shadow-sm'>
              <p className='font-bold text-gray-900 mb-2'>Request: "Mid-Ship Placement"</p>
              <p className='text-sm text-gray-600'>Reduces vertical movement and vibration (G-force), which can sometimes cause "sifting" or bean breakage in lower density lots.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CONDENSATION MANAGEMENT */}
      <section id="condensation-management" className="mb-16 scroll-mt-24">
        <h3 className='text-3xl font-extrabold mb-6 flex items-center gap-3 text-gray-900'>
          <span className="bg-blue-100 p-2 rounded-lg text-blue-400"><FaTint /></span>
          5. Condensation Management: Beyond the Bag
        </h3>

        <p className='my-4 text-gray-700'>
          Managing <span className='font-bold'>headspace humidity</span> is critical for preserving <Link href='/insights/ethiopian-dry-coffee-production-quality-control' className='text-amber-700 hover:underline'>washed specialty coffees</Link>, which are typically more sensitive to moisture-related taints than naturals.
        </p>

        <div className='grid md:grid-cols-3 gap-6 my-8'>
          <div className='bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow'>
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mb-4 text-blue-600"><TbActivity /></div>
            <h5 className='font-bold text-gray-900 mb-2'>Active Desiccants</h5>
            <p className='text-sm text-gray-600'>We utilize 2kg Calcium Chloride "Dry-Bags" hung from container hooks. These absorb up to 6 liters of water each, trapping moisture before it reaches the ceiling.</p>
          </div>
          <div className='bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow'>
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mb-4 text-blue-600"><FaBoxOpen /></div>
            <h5 className='font-bold text-gray-900 mb-2'>Moisture Blotters</h5>
            <p className='text-sm text-gray-600'>A layer of heavy Kraft paper or high-ply cardboard is laid over the top of the cargo. If condensation *does* drip, the cardboard absorbs it before it penetrates the jute.</p>
          </div>
          <div className='bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow'>
            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mb-4 text-blue-600"><TbBoxModel2 /></div>
            <h5 className='font-bold text-gray-900 mb-2'>Floor Protection</h5>
            <p className='text-sm text-gray-600'>Plastic-wrapped pallets or heavy-duty liners prevent "rising damp" from the container floor, which often harbors residual moisture or odors from previous cargoes.</p>
          </div>
        </div>
      </section>

      {/* SECTION 6: TRANSIT TIME */}
      <section id="transit-time" className="mb-16 scroll-mt-24">
        <h3 className='text-3xl font-extrabold mb-6 flex items-center gap-3 text-gray-900'>
          <span className="bg-blue-100 p-2 rounded-lg text-blue-600"><HiOutlineGlobeAlt /></span>
          6. Managing Transit Times & Global Disruptions
        </h3>

        <p className='my-4 text-gray-700'>
          In 2026, the global coffee supply chain faces unprecedented variability. A traditional route from Djibouti to New Jersey, which ideally takes 35-40 days, can now extend to 65+ days due to transshipment delays.
        </p>

        <h4 className='font-bold mt-8 mb-4 text-lg text-gray-800'>The "Quality Fade" Timeline (Washed Arabica):</h4>
        <div className='overflow-hidden rounded-xl border border-gray-200 shadow-sm mb-8'>
          <table className='w-full text-sm text-left'>
            <thead className='bg-gray-100 text-gray-700 uppercase font-bold text-xs'>
              <tr>
                <th className='p-4 border-b border-gray-200'>Transit Window</th>
                <th className='p-4 border-b border-gray-200'>Expected Quality Impact</th>
                <th className='p-4 border-b border-gray-200'>Risk Level</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className='p-4 font-bold text-gray-900'>0 - 45 Days</td>
                <td className='p-4 text-gray-600'>Negligible profile change if hermetically sealed.</td>
                <td className='p-4 text-green-700 font-bold flex items-center gap-1'>
                  <span className="w-2 h-2 rounded-full bg-green-500"></span> LOW
                </td>
              </tr>
              <tr className='bg-amber-50 hover:bg-amber-100 transition-colors'>
                <td className='p-4 font-bold text-gray-900'>46 - 75 Days</td>
                <td className='p-4 text-gray-600'>Minor loss of bright acidity; slight "hushing" of delicate florals.</td>
                <td className='p-4 text-amber-600 font-bold flex items-center gap-1'>
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span> MODERATE
                </td>
              </tr>
              <tr className='bg-red-50 hover:bg-red-100 transition-colors'>
                <td className='p-4 font-bold text-gray-900'>&gt; 75 Days</td>
                <td className='p-4 text-gray-600'>Risk of "baggy" notes; loss of sweetness; noticeable profile fading.</td>
                <td className='p-4 text-red-600 font-bold flex items-center gap-1'>
                  <span className="w-2 h-2 rounded-full bg-red-600"></span> CRITICAL
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <blockquote className='border-l-4 border-blue-500 pl-4 italic text-gray-600 text-lg my-6'>
          "Transparency in transit times is as important as transparency in sourcing. An importer must know when their 'fresh' crop is effectively becoming 'past crop' due to transit duration."
        </blockquote>
      </section>

      {/* SECTION 7: CHEMICAL AGING */}
      <section id="chemical-aging" className="mb-16 scroll-mt-24">
        <h3 className='text-3xl font-extrabold mb-6 flex items-center gap-3 text-gray-900'>
          <span className="bg-purple-100 p-2 rounded-lg text-purple-600"><FaMicroscope /></span>
          7. Chemical Aging: The Lipid Oxidation Crisis
        </h3>

        <p className='my-4 text-gray-700'>
          The most devastating effect of poor storage is invisible to the eye but obvious in the cup: <span className='font-bold'>lipid oxidation</span>. Coffee beans contain roughly 15-17% lipids (fats/oils). When exposed to heat and oxygen, these lipids break down into rancid compounds.
        </p>

        <div className='bg-gray-900 text-gray-100 p-8 rounded-xl my-6 shadow-2xl relative overflow-hidden'>
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <GiDna2 className="text-9xl" />
          </div>
          <h5 className='font-bold text-xl mb-4 flex items-center gap-2 text-amber-400'><TbTemperature /> The Van 't Hoff Rule</h5>
          <p className='text-lg font-medium mb-4 leading-relaxed'>
            For every 10°C increase in temperature, the rate of chemical reaction (and thus quality degradation) approximately <span className='text-amber-400 font-bold underline decoration-2 underline-offset-4'>doubles</span>.
          </p>
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
             <p className='text-sm text-gray-300'>
              <span className="font-bold text-white">Scenario:</span> A coffee traveling at 40°C for one month undergoes the same amount of chemical aging as a coffee stored at 20°C for four months. This explains why "High-Deck" stowage destroys specialty scores.
            </p>
          </div>
        </div>

        <p className='my-4 text-gray-700'>
          This oxidation results in the "cardboard" or "baggy" taste. While roasting can mask some aging in darker profiles, for the high-end specialty market where light roasting is preferred, these defects have nowhere to hide.
        </p>
      </section>

      {/* SECTION 8: ARRIVAL QC */}
      <section id="arrival-qc" className="mb-16 scroll-mt-24">
        <h3 className='text-3xl font-extrabold mb-6 flex items-center gap-3 text-gray-900'>
          <span className="bg-green-100 p-2 rounded-lg text-green-600"><HiOutlineShieldCheck /></span>
          8. Arrival Protocol: Post-Freight Quality Verification
        </h3>

        <p className='my-4 text-gray-700'>
          The work doesn't end at the destination port. A professional importer follows a multi-step protocol to ensure the <Link href='/insights/ethiopian-dry-coffee-production-quality-control' className='text-amber-700 hover:underline'>origin's quality</Link> was preserved.
        </p>

        <div className='bg-amber-50 p-8 rounded-xl my-6 border border-amber-200'>
          <h5 className='font-bold text-xl mb-6 flex items-center gap-2 text-amber-900 border-b border-amber-200 pb-2'><HiOutlineBeaker /> The Arrival QC Checklist</h5>
          <ol className='space-y-6'>
            <li className='flex gap-4 items-start'>
              <span className='bg-amber-600 text-white rounded-full w-8 h-8 flex flex-shrink-0 items-center justify-center font-bold text-sm shadow-sm'>1</span>
              <div>
                <p className='font-bold text-gray-900 text-base'>Container Seal Verification</p>
                <p className='text-sm text-gray-700 mt-1'>Confirming the seal number matches the B/L to ensure no unauthorized access (and thus uncontrolled exposure) occurred at transshipment ports.</p>
              </div>
            </li>
            <li className='flex gap-4 items-start'>
              <span className='bg-amber-600 text-white rounded-full w-8 h-8 flex flex-shrink-0 items-center justify-center font-bold text-sm shadow-sm'>2</span>
              <div>
                <p className='font-bold text-gray-900 text-base'>Spot Moisture Testing</p>
                <p className='text-sm text-gray-700 mt-1'>Using a calibrated moisture meter (Shore/Draminski) to test at least 5% of the bags. Any drift &gt;0.5% compared to pre-shipment suggests a liner breach.</p>
              </div>
            </li>
            <li className='flex gap-4 items-start'>
              <span className='bg-amber-600 text-white rounded-full w-8 h-8 flex flex-shrink-0 items-center justify-center font-bold text-sm shadow-sm'>3</span>
              <div>
                <p className='font-bold text-gray-900 text-base'>The "Nose" Test</p>
                <p className='text-sm text-gray-700 mt-1'>Smelling the bags immediately upon opening. "Fresh" green coffee smells of grass, peas, or sweet hay. If it smells of paper or wet jute, moisture ingress is likely.</p>
              </div>
            </li>
            <li className='flex gap-4 items-start'>
              <span className='bg-amber-600 text-white rounded-full w-8 h-8 flex flex-shrink-0 items-center justify-center font-bold text-sm shadow-sm'>4</span>
              <div>
                <p className='font-bold text-gray-900 text-base'>PSS vs. Arrival Cupping</p>
                <p className='text-sm text-gray-700 mt-1'>The ultimate test. Cupping the arrival sample side-by-side with the Pre-Shipment Sample (PSS). A drop of &gt;1.5 points indicates a logistics failure.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* SECTION 9: INCOTERMS */}
      <section id="incoterms" className="mb-16 scroll-mt-24">
        <h3 className='text-3xl font-extrabold mb-6 flex items-center gap-3 text-gray-900'>
          <span className="bg-blue-100 p-2 rounded-lg text-blue-600"><FaHandshake /></span>
          9. Logistics & Liability: Incoterms
        </h3>
        <p className="my-4 text-gray-700">
          Understanding who owns the risk during the voyage is crucial for roasters. The Incoterm dictates when responsibility transfers from the Ethiopian exporter to the buyer.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
           <div className="border border-gray-200 p-5 rounded-lg hover:bg-gray-50 transition">
              <h5 className="font-bold flex items-center gap-2 mb-2"><HiOutlineTruck className="text-gray-500"/> FOB (Free On Board)</h5>
              <p className="text-sm text-gray-600">Risk transfers when coffee crosses the ship's rail in Djibouti. The buyer handles sea freight and insurance. Common for large importers.</p>
           </div>
           <div className="border border-gray-200 p-5 rounded-lg hover:bg-gray-50 transition">
              <h5 className="font-bold flex items-center gap-2 mb-2"><HiOutlineCurrencyDollar className="text-gray-500"/> CIF (Cost, Insurance, Freight)</h5>
              <p className="text-sm text-gray-600">Exporter covers costs until the destination port. The safest option for smaller roasters, as the exporter manages the freight quality.</p>
           </div>
        </div>
      </section>

      {/* FAQ SECTION - GREAT FOR SEO */}
      <section className="mb-16 bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions about Coffee Logistics</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How long can green coffee be stored before it goes bad?</h4>
            <p className="text-sm text-gray-600">In traditional jute bags, green coffee begins to fade after 6 months. When stored in hermetic liners (GrainPro) at stable temperatures (under 25°C), specialty coffee can maintain its quality for 12 to 18 months.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What causes coffee to taste like wood or paper?</h4>
            <p className="text-sm text-gray-600">This is often the "baggy" defect, caused by lipid oxidation or moisture absorption from jute bags during transport. It indicates the coffee has aged or was exposed to high humidity/heat.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Why is Ethiopian coffee more sensitive to shipping?</h4>
            <p className="text-sm text-gray-600">Ethiopian heirlooms often have different bean densities and cellular structures compared to commercial hybrids. Their delicate floral and fruity volatiles (like jasmine and bergamot) are the first to degrade under heat stress.</p>
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className='bg-gray-900 text-white p-10 rounded-2xl shadow-2xl mb-12 relative overflow-hidden'>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500"></div>
        <h3 className='text-3xl font-extrabold mb-6 text-white'>
          Partner with Logistics Experts
        </h3>

        <p className='mb-8 text-lg text-gray-300 leading-relaxed'>
          Sea freight shouldn't be a gamble. At Ethio Coffee Export, we treat logistics as an extension of our farming. By applying rigorous science-using hermetic liners, thermal barriers, and strategic stowage-we ensure that the 90+ point aromatics you cup at origin are the ones you roast at home.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 text-sm mb-8 font-medium'>
          <div className='flex items-center gap-3'><HiOutlineCheckCircle className="text-green-400 text-lg"/> 100% Hermetic Liners</div>
          <div className='flex items-center gap-3'><HiOutlineCheckCircle className="text-green-400 text-lg"/> Thermal Container Liners</div>
          <div className='flex items-center gap-3'><HiOutlineCheckCircle className="text-green-400 text-lg"/> Strategic Stowage Control</div>
          <div className='flex items-center gap-3'><HiOutlineCheckCircle className="text-green-400 text-lg"/> Real-time IoT Tracking</div>
          <div className='flex items-center gap-3'><HiOutlineCheckCircle className="text-green-400 text-lg"/> Complete Documentation</div>
          <div className='flex items-center gap-3'><HiOutlineCheckCircle className="text-green-400 text-lg"/> Full All-Risk Insurance</div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href='/contact-us' className='bg-amber-600 hover:bg-amber-500 text-white font-bold py-3 px-8 rounded-lg transition-colors text-center'>
            Request a Shipping Quote
          </Link> 
          <Link href='/offerings' className='bg-transparent border border-gray-500 hover:border-white text-gray-300 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors text-center'>
            View Current Offerings
          </Link> 
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <aside className='my-12 pt-8 border-t border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>
          Related Articles
        </h3>
        <div className='grid md:grid-cols-2 gap-6'>
          <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='group block p-5 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all bg-white'>
             <div className="flex items-center justify-between mb-2">
                <span className='font-bold text-blue-900 group-hover:text-blue-600'>Sourcing Green Coffee Guide</span>
                <HiOutlineChartBar className='text-gray-300 group-hover:text-blue-500 transition-colors' />
             </div>
             <p className='text-xs text-gray-500'>Navigating the complex landscape of Ethiopian sourcing, from auctions to direct export.</p>
          </Link>

          <Link href='/insights/ethiopian-dry-coffee-production-quality-control' className='group block p-5 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all bg-white'>
             <div className="flex items-center justify-between mb-2">
                <span className='font-bold text-blue-900 group-hover:text-blue-600'>Quality Control Production</span>
                <HiOutlineShieldCheck className='text-gray-300 group-hover:text-blue-500 transition-colors' />
             </div>
             <p className='text-xs text-gray-500'>How we maintain quality standards before the coffee ever reaches the container.</p>
          </Link>

          <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='group block p-5 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all bg-white'>
             <div className="flex items-center justify-between mb-2">
                <span className='font-bold text-blue-900 group-hover:text-blue-600'>Understanding MOQs</span>
                <HiOutlineCube className='text-gray-300 group-hover:text-blue-500 transition-colors' />
             </div>
             <p className='text-xs text-gray-500'>Practical logistics: understanding container sizes, weight limits, and minimum orders.</p>
          </Link>

          <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='group block p-5 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all bg-white'>
             <div className="flex items-center justify-between mb-2">
                <span className='font-bold text-blue-900 group-hover:text-blue-600'>Heirloom Varieties & Genetics</span>
                <GiDna2 className='text-gray-300 group-hover:text-blue-500 transition-colors' />
             </div>
             <p className='text-xs text-gray-500'>Why the genetics of Ethiopian coffee are more sensitive to transport than commercial cultivars.</p>
          </Link>

          <Link href='/insights/green-coffee-shelf-life-storage-guide' className='group block p-5 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all bg-white'>
             <div className="flex items-center justify-between mb-2">
                <span className='font-bold text-blue-900 group-hover:text-blue-600'>Green Coffee Shelf Life &amp; Storage</span>
                <HiOutlineCube className='text-gray-300 group-hover:text-blue-500 transition-colors' />
             </div>
             <p className='text-xs text-gray-500'>Moisture science, packaging comparisons, and warehouse protocols for preserving green coffee quality after arrival.</p>
          </Link>

          <Link href='/insights/importing-ethiopian-coffee-to-australia' className='group block p-5 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all bg-white'>
             <div className="flex items-center justify-between mb-2">
                <span className='font-bold text-blue-900 group-hover:text-blue-600'>Importing to Australia</span>
                <HiOutlineTruck className='text-gray-300 group-hover:text-blue-500 transition-colors' />
             </div>
             <p className='text-xs text-gray-500'>Complete biosecurity and customs guide for Australian importers.</p>
          </Link>

          <Link href='/insights/sidama-coffee-production-productivity-export' className='group block p-5 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all bg-white'>
             <div className="flex items-center justify-between mb-2">
                <span className='font-bold text-blue-900 group-hover:text-blue-600'>Sidama Production Guide</span>
                <HiOutlineGlobeAlt className='text-gray-300 group-hover:text-blue-500 transition-colors' />
             </div>
             <p className='text-xs text-gray-500'>Deep dive into Sidama region&apos;s exceptional coffee production and export opportunities.</p>
          </Link>
        </div>
      </aside>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Ship Ethiopian Coffee with Confidence</h4>
        <p className='my-2'>
          At <span className='font-bold'>Ethio Coffee Export PLC</span>, we handle logistics, documentation, and quality assurance from origin to port. Let us manage the details so your coffee arrives in perfect condition.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Our Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Contact Us</Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>How to Order</Link>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> This guide covers specialty coffee storage, freight logistics, and best practices for maintaining quality during sea transport.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </article>
  )
}
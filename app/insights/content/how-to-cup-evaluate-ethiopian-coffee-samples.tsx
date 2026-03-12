import Link from 'next/link'
import ResponsiveImage from '../../components/ResponsiveImage'
import {
  HiOutlineBeaker,
  HiOutlineAcademicCap,
  HiOutlineChartBar,
  HiOutlineClipboardDocumentList,
  HiOutlineCog,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
  HiOutlineLightBulb,
  HiOutlineScale,
  HiOutlineClock,
  HiOutlineTruck,
  HiOutlineDocumentMagnifyingGlass
} from 'react-icons/hi2'
import { PiCoffee } from 'react-icons/pi'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function HowToCupEvaluateEthiopianCoffeeSamples({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      {/* H1 */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>{title}</h1>

      {/* H2 subtitle */}
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        A Practical Guide to SCA Cupping Protocol, Flavor Profile Identification, Defect Detection, and Scoring for Importers and Roasters
      </h2>

      {/* Featured image */}
      <figure>
        <figcaption className='font-inconsolata my-2'>Professional cupping session evaluating Ethiopian specialty coffee samples at origin</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Professional coffee cupping setup with Ethiopian specialty coffee samples arranged for SCA protocol evaluation'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      {/* Key Takeaway */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-2'>Key Takeaway</p>
        <p>
          Cupping is the single most important skill for sourcing Ethiopian coffee. This guide covers SCA protocol parameters, sample roasting standards, region-specific flavor profiles (Yirgacheffe, Guji, Sidamo, Harrar), defect identification, pre-shipment vs. arrival sample comparison, and how to translate scores into confident purchasing decisions.
        </p>
      </div>

      {/* Category tag */}
      <div className='flex flex-wrap gap-2 my-4'>
        <span className='bg-amber-50 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200'>Quality Control</span>
        <span className='bg-amber-50 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200'>Cupping Guide</span>
        <span className='bg-amber-50 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200'>Importer Resources</span>
      </div>

      {/* Introduction */}
      <p className='my-4 text-lg leading-relaxed'>
        For importers, roasters, and green coffee buyers, learning how to <strong>cup and evaluate Ethiopian coffee samples</strong> is the most critical step in the sourcing process. A structured cupping session reveals terroir character, processing quality, potential defects, and whether a lot matches both your expectations and your customers&apos; preferences. Ethiopian coffees present distinctive complexities that differ sharply from other origins, and evaluating them demands specific technique and calibrated expectations.
      </p>

      <p className='my-4 text-lg leading-relaxed'>
        Ethiopian coffees are known for vibrant floral aromatics, complex fruit notes, and exceptional clarity. A natural-processed Guji with intense blueberry notes might be extraordinary or over-fermented. A washed Yirgacheffe&apos;s bright citrus acidity could signal pristine processing or insufficient drying. The difference lies in knowing exactly what to look for and applying a systematic evaluation framework.
      </p>

      <p className='my-4 text-lg leading-relaxed'>
        This guide provides a step-by-step approach to cupping Ethiopian coffee using industry-standard SCA protocols and the new Coffee Value Assessment (CVA) framework. From evaluating pre-shipment samples and comparing arrival lots to deciding between multiple Ethiopian offerings, you will learn to cup with precision and make data-driven purchasing decisions.
      </p>

      {/* In This Guide */}
      <div className='bg-gray-50 border border-gray-200 rounded-lg p-6 my-8'>
        <h3 className='text-xl font-bold mb-4'>In This Guide</h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#sca-protocol' className='text-dark hover:text-primary transition'>1. Understanding the SCA Cupping Protocol</a></li>
          <li><a href='#equipment' className='text-dark hover:text-primary transition'>2. Essential Cupping Equipment and Setup</a></li>
          <li><a href='#sample-roasting' className='text-dark hover:text-primary transition'>3. Sample Roasting for Ethiopian Coffee Evaluation</a></li>
          <li><a href='#cupping-process' className='text-dark hover:text-primary transition'>4. Step-by-Step Cupping Process</a></li>
          <li><a href='#flavor-profiles' className='text-dark hover:text-primary transition'>5. Ethiopian Coffee Flavor Profiles by Region and Process</a></li>
          <li><a href='#grading-system' className='text-dark hover:text-primary transition'>6. How Ethiopian Coffee Grading Relates to Cupping</a></li>
          <li><a href='#defects' className='text-dark hover:text-primary transition'>7. Identifying Common Defects in Ethiopian Coffee</a></li>
          <li><a href='#pss-arrival' className='text-dark hover:text-primary transition'>8. Pre-Shipment vs. Arrival Sample Evaluation</a></li>
          <li><a href='#purchasing' className='text-dark hover:text-primary transition'>9. Using Cupping Results for Purchasing Decisions</a></li>
          <li><a href='#tips' className='text-dark hover:text-primary transition'>10. Practical Tips and Calibration</a></li>
        </ol>
      </div>

      {/* Section 1: SCA Cupping Protocol */}
      <h3 id='sca-protocol' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineAcademicCap className='w-8 h-8 text-amber-600' />
        Understanding the SCA Cupping Protocol
      </h3>

      <p className='my-4 text-lg leading-relaxed'>
        The Specialty Coffee Association (SCA) cupping protocol is the global standard for <strong>evaluating Ethiopian coffee samples</strong>. It provides a systematic, repeatable method that enables buyers worldwide to assess coffee quality using identical criteria. Adhering to SCA standards ensures consistency and allows meaningful comparison between lots from different origins, regions, and processing methods.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='text-xl font-bold mb-3 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='w-6 h-6 text-blue-700' />
          SCA Cupping Parameters
        </h4>
        <ul className='space-y-2 text-gray-800'>
          <li><strong>Dose:</strong> 8.25g of coffee per 150ml of water (1:18.18 ratio)</li>
          <li><strong>Grind Size:</strong> Slightly coarser than drip; ~70-75% passing through a US Standard #20 sieve</li>
          <li><strong>Water Temperature:</strong> 200°F (93°C) at the time of pouring</li>
          <li><strong>Water Quality:</strong> Clean, odor-free; TDS 125-175 ppm, pH 6.5-7.5</li>
          <li><strong>Steep Time:</strong> 4 minutes before breaking the crust</li>
          <li><strong>Evaluation Window:</strong> Break crust at ~58-60°C; score from ~70°C down to ~40°C</li>
        </ul>
      </div>

      <p className='my-4 text-lg leading-relaxed'>
        The SCA uses a 100-point scoring system across ten attributes: fragrance/aroma, flavor, aftertaste, acidity, body, balance, uniformity, clean cup, sweetness, and overall impression. Specialty-grade coffee requires a minimum score of 80 points. Ethiopian specialty lots typically score 84-92, with exceptional <Link href='/insights/micro-lot-ethiopian-coffee-sourcing-guide' className='text-amber-700 hover:underline font-bold'>micro-lots</Link> reaching 93-95+.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='text-xl font-bold mb-3'>SCA Scoring Categories (100-Point Scale)</h4>
        <div className='grid md:grid-cols-2 gap-4 text-sm'>
          <div>
            <strong className='text-blue-700'>Fragrance/Aroma (10 pts):</strong>
            <p>Dry fragrance intensity and wet aroma quality after adding water</p>
          </div>
          <div>
            <strong className='text-blue-700'>Flavor (10 pts):</strong>
            <p>Primary taste characteristics, complexity, and clarity</p>
          </div>
          <div>
            <strong className='text-blue-700'>Aftertaste (10 pts):</strong>
            <p>Length, quality, and pleasantness of flavor after swallowing</p>
          </div>
          <div>
            <strong className='text-blue-700'>Acidity (10 pts):</strong>
            <p>Brightness, liveliness, and quality of acid notes</p>
          </div>
          <div>
            <strong className='text-blue-700'>Body (10 pts):</strong>
            <p>Tactile mouthfeel, weight, and texture on the palate</p>
          </div>
          <div>
            <strong className='text-blue-700'>Balance (10 pts):</strong>
            <p>How flavor, aftertaste, acidity, and body complement each other</p>
          </div>
          <div>
            <strong className='text-blue-700'>Uniformity (10 pts):</strong>
            <p>Consistency across all 5 cups (2 points per uniform cup)</p>
          </div>
          <div>
            <strong className='text-blue-700'>Clean Cup (10 pts):</strong>
            <p>Freedom from off-flavors and taints (2 points per clean cup)</p>
          </div>
          <div>
            <strong className='text-blue-700'>Sweetness (10 pts):</strong>
            <p>Pleasant fullness and sweetness presence (2 points per sweet cup)</p>
          </div>
          <div>
            <strong className='text-blue-700'>Overall (10 pts):</strong>
            <p>Cupper&apos;s holistic assessment of the coffee&apos;s total quality</p>
          </div>
        </div>
      </div>

      {/* CVA Framework */}
      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='text-xl font-bold mb-3'>SCA Coffee Value Assessment (CVA): The New Framework</h4>
        <p className='my-2'>
          The SCA has introduced the <Link href='/insights/new-sca-coffee-value-assessment' className='text-amber-700 hover:underline font-bold'>Coffee Value Assessment (CVA)</Link> as a multi-dimensional replacement for the traditional cupping form. The CVA separates <em>descriptive</em> profiling (what the coffee tastes like) from <em>affective</em> scoring (how much you value it), giving buyers richer data.
        </p>
        <p className='my-2'>
          For Ethiopian coffee evaluation, the CVA is particularly useful because it captures the wide flavor spectrum across regions and processes. Instead of a single 100-point number, buyers receive detailed descriptor profiles alongside extrinsic and intrinsic value scores. The traditional SCA cupping protocol remains valid and widely used; adopt CVA when your team is ready and your trading partners accept it.
        </p>
      </div>

      {/* Section 2: Equipment */}
      <h3 id='equipment' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCog className='w-8 h-8 text-amber-600' />
        Essential Cupping Equipment and Setup
      </h3>

      <p className='my-4 text-lg leading-relaxed'>
        Professional cupping requires specific equipment to ensure consistency and accuracy. While elaborate lab setups exist, a functional cupping station for evaluating Ethiopian samples can be established with these core tools and proper technique.
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-6'>
        <div className='bg-amber-50 p-6 rounded-lg border border-amber-200'>
          <h4 className='text-lg font-semibold mb-3'>Core Equipment</h4>
          <ul className='space-y-2 text-gray-800 text-sm'>
            <li><strong>Cupping bowls:</strong> 150-200ml ceramic or tempered glass (minimum 5 per sample)</li>
            <li><strong>Cupping spoons:</strong> Deep, round bowls designed for proper aspiration</li>
            <li><strong>Grinder:</strong> High-quality burr grinder with consistent particle distribution</li>
            <li><strong>Scale:</strong> Accurate to 0.1g for precise dosing</li>
            <li><strong>Kettle:</strong> Temperature-controlled, ideally gooseneck for pour control</li>
            <li><strong>Thermometer:</strong> Instant-read, for verifying water and slurry temperature</li>
            <li><strong>Timer:</strong> For tracking steep and evaluation phases</li>
            <li><strong>Spittoon:</strong> For expectorating between samples</li>
          </ul>
        </div>

        <div className='bg-amber-50 p-6 rounded-lg border border-amber-200'>
          <h4 className='text-lg font-semibold mb-3'>Supporting Materials</h4>
          <ul className='space-y-2 text-gray-800 text-sm'>
            <li><strong>Cupping forms:</strong> SCA official forms, CVA worksheets, or custom templates</li>
            <li><strong>Rinse water:</strong> Clean, hot water for rinsing spoons between samples</li>
            <li><strong>Sample roaster:</strong> Required if evaluating green coffee (Ikawa, Probatino, etc.)</li>
            <li><strong>Sample trays:</strong> For organizing and labeling green and roasted samples</li>
            <li><strong>Blind labels:</strong> Coded identifiers for unbiased evaluation</li>
            <li><strong>SCA Flavor Wheel:</strong> Reference for standardizing descriptor language</li>
            <li><strong>Lighting:</strong> Neutral, consistent illumination (5000-6500K)</li>
            <li><strong>Environment:</strong> Quiet, odor-free room with stable temperature</li>
          </ul>
        </div>
      </div>

      <div className='bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg my-6'>
        <h4 className='text-xl font-bold mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='w-6 h-6 text-yellow-700' />
          Water Quality Is Non-Negotiable
        </h4>
        <p className='text-gray-800'>
          Ethiopian coffees, with their delicate floral and fruit characteristics, are highly sensitive to mineral content and pH. Use filtered water with TDS between 125-175 ppm. Water that is too soft produces flat, lifeless cups; water that is too hard mutes acidity and introduces chalky mouthfeel. Using a consistent, calibrated water source (Third Wave Water, BWT-filtered, or spring water matching SCA specs) eliminates a major variable from your evaluations.
        </p>
      </div>

      {/* Section 3: Sample Roasting */}
      <h3 id='sample-roasting' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <PiCoffee className='w-8 h-8 text-amber-600' />
        Sample Roasting for Ethiopian Coffee Evaluation
      </h3>

      <p className='my-4 text-lg leading-relaxed'>
        When evaluating green Ethiopian coffee, proper sample roasting is essential. The objective is to develop the coffee enough to reveal its intrinsic characteristics without introducing roast-derived flavors that mask origin qualities or hide defects. For more on how roast development affects Ethiopian cup profiles, see our <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='text-amber-700 hover:underline font-bold'>roasting Ethiopian coffee guide</Link>.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='text-xl font-bold mb-3'>SCA Sample Roasting Standards</h4>
        <ul className='space-y-2 text-gray-800'>
          <li><strong>Roast Level:</strong> Light to medium-light (Agtron 58-63 whole bean, 63-68 ground)</li>
          <li><strong>Development Time:</strong> 8-12% of total roast time after first crack</li>
          <li><strong>Total Roast Time:</strong> 8-12 minutes (sample roaster dependent)</li>
          <li><strong>First Crack:</strong> Should occur between 6-9 minutes</li>
          <li><strong>End Temperature:</strong> 195-205°C (383-401°F)</li>
          <li><strong>Cooling:</strong> Rapid cooling immediately after drop (under 2 minutes to room temp)</li>
          <li><strong>Resting:</strong> Minimum 8 hours, ideally 12-24 hours before cupping</li>
        </ul>
      </div>

      <p className='my-4 text-lg leading-relaxed'>
        <strong>Ethiopian-specific considerations:</strong> Avoid roasting too light, as underdevelopment amplifies grassy or vegetal notes that misrepresent the coffee&apos;s true character. At the same time, Ethiopian floral and fruit notes diminish rapidly past medium development. The target is the zone where origin character is fully expressed: clean sweetness, defined acidity, and distinct aromatics.
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-semibold mb-2 flex items-center gap-2'>
            <HiOutlineCheckCircle className='text-green-600' />
            Properly Roasted Sample
          </h4>
          <ul className='space-y-1 text-sm text-gray-700'>
            <li>&#10003; Even color distribution across all beans</li>
            <li>&#10003; No scorching, tipping, or face burns</li>
            <li>&#10003; Clean, sweet aroma with no smoky or roasty notes</li>
            <li>&#10003; Full first crack completion with controlled development</li>
            <li>&#10003; No underdeveloped &ldquo;grassy&rdquo; or &ldquo;hay-like&rdquo; smell</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-semibold mb-2 flex items-center gap-2'>
            <HiOutlineXCircle className='text-red-600' />
            Poor Sample Roasting
          </h4>
          <ul className='space-y-1 text-sm text-gray-700'>
            <li>&#10007; Uneven color or mottling across the batch</li>
            <li>&#10007; Visible scorch marks or charred tips</li>
            <li>&#10007; Roasty, smoky, or carbon aroma dominating</li>
            <li>&#10007; Quakers present (pale, underdeveloped beans)</li>
            <li>&#10007; Baked character from stalling (flat, dull, papery cup)</li>
          </ul>
        </div>
      </div>

      {/* Section 4: Step-by-Step Cupping Process */}
      <h3 id='cupping-process' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineClock className='w-8 h-8 text-amber-600' />
        Step-by-Step Cupping Process
      </h3>

      <p className='my-4 text-lg leading-relaxed'>
        Follow this systematic approach when cupping Ethiopian coffee to ensure consistency and thorough evaluation across every sample on your table.
      </p>

      <div className='space-y-6 my-6'>
        <div className='bg-white border-2 border-amber-400 p-6 rounded-lg'>
          <h4 className='text-xl font-bold mb-3'>Step 1: Preparation (15 min before)</h4>
          <ul className='space-y-2 text-gray-800'>
            <li>&#8226; Weigh 8.25g of coffee per bowl (prepare 5 bowls per sample minimum)</li>
            <li>&#8226; Grind each sample immediately before cupping (medium-coarse, ~800 microns)</li>
            <li>&#8226; Arrange bowls on the cupping table with coded sample labels</li>
            <li>&#8226; Heat water to 200°F (93°C) and verify with a thermometer</li>
            <li>&#8226; Set out cupping forms, spoons, spittoons, and rinse water</li>
          </ul>
        </div>

        <div className='bg-white border-2 border-amber-400 p-6 rounded-lg'>
          <h4 className='text-xl font-bold mb-3'>Step 2: Dry Fragrance (0-4 min)</h4>
          <p className='text-gray-800 mb-2'>Immediately after grinding, evaluate dry fragrance. Bring your nose close to the grounds and inhale deeply. Score fragrance intensity and note initial descriptors.</p>
          <div className='bg-amber-50 p-4 rounded-lg mt-2'>
            <strong className='text-amber-800'>Ethiopian Dry Fragrance Benchmarks:</strong>
            <ul className='mt-2 space-y-1 text-sm text-gray-700'>
              <li>&#8226; <strong>Washed Yirgacheffe:</strong> Jasmine, bergamot, lemon zest, black tea</li>
              <li>&#8226; <strong>Natural Sidamo:</strong> Blueberry, strawberry, mixed berry jam, red wine</li>
              <li>&#8226; <strong>Washed Guji:</strong> Peach, apricot, floral, honeyed sweetness</li>
              <li>&#8226; <strong>Natural Guji:</strong> Tropical fruit, mango, pineapple, wine-like ferment</li>
              <li>&#8226; <strong>Natural Harrar:</strong> Dried blueberry, dark chocolate, wild fruit, earthy spice</li>
            </ul>
          </div>
        </div>

        <div className='bg-white border-2 border-amber-400 p-6 rounded-lg'>
          <h4 className='text-xl font-bold mb-3'>Step 3: Wet Aroma &amp; Crust Break (4-8 min)</h4>
          <p className='text-gray-800 mb-2'>Pour 150ml of 93°C water directly over the grounds and start your timer. Let the slurry steep undisturbed for 4 minutes. A crust of grounds will form on the surface.</p>
          <p className='text-gray-800 mb-2'>At exactly 4 minutes, break the crust:</p>
          <ol className='list-decimal list-inside space-y-1 text-sm text-gray-700 ml-4'>
            <li>Position your nose directly above the bowl</li>
            <li>Use a cupping spoon to push the crust from back to front (3 strokes)</li>
            <li>Inhale deeply as the crust breaks to capture the full wet aroma release</li>
            <li>Note aroma intensity, quality, and any off-notes</li>
          </ol>
        </div>

        <div className='bg-white border-2 border-amber-400 p-6 rounded-lg'>
          <h4 className='text-xl font-bold mb-3'>Step 4: Skim and Clean (8-10 min)</h4>
          <p className='text-gray-800'>Use two spoons to skim foam and floating grounds from the surface. Remove all visible particles to ensure clean aspiration without interference. Do not stir the liquid.</p>
        </div>

        <div className='bg-white border-2 border-amber-400 p-6 rounded-lg'>
          <h4 className='text-xl font-bold mb-3'>Step 5: Taste and Evaluate (10-45 min)</h4>
          <p className='text-gray-800 mb-2'>Begin tasting when the coffee reaches approximately 70°C (160°F). This is the temperature window where flavors are most expressive.</p>
          <p className='text-gray-800 mb-2'><strong>Aspiration technique:</strong></p>
          <ol className='list-decimal list-inside space-y-1 text-sm text-gray-700 ml-4'>
            <li>Fill the cupping spoon halfway</li>
            <li>Bring the spoon to your lips</li>
            <li>Slurp forcefully to atomize the coffee across your entire palate</li>
            <li>Hold the coffee in your mouth briefly, noting flavors, mouthfeel, and acidity</li>
            <li>Spit into the spittoon</li>
            <li>Rinse your spoon in clean hot water between samples</li>
          </ol>
          <p className='text-gray-800 mt-3'>Evaluate each cup multiple times as it cools from 70°C to 40°C. Different characteristics emerge at different temperatures: high acidity and floral notes present earlier, sweetness and body become more apparent as the cup cools, and aftertaste quality clarifies at lower temperatures.</p>
        </div>

        <div className='bg-white border-2 border-amber-400 p-6 rounded-lg'>
          <h4 className='text-xl font-bold mb-3'>Step 6: Score and Document</h4>
          <p className='text-gray-800'>Complete your cupping form throughout tasting, scoring each attribute on the 6-10 scale (in 0.25 increments). Calculate the final score. Record detailed descriptive notes for every sample: specific flavors, acidity type, body character, aftertaste quality, and any defects. These notes form the basis for purchasing decisions and future reference.</p>
        </div>
      </div>

      {/* Section 5: Flavor Profiles */}
      <h3 id='flavor-profiles' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        Ethiopian Coffee Flavor Profiles by Region and Process
      </h3>

      <p className='my-4 text-lg leading-relaxed'>
        Ethiopian coffees present a wider flavor spectrum than almost any other origin. Understanding these regional and processing-based profiles helps you set accurate quality expectations and evaluate samples properly. For a deeper comparison of Ethiopia&apos;s major growing regions, see our <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline font-bold'>Yirgacheffe vs. Sidamo vs. Guji comparison</Link>.
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-6'>
        <div className='bg-blue-50 p-6 rounded-lg border border-blue-200'>
          <h4 className='text-xl font-bold mb-3'>Washed Process Profiles</h4>
          <div className='space-y-3 text-sm'>
            <div>
              <strong className='text-blue-800'>Yirgacheffe Washed:</strong>
              <p className='text-gray-700'>High citric and malic acidity, jasmine and bergamot florals, tea-like body, lemon zest finish. The benchmark &ldquo;Ethiopian&rdquo; profile recognized globally.</p>
            </div>
            <div>
              <strong className='text-blue-800'>Sidamo Washed:</strong>
              <p className='text-gray-700'>Balanced stone-fruit acidity (peach, apricot), floral undertones, chocolate base notes, medium body. More approachable than Yirgacheffe.</p>
            </div>
            <div>
              <strong className='text-blue-800'>Guji Washed:</strong>
              <p className='text-gray-700'>Complex acidity with tropical fruit (passion fruit, guava), floral layers, honeyed sweetness, silky body. A rising star among specialty buyers.</p>
            </div>
            <div>
              <strong className='text-blue-800'>Limu Washed:</strong>
              <p className='text-gray-700'>Balanced acidity, wine-like complexity, spice undertones, medium-full body. Less floral than Yirgacheffe, more rounded.</p>
            </div>
            <div>
              <strong className='text-blue-800'>Jimma Washed:</strong>
              <p className='text-gray-700'>Earthy base with mild citrus, herbal notes, heavier body. Valued in commercial blends and traditional markets.</p>
            </div>
          </div>
        </div>

        <div className='bg-blue-50 p-6 rounded-lg border border-blue-200'>
          <h4 className='text-xl font-bold mb-3'>Natural Process Profiles</h4>
          <div className='space-y-3 text-sm'>
            <div>
              <strong className='text-blue-800'>Yirgacheffe Natural:</strong>
              <p className='text-gray-700'>Intense blueberry and strawberry, red wine vinosity, syrupy body, lower acidity than washed. Complex, fruit-forward, and highly aromatic.</p>
            </div>
            <div>
              <strong className='text-blue-800'>Sidamo Natural:</strong>
              <p className='text-gray-700'>Mixed berry jam, chocolate, wine-like sweetness, heavier body. Often more accessible than natural Yirgacheffe for broader markets.</p>
            </div>
            <div>
              <strong className='text-blue-800'>Guji Natural:</strong>
              <p className='text-gray-700'>Tropical fruit intensity (mango, pineapple), fermented fruit complexity, heavy body. Can be extraordinary or polarizing depending on processing control.</p>
            </div>
            <div>
              <strong className='text-blue-800'>Harrar Natural:</strong>
              <p className='text-gray-700'>Wild, winey character, dried blueberry, dark chocolate, medium-heavy body. Ethiopia&apos;s oldest and most traditional natural-process profile.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Anaerobic / Experimental */}
      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='text-xl font-bold mb-3'>Anaerobic and Experimental Processing Profiles</h4>
        <p className='my-2'>
          Ethiopian producers increasingly use <Link href='/insights/anaerobic-ethiopian-coffee-processing-buyers-guide' className='text-amber-700 hover:underline font-bold'>anaerobic fermentation</Link>, carbonic maceration, and extended fermentation techniques. These processes amplify specific flavor compounds, producing coffees with pronounced tropical fruit, cinnamon, clove, or candy-like sweetness.
        </p>
        <p className='my-2'>
          When cupping experimentally processed Ethiopian lots, evaluate fermentation character separately from origin character. Ask: <em>Does the processing enhance or mask the coffee&apos;s terroir?</em> A well-executed anaerobic Guji should still taste like Guji with added complexity, not like a generic fruit bomb. Watch for acetaldehyde-driven boozy notes or vinegar-like acidity that indicate over-fermentation.
        </p>
      </div>

      {/* Natural process caution */}
      <div className='bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg my-6'>
        <h4 className='text-xl font-bold mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='w-6 h-6 text-yellow-700' />
          Natural Process Evaluation Caution
        </h4>
        <p className='text-gray-800'>
          Natural-processed Ethiopian coffees walk a fine line between &ldquo;complex fruit-forward&rdquo; and &ldquo;over-fermented.&rdquo; Pay close attention to whether fruit notes are clean and defined or muddled and boozy. <strong>Desirable:</strong> distinct fruit character, wine-like complexity, clean finish. <strong>Defective:</strong> dirty ferment, rotten fruit, medicinal or harsh alcohol notes, muddy finish. For how processing methods affect these outcomes, see our <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline font-bold'>washed vs. natural processing comparison</Link>.
        </p>
      </div>

      {/* Section 6: Ethiopian Grading System (NEW) */}
      <h3 id='grading-system' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineDocumentMagnifyingGlass className='w-8 h-8 text-amber-600' />
        How Ethiopian Coffee Grading Relates to Cupping
      </h3>

      <p className='my-4 text-lg leading-relaxed'>
        Ethiopia&apos;s coffee grading system, managed by the Ethiopian Coffee and Tea Authority (ECTA) and historically through the Ethiopia Commodity Exchange (ECX), combines physical evaluation (40% of total score) with cup quality assessment (60% of total score). Understanding this system helps importers connect the grade printed on an export contract to what they should expect in the cup.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Grade</th>
              <th className='p-3 text-left'>Total Score</th>
              <th className='p-3 text-left'>SCA Cupping Equivalent</th>
              <th className='p-3 text-left'>Typical Use</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='p-3 font-bold'>Grade 1</td>
              <td className='p-3'>91-100</td>
              <td className='p-3'>88-95+ (Specialty Premium)</td>
              <td className='p-3'>High-end specialty, competition lots, micro-lots</td>
            </tr>
            <tr className='border-b bg-gray-50'>
              <td className='p-3 font-bold'>Grade 2</td>
              <td className='p-3'>81-90</td>
              <td className='p-3'>84-88 (Specialty)</td>
              <td className='p-3'>Specialty single-origin, premium blends</td>
            </tr>
            <tr className='border-b'>
              <td className='p-3 font-bold'>Grade 3</td>
              <td className='p-3'>71-80</td>
              <td className='p-3'>80-84 (Specialty Entry)</td>
              <td className='p-3'>Specialty blends, high-commercial</td>
            </tr>
            <tr className='border-b bg-gray-50'>
              <td className='p-3 font-bold'>Grade 4</td>
              <td className='p-3'>63-70</td>
              <td className='p-3'>76-80 (Below Specialty)</td>
              <td className='p-3'>Commercial grade, mainstream blends</td>
            </tr>
            <tr className='border-b'>
              <td className='p-3 font-bold'>Grade 5</td>
              <td className='p-3'>50-62</td>
              <td className='p-3'>Below 76</td>
              <td className='p-3'>Commercial, institutional, domestic market</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4 text-lg leading-relaxed'>
        The physical evaluation component assesses defect count, bean size, shape, color, and odor. The cup evaluation component mirrors SCA attributes: cup cleanness, acidity, body, and flavor. A Grade 1 washed Yirgacheffe has passed both rigorous physical screening and scored above 91 on the ECTA scale, which typically correlates with 88+ on the SCA cupping form. For full details on how the grading system works in practice, see our <Link href='/coffee-grading-ethiopia' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee grading guide</Link>.
      </p>

      <div className='bg-amber-50 border border-amber-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-2'>Practical Tip: Grade vs. Cupping Score</h4>
        <p>
          Ethiopian grades and SCA scores do not map 1:1. A coffee graded as ECTA Grade 2 might cup at 85 or 89 on your table depending on sample freshness, roast quality, and water chemistry. Always cup samples yourself rather than purchasing on grade alone. The grade sets expectations; your cupping confirms them.
        </p>
      </div>

      {/* Section 7: Common Defects */}
      <h3 id='defects' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineXCircle className='w-8 h-8 text-amber-600' />
        Identifying Common Defects in Ethiopian Coffee
      </h3>

      <p className='my-4 text-lg leading-relaxed'>
        Recognizing defects during cupping is essential for quality control and contract verification. Ethiopian coffees can exhibit specific defects related to processing, drying conditions, or storage. Here are the most common issues, their causes, and how to detect them. For more on physical defect classification and <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline font-bold'>green coffee quality control</Link>, see our dedicated guide.
      </p>

      <div className='space-y-4 my-6'>
        <div className='bg-gray-50 border-l-4 border-red-500 p-5 rounded-r-lg'>
          <h4 className='text-lg font-bold mb-2'>Ferment / Sour</h4>
          <p className='text-sm text-gray-800'><strong>Cause:</strong> Over-fermentation during washed processing or uncontrolled fermentation in natural drying.</p>
          <p className='text-sm text-gray-800'><strong>In Cup:</strong> Vinegary, sharp acetic acid, rotten fruit, unpleasant sourness that persists in the aftertaste.</p>
          <p className='text-sm text-gray-800'><strong>Detection:</strong> Distinct from clean acidity. Ferment is harsh, lingering, and unbalanced. Often evident at the crust break.</p>
        </div>

        <div className='bg-gray-50 border-l-4 border-red-500 p-5 rounded-r-lg'>
          <h4 className='text-lg font-bold mb-2'>Phenolic / Medicinal</h4>
          <p className='text-sm text-gray-800'><strong>Cause:</strong> Mold contamination, improper drying, moisture re-absorption, or chemical contamination during storage.</p>
          <p className='text-sm text-gray-800'><strong>In Cup:</strong> Band-aid, iodine, chemical, or pharmaceutical character that overpowers all other flavors.</p>
          <p className='text-sm text-gray-800'><strong>Detection:</strong> Unmistakable at the dry fragrance stage. Phenolic taint dominates and cannot be scored past.</p>
        </div>

        <div className='bg-gray-50 border-l-4 border-red-500 p-5 rounded-r-lg'>
          <h4 className='text-lg font-bold mb-2'>Earthy / Musty</h4>
          <p className='text-sm text-gray-800'><strong>Cause:</strong> Mold development during drying on raised beds or ground contact, poor warehouse storage conditions.</p>
          <p className='text-sm text-gray-800'><strong>In Cup:</strong> Moldy, dusty, basement-like, or dirty flavors. Coffee lacks clarity and brightness.</p>
          <p className='text-sm text-gray-800'><strong>Detection:</strong> Musty aroma is present at dry fragrance. Cup tastes stale, flat, and lacks the vibrancy expected from Ethiopian coffee.</p>
        </div>

        <div className='bg-gray-50 border-l-4 border-red-500 p-5 rounded-r-lg'>
          <h4 className='text-lg font-bold mb-2'>Baggy / Jute</h4>
          <p className='text-sm text-gray-800'><strong>Cause:</strong> Extended storage in low-quality jute bags or poor warehouse ventilation and humidity control.</p>
          <p className='text-sm text-gray-800'><strong>In Cup:</strong> Burlap, canvas, or hessian-like flavors that mask origin character entirely.</p>
          <p className='text-sm text-gray-800'><strong>Detection:</strong> Jute aroma in fragrance; flat cup with fabric-like undertones. See our <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline font-bold'>green coffee storage guide</Link> for prevention.</p>
        </div>

        <div className='bg-gray-50 border-l-4 border-red-500 p-5 rounded-r-lg'>
          <h4 className='text-lg font-bold mb-2'>Faded / Past Crop</h4>
          <p className='text-sm text-gray-800'><strong>Cause:</strong> Old coffee that has lost vibrancy due to age, poor storage, or delayed shipment.</p>
          <p className='text-sm text-gray-800'><strong>In Cup:</strong> Muted acidity, subdued aromatics, woody or papery notes, dull finish.</p>
          <p className='text-sm text-gray-800'><strong>Detection:</strong> Ethiopian characteristics (floral, fruit) are recognizable but faint and lacking intensity. Fading is especially noticeable in lot comparisons against fresh-crop samples.</p>
        </div>

        <div className='bg-gray-50 border-l-4 border-red-500 p-5 rounded-r-lg'>
          <h4 className='text-lg font-bold mb-2'>Quaker</h4>
          <p className='text-sm text-gray-800'><strong>Cause:</strong> Immature or underdeveloped cherries that fail to roast properly and remain pale.</p>
          <p className='text-sm text-gray-800'><strong>In Cup:</strong> Peanut-like, raw, grassy, or astringent notes in an otherwise clean cup.</p>
          <p className='text-sm text-gray-800'><strong>Detection:</strong> Pale beans visible in the roasted sample. One or two quakers typically affect uniformity but not overall quality; many quakers indicate poor sorting at the <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='text-amber-700 hover:underline font-bold'>washing station</Link> or dry mill.</p>
        </div>
      </div>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='text-xl font-bold mb-3'>Defect Severity and Scoring Impact</h4>
        <p className='text-gray-800 mb-2'>When defects appear, adjust clean cup, uniformity, and sweetness scores accordingly:</p>
        <ul className='space-y-1 text-sm text-gray-700'>
          <li>&#8226; <strong>Minor (1 cup affected):</strong> Deduct 2 points from the affected attribute</li>
          <li>&#8226; <strong>Moderate (2-3 cups):</strong> Deduct 4-6 points across affected attributes</li>
          <li>&#8226; <strong>Major (all 5 cups):</strong> Coffee fails specialty threshold (below 80 points total)</li>
        </ul>
      </div>

      {/* Section 8: Pre-Shipment vs. Arrival (NEW) */}
      <h3 id='pss-arrival' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineTruck className='w-8 h-8 text-amber-600' />
        Pre-Shipment vs. Arrival Sample Evaluation
      </h3>

      <p className='my-4 text-lg leading-relaxed'>
        The evaluation process does not end when you approve a pre-shipment sample (PSS). Arrival sample comparison is a critical quality gate that protects your investment and your relationship with customers. Here is a practical workflow for comparing PSS and arrival lots.
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-6'>
        <div className='bg-amber-50 p-6 rounded-lg border border-amber-200'>
          <h4 className='text-lg font-bold mb-3'>Pre-Shipment Sample (PSS)</h4>
          <ul className='space-y-2 text-sm text-gray-800'>
            <li>&#8226; Request 300-500g minimum per lot for multiple cupping sessions</li>
            <li>&#8226; Sample roast and cup within 1-2 days of receiving</li>
            <li>&#8226; Store a sealed 100g reference portion at room temperature for later comparison</li>
            <li>&#8226; Document cupping scores, flavor notes, and any concerns</li>
            <li>&#8226; Photograph green beans for color and size reference</li>
          </ul>
        </div>

        <div className='bg-amber-50 p-6 rounded-lg border border-amber-200'>
          <h4 className='text-lg font-bold mb-3'>Arrival Sample Comparison</h4>
          <ul className='space-y-2 text-sm text-gray-800'>
            <li>&#8226; Cup arrival sample alongside retained PSS reference (same roast profile, same day)</li>
            <li>&#8226; Compare green bean appearance: color, moisture content, defect count</li>
            <li>&#8226; Score both using identical protocol and water source</li>
            <li>&#8226; Document variance in each attribute (fragrance, acidity, body, etc.)</li>
            <li>&#8226; Assess whether overall quality meets purchase expectations</li>
          </ul>
        </div>
      </div>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='text-xl font-bold mb-3'>Acceptable Variance Thresholds</h4>
        <p className='my-2'>
          Minor variation between PSS and arrival is normal due to transit conditions and aging. Industry-accepted thresholds:
        </p>
        <ul className='space-y-1 text-sm text-gray-700'>
          <li>&#8226; <strong>Total score:</strong> Within 1.5 points of PSS score is acceptable</li>
          <li>&#8226; <strong>Flavor descriptors:</strong> Core descriptors should match; intensity may vary slightly</li>
          <li>&#8226; <strong>Clean cup:</strong> Must remain clean (any new defects are a red flag)</li>
          <li>&#8226; <strong>Moisture content:</strong> Within 0.5% of PSS reading (target 10-12% for export)</li>
        </ul>
        <p className='my-2 text-sm font-semibold'>
          If the arrival sample deviates beyond these thresholds, contact your exporter immediately. Photograph evidence and share cupping scores. A reliable origin partner will work to resolve discrepancies. For more on the export quality chain, see our <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee export process guide</Link>.
        </p>
      </div>

      {/* Section 9: Purchasing Decisions */}
      <h3 id='purchasing' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        Using Cupping Results for Purchasing Decisions
      </h3>

      <p className='my-4 text-lg leading-relaxed'>
        Cupping is not just about assigning a score. It is about determining whether a specific Ethiopian lot aligns with your business needs, your roasting style, and your customers&apos; expectations. Here is how to translate scores and notes into purchasing decisions. Once you select a lot, our <Link href='/insights/best-coffee-guide-french-press-pour-over-scales' className='text-amber-700 hover:underline font-bold'>brew profiles guide</Link> covers extraction parameters by region.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='text-xl font-bold mb-3'>Five Questions After Every Cupping Session</h4>
        <div className='space-y-3 text-gray-800'>
          <div>
            <strong>1. Does the cup match the exporter&apos;s description?</strong>
            <p className='text-sm'>If described as &ldquo;floral Yirgacheffe&rdquo; yet it cups earthy and muted, there is a disconnect. Request clarification or reject.</p>
          </div>
          <div>
            <strong>2. Is the quality consistent across all 5 cups?</strong>
            <p className='text-sm'>Uniformity failures suggest poor lot blending, inconsistent sorting, or contamination. High-value lots must show near-perfect uniformity.</p>
          </div>
          <div>
            <strong>3. How will this coffee perform in your roasting and application?</strong>
            <p className='text-sm'>Consider your roast style. A delicate washed Yirgacheffe will not survive dark roasts or heavy espresso blends. Match lot character to application.</p>
          </div>
          <div>
            <strong>4. What is the value at the quoted price?</strong>
            <p className='text-sm'>An 86-point coffee at $4.50/lb FOB is strong value. The same score at $8.50/lb requires scrutiny. Use our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline font-bold'>FOB pricing guide</Link> to benchmark.</p>
          </div>
          <div>
            <strong>5. Are there any deal-breaker defects?</strong>
            <p className='text-sm'>Phenolic, ferment, or musty taints are non-negotiable rejections. Any clean cup failure at the PSS stage means walking away.</p>
          </div>
        </div>
      </div>

      <div className='grid md:grid-cols-3 gap-4 my-6'>
        <div className='bg-green-50 p-5 rounded-lg border border-green-300'>
          <h4 className='font-bold text-center mb-2'>BUY</h4>
          <ul className='space-y-1 text-xs text-gray-700'>
            <li>&#10003; Score meets or exceeds your target</li>
            <li>&#10003; Perfect clean cup (10/10)</li>
            <li>&#10003; Excellent uniformity across cups</li>
            <li>&#10003; Cup matches exporter description</li>
            <li>&#10003; Strong overall impression</li>
            <li>&#10003; Fair price for the quality level</li>
          </ul>
        </div>

        <div className='bg-yellow-50 p-5 rounded-lg border border-yellow-300'>
          <h4 className='font-bold text-center mb-2'>NEGOTIATE</h4>
          <ul className='space-y-1 text-xs text-gray-700'>
            <li>&#9888; Score 1-2 points below target</li>
            <li>&#9888; Minor uniformity variance</li>
            <li>&#9888; Slight description mismatch</li>
            <li>&#9888; Good but not exceptional</li>
            <li>&#9888; Price above market for the score</li>
            <li>&#9888; Request better lot or adjusted price</li>
          </ul>
        </div>

        <div className='bg-red-50 p-5 rounded-lg border border-red-300'>
          <h4 className='font-bold text-center mb-2'>REJECT</h4>
          <ul className='space-y-1 text-xs text-gray-700'>
            <li>&#10007; Score below 80 (not specialty grade)</li>
            <li>&#10007; Clean cup defects in any cup</li>
            <li>&#10007; Poor uniformity across the set</li>
            <li>&#10007; Phenolic, ferment, or musty taints</li>
            <li>&#10007; Major description mismatch</li>
            <li>&#10007; Past-crop or heavily faded character</li>
          </ul>
        </div>
      </div>

      {/* Section 10: Practical Tips */}
      <h3 id='tips' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineChartBar className='w-8 h-8 text-amber-600' />
        Practical Tips and Calibration
      </h3>

      <div className='grid md:grid-cols-2 gap-6 my-6'>
        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h4 className='text-lg font-bold mb-3'>Preparation Best Practices</h4>
          <ul className='space-y-2 text-sm text-gray-700'>
            <li>&#10003; Cup blindly whenever possible to eliminate bias</li>
            <li>&#10003; Schedule cupping sessions in the morning when your palate is freshest</li>
            <li>&#10003; Avoid strong flavors (coffee, spice, mint) for 30 minutes before cupping</li>
            <li>&#10003; Calibrate with colleagues using the same samples regularly</li>
            <li>&#10003; Use a consistent water source for every session</li>
            <li>&#10003; Clean all equipment thoroughly between sessions</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h4 className='text-lg font-bold mb-3'>Evaluation Techniques</h4>
          <ul className='space-y-2 text-sm text-gray-700'>
            <li>&#10003; Cup each sample at least 3 times as it cools through the temperature range</li>
            <li>&#10003; Record notes immediately; do not rely on memory</li>
            <li>&#10003; Compare similar coffees side by side (all washed Yirgacheffe together)</li>
            <li>&#10003; Cup PSS alongside arrival samples for direct comparison</li>
            <li>&#10003; Evaluate uniformity and clean cup first, then move to qualitative attributes</li>
            <li>&#10003; Reserve the overall score until your final pass through all cups</li>
          </ul>
        </div>
      </div>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='text-xl font-bold mb-3'>Request Adequate Sample Sizes</h4>
        <p className='text-gray-800'>
          Always request a minimum of 300-500g per lot from your Ethiopian exporter. This allows multiple cupping sessions, the ability to adjust roast profiles if the first attempt is questionable, and a retained reference for arrival comparison. Many quality issues become apparent only after multiple evaluations or as samples age over several days.
        </p>
      </div>

      {/* CTA Block */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Premium Ethiopian Coffee with Full Cupping Transparency</h4>
        <p className='my-2'>
          At <span className='font-bold'>Ethio Coffee Import and Export PLC</span>, every lot ships with detailed cupping notes, SCA scores, and pre-shipment samples. We cup all coffees using SCA protocol at origin before offering them, so you can make informed decisions with confidence.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Current Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Request Samples</Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>How to Order</Link>
        </div>
      </div>

      {/* FAQ Section */}
      <section className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900'>Frequently Asked Questions About Cupping Ethiopian Coffee</h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the SCA cupping protocol for Ethiopian coffee?</h4>
            <p className='text-sm text-gray-600'>
              The SCA protocol uses 8.25 grams of coffee per 150ml of water at 93°C. After a 4-minute steep, cuppers break the crust and evaluate ten attributes: fragrance/aroma, flavor, aftertaste, acidity, body, balance, uniformity, clean cup, sweetness, and overall impression on a 100-point scale.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What cupping score qualifies Ethiopian coffee as specialty grade?</h4>
            <p className='text-sm text-gray-600'>
              Coffee scoring 80 points or above on the SCA 100-point scale is specialty grade. Ethiopian coffees from Yirgacheffe, Guji, and Sidamo frequently score 85 or higher, with exceptional lots from top washing stations and cooperatives scoring 90 or above.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What are the most common defects in Ethiopian coffee samples?</h4>
            <p className='text-sm text-gray-600'>
              The most common defects include ferment or overripe fruit notes from processing problems, musty or earthy flavors from improper drying or storage, phenolic or medicinal taints from mold contamination, and baggy character from prolonged storage in poor conditions. Each can be detected at specific stages of the cupping process.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How do you evaluate washed versus natural Ethiopian coffee during cupping?</h4>
            <p className='text-sm text-gray-600'>
              Washed coffees are evaluated for clarity, brightness, clean floral or citrus notes, and tea-like body. Natural-processed coffees are assessed for fruit intensity, body weight, and sweetness, with expectations of heavier mouthfeel and berry or wine-like complexity. The key is calibrating your expectations to the processing method before scoring.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the difference between SCA cupping and the Coffee Value Assessment?</h4>
            <p className='text-sm text-gray-600'>
              Traditional SCA cupping produces a single quality score on a 100-point scale. The new Coffee Value Assessment (CVA) separates descriptive profiling from quality scoring, providing buyers with detailed flavor descriptors alongside intrinsic and extrinsic value assessments. Both are valid for Ethiopian coffee evaluation.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How should pre-shipment and arrival samples compare?</h4>
            <p className='text-sm text-gray-600'>
              Arrival samples should score within 1.5 points of the pre-shipment sample, with core flavor descriptors intact and no new defects. Minor intensity variation is normal due to transit conditions. Cup both samples side by side on the same day using identical water and roast profile for the most accurate comparison.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How many cups should you prepare when evaluating Ethiopian coffee samples?</h4>
            <p className='text-sm text-gray-600'>
              SCA protocol requires a minimum of five cups per sample to assess uniformity and consistency. This allows cuppers to identify defective individual cups and evaluate the lot&apos;s overall quality reliably. For high-value lots or final purchase decisions, prepare additional cups for added confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality &amp; Evaluation</h4>
            <ul className='space-y-1 text-sm'>
              <li>&#8226; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality Control &amp; Grading</Link></li>
              <li>&#8226; <Link href='/insights/new-sca-coffee-value-assessment' className='text-amber-700 hover:underline'>SCA Coffee Value Assessment (CVA)</Link></li>
              <li>&#8226; <Link href='/coffee-grading-ethiopia' className='text-amber-700 hover:underline'>Ethiopian Coffee Grading System</Link></li>
              <li>&#8226; <Link href='/insights/best-cupping-school' className='text-amber-700 hover:underline'>Best Coffee Cupping Schools</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Processing &amp; Roasting</h4>
            <ul className='space-y-1 text-sm'>
              <li>&#8226; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs. Natural Ethiopian Processing</Link></li>
              <li>&#8226; <Link href='/insights/anaerobic-ethiopian-coffee-processing-buyers-guide' className='text-amber-700 hover:underline'>Anaerobic Ethiopian Coffee Processing</Link></li>
              <li>&#8226; <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='text-amber-700 hover:underline'>Roasting Ethiopian Coffee Beans</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origins &amp; Sourcing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&#8226; <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Coffee Origins</Link></li>
              <li>&#8226; <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs. Sidamo vs. Guji</Link></li>
              <li>&#8226; <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Ethiopian Heirloom Coffee Varieties</Link></li>
              <li>&#8226; <Link href='/insights/micro-lot-ethiopian-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Micro-Lot Sourcing Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Trade &amp; Logistics</h4>
            <ul className='space-y-1 text-sm'>
              <li>&#8226; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process</Link></li>
              <li>&#8226; <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Washing Stations Guide</Link></li>
              <li>&#8226; <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline'>Green Coffee Storage &amp; Shelf Life</Link></li>
              <li>&#8226; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> A practical guide to cupping and evaluating Ethiopian coffee samples, covering SCA protocol, CVA framework, Ethiopian flavor profiles, defect detection, pre-shipment comparison, and scoring methodology. Written by Ethio Coffee Import and Export PLC.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> {' · '}
          <Link href='/ethiopian-coffee-exporter' className='underline'>Export Services</Link> {' · '}
          <Link href='/about' className='underline'>About</Link> {' · '}
          <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

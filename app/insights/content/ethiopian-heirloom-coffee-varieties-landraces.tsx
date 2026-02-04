import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { 
  HiOutlineCalendarDays, 
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck,
  HiOutlineCheckCircle,
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineBeaker,
  HiOutlineSparkles,
  HiOutlineAcademicCap,
  HiOutlineQuestionMarkCircle,
  HiOutlineExclamationTriangle,
  HiOutlineCube,
  HiOutlineMapPin,
  HiOutlineChartBar
} from 'react-icons/hi2'
import { GiCoffeeBeans, GiDna2, GiForestCamp, GiTreeBranch } from 'react-icons/gi'
import { FaLeaf, FaSeedling, FaDna, FaTree, FaUsers, FaDollarSign, FaUniversity } from 'react-icons/fa'
import { TbTemperature, TbPlant2 } from 'react-icons/tb'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopianHeirloomCoffeeVarieties({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        The complete guide to Ethiopian heirloom coffee varieties and landraces: understanding the genetic diversity, regional variations, flavor profiles, and why "Ethiopian Heirloom" is both accurate and misleading. Essential reading for specialty coffee buyers, roasters, and anyone sourcing Ethiopian green coffee.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Ethiopian heirloom varieties represent the world's most genetically diverse coffee population.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian heirloom coffee varieties landraces genetic diversity'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>
      <p className='my-2 text-gray-600 font-inconsolata'>
        <HiOutlineCalendarDays className='inline mr-2' />
        {date}
      </p>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Coffee Genetics / Ethiopian Coffee / Sourcing Guide</span>
      </div>

      {/* INTRODUCTION */}
      <p className='my-4'>
        When you purchase Ethiopian green coffee, the bag often lists the variety as <span className='font-bold'>"Ethiopian Heirloom"</span> or simply <span className='font-bold'>"Heirloom."</span> But what does this term actually mean? Is it a specific variety? A family of varieties? Or something else entirely?
      </p>

      <p className='my-4'>
        The term <span className='font-bold'>"Ethiopian Heirloom"</span> is used to describe the <span className='font-bold'>indigenous landrace coffee varieties</span> native to Ethiopia – the only place in the world where <a href="https://en.wikipedia.org/wiki/Coffea_arabica" target="_blank" rel="noopener noreferrer" className='text-amber-700 hover:underline'>Arabica coffee</a> grows wild and has evolved naturally for thousands of years. These varieties represent the <span className='font-bold'>most genetically diverse coffee population on Earth</span>, encompassing thousands of distinct genetic variations that can differ dramatically from farm to farm, region to region, and forest to forest.
      </p>

      <p className='my-4'>
        Understanding Ethiopian heirloom varieties is essential for anyone sourcing, buying, or roasting Ethiopian coffee. This diversity is both Ethiopia's greatest strength and its most confusing aspect for international buyers accustomed to named varieties like Bourbon, Typica, Caturra, or Gesha.
      </p>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Key Insight:</span> Ethiopia is home to an estimated 10,000-15,000 distinct coffee genotypes (genetic variations). By comparison, the rest of the world's coffee-growing regions combined work with fewer than 100 commonly cultivated varieties. This genetic treasure represents coffee's past, present, and future.</span>
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href="#what-is-heirloom" className='text-amber-700 hover:underline'>1. What Does "Ethiopian Heirloom" Actually Mean?</a></li>
          <li><a href="#landrace-definition" className='text-amber-700 hover:underline'>2. Landrace vs. Cultivar: Understanding the Difference</a></li>
          <li><a href="#genetic-diversity" className='text-amber-700 hover:underline'>3. Ethiopian Coffee's Unparalleled Genetic Diversity</a></li>
          <li><a href="#why-no-named-varieties" className='text-amber-700 hover:underline'>4. Why Ethiopian Coffee Lacks Named Varieties</a></li>
          <li><a href="#regional-variations" className='text-amber-700 hover:underline'>5. Regional Heirloom Variations: How Geography Shapes Genetics</a></li>
          <li><a href="#common-identifiers" className='text-amber-700 hover:underline'>6. Common Ethiopian Variety Identifiers & What They Mean</a></li>
          <li><a href="#jarc-varieties" className='text-amber-700 hover:underline'>7. JARC Varieties: Ethiopia's Named Coffee Selections</a></li>
          <li><a href="#gesha-origin" className='text-amber-700 hover:underline'>8. Gesha/Geisha: Ethiopia's Most Famous Export</a></li>
          <li><a href="#flavor-implications" className='text-amber-700 hover:underline'>9. How Heirloom Genetics Influence Flavor</a></li>
          <li><a href="#sourcing-heirloom" className='text-amber-700 hover:underline'>10. Sourcing Ethiopian Heirloom Coffee: What to Ask</a></li>
          <li><a href="#future-research" className='text-amber-700 hover:underline'>11. The Future: DNA Analysis & Variety Identification</a></li>
          <li><a href="#conservation" className='text-amber-700 hover:underline'>12. Genetic Conservation & Ethiopia's Coffee Heritage</a></li>
        </ol>
      </div>

      {/* SECTION 1: WHAT IS HEIRLOOM */}
      <h3 id="what-is-heirloom" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineQuestionMarkCircle className='text-amber-600' />
        1. What Does "Ethiopian Heirloom" Actually Mean?
      </h3>

      <p className='my-4'>
        The term <span className='font-bold'>"Ethiopian Heirloom"</span> is industry shorthand used to describe the indigenous, naturally occurring coffee varieties native to Ethiopia. It's a catch-all term that acknowledges:
      </p>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <ul className='space-y-3 text-sm'>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Indigenous origin:</span> These varieties evolved naturally in Ethiopia over millennia, not imported or bred elsewhere</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Uncharacterized diversity:</span> The specific genetic makeup has not been fully cataloged or DNA-sequenced</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Mixed populations:</span> Most farms grow multiple genetically distinct varieties side-by-side</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Traditional propagation:</span> Varieties perpetuated through seed selection by farmers, not formal breeding programs</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Regional variation:</span> The genetic population differs significantly between regions and even between neighboring farms</li>
        </ul>
      </div>

      <p className='my-4'>
        When a coffee bag says <span className='font-bold'>"Ethiopian Heirloom,"</span> it's essentially saying: <span className='italic'>"This coffee comes from the indigenous, genetically diverse landrace varieties grown in Ethiopia, which we have not individually identified or DNA-tested."</span>
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineExclamationTriangle className='text-amber-600' />
          Why "Heirloom" Can Be Misleading
        </p>
        <p className='text-sm'>
          In agriculture, <span className='font-bold'>"heirloom"</span> typically refers to old, open-pollinated varieties that have been preserved unchanged for generations (like heirloom tomatoes). Ethiopian coffee varieties <span className='font-bold'>are not preserved unchanged</span> – they continue to cross-pollinate, mutate, and evolve naturally. A more accurate term would be <span className='font-bold'>"landrace"</span> or <span className='font-bold'>"indigenous varieties,"</span> but "Ethiopian Heirloom" has become the industry-standard terminology.
        </p>
      </div>

      {/* SECTION 2: LANDRACE VS CULTIVAR */}
      <h3 id="landrace-definition" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <FaDna className='text-green-600' />
        2. Landrace vs. Cultivar: Understanding the Difference
      </h3>

      <p className='my-4'>
        To understand Ethiopian heirloom varieties, you need to understand the difference between <span className='font-bold'>landraces</span> and <span className='font-bold'>cultivars</span>:
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-8'>
        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <GiForestCamp className='text-green-600' />
            Landrace Varieties
          </h4>
          <p className='text-sm mb-3 italic'>What Ethiopian coffee is:</p>
          <ul className='space-y-2 text-sm'>
            <li>• Naturally evolved over thousands of years</li>
            <li>• Genetically heterogeneous (diverse)</li>
            <li>• Adapted to specific local environments</li>
            <li>• Propagated through farmer seed selection</li>
            <li>• Contains multiple genetic variations</li>
            <li>• Continuously evolving through natural selection</li>
            <li>• Highly variable plant-to-plant characteristics</li>
            <li>• Not formally named or registered</li>
          </ul>
        </div>

        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineBeaker className='text-blue-600' />
            Cultivars (Cultivated Varieties)
          </h4>
          <p className='text-sm mb-3 italic'>What most global coffee is:</p>
          <ul className='space-y-2 text-sm'>
            <li>• Selected and bred by humans</li>
            <li>• Genetically homogeneous (uniform)</li>
            <li>• Deliberately propagated for specific traits</li>
            <li>• Clonally reproduced or controlled seed lines</li>
            <li>• Single genetic identity</li>
            <li>• Stable and predictable characteristics</li>
            <li>• Uniform plant-to-plant appearance</li>
            <li>• Formally named (e.g., Bourbon, Caturra, SL28)</li>
          </ul>
        </div>
      </div>

      <p className='my-4'>
        <span className='font-bold'>Ethiopian heirloom varieties are landraces,</span> not cultivars. This is why they're so difficult to categorize, name, or describe with the precision buyers accustomed to named cultivars might expect.
      </p>

      {/* SECTION 3: GENETIC DIVERSITY */}
      <h3 id="genetic-diversity" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <GiDna2 className='text-amber-600' />
        3. Ethiopian Coffee's Unparalleled Genetic Diversity
      </h3>

      <p className='my-4'>
        Ethiopia is the <span className='font-bold'>center of origin</span> for Coffea arabica. Coffee evolved here over hundreds of thousands of years, and Ethiopia remains the only place where wild Arabica populations still exist in natural forest ecosystems.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>The Numbers Behind Ethiopian Genetic Diversity</h4>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <table className='w-full text-sm'>
          <thead>
            <tr className='border-b-2 border-gray-300'>
              <th className='text-left py-2'>Metric</th>
              <th className='text-left py-2'>Ethiopia</th>
              <th className='text-left py-2'>Rest of World</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='py-2'>Estimated distinct genotypes</td>
              <td className='py-2 font-bold text-green-700'>10,000-15,000+</td>
              <td className='py-2'>&lt;100 commonly cultivated</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Genetic diversity within populations</td>
              <td className='py-2 font-bold text-green-700'>High - heterogeneous</td>
              <td className='py-2'>Low - homogeneous</td>
            </tr>
            <tr className='border-b'>
              <td className='py-2'>Wild coffee populations</td>
              <td className='py-2 font-bold text-green-700'>Yes - actively evolving</td>
              <td className='py-2'>No wild Arabica</td>
            </tr>
            <tr>
              <td className='py-2'>Genetic base for global coffee</td>
              <td className='py-2 font-bold text-green-700'>All Arabica traces to Ethiopia</td>
              <td className='py-2'>Narrow genetic bottleneck</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>The Global Coffee Genetic Bottleneck</h4>

      <p className='my-4'>
        Here's the remarkable story of coffee genetics:
      </p>

      <div className='space-y-4 my-6'>
        <div className='border-l-4 border-green-500 pl-4'>
          <h5 className='font-bold'>Ethiopian Origin (500,000+ years ago)</h5>
          <p className='text-sm'>Arabica coffee evolved in the highlands of southwestern Ethiopia through natural cross-pollination between Coffea canephora (Robusta) and Coffea eugenioides. Thousands of distinct populations developed across Ethiopian forests.</p>
        </div>

        <div className='border-l-4 border-amber-500 pl-4'>
          <h5 className='font-bold'>Yemen Export (15th-17th century)</h5>
          <p className='text-sm'>A small number of Ethiopian coffee seeds/plants were taken to Yemen, then to India, Java, and eventually the Americas. This created a <span className='font-bold'>genetic bottleneck</span> – the entire global coffee industry descended from a tiny fraction of Ethiopian genetic diversity.</p>
        </div>

        <div className='border-l-4 border-blue-500 pl-4'>
          <h5 className='font-bold'>Typica & Bourbon Lines</h5>
          <p className='text-sm'>Most coffee grown outside Ethiopia descends from two founding populations: <span className='font-bold'>Typica</span> (introduced to the Americas via Java) and <span className='font-bold'>Bourbon</span> (introduced to Réunion Island, formerly Bourbon). These represent an extremely narrow genetic base compared to Ethiopian diversity.</p>
        </div>

        <div className='border-l-4 border-purple-500 pl-4'>
          <h5 className='font-bold'>Modern Breeding Programs</h5>
          <p className='text-sm'>Recognizing the genetic bottleneck, modern breeding programs have returned to Ethiopia to collect diverse germplasm for disease resistance, climate adaptation, and quality improvement. Ethiopia remains the genetic reservoir for coffee's future.</p>
        </div>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'>
          <span className='font-bold'>Why This Matters:</span> Ethiopian heirloom varieties possess genetic traits that don't exist anywhere else in the coffee world – disease resistance, drought tolerance, unique flavor compounds, and adaptation potential crucial for coffee's survival in a changing climate. This diversity is irreplaceable.
        </p>
      </div>

      {/* SECTION 4: WHY NO NAMED VARIETIES */}
      <h3 id="why-no-named-varieties" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineQuestionMarkCircle className='text-amber-600' />
        4. Why Ethiopian Coffee Lacks Named Varieties
      </h3>

      <p className='my-4'>
        If Ethiopian coffee is so genetically diverse, why don't we have specific variety names like we do for coffee from Kenya (SL28, SL34), Latin America (Bourbon, Caturra, Catuai), or other origins?
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>The Challenges of Naming Ethiopian Varieties</h4>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <ol className='space-y-3 text-sm list-decimal ml-5'>
          <li>
            <span className='font-bold'>Sheer Volume:</span> With 10,000-15,000 distinct genotypes, systematically naming and cataloging each variety is an enormous undertaking that has never been completed
          </li>
          <li>
            <span className='font-bold'>Mixed Populations:</span> Ethiopian smallholder farms (average 0.5 hectares) grow multiple varieties side-by-side in the same plot, making variety-specific identification impractical
          </li>
          <li>
            <span className='font-bold'>Morphological Similarity:</span> Many Ethiopian varieties look similar to the naked eye despite genetic differences, requiring DNA analysis for accurate identification
          </li>
          <li>
            <span className='font-bold'>Continuous Evolution:</span> Natural cross-pollination means the genetic composition is constantly changing, unlike clonally-propagated cultivars
          </li>
          <li>
            <span className='font-bold'>Traditional Farming:</span> Ethiopian farmers traditionally haven't selected or propagated specific varieties with precision – they work with the natural population on their land
          </li>
          <li>
            <span className='font-bold'>Processing & Trade:</span> Coffee from multiple farms (and thus multiple varieties) is processed together, making single-variety traceability difficult
          </li>
          <li>
            <span className='font-bold'>Limited Research Resources:</span> Comprehensive genetic mapping requires significant research funding and laboratory capacity that has historically been limited
          </li>
        </ol>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>The Practical Reality</h4>

      <p className='my-4'>
        When you purchase Ethiopian green coffee, you're almost always buying a <span className='font-bold'>blend of multiple genetic varieties</span> from the same region. This isn't a quality issue – it's simply the nature of Ethiopian coffee production. In fact, many buyers and roasters appreciate this complexity as it contributes to the layered, intricate flavor profiles Ethiopian coffee is famous for.
      </p>

      {/* SECTION 5: REGIONAL VARIATIONS */}
      <h3 id="regional-variations" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineMapPin className='text-amber-600' />
        5. Regional Heirloom Variations: How Geography Shapes Genetics
      </h3>

      <p className='my-4'>
        While we can't identify specific varieties, we can observe that <span className='font-bold'>Ethiopian heirloom populations vary significantly by region</span>. Centuries of natural selection and farmer seed saving have created distinct regional genetic profiles.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Major Ethiopian Coffee Regions & Their Heirloom Characteristics</h4>

      <div className='space-y-6 my-8'>
        <div className='bg-green-50 p-6 rounded-lg border border-green-200'>
          <h5 className='font-bold text-lg mb-3 text-green-800 flex items-center gap-2'><HiOutlineMapPin className='text-green-600' /> Yirgacheffe Region</h5>
          <div className='grid md:grid-cols-2 gap-4 text-sm'>
            <div>
              <p className='font-bold mb-2'>Genetic Characteristics:</p>
              <ul className='space-y-1'>
                <li>• Smaller bean size (often 15-16 screen)</li>
                <li>• Dense, compact plant structure</li>
                <li>• High-altitude adaptation (1,750-2,200m)</li>
                <li>• Excellent natural disease resistance</li>
              </ul>
            </div>
            <div>
              <p className='font-bold mb-2'>Flavor Implications:</p>
              <ul className='space-y-1'>
                <li>• Pronounced floral notes (jasmine, bergamot)</li>
                <li>• Bright, vibrant acidity</li>
                <li>• Tea-like body</li>
                <li>• Complex citrus and stone fruit</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='bg-amber-50 p-6 rounded-lg border border-amber-200'>
          <h5 className='font-bold text-lg mb-3 text-amber-800 flex items-center gap-2'><HiOutlineMapPin className='text-amber-600' /> Sidama Region</h5>
          <div className='grid md:grid-cols-2 gap-4 text-sm'>
            <div>
              <p className='font-bold mb-2'>Genetic Characteristics:</p>
              <ul className='space-y-1'>
                <li>• Slightly larger bean size than Yirgacheffe</li>
                <li>• Vigorous plant growth</li>
                <li>• Good productivity (for Ethiopian standards)</li>
                <li>• Altitude range 1,550-2,200m</li>
              </ul>
            </div>
            <div>
              <p className='font-bold mb-2'>Flavor Implications:</p>
              <ul className='space-y-1'>
                <li>• Balanced sweetness and acidity</li>
                <li>• Berry-forward (blueberry, strawberry)</li>
                <li>• Medium to full body</li>
                <li>• Chocolate and caramel undertones</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='bg-blue-50 p-6 rounded-lg border border-blue-200'>
          <h5 className='font-bold text-lg mb-3 text-blue-800 flex items-center gap-2'><HiOutlineMapPin className='text-blue-600' /> Guji Zone</h5>
          <div className='grid md:grid-cols-2 gap-4 text-sm'>
            <div>
              <p className='font-bold mb-2'>Genetic Characteristics:</p>
              <ul className='space-y-1'>
                <li>• High genetic diversity even within Guji</li>
                <li>• Mixed forest and garden coffee</li>
                <li>• Altitude 1,800-2,350m</li>
                <li>• Wild coffee genetic influence</li>
              </ul>
            </div>
            <div>
              <p className='font-bold mb-2'>Flavor Implications:</p>
              <ul className='space-y-1'>
                <li>• Fruit-forward (stone fruits, tropical notes)</li>
                <li>• Wine-like complexity</li>
                <li>• Vibrant acidity</li>
                <li>• Floral and berry notes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='bg-purple-50 p-6 rounded-lg border border-purple-200'>
          <h5 className='font-bold text-lg mb-3 text-purple-800 flex items-center gap-2'><HiOutlineMapPin className='text-purple-600' /> Kaffa, Bench Maji, Illubabor (Forest Coffee)</h5>
          <div className='grid md:grid-cols-2 gap-4 text-sm'>
            <div>
              <p className='font-bold mb-2'>Genetic Characteristics:</p>
              <ul className='space-y-1'>
                <li>• Wild and semi-wild varieties</li>
                <li>• Maximum genetic diversity</li>
                <li>• Original Arabica gene pool</li>
                <li>• Shade-adapted genetics</li>
              </ul>
            </div>
            <div>
              <p className='font-bold mb-2'>Flavor Implications:</p>
              <ul className='space-y-1'>
                <li>• Earthy, winey, complex</li>
                <li>• Variable acidity</li>
                <li>• Full body</li>
                <li>• Unique wild coffee character</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='bg-red-50 p-6 rounded-lg border border-red-200'>
          <h5 className='font-bold text-lg mb-3 text-red-800 flex items-center gap-2'><HiOutlineCube className='text-red-600' /> Harar Region (Eastern Highlands)</h5>
          <div className='grid md:grid-cols-2 gap-4 text-sm'>
            <div>
              <p className='font-bold mb-2'>Genetic Characteristics:</p>
              <ul className='space-y-1'>
                <li>• Longberry and shortberry types</li>
                <li>• Drought-tolerant genetics</li>
                <li>• Lower altitude adaptation (1,400-2,000m)</li>
                <li>• Unique regional population</li>
              </ul>
            </div>
            <div>
              <p className='font-bold mb-2'>Flavor Implications:</p>
              <ul className='space-y-1'>
                <li>• Wild blueberry notes (natural processing)</li>
                <li>• Wine-like acidity</li>
                <li>• Heavy body</li>
                <li>• Chocolate and spice notes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'>
          <span className='font-bold'>Key Point:</span> While we use "Ethiopian Heirloom" generically, the varieties from Yirgacheffe differ genetically from those in Guji, which differ from Kaffa forest varieties. Region acts as a useful proxy for describing genetic variation, even when we can't name specific varieties.
        </p>
      </div>

      {/* SECTION 6: COMMON IDENTIFIERS */}
      <h3 id="common-identifiers" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCube className='text-amber-600' />
        6. Common Ethiopian Variety Identifiers & What They Mean
      </h3>

      <p className='my-4'>
        While "Ethiopian Heirloom" is the most common descriptor, you may occasionally encounter other variety terminology on Ethiopian coffee bags. Here's what these terms actually mean:
      </p>

      <div className='overflow-x-auto my-8'>
        <table className='w-full text-sm border-collapse border border-gray-300'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border border-gray-300 p-3 text-left'>Term</th>
              <th className='border border-gray-300 p-3 text-left'>What It Means</th>
              <th className='border border-gray-300 p-3 text-left'>Accuracy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Ethiopian Heirloom</td>
              <td className='border border-gray-300 p-3'>Generic term for indigenous Ethiopian landrace varieties</td>
              <td className='border border-gray-300 p-3 text-green-700'>✓ Accurate general descriptor</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Ethiopian Landrace</td>
              <td className='border border-gray-300 p-3'>More technically correct term for native Ethiopian varieties</td>
              <td className='border border-gray-300 p-3 text-green-700'>✓ More precise than "heirloom"</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Indigenous Varieties</td>
              <td className='border border-gray-300 p-3'>Native varieties originating in Ethiopia</td>
              <td className='border border-gray-300 p-3 text-green-700'>✓ Accurate</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Native Typica</td>
              <td className='border border-gray-300 p-3'>Misleading - Typica is actually a variety that left Ethiopia centuries ago and was selected elsewhere</td>
              <td className='border border-gray-300 p-3 text-red-700'>✗ Technically incorrect</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>74110, 74112, 74158, etc.</td>
              <td className='border border-gray-300 p-3'>Specific named varieties developed by Jimma Agricultural Research Center (JARC)</td>
              <td className='border border-gray-300 p-3 text-green-700'>✓ Accurate if actually planted</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Wild Forest Varieties</td>
              <td className='border border-gray-300 p-3'>Coffee from wild or semi-wild forest populations in southwestern Ethiopia</td>
              <td className='border border-gray-300 p-3 text-green-700'>✓ Accurate for forest coffee</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Gesha/Geisha</td>
              <td className='border border-gray-300 p-3'>Variety originally from Gesha village, Ethiopia, now famous worldwide</td>
              <td className='border border-gray-300 p-3 text-amber-700'>△ Rarely verified in Ethiopia</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Mixed Heirloom</td>
              <td className='border border-gray-300 p-3'>Explicitly acknowledges multiple varieties in the lot</td>
              <td className='border border-gray-300 p-3 text-green-700'>✓ Honest descriptor</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineExclamationTriangle className='text-amber-600' />
          Beware of Over-Specific Claims
        </p>
        <p className='text-sm'>
          Be skeptical if an Ethiopian coffee bag lists specific variety names like "Bourbon" or "Typica" without further explanation. True Bourbon and Typica are rarely grown in Ethiopia (though some JARC varieties may have Bourbon parentage). Unless the seller can provide DNA verification or detailed provenance, such claims are likely generic approximations based on morphology (plant appearance) rather than genetic confirmation.
        </p>
      </div>

      {/* SECTION 7: JARC VARIETIES */}
      <h3 id="jarc-varieties" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineAcademicCap className='text-amber-600' />
        7. JARC Varieties: Ethiopia's Named Coffee Selections
      </h3>

      <p className='my-4'>
        Ethiopia <span className='font-bold'>does</span> have officially named and registered coffee varieties, developed by the <a href="https://en.wikipedia.org/wiki/Ethiopian_Institute_of_Agricultural_Research" target="_blank" rel="noopener noreferrer" className='font-bold text-amber-700 hover:underline'>Jimma Agricultural Research Center (JARC)</a>, part of the Ethiopian Institute of Agricultural Research (EIAR).
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>What Are JARC Varieties?</h4>

      <p className='my-4'>
        Starting in the 1970s, JARC began systematic breeding and selection work to develop improved coffee varieties. The program selected promising individual trees from wild and cultivated Ethiopian coffee populations, evaluated them for traits like yield, disease resistance, cup quality, and adaptation, then released them as named varieties.
      </p>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <h5 className='font-bold mb-3'>Notable JARC Varieties</h5>
        <div className='space-y-3 text-sm'>
          <div>
            <p className='font-bold'>74110 & 74112 (Released 1970s)</p>
            <p>Early selections known for good yield and cup quality. Widely distributed to farmers.</p>
          </div>
          <div>
            <p className='font-bold'>74140, 74148, 74158 (Released 1980s-1990s)</p>
            <p>Additional selections emphasizing disease resistance and regional adaptation.</p>
          </div>
          <div>
            <p className='font-bold'>74165 (More Recent)</p>
            <p>Improved selections incorporating Coffee Berry Disease (CBD) resistance.</p>
          </div>
          <div>
            <p className='font-bold'>Ababuna, Bunna, Dessu, Gawe</p>
            <p>Regionally-named varieties selected for specific agro-ecological zones.</p>
          </div>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>JARC Varieties vs. Heirloom: Key Differences</h4>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse border border-gray-300'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border border-gray-300 p-3 text-left'>Aspect</th>
              <th className='border border-gray-300 p-3 text-left'>JARC Varieties</th>
              <th className='border border-gray-300 p-3 text-left'>Heirloom Landraces</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Selection</td>
              <td className='border border-gray-300 p-3'>Scientifically selected by researchers</td>
              <td className='border border-gray-300 p-3'>Naturally evolved + farmer selection</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Genetic uniformity</td>
              <td className='border border-gray-300 p-3'>More uniform (but still from Ethiopian gene pool)</td>
              <td className='border border-gray-300 p-3'>Highly diverse</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Names</td>
              <td className='border border-gray-300 p-3'>Official variety numbers/names</td>
              <td className='border border-gray-300 p-3'>No specific names</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Distribution</td>
              <td className='border border-gray-300 p-3'>Through government extension programs</td>
              <td className='border border-gray-300 p-3'>Already present on farms</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Adoption rate</td>
              <td className='border border-gray-300 p-3'>Limited - many farmers prefer traditional varieties</td>
              <td className='border border-gray-300 p-3'>Dominant across Ethiopia</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Why JARC Varieties Are Rare in Specialty Coffee</h4>

      <p className='my-4'>
        Despite their official status, JARC varieties represent a small fraction of Ethiopian coffee production for several reasons:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Limited adoption:</span> Many farmers prefer their traditional landrace varieties</li>
        <li><span className='font-bold'>Seedling distribution:</span> Government seedling programs reach only a portion of coffee farmers</li>
        <li><span className='font-bold'>Mixed planting:</span> Even farmers who receive JARC seedlings often plant them alongside existing varieties</li>
        <li><span className='font-bold'>Processing mix:</span> Coffee from different varieties is processed together</li>
        <li><span className='font-bold'>Quality perception:</span> Some specialty buyers and farmers believe traditional heirloom varieties produce more complex cup profiles</li>
      </ul>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'>
          <span className='font-bold'>For Buyers:</span> If an Ethiopian coffee specifically lists a JARC variety number (like 74110), it indicates intentional variety selection and potentially more uniform genetics. However, most specialty Ethiopian coffee comes from traditional heirloom populations rather than JARC varieties.
        </p>
      </div>

      {/* SECTION 8: GESHA ORIGIN */}
      <h3 id="gesha-origin" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <GiCoffeeBeans className='text-amber-600' />
        8. Gesha/Geisha: Ethiopia's Most Famous Export
      </h3>

      <p className='my-4'>
        No discussion of Ethiopian varieties would be complete without addressing <a href="https://en.wikipedia.org/wiki/Geisha_(coffee)" target="_blank" rel="noopener noreferrer" className='font-bold text-amber-700 hover:underline'>Gesha</a> (also spelled Geisha) – perhaps the most famous and expensive coffee variety in the world.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>The Gesha Story</h4>

      <div className='space-y-4 my-6'>
        <div className='border-l-4 border-green-500 pl-4'>
          <h5 className='font-bold'>1931-1936: Ethiopian Origins</h5>
          <p className='text-sm'>Coffee seeds collected from forests near <span className='font-bold'>Gesha village</span> in southwestern Ethiopia (Bench Maji zone) by British consul Richard Whalley. Initially collected for its resistance to Coffee Leaf Rust.</p>
        </div>

        <div className='border-l-4 border-amber-500 pl-4'>
          <h5 className='font-bold'>1950s-1960s: Tanzania & Kenya</h5>
          <p className='text-sm'>The Gesha germplasm was taken to research stations in Tanzania (Lyamungu) and Kenya, where it was maintained but not widely planted due to low yields.</p>
        </div>

        <div className='border-l-4 border-blue-500 pl-4'>
          <h5 className='font-bold'>1963: Costa Rica</h5>
          <p className='text-sm'>Seeds sent to CATIE (Tropical Agricultural Research and Higher Education Center) in Costa Rica for research purposes.</p>
        </div>

        <div className='border-l-4 border-purple-500 pl-4'>
          <h5 className='font-bold'>1990s: Panama</h5>
          <p className='text-sm'>Don Pachi Serracin of Panama obtained seeds from CATIE and planted them at high altitude. The Peterson family at Hacienda La Esmeralda later acquired plants from Pachi.</p>
        </div>

        <div className='border-l-4 border-red-500 pl-4'>
          <h5 className='font-bold'>2004: Global Recognition</h5>
          <p className='text-sm'>Hacienda La Esmeralda's Gesha won the Best of Panama competition with an unprecedented 94.1 cupping score and sold for a record $21/lb. Gesha became a global phenomenon, now grown worldwide and selling for hundreds of dollars per pound.</p>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Gesha in Ethiopia Today: The Irony</h4>

      <p className='my-4'>
        Here's the paradox: <span className='font-bold'>Gesha originated in Ethiopia, but almost all commercial "Gesha" coffee is grown elsewhere.</span> Several factors explain this:
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <ul className='space-y-3 text-sm'>
          <li>
            <span className='font-bold'>1. No single-variety cultivation tradition:</span> Ethiopian farmers traditionally don't isolate and propagate individual varieties. Gesha grows mixed with other varieties in its native region.
          </li>
          <li>
            <span className='font-bold'>2. Processing & trade systems:</span> Ethiopian coffee is processed and traded in mixed lots, making single-variety separation difficult.
          </li>
          <li>
            <span className='font-bold'>3. Lack of premium recognition:</span> Until recently, Gesha from its native Ethiopia didn't command the premiums it does elsewhere, discouraging selective production.
          </li>
          <li>
            <span className='font-bold'>4. Verification challenges:</span> Without DNA testing, confirming Ethiopian coffee as "true Gesha" versus other local varieties is nearly impossible.
          </li>
          <li>
            <span className='font-bold'>5. Better alternatives:</span> Ethiopia has thousands of equally interesting varieties; focusing on one makes less sense than in countries with limited genetic diversity.
          </li>
        </ul>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>The "Ethiopian Gesha" Marketing Question</h4>

      <p className='my-4'>
        Some Ethiopian exporters now market coffee as "Ethiopian Gesha" or "Gesha Village" coffee. How should buyers evaluate these claims?
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h5 className='font-bold mb-3'>Questions to Ask:</h5>
        <ul className='space-y-2 text-sm'>
          <li>✓ Is this from the Gesha village area in Bench Maji? (Geographic authenticity)</li>
          <li>✓ Has the specific variety been DNA-verified as Gesha? (Genetic verification)</li>
          <li>✓ Was this selectively propagated or just collected from the area? (Cultivation method)</li>
          <li>✓ Does the cup profile match Gesha characteristics? (Floral, tea-like, jasmine, bergamot)</li>
          <li>✓ Is this priced as authentic Gesha? (Market positioning)</li>
        </ul>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'>
          <span className='font-bold'>Perspective:</span> Coffee from near Gesha village can be exceptional regardless of whether it's the exact variety famous in Panama. Ethiopia's genetic diversity means other varieties from the region may be equally extraordinary. Focus on cup quality and origin story rather than getting fixated on the "Gesha" name.
        </p>
      </div>

      {/* SECTION 9: FLAVOR IMPLICATIONS */}
      <h3 id="flavor-implications" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineSparkles className='text-amber-600' />
        9. How Heirloom Genetics Influence Flavor
      </h3>

      <p className='my-4'>
        Ethiopian heirloom varieties' genetic diversity translates directly into <span className='font-bold'>flavor complexity</span>. Here's how genetics shape the cup:
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Genetic Traits That Influence Flavor</h4>

      <div className='grid md:grid-cols-2 gap-6 my-8'>
        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-3'>Chemical Compound Production</h5>
          <ul className='space-y-2 text-sm'>
            <li>• <span className='font-bold'>Terpenes:</span> Floral and fruity aromatics (linalool, geraniol)</li>
            <li>• <span className='font-bold'>Phenolic compounds:</span> Contribute to body, astringency, antioxidants</li>
            <li>• <span className='font-bold'>Organic acids:</span> Acidity type and intensity (citric, malic, phosphoric)</li>
            <li>• <span className='font-bold'>Sugars & amino acids:</span> Sweetness precursors and Maillard browning</li>
          </ul>
        </div>

        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold mb-3'>Physical Bean Characteristics</h5>
          <ul className='space-y-2 text-sm'>
            <li>• <span className='font-bold'>Bean density:</span> Affects heat transfer during roasting</li>
            <li>• <span className='font-bold'>Bean size:</span> Influences roasting behavior and extraction</li>
            <li>• <span className='font-bold'>Bean shape:</span> Impacts how water flows during brewing</li>
            <li>• <span className='font-bold'>Cellulose structure:</span> Affects soluble compounds release</li>
          </ul>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Why Ethiopian Heirloom Tastes Different</h4>

      <p className='my-4'>
        Ethiopian heirloom coffee is famous for distinctive flavor characteristics that stem from genetic diversity:
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h5 className='font-bold text-lg mb-3'>Signature Ethiopian Heirloom Flavor Traits</h5>
        <div className='space-y-4'>
          <div>
            <p className='font-bold text-amber-800'>Floral Complexity</p>
            <p className='text-sm'>Ethiopian varieties produce exceptional levels of floral aromatics – jasmine, bergamot, honeysuckle, lavender. This is genetically encoded in higher terpene production compared to varieties bred elsewhere.</p>
          </div>
          <div>
            <p className='font-bold text-amber-800'>Fruit-Forward Profiles</p>
            <p className='text-sm'>Berry notes (blueberry, strawberry, blackberry), stone fruits (peach, apricot), and citrus (lemon, orange, bergamot) are hallmarks. Natural processing amplifies these genetic predispositions.</p>
          </div>
          <div>
            <p className='font-bold text-amber-800'>Tea-Like Quality</p>
            <p className='text-sm'>Many Ethiopian heirlooms exhibit delicate, tea-like body with clean, complex flavors – quite different from the fuller-bodied Latin American profiles.</p>
          </div>
          <div>
            <p className='font-bold text-amber-800'>Bright, Complex Acidity</p>
            <p className='text-sm'>Ethiopian varieties produce vibrant, multi-dimensional acidity – often described as "sparkling" or "phosphoric" – rather than the simpler citric acidity common elsewhere.</p>
          </div>
          <div>
            <p className='font-bold text-amber-800'>Layered Complexity</p>
            <p className='text-sm'>Because you're tasting multiple varieties in one lot, Ethiopian coffee often displays layer upon layer of flavor – "complexity" is the defining characteristic.</p>
          </div>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Heirloom Diversity = Flavor Diversity</h4>

      <p className='my-4'>
        The mixed variety population in each Ethiopian lot creates a <span className='font-bold'>"flavor ensemble"</span> where different genetics contribute different notes:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li>Variety A might contribute pronounced floral notes</li>
        <li>Variety B adds berry sweetness</li>
        <li>Variety C provides structure and body</li>
        <li>Variety D contributes bright acidity</li>
      </ul>

      <p className='my-4'>
        The result is the <span className='font-bold'>signature complexity</span> Ethiopian coffee is famous for – a complexity that's harder to achieve with single-variety lots from other origins.
      </p>

      {/* SECTION 10: SOURCING HEIRLOOM */}
      <h3 id="sourcing-heirloom" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCheckCircle className='text-amber-600' />
        10. Sourcing Ethiopian Heirloom Coffee: What to Ask
      </h3>

      <p className='my-4'>
        When sourcing Ethiopian heirloom coffee, what questions should you ask your exporter? Here's a practical guide:
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Essential Questions for Ethiopian Coffee Sourcing</h4>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <h5 className='font-bold mb-3'>✓ Region & Microclimate</h5>
        <p className='text-sm mb-2'>Instead of asking for specific variety names, ask about:</p>
        <ul className='text-sm space-y-1 ml-5'>
          <li>• Which zone/woreda (district) does this coffee come from?</li>
          <li>• What's the altitude range?</li>
          <li>• Is this from forest, garden, or plantation coffee?</li>
          <li>• What's the soil type and microclimate?</li>
        </ul>
        <p className='text-xs mt-2 italic'>Why: Regional information gives you better insights than generic "heirloom" descriptor</p>
      </div>

      <div className='bg-blue-50 p-6 rounded-lg my-6 border border-blue-200'>
        <h5 className='font-bold mb-3'>✓ Farm Size & Collection</h5>
        <p className='text-sm mb-2'>Understanding the sourcing structure:</p>
        <ul className='text-sm space-y-1 ml-5'>
          <li>• Is this from a single cooperative, washing station, or multiple sources?</li>
          <li>• How many smallholder farmers contributed?</li>
          <li>• What's the average farm size?</li>
          <li>• Is there traceability to specific producers or kebeles (villages)?</li>
        </ul>
        <p className='text-xs mt-2 italic'>Why: Helps you understand genetic diversity and quality consistency</p>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h5 className='font-bold mb-3'>✓ Processing & Separation</h5>
        <p className='text-sm mb-2'>Quality control practices:</p>
        <ul className='text-sm space-y-1 ml-5'>
          <li>• Is this lot day-separated (single-day harvest)?</li>
          <li>• Was cherry sorted by ripeness before processing?</li>
          <li>• What's the drying method and timeline?</li>
          <li>• Is this a single-station lot or blended?</li>
        </ul>
        <p className='text-xs mt-2 italic'>Why: Processing has huge flavor impact, often more than variety differences</p>
      </div>

      <div className='bg-purple-50 p-6 rounded-lg my-6 border border-purple-200'>
        <h5 className='font-bold mb-3'>✓ Cup Profile Consistency</h5>
        <p className='text-sm mb-2'>Quality expectations:</p>
        <ul className='text-sm space-y-1 ml-5'>
          <li>• What's the cupping score range?</li>
          <li>• What are the dominant flavor descriptors?</li>
          <li>• Is this profile consistent year-to-year?</li>
          <li>• Can you provide pre-shipment samples?</li>
        </ul>
        <p className='text-xs mt-2 italic'>Why: Cup quality matters more than variety pedigree</p>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>What NOT to Over-Emphasize</h4>

      <div className='bg-red-50 p-6 rounded-lg my-6 border border-red-200'>
        <h5 className='font-bold mb-3 flex items-center gap-2'>
          <HiOutlineExclamationTriangle className='text-red-600' />
          Questions That Won't Help Much
        </h5>
        <ul className='space-y-2 text-sm'>
          <li>✗ "What specific variety is this?" – Likely can't be answered with precision</li>
          <li>✗ "Is this Typica or Bourbon?" – Usually neither, and impossible to verify without DNA</li>
          <li>✗ "Can I get single-variety Ethiopian coffee?" – Rare and not necessarily better</li>
          <li>✗ "Why don't you have variety details?" – This isn't a quality issue; it's the nature of Ethiopian coffee</li>
        </ul>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'>
          <span className='font-bold'>Best Approach:</span> Focus on region, altitude, processing method, and cup profile rather than pursuing specific variety identification. Ethiopian coffee's strength is its diversity – embrace it rather than trying to reduce it to simple variety names.
        </p>
      </div>

      {/* SECTION 11: FUTURE RESEARCH */}
      <h3 id="future-research" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBeaker className='text-amber-600' />
        11. The Future: DNA Analysis & Variety Identification
      </h3>

      <p className='my-4'>
        The future of Ethiopian coffee variety identification lies in <span className='font-bold'>genomic research and DNA sequencing</span>. Recent years have seen significant progress:
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Recent Research Advances</h4>

        <div className='space-y-4 my-6'>
        <div className='border-l-4 border-green-500 pl-4'>
          <h5 className='font-bold'>Coffee Genome Sequencing (2014)</h5>
          <p className='text-sm'>The arabica coffee genome and related genomic research provide a reference for genetic studies and variety identification - see <a href="https://worldcoffeeresearch.org/" target="_blank" rel="noopener noreferrer" className='text-amber-700 hover:underline'>World Coffee Research</a> for ongoing summaries of coffee genetic research.</p>
        </div>

        <div className='border-l-4 border-blue-500 pl-4'>
          <h5 className='font-bold'>Ethiopian Diversity Studies</h5>
          <p className='text-sm'>Multiple research institutions (including World Coffee Research and Ethiopian universities) are conducting genetic diversity surveys of Ethiopian coffee populations - see <a href="https://worldcoffeeresearch.org/" target="_blank" rel="noopener noreferrer" className='text-amber-700 hover:underline'>World Coffee Research</a> for project links and publications.</p>
        </div>

        <div className='border-l-4 border-purple-500 pl-4'>
          <h5 className='font-bold'>DNA Fingerprinting Tools</h5>
          <p className='text-sm'>Molecular markers (SNPs, microsatellites) allow precise variety identification. Several laboratories and service providers now offer DNA testing for coffee; World Coffee Research publishes resources and best-practice guidance.</p>
        </div>

        <div className='border-l-4 border-amber-500 pl-4'>
          <h5 className='font-bold'>Variety Databases</h5>
          <p className='text-sm'>World Coffee Research maintains a <a href="https://varietycatalog.worldcoffeeresearch.org/" target="_blank" rel="noopener noreferrer" className='text-amber-700 hover:underline'>Variety Catalog</a> that is expanding to include Ethiopian germplasm with genetic and phenotypic data.</p>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>What This Means for the Industry</h4>

      <p className='my-4'>
        As DNA analysis becomes more accessible, we may see:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Variety-specific lots:</span> Ethiopian exporters could offer DNA-verified single-variety coffees for premium positioning</li>
        <li><span className='font-bold'>Flavor-genetic correlation:</span> Research linking specific genetic markers to flavor traits</li>
        <li><span className='font-bold'>Terroir verification:</span> Genetic "fingerprints" confirming regional origin claims</li>
        <li><span className='font-bold'>Conservation priorities:</span> Identifying genetically unique populations for protection</li>
        <li><span className='font-bold'>Breeding efficiency:</span> Using genetic data to develop improved varieties faster</li>
      </ul>

      <h4 className='text-xl font-bold mt-8 mb-4'>Challenges Remain</h4>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <ul className='space-y-2 text-sm'>
          <li>• <span className='font-bold'>Cost:</span> DNA testing remains expensive for smallholder farmers</li>
          <li>• <span className='font-bold'>Scale:</span> Testing thousands of farms is logistically complex</li>
          <li>• <span className='font-bold'>Database gaps:</span> Many Ethiopian varieties haven't been genetically characterized yet</li>
          <li>• <span className='font-bold'>Value question:</span> Will buyers pay enough premium to justify the testing costs?</li>
          <li>• <span className='font-bold'>Mixed lots:</span> DNA testing confirms what's present but doesn't solve the mixed-variety reality</li>
        </ul>
      </div>

      {/* SECTION 12: CONSERVATION */}
      <h3 id="conservation" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <FaTree className='text-green-600' />
        12. Genetic Conservation & Ethiopia's Coffee Heritage
      </h3>

      <p className='my-4'>
        Ethiopian heirloom varieties represent <span className='font-bold'>irreplaceable genetic wealth</span> for global coffee. As the center of origin and the only place with wild Arabica populations, Ethiopia's role in coffee's future cannot be overstated.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Threats to Ethiopian Coffee Genetic Diversity</h4>

      <div className='bg-red-50 p-6 rounded-lg my-6 border border-red-200'>
        <ul className='space-y-3 text-sm'>
          <li className='flex items-start gap-2'>
            <FaTree className='text-red-600 flex-shrink-0 mt-0.5' />
            <div><span className='font-bold'>Deforestation:</span> Wild coffee forests in southwestern Ethiopia are shrinking due to agricultural expansion and logging, threatening wild populations</div>
          </li>
          <li className='flex items-start gap-2'>
            <TbTemperature className='text-red-600 flex-shrink-0 mt-0.5' />
            <div><span className='font-bold'>Climate Change:</span> Rising temperatures and changing rainfall patterns threaten coffee-growing zones and forest ecosystems</div>
          </li>
          <li className='flex items-start gap-2'>
            <TbPlant2 className='text-red-600 flex-shrink-0 mt-0.5' />
            <div><span className='font-bold'>Variety Replacement:</span> Government programs promoting uniform "improved" varieties could reduce landrace diversity</div>
          </li>
          <li className='flex items-start gap-2'>
            <FaUsers className='text-red-600 flex-shrink-0 mt-0.5' />
            <div><span className='font-bold'>Generational Change:</span> Young farmers may abandon traditional varieties for higher-yielding alternatives</div>
          </li>
          <li className='flex items-start gap-2'>
            <FaDollarSign className='text-red-600 flex-shrink-0 mt-0.5' />
            <div><span className='font-bold'>Economic Pressure:</span> Low coffee prices can push farmers to convert land to other crops</div>
          </li>
        </ul>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Conservation Efforts</h4>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <h5 className='font-bold mb-3'>Active Conservation Initiatives</h5>
        <div className='space-y-3 text-sm'>
          <div className='flex items-start gap-2'>
            <FaUniversity className='text-green-600 flex-shrink-0 mt-0.5' />
            <div>
              <p className='font-bold'>National Gene Bank</p>
              <p>Ethiopian Biodiversity Institute maintains germplasm collections of Ethiopian coffee varieties</p>
            </div>
          </div>
          <div className='flex items-start gap-2'>
            <GiForestCamp className='text-green-600 flex-shrink-0 mt-0.5' />
            <div>
              <p className='font-bold'>Forest Coffee Conservation</p>
              <p>Programs protecting wild coffee forests in Kaffa, Illubabor, and Bench Maji</p>
            </div>
          </div>
          <div className='flex items-start gap-2'>
            <HiOutlineBeaker className='text-green-600 flex-shrink-0 mt-0.5' />
            <div>
              <p className='font-bold'>Research Collections</p>
              <p>JARC and international research institutions maintain living collections of Ethiopian germplasm</p>
            </div>
          </div>
          <div className='flex items-start gap-2'>
            <HiOutlineGlobeAlt className='text-green-600 flex-shrink-0 mt-0.5' />
            <div>
              <p className='font-bold'>International Collaboration</p>
              <p>World Coffee Research, CATIE, and other institutions preserve Ethiopian varieties globally</p>
            </div>
          </div>
          <div className='flex items-start gap-2'>
            <HiOutlineShieldCheck className='text-green-600 flex-shrink-0 mt-0.5' />
            <div>
              <p className='font-bold'>Market-Based Conservation</p>
              <p>Specialty coffee premiums incentivize farmers to maintain traditional varieties and forest systems</p>
            </div>
          </div>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>How Buyers Can Support Conservation</h4>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold mb-3'>Practical Actions for Coffee Importers & Roasters:</p>
        <ul className='space-y-2 text-sm'>
          <li>✓ Pay premiums for Ethiopian heirloom coffee that reward farmers for maintaining diversity</li>
          <li>✓ Source forest coffee from protected areas like <a href="https://en.wikipedia.org/wiki/Kafa_Biosphere_Reserve" target="_blank" rel="noopener noreferrer" className='text-amber-700 hover:underline'>Kaffa Biosphere Reserve</a></li>
          <li>✓ Support certification programs (Bird Friendly, organic) that encourage biodiversity</li>
          <li>✓ Tell the story of Ethiopian genetic diversity to your customers</li>
          <li>✓ Form direct relationships with Ethiopian cooperatives and farmers</li>
          <li>✓ Support organizations working on Ethiopian coffee conservation (see <a href="https://worldcoffeeresearch.org/" target="_blank" rel="noopener noreferrer" className='text-amber-700 hover:underline'>World Coffee Research</a>)</li>
          <li>✓ Choose Ethiopian coffee over genetically-narrow alternatives when possible</li>
        </ul>
      </div>

      {/* CONCLUSION */}
      <h3 className='text-3xl font-extrabold mt-12 mb-6'>
        Conclusion: Embracing Ethiopian Heirloom Complexity
      </h3>

      <p className='my-4'>
        Ethiopian heirloom varieties defy the simple categorization coffee buyers from other origins might expect. There are no clean variety names, no uniform genetic lines, no predictable plant-to-plant consistency. Instead, there's <span className='font-bold'>magnificent, beautiful, essential diversity</span> – the genetic foundation of all the world's coffee.
      </p>

      <p className='my-4'>
        Rather than viewing "Ethiopian Heirloom" as vague or imprecise, understand it as an honest acknowledgment of natural complexity. This diversity is Ethiopia's greatest strength, contributing to the layered, intricate, endlessly fascinating flavors that make Ethiopian coffee incomparable.
      </p>

      <p className='my-4'>
        As DNA research advances, we'll gain deeper insights into Ethiopian coffee genetics. But the fundamental reality will remain: <span className='font-bold'>Ethiopian coffee is not a single variety or even hundreds of varieties – it's a living, evolving genetic ecosystem that has sustained coffee for millennia and holds the keys to its future.</span>
      </p>

      <div className='bg-gray-100 p-6 rounded-lg my-8 border border-gray-300'>
        <h4 className='font-bold text-lg mb-3'>Key Takeaways</h4>
        <ul className='space-y-2 text-sm'>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>"Ethiopian Heirloom"</span> describes indigenous landrace varieties, not a single named variety</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' />Ethiopia has <span className='font-bold'>10,000-15,000 distinct genotypes</span> – unmatched global diversity</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' />Most Ethiopian coffee is <span className='font-bold'>mixed varieties</span> from the same region</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Regional variation</span> is more meaningful than variety names for Ethiopian coffee</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' /><span className='font-bold'>Genetic diversity = flavor complexity</span> – Ethiopia's strength</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' />Focus on <span className='font-bold'>region, processing, and cup quality</span> rather than pursuing specific variety names</li>
          <li><HiOutlineCheckCircle className='inline mr-2 text-green-600' />Ethiopian heirloom conservation is <span className='font-bold'>critical for coffee's global future</span></li>
        </ul>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-8'>
        <h4 className='font-bold text-xl mb-3'>Source Exceptional Ethiopian Heirloom Coffee</h4>
        <p className='mb-4'>
          Looking for Ethiopian heirloom coffee with full transparency? Ethio Coffee Export sources from diverse regions across Ethiopia's premier coffee zones:
        </p>
        <ul className='space-y-2 mb-4'>
          <li>✓ Yirgacheffe, Sidama, Guji highland heirlooms</li>
          <li>✓ Wild forest coffee from Kaffa and Bench Maji</li>
          <li>✓ Complete regional traceability</li>
          <li>✓ Processing method transparency</li>
          <li>✓ Pre-shipment cupping samples</li>
          <li>✓ Direct relationships with cooperatives</li>
        </ul>
        <p>
          <Link href='/contact-us' className='font-bold underline'>Contact us</Link> to discuss your sourcing needs and explore the remarkable diversity of Ethiopian heirloom varieties.
        </p>
      </div>

      {/* RELATED ARTICLES */}
      <div className='my-8 p-6 bg-gray-50 rounded-lg border border-gray-200'>
        <h4 className='font-bold text-lg mb-4'>Related Articles</h4>
        <ul className='space-y-2 text-sm'>
          <li>
            <Link href='/insights/coffee-plant-taxonomy-species-varieties' className='text-amber-700 hover:underline'>
              → Coffee Is a Plant: Understanding Taxonomy, Species & Varieties
            </Link>
          </li>
          <li>
            <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>
              → A Practical Guide to Ethiopian Green Coffee Origins
            </Link>
          </li>
          <li>
            <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>
              → Yirgacheffe vs Sidamo vs Guji: Which Ethiopian Coffee Is Right for You?
            </Link>
          </li>
          <li>
            <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>
              → Sourcing Green Coffee from Ethiopia: Complete Guide
            </Link>
          </li>
          <li>
            <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>
              → Ethiopian Coffee Certifications Guide: Organic, Fair Trade, Rainforest Alliance & More
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

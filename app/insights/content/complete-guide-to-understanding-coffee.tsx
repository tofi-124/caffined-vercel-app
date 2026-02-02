"use client"

import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { 
  HiOutlineCalendarDays, 
  HiOutlineGlobeAlt,
  HiOutlineSparkles, 
  HiOutlineCheckCircle, 
  HiOutlineDocumentText,
  HiOutlineLightBulb,
  HiOutlineBeaker,
  HiOutlineFire,
  HiOutlineMapPin,
  HiOutlineScale,
  HiOutlineStar,
  HiOutlineArrowPath,
  HiOutlineCube,
  HiOutlineBookOpen,
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineCloud,
  HiOutlineBanknotes,
  HiOutlineExclamationTriangle,
  HiOutlineUserGroup,
  HiOutlineSquare3Stack3D
} from 'react-icons/hi2'
import { 
  PiTree, 
  PiLeaf, 
  PiFlowerLotus, 
  PiDropHalfBottom,
  PiThermometerHot,
  PiCloudRain,
  PiMountains
} from 'react-icons/pi'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function CompleteGuideToUnderstandingCoffee({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Everything you need to know about coffee—from its Ethiopian origins to your cup. A comprehensive guide for coffee lovers, buyers, roasters, and industry professionals.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Understanding coffee begins with understanding its journey from seed to cup.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Complete guide to understanding coffee from origin to cup specialty coffee education'
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
        <span className='ml-2'>Coffee Education / Complete Guide / Specialty Coffee Fundamentals</span>
      </div>

      {/* Table of Contents */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'><HiOutlineBookOpen className='text-amber-600' /> Table of Contents</h3>
        <ol className='space-y-2 text-sm'>
          <li><a href="#origins" className='text-blue-600 hover:underline'>1. The Origins of Coffee: Ethiopia's Gift to the World</a></li>
          <li><a href="#coffee-plant" className='text-blue-600 hover:underline'>2. Understanding the Coffee Plant</a></li>
          <li><a href="#species-varieties" className='text-blue-600 hover:underline'>3. Coffee Species and Varieties</a></li>
          <li><a href="#growing-regions" className='text-blue-600 hover:underline'>4. Coffee Growing Regions: The Coffee Belt</a></li>
          <li><a href="#terroir" className='text-blue-600 hover:underline'>5. Terroir: How Environment Shapes Flavor</a></li>
          <li><a href="#harvesting" className='text-blue-600 hover:underline'>6. Coffee Harvesting Methods</a></li>
          <li><a href="#processing" className='text-blue-600 hover:underline'>7. Coffee Processing: The Transformation</a></li>
          <li><a href="#grading" className='text-blue-600 hover:underline'>8. Coffee Grading and Quality Standards</a></li>
          <li><a href="#roasting" className='text-blue-600 hover:underline'>9. The Art and Science of Roasting</a></li>
          <li><a href="#tasting" className='text-blue-600 hover:underline'>10. How to Taste Coffee Like a Professional</a></li>
          <li><a href="#brewing" className='text-blue-600 hover:underline'>11. Brewing Fundamentals</a></li>
          <li><a href="#specialty-vs-commercial" className='text-blue-600 hover:underline'>12. Specialty Coffee vs. Commercial Coffee</a></li>
          <li><a href="#supply-chain" className='text-blue-600 hover:underline'>13. The Coffee Supply Chain</a></li>
          <li><a href="#sustainability" className='text-blue-600 hover:underline'>14. Sustainability and the Future of Coffee</a></li>
        </ol>
      </div>
      
      <p className='my-4'>
        Coffee is one of the most complex and fascinating beverages in the world. Behind every cup lies a journey spanning continents, countless hands, and a remarkable transformation from a tiny seed inside a cherry to the aromatic drink that fuels billions of people daily.
      </p>

      <p className='my-4'>
        Whether you're a curious coffee lover, an aspiring barista, a roaster expanding your knowledge, or a buyer sourcing green coffee, understanding coffee deeply will transform how you experience, evaluate, and appreciate this extraordinary product.
      </p>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineSparkles className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Why This Matters:</span> Coffee is the world&apos;s second most traded commodity after oil. Over 2.25 billion cups are consumed every day. Yet most people know surprisingly little about what goes into producing the coffee they drink. Knowledge is the key to appreciation—and to making better choices.</span>
        </p>
      </div>

      {/* SECTION 1: ORIGINS */}
      <h3 id="origins" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineGlobeAlt className='text-amber-600' />
        1. The Origins of Coffee: Ethiopia&apos;s Gift to the World
      </h3>
      
      <p className='my-4'>
        The story of coffee begins in the ancient forests of <span className='font-bold'>Ethiopia</span>—the birthplace of Arabica coffee. Legend tells of a goat herder named Kaldi who noticed his goats becoming unusually energetic after eating red berries from a certain tree. This discovery, dating back over 1,000 years, would eventually change the world.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-3'>The Ethiopian Coffee Origin Story</h4>
        <p className='mb-3'>
          Ethiopia&apos;s southwestern highlands—the Kaffa region (from which the word "coffee" derives)—contain the only place on Earth where coffee grows wild in its natural state. These ancient coffee forests are genetically diverse beyond anything found elsewhere, containing thousands of unique varieties that scientists are still cataloging.
        </p>
        <p>
          From Ethiopia, coffee spread to Yemen in the 15th century, where it was first cultivated and traded. From there, it traveled through the Ottoman Empire to Europe, and eventually to every corner of the globe.
        </p>
      </div>

      <h4 className='text-xl font-bold mt-6 mb-3'>Coffee&apos;s Global Journey: A Timeline</h4>
      <div className='space-y-3 my-4'>
        <div className='flex gap-4 items-start'>
          <span className='font-bold text-amber-600 w-24 flex-shrink-0'>~850 AD</span>
          <span>Coffee discovered in Ethiopia</span>
        </div>
        <div className='flex gap-4 items-start'>
          <span className='font-bold text-amber-600 w-24 flex-shrink-0'>1400s</span>
          <span>Coffee cultivation begins in Yemen; Sufi monks use it for prayer</span>
        </div>
        <div className='flex gap-4 items-start'>
          <span className='font-bold text-amber-600 w-24 flex-shrink-0'>1500s</span>
          <span>Coffee houses emerge across the Ottoman Empire</span>
        </div>
        <div className='flex gap-4 items-start'>
          <span className='font-bold text-amber-600 w-24 flex-shrink-0'>1600s</span>
          <span>Coffee reaches Europe; first coffee houses open in Venice, London, Paris</span>
        </div>
        <div className='flex gap-4 items-start'>
          <span className='font-bold text-amber-600 w-24 flex-shrink-0'>1700s</span>
          <span>Coffee cultivation spreads to Dutch colonies (Java), French colonies (Caribbean), and the Americas</span>
        </div>
        <div className='flex gap-4 items-start'>
          <span className='font-bold text-amber-600 w-24 flex-shrink-0'>1800s</span>
          <span>Brazil emerges as world&apos;s largest producer; coffee becomes a global commodity</span>
        </div>
        <div className='flex gap-4 items-start'>
          <span className='font-bold text-amber-600 w-24 flex-shrink-0'>1900s</span>
          <span>Instant coffee invented; commercial coffee industry booms</span>
        </div>
        <div className='flex gap-4 items-start'>
          <span className='font-bold text-amber-600 w-24 flex-shrink-0'>1970s-Now</span>
          <span>Specialty coffee movement transforms the industry</span>
        </div>
      </div>

      {/* SECTION 2: THE COFFEE PLANT */}
      <h3 id="coffee-plant" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineSparkles className='text-amber-600' />
        2. Understanding the Coffee Plant
      </h3>

      <p className='my-4'>
        Coffee is an agricultural product before it&apos;s a beverage. Understanding the plant helps you understand why certain coffees taste the way they do and why quality varies so dramatically.
      </p>

      <h4 className='text-xl font-bold mt-6 mb-3'>Plant Anatomy</h4>
      <p className='my-4'>
        The coffee plant is an evergreen shrub or small tree belonging to the genus <span className='font-bold italic'>Coffea</span> in the family Rubiaceae. Here&apos;s what makes it unique:
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-6'>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h5 className='font-bold text-lg mb-2 flex items-center gap-2'><PiTree className='text-green-600' /> The Tree</h5>
          <ul className='space-y-2 text-sm'>
            <li>• Can grow up to 9 meters (30 feet) tall, but usually pruned to 2-3 meters for harvesting</li>
            <li>• Lives 20-30 years commercially; can live 100+ years in the wild</li>
            <li>• Begins producing fruit 3-5 years after planting</li>
            <li>• Peak production occurs between years 7-20</li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h5 className='font-bold text-lg mb-2 flex items-center gap-2'><PiLeaf className='text-green-600' /> The Leaves</h5>
          <ul className='space-y-2 text-sm'>
            <li>• Dark green, waxy, elliptical leaves</li>
            <li>• Grow in pairs along the branches</li>
            <li>• Essential for photosynthesis and plant health</li>
            <li>• Can be brewed as "coffee leaf tea" (cascara alternative)</li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h5 className='font-bold text-lg mb-2 flex items-center gap-2'><PiFlowerLotus className='text-pink-500' /> The Flowers</h5>
          <ul className='space-y-2 text-sm'>
            <li>• Small, white, jasmine-scented flowers</li>
            <li>• Bloom after rainfall (triggering the harvest cycle)</li>
            <li>• Self-pollinating in Arabica; cross-pollinating in Robusta</li>
            <li>• Flowers only last 2-3 days before becoming fruit</li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h5 className='font-bold text-lg mb-2 flex items-center gap-2'><HiOutlineSparkles className='text-red-500' /> The Cherry (Fruit)</h5>
          <ul className='space-y-2 text-sm'>
            <li>• Takes 7-9 months to ripen (Arabica) or 9-11 months (Robusta)</li>
            <li>• Turns from green to yellow to bright red when ripe</li>
            <li>• Each cherry typically contains two seeds (beans)</li>
            <li>• "Peaberry" occurs when only one seed develops (~5% of crop)</li>
          </ul>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-6 mb-3'>Anatomy of the Coffee Cherry</h4>
      <p className='my-4'>
        Understanding the cherry&apos;s layers is essential for understanding processing methods:
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <p className='mb-4 font-bold'>From outside to inside:</p>
        <ol className='space-y-3'>
          <li className='flex gap-3'>
            <span className='font-bold text-amber-600 w-32 flex-shrink-0'>1. Outer Skin</span>
            <span>(Exocarp)   The red/yellow outer layer</span>
          </li>
          <li className='flex gap-3'>
            <span className='font-bold text-amber-600 w-32 flex-shrink-0'>2. Pulp/Mucilage</span>
            <span>(Mesocarp)   Sweet, sticky fruit flesh rich in sugars</span>
          </li>
          <li className='flex gap-3'>
            <span className='font-bold text-amber-600 w-32 flex-shrink-0'>3. Parchment</span>
            <span>(Endocarp)   Papery protective layer around the seed</span>
          </li>
          <li className='flex gap-3'>
            <span className='font-bold text-amber-600 w-32 flex-shrink-0'>4. Silver Skin</span>
            <span>(Spermoderm)   Thin membrane clinging to the bean</span>
          </li>
          <li className='flex gap-3'>
            <span className='font-bold text-amber-600 w-32 flex-shrink-0'>5. The Bean</span>
            <span>(Seed/Endosperm)   What we roast and brew</span>
          </li>
        </ol>
      </div>

      {/* SECTION 3: SPECIES AND VARIETIES */}
      <h3 id="species-varieties" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBeaker className='text-amber-600' />
        3. Coffee Species and Varieties
      </h3>

      <p className='my-4'>
        There are over 120 species in the Coffea genus, but only two dominate global production: <span className='font-bold'>Arabica</span> and <span className='font-bold'>Robusta</span>. Understanding their differences is fundamental to understanding coffee quality.
      </p>

      <h4 className='text-xl font-bold mt-6 mb-3'>Arabica vs. Robusta: The Complete Comparison</h4>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse border border-gray-300 text-sm'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border border-gray-300 p-3 text-left'>Characteristic</th>
              <th className='border border-gray-300 p-3 text-left'>Coffea Arabica</th>
              <th className='border border-gray-300 p-3 text-left'>Coffea Canephora (Robusta)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Market Share</td>
              <td className='border border-gray-300 p-3'>~60-70% of global production</td>
              <td className='border border-gray-300 p-3'>~30-40% of global production</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Origin</td>
              <td className='border border-gray-300 p-3'>Ethiopia</td>
              <td className='border border-gray-300 p-3'>Central/West Africa (Congo, Uganda)</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Caffeine Content</td>
              <td className='border border-gray-300 p-3'>1.2-1.5%</td>
              <td className='border border-gray-300 p-3'>2.2-2.7% (almost double)</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Sugar Content</td>
              <td className='border border-gray-300 p-3'>6-9%</td>
              <td className='border border-gray-300 p-3'>3-7%</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Lipid Content</td>
              <td className='border border-gray-300 p-3'>15-17%</td>
              <td className='border border-gray-300 p-3'>10-11%</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Growing Altitude</td>
              <td className='border border-gray-300 p-3'>1,000-2,200 meters</td>
              <td className='border border-gray-300 p-3'>0-800 meters</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Temperature Range</td>
              <td className='border border-gray-300 p-3'>15-24°C (prefers cooler)</td>
              <td className='border border-gray-300 p-3'>24-30°C (tolerates heat)</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Disease Resistance</td>
              <td className='border border-gray-300 p-3'>Susceptible to leaf rust, CBD</td>
              <td className='border border-gray-300 p-3'>More resistant to pests and disease</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Flavor Profile</td>
              <td className='border border-gray-300 p-3'>Complex, nuanced, fruity, floral, acidic</td>
              <td className='border border-gray-300 p-3'>Earthy, woody, nutty, bitter, full-bodied</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Primary Use</td>
              <td className='border border-gray-300 p-3'>Specialty coffee, premium blends</td>
              <td className='border border-gray-300 p-3'>Instant coffee, espresso blends (for crema/body)</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Bean Shape</td>
              <td className='border border-gray-300 p-3'>Oval, curved crease</td>
              <td className='border border-gray-300 p-3'>Round, straight crease</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Chromosomes</td>
              <td className='border border-gray-300 p-3'>44 (tetraploid)</td>
              <td className='border border-gray-300 p-3'>22 (diploid)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-3'>Key Arabica Varieties</h4>
      <p className='my-4'>
        Within Arabica, hundreds of varieties exist. Here are the most important ones for specialty coffee:
      </p>

      <div className='space-y-4 my-6'>
        <div className='border-l-4 border-amber-500 pl-4'>
          <h5 className='font-bold'>Typica</h5>
          <p className='text-sm text-gray-700'>The original variety from which most others descended. Known for clean, sweet cups with good complexity. Lower yields but exceptional quality. Found in Jamaica (Blue Mountain), Hawaii (Kona), and throughout Latin America.</p>
        </div>
        <div className='border-l-4 border-amber-500 pl-4'>
          <h5 className='font-bold'>Bourbon</h5>
          <p className='text-sm text-gray-700'>Natural mutation of Typica developed on Réunion Island (formerly Bourbon). Complex sweetness, excellent acidity. Parent of many modern varieties. Common in Rwanda, Burundi, and Latin America.</p>
        </div>
        <div className='border-l-4 border-amber-500 pl-4'>
          <h5 className='font-bold'>Gesha/Geisha</h5>
          <p className='text-sm text-gray-700'>Originally from Ethiopia&apos;s Gesha region, made famous by Panama&apos;s Hacienda La Esmeralda. Extraordinary floral, jasmine, bergamot notes. Commands the highest prices at auction. Now grown across many origins.</p>
        </div>
        <div className='border-l-4 border-amber-500 pl-4'>
          <h5 className='font-bold'>SL28 & SL34</h5>
          <p className='text-sm text-gray-700'>Kenyan varieties developed by Scott Laboratories. Intense, complex acidity, blackcurrant, and citrus notes. Drought-resistant but susceptible to disease.</p>
        </div>
        <div className='border-l-4 border-amber-500 pl-4'>
          <h5 className='font-bold'>Caturra</h5>
          <p className='text-sm text-gray-700'>Natural dwarf mutation of Bourbon discovered in Brazil. Higher yields, good quality. Common in Colombia and Central America.</p>
        </div>
        <div className='border-l-4 border-amber-500 pl-4'>
          <h5 className='font-bold'>Catuai</h5>
          <p className='text-sm text-gray-700'>Cross between Caturra and Mundo Novo. High yielding, disease resistant. Widely planted in Brazil.</p>
        </div>
        <div className='border-l-4 border-amber-500 pl-4'>
          <h5 className='font-bold'>Ethiopian Heirloom/Landrace</h5>
          <p className='text-sm text-gray-700'>Collective term for thousands of indigenous varieties in Ethiopia. Genetically diverse, often unnamed. Produce the distinctive floral, fruity, complex profiles Ethiopia is famous for.</p>
        </div>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Why Ethiopian Varieties Matter:</span> Ethiopia&apos;s wild coffee forests contain more genetic diversity than the rest of the world&apos;s coffee combined. This genetic library is essential for breeding disease-resistant, climate-resilient varieties for the future. When you buy Ethiopian coffee, you&apos;re supporting the preservation of this invaluable resource.</span>
        </p>
      </div>

      {/* SECTION 4: GROWING REGIONS */}
      <h3 id="growing-regions" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineMapPin className='text-amber-600' />
        4. Coffee Growing Regions: The Coffee Belt
      </h3>

      <p className='my-4'>
        Coffee grows in a band around the equator known as the <span className='font-bold'>"Coffee Belt"</span> or "Bean Belt," roughly between the Tropics of Cancer and Capricorn (23.5°N to 23.5°S latitude). This zone provides the specific conditions coffee needs: warm temperatures, adequate rainfall, rich soil, and appropriate altitude.
      </p>

      <h4 className='text-xl font-bold mt-6 mb-3'>The Three Main Coffee-Producing Regions</h4>

      <div className='grid md:grid-cols-3 gap-6 my-6'>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h5 className='font-bold text-lg mb-2 text-amber-700 flex items-center gap-2'><HiOutlineGlobeAlt /> Africa & Arabia</h5>
          <p className='text-sm mb-3'>The birthplace of coffee, known for distinctive, complex profiles.</p>
          <ul className='space-y-1 text-sm'>
            <li><span className='font-bold'>Ethiopia:</span> Floral, fruity, wine-like</li>
            <li><span className='font-bold'>Kenya:</span> Bright, complex, blackcurrant</li>
            <li><span className='font-bold'>Rwanda:</span> Clean, sweet, citrus</li>
            <li><span className='font-bold'>Burundi:</span> Juicy, tea-like</li>
            <li><span className='font-bold'>Yemen:</span> Wild, winey, complex</li>
            <li><span className='font-bold'>DR Congo:</span> Full-bodied, fruity</li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h5 className='font-bold text-lg mb-2 text-green-700 flex items-center gap-2'><HiOutlineGlobeAlt /> The Americas</h5>
          <p className='text-sm mb-3'>The largest producing region, known for balanced, approachable profiles.</p>
          <ul className='space-y-1 text-sm'>
            <li><span className='font-bold'>Brazil:</span> Nutty, chocolatey, low acidity</li>
            <li><span className='font-bold'>Colombia:</span> Balanced, caramel, mild acidity</li>
            <li><span className='font-bold'>Guatemala:</span> Chocolate, spice, full-bodied</li>
            <li><span className='font-bold'>Costa Rica:</span> Clean, bright, honey</li>
            <li><span className='font-bold'>Honduras:</span> Fruity, caramel</li>
            <li><span className='font-bold'>Peru:</span> Mild, floral, nutty</li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h5 className='font-bold text-lg mb-2 text-blue-700 flex items-center gap-2'><HiOutlineGlobeAlt /> Asia & Pacific</h5>
          <p className='text-sm mb-3'>Diverse region with unique processing traditions.</p>
          <ul className='space-y-1 text-sm'>
            <li><span className='font-bold'>Indonesia:</span> Earthy, herbal, full-bodied</li>
            <li><span className='font-bold'>Vietnam:</span> Robusta dominant, intense</li>
            <li><span className='font-bold'>India:</span> Spicy, earthy, low acidity</li>
            <li><span className='font-bold'>Papua New Guinea:</span> Fruity, complex</li>
            <li><span className='font-bold'>Myanmar:</span> Emerging, floral</li>
            <li><span className='font-bold'>China (Yunnan):</span> Growing specialty sector</li>
          </ul>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-3'>World&apos;s Top Coffee-Producing Countries (by volume)</h4>
      <div className='my-6 space-y-2'>
        <div className='flex items-center gap-3'>
          <span className='bg-amber-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center'>1</span>
          <span className='font-bold w-24'>Brazil</span>
          <span className='text-gray-600'>~35% of world production</span>
        </div>
        <div className='flex items-center gap-3'>
          <span className='bg-amber-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center'>2</span>
          <span className='font-bold w-24'>Vietnam</span>
          <span className='text-gray-600'>~15% (mostly Robusta)</span>
        </div>
        <div className='flex items-center gap-3'>
          <span className='bg-amber-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center'>3</span>
          <span className='font-bold w-24'>Colombia</span>
          <span className='text-gray-600'>~9% (100% Arabica)</span>
        </div>
        <div className='flex items-center gap-3'>
          <span className='bg-amber-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center'>4</span>
          <span className='font-bold w-24'>Indonesia</span>
          <span className='text-gray-600'>~7%</span>
        </div>
        <div className='flex items-center gap-3'>
          <span className='bg-amber-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center'>5</span>
          <span className='font-bold w-24'>Ethiopia</span>
          <span className='text-gray-600'>~4-5% (but highest quality diversity)</span>
        </div>
      </div>

      {/* SECTION 5: TERROIR */}
      <h3 id="terroir" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineSparkles className='text-amber-600' />
        5. Terroir: How Environment Shapes Flavor
      </h3>

      <p className='my-4'>
        <span className='font-bold'>Terroir</span> (pronounced ter-WAHR) is a French term borrowed from wine that describes how a coffee&apos;s environment—its specific place of origin—shapes its flavor. The same variety grown in different locations will taste distinctly different.
      </p>

      <h4 className='text-xl font-bold mt-6 mb-3'>Key Terroir Factors</h4>

      <div className='space-y-6 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold text-lg mb-2 flex items-center gap-2'><PiMountains className='text-gray-600' /> Altitude</h5>
          <p className='mb-3'>Perhaps the most critical factor for quality. Higher altitudes mean cooler temperatures, slower cherry maturation, and denser beans with more complex sugars.</p>
          <ul className='text-sm space-y-1'>
            <li><span className='font-bold'>Low (below 1,000m):</span> Softer beans, milder flavor, less acidity</li>
            <li><span className='font-bold'>Medium (1,000-1,500m):</span> Good balance, moderate complexity</li>
            <li><span className='font-bold'>High (1,500-2,000m):</span> Dense beans, bright acidity, complex flavors</li>
            <li><span className='font-bold'>Very High (above 2,000m):</span> Exceptional complexity, intense acidity, floral notes (Ethiopian highlands reach 2,200m+)</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold text-lg mb-2 flex items-center gap-2'><PiThermometerHot className='text-orange-500' /> Temperature & Climate</h5>
          <p className='mb-3'>Arabica thrives between 15-24°C (59-75°F). Consistent temperatures without frost are essential. Diurnal variation (temperature difference between day and night) enhances flavor development.</p>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold text-lg mb-2 flex items-center gap-2'><PiCloudRain className='text-blue-500' /> Rainfall</h5>
          <p className='mb-3'>Coffee needs 1,500-2,000mm of rainfall annually, ideally with a distinct dry season for harvesting. Too much rain during harvest causes quality problems; too little stresses the plant.</p>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold text-lg mb-2 flex items-center gap-2'><HiOutlineSquare3Stack3D className='text-amber-700' /> Soil</h5>
          <p className='mb-3'>Volcanic soils are prized for their mineral content and drainage. Different soil compositions contribute different mineral profiles to the cup. Ethiopian soils are particularly diverse due to the country&apos;s geological history.</p>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold text-lg mb-2 flex items-center gap-2'><HiOutlineSun className='text-yellow-500' /> Sun Exposure</h5>
          <p className='mb-3'>Coffee naturally grows as an understory plant in forests. Shade-grown coffee matures more slowly, developing more complex flavors. Full-sun cultivation increases yields but may reduce quality and requires more inputs.</p>
        </div>
      </div>

      {/* SECTION 6: HARVESTING */}
      <h3 id="harvesting" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCalendarDays className='text-amber-600' />
        6. Coffee Harvesting Methods
      </h3>

      <p className='my-4'>
        Coffee cherries don&apos;t ripen uniformly—even on the same branch, you&apos;ll find cherries at different stages. How they&apos;re harvested significantly impacts quality.
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-6'>
        <div className='border border-green-200 rounded-lg p-5 bg-green-50'>
          <h5 className='font-bold text-lg mb-2 flex items-center gap-2'>
            <HiOutlineCheckCircle className='text-green-600' />
            Selective Hand-Picking
          </h5>
          <p className='text-sm mb-3'>
            Pickers return multiple times, selecting only ripe cherries. Labor-intensive but produces the highest quality. Standard for specialty coffee.
          </p>
          <p className='text-sm'><span className='font-bold'>Used in:</span> Ethiopia, Kenya, Colombia, Costa Rica, most specialty origins</p>
        </div>
        <div className='border border-amber-200 rounded-lg p-5 bg-amber-50'>
          <h5 className='font-bold text-lg mb-2 flex items-center gap-2'>
            <HiOutlineArrowPath className='text-amber-600' />
            Strip Picking
          </h5>
          <p className='text-sm mb-3'>
            All cherries stripped from the branch at once, regardless of ripeness. Faster but includes unripe and overripe cherries.
          </p>
          <p className='text-sm'><span className='font-bold'>Used in:</span> Brazil (for commercial grades), large-scale operations</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h5 className='font-bold text-lg mb-2 flex items-center gap-2'>
            <HiOutlineCube className='text-gray-600' />
            Mechanical Harvesting
          </h5>
          <p className='text-sm mb-3'>
            Machines shake or strip cherries from trees. Most efficient but limited to flat terrain and includes all ripeness levels.
          </p>
          <p className='text-sm'><span className='font-bold'>Used in:</span> Brazil, Australia, Hawaii (flat plantation terrain)</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h5 className='font-bold text-lg mb-2'>Harvest Timing</h5>
          <p className='text-sm'>
            Harvest seasons vary by hemisphere and altitude. Ethiopia&apos;s main harvest runs October-January. Most countries have one main harvest, while some equatorial regions (like Colombia and Kenya) have two.
          </p>
        </div>
      </div>

      {/* SECTION 7: PROCESSING */}
      <h3 id="processing" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBeaker className='text-amber-600' />
        7. Coffee Processing: The Transformation
      </h3>

      <p className='my-4'>
        <span className='font-bold'>Processing</span> is how the coffee cherry is transformed into green (exportable) coffee. It&apos;s one of the most significant factors affecting flavor—the same beans processed differently will taste entirely different.
      </p>

      <h4 className='text-xl font-bold mt-6 mb-3'>The Three Primary Processing Methods</h4>

      <div className='space-y-6 my-6'>
        {/* Washed */}
        <div className='border border-blue-200 rounded-lg p-6 bg-blue-50'>
          <h5 className='font-bold text-xl mb-3 text-blue-800 flex items-center gap-2'><PiDropHalfBottom /> Washed (Wet) Processing</h5>
          <p className='mb-4'>
            The most common method for specialty coffee. Produces clean, bright cups that clearly express terroir and variety characteristics.
          </p>
          <div className='bg-white p-4 rounded border border-blue-200 mb-4'>
            <p className='font-bold mb-2'>Process Steps:</p>
            <ol className='text-sm space-y-1 list-decimal ml-4'>
              <li>Cherries depulped (skin and most pulp removed mechanically)</li>
              <li>Fermented in water tanks for 12-72 hours to break down remaining mucilage</li>
              <li>Washed with clean water to remove all fruit material</li>
              <li>Dried on raised beds or patios to 10-12% moisture</li>
              <li>Rested in parchment before milling</li>
            </ol>
          </div>
          <p className='text-sm'><span className='font-bold'>Flavor Profile:</span> Clean, bright acidity, clear origin character, tea-like, floral, citrus notes</p>
          <p className='text-sm mt-2'><span className='font-bold'>Common in:</span> Ethiopia (Yirgacheffe), Kenya, Colombia, Central America</p>
        </div>

        {/* Natural */}
        <div className='border border-red-200 rounded-lg p-6 bg-red-50'>
          <h5 className='font-bold text-xl mb-3 text-red-800 flex items-center gap-2'><HiOutlineSun /> Natural (Dry) Processing</h5>
          <p className='mb-4'>
            The oldest method, predating washed processing. The whole cherry dries intact, allowing fruit sugars to infuse the bean.
          </p>
          <div className='bg-white p-4 rounded border border-red-200 mb-4'>
            <p className='font-bold mb-2'>Process Steps:</p>
            <ol className='text-sm space-y-1 list-decimal ml-4'>
              <li>Whole cherries spread on drying beds or patios</li>
              <li>Turned regularly for even drying (2-4 weeks)</li>
              <li>Dried to 10-12% moisture</li>
              <li>Hulled to remove dried fruit and parchment</li>
            </ol>
          </div>
          <p className='text-sm'><span className='font-bold'>Flavor Profile:</span> Heavy body, fruity, berry, wine-like, fermented notes, lower acidity</p>
          <p className='text-sm mt-2'><span className='font-bold'>Common in:</span> Ethiopia (Sidamo, Guji), Brazil, Yemen</p>
        </div>

        {/* Honey */}
        <div className='border border-amber-200 rounded-lg p-6 bg-amber-50'>
          <h5 className='font-bold text-xl mb-3 text-amber-800 flex items-center gap-2'><HiOutlineSparkles /> Honey (Pulped Natural) Processing</h5>
          <p className='mb-4'>
            A hybrid method where skin is removed but some or all mucilage remains during drying. Creates a spectrum of results.
          </p>
          <div className='bg-white p-4 rounded border border-amber-200 mb-4'>
            <p className='font-bold mb-2'>Process Steps:</p>
            <ol className='text-sm space-y-1 list-decimal ml-4'>
              <li>Cherries depulped with varying amounts of mucilage left on</li>
              <li>Dried with mucilage intact (the sticky "honey")</li>
              <li>Amount of mucilage determines type: White, Yellow, Red, or Black Honey</li>
              <li>Dried to 10-12% moisture</li>
            </ol>
          </div>
          <p className='text-sm'><span className='font-bold'>Flavor Profile:</span> Balanced sweetness, moderate acidity, fruity but cleaner than natural</p>
          <p className='text-sm mt-2'><span className='font-bold'>Common in:</span> Costa Rica, El Salvador, Brazil</p>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-3'>Experimental & Innovative Processing</h4>
      <p className='my-4'>
        The specialty coffee industry is constantly innovating with processing. Modern techniques include:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Anaerobic Fermentation:</span> Fermentation in sealed, oxygen-free tanks creates intense, unique flavors</li>
        <li><span className='font-bold'>Carbonic Maceration:</span> Borrowed from wine, whole cherries fermented in CO2-rich environment</li>
        <li><span className='font-bold'>Extended Fermentation:</span> Longer fermentation times for more pronounced fruit flavors</li>
        <li><span className='font-bold'>Yeast Inoculation:</span> Introducing specific yeast strains to control fermentation</li>
        <li><span className='font-bold'>Thermal Shock:</span> Temperature manipulation during fermentation</li>
        <li><span className='font-bold'>Infusion Processing:</span> Adding fruits, spices, or other ingredients during fermentation (controversial)</li>
      </ul>

      {/* SECTION 8: GRADING */}
      <h3 id="grading" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineScale className='text-amber-600' />
        8. Coffee Grading and Quality Standards
      </h3>

      <p className='my-4'>
        Coffee grading systems vary by country but generally assess two main dimensions: <span className='font-bold'>physical quality</span> (defects, size, density) and <span className='font-bold'>cup quality</span> (taste evaluation through cupping).
      </p>

      <h4 className='text-xl font-bold mt-6 mb-3'>Ethiopian Grading System</h4>
      <p className='my-4'>
        Ethiopia uses a unique grading system managed by the Ethiopia Commodity Exchange (ECX):
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse border border-gray-300 text-sm'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border border-gray-300 p-3 text-left'>Grade</th>
              <th className='border border-gray-300 p-3 text-left'>Defects (per 300g)</th>
              <th className='border border-gray-300 p-3 text-left'>Cup Score</th>
              <th className='border border-gray-300 p-3 text-left'>Quality Level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Grade 1</td>
              <td className='border border-gray-300 p-3'>0-3</td>
              <td className='border border-gray-300 p-3'>85+</td>
              <td className='border border-gray-300 p-3'>Specialty</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Grade 2</td>
              <td className='border border-gray-300 p-3'>4-12</td>
              <td className='border border-gray-300 p-3'>80-84</td>
              <td className='border border-gray-300 p-3'>Specialty/Premium</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Grade 3</td>
              <td className='border border-gray-300 p-3'>13-25</td>
              <td className='border border-gray-300 p-3'>75-79</td>
              <td className='border border-gray-300 p-3'>Commercial</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Grade 4</td>
              <td className='border border-gray-300 p-3'>26-45</td>
              <td className='border border-gray-300 p-3'>70-74</td>
              <td className='border border-gray-300 p-3'>Commercial</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Grade 5</td>
              <td className='border border-gray-300 p-3'>46-100</td>
              <td className='border border-gray-300 p-3'>&lt;70</td>
              <td className='border border-gray-300 p-3'>Below Commercial</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-3'>SCA Specialty Coffee Standards</h4>
      <p className='my-4'>
        The Specialty Coffee Association (SCA) defines specialty coffee as scoring 80+ points on a 100-point scale during professional cupping. The evaluation covers:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Fragrance/Aroma:</span> Dry and wet aromatics</li>
        <li><span className='font-bold'>Flavor:</span> Overall taste character</li>
        <li><span className='font-bold'>Aftertaste:</span> Length and quality of finish</li>
        <li><span className='font-bold'>Acidity:</span> Brightness, quality, and intensity</li>
        <li><span className='font-bold'>Body:</span> Weight and texture in the mouth</li>
        <li><span className='font-bold'>Balance:</span> How components work together</li>
        <li><span className='font-bold'>Uniformity:</span> Consistency across cups</li>
        <li><span className='font-bold'>Clean Cup:</span> Freedom from defects</li>
        <li><span className='font-bold'>Sweetness:</span> Presence of sweetness</li>
        <li><span className='font-bold'>Overall:</span> Holistic impression</li>
      </ul>

      <p className='my-4'>
        <span className='font-bold'>Note:</span> The SCA has introduced the new <Link href="/insights/new-sca-coffee-value-assessment" className='text-blue-600 underline'>Coffee Value Assessment (CVA)</Link> system, which provides a more comprehensive, multi-dimensional evaluation beyond the traditional 100-point score.
      </p>

      {/* SECTION 9: ROASTING */}
      <h3 id="roasting" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineFire className='text-amber-600' />
        9. The Art and Science of Roasting
      </h3>

      <p className='my-4'>
        Roasting is the transformative process that turns green coffee into the aromatic brown beans we know. It&apos;s where potential becomes flavor through carefully controlled heat application.
      </p>

      <h4 className='text-xl font-bold mt-6 mb-3'>What Happens During Roasting</h4>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <div className='space-y-4'>
          <div className='flex gap-4'>
            <span className='font-bold text-amber-600 w-36 flex-shrink-0'>0-5 min</span>
            <div>
              <span className='font-bold'>Drying Phase:</span> Moisture evaporates, beans turn from green to yellow. Internal temperature reaches 150°C (302°F).
            </div>
          </div>
          <div className='flex gap-4'>
            <span className='font-bold text-amber-600 w-36 flex-shrink-0'>5-8 min</span>
            <div>
              <span className='font-bold'>Maillard Reaction:</span> Sugars and amino acids react, creating browning and flavor compounds. The "bread-like" aroma develops.
            </div>
          </div>
          <div className='flex gap-4'>
            <span className='font-bold text-amber-600 w-36 flex-shrink-0'>8-10 min</span>
            <div>
              <span className='font-bold'>First Crack:</span> Internal pressure causes beans to expand and crack audibly (like popcorn). Beans reach light roast level. Temperature ~196°C (385°F).
            </div>
          </div>
          <div className='flex gap-4'>
            <span className='font-bold text-amber-600 w-36 flex-shrink-0'>10-12 min</span>
            <div>
              <span className='font-bold'>Development:</span> Flavors continue developing. Medium roast range. Origin characteristics begin blending with roast flavors.
            </div>
          </div>
          <div className='flex gap-4'>
            <span className='font-bold text-amber-600 w-36 flex-shrink-0'>12-14 min</span>
            <div>
              <span className='font-bold'>Second Crack:</span> Oils migrate to surface, more cracking. Dark roast level. ~224°C (435°F). Origin flavors largely replaced by roast flavors.
            </div>
          </div>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-6 mb-3'>Roast Levels Explained</h4>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-4'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineSun className='text-yellow-400' /> Light Roast</h5>
          <p className='text-sm mb-2'>Stopped at or shortly after first crack.</p>
          <p className='text-sm'><span className='font-bold'>Character:</span> Highest acidity, most origin character, fruity, floral, tea-like. Preferred for specialty single origins.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-4'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineCloud className='text-amber-400' /> Medium Roast</h5>
          <p className='text-sm mb-2'>Between first and second crack.</p>
          <p className='text-sm'><span className='font-bold'>Character:</span> Balanced acidity and body, origin and roast flavors blend. Good for versatile brewing.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-4'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineFire className='text-orange-500' /> Medium-Dark Roast</h5>
          <p className='text-sm mb-2'>At or just into second crack.</p>
          <p className='text-sm'><span className='font-bold'>Character:</span> Lower acidity, fuller body, chocolate and caramel notes, some origin character remains.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-4'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineMoon className='text-gray-700' /> Dark Roast</h5>
          <p className='text-sm mb-2'>Well into or past second crack.</p>
          <p className='text-sm'><span className='font-bold'>Character:</span> Very low acidity, heavy body, smoky, bitter, charred notes. Origin characteristics largely obscured.</p>
        </div>
      </div>

      {/* SECTION 10: TASTING */}
      <h3 id="tasting" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineStar className='text-amber-600' />
        10. How to Taste Coffee Like a Professional
      </h3>

      <p className='my-4'>
        <span className='font-bold'>Cupping</span> is the standardized method professionals use to evaluate coffee. Understanding how to taste coffee systematically helps you appreciate quality differences and make better buying decisions.
      </p>

      <h4 className='text-xl font-bold mt-6 mb-3'>The SCA Cupping Protocol (Simplified)</h4>

      <ol className='my-4 space-y-3'>
        <li className='flex gap-3'>
          <span className='font-bold text-amber-600'>1.</span>
          <span><span className='font-bold'>Weigh:</span> 8.25g of freshly roasted coffee per 150ml of water</span>
        </li>
        <li className='flex gap-3'>
          <span className='font-bold text-amber-600'>2.</span>
          <span><span className='font-bold'>Grind:</span> Medium-coarse, just before cupping</span>
        </li>
        <li className='flex gap-3'>
          <span className='font-bold text-amber-600'>3.</span>
          <span><span className='font-bold'>Smell Dry:</span> Evaluate fragrance of dry grounds</span>
        </li>
        <li className='flex gap-3'>
          <span className='font-bold text-amber-600'>4.</span>
          <span><span className='font-bold'>Add Water:</span> Pour 200°F (93°C) water, steep 4 minutes</span>
        </li>
        <li className='flex gap-3'>
          <span className='font-bold text-amber-600'>5.</span>
          <span><span className='font-bold'>Break Crust:</span> Push grounds aside with spoon, evaluate wet aroma</span>
        </li>
        <li className='flex gap-3'>
          <span className='font-bold text-amber-600'>6.</span>
          <span><span className='font-bold'>Skim:</span> Remove floating grounds</span>
        </li>
        <li className='flex gap-3'>
          <span className='font-bold text-amber-600'>7.</span>
          <span><span className='font-bold'>Slurp:</span> Aspirate coffee across palate to evaluate flavor, acidity, body</span>
        </li>
        <li className='flex gap-3'>
          <span className='font-bold text-amber-600'>8.</span>
          <span><span className='font-bold'>Evaluate:</span> Note flavor, aftertaste, acidity, body, balance, overall impression</span>
        </li>
      </ol>

      <h4 className='text-xl font-bold mt-8 mb-3'>Coffee Flavor Vocabulary</h4>
      <p className='my-4'>
        The <span className='font-bold'>SCA/WCR Flavor Wheel</span> provides standardized vocabulary for describing coffee. Key categories include:
      </p>

      <div className='grid md:grid-cols-3 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-4'>
          <h5 className='font-bold mb-2'>Fruity</h5>
          <p className='text-sm text-gray-600'>Berry (blueberry, strawberry, blackberry), Citrus (lemon, orange, grapefruit), Stone fruit (peach, apricot), Tropical (mango, pineapple)</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-4'>
          <h5 className='font-bold mb-2'>Floral</h5>
          <p className='text-sm text-gray-600'>Jasmine, rose, lavender, chamomile, honeysuckle, orange blossom</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-4'>
          <h5 className='font-bold mb-2'>Sweet</h5>
          <p className='text-sm text-gray-600'>Brown sugar, honey, maple, caramel, vanilla, molasses, chocolate</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-4'>
          <h5 className='font-bold mb-2'>Nutty/Cocoa</h5>
          <p className='text-sm text-gray-600'>Almond, hazelnut, peanut, dark chocolate, milk chocolate, cocoa</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-4'>
          <h5 className='font-bold mb-2'>Spicy</h5>
          <p className='text-sm text-gray-600'>Cinnamon, clove, nutmeg, black pepper, cardamom, ginger</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-4'>
          <h5 className='font-bold mb-2'>Roasted</h5>
          <p className='text-sm text-gray-600'>Toast, grain, malt, tobacco, smoky, ashy, burnt</p>
        </div>
      </div>

      {/* SECTION 11: BREWING */}
      <h3 id="brewing" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBeaker className='text-amber-600' />
        11. Brewing Fundamentals
      </h3>

      <p className='my-4'>
        Great coffee can be ruined by poor brewing. Understanding the fundamentals helps you extract the best from any coffee.
      </p>

      <h4 className='text-xl font-bold mt-6 mb-3'>The Four Variables of Brewing</h4>

      <div className='grid md:grid-cols-2 gap-6 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold text-lg mb-2'>1. Ratio (Dose)</h5>
          <p className='text-sm mb-2'>How much coffee to water. The "golden ratio" is approximately:</p>
          <ul className='text-sm space-y-1'>
            <li>• <span className='font-bold'>Filter:</span> 1:15 to 1:17 (60-70g per liter)</li>
            <li>• <span className='font-bold'>Espresso:</span> 1:2 to 1:2.5 (18g in, 36-45g out)</li>
            <li>• <span className='font-bold'>Cold Brew:</span> 1:8 to 1:15 (stronger = shorter steep)</li>
          </ul>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold text-lg mb-2'>2. Grind Size</h5>
          <p className='text-sm mb-2'>Affects extraction rate—finer = faster extraction:</p>
          <ul className='text-sm space-y-1'>
            <li>• <span className='font-bold'>Coarse:</span> French press, cold brew</li>
            <li>• <span className='font-bold'>Medium:</span> Pour over, drip</li>
            <li>• <span className='font-bold'>Fine:</span> Espresso, Moka pot, AeroPress</li>
            <li>• <span className='font-bold'>Extra Fine:</span> Turkish coffee</li>
          </ul>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold text-lg mb-2'>3. Water Temperature</h5>
          <p className='text-sm mb-2'>Affects extraction speed and what compounds extract:</p>
          <ul className='text-sm space-y-1'>
            <li>• <span className='font-bold'>Optimal range:</span> 90-96°C (195-205°F)</li>
            <li>• <span className='font-bold'>Too hot:</span> Over-extracts, bitter, harsh</li>
            <li>• <span className='font-bold'>Too cold:</span> Under-extracts, sour, weak</li>
            <li>• <span className='font-bold'>Light roasts:</span> Benefit from hotter water</li>
          </ul>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold text-lg mb-2'>4. Time</h5>
          <p className='text-sm mb-2'>Contact time between water and coffee:</p>
          <ul className='text-sm space-y-1'>
            <li>• <span className='font-bold'>Espresso:</span> 25-35 seconds</li>
            <li>• <span className='font-bold'>Pour Over:</span> 2:30-4:00 minutes</li>
            <li>• <span className='font-bold'>French Press:</span> 4:00 minutes</li>
            <li>• <span className='font-bold'>Cold Brew:</span> 12-24 hours</li>
          </ul>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-6 mb-3'>Popular Brewing Methods</h4>

      <div className='space-y-4 my-6'>
        <div className='border-l-4 border-amber-500 pl-4'>
          <h5 className='font-bold'>Pour Over (V60, Chemex, Kalita)</h5>
          <p className='text-sm text-gray-700'>Manual brewing that offers control over every variable. Produces clean, nuanced cups that highlight origin character. Ideal for light-roasted specialty coffees.</p>
        </div>
        <div className='border-l-4 border-amber-500 pl-4'>
          <h5 className='font-bold'>Espresso</h5>
          <p className='text-sm text-gray-700'>High-pressure extraction (9 bars) through finely ground coffee. Concentrated, intense, forms the base for milk drinks. Requires significant equipment investment.</p>
        </div>
        <div className='border-l-4 border-amber-500 pl-4'>
          <h5 className='font-bold'>French Press (Plunger)</h5>
          <p className='text-sm text-gray-700'>Full immersion brewing with metal filter. Full-bodied, oils and fine particles remain in cup. Forgiving and consistent.</p>
        </div>
        <div className='border-l-4 border-amber-500 pl-4'>
          <h5 className='font-bold'>AeroPress</h5>
          <p className='text-sm text-gray-700'>Versatile, portable, affordable. Can produce espresso-style concentrate or clean filter-style coffee. Huge recipe variation possible.</p>
        </div>
        <div className='border-l-4 border-amber-500 pl-4'>
          <h5 className='font-bold'>Cold Brew</h5>
          <p className='text-sm text-gray-700'>Coarse grounds steeped in cold water 12-24 hours. Smooth, low acidity, naturally sweet. Different chemical extraction than hot methods.</p>
        </div>
      </div>

      {/* SECTION 12: SPECIALTY VS COMMERCIAL */}
      <h3 id="specialty-vs-commercial" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineStar className='text-amber-600' />
        12. Specialty Coffee vs. Commercial Coffee
      </h3>

      <p className='my-4'>
        What actually separates a $4 specialty single-origin from a $0.50 gas station cup? The differences span the entire supply chain.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse border border-gray-300 text-sm'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border border-gray-300 p-3 text-left'>Aspect</th>
              <th className='border border-gray-300 p-3 text-left'>Specialty Coffee</th>
              <th className='border border-gray-300 p-3 text-left'>Commercial Coffee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Quality Score</td>
              <td className='border border-gray-300 p-3'>80+ points (SCA scale)</td>
              <td className='border border-gray-300 p-3'>Below 80 points</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Species</td>
              <td className='border border-gray-300 p-3'>100% Arabica</td>
              <td className='border border-gray-300 p-3'>Often Robusta or blends</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Harvesting</td>
              <td className='border border-gray-300 p-3'>Selective hand-picking</td>
              <td className='border border-gray-300 p-3'>Strip picking or mechanical</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Processing</td>
              <td className='border border-gray-300 p-3'>Careful, quality-focused</td>
              <td className='border border-gray-300 p-3'>Volume-focused</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Traceability</td>
              <td className='border border-gray-300 p-3'>Farm/lot level</td>
              <td className='border border-gray-300 p-3'>Country or region at best</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Roast Date</td>
              <td className='border border-gray-300 p-3'>Clearly stated, recent</td>
              <td className='border border-gray-300 p-3'>Often unstated, months old</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Roast Level</td>
              <td className='border border-gray-300 p-3'>Light to medium (shows origin)</td>
              <td className='border border-gray-300 p-3'>Dark (hides defects)</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Flavor Goal</td>
              <td className='border border-gray-300 p-3'>Complexity, distinctiveness</td>
              <td className='border border-gray-300 p-3'>Consistency, familiarity</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Farmer Payment</td>
              <td className='border border-gray-300 p-3'>Premium prices above market</td>
              <td className='border border-gray-300 p-3'>Commodity market prices</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 13: SUPPLY CHAIN */}
      <h3 id="supply-chain" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineArrowPath className='text-amber-600' />
        13. The Coffee Supply Chain
      </h3>

      <p className='my-4'>
        Coffee travels through many hands before reaching your cup. Understanding this journey helps appreciate the complexity and the people involved.
      </p>

      <div className='my-6 space-y-4'>
        <div className='flex items-start gap-4 bg-gray-50 p-4 rounded-lg'>
          <span className='bg-amber-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0'>1</span>
          <div>
            <h5 className='font-bold'>Farmer/Producer</h5>
            <p className='text-sm'>Grows, harvests, and often does initial processing. May be a smallholder with &lt;2 hectares or a large estate.</p>
          </div>
        </div>
        <div className='flex items-start gap-4 bg-gray-50 p-4 rounded-lg'>
          <span className='bg-amber-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0'>2</span>
          <div>
            <h5 className='font-bold'>Washing Station/Mill</h5>
            <p className='text-sm'>Processes cherry into parchment coffee. In Ethiopia, may be cooperative-owned or private.</p>
          </div>
        </div>
        <div className='flex items-start gap-4 bg-gray-50 p-4 rounded-lg'>
          <span className='bg-amber-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0'>3</span>
          <div>
            <h5 className='font-bold'>Dry Mill</h5>
            <p className='text-sm'>Removes parchment, sorts by size/density, grades, and prepares for export.</p>
          </div>
        </div>
        <div className='flex items-start gap-4 bg-gray-50 p-4 rounded-lg'>
          <span className='bg-amber-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0'>4</span>
          <div>
            <h5 className='font-bold'>Exporter</h5>
            <p className='text-sm'>Handles documentation, quality control, logistics, and international sales. In Ethiopia, works with ECX or direct trade channels.</p>
          </div>
        </div>
        <div className='flex items-start gap-4 bg-gray-50 p-4 rounded-lg'>
          <span className='bg-amber-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0'>5</span>
          <div>
            <h5 className='font-bold'>Importer</h5>
            <p className='text-sm'>Brings coffee into consuming country, handles customs, warehousing, and distribution to roasters.</p>
          </div>
        </div>
        <div className='flex items-start gap-4 bg-gray-50 p-4 rounded-lg'>
          <span className='bg-amber-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0'>6</span>
          <div>
            <h5 className='font-bold'>Roaster</h5>
            <p className='text-sm'>Transforms green coffee into roasted product. May sell wholesale or direct to consumer.</p>
          </div>
        </div>
        <div className='flex items-start gap-4 bg-gray-50 p-4 rounded-lg'>
          <span className='bg-amber-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0'>7</span>
          <div>
            <h5 className='font-bold'>Café/Retailer</h5>
            <p className='text-sm'>Brews and serves coffee to consumers, or sells bags of roasted coffee.</p>
          </div>
        </div>
        <div className='flex items-start gap-4 bg-gray-50 p-4 rounded-lg'>
          <span className='bg-amber-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0'>8</span>
          <div>
            <h5 className='font-bold'>Consumer</h5>
            <p className='text-sm'>Enjoys the final cup—the end of a journey that started on a farm often thousands of miles away.</p>
          </div>
        </div>
      </div>

      {/* SECTION 14: SUSTAINABILITY */}
      <h3 id="sustainability" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineGlobeAlt className='text-amber-600' />
        14. Sustainability and the Future of Coffee
      </h3>

      <p className='my-4'>
        Coffee faces significant challenges that threaten its future. Understanding these issues helps you make more informed, responsible choices.
      </p>

      <h4 className='text-xl font-bold mt-6 mb-3'>Major Challenges</h4>

      <div className='space-y-4 my-6'>
        <div className='bg-red-50 p-5 rounded-lg border border-red-200'>
          <h5 className='font-bold text-red-800 mb-2 flex items-center gap-2'><PiThermometerHot /> Climate Change</h5>
          <p className='text-sm'>Rising temperatures are pushing viable coffee-growing zones higher in altitude. By 2050, up to 50% of current Arabica-growing land may become unsuitable. Ethiopia&apos;s highlands are among the most vulnerable.</p>
        </div>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold text-amber-800 mb-2 flex items-center gap-2'><HiOutlineBanknotes /> Price Volatility</h5>
          <p className='text-sm'>Commodity prices fluctuate wildly, making it difficult for farmers to plan and invest. Many smallholders earn below the cost of production, leading to farm abandonment and aging farmer populations.</p>
        </div>
        <div className='bg-orange-50 p-5 rounded-lg border border-orange-200'>
          <h5 className='font-bold text-orange-800 mb-2 flex items-center gap-2'><HiOutlineExclamationTriangle /> Disease Pressure</h5>
          <p className='text-sm'>Coffee Leaf Rust (la roya) and Coffee Berry Disease threaten crops globally. Arabica&apos;s limited genetic diversity makes it particularly vulnerable. Climate change is expanding disease ranges.</p>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold mb-2 flex items-center gap-2'><HiOutlineUserGroup className='text-gray-600' /> Labor Challenges</h5>
          <p className='text-sm'>Younger generations are leaving coffee farming for urban opportunities. Harvesting remains labor-intensive and seasonal. Fair wages and working conditions remain issues in many regions.</p>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-3'>What You Can Do</h4>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <ul className='space-y-3'>
          <li className='flex gap-3 items-start'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-bold'>Buy specialty coffee:</span> Higher prices flow back to producers and incentivize quality over volume.</span>
          </li>
          <li className='flex gap-3 items-start'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-bold'>Look for transparency:</span> Support roasters who share information about their sourcing and farmer relationships.</span>
          </li>
          <li className='flex gap-3 items-start'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-bold'>Consider certifications:</span> Fair Trade, Rainforest Alliance, and organic certifications address different aspects of sustainability.</span>
          </li>
          <li className='flex gap-3 items-start'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-bold'>Value diversity:</span> Supporting coffees from Ethiopia helps preserve invaluable genetic resources for the future.</span>
          </li>
          <li className='flex gap-3 items-start'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-bold'>Reduce waste:</span> Buy only what you&apos;ll use fresh, compost grounds, choose reusable filters.</span>
          </li>
        </ul>
      </div>

      {/* CONCLUSION */}
      <div className='bg-dark text-primary p-6 rounded-lg my-8'>
        <h4 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineDocumentText className='text-2xl' />
          Conclusion: Coffee Is a Journey
        </h4>
        <p className='mb-3'>
          Coffee is one of the most complex, fascinating products humans have ever created. From its discovery in Ethiopia&apos;s ancient forests to the cutting-edge science of modern roasting and brewing, every cup represents an extraordinary journey of transformation.
        </p>
        <p className='mb-3'>
          Understanding coffee deeply—its origins, cultivation, processing, trading, roasting, and brewing—transforms how you experience it. You&apos;re no longer just drinking a beverage; you&apos;re participating in a global story that connects millions of farmers, traders, roasters, and coffee lovers.
        </p>
        <p>
          Whether you&apos;re a casual coffee drinker looking to appreciate your morning cup more fully, or a professional seeking to deepen your expertise, the journey of coffee knowledge never ends. There&apos;s always more to learn, taste, and discover.
        </p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Key Takeaways
      </h3>
      <div className='my-6 space-y-3'>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>Coffee originated in Ethiopia and spread globally over 1,000+ years—Ethiopian coffee forests contain irreplaceable genetic diversity</p>
        </div>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>Arabica and Robusta are the two main species; Arabica dominates specialty coffee for its complex, nuanced flavors</p>
        </div>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>Terroir (altitude, climate, soil) significantly affects coffee flavor—high-altitude Ethiopian coffees are prized worldwide</p>
        </div>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>Processing method (washed, natural, honey) dramatically changes the cup profile of the same coffee</p>
        </div>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>Specialty coffee scores 80+ points and represents the top tier of quality, traceability, and farmer value</p>
        </div>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>Roasting transforms green coffee through chemical reactions—lighter roasts preserve origin character</p>
        </div>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>Brewing variables (ratio, grind, temperature, time) must be balanced for optimal extraction</p>
        </div>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>Climate change, price volatility, and disease pressure threaten coffee&apos;s future—supporting quality and sustainability matters</p>
        </div>
      </div>

      <hr className="my-8 border-gray-200" />

      <div className='bg-gray-50 p-6 rounded-lg my-6'>
        <h4 className='font-bold text-lg mb-3'>Continue Your Coffee Education:</h4>
        <ul className='space-y-2 text-sm'>
          <li>• <Link href="/insights/new-sca-coffee-value-assessment" className='text-blue-600 underline'>The New SCA Coffee Value Assessment: Beyond the 100-Point Score</Link></li>
          <li>• <Link href="/insights/ecx-and-ethiopian-coffee-export" className='text-blue-600 underline'>Understanding the Ethiopia Commodity Exchange (ECX)</Link></li>
          <li>• <Link href="/insights/green-coffee-quality-control-defects-grading" className='text-blue-600 underline'>Green Coffee Quality Control: Defects, Grading & What to Inspect</Link></li>
          <li>• <Link href="/insights/yirgacheffe-vs-sidamo-vs-guji-comparison" className='text-blue-600 underline'>Yirgacheffe vs. Sidamo vs. Guji: Which Ethiopian Coffee Is Right for You?</Link></li>
          <li>• <Link href="/insights/washed-vs-natural-ethiopian-coffee-processing" className='text-blue-600 underline'>Washed vs. Natural Processed Ethiopian Coffee</Link></li>
        </ul>
      </div>

      <p className='my-4 text-sm text-gray-600 italic'>
        This guide was written by coffee professionals with years of experience in Ethiopian coffee export and specialty coffee sourcing. For questions about sourcing Ethiopian green coffee, <Link href="/contact-us" className='text-blue-600 underline'>contact our team</Link>.
      </p>
    </>
  )
}

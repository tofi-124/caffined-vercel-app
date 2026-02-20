import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineGlobeAlt,
  HiOutlineQuestionMarkCircle,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiOutlineBeaker,
  HiOutlineScale,
  HiOutlineCurrencyDollar,
  HiOutlineCalendarDays,
  HiOutlineShoppingCart,
  HiOutlineUserGroup
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopianCoffeeVsColombianCoffee({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Flavor profiles, processing methods, grading systems, pricing, and sourcing guidance for importers and roasters comparing the world&apos;s two most celebrated Arabica origins.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Ethiopian and Colombian coffees represent two distinct approaches to specialty Arabica, each shaped by unique terroir, genetics, and trade systems.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian coffee vs Colombian coffee comparison showing green coffee beans from both origins'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Origin Comparison / Sourcing Guide / Green Coffee / Importer Resources</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Key Takeaway:</span> Ethiopian coffee vs Colombian coffee is not a question of quality; both origins produce world-class specialty Arabica. The difference lies in flavor character, genetic diversity, processing traditions, and trade structure. Ethiopian coffees offer intense floral, fruit, and citrus complexity from thousands of heirloom varieties. Colombian coffees deliver consistent, balanced profiles with chocolate, caramel, and mild fruit from well-documented cultivars. For importers and roasters, the choice depends on your program: Ethiopian origins excel in single-origin filter and experimental lots, while Colombian origins anchor espresso blends and high-volume consistency. Many buyers source both.</span>
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href="#quick-comparison" className='text-amber-700 hover:underline'>1. Quick Comparison Table</a></li>
          <li><a href="#origin-terroir" className='text-amber-700 hover:underline'>2. Origin and Terroir</a></li>
          <li><a href="#flavor-profiles" className='text-amber-700 hover:underline'>3. Flavor Profiles Compared</a></li>
          <li><a href="#processing-methods" className='text-amber-700 hover:underline'>4. Processing Methods</a></li>
          <li><a href="#grading-quality" className='text-amber-700 hover:underline'>5. Grading and Quality Systems</a></li>
          <li><a href="#production-export" className='text-amber-700 hover:underline'>6. Production and Export Data</a></li>
          <li><a href="#pricing-cost" className='text-amber-700 hover:underline'>7. Pricing and Cost for Buyers</a></li>
          <li><a href="#seasonal-windows" className='text-amber-700 hover:underline'>8. Seasonal Availability and Buying Windows</a></li>
          <li><a href="#which-origin" className='text-amber-700 hover:underline'>9. Which Origin Fits Your Business?</a></li>
          <li><a href="#faq" className='text-amber-700 hover:underline'>10. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRODUCTION */}
      <p className='my-4'>
        <span className='font-bold'>Ethiopian coffee vs Colombian coffee</span> is one of the most searched comparisons in the specialty coffee industry, and for good reason. Ethiopia is the biological birthplace of Coffea arabica, home to thousands of genetically distinct heirloom varieties that produce some of the most complex, aromatic coffees on earth. Colombia, the world&apos;s third-largest coffee producer, built its reputation on consistency, clean cup profiles, and a well-organized supply chain that has served as a global benchmark for quality Arabica.
      </p>

      <p className='my-4'>
        Most online comparisons of these two origins focus on consumer preferences and retail brewing tips. This guide takes a different approach. It is written for importers, roasters, and green coffee buyers who need to understand the trade-level differences: grading systems, FOB pricing, seasonal availability, contract structures, and which origin fits specific business models. If you source green coffee professionally, this is the comparison that matters.
      </p>

      {/* SECTION 1: QUICK COMPARISON TABLE */}
      <h2 id="quick-comparison" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineScale className='text-amber-600' />
        Quick Comparison Table
      </h2>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Attribute</th>
              <th className='p-3 text-left font-bold'>Ethiopia</th>
              <th className='p-3 text-left font-bold'>Colombia</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Species</td>
              <td className='p-3'>100% Arabica</td>
              <td className='p-3'>Predominantly Arabica (small Robusta pockets)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Variety diversity</td>
              <td className='p-3'>6,000+ heirloom landraces and JARC varieties</td>
              <td className='p-3'>Castillo, Caturra, Colombia, Cenicafe 1, Tabi, Typica</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Altitude</td>
              <td className='p-3'>1,500 to 2,200 m</td>
              <td className='p-3'>1,200 to 2,000 m</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Primary flavor character</td>
              <td className='p-3'>Floral, fruit, citrus, wine-like, tea-like</td>
              <td className='p-3'>Chocolate, caramel, red fruit, nutty, balanced</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Acidity</td>
              <td className='p-3'>High, bright (malic, citric)</td>
              <td className='p-3'>Medium to high, balanced (citric, malic)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Body</td>
              <td className='p-3'>Light to medium</td>
              <td className='p-3'>Medium</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Processing</td>
              <td className='p-3'>Natural (~60%), washed (~35%), honey (emerging)</td>
              <td className='p-3'>Washed (~85%), natural and honey (growing)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Grading system</td>
              <td className='p-3'>ECX: G1 to G5 (defect count + cup score)</td>
              <td className='p-3'>FNC screen size: Supremo (17+), Excelso (14-16.5)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Annual production (ICO 2024/25)</td>
              <td className='p-3'>~7.8 million bags (60 kg)</td>
              <td className='p-3'>~12.6 million bags (60 kg)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Main harvest</td>
              <td className='p-3'>October to February</td>
              <td className='p-3'>October to January (main); April to July (mitaca)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Export port</td>
              <td className='p-3'>Djibouti</td>
              <td className='p-3'>Buenaventura, Cartagena, Santa Marta</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold'>Typical FOB range (specialty)</td>
              <td className='p-3'>$3.50 to $7.00+ per lb</td>
              <td className='p-3'>$3.00 to $5.50+ per lb</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 2: ORIGIN AND TERROIR */}
      <h2 id="origin-terroir" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineGlobeAlt className='text-amber-600' />
        Origin and Terroir
      </h2>

      <h3 className='text-xl font-bold mt-6'>Ethiopia&apos;s Coffee Geography</h3>

      <p className='my-4'>
        Ethiopia is where Coffea arabica evolved. The southwestern highlands, primarily the Kaffa and Jimma zones, still contain wild coffee forests with genetic diversity unmatched anywhere on earth. The <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='underline font-bold'>Ethiopian heirloom varieties</Link> grown across the country number in the thousands, most of them uncharacterized and simply labeled &quot;heirloom&quot; on export documents. The Jimma Agricultural Research Center (JARC) has released named cultivars like 74110, 74112, and Gesha (originally collected from Gesha village in Kaffa), but the vast majority of production comes from unnamed landraces.
      </p>

      <p className='my-4'>
        Key growing regions include <Link href='/ethiopian-coffee-yirgacheffe' className='underline font-bold'>Yirgacheffe</Link> (1,750 to 2,200 m; floral, citrus, tea-like), <Link href='/ethiopian-coffee-sidamo' className='underline font-bold'>Sidamo</Link> (1,550 to 2,200 m; berry, stone fruit, complex), <Link href='/ethiopian-coffee-guji' className='underline font-bold'>Guji</Link> (1,800 to 2,300 m; tropical fruit, jasmine, intense sweetness), <Link href='/ethiopian-coffee-harar' className='underline font-bold'>Harrar</Link> (1,500 to 2,100 m; blueberry, wine, dried fruit), and <Link href='/ethiopian-coffee-limu' className='underline font-bold'>Limu</Link> (1,400 to 2,000 m; balanced, honeyed, spice). Each zone produces coffees with distinct profiles driven by altitude, microclimate, soil composition, and the specific landrace population in each forest or garden.
      </p>

      <p className='my-4'>
        Ethiopian coffee farms are overwhelmingly smallholder: more than 4 million farming households cultivate an average of less than 0.5 hectares each. Most production is organic by default because farmers cannot afford synthetic inputs. The country produces 100% Arabica, making it the world&apos;s largest source of genetically diverse Arabica coffee.
      </p>

      <h3 className='text-xl font-bold mt-6'>Colombia&apos;s Coffee Geography</h3>

      <p className='my-4'>
        Colombia&apos;s coffee industry is centered in the Andes mountain range, stretching across 22 departments. The most recognized specialty regions are Huila (the largest producing department, known for bright acidity and fruit-forward profiles), Nari&ntilde;o (extreme southern Andes, high altitude, intensely sweet), Antioquia (balanced, chocolatey), Tolima, Cauca, and the Coffee Axis (Eje Cafetero: Caldas, Risaralda, Quind&iacute;o).
      </p>

      <p className='my-4'>
        The country&apos;s terroir benefits from stable year-round temperatures, abundant rainfall, and volcanic soils rich in minerals. Unlike Ethiopia, Colombia has two annual harvests in many regions: the main harvest (cosecha principal, October to January) and the mid-crop (mitaca or traviesa, April to July). This dual harvest gives importers access to fresher crop coffee for more months of the year.
      </p>

      <p className='my-4'>
        Colombian coffee is produced by roughly 540,000 coffee-growing families. The Federaci&oacute;n Nacional de Cafeteros (FNC) has played a central role in quality standardization, research (through Cenicafe), and global marketing since 1927. This institutional support gives Colombia a more organized, standardized supply chain compared to Ethiopia&apos;s more fragmented structure.
      </p>

      {/* SECTION 3: FLAVOR PROFILES */}
      <h2 id="flavor-profiles" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineBeaker className='text-amber-600' />
        Flavor Profiles Compared
      </h2>

      <h3 className='text-xl font-bold mt-6'>Ethiopian Coffee Tasting Notes</h3>

      <p className='my-4'>
        Ethiopian coffees are prized for aromatic intensity and flavor complexity. The combination of genetic diversity and high-altitude terroir produces cups that range from delicate jasmine and bergamot (washed Yirgacheffe) to explosive blueberry and tropical fruit (natural Guji). Common descriptors across regions include: floral (jasmine, honeysuckle), citrus (lemon, bergamot, tangerine), stone fruit (peach, apricot), berry (blueberry, strawberry, blackcurrant), and tea-like body. Acidity tends to be high and bright, driven by malic and citric acids. Body is typically light to medium, with a clean, silky mouthfeel in washed lots and a fuller, syrupy texture in naturals.
      </p>

      <p className='my-4'>
        The range of flavor across Ethiopian regions is enormous. A washed Yirgacheffe Kochere and a natural Harrar Longberry taste like coffees from different continents. For roasters, this diversity is both an opportunity and a challenge: it means Ethiopian coffees can anchor single-origin programs with distinct profiles, but lot-to-lot variation requires careful <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='underline font-bold'>sample evaluation</Link> before committing.
      </p>

      <h3 className='text-xl font-bold mt-6'>Colombian Coffee Tasting Notes</h3>

      <p className='my-4'>
        Colombian coffees are valued for balance, sweetness, and approachability. The typical specialty Colombian cup features chocolate (milk chocolate, cacao), caramel, brown sugar, red fruit (cherry, red grape), and mild citric acidity. Body is medium, with a smooth, rounded mouthfeel. Compared to Ethiopian coffees, Colombian profiles tend to be more centered and predictable, which is exactly what many roasters need for espresso blends and high-volume single-origin programs.
      </p>

      <p className='my-4'>
        Regional variation exists but is more subtle than in Ethiopia. Huila coffees show brighter acidity and more fruit complexity. Nari&ntilde;o lots can reach cupping scores above 88 with pronounced sweetness and citrus. The Coffee Axis departments produce the classic &quot;Colombian profile&quot; that consumers worldwide associate with the origin: clean, sweet, balanced.
      </p>

      <h3 className='text-xl font-bold mt-6'>Side-by-Side Flavor Table</h3>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Attribute</th>
              <th className='p-3 text-left font-bold'>Ethiopian Coffee</th>
              <th className='p-3 text-left font-bold'>Colombian Coffee</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Dominant flavor</td>
              <td className='p-3'>Floral, fruit, citrus</td>
              <td className='p-3'>Chocolate, caramel, mild fruit</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Acidity type</td>
              <td className='p-3'>Bright, sparkling (malic, citric, phosphoric)</td>
              <td className='p-3'>Balanced, smooth (citric, malic)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Body</td>
              <td className='p-3'>Light to medium, silky or syrupy</td>
              <td className='p-3'>Medium, rounded, creamy</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Sweetness</td>
              <td className='p-3'>Fruit-driven (honey, stone fruit, berry)</td>
              <td className='p-3'>Sugar-driven (caramel, brown sugar, panela)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Aftertaste</td>
              <td className='p-3'>Lingering floral and citrus, tea-like finish</td>
              <td className='p-3'>Chocolate, toffee, clean finish</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold'>Best cupping scores</td>
              <td className='p-3'>86 to 92+ (competition lots exceed 90)</td>
              <td className='p-3'>84 to 90+ (Nari&ntilde;o and Huila top lots)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 4: PROCESSING METHODS */}
      <h2 id="processing-methods" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineCheckCircle className='text-amber-600' />
        Processing Methods
      </h2>

      <p className='my-4'>
        Processing is where the flavor gap between these two origins widens most dramatically.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Ethiopia</span> uses both natural (dry) and <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='underline font-bold'>washed (wet) processing</Link> at roughly a 60/40 split. Natural processing, where the whole coffee cherry dries on raised beds with the fruit intact, produces the bold, fruity, wine-like profiles that define Ethiopian naturals. Washed processing, which removes the fruit before drying, yields cleaner, more transparent cups where terroir and varietal character come through clearly. Ethiopian honey-processed coffees are emerging but still represent a small fraction of exports. Fermentation practices vary widely between washing stations, and this variation is part of what makes Ethiopian coffees so distinctive. The downside is less consistency between lots.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Colombia</span> is historically a washed-coffee country. Roughly 85% of production uses the fully washed method: pulped, fermented, washed, and dried on patios or mechanical dryers. This produces the clean, balanced Colombian profile the market knows. In recent years, however, Colombian producers have adopted natural, honey, and experimental fermentation methods at scale, particularly in Huila, Cauca, and Nari&ntilde;o. Anaerobic fermentation, carbonic maceration, thermal shock, and other techniques are now common in Colombian specialty lots. This shift means Colombia&apos;s flavor ceiling has risen significantly, and some experimental Colombian coffees now rival Ethiopian naturals in complexity.
      </p>

      <p className='my-4'>
        For buyers, the processing difference means: Ethiopian coffees deliver natural processing at origin-level expertise built over centuries, while Colombian coffees offer a wider range of modern, controlled fermentation methods with better documentation and repeatability.
      </p>

      {/* SECTION 5: GRADING AND QUALITY */}
      <h2 id="grading-quality" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineChartBar className='text-amber-600' />
        Grading and Quality Systems
      </h2>

      <p className='my-4'>
        Understanding how each country grades green coffee is essential for buyers writing purchase contracts. The systems are fundamentally different.
      </p>

      <h3 className='text-xl font-bold mt-6'>Ethiopian Grading (ECX System)</h3>

      <p className='my-4'>
        Ethiopia grades coffee through the <Link href='/insights/ecx-and-ethiopian-coffee-export' className='underline font-bold'>Ethiopia Commodity Exchange (ECX)</Link> system. Grades range from G1 (highest) to G5 (lowest), determined by a combination of physical defect count and cupping score.
      </p>

      <ul className='list-disc pl-6 space-y-2 my-4'>
        <li><span className='font-bold'>Grade 1 (G1):</span> 0 to 3 defects per 300g sample. Specialty grade. Required cupping score of 85+ for Q1 designation.</li>
        <li><span className='font-bold'>Grade 2 (G2):</span> 4 to 12 defects. High commercial to specialty. Many excellent lots grade G2 due to minor physical defects despite cupping above 84.</li>
        <li><span className='font-bold'>Grade 3 (G3):</span> 13 to 25 defects. Standard commercial grade.</li>
        <li><span className='font-bold'>Grades 4 and 5:</span> Higher defect counts. Used for domestic consumption and lower-tier export markets.</li>
      </ul>

      <p className='my-4'>
        Ethiopian grading is performed at ECX-certified Coffee Liquoring Units (CLUs). Coffees are classified by region (Yirgacheffe, Sidamo, Guji, Harrar, Limu, Jimma, etc.) and processing method (washed or natural). A typical contract specification reads: &quot;Yirgacheffe G1 Washed&quot; or &quot;Guji G1 Natural.&quot; Learn more about grading standards in our <Link href='/insights/green-coffee-quality-control-defects-grading' className='underline font-bold'>green coffee quality control guide</Link>.
      </p>

      <h3 className='text-xl font-bold mt-6'>Colombian Grading (FNC System)</h3>

      <p className='my-4'>
        Colombia grades coffee primarily by bean size (screen size), with additional quality categories defined by the Federaci&oacute;n Nacional de Cafeteros (FNC):
      </p>

      <ul className='list-disc pl-6 space-y-2 my-4'>
        <li><span className='font-bold'>Supremo:</span> Screen 17 and above (large beans). Top commercial grade.</li>
        <li><span className='font-bold'>Excelso:</span> Screen 14 to 16.5. Standard export grade. Most international trade.</li>
        <li><span className='font-bold'>UGQ (Usual Good Quality):</span> Mix of screen sizes meeting minimum standards.</li>
        <li><span className='font-bold'>EP (European Preparation):</span> Excelso that has been hand-sorted to remove defects, commonly required by European importers.</li>
      </ul>

      <p className='my-4'>
        Beyond screen size, specialty Colombian lots are sold by cupping score, farm or cooperative name, department, and variety. The FNC&apos;s quality infrastructure includes Almacaf&eacute; (quality control and storage) and a nationwide network of cooperatives with lab facilities. This structure makes Colombian green coffee highly standardized, which is why many importers find it easier to write repeat contracts for Colombian coffee than for Ethiopian.
      </p>

      {/* SECTION 6: PRODUCTION AND EXPORT */}
      <h2 id="production-export" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineChartBar className='text-amber-600' />
        Production and Export Data
      </h2>

      <p className='my-4'>
        Both countries are major global players, but at different scales.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Metric</th>
              <th className='p-3 text-left font-bold'>Ethiopia</th>
              <th className='p-3 text-left font-bold'>Colombia</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Global rank (production)</td>
              <td className='p-3'>5th (Africa&apos;s largest)</td>
              <td className='p-3'>3rd (South America&apos;s 2nd)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Annual production</td>
              <td className='p-3'>~7.8 million bags (60 kg)</td>
              <td className='p-3'>~12.6 million bags (60 kg)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Export volume (2024/25 est.)</td>
              <td className='p-3'>~4.0 million bags</td>
              <td className='p-3'>~11.5 million bags</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Domestic consumption</td>
              <td className='p-3'>~50% of production (one of the highest globally)</td>
              <td className='p-3'>~15% of production</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Farming households</td>
              <td className='p-3'>4+ million smallholders</td>
              <td className='p-3'>~540,000 families</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold'>Top export destinations</td>
              <td className='p-3'>Germany, Saudi Arabia, Japan, USA, China</td>
              <td className='p-3'>USA, Japan, Germany, Canada, Belgium</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        A critical difference: Ethiopia consumes roughly half of its own coffee production domestically, making exportable supply tighter relative to total production. Colombia exports the vast majority of what it grows. This structural difference affects availability, pricing, and lead times for international buyers. For detailed Ethiopian trade data, see our <Link href='/insights/top-ethiopian-coffee-importers-buyers-2024-2025' className='underline font-bold'>top Ethiopian coffee importers report</Link>.
      </p>

      {/* SECTION 7: PRICING AND COST */}
      <h2 id="pricing-cost" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineCurrencyDollar className='text-amber-600' />
        Pricing and Cost for Buyers
      </h2>

      <p className='my-4'>
        Green coffee pricing for both origins is anchored to the ICE New York C-market (Arabica futures), but the mechanisms differ.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Ethiopian coffee pricing</span> is set through ECX indicative prices and direct negotiation between exporters and importers. The ECX publishes daily minimum prices by region, grade, and processing method, which serve as floor prices. Specialty lots trade at significant premiums above these floors. FOB Djibouti prices for specialty Ethiopian coffee typically range from $3.50 to $7.00+ per pound, depending on region, grade, and season. Prices for competition-grade lots (Q1, 87+ cupping score) can exceed $8.00 per pound. For a full breakdown, see our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='underline font-bold'>Ethiopian coffee pricing guide</Link>.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Colombian coffee pricing</span> is more directly tied to C-market differentials. Exporters quote prices as C-market plus a differential (e.g., +$0.15 to +$0.40 per pound for Excelso EP, higher for specialty). FOB Buenaventura or Cartagena prices for specialty Colombian lots typically range from $3.00 to $5.50+ per pound, with top experimental lots commanding premiums comparable to Ethiopian specialty.
      </p>

      <p className='my-4'>
        For importers comparing landed costs: Ethiopian coffee typically ships via Djibouti (the country is landlocked), adding transit time and cost. A 20-foot container of Ethiopian coffee shipped FOB Djibouti to a northern European port takes 18 to 25 days. Colombian coffee ships directly from Pacific (Buenaventura) or Atlantic (Cartagena, Santa Marta) ports, reaching the US East Coast in 5 to 10 days and Europe in 12 to 18 days. These logistics differences affect landed cost and inventory planning. For detailed contract and payment guidance, see our <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='underline font-bold'>contracts and payment terms guide</Link>.
      </p>

      {/* SECTION 8: SEASONAL WINDOWS */}
      <h2 id="seasonal-windows" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineCalendarDays className='text-amber-600' />
        Seasonal Availability and Buying Windows
      </h2>

      <p className='my-4'>
        Timing matters when sourcing from either origin. Fresh-crop availability directly affects cup quality, and green coffee quality degrades over time even with proper <Link href='/insights/green-coffee-shelf-life-storage-guide' className='underline font-bold'>storage</Link>.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Phase</th>
              <th className='p-3 text-left font-bold'>Ethiopia</th>
              <th className='p-3 text-left font-bold'>Colombia</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Main harvest</td>
              <td className='p-3'>October to February</td>
              <td className='p-3'>October to January (main crop)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Secondary harvest</td>
              <td className='p-3'>None (single harvest)</td>
              <td className='p-3'>April to July (mitaca/fly crop)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Processing and milling</td>
              <td className='p-3'>December to April</td>
              <td className='p-3'>Year-round (staggered by region)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Fresh crop availability (export)</td>
              <td className='p-3'>February to June</td>
              <td className='p-3'>Main: January to May; Mitaca: July to October</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold'>Best buying window</td>
              <td className='p-3'>March to May (widest selection, freshest lots)</td>
              <td className='p-3'>February to April (main); August to September (mitaca)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Colombia&apos;s dual harvest is a significant advantage for importers who need year-round supply of fresh crop coffee. Ethiopia has a single main harvest, so buyers must plan purchases within a tighter window and manage inventory accordingly. For current season details, see our <Link href='/insights/ethiopian-coffee-harvest-2025-season-outlook' className='underline font-bold'>Ethiopian harvest outlook</Link>.
      </p>

      {/* SECTION 9: WHICH ORIGIN FITS YOUR BUSINESS */}
      <h2 id="which-origin" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineShoppingCart className='text-amber-600' />
        Which Origin Fits Your Business?
      </h2>

      <h3 className='text-xl font-bold mt-6'>For Specialty Roasters</h3>

      <p className='my-4'>
        If your business is built on distinctive single-origin offerings with story and complexity, Ethiopian coffee is difficult to beat. The combination of heirloom genetics, high altitude, and diverse processing methods produces cups that generate genuine excitement at the cupping table. Yirgacheffe washed, Guji natural, and Sidamo honey lots are the kind of coffees that earn 90+ cupping scores and command premium retail prices. The trade-off is more lot-to-lot variation and shorter seasonal availability.
      </p>

      <h3 className='text-xl font-bold mt-6'>For Espresso and Blend Programs</h3>

      <p className='my-4'>
        Colombian coffee is often the backbone of espresso blends for good reason. Its balanced acidity, medium body, chocolate and caramel sweetness, and smooth finish provide a reliable base that pairs well with other origins. Consistent screen sizes and standardized processing make it easier to maintain blend profiles across multiple shipments. Many roasters use Colombian Excelso EP or Supremo as their base and add Ethiopian natural or washed lots as a complexity component.
      </p>

      <h3 className='text-xl font-bold mt-6'>For Blending</h3>

      <p className='my-4'>
        The two origins complement each other exceptionally well. A common specialty blend formula: Colombian coffee provides the body, sweetness, and chocolate foundation (50 to 60%), while Ethiopian coffee adds aromatic complexity, brightness, and a distinctive fruity top note (20 to 30%). Many successful roasters source both origins and rotate their Ethiopian component seasonally to keep the blend fresh.
      </p>

      <p className='my-4'>
        For guidance on finding the right Ethiopian export partner, see our <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='underline font-bold'>sourcing guide</Link> and <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='underline font-bold'>MOQ guide for importers</Link>.
      </p>

      {/* SECTION 10: FAQ */}
      <h2 id="faq" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineQuestionMarkCircle className='text-amber-600' />
        Frequently Asked Questions
      </h2>

      <section className='my-6 space-y-6'>
        <div>
          <h4 className="font-bold text-gray-800 mb-2">Is Ethiopian coffee better than Colombian coffee?</h4>
          <p className="text-sm text-gray-600">Neither is objectively &quot;better.&quot; Ethiopian coffee offers more aromatic complexity and flavor diversity. Colombian coffee offers more consistency and balance. The right choice depends on your business model: single-origin programs that prioritize uniqueness favor Ethiopian; espresso blends and high-volume programs that prioritize reliability favor Colombian. Many professional buyers source both.</p>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 mb-2">Is Ethiopian or Colombian coffee more acidic?</h4>
          <p className="text-sm text-gray-600">Ethiopian coffee generally has higher perceived acidity, particularly washed lots from Yirgacheffe and Guji. The acidity tends to be bright, sparkling, and citric. Colombian coffee has moderate acidity that is more balanced and less pronounced. For customers who prefer lower acidity, Colombian washed coffees or Ethiopian naturals (which tend to be less acidic than washed) are the better fit.</p>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 mb-2">Which has more caffeine, Ethiopian or Colombian coffee?</h4>
          <p className="text-sm text-gray-600">Caffeine content in Arabica coffee ranges from 1.0% to 1.7% by dry weight, regardless of origin. The difference between Ethiopian and Colombian beans is negligible. Brewing method, grind size, water temperature, and extraction time affect caffeine in the cup far more than origin does. Both are 100% Arabica, which contains roughly half the caffeine of Robusta.</p>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 mb-2">Which origin is better for espresso?</h4>
          <p className="text-sm text-gray-600">Colombian coffee is traditionally preferred as an espresso base because its medium body, balanced acidity, and chocolate-caramel sweetness perform well under pressure extraction. Ethiopian coffees can make exceptional single-origin espresso (Yirgacheffe produces bright, floral shots; natural Guji produces intensely fruity ones), but they require more careful dialing-in and may not suit all customer palates. Many roasters blend both: Colombian for the base, Ethiopian for aromatic lift.</p>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 mb-2">Which country produces more coffee?</h4>
          <p className="text-sm text-gray-600">Colombia produces approximately 12.6 million 60-kg bags per year (2024/25 estimate), making it the world&apos;s third-largest producer after Brazil and Vietnam. Ethiopia produces approximately 7.8 million bags, ranking fifth globally. However, Ethiopia consumes roughly half its production domestically, so exportable supply is considerably tighter. Colombia exports over 90% of what it grows.</p>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 mb-2">Can I blend Ethiopian and Colombian coffee together?</h4>
          <p className="text-sm text-gray-600">Yes, and many specialty roasters do. The two origins complement each other: Colombian provides the balanced, chocolatey base and body, while Ethiopian adds floral and fruit top notes that differentiate the blend. A common ratio is 50 to 60% Colombian, 20 to 30% Ethiopian, with the remainder from a third origin for additional depth. The key is matching roast profiles, since Ethiopian coffees typically roast lighter than Colombian.</p>
        </div>
      </section>

      {/* CTA */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Premium Ethiopian Coffee Direct from Origin</h4>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Export PLC</span> supplies traceable specialty green coffee from Yirgacheffe, Sidamo, Guji, Harrar, and Limu. Whether you source Ethiopian coffee as a single origin or to complement your Colombian program, we provide pre-shipment samples, professional cupping scores, full lot documentation, and competitive FOB Djibouti pricing.
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
            <h4 className='font-semibold mb-2 text-sm'>Origins &amp; Varieties</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Green Coffee Origins</Link></li>
              <li>&bull; <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji Compared</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Heirloom Ethiopian Coffee Varieties</Link></li>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-vs-kenyan-coffee' className='text-amber-700 hover:underline'>Ethiopian Coffee vs Kenyan Coffee</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Pricing &amp; Market</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Pricing for Importers</Link></li>
              <li>&bull; <Link href='/insights/rising-ethiopian-coffee-prices-explained' className='text-amber-700 hover:underline'>Rising Ethiopian Coffee Prices Explained</Link></li>
              <li>&bull; <Link href='/insights/top-ethiopian-coffee-importers-buyers-2024-2025' className='text-amber-700 hover:underline'>Top Ethiopian Coffee Importers 2024/2025</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality &amp; Grading</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality: Defects &amp; Grading</Link></li>
              <li>&bull; <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup and Evaluate Ethiopian Samples</Link></li>
              <li>&bull; <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Ethiopian Coffee MOQ Guide for Importers</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts &amp; Payment Terms</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Export PLC. This comparison draws on data from the International Coffee Organization (ICO), USDA Foreign Agricultural Service, the Ethiopia Commodity Exchange (ECX), the Federaci&oacute;n Nacional de Cafeteros de Colombia (FNC), and our direct experience as Ethiopian green coffee exporters. Market prices and production estimates evolve; contact us for current sourcing options.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot; <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> &middot; <Link href='/about' className='underline'>About Ethio Coffee</Link> &middot; <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

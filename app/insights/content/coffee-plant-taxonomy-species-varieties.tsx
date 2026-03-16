import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { HiOutlineBeaker, HiOutlineEye, HiOutlineGlobeAlt, HiOutlineSparkles, HiOutlineRectangleGroup, HiOutlineMapPin, HiOutlineBriefcase, HiOutlineLightBulb, HiOutlineClipboardDocumentList, HiOutlineQuestionMarkCircle } from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function CoffeePlantTaxonomySpeciesVarieties({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        A buyer&apos;s guide to coffee botany: from genus Coffea to the varieties on your offer sheet
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Coffee is an agricultural product first: a tropical woody understory perennial whose genetics set the ceiling for everything a roaster or importer can achieve in the cup.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Coffee plant taxonomy and botany showing Coffea arabica branches with ripe cherries in Ethiopian highland forest'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Coffee Education / Coffee Is Series / Part 1 of 6</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />
          Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Coffee plant taxonomy is not just academic; it directly shapes sourcing decisions. Arabica originated from a single hybridization event between <em>C. canephora</em> and <em>C. eugenioides</em>, creating a genetic bottleneck that limits the species&apos; ability to adapt. Ethiopia&apos;s 10,000 to 15,000 heirloom varieties represent the deepest genetic reservoir on Earth for Arabica, which is why Ethiopian coffees express a range of flavors no other origin can match. For importers and roasters, understanding coffee taxonomy means understanding why variety selection, growing conditions, and origin matter more than any other variable in the supply chain.
        </p>
      </div>

      {/* SERIES NAV */}
      <div className='my-4 text-sm bg-gray-50 p-4 rounded-lg border border-gray-200'>
        <span className='font-semibold'>Part of the &quot;Coffee Is&quot; Series:</span>
        <div className='flex flex-wrap gap-2 mt-2'>
          <span className='bg-dark text-primary px-2 py-1 rounded text-xs font-bold'>1. Plant (You are here)</span>
          <Link href='/insights/coffee-is-agriculture-production-farming' className='text-amber-700 hover:underline text-xs'>2. Agriculture</Link>
          <Link href='/insights/coffee-is-processing-drying-milling' className='text-amber-700 hover:underline text-xs'>3. Processing</Link>
          <Link href='/insights/coffee-is-commerce-exporting-importing-buying' className='text-amber-700 hover:underline text-xs'>4. Commerce</Link>
          <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='text-amber-700 hover:underline text-xs'>5. Science</Link>
          <Link href='/insights/coffee-is-art-roasting-brewing' className='text-amber-700 hover:underline text-xs'>6. Art</Link>
        </div>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#taxonomy' className='text-amber-700 hover:underline'>1. Coffee&apos;s Taxonomic Classification</a></li>
          <li><a href='#anatomy' className='text-amber-700 hover:underline'>2. Anatomy of the Coffee Cherry</a></li>
          <li><a href='#species' className='text-amber-700 hover:underline'>3. Coffee Species: Arabica, Robusta &amp; Beyond</a></li>
          <li><a href='#arabica-origin' className='text-amber-700 hover:underline'>4. The Arabica Story: A Unique Hybrid</a></li>
          <li><a href='#varieties' className='text-amber-700 hover:underline'>5. Coffee Variety Groups: A Buyer&apos;s Framework</a></li>
          <li><a href='#habitat' className='text-amber-700 hover:underline'>6. Coffee&apos;s Habitat and the Coffee Belt</a></li>
          <li><a href='#buyer-implications' className='text-amber-700 hover:underline'>7. Why Taxonomy Matters for Green Coffee Buyers</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>8. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRO */}
      <p className='my-4'>
        Coffee plant taxonomy determines what ends up in your cup. Before coffee is roasted, brewed, or poured, it is a living organism with specific genetic constraints, a complex anatomy, and an evolutionary history that shapes every bean on every offer sheet. For importers evaluating a <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline font-bold'>sourcing program from Ethiopia</Link>, the difference between an heirloom landrace from Guji and a Bourbon cultivar from Central America is not just flavor. It is a difference rooted in plant biology.
      </p>
      <p className='my-4'>
        This guide covers coffee&apos;s classification from kingdom to genus, the anatomy of the cherry, the key species and their commercial roles, Arabica&apos;s unique hybrid origin, the four major variety groups, and the practical implications for buyers and roasters. It is the first installment in our six-part &quot;Coffee Is&quot; series, covering the plant itself before moving into <Link href='/insights/coffee-is-agriculture-production-farming' className='text-amber-700 hover:underline'>agriculture</Link>, <Link href='/insights/coffee-is-processing-drying-milling' className='text-amber-700 hover:underline'>processing</Link>, <Link href='/insights/coffee-is-commerce-exporting-importing-buying' className='text-amber-700 hover:underline'>commerce</Link>, <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='text-amber-700 hover:underline'>science</Link>, and <Link href='/insights/coffee-is-art-roasting-brewing' className='text-amber-700 hover:underline'>art</Link>.
      </p>

      {/* SECTION 1: TAXONOMY */}
      <h2 id='taxonomy' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineBeaker className='text-amber-600' />
        1. Coffee&apos;s Taxonomic Classification
      </h2>

      <p className='my-4'>
        Taxonomy is the system of classifying organisms. Coffee has been studied taxonomically since 1713, when French naturalist Antoine de Jussieu described it in the Botanical Gardens of Amsterdam, calling it <em>Jasminum arabicum</em>. In 1737, Carl Linnaeus placed coffee in its own genus: <span className='font-bold'>Coffea</span>. For green coffee buyers, taxonomy is practical, not academic. When you see &quot;heirloom&quot; on an <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline font-bold'>Ethiopian lot</Link>, you are looking at varieties that evolved naturally within this taxonomic framework over millennia. The plant&apos;s genetics set the ceiling; everything else works within those botanical boundaries.
      </p>

      <h3 className='text-xl font-bold mt-6'>
        From Kingdom to Genus
      </h3>
      <ul className='font-inconsolata my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Kingdom Plantae:</span> Coffee is a land plant.</li>
        <li><span className='font-bold'>Phylum Tracheophyta:</span> A vascular plant with roots, stems, leaves, and seeds. Xylem and phloem transport water, sugars, and nutrients throughout the organism.</li>
        <li><span className='font-bold'>Class Magnoliopsida:</span> A flowering dicotyledon that germinates with two seed leaves and produces flowers. All flowering plants bear fruit.</li>
        <li><span className='font-bold'>Order Gentianales:</span> Plants in this order have opposing leaves; wherever one leaf sprouts, another sprouts from the same point.</li>
        <li><span className='font-bold'>Family Rubiaceae:</span> The fourth-largest flowering plant family, containing 600 genera and over 13,000 species, including cinchona (quinine), gardenia, and various timber trees.</li>
        <li><span className='font-bold'>Genus Coffea:</span> Opposite-leaved, evergreen shrubs or small understory trees with a horizontal branching pattern, containing paired seeds flat on one side with a groove (the &quot;coffee beans&quot;). Over 130 identified species.</li>
      </ul>

      <h3 className='text-xl font-bold mt-6'>
        Coffee Plant Characteristics
      </h3>
      <p className='my-4'>
        Plants within genus Coffea share these traits:
      </p>
      <ul className='font-inconsolata my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Evergreen leaves:</span> The leaves remain green year-round with no seasonal color change.</li>
        <li><span className='font-bold'>White, fragrant flowers:</span> Five-petaled, tubular flowers with radial symmetry. They open after a rainy season and last only a few days.</li>
        <li><span className='font-bold'>Opposing branches:</span> Primary branches grow in opposing pairs from the orthotropic (central) stem, with secondary and tertiary growth possible.</li>
        <li><span className='font-bold'>Tropical woody understory perennials:</span> Coffee lives beneath the forest canopy in high humidity and moderate light. It can survive 100+ years but is most productive from years 7 to 20.</li>
      </ul>

      <div className='bg-blue-50 p-6 rounded-lg my-6 border border-blue-200'>
        <h4 className='font-bold text-lg mb-2'>Is Coffee a Tree, Shrub, or Herb?</h4>
        <p className='my-2 text-sm'>
          Coffee is technically a <span className='font-bold'>tree</span>, specifically a &quot;treelet&quot; or small tree. The distinction matters: herbs are not woody (no bark, no tree rings). Shrubs have multiple branches from the base with no primary trunk. Trees have one primary trunk from which all branches grow. Coffee has a single orthotropic trunk, making it a tree that is often pruned to shrub height for easier harvesting.
        </p>
      </div>

      {/* SECTION 2: ANATOMY */}
      <h2 id='anatomy' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineEye className='text-amber-600' />
        2. Anatomy of the Coffee Cherry
      </h2>

      <p className='my-4'>
        The &quot;coffee cherry&quot; is technically a <span className='font-bold'>drupe</span>, a stone fruit like plums, olives, or almonds. Its layered anatomy directly determines how <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline font-bold'>processing methods</Link> affect flavor. When a producer chooses natural processing, they leave all layers intact during drying; sugars in the mucilage ferment and infuse into the seed, creating the fruit-forward profiles typical of Ethiopian naturals. Washed processing strips the fruit away, letting the seed&apos;s inherent character come through with clarity.
      </p>

      <h3 className='text-xl font-bold mt-6'>
        Cherry Layers
      </h3>
      <ul className='font-inconsolata my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Exocarp (skin):</span> The protective outer layer, green for most of its life, turning yellow then red as it ripens. Color at harvest is a primary indicator of cherry maturity during <Link href='/insights/selective-coffee-harvesting' className='text-amber-700 hover:underline'>selective picking</Link>.</li>
        <li><span className='font-bold'>Mesocarp (mucilage):</span> A hydrogel rich in sugars, pectin, acids, and oils. Higher altitudes increase dry matter content, which partly explains why higher-grown coffees often score better.</li>
        <li><span className='font-bold'>Endocarp (parchment):</span> A shell of crisscrossing cellulose that protects the seed and holds moisture necessary for germination. It is removed during <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='text-amber-700 hover:underline'>dry milling</Link> before export.</li>
        <li><span className='font-bold'>Perisperm (silver skin):</span> A thin nutritive layer that transports compounds from fruit to seed. Its color helps identify ripeness during sorting. Often visible as chaff during roasting.</li>
      </ul>

      <h3 className='text-xl font-bold mt-6'>
        The Coffee Seed: Why Coffee Is Chemically Unique
      </h3>
      <p className='my-4'>
        The endosperm, the main tissue of the seed, contains the chemical precursors to everything we taste in coffee. Most plant seeds contain mainly starch, oil, and protein. Coffee is anomalously abundant in the variety of compounds within its cell walls: chlorogenic acids, trigonelline, caffeine, sucrose, lipids, and over 300 volatile aromatic precursors. This chemical complexity is why coffee is one of the most flavor-diverse ingredients on Earth; you cannot simply roast other seeds and replicate the result.
      </p>

      <h3 className='text-xl font-bold mt-6'>
        Root Structure
      </h3>
      <p className='my-4'>
        Coffee roots include a central tap root (0.5 to 1 meter deep), lateral roots spreading across the top 5 to 20 cm of topsoil, axial roots branching from the tap root, and feeder roots with root hairs responsible for 98% of water uptake. Root hairs shed and regrow daily. This shallow root architecture makes coffee sensitive to soil quality and moisture levels, which is why terroir differences between regions like <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe, Sidamo, and Guji</Link> express so distinctly in the cup.
      </p>

      {/* SECTION 3: SPECIES */}
      <h2 id='species' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineGlobeAlt className='text-amber-600' />
        3. Coffee Species: Arabica, Robusta &amp; Beyond
      </h2>

      <p className='my-4'>
        Genetic studies have continually expanded the species count within genus Coffea. A 1997 study identified 37 species. A 2007 study adopted an entire subgenus into the genus. Twenty species have been characterized in the last 15 years alone. Current consensus puts the number at approximately <span className='font-bold'>130 species</span>, according to the <a href='https://sca.coffee/research/coffee-plants-of-the-world' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>SCA&apos;s Coffee Plants of the World</a> reference. Commercially, three species matter: <span className='font-bold'>Coffea arabica</span> (Arabica), <span className='font-bold'>Coffea canephora</span> (Robusta), and increasingly, <span className='font-bold'>Coffea liberica</span> (Liberica).
      </p>

      <h3 className='text-xl font-bold mt-6'>
        Arabica vs. Robusta at a Glance
      </h3>
      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border-collapse'>
          <thead className='bg-dark text-primary'>
            <tr>
              <th className='border border-gray-300 p-3 text-left'>Characteristic</th>
              <th className='border border-gray-300 p-3 text-left'>Arabica</th>
              <th className='border border-gray-300 p-3 text-left'>Robusta</th>
            </tr>
          </thead>
          <tbody className='font-inconsolata'>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Global Production Share</td>
              <td className='border border-gray-300 p-3'>~55-60%</td>
              <td className='border border-gray-300 p-3'>~40-45%</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Chromosomes</td>
              <td className='border border-gray-300 p-3'>44 (allotetraploid)</td>
              <td className='border border-gray-300 p-3'>22 (diploid)</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Optimal Elevation</td>
              <td className='border border-gray-300 p-3'>1,000-2,200m+</td>
              <td className='border border-gray-300 p-3'>0-800m</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Temperature Range</td>
              <td className='border border-gray-300 p-3'>15-24{'\u00B0'}C</td>
              <td className='border border-gray-300 p-3'>24-30{'\u00B0'}C</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Shade Requirement</td>
              <td className='border border-gray-300 p-3'>Prefers shade</td>
              <td className='border border-gray-300 p-3'>Tolerates full sun</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Pest/Disease Resistance</td>
              <td className='border border-gray-300 p-3'>Lower</td>
              <td className='border border-gray-300 p-3'>Higher</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Caffeine Content</td>
              <td className='border border-gray-300 p-3'>0.8-1.4%</td>
              <td className='border border-gray-300 p-3'>1.7-4.0%</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Sucrose Content</td>
              <td className='border border-gray-300 p-3'>6-9%</td>
              <td className='border border-gray-300 p-3'>3-7%</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Pollination</td>
              <td className='border border-gray-300 p-3'>Self-compatible</td>
              <td className='border border-gray-300 p-3'>Cross-pollination required</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Flavor Profile</td>
              <td className='border border-gray-300 p-3'>Complex, sweet, acidic</td>
              <td className='border border-gray-300 p-3'>Bitter, earthy, full-bodied</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        Caffeine and chlorogenic acids are natural pest repellents. This is why Robusta has higher disease resistance but also more bitterness in the cup. Arabica&apos;s higher sucrose content contributes to its more broadly appreciated flavor complexity.
      </p>

      <h3 className='text-xl font-bold mt-6'>
        Liberica, Excelsa, and Emerging Species
      </h3>
      <p className='my-4'>
        While Arabica and Robusta dominate global trade, <span className='font-bold'>Coffea liberica</span> (Liberica) is the third commercially cultivated species, grown primarily in the Philippines, Malaysia, and parts of West Africa. Liberica cherries are notably larger than Arabica or Robusta, and the cup profile is distinctive: often described as woody, smoky, and floral with a full body. <em>Coffea dewevrei</em>, sometimes called Excelsa, was reclassified as a variety of Liberica in 2006 and is grown in Southeast Asia, particularly Vietnam. Combined, Liberica and Excelsa account for less than 2% of global production.
      </p>
      <p className='my-4'>
        For specialty coffee buyers, Liberica is becoming interesting as a niche differentiator and as a potential genetic resource for climate adaptation research. Several other wild Coffea species, including <em>C. stenophylla</em> from West Africa, are being investigated for their potential to combine Arabica-like cup quality with greater heat and drought tolerance.
      </p>

      <h3 className='text-xl font-bold mt-6'>
        The Shifting Arabica-Robusta Balance
      </h3>
      <p className='my-4'>
        A decade ago, Arabica accounted for roughly 70% of world coffee production. That share has narrowed to approximately 55-60%, according to <a href='https://icocoffee.org/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>International Coffee Organization (ICO)</a> data. The shift reflects not declining Arabica output but accelerating Robusta expansion, particularly in Vietnam, Indonesia, and Brazil. Climate pressure is making Robusta easier and cheaper to grow at scale. Some researchers at institutions including Kew Royal Botanic Gardens project that up to 60% of wild Arabica species could face extinction risk by 2050.
      </p>

      <div className='bg-amber-50 p-4 rounded-lg my-6 border border-amber-200'>
        <p className='text-sm'>
          <span className='font-bold'>Sourcing implication:</span> Ethiopia&apos;s highland growing zones (1,500 to 2,200+ meters) remain some of the most climate-resilient Arabica territory on Earth. The country&apos;s genetic diversity provides natural adaptation pathways that monoculture plantations lack. For importers building long-term supply chains, understanding these species dynamics is strategic, not academic. Read more about <Link href='/insights/ethiopian-coffee-climate-change-impact' className='text-amber-700 hover:underline font-bold'>climate change and Ethiopian coffee</Link>.
        </p>
      </div>

      {/* SECTION 4: ARABICA ORIGIN */}
      <h2 id='arabica-origin' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineSparkles className='text-amber-600' />
        4. The Arabica Story: A Unique Hybrid
      </h2>

      <p className='my-4'>
        Arabica is a hybrid. It originated from a natural cross between <em>Coffea canephora</em> (Robusta) and <em>Coffea eugenioides</em>. This single hybridization event occurred between 1.08 million and 543,000 years ago. In evolutionary terms, Arabica is the youngest species within the Coffea genus.
      </p>

      <h3 className='text-xl font-bold mt-6'>
        Allotetraploid Genetics
      </h3>
      <p className='my-4'>
        All coffee species except Arabica are <span className='font-bold'>diploids</span> with 22 chromosomes. When Robusta and eugenioides hybridized, Arabica inherited both parental chromosome sets, making it an <span className='font-bold'>allotetraploid</span> with 44 chromosomes. This also made Arabica the only self-compatible Coffea species, meaning it can reproduce without cross-pollination. Self-compatibility allowed Arabica to become ecologically divergent from its parent species and spread successfully through the Ethiopian highlands.
      </p>

      <div className='bg-blue-50 p-6 rounded-lg my-6 border border-blue-200'>
        <p className='text-sm'>
          <span className='font-bold'>Where did this happen?</span> Genetic studies suggest <em>C. canephora</em> and <em>C. eugenioides</em> originated in the forests west of modern Ethiopia, with hybridization occurring in what is now Uganda or South Sudan. The resulting Arabica species migrated to the southwestern Ethiopian highlands, its &quot;primary center of diversity,&quot; where the most genetically diverse wild Arabica populations are found today.
        </p>
      </div>

      <h3 className='text-xl font-bold mt-6'>
        The Genetic Bottleneck Problem
      </h3>
      <p className='my-4'>
        Arabica&apos;s unique origin creates a significant challenge for coffee&apos;s future:
      </p>
      <ul className='font-inconsolata my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Single speciation event:</span> All Arabica traces back to one hybridization, possibly from a single parent plant.</li>
        <li><span className='font-bold'>Narrow gene pool:</span> Those 44 chromosomes contain all the genetic tools every Arabica variety will ever possess.</li>
        <li><span className='font-bold'>Limited environmental adaptation:</span> After speciation, Arabica grew isolated in the Ethiopian highlands, never adapting naturally to diverse global environments.</li>
        <li><span className='font-bold'>Late domestication:</span> Wheat was domesticated 10,000 years ago. Coffee was not widely cultivated outside Ethiopia until the 1600s, leaving far less time for human-guided breeding.</li>
        <li><span className='font-bold'>Wild Arabica at risk:</span> Deforestation and warming temperatures are threatening the wild Arabica populations that represent the species&apos; primary genetic reserve.</li>
      </ul>
      <p className='my-4'>
        Scientists have not successfully reproduced this speciation event in a lab. The bottleneck makes it extremely difficult for Arabica to adapt to climate change through conventional breeding alone.
      </p>

      <h3 className='text-xl font-bold mt-6'>
        Research Responses
      </h3>
      <p className='my-4'>
        Researchers at <a href='https://worldcoffeeresearch.org/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>World Coffee Research (WCR)</a>, UC Davis, Kew Royal Botanic Gardens, and Ethiopia&apos;s Jimma Agricultural Research Center (JARC) are working to address the genetic bottleneck:
      </p>
      <ul className='font-inconsolata my-4 list-disc ml-5 space-y-2'>
        <li>Cataloging wild Arabica varieties and ancient populations in Ethiopian forests</li>
        <li>Creating F1 hybrids to introduce new genetic combinations</li>
        <li>Sequencing the Arabica genome (UC Davis published a high-quality reference genome for the Gesha variety)</li>
        <li>Investigating crosses with climate-tolerant wild species like <em>C. stenophylla</em></li>
      </ul>

      {/* SECTION 5: VARIETIES */}
      <h2 id='varieties' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineRectangleGroup className='text-amber-600' />
        5. Coffee Variety Groups: A Buyer&apos;s Framework
      </h2>

      <p className='my-4'>
        Varieties are groups of plants at the lowest taxonomic rank, defined by reproducible genetic characteristics. Think of apple varieties: Gala, Granny Smith, Red Delicious are different expressions of the same species. Coffee varieties work the same way, and the variety group on an offer sheet tells an experienced buyer a great deal about expected cup character, yield economics, and supply risk.
      </p>

      <h3 className='text-xl font-bold mt-6'>
        Terminology
      </h3>
      <ul className='font-inconsolata my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Cultivar:</span> A cultivated variety, selected and reproduced by humans for desired traits. Example: Caturra, SL28.</li>
        <li><span className='font-bold'>Hybrid:</span> A cross between two varieties, multiple varieties, or a variety and a species. Example: Timor Hybrid, Centroamericano.</li>
        <li><span className='font-bold'>Heirloom:</span> A cultivar maintained for 50 to 100+ years, often without formal naming. In Ethiopian coffee trade, this term covers thousands of unnamed landraces.</li>
        <li><span className='font-bold'>Landrace:</span> A domesticated, localized variety that evolved through natural or agricultural selection. Most Ethiopian coffee genetics fall into this category.</li>
      </ul>
      <div className='bg-amber-50 p-4 rounded-lg my-6 border border-amber-200'>
        <p className='text-sm'>
          <span className='font-bold'>Variety vs. Varietal:</span> &quot;Variety&quot; is a noun; &quot;varietal&quot; is an adjective. The confusion comes from wine, where a &quot;varietal wine&quot; contains 75%+ of one grape variety. In coffee, the correct usage is &quot;Gesha variety,&quot; not &quot;Gesha varietal.&quot;
        </p>
      </div>

      <h3 className='text-xl font-bold mt-6'>
        The Four Major Variety Groups
      </h3>
      <p className='my-4'>
        Based on the <a href='https://varieties.worldcoffeeresearch.org/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>World Coffee Research variety catalog</a>, Arabica varieties fall into four major groups:
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border-collapse'>
          <thead className='bg-dark text-primary'>
            <tr>
              <th className='border border-gray-300 p-3 text-left'>Group</th>
              <th className='border border-gray-300 p-3 text-left'>Cup Quality</th>
              <th className='border border-gray-300 p-3 text-left'>Yield</th>
              <th className='border border-gray-300 p-3 text-left'>Disease Resistance</th>
              <th className='border border-gray-300 p-3 text-left'>Buyer Notes</th>
            </tr>
          </thead>
          <tbody className='font-inconsolata'>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Ethiopian Landraces</td>
              <td className='border border-gray-300 p-3'>Very high</td>
              <td className='border border-gray-300 p-3'>Low to moderate</td>
              <td className='border border-gray-300 p-3'>Variable</td>
              <td className='border border-gray-300 p-3'>Highest flavor diversity; complexity unmatched by bred cultivars</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Bourbon &amp; Typica</td>
              <td className='border border-gray-300 p-3'>High</td>
              <td className='border border-gray-300 p-3'>Low to moderate</td>
              <td className='border border-gray-300 p-3'>Low</td>
              <td className='border border-gray-300 p-3'>97.5% of Brazilian cultivars; well-understood flavor profiles</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Introgressed (Catimor/Sarchimor)</td>
              <td className='border border-gray-300 p-3'>Moderate</td>
              <td className='border border-gray-300 p-3'>High</td>
              <td className='border border-gray-300 p-3'>High (leaf rust)</td>
              <td className='border border-gray-300 p-3'>Robusta genes; reliable supply but cup ceiling lower</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>F1 Hybrids</td>
              <td className='border border-gray-300 p-3'>High</td>
              <td className='border border-gray-300 p-3'>High</td>
              <td className='border border-gray-300 p-3'>Variable</td>
              <td className='border border-gray-300 p-3'>Best of both parents; expensive to propagate; not self-sustaining</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='space-y-6 my-6'>
        <div className='bg-amber-50 p-6 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-2'>1. Ethiopian Landraces</h4>
          <p className='my-2 text-sm'>
            Estimated at 10,000 to 15,000 distinct genotypes, Ethiopian landraces evolved from the original Arabica in the montane forests where the species originated. They represent the deepest genetic library for Arabica on Earth. When you source coffee labeled &quot;heirloom&quot; from <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Ethiopian origins</Link>, you are accessing this ancient reservoir. These varieties have co-evolved with their terroir for centuries, producing flavor complexity that bred cultivars cannot replicate. Learn more in our dedicated <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline font-bold'>Ethiopian heirloom varieties guide</Link>.
          </p>
          <p className='my-2 font-inconsolata text-sm'>
            <span className='font-bold'>Examples:</span> Rume Sudan, Gesha, unnamed thousands identified only by region
          </p>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2'>2. Bourbon &amp; Typica Group</h4>
          <p className='my-2 text-sm'>
            The most globally distributed group. Trees that traveled from Ethiopia to Yemen, then dispersed via Amsterdam and R&eacute;union Island to the rest of the world. Bourbon and Typica cultivars form the genetic backbone of Latin American coffee production.
          </p>
          <p className='my-2 font-inconsolata text-sm'>
            <span className='font-bold'>Bourbon examples:</span> Pacas, Caturra, SL28, SL34, Villa Sarchi<br/>
            <span className='font-bold'>Typica examples:</span> Maragogype, Blue Mountain, Kona, Java, Kent
          </p>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2'>3. Introgressed Varieties (Catimor &amp; Sarchimor)</h4>
          <p className='my-2 text-sm'>
            Arabica varieties hybridized with Robusta via the Timor Hybrid, a spontaneous cross discovered on the island of Timor in Southeast Asia. The goal: inherit Robusta&apos;s disease resistance and yield potential while retaining Arabica cup quality. Results are mixed; introgressed varieties are productive and rust-resistant but often carry a cup quality ceiling lower than pure Arabica lines.
          </p>
          <p className='my-2 font-inconsolata text-sm'>
            <span className='font-bold'>Catimor examples:</span> IHCAFE 90, Costa Rica 95, Castillo<br/>
            <span className='font-bold'>Sarchimor examples:</span> Parainema, Obat&atilde;, Marsellesa
          </p>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2'>4. F1 Hybrids</h4>
          <p className='my-2 text-sm'>
            First-generation crosses of two genetically distant Arabica parents, often combining an Ethiopian landrace with a variety bred for agronomic traits. F1 hybrids exhibit &quot;hybrid vigor&quot;: superior yield, disease resistance, and often excellent cup quality. The trade-off is cost: they must be propagated by hand pollination or cloning because seeds produce an unstable F2 generation.
          </p>
          <p className='my-2 font-inconsolata text-sm'>
            <span className='font-bold'>Examples:</span> Centroamericano, Mundo Maya, Milenio, Starmaya
          </p>
        </div>
      </div>

      {/* SECTION 6: HABITAT */}
      <h2 id='habitat' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineMapPin className='text-amber-600' />
        6. Coffee&apos;s Habitat and the Coffee Belt
      </h2>

      <h3 className='text-xl font-bold mt-6'>
        &quot;Tropical Woody Understory Perennial&quot; Explained
      </h3>
      <p className='my-4'>
        This phrase captures coffee&apos;s natural habitat precisely:
      </p>
      <ul className='font-inconsolata my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Tropical:</span> High temperatures year-round, no winter, high humidity, distinct rainy seasons.</li>
        <li><span className='font-bold'>Woody:</span> Has bark, secondary growth, and tree rings.</li>
        <li><span className='font-bold'>Understory:</span> Grows beneath the forest canopy in higher humidity, less temperature variation, and lower direct light. Most Arabica varieties perform best under shade.</li>
        <li><span className='font-bold'>Perennial:</span> Lives longer than two years. Coffee can survive over a century but is commercially productive from roughly year 7 to year 20.</li>
      </ul>

      <h3 className='text-xl font-bold mt-6'>
        The Coffee Belt
      </h3>
      <p className='my-4'>
        Global coffee production overlaps almost entirely with the tropics. The &quot;coffee belt&quot; stretches between the Tropic of Cancer (23.4{'\u00B0'}N) and Tropic of Capricorn (23.4{'\u00B0'}S). About 70 countries grow coffee; roughly 50 export it. Coffee&apos;s journey from <Link href='/insights/ethiopia-coffee-origin-birthplace' className='text-amber-700 hover:underline'>its Ethiopian origin</Link> followed a well-documented path:
      </p>
      <ol className='font-inconsolata my-4 list-decimal ml-5 space-y-2'>
        <li><span className='font-bold'>Origin:</span> Southwestern Ethiopian highlands, Eastern Sudan (Boma Plateau), Northern Kenya (Mount Marsabit).</li>
        <li><span className='font-bold'>~575 AD or earlier:</span> Ethiopia to Yemen, where the Typica line originated from what may have been a single parent plant.</li>
        <li><span className='font-bold'>~1690:</span> Yemen to R&eacute;union Island (developing Bourbon) and to India/Java (Typica).</li>
        <li><span className='font-bold'>1706-1710:</span> Typica reaches Amsterdam&apos;s botanical gardens.</li>
        <li><span className='font-bold'>~1720:</span> Coffee reaches Suriname, then spreads to Brazil, Martinique, and throughout the Americas.</li>
      </ol>

      <h3 className='text-xl font-bold mt-6'>
        Climate Change and Arabica&apos;s Future
      </h3>
      <p className='my-4'>
        Climate change is redrawing the coffee belt. Arabica production is expanding in non-traditional areas (China&apos;s Yunnan province, parts of California) while traditional low-altitude zones face declining suitability. Research published by Kew Royal Botanic Gardens projects that coffee farmland within the traditional belt could decrease by 50% by 2050 under moderate warming scenarios.
      </p>

      <div className='bg-green-50 p-4 rounded-lg my-6 border border-green-200'>
        <p className='text-sm'>
          <span className='font-bold'>Ethiopia&apos;s strategic position:</span> Ethiopia&apos;s highland plateaus, ranging from 1,500 to 2,200+ meters, create microclimates that may remain viable even as lower-altitude regions become unsuitable for quality Arabica. The country&apos;s genetic diversity provides natural adaptation pathways. For importers building decade-long supply relationships, Ethiopia represents both current excellence and potential future resilience. Explore our <Link href='/insights/specialty-coffee-trends-2026' className='text-amber-700 hover:underline'>2026 specialty coffee trends analysis</Link> and <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>harvest calendar</Link> for buying timeline guidance.
        </p>
      </div>

      {/* SECTION 7: BUYER IMPLICATIONS */}
      <h2 id='buyer-implications' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineBriefcase className='text-amber-600' />
        7. Why Taxonomy Matters for Green Coffee Buyers
      </h2>

      <p className='my-4'>
        Plant taxonomy is not just botanical trivia. It has direct commercial consequences across every role in the green coffee supply chain.
      </p>

      <h3 className='text-xl font-bold mt-6'>
        For Roasters
      </h3>
      <p className='my-4'>
        Genetics determine the upper boundary of flavor potential. When you know that a Gesha&apos;s delicate floral notes come from its unique genetic lineage rather than processing alone, you can <Link href='/insights/coffee-is-art-roasting-brewing' className='text-amber-700 hover:underline'>craft roast profiles</Link> that honor that heritage. Ethiopian heirloom varieties, because they draw from the widest gene pool, offer the broadest flavor spectrum of any origin: from the jasmine and bergamot of a washed Yirgacheffe to the blueberry intensity of a natural Guji.
      </p>

      <h3 className='text-xl font-bold mt-6'>
        For Importers
      </h3>
      <p className='my-4'>
        Variety group tells you about supply chain risk. A sourcing program built entirely on Bourbon and Typica cultivars from one Central American origin is more vulnerable to leaf rust epidemics than a diversified program that includes Ethiopian heirlooms and F1 hybrids. Understanding the <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>export process</Link> and variety landscape together allows you to build a portfolio with both flavor range and supply resilience.
      </p>

      <h3 className='text-xl font-bold mt-6'>
        For Traders and Blenders
      </h3>
      <p className='my-4'>
        Variety knowledge enables premium positioning. An offer sheet that specifies &quot;Ethiopian heirloom, Guji Zone, Grade 1, 85+ SCA&quot; communicates genetic specificity that justifies a higher <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>FOB price</Link> compared with a generic &quot;Arabica, washed&quot; listing. Understanding the <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='text-amber-700 hover:underline'>science behind coffee evaluation</Link> and variety identification supports better buying decisions and more compelling sales narratives to downstream customers.
      </p>

      <div className='bg-amber-50 p-4 rounded-lg my-6 border border-amber-200'>
        <p className='text-sm'>
          <span className='font-bold'>Bottom line:</span> The specialty coffee industry often focuses on what happens after harvest. But the plant sets the ceiling for everything that follows. A coffee can only be as complex as its genetics and growing conditions allow. This is why origin matters. This is why terroir matters. This is why Ethiopia, with its unparalleled genetic diversity and ideal highland growing conditions, remains the most significant origin for specialty Arabica.
        </p>
      </div>

      {/* FAQ */}
      <section id='faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h2 className='text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2'>
          <HiOutlineQuestionMarkCircle className='text-amber-600' />
          Frequently Asked Questions
        </h2>
        <div className='space-y-6'>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>How many coffee species exist?</h3>
            <p className='text-sm text-gray-600'>Current scientific consensus identifies approximately 130 species within the genus Coffea, according to the SCA. Only two are commercially significant: Coffea arabica (Arabica, 55-60% of production) and Coffea canephora (Robusta, 40-45%). Coffea liberica is a minor third, grown mainly in the Philippines and Malaysia.</p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>What does &quot;heirloom&quot; mean on Ethiopian coffee?</h3>
            <p className='text-sm text-gray-600'>&quot;Heirloom&quot; refers to landrace varieties that evolved naturally in Ethiopia&apos;s highland forests over millennia. The country has an estimated 10,000 to 15,000 genetically distinct varieties, most without formal names. They differ from cultivars bred for specific traits elsewhere, offering greater flavor complexity.</p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>Why is Arabica&apos;s genetic diversity a concern?</h3>
            <p className='text-sm text-gray-600'>All Arabica traces back to a single hybridization event between Coffea canephora and Coffea eugenioides. This genetic bottleneck means the species has limited natural tools to adapt to climate change, pests, and disease. Ethiopia&apos;s wild Arabica populations are the primary reservoir of genetic diversity for the species.</p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>What is the difference between variety and varietal?</h3>
            <p className='text-sm text-gray-600'>&quot;Variety&quot; is a noun describing a taxonomic rank of plants with reproducible genetic characteristics (e.g., Gesha variety). &quot;Varietal&quot; is an adjective. The confusion comes from wine terminology. In coffee, the correct usage is &quot;Gesha variety,&quot; not &quot;Gesha varietal.&quot;</p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>Why does origin matter for coffee quality?</h3>
            <p className='text-sm text-gray-600'>A plant&apos;s genetics and growing conditions (altitude, temperature, soil, shade) determine the chemical compounds available in the seed. Processing and roasting can only work within those parameters. Ethiopia&apos;s combination of high altitude, volcanic soils, shade growing, and unmatched genetic diversity produces coffees with complexity no other origin replicates.</p>
          </div>
        </div>
      </section>

      {/* CONTINUE SERIES */}
      <h3 className='text-2xl font-extrabold mt-8'>
        Continue Your Coffee Education
      </h3>
      <p className='my-4'>
        Now that you understand coffee as a plant, explore how that plant becomes a product:
      </p>
      <ul className='font-inconsolata my-4 list-disc ml-5 space-y-2'>
        <li><Link href='/insights/coffee-is-agriculture-production-farming' className='text-amber-700 hover:underline font-bold'>Coffee Is Agriculture</Link> {'\u2014'} How coffee is grown, from soil science to harvest techniques</li>
        <li><Link href='/insights/coffee-is-processing-drying-milling' className='text-amber-700 hover:underline font-bold'>Coffee Is Processing</Link> {'\u2014'} The post-harvest transformation from cherry to green bean</li>
        <li><Link href='/insights/coffee-is-commerce-exporting-importing-buying' className='text-amber-700 hover:underline font-bold'>Coffee Is Commerce</Link> {'\u2014'} How coffee moves from origin to your roastery</li>
        <li><Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='text-amber-700 hover:underline font-bold'>Coffee Is Science</Link> {'\u2014'} The chemistry and evaluation methods behind quality</li>
        <li><Link href='/insights/coffee-is-art-roasting-brewing' className='text-amber-700 hover:underline font-bold'>Coffee Is Art</Link> {'\u2014'} The creative mastery of roasting and brewing</li>
      </ul>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Ethiopian Heirloom Coffee Direct from Origin</h4>
        <p className='my-2 text-sm'>
          <span className='font-bold'>Ethio Coffee Import and Export PLC</span> connects roasters, importers, and green coffee traders with traceable Ethiopian coffee from the birthplace of Arabica. With three decades of heritage sourcing relationships across Ethiopia&apos;s growing regions, we provide pre-shipment samples, cupping scores, and full traceability documentation. Request samples or a current offer sheet to experience the genetic diversity that makes Ethiopian coffee unique.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>
            View Our Offerings
          </Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            Request Samples
          </Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            How to Order
          </Link>
        </div>
      </div>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-6'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Coffee Journey Series</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/coffee-is-agriculture-production-farming' className='text-amber-700 hover:underline'>Coffee Is Agriculture: Production &amp; Farming</Link></li>
              <li>&bull; <Link href='/insights/coffee-is-processing-drying-milling' className='text-amber-700 hover:underline'>Coffee Is Processing: Drying &amp; Milling</Link></li>
              <li>&bull; <Link href='/insights/coffee-is-commerce-exporting-importing-buying' className='text-amber-700 hover:underline'>Coffee Is Commerce: Exporting &amp; Importing</Link></li>
              <li>&bull; <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='text-amber-700 hover:underline'>Coffee Is Science: Analysis &amp; Evaluation</Link></li>
              <li>&bull; <Link href='/insights/coffee-is-art-roasting-brewing' className='text-amber-700 hover:underline'>Coffee Is Art: Roasting &amp; Brewing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Varieties &amp; Origins</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Ethiopian Heirloom Coffee Varieties &amp; Landraces</Link></li>
              <li>&bull; <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Coffee Origins</Link></li>
              <li>&bull; <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji Comparison</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-vs-colombian-coffee' className='text-amber-700 hover:underline'>Ethiopian Coffee vs Colombian Coffee</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Climate &amp; Sustainability</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-climate-change-impact' className='text-amber-700 hover:underline'>Ethiopian Coffee &amp; Climate Change Impact</Link></li>
              <li>&bull; <Link href='/insights/ethiopia-coffee-origin-birthplace' className='text-amber-700 hover:underline'>Ethiopia: Birthplace of Coffee</Link></li>
              <li>&bull; <Link href='/insights/direct-trade-ethiopian-farmers' className='text-amber-700 hover:underline'>Direct Trade with Ethiopian Farmers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing &amp; Quality</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality Control &amp; Grading</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC. This article draws from the SCA&apos;s Coffee Plants of the World, World Coffee Research variety catalog, UC Davis Coffee Center research, and genetic studies on Coffea arabica phylogenetics. Coffee science is actively evolving; <Link href='/contact-us' className='underline'>contact us</Link> for current Ethiopian coffee offerings and availability.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot; <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> &middot; <Link href='/about' className='underline'>About Ethio Coffee</Link> &middot; <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}
import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineGlobeAlt,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiOutlineBeaker,
  HiOutlineScale,
  HiOutlineCurrencyDollar,
  HiOutlineCalendarDays,
  HiOutlineShoppingCart
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopianCoffeeVsBrazilianCoffee({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Production scale, flavor profiles, grading systems, FOB pricing, and sourcing strategy for importers and roasters comparing the world&apos;s largest and fifth-largest coffee producers.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Ethiopian and Brazilian coffees occupy opposite ends of the specialty spectrum, each shaped by distinct terroir, genetics, and trade structures.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian coffee vs Brazilian coffee comparison showing green coffee beans from both origins'
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
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />
          Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Ethiopian coffee vs Brazilian coffee is not a choice between quality and quantity. Ethiopia is the birthplace of Arabica, producing complex floral and fruit-forward coffees from thousands of heirloom varieties. Brazil is the world&apos;s largest coffee producer, supplying 65 million bags annually with consistent, low-acidity profiles ideal for espresso and blends. For importers and roasters, the two origins serve complementary roles: Ethiopian lots anchor single-origin programs and add aromatic complexity, while Brazilian lots provide the reliable, chocolatey base that stabilizes blends and scales volume. Smart sourcing programs include both.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href="#at-a-glance" className='text-amber-700 hover:underline'>1. At a Glance: Ethiopia vs Brazil</a></li>
          <li><a href="#production-export" className='text-amber-700 hover:underline'>2. Production and Export Scale</a></li>
          <li><a href="#varieties-genetics" className='text-amber-700 hover:underline'>3. Varieties and Genetics</a></li>
          <li><a href="#terroir" className='text-amber-700 hover:underline'>4. Growing Conditions and Terroir</a></li>
          <li><a href="#processing-methods" className='text-amber-700 hover:underline'>5. Processing Methods</a></li>
          <li><a href="#flavor-profiles" className='text-amber-700 hover:underline'>6. Flavor Profile Comparison</a></li>
          <li><a href="#grading-systems" className='text-amber-700 hover:underline'>7. Grading Systems Compared</a></li>
          <li><a href="#fob-pricing" className='text-amber-700 hover:underline'>8. FOB Pricing and Cost</a></li>
          <li><a href="#seasonal-availability" className='text-amber-700 hover:underline'>9. Seasonal Availability and Shipping</a></li>
          <li><a href="#sourcing-strategy" className='text-amber-700 hover:underline'>10. Sourcing Strategy: When to Use Each Origin</a></li>
          <li><a href="#faq" className='text-amber-700 hover:underline'>11. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRODUCTION */}
      <p className='my-4'>
        <span className='font-bold'>Ethiopian coffee vs Brazilian coffee</span> is one of the most consequential comparisons in the global green coffee trade. Ethiopia, the biological birthplace of Coffea arabica, produces roughly 11.6 million bags per year from thousands of uncharacterized heirloom landraces grown across highland smallholder farms. Brazil, the world&apos;s largest coffee producer, generates approximately 65 million bags annually from large-scale fazendas planted with well-documented cultivars like Mundo Novo, Catuai, and Yellow Bourbon (USDA FAS, 2025/26 estimates).
      </p>

      <p className='my-4'>
        Most online comparisons of these origins focus on retail brewing tips and consumer preferences. This guide is different. It is written for importers, roasters, and green coffee buyers who need trade-level data: production scale, grading mechanics, FOB pricing, seasonal shipping windows, and strategic sourcing frameworks. If you buy green coffee professionally, this is the comparison that informs purchasing decisions.
      </p>

      {/* SECTION 1: AT A GLANCE */}
      <h2 id="at-a-glance" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineScale className='text-amber-600' />
        At a Glance: Ethiopia vs Brazil
      </h2>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Attribute</th>
              <th className='p-3 text-left font-bold'>Ethiopia</th>
              <th className='p-3 text-left font-bold'>Brazil</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Species</td>
              <td className='p-3'>100% Arabica</td>
              <td className='p-3'>Arabica (~63%) and Robusta/Conilon (~37%)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Key varieties</td>
              <td className='p-3'>6,000+ heirloom landraces; JARC releases (74110, 74112, Gesha)</td>
              <td className='p-3'>Mundo Novo, Catuai, Yellow Bourbon, Catucai, Obat&atilde;, Acai&aacute;</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Annual production (2025/26)</td>
              <td className='p-3'>~11.6 million bags (60 kg)</td>
              <td className='p-3'>~65 million bags (60 kg)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Global rank</td>
              <td className='p-3'>5th (Africa&apos;s largest)</td>
              <td className='p-3'>1st (35% of world supply)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Altitude range</td>
              <td className='p-3'>1,500 to 2,400 m</td>
              <td className='p-3'>700 to 1,400 m</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Primary flavor character</td>
              <td className='p-3'>Floral, citrus, berry, stone fruit, wine-like</td>
              <td className='p-3'>Chocolate, nuts, caramel, low acidity, full body</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Primary processing</td>
              <td className='p-3'>Washed (~35%) and natural (~60%); honey emerging</td>
              <td className='p-3'>Natural (~70%); pulped natural/cereja descascado (~25%); washed (~5%)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Grading system</td>
              <td className='p-3'>ECX: G1 to G5 (defect count + cup score)</td>
              <td className='p-3'>Screen size (14 to 20) + cup quality (Strictly Soft to Rio)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Main harvest</td>
              <td className='p-3'>October to February</td>
              <td className='p-3'>April to September</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Export port</td>
              <td className='p-3'>Djibouti</td>
              <td className='p-3'>Santos, Rio de Janeiro, Vit&oacute;ria</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold'>Typical FOB range (specialty)</td>
              <td className='p-3'>$3.50 to $7.00+ per lb</td>
              <td className='p-3'>$2.50 to $5.00+ per lb</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 2: PRODUCTION AND EXPORT SCALE */}
      <h2 id="production-export" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineChartBar className='text-amber-600' />
        Production and Export Scale
      </h2>

      <p className='my-4'>
        The scale difference between these two origins is dramatic. Brazil produced an estimated 65 million 60-kg bags in the 2025/26 marketing year, accounting for roughly 35% of global coffee supply. Of that, 40.9 million bags were Arabica and 24.1 million bags were Robusta (Conilon), according to the USDA Foreign Agricultural Service. Brazil&apos;s coffee sector is mechanized, with large fazendas in Minas Gerais, S&atilde;o Paulo, Esp&iacute;rito Santo, and Bahia using harvesting machines and irrigation systems that enable massive output.
      </p>

      <p className='my-4'>
        Ethiopia produced approximately 11.6 million bags in 2025/26 (USDA FAS), making it the fifth-largest producer globally and Africa&apos;s largest. However, Ethiopia consumes roughly 50% of its own production domestically, one of the highest domestic consumption rates of any producing country. Export volume is forecast at 7.8 million bags (USDA FAS, 2025/26), meaning the exportable supply available to importers is considerably tighter than the headline production figure suggests.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Metric</th>
              <th className='p-3 text-left font-bold'>Ethiopia</th>
              <th className='p-3 text-left font-bold'>Brazil</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Total production (2025/26)</td>
              <td className='p-3'>~11.6 million bags</td>
              <td className='p-3'>~65 million bags</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Arabica share</td>
              <td className='p-3'>100%</td>
              <td className='p-3'>~63% (40.9M bags)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Robusta share</td>
              <td className='p-3'>0%</td>
              <td className='p-3'>~37% (24.1M bags Conilon)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Export volume (est.)</td>
              <td className='p-3'>~7.8 million bags</td>
              <td className='p-3'>~38 million bags</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Domestic consumption</td>
              <td className='p-3'>~50% of production</td>
              <td className='p-3'>~35% of production</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold'>Farming structure</td>
              <td className='p-3'>4+ million smallholders (avg &lt;0.5 ha)</td>
              <td className='p-3'>~300,000 farms (many &gt;100 ha fazendas)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        For importers, the structural takeaway is clear: Brazil offers volume reliability and year-round availability, while Ethiopia offers specialty-grade scarcity and genetic uniqueness. Both supply chains serve different procurement needs. For detailed Ethiopian trade data, see our <Link href='/insights/top-ethiopian-coffee-importers-buyers-2024-2025' className='underline font-bold'>top Ethiopian coffee importers report</Link>.
      </p>

      {/* SECTION 3: VARIETIES AND GENETICS */}
      <h2 id="varieties-genetics" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineBeaker className='text-amber-600' />
        Varieties and Genetics
      </h2>

      <p className='my-4'>
        Genetic diversity is perhaps the sharpest dividing line between Ethiopian and Brazilian coffee. Ethiopia is the center of origin for Coffea arabica; its southwestern highlands contain more wild genetic material than the rest of the coffee-producing world combined. The <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='underline font-bold'>Ethiopian heirloom varieties</Link> number over 6,000 identified landraces, most still uncharacterized and grouped under the catch-all label &quot;heirloom&quot; on export documents. The Jimma Agricultural Research Center (JARC) has released named cultivars such as 74110, 74112, and Gesha (originally collected from Gesha village in Kaffa), though the majority of production comes from unnamed landraces.
      </p>

      <p className='my-4'>
        Brazil&apos;s coffee genetics are well-documented but narrow by comparison. The country&apos;s Arabica sector is dominated by a handful of commercial cultivars: Mundo Novo (a Bourbon x Typica natural hybrid prized for productivity), Catuai (compact, high-yielding), Yellow Bourbon (sought after for specialty with sweet, fruity profiles), Catucai, and disease-resistant varieties like Obat&atilde; and Acai&aacute; developed by the Instituto Agron&ocirc;mico de Campinas (IAC). For Robusta, the Conilon variety dominates Esp&iacute;rito Santo and parts of Bahia.
      </p>

      <p className='my-4'>
        In practice, this genetic difference translates directly to cup character. Ethiopian coffees deliver unpredictable, often extraordinary complexity because each landrace population produces subtly different flavor expressions. Brazilian coffees deliver predictable, replicable profiles because the cultivars are standardized and well-studied. For roasters building a consistent product line, Brazilian consistency is an asset. For roasters seeking differentiation and cupping-table excitement, Ethiopian genetic diversity is unmatched.
      </p>

      {/* SECTION 4: GROWING CONDITIONS AND TERROIR */}
      <h2 id="terroir" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineGlobeAlt className='text-amber-600' />
        Growing Conditions and Terroir
      </h2>

      <p className='my-4'>
        The terroir gap between Ethiopia and Brazil is among the widest in coffee.
      </p>

      <p className='my-4'>
        Ethiopian coffee grows at 1,500 to 2,400 meters above sea level across regions including <Link href='/ethiopian-coffee-yirgacheffe' className='underline font-bold'>Yirgacheffe</Link> (1,750 to 2,200 m), <Link href='/ethiopian-coffee-sidamo' className='underline font-bold'>Sidamo</Link> (1,550 to 2,200 m), <Link href='/ethiopian-coffee-guji' className='underline font-bold'>Guji</Link> (1,800 to 2,300 m), <Link href='/ethiopian-coffee-harar' className='underline font-bold'>Harrar</Link> (1,500 to 2,100 m), and <Link href='/ethiopian-coffee-limu' className='underline font-bold'>Limu</Link> (1,400 to 2,000 m). Farms are overwhelmingly smallholder, averaging less than 0.5 hectares, with shade-grown forest and garden systems that maintain biodiversity. Ethiopian soils are volcanic, rich in organic matter, and most production is organic by default because farmers cannot afford synthetic inputs.
      </p>

      <p className='my-4'>
        Brazilian coffee grows at significantly lower elevations, typically 700 to 1,400 meters. The major producing states are Minas Gerais (Sul de Minas, Cerrado Mineiro, Matas de Minas), S&atilde;o Paulo (Mogiana), Esp&iacute;rito Santo (Conilon/Robusta), and Bahia (Chapada Diamantina). Brazilian farms are frequently large-scale operations, with many fazendas exceeding 100 hectares. Production is often full-sun monoculture with mechanized harvesting, irrigation, and systematic fertilization. The Cerrado region, Brazil&apos;s most recognized specialty zone, has a distinct dry season that stresses the cherry and produces coffees with pronounced chocolate, nutty sweetness, and low acidity.
      </p>

      <p className='my-4'>
        The altitude difference is significant for buyers. Higher altitude produces denser beans with more complex acidity and aromatic compounds, which is why Ethiopian coffees score higher on average in cupping evaluations of floral and fruit categories. Brazilian coffees, grown lower, develop the heavier body, lower acidity, and caramelized sweetness that make them ideal for espresso extraction and dark-roast applications.
      </p>

      {/* SECTION 5: PROCESSING METHODS */}
      <h2 id="processing-methods" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineCheckCircle className='text-amber-600' />
        Processing Methods
      </h2>

      <p className='my-4'>
        Processing approach is one area where Ethiopia and Brazil share common ground: both countries are major producers of natural (dry-processed) coffee. But the similarity ends there.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Ethiopia</span> uses both natural and <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='underline font-bold'>washed (wet) processing</Link> at roughly a 60/40 natural-to-washed split. Natural Ethiopian coffees, dried on raised African beds with the cherry fruit intact, produce the intense blueberry, wine, and tropical fruit profiles that define Ethiopian naturals. Washed Ethiopian coffees undergo fermentation and washing that remove the mucilage before drying, producing cleaner, more transparent cups where terroir and varietal character come through. Honey processing and <Link href='/insights/anaerobic-ethiopian-coffee-processing-buyers-guide' className='underline font-bold'>anaerobic fermentation</Link> are emerging in Ethiopia but remain a small fraction of output.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Brazil</span> is the world&apos;s largest producer of natural-processed coffee, with an estimated 70% of output dried in the cherry on patios or mechanical dryers. The Brazilian natural method produces the classic medium-bodied, chocolatey, low-acid profile the market associate with the origin. Pulped natural (cereja descascado), a method invented in Brazil, removes the skin but leaves the mucilage on the parchment during drying, producing a cleaner cup with more sweetness than a full natural. Fully washed Brazilian coffee accounts for roughly 5% of production, mainly from specialty-focused farms in the south of Minas Gerais and the Cerrado.
      </p>

      <p className='my-4'>
        For buyers comparing processing impact: Ethiopian naturals tend to be fruit-forward, aromatic, and highly expressive but with more lot-to-lot variation. Brazilian naturals tend to be sweet, full-bodied, and consistent but with less aromatic complexity. Ethiopian washed coffees are among the cleanest, most transparent Arabicas available; Brazilian washed lots are rare and priced at a premium.
      </p>

      {/* SECTION 6: FLAVOR PROFILES */}
      <h2 id="flavor-profiles" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineBeaker className='text-amber-600' />
        Flavor Profile Comparison
      </h2>

      <p className='my-4'>
        The flavor profiles of Ethiopian and Brazilian coffees are strikingly different, and understanding those differences is essential for building sourcing programs and blend formulas.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Attribute</th>
              <th className='p-3 text-left font-bold'>Ethiopian Coffee</th>
              <th className='p-3 text-left font-bold'>Brazilian Coffee</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Dominant flavors</td>
              <td className='p-3'>Floral (jasmine, honeysuckle), citrus (bergamot, lemon), berry (blueberry, strawberry), stone fruit (peach, apricot)</td>
              <td className='p-3'>Chocolate (milk, dark), nuts (hazelnut, peanut), caramel, brown sugar, mild spice</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Acidity</td>
              <td className='p-3'>High, bright, sparkling (malic, citric, phosphoric)</td>
              <td className='p-3'>Low to medium; smooth, rounded</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Body</td>
              <td className='p-3'>Light to medium; silky (washed) or syrupy (natural)</td>
              <td className='p-3'>Medium to full; creamy, heavy mouthfeel</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Sweetness</td>
              <td className='p-3'>Fruit-driven (honey, berry, stone fruit)</td>
              <td className='p-3'>Sugar-driven (caramel, chocolate, molasses)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Aftertaste</td>
              <td className='p-3'>Lingering floral and citrus, tea-like finish</td>
              <td className='p-3'>Chocolate, toffee, clean and round</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold'>Best cupping scores (specialty)</td>
              <td className='p-3'>86 to 92+ (competition lots exceed 90)</td>
              <td className='p-3'>83 to 88+ (Cerrado and Sul de Minas top lots)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        <span className='font-bold'>Ethiopian regional highlights:</span> <Link href='/ethiopian-coffee-yirgacheffe' className='underline font-bold'>Yirgacheffe</Link> (jasmine, bergamot, lemon, tea-like), <Link href='/ethiopian-coffee-guji' className='underline font-bold'>Guji</Link> (tropical fruit, blueberry, intense sweetness), <Link href='/ethiopian-coffee-sidamo' className='underline font-bold'>Sidamo</Link> (berry, stone fruit, complex acidity), <Link href='/ethiopian-coffee-harar' className='underline font-bold'>Harrar</Link> (blueberry, wine, dried fruit), and <Link href='/ethiopian-coffee-limu' className='underline font-bold'>Limu</Link> (balanced, honeyed, spice). The flavor range across Ethiopian regions is enormous; a washed Yirgacheffe and a natural Harrar taste like coffees from different continents.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Brazilian regional highlights:</span> Cerrado Mineiro (chocolate, nuts, clean, low acidity, the benchmark for Brazilian specialty), Sul de Minas (sweet, balanced, caramel, larger variety of farm sizes), Mogiana/Alta Paulista (smooth, medium body, brown sugar), and Chapada Diamantina/Bahia (fruit-forward by Brazilian standards, emerging specialty). Brazilian specialty lots from high-altitude microlots (1,100 to 1,400 m) in Sul de Minas or Alta Mogiana are reaching cupping scores of 86 to 88, closing the gap with mid-range Ethiopian lots.
      </p>

      <p className='my-4'>
        In application: Ethiopian coffees excel as single-origin filter, pour-over, and cold brew offerings where aromatic complexity and bright acidity are prized. Brazilian coffees excel as espresso bases, blend foundations, and high-volume single-origin options where body, sweetness, and consistency matter most.
      </p>

      {/* SECTION 7: GRADING SYSTEMS */}
      <h2 id="grading-systems" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineChartBar className='text-amber-600' />
        Grading Systems Compared
      </h2>

      <p className='my-4'>
        The grading systems used by Ethiopia and Brazil are fundamentally different, and understanding both is critical for writing purchase contracts.
      </p>

      <h3 className='text-xl font-bold mt-6'>Ethiopian Grading (ECX System)</h3>

      <p className='my-4'>
        Ethiopia grades coffee through the <Link href='/insights/ecx-and-ethiopian-coffee-export' className='underline font-bold'>Ethiopia Commodity Exchange (ECX)</Link> system. Grades range from G1 (highest) to G5 (lowest), determined by a combination of physical defect count and cupping quality:
      </p>

      <ul className='list-disc pl-6 space-y-2 my-4'>
        <li><span className='font-bold'>Grade 1 (G1):</span> 0 to 3 defects per 300g sample. Specialty grade, cupping score 85+ for Q1 designation.</li>
        <li><span className='font-bold'>Grade 2 (G2):</span> 4 to 12 defects. High commercial to specialty. Many excellent lots grade G2 despite cupping above 84.</li>
        <li><span className='font-bold'>Grade 3 (G3):</span> 13 to 25 defects. Standard commercial grade.</li>
        <li><span className='font-bold'>Grades 4 and 5:</span> Higher defect counts, used for domestic market and lower-tier exports.</li>
      </ul>

      <p className='my-4'>
        A contract specification typically reads: &quot;Yirgacheffe G1 Washed&quot; or &quot;Guji G1 Natural.&quot; For details, see our <Link href='/insights/green-coffee-quality-control-defects-grading' className='underline font-bold'>green coffee quality control guide</Link>.
      </p>

      <h3 className='text-xl font-bold mt-6'>Brazilian Grading System</h3>

      <p className='my-4'>
        Brazil grades coffee using a multi-dimensional system that combines bean size (screen size), defect count, and cup quality classification:
      </p>

      <ul className='list-disc pl-6 space-y-2 my-4'>
        <li><span className='font-bold'>Screen size:</span> Measured from 14 to 20 (in 64ths of an inch). Screen 17/18 is the target for specialty. Larger, more uniform screen sizes command premiums.</li>
        <li><span className='font-bold'>Cup quality:</span> Classified as Strictly Soft (highest, clean and sweet), Soft, Softish, Hard, Riado, and Rio (lowest, phenolic/medicinal). Specialty buyers target Strictly Soft or Soft.</li>
        <li><span className='font-bold'>Type (defect count):</span> Measured in defect equivalents per 300g. Type 2 (4 defects) through Type 8 (360 defects). Specialty is typically Type 2 to Type 4.</li>
        <li><span className='font-bold'>Regional designations:</span> Santos (S&atilde;o Paulo exports), Cerrado (Minas Gerais origin mark with DO status), Sul de Minas, Mogiana.</li>
      </ul>

      <p className='my-4'>
        A typical Brazilian specialty contract reads: &quot;Santos FC (Fine Cup), Screen 17/18, Strictly Soft, Type 2/3.&quot; Brazil&apos;s grading provides more granular information about physical quality, but Ethiopia&apos;s ECX system integrates cupping evaluation more formally into the grade designation.
      </p>

      {/* SECTION 8: FOB PRICING */}
      <h2 id="fob-pricing" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineCurrencyDollar className='text-amber-600' />
        FOB Pricing and Cost
      </h2>

      <p className='my-4'>
        Green coffee pricing for both origins is anchored to the ICE New York C-market (Arabica futures), but the premium structures differ significantly.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Ethiopian coffee pricing</span> is set through ECX indicative prices and direct negotiation between exporters and importers. Specialty lots trade at significant premiums above ECX minimums. FOB Djibouti prices for specialty Ethiopian coffee typically range from $3.50 to $7.00+ per pound, depending on region, grade, season, and lot size. Competition-grade lots (Q1, cupping score 87+) can exceed $8.00 per pound. For a full breakdown, see our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='underline font-bold'>Ethiopian coffee FOB pricing guide</Link>.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Brazilian coffee pricing</span> is more directly tied to C-market differentials. Exporters quote as C-market plus a differential: typically +$0.05 to +$0.20 per pound for standard Santos, +$0.30 to +$0.60 for Cerrado Fine Cup, and higher for specialty lots from recognized estates. FOB Santos prices for specialty Brazilian Arabica typically range from $2.50 to $5.00+ per pound. Brazilian Robusta (Conilon) trades at a significant discount, typically $1.50 to $2.50 per pound FOB. Volume discounts are more pronounced in Brazil due to larger lot sizes.
      </p>

      <p className='my-4'>
        For importers comparing landed costs: Ethiopian coffee ships through Djibouti (the country is landlocked), with transit to European ports taking 18 to 25 days and to US East Coast roughly 30 to 35 days. Brazilian coffee ships directly from Santos, Rio, or Vit&oacute;ria, reaching the US East Coast in 10 to 14 days and Europe in 14 to 20 days. Freight cost per container is comparable, but faster transit from Brazil reduces working capital requirements. For complete cost modeling, see our <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='underline font-bold'>landed cost guide</Link>.
      </p>

      {/* SECTION 9: SEASONAL AVAILABILITY */}
      <h2 id="seasonal-availability" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineCalendarDays className='text-amber-600' />
        Seasonal Availability and Shipping
      </h2>

      <p className='my-4'>
        One of the most practical advantages of sourcing both Ethiopian and Brazilian coffee is that their harvest calendars are nearly complementary, enabling year-round access to fresh-crop coffee.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Phase</th>
              <th className='p-3 text-left font-bold'>Ethiopia</th>
              <th className='p-3 text-left font-bold'>Brazil</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Main harvest</td>
              <td className='p-3'>October to February</td>
              <td className='p-3'>April to September</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Processing and milling</td>
              <td className='p-3'>December to April</td>
              <td className='p-3'>June to November</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Fresh crop export availability</td>
              <td className='p-3'>February to June</td>
              <td className='p-3'>July to December</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold'>Best buying window</td>
              <td className='p-3'>March to May (widest selection)</td>
              <td className='p-3'>August to November (fresh crop, full selection)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        The practical result: importers who source Ethiopian coffee for their Q1/Q2 program and Brazilian coffee for Q3/Q4 maintain fresh-crop inventory year-round. This dual calendar is one reason why many specialty roasters list both origins on their menu revolving seasonally. For Ethiopian season details, see our <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='underline font-bold'>Ethiopian coffee harvest calendar</Link>.
      </p>

      {/* SECTION 10: SOURCING STRATEGY */}
      <h2 id="sourcing-strategy" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineShoppingCart className='text-amber-600' />
        Sourcing Strategy: When to Use Each Origin
      </h2>

      <h3 className='text-xl font-bold mt-6'>Specialty Single-Origin Programs</h3>

      <p className='my-4'>
        If your catalog depends on distinctive, story-driven single origins with complex cup profiles, Ethiopian coffee is the stronger choice. The heirloom genetic pool, extreme altitudes, and diverse processing methods produce coffees that routinely score 86 to 92+ and generate excitement on any cupping table. Washed Yirgacheffe, natural Guji, and Sidamo honey lots are the sort of offerings that earn premium retail pricing and differentiate a roaster&apos;s brand. The trade-off is more lot-to-lot variation and a narrower buying window.
      </p>

      <h3 className='text-xl font-bold mt-6'>Espresso Base and Blend Foundation</h3>

      <p className='my-4'>
        Brazilian coffee remains the global standard for espresso blend bases. Its full body, low acidity, caramel-chocolate sweetness, and smooth finish perform consistently under pressure extraction. A Cerrado Fine Cup or Sul de Minas Strictly Soft at screen 17/18 provides the reliable, sweet foundation that holds a blend together. Many successful roasters use Brazilian coffee as 40 to 60% of their espresso blend and layer Ethiopian components on top for aromatic complexity.
      </p>

      <h3 className='text-xl font-bold mt-6'>Year-Round Dual-Origin Strategy</h3>

      <p className='my-4'>
        The complementary harvest calendars make Ethiopian and Brazilian coffees natural partners in a sourcing portfolio. Buy Ethiopian fresh crop from March to May; transition to Brazilian fresh crop from August onward. This approach minimizes green coffee aging, maintains quality consistency, and gives customers seasonal variety. For sourcing Ethiopian coffee directly, see our <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='underline font-bold'>sourcing guide</Link> and <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='underline font-bold'>MOQ guide for importers</Link>.
      </p>

      <h3 className='text-xl font-bold mt-6'>Cost-Performance Sweet Spot</h3>

      <p className='my-4'>
        For buyers optimizing cost per cupping point, Brazilian G1 specialty (Cerrado FC, screen 17/18, Strictly Soft) offers strong value in the $2.50 to $3.50 FOB range with consistent 83 to 86 cupping scores. Ethiopian G2 lots from Sidamo or Limu often cup at 84 to 86 in the $3.50 to $4.50 FOB range. The Ethiopian premium is justified by aromatic complexity; the Brazilian value is justified by volume reliability and lower landed costs.
      </p>

      {/* FAQ */}
      <section id='faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200 mt-10'>
        <h2 className='text-2xl font-bold mb-6 text-gray-900'>Frequently Asked Questions</h2>
        <div className='space-y-6'>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>Is Ethiopian coffee better than Brazilian coffee?</h3>
            <p className='text-sm text-gray-600'>Neither is objectively better. Ethiopian coffee offers more aromatic complexity, floral and fruit character, and genetic diversity. Brazilian coffee offers more consistency, lower acidity, and a price-to-quality ratio that anchors espresso programs globally. The right choice depends on your product mix. Many professional buyers source both.</p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>Can Ethiopian coffee work in espresso blends?</h3>
            <p className='text-sm text-gray-600'>Yes. Ethiopian coffee at 15 to 30% of an espresso blend adds floral and fruit top notes that elevate the cup. Washed lots integrate more smoothly than naturals, which can introduce fermented fruit intensity. Many roasters pair Ethiopian components with a Brazilian base for balanced complexity.</p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>Why is Ethiopian coffee more expensive than Brazilian?</h3>
            <p className='text-sm text-gray-600'>Ethiopian coffee commands higher FOB prices due to limited exportable supply (50% consumed domestically), labor-intensive smallholder production, high cupping scores, and unique genetic diversity. Brazilian coffee is more cost-effective due to mechanized production, economies of scale, and mature logistics centered on the Port of Santos.</p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>What is the difference between Ethiopian heirloom and Brazilian Bourbon?</h3>
            <p className='text-sm text-gray-600'>Ethiopian heirloom is a collective term for thousands of wild Arabica landraces with enormous genetic variation. Brazilian Bourbon is a single well-documented cultivar descended from plants brought from Reunion Island in the 1800s. Heirloom produces wide-ranging floral and fruit complexity; Bourbon produces sweet, caramel-forward profiles with good acidity.</p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>How do I source both Ethiopian and Brazilian coffee for my roastery?</h3>
            <p className='text-sm text-gray-600'>Most specialty roasters work with separate green coffee importers for each origin. For Ethiopian coffee, source directly from origin exporters like Ethio Coffee Import and Export PLC, who supply traceable lots FOB Djibouti. For Brazilian coffee, major traders and cooperatives offer direct relationships. A dual-origin program enables year-round fresh-crop inventory.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='text-xl font-bold mb-2'>Source Premium Ethiopian Coffee Direct from Origin</h3>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Import and Export PLC</span>, a trusted Ethiopian coffee exporter, supplies traceable green coffee from Yirgacheffe, Sidamo, Guji, Harrar, and Limu. Whether you source Ethiopian coffee as a distinctive single origin or to complement your Brazilian blend program, we provide pre-shipment samples, professional cupping scores, full lot documentation, and competitive FOB Djibouti pricing.
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
            <h4 className='font-semibold mb-2 text-sm'>Origin Comparisons</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-vs-colombian-coffee' className='text-amber-700 hover:underline'>Ethiopian Coffee vs Colombian Coffee</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-vs-kenyan-coffee' className='text-amber-700 hover:underline'>Ethiopian Coffee vs Kenyan Coffee</Link></li>
              <li>&bull; <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji Compared</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Ethiopian Sourcing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Green Coffee Origins</Link></li>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='text-amber-700 hover:underline'>How to Choose an Ethiopian Coffee Exporter</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Ethiopian Heirloom Varieties and Landraces</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality &amp; Processing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality: Defects &amp; Grading</Link></li>
              <li>&bull; <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Pricing &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Pricing for Importers</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Contracts and Payment Terms Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC. This comparison draws on data from the USDA Foreign Agricultural Service (FAS), the International Coffee Organization (ICO), the Ethiopia Commodity Exchange (ECX), and our direct experience as Ethiopian green coffee exporters. Production figures reference 2025/26 USDA FAS estimates. Market prices and availability evolve; contact us for current sourcing options.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot; <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> &middot; <Link href='/about' className='underline'>About Ethio Coffee</Link> &middot; <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

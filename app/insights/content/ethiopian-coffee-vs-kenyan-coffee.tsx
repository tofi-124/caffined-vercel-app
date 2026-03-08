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
  HiOutlineBuildingStorefront
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopianCoffeeVsKenyanCoffee({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Flavor profiles, grading systems, auction structures, pricing, and sourcing guidance for importers and roasters comparing East Africa&apos;s two premier Arabica origins.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Ethiopian and Kenyan coffees are among the most celebrated Arabica origins on earth, yet they differ sharply in genetics, trade structure, and cup character.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian coffee vs Kenyan coffee comparison showing specialty green coffee beans from both East African origins'
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
          <span><span className='font-bold'>Key Takeaway:</span> Ethiopian coffee vs Kenyan coffee is a comparison between the birthplace of Arabica and one of Africa&apos;s most technically refined specialty origins. Ethiopia offers unmatched genetic diversity from 6,000+ heirloom varieties, producing floral, fruity, and citrus-driven cups across distinct regions. Kenya delivers intense, structured acidity and blackcurrant complexity from a small number of well-documented varieties (SL-28, SL-34, Ruiru 11). For importers, the choice is not about quality; both produce 85-92+ scoring coffees. The difference lies in supply structure, flavor character, pricing, and how each origin fits your program. Many specialty buyers source both.</span>
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
          <li><a href="#varieties" className='text-amber-700 hover:underline'>3. Varieties and Genetics</a></li>
          <li><a href="#flavor-profiles" className='text-amber-700 hover:underline'>4. Flavor Profiles Compared</a></li>
          <li><a href="#processing-methods" className='text-amber-700 hover:underline'>5. Processing Methods</a></li>
          <li><a href="#grading-systems" className='text-amber-700 hover:underline'>6. Grading Systems</a></li>
          <li><a href="#auction-trade" className='text-amber-700 hover:underline'>7. Auction and Trade Structures</a></li>
          <li><a href="#production-export" className='text-amber-700 hover:underline'>8. Production and Export Data</a></li>
          <li><a href="#pricing-cost" className='text-amber-700 hover:underline'>9. Pricing and Cost for Buyers</a></li>
          <li><a href="#seasonal-windows" className='text-amber-700 hover:underline'>10. Seasonal Availability</a></li>
          <li><a href="#which-origin" className='text-amber-700 hover:underline'>11. Which Origin Fits Your Business?</a></li>
          <li><a href="#faq" className='text-amber-700 hover:underline'>12. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRODUCTION */}
      <p className='my-4'>
        <span className='font-bold'>Ethiopian coffee vs Kenyan coffee</span> is one of the most debated comparisons among specialty coffee professionals. These two East African neighbors produce some of the world&apos;s highest-scoring, most sought-after Arabica coffees, yet their cups taste remarkably different. Ethiopia is the biological origin of Coffea arabica, home to thousands of uncharacterized heirloom landraces that produce extraordinary floral, fruit, and citrus complexity. Kenya, despite sharing a border with Ethiopia, built its coffee industry on a small number of carefully selected varieties (SL-28, SL-34, Ruiru 11, Batian) that deliver structured, intense acidity and distinctive blackcurrant and grapefruit character.
      </p>

      <p className='my-4'>
        Most online comparisons of these origins target retail consumers. This guide is written for importers, roasters, and green coffee traders who need trade-level detail: grading systems, auction mechanics, FOB pricing, seasonal buying windows, and which origin fits specific business models. If you buy green coffee professionally, this is the comparison that matters.
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
              <th className='p-3 text-left font-bold'>Kenya</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Species</td>
              <td className='p-3'>100% Arabica</td>
              <td className='p-3'>Predominantly Arabica (minor Robusta in lowlands)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Variety diversity</td>
              <td className='p-3'>6,000+ heirloom landraces and JARC cultivars</td>
              <td className='p-3'>SL-28, SL-34, Ruiru 11, Batian, K7, French Mission</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Altitude</td>
              <td className='p-3'>1,500 to 2,200 m</td>
              <td className='p-3'>1,400 to 2,100 m</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Primary flavor character</td>
              <td className='p-3'>Floral, fruit, citrus, wine-like, tea-like</td>
              <td className='p-3'>Blackcurrant, grapefruit, tomato, bright acidity</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Acidity</td>
              <td className='p-3'>High, bright (malic, citric)</td>
              <td className='p-3'>Very high, structured (phosphoric, citric, malic)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Body</td>
              <td className='p-3'>Light to medium</td>
              <td className='p-3'>Medium to full</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Processing</td>
              <td className='p-3'>Natural (~60%), washed (~35%), honey (emerging)</td>
              <td className='p-3'>Washed with extended soak (~95%), small natural lots</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Grading system</td>
              <td className='p-3'>ECX: G1 to G5 (defect count + cup score)</td>
              <td className='p-3'>Screen size: AA (17/18), AB (15/16), PB (peaberry)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Annual production</td>
              <td className='p-3'>~7.8 million bags (60 kg)</td>
              <td className='p-3'>~0.8 to 0.9 million bags (60 kg)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Main harvest</td>
              <td className='p-3'>October to February</td>
              <td className='p-3'>August to January (main); April to July (fly crop)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Export port</td>
              <td className='p-3'>Djibouti</td>
              <td className='p-3'>Mombasa</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Trade mechanism</td>
              <td className='p-3'>ECX auction + direct specialty export licenses</td>
              <td className='p-3'>Nairobi Coffee Exchange auction + &quot;Second Window&quot; direct sales</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold'>Typical FOB range (specialty)</td>
              <td className='p-3'>$3.50 to $7.00+ per lb</td>
              <td className='p-3'>$4.00 to $9.00+ per lb</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 2: ORIGIN AND TERROIR */}
      <h2 id="origin-terroir" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineGlobeAlt className='text-amber-600' />
        Origin and Terroir
      </h2>

      <h3 className='text-xl font-bold mt-6'>Ethiopia: The Birthplace of Coffee</h3>

      <p className='my-4'>
        Ethiopia is where Coffea arabica evolved. The southwestern highlands, particularly the Kaffa and Jimma zones, still contain wild coffee forests with genetic diversity found nowhere else on earth. Coffee has been cultivated and consumed in Ethiopia for over a thousand years, and the country remains the world&apos;s fifth-largest producer and Africa&apos;s top coffee-producing nation, with annual output around 496,200 tonnes (2022 FAO data).
      </p>

      <p className='my-4'>
        Key growing regions include <Link href='/ethiopian-coffee-yirgacheffe' className='underline font-bold'>Yirgacheffe</Link> (1,750 to 2,200 m), <Link href='/ethiopian-coffee-sidamo' className='underline font-bold'>Sidamo</Link> (1,550 to 2,200 m), <Link href='/ethiopian-coffee-guji' className='underline font-bold'>Guji</Link> (1,800 to 2,300 m), <Link href='/ethiopian-coffee-harar' className='underline font-bold'>Harrar</Link> (1,500 to 2,100 m), <Link href='/ethiopian-coffee-limu' className='underline font-bold'>Limu</Link> (1,400 to 2,000 m), and <Link href='/ethiopian-coffee-jimma' className='underline font-bold'>Jimma</Link> (1,400 to 1,900 m). Each zone produces coffees with distinct profiles driven by altitude, microclimate, soil composition, and the specific landrace population in each forest or garden. Over 4 million smallholder farming households cultivate an average of less than 0.5 hectares each, and roughly half of all production is consumed domestically, making exportable supply tighter than total output suggests.
      </p>

      <h3 className='text-xl font-bold mt-6'>Kenya: Precision-Engineered Specialty</h3>

      <p className='my-4'>
        Despite sharing a border with Ethiopia, Kenya received coffee relatively late. French Holy Ghost Fathers introduced coffee trees from Reunion Island in 1893, and the British expanded commercial cultivation around 1900. The varieties that arrived in Kenya had traveled from Ethiopia to Yemen, across to India and Reunion, then back to East Africa, mutating along the way. This circuitous genetic journey produced varieties (SL-28, SL-34, French Mission Bourbon) that, once adapted to the rich volcanic soils around Mount Kenya, created the singular flavor profiles Kenya is known for.
      </p>

      <p className='my-4'>
        Kenya&apos;s major coffee-growing regions cluster around the central highlands: <span className='font-bold'>Nyeri</span> (fructose sweetness, strong tart acidity), <span className='font-bold'>Kirinyaga</span> (floral, delicate, refined complexity), <span className='font-bold'>Embu</span> (dark forest fruit, browned sugar, balance), <span className='font-bold'>Murang&apos;a</span>, <span className='font-bold'>Kiambu</span>, <span className='font-bold'>Meru</span>, and <span className='font-bold'>Bungoma</span>. The country&apos;s acidic soil, consistent rainfall, and high altitudes (1,400 to 2,100 m) near the equator provide ideal growing conditions. Around 700,000 producing families farm coffee, with 85% of farms owned by Kenyan nationals. Most are smallholders growing as few as 150 trees, delivering cherry to centrally located washing stations (called &quot;factories&quot; in Kenya).
      </p>

      {/* SECTION 3: VARIETIES */}
      <h2 id="varieties" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineBeaker className='text-amber-600' />
        Varieties and Genetics
      </h2>

      <p className='my-4'>
        The genetic contrast between these two origins is one of the starkest in the coffee world.
      </p>

      <h3 className='text-xl font-bold mt-6'>Ethiopian Varieties</h3>

      <p className='my-4'>
        Ethiopia is the center of genetic diversity for Coffea arabica. The country contains an estimated 6,000+ distinct <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='underline font-bold'>heirloom landraces</Link>, most of them uncharacterized and simply labeled &quot;Ethiopian heirloom&quot; on export documents. The Jimma Agricultural Research Center (JARC) has released named cultivars, including 74110, 74112, and the celebrated Gesha (originally collected from Gesha village in Kaffa). But the vast majority of commercial production comes from unnamed forest and garden landraces, creating a flavor spectrum that no other origin can replicate. This genetic richness is both Ethiopia&apos;s greatest asset and a challenge for buyers seeking lot-to-lot consistency.
      </p>

      <h3 className='text-xl font-bold mt-6'>Kenyan Varieties</h3>

      <p className='my-4'>
        Kenya takes the opposite approach: a small number of thoroughly documented varieties, each selected for specific agronomic and cup quality traits.
      </p>

      <ul className='list-disc pl-6 space-y-2 my-4'>
        <li><span className='font-bold'>SL-28:</span> Selected by Scott Laboratories in the 1930s from a Tanganyika drought-resistant type. Known for juicy, complex cups with blackcurrant, grapefruit, and winey acidity. The most prized Kenyan variety for specialty.</li>
        <li><span className='font-bold'>SL-34:</span> Also a Scott Labs selection, from French Mission Bourbon. Performs well at higher altitudes. The cup tends to be heavier-bodied and more citric than SL-28, with creamy mouthfeel.</li>
        <li><span className='font-bold'>Ruiru 11:</span> A hybrid released in 1986, combining Timor Hybrid (Arabica x Robusta interspecific cross) with Rume Sudan for coffee berry disease (CBD) resistance. Cup quality is considered lower than SL varieties, though improved selections exist.</li>
        <li><span className='font-bold'>Batian:</span> A newer disease-resistant variety from the Coffee Research Institute. Better cup quality than Ruiru 11, with profiles approaching SL-28 at its best. Gaining adoption among quality-focused estates.</li>
        <li><span className='font-bold'>K7:</span> An older selection suited to lower altitudes. Used mainly in western Kenya.</li>
        <li><span className='font-bold'>French Mission Bourbon:</span> The original variety brought by missionaries from Reunion Island. Produces creamy, citric cups with less of the blackcurrant intensity of SL-28.</li>
      </ul>

      <p className='my-4'>
        For buyers, this means Kenyan variety information on a purchase contract is actionable: specifying &quot;SL-28&quot; tells you what flavor profile to expect. Ethiopian &quot;heirloom&quot; is accurate but less specific; the flavor depends more on region, altitude, and processing than on a named genotype.
      </p>

      {/* SECTION 4: FLAVOR PROFILES */}
      <h2 id="flavor-profiles" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineBeaker className='text-amber-600' />
        Flavor Profiles Compared
      </h2>

      <h3 className='text-xl font-bold mt-6'>Ethiopian Coffee Tasting Notes</h3>

      <p className='my-4'>
        Ethiopian coffees are prized for aromatic intensity and flavor diversity. Washed lots from <Link href='/ethiopian-coffee-yirgacheffe' className='underline font-bold'>Yirgacheffe</Link> deliver jasmine, bergamot, and lemon zest with a tea-like body and silky mouthfeel. Natural lots from <Link href='/ethiopian-coffee-guji' className='underline font-bold'>Guji</Link> explode with blueberry, tropical fruit, and honey sweetness in a fuller, syrupy body. <Link href='/ethiopian-coffee-harar' className='underline font-bold'>Harrar</Link> naturals show blueberry, wine, and dried fruit. The range across Ethiopian regions is enormous; a washed Yirgacheffe Kochere and a natural Harrar Longberry taste like coffees from different continents.
      </p>

      <p className='my-4'>
        Common descriptors include: floral (jasmine, honeysuckle), citrus (lemon, bergamot, tangerine), stone fruit (peach, apricot), berry (blueberry, strawberry, blackcurrant), and tea-like or wine-like body. Acidity is typically high and bright, driven by malic and citric acids.
      </p>

      <h3 className='text-xl font-bold mt-6'>Kenyan Coffee Tasting Notes</h3>

      <p className='my-4'>
        Kenyan coffees are famous for a specific kind of acidity that no other origin replicates. The best SL-28 and SL-34 lots deliver blackcurrant, grapefruit, and kaffir lime alongside mouthwatering notes of tomato and tamarind. Tropical fruit (pineapple, passion fruit) appears in top lots from Kirinyaga and Embu. The acidity is not just high; it is structured and layered, often described as &quot;phosphoric&quot; or &quot;sparkling,&quot; with a persistent finish that lingers long after each sip.
      </p>

      <p className='my-4'>
        Body tends to be medium to full, heavier than most Ethiopian washed coffees. Sweetness leans toward brown sugar, molasses, and dried fruit rather than the floral honey sweetness typical of Ethiopian lots. Regional variation exists: Nyeri coffees show more fructose sugar and tart acidity; Embu tilts toward dark forest fruit and browned sugar; Kirinyaga delivers the most floral, delicate cups.
      </p>

      <h3 className='text-xl font-bold mt-6'>Side-by-Side Flavor Table</h3>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Attribute</th>
              <th className='p-3 text-left font-bold'>Ethiopian Coffee</th>
              <th className='p-3 text-left font-bold'>Kenyan Coffee</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Dominant flavor</td>
              <td className='p-3'>Floral, fruit, citrus, berry</td>
              <td className='p-3'>Blackcurrant, grapefruit, tomato, savory</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Acidity type</td>
              <td className='p-3'>Bright, sparkling (malic, citric)</td>
              <td className='p-3'>Structured, intense (phosphoric, citric, malic)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Body</td>
              <td className='p-3'>Light to medium, silky or syrupy</td>
              <td className='p-3'>Medium to full, juicy, heavy mouthfeel</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Sweetness</td>
              <td className='p-3'>Fruit-driven (honey, stone fruit, berry jam)</td>
              <td className='p-3'>Sugar-driven (brown sugar, molasses, dried fruit)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Aftertaste</td>
              <td className='p-3'>Lingering floral and citrus, tea-like finish</td>
              <td className='p-3'>Persistent savory-sweet, blackcurrant, tart finish</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Signature descriptor</td>
              <td className='p-3'>Jasmine, blueberry (origin-dependent)</td>
              <td className='p-3'>Blackcurrant (appears across top AA lots)</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold'>Best cupping scores</td>
              <td className='p-3'>86 to 92+ (competition lots exceed 90)</td>
              <td className='p-3'>86 to 92+ (top AA lots from Nyeri, Kirinyaga)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        The critical distinction: Ethiopian coffee flavor varies primarily by region and processing method, shaped by thousands of unnamed landraces. Kenyan coffee flavor varies by variety and factory, shaped by a handful of documented cultivars. Both produce world-class specialty, but the flavor architecture is fundamentally different.
      </p>

      {/* SECTION 5: PROCESSING */}
      <h2 id="processing-methods" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineCheckCircle className='text-amber-600' />
        Processing Methods
      </h2>

      <p className='my-4'>
        Processing is where these two East African origins diverge most sharply.
      </p>

      <h3 className='text-xl font-bold mt-6'>Ethiopian Processing</h3>

      <p className='my-4'>
        Ethiopia uses both natural (dry) and <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='underline font-bold'>washed (wet) processing</Link> at roughly a 60/40 split. Natural processing, where the entire coffee cherry dries on raised beds with the fruit intact, produces the bold, fruity, wine-like profiles that define Ethiopian naturals. Washed processing removes the fruit before drying, yielding cleaner, more transparent cups where terroir and varietal character come through clearly. Honey-processed Ethiopian coffees are emerging but still represent a small fraction of exports. Fermentation practices vary widely between washing stations, contributing to the extraordinary lot-to-lot variation that makes Ethiopian coffees distinctive.
      </p>

      <h3 className='text-xl font-bold mt-6'>Kenyan Processing: The &quot;Kenya Washed&quot; Method</h3>

      <p className='my-4'>
        Kenya is overwhelmingly a washed-coffee origin. Roughly 95% of production uses the fully washed method, but with a distinctive twist that contributes directly to the Kenyan cup profile.
      </p>

      <p className='my-4'>
        The typical Kenyan process (often called &quot;Kenya washed&quot; or &quot;double fermentation&quot;) works as follows: Farmers deliver cherry to a central factory (washing station). The cherry is depulped using either a single-disc depulper or a multi-disc pre-grader that separates beans by density before and after depulping. Parchment coffee is then dry-fermented in its mucilage for 24 to 48 hours, moved through water channels to washing tanks, and the softened mucilage is removed. Premium AA lots are sometimes transferred to holding tanks and submerged underwater for an additional 12 to 72 hours (the &quot;extended soak&quot; or &quot;clean soak&quot;). The coffee receives a 6-hour &quot;skin dry&quot; in thin layers on raised beds to prevent parchment cracking, followed by 7 to 10 days of slow drying on raised beds to reach 11 to 12% moisture.
      </p>

      <p className='my-4'>
        This extended soak step is critical. It produces the clean, bright, highly structured acidity that defines Kenyan cups. Most importers and roasters consider the Kenya washed process a key part of what makes Kenyan coffee taste the way it does, separate from variety or terroir alone.
      </p>

      <p className='my-4'>
        For buyers, the processing contrast means: Ethiopian coffees offer a wide spectrum from bold naturals to clean washed lots. Kenyan coffees deliver a singular, refined washed profile with remarkable consistency within a given factory and grade.
      </p>

      {/* SECTION 6: GRADING SYSTEMS */}
      <h2 id="grading-systems" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineChartBar className='text-amber-600' />
        Grading Systems
      </h2>

      <p className='my-4'>
        Understanding how each country grades green coffee is essential for writing purchase contracts. The systems are fundamentally different.
      </p>

      <h3 className='text-xl font-bold mt-6'>Ethiopian Grading (ECX System)</h3>

      <p className='my-4'>
        Ethiopia grades coffee through the <Link href='/insights/ecx-and-ethiopian-coffee-export' className='underline font-bold'>Ethiopia Commodity Exchange (ECX)</Link> system. Grades range from G1 (highest) to G5 (lowest), determined by a combination of physical defect count and cupping score.
      </p>

      <ul className='list-disc pl-6 space-y-2 my-4'>
        <li><span className='font-bold'>Grade 1 (G1):</span> 0 to 3 defects per 300g sample. Specialty grade. Q1 designation requires an 85+ cupping score.</li>
        <li><span className='font-bold'>Grade 2 (G2):</span> 4 to 12 defects. High commercial to specialty. Many excellent lots grade G2 despite cupping above 84.</li>
        <li><span className='font-bold'>Grade 3 (G3):</span> 13 to 25 defects. Standard commercial grade.</li>
        <li><span className='font-bold'>Grades 4 and 5:</span> Higher defect counts. Used for domestic consumption and lower-tier markets.</li>
      </ul>

      <p className='my-4'>
        Ethiopian grades combine physical assessment with sensory evaluation. A typical contract specification reads: &quot;Yirgacheffe G1 Washed&quot; or &quot;Guji G1 Natural.&quot; Coffees are classified by region and processing method at ECX-certified Coffee Liquoring Units (CLUs). For a deeper explanation, see our <Link href='/insights/green-coffee-quality-control-defects-grading' className='underline font-bold'>green coffee quality control guide</Link>.
      </p>

      <h3 className='text-xl font-bold mt-6'>Kenyan Grading (Screen Size System)</h3>

      <p className='my-4'>
        Kenya grades coffee primarily by bean size (screen size), sorted mechanically after milling:
      </p>

      <ul className='list-disc pl-6 space-y-2 my-4'>
        <li><span className='font-bold'>AA:</span> Screen 17/18 (6.7 to 7.1 mm). The largest flat beans. Most sought-after grade in specialty markets. Commands the highest auction prices.</li>
        <li><span className='font-bold'>AB:</span> Screen 15/16 (6.0 to 6.3 mm). The most common export grade. AB lots can cup as high as AA; the grade distinction is size, not necessarily quality.</li>
        <li><span className='font-bold'>PB (Peaberry):</span> Single round beans that formed alone inside the cherry. Screen 16 or 4.74 mm. Often prized for concentrated flavor and sold at premiums.</li>
        <li><span className='font-bold'>C:</span> Screen 14/15. Smaller beans, generally lower quality.</li>
        <li><span className='font-bold'>E (Elephant):</span> Unusually large beans, often fused. Rare curiosity grade.</li>
        <li><span className='font-bold'>T and TT:</span> Smallest grades, broken pieces, light beans. Not used in specialty.</li>
      </ul>

      <p className='my-4'>
        A key difference from the Ethiopian system: Kenyan grades are purely physical (screen size), not quality-based. An AA lot from a poorly managed factory can cup lower than an AB from an excellent one. Experienced buyers evaluate Kenyan coffees by factory name, cupping score, and region, then note the grade for sorting reference. A typical contract specification reads: &quot;Kenya AA Nyeri, Factory: Gikanda Gichathaini.&quot;
      </p>

      {/* SECTION 7: AUCTION AND TRADE STRUCTURES */}
      <h2 id="auction-trade" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineBuildingStorefront className='text-amber-600' />
        Auction and Trade Structures
      </h2>

      <p className='my-4'>
        Both countries use exchange-based auction systems, but the mechanics differ in ways that directly affect how importers source coffee.
      </p>

      <h3 className='text-xl font-bold mt-6'>Ethiopia: ECX and Direct Specialty Licenses</h3>

      <p className='my-4'>
        The <Link href='/insights/ecx-and-ethiopian-coffee-export' className='underline font-bold'>Ethiopia Commodity Exchange (ECX)</Link> has handled the majority of coffee trade since 2008. Historically, the ECX pooled coffees by grade and region, which stripped traceability. Beginning in 2017, reforms restored lot-level traceability, and certain exporters, cooperatives, and vertically integrated producers gained the right to sell directly to overseas buyers through direct specialty export licenses. Today, growing volumes of specialty Ethiopian coffee move outside the auction system entirely, traded through <Link href='/insights/private-vs-cooperative-ethiopian-coffee-exporters' className='underline font-bold'>private exporters and cooperative unions</Link> with direct relationships to washing stations and international roasters.
      </p>

      <h3 className='text-xl font-bold mt-6'>Kenya: Nairobi Coffee Exchange and &quot;Second Window&quot;</h3>

      <p className='my-4'>
        The Nairobi Coffee Exchange (NCE) has been Kenya&apos;s primary coffee market since the 1930s. Each estate or cooperative society works with a marketing agent, who brings coffees to weekly Tuesday auctions across the year. Agents sample-tender milled coffees to interested bidders, and an electronic trigger system replaces the old open-outcry format. Exporters bid at auction and then sell to importers. The exchange traded $127.8 million worth of coffee in the 2022/2023 crop year (Kenya National Bureau of Statistics).
      </p>

      <p className='my-4'>
        The &quot;Second Window&quot; system allows farmers and buyers (roasters, importers) to negotiate prices directly, bypassing the auction. Some exporters cup and purchase coffees from their associated marketing agents or mills, negotiating based on the previous week&apos;s auction prices for specific grades. This channel has grown significantly, particularly for high-scoring specialty lots where buyers want to lock in specific factories year after year.
      </p>

      <p className='my-4'>
        For importers, the practical difference is this: Ethiopian specialty coffee is increasingly available through direct export relationships with transparent pricing. Kenyan specialty coffee is still partially tied to a competitive auction system where prices can spike sharply for sought-after lots, making cost prediction harder but also enabling access to coffees that would otherwise be difficult to source.
      </p>

      {/* SECTION 8: PRODUCTION AND EXPORT DATA */}
      <h2 id="production-export" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineChartBar className='text-amber-600' />
        Production and Export Data
      </h2>

      <p className='my-4'>
        The scale difference between these origins is significant and directly affects sourcing strategy.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Metric</th>
              <th className='p-3 text-left font-bold'>Ethiopia</th>
              <th className='p-3 text-left font-bold'>Kenya</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Global rank (production)</td>
              <td className='p-3'>5th (Africa&apos;s largest)</td>
              <td className='p-3'>~20th to 25th globally</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Annual production</td>
              <td className='p-3'>~7.8 million bags (60 kg)</td>
              <td className='p-3'>~0.8 to 0.9 million bags (60 kg)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Export volume</td>
              <td className='p-3'>~4.0 million bags</td>
              <td className='p-3'>~0.7 to 1.0 million bags</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Domestic consumption</td>
              <td className='p-3'>~50% of production (among highest globally)</td>
              <td className='p-3'>Less than 5% (Kenyans predominantly drink tea)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Farming families</td>
              <td className='p-3'>4+ million smallholders</td>
              <td className='p-3'>~700,000 families (6 million employed directly or indirectly)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Average farm size</td>
              <td className='p-3'>&lt;0.5 hectares</td>
              <td className='p-3'>Smallholders: 1 to 14 hectares; Estates: 15 to 50 hectares</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold'>Top export destinations</td>
              <td className='p-3'>Germany, Saudi Arabia, Japan, USA, China</td>
              <td className='p-3'>USA, Germany, Belgium, Sweden, South Korea</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Ethiopia produces roughly 8 to 10 times more coffee than Kenya. However, Ethiopia consumes roughly half its output domestically (one of the highest rates globally), so its exportable surplus is around 4 million bags. Kenya exports the vast majority of what it grows, but total production peaked at about 130,000 tonnes in 1987/88 and has declined to 34,500 to 51,900 tonnes in recent years (Kenya National Bureau of Statistics). This decline is driven by urban expansion in traditional coffee-growing counties (Kiambu especially), price instability, and aging tree stock.
      </p>

      <p className='my-4'>
        For importers, Ethiopia offers significantly more volume and sourcing flexibility. Kenya offers less total supply, which contributes to its higher pricing but also means competition for the best lots is fierce, especially at auction. For detailed Ethiopian market data, see our <Link href='/insights/top-ethiopian-coffee-importers-buyers-2024-2025' className='underline font-bold'>top Ethiopian coffee importers report</Link>.
      </p>

      {/* SECTION 9: PRICING AND COST */}
      <h2 id="pricing-cost" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineCurrencyDollar className='text-amber-600' />
        Pricing and Cost for Buyers
      </h2>

      <p className='my-4'>
        Both origins trade at premiums to the ICE New York C-market, but the pricing mechanisms and FOB levels differ meaningfully.
      </p>

      <h3 className='text-xl font-bold mt-6'>Ethiopian Coffee Pricing</h3>

      <p className='my-4'>
        Ethiopian coffee pricing is set through ECX indicative prices and direct negotiation between exporters and importers. The ECX publishes daily minimum prices by region, grade, and processing method, which serve as floor prices. Specialty lots trade at significant premiums above these floors. FOB Djibouti prices for specialty Ethiopian coffee typically range from $3.50 to $7.00+ per pound, depending on region, grade, and season. Competition-grade lots (Q1, 87+ cupping score) can exceed $8.00 per pound. For a full breakdown, see our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='underline font-bold'>Ethiopian coffee pricing guide</Link>.
      </p>

      <h3 className='text-xl font-bold mt-6'>Kenyan Coffee Pricing</h3>

      <p className='my-4'>
        Kenyan coffee is among the most expensive specialty Arabica on earth. Auction dynamics drive prices: highly sought-after AA lots from Nyeri, Kirinyaga, and Embu can spike dramatically during competitive bidding, especially in years with tight supply. FOB Mombasa prices for specialty Kenyan coffee typically range from $4.00 to $9.00+ per pound for top AA and PB lots. Standard AB lots for blending or lower-end single origin trade from $3.00 to $5.00 per pound. Second Window (direct) pricing can be more predictable but still reflects auction benchmarks.
      </p>

      <p className='my-4'>
        Kenyan pricing premiums over Ethiopian coffee of comparable cupping scores range from $0.50 to $3.00+ per pound. This premium reflects limited supply (Kenya produces roughly one-tenth of Ethiopia&apos;s output), intense auction competition, the marketing cachet of the Kenya AA brand, and the logistics costs of a smaller origin. For importers comparing landed costs, Ethiopian coffee ships via the Port of Djibouti, while Kenyan coffee ships via Mombasa. Transit times to Europe are comparable (15 to 22 days). Transit to the US East Coast is similar for both; to the US West Coast, Mombasa has a slight advantage for Pacific routing.
      </p>

      <p className='my-4'>
        For guidance on Ethiopian contract structures and payment terms, see our <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='underline font-bold'>contracts and payment terms guide</Link>.
      </p>

      {/* SECTION 10: SEASONAL AVAILABILITY */}
      <h2 id="seasonal-windows" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineCalendarDays className='text-amber-600' />
        Seasonal Availability
      </h2>

      <p className='my-4'>
        Both origins have similar harvest cycles, but the availability windows differ in important ways. Fresh-crop quality degrades over time even with proper <Link href='/insights/green-coffee-shelf-life-storage-guide' className='underline font-bold'>storage</Link>, so timing matters.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Phase</th>
              <th className='p-3 text-left font-bold'>Ethiopia</th>
              <th className='p-3 text-left font-bold'>Kenya</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Main harvest</td>
              <td className='p-3'>October to February</td>
              <td className='p-3'>August to January (main/late crop)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Secondary harvest</td>
              <td className='p-3'>None (single harvest)</td>
              <td className='p-3'>April to July (fly/early crop, smaller volumes)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Processing and milling</td>
              <td className='p-3'>December to April</td>
              <td className='p-3'>Main: January to March; Fly: August to October</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Fresh crop availability</td>
              <td className='p-3'>February to June</td>
              <td className='p-3'>March to May (main); September to November (fly)</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold'>Best buying window</td>
              <td className='p-3'>March to May (widest selection, freshest lots)</td>
              <td className='p-3'>March to May (main crop arrivals)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Kenya&apos;s fly crop (secondary harvest, April to July) provides some additional supply, but it typically represents smaller volumes and does not match main crop quality. Both origins&apos; main crops arrive in similar windows (March to May), so importers can evaluate fresh samples from both origins simultaneously. For a region-by-region Ethiopian harvest breakdown, see our <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='underline font-bold'>Ethiopian coffee harvest calendar</Link>.
      </p>

      {/* SECTION 11: WHICH ORIGIN */}
      <h2 id="which-origin" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineShoppingCart className='text-amber-600' />
        Which Origin Fits Your Business?
      </h2>

      <h3 className='text-xl font-bold mt-6'>Choose Ethiopian Coffee If You Need...</h3>

      <ul className='list-disc pl-6 space-y-2 my-4'>
        <li><span className='font-bold'>Maximum flavor diversity:</span> Ethiopian origins span floral Yirgacheffe, fruity Guji, wine-like Harrar, and balanced Limu. No other origin offers this range within a single country.</li>
        <li><span className='font-bold'>Natural processed specialty:</span> Ethiopian naturals set the global standard for bold, fruit-forward cups. If your customers love blueberry, strawberry, or tropical fruit in their filter coffee, Ethiopian naturals deliver.</li>
        <li><span className='font-bold'>Higher volume availability:</span> With 4+ million bags exported annually, Ethiopian coffee offers more sourcing flexibility, easier container fulfillment, and competitive <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='underline font-bold'>minimum order quantities</Link>.</li>
        <li><span className='font-bold'>Competitive pricing at quality:</span> Ethiopian G1 specialty lots at $3.50 to $5.50/lb represent strong value against comparable cupping scores from other specialty origins.</li>
        <li><span className='font-bold'>Story and heritage:</span> Ethiopia as the birthplace of coffee carries genuine narrative weight for retail marketing and consumer engagement.</li>
      </ul>

      <h3 className='text-xl font-bold mt-6'>Choose Kenyan Coffee If You Need...</h3>

      <ul className='list-disc pl-6 space-y-2 my-4'>
        <li><span className='font-bold'>Unique, intense acidity:</span> The blackcurrant-grapefruit-phosphoric acid profile of top SL-28 and SL-34 lots cannot be replicated from any other origin. If your program needs that signature juicy brightness, Kenya is the only source.</li>
        <li><span className='font-bold'>Factory-level consistency:</span> Because Kenya uses a small number of documented varieties and standardized processing, you can return to the same factory and grade year after year with more predictable results than Ethiopian lots.</li>
        <li><span className='font-bold'>Premium positioning:</span> Kenya AA is one of the most recognized grade-origin combinations in specialty coffee. It commands premium retail pricing and carries strong brand recognition among educated coffee consumers.</li>
        <li><span className='font-bold'>Heavier body for filter brewing:</span> Kenyan coffees tend to have more body than Ethiopian washed lots, making them excellent candidates for pour-over, batch brew, and Aeropress programs where a fuller mouthfeel is desired.</li>
      </ul>

      <h3 className='text-xl font-bold mt-6'>For East African Blend Programs</h3>

      <p className='my-4'>
        Ethiopian and Kenyan coffees blend exceptionally well. A common specialty approach: Kenyan coffee provides the structured acidity, body, and blackcurrant backbone (30 to 40%), while Ethiopian coffee adds floral top notes, aromatic complexity, and fruit sweetness (40 to 50%), with a third origin or a specific Ethiopian natural to round out the base. This combination creates cups with both the juicy intensity of Kenya and the aromatic lift of Ethiopia. Many roasters who offer a &quot;house filter blend&quot; or an &quot;African blend&quot; use exactly this framework.
      </p>

      <p className='my-4'>
        For guidance on finding the right Ethiopian supply partner, see our <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='underline font-bold'>sourcing guide</Link> and <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='underline font-bold'>how to choose an Ethiopian export company</Link>.
      </p>

      {/* SECTION 12: FAQ */}
      <h2 id="faq" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineQuestionMarkCircle className='text-amber-600' />
        Frequently Asked Questions
      </h2>

      <section className='my-6 space-y-6'>
        <div>
          <h4 className="font-bold text-gray-800 mb-2">Is Ethiopian coffee better than Kenyan coffee?</h4>
          <p className="text-sm text-gray-600">Neither is objectively better. Ethiopian coffee offers broader flavor diversity and more volume at competitive prices. Kenyan coffee delivers a unique, irreplaceable acidity profile from refined varieties. Both produce world-class specialty scoring 85 to 92+. The right choice depends on your product lineup, customer palate, and budget. Many buyers source both origins.</p>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 mb-2">Why is Kenyan coffee more expensive than Ethiopian coffee?</h4>
          <p className="text-sm text-gray-600">Kenya produces roughly one-tenth of Ethiopia&apos;s volume (0.8 to 0.9 million bags vs. 7.8 million). Limited supply, a competitive auction system, strong global demand for the Kenya AA brand, and declining production from land conversion all drive prices higher. Top Kenyan AA lots regularly trade at $2.00 to $4.00 per pound above comparable Ethiopian lots.</p>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 mb-2">What gives Kenyan coffee its distinctive blackcurrant flavor?</h4>
          <p className="text-sm text-gray-600">The blackcurrant and grapefruit character in Kenyan coffee comes from a combination of SL-28 and SL-34 genetics, high-altitude volcanic soils rich in phosphorus, and the extended soak processing method used at Kenyan factories. The phosphoric acid content, unique among coffee origins, creates the sparkling, savory-sweet acidity profile. No single factor alone produces it.</p>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 mb-2">Can I blend Ethiopian and Kenyan coffee?</h4>
          <p className="text-sm text-gray-600">Yes. Ethiopian and Kenyan coffees complement each other well in blends. Kenya contributes structured acidity, body, and savory depth. Ethiopia adds floral aromatics, fruit sweetness, and complexity. A typical ratio is 30 to 40% Kenyan, 40 to 50% Ethiopian, with optional additions. Match development times carefully; Kenyan coffees can handle slightly longer roasts than Ethiopian washed lots.</p>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 mb-2">Does Ethiopia produce more coffee than Kenya?</h4>
          <p className="text-sm text-gray-600">Significantly more. Ethiopia produces approximately 7.8 million 60-kg bags annually, ranking fifth globally and first in Africa. Kenya produces 0.8 to 0.9 million bags. However, Ethiopia consumes roughly half its production domestically, so exportable supply is around 4 million bags. Kenya exports the vast majority of its output, but total volume remains much smaller than Ethiopia&apos;s.</p>
        </div>
      </section>

      {/* CTA */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Premium Ethiopian Coffee Direct from Origin</h4>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Export PLC</span>, a leading Ethiopian coffee exporter, supplies traceable specialty green coffee from Yirgacheffe, Sidamo, Guji, Harrar, Limu, and Jimma. Whether you source Ethiopian coffee as a standalone program or to complement your Kenyan offerings, we provide pre-shipment samples, professional cupping scores, full lot documentation, and competitive FOB Djibouti pricing.
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
              <li>&bull; <Link href='/insights/ethiopian-coffee-vs-colombian-coffee' className='text-amber-700 hover:underline'>Ethiopian Coffee vs Colombian Coffee</Link></li>
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
            <h4 className='font-semibold mb-2 text-sm'>Quality &amp; Processing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality: Defects &amp; Grading</Link></li>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee</Link></li>
              <li>&bull; <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup and Evaluate Ethiopian Samples</Link></li>
              <li>&bull; <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='text-amber-700 hover:underline'>How to Choose an Ethiopian Export Company</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts &amp; Payment Terms</Link></li>
              <li>&bull; <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Ethiopian Coffee MOQ Guide for Importers</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Export PLC. This comparison draws on data from the International Coffee Organization (ICO), FAO, the Kenya National Bureau of Statistics (KNBS), the Ethiopia Commodity Exchange (ECX), the Nairobi Coffee Exchange, Cafe Imports origin reports, and our direct experience as Ethiopian green coffee exporters. Production figures and prices fluctuate by season; contact us for current sourcing options.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot; <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> &middot; <Link href='/about' className='underline'>About Ethio Coffee</Link> &middot; <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { HiOutlineGlobeAlt, HiOutlineChartBar, HiOutlineLightBulb, HiOutlineClipboardDocumentList, HiOutlineQuestionMarkCircle, HiOutlineBeaker, HiOutlineBriefcase, HiOutlineMapPin, HiOutlineHeart } from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopiaCoffeeOriginBirthplace({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        How Ethiopia gave the world Arabica coffee, and why its heritage still shapes every cup
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Ethiopia is the biological and cultural origin of Coffea arabica, home to more than 10,000 wild coffee varieties in its southwestern highland forests.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian coffee forest in the Kaffa region where Arabica coffee originated'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Coffee Culture &amp; Heritage / Ethiopian Coffee Origin / Arabica History / B2B Sourcing Context</span>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />
          Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Ethiopia is the only country where Coffea arabica grows wild in its native forest habitat. With more than 10,000 distinct wild coffee types in the highlands of Kaffa, Bench Maji, and Illubabor, it holds the widest genetic diversity of Arabica on Earth. That diversity gives Ethiopia a sourcing advantage no other origin can match: unique flavor profiles in every region, resilience traits that matter for long-term supply stability, and a cultural depth that adds value for roasters marketing single-origin lots. For importers and green coffee buyers, understanding this heritage is a practical step toward better sourcing decisions.
        </p>
      </div>

      {/* Table of Contents */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Article
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#why-birthplace' className='text-amber-700 hover:underline'>1. Why Ethiopia Is the Birthplace of Coffee</a></li>
          <li><a href='#coffee-traveled' className='text-amber-700 hover:underline'>2. How Coffee Traveled from Ethiopia to the World</a></li>
          <li><a href='#regions-tasting' className='text-amber-700 hover:underline'>3. Ethiopian Coffee Regions: A Tasting Tour</a></li>
          <li><a href='#ceremony' className='text-amber-700 hover:underline'>4. The Ethiopian Coffee Ceremony</a></li>
          <li><a href='#genetic-diversity' className='text-amber-700 hover:underline'>5. Genetic Diversity: Ethiopia&apos;s Greatest Trade Asset</a></li>
          <li><a href='#economy-today' className='text-amber-700 hover:underline'>6. Ethiopia&apos;s Coffee Economy Today</a></li>
          <li><a href='#importers' className='text-amber-700 hover:underline'>7. What Ethiopia&apos;s Heritage Means for Importers</a></li>
          <li><a href='#faq-birthplace' className='text-amber-700 hover:underline'>8. FAQ</a></li>
        </ol>
      </div>

      <p className='my-4'>
        Every Arabica coffee plant on earth traces its genetic roots to the wild-growing forests of southwestern Ethiopia. The birthplace of coffee is not a marketing phrase; it is a scientific fact confirmed by botanical research, genetic studies, and centuries of recorded history. Ethiopia remains Africa&apos;s largest coffee producer and the fifth largest globally, shipping over 300,000 metric tons of green coffee in recent seasons.
      </p>
      <p className='my-4'>
        This article covers the origin story, the culture, the regions, and the trade realities that make Ethiopia&apos;s coffee heritage relevant to anyone who sources, roasts, or sells specialty coffee. Whether you are evaluating your first Ethiopian lot or building a long-term origin program, the context here will sharpen your understanding of why this origin stands apart.
      </p>

      {/* SECTION 1 */}
      <h2 id='why-birthplace' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineGlobeAlt className='text-amber-600' />
        1. Why Ethiopia Is the Birthplace of Coffee
      </h2>

      <p className='my-4'>
        Coffea arabica evolved in the montane rainforests of southwestern Ethiopia, particularly in the regions of Kaffa, Bench Maji, and Illubabor. These forests sit at elevations between 1,400 and 2,100 meters, receiving consistent rainfall and sheltered by a canopy of indigenous trees. The name &quot;Kaffa&quot; itself may have inspired the word &quot;coffee,&quot; though linguists continue to debate the connection.
      </p>
      <p className='my-4'>
        What is not debated is the genetic evidence. A 2024 genome study published in <em>Nature Genetics</em> confirmed that <Link href='/insights/coffee-plant-taxonomy-species-varieties' className='text-amber-700 hover:underline font-bold'>Arabica coffee</Link> originated through natural hybridization of two parent species, Coffea canephora and Coffea eugenioides, in the forests of Ethiopia roughly 600,000 years ago. The resulting species, Coffea arabica, developed its characteristic flavor complexity, lower caffeine content, and sensitivity to altitude in these Ethiopian highlands.
      </p>
      <p className='my-4'>
        More than 10,000 distinct wild coffee types have been catalogued across these forests. That figure dwarfs the genetic base of any other coffee-producing country. Colombia, for comparison, relies primarily on a handful of commercial cultivars (Caturra, Castillo, Colombia). Kenya depends heavily on SL28 and SL34. Ethiopia&apos;s forests hold the reservoir from which all these cultivars ultimately descend.
      </p>

      <h3 className='text-2xl font-bold mt-6 mb-3'>The Legend of Kaldi</h3>
      <p className='my-4'>
        The most widely told origin story involves a goat herder named Kaldi in the Kaffa highlands. Kaldi noticed his goats becoming unusually energetic after eating bright red berries from a forest shrub. He brought the berries to monks at a local monastery, who brewed them into a drink that helped them stay alert during long evening prayers. The story was first recorded in writing in 1671, centuries after the events it describes, so historians treat it as folklore rather than documented fact.
      </p>
      <p className='my-4'>
        Beyond legend, careful observers documented the coffee plant and local consumption practices for centuries. Arab traders recorded beans at Ethiopian markets. Travelers described roasting and brewing methods. Farmers perfected cultivation techniques that brought out particular qualities in the cup. The transition from wild forest fruit to cultivated crop happened gradually, driven by human curiosity rather than any single moment of discovery.
      </p>

      {/* SECTION 2 */}
      <h2 id='coffee-traveled' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineGlobeAlt className='text-amber-600' />
        2. How Coffee Traveled from Ethiopia to the World
      </h2>

      <p className='my-4'>
        Coffee moved out of Ethiopia along established trade routes. By the 15th century, it was being cultivated in Yemen, where Sufi monks used it to sustain concentration during nighttime devotions. The port of Mocha became the first major export hub for coffee, and the name stuck as a descriptor that persists today.
      </p>
      <p className='my-4'>
        From Yemen, coffee spread rapidly across the Arabian Peninsula and into the Ottoman Empire. By the 16th century, coffeehouses (qahveh khaneh) had become central gathering places in Istanbul, Cairo, and Damascus. These were not casual cafes; they functioned as information exchanges, debate halls, and social equalizers. The Ottoman authorities periodically tried to ban them, which only increased their popularity.
      </p>

      <h3 className='text-2xl font-bold mt-6 mb-3'>Coffee Enters Europe</h3>
      <p className='my-4'>
        European travelers and merchants brought coffee back from the Ottoman world in the early 17th century. Venice saw its first coffee imports around 1615. Local clergy condemned the beverage as a &quot;bitter invention of Satan&quot; until Pope Clement VIII tasted it and gave it papal approval. By midcentury, coffeehouses had spread across England, France, Germany, Austria, and the Netherlands.
      </p>
      <p className='my-4'>
        London&apos;s coffeehouses earned the nickname &quot;penny universities&quot; because for the price of a cup, merchants, writers, and professionals could access news and debate. Lloyd&apos;s of London, the global insurance marketplace, started as a coffeehouse. The Dutch eventually broke the Arabian monopoly by transplanting coffee seedlings to Java in the late 1600s, launching plantation cultivation in Southeast Asia, and later in Central and South America.
      </p>

      <div className='bg-gray-50 p-4 rounded-lg border border-gray-200 my-6 text-sm'>
        <p><span className='font-semibold'>Timeline summary:</span> Ethiopia (wild origin, centuries old) &rarr; Yemen (15th century cultivation) &rarr; Ottoman Empire coffeehouses (16th century) &rarr; Europe (17th century) &rarr; Dutch East Indies/Java (late 17th century) &rarr; Americas (18th century) &rarr; Global commodity (19th century onward).</p>
      </div>

      {/* SECTION 3 */}
      <h2 id='regions-tasting' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineMapPin className='text-amber-600' />
        3. Ethiopian Coffee Regions: A Tasting Tour
      </h2>

      <p className='my-4'>
        Ethiopian coffee is inseparable from its place of origin. Regions like <Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline font-bold'>Yirgacheffe</Link>, <Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline font-bold'>Sidamo</Link>, <Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline font-bold'>Guji</Link>, and <Link href='/ethiopian-coffee-harar' className='text-amber-700 hover:underline font-bold'>Harar</Link> are more than flavor descriptors. They are distinct microclimates with specific soil, altitude, and rainfall patterns that shape what ends up in the cup. Ethiopia trademarked these regional names to protect their identity and economic value.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Region</th>
              <th className='p-3 text-left'>Altitude (m)</th>
              <th className='p-3 text-left'>Typical Processing</th>
              <th className='p-3 text-left'>Flavor Profile</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Yirgacheffe</td>
              <td className='p-3'>1,750 &ndash; 2,200</td>
              <td className='p-3'>Washed &amp; Natural</td>
              <td className='p-3'>Floral, citrus, jasmine, tea-like body</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Sidamo</td>
              <td className='p-3'>1,500 &ndash; 2,200</td>
              <td className='p-3'>Washed &amp; Natural</td>
              <td className='p-3'>Berry, stone fruit, balanced acidity, wine-like complexity</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Guji</td>
              <td className='p-3'>1,800 &ndash; 2,300</td>
              <td className='p-3'>Washed &amp; Natural</td>
              <td className='p-3'>Tropical fruit, floral clarity, soft sweetness</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Harar</td>
              <td className='p-3'>1,500 &ndash; 2,100</td>
              <td className='p-3'>Natural (dry-processed)</td>
              <td className='p-3'>Blueberry, wine, bold aromatics, heavy body</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-limu' className='text-amber-700 hover:underline'>Limu</Link></td>
              <td className='p-3'>1,400 &ndash; 2,000</td>
              <td className='p-3'>Washed</td>
              <td className='p-3'>Low acidity, spice, balanced, clean cup</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-jimma' className='text-amber-700 hover:underline'>Jimma</Link></td>
              <td className='p-3'>1,400 &ndash; 1,800</td>
              <td className='p-3'>Natural &amp; Washed</td>
              <td className='p-3'>Earthy, full-bodied, herbal, dark chocolate</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Kaffa</td>
              <td className='p-3'>1,400 &ndash; 2,100</td>
              <td className='p-3'>Forest / Semi-forest</td>
              <td className='p-3'>Wild, complex, variable terroir expression</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Coffee grown at higher elevations ripens more slowly, developing denser cells packed with sugars and organic acids. This is why altitude matters for specialty grading and why Ethiopian coffees from zones above 1,800 meters routinely score 85 or higher on the SCA scale. For a detailed breakdown of these origins, see our <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline font-bold'>complete guide to Ethiopian coffee origins</Link>.
      </p>
      <p className='my-4'>
        Even within a single region, processing choices create dramatic flavor differences. A washed Yirgacheffe from Kochere tastes nothing like a natural from the same woreda. A Guji lot processed anaerobically will present entirely different characteristics than a traditional sun-dried natural from the same cooperative. Our article on <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline font-bold'>washed vs natural Ethiopian coffee processing</Link> covers these distinctions in detail.
      </p>

      {/* SECTION 4 */}
      <h2 id='ceremony' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineHeart className='text-amber-600' />
        4. The Ethiopian Coffee Ceremony
      </h2>

      <p className='my-4'>
        In Ethiopia, coffee is a social language. The traditional coffee ceremony (known as &quot;buna&quot;) is an unhurried ritual that blends craft, hospitality, and community. It is practiced daily in homes, businesses, and public gatherings across the country. For Ethiopians, coffee is not a quick caffeine delivery; it is a moment of human connection.
      </p>

      <h3 className='text-2xl font-bold mt-6 mb-3'>How the Ceremony Works</h3>
      <p className='my-4'>
        A host begins by washing green coffee beans, then roasting them over an open flame or charcoal in a flat pan called a menkeshkesh. As the beans darken, the aroma fills the room, and the host often fans the smoke toward guests as an invitation. The roasted beans are ground by hand using a mortar (mukecha) and pestle (zenezena), then brewed in a jebena, a round clay pot with a narrow spout.
      </p>
      <p className='my-4'>
        Three rounds are served. The first, called abol, is the strongest. The second, tona, is milder. The third, baraka (meaning &quot;blessing&quot;), is the lightest. Leaving before the third round is considered impolite. The ceremony often lasts an hour or more, accompanied by frankincense, popcorn, and conversation. For buyers visiting Ethiopian washing stations or cooperatives, participating in a coffee ceremony is standard practice and a sign of mutual respect.
      </p>
      <p className='my-4'>
        For a deeper look at the ceremony&apos;s cultural significance and what it means for trade relationships, read our dedicated article on the <Link href='/insights/ethiopian-coffee-ceremony' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee ceremony</Link>.
      </p>

      <p className='my-4 font-medium'>
        This short documentary captures Ethiopia&apos;s coffee culture and history:
      </p>

      <iframe className='w-full h-[450px] my-6' src="https://www.youtube.com/embed/voMC-eICDrg" title="Ethiopia - The Birthplace of Coffee" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

      {/* SECTION 5 */}
      <h2 id='genetic-diversity' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineBeaker className='text-amber-600' />
        5. Genetic Diversity: Ethiopia&apos;s Greatest Trade Asset
      </h2>

      <p className='my-4'>
        The 10,000+ wild coffee types in Ethiopia&apos;s forests represent a genetic reservoir found nowhere else. Every major commercial Arabica cultivar, from Brazil&apos;s Mundo Novo to Panama&apos;s Gesha to Kenya&apos;s SL28, traces its lineage back to Ethiopian genetic material. Most coffee-producing countries depend on a narrow genetic base of just a few dozen cultivars. Ethiopia&apos;s forests hold the ancestors and the yet-undiscovered variants.
      </p>

      <div className='bg-blue-50 p-6 rounded-lg my-6 border border-blue-200'>
        <p className='font-bold text-lg mb-3 text-blue-900 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-2xl' />
          Why This Matters for Buyers
        </p>
        <ul className='space-y-2 text-sm'>
          <li><span className='font-bold'>Flavor exclusivity:</span> Ethiopian lots offer cup profiles (floral, citrus, wine, tropical fruit) that are structurally impossible to replicate from narrower genetic bases. A washed Yirgacheffe and a natural Guji are as different from each other as they are from a washed Colombian.</li>
          <li><span className='font-bold'>Disease resistance:</span> Coffee leaf rust (Hemileia vastatrix) has devastated plantations in Central America and Southeast Asia. Ethiopian wild varieties carry natural resistance traits that plant breeders worldwide depend on for developing resilient cultivars.</li>
          <li><span className='font-bold'>Climate adaptation:</span> As growing conditions shift globally, the genetic diversity in Ethiopia&apos;s forests provides raw material for developing varieties that tolerate heat, drought, and altered rainfall patterns.</li>
          <li><span className='font-bold'>Marketing differentiation:</span> Roasters can tell a genuine origin story backed by science. &quot;From the forests where coffee began&quot; is not a slogan. It is a documented fact that resonates with specialty consumers.</li>
        </ul>
      </div>

      <p className='my-4'>
        Ethiopia commonly refers to its diverse cultivars as &quot;heirloom&quot; varieties, a catch-all term for the thousands of indigenous types that lack formal cultivar names. Recently, the Jimma Agricultural Research Center (JARC) has released named varieties bred for disease resistance, yield, and cup quality. For a detailed look at this topic, see our article on <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline font-bold'>Ethiopian heirloom coffee varieties and landraces</Link>.
      </p>

      {/* SECTION 6 */}
      <h2 id='economy-today' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineChartBar className='text-amber-600' />
        6. Ethiopia&apos;s Coffee Economy Today
      </h2>

      <p className='my-4'>
        Coffee is the backbone of Ethiopia&apos;s agricultural economy. The country produced 496,200 tonnes in 2022 according to the UN Food and Agriculture Organization (FAO), making it Africa&apos;s top producer and the world&apos;s fifth largest. Roughly half of all coffee produced is consumed domestically, the highest rate on the continent, which reflects how deeply the beverage is embedded in daily life.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Indicator</th>
              <th className='p-3 text-left'>Figure</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>Total production (2022)</td>
              <td className='p-3'>496,200 tonnes (FAO)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3'>Global ranking</td>
              <td className='p-3'>5th worldwide, 1st in Africa</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>Number of farmers</td>
              <td className='p-3'>4+ million smallholders</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3'>Domestic consumption</td>
              <td className='p-3'>~50% of production</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>Primary export markets</td>
              <td className='p-3'>EU (~50%), East Asia (~25%), North America</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3'>Cultivation area</td>
              <td className='p-3'>~4,000 km&sup2; (estimated)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>Coffee&apos;s share of export revenue</td>
              <td className='p-3'>~30-35% of total foreign exchange</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Most Ethiopian coffee is produced by smallholder farmers cultivating plots under two hectares. Production methods vary from fully wild forest coffee (Kaffa, Bench Maji) to semi-forest systems where farmers manage shade trees, to garden coffee grown around homesteads, to the smaller number of modern plantations. Nearly all cultivating, harvesting, and drying is done by hand.
      </p>

      <h3 className='text-2xl font-bold mt-6 mb-3'>ECX Reforms and Traceability</h3>
      <p className='my-4'>
        The Ethiopia Commodity Exchange (ECX), established in 2008, initially pooled coffee by grade and region, which stripped specific origin traceability. Beginning in 2017, a series of reforms restored the ability to trace lots back to specific washing stations and cooperatives. Licensed exporters can now sell directly to overseas buyers, and a growing number operate under direct specialty export licenses outside the auction system.
      </p>
      <p className='my-4'>
        These reforms have reshaped the export landscape. Private and cooperative channels now account for a larger share of exports, particularly for high-scoring specialty lots. For a complete picture of how the ECX system works, see our <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline font-bold'>ECX and Ethiopian coffee export guide</Link>.
      </p>

      {/* SECTION 7 */}
      <h2 id='importers' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineBriefcase className='text-amber-600' />
        7. What Ethiopia&apos;s Heritage Means for Importers
      </h2>

      <p className='my-4'>
        For green coffee buyers, Ethiopia&apos;s origin heritage is more than cultural context. It translates into concrete sourcing advantages that affect your business.
      </p>

      <ul className='list-disc ml-5 space-y-2 text-sm my-4'>
        <li><span className='font-bold'>Traceability to washing station level:</span> Post-2017 ECX reforms allow buyers to identify the specific cooperative or washing station behind a lot. This enables consistent reordering and relationship building.</li>
        <li><span className='font-bold'>Variety selection unavailable elsewhere:</span> Ethiopian heirloom lots offer cup complexity that commercial cultivars cannot replicate. Roasters building a single-origin program gain genuine differentiation.</li>
        <li><span className='font-bold'>Processing method diversity:</span> Ethiopian exporters offer washed, natural, honey, and <Link href='/insights/anaerobic-ethiopian-coffee-processing-buyers-guide' className='text-amber-700 hover:underline'>anaerobic processed</Link> lots from the same region, giving buyers a range of flavor profiles under one origin.</li>
        <li><span className='font-bold'>Certification availability:</span> Organic, Fairtrade, Rainforest Alliance, and UTZ-certified lots are available across most regions. See our <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>certifications guide</Link> for details.</li>
        <li><span className='font-bold'>Origin storytelling backed by science:</span> &quot;From the birthplace of coffee&quot; is verifiable, not aspirational. Roasters can market this honestly to consumers who increasingly value transparency.</li>
      </ul>

      <h3 className='text-2xl font-bold mt-6 mb-3'>Questions to Ask When Sourcing</h3>
      <p className='my-4'>
        If you are evaluating Ethiopian coffee for the first time or expanding an existing program, consider these practical questions:
      </p>
      <ol className='list-decimal ml-5 space-y-2 text-sm my-4'>
        <li>What is the specific washing station or cooperative behind this lot?</li>
        <li>What varietals are included (named cultivars or heirloom mix)?</li>
        <li>What processing method was used, and what were the drying conditions?</li>
        <li>What are the current cupping scores and when were samples pulled?</li>
        <li>What certifications does this lot carry?</li>
        <li>What is the export timeline from contract to shipment?</li>
      </ol>
      <p className='my-4'>
        For step-by-step guidance on the sourcing process, our <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline font-bold'>guide to sourcing green coffee from Ethiopia</Link> covers everything from initial contact through final shipment.
      </p>

      <div className='bg-amber-50 p-4 rounded-lg border border-amber-100 my-4 text-sm'>
        <p className='font-semibold mb-1'>About Ethio Coffee Import and Export PLC:</p>
        <p>We are an origin-connected exporter with three decades of heritage sourcing relationships across Ethiopia&apos;s coffee regions. Our trusted network of cooperatives, washing stations, and farming communities gives us direct access to traceable lots from Yirgacheffe, Guji, Sidamo, Harar, Limu, Jimma, and Kaffa. We do not own farms; we build long-term relationships with the people who grow and process Ethiopia&apos;s finest coffees.</p>
      </div>

      {/* EXTERNAL REFERENCES */}
      <div className='my-8'>
        <h3 className='text-xl font-extrabold mb-3'>Sources and Further Reading</h3>
        <ul className='list-disc ml-5 space-y-2 text-sm'>
          <li>
            <a href='https://en.wikipedia.org/wiki/Coffee_production_in_Ethiopia' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>
              Wikipedia: Coffee Production in Ethiopia
            </a> &mdash; Production statistics, regional varieties, ECX history
          </li>
          <li>
            <a href='https://www.ico.org' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>
              International Coffee Organization (ICO)
            </a> &mdash; Global trade data and country profiles
          </li>
          <li>
            <a href='https://sca.coffee' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>
              Specialty Coffee Association (SCA)
            </a> &mdash; Standards, research, and value assessment protocols
          </li>
          <li>
            <a href='https://www.fao.org/faostat/en/#data/QCL' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>
              FAO FAOSTAT: Crops and Livestock Products
            </a> &mdash; Official production data by country
          </li>
        </ul>
      </div>

      {/* FAQ SECTION */}
      <section id='faq-birthplace' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200 mt-10'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2'>
          <HiOutlineQuestionMarkCircle className='text-amber-600 flex-shrink-0' />
          Frequently Asked Questions
        </h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Why is Ethiopia called the birthplace of coffee?</h4>
            <p className='text-sm text-gray-600'>Ethiopia is the only country where Coffea arabica grows wild in its native forest habitat. Genetic research confirms all Arabica coffee traces back to Ethiopian wild populations. The southwestern highlands of Kaffa, Bench Maji, and Illubabor hold over 10,000 distinct wild coffee types, the widest genetic diversity of any origin.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How was coffee discovered in Ethiopia?</h4>
            <p className='text-sm text-gray-600'>The most widely known story involves Kaldi, a goat herder who noticed his goats becoming energetic after eating red coffee berries. He brought them to local monks, who brewed the first coffee drink. While the legend was first recorded in 1671, botanical and genetic evidence confirms Ethiopia&apos;s southwestern forests as the origin point of Arabica coffee.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What does Ethiopian coffee taste like?</h4>
            <p className='text-sm text-gray-600'>Flavors vary dramatically by region due to Ethiopia&apos;s genetic diversity. Yirgacheffe is known for floral and citrus notes; Sidamo offers berry complexity and balanced acidity; Guji delivers tropical fruit and soft sweetness; Harar presents bold blueberry and wine-like character. Processing method also shapes the final cup significantly.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the Ethiopian coffee ceremony?</h4>
            <p className='text-sm text-gray-600'>The Ethiopian coffee ceremony is a traditional social ritual where green beans are roasted, ground, and brewed in a clay jebena pot in front of guests. Three rounds are served: abol (strongest), tona (moderate), and baraka (lightest). The ceremony emphasizes hospitality and community, typically lasting an hour or more.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How does Ethiopia&apos;s coffee heritage benefit green coffee buyers?</h4>
            <p className='text-sm text-gray-600'>Ethiopia&apos;s unmatched genetic diversity produces flavor profiles unavailable from any other origin. Post-2017 ECX reforms enable traceability to specific washing stations. Buyers gain access to multiple processing methods, certified organic options, and an authentic origin story backed by scientific evidence rather than marketing claims.</p>
          </div>
        </div>
      </section>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Coffee from the Birthplace of Arabica</h4>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Import and Export PLC</span> exports traceable, high-quality green coffee from Ethiopia&apos;s legendary growing regions. From delicate washed Yirgacheffe to bold natural Guji, we offer pre-shipment samples, cupping scores, and full traceability documentation.
        </p>
        <p className='my-2'>
          Our three decades of heritage sourcing relationships with cooperatives and washing stations across Ethiopia ensure consistent quality, fair pricing, and the origin transparency that specialty buyers expect.
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
            <h4 className='font-semibold mb-2 text-sm'>Origins &amp; Culture</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-ceremony' className='text-amber-700 hover:underline'>The Ethiopian Coffee Ceremony</Link></li>
              <li>&bull; <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Coffee Origins</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Ethiopian Heirloom Coffee Varieties</Link></li>
              <li>&bull; <Link href='/insights/women-in-ethiopian-coffee-industry' className='text-amber-700 hover:underline'>Women in Ethiopian Coffee Industry</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality &amp; Processing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Washing Stations Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality Control &amp; Grading</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process</Link></li>
              <li>&bull; <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='text-amber-700 hover:underline'>Choosing an Ethiopian Coffee Exporter</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Market Intelligence</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-climate-change-impact' className='text-amber-700 hover:underline'>Climate Change and Ethiopian Coffee</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Contracts &amp; Payment Terms Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC. This article covers Ethiopia&apos;s role as the birthplace of Arabica coffee, its genetic diversity, regional flavor profiles, coffee ceremony traditions, economic significance, and what this heritage means for green coffee importers. Information about coffee regions and trade practices may evolve; <Link href='/contact-us' className='underline'>contact us</Link> for current details.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot; <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> &middot; <Link href='/about' className='underline'>About Ethio Coffee</Link> &middot; <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

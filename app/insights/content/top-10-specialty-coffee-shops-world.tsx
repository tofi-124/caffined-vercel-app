import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineGlobeAlt,
  HiOutlineStar,
  HiOutlineLightBulb,
  HiOutlineCheckCircle,
  HiOutlineSparkles,
  HiOutlineBeaker,
  HiOutlineTrophy
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function Top10SpecialtyCoffeeShops({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        What the world&apos;s top 10 specialty coffee shops reveal about sourcing standards, roasting philosophy, and the global demand for Ethiopian origins.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Inside the shops setting global benchmarks for specialty coffee sourcing and service.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Best specialty coffee shops in the world featuring Ethiopian single-origin espresso'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-2'>Key Takeaway</p>
        <p>
          The best specialty coffee shops in the world share a defining trait: relentless sourcing standards. From Oslo to Melbourne, the shops on this list score 86+ on the SCA scale, maintain direct origin relationships, and feature Ethiopian single-origin coffees as menu anchors. For green coffee buyers, these shops signal where demand is heading and which origins command premium shelf space.
        </p>
      </div>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Global Insights / Specialty Coffee / Sourcing Intelligence / Coffee Culture</span>
      </div>

      <p className='my-4'>
        Specialty coffee has moved from niche curiosity to a global market worth over $50 billion annually. The best specialty coffee shops in the world are not destinations for casual caffeine. They are sourcing laboratories, flavor benchmarks, and the frontline of green coffee demand. Each one publishes origin data, cupping scores, and lot-level traceability that importers and roasters study closely.
      </p>

      <p className='my-4'>
        For coffee professionals, this list offers more than travel recommendations. It maps the sourcing preferences, processing choices, and pricing signals that define the upper tier of the specialty market in 2026. Nearly every shop below features <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Ethiopian origins</Link> as essential menu components.
      </p>

      <h3 className='text-2xl font-extrabold mt-8 flex items-center gap-3'>
        <HiOutlineTrophy className='w-8 h-8 text-amber-600' />
        What Makes a Specialty Coffee Shop World Class
      </h3>

      <p className='my-4'>
        Ranking coffee shops requires clear criteria. The World&apos;s 100 Best Coffee Shops survey, which evaluated over 15,000 shops in 2026 using 800+ expert judges and 350,000 public votes, emphasizes four dimensions. We applied similar standards here.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-amber-200 rounded-lg p-5 bg-amber-50'>
          <h4 className='font-bold mb-2'>Sourcing Transparency</h4>
          <p className='text-sm'>Published lot details, cupping scores (86+), and traceable supply chains from farm or washing station to cup. Direct trade or equivalent relationships.</p>
        </div>
        <div className='border border-amber-200 rounded-lg p-5 bg-amber-50'>
          <h4 className='font-bold mb-2'>Roasting Philosophy</h4>
          <p className='text-sm'>A distinct, consistent approach to roasting that highlights terroir over roast flavor. Most leaders roast light to medium-light to preserve origin character.</p>
        </div>
        <div className='border border-amber-200 rounded-lg p-5 bg-amber-50'>
          <h4 className='font-bold mb-2'>Barista Expertise</h4>
          <p className='text-sm'>Trained staff who guide customers through origins, processing methods, and brew variables. Often competition-level baristas or certified Q graders on the team.</p>
        </div>
        <div className='border border-amber-200 rounded-lg p-5 bg-amber-50'>
          <h4 className='font-bold mb-2'>Innovation &amp; Impact</h4>
          <p className='text-sm'>Advancing the industry through new processing techniques, menu formats, sustainability programs, or global expansion that raises standards regionally.</p>
        </div>
      </div>

      <hr className='my-8 border-gray-200' />

      {/* SHOP 1 */}
      <div className='my-8'>
        <div className='flex items-center gap-2 mb-2'>
          <span className='bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded'>#1</span>
          <span className='text-sm font-semibold text-gray-500 uppercase tracking-wide'>Oslo, Norway</span>
        </div>
        <h3 className='text-2xl font-extrabold text-dark'>Tim Wendelboe</h3>
        <p className='my-4'>
          Tim Wendelboe remains the global reference point for Nordic light roasting. His single-room shop in Grünerløkka, Oslo, serves coffees roasted to preserve complex acidity and floral aromatics. Wendelboe sources from roughly 15 farms across six countries, paying premiums that often exceed Fair Trade minimums by 200-300%.
        </p>
        <p className='my-4'>
          Ethiopian coffees, particularly washed lots from Yirgacheffe and Guji, are permanent fixtures on his menu. His 2024 crop featured a washed Yirgacheffe Konga scoring 90.5 points. For importers, Wendelboe&apos;s sourcing choices signal where the Nordic market&apos;s quality floor sits: nothing below 87 SCA points makes the cut.
        </p>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <p className='text-sm mb-2'><span className='font-bold'><HiOutlineStar className='inline mr-1' /> Sourcing Signal:</span> Consistent demand for washed Ethiopian lots scoring 87+. Pays quality premiums well above commodity benchmarks.</p>
          <p className='text-sm'><span className='font-bold'><HiOutlineBeaker className='inline mr-1' /> The Order:</span> A flight of seasonal washed Ethiopian micro-lots to compare terroir across harvest months.</p>
        </div>
      </div>

      {/* SHOP 2 */}
      <div className='my-8'>
        <div className='flex items-center gap-2 mb-2'>
          <span className='bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded'>#2</span>
          <span className='text-sm font-semibold text-gray-500 uppercase tracking-wide'>Tokyo, Japan</span>
        </div>
        <h3 className='text-2xl font-extrabold text-dark'>Koffee Mameya</h3>
        <p className='my-4'>
          Koffee Mameya operates as a coffee sommelier counter rather than a conventional cafe. Located in Omotesando, Tokyo, it does not roast its own beans. Instead, staff in lab coats guide visitors through a &quot;coffee matrix&quot; of curated roasts sourced from elite roasters worldwide. A single cup can cost $15-$30.
        </p>
        <p className='my-4'>
          Japan imported 6.97 million 60-kg bags of green coffee in the 2023/24 season (ICO data), and specialty shops like Mameya drive demand for traceable, high-scoring lots. Their curation model proves that presentation, storytelling, and lot-level data are as valuable as the roast itself. Ethiopian naturals from Guji appear frequently in their rotation.
        </p>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <p className='text-sm mb-2'><span className='font-bold'><HiOutlineStar className='inline mr-1' /> Sourcing Signal:</span> Curation-driven demand. Buys finished roasts from top roasters, but the underlying green must score 88+ to qualify.</p>
        </div>
      </div>

      {/* SHOP 3 */}
      <div className='my-8'>
        <div className='flex items-center gap-2 mb-2'>
          <span className='bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded'>#3</span>
          <span className='text-sm font-semibold text-gray-500 uppercase tracking-wide'>Bentonville, Arkansas, USA</span>
        </div>
        <h3 className='text-2xl font-extrabold text-dark'>Onyx Coffee Lab</h3>
        <p className='my-4'>
          Onyx Coffee Lab earned the #1 global ranking on the World&apos;s 100 Best Coffee Shops list in both 2025 and 2026. Founded by Andrea Allen and Jon Allen, Onyx combines competition-level precision with transparent sourcing data. Every lot on their menu includes the farm name, processing method, altitude, SCA score, and the price paid to the producer.
        </p>
        <p className='my-4'>
          Their Ethiopian offerings consistently include washed and natural lots from Yirgacheffe, Sidamo, and Guji, often scoring 88-92. Onyx&apos;s published pricing data shows premiums of $5-$12/lb above commodity rates for Ethiopian specialty lots. That transparency sets the standard for how exporters should present lot-level information to the US market.
        </p>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <p className='text-sm mb-2'><span className='font-bold'><HiOutlineStar className='inline mr-1' /> Sourcing Signal:</span> Full pricing transparency. Ethiopian lots are menu staples. Demands farm-level traceability and processing documentation.</p>
        </div>
      </div>

      {/* SHOP 4 */}
      <div className='my-8'>
        <div className='flex items-center gap-2 mb-2'>
          <span className='bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded'>#4</span>
          <span className='text-sm font-semibold text-gray-500 uppercase tracking-wide'>Melbourne, Australia</span>
        </div>
        <h3 className='text-2xl font-extrabold text-dark'>Proud Mary Coffee</h3>
        <p className='my-4'>
          Melbourne sets the tempo for cafe culture in the Southern Hemisphere, and Proud Mary leads the pack. Their &quot;Aunty Peg&apos;s&quot; cellar door serves black coffee only, with cups priced at $20-$50 for rare micro-lots. They have successfully proven that consumers will pay fine-dining prices for exceptional green coffee presented with full provenance.
        </p>
        <p className='my-4'>
          Proud Mary&apos;s Ethiopian selections often feature Gesha and heirloom varieties from Guji and <Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline'>Yirgacheffe</Link>, processed as naturals or honey lots. Australia imported approximately 1.9 million bags of green coffee in 2024 (USDA), with the specialty segment growing at 8% annually. Shops like Proud Mary push the premium ceiling higher each season.
        </p>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <p className='text-sm mb-2'><span className='font-bold'><HiOutlineStar className='inline mr-1' /> Sourcing Signal:</span> High willingness to pay for rare lots. Ethiopian Geshas and heirloom naturals command $50+ per cup at retail.</p>
        </div>
      </div>

      {/* SHOP 5 */}
      <div className='my-8'>
        <div className='flex items-center gap-2 mb-2'>
          <span className='bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded'>#5</span>
          <span className='text-sm font-semibold text-gray-500 uppercase tracking-wide'>Berlin, Germany</span>
        </div>
        <h3 className='text-2xl font-extrabold text-dark'>The Barn</h3>
        <p className='my-4'>
          The Barn brought third-wave coffee to <Link href='/insights/germany-specialty-coffee-market-guide' className='text-amber-700 hover:underline'>Germany&apos;s specialty coffee market</Link> and built a brand that roasters worldwide have replicated. Known for refusing to serve sugar for years, they roast extremely light to expose terroir. Their multi-location model (Berlin, Dubai, Tokyo) proves that uncompromising quality standards can scale internationally.
        </p>
        <p className='my-4'>
          Germany imports over 1 million tonnes of green coffee annually, making it Europe&apos;s largest market. The Barn&apos;s success with Ethiopian single-origins helped establish washed Yirgacheffe and Sidamo as core menu staples across German specialty cafes. Their packaging and brand identity have been widely imitated.
        </p>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <p className='text-sm mb-2'><span className='font-bold'><HiOutlineStar className='inline mr-1' /> Sourcing Signal:</span> Scalable quality model. Ethiopian washed lots serve as the baseline for light-roast programs across multiple locations.</p>
        </div>
      </div>

      {/* SHOP 6 */}
      <div className='my-8'>
        <div className='flex items-center gap-2 mb-2'>
          <span className='bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded'>#6</span>
          <span className='text-sm font-semibold text-gray-500 uppercase tracking-wide'>Brooklyn, New York, USA</span>
        </div>
        <h3 className='text-2xl font-extrabold text-dark'>Sey Coffee</h3>
        <p className='my-4'>
          Sey Coffee in Bushwick, Brooklyn, applies Nordic roasting philosophy to the American market: ultra-light roasts that demand exceptional green quality. Every coffee they release comes in small batches, often from individual farmers or single washing stations. Their menu rotates weekly, which means their sourcing pipeline must deliver consistent quality at volume.
        </p>
        <p className='my-4'>
          Ethiopian lots from Yirgacheffe and Guji appear in nearly every seasonal rotation. Sey&apos;s approach validates a critical point for exporters: roasters at this level need not just quality but reliable access to specific <Link href='/insights/micro-lot-ethiopian-coffee-sourcing-guide' className='text-amber-700 hover:underline'>micro-lots</Link> and washing stations season after season.
        </p>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <p className='text-sm mb-2'><span className='font-bold'><HiOutlineStar className='inline mr-1' /> Sourcing Signal:</span> Micro-lot specialists. Requires lot-specific consistency across seasons, favoring exporters who maintain washing-station relationships.</p>
        </div>
      </div>

      {/* SHOP 7 */}
      <div className='my-8'>
        <div className='flex items-center gap-2 mb-2'>
          <span className='bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded'>#7</span>
          <span className='text-sm font-semibold text-gray-500 uppercase tracking-wide'>Taipei, Taiwan</span>
        </div>
        <h3 className='text-2xl font-extrabold text-dark'>Simple Kaffa</h3>
        <p className='my-4'>
          Founded by Berg Wu, the 2016 World Barista Champion, Simple Kaffa bridges competition-level precision with broad consumer appeal. The flagship location near Taipei&apos;s Huashan 1914 Creative Park seats over 100, a scale that most specialty shops avoid. Wu proved that high-scoring coffees can drive volume, not just exclusivity.
        </p>
        <p className='my-4'>
          Wu&apos;s winning routine used a washed Ethiopian lot, and Ethiopian origins remain central to Simple Kaffa&apos;s rotating menu. Taiwan&apos;s specialty coffee market has grown rapidly, with per-capita consumption rising 4.2% year-over-year through 2025. Simple Kaffa demonstrates the commercial viability of Ethiopian premium lots in East Asian markets.
        </p>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <p className='text-sm mb-2'><span className='font-bold'><HiOutlineStar className='inline mr-1' /> Sourcing Signal:</span> Competition-caliber lots at commercial scale. Ethiopian washed coffees serve both flagship espresso and seasonal filter programs.</p>
        </div>
      </div>

      {/* SHOP 8 */}
      <div className='my-8'>
        <div className='flex items-center gap-2 mb-2'>
          <span className='bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded'>#8</span>
          <span className='text-sm font-semibold text-gray-500 uppercase tracking-wide'>Canberra, Australia</span>
        </div>
        <h3 className='text-2xl font-extrabold text-dark'>Ona Coffee</h3>
        <p className='my-4'>
          Sasa Sestic, 2015 World Barista Champion and star of the documentary <em>The Coffee Man</em>, built Ona Coffee into a research laboratory for processing innovation. Ona pioneered the commercial use of carbonic maceration in coffee, a fermentation technique borrowed from winemaking. They also freeze vintage coffee lots to halt aging, letting customers taste &quot;vintages&quot; from prior harvests.
        </p>
        <p className='my-4'>
          Ona&apos;s &quot;Project Origin&quot; sourcing arm works directly with producers in Ethiopia, Colombia, and Central America. Their <Link href='/insights/anaerobic-ethiopian-coffee-processing-buyers-guide' className='text-amber-700 hover:underline'>anaerobic and experimental processing</Link> work with Ethiopian naturals from Guji has produced auction-winning lots. For exporters, Ona&apos;s model signals growing demand for innovation at the processing level.
        </p>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <p className='text-sm mb-2'><span className='font-bold'><HiOutlineStar className='inline mr-1' /> Sourcing Signal:</span> Processing innovation drives premiums. Buyers like Ona seek exporters offering experimental processing in addition to conventional washed and natural lots.</p>
        </div>
      </div>

      {/* SHOP 9 */}
      <div className='my-8'>
        <div className='flex items-center gap-2 mb-2'>
          <span className='bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded'>#9</span>
          <span className='text-sm font-semibold text-gray-500 uppercase tracking-wide'>Aarhus, Denmark &amp; New York, USA</span>
        </div>
        <h3 className='text-2xl font-extrabold text-dark'>La Cabra</h3>
        <p className='my-4'>
          La Cabra treats coffee as a culinary ingredient. Known equally for its bakery and its roastery, the company started in Aarhus and expanded to Copenhagen, New York, and Bangkok. Their roasting style prioritizes brightness and sweetness, and they have mastered the &quot;omni-roast&quot; approach: beans that perform well as both espresso and filter.
        </p>
        <p className='my-4'>
          La Cabra&apos;s sourcing team visits Ethiopian cooperatives annually, focusing on <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='text-amber-700 hover:underline'>washing stations</Link> in Yirgacheffe and Sidamo that deliver the bright acidity their roast profile demands. Their global expansion proves that traceable Ethiopian lots have universal appeal across Nordic, American, and Southeast Asian palates.
        </p>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <p className='text-sm mb-2'><span className='font-bold'><HiOutlineStar className='inline mr-1' /> Sourcing Signal:</span> Omni-roast demand. Requires green coffee versatile enough for both espresso and filter, which Ethiopian washed lots often deliver.</p>
        </div>
      </div>

      {/* SHOP 10 */}
      <div className='my-8'>
        <div className='flex items-center gap-2 mb-2'>
          <span className='bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded'>#10</span>
          <span className='text-sm font-semibold text-gray-500 uppercase tracking-wide'>Stockholm, Sweden</span>
        </div>
        <h3 className='text-2xl font-extrabold text-dark'>Drop Coffee</h3>
        <p className='my-4'>
          Led by Joanna Alm, a multi-time Swedish roasting champion, Drop Coffee focuses on sweetness and clarity above all else. Their compact cafe in Wollmar Yxkullsgatan, Stockholm, serves a rotating selection of single-origin filter coffees alongside their signature blends. Consistency defines their brand: every bag delivers a clean, sweet cup.
        </p>
        <p className='my-4'>
          Drop Coffee&apos;s Ethiopian sourcing emphasizes <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>washed processing</Link> from Yirgacheffe and <Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline'>Sidamo</Link>. The Scandinavian market&apos;s per-capita coffee consumption ranks among the world&apos;s highest at roughly 8 kg per person annually, and specialty&apos;s share continues to grow. Drop Coffee demonstrates that consistency in green quality is what builds long-term brand loyalty.
        </p>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <p className='text-sm mb-2'><span className='font-bold'><HiOutlineStar className='inline mr-1' /> Sourcing Signal:</span> Consistency over novelty. Seeks reliable seasonal access to high-quality washed Ethiopian lots from known cooperatives.</p>
        </div>
      </div>

      <hr className='my-8 border-gray-200' />

      <h3 className='text-2xl font-extrabold mt-8 flex items-center gap-3'>
        <HiOutlineSparkles className='w-8 h-8 text-amber-600' />
        The Ethiopian Origin Thread
      </h3>

      <p className='my-4'>
        Nine of the ten shops above feature Ethiopian coffee as a menu anchor. That is not coincidence. Ethiopia offers the widest genetic diversity of any coffee-producing country, with an estimated 10,000-15,000 heirloom <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>varieties and landraces</Link> growing across its highland forests.
      </p>

      <p className='my-4'>
        Regions like <Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline'>Yirgacheffe</Link>, <Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline'>Guji</Link>, and <Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline'>Sidamo</Link> produce the floral, fruity, and citrus-forward profiles that define modern specialty coffee. These profiles are precisely what light-roast-focused shops need to differentiate their menus. Ethiopia exported approximately 300,000 metric tons of coffee in the 2024/25 season, with specialty-grade volumes increasing year over year.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-2 flex items-center gap-2'>
          <HiOutlineGlobeAlt className='text-xl text-blue-600' /> What This Means for Green Coffee Buyers
        </h4>
        <p className='text-sm mb-3'>
          The sourcing patterns of these ten shops point to five clear trends for green coffee buyers in 2026:
        </p>
        <ul className='text-sm space-y-2'>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-blue-600 mt-1 flex-shrink-0' />
            <span><span className='font-bold'>Lot-level traceability is mandatory.</span> Washing station or farm name, processing method, altitude, and cupping score must be available.</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-blue-600 mt-1 flex-shrink-0' />
            <span><span className='font-bold'>Ethiopian origins anchor menus.</span> Yirgacheffe, Guji, and Sidamo remain the default for filter and seasonal offerings.</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-blue-600 mt-1 flex-shrink-0' />
            <span><span className='font-bold'>Experimental processing commands premiums.</span> Anaerobic, carbonic maceration, and honey-processed Ethiopian lots attract buyers willing to pay $8-$15/lb FOB.</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-blue-600 mt-1 flex-shrink-0' />
            <span><span className='font-bold'>Consistency matters as much as novelty.</span> Buyers need the same washing station quality year after year to maintain brand standards.</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-blue-600 mt-1 flex-shrink-0' />
            <span><span className='font-bold'>Pricing transparency is growing.</span> Shops like Onyx publish what they pay; exporters should be prepared to disclose FOB pricing and <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>cost structures</Link>.</span>
          </li>
        </ul>
      </div>

      <p className='my-4'>
        The best specialty coffee shops in the world are more than retail destinations. They are market signals. Their sourcing decisions, menu choices, and willingness to pay premiums define what importers and exporters should prioritize. For Ethiopian exporters, the message is clear: lot-level traceability, processing diversity, and seasonal consistency are what the top tier demands.
      </p>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source the Coffee These Shops Serve</h4>
        <p className='my-2'>
          Ethio Coffee Import and Export PLC supplies Ethiopian green coffee to roasters and importers across Asia, Europe, and North America. Access <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>cupping samples</Link>, lot-level data, and competitive FOB pricing from Yirgacheffe, Guji, Sidamo, and more.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Current Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Request Samples</Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>How to Order</Link>
        </div>
      </div>

      {/* FAQ SECTION */}
      <section className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900'>Frequently Asked Questions About the Best Specialty Coffee Shops</h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What makes a specialty coffee shop world class?</h4>
            <p className='text-sm text-gray-600'>World-class specialty shops score 86+ on the SCA scale, maintain direct sourcing relationships with producers, employ trained baristas (often Q graders or competition winners), and publish lot-level traceability data including farm name, processing method, and altitude for every coffee on the menu.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Which coffee shops serve Ethiopian coffee?</h4>
            <p className='text-sm text-gray-600'>Nearly every top-ranked specialty shop features Ethiopian origins. Tim Wendelboe, Onyx Coffee Lab, Sey Coffee, The Barn, La Cabra, and Drop Coffee all maintain year-round Ethiopian offerings, typically washed lots from Yirgacheffe, Guji, or Sidamo scoring 87 or higher.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the best coffee shop in the world in 2026?</h4>
            <p className='text-sm text-gray-600'>Onyx Coffee Lab in Bentonville, Arkansas earned the #1 global ranking from The World&apos;s 100 Best Coffee Shops in both 2025 and 2026. Tim Wendelboe in Oslo and Proud Mary in Melbourne consistently rank in the top five across multiple international surveys.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How do specialty coffee shops source their green beans?</h4>
            <p className='text-sm text-gray-600'>Leading shops source through direct trade relationships, specialty importers, and origin-connected exporters. They evaluate pre-shipment cupping samples, require lot-level documentation (washing station, altitude, variety), and often visit producing countries annually to maintain relationships.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the difference between specialty and regular coffee shops?</h4>
            <p className='text-sm text-gray-600'>Specialty shops serve coffees scoring 80+ on the SCA 100-point scale, roast in-house or source from artisan roasters, and provide origin transparency. Regular coffee shops typically serve commodity-grade blends without traceability. The price difference reflects sourcing costs: specialty green often costs $4-$15/lb versus $1.50-$3/lb for commodity.</p>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Ethiopian Origins &amp; Quality</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Coffee Origins</Link></li>
              <li>• <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji</Link></li>
              <li>• <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Ethiopian Heirloom Coffee Varieties</Link></li>
              <li>• <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup Ethiopian Coffee Samples</Link></li>
              <li>• <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Processing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing &amp; Market Intelligence</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>• <Link href='/insights/specialty-coffee-trends-2026' className='text-amber-700 hover:underline'>Specialty Coffee Trends 2026</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing Guide</Link></li>
              <li>• <Link href='/insights/micro-lot-ethiopian-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Micro-Lot Ethiopian Coffee Sourcing</Link></li>
              <li>• <Link href='/insights/anaerobic-ethiopian-coffee-processing-buyers-guide' className='text-amber-700 hover:underline'>Anaerobic Ethiopian Coffee Processing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Market Guides</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/germany-specialty-coffee-market-guide' className='text-amber-700 hover:underline'>German Specialty Coffee Market Guide</Link></li>
              <li>• <Link href='/insights/importing-ethiopian-coffee-to-japan' className='text-amber-700 hover:underline'>Importing Ethiopian Coffee to Japan</Link></li>
              <li>• <Link href='/insights/importing-ethiopian-coffee-to-australia' className='text-amber-700 hover:underline'>Importing Ethiopian Coffee to Australia</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC. This guide profiles the world&apos;s top specialty coffee shops through the lens of sourcing intelligence for green coffee buyers, importers, and roasters.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Export Services</Link> · <Link href='/about' className='underline'>About</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}
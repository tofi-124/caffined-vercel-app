import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopianCoffeeCeremony({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Steps, cultural meaning, and why this centuries-old ritual matters for importers and roasters
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          A traditional Ethiopian coffee ceremony: green beans roasted over flame, brewed in a jebena, and served in three rounds.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Traditional Ethiopian coffee ceremony with jebena clay pot and roasted green coffee beans'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      {/* KEY TAKEAWAY BOX */}
      <div className='bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg'>
        <h2 className='text-lg font-bold mb-2'>Key Takeaway</h2>
        <p className='text-sm text-gray-800'>
          The Ethiopian coffee ceremony (known locally as <em>buna</em>) is a daily social ritual involving roasting green beans over an open flame, grinding them by hand, and brewing in a jebena clay pot. Coffee is served in three rounds called <em>abol</em>, <em>tona</em>, and <em>baraka</em>. For international buyers, understanding this tradition builds deeper sourcing relationships and provides authentic storytelling that resonates with end consumers.
        </p>
      </div>

      {/* SECTION 1: WHAT IS */}
      <h2 className='text-3xl font-extrabold mt-10 mb-4'>What Is the Ethiopian Coffee Ceremony?</h2>

      <p className='my-4'>
        The Ethiopian coffee ceremony is far more than a brewing method. It is a daily social practice, performed in households across the country, that turns the act of making coffee into a communal event lasting one to two hours. Green beans are roasted, ground, brewed, and served fresh, while guests share conversation, news, and hospitality.
      </p>

      <p className='my-4'>
        In a country where over 15 million people depend on coffee for their livelihood (according to the <a href='https://www.ico.org/documents/cy2023-24/cc-139-2-e-profile-ethiopia.pdf' target='_blank' rel='noopener noreferrer' className='underline font-bold'>International Coffee Organization</a>), this ceremony is not an occasional event. It happens multiple times per day in many homes, marking the rhythm of social life from morning to evening.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        The Amharic Term: Buna Tetu
      </h3>
      <p className='my-4'>
        Ethiopians do not typically call it a &quot;ceremony&quot; at all. The Amharic phrase <em>buna tetu</em> translates simply to &quot;come drink coffee with us.&quot; Another common saying, <em>buna dabo naw</em>, means &quot;coffee is our bread,&quot; reflecting how central the drink is to daily sustenance and social fabric. When someone says they have no one to have coffee with, it implies they lack close companionship, not caffeine.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Origins in Ethiopia&apos;s Kaffa Region
      </h3>
      <p className='my-4'>
        Ethiopia is the <Link href='/insights/birthplace-of-coffee-ethiopia' className='underline font-bold'>biological and cultural birthplace of Coffea arabica</Link>. The Kaffa region in the country&apos;s southwest is where wild coffee trees have grown for millennia, and where the legend of a goat herder named Kaldi, whose goats became energized after eating bright red coffee cherries, originated. While scholars debate the legend&apos;s accuracy, archaeological and botanical evidence consistently places coffee&apos;s origin in the forests of southwestern Ethiopia.
      </p>

      <p className='my-4'>
        The ceremony grew organically from this deep, ancient relationship between people and the coffee plant. Long before coffee was an export commodity, Ethiopian communities roasted, brewed, and shared it as an act of connection.
      </p>

      {/* SECTION 2: STEP BY STEP */}
      <h2 className='text-3xl font-extrabold mt-10 mb-4'>How the Ethiopian Coffee Ceremony Works: Step by Step</h2>

      <p className='my-4'>
        Every step of the ceremony is intentional. Nothing is rushed. Each stage engages a different sense, building anticipation from the first waft of incense to the final pour.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        1. Setting the Scene: Grass, Flowers, and Incense
      </h3>
      <p className='my-4'>
        The host prepares a ceremonial area, typically outdoors or in a sitting room. Fresh-cut grass, known as <em>ketema</em>, is spread across the floor, sometimes decorated with small yellow flowers (particularly during the <em>Meskel</em> holiday). Incense, usually frankincense or myrrh, is burned on a small charcoal brazier. The rising smoke is believed to purify the space and ward off negative energy.
      </p>
      <p className='my-4'>
        This multisensory preparation signals to neighbors and guests that coffee is being made. In many communities, the aroma of roasting beans and burning incense is an open invitation.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        2. Roasting the Green Coffee Beans
      </h3>
      <p className='my-4'>
        The host begins with raw, green coffee beans. She washes them to remove debris, then spreads them on a flat pan or a traditional clay roasting dish called a <em>menkeshkesh</em>. The beans are roasted over an open flame, with constant stirring to ensure even heat distribution. As the beans darken and crack, they release a rich, fragrant aroma.
      </p>
      <p className='my-4'>
        The host may use a small straw fan to waft the smoke toward guests, allowing them to inhale the scent of freshly roasted coffee. This gesture is both practical and symbolic: it invites participants into the process, making them part of the transformation from raw seed to finished product.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        3. Grinding with Mortar and Pestle (Mukecha and Zenezena)
      </h3>
      <p className='my-4'>
        Once roasted and briefly cooled, the beans are transferred to a <em>mukecha</em> (wooden mortar) and ground by hand with a <em>zenezena</em> (pestle). The rhythmic pounding produces a grind finer than a standard drip grind but coarser than espresso. This manual process adds texture and authenticity that machine grinding cannot replicate.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        4. Brewing in the Jebena
      </h3>
      <p className='my-4'>
        The <em>jebena</em> is a distinctive clay pot with a spherical base, narrow neck, pouring spout, handle, and straw lid. Water is heated in the jebena over a charcoal stove or open flame, and the ground coffee is added directly. The mixture brews until fully infused, with the host monitoring the heat carefully to prevent boiling over. The jebena&apos;s porous clay walls are said to absorb and impart subtle flavor over time, meaning a well-seasoned jebena becomes part of the taste.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        5. Pouring and Serving
      </h3>
      <p className='my-4'>
        When the brew is ready, the host pours coffee from a height of roughly one foot into small, handleless ceramic cups called <em>sini</em> (or <em>finjal</em>), arranged on a round tray known as a <em>rekebot</em>. The pour is continuous, without stopping, filling each cup in a single smooth motion. This requires skill and steady hands. It is both a demonstration of competence and a gesture of care.
      </p>
      <p className='my-4'>
        The eldest guest is served first as a sign of respect. Coffee may be enjoyed black, with sugar, or in rural areas with salt or traditional spiced butter (<em>niter kibbeh</em>). Some regions add a single clove or a sprig of rue (<em>tena adam</em>) during roasting.
      </p>

      {/* SECTION 3: THREE ROUNDS */}
      <h2 className='text-3xl font-extrabold mt-10 mb-4'>The Three Rounds of the Ethiopian Coffee Ceremony: Abol, Tona, and Baraka</h2>

      <p className='my-4'>
        Coffee in the ceremony is served in three distinct rounds, each brewed from the same grounds with fresh water added to the jebena. Each round carries a name and a purpose.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse border border-gray-300 text-sm'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border border-gray-300 px-4 py-3 text-left font-bold'>Round</th>
              <th className='border border-gray-300 px-4 py-3 text-left font-bold'>Amharic Name</th>
              <th className='border border-gray-300 px-4 py-3 text-left font-bold'>Tigrinya Name</th>
              <th className='border border-gray-300 px-4 py-3 text-left font-bold'>Strength</th>
              <th className='border border-gray-300 px-4 py-3 text-left font-bold'>Significance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 px-4 py-3'>First</td>
              <td className='border border-gray-300 px-4 py-3'>Abol (አቦል)</td>
              <td className='border border-gray-300 px-4 py-3'>Awel</td>
              <td className='border border-gray-300 px-4 py-3'>Strongest</td>
              <td className='border border-gray-300 px-4 py-3'>Opening; ice-breaking conversation</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 px-4 py-3'>Second</td>
              <td className='border border-gray-300 px-4 py-3'>Tona (ቶና)</td>
              <td className='border border-gray-300 px-4 py-3'>Kale&apos;i</td>
              <td className='border border-gray-300 px-4 py-3'>Medium</td>
              <td className='border border-gray-300 px-4 py-3'>Deepening of conversation and connection</td>
            </tr>
            <tr>
              <td className='border border-gray-300 px-4 py-3'>Third</td>
              <td className='border border-gray-300 px-4 py-3'>Baraka (በረካ)</td>
              <td className='border border-gray-300 px-4 py-3'>Baraka</td>
              <td className='border border-gray-300 px-4 py-3'>Lightest</td>
              <td className='border border-gray-300 px-4 py-3'>A blessing; spiritual conclusion</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        The word <em>baraka</em> translates to &quot;blessing&quot; in Arabic and Amharic. Receiving the third round is considered a mark of good fortune. Leaving before baraka is generally seen as impolite.
      </p>

      <p className='my-4'>
        Each successive round grows lighter in body as the same grounds are re-brewed. The diminishing intensity mirrors the progression of conversation: from introductory pleasantries to deeper, more personal exchange to a closing benediction. The whole process typically takes 60 to 90 minutes.
      </p>

      {/* SECTION 4: WHO LEADS */}
      <h2 className='text-3xl font-extrabold mt-10 mb-4'>Who Leads the Ceremony and Why It Matters</h2>

      <p className='my-4'>
        The Ethiopian coffee ceremony is traditionally led by women. The host, often the woman of the household, performs every step: washing, roasting, grinding, brewing, and serving. She is frequently dressed in a <em>habesha kemis</em>, a traditional white cotton dress with colorful embroidered borders. Her role is one of cultural authority. She sets the pace, controls the quality, and ensures every guest feels welcome.
      </p>

      <p className='my-4'>
        This leadership extends well beyond the jebena. Women perform an estimated 60 to 70 percent of the labor in Ethiopian coffee production, from picking cherries to sorting and drying. Understanding the ceremony offers a window into the broader role of{' '}
        <Link href='/insights/women-in-ethiopian-coffee-industry' className='underline font-bold'>women in the Ethiopian coffee industry</Link>
        , a workforce that sustains the sector from farm to cup.
      </p>

      <p className='my-4'>
        In recent years, some urban areas have seen men and younger generations participating more actively in the ceremony. This shift reflects evolving social norms while preserving the ritual&apos;s core values of hospitality and community.
      </p>

      {/* SECTION 5: SNACKS AND SENSORY */}
      <h2 className='text-3xl font-extrabold mt-10 mb-4'>Snacks, Spices, and Sensory Details</h2>

      <p className='my-4'>
        The ceremony is as much about the atmosphere as it is about the coffee. Several accompaniments complete the experience:
      </p>

      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>
          <strong>Popcorn (fendisha):</strong> The most common snack. Plain, freshly popped, and served in large bowls.
        </li>
        <li className='my-2'>
          <strong>Kolo:</strong> Roasted barley, often mixed with chickpeas and peanuts. A crunchy, savory counterpart to the coffee.
        </li>
        <li className='my-2'>
          <strong>Himbasha or dabo:</strong> A lightly sweetened, spiced bread served on special occasions.
        </li>
        <li className='my-2'>
          <strong>Incense:</strong> Frankincense or myrrh burned on coals throughout the ceremony. The smoke mingles with roasting aromas, creating a layered sensory environment.
        </li>
        <li className='my-2'>
          <strong>Spice additions:</strong> In some regions, a single clove is added during roasting for a subtle aromatic note. Others use cardamom, cinnamon, or the herb <em>tena adam</em> (rue) to flavor the brew.
        </li>
      </ul>

      <p className='my-4'>
        These details matter for specialty roasters and retailers looking to tell a complete origin story. A card that mentions &quot;traditionally served with kolo and frankincense incense&quot; is far more compelling than a generic &quot;from the birthplace of coffee&quot; tagline.
      </p>

      {/* SECTION 6: WHY IT MATTERS FOR BUYERS */}
      <h2 className='text-3xl font-extrabold mt-10 mb-4'>Why the Ethiopian Coffee Ceremony Matters for Coffee Buyers</h2>

      <p className='my-4'>
        For importers, roasters, and green coffee buyers, the ceremony is not just cultural trivia. It has direct relevance to sourcing decisions and brand positioning.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Cultural Respect Translates to Better Sourcing
      </h3>
      <p className='my-4'>
        Buyers who understand the Ethiopian coffee ceremony tend to approach sourcing differently. They ask more specific questions about processing methods, regional varieties, and the people behind the product. They show more patience for seasonal timelines instead of pushing for year-round supply. They develop a vocabulary for discussing quality that aligns with how Ethiopian producers think about their own coffee.
      </p>
      <p className='my-4'>
        At trade shows and client meetings, our team at Ethio Coffee Export frequently presents a miniature version of the ceremony. The response is consistent: buyers who participate leave with a deeper appreciation for the care embedded in every stage of Ethiopian coffee production, from{' '}
        <Link href='/insights/selective-coffee-harvesting' className='underline font-bold'>selective hand-picking at harvest</Link>
        {' '}to the final export.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Storytelling Value for Roasters and Retailers
      </h3>
      <p className='my-4'>
        Consumer interest in origin stories continues to grow. According to the <a href='https://sca.coffee/' target='_blank' rel='noopener noreferrer' className='underline font-bold'>Specialty Coffee Association</a>, traceability and cultural transparency are among the top factors driving specialty coffee purchasing decisions. The Ethiopian coffee ceremony offers roasters and retailers concrete, specific details to share:
      </p>

      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>The ceremony uses the same green beans that arrive in your roastery.</li>
        <li className='my-2'>It is led by women who also perform most of the labor on the farm.</li>
        <li className='my-2'>The third round, baraka, is considered a blessing for those who stay.</li>
        <li className='my-2'>Each region adds its own twist, from clove in Harar to rue in Jimma.</li>
      </ul>

      <p className='my-4'>
        These specifics feel human because they are. They transform a bag of green coffee into a story worth telling and a product worth paying a premium for. Explore the distinct flavor profiles across{' '}
        <Link href='/insights/guide-ethiopian-coffee-origins' className='underline font-bold'>Ethiopia&apos;s major coffee-growing regions</Link>
        {' '}to see how ceremony traditions vary alongside the beans.
      </p>

      {/* VIDEO SECTION */}
      <div className='bg-amber-100 p-6 rounded-lg my-8'>
        <h2 className='text-2xl font-bold mb-2'>Experience the Ethiopian Coffee Ceremony</h2>
        <p className='my-2'>
          Watch how the traditional ceremony unfolds, from roasting green beans to serving the third round of baraka.
        </p>
        <iframe className='w-full h-[450px] my-4' src="https://www.youtube.com/embed/dbNgYz1xciw" title="Ethiopian Coffee Ceremony: Roasting, Brewing, and Serving in a Jebena" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      {/* FAQ SECTION */}
      <section className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions About the Ethiopian Coffee Ceremony</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-gray-800 mb-2">What is the Ethiopian coffee ceremony?</h3>
            <p className="text-sm text-gray-600">The Ethiopian coffee ceremony, known locally as <em>buna</em>, is a traditional social ritual where green coffee beans are roasted over an open flame, ground by hand using a mortar and pestle (mukecha), and brewed in a clay pot called a jebena. Lasting one to two hours, it is a communal experience centered on hospitality, respect, and human connection, performed daily in millions of Ethiopian households.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-2">How many rounds are served in a traditional Ethiopian coffee ceremony?</h3>
            <p className="text-sm text-gray-600">Three rounds are served: abol (the strongest, ice-breaking round), tona (a medium-strength continuation), and baraka (the lightest, considered a blessing). Each round uses the same grounds with fresh water, producing progressively lighter brews that mirror the deepening of conversation between participants.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-2">Who traditionally leads the Ethiopian coffee ceremony?</h3>
            <p className="text-sm text-gray-600">The ceremony is traditionally led by women, who serve as cultural custodians of coffee in Ethiopian society. The host performs every step, from roasting to serving, often dressed in a habesha kemis. Women also perform an estimated 60 to 70 percent of the labor in Ethiopian coffee production overall.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-2">What is a jebena and how does it work?</h3>
            <p className="text-sm text-gray-600">A jebena is a traditional Ethiopian clay coffee pot with a spherical base, narrow neck, pouring spout, handle, and straw lid. Water is heated inside the jebena, ground coffee is added directly, and the mixture brews over a charcoal stove. The porous clay is said to absorb flavors over time, making a well-seasoned jebena part of the taste profile.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-2">How long does the Ethiopian coffee ceremony take?</h3>
            <p className="text-sm text-gray-600">A full ceremony typically lasts 60 to 90 minutes, though it can extend to two hours. The time includes preparing the space with grass and incense, roasting beans, grinding, brewing three successive rounds, and the conversation that accompanies each round.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-2">Why does the coffee ceremony matter for international buyers?</h3>
            <p className="text-sm text-gray-600">Understanding the ceremony helps buyers treat Ethiopian coffee with greater respect, ask better sourcing questions, and appreciate the human effort behind every lot. It also provides authentic storytelling material for roasters and retailers marketing Ethiopian origins to quality-conscious consumers.</p>
          </div>
        </div>
      </section>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3'>Source Premium Ethiopian Coffee Direct from Origin</h3>
        <p className='my-2'>
          At <span className='font-bold'>Ethio Coffee Export PLC</span>, every shipment carries the same care and tradition that defines the Ethiopian coffee ceremony. Request green coffee samples, get current FOB pricing, or explore our full range of washed and natural lots from Yirgacheffe, Sidamo, Guji, Limu, and beyond.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>
            View Our Offerings
          </Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            Request Samples / Contact Us
          </Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            How to Order
          </Link>
        </div>
      </div>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Culture & Heritage</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/birthplace-of-coffee-ethiopia' className='text-amber-700 hover:underline'>Ethiopia: The Birthplace of Coffee</Link></li>
              <li>• <Link href='/insights/women-in-ethiopian-coffee-industry' className='text-amber-700 hover:underline'>Women in the Ethiopian Coffee Industry</Link></li>
              <li>• <Link href='/insights/direct-trade-ethiopian-farmers' className='text-amber-700 hover:underline'>Direct Trade with Ethiopian Farmers</Link></li>
              <li>• <Link href='/insights/how-to-make-coffee-without-a-coffeemaker' className='text-amber-700 hover:underline'>How to Make Coffee Without a Coffeemaker</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origins & Sourcing</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Complete Guide to Ethiopian Coffee Origins</Link></li>
              <li>• <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji</Link></li>
              <li>• <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>• <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee Processing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality & Grading</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup and Evaluate Ethiopian Coffee</Link></li>
              <li>• <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality Control and Grading</Link></li>
              <li>• <Link href='/insights/selective-coffee-harvesting' className='text-amber-700 hover:underline'>Selective Coffee Harvesting</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Trade & Export</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing Guide</Link></li>
              <li>• <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export</Link></li>
              <li>• <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline'>Specialty Coffee Storage and Freight</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Export PLC. This article covers the Ethiopian coffee ceremony, its step-by-step process, the meaning behind its three rounds (abol, tona, baraka), and why this tradition is relevant for modern coffee importers, roasters, and specialty buyers. For current pricing, sample requests, or questions about our export services, please contact us directly.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee Export</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

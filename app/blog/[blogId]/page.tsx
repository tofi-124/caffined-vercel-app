"use client"

import { useEffect, use } from 'react'
import Link from 'next/link'
import { posts } from '@/app/data/data'
import ResponsiveImage from '@/app/components/ResponsiveImage'

type Props = {
  params: Promise<{
    blogId: string
  }>
}

const Blog = ({params}: Props) => {
  // Using React's use() hook to properly await params
  const { blogId } = use(params);

  // Add effect to scroll to top when this component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogId]); // Re-run when blogId changes

  let ind = (parseInt(blogId) >= 0 && parseInt(blogId) < posts.length) ? parseInt(blogId) : -1
  if(ind === -1){
    const Content = (
      <h1 className=' bg-primary flex flex-col font-extrabold text-6xl h-[40vh] text-red-500 text-center justify-center'>
        Blog not found
      </h1>
    )
  return Content;
  }
  else {
    const { title, date, large_image_url } = posts[ind]
    
    // Blog post content based on the ID
    let blogContent;
    
    if (ind === 0) {
      // Content for "The Birthplace of Coffee: Ethiopia's Rich Heritage"
      blogContent = (
        <>
          <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
            {title}
          </h1>
          <h2 className='text-2xl font-medium text-gray-700 mb-6'>
            A warm, grounded intro to where coffee began
          </h2>

          <figure>
            <figcaption className='font-inconsolata my-2'>
              Ethiopia is known as the birthplace of Arabica coffee and cradle of a rich coffee culture.
            </figcaption>

            <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
              <ResponsiveImage
                src={`/images/${large_image_url}`}
                alt='Ethiopian coffee heritage'
                fill
                objectFit='cover'
                className='w-full h-full'
                sizes='(max-width: 768px) 100vw, 768px'
              />
            </div>
          </figure>
          <p className='my-2 text-gray-600 font-inconsolata'>
            {date}
          </p>
          
          <p className='my-4'>
            If you’ve ever taken a sip and thought, “Wait why does this taste like jasmine?” you’ve already met a little piece of Ethiopia.
            Coffee (specifically Coffea arabica) is widely traced back to Ethiopia, with the Kaffa region often mentioned as its homeland.
          </p>

          <p className='my-4'>
            This post isn’t here to sell you a fantasy. It’s here to give you a real, human starting point: a place, a culture, and a set of traditions that still shape how Ethiopian coffee is grown and shared today.
          </p>

          <h3 className='text-2xl font-extrabold mt-8'>
            The Origin Story (And the Legend)
          </h3>
          <p className='my-4'>
            There’s a popular legend about a goat herder named Kaldi noticing his goats perk up after eating red berries.
            It’s a great story but historians also note the tale shows up in writing much later.
            Either way, the point lands: the plant’s roots are in Ethiopia.
          </p>

          <p className='my-4'>
            Ethiopia’s coffee is closely tied to place. Names like Yirgacheffe and Sidama aren’t just “flavor notes” they’re real growing regions.
            Many Ethiopian coffees grow at high elevations, where cherries ripen more slowly and develop more complexity.
          </p>

          <h3 className='text-2xl font-extrabold mt-8'>
            Coffee as Hospitality, Not a Hack
          </h3>
          <p className='my-4'>
            In Ethiopia (and Eritrea), coffee is also a social language.
            The traditional coffee ceremony isn’t rushed: green beans are roasted over an open flame, ground with a mortar and pestle, and brewed in a clay pot called a jebena.
            It’s a gathering people talk, laugh, and check in with each other.
          </p>

          <p className='my-4 font-medium'>
            Here's a beautiful short documentary that captures Ethiopia's coffee culture and history visually:
          </p>
        
          <iframe className='w-full h-[450px] my-6' src="https://www.youtube.com/embed/voMC-eICDrg" title="Ethiopia - The Birthplace of Coffee" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          
          <h3 className='text-2xl font-extrabold mt-8'>
            What This Means for Your Cup
          </h3>
          <p className='my-4'>
            Here’s the practical takeaway: Ethiopian coffee can taste wildly different depending on origin and processing.
            When buyers care about traceability and quality, farmers and cooperatives have more reason (and room) to invest in careful harvesting and processing.
          </p>

          <p className='my-2'>
            We support:
          </p>
          <ul className='font-inconsolata my-2 list-disc ml-5'>
            <li>
              Sustainable and organic farming practices
            </li>
            <li>
              Fair trade pricing and farmer empowerment
            </li>
            <li>
              Custom exports of green coffee beans and single-origin microlots
            </li>
          </ul>

          <p className='my-4'>
            If you’re building a menu or sourcing for a roastery, the “Ethiopian difference” is often in the details: origin clarity, processing choices, and respect for the people doing the work by hand.
          </p>

          <h3 className='text-2xl font-extrabold mt-8'>
            A Simple Way to Taste It
          </h3>
          <p className='my-4'>
            Try this: brew two Ethiopian coffees side by side (even from two different washing stations) and write down what you notice.
            One might lean floral and tea-like; another might be more citrus-forward.
            Same country, completely different personality.
          </p>

          <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
            <p className='my-2 font-medium'>
              Interested in sourcing authentic Ethiopian coffee directly from the origin?
              Get in touch with Ethiocoffee to learn more about our export services and discover how you can bring this legendary heritage to your market.
            </p>
          </div>
        </>
      );
    } else if (ind === 1) {
      // Content for "Ethiopian Coffee Ceremonies: Tradition Meets Business"
      blogContent = (
        <>
          <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
            {title}
          </h1>
          <h2 className='text-2xl font-medium text-gray-700 mb-6'>
            Why this tradition still matters (even for modern buyers)
          </h2>

          <figure>
            <figcaption className='font-inconsolata my-2'>
              The Ethiopian coffee ceremony represents centuries of tradition and hospitality.
            </figcaption>

            <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
              <ResponsiveImage
                src={`/images/${large_image_url}`}
                alt='Ethiopian coffee ceremony'
                fill
                objectFit='cover'
                className='w-full h-full'
                sizes='(max-width: 768px) 100vw, 768px'
              />
            </div>
          </figure>
          <p className='my-2 text-gray-600 font-inconsolata'>
            {date}
          </p>
          
          <p className='my-4'>
            If you grew up around Ethiopian coffee, you know it’s not a “grab-and-go” thing.
            The coffee ceremony is time set aside on purpose an excuse to be present with people.
          </p>

          <p className='my-4'>
            And the steps are wonderfully tangible: roast green beans over a flame, grind them (often with a traditional mortar and pestle), then brew in a jebena.
            The aroma is part of the point.
          </p>

          <h3 className='text-2xl font-extrabold mt-8'>
            The Part People Miss: It’s Three Rounds
          </h3>
          <p className='my-4'>
            The ceremony is commonly served in three rounds.
            In Amharic, you’ll often hear abol, tona, and baraka.
            The idea isn’t “more caffeine” it’s a rhythm: brew, talk, refill, talk again.
          </p>

          <p className='my-4'>
            What sets this ceremony apart is its deliberate pace and focus on human connection. Neighbors gather. Conversations flow. Respect is given. It's a moment of pause in a fast-paced world a value that resonates deeply in modern business culture.
          </p>

          <h3 className='text-2xl font-extrabold mt-8'>
            Why This Matters in Business
          </h3>
          <p className='my-4'>
            When buyers understand the culture around a product, they tend to treat it with more respect.
            That can show up as better sourcing questions, more patience for seasonality, and more interest in how (and by whom) the coffee was processed.
          </p>

          <p className='my-4'>
            In many international trade shows and client meetings, we present a miniature version of the ceremony to let people experience the warmth and depth of Ethiopian hospitality firsthand.
          </p>

          <div className='bg-amber-100 p-6 rounded-lg my-8'>
            <h4 className='font-bold text-xl mb-2'>Experience the Ceremony</h4>
            <p className='my-2'>
              Watch how the traditional Ethiopian coffee ceremony unfolds and learn about its cultural significance.
            </p>
            <iframe className='w-full h-[450px] my-4' src="https://www.youtube.com/embed/dbNgYz1xciw" title="Ethiopian Coffee Ceremony" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>

          <h3 className='text-2xl font-extrabold mt-8'>
            A Small Detail That Sticks
          </h3>
          <p className='my-4'>
            One detail I love: the host often pours from a height into small cups, steadily, without stopping.
            It’s equal parts skill and hospitality.
            The ceremony is basically saying, “You matter enough for me to slow down.”
          </p>

          <p className='my-4'>
            By sourcing your coffee through Ethiocoffee, you're not just purchasing beans. You're tapping into:
          </p>

          <ul className='font-inconsolata my-4 list-disc ml-5'>
            <li className='my-2'>
              A living cultural heritage
            </li>
            <li className='my-2'>
              Coffee grown with care and community values
            </li>
            <li className='my-2'>
              A product that supports local farmers and traditional practices
            </li>
          </ul>

          <h3 className='text-2xl font-extrabold mt-8'>
            A Better Way to Tell the Story
          </h3>
          <p className='my-4'>
            Instead of “heritage” as a buzzword, tell one real thing: what was roasted, how it was brewed, why the third round is called baraka (a blessing).
            Those specifics feel human because they are.
          </p>

          <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
            <p className='my-2 font-medium'>
              Want to bring the richness of Ethiopia's coffee culture into your business?
              Reach out to Ethiocoffee to explore how our exports and story-driven approach can elevate your coffee offerings.
            </p>
          </div>
        </>
      );
    } else if (ind === 2) {
      // Content for "Direct Trade Partnerships: Supporting Ethiopian Farmers"
      blogContent = (
        <>
          <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
            {title}
          </h1>
          <h2 className='text-2xl font-medium text-gray-700 mb-6'>
            What it is, what it isn’t, and why transparency matters
          </h2>

          <figure>
            <figcaption className='font-inconsolata my-2'>
              Direct trade partnerships with Ethiopian farmers help ensure quality and fair compensation.
            </figcaption>

            <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
              <ResponsiveImage
                src={`/images/${large_image_url}`}
                alt='Ethiopian coffee farmers'
                fill
                objectFit='cover'
                className='w-full h-full'
                sizes='(max-width: 768px) 100vw, 768px'
              />
            </div>
          </figure>
          <p className='my-2 text-gray-600 font-inconsolata'>
            {date}
          </p>
          
          <p className='my-4'>
            “Direct trade” is one of those phrases you’ll hear everywhere in specialty coffee.
            Sometimes it means something real. Sometimes it’s just a label.
          </p>

          <p className='my-4'>
            At its best, direct trade is about direct relationships between buyers and producers, with prices and support tied to quality and long-term trust.
            The tricky part: there’s no single global standard for what counts.
          </p>

          <h3 className='text-2xl font-extrabold mt-8'>
            So… What Is Direct Trade?
          </h3>
          <p className='my-4'>
            Think of it as a sourcing approach where the roaster/buyer builds a direct relationship with the farmer, cooperative, or processor.
            Many direct-trade programs emphasize higher premiums, clearer quality expectations, and more information sharing.
          </p>

          <ul className='font-inconsolata my-4 list-disc ml-5'>
            <li className='my-2'>
              Fair pricing above market value
            </li>
            <li className='my-2'>
              Mutual trust and accountability
            </li>
            <li className='my-2'>
              Consistent quality and feedback
            </li>
            <li className='my-2'>
              Community reinvestment and development
            </li>
          </ul>

          <p className='my-4'>
            The part we like most is the accountability: if you use the term, you should be able to explain your prices, your quality goals, and what “direct” really means in your chain.
          </p>

          <div className='bg-amber-100 p-6 rounded-lg my-8'>
            <h4 className='font-bold text-xl mb-2'>Farmer Spotlight</h4>
            <p className='my-2'>
              "Working directly with exporters who understand quality has transformed our community. Now we can afford to invest in better processing methods and send our children to school." - Abebe Bekele, Lead Farmer, Konga Cooperative
            </p>
          </div>

          <h3 className='text-2xl font-extrabold mt-8'>
            The Honest Caveat
          </h3>
          <p className='my-4'>
            Because direct trade isn’t a certified standard, critics often point out a real risk: big brands can market the term without showing evidence.
            The fix is simple (but not always easy): publish more.
            Transparency reports, pricing ranges, who you buy from anything that lets a customer verify you’re doing what you say.
          </p>

          <p className='my-4'>
            Our direct trade approach supports them by:
          </p>

          <ul className='font-inconsolata my-4 list-disc ml-5'>
            <li className='my-2'>
              Paying premium prices that reflect the quality of their beans
            </li>
            <li className='my-2'>
              Offering long-term contracts that provide financial stability
            </li>
            <li className='my-2'>
              Encouraging sustainable and organic farming methods
            </li>
            <li className='my-2'>
              Funding training and equipment improvements at the community level
            </li>
          </ul>

          <p className='my-4 font-bold italic'>
            This isn't charity. It's respect in action.
          </p>

          <iframe className='w-full h-[450px] my-6' src="https://www.youtube.com/embed/Dmpnrtey3YU" title="Direct Trade Coffee Sourcing" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

          <h3 className='text-2xl font-extrabold mt-8'>
            What “Better” Can Look Like
          </h3>
          <p className='my-4'>
            When it’s done well, direct trade can create room for better wages and better processing, and it can make quality improvements feel worth the effort.
            But it only works if the relationship is real and the numbers aren’t hidden.
          </p>

          <ul className='font-inconsolata my-4 list-disc ml-5'>
            <li className='my-2'>
              Offer single-origin microlots with rich, distinct profiles
            </li>
            <li className='my-2'>
              Guarantee traceability and transparency
            </li>
            <li className='my-2'>
              Build custom export programs tailored to buyer needs
            </li>
            <li className='my-2'>
              Respond quickly to changes in quality, quantity, or market demand
            </li>
          </ul>

          <h3 className='text-2xl font-extrabold mt-8'>
            Join the Direct Trade Movement
          </h3>
          <p className='my-4'>
            At Ethiocoffee, we believe in brewing better futures one handshake, one harvest, one container at a time. Our direct trade model is proof that commerce and compassion can thrive side by side.
          </p>

          <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
            <p className='my-2 font-medium'>
              Are you a roaster or coffee buyer looking to source ethical, premium Ethiopian coffee?<br/>
              Connect with Ethiocoffee to learn more about our direct trade partnerships and how you can support Ethiopian farmers while growing your business.
            </p>
          </div>
        </>
      );
    } else if (ind === 3) {
      // Content for "The Future is Floral: 5 Specialty Coffee Trends Defining 2026"
      blogContent = (
        <>
          <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
            {title}
          </h1>
          <h2 className='text-2xl font-medium text-gray-700 mb-6'>
            Market shifts roasters and green buyers should watch
          </h2>

          <figure>
            <figcaption className='font-inconsolata my-2'>
              The specialty market is moving from simple consumption to conscientious appreciation.
            </figcaption>

            <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
              <ResponsiveImage
                src={`/images/${large_image_url}`}
                alt='Specialty coffee trends 2026'
                fill
                objectFit='cover'
                className='w-full h-full'
                sizes='(max-width: 768px) 100vw, 768px'
              />
            </div>
          </figure>
          <p className='my-2 text-gray-600 font-inconsolata'>
            {date}
          </p>

          <p className='my-4'>
            The specialty coffee industry never stands still. As we move further into late 2025 and 2026, the global market is shifting from simple “consumption” to “conscientious appreciation.”
            For roasters and green coffee buyers, knowing what’s in the cup is no longer enough-you need to know the future of the bean itself.
          </p>

          <p className='my-4'>
            At Ethio Coffee, we aren’t just exporting beans; we are bridging the gap between Ethiopia’s ancient heritage and the modern demands of the global palate.
            Based on current market trajectories and harvest forecasts, here are the five key trends shaping specialty coffee in 2026-and how Ethiopian origins are uniquely positioned to lead them.
          </p>

          <h3 className='text-2xl font-extrabold mt-8'>
            1. Hyper-Traceability: The New Standard
          </h3>
          <p className='my-4'>
            In 2026, general labels like “Single Origin” are becoming the baseline, not the ceiling. The modern consumer-and by extension, the modern roaster-demands hyper-traceability.
            They want to know the specific washing station, the cooperative, and even the farmer’s name.
          </p>
          <p className='my-4'>
            <span className='font-bold'>The Ethio Coffee Advantage:</span> This shift validates the Direct Trade model we champion.
            By bypassing opaque auction systems and working directly with farmers in Yirgacheffe, Guji, and Sidama, we provide the “digital provenance” that 2026 consumers crave.
            When you source our microlots, you aren't just buying a flavor profile; you are buying a verifiable story of fair compensation and community impact.
          </p>

          <h3 className='text-2xl font-extrabold mt-8'>
            2. Experimental Processing Meets Tradition
          </h3>
          <p className='my-4'>
            While the clean profile of a classic washed Yirgacheffe remains a global favorite, 2026 is seeing an explosion in experimental processing.
            Roasters are hunting for funkier profiles-Anaerobic Fermentation, Carbonic Maceration, and Honey processes-that push the boundaries of fruitiness and body.
          </p>
          <p className='my-4'>
            <span className='font-bold'>What’s happening in the Highlands:</span> Ethiopian producers are innovating rapidly.
            We are seeing a surge in high-quality Anaerobic Naturals from the Guji zone, where the coffee is fermented in oxygen-free tanks to amplify iconic notes of strawberry jam, tropical jackfruit, and wine.
            These aren't just beans; they are sensory experiences designed for the adventurous palate.
          </p>

          <h3 className='text-2xl font-extrabold mt-8'>
            3. Climate Resilience & Heirloom Genetics
          </h3>
          <p className='my-4'>
            Climate change is the elephant in the roasting room. As global temperatures rise, monoculture crops in other parts of the world are struggling.
            However, Ethiopia-the birthplace of Arabica-holds a secret weapon: genetic diversity.
          </p>
          <p className='my-4'>
            Ethiopia is home to thousands of heirloom varietals, many of which grow wild in forests like Kaffa.
            These diverse gene pools are naturally more resilient to climate fluctuations than standardized cultivars found elsewhere.
            Sourcing Ethiopian coffee in 2026 isn't just a flavor preference; it’s a strategic hedge against climate risk for your green coffee inventory.
          </p>

          <h3 className='text-2xl font-extrabold mt-8'>
            4. The “Flash Chill” and Cold Brew Revolution
          </h3>
          <p className='my-4'>
            Cold coffee is no longer seasonal; it is a year-round dominant force, especially among Gen Z consumers.
            But the trend has evolved from standard cold brew to “Flash Chill” (brewed hot and cooled instantly), which preserves delicate aromatics.
          </p>
          <p className='my-4'>
            <span className='font-bold'>Why Ethiopia wins here:</span> Heavy, chocolatey roasts often taste flat when chilled.
            The future of cold coffee belongs to beans with high floral and citrus notes-flavors that pop even over ice.
            Our bright, tea-like washed coffees from Sidama and Limu are chemically perfect for this trend, offering a refreshing, complex sweetness that doesn't need sugar to shine.
          </p>

          <h3 className='text-2xl font-extrabold mt-8'>
            5. Story-Driven Premiumization
          </h3>
          <p className='my-4'>
            With the cost of living and doing business rising globally, coffee lovers are buying less-but they are buying better.
            They are willing to pay a premium, but only if the product moves them emotionally. They are looking for the soul of the bean.
          </p>
          <p className='my-4'>
            <span className='font-bold'>Our shared narrative:</span> This is where Ethiopia stands alone.
            We offer the world’s only coffee culture that dates back centuries.
            When you roast our beans, you can share the legend of Kaldi, the sanctity of the Coffee Ceremony, and the dedication of the farmers.
            In 2026, you aren't just selling caffeine; you are selling a connection to the cradle of humanity.
          </p>

          <h3 className='text-2xl font-extrabold mt-8'>
            The Outlook for the 2026 Harvest
          </h3>
          <p className='my-4'>
            As we look toward the upcoming shipments, we advise our partners to book washed lots early.
            Volume forecasts suggest a tighter supply for Grade 1 washed coffees due to rising red cherry prices, while high-quality naturals will be more abundant.
          </p>

          <p className='my-4'>
            Ready to future-proof your coffee menu? Whether you need a classic Guji for your espresso blend or an experimental microlot to dazzle your customers,
            Ethio Coffee is your direct link to the source.
          </p>

          <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
            <p className='my-2 font-medium'>
              Contact us today to request samples and taste the future of coffee.
            </p>
            <Link href='/contact-us' className='underline font-bold'>
              CONTACT US
            </Link>
          </div>
        </>
      );
    } else if (ind === 4) {
      // Ethiopian green coffee origins guide (formatted)
      blogContent = (
        <>
          <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
            {title}
          </h1>
          <h2 className='text-2xl font-medium text-gray-700 mb-6'>
            A buyer-friendly guide to regions, processing, and roast direction
          </h2>

          <figure>
            <figcaption className='font-inconsolata my-2'>
              Ethiopia’s coffee map is a great starting point - but sourcing decisions are made in the details.
            </figcaption>

            <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
              <ResponsiveImage
                src={`/images/${large_image_url}`}
                alt='Map of Ethiopian coffee regions'
                fill
                objectFit='contain'
                className='w-full h-full'
                sizes='(max-width: 768px) 100vw, 768px'
              />
            </div>
          </figure>
          <p className='my-2 text-gray-600 font-inconsolata'>{date}</p>

          <p className='my-4'>
            Ethiopian green coffee is often described with famous place names-Yirgacheffe, Guji, Sidama, Limu, Harrar, Kaffa, Jimma.
            For buyers, “origin” isn’t just geography: it’s a shorthand for altitude range, local genetics (“heirloom” selections), processing approach, and the mills/washing stations that shape the cup.
          </p>

          <p className='my-4 text-sm text-gray-700 font-inconsolata'>
            Note: Profiles vary by lot, washing station, and crop year. The ranges below are common reference points used in specialty coffee, not guarantees.
          </p>

          <h3 className='text-2xl font-extrabold mt-8'>
            Featured Ethiopian Coffee Regions
          </h3>

          <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
            <h4 className='font-bold text-xl mb-3'>Yirgacheffe - Washed, Floral & Delicate</h4>
            <ul className='font-inconsolata list-disc ml-5'>
              <li className='my-2'><span className='font-bold'>Region:</span> Gedeo Zone (SNNPR / South Ethiopia)</li>
              <li className='my-2'><span className='font-bold'>Processing:</span> Commonly washed (naturals also exist)</li>
              <li className='my-2'><span className='font-bold'>Altitude:</span> ~1,700–2,200 m (varies by kebele/lot)</li>
              <li className='my-2'><span className='font-bold'>Cup Profile:</span> Jasmine, bergamot, lemon/black tea (often)</li>
              <li className='my-2'><span className='font-bold'>Roast Tip:</span> Light roast (City) to preserve florals and structure</li>
            </ul>
          </div>

          <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
            <h4 className='font-bold text-xl mb-3'>Guji - Bright, Floral & Stone-Fruity</h4>
            <ul className='font-inconsolata list-disc ml-5'>
              <li className='my-2'><span className='font-bold'>Region:</span> Oromia (Guji Zone, south/southeast)</li>
              <li className='my-2'><span className='font-bold'>Processing:</span> Both washed and natural are common</li>
              <li className='my-2'><span className='font-bold'>Altitude:</span> ~1,900–2,200 m (many lots high elevation)</li>
              <li className='my-2'><span className='font-bold'>Cup Profile:</span> White peach/stone fruit, lemongrass, floral-honey (lot dependent)</li>
              <li className='my-2'><span className='font-bold'>Roast Tip:</span> Light–medium (City to City+) for clarity and sweetness</li>
            </ul>
          </div>

          <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
            <h4 className='font-bold text-xl mb-3'>Limu - Washed, Balanced & Citrusy</h4>
            <ul className='font-inconsolata list-disc ml-5'>
              <li className='my-2'><span className='font-bold'>Region:</span> Oromia (western highlands)</li>
              <li className='my-2'><span className='font-bold'>Processing:</span> Commonly washed</li>
              <li className='my-2'><span className='font-bold'>Altitude:</span> ~1,800–2,000 m (typical range)</li>
              <li className='my-2'><span className='font-bold'>Cup Profile:</span> Citrus zest, cocoa, honey (often)</li>
              <li className='my-2'><span className='font-bold'>Roast Tip:</span> Medium (City+) can enhance body while keeping citrus lift</li>
            </ul>
          </div>

          <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
            <h4 className='font-bold text-xl mb-3'>Harrar - Natural, Bold & Winey</h4>
            <ul className='font-inconsolata list-disc ml-5'>
              <li className='my-2'><span className='font-bold'>Region:</span> Eastern Ethiopia (Hararghe area)</li>
              <li className='my-2'><span className='font-bold'>Processing:</span> Traditionally natural (sun-dried)</li>
              <li className='my-2'><span className='font-bold'>Altitude:</span> ~1,500–2,000 m (varies)</li>
              <li className='my-2'><span className='font-bold'>Cup Profile:</span> Dried fruit, cocoa, spice; sometimes berry-like notes (lot dependent)</li>
              <li className='my-2'><span className='font-bold'>Roast Tip:</span> Medium to Full City to balance fruit intensity and body</li>
            </ul>
          </div>

          <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
            <h4 className='font-bold text-xl mb-3'>Sidama - Sweet, Juicy & Aromatic</h4>
            <ul className='font-inconsolata list-disc ml-5'>
              <li className='my-2'><span className='font-bold'>Region:</span> Sidama (South Ethiopia)</li>
              <li className='my-2'><span className='font-bold'>Processing:</span> Washed is common; naturals also widely produced</li>
              <li className='my-2'><span className='font-bold'>Altitude:</span> ~1,600–2,200 m</li>
              <li className='my-2'><span className='font-bold'>Cup Profile:</span> Red berry, sugar cane, florals (often)</li>
              <li className='my-2'><span className='font-bold'>Roast Tip:</span> Light–medium to highlight sweetness and clarity</li>
            </ul>
          </div>

          <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
            <h4 className='font-bold text-xl mb-3'>Kaffa - Wild-Rooted & Foresty</h4>
            <ul className='font-inconsolata list-disc ml-5'>
              <li className='my-2'><span className='font-bold'>Region:</span> Kaffa (Southwest Ethiopia; often cited as Arabica’s ancestral home)</li>
              <li className='my-2'><span className='font-bold'>Processing:</span> Both washed and natural exist (varies by supplier)</li>
              <li className='my-2'><span className='font-bold'>Altitude:</span> ~1,400–2,000 m</li>
              <li className='my-2'><span className='font-bold'>Cup Profile:</span> Herbal tea, dark fruit, foresty/earthy notes (lot dependent)</li>
              <li className='my-2'><span className='font-bold'>Roast Tip:</span> Medium to bring balance and keep structure</li>
            </ul>
          </div>

          <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
            <h4 className='font-bold text-xl mb-3'>Jimma (Djimma) - Traditional, Cocoa & Earthy</h4>
            <ul className='font-inconsolata list-disc ml-5'>
              <li className='my-2'><span className='font-bold'>Region:</span> Oromia (Southwest Ethiopia)</li>
              <li className='my-2'><span className='font-bold'>Processing:</span> Often natural; washed lots also exist depending on supply</li>
              <li className='my-2'><span className='font-bold'>Altitude:</span> ~1,400–1,900 m</li>
              <li className='my-2'><span className='font-bold'>Cup Profile:</span> Cocoa, spice, earth; muted fruit compared to high-elevation washed lots</li>
              <li className='my-2'><span className='font-bold'>Roast Tip:</span> Medium to medium-dark can smooth edges and deepen cocoa</li>
            </ul>
          </div>

          <h3 className='text-2xl font-extrabold mt-10'>
            Roasting & Sourcing Tips
          </h3>
          <ul className='font-inconsolata my-4 list-disc ml-5'>
            <li className='my-2'>Roast small batches and cup often to learn each lot’s sweet spot.</li>
            <li className='my-2'>Washed lots often reward lighter roasts; naturals can benefit from slightly more development time for balance.</li>
            <li className='my-2'>Store green coffee cool and dry, and avoid strong odors (greens absorb smells).</li>
            <li className='my-2'>When sourcing, ask for: washing station/mill, processing details, crop year, grade/screen, and a sample for evaluation.</li>
          </ul>

          <h3 className='text-2xl font-extrabold mt-10'>
            Sourcing Ethiopian Green Coffee (for buyers worldwide)
          </h3>
          <p className='my-4'>
            If you’re buying green coffee (whether you’re in Canada or anywhere else), the most helpful step is moving from “country-level origin” to lot-level clarity.
            The best suppliers can share not only the region, but also the washing station/cooperative, processing details, and consistency expectations.
          </p>

          <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
            <p className='my-2 font-medium'>
              Want help choosing the right Ethiopian origin for your menu or roasting goals?
              We can recommend lots based on your target profile and share traceability details when available.
            </p>
            <Link href='/contact-us' className='underline font-bold'>
              CONTACT US TO REQUEST SAMPLES
            </Link>
          </div>
        </>
      );
    } else {
      // Fallback for any blog posts without custom content
      blogContent = (
        <>
          <h1 className='text-5xl font-extrabold text-dark leading-tight'>
            {title}
          </h1>

          <figure>
            <figcaption className='font-inconsolata my-2'>
              Insights from Ethiopian coffee sourcing and the specialty coffee industry.
            </figcaption>

            <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
              <ResponsiveImage
                src={`/images/${large_image_url}`}
                alt={`${title} - Ethiopian coffee blog article`}
                fill
                objectFit='cover'
                className='w-full h-full'
                sizes='(max-width: 768px) 100vw, 768px'
              />
            </div>
          </figure>
          <p className='my-2 text-gray-600 font-inconsolata'>
            {date}
          </p>
          
          <p className='my-4'>
            This article is being prepared. Check back soon for insights on Ethiopian coffee sourcing, 
            industry trends, and practical guidance for roasters and café partners.
          </p>
          
          <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
            <p className='my-2 font-medium'>
              In the meantime, explore our other articles or get in touch to discuss your sourcing needs.
            </p>
            <div className='flex gap-4 mt-4'>
              <Link href='/blog' className='underline font-bold'>
                VIEW ALL POSTS
              </Link>
              <Link href='/contact-us' className='underline font-bold'>
                CONTACT US
              </Link>
            </div>
          </div>
        </>
      );
    }

    const Content = (
      <section id='blog-content' className='p-4 flex flex-col items-center justify-center bg-primary text-dark'>
        <div className="container max-w-4xl">
          {blogContent}
        </div>
      </section>
    )
    return Content;
  }
}

export default Blog

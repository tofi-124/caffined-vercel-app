"use client"

import { useEffect, use } from 'react'
import { posts } from '@/app/data/data'
import ResponsiveImage from '@/app/components/ResponsiveImage'

// Define standard image dimensions for all blog posts
const BLOG_IMAGE_WIDTH = 1000;
const BLOG_IMAGE_HEIGHT = 600;

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
          
            <ResponsiveImage 
              src={`/images/${large_image_url}`} 
              alt='Ethiopian coffee heritage' 
              width={BLOG_IMAGE_WIDTH} 
              height={BLOG_IMAGE_HEIGHT} 
            />
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
          
            <ResponsiveImage 
              src={`/images/${large_image_url}`} 
              alt='Ethiopian coffee ceremony' 
              width={BLOG_IMAGE_WIDTH} 
              height={BLOG_IMAGE_HEIGHT} 
            />
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
          
            <ResponsiveImage 
              src={`/images/${large_image_url}`} 
              alt='Ethiopian coffee farmers' 
              width={BLOG_IMAGE_WIDTH} 
              height={BLOG_IMAGE_HEIGHT} 
            />
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
    } else {
      // This else clause should no longer be needed since we only have 3 blog posts now
      // but keeping it as a fallback for any unexpected cases
      blogContent = (
        <>
          <h1 className='text-5xl font-extrabold text-dark leading-tight'>
            {title}
          </h1>

          <figure>
            <figcaption className='font-inconsolata my-2'>
              Coffee is a popular beverage enjoyed by millions of people around the world.
            </figcaption>
          
            <ResponsiveImage 
              src={`/images/${large_image_url}`} 
              alt='blog-img' 
              width={BLOG_IMAGE_WIDTH} 
              height={BLOG_IMAGE_HEIGHT} 
            />
          </figure>
          <p className='my-2 text-gray-600 font-inconsolata'>
            {date}
          </p>
          
          <p className='my-4'>
            Content coming soon...
          </p>
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

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
      
      <p className='my-4'>
        If you grew up around Ethiopian coffee, you know it&apos;s not a &quot;grab-and-go&quot; thing.
        The coffee ceremony is time set aside on purpose an excuse to be present with people.
      </p>

      <p className='my-4'>
        And the steps are wonderfully tangible: roast green beans over a flame, grind them (often with a traditional mortar and pestle), then brew in a jebena.
        The aroma is part of the point.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        The Part People Miss: It&apos;s Three Rounds
      </h3>
      <p className='my-4'>
        The ceremony is commonly served in three rounds.
        In Amharic, you&apos;ll often hear abol, tona, and baraka.
        The idea isn&apos;t &quot;more caffeine&quot; it&apos;s a rhythm: brew, talk, refill, talk again.
      </p>

      <p className='my-4'>
        What sets this ceremony apart is its deliberate pace and focus on human connection. Neighbors gather. Conversations flow. Respect is given. It&apos;s a moment of pause in a fast-paced world a value that resonates deeply in modern business culture.
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
        It&apos;s equal parts skill and hospitality.
        The ceremony is basically saying, &quot;You matter enough for me to slow down.&quot;
      </p>

      <p className='my-4'>
        By sourcing your coffee through Ethiocoffee, you&apos;re not just purchasing beans. You&apos;re tapping into:
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
        Instead of &quot;heritage&quot; as a buzzword, tell one real thing: what was roasted, how it was brewed, why the third round is called baraka (a blessing).
        Those specifics feel human because they are.
      </p>

      <p className='my-4'>
        It is also worth noting that the ceremony is traditionally led by women.
        Their role as cultural custodians of coffee extends far beyond the jebena.
        Learn more about{' '}
        <Link href='/insights/women-in-ethiopian-coffee-industry' className='underline font-bold'>
          the role of women in Ethiopian coffee
        </Link>
        {' '}and how their contributions shape the entire supply chain.
      </p>

      {/* FAQ SECTION */}
      <section className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions About the Ethiopian Coffee Ceremony</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What is the Ethiopian coffee ceremony?</h4>
            <p className="text-sm text-gray-600">The Ethiopian coffee ceremony is a traditional social ritual where green coffee beans are roasted over an open flame, ground by hand using a mortar and pestle, and brewed in a clay pot called a jebena. It is a communal experience that emphasizes hospitality, respect, and human connection.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How many rounds are served in a traditional ceremony?</h4>
            <p className="text-sm text-gray-600">The ceremony is traditionally served in three rounds known as abol, tona, and baraka. Each round has its own significance, with baraka (the third) considered a blessing. The rhythm of brewing, sharing, and conversation is central to the experience.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Who traditionally leads the Ethiopian coffee ceremony?</h4>
            <p className="text-sm text-gray-600">The ceremony is traditionally led by women, who serve as cultural custodians of coffee in Ethiopian society. Their role extends beyond the ceremony itself, as women perform an estimated 60 to 70 percent of the labor in Ethiopian coffee production.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Why does the coffee ceremony matter for international buyers?</h4>
            <p className="text-sm text-gray-600">Understanding the culture behind Ethiopian coffee helps buyers treat the product with greater respect, ask better sourcing questions, and appreciate the human effort behind each cup. It also provides powerful storytelling potential for roasters and café owners marketing Ethiopian origins.</p>
          </div>
        </div>
      </section>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Bring the Richness of Ethiopian Coffee Culture to Your Business</h4>
        <p className='my-2'>
          At <span className='font-bold'>Ethio Coffee Export PLC</span>, we don&apos;t just export beans—we share the story, heritage, and tradition behind every cup. Discover how our story-driven approach can elevate your coffee offerings.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>
            View Our Offerings
          </Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            Contact Us
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
            <h4 className='font-semibold mb-2 text-sm'>Ethiopian Coffee Culture</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/birthplace-of-coffee-ethiopia' className='text-amber-700 hover:underline'>The Birthplace of Coffee</Link></li>
              <li>• <Link href='/insights/direct-trade-ethiopian-farmers' className='text-amber-700 hover:underline'>Direct Trade with Ethiopian Farmers</Link></li>
              <li>• <Link href='/insights/women-in-ethiopian-coffee-industry' className='text-amber-700 hover:underline'>Women in Ethiopian Coffee</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origins & Sourcing</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Coffee Origins</Link></li>
              <li>• <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji</Link></li>
              <li>• <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> This article explores the Ethiopian coffee ceremony—its cultural significance, its three-round tradition, and why understanding this ritual matters for modern coffee buyers, roasters, and importers.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function DirectTradeEthiopianFarmers({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        What it is, what it isn&apos;t, and why transparency matters
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
      
      <p className='my-4'>
        &quot;Direct trade&quot; is one of those phrases you&apos;ll hear everywhere in specialty coffee.
        Sometimes it means something real. Sometimes it&apos;s just a label.
      </p>

      <p className='my-4'>
        At its best, direct trade is about direct relationships between buyers and producers, with prices and support tied to quality and long-term trust.
        The tricky part: there&apos;s no single global standard for what counts.
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
        The part we like most is the accountability: if you use the term, you should be able to explain your prices, your quality goals, and what &quot;direct&quot; really means in your chain.
      </p>

      <div className='bg-amber-100 p-6 rounded-lg my-8'>
        <h4 className='font-bold text-xl mb-2'>Farmer Spotlight</h4>
        <p className='my-2'>
          &quot;Working directly with exporters who understand quality has transformed our community. Now we can afford to invest in better processing methods and send our children to school.&quot; - Abebe Bekele, Lead Farmer, Konga Cooperative
        </p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        The Honest Caveat
      </h3>
      <p className='my-4'>
        Because direct trade isn&apos;t a certified standard, critics often point out a real risk: big brands can market the term without showing evidence.
        The fix is simple (but not always easy): publish more.
        Transparency reports, pricing ranges, who you buy from anything that lets a customer verify you&apos;re doing what you say.
      </p>

      <p className='my-4'>
        Our direct trade approach supports them by:
      </p>

      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>
          Paying speciality prices that reflect the quality of their beans
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
        This isn&apos;t charity. It&apos;s respect in action.
      </p>

      <iframe className='w-full h-[450px] my-6' src="https://www.youtube.com/embed/Dmpnrtey3YU" title="Direct Trade Coffee Sourcing" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

      <h3 className='text-2xl font-extrabold mt-8'>
        What &quot;Better&quot; Can Look Like
      </h3>
      <p className='my-4'>
        When it&apos;s done well, direct trade can create room for better wages and better processing, and it can make quality improvements feel worth the effort.
        But it only works if the relationship is real and the numbers aren&apos;t hidden.
      </p>

      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>
          Offer single-origin microlots with rich, distinct profiles
        </li>
        <li className='my-2'>
          Guarantee <Link href='/insights/ethiopian-coffee-traceability-guide' className='underline font-bold'>traceability</Link> and transparency
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

      <p className='my-4'>
        Direct trade is especially powerful when it reaches the women who do the majority of the work.
        From selective harvesting to sorting and drying, women perform an estimated 60 to 70 percent of the labor in Ethiopian coffee.
        Read more about{' '}
        <Link href='/insights/women-in-ethiopian-coffee-industry' className='underline font-bold'>
          the role of women in Ethiopian coffee
        </Link>
        {' '}and why supporting them is both a moral and commercial imperative.
      </p>

      {/* FAQ SECTION */}
      <section className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions About Direct Trade Ethiopian Coffee</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What is direct trade coffee?</h4>
            <p className="text-sm text-gray-600">Direct trade is a sourcing approach where the roaster or buyer builds a direct relationship with the farmer, cooperative, or processor. It typically involves higher premiums, clearer quality expectations, and greater transparency compared to conventional sourcing channels.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Is direct trade a certified standard?</h4>
            <p className="text-sm text-gray-600">No. Unlike Fair Trade or Organic, direct trade is not a certified standard with a governing body. This means anyone can use the term, which is why transparency, published pricing, and verifiable relationships are important indicators of genuine direct trade practices.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How does direct trade benefit Ethiopian coffee farmers?</h4>
            <p className="text-sm text-gray-600">When done properly, direct trade pays specialty prices that reflect quality, offers long-term contracts for financial stability, encourages sustainable farming methods, and funds training and equipment improvements at the community level.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How can I verify that a supplier genuinely practices direct trade?</h4>
            <p className="text-sm text-gray-600">Look for transparency reports, published pricing ranges, named producer partnerships, and evidence of ongoing relationships. A genuine direct trade supplier should be able to explain exactly who they buy from, what they pay, and how their practices benefit producers.</p>
          </div>
        </div>
      </section>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Ethical, Specialty Ethiopian Coffee Through Direct Trade</h4>
        <p className='my-2'>
          At <span className='font-bold'>Ethio Coffee Export PLC</span>, we practice genuine direct trade—building long-term partnerships with Ethiopian farmers and cooperatives, paying fair specialty prices, and providing full traceability for every lot we export.
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
              <li>• <Link href='/insights/ethiopian-coffee-ceremony' className='text-amber-700 hover:underline'>The Ethiopian Coffee Ceremony</Link></li>
              <li>• <Link href='/insights/women-in-ethiopian-coffee-industry' className='text-amber-700 hover:underline'>Women in Ethiopian Coffee</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Trade & Sourcing</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Coffee Certifications Guide</Link></li>
              <li>• <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Minimum Order Quantities</Link></li>
              <li>• <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> This article examines direct trade in Ethiopian coffee—what it means, how it supports farmers, how to verify genuine practices, and why transparency matters for the specialty coffee supply chain.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

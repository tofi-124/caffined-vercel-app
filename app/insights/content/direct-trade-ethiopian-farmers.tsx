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

      <p className='my-4'>
        Direct trade is especially powerful when it reaches the women who do the majority of the work.
        From selective harvesting to sorting and drying, women perform an estimated 60 to 70 percent of the labor in Ethiopian coffee.
        Read more about{' '}
        <Link href='/insights/women-in-ethiopian-coffee-industry' className='underline font-bold'>
          the role of women in Ethiopian coffee
        </Link>
        {' '}and why supporting them is both a moral and commercial imperative.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <p className='my-2 font-medium'>
          Are you a roaster or coffee buyer looking to source ethical, speciality Ethiopian coffee?<br/>
          Connect with Ethiocoffee to learn more about our direct trade partnerships and how you can support Ethiopian farmers while growing your business.
        </p>
      </div>
    </>
  )
}

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

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <p className='my-2 font-medium'>
          Want to bring the richness of Ethiopia&apos;s coffee culture into your business?
          Reach out to Ethiocoffee to explore how our exports and story-driven approach can elevate your coffee offerings.
        </p>
      </div>
    </>
  )
}

import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function BirthplaceOfCoffeeEthiopia({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        A warm, grounded intro to where coffee began
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Ethiopia is known as the birthplace of Arabica coffee and cradle of a rich coffee culture that blends history, biodiversity, and social tradition.
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
      
      <p className='my-4'>
        If you have ever taken a sip and thought, &quot;Wait, why does this taste like jasmine or blueberries?&quot; you have already encountered a piece of Ethiopia. Coffee, specifically Coffea arabica, traces its roots back to Ethiopia, particularly the Kaffa region, whose name may have inspired the word &quot;coffee.&quot; Ethiopia is not only the birthplace of the plant but also home to the **widest genetic diversity of Arabica coffee**, making it a global treasure for biodiversity and flavor.
      </p>

      <p className='my-4'>
        This post is here to give you a real, grounded starting point: a place, a culture, and a set of traditions that continue to shape how Ethiopian coffee is grown, harvested, and shared today. Ethiopia&apos;s coffee culture is intertwined with social customs, ecological stewardship, and centuries of human experience.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        The Origin Story and the Legend
      </h3>
      <p className='my-4'>
        A popular legend tells of a goat herder named Kaldi who noticed his goats becoming unusually energetic after eating red coffee berries. He shared the discovery with monks, who brewed the first rudimentary coffee drink to help them stay awake during long prayers. Historians note that the story was recorded much later, but it remains a symbol of Ethiopia&apos;s central role in coffee history. Beyond legend, Ethiopia is scientifically recognized as the origin of Arabica coffee.
      </p>

      <p className='my-4'>
        Ethiopian coffee is inseparable from its place of origin. Regions such as Yirgacheffe, Sidama, Harar, Limu, and Guji are more than flavor descriptors; they are unique microclimates with specific soil, altitude, and rainfall patterns. Coffee grown at higher elevations often ripens more slowly, developing complex aromas and flavors that range from floral and tea-like to fruity and chocolatey.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Coffee as Hospitality and Community
      </h3>
      <p className='my-4'>
        In Ethiopia, coffee is a social language. The traditional coffee ceremony is an unhurried ritual where green beans are roasted over an open flame, ground by hand with a mortar and pestle, and brewed in a clay pot called a jebena. Friends and family gather, share stories, laugh, and connect. This process can take an hour or more, emphasizing patience, respect, and community. Coffee is not a quick caffeine fix, it is a moment of human connection.
      </p>

      <p className='my-4 font-medium'>
        Here&apos;s a beautiful short documentary that captures Ethiopia&apos;s coffee culture and history visually:
      </p>
    
      <iframe className='w-full h-[450px] my-6' src="https://www.youtube.com/embed/voMC-eICDrg" title="Ethiopia - The Birthplace of Coffee" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      
      <h3 className='text-2xl font-extrabold mt-8'>
        What This Means for Your Cup
      </h3>
      <p className='my-4'>
        Ethiopian coffee is remarkably diverse. Even within a single region, processing methods and microclimates can produce flavors that are entirely different. Buyers and roasters who value **origin transparency and quality** support farmers and cooperatives in investing in careful harvesting and processing, ensuring the coffee&apos;s unique personality shines in every cup.
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
        For roasters or cafe owners, the &quot;Ethiopian difference&quot; is in the details: the clarity of origin, meticulous processing choices, and respect for the hands that cultivate, harvest, and process each bean. This dedication translates to a cup full of nuance and history.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        A Simple Way to Taste It
      </h3>
      <p className='my-4'>
        Here is a fun exercise: brew two Ethiopian coffees side by side from different washing stations or cooperatives. Taste mindfully. One might present a floral, tea-like aroma, while the other might be citrus-forward and bright. Despite coming from the same country, each cup tells a unique story of climate, soil, and human care.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <p className='my-2 font-medium'>
          Interested in sourcing authentic Ethiopian coffee directly from the origin? Get in touch with Ethiocoffee to learn more about our export services and discover how you can bring this legendary heritage to your market.
        </p>
      </div>
    </>
  )
}

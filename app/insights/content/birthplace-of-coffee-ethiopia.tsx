import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { HiOutlineLightBulb } from 'react-icons/hi2'

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

      <div className='bg-amber-50 border border-amber-200 p-6 rounded-lg my-8'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-600 flex-shrink-0' />
          Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Ethiopia is the scientifically recognized origin of Coffea arabica and home to the widest genetic diversity of Arabica coffee on Earth. Its distinct growing regions, traditional processing methods, and centuries-old coffee culture produce flavors unavailable from any other origin. For roasters and importers, Ethiopian coffee offers unmatched variety and traceability.
        </p>
      </div>

      <p className='my-4'>
        Coffee, specifically Coffea arabica, traces its roots to Ethiopia, particularly the Kaffa region, whose name may have inspired the word &quot;coffee.&quot; Ethiopia is the birthplace of the plant and home to the <strong>widest genetic diversity of Arabica coffee</strong>, making it a global treasure for biodiversity and flavor. For roasters and importers seeking origin transparency, this diversity translates directly into distinctive cup profiles.
      </p>

      <p className='my-4'>
        This article provides a grounded starting point: the place, the culture, and the traditions that continue to shape how Ethiopian coffee is grown, harvested, and traded today. Ethiopia&apos;s coffee culture is intertwined with social customs, ecological stewardship, and centuries of human experience.
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
        Ethiopian coffee is exceptionally diverse. Even within a single region, processing methods and microclimates can produce flavors that are entirely different. Buyers and roasters who value <strong>origin transparency and quality</strong> support farmers and cooperatives in investing in careful harvesting and processing, ensuring the coffee&apos;s unique personality shines in every cup.
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
        Try brewing two Ethiopian coffees side by side from different washing stations or cooperatives. One might present a floral, tea-like aroma, while the other could be citrus-forward and bright. Despite coming from the same country, each cup tells a unique story of climate, soil, and human care. This tasting exercise is one of the fastest ways to understand the range Ethiopian coffee offers.
      </p>

      <div className='my-4 text-sm text-gray-700'>
        <p className='font-semibold mb-1'>Further reading:</p>
        <ul className='list-disc ml-5 space-y-1'>
          <li><a href='https://www.ico.org' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>International Coffee Organization (ICO)</a></li>
          <li><a href='https://www.thecoffeeguide.org' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>The Coffee Guide (ITC)</a></li>
          <li><a href='https://sca.coffee' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>Specialty Coffee Association (SCA)</a></li>
        </ul>
      </div>

      {/* FAQ SECTION */}
      <section className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions About the Birthplace of Coffee</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Why is Ethiopia considered the birthplace of coffee?</h4>
            <p className="text-sm text-gray-600">Ethiopia is scientifically recognized as the origin of Coffea arabica. The plant evolved in the highland forests of southwestern Ethiopia, particularly in the Kaffa region. Ethiopia also has the widest genetic diversity of Arabica varieties found anywhere in the world.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What is the legend of Kaldi and Ethiopian coffee?</h4>
            <p className="text-sm text-gray-600">The legend describes a goat herder named Kaldi who noticed his goats becoming energetic after eating red coffee cherries. He shared the discovery with monks who brewed the berries into a drink. Though recorded much later, the story remains a widely recognized symbol of Ethiopia&apos;s central role in coffee history.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What makes Ethiopian coffee different from other origins?</h4>
            <p className="text-sm text-gray-600">Ethiopian coffee stands out because of its unmatched genetic diversity, unique regional microclimates, and distinct processing traditions. Regions like Yirgacheffe, Sidamo, Guji, and Harar each produce coffees with distinctive flavor profiles ranging from floral and tea-like to fruity and chocolatey.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What is the Ethiopian coffee ceremony?</h4>
            <p className="text-sm text-gray-600">The Ethiopian coffee ceremony is a traditional social ritual where green beans are roasted over an open flame, ground by hand, and brewed in a clay pot called a jebena. The ceremony emphasizes hospitality, community, and patience, often lasting an hour or more with three rounds of coffee served.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Which Ethiopian coffee regions are most important for specialty buyers?</h4>
            <p className="text-sm text-gray-600">Yirgacheffe, Sidamo, Guji, Harar, and Limu are the primary specialty regions. Each offers distinct cup profiles shaped by altitude, soil, and processing tradition. Yirgacheffe is known for floral and citrus notes, while Guji and Sidamo often deliver stone fruit and berry complexity.</p>
          </div>
        </div>
      </section>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Premium Ethiopian Coffee Direct from Origin</h4>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Import and Export PLC</span> exports traceable, high-quality green coffee from Ethiopia&apos;s legendary growing regions. From delicate washed Yirgacheffe to bold natural Sidamo, request samples and discover the origins that started it all.
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
            <h4 className='font-semibold mb-2 text-sm'>Ethiopian Coffee Culture</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-ceremony' className='text-amber-700 hover:underline'>The Ethiopian Coffee Ceremony</Link></li>
              <li>&bull; <Link href='/insights/women-in-ethiopian-coffee-industry' className='text-amber-700 hover:underline'>Women in Ethiopian Coffee Industry</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-climate-change-impact' className='text-amber-700 hover:underline'>Climate Change and Ethiopian Coffee</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origins & Varieties</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Coffee Origins</Link></li>
              <li>&bull; <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Ethiopian Heirloom Coffee Varieties</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing & Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process</Link></li>
              <li>&bull; <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='text-amber-700 hover:underline'>Choosing an Ethiopian Coffee Exporter</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality & Processing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Washing Stations Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality Control and Grading</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC. This article covers Ethiopia&apos;s role as the birthplace of Arabica coffee, its origin story, regional diversity, and cultural traditions. Information about coffee regions and trade practices may evolve; contact us for current details.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot; <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> &middot; <Link href='/about' className='underline'>About Ethio Coffee</Link> &middot; <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

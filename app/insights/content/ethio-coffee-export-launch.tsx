import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { HiOutlineCalendarDays } from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthioCoffeeExportLaunch({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Speciality Ethiopian green coffee for importers worldwide
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Ethio Coffee Export PLC brings Ethiopia&apos;s legendary coffee heritage directly to importers around the globe.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethio Coffee Export launch'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm'>
        <span className='font-semibold'>Series:</span>
        <Link href='/insights/coffee-plant-taxonomy-species-varieties' className='underline ml-2'>Coffee is a Plant</Link>
        <Link href='/insights/coffee-is-processing-drying-milling' className='underline ml-2'>Processing</Link>
        <Link href='/insights/coffee-is-commerce-exporting-importing-buying' className='underline ml-2'>Commerce</Link>
        <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='underline ml-2'>Science</Link>
        <Link href='/insights/coffee-is-art-roasting-brewing' className='underline ml-2'>Art</Link>
      </div>
      
      <p className='my-4'>
        We&apos;re proud to announce the official launch of <span className='font-bold'>Ethio Coffee Export PLC</span> - your trusted Ethiopian coffee export partner. Founded by two brothers - one based in Ethiopia, one Ethiopian-Canadian - we bring speciality Ethiopian green coffee to importers worldwide with the professionalism, traceability, and reliability you need.
      </p>

      <p className='my-4'>
        For years, importers who wanted exceptional Ethiopian coffee faced familiar challenges: inconsistent communication from origin suppliers, unreliable quality control, and difficulty building direct relationships. We&apos;re here to change that.
      </p>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium flex items-center gap-2'>
          <HiOutlineCalendarDays className='text-xl flex-shrink-0' />
          <span><span className='font-bold'>2025 harvest is fully allocated.</span> Check out our <Link href='/offerings' className='underline'>offerings</Link> and join the 2026 allocation list to reserve your next speciality green coffee directly from Ethiopia.</span>
        </p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        The Story Behind Ethio Coffee
      </h3>
      <p className='my-4'>
        Our roots run deep in Ethiopian coffee. Our father spent over 30 years traveling across Ethiopia&apos;s coffee regions. He wasn&apos;t just buying coffee; he was learning how it&apos;s grown, processed, and cared for at every step. He built relationships with farmers, invested in his own farm, and worked to ensure that the people doing the hardest work received fair value for their exceptional coffee. For decades, he operated locally within Ethiopia, supplying domestic buyers and building a reputation for quality and integrity.
      </p>

      <p className='my-4'>
        In 2022, we decided it was time to share this legacy with the world. We established <span className='font-bold'>Ethio Coffee Export PLC</span>, registered with the Ethiopian Commodity Exchange, to bring our father&apos;s relationship-driven approach to the international market. Today, we source from our own estates and a network of trusted partner growers across Ethiopia&apos;s most celebrated coffee regions.
      </p>

      <p className='my-4'>
        With one brother on the ground in Ethiopia managing sourcing and quality, and one Ethiopian-Canadian brother handling international relationships and communication, we bridge the gap that often frustrates importers working with origin suppliers.
      </p>

      <div className='my-6'>
        <Link href='/about' className='inline-flex items-center gap-2 bg-amber-100 hover:bg-amber-200 text-dark px-5 py-3 rounded-lg font-bold transition'>
          Read Our Full Story
          <span aria-hidden='true'>→</span>
        </Link>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Why Ethiopian Coffee?
      </h3>
      <p className='my-4'>
        If you&apos;ve ever tasted a coffee that made you stop mid-sip, something unexpectedly floral, bursting with blueberry, or carrying a complexity you couldn&apos;t quite name, there&apos;s a good chance it came from Ethiopia.
      </p>

      <p className='my-4'>
        Ethiopia isn&apos;t just another origin. It&apos;s <span className='font-bold'>the</span> origin - the birthplace of Coffea arabica, home to over 10,000 heirloom varieties found nowhere else on Earth. The genetic diversity here is unmatched: bright, jasmine-scented Yirgacheffe; bold, berry-forward Sidamo; intensely aromatic Guji; wine-like, legendary Harar.
      </p>

      <p className='my-4'>
        For roasters, this means one thing: <span className='font-bold'>options</span>. Whether your customers love delicate pour-over florals or need a fruit-bomb natural for espresso, Ethiopian coffee delivers.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        What We Offer Importers Worldwide
      </h3>
      <p className='my-4'>
        We&apos;ve built our export operation specifically to serve importers&apos; needs:
      </p>

      <ul className='font-inconsolata my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Professional Export Service:</span> Complete documentation, phytosanitary certificates, ICO certificates, and quality reports for smooth customs clearance.</li>
        <li><span className='font-bold'>Full Traceability:</span> Every lot comes with complete documentation: region, cooperative, washing station, processing method, and cup score.</li>
        <li><span className='font-bold'>Sample Programs:</span> Taste before you commit. We offer curated sample sets from Ethiopia&apos;s premier growing regions.</li>
        <li><span className='font-bold'>Flexible Shipping:</span> FOB Djibouti or Addis Ababa dry port - we work with your preferred freight forwarder or can recommend trusted logistics partners.</li>
        <li><span className='font-bold'>Quality Verified:</span> Every lot is cupped by our team before export, so the coffee that arrives matches the profile you ordered.</li>
        <li><span className='font-bold'>Clear Communication:</span> With one foot in Ethiopia and one in the international market, we provide the responsive communication importers expect.</li>
      </ul>

      <div className='my-6'>
        <Link href='/ordering-info' className='inline-flex items-center gap-2 bg-amber-100 hover:bg-amber-200 text-dark px-5 py-3 rounded-lg font-bold transition'>
          See Our Full Ordering Process & Logistics
          <span aria-hidden='true'>→</span>
        </Link>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Available Origins for 2026
      </h3>
      <p className='my-4'>
        We source from Ethiopia&apos;s most celebrated coffee-growing regions. Here&apos;s what&apos;s available for 2026 allocation:
      </p>

      <div className='grid md:grid-cols-2 gap-5 my-6'>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-1'>Yirgacheffe</h4>
          <p className='font-inconsolata text-sm text-gray-600 mb-2'>Washed | G2 | 84+ Cup Score</p>
          <p className='text-sm'>The world&apos;s most iconic Ethiopian origin. Jasmine aromatics, bright citrus acidity, and a delicate tea-like body that defines specialty coffee.</p>
        </div>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-1'>Sidamo</h4>
          <p className='font-inconsolata text-sm text-gray-600 mb-2'>Natural | G1 | 86+ Cup Score</p>
          <p className='text-sm'>Berry-forward and crowd-pleasing. Blueberry, strawberry, wine-like acidity, and rich chocolate undertones. Perfect for espresso or single-origin.</p>
        </div>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-1'>Guji</h4>
          <p className='font-inconsolata text-sm text-gray-600 mb-2'>Natural | G1 | 87+ Cup Score</p>
          <p className='text-sm'>Ethiopia&apos;s rising star. Stone fruit, floral complexity, and syrupy sweetness. Consistently produces some of the country&apos;s highest-scoring lots.</p>
        </div>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-1'>Harar</h4>
          <p className='font-inconsolata text-sm text-gray-600 mb-2'>Natural | G1 | 85+ Cup Score</p>
          <p className='text-sm'>Legendary and unmistakable. Dried fruit, wine notes, and the distinctive &quot;mocha&quot; character that made Ethiopian coffee famous centuries ago.</p>
        </div>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-1'>Limu</h4>
          <p className='font-inconsolata text-sm text-gray-600 mb-2'>Washed | G2 | 84+ Cup Score</p>
          <p className='text-sm'>Balanced and approachable. Bright citrus, wine-like undertones, and sweet spice. A great entry point for Ethiopian specialty.</p>
        </div>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-lg mb-1'>Lekempti (Wollega)</h4>
          <p className='font-inconsolata text-sm text-gray-600 mb-2'>Washed | G2 | 84+ Cup Score</p>
          <p className='text-sm'>Western Ethiopia&apos;s hidden gem. Tropical fruit, mango, cocoa depth, and smooth body. A unique alternative to classic southern origins.</p>
        </div>
      </div>

      <div className='my-6'>
        <Link href='/offerings' className='inline-flex items-center gap-2 bg-amber-100 hover:bg-amber-200 text-dark px-5 py-3 rounded-lg font-bold transition'>
          View All Offerings With Full Specifications
          <span aria-hidden='true'>→</span>
        </Link>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Our Commitment to Farmers
      </h3>
      <p className='my-4'>
        When you source from Ethio Coffee, you&apos;re not just getting great coffee. You&apos;re supporting a supply chain built on respect and transparency.
      </p>

      <p className='my-4'>
        We pay speciality prices to our farming partners, maintain long-term relationships that provide stability, and ensure that the communities growing this exceptional coffee share in the value it creates. It&apos;s the approach our father built over three decades, and it&apos;s how we continue to operate today.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Ready to Source Ethiopian Coffee?</h4>
        <p className='my-2'>
          Whether you&apos;re an established importer or sourcing Ethiopian coffee for the first time, we&apos;d love to work with you.
        </p>
        <p className='my-2'>
          Request samples, ask questions, or reserve your 2026 allocation.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/contact-us' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>
            Contact Us
          </Link>
          <Link href='/offerings' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            View Offerings
          </Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            How to Order
          </Link>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About Ethio Coffee:</span> Ethio Coffee Export PLC is an Ethiopian coffee exporter connecting speciality, traceable origin coffee with importers worldwide.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/about' className='underline'>Our Story</Link> · <Link href='/offerings' className='underline'>Offerings</Link> · <Link href='/ordering-info' className='underline'>How To Buy</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

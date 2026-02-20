import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function BestEthiopianCoffeeExporterForImporters({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Direct-from-origin green coffee for importers, trading companies, and specialty coffee businesses worldwide
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Speciality Ethiopian green coffee from Yirgacheffe, Sidamo, Guji, and beyond - sourced direct and shipped worldwide.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian coffee exporter - green coffee beans for roasters'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <p className='my-4'>
        Finding a reliable <span className='font-bold'>Ethiopian coffee exporter</span> or <span className='font-bold'>Ethiopian coffee supplier</span> can be challenging.
        Quality varies, communication breaks down, and traceability often ends at the export dock.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Ethio Coffee</span> is different. We&apos;re not a broker - we&apos;re an Ethiopian coffee export company founded by two brothers, with
        direct operations in Ethiopia, built to serve importers who demand quality, transparency, and consistency.
      </p>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'>
          <span className='font-bold'>Why importers choose Ethio Coffee:</span> Direct relationships with farmers,
          full lot traceability, competitive FOB pricing, professional documentation, and a team that bridges Ethiopian origin with international markets.
        </p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Who We Are: Ethiopian Coffee Exporters with a Family Legacy
      </h3>
      <p className='my-4'>
        Our father spent over 30 years working in Ethiopia&apos;s coffee regions - not just trading, but learning how coffee is
        grown, processed, and cared for at every step. He built relationships with farming communities, invested in his own
        estate, and operated locally within Ethiopia for decades.
      </p>
      <p className='my-4'>
        In 2022, we established <span className='font-bold'>Ethio Coffee Export PLC</span>,
        registered with the Ethiopian Commodity Exchange, to bring our relationship-driven approach to importers worldwide.
        Today, we source from our own estates and a network of trusted partner growers across Ethiopia&apos;s celebrated coffee regions.
      </p>
      <p className='my-4'>
        With one brother on the ground in Ethiopia and one Ethiopian-Canadian handling international relationships, we bridge
        the gap that often frustrates importers working with origin suppliers.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        What We Export: Speciality Ethiopian Green Coffee
      </h3>
      <p className='my-4'>
        As one of the leading <span className='font-bold'>coffee suppliers in Ethiopia</span>, we export specialty and
        commercial grade green coffee from the country&apos;s most sought-after origins:
      </p>
      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'><span className='font-bold'>Yirgacheffe</span> - Floral, citrus, tea-like. The benchmark for washed Ethiopian coffee.</li>
          <li className='my-2'><span className='font-bold'>Sidamo (Sidama)</span> - Berry, wine, balanced. Versatile across roast profiles.</li>
          <li className='my-2'><span className='font-bold'>Guji</span> - Complex, fruity, heavy body. Gaining rapid recognition in specialty markets.</li>
          <li className='my-2'><span className='font-bold'>Limu</span> - Winey, spicy, balanced. Excellent for espresso blends.</li>
          <li className='my-2'><span className='font-bold'>Harrar</span> - Wild, fruity, distinctive. Sun-dried naturals with bold character.</li>
          <li className='my-2'><span className='font-bold'>Jimma</span> - Earthy, full-bodied. Strong commercial grade performer.</li>
        </ul>
      </div>
      <p className='my-4'>
        We offer both <span className='font-bold'>washed and natural processed</span> coffees, with grades ranging from
        Grade 1 specialty to Grade 4 commercial - whatever your roastery or blend program requires.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Why Work with Ethio Coffee Export?
      </h3>
      <p className='my-4'>
        Unlike generic <span className='font-bold'>Ethiopian coffee distributors</span> or commodity traders, we offer:
      </p>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'><span className='font-bold'>Full Traceability:</span> Know exactly which region, washing station, and (where possible) cooperative your coffee comes from.</li>
        <li className='my-2'><span className='font-bold'>Direct Sourcing:</span> We work directly with farmers and our own estates - no middlemen inflating prices.</li>
        <li className='my-2'><span className='font-bold'>Competitive Pricing:</span> Because we control the supply chain from farm to export, we offer fair pricing without sacrificing farmer compensation.</li>
        <li className='my-2'><span className='font-bold'>Sample Before You Buy:</span> Request samples from current lots before committing to a container.</li>
        <li className='my-2'><span className='font-bold'>Flexible Shipping:</span> FOB Djibouti or Addis dry port - we work with your freight forwarder or can recommend trusted logistics partners.</li>
        <li className='my-2'><span className='font-bold'>Professional Documentation:</span> Complete export docs, phytosanitary certificates, ICO certificates, and quality reports for smooth customs clearance.</li>
      </ul>

      <h3 className='text-2xl font-extrabold mt-8'>
        Serving Importers Worldwide
      </h3>
      <p className='my-4'>
        Whether you&apos;re an importer in North America, Europe, the Middle East, or Asia looking for
        <span className='font-bold'> a trusted Ethiopian coffee exporter</span>, we&apos;re built to serve you:
      </p>
      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'><span className='font-bold'>North America:</span> Direct container shipments with complete documentation. Clear communication from our Ethiopian-Canadian co-founder.</li>
          <li className='my-2'><span className='font-bold'>Europe:</span> Direct container shipments via Djibouti. Full export documentation for EU customs requirements.</li>
          <li className='my-2'><span className='font-bold'>Middle East &amp; GCC:</span> Established shipping routes. Export documentation for regional customs requirements.</li>
          <li className='my-2'><span className='font-bold'>Asia &amp; Rest of World:</span> Growing demand met with reliable supply. Contact us for current availability.</li>
        </ul>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        How to Order from Our Ethiopian Coffee Company
      </h3>
      <p className='my-4'>
        Getting started is simple:
      </p>
      <ol className='font-inconsolata my-4 list-decimal ml-5'>
        <li className='my-2'><span className='font-bold'>Request Samples:</span> Tell us what profiles, grades, or regions you&apos;re interested in. We&apos;ll send cupping samples from current lots.</li>
        <li className='my-2'><span className='font-bold'>Review Offer Sheets:</span> Get pricing (FOB, FCA, or delivered), lot details, and availability.</li>
        <li className='my-2'><span className='font-bold'>Place Your Order:</span> Secure your allocation and choose your shipping terms.</li>
        <li className='my-2'><span className='font-bold'>Receive &amp; Roast:</span> Your green coffee arrives with full documentation and traceability.</li>
      </ol>

      <h3 className='text-2xl font-extrabold mt-8'>
        Current Availability
      </h3>
      <p className='my-4'>
        Our export calendar follows Ethiopia&apos;s harvest seasons. Primary harvest runs October through January,
        with spot lots available throughout the year from our warehoused inventory.
      </p>
      <p className='my-4'>
        <Link href='/offerings' className='underline font-bold'>View our current offerings</Link> to see what&apos;s available now,
        or contact us to discuss forward contracts for upcoming harvests.
      </p>

      <p className='my-4'>
        For a broader look at what separates the best coffee exporters worldwide from the rest, read our guide on <Link href='/insights/top-premium-coffee-exporters-global-guide' className='underline font-bold'>top premium coffee exporters globally</Link> and the key standards that define export excellence.
      </p>

      <p className='my-4'>
        If you are comparing multiple Ethiopian suppliers, our <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='underline font-bold'>guide on how to choose an Ethiopian coffee export company</Link> provides a 10-point evaluation scorecard, red flags to watch for, and a step-by-step due diligence process.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Ready to Source Specialty Ethiopian Green Coffee?</h4>
        <p className='my-2'>
          At <span className='font-bold'>Ethio Coffee Export PLC</span>, whether you&apos;re searching for a reliable Ethiopian coffee exporter or a trusted partner for your green coffee program, we&apos;re here to help with samples, quotes, and full export documentation.
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
            <h4 className='font-semibold mb-2 text-sm'>Sourcing & Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>• <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export</Link></li>
              <li>• <Link href='/insights/top-premium-coffee-exporters-global-guide' className='text-amber-700 hover:underline'>Top Premium Coffee Exporters Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality & Origins</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Coffee Origins</Link></li>
              <li>• <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Minimum Order Quantities</Link></li>
              <li>• <Link href='/insights/direct-trade-ethiopian-farmers' className='text-amber-700 hover:underline'>Direct Trade with Ethiopian Farmers</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> This article profiles Ethio Coffee Export PLC as an Ethiopian coffee exporter for importers worldwide, covering our sourcing approach, quality standards, export capabilities, and how to start ordering.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

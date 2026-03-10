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

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-2'>Key Takeaway</p>
        <p>
          Ethio Coffee Import and Export PLC is an origin-connected Ethiopian coffee exporter with 30+ years of sourcing heritage. We ship specialty and commercial grade green coffee from Yirgacheffe, Sidamo, Guji, Limu, Harrar, and Jimma, with full lot traceability, competitive FOB pricing, and professional export documentation for importers worldwide.
        </p>
      </div>

      <p className='my-4'>
        Finding a reliable <span className='font-bold'>Ethiopian coffee exporter</span> or <span className='font-bold'>Ethiopian coffee supplier</span> can be challenging.
        Quality varies, communication breaks down, and traceability often ends at the export dock.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Ethio Coffee</span> is different. We&apos;re not a broker - we&apos;re an Ethiopian coffee export company founded by two brothers, with
        direct operations in Ethiopia, built to serve importers who demand quality, transparency, and consistency.
      </p>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium'>
          <span className='font-bold'>Why importers choose Ethio Coffee:</span> Direct relationships with farmers,
          full lot traceability, competitive FOB pricing, professional documentation, and a team that bridges Ethiopian origin with international markets.
        </p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Who We Are: Ethiopian Coffee Exporters with a Family Legacy
      </h3>
      <p className='my-4'>
        Our family has spent over 30 years working in Ethiopia&apos;s coffee regions - not just trading, but learning how coffee is
        grown, processed, and cared for at every step. That heritage built deep relationships with farming communities and
        cooperatives across the country.
      </p>
      <p className='my-4'>
        In 2022, we established <span className='font-bold'>Ethio Coffee Import and Export PLC</span>,
        registered with the <a href='https://www.ecx.com.et' target='_blank' rel='noopener noreferrer' className='underline font-bold'>Ethiopian Commodity Exchange (ECX)</a>, to bring our relationship-driven approach to importers worldwide.
        Today, we source from a network of trusted cooperatives, washing stations, and farming communities across Ethiopia&apos;s celebrated coffee regions.
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
        <li className='my-2'><span className='font-bold'>Direct Sourcing:</span> We work directly with cooperatives, washing stations, and farming communities - no middlemen inflating prices.</li>
        <li className='my-2'><span className='font-bold'>Competitive Pricing:</span> Because we control the supply chain from farm to export, we offer fair pricing without sacrificing farmer compensation.</li>
        <li className='my-2'><span className='font-bold'>Sample Before You Buy:</span> Request samples from current lots before committing to a container.</li>
        <li className='my-2'><span className='font-bold'>Flexible Shipping:</span> FOB Djibouti or Addis dry port - we work with your freight forwarder or can recommend trusted logistics partners.</li>
        <li className='my-2'><span className='font-bold'>Professional Documentation:</span> Complete export docs, phytosanitary certificates, <a href='https://www.ico.org' target='_blank' rel='noopener noreferrer' className='underline'>ICO</a> certificates, and quality reports for smooth customs clearance.</li>
      </ul>

      <h3 className='text-2xl font-extrabold mt-8'>
        Serving Importers Worldwide
      </h3>
      <p className='my-4'>
        Importers in North America, Europe, the Middle East, and Asia rely on us as
        <span className='font-bold'> a trusted Ethiopian coffee exporter</span>. Here is how we support each market:
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

      <h3 className='text-2xl font-extrabold mt-8'>
        Frequently Asked Questions
      </h3>

      <div className='my-6'>
        <h4 className='font-bold text-lg mb-2'>What makes a good Ethiopian coffee exporter?</h4>
        <p className='my-2'>
          A reliable Ethiopian coffee exporter offers full lot traceability, direct sourcing from cooperatives and washing stations, competitive FOB pricing, and complete export documentation including phytosanitary and ICO certificates. Look for exporters registered with the Ethiopian Commodity Exchange who maintain transparent communication throughout the shipping process.
        </p>

        <h4 className='font-bold text-lg mt-6 mb-2'>What is the minimum order quantity for Ethiopian green coffee exports?</h4>
        <p className='my-2'>
          Standard export orders start at one full container load (FCL), typically 19.2 metric tons in a 20-foot container. Some exporters, including Ethio Coffee, offer flexibility for smaller trial lots depending on availability. See our <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='underline'>MOQ guide</Link> for full details.
        </p>

        <h4 className='font-bold text-lg mt-6 mb-2'>How do I request green coffee samples from Ethiopia?</h4>
        <p className='my-2'>
          Contact us with the origins, grades, and processing methods you are interested in. We ship 200-300g cupping samples from current warehouse lots, typically within 5-7 business days via DHL. Samples let you evaluate quality before committing to a container order.
        </p>

        <h4 className='font-bold text-lg mt-6 mb-2'>What documentation comes with Ethiopian coffee exports?</h4>
        <p className='my-2'>
          Every shipment includes a commercial invoice, packing list, bill of lading, phytosanitary certificate, ICO certificate of origin, quality grade certificate, and weight note. We prepare all documents in advance so customs clearance at your destination port runs smoothly.
        </p>

        <h4 className='font-bold text-lg mt-6 mb-2'>Which Ethiopian coffee regions are best for specialty importers?</h4>
        <p className='my-2'>
          Yirgacheffe, Guji, and Sidamo consistently produce the highest-scoring specialty lots. Yirgacheffe is known for floral and citrus notes, Guji for complex fruit and heavy body, and Sidamo for balanced berry and wine profiles. The best region depends on your roast profile and market preferences.
        </p>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Premium Ethiopian Coffee Direct from Origin</h4>
        <p className='my-2'>
          At <span className='font-bold'>Ethio Coffee Import and Export PLC</span>, for those searching for a reliable Ethiopian coffee exporter or a trusted partner for their green coffee program, we&apos;re here to help with samples, quotes, and full export documentation.
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
              <li>• <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process: Buyer&apos;s Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality & Origins</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Coffee Origins</Link></li>
              <li>• <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee Processing</Link></li>
              <li>• <Link href='/insights/direct-trade-ethiopian-farmers' className='text-amber-700 hover:underline'>Direct Trade with Ethiopian Farmers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Pricing & Logistics</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing Guide</Link></li>
              <li>• <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Minimum Order Quantities for Ethiopian Coffee</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts and Payment Terms</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Harvest Calendar</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC. This article profiles our company as an Ethiopian coffee exporter for importers worldwide, covering sourcing approach, quality standards, export capabilities, and how to start ordering. For current pricing, availability, and lot details, <Link href='/contact-us' className='underline'>contact our team directly</Link>.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

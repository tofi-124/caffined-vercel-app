import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function HowToSourceGreenCoffeeFromEthiopia({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        A step-by-step playbook for roasters and importers buying Ethiopian green coffee
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Sourcing Ethiopian green coffee requires understanding grades, logistics, and building the right supplier relationships.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='How to source green coffee from Ethiopia - buyer guide'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-2'>Key Takeaway</p>
        <p>
          Sourcing Ethiopian green coffee involves understanding export grades (G1–G4), choosing between direct trade and traditional channels, managing logistics and documentation, and building reliable supplier relationships. This step-by-step playbook covers the full process for roasters and importers.
        </p>
      </div>

      <p className='my-4'>
        If you&apos;re a coffee roaster, café owner, or wholesale buyer looking to source green coffee from Ethiopia, you&apos;re tapping into the birthplace of Arabica coffee and some of the most sought-after specialty beans in the world.
      </p>

      <p className='my-4'>
        But sourcing Ethiopian green coffee can feel complex: understanding export regulations, quality grades, finding reliable suppliers, and managing international logistics.
        This guide breaks it down step by step.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Why Source Green Coffee from Ethiopia?
      </h3>
      <p className='my-4'>
        Ethiopia produces some of the most unique and flavorful coffees on the planet. Here&apos;s why specialty roasters prioritize Ethiopian origins:
      </p>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'><span className='font-bold'>Unmatched Genetic Diversity:</span> Ethiopia is home to thousands of heirloom Arabica varieties found nowhere else, producing flavor profiles impossible to replicate.</li>
        <li className='my-2'><span className='font-bold'>Distinctive Flavor Profiles:</span> From the jasmine-floral notes of Yirgacheffe to the berry-forward Sidamo and the winey Harar, Ethiopian coffees offer outstanding variety.</li>
        <li className='my-2'><span className='font-bold'>High-Altitude Growing:</span> Most Ethiopian coffee grows between 1,500–2,300 meters, where cherries ripen slowly and develop complex sugars and acids.</li>
        <li className='my-2'><span className='font-bold'>Customer Demand:</span> Specialty coffee consumers actively seek Ethiopian origins for their unique cup experience.</li>
      </ul>

      <h3 className='text-2xl font-extrabold mt-8'>
        Understanding Ethiopian Coffee Grades
      </h3>
      <p className='my-4'>
        Ethiopian coffee is graded on a scale from Grade 1 to Grade 9, based on defect count and cup quality. Here&apos;s what each export-grade level offers:
      </p>
      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <ul className='font-inconsolata list-none'>
          <li className='my-3'><span className='font-bold'>Grade 1 (G1):</span> Specialty grade with 0-3 defects per 300g. Best for single-origin offerings and speciality roasts.</li>
          <li className='my-3'><span className='font-bold'>Grade 2 (G2):</span> 4-12 defects per 300g. Good quality for blends and slightly lower-priced specialty offerings.</li>
          <li className='my-3'><span className='font-bold'>Grade 3 (G3):</span> 13-25 defects per 300g. Commercial grade suitable for blends, institutional buyers, and price-sensitive markets.</li>
          <li className='my-3'><span className='font-bold'>Grade 4 (G4):</span> 26-45 defects per 300g. Commercial grade ideal for large-volume buyers, instant coffee production, and budget blends.</li>
        </ul>
      </div>
      <p className='my-4'>
        At Ethio Coffee, we export all grades (G1-G4) to meet diverse buyer needs from specialty roasters seeking speciality G1 single-origins to commercial buyers requiring volume G3/G4 for blends.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Direct Trade vs. Traditional Sourcing
      </h3>
      <p className='my-4'>
        There are two main ways to buy Ethiopian green coffee:
      </p>

      <h4 className='text-xl font-bold mt-6'>Option 1: Direct Trade with Ethiopian Exporters</h4>
      <p className='my-4'>
        Working directly with an Ethiopian coffee exporter gives you better traceability, relationship-based pricing, and access to specific lots. This approach is ideal for roasters who want to:
      </p>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>Tell a compelling origin story to customers, drawing on traditions like the <Link href='/insights/ethiopian-coffee-ceremony' className='underline font-bold'>Ethiopian coffee ceremony</Link> that connect consumers to the culture behind the beans</li>
        <li className='my-2'>Lock in consistent supply from specific washing stations</li>
        <li className='my-2'>Access micro-lots and experimental processing</li>
        <li className='my-2'>Build long-term partnerships with producers</li>
      </ul>

      <p className='my-4'>
        For a practical, step-by-step buyer&apos;s playbook on sourcing from Ethiopia, see <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='underline font-bold'>How to Source Green Coffee from Ethiopia</Link>. If you want a vetted list of exporters, importers, and suppliers we work with, check our supplier guide <Link href='/insights/best-ethiopian-coffee-exporter-importer-supplier' className='underline font-bold'>Best Ethiopian Coffee Exporter, Importer &amp; Supplier</Link>.
      </p>

      <h4 className='text-xl font-bold mt-6'>Option 2: Buying Through Importers</h4>
      <p className='my-4'>
        If you need smaller quantities or prefer domestic warehousing, working with an importer who has already brought Ethiopian coffee into your country can simplify logistics.
        Look for importers with strong origin relationships and lot-level traceability.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Key Questions to Ask Your Ethiopian Green Coffee Supplier
      </h3>
      <p className='my-4'>
        Before committing to a supplier, make sure you can answer these questions:
      </p>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'><span className='font-bold'>Traceability:</span> Can they identify the region, <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='underline font-bold'>washing station</Link>, and processing method?</li>
        <li className='my-2'><span className='font-bold'>Samples:</span> Will they provide pre-shipment samples for cupping evaluation?</li>
        <li className='my-2'><span className='font-bold'>Documentation:</span> Can they provide phytosanitary certificates, ICO certificates, and quality reports?</li>
        <li className='my-2'><span className='font-bold'>Minimum Order:</span> What&apos;s their MOQ? Can they accommodate smaller trial orders?</li>
        <li className='my-2'><span className='font-bold'>Shipping:</span> Do they handle export logistics, or will you need a freight forwarder?</li>
        <li className='my-2'><span className='font-bold'>Licensing:</span> Are they ECTA-licensed and ECX-registered? See our <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='underline'>complete exporter evaluation guide</Link> for a 10-point scorecard.</li>
        <li className='my-2'><span className='font-bold'>Communication:</span> Are they responsive and transparent about lead times and crop conditions?</li>
      </ul>

      <h3 className='text-2xl font-extrabold mt-8'>
        Shipping and Logistics: What to Expect
      </h3>
      <p className='my-4'>
        Ethiopian green coffee is typically shipped in 60kg jute bags lined with GrainPro or similar moisture-barrier materials. Here&apos;s what the logistics look like:
      </p>
      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <ul className='font-inconsolata list-none'>
          <li className='my-3'><span className='font-bold'>Container Size:</span> A standard 20-foot container holds approximately 275-300 bags (60kg each).</li>
          <li className='my-3'><span className='font-bold'>Lead Time:</span> From order confirmation to arrival at port, expect 6-10 weeks depending on destination and shipping route.</li>
          <li className='my-3'><span className='font-bold'>Payment Terms:</span> Most exporters require a deposit (often 30-50%) with balance due before or upon shipment.</li>
          <li className='my-3'><span className='font-bold'>Insurance:</span> Marine cargo insurance is highly recommended for international shipments.</li>
        </ul>
      </div>

      <p className='my-4'>
        For a detailed walkthrough of every stage from contract signing through customs clearance, see our <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='underline font-bold'>Ethiopian coffee export process buyer&apos;s guide</Link>.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Best Ethiopian Coffee Regions for Specialty Roasters
      </h3>
      <p className='my-4'>
        Different regions suit different roasting and menu needs:
      </p>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'><span className='font-bold'>Yirgacheffe:</span> Floral, tea-like, citrus. Best for light roasts and pour-over menus.</li>
        <li className='my-2'><span className='font-bold'>Sidamo:</span> Berry, wine, cocoa finish. Versatile for filter and espresso.</li>
        <li className='my-2'><span className='font-bold'>Guji:</span> Stone fruit, jasmine, syrupy body. Excellent for single-origin espresso.</li>
        <li className='my-2'><span className='font-bold'>Harar:</span> Bold, winey, dried fruit. Great for dark roast lovers and unique blends.</li>
        <li className='my-2'><span className='font-bold'>Limu:</span> Balanced, citrus, caramel. Reliable everyday offering.</li>
      </ul>

      <h3 className='text-2xl font-extrabold mt-8'>
        How Ethio Coffee Simplifies Sourcing for Importers
      </h3>
      <p className='my-4'>
        At Ethio Coffee Import and Export PLC, we make sourcing Ethiopian green coffee straightforward for importers worldwide:
      </p>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'><span className='font-bold'>Direct Relationships:</span> We source from trusted cooperatives, washing stations, and farming communities across Ethiopia&apos;s top growing regions.</li>
        <li className='my-2'><span className='font-bold'>Complete Traceability:</span> Every lot comes with origin details, processing information, and quality documentation.</li>
        <li className='my-2'><span className='font-bold'>Sample Programs:</span> Request samples before committing to a purchase.</li>
        <li className='my-2'><span className='font-bold'>Professional Export Service:</span> Complete documentation, flexible shipping terms (FOB Djibouti or Addis dry port), and coordination with your freight forwarder.</li>
        <li className='my-2'><span className='font-bold'>Responsive Support:</span> With one brother in Ethiopia and one Ethiopian-Canadian, we bridge the communication gap and provide the responsive service importers expect.</li>
        <li className='my-2'><span className='font-bold'>All Grades Available:</span> We export G1, G2, G3, and G4 specialty to commercial grades for any buyer need.</li>
      </ul>

      <p className='my-4'>
        Want to understand what sets the best exporters apart globally? Our in-depth guide on <Link href='/insights/top-premium-coffee-exporters-global-guide' className='underline font-bold'>top coffee exporters in the world</Link> covers the quality benchmarks, certifications, and practices that define premium coffee export.
      </p>

      {/* FAQ SECTION */}
      <section className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions About Sourcing Green Coffee from Ethiopia</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What are the Ethiopian coffee grades for export?</h4>
            <p className="text-sm text-gray-600">Ethiopian coffee is graded from Grade 1 (specialty, 0-3 defects per 300g) to Grade 4 (commercial, 26-45 defects per 300g). G1 and G2 are used for specialty single-origin offerings, while G3 and G4 are suitable for blends, institutional buyers, and price-sensitive markets.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What is the minimum order quantity for Ethiopian green coffee?</h4>
            <p className="text-sm text-gray-600">Most Ethiopian exporters work with full container orders (approximately 275-300 bags of 60kg each in a 20-foot container). Some exporters, including Ethio Coffee, can accommodate smaller trial orders to help new buyers evaluate quality before committing to larger volumes.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How long does shipping take from Ethiopia?</h4>
            <p className="text-sm text-gray-600">From order confirmation to arrival at your destination port, expect 6-10 weeks depending on shipping route and destination. Most Ethiopian coffee ships FOB from Djibouti port or the Addis Ababa dry port.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Should I buy direct from an exporter or through an importer?</h4>
            <p className="text-sm text-gray-600">Both have advantages. Working directly with an Ethiopian exporter gives you better traceability, relationship-based pricing, and access to specific lots. Working through an importer simplifies logistics if you need smaller quantities or prefer domestic warehousing. Many roasters start with an importer and transition to direct sourcing as volumes grow.</p>
          </div>
        </div>
      </section>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Ready to Source Ethiopian Green Coffee?</h4>
        <p className='my-2'>
          At <span className='font-bold'>Ethio Coffee Import and Export PLC</span>, we export G1 through G4 from Ethiopia&apos;s top growing regions with full traceability, professional documentation, and responsive support. Get in touch to discuss your sourcing needs.
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
            <h4 className='font-semibold mb-2 text-sm'>Import Guides</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/how-to-import-ethiopian-coffee-to-usa' className='text-amber-700 hover:underline'>How to Import Ethiopian Coffee to USA</Link></li>
              <li>• <Link href='/insights/importing-ethiopian-coffee-to-canada-guide' className='text-amber-700 hover:underline'>Importing to Canada</Link></li>
              <li>• <Link href='/insights/importing-ethiopian-coffee-to-uk' className='text-amber-700 hover:underline'>Importing to UK</Link></li>
              <li>• <Link href='/insights/importing-ethiopian-coffee-to-germany' className='text-amber-700 hover:underline'>Importing to Germany</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Trade & Quality</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export</Link></li>
              <li>• <Link href='/insights/direct-trade-ethiopian-farmers' className='text-amber-700 hover:underline'>Direct Trade with Ethiopian Farmers</Link></li>
              <li>• <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Minimum Order Quantities</Link></li>
              <li>&bull; <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline'>Coffee Storage &amp; Freight Logistics</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline'>Green Coffee Shelf Life &amp; Storage Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> A step-by-step guide for roasters and importers on how to source Ethiopian green coffee, covering grades, logistics, supplier evaluation, direct trade vs. importers, and key questions to ask before purchasing.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

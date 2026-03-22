import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { ArrowRight } from '@/app/components/Arrow'

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
        Origin-connected green coffee sourcing for importers, roasters, and trading companies worldwide
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Ethio Coffee Import and Export PLC sources Ethiopian green coffee from cooperatives, washing stations, and our own drying station in Guji Hambella.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian coffee exporter - green coffee sourcing from origin for importers'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-2'>Key Takeaway</p>
        <p>
          Ethio Coffee Import and Export PLC is an origin-connected <span className='font-bold'>Ethiopian coffee exporter</span> with a drying station in Guji Hambella and heritage sourcing relationships across all major Ethiopian coffee regions. Importers get full lot traceability, pre-shipment sample approval, professional export documentation, and responsive communication from a team that operates on both sides of the supply chain.
        </p>
      </div>

      {/* INTRO: PRIMARY KEYWORD IN FIRST 100 WORDS */}
      <p className='my-4'>
        Choosing the right <span className='font-bold'>Ethiopian coffee exporter</span> determines whether your green coffee program runs smoothly or stalls on communication gaps, inconsistent quality, and missing documentation. For importers who need traceable specialty coffee direct from Ethiopia, the exporter is the single most important link in the chain.
      </p>

      <p className='my-4'>
        Ethio Coffee Import and Export PLC was built to be that link. We are a private Ethiopian coffee export company with operations in Addis Ababa, a drying station in Guji Hambella, and sourcing relationships across Yirgacheffe, Sidamo, Guji, Harar, Limu, Jimma, and Wellega. This article explains exactly how we source, process, and ship Ethiopian green coffee, and what working with us looks like from your first inquiry through delivery.
      </p>

      {/* H2: WHAT AN ORIGIN-CONNECTED ETHIOPIAN COFFEE EXPORTER DOES DIFFERENTLY */}
      <h2 className='text-3xl font-extrabold mt-10 mb-4'>
        What an Origin-Connected Ethiopian Coffee Exporter Does Differently
      </h2>

      <p className='my-4'>
        Ethiopian coffee reaches international markets through several types of intermediaries: commodity brokers, trading houses, cooperative unions, and private exporters. Each model has trade-offs in traceability, pricing transparency, and buyer service. An origin-connected exporter operates at the source with direct access to the coffee, the farmers, and the processing infrastructure. That proximity changes the relationship.
      </p>

      <p className='my-4'>
        At Ethio Coffee, &quot;origin-connected&quot; is specific. It means three things:
      </p>

      <ul className='font-inconsolata my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Heritage sourcing relationships:</span> Our family spent over 30 years working in Ethiopia&apos;s coffee regions, building trust with cooperatives, washing stations, and farming communities. Those relationships are the foundation of every lot we export. <Link href='/about' className='underline text-amber-700'>Read our full story</Link>.</li>
        <li><span className='font-bold'>Our own drying station in Guji Hambella:</span> We collect cherry directly from smallholder farmers in one of Ethiopia&apos;s highest-scoring specialty origins. We control processing from cherry intake through drying, which gives importers a level of traceability and quality oversight that most exporters cannot offer.</li>
        <li><span className='font-bold'>An experienced team on the ground:</span> Our export manager, with over 15 years in international coffee trade, leads sourcing and operations in Ethiopia. This experienced, origin-based team removes the communication gap that importers consistently cite as their top frustration with origin suppliers.</li>
      </ul>

      <p className='my-4'>
        For a detailed comparison of how private exporters and cooperative unions differ in structure, pricing, and compliance, see our guide on <Link href='/insights/private-vs-cooperative-ethiopian-coffee-exporters' className='underline font-bold text-amber-700'>private vs cooperative Ethiopian coffee exporters</Link>.
      </p>

      {/* H2: ETHIOPIAN COFFEE ORIGINS WE EXPORT */}
      <h2 className='text-3xl font-extrabold mt-10 mb-4'>
        Ethiopian Coffee Origins We Export
      </h2>

      <p className='my-4'>
        Ethiopia produces coffee across dozens of distinct growing zones. As an Ethiopian coffee exporter sourcing from all major regions, we offer importers access to a wide range of cup profiles, processing methods, and grade levels. Here is what we source for the 2026/27 season:
      </p>

      <div className='grid md:grid-cols-2 gap-5 my-6'>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h3 className='font-bold text-lg mb-1'>Yirgacheffe</h3>
          <p className='font-inconsolata text-sm text-gray-600 mb-2'>Washed &amp; Natural | G1-G2 | 84-90+ Cup Score</p>
          <p className='text-sm'>The world&apos;s most recognized Ethiopian origin. Washed lots deliver jasmine, bergamot, and citrus with a tea-like body. Naturals add stone fruit and tropical sweetness. <Link href='/ethiopian-coffee-yirgacheffe' className='underline text-amber-700'>Yirgacheffe origin details</Link>.</p>
        </div>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h3 className='font-bold text-lg mb-1'>Sidamo (Sidama)</h3>
          <p className='font-inconsolata text-sm text-gray-600 mb-2'>Washed &amp; Natural | G1-G2 | 84-88+ Cup Score</p>
          <p className='text-sm'>Berry-forward with wine-like acidity, blueberry, and chocolate undertones. Versatile across roast profiles and a strong performer in espresso blends. <Link href='/ethiopian-coffee-sidamo' className='underline text-amber-700'>Sidamo origin details</Link>.</p>
        </div>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h3 className='font-bold text-lg mb-1'>Guji</h3>
          <p className='font-inconsolata text-sm text-gray-600 mb-2'>Natural &amp; Washed | G1 | 86-92+ Cup Score</p>
          <p className='text-sm'>Complex stone fruit, floral layering, and syrupy sweetness. Guji is where our own drying station operates, giving us hands-on quality control from cherry to parchment. <Link href='/ethiopian-coffee-guji' className='underline text-amber-700'>Guji origin details</Link>.</p>
        </div>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h3 className='font-bold text-lg mb-1'>Harar</h3>
          <p className='font-inconsolata text-sm text-gray-600 mb-2'>Natural | G1-G4 | 82-87+ Cup Score</p>
          <p className='text-sm'>Ethiopia&apos;s oldest coffee-growing region. Dried fruit, wine notes, and the distinctive &quot;mocha&quot; character that launched Ethiopian coffee into global trade centuries ago. <Link href='/ethiopian-coffee-harar' className='underline text-amber-700'>Harar origin details</Link>.</p>
        </div>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h3 className='font-bold text-lg mb-1'>Limu</h3>
          <p className='font-inconsolata text-sm text-gray-600 mb-2'>Washed | G2 | 82-86+ Cup Score</p>
          <p className='text-sm'>Balanced and approachable. Bright citrus, winey undertones, and sweet spice. An excellent entry point for importers building an Ethiopian specialty program. <Link href='/ethiopian-coffee-limu' className='underline text-amber-700'>Limu origin details</Link>.</p>
        </div>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h3 className='font-bold text-lg mb-1'>Jimma &amp; Wellega</h3>
          <p className='font-inconsolata text-sm text-gray-600 mb-2'>Washed &amp; Natural | G2-G4 | 80-85+ Cup Score</p>
          <p className='text-sm'>Western Ethiopian origins with earthy depth, cocoa, tropical fruit, and smooth body. Strong commercial-grade performers and a source of value for blend programs. <Link href='/ethiopian-coffee-jimma' className='underline text-amber-700'>Jimma origin details</Link>.</p>
        </div>
      </div>

      <p className='my-4'>
        We export washed, natural, honey, and anaerobic processed lots. Grades range from Grade 1 specialty through Grade 4 commercial, depending on your program requirements. For a full comparison of processing methods and how they affect cup quality, see our guide on <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='underline font-bold text-amber-700'>washed vs natural Ethiopian coffee processing</Link>.
      </p>

      <div className='my-6'>
        <Link href='/offerings' className='inline-flex items-center gap-2 bg-amber-100 hover:bg-amber-200 text-dark px-5 py-3 rounded-lg font-bold transition'>
          View Current Offerings with Full Specifications
          <ArrowRight />
        </Link>
      </div>

      {/* H2: THE BUYER JOURNEY */}
      <h2 className='text-3xl font-extrabold mt-10 mb-4'>
        How to Work with an Ethiopian Coffee Exporter: The Buyer Journey
      </h2>

      <p className='my-4'>
        Most Ethiopian coffee exporter websites describe their origins and services. Few explain what happens after you make contact. Below is the step-by-step process for working with Ethio Coffee, from first inquiry to repeat orders. We publish this so you know exactly what to expect.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Step 1: Initial Inquiry and Origin Matching
      </h3>
      <p className='my-4'>
        Tell us what you need. That can be as specific as &quot;washed Yirgacheffe G1, 87+ cup score, 320 bags&quot; or as open as &quot;we want to add an Ethiopian single-origin to our lineup.&quot; Our team matches your requirements to available lots based on origin, processing method, grade, cup profile, and volume.
      </p>
      <p className='my-4'>
        First-time importers often benefit from starting with a conversation about their target market, roast style, and volume needs. We recommend origins and lots that fit, rather than pushing inventory. Response time for initial inquiries is typically within 24 hours on business days.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Step 2: Sample Evaluation
      </h3>
      <p className='my-4'>
        Every order starts with samples. We ship 200-300g green or roasted samples via DHL Express, usually arriving within 5-7 business days depending on destination. You cup the coffee in your own lab, on your own terms. If a sample does not meet your expectations, we offer alternative lots or adjust the match. No commitment until you approve.
      </p>
      <p className='my-4'>
        For details on how to evaluate Ethiopian coffee samples effectively, see our <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='underline font-bold text-amber-700'>cupping and evaluation guide</Link>.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Step 3: Contracting and Payment
      </h3>
      <p className='my-4'>
        Once you approve a sample, we issue a formal offer with pricing (FOB Djibouti or FCA Addis Ababa dry port), lot specifications, and shipping timeline. Payment is typically by irrevocable letter of credit (L/C) or cash against documents (CAD), depending on order size and relationship history. We also discuss forward contracts for buyers planning purchases across multiple harvest seasons.
      </p>
      <p className='my-4'>
        Our <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='underline font-bold text-amber-700'>contracts and payment terms guide</Link> covers all Incoterms, payment instruments, and quality clauses in detail. For FOB pricing structures and current differentials, see the <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='underline font-bold text-amber-700'>Ethiopian coffee pricing guide</Link>.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Step 4: Export Preparation and Shipping
      </h3>
      <p className='my-4'>
        After contract execution, we prepare the lot at our warehouse in Addis Ababa. This includes final grading, moisture verification, GrainPro liner packing in 60 kg jute bags, and container stuffing. Every container ships with a pre-shipment sample that matches the approved profile.
      </p>
      <p className='my-4'>
        We handle all export documentation: phytosanitary certificate, <a href='https://www.ico.org' target='_blank' rel='noopener noreferrer' className='underline text-amber-700'>ICO</a> certificate of origin, Coffee Liquoring Unit (CLU) quality certificate, commercial invoice, packing list, weight note, and bill of lading. Shipments move through the Port of Djibouti, with transit times varying by destination (typically 18-35 days to major ports in Europe, North America, Asia, and the Middle East).
      </p>
      <p className='my-4'>
        For a complete walkthrough of the export process from dry milling to vessel loading, see our <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='underline font-bold text-amber-700'>Ethiopian coffee export process guide</Link>.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Step 5: Arrival and Reorder Planning
      </h3>
      <p className='my-4'>
        We stay in communication through the shipping period and confirm vessel details, ETAs, and any transit updates. After arrival, we follow up on arrival quality and cup feedback. Importers who plan to reorder benefit from forward booking during the harvest window (October through January for most origins), which secures allocation before spot availability tightens.
      </p>
      <p className='my-4'>
        Our <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='underline font-bold text-amber-700'>Ethiopian coffee harvest calendar</Link> helps buyers plan procurement timing across all major origins.
      </p>

      {/* H2: WHAT IMPORTERS RECEIVE */}
      <h2 className='text-3xl font-extrabold mt-10 mb-4'>
        What Importers Receive from Ethio Coffee
      </h2>

      <p className='my-4'>
        Beyond the coffee itself, every shipment includes a complete package designed for smooth customs clearance and full supply-chain transparency:
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h3 className='font-bold text-lg mb-3'>Documentation Package</h3>
        <ul className='font-inconsolata list-disc ml-5 space-y-1'>
          <li>Commercial invoice and packing list</li>
          <li>Bill of lading (ocean or multimodal)</li>
          <li>Phytosanitary certificate (from Ethiopian Plant Health Regulatory Authority)</li>
          <li>ICO certificate of origin</li>
          <li>CLU quality grade certificate</li>
          <li>Weight note and moisture analysis report</li>
          <li>Pre-shipment sample matching the shipped lot</li>
        </ul>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h3 className='font-bold text-lg mb-3'>Traceability Depth</h3>
        <p className='font-inconsolata text-sm'>
          Region → Zone → Woreda → Kebele → Washing Station or Drying Station → Lot Number
        </p>
        <p className='text-sm mt-2'>
          For our Guji Hambella lots, traceability extends to the individual farmer cluster and cherry delivery date. For lots from partner cooperatives and washing stations, we document to the kebele and station level at minimum. Our <Link href='/insights/ethiopian-coffee-traceability-guide' className='underline text-amber-700'>traceability guide</Link> explains what each level means for importers.
        </p>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h3 className='font-bold text-lg mb-3'>Quality Assurance</h3>
        <ul className='font-inconsolata list-disc ml-5 space-y-1'>
          <li>Every lot cupped internally before offer</li>
          <li>Pre-shipment sample shipped for buyer approval</li>
          <li>Moisture content verified (target: 10.5-11.5%)</li>
          <li>Screen size and defect count documented</li>
          <li>GrainPro-lined packaging for freshness protection during transit</li>
        </ul>
      </div>

      <p className='my-4'>
        Shipping terms are FOB Djibouti or FCA Addis Ababa dry port. We work with your freight forwarder or recommend trusted logistics partners for door-to-warehouse delivery. For container configurations, bag counts, and freight cost considerations, see our <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='underline font-bold text-amber-700'>MOQ guide for Ethiopian coffee</Link>.
      </p>

      {/* H2: 2026/27 SEASON */}
      <h2 className='text-3xl font-extrabold mt-10 mb-4'>
        2026/27 Season Availability
      </h2>

      <p className='my-4'>
        Ethiopia&apos;s primary coffee harvest runs October through January. For the 2026/27 season, we are sourcing across all major regions with the following availability:
      </p>

      <ul className='font-inconsolata my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Spot lots:</span> Current warehouse stock from the 2025/26 harvest, available for immediate shipment. Check our <Link href='/offerings' className='underline text-amber-700'>current offerings</Link> for live availability.</li>
        <li><span className='font-bold'>Forward contracts:</span> Reserve 2026/27 new-crop allocation from Yirgacheffe, Sidamo, Guji, Harar, Limu, and Jimma. Forward booking is recommended for buyers who need specific cup profiles or larger volumes.</li>
        <li><span className='font-bold'>Guji Hambella station lots:</span> Limited availability from our own drying station. These lots offer the deepest traceability in our portfolio. Contact us early to discuss allocation.</li>
      </ul>

      <p className='my-4'>
        Specialty-grade lots (G1, 85+ cup score) sell out fastest. Early allocation requests, especially for washed Yirgacheffe and natural Guji, give you the best selection.
      </p>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3'>Source Specialty Ethiopian Coffee Direct from Origin</h3>
        <p className='my-2'>
          Request samples from current lots, get pricing for the 2026/27 season, or discuss a sourcing plan built around your roastery&apos;s needs. We handle documentation, quality verification, and logistics so you can focus on roasting.
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

      {/* FAQ SECTION */}
      <section className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">FAQ: Working with an Ethiopian Coffee Exporter</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-gray-800 mb-2">How do I find a reliable Ethiopian coffee exporter?</h3>
            <p className="text-sm text-gray-600">Look for exporters registered with the <a href='https://www.ecx.com.et' target='_blank' rel='noopener noreferrer' className='underline'>Ethiopian Commodity Exchange (ECX)</a> who provide full lot traceability, pre-shipment samples, and complete export documentation. Evaluate their responsiveness, references from existing buyers, and willingness to share cupping data before you commit. Our <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='underline text-amber-700'>exporter evaluation guide</Link> provides a detailed checklist.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-2">What is the minimum order quantity for Ethiopian green coffee?</h3>
            <p className="text-sm text-gray-600">Standard export orders start at one full container load (FCL), typically 19.2 metric tons (320 bags at 60 kg each). For first-time buyers or smaller roasters testing an origin, some exporters offer flexibility. See our <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='underline text-amber-700'>MOQ guide</Link> for options including LCL consolidation.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-2">How long does it take to receive Ethiopian coffee after ordering?</h3>
            <p className="text-sm text-gray-600">From contract execution to vessel departure, allow 3-6 weeks for export preparation. Ocean transit from Djibouti ranges from 18 days (Middle East) to 35 days (East Asia, West Coast North America). Total timeline from order to warehouse arrival is typically 6-10 weeks depending on destination and documentation processing.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-2">What certifications does Ethio Coffee offer?</h3>
            <p className="text-sm text-gray-600">We supply conventional and certified lots depending on origin and season. Certified options include organic (USDA/EU), Fair Trade, and Rainforest Alliance through cooperatives that hold these certifications. For details on available certifications and how they apply to Ethiopian coffee, see our <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='underline text-amber-700'>certifications guide</Link>.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-2">Can small roasters order from an Ethiopian coffee exporter?</h3>
            <p className="text-sm text-gray-600">Yes. While full container loads are the standard export unit, small roasters can access Ethiopian specialty coffee through importing groups, LCL consolidation services, or in-country importers who break containers. Contact us to discuss volume options that work for your scale.</p>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/best-ethiopian-coffee-exporter-for-importers' className='text-amber-700 hover:underline'>Best Ethiopian Coffee Exporter for Importers</Link></li>
              <li>• <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='text-amber-700 hover:underline'>How to Choose an Ethiopian Coffee Export Company</Link></li>
              <li>• <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process: Buyer&apos;s Guide</Link></li>
              <li>• <Link href='/insights/private-vs-cooperative-ethiopian-coffee-exporters' className='text-amber-700 hover:underline'>Private vs Cooperative Ethiopian Coffee Exporters</Link></li>
              <li>• <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Pricing &amp; Logistics</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Pricing: FOB Guide for Importers</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts and Payment Terms</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost Guide</Link></li>
              <li>• <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Minimum Order Quantities for Ethiopian Coffee</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality &amp; Origins</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Green Coffee Origins</Link></li>
              <li>• <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji Compared</Link></li>
              <li>• <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee Processing</Link></li>
              <li>• <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Heirloom Ethiopian Coffee Varieties</Link></li>
              <li>• <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup and Evaluate Ethiopian Coffee Samples</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Market &amp; Planning</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Harvest Calendar for Buyers</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Ethiopian Coffee Certifications Guide</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability: Buyer&apos;s Guide</Link></li>
              <li>• <Link href='/insights/rising-ethiopian-coffee-prices-explained' className='text-amber-700 hover:underline'>Rising Ethiopian Coffee Prices Explained</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC. This article explains our sourcing model, buyer process, and export capabilities as an Ethiopian coffee exporter for importers worldwide. For current pricing, lot availability, and pre-shipment samples, <Link href='/contact-us' className='underline'>contact our team directly</Link>.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

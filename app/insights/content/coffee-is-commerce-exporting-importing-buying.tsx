import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function CoffeeIsCommerceExportingImportingBuying({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
          <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
            {title}
          </h1>
          <h2 className='text-2xl font-medium text-gray-700 mb-6'>
            Understanding the C market, specialty coffee pricing, and transparency in global coffee trade
          </h2>

          <figure>
            <figcaption className='font-inconsolata my-2'>
              Ethiopian coffee commerce insights
            </figcaption>

            <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
              <ResponsiveImage
                src={`/images/${large_image_url}`}
                alt={`${title} - Ethiopian coffee commerce insight`}
                fill
                objectFit='cover'
                className='w-full h-full'
                sizes='(max-width: 768px) 100vw, 768px'
              />
            </div>
          </figure>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Introduction: Coffee as a Global Industry</h2>
          <p className='my-4'>
            Every specialty coffee transaction involves a chain of pricing decisions, logistics handoffs, and trust relationships that most roasters never see. This fourth installment of our &quot;Coffee Is&quot; series examines coffee commerce: how the C market sets baseline prices, how specialty coffee differentiates itself through quality premiums, and why transparency at every stage matters for long-term supply chain health.
          </p>
          <p className='my-4'>
            For importers and roasters, understanding coffee commerce is essential. It explains how global futures markets influence the price you pay, how specialty premiums reward quality over volume, and why fair export and import practices protect both supply reliability and producer livelihoods. From origin-country warehouses to destination-port customs clearance, coffee commerce is the system that connects your roastery to the farmers who grew your beans.
          </p>

          <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
            <span className='font-semibold'>Part of the &quot;Coffee Is&quot; Series:</span>
            <div className='flex flex-wrap gap-2 mt-2'>
              <Link href='/insights/coffee-plant-taxonomy-species-varieties' className='underline text-xs'>1. Plant</Link>
              <Link href='/insights/coffee-is-agriculture-production-farming' className='underline text-xs'>2. Agriculture</Link>
              <Link href='/insights/coffee-is-processing-drying-milling' className='underline text-xs'>3. Processing</Link>
              <span className='bg-dark text-primary px-2 py-1 rounded text-xs'>4. Commerce (You are here)</span>
              <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='underline text-xs'>5. Science</Link>
              <Link href='/insights/coffee-is-art-roasting-brewing' className='underline text-xs'>6. Art</Link>
            </div>
          </div>

          <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
            <p className='font-medium'>
              <span className='font-bold'>Key Takeaway:</span> Coffee commerce operates on two tracks. The C market sets commodity baselines for 90-95% of global volume, while specialty coffee rewards quality, traceability, and relationships with premiums above that baseline. Importers and roasters who understand both systems, and who prioritize transparency, build more resilient supply chains and secure better lots.
            </p>
          </div>

          <div className='bg-gray-100 p-6 rounded-lg my-6'>
            <p className='font-medium'>
              <span className='font-bold'>In this article:</span> We cover the C market, specialty coffee dynamics, exporting and importing logistics, green buying strategies, and transparency practices, plus a short case study on recent price volatility and its impact for producers.
            </p>
          </div>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>The C Market: Commodity Coffee Trading</h2>
          <p className='my-4'>
            At the heart of coffee commerce lies the C market, a standardized global marketplace for trading coffee futures contracts. Established in 1968, the C market operates out of New York and serves as a benchmark for coffee prices worldwide. Unlike specialty coffee, the C market treats all coffee as a commodity, focusing on contracts for commercial washed coffee delivered in specific quantities and qualities.
          </p>
          <p className='my-4'>
            Key aspects of the C market include:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Futures Contracts:</strong> Buyers and sellers trade contracts for coffee to be delivered in the future, allowing hedging against price volatility.</li>
            <li><strong>Price Discovery:</strong> Supply and demand, influenced by factors like Brazil's harvest cycles, determine spot prices that can fluctuate dramatically.</li>
            <li><strong>Volatility:</strong> Prices have ranged from 41 cents to over $4 per pound in recent years, impacting global coffee economics.</li>
          </ul>
          <p className='my-4'>
            The C market represents 90-95% of global coffee trade, providing stability for large-scale operations but often failing to reward quality or sustainability. In contrast, specialty coffee emerges as a reaction to this commoditization, emphasizing distinctiveness and ethical sourcing.
          </p>
          <p className='my-4'>
            To learn how specialty buyers operate in practice, see our buyer-friendly guides: <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='underline font-bold'>How to Source Green Coffee from Ethiopia</Link> and <Link href='/insights/best-ethiopian-coffee-exporter-importer-supplier' className='underline font-bold'>Best Ethiopian Coffee Exporter, Importer & Supplier</Link>.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Case Study: 2024 Price Volatility and What It Meant</h3>
          <p className='my-4'>
            The 2024 season saw one of the sharpest price swings in recent memory. Producers who had little access to price risk-management tools experienced sudden income spikes followed by rapid declines. For many smallholders this translated into impossible planning for inputs and labor. Specialty buyers who maintained forward contracts and transparent premiums were able to provide more stable income and preserve long-term partnerships.
          </p>
          <p className='my-4'>
            Practical takeaway: roasters should consider multi-year contracts or early-payment options to smooth income for producers and secure reliable supply for their roasteries.
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Specialty Coffee: Differentiated and Transparent</h2>
          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Defining Specialty Coffee</h3>
          <p className='my-4'>
            Specialty coffee operates outside the C market by recognizing coffee&apos;s unique qualities, origins, and processing methods. It prioritizes traceability, cup excellence, and relationships over standardized contracts. Specialty coffee scoring, using tools like the SCA cupping form, evaluates attributes such as sweetness, balance, and distinctiveness, often scoring 80+ points.
          </p>
          <p className='my-4'>
            Unlike the C market's anonymity, specialty coffee involves direct connections between producers, exporters, importers, and roasters. This approach ensures that premiums are paid for exceptional quality, social programs, and environmental stewardship, fostering a more equitable coffee commerce ecosystem.
          </p>

          <p className='my-4'>
            Ethiopian specialty coffee exemplifies this model. When you purchase a traceable lot from 
            <Link href='/insights/guide-ethiopian-coffee-origins' className='underline'> Yirgacheffe or Guji</Link>, 
            you&apos;re not just buying beans; you&apos;re buying a story: the specific washing station, the 
            processing method, the altitude, the harvest date. This information enables roasters to communicate 
            value to their customers and justify specialty pricing. It also creates accountability that benefits 
            farmers. When quality commands premiums, there&apos;s incentive to invest in better 
            <Link href='/insights/coffee-is-agriculture-production-farming' className='underline'> agricultural practices</Link> and 
            <Link href='/insights/coffee-is-processing-drying-milling' className='underline'> processing infrastructure</Link>.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>C Market vs. Specialty: Key Differences</h3>
          <p className='my-4'>
            The C market and specialty coffee operate on fundamentally different principles:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Standardization:</strong> C market coffee is uniform; specialty celebrates diversity in flavor and origin.</li>
            <li><strong>Pricing:</strong> C market prices are volatile and low; specialty commands premiums based on quality differentials.</li>
            <li><strong>Traceability:</strong> C market lacks origin details; specialty emphasizes transparency from farm to cup.</li>
          </ul>
          <p className='my-4'>
            Specialty coffee's growth to 5-10% of global volume highlights a shift toward value-driven commerce, where consumers and buyers seek meaningful connections and sustainable practices.
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Coffee Exporting and Importing: Logistics of Global Trade</h2>
          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>The Export Process</h3>
          <p className='my-4'>
            Coffee exporting begins after milling, where green beans are prepared for international shipment. Exporters, ranging from government-run entities to private companies, source coffee from producers, cooperatives, or mills. They handle logistics like bagging, quality control, and transportation to ports.
          </p>
          <p className='my-4'>
            Key steps in exporting include:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Sourcing:</strong> Collecting coffee in parchment or green bean form from various entities.</li>
            <li><strong>Processing:</strong> Milling, sorting, and bagging into jute bags for shipment.</li>
            <li><strong>Shipping:</strong> Transporting via truck to ports, then by sea freight to importing countries.</li>
          </ul>
          <p className='my-4'>
            Free on Board (FOB) pricing covers costs from sourcing to loading onto ships, ensuring exporters profit while supporting upstream partners.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>The Import Process</h3>
          <p className='my-4'>
            Importing coffee involves receiving shipments at destination ports and managing customs, warehousing, and distribution. Importers like Cafe Imports purchase from exporters, handle logistics, and provide services such as financing and quality assurance.
          </p>
          <p className='my-4'>
            The import journey includes:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Receiving:</strong> Offloading containers and clearing customs.</li>
            <li><strong>Quality Checks:</strong> Sampling and approving pre-ship samples before final payment.</li>
            <li><strong>Distribution:</strong> Warehousing and shipping to roasters via Ex Works (EXW) pricing.</li>
          </ul>
          <p className='my-4'>
            Effective coffee importing requires trust, efficient logistics, and a commitment to fair pricing to maintain supply chain integrity.
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Green Coffee Buying: Strategies and Transparency</h2>
          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Entities in Green Buying</h3>
          <p className='my-4'>
            Green coffee buying involves producers, cooperatives, exporters, importers, and roasters. Producers sell at farmgate prices, cooperatives aggregate for market access, and exporters facilitate international trade. Importers and roasters negotiate based on quality, origin, and impact.
          </p>
          <p className='my-4'>
            Pricing tiers include:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Farmgate:</strong> Paid to producers, covering production and living costs.</li>
            <li><strong>FOB:</strong> Exporter pricing, including sourcing and logistics.</li>
            <li><strong>EXW:</strong> Importer pricing, delivering to roasters.</li>
          </ul>
          <p className='my-4'>
            Specialty premiums reward quality, social programs, and certifications, bridging the gap between C market baselines and differentiated value.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>The Buying Timeline</h3>
          <p className='my-4'>
            Green buying follows a structured process: receiving offers, cupping samples, drafting contracts, milling, approving pre-ship samples, booking logistics, and final payment via cash-against-documents systems. This ensures quality and timely delivery in coffee commerce.
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Transparency in Coffee Trade: Building Trust and Accountability</h2>
          <p className='my-4'>
            Transparency in coffee commerce means sharing information about pricing, origins, and impacts to foster accountability. It addresses challenges like undocumented farmgate prices and power imbalances, promoting fair compensation and sustainable practices.
          </p>
          <p className='my-4'>
            Key transparency practices include:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Data Sharing:</strong> Providing breakdowns of payments to producers and supply chain partners.</li>
            <li><strong>Third-Party Verification:</strong> Using certifications like B Corp for social and environmental impact.</li>
            <li><strong>Relationship Building:</strong> Aligning with partners who share values in ethical coffee commerce.</li>
          </ul>
          <p className='my-4'>
            By prioritizing transparency, the industry can ensure that coffee commerce uplifts producers, protects the environment, and delivers value to consumers, moving beyond extractive practices toward mutual benefit.
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Conclusion: The Future of Coffee Commerce</h2>
          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Buyer Checklist & Pricing Waterfall</h3>
          <p className='my-4'>A short checklist and quick pricing waterfall to understand how money flows:</p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Ask for:</strong> Farmgate price, premiums, FOB, and any quality bonuses</li>
            <li><strong>Understand:</strong> Exporter costs (milling, testing, logistics) versus importer/roaster margins</li>
            <li><strong>Pricing waterfall:</strong> Farmgate → Local logistics/milling → Exporter margin → Freight/insurance → Importer margin → Roaster price</li>
          </ul>
          <p className='my-4'>Transparency here is crucial. Request a payment breakdown when possible to ensure a fair share reaches producers.</p>
          <p className='my-4'>
            Coffee commerce is more than transactions; it is a system of relationships, logistics, and accountability that links roasters to the cooperatives and washing stations producing their coffee. From C market volatility to specialty premiums and FOB negotiations, understanding each stage of exporting, importing, and green buying gives you better control over quality, cost, and supply reliability. Transparency remains the foundation: when every participant in the chain can see how value is distributed, the entire system becomes more sustainable.
          </p>
          <p className='my-4'>
            At Ethio Coffee Export PLC, we apply these principles through our trusted sourcing network across Ethiopia&apos;s coffee regions, transparent pricing, and three decades of heritage sourcing relationships. Contact us to discuss your next green coffee purchase.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Continue Your Coffee Education</h3>
          <p className='my-4'>
            Now that you understand how coffee moves through global commerce, explore the quality systems that drive value:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='underline font-bold'>Coffee Is Science</Link> - The chemical analysis and sensory evaluation behind specialty grading</li>
            <li><Link href='/insights/coffee-is-art-roasting-brewing' className='underline font-bold'>Coffee Is Art</Link> - How roasters transform green coffee into the final product</li>
            <li><Link href='/insights/direct-trade-ethiopian-farmers' className='underline font-bold'>Direct Trade Partnerships</Link> - How we build relationships that benefit Ethiopian farmers</li>
          </ul>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Frequently Asked Questions</h2>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>What is the C market in coffee?</h3>
          <p className='my-4'>
            The C market is the global commodity exchange for Arabica coffee futures, based in New York. It sets benchmark prices for roughly 90-95% of traded coffee. Prices reflect supply and demand signals (especially Brazil&apos;s crop cycle) and serve as the baseline from which specialty premiums are added.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>How does specialty coffee pricing differ from C market pricing?</h3>
          <p className='my-4'>
            Specialty coffee trades at a differential above the C market price. That differential reflects cup quality (SCA score 80+), traceability, certifications, and relationship commitments. While C market prices fluctuate daily, specialty differentials tend to be more stable because they are negotiated between specific buyers and exporters.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>What does FOB mean in coffee trade?</h3>
          <p className='my-4'>
            FOB (Free on Board) is the price at which the exporter delivers green coffee loaded onto a vessel at the port of origin. It includes sourcing costs, milling, transport to port, and exporter margin. Everything after loading (freight, insurance, import duties) is the buyer&apos;s responsibility.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Why is transparency important in coffee commerce?</h3>
          <p className='my-4'>
            Transparency means sharing pricing breakdowns, farmgate payments, and supply chain details openly. It builds trust between exporters, importers, and roasters; ensures producers receive fair compensation; and helps buyers verify that their sourcing practices align with ethical and sustainability commitments.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>How long does the green coffee buying timeline take?</h3>
          <p className='my-4'>
            A typical green coffee buying cycle runs 3 to 6 months from offer receipt to delivery. Steps include cupping offer samples, contract negotiation, milling and pre-ship sample approval, booking freight, and final payment via cash-against-documents. Forward contracts or multi-season agreements can shorten lead times.
          </p>

          <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
            <h4 className='font-bold text-xl mb-3'>Source Premium Ethiopian Coffee Direct from Origin</h4>
            <p className='my-2'>
              <span className='font-bold'>Ethio Coffee Export PLC</span> offers specialty Ethiopian green coffee with transparent FOB pricing, pre-ship samples, and flexible contract terms. Request samples or a current offer sheet to get started.
            </p>
            <div className='flex flex-wrap gap-4 mt-4'>
              <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Our Offerings</Link>
              <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Contact Us</Link>
              <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>How to Order</Link>
            </div>
          </div>

          {/* RELATED ARTICLES */}
          <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
            <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
            <div className='grid md:grid-cols-2 gap-4'>
              <div>
                <h4 className='font-semibold mb-2 text-sm'>Coffee Journey Series</h4>
                <ul className='space-y-1 text-sm'>
                  <li>• <Link href='/insights/coffee-plant-taxonomy-species-varieties' className='text-amber-700 hover:underline'>Coffee Plant Taxonomy, Species & Varieties</Link></li>
                  <li>• <Link href='/insights/coffee-is-agriculture-production-farming' className='text-amber-700 hover:underline'>Coffee Is Agriculture: Production & Farming</Link></li>
                  <li>• <Link href='/insights/coffee-is-processing-drying-milling' className='text-amber-700 hover:underline'>Coffee Is Processing: Drying & Milling</Link></li>
                  <li>• <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='text-amber-700 hover:underline'>Coffee Is Science: Analysis & Evaluation</Link></li>
                  <li>• <Link href='/insights/coffee-is-art-roasting-brewing' className='text-amber-700 hover:underline'>Coffee Is Art: Roasting & Brewing</Link></li>
                </ul>
              </div>
              <div>
                <h4 className='font-semibold mb-2 text-sm'>Pricing & Market</h4>
                <ul className='space-y-1 text-sm'>
                  <li>• <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Pricing FOB Guide</Link></li>
                  <li>• <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
                  <li>• <Link href='/insights/best-ethiopian-coffee-exporter-importer-supplier' className='text-amber-700 hover:underline'>Best Ethiopian Coffee Exporter, Importer & Supplier</Link></li>
                </ul>
              </div>
              <div>
                <h4 className='font-semibold mb-2 text-sm'>Quality & Origins</h4>
                <ul className='space-y-1 text-sm'>
                  <li>• <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Coffee Origins</Link></li>
                  <li>• <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee Processing</Link></li>
                  <li>• <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji Comparison</Link></li>
                </ul>
              </div>
              <div>
                <h4 className='font-semibold mb-2 text-sm'>Sourcing & Trade</h4>
                <ul className='space-y-1 text-sm'>
                  <li>• <Link href='/insights/direct-trade-ethiopian-farmers' className='text-amber-700 hover:underline'>Direct Trade with Ethiopian Farmers</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className='border-t border-gray-300 mt-10 pt-6'>
            <p className='text-sm text-gray-600 font-inconsolata'>
              <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Export PLC. This article draws from ICO market reports, specialty coffee trade publications, and our direct experience as an Ethiopian coffee exporter. For current pricing or sourcing information, <Link href='/contact-us' className='underline'>contact us directly</Link>.
            </p>
            <p className='text-sm text-gray-600 font-inconsolata mt-2'>
              <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
            </p>
          </div>
    </>
  )
}

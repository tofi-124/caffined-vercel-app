import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { HiOutlineCalendarDays } from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopianCoffeeHarvest2025SeasonOutlook({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
          <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
            {title}
          </h1>
          <h2 className='text-2xl font-medium text-gray-700 mb-6'>
            Regional forecasts, pricing trends, and a timeline for importers sourcing green coffee from Ethiopia
          </h2>

          <figure>
            <figcaption className='font-inconsolata my-2'>
              The 2025 Ethiopian coffee harvest brings promising conditions across most growing regions.
            </figcaption>

            <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
              <ResponsiveImage
                src={`/images/${large_image_url}`}
                alt='Ethiopian coffee harvest 2025 - coffee cherries being picked in Yirgacheffe'
                fill
                objectFit='cover'
                className='w-full h-full'
                sizes='(max-width: 768px) 100vw, 768px'
              />
            </div>
          </figure>

          <div className='bg-dark text-primary p-6 rounded-lg my-6'>
            <p className='font-medium flex items-center gap-2'>
              <HiOutlineCalendarDays className='text-xl flex-shrink-0' />
              <span><span className='font-bold'>2025 Harvest Update:</span> Peak harvest is underway across most Ethiopian coffee regions. Contact us now to secure your allocation before the best lots are committed.</span>
            </p>
          </div>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Introduction: What the 2025 Season Means for Importers</h2>
          <p className='my-4'>
            Every year, the Ethiopian coffee harvest represents one of the most anticipated events in specialty coffee. As the <Link href='/insights/birthplace-of-coffee-ethiopia' className='underline'>birthplace of Arabica coffee</Link>, Ethiopia produces some of the world&apos;s most distinctive and sought-after green beans from the floral elegance of Yirgacheffe to the explosive fruit character of Guji naturals.
          </p>
          <p className='my-4'>
            For importers, roasters, and green coffee buyers worldwide, understanding the Ethiopian harvest cycle is essential for strategic sourcing. This comprehensive 2025 harvest report covers regional outlooks, quality expectations, pricing dynamics, and a practical timeline to help you plan your Ethiopian coffee purchases with confidence.
          </p>
          <p className='my-4'>
            Whether you&apos;re a first-time buyer exploring <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='underline'>how to source Ethiopian green coffee</Link> or an experienced importer looking for this season&apos;s exceptional lots, this guide provides the market intelligence you need.
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Ethiopian Coffee Harvest Calendar: When Coffee Is Picked</h2>
          <p className='my-4'>
            Unlike many coffee-producing countries with clearly defined wet and dry seasons, Ethiopia&apos;s diverse geography creates a staggered harvest across regions. Understanding this timeline is crucial for importers planning their buying windows.
          </p>
          
          <div className='overflow-x-auto my-6'>
            <table className='w-full border-collapse border border-gray-300 font-inconsolata text-sm'>
              <thead className='bg-dark text-primary'>
                <tr>
                  <th className='border border-gray-300 p-3 text-left'>Region</th>
                  <th className='border border-gray-300 p-3 text-left'>Harvest Period</th>
                  <th className='border border-gray-300 p-3 text-left'>Processing Window</th>
                  <th className='border border-gray-300 p-3 text-left'>Export Availability</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-gray-300 p-3 font-bold'>Yirgacheffe</td>
                  <td className='border border-gray-300 p-3'>October – January</td>
                  <td className='border border-gray-300 p-3'>November – February</td>
                  <td className='border border-gray-300 p-3'>February – May</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='border border-gray-300 p-3 font-bold'>Sidamo</td>
                  <td className='border border-gray-300 p-3'>October – January</td>
                  <td className='border border-gray-300 p-3'>November – February</td>
                  <td className='border border-gray-300 p-3'>February – May</td>
                </tr>
                <tr>
                  <td className='border border-gray-300 p-3 font-bold'>Guji</td>
                  <td className='border border-gray-300 p-3'>October – December</td>
                  <td className='border border-gray-300 p-3'>November – January</td>
                  <td className='border border-gray-300 p-3'>January – April</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='border border-gray-300 p-3 font-bold'>Harrar</td>
                  <td className='border border-gray-300 p-3'>November – February</td>
                  <td className='border border-gray-300 p-3'>December – March</td>
                  <td className='border border-gray-300 p-3'>March – June</td>
                </tr>
                <tr>
                  <td className='border border-gray-300 p-3 font-bold'>Limu</td>
                  <td className='border border-gray-300 p-3'>November – January</td>
                  <td className='border border-gray-300 p-3'>December – February</td>
                  <td className='border border-gray-300 p-3'>February – May</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='border border-gray-300 p-3 font-bold'>Jimma</td>
                  <td className='border border-gray-300 p-3'>October – January</td>
                  <td className='border border-gray-300 p-3'>November – February</td>
                  <td className='border border-gray-300 p-3'>February – May</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className='my-4'>
            The 2025 harvest began on schedule in most regions, with early pickings in Guji and Yirgacheffe starting in late September. Favorable rainfall patterns during the growing season have set the stage for what could be an excellent crop year.
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Regional Harvest Outlooks for 2025</h2>
          
          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Yirgacheffe: Exceptional Conditions for Floral Complexity</h3>
          <p className='my-4'>
            The Gedeo Zone&apos;s famous Yirgacheffe micro-region is reporting one of its most promising harvests in recent years. Adequate rainfall during the flowering period (March-April) combined with moderate temperatures during cherry development has created ideal conditions for the delicate floral compounds that make <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='underline'>Yirgacheffe coffee</Link> legendary.
          </p>
          <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
            <h4 className='font-bold text-lg mb-2'>Yirgacheffe 2025 Outlook</h4>
            <ul className='font-inconsolata list-disc ml-5'>
              <li className='my-2'><span className='font-bold'>Volume:</span> Slightly above average (+5-8% vs. 2024)</li>
              <li className='my-2'><span className='font-bold'>Quality:</span> Excellent potential for G1 washed lots</li>
              <li className='my-2'><span className='font-bold'>Expected Profile:</span> Pronounced jasmine, bergamot, lemon zest</li>
              <li className='my-2'><span className='font-bold'>Price Trend:</span> Speciality pricing expected due to global demand</li>
              <li className='my-2'><span className='font-bold'>Buyer Tip:</span> Secure washed G1 early; competition is intense</li>
            </ul>
          </div>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Sidamo: Strong Naturals, Consistent Washed</h3>
          <p className='my-4'>
            Sidamo now officially known as Sidama after gaining regional autonomy continues to deliver the fruit-forward naturals and balanced washed coffees the region is known for. The 2025 harvest shows particular strength in natural processed lots, with extended dry periods during processing creating ideal conditions for slow, even drying.
          </p>
          <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
            <h4 className='font-bold text-lg mb-2'>Sidamo 2025 Outlook</h4>
            <ul className='font-inconsolata list-disc ml-5'>
              <li className='my-2'><span className='font-bold'>Volume:</span> Average to slightly above</li>
              <li className='my-2'><span className='font-bold'>Quality:</span> Naturals showing exceptional fruit clarity</li>
              <li className='my-2'><span className='font-bold'>Expected Profile:</span> Blueberry, strawberry, wine notes in naturals</li>
              <li className='my-2'><span className='font-bold'>Price Trend:</span> Stable; naturals commanding speciality</li>
              <li className='my-2'><span className='font-bold'>Buyer Tip:</span> Great value in G2 naturals for blend enhancement</li>
            </ul>
          </div>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Guji: The Rising Star Delivers Again</h3>
          <p className='my-4'>
            Guji has rapidly become one of the most exciting Ethiopian origins, and the 2025 harvest reinforces why. Higher altitudes in areas like Shakiso, Uraga, and Hambela are producing coffees with remarkable complexity the signature stone fruit and jasmine aromatics that have made Guji a darling of specialty roasters.
          </p>
          <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
            <h4 className='font-bold text-lg mb-2'>Guji 2025 Outlook</h4>
            <ul className='font-inconsolata list-disc ml-5'>
              <li className='my-2'><span className='font-bold'>Volume:</span> Strong production year</li>
              <li className='my-2'><span className='font-bold'>Quality:</span> Competition-grade lots available</li>
              <li className='my-2'><span className='font-bold'>Expected Profile:</span> Peach, apricot, jasmine, syrupy body</li>
              <li className='my-2'><span className='font-bold'>Price Trend:</span> Speciality prices; high demand from specialty buyers</li>
              <li className='my-2'><span className='font-bold'>Buyer Tip:</span> Excellent for single-origin espresso programs</li>
            </ul>
          </div>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Harrar: Traditional Character, Variable Lots</h3>
          <p className='my-4'>
            Eastern Ethiopia&apos;s Harrar region produces some of the most distinctive coffees in the world bold, winey naturals with dried fruit character. The 2025 harvest faces some challenges from inconsistent rainfall, but top lots from established producers maintain the quality Harrar is known for.
          </p>
          <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
            <h4 className='font-bold text-lg mb-2'>Harrar 2025 Outlook</h4>
            <ul className='font-inconsolata list-disc ml-5'>
              <li className='my-2'><span className='font-bold'>Volume:</span> Slightly below average due to weather</li>
              <li className='my-2'><span className='font-bold'>Quality:</span> Variable; careful lot selection essential</li>
              <li className='my-2'><span className='font-bold'>Expected Profile:</span> Dried fruit, cocoa, wine, spice</li>
              <li className='my-2'><span className='font-bold'>Price Trend:</span> Stable; speciality for verified quality</li>
              <li className='my-2'><span className='font-bold'>Buyer Tip:</span> Request samples; lot variation is significant</li>
            </ul>
          </div>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Quality Expectations: What Buyers Should Know</h2>
          <p className='my-4'>
            Several factors are shaping the quality profile of the 2025 Ethiopian harvest:
          </p>
          
          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Climate Conditions</h3>
          <p className='my-4'>
            The 2024 growing season saw generally favorable weather across Ethiopia&apos;s coffee belt. The Belg (short) rains arrived on time in March-April, supporting healthy flowering. The Meher (main) rains from June-September provided adequate moisture without the excess that can promote fungal disease.
          </p>
          <p className='my-4'>
            Temperature patterns remained within optimal ranges for Arabica development (15-24°C). Importantly, there were no significant frost events in highland areas a risk that can devastate quality in high-altitude regions.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Processing Infrastructure Improvements</h3>
          <p className='my-4'>
            Ethiopian washing stations continue to invest in <Link href='/insights/coffee-is-processing-drying-milling' className='underline'>processing infrastructure</Link>. New fermentation tanks, improved raised drying beds, and better water management systems are raising the floor on quality. This is particularly evident in Guji and parts of Sidamo, where private washing stations are competing intensely for cherry supply by offering farmers speciality prices for ripe, well-sorted cherry.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Grading and Defect Expectations</h3>
          <p className='my-4'>
            Based on early-season arrivals, we&apos;re seeing:
          </p>
          <ul className='font-inconsolata my-4 list-disc ml-5'>
            <li className='my-2'><span className='font-bold'>G1 Washed:</span> Excellent availability; clean cups with pronounced terroir</li>
            <li className='my-2'><span className='font-bold'>G1 Natural:</span> Strong lots from speciality stations; some variation</li>
            <li className='my-2'><span className='font-bold'>G2 Washed:</span> Good value tier; slight increase in minor defects</li>
            <li className='my-2'><span className='font-bold'>G2 Natural:</span> Abundant; excellent for blends and price-sensitive buyers</li>
            <li className='my-2'><span className='font-bold'>G3/G4:</span> Commercial grades available for volume buyers</li>
          </ul>
          <p className='my-4'>
            Understanding <Link href='/insights/green-coffee-quality-control-defects-grading' className='underline'>Ethiopian coffee grading standards</Link> is essential for setting realistic expectations and negotiating fair prices.
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Pricing Trends and Market Dynamics</h2>
          <p className='my-4'>
            The 2025 Ethiopian coffee market reflects broader trends in global specialty coffee:
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Price Drivers for 2025</h3>
          <ul className='font-inconsolata my-4 list-disc ml-5'>
            <li className='my-2'><span className='font-bold'>Global Demand:</span> Specialty coffee consumption continues growing 5-7% annually</li>
            <li className='my-2'><span className='font-bold'>Ethiopian Birr Dynamics:</span> Currency fluctuations affect FOB pricing</li>
            <li className='my-2'><span className='font-bold'>Logistics Costs:</span> Shipping rates have stabilized but remain elevated</li>
            <li className='my-2'><span className='font-bold'>Competition:</span> More buyers pursuing limited exceptional lots</li>
            <li className='my-2'><span className='font-bold'>Farm-level Economics:</span> Rising production costs passed to exporters</li>
          </ul>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Expected Price Ranges (FOB Djibouti)</h3>
          <div className='overflow-x-auto my-6'>
            <table className='w-full border-collapse border border-gray-300 font-inconsolata text-sm'>
              <thead className='bg-dark text-primary'>
                <tr>
                  <th className='border border-gray-300 p-3 text-left'>Grade/Origin</th>
                  <th className='border border-gray-300 p-3 text-left'>2024 Range</th>
                  <th className='border border-gray-300 p-3 text-left'>2025 Expected</th>
                  <th className='border border-gray-300 p-3 text-left'>Trend</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-gray-300 p-3 font-bold'>Yirgacheffe G1 Washed</td>
                  <td className='border border-gray-300 p-3'>$4.80 – $6.50/kg</td>
                  <td className='border border-gray-300 p-3'>$5.00 – $7.00/kg</td>
                  <td className='border border-gray-300 p-3'>↑ Moderate increase</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='border border-gray-300 p-3 font-bold'>Guji G1 Natural</td>
                  <td className='border border-gray-300 p-3'>$4.50 – $6.00/kg</td>
                  <td className='border border-gray-300 p-3'>$4.80 – $6.50/kg</td>
                  <td className='border border-gray-300 p-3'>↑ Strong demand</td>
                </tr>
                <tr>
                  <td className='border border-gray-300 p-3 font-bold'>Sidamo G2 Natural</td>
                  <td className='border border-gray-300 p-3'>$3.20 – $4.20/kg</td>
                  <td className='border border-gray-300 p-3'>$3.40 – $4.50/kg</td>
                  <td className='border border-gray-300 p-3'>↑ Slight increase</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='border border-gray-300 p-3 font-bold'>Limu G2 Washed</td>
                  <td className='border border-gray-300 p-3'>$3.00 – $3.80/kg</td>
                  <td className='border border-gray-300 p-3'>$3.10 – $4.00/kg</td>
                  <td className='border border-gray-300 p-3'>→ Stable</td>
                </tr>
                <tr>
                  <td className='border border-gray-300 p-3 font-bold'>Commercial G4</td>
                  <td className='border border-gray-300 p-3'>$2.20 – $2.80/kg</td>
                  <td className='border border-gray-300 p-3'>$2.30 – $3.00/kg</td>
                  <td className='border border-gray-300 p-3'>→ Stable</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='my-4 text-sm text-gray-600'>
            *Prices are indicative and subject to change based on lot quality, volume, and market conditions. Contact us for current pricing.
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Buyer Planning Timeline: When to Act</h2>
          <p className='my-4'>
            Successful Ethiopian coffee sourcing requires planning ahead. Here&apos;s a practical timeline for the 2025 harvest:
          </p>

          <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
            <h4 className='font-bold text-lg mb-4'>2025 Ethiopian Coffee Buying Timeline</h4>
            <ul className='font-inconsolata list-none space-y-4'>
              <li className='flex gap-4'>
                <span className='font-bold min-w-[140px]'>Sep – Oct 2025:</span>
                <span>Pre-season planning. Review previous year&apos;s performance, set budgets, communicate requirements to suppliers.</span>
              </li>
              <li className='flex gap-4'>
                <span className='font-bold min-w-[140px]'>Nov – Dec 2025:</span>
                <span>Early harvest arrivals. Request type samples, evaluate early lots, make commitments on exceptional finds.</span>
              </li>
              <li className='flex gap-4'>
                <span className='font-bold min-w-[140px]'>Jan – Feb 2026:</span>
                <span>Peak buying window. Best selection available. Confirm orders and shipping schedules.</span>
              </li>
              <li className='flex gap-4'>
                <span className='font-bold min-w-[140px]'>Mar – Apr 2026:</span>
                <span>Main shipments depart. Pre-shipment samples, final documentation, logistics coordination.</span>
              </li>
              <li className='flex gap-4'>
                <span className='font-bold min-w-[140px]'>May – Jul 2026:</span>
                <span>Late season. Limited selection but possible deals. Good for fill-in orders.</span>
              </li>
            </ul>
          </div>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>How Ethio Coffee Supports Your 2025 Sourcing</h2>
          <p className='my-4'>
            At <Link href='/insights/best-ethiopian-coffee-exporter-for-importers' className='underline'>Ethio Coffee Export PLC</Link>, we&apos;re positioned to help importers navigate the 2025 harvest with confidence:
          </p>
          <ul className='font-inconsolata my-4 list-disc ml-5'>
            <li className='my-2'><span className='font-bold'>Regional Coverage:</span> We source from all major Ethiopian growing regions</li>
            <li className='my-2'><span className='font-bold'>Quality Focus:</span> Rigorous <Link href='/insights/green-coffee-quality-control-defects-grading' className='underline'>quality control</Link> at every stage</li>
            <li className='my-2'><span className='font-bold'>Transparent Pricing:</span> Clear FOB quotes with full documentation</li>
            <li className='my-2'><span className='font-bold'>Sample Programs:</span> Type samples and pre-shipment samples available</li>
            <li className='my-2'><span className='font-bold'>Flexible Logistics:</span> Ship FOB Djibouti or Addis dry port</li>
            <li className='my-2'><span className='font-bold'>Responsive Communication:</span> Real-time updates on availability and shipping</li>
          </ul>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Conclusion: A Promising Year for Ethiopian Coffee</h2>
          <p className='my-4'>
            The 2025 Ethiopian coffee harvest offers excellent opportunities for importers seeking quality, diversity, and value. Favorable growing conditions, continued investment in processing, and strong production volumes across most regions create a buyer-friendly environment though competition for top lots remains intense.
          </p>
          <p className='my-4'>
            For importers committed to Ethiopian specialty coffee, now is the time to engage with suppliers, review samples, and secure allocations. The unique <Link href='/insights/coffee-plant-taxonomy-species-varieties' className='underline'>genetic diversity of Ethiopian heirloom varieties</Link>, combined with traditional farming practices and improving processing standards, ensures that Ethiopian coffee remains among the most exciting origins on Earth.
          </p>
          <p className='my-4'>
            Whether you&apos;re sourcing your first Ethiopian container or building on years of partnership, understanding the <Link href='/insights/coffee-is-agriculture-production-farming' className='underline'>agricultural realities</Link> and <Link href='/insights/coffee-is-commerce-exporting-importing-buying' className='underline'>commercial dynamics</Link> of Ethiopian coffee helps you make better decisions and build stronger relationships at origin.
          </p>

          <div className='bg-dark text-primary p-6 rounded-lg my-8'>
            <h4 className='font-bold text-xl mb-3'>Reserve Your 2025 Ethiopian Coffee</h4>
            <p className='my-2'>
              Don&apos;t miss the best lots from this year&apos;s harvest. Contact us today to discuss your sourcing needs, request samples, and secure your allocation.
            </p>
            <div className='flex gap-4 mt-4'>
              <Link href='/contact-us' className='underline font-bold'>
                REQUEST SAMPLES
              </Link>
              <Link href='/offerings' className='underline font-bold'>
                VIEW CURRENT OFFERINGS
              </Link>
            </div>
          </div>

          <div className='border-t border-gray-300 mt-10 pt-6'>
            <p className='text-sm text-gray-600 font-inconsolata'>
              <span className='font-bold'>About This Report:</span> This harvest outlook is based on field reports from our sourcing network, 
              early-season sample evaluations, and market intelligence gathered from industry contacts. Conditions and pricing are subject 
              to change. Last updated: September 2025.
            </p>
          </div>
    </>
  )
}

import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineTrophy,
  HiOutlineBeaker,
  HiOutlineGlobeAlt,
  HiOutlineStar,
  HiOutlineChartBar,
  HiOutlineCheckBadge,
  HiOutlineUserGroup,
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineArrowTrendingUp
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function AFCATasteOfHarvestEthiopianCoffeeCompetition({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        How Ethiopia&apos;s national Taste of Harvest competition, AFCA certification, and the new M-Cultivo auction platform connect producers with premium global buyers.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          The <a href="https://afca.coffee/" target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:underline'>AFCA</a> Taste of Harvest competition at the 22nd African Fine Coffees Conference in Addis Ababa showcased Ethiopia&apos;s specialty coffee quality to buyers from across the globe.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='AFCA Taste of Harvest Ethiopian coffee competition quality grading at AICC Addis Ababa'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-2 flex items-center gap-2'>
          <HiOutlineCheckBadge className='text-2xl' />
          Key Takeaway
        </p>
        <p>
          AFCA&apos;s Taste of Harvest is Africa&apos;s premier coffee quality competition. At the February 2026 event in Addis Ababa, Ethiopia submitted 226 samples across four processing categories: natural, washed, honey, and experimental. Top scorers advance to continental finals, earn one-year AFCA certification with serial numbers, and sell through the new <a href="https://tasteofharvest.mcultivo.com/" target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:underline'>M-Cultivo auction platform</a> where international buyers bid at premium prices.
        </p>
      </div>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Coffee Competitions / Quality Recognition / African Coffee Markets</span>
      </div>

      {/* INTRODUCTION */}
      <p className='my-4'>
        In February 2026, Ethiopia hosted the <span className='font-bold'>22nd African Fine Coffees Conference and Exhibition (AFCC&E)</span> at the new Addis International Convention Center (AICC). The event drew over 2,000 coffee professionals under the theme &quot;Brewing the Next African Generation,&quot; featuring the flagship <span className='font-bold'>AFCA Taste of Harvest</span> competition alongside the African Barista Championship, B2B cupping pavilions, and technical workshops.
      </p>

      <p className='my-4'>
        For Ethiopian coffee producers and exporters, the Taste of Harvest represents a direct path to premium markets: showcase exceptional quality, gain AFCA certification recognized across the global specialty sector, and sell award-winning lots through a transparent auction to buyers who pay well above commodity prices.
      </p>

      <p className='my-4'>
        This guide covers the competition structure, Ethiopia&apos;s 2026 participation, the judging process, AFCA certification benefits, and how both producers and international buyers can use the competition to build sourcing relationships.
      </p>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href="#what-is-afca" className='text-blue-600 hover:underline'>1. What Is AFCA and the Taste of Harvest Competition?</a></li>
          <li><a href="#ethiopia-leadership" className='text-blue-600 hover:underline'>2. Ethiopia&apos;s Role in African Coffee</a></li>
          <li><a href="#2026-competition" className='text-blue-600 hover:underline'>3. The 2026 AFCA Taste of Harvest in Ethiopia</a></li>
          <li><a href="#coffee-samples" className='text-blue-600 hover:underline'>4. Competition Samples: Processing Methods and Regions</a></li>
          <li><a href="#evaluation-process" className='text-blue-600 hover:underline'>5. Evaluation Process and Judging Criteria</a></li>
          <li><a href="#two-phase-system" className='text-blue-600 hover:underline'>6. Two-Phase System: National and Continental Finals</a></li>
          <li><a href="#certification-benefits" className='text-blue-600 hover:underline'>7. AFCA Certification: What Winners Receive</a></li>
          <li><a href="#auction-platform" className='text-blue-600 hover:underline'>8. The AFCA Auction Platform (M-Cultivo)</a></li>
          <li><a href="#how-to-participate" className='text-blue-600 hover:underline'>9. How Ethiopian Producers Can Enter Future Competitions</a></li>
          <li><a href="#buyer-opportunities" className='text-blue-600 hover:underline'>10. Opportunities for International Buyers</a></li>
          <li><a href="#impact-ethiopian-coffee" className='text-blue-600 hover:underline'>11. Long-Term Impact on Ethiopian Coffee</a></li>
        </ol>
      </div>

      {/* SECTION 1: WHAT IS AFCA */}
      <h2 id="what-is-afca" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineGlobeAlt className='text-amber-600' />
        1. What Is AFCA and the Taste of Harvest Competition?
      </h2>

      <h3 className='text-xl font-bold mt-6 mb-3'>African Fine Coffees Association (AFCA)</h3>

      <p className='my-4'>
        <a href="https://afca.coffee/" target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:underline'>AFCA</a> is a non-profit, member-driven organization founded in 2000 to represent Africa&apos;s coffee-producing countries. It promotes African coffee quality and market competitiveness through annual conferences, quality competitions, education programs, and direct buyer-seller connections.
      </p>

      <p className='my-4'>
        The 2026 conference was co-organized with the <span className='font-bold'>Ethiopian Coffee and Tea Authority (ECTA)</span> and the <span className='font-bold'>Inter-African Coffee Organization (IACO)</span>, reflecting the event&apos;s continent-wide scope.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-3'>The Taste of Harvest Competition</h3>

      <p className='my-4'>
        <span className='font-bold'>Taste of Harvest</span> is AFCA&apos;s flagship quality competition. National competitions run in each member country, with top-scoring coffees advancing to the Regional African Taste of Harvest held during the annual AFCC&E conference. The program serves three core purposes:
      </p>

      <div className='space-y-4 my-6'>
        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h4 className='font-bold mb-2 text-green-900'>Identify Excellence</h4>
          <p className='text-sm'>Discover the finest coffees produced across Africa each harvest season. All samples are cupped and scored using the SCA scoring system by certified Q-graders following AFCA&apos;s official Taste of Harvest Protocol.</p>
        </div>

        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h4 className='font-bold mb-2 text-blue-900'>Create Market Access</h4>
          <p className='text-sm'>Winning coffees sell through AFCA&apos;s <a href="https://tasteofharvest.mcultivo.com/" target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:underline'>auction platform</a>, connecting award-winning lots directly with specialty buyers at transparent, competitive prices.</p>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold mb-2 text-amber-900'>Certify Quality</h4>
          <p className='text-sm'>Top-scoring coffees receive official AFCA certification with individual serial numbers, providing internationally recognized quality credentials valid for one year.</p>
        </div>
      </div>

      <p className='my-4'>
        For the 2025/26 season, AFCA hosted national competitions in nine countries: Burundi, Cameroon, DRC, Ethiopia, Kenya, Malawi, Tanzania, Uganda, and Zambia. AFCA also partnered with the International Trade Centre&apos;s (ITC) EU-EAC MARKUP II Programme to scale the competition through online auctions in at least five of those countries.
      </p>

      {/* SECTION 2: ETHIOPIA'S ROLE */}
      <h2 id="ethiopia-leadership" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineStar className='text-amber-600' />
        2. Ethiopia&apos;s Role in African Coffee
      </h2>

      <p className='my-4'>
        Ethiopia holds a unique position within AFCA and the broader African coffee sector. As the <Link href="/insights/ethiopia-coffee-origin-birthplace" className='text-amber-700 hover:underline'>birthplace of Arabica coffee</Link>, with unmatched genetic diversity and a production base of 11.6 million 60-kg bags in 2025/26 (USDA forecast), the country is Africa&apos;s largest coffee producer and one of its most consistent competition participants.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold mb-3'>Ethiopia&apos;s Coffee Sector at a Glance (2024/25 Fiscal Year)</p>
        <ul className='space-y-2 text-sm'>
          <li>&#8226; <span className='font-bold'>Export volume:</span> 469,000 metric tons shipped</li>
          <li>&#8226; <span className='font-bold'>Export revenue:</span> $2.65 billion</li>
          <li>&#8226; <span className='font-bold'>Production forecast (2025/26):</span> 11.6 million 60-kg bags, up 9% year-over-year</li>
          <li>&#8226; <span className='font-bold'>Market reform:</span> Over 100 licensed farmers now export independently; cooperatives can export directly without going through unions</li>
          <li>&#8226; <span className='font-bold'>Government target:</span> Become the world&apos;s second-largest coffee exporter by 2033 with $4 billion in annual exports</li>
        </ul>
      </div>

      <p className='my-4'>
        Dr. Adunya Debela, Chief Director of the Ethiopian Coffee and Tea Authority, emphasized that hosting the 2026 conference demonstrated Ethiopia&apos;s modern laboratory facilities, well-trained coffee professionals, and leadership role in African coffee quality assessment.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-3'>Why Addis Ababa Was the Right Host</h3>

      <p className='my-4'>
        The conference took place at the <span className='font-bold'>Addis International Convention Center (AICC)</span>, a $1+ billion facility inaugurated in March 2025. The AICC sits on 40 hectares near CMC Square, 15 minutes from Bole International Airport, with a 3,000-seat main conference hall, eight meeting rooms, four exhibition halls, and on-site five-star hotel accommodation.
      </p>

      <p className='my-4'>
        Gizat Worku, President of the Ethiopian Coffee Association and AFCA Ethiopia Chapter Chairman, noted: &quot;Despite being the origin of coffee, Africa hasn&apos;t fully benefited from its global success. This conference is a renewed commitment to closing the gap between origin and market.&quot;
      </p>

      {/* SECTION 3: 2026 COMPETITION */}
      <h2 id="2026-competition" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineTrophy className='text-amber-600' />
        3. The 2026 AFCA Taste of Harvest Competition in Ethiopia
      </h2>

      <p className='my-4'>
        Ethiopia&apos;s national Taste of Harvest took place alongside the AFCC&E in February 2026, with the Regional Competition starting February 2 (pre-conference) and winners announced at the February 6 Closing Gala.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-3'>Competition Venue and Facilities</h3>

      <p className='my-4'>
        Evaluation sessions were hosted at the <span className='font-bold'>ECTA Coffee Training Center</span> in Addis Ababa, a facility built in partnership with illycaffe&apos;s Universita del Caffe. The center features:
      </p>

      <div className='space-y-3 my-6'>
        <div className='bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500'>
          <p className='text-sm'><span className='font-bold'>Professional Cupping Laboratory:</span> Equipped with sample roasting equipment, temperature-controlled cupping rooms, and water quality control systems meeting international standards</p>
        </div>
        <div className='bg-green-50 p-4 rounded-lg border-l-4 border-green-500'>
          <p className='text-sm'><span className='font-bold'>Expert Panel:</span> More than eight certified Q-graders and international coffee professionals conducted blind evaluations across all 226 submitted samples</p>
        </div>
        <div className='bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500'>
          <p className='text-sm'><span className='font-bold'>Research Capacity:</span> Green coffee moisture and density analyzers, colorimetric analysis equipment, and digital scoring systems meeting AFCA competition standards</p>
        </div>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0 mt-1' />
          <span>Dr. Adunya emphasized that the competition showcased Ethiopia&apos;s &quot;well-known experts that we have nurtured and developed,&quot; demonstrating world-class coffee evaluation capacity to visiting international delegates.</span>
        </p>
      </div>

      {/* SECTION 4: COFFEE SAMPLES */}
      <h2 id="coffee-samples" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineChartBar className='text-amber-600' />
        4. Competition Samples: Processing Methods and Regions
      </h2>

      <p className='my-4'>
        The 2026 Ethiopia national competition featured 226 samples from producers, cooperatives, and exporters across the country&apos;s major coffee-growing regions. The breakdown by processing method, reported by W/ro Bamlack Melese (Taste of Harvest Program Supervision Coordinator):
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Processing Method</th>
              <th className='p-3 text-center font-bold'>Samples</th>
              <th className='p-3 text-center font-bold'>Share</th>
              <th className='p-3 text-left font-bold'>Characteristics</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='p-3 font-bold'>Natural (Sun-Dried)</td>
              <td className='p-3 text-center'>100</td>
              <td className='p-3 text-center'>44.2%</td>
              <td className='p-3'>Fruit-forward, full body; Ethiopia&apos;s traditional processing heritage</td>
            </tr>
            <tr className='border-b bg-gray-50'>
              <td className='p-3 font-bold'>Experimental</td>
              <td className='p-3 text-center'>46</td>
              <td className='p-3 text-center'>20.4%</td>
              <td className='p-3'><Link href="/insights/anaerobic-ethiopian-coffee-processing-buyers-guide" className='text-amber-700 hover:underline'>Anaerobic</Link>, carbonic maceration, and hybrid processes</td>
            </tr>
            <tr className='border-b'>
              <td className='p-3 font-bold'>Washed</td>
              <td className='p-3 text-center'>43</td>
              <td className='p-3 text-center'>19.0%</td>
              <td className='p-3'>Clean, bright, floral profiles; strong demand from specialty roasters</td>
            </tr>
            <tr className='border-b bg-gray-50'>
              <td className='p-3 font-bold'>Honey</td>
              <td className='p-3 text-center'>37</td>
              <td className='p-3 text-center'>16.4%</td>
              <td className='p-3'>Balanced sweetness with varying mucilage levels</td>
            </tr>
            <tr className='bg-amber-50 font-bold'>
              <td className='p-3'>Total</td>
              <td className='p-3 text-center'>226</td>
              <td className='p-3 text-center'>100%</td>
              <td className='p-3'></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <p className='font-bold mb-2'>Why Experimental Processing at 20% Matters</p>
        <p className='text-sm'>
          The 46 experimental submissions signal Ethiopian producers&apos; rapid adoption of innovation. <Link href="/insights/anaerobic-ethiopian-coffee-processing-buyers-guide" className='text-amber-700 hover:underline'>Anaerobic and carbonic maceration coffees</Link> command significant premiums in specialty markets. Buyers looking for differentiated profiles should monitor AFCA results in this category closely.
        </p>
      </div>

      <h3 className='text-xl font-bold mt-8 mb-3'>Regional Diversity</h3>

      <p className='my-4'>
        Samples came from coffee-producing regions across Ethiopia, including:
      </p>

      <ul className='space-y-2 my-6 list-disc ml-6'>
        <li><span className='font-bold'>Southern origins:</span> <Link href="/ethiopian-coffee-yirgacheffe" className='text-amber-700 hover:underline'>Yirgacheffe</Link>, <Link href="/ethiopian-coffee-sidamo" className='text-amber-700 hover:underline'>Sidamo</Link>, <Link href="/ethiopian-coffee-guji" className='text-amber-700 hover:underline'>Guji</Link>, known for floral and fruity profiles</li>
        <li><span className='font-bold'>Western origins:</span> <Link href="/ethiopian-coffee-jimma" className='text-amber-700 hover:underline'>Jimma</Link>, <Link href="/ethiopian-coffee-limu" className='text-amber-700 hover:underline'>Limu</Link>, and Kaffa, producing balanced, sweet coffees</li>
        <li><span className='font-bold'>Eastern origins:</span> <Link href="/ethiopian-coffee-harar" className='text-amber-700 hover:underline'>Harrar</Link>, famous for bold, winey dry-processed coffees</li>
        <li><span className='font-bold'>Emerging zones:</span> Newer coffee-producing areas expanding Ethiopia&apos;s regional diversity</li>
      </ul>

      {/* SECTION 5: EVALUATION PROCESS */}
      <h2 id="evaluation-process" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBeaker className='text-amber-600' />
        5. Evaluation Process and Judging Criteria
      </h2>

      <p className='my-4'>
        AFCA&apos;s Taste of Harvest follows the <Link href="/insights/new-sca-coffee-value-assessment" className='text-amber-700 hover:underline'>SCA cupping protocol</Link>, ensuring consistent, internationally recognized evaluation standards.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-3'>Four-Step Evaluation Protocol</h3>

      <div className='space-y-6 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-3'>Step 1: Sample Preparation</h4>
          <ul className='space-y-1 text-sm ml-4'>
            <li>&#8226; Green coffee inspected for defects and moisture content</li>
            <li>&#8226; Light-to-medium roast to preserve origin characteristics</li>
            <li>&#8226; Samples coded and anonymized for blind evaluation</li>
            <li>&#8226; Water quality controlled for consistent brewing</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-3'>Step 2: Cupping Evaluation</h4>
          <ul className='space-y-1 text-sm ml-4'>
            <li>&#8226; Multiple judges evaluate each sample independently</li>
            <li>&#8226; Ten attributes scored: fragrance/aroma, flavor, aftertaste, acidity, body, balance, uniformity, sweetness, clean cup, and overall impression</li>
            <li>&#8226; Descriptive sensory notes recorded for each coffee</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-3'>Step 3: Calibration and Scoring</h4>
          <ul className='space-y-1 text-sm ml-4'>
            <li>&#8226; Individual scores compiled and averaged</li>
            <li>&#8226; Calibration sessions align judge evaluations</li>
            <li>&#8226; Statistical analysis flags outlier scores</li>
            <li>&#8226; Final scores calculated using AFCA&apos;s standardized methodology</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-3'>Step 4: Selection and Advancement</h4>
          <ul className='space-y-1 text-sm ml-4'>
            <li>&#8226; Top-scoring coffees identified (85+ points on the SCA scale qualifies as specialty grade)</li>
            <li>&#8226; Winning coffees re-cupped to confirm consistency</li>
            <li>&#8226; Up to five lots per country advance to the Regional competition</li>
            <li>&#8226; Results documented for AFCA certification</li>
          </ul>
        </div>
      </div>

      <h3 className='text-xl font-bold mt-8 mb-3'>Quality Benchmarks</h3>

      <ul className='space-y-2 my-6 list-disc ml-6 text-sm'>
        <li>Score <span className='font-bold'>85+ points</span> on the SCA cupping form (specialty grade threshold)</li>
        <li>Exceptional quality across multiple sensory attributes</li>
        <li>Consistency across cups (uniformity in blind evaluation)</li>
        <li>Free from defects and processing faults</li>
        <li>Distinctive origin character and processing quality</li>
      </ul>

      {/* SECTION 6: TWO-PHASE SYSTEM */}
      <h2 id="two-phase-system" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineArrowTrendingUp className='text-amber-600' />
        6. Two-Phase System: National and Continental Finals
      </h2>

      <p className='my-4'>
        The Taste of Harvest operates in two phases designed to identify the best coffees across the continent.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='bg-amber-50 p-6 rounded-lg border border-amber-200'>
          <h4 className='font-bold mb-3'>Phase 1: National Competition</h4>
          <ul className='space-y-2 text-sm'>
            <li>&#8226; <span className='font-bold'>226 Ethiopian samples</span> evaluated at ECTA&apos;s Coffee Training Center</li>
            <li>&#8226; Top-scoring coffees identified by AFCA quality criteria</li>
            <li>&#8226; Winners selected to advance to Phase 2</li>
            <li>&#8226; Nine countries held parallel national competitions</li>
          </ul>
        </div>

        <div className='bg-blue-50 p-6 rounded-lg border border-blue-200'>
          <h4 className='font-bold mb-3'>Phase 2: Regional Finals (Feb 2-6)</h4>
          <ul className='space-y-2 text-sm'>
            <li>&#8226; National winners from nine countries competed head-to-head</li>
            <li>&#8226; Up to five lots per country in the regional evaluation</li>
            <li>&#8226; Continental judging panel evaluated all finalists together</li>
            <li>&#8226; Winners announced at the February 6 Closing Gala</li>
            <li>&#8226; Award-winning lots receive serial numbers and AFCA certification</li>
          </ul>
        </div>
      </div>

      <h3 className='text-xl font-bold mt-8 mb-3'>Advancement Criteria</h3>

      <p className='my-4'>
        Not all national coffees advance to Phase 2. Selection considers:
      </p>

      <ul className='space-y-2 my-6 list-disc ml-6 text-sm'>
        <li><span className='font-bold'>Quality score:</span> 85+ points on the SCA scale</li>
        <li><span className='font-bold'>Distinctiveness:</span> Exceptional origin character</li>
        <li><span className='font-bold'>Consistency:</span> Uniform quality across cups</li>
        <li><span className='font-bold'>Commercial viability:</span> Sufficient volume available for sale</li>
        <li><span className='font-bold'>Category balance:</span> Representation across natural, washed, honey, and experimental</li>
      </ul>

      {/* SECTION 7: CERTIFICATION */}
      <h2 id="certification-benefits" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCheckBadge className='text-amber-600' />
        7. AFCA Certification: What Winners Receive
      </h2>

      <p className='my-4'>
        Coffees that succeed in the Regional finals receive official AFCA recognition, a credential with concrete market value.
      </p>

      <div className='space-y-4 my-6'>
        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h4 className='font-bold mb-2 text-green-900 flex items-center gap-2'>
            <HiOutlineCheckBadge />
            Serial-Numbered Certificate
          </h4>
          <p className='text-sm'>
            AFCA issues individual serial numbers and certificates to winning coffees, providing third-party validated quality documentation recognized by international specialty buyers.
          </p>
        </div>

        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h4 className='font-bold mb-2 text-blue-900 flex items-center gap-2'>
            <HiOutlineTrophy />
            Market Differentiation
          </h4>
          <p className='text-sm'>
            &quot;AFCA Taste of Harvest Winner&quot; is a marketable credential for roasters and retailers. It reduces buyer risk and justifies premium pricing, particularly when combined with <Link href="/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest" className='text-amber-700 hover:underline'>other certifications</Link>.
          </p>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold mb-2 text-amber-900 flex items-center gap-2'>
            <HiOutlineUserGroup />
            Direct Auction Access
          </h4>
          <p className='text-sm'>
            Certified coffees are listed on AFCA&apos;s auction platform with full cupping profiles, connecting producers directly with international buyers at transparent, competitive prices.
          </p>
        </div>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold mb-2'>Certification Is Harvest-Specific</p>
        <p className='text-sm'>
          As W/ro Bamlack notes, AFCA certification is valid for one year. Certificates apply to the current harvest&apos;s coffee, not the producer in general. Even award-winning producers must resubmit samples each season to maintain certified status. This ensures buyers receive fresh-crop, recently evaluated coffee.
        </p>
      </div>

      {/* SECTION 8: AUCTION PLATFORM */}
      <h2 id="auction-platform" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineChartBar className='text-amber-600' />
        8. The AFCA Auction Platform (M-Cultivo)
      </h2>

      <p className='my-4'>
        For the 2025/26 season, AFCA launched a new partnership with <a href="https://tasteofharvest.mcultivo.com/" target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:underline'>M-Cultivo</a> to power online auctions. This replaces the previous auction system with a modern platform that enables broader international participation.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-3'>How the Auction Works</h3>

      <div className='space-y-6 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-3'>1. Lot Listing</h4>
          <p className='text-sm'>
            Award-winning coffees are listed on <a href="https://tasteofharvest.mcultivo.com/" target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:underline'>tasteofharvest.mcultivo.com</a> with:
          </p>
          <ul className='space-y-1 text-sm ml-4 mt-2'>
            <li>&#8226; Competition scores and sensory descriptors</li>
            <li>&#8226; Origin data (region, producer, altitude)</li>
            <li>&#8226; Processing method and variety details</li>
            <li>&#8226; Available weight per lot</li>
            <li>&#8226; Certification serial number</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-3'>2. Buyer Registration and Bidding</h4>
          <p className='text-sm'>
            International buyers register on the platform, review lot profiles, and place bids. The system supports both manual bids and auto-bid functionality. Uganda&apos;s 2026 Robusta auction is already live on the platform, with more country auctions to follow.
          </p>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-3'>3. Price Discovery</h4>
          <p className='text-sm'>
            Competitive bidding drives prices for exceptional lots well above commodity levels. The transparent format ensures producers receive fair market value based on cup quality, not commodity markets.
          </p>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-3'>4. Scale Through ITC Partnership</h4>
          <p className='text-sm'>
            AFCA&apos;s partnership with the International Trade Centre&apos;s EU-EAC MARKUP II Programme funds online auction expansion across at least five countries, making award-winning African coffees accessible to a wider pool of international buyers.
          </p>
        </div>
      </div>

      <h3 className='text-xl font-bold mt-8 mb-3'>Auction Price Context</h3>

      <p className='my-4'>
        While prices vary by coffee quality and lot size, AFCA auction coffees achieve significant premiums over commodity market prices. For reference, Ethiopian <Link href="/insights/ethiopian-coffee-pricing-fob-guide" className='text-amber-700 hover:underline'>FOB export prices</Link> reached 423 US cents/lb in April 2025. Award-winning specialty lots at auction command additional premiums of 15-30%+ above standard specialty-grade pricing.
      </p>

      {/* SECTION 9: HOW TO PARTICIPATE */}
      <h2 id="how-to-participate" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineClipboardDocumentList className='text-amber-600' />
        9. How Ethiopian Producers Can Enter Future Competitions
      </h2>

      <h3 className='text-xl font-bold mt-6 mb-3'>Who Can Submit Samples</h3>

      <div className='grid md:grid-cols-3 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-4'>
          <h4 className='font-bold mb-2'>Coffee Producers</h4>
          <p className='text-sm text-gray-700'>Individual farmers and <Link href="/insights/ethiopian-coffee-washing-stations-buyers-guide" className='text-amber-700 hover:underline'>washing station</Link> operators producing exceptional coffee.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-4'>
          <h4 className='font-bold mb-2'>Cooperatives</h4>
          <p className='text-sm text-gray-700'>Farmer cooperatives and unions representing member producers. Ethiopia&apos;s market reforms now allow cooperatives to export directly.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-4'>
          <h4 className='font-bold mb-2'>Licensed Exporters</h4>
          <p className='text-sm text-gray-700'>Ethiopian coffee exporters submitting samples from their sourcing networks and partner producers.</p>
        </div>
      </div>

      <h3 className='text-xl font-bold mt-8 mb-3'>Submission Requirements</h3>

      <ul className='space-y-2 my-6 list-disc ml-6 text-sm'>
        <li><span className='font-bold'>Sample quantity:</span> Green coffee per submission (check AFCA&apos;s current protocol for exact weight)</li>
        <li><span className='font-bold'>Sample quality:</span> Green coffee free from major defects, properly sorted</li>
        <li><span className='font-bold'>Documentation:</span> Origin information, processing details, harvest date, producer identification</li>
        <li><span className='font-bold'>Traceability:</span> Clear documentation of coffee source (<Link href="/insights/ethiopian-coffee-traceability-guide" className='text-amber-700 hover:underline'>region, farm, cooperative</Link>)</li>
        <li><span className='font-bold'>Availability:</span> Sufficient commercial quantity if the coffee wins recognition</li>
      </ul>

      <h3 className='text-xl font-bold mt-8 mb-3'>Preparation Tips</h3>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <ol className='space-y-2 text-sm'>
          <li>1. <span className='font-bold'>Submit only exceptional lots.</span> Average production will not score competitively.</li>
          <li>2. <span className='font-bold'>Prioritize processing quality.</span> Careful harvesting, <Link href="/insights/coffee-is-processing-drying-milling" className='text-amber-700 hover:underline'>processing, and drying</Link> minimize defects.</li>
          <li>3. <span className='font-bold'>Hand-sort green coffee</span> before submission to remove visible defects.</li>
          <li>4. <span className='font-bold'>Provide complete documentation.</span> Accurate origin data strengthens the coffee&apos;s story.</li>
          <li>5. <span className='font-bold'>Enter across categories.</span> Submit washed, natural, and experimental entries to increase chances.</li>
          <li>6. <span className='font-bold'>Partner with an exporter</span> who can handle <Link href="/insights/ethiopian-coffee-export-process-buyers-guide" className='text-amber-700 hover:underline'>logistics and export documentation</Link> if the coffee sells at auction.</li>
        </ol>
      </div>

      <p className='my-4'>
        Follow <a href="https://www.instagram.com/tasteofharvest/" target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:underline'>@tasteofharvest on Instagram</a> or subscribe to AFCA&apos;s WhatsApp channel for announcements on the next competition cycle.
      </p>

      {/* SECTION 10: BUYER OPPORTUNITIES */}
      <h2 id="buyer-opportunities" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineUserGroup className='text-amber-600' />
        10. Opportunities for International Buyers
      </h2>

      <p className='my-4'>
        For specialty roasters, importers, and traders, the AFCA Taste of Harvest offers pre-vetted sourcing with built-in quality validation.
      </p>

      <h3 className='text-xl font-bold mt-6 mb-3'>Benefits for Coffee Buyers</h3>

      <div className='space-y-4 my-6'>
        <div className='border-l-4 border-amber-500 pl-4'>
          <h4 className='font-bold'>Pre-Vetted Quality</h4>
          <p className='text-sm text-gray-700'>Expert panels have already confirmed exceptional quality. Buyers can review cupping scores, sensory notes, and certification details before committing, reducing evaluation workload.</p>
        </div>
        <div className='border-l-4 border-blue-500 pl-4'>
          <h4 className='font-bold'>Transparent Pricing</h4>
          <p className='text-sm text-gray-700'>The M-Cultivo auction format provides market-driven pricing. Buyers see all bids and lot details, eliminating information asymmetry common in traditional coffee trading.</p>
        </div>
        <div className='border-l-4 border-green-500 pl-4'>
          <h4 className='font-bold'>Direct Producer Connection</h4>
          <p className='text-sm text-gray-700'>AFCA connects buyers with producers and exporters, enabling relationship-building that extends beyond a single auction purchase.</p>
        </div>
        <div className='border-l-4 border-purple-500 pl-4'>
          <h4 className='font-bold'>Marketing Narrative</h4>
          <p className='text-sm text-gray-700'>Purchasing AFCA winners provides a compelling retail story: &quot;2026 Taste of Harvest Award Winner, scored 88+.&quot; This differentiates roasters in crowded specialty markets.</p>
        </div>
        <div className='border-l-4 border-orange-500 pl-4'>
          <h4 className='font-bold'>Pan-African Sourcing</h4>
          <p className='text-sm text-gray-700'>The competition exposes buyers to exceptional coffees from nine African countries, not just Ethiopia, expanding sourcing options across the continent.</p>
        </div>
      </div>

      <h3 className='text-xl font-bold mt-8 mb-3'>How to Access AFCA Award-Winning Coffees</h3>

      <ul className='space-y-2 my-6 list-disc ml-6 text-sm'>
        <li>Register on <a href="https://tasteofharvest.mcultivo.com/" target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:underline'>tasteofharvest.mcultivo.com</a> for auction platform access and bidding</li>
        <li>Attend future <a href="https://afca.coffee/conference" target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:underline'>AFCA conferences</a> where award coffees are showcased at B2B cupping pavilions</li>
        <li>Work with <span className='font-bold'>Ethiopian exporters</span> (like Ethio Coffee Export) who participate in competitions and source from award-winning producers</li>
        <li>Monitor <a href="https://afca.coffee/" target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:underline'>AFCA communications</a> for auction dates and results</li>
      </ul>

      {/* SECTION 11: LONG-TERM IMPACT */}
      <h2 id="impact-ethiopian-coffee" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineArrowTrendingUp className='text-amber-600' />
        11. Long-Term Impact on Ethiopian Coffee
      </h2>

      <p className='my-4'>
        The 2026 Taste of Harvest and Ethiopia&apos;s hosting of the AFCC&E signal important developments for the country&apos;s coffee sector.
      </p>

      <div className='space-y-4 my-6'>
        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h4 className='font-bold mb-2 text-green-900'>Producer Incentives</h4>
          <p className='text-sm'>
            Competition premiums provide tangible rewards for quality investment. When farmers see award-winning lots sell at 2-3x commodity prices through the auction, it drives broader adoption of quality-focused harvesting and processing.
          </p>
        </div>

        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h4 className='font-bold mb-2 text-blue-900'>Quality Infrastructure</h4>
          <p className='text-sm'>
            Ethiopia&apos;s investment in the ECTA Coffee Training Center, staffed by internationally certified Q-graders, positions the country as a quality assessment hub for the African continent. Other AFCA member countries benefit from Ethiopia&apos;s training capacity.
          </p>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h4 className='font-bold mb-2 text-amber-900'>Market Reform Acceleration</h4>
          <p className='text-sm'>
            Competition success aligns with Ethiopia&apos;s broader <Link href="/insights/ecx-and-ethiopian-coffee-export" className='text-amber-700 hover:underline'>market liberalization</Link>: over 100 licensed farmer-exporters, direct cooperative exports, and private exporters operating washing stations. These reforms make award-winning coffees more accessible to international buyers.
          </p>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-2 text-gray-900'>EUDR Compliance Alignment</h4>
          <p className='text-sm'>
            The traceability documentation required for AFCA competition entries (region, farm, processing details) aligns closely with <Link href="/insights/eu-deforestation-regulation-ethiopian-coffee-compliance" className='text-amber-700 hover:underline'>EUDR compliance requirements</Link>. Ethiopia&apos;s Coffee Traceability Management System (ECTMS), launched October 2025, strengthens this alignment for EU-bound exports.
          </p>
        </div>
      </div>

      <p className='my-4'>
        As Ethiopia continues expanding its laboratory capacity, training professionals, and integrating with global auction platforms, the country solidifies its role not just as coffee&apos;s birthplace, but as a modern leader in specialty coffee quality assessment and trade.
      </p>

      {/* FAQ SECTION */}
      <section className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions About AFCA Taste of Harvest</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-gray-800 mb-2">What is the AFCA Taste of Harvest competition?</h3>
            <p className="text-sm text-gray-600">AFCA&apos;s Taste of Harvest is Africa&apos;s premier coffee quality competition. National competitions run in member countries, with top coffees advancing to a continental final at AFCA&apos;s annual conference. Certified Q-graders score all samples blindly using the SCA cupping protocol. Winners receive one-year AFCA certification with serial numbers and sell through the online auction platform.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-2">How many countries participated in the 2025/26 Taste of Harvest season?</h3>
            <p className="text-sm text-gray-600">Nine countries held national competitions: Burundi, Cameroon, DRC, Ethiopia, Kenya, Malawi, Tanzania, Uganda, and Zambia. Up to five top-scoring lots from each national competition advanced to the Regional finals held during the 22nd AFCC&E in Addis Ababa in February 2026.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-2">How many samples did Ethiopia submit to the 2026 competition?</h3>
            <p className="text-sm text-gray-600">Ethiopia submitted 226 samples across four processing categories: 100 natural (44.2%), 46 experimental (20.4%), 43 washed (19.0%), and 37 honey (16.4%). Samples came from producers, cooperatives, and exporters across the country&apos;s major growing regions.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-2">Can international buyers purchase AFCA award-winning Ethiopian coffee?</h3>
            <p className="text-sm text-gray-600">Yes. Winning lots are listed on AFCA&apos;s online auction platform (tasteofharvest.mcultivo.com) with cupping profiles, origin data, and certification serial numbers. International roasters and importers register on the platform and place competitive bids. Buyers can also work with Ethiopian exporters who source from competition-winning producers.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-2">How does the AFCA M-Cultivo auction platform work?</h3>
            <p className="text-sm text-gray-600">Award-winning coffees are listed with lot details, weight, cupping scores, and origin information. Registered buyers place bids or set auto-bids. Competitive bidding drives prices above commodity levels. AFCA&apos;s partnership with ITC&apos;s EU-EAC MARKUP II Programme supports online auction expansion across multiple African countries.</p>
          </div>
        </div>
      </section>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Competition-Grade Ethiopian Coffee</h4>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Import and Export PLC</span> sources from cooperatives and washing stations whose coffees compete at national and international levels. Our network spans Ethiopia&apos;s top growing regions with full traceability and quality documentation.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Our Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Request Samples</Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>How to Order</Link>
        </div>
      </div>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality and Evaluation</h4>
            <ul className='space-y-1 text-sm'>
              <li>&#8226; <Link href="/insights/green-coffee-quality-control-defects-grading" className='text-amber-700 hover:underline'>Green Coffee Quality Control and Grading</Link></li>
              <li>&#8226; <Link href="/insights/new-sca-coffee-value-assessment" className='text-amber-700 hover:underline'>SCA Coffee Value Assessment Guide</Link></li>
              <li>&#8226; <Link href="/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest" className='text-amber-700 hover:underline'>Ethiopian Coffee Certifications Guide</Link></li>
              <li>&#8226; <Link href="/insights/yirgacheffe-vs-sidamo-vs-guji-comparison" className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji Comparison</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Processing and Innovation</h4>
            <ul className='space-y-1 text-sm'>
              <li>&#8226; <Link href="/insights/anaerobic-ethiopian-coffee-processing-buyers-guide" className='text-amber-700 hover:underline'>Anaerobic Ethiopian Coffee Processing</Link></li>
              <li>&#8226; <Link href="/insights/washed-vs-natural-ethiopian-coffee-processing" className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee</Link></li>
              <li>&#8226; <Link href="/insights/ethiopian-coffee-washing-stations-buyers-guide" className='text-amber-700 hover:underline'>Ethiopian Coffee Washing Stations Guide</Link></li>
              <li>&#8226; <Link href="/insights/coffee-is-processing-drying-milling" className='text-amber-700 hover:underline'>Coffee Processing, Drying, and Milling</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing and Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&#8226; <Link href="/insights/ethiopian-coffee-export-process-buyers-guide" className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process Guide</Link></li>
              <li>&#8226; <Link href="/insights/ecx-and-ethiopian-coffee-export" className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export</Link></li>
              <li>&#8226; <Link href="/insights/ethiopian-coffee-pricing-fob-guide" className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing Guide</Link></li>
              <li>&#8226; <Link href="/insights/ethiopian-coffee-traceability-guide" className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Market Intelligence</h4>
            <ul className='space-y-1 text-sm'>
              <li>&#8226; <Link href="/insights/specialty-coffee-trends-2026" className='text-amber-700 hover:underline'>Specialty Coffee Trends 2026</Link></li>
              <li>&#8226; <Link href="/insights/eu-deforestation-regulation-ethiopian-coffee-compliance" className='text-amber-700 hover:underline'>EUDR Ethiopian Coffee Compliance</Link></li>
              <li>&#8226; <Link href="/insights/guide-ethiopian-coffee-origins" className='text-amber-700 hover:underline'>Guide to Ethiopian Coffee Origins</Link></li>
              <li>&#8226; <Link href="/insights/ethiopia-coffee-origin-birthplace" className='text-amber-700 hover:underline'>Ethiopia: Birthplace of Coffee</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> This guide was prepared by Ethio Coffee Import and Export PLC based on the 2026 Taste of Harvest competition, statements from Ethiopian Coffee and Tea Authority leadership, AFCA&apos;s official program documentation, and our direct involvement in Ethiopia&apos;s specialty coffee sector.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

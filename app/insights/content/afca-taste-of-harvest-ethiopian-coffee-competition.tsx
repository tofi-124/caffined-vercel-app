"use client"

import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { 
  HiOutlineCalendarDays, 
  HiOutlineTrophy,
  HiOutlineBeaker,
  HiOutlineAcademicCap,
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
        Everything Ethiopian coffee producers, exporters, and international buyers need to know about the AFCA Taste of Harvest competition, Ethiopia's modern coffee laboratory facilities, the certification process, auction opportunities, and how participating in African coffee quality competitions enhances market access and premiums for exceptional Ethiopian coffees.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Ethiopia's <a href="https://afca.coffee/" target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:underline'>AFCA</a> Taste of Harvest competition showcases the country's exceptional coffee quality and modern laboratory capabilities to the global specialty coffee market.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='AFCA Taste of Harvest Ethiopian coffee competition quality grading laboratory'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>
      <p className='my-2 text-gray-600 font-inconsolata'>
        <HiOutlineCalendarDays className='inline mr-2' />
        {date}
      </p>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Coffee Competitions / Quality Recognition / African Coffee Markets</span>
      </div>

      {/* INTRODUCTION */}
      <p className='my-4'>
        In January 2026, Ethiopia hosted a major milestone event for African coffee: the <span className='font-bold'>AFCA (African Fine Coffees Association) Conference and Exhibition</span>, featuring the prestigious <span className='font-bold'>Taste of Harvest</span> competition. This event brought together coffee producers, exporters, buyers, and industry experts from across Africa and around the world to celebrate and evaluate the continent's finest coffees.
      </p>

      <p className='my-4'>
        For Ethiopian coffee producers and exporters, the AFCA Taste of Harvest competition represents a critical opportunity: to showcase Ethiopia's exceptional coffee quality, gain international recognition through AFCA certification, and access premium auction markets that reward excellence with higher prices.
      </p>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <p className='font-bold text-lg mb-3 text-green-900 flex items-center gap-2'>
          <HiOutlineTrophy className='text-2xl' />
          Why This Competition Matters
        </p>
        <p className='mb-3'>
          Dr. Adunya Debela, Chief Director of the Ethiopian Coffee and Tea Authority, emphasizes that the Taste of Harvest competition is not just about winning awards-it's about demonstrating Ethiopia's:
        </p>
        <ul className='space-y-2 text-sm'>
          <li>• <span className='font-bold'>World-class coffee quality</span> across multiple processing methods</li>
          <li>• <span className='font-bold'>Modern laboratory facilities</span> equipped with state-of-the-art equipment</li>
          <li>• <span className='font-bold'>Highly trained coffee professionals</span> recognized internationally</li>
          <li>• <span className='font-bold'>Leadership role</span> in African coffee production and trade</li>
          <li>• <span className='font-bold'>Capacity to compete</span> with the best specialty coffees globally</li>
        </ul>
      </div>

      <p className='my-4'>
        This comprehensive guide explores everything you need to know about AFCA's Taste of Harvest competition, Ethiopia's participation, the certification process, and how winning recognition translates into market opportunities for Ethiopian coffee.
      </p>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href="#what-is-afca" className='text-blue-600 hover:underline'>1. What Is AFCA and the Taste of Harvest Competition?</a></li>
          <li><a href="#ethiopia-leadership" className='text-blue-600 hover:underline'>2. Ethiopia's Leadership in African Coffee</a></li>
          <li><a href="#2026-competition" className='text-blue-600 hover:underline'>3. The 2026 AFCA Taste of Harvest Competition in Ethiopia</a></li>
          <li><a href="#coffee-samples" className='text-blue-600 hover:underline'>4. Competition Coffee Samples: Processing Methods Represented</a></li>
          <li><a href="#evaluation-process" className='text-blue-600 hover:underline'>5. Competition Evaluation Process and Judging Criteria</a></li>
          <li><a href="#modern-laboratory" className='text-blue-600 hover:underline'>6. Ethiopia's Modern Coffee Laboratory and Training Center</a></li>
          <li><a href="#two-phase-system" className='text-blue-600 hover:underline'>7. Two-Phase Competition System: National and AFCA Levels</a></li>
          <li><a href="#certification-benefits" className='text-blue-600 hover:underline'>8. AFCA Certification: Benefits and Market Access</a></li>
          <li><a href="#auction-opportunities" className='text-blue-600 hover:underline'>9. AFCA Direct Auction Platform for Award-Winning Coffees</a></li>
          <li><a href="#how-to-participate" className='text-blue-600 hover:underline'>10. How Ethiopian Producers Can Participate in Future Competitions</a></li>
          <li><a href="#buyer-opportunities" className='text-blue-600 hover:underline'>11. Opportunities for International Coffee Buyers</a></li>
          <li><a href="#impact-ethiopian-coffee" className='text-blue-600 hover:underline'>12. Long-Term Impact on Ethiopian Coffee Industry</a></li>
        </ol>
      </div>

      {/* SECTION 1: WHAT IS AFCA */}
      <h3 id="what-is-afca" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineGlobeAlt className='text-amber-600' />
        1. What Is AFCA and the Taste of Harvest Competition?
      </h3>

      <h4 className='text-xl font-bold mt-6 mb-3'>African Fine Coffees Association (AFCA)</h4>

      <p className='my-4'>
        <span className='font-bold'>AFCA</span> (formerly the Inter-African Coffee Organisation - IACO) is the premier organization representing African coffee-producing countries. With 25 member nations, AFCA works to:
      </p>

      <ul className='space-y-2 my-6 list-disc ml-6'>
        <li>Promote African coffee quality and market competitiveness</li>
        <li>Facilitate knowledge sharing and capacity building across member countries</li>
        <li>Advocate for African coffee producers in global markets</li>
        <li>Organize annual conferences, exhibitions, and quality competitions</li>
        <li>Connect African coffee producers with international buyers</li>
        <li>Support sustainability and development in African coffee sectors</li>
      </ul>

      <h4 className='text-xl font-bold mt-8 mb-3'>The Taste of Harvest Competition</h4>

      <p className='my-4'>
        <span className='font-bold'>Taste of Harvest</span> is AFCA's flagship coffee quality competition, held annually to:
      </p>

      <div className='space-y-4 my-6'>
        <div className='bg-purple-50 p-5 rounded-lg border border-purple-200'>
          <h5 className='font-bold mb-2 text-purple-900'>Identify Excellence</h5>
          <p className='text-sm'>Discover and recognize the finest coffees produced across Africa in each harvest season, showcasing the diversity and quality potential of African origins.</p>
        </div>

        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold mb-2 text-blue-900'>Professional Evaluation</h5>
          <p className='text-sm'>Subject coffee samples to rigorous evaluation by international coffee experts, Q graders, and sensory professionals using standardized specialty coffee protocols.</p>
        </div>

        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-2 text-green-900'>Market Access</h5>
          <p className='text-sm'>Provide winning coffees with direct access to AFCA's auction platform, connecting award-winning lots with premium buyers willing to pay for exceptional quality.</p>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold mb-2 text-amber-900'>Recognition and Certification</h5>
          <p className='text-sm'>Issue official AFCA certification to top-scoring coffees, providing producers with internationally recognized quality credentials that enhance marketability.</p>
        </div>
      </div>

      <p className='my-4'>
        The competition is open to coffee producers, cooperatives, and exporters from AFCA member countries, with samples evaluated blindly to ensure objectivity and fairness.
      </p>

      {/* SECTION 2: ETHIOPIA'S LEADERSHIP */}
      <h3 id="ethiopia-leadership" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineStar className='text-amber-600' />
        2. Ethiopia's Leadership in African Coffee
      </h3>

      <p className='my-4'>
        Ethiopia holds a unique and influential position within AFCA and the broader African coffee sector.
      </p>

      <h4 className='text-xl font-bold mt-6 mb-3'>Ethiopia's AFCA Leadership Role</h4>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='mb-3'>As Dr. Adunya Debela notes, Ethiopia:</p>
        <ul className='space-y-2 text-sm'>
          <li>• Holds <span className='font-bold'>decisive influence</span> among AFCA's 25 member countries due to its production volume and quality reputation</li>
          <li>• Has <span className='font-bold'>repeatedly hosted</span> major international coffee conferences (AFCA, IACO, and other events) with exemplary Ethiopian hospitality</li>
          <li>• Serves as a <span className='font-bold'>knowledge hub</span> for African coffee, with training facilities and expertise that benefit other member nations</li>
          <li>• Represents the <span className='font-bold'>birthplace of Arabica coffee</span>, giving Ethiopia unique credibility and heritage in global coffee discussions</li>
          <li>• Maintains <span className='font-bold'>active participation</span> in AFCA governance, advocacy, and program development</li>
        </ul>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-3'>Why Ethiopia Is an Ideal Host for AFCA Events</h4>

      <p className='my-4'>
        Dr. Adunya emphasizes that Ethiopia-particularly Addis Ababa-offers exceptional conditions for hosting international coffee events:
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-4'>
          <h5 className='font-bold mb-2'>Infrastructure and Hospitality</h5>
          <ul className='space-y-1 text-sm'>
            <li>• Modern conference facilities</li>
            <li>• International airport connections</li>
            <li>• Hotel and accommodation capacity</li>
            <li>• Renowned Ethiopian hospitality culture</li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-4'>
          <h5 className='font-bold mb-2'>Coffee-Specific Advantages</h5>
          <ul className='space-y-1 text-sm'>
            <li>• State-of-the-art coffee training center</li>
            <li>• Modern laboratory facilities</li>
            <li>• Highly experienced coffee professionals</li>
            <li>• Access to diverse Ethiopian coffee samples</li>
          </ul>
        </div>
      </div>

      <p className='my-4'>
        Addis Ababa's nickname-which means "New Flower"-symbolically represents Ethiopia's coffee industry: traditional yet constantly renewing and modernizing.
      </p>

      {/* SECTION 3: 2026 COMPETITION */}
      <h3 id="2026-competition" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineTrophy className='text-amber-600' />
        3. The 2026 AFCA Taste of Harvest Competition in Ethiopia
      </h3>

      <p className='my-4'>
        The January 2026 Taste of Harvest competition marked a significant moment for Ethiopian coffee and AFCA.
      </p>

      <h4 className='text-xl font-bold mt-6 mb-3'>Competition Venue and Facilities</h4>

      <p className='my-4'>
        The competition was hosted at the <span className='font-bold'>Ethiopian Coffee and Tea Authority's Coffee Training Center</span> in Addis Ababa, featuring:
      </p>

      <div className='space-y-3 my-6'>
        <div className='bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500'>
          <p className='text-sm'><span className='font-bold'>Modern Cupping Laboratory:</span> Equipped with professional cupping tables, roasting equipment, water quality control systems, and temperature-controlled environments meeting international standards</p>
        </div>
        <div className='bg-green-50 p-4 rounded-lg border-l-4 border-green-500'>
          <p className='text-sm'><span className='font-bold'>Expert Panel:</span> More than eight highly experienced coffee professionals from Ethiopia and international origins conducting blind evaluations</p>
        </div>
        <div className='bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500'>
          <p className='text-sm'><span className='font-bold'>Sample Preparation Facilities:</span> Professional green coffee sorting, roasting, and preparation stations ensuring standardized evaluation conditions</p>
        </div>
        <div className='bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500'>
          <p className='text-sm'><span className='font-bold'>Data Management Systems:</span> Digital scoring systems and result tracking meeting AFCA and international competition standards</p>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-3'>Judging Panel Composition</h4>

      <p className='my-4'>
        The competition featured a diverse panel of coffee experts including:
      </p>

      <ul className='space-y-2 my-6 list-disc ml-6 text-sm'>
        <li><span className='font-bold'>Ethiopian Q Graders and Coffee Professionals:</span> Highly trained sensory evaluators from Ethiopia's coffee sector with international certifications</li>
        <li><span className='font-bold'>International Coffee Experts:</span> Judges from AFCA member countries and global specialty coffee markets bringing diverse perspectives</li>
        <li><span className='font-bold'>AFCA Representatives:</span> Organization officials ensuring compliance with Taste of Harvest protocols and standards</li>
        <li><span className='font-bold'>Buyer Representatives:</span> Potential purchasers from international markets evaluating coffees for commercial potential</li>
      </ul>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0 mt-1' />
          <span>Dr. Adunya emphasized that this competition provided an invaluable opportunity to showcase Ethiopia's "well-known experts that we have nurtured and developed," demonstrating to the international community that Ethiopia possesses world-class coffee evaluation capacity.</span>
        </p>
      </div>

      {/* SECTION 4: COFFEE SAMPLES */}
      <h3 id="coffee-samples" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineChartBar className='text-amber-600' />
        4. Competition Coffee Samples: Processing Methods Represented
      </h3>

      <p className='my-4'>
        The 2026 competition featured an impressive diversity of Ethiopian coffee samples, showcasing the country's innovation in processing methods and regional variety.
      </p>

      <h4 className='text-xl font-bold mt-6 mb-3'>Sample Submission Statistics</h4>

      <p className='my-4'>
        According to W/ro Bamlack Melese, AFCA Taste of Harvest Program Supervision Coordinator, the competition received coffee samples from producers, exporters, and cooperatives across Ethiopian coffee-producing regions:
      </p>

      <div className='bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-lg my-6 border border-amber-300'>
        <h4 className='font-bold text-lg mb-4 text-amber-900'>Total Samples Submitted: 226 Ethiopian Coffees</h4>
        
        <div className='grid md:grid-cols-2 gap-4'>
          <div className='bg-white p-4 rounded-lg shadow-sm'>
            <div className='flex items-center justify-between mb-2'>
              <span className='font-bold text-2xl text-amber-700'>100</span>
              <span className='text-xs uppercase bg-amber-200 px-2 py-1 rounded'>44.2%</span>
            </div>
            <h5 className='font-bold text-gray-800'>Natural Processed</h5>
            <p className='text-xs text-gray-600 mt-1'>Sun-dried with cherry intact, showcasing Ethiopia's traditional processing heritage</p>
          </div>

          <div className='bg-white p-4 rounded-lg shadow-sm'>
            <div className='flex items-center justify-between mb-2'>
              <span className='font-bold text-2xl text-blue-700'>43</span>
              <span className='text-xs uppercase bg-blue-200 px-2 py-1 rounded'>19.0%</span>
            </div>
            <h5 className='font-bold text-gray-800'>Washed Processed</h5>
            <p className='text-xs text-gray-600 mt-1'>Fully washed coffees highlighting clean, bright flavor profiles</p>
          </div>

          <div className='bg-white p-4 rounded-lg shadow-sm'>
            <div className='flex items-center justify-between mb-2'>
              <span className='font-bold text-2xl text-orange-700'>37</span>
              <span className='text-xs uppercase bg-orange-200 px-2 py-1 rounded'>16.4%</span>
            </div>
            <h5 className='font-bold text-gray-800'>Honey Processed</h5>
            <p className='text-xs text-gray-600 mt-1'>Semi-washed coffees with varying mucilage levels for balanced sweetness</p>
          </div>

          <div className='bg-white p-4 rounded-lg shadow-sm'>
            <div className='flex items-center justify-between mb-2'>
              <span className='font-bold text-2xl text-purple-700'>46</span>
              <span className='text-xs uppercase bg-purple-200 px-2 py-1 rounded'>20.4%</span>
            </div>
            <h5 className='font-bold text-gray-800'>Experimental Processed</h5>
            <p className='text-xs text-gray-600 mt-1'>Innovative methods including anaerobic, carbonic maceration, and hybrid processes</p>
          </div>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-3'>Regional Diversity</h4>

      <p className='my-4'>
        Samples were submitted from coffee-producing regions, woredas (districts), and kebeles (villages) across Ethiopia, representing:
      </p>

      <ul className='space-y-2 my-6 list-disc ml-6'>
        <li><span className='font-bold'>Southern regions:</span> Yirgacheffe, Sidamo, Guji, and surrounding areas known for floral, fruity profiles</li>
        <li><span className='font-bold'>Western regions:</span> Jimma, Limu, and Kaffa areas producing balanced, sweet coffees</li>
        <li><span className='font-bold'>Eastern regions:</span> Harrar and surrounding areas famous for distinctive dry-processed coffees</li>
        <li><span className='font-bold'>Emerging origins:</span> Newer coffee-producing zones expanding Ethiopia's regional diversity</li>
      </ul>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <p className='font-bold mb-2'>Why Processing Diversity Matters:</p>
        <p className='text-sm'>
          The wide range of processing methods (natural, washed, honey, experimental) demonstrates Ethiopian producers' increasing sophistication and responsiveness to specialty market demands. Experimental processing-representing 20% of submissions-shows Ethiopia's commitment to innovation while maintaining traditional quality standards.
        </p>
      </div>

      {/* SECTION 5: EVALUATION PROCESS */}
      <h3 id="evaluation-process" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBeaker className='text-amber-600' />
        5. Competition Evaluation Process and Judging Criteria
      </h3>

      <p className='my-4'>
        AFCA's Taste of Harvest competition follows rigorous, internationally recognized evaluation protocols to ensure fairness and credibility.
      </p>

      <h4 className='text-xl font-bold mt-6 mb-3'>Evaluation Protocol</h4>

      <div className='space-y-6 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold mb-3'>Step 1: Sample Preparation</h5>
          <ul className='space-y-1 text-sm ml-4'>
            <li>• Green coffee samples inspected for defects and moisture content</li>
            <li>• Standardized roasting (typically light-to-medium) to preserve origin characteristics</li>
            <li>• Samples coded and anonymized to ensure blind evaluation</li>
            <li>• Water quality controlled for consistent brewing conditions</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold mb-3'>Step 2: Cupping Evaluation</h5>
          <ul className='space-y-1 text-sm ml-4'>
            <li>• Multiple judges evaluate each sample independently</li>
            <li>• Standardized cupping protocol (SCA or similar) applied consistently</li>
            <li>• Sensory attributes scored: aroma, flavor, aftertaste, acidity, body, balance, sweetness, cleanliness, uniformity</li>
            <li>• Descriptive notes recorded for each coffee</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold mb-3'>Step 3: Scoring and Calibration</h5>
          <ul className='space-y-1 text-sm ml-4'>
            <li>• Individual judge scores compiled and averaged</li>
            <li>• Calibration sessions held to align judge evaluations</li>
            <li>• Statistical analysis applied to identify outliers</li>
            <li>• Final scores calculated using standardized methodology</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold mb-3'>Step 4: Selection and Recognition</h5>
          <ul className='space-y-1 text-sm ml-4'>
            <li>• Top-scoring coffees identified based on quality thresholds</li>
            <li>• Winning coffees re-cupped to confirm quality and consistency</li>
            <li>• Producers notified and samples prepared for second competition phase</li>
            <li>• Results documented for AFCA certification process</li>
          </ul>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-3'>Quality Benchmarks</h4>

      <p className='my-4'>
        While specific scoring thresholds vary by competition year, AFCA typically recognizes coffees that:
      </p>

      <ul className='space-y-2 my-6 list-disc ml-6 text-sm'>
        <li>Score <span className='font-bold'>85+ points</span> (specialty grade) on standardized cupping protocols</li>
        <li>Demonstrate <span className='font-bold'>exceptional quality</span> in multiple sensory attributes</li>
        <li>Show <span className='font-bold'>consistency across cups</span> (uniformity in evaluation)</li>
        <li>Are <span className='font-bold'>free from defects</span> and processing faults</li>
        <li>Represent <span className='font-bold'>distinctive origin character</span> and processing quality</li>
      </ul>

      {/* SECTION 6: MODERN LABORATORY */}
      <h3 id="modern-laboratory" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBeaker className='text-amber-600' />
        6. Ethiopia's Modern Coffee Laboratory and Training Center
      </h3>

      <p className='my-4'>
        One of the competition's key objectives was showcasing Ethiopia's significantly upgraded coffee quality infrastructure.
      </p>

      <h4 className='text-xl font-bold mt-6 mb-3'>Laboratory Modernization</h4>

      <p className='my-4'>
        Dr. Adunya Debela highlights that Ethiopia has invested heavily in "modernizing its laboratory and owning many species," referring to:
      </p>

      <div className='space-y-4 my-6'>
        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold mb-2 text-blue-900'>State-of-the-Art Equipment</h5>
          <p className='text-sm mb-2'>The Ethiopian Coffee Training Center now features:</p>
          <ul className='space-y-1 text-sm ml-4'>
            <li>• Professional sample roasting equipment (Ikawa, Probat, or similar)</li>
            <li>• Standardized cupping laboratories with temperature-controlled environments</li>
            <li>• Water quality testing and treatment systems</li>
            <li>• Green coffee moisture and density analyzers</li>
            <li>• Colorimetric analysis equipment</li>
            <li>• Digital data collection and scoring systems</li>
          </ul>
        </div>

        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-2 text-green-900'>Genetic Diversity and Variety Collection</h5>
          <p className='text-sm mb-2'>"Owning many species" refers to Ethiopia's:</p>
          <ul className='space-y-1 text-sm ml-4'>
            <li>• Extensive coffee variety collection and germplasm banks</li>
            <li>• Research facilities studying Ethiopian heirloom varieties</li>
            <li>• Documentation of regional coffee genetic diversity</li>
            <li>• Capacity to analyze and identify variety-specific characteristics</li>
          </ul>
        </div>

        <div className='bg-purple-50 p-5 rounded-lg border border-purple-200'>
          <h5 className='font-bold mb-2 text-purple-900'>Training and Capacity Building</h5>
          <p className='text-sm mb-2'>The center serves as a hub for:</p>
          <ul className='space-y-1 text-sm ml-4'>
            <li>• Q Grader and sensory training courses</li>
            <li>• Producer education on quality improvement</li>
            <li>• Exporter training on grading and quality control</li>
            <li>• International workshops and knowledge exchange</li>
          </ul>
        </div>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium'>
          <span className='font-bold'>Strategic Importance:</span> These laboratory and training facilities position Ethiopia not just as a coffee producer, but as a coffee quality leader capable of setting standards and educating the broader African and global coffee community.
        </p>
      </div>

      {/* SECTION 7: TWO-PHASE SYSTEM */}
      <h3 id="two-phase-system" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineArrowTrendingUp className='text-amber-600' />
        7. Two-Phase Competition System: National and AFCA Levels
      </h3>

      <p className='my-4'>
        The AFCA Taste of Harvest operates as a two-phase competition designed to identify the very best coffees across Africa.
      </p>

      <h4 className='text-xl font-bold mt-6 mb-3'>Phase 1: National Competition (January 2026)</h4>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h5 className='font-bold mb-3'>What Happened:</h5>
        <ul className='space-y-2 text-sm'>
          <li>• <span className='font-bold'>226 Ethiopian coffee samples</span> were evaluated in Addis Ababa</li>
          <li>• <span className='font-bold'>Top-scoring coffees</span> were identified based on AFCA quality criteria</li>
          <li>• <span className='font-bold'>Winning samples</span> were selected to advance to Phase 2</li>
          <li>• <span className='font-bold'>Producers were notified</span> and prepared for continental competition</li>
        </ul>
        
        <p className='mt-3 text-sm italic'>
          This phase served as Ethiopia's internal selection process, ensuring only the country's finest coffees would represent Ethiopia in the broader AFCA competition.
        </p>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-3'>Phase 2: AFCA Continental Competition (February 2026)</h4>

      <div className='bg-blue-50 p-6 rounded-lg my-6 border border-blue-200'>
        <h5 className='font-bold mb-3'>What Happens Next:</h5>
        <ul className='space-y-2 text-sm'>
          <li>• <span className='font-bold'>Top Ethiopian coffees</span> from Phase 1 compete against winning coffees from other AFCA member countries</li>
          <li>• <span className='font-bold'>Continental judging panel</span> evaluates all national winners together</li>
          <li>• <span className='font-bold'>Overall AFCA winners</span> are determined across processing categories and origin types</li>
          <li>• <span className='font-bold'>Winning coffees receive serial numbers</span> and official AFCA recognition</li>
          <li>• <span className='font-bold'>Award-winning lots</span> gain access to AFCA's direct auction platform</li>
        </ul>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-3'>Progression Criteria</h4>

      <p className='my-4'>
        Not all coffees advance from Phase 1 to Phase 2. Selection typically considers:
      </p>

      <ul className='space-y-2 my-6 list-disc ml-6 text-sm'>
        <li><span className='font-bold'>Minimum quality score:</span> Usually 85+ points (specialty grade)</li>
        <li><span className='font-bold'>Distinctiveness:</span> Coffees demonstrating exceptional origin character</li>
        <li><span className='font-bold'>Consistency:</span> Samples showing uniformity across multiple cups</li>
        <li><span className='font-bold'>Commercial viability:</span> Sufficient volume available for sale</li>
        <li><span className='font-bold'>Processing category balance:</span> Representation across natural, washed, honey, and experimental categories</li>
      </ul>

      {/* SECTION 8: CERTIFICATION BENEFITS */}
      <h3 id="certification-benefits" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineCheckBadge className='text-amber-600' />
        8. AFCA Certification: Benefits and Market Access
      </h3>

      <p className='my-4'>
        Coffees that succeed in Phase 2 receive official AFCA recognition and certification-a credential with significant market value.
      </p>

      <h4 className='text-xl font-bold mt-6 mb-3'>What AFCA Certification Provides</h4>

      <div className='space-y-4 my-6'>
        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-2 text-green-900 flex items-center gap-2'>
            <HiOutlineCheckBadge />
            Official Quality Recognition
          </h5>
          <p className='text-sm'>
            AFCA issues serial numbers and certificates to winning coffees, providing internationally recognized documentation of exceptional quality evaluated by expert panels using standardized protocols.
          </p>
        </div>

        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold mb-2 text-blue-900 flex items-center gap-2'>
            <HiOutlineTrophy />
            Market Differentiation
          </h5>
          <p className='text-sm'>
            Certified coffees stand out in crowded specialty markets, providing buyers with third-party validated quality assurance that justifies premium pricing and reduces purchasing risk.
          </p>
        </div>

        <div className='bg-purple-50 p-5 rounded-lg border border-purple-200'>
          <h5 className='font-bold mb-2 text-purple-900 flex items-center gap-2'>
            <HiOutlineUserGroup />
            Direct Buyer Access
          </h5>
          <p className='text-sm'>
            AFCA connects certified coffee producers directly with international buyers through the organization's auction platform and buyer network, bypassing traditional intermediaries.
          </p>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold mb-2 text-amber-900 flex items-center gap-2'>
            <HiOutlineLightBulb />
            Marketing and Storytelling
          </h5>
          <p className='text-sm'>
            Winning producers gain compelling marketing narratives ("AFCA Award Winner") that resonate with specialty roasters and consumers seeking exceptional, story-driven coffees.
          </p>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-3'>Certification Validity Period</h4>

      <p className='my-4'>
        As W/ro Bamlack notes, <span className='font-bold'>AFCA certification is valid for one year</span>. This means:
      </p>

      <ul className='space-y-2 my-6 list-disc ml-6 text-sm'>
        <li>Certificates apply to specific harvest year coffees (e.g., 2025/2026 harvest)</li>
        <li>Producers must resubmit samples each year to maintain recognition</li>
        <li>Certification ensures buyers receive recently harvested, fresh-crop coffee</li>
        <li>Annual competitions maintain high standards and competitive incentives</li>
      </ul>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold mb-2'>Important Note:</p>
        <p className='text-sm'>
          The one-year validity means AFCA certification is harvest-specific, not producer-specific. Even award-winning producers must demonstrate continued quality excellence each season to maintain certified status.
        </p>
      </div>

      {/* SECTION 9: AUCTION OPPORTUNITIES */}
      <h3 id="auction-opportunities" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineChartBar className='text-amber-600' />
        9. AFCA Direct Auction Platform for Award-Winning Coffees
      </h3>

      <p className='my-4'>
        One of the most valuable benefits of winning AFCA recognition is direct access to the organization's auction platform.
      </p>

      <h4 className='text-xl font-bold mt-6 mb-3'>How AFCA Auctions Work</h4>

      <div className='space-y-6 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold mb-3'>1. Auction Listing</h5>
          <p className='text-sm'>
            Award-winning coffees are listed on AFCA's auction platform with detailed profiles including:
          </p>
          <ul className='space-y-1 text-sm ml-4 mt-2'>
            <li>• Competition scores and sensory descriptors</li>
            <li>• Origin information (region, producer, altitude)</li>
            <li>• Processing method and variety details</li>
            <li>• Available quantity and lot size</li>
            <li>• Certification serial number</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold mb-3'>2. Buyer Participation</h5>
          <p className='text-sm'>
            International specialty coffee buyers-roasters, importers, and traders-access the platform to:
          </p>
          <ul className='space-y-1 text-sm ml-4 mt-2'>
            <li>• Review detailed coffee profiles and cupping notes</li>
            <li>• Request samples for evaluation (often available)</li>
            <li>• Submit bids or purchase offers</li>
            <li>• Communicate directly with producers/exporters</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold mb-3'>3. Price Discovery</h5>
          <p className='text-sm'>
            Auction format allows true market-based pricing:
          </p>
          <ul className='space-y-1 text-sm ml-4 mt-2'>
            <li>• Competitive bidding drives prices up for exceptional lots</li>
            <li>• Transparency ensures producers receive fair market value</li>
            <li>• Premium prices reflect quality, not just commodity markets</li>
            <li>• Direct sales reduce intermediary margins</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold mb-3'>4. Transaction Facilitation</h5>
          <p className='text-sm'>
            AFCA supports the sales process by:
          </p>
          <ul className='space-y-1 text-sm ml-4 mt-2'>
            <li>• Connecting buyers and sellers</li>
            <li>• Providing platform infrastructure and trust mechanisms</li>
            <li>• Offering guidance on export logistics and documentation</li>
            <li>• Monitoring transactions to ensure successful completion</li>
          </ul>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-3'>Historical Auction Results</h4>

      <p className='my-4'>
        While specific pricing varies by year and coffee quality, AFCA auction coffees historically achieve:
      </p>

      <ul className='space-y-2 my-6 list-disc ml-6'>
        <li><span className='font-bold'>Significant premiums</span> over commodity market prices (C market)</li>
        <li><span className='font-bold'>Price ranges</span> typically $4-15+ per pound FOB, depending on quality and rarity</li>
        <li><span className='font-bold'>Record prices</span> for exceptional micro-lots exceeding $20+ per pound</li>
        <li><span className='font-bold'>Consistent demand</span> from specialty roasters seeking award-winning coffees</li>
      </ul>

      {/* SECTION 10: HOW TO PARTICIPATE */}
      <h3 id="how-to-participate" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineClipboardDocumentList className='text-amber-600' />
        10. How Ethiopian Producers Can Participate in Future Competitions
      </h3>

      <p className='my-4'>
        The 2026 competition demonstrates that AFCA Taste of Harvest is open to a wide range of Ethiopian coffee stakeholders.
      </p>

      <h4 className='text-xl font-bold mt-6 mb-3'>Who Can Submit Samples</h4>

      <p className='my-4'>
        According to the competition coordinator, submissions were accepted from:
      </p>

      <div className='grid md:grid-cols-3 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
          <h5 className='font-bold mb-2'>Coffee Producers</h5>
          <p className='text-sm text-gray-700'>Individual farmers, farm owners, and estate operators producing exceptional coffee can submit samples directly.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
          <h5 className='font-bold mb-2'>Cooperatives</h5>
          <p className='text-sm text-gray-700'>Farmer cooperatives and unions representing member producers can submit samples from collective production.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
          <h5 className='font-bold mb-2'>Coffee Exporters</h5>
          <p className='text-sm text-gray-700'>Licensed Ethiopian coffee exporters can submit samples from their sourcing networks and partner producers.</p>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-3'>Submission Requirements</h4>

      <p className='my-4'>
        While specific requirements may vary by competition year, typical submission criteria include:
      </p>

      <ul className='space-y-2 my-6 list-disc ml-6 text-sm'>
        <li><span className='font-bold'>Sample quantity:</span> Usually 5-10 kg of green coffee per submission</li>
        <li><span className='font-bold'>Sample quality:</span> Green coffee free from major defects, properly sorted</li>
        <li><span className='font-bold'>Documentation:</span> Origin information, processing details, harvest date, producer identification</li>
        <li><span className='font-bold'>Traceability:</span> Clear documentation of coffee source (region, farm, cooperative)</li>
        <li><span className='font-bold'>Availability:</span> Sufficient quantity available for sale if coffee wins recognition</li>
        <li><span className='font-bold'>Registration fees:</span> Nominal fees may apply to cover evaluation costs</li>
      </ul>

      <h4 className='text-xl font-bold mt-8 mb-3'>Preparation Tips for Success</h4>

      <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
        <h5 className='font-bold mb-3'>Maximizing Competition Success:</h5>
        <ol className='space-y-2 text-sm'>
          <li>1. <span className='font-bold'>Select your best coffees:</span> Submit only exceptional lots, not average production</li>
          <li>2. <span className='font-bold'>Ensure proper processing:</span> Careful harvesting, processing, and drying to minimize defects</li>
          <li>3. <span className='font-bold'>Prepare samples carefully:</span> Hand-sort green coffee to remove defects before submission</li>
          <li>4. <span className='font-bold'>Provide accurate information:</span> Complete documentation helps judges understand your coffee's story</li>
          <li>5. <span className='font-bold'>Consider processing diversity:</span> Submit across multiple processing categories (washed, natural, experimental)</li>
          <li>6. <span className='font-bold'>Coordinate with exporters:</span> If you're a producer, partner with exporters who can facilitate submission and potential sales</li>
        </ol>
      </div>

      {/* SECTION 11: BUYER OPPORTUNITIES */}
      <h3 id="buyer-opportunities" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineUserGroup className='text-amber-600' />
        11. Opportunities for International Coffee Buyers
      </h3>

      <p className='my-4'>
        For specialty coffee roasters, importers, and traders, AFCA's Taste of Harvest competition offers valuable sourcing opportunities.
      </p>

      <h4 className='text-xl font-bold mt-6 mb-3'>Benefits for Coffee Buyers</h4>

      <div className='space-y-4 my-6'>
        <div className='border-l-4 border-amber-500 pl-4'>
          <h5 className='font-bold'>Pre-Vetted Quality</h5>
          <p className='text-sm text-gray-700'>Expert panels have already evaluated and confirmed exceptional quality, reducing buyer risk and cuppingworkload.</p>
        </div>
        <div className='border-l-4 border-blue-500 pl-4'>
          <h5 className='font-bold'>Transparent Information</h5>
          <p className='text-sm text-gray-700'>Detailed profiles include sensory notes, scores, origin data, and processing information-all the details buyers need for informed decisions.</p>
        </div>
        <div className='border-l-4 border-green-500 pl-4'>
          <h5 className='font-bold'>Direct Sourcing</h5>
          <p className='text-sm text-gray-700'>AFCA platform connects buyers directly with producers/exporters, enabling relationship-building and potentially better pricing through reduced intermediaries.</p>
        </div>
        <div className='border-l-4 border-purple-500 pl-4'>
          <h5 className='font-bold'>Unique Marketing Story</h5>
          <p className='text-sm text-gray-700'>Purchasing AFCA award-winning coffees provides compelling narratives for retail customers: "AFCA Gold Winner, 2026 Taste of Harvest."</p>
        </div>
        <div className='border-l-4 border-orange-500 pl-4'>
          <h5 className='font-bold'>African Origin Diversity</h5>
          <p className='text-sm text-gray-700'>Competition exposes buyers to exceptional coffees from across AFCA member countries, not just Ethiopia, expanding sourcing options.</p>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-3'>How to Access AFCA Auction Coffees</h4>

      <p className='my-4'>
        International buyers interested in purchasing award-winning coffees can:
      </p>

      <ul className='space-y-2 my-6 list-disc ml-6 text-sm'>
        <li>Contact <span className='font-bold'>AFCA directly</span> to register for auction platform access</li>
        <li>Attend <span className='font-bold'>AFCA conferences and exhibitions</span> where award coffees are showcased</li>
        <li>Work with <span className='font-bold'>Ethiopian exporters</span> (like Ethio Coffee Export) who participate in competitions and have access to award-winning lots</li>
        <li>Monitor <span className='font-bold'>AFCA communications</span> (website, newsletters) announcing auction dates and participating coffees</li>
      </ul>

      {/* SECTION 12: LONG-TERM IMPACT */}
      <h3 id="impact-ethiopian-coffee" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineArrowTrendingUp className='text-amber-600' />
        12. Long-Term Impact on Ethiopian Coffee Industry
      </h3>

      <p className='my-4'>
        The 2026 AFCA Taste of Harvest competition and Ethiopia's hosting of the conference represent more than a one-time event-they signal important developments for Ethiopian coffee's future.
      </p>

      <h4 className='text-xl font-bold mt-6 mb-3'>Strategic Benefits for Ethiopia</h4>

      <div className='space-y-4 my-6'>
        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h5 className='font-bold mb-2 text-green-900'>Enhanced Global Reputation</h5>
          <p className='text-sm'>
            Showcasing modern facilities, professional expertise, and exceptional coffee quality reinforces Ethiopia's position as a global coffee leader, not just a traditional origin.
          </p>
        </div>

        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h5 className='font-bold mb-2 text-blue-900'>Increased Producer Incentives</h5>
          <p className='text-sm'>
            Competition success and premium auction prices provide tangible incentives for Ethiopian farmers and cooperatives to invest in quality improvements and best practices.
          </p>
        </div>

        <div className='bg-purple-50 p-5 rounded-lg border border-purple-200'>
          <h5 className='font-bold mb-2 text-purple-900'>Quality Culture Development</h5>
          <p className='text-sm'>
            Annual competitions foster a culture of quality excellence, continuous improvement, and pride in Ethiopian coffee throughout the supply chain from farmer to exporter.
          </p>
        </div>

        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <h5 className='font-bold mb-2 text-amber-900'>Knowledge Hub Status</h5>
          <p className='text-sm'>
            Ethiopia's training center and laboratory facilities position the country as a knowledge hub for African coffee, attracting international partnerships and training opportunities.
          </p>
        </div>

        <div className='bg-teal-50 p-5 rounded-lg border border-teal-200'>
          <h5 className='font-bold mb-2 text-teal-900'>Market Access Expansion</h5>
          <p className='text-sm'>
            AFCA certification and auction access open new market channels, particularly for smaller producers and cooperatives who previously lacked direct international buyer connections.
          </p>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-3'>Future Outlook</h4>

      <p className='my-4'>
        Dr. Adunya's emphasis on Ethiopia's laboratory modernization and species collection suggests ongoing investments in:
      </p>

      <ul className='space-y-2 my-6 list-disc ml-6'>
        <li><span className='font-bold'>Research and development:</span> Better understanding Ethiopian coffee genetics and terroir</li>
        <li><span className='font-bold'>Quality standards:</span> Continuous improvement in grading, evaluation, and quality control</li>
        <li><span className='font-bold'>Producer training:</span> Expanding capacity-building programs to reach more farmers</li>
        <li><span className='font-bold'>Innovation:</span> Supporting experimental processing and sustainable farming practices</li>
        <li><span className='font-bold'>International collaboration:</span> Strengthening partnerships with global coffee organizations</li>
      </ul>

      {/* CONCLUSION & CTA */}
      <div className='bg-dark text-primary p-6 rounded-lg my-8'>
        <h4 className='font-bold text-xl mb-3'>
          Conclusion: Competition Success Drives Coffee Excellence
        </h4>
        <p className='mb-3'>
          The AFCA Taste of Harvest competition represents far more than awards and recognition-it's a mechanism for driving quality improvement, connecting exceptional Ethiopian coffees with discerning global buyers, and demonstrating Ethiopia's continued evolution as a modern, sophisticated coffee origin.
        </p>
        <p className='mb-3'>
          For producers and cooperatives, participation offers pathways to premium markets and fair compensation for quality efforts. For exporters, award-winning lots provide competitive differentiation and buyer demand. For international buyers, AFCA-certified coffees deliver pre-vetted quality and compelling stories.
        </p>
        <p>
          As Ethiopia continues modernizing its laboratory facilities, training professionals, and hosting international events, the country solidifies its role not just as coffee's birthplace, but as a dynamic leader shaping specialty coffee's future.
        </p>
      </div>

      {/* KEY TAKEAWAYS */}
      <h3 className='text-2xl font-extrabold mt-10 mb-4'>
        Key Takeaways
      </h3>
      <div className='my-6 space-y-3'>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckBadge className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>AFCA's Taste of Harvest is Africa's premier coffee quality competition, recognizing exceptional coffees across the continent and providing market access through auctions</p>
        </div>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckBadge className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>Ethiopia hosted the 2026 competition at its modern Coffee Training Center, showcasing state-of-the-art laboratory facilities and highly trained professionals</p>
        </div>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckBadge className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>226 Ethiopian coffee samples competed across natural, washed, honey, and experimental processing categories, demonstrating the country's quality diversity</p>
        </div>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckBadge className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>Competition operates in two phases: national selection (January) and continental finals (February), with only top scorers advancing</p>
        </div>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckBadge className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>Award-winning coffees receive AFCA certification (valid one year) and serial numbers, providing internationally recognized quality credentials</p>
        </div>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckBadge className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>Certified coffees gain direct access to AFCA's auction platform, connecting producers with international specialty buyers at premium prices</p>
        </div>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckBadge className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>Ethiopian producers, cooperatives, and exporters can all participate by submitting samples meeting quality and documentation requirements</p>
        </div>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckBadge className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>International buyers benefit from pre-vetted quality, transparent information, and compelling marketing stories when purchasing award-winning lots</p>
        </div>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckBadge className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>Ethiopia's laboratory modernization and genetic diversity research position the country as a knowledge leader in African and global coffee</p>
        </div>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckBadge className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>Competition success drives quality culture, producer incentives, and market access-benefiting Ethiopia's entire coffee value chain</p>
        </div>
      </div>

      {/* ETHIO COFFEE EXPORT CTA */}
      <div className='bg-gradient-to-br from-amber-900 to-amber-800 text-white p-8 rounded-lg my-8'>
        <h3 className='text-2xl font-extrabold mb-4'>
          Access Award-Winning Ethiopian Coffee Through Ethio Coffee Export
        </h3>
        <p className='mb-4'>
          <span className='font-bold'>Ethio Coffee Export PLC</span> actively participates in Ethiopia's coffee quality competitions and maintains relationships with producers and cooperatives whose coffees compete at national and international levels.
        </p>
        <ul className='space-y-2 mb-6'>
          <li className='flex items-start gap-2'>
            <HiOutlineTrophy className='text-amber-300 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-bold'>Competition-grade coffees</span> from award-winning producers and cooperatives</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineTrophy className='text-amber-300 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-bold'>Diverse processing methods</span> including experimental lots showcasing Ethiopian innovation</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineTrophy className='text-amber-300 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-bold'>Full traceability and quality documentation</span> meeting international standards</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineTrophy className='text-amber-300 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-bold'>Professional cupping notes and evaluation</span> from trained Q graders</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineTrophy className='text-amber-300 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-bold'>Direct producer relationships</span> supporting quality-focused farmers</span>
          </li>
        </ul>
        <div className='flex flex-wrap gap-4'>
          <Link 
            href="/contact-us" 
            className='bg-white text-amber-900 px-6 py-3 rounded-lg font-bold hover:bg-amber-100 transition-colors inline-block'
          >
            Inquire About Competition-Grade Coffee
          </Link>
          <Link 
            href="/offerings" 
            className='border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors inline-block'
          >
            View Current Offerings
          </Link>
        </div>
      </div>

      {/* RELATED ARTICLES */}
      <h3 className='text-2xl font-extrabold mt-10 mb-4'>
        Related Resources
      </h3>
      
      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
          <h4 className='font-bold mb-2'>Quality & Evaluation</h4>
          <ul className='space-y-1 text-sm'>
            <li>• <Link href="/insights/green-coffee-quality-control-defects-grading" className='text-blue-600 hover:underline'>Green Coffee Quality Control & Grading</Link></li>
            <li>• <Link href="/insights/new-sca-coffee-value-assessment" className='text-blue-600 hover:underline'>New SCA Coffee Value Assessment</Link></li>
            <li>• <Link href="/insights/guide-ethiopian-coffee-origins" className='text-blue-600 hover:underline'>Guide to Ethiopian Coffee Origins</Link></li>
            <li>• <Link href="/insights/yirgacheffe-vs-sidamo-vs-guji-comparison" className='text-blue-600 hover:underline'>Yirgacheffe vs Sidamo vs Guji Comparison</Link></li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
          <h4 className='font-bold mb-2'>Processing & Innovation</h4>
          <ul className='space-y-1 text-sm'>
            <li>• <Link href="/insights/washed-vs-natural-ethiopian-coffee-processing" className='text-blue-600 hover:underline'>Washed vs Natural Ethiopian Coffee</Link></li>
            <li>• <Link href="/insights/coffee-is-processing-drying-milling" className='text-blue-600 hover:underline'>Coffee Is a Process: Complete Guide</Link></li>
            <li>• <Link href="/insights/specialty-coffee-trends-2026" className='text-blue-600 hover:underline'>5 Specialty Coffee Trends Defining 2026</Link></li>
            <li>• <Link href="/insights/complete-guide-to-understanding-coffee" className='text-blue-600 hover:underline'>Complete Guide to Understanding Coffee</Link></li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-gray-200" />

      <div className='bg-gray-100 p-6 rounded-lg my-6 text-center'>
        <p className='font-bold text-lg mb-2'>Interested in AFCA Award-Winning Ethiopian Coffees?</p>
        <p className='text-gray-700 mb-4'>
          Our team maintains connections with competition-participating producers and can source exceptional, award-caliber Ethiopian coffee for discerning buyers.
        </p>
        <Link 
          href="/contact-us" 
          className='bg-dark text-primary px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors inline-block'
        >
          Contact Us About Premium Selections
        </Link>
      </div>

      <p className='my-4 text-sm text-gray-600 italic'>
        This guide was prepared by <span className='font-semibold'>Ethio Coffee Export PLC</span> based on the 2026 AFCA Taste of Harvest competition, statements from Ethiopian Coffee and Tea Authority leadership, and our direct involvement in Ethiopia's specialty coffee sector. <Link href="/contact-us" className='text-blue-600 underline'>Contact our team</Link> for more information about accessing award-winning Ethiopian coffees.
      </p>
    </>
  )
}

import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineGlobeAlt,
  HiOutlineCalendarDays,
  HiOutlineMapPin,
  HiOutlineBuildingStorefront,
  HiOutlineUserGroup,
  HiOutlineAcademicCap,
  HiOutlineTrophy,
  HiOutlineClipboardDocumentCheck,
  HiOutlineChatBubbleLeftRight,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function WorldOfCoffeeSanDiego2026BuyersGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      {/* H1 + H2 */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Event Overview, Ethiopian Coffee Highlights, and a Sourcing Strategy for Importers
      </h2>

      {/* HERO IMAGE */}
      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md bg-gray-200 flex items-center justify-center'>
          {/* TODO: Replace placeholder with actual hero image */}
          {/* Expected path: /images/insights/world-of-coffee-san-diego-2026-buyers-guide.webp */}
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='World of Coffee San Diego 2026 trade show floor with specialty coffee exhibitors and buyers'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      {/* CATEGORY */}
      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Trade Events / Coffee Industry / Sourcing Strategy / Importer Resources</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          World of Coffee San Diego 2026 (April 10-12) is the first North American edition under the rebranded &quot;World of Coffee&quot; name, replacing the Specialty Coffee Expo after 30 years. With 600+ exhibitors, 15,000+ attendees from 90+ countries, and features like the Producer Village, Cupping Rooms, and World Latte Art Championship, this is the single largest sourcing event of the year for green coffee importers. Ethiopian coffee buyers should plan meetings in advance, attend origin-focused lectures, and use the Cupping Rooms to evaluate new lots.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#what-is-woc' className='text-amber-700 hover:underline'>1. What Is World of Coffee San Diego 2026?</a></li>
          <li><a href='#event-details' className='text-amber-700 hover:underline'>2. Dates, Venue, and Registration</a></li>
          <li><a href='#show-features' className='text-amber-700 hover:underline'>3. Show Features and Zones</a></li>
          <li><a href='#championships' className='text-amber-700 hover:underline'>4. World Coffee Championships</a></li>
          <li><a href='#ethiopian-coffee-woc' className='text-amber-700 hover:underline'>5. Ethiopian Coffee at World of Coffee</a></li>
          <li><a href='#buyer-strategy' className='text-amber-700 hover:underline'>6. Buyer&apos;s Sourcing Strategy for the Show</a></li>
          <li><a href='#pre-show-checklist' className='text-amber-700 hover:underline'>7. Pre-Show Preparation Checklist</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>8. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRODUCTION */}
      <p className='text-lg leading-relaxed my-4'>
        <strong>World of Coffee San Diego 2026</strong> marks a milestone for the North American specialty coffee industry. After 30 years as the Specialty Coffee Expo, the SCA&apos;s flagship trade show adopts the &quot;World of Coffee&quot; name, unifying its global event brand across North America, Europe, and Asia. For green coffee importers, roasters, and traders, this three-day event at the San Diego Convention Center is the year&apos;s most concentrated opportunity to evaluate origins, meet exporters, and build sourcing relationships.
      </p>
      <p className='my-4'>
        This guide covers the event structure, key features for buyers, and a practical sourcing strategy tailored to professionals sourcing <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline font-bold'>Ethiopian specialty coffee</Link>. Whether you are a first-time attendee or a veteran of past SCA Expos, the 2026 edition introduces new zones and formats worth planning around.
      </p>

      {/* SECTION 1: What Is WOC */}
      <h3 id='what-is-woc' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineGlobeAlt className='w-8 h-8 text-amber-600' />
        1. What Is World of Coffee San Diego 2026?
      </h3>
      <p className='my-4'>
        World of Coffee San Diego is the Specialty Coffee Association&apos;s primary North American trade event. Organized annually since 1996 under the &quot;Specialty Coffee Expo&quot; name, the 2026 edition is the first to carry the &quot;World of Coffee&quot; brand, aligning it with the SCA&apos;s events in Europe and Asia. The rebrand reflects the SCA&apos;s strategy to create a unified global platform for specialty coffee professionals.
      </p>
      <p className='my-4'>
        The event targets the full spectrum of the specialty coffee supply chain: green coffee importers and traders, roasters, cafe operators, equipment manufacturers, packaging suppliers, and origin-country exporters. It is not open to the general public; registration is restricted to current and prospective members of the specialty coffee community.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Why the Rebrand Matters for Buyers</h4>
        <p className='text-sm text-gray-700'>
          Under the unified &quot;World of Coffee&quot; brand, the SCA is expanding the event&apos;s international scope. The 2026 San Diego edition expects attendees from 90+ countries, up from approximately 70 countries at recent Specialty Coffee Expos. For importers, this means more origin-country exhibitors, more export partners in one venue, and better coverage of emerging and established producing regions.
        </p>
      </div>

      {/* SECTION 2: Event Details */}
      <h3 id='event-details' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCalendarDays className='w-8 h-8 text-amber-600' />
        2. Dates, Venue, and Registration
      </h3>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Detail</th>
              <th className='p-3 text-left font-bold'>Information</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Event Name</td>
              <td className='p-3'>World of Coffee San Diego 2026</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Dates</td>
              <td className='p-3'>April 10-12, 2026 (Friday to Sunday)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Venue</td>
              <td className='p-3'>San Diego Convention Center, 111 Harbor Dr, San Diego, CA 92101</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Organizer</td>
              <td className='p-3'>Specialty Coffee Association (SCA)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Expected Attendees</td>
              <td className='p-3'>15,000+ from 90+ countries</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Exhibitors</td>
              <td className='p-3'>600+ companies</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Registration</td>
              <td className='p-3'>usa.worldofcoffee.org (single-day, two-day, and three-day passes)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Portrait Country</td>
              <td className='p-3'>Colombia</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        The San Diego Convention Center sits on the waterfront in the Gaslamp Quarter, offering walkable access to hotels, restaurants, and public transit. For international attendees, San Diego International Airport (SAN) is five minutes from the venue by taxi or rideshare.
      </p>

      {/* SECTION 3: Show Features */}
      <h3 id='show-features' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBuildingStorefront className='w-8 h-8 text-amber-600' />
        3. Show Features and Zones
      </h3>
      <p className='my-4'>
        The 2026 show floor is organized into purpose-built zones, each designed for a specific segment of the supply chain. For importers and green coffee buyers, three zones deserve priority.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Producer Village</h4>
          <p className='text-sm text-gray-700'>
            Origin-country booths featuring cooperatives, exporters, and trade boards. This is where Ethiopian, Colombian, Kenyan, and other origin exhibitors present new-crop offerings, farm data, and traceability documentation. Prioritize this zone for face-to-face meetings with export partners.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Roaster Village</h4>
          <p className='text-sm text-gray-700'>
            Specialty roasters showcasing finished products and sharing sourcing stories. Useful for importers looking to understand how downstream buyers evaluate and position Ethiopian origins, which informs which lots to offer your accounts.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Cupping Rooms</h4>
          <p className='text-sm text-gray-700'>
            Dedicated cupping sessions where you can evaluate coffees side by side. Multiple origins, processes, and grades available for blind and open cupping. Bring your own cupping forms and use these sessions to benchmark Ethiopian lots against competing origins.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Coffee Business Lounge</h4>
          <p className='text-sm text-gray-700'>
            A quieter space for scheduled meetings and follow-up conversations. Book time slots in advance if your discussions involve contract terms, pricing, or sample arrangements.
          </p>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>SCA Lecture Series</h4>
      <p className='my-4'>
        Over 60 expert-led lectures cover topics spanning <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='text-amber-700 hover:underline'>sensory science</Link>, sustainability, brewing, roasting, and business development. For green coffee professionals, lectures on origin quality, processing innovations, and trade logistics deliver the most actionable value. The workshop schedule is available on the event website; plan your lecture attendance before arriving to avoid conflicts with booth meetings.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Workshops</h4>
      <p className='my-4'>
        Hands-on sessions covering topics like <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>cupping technique</Link>, roast profiling, and brewing parameters. Workshop capacity is limited and often requires separate registration, so check availability early.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Networking Events</h4>
      <p className='my-4'>
        Happy hours, receptions, and industry dinners run each evening. These informal settings are where many sourcing relationships move from introduction to commitment. Exchange contact information during the day and use evening events to deepen conversations.
      </p>

      {/* SECTION 4: Championships */}
      <h3 id='championships' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTrophy className='w-8 h-8 text-amber-600' />
        4. World Coffee Championships
      </h3>
      <p className='my-4'>
        The 2026 World Coffee Championships are distributed across multiple host cities, with San Diego hosting the <strong>World Latte Art Championship</strong>. The World Barista Championship takes place separately at World of Coffee Panama. Additional championships span four continents during the 2026 season.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Championship</th>
              <th className='p-3 text-left font-bold'>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>World Latte Art Championship</td>
              <td className='p-3'>San Diego, USA (World of Coffee San Diego)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>World Barista Championship</td>
              <td className='p-3'>Panama City, Panama (World of Coffee Panama)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        For importers, the championships are more than spectator events. Winning routines often spotlight specific origins, processes, and producers. Ethiopian coffees appear regularly in championship routines; Yirgacheffe washed lots and Guji naturals are frequent choices for their distinctive flavors. Watching which coffees competitors select signals downstream demand trends for your portfolio.
      </p>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Best New Product and Coffee Design Awards</h4>
        <p className='text-sm text-gray-700'>
          The show also features the Best New Product Awards and Coffee Design Awards. While these focus on equipment and packaging, winning products often indicate where the industry is moving. Green coffee buyers should note innovations in hermetic packaging, grading technology, and quality-measurement instruments.
        </p>
      </div>

      {/* SECTION 5: Ethiopian Coffee */}
      <h3 id='ethiopian-coffee-woc' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMapPin className='w-8 h-8 text-amber-600' />
        5. Ethiopian Coffee at World of Coffee
      </h3>
      <p className='my-4'>
        Ethiopia is the birthplace of Arabica coffee and one of the most sought-after origins at any specialty trade show. At World of Coffee San Diego, expect to find Ethiopian Coffee and Tea Authority (ECTA) representatives, private exporters, cooperative unions, and trade-promotion agencies exhibiting in the Producer Village.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>What Ethiopian Exhibitors Typically Offer</h4>
      <ul className='list-disc pl-6 space-y-2 my-4 text-sm'>
        <li><strong>Pre-shipment samples</strong> of new-crop lots from <Link href='/insights/yirgacheffe-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Yirgacheffe</Link>, <Link href='/insights/sidamo-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Sidamo</Link>, <Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Guji</Link>, <Link href='/insights/harar-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Harar</Link>, <Link href='/insights/limu-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Limu</Link>, and <Link href='/insights/jimma-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Jimma</Link></li>
        <li>Cupping sessions and sensory evaluations at their booth or in the Cupping Rooms</li>
        <li><Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Traceability documentation</Link> including GPS coordinates, washing station records, and lot histories</li>
        <li><Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>FOB price sheets</Link> for current and upcoming harvests</li>
        <li>Information on <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>certifications</Link> (Organic, Fairtrade, Rainforest Alliance)</li>
        <li>Contract terms and <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>MOQ details</Link></li>
      </ul>

      <h4 className='text-xl font-bold mt-8 mb-4'>Why Ethiopian Coffee Stands Out at Trade Shows</h4>
      <p className='my-4'>
        Ethiopia&apos;s genetic diversity gives it an advantage no other origin can match. With thousands of indigenous heirloom varieties growing across distinct micro-regions, Ethiopian lots offer <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>flavor complexity</Link> that ranges from jasmine-floral washed Yirgacheffe to blueberry-forward natural Guji. Trade shows are the best environment to cup these differences side by side and compare them against <Link href='/insights/ethiopian-coffee-vs-kenyan-coffee' className='text-amber-700 hover:underline'>Kenyan</Link>, <Link href='/insights/ethiopian-coffee-vs-colombian-coffee' className='text-amber-700 hover:underline'>Colombian</Link>, and <Link href='/insights/ethiopian-coffee-vs-brazilian-coffee' className='text-amber-700 hover:underline'>Brazilian</Link> coffees.
      </p>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700'>
          <strong>Timing note:</strong> World of Coffee San Diego falls during Ethiopia&apos;s mid-harvest to post-harvest window. By April, early-harvest Yirgacheffe and Sidamo lots from the current season are often available as pre-shipment samples. Guji and Harar lots typically follow weeks later. Check <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>our harvest calendar</Link> to align your show meetings with actual lot availability.
        </p>
      </div>

      {/* SECTION 6: Buyer Strategy */}
      <h3 id='buyer-strategy' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineUserGroup className='w-8 h-8 text-amber-600' />
        6. Buyer&apos;s Sourcing Strategy for the Show
      </h3>
      <p className='my-4'>
        Trade shows reward preparation. The buyers who leave with the best deals are the ones who arrive with a plan. Here is a practical approach for green coffee professionals attending World of Coffee San Diego.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Before the Show</h4>
      <ul className='list-disc pl-6 space-y-2 my-4 text-sm'>
        <li><strong>Define your sourcing goals.</strong> Know which origins, grades, processes, and volumes you need for the next 6-12 months. If you are looking for <Link href='/insights/micro-lot-ethiopian-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Ethiopian micro-lots</Link>, Grade 1 washed Yirgacheffe, or <Link href='/insights/anaerobic-ethiopian-coffee-processing-buyers-guide' className='text-amber-700 hover:underline'>anaerobic-processed lots</Link>, write this down before you land in San Diego.</li>
        <li><strong>Pre-schedule meetings.</strong> Contact exporters and importers 4-6 weeks before the show. Use the exhibitor directory at usa.worldofcoffee.org to identify Ethiopian exhibitors and request booth appointments.</li>
        <li><strong>Prepare your cupping kit.</strong> Bring cupping forms, a spoon, and a notebook. Use a consistent evaluation framework so you can compare lots fairly across different booths and days.</li>
        <li><strong>Research benchmark pricing.</strong> Review current <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>FOB Djibouti pricing</Link> and <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>landed cost calculations</Link> so you can evaluate offers on the spot.</li>
      </ul>

      <h4 className='text-xl font-bold mt-8 mb-4'>During the Show</h4>
      <ul className='list-disc pl-6 space-y-2 my-4 text-sm'>
        <li><strong>Day 1 (Friday):</strong> Walk the full floor to orient yourself. Spend 20-30 minutes in the Producer Village surveying which origins are represented. Note booth numbers for follow-up.</li>
        <li><strong>Day 1 afternoon:</strong> Attend the Cupping Rooms for initial sensory evaluation. Cup broadly; do not commit yet.</li>
        <li><strong>Day 2 (Saturday):</strong> Deep-dive meetings with shortlisted exporters. Discuss contract terms, <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>payment terms</Link>, shipping logistics, and sample availability. Request take-home samples of lots that scored well.</li>
        <li><strong>Day 2:</strong> Attend 2-3 SCA lectures on origin quality or trade topics. Cross-reference lecture insights with what exhibitors presented.</li>
        <li><strong>Day 3 (Sunday):</strong> Follow-up meetings and relationship building. Exchange samples, confirm next steps, and set post-show timelines for decisions.</li>
      </ul>

      <h4 className='text-xl font-bold mt-8 mb-4'>After the Show</h4>
      <ul className='list-disc pl-6 space-y-2 my-4 text-sm'>
        <li>Send follow-up emails within 48 hours while conversations are fresh.</li>
        <li>Cup all take-home samples within 7 days using the same protocol you used at the show.</li>
        <li>Compare pricing against your existing supplier relationships and current <Link href='/insights/coffee-prices-falling-global-production-record' className='text-amber-700 hover:underline'>market conditions</Link>.</li>
        <li>Request <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>export documentation</Link> and formalize contract discussions for selected lots.</li>
      </ul>

      {/* SECTION 7: Pre-Show Checklist */}
      <h3 id='pre-show-checklist' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineClipboardDocumentCheck className='w-8 h-8 text-amber-600' />
        7. Pre-Show Preparation Checklist
      </h3>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Task</th>
              <th className='p-3 text-left font-bold'>Timeline</th>
              <th className='p-3 text-left font-bold'>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Register at usa.worldofcoffee.org</td>
              <td className='p-3'>6-8 weeks before</td>
              <td className='p-3'>Three-day pass recommended for buyers</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Book hotel near Convention Center</td>
              <td className='p-3'>6-8 weeks before</td>
              <td className='p-3'>Gaslamp Quarter properties fill quickly</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Review exhibitor directory</td>
              <td className='p-3'>4-6 weeks before</td>
              <td className='p-3'>Mark origin producers and exporters</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Schedule booth appointments</td>
              <td className='p-3'>4 weeks before</td>
              <td className='p-3'>Email contacts from directory listings</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Prepare sourcing brief</td>
              <td className='p-3'>2 weeks before</td>
              <td className='p-3'>Origins, grades, volumes, quality targets</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Print business cards</td>
              <td className='p-3'>1 week before</td>
              <td className='p-3'>Carry 100+ (digital alternatives acceptable)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Pack cupping kit</td>
              <td className='p-3'>Day before travel</td>
              <td className='p-3'>Spoon, forms, pen, sample bags</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 8: Evaluating Exporters */}
      <h3 id='evaluating-exporters' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineAcademicCap className='w-8 h-8 text-amber-600' />
        8. Evaluating Exporters at the Show
      </h3>
      <p className='my-4'>
        Not all exhibitors offer the same level of sourcing capability. Use these criteria when meeting Ethiopian coffee exporters at World of Coffee San Diego. For a more detailed framework, see our guide on <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='text-amber-700 hover:underline'>how to choose an Ethiopian coffee export company</Link>.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Sourcing Depth</h4>
          <p className='text-sm text-gray-700'>
            Can they supply from multiple regions? A reliable exporter should cover at least Yirgacheffe, Sidamo, and Guji, with access to additional zones like Harar, Limu, and Jimma.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Traceability</h4>
          <p className='text-sm text-gray-700'>
            Ask for lot-level traceability. Can they provide washing station names, GPS coordinates, and processing dates? This matters for <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline'>EUDR compliance</Link> and downstream marketing.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Quality Credentials</h4>
          <p className='text-sm text-gray-700'>
            Request cupping scores, SCA evaluation forms, and defect counts. A serious exporter brings these to the show. Compare their scores against your own cupping at the Cupping Rooms.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Logistics Capability</h4>
          <p className='text-sm text-gray-700'>
            Discuss <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>export documentation</Link>, <Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline'>packaging options</Link>, and shipping timelines. Can they handle FOB Djibouti, FCA Addis, or door-to-door? What is their typical lead time from contract to shipment?
          </p>
        </div>
      </div>

      <div className='bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg my-6'>
        <h4 className='font-bold text-lg mb-3'>Watch for Red Flags</h4>
        <p className='text-sm text-gray-700'>
          Be cautious of exhibitors who cannot provide samples on site, quote prices significantly below market benchmarks, lack documentation, or cannot name their washing station sources. Face-to-face meetings at trade shows are one of the best opportunities to verify claims that are difficult to check remotely. For a complete due diligence checklist, see our <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='text-amber-700 hover:underline'>exporter evaluation guide</Link>.
        </p>
      </div>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Meet Ethio Coffee at World of Coffee San Diego</h4>
        <p className='my-2'>
          Ethio Coffee Import and Export PLC sources from cooperatives and washing stations across all six major Ethiopian coffee regions. Browse our current offerings, request pre-show samples, or schedule a meeting at the show.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>
            View Offerings
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
      <section id='faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900'>Frequently Asked Questions</h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>When is World of Coffee San Diego 2026?</h4>
            <p className='text-sm text-gray-600'>
              World of Coffee San Diego 2026 runs April 10-12, 2026 at the San Diego Convention Center. The event spans three full days with exhibition hours, lectures, workshops, and the World Latte Art Championship running concurrently.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How much does registration cost?</h4>
            <p className='text-sm text-gray-600'>
              Registration pricing varies by pass type (single-day, two-day, three-day) and purchase timing. Rates are published at usa.worldofcoffee.org. Three-day passes offer the best value for buyers who need time for meetings, cupping, and lectures across the full event.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Is the event open to the public?</h4>
            <p className='text-sm text-gray-600'>
              No. World of Coffee San Diego is a trade event for current and prospective members of the specialty coffee community. You must register in advance. General consumers are not admitted.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Can I source Ethiopian green coffee at the show?</h4>
            <p className='text-sm text-gray-600'>
              Yes. Ethiopian exporters, cooperatives, and trade agencies exhibit in the Producer Village. You can cup samples, discuss pricing and contract terms, review traceability documentation, and arrange follow-up shipments. Pre-scheduling meetings improves your chances of productive conversations.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the Portrait Country feature?</h4>
            <p className='text-sm text-gray-600'>
              Each World of Coffee event highlights one producing country with dedicated activations and tastings. For San Diego 2026, Colombia is the Portrait Country. Expect Colombian cupping tables, cultural presentations, and origin storytelling throughout the show.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origin Sourcing Guides</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/yirgacheffe-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Yirgacheffe Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Guji Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/sidamo-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Sidamo Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/harar-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Harar Coffee: Buyer&apos;s Sourcing Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Trade &amp; Pricing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Pricing for Importers</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts &amp; Payment Terms Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality &amp; Processing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup and Evaluate Ethiopian Coffee Samples</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Washing Stations: Buyer&apos;s Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability: Buyer&apos;s Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Exporter Evaluation</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='text-amber-700 hover:underline'>How to Choose an Ethiopian Coffee Export Company</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process: A Buyer&apos;s Guide</Link></li>
              <li>&bull; <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Minimum Order Quantities for Ethiopian Coffee</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter with three decades of sourcing relationships across Yirgacheffe, Sidamo, Guji, Harar, Limu, and Jimma.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot;{' '}
          <Link href='/ethiopian-coffee-exporter' className='underline'>Export Services</Link> &middot;{' '}
          <Link href='/about' className='underline'>About</Link> &middot;{' '}
          <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

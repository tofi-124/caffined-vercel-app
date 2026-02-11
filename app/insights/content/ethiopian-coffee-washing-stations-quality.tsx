import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopianCoffeeWashingStationsQuality({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        How Ethiopian washing stations determine the quality of your green coffee
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Washing stations are the critical link between Ethiopian coffee farmers and the global specialty market. The decisions made at these facilities shape the cup quality that reaches your roastery.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian coffee washing station with fermentation tanks and raised drying beds in a highland growing region'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <p className='my-4'>
        In Ethiopian specialty coffee, the washing station is where quality is made or lost.
        A single washing station can receive cherry from hundreds of smallholder farmers, and the processing decisions made in those first 72 hours after harvest determine whether the final cup scores 80 or 88.
      </p>

      <p className='my-4'>
        For roasters and importers sourcing Ethiopian green coffee, the washing station is the most important unit of traceability below the region level.
        Understanding how these facilities operate, what separates a good one from a great one, and how to evaluate them gives you a sourcing advantage that region names alone cannot provide.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        What Is a Washing Station in Ethiopian Coffee?
      </h3>
      <p className='my-4'>
        A washing station (sometimes called a wet mill) is a processing facility where freshly picked coffee cherry is received, sorted, depulped, fermented, washed, and dried.
        In Ethiopia, most coffee farmers own less than two hectares and do not have the equipment or water access to process coffee themselves.
        Instead, they deliver ripe cherry to a nearby washing station, which processes it on their behalf.
      </p>

      <p className='my-4'>
        Ethiopia has thousands of washing stations, concentrated in the major growing regions of Yirgacheffe (Gedeo), Sidama, Guji, Limu, and Jimma.
        Each station typically serves 200 to 1,500 farmers within a radius of a few kilometers.
        The station owner or cooperative manager makes the processing decisions that shape the lot, which is why two washing stations in the same kebele can produce noticeably different cups.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        How Washing Stations Shape Cup Quality
      </h3>
      <p className='my-4'>
        The quality influence of a washing station is not a single variable.
        It is the sum of multiple decisions made in sequence, each building on the last.
        Here is how each step at the station affects the coffee you receive.
      </p>

      <h4 className='text-xl font-bold mt-6'>Cherry Reception and Sorting</h4>
      <p className='my-4'>
        Quality begins at intake.
        The best washing stations reject underripe (green) and overripe (dark brown or dried) cherry at the gate.
        Some use flotation tanks where lower-density (defective) cherries float to the surface and are separated before processing begins.
        Stations that are strict at reception produce cleaner lots with fewer defects downstream.
      </p>

      <h4 className='text-xl font-bold mt-6'>Depulping</h4>
      <p className='my-4'>
        Mechanical depulpers remove the outer skin and most of the fruit flesh from the seed.
        Well-maintained, correctly calibrated depulpers minimize damage to the parchment layer and reduce the number of nicked or crushed beans.
        Older or poorly maintained equipment can create physical defects that show up as quakers or broken beans in the final green coffee.
      </p>

      <h4 className='text-xl font-bold mt-6'>Fermentation</h4>
      <p className='my-4'>
        After depulping, the beans (still covered in a sticky mucilage layer) are placed in fermentation tanks.
        Fermentation breaks down the remaining mucilage through microbial activity.
        Duration typically ranges from 12 to 72 hours depending on altitude, ambient temperature, and the station manager&apos;s protocol.
      </p>
      <p className='my-4'>
        This is where the station manager&apos;s skill matters most.
        Under-fermentation leaves mucilage residue that can cause fruity off-flavors.
        Over-fermentation produces vinegar-like sourness and stinker defects.
        Experienced managers monitor fermentation by touch (the "rough parchment" test) and timing, adjusting for weather changes day by day.
      </p>

      <h4 className='text-xl font-bold mt-6'>Washing and Grading Channels</h4>
      <p className='my-4'>
        After fermentation, beans are washed through grading channels.
        Clean water runs through long concrete channels, and beans separate by density as they flow.
        Heavier, denser beans (higher quality) settle first, while lighter beans (lower density, more defects) travel farther down the channel.
        This hydraulic separation is one of the primary ways Ethiopian washed coffees are graded into quality tiers at the station level.
      </p>

      <h4 className='text-xl font-bold mt-6'>Drying</h4>
      <p className='my-4'>
        Washed parchment coffee is spread on raised African drying beds, typically made of mesh stretched over wooden frames.
        Raised beds allow air circulation from below, promoting even drying and reducing the risk of mold or ferment flavors.
        Target moisture content is 10 to 12 percent, and drying typically takes 7 to 15 days depending on weather conditions.
      </p>
      <p className='my-4'>
        During drying, station workers hand-sort the parchment, removing any visible defects.
        The best stations turn the coffee every 30 to 45 minutes during peak sun hours and cover the beds at night or during rain.
        These labor-intensive practices are a direct investment in cup quality.
      </p>

      <div className='bg-amber-100 p-6 rounded-lg my-8'>
        <h4 className='font-bold text-xl mb-2'>Why the Same Region Produces Different Quality</h4>
        <p className='my-2'>
          Two lots labeled "Yirgacheffe Grade 1 Washed" can taste very different if they come from washing stations with different fermentation protocols, drying practices, and sorting standards.
          The station name on a contract or sample card is a stronger predictor of cup consistency than the region name alone.
        </p>
        <p className='text-sm text-gray-600 mt-3 italic'>
          Based on sourcing patterns observed across multiple Ethiopian harvest seasons.
        </p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Natural Processing at Washing Stations
      </h3>
      <p className='my-4'>
        Despite the name, most Ethiopian washing stations also process natural (dry-processed) coffees.
        For naturals, the cherry is not depulped.
        Instead, whole cherries are spread directly on raised drying beds, where the fruit dries around the seed over 2 to 4 weeks.
      </p>
      <p className='my-4'>
        The washing station&apos;s infrastructure matters just as much for naturals.
        Stations with well-constructed raised beds, sufficient bed space to avoid overcrowding, and disciplined turning schedules produce cleaner, more consistent naturals.
        Overcrowded beds or inconsistent turning leads to uneven drying, mold, and ferment defects.
        For a detailed comparison of how these two processing methods differ in the cup, see our guide on{' '}
        <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='underline font-bold'>
          washed vs natural Ethiopian coffee processing
        </Link>.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Cooperative Stations vs Private Stations
      </h3>
      <p className='my-4'>
        Ethiopian washing stations fall into two broad ownership categories, and the distinction matters for sourcing.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse border border-gray-300 font-inconsolata text-sm'>
          <thead className='bg-dark text-primary'>
            <tr>
              <th className='border border-gray-300 p-3 text-left'>Factor</th>
              <th className='border border-gray-300 p-3 text-left'>Cooperative Stations</th>
              <th className='border border-gray-300 p-3 text-left'>Private Stations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Ownership</td>
              <td className='border border-gray-300 p-3'>Farmer-owned cooperative or union</td>
              <td className='border border-gray-300 p-3'>Individual or company-owned</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Traceability</td>
              <td className='border border-gray-300 p-3'>Traceable to cooperative and member group</td>
              <td className='border border-gray-300 p-3'>Traceable to station and sometimes individual farm</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Quality incentive</td>
              <td className='border border-gray-300 p-3'>Second payment (dividend) based on quality premiums received</td>
              <td className='border border-gray-300 p-3'>Direct premiums for high-quality cherry at the gate</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Certifications</td>
              <td className='border border-gray-300 p-3'>Often Fair Trade, Organic, Rainforest Alliance</td>
              <td className='border border-gray-300 p-3'>Less common; some hold Organic or UTZ</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Processing innovation</td>
              <td className='border border-gray-300 p-3'>Slower to adopt new techniques</td>
              <td className='border border-gray-300 p-3'>Often faster to experiment (extended fermentation, anaerobic, etc.)</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Volume flexibility</td>
              <td className='border border-gray-300 p-3'>Larger volumes available through unions</td>
              <td className='border border-gray-300 p-3'>Smaller, more targeted lots typical</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Neither model is inherently better.
        Some of Ethiopia&apos;s highest-scoring lots have come from cooperative stations with strong management, and some of the most innovative processing experiments happen at ambitious private stations.
        The key question for buyers is: does this station have the management, infrastructure, and incentive structure to deliver consistent quality?
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        How to Evaluate a Washing Station Before Buying
      </h3>
      <p className='my-4'>
        When sourcing Ethiopian green coffee, asking the right questions about the washing station can save you from quality surprises.
        Here is a practical checklist for evaluating stations, whether you visit in person or assess through your exporter.
      </p>

      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>
          <span className='font-bold'>Cherry selection standards:</span> Does the station reject underripe and overripe cherry at intake? Stricter intake equals fewer defects
        </li>
        <li className='my-2'>
          <span className='font-bold'>Water source and cleanliness:</span> Clean water is essential for fermentation and washing. Contaminated water introduces off-flavors and inconsistencies
        </li>
        <li className='my-2'>
          <span className='font-bold'>Fermentation protocol:</span> Does the manager adjust fermentation time based on temperature and altitude? A fixed schedule regardless of conditions suggests less skill
        </li>
        <li className='my-2'>
          <span className='font-bold'>Drying bed capacity:</span> Overcrowded beds dry unevenly. Ask about the ratio of bed space to daily cherry intake
        </li>
        <li className='my-2'>
          <span className='font-bold'>Turning and sorting discipline:</span> Are beds turned regularly? Is there hand-sorting during drying? These practices separate good stations from great ones
        </li>
        <li className='my-2'>
          <span className='font-bold'>Moisture monitoring:</span> Does the station use moisture meters, or rely on the "bite test" alone? Meters provide more consistent results, especially for export-grade coffee
        </li>
        <li className='my-2'>
          <span className='font-bold'>Track record:</span> Ask your exporter for cupping scores from the same station across multiple harvest seasons. Consistency season to season is the strongest signal of station quality
        </li>
      </ul>

      <p className='my-4'>
        These station-level quality factors directly affect the defect counts and cupping results you see in your pre-shipment samples.
        For a full guide to interpreting those results, see our article on{' '}
        <Link href='/insights/green-coffee-quality-control-defects-grading' className='underline font-bold'>
          green coffee quality control, defects, and grading
        </Link>.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        The Rise of Micro-Lots and Station-Level Traceability
      </h3>
      <p className='my-4'>
        The specialty coffee market has shifted increasingly toward station-level and even day-lot traceability.
        Instead of buying "Yirgacheffe Grade 1," progressive importers now specify the washing station by name: Halo Beriti, Dumerso, Chelchele, Aricha.
      </p>
      <p className='my-4'>
        This shift has been driven by two forces.
        First, buyers have learned that station identity predicts cup character more reliably than region labels.
        Second, traceability premiums incentivize station managers to invest in quality, creating a positive feedback loop: better processing leads to higher premiums, which fund better equipment and training, which improves the next harvest.
      </p>
      <p className='my-4'>
        Some stations have started producing day-lots or micro-lots, separated by harvest date, farmer group, or specific plot.
        These lots are processed and dried separately from the station&apos;s main production and typically command the highest premiums in the specialty market.
        For roasters, they offer a unique opportunity to tell a highly specific origin story.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        What Washing Station Data Should Appear on Your Contract
      </h3>
      <p className='my-4'>
        When evaluating an Ethiopian green coffee contract, the following washing station details help you make informed purchase decisions.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Contract Checklist: Washing Station Information</h4>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'><span className='font-bold'>Station name:</span> The specific washing station or wet mill</li>
          <li className='my-2'><span className='font-bold'>Location:</span> Region, zone, woreda, and kebele</li>
          <li className='my-2'><span className='font-bold'>Altitude:</span> Elevation of the station and/or the surrounding farms</li>
          <li className='my-2'><span className='font-bold'>Processing method:</span> Washed, natural, or honey (with fermentation details if available)</li>
          <li className='my-2'><span className='font-bold'>Grade:</span> ECX grade (1 through 5 for washed, 1 through 5 for naturals)</li>
          <li className='my-2'><span className='font-bold'>Crop year:</span> The harvest season the coffee was produced</li>
          <li className='my-2'><span className='font-bold'>Ownership type:</span> Cooperative or private</li>
          <li className='my-2'><span className='font-bold'>Certifications:</span> Organic, Fair Trade, Rainforest Alliance, or conventional</li>
        </ul>
      </div>

      <p className='my-4'>
        The more of these data points your exporter can provide, the stronger your ability to evaluate, compare, and re-order with confidence.
        Exporters who supply station-level detail are typically working closer to the source and have stronger relationships with station managers.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Challenges Facing Ethiopian Washing Stations
      </h3>
      <p className='my-4'>
        Despite their critical role, washing stations in Ethiopia face significant operational challenges that affect the coffee supply chain.
      </p>

      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>
          <span className='font-bold'>Water scarcity:</span> Washed processing is water-intensive. Some stations face seasonal water shortages that force them to reduce production or switch to natural processing, which affects lot consistency year to year
        </li>
        <li className='my-2'>
          <span className='font-bold'>Infrastructure aging:</span> Many cooperative stations operate with equipment that is 10 to 20 years old. Worn depulpers, cracked fermentation tanks, and damaged drying beds directly reduce output quality
        </li>
        <li className='my-2'>
          <span className='font-bold'>Labor availability:</span> Peak harvest requires large numbers of seasonal workers for cherry sorting, bed turning, and night coverage. Stations in remote areas sometimes struggle to staff adequately
        </li>
        <li className='my-2'>
          <span className='font-bold'>Climate variability:</span> Unpredictable rainfall during the drying period can disrupt schedules and increase defect rates. Stations without proper covering structures are most vulnerable
        </li>
        <li className='my-2'>
          <span className='font-bold'>Price pressure:</span> When FOB prices drop, station margins compress, reducing investment in maintenance and quality practices. This creates a cycle where quality and price both decline
        </li>
      </ul>

      <p className='my-4'>
        Buyers who understand these challenges can make more informed sourcing decisions and build more resilient supply chains by prioritizing stations that have invested in infrastructure and management capacity.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        How Ethiopian Washing Stations Affect Your Sourcing Strategy
      </h3>
      <p className='my-4'>
        Integrating washing station awareness into your sourcing strategy does not require visiting Ethiopia (though it helps).
        Here are practical steps you can take from your roastery or import office.
      </p>

      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>
          <span className='font-bold'>Request station-identified samples:</span> Ask your exporter for samples tagged with the specific washing station rather than just region and grade
        </li>
        <li className='my-2'>
          <span className='font-bold'>Track station performance:</span> Keep cupping notes organized by station name across seasons. Over 2 to 3 crop years, you will see which stations deliver consistent quality and which are variable
        </li>
        <li className='my-2'>
          <span className='font-bold'>Build station relationships:</span> Once you identify a station that matches your quality profile, work with your exporter to secure volume from that station each season. Repeat relationships often improve quality as station managers understand your preferences
        </li>
        <li className='my-2'>
          <span className='font-bold'>Diversify by station, not just region:</span> Instead of buying from three different regions, consider buying from three different stations within one region. This gives you flavor diversity with consistent terroir character
        </li>
      </ul>

      <p className='my-4'>
        This station-level approach transforms your sourcing from reactive sample cupping into proactive quality partnerships.
        It also gives you a much stronger marketing story: your customers can learn about the specific washing station that produced their coffee, not just the country or region.
      </p>

      <div className='bg-dark text-primary p-6 rounded-lg my-8'>
        <h4 className='font-bold text-xl mb-3'>Source Station-Traced Ethiopian Coffee</h4>
        <p className='my-2'>
          Ethio Coffee works directly with washing stations across Ethiopia&apos;s top growing regions, providing full station-level traceability on every lot.
          Whether you need washed or natural processed coffee, we can identify the right station for your quality profile and supply consistent lots season after season.
        </p>
        <div className='flex gap-4 mt-4'>
          <Link href='/contact-us' className='underline font-bold'>CONTACT US FOR STATION-TRACED SAMPLES</Link>
          <Link href='/insights' className='underline font-bold'>EXPLORE MORE INSIGHTS</Link>
        </div>
      </div>

      <h3 className='text-2xl font-extrabold mt-10 mb-4'>Related Insights</h3>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>
          <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='underline font-bold'>
            Washed vs Natural Ethiopian Coffee Processing
          </Link>
        </li>
        <li className='my-2'>
          <Link href='/insights/green-coffee-quality-control-defects-grading' className='underline font-bold'>
            Green Coffee Quality Control, Defects, and Grading
          </Link>
        </li>
        <li className='my-2'>
          <Link href='/insights/how-altitude-terroir-shape-ethiopian-coffee' className='underline font-bold'>
            How Altitude and Terroir Shape Ethiopian Coffee Flavor
          </Link>
        </li>
        <li className='my-2'>
          <Link href='/insights/private-vs-cooperative-ethiopian-coffee-exporters' className='underline font-bold'>
            Private vs Cooperative Ethiopian Coffee Exporters
          </Link>
        </li>
      </ul>
    </>
  )
}

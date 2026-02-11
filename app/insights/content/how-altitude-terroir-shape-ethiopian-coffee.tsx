import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function HowAltitudeTerroirShapeEthiopianCoffee({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Why altitude and terroir matter when sourcing Ethiopian green coffee
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Ethiopian coffee grows across a wide altitude band, from 1,200 meters to above 2,300 meters. The elevation at which a coffee is grown is one of the strongest predictors of its flavor profile.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian highland coffee farm showing terraced slopes at high altitude with coffee trees under shade canopy'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <p className='my-4'>
        Altitude is one of the most important variables in specialty coffee, and Ethiopia is where that variable is most dramatic.
        The country grows Arabica across more than 1,000 meters of elevation range, from the lower forests of Jimma at around 1,200 meters to the exposed highlands of Guji above 2,300 meters.
      </p>

      <p className='my-4'>
        That range produces a striking diversity of cup profiles.
        But altitude alone does not tell the full story.
        The term terroir, borrowed from wine, captures the combined influence of altitude, soil composition, rainfall patterns, temperature swings, shade cover, and local genetics on the final cup.
      </p>

      <p className='my-4'>
        For importers and roasters evaluating Ethiopian green coffee, understanding how altitude and terroir interact is not academic.
        It is the difference between buying a label and buying a flavor.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        What Altitude Actually Does to Coffee
      </h3>
      <p className='my-4'>
        The relationship between altitude and cup quality is well established in specialty coffee, but the mechanism is often misunderstood.
        Altitude does not directly improve coffee. What it does is slow the maturation of the cherry, and that slower ripening has cascade effects on density, sugar development, and acid formation.
      </p>

      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>
          <span className='font-bold'>Slower cherry maturation:</span> At higher elevations, cooler nighttime temperatures slow the metabolic processes inside the coffee cherry. A cherry that takes 9 to 11 months to ripen at 2,000 meters develops more complex sugars than one that matures in 6 to 7 months at 1,400 meters
        </li>
        <li className='my-2'>
          <span className='font-bold'>Higher bean density:</span> Beans grown at elevation are physically harder and denser. Dense beans roast more evenly and tend to hold structure better under heat, which is why roasters prize SHG (Strictly High Grown) and SHB (Strictly Hard Bean) designations
        </li>
        <li className='my-2'>
          <span className='font-bold'>Greater acidity:</span> The extended ripening period allows more organic acids, particularly citric and malic acids, to accumulate in the seed. These acids are the foundation of the bright, sparkling acidity that defines many high-altitude Ethiopian coffees
        </li>
        <li className='my-2'>
          <span className='font-bold'>More aromatic complexity:</span> Slower development means more time for volatile precursor compounds to form. During roasting, these precursors convert into the floral, fruity, and citrus aromatics that characterize coffees from Yirgacheffe, Guji, and upper Sidama
        </li>
      </ul>

      <p className='my-4'>
        In practical terms, a washed coffee from 2,100 meters in Yirgacheffe will almost always taste different from a washed coffee grown at 1,500 meters in Jimma, even if both are Grade 2 and processed identically.
        The altitude gap is doing work that no amount of post-harvest technique can replicate.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Altitude Bands in Ethiopian Coffee
      </h3>
      <p className='my-4'>
        Ethiopia does not use the SHG/SHB grading terminology common in Central America.
        However, the country&apos;s coffee regions naturally fall into altitude bands that correspond to distinct flavor tendencies.
        These are not rigid cutoffs but useful reference ranges for sourcing.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse border border-gray-300 font-inconsolata text-sm'>
          <thead className='bg-dark text-primary'>
            <tr>
              <th className='border border-gray-300 p-3 text-left'>Altitude Band</th>
              <th className='border border-gray-300 p-3 text-left'>Elevation</th>
              <th className='border border-gray-300 p-3 text-left'>Typical Regions</th>
              <th className='border border-gray-300 p-3 text-left'>Flavor Tendencies</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Ultra-High</td>
              <td className='border border-gray-300 p-3'>2,000+ m</td>
              <td className='border border-gray-300 p-3'>Upper Guji, Upper Yirgacheffe, Bensa (Sidama)</td>
              <td className='border border-gray-300 p-3'>Floral, citrus, stone fruit, tea-like body, sparkling acidity</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>High</td>
              <td className='border border-gray-300 p-3'>1,700 to 2,000 m</td>
              <td className='border border-gray-300 p-3'>Yirgacheffe, Sidama, Limu, parts of Guji</td>
              <td className='border border-gray-300 p-3'>Balanced acidity, fruit sweetness, honey, medium body</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Medium</td>
              <td className='border border-gray-300 p-3'>1,400 to 1,700 m</td>
              <td className='border border-gray-300 p-3'>Jimma, Kaffa, lower Harrar, Wellega</td>
              <td className='border border-gray-300 p-3'>Cocoa, spice, earthy tones, fuller body, moderate acidity</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Lower</td>
              <td className='border border-gray-300 p-3'>1,200 to 1,400 m</td>
              <td className='border border-gray-300 p-3'>Parts of western Oromia, lowland Jimma</td>
              <td className='border border-gray-300 p-3'>Mild, nutty, low acidity, heavy body, commercial grade typical</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        For buyers evaluating offers, the altitude stated on a contract or sample card is one of the fastest ways to set expectations before cupping.
        A lot listed at 2,100 meters from Guji should deliver complexity and brightness. A lot from 1,400 meters in western Oromia will lean toward body and earthiness.
        Neither is wrong, but they serve different roasting and blending goals.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Beyond Altitude: The Full Terroir Picture
      </h3>
      <p className='my-4'>
        Altitude gets the most attention, but it is only one part of terroir.
        In Ethiopian coffee, the following environmental factors interact with elevation to shape the final cup.
      </p>

      <h4 className='text-xl font-bold mt-6'>Soil Composition</h4>
      <p className='my-4'>
        Ethiopia&apos;s coffee regions sit on diverse geological foundations.
        The volcanic red soils (nitisols) found in Yirgacheffe and Sidama are rich in iron and phosphorus, which support nutrient uptake during cherry development.
        The darker, organic-rich soils of Kaffa&apos;s forests contribute to the earthy, herbal character associated with wild forest coffees.
        Soil pH, drainage, and mineral content all influence root health and nutrient availability, which in turn affect bean chemistry.
      </p>

      <h4 className='text-xl font-bold mt-6'>Rainfall and Dry Season Timing</h4>
      <p className='my-4'>
        Ethiopian coffee regions receive between 1,200 and 2,000 mm of rain annually, but the distribution matters more than the total.
        The distinct dry season from November to February coincides with the main harvest, allowing cherries to dry naturally on raised beds without interruption from rain.
        Regions with a sharper wet-dry transition, such as Guji, tend to produce cleaner naturals because drying conditions are more predictable.
      </p>

      <h4 className='text-xl font-bold mt-6'>Diurnal Temperature Range</h4>
      <p className='my-4'>
        The gap between daytime highs and nighttime lows is a key driver of sugar accumulation and acid retention.
        At 2,000 meters in the Ethiopian highlands, daytime temperatures might reach 24 to 26 degrees Celsius while dropping to 10 to 12 degrees Celsius at night.
        That 12 to 14 degree swing forces the cherry to metabolize slowly, creating conditions for the complex acidity and sweetness that define high-altitude Ethiopian lots.
      </p>

      <h4 className='text-xl font-bold mt-6'>Shade Canopy</h4>
      <p className='my-4'>
        Most Ethiopian coffee grows under shade from indigenous trees, a practice that predates the modern sustainability movement by centuries.
        Shade moderates temperature extremes, protects soil moisture, and slows cherry ripening further.
        The wild forest coffee of Kaffa and the garden coffees of Sidama benefit from natural shade ecosystems that contribute to their distinctive flavor complexity.
      </p>

      <h4 className='text-xl font-bold mt-6'>Genetic Diversity</h4>
      <p className='my-4'>
        Ethiopia is the center of origin for Coffea arabica, and its growing regions contain thousands of distinct landrace varieties.
        Two farms at the same altitude in the same zone may produce different cup profiles simply because they grow different local varieties.
        This genetic factor is unique to Ethiopia and impossible to replicate in other origin countries.
        For a deeper look at this dimension, see our guide to{' '}
        <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='underline font-bold'>
          Ethiopian heirloom coffee varieties and landraces
        </Link>.
      </p>

      <div className='bg-amber-100 p-6 rounded-lg my-8'>
        <h4 className='font-bold text-xl mb-2'>Terroir in Practice: Same Region, Different Cup</h4>
        <p className='my-2'>
          Two washed lots from Yirgacheffe can taste noticeably different if one comes from the Kochere sub-district at 2,100 meters on volcanic red soil and the other from Aricha at 1,850 meters on sandier ground.
          The altitude gap, combined with soil differences and potentially different landrace varieties at each washing station, produces distinct acidity profiles, body texture, and aromatic signatures.
          This is terroir at work, and it is why lot-level sourcing matters more than region-level labels.
        </p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        How Altitude Interacts with Processing
      </h3>
      <p className='my-4'>
        Processing method and altitude are not independent variables.
        The same cherry processed as a washed coffee versus a natural will taste different, but altitude shapes the starting material that processing works with.
      </p>

      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>
          <span className='font-bold'>High-altitude washed coffees</span> tend to produce the cleanest expression of terroir: bright acidity, floral aromatics, and citrus notes with a tea-like body.
          The washing process removes the fruit mucilage, letting the intrinsic seed character (shaped by altitude and soil) come through
        </li>
        <li className='my-2'>
          <span className='font-bold'>High-altitude naturals</span> combine the complexity of slow-ripened, dense beans with the added fruit sweetness of dried cherry contact.
          The result is often intensely fruity (strawberry, blueberry, tropical) with the structural acidity that only high-altitude beans can provide.
          Without that underlying density, natural processed coffees can taste flat or ferment-heavy
        </li>
        <li className='my-2'>
          <span className='font-bold'>Medium-altitude naturals</span> from regions like Jimma or lower Harrar tend toward heavier body, cocoa, and spice notes with less acidity.
          These work well in blends or darker roast profiles where brightness is less critical
        </li>
      </ul>

      <p className='my-4'>
        This interaction is especially relevant when comparing lots.
        A natural from Guji at 2,100 meters will have more structure and acidity than a natural from Jimma at 1,500 meters, even though both are &quot;natural processed Ethiopian.&quot;
        The altitude is doing foundational work that processing builds on top of.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Region-by-Region Altitude and Terroir Guide
      </h3>
      <p className='my-4'>
        For a detailed{' '}
        <Link href='/insights/guide-ethiopian-coffee-origins' className='underline font-bold'>
          guide to Ethiopian coffee origins by region
        </Link>
        , see our dedicated article.
        Below is a terroir-focused summary of how altitude shapes each major origin.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Yirgacheffe (1,700 to 2,200 m)</h4>
        <p className='my-2'>
          Volcanic red soils, consistent rainfall, and very high elevations in sub-districts like Kochere, Gelana Abaya, and Wenago.
          The terroir produces Ethiopia&apos;s most consistently floral coffees, with jasmine, bergamot, and lemon being common descriptors.
          Washed lots from the upper elevations are among the most sought-after in the global specialty market.
        </p>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Guji (1,900 to 2,300+ m)</h4>
        <p className='my-2'>
          Some of Ethiopia&apos;s highest-altitude coffee comes from Guji&apos;s Hambela, Shakiso, and Uraga districts.
          The combination of extreme elevation, well-drained soils, and sharp dry seasons produces dense beans with stone-fruit sweetness, complex acidity, and a syrupy body.
          Guji naturals regularly score above 87 in cupping, according to recent Cup of Excellence and SCA evaluations.
        </p>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Sidama (1,600 to 2,200 m)</h4>
        <p className='my-2'>
          A broad range of elevations produces diverse profiles.
          Upper Sidama (Bensa, Chire) at 2,000+ meters rivals Yirgacheffe for complexity.
          Mid-altitude Sidama produces the berry-forward naturals that made the region famous.
          The terroir varies significantly between sub-zones, making Sidama one of the most internally diverse Ethiopian origins.
        </p>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Harrar (1,500 to 2,000 m)</h4>
        <p className='my-2'>
          Eastern Ethiopia&apos;s drier climate and lower average altitude produce a distinctly different terroir.
          Harrar coffees are traditionally natural processed, with dried fruit, winey acidity, and cocoa notes.
          The semi-arid conditions and lower rainfall mean smaller, denser cherries with concentrated flavor but less of the floral brightness found in the southern highlands.
        </p>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Jimma and Kaffa (1,200 to 1,900 m)</h4>
        <p className='my-2'>
          The western regions grow coffee at moderate elevations under dense forest canopy.
          These terroirs produce earthy, herbal, cocoa-toned coffees with heavier body and lower acidity.
          Kaffa&apos;s wild forest coffees are genetically unique and carry flavors that reflect centuries of undisturbed ecosystem interaction.
          While less fashionable in the specialty market, these origins offer excellent value and are prized in espresso blends.
        </p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        What This Means for Sourcing Decisions
      </h3>
      <p className='my-4'>
        Understanding altitude and terroir changes how you evaluate Ethiopian green coffee offers.
        Instead of relying solely on region name or grade, you can use terroir data to predict cup character before you even cup the sample.
      </p>

      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>
          <span className='font-bold'>Ask for elevation data:</span> A lot listed as &quot;Yirgacheffe Grade 1&quot; from 2,100 meters will taste different than one from 1,750 meters. Both may be excellent, but they serve different purposes on your menu
        </li>
        <li className='my-2'>
          <span className='font-bold'>Request sub-region and washing station details:</span> Within any major origin, terroir varies at the micro level. Knowing the specific kebele or washing station helps you build repeat sourcing relationships
        </li>
        <li className='my-2'>
          <span className='font-bold'>Match altitude to your roast philosophy:</span> If you roast light and focus on acidity and aromatics, prioritize lots above 1,900 meters. If you need body and depth for blends, lots from 1,400 to 1,700 meters will perform better
        </li>
        <li className='my-2'>
          <span className='font-bold'>Consider altitude when comparing processing methods:</span> A natural from 2,000 meters is a fundamentally different product from a natural at 1,400 meters. Evaluate them separately rather than comparing &quot;naturals&quot; as a single category
        </li>
        <li className='my-2'>
          <span className='font-bold'>Use terroir data in your marketing:</span> Customers respond to specifics. &quot;Grown at 2,150 meters on volcanic soil in Kochere, Yirgacheffe&quot; tells a more compelling story than &quot;Ethiopian single origin.&quot;
          For a side-by-side look at how Ethiopia&apos;s top three regions compare,
          see our{' '}
          <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='underline font-bold'>
            Yirgacheffe vs Sidamo vs Guji comparison
          </Link>
        </li>
      </ul>

      <div className='bg-amber-100 p-6 rounded-lg my-8'>
        <h4 className='font-bold text-xl mb-2'>Quick Reference: Altitude and Cup Expectations</h4>
        <ul className='font-inconsolata my-2 list-disc ml-5'>
          <li className='my-2'>Above 2,000 m: Expect bright acidity, floral aromatics, complex fruit, lighter body. Best for light roast, pour-over, single-origin showcase</li>
          <li className='my-2'>1,700 to 2,000 m: Expect balanced acidity, fruit sweetness, medium body. Versatile for filter and espresso</li>
          <li className='my-2'>1,400 to 1,700 m: Expect moderate acidity, cocoa and spice notes, fuller body. Strong in blends and medium-dark roasts</li>
          <li className='my-2'>Below 1,400 m: Expect low acidity, earthy and nutty notes, heavy body. Typically commercial grade</li>
        </ul>
        <p className='text-sm text-gray-600 mt-3 italic'>
          These are general tendencies. Processing method, variety, and specific soil conditions will modify the final cup within each band.
        </p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        The Bottom Line: How Altitude and Terroir Guide Better Coffee Sourcing
      </h3>
      <p className='my-4'>
        Ethiopian coffee is shaped by its environment in ways that are measurable and predictable.
        Altitude determines the raw potential of the bean through density, sugar content, and acid formation.
        Terroir, the full combination of soil, rainfall, temperature, shade, and genetics, transforms that potential into the specific flavor profile you taste in the cup.
      </p>

      <p className='my-4'>
        When you source Ethiopian green coffee with terroir awareness, you are not just buying beans.
        You are buying the product of a specific place, a specific elevation, and a specific ecosystem.
        That specificity is what allows roasters to build differentiated offerings and what makes Ethiopian coffee irreplaceable in the global specialty market.
      </p>

      <p className='my-4'>
        The more you understand about altitude and terroir, the better your sourcing decisions become, and the better you can communicate the story of your coffee to the customers who drink it.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <p className='my-2 font-medium'>
          Ethio Coffee exports Ethiopian green coffee from every major altitude band, with full traceability to the washing station, sub-region, and elevation.
          Whether you need ultra-high-altitude microlots for competition or balanced mid-altitude lots for blending, we can match you with the right terroir.
        </p>
        <div className='flex gap-4 mt-4'>
          <Link href='/contact-us' className='underline font-bold'>CONTACT US</Link>
          <Link href='/insights' className='underline font-bold'>EXPLORE MORE INSIGHTS</Link>
        </div>
      </div>
    </>
  )
}

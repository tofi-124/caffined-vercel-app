import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { HiOutlineCalendarDays } from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function CoffeeIsArtRoastingBrewing({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
          <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
            {title}
          </h1>
          <h2 className='text-2xl font-medium text-gray-700 mb-6'>
            Mastering the creative and technical aspects of transforming green beans into exceptional cups
          </h2>

          <figure>
            <figcaption className='font-inconsolata my-2'>
              Coffee art insights from roasting techniques to brewing mastery
            </figcaption>

            <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
              <ResponsiveImage
                src={`/images/${large_image_url}`}
                alt={`${title} - Coffee art roasting and brewing guide`}
                fill
                objectFit='cover'
                className='w-full h-full'
                sizes='(max-width: 768px) 100vw, 768px'
              />
            </div>
          </figure>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Introduction: Coffee as an Artistic Endeavor</h2>
          <p className='my-4'>
            Welcome to the sixth installment of our "Coffee Is" series, where we explore coffee through multifaceted perspectives. In this chapter, we delve into coffee is an art - the creative and technical mastery of transforming green beans into exceptional cups through skilled coffee roasting and precise coffee brewing techniques.
          </p>
          <p className='my-4'>
            Coffee art combines scientific understanding with creative imagination, requiring practice, knowledge, and experimentation to achieve perfect extraction and flavor harmony. Every roast curve and brew represents the conscious application of skill in the coffee roasting and coffee brewing process.
          </p>
          <p className='my-4'>
            To connect roast and origin, review <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='underline font-bold'>Coffee is a Science</Link> for compound mapping and <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='underline font-bold'>our regional comparison</Link> to tailor roast and brew recipes to origin characteristics.
          </p>

          <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
            <span className='font-semibold'>Part of the &quot;Coffee Is&quot; Series:</span>
            <div className='flex flex-wrap gap-2 mt-2'>
              <Link href='/insights/coffee-plant-taxonomy-species-varieties' className='underline text-xs'>1. Plant</Link>
              <Link href='/insights/coffee-is-agriculture-production-farming' className='underline text-xs'>2. Agriculture</Link>
              <Link href='/insights/coffee-is-processing-drying-milling' className='underline text-xs'>3. Processing</Link>
              <Link href='/insights/coffee-is-commerce-exporting-importing-buying' className='underline text-xs'>4. Commerce</Link>
              <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='underline text-xs'>5. Science</Link>
              <span className='bg-dark text-primary px-2 py-1 rounded text-xs'>6. Art (You are here)</span>
            </div>
          </div>

          <div className='bg-dark text-primary p-6 rounded-lg my-6'>
            <p className='font-medium'>
              <span className='font-bold'>In this article:</span> We cover roaster hardware, roast development, a sample roast profile, and practical brewing recipes for common methods so you can apply artistic technique to highlight origin character.
            </p>
          </div>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>The Art of Coffee Roasting: Heat Transfer and Control</h2>
          <p className='my-4'>
            Coffee roasting is the intentional application of heat to create profound physical and chemical changes in coffee beans. This coffee art process transforms green coffee into roasted coffee through controlled heat transfer and precise temperature management.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Roaster Components and Technical Specifications</h3>
          <p className='my-4'>
            Modern coffee roasters feature several key components that enable precise control over the roasting process:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Hopper:</strong> Green bean storage and loading mechanism for consistent feed rates</li>
            <li><strong>Drum or Fluid Bed:</strong> Primary roasting chamber where heat transfer occurs through conduction, convection, or hot air</li>
            <li><strong>Chaff Collector:</strong> Vacuum system that removes silver skin and prevents combustion</li>
            <li><strong>Control Panel:</strong> Interface for monitoring and adjusting roast parameters</li>
            <li><strong>Cooling Tray:</strong> Rapid cooling system to halt roasting reactions</li>
            <li><strong>Airflow System:</strong> Fan and ducting that control air velocity and volume within the roast chamber</li>
          </ul>
          <p className='my-4'>
            Coffee roasting equipment ranges from small 50-gram sample roasters to massive 100-kilogram production units, each designed for specific heat transfer methods and capacity requirements.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Sensors and Data-Driven Roasting</h3>
          <p className='my-4'>
            Advanced coffee roasting relies on comprehensive sensor data to monitor and control the roast curve:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Bean Temperature Probe:</strong> Measures internal bean temperature for precise roast development</li>
            <li><strong>Inlet Temperature:</strong> Monitors heat source temperature entering the roast chamber</li>
            <li><strong>Drum Surface Temperature:</strong> Tracks conductive heat transfer from the drum</li>
            <li><strong>Exhaust Temperature:</strong> Indicates roast progression and airflow efficiency</li>
            <li><strong>Airflow Velocity and Volume:</strong> Controls convection heating and moisture removal</li>
            <li><strong>Crack Detection:</strong> Audio sensors that identify first and second crack events</li>
          </ul>
          <p className='my-4'>
            These sensors enable roasters to create precise roast curves that optimize flavor development and consistency in coffee roasting.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Sample vs. Production Roasting Techniques</h3>
          <p className='my-4'>
            Coffee art requires different approaches for sample and production roasting:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Sample Roasting:</strong> Small-batch roasting (50g-1kg) for quality assessment and profile development</li>
            <li><strong>Production Roasting:</strong> Large-scale roasting requiring consistent heat transfer and airflow management</li>
            <li><strong>Heat Transfer Methods:</strong> Drum roasters use conductive heating, fluid bed roasters rely on convective hot air</li>
            <li><strong>Energy Sources:</strong> Gas burners for direct flame heating or electric elements for precise temperature control</li>
          </ul>
          <p className='my-4'>
            Understanding these differences is crucial for scaling coffee roasting techniques from development to commercial production.
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Chemical Transformations in Roasted Coffee</h2>
          <p className='my-4'>
            The coffee roasting process fundamentally alters the chemical composition of green coffee, creating the foundation for exceptional flavor through controlled chemical reactions.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Roast Development and Compound Changes</h3>
          <p className='my-4'>
            Heat application during coffee roasting triggers multiple chemical transformations:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Moisture Evaporation:</strong> Initial drying phase removes 10-15% water content</li>
            <li><strong>Maillard Reactions:</strong> Complex browning reactions between amino acids and sugars create flavor compounds</li>
            <li><strong>Caramelization:</strong> Sugar breakdown produces sweetness and color changes</li>
            <li><strong>Pyrolysis:</strong> Thermal decomposition of chlorogenic acids and other compounds</li>
            <li><strong>Volatilization:</strong> Release of aromatic compounds that contribute to coffee aroma</li>
          </ul>
          <p className='my-4'>
            These transformations convert green coffee compounds into the complex flavor profile of roasted coffee, requiring precise control of the roast curve.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Roast Degrees and Flavor Profiles</h3>
          <p className='my-4'>
            Different roast levels achieve distinct chemical balances:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Light Roast:</strong> Preserves more origin characteristics with higher acidity and complex flavors</li>
            <li><strong>Medium Roast:</strong> Balanced development of sweetness and body with moderate roast character</li>
            <li><strong>Dark Roast:</strong> Enhanced roast flavors with reduced acidity and increased bitterness</li>
            <li><strong>Roast Curve Control:</strong> Temperature ramping that determines the final compound composition</li>
          </ul>
          <p className='my-4'>
            Mastering coffee roasting involves understanding how heat transfer affects these chemical changes throughout the roast process.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Sample Roast Profile (Development Example)</h3>
          <p className='my-4'>
            Example profile for a light-plus origin roast (50kg drum):
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Charge:</strong> 180°C, 50kg in drum</li>
            <li><strong>Early ramp:</strong> +1.5–2°C/sec to 150°C over first 3 minutes</li>
            <li><strong>First crack:</strong> Target at 8:30–9:00 minutes, hold mild ramp</li>
            <li><strong>Development time:</strong> 1:15–1:45 minutes (light-plus) to preserve origin acidity</li>
            <li><strong>Drop temp:</strong> Rapid cooling to stop reactions and preserve aromatics</li>
          </ul>
          <p className='my-4'>
            Note: This is a starting template. Sensory verification (sample roasts and cupping) is essential to refine any roast curve for a given lot.
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>The Art of Coffee Brewing: Fundamentals of Extraction</h2>
          <p className='my-4'>
            Coffee brewing represents the final artistic expression, where roasted coffee compounds are extracted through water to create the perfect cup. This coffee extraction process requires understanding solubility, time, temperature, and technique.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Brewing Fundamentals and Water Chemistry</h3>
          <p className='my-4'>
            Successful coffee brewing depends on fundamental principles:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Water Temperature:</strong> Optimal range of 195-205°F (91-96°C) for balanced extraction</li>
            <li><strong>Water Quality:</strong> Proper mineral content and pH for efficient compound dissolution</li>
            <li><strong>Grind Size:</strong> Particle size affects surface area and extraction rate</li>
            <li><strong>Brew Time:</strong> Duration that allows complete but not over-extraction</li>
            <li><strong>Agitation:</strong> Water flow and turbulence that promote even extraction</li>
          </ul>
          <p className='my-4'>
            These brewing techniques form the foundation for consistent and flavorful coffee extraction.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Brewing Recipe Examples</h3>
          <p className='my-4'>
            Two practical recipes to try when assessing a new lot:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>V60 (balance):</strong> 16g coffee / 250g water, 94°C, 2:30–3:00 total time, bloom 30s with 40g   pour in thirds.</li>
            <li><strong>Espresso (clarity):</strong> 18g in / 36g out, 25–30s, dose and grind to taste   adjust yield to balance sweetness and acidity.</li>
          </ul>
          <p className='my-4'>
            These recipes provide a repeatable baseline for comparing lots and developing recipes that highlight origin character.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Extraction Theory and Compound Solubility</h3>
          <p className='my-4'>
            Coffee extraction involves dissolving soluble compounds from ground coffee:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Soluble Solids:</strong> Target extraction of 18-22% total dissolved solids</li>
            <li><strong>Flavor Compounds:</strong> Balanced extraction of acids, sugars, and bitter compounds</li>
            <li><strong>Over-extraction:</strong> Excessive contact time leading to bitterness and astringency</li>
            <li><strong>Under-extraction:</strong> Insufficient extraction resulting in weak, sour flavors</li>
            <li><strong>Flow Rate Control:</strong> Managing water contact time for optimal compound dissolution</li>
          </ul>
          <p className='my-4'>
            Understanding coffee extraction principles enables roasters and baristas to develop precise brewing techniques.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Advanced Brewing Methods and Techniques</h3>
          <p className='my-4'>
            Various brewing methods offer different approaches to coffee extraction:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Immersion Brewing:</strong> French press and cold brew methods with extended contact time</li>
            <li><strong>Drip Brewing:</strong> Pour-over and automatic drip systems with controlled flow rates</li>
            <li><strong>Pressure Brewing:</strong> Espresso extraction using high pressure for concentrated results</li>
            <li><strong>Alternative Methods:</strong> AeroPress, siphon, and Turkish coffee techniques</li>
            <li><strong>Ratio Optimization:</strong> Coffee-to-water ratios that achieve target extraction percentages</li>
          </ul>
          <p className='my-4'>
            Each brewing technique requires specific knowledge of coffee extraction dynamics to achieve optimal flavor balance.
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Conclusion: Mastering the Art of Coffee Excellence</h2>
          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Roast Troubleshooting (Quick Tips)</h3>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Too sour/underdeveloped:</strong> Increase development time after first crack or slightly raise final roast temperature.</li>
            <li><strong>Too bitter/ashtray:</strong> Reduce development time or lower charge temp; check for over-aggressive airflow.</li>
            <li><strong>Uneven roast:</strong> Check drum flow, charge distribution, and bean moisture variability.</li>
          </ul>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>More Brewing Recipes</h3>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Cold Brew (clarity):</strong> 1:8 ratio, steep 16–18 hours at room temp, filter and dilute to taste.</li>
            <li><strong>AeroPress (bright & clean):</strong> 18g coffee, 220g water at 92°C, 1:30–1:45 total time using inverted method for fuller body.</li>
          </ul>
          <p className='my-4'>
            Coffee is an art that combines scientific understanding with creative skill in roasting and brewing. Mastering heat transfer, roast curves, and extraction principles allows coffee professionals to transform green beans into exceptional cups through deliberate practice and experimentation.
          </p>
          <p className='my-4'>
            At Ethio Coffee, we embrace the artistic aspects of coffee roasting and brewing, applying our expertise to create unique flavor profiles that showcase the best of Ethiopian coffee heritage.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Roasting Ethiopian Coffees: Origin-Specific Tips</h3>
          <p className='my-4'>
            Ethiopian coffees reward thoughtful roasting that honors their distinct characteristics:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Washed Yirgacheffes:</strong> Light to medium roasts preserve the delicate floral and citrus notes. Extended development can mute the jasmine aromatics that make these coffees special.</li>
            <li><strong>Natural Gujis:</strong> These fruit-forward coffees can handle slightly more development - the sugars from natural processing create excellent caramelization potential while maintaining fruit character.</li>
            <li><strong>Sidamo varieties:</strong> Versatile for various roast levels - light for tea-like elegance, medium for balanced sweetness, or medium-dark for espresso applications with berry-chocolate notes.</li>
          </ul>
          <p className='my-4'>
            For more on how processing affects roast approach, see our <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='underline'>washed vs natural comparison</Link>. 
            For origin-specific profiles, explore our <Link href='/insights/guide-ethiopian-coffee-origins' className='underline'>complete guide to Ethiopian coffee origins</Link>.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>The Complete &quot;Coffee Is&quot; Series</h3>
          <p className='my-4'>
            You&apos;ve reached the end of our six-part educational series. For a comprehensive understanding 
            of coffee from seed to cup, explore the full journey:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><Link href='/insights/coffee-plant-taxonomy-species-varieties' className='underline font-bold'>Coffee Is A Plant</Link> - The botanical foundations and genetic diversity of coffee</li>
            <li><Link href='/insights/coffee-is-agriculture-production-farming' className='underline font-bold'>Coffee Is Agriculture</Link> - How coffee is grown, from soil science to harvest</li>
            <li><Link href='/insights/coffee-is-processing-drying-milling' className='underline font-bold'>Coffee Is Processing</Link> - The post-harvest transformation of cherry to green bean</li>
            <li><Link href='/insights/coffee-is-commerce-exporting-importing-buying' className='underline font-bold'>Coffee Is Commerce</Link> - How coffee moves through global trade networks</li>
            <li><Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='underline font-bold'>Coffee Is Science</Link> - The chemistry and evaluation methods behind quality</li>
            <li><span className='font-bold'>Coffee Is Art</span> - The creative mastery of roasting and brewing (You are here)</li>
          </ul>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>See Art in Action</h3>
          <p className='my-4'>
            Curious how the world&apos;s best coffee professionals apply these principles? Explore our guide to the <Link href='/insights/top-10-specialty-coffee-shops-world' className='underline font-bold'>Top 10 Specialty Coffee Shops Around the World</Link> - showcasing roasters and baristas who have mastered the art of coffee roasting and brewing, many featuring exceptional Ethiopian origins.
          </p>

          <p className='my-4'>
            If you roast Ethiopian beans specifically, our detailed guide on{' '}
            <Link href='/insights/how-to-roast-ethiopian-coffee-guide' className='underline font-bold'>
              how to roast Ethiopian coffee
            </Link>{' '}
            covers profiles for washed and natural lots, region-specific tips, and common mistakes to avoid.
          </p>

          <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
            <p className='my-2 font-medium'>
              Ready to experience the art of exceptional Ethiopian coffee? Contact us to discover our masterful roasting and brewing techniques.
            </p>
            <div className='flex gap-4 mt-4'>
              <Link href='/contact-us' className='underline font-bold'>
                GET IN TOUCH
              </Link>
              <Link href='/offerings' className='underline font-bold'>
                VIEW OFFERINGS
              </Link>
            </div>
          </div>

          <div className='border-t border-gray-300 mt-10 pt-6'>
            <p className='text-sm text-gray-600 font-inconsolata'>
              <span className='font-bold'>References & Further Reading:</span> This article draws from educational 
              materials developed by Café Imports, World Coffee Research variety catalog, UC Davis Coffee Center 
              research, and various genetic studies on Coffea arabica phylogenetics.
            </p>
          </div>
    </>
  )
}

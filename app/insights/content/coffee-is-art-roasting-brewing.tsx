import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'

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

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Introduction: Coffee Roasting and Brewing as Creative Craft</h2>
          <p className='my-4'>
            A perfectly roasted lot can fall flat in the cup. A flawless green coffee can taste hollow after a careless roast. The gap between potential and result is where the art of coffee roasting and coffee brewing lives. This sixth chapter of the "Coffee Is" series examines the creative and technical skills that turn green beans into standout cups.
          </p>
          <p className='my-4'>
            Roasting and brewing demand equal parts science and instinct. Every roast curve reflects choices about heat, airflow, and timing; every brew recipe balances dose, grind, temperature, and contact time. Mastering these variables is what separates competent production from exceptional coffee.
          </p>
          <p className='my-4'>
            To connect roast and origin, review <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='underline font-bold'>Coffee is a Science</Link> for compound mapping, <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='underline font-bold'>our regional comparison</Link> to tailor roast and brew recipes to origin characteristics, and our in-depth <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='underline font-bold'>guide to roasting Ethiopian coffee beans</Link> for region-specific profiles and troubleshooting.
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

          <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
            <p className='font-medium'>
              <span className='font-bold'>Key Takeaway:</span> Great coffee roasting preserves origin character through controlled heat transfer and precise development timing. Great brewing extracts that character through accurate dose, temperature, and contact time. This guide covers the hardware, profiles, and recipes you need to apply both skills effectively.
            </p>
          </div>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>The Art of Coffee Roasting: Heat Transfer and Control</h2>
          <p className='my-4'>
            Coffee roasting is the intentional application of heat to drive physical and chemical changes in green beans. The process transforms raw material into roasted coffee through controlled heat transfer and precise temperature management.
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
            Roasting requires different approaches at sample and production scale:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Sample Roasting:</strong> Small-batch roasting (50g-1kg) for quality assessment and profile development</li>
            <li><strong>Production Roasting:</strong> Large-scale roasting requiring consistent heat transfer and airflow management</li>
            <li><strong>Heat Transfer Methods:</strong> Drum roasters use conductive heating, fluid bed roasters rely on convective hot air</li>
            <li><strong>Energy Sources:</strong> Gas burners for direct flame heating or electric elements for precise temperature control</li>
          </ul>
          <p className='my-4'>
            These differences matter when scaling a roast profile from sample evaluation to full commercial production.
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
            Brewing is the final step where roasted coffee compounds dissolve into water to produce the finished cup. Achieving balanced extraction requires control over solubility, time, temperature, and technique.
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

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Practical Troubleshooting and Additional Recipes</h2>
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
            Coffee roasting and brewing reward deliberate practice. Mastering heat transfer, roast curves, and extraction variables gives you the tools to reveal what makes each lot distinctive, rather than masking it.
          </p>
          <p className='my-4'>
            At Ethio Coffee Import and Export PLC, we source green coffees with the complexity to reward skilled roasting. Our lots arrive with detailed cupping notes, processing data, and suggested profile guidance so your roast and brew decisions start from solid ground.
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

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>See These Principles in Practice</h3>
          <p className='my-4'>
            Want to see how leading roasters and baristas apply these techniques? Our guide to the <Link href='/insights/top-10-specialty-coffee-shops-world' className='underline font-bold'>Top 10 Specialty Coffee Shops Around the World</Link> profiles professionals who have built reputations on precision roasting and brewing, many working with Ethiopian single origins.
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Frequently Asked Questions</h2>
          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>What temperature should I roast Ethiopian coffee at?</h3>
          <p className='my-4'>
            Charge temperature between 170°C and 190°C works well for most Ethiopian lots. Target first crack around 8:30 to 9:00 minutes. For washed coffees, keep development time short (60 to 90 seconds) to preserve floral and citrus acidity. Natural process lots tolerate slightly longer development.
          </p>
          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>How does grind size affect coffee extraction?</h3>
          <p className='my-4'>
            Finer grinds increase surface area and speed up extraction, producing stronger and more intense cups. Coarser grinds slow extraction, yielding lighter and cleaner flavors. Match grind size to your brew method: fine for espresso, medium for pour-over, coarse for French press or cold brew.
          </p>
          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>What is the ideal water temperature for brewing coffee?</h3>
          <p className='my-4'>
            The Specialty Coffee Association recommends 195°F to 205°F (91°C to 96°C) for most brewing methods. Water below this range under-extracts, producing sour and thin cups. Water above it over-extracts, pulling harsh and bitter compounds. Adjust within this range based on roast level and grind size.
          </p>
          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>What is development time in coffee roasting?</h3>
          <p className='my-4'>
            Development time is the period between first crack and the end of the roast. It typically ranges from 60 to 120 seconds for light to medium roasts. Shorter development preserves bright acidity and origin character. Longer development builds body and sweetness but can mute delicate aromatics.
          </p>
          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>How do I know if my coffee is over-extracted or under-extracted?</h3>
          <p className='my-4'>
            Under-extracted coffee tastes sour, thin, and lacks sweetness. Over-extracted coffee tastes bitter, astringent, and hollow. A well-extracted cup balances acidity, sweetness, and body. Use a refractometer to target 18% to 22% extraction yield, or adjust by taste using grind size and brew time.
          </p>

          <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
            <h4 className='font-bold text-xl mb-3'>Source Premium Ethiopian Coffee Direct from Origin</h4>
            <p className='my-2'>
              <span className='font-bold'>Ethio Coffee Import and Export PLC</span> supplies specialty-grade Ethiopian green coffee with full traceability, cupping notes, and roast profile guidance. Request samples to evaluate our current lots before committing to volume.
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
                <h4 className='font-semibold mb-2 text-sm'>Coffee Journey Series</h4>
                <ul className='space-y-1 text-sm'>
                  <li>• <Link href='/insights/coffee-plant-taxonomy-species-varieties' className='text-amber-700 hover:underline'>Coffee Is A Plant: Taxonomy, Species & Varieties</Link></li>
                  <li>• <Link href='/insights/coffee-is-agriculture-production-farming' className='text-amber-700 hover:underline'>Coffee Is Agriculture: Production & Farming</Link></li>
                  <li>• <Link href='/insights/coffee-is-processing-drying-milling' className='text-amber-700 hover:underline'>Coffee Is Processing: Drying & Milling</Link></li>
                  <li>• <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='text-amber-700 hover:underline'>Coffee Is Science: Analysis & Evaluation</Link></li>
                  <li>• <Link href='/insights/coffee-is-commerce-exporting-importing-buying' className='text-amber-700 hover:underline'>Coffee Is Commerce: Exporting & Importing</Link></li>
                </ul>
              </div>
              <div>
                <h4 className='font-semibold mb-2 text-sm'>Roasting & Brewing</h4>
                <ul className='space-y-1 text-sm'>
                  <li>• <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='text-amber-700 hover:underline'>Guide to Roasting Ethiopian Coffee Beans</Link></li>
                  <li>• <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup & Evaluate Ethiopian Coffee Samples</Link></li>
                  <li>• <Link href='/insights/how-to-make-coffee-without-a-coffeemaker' className='text-amber-700 hover:underline'>How to Make Coffee Without a Coffeemaker</Link></li>
                </ul>
              </div>
              <div>
                <h4 className='font-semibold mb-2 text-sm'>Origins & Quality</h4>
                <ul className='space-y-1 text-sm'>
                  <li>• <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji Comparison</Link></li>
                  <li>• <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee Processing</Link></li>
                  <li>• <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Complete Guide to Ethiopian Coffee Origins</Link></li>
                  <li>• <Link href='/insights/top-10-specialty-coffee-shops-world' className='text-amber-700 hover:underline'>Top 10 Specialty Coffee Shops in the World</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className='border-t border-gray-300 mt-10 pt-6'>
            <p className='text-sm text-gray-600 font-inconsolata'>
              <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC based on industry roasting and brewing standards, SCA protocols, and three decades of Ethiopian coffee sourcing experience. Roast profiles and brewing parameters are general guidelines; always verify with sample roasts and cupping. <Link href='/contact-us' className='underline'>Contact us</Link> for current lot availability, cupping notes, and roast profile suggestions.
            </p>
            <p className='text-sm text-gray-600 font-inconsolata mt-2'>
              <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
            </p>
          </div>
    </>
  )
}

import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { HiOutlineCalendarDays } from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function CoffeeIsProcessingDryingMilling({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
          <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
            {title}
          </h1>
          <h2 className='text-2xl font-medium text-gray-700 mb-6'>
            Understanding the science, art, and techniques of transforming coffee cherries into green beans
          </h2>

          <figure>
            <figcaption className='font-inconsolata my-2'>
              Ethiopian coffee processing insights
            </figcaption>

            <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
              <ResponsiveImage
                src={`/images/${large_image_url}`}
                alt={`Coffee is Processing - Ethiopian coffee processing insight`}
                fill
                objectFit='cover'
                className='w-full h-full'
                sizes='(max-width: 768px) 100vw, 768px'
              />
            </div>
          </figure>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Introduction: The Art and Science of Coffee Processing</h2>
          <p className='my-4'>
            Welcome to the third installment of our "Coffee Is" series, exploring coffee through its various dimensions. In this chapter, we delve into coffee processing, the transformative steps that turn freshly harvested coffee cherries into the green beans ready for roasting and brewing.
          </p>
          <p className='my-4'>
            Coffee processing is where science meets artistry, where microbial activity, mechanical operations, and human decisions shape the final flavor profile. From the ancient natural methods in Ethiopia to modern controlled fermentations, processing determines much of what ends up in your cup.
          </p>
          <p className='my-4'>
            Understanding coffee processing reveals the infinite variables that make each coffee unique, highlighting the creativity and experimentation in specialty coffee production.
          </p>

          <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
            <span className='font-semibold'>Part of the &quot;Coffee Is&quot; Series:</span>
            <div className='flex flex-wrap gap-2 mt-2'>
              <Link href='/insights/coffee-plant-taxonomy-species-varieties' className='underline text-xs'>1. Plant</Link>
              <Link href='/insights/coffee-is-agriculture-production-farming' className='underline text-xs'>2. Agriculture</Link>
              <span className='bg-dark text-primary px-2 py-1 rounded text-xs'>3. Processing (You are here)</span>
              <Link href='/insights/coffee-is-commerce-exporting-importing-buying' className='underline text-xs'>4. Commerce</Link>
              <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='underline text-xs'>5. Science</Link>
              <Link href='/insights/coffee-is-art-roasting-brewing' className='underline text-xs'>6. Art</Link>
            </div>
          </div>

          <div className='bg-dark text-primary p-6 rounded-lg my-6'>
            <p className='font-medium'>
              <span className='font-bold'>In this article:</span> We break down core processing methods, fermentation science, drying strategies, and milling decisions   with a practical case study from Ethiopian naturals and notes on how these choices map to cup profile.
            </p>
          </div>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>What is Coffee Processing?</h2>
          <p className='my-4'>
            Processing refers to the post-harvest steps taken to remove or retain the fruit layers around the coffee seed, preparing it for drying and export. At its core, processing involves a series of mechanical or chemical operations to change and preserve the coffee seed.
          </p>
          <p className='my-4'>
            The primary goal is to transform the coffee cherry, which contains about 50% moisture, into a stable green bean with 9-14% moisture content, ready for milling and export. This process influences the coffee's flavor, shelf life, and roastability.
          </p>
          <p className='my-4'>
            Key factors in processing include:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Fruit removal:</strong> Deciding how much fruit to keep or remove</li>
            <li><strong>Fermentation:</strong> Controlled microbial activity to break down mucilage</li>
            <li><strong>Drying:</strong> Reducing moisture while preserving quality</li>
            <li><strong>Milling:</strong> Removing the parchment and cleaning the beans</li>
          </ul>
          <p className='my-4'>
            These decisions are influenced by tradition, market trends, environmental factors, and the producer's goals, making processing a highly variable and creative process.
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>The Anatomy of a Coffee Cherry</h2>
          <p className='my-4'>
            To understand processing, we must first examine the coffee cherry's structure. The cherry consists of multiple layers:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Exocarp (skin):</strong> The outer protective layer</li>
            <li><strong>Mesocarp (fruit/mucilage):</strong> The sticky, sugary layer containing sugars, acids, and compounds that influence flavor</li>
            <li><strong>Pectin layer:</strong> A thin barrier between the fruit and parchment</li>
            <li><strong>Endocarp (parchment):</strong> The protective shell around the seed</li>
            <li><strong>Silver skin:</strong> The innermost papery layer on the bean</li>
            <li><strong>Endosperm:</strong> The actual coffee bean</li>
          </ul>
          <p className='my-4'>
            Processing primarily manipulates the outer layers (skin, mucilage, and pectin), determining what remains on the seed during drying and how it affects the final flavor.
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Core Processing Methods: Washed, Honey, and Natural</h2>
          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Washed Coffee Processing</h3>
          <p className='my-4'>
            Washed processing, also known as wet processing, is the most common method globally. It involves removing all fruit layers before drying, resulting in clean, bright coffees.
          </p>
          <p className='my-4'>
            Steps include:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li>Depulping to remove the skin</li>
            <li>Fermentation to break down mucilage</li>
            <li>Washing to remove remaining fruit</li>
            <li>Drying the parchment-covered beans</li>
          </ul>
          <p className='my-4'>
            Washed coffees are known for their delicate, articulate flavors, crisp acidity, and clean mouthfeel. They require significant water and infrastructure but offer consistency and efficiency.
          </p>
          <p className='my-4'>
            For a deeper comparison of processed styles and how they appear in Ethiopian lots, see our guide <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='underline font-bold'>Washed vs Natural Processed Ethiopian Coffee</Link> and our regional comparison <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='underline font-bold'>Yirgacheffe vs Sidamo vs Guji</Link>.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Honey Coffee Processing</h3>
          <p className='my-4'>
            Honey processing, popularized in Costa Rica, removes the skin but leaves some or all of the mucilage on the beans during drying. The term "honey" refers to the sticky, honey-like appearance of the beans.
          </p>
          <p className='my-4'>
            Variations include:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>White honey:</strong> Most mucilage removed</li>
            <li><strong>Yellow honey:</strong> Moderate mucilage</li>
            <li><strong>Red honey:</strong> Significant mucilage</li>
            <li><strong>Black honey:</strong> All mucilage retained</li>
          </ul>
          <p className='my-4'>
            Honey-processed coffees offer fuller body, sweeter notes, and complex fruitiness. Drying takes longer (2-4 weeks) and requires careful monitoring to avoid over-fermentation.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Natural Coffee Processing</h3>
          <p className='my-4'>
            Natural processing, the oldest method originating in Ethiopia, dries the whole cherry without removing any fruit layers. The beans ferment inside the cherry as it dries.
          </p>
          <p className='my-4'>
            This method:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li>Requires no water or depulping equipment</li>
            <li>Takes 3-4 weeks to dry</li>
            <li>Produces bold, fruity, and complex flavors</li>
            <li>Carries higher risk of defects if not managed properly</li>
          </ul>
          <p className='my-4'>
            Natural coffees often feature intense sweetness, wine-like notes, and heavy body, but consistency can be challenging due to variable fermentation.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Case Study: Guji Natural Processing</h3>
          <p className='my-4'>
            Many Guji producers dry whole cherries on raised beds for 2–3 weeks. Typical handling includes frequent turning during the first 10 days, slower turns as sugars concentrate, and careful sorting to remove over-fermented fruit. The result is often a layered cup with strawberry, black tea, and molasses notes   a useful concrete example of how drying technique affects aroma and sweetness.
          </p>
          <p className='my-4'>
            Practical tip: When evaluating natural-processed lots, ask for a detailed drying log (days on bed, average sun hours, and sorting regimes)   these details often explain differences between similarly scored lots.
          </p>
          <p className='my-4'>
            If you're buying, pair this with our <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='underline font-bold'>complete buyer's guide</Link> to understand sourcing and quality checks at origin.
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Fermentation in Coffee Processing</h2>
          <p className='my-4'>
            Fermentation is a controlled microbial process that breaks down the mucilage layer and influences flavor development. It occurs through glycolysis, where microorganisms consume sugars and produce byproducts like acids, alcohols, and volatile aromatics.
          </p>
          <p className='my-4'>
            Key aspects include:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Aerobic vs. Anaerobic:</strong> Oxygen presence affects microbial activity</li>
            <li><strong>Spontaneous vs. Inoculated:</strong> Natural microbes or added starter cultures</li>
            <li><strong>Variables:</strong> Time, temperature, pH, and additives</li>
          </ul>
          <p className='my-4'>
            Modern fermentation techniques like anaerobic processing and carbonic maceration allow producers to experiment with unique flavor profiles, adding complexity to washed, honey, and natural methods.
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Coffee Drying: Preserving Quality</h2>
          <p className='my-4'>
            Drying reduces the coffee's moisture from 50% to 9-14%, making it shelf-stable. The method and duration significantly impact flavor by affecting water activity and volatile compound retention.
          </p>
          <p className='my-4'>
            Common drying methods:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Patio drying:</strong> Beans spread on concrete surfaces, turned regularly</li>
            <li><strong>Raised beds:</strong> Improved air flow and consistency</li>
            <li><strong>Parabolic dryers:</strong> Greenhouse-like structures for controlled drying</li>
            <li><strong>Mechanical dryers:</strong> Fast but can damage flavor precursors if too hot</li>
          </ul>
          <p className='my-4'>
            Slower drying generally preserves more quality, with studies showing longer drying times and more retained fruit correlate with higher volatile aromatic content.
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Coffee Milling: Final Preparation</h2>
          <p className='my-4'>
            Milling removes the parchment layer and cleans the green beans for export. This step ensures uniformity and prevents defects.
          </p>
          <p className='my-4'>
            Key milling steps:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Hulling:</strong> Removing parchment with minimal friction</li>
            <li><strong>Cleaning:</strong> Removing dust, stones, and debris</li>
            <li><strong>Sorting:</strong> By size, density, and color using screens, tables, and optical sorters</li>
            <li><strong>Polishing (optional):</strong> Removing silver skin for a cleaner appearance</li>
          </ul>
          <p className='my-4'>
            Proper milling maintains bean integrity and roastability, with modern technology improving efficiency and quality control.
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Conclusion: The Infinite Possibilities of Coffee Processing</h2>
          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Processing Checklist (For Buyers)</h3>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Processing method:</strong> Washed / Honey / Natural and exact variant (e.g., black honey)</li>
            <li><strong>Fermentation details:</strong> Aerobic/anaerobic, duration, temperature control, inoculants used</li>
            <li><strong>Drying details:</strong> Raised bed vs patio, average sun hours per day, turning regimen, days to target moisture</li>
            <li><strong>Moisture target:</strong> Final % and measurement method</li>
            <li><strong>Sorting & grading:</strong> Screen sizes, defect counts, and whether optical sorting was applied</li>
            <li><strong>Storage:</strong> On-farm resting period, warehouse conditions, and packaging (jute vs. grainpro)</li>
          </ul>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Drying Monitoring Metrics</h3>
          <p className='my-4'>Trackable metrics that predict cup quality:</p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Daily moisture decline:</strong> % moisture drop per day on raised beds</li>
            <li><strong>Average sun exposure:</strong> Hours of direct sun per day</li>
            <li><strong>Sorting yield:</strong> % of lot passing initial QA at day 10 and day 20</li>
          </ul>
          <p className='my-4'>
            Coffee processing is a testament to the beverage's complexity, where biological processes, human creativity, and environmental factors converge to create unique flavor experiences. From traditional Ethiopian naturals to experimental anaerobic fermentations, processing showcases the endless innovation in specialty coffee.
          </p>
          <p className='my-4'>
            At Ethio Coffee, we celebrate this diversity by sourcing coffees processed with care and expertise, ensuring exceptional quality from cherry to cup.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Continue Your Coffee Education</h3>
          <p className='my-4'>
            Now that you understand how coffee is processed, explore what happens next:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><Link href='/insights/coffee-is-commerce-exporting-importing-buying' className='underline font-bold'>Coffee Is Commerce</Link> - How processed coffee moves from Ethiopia to your roastery</li>
            <li><Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='underline font-bold'>Coffee Is Science</Link> - The chemical analysis and sensory evaluation that determines quality grades</li>
            <li><Link href='/insights/coffee-is-art-roasting-brewing' className='underline font-bold'>Coffee Is Art</Link> - How roasters and baristas unlock processing&apos;s flavor potential</li>
          </ul>

          <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
            <p className='my-2 font-medium'>
              Discover how processing influences flavor in our Ethiopian coffees. Contact us to explore our range of washed, honey, and natural-processed offerings.
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

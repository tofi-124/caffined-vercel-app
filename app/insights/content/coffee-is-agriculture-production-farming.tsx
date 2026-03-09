import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function CoffeeIsAgricultureProductionFarming({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
          <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
            {title}
          </h1>
          <h2 className='text-2xl font-medium text-gray-700 mb-6'>
            Understanding the science, art, and challenges of growing coffee from seed to harvest
          </h2>

          <figure>
            <figcaption className='font-inconsolata my-2'>
              Ethiopian coffee agriculture insights
            </figcaption>

            <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
              <ResponsiveImage
                src={`/images/${large_image_url}`}
                alt={`${title} - Ethiopian coffee agriculture insight`}
                fill
                objectFit='cover'
                className='w-full h-full'
                sizes='(max-width: 768px) 100vw, 768px'
              />
            </div>
          </figure>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Introduction: Coffee Begins on the Farm</h2>
          <p className='my-4'>
            Welcome to the second part of our "Coffee Is" series, where we explore coffee through different lenses. This chapter focuses on coffee as agriculture: a complex system shaped by science, tradition, ecology, and economics.
          </p>
          <p className='my-4'>
            For background on the plant itself, see <Link href='/insights/coffee-plant-taxonomy-species-varieties' className='underline font-bold'>Coffee is a Plant</Link>. If you're evaluating origin lots, pair this farming overview with our <Link href='/insights/guide-ethiopian-coffee-origins' className='underline font-bold'>Practical Guide to Ethiopian Green Coffee Origins</Link> and our sourcing guide <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='underline font-bold'>How to Source Green Coffee from Ethiopia</Link>.
          </p>
          <p className='my-4'>
            Roasters, baristas, and coffee enthusiasts all benefit from understanding how coffee is grown. Every flavor note originates long before roasting: in the soil, under shade trees, in the hands of farmers.
          </p>

          <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
            <span className='font-semibold'>Part of the &quot;Coffee Is&quot; Series:</span>
            <div className='flex flex-wrap gap-2 mt-2'>
              <Link href='/insights/coffee-plant-taxonomy-species-varieties' className='underline text-xs'>1. Plant</Link>
              <span className='bg-dark text-primary px-2 py-1 rounded text-xs'>2. Agriculture (You are here)</span>
              <Link href='/insights/coffee-is-processing-drying-milling' className='underline text-xs'>3. Processing</Link>
              <Link href='/insights/coffee-is-commerce-exporting-importing-buying' className='underline text-xs'>4. Commerce</Link>
              <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='underline text-xs'>5. Science</Link>
              <Link href='/insights/coffee-is-art-roasting-brewing' className='underline text-xs'>6. Art</Link>
            </div>
          </div>

          <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
            <h3 className='font-bold text-lg mb-2'>Key Takeaway</h3>
            <p className='text-sm'>
              Coffee agriculture encompasses soil science, plant biology, pest management, and climate adaptation. Ethiopia&apos;s traditional farming systems (forest, semi-forest, garden, and plantation) preserve biodiversity and produce distinct cup profiles shaped by terroir. For importers and roasters, understanding these agricultural foundations is essential for evaluating origin lots and building resilient supply chains.
            </p>
          </div>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>What Does Agriculture Mean in Coffee?</h2>
          <p className='my-4'>
            Webster's Dictionary defines agriculture as "the science, art, or practice of cultivating soil, producing crops, and raising livestock." Coffee fits this definition perfectly.
          </p>
          <p className='my-4'>
            Coffee agriculture is:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>A science:</strong> soil chemistry, plant biology, pest management, and climate interaction</li>
            <li><strong>An art:</strong> intuition, generational knowledge, and reading the land</li>
            <li><strong>A business:</strong> production, processing, and global trade</li>
          </ul>
          <p className='my-4'>
            In specialty coffee, producers constantly balance quality, sustainability, and long-term farm health. In Ethiopia (the birthplace of Arabica), traditional systems like forest and garden coffee reflect centuries of agricultural wisdom rooted in biodiversity and resilience.
          </p>

          <p className='my-4'>
            What makes Ethiopian coffee agriculture unique is its integration with natural ecosystems. While coffee 
            in Brazil or Vietnam often grows in full-sun monocultures, Ethiopian coffee typically thrives under 
            canopies of native shade trees, a practice that predates modern &quot;sustainable agriculture&quot; by 
            millennia. This traditional approach creates coffees with distinctive complexity: the same heirloom 
            varieties grown in Guji versus <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='underline'>Yirgacheffe or Sidamo</Link> taste 
            dramatically different because of variations in soil, shade, altitude, and microclimate. Agriculture 
            doesn&apos;t just produce coffee; it shapes its character.
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>A Brief History of Agriculture and Coffee</h2>
          <p className='my-4'>
            Human agriculture began over 12,000 years ago, evolving from controlled burning and foraging into structured farming systems. Major turning points include:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>The British Agricultural Revolution (1500s):</strong> Global crop exchange and commercialization</li>
            <li><strong>The Green Revolution (1950s):</strong> Synthetic fertilizers, pesticides, and monoculture farming</li>
          </ul>
          <p className='my-4'>
            Coffee followed a similar trajectory. Originating in Ethiopia, it spread to Yemen in the 6th century, Indonesia by 1690, and the Americas by the 1700s.
          </p>
          <p className='my-4'>
            Today, climate change is forcing a return to polyculture and agroforestry, as monoculture systems prove fragile under rising temperatures and erratic rainfall.
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Global Coffee Production Today</h2>
          <p className='my-4'>
            Coffee is now one of the world's most important agricultural commodities, according to <a href='https://ico.org/' target='_blank' rel='noopener noreferrer' className='underline'>International Coffee Organization</a> data:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li>10.5 million metric tons produced annually</li>
            <li>60% grown by smallholder farmers (under 5 hectares)</li>
            <li>Ethiopia accounts for nearly half of Africa's smallholder coffee production</li>
          </ul>
          <p className='my-4'>
            While specialty coffee represents only ~5% of global volume, it's growing rapidly, projected to reach 10% by 2028. The <Link href='/insights/specialty-coffee-trends-2026' className='underline'>specialty coffee trends shaping 2026</Link> point toward increasing demand for traceability, experimental processing, and direct origin relationships, all areas where Ethiopian coffee excels.
          </p>
          <p className='my-4'>
            Yet the economics remain stark:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li>44% of smallholders live below the international poverty line</li>
            <li>Many earn less than $100 per year from coffee</li>
          </ul>
          <p className='my-4'>
            This disconnect highlights why understanding coffee as agriculture (not just a beverage) is essential. When you consider what farmers invest (years of labor, generations of knowledge, constant climate adaptation), the price per pound takes on new meaning. <Link href='/insights/direct-trade-ethiopian-farmers' className='underline'>Direct trade partnerships</Link> that prioritize farmer welfare become not just ethically preferable but strategically vital for securing quality supply chains.
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>The Coffee Farming Ecosystem</h2>
          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Soil: The Foundation of Quality</h3>
          <p className='my-4'>
            Healthy coffee starts with healthy soil. Ideal coffee soils are loamy, balancing:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Sand</strong> for drainage</li>
            <li><strong>Silt</strong> for water retention</li>
            <li><strong>Clay</strong> for nutrient storage</li>
          </ul>
          <p className='my-4'>
            Key nutrients include:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Macronutrients:</strong> Nitrogen (N), Phosphorus (P), Potassium (K)</li>
            <li><strong>Secondary nutrients:</strong> Calcium, Magnesium, Sulfur</li>
            <li><strong>Micronutrients:</strong> Iron, Zinc, Boron</li>
          </ul>
          <p className='my-4'>
            Optimal soil pH ranges from 5.5 to 6.5, allowing efficient nutrient uptake.
          </p>
          <p className='my-4'>
            Crucially, soil is alive. Microorganisms break down organic matter and unlock nutrients; without them, coffee plants cannot thrive.
          </p>

          <p className='my-4'>
            Ethiopia&apos;s coffee-growing regions benefit from ancient volcanic soils rich in minerals and organic 
            matter. The red lateritic soils of Sidamo, the dark volcanic earth of Guji, the loamy highland 
            soils of Yirgacheffe. Each contributes distinct mineral signatures that influence cup character. 
            When specialty buyers talk about &quot;terroir,&quot; soil is the foundation. The same heirloom variety 
            planted in different Ethiopian soils will produce noticeably different <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='underline'>chemical compounds</Link> and 
            flavor profiles, a phenomenon that <Link href='/insights/guide-ethiopian-coffee-origins' className='underline'>our origins guide</Link> explores in depth.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Encouraging Soil Life</h3>
          <p className='my-4'>
            Modern coffee agriculture increasingly prioritizes soil biology through practices such as:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Composting</strong> organic waste</li>
            <li><strong>Culturing microbes</strong> to multiply beneficial microorganisms</li>
            <li><strong>Mulching</strong> with plant material to feed microbes</li>
            <li><strong>Intercropping</strong> for biodiversity</li>
          </ul>
          <p className='my-4'>
            Producers in Ethiopia and Colombia often say: "Everything the plant needs already exists on the farm; we just need to unlock it."
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>The Life Cycle of the Coffee Plant</h2>
          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Germination & Nursery</h3>
          <p className='my-4'>
            Coffee production starts with seeds. After harvesting, seeds are tested for moisture content (they need at least 20% to germinate) and soaked overnight. They're planted in raised nursery beds with a mix of sand and peat for excellent drainage and aeration.
          </p>
          <p className='my-4'>
            Germination takes about a week: the root emerges first, followed by the shoot pushing upward. Within two weeks, the first true leaves (cotyledons) appear. Seedlings spend 9 months in the nursery, developing 9-12 leaf pairs before transplanting. During this time, they're kept shaded and watered regularly, with constant monitoring for pests and diseases.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Transplanting & Early Growth</h3>
          <p className='my-4'>
            Transplanting happens at the start of the rainy season. Farmers:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li>Prepare soil with organic matter</li>
            <li>Mulch to retain moisture</li>
            <li>Gradually reduce shade</li>
          </ul>
          <p className='my-4'>
            Coffee plants take 2-3 years to produce fruit. Early harvests are small, but yields increase as plants mature.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Flowering, Fruiting & Harvest</h3>
          <p className='my-4'>
            Flowering follows dry-season stress. Blooms last 3-4 days, attracting pollinators. While Arabica self-pollinates, cross-pollination improves yield and resilience.
          </p>
          <p className='my-4'>
            Fruit development takes ~8 months, transitioning from green to deep red-purple. Specialty coffee relies on selective hand-picking, often across multiple harvest passes.
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Annual Coffee Farm Management</h2>
          <p className='my-4'>
            Key yearly tasks include:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Post-harvest pruning</strong> to remove unproductive growth</li>
            <li><strong>Fertilization</strong> with NPK and organic amendments during wet seasons</li>
            <li><strong>Weed control</strong> to manage competition</li>
            <li><strong>Organic pest and disease management</strong> using beneficial insects and copper fungicides</li>
            <li><strong>Shade regulation</strong> and facility maintenance</li>
          </ul>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Coffee Farming Systems</h2>
          <p className='my-4'>
            Coffee farming systems range from rustic polyculture (integrating with natural forests) to unshaded monoculture plantations. Shaded systems common in Ethiopia provide biodiversity, erosion control, and climate resilience. Polyculture, growing coffee with other crops, is gaining traction against climate change, offering economic diversification and ecological benefits.
          </p>
          <p className='my-4'>
            Agroforestry (intentional tree integration) offers ecological services like carbon sequestration and wildlife habitat while providing economic diversification through timber and other products.
          </p>

          <p className='my-4'>
            In Ethiopia, four distinct farming systems produce the coffee that reaches international markets:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Forest coffee:</strong> Wild or semi-wild coffee growing in natural forest understory, the most &quot;natural&quot; system, producing about 10% of Ethiopia&apos;s crop with exceptional genetic diversity</li>
            <li><strong>Semi-forest coffee:</strong> Forests managed for coffee production with selective thinning, balancing wildness with improved yields</li>
            <li><strong>Garden coffee:</strong> Smallholder plots around homesteads, often intercropped with food crops, representing the majority of Ethiopian production</li>
            <li><strong>Plantation coffee:</strong> Larger-scale commercial operations with more intensive management, a minority of Ethiopian production</li>
          </ul>
          <p className='my-4'>
            These systems directly influence <Link href='/insights/coffee-is-processing-drying-milling' className='underline'>post-harvest processing options</Link>. 
            Forest and garden coffees often go through community washing stations, while plantation coffees 
            may have dedicated processing infrastructure. Understanding the farming system helps buyers 
            anticipate lot sizes, consistency, and traceability possibilities.
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Environmental Pressures on Coffee</h2>
          <p className='my-4'>
            <Link href='/insights/ethiopian-coffee-climate-change-impact' className='underline font-bold'>Climate change</Link> poses the greatest threat to coffee. Rising temperatures and erratic rains could reduce suitable growing land by up to 50% by 2050. Pests like coffee leaf rust thrive in stressed environments, spreading rapidly.
          </p>
          <p className='my-4'>
            Ethiopia's polyculture traditions provide resilience, but global coffee production needs systemic changes. Supporting smallholders through fair pricing, sustainable practices, and innovation is crucial for the industry's future.
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Conclusion: Why Coffee Agriculture Matters</h2>
          <p className='my-4'>
            Coffee is not just a drink; it is agriculture shaped by science, tradition, and human labor. Understanding how coffee is grown reinforces why ethical sourcing and sustainable practices matter for long-term supply chain stability.
          </p>
          <p className='my-4'>
            At Ethio Coffee Export PLC, we work with cooperatives, washing stations, and farming communities across Ethiopia to honor this agricultural heritage and deliver exceptional green coffee to roasters worldwide.
          </p>

          <p className='my-4'>
            The next time you cup an Ethiopian lot, consider what went into it: generations of farmer knowledge, 
            complex soil ecosystems, careful shade management, selective hand-picking at peak ripeness. The 
            bright acidity of a washed Yirgacheffe reflects high-altitude growing conditions and careful 
            cherry selection. The wild fruit notes of a Guji natural emerge from fermentation that began 
            in the field, under the shade of native trees, in soil enriched by centuries of forest ecology.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Continue Your Coffee Education</h3>
          <p className='my-4'>
            Now that you understand coffee as agriculture, explore what happens after harvest:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><Link href='/insights/coffee-is-processing-drying-milling' className='underline font-bold'>Coffee Is Processing</Link>: How cherries become green beans through fermentation, drying, and milling</li>
            <li><Link href='/insights/coffee-is-commerce-exporting-importing-buying' className='underline font-bold'>Coffee Is Commerce</Link>: The logistics and economics of moving coffee from farm to roastery</li>
            <li><Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='underline font-bold'>Washed vs Natural Processing</Link>: How different post-harvest methods create different cup profiles</li>
          </ul>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Frequently Asked Questions</h2>

          <div className='my-4'>
            <h3 className='text-xl font-semibold text-dark mb-2'>How long does it take a coffee plant to produce fruit?</h3>
            <p className='my-2'>
              Coffee plants typically require 2 to 3 years after transplanting before producing their first harvest. Early yields are small; plants reach full production capacity between years 4 and 7. With proper pruning and soil management, Arabica plants in Ethiopia can remain productive for 20 to 30 years.
            </p>
          </div>

          <div className='my-4'>
            <h3 className='text-xl font-semibold text-dark mb-2'>What makes Ethiopian coffee farming different from other origins?</h3>
            <p className='my-2'>
              Ethiopia uses four distinct systems: forest, semi-forest, garden, and plantation coffee. Forest and semi-forest systems are unique to Ethiopia, with coffee growing under native canopy shade. This biodiversity preserves heirloom genetics and produces complex flavor profiles not found in the monoculture plantations common in Brazil or Vietnam.
            </p>
          </div>

          <div className='my-4'>
            <h3 className='text-xl font-semibold text-dark mb-2'>How does soil affect coffee flavor?</h3>
            <p className='my-2'>
              Soil composition directly shapes coffee&apos;s chemical profile and cup character. Volcanic soils rich in minerals (common in Guji and Sidamo) contribute different flavor compounds than the loamy highland soils of Yirgacheffe. Optimal coffee soil has a pH between 5.5 and 6.5, with a balance of sand, silt, and clay.
            </p>
          </div>

          <div className='my-4'>
            <h3 className='text-xl font-semibold text-dark mb-2'>What percentage of global coffee is specialty grade?</h3>
            <p className='my-2'>
              Specialty coffee currently represents roughly 5% of global production volume, though it accounts for a larger share of market value. Industry projections suggest specialty could reach 10% of volume by 2028, driven by growing demand for traceability, unique processing methods, and direct origin sourcing.
            </p>
          </div>

          <div className='my-4'>
            <h3 className='text-xl font-semibold text-dark mb-2'>How is climate change threatening coffee agriculture?</h3>
            <p className='my-2'>
              Rising temperatures and erratic rainfall could reduce suitable Arabica growing land by up to 50% by 2050. Higher temperatures also accelerate pest and disease pressure, particularly coffee leaf rust. Ethiopia&apos;s traditional polyculture and agroforestry systems offer more resilience than monoculture plantations.
            </p>
          </div>

          <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
            <h4 className='font-bold text-xl mb-3'>Source Sustainably Farmed Ethiopian Coffee</h4>
            <p className='my-2'>
              At <span className='font-bold'>Ethio Coffee Export PLC</span>, we connect roasters with sustainably farmed Ethiopian green coffee through our trusted sourcing network of cooperatives and washing stations. Request samples or current pricing to get started.
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
                  <li>• <Link href='/insights/coffee-is-processing-drying-milling' className='text-amber-700 hover:underline'>Coffee Is Processing: Drying & Milling</Link></li>
                  <li>• <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='text-amber-700 hover:underline'>Coffee Is Science: Analysis & Evaluation</Link></li>
                  <li>• <Link href='/insights/coffee-is-commerce-exporting-importing-buying' className='text-amber-700 hover:underline'>Coffee Is Commerce: Exporting & Importing</Link></li>
                  <li>• <Link href='/insights/coffee-is-art-roasting-brewing' className='text-amber-700 hover:underline'>Coffee Is Art: Roasting & Brewing</Link></li>
                </ul>
              </div>
              <div>
                <h4 className='font-semibold mb-2 text-sm'>Origins & Quality</h4>
                <ul className='space-y-1 text-sm'>
                  <li>• <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Coffee Origins</Link></li>
                  <li>• <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji Comparison</Link></li>
                  <li>• <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee Processing</Link></li>
                </ul>
              </div>
              <div>
                <h4 className='font-semibold mb-2 text-sm'>Sourcing & Trade</h4>
                <ul className='space-y-1 text-sm'>
                  <li>• <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
                  <li>• <Link href='/insights/direct-trade-ethiopian-farmers' className='text-amber-700 hover:underline'>Direct Trade with Ethiopian Farmers</Link></li>
                  <li>• <Link href='/insights/specialty-coffee-trends-2026' className='text-amber-700 hover:underline'>Specialty Coffee Trends 2026</Link></li>
                </ul>
              </div>
              <div>
                <h4 className='font-semibold mb-2 text-sm'>Climate & Sustainability</h4>
                <ul className='space-y-1 text-sm'>
                  <li>• <Link href='/insights/ethiopian-coffee-climate-change-impact' className='text-amber-700 hover:underline'>Ethiopian Coffee Climate Change Impact</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className='border-t border-gray-300 mt-10 pt-6'>
            <p className='text-sm text-gray-600 font-inconsolata'>
              <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Export PLC. This article draws from educational materials developed by Café Imports, the <a href='https://varieties.worldcoffeeresearch.org/' target='_blank' rel='noopener noreferrer' className='underline'>World Coffee Research variety catalog</a>, <a href='https://ico.org/' target='_blank' rel='noopener noreferrer' className='underline'>International Coffee Organization</a> trade data, and UC Davis Coffee Center research. For current sourcing information, <Link href='/contact-us' className='underline'>contact our team</Link>.
            </p>
            <p className='text-sm text-gray-600 font-inconsolata mt-2'>
              <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
            </p>
          </div>
    </>
  )
}

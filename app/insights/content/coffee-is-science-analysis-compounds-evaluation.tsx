import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function CoffeeIsScienceAnalysisCompoundsEvaluation({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
          <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
            {title}
          </h1>
          <h2 className='text-2xl font-medium text-gray-700 mb-6'>
            Exploring the physical characteristics, chemical compounds, and sensory evaluation of coffee
          </h2>

          <figure>
            <figcaption className='font-inconsolata my-2'>
              Coffee science insights from green bean analysis to sensory evaluation
            </figcaption>

            <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
              <ResponsiveImage
                src={`/images/${large_image_url}`}
                alt={`${title} - Coffee science analysis and evaluation insight`}
                fill
                objectFit='cover'
                className='w-full h-full'
                sizes='(max-width: 768px) 100vw, 768px'
              />
            </div>
          </figure>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Introduction: Coffee as a Scientific Endeavor</h2>
          <p className='my-4'>
            Welcome to the fifth installment of our "Coffee Is" series, where we examine coffee through multiple perspectives. In this chapter, we explore coffee as a science, a systematic pursuit of knowledge about the physical attributes, chemical composition, and sensory evaluation that define exceptional coffee quality.
          </p>
          <p className='my-4'>
            From green coffee analysis to the detailed world of cupping coffee, understanding the science behind coffee compounds and flavor perception transforms how we appreciate and evaluate this complex beverage. Every sip represents the culmination of scientific principles applied throughout the supply chain.
          </p>
          <p className='my-4'>
            For how these compounds interact with processing styles, see <Link href='/insights/coffee-is-processing-drying-milling' className='underline font-bold'>Coffee is a Process</Link> and the practical <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='underline font-bold'>Washed vs Natural</Link> comparison   both are useful when mapping chemistry to cup.
          </p>

          <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
            <span className='font-semibold'>Part of the &quot;Coffee Is&quot; Series:</span>
            <div className='flex flex-wrap gap-2 mt-2'>
              <Link href='/insights/coffee-plant-taxonomy-species-varieties' className='underline text-xs'>1. Plant</Link>
              <Link href='/insights/coffee-is-agriculture-production-farming' className='underline text-xs'>2. Agriculture</Link>
              <Link href='/insights/coffee-is-processing-drying-milling' className='underline text-xs'>3. Processing</Link>
              <Link href='/insights/coffee-is-commerce-exporting-importing-buying' className='underline text-xs'>4. Commerce</Link>
              <span className='bg-dark text-primary px-2 py-1 rounded text-xs'>5. Science (You are here)</span>
              <Link href='/insights/coffee-is-art-roasting-brewing' className='underline text-xs'>6. Art</Link>
            </div>
          </div>

          <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
            <p className='font-medium'>
              <span className='font-bold'>Key Takeaway:</span> Coffee quality is measurable. Physical analysis (moisture, density, defect counts), chemical compound profiles (acids, sugars, caffeine), and standardized cupping protocols give buyers objective tools to evaluate lots beyond subjective impression. Combining lab checks with structured sensory evaluation leads to more consistent purchasing decisions and better communication with exporters.
            </p>
          </div>

          <div className='bg-gray-100 p-6 rounded-lg my-6'>
            <p className='font-medium'>
              <span className='font-bold'>In this article:</span> We examine green coffee physicals, key chemical compounds, sensory science and cupping methodology, plus practical lab and cupping examples you can use to evaluate lots more effectively.
            </p>
          </div>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>The Science of Green Coffee Evaluation</h2>
          <p className='my-4'>
            Green coffee analysis begins with systematic evaluation of physical characteristics that influence roasting and final flavor. This coffee science approach ensures consistency and quality in specialty coffee production.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Physical Characteristics of Green Beans</h3>
          <p className='my-4'>
            Green coffee grading evaluates several key physical attributes using standardized methods:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Screen Size:</strong> Measuring bean size through mesh screens, typically ranging from 14-19 64th inch increments</li>
            <li><strong>Density:</strong> Assessing cellular structure through bulk density or liquid displacement methods</li>
            <li><strong>Moisture Content:</strong> Maintaining optimal 9-12% moisture for quality preservation and microbial stability</li>
            <li><strong>Defect Analysis:</strong> Identifying physical imperfections that impact coffee evaluation</li>
          </ul>
          <p className='my-4'>
            These physical characteristics directly influence roasting profiles and help predict potential flavor outcomes in coffee compounds analysis.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Defect Classification in Specialty Coffee</h3>
          <p className='my-4'>
            Specialty coffee standards require zero Category 1 defects and fewer than 5 Category 2 defects per 350g sample:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Category 1:</strong> Full blacks, full sours, severe insect damage, foreign matter</li>
            <li><strong>Category 2:</strong> Partial defects, immature beans, parchment, floaters, withered beans</li>
          </ul>
          <p className='my-4'>
            Understanding these defects is crucial for green coffee analysis and maintaining specialty grade quality standards.
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Chemical Compounds in Green Coffee</h2>
          <p className='my-4'>
            The science of coffee compounds reveals a complex biochemical profile that transforms during roasting. Green coffee contains various compound categories that contribute to flavor development.
          </p>

          <p className='my-4'>
            What makes Ethiopian coffee particularly interesting from a chemical perspective is its genetic diversity. 
            The 10,000+ heirloom varieties in Ethiopia&apos;s highlands each express slightly different compound 
            profiles: different ratios of sugars, acids, and aroma precursors. This is why a 
            <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='underline'> Yirgacheffe tastes different from a Guji</Link>, 
            even when processed identically. The <Link href='/insights/coffee-plant-taxonomy-species-varieties' className='underline'>plant&apos;s genetics</Link> determine 
            the chemical raw materials; <Link href='/insights/coffee-is-processing-drying-milling' className='underline'>processing</Link> and 
            <Link href='/insights/coffee-is-art-roasting-brewing' className='underline'> roasting</Link> transform them.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Organic Acids and Flavor Foundation</h3>
          <p className='my-4'>
            Organic acids make up approximately 5% of green coffee by weight and provide the foundation for acidity and tartness:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Simple Organic Acids:</strong> Citric, malic, acetic, and quinic acids that survive roasting</li>
            <li><strong>Chlorogenic Acids:</strong> Complex acid chains that break down into various flavor compounds during roasting</li>
          </ul>
          <p className='my-4'>
            These coffee compounds are highly extractable and contribute significantly to the perceived brightness and complexity in coffee flavor.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Practical Example: Mapping Compounds to Tasting Notes</h3>
          <p className='my-4'>
            Want a quick mental model? Use this mapping when cupping or sourcing:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Citric &amp; malic acids:</strong> Bright, citrus and apple-like acidity</li>
            <li><strong>Sucrose breakdown:</strong> Sweetness and caramel notes after roasting</li>
            <li><strong>Chlorogenic acid derivatives:</strong> Bitterness and body components when over-extracted</li>
            <li><strong>Volatile esters and aldehydes:</strong> Fruity and floral aromatics often associated with naturals</li>
          </ul>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Lab &amp; Field Tools for Green Coffee Analysis</h3>
          <p className='my-4'>
            Useful tools include moisture meters (for immediate QC), bulk density kits (predict roast behavior), and spectrophotometry/HPLC for deep chemistry when available. Even simple, repeatable cupping protocols provide high-value information for buying decisions.
          </p>
          <p className='my-4'>
            If you source, pair lab checks with our <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='underline font-bold'>sourcing guide</Link> and our regional origin map <Link href='/insights/guide-ethiopian-coffee-origins' className='underline font-bold'>Practical Guide to Ethiopian Green Coffee Origins</Link>.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Minerals, Sugars, and Bitter Components</h3>
          <p className='my-4'>
            Additional compound categories include:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Minerals and Salts:</strong> Potassium, magnesium, calcium providing subtle saltiness (1% by weight)</li>
            <li><strong>Sugars:</strong> Sucrose (8-12% by weight) that caramelizes and contributes sweetness</li>
            <li><strong>Bitter Compounds:</strong> Caffeine, trigonelline, and chlorogenic acids creating complexity</li>
          </ul>
          <p className='my-4'>
            These elements interact during roasting to develop the balanced flavor profile characteristic of quality coffee.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Aroma Precursors and Textural Elements</h3>
          <p className='my-4'>
            Volatile compounds and structural components complete the green coffee composition:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Aroma Precursors:</strong> Aldehydes, ketones, furans, pyrazines forming the basis of coffee flavor notes</li>
            <li><strong>Lipids and Amino Acids:</strong> Providing body, texture, and nutty characteristics</li>
            <li><strong>Structural Components:</strong> Cellulose, hemicellulose, lignin maintaining bean integrity</li>
          </ul>
          <p className='my-4'>
            These compounds transform dramatically during roasting, creating the thousands of aroma compounds that define coffee science.
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Flavor Perception and Sensory Science</h2>
          <p className='my-4'>
            Coffee flavor perception involves complex interactions between chemical compounds and human sensory systems. Understanding this science enhances coffee evaluation techniques.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>The Components of Flavor</h3>
          <p className='my-4'>
            Flavor in coffee comprises three primary elements:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Taste:</strong> Chemical detection of sweet, sour, salty, bitter, umami on the tongue</li>
            <li><strong>Aroma:</strong> Olfactory perception through the nose, the dominant contributor to flavor</li>
            <li><strong>Body/Texture:</strong> Tactile sensation of weight, viscosity, and mouthfeel</li>
          </ul>
          <p className='my-4'>
            Aroma, processed through olfactory neurons and the brain's limbic system, provides the majority of flavor complexity in coffee evaluation.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Sensory Errors and Bias in Tasting</h3>
          <p className='my-4'>
            Scientific sensory analysis identifies common errors that affect coffee flavor perception:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Adaptation:</strong> Reduced sensitivity after repeated exposure to intense flavors</li>
            <li><strong>Contrast Effects:</strong> Perception changes based on preceding samples</li>
            <li><strong>Expectation Bias:</strong> Preconceived notions influencing flavor interpretation</li>
            <li><strong>Context Effects:</strong> Environmental factors impacting sensory experience</li>
          </ul>
          <p className='my-4'>
            Recognizing these physiological and psychological factors improves the accuracy of coffee evaluation methods.
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Cupping Coffee: The Art of Sensory Evaluation</h2>
          <p className='my-4'>
            Cupping represents the systematic sensory evaluation of coffee, combining scientific methodology with skilled assessment. This coffee science approach standardizes flavor analysis across the industry.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>The Cupping Protocol</h3>
          <p className='my-4'>
            Professional cupping follows established procedures:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Sample Preparation:</strong> Light roasting, grinding, and brewing with consistent ratios</li>
            <li><strong>Evaluation Framework:</strong> Assessing fragrance, aroma, flavor, aftertaste, acidity, body, balance, sweetness, uniformity, clean cup, overall</li>
            <li><strong>Scoring System:</strong> Numerical ratings from 1-10 across quality attributes</li>
          </ul>
          <p className='my-4'>
            Modern cupping incorporates new forms like the Coffee Value Assessment (CVA) that separate descriptive and scoring functions.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Best Practices for Accurate Evaluation</h3>
          <p className='my-4'>
            Scientific cupping methodology includes:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Blind Tasting:</strong> Randomized sample presentation to minimize bias</li>
            <li><strong>Reference Standards:</strong> Using baseline coffees for calibration</li>
            <li><strong>Replication:</strong> Multiple evaluations for statistical reliability</li>
            <li><strong>Controlled Environment:</strong> Consistent conditions for valid comparisons</li>
          </ul>
          <p className='my-4'>
            These practices ensure objective coffee evaluation that supports quality assessment and pricing decisions.
          </p>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Conclusion: The Scientific Foundation of Coffee Excellence</h2>
          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Quick Lab Protocol (Moisture & Density)</h3>
          <p className='my-4'>A repeatable, low-cost protocol for quick green QC:</p>
          <ol className='list-decimal ml-5 my-4'>
            <li>Collect a 350g representative sample from multiple bags.</li>
            <li>Measure moisture with a calibrated moisture meter (record three readings, average).</li>
            <li>Measure bulk density using a standardized cylinder or displacement kit.</li>
            <li>Record screen size distribution and note any visible defects.</li>
            <li>Roast a small 50–100g sample using your sample roaster and cup for initial acceptance.</li>
          </ol>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Mini Glossary</h3>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Screen Size:</strong> Mesh measurement for bean size (64th inch units)</li>
            <li><strong>Bulk Density:</strong> Predictive of roast behavior and end yield</li>
            <li><strong>Cupping:</strong> Standardized sensory evaluation method for coffee</li>
          </ul>
          <p className='my-4'>
            Coffee science demands systematic knowledge of physical characteristics, chemical compounds, and sensory evaluation. Understanding green coffee analysis, flavor perception, and cupping methodology provides the foundation for producing and sourcing exceptional coffee consistently.
          </p>
          <p className='my-4'>
            At Ethio Coffee Export PLC, we apply rigorous quality evaluation at every stage of our sourcing process, drawing on three decades of heritage sourcing relationships across Ethiopia&apos;s coffee regions to ensure our partners receive coffee of the highest quality and consistency.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Continue Your Coffee Education</h3>
          <p className='my-4'>
            Now that you understand the science behind coffee quality, explore how that knowledge is applied:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><Link href='/insights/coffee-is-art-roasting-brewing' className='underline font-bold'>Coffee Is Art</Link> - How roasters use scientific understanding to craft exceptional roast profiles</li>
            <li><Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='underline font-bold'>Sourcing Green Coffee</Link> - Apply quality evaluation to your buying decisions</li>
            <li><Link href='/insights/specialty-coffee-trends-2026' className='underline font-bold'>2026 Specialty Coffee Trends</Link> - See how science is driving innovation in the industry</li>
            <li><Link href='/insights/best-cupping-school' className='underline font-bold'>Best Cupping Schools</Link> - Find the right training to develop your sensory evaluation skills and cupping expertise</li>
          </ul>

          <h2 className='text-3xl font-bold text-dark mt-8 mb-4'>Frequently Asked Questions</h2>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>What moisture content should green coffee have?</h3>
          <p className='my-4'>
            Specialty green coffee should maintain 9-12% moisture content for optimal quality preservation and microbial stability. Below 9%, beans become brittle and lose flavor complexity. Above 12%, the risk of mold growth and quality degradation increases significantly during storage and transport.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>What is a specialty coffee cupping score?</h3>
          <p className='my-4'>
            Specialty coffee must score 80 or above on the SCA 100-point scale. Cuppers evaluate fragrance, aroma, flavor, aftertaste, acidity, body, balance, sweetness, uniformity, and clean cup. Scores of 80-84 indicate very good quality; 85-89 is excellent; 90+ is outstanding and rare.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>What are chlorogenic acids in coffee?</h3>
          <p className='my-4'>
            Chlorogenic acids (CGAs) are complex organic acid compounds that make up 6-10% of green coffee by weight. During roasting, they break down into quinic acid and other compounds that contribute bitterness and body. Higher-altitude Arabica coffees typically have more CGAs, which correlates with perceived acidity and complexity.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>How does altitude affect coffee chemistry?</h3>
          <p className='my-4'>
            Higher altitudes mean cooler temperatures, which slow cherry maturation. Slower maturation allows more time for complex sugars, organic acids, and aromatic precursors to develop within the seed. This is why high-grown Ethiopian coffees (1,800-2,200m) consistently show brighter acidity and more complex flavor profiles.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>What is the Coffee Value Assessment (CVA)?</h3>
          <p className='my-4'>
            The CVA is a modern cupping framework developed by the Specialty Coffee Association that separates descriptive evaluation from quality scoring. Unlike the traditional SCA form, it distinguishes between objective flavor description and subjective value judgment, aiming to reduce bias and improve consistency across cuppers.
          </p>

          <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
            <h4 className='font-bold text-xl mb-3'>Verified Quality from Origin to Destination</h4>
            <p className='my-2'>
              <span className='font-bold'>Ethio Coffee Export PLC</span> provides pre-ship samples, cupping reports, and full quality documentation with every lot. Request samples to evaluate our Ethiopian specialty coffees firsthand.
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
                  <li>• <Link href='/insights/coffee-is-agriculture-production-farming' className='text-amber-700 hover:underline'>Coffee Is Agriculture: Production & Farming</Link></li>
                  <li>• <Link href='/insights/coffee-is-processing-drying-milling' className='text-amber-700 hover:underline'>Coffee Is Processing: Drying & Milling</Link></li>
                  <li>• <Link href='/insights/coffee-is-commerce-exporting-importing-buying' className='text-amber-700 hover:underline'>Coffee Is Commerce: Exporting & Importing</Link></li>
                  <li>• <Link href='/insights/coffee-is-art-roasting-brewing' className='text-amber-700 hover:underline'>Coffee Is Art: Roasting & Brewing</Link></li>
                </ul>
              </div>
              <div>
                <h4 className='font-semibold mb-2 text-sm'>Quality & Evaluation</h4>
                <ul className='space-y-1 text-sm'>
                  <li>• <Link href='/insights/new-sca-coffee-value-assessment' className='text-amber-700 hover:underline'>The New SCA Coffee Value Assessment</Link></li>
                  <li>• <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality Control: Defects & Grading</Link></li>
                  <li>• <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee Processing</Link></li>
                </ul>
              </div>
              <div>
                <h4 className='font-semibold mb-2 text-sm'>Sourcing & Origins</h4>
                <ul className='space-y-1 text-sm'>
                  <li>• <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
                  <li>• <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Coffee Origins</Link></li>
                  <li>• <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji Comparison</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className='border-t border-gray-300 mt-10 pt-6'>
            <p className='text-sm text-gray-600 font-inconsolata'>
              <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Export PLC. This article draws from SCA cupping standards, coffee chemistry research, and our quality evaluation practices as an Ethiopian coffee exporter. For current samples or quality reports, <Link href='/contact-us' className='underline'>contact us directly</Link>.
            </p>
            <p className='text-sm text-gray-600 font-inconsolata mt-2'>
              <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
            </p>
          </div>
    </>
  )
}

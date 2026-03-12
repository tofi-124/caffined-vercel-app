import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineBeaker,
  HiOutlineChartBar,
  HiOutlineSparkles,
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentCheck,
  HiOutlineArrowTrendingUp,
  HiOutlineCheckCircle
} from 'react-icons/hi2'

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
            Green coffee analysis, chemical compounds, and the sensory science behind quality evaluation
          </h2>

          <figure>
            <figcaption className='font-inconsolata my-2'>
              From compound chemistry to sensory perception: the science that defines green coffee quality
            </figcaption>

            <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
              <ResponsiveImage
                src={`/images/${large_image_url}`}
                alt='Green coffee analysis: chemical compounds, physical evaluation, and sensory science'
                fill
                objectFit='cover'
                className='w-full h-full'
                sizes='(max-width: 768px) 100vw, 768px'
              />
            </div>
          </figure>

          <p className='my-4'>
            A cupping score tells you a lot, but not everything. Two Ethiopian lots can both score 86 yet taste nothing alike: one bright with citric acidity, the other rich with stone-fruit sweetness. The difference sits in their chemical compound profiles, physical characteristics, and the sensory science used to evaluate them. Green coffee analysis gives buyers the objective data to understand why.
          </p>
          <p className='my-4'>
            This is Part 5 of our &quot;Coffee Is&quot; series. Where earlier chapters covered the{' '}
            <Link href='/insights/coffee-plant-taxonomy-species-varieties' className='underline font-bold'>plant</Link>,{' '}
            <Link href='/insights/coffee-is-agriculture-production-farming' className='underline font-bold'>agriculture</Link>,{' '}
            <Link href='/insights/coffee-is-processing-drying-milling' className='underline font-bold'>processing</Link>, and{' '}
            <Link href='/insights/coffee-is-commerce-exporting-importing-buying' className='underline font-bold'>commerce</Link>,{' '}
            this chapter examines what makes coffee measurable: the compounds inside the bean, the human perception systems that interpret them, and the lab and cupping methods that connect the two.
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
              <span className='font-bold'>Key Takeaway:</span> Green coffee contains over 1,000 chemical compounds that determine flavor. Physical analysis (moisture, density, screen size), compound chemistry (acids, sugars, lipids, caffeine), and calibrated sensory evaluation give buyers objective tools to evaluate lots, communicate precisely with exporters, and make repeatable purchasing decisions. This article breaks down each layer so you can apply coffee science to your buying process.
            </p>
          </div>

          <div className='bg-gray-100 p-6 rounded-lg my-6'>
            <p className='font-medium'>
              <span className='font-bold'>In this article:</span> Green coffee physicals and why they matter chemically; compound profiles and their flavor impacts; sensory perception science; lab and analysis methodology; and how to combine these tools into better sourcing decisions.
            </p>
          </div>

          {/* ═══════════════════════════════════════════ */}
          {/* SECTION 1: GREEN COFFEE PHYSICAL ANALYSIS  */}
          {/* ═══════════════════════════════════════════ */}

          <h2 className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
            <HiOutlineChartBar className='text-amber-600' />
            Green Coffee Physical Analysis
          </h2>
          <p className='my-4'>
            Physical evaluation is the first checkpoint in green coffee analysis. Three measurements form the baseline: moisture content, density, and screen size. Each one tells you something about what is happening chemically inside the bean and how it will behave during roasting.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Moisture Content</h3>
          <p className='my-4'>
            Specialty green coffee should hold between 9% and 12% moisture by weight. This range preserves volatile aroma precursors, prevents mold and microbial growth, and keeps the bean structurally sound. Below 9%, cellular walls become brittle; sugars and acids degrade faster, and the bean loses flavor complexity during storage. Above 12%, free water activity accelerates oxidation and creates conditions for ochratoxin A contamination.
          </p>
          <p className='my-4'>
            Moisture meters (capacitance or near-infrared types) provide readings in seconds. Take at least three readings per bag and average them. Consistent moisture across a lot signals uniform drying at origin, a strong quality indicator.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Density</h3>
          <p className='my-4'>
            Bean density reflects cellular structure, altitude of cultivation, and compound concentration. High-altitude Ethiopian coffees (1,800-2,200m) grow slowly in cooler temperatures, producing denser beans with more tightly packed sugars, acids, and aroma precursors. Denser beans absorb heat more gradually during roasting, allowing more complex flavor development.
          </p>
          <p className='my-4'>
            Measure bulk density by weighing a fixed volume of green beans in a standardized cylinder. Higher bulk density (above ~680 g/L for washed Arabica) generally correlates with higher cup quality, though the relationship is not absolute.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Screen Size</h3>
          <p className='my-4'>
            Screen size measures bean dimensions through mesh sieves graded in 64ths of an inch. Ethiopian specialty lots typically grade between Screen 14 and Screen 18. Uniform screen size within a lot matters more than absolute size: it ensures even heat transfer during roasting, which produces consistent extraction and flavor clarity in the cup.
          </p>

          <div className='bg-blue-50 p-6 rounded-lg my-6 border border-blue-200'>
            <p className='font-medium flex items-start gap-3'>
              <HiOutlineLightBulb className='text-blue-600 text-xl flex-shrink-0 mt-1' />
              <span>
                <strong>Tip for buyers:</strong> Physical analysis tells you how a lot was handled before it reached you. Consistent moisture, high density, and uniform screen size indicate careful picking, drying, and milling at origin. For detailed defect identification and grading standards, see our{' '}
                <Link href='/insights/green-coffee-quality-control-defects-grading' className='underline font-bold'>Green Coffee Quality Control: Defects &amp; Grading</Link> guide.
              </span>
            </p>
          </div>

          {/* ═══════════════════════════════════════════ */}
          {/* SECTION 2: CHEMICAL COMPOUNDS              */}
          {/* ═══════════════════════════════════════════ */}

          <h2 className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
            <HiOutlineBeaker className='text-amber-600' />
            Chemical Compounds in Green Coffee
          </h2>
          <p className='my-4'>
            Green Arabica coffee contains over 1,000 identified chemical compounds. During roasting, Maillard reactions, caramelization, and Strecker degradation transform them into 800+ volatile aroma compounds. Understanding the raw materials in green coffee helps buyers predict how a lot will perform after roasting.
          </p>

          <div className='overflow-x-auto my-6'>
            <table className='min-w-full border-collapse border border-gray-300 text-sm'>
              <thead>
                <tr className='bg-gray-100'>
                  <th className='border border-gray-300 px-4 py-2 text-left font-bold'>Compound Group</th>
                  <th className='border border-gray-300 px-4 py-2 text-left font-bold'>% of Green Bean</th>
                  <th className='border border-gray-300 px-4 py-2 text-left font-bold'>Primary Flavor Impact</th>
                  <th className='border border-gray-300 px-4 py-2 text-left font-bold'>Roast Transformation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-gray-300 px-4 py-2 font-semibold'>Chlorogenic Acids</td>
                  <td className='border border-gray-300 px-4 py-2'>6-10%</td>
                  <td className='border border-gray-300 px-4 py-2'>Bitterness, body, perceived acidity</td>
                  <td className='border border-gray-300 px-4 py-2'>Break down into quinic and caffeic acids</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='border border-gray-300 px-4 py-2 font-semibold'>Sucrose</td>
                  <td className='border border-gray-300 px-4 py-2'>6-9%</td>
                  <td className='border border-gray-300 px-4 py-2'>Sweetness, caramel, browning</td>
                  <td className='border border-gray-300 px-4 py-2'>Caramelizes; fuels Maillard reactions</td>
                </tr>
                <tr>
                  <td className='border border-gray-300 px-4 py-2 font-semibold'>Lipids</td>
                  <td className='border border-gray-300 px-4 py-2'>10-16%</td>
                  <td className='border border-gray-300 px-4 py-2'>Body, mouthfeel, aroma carrier</td>
                  <td className='border border-gray-300 px-4 py-2'>Largely survive roasting; trap volatiles</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='border border-gray-300 px-4 py-2 font-semibold'>Organic Acids</td>
                  <td className='border border-gray-300 px-4 py-2'>~5%</td>
                  <td className='border border-gray-300 px-4 py-2'>Brightness, tartness, complexity</td>
                  <td className='border border-gray-300 px-4 py-2'>Citric and malic partly survive; new acids form</td>
                </tr>
                <tr>
                  <td className='border border-gray-300 px-4 py-2 font-semibold'>Caffeine</td>
                  <td className='border border-gray-300 px-4 py-2'>1.0-1.5%</td>
                  <td className='border border-gray-300 px-4 py-2'>Bitterness (10-30% of total)</td>
                  <td className='border border-gray-300 px-4 py-2'>Thermally stable; survives roasting</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='border border-gray-300 px-4 py-2 font-semibold'>Trigonelline</td>
                  <td className='border border-gray-300 px-4 py-2'>0.6-1.2%</td>
                  <td className='border border-gray-300 px-4 py-2'>Bitterness, then aroma after roast</td>
                  <td className='border border-gray-300 px-4 py-2'>Degrades into pyridines and nicotinic acid</td>
                </tr>
                <tr>
                  <td className='border border-gray-300 px-4 py-2 font-semibold'>Proteins &amp; Amino Acids</td>
                  <td className='border border-gray-300 px-4 py-2'>10-13%</td>
                  <td className='border border-gray-300 px-4 py-2'>Nutty, roasted, savory notes</td>
                  <td className='border border-gray-300 px-4 py-2'>Strecker degradation produces key volatiles</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='border border-gray-300 px-4 py-2 font-semibold'>Minerals</td>
                  <td className='border border-gray-300 px-4 py-2'>3-5%</td>
                  <td className='border border-gray-300 px-4 py-2'>Subtle saltiness, buffer for acids</td>
                  <td className='border border-gray-300 px-4 py-2'>Mostly stable; potassium dominant</td>
                </tr>
              </tbody>
            </table>
            <p className='text-xs text-gray-500 mt-2'>
              Approximate values for washed Arabica. Concentrations vary by variety, altitude, and processing method.
            </p>
          </div>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Organic Acids: The Foundation of Acidity</h3>
          <p className='my-4'>
            Organic acids compose roughly 5% of green coffee by weight and establish the brightness that separates specialty from commodity grades. The most important are citric acid (the same compound that gives lemons their bite), malic acid (green apple tartness), acetic acid (vinegar-like when excessive), and quinic acid (astringent bitterness that increases in stale coffee).
          </p>
          <p className='my-4'>
            Citric and malic acids are the primary drivers of positive acidity in the cup. High-altitude Ethiopian lots, particularly from{' '}
            <Link href='/ethiopian-coffee-yirgacheffe' className='underline font-bold'>Yirgacheffe</Link>{' '}
            and{' '}
            <Link href='/ethiopian-coffee-guji' className='underline font-bold'>Guji</Link>,{' '}
            accumulate higher concentrations of these acids during slow cherry maturation. Roasters working with these lots will notice the acids survive light to medium roast profiles, producing the bright, clean acidity prized in specialty markets.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Chlorogenic Acids: The Complexity Engine</h3>
          <p className='my-4'>
            Chlorogenic acids (CGAs) are the most abundant phenolic compounds in green coffee, comprising 6-10% by weight. They are not a single molecule but a family of ester compounds formed between hydroxycinnamic acids and quinic acid. The three main subgroups are caffeoylquinic acids (CQA), dicaffeoylquinic acids (diCQA), and feruloylquinic acids (FQA).
          </p>
          <p className='my-4'>
            During roasting, CGAs break down progressively. Light roasts retain more CGAs, contributing perceived acidity and some bitterness. As roast level increases, CGA degradation produces quinic acid and caffeic acid, which add body and a sharper bitterness. This is why dark roasts taste more bitter and less acidic: the CGA profile has been fundamentally altered.
          </p>
          <p className='my-4'>
            For buyers, CGA content correlates with altitude. Arabica grown above 1,600 meters typically contains more CGAs than lower-grown coffees, contributing to the complexity that commands higher prices in specialty markets.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Sugars and Maillard Precursors</h3>
          <p className='my-4'>
            Sucrose is the dominant sugar in green Arabica (6-9% by weight) and the primary fuel for caramelization and Maillard reactions during roasting. Reducing sugars (glucose and fructose) are present in smaller amounts but are more reactive: they combine with free amino acids in the Maillard reaction to produce hundreds of volatile compounds responsible for roasted, nutty, caramel, and chocolate notes.
          </p>
          <p className='my-4'>
            Higher sucrose content in green coffee predicts greater sweetness potential after roasting. Natural-processed Ethiopian coffees often show elevated sugar levels because the mucilage remains on the bean during drying, allowing sugar migration into the seed. This is one chemical reason why{' '}
            <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='underline font-bold'>natural Ethiopians</Link>{' '}
            tend toward fruit-forward, sweet profiles.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Caffeine and Alkaloids</h3>
          <p className='my-4'>
            Caffeine accounts for 1.0-1.5% of green Arabica by weight and contributes 10-30% of perceived bitterness in brewed coffee. Unlike most other compounds, caffeine is thermally stable: it survives roasting nearly intact. Its bitterness is modulated by interactions with chlorogenic acids and other compounds, which is why caffeine content alone does not predict bitterness intensity.
          </p>
          <p className='my-4'>
            Trigonelline (0.6-1.2% by weight) is the second major alkaloid. During roasting, it degrades into pyridines and N-methylpyridinium, which contribute roasted aroma and may have antioxidant properties. Trigonelline content correlates with perceived sweetness in some studies, making it a compound of interest for quality prediction.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Lipids: Body and Aroma Preservation</h3>
          <p className='my-4'>
            Green coffee lipids (10-16% by weight) are predominantly triglycerides and free fatty acids concentrated in the bean&apos;s endosperm oil. They largely survive roasting and serve two critical functions in the cup: providing body and mouthfeel, and acting as carriers that trap and slowly release volatile aroma compounds during brewing.
          </p>
          <p className='my-4'>
            Lipid oxidation is a primary mechanism of staling in both green and roasted coffee. In green beans, exposure to heat, light, and oxygen accelerates fat oxidation, producing rancid off-flavors. This is why proper{' '}
            <Link href='/insights/green-coffee-shelf-life-storage-guide' className='underline font-bold'>storage conditions</Link>{' '}
            (cool, dark, low humidity) are essential for preserving lot quality during transit and warehousing.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Volatile Aroma Precursors</h3>
          <p className='my-4'>
            Green coffee has minimal aroma on its own. Instead, it contains precursor molecules (aldehydes, amino acids, organic acids, sugars) that roasting converts into 800+ volatile compounds. Key volatile groups include:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Furanones:</strong> Caramel and sweet notes (e.g., furaneol)</li>
            <li><strong>Pyrazines:</strong> Roasted, nutty, earthy character</li>
            <li><strong>Esters:</strong> Fruity aromatics (prominent in high-quality naturals)</li>
            <li><strong>Aldehydes:</strong> Floral and herbal notes (e.g., linalool precursors in Yirgacheffe lots)</li>
            <li><strong>Sulfur compounds:</strong> Roasted, savory complexity at low thresholds</li>
          </ul>
          <p className='my-4'>
            The precursor profile is largely set by genetics and growing conditions. Ethiopian heirloom varieties grown at high altitude in regions like{' '}
            <Link href='/ethiopian-coffee-yirgacheffe' className='underline font-bold'>Yirgacheffe</Link> and{' '}
            <Link href='/ethiopian-coffee-guji' className='underline font-bold'>Guji</Link>{' '}
            carry higher concentrations of ester and aldehyde precursors, which is why these origins consistently produce the floral and citrus aromatics that define Ethiopian specialty coffee.
          </p>

          <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
            <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
              <HiOutlineLightBulb className='text-amber-600' />
              Ethiopian Origins: How Terroir Shapes Compound Profiles
            </h4>
            <p className='my-2'>
              Ethiopia&apos;s 10,000+ heirloom varieties and extreme altitude range (1,500-2,300m) create unusually diverse compound profiles across regions. Two lots processed identically can taste completely different because their chemical raw materials differ at the genetic level.
            </p>
            <div className='grid md:grid-cols-3 gap-4 mt-4'>
              <div className='border border-amber-200 rounded-lg p-4 bg-white'>
                <p className='font-bold text-sm'>Yirgacheffe (1,750-2,200m)</p>
                <p className='text-sm mt-1'>High citric acid and ester precursors. Produces bright lemon-citrus acidity and jasmine-like florals. Washed lots emphasize the acid structure; naturals amplify fruit esters.</p>
              </div>
              <div className='border border-amber-200 rounded-lg p-4 bg-white'>
                <p className='font-bold text-sm'>Guji (1,800-2,300m)</p>
                <p className='text-sm mt-1'>Elevated sucrose and malic acid. Distinct stone-fruit sweetness (peach, apricot) with complex berry notes. The highest-altitude Guji lots rival Yirgacheffe in acidity.</p>
              </div>
              <div className='border border-amber-200 rounded-lg p-4 bg-white'>
                <p className='font-bold text-sm'>Harar (1,500-2,100m)</p>
                <p className='text-sm mt-1'>Higher lipid content and distinct aldehyde precursors. Known for heavy body, wine-like acidity, and blueberry characteristics unique in the specialty world.</p>
              </div>
            </div>
            <p className='text-sm mt-4'>
              For a detailed comparison, see{' '}
              <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='underline font-bold'>Yirgacheffe vs Sidamo vs Guji</Link> and our{' '}
              <Link href='/insights/guide-ethiopian-coffee-origins' className='underline font-bold'>Guide to Ethiopian Coffee Origins</Link>.
            </p>
          </div>

          {/* ═══════════════════════════════════════════ */}
          {/* SECTION 3: COMPOUND-TO-CUP MAPPING         */}
          {/* ═══════════════════════════════════════════ */}

          <h2 className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
            <HiOutlineLightBulb className='text-amber-600' />
            Compound-to-Cup Mapping
          </h2>
          <p className='my-4'>
            Connecting chemical composition to tasting notes is the practical application of coffee science. Use this reference when evaluating pre-shipment samples or comparing lots from different origins:
          </p>

          <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
            <h4 className='font-bold mb-3'>Practical Compound to Cup Reference</h4>
            <ul className='space-y-2'>
              <li className='flex items-start gap-3'>
                <HiOutlineCheckCircle className='text-green-600 text-lg flex-shrink-0 mt-1' />
                <span><strong>Citric + malic acids</strong> = Bright, clean acidity with citrus and green apple character</span>
              </li>
              <li className='flex items-start gap-3'>
                <HiOutlineCheckCircle className='text-green-600 text-lg flex-shrink-0 mt-1' />
                <span><strong>High sucrose</strong> = Sweetness, caramel complexity, and browning flavors after roast</span>
              </li>
              <li className='flex items-start gap-3'>
                <HiOutlineCheckCircle className='text-green-600 text-lg flex-shrink-0 mt-1' />
                <span><strong>CGA breakdown products</strong> = Body, bitterness intensity, astringency (increases with dark roast)</span>
              </li>
              <li className='flex items-start gap-3'>
                <HiOutlineCheckCircle className='text-green-600 text-lg flex-shrink-0 mt-1' />
                <span><strong>Volatile esters + aldehydes</strong> = Fruity, floral aromatics (especially in natural-processed Ethiopian lots)</span>
              </li>
              <li className='flex items-start gap-3'>
                <HiOutlineCheckCircle className='text-green-600 text-lg flex-shrink-0 mt-1' />
                <span><strong>Lipid content</strong> = Heavier body, silky mouthfeel, slower aroma release in the cup</span>
              </li>
              <li className='flex items-start gap-3'>
                <HiOutlineCheckCircle className='text-green-600 text-lg flex-shrink-0 mt-1' />
                <span><strong>Trigonelline degradation</strong> = Roasty, toasted aroma; contributes sweetness perception</span>
              </li>
            </ul>
          </div>

          <p className='my-4'>
            When you cup a natural-processed Guji and taste intense blueberry and peach, you are detecting the combined effect of high sucrose content, elevated ester precursors, and malic acid. The chemistry is predictable once you understand the inputs. For how{' '}
            <Link href='/insights/coffee-is-processing-drying-milling' className='underline font-bold'>processing methods</Link>{' '}
            alter these compound interactions, see Part 3 of this series.
          </p>

          {/* ═══════════════════════════════════════════ */}
          {/* SECTION 4: SENSORY SCIENCE                 */}
          {/* ═══════════════════════════════════════════ */}

          <h2 className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
            <HiOutlineSparkles className='text-amber-600' />
            Sensory Science and Flavor Perception
          </h2>
          <p className='my-4'>
            Coffee flavor is not a property of the liquid alone. It is constructed by the human brain from three sensory channels: taste, aroma, and tactile perception. Understanding how each channel works improves cupping accuracy and helps buyers communicate quality attributes more precisely.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>The Five Tastes and Their Chemical Triggers</h3>
          <p className='my-4'>
            Taste receptors on the tongue detect five basic modalities. In coffee, four are directly relevant:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Sweet:</strong> Triggered by sucrose breakdown products, certain amino acids, and some sugar alcohols. Perceived sweetness in coffee is often subtle and emerges most clearly in high-quality, well-roasted lots.</li>
            <li><strong>Sour/Acidic:</strong> Driven by organic acids (citric, malic, phosphoric). Positive acidity is the single most valued attribute in specialty coffee judging. It provides structure and brightness.</li>
            <li><strong>Bitter:</strong> Caffeine contributes 10-30%; the remainder comes from CGA degradation products, quinic acid, and Maillard reaction byproducts. Bitterness is expected in coffee; excessive or harsh bitterness signals defects or over-extraction.</li>
            <li><strong>Salty:</strong> Mineral content (potassium, magnesium) provides a faint saltiness that balances acidity. Rarely dominant, but its absence can make coffee taste flat.</li>
          </ul>
          <p className='my-4'>
            Umami appears in coffee primarily through certain amino acid derivatives, though its role is less prominent than in food. Research from the Specialty Coffee Association suggests umami-like characteristics may contribute to perceived &quot;depth&quot; in some coffees.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Aroma Perception: The Dominant Channel</h3>
          <p className='my-4'>
            Aroma accounts for roughly 80% of perceived flavor complexity. It reaches the olfactory epithelium through two pathways:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Orthonasal:</strong> Sniffing volatiles directly from the cup before sipping. During cupping, this is the &quot;fragrance&quot; (dry grounds) and &quot;aroma&quot; (wet crust) evaluation phase.</li>
            <li><strong>Retronasal:</strong> Volatiles released in the mouth travel up through the nasopharynx to the olfactory receptors. This is where most flavor complexity is perceived during sipping and slurping.</li>
          </ul>
          <p className='my-4'>
            The olfactory system can distinguish thousands of volatile compounds, but it interprets them contextually. A cupper detects &quot;blueberry&quot; not because the coffee contains blueberry molecules but because a specific combination of esters, aldehydes, and acids triggers the same neural pattern as blueberry aroma. This is why calibration against reference standards (such as the{' '}
            <a href='https://worldcoffeeresearch.org/resources/sensory-lexicon' target='_blank' rel='noopener noreferrer' className='underline font-bold'>World Coffee Research Sensory Lexicon</a>) matters for consistent evaluation.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Body and Mouthfeel</h3>
          <p className='my-4'>
            Body is a tactile sensation, not a taste. It describes the weight, viscosity, and texture of coffee in the mouth. Three compound groups drive it:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Lipids:</strong> Coffee oils create a coating sensation. Higher lipid content (typical in{' '}
              <Link href='/ethiopian-coffee-harar' className='underline font-bold'>Harar</Link> and some natural-processed lots) increases perceived body.</li>
            <li><strong>Polysaccharides:</strong> Galactomannans and arabinogalactans extracted during brewing add viscosity. Espresso extracts more polysaccharides than filter methods, explaining the difference in body.</li>
            <li><strong>Extraction level:</strong> Under-extracted coffee feels thin and watery. Over-extracted coffee feels astringent and drying. The optimal range produces a smooth, clean mouthfeel.</li>
          </ul>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Sensory Bias and Calibration</h3>
          <p className='my-4'>
            Human perception is powerful but unreliable without controls. Four biases consistently appear in cupping sessions:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>Adaptation:</strong> Sensitivity drops after repeated exposure. If you cup the same origin repeatedly in a session, your palate becomes less discriminating. Solution: vary sample order and insert palate cleansers.</li>
            <li><strong>Contrast effects:</strong> A mediocre coffee tastes better after a poor one and worse after an excellent one. Solution: blind cupping with randomized presentation.</li>
            <li><strong>Expectation bias:</strong> Knowing the origin, price, or grade before tasting unconsciously shifts your scoring. Solution: mask all lot information during evaluation.</li>
            <li><strong>Halo effect:</strong> A strong positive attribute (e.g., exceptional aroma) inflates scores for unrelated attributes (e.g., body). Solution: score each attribute independently, and calibrate regularly with reference samples.</li>
          </ul>

          <div className='bg-blue-50 p-6 rounded-lg my-6 border border-blue-200'>
            <p className='font-medium flex items-start gap-3'>
              <HiOutlineLightBulb className='text-blue-600 text-xl flex-shrink-0 mt-1' />
              <span>
                <strong>Cupping methodology:</strong> For detailed guidance on modern cupping protocols, including the Coffee Value Assessment (CVA) framework, see our{' '}
                <Link href='/insights/new-sca-coffee-value-assessment' className='underline font-bold'>SCA Coffee Value Assessment Explained</Link> article. For cupping training programs, visit our{' '}
                <Link href='/insights/best-cupping-school' className='underline font-bold'>Best Cupping Schools</Link> guide.
              </span>
            </p>
          </div>

          {/* ═══════════════════════════════════════════ */}
          {/* SECTION 5: LAB & ANALYSIS METHODOLOGY      */}
          {/* ═══════════════════════════════════════════ */}

          <h2 className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
            <HiOutlineClipboardDocumentCheck className='text-amber-600' />
            Lab and Green Coffee Analysis Methodology
          </h2>
          <p className='my-4'>
            Effective green coffee analysis does not require a full chemistry lab. Most quality decisions can be made with a moisture meter, a density kit, sieves, and a disciplined cupping protocol. Advanced tools add precision but are optional for most buyers.
          </p>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Essential Tools</h3>
          <div className='grid md:grid-cols-2 gap-4 my-6'>
            <div className='border border-gray-200 rounded-lg p-5'>
              <p className='font-bold'>Moisture Meter</p>
              <p className='text-sm mt-1'>Capacitance-based meters (Sinar, Kett, Lighttells) give instant readings. NIR-based meters cost more but measure additional parameters. Always calibrate against a known reference sample. Take three readings per lot and average.</p>
            </div>
            <div className='border border-gray-200 rounded-lg p-5'>
              <p className='font-bold'>Bulk Density Kit</p>
              <p className='text-sm mt-1'>A standardized 1-liter cylinder and a precision scale. Fill the cylinder, level the top, and weigh. Compare against baseline values for the origin and process type. Washed Ethiopian Arabica typically falls between 650-720 g/L.</p>
            </div>
            <div className='border border-gray-200 rounded-lg p-5'>
              <p className='font-bold'>Screen Sieves</p>
              <p className='text-sm mt-1'>A stack of graduated mesh screens (14-19) separates beans by size. Record the percentage retained on each screen. Uniformity across 1-2 adjacent screens signals consistent sorting at origin.</p>
            </div>
            <div className='border border-gray-200 rounded-lg p-5'>
              <p className='font-bold'>Sample Roaster</p>
              <p className='text-sm mt-1'>A small-batch roaster (50-150g capacity) for producing cupping samples. Consistent light roast profiles (Agtron 55-65 for ground) are essential for comparable evaluations across lots.</p>
            </div>
          </div>

          <h3 className='text-2xl font-semibold text-dark mt-6 mb-3'>Advanced Analytical Tools</h3>
          <p className='my-4'>
            Larger trading operations and quality labs may use more sophisticated instruments:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li><strong>NIR Spectroscopy:</strong> Non-destructive rapid analysis of moisture, density, and some chemical parameters. Increasingly used at origin for fast lot screening.</li>
            <li><strong>HPLC (High-Performance Liquid Chromatography):</strong> Precise quantification of chlorogenic acids, caffeine, trigonelline, and organic acids. Primarily a research and certification tool.</li>
            <li><strong>Refractometry:</strong> Measures total dissolved solids (TDS) in brewed coffee to verify extraction levels during cupping. A refractometer paired with a cupping protocol gives both sensory and extraction data.</li>
            <li><strong>Water Activity Meters:</strong> Measure free (available) water in green beans rather than total moisture. More predictive of microbial risk during storage than standard moisture meters.</li>
          </ul>

          <div className='bg-green-50 p-6 rounded-lg my-6 border border-green-200'>
            <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
              <HiOutlineClipboardDocumentCheck className='text-green-600' />
              Quick Lab Protocol: Incoming Green QC
            </h4>
            <p className='text-sm mb-3'>A repeatable, low-cost protocol you can apply to every incoming lot:</p>
            <ol className='list-decimal ml-5 space-y-2 text-sm'>
              <li>Collect a 350g representative sample from at least five bags across the lot.</li>
              <li>Measure moisture with a calibrated meter (three readings, averaged). Flag anything outside 9.5-11.5%.</li>
              <li>Measure bulk density using a standardized 1L cylinder. Record the value and compare to your baseline for the origin.</li>
              <li>Run the sample through screen sieves. Note the size distribution and uniformity.</li>
              <li>Visually inspect for defects. For classification detail, consult the{' '}
                <Link href='/insights/green-coffee-quality-control-defects-grading' className='underline font-bold'>defects and grading reference</Link>.
              </li>
              <li>Roast a 100g sample to light cupping profile (Agtron 55-65 ground). Rest 8-24 hours, then cup using a standardized protocol.</li>
              <li>Record all data in a lot card: moisture, density, screen size, defect count, cupping score, and tasting notes.</li>
            </ol>
          </div>

          {/* ═══════════════════════════════════════════ */}
          {/* SECTION 6: ANALYSIS TO BUYING DECISIONS    */}
          {/* ═══════════════════════════════════════════ */}

          <h2 className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
            <HiOutlineArrowTrendingUp className='text-amber-600' />
            From Green Coffee Analysis to Buying Decisions
          </h2>
          <p className='my-4'>
            Physical data, compound knowledge, and cupping results are most powerful when combined. A single metric in isolation tells an incomplete story:
          </p>
          <ul className='list-disc ml-5 my-4'>
            <li>A lot with 11.8% moisture and low density may have been under-dried then re-moistened. Cup it carefully for ferment or mold taints.</li>
            <li>High density combined with bright cupping acidity confirms slow maturation at altitude. This is the physical signature of high-quality Ethiopian highland coffee.</li>
            <li>A cupping score of 85 with flat acidity and heavy body suggests the lot may be from a lower altitude or over-fermented. Check the origin elevation and processing data.</li>
          </ul>
          <p className='my-4'>
            Build a lot card for every sample you evaluate: moisture, density, screen size, defect count, cupping score, and specific tasting notes. Over time, this database becomes your most valuable sourcing tool. You will start seeing patterns between physical data and cup performance that let you make faster, more confident buying decisions.
          </p>

          <div className='bg-blue-50 p-6 rounded-lg my-6 border border-blue-200'>
            <p className='font-medium flex items-start gap-3'>
              <HiOutlineLightBulb className='text-blue-600 text-xl flex-shrink-0 mt-1' />
              <span>
                <strong>Ready to apply this?</strong> Pair your analysis toolkit with our{' '}
                <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='underline font-bold'>How to Source Green Coffee from Ethiopia</Link> guide and explore current availability on our{' '}
                <Link href='/offerings' className='underline font-bold'>offerings page</Link>. Every lot ships with full quality documentation, including moisture readings and cupping notes.
              </span>
            </p>
          </div>

          {/* ═══════════════════════════════════════════ */}
          {/* CONCLUSION                                  */}
          {/* ═══════════════════════════════════════════ */}

          <h2 className='text-3xl font-extrabold mt-12 mb-6'>Conclusion</h2>
          <p className='my-4'>
            Green coffee analysis transforms subjective impressions into objective data. The compounds inside the bean (acids, sugars, lipids, caffeine, volatile precursors) determine what is possible in the cup. Physical measurements (moisture, density, screen size) reveal how well those compounds were preserved from harvest to export. Sensory evaluation, grounded in an understanding of taste, aroma, and perception bias, translates compound data into actionable buying decisions.
          </p>
          <p className='my-4'>
            At Ethio Coffee Import and Export PLC, we apply these quality evaluation methods at every stage of our sourcing process, drawing on three decades of heritage sourcing relationships across Ethiopia&apos;s coffee regions. Every lot we ship includes pre-shipment samples, moisture data, and cupping reports so our partners can verify quality before committing.
          </p>

          {/* ═══════════════════════════════════════════ */}
          {/* FAQ                                         */}
          {/* ═══════════════════════════════════════════ */}

          <h2 className='text-3xl font-extrabold mt-12 mb-6'>Frequently Asked Questions</h2>

          <div className='bg-gray-50 rounded-xl p-8 border border-gray-200 space-y-6'>
            <div>
              <h3 className='text-lg font-bold text-dark mb-2'>What moisture content should green coffee have?</h3>
              <p className='text-gray-700'>
                Specialty green coffee should maintain 9-12% moisture by weight. Below 9%, beans become brittle and lose flavor compound integrity. Above 12%, free water activity promotes mold growth and accelerates oxidation. For export-quality Ethiopian lots, the target range is typically 10-11.5%.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-dark mb-2'>How do chlorogenic acids affect coffee flavor?</h3>
              <p className='text-gray-700'>
                Chlorogenic acids (6-10% of green coffee) break down during roasting into quinic acid and caffeic acid. At light roast levels, they contribute perceived acidity and complexity. At darker levels, their degradation products increase bitterness and body. Higher-altitude Arabica typically contains more CGAs, correlating with brighter acidity.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-dark mb-2'>Why does altitude affect green coffee chemistry?</h3>
              <p className='text-gray-700'>
                Cooler temperatures at higher altitudes slow cherry maturation by weeks or months. This extended development period allows more complex sugars, organic acids, and volatile aroma precursors to accumulate. Ethiopian coffees grown above 1,800m consistently show higher density, brighter acidity, and greater aromatic complexity.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-dark mb-2'>What is the minimum equipment needed for green coffee QC?</h3>
              <p className='text-gray-700'>
                A calibrated moisture meter, a bulk density cylinder with precision scale, screen sieves, and a sample roaster cover the essentials. Pair these with a structured cupping protocol and you can make well-informed buying decisions without expensive laboratory equipment.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-dark mb-2'>How does processing method change coffee compounds?</h3>
              <p className='text-gray-700'>
                Natural processing retains mucilage sugars around the bean during drying, increasing perceived sweetness and fruit character. Washed processing removes mucilage early, producing cleaner acid profiles. The same variety from the same farm can taste markedly different depending on process. See our{' '}
                <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='underline font-bold'>washed vs natural comparison</Link> for details.
              </p>
            </div>
          </div>

          {/* ═══════════════════════════════════════════ */}
          {/* CTA BLOCK                                   */}
          {/* ═══════════════════════════════════════════ */}

          <div className='bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-lg my-8 border-2 border-amber-300 shadow-lg'>
            <h4 className='text-2xl font-bold mb-4 text-center'>Source Verified Ethiopian Coffee Direct from Origin</h4>
            <p className='text-center mb-6'>
              Ethio Coffee Import and Export PLC provides pre-ship samples, full cupping reports, and complete quality documentation with every lot. Request samples to evaluate our Ethiopian specialty coffees against your own quality benchmarks.
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <Link href='/offerings' className='bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors'>
                View Our Offerings
              </Link>
              <Link href='/contact-us' className='bg-white border-2 border-amber-600 text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors'>
                Request Samples
              </Link>
              <Link href='/ordering-info' className='bg-white border-2 border-amber-600 text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors'>
                How to Order
              </Link>
            </div>
          </div>

          {/* ═══════════════════════════════════════════ */}
          {/* RELATED ARTICLES                            */}
          {/* ═══════════════════════════════════════════ */}

          <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
            <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
            <div className='grid md:grid-cols-2 gap-4'>
              <div>
                <h4 className='font-semibold mb-2 text-sm'>Coffee Journey Series</h4>
                <ul className='space-y-1 text-sm'>
                  <li>• <Link href='/insights/coffee-plant-taxonomy-species-varieties' className='text-amber-700 hover:underline'>Coffee Plant Taxonomy, Species &amp; Varieties</Link></li>
                  <li>• <Link href='/insights/coffee-is-agriculture-production-farming' className='text-amber-700 hover:underline'>Coffee Is Agriculture: Production &amp; Farming</Link></li>
                  <li>• <Link href='/insights/coffee-is-processing-drying-milling' className='text-amber-700 hover:underline'>Coffee Is Processing: Drying &amp; Milling</Link></li>
                  <li>• <Link href='/insights/coffee-is-commerce-exporting-importing-buying' className='text-amber-700 hover:underline'>Coffee Is Commerce: Exporting &amp; Importing</Link></li>
                  <li>• <Link href='/insights/coffee-is-art-roasting-brewing' className='text-amber-700 hover:underline'>Coffee Is Art: Roasting &amp; Brewing</Link></li>
                </ul>
              </div>
              <div>
                <h4 className='font-semibold mb-2 text-sm'>Quality &amp; Evaluation</h4>
                <ul className='space-y-1 text-sm'>
                  <li>• <Link href='/insights/new-sca-coffee-value-assessment' className='text-amber-700 hover:underline'>SCA Coffee Value Assessment Explained</Link></li>
                  <li>• <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality Control: Defects &amp; Grading</Link></li>
                  <li>• <Link href='/insights/best-cupping-school' className='text-amber-700 hover:underline'>Best Cupping Schools for Coffee Professionals</Link></li>
                </ul>
              </div>
              <div>
                <h4 className='font-semibold mb-2 text-sm'>Sourcing &amp; Origins</h4>
                <ul className='space-y-1 text-sm'>
                  <li>• <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
                  <li>• <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Coffee Origins</Link></li>
                  <li>• <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji Comparison</Link></li>
                </ul>
              </div>
              <div>
                <h4 className='font-semibold mb-2 text-sm'>Processing &amp; Storage</h4>
                <ul className='space-y-1 text-sm'>
                  <li>• <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee Processing</Link></li>
                  <li>• <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline'>Green Coffee Shelf Life &amp; Storage Guide</Link></li>
                  <li>• <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='text-amber-700 hover:underline'>How to Roast Ethiopian Coffee Beans</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className='border-t border-gray-300 mt-10 pt-6'>
            <p className='text-sm text-gray-600 font-inconsolata'>
              <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC. This article draws on coffee chemistry research, SCA cupping science, and our quality evaluation practices as an Ethiopian specialty coffee exporter. Compound concentrations cited are approximate ranges for Arabica; actual values vary by variety, altitude, and processing. For current samples or quality reports,{' '}
              <Link href='/contact-us' className='underline'>contact us directly</Link>.
            </p>
            <p className='text-sm text-gray-600 font-inconsolata mt-2'>
              <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
            </p>
          </div>
    </>
  )
}

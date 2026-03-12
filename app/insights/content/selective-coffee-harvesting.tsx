import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { HiOutlineHandThumbUp, HiOutlineScale, HiOutlineUsers, HiOutlineChartBar, HiOutlineCheckCircle, HiOutlineExclamationTriangle, HiOutlineBeaker, HiOutlineClipboardDocumentList, HiOutlineGlobeAmericas, HiOutlineBuildingStorefront } from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function SelectiveCoffeeHarvesting({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        How hand-picking ripe cherries shapes Ethiopian specialty coffee quality, picker economics, and what buyers can specify in contracts
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Selective harvesting requires pickers to visually assess and manually remove only ripe cherries, leaving green fruit for future passes through the same trees
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Selective coffee harvesting: hand picking ripe red cherries on an Ethiopian smallholder coffee plot'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-2'>Key Takeaway</p>
        <p>
          Selective coffee harvesting, hand-picking only ripe cherries, is the single most important field practice for specialty coffee quality. Ethiopia&apos;s smallholder model and mountainous terrain make selective picking the standard method across all six major growing regions. For buyers, understanding picker economics, ripeness science, and Ethiopia&apos;s multi-pass harvest system explains why selectively harvested lots deliver cleaner cups and command premiums of $0.30 to $0.80/kg above strip-picked equivalents.
        </p>
      </div>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Farm Practices / Coffee Economics / Quality Control</span>
      </div>

      <p className='my-4'>
        <span className='font-bold'>Selective coffee harvesting</span> determines final cup quality more than any other field practice. In Ethiopia, where over 5 million smallholders grow Arabica on plots averaging less than half a hectare, hand-picking ripe cherries across multiple passes is not a premium option; it is the default method. The country&apos;s steep terrain, fragmented landholdings, and genetic diversity of heirloom varieties make mechanical alternatives impractical.
      </p>

      <p className='my-4'>
        For importers and roasters sourcing Ethiopian green coffee, understanding selective harvesting explains why some lots score 86+ while others from the same kebele score 80. This guide covers the three harvesting methods, the chemistry of cherry ripeness, how <Link href='/insights/coffee-is-agriculture-production-farming' className='text-amber-700 hover:underline'>Ethiopia&apos;s farming systems</Link> shape harvest logistics, picker economics, labor challenges, and a buyer&apos;s checklist for specifying ripeness standards in contracts.
      </p>

      {/* IN THIS GUIDE */}
      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h3 className='font-bold text-lg mb-3'>In This Guide</h3>
        <ol className='space-y-1 text-sm list-decimal list-inside'>
          <li><a href='#harvesting-methods' className='text-amber-700 hover:underline'>Three Harvesting Methods Compared</a></li>
          <li><a href='#ripeness-science' className='text-amber-700 hover:underline'>The Science of Cherry Ripeness</a></li>
          <li><a href='#ethiopia-harvesting' className='text-amber-700 hover:underline'>Selective Harvesting in Ethiopia</a></li>
          <li><a href='#picker-economics' className='text-amber-700 hover:underline'>Picker Economics and the Cost of Quality</a></li>
          <li><a href='#labor-future' className='text-amber-700 hover:underline'>Labor Challenges and the Future</a></li>
          <li><a href='#buyer-checklist' className='text-amber-700 hover:underline'>Buyer&apos;s Checklist: Specifying Ripeness in Contracts</a></li>
        </ol>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineHandThumbUp className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>The Golden Rule:</span> A coffee bean can never be better than the cherry it came from. Processing can preserve quality, and roasting can highlight it, but no amount of post-harvest technology can fix the astringency of an unripe cherry or the fermented taste of an overripe one.</span>
        </p>
      </div>

      {/* SECTION 1: THREE METHODS */}
      <h3 id='harvesting-methods' className='text-2xl font-extrabold mt-8 flex items-center gap-3'>
        <HiOutlineChartBar className='text-amber-600' />
        1. Three Harvesting Methods Compared
      </h3>

      <p className='my-4'>
        Coffee harvesting methods fall into three categories. The method chosen depends on terrain, labor availability, and the target quality tier.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm text-left border border-gray-200'>
          <thead className='bg-dark text-primary font-bold'>
            <tr>
              <th className='p-3 border-b'>Method</th>
              <th className='p-3 border-b'>How It Works</th>
              <th className='p-3 border-b'>Quality Impact</th>
              <th className='p-3 border-b'>Where Used</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            <tr>
              <td className='p-3 font-bold'>Selective Picking</td>
              <td className='p-3'>Pickers hand-pick only ripe cherries, returning to the same trees 3 to 5 times per season.</td>
              <td className='p-3 text-green-700 font-semibold'>Highest. Maximizes sugar content, uniformity, and SCA cup scores.</td>
              <td className='p-3'>Ethiopia, Kenya, Colombia (specialty lots), most highland origins</td>
            </tr>
            <tr>
              <td className='p-3 font-bold'>Strip Picking</td>
              <td className='p-3'>All fruit stripped from the branch in one motion: ripe, unripe, and overripe together.</td>
              <td className='p-3 text-amber-600'>Variable. Requires aggressive post-harvest sorting (optical, density, flotation) to remove under-ripes.</td>
              <td className='p-3'>Brazil (large fazendas), Vietnam, some commodity-grade origins</td>
            </tr>
            <tr>
              <td className='p-3 font-bold'>Mechanical Harvesting</td>
              <td className='p-3'>Tractor-mounted or handheld shakers vibrate the tree to dislodge fruit. Requires flat, row-planted terrain.</td>
              <td className='p-3 text-blue-600'>Efficient at scale. Modern optical sorters improve results, but maturity mixing persists.</td>
              <td className='p-3'>Brazil (Cerrado), Hawaii, Australia</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <p className='font-bold mb-2'>Why Mechanical Harvesting Does Not Work in Ethiopia</p>
        <p className='text-sm'>
          Ethiopia&apos;s coffee grows on steep, fragmented smallholder plots (typically 0.1 to 0.5 hectares) at altitudes of 1,500 to 2,200 meters. Most trees are <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>heirloom varieties</Link> growing under indigenous shade canopy in garden or semi-forest systems. The terrain, tree spacing, and canopy structure make mechanical harvesters impossible to deploy. Selective hand-picking is the only viable method.
        </p>
      </div>

      {/* SECTION 2: RIPENESS SCIENCE */}
      <h3 id='ripeness-science' className='text-2xl font-extrabold mt-8 flex items-center gap-3'>
        <HiOutlineBeaker className='text-amber-600' />
        2. The Science of Cherry Ripeness
      </h3>

      <p className='my-4'>
        Selective harvesting is built on one biological fact: the chemical composition of a coffee cherry changes dramatically as it matures. Color is the visible indicator of ripeness, but the real story is in the sugars, acids, and phenolic compounds developing inside the fruit.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm text-left border border-gray-200'>
          <thead className='bg-dark text-primary font-bold'>
            <tr>
              <th className='p-3 border-b'>Ripeness Stage</th>
              <th className='p-3 border-b'>Cherry Color</th>
              <th className='p-3 border-b'>Brix (Sugar %)</th>
              <th className='p-3 border-b'>Cup Impact</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            <tr>
              <td className='p-3'>Unripe</td>
              <td className='p-3'>Green</td>
              <td className='p-3'>8 to 12%</td>
              <td className='p-3 text-red-600'>Astringent, grassy, metallic. Produces &quot;quakers&quot; during roasting.</td>
            </tr>
            <tr>
              <td className='p-3'>Turning</td>
              <td className='p-3'>Yellow to orange</td>
              <td className='p-3'>12 to 16%</td>
              <td className='p-3 text-amber-600'>Thin body, underdeveloped acidity. Acceptable only in blends.</td>
            </tr>
            <tr>
              <td className='p-3 font-bold'>Ripe</td>
              <td className='p-3 font-bold'>Deep red to purple</td>
              <td className='p-3 font-bold'>18 to 22%</td>
              <td className='p-3 text-green-700 font-semibold'>Full sweetness, complex acidity, clean finish. Target for specialty.</td>
            </tr>
            <tr>
              <td className='p-3'>Overripe</td>
              <td className='p-3'>Dark purple, brown, dried</td>
              <td className='p-3'>16 to 20% (fermenting)</td>
              <td className='p-3 text-red-600'>Fermented, vinegary, or alcoholic off-flavors. Defect in cupping.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className='text-xl font-bold mt-6 mb-3'>What Happens Inside the Cherry</h4>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Sugar accumulation:</span> Sucrose, fructose, and glucose develop as the cherry matures. These sugars drive Maillard reactions during roasting, producing sweetness, caramel notes, and body. A cherry harvested at 20% Brix will always out-score one harvested at 12%.</li>
        <li><span className='font-bold'>Chlorogenic acid decline:</span> Unripe cherries contain high concentrations of chlorogenic acids (CGAs), which produce harsh, astringent, and metallic flavors. As the cherry ripens, CGA levels drop by 30 to 50%, reducing bitterness and enabling cleaner cup profiles.</li>
        <li><span className='font-bold'>Volatile precursors:</span> The aroma precursors that create floral, fruity, and citrus notes in Ethiopian coffees form during the final ripening stage. Harvesting even two weeks early can eliminate the jasmine and bergamot character that Yirgacheffe lots are known for.</li>
        <li><span className='font-bold'>Mucilage development:</span> The sticky mucilage layer between skin and parchment thickens at peak ripeness. For washed coffees, this mucilage drives fermentation chemistry. For naturals, it contributes directly to fruit-forward complexity in the cup.</li>
      </ul>

      <div className='bg-amber-50 p-5 rounded-lg my-6 border border-amber-200'>
        <h5 className='font-bold mb-2 text-amber-800'>Brix in the Field</h5>
        <p className='text-sm'>
          Progressive washing stations in Guji and Yirgacheffe now use handheld refractometers to measure Brix at intake. Cherries below 18% Brix are separated into lower-grade lots. This objective measurement supplements visual color assessment and correlates strongly with final <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>cupping scores</Link>. According to World Coffee Research, Brix readings above 20% correlate with cup scores of 85+.
        </p>
      </div>

      {/* SECTION 3: ETHIOPIA HARVESTING */}
      <h3 id='ethiopia-harvesting' className='text-2xl font-extrabold mt-8 flex items-center gap-3'>
        <HiOutlineGlobeAmericas className='text-amber-600' />
        3. Selective Coffee Harvesting in Ethiopia
      </h3>

      <p className='my-4'>
        Ethiopia produced approximately 496,200 metric tons (8.28 million 60-kg bags) of Arabica coffee in the 2024/25 season, according to <a href='https://apps.fas.usda.gov/psdonline/circulars/coffee.pdf' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>USDA FAS data</a>. Virtually all of this was selectively harvested by hand. The country&apos;s <Link href='/insights/coffee-is-agriculture-production-farming' className='text-amber-700 hover:underline'>four farming systems</Link> each present distinct harvesting conditions.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h5 className='font-bold text-lg mb-2'>Garden Coffee (50% of production)</h5>
          <p className='text-sm'>
            Smallholders grow coffee alongside food crops on plots under 0.5 hectares. Family members perform selective harvesting, typically making 3 to 4 passes between October and January. Intimate knowledge of individual trees allows experienced households to time each pass precisely.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h5 className='font-bold text-lg mb-2'>Semi-Forest Coffee (35% of production)</h5>
          <p className='text-sm'>
            Coffee grows under managed forest canopy at 1,500 to 2,000 meters elevation. Trees are widely spaced, requiring pickers to walk significant distances between plants. Harvest windows are narrower due to cooler temperatures, and 4 to 5 passes are common for specialty lots.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h5 className='font-bold text-lg mb-2'>Forest Coffee (10% of production)</h5>
          <p className='text-sm'>
            Wild Arabica growing in southwestern highland forests (Kaffa, Sheka, Bench Maji). Access is difficult, yields are low (200 to 400 kg/hectare), and pickers navigate dense undergrowth. Harvest quality varies, but these lots carry unique genetic diversity.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h5 className='font-bold text-lg mb-2'>Plantation Coffee (5% of production)</h5>
          <p className='text-sm'>
            State-owned and private plantations use hired seasonal laborers for harvesting. Plot sizes are larger (50+ hectares), but terrain remains too steep for machinery. Picker supervision and incentive structures directly affect lot quality.
          </p>
        </div>
      </div>

      <h4 className='text-xl font-bold mt-6 mb-3'>The Multi-Pass Harvest System</h4>

      <p className='my-4'>
        Ethiopia&apos;s <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>main harvest season</Link> runs from October to January, with regional variation. During this period, pickers return to the same trees multiple times because cherries on a single branch ripen at different rates. A typical specialty-grade harvest follows this pattern:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Pass 1 (early harvest):</span> First flush of ripe cherries, usually 20 to 30% of the tree&apos;s total yield. Often the highest-scoring portion.</li>
        <li><span className='font-bold'>Pass 2 and 3 (main harvest):</span> Bulk of the crop, 50 to 60% of yield. This is where most Grade 1 and Grade 2 lots originate.</li>
        <li><span className='font-bold'>Pass 4 and 5 (late harvest):</span> Remaining 10 to 20%. Quality drops as overripe cherries increase. Late-pass lots typically grade G3 or G4.</li>
      </ul>

      <h4 className='text-xl font-bold mt-6 mb-3'>Washing Station Intake as Quality Enforcement</h4>

      <p className='my-4'>
        Ethiopia&apos;s <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='text-amber-700 hover:underline'>washing stations</Link> serve as the critical quality checkpoint. Well-managed stations enforce ripeness standards at intake by rejecting loads with excessive green or overripe cherries. This creates a market incentive: farmers who deliver uniformly ripe cherry receive the highest prices per kilogram. Stations in Yirgacheffe and Guji increasingly sort incoming cherry by color and density using float tanks, separating premium lots from commercial grades at the point of receipt. The resulting <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>defect counts</Link> in the final green coffee directly reflect how well pickers selected during harvest.
      </p>

      {/* SECTION 4: PICKER ECONOMICS */}
      <h3 id='picker-economics' className='text-2xl font-extrabold mt-8 flex items-center gap-3'>
        <HiOutlineUsers className='text-amber-600' />
        4. Picker Economics and the Cost of Quality
      </h3>

      <p className='my-4'>
        Understanding picker economics clarifies why selective harvesting costs more and why that cost is justified for specialty-grade coffee.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3'><HiOutlineScale className='inline mr-2' />Harvesting by the Numbers</h4>
        <ul className='text-sm space-y-2'>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Daily haul:</span> An experienced picker collects 45 to 90 kg of cherry per day, depending on tree density and terrain. On steep Yirgacheffe slopes, output skews toward the lower end.</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Cherry-to-green ratio:</span> Approximately 5 to 6 kg of cherry produces 1 kg of exportable green coffee. A full day of selective picking yields 8 to 15 kg of green beans.</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Payment model:</span> Ethiopian pickers are paid per kilogram of cherry delivered (birr/kg). Rates vary by region and season, typically ranging from 15 to 40 birr/kg depending on market conditions and quality tier.</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Selective vs. strip cost:</span> Selective harvesting costs approximately 2 to 3 times more per kilogram of green coffee than strip picking, due to multiple passes and lower daily output per picker.</span>
          </li>
        </ul>
      </div>

      <h4 className='text-xl font-bold mt-6 mb-3'>Two Harvesting Models in Ethiopia</h4>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold text-lg mb-2'>Smallholder Self-Harvesting</h5>
          <p className='text-sm'>
            Most Ethiopian coffee is harvested by the farming household. The family knows every tree, can judge ripeness from experience, and has a direct financial incentive to deliver ripe cherry (higher station prices). This model produces some of the most consistent selective harvesting in the world.
          </p>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold text-lg mb-2'>Hired Seasonal Labor</h5>
          <p className='text-sm'>
            Larger entities and cooperatives hire seasonal pickers, typically from nearby communities. Quality depends on supervision and incentive structures. Stations that pay premiums for ripe-only delivery and conduct visual inspection at intake see measurably better results in both defect counts and cupping scores.
          </p>
        </div>
      </div>

      <div className='bg-amber-50 p-5 rounded-lg my-6 border border-amber-200'>
        <h5 className='font-bold mb-2 text-amber-800'>The Cost of Perfection</h5>
        <p className='text-sm'>
          Returning to a tree five times to pick only the ripe cherries triples the labor cost compared to a single strip-pick pass. For specialty-grade Ethiopian coffee, this additional cost is recovered through quality premiums: Grade 1 washed Yirgacheffe commands $0.50 to $1.00/kg more FOB than Grade 3 from the same zone. The selective harvesting premium pays for itself in the quality differential.
        </p>
      </div>

      {/* SECTION 5: LABOR CHALLENGES */}
      <h3 id='labor-future' className='text-2xl font-extrabold mt-8 flex items-center gap-3'>
        <HiOutlineExclamationTriangle className='text-amber-600' />
        5. Labor Challenges and the Future of Selective Harvesting
      </h3>

      <p className='my-4'>
        Selective harvesting depends entirely on available, skilled labor. Across coffee-producing countries, rural-to-urban migration and aging farming populations are creating pressure on harvest capacity. Ethiopia is not immune to this trend, though its dynamics differ from Latin American origins.
      </p>

      <p className='my-4'>
        Ethiopia&apos;s young population (median age ~19) provides a larger labor pool than countries like Colombia or Costa Rica. However, younger generations increasingly pursue urban employment in Addis Ababa and regional cities. The International Coffee Organization (ICO) has identified rural labor availability as a medium-term risk for Ethiopian coffee production. Two responses are emerging:
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold text-lg mb-2'>Training at Washing Stations</h5>
          <p className='text-sm'>
            Progressive washing stations now train seasonal pickers on ripeness assessment, proper picking technique (twist, not pull), and cherry handling. Training programs that run 1 to 2 days before harvest season measurably reduce defect rates and increase the percentage of Grade 1 output.
          </p>
        </div>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold text-lg mb-2'>Premium Incentives</h5>
          <p className='text-sm'>
            Paying higher per-kilogram rates for documented ripe-only delivery creates a financial incentive that aligns picker behavior with quality goals. Stations that implement tiered pricing (standard rate plus ripe-only premium) report 15 to 25% improvements in intake ripeness uniformity.
          </p>
        </div>
      </div>

      <p className='my-4'>
        Mechanical harvesting remains impractical for Ethiopian conditions. Unlike Brazil&apos;s flat, row-planted Cerrado region, Ethiopia&apos;s steep terrain, mixed-shade canopy, and small plot sizes prevent any meaningful mechanization. For the foreseeable future, Ethiopian specialty coffee quality will continue to depend on human hands.
      </p>

      {/* SECTION 6: BUYER CHECKLIST */}
      <h3 id='buyer-checklist' className='text-2xl font-extrabold mt-8 flex items-center gap-3'>
        <HiOutlineClipboardDocumentList className='text-amber-600' />
        6. Buyer&apos;s Checklist: Specifying Selective Harvesting in Contracts
      </h3>

      <p className='my-4'>
        Importers and roasters can influence harvesting quality through clear contract specifications and verification practices. Use this checklist when <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>sourcing Ethiopian green coffee</Link>:
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <ul className='space-y-3 text-sm'>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Specify ripeness standards:</span> Include minimum ripeness percentage (90 to 100% ripe cherry) in purchase contracts. State acceptable color range (deep red to purple; no green or brown).</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Request intake documentation:</span> Ask your exporter for washing station intake records showing cherry acceptance/rejection rates. Well-managed stations document this daily.</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Set defect count thresholds:</span> Align <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>defect count limits</Link> with SCA specialty standards (fewer than 5 full defects per 350g sample for Grade 1). Higher defect counts often trace back to poor harvest selectivity.</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Offer documented-lot premiums:</span> Pay a premium ($0.05 to $0.15/kg) for lots with verified selective harvesting and intake QC documentation. This incentivizes quality throughout the chain.</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Request field or intake photos:</span> Visual verification of cherry color at intake provides a quick quality indicator. Many stations now photograph incoming loads as part of traceability records.</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Evaluate pre-shipment samples carefully:</span> During <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>cupping evaluation</Link>, note astringency, grassiness, or ferment notes that indicate harvest quality issues. Compare early-season vs. late-season samples from the same station.</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Support picker training programs:</span> Ask whether your supplying station invests in pre-season picker training. Better-trained pickers produce fewer defects downstream and more consistent lot quality.</span>
          </li>
        </ul>
      </div>

      {/* CONCLUSION */}
      <h3 className='text-2xl font-extrabold mt-8'>
        Why Selective Coffee Harvesting Defines Ethiopian Quality
      </h3>

      <p className='my-4'>
        Selective coffee harvesting is the foundation of Ethiopian specialty coffee quality. Every 86+ point lot, every clean Yirgacheffe with jasmine notes, every complex Guji natural with blueberry character starts with a picker choosing the right cherry at the right time. No amount of processing innovation or roasting skill can compensate for poor harvest selectivity.
      </p>

      <p className='my-4'>
        For importers building quality-focused portfolios, specifying harvest standards in contracts, verifying intake practices, and supporting picker incentive programs are practical steps that protect cup quality at the source. Ethiopia&apos;s smallholder system, combined with washing station QC enforcement, already produces some of the most consistently selectively harvested coffee in the world. Buyers who understand and support this system gain access to cleaner lots, lower defect rates, and the full expression of Ethiopia&apos;s unmatched Arabica genetic diversity.
      </p>

      {/* SOURCES */}
      <div className='my-6'>
        <h4 className='text-lg font-bold mb-3'>Sources and Further Reading</h4>
        <ul className='list-disc ml-5 space-y-2 text-sm'>
          <li><a href='https://www.ico.org/documents/cy2024-25/annual-review-2023-24-e.pdf' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>International Coffee Organization: Annual Review 2023/24</a></li>
          <li><a href='https://apps.fas.usda.gov/psdonline/circulars/coffee.pdf' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>USDA Foreign Agricultural Service: Coffee Production Data</a></li>
          <li><a href='https://worldcoffeeresearch.org' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>World Coffee Research: Harvest quality and variety performance research</a></li>
        </ul>
      </div>

      {/* CTA */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Selectively Harvested Ethiopian Coffee</h4>
        <p className='my-2'>
          Ethio Coffee Import and Export PLC sources from trusted cooperatives and washing stations across all six Ethiopian growing regions. Every specialty lot we export is selectively harvested at peak ripeness. Request samples or current availability.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Our Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Request Samples</Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>How to Order</Link>
        </div>
      </div>

      {/* FAQ SECTION */}
      <section className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900'>Frequently Asked Questions About Selective Coffee Harvesting</h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is selective coffee harvesting?</h4>
            <p className='text-sm text-gray-600'>Selective coffee harvesting is the practice of hand-picking only ripe cherries from the tree while leaving unripe and overripe fruit on the branch. Pickers return to the same trees multiple times during the harvest season, making 3 to 5 passes to collect cherries at peak ripeness. This method maximizes sugar content in the cherry and produces cleaner, sweeter cup profiles.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Why does selective harvesting improve coffee quality?</h4>
            <p className='text-sm text-gray-600'>Ripe cherries contain fully developed sugars, reduced chlorogenic acids, and complex aroma precursors. Harvesting only ripe cherries eliminates the astringent and grassy flavors caused by unripe fruit and the fermented off-notes from overripe cherries. The result is a sweeter, cleaner cup with more complexity, which translates directly to higher SCA cupping scores.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How much does selective harvesting cost compared to strip picking?</h4>
            <p className='text-sm text-gray-600'>Selective harvesting costs approximately 2 to 3 times more per kilogram of green coffee than strip picking, due to multiple passes and lower daily output per picker. However, the resulting quality premium for specialty-grade coffee (typically $0.30 to $0.80/kg above strip-picked equivalents) exceeds the additional labor cost, making it economically justified for lots targeting 84+ cup scores.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Is all Ethiopian coffee selectively harvested?</h4>
            <p className='text-sm text-gray-600'>Virtually all Ethiopian coffee is hand-picked because the country&apos;s steep terrain, small plot sizes, and shade-grown farming systems prevent mechanical harvesting. However, the quality of selective picking varies. Well-managed washing stations enforce ripeness standards at intake, while less rigorous stations accept mixed-maturity cherry, producing lower grades.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How can buyers verify that their coffee was selectively harvested?</h4>
            <p className='text-sm text-gray-600'>Request washing station intake records showing cherry acceptance and rejection rates. Ask for intake photos documenting cherry color. Evaluate pre-shipment samples for astringency or grassiness (indicators of unripe cherry). Set defect count thresholds aligned with SCA standards. Partner with exporters who provide traceability documentation from station to port.</p>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Production and Quality</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/coffee-is-agriculture-production-farming' className='text-amber-700 hover:underline'>Ethiopian Coffee Agriculture: How Farming Shapes Quality</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-dry-coffee-production-quality-control' className='text-amber-700 hover:underline'>Ethiopian Dry Coffee: QC and Processing</Link></li>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Defects: Quality Control Guide</Link></li>
              <li>&bull; <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup Ethiopian Coffee Samples</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Washing Stations Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing and Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>Sourcing Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Harvest Calendar</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability Guide</Link></li>
              <li>&bull; <Link href='/insights/direct-trade-ethiopian-farmers' className='text-amber-700 hover:underline'>Direct Trade Ethiopian Coffee</Link></li>
              <li>&bull; <Link href='/insights/women-in-ethiopian-coffee-industry' className='text-amber-700 hover:underline'>Women in Ethiopian Coffee</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Heirloom Ethiopian Coffee Varieties</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC. This guide covers selective coffee harvesting practices in Ethiopia, cherry ripeness science, picker economics, and buyer specifications for sourcing selectively harvested specialty coffee.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}
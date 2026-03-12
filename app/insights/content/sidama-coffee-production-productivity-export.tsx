import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineChartBar,
  HiOutlineArrowTrendingUp,
  HiOutlineUserGroup,
  HiOutlineGlobeAlt,
  HiOutlineCog,
  HiOutlineDocumentCheck,
  HiOutlineQuestionMarkCircle,
  HiOutlineCheckCircle,
  HiOutlineShieldCheck,
} from 'react-icons/hi2'
import { PiMountains } from 'react-icons/pi'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function SidamaCoffeeProductionProductivityExport({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      {/* H1 TITLE */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>{title}</h1>

      {/* SUBTITLE */}
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        How Ethiopia&apos;s most productive coffee region delivers reliable specialty supply for international buyers
      </h2>

      {/* HERO IMAGE */}
      <figure>
        <figcaption className='font-inconsolata my-2 text-sm text-gray-500'>
          Sidama region coffee production exceeds 10 quintals per hectare, more than double Ethiopia&apos;s national average. Photo: Ethio Coffee Import and Export PLC.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Sidama region coffee production showing green coffee cherries and farming landscape in Ethiopia'
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
        <span className='ml-2'>Regional Production / Sidama Coffee / Farmer Cooperatives / Sourcing Guide</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-bold text-lg mb-2 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0' /> Key Takeaway
        </p>
        <p className='text-sm leading-relaxed'>
          Sidama region achieves over 10 quintals (1,000 kg) of coffee per hectare, more than double Ethiopia&apos;s national average of 4 to 6 quintals. With 176,000 hectares under cultivation, 239 organized farmer clusters, and 495 newly licensed direct exporters among smallholders, Sidama offers international buyers a combination of volume, traceability, and quality that few Ethiopian origins can match. Both washed and natural lots from this region score 84 to 88+ on the SCA scale.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#production-scale' className='text-amber-700 hover:underline'>1. Sidama Coffee Production at Scale</a></li>
          <li><a href='#yield-factors' className='text-amber-700 hover:underline'>2. Why Sidama Yields Exceed the National Average</a></li>
          <li><a href='#farmer-clusters' className='text-amber-700 hover:underline'>3. 239 Farmer Clusters: Quality Through Organization</a></li>
          <li><a href='#altitude-zones' className='text-amber-700 hover:underline'>4. Highland vs. Weina Dega: Altitude Zones and Cup Profile</a></li>
          <li><a href='#modernization' className='text-amber-700 hover:underline'>5. Agricultural Modernization Driving Productivity</a></li>
          <li><a href='#export-licenses' className='text-amber-700 hover:underline'>6. 495 Direct Export Licenses: What It Means for Buyers</a></li>
          <li><a href='#sourcing-guide' className='text-amber-700 hover:underline'>7. Sourcing Sidama Coffee: A Buyer&apos;s Guide</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>8. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRODUCTION */}
      <p className='my-4'>
        Sidama coffee production is rewriting expectations for Ethiopian specialty yields. The region now averages over 10 quintals per hectare, a figure that puts it well ahead of the national baseline and signals a structural shift in supply reliability for international buyers. This is not a one-season anomaly. It reflects years of investment in farmer organization, tree renewal, and processing infrastructure.
      </p>
      <p className='my-4'>
        For roasters and importers sourcing Ethiopian green coffee, Sidama&apos;s productivity advantage translates into larger available lot sizes, more consistent quality from organized clusters, and expanding traceability options as smallholder farmers gain direct export licenses. This guide breaks down the production data, explains the systems behind the yields, and outlines what buyers need to know when sourcing from this region.
      </p>
      <p className='my-4'>
        Sidama (the region became an independent regional state in 2020, formerly part of SNNPR) is also the origin behind the globally recognized <Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline font-bold'>Sidamo trademarked coffee designation</Link>. For a side-by-side flavor comparison with Yirgacheffe and Guji, see our <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline font-bold'>origin comparison guide</Link>.
      </p>

      {/* SECTION 1: PRODUCTION AT SCALE */}
      <h2 id='production-scale' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineChartBar className='inline mr-2 text-amber-600' /> 1. Sidama Coffee Production at Scale
      </h2>

      <p className='my-4'>
        Sidama produces approximately 35 to 40% of Ethiopia&apos;s total coffee export volume. The region&apos;s scale is anchored in 176,000 hectares of coffee land, of which 146,000 hectares (83%) are actively producing. According to Mesfin Qare, Chief Director of the Sidama Regional Coffee, Fruit, and Spices Authority, the seasonal production target for the 2025/26 crop year is 239,000 tons.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Indicator</th>
              <th className='p-3 text-left'>Figure</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>Total coffee area</td>
              <td className='p-3'>176,000 hectares</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3'>Productive area</td>
              <td className='p-3'>146,000 hectares (83% of total)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>Average productivity</td>
              <td className='p-3'>10+ quintals/hectare (1,000+ kg/ha)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3'>2025/26 seasonal target</td>
              <td className='p-3'>239,000 tons</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>Organized farmer clusters</td>
              <td className='p-3'>239 clusters</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3'>New direct export licenses (smallholders)</td>
              <td className='p-3'>495 farmers</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>Altitude range</td>
              <td className='p-3'>1,500 to 2,200 masl</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        <span className='font-semibold'>Harvest timing by altitude:</span> Lower zones (1,500 to 1,700 m) harvest from October through December. The main Weina Dega belt (1,700 to 2,000 m) peaks from November through January. Highland parcels above 2,000 m finish from December through February. This staggered calendar keeps processing facilities operating continuously and extends the window of fresh-crop availability for buyers.
      </p>

      <p className='my-4'>
        For a broader view of Ethiopia&apos;s production across all regions, see our <Link href='/insights/coffee-is-agriculture-production-farming' className='text-amber-700 hover:underline font-bold'>guide to Ethiopian coffee agriculture and farming systems</Link>. Current-season availability and pricing for Sidama lots are listed on our <Link href='/offerings' className='text-amber-700 hover:underline font-bold'>offerings page</Link>.
      </p>

      {/* SECTION 2: YIELD FACTORS */}
      <h2 id='yield-factors' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineArrowTrendingUp className='inline mr-2 text-amber-600' /> 2. Why Sidama Yields Exceed the National Average
      </h2>

      <p className='my-4'>
        Ethiopia&apos;s national coffee productivity averages 4 to 6 quintals per hectare. Sidama more than doubles that figure. Three structural factors explain the gap, and each one matters for buyers evaluating supply consistency.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Metric</th>
              <th className='p-3 text-center'>Sidama Region</th>
              <th className='p-3 text-center'>Ethiopia National Avg</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>Productivity (quintals/ha)</td>
              <td className='p-3 text-center font-semibold'>10+</td>
              <td className='p-3 text-center'>4 to 6</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3'>Productive land utilization</td>
              <td className='p-3 text-center font-semibold'>83%</td>
              <td className='p-3 text-center'>65 to 70%</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>Farmer organization</td>
              <td className='p-3 text-center font-semibold'>239 clusters</td>
              <td className='p-3 text-center'>Limited</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className='text-xl font-bold mt-8 mb-2'>Optimal growing conditions</h3>
      <p className='my-4'>
        Sidama&apos;s dark volcanic soils are rich in potassium and phosphorus. The region receives 1,400 to 1,800 mm of annual rainfall with a well-defined wet and dry season that aligns with flowering and cherry maturation cycles. These conditions support higher biomass production per tree compared to drier or lower-altitude regions.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-2'>Systematic farmer training</h3>
      <p className='my-4'>
        Agricultural extension workers operate across all 239 organized clusters, delivering on-farm training in pruning, cherry selection, and organic soil management. Demonstration plots at the woreda (district) level allow farmers to observe yield differences before adopting new practices. This structured approach compresses the adoption cycle.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-2'>Higher land utilization rate</h3>
      <p className='my-4'>
        At 83% productive utilization (146,000 of 176,000 hectares), Sidama converts a significantly larger share of its coffee land into active yields than the national average of 65 to 70%. The remaining 30,000 hectares include young plantings not yet bearing and parcels under renovation through stumping programs.
      </p>

      {/* SECTION 3: FARMER CLUSTERS */}
      <h2 id='farmer-clusters' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineUserGroup className='inline mr-2 text-amber-600' /> 3. 239 Farmer Clusters: Quality Through Organization
      </h2>

      <p className='my-4'>
        The cluster model is Sidama&apos;s most distinctive organizational feature. Each of the 239 clusters groups 50 to 200 smallholder farmers in a geographic area to coordinate production, share training, and standardize quality practices. According to the Regional Authority, this system is central to achieving both the productivity and quality targets that make Sidama coffee competitive on international markets.
      </p>

      <div className='bg-amber-50 p-5 rounded-lg my-6 border border-amber-200'>
        <h3 className='text-xl font-bold mb-3'>What a farmer cluster does</h3>
        <ul className='space-y-2 text-sm'>
          <li className='flex gap-2 items-start'>
            <HiOutlineCheckCircle className='text-amber-600 flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Collective training:</span> Extension agents deliver pruning, composting, and cherry selection workshops at cluster level rather than farm by farm.</span>
          </li>
          <li className='flex gap-2 items-start'>
            <HiOutlineCheckCircle className='text-amber-600 flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Quality standardization:</span> Clusters adopt uniform harvest ripeness thresholds and processing protocols, reducing lot-to-lot variability.</span>
          </li>
          <li className='flex gap-2 items-start'>
            <HiOutlineCheckCircle className='text-amber-600 flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Volume aggregation:</span> Pooled production from a cluster fills washing station capacity more efficiently and meets minimum export lot sizes.</span>
          </li>
          <li className='flex gap-2 items-start'>
            <HiOutlineCheckCircle className='text-amber-600 flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Traceability infrastructure:</span> Cluster-level records enable lot tracking from geographic area through processing to export, supporting buyer traceability requirements.</span>
          </li>
        </ul>
      </div>

      <div className='bg-blue-50 p-5 rounded-lg my-6 border border-blue-200'>
        <h3 className='font-bold mb-2'>Buyer Evaluation: Cluster-Sourced Lots</h3>
        <ul className='text-sm space-y-2'>
          <li className='flex gap-2 items-start'>
            <HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' />
            <span>Ask your exporter whether the lot is cluster-traceable. Cluster lots typically show tighter cupping score ranges (2 to 3 point spread vs. 5+ for aggregated regional lots).</span>
          </li>
          <li className='flex gap-2 items-start'>
            <HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' />
            <span>Cluster-sourced coffee supports sustainability narratives and <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline font-bold'>traceability documentation</Link> for EUDR compliance and specialty buyer expectations.</span>
          </li>
          <li className='flex gap-2 items-start'>
            <HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' />
            <span>Lot sizes from a single cluster typically range from 50 to 150 bags (3 to 9 tons). For full container volumes, ask about multi-cluster lots from the same altitude zone.</span>
          </li>
        </ul>
      </div>

      <p className='my-4'>
        The cluster system also creates a pathway for farmers to qualify for direct export licenses. Organized farmers build quality track records, access cupping feedback, and develop the documentation habits needed for export certification.
      </p>

      {/* SECTION 4: ALTITUDE ZONES */}
      <h2 id='altitude-zones' className='text-3xl font-extrabold mt-10 mb-4'>
        <PiMountains className='inline mr-2 text-amber-600' /> 4. Highland vs. Weina Dega: Altitude Zones and Cup Profile
      </h2>

      <p className='my-4'>
        Sidama&apos;s coffee grows across three altitude bands, each producing distinct cup characteristics. The Regional Authority confirms that harvesting operates extensively across both highland and Weina Dega (mid-altitude) zones, which is why Sidama can offer buyers a range of profiles under a single origin designation.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Zone</th>
              <th className='p-3 text-left'>Altitude</th>
              <th className='p-3 text-left'>Cup Character</th>
              <th className='p-3 text-left'>Processing</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Highland (Dega)</td>
              <td className='p-3'>2,000 to 2,200 m</td>
              <td className='p-3'>Bright floral, citrus, tea-like body, complex</td>
              <td className='p-3'>Predominantly washed</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Mid-altitude (Weina Dega)</td>
              <td className='p-3'>1,700 to 2,000 m</td>
              <td className='p-3'>Stone fruit, balanced acidity, fuller body</td>
              <td className='p-3'>Washed and natural</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Lower mid-altitude</td>
              <td className='p-3'>1,500 to 1,700 m</td>
              <td className='p-3'>Chocolate, caramel, lower acidity, full body</td>
              <td className='p-3'>Natural common; washed available</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Highland lots command the highest specialty premiums and suit light-roast filter applications. Weina Dega lots deliver the highest yields per hectare and produce balanced profiles that perform well as both espresso and filter coffees. Lower-altitude production provides good commercial-grade volume with occasional specialty lots in well-managed gardens.
      </p>

      <p className='my-4'>
        Buyers who specify altitude zone preferences in their purchase contracts receive more targeted flavor profiles. For detailed Sidama sub-region breakdowns (Bensa, Dale, Aleta Wendo, Chire, Nensebo, Arbegona), see the <Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline font-bold'>Sidamo origin page</Link>.
      </p>

      {/* SECTION 5: MODERNIZATION */}
      <h2 id='modernization' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineCog className='inline mr-2 text-amber-600' /> 5. Agricultural Modernization Driving Sidama Coffee Productivity
      </h2>

      <p className='my-4'>
        The productivity gains behind 10+ quintals per hectare are not accidental. The Sidama Regional Coffee, Fruit, and Spices Authority has led a coordinated modernization effort across three areas, each addressing a specific constraint on smallholder yields.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-2'>Tree pruning and rejuvenation</h3>
      <p className='my-4'>
        Many Sidama farms carry tree stock that is 30 to 50 years old. Systematic stumping (cutting trees back to 30 to 40 cm) stimulates new growth and restores productivity to 70 to 90% of original capacity within two to three years. The Authority coordinates pruning schedules across clusters so that individual farmers can maintain income from other trees while renovated sections recover.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-2'>Variety replacement</h3>
      <p className='my-4'>
        Community nurseries propagate improved heirloom selections from Awada and Melko coffee research centers. Progressive replacement rather than wholesale farm renovation allows farmers to phase in higher-yielding, disease-resistant trees while preserving the flavor characteristics that define Sidama&apos;s cup profile. See our <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline font-bold'>Ethiopian heirloom varieties guide</Link> for more on the relationship between variety selection and specialty quality.
      </p>

      <h3 className='text-xl font-bold mt-8 mb-2'>Organic soil management</h3>
      <p className='my-4'>
        Chief Director Mesfin Qare confirmed that farmers use natural fertilizers, specifically composted coffee pulp, animal manure, and cover crops of nitrogen-fixing legumes. This approach maintains the clean soil profile that supports specialty flavor development while avoiding chemical inputs. For buyers sourcing <Link href='/organic-ethiopian-coffee-export' className='text-amber-700 hover:underline font-bold'>organic-certified Ethiopian coffee</Link>, Sidama&apos;s baseline organic practices reduce the certification transition burden.
      </p>

      {/* SECTION 6: EXPORT LICENSES */}
      <h2 id='export-licenses' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineDocumentCheck className='inline mr-2 text-amber-600' /> 6. 495 Direct Export Licenses: What It Means for Buyers
      </h2>

      <p className='my-4'>
        The Sidama Regional Authority has issued 495 direct export licenses to smallholder farmers with two or more hectares of coffee land. This represents a significant expansion of Ethiopia&apos;s <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline font-bold'>direct specialty export channel</Link>. For international buyers, the implications are practical and immediate.
      </p>

      <div className='bg-amber-50 p-5 rounded-lg my-6 border border-amber-200'>
        <h3 className='text-xl font-bold mb-3'>What direct export licensing means for sourcing</h3>
        <ul className='space-y-2 text-sm'>
          <li className='flex gap-2 items-start'>
            <HiOutlineCheckCircle className='text-amber-600 flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Farm-level traceability:</span> Licensed farmers can export under their own name, enabling single-farm lot identification that the ECX auction system does not typically provide.</span>
          </li>
          <li className='flex gap-2 items-start'>
            <HiOutlineCheckCircle className='text-amber-600 flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Shorter supply chain:</span> Fewer intermediaries between tree and container. Buyers who work through an experienced Ethiopian exporter can access these lots with full documentation and quality verification.</span>
          </li>
          <li className='flex gap-2 items-start'>
            <HiOutlineCheckCircle className='text-amber-600 flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Quality feedback loop:</span> Licensed farmers receive cupping scores and buyer feedback directly, creating a cycle that drives quality improvement season over season.</span>
          </li>
          <li className='flex gap-2 items-start'>
            <HiOutlineCheckCircle className='text-amber-600 flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Sustainability storytelling:</span> Farm-traceable lots support marketing narratives around farmer empowerment and direct trade relationships.</span>
          </li>
        </ul>
      </div>

      <p className='my-4'>
        <span className='font-semibold'>Eligibility requirements:</span> Farmers must hold two or more hectares of coffee land, demonstrate production volume sufficient for export-sized lots (typically 5+ tons annually), complete training on export procedures and quality standards, and pass quality testing with a minimum SCA score of 85 points.
      </p>

      <p className='my-4'>
        The 495 licensed farmers represent approximately 1,000+ hectares of coffee production. While still a small share of Sidama&apos;s total area, the program is expanding. Buyers interested in farm-traceable Sidama lots should specify this preference when contacting exporters. Working through established exporters like Ethio Coffee Import and Export PLC ensures that documentation, <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline font-bold'>export logistics</Link>, and quality control are handled professionally.
      </p>

      {/* SECTION 7: SOURCING GUIDE */}
      <h2 id='sourcing-guide' className='text-3xl font-extrabold mt-10 mb-4'>
        <HiOutlineGlobeAlt className='inline mr-2 text-amber-600' /> 7. Sourcing Sidama Coffee: A Buyer&apos;s Guide
      </h2>

      <p className='my-4'>
        Sidama offers one of the broadest sourcing menus in Ethiopian coffee. The combination of processing diversity, altitude range, and organizational infrastructure gives buyers multiple entry points depending on their quality tier, volume needs, and traceability requirements.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Sourcing Variable</th>
              <th className='p-3 text-left'>Options</th>
              <th className='p-3 text-left'>Buyer Consideration</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Processing</td>
              <td className='p-3'>Washed or natural</td>
              <td className='p-3'>Washed: clean, bright, floral. Natural: fruity, fuller body. Specify in contract.</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Altitude zone</td>
              <td className='p-3'>Highland, Weina Dega, lower mid-altitude</td>
              <td className='p-3'>Highland for premium SCA scores; Weina Dega for balanced volume.</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Grade</td>
              <td className='p-3'>G1 (0 to 3 defects) or G2 (4 to 12 defects)</td>
              <td className='p-3'>Both are specialty-grade from Sidama. G1 commands higher premiums.</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Traceability</td>
              <td className='p-3'>Regional, cluster, washing station, or single-farm</td>
              <td className='p-3'>Higher traceability = higher premium. Single-farm from licensed exporters.</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Lot size</td>
              <td className='p-3'>50 to 320 bags per lot</td>
              <td className='p-3'>Cluster lots: 50 to 150 bags. Full containers: 250 to 320 bags.</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Availability window</td>
              <td className='p-3'>November through June (new crop)</td>
              <td className='p-3'>Order early harvest (Nov/Dec) by January; main crop by March.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        For a step-by-step walkthrough of how Ethiopian coffee moves from contract to your warehouse, see the <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee export process guide</Link>. Pricing benchmarks and FOB structures are covered in our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee FOB pricing guide</Link>.
      </p>

      <p className='my-4'>
        Ethio Coffee Import and Export PLC sources Sidama washed and natural lots through heritage relationships with cooperatives and washing stations across the region&apos;s key sub-zones. Pre-shipment samples, cupping reports, and full export documentation are standard. Visit our <Link href='/ordering-info' className='text-amber-700 hover:underline font-bold'>ordering information page</Link> for details on sample requests and order process.
      </p>

      {/* FAQ */}
      <section id='faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h2 className='text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2'>
          <HiOutlineQuestionMarkCircle className='text-amber-600' /> Frequently Asked Questions About Sidama Coffee Production
        </h2>
        <div className='space-y-6'>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>What makes Sidama coffee production different from other Ethiopian origins?</h3>
            <p className='text-sm text-gray-600'>
              Sidama averages 10+ quintals per hectare, more than double the national average. This productivity comes from organized farmer clusters, systematic tree pruning programs, organic soil management, and optimal volcanic soils across 1,500 to 2,200 meters of altitude. The region also benefits from a well-defined wet and dry season cycle.
            </p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>How much coffee does the Sidama region produce annually?</h3>
            <p className='text-sm text-gray-600'>
              Sidama targets 239,000 tons for the 2025/26 season from 146,000 productive hectares. The region accounts for roughly 35 to 40% of Ethiopia&apos;s total coffee export volume, making it the country&apos;s largest single producing region by output.
            </p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>What SCA cupping scores do Sidama coffees achieve?</h3>
            <p className='text-sm text-gray-600'>
              Specialty-grade Sidama lots typically score 84 to 88+ on the SCA scale. Competition lots from sub-regions like Bensa, Dale, and Chire have scored above 88. Washed lots tend toward bright floral and citrus profiles; naturals show berry and stone fruit with fuller body.
            </p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>Can importers source single-farm Sidama coffee?</h3>
            <p className='text-sm text-gray-600'>
              Yes. The Sidama Regional Authority has issued 495 direct export licenses to farmers with two or more hectares. These licensed growers can export under their own identity, enabling single-farm traceability. Work with an experienced Ethiopian exporter to access these lots with verified documentation and quality control.
            </p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>When is the best time to order Sidama coffee?</h3>
            <p className='text-sm text-gray-600'>
              New-crop Sidama coffee is available from November through June. Early-harvest lower-altitude lots arrive first (November to December). Highland and Weina Dega lots peak from January through March. Contact exporters by January for the widest selection of specialty lots.
            </p>
          </div>
        </div>
      </section>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3'>
          <HiOutlineShieldCheck className='inline mr-2 text-amber-700' />
          Source Specialty Sidama Coffee Direct from Origin
        </h3>
        <p className='my-2 text-sm'>
          Ethio Coffee Import and Export PLC sources washed and natural Sidama lots through heritage relationships with cooperatives and washing stations across the region. G1 and G2 specialty grades, pre-shipment cupping reports, full traceability documentation, and professional export logistics from our Addis Ababa warehouse. Request samples to evaluate current-season Sidama lots.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>
            View Current Offerings
          </Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            Request Samples
          </Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            How to Order
          </Link>
        </div>
      </div>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-6'>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Origins &amp; Quality</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji Comparison</Link></li>
              <li>• <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Coffee Origins</Link></li>
              <li>• <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Ethiopian Heirloom Coffee Varieties</Link></li>
              <li>• <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup and Evaluate Ethiopian Coffee</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Processing &amp; Production</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/coffee-is-agriculture-production-farming' className='text-amber-700 hover:underline'>Coffee Agriculture, Production &amp; Farming</Link></li>
              <li>• <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee Processing</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Washing Stations Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Sourcing &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process Guide</Link></li>
              <li>• <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Pricing &amp; Logistics</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing Guide</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Harvest Calendar</Link></li>
              <li>• <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC, an Ethiopian-Canadian specialty coffee exporter with 30+ years of sourcing relationships across Ethiopia&apos;s coffee regions. Production data in this article is based on reporting from the Sidama Regional Coffee, Fruit, and Spices Authority. Contact us for current availability and pricing.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> {' · '}
          <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> {' · '}
          <Link href='/about' className='underline'>About Ethio Coffee</Link> {' · '}
          <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

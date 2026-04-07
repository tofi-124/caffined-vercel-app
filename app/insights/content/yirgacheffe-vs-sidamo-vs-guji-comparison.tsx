import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { HiOutlineBeaker, HiOutlineScale, HiOutlineLightBulb, HiOutlineClipboardDocumentList, HiOutlineCurrencyDollar, HiOutlineQuestionMarkCircle, HiOutlineCheckCircle, HiOutlineFire, HiOutlineBriefcase } from 'react-icons/hi2'
import { PiMountains } from 'react-icons/pi'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function YirgacheffeVsSidamoVsGujiComparison({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Flavor profiles, pricing, sub-zones, and sourcing strategy for Ethiopia&apos;s three most sought-after specialty coffee origins
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Yirgacheffe, Sidamo, and Guji account for the majority of Ethiopia&apos;s specialty-grade green coffee exports and represent three distinct cup profiles for roasters and importers.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Yirgacheffe vs Sidamo vs Guji Ethiopian coffee comparison showing green beans from three origins'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Coffee Profiles / Origin Comparison / Sourcing Guide / Importer Resources</span>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />
          Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Yirgacheffe vs Sidamo vs Guji is the most common sourcing comparison in Ethiopian specialty coffee, and each origin fills a distinct role. Yirgacheffe (Gedeo Zone, 1,700 to 2,200 masl) delivers the floral, tea-like benchmark that defines Ethiopian coffee for most consumers. Sidamo (Sidama Regional State, 1,550 to 2,200 masl) produces fruit-forward lots with blueberry and strawberry intensity, offering exceptional blend and filter versatility. Guji (Guji Zone, Oromia, 1,800 to 2,300 masl) commands the highest average SCA scores among the three, with stone-fruit sweetness and syrupy body that excels as single-origin espresso. All three origins are available as Grade 1 washed or natural, with FOB pricing ranging from $7.17/kg (Grade 4 natural) to $9.92/kg (Grade 1 natural). Understanding sub-zone differences, processing impact, and seasonal availability helps buyers choose the right origin for their program.
        </p>
      </div>

      {/* Table of Contents */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#quick-comparison' className='text-amber-700 hover:underline'>1. Quick Comparison: Yirgacheffe, Sidamo, and Guji at a Glance</a></li>
          <li><a href='#yirgacheffe' className='text-amber-700 hover:underline'>2. Yirgacheffe: The Floral Benchmark</a></li>
          <li><a href='#sidamo' className='text-amber-700 hover:underline'>3. Sidamo: Fruit-Forward Versatility</a></li>
          <li><a href='#guji' className='text-amber-700 hover:underline'>4. Guji: The Specialty Espresso Powerhouse</a></li>
          <li><a href='#roast-profile-guide' className='text-amber-700 hover:underline'>5. Roast Profile Guide by Origin</a></li>
          <li><a href='#pricing-availability' className='text-amber-700 hover:underline'>6. Pricing and Availability Comparison</a></li>
          <li><a href='#multi-origin-program' className='text-amber-700 hover:underline'>7. Building a Multi-Origin Ethiopian Program</a></li>
          <li><a href='#faq-origins' className='text-amber-700 hover:underline'>8. FAQ</a></li>
        </ol>
      </div>

      <p className='my-4'>
        Roasters evaluating Ethiopian green coffee face the same question every season: Yirgacheffe vs Sidamo vs Guji. These three origins account for the bulk of Ethiopia&apos;s specialty-grade exports, yet each delivers a fundamentally different cup experience. Choosing the wrong one can mean a mismatch with your roast style, brew method, or customer base.
      </p>
      <p className='my-4'>
        This guide compares all three origins side by side, covering flavor profiles, sub-zone details, processing methods, SCA scoring tendencies, FOB pricing, and practical sourcing strategy. For a broader overview of all Ethiopian coffee regions (including <Link href='/ethiopian-coffee-harar' className='text-amber-700 hover:underline font-bold'>Harar</Link>, <Link href='/ethiopian-coffee-limu' className='text-amber-700 hover:underline font-bold'>Limu</Link>, and <Link href='/ethiopian-coffee-jimma' className='text-amber-700 hover:underline font-bold'>Jimma</Link>), see our <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline font-bold'>complete guide to Ethiopian coffee origins</Link>.
      </p>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 1: QUICK COMPARISON TABLE                              */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 id='quick-comparison' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineScale className='text-amber-600' />
        1. Quick Comparison: Yirgacheffe, Sidamo, and Guji at a Glance
      </h2>
      <p className='my-4'>
        The table below covers the key sourcing factors buyers evaluate when comparing these three Ethiopian origins. Each column reflects data from ECX trade designations, cupping evaluations, and current export availability.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Factor</th>
              <th className='p-3 text-left'>Yirgacheffe</th>
              <th className='p-3 text-left'>Sidamo</th>
              <th className='p-3 text-left'>Guji</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-bold'>Administrative Zone</td>
              <td className='p-3'>Gedeo Zone, SNNPR</td>
              <td className='p-3'>Sidama Regional State</td>
              <td className='p-3'>Guji Zone, Oromia</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-bold'>Altitude Range</td>
              <td className='p-3'>1,700 to 2,200 masl</td>
              <td className='p-3'>1,550 to 2,200 masl</td>
              <td className='p-3'>1,800 to 2,300 masl</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-bold'>ECX Trade Designation</td>
              <td className='p-3'>Yirgacheffe (separate since inception)</td>
              <td className='p-3'>Sidama</td>
              <td className='p-3'>Guji (separate since 2010)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-bold'>Primary Processing</td>
              <td className='p-3'>Washed (naturals available)</td>
              <td className='p-3'>Natural and Washed</td>
              <td className='p-3'>Natural, Washed, and Honey</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-bold'>Available Grades</td>
              <td className='p-3'>G1, G2, G4</td>
              <td className='p-3'>G1, G2, G4</td>
              <td className='p-3'>G1, G2</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-bold'>Typical SCA Score</td>
              <td className='p-3'>84 to 88+</td>
              <td className='p-3'>84 to 88+</td>
              <td className='p-3'>85 to 89+</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-bold'>Key Flavor Notes</td>
              <td className='p-3'>Jasmine, bergamot, lemon, black tea, honey</td>
              <td className='p-3'>Blueberry, strawberry, wine, cocoa, stone fruit</td>
              <td className='p-3'>Peach, apricot, jasmine, tropical fruit, syrupy</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-bold'>Body</td>
              <td className='p-3'>Light, silky, tea-like</td>
              <td className='p-3'>Medium, round</td>
              <td className='p-3'>Medium-full, syrupy</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-bold'>Acidity</td>
              <td className='p-3'>Bright, citric</td>
              <td className='p-3'>Balanced, fruity, wine-like</td>
              <td className='p-3'>Bright, complex, layered</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-bold'>Peak Harvest</td>
              <td className='p-3'>October to January</td>
              <td className='p-3'>October to January</td>
              <td className='p-3'>November to February</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-bold'>Best Brew Application</td>
              <td className='p-3'>Pour-over, light-roast filter</td>
              <td className='p-3'>Filter, espresso blends</td>
              <td className='p-3'>Single-origin espresso, competition lots</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 2: YIRGACHEFFE                                        */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 id='yirgacheffe' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <PiMountains className='text-amber-600' />
        2. Yirgacheffe: The Floral Benchmark
      </h2>
      <p className='my-4'>
        <Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline font-bold'>Yirgacheffe</Link> is the most recognized Ethiopian coffee origin worldwide. Located in the Gedeo Zone of the Southern Nations, Nationalities, and Peoples&apos; Region (SNNPR), it produces the floral, citrus-driven profile that defines &quot;Ethiopian coffee&quot; for most specialty consumers. Washed Yirgacheffe set the benchmark for what clean, terroir-driven African coffee can be.
      </p>

      <h3 className='text-2xl font-bold mt-8'>Flavor Profile and Cup Character</h3>
      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-2'>Yirgacheffe Flavor Profile</h4>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'>Jasmine and bergamot aromatics (highly pronounced in washed lots)</li>
          <li className='my-2'>Lemon and citrus zest acidity with bright, clean finish</li>
          <li className='my-2'>Light honey sweetness, black tea undertones</li>
          <li className='my-2'>Silky, tea-like body; the lightest of the three origins</li>
          <li className='my-2'>Natural lots shift toward blueberry, strawberry jam, and tropical florals with heavier body</li>
        </ul>
      </div>
      <p className='my-4'>
        Washed Yirgacheffe is the classic entry point. The <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline font-bold'>washed process</Link> strips away fruit mucilage before drying, producing a clean, transparent cup where terroir and varietal character dominate. Natural Yirgacheffe delivers a different experience entirely: intense fruit, heavier body, and a wine-like sweetness that appeals to buyers seeking bold single origins.
      </p>

      <h3 className='text-2xl font-bold mt-8'>Key Sub-Zones and Micro-Regions</h3>
      <p className='my-4'>
        Not all Yirgacheffe lots taste the same. The Gedeo Zone contains several distinct woredas (districts) that produce recognizably different profiles:
      </p>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'><span className='font-bold'>Kochere:</span> High altitude (up to 2,200 masl), prized for exceptionally clean florals and bright lemon acidity. Often commands a premium.</li>
        <li className='my-2'><span className='font-bold'>Gelana Abaya:</span> Known for balanced citrus and stone fruit, with slightly fuller body than typical Yirgacheffe.</li>
        <li className='my-2'><span className='font-bold'>Wenago:</span> Floral-forward, delicate profiles. A consistent source for high-scoring washed lots.</li>
        <li className='my-2'><span className='font-bold'>Dilla Zuria:</span> Lower altitude end of the range, producing approachable cups with honey sweetness and mild acidity.</li>
      </ul>

      <h3 className='text-2xl font-bold mt-8'>Processing and Grades Available</h3>
      <p className='my-4'>
        Yirgacheffe is historically defined by its washed coffees, though natural processed Grade 1 lots have gained popularity among roasters seeking fruit intensity. Washed Grade 1 (SCA 85+) represents the top tier. Grade 2 washed (SCA 80 to 84) offers reliable specialty quality at a lower price point. Grade 4 natural provides commercial-grade volume for blends. All grades ship in 60 kg jute bags, FOB Djibouti.
      </p>

      <div className='bg-blue-50 p-5 rounded-lg my-6 border border-blue-200'>
        <h4 className='font-bold text-blue-800 mb-3 flex items-center gap-2'>
          <HiOutlineCheckCircle className='text-blue-600 flex-shrink-0' />
          Buyer Evaluation: Yirgacheffe
        </h4>
        <ul className='text-sm text-blue-900 space-y-2'>
          <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> Best choice for a flagship pour-over or filter program where floral clarity is the priority</li>
          <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> Specify sub-zone (Kochere, Wenago) if your customers value micro-regional traceability</li>
          <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> Request both washed and natural samples; the profiles are fundamentally different</li>
          <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> Light roast only (City to City+); over-development destroys the delicate florals</li>
        </ul>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 3: SIDAMO                                             */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 id='sidamo' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <PiMountains className='text-amber-600' />
        3. Sidamo: Fruit-Forward Versatility
      </h2>
      <p className='my-4'>
        <Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline font-bold'>Sidamo</Link> (officially Sidama since the region gained autonomous administrative status in 2020) is one of Ethiopia&apos;s largest and most diverse coffee-producing zones. It sits in the fertile highlands south of Addis Ababa and produces some of the country&apos;s most fruit-intensive coffees. Geographically, Yirgacheffe falls within the broader Sidama territory, but the ECX trades them as separate designations because their cup profiles are distinct.
      </p>

      <h3 className='text-2xl font-bold mt-8'>Flavor Profile and Cup Character</h3>
      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-2'>Sidamo Flavor Profile</h4>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'>Blueberry and strawberry jam (especially intense in natural lots)</li>
          <li className='my-2'>Wine-like acidity, balanced and less bright than Yirgacheffe</li>
          <li className='my-2'>Cocoa, brown sugar, and dark chocolate finish</li>
          <li className='my-2'>Medium, rounded body; heavier than Yirgacheffe, lighter than Guji</li>
          <li className='my-2'>Washed lots shift toward citrus, jasmine, honey, and stone fruit with cleaner acidity</li>
        </ul>
      </div>
      <p className='my-4'>
        Sidamo&apos;s versatility is its core strength. Natural Sidamo delivers the blueberry bomb that consumers associate with &quot;Ethiopian natural,&quot; while washed Sidamo offers a cleaner, more structured cup that works well in both filter and espresso applications. This range makes Sidamo the most flexible of the three origins for building a diverse menu.
      </p>

      <h3 className='text-2xl font-bold mt-8'>Key Sub-Zones and Micro-Regions</h3>
      <p className='my-4'>
        Sidama covers a large geographic area with significant variation between sub-zones:
      </p>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'><span className='font-bold'>Bensa:</span> High-altitude (1,800 to 2,200 masl) with complex fruit character and bright acidity. One of the most sought-after Sidama sub-zones for specialty-grade lots. The <Link href='/insights/bombe-sidama-coffee-sourcing-guide' className='text-amber-700 hover:underline font-bold'>Bombe micro-region</Link> within Bensa is particularly prized for natural G1 lots scoring 87+.</li>
        <li className='my-2'><span className='font-bold'>Chire:</span> Known for rich berry notes, full body, and wine-like sweetness. Strong competition results in recent years.</li>
        <li className='my-2'><span className='font-bold'>Dale:</span> Consistent production of well-balanced washed lots with citrus and honey character.</li>
        <li className='my-2'><span className='font-bold'>Aleta Wondo:</span> One of the largest coffee-producing woredas; reliable commercial and specialty volume.</li>
      </ul>
      <p className='my-4'>
        For a deeper analysis of Sidama&apos;s production infrastructure and yield data, see our <Link href='/insights/sidama-coffee-production-productivity-export' className='text-amber-700 hover:underline font-bold'>Sidama coffee production and export analysis</Link>.
      </p>

      <h3 className='text-2xl font-bold mt-8'>Processing and Grades Available</h3>
      <p className='my-4'>
        Sidamo offers the widest grade range of the three origins. Grade 1 washed and natural (SCA 85+) serve the specialty market. Grade 2 washed (SCA 80 to 84) provides a reliable, cost-effective single origin for filter-roast programs. Grade 4 natural serves commercial blends requiring Ethiopian complexity at lower cost. Both washed and natural processing are well established across the region, with hundreds of washing stations operating during harvest season.
      </p>

      <div className='bg-blue-50 p-5 rounded-lg my-6 border border-blue-200'>
        <h4 className='font-bold text-blue-800 mb-3 flex items-center gap-2'>
          <HiOutlineCheckCircle className='text-blue-600 flex-shrink-0' />
          Buyer Evaluation: Sidamo
        </h4>
        <ul className='text-sm text-blue-900 space-y-2'>
          <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> Best choice when you need one origin that works across filter, espresso blends, and retail bags</li>
          <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> Natural Sidamo G1 is a crowd-pleaser; the blueberry intensity sells itself to end consumers</li>
          <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> Grade 2 washed offers the best quality-to-cost ratio of any Ethiopian specialty lot</li>
          <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> Natural lots handle slightly more roast development (City to Full City) without losing fruit character</li>
        </ul>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 4: GUJI                                               */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 id='guji' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <PiMountains className='text-amber-600' />
        4. Guji: The Specialty Espresso Powerhouse
      </h2>
      <p className='my-4'>
        <Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline font-bold'>Guji</Link> has moved from relative obscurity to one of the most exciting Ethiopian origins for specialty buyers. Located in the Guji Zone of the Oromia Region, it earned a separate ECX trade designation in 2010, previously being grouped under the broader Sidamo category. Since then, Guji lots have consistently scored among the highest in Ethiopian and international coffee competitions, including the <Link href='/insights/afca-taste-of-harvest-ethiopian-coffee-competition' className='text-amber-700 hover:underline font-bold'>AFCA Taste of Harvest</Link>.
      </p>

      <h3 className='text-2xl font-bold mt-8'>Flavor Profile and Cup Character</h3>
      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-2'>Guji Flavor Profile</h4>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'>Peach, apricot, and mango stone-fruit sweetness</li>
          <li className='my-2'>Jasmine-like floral lift (often more layered than Yirgacheffe florals)</li>
          <li className='my-2'>Medium-full, syrupy body; the heaviest of the three origins</li>
          <li className='my-2'>Bright, complex acidity with tropical-fruit undertones</li>
          <li className='my-2'>Honey-processed lots add caramel and brown-sugar sweetness with balanced acidity</li>
        </ul>
      </div>
      <p className='my-4'>
        Guji&apos;s combination of fruit intensity, body, and sweetness makes it the strongest candidate for single-origin espresso among the three. The higher average altitude (1,800 to 2,300 masl) produces denser beans with more complex sugar development, which translates to richer extraction under espresso pressure. Natural and honey-processed Guji lots, in particular, deliver the sweetness and body that espresso demands without sacrificing acidity. For comprehensive guidance on sourcing Guji directly from origin, see our <Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline font-bold'>buyer&apos;s guide to Guji coffee sourcing</Link>.
      </p>

      <h3 className='text-2xl font-bold mt-8'>Key Sub-Zones and Micro-Regions</h3>
      <p className='my-4'>
        Guji&apos;s micro-regions are increasingly recognized by name on specialty packaging:
      </p>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'><span className='font-bold'>Hambela:</span> The most celebrated Guji sub-zone. High altitude (2,000 to 2,300 masl), exceptional washing station infrastructure, and consistently high SCA scores (87+). Peach, jasmine, and syrupy body.</li>
        <li className='my-2'><span className='font-bold'>Shakiso:</span> Known for intense tropical fruit, bright acidity, and clean finish. Home to several award-winning washing stations.</li>
        <li className='my-2'><span className='font-bold'>Uraga:</span> Produces balanced lots with stone fruit, honey sweetness, and moderate body. A reliable source for specialty washed lots.</li>
        <li className='my-2'><span className='font-bold'>Kercha:</span> Broader in profile, with good body and cocoa notes. Suitable for espresso blends seeking Ethiopian complexity.</li>
      </ul>

      <h3 className='text-2xl font-bold mt-8'>Processing and Grades Available</h3>
      <p className='my-4'>
        Guji produces primarily Grade 1 and Grade 2 lots, reflecting the region&apos;s focus on specialty quality. All three processing methods (washed, natural, and honey) are available, though natural and honey lots are particularly sought-after for their fruit and body characteristics. The region&apos;s investment in modern washing stations and raised-bed drying infrastructure has driven consistent quality improvements over the past decade.
      </p>

      <div className='bg-blue-50 p-5 rounded-lg my-6 border border-blue-200'>
        <h4 className='font-bold text-blue-800 mb-3 flex items-center gap-2'>
          <HiOutlineCheckCircle className='text-blue-600 flex-shrink-0' />
          Buyer Evaluation: Guji
        </h4>
        <ul className='text-sm text-blue-900 space-y-2'>
          <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> Best choice for a standout single-origin espresso or competition-grade offering</li>
          <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> Specify Hambela or Shakiso for the highest-scoring lots; naming sub-zones adds retail value</li>
          <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> Try honey-processed lots if available; they combine natural fruit with washed clarity</li>
          <li className='flex items-start gap-2'><HiOutlineCheckCircle className='text-blue-600 flex-shrink-0 mt-0.5' /> Light-to-medium roast (City to City+); naturals need careful heat to preserve fruit without roasty bitterness</li>
        </ul>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 5: ROAST PROFILE GUIDE                                */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 id='roast-profile-guide' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineFire className='text-amber-600' />
        5. Roast Profile Guide by Origin
      </h2>
      <p className='my-4'>
        Each origin and processing method responds differently to heat. The table below provides starting-point roast recommendations based on how these coffees typically perform on sample roasters and production machines. For a complete breakdown, see our <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='text-amber-700 hover:underline font-bold'>guide to roasting Ethiopian coffee beans</Link>.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Origin</th>
              <th className='p-3 text-left'>Processing</th>
              <th className='p-3 text-left'>Roast Level</th>
              <th className='p-3 text-left'>Development Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>Yirgacheffe</td>
              <td className='p-3'>Washed</td>
              <td className='p-3'>Light (City to City+)</td>
              <td className='p-3'>Preserve florals; drop 15 to 30 seconds after first crack. Minimal post-crack development.</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3'>Yirgacheffe</td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>Light (City+)</td>
              <td className='p-3'>Slightly longer development than washed to balance fruit intensity. Careful heat; aggressive ramp scorches fruit sugars.</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>Sidamo</td>
              <td className='p-3'>Washed</td>
              <td className='p-3'>Light to Medium (City to City+)</td>
              <td className='p-3'>Clean acidity emerges at lighter roasts. Can push slightly darker for espresso blends without losing character.</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3'>Sidamo</td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>Light to Medium (City+ to Full City)</td>
              <td className='p-3'>Most forgiving of the three origins. Berry intensity persists through moderate development. Good for espresso.</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>Guji</td>
              <td className='p-3'>Washed</td>
              <td className='p-3'>Light to Medium (City to City+)</td>
              <td className='p-3'>Stone fruit and florals emerge at lighter levels. Body increases with development; find the balance point for espresso.</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3'>Guji</td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>Light (City to City+)</td>
              <td className='p-3'>Dense beans absorb heat slowly. Low charge temp, gentle ramp. Too much heat creates roasty bitterness over stone fruit.</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>Guji</td>
              <td className='p-3'>Honey</td>
              <td className='p-3'>Light to Medium (City+)</td>
              <td className='p-3'>Caramel sweetness develops with moderate roast. Balances fruit and body well for espresso applications.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 6: PRICING AND AVAILABILITY                           */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 id='pricing-availability' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineCurrencyDollar className='text-amber-600' />
        6. Pricing and Availability Comparison
      </h2>
      <p className='my-4'>
        FOB pricing varies by grade, processing method, and availability. The table below reflects current 2025/26 crop pricing from our export warehouse. For a broader analysis of Ethiopian coffee pricing dynamics, see our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee FOB pricing guide</Link>.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Origin</th>
              <th className='p-3 text-left'>Grade</th>
              <th className='p-3 text-left'>Processing</th>
              <th className='p-3 text-left'>SCA Score</th>
              <th className='p-3 text-left'>FOB Price/kg</th>
              <th className='p-3 text-left'>Availability</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>Yirgacheffe</td>
              <td className='p-3'>G1</td>
              <td className='p-3'>Washed</td>
              <td className='p-3'>85+</td>
              <td className='p-3'>$9.48</td>
              <td className='p-3'>38.4 MT</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3'>Yirgacheffe</td>
              <td className='p-3'>G1</td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>85+</td>
              <td className='p-3'>$9.92</td>
              <td className='p-3'>38.4 MT</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>Yirgacheffe</td>
              <td className='p-3'>G4</td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>Commercial</td>
              <td className='p-3'>$7.17</td>
              <td className='p-3'>192 MT</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3'>Sidama</td>
              <td className='p-3'>G1</td>
              <td className='p-3'>Washed</td>
              <td className='p-3'>85+</td>
              <td className='p-3'>$9.48</td>
              <td className='p-3'>38.4 MT</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>Sidama</td>
              <td className='p-3'>G1</td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>85+</td>
              <td className='p-3'>$9.92</td>
              <td className='p-3'>38.4 MT</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3'>Sidama</td>
              <td className='p-3'>G2</td>
              <td className='p-3'>Washed</td>
              <td className='p-3'>80 to 84</td>
              <td className='p-3'>$9.04</td>
              <td className='p-3'>38.4 MT</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3'>Sidama</td>
              <td className='p-3'>G4</td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>Commercial</td>
              <td className='p-3'>$7.17</td>
              <td className='p-3'>192 MT</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        At the Grade 1 level, Yirgacheffe and Sidama price identically ($9.48/kg washed, $9.92/kg natural). Natural lots carry a small premium over washed due to higher demand and the additional drying risk borne by the producer. Sidama Grade 2 washed at $9.04/kg represents the best value entry into Ethiopian specialty. Grade 4 naturals from both origins at $7.17/kg serve commercial and blend applications.
      </p>
      <p className='my-4'>
        For seasonal timing and harvest windows, see our <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee harvest calendar for buyers</Link>. For complete details on order minimums, see our <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline font-bold'>MOQ guide for Ethiopian coffee</Link>.
      </p>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 7: MULTI-ORIGIN PROGRAM                               */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <h2 id='multi-origin-program' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineBriefcase className='text-amber-600' />
        7. Building a Multi-Origin Ethiopian Program
      </h2>

      <h3 className='text-2xl font-bold mt-8'>Which Origin Should You Choose?</h3>
      <p className='my-4'>
        The right origin depends on your menu, roast style, and customer base. Use this decision framework:
      </p>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'><span className='font-bold'>Flagship pour-over or filter program:</span> Washed Yirgacheffe. The floral clarity defines Ethiopian coffee for most consumers.</li>
        <li className='my-2'><span className='font-bold'>Fruit-forward single origin that sells as retail bags:</span> Natural Sidamo. Blueberry intensity markets itself.</li>
        <li className='my-2'><span className='font-bold'>Single-origin espresso that stands alone:</span> Guji (washed or natural). Body and sweetness hold up under pressure.</li>
        <li className='my-2'><span className='font-bold'>Espresso blend component with Ethiopian complexity:</span> Sidamo washed or natural. Adds fruit depth without overpowering other origins.</li>
        <li className='my-2'><span className='font-bold'>Competition lots or highest-scoring micro-lots:</span> Guji (Hambela or Shakiso). Consistently top-scoring in national and international cuppings.</li>
      </ul>

      <h3 className='text-2xl font-bold mt-8'>Stocking All Three: A Practical Approach</h3>
      <p className='my-4'>
        Many roasteries carry two or three Ethiopian origins to differentiate their menu. A proven lineup:
      </p>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'><span className='font-bold'>Core offering:</span> Washed Yirgacheffe (accessible, recognizable, year-round demand)</li>
        <li className='my-2'><span className='font-bold'>Seasonal rotation:</span> Natural Sidamo (fruit-forward, drives repeat purchases)</li>
        <li className='my-2'><span className='font-bold'>Premium tier:</span> Guji natural or honey (single-origin espresso, competition showcase)</li>
      </ul>
      <p className='my-4'>
        This structure covers three distinct cup profiles and three price tiers, giving your customers a clear reason to explore. Buyers interested in <Link href='/insights/micro-lot-ethiopian-coffee-sourcing-guide' className='text-amber-700 hover:underline font-bold'>micro-lot sourcing</Link> from any of these origins can request small evaluation samples (300g per origin) before committing to volume.
      </p>

      <h3 className='text-2xl font-bold mt-8'>Sample Evaluation Workflow</h3>
      <p className='my-4'>
        Before committing to a season&apos;s supply, follow this process:
      </p>
      <ol className='font-inconsolata my-4 list-decimal ml-5'>
        <li className='my-2'>Request 300g samples from each origin and processing method you are considering ($20 per sample, shipped via DHL)</li>
        <li className='my-2'>Roast samples at your target profile and <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline font-bold'>cup them systematically</Link> using SCA protocol</li>
        <li className='my-2'>Score and rank by flavor match to your menu, brew method performance, and customer appeal</li>
        <li className='my-2'>Place production orders (minimum 1 MT per lot) for the chosen origins</li>
      </ol>
      <p className='my-4'>
        This approach minimizes risk and ensures the coffees you commit to actually perform in your specific roast and brew environment. For the full step-by-step, see our <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline font-bold'>sourcing green coffee from Ethiopia guide</Link>.
      </p>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SECTION 8: FAQ                                                */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id='faq-origins' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200 mt-10'>
        <h2 className='text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2'>
          <HiOutlineQuestionMarkCircle className='text-amber-600' />
          Frequently Asked Questions
        </h2>
        <div className='space-y-6'>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>What is the difference between Yirgacheffe, Sidamo, and Guji coffee?</h3>
            <p className='text-sm text-gray-600'>Yirgacheffe produces floral, tea-like cups with bright citrus acidity, best for pour-over. Sidamo delivers intense fruit character (blueberry, strawberry) with a rounder body, suited for both filter and espresso. Guji offers stone-fruit sweetness, jasmine florals, and a syrupy body that excels as single-origin espresso. Each has its own ECX trade designation and distinct growing conditions.</p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>Which Ethiopian coffee origin is best for espresso?</h3>
            <p className='text-sm text-gray-600'>Guji is the strongest choice for single-origin espresso. Its medium-full body, stone-fruit sweetness, and layered acidity hold up under espresso extraction pressure. Natural and honey-processed Guji lots are particularly effective. Sidamo naturals also perform well in espresso blends, adding fruit complexity. Yirgacheffe works for lighter espresso profiles emphasizing florals.</p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>How do Yirgacheffe, Sidamo, and Guji compare in price?</h3>
            <p className='text-sm text-gray-600'>At Grade 1 level, Yirgacheffe and Sidama are priced identically: $9.48/kg washed, $9.92/kg natural (FOB Djibouti, 2025/26 crop). Sidama Grade 2 washed at $9.04/kg offers the best value entry into Ethiopian specialty. Grade 4 naturals from both regions cost $7.17/kg for commercial blends. Guji pricing depends on sub-zone and lot quality.</p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>Is Yirgacheffe technically part of Sidamo?</h3>
            <p className='text-sm text-gray-600'>Geographically, Yirgacheffe (Gedeo Zone) sits within the broader Sidama territory. However, the ECX has traded Yirgacheffe as a separate designation since inception because its cup profile is distinctly different. Yirgacheffe coffees emphasize floral delicacy and tea-like body, while broader Sidamo lots lean toward berry fruit intensity and rounder body.</p>
          </div>
          <div>
            <h3 className='font-bold text-gray-800 mb-2'>What grades are available from each origin?</h3>
            <p className='text-sm text-gray-600'>Yirgacheffe and Sidama both offer Grade 1 (washed and natural), Grade 2 (washed), and Grade 4 (natural). Guji focuses on Grade 1 and Grade 2, reflecting its specialty orientation. Grade 1 scores SCA 85+, Grade 2 scores 80 to 84, and Grade 4 serves commercial applications. All grades ship in 60 kg jute bags, FOB Djibouti.</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CTA BLOCK                                                     */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className='bg-gradient-to-br from-amber-900 to-amber-800 text-white p-8 rounded-xl my-10'>
        <h3 className='text-2xl font-bold mb-3'>Source Yirgacheffe, Sidamo, and Guji Direct from Origin</h3>
        <p className='my-2 text-amber-100'>
          <span className='font-bold text-white'>Ethio Coffee Import and Export PLC</span> exports Grade 1 through Grade 4 from all three origins with full traceability to sub-zone and washing station. Request 300g evaluation samples to compare profiles before committing to volume.
        </p>
        <div className='flex flex-wrap gap-4 mt-6'>
          <Link href='/offerings' className='bg-white text-amber-900 px-6 py-3 rounded font-bold hover:bg-amber-50 transition'>
            View Our Offerings
          </Link>
          <Link href='/contact-us' className='border-2 border-white text-white px-6 py-3 rounded font-bold hover:bg-amber-700 transition'>
            Request Samples
          </Link>
          <Link href='/ordering-info' className='border-2 border-white text-white px-6 py-3 rounded font-bold hover:bg-amber-700 transition'>
            How to Order
          </Link>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* RELATED ARTICLES                                              */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-6'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origins and Profiles</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/yirgacheffe-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Yirgacheffe Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Guji Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/jimma-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Jimma Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Green Coffee Origins</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Ethiopian Heirloom Coffee Varieties and Landraces</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-vs-colombian-coffee' className='text-amber-700 hover:underline'>Ethiopian vs Colombian Coffee: A Buyer&apos;s Comparison</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-vs-kenyan-coffee' className='text-amber-700 hover:underline'>Ethiopian vs Kenyan Coffee: A Buyer&apos;s Comparison</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Processing and Quality</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee Processing</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality: Defects and Grading</Link></li>
              <li>&bull; <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup and Evaluate Ethiopian Coffee Samples</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing and Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/micro-lot-ethiopian-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Micro-Lot Ethiopian Coffee Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Harvest Calendar for Buyers</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-espresso-blend-sourcing-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee for Espresso Blends</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Pricing and Logistics</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost: Import Cost Guide</Link></li>
              <li>&bull; <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Ethiopian Coffee MOQ Guide for Importers</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC. This comparison of Yirgacheffe, Sidamo, and Guji covers flavor profiles, sub-zones, processing methods, pricing, roast recommendations, and sourcing strategy for importers and roasters. Pricing and availability reflect the 2025/26 crop season; contact us for current information.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot; <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> &middot; <Link href='/about' className='underline'>About Ethio Coffee</Link> &middot; <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

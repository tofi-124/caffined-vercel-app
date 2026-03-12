import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineSparkles,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiOutlineDocumentText,
  HiOutlineLightBulb,
  HiOutlineBeaker,
  HiOutlineScale,
  HiOutlineGlobeAlt,
  HiOutlineClipboardDocumentList,
  HiOutlineAcademicCap
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function NewSCACoffeeValueAssessment({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        How the SCA Coffee Value Assessment (CVA) replaces the 100-point cupping score and what it means for green coffee buyers, roasters, and Ethiopian exporters
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          The Coffee Value Assessment provides a multi-dimensional quality profile that goes far beyond a single cupping score.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='SCA Coffee Value Assessment cupping session with green coffee evaluation forms and specialty coffee samples'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Coffee Quality &amp; Grading / Industry Standards / Green Coffee Buying</span>
      </div>

      <p className='my-4'>
        The SCA Coffee Value Assessment (CVA) is the most significant change to specialty coffee quality evaluation in over two decades. For green coffee buyers who have built sourcing decisions around the 100-point cupping score, the shift is substantial: the CVA replaces a single number with a multi-dimensional quality profile that captures what a coffee tastes like, how desirable those attributes are, and what non-sensory factors contribute to its value.
      </p>

      <p className='my-4'>
        Officially launched in phases since 2023, and with updated forms released in seven languages in October 2025, the CVA is now the SCA&#39;s primary framework for specialty coffee quality assessment. This guide breaks down each component, explains how the CVA affects green coffee contracts and Ethiopian export grading, and covers what importers and roasters need to do to adopt it.
      </p>

      {/* KEY TAKEAWAY BOX - near top for featured snippet */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <h3 className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineSparkles className='text-2xl flex-shrink-0' />
          Key Takeaway
        </h3>
        <ul className='space-y-2 ml-1'>
          <li className='flex gap-2 items-start'>
            <HiOutlineCheckCircle className='text-green-600 text-lg flex-shrink-0 mt-0.5' />
            <span>The CVA replaces the legacy 100-point SCA cupping score with four integrated assessments: Sample Preparation (CVA 102), Descriptive (CVA 103), Affective (CVA 104), and Extrinsic (CVA 105).</span>
          </li>
          <li className='flex gap-2 items-start'>
            <HiOutlineCheckCircle className='text-green-600 text-lg flex-shrink-0 mt-0.5' />
            <span>Descriptive assessment tells you <em>what</em> the coffee tastes like; affective assessment tells you <em>how much</em> you value those attributes. This separation gives buyers more precise sourcing tools.</span>
          </li>
          <li className='flex gap-2 items-start'>
            <HiOutlineCheckCircle className='text-green-600 text-lg flex-shrink-0 mt-0.5' />
            <span>Ethiopian coffees benefit significantly: the CVA captures the complex floral, citrus, and fruit-forward profiles that a single number cannot convey.</span>
          </li>
          <li className='flex gap-2 items-start'>
            <HiOutlineCheckCircle className='text-green-600 text-lg flex-shrink-0 mt-0.5' />
            <span>As of March 2026, the CVA is in active use globally. Many buyers use it alongside traditional scores during the transition.</span>
          </li>
        </ul>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* WHAT IS THE CVA                             */}
      {/* ═══════════════════════════════════════════ */}

      <h3 className='text-2xl font-extrabold mt-8'>
        <HiOutlineDocumentText className='inline mr-2' />
        What Is the SCA Coffee Value Assessment?
      </h3>
      <p className='my-4'>
        The Coffee Value Assessment is the Specialty Coffee Association&#39;s replacement for the traditional 100-point cupping form. Developed through collaboration with scientists, researchers, and coffee professionals worldwide, the CVA produces a detailed, multi-dimensional quality profile rather than a single aggregate score.
      </p>
      <p className='my-4'>
        The SCA Cupping Form, introduced in the early 2000s, standardized quality assessment across the industry. Over two decades, however, its limitations became clear. A score of 87.5 tells you a coffee is "very good," but it does not tell you <em>why</em>, what specific flavors define it, or whether it suits your roasting style and market. Reducing ten sensory attributes to one number obscures the qualities that make individual coffees distinctive.
      </p>
      <p className='my-4'>
        The CVA addresses these gaps by separating assessment into four complementary components. Each can be used independently or together, giving the trade flexible, high-resolution quality data. The SCA released revised protocols in June 2024 after extensive input from its Early Adopter program, and published updated CVA forms in October 2025 in English, Spanish, Portuguese, French, Korean, Traditional Chinese, and Simplified Chinese.
      </p>

      {/* ═══════════════════════════════════════════ */}
      {/* THE FOUR PILLARS                            */}
      {/* ═══════════════════════════════════════════ */}

      <h3 className='text-2xl font-extrabold mt-8'>
        <HiOutlineChartBar className='inline mr-2' />
        The Four Pillars of the SCA Coffee Value Assessment
      </h3>
      <p className='my-4'>
        The CVA system is built on four distinct yet interconnected assessment types. Each serves a specific purpose in the evaluation workflow:
      </p>

      <div className='my-8 space-y-6'>
        {/* Pillar 1 */}
        <div className='border border-gray-200 rounded-lg p-6'>
          <div className='flex items-center gap-3 mb-3'>
            <span className='bg-amber-500 text-white font-bold text-lg px-3 py-1 rounded'>1</span>
            <h4 className='text-xl font-bold'>Sample Preparation Protocol (CVA 102)</h4>
          </div>
          <p className='mb-3'>
            <span className='font-bold'>Purpose:</span> Standardize how coffee samples are prepared for evaluation, ensuring consistency and repeatability.
          </p>
          <p className='text-sm bg-gray-50 p-4 rounded border border-gray-200'>
            CVA 102 establishes exact parameters for roasting, grinding, water temperature, brew ratio, and timing. When everyone prepares samples the same way, results become comparable across labs, roasteries, and countries. This protocol is the foundation that makes all other CVA assessments reliable. For a hands-on walkthrough of sample preparation, see our <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='underline font-bold'>guide to cupping Ethiopian coffee samples</Link>.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className='border border-gray-200 rounded-lg p-6'>
          <div className='flex items-center gap-3 mb-3'>
            <span className='bg-amber-500 text-white font-bold text-lg px-3 py-1 rounded'>2</span>
            <h4 className='text-xl font-bold'>Descriptive Assessment (CVA 103)</h4>
          </div>
          <p className='mb-3'>
            <span className='font-bold'>Purpose:</span> Objectively describe what sensory characteristics are present in the coffee, without judgment of quality.
          </p>
          <p className='text-sm bg-gray-50 p-4 rounded border border-gray-200 mb-3'>
            Trained tasters identify and quantify specific flavors, aromas, textures, and aftertastes using the <span className='font-bold'>World Coffee Research Sensory Lexicon</span>, a scientifically validated vocabulary of 110+ attributes. Instead of writing "good citrus," evaluators record the type (lemon, bergamot, grapefruit) and intensity on a calibrated scale. The Check-All-That-Apply (CATA) method and intensity scaling produce a detailed flavor map. For the compound science behind these sensory attributes, see our <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='underline font-bold'>Coffee Science: Analysis &amp; Evaluation</Link> guide.
          </p>
          <div className='text-sm bg-blue-50 p-4 rounded border border-blue-200'>
            <p className='font-bold mb-1'>Ethiopian Origin Example:</p>
            <p>A washed <Link href='/ethiopian-coffee-yirgacheffe' className='underline font-bold'>Yirgacheffe</Link> lot might produce a descriptive profile reading: "jasmine (high intensity), bergamot (medium), lemon acidity (high), light body, silky mouthfeel, lingering floral aftertaste." Under the traditional system, this coffee and a chocolatey Brazilian natural might both score 88, despite offering fundamentally different cup experiences.</p>
          </div>
        </div>

        {/* Pillar 3 */}
        <div className='border border-gray-200 rounded-lg p-6'>
          <div className='flex items-center gap-3 mb-3'>
            <span className='bg-amber-500 text-white font-bold text-lg px-3 py-1 rounded'>3</span>
            <h4 className='text-xl font-bold'>Affective Assessment (CVA 104)</h4>
          </div>
          <p className='mb-3'>
            <span className='font-bold'>Purpose:</span> Evaluate how much you <em>like</em> or <em>value</em> specific sensory attributes for your intended use.
          </p>
          <p className='text-sm bg-gray-50 p-4 rounded border border-gray-200 mb-3'>
            After describing what is in the cup, affective assessment asks: "Do I find this acidity pleasant? Is this body desirable for my blend? Does this flavor profile match what my customers expect?" The <Link href='https://sca.coffee/cuppingscore' className='text-blue-600 underline' target='_blank' rel='noopener noreferrer'>SCA Affective Score Calculator</Link> converts these ratings into a familiar numeric reference for buyers who still need a shorthand during the transition.
          </p>
          <div className='text-sm bg-blue-50 p-4 rounded border border-blue-200'>
            <p className='font-bold mb-1'>Context-Dependent Scoring:</p>
            <p>A Nordic roaster might prize the bright, tea-like acidity of a <Link href='/ethiopian-coffee-guji' className='underline font-bold'>Guji</Link> natural at 2100 masl. An Italian espresso blender might find the same acidity too sharp for their market. The CVA records both perspectives as valid. The descriptive profile stays objective; the affective scores reflect each buyer&#39;s context.</p>
          </div>
        </div>

        {/* Pillar 4 */}
        <div className='border border-gray-200 rounded-lg p-6'>
          <div className='flex items-center gap-3 mb-3'>
            <span className='bg-amber-500 text-white font-bold text-lg px-3 py-1 rounded'>4</span>
            <h4 className='text-xl font-bold'>Extrinsic Assessment (CVA 105)</h4>
          </div>
          <p className='mb-3'>
            <span className='font-bold'>Purpose:</span> Document non-sensory factors that influence a coffee&#39;s value: origin story, sustainability, traceability, and certifications.
          </p>
          <p className='text-sm bg-gray-50 p-4 rounded border border-gray-200 mb-3'>
            This component recognizes that coffee value extends beyond the cup. It captures information about sourcing relationships, processing innovations, <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='underline font-bold'>certifications (organic, Fairtrade, Rainforest Alliance)</Link>, carbon footprint, and social impact. Originally released in beta in 2024, CVA 105 was formalized as a numbered standard in the October 2025 forms update.
          </p>
          <div className='text-sm'>
            <p className='font-bold mb-1'>Examples of Extrinsic Value:</p>
            <ul className='list-disc ml-5 space-y-1 mt-2'>
              <li>Direct trade relationship with transparent pricing</li>
              <li>Heritage sourcing partnerships with cooperatives spanning decades</li>
              <li>Experimental processing (anaerobic, carbonic maceration) at a known washing station</li>
              <li>Women-led cooperative with documented social impact</li>
              <li>Rare heirloom variety preservation in its region of origin</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* CVA vs. TRADITIONAL CUPPING                 */}
      {/* ═══════════════════════════════════════════ */}

      <h3 className='text-2xl font-extrabold mt-8'>
        <HiOutlineScale className='inline mr-2' />
        CVA vs. Traditional Cupping Score: Side-by-Side Comparison
      </h3>
      <p className='my-4'>
        The SCA is transitioning from the legacy 100-point system to the CVA framework. During this transition period, many professionals use both. Here is how they compare:
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse border border-gray-300'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border border-gray-300 p-3 text-left'>Aspect</th>
              <th className='border border-gray-300 p-3 text-left'>Traditional Cupping (100-pt)</th>
              <th className='border border-gray-300 p-3 text-left'>Coffee Value Assessment (CVA)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Primary Output</td>
              <td className='border border-gray-300 p-3'>Single aggregate score</td>
              <td className='border border-gray-300 p-3'>Multi-dimensional quality profile</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Best Use Case</td>
              <td className='border border-gray-300 p-3'>Quick quality screening, pass/fail decisions</td>
              <td className='border border-gray-300 p-3'>Detailed lot differentiation, storytelling, premium sourcing</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Time Required</td>
              <td className='border border-gray-300 p-3'>15-20 minutes per session</td>
              <td className='border border-gray-300 p-3'>30-60 minutes for a complete assessment</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Training Level</td>
              <td className='border border-gray-300 p-3'>Q Grader certification</td>
              <td className='border border-gray-300 p-3'>CVA for Cuppers course (SCA education platform)</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Flavor Language</td>
              <td className='border border-gray-300 p-3'>Free-form tasting notes</td>
              <td className='border border-gray-300 p-3'>WCR Sensory Lexicon (110+ standardized descriptors)</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Non-Sensory Factors</td>
              <td className='border border-gray-300 p-3'>Not included</td>
              <td className='border border-gray-300 p-3'>Extrinsic assessment (CVA 105) for sustainability, origin story</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Industry Status</td>
              <td className='border border-gray-300 p-3'>Legacy standard (early 2000s)</td>
              <td className='border border-gray-300 p-3'>SCA&#39;s current primary framework (forms updated Oct 2025)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Many coffee professionals are adopting a <span className='font-bold'>hybrid approach</span>: using traditional cupping for initial screening and lot selection, then applying CVA for premium lots that require detailed documentation. The SCA Affective Score Calculator bridges the gap by generating a familiar numeric score from CVA affective data.
      </p>

      {/* ═══════════════════════════════════════════ */}
      {/* ETHIOPIAN COFFEE SECTION                    */}
      {/* ═══════════════════════════════════════════ */}

      <h3 className='text-2xl font-extrabold mt-8'>
        <HiOutlineGlobeAlt className='inline mr-2' />
        What the CVA Means for Ethiopian Coffee
      </h3>
      <p className='my-4'>
        Ethiopia produces some of the world&#39;s most flavor-diverse coffees, from the jasmine and bergamot notes of <Link href='/ethiopian-coffee-yirgacheffe' className='underline font-bold'>Yirgacheffe</Link> to the blueberry-forward naturals of <Link href='/ethiopian-coffee-guji' className='underline font-bold'>Guji</Link> and the wine-like complexity of <Link href='/ethiopian-coffee-harar' className='underline font-bold'>Harar</Link>. International competitions like the <Link href='/insights/afca-taste-of-harvest-ethiopian-coffee-competition' className='text-amber-700 hover:underline'>AFCA Taste of Harvest</Link> celebrate these distinctive profiles, and the CVA system is particularly well-suited to capturing this diversity.
      </p>

      <div className='my-6'>
        <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineCheckCircle className='text-green-600 text-xl' />
          Opportunities for Ethiopian Exporters
        </h4>
        <ul className='space-y-3 ml-5'>
          <li>
            <span className='font-bold'>Richer flavor storytelling:</span> A descriptive CVA profile for a washed Yirgacheffe might list jasmine (high), bergamot (medium), lemon acidity (high), light body, and silky mouthfeel. This detailed map tells buyers exactly what to expect, far beyond "SCA 89." Our <Link href='/insights/guide-ethiopian-coffee-origins' className='underline font-bold'>guide to Ethiopian coffee origins</Link> covers the distinct flavor profiles of each growing region.
          </li>
          <li>
            <span className='font-bold'>Premium justification through extrinsic data:</span> When buyers see the complete value picture (exceptional cup quality plus heritage sourcing relationships plus rare <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='underline font-bold'>heirloom variety</Link> preservation), they are more likely to pay premium prices.
          </li>
          <li>
            <span className='font-bold'>Experimental processing recognition:</span> Ethiopia&#39;s growing innovation in processing (<Link href='/insights/anaerobic-ethiopian-coffee-processing-buyers-guide' className='underline font-bold'>anaerobic fermentation</Link>, carbonic maceration, extended fermentation) produces complex flavor profiles that the CVA&#39;s descriptive system captures better than a traditional cupping form.
          </li>
          <li>
            <span className='font-bold'>Differentiation beyond the score:</span> Instead of competing solely on 86 vs. 87 points, exporters can differentiate lots by their unique descriptive profiles, processing stories, and origin narratives.
          </li>
        </ul>
      </div>

      <div className='my-6'>
        <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineScale className='text-amber-600 text-xl' />
          Practical Considerations
        </h4>
        <ul className='space-y-3 ml-5'>
          <li>
            <span className='font-bold'>ECX compatibility:</span> The Ethiopia Commodity Exchange still uses the traditional <Link href='/coffee-grading-ethiopia' className='underline font-bold'>Ethiopian grading system (G1 through G5)</Link> based on defect counts and cupping. Exporters need to operate within both frameworks. For direct-trade and specialty lots bypassing ECX, the CVA can be the primary evaluation tool.
          </li>
          <li>
            <span className='font-bold'>Training requirements:</span> The CVA requires specialized training through the SCA&#39;s "CVA for Cuppers" program. Access to authorized trainers in East Africa is expanding, but availability remains limited compared to Q Grader courses.
          </li>
          <li>
            <span className='font-bold'>Documentation investment:</span> To capitalize on the extrinsic assessment, exporters need systems to track and verify sustainability data, traceability records, and impact metrics. Companies with existing <Link href='/insights/ethiopian-coffee-traceability-guide' className='underline font-bold'>traceability infrastructure</Link> are best positioned.
          </li>
        </ul>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* HOW CVA CHANGES GREEN COFFEE BUYING         */}
      {/* ═══════════════════════════════════════════ */}

      <h3 className='text-2xl font-extrabold mt-8'>
        <HiOutlineLightBulb className='inline mr-2' />
        How the CVA Changes Green Coffee Buying
      </h3>

      <h4 className='text-xl font-bold mt-6 mb-3'>For Importers and Roasters</h4>
      <p className='my-4'>
        If you source specialty green coffee, here is what changes under the CVA framework:
      </p>
      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>More targeted lot selection:</span> Detailed descriptive profiles let you predict how a coffee will perform as espresso, filter, or cold brew before purchasing a full container.</li>
        <li><span className='font-bold'>Shared sensory language:</span> When you can describe exactly what flavor attributes you seek using the Sensory Lexicon (e.g., "high-intensity citric acidity, medium body, stone fruit"), suppliers can match you with the right lots faster.</li>
        <li><span className='font-bold'>Verified value claims:</span> The extrinsic assessment provides structured documentation of sustainability practices, certifications, and sourcing relationships, reducing the risk of unsubstantiated marketing claims.</li>
        <li><span className='font-bold'>Consistent benchmarking:</span> Standardized sample preparation (CVA 102) means the evaluation you receive from your supplier should be repeatable when the shipment arrives at your warehouse.</li>
      </ul>

      <h4 className='text-xl font-bold mt-6 mb-3'>
        <HiOutlineClipboardDocumentList className='inline mr-2' />
        What Changes in Your Next Green Coffee Contract
      </h4>
      <p className='my-4'>
        The practical shift for buyers unfolds in these steps:
      </p>

      <div className='my-6 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <ol className='space-y-3'>
          <li className='flex gap-3'>
            <span className='font-bold text-amber-600 flex-shrink-0'>1.</span>
            <span><span className='font-bold'>Request CVA data alongside traditional grades.</span> Ask your supplier for a descriptive assessment profile in addition to the cupping score and <Link href='/coffee-grading-ethiopia' className='underline font-bold'>Ethiopian grade classification</Link>. Many exporters already provide both during the transition.</span>
          </li>
          <li className='flex gap-3'>
            <span className='font-bold text-amber-600 flex-shrink-0'>2.</span>
            <span><span className='font-bold'>Learn to read a CVA profile.</span> Focus on the descriptive map first: identify the dominant flavor attributes, their intensities, and the acidity/body balance. Compare this against your target profile for the intended product.</span>
          </li>
          <li className='flex gap-3'>
            <span className='font-bold text-amber-600 flex-shrink-0'>3.</span>
            <span><span className='font-bold'>Use affective scores for go/no-go decisions.</span> The affective assessment tells you whether your team finds the coffee desirable for its intended use. If you need a numeric shorthand, use the SCA Affective Score Calculator.</span>
          </li>
          <li className='flex gap-3'>
            <span className='font-bold text-amber-600 flex-shrink-0'>4.</span>
            <span><span className='font-bold'>Review extrinsic data for due diligence.</span> Check certification status, traceability depth, and producer-relationship documentation. This is especially relevant for buyers subject to the <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='underline font-bold'>EU Deforestation Regulation (EUDR)</Link>.</span>
          </li>
          <li className='flex gap-3'>
            <span className='font-bold text-amber-600 flex-shrink-0'>5.</span>
            <span><span className='font-bold'>Align internal QC.</span> Update your in-house cupping protocols to include CVA elements gradually. Start with descriptive assessment (CVA 103), then add affective and extrinsic components as your team builds familiarity.</span>
          </li>
        </ol>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* TIMELINE                                    */}
      {/* ═══════════════════════════════════════════ */}

      <h3 className='text-2xl font-extrabold mt-8'>
        CVA Adoption Timeline and Current Status
      </h3>
      <p className='my-4'>
        The Coffee Value Assessment has been in development since the early 2020s, with a phased rollout:
      </p>

      <div className='my-6 space-y-2'>
        <div className='flex gap-3 items-start'>
          <span className='font-bold text-amber-600 flex-shrink-0'>2021-2022:</span>
          <span>Initial research and framework development; Evolution Report published</span>
        </div>
        <div className='flex gap-3 items-start'>
          <span className='font-bold text-amber-600 flex-shrink-0'>Apr 2023:</span>
          <span>"A New System to Assess Coffee Value" white paper released; Early Adopter program launched with 800+ participating businesses</span>
        </div>
        <div className='flex gap-3 items-start'>
          <span className='font-bold text-amber-600 flex-shrink-0'>Jun 2024:</span>
          <span>Revised protocols published after Early Adopter feedback; CVA 102, 103, and 104 submitted for official adoption; Extrinsic Assessment beta released</span>
        </div>
        <div className='flex gap-3 items-start'>
          <span className='font-bold text-amber-600 flex-shrink-0'>Oct 2025:</span>
          <span>Updated CVA forms released in seven languages; CVA 105 (Extrinsic Assessment) formalized; digital evaluation platforms expanded</span>
        </div>
        <div className='flex gap-3 items-start'>
          <span className='font-bold text-amber-600 flex-shrink-0'>2025-2026:</span>
          <span>Global education programs expanding; SCA CVA Patrons Program launched; growing industry adoption across the supply chain</span>
        </div>
      </div>

      <p className='my-4'>
        As of March 2026, the CVA is in active use globally and has been the SCA&#39;s primary quality assessment framework since the June 2024 protocol revision. The system continues to be refined based on real-world feedback from roasters, importers, producers, and Q Graders. Two digital platforms now support CVA evaluations, making it easier for companies to record, share, and compare assessments across the supply chain.
      </p>

      {/* ═══════════════════════════════════════════ */}
      {/* HOW TO GET STARTED                          */}
      {/* ═══════════════════════════════════════════ */}

      <h3 className='text-2xl font-extrabold mt-8'>
        <HiOutlineAcademicCap className='inline mr-2' />
        How to Get Started with CVA
      </h3>
      <p className='my-4'>
        For exporters, importers, roasters, and quality professionals, here is how to engage with the Coffee Value Assessment:
      </p>

      <div className='my-6 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h4 className='font-bold text-lg mb-4'>Steps to CVA Adoption:</h4>
        <ol className='space-y-3 list-decimal ml-5'>
          <li>
            <span className='font-bold'>Take the CVA for Cuppers course:</span> Offered through <Link href='/insights/best-cupping-school' className='underline font-bold'>SCA Authorized Trainers worldwide</Link>, this two-day program provides hands-on training with all four assessment components and calibration exercises.
          </li>
          <li>
            <span className='font-bold'>Download official resources:</span> Access protocols, forms, glossaries, and olfactory references from <Link href='https://sca.coffee/value-assessment' className='text-blue-600 underline' target='_blank' rel='noopener noreferrer'>sca.coffee/value-assessment</Link>. Forms are available in seven languages.
          </li>
          <li>
            <span className='font-bold'>Start with descriptive assessment:</span> CVA 103 aligns most closely with traditional cupping, making it the easiest entry point. Begin by adding descriptive profiles to your existing evaluations.
          </li>
          <li>
            <span className='font-bold'>Build gradually:</span> Add affective assessment once your team is comfortable with descriptive, then incorporate extrinsic documentation for specialty and traceable lots.
          </li>
          <li>
            <span className='font-bold'>Run parallel evaluations:</span> During the transition, cup each sample using both the traditional form and CVA. This builds confidence and shows your team how the two systems relate.
          </li>
        </ol>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* FAQ SECTION                                 */}
      {/* ═══════════════════════════════════════════ */}

      <section className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900'>Frequently Asked Questions About the SCA Coffee Value Assessment</h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the SCA Coffee Value Assessment (CVA)?</h4>
            <p className='text-sm text-gray-600'>The CVA is the SCA&#39;s current framework for evaluating specialty coffee quality. It replaces the legacy 100-point cupping score with four integrated assessments: Sample Preparation (CVA 102), Descriptive (CVA 103), Affective (CVA 104), and Extrinsic (CVA 105). Together, they produce a multi-dimensional quality profile rather than a single number.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Does the CVA replace the traditional SCA cupping score?</h4>
            <p className='text-sm text-gray-600'>Yes. The SCA is transitioning from the legacy 100-point scoring system to the CVA framework. Many buyers and exporters continue using traditional scores alongside CVA evaluations during the transition period. The SCA Affective Score Calculator provides a numeric bridge between the two systems.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How does the Coffee Value Assessment affect Ethiopian coffee grading?</h4>
            <p className='text-sm text-gray-600'>The CVA enables Ethiopian coffees to be evaluated on detailed descriptive qualities (floral, citrus, fruit-forward profiles) rather than reduced to a single number. Ethiopia&#39;s ECX grading system (G1-G5) remains in use domestically, but international transactions increasingly include CVA data alongside traditional grades.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Where can I get trained on the SCA Coffee Value Assessment?</h4>
            <p className='text-sm text-gray-600'>The SCA offers a two-day "CVA for Cuppers" course through its network of Authorized Trainers. The program covers all four assessment components, calibration exercises, and practical application for trading and quality control. Check the SCA events page for upcoming sessions.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What are the four components of the CVA?</h4>
            <p className='text-sm text-gray-600'>The four components are: CVA 102 (Sample Preparation Protocol), CVA 103 (Descriptive Assessment), CVA 104 (Affective Assessment), and CVA 105 (Extrinsic Assessment). Each can be used independently. Descriptive and affective assessments are most commonly applied to green coffee evaluation.</p>
          </div>
        </div>
      </section>

      <hr className='my-8 border-gray-200' />

      {/* ═══════════════════════════════════════════ */}
      {/* CTA BLOCK                                   */}
      {/* ═══════════════════════════════════════════ */}

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Premium Ethiopian Coffee Direct from Origin</h4>
        <p className='my-2'>
          At <span className='font-bold'>Ethio Coffee Import and Export PLC</span>, we provide detailed quality data on all our specialty lots, including descriptive cupping profiles and traceability documentation. With three decades of heritage sourcing relationships across Ethiopia&#39;s top growing regions, we connect importers and roasters with the coffees that match their exact specifications.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Our Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Request Samples</Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>How to Order</Link>
        </div>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* RELATED ARTICLES                            */}
      {/* ═══════════════════════════════════════════ */}

      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality &amp; Evaluation</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup and Evaluate Ethiopian Coffee Samples</Link></li>
              <li>• <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality Control: Defects and Grading</Link></li>
              <li>• <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='text-amber-700 hover:underline'>Coffee Science: Analysis and Evaluation</Link></li>
              <li>• <Link href='/insights/best-cupping-school' className='text-amber-700 hover:underline'>Top Cupping Schools Around the World</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origins &amp; Varieties</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Complete Guide to Ethiopian Coffee Origins</Link></li>
              <li>• <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji Comparison</Link></li>
              <li>• <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Ethiopian Heirloom Varieties and Landraces</Link></li>
              <li>• <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee Processing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export Guide</Link></li>
              <li>• <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability Guide</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Ethiopian Coffee Certifications: Organic, Fairtrade, Rainforest</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC. This article is based on official SCA documentation, protocols, and announcements current as of March 2026. The Coffee Value Assessment continues to evolve; contact us for the latest on how CVA data is applied in our quality evaluations.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { 
  HiOutlineCalendarDays, 
  HiOutlineSparkles, 
  HiOutlineChartBar, 
  HiOutlineCheckCircle, 
  HiOutlineDocumentText,
  HiOutlineLightBulb,
  HiOutlineBeaker,
  HiOutlineScale
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
        Understanding the SCA Coffee Value Assessment (CVA) and how it's revolutionizing coffee quality evaluation beyond the traditional 100-point cupping scale
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          The new Coffee Value Assessment brings a more comprehensive approach to evaluating specialty coffee quality.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='SCA Coffee Value Assessment cupping quality grading specialty coffee'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Coffee Quality & Grading / Industry Standards / Sourcing Innovation</span>
      </div>
      
      <p className='my-4'>
        For decades, the specialty coffee industry has relied on a single number to define excellence: the 100-point cupping score. A coffee scoring 85+ points earned the coveted "specialty grade" designation. But as the industry has matured, so has our understanding of what makes coffee truly valuable.
      </p>

      <p className='my-4'>
        Enter the <span className='font-bold'>Coffee Value Assessment (CVA)</span> the Specialty Coffee Association's next-generation evaluation system that's fundamentally changing how we measure, communicate, and understand coffee quality. Officially advancing to its next phase in June 2024, the CVA represents the most significant update to coffee evaluation protocols in a generation.
      </p>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineSparkles className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Key Insight:</span> The CVA doesn't replace the traditional cupping form it expands it. This is about adding dimensions to how we evaluate coffee, giving buyers, roasters, and producers a much richer language to describe what makes a coffee special.</span>
        </p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Why Change Was Needed: Limitations of the Traditional System
      </h3>
      <p className='my-4'>
        The SCA Cupping Form, introduced in the early 2000s, revolutionized coffee quality assessment by establishing objective, repeatable standards. However, over 20+ years, several limitations became apparent:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Single-dimensional scoring:</span> A final score of 87.5 tells you the coffee is "very good," but it doesn't tell you <em>why</em> or what makes it unique</li>
        <li><span className='font-bold'>Loss of detail:</span> Reducing 10+ sensory attributes to one aggregate number obscures what makes each coffee distinctive</li>
        <li><span className='font-bold'>Limited descriptive vocabulary:</span> Traditional forms don't capture the full complexity of flavor profiles emerging from experimental processing methods</li>
        <li><span className='font-bold'>Ignores context and story:</span> The traditional form doesn't account for traceability, sustainability practices, or producer relationships all things buyers increasingly value</li>
        <li><span className='font-bold'>Calibration challenges:</span> Even experienced Q Graders can score the same coffee differently, creating confusion in the supply chain</li>
      </ul>

      <p className='my-4'>
        The CVA addresses these issues by separating assessment into multiple, complementary components that provide a "high-resolution" picture of coffee quality and value.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        <HiOutlineChartBar className='inline mr-2' />
        The Four Pillars of the Coffee Value Assessment
      </h3>
      <p className='my-4'>
        The CVA system is built on four distinct yet interconnected assessment types. Each serves a specific purpose and can be used independently or together:
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
            This protocol establishes exact parameters for roasting, grinding, water temperature, brew ratio, and timing. When everyone prepares samples the same way, results become comparable across different labs, roasteries, and countries. This is the foundation that makes all other assessments reliable.
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
            This is where trained tasters identify and quantify specific flavors, aromas, textures, and aftertastes. Instead of saying "this is good citrus," descriptive assessment asks "how much lemon? how much orange? how much grapefruit?" The result is a detailed flavor map that captures what makes the coffee unique.
          </p>
          <div className='text-sm'>
            <p className='font-bold mb-1'>Key Innovation:</p>
            <p>Uses the <span className='font-bold'>World Coffee Research Sensory Lexicon</span> a scientifically validated vocabulary of 110+ flavor and aroma attributes. This gives evaluators a shared language that's far more precise than subjective descriptors.</p>
          </div>
        </div>

        {/* Pillar 3 */}
        <div className='border border-gray-200 rounded-lg p-6'>
          <div className='flex items-center gap-3 mb-3'>
            <span className='bg-amber-500 text-white font-bold text-lg px-3 py-1 rounded'>3</span>
            <h4 className='text-xl font-bold'>Affective Assessment (CVA 104)</h4>
          </div>
          <p className='mb-3'>
            <span className='font-bold'>Purpose:</span> Evaluate how much you <em>like</em> or <em>value</em> specific sensory attributes.
          </p>
          <p className='text-sm bg-gray-50 p-4 rounded border border-gray-200 mb-3'>
            This is the quality judgment component. After describing what's in the cup, affective assessment asks: "Do I find this acidity pleasant? Is this body desirable? Does this flavor profile meet my needs?" It separates "what is there" from "how good is it."
          </p>
          <div className='text-sm'>
            <p className='font-bold mb-1'>Why This Matters:</p>
            <p>Different buyers value different things. A Nordic roaster might prize bright, tea-like acidity that an Italian roaster would find unbalanced. The CVA allows both assessments to coexist the coffee is objectively described, then subjectively evaluated based on intended use.</p>
          </div>
        </div>

        {/* Pillar 4 */}
        <div className='border border-gray-200 rounded-lg p-6'>
          <div className='flex items-center gap-3 mb-3'>
            <span className='bg-amber-500 text-white font-bold text-lg px-3 py-1 rounded'>4</span>
            <h4 className='text-xl font-bold'>Extrinsic Assessment (Beta)</h4>
          </div>
          <p className='mb-3'>
            <span className='font-bold'>Purpose:</span> Record non-sensory information that influences a coffee's value story, sustainability, traceability, impact.
          </p>
          <p className='text-sm bg-gray-50 p-4 rounded border border-gray-200 mb-3'>
            This groundbreaking component recognizes that coffee value extends beyond the cup. It captures information about farm practices, processing innovations, producer relationships, certifications, carbon footprint, and social impact. Released in beta in 2024, it's the most innovative aspect of the CVA.
          </p>
          <div className='text-sm'>
            <p className='font-bold mb-1'>Examples of Extrinsic Value:</p>
            <ul className='list-disc ml-5 space-y-1 mt-2'>
              <li>Direct trade relationship with transparent pricing</li>
              <li>Regenerative agriculture practices</li>
              <li>First-time experimental processing by a producer</li>
              <li>Women-led cooperative</li>
              <li>Rare or heritage coffee variety preservation</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        <HiOutlineBeaker className='inline mr-2' />
        How the CVA Works in Practice
      </h3>
      <p className='my-4'>
        Unlike the traditional cupping form that generates a single score, the CVA produces a comprehensive profile. Here's a simplified workflow:
      </p>

      <div className='my-6 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h4 className='font-bold text-lg mb-4'>CVA Evaluation Process:</h4>
        <ol className='space-y-3'>
          <li className='flex gap-3'>
            <span className='font-bold text-amber-600 flex-shrink-0'>Step 1:</span>
            <span><span className='font-bold'>Sample Preparation</span> – Follow CVA 102 protocol to prepare the coffee using standardized roasting, grinding, and brewing parameters</span>
          </li>
          <li className='flex gap-3'>
            <span className='font-bold text-amber-600 flex-shrink-0'>Step 2:</span>
            <span><span className='font-bold'>Descriptive Assessment</span> – Trained panel identifies and quantifies specific sensory attributes (sweetness intensity, acidity type, body weight, flavor notes)</span>
          </li>
          <li className='flex gap-3'>
            <span className='font-bold text-amber-600 flex-shrink-0'>Step 3:</span>
            <span><span className='font-bold'>Affective Assessment</span> – Evaluators rate how desirable they find each attribute and the coffee overall for their specific context</span>
          </li>
          <li className='flex gap-3'>
            <span className='font-bold text-amber-600 flex-shrink-0'>Step 4:</span>
            <span><span className='font-bold'>Extrinsic Documentation</span> – Record relevant non-sensory information about origin, processing, sustainability, and story</span>
          </li>
          <li className='flex gap-3'>
            <span className='font-bold text-amber-600 flex-shrink-0'>Step 5:</span>
            <span><span className='font-bold'>Comprehensive Profile</span> – The result is a multi-dimensional assessment that captures what the coffee is, how it tastes, why it's valued, and its broader context</span>
          </li>
        </ol>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        What This Means for Ethiopian Coffee Exporters
      </h3>
      <p className='my-4'>
        Ethiopia, as the birthplace of coffee, produces some of the world's most distinctive and sought-after coffees. The CVA system presents both opportunities and considerations for Ethiopian exporters:
      </p>

      <div className='my-6'>
        <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineCheckCircle className='text-green-600 text-xl' />
          Opportunities
        </h4>
        <ul className='space-y-3 ml-5'>
          <li>
            <span className='font-bold'>Better storytelling:</span> Ethiopian coffees often have incredible stories ancient varieties, traditional processing, specific terroir. The extrinsic assessment finally gives these stories a formal place in quality evaluation.
          </li>
          <li>
            <span className='font-bold'>Differentiation beyond score:</span> Instead of competing solely on an 86 vs. 87 point score, Ethiopian coffees can be differentiated by their unique descriptive profiles and origin narratives.
          </li>
          <li>
            <span className='font-bold'>Premium justification:</span> When buyers can see the complete value picture exceptional cup quality plus sustainable practices plus rare variety preservation they're more likely to pay premium prices.
          </li>
          <li>
            <span className='font-bold'>Experimental processing recognition:</span> Ethiopia's growing innovation in processing (anaerobic, carbonic maceration, extended fermentation) produces complex flavor profiles that the CVA's detailed descriptive system can capture better than traditional cupping.
          </li>
        </ul>
      </div>

      <div className='my-6'>
        <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineScale className='text-amber-600 text-xl' />
          Considerations
        </h4>
        <ul className='space-y-3 ml-5'>
          <li>
            <span className='font-bold'>Training requirements:</span> The CVA requires more specialized training than traditional cupping. Exporters need access to CVA education programs.
          </li>
          <li>
            <span className='font-bold'>ECX compatibility:</span> The Ethiopia Commodity Exchange still uses traditional grading (G1, G2, G3). Exporters need to navigate both systems.
          </li>
          <li>
            <span className='font-bold'>Investment in documentation:</span> To leverage the extrinsic assessment, exporters need robust systems to track and verify sustainability, traceability, and impact data.
          </li>
        </ul>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        <HiOutlineLightBulb className='inline mr-2' />
        What Importers and Roasters Need to Know
      </h3>
      <p className='my-4'>
        If you're buying Ethiopian coffee (or any specialty coffee), here's what the CVA means for your sourcing decisions:
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-3'>Practical Implications for Buyers:</h4>
        <ul className='space-y-3 list-disc ml-5'>
          <li>
            <span className='font-bold'>More informed decisions:</span> Instead of relying on a single score, you'll have detailed flavor profiles that help you predict how the coffee will perform as espresso, filter, or cold brew.
          </li>
          <li>
            <span className='font-bold'>Better communication with suppliers:</span> When you can describe exactly what flavor attributes you're looking for (using the Sensory Lexicon), suppliers can match you with appropriate lots.
          </li>
          <li>
            <span className='font-bold'>Value transparency:</span> The extrinsic assessment helps you verify sustainability claims and understand the full story behind the coffee you're buying.
          </li>
          <li>
            <span className='font-bold'>Quality consistency:</span> Standardized sample preparation means when your supplier sends you a CVA evaluation, you can trust the results will be repeatable when you receive the shipment.
          </li>
        </ul>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        CVA vs. Traditional Cupping: Can They Coexist?
      </h3>
      <p className='my-4'>
        An important clarification: <span className='font-bold'>The CVA is not replacing traditional cupping or Q Grading</span>. Both systems will coexist, serving different purposes:
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse border border-gray-300'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='border border-gray-300 p-3 text-left'>Aspect</th>
              <th className='border border-gray-300 p-3 text-left'>Traditional Cupping (100-pt)</th>
              <th className='border border-gray-300 p-3 text-left'>Coffee Value Assessment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Primary Output</td>
              <td className='border border-gray-300 p-3'>Single aggregate score</td>
              <td className='border border-gray-300 p-3'>Multi-dimensional profile</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Best Use Case</td>
              <td className='border border-gray-300 p-3'>Quick quality screening, pass/fail decisions</td>
              <td className='border border-gray-300 p-3'>Deep quality understanding, differentiation, storytelling</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Time Required</td>
              <td className='border border-gray-300 p-3'>15-20 minutes per session</td>
              <td className='border border-gray-300 p-3'>30-60 minutes for complete assessment</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Training Level</td>
              <td className='border border-gray-300 p-3'>Q Grader certification</td>
              <td className='border border-gray-300 p-3'>CVA for Cuppers course</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Industry Adoption</td>
              <td className='border border-gray-300 p-3'>Universal standard since early 2000s</td>
              <td className='border border-gray-300 p-3'>Growing adoption, 800+ early adopters</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Many coffee professionals are adopting a <span className='font-bold'>hybrid approach</span>: using traditional cupping for initial screening and lot selection, then applying CVA for premium lots that require detailed documentation and communication.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Timeline and Adoption Status
      </h3>
      <p className='my-4'>
        The Coffee Value Assessment has been in development since the early 2020s, with a phased rollout:
      </p>

      <div className='my-6 space-y-2'>
        <div className='flex gap-3 items-start'>
          <span className='font-bold text-amber-600 flex-shrink-0'>2021-2022:</span>
          <span>Initial research and framework development</span>
        </div>
        <div className='flex gap-3 items-start'>
          <span className='font-bold text-amber-600 flex-shrink-0'>2023:</span>
          <span>Draft protocols released, Early Adopter program launched</span>
        </div>
        <div className='flex gap-3 items-start'>
          <span className='font-bold text-amber-600 flex-shrink-0'>June 2024:</span>
          <span>Next phase announced three standards (CVA 102, 103, 104) submitted for official adoption, extrinsic assessment beta released</span>
        </div>
        <div className='flex gap-3 items-start'>
          <span className='font-bold text-amber-600 flex-shrink-0'>Late 2024/Early 2025:</span>
          <span>Expected official adoption of core standards by SCA Standards Development Panel</span>
        </div>
        <div className='flex gap-3 items-start'>
          <span className='font-bold text-amber-600 flex-shrink-0'>2025-2026:</span>
          <span>Expanding global education programs, growing industry adoption</span>
        </div>
      </div>

      <p className='my-4'>
        As of February 2026, the CVA is in active use by over 800 businesses globally, with more joining as training becomes available. The system has been tested extensively through the Early Adopter program and refined based on real-world feedback from roasters, importers, producers, and Q Graders.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        How to Get Started with CVA
      </h3>
      <p className='my-4'>
        Whether you're an exporter, importer, roaster, or coffee professional, here's how to engage with the Coffee Value Assessment:
      </p>

      <div className='my-6 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h4 className='font-bold text-lg mb-4'>Steps to CVA Adoption:</h4>
        <ol className='space-y-3 list-decimal ml-5'>
          <li>
            <span className='font-bold'>Education:</span> Take the "CVA for Cuppers" course offered through SCA Authorized Trainers. This provides hands-on training with all four assessment components.
          </li>
          <li>
            <span className='font-bold'>Access Resources:</span> Download the official protocols, forms, and supporting documentation from <Link href="https://sca.coffee/value-assessment" className='text-blue-600 underline' target='_blank'>sca.coffee/value-assessment</Link>
          </li>
          <li>
            <span className='font-bold'>Start with Descriptive:</span> Most practitioners begin with the descriptive assessment (CVA 103) as it requires the least radical change from traditional cupping.
          </li>
          <li>
            <span className='font-bold'>Build Gradually:</span> You don't need to implement all four pillars at once. Start with one or two that align with your immediate needs.
          </li>
          <li>
            <span className='font-bold'>Join the Community:</span> Connect with other CVA users to share best practices and calibration experiences.
          </li>
        </ol>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        The Future of Coffee Quality Assessment
      </h3>
      <p className='my-4'>
        The Coffee Value Assessment represents a philosophical shift in how the specialty coffee industry thinks about quality. Rather than reducing coffee to a single number, it acknowledges that:
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li>Value is multi-dimensional</li>
        <li>What we measure shapes what we reward</li>
        <li>Different coffees can be excellent in different ways</li>
        <li>The story behind the coffee matters as much as what's in the cup</li>
        <li>Transparency and detail create more efficient markets</li>
      </ul>

      <p className='my-4'>
        For Ethiopian coffee with its unmatched diversity of flavors, processing traditions, and cultural significance this shift could not come at a better time. The CVA finally provides a framework that can capture what makes Ethiopian coffee truly special.
      </p>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineDocumentText className='text-xl' />
          Bottom Line for Ethiopian Coffee Stakeholders
        </h4>
        <p className='mb-3'>
          The Coffee Value Assessment isn't just a new form it's a new language for communicating coffee quality and value. For Ethiopian exporters, it's an opportunity to differentiate beyond basic grades and tell the full story of your coffees. For importers and roasters, it's a tool for making more informed sourcing decisions and building stronger producer relationships.
        </p>
        <p>
          The CVA won't replace traditional cupping overnight, but it represents where the industry is heading: toward more transparency, more detail, and more recognition of everything that makes great coffee great.
        </p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Key Takeaways
      </h3>
      <div className='my-6 space-y-3'>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>The CVA is a multi-dimensional assessment system that complements (not replaces) traditional cupping</p>
        </div>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>It consists of four components: Sample Preparation, Descriptive Assessment, Affective Assessment, and Extrinsic Assessment</p>
        </div>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>Over 800 businesses globally have adopted the CVA as early adopters since 2023</p>
        </div>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>The system officially advanced to its next phase in June 2024, with core standards expected for official adoption in 2024-2025</p>
        </div>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>For Ethiopian coffee, the CVA provides better tools to communicate unique qualities, processing innovations, and origin stories</p>
        </div>
        <div className='flex gap-3 items-start'>
          <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-1' />
          <p>Training is available through SCA's "CVA for Cuppers" course</p>
        </div>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-8'>
        <h4 className='font-bold text-xl mb-3'>Experience Ethiopian Coffee Evaluated with the CVA</h4>
        <p className='mb-4'>
          Ethio Coffee Export provides detailed cupping notes and quality assessments for every lot we offer. Whether you prefer traditional SCA scores or the new Coffee Value Assessment framework, our team can match you with the right Ethiopian green coffee.
        </p>
        <p>
          <Link href='/offerings' className='font-bold underline'>Browse our current offerings</Link> or <Link href='/contact-us' className='font-bold underline'>request samples</Link> to taste the difference.
        </p>
      </div>

      {/* FAQ SECTION */}
      <section className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions About the SCA Coffee Value Assessment</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What is the SCA Coffee Value Assessment (CVA)?</h4>
            <p className="text-sm text-gray-600">The CVA is the SCA's new evaluation framework that replaces the traditional 100-point cupping score. It assesses coffee across multiple descriptive dimensions rather than assigning a single numeric score, providing richer and more actionable quality information.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Does the CVA replace the traditional SCA cupping score?</h4>
            <p className="text-sm text-gray-600">Yes. The SCA is transitioning from the legacy 100-point scoring system to the CVA framework. However, many buyers and exporters continue to use traditional scores alongside CVA evaluations during the transition period.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How does the Coffee Value Assessment affect Ethiopian coffee grading?</h4>
            <p className="text-sm text-gray-600">The CVA allows Ethiopian coffees to be evaluated on descriptive qualities like floral, fruity, and complex acidity profiles rather than a single number. This benefits Ethiopian origins known for distinctive flavor characteristics.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Where can I get trained on the SCA Coffee Value Assessment?</h4>
            <p className="text-sm text-gray-600">The SCA offers a dedicated "CVA for Cuppers" course through its education platform. Training covers the new evaluation methodology, calibration exercises, and practical application for trading and quality control.</p>
          </div>
        </div>
      </section>

      <hr className="my-8 border-gray-200" />

      <div className='bg-gray-50 p-6 rounded-lg my-6'>
        <h4 className='font-bold text-lg mb-3'>Related Resources:</h4>
        <ul className='space-y-2 text-sm'>
          <li>• <Link href="/ethiopian-coffee-exporter" className='text-blue-600 underline'>Ethiopian Coffee Exporter: Ethio Coffee Export PLC</Link></li>
          <li>• <Link href="/offerings" className='text-blue-600 underline'>Current Ethiopian Green Coffee Offerings</Link></li>
          <li>• <Link href="/ordering-info" className='text-blue-600 underline'>How to Order Ethiopian Green Coffee</Link></li>
          <li>• <Link href="/insights/how-to-cup-evaluate-ethiopian-coffee-samples" className='text-blue-600 underline'>How to Cup & Evaluate Ethiopian Coffee Samples</Link></li>
          <li>• <Link href="https://sca.coffee/value-assessment" className='text-blue-600 underline' target='_blank'>Official SCA Coffee Value Assessment Page</Link></li>
          <li>• <Link href="/insights/ecx-and-ethiopian-coffee-export" className='text-blue-600 underline'>Understanding the Ethiopia Commodity Exchange (ECX)</Link></li>
          <li>• <Link href="/insights/green-coffee-quality-control-defects-grading" className='text-blue-600 underline'>Green Coffee Quality Control: Defects, Grading Systems & What Importers Should Inspect</Link></li>
        </ul>
      </div>

      <p className='my-4 text-sm text-gray-600 italic'>
        This article is based on official SCA documentation and announcements as of February 2026. The Coffee Value Assessment continues to evolve based on industry feedback and research. For the most current information, visit the SCA's official website.
      </p>
    </>
  )
}

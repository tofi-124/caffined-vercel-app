import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineBeaker,
  HiOutlineBuildingLibrary,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiOutlineClipboardDocumentList,
  HiOutlineClock,
  HiOutlineDocumentText,
  HiOutlineExclamationTriangle,
  HiOutlineLightBulb,
  HiOutlineScale,
  HiOutlineShieldCheck,
  HiOutlineQuestionMarkCircle,
  HiOutlineTruck,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function GreenCoffeeQualityClaimsGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        A practical green coffee quality claims workflow for importers comparing arrival lots to approved samples and documenting evidence fast
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2 text-sm text-gray-500'>
          Arrival inspection of Ethiopian green coffee at destination. A defensible claim begins with representative sampling, fast documentation, and a clear comparison against the approved pre-shipment lot.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md bg-gray-100'>
          {/* Expected path: /images/insights/green-coffee-quality-claims-guide.webp */}
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Inspector reviewing Ethiopian green coffee arrival samples, moisture data, and bag condition for a quality claim'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Claims Management / Quality Control / Contract Execution / Importer Resources</span>
      </div>

      <div className='my-4 text-sm text-gray-700'>
        <p className='font-semibold mb-1'>Reference frameworks:</p>
        <ul className='list-disc ml-5 space-y-1'>
          <li>
            <a href='https://www.greencoffeeassociation.org/professional-resources/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>Green Coffee Association professional resources</a>
          </li>
          <li>
            <a href='https://www.ecf-coffee.org/category/publications/contracts/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>European Coffee Federation contract resources</a>
          </li>
          <li>
            <a href='https://sca.coffee/sca-news/25/issue-24-grounding-green-grading' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>SCA research on green grading and physical defects</a>
          </li>
        </ul>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />
          Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          A green coffee quality claim is not just a complaint that the coffee feels different on arrival. It is a contract-backed, evidence-based case that the delivered lot materially deviates from the approved pre-shipment sample or agreed specifications. The strongest claims move fast: verify container and bag condition, pull representative samples, lock down moisture and water activity readings, cup against the retained pre-shipment reference, notify the seller quickly, and preserve neutral evidence before the lot gets blended, rebagged, or delayed in storage.
        </p>
      </div>

      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#what-counts-as-a-claim' className='text-amber-700 hover:underline'>1. What Counts as a Real Quality Claim</a></li>
          <li><a href='#common-claim-scenarios' className='text-amber-700 hover:underline'>2. The Most Common Quality Claim Scenarios</a></li>
          <li><a href='#arrival-response' className='text-amber-700 hover:underline'>3. The First 48 Hours After Arrival</a></li>
          <li><a href='#claim-file' className='text-amber-700 hover:underline'>4. Building a Claim File the Seller Must Take Seriously</a></li>
          <li><a href='#sampling-neutral-evidence' className='text-amber-700 hover:underline'>5. Representative Sampling and Neutral Evidence</a></li>
          <li><a href='#root-cause' className='text-amber-700 hover:underline'>6. Root Cause: Origin Issue, Transit Issue, or Warehouse Issue?</a></li>
          <li><a href='#settlement-paths' className='text-amber-700 hover:underline'>7. Allowance, Replacement, Reconditioning, or Arbitration</a></li>
          <li><a href='#contract-clauses' className='text-amber-700 hover:underline'>8. Contract Clauses That Prevent Weak Claims</a></li>
          <li><a href='#ethiopia-specific-risks' className='text-amber-700 hover:underline'>9. Ethiopia-Specific Risk Points Importers Should Watch</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>10. FAQ</a></li>
        </ol>
      </div>

      <p className='my-4'>
        A buyer approves a washed Yirgacheffe pre-shipment sample at origin. The lot cups bright, floral, and clean. Six weeks later the container lands, the bag tops show faint water staining, the coffee smells slightly papery, and the arrival cup has lost the structure that justified the contract price. This is the moment when many importers either move too slowly, sample too casually, or turn a valid commercial claim into an avoidable argument.
      </p>
      <p className='my-4'>
        The purpose of a quality claim is not to punish an exporter. It is to establish, with defensible evidence, whether the delivered coffee still matches the approved standard and who should absorb the value loss when it does not. In practice, most good claims are settled commercially through an allowance, replacement, or reconditioning plan rather than a formal arbitration file. But that only happens when the buyer can show a clean chain of facts.
      </p>
      <p className='my-4'>
        This guide focuses on that chain of facts. It does not repeat a full tutorial on <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline font-bold'>how to cup Ethiopian coffee samples</Link>, a broad primer on <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline font-bold'>green coffee defects and grading</Link>, or a full breakdown of <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline font-bold'>contract structures and payment terms</Link>. Instead, it connects those topics into a practical arrival-claim workflow built for importers buying Ethiopian coffee under real commercial timelines.
      </p>

      <h3 id='what-counts-as-a-claim' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineShieldCheck className='text-amber-600 flex-shrink-0' />
        What Counts as a Real Quality Claim
      </h3>

      <p className='my-4'>
        A real quality claim starts with one question: did the delivered coffee materially deviate from the agreed reference? The agreed reference may be the approved pre-shipment sample, a detailed sales contract, a moisture and water activity clause, a defect tolerance, or a combination of all four. Without that reference point, you often have dissatisfaction rather than a claim.
      </p>
      <p className='my-4'>
        This distinction matters. Buyers sometimes treat any flavor difference as a valid claim. Sellers sometimes treat every complaint as mere preference. Both positions are weak. If the contract was vague, the coffee may still disappoint but remain hard to challenge. If the contract was specific and the arrival evidence is clean, even a good supplier will usually recognize that a commercial adjustment is the practical solution.
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-6'>
        <div className='bg-green-50 p-6 rounded-lg border border-green-200'>
          <h4 className='font-bold text-green-800 mb-3'>Usually a Valid Claim</h4>
          <ul className='space-y-2 text-sm text-gray-800'>
            <li>New physical defects that exceed the sold grade</li>
            <li>Moisture or water activity outside the contracted range</li>
            <li>A clear sensory drop versus the retained PSS reference</li>
            <li>Visible transit or bag damage tied to quality loss</li>
            <li>Wrong lot identity, wrong bag marks, or non-matching documentation</li>
          </ul>
        </div>
        <div className='bg-red-50 p-6 rounded-lg border border-red-200'>
          <h4 className='font-bold text-red-800 mb-3'>Usually Not Enough on Its Own</h4>
          <ul className='space-y-2 text-sm text-gray-800'>
            <li>The coffee tastes different but no retained PSS exists</li>
            <li>The buyer changed roast profile, water, or cupping protocol</li>
            <li>The contract never defined cup tolerance or physical specs</li>
            <li>The lot sat in the buyer&apos;s warehouse for weeks before testing</li>
            <li>The dispute is really about preference, not deviation</li>
          </ul>
        </div>
      </div>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-2'>The critical mindset</h4>
        <p className='text-sm text-gray-700'>
          A defensible claim is built around comparison, timing, and preservation. Comparison means against the approved reference. Timing means within the contractual notice window. Preservation means the coffee, the samples, and the evidence stay intact long enough for both parties, and if necessary a neutral third party, to inspect the same facts.
        </p>
      </div>

      <h3 id='common-claim-scenarios' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineExclamationTriangle className='text-amber-600 flex-shrink-0' />
        The Most Common Quality Claim Scenarios
      </h3>

      <p className='my-4'>
        Most Ethiopian arrival disputes fall into a small number of repeat patterns. The buyer&apos;s job is not to prove a theory first. It is to document the deviation fast enough that the real cause can still be investigated. That is why the same claim package usually includes physical data, sensory comparison, packaging observations, and contract references together.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Scenario</th>
              <th className='p-3 text-left font-bold'>What changed</th>
              <th className='p-3 text-left font-bold'>Most useful evidence</th>
              <th className='p-3 text-left font-bold'>Typical outcome</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Sensory drop</td>
              <td className='p-3'>Arrival cup loses core descriptors or drops beyond agreed tolerance</td>
              <td className='p-3'>Side-by-side cupping with retained PSS, same roast profile, same water</td>
              <td className='p-3'>Allowance, replacement, or neutral re-cup</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Moisture instability</td>
              <td className='p-3'>Arrival moisture or aw exceeds contract or safe storage expectation</td>
              <td className='p-3'>Meter readings, calibration log, photos of liners and bags</td>
              <td className='p-3'>Allowance, reconditioning, or condition claim</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Defect escalation</td>
              <td className='p-3'>Primary or secondary defect count exceeds sold grade</td>
              <td className='p-3'>Representative 300 g grading, defect photos, neutral count if needed</td>
              <td className='p-3'>Price adjustment or rejection if severe</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Transit damage</td>
              <td className='p-3'>Water staining, broken liners, mold risk, odor shift</td>
              <td className='p-3'>Seal records, container photos, bag condition, moisture drift</td>
              <td className='p-3'>Insurance route, seller negotiation, or logistics-linked claim</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Lot mismatch</td>
              <td className='p-3'>Bag marks, marks-and-numbers, or paperwork do not match the approved lot</td>
              <td className='p-3'>Container seal, pallet labels, bag marks, shipping documents</td>
              <td className='p-3'>Immediate hold and seller notice</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-amber-50 border border-amber-200 rounded-lg p-6 my-6'>
        <p className='font-bold mb-2'>Example: a claim that is stronger than it first looks</p>
        <p className='text-sm text-gray-700'>
          A washed Ethiopian lot was approved at 10.8% moisture with a clean citrus and jasmine profile. Arrival testing shows 12.1% moisture, faint bag staining, and a two-point drop with papery finish. No single datapoint wins the argument by itself. Together, the readings, visuals, and cup comparison create a coherent claim file that points toward transit or storage damage after approval.
        </p>
      </div>

      <h3 id='arrival-response' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineClock className='text-amber-600 flex-shrink-0' />
        The First 48 Hours After Arrival
      </h3>

      <p className='my-4'>
        Strong claims are usually won or lost in the first two days. Commercial rulebooks differ, but they share the same reality: claim windows are short, evidence degrades quickly, and warehouse handling can blur the line between arrival condition and buyer-side storage exposure. If you suspect a problem, the clock should start when the lot becomes available for inspection, not when you finally get around to cupping it.
      </p>

      <div className='space-y-4 my-6'>
        <div className='flex items-start gap-4 bg-gray-50 p-4 rounded-lg border-l-4 border-amber-500'>
          <div className='bg-amber-100 text-amber-800 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-sm'>0</div>
          <div>
            <p className='font-bold'>Before unloading</p>
            <p className='text-sm'>Photograph container seal, doors, pallet condition, and any visible dampness or odor indicators. Verify marks and numbers against the Bill of Lading and packing list before the lot gets broken down.</p>
          </div>
        </div>
        <div className='flex items-start gap-4 bg-gray-50 p-4 rounded-lg border-l-4 border-amber-500'>
          <div className='bg-amber-100 text-amber-800 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-sm'>1</div>
          <div>
            <p className='font-bold'>Same day intake</p>
            <p className='text-sm'>Pull preliminary samples, log bag IDs, and isolate any visibly compromised bags. Do not start blending suspect coffee into other stock. If you delay here, you weaken the chain of custody immediately.</p>
          </div>
        </div>
        <div className='flex items-start gap-4 bg-gray-50 p-4 rounded-lg border-l-4 border-amber-500'>
          <div className='bg-amber-100 text-amber-800 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-sm'>2</div>
          <div>
            <p className='font-bold'>Day 1 testing</p>
            <p className='text-sm'>Run moisture and water activity checks, prepare a representative 300 g grading sample, and schedule side-by-side cupping against the retained PSS reference. For moisture science details and thresholds, use the dedicated <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline font-bold'>moisture and water activity guide</Link>.</p>
          </div>
        </div>
        <div className='flex items-start gap-4 bg-gray-50 p-4 rounded-lg border-l-4 border-amber-500'>
          <div className='bg-amber-100 text-amber-800 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-sm'>3</div>
          <div>
            <p className='font-bold'>Day 1 to Day 2 notice</p>
            <p className='text-sm'>If material deviation appears likely, send provisional written notice to the exporter. Keep it factual: lot ID, shipment reference, what changed, what evidence is being collected, and that the coffee is being held pending further review.</p>
          </div>
        </div>
      </div>

      <div className='bg-red-50 border border-red-200 rounded-lg p-6 my-6'>
        <p className='font-bold text-red-800 mb-2'>The most common mistake</p>
        <p className='text-sm text-gray-700'>
          Waiting until production needs force the decision. If the lot sits for a week in ambient warehouse conditions before testing, the seller can reasonably argue that your own handling contributed to the drift. Fast, documented intake protects both your claim position and your relationship with the supplier.
        </p>
      </div>

      <h3 id='claim-file' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineDocumentText className='text-amber-600 flex-shrink-0' />
        Building a Claim File the Seller Must Take Seriously
      </h3>

      <p className='my-4'>
        Exporters settle faster when they receive a disciplined file instead of an emotional email. A useful claim file shows that the buyer knows what was contracted, what arrived, how it was sampled, how it was tested, and what commercial remedy is being requested. It also shows that the buyer understands the difference between a negotiable allowance and a case that may require neutral inspection.
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-6'>
        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-3'>Core documents</h4>
          <ul className='space-y-2 text-sm text-gray-700'>
            <li>Sales contract or confirmation with quality clauses</li>
            <li>Approved PSS notes, scores, and retained sample reference</li>
            <li>Packing list, marks and numbers, and Bill of Lading</li>
            <li>Arrival intake log with date, bag IDs, and container observations</li>
            <li>Notice emails sent to the seller within the claim window</li>
          </ul>
        </div>
        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-3'>Technical evidence</h4>
          <ul className='space-y-2 text-sm text-gray-700'>
            <li>Moisture and water activity readings with instrument details</li>
            <li>300 g defect counts and photos of key physical defects</li>
            <li>Side-by-side cupping forms against retained PSS</li>
            <li>Photos of bag damage, liners, water staining, and seals</li>
            <li>Neutral inspection or neutral cupping report when required</li>
          </ul>
        </div>
      </div>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='text-xl font-bold mb-3'>What your first seller notice should include</h4>
        <ul className='space-y-2 text-sm text-gray-800'>
          <li><strong>Shipment reference:</strong> contract number, lot name, container number, discharge or warehouse date</li>
          <li><strong>Observed deviation:</strong> what changed versus PSS or contract</li>
          <li><strong>Immediate evidence:</strong> moisture, odor, damage, defect count, or cup shift</li>
          <li><strong>Status:</strong> coffee is on hold pending final documentation</li>
          <li><strong>Request:</strong> confirm whether the seller wants a neutral inspector or joint review</li>
        </ul>
      </div>

      <h3 id='sampling-neutral-evidence' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBeaker className='text-amber-600 flex-shrink-0' />
        Representative Sampling and Neutral Evidence
      </h3>

      <p className='my-4'>
        Weak sampling destroys strong claims. Hand-scooping from a few easy-to-reach bags might confirm your suspicion, but it does not prove lot-wide deviation. For claims that could affect price materially, sample broadly enough to represent the shipment and preserve sealed sets so both parties can evaluate the same coffee later.
      </p>
      <p className='my-4'>
        The practical standard is simple: sample from multiple bag positions, combine increment pulls properly, split the composite cleanly, and seal duplicate sets. If the seller pushes back, your goal is to show that the sampling method was more robust than a casual warehouse check. That credibility often matters before arbitration ever enters the conversation.
      </p>

      <div className='bg-amber-50 border border-amber-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>A practical A/B/C sample structure</h4>
        <ul className='space-y-2 text-sm text-gray-700'>
          <li><strong>Set A:</strong> buyer working sample for grading, moisture, aw, and cupping</li>
          <li><strong>Set B:</strong> sealed reserve for the seller or joint re-check</li>
          <li><strong>Set C:</strong> sealed untouched reserve held for neutral review or arbitration</li>
        </ul>
      </div>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Evidence type</th>
              <th className='p-3 text-left font-bold'>Why it matters</th>
              <th className='p-3 text-left font-bold'>Common weakness</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Retained PSS</td>
              <td className='p-3'>Shows the agreed benchmark</td>
              <td className='p-3'>Buyer did not retain one, or stored it poorly</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Neutral inspection</td>
              <td className='p-3'>Adds credibility on moisture, defects, and condition</td>
              <td className='p-3'>Neutral requested too late after the lot was moved</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Chain of custody</td>
              <td className='p-3'>Shows how samples were pulled, split, sealed, and stored</td>
              <td className='p-3'>No timestamps, no bag list, no seal record</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Matched cupping protocol</td>
              <td className='p-3'>Reduces arguments about roast or evaluation drift</td>
              <td className='p-3'>Arrival sample roasted or cupped under different conditions</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        If the dispute is primarily sensory, cup the arrival sample against the retained PSS on the same day with the same roast approach and water. If the dispute is primarily physical, document the physical deviation first and then use cupping to show commercial impact. The sequencing matters because many sellers will accept a measurable physical drift faster than a purely verbal flavor objection.
      </p>

      <h3 id='root-cause' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineChartBar className='text-amber-600 flex-shrink-0' />
        Root Cause: Origin Issue, Transit Issue, or Warehouse Issue?
      </h3>

      <p className='my-4'>
        Not every arrival problem begins at origin. Some begin with poor PSS discipline, some with sea freight exposure, and some inside the importer&apos;s own warehouse. The fastest way to reduce conflict is to separate the deviation from the cause, then test cause hypotheses against the evidence.
      </p>

      <div className='space-y-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Origin or lot-preparation issue</h4>
          <p className='text-sm text-gray-700'>Likely when the bag marks do not match, the defect profile exceeds sold grade immediately, or the final PSS never truly represented the export lot. This is where disciplined stock-lot and PSS handling matters. In Ethiopia, buyers who rely too heavily on an early offer sample instead of the final milled lot are exposed here.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Transit issue</h4>
          <p className='text-sm text-gray-700'>Likely when moisture rises, liners fail, jute shows staining, or the cup fades in ways consistent with condensation, heat, or delayed transit. For that branch, the relevant supporting guide is <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline font-bold'>specialty coffee storage and freight logistics</Link>.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Destination warehouse issue</h4>
          <p className='text-sm text-gray-700'>Likely when arrival intake was clean but the coffee drifted after sitting in uncontrolled storage. If the buyer waited to test, rebagged the lot, or stored it in a humid warehouse, the claim becomes much harder to sustain against the exporter.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Expectation mismatch</h4>
          <p className='text-sm text-gray-700'>Likely when physical data is stable but the buyer expected a different profile than what the contract actually described. This is why sensory descriptors, tolerance language, and sample approval mechanics matter in the sales confirmation.</p>
        </div>
      </div>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <p className='font-bold text-green-800 mb-2'>A useful decision shortcut</p>
        <p className='text-sm text-gray-700'>
          If the coffee is objectively different on arrival and the buyer documented it immediately, you likely have a real claim. If the coffee was not checked promptly, was stored loosely, or lacks a retained PSS, you likely have a weakened negotiation rather than a clean dispute file.
        </p>
      </div>

      <h3 id='settlement-paths' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBuildingLibrary className='text-amber-600 flex-shrink-0' />
        Allowance, Replacement, Reconditioning, or Arbitration
      </h3>

      <p className='my-4'>
        Most green coffee claims should be solved commercially before they become procedural. The smartest exporters know that preserving the relationship often matters more than defending every marginal point. The smartest buyers know that arbitration is slow, expensive, and best reserved for materially significant disputes where the facts are already preserved.
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-6'>
        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-3'>Most common commercial outcomes</h4>
          <ul className='space-y-2 text-sm text-gray-700'>
            <li><strong>Allowance:</strong> seller grants a discount to reflect lost value</li>
            <li><strong>Replacement:</strong> seller substitutes coffee where contract structure allows it</li>
            <li><strong>Reconditioning:</strong> damaged bags or packaging are repaired while quality impact is assessed</li>
            <li><strong>Shared-cost solution:</strong> parties split freight, rebagging, or value-loss exposure</li>
          </ul>
        </div>
        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h4 className='font-bold mb-3'>When formal escalation makes sense</h4>
          <ul className='space-y-2 text-sm text-gray-700'>
            <li>Material value loss on a large shipment</li>
            <li>No commercial response despite timely notice</li>
            <li>Neutral evidence confirms meaningful deviation</li>
            <li>Contract specifies a rulebook such as GCA or ECF terms</li>
          </ul>
        </div>
      </div>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Remedy</th>
              <th className='p-3 text-left font-bold'>Best used when</th>
              <th className='p-3 text-left font-bold'>Buyer caution</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Allowance</td>
              <td className='p-3'>Coffee is usable but worth less than contracted</td>
              <td className='p-3'>Tie the requested discount to actual quality loss, not frustration</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Replacement</td>
              <td className='p-3'>Seller has contract flexibility and equivalent coffee available</td>
              <td className='p-3'>Confirm timing, freight responsibility, and new sample approval</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Reconditioning</td>
              <td className='p-3'>Bag or liner damage is visible but coffee may still be salvageable</td>
              <td className='p-3'>Do not destroy evidence while fixing packaging</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Arbitration</td>
              <td className='p-3'>Commercial settlement fails and the evidence is strong</td>
              <td className='p-3'>Only proceed if the contract, timeline, and preserved samples support it</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        A good rule is this: if the claim is moderate and the exporter engages constructively, negotiate. If the value loss is material and the exporter disputes verified evidence, move toward the named rulebook in your contract. U.S.-oriented contracts commonly point buyers toward Green Coffee Association processes, while many European contracts rely on the European Standard Contract for Coffee framework.
      </p>

      <h3 id='contract-clauses' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineScale className='text-amber-600 flex-shrink-0' />
        Contract Clauses That Prevent Weak Claims
      </h3>

      <p className='my-4'>
        The best claim management starts before shipment. If your contract is vague, your evidence has to work harder. If the contract clearly states the reference sample, physical tolerances, claim window, and neutral process, most disputes narrow quickly to facts rather than interpretation. For the larger commercial structure behind these clauses, see our <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee contracts and payment terms guide</Link>.
      </p>

      <div className='bg-amber-50 border border-amber-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Clauses worth insisting on</h4>
        <ul className='space-y-2 text-sm text-gray-700'>
          <li><strong>Reference sample:</strong> identify the final approved PSS as the comparison standard</li>
          <li><strong>Retention:</strong> require both parties to keep sealed retained samples</li>
          <li><strong>Notice window:</strong> define how quickly provisional and final claim notice must be sent</li>
          <li><strong>Physical tolerances:</strong> moisture, water activity, grade, screen, and packaging requirements</li>
          <li><strong>Sensory tolerance:</strong> define whether cup score or profile variance is acceptable and by how much</li>
          <li><strong>Neutral procedure:</strong> name acceptable independent inspectors or labs before shipment</li>
          <li><strong>Transit protection:</strong> specify liners, packaging, and freight handling expectations where relevant</li>
        </ul>
      </div>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <p className='font-bold mb-2'>The clause buyers forget most often</p>
        <p className='text-sm text-gray-700'>
          The list of mutually acceptable neutral parties. Buyers often remember to write moisture and defect tolerances but forget to agree how a dispute will be verified. That omission creates delay exactly when time matters most.
        </p>
      </div>

      <h3 id='ethiopia-specific-risks' className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineTruck className='text-amber-600 flex-shrink-0' />
        Ethiopia-Specific Risk Points Importers Should Watch
      </h3>

      <p className='my-4'>
        Ethiopian coffee claims follow the same commercial logic as other origins, but the operating context adds a few patterns importers should understand. Many of them sit between origin handling and freight exposure rather than inside the roast lab.
      </p>

      <div className='space-y-4 my-6'>
        <div className='flex items-start gap-3'>
          <HiOutlineCheckCircle className='text-green-600 mt-1 flex-shrink-0' />
          <p className='text-sm text-gray-700'><strong>Stock-lot discipline in Addis matters.</strong> Offer or stock-lot samples can be reliable, but the final claim reference should still be the actual pre-shipment lot after milling and export preparation.</p>
        </div>
        <div className='flex items-start gap-3'>
          <HiOutlineCheckCircle className='text-green-600 mt-1 flex-shrink-0' />
          <p className='text-sm text-gray-700'><strong>Djibouti transit remains a real exposure point.</strong> Long dwell times, route disruption, and climate swings make arrival documentation especially important for washed Ethiopian coffees with delicate cup character.</p>
        </div>
        <div className='flex items-start gap-3'>
          <HiOutlineCheckCircle className='text-green-600 mt-1 flex-shrink-0' />
          <p className='text-sm text-gray-700'><strong>Washed coffees often show transit damage sooner.</strong> A floral washed lot may lose value faster than a dense natural lot under heat or moisture stress, which is why <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline font-bold'>freight protection</Link> is not optional for premium shipments.</p>
        </div>
        <div className='flex items-start gap-3'>
          <HiOutlineCheckCircle className='text-green-600 mt-1 flex-shrink-0' />
          <p className='text-sm text-gray-700'><strong>FOB risk transfer should not be misunderstood.</strong> Buyers often arrange freight under FOB Djibouti, but still expect the seller to help resolve claims when the evidence is clear. Commercial responsibility and legal risk transfer are related, but they are not always handled the same way in practice.</p>
        </div>
      </div>

      <p className='my-4'>
        Importers also benefit from working with an origin-connected exporter who keeps lot-level records, retained samples, and warehouse data organized. That does not eliminate claims. It does make them easier to resolve without turning every disagreement into a formal dispute.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Reduce Claim Risk Before the Coffee Ships</h4>
        <p className='my-2'>
          At <span className='font-bold'>Ethio Coffee Import and Export PLC</span>, we help buyers align lot approval, pre-shipment sampling, moisture documentation, and shipment preparation before a container leaves origin. That reduces the number of disputes that ever need to become claims.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Our Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Request Samples / Contact Us</Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>How to Order</Link>
        </div>
      </div>

      <section id='faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2'>
          <HiOutlineQuestionMarkCircle className='text-amber-600 flex-shrink-0' />
          Frequently Asked Questions
        </h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is a green coffee quality claim?</h4>
            <p className='text-sm text-gray-600'>A green coffee quality claim is a formal request for compensation or remedy when the delivered lot materially differs from the approved pre-shipment sample or contracted quality specifications. The strongest claims include physical data, sensory comparison, timing records, and preserved samples.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How different can an arrival sample be from the pre-shipment sample?</h4>
            <p className='text-sm text-gray-600'>Minor drift is normal in transit. A claim becomes more credible when the difference exceeds the tolerance written into the contract, or when the lot shows new defects, unsafe moisture drift, obvious transit damage, or a meaningful sensory loss against the retained PSS reference.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How quickly should I notify the exporter?</h4>
            <p className='text-sm text-gray-600'>As quickly as the issue is discovered, ideally during the first intake cycle after arrival. Commercial rulebooks and contracts often measure notice windows in days rather than weeks, so provisional notice should go out before the evidence trail gets weaker or the lot is moved.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What evidence matters most in a coffee quality dispute?</h4>
            <p className='text-sm text-gray-600'>The most persuasive combination is a retained PSS reference, representative arrival samples, clear moisture and water activity data, side-by-side cupping notes, photos of condition issues, and a clean chain of custody. A neutral inspection becomes valuable when the claim size is material or the seller disputes your internal findings.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Can moisture above 12% justify a claim?</h4>
            <p className='text-sm text-gray-600'>It can, especially if the contract sets a tighter limit or if elevated moisture is paired with high water activity, visible condensation, mold risk, or sensory damage. The contract wording controls the case, but unsafe or unstable arrival condition is much easier to defend when the readings are documented immediately.</p>
          </div>
        </div>
      </section>

      <h3 className='text-3xl font-extrabold mt-12 mb-6'>Conclusion: Green Coffee Quality Claims Depend on Speed and Proof</h3>
      <p className='my-4'>
        Strong green coffee quality claims are built before they are argued. The buyer who retains the right sample, tests immediately on arrival, documents the lot carefully, and notifies the seller within the agreed window usually has room to resolve the issue commercially. The buyer who waits, samples loosely, or relies on opinion instead of comparison usually ends up negotiating from a weaker position.
      </p>
      <p className='my-4'>
        For Ethiopian coffee specifically, the best outcome is prevention: align the contract, match the pre-shipment lot properly, protect the cargo in transit, and keep intake discipline tight at destination. When a deviation still happens, a clean claim file protects margin without turning a normal trade relationship into a preventable dispute.
      </p>

      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <p className='font-bold text-sm uppercase tracking-wide text-gray-700 mb-3'>Claim Evidence and QC</p>
            <ul className='list-disc ml-5 space-y-2 text-sm'>
              <li><Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline font-semibold'>How to Cup and Evaluate Ethiopian Coffee Samples</Link></li>
              <li><Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline font-semibold'>Green Coffee Quality Control and Defects Grading</Link></li>
              <li><Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline font-semibold'>Green Coffee Moisture and Water Activity Guide</Link></li>
              <li><Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline font-semibold'>Green Coffee Packaging and Bag Types Guide</Link></li>
            </ul>
          </div>
          <div>
            <p className='font-bold text-sm uppercase tracking-wide text-gray-700 mb-3'>Contracts, Freight, and Arrival</p>
            <ul className='list-disc ml-5 space-y-2 text-sm'>
              <li><Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline font-semibold'>Ethiopian Coffee Contracts and Payment Terms</Link></li>
              <li><Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline font-semibold'>Specialty Coffee Storage and Freight Logistics</Link></li>
              <li><Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline font-semibold'>Ethiopian Coffee Export Process Buyer&apos;s Guide</Link></li>
              <li><Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline font-semibold'>Ethiopian Coffee Landed Cost Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> This guide to green coffee quality claims is written by Ethio Coffee Import and Export PLC. Claim windows, neutral inspection procedures, allowance practices, and final remedies vary by shipment and governing contract terms. Contact us for current lot documentation, retained-sample support, and buyer guidance before a dispute escalates.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>Published: {date}</p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}
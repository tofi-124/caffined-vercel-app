import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineBeaker,
  HiOutlineCheckCircle,
  HiOutlineClipboardDocumentList,
  HiOutlineClock,
  HiOutlineDocumentText,
  HiOutlineExclamationTriangle,
  HiOutlineLightBulb,
  HiOutlineQuestionMarkCircle,
  HiOutlineScale,
  HiOutlineShieldCheck,
  HiOutlineTruck,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopianCoffeeSampleApprovalGuide({ title, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>{title}</h1>

      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Ethiopian Coffee Sample Approval Guide for Offer, Pre-Shipment, and Arrival Workflow
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2 text-sm text-gray-500'>
          Green coffee sample review is where lot selection becomes shipment approval. A disciplined workflow reduces surprises between Addis Ababa and arrival warehouse.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md bg-gray-200'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Importer reviewing Ethiopian green coffee samples before shipment approval'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Sample Approval / Green Coffee Buying / Contract Execution / Importer Resources</span>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-500 flex-shrink-0' />
          Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Ethiopian coffee sample approval works best as three linked checkpoints: offer sample for selection, pre-shipment sample for shipment authorization, and arrival sample for verification. Approve against written criteria, retain a sealed reference split, keep roast and cupping conditions consistent, and respond fast enough that any mismatch can still be traced to milling, transit, or storage.
        </p>
      </div>

      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#meaning' className='text-amber-700 hover:underline'>1. What sample approval actually means</a></li>
          <li><a href='#workflow' className='text-amber-700 hover:underline'>2. The three-stage approval workflow</a></li>
          <li><a href='#approval-sheet' className='text-amber-700 hover:underline'>3. What every approval sheet should include</a></li>
          <li><a href='#offer-samples' className='text-amber-700 hover:underline'>4. How to evaluate offer samples</a></li>
          <li><a href='#pss' className='text-amber-700 hover:underline'>5. How to approve a pre-shipment sample</a></li>
          <li><a href='#arrival' className='text-amber-700 hover:underline'>6. How to verify the arrival sample</a></li>
          <li><a href='#failure-points' className='text-amber-700 hover:underline'>7. Failure points that break the process</a></li>
          <li><a href='#contract-language' className='text-amber-700 hover:underline'>8. Contract and communication language that helps</a></li>
          <li><a href='#ethiopia-specific' className='text-amber-700 hover:underline'>9. Ethiopia-specific considerations</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>10. FAQ</a></li>
        </ol>
      </div>

      <p className='my-4 text-lg leading-relaxed'>
        Many importers treat sample approval as a quick cupping exercise. That is usually too narrow. When you buy Ethiopian coffee, the real task is to connect one sample to one shippable lot, define what counts as acceptance, and preserve enough evidence that you can separate normal drift from a real commercial problem.
      </p>

      <p className='my-4 text-lg leading-relaxed'>
        That is why this guide focuses on operating procedure rather than on cupping basics alone. If you need a detailed sensory method, use our <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee cupping guide</Link>. If a landed lot no longer matches the approved reference, use our <Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline font-bold'>green coffee quality claims guide</Link>. Here, the goal is simpler: build a repeatable approval system that prevents weak contracts and avoidable arrival disputes.
      </p>

      <p className='my-4 text-lg leading-relaxed'>
        The best competitor pages mostly stop at sample definitions, roasting technique, or glossary-level explanations. The missing piece is a buyer-side workflow that connects offer sample, PSS, retained reference, approval response, packaging, and arrival verification in one chain. That gap matters most in Ethiopia, where lot freshness, dry milling, warehouse handling, and exporter communication all affect what finally gets loaded into the container.
      </p>

      <h3 id='meaning' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='text-amber-600 flex-shrink-0' />
        What Sample Approval Actually Means
      </h3>

      <p className='my-4'>
        Sample approval is not one yes-or-no moment. It is a chain of decisions tied to different levels of certainty. Early samples help you decide whether a coffee is worth pursuing. A final pre-shipment sample determines whether the actual export lot should move. Arrival verification confirms whether the shipped coffee stayed within the agreed range.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Sample type</th>
              <th className='p-3 text-left font-bold'>When it appears</th>
              <th className='p-3 text-left font-bold'>What decision it supports</th>
              <th className='p-3 text-left font-bold'>What it cannot prove</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Type or benchmark sample</td>
              <td className='p-3'>Before the exact lot is fixed</td>
              <td className='p-3'>Whether a profile is worth following up</td>
              <td className='p-3'>That the final export lot will match it</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Offer or stock-lot sample</td>
              <td className='p-3'>When sellable coffee is available</td>
              <td className='p-3'>Whether to negotiate price, terms, and volume</td>
              <td className='p-3'>That the bagged lot after final milling will be identical</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Pre-shipment sample (PSS)</td>
              <td className='p-3'>After milling and before loading</td>
              <td className='p-3'>Whether the exporter may ship the actual lot</td>
              <td className='p-3'>How the coffee will age in transit</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold'>Arrival sample</td>
              <td className='p-3'>After delivery to the destination side</td>
              <td className='p-3'>Whether the lot stayed within agreed tolerance</td>
              <td className='p-3'>Whether a weak approval process can be repaired after the fact</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <p className='font-bold mb-2'>Practical rule</p>
        <p className='text-sm text-gray-700'>
          Do not use an early sample to authorize shipment. A contract can begin with an offer sample, but the go-ahead to load a container should rest on a PSS drawn from the final export lot. If that distinction is blurred, many later arguments become impossible to resolve cleanly.
        </p>
      </div>

      <h3 id='workflow' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineClock className='text-amber-600 flex-shrink-0' />
        The Three-Stage Approval Workflow
      </h3>

      <p className='my-4'>
        Good buyers separate selection, shipment authorization, and landed verification. Each stage has a different question, a different response time, and a different standard of evidence.
      </p>

      <div className='space-y-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold text-lg mb-2'>Stage 1: Select the coffee</h4>
          <p className='text-sm text-gray-700'>
            Cup offer or stock-lot samples to decide whether a lot fits your menu, price band, and risk tolerance. This stage answers: should we move forward at all?
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold text-lg mb-2'>Stage 2: Approve the shipped lot</h4>
          <p className='text-sm text-gray-700'>
            Review the PSS, lot identifiers, and supporting data after final milling and before container sealing. This stage answers: may this exact lot be shipped under this contract?
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold text-lg mb-2'>Stage 3: Verify the landed lot</h4>
          <p className='text-sm text-gray-700'>
            Cup the arrival sample against the retained PSS and confirm that the landed coffee stayed within the agreed physical and sensory range. This stage answers: did the shipment perform as sold?
          </p>
        </div>
      </div>

      <p className='my-4'>
        Keeping these stages separate changes how you communicate with exporters. Your messages become clearer: one message to shortlist or reject offers, one message to authorize shipment, and one message to confirm arrival condition. That structure is faster and much safer than mixing sensory comments, commercial preferences, and shipment approval in the same email thread.
      </p>

      <h3 id='approval-sheet' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineDocumentText className='text-amber-600 flex-shrink-0' />
        What Every Approval Sheet Should Include
      </h3>

      <p className='my-4'>
        The best approval systems are boring on purpose. They force every lot through the same fields so a buyer can compare samples across regions, harvest moments, and exporters without relying on memory.
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-3'>Lot identity</h4>
          <ul className='space-y-2 text-sm text-gray-700'>
            <li>Lot code or bag marks</li>
            <li>Origin, station, cooperative, or supplier name</li>
            <li>Process, crop year, and grade</li>
            <li>Bag type, liner spec, and target shipment window</li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-3'>Physical checks</h4>
          <ul className='space-y-2 text-sm text-gray-700'>
            <li>Moisture and water activity, if available</li>
            <li>Screen range and general uniformity</li>
            <li>Defect notes and visible odor concerns</li>
            <li>Sample condition on receipt and packaging quality</li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-3'>Sensory checks</h4>
          <ul className='space-y-2 text-sm text-gray-700'>
            <li>Core descriptors you expect to preserve</li>
            <li>Role on the menu: single origin, blend, espresso, filter</li>
            <li>Minimum acceptable quality or score band</li>
            <li>Key deal-breakers such as ferment, phenolic, or baggy notes</li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-3'>Decision record</h4>
          <ul className='space-y-2 text-sm text-gray-700'>
            <li>Approved, approved with conditions, or rejected</li>
            <li>Date cupped, roast date, and internal evaluator</li>
            <li>Response deadline sent to exporter</li>
            <li>Whether a sealed reference split was retained</li>
          </ul>
        </div>
      </div>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <p className='font-bold mb-2'>What to send back to the exporter</p>
        <p className='text-sm text-gray-700'>
          Do not respond with only “approved” or “not approved.” Send the lot code, sample type, roast date, your acceptance or rejection, two or three key reasons, and any conditions attached to shipment. Clear feedback makes later disputes far easier to untangle.
        </p>
      </div>

      <h3 id='offer-samples' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='text-amber-600 flex-shrink-0' />
        How to Evaluate Offer Samples
      </h3>

      <p className='my-4'>
        Offer samples are where you decide whether a lot deserves attention, not where you give final loading authority. In Ethiopia, these may be called stock-lot samples when the coffee is already sitting in Addis Ababa warehouses and available for sale. They are commercially useful because they let you shortlist quickly, compare multiple suppliers, and negotiate terms based on a real lot rather than a purely theoretical profile.
      </p>

      <p className='my-4'>
        What should you test at this stage? Focus on fit, not perfection. Ask whether the coffee belongs in your program, whether the exporter&apos;s description is credible, and whether the lot is stable enough to justify contract work. If you are buying for espresso, judge structure and sweetness, not only floral complexity. If you are buying for filter, judge clarity and aromatic precision, not only body.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3'>Use offer samples to answer five questions</h4>
        <ul className='space-y-2 text-sm text-gray-700'>
          <li><span className='font-semibold'>Does the profile fit the intended use?</span> Judge the coffee by its job, not by abstract beauty alone.</li>
          <li><span className='font-semibold'>Is the exporter&apos;s lot information precise?</span> Vague sample labels usually predict vague post-sale communication.</li>
          <li><span className='font-semibold'>Are the physical indicators stable?</span> Moisture, odor, and overall cleanliness still matter before contract work begins.</li>
          <li><span className='font-semibold'>Is the price justified?</span> A good coffee at the wrong price is still a bad buy.</li>
          <li><span className='font-semibold'>Would you want to see the final milled lot?</span> If the answer is no, stop here rather than forcing the deal forward.</li>
        </ul>
      </div>

      <p className='my-4'>
        One common mistake is approving an Ethiopian lot emotionally because the offer sample feels exciting in the cup. Early crop samples can still evolve as moisture stabilizes, especially with fresh naturals and recently milled coffees. That is why a good importer treats the offer sample as a selection gate, then waits for the PSS before granting shipment approval.
      </p>

      <h3 id='pss' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineShieldCheck className='text-amber-600 flex-shrink-0' />
        How to Approve a Pre-Shipment Sample
      </h3>

      <p className='my-4'>
        The PSS is the commercial point of no return. Once you authorize shipment, you are effectively saying that the final lot, as prepared for export, is acceptable under the contract. That is why the PSS must be tied to the final bagged lot and why both sides should keep a retained split.
      </p>

      <p className='my-4'>
        A strong PSS process combines four things: representative sampling, physical review, controlled cupping, and a written go-or-no-go response. If one of those is missing, the approval trail gets weak fast.
      </p>

      <div className='space-y-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>1. Confirm what the PSS represents</h4>
          <p className='text-sm text-gray-700'>
            The sample should come from the actual export lot after final milling and lot preparation, not from an earlier warehouse approximation. Bag marks, packaging spec, and lot sheet should align with the sample you receive.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>2. Review the sample as received</h4>
          <p className='text-sm text-gray-700'>
            Check the label, package integrity, odor, and whether the sample arrived in a way that preserves the cup profile. Vacuum-sealed foil and air freight are far safer than loosely packed green samples that drift during transit.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>3. Cup under controlled conditions</h4>
          <p className='text-sm text-gray-700'>
            Keep roast approach, water, and note-taking consistent with your offer-sample evaluation. The purpose here is comparison, not experimentation.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>4. Retain and record</h4>
          <p className='text-sm text-gray-700'>
            Seal and store a reference split, record the exact decision date, and send a clear written response. If the lot is approved conditionally, the conditions must be explicit.
          </p>
        </div>
      </div>

      <div className='bg-amber-50 border border-amber-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Recommended PSS response timing</h4>
        <p className='text-sm text-gray-700'>
          Most buyers should cup and respond as soon as the PSS arrives, ideally before storage delay or booking changes introduce new variables. Fast responses reduce warehouse delay, keep accountability clear, and make it easier to trace any mismatch back to milling, packing, or transit while the evidence is still fresh.
        </p>
      </div>

      <p className='my-4'>
        If the PSS is close but not quite right, do not hide the ambiguity. State whether you are rejecting, asking for replacement, requesting a second sample, or approving only if a specific issue is corrected. Ambiguous feedback often turns into ambiguous claims later.
      </p>

      <h3 id='arrival' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTruck className='text-amber-600 flex-shrink-0' />
        How to Verify the Arrival Sample
      </h3>

      <p className='my-4'>
        Arrival verification is not a second chance to choose a coffee you already bought. It is a check that the landed lot stayed within reasonable physical and sensory tolerance of the PSS you approved. The fastest way to weaken this step is to compare the arrival sample against memory rather than against a retained reference split.
      </p>

      <div className='grid md:grid-cols-3 gap-4 my-6'>
        <div className='bg-green-50 p-5 rounded-lg border border-green-300'>
          <h4 className='font-bold text-center mb-2'>Green Light</h4>
          <ul className='space-y-1 text-xs text-gray-700'>
            <li>Core descriptors still hold</li>
            <li>No new defect pattern appears</li>
            <li>Physical condition is consistent</li>
            <li>Normal transit drift only</li>
          </ul>
        </div>
        <div className='bg-yellow-50 p-5 rounded-lg border border-yellow-300'>
          <h4 className='font-bold text-center mb-2'>Amber</h4>
          <ul className='space-y-1 text-xs text-gray-700'>
            <li>Small sensory drop or muted intensity</li>
            <li>Need more data on moisture or packaging</li>
            <li>Requires fast discussion with exporter</li>
            <li>Hold the lot until clarified</li>
          </ul>
        </div>
        <div className='bg-red-50 p-5 rounded-lg border border-red-300'>
          <h4 className='font-bold text-center mb-2'>Red</h4>
          <ul className='space-y-1 text-xs text-gray-700'>
            <li>Clear mismatch versus retained PSS</li>
            <li>New defects or condition damage</li>
            <li>Lot identity or bag-mark problem</li>
            <li>Move immediately into claim discipline</li>
          </ul>
        </div>
      </div>

      <p className='my-4'>
        Your first comparison should be simple: same roast logic, same water, same day, retained PSS beside the arrival sample. If the mismatch is obvious, document it immediately. If it is subtle, add physical data before escalating. The purpose of this stage is to isolate whether the issue is normal aging, transit exposure, packaging failure, or a more serious lot mismatch.
      </p>

      <p className='my-4'>
        When the arrival check crosses into a formal dispute, do not reinvent the process. Move into a defined evidence workflow using our <Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline font-bold'>quality claims guide</Link> and the contract framework you agreed up front.
      </p>

      <h3 id='failure-points' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineExclamationTriangle className='text-amber-600 flex-shrink-0' />
        Failure Points That Break the Process
      </h3>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Approving on the wrong sample</h4>
          <p className='text-sm text-gray-700'>
            The buyer approves a type or early offer sample and treats it like a PSS. That turns later mismatch into an argument about expectations rather than evidence.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Changing the cup protocol midstream</h4>
          <p className='text-sm text-gray-700'>
            If the roast or water changes materially between stages, you may end up measuring your own process variation instead of the coffee.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>No retained reference split</h4>
          <p className='text-sm text-gray-700'>
            Without a sealed retained sample, many arrival conversations become subjective on day one.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Weak sample labeling</h4>
          <p className='text-sm text-gray-700'>
            Missing lot codes, unclear station names, or vague exporter notes make chain-of-custody problems much harder to prove.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Slow approval response</h4>
          <p className='text-sm text-gray-700'>
            Delayed decisions can force rushed shipping, missed container bookings, or unclear responsibility for storage drift.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>No packaging clause for samples</h4>
          <p className='text-sm text-gray-700'>
            A poorly packed sample can drift before you cup it, which compromises the fairness of the whole process.
          </p>
        </div>
      </div>

      <h3 id='contract-language' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineDocumentText className='text-amber-600 flex-shrink-0' />
        Contract and Communication Language That Helps
      </h3>

      <p className='my-4'>
        Your sample program is only as strong as the language around it. The broader legal framework may follow <a href='https://www.greencoffeeassociation.org/professional-resources/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>GCA resources</a> in the United States or the <a href='https://www.ecf-coffee.org/category/publications/contracts/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>European Standard Contract for Coffee</a> in Europe, but the daily operational protection comes from plain, specific wording between buyer and seller.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3'>Useful clauses to include</h4>
        <ul className='space-y-2 text-sm text-gray-700'>
          <li>The exporter will submit a pre-shipment sample from the final export lot before loading.</li>
          <li>The buyer will respond within an agreed window after receipt of the PSS.</li>
          <li>Both parties will retain sealed reference samples from the approved PSS.</li>
          <li>The lot shipped will match the approved bag marks, packaging specification, and quality parameters stated in the contract.</li>
          <li>Arrival concerns will be compared against the retained reference and handled under the contract&apos;s dispute framework.</li>
        </ul>
      </div>

      <p className='my-4'>
        Keep the approval message equally precise. Refer to the lot by code, say whether the approval is full or conditional, and record the exact basis for rejection when relevant. This is simple discipline, but it saves enormous time later.
      </p>

      <h3 id='ethiopia-specific' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCheckCircle className='text-amber-600 flex-shrink-0' />
        Ethiopia-Specific Considerations
      </h3>

      <p className='my-4'>
        Ethiopia adds a few wrinkles that importers should build into their approval workflow. First, sample names can shift by channel: what some sellers call an offer sample may function like a stock-lot sample in Addis. Second, final dry milling matters because size sorting, defect removal, and lot separation affect whether the PSS truly matches the coffee that ships. Third, naturals and fresh crop lots can evolve quickly enough that disciplined re-cupping matters.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>For Ethiopian buying programs, pay extra attention to:</h4>
        <ul className='space-y-2 text-sm text-gray-700'>
          <li><span className='font-semibold'>Sample terminology:</span> clarify whether the sample is type, offer, stock-lot, or final PSS.</li>
          <li><span className='font-semibold'>Dry milling stage:</span> confirm the PSS comes after final preparation of the export lot.</li>
          <li><span className='font-semibold'>Bag marks and traceability:</span> connect the sample to the exact shipped identifiers.</li>
          <li><span className='font-semibold'>Natural-lot stability:</span> cup quickly and consistently, especially on fruit-forward lots.</li>
          <li><span className='font-semibold'>Sample packaging:</span> use the packaging standards from our <Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline font-bold'>green coffee packaging guide</Link> so the sample reaches you in fair condition.</li>
        </ul>
      </div>

      <p className='my-4'>
        If you want the exporter-side view of how PSS fits into the preparation chain, read our <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='text-amber-700 hover:underline font-bold'>dry milling and export guide</Link>. If you want the commercial framework surrounding payment, Incoterms, and dispute rules, read our <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline font-bold'>contracts and payment terms guide</Link>. The article you are reading sits between those two surfaces: it is the buyer operating system that connects them.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Build a Repeatable Approval SOP Before Your Next Container</h4>
        <p className='my-2 text-sm'>
          This Ethiopian coffee sample approval guide helps buyers structure sample programs around real lots, not vague promises. We provide offer samples, final pre-shipment samples, lot documentation, and clear communication so approvals are fast, documented, and commercially usable.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Current Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Request Samples</Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Review Ordering Steps</Link>
        </div>
      </div>

      <section id='faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2'>
          <HiOutlineQuestionMarkCircle className='text-amber-600 flex-shrink-0' />
          Frequently Asked Questions
        </h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the difference between an offer sample and a pre-shipment sample?</h4>
            <p className='text-sm text-gray-600'>
              An offer sample helps you decide whether a lot deserves negotiation, pricing work, or a contract. A pre-shipment sample is the final approval sample tied to the export lot after preparation. The first supports selection; the second supports shipment authorization under the contract.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Should both buyer and seller retain the approved sample?</h4>
            <p className='text-sm text-gray-600'>
              Both sides should retain a sealed reference split because memory is a weak comparison tool once coffee lands. The retained sample gives buyer and seller the same physical point of reference when they cup the arrival lot, review packaging issues, or decide whether a mismatch is commercial or transit-related.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Can I skip the PSS if the offer sample was excellent?</h4>
            <p className='text-sm text-gray-600'>
              You can, but it weakens your position at exactly the stage where evidence matters most. An excellent offer sample does not prove that the final milled export lot matches it. Skipping the PSS removes the last clean checkpoint before loading and makes later quality disputes harder to resolve.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What makes a coffee sample representative?</h4>
            <p className='text-sm text-gray-600'>
              A representative sample must come from the lot it claims to represent, be drawn after the relevant preparation stage, and match the identifiers used in the contract or lot sheet. It also needs to reach the buyer in sound condition so the cup reflects the coffee, not damaged sample handling.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What if the arrival sample does not match the retained PSS?</h4>
            <p className='text-sm text-gray-600'>
              Hold the lot, compare the arrival sample against the retained PSS under the same roast and cupping conditions, and document both physical and sensory differences immediately. If the gap is material, move into the contract claim workflow with lot IDs, sample records, and photos while the evidence is still fresh.
            </p>
          </div>
        </div>
      </section>

      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Evaluation and Quality</h4>
            <ul className='space-y-1 text-sm'>
              <li><Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup and Evaluate Ethiopian Coffee Samples</Link></li>
              <li><Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline'>Green Coffee Quality Claims Guide</Link></li>
              <li><Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline'>Green Coffee Moisture and Water Activity Guide</Link></li>
              <li><Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline'>Green Coffee Shelf Life and Storage Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Contracts and Execution</h4>
            <ul className='space-y-1 text-sm'>
              <li><Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts and Payment Terms Guide</Link></li>
              <li><Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Dry Milling Export Guide</Link></li>
              <li><Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline'>Green Coffee Packaging and Bag Types Guide</Link></li>
              <li><Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process Buyer&apos;s Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='my-10 text-sm text-gray-600'>
        <p>
          <span className='font-bold'>About This Insight:</span> This Ethiopian coffee sample approval guide was prepared by Ethio Coffee Import and Export PLC for importers, roasters, and green buyers building a documented approval workflow. For current lots, sample availability, and shipment timelines, contact our Addis Ababa team directly.
        </p>
      </div>

      <div className='mb-10 text-sm text-gray-500'>
        <Link href='/insights' className='underline'>All Insights</Link> &middot; <Link href='/ethiopian-coffee-exporter' className='underline'>Export Services</Link> &middot; <Link href='/about' className='underline'>About</Link> &middot; <Link href='/contact-us' className='underline'>Contact</Link>
      </div>
    </>
  )
}
import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { HiOutlineGlobeAlt, HiOutlineChartBar, HiOutlineBeaker, HiOutlineBuildingLibrary, HiOutlineUserGroup, HiOutlineLightBulb, HiOutlineClipboardDocumentList, HiOutlineQuestionMarkCircle } from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function BestCuppingSchoolWorld({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        From Q Grader certification to sensory science: A definitive global guide to the world&apos;s premier coffee cupping schools and sensory academies
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Professional triangulation testing at a Premier Training Campus is the gold standard for sensory calibration
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Global coffee cupping school sensory analysis training Q grader certification class'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Professional Education / Global Coffee Industry / Sensory Science</span>
      </div>
      
      <p className='my-4'>
        In the modern coffee industry, "tasting" has evolved from a subjective art into a rigorous, calibrated science. For professionals seeking to advance their careers, attending a top-tier <span className='font-bold'>cupping school</span> is no longer optional; it is a strategic necessity. For green buyers managing million-dollar contracts and head roasters defining a brand&apos;s flavor signature, the ability to objectively quantify quality is the currency of the trade.
      </p>

      <p className='my-4'>
        This comprehensive guide analyzes the world&apos;s most prestigious sensory training institutions. We move beyond basic workshops to identify the "Ivy League" of coffee education: academies that offer <a href="https://www.coffeeinstitute.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Q Grader certification</a>, scientific sensory research, and direct access to industry legends.
      </p>

      {/* FURTHER READING / AUTHORITATIVE LINKS */}
      <div className='my-4 text-sm text-gray-700'>
        <p className='font-semibold mb-1'>Further reading:</p>
        <ul className='list-disc ml-5 space-y-1'>
          <li>
            <a href='https://www.coffeeinstitute.org/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>Coffee Quality Institute (CQI)</a> - manages the Q Grader certification program and global quality standards.
          </li>
          <li>
            <a href='https://education.sca.coffee/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>SCA Coffee Skills Program</a> - modular education system including the Sensory Skills pathway.
          </li>
          <li>
            <a href='https://allianceforcoffeeexcellence.org/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>Alliance for Coffee Excellence (ACE)</a> - Cup of Excellence competitions and Sensory Educational Training courses.
          </li>
        </ul>
      </div>

      {/* KEY TAKEAWAY BOX */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />
          Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          The two credentials that matter most for green coffee professionals are the <strong>SCA Sensory Skills diploma</strong> (ideal for roasters and baristas building a career) and the <strong>CQI Q Grader license</strong> (the standard for traders, exporters, and quality control managers). With the global specialty coffee market projected to reach $152.69 billion by 2030, these certifications have become de facto prerequisites for high-level buying and QC positions. The school you choose should align with your specific career path: scientific rigor, commercial trading networks, or competition-level calibration.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='bg-gray-50 p-6 rounded-lg my-8 border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          What This Guide Covers
        </h3>
        <div className='grid md:grid-cols-2 gap-x-8 gap-y-2'>
          <div>
            <p className='font-bold text-sm mb-2'>Schools & Credentials</p>
            <ul className='space-y-1.5 text-sm'>
              <li><a href="#accrediting-bodies" className='text-amber-700 hover:underline'>The &quot;Big Two&quot; Accrediting Bodies</a></li>
              <li><a href="#top-schools" className='text-amber-700 hover:underline'>Top Tier: The World&apos;s Best Cupping Schools</a></li>
              <li><a href="#curriculum" className='text-amber-700 hover:underline'>Anatomy of a World-Class Curriculum</a></li>
            </ul>
          </div>
          <div>
            <p className='font-bold text-sm mb-2'>Practical Decisions</p>
            <ul className='space-y-1.5 text-sm'>
              <li><a href="#hybrid-model" className='text-amber-700 hover:underline'>Online vs. In-Person: The New Hybrid Model</a></li>
              <li><a href="#roi" className='text-amber-700 hover:underline'>Strategic ROI: Is it Worth the Investment?</a></li>
              <li><a href="#choosing-school" className='text-amber-700 hover:underline'>Which Cupping School Is Right for You?</a></li>
              <li><a href="#faq" className='text-amber-700 hover:underline'>Frequently Asked Questions</a></li>
            </ul>
          </div>
        </div>
      </div>

      <h3 id="accrediting-bodies" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBuildingLibrary className='text-amber-600 flex-shrink-0' />
        The "Big Two" Accrediting Bodies
      </h3>
      
      <p className='my-4'>
        Before choosing a school, it is critical to understand the two primary organizations that set the global standards for sensory education. The best schools in the world are invariably accredited by one or both of these entities.
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-6'>
        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2 text-dark'>SCA (Specialty Coffee Association)</h4>
          <p className='text-sm mb-3'>
            The SCA offers the "Coffee Skills Program," a modular education system. Their <span className='font-semibold'>Sensory Skills</span> module (Foundation, Intermediate, Professional) is ideal for roasters and baristas building a career.
          </p>
          <ul className='text-sm list-disc ml-5 space-y-1'>
            <li><span className='font-bold'>Best for:</span> Career progression, broad knowledge</li>
            <li><span className='font-bold'>Key Credential:</span> SCA Coffee Diploma</li>
            <li><span className='font-bold'>Locations:</span> "Premier Training Campuses" worldwide</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-lg mb-2 text-dark'>CQI (Coffee Quality Institute)</h4>
          <p className='text-sm mb-3'>
            The CQI manages the <span className='font-semibold'>Q Grader</span> program, widely considered the "PhD of Coffee Tasting." It is an intense, 6-day exam-focused course designed for green buyers and exporters.
          </p>
          <ul className='text-sm list-disc ml-5 space-y-1'>
            <li><span className='font-bold'>Best for:</span> Traders, exporters, QC managers</li>
            <li><span className='font-bold'>Key Credential:</span> Q Arabica / Q Robusta Grader</li>
            <li><span className='font-bold'>Locations:</span> Certified Q Venues only</li>
          </ul>
        </div>
      </div>

      <h3 id="top-schools" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineGlobeAlt className='text-amber-600 flex-shrink-0' />
        Top Tier: The World's Best Cupping Schools
      </h3>
      
      <p className='my-4'>
        Based on facility quality, instructor reputation, and alumni success, these are the premier destinations for sensory training globally.
      </p>

      <h4 className='text-2xl font-bold mt-8 mb-4'>
        1. Boot Coffee Campus (San Rafael, California, USA)
      </h4>
      <p className='my-4'>
        Led by industry pioneer <span className='font-bold'>Willem Boot</span>, this campus is the most recognized training ground in North America. Known for its rigorous "Coffee Roasting Lab PRO" and "Evolved Q Grader" courses, Boot Coffee combines Dutch technical precision with American specialty coffee culture.
      </p>
      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Specialty:</span> High-end Geisha evaluation and processing-defect identification.</li>
        <li><span className='font-bold'>Why it's elite:</span> Students gain access to Valerian Hrala and Willem Boot&apos;s direct trade networks, often cupping exclusive experimental lots before they hit the market.</li>
        <li><span className='font-bold'>Website:</span> <a href="https://bootcoffee.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">bootcoffee.com</a></li>
      </ul>

      <h4 className='text-2xl font-bold mt-8 mb-4'>
        2. CoffeeMind (Copenhagen, Denmark)
      </h4>
      <p className='my-4'>
        For those who prefer a scientific, data-driven approach, CoffeeMind is the global leader. Founded by <span className='font-bold'>Morten Münchow</span> and sensory scientist <span className='font-bold'>Ida Steen</span>, this academy focuses on sensory methodology and statistics rather than just protocol.
      </p>
      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Specialty:</span> Sensory science, triangle test statistics, and avoiding cognitive bias in cupping.</li>
        <li><span className='font-bold'>Innovation:</span> They offer specialized "Sensory Training Kits" with chemical references for remote learning.</li>
        <li><span className='font-bold'>Website:</span> <a href="https://coffee-mind.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">coffee-mind.com</a></li>
      </ul>

      <h4 className='text-2xl font-bold mt-8 mb-4'>
        3. London School of Coffee (London, UK)
      </h4>
      <p className='my-4'>
        A staple of the European scene, the LSC is an SCA Premier Training Campus that excels in small-group intensive training. It serves as a hub for the UK&apos;s vibrant specialty market and offers the full diploma track.
      </p>
      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Specialty:</span> Bespoke workshops and "How to Start a Roastery" business integration.</li>
        <li><span className='font-bold'>Key Feature:</span> Their central London location attracts guest instructors from across Europe&apos;s importing houses.</li>
        <li><span className='font-bold'>Website:</span> <a href="https://londonschoolofcoffee.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">londonschoolofcoffee.com</a></li>
      </ul>

      <h4 className='text-2xl font-bold mt-8 mb-4'>
        4. Academy of Coffee Excellence (Williamsburg, VA, USA)
      </h4>
      <p className='my-4'>
        Run by <span className='font-bold'>Todd Arnette</span>, a Q Instructor legend, this school is renowned for its technical depth. It is often the preferred destination for corporate quality control teams seeking calibration.
      </p>
      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Specialty:</span> Green Coffee Grading and physical defect analysis alongside sensory skills.</li>
        <li><span className='font-bold'>Why it's elite:</span> The facility is engineered for neutrality, with specialized lighting and humidity controls to create the perfect cupping environment.</li>
      </ul>

      <h4 className='text-2xl font-bold mt-8 mb-4'>
        5. Cup of Excellence (SET Courses - Global/Roaming)
      </h4>
      <p className='my-4'>
        The <a href="https://allianceforcoffeeexcellence.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Alliance for Coffee Excellence</a> (ACE) runs the prestigious Cup of Excellence competitions. Their "Sensory Educational Training" (SET) courses are unique because they utilize actual COE-winning coffees.
      </p>
      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Specialty:</span> Calibrating to the 87+ point scale and identifying "exemplary" quality.</li>
        <li><span className='font-bold'>Benefit:</span> Taught by actual COE Head Judges, providing insight into the world&apos;s toughest competition standards.</li>
      </ul>

      <h3 id="curriculum" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineBeaker className='text-amber-600 flex-shrink-0' />
        Anatomy of a World-Class Curriculum
      </h3>
      
      <p className='my-4'>
        What distinguishes a "best" school from a standard training center? Top-tier academies move beyond simple tasting and enforce a rigorous curriculum designed to alter your physiological perception.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h5 className='font-bold mb-3 text-lg'>The 4 Pillars of Advanced Sensory Training</h5>
        <div className='space-y-4'>
          <div>
            <h6 className='font-bold text-dark flex items-center'><span className='bg-amber-200 text-amber-800 text-xs px-2 py-1 rounded mr-2'>01</span> Olfactory Calibration (Le Nez du Café)</h6>
            <p className='text-sm mt-1'>
              Students must identify specific enzymatic, sugar browning, and dry distillation scents without visual cues. Elite schools use the 36-scent <i>Le Nez du Café</i> kit to train the nose to detect nuances like "garden peas" (enzymatic) vs "toast" (dry distillation).
            </p>
          </div>
          <div>
            <h6 className='font-bold text-dark flex items-center'><span className='bg-amber-200 text-amber-800 text-xs px-2 py-1 rounded mr-2'>02</span> Organic Acids Isolation</h6>
            <p className='text-sm mt-1'>
              Advanced courses require students to distinguish between different acids spiked into neutral coffee. You will learn to separate the sharp "battery" zing of <strong>Citric Acid</strong> from the lingering, vinegary note of <strong>Acetic Acid</strong> and the dry, friction-like sensation of <strong>Malic Acid</strong>.
            </p>
          </div>
          <div>
            <h6 className='font-bold text-dark flex items-center'><span className='bg-amber-200 text-amber-800 text-xs px-2 py-1 rounded mr-2'>03</span> Triangulation Testing</h6>
            <p className='text-sm mt-1'>
              The ultimate test of focus. In a set of three cups, two are identical and one is different. The difference might be subtle: a change in roast curve or a different day of harvest. This trains speed and confidence in decision-making.
            </p>
          </div>
          <div>
            <h6 className='font-bold text-dark flex items-center'><span className='bg-amber-200 text-amber-800 text-xs px-2 py-1 rounded mr-2'>04</span> Protocol & Mechanics</h6>
            <p className='text-sm mt-1'>
              Mastery of the spoon. Breaking the crust without agitation, skimming foam cleanly, and slurping to spray liquid across the entire palate (retro-nasal olfaction) are drilled until they become muscle memory.
            </p>
          </div>
        </div>
      </div>

      <h3 id="hybrid-model" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineChartBar className='text-amber-600 flex-shrink-0' />
        Online vs. In-Person: The New Hybrid Model
      </h3>
      
      <p className='my-4'>
        Post-pandemic, the sensory education market has shifted. While Q Grader certification requires physical attendance for exams, schools like <span className='font-bold'>CoffeeMind</span> and <span className='font-bold'>Boot Coffee</span> have pioneered hybrid models.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-4'>
          <h5 className='font-bold text-center text-green-700 mb-2'>In-Person Advantage</h5>
          <ul className='text-sm space-y-2 list-disc ml-4'>
            <li><span className='font-semibold'>Calibration:</span> You taste exactly what the instructor tastes.</li>
            <li><span className='font-semibold'>Equipment:</span> Access to $20,000+ worth of grinders, water filtration, and red-light labs.</li>
            <li><span className='font-semibold'>Networking:</span> Classmates are often future trading partners.</li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-4'>
          <h5 className='font-bold text-center text-blue-700 mb-2'>Remote/Kit Advantage</h5>
          <ul className='text-sm space-y-2 list-disc ml-4'>
            <li><span className='font-semibold'>Cost:</span> No travel expenses (flights/hotels).</li>
            <li><span className='font-semibold'>Pacing:</span> Train your palate daily over weeks rather than a 3-day intense burst.</li>
            <li><span className='font-semibold'>FlavorActiv:</span> Use of standardized chemical flavor capsules allows for global calibration.</li>
          </ul>
        </div>
      </div>

      <h3 id="roi" className='text-3xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineUserGroup className='text-amber-600 flex-shrink-0' />
        Strategic ROI: Is it Worth the Investment?
      </h3>
      
      <p className='my-4'>
        Top-tier cupping courses are expensive. A full Q Grader course typically costs between <span className='font-bold'>$2,000 and $2,500 USD</span>, not including travel. However, the ROI for industry professionals is measurable.
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Salary Premium:</span> Certified Q Graders typically command a 20-40% salary premium over non-certified quality control staff.</li>
        <li><span className='font-bold'>Risk Mitigation:</span> For an importer, the ability to spot a "phenolic" defect or "past crop" fade prevents bad contracts. Saving one container from a quality claim pays for the course ten times over.</li>
        <li><span className='font-bold'>Consultancy Rates:</span> Independent sensory consultants charge $500-$1,500 per day for blend development and QC system design.</li>
      </ul>

      <h3 id="choosing-school" className='text-3xl font-extrabold mt-12 mb-6'>
        Which Coffee Cupping School Is Right for You?
      </h3>
      
      <p className='my-4'>
        The "best" cupping school is ultimately the one that aligns with your specific career trajectory.
      </p>
      
      <p className='my-4'>
        If your goal is <strong>scientific rigor and research</strong>, look to <span className='font-bold'>CoffeeMind</span> in Denmark. If you seek <strong>commercial mastery and trading networks</strong>, <span className='font-bold'>Boot Coffee Campus</span> or the <span className='font-bold'>London School of Coffee</span> are unmatched. And if you are ready to prove yourself against the highest global standard, enrolling in a <strong>Q Grader course</strong> at any certified venue is the ultimate rite of passage.
      </p>

      <p className='my-4'>
        Sensory analysis is a journey of constant calibration. The school you choose will provide the map, but your daily practice will determine the destination.
      </p>

      {/* FAQ SECTION */}
      <section id="faq" className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions About Coffee Cupping Schools and Q Grader Certification</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What is the best coffee cupping school in the world?</h4>
            <p className="text-sm text-gray-600">The best cupping school depends on your goals. Boot Coffee Campus in the Netherlands excels in commercial training for traders and importers. CoffeeMind in Denmark leads in scientific sensory research. The London School of Coffee offers strong Q Grader preparation with industry connections.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How much does Q Grader certification cost?</h4>
            <p className="text-sm text-gray-600">Q Grader certification courses typically cost between $2,500 and $4,000 USD depending on the training provider and location. This includes instruction, calibration exercises, and the full suite of CQI exams covering sensory, olfactory, and grading skills.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What is the difference between SCA sensory courses and Q Grader certification?</h4>
            <p className="text-sm text-gray-600">SCA sensory courses (Foundation, Intermediate, Professional) teach cupping skills progressively and can be completed individually. Q Grader certification is a comprehensive CQI credential requiring candidates to pass 22 tests across multiple sensory and grading disciplines in a single session.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Do I need Q Grader certification to import or buy specialty coffee?</h4>
            <p className="text-sm text-gray-600">No, Q Grader certification is not required to buy or import specialty coffee. However, it significantly strengthens your ability to evaluate samples, communicate quality expectations, and negotiate with exporters using a shared professional standard.</p>
          </div>
        </div>
      </section>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Premium Ethiopian Coffee Direct from Origin</h4>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Export PLC</span> connects importers and roasters with traceable Ethiopian specialty lots. Request pre-shipment samples, review current availability across Yirgacheffe, Guji, Sidamo, and other origins, and put your cupping training to work evaluating coffees sourced through our trusted network.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Our Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Request Samples / Contact Us</Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>How to Order</Link>
        </div>
      </div>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality & Evaluation</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup and Evaluate Ethiopian Coffee Samples</Link></li>
              <li>• <Link href='/insights/new-sca-coffee-value-assessment' className='text-amber-700 hover:underline'>New SCA Coffee Value Assessment System</Link></li>
              <li>• <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality Control, Defects, and Grading</Link></li>
              <li>• <Link href='/insights/coffee-is-science-analysis-compounds-evaluation' className='text-amber-700 hover:underline'>Coffee Science: Analysis, Compounds, and Evaluation</Link></li>
              <li>• <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee Processing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing & Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>• <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Complete Guide to Ethiopian Coffee Origins</Link></li>
              <li>• <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and the Ethiopian Coffee Export System</Link></li>
              <li>• <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts and Payment Terms</Link></li>
              <li>• <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Ethiopian Heirloom Coffee Varieties and Landraces</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> This guide to the world&apos;s best cupping schools and sensory training programs is published by Ethio Coffee Export PLC. Course offerings, pricing, and certification requirements change. Contact us or the listed institutions for current information before enrolling.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}
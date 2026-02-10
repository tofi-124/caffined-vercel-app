import Link from 'next/link'
import AutoScrollTo from '../components/AutoScrollTo'
import Testimonials from '../components/Testimonials'

const gradingTable = [
  {
    grade: 'Grade 1',
    defects: '0 – 3',
    cupScore: '85+',
    category: 'Specialty',
    description: 'The highest quality Ethiopian coffee. Exceptionally clean, zero to minimal defects, outstanding cup clarity and complexity. Reserved for the best lots from each origin.',
    typicalOrigins: 'Guji, Sidamo, Yirgacheffe, Harar',
    processing: 'Washed & Natural',
    buyerUse: 'Premium single-origin, competition lots, micro-roastery showcases',
    priceRange: '$10 – $13+/kg FOB',
  },
  {
    grade: 'Grade 2',
    defects: '4 – 12',
    cupScore: '80 – 84',
    category: 'Specialty',
    description: 'High-quality specialty coffee with minor defects. Clean cup with distinct origin character. The most commonly exported specialty grade from Ethiopia.',
    typicalOrigins: 'Yirgacheffe, Limu, Lekempti, Sidamo',
    processing: 'Washed & Natural',
    buyerUse: 'Single-origin offerings, premium blends, specialty roasters',
    priceRange: '$9 – $11/kg FOB',
  },
  {
    grade: 'Grade 3',
    defects: '13 – 25',
    cupScore: '75 – 79',
    category: 'Premium Commercial',
    description: 'Good quality commercial coffee. Noticeable but acceptable defects. Clean cup with recognizable origin characteristics but less complexity than specialty grades.',
    typicalOrigins: 'Limu, Jimma, Lekempti, Sidamo',
    processing: 'Washed & Natural',
    buyerUse: 'High-end blending, commercial single-origin, supermarket specialty',
    priceRange: '$7 – $9/kg FOB',
  },
  {
    grade: 'Grade 4',
    defects: '26 – 45',
    cupScore: '70 – 74',
    category: 'Commercial',
    description: 'Standard commercial-grade coffee with moderate defects. Suitable for blending where Ethiopian character is desired without specialty pricing.',
    typicalOrigins: 'Jimma, Harar, Lekempti',
    processing: 'Natural (primarily)',
    buyerUse: 'Commercial blends, instant coffee, commodity markets',
    priceRange: '$5 – $7/kg FOB',
  },
  {
    grade: 'Grade 5',
    defects: '46 – 100',
    cupScore: 'Below 70',
    category: 'Commercial',
    description: 'The lowest export grade. Higher defect count. Primarily used for large-scale commercial blending and industrial coffee products.',
    typicalOrigins: 'Jimma, various mixed lots',
    processing: 'Natural',
    buyerUse: 'Industrial blending, soluble/instant coffee, price-sensitive markets',
    priceRange: '$3 – $5/kg FOB',
  },
]

const defectTypes = [
  { name: 'Full Black Bean', category: 'Category 1 (Primary)', equivalence: '1 full defect', impact: 'Burnt, carbonized taste. Caused by over-fermentation, drought stress, or insect damage.' },
  { name: 'Full Sour Bean', category: 'Category 1 (Primary)', equivalence: '1 full defect', impact: 'Vinegar-like, fermented taste. Over-fermentation during processing.' },
  { name: 'Foreign Matter', category: 'Category 1 (Primary)', equivalence: '1 full defect', impact: 'Stones, sticks, other non-coffee material. Sorting and processing failures.' },
  { name: 'Broken/Chipped Bean', category: 'Category 2 (Secondary)', equivalence: '5 = 1 defect', impact: 'Uneven roasting. Mechanical damage during hulling or handling.' },
  { name: 'Insect-Damaged Bean', category: 'Category 2 (Secondary)', equivalence: '5 = 1 defect', impact: 'Hollow, light beans with bore holes. Coffee Berry Borer (CBB) is the primary cause.' },
  { name: 'Partial Black/Sour', category: 'Category 2 (Secondary)', equivalence: '3 = 1 defect', impact: 'Partially discolored beans. Less severe than full black/sour but still affects cup quality.' },
  { name: 'Quaker (Unripe)', category: 'Category 2 (Secondary)', equivalence: '5 = 1 defect', impact: 'Peanut-like, grassy flavour. Harvested before full ripeness.' },
  { name: 'Shell/Ear', category: 'Category 2 (Secondary)', equivalence: '5 = 1 defect', impact: 'Malformed beans. Genetic or growing condition issues. Burns quickly during roasting.' },
]

const gradingProcess = [
  { step: '01', title: 'Sample Collection', desc: 'A 300g green coffee sample is drawn from the production lot. The sample must be representative of the entire lot to ensure accurate grading.' },
  { step: '02', title: 'Physical Inspection', desc: 'The 300g sample is hand-sorted on a grading table. Every defective bean is identified, categorized (primary or secondary), and counted against the defect equivalence chart.' },
  { step: '03', title: 'Screen Size Analysis', desc: 'Beans are passed through grading screens to verify size uniformity. Larger, more uniform beans generally indicate better growing conditions and consistent roasting.' },
  { step: '04', title: 'Moisture Testing', desc: 'Moisture content is measured (target: 10-12%). Proper moisture ensures stability during transport and storage. Water activity (aw) is also measured for specialty lots.' },
  { step: '05', title: 'SCA Cupping', desc: 'The coffee is roasted and cupped on SCA protocol by certified Q-graders. Scored on fragrance/aroma, flavour, aftertaste, acidity, body, balance, uniformity, clean cup, sweetness, and overall.' },
  { step: '06', title: 'Grade Assignment', desc: 'Based on the combined physical defect count and cup score, the coffee is assigned a grade from 1 (best) to 5. The grade determines export pricing and market positioning.' },
]

export default function CoffeeGradingPage() {
  return (
    <main className='bg-primary'>
      <AutoScrollTo targetId='grading-hero' />

      {/* Hero */}
      <section id='grading-hero' className='bg-dark text-primary py-20 lg:py-28'>
        <div className='container mx-auto px-4 max-w-4xl text-center'>
          <p className='text-accent uppercase tracking-widest text-sm font-bold mb-4'>
            Understanding Ethiopian Coffee Quality
          </p>
          <h1 className='text-5xl lg:text-6xl font-extrabold leading-tight mb-6'>
            Ethiopian Coffee Grading System
          </h1>
          <p className='text-xl text-primary/90 mb-6 max-w-3xl mx-auto'>
            Ethiopia uses a <strong>Grade 1 to Grade 5</strong> classification system to rate green coffee quality. 
            Understanding this system is essential for importers and roasters sourcing Ethiopian coffee — 
            it directly determines cup quality, pricing, and the right fit for your business.
          </p>
          <p className='text-primary/60 max-w-2xl mx-auto'>
            This guide explains exactly how Ethiopian coffee is graded: the defect counting methodology, 
            SCA cup scoring, processing standards, and what each grade means in practice.
          </p>
        </div>
      </section>

      {/* Grade Overview Table */}
      <section className='container mx-auto px-4 py-16 lg:py-24'>
        <h2 className='text-4xl font-extrabold text-dark mb-4 text-center'>Ethiopian Coffee Grades at a Glance</h2>
        <p className='text-dark/70 text-center max-w-3xl mx-auto mb-12'>
          Ethiopian green coffee is graded from Grade 1 (highest specialty) to Grade 5 (commercial). 
          The grade is determined by physical defect count per 300g sample and SCA cup score.
        </p>
        <div className='space-y-6'>
          {gradingTable.map((grade) => (
            <article key={grade.grade} className='bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-dark/5'>
              <div className='flex flex-col lg:flex-row gap-6'>
                <div className='lg:w-1/4'>
                  <div className='flex items-center gap-3 mb-2'>
                    <span className={`text-3xl font-extrabold ${grade.category === 'Specialty' ? 'text-accent' : 'text-dark/50'}`}>
                      {grade.grade}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      grade.category === 'Specialty' ? 'bg-accent/10 text-accent' : 
                      grade.category === 'Premium Commercial' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-dark/5 text-dark/50'
                    }`}>
                      {grade.category}
                    </span>
                  </div>
                  <p className='text-sm text-dark/50'>Defects: {grade.defects} per 300g</p>
                  <p className='text-sm text-dark/50'>Cup Score: {grade.cupScore}</p>
                  <p className='text-sm font-bold text-accent mt-2'>{grade.priceRange}</p>
                </div>
                <div className='lg:w-3/4'>
                  <p className='text-dark/80 mb-4'>{grade.description}</p>
                  <div className='grid sm:grid-cols-3 gap-3 text-sm'>
                    <div><span className='text-dark/40 block'>Typical Origins</span><span className='font-bold text-dark'>{grade.typicalOrigins}</span></div>
                    <div><span className='text-dark/40 block'>Processing</span><span className='font-bold text-dark'>{grade.processing}</span></div>
                    <div><span className='text-dark/40 block'>Buyer Use</span><span className='font-bold text-dark'>{grade.buyerUse}</span></div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* How Grading Works */}
      <section className='bg-dark text-primary py-16 lg:py-24'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-extrabold mb-4 text-center'>How Ethiopian Coffee Grading Works</h2>
          <p className='text-primary/70 text-center max-w-3xl mx-auto mb-12'>
            Ethiopian coffee grading follows a standardized process administered through the Ethiopian Commodity Exchange (ECX) 
            and the Ethiopian Coffee and Tea Authority (ECTA). Here&apos;s how it works step by step.
          </p>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {gradingProcess.map((item) => (
              <div key={item.step} className='bg-primary/5 border border-primary/10 rounded-2xl p-6'>
                <div className='w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl font-extrabold mb-4'>{item.step}</div>
                <h3 className='text-lg font-bold mb-2'>{item.title}</h3>
                <p className='text-primary/70 text-sm leading-relaxed'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Defect Types */}
      <section className='container mx-auto px-4 py-16 lg:py-24'>
        <h2 className='text-4xl font-extrabold text-dark mb-4 text-center'>Common Coffee Defects & Their Impact</h2>
        <p className='text-dark/70 text-center max-w-3xl mx-auto mb-12'>
          Defects are classified as Category 1 (primary — severe) or Category 2 (secondary — minor). 
          Each defect type has an equivalence value used to calculate the total defect count.
        </p>
        <div className='overflow-x-auto'>
          <table className='w-full text-left'>
            <thead>
              <tr className='border-b-2 border-dark/10'>
                <th className='py-3 pr-4 font-bold text-dark'>Defect</th>
                <th className='py-3 pr-4 font-bold text-dark'>Category</th>
                <th className='py-3 pr-4 font-bold text-dark'>Equivalence</th>
                <th className='py-3 font-bold text-dark'>Cup Impact</th>
              </tr>
            </thead>
            <tbody>
              {defectTypes.map((defect, i) => (
                <tr key={i} className='border-b border-dark/5'>
                  <td className='py-3 pr-4 font-bold text-dark whitespace-nowrap'>{defect.name}</td>
                  <td className='py-3 pr-4 text-dark/70 text-sm'>{defect.category}</td>
                  <td className='py-3 pr-4 text-dark/70 text-sm whitespace-nowrap'>{defect.equivalence}</td>
                  <td className='py-3 text-dark/70 text-sm'>{defect.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SCA Cupping Section */}
      <section className='bg-white py-16 lg:py-24'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-extrabold text-dark mb-4 text-center'>SCA Cupping Score: The Other Half of the Grade</h2>
          <p className='text-dark/70 text-center max-w-3xl mx-auto mb-12'>
            Physical defect count tells you about the green bean quality. The SCA cupping score tells you about the cup quality. 
            Both are required to assign a final grade.
          </p>
          <div className='max-w-4xl mx-auto grid md:grid-cols-2 gap-8'>
            <div className='bg-primary rounded-2xl p-8'>
              <h3 className='text-2xl font-extrabold text-dark mb-4'>SCA Cupping Protocol</h3>
              <p className='text-dark/70 mb-4'>Coffee is scored on a 100-point scale across 10 attributes:</p>
              <ul className='space-y-2 text-dark/80'>
                {['Fragrance/Aroma', 'Flavour', 'Aftertaste', 'Acidity', 'Body', 'Balance', 'Uniformity', 'Clean Cup', 'Sweetness', 'Overall'].map((attr) => (
                  <li key={attr} className='flex items-center gap-2'>
                    <span className='w-2 h-2 rounded-full bg-accent flex-shrink-0'></span>
                    <span>{attr}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='bg-primary rounded-2xl p-8'>
              <h3 className='text-2xl font-extrabold text-dark mb-4'>Score Ranges</h3>
              <div className='space-y-4'>
                {[
                  { range: '90 – 100', label: 'Outstanding', desc: 'Exceptional, rare lots. Competition winners.', color: 'text-accent' },
                  { range: '85 – 89.99', label: 'Excellent', desc: 'Grade 1. Top specialty. Distinctive character.', color: 'text-accent' },
                  { range: '80 – 84.99', label: 'Very Good', desc: 'Grade 2. Specialty quality. Reliable origin character.', color: 'text-accent' },
                  { range: '75 – 79.99', label: 'Good', desc: 'Grade 3. Above average commercial quality.', color: 'text-yellow-600' },
                  { range: '70 – 74.99', label: 'Average', desc: 'Grade 4. Standard commercial quality.', color: 'text-dark/50' },
                  { range: 'Below 70', label: 'Below Average', desc: 'Grade 5. Commodity/industrial grade.', color: 'text-dark/30' },
                ].map((score) => (
                  <div key={score.range} className='flex items-start gap-3'>
                    <span className={`font-bold whitespace-nowrap ${score.color}`}>{score.range}</span>
                    <div>
                      <span className='font-bold text-dark'>{score.label}</span>
                      <span className='text-dark/60 text-sm block'>{score.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grade by Origin */}
      <section className='container mx-auto px-4 py-16 lg:py-24'>
        <h2 className='text-4xl font-extrabold text-dark mb-4 text-center'>Which Grades Are Available by Origin?</h2>
        <p className='text-dark/70 text-center max-w-3xl mx-auto mb-12'>
          Different Ethiopian origins tend to produce different grades based on their growing conditions, 
          processing infrastructure, and cultivation practices.
        </p>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[
            { origin: 'Yirgacheffe', grades: 'G1, G2', typical: 'G2 Washed', score: '84-88+', link: '/product/yirgacheffe' },
            { origin: 'Sidamo', grades: 'G1, G2', typical: 'G1 Natural', score: '84-87+', link: '/product/sidamo' },
            { origin: 'Guji', grades: 'G1, G2', typical: 'G1 Natural', score: '85-89+', link: '/product/guji' },
            { origin: 'Harar', grades: 'G1, G4', typical: 'G1 Natural', score: '82-86+', link: '/product/harar' },
            { origin: 'Limu', grades: 'G2, G3', typical: 'G2 Washed', score: '82-85+', link: '/product/limu' },
            { origin: 'Lekempti', grades: 'G2, G3', typical: 'G2 Washed', score: '82-85+', link: '/product/lekempti' },
          ].map((item) => (
            <Link key={item.origin} href={item.link} className='bg-white rounded-2xl p-6 shadow-sm border border-dark/5 hover:shadow-md transition-all'>
              <h3 className='text-xl font-extrabold text-accent mb-2'>{item.origin}</h3>
              <div className='space-y-1 text-sm'>
                <p><span className='text-dark/50'>Available Grades:</span> <span className='font-bold text-dark'>{item.grades}</span></p>
                <p><span className='text-dark/50'>Most Common:</span> <span className='font-bold text-dark'>{item.typical}</span></p>
                <p><span className='text-dark/50'>Cup Score Range:</span> <span className='font-bold text-dark'>{item.score}</span></p>
              </div>
              <span className='text-accent text-sm font-bold mt-3 block'>View Current Lot →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className='bg-white py-16 lg:py-24'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-extrabold text-dark mb-12 text-center'>Ethiopian Coffee Grading: FAQ</h2>
          <div className='max-w-3xl mx-auto space-y-8'>
            {[
              { q: 'How is Ethiopian coffee graded?', a: 'Ethiopian coffee is graded from Grade 1 (highest quality) to Grade 5 (lowest export grade) based on two factors: physical defect count per 300g green sample and cup quality score using SCA cupping protocol. The grading is overseen by the Ethiopian Commodity Exchange (ECX) and Ethiopian Coffee and Tea Authority (ECTA). Specialty-grade coffee (Grade 1-2) requires SCA 80+ cup scores and minimal defects.' },
              { q: 'What is the difference between Grade 1 and Grade 2 Ethiopian coffee?', a: 'Grade 1 allows 0-3 defects per 300g sample with SCA 85+ cup scores, while Grade 2 allows 4-12 defects with SCA 80-84 scores. Both are considered specialty quality. Grade 1 exhibits exceptional cup clarity and complexity, commanding 10-20% higher prices. Grade 2 is the most commonly exported specialty grade and still delivers excellent single-origin character.' },
              { q: 'What grades are considered specialty?', a: 'Grade 1 and Grade 2 Ethiopian coffees are considered specialty grade, meeting the SCA definition of 80+ cup scores. Grade 3 (75-79 points) is classified as "premium commercial" — good quality but below the specialty threshold. Only Grade 1-2 coffees should be marketed as "specialty" coffee.' },
              { q: 'Does the grade affect the price?', a: 'Yes, significantly. Grade 1 commands $10-$13+/kg FOB, Grade 2 ranges $9-$11/kg, Grade 3 is $7-$9/kg, and commercial grades (4-5) trade at $3-$7/kg. Within each grade, price varies further by origin (Guji and Yirgacheffe carry premiums), processing method, and seasonal supply-demand dynamics.' },
              { q: 'Who does the grading?', a: 'Coffee grading in Ethiopia is administered by the Ethiopian Commodity Exchange (ECX) warehouse system and the Ethiopian Coffee and Tea Authority (ECTA). Licensed exporters may also perform in-house grading that aligns with ECX standards. For specialty lots, independent Q-graders often provide additional cupping verification.' },
            ].map((item, i) => (
              <article key={i} className='border-b border-dark/10 pb-6'>
                <h3 className='text-lg font-bold text-dark mb-3'>{item.q}</h3>
                <p className='text-dark/70 leading-relaxed'>{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='bg-accent text-white py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl lg:text-4xl font-extrabold mb-4'>Source Graded Ethiopian Coffee Direct from Exporter</h2>
          <p className='text-white/80 max-w-2xl mx-auto mb-8'>
            We export Grade 1-2 specialty and Grade 3-5 commercial Ethiopian coffee with full cupping reports, 
            defect analysis, and SCA scores included with every shipment.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link href="/offerings" className='px-8 py-4 bg-white text-accent rounded-xl font-bold hover:bg-white/90 transition-all shadow-md'>
              VIEW GRADED LOTS
            </Link>
            <Link href="/contact-us" className='px-8 py-4 bg-transparent text-white border-2 border-white/40 rounded-xl font-bold hover:bg-white/10 transition-all'>
              REQUEST SAMPLES
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
    </main>
  )
}

import Link from 'next/link'
import { PiCoffee, PiPlantFill } from 'react-icons/pi'
import { GiCoffeeBeans } from 'react-icons/gi'
import { HiOutlineClipboardDocumentCheck, HiOutlineCube, HiOutlineCurrencyDollar } from 'react-icons/hi2'

export default function SidamoCoffeePage() {
  return (
    <main className='bg-primary text-dark'>
      {/* Hero */}
      <header className="bg-[url(/images/about-us.webp)] bg-cover bg-center w-full h-[350px] flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 bg-black/40" />
        <p className='uppercase tracking-[0.3em] text-primary/70 text-sm mb-4 relative z-10'>Ethiopian Coffee Origin</p>
        <h1 className='text-4xl md:text-5xl font-bold text-primary relative z-10 text-center px-4'>
          Sidamo (Sidama) Coffee
        </h1>
        <p className='text-primary/80 mt-3 text-sm tracking-widest uppercase relative z-10 text-center px-4'>
          Berry-Forward. Wine-Like Acidity. Rich Mouthfeel.
        </p>
        <div className='mt-6 flex flex-wrap justify-center gap-4 relative z-10'>
          <Link href='/contact-us' className='bg-accent text-white px-8 py-3 rounded-xl font-bold hover:bg-accent/90 transition-colors'>
            Request Samples
          </Link>
          <Link href='/offerings' className='border-2 border-primary/40 text-primary px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors'>
            View Available Lots
          </Link>
        </div>
      </header>

      {/* Quick specs */}
      <section className='bg-accent/10 border-y border-accent/20'>
        <div className='max-w-5xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm'>
          <div>
            <p className='text-dark/50 uppercase tracking-widest text-xs'>Region</p>
            <p className='font-bold text-dark mt-1'>Sidama Regional State</p>
          </div>
          <div>
            <p className='text-dark/50 uppercase tracking-widest text-xs'>Altitude</p>
            <p className='font-bold text-dark mt-1'>1,550 – 2,200 masl</p>
          </div>
          <div>
            <p className='text-dark/50 uppercase tracking-widest text-xs'>Cup Score</p>
            <p className='font-bold text-dark mt-1'>SCA 84 – 88+</p>
          </div>
          <div>
            <p className='text-dark/50 uppercase tracking-widest text-xs'>Export Grades</p>
            <p className='font-bold text-dark mt-1'>Grade 1 & Grade 2</p>
          </div>
        </div>
      </section>

      {/* What is Sidamo */}
      <section className='py-16 md:py-20'>
        <div className='max-w-4xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold text-dark mb-6'>What Is Sidamo Coffee?</h2>
          <div className='prose prose-lg max-w-none text-dark/80 space-y-4'>
            <p>
              Sidamo (officially renamed <strong>Sidama</strong> in 2020 when it became its own regional state) is one of Ethiopia&apos;s
              most prolific and celebrated coffee-growing regions. Located in southern Ethiopia, the Sidama zone
              spans a vast area of highland terrain with altitudes ranging from <strong>1,550 to 2,200 meters</strong>,
              producing coffees with remarkable complexity and diversity.
            </p>
            <p>
              Sidamo coffees are known for their <strong>berry-forward flavor profiles</strong>, wine-like acidity, and rich,
              full body. The region&apos;s volcanic soil, abundant rainfall, and ideal growing temperatures create
              conditions that produce some of Ethiopia&apos;s most consistent specialty lots. Many of the world&apos;s
              top specialty roasters feature Sidamo as a year-round single-origin offering. For a detailed comparison,
              read our <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='underline hover:text-dark/60'>Yirgacheffe vs Sidamo vs Guji comparison</Link>.
            </p>
            <p>
              While Yirgacheffe is technically part of the Sidama zone, it is classified as a separate
              trade category due to its distinctive profile. Broader Sidamo coffees tend to be <strong>heavier-bodied
              and more fruit-forward</strong> than their Yirgacheffe counterparts, often with pronounced blueberry,
              strawberry, and stone fruit notes, especially in <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='underline hover:text-dark/60'>natural-processed lots</Link>.
              For deeper production data, see our <Link href='/insights/sidama-coffee-production-productivity-export' className='underline hover:text-dark/60'>Sidama coffee production and export analysis</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Flavor Profile */}
      <section className='py-16 bg-dark text-primary'>
        <div className='max-w-5xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold mb-10 text-center'>Sidamo Flavor Profile</h2>
          <div className='grid md:grid-cols-2 gap-10'>
            <div className='bg-primary/5 rounded-lg p-8 border border-primary/10'>
              <h3 className='text-xl font-bold mb-4 flex items-center gap-2'><PiCoffee className='text-2xl' /> Washed Sidamo</h3>
              <p className='text-primary/70 mb-4'>Clean, bright, and elegantly complex.</p>
              <ul className='space-y-2 text-primary/80'>
                <li><strong>Aroma:</strong> Floral, citrus blossom, honey</li>
                <li><strong>Flavor:</strong> Peach, lemon, green grape, caramel</li>
                <li><strong>Acidity:</strong> Bright, wine-like, malic</li>
                <li><strong>Body:</strong> Medium, silky, well-balanced</li>
                <li><strong>Finish:</strong> Clean, sweet, lingering stone fruit</li>
                <li><strong>SCA Score:</strong> Typically 84 – 87+</li>
              </ul>
            </div>
            <div className='bg-primary/5 rounded-lg p-8 border border-primary/10'>
              <h3 className='text-xl font-bold mb-4 flex items-center gap-2'><GiCoffeeBeans className='text-2xl' /> Natural Sidamo</h3>
              <p className='text-primary/70 mb-4'>Intense berry bombs with wine-like sweetness.</p>
              <ul className='space-y-2 text-primary/80'>
                <li><strong>Aroma:</strong> Blueberry, strawberry, fermented fruit</li>
                <li><strong>Flavor:</strong> Blueberry jam, wine, dark chocolate, brown sugar</li>
                <li><strong>Acidity:</strong> Moderate, wine-like, juicy</li>
                <li><strong>Body:</strong> Full, syrupy, heavy</li>
                <li><strong>Finish:</strong> Sweet, lingering berry, cocoa</li>
                <li><strong>SCA Score:</strong> Typically 85 – 88+</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-regions */}
      <section className='py-16 md:py-20'>
        <div className='max-w-5xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold text-dark mb-4'>Sidamo Coffee Sub-Regions</h2>
          <p className='text-dark/60 mb-10 max-w-3xl'>
            The Sidama zone encompasses numerous districts, each producing coffees with
            subtly different characteristics shaped by microclimate, altitude, and local processing traditions.
          </p>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              { name: 'Bensa', alt: '1,700–2,200m', notes: 'Ethiopia\'s rising star for natural processing. Intense blueberry, strawberry, and tropical complexity. Home to some of the highest-scoring Sidamo lots.' },
              { name: 'Dale', alt: '1,600–2,000m', notes: 'Balanced, sweet washed coffees with citrus brightness and caramel sweetness. Consistent and reliable for year-round programs.' },
              { name: 'Aleta Wendo', alt: '1,550–1,900m', notes: 'Well-rounded coffees with stone fruit, mild florals, and a smooth body. Excellent value for specialty-grade lots.' },
              { name: 'Chire', alt: '1,700–2,100m', notes: 'Complex, layered coffees with wine-like acidity and berry characteristics. Known for high-quality washed lots.' },
              { name: 'Nensebo', alt: '1,800–2,200m', notes: 'Emerging micro-region producing exceptional naturals with intense fruit and floral notes. Borders the Guji zone.' },
              { name: 'Arbegona', alt: '1,900–2,200m', notes: 'High-altitude lots with pronounced acidity, floral aromatics, and a tea-like elegance similar to Yirgacheffe.' },
            ].map((region) => (
              <div key={region.name} className='bg-white rounded-lg p-6 border border-dark/10 shadow-sm'>
                <h3 className='text-lg font-bold text-dark'>{region.name}</h3>
                <p className='text-xs text-dark/50 uppercase tracking-widest mt-1'>{region.alt}</p>
                <p className='text-dark/70 mt-3 text-sm leading-relaxed'>{region.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Specifications */}
      <section className='py-16 bg-accent/5 border-y border-accent/10'>
        <div className='max-w-5xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold text-dark mb-4 text-center'>Sidamo Export Specifications</h2>
          <p className='text-dark/60 text-center max-w-3xl mx-auto mb-10'>
            Grades are assigned based on defect count and <a href='https://sca.coffee/research/protocols-best-practices' target='_blank' rel='noopener noreferrer' className='underline hover:text-dark/90'>SCA cupping protocol</a>. See our <Link href='/coffee-grading-ethiopia' className='underline hover:text-dark/90'>Ethiopian coffee grading guide</Link> for a full explanation.
          </p>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-dark text-primary'>
                  <th className='px-4 py-3 text-left font-bold'>Specification</th>
                  <th className='px-4 py-3 text-left font-bold'>Grade 1</th>
                  <th className='px-4 py-3 text-left font-bold'>Grade 2</th>
                </tr>
              </thead>
              <tbody className='text-dark/80'>
                <tr className='border-b border-dark/10'><td className='px-4 py-3 font-medium'>SCA Cup Score</td><td className='px-4 py-3'>86 – 88+</td><td className='px-4 py-3'>84 – 86</td></tr>
                <tr className='border-b border-dark/10 bg-white'><td className='px-4 py-3 font-medium'>Defect Count (per 300g)</td><td className='px-4 py-3'>0 – 3 defects</td><td className='px-4 py-3'>4 – 12 defects</td></tr>
                <tr className='border-b border-dark/10'><td className='px-4 py-3 font-medium'>Screen Size</td><td className='px-4 py-3'>15 – 18</td><td className='px-4 py-3'>14 – 17</td></tr>
                <tr className='border-b border-dark/10 bg-white'><td className='px-4 py-3 font-medium'>Moisture Content</td><td className='px-4 py-3'>10 – 12%</td><td className='px-4 py-3'>10 – 12%</td></tr>
                <tr className='border-b border-dark/10'><td className='px-4 py-3 font-medium'>Processing</td><td className='px-4 py-3'>Washed & Natural</td><td className='px-4 py-3'>Washed & Natural</td></tr>
                <tr className='border-b border-dark/10 bg-white'><td className='px-4 py-3 font-medium'>Packaging</td><td className='px-4 py-3'>60kg GrainPro-lined jute</td><td className='px-4 py-3'>60kg GrainPro-lined jute</td></tr>
                <tr className='border-b border-dark/10'><td className='px-4 py-3 font-medium'>Incoterms</td><td className='px-4 py-3'>FOB Djibouti / FCA</td><td className='px-4 py-3'>FOB Djibouti / FCA</td></tr>
                <tr className='bg-white'><td className='px-4 py-3 font-medium'>Harvest Season</td><td className='px-4 py-3'>October – February</td><td className='px-4 py-3'>October – February</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why source from us */}
      <section className='py-16 md:py-20'>
        <div className='max-w-4xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold text-dark mb-8'>Why Source Sidamo from Ethio Coffee?</h2>
          <div className='space-y-6 text-dark/80'>
            <div className='flex gap-4'>
              <PiPlantFill className='text-2xl text-dark/60 mt-1 flex-shrink-0' />
              <div>
                <h3 className='font-bold text-dark'>Direct from Sidama Washing Stations</h3>
                <p className='mt-1'>We source from washing stations and cooperatives across Bensa, Dale, Chire, and other premium Sidamo districts. Our father spent decades building relationships in these communities.</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <HiOutlineClipboardDocumentCheck className='text-2xl text-dark/60 mt-1 flex-shrink-0' />
              <div>
                <h3 className='font-bold text-dark'>Cupped to SCA Protocol</h3>
                <p className='mt-1'>Every Sidamo lot is cupped by trained Q-graders. We reject lots below our 84+ minimum standard. Full cupping reports and defect analysis provided with every shipment.</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <HiOutlineCurrencyDollar className='text-2xl text-dark/60 mt-1 flex-shrink-0' />
              <div>
                <h3 className='font-bold text-dark'>Exceptional Value</h3>
                <p className='mt-1'>Sidamo consistently offers some of the best quality-to-price ratios in Ethiopian specialty coffee. Our Grade 2 washed lots compete with Yirgacheffe at a lower FOB price point.</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <HiOutlineCube className='text-2xl text-dark/60 mt-1 flex-shrink-0' />
              <div>
                <h3 className='font-bold text-dark'>Pre-Shipment Samples</h3>
                <p className='mt-1'>Request green and roasted samples of any available Sidamo lot before committing. Evaluate in your own lab - no obligation until you approve.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='py-16 bg-dark text-primary'>
        <div className='max-w-4xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold mb-10 text-center'>Frequently Asked Questions About Sidamo Coffee</h2>
          <div className='space-y-6'>
            {[
              { q: 'What does Sidamo coffee taste like?', a: 'Sidamo is known for complex berry and stone fruit notes, floral aromatics, wine-like acidity, and a rich mouthfeel. Washed Sidamo tends toward citrus and floral brightness, while naturals deliver intense blueberry, strawberry, and dark chocolate sweetness.' },
              { q: 'What is the difference between Sidamo and Yirgacheffe?', a: 'Yirgacheffe is technically within the Sidama zone but is classified separately due to its distinctive lighter, more floral profile. Broader Sidamo coffees tend to be heavier-bodied with more pronounced berry and wine notes.' },
              { q: 'What grades are available?', a: 'We export Grade 1 (SCA 86+, minimal defects) and Grade 2 (SCA 84-86+) in both washed and natural processing. Grade 1 naturals from Bensa are particularly sought after.' },
              { q: 'How much does Sidamo cost FOB?', a: 'Grade 2 washed: $3.20–$4.50/lb FOB Djibouti. Grade 1 naturals: $4.00–$6.00/lb FOB. Sidamo often offers better value than Yirgacheffe at comparable quality. Contact us for current pricing.' },
              { q: 'What is the minimum order?', a: 'Standard minimum is one FCL (≈19.2 MT, 320 × 60kg bags). You can mix Sidamo with other Ethiopian origins in the same container.' },
            ].map((faq, i) => (
              <div key={i} className='border-b border-primary/10 pb-6'>
                <h3 className='font-bold text-primary text-lg'>{faq.q}</h3>
                <p className='mt-2 text-primary/70 leading-relaxed'>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other regions */}
      <section className='py-16'>
        <div className='max-w-5xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold text-dark mb-8 text-center'>Explore Other Ethiopian Coffee Regions</h2>
          <div className='grid md:grid-cols-3 gap-6'>
            {[
              { name: 'Yirgacheffe', score: '84–88+', notes: 'Jasmine, bergamot, lemon, tea-like body', href: '/ethiopian-coffee-yirgacheffe' },
              { name: 'Guji', score: '85–89+', notes: 'Stone fruit, tropical, floral complexity', href: '/ethiopian-coffee-guji' },
              { name: 'Harar', score: '82–86+', notes: 'Wild berry, wine, dark chocolate', href: '/ethiopian-coffee-harar' },
              { name: 'Limu', score: '82–85+', notes: 'Wine, spice, balanced body', href: '/ethiopian-coffee-limu' },
              { name: 'Jimma (Djimmah)', score: '78–82', notes: 'Earthy, consistent, blend-friendly', href: '/ethiopian-coffee-jimma' },
            ].map((region) => (
              <Link key={region.name} href={region.href} className='block bg-white rounded-lg p-6 border border-dark/10 shadow-sm hover:shadow-md transition-shadow'>
                <h3 className='font-bold text-dark'>{region.name}</h3>
                <p className='text-xs text-dark/50 mt-1'>SCA {region.score}</p>
                <p className='text-dark/60 text-sm mt-2'>{region.notes}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-16 bg-dark text-primary text-center'>
        <div className='max-w-3xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold mb-4'>Ready to Source Sidamo Coffee?</h2>
          <p className='text-primary/70 mb-8 text-lg'>
            Request pre-shipment samples, get current season pricing, or discuss your
            Sidamo requirements with our export team.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link href='/offerings' className='bg-accent text-white px-8 py-3 rounded-xl font-bold hover:bg-accent/90 transition-colors'>
              View Current Offerings
            </Link>
            <Link href='/contact-us' className='border-2 border-primary/40 text-primary px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors'>
              Request Samples
            </Link>
            <Link href='/ordering-info' className='border-2 border-primary/40 text-primary px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors'>
              How to Order
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

import Link from 'next/link'
import { PiCoffee, PiTreeFill } from 'react-icons/pi'
import { HiOutlineCurrencyDollar, HiOutlineChartBar, HiOutlineCube } from 'react-icons/hi2'

export default function LimuCoffeePage() {
  return (
    <main className='bg-primary text-dark'>
      {/* Hero */}
      <header className="bg-[url(/images/about-us.webp)] bg-cover bg-center w-full h-[350px] flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 bg-black/40" />
        <p className='uppercase tracking-[0.3em] text-primary/70 text-sm mb-4 relative z-10'>Ethiopian Coffee Origin</p>
        <h1 className='text-4xl md:text-5xl font-bold text-primary relative z-10 text-center px-4'>
          Limu Coffee
        </h1>
        <p className='text-primary/80 mt-3 text-sm tracking-widest uppercase relative z-10 text-center px-4'>
          Wine-Toned Acidity. Warm Spice. Balanced Body.
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
            <p className='font-bold text-dark mt-1'>Jimma Zone, Oromia (SW)</p>
          </div>
          <div>
            <p className='text-dark/50 uppercase tracking-widest text-xs'>Altitude</p>
            <p className='font-bold text-dark mt-1'>1,400 – 2,000 masl</p>
          </div>
          <div>
            <p className='text-dark/50 uppercase tracking-widest text-xs'>Cup Score</p>
            <p className='font-bold text-dark mt-1'>SCA 82 – 85+</p>
          </div>
          <div>
            <p className='text-dark/50 uppercase tracking-widest text-xs'>Processing</p>
            <p className='font-bold text-dark mt-1'>Washed (Wet Processed)</p>
          </div>
        </div>
      </section>

      {/* What is Limu */}
      <section className='py-16 md:py-20'>
        <div className='max-w-4xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold text-dark mb-6'>What Is Limu Coffee?</h2>
          <div className='prose prose-lg max-w-none text-dark/80 space-y-4'>
            <p>
              Limu is a well-established Ethiopian coffee origin located in the <strong>southwestern highlands
              of the Oromia region</strong>, within the broader Jimma zone. Growing at altitudes between
              <strong> 1,400 and 2,000 meters</strong>, Limu coffees benefit from rich, fertile soil,
              ample rainfall, and the shade of indigenous forest canopy - conditions that produce
              clean, balanced, and reliably high-quality beans season after season.
            </p>
            <p>
              Limu is <strong>predominantly washed (wet) processed</strong>, producing a clean cup with
              wine-toned acidity, warm spice notes, and a medium-to-full body. To understand how
              <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='underline hover:text-dark/60'>washed processing shapes Ethiopian coffee flavor</Link>, see our processing guide.
              While it may not grab headlines like Yirgacheffe or Guji, Limu is the <strong>quiet backbone of many premium blends</strong> and
              an excellent single-origin offering for roasters who value consistency and depth.
            </p>
            <p>
              What makes Limu especially attractive for importers is its
              <strong> exceptional quality-to-price ratio</strong>. Limu delivers specialty-grade complexity
              at a lower FOB price than southern Ethiopian origins, making it ideal for year-round
              programs, espresso blends, and high-volume specialty accounts. For current pricing benchmarks,
              see our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='underline hover:text-dark/60'>Ethiopian coffee FOB pricing guide</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Flavor Profile */}
      <section className='py-16 bg-dark text-primary'>
        <div className='max-w-5xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold mb-10 text-center'>Limu Flavor Profile</h2>
          <div className='max-w-2xl mx-auto'>
            <div className='bg-primary/5 rounded-lg p-8 border border-primary/10'>
              <h3 className='text-xl font-bold mb-4 flex items-center gap-2'><PiCoffee className='text-2xl' /> Washed Limu</h3>
              <p className='text-primary/70 mb-4'>Clean, wine-toned, and versatile.</p>
              <ul className='space-y-2 text-primary/80'>
                <li><strong>Aroma:</strong> Honey, wine, warm spice</li>
                <li><strong>Flavor:</strong> Red wine, cardamom, dark honey, toasted almond</li>
                <li><strong>Acidity:</strong> Medium, wine-like, round</li>
                <li><strong>Body:</strong> Medium-full, smooth, satiny</li>
                <li><strong>Finish:</strong> Warm, spiced, clean</li>
                <li><strong>SCA Score:</strong> Typically 82 – 85+</li>
              </ul>
              <div className='mt-6 pt-6 border-t border-primary/10'>
                <p className='text-primary/60 text-sm'>
                  <strong>Best Uses:</strong> Single origin filter, espresso blend component,
                  French press, cold brew. Limu&apos;s balanced profile and moderate acidity
                  make it one of the most versatile Ethiopian origins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-regions */}
      <section className='py-16 md:py-20'>
        <div className='max-w-5xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold text-dark mb-4'>Limu Coffee Growing Areas</h2>
          <p className='text-dark/60 mb-10 max-w-3xl'>
            Limu coffee is grown across several woredas (districts) in the southwestern
            Jimma zone, each contributing to the region&apos;s consistent, high-quality output.
          </p>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              { name: 'Limu Kosa', alt: '1,500–2,000m', notes: 'The heart of Limu production. Clean, balanced coffees with pronounced wine-like acidity and warm spice. Reliable quality year after year.' },
              { name: 'Limu Seka', alt: '1,400–1,800m', notes: 'Slightly lower altitude producing fuller-bodied, more chocolatey coffees. Popular for espresso blend components.' },
              { name: 'Gomma', alt: '1,500–1,900m', notes: 'Forest-shaded coffee with complex flavor development. Known for honey-sweet, clean cups with floral undertones.' },
              { name: 'Gera', alt: '1,600–2,000m', notes: 'Higher-altitude area near the Gera rainforest. Produces brighter, more complex lots with fruit and citrus notes. Growing specialty recognition.' },
              { name: 'Manna', alt: '1,500–1,800m', notes: 'Consistent, well-balanced coffees with classic Limu wine-spice character. Strong cooperative infrastructure ensures traceability.' },
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
          <h2 className='text-3xl font-extrabold text-dark mb-4 text-center'>Limu Export Specifications</h2>
          <p className='text-dark/60 text-center max-w-3xl mx-auto mb-10'>
            Graded per <a href='https://www.ico.org/' target='_blank' rel='noopener noreferrer' className='underline hover:text-dark/90'>ICO</a> and ECX standards. See our <Link href='/coffee-grading-ethiopia' className='underline hover:text-dark/90'>Ethiopian coffee grading guide</Link> for full methodology.
          </p>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-dark text-primary'>
                  <th className='px-4 py-3 text-left font-bold'>Specification</th>
                  <th className='px-4 py-3 text-left font-bold'>Grade 2</th>
                  <th className='px-4 py-3 text-left font-bold'>Grade 3</th>
                </tr>
              </thead>
              <tbody className='text-dark/80'>
                <tr className='border-b border-dark/10'><td className='px-4 py-3 font-medium'>SCA Cup Score</td><td className='px-4 py-3'>83 – 85+</td><td className='px-4 py-3'>82 – 83</td></tr>
                <tr className='border-b border-dark/10 bg-white'><td className='px-4 py-3 font-medium'>Defect Count (per 300g)</td><td className='px-4 py-3'>4 – 12 defects</td><td className='px-4 py-3'>13 – 25 defects</td></tr>
                <tr className='border-b border-dark/10'><td className='px-4 py-3 font-medium'>Screen Size</td><td className='px-4 py-3'>14 – 17</td><td className='px-4 py-3'>14 – 16</td></tr>
                <tr className='border-b border-dark/10 bg-white'><td className='px-4 py-3 font-medium'>Moisture Content</td><td className='px-4 py-3'>10 – 12%</td><td className='px-4 py-3'>10 – 12%</td></tr>
                <tr className='border-b border-dark/10'><td className='px-4 py-3 font-medium'>Processing</td><td className='px-4 py-3'>Washed</td><td className='px-4 py-3'>Washed</td></tr>
                <tr className='border-b border-dark/10 bg-white'><td className='px-4 py-3 font-medium'>Packaging</td><td className='px-4 py-3'>60kg GrainPro-lined jute</td><td className='px-4 py-3'>60kg jute bags</td></tr>
                <tr className='border-b border-dark/10'><td className='px-4 py-3 font-medium'>Incoterms</td><td className='px-4 py-3'>FOB Djibouti / CIF</td><td className='px-4 py-3'>FOB Djibouti / CIF</td></tr>
                <tr className='bg-white'><td className='px-4 py-3 font-medium'>Harvest Season</td><td className='px-4 py-3'>October – January</td><td className='px-4 py-3'>October – January</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why source from us */}
      <section className='py-16 md:py-20'>
        <div className='max-w-4xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold text-dark mb-8'>Why Source Limu from Ethio Coffee?</h2>
          <div className='space-y-6 text-dark/80'>
            <div className='flex gap-4'>
              <HiOutlineCurrencyDollar className='text-2xl text-dark/60 mt-1 flex-shrink-0' />
              <div>
                <h3 className='font-bold text-dark'>Best Value in Ethiopian Specialty</h3>
                <p className='mt-1'>Limu delivers SCA 82-85+ quality at FOB prices 15-25% below Yirgacheffe and Guji. For roasters running year-round Ethiopian programs or building premium blends, Limu is the smart choice.</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <HiOutlineChartBar className='text-2xl text-dark/60 mt-1 flex-shrink-0' />
              <div>
                <h3 className='font-bold text-dark'>Exceptional Consistency</h3>
                <p className='mt-1'>Limu&apos;s established washing station infrastructure and mature growing conditions produce remarkably consistent lots season after season. Perfect for maintaining blend profiles or single-origin programs.</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <PiTreeFill className='text-2xl text-dark/60 mt-1 flex-shrink-0' />
              <div>
                <h3 className='font-bold text-dark'>Forest-Grown Heritage</h3>
                <p className='mt-1'>Much of Limu&apos;s coffee grows under indigenous forest canopy near the Gera and Belete-Gera rainforests - among Ethiopia&apos;s most important biodiversity hotspots. Natural shade, no irrigation, minimal inputs.</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <HiOutlineCube className='text-2xl text-dark/60 mt-1 flex-shrink-0' />
              <div>
                <h3 className='font-bold text-dark'>Volume Availability</h3>
                <p className='mt-1'>Limu is one of Ethiopia&apos;s larger producing regions, ensuring reliable supply even for high-volume importers. We can fulfill multi-container programs throughout the season.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='py-16 bg-dark text-primary'>
        <div className='max-w-4xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold mb-10 text-center'>Frequently Asked Questions About Limu Coffee</h2>
          <div className='space-y-6'>
            {[
              { q: 'What does Limu coffee taste like?', a: 'Limu is known for wine-like acidity, warm spice notes (cardamom, cinnamon), dark honey sweetness, and a medium-full body. The cup is clean, balanced, and versatile - working beautifully as filter single origin, espresso blend, or cold brew.' },
              { q: 'Is Limu coffee specialty grade?', a: 'Yes, Limu Grade 2 consistently scores 83-85+ on the SCA scale, firmly in specialty territory. While it doesn\'t reach the ultra-high scores of top Guji or Yirgacheffe lots, Limu\'s clean, complex cup profile makes it a genuine specialty origin at a more accessible price.' },
              { q: 'What is the difference between Limu and Jimma?', a: 'Limu and Jimma are both southwestern origins, but Limu is washed processed and grown at higher altitudes (1,400-2,000m), producing cleaner, more complex cups. Jimma (Djimmah) is predominantly natural processed at lower altitudes and is used mainly for commercial blends.' },
              { q: 'How much does Limu coffee cost FOB?', a: 'Grade 2 washed: $2.80–$3.80/lb FOB Djibouti. Grade 3: $2.40–$3.00/lb. Limu offers 15-25% savings vs Yirgacheffe at comparable quality, making it ideal for volume programs. Contact us for current pricing.' },
              { q: 'What is the minimum order?', a: 'Standard minimum is one FCL (≈19.2 MT, 320 × 60kg bags). Limu pairs well with other Ethiopian origins in mixed containers. Volume discounts available for multi-container commitments.' },
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
              { name: 'Sidamo', score: '84–87+', notes: 'Berry, wine, rich body, stone fruit', href: '/ethiopian-coffee-sidamo' },
              { name: 'Guji', score: '85–89+', notes: 'Stone fruit, tropical, floral complexity', href: '/ethiopian-coffee-guji' },
              { name: 'Harar', score: '82–86+', notes: 'Wild berry, wine, dark chocolate', href: '/ethiopian-coffee-harar' },
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
          <h2 className='text-3xl font-extrabold mb-4'>Ready to Source Limu Coffee?</h2>
          <p className='text-primary/70 mb-8 text-lg'>
            Request pre-shipment samples, get current season pricing, or discuss your
            Limu requirements with our export team.
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

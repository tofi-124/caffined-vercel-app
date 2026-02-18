import Link from 'next/link'
import { PiCoffee } from 'react-icons/pi'
import { GiCoffeeBeans, GiHoneypot } from 'react-icons/gi'
import { HiOutlineClipboardDocumentCheck, HiOutlineCube, HiOutlineGlobeAlt } from 'react-icons/hi2'
import { TbMountain } from 'react-icons/tb'

export default function GujiCoffeePage() {
  return (
    <main className='bg-primary text-dark'>
      {/* Hero */}
      <header className="bg-[url(/images/about-us.webp)] bg-cover bg-center w-full h-[350px] flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 bg-black/40" />
        <p className='uppercase tracking-[0.3em] text-primary/70 text-sm mb-4 relative z-10'>Ethiopian Coffee Origin</p>
        <h1 className='text-4xl md:text-5xl font-bold text-primary relative z-10 text-center px-4'>
          Guji Coffee
        </h1>
        <p className='text-primary/80 mt-3 text-sm tracking-widest uppercase relative z-10 text-center px-4'>
          Tropical Fruit. Vibrant Acidity. Award-Winning Scores.
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
            <p className='font-bold text-dark mt-1'>Guji Zone, Oromia</p>
          </div>
          <div>
            <p className='text-dark/50 uppercase tracking-widest text-xs'>Altitude</p>
            <p className='font-bold text-dark mt-1'>1,800 – 2,300 masl</p>
          </div>
          <div>
            <p className='text-dark/50 uppercase tracking-widest text-xs'>Cup Score</p>
            <p className='font-bold text-dark mt-1'>SCA 85 – 89+</p>
          </div>
          <div>
            <p className='text-dark/50 uppercase tracking-widest text-xs'>Processing</p>
            <p className='font-bold text-dark mt-1'>Washed · Natural · Honey</p>
          </div>
        </div>
      </section>

      {/* What is Guji */}
      <section className='py-16 md:py-20'>
        <div className='max-w-4xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold text-dark mb-6'>What Is Guji Coffee?</h2>
          <div className='prose prose-lg max-w-none text-dark/80 space-y-4'>
            <p>
              Guji is one of Ethiopia&apos;s most exciting coffee-producing zones, located in the southern
              part of the Oromia region. Once grouped under the broader &quot;Sidamo&quot; classification,
              Guji earned its own distinct trade designation in 2010, a recognition of its
              <strong> uniquely complex and high-scoring cup profiles</strong>. For a detailed side-by-side
              analysis, read our <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='underline hover:text-dark/60'>Yirgacheffe vs Sidamo vs Guji comparison</Link>.
            </p>
            <p>
              Growing at altitudes between <strong>1,800 and 2,300 meters</strong>, Guji produces
              exceptionally dense, flavorful beans. The zone&apos;s combination of rich volcanic soil,
              high elevation, and traditional shade-grown cultivation under indigenous forest canopy
              creates ideal conditions for specialty coffee. Many Guji washing stations produce
              lots scoring <strong>87 – 89+ on the SCA scale</strong>, placing them among the world&apos;s elite.
            </p>
            <p>
              Guji coffees are distinguished by their <strong>intense tropical fruit and stone fruit notes</strong>,
              vibrant but balanced acidity, and remarkable sweetness. Natural-processed Guji lots from
              Hambela and Shakiso have gained cult-like status among specialty roasters for their
              complexity and exotic flavor profiles. Many Guji producers competed in the
              <Link href='/insights/afca-taste-of-harvest-ethiopian-coffee-competition' className='underline hover:text-dark/60'>AFCA Taste of Harvest competition</Link>, earning top honors.
            </p>
          </div>
        </div>
      </section>

      {/* Flavor Profile */}
      <section className='py-16 bg-dark text-primary'>
        <div className='max-w-5xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold mb-10 text-center'>Guji Flavor Profile</h2>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='bg-primary/5 rounded-lg p-8 border border-primary/10'>
              <h3 className='text-xl font-bold mb-4 flex items-center gap-2'><PiCoffee className='text-2xl' /> Washed Guji</h3>
              <p className='text-primary/70 mb-4'>Pristine clarity with vibrant fruitiness.</p>
              <ul className='space-y-2 text-primary/80'>
                <li><strong>Aroma:</strong> Peach blossom, jasmine, bergamot</li>
                <li><strong>Flavor:</strong> Peach, apricot, lemon, honey</li>
                <li><strong>Acidity:</strong> Bright, sparkling, citric</li>
                <li><strong>Body:</strong> Medium, silky, juicy</li>
                <li><strong>Finish:</strong> Long, sweet, floral</li>
                <li><strong>SCA Score:</strong> 85 – 88+</li>
              </ul>
            </div>
            <div className='bg-primary/5 rounded-lg p-8 border border-primary/10'>
              <h3 className='text-xl font-bold mb-4 flex items-center gap-2'><GiCoffeeBeans className='text-2xl' /> Natural Guji</h3>
              <p className='text-primary/70 mb-4'>Exotic fruit explosions with wild complexity.</p>
              <ul className='space-y-2 text-primary/80'>
                <li><strong>Aroma:</strong> Mango, papaya, strawberry wine</li>
                <li><strong>Flavor:</strong> Tropical fruit, blueberry, watermelon candy</li>
                <li><strong>Acidity:</strong> Moderate, wine-like, juicy</li>
                <li><strong>Body:</strong> Full, creamy, syrupy</li>
                <li><strong>Finish:</strong> Lingering tropical, honey sweetness</li>
                <li><strong>SCA Score:</strong> 86 – 89+</li>
              </ul>
            </div>
            <div className='bg-primary/5 rounded-lg p-8 border border-primary/10'>
              <h3 className='text-xl font-bold mb-4 flex items-center gap-2'><GiHoneypot className='text-2xl' /> Honey Guji</h3>
              <p className='text-primary/70 mb-4'>Best of both worlds - fruit and clarity.</p>
              <ul className='space-y-2 text-primary/80'>
                <li><strong>Aroma:</strong> Stone fruit, brown sugar, floral</li>
                <li><strong>Flavor:</strong> Peach, plum, caramel, chocolate</li>
                <li><strong>Acidity:</strong> Balanced, malic, round</li>
                <li><strong>Body:</strong> Medium-full, velvety</li>
                <li><strong>Finish:</strong> Smooth, sweet, lasting</li>
                <li><strong>SCA Score:</strong> 85 – 88+</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-regions */}
      <section className='py-16 md:py-20'>
        <div className='max-w-5xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold text-dark mb-4'>Guji Coffee Sub-Regions</h2>
          <p className='text-dark/60 mb-10 max-w-3xl'>
            The Guji zone stretches across multiple high-altitude districts, each with its own
            microclimate, soil composition, and processing traditions.
          </p>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              { name: 'Hambela (Hambella)', alt: '1,900–2,300m', notes: 'The crown jewel of Guji. Intense tropical fruit, jasmine, and strawberry. Home to competition-winning lots scoring 89+.' },
              { name: 'Shakiso', alt: '1,800–2,200m', notes: 'Complex, balanced coffees with stone fruit and citrus brightness. Known for exceptional micro-lots from family holdings.' },
              { name: 'Uraga', alt: '1,900–2,200m', notes: 'Floral-forward with tea-like delicacy and bright lemon acidity. Uraga washed lots rival top Yirgacheffe coffees.' },
              { name: 'Kercha', alt: '1,800–2,100m', notes: 'Rich, full-bodied coffees with dark fruit and chocolate notes. Strong natural processing tradition.' },
              { name: 'Bule Hora', alt: '1,700–2,000m', notes: 'Balanced, smooth coffees with stone fruit sweetness and a clean finish. Excellent value for specialty-grade lots.' },
              { name: 'Adola Rede', alt: '1,800–2,100m', notes: 'Emerging area producing complex naturals with berry and wine characteristics. Growing recognition among specialty buyers.' },
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
          <h2 className='text-3xl font-extrabold text-dark mb-4 text-center'>Guji Export Specifications</h2>
          <p className='text-dark/60 text-center max-w-3xl mx-auto mb-10'>
            Grades are based on defect count and <a href='https://sca.coffee/research/protocols-best-practices' target='_blank' rel='noopener noreferrer' className='underline hover:text-dark/90'>SCA cupping scores</a>. See our <Link href='/coffee-grading-ethiopia' className='underline hover:text-dark/90'>Ethiopian coffee grading guide</Link> for details.
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
                <tr className='border-b border-dark/10'><td className='px-4 py-3 font-medium'>SCA Cup Score</td><td className='px-4 py-3'>87 – 89+</td><td className='px-4 py-3'>85 – 87</td></tr>
                <tr className='border-b border-dark/10 bg-white'><td className='px-4 py-3 font-medium'>Defect Count (per 300g)</td><td className='px-4 py-3'>0 – 3 defects</td><td className='px-4 py-3'>4 – 12 defects</td></tr>
                <tr className='border-b border-dark/10'><td className='px-4 py-3 font-medium'>Screen Size</td><td className='px-4 py-3'>15 – 18</td><td className='px-4 py-3'>14 – 17</td></tr>
                <tr className='border-b border-dark/10 bg-white'><td className='px-4 py-3 font-medium'>Moisture Content</td><td className='px-4 py-3'>10 – 12%</td><td className='px-4 py-3'>10 – 12%</td></tr>
                <tr className='border-b border-dark/10'><td className='px-4 py-3 font-medium'>Processing</td><td className='px-4 py-3'>Washed, Natural & Honey</td><td className='px-4 py-3'>Washed, Natural & Honey</td></tr>
                <tr className='border-b border-dark/10 bg-white'><td className='px-4 py-3 font-medium'>Packaging</td><td className='px-4 py-3'>60kg GrainPro-lined jute</td><td className='px-4 py-3'>60kg GrainPro-lined jute</td></tr>
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
          <h2 className='text-3xl font-extrabold text-dark mb-8'>Why Source Guji from Ethio Coffee?</h2>
          <div className='space-y-6 text-dark/80'>
            <div className='flex gap-4'>
              <TbMountain className='text-2xl text-dark/60 mt-1 flex-shrink-0' />
              <div>
                <h3 className='font-bold text-dark'>Access to Elite Micro-Lots</h3>
                <p className='mt-1'>We source from Hambela, Shakiso, and Uraga - Ethiopia&apos;s most celebrated Guji districts. Our relationships with top-tier washing stations give us access to competition-quality lots.</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <HiOutlineClipboardDocumentCheck className='text-2xl text-dark/60 mt-1 flex-shrink-0' />
              <div>
                <h3 className='font-bold text-dark'>Q-Grader Cupped & Verified</h3>
                <p className='mt-1'>Every Guji lot is cupped to SCA protocol. We provide full cupping reports with scoring, defect analysis, and flavor descriptors. Our 85+ minimum standard ensures consistent quality.</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <GiHoneypot className='text-2xl text-dark/60 mt-1 flex-shrink-0' />
              <div>
                <h3 className='font-bold text-dark'>Three Processing Methods</h3>
                <p className='mt-1'>Access washed, natural, and honey-processed Guji beans. We can help you find the exact profile for your market - from clean and bright to exotic and fruit-forward.</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <HiOutlineCube className='text-2xl text-dark/60 mt-1 flex-shrink-0' />
              <div>
                <h3 className='font-bold text-dark'>Pre-Shipment Samples</h3>
                <p className='mt-1'>Request green and roasted samples of any available Guji lot before committing. We ship samples worldwide by DHL within 48 hours of request.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='py-16 bg-dark text-primary'>
        <div className='max-w-4xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold mb-10 text-center'>Frequently Asked Questions About Guji Coffee</h2>
          <div className='space-y-6'>
            {[
              { q: 'What does Guji coffee taste like?', a: 'Guji is known for complex tropical fruit and stone fruit notes (peach, mango, papaya, apricot), vibrant citric acidity, jasmine-like florals, and a silky-to-full body. Naturals bring intense berries and wine-like sweetness, while washed Guji is cleaner and more floral.' },
              { q: 'What is the difference between Guji and Sidamo?', a: 'Guji was separated from the Sidamo classification in 2010. While geographically adjacent, Guji coffees grow at higher altitudes (up to 2,300m) and produce more complex, tropical-fruited profiles. Guji tends to score higher on average and commands higher premiums.' },
              { q: 'What grades are available?', a: 'We export Grade 1 (SCA 87-89+, minimal defects) and Grade 2 (SCA 85-87+) in washed, natural, and honey processing. Grade 1 naturals from Hambela are particularly prized for competition entries.' },
              { q: 'How much does Guji cost FOB?', a: 'Grade 2 washed: $3.80–$5.50/lb FOB Djibouti. Grade 1 naturals: $5.00–$8.00/lb FOB. Top Hambela micro-lots can reach even higher. Contact us for current season pricing and availability.' },
              { q: 'What is the minimum order?', a: 'Standard minimum is one FCL (≈19.2 MT, 320 × 60kg bags). You can mix Guji with other Ethiopian origins in the same container. LCL options may be available for micro-lot purchases.' },
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
          <h2 className='text-3xl font-extrabold mb-4'>Ready to Source Guji Coffee?</h2>
          <p className='text-primary/70 mb-8 text-lg'>
            Request pre-shipment samples, get current season pricing, or discuss your
            Guji requirements with our export team.
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

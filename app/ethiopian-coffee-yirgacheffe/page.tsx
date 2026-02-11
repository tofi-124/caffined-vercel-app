import Link from 'next/link'
import ResponsiveImage from '../components/ResponsiveImage'
import { PiCoffee } from 'react-icons/pi'
import { GiCoffeeBeans } from 'react-icons/gi'
import { HiOutlineClipboardDocumentCheck, HiOutlineMapPin, HiOutlineCube } from 'react-icons/hi2'
import { PiPlantFill } from 'react-icons/pi'

export default function YirgacheffeCoffeePage() {
  return (
    <main className='bg-primary text-dark'>
      {/* Hero */}
      <section className='relative bg-dark text-primary py-20 md:py-28'>
        <div className='max-w-5xl mx-auto px-6 text-center'>
          <p className='uppercase tracking-[0.3em] text-primary/60 text-sm mb-4'>Ethiopian Coffee Origin</p>
          <h1 className='text-4xl md:text-5xl font-extrabold leading-tight mb-6'>
            Yirgacheffe Coffee Beans
          </h1>
          <p className='text-lg md:text-xl text-primary/80 max-w-3xl mx-auto leading-relaxed'>
            World-renowned for its jasmine florals, bright citrus acidity, and tea-like body,
            Yirgacheffe is Ethiopia&apos;s most celebrated coffee origin and one of the most
            sought-after single-origin coffees on the planet.
          </p>
          <div className='mt-8 flex flex-wrap justify-center gap-4'>
            <Link href='/contact-us' className='bg-accent text-dark px-8 py-3 rounded font-bold hover:bg-accent/90 transition-colors'>
              Request Yirgacheffe Samples
            </Link>
            <Link href='/offerings' className='border border-primary/40 px-8 py-3 rounded font-bold hover:bg-primary/10 transition-colors'>
              View Available Lots
            </Link>
          </div>
        </div>
      </section>

      {/* Quick specs bar */}
      <section className='bg-accent/10 border-y border-accent/20'>
        <div className='max-w-5xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm'>
          <div>
            <p className='text-dark/50 uppercase tracking-widest text-xs'>Region</p>
            <p className='font-bold text-dark mt-1'>Gedeo Zone, SNNPR</p>
          </div>
          <div>
            <p className='text-dark/50 uppercase tracking-widest text-xs'>Altitude</p>
            <p className='font-bold text-dark mt-1'>1,700 – 2,200 masl</p>
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

      {/* What is Yirgacheffe */}
      <section className='py-16 md:py-20'>
        <div className='max-w-4xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold text-dark mb-6'>What Is Yirgacheffe Coffee?</h2>
          <div className='prose prose-lg max-w-none text-dark/80 space-y-4'>
            <p>
              Yirgacheffe (also spelled Yirgachefe) is a coffee-growing district in the <strong>Gedeo Zone</strong> of southern Ethiopia,
              located within the broader Sidama region. Despite technically being part of Sidama, Yirgacheffe coffees are so
              distinctive and prized that they are classified and traded as their own category - a recognition of their
              exceptional quality and unique flavor profile.
            </p>
            <p>
              Grown at elevations of <strong>1,700 to 2,200 meters</strong> above sea level, Yirgacheffe coffees benefit from
              ideal growing conditions: rich volcanic soil, ample rainfall, moderate temperatures, and shade from indigenous
              forest canopy. The coffee is almost exclusively <strong><Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='underline hover:text-dark/60'>heirloom Ethiopian Arabica varieties</Link></strong>, including JARC selections
              and local landraces that have been cultivated for centuries.
            </p>
            <p>
              Yirgacheffe is widely considered one of the <strong>finest coffee origins in the world</strong>. It consistently
              produces lots scoring 84–88+ on the <a href='https://sca.coffee/research/protocols-best-practices' target='_blank' rel='noopener noreferrer' className='underline hover:text-dark/60'>SCA cupping scale</a> and commands premium prices in the global specialty
              coffee market. For roasters, a Yirgacheffe offering is often a cornerstone of any single-origin program.
              To see how Yirgacheffe compares with other top Ethiopian origins, read our <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='underline hover:text-dark/60'>Yirgacheffe vs Sidamo vs Guji comparison</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Flavor Profile */}
      <section className='py-16 bg-dark text-primary'>
        <div className='max-w-5xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold mb-10 text-center'>Yirgacheffe Flavor Profile</h2>
          <div className='grid md:grid-cols-2 gap-10'>
            <div className='bg-primary/5 rounded-lg p-8 border border-primary/10'>
              <h3 className='text-xl font-bold mb-4 flex items-center gap-2'><PiCoffee className='text-2xl' /> Washed Yirgacheffe</h3>
              <p className='text-primary/70 mb-4'>The classic Yirgacheffe profile - clean, bright, and complex.</p>
              <ul className='space-y-2 text-primary/80'>
                <li><strong>Aroma:</strong> Jasmine, bergamot, honeysuckle</li>
                <li><strong>Flavor:</strong> Lemon, meyer lemon, earl grey tea</li>
                <li><strong>Acidity:</strong> Bright, vibrant, citric</li>
                <li><strong>Body:</strong> Light to medium, tea-like, silky</li>
                <li><strong>Finish:</strong> Clean, lingering floral sweetness</li>
                <li><strong>SCA Score:</strong> Typically 84–88+</li>
              </ul>
            </div>
            <div className='bg-primary/5 rounded-lg p-8 border border-primary/10'>
              <h3 className='text-xl font-bold mb-4 flex items-center gap-2'><GiCoffeeBeans className='text-2xl' /> Natural Yirgacheffe</h3>
              <p className='text-primary/70 mb-4'>Fruit-forward with intense sweetness and a heavier body.</p>
              <ul className='space-y-2 text-primary/80'>
                <li><strong>Aroma:</strong> Blueberry, strawberry, tropical fruit</li>
                <li><strong>Flavor:</strong> Berry jam, wine, dark chocolate</li>
                <li><strong>Acidity:</strong> Moderate, wine-like, malic</li>
                <li><strong>Body:</strong> Medium to full, syrupy</li>
                <li><strong>Finish:</strong> Sweet, fruity, lingering berry</li>
                <li><strong>SCA Score:</strong> Typically 85–88+</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-regions */}
      <section className='py-16 md:py-20'>
        <div className='max-w-5xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold text-dark mb-4'>Yirgacheffe Coffee Sub-Regions</h2>
          <p className='text-dark/60 mb-10 max-w-3xl'>
            Within the Yirgacheffe zone, distinct micro-regions produce coffees with subtly different
            characteristics. As an exporter, we source from all major sub-regions.
          </p>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              {
                name: 'Kochere',
                alt: '1,850–2,200m',
                notes: 'Bright citrus, floral jasmine, clean tea-like body. Often considered the pinnacle of Yirgacheffe quality.',
              },
              {
                name: 'Gelana Abaya',
                alt: '1,700–2,100m',
                notes: 'Tropical fruit, peach, honey, with a smooth, medium body. Known for well-balanced washed lots.',
              },
              {
                name: 'Gedeb',
                alt: '1,900–2,200m',
                notes: 'Intense floral aromatics, bergamot, and lemon zest. Produces some of the highest-scoring naturals.',
              },
              {
                name: 'Chelelectu',
                alt: '1,800–2,100m',
                notes: 'Stone fruit, citrus brightness, and a clean finish. A classic representation of the Yirgacheffe character.',
              },
              {
                name: 'Aricha / Idido',
                alt: '1,900–2,200m',
                notes: 'Complex berry and tropical notes in naturals. Known for producing bold, fruit-bomb cups.',
              },
              {
                name: 'Worka',
                alt: '1,750–2,100m',
                notes: 'Balanced sweetness, mild floral, and caramel notes. Reliable for consistent washed lots.',
              },
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
          <h2 className='text-3xl font-extrabold text-dark mb-4 text-center'>Yirgacheffe Export Specifications</h2>
          <p className='text-dark/60 text-center max-w-3xl mx-auto mb-10'>
            For a complete breakdown of how Ethiopian grades are determined, see our <Link href='/coffee-grading-ethiopia' className='underline hover:text-dark/90'>Ethiopian coffee grading guide</Link>.
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
                <tr className='border-b border-dark/10'>
                  <td className='px-4 py-3 font-medium'>SCA Cup Score</td>
                  <td className='px-4 py-3'>86 – 88+</td>
                  <td className='px-4 py-3'>84 – 86</td>
                </tr>
                <tr className='border-b border-dark/10 bg-white'>
                  <td className='px-4 py-3 font-medium'>Defect Count (per 300g)</td>
                  <td className='px-4 py-3'>0 – 3 defects</td>
                  <td className='px-4 py-3'>4 – 12 defects</td>
                </tr>
                <tr className='border-b border-dark/10'>
                  <td className='px-4 py-3 font-medium'>Screen Size</td>
                  <td className='px-4 py-3'>15 – 18</td>
                  <td className='px-4 py-3'>14 – 17</td>
                </tr>
                <tr className='border-b border-dark/10 bg-white'>
                  <td className='px-4 py-3 font-medium'>Moisture Content</td>
                  <td className='px-4 py-3'>10 – 12%</td>
                  <td className='px-4 py-3'>10 – 12%</td>
                </tr>
                <tr className='border-b border-dark/10'>
                  <td className='px-4 py-3 font-medium'>Processing</td>
                  <td className='px-4 py-3'>Washed & Natural</td>
                  <td className='px-4 py-3'>Washed & Natural</td>
                </tr>
                <tr className='border-b border-dark/10 bg-white'>
                  <td className='px-4 py-3 font-medium'>Packaging</td>
                  <td className='px-4 py-3'>60kg GrainPro-lined jute</td>
                  <td className='px-4 py-3'>60kg GrainPro-lined jute</td>
                </tr>
                <tr className='border-b border-dark/10'>
                  <td className='px-4 py-3 font-medium'>Incoterms</td>
                  <td className='px-4 py-3'>FOB Djibouti / CIF</td>
                  <td className='px-4 py-3'>FOB Djibouti / CIF</td>
                </tr>
                <tr className='bg-white'>
                  <td className='px-4 py-3 font-medium'>Harvest Season</td>
                  <td className='px-4 py-3'>October – January</td>
                  <td className='px-4 py-3'>October – January</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why source from us */}
      <section className='py-16 md:py-20'>
        <div className='max-w-4xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold text-dark mb-8'>Why Source Yirgacheffe from Ethio Coffee?</h2>
          <div className='space-y-6 text-dark/80'>
            <div className='flex gap-4'>
              <PiPlantFill className='text-2xl text-dark/60 mt-1 flex-shrink-0' />
              <div>
                <h3 className='font-bold text-dark'>Direct from Yirgacheffe Washing Stations</h3>
                <p className='mt-1'>We source directly from washing stations and cooperatives across Kochere, Gedeb, Gelana Abaya, and other premium Yirgacheffe sub-regions. No middlemen, no brokers.</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <HiOutlineClipboardDocumentCheck className='text-2xl text-dark/60 mt-1 flex-shrink-0' />
              <div>
                <h3 className='font-bold text-dark'>SCA-Protocol Quality Control</h3>
                <p className='mt-1'>Every Yirgacheffe lot is cupped by trained Q-graders using SCA protocol. We reject lots that don&apos;t meet our 84+ minimum standard. Full cupping reports provided with every shipment.</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <HiOutlineMapPin className='text-2xl text-dark/60 mt-1 flex-shrink-0' />
              <div>
                <h3 className='font-bold text-dark'>Full Traceability</h3>
                <p className='mt-1'>Station-level traceability for every Yirgacheffe lot we export: washing station name, GPS coordinates, altitude, harvest dates, processing method, and producer information.</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <HiOutlineCube className='text-2xl text-dark/60 mt-1 flex-shrink-0' />
              <div>
                <h3 className='font-bold text-dark'>Pre-Shipment Samples</h3>
                <p className='mt-1'>Request green and roasted samples of any available Yirgacheffe lot before committing to a container. Evaluate the cup quality in your own lab first.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='py-16 bg-dark text-primary'>
        <div className='max-w-4xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold mb-10 text-center'>Frequently Asked Questions About Yirgacheffe Coffee</h2>
          <div className='space-y-6'>
            {[
              {
                q: 'What makes Yirgacheffe coffee special?',
                a: 'Yirgacheffe coffee is world-renowned for its distinctive floral and citrus flavor profile, including jasmine, bergamot, lemon, and tea-like characteristics. Grown at 1,700-2,200 meters in the Gedeo Zone, it consistently scores 84-88+ on the SCA scale and is considered one of the finest coffees in the world.',
              },
              {
                q: 'What grades of Yirgacheffe are available for export?',
                a: 'We export Grade 1 (SCA 86-88+) and Grade 2 (SCA 84-86+) Yirgacheffe coffee in both washed and natural processing. Grade 1 is the highest specialty grade with minimal defects and the most refined cup profile.',
              },
              {
                q: 'What is the difference between washed and natural Yirgacheffe?',
                a: 'Washed Yirgacheffe is the classic profile: clean, bright, with jasmine florals and lemon citrus. Natural Yirgacheffe is fruitier and sweeter with berry jam, wine, and chocolate notes and a heavier body. Both are exceptional - the choice depends on your roasting program and customer preferences.',
              },
              {
                q: 'How much does Yirgacheffe coffee cost FOB?',
                a: 'Grade 2 washed typically ranges from $3.50-$5.00/lb FOB Djibouti. Grade 1 washed commands $4.50-$6.50/lb FOB. Natural lots can vary. Contact us for current season pricing and availability.',
              },
              {
                q: 'What is the minimum order for Yirgacheffe?',
                a: 'Standard minimum is one FCL (≈19.2 MT, 320 × 60kg bags). You can mix Yirgacheffe with other Ethiopian origins in the same container. Contact us for LCL options for trial shipments.',
              },
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
              { name: 'Sidamo (Sidama)', score: '84–87+', notes: 'Berry, floral, wine-like acidity', href: '/ethiopian-coffee-sidamo' },
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
          <h2 className='text-3xl font-extrabold mb-4'>Ready to Source Yirgacheffe Coffee?</h2>
          <p className='text-primary/70 mb-8 text-lg'>
            Request pre-shipment samples, get current season pricing, or discuss your
            Yirgacheffe requirements with our export team.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link href='/offerings' className='bg-accent text-dark px-8 py-3 rounded font-bold hover:bg-accent/90 transition-colors'>
              View Current Offerings
            </Link>
            <Link href='/contact-us' className='border border-primary/40 text-primary px-8 py-3 rounded font-bold hover:bg-primary/10 transition-colors'>
              Request Samples
            </Link>
            <Link href='/ordering-info' className='border border-primary/40 text-primary px-8 py-3 rounded font-bold hover:bg-primary/10 transition-colors'>
              How to Order
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PiCoffee, PiPlantFill } from 'react-icons/pi'
import { GiCoffeeBeans } from 'react-icons/gi'
import { HiOutlineClipboardDocumentCheck, HiOutlineMapPin, HiOutlineCube, HiOutlineShoppingCart, HiOutlineArrowRight } from 'react-icons/hi2'
import { offerings } from '../data/offerings'
import AddToCartButton from '../components/AddToCartButton'
import QuoteRequestPopup from '../components/QuoteRequestPopup'

const regionOfferings = offerings.filter((o) => o.region === 'Yirgacheffe')

export default function YirgacheffeCoffeePage() {
  const [quoteOpen, setQuoteOpen] = useState(false)

  return (
    <main className='bg-primary text-dark'>
      {/* Hero */}
      <header className="bg-[url(/images/about-us.webp)] bg-cover bg-center w-full min-h-[350px] lg:min-h-[450px] flex flex-col items-center justify-center relative py-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <p className='uppercase tracking-[0.3em] text-accent/80 text-sm mb-4 relative z-10'>Ethiopian Coffee Origin</p>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary relative z-10 text-center leading-tight'>
          Yirgacheffe Coffee Beans
        </h1>
        <p className='text-primary/80 mt-4 text-sm sm:text-base tracking-widest uppercase relative z-10 text-center max-w-2xl'>
          World-renowned for its jasmine florals, bright citrus acidity, and tea-like body.
        </p>
        <div className='mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 relative z-10 w-full sm:w-auto'>
          <Link href='/offerings' className='w-full sm:w-auto text-center bg-accent text-white px-6 py-3 sm:px-8 rounded-xl font-bold hover:bg-accent/90 transition-all duration-300 shadow-sm hover:shadow-md'>
            Order a Sample
          </Link>
          <Link href='/offerings' className='w-full sm:w-auto text-center border-2 border-primary/40 text-primary px-6 py-3 sm:px-8 rounded-xl font-bold hover:bg-white/10 transition-all duration-300'>
            View Available Lots
          </Link>
        </div>
      </header>

      {/* Stats band */}
      <section className='bg-accent/10 border-y border-accent/20'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8'>
          {[
            { label: 'Region', value: 'Gedeo Zone, SNNPR', icon: <HiOutlineMapPin className='text-lg' /> },
            { label: 'Altitude', value: '1,700 – 2,200 masl', icon: <PiPlantFill className='text-lg' /> },
            { label: 'Cup Score', value: 'SCA 84 – 88+', icon: <HiOutlineClipboardDocumentCheck className='text-lg' /> },
            { label: 'Export Grades', value: 'Grade 1 & Grade 2', icon: <GiCoffeeBeans className='text-lg' /> },
          ].map((stat) => (
            <div key={stat.label} className='flex flex-col items-center text-center gap-2'>
              <div className='w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent'>
                {stat.icon}
              </div>
              <p className='text-dark/50 uppercase tracking-widest text-xs'>{stat.label}</p>
              <p className='font-bold text-dark text-sm sm:text-base'>{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What is Yirgacheffe */}
      <section className='py-16 lg:py-24'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-dark'>What Is Yirgacheffe Coffee?</h2>
          <div className='w-16 h-1 bg-accent mt-4 mb-8' />
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
      <section className='py-16 lg:py-24 bg-dark text-primary'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-center'>Yirgacheffe Flavor Profile</h2>
          <div className='w-16 h-1 bg-accent mt-4 mb-12 mx-auto' />
          <div className='grid md:grid-cols-2 gap-8 lg:gap-10'>
            <div className='bg-primary/5 rounded-xl p-8 border border-primary/10 hover:shadow-md transition-shadow'>
              <h3 className='text-xl font-bold mb-4 flex items-center gap-3'>
                <span className='w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center'><PiCoffee className='text-xl text-accent' /></span>
                Washed Yirgacheffe
              </h3>
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
            <div className='bg-primary/5 rounded-xl p-8 border border-primary/10 hover:shadow-md transition-shadow'>
              <h3 className='text-xl font-bold mb-4 flex items-center gap-3'>
                <span className='w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center'><GiCoffeeBeans className='text-xl text-accent' /></span>
                Natural Yirgacheffe
              </h3>
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
      <section className='py-16 lg:py-24 bg-stone-50'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-dark'>Yirgacheffe Coffee Sub-Regions</h2>
          <div className='w-16 h-1 bg-accent mt-4 mb-4' />
          <p className='text-dark/60 mb-10 max-w-3xl'>
            Within the Yirgacheffe zone, distinct micro-regions produce coffees with subtly different
            characteristics. As an exporter, we source from all major sub-regions.
          </p>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              { name: 'Kochere', alt: '1,850–2,200m', notes: 'Bright citrus, floral jasmine, clean tea-like body. Often considered the pinnacle of Yirgacheffe quality.' },
              { name: 'Gelana Abaya', alt: '1,700–2,100m', notes: 'Tropical fruit, peach, honey, with a smooth, medium body. Known for well-balanced washed lots.' },
              { name: 'Gedeb', alt: '1,900–2,200m', notes: 'Intense floral aromatics, bergamot, and lemon zest. Produces some of the highest-scoring naturals.' },
              { name: 'Chelelectu', alt: '1,800–2,100m', notes: 'Stone fruit, citrus brightness, and a clean finish. A classic representation of the Yirgacheffe character.' },
              { name: 'Aricha / Idido', alt: '1,900–2,200m', notes: 'Complex berry and tropical notes in naturals. Known for producing bold, fruit-bomb cups.' },
              { name: 'Worka', alt: '1,750–2,100m', notes: 'Balanced sweetness, mild floral, and caramel notes. Reliable for consistent washed lots.' },
            ].map((region) => (
              <div key={region.name} className='bg-white rounded-xl p-6 border border-dark/10 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300'>
                <h3 className='text-lg font-bold text-dark'>{region.name}</h3>
                <p className='text-xs text-dark/50 uppercase tracking-widest mt-1'>{region.alt}</p>
                <p className='text-dark/70 mt-3 text-sm leading-relaxed'>{region.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Offerings */}
      {regionOfferings.length > 0 && (
        <section className='py-16 lg:py-24'>
          <div className='max-w-5xl mx-auto px-4 sm:px-6'>
            <h2 className='text-3xl sm:text-4xl font-extrabold text-dark'>Available Yirgacheffe Offerings</h2>
            <div className='w-16 h-1 bg-accent mt-4 mb-4' />
            <p className='text-dark/60 mb-10 max-w-3xl'>
              Order green coffee samples directly. Shipped worldwide via DHL Express.
            </p>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {regionOfferings.map((product) => (
                <div key={product.id} className='bg-white rounded-xl border border-dark/10 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col'>
                  <div className='p-6 flex-1'>
                    <div className='flex items-center justify-between gap-2'>
                      <p className='text-xs text-accent font-bold uppercase tracking-widest'>{product.specifications.processingMethod} · {product.specifications.grade}</p>
                      {product.isContracted && (
                        <span className='px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[10px] font-bold uppercase tracking-wider text-blue-700'>Contracted</span>
                      )}
                    </div>
                    <h3 className='text-lg font-bold text-dark mt-2'>{product.name}</h3>
                    <p className='text-dark/60 text-sm mt-2 leading-relaxed line-clamp-3'>{product.desc}</p>
                    {product.specifications.cupScore && (
                      <p className='text-xs text-dark/50 mt-3'>SCA {product.specifications.cupScore}</p>
                    )}
                    <div className='mt-4'>
                      <Link href={`/product/${product.id}`} className='text-accent text-sm font-bold hover:text-accent/80 transition-colors inline-flex items-center gap-1'>
                        View Details <HiOutlineArrowRight className='text-xs' />
                      </Link>
                    </div>
                  </div>
                  <div className='px-6 pb-6 pt-2'>
                    <AddToCartButton
                      productId={product.id}
                      productName={product.name}
                      sampleOptions={product.pricing.sampleOptions}
                      image_url={product.image_url}
                      isSoldOut={product.isSoldOut}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Export Specifications */}
      <section className='py-16 lg:py-24 bg-accent/5 border-y border-accent/10'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-dark text-center'>Yirgacheffe Export Specifications</h2>
          <div className='w-16 h-1 bg-accent mt-4 mb-4 mx-auto' />
          <p className='text-dark/60 text-center max-w-3xl mx-auto mb-10'>
            For a complete breakdown of how Ethiopian grades are determined, see our <Link href='/coffee-grading-ethiopia' className='underline hover:text-dark/90'>Ethiopian coffee grading guide</Link>.
          </p>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm border-collapse min-w-[500px]'>
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
                <tr className='bg-white'><td className='px-4 py-3 font-medium'>Harvest Season</td><td className='px-4 py-3'>October – January</td><td className='px-4 py-3'>October – January</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why source from us */}
      <section className='py-16 lg:py-24'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-dark'>Why Source Yirgacheffe from Ethio Coffee?</h2>
          <div className='w-16 h-1 bg-accent mt-4 mb-10' />
          <div className='grid md:grid-cols-2 gap-6'>
            {[
              { icon: <PiPlantFill className='text-xl' />, title: 'Direct from Yirgacheffe Washing Stations', desc: 'We source directly from washing stations and cooperatives across Kochere, Gedeb, Gelana Abaya, and other premium Yirgacheffe sub-regions. No middlemen, no brokers.' },
              { icon: <HiOutlineClipboardDocumentCheck className='text-xl' />, title: 'SCA-Protocol Quality Control', desc: "Every Yirgacheffe lot is cupped by trained Q-graders using SCA protocol. We reject lots that don\u2019t meet our 84+ minimum standard. Full cupping reports provided with every shipment." },
              { icon: <HiOutlineMapPin className='text-xl' />, title: 'Full Traceability', desc: 'Station-level traceability for every Yirgacheffe lot we export: washing station name, GPS coordinates, altitude, harvest dates, processing method, and producer information.' },
              { icon: <HiOutlineCube className='text-xl' />, title: 'Pre-Shipment Samples', desc: 'Order green coffee samples of any available Yirgacheffe lot before committing to a container. Evaluate the cup quality in your own lab first.' },
            ].map((item) => (
              <div key={item.title} className='bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-stone-100'>
                <div className='w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-4'>
                  {item.icon}
                </div>
                <h3 className='font-bold text-dark text-lg'>{item.title}</h3>
                <p className='mt-2 text-dark/70 leading-relaxed'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='py-16 lg:py-24 bg-dark text-primary'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-center'>Frequently Asked Questions</h2>
          <div className='w-16 h-1 bg-accent mt-4 mb-12 mx-auto' />
          <div className='space-y-6'>
            {[
              { q: 'What makes Yirgacheffe coffee special?', a: 'Yirgacheffe coffee is world-renowned for its distinctive floral and citrus flavor profile, including jasmine, bergamot, lemon, and tea-like characteristics. Grown at 1,700-2,200 meters in the Gedeo Zone, it consistently scores 84-88+ on the SCA scale and is considered one of the finest coffees in the world.' },
              { q: 'What grades of Yirgacheffe are available for export?', a: 'We export Grade 1 (SCA 86-88+) and Grade 2 (SCA 84-86+) Yirgacheffe coffee in both washed and natural processing. Grade 1 is the highest specialty grade with minimal defects and the most refined cup profile.' },
              { q: 'What is the difference between washed and natural Yirgacheffe?', a: 'Washed Yirgacheffe is the classic profile: clean, bright, with jasmine florals and lemon citrus. Natural Yirgacheffe is fruitier and sweeter with berry jam, wine, and chocolate notes and a heavier body. Both are exceptional - the choice depends on your roasting program and customer preferences.' },
              { q: 'How much does Yirgacheffe coffee cost FOB?', a: 'Grade 2 washed typically ranges from $3.50-$5.00/lb FOB Djibouti. Grade 1 washed commands $4.50-$6.50/lb FOB. Natural lots can vary. Contact us for current season pricing and availability.' },
              { q: 'What is the minimum order for Yirgacheffe?', a: 'Standard minimum is one FCL (\u224819.2 MT, 320 \u00d7 60kg bags). You can mix Yirgacheffe with other Ethiopian origins in the same container. Contact us for LCL options for trial shipments.' },
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
      <section className='py-16 lg:py-24 bg-stone-50'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-dark text-center'>Explore Other Ethiopian Coffee Regions</h2>
          <div className='w-16 h-1 bg-accent mt-4 mb-10 mx-auto' />
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              { name: 'Sidamo (Sidama)', score: '84–87+', notes: 'Berry, floral, wine-like acidity', href: '/ethiopian-coffee-sidamo' },
              { name: 'Guji', score: '85–89+', notes: 'Stone fruit, tropical, floral complexity', href: '/ethiopian-coffee-guji' },
              { name: 'Harar', score: '82–86+', notes: 'Wild berry, wine, dark chocolate', href: '/ethiopian-coffee-harar' },
              { name: 'Limu', score: '82–85+', notes: 'Wine, spice, balanced body', href: '/ethiopian-coffee-limu' },
              { name: 'Jimma (Djimmah)', score: '78–82', notes: 'Earthy, consistent, blend-friendly', href: '/ethiopian-coffee-jimma' },
            ].map((region) => (
              <Link key={region.name} href={region.href} className='group block bg-white rounded-xl p-6 border border-dark/10 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300'>
                <h3 className='font-bold text-dark group-hover:text-accent transition-colors'>{region.name}</h3>
                <p className='text-xs text-dark/50 mt-1'>SCA {region.score}</p>
                <p className='text-dark/60 text-sm mt-2'>{region.notes}</p>
                <span className='inline-flex items-center gap-1 text-accent text-sm font-bold mt-3 opacity-0 group-hover:opacity-100 transition-opacity'>
                  Explore <HiOutlineArrowRight className='text-xs' />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-16 lg:py-24 bg-accent text-white text-center'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6'>
          <h2 className='text-3xl sm:text-4xl font-extrabold mb-4'>Ready to Source Yirgacheffe Coffee?</h2>
          <p className='text-white/80 mb-10 text-lg'>
            Order pre-shipment samples, get current season pricing, or discuss your
            Yirgacheffe requirements with our export team.
          </p>
          <div className='flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4'>
            <Link href='/offerings' className='w-full sm:w-auto bg-white text-accent px-6 py-3 sm:px-8 rounded-xl font-bold hover:bg-white/90 transition-all duration-300 shadow-sm hover:shadow-md'>
              View Current Offerings
            </Link>
            <button onClick={() => setQuoteOpen(true)} className='w-full sm:w-auto border-2 border-white/40 text-white px-6 py-3 sm:px-8 rounded-xl font-bold hover:bg-white/10 transition-all duration-300'>
              Request a Wholesale Quote
            </button>
            <Link href='/ordering-info' className='w-full sm:w-auto border-2 border-white/40 text-white px-6 py-3 sm:px-8 rounded-xl font-bold hover:bg-white/10 transition-all duration-300'>
              How to Order
            </Link>
          </div>
        </div>
      </section>

      <QuoteRequestPopup
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        productName='Yirgacheffe Coffee'
        productImage='product-img.png'
      />
    </main>
  )
}

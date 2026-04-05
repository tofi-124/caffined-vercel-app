'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PiCoffee, PiPlantFill, PiTreeFill } from 'react-icons/pi'
import { GiCoffeeBeans } from 'react-icons/gi'
import { HiOutlineCurrencyDollar, HiOutlineChartBar, HiOutlineCube, HiOutlineClipboardDocumentCheck, HiOutlineArrowRight } from 'react-icons/hi2'
import { offerings } from '../data/offerings'
import AddToCartButton from '../components/AddToCartButton'
import QuoteRequestPopup from '../components/QuoteRequestPopup'

const regionOfferings = offerings.filter((o) => o.region === 'Limu')

export default function LimuCoffeePage() {
  const [quoteOpen, setQuoteOpen] = useState(false)

  return (
    <main className='bg-primary text-dark'>
      {/* Hero */}
      <header className="bg-[url(/images/about-us.webp)] bg-cover bg-center w-full min-h-[350px] lg:min-h-[450px] flex flex-col items-center justify-center relative py-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <p className='uppercase tracking-[0.3em] text-accent/80 text-sm mb-4 relative z-10'>Ethiopian Coffee Origin</p>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary relative z-10 text-center leading-tight'>
          Limu Coffee
        </h1>
        <p className='text-primary/80 mt-4 text-sm sm:text-base tracking-widest uppercase relative z-10 text-center max-w-2xl'>
          Wine-Toned Acidity. Warm Spice. Balanced Body.
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
            { label: 'Region', value: 'Jimma Zone, Oromia (SW)', icon: <PiPlantFill className='text-lg' /> },
            { label: 'Altitude', value: '1,400 – 2,000 masl', icon: <GiCoffeeBeans className='text-lg' /> },
            { label: 'Cup Score', value: 'SCA 82 – 85+', icon: <HiOutlineClipboardDocumentCheck className='text-lg' /> },
            { label: 'Processing', value: 'Washed (Wet Processed)', icon: <PiCoffee className='text-lg' /> },
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

      {/* What is Limu */}
      <section className='py-16 lg:py-24'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-dark'>What Is Limu Coffee?</h2>
          <div className='w-16 h-1 bg-accent mt-4 mb-8' />
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
              <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='underline hover:text-dark/60'> washed processing shapes Ethiopian coffee flavor</Link>, see our processing guide.
              While it may not grab headlines like Yirgacheffe or Guji, Limu is the <strong>quiet backbone of many premium blends</strong> and
              an excellent single-origin offering for roasters who value consistency and depth.
            </p>
            <p>
              What makes Limu especially attractive for importers is its
              <strong> exceptional quality-to-price ratio</strong>. Limu delivers specialty-grade complexity
              at a lower FOB price than southern Ethiopian origins, making it ideal for year-round
              programs, espresso blends, and high-volume specialty accounts. For current pricing benchmarks,
              see our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='underline hover:text-dark/60'>Ethiopian coffee FOB pricing guide</Link>. For a complete sourcing walkthrough including sub-regions, grading, and step-by-step import process, read our <Link href='/insights/limu-coffee-sourcing-guide' className='underline hover:text-dark/60'>Limu coffee sourcing guide</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Flavor Profile */}
      <section className='py-16 lg:py-24 bg-dark text-primary'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-center'>Limu Flavor Profile</h2>
          <div className='w-16 h-1 bg-accent mt-4 mb-12 mx-auto' />
          <div className='max-w-2xl mx-auto'>
            <div className='bg-primary/5 rounded-xl p-8 border border-primary/10 hover:shadow-md transition-shadow'>
              <h3 className='text-xl font-bold mb-4 flex items-center gap-3'>
                <span className='w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center'><PiCoffee className='text-xl text-accent' /></span>
                Washed Limu
              </h3>
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
      <section className='py-16 lg:py-24 bg-stone-50'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-dark'>Limu Coffee Growing Areas</h2>
          <div className='w-16 h-1 bg-accent mt-4 mb-4' />
          <p className='text-dark/60 mb-10 max-w-3xl'>
            Limu coffee is grown across several woredas (districts) in the southwestern
            Jimma zone, each contributing to the region&apos;s consistent, high-quality output.
          </p>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              { name: 'Limu Kosa', alt: '1,500–2,000m', notes: 'The heart of Limu production. Clean, balanced coffees with pronounced wine-like acidity and warm spice. Reliable quality year after year.' },
              { name: 'Limu Seka', alt: '1,400–1,800m', notes: 'Slightly lower altitude producing fuller-bodied, more chocolatey coffees. Popular for espresso blend components.' },
              { name: 'Gomma', alt: '1,500–1,900m', notes: 'Forest-shaded coffee with complex flavor development. Known for honey-sweet, clean cups with floral undertones.' },
              { name: 'Gera', alt: '1,600–2,000m', notes: 'Higher-altitude area near the Gera rainforest. Produces brighter, more complex lots with fruit and citrus notes. Growing specialty recognition.' },
              { name: 'Manna', alt: '1,500–1,800m', notes: 'Consistent, well-balanced coffees with classic Limu wine-spice character. Strong cooperative infrastructure ensures traceability.' },
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
            <h2 className='text-3xl sm:text-4xl font-extrabold text-dark'>Available Limu Offerings</h2>
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
          <h2 className='text-3xl sm:text-4xl font-extrabold text-dark text-center'>Limu Export Specifications</h2>
          <div className='w-16 h-1 bg-accent mt-4 mb-4 mx-auto' />
          <p className='text-dark/60 text-center max-w-3xl mx-auto mb-10'>
            Graded per <a href='https://www.ico.org/' target='_blank' rel='noopener noreferrer' className='underline hover:text-dark/90'>ICO</a> and ECX standards. See our <Link href='/coffee-grading-ethiopia' className='underline hover:text-dark/90'>Ethiopian coffee grading guide</Link> for full methodology.
          </p>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm border-collapse min-w-[500px]'>
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
          <h2 className='text-3xl sm:text-4xl font-extrabold text-dark'>Why Source Limu from Ethio Coffee?</h2>
          <div className='w-16 h-1 bg-accent mt-4 mb-10' />
          <div className='grid md:grid-cols-2 gap-6'>
            {[
              { icon: <HiOutlineCurrencyDollar className='text-xl' />, title: 'Best Value in Ethiopian Specialty', desc: 'Limu delivers SCA 82-85+ quality at FOB prices 15-25% below Yirgacheffe and Guji. For roasters running year-round Ethiopian programs or building premium blends, Limu is the smart choice.' },
              { icon: <HiOutlineChartBar className='text-xl' />, title: 'Exceptional Consistency', desc: "Limu\u2019s established washing station infrastructure and mature growing conditions produce remarkably consistent lots season after season. Perfect for maintaining blend profiles or single-origin programs." },
              { icon: <PiTreeFill className='text-xl' />, title: 'Forest-Grown Heritage', desc: "Much of Limu\u2019s coffee grows under indigenous forest canopy near the Gera and Belete-Gera rainforests - among Ethiopia\u2019s most important biodiversity hotspots. Natural shade, no irrigation, minimal inputs." },
              { icon: <HiOutlineCube className='text-xl' />, title: 'Volume Availability', desc: "Limu is one of Ethiopia\u2019s larger producing regions, ensuring reliable supply even for high-volume importers. We can fulfill multi-container programs throughout the season." },
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
              { q: 'What does Limu coffee taste like?', a: 'Limu is known for wine-like acidity, warm spice notes (cardamom, cinnamon), dark honey sweetness, and a medium-full body. The cup is clean, balanced, and versatile - working beautifully as filter single origin, espresso blend, or cold brew.' },
              { q: 'Is Limu coffee specialty grade?', a: 'Yes, Limu Grade 2 consistently scores 83-85+ on the SCA scale, firmly in specialty territory. While it doesn\'t reach the ultra-high scores of top Guji or Yirgacheffe lots, Limu\'s clean, complex cup profile makes it a genuine specialty origin at a more accessible price.' },
              { q: 'What is the difference between Limu and Jimma?', a: 'Limu and Jimma are both southwestern origins, but Limu is washed processed and grown at higher altitudes (1,400-2,000m), producing cleaner, more complex cups. Jimma (Djimmah) is predominantly natural processed at lower altitudes and is used mainly for commercial blends.' },
              { q: 'How much does Limu coffee cost FOB?', a: 'Grade 2 washed: $2.80\u2013$3.80/lb FOB Djibouti. Grade 3: $2.40\u2013$3.00/lb. Limu offers 15-25% savings vs Yirgacheffe at comparable quality, making it ideal for volume programs. Contact us for current pricing.' },
              { q: 'What is the minimum order?', a: 'Standard minimum is one FCL (\u224819.2 MT, 320 \u00d7 60kg bags). Limu pairs well with other Ethiopian origins in mixed containers. Volume discounts available for multi-container commitments.' },
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
              { name: 'Yirgacheffe', score: '84\u201388+', notes: 'Jasmine, bergamot, lemon, tea-like body', href: '/ethiopian-coffee-yirgacheffe' },
              { name: 'Sidamo', score: '84\u201387+', notes: 'Berry, wine, rich body, stone fruit', href: '/ethiopian-coffee-sidamo' },
              { name: 'Guji', score: '85\u201389+', notes: 'Stone fruit, tropical, floral complexity', href: '/ethiopian-coffee-guji' },
              { name: 'Harar', score: '82\u201386+', notes: 'Wild berry, wine, dark chocolate', href: '/ethiopian-coffee-harar' },
              { name: 'Jimma (Djimmah)', score: '78\u201382', notes: 'Earthy, consistent, blend-friendly', href: '/ethiopian-coffee-jimma' },
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
          <h2 className='text-3xl sm:text-4xl font-extrabold mb-4'>Ready to Source Limu Coffee?</h2>
          <p className='text-white/80 mb-10 text-lg'>
            Order pre-shipment samples, get current season pricing, or discuss your
            Limu requirements with our export team.
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
        productName='Limu Coffee'
        productImage='product-img.png'
      />
    </main>
  )
}

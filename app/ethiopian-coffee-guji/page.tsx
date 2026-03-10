'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PiCoffee, PiPlantFill } from 'react-icons/pi'
import { GiCoffeeBeans, GiHoneypot } from 'react-icons/gi'
import { HiOutlineClipboardDocumentCheck, HiOutlineCube, HiOutlineArrowRight } from 'react-icons/hi2'
import { TbMountain } from 'react-icons/tb'
import { offerings } from '../data/offerings'
import AddToCartButton from '../components/AddToCartButton'
import QuoteRequestPopup from '../components/QuoteRequestPopup'

const regionOfferings = offerings.filter((o) => o.region === 'Guji')

export default function GujiCoffeePage() {
  const [quoteOpen, setQuoteOpen] = useState(false)

  return (
    <main className='bg-primary text-dark'>
      {/* Hero */}
      <header className="bg-[url(/images/about-us.webp)] bg-cover bg-center w-full min-h-[350px] lg:min-h-[450px] flex flex-col items-center justify-center relative py-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <p className='uppercase tracking-[0.3em] text-accent/80 text-sm mb-4 relative z-10'>Ethiopian Coffee Origin</p>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary relative z-10 text-center leading-tight'>
          Guji Coffee
        </h1>
        <p className='text-primary/80 mt-4 text-sm sm:text-base tracking-widest uppercase relative z-10 text-center max-w-2xl'>
          Tropical Fruit. Vibrant Acidity. Award-Winning Scores.
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
            { label: 'Region', value: 'Guji Zone, Oromia', icon: <PiPlantFill className='text-lg' /> },
            { label: 'Altitude', value: '1,800 – 2,300 masl', icon: <TbMountain className='text-lg' /> },
            { label: 'Cup Score', value: 'SCA 85 – 89+', icon: <HiOutlineClipboardDocumentCheck className='text-lg' /> },
            { label: 'Processing', value: 'Washed · Natural · Honey', icon: <PiCoffee className='text-lg' /> },
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

      {/* What is Guji */}
      <section className='py-16 lg:py-24'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-dark'>What Is Guji Coffee?</h2>
          <div className='w-16 h-1 bg-accent mt-4 mb-8' />
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
              <Link href='/insights/afca-taste-of-harvest-ethiopian-coffee-competition' className='underline hover:text-dark/60'> AFCA Taste of Harvest competition</Link>, earning top honors.
            </p>
          </div>
        </div>
      </section>

      {/* Flavor Profile */}
      <section className='py-16 lg:py-24 bg-dark text-primary'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-center'>Guji Flavor Profile</h2>
          <div className='w-16 h-1 bg-accent mt-4 mb-12 mx-auto' />
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-primary/5 rounded-xl p-8 border border-primary/10 hover:shadow-md transition-shadow'>
              <h3 className='text-xl font-bold mb-4 flex items-center gap-3'>
                <span className='w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center'><PiCoffee className='text-xl text-accent' /></span>
                Washed Guji
              </h3>
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
            <div className='bg-primary/5 rounded-xl p-8 border border-primary/10 hover:shadow-md transition-shadow'>
              <h3 className='text-xl font-bold mb-4 flex items-center gap-3'>
                <span className='w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center'><GiCoffeeBeans className='text-xl text-accent' /></span>
                Natural Guji
              </h3>
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
            <div className='bg-primary/5 rounded-xl p-8 border border-primary/10 hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1'>
              <h3 className='text-xl font-bold mb-4 flex items-center gap-3'>
                <span className='w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center'><GiHoneypot className='text-xl text-accent' /></span>
                Honey Guji
              </h3>
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
      <section className='py-16 lg:py-24 bg-stone-50'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-dark'>Guji Coffee Sub-Regions</h2>
          <div className='w-16 h-1 bg-accent mt-4 mb-4' />
          <p className='text-dark/60 mb-10 max-w-3xl'>
            The Guji zone stretches across multiple high-altitude districts, each with its own
            microclimate, soil composition, and processing traditions.
          </p>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              { name: 'Hambela (Hambella)', alt: '1,900–2,300m', notes: 'The crown jewel of Guji. Intense tropical fruit, jasmine, and strawberry. Home to competition-winning lots scoring 89+. We operate our own drying station here, collecting and processing cherry from local smallholder farmers.' },
              { name: 'Shakiso', alt: '1,800–2,200m', notes: 'Complex, balanced coffees with stone fruit and citrus brightness. Known for exceptional micro-lots from family holdings.' },
              { name: 'Uraga', alt: '1,900–2,200m', notes: 'Floral-forward with tea-like delicacy and bright lemon acidity. Uraga washed lots rival top Yirgacheffe coffees.' },
              { name: 'Kercha', alt: '1,800–2,100m', notes: 'Rich, full-bodied coffees with dark fruit and chocolate notes. Strong natural processing tradition.' },
              { name: 'Bule Hora', alt: '1,700–2,000m', notes: 'Balanced, smooth coffees with stone fruit sweetness and a clean finish. Excellent value for specialty-grade lots.' },
              { name: 'Adola Rede', alt: '1,800–2,100m', notes: 'Emerging area producing complex naturals with berry and wine characteristics. Growing recognition among specialty buyers.' },
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
            <h2 className='text-3xl sm:text-4xl font-extrabold text-dark'>Available Guji Offerings</h2>
            <div className='w-16 h-1 bg-accent mt-4 mb-4' />
            <p className='text-dark/60 mb-10 max-w-3xl'>
              Order green coffee samples directly. Shipped worldwide via DHL Express.
            </p>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {regionOfferings.map((product) => (
                <div key={product.id} className='bg-white rounded-xl border border-dark/10 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col'>
                  <div className='p-6 flex-1'>
                    <p className='text-xs text-accent font-bold uppercase tracking-widest'>{product.specifications.processingMethod} · {product.specifications.grade}</p>
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
          <h2 className='text-3xl sm:text-4xl font-extrabold text-dark text-center'>Guji Export Specifications</h2>
          <div className='w-16 h-1 bg-accent mt-4 mb-4 mx-auto' />
          <p className='text-dark/60 text-center max-w-3xl mx-auto mb-10'>
            Grades are based on defect count and <a href='https://sca.coffee/research/protocols-best-practices' target='_blank' rel='noopener noreferrer' className='underline hover:text-dark/90'>SCA cupping scores</a>. See our <Link href='/coffee-grading-ethiopia' className='underline hover:text-dark/90'>Ethiopian coffee grading guide</Link> for details.
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
                <tr className='border-b border-dark/10'><td className='px-4 py-3 font-medium'>SCA Cup Score</td><td className='px-4 py-3'>87 – 89+</td><td className='px-4 py-3'>85 – 87</td></tr>
                <tr className='border-b border-dark/10 bg-white'><td className='px-4 py-3 font-medium'>Defect Count (per 300g)</td><td className='px-4 py-3'>0 – 3 defects</td><td className='px-4 py-3'>4 – 12 defects</td></tr>
                <tr className='border-b border-dark/10'><td className='px-4 py-3 font-medium'>Screen Size</td><td className='px-4 py-3'>15 – 18</td><td className='px-4 py-3'>14 – 17</td></tr>
                <tr className='border-b border-dark/10 bg-white'><td className='px-4 py-3 font-medium'>Moisture Content</td><td className='px-4 py-3'>10 – 12%</td><td className='px-4 py-3'>10 – 12%</td></tr>
                <tr className='border-b border-dark/10'><td className='px-4 py-3 font-medium'>Processing</td><td className='px-4 py-3'>Washed, Natural & Honey</td><td className='px-4 py-3'>Washed, Natural & Honey</td></tr>
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
          <h2 className='text-3xl sm:text-4xl font-extrabold text-dark'>Why Source Guji from Ethio Coffee?</h2>
          <div className='w-16 h-1 bg-accent mt-4 mb-10' />
          <div className='grid md:grid-cols-2 gap-6'>
            {[
              { icon: <TbMountain className='text-xl' />, title: 'Access to Elite Micro-Lots', desc: "We source from Hambela, Shakiso, and Uraga - Ethiopia\u2019s most celebrated Guji districts. We operate our own drying station in Hambella where we collect and process cherry directly from smallholder farmers, and our relationships with top-tier washing stations give us access to competition-quality lots." },
              { icon: <HiOutlineClipboardDocumentCheck className='text-xl' />, title: 'Q-Grader Cupped & Verified', desc: 'Every Guji lot is cupped to SCA protocol. We provide full cupping reports with scoring, defect analysis, and flavor descriptors. Our 85+ minimum standard ensures consistent quality.' },
              { icon: <GiHoneypot className='text-xl' />, title: 'Three Processing Methods', desc: 'Access washed, natural, and honey-processed Guji beans. We can help you find the exact profile for your market - from clean and bright to exotic and fruit-forward.' },
              { icon: <HiOutlineCube className='text-xl' />, title: 'Pre-Shipment Samples', desc: 'Order green coffee samples of any available Guji lot before committing. We ship samples worldwide by DHL within 48 hours.' },
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
              { q: 'What does Guji coffee taste like?', a: 'Guji is known for complex tropical fruit and stone fruit notes (peach, mango, papaya, apricot), vibrant citric acidity, jasmine-like florals, and a silky-to-full body. Naturals bring intense berries and wine-like sweetness, while washed Guji is cleaner and more floral.' },
              { q: 'What is the difference between Guji and Sidamo?', a: 'Guji was separated from the Sidamo classification in 2010. While geographically adjacent, Guji coffees grow at higher altitudes (up to 2,300m) and produce more complex, tropical-fruited profiles. Guji tends to score higher on average and commands higher premiums.' },
              { q: 'What grades are available?', a: 'We export Grade 1 (SCA 87-89+, minimal defects) and Grade 2 (SCA 85-87+) in washed, natural, and honey processing. Grade 1 naturals from Hambela are particularly prized for competition entries.' },
              { q: 'How much does Guji cost FOB?', a: 'Grade 2 washed: $3.80\u2013$5.50/lb FOB Djibouti. Grade 1 naturals: $5.00\u2013$8.00/lb FOB. Top Hambela micro-lots can reach even higher. Contact us for current season pricing and availability.' },
              { q: 'What is the minimum order?', a: 'Standard minimum is one FCL (\u224819.2 MT, 320 \u00d7 60kg bags). You can mix Guji with other Ethiopian origins in the same container. LCL options may be available for micro-lot purchases.' },
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
              { name: 'Harar', score: '82\u201386+', notes: 'Wild berry, wine, dark chocolate', href: '/ethiopian-coffee-harar' },
              { name: 'Limu', score: '82\u201385+', notes: 'Wine, spice, balanced body', href: '/ethiopian-coffee-limu' },
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
          <h2 className='text-3xl sm:text-4xl font-extrabold mb-4'>Ready to Source Guji Coffee?</h2>
          <p className='text-white/80 mb-10 text-lg'>
            Order pre-shipment samples, get current season pricing, or discuss your
            Guji requirements with our export team.
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
        productName='Guji Coffee'
        productImage='product-img.png'
      />
    </main>
  )
}

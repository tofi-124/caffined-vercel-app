import Link from 'next/link'
import ResponsiveImage from '../components/ResponsiveImage'
import { ArrowRight } from '../components/Arrow'
import AutoScrollTo from '../components/AutoScrollTo'
import dynamic from 'next/dynamic'

const Testimonials = dynamic(() => import('../components/Testimonials'), {
  loading: () => <section className='min-h-[320px] bg-dark' />,
})

const origins = [
  {
    name: 'Yirgacheffe',
    grade: 'Grade 1 & 2',
    processing: 'Washed & Natural',
    altitude: '1,750 – 2,200m',
    cupScore: 'SCA 84-88+',
    flavorNotes: 'Jasmine, bergamot, lemon, black tea, honey',
    body: 'Light, silky, tea-like',
    bestFor: 'Pour-over, filter, light-roast single origin',
    link: '/ethiopian-coffee-yirgacheffe',
  },
  {
    name: 'Sidamo (Sidama)',
    grade: 'Grade 1 & 2',
    processing: 'Washed & Natural',
    altitude: '1,550 – 2,200m',
    cupScore: 'SCA 84-87+',
    flavorNotes: 'Blueberry, strawberry, wine, dark chocolate, brown sugar',
    body: 'Medium, syrupy',
    bestFor: 'Single-origin espresso, cold brew, filter',
    link: '/ethiopian-coffee-sidamo',
  },
  {
    name: 'Guji',
    grade: 'Grade 1 & 2',
    processing: 'Washed, Natural & Honey',
    altitude: '1,800 – 2,300m',
    cupScore: 'SCA 85-89+',
    flavorNotes: 'Peach, apricot, jasmine, honeysuckle, tropical',
    body: 'Heavy, syrupy, complex',
    bestFor: 'Competition-level roasts, high-end single origin',
    link: '/ethiopian-coffee-guji',
  },
  {
    name: 'Harar',
    grade: 'Grade 1 & 4',
    processing: 'Natural (Dry-processed)',
    altitude: '1,500 – 2,100m',
    cupScore: 'SCA 82-86+',
    flavorNotes: 'Dried fruit, wine, dark chocolate, spice, mocha',
    body: 'Full, bold, rustic',
    bestFor: 'Espresso blends, mocha-style brewing, traditional roasts',
    link: '/ethiopian-coffee-harar',
  },
  {
    name: 'Limu',
    grade: 'Grade 2 & 3',
    processing: 'Washed',
    altitude: '1,400 – 2,100m',
    cupScore: 'SCA 82-85+',
    flavorNotes: 'Lemon, grapefruit, wine, raw sugar, spice',
    body: 'Medium, balanced',
    bestFor: 'Versatile blending, approachable single origin',
    link: '/ethiopian-coffee-limu',
  },
  {
    name: 'Lekempti (Wollega)',
    grade: 'Grade 2 & 3',
    processing: 'Washed & Natural',
    altitude: '1,500 – 2,100m',
    cupScore: 'SCA 82-85+',
    flavorNotes: 'Mango, papaya, cocoa, brown sugar, tropical fruit',
    body: 'Medium-full, smooth, velvety',
    bestFor: 'Unique single origin, fruit-forward blends',
    link: '/product/lekempti',
  },
]

export default function EthiopianGreenCoffeeBeansPage() {
  return (
    <main className='bg-primary'>
      <AutoScrollTo targetId='green-beans-hero' />

      {/* Hero */}
      <section id='green-beans-hero' className='bg-dark text-primary py-20 lg:py-28'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col lg:flex-row items-center gap-12'>
            <div className='lg:w-1/2'>
              <p className='text-accent uppercase tracking-widest text-sm font-bold mb-4'>
                Direct from Ethiopia&apos;s Highlands
              </p>
              <h1 className='text-5xl lg:text-6xl font-extrabold leading-tight mb-6'>
                Ethiopian Green Coffee Beans
              </h1>
              <p className='text-xl text-primary/90 mb-6'>
                <strong>Ethiopian green coffee beans</strong> are the world&apos;s most sought-after unroasted Arabica - prized by specialty roasters for their 
                extraordinary floral, fruity, and wine-like complexity. As a <strong>licensed Ethiopian coffee exporter</strong>, we ship 
                SCA 80+ scored green beans directly from origin to your door.
              </p>
              <p className='text-primary/80 mb-8 max-w-[60ch]'>
                Whether you&apos;re sourcing single-origin lots for your roastery or commercial-grade greens for blending, 
                we supply fully traceable Ethiopian green coffee beans in Grade 1 through Grade 5, shipped FOB Djibouti 
                or FCA (Free Carrier) for air freight.
              </p>
              <div className='flex flex-wrap gap-4'>
                <Link href="/offerings" className='px-6 py-4 bg-accent hover:bg-accent/90 text-white border-2 border-accent rounded-xl font-bold transition-all shadow-sm hover:shadow-md'>
                  VIEW CURRENT LOTS
                </Link>
                <Link href="/contact-us" className='px-6 py-4 bg-transparent hover:bg-primary/10 text-primary border-2 border-primary/40 rounded-xl font-bold transition-all'>
                  REQUEST SAMPLES
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ethiopian Green Coffee Section */}
      <section className='container mx-auto px-4 py-16 lg:py-24'>
        <h2 className='text-4xl font-extrabold text-dark mb-4 text-center'>Why Ethiopian Green Coffee Beans?</h2>
        <p className='text-dark/70 text-center max-w-3xl mx-auto mb-12'>
          Ethiopia is the birthplace of Arabica coffee. With over 10,000 indigenous <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='underline hover:text-dark/60'>heirloom varieties</Link>, 
          unmatched genetic diversity, and centuries of cultivation heritage, Ethiopian green coffee beans 
          offer flavour profiles impossible to replicate anywhere else on earth.
        </p>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {[
            { title: 'Birthplace of Arabica', desc: 'Ethiopia is where Coffea Arabica originated. Wild coffee still grows in the highland forests of Kaffa, Jimma, and Illubabor - the genetic cradle of all the world\'s Arabica coffee.' },
            { title: '10,000+ Heirloom Varieties', desc: 'Ethiopian coffee forests contain more genetic diversity than all other producing countries combined. This diversity creates the complex, multi-layered flavour profiles that specialty roasters prize.' },
            { title: 'Altitude: 1,400–2,300m', desc: 'Ethiopian coffee grows at some of the highest elevations in the world. High altitude means slower cherry maturation, denser beans, more complex sugars, and brighter acidity in the cup.' },
            { title: 'Washed, Natural & Honey', desc: 'Ethiopian exporters offer all three major processing methods. Washed for clarity and florals, natural for fruit intensity and body, honey for balanced sweetness - each creating distinct cup profiles.' },
            { title: 'SCA 80–89+ Scores', desc: 'Ethiopian green coffees routinely score among the highest globally. Yirgacheffe, Guji, and Sidamo regularly appear in Cup of Excellence and Taste of Harvest competitions. Learn more about how scoring works in our Ethiopian coffee grading guide.' },
            { title: 'Traceable & Transparent', desc: 'Modern Ethiopian exporters provide full traceability: washing station, farm/coop ID, lot number, harvest period, altitude, processing, and SCA cupping reports with every shipment.' },
          ].map((item, i) => (
            <article key={i} className='bg-white rounded-2xl p-8 shadow-sm border border-dark/5'>
              <h3 className='text-xl font-bold text-dark mb-3'>{item.title}</h3>
              <p className='text-dark/70 leading-relaxed'>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Origins Table */}
      <section className='bg-dark text-primary py-16 lg:py-24'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-extrabold mb-4 text-center'>Ethiopian Green Coffee by Origin</h2>
          <p className='text-primary/70 text-center max-w-3xl mx-auto mb-12'>
            Every Ethiopian coffee origin produces a distinctly different cup. Here&apos;s how they compare. 
            For more detail, read our <Link href='/insights/guide-ethiopian-coffee-origins' className='text-accent hover:underline'>guide to Ethiopian coffee origins</Link> or 
            see our <Link href='/coffee-grading-ethiopia' className='text-accent hover:underline'>grading system</Link> explained.
          </p>
          <div className='grid gap-8'>
            {origins.map((origin) => (
              <article key={origin.name} className='bg-primary/5 border border-primary/10 rounded-2xl p-6 lg:p-8'>
                <div className='flex flex-col lg:flex-row lg:items-start gap-6'>
                  <div className='lg:w-1/3'>
                    <h3 className='text-2xl font-extrabold text-accent mb-2'>{origin.name}</h3>
                    <p className='text-sm text-primary/60 mb-3'>{origin.altitude} · {origin.cupScore}</p>
                    <Link href={origin.link} className='text-accent hover:text-accent/80 font-bold text-sm underline inline-flex items-center gap-1'>
                      View Current Lot <ArrowRight className='inline-block h-3.5 w-3.5' />
                    </Link>
                  </div>
                  <div className='lg:w-2/3 grid sm:grid-cols-2 gap-4 text-sm'>
                    <div><span className='text-primary/50 block'>Grade</span><span className='font-bold'>{origin.grade}</span></div>
                    <div><span className='text-primary/50 block'>Processing</span><span className='font-bold'>{origin.processing}</span></div>
                    <div><span className='text-primary/50 block'>Flavour Notes</span><span className='font-bold'>{origin.flavorNotes}</span></div>
                    <div><span className='text-primary/50 block'>Body</span><span className='font-bold'>{origin.body}</span></div>
                    <div className='sm:col-span-2'><span className='text-primary/50 block'>Best For</span><span className='font-bold'>{origin.bestFor}</span></div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How We Export Section */}
      <section className='container mx-auto px-4 py-16 lg:py-24'>
        <h2 className='text-4xl font-extrabold text-dark mb-4 text-center'>How We Export Ethiopian Green Coffee Beans</h2>
        <p className='text-dark/70 text-center max-w-3xl mx-auto mb-12'>
          From cherry to container, here&apos;s how your Ethiopian green coffee beans move from our origin to your roastery.
        </p>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {[
            { step: '01', title: 'Sourcing & Cupping', desc: 'We source from vetted cooperatives, washing stations, and farming communities across Yirgacheffe, Sidamo, Guji, Harar, Limu, and Lekempti. Every lot is cupped on SCA protocol by certified Q-graders.' },
            { step: '02', title: 'Processing & Preparation', desc: 'Green beans are processed (washed, natural, or honey), hulled, sorted, and graded per Ethiopian Commodity Exchange (ECX) and International Coffee Organization (ICO) standards. Defect count verified.' },
            { step: '03', title: 'Packaging & Storage', desc: 'Packed in 60kg jute bags with GrainPro hermetic liners. Stored in climate-controlled warehouses in Addis Ababa until shipping. Moisture and water activity monitored.' },
            { step: '04', title: 'Shipping FOB Djibouti', desc: 'Full export documentation (ICO certificate, phytosanitary, certificate of origin, cupping report) prepared. Shipped via Djibouti port FOB for ocean freight or FCA (Free Carrier) for air freight.' },
          ].map((item) => (
            <div key={item.step} className='text-center'>
              <div className='w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center text-2xl font-extrabold mx-auto mb-4'>{item.step}</div>
              <h3 className='text-lg font-bold text-dark mb-2'>{item.title}</h3>
              <p className='text-dark/70 text-sm leading-relaxed'>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className='bg-white py-16 lg:py-24'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-extrabold text-dark mb-12 text-center'>Frequently Asked Questions About Ethiopian Green Coffee Beans</h2>
          <div className='max-w-3xl mx-auto space-y-8'>
            {[
              { q: 'What are Ethiopian green coffee beans?', a: 'Ethiopian green coffee beans are raw, unroasted Arabica coffee beans exported from Ethiopia - the birthplace and genetic origin of all the world\'s Arabica coffee. They are shipped in their natural green state to roasters, importers, and traders worldwide, who roast them into finished coffee products. Ethiopian greens are uniquely prized for their complex floral, fruity, and wine-like flavour profiles that cannot be replicated from any other origin.' },
              { q: 'What grades are Ethiopian green coffee beans available in?', a: 'Ethiopian green coffee is graded from Grade 1 (highest specialty quality, 0-3 defects per 300g sample) through Grade 5. Most specialty-grade coffee falls in Grade 1-2 with SCA cup scores of 80+. Commercial exports are typically Grade 3-5. The grading system evaluates bean size, defect count, and cup quality under SCA cupping protocol.' },
              { q: 'How much do Ethiopian green coffee beans cost?', a: 'Specialty-grade Ethiopian green coffee beans typically range from $9 to $13 per kilogram ($4 to $6 per pound) FOB Djibouti for Grade 1-2 lots scoring SCA 80+. Commercial grades (Grade 3-5) are lower. Prices vary by origin, grade, processing method, season, and global C-market conditions. Contact us directly for current crop pricing and availability.' },
              { q: 'What is the minimum order quantity?', a: 'Standard minimum orders are one full container load (FCL) of approximately 275 bags at 60kg each (roughly 16.5 metric tons). However, we accommodate smaller trial orders for new buyer relationships and offer sample shipments so you can evaluate cup quality before committing to larger volumes.' },
              { q: 'Which Ethiopian green coffee is best for espresso?', a: 'Natural-processed Sidamo and Guji coffees are excellent espresso choices due to their full body, berry sweetness, and chocolate undertones. Washed Yirgacheffe also performs brilliantly as a bright, floral single-origin espresso. Many roasters blend Ethiopian greens with Brazilian or Colombian coffees for balanced espresso profiles with Ethiopian complexity.' },
              { q: 'How are Ethiopian green coffee beans shipped?', a: 'Ethiopian green coffee beans are exported in 60kg jute bags with GrainPro hermetic liners to preserve freshness during transit. Shipping is typically FOB Djibouti (Ethiopia\'s nearest export port) for ocean freight or FCA (Free Carrier) for air freight where the buyer arranges carriage. Approximate transit times: 2-3 weeks to Middle East, 4-6 weeks to Europe, 6-8 weeks to North America and Asia.' },
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
          <h2 className='text-3xl lg:text-4xl font-extrabold mb-4'>Ready to Source Ethiopian Green Coffee Beans?</h2>
          <p className='text-white/80 max-w-2xl mx-auto mb-8'>
            Request samples, get current pricing, or discuss your sourcing needs with our team. 
            We respond within 24 hours.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link href="/contact-us" className='px-8 py-4 bg-white text-accent rounded-xl font-bold hover:bg-white/90 transition-all shadow-md'>
              REQUEST SAMPLES & PRICING
            </Link>
            <Link href="/offerings" className='px-8 py-4 bg-transparent text-white border-2 border-white/40 rounded-xl font-bold hover:bg-white/10 transition-all'>
              VIEW CURRENT OFFERINGS
            </Link>
            <Link href="/ordering-info" className='px-8 py-4 bg-transparent text-white border-2 border-white/40 rounded-xl font-bold hover:bg-white/10 transition-all'>
              HOW TO ORDER
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
    </main>
  )
}

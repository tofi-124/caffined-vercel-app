import Link from 'next/link'
import ResponsiveImage from '../components/ResponsiveImage'
import AutoScrollTo from '../components/AutoScrollTo'
import dynamic from 'next/dynamic'
import { HiOutlineShoppingBag, HiOutlineBeaker, HiOutlineDocumentCheck, HiOutlineTruck, HiOutlineChatBubbleLeftRight, HiOutlineShieldCheck } from 'react-icons/hi2'

const Testimonials = dynamic(() => import('../components/Testimonials'), {
  loading: () => <section className='min-h-[320px] bg-dark' />,
})

const pricingGuide = [
  { origin: 'Yirgacheffe G2 Washed', fobKg: '$9.50', fobLb: '$4.31', cupScore: '84+' },
  { origin: 'Sidamo G1 Natural', fobKg: '$10.80', fobLb: '$4.90', cupScore: '86+' },
  { origin: 'Guji G1 Natural', fobKg: '$11.50', fobLb: '$5.22', cupScore: '87+' },
  { origin: 'Harar G1 Natural', fobKg: '$10.20', fobLb: '$4.63', cupScore: '85+' },
  { origin: 'Limu G2 Washed', fobKg: '$9.20', fobLb: '$4.17', cupScore: '84+' },
  { origin: 'Lekempti G2 Washed', fobKg: '$9.00', fobLb: '$4.08', cupScore: '84+' },
]

const buyerTypes = [
  {
    icon: <HiOutlineShoppingBag className="w-8 h-8" />,
    title: 'Specialty Roasters',
    desc: 'Source single-origin Ethiopian lots for your roastery. Pre-shipment samples, cupping reports, and full traceability included. Perfect for showcasing Ethiopian micro-lots and seasonal offerings.',
  },
  {
    icon: <HiOutlineBeaker className="w-8 h-8" />,
    title: 'Coffee Importers & Traders',
    desc: 'Reliable FCL supply from all major Ethiopian origins. Consistent quality, professional documentation, and competitive FOB pricing for your distribution network.',
  },
  {
    icon: <HiOutlineDocumentCheck className="w-8 h-8" />,
    title: 'Private Label & Brand Owners',
    desc: 'Source premium Ethiopian green coffee for your branded products. We provide origin stories, traceability data, and marketing support to differentiate your brand.',
  },
  {
    icon: <HiOutlineTruck className="w-8 h-8" />,
    title: 'Commercial Blenders',
    desc: 'Grade 3-5 Ethiopian coffees for commercial blends. Consistent supply, competitive pricing, and reliable logistics for high-volume operations.',
  },
]

const processSteps = [
  { step: '01', title: 'Inquire', desc: 'Tell us your requirements: preferred origins, grades, processing methods, volume needs, and delivery timeline. We\'ll respond within 24 hours with availability and a transparent, itemized quotation in USD per pound.' },
  { step: '02', title: 'Sample', desc: 'Purchase 300g evaluation samples at a nominal cost directly from any product page via PayPal, with DHL Express shipping calculated at checkout. We also provide pre-shipment samples (PSS) with full SCA cupping reports for wholesale lots.' },
  { step: '03', title: 'Approve & Contract', desc: 'Once you approve the lot, we issue a sales contract with agreed-upon pricing, volume, shipping terms (FOB Djibouti or FCA Addis Ababa), and payment terms. New customers: 50% deposit, 50% against shipping documents. Established customers: Net 30/60 may be available.' },
  { step: '04', title: 'Documentation', desc: 'We prepare all export documents: ICO certificate, phytosanitary certificate, certificate of origin, weight certificate, quality certificate, and commercial invoice.' },
  { step: '05', title: 'Ship', desc: 'Your coffee is loaded in a 20ft or 40ft container, shipped from Djibouti port to your designated destination. Transit times: 2-3 weeks to Middle East, 4-5 weeks to Europe, 6-8 weeks to North America or East Asia. Real-time tracking provided.' },
  { step: '06', title: 'Receive & Reorder', desc: 'Upon arrival, verify quality against pre-shipment samples. Report any concerns within 7 days with photos and cupping notes. Plan your next order - we maintain year-round availability across all major Ethiopian origins.' },
]

export default function BuyWholesalePage() {
  return (
    <main className='bg-primary'>
      <AutoScrollTo targetId='wholesale-hero' />

      {/* Hero */}
      <section id='wholesale-hero' className='bg-dark text-primary py-20 lg:py-28'>
        <div className='max-w-5xl mx-auto px-6 text-center'>
          <p className='uppercase tracking-[0.3em] text-primary/60 text-sm mb-4'>
            Direct from Licensed Ethiopian Exporter
          </p>
          <h1 className='text-5xl lg:text-6xl font-extrabold leading-tight mb-6'>
            Buy Ethiopian Coffee Wholesale
          </h1>
          <p className='text-lg md:text-xl text-primary/80 max-w-3xl mx-auto leading-relaxed mb-4'>
            <strong>Buy Ethiopian coffee wholesale</strong> directly from Ethio Coffee Export PLC, a licensed, family-owned
            Ethiopian exporter. We supply specialty and commercial green coffee in full container loads,
            shipped FOB Djibouti to importers and roasters worldwide. For a detailed walkthrough of
            <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='underline hover:text-primary/60'> how to source green coffee from Ethiopia</Link>, see our step-by-step guide.
          </p>
          <p className='text-primary/70 max-w-2xl mx-auto mb-8'>
            Skip the middlemen. Get competitive pricing, pre-shipment samples, SCA cupping reports,
            and complete export documentation, all handled end-to-end from our origin in Addis Ababa.
          </p>
          <div className='mt-8 flex flex-wrap justify-center gap-4'>
            <Link href='/contact-us' className='bg-accent text-white px-8 py-3 rounded font-bold hover:bg-accent/90 transition-colors'>
              Get Wholesale Pricing
            </Link>
            <Link href='/offerings' className='border border-primary/40 px-8 py-3 rounded font-bold hover:bg-primary/10 transition-colors'>
              View Current Lots
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className='py-16 lg:py-24'>
        <div className='max-w-5xl mx-auto px-6'>
        <h2 className='text-4xl font-extrabold text-dark mb-4 text-center'>Who Buys Ethiopian Coffee Wholesale?</h2>
        <p className='text-dark/70 text-center max-w-3xl mx-auto mb-12'>
          We work with businesses of all sizes, from single-origin micro-roasters to large-scale commercial importers. 
          Whether you need 1 container a year or 20, we have the supply and systems to support you. For details on
          order sizes, see our <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='underline hover:text-dark'>MOQ guide</Link>.
        </p>
        <div className='grid md:grid-cols-2 gap-8'>
          {buyerTypes.map((item, i) => (
            <article key={i} className='bg-white rounded-2xl p-8 shadow-sm border border-dark/5 flex gap-6'>
              <div className='text-accent flex-shrink-0 mt-1'>{item.icon}</div>
              <div>
                <h3 className='text-xl font-bold text-dark mb-2'>{item.title}</h3>
                <p className='text-dark/70 leading-relaxed'>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
        </div>
      </section>

      {/* Indicative Pricing */}
      <section className='bg-dark text-primary py-16 lg:py-24'>
        <div className='max-w-5xl mx-auto px-6'>
          <h2 className='text-4xl font-extrabold mb-4 text-center'>Wholesale Ethiopian Coffee Pricing Guide</h2>
          <p className='text-primary/70 text-center max-w-3xl mx-auto mb-12'>
            Indicative FOB Djibouti prices for current crop. Actual pricing depends on volume, contract type, 
            and market conditions. See our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-accent hover:underline'>FOB pricing guide</Link> for 
            historical benchmarks, or <Link href="/contact-us" className='text-accent hover:underline'>contact us</Link> for exact quotes.
          </p>
          <div className='overflow-x-auto'>
            <table className='w-full max-w-4xl mx-auto text-left'>
              <thead>
                <tr className='border-b border-primary/20'>
                  <th className='py-4 pr-6 font-bold text-accent'>Origin & Grade</th>
                  <th className='py-4 pr-6 font-bold text-center'>FOB /kg</th>
                  <th className='py-4 pr-6 font-bold text-center'>FOB /lb</th>
                  <th className='py-4 font-bold text-center'>SCA Score</th>
                </tr>
              </thead>
              <tbody>
                {pricingGuide.map((row, i) => (
                  <tr key={i} className='border-b border-primary/10'>
                    <td className='py-4 pr-6 font-bold'>{row.origin}</td>
                    <td className='py-4 pr-6 text-center text-accent font-bold'>{row.fobKg}</td>
                    <td className='py-4 pr-6 text-center'>{row.fobLb}</td>
                    <td className='py-4 text-center'>{row.cupScore}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className='text-primary/50 text-sm text-center mt-6 max-w-2xl mx-auto'>
            Prices are indicative and subject to change based on C-market conditions, seasonal availability, and order volume. 
            FCL pricing shown. Smaller lot pricing available on request.
          </p>
        </div>
      </section>

      {/* How to Order */}
      <section className='py-16 lg:py-24'>
        <div className='max-w-5xl mx-auto px-6'>
        <h2 className='text-4xl font-extrabold text-dark mb-4 text-center'>How to Buy Ethiopian Coffee Wholesale: Step by Step</h2>
        <p className='text-dark/70 text-center max-w-3xl mx-auto mb-12'>
          From first inquiry to coffee arrival at your warehouse. Here&apos;s exactly how the wholesale ordering process works.
          For logistics detail, see our guide on <Link href='/insights/specialty-coffee-storage-freight-logistics' className='underline hover:text-dark'>coffee storage and freight logistics</Link>.
        </p>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {processSteps.map((item) => (
            <div key={item.step} className='bg-white rounded-2xl p-8 shadow-sm border border-dark/5'>
              <div className='w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl font-extrabold mb-4'>{item.step}</div>
              <h3 className='text-lg font-bold text-dark mb-2'>{item.title}</h3>
              <p className='text-dark/70 text-sm leading-relaxed'>{item.desc}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Why Buy Wholesale From Us */}
      <section className='bg-accent/5 border-y border-accent/10 py-16 lg:py-24'>
        <div className='max-w-5xl mx-auto px-6'>
          <h2 className='text-4xl font-extrabold text-dark mb-12 text-center'>Why Buy Wholesale Ethiopian Coffee from Ethio Coffee?</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
            {[
              { icon: <HiOutlineShieldCheck className="w-8 h-8" />, title: 'Licensed Ethiopian Exporter', desc: 'We hold a valid Ethiopian coffee export license issued by the Ethiopian Coffee and Tea Authority (ECTA) and operate from our office in Addis Ababa. Not a broker or trader; direct from origin.' },
              { icon: <HiOutlineBeaker className="w-8 h-8" />, title: 'SCA-Protocol Quality Control', desc: 'Every lot cupped by certified Q-graders on SCA protocol. Full cupping reports, moisture testing, defect analysis included with every shipment.' },
              { icon: <HiOutlineChatBubbleLeftRight className="w-8 h-8" />, title: '24-Hour Response Time', desc: 'One brother manages sourcing and operations on the ground in Ethiopia. The other is Ethiopian-Canadian with international business experience. This dual-timezone team ensures fast communication. Inquiries answered within 24 hours, always.' },
              { icon: <HiOutlineDocumentCheck className="w-8 h-8" />, title: 'Complete Documentation', desc: 'ICO certificates, phytosanitary, certificate of origin, weight & quality certificates - all export paperwork handled end-to-end.' },
              { icon: <HiOutlineTruck className="w-8 h-8" />, title: 'FOB or FCA Shipping', desc: 'Ship FOB Djibouti for ocean freight or FCA Addis Ababa dry port for air freight. We work with your preferred freight forwarder or can recommend trusted logistics partners.' },
              { icon: <HiOutlineShoppingBag className="w-8 h-8" />, title: 'Flexible Order Sizes', desc: 'Standard FCL containers (~20 metric tons / 44,000 lbs). You can mix origins and grades to fill a container. LCL is possible but rarely recommended due to higher per-kg cost and added handling risk.' },
            ].map((item, i) => (
              <div key={i} className='flex gap-4'>
                <div className='text-accent flex-shrink-0 mt-1'>{item.icon}</div>
                <div>
                  <h3 className='font-bold text-dark mb-1'>{item.title}</h3>
                  <p className='text-dark/70 text-sm leading-relaxed'>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='bg-dark text-primary py-16 lg:py-24'>
        <div className='max-w-4xl mx-auto px-6'>
        <h2 className='text-4xl font-extrabold mb-12 text-center'>Wholesale Ethiopian Coffee: Frequently Asked Questions</h2>
        <div className='space-y-6'>
          {[
            { q: 'How do I buy Ethiopian coffee wholesale?', a: 'Contact us with your requirements (preferred origins, grades, volume, processing method). We\'ll send availability and a transparent, itemized quotation in USD per pound within 24 hours. After you approve pre-shipment samples, we issue a sales contract, prepare all export documentation, and ship your coffee FOB Djibouti for ocean freight or FCA Addis Ababa dry port for air freight.' },
            { q: 'What is the minimum order for wholesale Ethiopian coffee?', a: 'Our standard minimum is one full container load (FCL), approximately 275-320 bags at 60kg each (~20 metric tons / 44,000 lbs). You can mix origins and grades to fill a container. LCL (less than container load) is possible but rarely recommended due to higher per-kg cost, added handling risk, and extended transit time. We encourage starting with a full container using the mix-and-match option.' },
            { q: 'What is the wholesale price of Ethiopian coffee?', a: 'Specialty-grade Ethiopian green coffee ranges from $4 to $6 per pound FOB Djibouti for Grade 1-2 lots. Commercial grades are lower. Prices depend on origin, grade, processing method, and current demand. Contact us for current crop pricing tailored to your needs.' },
            { q: 'Can I get samples before placing a wholesale order?', a: 'Absolutely. You can purchase affordable 300g evaluation samples directly from any product page via PayPal. Shipping via DHL Express is calculated at checkout. For wholesale lots, we also provide pre-shipment samples (PSS) with full SCA cupping reports so you can approve the exact lot before container shipment.' },
            { q: 'What payment terms do you accept?', a: 'For new customers: 50% deposit upon order confirmation, 50% balance against shipping documents. For established customers: Net 30/60 terms may be available. We also accept Letters of Credit (L/C) from recognized banks. All invoicing is in USD, with EUR or GBP available for European buyers upon request.' },
            { q: 'How long does shipping take?', a: 'From contract to warehouse, expect 8-14 weeks total depending on destination. This includes 1-2 weeks for sample approval and contract, 2-4 weeks for lot preparation and documentation, 1 week for inland transport to Djibouti port, plus ocean transit of 2-3 weeks to Middle East, 4-5 weeks to Europe, 6-8 weeks to North America or East Asia.' },
          ].map((item, i) => (
            <article key={i} className='border-b border-primary/10 pb-6'>
              <h3 className='text-lg font-bold text-primary mb-2'>{item.q}</h3>
              <p className='text-primary/70 leading-relaxed'>{item.a}</p>
            </article>
          ))}
        </div>
        </div>
      </section>

      {/* CTA */}
      <section className='bg-accent text-white py-16'>
        <div className='max-w-3xl mx-auto px-6 text-center'>
          <h2 className='text-3xl lg:text-4xl font-extrabold mb-4'>Ready to Buy Ethiopian Coffee Wholesale?</h2>
          <p className='text-white/80 max-w-2xl mx-auto mb-8'>
            Get in touch today. Tell us what you need and we&apos;ll respond within 24 hours with availability, 
            pricing, and sample options.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link href="/contact-us" className='px-8 py-4 bg-white text-accent rounded-xl font-bold hover:bg-white/90 transition-all shadow-md'>
              GET A WHOLESALE QUOTE
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

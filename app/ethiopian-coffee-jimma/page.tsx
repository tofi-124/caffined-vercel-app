'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { offerings } from '../data/offerings'
import AddToCartButton from '../components/AddToCartButton'
import QuoteRequestPopup from '../components/QuoteRequestPopup'
import { PiCoffee } from 'react-icons/pi'
import { GiCoffeeBeans } from 'react-icons/gi'
import {
  HiOutlineCube,
  HiOutlineCurrencyDollar,
  HiOutlineChartBar,
  HiOutlineArrowPath,
  HiOutlineGlobeAlt,
  HiOutlineBuildingOffice,
  HiOutlineTruck,
  HiOutlineScale,
} from 'react-icons/hi2'

export default function JimmaCoffeePage() {
  const [quoteOpen, setQuoteOpen] = useState(false)
  const regionOfferings = offerings.filter((o) => o.region === 'Djimmah')

  return (
    <main className='bg-primary text-dark'>
      {/* Hero */}
      <header className="bg-[url(/images/about-us.webp)] bg-cover bg-center w-full min-h-[420px] flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark/70" />
        <p className='uppercase tracking-[0.3em] text-primary/70 text-sm mb-4 relative z-10'>Ethiopian Coffee Origin</p>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-primary relative z-10 text-center px-4'>
          Jimma (Djimmah) Coffee
        </h1>
        <p className='text-primary/80 mt-3 text-sm tracking-widest uppercase relative z-10 text-center px-4'>
          Consistent. Full-Bodied. Blend-Friendly.
        </p>
        <div className='mt-6 flex flex-col sm:flex-row justify-center gap-4 relative z-10 px-6 w-full sm:w-auto'>
          <button
            onClick={() => setQuoteOpen(true)}
            className='w-full sm:w-auto bg-accent text-white px-8 py-3 rounded-xl font-bold hover:bg-accent/90 transition-colors'
          >
            Request Pricing
          </button>
          <Link href='/offerings' className='w-full sm:w-auto text-center border-2 border-primary/40 text-primary px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors'>
            View Available Lots
          </Link>
        </div>
      </header>

      {/* Stats band */}
      <section className='bg-stone-50 border-y border-dark/10'>
        <div className='max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
          {[
            { icon: <HiOutlineGlobeAlt className='w-5 h-5' />, label: 'Region', value: 'Jimma Zone, Oromia' },
            { icon: <HiOutlineScale className='w-5 h-5' />, label: 'Altitude', value: '1,400 – 1,800 m' },
            { icon: <HiOutlineChartBar className='w-5 h-5' />, label: 'Cup Score', value: 'SCA 78 – 82' },
            { icon: <HiOutlineTruck className='w-5 h-5' />, label: 'Processing', value: 'Natural & Washed' },
          ].map((s) => (
            <div key={s.label} className='flex flex-col items-center gap-2'>
              <span className='w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent'>{s.icon}</span>
              <p className='text-dark/50 uppercase tracking-widest text-xs'>{s.label}</p>
              <p className='font-bold text-dark text-sm'>{s.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What is Jimma */}
      <section className='py-16 lg:py-24'>
        <div className='max-w-4xl mx-auto px-6'>
          <div className='w-16 h-1 bg-accent rounded-full mb-6' />
          <h2 className='text-3xl sm:text-4xl font-extrabold text-dark mb-6'>What Is Jimma Coffee?</h2>
          <div className='prose prose-lg max-w-none text-dark/80 space-y-4'>
            <p>
              Jimma (internationally known as <strong>Djimmah</strong> or <strong>Djimma</strong>) is
              Ethiopia&apos;s largest coffee-producing zone and the country&apos;s primary source of
              commercial-grade coffee. Located in the <strong>southwestern Oromia region</strong> at
              altitudes of 1,400 to 1,800 meters, Jimma has been at the center of Ethiopian coffee
              production for centuries. The city of Jimma was historically one of the most important
              coffee trading centers in the Horn of Africa.
            </p>
            <p>
              Jimma coffee is valued for its <strong>consistency, volume availability, and blend-friendly
              character</strong>. With an earthy, full-bodied profile, low acidity, and dark chocolate
              undertones, Jimma serves as the reliable backbone of countless international espresso blends,
              commercial roasts, and instant coffee products. According to the <a href='https://www.ico.org/' target='_blank' rel='noopener noreferrer' className='underline hover:text-dark/60'>International Coffee Organization (ICO)</a>,
              Ethiopia is Africa&apos;s largest coffee producer, and Jimma accounts for a significant share of that output.
            </p>
            <p>
              While typically classified as commercial grade (Grade 4 and 5), <strong>well-sorted Jimma
              Grade 4 lots can approach specialty territory</strong>, scoring 80–82 on the SCA scale.
              Learn more about how these grades are determined in our <Link href='/coffee-grading-ethiopia' className='underline hover:text-dark/60'>Ethiopian coffee grading guide</Link>.
              For cost-conscious buyers who need Ethiopian origin character at competitive prices,
              Jimma is unmatched. See our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='underline hover:text-dark/60'>FOB pricing guide</Link> for current benchmarks.
            </p>
          </div>
        </div>
      </section>

      {/* Flavor Profile */}
      <section className='py-16 lg:py-24 bg-dark text-primary'>
        <div className='max-w-5xl mx-auto px-6'>
          <div className='w-16 h-1 bg-accent rounded-full mb-6 mx-auto' />
          <h2 className='text-3xl sm:text-4xl font-extrabold mb-10 text-center'>Jimma Flavor Profile</h2>
          <div className='grid md:grid-cols-2 gap-10'>
            <div className='bg-primary/5 rounded-xl p-8 border border-primary/10 hover:shadow-md hover:border-accent/30 transition-all duration-300'>
              <h3 className='text-xl font-bold mb-4 flex items-center gap-2'><GiCoffeeBeans className='text-2xl text-accent' /> Natural Jimma</h3>
              <p className='text-primary/70 mb-4'>Classic Ethiopian commercial character.</p>
              <ul className='space-y-2 text-primary/80'>
                <li><strong>Aroma:</strong> Earthy, cocoa, dried fruit, grain</li>
                <li><strong>Flavor:</strong> Dark chocolate, tobacco, brown sugar, mild berry</li>
                <li><strong>Acidity:</strong> Low, smooth</li>
                <li><strong>Body:</strong> Full, heavy, dense</li>
                <li><strong>Finish:</strong> Clean, earthy, warm</li>
                <li><strong>SCA Score:</strong> Typically 78 – 81</li>
              </ul>
            </div>
            <div className='bg-primary/5 rounded-xl p-8 border border-primary/10 hover:shadow-md hover:border-accent/30 transition-all duration-300'>
              <h3 className='text-xl font-bold mb-4 flex items-center gap-2'><PiCoffee className='text-2xl text-accent' /> Washed Jimma</h3>
              <p className='text-primary/70 mb-4'>Cleaner cup with more definition.</p>
              <ul className='space-y-2 text-primary/80'>
                <li><strong>Aroma:</strong> Grain, mild nuts, cocoa</li>
                <li><strong>Flavor:</strong> Dark chocolate, walnut, mild spice, caramel</li>
                <li><strong>Acidity:</strong> Low-medium, round</li>
                <li><strong>Body:</strong> Medium-full, smooth</li>
                <li><strong>Finish:</strong> Clean, nutty, short-to-medium</li>
                <li><strong>SCA Score:</strong> Typically 79 – 82</li>
              </ul>
            </div>
          </div>
          <div className='mt-8 text-center'>
            <p className='text-primary/60 text-sm max-w-2xl mx-auto'>
              <strong>Best Uses:</strong> Espresso blend base, commercial roast, instant coffee production,
              French press, Turkish coffee. Jimma&apos;s neutral-to-chocolatey character and full body
              make it the ultimate blending coffee.
            </p>
          </div>
        </div>
      </section>

      {/* Available Offerings */}
      <section className='py-16 lg:py-24 bg-stone-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='w-16 h-1 bg-accent rounded-full mb-6 mx-auto' />
          <h2 className='text-3xl sm:text-4xl font-extrabold text-dark mb-4 text-center'>Available Jimma Offerings</h2>
          <p className='text-dark/60 text-center mb-12 max-w-2xl mx-auto'>
            Order a 300 g sample via DHL Express or request wholesale pricing for commercial volumes.
          </p>

          {regionOfferings.length > 0 ? (
            <div className='grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto'>
              {regionOfferings.map((product) => (
                <div
                  key={product.id}
                  className='bg-white rounded-xl border border-dark/10 overflow-hidden hover:shadow-md hover:border-accent/30 transition-all duration-300'
                >
                  <div className='relative h-52 bg-stone-100'>
                    <Image
                      src={product.image_url || '/images/placeholder.webp'}
                      alt={product.name}
                      fill
                      className='object-cover'
                    />
                    {product.isContracted && (
                      <span className='absolute top-3 left-3 px-2.5 py-1 rounded-full bg-blue-600/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider'>Contracted</span>
                    )}
                  </div>
                  <div className='p-6'>
                    <h3 className='font-bold text-dark text-lg'>{product.name}</h3>
                    <p className='text-dark/50 text-xs uppercase tracking-widest mt-1'>
                      {product.specifications.processingMethod} · {product.specifications.grade} · {product.bagSize}
                    </p>
                    <p className='text-dark/70 text-sm mt-3 line-clamp-2'>{product.desc}</p>
                    <div className='mt-5'>
                      <AddToCartButton
                        productId={product.id}
                        productName={product.name}
                        sampleOptions={product.pricing.sampleOptions}
                        image_url={product.image_url}
                        isSoldOut={product.isSoldOut}
                        isContracted={product.isContracted}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className='text-center text-dark/60'>No offerings currently listed. Contact us for availability.</p>
          )}
        </div>
      </section>

      {/* Growing areas */}
      <section className='py-16 lg:py-24'>
        <div className='max-w-5xl mx-auto px-6'>
          <div className='w-16 h-1 bg-accent rounded-full mb-6' />
          <h2 className='text-3xl sm:text-4xl font-extrabold text-dark mb-4'>Jimma Coffee Growing Areas</h2>
          <p className='text-dark/60 mb-10 max-w-3xl'>
            The Jimma zone encompasses a vast area of southwestern Ethiopia with numerous
            coffee-producing woredas (districts) contributing to the region&apos;s enormous output.
          </p>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              { name: 'Jimma City Surrounds', alt: '1,400–1,700 m', notes: 'The historic center of Ethiopian coffee trading. Consistent, well-established supply chains with reliable quality from generation-old growing areas.' },
              { name: 'Agaro', alt: '1,500–1,800 m', notes: 'Higher-altitude area with cleaner, more complex cups. Agaro Grade 4 lots sometimes reach specialty scores. Growing specialty market interest.' },
              { name: 'Gomma', alt: '1,500–1,800 m', notes: 'Overlaps with Limu growing areas. Forest-shaded production with slightly more complexity. Good source for top-tier Jimma lots.' },
              { name: 'Kersa', alt: '1,400–1,700 m', notes: 'Large production area with consistent commercial-grade output. Key source for high-volume export programs.' },
              { name: 'Seka Chekorsa', alt: '1,400–1,600 m', notes: 'Major natural-processed Jimma production center. Full-bodied, earthy coffees ideal for espresso and blend applications.' },
              { name: 'Shebe Sombo', alt: '1,500–1,800 m', notes: 'Well-organized cooperative production with improving quality standards. Potential for Grade 4 lots with specialty-adjacent scores.' },
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

      {/* Export Specifications */}
      <section className='py-16 lg:py-24 bg-accent/5 border-y border-accent/10'>
        <div className='max-w-5xl mx-auto px-6'>
          <div className='w-16 h-1 bg-accent rounded-full mb-6 mx-auto' />
          <h2 className='text-3xl sm:text-4xl font-extrabold text-dark mb-10 text-center'>Jimma Export Specifications</h2>
          <div className='overflow-x-auto rounded-xl border border-dark/10'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-dark text-primary'>
                  <th className='px-4 py-3 text-left font-bold'>Specification</th>
                  <th className='px-4 py-3 text-left font-bold'>Grade 4</th>
                  <th className='px-4 py-3 text-left font-bold'>Grade 5</th>
                </tr>
              </thead>
              <tbody className='text-dark/80'>
                <tr className='border-b border-dark/10'><td className='px-4 py-3 font-medium'>SCA Cup Score</td><td className='px-4 py-3'>80 – 82</td><td className='px-4 py-3'>78 – 80</td></tr>
                <tr className='border-b border-dark/10 bg-white'><td className='px-4 py-3 font-medium'>Defect Count (per 300g)</td><td className='px-4 py-3'>26 – 45 defects</td><td className='px-4 py-3'>46 – 100 defects</td></tr>
                <tr className='border-b border-dark/10'><td className='px-4 py-3 font-medium'>Screen Size</td><td className='px-4 py-3'>14 – 16</td><td className='px-4 py-3'>13 – 15</td></tr>
                <tr className='border-b border-dark/10 bg-white'><td className='px-4 py-3 font-medium'>Moisture Content</td><td className='px-4 py-3'>10 – 12%</td><td className='px-4 py-3'>10 – 12%</td></tr>
                <tr className='border-b border-dark/10'><td className='px-4 py-3 font-medium'>Processing</td><td className='px-4 py-3'>Natural & Washed</td><td className='px-4 py-3'>Natural & Washed</td></tr>
                <tr className='border-b border-dark/10 bg-white'><td className='px-4 py-3 font-medium'>Packaging</td><td className='px-4 py-3'>60kg jute bags</td><td className='px-4 py-3'>60kg jute bags</td></tr>
                <tr className='border-b border-dark/10'><td className='px-4 py-3 font-medium'>Incoterms</td><td className='px-4 py-3'>FOB Djibouti / FCA</td><td className='px-4 py-3'>FOB Djibouti / FCA</td></tr>
                <tr className='bg-white'><td className='px-4 py-3 font-medium'>Harvest Season</td><td className='px-4 py-3'>October – January</td><td className='px-4 py-3'>October – January</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why source from us */}
      <section className='py-16 lg:py-24'>
        <div className='max-w-5xl mx-auto px-6'>
          <div className='w-16 h-1 bg-accent rounded-full mb-6' />
          <h2 className='text-3xl sm:text-4xl font-extrabold text-dark mb-10'>Why Source Jimma from Ethio Coffee?</h2>
          <div className='grid sm:grid-cols-2 gap-6'>
            {[
              { icon: <HiOutlineCube className='w-6 h-6' />, title: 'High-Volume Supply', desc: 'Jimma is Ethiopia\u2019s largest producing region. We can fulfill multi-container programs (5, 10, or 20+ FCLs per season) with consistent quality and reliable delivery schedules.' },
              { icon: <HiOutlineCurrencyDollar className='w-6 h-6' />, title: 'Competitive Pricing', desc: 'Jimma offers the most competitive FOB pricing among Ethiopian origins. Ideal for budget-conscious import programs, commercial blends, and institutional buyers.' },
              { icon: <HiOutlineChartBar className='w-6 h-6' />, title: 'Consistency Guaranteed', desc: 'We maintain strict quality standards even at commercial grades. Every Jimma lot is cupped and graded before offer. Reject rates are minimal because we pre-screen rigorously.' },
              { icon: <HiOutlineArrowPath className='w-6 h-6' />, title: 'Blend Base Expertise', desc: 'Our team can help you select the ideal Jimma lot for your blend profile: whether dark espresso, medium roast, or instant coffee. We understand what works for each market segment.' },
            ].map((card) => (
              <div key={card.title} className='bg-white rounded-xl p-6 border border-dark/10 hover:shadow-md hover:border-accent/30 transition-all duration-300'>
                <span className='w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-4'>{card.icon}</span>
                <h3 className='font-bold text-dark mb-2'>{card.title}</h3>
                <p className='text-dark/70 text-sm leading-relaxed'>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial & Blend Programs */}
      <section className='py-16 lg:py-24 bg-dark text-primary'>
        <div className='max-w-5xl mx-auto px-6'>
          <div className='w-16 h-1 bg-accent rounded-full mb-6 mx-auto' />
          <h2 className='text-3xl sm:text-4xl font-extrabold mb-10 text-center'>Jimma for Commercial &amp; Blend Programs</h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {[
              { icon: <PiCoffee className='text-4xl' />, title: 'Espresso Blends', desc: 'Jimma\u2019s full body, low acidity, and chocolate character make it a top choice as an espresso blend base. Pair with brighter origins for complexity.' },
              { icon: <HiOutlineBuildingOffice className='text-4xl' />, title: 'Instant Coffee', desc: 'Major instant coffee producers worldwide use Jimma for its clean, consistent extraction properties and neutral-to-chocolatey flavor that performs well in soluble form.' },
              { icon: <HiOutlineGlobeAlt className='text-4xl' />, title: 'Commercial Roasts', desc: 'Supermarket brands, food service, and HORECA buyers choose Jimma for its reliable cup quality, competitive pricing, and year-round supply availability.' },
            ].map((item) => (
              <div key={item.title} className='bg-primary/5 rounded-xl p-8 border border-primary/10 text-center hover:shadow-md hover:border-accent/30 transition-all duration-300'>
                <span className='inline-flex text-accent'>{item.icon}</span>
                <h3 className='text-lg font-bold mt-4 mb-2'>{item.title}</h3>
                <p className='text-primary/70 text-sm'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='py-16 lg:py-24 bg-stone-50'>
        <div className='max-w-4xl mx-auto px-6'>
          <div className='w-16 h-1 bg-accent rounded-full mb-6 mx-auto' />
          <h2 className='text-3xl sm:text-4xl font-extrabold text-dark mb-10 text-center'>Frequently Asked Questions About Jimma Coffee</h2>
          <div className='space-y-6'>
            {[
              { q: 'What does Jimma coffee taste like?', a: 'Jimma has earthy, full-bodied character with dark chocolate, tobacco, grain, and mild spice notes. Low acidity and a heavy body. Natural Jimma is earthier; washed is cleaner with more definition. It\u2019s not as complex as Yirgacheffe or Guji but delivers consistent, reliable flavor.' },
              { q: 'Is Jimma coffee specialty grade?', a: 'Most Jimma is commercial grade (Grade 4 and 5, SCA 78\u201382). However, well-sorted Grade 4 lots from areas like Agaro can reach 80\u201382 SCA \u2014 approaching specialty territory. For buyers needing Ethiopian specialty, we recommend Yirgacheffe, Guji, or Sidamo instead.' },
              { q: 'What is the difference between Jimma and Limu?', a: 'Both are southwestern origins, but Limu is washed at higher altitudes (1,400\u20132,000 m) with a cleaner, wine-toned profile scoring 82\u201385 SCA. Jimma is lower altitude (1,400\u20131,800 m), predominantly natural, and more earthy/commercial. Limu is specialty; Jimma is commercial.' },
              { q: 'How much does Jimma coffee cost FOB?', a: 'Grade 5 natural: $2.00\u2013$2.80/lb FOB Djibouti. Grade 4: $2.50\u2013$3.20/lb. Jimma is Ethiopia\u2019s most price-competitive origin. Volume discounts available for multi-container programs. Contact us for current pricing.' },
              { q: 'What is the minimum order?', a: 'Standard minimum is one FCL (\u224819.2 MT, 320 \u00d7 60 kg bags). For Jimma, we welcome and encourage multi-container orders with volume pricing. Year-round supply contracts available.' },
            ].map((faq, i) => (
              <div key={i} className='bg-white rounded-xl border border-dark/10 p-6 hover:shadow-md hover:border-accent/30 transition-all duration-300'>
                <h3 className='font-bold text-dark text-lg'>{faq.q}</h3>
                <p className='mt-2 text-dark/70 leading-relaxed'>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other regions */}
      <section className='py-16 lg:py-24 bg-accent/5 border-y border-accent/10'>
        <div className='max-w-5xl mx-auto px-6'>
          <div className='w-16 h-1 bg-accent rounded-full mb-6 mx-auto' />
          <h2 className='text-3xl sm:text-4xl font-extrabold text-dark mb-8 text-center'>Explore Other Ethiopian Coffee Regions</h2>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {[
              { name: 'Yirgacheffe', score: '84–88+', notes: 'Jasmine, bergamot, lemon, tea-like body', href: '/ethiopian-coffee-yirgacheffe' },
              { name: 'Sidamo', score: '84–87+', notes: 'Berry, wine, rich body, stone fruit', href: '/ethiopian-coffee-sidamo' },
              { name: 'Guji', score: '85–89+', notes: 'Stone fruit, tropical, floral complexity', href: '/ethiopian-coffee-guji' },
              { name: 'Harar', score: '82–86+', notes: 'Wild berry, wine, dark chocolate', href: '/ethiopian-coffee-harar' },
              { name: 'Limu', score: '82–85+', notes: 'Wine, spice, balanced body', href: '/ethiopian-coffee-limu' },
            ].map((region) => (
              <Link key={region.name} href={region.href} className='block bg-white rounded-xl p-6 border border-dark/10 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300'>
                <h3 className='font-bold text-dark'>{region.name}</h3>
                <p className='text-xs text-dark/50 mt-1'>SCA {region.score}</p>
                <p className='text-dark/60 text-sm mt-2'>{region.notes}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-16 lg:py-24 bg-accent text-white text-center'>
        <div className='max-w-3xl mx-auto px-6'>
          <h2 className='text-3xl sm:text-4xl font-extrabold mb-4'>Ready to Source Jimma Coffee?</h2>
          <p className='text-white/80 mb-8 text-lg'>
            Get competitive pricing for commercial volumes, order samples,
            or discuss year-round supply contracts with our export team.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <button
              onClick={() => setQuoteOpen(true)}
              className='w-full sm:w-auto bg-dark text-primary px-8 py-3 rounded-xl font-bold hover:bg-dark/90 transition-colors'
            >
              Request Wholesale Pricing
            </button>
            <Link href='/offerings' className='w-full sm:w-auto text-center border-2 border-white/40 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors'>
              View Current Offerings
            </Link>
            <Link href='/ordering-info' className='w-full sm:w-auto text-center border-2 border-white/40 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors'>
              How to Order
            </Link>
          </div>
        </div>
      </section>

      <QuoteRequestPopup
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        productName='Jimma (Djimmah) Coffee'
        productImage='/images/about-us.webp'
      />
    </main>
  )
}

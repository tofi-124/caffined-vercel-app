import Link from 'next/link'
import { PiCoffee } from 'react-icons/pi'
import { GiCoffeeBeans } from 'react-icons/gi'
import { HiOutlineCube, HiOutlineCurrencyDollar, HiOutlineChartBar, HiOutlineArrowPath, HiOutlineGlobeAlt, HiOutlineBuildingOffice } from 'react-icons/hi2'

export default function JimmaCoffeePage() {
  return (
    <main className='bg-primary text-dark'>
      {/* Hero */}
      <section className='relative bg-dark text-primary py-20 md:py-28'>
        <div className='max-w-5xl mx-auto px-6 text-center'>
          <p className='uppercase tracking-[0.3em] text-primary/60 text-sm mb-4'>Ethiopian Coffee Origin</p>
          <h1 className='text-4xl md:text-5xl font-extrabold leading-tight mb-6'>
            Jimma (Djimmah) Coffee Beans
          </h1>
          <p className='text-lg md:text-xl text-primary/80 max-w-3xl mx-auto leading-relaxed'>
            Ethiopia&apos;s commercial coffee powerhouse — consistent, full-bodied, and blend-friendly.
            Large-volume availability with the reliability that major buyers demand.
          </p>
          <div className='mt-8 flex flex-wrap justify-center gap-4'>
            <Link href='/contact-us' className='bg-accent text-dark px-8 py-3 rounded font-bold hover:bg-accent/90 transition-colors'>
              Request Jimma Pricing
            </Link>
            <Link href='/offerings' className='border border-primary/40 px-8 py-3 rounded font-bold hover:bg-primary/10 transition-colors'>
              View Available Lots
            </Link>
          </div>
        </div>
      </section>

      {/* Quick specs */}
      <section className='bg-accent/10 border-y border-accent/20'>
        <div className='max-w-5xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm'>
          <div>
            <p className='text-dark/50 uppercase tracking-widest text-xs'>Region</p>
            <p className='font-bold text-dark mt-1'>Jimma Zone, Oromia (SW)</p>
          </div>
          <div>
            <p className='text-dark/50 uppercase tracking-widest text-xs'>Altitude</p>
            <p className='font-bold text-dark mt-1'>1,400 – 1,800 masl</p>
          </div>
          <div>
            <p className='text-dark/50 uppercase tracking-widest text-xs'>Cup Score</p>
            <p className='font-bold text-dark mt-1'>SCA 78 – 82</p>
          </div>
          <div>
            <p className='text-dark/50 uppercase tracking-widest text-xs'>Processing</p>
            <p className='font-bold text-dark mt-1'>Natural & Washed</p>
          </div>
        </div>
      </section>

      {/* What is Jimma */}
      <section className='py-16 md:py-20'>
        <div className='max-w-4xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold text-dark mb-6'>What Is Jimma Coffee?</h2>
          <div className='prose prose-lg max-w-none text-dark/80 space-y-4'>
            <p>
              Jimma (internationally known as <strong>Djimmah</strong> or <strong>Djimma</strong>) is
              Ethiopia&apos;s largest coffee-producing zone and the country&apos;s primary source of
              commercial-grade coffee. Located in the <strong>southwestern Oromia region</strong> at
              altitudes of 1,400 to 1,800 meters, Jimma has been at the center of Ethiopian coffee
              production for centuries — the city of Jimma was historically one of the most important
              coffee trading centers in the Horn of Africa.
            </p>
            <p>
              Jimma coffee is valued for its <strong>consistency, volume availability, and blend-friendly
              character</strong>. With an earthy, full-bodied profile, low acidity, and dark chocolate
              undertones, Jimma serves as the reliable backbone of countless international espresso blends,
              commercial roasts, and instant coffee products. Many of the world&apos;s largest coffee
              companies source Jimma as their Ethiopian component.
            </p>
            <p>
              While typically classified as commercial grade (Grade 4 and 5), <strong>well-sorted Jimma
              Grade 4 lots can approach specialty territory</strong>, scoring 80-82 on the SCA scale.
              For cost-conscious buyers who need Ethiopian origin character at competitive prices,
              Jimma is unmatched.
            </p>
          </div>
        </div>
      </section>

      {/* Flavor Profile */}
      <section className='py-16 bg-dark text-primary'>
        <div className='max-w-5xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold mb-10 text-center'>Jimma Flavor Profile</h2>
          <div className='grid md:grid-cols-2 gap-10'>
            <div className='bg-primary/5 rounded-lg p-8 border border-primary/10'>
              <h3 className='text-xl font-bold mb-4 flex items-center gap-2'><GiCoffeeBeans className='text-2xl' /> Natural Jimma</h3>
              <p className='text-primary/70 mb-4'>Classic Ethiopian commercial character.</p>
              <ul className='space-y-2 text-primary/80'>
                <li><strong>Aroma:</strong> Earthy, cocoa, dried fruit, grain</li>
                <li><strong>Flavor:</strong> Dark chocolate, tobacco, brown sugar, mild berry</li>
                <li><strong>Acidity:</strong> Low, smooth</li>
                <li><strong>Body:</strong> Full, heavy, robust</li>
                <li><strong>Finish:</strong> Clean, earthy, warm</li>
                <li><strong>SCA Score:</strong> Typically 78 – 81</li>
              </ul>
            </div>
            <div className='bg-primary/5 rounded-lg p-8 border border-primary/10'>
              <h3 className='text-xl font-bold mb-4 flex items-center gap-2'><PiCoffee className='text-2xl' /> Washed Jimma</h3>
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

      {/* Growing areas */}
      <section className='py-16 md:py-20'>
        <div className='max-w-5xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold text-dark mb-4'>Jimma Coffee Growing Areas</h2>
          <p className='text-dark/60 mb-10 max-w-3xl'>
            The Jimma zone encompasses a vast area of southwestern Ethiopia with numerous
            coffee-producing woredas (districts) contributing to the region&apos;s enormous output.
          </p>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              { name: 'Jimma City Surrounds', alt: '1,400–1,700m', notes: 'The historic center of Ethiopian coffee trading. Consistent, well-established supply chains with reliable quality from generation-old growing areas.' },
              { name: 'Agaro', alt: '1,500–1,800m', notes: 'Higher-altitude area with cleaner, more complex cups. Agaro Grade 4 lots sometimes reach specialty scores. Growing specialty market interest.' },
              { name: 'Gomma', alt: '1,500–1,800m', notes: 'Overlaps with Limu growing areas. Forest-shaded production with slightly more complexity. Good source for top-tier Jimma lots.' },
              { name: 'Kersa', alt: '1,400–1,700m', notes: 'Large production area with consistent commercial-grade output. Key source for high-volume export programs.' },
              { name: 'Seka Chekorsa', alt: '1,400–1,600m', notes: 'Major natural-processed Jimma production center. Full-bodied, earthy coffees ideal for espresso and blend applications.' },
              { name: 'Shebe Sombo', alt: '1,500–1,800m', notes: 'Well-organized cooperative production with improving quality standards. Potential for Grade 4 lots with specialty-adjacent scores.' },
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
          <h2 className='text-3xl font-extrabold text-dark mb-10 text-center'>Jimma Export Specifications</h2>
          <div className='overflow-x-auto'>
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
          <h2 className='text-3xl font-extrabold text-dark mb-8'>Why Source Jimma from Ethio Coffee?</h2>
          <div className='space-y-6 text-dark/80'>
            <div className='flex gap-4'>
              <HiOutlineCube className='text-2xl text-dark/60 mt-1 flex-shrink-0' />
              <div>
                <h3 className='font-bold text-dark'>High-Volume Supply</h3>
                <p className='mt-1'>Jimma is Ethiopia&apos;s largest producing region. We can fulfill multi-container programs — 5, 10, or 20+ FCLs per season — with consistent quality and reliable delivery schedules.</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <HiOutlineCurrencyDollar className='text-2xl text-dark/60 mt-1 flex-shrink-0' />
              <div>
                <h3 className='font-bold text-dark'>Competitive Pricing</h3>
                <p className='mt-1'>Jimma offers the most competitive FOB pricing among Ethiopian origins. Ideal for budget-conscious import programs, commercial blends, and institutional buyers.</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <HiOutlineChartBar className='text-2xl text-dark/60 mt-1 flex-shrink-0' />
              <div>
                <h3 className='font-bold text-dark'>Consistency Guaranteed</h3>
                <p className='mt-1'>We maintain strict quality standards even at commercial grades. Every Jimma lot is cupped and graded before offer. Reject rates are minimal because we pre-screen rigorously.</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <HiOutlineArrowPath className='text-2xl text-dark/60 mt-1 flex-shrink-0' />
              <div>
                <h3 className='font-bold text-dark'>Blend Base Expertise</h3>
                <p className='mt-1'>Our team can help you select the ideal Jimma lot for your blend profile — whether dark espresso, medium roast, or instant coffee. We understand what works for each market segment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volume & Blend */}
      <section className='py-16 bg-dark text-primary'>
        <div className='max-w-5xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold mb-10 text-center'>Jimma for Commercial & Blend Programs</h2>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <PiCoffee className='text-4xl mx-auto mb-4' />
              <h3 className='text-lg font-bold mb-2'>Espresso Blends</h3>
              <p className='text-primary/70 text-sm'>Jimma&apos;s full body, low acidity, and chocolate character make it a top choice as an espresso blend base. Pair with brighter origins for complexity.</p>
            </div>
            <div className='text-center'>
              <HiOutlineBuildingOffice className='text-4xl mx-auto mb-4' />
              <h3 className='text-lg font-bold mb-2'>Instant Coffee</h3>
              <p className='text-primary/70 text-sm'>Major instant coffee producers worldwide use Jimma for its clean, consistent extraction properties and neutral-to-chocolatey flavor that performs well in soluble form.</p>
            </div>
            <div className='text-center'>
              <HiOutlineGlobeAlt className='text-4xl mx-auto mb-4' />
              <h3 className='text-lg font-bold mb-2'>Commercial Roasts</h3>
              <p className='text-primary/70 text-sm'>Supermarket brands, food service, and HORECA buyers choose Jimma for its reliable cup quality, competitive pricing, and year-round supply availability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold text-dark mb-10 text-center'>Frequently Asked Questions About Jimma Coffee</h2>
          <div className='space-y-6'>
            {[
              { q: 'What does Jimma coffee taste like?', a: 'Jimma has earthy, full-bodied character with dark chocolate, tobacco, grain, and mild spice notes. Low acidity and a heavy body. Natural Jimma is earthier; washed is cleaner with more definition. It\'s not as complex as Yirgacheffe or Guji but delivers consistent, reliable flavor.' },
              { q: 'Is Jimma coffee specialty grade?', a: 'Most Jimma is commercial grade (Grade 4 and 5, SCA 78-82). However, well-sorted Grade 4 lots from areas like Agaro can reach 80-82 SCA — approaching specialty territory. For buyers needing Ethiopian specialty, we recommend Yirgacheffe, Guji, or Sidamo instead.' },
              { q: 'What is the difference between Jimma and Limu?', a: 'Both are southwestern origins, but Limu is washed at higher altitudes (1,400-2,000m) with a cleaner, wine-toned profile scoring 82-85 SCA. Jimma is lower altitude (1,400-1,800m), predominantly natural, and more earthy/commercial. Limu is specialty; Jimma is commercial.' },
              { q: 'How much does Jimma coffee cost FOB?', a: 'Grade 5 natural: $2.00–$2.80/lb FOB Djibouti. Grade 4: $2.50–$3.20/lb. Jimma is Ethiopia\'s most price-competitive origin. Volume discounts available for multi-container programs. Contact us for current pricing.' },
              { q: 'What is the minimum order?', a: 'Standard minimum is one FCL (≈19.2 MT, 320 × 60kg bags). For Jimma, we welcome and encourage multi-container orders with volume pricing. Year-round supply contracts available.' },
            ].map((faq, i) => (
              <div key={i} className='border-b border-dark/10 pb-6'>
                <h3 className='font-bold text-dark text-lg'>{faq.q}</h3>
                <p className='mt-2 text-dark/70 leading-relaxed'>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other regions */}
      <section className='py-16 bg-accent/5 border-y border-accent/10'>
        <div className='max-w-5xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold text-dark mb-8 text-center'>Explore Other Ethiopian Coffee Regions</h2>
          <div className='grid md:grid-cols-3 gap-6'>
            {[
              { name: 'Yirgacheffe', score: '84–88+', notes: 'Jasmine, bergamot, lemon, tea-like body', href: '/ethiopian-coffee-yirgacheffe' },
              { name: 'Sidamo', score: '84–87+', notes: 'Berry, wine, rich body, stone fruit', href: '/ethiopian-coffee-sidamo' },
              { name: 'Guji', score: '85–89+', notes: 'Stone fruit, tropical, floral complexity', href: '/ethiopian-coffee-guji' },
              { name: 'Harar', score: '82–86+', notes: 'Wild berry, wine, dark chocolate', href: '/ethiopian-coffee-harar' },
              { name: 'Limu', score: '82–85+', notes: 'Wine, spice, balanced body', href: '/ethiopian-coffee-limu' },
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
          <h2 className='text-3xl font-extrabold mb-4'>Ready to Source Jimma Coffee?</h2>
          <p className='text-primary/70 mb-8 text-lg'>
            Get competitive pricing for commercial volumes, request samples,
            or discuss year-round supply contracts with our export team.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link href='/contact-us' className='bg-accent text-dark px-8 py-3 rounded font-bold hover:bg-accent/90 transition-colors'>
              Contact Us for Volume Pricing
            </Link>
            <Link href='/offerings' className='border border-primary/40 text-primary px-8 py-3 rounded font-bold hover:bg-primary/10 transition-colors'>
              Browse Available Lots
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

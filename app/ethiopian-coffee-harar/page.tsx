import Link from 'next/link'
import { PiCoffee } from 'react-icons/pi'
import { GiCoffeeBeans } from 'react-icons/gi'
import { HiOutlineClipboardDocumentCheck, HiOutlineCube, HiOutlineBuildingLibrary } from 'react-icons/hi2'
import { TbCoffee } from 'react-icons/tb'

export default function HararCoffeePage() {
  return (
    <main className='bg-primary text-dark'>
      {/* Hero */}
      <header className="bg-[url(/images/about-us.webp)] bg-cover bg-center w-full h-[350px] flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 bg-black/40" />
        <p className='uppercase tracking-[0.3em] text-primary/70 text-sm mb-4 relative z-10'>Ethiopian Coffee Origin</p>
        <h1 className='text-4xl md:text-5xl font-bold text-primary relative z-10 text-center px-4'>
          Harar (Harrar) Coffee
        </h1>
        <p className='text-primary/80 mt-3 text-sm tracking-widest uppercase relative z-10 text-center px-4'>
          Wild Berry. Wine-Like Complexity. The Original Mocha.
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
            <p className='font-bold text-dark mt-1'>Hararghe, Oromia (East Ethiopia)</p>
          </div>
          <div>
            <p className='text-dark/50 uppercase tracking-widest text-xs'>Altitude</p>
            <p className='font-bold text-dark mt-1'>1,500 – 2,100 masl</p>
          </div>
          <div>
            <p className='text-dark/50 uppercase tracking-widest text-xs'>Cup Score</p>
            <p className='font-bold text-dark mt-1'>SCA 82 – 86+</p>
          </div>
          <div>
            <p className='text-dark/50 uppercase tracking-widest text-xs'>Processing</p>
            <p className='font-bold text-dark mt-1'>100% Natural (Dry)</p>
          </div>
        </div>
      </section>

      {/* What is Harar */}
      <section className='py-16 md:py-20'>
        <div className='max-w-4xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold text-dark mb-6'>What Is Harar Coffee?</h2>
          <div className='prose prose-lg max-w-none text-dark/80 space-y-4'>
            <p>
              Harar (also spelled <strong>Harrar</strong>) is one of the most storied coffees in human history.
              Grown in the highlands surrounding the ancient walled city of Harar in eastern Ethiopia (a
              <a href='https://whc.unesco.org/en/list/1189' target='_blank' rel='noopener noreferrer' className='underline hover:text-dark/60'>UNESCO World Heritage Site</a> and an important center of Islamic culture), Harar coffee has been
              traded for over <strong>500 years</strong>, making it one of the world&apos;s first exported coffees.
              To learn more about the origins, read our guide on <Link href='/insights/ethiopia-birthplace-of-coffee' className='underline hover:text-dark/60'>Ethiopia as the birthplace of coffee</Link>.
            </p>
            <p>
              Unlike most other Ethiopian coffees, Harar is <strong>exclusively natural (dry) processed</strong>.
              Coffee cherries are dried whole on raised beds under the sun, allowing the fruit to ferment around
              the bean. This traditional method, covered in detail in our <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='underline hover:text-dark/60'>washed vs natural processing guide</Link>, produces Harar&apos;s distinctive <strong>wild berry,
              wine-like, and dark chocolate flavors</strong>, the original &quot;mocha&quot; character that
              inspired the world&apos;s love affair with chocolate-coffee pairing.
            </p>
            <p>
              Harar coffee is classified by bean size rather than the numbered grade system used for washed coffees.
              <strong> Longberry</strong> (large, elongated beans) is the premium classification,
              while <strong>Shortberry</strong> (smaller, rounder beans) is the standard commercial grade.
              The best Harar longberry lots exhibit an intense, fruity complexity that cannot be replicated
              by any other origin.
            </p>
          </div>
        </div>
      </section>

      {/* Flavor Profile */}
      <section className='py-16 bg-dark text-primary'>
        <div className='max-w-5xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold mb-10 text-center'>Harar Flavor Profile</h2>
          <div className='grid md:grid-cols-2 gap-10'>
            <div className='bg-primary/5 rounded-lg p-8 border border-primary/10'>
              <h3 className='text-xl font-bold mb-4 flex items-center gap-2'><GiCoffeeBeans className='text-2xl' /> Longberry Harar</h3>
              <p className='text-primary/70 mb-4'>The premium grade - intense and exotic.</p>
              <ul className='space-y-2 text-primary/80'>
                <li><strong>Aroma:</strong> Blueberry, wine, dried fruit, spice</li>
                <li><strong>Flavor:</strong> Wild blueberry, dark chocolate, wine, cardamom</li>
                <li><strong>Acidity:</strong> Moderate, wine-like, complex</li>
                <li><strong>Body:</strong> Full, heavy, syrupy</li>
                <li><strong>Finish:</strong> Long, chocolate, berry lingering</li>
                <li><strong>SCA Score:</strong> 84 – 86+</li>
              </ul>
            </div>
            <div className='bg-primary/5 rounded-lg p-8 border border-primary/10'>
              <h3 className='text-xl font-bold mb-4 flex items-center gap-2'><TbCoffee className='text-2xl' /> Shortberry Harar</h3>
              <p className='text-primary/70 mb-4'>Classic mocha character at commercial scale.</p>
              <ul className='space-y-2 text-primary/80'>
                <li><strong>Aroma:</strong> Cocoa, dried berries, earthy spice</li>
                <li><strong>Flavor:</strong> Dark chocolate, raisin, tobacco, cinnamon</li>
                <li><strong>Acidity:</strong> Low-medium, smooth</li>
                <li><strong>Body:</strong> Full, bold</li>
                <li><strong>Finish:</strong> Rich chocolate, earthy, warm</li>
                <li><strong>SCA Score:</strong> 82 – 84</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Growing areas */}
      <section className='py-16 md:py-20'>
        <div className='max-w-5xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold text-dark mb-4'>Harar Coffee Growing Areas</h2>
          <p className='text-dark/60 mb-10 max-w-3xl'>
            Harar coffee is grown in the eastern highlands around the ancient city of Harar,
            spanning several districts known for distinct microclimate conditions.
          </p>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              { name: 'West Hararge', alt: '1,600–2,100m', notes: 'The primary Harar coffee zone with the most concentrated production. Known for intense blueberry and wine notes. Premium longberry lots predominantly sourced here.' },
              { name: 'East Hararge', alt: '1,500–1,900m', notes: 'Slightly lower altitude producing fuller-bodied, earthier coffees with dark chocolate and dried fruit characteristics. Major commercial-grade production area.' },
              { name: 'Harar City Surrounds', alt: '1,800–2,000m', notes: 'Smallholder gardens within and around the historic walled city. The original Harar coffee terroir - prized for heritage character and unique microclimate.' },
              { name: 'Jarso', alt: '1,700–2,100m', notes: 'Higher-altitude sub-district producing more complex, fruity lots with brighter acidity. Growing recognition among specialty buyers.' },
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
          <h2 className='text-3xl font-extrabold text-dark mb-4 text-center'>Harar Export Specifications</h2>
          <p className='text-dark/60 text-center max-w-3xl mx-auto mb-10'>
            Harar uses its own classification (Longberry/Shortberry) alongside the standard grade system. See our <Link href='/coffee-grading-ethiopia' className='underline hover:text-dark/90'>Ethiopian coffee grading guide</Link> for more.
          </p>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr className='bg-dark text-primary'>
                  <th className='px-4 py-3 text-left font-bold'>Specification</th>
                  <th className='px-4 py-3 text-left font-bold'>Grade 4 (Longberry)</th>
                  <th className='px-4 py-3 text-left font-bold'>Grade 5 (Shortberry)</th>
                </tr>
              </thead>
              <tbody className='text-dark/80'>
                <tr className='border-b border-dark/10'><td className='px-4 py-3 font-medium'>SCA Cup Score</td><td className='px-4 py-3'>84 – 86+</td><td className='px-4 py-3'>82 – 84</td></tr>
                <tr className='border-b border-dark/10 bg-white'><td className='px-4 py-3 font-medium'>Bean Size</td><td className='px-4 py-3'>Large, elongated</td><td className='px-4 py-3'>Small, round</td></tr>
                <tr className='border-b border-dark/10'><td className='px-4 py-3 font-medium'>Screen Size</td><td className='px-4 py-3'>16 – 18+</td><td className='px-4 py-3'>13 – 15</td></tr>
                <tr className='border-b border-dark/10 bg-white'><td className='px-4 py-3 font-medium'>Moisture Content</td><td className='px-4 py-3'>10 – 12%</td><td className='px-4 py-3'>10 – 12%</td></tr>
                <tr className='border-b border-dark/10'><td className='px-4 py-3 font-medium'>Processing</td><td className='px-4 py-3'>Natural (Dry)</td><td className='px-4 py-3'>Natural (Dry)</td></tr>
                <tr className='border-b border-dark/10 bg-white'><td className='px-4 py-3 font-medium'>Packaging</td><td className='px-4 py-3'>60kg GrainPro-lined jute</td><td className='px-4 py-3'>60kg jute bags</td></tr>
                <tr className='border-b border-dark/10'><td className='px-4 py-3 font-medium'>Incoterms</td><td className='px-4 py-3'>FOB Djibouti / FCA</td><td className='px-4 py-3'>FOB Djibouti / FCA</td></tr>
                <tr className='bg-white'><td className='px-4 py-3 font-medium'>Harvest Season</td><td className='px-4 py-3'>November – February</td><td className='px-4 py-3'>November – February</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why source from us */}
      <section className='py-16 md:py-20'>
        <div className='max-w-4xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold text-dark mb-8'>Why Source Harar from Ethio Coffee?</h2>
          <div className='space-y-6 text-dark/80'>
            <div className='flex gap-4'>
              <HiOutlineBuildingLibrary className='text-2xl text-dark/60 mt-1 flex-shrink-0' />
              <div>
                <h3 className='font-bold text-dark'>Heritage Origin Expertise</h3>
                <p className='mt-1'>Harar requires specialized sourcing knowledge. We work with experienced traders near the walled city of Harar who sort and grade longberry by hand - ensuring you receive the genuine article, not commercial filler.</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <HiOutlineClipboardDocumentCheck className='text-2xl text-dark/60 mt-1 flex-shrink-0' />
              <div>
                <h3 className='font-bold text-dark'>Rigorous Quality Control</h3>
                <p className='mt-1'>Harar&apos;s natural processing introduces variability. We cup every lot to SCA standards and provide full quality reports. Only lots meeting our 82+ threshold are offered to buyers.</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <PiCoffee className='text-2xl text-dark/60 mt-1 flex-shrink-0' />
              <div>
                <h3 className='font-bold text-dark'>The Original Mocha</h3>
                <p className='mt-1'>For roasters seeking authentic mocha character - dark chocolate, wild berries, wine - Harar is irreplaceable. Perfect for single origin, espresso blends, and chocolate-coffee pairings.</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <HiOutlineCube className='text-2xl text-dark/60 mt-1 flex-shrink-0' />
              <div>
                <h3 className='font-bold text-dark'>Flexible Quantities</h3>
                <p className='mt-1'>Harar works in both FCL and combined shipments with other Ethiopian origins. Request samples to evaluate before committing to larger volumes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='py-16 bg-dark text-primary'>
        <div className='max-w-4xl mx-auto px-6'>
          <h2 className='text-3xl font-extrabold mb-10 text-center'>Frequently Asked Questions About Harar Coffee</h2>
          <div className='space-y-6'>
            {[
              { q: 'What does Harar coffee taste like?', a: 'Harar is known for wild blueberry, dark chocolate, wine-like complexity, dried fruit, and warm spice (cardamom, cinnamon). It has a full, heavy body and low-medium acidity. The "mocha" character - natural chocolate-berry sweetness - is Harar\'s most distinctive quality.' },
              { q: 'Why is Harar always natural processed?', a: 'Harar\'s eastern Ethiopian location has a drier climate compared to the western and southern growing regions. Smallholder farmers have dry-processed their coffee for centuries, and this traditional method is integral to Harar\'s distinctive flavor profile. Washed Harar simply doesn\'t exist.' },
              { q: 'What is the difference between longberry and shortberry?', a: 'Longberry refers to larger, elongated Harar beans (screen 16+). They\'re more labor-intensive to sort and produce more complex, intense flavors. Shortberry (screen 13-15) is more available and affordable. Longberry commands higher premiums and is the preferred grade for specialty roasters.' },
              { q: 'How much does Harar coffee cost FOB?', a: 'Grade 4 Longberry: $3.00–$4.50/lb FOB Djibouti. Grade 5 Shortberry: $2.50–$3.50/lb. Premium hand-sorted longberry can approach $5.00/lb. Contact us for current season pricing.' },
              { q: 'What is the minimum order?', a: 'Standard minimum is one FCL (≈19.2 MT, 320 × 60kg bags). Harar can be combined with other Ethiopian origins in the same container. LCL options may be available.' },
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
          <h2 className='text-3xl font-extrabold mb-4'>Ready to Source Harar Coffee?</h2>
          <p className='text-primary/70 mb-8 text-lg'>
            Request pre-shipment samples of authentic Harar longberry, get current season pricing,
            or discuss your requirements with our export team.
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

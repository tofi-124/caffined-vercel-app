import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { HiOutlineHandThumbUp, HiOutlineScale, HiOutlineUsers, HiOutlineChartBar, HiOutlineCheckCircle, HiOutlineExclamationTriangle, HiOutlineBeaker } from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function SelectiveCoffeeHarvesting({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Why the human hand remains the ultimate tool for quality: a deep dive into selective coffee harvesting, picker economics, and the science of ripeness
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Selective harvesting requires pickers to visually identify and manually remove only the perfectly ripe cherries, leaving green ones for future passes
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Selective coffee harvesting: hand picking ripe red cherries on Ethiopian farm'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Farm Practices / Coffee Economics / Quality Control</span>
      </div>
      
      <p className='my-4'>
        In the journey from seed to cup, no step is more labor-intensive or critical to flavor than <span className='font-bold'>selective coffee harvesting</span>. Selective coffee harvesting, picking only ripe cherries by hand, directly determines final cup quality and market value. Buyers who prioritize traceability and ripeness consistently receive cleaner, sweeter lots.
      </p>

      <p className='my-4'>
        For specialty coffee buyers and roasters, understanding the "who" and "how" of harvesting explains why some lots command strong premiums. This guide explores picker economics, the science of ripeness, and practical actions buyers can take to support selective harvesting in origin communities.
      </p>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineHandThumbUp className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>The Golden Rule:</span> A coffee bean can never be better than the cherry it came from. Processing can preserve quality, and roasting can highlight it, but no amount of technology can fix the astringency of an unripe (green) cherry.</span>
        </p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        <HiOutlineUsers className='inline mr-2' />
        Who Are the Coffee Pickers?
      </h3>
      
      <p className='my-4'>
        Coffee pickers are the unsung engine of the industry. In Central America, they are often migrant families moving between elevations as crops ripen. In Ethiopia, they may be local smallholders harvesting their own garden plots.
      </p>

      <h4 className='text-xl font-bold mt-6'>
        The Economics of the Basket
      </h4>
      
      <p className='my-4'>
        Harvesting is physically demanding work. Pickers navigate steep slopes, often at 45-degree angles, carrying baskets tied to their waists.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3'><HiOutlineScale className='inline mr-2' />Harvesting by the Numbers</h4>
        <ul className='text-sm space-y-2'>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Daily Haul:</span> An average picker collects 45–90 kg (100–200 lbs) of cherries per day.</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>The Yield:</span> It takes approx. 5-6 kg of cherry to produce 1 kg of green coffee. A hard day's work results in just 10-15 kg of exportable beans.</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 text-xl flex-shrink-0 mt-0.5' />
            <span><span className='font-semibold'>Payment:</span> Most pickers are paid by volume (e.g., per "lata" or "cajuela"). In specialty coffee, pickers often receive a premium for collecting 100% ripe red cherries.</span>
          </li>
        </ul>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        <HiOutlineChartBar className='inline mr-2' />
        The Three Methods: Selective vs. Strip vs. Machine
      </h3>
      
      <p className='my-4'>
        Not all coffee is harvested equally. The method chosen depends on the topography of the land, the cost of labor, and the target market for the coffee.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='min-w-full text-sm text-left border border-gray-200'>
          <thead className='bg-gray-100 font-bold text-dark'>
            <tr>
              <th className='p-3 border-b'>Method</th>
              <th className='p-3 border-b'>Description</th>
              <th className='p-3 border-b'>Quality Impact</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            <tr>
              <td className='p-3 font-bold'>Selective Picking</td>
              <td className='p-3'>Laborers pick only ripe cherries by hand, returning to the same tree 3-5 times per season (passes).</td>
              <td className='p-3 text-green-700 font-semibold'>Highest. Maximizes sugar content and uniformity.</td>
            </tr>
            <tr>
              <td className='p-3 font-bold'>Strip Picking</td>
              <td className='p-3'>Hand-stripping the entire branch (ripe, green, and flowers) in a single motion. Common in Brazil.</td>
              <td className='p-3 text-amber-600'>Variable. Requires intense post-harvest sorting to remove under-ripes.</td>
            </tr>
            <tr>
              <td className='p-3 font-bold'>Mechanical</td>
              <td className='p-3'>Large tractors or handheld shakers vibrate the tree to dislodge fruit. Requires flat terrain.</td>
              <td className='p-3 text-blue-600'>Efficient. Modern machines can be calibrated for ripeness, but still mix maturity levels.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        <HiOutlineBeaker className='inline mr-2' />
        The Science of Ripeness: Why Red Matters
      </h3>
      
      <p className='my-4'>
        Why is selective harvesting so obsessed with color? As the coffee cherry matures from green to yellow to red (or purple/orange depending on variety), complex chemical changes occur.
      </p>

      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Sugar Development:</span> Unripe cherries lack sucrose. Ripe cherries have high sugar content, which drives fermentation and creates sweetness in the cup.</li>
        <li><span className='font-bold'>Phenolics:</span> Green cherries contain high levels of chlorogenic acids that result in harsh, metallic, or astringent flavors known as "quakers" in roasted coffee.</li>
        <li><span className='font-bold'>Brix Readings:</span> Advanced farms now use refractometers to measure the sugar content (Brix) of the cherry juice in the field, harvesting only when levels hit 18-22%.</li>
      </ul>

      <div className='bg-amber-50 p-5 rounded-lg my-6 border border-amber-200'>
        <h5 className='font-bold mb-2 text-amber-800'>The Cost of Perfection</h5>
        <p className='text-sm'>
          Selective picking is expensive. Returning to a tree five times to pick only the few ready cherries triples the labor cost compared to strip picking. This is why <span className='font-bold'>Specialty Coffee</span> commands a higher price: you are paying for the labor of selection.
        </p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>Actionable Steps for Buyers</h3>
      <ul className='list-disc ml-5 my-4 space-y-2'>
        <li>Specify maturity and color standards in contracts and request field photos or short videos to confirm ripeness.</li>
        <li>Offer a small premium for documented lots with 90–100% ripe picking to incentivize selective harvests.</li>
        <li>Support training programs for pickers on ripeness assessment; better-trained pickers mean fewer defects downstream.</li>
      </ul>

      <h3 className='text-2xl font-extrabold mt-8'>
        <HiOutlineExclamationTriangle className='inline mr-2' />
        The Crisis: Labor Shortages and the Future
      </h3>
      
      <p className='my-4'>
        The era of cheap, abundant agricultural labor is ending. Rural-to-urban migration and aging populations in coffee lands (like Colombia and Costa Rica) are creating a labor crisis.
      </p>

      <p className='my-4'>
        In 2024 and 2025, many farms reported leaving up to 15% of their crop to rot on the tree simply because they could not find enough hands to pick it. This pressure is driving the industry toward two futures:
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold text-lg mb-2'>1. High-End Mechanization</h5>
          <p className='text-sm'>
            Brazil has proven that mechanical harvesting, when combined with optical laser sorters and density tables, can produce 85+ point coffees. We will see more handheld mechanical shakers in steep terrains.
          </p>
        </div>
        
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <h5 className='font-bold text-lg mb-2'>2. Ultra-Premium Hand Picking</h5>
          <p className='text-sm'>
            True hand-picked coffee will become a luxury item. To sustain this, pickers must be paid professional wages, shifting the cost to the consumer. The days of $15/lb hand-picked coffee may be numbered.
          </p>
        </div>
      </div>

      <div className='my-6'>
        <h3 className='text-2xl font-extrabold mb-3'>Further reading & sources</h3>
        <ul className='list-disc ml-5 space-y-2 text-sm'>
          <li><a href='https://www.ico.org' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>International Coffee Organization: market & production data</a></li>
          <li><a href='https://www.worldcoffeeresearch.org' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>World Coffee Research: research on coffee production and varieties</a></li>
          <li><a href='https://www.fao.org' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>FAO: agriculture and labor reports</a></li>
        </ul>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Why Selective Harvesting Matters for Coffee Quality
      </h3>
      
      <p className='my-4'>
        The next time you brew a cup of sweet, clean, fruit-forward coffee, take a moment to consider the hands that made it possible. Selective coffee harvesting is not just a technique; it is a massive human effort to wrestle quality from nature, one cherry at a time.
      </p>

      <p className='my-4'>
        Whether through better wages for pickers or advanced sorting technology, the industry's goal remains the same: ensuring that only the perfect cherry makes it to your cup.
      </p>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineCheckCircle className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Looking for ethically harvested coffee?</span> <Link href="/offerings" className="underline hover:text-gray-200">Browse our Offerings collection</Link>, where we detail the harvesting and processing method for every lot we source.</span>
        </p>
      </div>

      {/* FAQ SECTION */}
      <section className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions About Selective Coffee Harvesting</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What is selective coffee harvesting?</h4>
            <p className="text-sm text-gray-600">Selective harvesting is the practice of hand-picking only ripe coffee cherries while leaving unripe (green) and overripe cherries on the branch. Pickers return multiple times during the harvest season to collect cherries at peak ripeness.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Why does selective harvesting improve coffee quality?</h4>
            <p className="text-sm text-gray-600">Ripe cherries contain fully developed sugars, acids, and flavor precursors. Harvesting only ripe cherries eliminates the astringent or grassy flavors caused by unripe fruit, resulting in sweeter, cleaner, and more complex cup profiles.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How much does selective coffee harvesting cost compared to strip picking?</h4>
            <p className="text-sm text-gray-600">Selective harvesting costs 2 to 3 times more than strip picking due to higher labor requirements and multiple passes. However, the resulting quality premium typically exceeds the additional cost for specialty-grade coffee.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Is Ethiopian coffee selectively harvested?</h4>
            <p className="text-sm text-gray-600">Most specialty Ethiopian coffee is selectively harvested. Ethiopia's smallholder farming model and mountainous terrain make hand-picking the primary harvesting method, contributing to the country's reputation for high cup quality.</p>
          </div>
        </div>
      </section>

      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Production & Quality</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/ethiopian-dry-coffee-production-quality-control' className='text-amber-700 hover:underline'>Dry Coffee Production & Quality</Link></li>
              <li>• <Link href='/insights/complete-guide-to-understanding-coffee' className='text-amber-700 hover:underline'>Anatomy of a Coffee Cherry</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing & Certifications</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Fair Trade & Certification</Link></li>
              <li>• <Link href='/insights/ethiopia-china-coffee-trade-partnership' className='text-amber-700 hover:underline'>Trade & Market Context</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Selectively Harvested Ethiopian Coffee</h4>
        <p className='my-2'>
          At <span className='font-bold'>Ethio Coffee Export PLC</span>, our specialty lots are hand-picked at peak ripeness for maximum cup quality. Request samples today.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Our Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Contact Us</Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>How to Order</Link>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> This guide explores the practice and impact of selective coffee harvesting on quality, sustainability, and Ethiopian specialty coffee production.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}
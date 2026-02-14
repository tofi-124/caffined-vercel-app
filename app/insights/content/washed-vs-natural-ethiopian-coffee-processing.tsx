import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function WashedVsNaturalEthiopianCoffeeProcessing({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        How processing method shapes the cup and what that means for your roasting decisions
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          The processing method is one of the biggest factors determining how Ethiopian coffee tastes in the cup.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Washed and natural processed Ethiopian coffee beans comparison'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <p className='my-4'>
        When you&apos;re buying Ethiopian green coffee, one of the most important decisions isn&apos;t the region it&apos;s the processing method.
        Washed and natural processed coffees from the same farm can taste dramatically different.
      </p>

      <p className='my-4'>
        Understanding these differences helps you make better sourcing decisions, adjust your roasting approach, and set accurate customer expectations.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        What is Washed (Wet) Processing?
      </h3>
      <p className='my-4'>
        In washed processing, the coffee cherry&apos;s fruit is removed from the seed (the coffee bean) immediately after harvesting.
        The beans are then fermented in water tanks to break down the remaining mucilage before being washed clean and dried on raised beds.
      </p>
      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-2'>Washed Ethiopian Coffee Characteristics</h4>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'><span className='font-bold'>Flavor:</span> Clean, bright, with pronounced acidity</li>
          <li className='my-2'><span className='font-bold'>Aromatics:</span> Floral, citrus, tea-like</li>
          <li className='my-2'><span className='font-bold'>Body:</span> Light to medium, silky</li>
          <li className='my-2'><span className='font-bold'>Finish:</span> Crisp, transparent</li>
          <li className='my-2'><span className='font-bold'>Best regions:</span> Yirgacheffe, Limu (though washed lots exist everywhere)</li>
        </ul>
      </div>
      <p className='my-4'>
        <span className='font-bold'>Why roasters love it:</span> Washed processing creates consistency and clarity. You taste the terroir (altitude, soil, variety) more directly because the fruit isn&apos;t masking the bean&apos;s inherent character.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        What is Natural (Dry) Processing?
      </h3>
      <p className='my-4'>
        Natural processing is the oldest coffee processing method and it&apos;s still widely used in Ethiopia.
        The whole cherry is dried on raised beds or patios with the fruit still attached to the bean. As it dries, the fruit sugars ferment and infuse into the seed.
      </p>
      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-2'>Natural Ethiopian Coffee Characteristics</h4>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'><span className='font-bold'>Flavor:</span> Fruit-forward, jammy, complex</li>
          <li className='my-2'><span className='font-bold'>Aromatics:</span> Berry, wine, tropical fruit</li>
          <li className='my-2'><span className='font-bold'>Body:</span> Medium to full, syrupy</li>
          <li className='my-2'><span className='font-bold'>Finish:</span> Long, sweet, sometimes boozy</li>
          <li className='my-2'><span className='font-bold'>Best regions:</span> Sidamo, Guji, Harar</li>
        </ul>
      </div>
      <p className='my-4'>
        <span className='font-bold'>Why roasters love it:</span> Natural processing creates bold, memorable cups. A well-processed natural Ethiopian can taste like blueberry jam, strawberry wine, or tropical fruit flavors that wow customers.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Side-by-Side Comparison
      </h3>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse border border-gray-300 font-inconsolata text-sm'>
          <thead className='bg-dark text-primary'>
            <tr>
              <th className='border border-gray-300 p-3 text-left'>Factor</th>
              <th className='border border-gray-300 p-3 text-left'>Washed</th>
              <th className='border border-gray-300 p-3 text-left'>Natural</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Acidity</td>
              <td className='border border-gray-300 p-3'>Bright, citric, sparkling</td>
              <td className='border border-gray-300 p-3'>Softer, fruity, wine-like</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Body</td>
              <td className='border border-gray-300 p-3'>Light, clean, tea-like</td>
              <td className='border border-gray-300 p-3'>Full, syrupy, round</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Sweetness</td>
              <td className='border border-gray-300 p-3'>Honey, floral sugar</td>
              <td className='border border-gray-300 p-3'>Jam, dried fruit, brown sugar</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Consistency</td>
              <td className='border border-gray-300 p-3'>More consistent lot-to-lot</td>
              <td className='border border-gray-300 p-3'>Can vary more (quality dependent)</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Best Brew Method</td>
              <td className='border border-gray-300 p-3'>Pour-over, filter, Chemex</td>
              <td className='border border-gray-300 p-3'>Espresso, immersion, cold brew</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Roast Approach</td>
              <td className='border border-gray-300 p-3'>Light (preserve clarity)</td>
              <td className='border border-gray-300 p-3'>Light-medium (balance fruit/body)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Roasting Washed Ethiopian Coffee
      </h3>
      <p className='my-4'>
        Washed Ethiopian coffees are prized for their delicate flavors which means they&apos;re easy to over-roast.
      </p>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'><span className='font-bold'>Target roast:</span> Light (City to City+)</li>
        <li className='my-2'><span className='font-bold'>First crack:</span> End development shortly after first crack (30-60 seconds)</li>
        <li className='my-2'><span className='font-bold'>What to avoid:</span> Going too dark kills the florals and turns citrus into generic &quot;coffee&quot; flavor</li>
        <li className='my-2'><span className='font-bold'>Pro tip:</span> Lower charge temperatures and gentle heat application preserve aromatics</li>
        <li className='my-2'>For detailed temperature ranges, RoR guidance, and development time ratios, see our complete <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='underline font-bold'>guide to roasting Ethiopian coffee beans</Link></li>
      </ul>

      <h3 className='text-2xl font-extrabold mt-8'>
        Roasting Natural Ethiopian Coffee
      </h3>
      <p className='my-4'>
        Natural processed coffees have more sugar from the dried fruit, which affects how they caramelize during roasting.
      </p>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'><span className='font-bold'>Target roast:</span> Light-medium (City to Full City-)</li>
        <li className='my-2'><span className='font-bold'>First crack:</span> Can extend development slightly longer than washed (60-90 seconds post-crack)</li>
        <li className='my-2'><span className='font-bold'>What to avoid:</span> Under-developing creates sour, green notes; over-roasting makes it taste burnt and loses fruit character</li>
        <li className='my-2'><span className='font-bold'>Pro tip:</span> Naturals benefit from slightly higher airflow to prevent scorching from sugar carbonization</li>
      </ul>

      <h3 className='text-2xl font-extrabold mt-8'>
        Which Should You Stock?
      </h3>
      <p className='my-4'>
        Most successful specialty roasteries carry both washed and natural Ethiopian coffees. Here&apos;s a framework:
      </p>
      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'><span className='font-bold'>Washed Ethiopian:</span> Your accessible, everyday specialty option. Great for customers new to Ethiopian coffee.</li>
          <li className='my-2'><span className='font-bold'>Natural Ethiopian:</span> Your &quot;wow factor&quot; offering. Use for limited releases, subscriptions, and customers who want something bold.</li>
        </ul>
      </div>
      <p className='my-4'>
        Some roasteries position washed as their &quot;light and bright&quot; option and natural as their &quot;fruit bomb&quot; and let customers choose their adventure.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        What About Honey Process?
      </h3>
      <p className='my-4'>
        While less common in Ethiopia than in Central America, honey processed coffees (where some mucilage is left on the bean during drying) do exist.
        They fall somewhere between washed and natural with more body than washed but more clarity than natural.
      </p>

      {/* FAQ SECTION */}
      <section className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions About Ethiopian Coffee Processing</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What is the difference between washed and natural processed Ethiopian coffee?</h4>
            <p className="text-sm text-gray-600">Washed (wet) processing removes the fruit from the bean before drying, producing cleaner, brighter cups with floral and citrus notes. Natural (dry) processing dries the whole cherry, allowing the fruit to ferment around the bean, resulting in heavier body and intense fruit flavors like blueberry and strawberry.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Which processing method is better for specialty coffee?</h4>
            <p className="text-sm text-gray-600">Neither is inherently better—they serve different purposes. Washed coffees are prized for clarity and consistency, making them ideal for showcasing terroir. Natural coffees offer bolder, more complex fruit profiles that appeal to adventurous palates. Most successful roasteries stock both to offer variety.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">How should I roast washed vs natural Ethiopian coffee differently?</h4>
            <p className="text-sm text-gray-600">Washed lots reward lighter roasts (City to City+) with lower charge temperatures to preserve florals. Natural lots can handle slightly more development (City to Full City-) and benefit from higher airflow to prevent sugar scorching. Always cup frequently to find each lot&apos;s sweet spot.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What is honey processed Ethiopian coffee?</h4>
            <p className="text-sm text-gray-600">Honey processing is less common in Ethiopia than in Central America, but it does exist. Some mucilage is left on the bean during drying, producing cups that fall between washed (more body) and natural (more clarity) in character. It&apos;s an interesting middle ground worth exploring.</p>
          </div>
        </div>
      </section>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Both Washed and Natural Ethiopian Coffee</h4>
        <p className='my-2'>
          At <span className='font-bold'>Ethio Coffee Export PLC</span>, we export washed and natural processed coffees from Ethiopia&apos;s top growing regions. Request samples of both to taste the difference and find the right fit for your menu.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>
            View Our Offerings
          </Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            Contact Us
          </Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            How to Order
          </Link>
        </div>
      </div>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origins & Processing</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Coffee Origins</Link></li>
              <li>• <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji</Link></li>
              <li>• <Link href='/insights/selective-coffee-harvesting' className='text-amber-700 hover:underline'>Selective Coffee Harvesting</Link></li>
              <li>• <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Ethiopian Heirloom Varieties</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality & Cupping</h4>
            <ul className='space-y-1 text-sm'>
              <li>• <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup Ethiopian Coffee</Link></li>
              <li>• <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality Control</Link></li>
              <li>• <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee</Link></li>
              <li>• <Link href='/insights/how-to-make-coffee-without-a-coffeemaker' className='text-amber-700 hover:underline'>How to Make Coffee Without a Coffeemaker</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> This guide compares washed and natural processing methods for Ethiopian coffee—covering flavor differences, roasting tips, shelf life, and which approach best fits different roastery and menu needs.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> · <Link href='/about' className='underline'>About Ethio Coffee</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}

import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function YirgacheffeVsSidamoVsGujiComparison({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        A head-to-head comparison of Ethiopia&apos;s most popular specialty coffee origins
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Yirgacheffe, Sidamo, and Guji are the three most sought-after Ethiopian coffee origins in the specialty market.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Comparison of Yirgacheffe, Sidamo, and Guji Ethiopian coffee regions'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <p className='my-4'>
        When specialty coffee roasters think &quot;Ethiopian coffee,&quot; three names come up more than any others: Yirgacheffe, Sidamo, and Guji.
        But which one is right for your roastery? And what actually makes them different?
      </p>

      <p className='my-4'>
        This guide compares all three origins side-by-side covering flavor profiles, processing methods, altitude, and best use cases so you can make an informed sourcing decision.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Quick Comparison Table
      </h3>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse border border-gray-300 font-inconsolata text-sm'>
          <thead className='bg-dark text-primary'>
            <tr>
              <th className='border border-gray-300 p-3 text-left'>Factor</th>
              <th className='border border-gray-300 p-3 text-left'>Yirgacheffe</th>
              <th className='border border-gray-300 p-3 text-left'>Sidamo</th>
              <th className='border border-gray-300 p-3 text-left'>Guji</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Region</td>
              <td className='border border-gray-300 p-3'>Gedeo Zone, SNNPR</td>
              <td className='border border-gray-300 p-3'>Sidama Zone, SNNPR</td>
              <td className='border border-gray-300 p-3'>Guji Zone, Oromia</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Altitude</td>
              <td className='border border-gray-300 p-3'>1,700–2,200m</td>
              <td className='border border-gray-300 p-3'>1,600–2,200m</td>
              <td className='border border-gray-300 p-3'>1,900–2,300m</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Primary Processing</td>
              <td className='border border-gray-300 p-3'>Washed (naturals available)</td>
              <td className='border border-gray-300 p-3'>Natural &amp; Washed</td>
              <td className='border border-gray-300 p-3'>Natural &amp; Washed</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Key Flavor Notes</td>
              <td className='border border-gray-300 p-3'>Jasmine, lemon, bergamot, tea-like</td>
              <td className='border border-gray-300 p-3'>Blueberry, strawberry, cocoa, wine</td>
              <td className='border border-gray-300 p-3'>Peach, apricot, jasmine, syrupy</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Body</td>
              <td className='border border-gray-300 p-3'>Light, silky, tea-like</td>
              <td className='border border-gray-300 p-3'>Medium, round</td>
              <td className='border border-gray-300 p-3'>Medium-full, syrupy</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='border border-gray-300 p-3 font-bold'>Acidity</td>
              <td className='border border-gray-300 p-3'>Bright, citric</td>
              <td className='border border-gray-300 p-3'>Balanced, fruity</td>
              <td className='border border-gray-300 p-3'>Bright, complex</td>
            </tr>
            <tr>
              <td className='border border-gray-300 p-3 font-bold'>Best For</td>
              <td className='border border-gray-300 p-3'>Pour-over, light roast</td>
              <td className='border border-gray-300 p-3'>Filter, espresso blends</td>
              <td className='border border-gray-300 p-3'>Single-origin espresso</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Yirgacheffe: The Floral Classic
      </h3>
      <p className='my-4'>
        Yirgacheffe is arguably the most famous Ethiopian coffee region in the world and for good reason.
        Washed Yirgacheffe coffees are prized for their delicate floral aromatics, tea-like body, and bright citrus acidity.
      </p>
      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-2'>Yirgacheffe Flavor Profile</h4>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'>Jasmine and bergamot aromatics</li>
          <li className='my-2'>Lemon and citrus zest acidity</li>
          <li className='my-2'>Light honey sweetness</li>
          <li className='my-2'>Clean, tea-like finish</li>
        </ul>
      </div>
      <p className='my-4'>
        <span className='font-bold'>Best for:</span> Roasters who want a benchmark specialty Ethiopian for pour-over programs. Yirgacheffe rewards light roasting and showcases what &quot;Ethiopian coffee&quot; means to most consumers.
      </p>
      <p className='my-4'>
        <span className='font-bold'>Roasting tip:</span> Keep it light (City to City+). Over-roasting will destroy the delicate florals that make Yirgacheffe special.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Sidamo: The Fruit-Forward Versatile Choice
      </h3>
      <p className='my-4'>
        Sidamo (or Sidama, as the region is now officially known) is a larger growing region that produces some of Ethiopia&apos;s most fruit-forward coffees.
        Natural processed Sidamo is famous for intense blueberry and strawberry notes, while washed lots offer more balanced citrus and floral character.
      </p>
      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-2'>Sidamo Flavor Profile</h4>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'>Blueberry and strawberry (especially naturals)</li>
          <li className='my-2'>Wine-like acidity</li>
          <li className='my-2'>Cocoa and brown sugar finish</li>
          <li className='my-2'>Medium, rounded body</li>
        </ul>
      </div>
      <p className='my-4'>
        <span className='font-bold'>Best for:</span> Roasters who want versatility. Sidamo works beautifully as a single-origin for filter brewing, but also adds fruit complexity to espresso blends.
      </p>
      <p className='my-4'>
        <span className='font-bold'>Roasting tip:</span> Natural Sidamo can handle slightly more development than washed lots. Aim for light-to-medium (City to City+) to balance fruit intensity with sweetness.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Guji: The Rising Star for Specialty Espresso
      </h3>
      <p className='my-4'>
        Guji has rapidly become one of the most exciting Ethiopian coffee regions for specialty roasters.
        Known for its high altitude, excellent infrastructure of washing stations, and distinctive stone-fruit sweetness, Guji coffees often score among the highest in Ethiopian Cup of Excellence competitions.
      </p>
      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-2'>Guji Flavor Profile</h4>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'>Peach and apricot stone fruit</li>
          <li className='my-2'>Jasmine-like floral lift</li>
          <li className='my-2'>Syrupy, full body</li>
          <li className='my-2'>Complex, lingering sweetness</li>
        </ul>
      </div>
      <p className='my-4'>
        <span className='font-bold'>Best for:</span> Roasters looking for a standout single-origin espresso. Guji&apos;s combination of fruit, florals, and body translates beautifully under pressure.
      </p>
      <p className='my-4'>
        <span className='font-bold'>Roasting tip:</span> Light-to-medium roast brings out the best in Guji. Naturals especially benefit from careful heat application to preserve fruit without developing roasty bitterness.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Which Origin Should You Choose?
      </h3>
      <p className='my-4'>
        Here&apos;s a quick decision framework based on your menu needs:
      </p>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'><span className='font-bold'>You want a classic Ethiopian for pour-over:</span> Washed Yirgacheffe</li>
        <li className='my-2'><span className='font-bold'>You want intense fruit for a unique single-origin:</span> Natural Sidamo</li>
        <li className='my-2'><span className='font-bold'>You need an espresso that stands alone:</span> Guji (washed or natural)</li>
        <li className='my-2'><span className='font-bold'>You want versatility for blends and filter:</span> Sidamo</li>
        <li className='my-2'><span className='font-bold'>You want the highest-scoring lots for competitions:</span> Guji micro-lots</li>
      </ul>

      <h3 className='text-2xl font-extrabold mt-8'>
        Can You Offer All Three?
      </h3>
      <p className='my-4'>
        Many successful roasteries carry 2-3 Ethiopian origins to offer variety to their customers. A common approach:
      </p>

      <p className='my-4'>
        One factor that drives the differences between all three regions is altitude.
        Guji&apos;s higher elevations produce denser beans with more complex acidity, while Sidama&apos;s broader range creates its internal diversity.
        For a full breakdown of how elevation and soil shape flavor, see our article on{' '}
        <Link href='/insights/how-altitude-terroir-shape-ethiopian-coffee' className='underline font-bold'>
          altitude and terroir in Ethiopian coffee
        </Link>.
      </p>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'><span className='font-bold'>Core offering:</span> Washed Yirgacheffe (the accessible classic)</li>
        <li className='my-2'><span className='font-bold'>Seasonal rotation:</span> Natural Sidamo (for fruit lovers)</li>
        <li className='my-2'><span className='font-bold'>Speciality single-origin espresso:</span> Guji (for the adventurous)</li>
      </ul>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source All Three from Ethio Coffee</h4>
        <p className='my-2 font-medium'>
          We export Grades 1-4 from Yirgacheffe, Sidamo, and Guji specialty and commercial grades with full traceability.
          Request samples to compare and find the right fit for your roastery or blend program.
        </p>
        <Link href='/contact-us' className='underline font-bold'>
          REQUEST SAMPLES
        </Link>
      </div>
    </>
  )
}

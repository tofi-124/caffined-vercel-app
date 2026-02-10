import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function GuideEthiopianCoffeeOrigins({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        A buyer-friendly guide to regions, processing, and roast direction
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Ethiopia&apos;s coffee map is a great starting point - but sourcing decisions are made in the details.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Map of Ethiopian coffee regions'
            fill
            objectFit='contain'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <p className='my-4'>
        Ethiopian green coffee is often described with famous place names-Yirgacheffe, Guji, Sidama, Limu, Harrar, Kaffa, Jimma.
        For buyers, &quot;origin&quot; isn&apos;t just geography: it&apos;s a shorthand for altitude range, local genetics (&quot;heirloom&quot; selections), processing approach, and the mills/washing stations that shape the cup.
      </p>

      <p className='my-4 text-sm text-gray-700 font-inconsolata'>
        Note: Profiles vary by lot, washing station, and crop year. The ranges below are common reference points used in specialty coffee, not guarantees.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Featured Ethiopian Coffee Regions
      </h3>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Yirgacheffe - Washed, Floral & Delicate</h4>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'><span className='font-bold'>Region:</span> Gedeo Zone (SNNPR / South Ethiopia)</li>
          <li className='my-2'><span className='font-bold'>Processing:</span> Commonly washed (naturals also exist)</li>
          <li className='my-2'><span className='font-bold'>Altitude:</span> ~1,700–2,200 m (varies by kebele/lot)</li>
          <li className='my-2'><span className='font-bold'>Cup Profile:</span> Jasmine, bergamot, lemon/black tea (often)</li>
          <li className='my-2'><span className='font-bold'>Roast Tip:</span> Light roast (City) to preserve florals and structure</li>
        </ul>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Guji - Bright, Floral & Stone-Fruity</h4>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'><span className='font-bold'>Region:</span> Oromia (Guji Zone, south/southeast)</li>
          <li className='my-2'><span className='font-bold'>Processing:</span> Both washed and natural are common</li>
          <li className='my-2'><span className='font-bold'>Altitude:</span> ~1,900–2,200 m (many lots high elevation)</li>
          <li className='my-2'><span className='font-bold'>Cup Profile:</span> White peach/stone fruit, lemongrass, floral-honey (lot dependent)</li>
          <li className='my-2'><span className='font-bold'>Roast Tip:</span> Light–medium (City to City+) for clarity and sweetness</li>
        </ul>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Limu - Washed, Balanced & Citrusy</h4>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'><span className='font-bold'>Region:</span> Oromia (western highlands)</li>
          <li className='my-2'><span className='font-bold'>Processing:</span> Commonly washed</li>
          <li className='my-2'><span className='font-bold'>Altitude:</span> ~1,800–2,000 m (typical range)</li>
          <li className='my-2'><span className='font-bold'>Cup Profile:</span> Citrus zest, cocoa, honey (often)</li>
          <li className='my-2'><span className='font-bold'>Roast Tip:</span> Medium (City+) can enhance body while keeping citrus lift</li>
        </ul>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Harrar - Natural, Bold & Winey</h4>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'><span className='font-bold'>Region:</span> Eastern Ethiopia (Hararghe area)</li>
          <li className='my-2'><span className='font-bold'>Processing:</span> Traditionally natural (sun-dried)</li>
          <li className='my-2'><span className='font-bold'>Altitude:</span> ~1,500–2,000 m (varies)</li>
          <li className='my-2'><span className='font-bold'>Cup Profile:</span> Dried fruit, cocoa, spice; sometimes berry-like notes (lot dependent)</li>
          <li className='my-2'><span className='font-bold'>Roast Tip:</span> Medium to Full City to balance fruit intensity and body</li>
        </ul>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Sidama - Sweet, Juicy & Aromatic</h4>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'><span className='font-bold'>Region:</span> Sidama (South Ethiopia)</li>
          <li className='my-2'><span className='font-bold'>Processing:</span> Washed is common; naturals also widely produced</li>
          <li className='my-2'><span className='font-bold'>Altitude:</span> ~1,600–2,200 m</li>
          <li className='my-2'><span className='font-bold'>Cup Profile:</span> Red berry, sugar cane, florals (often)</li>
          <li className='my-2'><span className='font-bold'>Roast Tip:</span> Light–medium to highlight sweetness and clarity</li>
        </ul>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Kaffa - Wild-Rooted & Foresty</h4>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'><span className='font-bold'>Region:</span> Kaffa (Southwest Ethiopia; often cited as Arabica&apos;s ancestral home)</li>
          <li className='my-2'><span className='font-bold'>Processing:</span> Both washed and natural exist (varies by supplier)</li>
          <li className='my-2'><span className='font-bold'>Altitude:</span> ~1,400–2,000 m</li>
          <li className='my-2'><span className='font-bold'>Cup Profile:</span> Herbal tea, dark fruit, foresty/earthy notes (lot dependent)</li>
          <li className='my-2'><span className='font-bold'>Roast Tip:</span> Medium to bring balance and keep structure</li>
        </ul>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Jimma (Djimma) - Traditional, Cocoa & Earthy</h4>
        <ul className='font-inconsolata list-disc ml-5'>
          <li className='my-2'><span className='font-bold'>Region:</span> Oromia (Southwest Ethiopia)</li>
          <li className='my-2'><span className='font-bold'>Processing:</span> Often natural; washed lots also exist depending on supply</li>
          <li className='my-2'><span className='font-bold'>Altitude:</span> ~1,400–1,900 m</li>
          <li className='my-2'><span className='font-bold'>Cup Profile:</span> Cocoa, spice, earth; muted fruit compared to high-elevation washed lots</li>
          <li className='my-2'><span className='font-bold'>Roast Tip:</span> Medium to medium-dark can smooth edges and deepen cocoa</li>
        </ul>
      </div>

      <h3 className='text-2xl font-extrabold mt-10'>
        Roasting & Sourcing Tips
      </h3>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>Roast small batches and cup often to learn each lot&apos;s sweet spot.</li>
        <li className='my-2'>Washed lots often reward lighter roasts; naturals can benefit from slightly more development time for balance.</li>
        <li className='my-2'>Store green coffee cool and dry, and avoid strong odors (greens absorb smells).</li>
        <li className='my-2'>When sourcing, ask for: washing station/mill, processing details, crop year, grade/screen, and a sample for evaluation.</li>
      </ul>

      <h3 className='text-2xl font-extrabold mt-10'>
        Sourcing Ethiopian Green Coffee (for buyers worldwide)
      </h3>
      <p className='my-4'>
        If you&apos;re buying green coffee (whether you&apos;re in Canada or anywhere else), the most helpful step is moving from &quot;country-level origin&quot; to lot-level clarity.
        The best suppliers can share not only the region, but also the washing station/cooperative, processing details, and consistency expectations.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <p className='my-2 font-medium'>
          Want help choosing the right Ethiopian origin for your menu or roasting goals?
          We can recommend lots based on your target profile and share traceability details when available.
        </p>
        <Link href='/contact-us' className='underline font-bold'>
          CONTACT US TO REQUEST SAMPLES
        </Link>
      </div>
    </>
  )
}

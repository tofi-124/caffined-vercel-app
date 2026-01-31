"use client"

import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import { 
  HiOutlineGlobeAlt, 
  HiOutlineStar, 
  HiOutlineLightBulb, 
  HiOutlineCheckCircle, 
  HiOutlineFire, 
  HiOutlineSparkles 
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function Top10SpecialtyCoffeeShops({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        A curated list of the world&apos;s most influential specialty coffee shops, from Oslo to Tokyo, defining the standards of roasting and service.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Exploring the pinnacle of global coffee culture and roasting innovation.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Top specialty coffee shops world map and espresso'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>
      <p className='my-2 text-gray-600 font-inconsolata'>
        <HiOutlineGlobeAlt className='inline mr-2' />
        {date}
      </p>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Global Insights / Coffee Culture / Retail Trends</span>
      </div>
      
      <p className='my-4'>
        The world of specialty coffee has evolved from a niche hobby into a global culinary movement. Today&apos;s leading coffee shops are not just places to get caffeine; they are laboratories of flavor, champions of ethical sourcing, and temples of design.
      </p>

      <p className='my-4'>
        For coffee professionals and importers, studying these industry leaders offers critical insight into where the market is heading. Whether it&apos;s the "Nordic Roast" style of Oslo or the omakase service of Tokyo, these 10 shops define what is possible with the humble coffee bean.
      </p>

      <div className='bg-dark text-primary p-6 rounded-lg my-6'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineCheckCircle className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Key Insight:</span> The common thread among all top-tier shops is a devotion to <span className='font-bold'>traceability</span>. They build direct relationships with producers (often in Ethiopia) to secure unique micro-lots that no one else has.</span>
        </p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        Criteria for "World-Class"
      </h3>
      <p className='my-4'>
        To make this list, a shop must excel in three areas:
      </p>
      <ul className='my-4 list-disc ml-5 space-y-2'>
        <li><span className='font-bold'>Sourcing:</span> A commitment to high-scoring (88+ points) green coffee.</li>
        <li><span className='font-bold'>Roasting:</span> A distinct philosophy that highlights terroir over roast flavor.</li>
        <li><span className='font-bold'>Innovation:</span> Pushing the boundaries of brewing, service, or sustainability.</li>
      </ul>

      <hr className="my-8 border-gray-200" />

      {/* SHOP 1 */}
      <div className='my-8'>
        <div className='flex items-center gap-2 mb-2'>
           <span className='bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded'>#1</span>
           <span className='text-sm font-semibold text-gray-500 uppercase tracking-wide'>Oslo, Norway</span>
        </div>
        <h3 className='text-2xl font-extrabold text-dark'>Tim Wendelboe</h3>
        <p className='my-4'>
          Tim Wendelboe is widely considered the godfather of the modern "Nordic Light Roast." His eponymous shop in Grünerløkka, Oslo, is a pilgrimage site for coffee professionals. The focus here is on extreme transparency and purity of flavor.
        </p>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <p className='text-sm mb-2'><span className='font-bold'><HiOutlineStar className='inline mr-1'/> Why it matters:</span> Tim pioneered the practice of buying coffee based on soil health and paying farmers quality premiums far above Fair Trade rates.</p>
          <p className='text-sm'><span className='font-bold'><HiOutlineFire className='inline mr-1'/> The Order:</span> A flight of washed Ethiopian coffees to compare different harvest months.</p>
        </div>
      </div>

      {/* SHOP 2 */}
      <div className='my-8'>
        <div className='flex items-center gap-2 mb-2'>
           <span className='bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded'>#2</span>
           <span className='text-sm font-semibold text-gray-500 uppercase tracking-wide'>Tokyo, Japan</span>
        </div>
        <h3 className='text-2xl font-extrabold text-dark'>Koffee Mameya</h3>
        <p className='my-4'>
          Koffee Mameya is not a cafe; it is a coffee sommelier experience. Located in a minimalist cube in Omotesando, baristas wear lab coats and guide you through a "coffee matrix" of roast levels and origins. They don't roast their own beans; instead, they curate the best roasts from around the world.
        </p>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
           <p className='text-sm mb-2'><span className='font-bold'><HiOutlineStar className='inline mr-1'/> Why it matters:</span> They elevated coffee service to the level of fine wine dining, proving that curation is as valuable as roasting.</p>
        </div>
      </div>

      {/* SHOP 3 */}
      <div className='my-8'>
        <div className='flex items-center gap-2 mb-2'>
           <span className='bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded'>#3</span>
           <span className='text-sm font-semibold text-gray-500 uppercase tracking-wide'>Melbourne, Australia</span>
        </div>
        <h3 className='text-2xl font-extrabold text-dark'>Proud Mary / Aunty Peg&apos;s</h3>
        <p className='my-4'>
          Melbourne is the capital of cafe culture, and Proud Mary is its king. Their cellar door, "Aunty Peg&apos;s," functions as a dedicated coffee bar with no milk and no sugar allowed—only pure expression of the bean. They are famous for their "deluxe" coffee menu featuring rare Geshas.
        </p>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <p className='text-sm mb-2'><span className='font-bold'><HiOutlineStar className='inline mr-1'/> Why it matters:</span> They successfully sell cups of coffee for $50+, proving consumers will pay premium prices for exceptional quality and storytelling.</p>
        </div>
      </div>

      {/* SHOP 4 */}
      <div className='my-8'>
        <div className='flex items-center gap-2 mb-2'>
           <span className='bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded'>#4</span>
           <span className='text-sm font-semibold text-gray-500 uppercase tracking-wide'>Berlin, Germany</span>
        </div>
        <h3 className='text-2xl font-extrabold text-dark'>The Barn</h3>
        <p className='my-4'>
          The Barn was instrumental in bringing third-wave coffee to Germany. Known for their uncompromised quality standards (they famously refused to serve sugar or low-fat milk for years), they roast extremely light to highlight terroir.
        </p>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <p className='text-sm mb-2'><span className='font-bold'><HiOutlineStar className='inline mr-1'/> Why it matters:</span> A masterclass in branding and consistency. Their packaging and cafe aesthetics have been copied worldwide.</p>
        </div>
      </div>

       {/* SHOP 5 */}
       <div className='my-8'>
        <div className='flex items-center gap-2 mb-2'>
           <span className='bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded'>#5</span>
           <span className='text-sm font-semibold text-gray-500 uppercase tracking-wide'>Brooklyn, New York</span>
        </div>
        <h3 className='text-2xl font-extrabold text-dark'>Sey Coffee</h3>
        <p className='my-4'>
          In a city full of coffee shops, Sey stands apart for its dedication to micro-lots. Their Bushwick cafe is a light-filled sanctuary where they serve some of the cleanest, sweetest coffees in North America. They release coffees in incredibly small batches, often from single farmers.
        </p>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <p className='text-sm mb-2'><span className='font-bold'><HiOutlineStar className='inline mr-1'/> Why it matters:</span> They brought the "Nordic" philosophy to the US: ultra-light roasting that demands high-quality green beans to taste good.</p>
        </div>
      </div>

      {/* SHOP 6 */}
      <div className='my-8'>
        <div className='flex items-center gap-2 mb-2'>
           <span className='bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded'>#6</span>
           <span className='text-sm font-semibold text-gray-500 uppercase tracking-wide'>Taipei, Taiwan</span>
        </div>
        <h3 className='text-2xl font-extrabold text-dark'>Simple Kaffa</h3>
        <p className='my-4'>
          Founded by Berg Wu, a World Barista Champion, Simple Kaffa is a stunning space that blends technical perfection with mass appeal. Located near the Huashan 1914 Creative Park, it is widely cited as the best coffee shop in Asia.
        </p>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <p className='text-sm mb-2'><span className='font-bold'><HiOutlineStar className='inline mr-1'/> Why it matters:</span> Simple Kaffa demonstrates how to scale specialty coffee without losing the "champion" touch, bridging the gap between coffee geeks and general tourists.</p>
        </div>
      </div>

      {/* SHOP 7 */}
      <div className='my-8'>
        <div className='flex items-center gap-2 mb-2'>
           <span className='bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded'>#7</span>
           <span className='text-sm font-semibold text-gray-500 uppercase tracking-wide'>Canberra, Australia</span>
        </div>
        <h3 className='text-2xl font-extrabold text-dark'>Ona Coffee</h3>
        <p className='my-4'>
          Founded by Sasa Sestic (star of the documentary <em>The Coffee Man</em>), Ona Coffee is a research lab disguised as a cafe. They pioneered the practice of freezing vintage coffee beans to stop the aging process, allowing customers to taste "vintages" from years past.
        </p>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <p className='text-sm mb-2'><span className='font-bold'><HiOutlineStar className='inline mr-1'/> Why it matters:</span> Their "Project Origin" sourcing program is one of the most innovative in the world, often using Carbonic Maceration techniques borrowed from winemaking.</p>
        </div>
      </div>

      {/* SHOP 8 */}
      <div className='my-8'>
        <div className='flex items-center gap-2 mb-2'>
           <span className='bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded'>#8</span>
           <span className='text-sm font-semibold text-gray-500 uppercase tracking-wide'>Cape Town, South Africa</span>
        </div>
        <h3 className='text-2xl font-extrabold text-dark'>Truth Coffee Roasting</h3>
        <p className='my-4'>
          Often voted "The Best Coffee Shop in the World" by travel publications, Truth is famous for its immersive Steampunk aesthetic. But beyond the brass pipes and vintage uniforms, they roast exceptional coffee on a vintage Probat roaster.
        </p>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <p className='text-sm mb-2'><span className='font-bold'><HiOutlineStar className='inline mr-1'/> Why it matters:</span> Truth proves that "experience" and "atmosphere" are vital parts of the coffee business. They make specialty coffee theatrical.</p>
        </div>
      </div>

      {/* SHOP 9 */}
      <div className='my-8'>
        <div className='flex items-center gap-2 mb-2'>
           <span className='bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded'>#9</span>
           <span className='text-sm font-semibold text-gray-500 uppercase tracking-wide'>Aarhus, Denmark</span>
        </div>
        <h3 className='text-2xl font-extrabold text-dark'>La Cabra</h3>
        <p className='my-4'>
          La Cabra treats coffee like a culinary ingredient. Known for their bakery as much as their roastery, they look for "brightness" in the cup. Their approach is minimalist and modern, and they have successfully expanded to New York and Bangkok.
        </p>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <p className='text-sm mb-2'><span className='font-bold'><HiOutlineStar className='inline mr-1'/> Why it matters:</span> They mastered the "omni-roast" style—roasting beans that taste good as both espresso and filter coffee.</p>
        </div>
      </div>

      {/* SHOP 10 */}
      <div className='my-8'>
        <div className='flex items-center gap-2 mb-2'>
           <span className='bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded'>#10</span>
           <span className='text-sm font-semibold text-gray-500 uppercase tracking-wide'>Stockholm, Sweden</span>
        </div>
        <h3 className='text-2xl font-extrabold text-dark'>Drop Coffee</h3>
        <p className='my-4'>
          Led by Joanna Alm, a multi-time roasting champion, Drop Coffee focuses on sweetness and clarity. Their distinct boxy packaging and welcoming atmosphere make them a staple of the Scandinavian scene.
        </p>
        <div className='bg-gray-50 p-5 rounded-lg border border-gray-200'>
          <p className='text-sm mb-2'><span className='font-bold'><HiOutlineStar className='inline mr-1'/> Why it matters:</span> Their consistency is legendary. If you buy a bag of Drop Coffee, you know exactly what you are getting—a sweet, clean, perfectly roasted cup.</p>
        </div>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        <HiOutlineSparkles className='inline mr-2' />
        The Ethiopian Connection
      </h3>
      <p className='my-4'>
        What unites these diverse shops? Almost all of them feature <span className='font-bold'>Ethiopian Coffee</span> as a crown jewel on their menu.
      </p>

      <p className='my-4'>
        Because Ethiopia is the birthplace of coffee and offers the most genetic diversity, top roasters rely on regions like Yirgacheffe, Guji, and Sidamo to provide the floral and fruity notes that define modern specialty coffee.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-2 flex items-center gap-2'><HiOutlineLightBulb className='text-xl text-amber-500' /> For Roasters & Importers</h4>
        <p className='text-sm mb-2'>
            If you want to emulate the success of these world-class shops, sourcing is the first step. You cannot roast a bad bean into a good one.
        </p>
        <p className='text-sm'>
            At <span className='font-bold'>Ethio Coffee Export PLC</span>, we supply the same high-grade, ECX-certified green beans that fuel the top tier of the specialty market.
        </p>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-8'>
        <h4 className='font-bold text-xl mb-3'>Elevate Your Coffee Program</h4>
        <p className='my-2'>
          Ready to source green coffee that competes with the world&apos;s best? We specialize in exporting premium Ethiopian lots to the US, Europe, and Asia.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/contact-us' className='bg-primary text-dark px-6 py-3 rounded font-bold hover:bg-gray-200 transition'>
            Contact Our Export Team
          </Link>
          <Link href='/offerings' className='border-2 border-primary text-primary px-6 py-3 rounded font-bold hover:bg-primary hover:text-dark transition'>
            View Green Coffee Offerings
          </Link>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Guide:</span> This list highlights the global benchmarks for specialty coffee quality, service, and sourcing, curated for industry professionals and enthusiasts.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> · <Link href='/insights/how-to-import-ethiopian-coffee-to-usa' className='underline'>Import Guide</Link> · <Link href='/insights/ecx-and-ethiopian-coffee-export' className='underline'>Understanding ECX</Link> · <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  );
}
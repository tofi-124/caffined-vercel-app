type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'

export default function EthiopiaBirthplaceOfCoffee({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className="text-4xl font-extrabold text-dark leading-tight mb-4">{title}</h1>

      <figure>
        <figcaption className="font-inconsolata my-2">Ethiopia: the biological and cultural origin of Coffea arabica.</figcaption>

        <div className="w-full aspect-[5/3] overflow-hidden rounded-md">
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt={title}
            fill
            objectFit="cover"
            className="w-full h-full"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      </figure>

      <h2 className="text-2xl font-bold mt-6 mb-3">How Coffee Was Discovered in Ethiopia</h2>

      <p className="my-4">
        Ethiopia is the birthplace of coffee. Every Arabica coffee plant on earth traces its genetic roots to the wild-growing forests of southwestern Ethiopia. Today, Ethiopia remains the largest coffee producer in Africa and the fifth largest globally, exporting over 300,000 metric tons of green coffee annually.
      </p>

      <p className="my-4">
        The plants that made those cups possible grew in the montane rainforests of Kaffa, Bench Maji, and Illubabor. These forests hold enormous variety, with more than ten thousand distinct wild coffee types found across the landscape. That richness of forms and flavours is why scientists and botanists point to Ethiopia as the original home of <em>Coffea arabica</em>.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">A Tale of Discovery</h3>

      <p className="my-4">
        The story of Kaldi, the goat herder, lives in the memory of many cultures. Kaldi watched his goats bounce with energy after they ate bright red berries. People tasted the berries, monks used them to stay alert during long services, and a ritual began. Legends like this are as important as records because they show how coffee moved from wild fruit to human habit.
      </p>

      <p className="my-4">
        Beyond legend, careful observers documented the plant and local practices for centuries. Traders and travellers recorded beans, merchants described markets, and farmers perfected methods that brought out particular characteristics in the cup.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">From Forests to Genetics</h3>

      <p className="my-4">
        Recent genetic research supports these long-held observations. Studies show that Arabica traces back to wild Ethiopian populations and likely emerged through natural hybridization many thousands of years ago. That genetic legacy gives Ethiopian coffees a wide palette of flavours and resilience traits that matter to growers and roasters.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">How Coffee Traveled</h3>

      <p className="my-4">
        Coffee moved out of Ethiopia along trade routes. By way of Yemen, beans and the methods for preparing them spread across the Arabian Peninsula, into the Ottoman world, and on into Europe. The coffeehouse became a space for people to meet, exchange news, and argue, turning a simple beverage into a force for social change.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Ceremony, Craft, and Community</h3>

      <p className="my-4">
        In Ethiopia, the coffee ceremony blends craft and hospitality. A host roasts green beans over open heat and the smell fills a room. Beans are ground and brewed in a jebena, poured carefully into small cups, and shared. These moments are a public way of saying welcome, of marking trust, and of slowing down together.
      </p>

      <p className="my-4">
        Many families grow coffee on small plots shaded by native trees. Those systems help support biodiversity and produce the layered flavours that specialty buyers prize. Farmers often sell to local collectors, cooperatives, or exporters, and differences in processing, such as washed, natural, or honey, translate into different sensory experiences in the cup.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Tasting the Regions</h3>

      <p className="my-4">
        Regional identity shows up clearly when you cup Ethiopian coffees. Yirgacheffe can taste floral with bright citrus notes. Sidamo often offers complex fruitiness with balanced acidity. Harrar may present bold, wine-like aromatics, while Guji can deliver a soft sweetness and floral clarity. These differences make Ethiopian coffees a favorite for roasters who seek distinctive single-origin lots.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">People, Markets, and Challenges</h3>

      <p className="my-4">
        Coffee supports millions of livelihoods across Ethiopia. Most producers are smallholder farmers who rely on coffee income for household needs. At the same time, the sector faces real pressures: changing weather patterns, shifting market demands, and regulatory challenges can reduce margins and increase risk for growers.
      </p>

      <p className="my-4">
        Protecting this heritage requires practical investments. Improved processing facilities, better access to market information, support for climate-resilient practices, and fairer trading relationships all help preserve both biodiversity and the economic base that farmers depend on.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Why It Matters to You</h3>

      <p className="my-4">
        When you taste an Ethiopian coffee, you are tasting place, history, and the hands that cared for those beans. Every cup carries stories of forests, families, and markets. Seeking out traceable lots, learning about processing methods, or visiting a coffee ceremony are simple ways to connect with that story.
      </p>

      <p className="my-4">
        If you are sourcing coffee, consider asking about varietal background, how cherries were processed, and whether producers are receiving transparent prices. Those questions help sustain quality and support the people who make the coffee possible.
      </p>

      {/* FAQ SECTION */}
      <section className="mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions About Ethiopia as the Birthplace of Coffee</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Why is Ethiopia called the birthplace of coffee?</h4>
            <p className="text-sm text-gray-600">Ethiopia is the only country where Coffea arabica grows wild in its native forest habitat. Genetic research confirms that all the world's Arabica coffee traces back to Ethiopian wild populations, making it the origin point for the species that produces most of the world's coffee.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What is the legend of Kaldi and the discovery of coffee?</h4>
            <p className="text-sm text-gray-600">The Kaldi legend describes an Ethiopian goat herder who noticed his goats became unusually energetic after eating berries from a forest shrub. He brought the berries to a local monastery, where monks brewed them into a drink that helped them stay alert during prayers. While the story is likely folklore, it reflects Ethiopia's deep historical connection to coffee.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What does Ethiopian coffee taste like?</h4>
            <p className="text-sm text-gray-600">Ethiopian coffee flavors vary by region due to the country's enormous genetic diversity. Yirgacheffe coffees are known for floral and citrus notes, Sidamo for berry and wine-like complexity, Guji for tropical fruit and rich body, and Harrar for distinctive blueberry and wild character.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">What is the Ethiopian coffee ceremony?</h4>
            <p className="text-sm text-gray-600">The Ethiopian coffee ceremony is a traditional social ritual where green coffee beans are roasted, ground, and brewed in front of guests over charcoal. The ceremony typically involves three rounds of brewing and is a central part of Ethiopian hospitality, community gatherings, and daily life.</p>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <h3 className='text-2xl font-extrabold mt-10 mb-4'>Related Resources</h3>
      
      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
          <h4 className='font-bold mb-2'>Culture & Origins</h4>
          <ul className='space-y-1 text-sm'>
            <li>• <Link href="/insights/ethiopian-coffee-ceremony" className='text-blue-600 hover:underline'>Ethiopian Coffee Ceremonies: Tradition Meets Business</Link></li>
            <li>• <Link href="/insights/birthplace-of-coffee-ethiopia" className='text-blue-600 hover:underline'>The Birthplace of Coffee: Ethiopia's Rich Heritage</Link></li>
            <li>• <Link href="/insights/complete-guide-to-understanding-coffee" className='text-blue-600 hover:underline'>Complete Guide to Understanding Coffee</Link></li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-4 hover:border-amber-400 transition-colors'>
          <h4 className='font-bold mb-2'>Trade & Sourcing</h4>
          <ul className='space-y-1 text-sm'>
            <li>• <Link href="/insights/direct-trade-ethiopian-farmers" className='text-blue-600 hover:underline'>Direct Trade Partnerships: Supporting Ethiopian Farmers</Link></li>
            <li>• <Link href="/insights/how-to-cup-evaluate-ethiopian-coffee-samples" className='text-blue-600 hover:underline'>How to Cup & Evaluate Ethiopian Coffee Samples</Link></li>
            <li>• <Link href="/contact-us" className='text-blue-600 hover:underline'>Contact our team</Link></li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-gray-200" />

      <div className='border border-gray-200 rounded-lg p-4 hover:border-amber-400 transition-colors my-6'>
        <h4 className='font-bold mb-2'>Further Reading</h4>
        <ul className='space-y-1 text-sm'>
          <li>• <a href="https://ethiopian-arabica.com/articles/traceability" target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:underline'>Ethiopian Arabica: Traceability</a></li>
          <li>• <a href="https://www.britannica.com/topic/history-of-coffee" target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:underline'>Britannica: History of Coffee</a></li>
          <li>• <a href="https://www.reuters.com/science/genome-study-reveals-prehistoric-ethiopian-origins-coffee-2024-04-16/" target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:underline'>Reuters: Genome study</a></li>
          <li>• <a href="https://www.thespruceeats.com/ethiopian-coffee-culture-765829" target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:underline'>The Spruce Eats: Ethiopian coffee culture</a></li>
          <li>• <a href="https://en.wikipedia.org/wiki/Coffee_production_in_Ethiopia" target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:underline'>Wikipedia: Coffee production in Ethiopia</a></li>
          <li>• <a href="https://www.theguardian.com/global-development/2024/apr/09/coffee-how-rules-made-in-europe-put-ethiopian-farmers-at-risk" target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:underline'>The Guardian: EU rules and Ethiopian farmers</a></li>
        </ul>
      </div>

      <div className='bg-dark text-primary p-6 rounded-lg my-8'>
        <h4 className='font-bold text-xl mb-3'>Source Coffee from the Birthplace of Arabica</h4>
        <p className='mb-4'>
          Ethio Coffee Export ships traceable Ethiopian green coffee from Yirgacheffe, Sidama, Guji, Harrar, and Kaffa. Request samples or browse our current export offerings.
        </p>
        <p>
          <Link href='/offerings' className='font-bold underline'>View current offerings</Link> | <Link href='/contact-us' className='font-bold underline'>Request samples</Link>
        </p>
      </div>

      <p className="my-4 text-sm text-gray-600 italic">For sourcing, samples, or export enquiries, <Link href="/contact-us" className='text-blue-600 underline'>contact our team</Link>.</p>
    </>
  )
}

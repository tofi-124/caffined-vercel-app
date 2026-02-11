import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function WomenInEthiopianCoffeeIndustry({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        How women in Ethiopian coffee shape quality, culture, and trade from cherry to contract
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Women perform the majority of labor across Ethiopia&apos;s coffee value chain, from selective harvesting to sorting and quality control.
        </figcaption>

        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian women sorting and grading green coffee beans at a washing station'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <p className='my-4'>
        Women are responsible for an estimated 60 to 70 percent of the labor in Ethiopia&apos;s coffee sector.
        Yet their contribution rarely gets the same attention as regions, processing methods, or cupping scores.
      </p>

      <p className='my-4'>
        From planting and selective harvesting to sorting, drying, and quality control at washing stations, women are present at nearly every critical touchpoint where quality is either preserved or lost.
        Despite performing the majority of the work, they have historically faced barriers to land ownership, cooperative membership, and decision-making authority over how coffee income is spent.
      </p>

      <p className='my-4'>
        That picture is changing.
        For importers and roasters who care about traceability and social impact, understanding the role of women in Ethiopian coffee is no longer optional.
        It is a sourcing consideration.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Women on the Farm: The Labor Behind the Cup
      </h3>
      <p className='my-4'>
        In the highland coffee zones of Sidama, Yirgacheffe, and Guji, women handle tasks that directly determine final cup quality.
        Selective cherry picking, for instance, requires experienced hands that can distinguish between underripe, ripe, and overripe fruit across multiple passes through the same plot.
        This is skilled work, and in most smallholder households, it is women who perform it.
      </p>

      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>
          <span className='font-bold'>Selective harvesting:</span> Women pick ripe cherries by hand during the main harvest from October to January, often making three to five passes per plot to ensure only peak-ripeness fruit is collected
        </li>
        <li className='my-2'>
          <span className='font-bold'>Sorting and flotation:</span> At both farm level and washing stations, women remove defective and underripe cherries before processing begins
        </li>
        <li className='my-2'>
          <span className='font-bold'>Drying bed management:</span> Natural and honey processed coffees require constant turning on raised beds to achieve even drying. Women manage this process across 12 to 20 day drying cycles
        </li>
        <li className='my-2'>
          <span className='font-bold'>Seedling preparation:</span> Women prepare and tend coffee seedlings in nurseries, a task essential for replanting aging trees and maintaining farm productivity
        </li>
      </ul>

      <p className='my-4'>
        The connection between women&apos;s labor and cup quality is direct.
        A poorly sorted lot or an inconsistently dried natural will show up as defects during cupping.
        The precision women bring to these stages is one of the reasons Ethiopian coffee consistently produces some of the highest-scoring lots in the world.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        The Ceremony Connection: Women as Cultural Custodians
      </h3>
      <p className='my-4'>
        The{' '}
        <Link href='/insights/ethiopian-coffee-ceremony' className='underline font-bold'>
          Ethiopian coffee ceremony
        </Link>
        {' '}is traditionally led by women.
        The host, almost always a woman, roasts green beans over charcoal, grinds them with a mortar and pestle, and brews three rounds of coffee in a jebena (clay pot).
        This is not a performance. It is an expression of hospitality, community, and respect that has been practiced for centuries.
      </p>

      <p className='my-4'>
        What makes this relevant beyond culture is that the ceremony reflects a deeper truth about the Ethiopian coffee supply chain: women are the primary handlers of coffee at the household level.
        They roast, brew, and serve. They also clean, sort, and dry. The ceremony is the visible tradition, but the invisible labor behind every exported bag is equally shaped by women.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Barriers Women Face in the Coffee Value Chain
      </h3>
      <p className='my-4'>
        Despite their central role, women in Ethiopian coffee face structural challenges that limit their economic participation and decision-making power.
      </p>

      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>
          <span className='font-bold'>Land ownership:</span> In many rural areas, land titles are held by men. Without formal ownership, women cannot independently register with cooperatives or access credit
        </li>
        <li className='my-2'>
          <span className='font-bold'>Cooperative membership:</span> Historically, only one member per household could join a cooperative, and that member was usually the male head of household. This excluded women from voting rights, premium distributions, and training programs
        </li>
        <li className='my-2'>
          <span className='font-bold'>Access to training:</span> Quality improvement programs, agronomic training, and cupping workshops have traditionally been attended by men, even though women perform the tasks those programs aim to improve
        </li>
        <li className='my-2'>
          <span className='font-bold'>Income control:</span> In many households, coffee revenue is managed by men, even when women contributed the majority of labor to produce the harvest
        </li>
      </ul>

      <p className='my-4'>
        These are not abstract development challenges. They are supply chain realities that affect quality, consistency, and the sustainability of sourcing relationships.
        When half the workforce is under-resourced, the entire chain operates below its potential.
      </p>

      <div className='bg-amber-100 p-6 rounded-lg my-8'>
        <h4 className='font-bold text-xl mb-2'>By the Numbers</h4>
        <ul className='font-inconsolata my-2 list-disc ml-5'>
          <li className='my-2'>Women make up roughly 60 to 70% of the coffee labor force in Ethiopia</li>
          <li className='my-2'>Only about 20% of cooperative members in Ethiopia are women (though this is growing)</li>
          <li className='my-2'>Ethiopia has over 5 million smallholder coffee farming households</li>
          <li className='my-2'>Women-led households that receive direct training show measurable improvements in cherry quality and defect counts</li>
          <li className='my-2'>The International Coffee Organization (ICO) estimates women produce up to 70% of the world&apos;s coffee output globally</li>
        </ul>
        <p className='text-sm text-gray-600 mt-3 italic'>
          Figures based on data from the ICO, USAID Feed the Future program reports, and Ethiopian Coffee and Tea Authority (ECTA) records.
        </p>
      </div>

      <h3 className='text-2xl font-extrabold mt-8'>
        What Is Changing: Programs and Progress
      </h3>
      <p className='my-4'>
        The last decade has brought meaningful shifts, driven by a combination of government policy, NGO programs, cooperative reform, and buyer demand.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Joint land titling:</span> Ethiopia&apos;s land certification program has increasingly issued joint titles to married couples, giving women formal recognition as co-owners.
        In regions where joint titling has been implemented, women&apos;s participation in cooperative governance has increased measurably.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Women-only cooperatives:</span> In Yirgacheffe, Sidama, and parts of Guji, women-only cooperatives have been established, giving female farmers direct access to premium markets, training, and financial services.
        These cooperatives often produce some of the highest-graded lots in their zones because the members are already expert sorters and processors.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Targeted training:</span> Organizations including TechnoServe, USAID&apos;s Feed the Future, and the Ethiopian Coffee and Tea Authority (ECTA) have launched gender-specific training programs.
        These cover cupping skills, financial literacy, agronomic best practices, and leadership development.
      </p>

      <p className='my-4'>
        <span className='font-bold'>Fair Trade and certification premiums:</span> Cooperatives with active women&apos;s programs often allocate a portion of Fair Trade premiums specifically to women&apos;s initiatives, funding school fees, healthcare access, and microloan programs.
        For importers who source{' '}
        <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='underline font-bold'>
          certified Ethiopian coffees
        </Link>
        , this means your premium is directly linked to measurable social outcomes.
      </p>

      <p className='my-4'>
        In short, the reforms that matter most are the ones that give women formal standing: land titles, cooperative seats, training access, and a voice in how premiums are spent.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Women in Ethiopian Coffee Processing and Export
      </h3>
      <p className='my-4'>
        The role of women extends well beyond the farm.
        At washing stations across Sidama, Yirgacheffe, and Guji, women make up the majority of the sorting workforce.
        These are the workers who hand-sort parchment and green coffee on grading tables, removing defective beans that would otherwise lower the lot&apos;s cup score.
      </p>

      <p className='my-4'>
        At dry mills and export preparation facilities, women perform final quality checks before coffee is bagged for export.
        This includes visual grading, moisture testing support, and physical defect sorting against Ethiopian Coffee Authority (ECA) and ECX standards.
      </p>

      <p className='my-4'>
        On the business side, a growing number of women are taking leadership roles in Ethiopian coffee export companies, cooperative management, and quality control laboratories.
        Women are serving as Q graders, export managers, and cooperative board members, positions that were almost exclusively male a generation ago.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        Why This Matters for Importers and Roasters
      </h3>
      <p className='my-4'>
        For specialty coffee buyers, the role of women in the supply chain is not just a social responsibility talking point.
        It has direct commercial implications.
      </p>

      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>
          <span className='font-bold'>Quality consistency:</span> When women sorters and processors receive training and fair compensation, defect rates drop and lot consistency improves
        </li>
        <li className='my-2'>
          <span className='font-bold'>Traceability stories:</span> Roasters and retailers can differentiate their offerings by telling the real story of who produced the coffee. Consumers increasingly want this level of transparency
        </li>
        <li className='my-2'>
          <span className='font-bold'>Supply chain stability:</span> Investing in the people who do the work, including women, reduces turnover and strengthens long-term sourcing relationships
        </li>
        <li className='my-2'>
          <span className='font-bold'>Certification alignment:</span> Many certification bodies now include gender equity metrics. Sourcing from exporters who prioritize women&apos;s participation can help meet these requirements
        </li>
        <li className='my-2'>
          <span className='font-bold'>Consumer demand:</span> End consumers, particularly in Europe, North America, and Australia, are actively seeking products that support gender equity in agriculture
        </li>
      </ul>

      <p className='my-4'>
        The{' '}
        <Link href='/insights/direct-trade-ethiopian-farmers' className='underline font-bold'>
          direct trade model
        </Link>
        {' '}is especially relevant here.
        When buyers build direct relationships with Ethiopian producers and cooperatives, they can specify that premiums support women&apos;s programs, verify that women are included in training, and track the impact of their purchasing decisions over time.
      </p>

      <h3 className='text-2xl font-extrabold mt-8'>
        What Buyers Can Do: Practical Steps
      </h3>
      <p className='my-4'>
        If you are sourcing Ethiopian green coffee and want to support women in the supply chain, here are actions that make a real difference.
      </p>

      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>
          Ask your exporter which cooperatives or washing stations have active women&apos;s programs and request to source from them
        </li>
        <li className='my-2'>
          Specify that a portion of your premium goes to women&apos;s training or community development
        </li>
        <li className='my-2'>
          Source from women-led cooperatives when available. Several in Yirgacheffe and Sidama are producing Grade 1 lots that compete with any in the country
        </li>
        <li className='my-2'>
          Include gender equity metrics in your supplier evaluation criteria alongside quality, pricing, and logistics
        </li>
        <li className='my-2'>
          Tell the story honestly. Feature the women who grew, sorted, and prepared the coffee in your marketing. Use real names and real details when you have consent
        </li>
      </ul>

      <h3 className='text-2xl font-extrabold mt-8'>
        The Bigger Picture: Gender Equity as Quality Infrastructure
      </h3>
      <p className='my-4'>
        Ethiopian coffee already benefits from extraordinary genetic diversity, ideal growing conditions, and centuries of accumulated knowledge.
        The missing multiplier in many producing communities is full economic participation by women.
        When women own land, attend training, earn income directly, and participate in cooperative governance, the entire supply chain benefits.
      </p>

      <p className='my-4'>
        This is not a charity argument. It is a quality infrastructure argument.
        The same women who sort your Grade 1 Yirgacheffe should have a say in how premium dollars are reinvested.
        The same women who manage drying beds for 15 days straight should have access to the agronomic training that improves yields.
        The same women who lead the coffee ceremony should be recognized as the backbone of the industry they sustain.
      </p>

      <p className='my-4'>
        If your sourcing decisions already prioritize quality, traceability, and sustainability, then supporting women in the supply chain is a natural next step.
      </p>

      <div className='bg-dark text-primary p-6 rounded-lg my-8'>
        <h4 className='font-bold text-xl mb-3'>Source Ethiopian Coffee That Supports Women</h4>
        <p className='my-2'>
          Ethio Coffee works with cooperatives and washing stations that actively support women&apos;s participation across the value chain.
          If you are looking for Ethiopian green coffee sourced with gender equity in mind, we can connect you with producers and lots that align with your values.
        </p>
        <div className='flex gap-4 mt-4'>
          <Link href='/contact-us' className='underline font-bold'>CONTACT US</Link>
          <Link href='/insights' className='underline font-bold'>EXPLORE MORE INSIGHTS</Link>
        </div>
      </div>

      <h3 className='text-2xl font-extrabold mt-10 mb-4'>Related Insights</h3>
      <ul className='font-inconsolata my-4 list-disc ml-5'>
        <li className='my-2'>
          <Link href='/insights/ethiopian-coffee-ceremony' className='underline font-bold'>
            The Ethiopian Coffee Ceremony: History, Ritual, and Meaning
          </Link>
        </li>
        <li className='my-2'>
          <Link href='/insights/direct-trade-ethiopian-farmers' className='underline font-bold'>
            Direct Trade with Ethiopian Farmers: How It Works
          </Link>
        </li>
        <li className='my-2'>
          <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='underline font-bold'>
            Ethiopian Coffee Certifications: Organic, Fair Trade, and Rainforest Alliance
          </Link>
        </li>
        <li className='my-2'>
          <Link href='/insights/selective-coffee-harvesting' className='underline font-bold'>
            Selective Coffee Harvesting: Why It Matters for Quality
          </Link>
        </li>
      </ul>
    </>
  )
}

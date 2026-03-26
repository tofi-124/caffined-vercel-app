import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function ThermoplanCaritasEthiopiaCoffeeDevelopment({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>Overview of the Discussion</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Caritas Switzerland, an international humanitarian and development organization, and Thermoplan, a well-known Swiss company in the coffee equipment industry, met with Ethiopian authorities to discuss opportunities for advancing coffee development in Ethiopia.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The meeting opened with a PowerPoint presentation by Mr. Shafi Umer, Deputy Director General of the Ethiopian Coffee and Tea Authority, who outlined the current state of Ethiopian coffee production and marketing.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Ethiopian Coffee Production: Challenges and Progress</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Mr. Shafi Umer explained both traditional and modern production systems in Ethiopia. He highlighted that modern production methods are not yet widely adopted — the sector is characterized by small-scale scattered farming, which makes it difficult to gather consistent data for mechanized systems or to meet European deforestation-free regulations.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Despite these structural challenges, he noted meaningful productivity gains: average yield per hectare has grown from 7.5 quintals to 9.5 quintals, reflecting incremental improvements across the sector.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Marketing Reforms and Value Chain Shortening</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          In his presentation on the marketing side, Mr. Shafi Umer emphasized that recent reforms have significantly shortened the value chain, bringing measurable benefits — most notably, enabling farmers to export directly. This shift reduces intermediary costs and increases the share of export revenue reaching producers.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          He further indicated that the long-term strategy involves removing suppliers from the chain entirely, with the goal of further streamlining the path from farm to international buyer.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Thermoplan: Innovation and Community Investment</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Thermoplan is known globally for developing innovative products in the coffee sector, with a primary focus on the production of automatic coffee machines and securing the sustainability of coffee inputs. Beyond equipment manufacturing, the company also invests directly in coffee-producing communities, engaging at the source level to support long-term supply chain sustainability.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Caritas Switzerland: Livelihoods and the uniqueBean Project</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Caritas Switzerland focuses its work on poverty reduction and community resilience. Their activities in Ethiopia are structured around sustainable livelihoods, agricultural marketing systems, climate resilience, and community empowerment.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          To operationalize their collaboration with sector stakeholders, Caritas Switzerland is implementing the <strong>uniqueBean Project</strong> in the Harena Forest, Bale Zone. The project works to strengthen the capacity of smallholder coffee farmers by improving coffee quality, expanding market access, and introducing sustainable and climate-friendly agricultural practices.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Purpose of the Meeting</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Both parties convened to strengthen institutional ties, share progress made under the uniqueBean Project, explore further collaboration opportunities, and deepen their understanding of Ethiopia's coffee production system — including its potential and positioning within global markets.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Report by: Ashenafi Getahun
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li><Link href='/ethiopian-coffee-harar' className='text-blue-600 hover:underline'>Ethiopian Harar Coffee</Link></li>
          <li><Link href='/ethiopian-coffee-exporter' className='text-blue-600 hover:underline'>About Ethiopian Coffee Exporters</Link></li>
          <li><Link href='/offerings' className='text-blue-600 hover:underline'>View Ethiopian Coffee Offerings</Link></li>
        </ul>
      </div>

      {source && (
        <p className='text-xs text-gray-400 mt-8 italic border-t border-gray-200 pt-4'>
          Source: {source}
        </p>
      )}
    </>
  )
}

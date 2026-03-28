import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function EctmsHandoverEctaGiz({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>A Digital Milestone for Ethiopian Coffee Traceability</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Addis Ababa — The Ethiopian Coffee and Tea Authority (ECTA) officially concluded the technical handover of the Ethiopian Coffee Traceability and Management System (ECTMS), marking a transformative milestone for the country&apos;s coffee industry. Developed in partnership with GIZ, the state-of-the-art digital ecosystem is engineered to bring unprecedented transparency to the world&apos;s most celebrated coffee origin.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The handover represents a decisive shift from Ethiopia&apos;s paper-based processes to a robust, user-friendly digital infrastructure — one that directly addresses the growing demands of international markets and the increasingly stringent requirements of global sustainability regulations.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Three Core Capabilities of the ECTMS</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The ECTMS delivers three integrated functionalities designed to cover the full coffee supply chain from farm to export:
        </p>
        <ul className='list-disc pl-6 space-y-2 text-gray-700 text-sm leading-relaxed'>
          <li>
            <span className='font-semibold text-dark'>Precision Geodata:</span> A dedicated mobile application captures exact GPS coordinates from individual coffee farms, creating a reliable, farm-level geographic record of production origin.
          </li>
          <li>
            <span className='font-semibold text-dark'>Seamless Logistics Tracking:</span> Real-time documentation of goods flow across the entire supply chain ensures continuous, verifiable visibility from washing station to warehouse to export vessel.
          </li>
          <li>
            <span className='font-semibold text-dark'>Deforestation Risk Analysis:</span> Advanced mapping tools assess cultivation areas against global sustainability benchmarks, providing certified evidence that Ethiopian coffee is produced in compliance with international deforestation-free standards.
          </li>
        </ul>

        <h2 className='text-xl font-bold text-dark mt-6'>EUDR Compliance: A Strategic Technological Edge</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          As international regulations — particularly the EU Deforestation Regulation (EUDR) — continue to tighten their requirements, the ECTMS gives Ethiopia a sophisticated technological advantage in retaining and expanding its access to European markets. The EUDR requires that commodities placed on the EU market, including coffee, be fully traceable to their plot of origin and verified as deforestation-free, placing significant compliance pressure on all major coffee-exporting nations.
        </p>
        <p className='text-gray-700 text-sm leading-relaxed'>
          By digitising geodata, logistics, and deforestation risk analysis in a single integrated system, the ECTMS provides European importers with the verified, plot-level data they need to keep Ethiopian green coffee beans on EU shelves — a critical competitive differentiator as compliance deadlines approach in 2026 and 2027.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>ECTA Director General: &quot;Traceability Is the Backbone of Our Competitiveness&quot;</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          During the handover workshop, ECTA Director General H.E. Dr. Adugna Debela delivered a clear message to the industry: in the modern global coffee market, traceability carries the same strategic weight as the quality in the cup.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed italic border-l-4 border-amber-400 pl-4'>
          &quot;Trustworthy traceability is no longer optional; it is the backbone of Ethiopia&apos;s global competitiveness. We are committed to leveraging technology to enhance sustainability, ensuring better market access and, ultimately, increased revenue for our farmers. We extend our sincere gratitude to GIZ and Vulcan for their partnership in building this essential trust mechanism.&quot;
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Dr. Adugna&apos;s statement reflects a broader strategic shift: Ethiopia is not simply producing exceptional coffee — it is now investing in the data infrastructure required to prove it to the world.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Impact on Smallholder Farmers and Export Revenues</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          For the millions of smallholder farmers who form the backbone of Ethiopia&apos;s coffee economy, the ECTMS translates directly into protected livelihoods. Each farm&apos;s output is now backed by a verifiable digital record of its geographic origin and ethical footprint — securing farmers&apos; continued access to international markets in an era where buyers demand proof, not promises.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Ethiopia generates over USD 2 billion annually from coffee exports, with the sector supporting approximately 20 million people — the majority of them smallholder farmers. As compliance standards rise globally, having a trusted, operational traceability architecture firmly in place positions Ethiopia to defend its hard-won market share and unlock new premium opportunities abroad.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li>
            <Link href='/ethiopia-coffee-export-news/eu-acknowledges-tangible-progress-deforestation-rules' className='text-blue-600 hover:underline'>
              Ethiopian Coffee EUDR Compliance: EU Acknowledges Tangible Progress
            </Link>
          </li>
          <li>
            <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-blue-600 hover:underline'>
              Full EUDR Compliance Guide for Ethiopian Coffee Exporters
            </Link>
          </li>
          <li>
            <Link href='/ethiopian-green-coffee-beans' className='text-blue-600 hover:underline'>
              Ethiopian Green Coffee Beans
            </Link>
          </li>
          <li>
            <Link href='/ethiopian-coffee-exporter' className='text-blue-600 hover:underline'>
              Ethiopian Coffee Exporter
            </Link>
          </li>
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

import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function EUDeforestationProgress({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>EUDR Compliance Progress in Ethiopian Coffee</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The European Union says Ethiopia’s coffee sector is making tangible progress in meeting the EU’s deforestation-free supply chain requirements, citing advances in digital traceability systems and land registration in key coffee-producing areas.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          In a social media statement, the EU said a workshop organized by the Development Fund of Norway brought together more than 60 participants from key stakeholder institutions to assess how Ethiopia’s coffee value chain is advancing toward compliance with the EU Deforestation-free Supply Chain Regulation (EUDR).
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Digital Traceability and Land Registration</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          According to the EU Delegation to Ethiopia, increasing levels of traceability are being achieved through the digitalization of Ethiopia’s coffee value chain. The delegation also highlighted progress in the deployment of cadastre systems in coffee-producing woredas, which are critical for mapping production areas and verifying land use.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          EU Delegation Team Leader Julia Walschebauer said these developments demonstrate concrete results as Ethiopia works to ensure that coffee exported to European consumers is sustainable and traceable. However, she noted that challenges remain, particularly regarding data reliability, access to accurate maps, and the need for practical solutions to trace coffee from farm to export while protecting forests and biodiversity.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The EUDR, adopted in 2023, is a key element of the EU’s climate and environmental policy aimed at reducing global deforestation linked to consumption within the EU. The regulation requires commodities placed on the EU market, including coffee, to be deforestation-free, legally produced, and fully traceable to their plot of origin.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          While the regulation was initially scheduled to take effect at the end of 2025, the European Parliament has postponed its application by one year. Large operators will now be required to comply by December 30, 2026, while micro and small enterprises have until June 30, 2027.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Impact on Ethiopian Coffee Exports to Europe</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Ethiopia, the birthplace of Arabica coffee and Africa’s largest coffee producer, is particularly affected by the regulation. Coffee generates more than USD 2 billion annually, accounts for roughly one-third of the country’s export earnings, and supports the livelihoods of nearly 20 million people, most of them smallholder farmers.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Although Ethiopia’s shade-grown and forest-based coffee systems are generally considered environmentally sustainable, compliance with the EUDR presents technical and institutional challenges. The country’s coffee value chain is highly fragmented, involving millions of smallholders, multiple intermediaries and aggregation systems that make plot-level traceability complex.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The workshop discussions focused on addressing these challenges, including improving data accuracy, strengthening mapping and land registration, and developing cost-effective traceability solutions that do not exclude smallholder farmers from EU markets.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The EU emphasized that continued collaboration among Ethiopian institutions, development partners and the private sector will be essential to ensure compliance with the EUDR while safeguarding Ethiopia’s forests, biodiversity and vital coffee-based livelihoods.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li><Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-blue-600 hover:underline'>Full EUDR Compliance Guide for Ethiopian Coffee</Link></li>
          <li><Link href='/ethiopian-green-coffee-beans' className='text-blue-600 hover:underline'>Ethiopian Green Coffee Beans</Link></li>
          <li><Link href='/ethiopian-coffee-exporter' className='text-blue-600 hover:underline'>Ethiopian Coffee Exporter</Link></li>
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

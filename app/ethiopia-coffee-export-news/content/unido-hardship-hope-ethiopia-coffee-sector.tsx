import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function UnidoHardshipHopeEthiopiaCoffeeSector({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>From Roadside to the Coffee Bar</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Born and raised in Gondar &mdash; a city celebrated for its history and cultural heritage &mdash; Mulunesh Chekol Maru&apos;s early life was defined by hardship rather than stability. As a mother of two young children, she faced immense pressure after suddenly losing her primary source of income, and resorted to selling cabbage by the roadside to survive. Yet she clung to a lifelong dream: to work in Ethiopia&apos;s coffee sector.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>The Coffee Training Center (CTC)</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Her turning point came through the Coffee Training Center (CTC) of the Ethiopian Coffee and Tea Authority &mdash; a state-of-the-art facility implemented by <strong>UNIDO</strong> and funded by the <strong>Italian Agency for Development Cooperation (AICS)</strong>. The CTC forms part of a broader initiative to strengthen Ethiopia&apos;s coffee value chain and promote sustainable job creation across the sector.
        </p>
        <p className='text-gray-700 text-sm leading-relaxed'>
          At the CTC, Mulunesh completed an intensive programme combining theory and hands-on practice. Equipped with modern machinery and guided by expert instructors, trainees learn every stage of coffee preparation: bean selection, roasting, brewing techniques and customer service.
        </p>
        <p className='text-gray-700 text-sm leading-relaxed italic border-l-4 border-amber-400 pl-4'>
          &ldquo;The Coffee Training Center was more than just a school. It was where my dreams began to take shape. The instructors encouraged me to ask questions, practice constantly, and believe in myself. Coffee is not just a drink &mdash; it&apos;s a culture, a livelihood, and now, it&apos;s my future.&rdquo;
          <span className='block mt-1 not-italic text-gray-500'>— Mulunesh Chekol Maru</span>
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Empowering Women in Ethiopian Coffee</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Within two months of completing her training, Mulunesh secured employment with a leading Ethiopian coffee company known for its quality and innovation. Today, she supports her children, sends them to school, and lives with renewed dignity and confidence. In doing so, she has challenged the widespread perception that barista work is exclusively a man&apos;s profession, inspiring other women in her community to pursue careers in the coffee industry.
        </p>
        <p className='text-gray-700 text-sm leading-relaxed italic border-l-4 border-amber-400 pl-4'>
          &ldquo;Life can be full of difficulties. But it can also be full of hope. My dream has come true &mdash; and I am just getting started. Long live coffee, and long live empowered women.&rdquo;
          <span className='block mt-1 not-italic text-gray-500'>— Mulunesh Chekol Maru</span>
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>A Model for Inclusive Growth</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Mulunesh&apos;s story illustrates the transformative power of targeted skills development and inclusive economic opportunity. In Ethiopia, coffee is more than a crop &mdash; it is a source of national identity, pride and livelihood. By empowering women to participate fully in the sector, programmes such as the Coffee Training Center are helping to shape a more equitable and prosperous future for Ethiopian coffee exports.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li><Link href='/ethiopia-coffee-export-news/italian-delegation-visits-coffee-training-center' className='text-blue-600 hover:underline'>Italian Delegation Visits Ethiopian Coffee Training Center</Link></li>
          <li><Link href='/ethiopia-coffee-export-news/technologies-coffee-training-donated' className='text-blue-600 hover:underline'>Technologies for Coffee Training Services Donated</Link></li>
          <li><Link href='/ethiopia-coffee-export-news/coffee-interpretation-center-inauguration' className='text-blue-600 hover:underline'>Coffee Interpretation Center Inaugurated</Link></li>
          <li><Link href='/ethiopian-coffee-exporter' className='text-blue-600 hover:underline'>Ethiopian Coffee Exporter</Link></li>
        </ul>
      </div>

      {source && (
        <p className='text-xs text-gray-400 mt-8 italic border-t border-gray-200 pt-4'>
          Source:{' '}
          <a
            href='https://www.unido.org/stories/hardship-hope-ethiopias-coffee-sector'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline'
          >
            {source}
          </a>
        </p>
      )}
    </>
  )
}

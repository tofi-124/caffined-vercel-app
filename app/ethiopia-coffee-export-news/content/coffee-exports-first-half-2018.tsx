type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function CoffeeExportsFirstHalf2018({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The Ethiopian Coffee and Tea Authority announced that it has earned over $1.3 billion from coffee exports in the first six months of 2018 E.C. According to the Authority’s Director General, Dr. Shafi Omar, special attention is being paid to further enhance the efficiency of the coffee sector.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          He cited several strategies driving the results, including increasing productivity and quality, expanding market reach, and implementing digitalization and modern practices. The activities carried out on production volume and quality have increased global demand for Ethiopian coffee; the number of destination countries has increased to 84, and promotional activities—especially in East Asian markets—are proving effective.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          In addition to making farmers technology users, the entire coffee marketing process is being modernized with digital technology. A digital tracking system was launched to record where each coffee product originated, which warehouse it entered, and who sent it.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Ato Shafi indicated that the authority is working to earn three billion dollars by exporting a total of 600,000 tons of coffee in the fiscal year. He reported that in the last six months, 200,000 tons were exported, earning $1.345 billion.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          It is known that Ethiopia exported 469,000 tons of coffee in the 2017 fiscal year, earning $2.65 billion.
        </p>
      </div>

      {source && (
        <p className='text-xs text-gray-400 mt-8 italic border-t border-gray-200 pt-4'>
          Source: {source}
        </p>
      )}
    </>
  )
}

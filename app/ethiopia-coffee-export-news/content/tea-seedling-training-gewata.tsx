type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function TeaSeedlingTrainingGewata({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <p className='text-gray-700 text-sm leading-relaxed'>
          It was stated that the Rural Transformation Agenda should be made effective by strengthening the activities of the Tea Development Initiative.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The Southwestern Ethiopian People's Regional State Government Coffee, Tea and Spices Authority provided training to farmers and agricultural experts at the Boginda Tea Seedling Preparation Station in Gewata Woreda, Kafa Zone. The training aimed to create awareness on acclimatizing prepared tea seedlings to the outside air before planting, caring for them, and transporting them to farmers' fields after acclimatization — covering field preparation, planting and harvesting.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Practical training was given by Ato Gadisa Tesfaye, a tea cultivation expert in Weshwush. During the sessions, trainers highlighted that properly acclimatizing seedlings can prevent seedling death, and that taking appropriate inputs and precautions plays a significant role in productivity.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The Regional Coffee, Tea and Spices Authority Director General, Ato Asrat Mekuria, said that to realize rural transformation it is necessary to identify local potential and convert it into results — producing goods that are not only consumed locally but also supplied to central and foreign markets in large quantities and with quality. He emphasized the Tea Leaf Initiative launched in the region and urged using the favorable climate, rainfall distribution and suitable land in the zone appropriately.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          He added that the government is paying attention to and supporting tea cultivation similarly to coffee cultivation, and that the process requires patient, sustained hard work to achieve results. The Deputy Director General of the Regional Coffee, Tea and Spices Authority, Ato Belay Kojab, noted that the selected field must be suitable for the industry and that coordinated cultivation should benefit farmers.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Trainers said the new initiative will fill existing awareness and skill gaps. In his welcoming message, the Chief Administrator of Gewata Woreda, Ato Argaw Haile, thanked the Regional Agriculture Bureau for supporting the initiative. The training was attended by the Deputy Director of the Regional Coffee, Tea and Spices Authority, Ato Belay Kojab, kebele chief administrators, agricultural experts, nursery coordinators and stakeholders from eight kebeles where planting will take place.
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

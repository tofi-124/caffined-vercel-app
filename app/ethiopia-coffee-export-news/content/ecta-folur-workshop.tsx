type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function EctaFolurWorkshop2026({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Bishoftu, Ethiopia — In a significant move toward modernizing Ethiopia’s most vital commodity sector, a high-level consultative workshop was held on January 1, 2026, at the Bin International Hotel in Bishoftu to review critical research proposals aimed at transforming the coffee value chain.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The workshop, organized by the Ethiopian Coffee and Tea Authority (ECTA) under the Food Systems, Land Use and Restoration (FOLUR) Ethiopia project, brought together professionals from ECTA, the Agricultural Transformation Institute (ATI), and the Jimma Agricultural Research Centre (JARC). Discussions focused on climate change risk, gender roles in the value chain, and assessment of production technologies.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The Guest of Honor, Mr. Tagay Nuru, Deputy Director General of ECTA, opened the workshop and emphasized the importance of harvesting constructive inputs from diverse stakeholders to refine upcoming full-scale research. Presentations included an overview by Dr. Zerihun Kebebew, National Coffee Platform Coordinator for the UNDP FOLUR-Ethiopia project.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Organizers noted that while initial budget releases caused some delays, technical teams have continued advancing essential proposals. Participants provided rigorous feedback to align the proposals with ECTA’s strategic directions and international sustainability standards.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Mr. Tagay directed that identified gaps be addressed immediately and stressed the need to complete the research within a shortened timeframe. The workshop marks a decisive step toward harmonizing coffee production with environmental conservation and improving resilience against climate and market shifts.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Reported by: Tesfu Alemayehu
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

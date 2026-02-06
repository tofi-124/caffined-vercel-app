type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function AfricanCoffeeWeek2026AddisAbaba({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <p className='text-gray-700 text-sm leading-relaxed'>
          ADDIS ABABA, Ethiopia – The third African Coffee Week and Inter-African Coffee Organization (IACO) meetings have officially opened in the Skylight Hotel here in Addis Ababa today. This High-Level Policy Forum is being held under the theme: &quot;Advancing Climate Resilience &amp; the Transformation of the African Coffee Sector&quot; which is Organized by the Inter-African Coffee Organization (IACO)—the African Union&apos;s specialized agency for coffee—in collaboration with UNIDO.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          This year&apos;s event is the third consecutive partnership between the African Fine Coffees Association (AFCA) and IACO, designed to bring together ministers, ambassadors, producers, policymakers, researchers, and global traders to strengthen the continent&apos;s coffee value chain.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          During an opening session, Dr. Meles Mekonnen, State Minister of MoA stated that, the future of coffee is African, but that future will not build itself. It requires bold leadership, coordinated policies, public private partnerships and targeted investment. Let us leave this Forum not with declarations, but with commitments, not with promises, but with partnerships. Ethiopia stands ready to work with IACO-AU, Member States, AFCA, and all stakeholders to turn vision into action. Together, we can build a coffee sector that is climate-resilient, economically vibrant, socially inclusive, and globally competitive.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Ato Shafi Oumer, Deputy Director General of the Ethiopian Coffee and Tea Authority in his part said that, As Ethiopia is the birthplace of coffee, this commodity is far more than an economic crop, it is a cultural symbol and a pillar of the nation&apos;s economy. According to him, Investment in the African coffee industry is necessary to maximize the benefits of the sector. Value addition is also needed to create more opportunities for African coffee in the international market. This will help to create job opportunities for many unemployed Africans. African countries should work together for this. Forums involving such leaders will create the capacity of coffee-producing countries to address the challenges encounter the sector and seize the opportunities that exist.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Moreover, he added that, the need for massive transformation of African coffee sector, it needs a unified approach where all the stakeholders are united under one platform and work together to maximize the benefits of this untapped resource and invest in the African coffee industry to support local farmers&apos; livelihoods. IACO&apos;s collective commitment has also a crucial step to bring the growth and transformation of Africa&apos;s coffee sector.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The High-Level Policy Forum is anchored in the ACT Programme (Advancing Climate-Resilience and Transformation of the African Coffee Sector), a continental framework structured around five key pillars: Climate resilience, Value addition and industrial transformation, Compliance with international market standards, Research, innovation, and knowledge sharing, Social inclusion and sustainable livelihoods. Panel discussions are also part of this great event. In Day One discussions focused on five outcome-oriented policy panels, each aimed at producing actionable recommendations and investment pathways.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed italic'>
          Sahlemariam G/medhin Reported.
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

import React from 'react'

const TopMessage = () => {
  const text = 'Curated Ethiopian Specialty Coffee | Single-Origin, Fully Traceable | Sourced Directly from Origin | Professional Export Partners'

  return (
    <div className='p-2 text-white bg-accent overflow-hidden'>
      <div className='animate-marquee whitespace-nowrap will-change-transform'>
        {text}
      </div>
    </div>
  )
}

export default TopMessage
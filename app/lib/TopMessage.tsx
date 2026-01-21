import React from 'react'

const TopMessage = () => {
  const text = 'DIRECT FROM ETHIOPIAN FARMS | Premium Traceable Green Coffee for Roasters & Cafés | 2025/2026 Harvest Now Available | Request Free Samples Today'

  return (
    <div className='p-2 text-white bg-accent overflow-hidden'>
      <div className='animate-marquee whitespace-nowrap will-change-transform'>
        {text}
      </div>
    </div>
  )
}

export default TopMessage
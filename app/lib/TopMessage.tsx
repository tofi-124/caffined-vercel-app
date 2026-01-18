import React from 'react'

const TopMessage = () => {
  const text = 'FARMER-FIRST ETHIOPIAN COFFEE 🫘 Empowering Growers, Delivering Excellence.  Traceable Micro-lots | 2025/2026 Harvest Samples Available ☕'

  return (
    <div className='p-2 text-primary bg-dark overflow-hidden'>
      <div className='animate-marquee whitespace-nowrap will-change-transform'>
        {text}
      </div>
    </div>
  )
}

export default TopMessage
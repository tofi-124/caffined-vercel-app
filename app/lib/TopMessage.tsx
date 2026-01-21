import React from 'react'

const TopMessage = () => {
  const text = 'FARMER-FIRST ETHIOPIAN COFFEE 🫘 Empowering Growers, Delivering Excellence.  Traceable Micro-lots | 2025/2026 Harvest Samples Available ☕ | Free Samples Available For Qualified Wholesale Buyers, Roasters and Cafe Owners'

  return (
    <div className='p-2 text-white bg-accent overflow-hidden'>
      <div className='animate-marquee whitespace-nowrap will-change-transform'>
        {text}
      </div>
    </div>
  )
}

export default TopMessage
import React from 'react'

const TopMessage = () => {
  const text = 'FREE SHIPPING ON ORDERS OVER $75 CAD  •  Fresh Roasted Ethiopian Coffee  •  Ships from Toronto  •  100% Arabica Beans'

  return (
    <div className='p-2 text-white bg-accent overflow-hidden'>
      <div className='animate-marquee whitespace-nowrap will-change-transform'>
        {text}
      </div>
    </div>
  )
}

export default TopMessage
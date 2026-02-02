import React from 'react'

const TopMessage = () => {
  const messages = [
    'Curated Ethiopian Specialty Coffee',
    'Single-Origin, Fully Traceable',
    'Sourced Directly from Origin',
    'Professional Export Partners'
  ]

  return (
    <div className='py-2.5 bg-dark text-white overflow-hidden'>
      <div className='animate-marquee whitespace-nowrap will-change-transform flex items-center gap-8'>
        {messages.map((msg, index) => (
          <span key={index} className='flex items-center gap-8'>
            <span className='text-sm font-medium tracking-wide'>{msg}</span>
            {index < messages.length - 1 && (
              <span className='w-1.5 h-1.5 rounded-full bg-accent' />
            )}
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        <span className='w-1.5 h-1.5 rounded-full bg-accent' />
        {messages.map((msg, index) => (
          <span key={`dup-${index}`} className='flex items-center gap-8'>
            <span className='text-sm font-medium tracking-wide'>{msg}</span>
            {index < messages.length - 1 && (
              <span className='w-1.5 h-1.5 rounded-full bg-accent' />
            )}
          </span>
        ))}
      </div>
    </div>
  )
}

export default TopMessage
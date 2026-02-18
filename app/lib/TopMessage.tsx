'use client'

import React, { useState, useEffect, useCallback } from 'react'

const messages = [
  'Curated Ethiopian Specialty Coffee',
  'Single-Origin, Fully Traceable',
  'Sourced Directly from Origin',
  'Professional Export Partners',
]

const INTERVAL = 4000
const FADE_DURATION = 500

const TopMessage = () => {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  const cycle = useCallback(() => {
    setVisible(false)
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % messages.length)
      setVisible(true)
    }, FADE_DURATION)
  }, [])

  useEffect(() => {
    // Respect reduced-motion preference
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return

    const timer = setInterval(cycle, INTERVAL)
    return () => clearInterval(timer)
  }, [cycle])

  return (
    <div className='py-2.5 bg-dark text-white' role='status' aria-live='polite' aria-atomic='true'>
      <div className='flex items-center justify-center min-h-[1.25rem]'>
        <span
          className={`text-sm font-medium tracking-wide transition-opacity ease-in-out ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDuration: `${FADE_DURATION}ms` }}
        >
          {messages[index]}
        </span>
      </div>
    </div>
  )
}

export default TopMessage
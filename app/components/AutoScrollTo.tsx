"use client"

import { useEffect } from 'react'

type Props = {
  targetId: string
  headerOffset?: number
  delayMs?: number
}

const AutoScrollTo = ({ targetId, headerOffset = 96, delayMs = 300 }: Props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const el = document.getElementById(targetId)
      if (!el) return

      const y = el.getBoundingClientRect().top + window.scrollY - headerOffset
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' })
    }, delayMs)

    return () => clearTimeout(timer)
  }, [targetId, headerOffset, delayMs])

  return null
}

export default AutoScrollTo

"use client"
import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const R2_BASE = process.env.NEXT_PUBLIC_R2_BASE_URL || 'https://pub-a50856304cf24e0c890889f05812d10b.r2.dev'
const DESKTOP_VIDEO = `${R2_BASE}/ethiopianbeans.mp4`
const MOBILE_VIDEO = `${R2_BASE}/ethiopianbeans-mobile.mp4`

function getInitialVideoSrc() {
  if (typeof window === 'undefined') return DESKTOP_VIDEO
  return window.innerWidth < 768 ? MOBILE_VIDEO : DESKTOP_VIDEO
}

const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [videoSrc] = useState(getInitialVideoSrc)
  const isPlayingRef = useRef(false)
  const retryCountRef = useRef(0)
  const maxRetries = 3

  const attemptPlay = useCallback(() => {
    const video = videoRef.current
    if (!video || isPlayingRef.current) return

    video.muted = true
    video.playsInline = true

    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          isPlayingRef.current = true
          setIsPlaying(true)
        })
        .catch(() => {
          if (retryCountRef.current < maxRetries && !isPlayingRef.current) {
            retryCountRef.current++
            setTimeout(() => attemptPlay(), 800 * retryCountRef.current)
          }
        })
    }
  }, [])

  // Listen for video becoming ready + initial play (single effect)
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onReady = () => attemptPlay()
    video.addEventListener('canplay', onReady)

    // Initial play attempt — no artificial delay
    attemptPlay()

    return () => video.removeEventListener('canplay', onReady)
  }, [attemptPlay])

  // Visibility change - resume if paused
  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === 'visible' && videoRef.current?.paused) {
        attemptPlay()
      }
    }
    document.addEventListener('visibilitychange', handleVisibility)
    return () => document.removeEventListener('visibilitychange', handleVisibility)
  }, [attemptPlay])

  // iOS Safari fallback: user interaction within the hero triggers play
  useEffect(() => {
    const container = videoRef.current?.parentElement
    if (!container) return

    const handleInteraction = () => attemptPlay()

    container.addEventListener('touchstart', handleInteraction, { once: true, passive: true })
    container.addEventListener('click', handleInteraction, { once: true })

    return () => {
      container.removeEventListener('touchstart', handleInteraction)
      container.removeEventListener('click', handleInteraction)
    }
  }, [attemptPlay])

  return (
    <>
      {/* Fallback image — always in DOM for stable LCP, hidden via CSS when video plays */}
      <Image
        src="/images/common/hero-section-background.webp"
        alt="Ethiopian coffee beans background"
        fill
        priority
        sizes="100vw"
        quality={70}
        className={`object-cover object-center transition-opacity duration-500 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
      />
      <video
        ref={videoRef}
        muted
        playsInline
        loop
        autoPlay
        preload="none"
        className={`hero-video absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
      >
        <source src={videoSrc} type="video/mp4" />
        Background video of Ethiopian coffee beans
      </video>
    </>
  )
}

export default HeroVideo

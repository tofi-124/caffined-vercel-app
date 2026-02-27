"use client"
import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const R2_BASE = 'https://pub-a50856304cf24e0c890889f05812d10b.r2.dev'
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
  const retryCountRef = useRef(0)
  const maxRetries = 6

  const attemptPlay = useCallback(() => {
    const video = videoRef.current
    if (!video || isPlaying) return

    video.muted = true
    video.defaultMuted = true
    video.playsInline = true
    video.setAttribute('playsinline', '')
    video.setAttribute('webkit-playsinline', '')
    video.setAttribute('muted', '')
    video.setAttribute('autoplay', '')

    if (video.readyState < 2) {
      video.load()
    }

    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => {
          if (retryCountRef.current < maxRetries) {
            retryCountRef.current++
            setTimeout(() => attemptPlay(), 500 * retryCountRef.current)
          }
        })
    }
  }, [isPlaying])

  // Initial play attempt after mount
  useEffect(() => {
    const timer = setTimeout(() => attemptPlay(), 100)
    return () => clearTimeout(timer)
  }, [attemptPlay])

  // Listen for video becoming ready (crucial for iOS Safari)
  useEffect(() => {
    const video = videoRef.current
    if (!video || isPlaying) return

    const onCanPlay = () => attemptPlay()
    const onLoadedData = () => attemptPlay()

    video.addEventListener('canplay', onCanPlay)
    video.addEventListener('loadeddata', onLoadedData)

    return () => {
      video.removeEventListener('canplay', onCanPlay)
      video.removeEventListener('loadeddata', onLoadedData)
    }
  }, [attemptPlay, isPlaying])

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
  // Scoped to the container so taps on nav/cart/menu aren't swallowed
  useEffect(() => {
    if (isPlaying) return
    const container = videoRef.current?.parentElement
    if (!container) return

    const handleInteraction = () => {
      attemptPlay()
    }

    container.addEventListener('touchstart', handleInteraction, { once: true, passive: true })
    container.addEventListener('click', handleInteraction, { once: true })
    document.addEventListener('scroll', handleInteraction, { once: true, passive: true })

    return () => {
      container.removeEventListener('touchstart', handleInteraction)
      container.removeEventListener('click', handleInteraction)
      document.removeEventListener('scroll', handleInteraction)
    }
  }, [attemptPlay, isPlaying])

  // IntersectionObserver - play when in view (helps iOS)
  useEffect(() => {
    const video = videoRef.current
    if (!video || isPlaying) return

    if (typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) attemptPlay()
        })
      },
      { threshold: 0.1 }
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [attemptPlay, isPlaying])

  return (
    <>
      {/* Fallback image shown until video plays */}
      {!isPlaying && (
        <Image
          src="/images/common/hero-section-background.webp"
          alt="Ethiopian coffee beans background"
          fill
          priority
          sizes="100vw"
          quality={70}
          className="object-cover object-center"
        />
      )}
      <video
        ref={videoRef}
        muted
        playsInline
        loop
        autoPlay
        preload="auto"
        className={`hero-video absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </>
  )
}

export default HeroVideo

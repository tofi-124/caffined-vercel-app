"use client"
import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const R2_BASE = 'https://pub-a50856304cf24e0c890889f05812d10b.r2.dev'
const DESKTOP_VIDEO = `${R2_BASE}/ethiopianbeans.mp4`
const MOBILE_VIDEO = `${R2_BASE}/ethiopianbeans-mobile.mp4`

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [videoSrc, setVideoSrc] = useState<string | null>(null)
  const retryCountRef = useRef(0)
  const maxRetries = 6

  // Pick video source based on screen width
  useEffect(() => {
    const isMobile = window.innerWidth < 768
    setVideoSrc(isMobile ? MOBILE_VIDEO : DESKTOP_VIDEO)
  }, [])

  const attemptPlay = useCallback(() => {
    const video = videoRef.current
    if (!video || isPlaying) return

    // Ensure attributes are set every time
    video.muted = true
    video.defaultMuted = true
    video.playsInline = true
    video.setAttribute('playsinline', '')
    video.setAttribute('webkit-playsinline', '')
    video.setAttribute('muted', '')
    video.setAttribute('autoplay', '')

    // Force load if not ready
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

  // Visibility change — resume if paused
  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === 'visible' && videoRef.current?.paused) {
        attemptPlay()
      }
    }
    document.addEventListener('visibilitychange', handleVisibility)
    return () => document.removeEventListener('visibilitychange', handleVisibility)
  }, [attemptPlay])

  // iOS Safari fallback: any user interaction triggers play
  useEffect(() => {
    if (isPlaying) return

    const handleInteraction = () => {
      attemptPlay()
    }

    document.addEventListener('touchstart', handleInteraction, { once: true, passive: true })
    document.addEventListener('click', handleInteraction, { once: true })
    document.addEventListener('scroll', handleInteraction, { once: true, passive: true })

    return () => {
      document.removeEventListener('touchstart', handleInteraction)
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('scroll', handleInteraction)
    }
  }, [attemptPlay, isPlaying])

  // IntersectionObserver — play when in view (helps iOS)
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
    <div className="video-container w-full bg-dark relative">
      {/* Fallback image shown until video plays */}
      {!isPlaying && (
        <Image
          src="/images/cover.png"
          alt="Ethiopian coffee farms and processing in the highlands - video preview"
          fill
          className="object-cover"
          loading="lazy"
        />
      )}
      <video
        ref={videoRef}
        muted
        playsInline
        loop
        autoPlay
        preload="auto"
        className={`w-full h-auto bg-dark transition-opacity duration-700 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
      >
        {videoSrc && <source src={videoSrc} type="video/mp4" />}
      </video>
    </div>
  )
}

export default VideoPlayer

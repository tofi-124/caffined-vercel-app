"use client"
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [hasCheckedDevice, setHasCheckedDevice] = useState(false);
  const [playAttempts, setPlayAttempts] = useState(0);

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobile = /iphone|ipad|ipod|android|blackberry|windows phone|opera mini|silk/i.test(userAgent);
      const iOS = /iphone|ipad|ipod/i.test(userAgent);
      setIsMobile(mobile);
      setIsIOS(iOS);
      setHasCheckedDevice(true);
    };
    
    checkDevice();
  }, []);

  const attemptPlay = useCallback((options?: { fromUserGesture?: boolean }) => {
    if (videoRef.current) {
      const fromUserGesture = options?.fromUserGesture === true;

      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      videoRef.current.playsInline = true;
      videoRef.current.setAttribute('playsinline', '');
      videoRef.current.setAttribute('webkit-playsinline', '');
      videoRef.current.setAttribute('muted', '');
      videoRef.current.setAttribute('autoplay', '');
      
      const runPlay = () => {
        const playPromise = videoRef.current?.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // autoplay successful
            })
            .catch(e => {

              if (isIOS && playAttempts < 5) {
                setTimeout(() => {
                  setPlayAttempts(prev => prev + 1);
                  attemptPlay();
                }, 800 * (playAttempts + 1));
              }
            });
        }
      };

      if (fromUserGesture) {
        runPlay();
      } else {
        setTimeout(runPlay, 100);
      }
    }
  }, [isIOS, playAttempts]);
  
  useEffect(() => {
    if (hasCheckedDevice && videoRef.current) {
      attemptPlay();
    }
  }, [attemptPlay, hasCheckedDevice]);
  
  useEffect(() => {
    if (!isIOS) return;
    
    const handlePageFocus = () => {
      if (videoRef.current && document.hasFocus()) {
        attemptPlay();
      }
    };
    
    const enableAudioContext = () => {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContext) {
        const audioCtx = new AudioContext();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        gainNode.gain.value = 0;
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.start(0);
        oscillator.stop(0.001);
      }
      
      attemptPlay({ fromUserGesture: true });
    };
    
    window.addEventListener('focus', handlePageFocus);
    window.addEventListener('pageshow', handlePageFocus);
    document.addEventListener('touchend', enableAudioContext, { once: true, passive: true });
    
    return () => {
      window.removeEventListener('focus', handlePageFocus);
      window.removeEventListener('pageshow', handlePageFocus);
      document.removeEventListener('touchend', enableAudioContext);
    };
  }, [attemptPlay, isIOS, hasCheckedDevice]);
  
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && videoRef.current) {
        attemptPlay();
      }
    };
    
    const handleUserInteraction = () => {
      if (videoRef.current) {
        attemptPlay({ fromUserGesture: true });
      }
    };

    const handleVideoCanPlay = () => {
      if (videoRef.current) {
        attemptPlay();
      }
    };
    
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && videoRef.current) {
            attemptPlay();
          }
        });
      }, { threshold: 0.1 });

      const videoEl = videoRef.current;
      if (videoEl) observer.observe(videoEl);
      
      return () => {
        if (videoEl) observer.unobserve(videoEl);
      };
    }
    
    const videoEl = videoRef.current;
    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("touchstart", handleUserInteraction, { once: true, passive: true });
    document.addEventListener("click", handleUserInteraction, { once: true });
    document.addEventListener("scroll", handleUserInteraction, { once: true, passive: true });
    videoEl?.addEventListener("canplay", handleVideoCanPlay);
    
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("touchstart", handleUserInteraction);
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("scroll", handleUserInteraction);
      videoEl?.removeEventListener("canplay", handleVideoCanPlay);
    };
  }, [attemptPlay, hasCheckedDevice]);

  if (!videoLoaded) {
    return (
      <div className="video-container w-full bg-dark relative" style={{ aspectRatio: '16/9', maxHeight: '650px' }}>
        <Image
          src="/images/cover.png"
          alt="Ethiopian coffee farms and processing in the highlands - video preview"
          fill
          className="object-cover"
          loading="lazy"
        />
        <button
          aria-label="Play video about Ethiopian coffee production"
          onClick={() => {
            setVideoLoaded(true);
            setTimeout(() => attemptPlay({ fromUserGesture: true }), 80);
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-black/60 flex items-center justify-center text-white shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="video-container w-full bg-dark">
      <video
        ref={videoRef}
        muted
        playsInline
        loop
        preload="metadata"
        className="w-full h-auto bg-dark"
      >
        <source src="/videos/ethio-coffee.mp4" type="video/mp4" />
        <source src="/videos/ethio-coffee.webm" type="video/webm" />
      </video>
    </div>
  );
}

export default VideoPlayer

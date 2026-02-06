"use client"
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HeadLine from '../lib/Headline'

const headlines = [
  {
    title: 'ROOTED IN ORIGIN',
    items: [
      'Born from the highlands where coffee first grew wild centuries ago',
      'Direct partnerships with Sidama, Guji, and Yirgacheffe farming communities',
      'Family relationships spanning generations built on trust and transparency',
      'Every lot traced back to its point of origin.'
    ]
  },
  {
    title: 'IDENTITY PRESERVED',
    items: [
      'Heirloom varietals cultivated nowhere else on earth',
      'Micro-region character preserved through careful processing and handling',
      'Generational relationships with smallholders and trusted cooperatives',
      'Sample-to-bag consistency ensuring cup profiles match your expectations'
    ]
  },
  {
    title: 'EXPORT-READY AUTHENTICITY',
    items: [
      'Fresh, traceable coffees from Sidama, Guji, and Yirgacheffe year-round',
      'Rigorous quality control from washing station to export container',
      'Professional documentation and flexible shipping (FOB Djibouti or CIF)',
      'Moisture-safe packaging preserving origin character in transit'
    ]
  }
]

const CoffeeDesc = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [hasCheckedDevice, setHasCheckedDevice] = useState(false);
  const [playAttempts, setPlayAttempts] = useState(0);

  useEffect(() => {
    // Check if the device is mobile and specifically iOS
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

      // iOS requires both properties to be set explicitly
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
              console.log("Video autoplay successful");
            })
            .catch(e => {
              console.log("Video autoplay attempt failed:", e);

              // Special handling for iOS
              if (isIOS && playAttempts < 5) {
                // iOS often needs multiple attempts with increasing delays
                setTimeout(() => {
                  setPlayAttempts(prev => prev + 1);
                  attemptPlay();
                }, 800 * (playAttempts + 1));
              }
            });
        }
      };

      // If we're inside a user gesture (touch/click), keep play() synchronous.
      if (fromUserGesture) {
        runPlay();
      } else {
        // Small delay can help initial page-load timing.
        setTimeout(runPlay, 100);
      }
    }
  }, [isIOS, playAttempts]);
  
  // Initial play attempt when component mounts
  useEffect(() => {
    if (hasCheckedDevice && videoRef.current) {
      attemptPlay();
    }
  }, [attemptPlay, hasCheckedDevice]);
  
  // iOS-specific event handling
  useEffect(() => {
    if (!isIOS) return;
    
    // iOS specific: try playing again when page gets focus
    const handlePageFocus = () => {
      if (videoRef.current && document.hasFocus()) {
        attemptPlay();
      }
    };
    
    // Create silent audio context to "warm up" iOS audio
    const enableAudioContext = () => {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContext) {
        const audioCtx = new AudioContext();
        // Create and immediately play+stop a silent oscillator
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        gainNode.gain.value = 0; // silent
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.start(0);
        oscillator.stop(0.001);
      }
      
      // Now try to play the video again
      attemptPlay({ fromUserGesture: true });
    };
    
    // Add iOS-specific event listeners
    window.addEventListener('focus', handlePageFocus);
    window.addEventListener('pageshow', handlePageFocus);
    
    // These events help "warm up" the audio context on iOS
    document.addEventListener('touchend', enableAudioContext, { once: true, passive: true });
    
    return () => {
      window.removeEventListener('focus', handlePageFocus);
      window.removeEventListener('pageshow', handlePageFocus);
      document.removeEventListener('touchend', enableAudioContext);
    };
  }, [attemptPlay, isIOS, hasCheckedDevice]);
  
  // General interaction-based play attempts
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
    
    // IntersectionObserver to play when video is visible
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
      
      // Clean up observer
      return () => {
        if (videoEl) observer.unobserve(videoEl);
      };
    }
    
    // Add multiple event listeners for different user interactions
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

  return (
    <section ref={sectionRef} id='coffee-desc' className='flex flex-col items-center py-32 bg-dark text-primary'>
      <div id="container" className='mb-20 lg:px-72'>
        <h2 className='text-6xl leading-tight font-bold text-center'>
          THE ETHIOPIAN DIFFERENCE
        </h2>
        <p className='text-left m-4'>
          Ethiopian coffee is celebrated for its vibrant floral and fruity profiles, but the true distinction lies in the people behind the harvest. In the same high-altitude regions where coffee has been a way of life for generations, farmers transform meticulous picking and processing into a cup that is unmistakably "origin." Our work begins at the source: built on deep-rooted relationships, unwavering consistency, and a profound respect for the craft.
          <br />
          <br />
          Learn about Ethiopian coffee origins: <Link href="/insights/guide-ethiopian-coffee-origins" className='underline'>Coffee Regions</Link>
        </p>
      </div>

      {/* Poster + play-button: only load video sources after user clicks */}
      {!videoLoaded ? (
        <div className="video-container w-full bg-dark relative">
          <Image
            src="/images/cover.png"
            alt="Ethiopia coffee cover"
            className="w-full h-auto"
            loading="lazy"
          />

          <button
            aria-label="Play video"
            onClick={() => {
              setVideoLoaded(true);
              // attempt play after mounting video element (user gesture)
              setTimeout(() => attemptPlay({ fromUserGesture: true }), 80);
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-black/60 flex items-center justify-center text-white shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      ) : (
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
      )}
       
      <div id='desc-wrapper' className='m-10 lg:m-40 mb-0 flex flex-col items-center justify-center gap-5'>
        <div id='desc-container' className='flex max-lg:flex-col'>
          <div id='desc-left' className='gap-5 lg:w-1/2 h-fit sticky max-lg:static top-24'>
            <h2 className='text-5xl leading-tight font-bold text-left'>
            WHY ETHIO COFFEE?
            </h2>
            <br />
            <p className=''>
            Our story began on the roads of Ethiopia's coffee highlands, where our father spent his youth traveling with our grandfather who was a small trader. He learned what the land means to the people who have worked it for generations, seeing coffee as a living tradition. For 30 years, he worked in Ethiopia's local coffee markets, building relationships with producers and understanding quality at its source.
            <br />
            <br />
            In 2022, we, two brothers, took what he built locally and made it international. We operate as semi-producers with direct involvement in production, bridging that expertise to the global market. We walk the washing stations in Guji during harvest, oversee processing at partner mills, and cup samples in Addis to personally ensure what leaves Ethiopia is what lands in your port with consistent, sample-to-bag accuracy. This is our heritage.
            <br />
            <br />
            Sourcing from us connects your customers directly to the heart of Ethiopia. We ensure our partner farmers receive fair and premium payment for their work, honoring the skill and dedication behind every lot. You are sharing a story of heirloom varietals, refined traditions, and the respected hands that make this coffee possible.
            </p>
          </div>
          
          <div id='desc-right' className='flex flex-col gap-5 lg:w-1/2 lg:pl-32'>
            {headlines.map((headline, index) => <HeadLine key={index} {...headline} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoffeeDesc

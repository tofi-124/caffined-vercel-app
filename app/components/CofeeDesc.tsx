"use client"
import React, { useCallback, useEffect, useRef, useState } from 'react'
import HeadLine from '../lib/Headline'

const headlines = [
  {
    title: 'ETHIOPIAN ORIGIN',
    items: [
      'Arabica’s original home, told in every cup',
      'High‑altitude coffees with clean structure and aromatics',
      'Distinct micro‑regions and lots you can explain to customers',
      'Heirloom varietals with character roasters seek out'
    ]
  },
  {
    title: 'SUSTAINABLE SOURCING',
    items: [
      'Relationships built on years of working alongside growers',
      'Transparent, long‑term buying that rewards quality and effort',
      'Processing choices that protect quality and reduce waste',
      'Cooperative partnerships that keep value closer to origin'
    ]
  },
  {
    title: 'PREMIUM QUALITY',
    items: [
      'Export‑ready preparation and careful lot separation',
      'Consistent profiles supported by sampling and documentation',
      'Moisture‑safe storage and shipping that protects freshness',
      'Quality control at each hand‑off from parchment to container'
    ]
  }
]

const CofeeDesc = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
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
    document.addEventListener('touchend', enableAudioContext, { once: true });
    
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
    document.addEventListener("touchstart", handleUserInteraction, { once: true });
    document.addEventListener("click", handleUserInteraction, { once: true });
    document.addEventListener("scroll", handleUserInteraction, { once: true });
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
        <h1 className='text-6xl leading-tight font-bold text-center'>
          THE ETHIOPIAN DIFFERENCE
        </h1>
        <p className='text-center m-4'>
          Ethiopian coffee is famous for its floral and fruity profiles but the real difference is the people behind it. In the same high-altitude regions where coffee has been part of daily life for generations, farmers turn careful picking and processing into cups that feel unmistakably “origin.” Our work starts there: with relationships, consistency, and respect for the craft.
        </p>
      </div>

      {isIOS ? (
        // Special handling for iOS devices
        <div className="video-container w-full">
          <video 
            ref={videoRef}
            muted 
            playsInline
            webkit-playsinline="true"
            autoPlay
            loop
            preload="auto"
            poster="/images/cover.png"
            className="w-full h-auto"
          >
            <source src='/videos/ethio-coffee.mp4' type="video/mp4" />
            <source src='/videos/ethio-coffee.webm' type="video/webm" />
            {/* <source src='/videos/cofee-from-machine.webm' type="video/webm" /> */}
          </video>
        </div>
      ) : (
        // Standard handling for other devices
        <video 
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/cover.png"
        >
          <source src='/videos/ethio-coffee.mp4' type="video/mp4" />
          <source src='/videos/ethio-coffee.webm' type="video/webm" />
        </video>
      )}
       
      <div id='desc-wrapper' className='m-10 lg:m-40 mb-0 flex flex-col items-center justify-center gap-5'>
        <div id='desc-container' className='flex max-lg:flex-col'>
          <div id='desc-left' className='gap-5 lg:w-1/2 h-fit sticky max-lg:static top-24'>
            <h1 className='text-5xl leading-tight font-bold text-left'>
            WHY CHOOSE ETHIO COFFEE?
            </h1>
            <p className=''>
            We’re built on a family coffee journey that started long before export paperwork back when our work was simply moving through coffee regions, meeting farmers, and seeing how easily great coffee can lose value between the farm gate and the market. That experience shapes how we operate today: we source from our own estates and trusted cooperatives, keep lots clearly documented, and focus on the details that matter for roasters clean preparation, consistent profiles, and reliable shipping and communication. The goal is simple: strengthen the relationship between grower and buyer so your customers taste Ethiopia at its best.
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

export default CofeeDesc
